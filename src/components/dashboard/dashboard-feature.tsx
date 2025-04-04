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
    "5HSgH2dqbjL3nUmKPuULutbSJCwYDtkXxK56qpPYSVeiRBYUnt4CuEsbgr9eGN8U2o9CcugAXUYUUxhM4J7j9cvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JWBZH2HfZS7cjdbcPeYydfuzA6PCehtRkbEhs4ePcd6pKDZekm71fMN15yotTFDZTTBDWyyMBN8c4G4CnGzETVk",
  "key1": "2NisNzm3syM6jzAff5jsLtM27W9rnb5cYZMyMET6a5wMM1c1cn7Wcs1U7v35nsX8ZSqSEFj6es8mMFRjkFHXUg8v",
  "key2": "MMXqhYca8rTY4f6NDBa2kuVdRkaCW2q3ktoqJYwru8CYm23yjV6Q1HXjKqJAhgRDFkEZcw2Zb8EmUvK6KaPbSV5",
  "key3": "8BYzKipDR46peHidByokWNHzqYt1tDzAJRENnWzkRhNdvmBDncDxnZSLJVUWQfF7MDzoRZh4arug6otYXDcBM18",
  "key4": "37sqqFctrCAYJKgNhYwfEoaTx6Uj2xdZ7NZ3vUc4zqv1DgmqoP8PbeNq3thgnBWdgGkNenUGJmAuWppkDt4T2Z8q",
  "key5": "2F1VfXFKWFKBgRGGp8Jk1bsPP9zfK2trgR7DvG3hWh6e4wKCZkhi5he1Sht48t6qn4gugueXwz5QE4RyBmHz2obQ",
  "key6": "2vzNqWDLKpRPaDHPe4za8BYvDmfCH6WFFsk2t841MkXX2zkKVaJDUPhnN5ucVXgnNrBPVpW75PaGmvLfUbAmANCj",
  "key7": "qWW5M84JU3A2CkB2JNNLZqMtBahKcMGt1RijJPWjMbWELpUhGWS4wBpsPg8WLYKTWG3HdvG7MoVfxLKcCsR2Qo1",
  "key8": "5pyBPUDh7BxgwsZNuUUZgzqb9rKiJ3foYr9pTQuiw5d4SzMvKA1GsMNoJ7ug3QiyE8hinhwSmg6xHBrGvbXpcuLq",
  "key9": "2GtiXS3z124AQXZRvqrK4vHwG2beZsHPCZLpK5opBHK8UrPiUYQdc4niXYN4pLBazBRNjxeck8tY7dtqUKvPuJfL",
  "key10": "3pRGJydaqMRnnQGvbbp5atubsyTmBLZrYgw5PMXYstrqqShvjezBpUhJoK9WgA5uTaXNjBwb98BNXSG7Bd8hUkyS",
  "key11": "5aJgJx2V8aW5zc4JTtbpfHjFRvfGPRokzysm2MNv27ADi8QDQSZyoD6FmDPmhdZApQGSzBBQeAPeGupr9sY5G6qk",
  "key12": "4Ah4s7AD7JWpK6PuNCN7jQ2Cqv1EBTshpqiEvJFuokLgRe8GsUJuKXfJ7W2EH8TVhZwiDJSwFGNgCm8AKSYPjnbS",
  "key13": "5Vbz21B14Q8WNmrvYLgBft7QiXZPJWErrwB8WATHKoysG8oaLLePgeR5McosQiJaZA4SdHWewF6kiyZ82BbQPn4h",
  "key14": "4hRBbrjN8p637mrEzLEicyXHNQung5wJw3KxDTkukydSBpUyLoUby69XPCN8J7Dmk8UqiBHppP7HLfWvhCDfTtZa",
  "key15": "616UeWdHAzwEiU9umGwLdmAHsuLCaBV4z32Q24GWQDk5bpm3ZkRqC1X178pNaGQqNN3prG54aiicq3xoGpbzwC8p",
  "key16": "5gY8vEf7EDG2aT74MVuBDHPTow9S87ddSWjSyY8AgVsK5DF25PqtMSzxStroZ3ToWVLs4Zh8xZFAsLpA4TZfpwY4",
  "key17": "583pv4ts93YtuJbtEkyxaMzZ24jMN4nV9fAsNeGw6SDfbUvfKiiteo9F7QHiFupa5s3ZCXzySS5F3CPF56S7w1wm",
  "key18": "4NLv4McN7ySM5ymaNaLZ7S5SX4cWJJxtQpwHbpjkgiAvkkREu3hSrPjYmQtcaxtAXJ8JYfq2xdShMzZeVtHytDkh",
  "key19": "3F9ZcBV3SBHHFQ5pGfFMoJEwQxUAernYRKZ1LLeBqHL1LeRA8G4ERLCRSFHvJAbafeLQqvq81j4kidN2MRYPn6c8",
  "key20": "3YU9Ygp4b3PAhyNLmoy8QLkVQjwUyGmQHePXdv5NaJ1UZPLdTSMFVmG1G1BocgieQ3GCf6Lag6mbHoCyGG8Tc6Ki",
  "key21": "2i2HzcYiYK642CNe8YiXMmkaAGQ1RQZJmt6Y2V9ZkC22NWbZ7D5La1abouvReoqHeM4uEpkM9JvV25GSKjij2Z4m",
  "key22": "4uaLjQHP2XwWCnUG4EWhQ2d4WrxyXiKDqUjTzisSW3gnX848iuSz6mH8WzkjfKeZ6At7DVLQEZoEQvnddo27kaNJ",
  "key23": "5TBAcoFqQGPUCvWJ5TNxA2Q8d9KXdfxdVDHHU4vstmQAXdzqYykvEdLa4MGfX7nD3nfZTk7BrFB1tkFdGsN8fzd4",
  "key24": "mHDy39RHMUcTvtuxrEsgqcb2uvL95TxEwuJhEXAhmRLY7Cmm3d9odPJVAB4wveqEa4k8FK5K8cKd1RJSB6HU58b",
  "key25": "3UhpBYUT7DA39xzB87yG4w5pjvwMEFmtfHb2azL8HHawVMW6Nbv14ehUv7cySkLQcgfWgyraHiZHVgLeCj3G5ayU",
  "key26": "raUKxsTokKYHfyfq7YVmYLdM88BJwkBio2rbSdPqzPBbPDpqbnncEthHp2zcovXRcqyGX7c5DyuK9G4SnVN1D2s",
  "key27": "2UUKQoHjYa7zLJJ6o8QWdBj39erEy8rXomLpHQRQ7JdQXUivPG4p3xfFe9isBNrnogfwnRrqPEDyRK8nS5f6d9tP"
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
