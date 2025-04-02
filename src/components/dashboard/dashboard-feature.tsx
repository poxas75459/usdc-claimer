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
    "3Nq6jDJZP6oJMTH3hcYpviapbuSvns3PD13wNkKiaEK9RaHtpZuGYi2QNg3D8FjjYiMW7Vqew1wcsWUtC6yHAiJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "646yroSg1RmS85mUrzKurEE86NpzoMpkApQgMD2P5KN4jCb2G6gRd2UZ2gbQ477iFfXuRxW4hg94rUgPjGmvEFVM",
  "key1": "5tGHWyiBvLybUktqYv6KHoFtw91FfkfF6969t3meEyGP2BgePZFDGuAnJWiuvMEKMKJLDQUDYbidpCZAyPzagsEZ",
  "key2": "2QoHb3Vata3VVGkbgvt64AYxmHRguenviPnGg6q2v3SzaeTg6NwVojU5g4eBuUCe5G7oRQC6PqNCcnbiLfKuTZNs",
  "key3": "3rxD9U8sPgR7dKNsijymeo1EcHVLU7UJKzw8mJurVNfFsvMko3yXVZLr3U3DSb5F2bZcbfuGrSWSk45K3MdkmK11",
  "key4": "pCjtwmNHg2B8EZ9vpP99ZEKvUo4wzS1d2oUiHPScqrC9iwHDzZtrAFb1FeADoLwLavoMPxKT5wYYBETXLAq3gs4",
  "key5": "5nevdRiC5KQda3T6ygMroA3UrkQ4HCKbqcfb2ZPwBZPyrvppcZh3igageLpFgbCGLFGEN7orzUcMzU8AZqfnVUZc",
  "key6": "5nazyMzTGd3gTU6pKmrW1xBapg9bhAx6mjTzVrjdgYwjJvFGae7eaXUr1DfSuPBtQqN6wghME3pqNN1VJfYUzqWQ",
  "key7": "4TZW3EdWhua7SGrw5iGAVfKRZFbfWro5UWgh5ECHYrDPjAAWprq1xk93LJZqKVv3GNJm2QCMq6EoWDLriuRjMSYU",
  "key8": "4Qj3iY9jCUm2UbWbPJCrVW6AdRkffCHZJRHPdrmFVmKtM7YqdqhaRakBTp3eW9D2RY7wUwGxX9yAyGcgFTXZYSM7",
  "key9": "4RVb25GwCTHX6T2UXAwR5167LEp2CwV1j2pFS7Ctm6Z9L7BpFAQFrZJDTQrLvBJx33PdobsdyqY3pAyrc4TQVh9n",
  "key10": "uKyfvirKu1VDQrwXu3rSzRap3ftZ3mUBeRDXzNMX3Yk8Nm8rKm2iuvkhaEQ642ZpByqdvD12bgjVUykiAfjv1LJ",
  "key11": "5vU2rJTSCVQz4ukUCk4oCmpDficBmfu6ynPYoSjBfrR7XfrQLuPJMvyhpGujYE4Vw6wHw6e9ZoLpdzd4B36xLfoc",
  "key12": "Rqp5QCcfNg9FKKHvgLqDwrM8HcrFyji4UxrHZX1EW3FEUzS2ERN85a76mAoXv1Zdcc97ddofnhJmz9hCmuj4Egm",
  "key13": "5tvzWkXshy83jfnnzeTB6PFzDt94XeH374HBeRZbPmsYGMfoLVG43ktQeNkNLNHHEvJh3Rp2vqSATXxAvFThuPfP",
  "key14": "275Qi5wYzbdDae7LNsyYd9WnCACRbauK3P9ASdhvDvyp64J4iYrYzB6WmQ6aWVoh2VwDJEKkAuJaZbFZnD3WaL1X",
  "key15": "5asEGdrEaUGXXVAHgj8muVavYkRqdZH5mtA5L1MzCopck5SC1TYiqdoMVvt2bifQPgJytsGBVTgbkgjSoqLrfCX7",
  "key16": "ezpe6BjDMbpgAkF1WhCjLrwyH22z7qZS4j1Sko4L2T1eYiww3CAVgEgwUBsYfy7x3eTBb2A8JkBfpDoSXPBtuTV",
  "key17": "3U5yYGCfq1TNxNYWxbtb1UZCJX1Bo427Rcr5S86mcc3TaYRC3tcH6eCrh2MG2ZRXCUaPPxHmTHrS9jaPbRYoj5KT",
  "key18": "gKhqLusBmS9JCngePpfAfDSFfs5kbLXtzQ1rcWL7nh5m5qfpLRDMRSkyokKEyEqXE6geYzToqAZGfyXQZeavZTa",
  "key19": "63NbA6bVcRwnr91eBfuRJANGGtbxCgKC2RnWcGZ1Sj8zQAi5YdXmj3CaDAEng46cexXFVRroXjUkYmVdq6h5TwVn",
  "key20": "2dXRCK2nufqybHhefSm9sWNg1MMCVpZMAXvhtkzNYRKNTjJr4NBFQisXV9ANEKZ28xtvCvJKyp6qbXacMVXb8ttK",
  "key21": "5n38jZYZp2DGMQwJNy8dXZrao3BhBwy45K4vPF19WTgjDshtqgk36ABt4ZKSyM4A2TFwtMguNowpeTyEQirT9fGN",
  "key22": "2KYt6k2meJpvjjzMp1TVCZxZtSy2enEbC352DDb9sdusdfCFqJr7vmKje2FSZ7uayYQ8jVjU9j5yeeFCZBFsG12s",
  "key23": "63ThrJXBUK6R5SeRZsw4DaDAdxPXjU1Jyvz18bR8SEoDnUPXnvFkjLiL3451dZob3vVih2E5MYejtMYUHigbHMUJ",
  "key24": "5vdqipP2yDnZnhZTjZaL7yYt58yFTwctredi9V4pq9sZuWtEZNeyKznSCD635uojWeapcjrCtGTEYDWYq66zXZzv",
  "key25": "4dtTpSMNBCWJfhsiKV99SP4gWztzbMJHtDhgjoci9vfkWwAeNMahv9XgEtVnBMM4TB3X7MBE9DnG7PtWJ7LqsZpm",
  "key26": "XphgxYxDrz2RT2LiqXreYWBACVHveGdyWacDp1dshmG52btgW64G34tX6HkYuJcg6uheVrBbEo6B18SwF82QQnW",
  "key27": "5RRAhseW72aWKrxxFDQ4w5MpYjFA75UgVn3L7hVdwwnbiD4WSVY7pDd252KieUg6zTv4fzfTojXy1VTvmL8Zixiq",
  "key28": "3sy93dmBQaiTDzYW93ycxGpHLci5wTDmbcHUmQ1ZjVNJ56ctvWjZ5NiEf5gm9ZdF5xHsDbGQhVGxnmLQMUz52zPH",
  "key29": "3ymuutenZDRqd1APtfxZGr8zx3eY222TuGrc2LqabGkfeNk4LPPTb5Ko2fQB4nSb91GMkE4zDYU4UR4od8c1KpHR",
  "key30": "pBrwY3VuZrTpTBdmYxJPGJYn43TrkuEghGJFQvYDQ6dZ8LC3HngR96gKKB8CebvwsbHZvX4WpXWmh5cha98TRY9",
  "key31": "3HMQuhqoh6HYFz8k64bVSMuHAq9LM8igeJ7vyJGy2FUhk9mXVJDLdj9XJJ5dJM8hkFQcSkNsreAhkPhzZzBe8ujf",
  "key32": "59REVbXyHhLWzFSfDsyx2GAZTgmEostjWADKK5X8GnhiWpDeWu4v7LFZ7y1cr8KrDf1XgpoXHhySBJwgSnsQJ8Xy",
  "key33": "3E2E2LVmz2UrG2T6noyxQBKvnWLhpiZCG1S6koNrXJpHvDksKe1LjF2vAjnuxbLkNYUinGxhS5NZ3o4bDMcv4PJF",
  "key34": "2BU8meB9khLdFfiaH77JbQTJ87Ce5DEnPLNdMeG92hn7ZYUZ9EYzczUoAifZ5TTevipnqtQUxypN3PeesXJivohm",
  "key35": "4fqHYYuYBzLykk775VRhrCBKYho63rKYaqBkhq29fU1eDAzw3a2LF2PDMGkZqu7wiJF9YpFxRp4QerDRyTxFxnz3",
  "key36": "5B6VvBHqrXihwR4cRHQXnWEtyRJJVD9iG7apJYMjjmqEuEeo1UV8euSHc3zvrbTy2CBhjTMxypwZJsF4YrwNdxCG",
  "key37": "4EvkBqxyYDYT4LsVF9u9c1hLpBRiCBsn7j28HCJHaX9cFeQWqXZBTiEwgdZrsAiafhciZ4RiGdNSNv1NvsLxafvN",
  "key38": "4RtimACiWuaRC4QhfCWAwiTH8zKLS75LBdttnWwJc7MhSoTnuwFPabrzSjy2QhorRCn5QFWA2uzXfMLihAsSRFPW",
  "key39": "cQJ1JyfkkPxprEH7UUQdkUv6diY9MiYSs3Jzpg3HTAAJXE9YusQxcZFoQ5MoDLvjw8cwsznhxefGzEtx77vmb8p",
  "key40": "3ATAJr3S78TRibCywqQmKyeHCKDuMdGHqhS3H4rBtKbVrdJYkSHeEHeJKk4D3929HP15K58i7sN7BmJAkvnQ48LG",
  "key41": "2e2jDHTXudV6g7rrbTDtpGWSsurD83THwpca6gDpm4uHQAV9c3U18giNep3GskJzHpC9VyJc9K8BfHnTp3eEuPMy",
  "key42": "5ZhV2Rueer4XXjQN7Kj1GknzSTTW5QhZdbZD868CjiQXXcv4qZ1b3CqSFKFS7JC1ofoZ95RRtrehoS2RmJuyghqX",
  "key43": "2jnjW5nB9AaYtP9s5zPdAwiFB7UkXdoJaECjPcyCAXkFLLgQ1tgxiqEj7Lxo8S9ydqEFwUpu3XSSYzQuDh4ZTYvT"
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
