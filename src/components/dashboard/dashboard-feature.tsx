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
    "2NisAyWyi2sUwhhQ1xnkiWMhd8YJdQAU7M3Hpnikq2B4e3SJAHqkcDLu1DysaZrzPFurWiKHYSAUBE7fofD7jnbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H9fvRTzBJWiroDXWRsd62kRunqxyfFB8fH9RVideKaHdDaNh73tQfqZN6szaEHL9pC8JrbrWdmU95Lw7kaX2jJE",
  "key1": "2cnMBUorrjUZ4R69BTsnpmGM7ccKvMbgKM3Bwd2UZzruWBPMRCx2izJVyo6SiHjatVuLKxgk6FmBUTnisNnzdYuY",
  "key2": "3gfKytMQaJDdPZUWbs8G4aYxz3PBdut59YPXA9F3qYZEEN6MVt9GYCiBW8fggU7JThrMvfQZhmefnK5Bn9fzr6Eh",
  "key3": "5T9hQfqgWkvhWgih6PPoDjCmwaeojzAV4gZFa683KWPS9ghN972r78xJ7qQt1dejra69xft74zemttjRYjrqNnCM",
  "key4": "28XcPExzvrYcXT9k5jbZK1pH8cYmrPg9BJsbfUWe7CkPXTGexmRAThF95LMnAoS5xcYfvtTPNcc3XG2Fvfjw7uUw",
  "key5": "2xoxovaNc8LZQ3a7H76XLyZT1bENNU3LEKGk4FgfMzZNnBQdQwNetJr4XP1zMUMWkQSN6tzYvuxo41AwE7jg5gb7",
  "key6": "xZdZvPA4BeuocmAPZiXV5PmasSjmkk5mXoVphsAMvxeGFsG9czA7siGFDaKXhBvtb2dPY4UviALUzMTEcZrK7HD",
  "key7": "4xBXdvJZ86ciogidyx31Tpu4231WdTRWTUCDLWcu4CHPSWCCPynGogDukqbZDnJUZDdTkx2AAVokwHqWJvzrL2wT",
  "key8": "2ChJTJSQSDx48jnv75Yk4jM9AiCW3BWHEuWZPBSLcd8W2S4eXuF4bosMwwgUb1bvhTp61X1LTAFZha6yJASe1fTb",
  "key9": "zPf75FJmTfUtefNRX8bpPArJkmXwcmzmVrzz8uUPmLSWKbPnD31LL8wTVcXBhaK67b5wXogkiqWBeSCeisLdZFe",
  "key10": "EB3CdtviSLX1q3YA1G4XAyMyika6VJjj7cSGcQ84VhMro2HeqZLyYmrMGzPvmZ2iKBAtW5rMB9ZyZortAn9cLzn",
  "key11": "45RCLfvM7xQJwt7PayB8MG2BMjezGqEbSr2tYSY3hpPSng619ySwcBHavERq7MH6YYqeAXLR9w13YEu3wa5yhJY7",
  "key12": "5kDRs6e9hsi9wXnqf5Dic3TiVp3tvkXr9Y14BxbmALodg4r4GX1FFACfuqysNazLrsZyZog9a6CNhQ9xunSyr6qJ",
  "key13": "dWJmRAWTi7VNQiHTaTLLNhp6aUZgXZM3jFm8WvAYPi6CdEpU9Hg74HwFYYkKUm33Wbejh1d2XhdUAszyBiuhvML",
  "key14": "3WCuWcqyU3q12xYfhZ8Y2erQndpAjoRf99by2p6x49yTHsNLyfwjqavWMMxuxTrKm9EwUn7Lk3pBWsn7C6jzg13t",
  "key15": "5E4bG644uA1PyBxYzxozpp66AejRPciC2TikuNAeBWBn8EFQzRV4sDpT4Ueuzhvyb5qhHwEXseXehtVwBbUw3JD7",
  "key16": "5QZwfrJH3JP8Xx7cqVVe95iducLu8pH7CGbAfJepNk9wxA4tuGxRB9x8QqNyHYT3tQEZymgucKZxUAfZ2qMErbg6",
  "key17": "5oLsszAeB7y5DxbRbHPY1PQp97j52G25vqYU3YWa1EJrLrWZd1EcNnGzy6bBcDBg8z3JFmCw4zfBCfgUHhmbJaME",
  "key18": "3qDgiosYGZboX66VjpAsMxFkcKCgT5dVNuqxB8q22Bma8CCdvFKkAgBbecYxgpuvtAiX8PY4Ujt33m9buAnGGDLG",
  "key19": "3XSRNiULpfmzgw3p67XeK2r2V2zEkwB5PfXRh2ehGaQPLREQFyZEjpRpAUBaPvRQWygbeQ8mGUFNx9gAeA7FSz2x",
  "key20": "1TD9UbE7Ejvbhabfva7iqGcZ723jaRkPYuU5dk8LXEDDesCbuP3AU5F1tHTR57ckBFjNHBLkwi36BZbwJ2Txzre",
  "key21": "EpVavEEsJDirnKFS7SQABjncgCEwCw7EsjbmpMa3f7djpHC9vsiXPGaaAbb77yQVMaaNcao8o9KQz2NrNLP1DEq",
  "key22": "35DypksBhNtLfwqc89G1qvafVeAzKgowHz27KmTGUyoW6sHUBwG7EwdQQ4xiaQW5QswVY7Zt7VasM2hGrjvaW9pj",
  "key23": "3wYfyVxQ7zLowAvH8xaodndNLaKHunm1n89HhXBEhC6nR2tdn52rbWu2TvkyyJngonmDqZm21yJhYbsUsqveTatN",
  "key24": "5JMVn1LVEmrxpix1z8LE1tsjTpNHYPAeWCCURTjqdDXzAjG3Qj2YyQYZqhNhf73YbakuGTYUUxuzTkhaCWHTJZD9",
  "key25": "396F7NUgKN23qKNJFJcpZe5uYmfMKSvzT1oJoYsvoA9kU8rYAXmj5dAdBrZ6EfDK1KqHYaGnZdA7s9W2wjprbP5n",
  "key26": "3br9hgCewdCnqgVZCfiR7pqwjj5HTjtt6a58GVMgyF3sKMbP8PXaCsnV8iNtrMsbpkxDZt7knEVY1DM4MwyPmyzk",
  "key27": "f9tAkUsPgYb3hRTGiTdgy7r27d4P78p4qoMUnP2r6cF99sRL1Ro3awiBx441XmJorcPQ4t2vd8t3xFGVyhaSiMM",
  "key28": "9ZZrum5DvHXHDiY4SNVw8iFCgE419CSxyPWkP3K39DpfiXvV7vGJd2dSRjuyUFMm4EJC4u9DC2j5L2DGPw779yC",
  "key29": "3fUqp3qxNuozKPMyAzASSLFJVTBKaJwnMPeUCamgFy1EbiXAbSko41Mc6tTYJs1s6BPLXfzx2wfDV13iFfTkfkyd",
  "key30": "63Mgn8qFZMLMhMnuzy8Q5ePZWxr9tkZ9fhr9gds21aVj324fNTUvXRchabfnT2YGXTZ9JFhDJeaqrW8gXKYCDyF1",
  "key31": "3nRRP2N7tucKwzW385R8zrbXCQFtXQtdiDrGBUry3mARVsUBkX4E9PwmnXkByki9PFpcqijniyJLLto7SRNR6Bcv",
  "key32": "2tFJQXDjigzvMM445EZFqTawjwvXi5F338X6qkH9LDEzKwKTwi5qztzbSMdVPtjFRwXUP4sCMdWVzssWA5TZt5sR",
  "key33": "2Gk5YLhygSLAT58d2Mnk7zfvju1uoWYLKDUpeX9w27h1bscgCmA4FWVQehNhyQ8hQZK3FsninNMkCVynFqxEoA6",
  "key34": "5HcwYHwFU4bviwsTztUu7uB7mjeGkaZykZXV57xekvpUcnDKCx125CevmQ5bAboNqHejKUwiyzap6uLZWYjKPpG1",
  "key35": "5bksMQRG6xSMicu52D2XTj7eBmXbYiUFcbneQN4HgLbJM3pdE9FBchA99VxqYMghMfyApeagfx9fF55Nqj1yEMWn",
  "key36": "59HurZMpda2CVR9HqGRxszXWAPjMD1sXvJTEWcpqdnjeGTLqEbTt7xSN2Vs9tN41ZESnm3BfEPfS4MH12cvVoKs1",
  "key37": "2QZnqNZT7iViCUZABECZ1TcP22v2WzBnovkdeSwgy2BuCe3vGTK5phxo5GgDSEwThiCtLrZ2EK7VptpufB4noxfc",
  "key38": "5CXvk3kCH31BWthGh7LJ4B6XuFngsNmHsC46hwsW65JpjYbGrVUYdjKkX3mKk9GcpjygcU3k1ZKWFzMjUnqBzU2Y",
  "key39": "Um4gwrBHbaFzXvQDtt3GxDopEumZc2AwbnjhvSDeSGK7LxTwQ6BFDAxo95ruFVdxQtPNXEcat9rG9ufCs2FeDCm",
  "key40": "2beAkTcQ8yH2k25qWcfDxyYpRGg8qxqTBzQkn9AeKANr1beAkBC6F4DF7kqrw7cvArRE3o87jmRV9NRDDECwD61m",
  "key41": "vfSVJohpjHgrwJq8HdbajJafLdu6byzR6PV4pV8hEypQKhXqH6AkDZfb8T9vZv6w5XqpqSQhodC2bjhjfHqxfZv",
  "key42": "5SWTsCuu5dzLsciKJMPUzkCquDqrF1gosAqQogAaCmrVydC65sVNSJoFAyeaQ7rgQ2SpTEEsqEKXK9B2yMpdGp9n"
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
