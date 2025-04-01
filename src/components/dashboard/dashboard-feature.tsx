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
    "dpYRGhRNp1CH8QFBqwBuAou7r4EA7NaKrkyW2NUD7QZdUV4CDYZLxtKHjCcCGBQmtowehBfs8V9cNU2ZdQ9vhAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aSQigm1RdQnfEsFcenYTqqPhkdoNKBGDTP2MkyuvBijb89G1dvco7KEJTuKbAodCfQXMzam2Csj4MmhDKkeK4mK",
  "key1": "5M5cavsf2nR4LMPsHbGRXe76m23YUCL5ukrk1r697vzsrRgufetdNw2kZkZQTmoCYwjNHsz6oqUitAM4UF92RPmd",
  "key2": "5bCw19mzE7MLGV56Ymnh9yPGQEz4JWqE44po3LXAR85ij3twfEcv3m5zyTfteVoqiAZhShfnpaQBmv8RiQfrCyF4",
  "key3": "3bYrdKoWXC3SkL38TtVgFCTTWDdk95kDnHQ6v7N53kD5kXDcE4T8aMQPkxCqAmqGdhoCMNSEssPoVhYxZV5aj71Q",
  "key4": "4ptPpLVs5dE4TLA8pvQ9ZJRqm7ViypjXr3phYCDhfYt7xoGCSCZdApHXSCRhd7eeBiaYzB5T4TEVuDL7yLH3Uzrb",
  "key5": "4dgMdsg3tF1BK3wgWbFFjSE1BEZy34CgNGVzAeaGbvPdkzfvR2pihfspiQfQDpxSWDXH38yZzMqfb9reG9txon1h",
  "key6": "5meB3gDJPBWE2Bp1uLKKuh7TkmJeaNBa8Y9BYd5D47egd9TqJeuznRvTAQ2uB7ynp23th3Gxa1TkXKpMcikKCPZ1",
  "key7": "4EKaDMmCGbaGY5R9TGr3CiydfcDi4YMwU8iwNMaYBQ9hdViiA56bxJSpMHGqcUhFU3jvLBc54bJ9qjBk8TJHJB3z",
  "key8": "2DGTxSvQS9G2PYZxdVr17ZjQTekoGHY9F8C9HMY3AkekJAq2UkWkN8frTb1RYeUq6QfJE64cCwhZSMeJ6hs3Tqxg",
  "key9": "xXSz2TEm4EDAHj8a3aUvsaz9a2EJECV9mNF9F1FfR6GrMz5dLvhSaWw58m3Tb7o5zDRXAyccvpeckvFpQGe9Dy7",
  "key10": "71s5DaTnhAM26vyH9qir84JjEmCAKxqZEXCMncN52GNcWgV24Cfb2v5G2TwdgNfJYzAgUEFqLk3QxbxjABy9dmD",
  "key11": "5c1GDawWyzjNk5Qw2ic6GBR1yKTiFZtRaCojPzQSNGDBehFHdMSFfcdtXmw54ZKyKULSpneqDXfRkkqPiWmJDynv",
  "key12": "2VXffETSaQWFthMPD9MSsEFCSCXprW9c27Kfx75vjDjwW15atLbUQsKsyrqwm898zzyCeE6DoVZhBcJeA7Jc3LMd",
  "key13": "2pWpbdnsanQAmkLDyf7dXTcMDVThUs2w72Mqqgon2v3ESXQWnM7Co3KZHJ311Um7LL9FDSR2E4ycJyD2yPPo1xmg",
  "key14": "2f3n6KbSCh2zmWcHABYk7vhK2VLZyfvbPKSsAGgniumRjoZfANy7gM48R5NKHhmF8cjDQYSPSzuaW7NCmiw8pxan",
  "key15": "5f53JsSzsjTgkWpNCCVw8n1kPKtj9ZVbtrwx936DikNo4CqU9Kxjq5eQqsLqCo7js1YvtkwaFfKgXnYnBu4UT8jP",
  "key16": "2uxgD88sAvo6QtvewpTjyreVtifTjRaAh8xaG8rbdRPrLWu9EjPx1jFCm4mTmnTviahmAo3KsRfjcHXmZ4GzdU5F",
  "key17": "33kYwEziiP8trEHuhETzSeGe3xZiN5eD6DCDJVwRDny9VTPfJXLGC6T5esvLH6zdJCq76BSsK4GZX32KeP5QsTkH",
  "key18": "55ZXPpgHexntrVu2zC5VKgWwJLhtveyLd6S6HmvN35h6duj8KVrU51ij3hhmAtNcQX5LchRg75Xqz7b73xTqdU6Q",
  "key19": "2BsMbSDDxwZdwMEojw93rWcHNBbXrjDKa2EUuaiZpNmJatNTbD2b28KLNcgH9CYNrC6UnxpJNURqgfTHynqc41mr",
  "key20": "623VDw3tbg95nPDJ1ogghzeR4LCwHniWVnSPWUGdqRoCSnhUnjQ7V9DqDKaHNUnbsR7urp5GDvVUwegm8LkYHzCb",
  "key21": "2oFQMGMmrKUfdio8mEYtVL9LnuprdozXctyoBXUYVQoJRECFA735krxpKUyaoVQXgPecd7gqpP2Ghf78xiw4WVqc",
  "key22": "3aA1msxs4HFpJgefMD5LPrwXvRPbGg1uAmBXytNneKQfeiArY847RLn2MKGth1SPRx8rpZMrxS7RAHwG99bmtc72",
  "key23": "5dLkdSJCFW3uPYxDJQzSftzFVgUx6dyWQg8ntDirCf47Xoo3t1cwDCnfhkrCPcHUw8UVauqm5jeh52VAeReMnTP2",
  "key24": "5aBcFUDz1TtNWqZDwhENgMsYeeJfmo5koirSFzmWZhzDZ8Vo3vxtuiwLLjQseW3TPNKE1DMKmKC8poQxRxe97bJ8",
  "key25": "2k6qXLAfg42GWFh6BA2ENwvmgzBRkopzukUcvzxiRQg1yzCJt5KBiEZJ4u6pdonrUhPPLeGPeEK2hh36Cz2rfyFf",
  "key26": "zVdc5ZZDR9tr6MM62nt5AoSCAHPQi5FediaQ4oPD37xePn5WQxJHYdcV1J9jkWgGVLopW8qoqxfepUvFtJkH1sT",
  "key27": "49JZmreznj2z4QoHFJdZxNbbexnAkm42VXKPu4KF7C7H4eTmZZKPJsAUZzx7LM9yehk2EMaZsdmTouKULz5N2bUT",
  "key28": "5ahYMCRZkPddCkpN2o251QjsMWkXY6NucRAdzaDCR9WaJXAK3aFAxnXfMg2wsH2MtYHe9kW1wKdmDtzv6QVcP5ap",
  "key29": "2LKVeQCrNNMe4rM5JM4haRMtQx4gpuL9ZcVAfTgYfEe1VaLYvDcYRbwDNNrnaQajzyy4wXYQrkBeDM6Bwf4rFGJS",
  "key30": "2K9tfGLuYCRBZKc5E7taiCsU5zPsEPGgSUfctpgM8HyakkcG1hA7HXZ8pbn6C1gn7KzEr9csqTpqMrb2Yeh3vhzF",
  "key31": "61DEn6yrVN5ABMu96YVRrC8arjCtMD4V4q5nkGSmiM6UCqCTKTyE3ntD58M33FeyCmZgT9SmBaFiSSLrwrkdddUQ",
  "key32": "2nSGbPoCVwXJSZo6d6mbD3VTZGpTYv2dRhNNkPzjTwk2DvpQVY1cYFfdRGxRPVaY8m6aG7XtAbWwVVdKaN44D4G3",
  "key33": "2wVaz3WSTcBceDyhrUsREEJE2ZWQfiisWBUaPDdBUW3hFJaKR9xGcbnVdCvFYp5QXbEiAa7rQ2b5ZyhcmZMquonv",
  "key34": "5f3sui3pRRpt2m7gBXN7EyYgYkE6SwswVW6ok3Qw4j8mVcyV5JWSSJfU4YjXvKwTTCqXvn8DfrSPRucShhk4vvBH",
  "key35": "2UTirakwQ5MMwdCQMFW8oyviY3SjyALmiX7VoXHjkWp3vwxG6HevmkywLHQuUeFeR9mDZis6WbxTR6zR8SiZxhYV",
  "key36": "3AazQrWKkzeosdZC9csMHgLg422Z5ZqQLA82Dh1z975iTUBvgaKNZRmrTDkj1opYUNQcrNdNwnX4okuBFcgw7RWn",
  "key37": "4T8cibBgPierFbMe6wEB4zV6pNAcN5YT9GGNMNZq84KFE5soSfB6dQn8rUKTVEF8TDspB2tkt35GhB1p4LfcpjHs",
  "key38": "5izxoU17SW9P2of5bDbFAp13YVKrto3hh8gcEe5916TVTxTKCWyRCjWhkUpFUXLSpVB91Wbd1ZpjTVmr25hkks8n",
  "key39": "31Lf58mmfs6ao8VZMmNv4qR2WpvLRf7DuX8nRGQSaVwcResJvaMiEG1iejdWaqT8fhPXtVJSK8UScmCh2CrjfjdE",
  "key40": "2isk81AijUm9VV44gXEJEjZY8ZAQbY75CiSVJogLJHSDZbny3Ey6GBtBcUwkKhsuZxXxruURobSpaQi9MTg2eAQX",
  "key41": "c4n4YDqEj456BTn4xpjdKSgEd4YbjLJXcnrz78heBFzTtPkk3qRka69vpDbwT2hQSkcupUGXd183EyxVjbqAyu1",
  "key42": "22axAVq7WC4D5pa64zySUQAeSw54oSMHRVU3DKT7g2g7r9UHw9vpUewreELhJKbWXnnpb9VK6FvefzmCM7mjmu9H",
  "key43": "3DWSV24fSibZyc4BSb5donDWkW5oKwCwRG6hqxteyXrMjpHFjPhBBJcJyDgVCpfmHkDYwcAkq4Gei1oFGMgTVSHZ",
  "key44": "3thCJa9UPikMY9oF93XJTfJSC53yG2XPaSemNf6FPFagwhvtY65GSEjhsgegfC9CJcEsNoPD91Y4xq6ukWfjx2AY",
  "key45": "35cGdDmdAMwF6niNodQdjYUptdTJJubhihUUrQfeCbazR7YMYb7dmb9WHBXmFjgAJcEBZ5K2bk2yMiJFyTraHdH7",
  "key46": "27Lwsmr3PxUTWwrjuiZ7mtjQn3DpyCJqHPFBxMyAC58r9z8vy8GYXc7oF3eRtZgSHNpMfUiUTGnvURecXrWCSVy4",
  "key47": "37i7S1ZRuKh5AFQUcVEk4pT96VsgoUqbVthRdzEbijn9m6azS2Ze7M9NUmPb1f8zEBYJd4o1s63B94GsxAhLxBKv"
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
