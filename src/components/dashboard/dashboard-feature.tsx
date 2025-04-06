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
    "3XSd7UhUweUhCdnXBNgMrWRQV7b7bdSUHxHoR5cXjHhRjm48wrJioEwtnmKaHbWXa6ecVxguqkDrRw8GRfrNrYgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DwEnMBrHdCNwNz6rysGyJsKhdrKX5ySbp5RRP7WD1544uKBQ5b8ggifboDkZQrNqbeehJnu53yKW8DJgwTcRBJ7",
  "key1": "3vsyqLpSLo1D9YwmU418nFMeJtwudHaWqzbAEneMg5MwQAg3BzENNMtenUR3XSbD35f1DEDd8u3a2AMsSYx4qmEB",
  "key2": "2PTieJogBgpLSZnqdMBQ3UXVaYyP8f9qgDvYenNuRf4ugCo6N4is2QRJ4kiPwX9xJ7A7wBayPaf3hBoHaWCbVizY",
  "key3": "5u6Sr3sZ6LoxHWhtTB9rFrBQCgiYwbyz1gQwHYgrL1uA9rrK21jyZNtKa7QD4fn3fbz1S8mYJeFYiM3681EHuQHo",
  "key4": "JoLpz2vuUJu9S5uCj4pvBB7xPxZiNTizW8pecWs4H3KHtHuYkzVWMZvFdXqS2dtk2RNpRwvdaDSsFNC2h9NBEf3",
  "key5": "3LpBy9teCgfz8WmoPhiNKq8UGeJH4Hzv6rHMUAKxD9z3WhXrKRBSFpfWgPe1BAxa2efNJACu1b6dN9Mx9TRidKSQ",
  "key6": "Bp8T94NnrVSdQ5MQTuNkLBYyhcNJ3PbBhKDRkJ5UG9ckXVyjU4NN6yRv2ck4z2iNbKzJkEi3u4iA7MkGbBMcPfP",
  "key7": "4UxX2QsbgvN3BseLPprpyBJGM9xDHtvaHXNiyejVjAGz7J95cQFzzke5sREMuNFKMuafXhmRTBdpxmvVYDhdtB95",
  "key8": "3thyxtYu1nqbEPn9UGAhEdrorpWnHpZ5thxZi9C477eg7CDxp9UBF1EJvG7SexmGYKgTMzND19gKr2gkxRECHrZi",
  "key9": "2wv8Ddj75kwJ9hZCfThAMn6Hr84z2BKsy6GpHWNrHX4j8LL8tZ35VZqHnmKbWLJg2jdeNSGr9E16KS3kgQhtfQmB",
  "key10": "2eJQwhgs4bJT8xmWpLFVAzrxzZ7yAPrCiKhc156xbs58GTs5tAV6HMNCRRKmYHBPnBh8T9JRPWGBHix9TVZtRfb9",
  "key11": "N5oZfefWkNAAcjLHXzt8jFREpczMRSJgPUo1LH5xxbbJxxNenLMF9gXcnYLMnabYBbERPNLVgozdB6d5CbSEwHa",
  "key12": "2qQvUXjDcS6RjWHEjpYeZeDiwPWFzfgdt2sjj523ex4J4AwYZWhubktWRuMWwNgyefHmGY7GWVDpaPPBKjmvvjgp",
  "key13": "2ji5SM3P4LrvZeC1QnyfMDtw8j2vmePV5ryuoK2xsJ4XKSgE4xUzM6oBj9ovsTHhuQexyjNCVSUesM1vrNeZD27u",
  "key14": "UBJyjTumDurMvVfFtvRU2FqTKE1gVSFzmQFy6iNK8AF8qarNEhyrWfeaLFy3j9i3qKXoJiW7BhpgGatkW4FzHUY",
  "key15": "4DqxEVH4Nj8jvrLKi1kEmUNMkhfEqt9MsnX1uUmNQTpcyvjQDZVJzrMq8jfrn5kTUzKDhmAP6L85Tquj7G3AfmQQ",
  "key16": "5YhP2bNKQvDYuBQjn5jA3fAGS2e6XqeGyZ53VqmK1YcS58iACoUYUmyty8hs2wqevL2ZkcGuKynhDQYWq1L4Q7a2",
  "key17": "GXGAUsZRch2BiCKDpLBqxrUMGLYBqK9fmsWbtRyfpCteeJR54JijdogbQkJCdW5DgjuYuzwJSEGQRCB8VTBrSbK",
  "key18": "5hrzbRGrE1fYmp4KSfWeh2Qk7ZRfACRneYyfGWMLivJdMCo9NKym2aqLK9XLRsJX8JU8HFKv8egoFe2r1U2jhXYi",
  "key19": "bCioeWeW5zsYfCFvRRCnRs94sgCwr6zGt86fzjiZZAzDNE3Sc26XwCiuUHBJ91599mZtunP4Pv5PwyE3r5MaZEv",
  "key20": "24kp9ZonCUb8xgKoMERGfUu67hPF2jU5KpjGu5cw9qZRrttJ76m8pXPPV1opae2q2DaQ2zkgBswbpcSWwjkH8fJc",
  "key21": "53vsHcAyaZVja5iMmiT5aW4aFgXp2hNxUNLmRt9PsnE6Kvp5GjswSpDbdMxRwYsBaLTxPEYENk2eP8ATpve1X2TC",
  "key22": "4GN7PS7rA3ccitaqUy1GVuJtu6fQ4bpLzVs6pmb8ock1Qyprhi5UT6i8T6JDYLi2QfSts29CY45oKtoN7zNW4U5g",
  "key23": "3wZ8vAvupn7aovRmNeq7djawmxzqLUvZT9cbw9BjSuFjgisJw2S4vEmRuCuko4eVpx6DZXTmrQHuMLFmToFhrfAs",
  "key24": "PdFBWMJ3bW9DNZSsSwtakGxdvaQ1LDfRQMS8FQdGZHwCh3CnDtjvSkpH16ohrVMnwKYrUhWKxkbkfUoNFt2k2H1",
  "key25": "5HiQM95jEp6HsNVam2cqd7G5UNyst1MdHFUyrJbHxRFci64rzeR8vHubVFxbf1eic4EMGEtoJx6gVZDQiBZzg525",
  "key26": "5M5m6scC4yDVoLtxcgfooXuDKcevVaX1BDEFoq8aT6v4QS4E7eniprfVZmKJ7N6cJtqtGLFGHWVWwHVWgxcNx2HB",
  "key27": "McanTV1JS6yvNTbC2XAR9Y48FgkKjRCBU64kUwAbtHBLGaB7kL9hbXKewdHLd8T55AjofRtNxk9YhwUue4u8tGE",
  "key28": "5vhXGNVqpEPjwhMTALq2Ap3PYoSqav5RBcrYmy1jkZzvPgdgXwYwMPhnPaNrfj6h8fSMm7Z4n5VPUPeYTgfvHPXK",
  "key29": "2MptZwuTWxVmtXYL7LGmi5JWdCCdfYsNDernn9pC245SkexA9JWFCHmknHPVu5HvgQGYP2WaKNZyqjCrBv3RRq1s",
  "key30": "ehiLLkmEL7Tot81RvSAGBNkRBwmNGKwKJ4zMiBYx61HJVZyLR2ZxDN1EuezkUqxEonKbVQXYSGQ1NJq1iwd9sdq",
  "key31": "2drp5GEtU12hCt6YF7kJKtpRwGwpSFeoL4NBEz1vAw8UG3CVc9ddSjt7HokBTLfkp7z135htLRdXNYnr8A1VWgs7",
  "key32": "2TLD3DULg3euAyvXJu5oPeudR18FC4hNgvUmrxyvLjQPAbfh6tiDhj2VHbW1oPVdZsh7Uut45kDGbhtWSPezxbpr",
  "key33": "5vbnY2e1ux3Cfvifj18ZFJPX9PUhjmNpLghaEFU8V8fJcHQyJrSybQ3z2aFZ5LNgSWdUwmxyT7kDFacKV6o9FNa3",
  "key34": "g8Dbi2e3dnpQo2nMiQUoTxfL6RXAZgFjS3hfQLNBMcKMGUzKx6nCYVAxFKtWwx3yaz7ert6twSPo4TXfeCL4miG",
  "key35": "4BqSDKv6Er1bM4RVjriXtCgr7cihpmbbv7CDpEYsjmNGtjfCtBDKA8oyPWb2My9Lc5QXxaX83sgG3MRympuqPesQ",
  "key36": "kyTSTg1i7AfCLnMji6jN1MnMupZbQEVtpcGERiUJM3TDnW9cRTpJdADBQTzHrhJBPfLUTJtwdUcvxFvaaGPcu7a",
  "key37": "4VFPBWN8VAhHXD2rJv3nJwY83wUKJZHkHhc1CoZp9Pme1aQyW2d69eY9WYjH5LzEgZy4AgVmMQhBKNT3EWQoxkZ6",
  "key38": "3TqgFqxwqEvCuMtQppXX197htpZjdGkiMSUeMJLuCxozJcy6ocbYb7R1DufEPSqGb1KBnMSUcyivnCZPUyGdbvJk",
  "key39": "4K3FxjVV4bV1hvgE2bXVK5HkVfagX24HUQvyoMc8f3cEsP5tu3ZcmEsSvgBFk2HppbzmzfMmgq9aooMgHEE8WwBJ",
  "key40": "4ABh4iNHu9NMzzso8TEuNsfFr1bpNSzrzKCKvdLXKsasRm22NivfqacGN9R1gwf3uWauFDXtPvwhdgvrqrDWLj5o",
  "key41": "36mtbF9XzSZ795DYRKFzCViznq7bvHuYo8b4wgdXm67FrZ8HHTHa716bTekDLu2uuaUHC7jAWAGfkqWMSskk45dc",
  "key42": "2vfLwBP9aYtK4JCR2jo5iSnMyACeSSQRZzSbeRynCgsQZyQevcxei7p9H8ZtrPtbr3aWJscrjpYNeq6uWDejTAaZ",
  "key43": "3ZEm4NqAr2A9zvGgS3B8doig8L6j4cjbViTQHsUAnCYxutYEL4ap56bQMvUbEBfdrsHH9zjtgdbuhESUPppz4Ymq",
  "key44": "24MbNwpwuqWSY9q1pQpXvRUSXDiAxf7U8gLFyV4K5KEBDHEr2FgLyrivso8JMhvZbpPgGWbi8EuUCEH78kA5wBpT",
  "key45": "35iZrC4t6UmdTDd2PRf7ufzTVgy973yhE6zDKJ21mAkiXipHoWBcT8dWYmP51PKA7evTemc3vAjRg3Y6CjfSBD8A",
  "key46": "5Ryac79stHcXde8j3hLNymFRHbJfD2zs7Fixyx54bsM48F6JWaPizAY2468uvsTE3KZ15cfANGMxc9pJUY5uMK56"
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
