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
    "KvvhMebqg29oQ7dcaAk9N4uvJkMMhMecPAiAF52dGKDD8pSfardzJ2W1Ge8qZi44ufmDgQpvqWTLv8cgFw6oizo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53YDnj1zndkv5RgpagS9XeVahe7N2howsaCjJrQjjC4GUv81E7SjPEUA5a1MFvE5gAaS8gjvSnmy1rJHScS5qc8n",
  "key1": "5bJBdsb5Gbq3UCAD2kQcW55ngzFo8pQyUjzjQgu383o3v8rT6pfzt9XN1EfVk87qy4GwRcZZNkfnuJdMxEWsdbxe",
  "key2": "2ZHUrmJ7Pt9goeRSWPqvQ76MWUn4rSBWxsLwJGCxyzfEPysPkp67g8WMYKhLa3ChwVVhQH7yQtUUN98TJ7RbKcsw",
  "key3": "AeBM1jhauLoYzcU89MPhNVzndEsQRaN6PhDyCPDRcqds1qGGYTTPk2jiv7Vjkrtn4ctvnxfYB1vqeoLNDotoQZL",
  "key4": "pdAPyMpXAqPGEWi4fFW5S3ku6KkUE8ioYo2YxT84FporqBVLKRw6Nq5pv9ry9FrwLmAToqvWCSiFRqrKCSFM7Wm",
  "key5": "35XDqmBpWkc2oLFKnsjakvymbXCrG8K18r7Rtu31xoyqmiCfjNDYa1TMEjmbeTGkLNoN1YJP4LwbvHK8nHvX1ffm",
  "key6": "3d3TwjPudHFMNozE9DpMsHJ2E4zQaZaovUDg1dAbj7eeYTZ1VsTdnke4qjqbJRX2aRFmHSCM2RBin9w1DGDsqadJ",
  "key7": "3LFzpKCHu2theVNYGcRWbT93nSUiY4EXFvq4q1UXxRw6FaPwb8EAzNcAtKgGitNYXDUHL3pquQv3pGYXSt6Vfoqa",
  "key8": "KvvqBVCuSERoDwjoVwPS72rRWFkEgALpeJSo9BXXhpkfhniFbd9pcyyZzf16YkYqWDUFEUA2goUCy1DbSdXCaLs",
  "key9": "41RGeTiC7D7uxQ9cT2t1Czab93DV9trph8b6vnaYUULC5ZwB3y4j5Rr5dC7mkmhvg4EEzi6vc4Cu4C2FCRb7v8Z",
  "key10": "4694HFd4hgHFztoMyqYJyZJPgMzTNovs3m1ELpzEmv7oh9Q1NWRTYTzP5EZhYATuZXFDx5qxkzrSYdxhkkiGLpky",
  "key11": "5vTY3eCjjB4SxzTdaTkB7NafrPVvz2f1FTu4erFZMWMcgSx885GnJKi8GFegqKXjSaTD7bv4cghHHd413Hyi3P8N",
  "key12": "4QqqnTqZ2P4RSQKQRanGNYY65KWPQy7gKT3KSFvfRoyeMyfFBPsytUv6Zhf8HRm2VWWxbf1fU5DpsxSgf5rHHkrC",
  "key13": "GFrkpqf7gBgeVXPDe4LbSULWrQR2ExZZTNQXt9SpdqTYrLXtgZGeoUnVb3ZsaQiAZWJCMMRgcrNN15N9opjV1uD",
  "key14": "4CJceZehA52mDK14fsgT8sSmAGPR9kT1U6wGLS1tHMnQAwHHukrzvBP1v55Kj6FiXyLxwyQ86D5u7aUTqfb5KrSC",
  "key15": "4G7X89hPeqj55aiZPFu1TWDYLJ2pgdUGywNNkvP3jthpNhdkmH7dyidmszSmEoiECVSfSAJsJyfeJnhEL7VZfjag",
  "key16": "3SsGimKmmTSN744knaSnmLYYyZhJEGhWpTqycYMWSnyCXr9DCrciisn9s3jYEnVj4R7WYZQmrTpwhCjLQh6mhnT1",
  "key17": "4c36e6xwWsFDWfxx2ibD4NVrhf6WPWNkT9Z5st9dzAe27qL1DBKcYhcRA2XLwtCpjc5YiLhU9z3KuoNZhjBCh1nD",
  "key18": "4nPKEeFxkFExYf56C7yyN35y8YzNiWxtcGiHZT4T1eQaNRZG9FTXnMmxz5fM3cNCHcte6cWkZ73UmWVSqxhuxsNL",
  "key19": "2B3mBfnTEJubfNRQqXbMGQfe8zYaruPfGeLgcXUXDNqWUQ57Egp82EPNqjqweeMC1FHo2qMkp3QAUjSc4grL8BQA",
  "key20": "3pvwr6s5gF1MDuLrGLfeH3vpA44qvtzasQCs8xQoQUHodU9FJ7KcgjUX46kyytSczE4Z4WERRjGehf4oBQsBk1Xr",
  "key21": "28PyWXZjNedpT23tZq9pRhaZbcNKJcwP76CRdABqawNxDKRioMqG9xZkM7QjR9pBZth8toHLxc8sqVrZNp9e2tt3",
  "key22": "4e9iR51jeaPYE5YLHgubwWe6EkBuk2PRyZ1psXGVNqKH65SEQtAtiTHF8cgGgHHmutQaUESa5krezwx2LrHF6whn",
  "key23": "4wmLnsWjBiQJGnCZKYVbB9TJPxNcf1hgmiyeWnpWCkgebDYErgQeeHGfFXiQjEEfouWZinbWkPYHkG3afu1zxii7",
  "key24": "3JDK6rGbhcqBoKzLbUMe7WoSY2oHYijPJH1JhALChwLzyUJA6ZGDXW1SeuKgGVWZaq8PuSVGvqjsjwfsevhyYPap",
  "key25": "pVHM1cF7CkeXqyC4uL3AokfXQRj5snEVTwqBt5xwzbdE1VLphHPxB6TrMCMgsSzY3AwM9pFK1MAb7Y6nq2Mu7Ry",
  "key26": "4iGazzzk8jeHgBoJWtB8guMEKAZetTJRC5uzxeQAbtfiG1H6RxyBd7cWTMoayqm4pMCzEP6v4k2rqtXJXELEpXex",
  "key27": "3nWMgUjKwCd2Y9wygJUX6Xrg25hGVevKWP9GZGiBBPrSkTWdSQTemebXqWDFqLJnyq8fgtGqQ4WZtb3fHCWpCWvb",
  "key28": "5f4RCHku4anyvrGKcG6t2H1mhoSD7sKBJAodt5No2jDfzLgE1dhFS69XpWuo4iwTswXcKrv7Y9t82JvD2RtRnURc",
  "key29": "3PLTi753v7Cu3sA1nT5NDwYdBRPFRKyfDp282WbRWT8zbFys3FBPP6uHYoUijpsUD2Z7Xr1vWqGCtWTksCQ3DnCi",
  "key30": "xWtEBPz2LXpbPUcfv7BtcyAmJ79WiHzb2Bk5kyntuD4qd6ww1MwhczJfjZ5kz7B98yNSxmhJh9JusYHnLdvMb3P",
  "key31": "2CzXkSnNaWWoReNozjivEwmzyqDQCsyYEpiqL2DXMurUJ6KG1r2KT7E9eUsdVXVxWUehzaJmHF3Amtcj7STG8k9G",
  "key32": "34gNHSBJZ2w7Cnx7nkaEtWrUj7VPSniEjdNccEqktKvaxnz5toNarHUY5kQkFHsvkZmmjYkEpEYzHvTcmhRkEhv8",
  "key33": "4Y5x1BwXTVLgt4duvDWKiG2Rxd1G2VTgoeyoGQ8jtZCyGPbzovxJkvv5V8Yt9pY5Ud2o5pcEVseFLeucwk46a86v",
  "key34": "3gF5pJiAE5BhhmFZ4u2A5EtoUCxFFRSC187WDtd2XqMtAa1dprJaKDTc7qX5qGrk8QG4bdQkQuKYUVawPr5U6Uxu",
  "key35": "3op51oUX5jzJFdReoVjmcRGT3XKjr6miTibe2YPrmGWYPbHCFrLQE6Pi6rdBBgcYdsqE1mghkFWmDfj17up1fcQ",
  "key36": "5zivGPT8p3phrYFBZaytuXzmmL92xPMKnDDwc12hTW2gXdzu2W9p6etPM48Hjhx3ZhS4snche3wHvcmkvw7Lyp9H",
  "key37": "27aUd2BKJTAMtXqp7xLPeTmzpPKAZx2F4HaaomRKwgo7junZzDX6Bcx7Kz5zLGmrdSowSBvHxs5MrLEtcHEjS6Lz",
  "key38": "T4sN6y3MsDrEgFyFiTorDCAr5w9PE26t847hvRboMBW7kYfWbPNurXRb5DCtb1YSUsQWuPxCSBKNr2YnUoYuTgM",
  "key39": "2RPpUd2EcUT2E62W3x2K8M5CmEZwZ35hjrdZWWSRfRziw1TsP9kCLArEdLcgpHEwRcPbZ47qRqqziXN62tmdYxKn",
  "key40": "56gs1qNuVUXmdkK5A5zfCBq33G4v8PN5Kyb9gEmK72HmADCEmmJen1hPfZ2RmLYSnWuTjdHattDMCs9UEWUYxA5u",
  "key41": "48pbqs3YLy5cAZZjRWpjT5FD2uyF9AVKQhw7WzfsAkYMpPE4YXk6aFGFAJ9EBRmth54f11d54KtnPnVEkSveUJ9F",
  "key42": "2YaQJNnpKKndsVQkUMtSRJNMzUx2jZg3ULuBnrdu6qGLFNw9cYfpGqynJGybHWhTYZ2A8y614HCQndmHLncN7k8U",
  "key43": "n8aRnWbXvHfzYXybSfGDLLwHFnHMJN4KvZXMnZPyDztsKpGo6KFpj9rRjeaRUyBVqD5uEXBu3n67nyTregaR1VF",
  "key44": "57xEDw7bEVByg9SZzcfJTXTjU18HuPwkoUfLnGJZWRxzcF8yEWm7Yto98SV7MaWrcMkirfqzg6fH2y9PKdfnASTq",
  "key45": "32pTs2H3SQPTJYbhMorb8UwTxDVvi1588Cjni2a8LeBrxVw2XyNAHa5KLmk2JhJRmidjEPz9nD8U232QLXKiL2GW",
  "key46": "4yJ1NA5zZ269yTM2bmVAqsmuYMbiFRWmz6sgv8pYwAhVmQ92MqEHNzAn9k6UMX5wk3KjyixsNfjb2SGb1HydPo2u",
  "key47": "4mRqvrX8RsS5aGi2g32icvdcSciKUUdk1fY62h1gm9iquVTSPUZEUSNfemTqbDKpJaBh146HXD4ceKAdzbGf464U",
  "key48": "4TH1G5FVMDnaU6wzTiGX95BFePfSiuZ5NEyTweq4kBoRAV87DeYf6yU6tiUwg674xpHsNkuJyYZvcGYL8HaxFyR4"
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
