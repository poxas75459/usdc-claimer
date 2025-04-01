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
    "3h45HbPRPjgoGBtxfJcziAdVSH3FAY4icg1xcstCgL9jNGQP4XYJzveR3S4WBr2YGi4BomARGZMqCch6oVv6s172"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H3a94gPPUVYx27nyKPL39rZFyBA76WMtN7rZwPBRa3WBBGHhg3QirKGRV9SL1Sc41ZULRH6Rcqw9bSxg2dprfUY",
  "key1": "5hL6RTk4Qd7PEYQLmbm5imjyvzXGMnLjAJo8jCRdJFdhC9Z8AHCWpPLd9U211zsfBu1jKdLbhXnVc6uZYL1diQw9",
  "key2": "pCGmqEoTxoGh4bAAYw2czBcjosYu3xQEZsDdvWgSJ8Ahb7uHS2w6vZARQhCd4aDeVhQHGgXjNE8AzxCyW1dLpnH",
  "key3": "43MdkfyB23A54NryiVAVsAmaThp4gptWEWBjmjMxPY8XRx1YHvprEkuqt9Dmym2qWXtP6q4uistPFgBvsLzg96WJ",
  "key4": "2WChS1RZUpn1SQCesbcR86DPnfqEXQpTTkXh9MhPFYSrE4J9taq6V9Wvp8K4wqGUmvQfpXZCkda22rakfXiuyMju",
  "key5": "CD7QqQKMVhCHi6gou1h8qcnMeLr3PMjhoAFX4squXX4jFjTmMtTzp9icf4LJFy6QS3gCfUb3TphqFDaZfWGuC74",
  "key6": "2URdeKDxiLFwZ9nPxb1dBARiPzjPf3YGRHiCSyKZoD5AcDqgrkC1rD22vBh8fxpjZtsYDakTGMbW4i8KQh4CZMzj",
  "key7": "2TEQf1E3c4NxM1NfBsyCiuU2YQuN5swC2HZcCsEMMLDXSVZyfLVtigWE4kAKYcojwd154djnyJescF45nK77V1AM",
  "key8": "4vAMmeciw1B3xgaDsVtNtoJ1UYCxDXNcmipAGMZN6rjsfQA54qEHX9gQ574YyyGGhKTNCQeTWKbusyn1pN9yGbgR",
  "key9": "2Lc9Zv4H1TpHgvTXZANFeMVnN6apNpzDiAshrGeoPydQvRf6EzS255YTWkLXm2YfZzFbXxiR7ttxYJw9WykNh9uT",
  "key10": "pdc5CFN8W2s2gfXwGviPmutH2MyRrJ96CKSfg4AXFdmqfCk5hTfiHtGGPZPoVpnhAhZpBLpfwERRsvYCq7XGBZz",
  "key11": "4KskoHgnVZvt347FqQ7ZZRnHNkmD3jC853KY1cHSWw1Cs3SVetXCXUJF8USY8YWjCes7kEsY7JZTht4RC8nTpcyQ",
  "key12": "5za9iiMh2B3MF46VZPZVRxXDczxyjH4ANZFXSASYdXsGxqR3yyDUju5cdgatNjJYkBv24xG9HR4fK23x2w2wkbTP",
  "key13": "4WhgukjCnSH19ref6UK1qoTeekVgEsQiXermy3nj78EhogKTSeu9oLwep4vGcTv9VGsA39zpNGCMyPRS5tUSyn8u",
  "key14": "2vEmqu5pFGwUwSrALWAvCQnncV622wuixeutqYmDwtDYZSupQ4uSxttCJa7YvsLrqkqcgDopByswdpXX6EGTgxti",
  "key15": "4LGR7ZGVKFceyDMYRTEFCmzr1psmPpNqJUy6d9fAenxoWxhicFM5EgxwHMqxn6jQRx7xU3XxUFkhipigL8d6yKxC",
  "key16": "32YwYfdg3LY4gqUC7n3JH7Yn36VJXBAecjTqxxfPCEpWPEKWtrG9gXmFhbuzZriYEQDWMNBu945GuEWt5Tqng9DS",
  "key17": "2YzeHjBqoFthtEojBDxTPiAht9Fc7DtChtzsxjFeATvrbYbweZW122q2qfduRscdN6WcTS7XaXfgufP9UsEELie5",
  "key18": "5pFz32xRkxu9Jf2oE9TzcxQtFdns364tG3jWHoEZrV2tR1voT9Tc9VMZAAihae7AdpAhYYrNRtchk52EQYQywpXG",
  "key19": "5Nn9ZAnyHg1NRvMg5SLetHbzjztXVAAv9N3esGeiq1WDchdGQpixs2ZjsM5oXsQgr3WsEYqer6jRTcEwzF6xHxtL",
  "key20": "Y1cArXP425WGurABegTJf1QGE55VZGyLqRydXwdSeULVFZFoCDnDa5F8JhANCCPYz2gLFdssRK4SoyApPK7Fc2a",
  "key21": "2QwAWRCAQ2jEznx4hdB3qQaHV3FJtpX2psug7a8WHnssJ9AaoCSMCzY7Towcus5SpurVbpMSvi8n4y1HVkEqqyT1",
  "key22": "2n2phGCmeHvd3V9uMAAyfAXQuCVTcJii5agRnAsHUUbuuCrVBQAQR86TUxf4yekUTcboCnwz5gbpZv6edbeGrGr8",
  "key23": "5Z7axpqgdQaTsvQvTh4VSSoi7KaPTVZecfpVNfwjMPo4MyH4hTMHyYWzNtKs6cynePazNiKnJZHP6Wr1q8bkAJij",
  "key24": "szecwNUeBy3DJnLbEkPTZZAMgnHFikG1Js6AL96MUJxLgLZdXF3fAhNRkXbMnFTPwJTtVX15avyyDywY6c5ykh2",
  "key25": "4rWqgAFV4zZSG9StDKnUvyZUhHNAE6u1ww2knGBk3GPf3vfRATj5MszmobmJNZwozwczNzNUYrn9Bo3vUqRti8F3",
  "key26": "nub5Xs6q3uif8514Na5UdrtUqRAK7nvgA7fJXiYQDRGq4v8dARwQih5gxaeAKmbkWJepLHCK1LmxEGKMiRNkUZ8",
  "key27": "2mF4K5zASajf3QWWVBsXPCW4kfjy7fpDcQCPJssXYi9H43RAUHtgATaVBsU7ofJpdMfs8mRM85ZQTMyMRDEQRZm2",
  "key28": "3XV6ZXeMpDiTW4srceCaDXSGP7S2x6zgaTRCnKrj4o46cyCy7iUNXb5L5upsoxRbRD7tNn4bCEtfNTrimNJFWqwG",
  "key29": "3UmgAy5fmd75ML2rJSnjqwqVMYBV3udDTJQzLyugNsSNKsS9V5aHxBWqopu4kYtkUn4SYXSvWpjRk1nK16Vt27zP",
  "key30": "4fF5bq6z2czr2Svoh1nGB5fVWa7oZDmcxPzuvgfWriuYXhr1dKyx2cRQo895gR5fMb6TLcFMFFpZ6FXZ7Akj8RF4",
  "key31": "2u186KWHEGZpeEMSNG3tpdwecMUomCjNW6zeXQx2Sq3azf6gzLJq5h9h4Hujkk9q7mGdZrxKrpsUhyJJeqjo4b7H",
  "key32": "4anz25mBJVu3RBn27QLP4y2BmUVagD2MgmenTURXnNxxVvYJnNZi867Qz7pFfm5HRizFtmKKjnT7cNCQd2vgjNA8",
  "key33": "NAEDu3UyBWU7sVG1XQqNGvjmez8C115fMuGd8aNi4Nyynf8CW9pYABwKp7DgPMdZ7vRpafddX78ZfyncUWYtBPe",
  "key34": "4aPcALcxySm2EBMRYN1BRursr4FhEVfEdHBNr6e5JLXkhKAwmKNFkGZhQW5TYc5vx65kQ9yBgkJULhfmmrhcfVd3",
  "key35": "56GKgtSYHeWuQXhwWtmeWZdAUdTLTwPHJenzoA5ZNVvXeDJgNEGm2PopjB3gJ5FfUc3SoUDfTMqgzWtYQwfdD4yC"
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
