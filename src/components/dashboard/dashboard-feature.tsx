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
    "xnPoaGg3F6WuW2q5YWW7hTYqXwjjvr5FrqebzPKhF9iqhfV2dHewm9aDpZq8wntWTAvJPwbwUiD4YnqMazGSScJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VoWXQe8AwSt3BmP5oCWTncD8qiM418m2RVuef7s1HweFKoUet2QjKsPa5zSB5DYZ1p14MEbCCnriNA9dg95W3MU",
  "key1": "yzXUVyA61sjmVhohUFtKVPdHrPeumHgjV3Pyt7iFY7sCNFDrJ4CcAid4EPR4peZeBQ4RnWD44LSYuRNAbNjBydh",
  "key2": "4qHXt8TLoeznQDbZXcBH3icSQYSQhKijr4TLDGQo8XzFcZdVnt5VXh9g8dg1V1nWs77eNxeLAPFWS3VoYgvx5WjL",
  "key3": "mLQgXx99hDYSTfSnmnFjDdoduRbQ1p52yfTBiuRx9jRu46utiHS9DDxLr1yzNZBWm3x8ZKjC9SjerKTiij6pUQP",
  "key4": "5mZGacfvn2HZrmQXT2Z5st6RSkdUtc4PVc6cTeWGwaMtuyZgLw4tvXoKxgb1n8PNbSrJEZk7YrSwAckVKesv2uYH",
  "key5": "4BaJZXyECyCHzxv9H2AFQjbrT2Axz4gjgShqRjT2Z6Ng4VVfvTqVznCbGBFKL6jDg7dDCrrTkd8EJtvZCwxqxctW",
  "key6": "3pwZocqU3Nnba7NdSq2WCaK3H2xXyw1198Hmx81QLRnDBZB5Vq1o6m9qKDcdm9gYVVGocpkpeHm7YtmRodtvqxZ5",
  "key7": "4JFPdq7ZQ2vmqs2ei6vfyxLT14szCNPqV3LiigBQsEVmFGQYYWLPynV5XnrT6zQvz9KhbkXwLBrFkneBjLNFhCb7",
  "key8": "Tjaq3TEd1Tqy7AxziH39d3FsfaFL2aLwU7y2vLb5NDuk3wbrDndWvB3JCiA8YgogaXjCUWJwxfzyYRQn6j2RRYG",
  "key9": "4ofGrZmfhuaiscHz6w9Qor2ufrwY87euqcFatVrBsfXY47vaaTAGAzBUxnCYf8kWwJ5U7xPBL4jk1sQbkkURUbvC",
  "key10": "gRi7quyt1Bg9GEcbsMjBsq3TpUzZ6uu8kxaSHEXvvk6gMoJERmTEw8WboCm75uSAASkKZLAaCU45n5G1Gv7wFmD",
  "key11": "5AoJfXRpYpGP2trPozj27HKAwdyhdLPBaXQ72gHHq1YBrmeLanYE4m5hpxJXui9RMo81BEfz9qfnjv3mZgEKkAvf",
  "key12": "565z2CA4KfZhr3NEQWs77vYoum3KP4pvgzQJxywB4aQBVSMqoNAAEvybt2HhXGXVjZeYmwjb8o9gXC7y9w9NHpJL",
  "key13": "5EjPdvBJDWwAiGFMYi4ZTdMmpkd4RsJ5BCnQxx8LAm5e9ZrZrGH2w2hxrBrSY8hUbHAVzsKydrkigSazFgvBV8EG",
  "key14": "xu1bR49xVTZVztjm8xMHrFfTZ7qrgn2LV5DvuxB3iX8xznUV6BP6XvbgAJrzPxHYZtwyNFQCv5j7NN6yz4zX8wP",
  "key15": "2WPW6W3btpCLU8aJfWGCMum1hJKsK7aN7gkBTRtRA9ruU7fjeJGxLegSfGXuctYQWZV9CbNbPLwL7PqrYtei5UuP",
  "key16": "5ywcUB3P6tcj5HQnbxJjJaYnaiQYP8r6PGZckXXu37LNPoD4AemnAcDcbfdMRXmqpoA5p3zgzBx1tnsb4dB5NoUH",
  "key17": "2eS6AJnAC9mNxA2QAvJ5BWDcKf4vbesJmM8BN2X9PWibedLEMFszPA3S6ccwF5EVt2srjotB7YjuSX35upnDfbnm",
  "key18": "3vSAfbmrK1JMmtorWAeNEkbwxRrQtfYt8i8Yxt8t6KT2bCLF7CQZvTWp9TmzgcF4S6TZxrB46d4eYwCYMLq3tF1s",
  "key19": "3yuAiyKPRjSocXtjJ4i5WXrEccjoLazR9vcfKPrvPsJ3DfN19N9HupsZrtfhWwG5PsD5hd35oNcn4KcQD8TThgyd",
  "key20": "4LcZAM2QSFB2Q2QVWjekra1EhMHdZheWzUSqAAJt9LG8pFvkwyuuPutwRB8e6BP2S7Wpiitwtionjek8MafuS2bb",
  "key21": "2EQeWqF1Rsz7bduebmVswPSg6dTUFJVvSmF4TMBxhi3WoZzgQ6y9SCy9cbF1VEGWPorHXP3z3fHziziroSBzxKTo",
  "key22": "2VAn76qLF8TUVKESsP8K4DYFXd5GpjBfWq9wQybQFQRoD7TVo8gxwJVeSMczaJGZ4EWsWETTuzg6HZxsTTUL3ujm",
  "key23": "3vd8sNcX3YbxJwX7TNh4sosfk7rkBSgeSLdWGebx4VjaoNM2V5SPdZFapMhthR4GgnYxYJAQ782EaBNPjS3ddZGc",
  "key24": "2EL6c6mxtYL7afhgVVUDSmRGKT8xcxNbEw4jpppVxcuh3oNA3B67isxF7cWHYJaePaHXgxt1VVdTQGWh1uLicBBZ",
  "key25": "4ik94GDJupUUecoWQLHbiUufAjyczw5bRLcMk2hKYu9nTNEU3775GxHeqXGVwZTYSfRzk9Gud7MCS5Qetf9du2yg",
  "key26": "5hqLLdJeZSxfdidFYUWEuFA66FmBmx9hrNjRUU3bkgfMmM7aPR55YE9o7ecKGdRHq5goBbQH8Bq3ZrAXP9AG5bHB",
  "key27": "38xHezCGwFsNmTrCZ4gPQcWPEi1MA6nRSG7i8gsvpWCP6QaAt1PS6ujCFzRtRZ7R4bCn21aPBYwPMiXuCyb6pHq8",
  "key28": "5253VJV5TSAXWFKdcKu8YSGQ6vJsXkVqPcfWspWuE1MCW4WuiuFZn9FvAhSs3Rdj3AqsJixLmnbjwTgGWQ6guN95"
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
