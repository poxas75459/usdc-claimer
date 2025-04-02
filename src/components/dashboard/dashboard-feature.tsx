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
    "5DRpN2p6bNaUDRJBLCRuRpzZTH8qwysWtTosUf8obWKK7qG2RNbD2kokLSKiuJpRkm4WpR3pWw7ykJv1Vz6oExLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q7qpm7dEW1KcYRQvAAZ3yFDSZAj7V1YxWmYLDGBJnTKbaAedcsRnSwJmMQ9h4VeoqtjWPFbjSWE8maMRteserhJ",
  "key1": "51sH2gaQs5mPRZfVtuq3hnuuGVD51HzFzRPDZJNz59t1fr4Lqj6sf6Ui1GmVvn6K9X6i7M5dPxBAT5RG3gFddJXB",
  "key2": "5VtXViutKUzeTJ4d1Ya49riTq3cWnzDMspDzCEqgsB1k8hxJs9iw7weWN2RpQX6gskJee2Pw6mLiomQ9ECe8STcL",
  "key3": "rT4ZAnKkMVneeuTLMebmb13hPqowzDkp16gMfJZRKJNKDrrvrmvR7uPYX1HcViC22WixAePGGHzbp55jiPxTV8e",
  "key4": "3wHyR8Qn2pe9qn2J9ewJC8s1kyBz9uW7BGmWbPgFEDh1Fx1rWtsDAZM38gYTS48dPtVcqDqmk8XMnM5ck1ktpehx",
  "key5": "1PFQsM8w8Yx78nDdAzGYV2it7ziUF8iPuj7uGWRYSYX3uS2jZLjL9JD8riwm86StFqdQhsUitZUt47s6N2uSXJt",
  "key6": "2xqRT62X8G9HfMTk655TaZouj3Acf71pExZx8dQR3v2LNRSuM5H1yZhU49aTbonCwDgvph3GN7vaciAPmuizWefG",
  "key7": "5fNxreFQXSyfNmdJnMG3GuUAN9B8Dc5qjNzyYBDHwa7LrjNt6JwyGQeqtUKkSDM2LbvrMJX2G5E46pcZks9ocVRw",
  "key8": "B3XFvdyPkEQGbfscnho4T3oP16UtbtarUw4aFXFgrcYunWY7RSiGPbRYyUqrU3psnu5fU7CmsSyMPKSLudQ5PNo",
  "key9": "4NadRuk8uZaP28vX4X2unVQRADpvEN4mKirJzNb8inbvvqcrvcfkUZgqBZdTrR3iAEku6NAYmGpoaxBAcFDaUWsf",
  "key10": "2BNzKiTRgHCgcDk8sNzbA27ozSH8SBX8uYRLHDFVYHN9KSwrTfd7WDGVq4i6uE4tyEo63rLGsKHjKaNDwXmUxCue",
  "key11": "56oi7fLrdYgFcYpxwLb6um8ncsrPHkuegXJ3Q2h7xqZSLNaRJyvaHok9LsEpyGhyaxicK4i6qHJkE8cg281F73f5",
  "key12": "q3s82LC4eycTTMBzCrKErFuHjaE99eSZkHqpGj3gahtd2uZUZwdgeWZS6wxf5REGGTjozunuYpHjUnEEYCs67r9",
  "key13": "4VAbjEmUJZKrDFTKV4C3tcaPDysvizvfSAMKJ5ZUsinAA5cFCY1CpidoEKJVk7rkpMq8Fw2StQNV6QoWdD8UWEEn",
  "key14": "3Kg3crFuKNGdRZhQHKYbd5Sz8STMBvYdLZtebj4yqNJHWvF1RxuNWhQjkGgfPW5Xe6ib8U7W31annAb7zRSTKDAU",
  "key15": "5hJqaqeBHhukeQ5Tmve2vAkAixfihjmJxTvj182V6rD5B4Lrs4AHofBwuBjpgdcR8sAJC9WuTuhLoc2EqsuCJpr4",
  "key16": "5XFm5W9VjA3LeERntEU3naJEeuQRTFibpyguWX384JdHKMXQfyMHdA7DQzgEDMZRJLYrVd9juAK3aX3ioCRE5zKb",
  "key17": "2rDXxsEXYc5B3ivYKatg7hdsKUoiF9gYyb7bUWiLBU3T1t11qkbD3sD6yxr74dowwgoqgfFbWMe1y3wvWjv8KoXy",
  "key18": "2E7qxUJ7gJEFrj9TRNWnhrt1nqRtyewpj3XHoEKpxYAsHsgrzZZin2HryYcGntUvwC351zKRbMVFN6i81qNR6CH8",
  "key19": "3FvvQsqW1qRXnCxBCe8Aqq4DQ29gmDY9S1yuVENzFJXEvJ621dkSF4d1GxUos2faGEY913D2EvNaAjoGe4mVFond",
  "key20": "5uquUTqb3vmaaE8oDncGrjxX6nbeeiogsXB8keTUtH56QeYuMrqPvrY6Aqrpcq7jBznsqhyv5eU2mrswZ2uBcPLY",
  "key21": "2EfV5NymeGCP9t9wDvQxvqmbHSpg8X7EoecbFwhKEvCfmb2adq7dwy29xtsxrhEG7T3jJfbXdjVGdGkfmjPJPb4v",
  "key22": "2qkjAHbxizytjUoV5LzttU3gJx3NMTKHV2bdVZu2RxD6kswRPJJqLGKYP2CnNFQyguYceYNWW27iuZd3BRZLGYMs",
  "key23": "43kN89D34ktCtqVRuxifbU4e1FKUaL5wX47ViRXtN6qMQffdQ5vvikm4pmkXH9iiUAFsMsFXZQ3EM8Tbc2tdrT4m",
  "key24": "NFU9YB81URVsANWKHzzwvPyy6GmH7mbWAkhRkWPoMFtyg5RAGR1HkGheNQ3ApCM6bL1J6x91LvsXirZTCyUSE7t",
  "key25": "8DcaaBwFSUBWrbQqeFioG4YP8JeFi7ZfEAYVoTkQLoUum1EyvbiCR7TMjPuPZTUyLdNiEyMHm2nTbjm7w9xh5MV",
  "key26": "eQAqsB2gNGfnH6ZrZhMRJkr3n9YtmgUR84RAe5FuSs9Nwfp83JiwaqWmqkjNWPBPbhNjZq3aQjNT896e9JxQsEZ",
  "key27": "2TQgzYeRP7V4FZfXYD3s5QYuAd2Gejq6mX2PmzKqzC31pWcxA5DoC6swJG9S1zHChsKhiFRS75nhrMHmj3NAVKmB",
  "key28": "4vjDoS7pNZGsJ1ghn1p8j5PjswXcCySQfRv3HX5ndveCLvfyuRPoxgbuAvWmbrYQsM2ZJJ7LMxba2oeXC9Bvje3D",
  "key29": "mQwj836oMKpZDD5KzC9n2CMwhZJ5qSYffktgtmJ2rbjKGdzndKAiUdxTyzkUW3cvbUrWHa7fe4sMQWr28W5X235"
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
