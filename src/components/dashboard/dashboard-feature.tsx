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
    "4szSyaXDPbKEXgZt5AwCfMQv1n24iu9ZgCinQM4BododRzuSfSWWYBUJJQXDp5awFaiM3ZmG627uJSGbqVLRLRYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEb7JFJJaR2GTh5Faz6vnhZPRV8ijgcb3rCj8jVjegYNTPdkicuo61dxvkPM9vS9Y9AEKD5WE2U3WwHsXTdqxsc",
  "key1": "3qQ9uuf6qbVvQSS2AeSif9B1fz2aTJi8DrWy9wHiriXejnzLxENXpz3Q8zzkW5mqAY5aAFugK7VaNeFheZbk95Ju",
  "key2": "43eyK2Qup3DW3BgeUybDttikskseUaoRPP94X3PUAs849W2tnyKd4MRY7fDB83pMNRgMcEumWXiLCgwMSapDLh9u",
  "key3": "LRNRQer1h9Dq189hymcJd1G65brpFjEcqYWozhS4d2VaEo1AYedzqPeZdM8SRnLT5WVUjiGizPjHYoH58VMSCMT",
  "key4": "5HtrmzPJMaURer2xY4TSi3KgUVTQhUznn8cTW5EhWnnWWMmyA9hKTiBmeYk751NYDDN7am4xUAi4SFMZKRX8rfMm",
  "key5": "31CfAgBfpY44d3My3dUwGN7wuHUxyBETSZvQDVN6irutVEVRL6NwC2udrMzcTn2PndJqAnZHihmd2SM6G1qWmxHJ",
  "key6": "6Upnfr4w2ZuGx881zS5kaKvtB9ouvZy5QbapSfaRrnikH3725ad7vU1tBaxxVQckdssm9aT3dmyMfkzX8vWZGhW",
  "key7": "52BLVZjZs1GtiPCyWEvraWSUWVpgTsLB341hdUaPTsEiARW76jmypdybo5XjyJCzZAkgMNTtiDBE1Q1mDFQU1juz",
  "key8": "2D3sg4EB5q2Mr9PLhtDJvUR5QnscM9nunhe4cCpG6gy6ZTQpZprc4vWi5EFCDFgfZQDQgKSGQkMALyy36VSfQ6nD",
  "key9": "3CqY41U7QRJN2AMmhzz3Eu231XgnefhZhbUdZRi9Jm9FAF1vZmzpV28jmxfNf4X55f5opQ9bXQkGKhZyGbBM4Qeb",
  "key10": "2WGRZJDodTuKyBe7jDjjVb1y6VsgJtvFz85EE5BwTERGrdC8zhEbU9ntR5P72VAhAcNdzVmdv3GziyC2p1XhtMBK",
  "key11": "29Zxvc5GFHzhK81Nde9rxpQAJnz9yHXxqAVAyATuy812YgV2H3RswUEzGuN4LKSmxmqKYbe7xcX5CgtRgF3GyTHg",
  "key12": "42r2vgrdcg2PrMGMrosA4kCGTaRU1Z8kkGp4nKfXPAxJBvsxzmc4UCSnri65A5tkzoqmutyyBXtCD5f5F6jwhpp",
  "key13": "3LwaFMyJkhyBqwtAuY1dkJi1nq44WmQmZfdRcFSm2gZE4imZ5yJEBakQq6EKhzR1X3aqPCuWYHQp4gymTUy2TbPb",
  "key14": "3qWHLM2uS4NG3HD5uVMAdHfNviHj6Sr1oEMVi5y6eGgADirb9Zt5D9ZRGDuUpN6mh8qge8X9usXxjzDHZ9ibAqXQ",
  "key15": "5t8tZhh4vk8rSQZUDCNbzwj4JfJZQEGtZUpZaTZvoxwh9QYptR84qbJB6KjB6gnS1X45qY9UwLsFLheccKnt9jXi",
  "key16": "51de5ZXuFQtkVsjVtJcEZvw7kS1VTWBXFxJRn9fSYgbdST6EpVoY5TjhRH8yn3o5DT6TNh4pyKLxvM8HvA7tPa6A",
  "key17": "2fith2g6v75pB8c85waSThdH58qDYr3RuhEkg64tqrzMCF3ALe1ddG1eb13X36gKwkVBW79hx2v62LtjqrfRVDNJ",
  "key18": "2vqdribMtDVSC9bWbDjDA7rnd3E5Mq2wMHWd5dLSgzVFfjXYBmXzHhbuLJZkUiVG5qCLkyYAvdTPQEm5vyQvMTV1",
  "key19": "2fac6pTF5pr1ZVCto3FQFp2bGUC3RWtdNFPb8pzLPHzLwkPmXvDfy8uHb3h3zvmwB7d2DjoCC5eGrvFJBCunADwr",
  "key20": "22VBGz5ZcP9q2NUjKKNne4MMGxcJ7oC4jwzijJTx7x8E4b4FPWcGBc1U3smdzLa6gh6MYrjjsruHSy3gnEDboZvM",
  "key21": "4UcKfBjkFd9w8rvroHVWRcSABm233gpRKsB3EyGT53injj5a81zzs85bwpkmT1VbV7YhExCSYB8knyvePBeLpuJ1",
  "key22": "5sDbVZTta4GxP4jzKVGVK8s4C9cK7ZDkSFe5bdiSWQtsGATMuaaZvFCwAVJJLR9ZihetooJEZrQiBXTwbFUVDfvu",
  "key23": "xNMkjMdmaSAsvjgBWpJQsupgddg2PfehRAo6nX5d1j8ey9NhQxmA7STYgj1rDVPuZPTUv6rXPNY3maRiaTT6tBj",
  "key24": "2j9aumDvF8DSbrWQfuWQAKshRWrXygPbnHkmNVGQCsuY3iS9CWbZBcG6ePxgqN34GTrWZ7dnSsPVbeaPKc93didF",
  "key25": "5D3pZ8a4tyfJUCXCTpzb4gxPKD4kp476iLEErkxdjHV1WaiT9bUkw1Eb2Yt2poW7dUdaw6YPg3MxvJMoStVfbTjN",
  "key26": "4tYiXobhmxHJTYqWUn6Xwa8Sk18FHvyMa7hBvSip36SjYM7fg9bAVRrfEUsuFBpexdEUVKjeSjDZhr46D8h77uQa"
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
