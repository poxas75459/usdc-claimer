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
    "46ZRjzHZCYDyK69WAfTKP4twXr85MSu8Yia5R4SkMaitNCH3JGoY6gZtnFaLxLUkaBng1yXuLvnxRm3EQS4h9mjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RhZ4fcaomZJRNH8Qo79a8V1UaCg6nHnRSddx2xLkiYe4Kt79CL7nuTj5BwsT13FVaamedVsUCcJvT1UyfzFfqHM",
  "key1": "ZLArZch8sVgB115oqcXNPc3PQkRoqzit3g871B7rNakPvyeQLmpbL3BZDRD1CteU62TN8rN3VWRzSEBmCu981E2",
  "key2": "wUhaeTamEznUjJbcW3GBufHv1CnnBgUCh8ZyyZkcpLW66DKaWVxFZUYvvaen4qtXaTzy166mU1NVXwdnqE4M47U",
  "key3": "36kjwHYui7HCS5WKsDFkbYGCbz6PJrbrruUiBcTBGVyPCp5hZM2BfGcTdRHHfEG4ua8qCWWVryxCHxbCi3X4NmSh",
  "key4": "YT13J6ywyHjWbybFRjv4QD4rhbGPNG56c72gmGy9qyRGJYGEaKz8qyGMqCuBjN1HpBAc4aVR8uAnUYUUkyAtCaF",
  "key5": "2jr3XNx976X8ov6nGF76jxmEYNnGHYoUoDKmRxopvHB12XGtdHJNiZ8168RKqN3T7RRgJGsSDfwTtUKeMs91t7T5",
  "key6": "2LQqsZ3dec8n18rzeNaXKyKnS1F3Jjch217HVfEmJ5hCQLdPsDcuqWP1wMsoV5ehfivgSk9Aa5XZgkujvGF5CCjj",
  "key7": "2KnWyZNq82crK4GK4QXpiL7MHbjLhyfnMmtqXFC7HfUygYtyoFDfS2ty237pneJYtWLJN3a3P3E9EMnhqVrxp35i",
  "key8": "j3fjsn7CizgVRFZRwrSDFnMii4n3mET1A2SWnT3FX5NSxySRuKTRr9Ja6VucU3jUQsh4HsRfcSARojs7gQcbqPn",
  "key9": "5D6svtaXiBzDSkRdLWuJFk6YEg4uGwZQ66zKNZ9EpcX489wpjUzWL4erdrQfcJ9cVfyxXmXdzi75Jnrfo9xYd25h",
  "key10": "V7dDUPx8f2pVJcGBXNnhsvsPxbkU8xfwsUuNzhREjXyWpsxMMeWaJBF6FbGxk3nMT63Kn7azuAQCUPQT67iZBoS",
  "key11": "8Js4TJaH6W72Hb7ZcZfKJojX1gm25veDfWmvAVp4QiTXFpaojGDHHGEnMn7JakSyPQRZNT8nXyPMWpvnHNvxBrB",
  "key12": "2RSbku9k6z2Q4ZLuhSxrcqJ96yZSo4RG6HrKPyfdWFguBQtRRnFxGSLZqF3pXB84k737NwNJpVxx5adKEqKqFrgY",
  "key13": "hxhW8KkmQXSAN8v3hD5JNrNthBvtW7ri6YR72fy41BW3nMAC6fU7gmmxtqgP9EcF8kggGFPuSmPwHpbBtYkZ6Em",
  "key14": "56f6MU2Kcimk4pACaa3Bu1pMEwwNCbLFjgC1xydzxt1SHvyhiU8wbvMvC3PytPD2Pnp9FTHxaQeCmffdSicxcQhk",
  "key15": "2kSkEANHVyVfqWctHAXFDXqp9qhLnAv2M9ztobXpA9AnkQxv4KD4ULZPNc2gEybwYQxk4N5uxznzZ7EQbgfhuDmC",
  "key16": "2XoJCzot3D5ZzusV9B18Mz3AXeLoezGweoXHYXdQ4QWjrJ5u6TjeD2MAuKaPd4aa6cydfyL3wE6M4fQHR8BsMVRz",
  "key17": "3ZGkf4KygvRCPK8cSRFb2R8N2fGPMUe7dHe7ppEZND9Nn8NU9grJ4jkdSK8JRoRgKcxm3kDv9imysyEHtQHhPwSU",
  "key18": "3Tk4S4jitJw9FcWGANaT9QZfkznRPnhFCCEuJxpaGLh6ArmSgx8897rdUyoz2s3XVjhMPTF6TfL6XnCa5aUCpUPy",
  "key19": "gyiCDL9oisq2pJk8kmFANSdRARc2UN8QtGQTo9vmP2teyFWsJXf6CYGNpHMWMjX9pHGWJpEu1wwvfbXw2J4UtWD",
  "key20": "jZNvqJujk2zFkytcW8KJGELKqApQ19D8mpx3hiGbhjreGxsdKhniUgAF7YxrbDq6vUZ8K8T2X51ktntYLvN7FUM",
  "key21": "5P2dp6QdfQMyfSvqtf2vc27MpEzSuJC7vr41T2P7Bv8tWsa81ENHTiJWaXN3rxfX8dJLu6A48rCYnJp8TRTsUg9L",
  "key22": "4vb5MxiFCa2LHiwhBzqWN5AnE9bT3NWNfxebSbHv5pJnrP9XL6H9vJvTLsrJTebJ71nhtzPfq4g6sWXQS1Mk9NRb",
  "key23": "2z4fjJiLPk84sYFqbrQ37MiLSV6Qqi2oypxFo2awtd9b56V6SYxmDqbxBBHUqDqTRBFH62zXveSTTeXVVgbn5ZR4",
  "key24": "3Dfm4wCuAfDTwAuD3CU2e4qQWpniYzspTno12bWUn4zzhoLNDft915Nr2xDTVtQdoCawHciVbXQvmuLKSeBe2Wn5",
  "key25": "4SSxdkdX1VvamC87Q4Zg2nmsE62XN34Ab6fsWE3qdj69FQNuw6eWFanzaDhu2sKLeVzUaDy1WVGcy4tQW2nJGRB8",
  "key26": "5UJ4EQevBbACwzYwzezc4Q86gQF8N8HV1VHF1EMNqedsTKG1YKXqsvSw2W6BX5ZadWjGQmXZyAHpjkbVirQEtXHy",
  "key27": "3RdCoWDmoTLwiCNZoLzPg1ax5EsWuYZaTK8nDrM6CmK55AN63x2uf9ACR81EfouY2kuUmZW6KB7woev4VfjiurGa",
  "key28": "Ck9ydBb7R81YXSNi6eao1dskyVn8m2CLuwj2MP1bGEC889rfm5sc5Cxga251AqU2m5NqPZcce9r1ZzWHbKeYdui"
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
