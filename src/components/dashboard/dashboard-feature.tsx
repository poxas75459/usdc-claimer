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
    "6488aJ26LXtTBMkUhH7ox5y1ha2cV8zkvQo9NdTeAuym5zKBxqy7diqtBB1NBQZiuZdLdWjhHCiwUsn1FpXbdVpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g1wEEpRfZxRxE1V8HT1SopnGkAxajKg7Sr5QKg5rLd34mG8RQvNfw98X8D7KVGs2oqRcASy2q5iic41vRk37cBF",
  "key1": "2vnxwo5siU2ZaQz63jTPEBsfbME1sPdA4c1vCPBsPTcoc37gE9xji1FT8v6L2QngXs7GjtwWithWEdRfipJn9NXR",
  "key2": "475wrG9SSpcBAafveF48Z4Y2ZYxmwDeQc2M24GSmaLKZhmWGbZCog7B5vFt4eTp4gxY7m2pHSB5xDxnViJbonRxh",
  "key3": "ebEfKBWkmq8imtAn747PZeWjfK87p6kHEAthexaFCZj5spNsfopoQioe7Vx56mj9XsXPp7hkAUL8UQY95dJGRLd",
  "key4": "3J8kR2h6EGKm14kbrXFpQJa4XJMVYcsTBY7fUHTJSetKF34b8faETQu6ArSGkNFtUbA6VdAcb6THQ3oe6EYcWByE",
  "key5": "ScsvUdKy1MJWhwHVnwqje1guzrJHqnEUsaU4VA3bGbarzHoBsCqCuPxRNdvBNU6zgt6y5KTmxh2jajFhgkW4YxE",
  "key6": "eb9J3CK6nNaUAx8uaDqhdrXyex55RckMVZf3qui9fqquANx41vTDP43iiPMVCCYB3wKH4g6f2keNiGq7pVUtjH6",
  "key7": "3cJbRTLBCTNC6SpoGiXKTFHu9zh8NuoKS1fLHKtwapdMxdY9qT1dneYRG26nZ341rGJAuZ1PrZmhmcQLYaBVFb6z",
  "key8": "31drjRxgsGZfG743QGfXQ4og7byMXkk9zcsa6EmXJ2srRV2b8pU6GWYkPVXfVMSRJimrENY6TCMpZVzZWeNyizgW",
  "key9": "5J2HYN4bK7EQ7KF7KRdadZuJwAebQhhGTBsx1sufKMkFn5xvq4aSkPxWeJ1njHHaDFGKNSF6HQ7W1646pfXTV3xx",
  "key10": "257qHxAqPHbWGn2J627EmiaSNUFxTfijjkMnxdQdToK9JkskFw8jvTS637zU7kNT9dMEN8CEAaJ7W5vPix9iXwFL",
  "key11": "KGnBFppCB7cj3VpY6pcjmchsqMTi2TmEkhKq8N5qzsPQ1L8eyKRVvJM2JKCmcckhG3GcwmRoPBDs5n2j3c4fN9R",
  "key12": "5Xw7MWsHbff6m89Rn3XNiv5M5nVaw3akZUMad38NRPC2s1E4gJ7wPfs4YUhZnb2jB653GmJAaRn7BfyRUdqDnZ69",
  "key13": "PrCmRNcdNdpbg2UTzVgBhK4z5vHWdZzYnkGLavanS1vk2LCUaqkcTcnSPMfDVtK3qkr4W91431q4NUcCfWvmbK5",
  "key14": "5tuEwuEEcpp1ywoHH1uUkpPM7vMkJp8vmt5dkyXJsF7PmgHg8itGQTCJvUf6qqp6ohV71ZQtSpHqTN5u2Q4LuknZ",
  "key15": "636He7Muvm7UCQzSnRQSnGn1xAhKnBz8rwUiQ51KHDV2WZvJZfjWNUPSEcKMLA3441K8ZWNbK6j5Qi7Rx5XgVm92",
  "key16": "5t5F35vnGkyKh91Lu3esGZ7GTVRBTszgwytaMbsY3YFgaysPN2em5e9YodRZZbahZEhxkzyH2PyjG2hqCwg3P6qk",
  "key17": "63VCfzmwuQ5yTNcEEjhNtDHEpYq8eCfLVYmjTwVj4jqSgn7ZbdtafPA9frEzfxox7yfm2EMVxPJa6UJWLJCEg9Lb",
  "key18": "58C92dHs2WjvZqkexkXtZVSsrqWkMFwKYuD6tAq9DQnjrkkKzQdxAavs1MYxQNFaRq7kjcZg7DF628SGyDJVJdy4",
  "key19": "4WRvgDenTndmMVacBxUrNY5MYi8Sy6obewSP16qdTNMJe8Xw9wgaczF3PhKJ7HGDCG7HTGob7pbY4EK8ttceEM59",
  "key20": "2TMWS3xWbohcfESWkzSPsbPcbaB1Niz4WiR68VMP81PBVxVp9Y9tE8ScfyNpyHguzGjrWXysDnBmdDBbLGfrM1yi",
  "key21": "bgAV9aGVxnsbKhnmtUAEgvjTrhNKYwDHeNtBHLX3XNKdFeh61gcoJB2ReTUHVykBrCMauecC4e9ww5jWsMmaXC2",
  "key22": "5a9psFVqBM9W69cY8LZ4rMKzour3b9gy49i88jiLojpYG4XVWLbqYYG6i8rHY3vtBXpi9eK9DKP7gBFfMPykBd89",
  "key23": "4wE2HcfCLeaV3QYnbuXcyDkr7cD1T7pk4GxgSTY6dwtJB7TzYpFmP2qqViW6VFTZcwruvYuW7Yuy4Led1hZbfETA",
  "key24": "5wKQFYSSMumhTeoM941UCZDtLeNN97tXENbqnphS1tUt8538fvjAaGynrCxwm59G57q5DnG59oxAoCvgUneov3Zk",
  "key25": "HhtLHpLyvqZUFvUZUxTWbJt4fhAfL26DBUTpS4x3s3TSXQefezf97mH8n4x8r36bD9Xcmt3vdEDA1eitL6xF9hW"
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
