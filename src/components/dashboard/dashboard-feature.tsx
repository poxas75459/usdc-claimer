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
    "61vhBuADiLB7zQHhEy9y3UyZ7vh7cJrAubHKkHYrgNpnhgnFfY1NXEqz58UFvdgZPt69NWF8oR2qQFZ5rmKTtCR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8FqMAFQNFHjg1xKZmFXEFXY5kzrW2SVibaijBY5rqKtjsZmuxzP5eCshZgjpizsN46YNCfsx53dNzg5kStrHts",
  "key1": "4gJ7TKyskztcJqkkZo5k5yfUsHVKHKsS6uATybPkaEpSNP4gD3QX7rR4GcbVEzUpGXrbtWYUsAYHb6yQ3vBQQLEU",
  "key2": "4hATrqGpYgCiB8ug1wCj9vF6qVe4iVGfft1jDHXKbjXbsTZjj6LGC6fWNRKvAAg2kXtJhuABrWYtd9CycLLZKhuu",
  "key3": "vZEC7g3CpwrjZwJm4WtVVvsfE9uZqqFa2ifknVuEjqgAmgxcuW9Z2oTWqsCsP22dkd1bETxeyuBSzUKr5ZbzMG3",
  "key4": "62nupU8nJjJpeNbsBBzEHveRZPppFAejvjy9ydZ5u54dPCqNN5ejdyQMgooHNEkCBTPbjXUJL1qzGP1C4rko7qT1",
  "key5": "cee7iAfvyD72JE5eqXq4hf51jxMoCAusV7t2umyvB5zpE4b2mdxzYZhCvGAZqVT5hdt96NwESHSsWB92RJBon4j",
  "key6": "3Kc6u2ufNzVhCHtSHGeDa9zQhFPBeNTn4322VqdmTgbzNVx3z4qq1VoynAA2rDhDt4MWuLocuqdBfsvJYTwRJaHr",
  "key7": "2kLQCmkVGvJosDMrzjUiRfiAMETgFzdukDzLQt673gH7pPC8g9SXb5vqS2mCSTuq9cVbqcHNcVMJQFp5GmDLfmPB",
  "key8": "39Y6opNvkLs1ueFmLLKMm2mt1YyxarGWFPBLFw3STJLtReEq63vt7Gfq39aWuBH6o5LbUrrhDVs555ER9ddJE8rX",
  "key9": "gRqMJAZ3r2YBm68RN7XdebgxBBr5FfPAnDoCyE9CWYqW43vmvH9uFngisAMnfPCLWiFN6i8ZgqDHnZpfLq3oHBx",
  "key10": "2x9RuZY4WximuQhrA72V4DEywjQZ82M6ATJwNrzH8L4uLch5jL98QBihwWi4qzZbXd92NzP6BoCVS2Pa4fzGXEd9",
  "key11": "5kr5Mfty3V94YxhhquyUwzJiTnjPq6rLXJKStR5ZCCt9AqMEQ786VGME6VfNJbUVaNas3vww3Y13gfCY9RGzmXD8",
  "key12": "2zLhtqF14cLAhEzBmV9t55CWQkNbYjEGRPWveykWsDDaoh8hoQbyTq1qC3D4eYyhBLZqMe23BCxofKxhTa4vFHwv",
  "key13": "wEoWqAAcPTRnbwzmysT2jmWjRQYSCcpS8WAtcFRBSYKc7UEmB5VjVkJK5dmttx7gax8Y24t2cgurhndPbjbgg4d",
  "key14": "4oDYkgQio7k7gnDBaqn23H8GDmh5viAnGkjDT7qtEB2FcMA4eZWGuoXMoQTnJ9q1j3cPrZhsdD2kGiZcKHjf6YPs",
  "key15": "RVeGnW2Y7Rdcqb2Bf57Ps9HYE7pzdQALnGnTMtFXBSjj6FqH6FHhVFDqxxCQ7v3V5U5uRKchRE6uN8PBdK3Jcya",
  "key16": "5SR4u7zq3NhuL1cxixtAjk6G6KG7uB19bH2xiw5apPzmHvoHW4ESaa6rptVRdi7itEKRShC5kte5ygGocg1QKwE7",
  "key17": "CYg14rwMdsVJNg7F1Lxr49J4xZkTz8vhnthNJceLuYfH85yCZNhSnX9wh1R33RWqYUYxUq78xpLm3od6YDehFC2",
  "key18": "4ZbNVNaJtrtMMdvMHhzpYJXvXzUo6LKC9TD2GmgaRJBHKGaGYVhiYyjWJDZ8VTxtdP4zqvpE4uqhybZ7vBeAaf65",
  "key19": "5ekfGqnCMbbRygdXPNd2GGNGBg8nMmcsLahiaxchi5CPK5qTTFErNfrJoR33PwSL6JUBsGJJmu4oyYdHQQbhvnaf",
  "key20": "3CseZhJBPcDS9NU4W6siX6eGt1Wxg1MLWLjkFn6AGg3x7mj6s6edLJXCy12GznoNHiQssPMVfwXDAbKcTeg7gGzc",
  "key21": "sh1C8bs2vfZbwj2FvucyRHM3vEwy3AZab9FP8gAxm1zt9iURguqdoLvRCMiyv6tFFvVPE6YzNUMEzQ3Wg4jRuFB",
  "key22": "2sXFxwNBjQMoGZ13SMeHPb6Q3E1zVJFM6Z1job4WkbFFAk9tsyRn4wXMiKZuGr8Q4ipzhoBQgdE4es299GYJvQWN",
  "key23": "5CrBhNSAiJ6u4wunpcc8GzppXfaUVWGFJFkWpmSzF1cuFr7R1iKZsxYwLAW4v6CsZPYCUuT9o5DJHEShTANXTCni",
  "key24": "5y9wsSWQ3z7BsNY6LDfugvj2Uw1qxv8XzXQJjCUnsz3gRnvgn92aQeXWjohMugv7YWC38afXJY6Euyo9JtWSKdru",
  "key25": "4ovKXMdaMeS9jhrMgYUCwqMpynXVeoYUKjoJeLsaMaom8KojG11ACjaajtv23i347Q5VTx3XwtbSzMBdUnZmcGb7",
  "key26": "utUdAFJ2VYdKgpPFGg5Yio8vdAcyGyQK1yJRFbyZARRpjgveHyLsTp7B6Y8NfhJYH65s5SHDpE2KgZzswmdz4wZ",
  "key27": "4v2wpobPR59ZK9JUXpd65iB4fu8G1PFdz4nXo37zBHiGARL8bbhNr5Bc7XBor61p4HYUmgqeMWQ4bAo5o4aWRnJM",
  "key28": "9E9mmvH4ettyZ8maYabnsSyBjMZgkGoQKR1UvgCqa4iMPdZ8gHQS2N6vo4Jc7oMpvAMUUMgwVGcA8BEm98DwsD4",
  "key29": "3QoQwPUfjUfieu5zMwfWpUDktjtheukm1dtV4vaj7h8VCZ6fLFQ5ZXadQGmaeW6ZgeUeir3rxsGbKshvNLwDeseT",
  "key30": "2ctYSwWXGruuWBNSx1YA9c8fscRgDNyeScBvWYgAhXAnJXBPqhXQ9gjTcHAnxs9vNJMmC2Mk85BqDfCTyQUFTayx",
  "key31": "5cPk7PaDvqeE5YeGtwjgYKNjoC6sDPuDxxk5fpHybqoERyUF8yX3zDFgVDpkHnW8G6U1VUQapWE9gJyPS5A4HT79",
  "key32": "2FJRi6KxLLYSnfe8yjjHzVHTV5Z1PPoTLScKvdapwuenYS9FT7ZfiNoD7Bh4ycwN6yjshjRZPAL247PyttEj8Qb1",
  "key33": "mBnM616L3Rx6Ma2W8LthZXyPCc7nuw843V59B4MRDhWUL96YtKPYtGT7LrZimsMCA6Rr6sgNSBqQRwfu8GiMFXc",
  "key34": "Ti5RWzbxBbpaESoSRXRms6GJLN1PKBHcavh7dD5QmXDixU4mQycQtAtVsigvi76ommXTKRT7kwGiFuzCJ6VVjTe",
  "key35": "4ZTkthdiZmFeMFpP1UuAJ2GEE8FAwgoemLsohRH4iJGbbrTJgekvVp7NisxKjP2Uu9joLQUrdTsQ35EYNdoKa49p",
  "key36": "hQabfVzw1iqSbvHe9WBxwBzMgaxBTFXbtVRstEzUpPHy5whhNHjddh1rQBBEoeAvNhpcrqW9PWYAuuKqFj7uoah",
  "key37": "5TJHaD7epHY4w3N1yFWTGC7mtuo3v9dFnDMUf187d6BPs6WJhnF5dCDEF5HSajpSRziUYpsZncPf4kzvEv5tXEze",
  "key38": "m9gskXEN3zQneEfrhovGuE4KMJhUWWpCbYMpEowKWJQbfPq9qDTsYjN2r8QTTkH8DuBy27xB7RoqM8nADHuWRnk",
  "key39": "dy3uEQKHxfZNrVNKuyN6JASBrhSS2QP5BCW7kyk8tmT3cJBLyQpadZSWhi2tnqEzgJM3xkryH9aYH1ZnyUCYZtf",
  "key40": "3cNAJuS5WLRPKfM4SQahDRgyUyi6G3nJeF6w42AV5DQUhBMk1kf3ipCUcThkGCu2T6gFZroeTHp5kHW3SDbghXP6",
  "key41": "38Kt6PtoiFw61JpCg2ft57Dhvo3NX32ra2CnESK45xFS8htDbReb3g1QJBh5KXy8GuMoso9dbEGgV4PtAQKWU5L",
  "key42": "3rk7kCvsdk6bvw6tUhKhgnqn7vbZaVJ6VgtknADwNjP3SC6HS956qQ5tUSXWMbHqzixCsWN1ELzKvCkSPsr9qdEP",
  "key43": "Ak8x1fQzYu1JozkQc3UNLuo8sEuWA89YywUDXrpquq2VFCKkoZ3kAwxdNqyxRXszsXzTW2nEVYihXPiC8CgjNcb"
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
