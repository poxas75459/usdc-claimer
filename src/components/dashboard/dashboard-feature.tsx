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
    "4aoizNUiDA8xTue2WpmrReHej1rwz4F1X3LqwRSqb9j1RZM5fMk9WJ8x236fTcSanLLLTGDKzfxwZ9j6h1hjCXbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TnVWJ7viL5JWrN9WDUssmGoDHyT5B3LBsfFX1xWbjVSbC9ssV8HK8q3sGTSWdBTU8CivJRGwMEi2g1VLcpsawx6",
  "key1": "4YRsEViycFetdDFNyP2EjCQSdjiTjhCpj1yKM27S6ThPKALnwojjqnQwrcAYqZE51tFsvk5Xrx1BcU1MeBoZbK8f",
  "key2": "532rf1CA1yh7VDDbBBDbwWwZmPHsnumEfiLK4iU5n9Bvaqjb1iPdnHfihYHiscApHE3bjWetz6wQ1wXeWiysuBV5",
  "key3": "4znTj2z92L8L9vMfCZPcgNuDb6Gw67nLucRP2qKQd6dX9NXPfvSHDLMZFuRrPcBpk3Rgu3cMvf9aKXy5aXydggwZ",
  "key4": "2fWXncqzECo6PfY6qx3VWrevHEs5anBKMPUSjyAvfdRdhfo8oX9tjE4obUoQVye1aCwaoJXJLafEXuadnKpbkhHf",
  "key5": "2pGZ6hueicYoDXNA6RD7L1RirQew6iHqswxqfaQNPYEzBAaJ1jBGhXwioGpGz8NYVY2s3Uiy9R9Ddj8dqYhDGRQz",
  "key6": "5MV9nEjTujgu6HpuriLZ3id9yyd376yVXQV23PPixpK8ZVd85kniYaPkxfr2752HWR7ACmH8PyzCbdjZPxe7Lfxv",
  "key7": "5CcFawrzjCepuGFFarzvwhJA8K8yQWjDa7tFujRwSvptv8VmCyA2MeyqM6CH3gmkAcgiBMJWUwwQnfPy4Wq7dKUo",
  "key8": "4rnr2q424L5btDnJWnX2hujs62jsoUjKTCyEHiS7sxrLBKaos5KmdhW5VE65WapjQUpGZ76Qn4UYX3HaVhoa6GvJ",
  "key9": "3yTAM1hxeKXyXErkh51pzR7ngxdja4bdBC7ioPNo2VdBGr334TWcepvck1ByPcFTAkyHvYhQG65YvmG5DV4XLnNr",
  "key10": "2ZWCgEsqtUoGUcBXxvTA1ic4WrjdoK9Gu4EQEPKsYLQt6BLkLRcnYs3wjk554fkwzf9JW5oXa4FBFKnqiEe8czHP",
  "key11": "XUzAHbnPyc8F2yXGi9wTq7BKcFTzTsYqxPYBqJ68VWwhLwSATGVrw65tHaxGkhyV363BtTbEKhLvU4DocHLLk8v",
  "key12": "3e6xwgF7HuYNNZVKPoS7wHrMLbYQTJ9kWWthdfm3UqvSPBS9DrVTYSezXsQ5hRL2saUPGDscE6pZa527tthg2XfJ",
  "key13": "4EBqWysm78byNnBGStYwnvj2mt9X5HNyAg3cpojDpuFF9rsVjQUzQbgwEPBfJFnX8x9MvWHfNC6UGpuiJAaTGQo6",
  "key14": "4uwHhxSSGDBm7xwwSGSxfMXp3XEcxcmZv1xF1MLToQGBg9Cgckq27hUk5C42efZyvBGcsM5HTqor3prba9EJK6TC",
  "key15": "4vTYYXEGJjPPtw4pyxunVt1bKj58CDsH8E14PUPhniPCCuYN9Gif4QLkD78xVQwacpLzmFstfY6PkN2wwmVWAnr7",
  "key16": "4o5Qxjag8Ft3mSMFwB59FktP3xRokYtLFXopPcGSY5t9m5rxpVph8ZB71HQRWPuV29JeAzfTSoPXYhsCJa8XGLCs",
  "key17": "2MaAjj4KMaE9ufQYi1rchGdMCTrjyhymKeDtBbvtA7MwYL2ceXibordG7MvqSBfDw5yhbmvSiFqVKPJc2QeLVeh8",
  "key18": "4GCrLPkVPhPbmGpbkoFJe2ZnhyexNVUVsb6KpercyYjnZjRtvuMn6bztHxGJFaJNjhzBit4AVsThUvfaVf4fERtj",
  "key19": "5fEpMk7mx9HtyABy7cdjhiYHjAX8r21Dro4zDumn23zdGsa1ErbKNRMh6xP2D1VByHD6D9eq99E7g4QvnBEMNXdk",
  "key20": "CDzzZ7L6CCoKKntXifGhHUL3Heg1obbGhEudyy6h5Q5ksbhMN4oze9vuUWZFy8wzAEUcXzxfaCCeTMh6sLEgqjm",
  "key21": "4oETJ4DNgXoorBtMHEADEmc36BsitkdKRbgqNymqBds4RVL7BBK2UeEBnVdz6juetT1911rNzJr29KjBTqjvtRE7",
  "key22": "5zUqS4V2KyBttjzX3zGkYvpXkqWSqs9rJs6FmRLP9MxTCSSgRsMERMcb6jzPmRmeNuz6jYXbfGdDzrksAYi5S2gV",
  "key23": "4Rhyi4w9jY5yXC9fmG5wjwvofAbjrtE9jv8UC3NaGaMYNrzqFGV61TmsjQo8SHBRvUpAj611cxCe4nbsV2fUrQvN",
  "key24": "27CrevP5SDhYib5J2KrER1mwZ9hqKCeggvSN4DpimsNRMrqWHYdQvLkrYTFEcvutPHZG8fdy8V9T7x5QJkWD2mqT",
  "key25": "5SYwM4gRotAfudZtJMwyU7c5zzpNbjPkFstZpk42LFyrZ5r3DKqFyd1m5m8FetZkS367my853hQXTg3ScEVcVrVz",
  "key26": "3AVGq1UjeTUW8bt7fLrijsNcAKckJZqxHT96SSbM8zSXLuR3VB58SWfxVCiBWUkaAc4q5ter6kZFD53mhFHeTVUT",
  "key27": "3VNFbh8qiqjbgQ4bFixiqQ3droKERpPPiyEspwgBMGtVBgf1sasBS7cFbSZAmwVBUfReoVpT9H87FLVxyQNDmdPe",
  "key28": "2PQLFiaQDDBgq9RhyFKgdVSgpCiniD8Pojo2BQRb6hcAeWYgXLQRb8uRDTECnKSkaZgk651Yh3JCZcfUBgGW8cPj",
  "key29": "2ttSahD3U9L17SCMiUjjBRBz28M1YcQKazcdvWCNTXcAfAjEu9EJtgURVL3yCxy2TK5oDgzb2rbk1DZQr1h9XNDo"
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
