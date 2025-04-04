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
    "3hFCguFqGesZ8G9uA2LGFVNUVZySw53WNKv1GaaRUwUXkKLxFnC7Mrv3KvdTRdGZFbGWxGyquHgBsq72syjSJ3uA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RH4xc9Tko8tKfdRWsqWYMdKtrzaRCV9wPMcmWpaAaMb2hNBt7AgWUKd3wpQHWvww6J2cq2Z7ey1WtANbZr5wJu",
  "key1": "BTszLWiJwABxqwpqrZ3jFPehLd7VDvnCQ8NyC57oSyLm9XRD7prM4gvVmMj2Ek5hXJz6dpETN39MB94PcsiqCBU",
  "key2": "4iTvBwMpbiJcaEitew8pBAd3hajSJtdXJNqLMgWKrf8pPu7R67FLPbq7EQG8BQUGPdah4UqEHs3S59CLFajx3wiy",
  "key3": "fWGPYNSZkmPPnEpYNZB22EWVcGkWEzEziPLh9jaeig633aK5WHvqQruKgjShdoceL6CDSNZoBPNZSjHvD6o3sLb",
  "key4": "3Xb1QY3GGeosPjSRVZfFDDjGd48iGcgmcc9eLmd8FDBdkwcoVwLa91YKeG6NNTK2vPgpARgdX4zqVmPEHbsSeUwV",
  "key5": "3iMsfYzUUYJn61aLcHXhBnu6znSTU7BJ7vsGAmpkz8VcC74GzRJNSbH6GhJD4dQT8SpwxLbxWumMdNZdW2MmT1XB",
  "key6": "5XZk8T9awC2oy7C43mVdMpHgvBmqfVeRFK4ojiNPCeZcWNjvsU1DDRc5YuHgkJgHDstm7Hjop9JKUuKvF327xxkX",
  "key7": "2QkBntGgPi36fUgizRyzMVf2BGCk2MGrVC7KWLDoo3wRZXsmPxsNupEX8AHeDUvUkH5U87WU8GumBAcn3gqaGiLZ",
  "key8": "5Hdv9CZpDH7XsjyBZU3UsiozmtRGC3cugaePZ3LLMzKS2Ww6qpGv2LcnnpoS4PBb95fpyomNALqoCbk5VsyWf1SK",
  "key9": "63wfRmtVPoqzwSKmDHD6VLv2FKVUMpMH7GJGVPckMj2Q8aiEfrSycBo8kme84fVeEahfAtT1Hr7SsB2n9LrbHiZA",
  "key10": "58fcWoDnac7pEtRXSX3CgRDjkZnBt5HZFKgQKv2vZ1mhdFz2Pmiua7wEZVAuSh5vcjMCDU62EmhnX4mWQUHD8Hqp",
  "key11": "39bfEWRpLojMnkHNTbcS1J3wRHXMBnJ2Bmtu1kMhZhMm2GDanxemTNZkcnJmyN5xcAG2qfXNs4ZjKx9W3wUM3LKx",
  "key12": "4oGPdVq1rQDicvvYZmcDnLYx29FCLkS2TJnky1bpYVpL4B5QiLL2z89BEfGAhgc32F3SLZQcbtNiLgemhFif7FMg",
  "key13": "2sKMr5obhe4sRhu559km2MvKDenp3DbQcbkszjH64r1dKbRqpTU33yrwV54bADVTRvCBzS3HN6ANkhWtbdPLKBBQ",
  "key14": "5jczo4SGYEhG72uiNYmfLnk2hH87tN9R4dUTMwArZYs1fvqabLAzxJARBN96jrb8R5fv3XKvc9bpfAUFjRdDTazb",
  "key15": "4AACKU18MqQn2Z6zivpb8rySmpA2TX6yemUPvZNrWVXMzfZoCwdFySaXwNAqpMZHUkmRP6x54PANJecG76uRpxnv",
  "key16": "5jp726BezhdY4XWAvMh1cE4dE6o3PD88aB1ASFg2d2hFdTvKxYT3oDMX3tkpT1gxcR5wq7DWPU6LaGUf7eh9QCav",
  "key17": "3X6uL5JMSMJRmrm7Xbd3qXS1ZDqxRhnXrZBhj6wfxtU3WK1wxHqb6pQ7kMg8n4HQCZnkoc9V5ZjhvvhqPGi6CGU",
  "key18": "2PQgpTQkHGgLdxGdpiVtQD9Uiad8UdK8vxkedig2APFXQ4hT3qheYjV2rMhQjULPVqb12W3JtAKzVcWQ6BhE7JM4",
  "key19": "3GW1xXWznb3VMjzaVREhBgq7pe7X4kQa9osHLoYnuCJu8MmoKKUvfsjjLXbQxSw6RB3CQYRCM1Rr475jdPDq8Wrp",
  "key20": "2QnGfAhkLEQTz9c1ofaTmy4i3YDvPczpuikH42B33JeYWbZ7ssyE7AN8n8anBfD1N7xQwEJLG815B4gdmNTXfJg6",
  "key21": "2UWWtk1x1RjL4hJB11xmU1HWa9Q2EPyQtEdyeDAybYDpzuBmUv1ABbHCvrhxTJyNZvr72ULLNzxmF8XYDEqyroXb",
  "key22": "5jcatXBGyWyr4SZNaTjXS6oVkiYtPiZaECYB1YXUHSkLSV3YakFUgjNCadrd6yLZ6P7UK9kFQTcjyuPrr2LThjyX",
  "key23": "2vK1pZda2SQSfDXMiUup1WCKK1kv1CCu5AgKKuWMVfZPJJNvQYKDfZgMLKbTAiumQzRDohZsh64vmWfErQy4VLJi",
  "key24": "4Cp4mAFWAvJkZbBc1rChRAk6V6dw2w6dK8eGNNt85i4gfccAC4xTVju8nw86RHW48sPTwRBnEEak6bQYagis686g"
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
