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
    "4EZ5qyoSZCk6a1cyJJvbrY4fzCVw4PmKcoY2QR9jUieEHFoTHN5ac58w1iBg29GcuujQ4ni8Wo4g93ag1s3j97Zc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kEr9adMpFJLG1wErKrAoDeiL83VWj89VUqwvrLHapWrz3eYwKzJQwwbSuM8Dp29cpJUmK7QDLLu6smeLEdqUbj1",
  "key1": "5fiS6L5uRiSZ2nLptoTFFDS5bLp4zRznEav4sXoN4HfazPJbgZMhQcGRZvfFoLcFuZC6qrWLxX4skZr1ifcLwZf2",
  "key2": "RWY9oFWTxcm75mWV11Gb3hVa5ZLsUuhrA31c6qbvZhsSUv9aYA7CoTKyzmbvZW8M2mnA5H3diRAV92FABJSoRtM",
  "key3": "3ePiQbABcyjvPAq7fu2P89JC3YvLfQSbSGgu8XtoncmCRJYymzBqP8YSEdbKsML1DEfE4usnqN1iy3DZaN59V4Lf",
  "key4": "4zQEcHT2AQsph88QARfE56LTdZDzY5LVxoxgP7gqtL3qjZESmLRiBGKowo6Ym1x9XodswvBF9ThkKshzYW1eDnQS",
  "key5": "5CMbR3EbYo6qvmLJJdysEGWZNnYGYuH3x7sTbeAYhVQ3oX1EZbFCMnkW3b5dJ8aNwwtt7tRv3kyWMhLqHNhErW5C",
  "key6": "ou2qtFExjzkGsYZcVL1abZkhJtGfRqMFeF2fT57fuYeRpRjJirv5qjLYAZSAWZ2fttt9zYqAB58ukinqaQJdAUC",
  "key7": "tBtckrApiDBWtRkT3NhVuePiZqGHqc12oK4TQPBinYbatUo86bDweMp7UnEWg5Sih5HAxTAg6b8CNv7Qr9tjQAx",
  "key8": "5MS1rcJWGxMGA1US5rmLDTNQYDfSBrR9NFdQsKXRisCpbAMvTkRS4y6GiJgw5QSK1pPRoirCBuxS2QZzL4m4oopg",
  "key9": "4YMe7M7Rk1VyozHuuxUZFyhQtDt5Mh8jy7xCvzrq4gLMQFNZHMDod3rcfPZp8UpCriAJZSSaPo1ZhxugPH7hTkMS",
  "key10": "5m1QN6BLCBfMbwrmU9Q9jWGbMxuVbLg4fJeuoFWsgReU9sUTF5xJadAo4epu5YHn8umsvpLKQP7XyMPdNMP2RXuB",
  "key11": "3iSRNWz8GUE2v1FoQfm4xccw2BQ3cBkxiiSgcyvNK2Z5gDP15mu2WEMgmkDTyLQJwiPHxXML2XwwrvYJxEHa7iTW",
  "key12": "4XEqh4FZTXHqGv2AvP3axGqkwsyoW1S2kXuogvjAxjaRnjJbFuC9RybLSaD52tYEHEkgZq1U6N4d3Wmv6HBEqafE",
  "key13": "2JfgFb5YHzwUuVzCmiG6WPEU5HsxGdSn94bMtd597szWWzED7LX2LUBNr66t5G5dWuvcsTT6E9GBeSHHmN7QdN7j",
  "key14": "3KjKU8ZPK1d7Vt4Jsg9h4ETZ4pD6PHGmq92utSaGm7KkmJD4RvWyRFSHd5gZX2DfXewy6UW7sPg7r1ErFBn4xFpS",
  "key15": "4DYZ1JouiVkR9nJPEAo4SzcLdx7FUbC76CcVAo7AUNSaT3qmAfWPnv1Vw76f4V5H4iLtWLF7FsRJwxpQRVAgCXpR",
  "key16": "cqWg4was2EgDMpC5wypc6axAXcBhwfti7MFUM8QsbSsu1xthmqjGWF4Y7kpRFEf3gHGv7UPcEkn5guEW9aQQPyw",
  "key17": "3VKJmGrJem42BDgafSQSw5hvihLt95E9KHR5CUVWTqLK18rsCpbSFza9EDEgo7hSGgswEzoivPfARhGcGHv5LyZ7",
  "key18": "3Spt4m3SSZJZRT9hZpVAuhYiUncR6XkwoeoSEZHbPdq6uLjxgY5iPFC3ZNe52MrQAuCc6crkr1jnntCVeoAcUddH",
  "key19": "274HFch5tANKZBJvriWehHBvFCFtwCzwshspNNuU3yq1b5yiNkpyeMsydTvwgrbYP78ZHEARU9Gbog9RoBmGJ1qM",
  "key20": "y93yRMBkQqZo1Hw5VfZGMaKcViP9CV6LEfLbS8BjHbnY2QAGYq9BVEn17MaXgdxXjUAMrWP1DBcF5pYDVichwve",
  "key21": "33TxpRzYLaJ8nz57Dv8V9GfSRLkp5ASN1tQsTTjhLamfEyEYZGbyJfNNThDUvB3z73pC1FixoKf3ftK8ZnpfEHt7",
  "key22": "4GViYrRhVVD9nQy2haAoV6K8wmHbhmFb8za8HoET6Fvs8RGB4bXrYHG3MFnjj3Y4u84K7R52xDKH86VAKcWn9GsK",
  "key23": "3qbvvA7KT3R3HUFtAASxJps7LEgFp2XifZ9zVDCxeFUXLwT15nhe5Ed1Jm4Xpc8hodVFbMT7x8t1d2tLWA3ddYBv",
  "key24": "5rxLCJ6HmzWiSQeTSVK1ht6jRBVcZkJDdr6vc52fAB9GmR9wS2zSTcrkNgK4TuPuihvvHtkPWimBrLDkGcioj7sQ",
  "key25": "2Piu86htNyVJjRfh9KmgfgP5PFkqhzCRFUdt9ybmR8RdXKS7411BMfx2ZYA3Qynu78GMPTNHtKBMAex2WR11s9BN"
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
