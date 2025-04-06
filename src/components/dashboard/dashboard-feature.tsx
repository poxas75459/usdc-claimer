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
    "49rcBUrTD4ZDwJRcpKydXYjK4Qo6jkuP5Xx624oAtU8NdSTSiVR6LVWUzUSB45vsG1rFVT6niJvET4QGTRiwUzV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YWvP4XFNVRjxoLBtV8EPdmjFcZ9noStSHdTQHzM4WtVZ7sFtqjS9dwQE9PSbo2V3MCZNWBSC8bm2Rh5aQRJBmMg",
  "key1": "irvppYQ4guBC3StQLwU9WwfVfVeEhRnmyGVMjeua9YGmDxen5f2PdY7oQYWc2rxcKqcNdLWjevJTFA2LMujmAeN",
  "key2": "2kmsfkDsuNMEvXYP9VQhtxCkNRWjxVsSUqarUSSZyajLm73FAR4GiZUuUTrVKCAZFifs9eZzMYM1WntUnMtB6AXQ",
  "key3": "31Ti53H1QhB67F5xZwzdo2bivw2zT7Kqk9XBJftg8Y6CQoMu5uzxYavUHfg7gBVE6w4sys97HZeXdfixfhdkDouP",
  "key4": "38UEiHfu4j8oZVjVhWybCu2LFsSpsLTy6zYQgtsx3QwHxxbTKiFUoZ46sjvr4knLDtDaNuVwtTwB2PgAusTToFn",
  "key5": "3H6gxNWgkPhDk3sjpU5KQDnLrF74Fxqxt9YiuZcpDnJudsSf36rvywxitodgdTeSnChbuiEgtB8u6MmKiyjwy1si",
  "key6": "4PXgpuDfC23RR89Y51Ns4Yf8mACcgobxkiG2NNbCy1CUAkSQSiBhUBo3qVxB65UqbV7jsxW98C5L7n5bgpPe8e2f",
  "key7": "2Wd1J7RjZJ1ngyDTn8uZpyNnURScdxktkoaRx4nansWRH5hSTAZWiPQBeakA4xM4g39mpJiKnNMbAYZ44Q3mDcw3",
  "key8": "4316TYdi39PS4ySw1XRGLEY7mK68tq2unwnpXtVnFUV4nWcRNTZqmHrWJMFcb6phVUc7wYHEc7m4xyyfgwyb6CQJ",
  "key9": "2qhenrBAHyEPpx2BqoTMw4B1HKJtFo6raMHacQgWWmRYw6qnLoz5rbC1FTEyFerxHxcHHDudnF9BCrJqPR331Wxq",
  "key10": "3mv4soYEmFnbgCBcAjbuaRwQZ5Een97USwo2JzLrffo1h8xpwexxEDKkf8ZjNjZY8u2qPPeTZLGQjAUTe51XPkn",
  "key11": "5fz1gT5FQxgFELU4jgUW5YoKwa18Q27iPKgMbhS7TVfpnZ91KjJyPhBRyryf4iZXjHnFkK5W2TcycRD4EzwKqt1Y",
  "key12": "3m2ZpUMFhv1A6zNL2ToySQ9DAa3DQED3vY4HcSdc8smAabATUTn4pVMvjT2z7RdrwfD7u694tfihAEkw4SVwnKgs",
  "key13": "2qunSpuyZT3mRnW2CsWc2ZpT25cTwGjFDxbtSbMCcuu14pYo7p92NDJDoAb8SS9aNUCdHMaCazx5zaVzS13tCnsJ",
  "key14": "2rhNEujBqSiQDw9AzWL6XEENgEA17FVCrDtBiTShGXunuiiqHJyo7YdvT8Ct3aFSMpowgthSjRvTYzzSrFxTSDxE",
  "key15": "2giyb1sKYEaiy7iBS66CtJsT13vPpnBYgUE2gAiFKG4sVY2xbWMY6rL7zsyzAcaEnb9nEXBx9sFwowgMgZj6X64y",
  "key16": "k828yQxJjq7KaFrhCTNUjgDVs2PJD766ZBfRh7oEd82rJ7j3F5SSvermweZJct4fMppxANpMvtLqH6qKBSDNAFA",
  "key17": "BrrPxg83F59TBeXafunkCoetKTe5UW81RQm3W8fNky2sW7E9oJp7LNadk2KGFYhcLMadP1dxjfxGVWVqrKuoeGa",
  "key18": "8P51eE9gveeJ5G7wBYz1d3DY4zXYKsnUdHKJga2JSA3eC1wbqfMghSk4byK8qETK1cdtMLJEpnZQ4Heu1BuvNVT",
  "key19": "2NUYuodsnAw4pFgNiUNm4qSjuaShZW35727AmBPGtuRsWYhh4m59nARPpCiJ3RGwpECw9uNZ8Zv8kteira2p9bLf",
  "key20": "2EfWKVBHQp1fhtQ8DNn191HLE7BSjpjUjocQ7rGpZHpKc2m4WNRXEQJG4VauLsmQD5osuEgEo1rM9zZWFdhvMyeD",
  "key21": "23aPadpFxyMbMCMWec8KEmt3STWXYHhzAEQqVVPsvethPgwS2CuJsRqxWWzpZTYZHiQSGuZcEhXd88ZZnpcNDoqX",
  "key22": "4zu35t8wvVoot4oh3moVMxGhaa2xVSm7k91AwYaA7dBGhZ2iomGMVsSikmJNKnuhDWmRvTfmpGzudsf3QMgDEsQ",
  "key23": "5VEgffLsfGNNKH3bkUEXCxvAQ3sURihiK9DLku47h7QJC5cKv5h4nFanw4cuiqJVdhvaeT1LMsahvNHdW39vjz9",
  "key24": "4WRd6tGHdpX5nGbUiMys49FYkBp8CguzbTCX7E4wbNjoXeGLcs7E9NnTMn3hoioDiWqcw2ncALV59mm6BqafhiLj",
  "key25": "3CLdfvo294mruKFgRvTvBQrH8EhU9xUsUom2gVvfnnJGYL82r5jNQXB8Y9JTeaGmFsuRNd4mJCvgWhAnKTv36QHf",
  "key26": "5Z3kVkxZYo17XA4wNtnK5jhcDMyh2B5qniistSxHUmRJnrrzoAtFj4Rkb48JfMF8mdZYk9981kmK52NHrqVyJoLL",
  "key27": "aaA1hwJuK9BkkEdHg3NLhYjbeH2JEA5pHnnzThEzwCGvWkx5SrDbshXCStTc8zZF4UubkMGKJcsvb23vct4HJBx",
  "key28": "3446Tx8baEwt3ayLCFHwx8KpVaYEuS3qzLHJdKfwVHvhJWVEmvVWgQSFPDVNVMQJhnNbAYKgf2KDGM9Z3wnmgh6M",
  "key29": "4tQ2NVMhn59wyCauEmC1SdpudDFo3dRbmBGpViRSe5VBJ4dEnHsDi3aCdYVTU9axTLchkkyMAxbUoXKxWEh3Cxpa",
  "key30": "2v8Z65FLCUd5JcjrKBKGxBfDgTVUECfNQ1aGBNtjaVJkX5h3vLT5QKY9VbPw13mAaxkBV5LbqA7pYqURAGnnjQmA",
  "key31": "3znk38EB89vBsTwx9gY5hf9Nm8G629JG6DciFU8k4pe4kVK6fweqZfXukqGVPGsbQqQqhnwpPFhcM1jytaZtJZWs",
  "key32": "2RfQfhj94hZajyYgYNvDWnLebXbkLRjX6u5TvezjBqvRhDATZRiF3ZyA1DHNEPEgADBMtZh4bCvRFLDq2VUmqNTD",
  "key33": "4dF459ruvaJ7p6ZzxN5X4KB8XBLF8wTZLS9P1RZnEpMqgeUUA8XEsQTd3qgrQR6pR6yHUmx1Tu7fyVgZNDUuUcV4",
  "key34": "3v6B3sWH7rPUGcxMYbrdakuaRVfjn6wk7TNy9ocyrHXbvjTVsuHpFCmCqLrJdKhuhBfRKFygDANuwjj2ef5uHatn",
  "key35": "1G1ZiboxUWGD9SbZjEgFtgPkGDp3hvR2e8qyD6LFhCQDPFYzqrSMAtCYQE6W1wtZ9A3yuT63k2y4HEFCNQ7hMWq",
  "key36": "kQyVt6y5ax77HAfvqrrYzA4BHV2HazsVqr1Bs8bKmHHdmdRmWjHjBtu2QMvp9T5PiFBUj1kjVER2qFXKkkwH7iL",
  "key37": "5qkmn8DzjYCGtgrksttRq4JaHbHpnXkNtv3LqCxAsrrJxHj61mPutzRBaGXTSGyvUYBbdvRbGgDRbjTc6Z2sWA2E",
  "key38": "4u1zZR1Qt3p2AyAYGok5Y5wbZfZey1QQwPXbjDLoRockcCJZg4M4fYxBNGTttkHfjgF3w15Cuj6tk8vQmcfNuGY5",
  "key39": "48EpxHBe1N8BxRN4YoobDxvLdNL1pLnCkGn8oAZ28rPjB3KvFG3YjZQTb5ESBEdaTJDm7YRhstoBLUhGWESgcQKt",
  "key40": "4QeL1F36irFPa5aQ8Z6RKHXTfUce13aMrCgr69U2zaMau7HyeMsCrCtU1nE1tDg6sCxaNp9kwS7baNz75SjSYwXK",
  "key41": "4gvb54Hd5MjV7boadTnfjtNs2HkHL2rCscSo8JZXGr49V7BscDZP55nzGH4hTiMbkSzpYYqvD5W1GLs1gxopV2ZL",
  "key42": "3RmkS2TrqYqnm6vd4ovT5ZycSqAjQfCXr8zzcPes4Gr6sBgjNY6ETRDtSerzD1oK1F1PSZr3wuHJQQSET847iF31",
  "key43": "4kUdqmCDHuj8opZMs7pUMYtbq1fYNRHJkALtojXN1T8Qr35FSNyE77Jwqrwtj2AbRdfJDWASpFjFao8LDBUi58u9",
  "key44": "QZhUYKeuZNyv7GqjsbE5Siun2veRbQ2nzwTy65bgyMuNWr7kryFZyCxStZmrDzdMmyGXMDAuYWLBh2AT98WPYNW",
  "key45": "2oEKXdS1G8qrrw5ro3r933jyqUYhLkFgw5BXdPUPhBgasBhqBW3L6Hy1XrD1vL8pNei2sBMaYbFzpWvUKusxh8EN"
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
