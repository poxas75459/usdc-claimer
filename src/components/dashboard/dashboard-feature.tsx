/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3RXDcsMSDL84MKRVAtaEkVcQWT2FeNyW91SCwPawxFK86VYxSqMeYNPzzE1aUKLyKefRrkpjP5TVRgzZVsPxAGAM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8LGnwFAmP1D6AmNbdJC4G5K9G5J7pn3G1zYzSafer5N5n9XK2Gq9qk7UJbKFpAVrDSVy1PhjsU9qZXYuLVGUoHM",
  "key1": "5vnuLegZxZ35w8mK1BXQxWX1D1acgv6BLvpte8CvZ7AuFxzbG8tk1b9d14wffqwQBRwxJxzqXpeHzvtUzrwh1P4Q",
  "key2": "4seSZbrporF7DtnXAMhfU1fd4A5Cf2dWFcZK9YCw8yqr3BA93K3cK9MKVcWA8ybxfn9ndAGNwnoXRqpjyL32fNXY",
  "key3": "5scDTpHZniCa1rNqMhd2P9iuj8TDEPu6kyaevkBvGtmDphu9yzrMKbKAp1mamzTL52ga2BdNychRRr2oxj5YP6YB",
  "key4": "31i6LP2xgBSYQ5mhi7ZqQ3LtxmZ4bitJ6T6iV6CjPWnC5Kz8tZ9dxVZjiZBWjLogMqgMEvB8AuV1dtSVmLPXkD69",
  "key5": "XDzAo8UFo8eQjSDWRBEYfYMVXjgxh1UijRWNePJQtfNkKx7vYiJWRSSafyeEvkyqpUvr6UHLsB27UQzBZsHDmuM",
  "key6": "5p9YVZR52UTzRT6zsJihpcpdm3tyPhmaEc9njCfYx3JCUzGhFuwFbyK5msuWkfTmWmGzUn1qMn7Le7dnp7tGKQP9",
  "key7": "3Q1b6AqwP6s8nAEcZpS29sR518y57fQxZrZ2q8BjBB9JM4YpaYD4q8JSeSCYyQaBsgpackkizFjeBiZT7Fr2nqNk",
  "key8": "fhkLByAW38BnssMqMXkDpoafweiMsjxwTghFZPDNA7RagJKUau5TBNcrdLnzfpKQfH4H6kVwKpbQoYm7gy87v3U",
  "key9": "4Amyr6FdC5wTosk3RD633We3dpP9MD9gEZmUvFsUisjXptgnivYiedTm11Lr5z4mJYDj6wrgcazKBdKiS97C2oLd",
  "key10": "3j7ogAhhRBTCTzCYC7Ypt6wvh5wYiW42CnX6TripVj7zkngiFeZgVvkAWu4JG2YWGSXLHBTmcMNUwdg9f1PvYcGa",
  "key11": "2ppPR1HEBG1kACD2g5oxumvktZx82gvr6CvF2Mrb8vRjGgHQHfwdz6PVyod92tTQFGvZPk8nsnnNiJAFgg95WfQn",
  "key12": "5Tj39wjaCdUJRRjC97UXoVCBVi3aionEMeRjkRi7B81akymRefLA7RipKAxvrYueX1bG82LKCDKevuDeMXiwDjWX",
  "key13": "3cbe7kmm5JLnpgDtScvhbTqx5UoHAwWtTW9A9bWcGRNwzXoKJji1MWvDpzFreLCvXNYFwXgjb1rzpASDPFV9ZAYf",
  "key14": "4FAJbW3nrQ66fAQbJ3AGBjfBFWqMbNkt6hMKBHaH1SAhG6TbMLEMwr2nkFXgbkkeEfTsLuVwJ43pPX8dFvfT8zix",
  "key15": "2bLAPiiTuMsShEVUP1WMzRA4iN7T8y6MD1ze7Z26ioWqygqX2Tmq1LLS9Hh16mH1MSjE2fh7fzZCLmeosREsp1P8",
  "key16": "4f99AMG2MDcgQNivy16mFzVsrqXDsanhXkMcRpfsYN3GvMsSCjBRxnahyDUWCGrGADr2h5ViQohN47bnUHYgNzo7",
  "key17": "3Vb3raTE6eDFmjhEFFcHxRAjFdGZNmbKG89Jj2duHYNoNBbNGp6VvUY4HzEQ9BZsgk6ySrqLzHt27YzQd1kLKyMi",
  "key18": "4JGrJWfmu6a6G6UtacVSZeAsWRAHDY17cX699SVbARscahBFrMLfubNwtrWQXdGXbiYNDTq2KkNbZPpfnTuTMHV3",
  "key19": "gywJKRKMtZdbn1HF9NyJzmyeHSC2oPfLYWoxuEZpND8TGmPhnCaZsFfLvCwucDbuAVUUz7SY7MAxbML9KupYc5M",
  "key20": "48K4wvFM3R4Vm5BYGqVhDf1M3ZukKMqUv6HG1A1U3F39BXP2bJA7Aweqy5zU37F7sengifVxUUhrbUZkyuSrm9gp",
  "key21": "419kDvgdjViK2uFHuYNeuRWBUWoogBSvW6REx6zuouWPmVfnTCNEM8ffzeLCadjnhJ1PjLzUgibLPni5J14Sbr8N",
  "key22": "P3JHfPaZqBG9iMp8ZL8YoetfRAmfhLTSt8wGKz9fLMzqAKR9mB9gY2UF1dmKcgs42wX91rKuQbPbSMmj8ycc7fr",
  "key23": "3v8fRqpVHsE7WxoTutapLyLMgAm9Fi7Xw6huSz1axMzzLZ9W1LGdotquAdtHjxADY2GCNRcPAZdEenmG493R942Q",
  "key24": "58Q22z923JdHLLqjiaVnS3UHbhRUymPUHRoXsymvpPHpTy9UU1igiMSPTJiiDVdU8FtiyeTLA4PNT1ZfJ5622Qmp",
  "key25": "3pqJEH6Q7FUYbJKXwvYi87nq2MrgqG1vsA3toy2og9irT6fnt7u7FxogfBN3f47tKQCmsDZQ44nUFCRdRxLXGtVs",
  "key26": "1zqotSdbLgYrEtAJcr5t7Tqdu4oem1CpPiTk3wxvvgcQtfK9sa8DNhAkqqTZ42nqLRPcwvMfPGL4mEm5aXcxg3f",
  "key27": "nCEhkp2Khvdw3mxHeh6tofoXLeNjjQEMWQ1s7YYwcLX5D1EpszD6mujcAben6dDzdWKPXZF6Wchn284CpXPA1yG",
  "key28": "tDw89XhiG7hYH7sNZkgdLeiDcwY3gPjMRH4Qkd47MustChNRCVc1iUoBMgbzscit1AHicx9pCCCodKP2jfoV3XM",
  "key29": "42MVtf5XHLLoc3qqZLfJeTXC6km18Zv32hczRH7Qmse5wCPErcKaATHGgMBLgEVYSqpRzUayHaKGVrmaXTuia9cd",
  "key30": "7pn4fXbNDFR8JrWeiYhJ6xXCWa1bTnevACk8rPNVBGVPvu7nK6jaYhMMoCeHzhkawPBFfBSiAP8QexdoV3Bb32F",
  "key31": "62dDuH4rQyRbqQJTu2Ljy1rwu3376SjTQCHA9vRqw5XeazvDgZ8pd3wMzRpMLn3GqqAC6spr2iAo6g8hZdeAX5WR",
  "key32": "2HiET6aaBcP5uN5udWJjupbmUX8KjecQWPeod5dVUpw65yJrYdVs5zYxRUXAajJVPvuxr5pgpLqR1iPH5k42jpym",
  "key33": "2yTgA9BJFvHh4nzRwds7PFj3uyNNMcMzM9JNZPpUL11QYx5AKChv9DmJDYWBJ2oFhh4KF19CSvYcVyFKNUjv7rg1",
  "key34": "ApTczxLHkpM2uUWA3QfWhp2w7J9cnsHi84VUwiZQ4PK6spRa5vHpiQBo5Nz4Vm8N7K8JuDYFLxDau3hH7A6LywX",
  "key35": "3SR88U8wyaCC53tp2yZACV4g22Fggfh83jtMZKo6QkodR3xvZccR2H2PsXi3mT2fzTgYQLDRamszZ185Ut49TrUT",
  "key36": "2wqQrKuaCA33RdreVsasa2Jz6jD4VEaLtv6XfKSCUhPCPYhnoeWSY9VEEybHyrNLqszQGmzchBteL3apDZUvniYU",
  "key37": "5UL1KLAT8LFd2Sqg2nSvotegtmkdD4zuEckC6Mxw88Np4Q58jRfr7JTGKGYedYbHGzLemx4UgWio2owUq8bmFbtY",
  "key38": "3s594HFWRDnF5i3YE4BMe2coTmVrjdyta1uX9RV5LkCSMzG8wQoxtZnMoGw9BtFWbyy1TsYgPvbkW7zZd2znoUTq",
  "key39": "4HpJgGnmVPvJJQ6MSyaDAJKrkjPVJfuQY3BpGueapubLU9huD5HRH32FYYTpt9kvEK6pEWqYritZo2SLnYcje2bt",
  "key40": "33cLVvbYTpmRNFA2b8NhEbFptaTyfbhhtJRMjhRam2rJqU4jVc1HRaebfDQfDCaaYv7ufFAJ3U4Upch3rnJpg2UL",
  "key41": "39HSDa27Ks1HamFge6Y6EbNgacrYY8x1sbLaUfmf6BCUVetHb9Mf7VVqygt1Ze4qUNNauXvkLLExrZ2YYmjm4CvP",
  "key42": "2Sa2rBxHXYxExrvYTX871sxEfj8oM8egaokJoZtwVRyHzmMEXdHJiBh4cCCkjQoTs2NwQS3Et89mVwDBGDePSQ32"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
