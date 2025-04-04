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
    "4LPb3G2d4jM6eDpSE5wXd9uyYgCkcedUXspukdHcyb2bCMHyDcz98UpDcd7e4VT2FcgNYH15DTWBfk3F4xbJ9pQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tfi9a7qgQTopayFhgxZ16uypsP9aVfPowZwbWjUf5grmu3m6LRL4QufXuXtk569XDsDRmYkcH4tzmwyq3pfe65f",
  "key1": "2v2g4tZWvMVYcGfR5nrxCUmPY3kWYg5zoruusB2c1xmrFZ6AzES5MnqQexd6NNkeLGuChdN4JMqj3djp4ALCfy7V",
  "key2": "22rtbBUPUJS9QmTHE1YXi3YocowYzTKZxVXbpJ8aTb2jsmDWFfrcjs8XzTTzE8rC6ME1ufYNKZuqLnFf6c6ujFrM",
  "key3": "35y2Zga7pHMeMKnHSJGv4wGKJJjngGMF6NP1FkEd43hLH2i7XDLBG3zfjXGATnCVdzgoSzWCoTfVwEs64vkpD7j2",
  "key4": "5KWyX2KBuwDPCUXJy4ixmXwNtavqgmrQ3MsqmwFaVWQQXEVB8sKSTfWVLSuAdmuZYGskWfPmDwgBgwfxpzssGZr4",
  "key5": "FH811eiw3bAGzvdjb7Z8ASx1kJWsYg1ZwQ7wAzSpe3KZ6527DVRTPWwVVk7BaWHaxzYBXKWojUQm7fakGgYFffZ",
  "key6": "39K4L6N3yR5rAUSKwezwCCse9MA5SzCNynmwna9TVPz5FRCyArPoGD9bKo1qmZebHjWfCQT3EJ7usV3NHrm5LMVh",
  "key7": "2fHrLJAokFt6Zq3nxZpUna9UG9d4v57QZEpK7JyZuSh6sktWg6DT8sKzEy4LQ6qHGW1FF4myWPid1r2VcKtRVmtY",
  "key8": "4minn3dFQ516QpDXfvWxYsbsTb9pMrU7ZpCsMZih7ndbsoFqWu9MMqkgNSNMXbWNsUsgJ525KfAKZGGvCrSv2P7m",
  "key9": "4ixfbtJYscXMLvdmAsuvB2VwrxYKRnzxHJ1EFmUazX7ChYmtgynw9VyshUhr7zRJP8eG4jZoLvdFoHN8GfgeNZbr",
  "key10": "4r31dhwf4H3jFniRNYLjUyqcYJejR3sigyW1Xs9At6edG7T6x8guTeTqj7qtBENVJ9aoz5Ai72mX7NdSkQ6Aa4PF",
  "key11": "2oGQL1EKZfWaLYoT7nuFkG1RHqSreJhYNx2pWUFLrHfNhBssYetxWu2P6Ckqs3bbDh6i8yrrezb2Rvhi5ytKVZh1",
  "key12": "3gtU9yvWNKejFtQNNQWGVJzyxkKkLLMAtCg8mpyv64TaiLX5pgwKuvFnFX75EGJbkVziKg2cKmkTKvbsYjEAheCD",
  "key13": "41CMcFXf53xTZrigNvDHR9Uzu4PTzXVzwZVqhgiWoh4PxyHY49ApHC8GDSkmkXBJWUanc9vZipF79To5s2ffmGK9",
  "key14": "5HZunyG2HFdhFfDkHqyTscdKEdtzAQDVz9RrpTKLqzAcnDQP4CKD5qv3cnhDzMqgfuFb1JWJJJngkfuJukZfVKdm",
  "key15": "jVJtPii9HKRis5cAQN9inBEzqDRvoD7Ffo4PUGA6JPfG8VWiAhMgRuo1YUk4RofzijjufGgJz5sCmMutqJsdaAF",
  "key16": "2dtKpzykAM1vz1QpVgT6tAWCDpJcghLrAATtyjYGHStCgMfMNNdnhfxrKvkGvUxAFvkQp7tjgpi67oAkPLbz5ny5",
  "key17": "38YUYqpVmETg4dcezsG9yjQaZrJms4SNbK52iQZhcdjzNeCJe54xiJ5enQYbrq15yuAhZ2MZg7x77aBBtS5tbc5v",
  "key18": "4Up5GhDTX9pkGWWryabfaEzxxEpzjS1Sx3xV3hYoD6wk6N7GuxaDUVANWiTGKYFEx3822RLTfvAaVVENTKpZUNvX",
  "key19": "5ydBLhQXKSQJ4PVHZk7Uq8jnkNosZkGThk4hmjqHAc8zBwv9juUq5XhSsGoh3LfJjU8qUPpjksLDDRdGoGnCa4cr",
  "key20": "uiGp8826jGipHLH9JvS8G1QTtwk7iTzuXvWBAMnToTRQXRx4TFwFGdEz5qiCjxf4Wgg5cxDU7h8c5HAAp44MpzL",
  "key21": "5jqTZAuvYHaCM6jWcqecAhnNhkdFCAyeUS9uEKTu4YX8vd9ou4vD9JqQSjUKCVSB3CWBFSSWdWGLwWBmjcKiRtwJ",
  "key22": "2yYBc191gLCEQgx9av9CGvRhVCyCqBzf35nZgM7buXBb9yMsS1wxRPkjg24EJJg7uamQqASUbGEZFjr6CJUdeKZE",
  "key23": "3gDgA7sf9b6ads1XK9ChHLN8Tm7cvSRn29b3vbEVMFHUNzT6ATaCUrFoUCCUFVAqADeTHVSWWjSS8H1kh3SQzFUw",
  "key24": "4DoN61TUqMd53KeCZm9E5t8W5L32q53gJ9pnd5VzytwuzqzcZH4YNdFizgG9UZgT36sP3X8vBaPm81rRjwTsVZJy",
  "key25": "5bJFLLELvcnYiEzsF7Rh6WoEzatqaSEpbJiZc8ggpkiW5roMKop45UBaPaUEUdo2JDFw5RsqgpD9Kh8cHFLQBRG8",
  "key26": "xhhXDHSNWKFMQ1t62pPjHssx13pfdf7KwTTanWK2QN9g4B1UmHe6Wo6JP2sFe3hLkZVBYrP542ZpJwpwE1rEYcA",
  "key27": "2Rk3ZgXNrzY1LNxNHPs4RxZXgukA2YHwpxKZoNVNEVCntr6Eg3futr2P7dhSZaLkXqWqVmAcLekZSe8JPz8EVFdA",
  "key28": "3WVdDkinhhDoHKfRi1MyceyCnxM6c6Yx6ByC4C4xUtHKxKk5xZjERVmwJ85MWkMS5J7dRPNidFW2pTRNo942Yx8u",
  "key29": "2XwGyAEyqSVzwoXgcUMmK2xLJnwGs5yvfRQvxCNGbr815EZDmjDDsjaXiwiUYvbm9RwTT8RdEHXxvKuxvgiJW26Q",
  "key30": "3P41jHrHGm8hWUbfdfSdJrNjUfbME4wF6iYsHYGUvD2vR98E7j9zhVRw6rudHpPqyMkahSMytcYJRW7irvNjz3QM",
  "key31": "3P2sv4eDPEk1Q1tbA1f7qjcJ3oWix9qEhC2PWsAXXdFZuFKhMK9zpayCUFFinLDqjdqdRFMUoST3AU7aTWCsTA4",
  "key32": "JbgiFsWDtmEFwgiX466ALe93mfCQzmxpTABkoNQh4B95RzZPEyi4u9CLQXSnFtgZL8dUnPPoJX1LPK5Zh5SjKvh",
  "key33": "5t27mdyGcUmzYBJwLaAeUSumZvNZ8ChnkrN2K2d6Ab3AyCegkNRuoDE3P4qRKShYYBmrfSAj667dTucgZSAhnyQd",
  "key34": "4GTLNUjzGN5vJPLQXYxMHmsCZvWzrzLYVCCk8Gx8ei1cxib3Bg1NiwFPYcYLpGGgP3DFy41rWuJ5TaQRsrhuPozU"
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
