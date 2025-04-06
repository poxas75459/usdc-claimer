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
    "4qML8aCVMtSyAGig5BQNgvCQ1SVmrugmHchyYhXasFeCV7HvHwLAofpAUEPFUrs9XEVJtpfm7DKZXjAT1cWo1AwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PRPJZD9sydsE4EYh8EWKPHjB3ikQnJc9QTirdHo3tGkVhqE69h9Dksa32yQ6eqQZrw4cYzsfWaWGZvX8ZaWzGfQ",
  "key1": "2wZqmT5qFkMv7qmFiFuqkHQn1trVtZTTWcakq9yCfiKBdjXzg4y96DXWKdX1C1ePvC42LKjfJMfMwaTixiRhQLBf",
  "key2": "2GTx4jPEFgjUhj1yQbm7fnxHbpBboKpaTdN96ydGK3WbgComjSfASxiateL7Vxm9NYoJxFv1y4Radcxsjm7B9ayX",
  "key3": "3PDATQCB49P3iP6z65UHHRb7SkLRqqQR4V9GEeiEUc8gfbJh1uS7Q6UBVJwefmMwJytuXYREmSnZKbSxSMh2azru",
  "key4": "4fRGHNWRmXAk4PmQe2z3CVjdZSME8Zo3cBgeyW2jDnZSM8n8xrs2fmqJRKFeccaCgkoE6M868vQmLUgFpYb5UYca",
  "key5": "4ihCbb2MP3xtL6LdkhT87Z3PQQG4me5Cazc1ppZcuR4ijRdaY71pCU8KGruqKsvGwLXtAd7DRhQwPMadWe44A95c",
  "key6": "5TCRrve7e3wwkKZ9f14ZZA8K4dcYSofLRctPU5bgkFTQef4EXB9h1BAZ5K88MnxDJw5cPAzECBqFQmKvwZDFduH8",
  "key7": "2N5o452m6DpQc4tZgVruwXqM4i9N5t4s8DXgaTxkq3UvUmZj4CUfHgUanbDmaQN7Do7rk4xRmvfpR37JJ7xju9xE",
  "key8": "2ykon3DMNNfCgxCFitgoPSbjAzWbQMiekoCwPtwkk6f7MyDtRaFC2naHfFyWYmDpJ86D1USVxVQabyJqZzcYs5Wx",
  "key9": "54aHVjg1QKMc6MRaYmHVC8eGe8sazipPKBtu9NRZ5Jr7BoFgEqfSnzwfvmQebZS7ts8YnbufuEqNyZhZA9AQUrkv",
  "key10": "3ZJax66tnQGBK52bUZFrc7EBFJmjnTDyPcz7x5bEZx8pvdvP4VkMJLF7macWHbQjTdoA8uC8fSMb9GZtZdQK121Z",
  "key11": "4WNu16tiJUEFFmUdTwMtCFYnZWPS8AFKQMyaZQHienHTW1qujr4S3Yy9CSV5iaWB2P6PxXSJQCRBBvBkMwMiSbrT",
  "key12": "2W5QDvR67tmxQGSuUFVceatpYPDec6VAgavFwQpWp3st1TNJrVU28VoBWsDsTGLat4Yc3dBwx96uYq9zQqjm6hmp",
  "key13": "513jMZgSMV3XEk8BrwPSGPVo7k2Q2rdSCFxQRn2bwTVWNMomMvWTVsqMsd86nUk2XC55bRuKDjmwfKNauhtSqDZJ",
  "key14": "ZH3bpA124aCb21C4ht11aFSKnkx3qKdNrWxoRSGikrD1W5QdJjyAMSgx9ujHnzekhF3qEw3oRFzjCRj31Y9ktRb",
  "key15": "uAE9gvQ7upm5rGLBKxzG8FkNdRhtNRNnUf6grt85wL9uWCSsaUXi22TwGzoveP6JMjLVwH4PxiBGjM3V3aHC28i",
  "key16": "4aStk8bH3LyWC42hDbVU3pE1FEzQVBRt5W1j1as77rCkqWwyxR8B8uatgSqzFfzYbPVtSNYzdSU9JkFqN3DqjwbF",
  "key17": "2ibfyAiH7wPgtQAdkWSLXHKGWGL7TniT4NyhZE9fCva1YzoyUvUqpvrYfnYfRqGrzeVs8XsefYKBTadjKVZEkRFa",
  "key18": "HmWtmmpeS35ZgPpQ2ZMjf4ReSihQuSs27PRhnn35tU9BdLSout5Ae8u8qzq8UzNNEPA9wo2GwQ15NJwLG8zDLxx",
  "key19": "2KtEti5pg2A5KQibNAx8tQgQMMjpoKiScgUwYMe2pqih9MZU5bDP9Koqe2ehjewMo51B74r2aKqDWmzoB1YzzznK",
  "key20": "3gqmwWj93WBJhfhFRqVehUu3ygATrfsYCeFHP8PQv5VFLAyCh6jWKUyFxdFWMAjZ3yXXyGej1ExzZSwnpr1ZH9mN",
  "key21": "5kCQPcPuddFowkAQkLFRu4vN69FyFRbneDGtuMbCihzdf97Zj2A6tdxbvYhgzGZp66TYiRRu2UzXKQ22HsH9Lx5k",
  "key22": "2JuNKDD2ydWRJS8fsRYo15GxDPrn24x75JvHe1aRdLhxoJiTn1i7oJmPVihbY4vHeQzubpjQ3MYjP7gEbUypbJPg",
  "key23": "2uahAyZHf6uUebaVtCeQiHZd5nzZSSbsz4EvYWBNaZyJXbtu6SWGiUmD8y8XdUa6hhJ1kXqWfvPEvRSitH3YYUsu",
  "key24": "2mURRL2WYVKRWPy9Twx5ksL823Ds9MyX9CrFcCsV5ZfYQ8Ra3JiWjufibLLh1AZhKGmogPpiU9Ldp29Y8Aq7taa7"
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
