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
    "2dqZauqgJ7JifBL9JCf2irHNjPK3MkhdR84j1MKTYx1Jg6juDg7jdEpEuxCq9ioGFamrJVQdDTvp9PvjxUDAkEr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o2nW93rKo63DkvbEUgN5JwcjVWc1TT6eJcCDUbrMMCpEFW4AX1aKkvZmp8AMhCWhn5aB7uwTcPeuY1RfeaW9v9j",
  "key1": "4395Q4iX9PmXMZPPXMcMCjAZTXEdvYQWi4QnXpacs2TJLLcQyreAkDae6c5PFeK8NiVZsmwGbVYgDyDot42ZKnsr",
  "key2": "5NiHKfDSBmxfyipYhXacg15csar1i9yodr44nv6S5YXxUd4KQFAsQ6z4qgKdjDgkesN7mzb6c9at4EoozRh4fYxg",
  "key3": "3zDULA6xhADdxpr4qAzCZVGK7x7ndDfysNAXAGsH3RFb9Qapct6kY4pH8cvWACQP1PV1fj6bURwaub49gWZxS1vd",
  "key4": "EpuX1rkhbcWMvv8cvKTS7zmpk4vpZKWEj1dVtyYcyMn189rR2ep49N5nFRD1hrsT2yBXCa2BiERfUZg2m2C3Czf",
  "key5": "5TPXDwXNTXHf6P3vnR2Czp8RGZTHmXkn35NTAQPav6eUvh3sXcQ6i2CZoMSr8FUmnBq84M7fqrmWu7HosmSNc4e8",
  "key6": "5hCURHbuJgAVqjQjiGaLyZQVAkzq2dZAbPnY6DuMnVpjKgKugYFJ1aXqsm2m5WctvqwXYijScaXcJRMAkJQ9V5Kf",
  "key7": "B9BMbJ5vy6MdS4Ahi26MTn2Uf8vgTdgryK1MXxXuhG6JEbNDJNNZQNWjzyuvzHsjhRavceAB5SaiM2txnz1cpip",
  "key8": "4mj52t8a3vNpd9nGQPy8oNPhXxihxRUdEmjhmSuwz1CLovFbxUT3GcKT397MEXG6zTgPMuAbg4nbxJd37eC78zuX",
  "key9": "uBMkiphVySjF26u4HcjUbcMHtvfCA8WJs6YhoV9t8gtoLpzdkQuRPkCefSbdBzfCdorTJLNHE3sNX1hPMbT87nd",
  "key10": "5bJoUxEGhacAYUwDvsPN4rEcy9ojErLzwwUvvtpZBdbnDQ86HDMHzjY8UAtiK5p2VKgVrLZLeGZYNmeYWviboJkJ",
  "key11": "4nXXqdix3YXJqZJPTBuuy68xokpauJkTbRiuPmEfVQGHCGynJvuzK5txmwq7mv3AgAzmXsgmSZHFzaxtFsqZ3Awp",
  "key12": "2sS8ghiMjgLvFqx6wRw2QDcptd7RNhgBLujv6bcff53SdMQHx3pxdbXYoHvc2VMPaY7s1V7qwyXHWUKsTZXrRKPv",
  "key13": "5dABKywsRQDxakTo3ATpmPJ1W39myguxXUTRBydem6dAr2ruwt7GtJ4tMUfSYyXUNPZ21yK6tYdTKu3WZ3X6ajy6",
  "key14": "2btVK4zemVq3Cx8MfawHEa2B3FSdu9mrSsK6rY1b6A24DbKWFnjtPGCaHDbbzESAJtxrbaJj1rYXqdN54LcB1dXo",
  "key15": "8EGFjLJ1NcR98m3JD71LaueayYrScUTEA2ByaoqY3JLP1EqKNWkKRDipnKqNzKSQT7EeuwFGMKWH4V3b2okfjB8",
  "key16": "3Cq8r2isNcm43STBXWWNhHnX5pYHTMxGqij5kq47GVBhaRYMjmsU9VaUciZwVeU3fSHzmSTit6qdntzkfFB67DaQ",
  "key17": "3m4Dm6xovXTA7VZaFsHG15WzPkf85GH39mTudgqtHvzqAdFxExi3Kjx8kis7sfKYe6pGBLdXWvs1t1cNepCF3GJJ",
  "key18": "4qGvvWHSs8NcYQhsbFeWLTobRj6pCVauFGzszAEqVUDto9DQcM8db2e1EghDHgXcuNFos97BbmkZVr45CPDKebaE",
  "key19": "LJLPaRFx8xvUxPBzf2xXW1ZWmj4sxHvXrnqJnUR1h4AWZCN58MKJeo86KAqDX2xJ1AgKurZXKXCmxZYYne2mPqy",
  "key20": "3FKLwsb1SGZdxpVeho7rVjVsnqF8TVYPCTX21DmxjwG8gfrMnQtBWRRQTcsrZpxf5juaXa4wrmjzayMRKYhXFspf",
  "key21": "4Dd4jZidjhnYD8jRaCFBu88NdbpXjDXV7QRUkgsAJfDVdewF8KrghJfU5pRhw5QgZ89T8QDhZxwbHHbR7Q1GP2EC",
  "key22": "4f1shS5Ex8v9Hg3z6SZuHhQ7poWCs1zEBtsxQwx24yXEGnNzEsV1Dmhcuqyj9Y6F2DEtT4oFT4pxdzk7t5QQJLmr",
  "key23": "xfVBz9mH8NbBSuwC19ERyNA2vRRWoNpVRiTq4wuZ7PpQADvMLo8nUuH6hXRKb7TT1acCf6JpFEGcq6Z7naj2nQZ",
  "key24": "4UnUDncqPJDsaULAYKrZEs8dHf3g2fG4TfbMs6uh42a78KmXJGjokzhiFYaEorBzdJdP4dPEyiPxDXcSd7QPoRxs",
  "key25": "2Yng3fe6vfmVDAveAYMdVKeMQj2Csf8tj1aTsyozSYYSVQPtNWZD2ZJBiQDXwbntBGuiUHPZ8G4iufknbErpAyRX",
  "key26": "5wBNrUjUBJLQ3bYTNKhrStpmpoZrVFtpJsdgredRExcQiqkLjZRT9jcEcJsq6dY1vvUaL5DhowTcgGWft46Qzcem",
  "key27": "WjazVGfSLQwDrStM6XpAaxwzyo7ssEpCEGwqmT9XBEun1NnQgnwPwwkd4yecpZNhYVgAtq7sqCF3ELKtmjrZRAp",
  "key28": "5533LKnf3jtJSH2ekAaz7uGeLwg5xF5KA1P8tCds4wVgM6VRQJ9zVuoXUWxSxBRgiMBFHDtTTDxpbZoP6yMtTzfv",
  "key29": "678MsBQ2B4RLbXZUoac2Gh7UhiQF39uvFdiY3wfkL1BDen6EPinKoLH2T2eg8QS17PsW8ko3AhywUwUZBdeoUhkR",
  "key30": "4ctW4SFhagSELvfxo3iFgGNqkVWau9eFPCcAXufVGkbAvUgCrv32CU5Bsy73LJbtPkzk4WQa6NkQ5HR2hZpVbb22",
  "key31": "5XDF8224N5Qk875HUxwpW369WNUCt4T3fVerxUHZUa17DtvWAorvq9Z1HYEamxjpNHH2kWK2JhzWrWXagYEvmLzE",
  "key32": "mUMcXLvBGPfJX4jaZj9sPWXoFWgVx4zWywn2ZeaGzbSo35T2dgW61Xu2jWLZxc2DCVqioCjYVwcaX7viHH6n1xa",
  "key33": "2yWYbJnsfSorFPFU6AiEAHUMqbw8rK1igsiay7115UWH6hFnjaYLisiM89AQzYmHF5ir9eEUYuvUhLKMLShtf7hB",
  "key34": "4ABcM9Wku7qfYp7e8wytqiB4QV9FsqEwei62SXGcon7HMw256BgebZzLmQwP7SbwY17VvvbxhcQe9b21JjxHvZHb"
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
