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
    "55PZvHrsNbWcCEWGV4UjDz88APRH4A47pTfEDAhpkgyBoof1wDyf5vfM6vDuZ2129QdYMQqkFveEQA25C8sCBLvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51k2yKcLQhBc9JphMbSmxCYPSkxN1eGZX9MAFz7V18W5JtK2wUVM95hLfYhU15ZQPy1gzSKnR48fcvXe6ieEHvit",
  "key1": "41NhLFteVP5tpJBwRhhYSABBr7kDRnYeKHz7b7xRG7M73r6k9LcHJQiy6GbC6NzYGd5DyGtcj1ZQB69stAKDToNM",
  "key2": "3WekwtEivtjGv3JyycazSiQUyHk1pByVPPqZsSd65ALPFCH4ZaSkUnrJr6g5ZFPRc7FHXmAoGpJAXhFheyCmhTRS",
  "key3": "5bL8YVu54seeMuqYBtXfYP5PmBb19NUsNwBwT9fG4xTyw5Qm4h4KSdHiZh89zM4zUQMkeZ3o9pXnh5goyyp2YiVc",
  "key4": "5PFN4dXSdJB638T7XV2M5G9sEnMatP2r9oYpCJPBJ4MWurGpkBMF46PeKMFjgHje7TcjfyziTezw5bUe25zkxR5q",
  "key5": "3z2xiqBjRoshFzHmuNiVx4aJcmuhPC39FjxRL8NFbZhhrEwJpZVhxszSnZ4YJnt9SNRQTMzg5uVU936rzbvFbUGh",
  "key6": "4ftvqcJHkZfrPVqHmxvRv6XMgVt5M7qVBJpMsKDJeBM1L8rqpXfLQw4Eqdebbn3nuoE5GRvka4c9wfiPyiqDPqbw",
  "key7": "5JM5jYSBKM8TAfvePebaq6jriKcyBUFwKcHPSkpZYo1QXxhHSXhxe4w11QQbgHosy9FP8FjxyLZpkBdQB8ecaNh3",
  "key8": "3Md3nGiB9SoPE9Xj6hdb8tt3YMy5Sj9eyQUY8re6QLGyNNr8KK4BX5avjhttFwYGmmuy5W6zgtPLxKpyLtLPti8m",
  "key9": "64zagMLjDcUcB8nUsB9PUpTvykUDJ9GCr1m2UZuwekzyNJX7KWzPNNhsD19oGojQv8AgFPiNmg7pydsD3bYXdhTw",
  "key10": "2KZHme99cDxbsCkZ7BUZ3t4w5nW5ApMJvLChRcxCWeaLpuhrM7iDYnkQeEhs8DeYgxufZR5Tv53ddWFCr9j5J4XM",
  "key11": "4i9zaE1srcScv6h1pQzuvddCNjS35Gxq64zgVMQJtF5eV7DyyTNKEx2KQVhWdAeDPf4krZwJGDYK5J869seYx4Lf",
  "key12": "3cZnf1Z1x3BGuHZQFdBcoCgGz49CtZeT6kvPruDhkbhMJ3Bk2HsxnjVnoCrsmtkBen67grUQiZPS15BbChSQ7Ywu",
  "key13": "5FEWGNuQmsmmh6He9wswRTC2MbDRnwcpZbbYGQtt7oExYeS5h9FEjyGhGWPFrmCtazTFjwezi2vGSVhQWAyqRNe1",
  "key14": "5eZcThXSNkgiFbquE15ZDxCnHkGo77F19bUKp9s7qRmx163gbebWYtKUpmAHLtiAAwZwFQj7XLsACfmjKKP7Qg4R",
  "key15": "429y6ehFoXqUUhDEHJadeYEWVpTDFVMQ44QC1sK46WSdP1Th9MGYTozoFQLKth8MUp6da8NqW4j4tfVjm8nu7swz",
  "key16": "4PGTkPbs8tHUEUnXiurVhhhUj4r5cruHD9CQFBguqpPVF6F9MSVhkyajeuHMMdVuv88pAXyCakZ5sm94JCFwbdY1",
  "key17": "5CM4wCkev3Yr3kFW1r3Km2Xq6aRf7pKE8PxYthaJx7z7kympbuz1Fp4WGFXTPPsJqupTXh9s8CCsoi9AQfkJV9SN",
  "key18": "ESVZk1xbVjyCnE5xQHrx5DF2v5i2kHtz96KrgFAp31jHhj4SXhpfNmmMnG2hKpnVor94WFDcgQJqswy8smmMMYg",
  "key19": "4Pwym7bm91LHE1eR9NQn9tru9iG94nSmPwgGz1Qgw4yxcHxLKpcpfq2HNwvS6JRsoMxppdnfHYAbg3jjxpWme9DE",
  "key20": "2YwmDAvMWjEY7LPZVcoEL8emfTs6YcD3zHam2WsFsBmaVGGtW5ddNQLQV2N7af9kdBhTd8xH9SfsC9caqffKfQLg",
  "key21": "3YJigzFBb5ARM6xsJaBgegsvdP2ftSZXbmZrFrYNkFJty8W8ZeqRU2XDLxhqu5oqkUpB6jX8dNSNiEiDX6dtD6ng",
  "key22": "1UCuS7Hv9MUuW8nFvoVB3xTvZCTd19Usj1sbYKdefeBQrNzjSHc5QHmNUpEkWnJWduPgkE22VtHdZGk3kjTKiAF",
  "key23": "3qpX81SdrGmHGAwVjkXUeBLiWXkX7s5ycqDZFKaUhVXM76Z9MB4V1kY5dxErLMwZw7TXHYhD9bSUKSWxcDnoCHVZ",
  "key24": "5pM9vU2cErMNhVQ6CqsZW6ViPZ7WEoVz1g5a8J47xvXYE8KLamfdKYrMMAJQ7SA2HcuVwY5f7Wn6F2tyrn2FDBuy",
  "key25": "2yPf4ZzTqy7YfGWWw8QtC81ySAzJcKLagdZNoe3tHpk8oK5YtkqNRagf34oLpnP6K6DF55PhuiosiJcuJYttM8D5",
  "key26": "2UTfM6gwKfDFash9ZMnjb3WnZTZc3vbvRuCZxoiwPkPsAevRd3UFu4EFtwfRBa5DT9PFmR1UaexfCgwH6dvv83P2",
  "key27": "3hvYVog9Yu4e3FTEWptQmHUscSVACCToqi8iCwsgVSTDRbz62TL3NwH8CxT91jkD4zar5XRzzgWnP9nPJFj2wpFW",
  "key28": "5pwS7zcPfGv1bC6RhTejrCAYUE5Y57Pwi1X4jrhFCdCkEYxfHc6eVNwwm3QU3Q6TznL6szPdXryz6HKqgc75vniP"
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
