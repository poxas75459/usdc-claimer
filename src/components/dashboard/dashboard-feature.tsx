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
    "MD4vbtsPu21gp8vLWhhvCQ5x7agwSLtc4nAZp8VFwDLPmdSSYhDG1ND7rGkXmWon44AngjpXvcjSmu1E8UJ3jg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CToXGVZ9CfsQYC3xbPvRSEUPn3Jvpr34ntEE94VawSx5ekkX3kYYyhnDpjUUh3kzxQbQCyYtkdY1JtQwNTQdTfh",
  "key1": "4uU59V2xgMitmDXdFN8QQmt464MVQREM4vnpPhTo2QioM7gKYgz3p2DyNxkUqayrHkPzkiprfvtT69H41215g8oj",
  "key2": "28qHrXBSxQCoK8FTcuQEv6HiuWxa5ZNHi2fyoUwwm1Bm9CZ4gJjtnfYsGf1UjYAaUkHkBeo1Yjz7RRUm1ZeLYM3x",
  "key3": "5Z2i4kTsRhHeZ2oWnsBRAjoBwA1D9kZkn9dBaFqq9ncUGrVgUheENnEDkXPASptqXFXZvLV9PzgpVPggwSYAVCif",
  "key4": "orNjViuHoRR2zsrS5xFAnaTkVu4Xmiwe1C3knwwvWs5Lt2QXnF5HNZkP7Xux2h398pPRQg3BJwHkJDtQ4QgxWyK",
  "key5": "4d8266VrovRutDkBF1K9mwihQrrebrHVHZs2Y1cpe9p1arrGDkfniV3FNZcRvHbYB1o4K4jQHVhB22F3RTFnofVw",
  "key6": "3uXxM2Ngxhm4vEXiZWaEge38tDDBCexshtpZCyWaocM1EEHcuwDMq1aZ2ZVBb9ncJ1ANQ4SRZy2g9nU5bCPg4UZ6",
  "key7": "4x52VRJjiznoNs395ZiXXjJT3vpg2eqy7uEY1xuSfVXFTdoBmKGqHZ5pAFgdKopjL8fovGJY9ySx6UK5Qa82dchR",
  "key8": "3fVj7Q8QYLmu4XB4nU4dfEjWnhHnLQHUdj3JZgvxV6r8XgUVC9zNEhxPmuEkfnuU7kAxU1v4EaG8jxuhjjb1DaWZ",
  "key9": "5maLZWxHYUq4BJYhpBf4eriurr45jFzGk4JTwaJYJ6qwM1SRZGLpnHsCJuranatyCVxQRUPbeYSz53xST2e7bM1T",
  "key10": "28brG4jNjeRsRyY5TGCwSQS4zRdzrZ2W3oJ32Ji5Sdb3KnRayp36QSpf7vV5pqW8bmHiLFxdKU5e8QkiSriqbbBb",
  "key11": "58oG5utJg3g7d16xrGPURzQTJVZ7zX4ant5e694CrzJVhaMV219TzYGBHNPZbaotARN6wSJTCM6FiLhkxKpdnr8d",
  "key12": "4rPEb32Ne3ScPDJmtBF61RtmZ1VKHSD896p5hEHSELG8CodfZ1zoy8cgQZn7uQ1T3PVdez5kQwFJig1wKC2tekju",
  "key13": "3hGs5FritbuErPmGRhqiKoUMEVL5dvcWr2wSCjFmTVDCbggKSgo3PEpznZco1tjgjaWnbf2HbTaF8f6BpLiEenqo",
  "key14": "4uX8Ztf3aaEyU1P6pBfHQtGZiurmNUFVk64o5kpW3HBNPNb2VP3KN9JXTp98f5yVhiqAYfbxh9uQAKEMNheDBvzQ",
  "key15": "S2d49EqdwkvREo7DKHtaFMzGyBznj5zGzARsd1jhnBTNAQWjovHmtLzUe1qWrfDCnh8gPrQoWX9s9VGBHpn7wqE",
  "key16": "2gfUqLFXC5rasvqvKkJr21srcFCYj8Yb5qofmwH1noXJk1gBB8vJqehwxWyXTATFv78HeMgPTGeoAVLMrdWgqjEt",
  "key17": "3CgZzE7FZnoqcYoqtLffMjkkHmgEDViRtt7nCDYvy3HXVvxijnB6dTapLMMRcYNMspw6KRDJa4KSTrDWcTFutbi",
  "key18": "5dPV55qtxLqAzDX8KR4MHDHD3UDwUh683Vt7BU1eoEbnsYkV25ci4kMAN4P7pib6ENkYvcpxCmWFA9Gm699HcKpa",
  "key19": "4hCifCdY5t2VyMRcFfEZWLgquL6AXUuaWmAbMuNjAvHSPXknkQjKUUCRhe7p8BZbvDy1xeUKNeHwxZayA2ktTBba",
  "key20": "4yAyGv2Adz5VQmrQdMSJaB76UxZYfJeWceCLVRgRdaqV9BYoy6f9ceXhTxHHG8snphYqHbgfSzCSaBX6cXTuSE6K",
  "key21": "3TEZWCPTwRmpthC7g5dgkANw3FUAkxk2mxWp85ns5xvJiXcxeBoZQkdqJk9NcdDrBJEGcsUxpt8czdzLADDrVrag",
  "key22": "3QKzCFfmaQ5ZP9u4qMWCcVVLgg5ycTTpqbjEDSFheoKMdq7TiCdFPgTVZTXfxBs9FnZEdyxyrHFS9y6y96mrfR6y",
  "key23": "2TJwy5qNY5Nz41rLsBJNT1JaJkKjuPvmgtoY64oYuihsqrt8eW1JsLBfnKWyycfkk2HdK2NSGhTfezAzoRrD6rY5",
  "key24": "4n1swepYwWaNFEpJxLU8CL4W1xgQLTmGCHKWCSETCyp4pqw8v4XTezZx8TY8A3aBhUEBaDsZrV69D4Tott5WnMkH",
  "key25": "3ytmtbTM5EG5hq2fCRYF7wegyzzT3i8Ubi4JK9yWA33msQYdsxJefRzqBTxieUz5rnepJxN5dtBFKEG8hY9RATUq"
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
