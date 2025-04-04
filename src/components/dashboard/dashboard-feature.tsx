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
    "4HZ7v1Fk6ypqHWRiXZNawXS3ZPPjPaKtAnY8thq18uzxai1SMLJavB8xmuLaXps5xMeYRFYVZ94bK3pvvta3523L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Kd6DkzhXRpbaFQCvyLBqJeh4o4A46GKug4kToD1rpKVTMJL6W3cytDpAT7w9c7WNN8WgBXxiwFMaewaRMDYqHYX",
  "key1": "baLKkxnZy9VFJELwtWCAyKhqyxi2caqb781tACUPJV5f2NNaLv6s2hiMbB6XLJJDwxAd8nxRiRM3oPVXfV8rH86",
  "key2": "5bLcQQEWMvm8YVF3AQx1RCAVBXoJMoou2RrKgr1qNPSAmTTM4MsUg7ctNdSLQJLX5kxET7MKgL3khuzwn1w6oDxC",
  "key3": "4LSPTEfPBHeixZGb7RVmvNjoA3K5KSEhBSLUfP23hS6trtQCAEqUW6fv3bLPE49qUqBFZsjGraxsWtVZpoCycdty",
  "key4": "3aB4YmB8bfXvWsBt5b9djTV8vE4SGUgvJsyu75uZzRfizVtdmjavRiPBYK8ZMvZwcPt2vtP4wj5nUXjR4qRunAQ5",
  "key5": "3HWFK6QHfbtjx23HHrux8fmJNQnZR6SeduizY4r5rwjsKC9z9JLZx1vWEVgKTCDKhYWM3TjET8G1fYKEbWnqK73x",
  "key6": "RA85fsHGP7yb9TDSwDzqJYrVB9XEr41m1qug85XRZxLgEiCC51AkwWfkEbTwsYTScrX855Japb1CfSDk6tG2MmQ",
  "key7": "2QjKGu8do5oWCpzJWyvASBZ5UpmPjZnxGDg83DXc14cSixoDajteQtxtJ1xfCBjSKDGqX5jEeEYD8gk7XBKveVv1",
  "key8": "5j6ZyhrRtiwHsM2mpY79sfDhWkbZpd73se2PoSQKpt2ukWAwLg5YSnYYMGyqMqpbK7xAvTMakYFYbqZvoFciERzW",
  "key9": "56nuS1HMoT5rSPWwghMn2PRLBwR9CYLfzayn5cF78BHLCeUiXK12xXodwtJfySisdqRdDTaqmJPzr5DEg7znqwz6",
  "key10": "6Pg6KGGq69J87XiknkyYu3zipvCU1yaeMF3TZS6gtGnRnPHv7RGiMMRHbg2yTWEyxjYfCA5wRsMcNMtHRBZ2fSU",
  "key11": "5tXtZBgJqZNE587sL6QHJ2S7pdGjbhMSJrf3gqUhrSHgMhGM7UHCWy1GbM3pEn3TQpohFtfYUN9H9vV86yYiMKLg",
  "key12": "pccjAecCu4po9eXFwy4pxFtH2czEVJF6nbQDF5gkmMB6VkQ1sCWta7Bb39obJ81my34WRD1wNuy4vwKcKWfyPkP",
  "key13": "3DHM9fwVcdE112mmXwUQyXkzzzTqE2Ft3kUpVorNa6KuALcimdA2wbhVYUPje3QaPAeA5Mr6wAABMamMvmZoxzJx",
  "key14": "4ASx2zevgD1vPwcVoDneMCy2mfyxmbXDETu4VSer6DfHefHXi6w4snAFA97YCLYoiiidDzsghK8UBoCXWsxDQVRu",
  "key15": "33uujt9dXLMm76PQN9juNLiJpuVRE3NLBz1AFXgnxYKVFCoVnhKmp9EN6dkLR1rcx4hiobZnn7BSXHtmLexhaCiQ",
  "key16": "4ta1SwGhoMPtAVDUVugTWFuLW4foPifBwud4tdpAWLPSB14PSJyzVMtUqttNJ4tgUQwDf93DXw2LEueExWXRjy3C",
  "key17": "3oRjCzfPX7iac1ikfrjAkTLg6Leqfkuc1ZVUa8DML6aFyX6PfUzUgkDUcz5D2dGqJPZMJh83u5QwmqLKxGCJq2MK",
  "key18": "2E4o4ekQDbwUuqvTGbGVvrUG1PPiTwTSrSR7YdywFJPnrM15DcwjSeaPPE7DJVyjMe6JiFCaNVQrVPJPma4JSxVv",
  "key19": "2Lx4dgQqYjRGWEFXGxyyS8tHJAKH3LsGm2f7dEJW3QoDtQnCXjjh2xXgQ74L3PXGZV2gmG9p9f1p4JnkDoaAtVaw",
  "key20": "2VTKRSAifYLkJTmsWQuamTzFY9RDQPnjgxkNpthjvCz9SQ9osjrREQyKsituPReCQyqLjNFo8dpsXU4txomykJ97",
  "key21": "5AcEkSKaypUZpQjPgQJ59EELxad8MvgQBTesHUnf3TExWGSThMWqJ5XyMvv4EQYU3DjgvZhbcyV6dHuP8gUZzw2U",
  "key22": "5N7pLa2oFNw4xkErxRL3oNdKroLqXdcHcSQfRXtisbgJ8wnCbYuT6ES6ka5USNQ9N5AhWk5Cogj8LDP5LCiEVUTm",
  "key23": "2i21dj8uuXDMv5XeX5TABi695eWm8Jj5DsrZohFq5L3SbvWPEfhofqSQDAkGfbzwrrDkEvvVC5xTC8YtTE4GwfcP",
  "key24": "3TDvYxNE5xHgKWoTrJjkhu3ffb3Ai1qXoL7kVEmUBcMfHicxeQXXk7te6oJekbQrLyjYzRM8AmHEXhFpFurVNJFg",
  "key25": "KyrDPLBRJDHXYZzdTaSZ7PmPByu8sWe4wagrWz68Wi1N1GJoWBi7sNNsp9hY8hZQnJctCZKwJa2Tpei4e6MpeWR"
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
