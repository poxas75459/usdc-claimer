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
    "UVsbPtKomuGztmeXLgkjvXNx75PuwM1yqnwXdy9LoErVrVMWLSWgqHbokFKz5s48jWhVPpBJLLWzj9uq37SHaek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ppLkzZSyfL9dfwXV2SCv59hrk9RPPP7Tbm2ohstiLJAJ6WHes7MUQMugGCfh1wT9fdkDt1Xx87iJDg2bqz66x3R",
  "key1": "25YBBPhZUuN6cUuHG1Lp8JfxeWPxvQQauW4ytWArtHkCHdQKqhNme1J4Lv2JCNNAS4J5gJLJ2yyctbQi7b6cL2Mi",
  "key2": "4ZgqbqiPbGUyVvkosRukoSmCMw992FVmVZY5UNJGxQcXNLeZaJytb94ZKpbtYgxZ3hHFjypXVCt9XUhVZm114Ady",
  "key3": "3f5mawxCsVSsjTcspx521XEjCHWzWyvhWmwdzvikyWauhzApJzDCpFYhhiNvZCSPgFZ8mi4y3p2ph4aivDsf5Hwy",
  "key4": "5YN2UXKcVAhwwtNDHsZHsYQ932e5YdhMsNxABYWF7zhpeGuPyARn4E9ibrGQbb8DwF912EXbG4BSa3H8qKVc7baP",
  "key5": "4Vw7quC5ch9TykHRzhtaVcp5WDnkNZhmbkJ6V5avbbNVY1CNRmidNsXvKvmeDpqEhn2e5642eP9ufko7hKjbMvPV",
  "key6": "3VL21wWcpHRq7v9HwiRZhFgoxhgvj2XovfqKoQnaFbvVcMmkodxS4mrWNWEPAHdAr4uuXByadauf6QyBVipNXB11",
  "key7": "gHryqQXXKNE6TZxu5vYUs8vZ4SSVt1FiwW8eWpg11Wh3ALiGiqA1FziqDM81wT31up1HFcLa1PZ91Tz5fetnTqo",
  "key8": "4gm4EQsxRVQ75g1a3XZMmVQKTVZrawRq849x2WZY6RYUFUGNWxMcbnFo2Hv4u99wsSoyoZMqJok6ctdF1x9Xbj7p",
  "key9": "32t9CRN9oqzDPpdzLt4om959Gq94QCwQaKUDBQspJW2QBfnFRod8qPRAX7vqHYrtt42MoaZmr4ys6o9KLi9EQyKM",
  "key10": "81JnJPipmzKN8SKNoGP384m4qG2t3M6VPwMw7ah7b3baCm4RFBch9nenQng9xQx2PAAvwtvQqka9AJ31wXDLKYa",
  "key11": "2fmpDPxNThwA95xnevFi3XraBjnAYJoj6unpH5b4pH3go8KdGDBk8ZrzWhAGqRQFN6gWb88gyZDaBAiqtjcMFHfE",
  "key12": "29JjEnSDRXUPGweDa76NXPq71iDJ1oKTt5QKNeePsdJeg2AurZfPr2XrF17ExUEDUknhsZijfFaAGS8mBhXf5wS9",
  "key13": "2emN7jZ32K4D8eVARuWRFy6sTMWa1fF5FPZdqfNyRsixpKijgk5sQrYS9XHDULf75DmR1Eu1DkT2tSyYTGGejmYA",
  "key14": "2tmzitwk8NCsmuuDVhnrahSyvHA3rLzCKk94XQCcPjWNUhro3LV4M1HuvpDjuUE9PaPwERKxXxbQH4vVEF7aCiRF",
  "key15": "3HJDYFFQgvjj1u8Jn1zcX3dUUqzbeZHnoniQjwqhurjjPmG8LzNVpxXCKL582WHDZTiNJVxy9T2dgc1YMjavG4B9",
  "key16": "39Fd28BniLUqW8PAN5kz8YKi5sq9JGGusX1hFgfkT7oBajCDtdF7ppx6K7f8xJx8gzWvsMFaktDfrDf5m1jC1wdP",
  "key17": "5UuKvCAgZLoAXaNeptpVkQZBfyRnoWVsX1oWst3Hg2Y3AwDBUX9GJxVYCKo4uEguvTfe7naErnY1FrbSeUvaH8e3",
  "key18": "2ngSCamDdCKNBRXfK9cTun5AACZPbDjzozxtQn6FtwBiCFaXbGprH2Zqj75yrit5SfFFyquFXz1WtSk4GPR1UsoC",
  "key19": "SUZ41KgebJ6ywLg7k6ZrcC5YgXG4S6gv7K9ADv5p31TNbWRfienw5VePXVSG23Xwzvu7Kpxu8JMQ1r7L6KvpV28",
  "key20": "2KNcqwAEKfEY5HKjM64QkXZE6apuFYXQ3e5utE3f9Gh6tbsh5nubbbPGxq5V6riGoRSUwUjhDcp9YSVDUYAmcsuC",
  "key21": "25mF6PGMntnAYCcXS9ptVqtFnWbXpnnLnwr4ZdvE5LtNEYDryRspWMC6z6k5LxNm6AtR2nevvySEBakYekt55Pde",
  "key22": "RimrMvEFb1czLxpkxN7K9k2JHwcX7Z3g8ptQ4v9xV4feZbSsu8qLZdujtXwXsf7ZNgeUJ1g1g9frPxSZgYy7AZj",
  "key23": "4mLekfM2Qu7mthHm5wXmQYcwkKVRd4TL4yQ9ahsnky1BLgHQZdKU9SYcWgc7NEb5SetY4Yv8E3w1vkdQcE2p8NLt",
  "key24": "2ep4vrquZ2pw6zEw67iz6J7nng1ZvoxxhrQczzGuV1VTzQy4W9wan7qZYxRGM4KGAfEgH1CUuSr3cyAt7cXJwBbn",
  "key25": "w65rkZFkyFz8Z34GJJMaNpeRrZuWqDn2S1SoESfioZsjxQAeRTerwbHTuUT6iqSMCoWndd7QvixjHbKFoeau2Gx",
  "key26": "5VFaxnGZzcUHJnhNhVTjdmj7N955hNEeCqz3B9hMwmoixi9FpVwKuh7ZYyUfTXUsctLYd21WB5Cm9qPAPKUTA4Z9",
  "key27": "4d6ANnV9wnmi7f7h5EHnrkwuEqtEGyBkx2bh6soGkjb7TR379CSbMrWDwbqs7JLe47RoYQiDV5AnFXKTEWwcoTHf",
  "key28": "3sQ85BBb7YfqP6gERNjGWyr7VUcM3QP9j7DdzeVpGatymRDnk3tJJtGo1Bn55S1ByJ9RGbQ2WhzEH6Z2DcNcGoVS",
  "key29": "4CCTJXwUEwk4FQENhVh7EnTA3SbPnTFxPjd3fTzfJ7ufN7qL6MxD41EKJZjM1bS3JRXLRVBccfuM3ugCRVjRQeRK",
  "key30": "1tV6BcMMpGdbYq2PwEBYwt8pzWjRtHsvSPrQgc5cxp9PNcwA4fTsDNY5v9BLxkygfc2vJJMgrNRKFvT8AkpScR6",
  "key31": "5RtELzuUUVSfwxLBuXWSU2Pn8hUCQGEEbRe7uwxripkcJmk2NKyKpLr3PNHVK3wAx9nFvdjKqNBHdXzxPsZRocpc",
  "key32": "2k4uE7BsDBKurGoikzKnTqFJpPdjW99cEE1Kr62dsWdkCoJrr43Lz1MAovSvWh1rtwEofCGLVHDpZSbD8KphZFcA"
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
