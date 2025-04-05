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
    "8WFMTYab5eQaEZZFbKeozJpUnL9KQv8spekvdYMtkHr2QqhNZS24nSn2CnDwRpgQdcmUhVjWVtYQtN64dAE3ZKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xAP6WoGxuBdMdNAQspPPum6BzFJpTiwbWReGjG1ndQAh3q1c6wnc1pNKV9Y6BjLWJ6x64mfgeJakPBrwJuWcUgV",
  "key1": "55zgX1igvXNyz8iq6xCd56H5xvTisUGg1SpUDskA5w3S9taP4Bu8fFh4cUtBuHuivwXBWnnL56nfTpdNbfTMvJie",
  "key2": "uJScMDrCJSZbGb7jdfYh5DDjrwkJ4tJSNnCYd5mzoAWd7gJJSppK1YzPku85BHQyGX3YiW3hhacemfprZQJXf3x",
  "key3": "5vGssLZQ13W8ZxwDhshXQ9QJuG84izsUTefZ3hfkcRYUKu5P5c8iQvqKhoJy8DSBipXFfLemYhpYBxPcz28WMNSi",
  "key4": "5Hb7wJnxvVYFydj5iZuZGhFQba95BNzX5ie8s1zd97fYJipfeFLVj4ADyPWTEfFmiC7udV4wseiSoYgbG51xPL1K",
  "key5": "4os7jm6zm6dGpopecfyPJWf3ou2LYn3PJ8mnJen1e3FjGi8poNjpyWhSLNUnVHqpPXBTenDeikq7TEYXeJC8fwdR",
  "key6": "5oGJAjukNviv9XEL2z1rAcjcxHLAnxDr2njBsms4XoQK1YBNtAj8MWTqFtUgHPiV5QtjrRAQbH7DWEhNY7VbuenA",
  "key7": "36p9Td6XHKbR4ZcMXUzKcqhedv2GWWeKHVPap4qGRogBfmpg2b6TLmdPEd11RGLqCDQX2Kpa1keKi6iw5Fv64k8X",
  "key8": "322ws5V8b619naybxkhUwxkzuwT4HBZpxxTDfBWP9kBeazJXq5sndtJFLpvzNKfq63ArB38ZPRPF5tZh3jk4WYuW",
  "key9": "56M4eFoqe5kfHnkNZtqRTgn3vUY7XahGttsjCAb37oyPc4f7wR9X2nuHeYSnrWZMKcRtza1XKz4sjCPz6Rx56ZdS",
  "key10": "5onnz4yZ4bayxecKtyMgqNzjioWjjcahxyeWXsfBxJwpkhfAJLNxSPistNc9E7n6ue6kkJD5nJQsmPPADBBpQjKP",
  "key11": "2sUxvQ3qpQLD46ViPXgXuXcKhufsZU9Nd29LQCbWuxvhY5zawp9Wp8peRZFR6AYSxas2ndk8wq6SZ63C8pDN2NU8",
  "key12": "2bNGRiovnSFLi8si3qCd3ezFgBm4n1VZbB6ch2xk5kN8uRNoaW64ovASXCyjLGwPjzgqQTFLe856dMMDbRfrU8jn",
  "key13": "3nby9EkvEGFk5qhqNoUVUTeS4RqU6dNLcJcsdWmpNmXZ7dDGPUWqZtd9HnaejNVGGVQ2hphLrimLKfpTmdbtz5ij",
  "key14": "2xVQkg6XheE1NcA5BcvueyK2ccNS6oriNcwPH1Bzcx37vkEqgQ1ssYWUZJfyHGYLsL8T3dGWBStS2gdo9JJWtKNr",
  "key15": "61SKRiPb2zKjtdgvR5RweUN7ZEQKdgTBgwp2z2KbghesfqqKVyvMJ4n9zCHk7GgaTg7cFuwCjKowvEw7iLjj672C",
  "key16": "yGzE6K8KkAGYhVtacdZcAfr67ZRog3gRGLxzaqvraPphFvRyUMqMPtUQL4Eu6jENR6Bsa4K2BgMfCLJwpRp4u9b",
  "key17": "5qbxLJLPPKJu7RauoGQcEPS4CBK13y98MpP8eKpB8XP6CndgSnT1VEzjAkkHU3nGbxhXhfCQmw3fpEiUYAEQPxru",
  "key18": "3sEyBwi9KKt6PPiqhcjv3YCeah6zij9wpKcpCF6KgBZ2EhGkqhapW1RdSqCMnaCcKKhtTJW1iRRb1JaezRCDjHPY",
  "key19": "nWnisng8KLssHEWAh54V9kyLMDqPZhKuokf1QuVu5toseiAbQVCvCXphSUTabzCXFaYuC5u14nMXuoLcNdjfHSC",
  "key20": "2qnqJVoUtL9K8ZmXccqjT7gwdX1YqSej6ugNXd9mGeZo2yLdgf7c3TXY3xPg7VTwzD1jLhpE1SaPhz1obMK7JFSa",
  "key21": "kr5ByFP8FCwytBmUBRLK5qC1uHGJQ2K6zSGxRkfWR6tQKAjnriLAUz2AXqz3LMkgKDDvPQm1trqBB97kVv4bgvf",
  "key22": "2sPziNMJ1ZgTxLhLtdyDMtxNHTngGLasqSP1sDGqgd62fQ2foCv1fHZegVoSU8hBCUrm8JsGoG7oRj9HPx6Fw1JC",
  "key23": "2RierC2x2QXJvyTSSgPfW5m1Q6NdE5sJPzPDBnxPcmmp33mPaQq9PsEx3ShqX63a3K8Q6USN3Z9QkBJtrhtHGmED",
  "key24": "s8mKJXM4oGgzW29oQi4BWePbbAxJCi8HNzcz34KscBVS6SNPdsTbW5MD3qyu9qLDYW6XTuZTQBw2FUStRjgb6Mw"
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
