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
    "4jy6kHjG3hDGcBMeSfXwLNX8TvJ5TpXDxJjU4n8EihA5ZPzw43AVRVUvmnD4xsjh6NZGodMqEYkjbdtKKnd2a8uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nDSfyQUHybpi2u8hJmxPDf7di9fm3tJFfnQbLE4eDb9dGWchkrGGJBs8w26X1TjVWadFMtNdkjeMngPVVvVqPns",
  "key1": "3mGYGeiQmCc7ccKDAfHUefJ2hkS6p7taGgsBy4her8m7WhUEyoA2vDcAKfKwBfRQTBQz72dqrv8dYdZTPu45or1d",
  "key2": "3vwGmR4kB6FMdwe9wYbdzwXumyozaC6rEsmpmUtp4Yx8T3MXJJ6iuZ1wB4QdiyQUUdoEWnHGz5zZoWxFGxFPpG28",
  "key3": "4Wz5tK3mvKWHxxVBSy9dFSXqFTVMiomoFaQYPjjJ3WmEs2etamt8qmVKPXdEzYzqMEgbv1qC7YmZouwx4HvxQVHu",
  "key4": "5CmCbu4WN3SEhkiiqLmyNQg6uJz57QEuFV8qXktZZcN76nsFrxi6ocy5tUB3Ty1W4kDgdYJHZuWa7bv2DYJYesVh",
  "key5": "279g6VW4kcuN5KmtN61XgeFhragYUGLerB7Wywc7R5LpkVNV2CfbbahvNPyy6PyooLLLkm65iQiaKWaNzmb56zgE",
  "key6": "fAQgw85tUewjjgQVmo8EVECh3d4hyVsZVt1Hi8yNbQvA3bVepSX9k6oj2EogKpyFqrJp16qXYvHKc5AVr8D8BRn",
  "key7": "4xFo7JvvdJdPpsbZx3JbR9XNGj4P8HWiw9McnLt4yaLXVDuFyMDECj7yf3ouwxbe2c8EGkxizLuLau27TntwT1u9",
  "key8": "wwD96G3jir49xHc8dDFTdJVbjb29883gwDdCnCpWm65AbDHVxmDSKnX13QBjFwcS2ikKNdS7D8sdJ5Vj941LFKu",
  "key9": "5gnxYeiZmV8dDYRJiagm79xRCNftrmh9gnoLm9SYRKXkYqnmf2ZMuJ3hbJKUPwX7YuzRSzqyJgatBKFp6Z3N8zHA",
  "key10": "5ejXjLL65QwrfYNBbH8SPEayudVGWQkPMiZXmacfNsdn9brdPGd7RpFhQTC9fUDvb6pxKq3JznDQ9EWthVu5iQ9m",
  "key11": "4DZfE5GVZemeaToaevbeDHkn8Yyx4BnC7HtiLxnMFwjFtT2g7UBt5Aw6F9ATnZWnxhf3nb7H7biH6z6XVgez6KZt",
  "key12": "2zbHh2VFKjyhb2sxWd9ddJEwSqwHcxwdy2eXaBocVoFs5DQ61h4JM9GU1vwhdS7hzRkkBGY8LKVkm1Q7UmcY7EvX",
  "key13": "3W8Cogv5kMhz6NizniVM5SCFUJ94rT5VCjMo1SyB4JMe6JySKLMTVdPBiooGj2B38pG5pMmNgVi9SkLxcDM36EYa",
  "key14": "AVr2app9N28Sk4jTAhG6pE7y27wL9tis34m7oJwuDLamqoxyMUwcD1CbJhTyTudXsQtRpBTE8C7p8nNa2dN8TtG",
  "key15": "3phdRXcerHjKcR2ygqLv2Gvz6nKNPV37ANzJJDGM2wcVoeV6ofo4zSsF9mWwhUFDJoJRa7E7MXFEWinazP4Crwxu",
  "key16": "2fUj1SPv8pLxVJFPowVkxMy9Pg52xLsVZtxwoSeRjC1QtcsJH7zFRCqZyKZT5p6wNHU1SrYVSCt3LwYMg7Fcwyaw",
  "key17": "5deUQ6oWcnhHDH8fMD9DmoP3Wmp6LWMkYJGwQ8Lcpc8U8ucx6qKucEVbibnFed9ZYa83W6nULc4yXfw867G7ULnc",
  "key18": "49tvoJ5RWhv5hZTfLpAs9US1PAGXG6E7JKxfgEFBjkiYcKav12VVh9zzjKHoLEpWnikNheAxu9u8ariC8S1szmgd",
  "key19": "4YpjVkNqLHm4dxdKeWkMyTgfb2UY6kBzX1CcLw4o8a25mX7234DBVYuiyZzKAcWLc1nUy4sLHNbquHDmUXPwVJLD",
  "key20": "cawCchVsHzXdPZ81bb6PSGTXUpgbPqu6qHFvAjG6HHT7V49DdUoZYr2v7CfXAjcofFTnA98nkYnoJdejHvGTJXi",
  "key21": "2vPrpEmo8D2h1yDvzu8MQ7xBy1Q8S4egCSehifiq871LoST2TvWYLpiWMDoRorFJnVjwJuLX2Fg8xwnG8WUMLKUa",
  "key22": "2kvtF8JRoTbqAuTZBmc4Pvs6ZmAKT7st9d3QetPxanv2ijtwajuVSkxFViqNCKPsw1KtwmRAbcqnRKBvr3mG6PXJ",
  "key23": "5QJQDhR44eyhxBGXoge8Yo31GBEo5sK7QA3uBUMe19g3w8MZtRXSituajEMpSkM9dFXgUJAvfZdhHsbfj461B7Vh",
  "key24": "3NLydSJLqMxVRew3N6aHGNAZQ9AVHedzZ6Rb1kviueZj41C7UGZt7b4sVggo4fE58Djdw67pwpS72KK3P4Kd1nw9",
  "key25": "34xMKKxzpc5Dk5cU4zPfEh1WVEzVHra3y4uJygmBJrmv1KtMAvwWetJyXUggC3bdsNKknUMZDsHvEAJLdXKZQxkT",
  "key26": "3Nk75qegDPRAe8vmmTWcouU4kgsuEBMhydGv943hxMi5RVXL9arQtH4vC3niGQNGYnfPh79W1Rh4g2CyMLscob1T"
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
