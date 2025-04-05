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
    "55aUEdWWHYa26XMdYHdBQy2LjHKAGUDsRYc5hf4QNEoj11VzwNEBDnzPAW7a2NhM4HR75K1FWQppuk13763893fY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9aG3Li42m7RCPuyoLoGEFbGyxBcRQR5zo5v4vMFKdq2u9i2KoVANCiUcEtgAxykdMHx4d6wLX6FzMpY19arZXi1",
  "key1": "frSLr7Cffb2qHqXgakbSs7JMSDN8n346WTaoP1fLfQQ57KyPzFgK27Q1eGMk2gGvWq3MeDcJkq3oEaUMuveb1mM",
  "key2": "8TAUPxY8qjz7r7KxiWZTaAMP6nCFYNy6t9Fep5QQR9WEsXrirH1Qwj4Wfkq8wWoeDT7Xf6zwJ5y5XamTDrJjGUp",
  "key3": "3RWFkWV4a96j8pCKLa2XHiA4WXj3GGi38cdHUgx5yNDTLEt6w1kbzTWGgn5SunCwZrTXUF27z6dJnAxzcFtCeqrx",
  "key4": "4r34TNQAx1x8Gtc9n1DTt63Y1BZrQwJFwYWaEbMRjZ6Tb6TdVTKRVbVifSXVRmB8cejsgqjs35vSpaFkPanZfCzD",
  "key5": "3U9WXp64YFdsuHjwKrabD3QiD6hA8mdzaUvEpZwsZ2SbMHWzFNkY3ssMizKdGTS1YfyKXSnE1N2XkRvq6ctAcJNv",
  "key6": "3FPxChSrGhrXLPrVnp2JnkEbNuLvd6KbwjCcxF6W8NcQZKKFX39fCAcDy6oLLr6deKoE9UxQq7etYb9y9VBaFgZy",
  "key7": "d9MqWPqGB36B5XiqKfv9PmEHRgeAEVdrZwhuYh3Bpook1NX7oMg5P3mLj39mHEFCGtgJPPApvie5Rve4Rrq1aeR",
  "key8": "4iBFV7P5md5dvYJJ9vFRnJ3oSMoAgF2AyQuJ6r8b8VQT3NS3Lzm8WXGd9UKYhx7pkMJxsTpwjoC7m1QmVuz3TJsg",
  "key9": "32mHGnq3hH56GRdFNkrgnVgX47ET1aoyvEcTgJhcg32b8Xixk5CwyDmhwnqmb6pBpWnWZaPwyM56AfnZeJCyUGP5",
  "key10": "2YAh7eCJDE2uPwb8ezu9qdvVmhgYeRnaQnjFgjC6j5PfvX6TCRs9J3aidc9joPGzWu4DsxP8C8TUG8J8x5hhe1dr",
  "key11": "5yMWJ2MQNKe8HhyYxauxWaR5hwRds5f1XqYwtr7cCpErKjTW75RS6hZ7TFgHEU5aEDyoNoStqbgoQvfwPHYRSvtE",
  "key12": "8apvEJZLEMZG3sZGiRMRVSLy5NFmUxFWH2x51wNcMnWRJgKsfpSpjKjoLyTbHJT1SPqUpAJqJpqvzRYGN39K3R7",
  "key13": "5dYqXKhNy7FX56tRbvAVzuvfwVV5yKfV4mg1ysrtebkgCgEEMtDPA7Pw9PWbHgqh2iJAb8bMQveruwStmSBHS3dG",
  "key14": "5qhQ4GTX58qFe6HzLJWB452nveqgf137mN3CmqvvzJmTuAPwJCJT7o5PAZMWUAE7DkgTNvUmxjGb85YUuafKTrMu",
  "key15": "5wBFRF4YmDzH4MRe9ZVgemSn9QoTpTUBjHtossNjG7hKs3fmRjCZsYrjgcXhyYNkLWbYSUgmE9jHS4TvnMsb36g3",
  "key16": "2Lm2zy29G1o4U6qpJtE9iBmLYkz66htPWY3yMYSK92t4gTvuxmXbmttLWAMNWrfsYyrptxojDpBo7LF2ChDymRV4",
  "key17": "2B9ikJUEFo6jksYd8XywNs6DYaQiVHZfrwPXWK8Fp2Pcno8937WDRh32tDGhU63qgjytgLd7xyeSXx3EcdACP4BT",
  "key18": "3FuZgEmvtjubsW571CRVu77PnfYjqU1SQhXdqnvAGY6JV31NFBJbjM7TUB7Ue8H5RyvgRQxk2oy7kBexrZ8SC1Em",
  "key19": "43Nu6BYqh39tegcNAamEp7Bjc6t8fSdWLGbwZo4DyybsNfTYVNqnAadqjL1tQjDo7i9FbmavPuLuGWc5LNqPHSwh",
  "key20": "taXCjf1dyyqrssT42vUg14fZn942tRFpjVcga1GnENw7sBP95v4JKNXjxjyDEXTCGpTTJXKknWnLqicFZza9Eem",
  "key21": "kg9U1ckgYfa5jbC5ozKYojXUuJN9TAjGTEp53gVemYWe4X1LbmHWwD2peu5tbo9LyGYbrvCNjfWGi6GxEZ1UeJH",
  "key22": "7REPoiHXwJMEELF7gdVkB1HiSNT6Y9wpDMVUZ2rVo5vexL4FwQ5zh1Kz1bJZS7jazUKpCDmjSr6AHEPeYC9wTtY",
  "key23": "gFWKSC17W9dYvHUimneUbYB5YGvK96cTQhsVRVBRPb9cpphqtVVYCJ3sujg1u2C1Mgr9B59HQRnFuBVTzgxVKxh",
  "key24": "3irq9EmVAmCpG2RHTfYsYMpR2U79moPN7NsueMrhcEHinZySt3CsUz2tyHYMCTaiSpScrUDBm1fmfATXHPpYvV3D",
  "key25": "4UW5wJzJXNcpmzk7Mw86fgmt32hs2Zv1KJ1L4EHaTLR7yyoVctCzH4X5cgxdRocsoetjJaHrz8sfg8tNj2F7DXyb"
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
