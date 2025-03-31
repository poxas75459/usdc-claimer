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
    "3YfY6xTdV3RSKncbsHGmtxDxC4eNHyTQ7YA9Z79bQUdfUSuJsBs3GevXebECt6WwDPQ2PNc8q3AhMCy1q53CfWXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GVoBiG1m9ERpbtF5xdha2zeqF2UTKj5dFaWZsZuTWEBqSey7vQTw9naBdWmBUp976pRYPfJXUTcDWPMQ8SF8y3N",
  "key1": "4dTquHxi6YiMf1zbYsCFBZyvi9tLc5ThdQSNdVJqRuxjPgkwiES7hoicGV6gFCwQCQeEF9hns9KsogRw32G5W7q7",
  "key2": "5yWhjn8np4TmRHAyiTskWJTqqUoprZ4sW1LuDpXcsewdHm7sLgw7qxDLUCDbYL1CPCYyqnnk9SL7oeQL565thSAU",
  "key3": "24477jt6J7gnjfypEPYXnFkkVZdDJEKCPg3SQ6jZToJPymLpfcy888nBAM4TaUCPhw8WLVEowRAnAbdwrSUBw8Yh",
  "key4": "3gqPaq4nNStPpVows5TPH7DcioPghTsU2HwYeBAUQXHELggyXP37tKy6PqydSuLvD7XPkWCfz99rgF2SbN45YdxP",
  "key5": "67hFNGBNqUs3GV69DqfKVMNj7fMP7C6qTGoxg5yMYR8Kva8RNiJtJFwiPXxMg8F511usCMu5KSdjhZCo9nk9Ekhk",
  "key6": "2TruDA5T7pJ9ZHsGQ2Cz9MnPxsBMX4HpVhkfNWdTQPtz5xeb67TAGJZ1ReXCD9dkbaBmwteP7pi7ChoLGRxPHj4E",
  "key7": "2WN3iqSSH4tVY7Wn29A18wzxtM8X6AnU76F7yLS2fCYVv6HbGLVVB9QYAHjJQPKhx7bTLCEvG28vbrG3ACZcRJxh",
  "key8": "53uy8BiDqLBvoPxFjxsJnGTif6W42bDxpK2kiG3Mg3aEYCrH4jteyrQt9QXNddepHbyEEHUEabWG6HGzYfTifPSQ",
  "key9": "4unWmKqX7uHY81hgRyQK2oKjxdAhfp58FX7QRgUXnEccPgchzfj7A8eieVsLitHUHMDzXshy29neyAMndKH7myA4",
  "key10": "5GHtzQSXTqhjGK8ovw7zph8W5idGGCyRkuZ6ss7R3fpL8LsdyPCporWTDmdPgkaRigXkXKoKeP2xjzN3zDDPdBcJ",
  "key11": "3GfFbXWKobqiJSfXMKWmV7XCxUXuqTJyNDcgPUMGN6chHFYhrvGtuMrVChrSpAPeaBRCfGc8zuXoZZMZQWWptfQC",
  "key12": "2iudfAJEojcVb2Y8cWPKkY31Zto2W6Vw7oC5CnnEFCFJoWBgWLXtE19kMwKDZeqQDeiDjfMM1eKPNavUyVEztcUu",
  "key13": "2TfLf8VPqoxdGLRhanrvfGvaz1zfXH8nFz7iWdZWrgjk2x2PL95pa8Mu5Y6YXeZndUHeFUiVNfyhogZMNRS7g5Xs",
  "key14": "63Db28bsq3TWgQdsRZskChhAPSDQJx89wxmp2Yie77sJZ5kmhXi4pB7gouJU8nCawzcTuh6h91vzxekD2G1VKkmm",
  "key15": "23VBryho6pTHkJz9ykdABBnDUHzqm2DkukpFQFzYn67gx1bW79zrGQGQZJXY2o7bnkMbkBFHCjfvUhYqnZn8NKtq",
  "key16": "oVLX7sXFLXiJNrDUppJWatoje74iv5ir6rR4FmgmxYUNbgVWD3YnjSBDjjpjbanuBF4DHTTitNQTggniHmt5sBS",
  "key17": "pTLYSUPd1W8WXTVxPVF7T5JPj6hAnuDeLJn7wrstthfZSTT1N6zYvXy2198R9hcYFQHE5zaiRwvD2FXFW2SG3NL",
  "key18": "5PZpYYdn2iB6jDgGPYMJ8vHhB1Goej6ZJEcWdvgJ1sXKGC7CV81kFoYCLyQXKoqcLzV9FDwNsX5VZBnEocEX1LBW",
  "key19": "2ivdtBgxZsbupecDbmdNwYzGjq4EEry9AcKroHYQsvLohvy5GQmsYRNX6DHJJvCirVgCiobQGj2MjH4rRJwkhNt3",
  "key20": "6wvpWSPUMHMzT7jdeemY1VQB1TE7Uv2LK3RiD7r85qT49a6UAVE4yaUgfcPALjbhAcjh81y5sjRfbhqoBFAJ6rh",
  "key21": "3yLWQGbyc5novSmF4FHLpJ6oe8f3r1mQpTK9Ro3eZqZVV6foH8au1CBH3HgVVst8BRHZzytUbEKARymSXNWpz7NT",
  "key22": "25ZTeGLSkyXddkxTft4cyEEhwNpuxBdpDrUgeCkysasBB8dcxjhZFioL7UMNtzJboSpWv5WqTugWsadeoj4ZntpQ",
  "key23": "U2hphNVqXE1ELvxLgX3A9bGbEU2fLzNzzR2rKF4xkyV8629y6H29tGRLBNueX4CMAKEpG6hhAQu5V3gNeKFBZBu",
  "key24": "gQ1EDGaD4TaEyagcSUYaFrao4M1W69qtRPxJ7Kz9FJLboVf1csigYVhEiuZtZtJCtiM4pwMUNa4PGSfE9kqmmHs",
  "key25": "4fE4D4v34A2j4Gmt6mvviVV3whV77hghiTfkGu2RU6g6vxUu2jT3HrhU1mUGCcapCcgKQJiAaL4fQ6K5YuqdWUmq",
  "key26": "4zHNHpqKgFQiMHJVwpXjyV2MoMx6CR2Fjgz6b3zc1YESHBajYPz4JebxbNW9JEo9ZK3i3L69zPW4bjBU2RYY17wf",
  "key27": "3sP6JTdqisaL7vkeCgVpzUydDQGnM8iJj8ENyRSXKXnkbGuZSqhJULZ2T8FS7QzB4cPqUq9pz7CdGWqK9o3Mp3m8",
  "key28": "2Q5Vz32JMJjShtv8WJe8CPy7gGFT3d2AxRsTZsuX9GHwR2DF2nJ13ZxzUd4Hg9C1L5XKwd7KyGEhdzrgckpYpJRd",
  "key29": "MDiJ3kVKu6FbsXJ8ARiJs8LktXBsdwJKLwTUJBU3FW2VKrBic8Zs64BJcEyvLnyHEc3oKrnpdW9PEdvhA5488La",
  "key30": "2ht47E5EkdqfSzMZhKXZsfx5nFVypSmzj19XbeG5Y7nGpYdsF1iA4rLkaC6Bs1X8G4KVFCWwysYhs6MCstXT9xxh",
  "key31": "iuQ36HKcRAnRGo4F6SpJTSwsv6qnxef7SPtVouezfBrqiyMchrtzAcg1hf3jEwFFa4db1ZyTYB3K3GTRBjt78Qq",
  "key32": "29YniZ3rZHxcnvdsCytP23gZ961ZeNMU7akuyxx7ym2Bdr6rJnipKfpk2TJ7dWE19pC1K5fSCkjLikFwjEDb1Kf9",
  "key33": "46o4DTMp5i6MmdVhYaPben6UxsxjKMd75RAmVBArGLmYwywEMKgNZhHrxtTvNMoS2KszUhBqjuGtfd5nQnZLHx4n",
  "key34": "4GTiGTA16MrLv8psGDF3ePjgao33Lx39hPVR7HFe395FxFq12bHxnu6DogFEBYxRrikASxBwVv9jLzAx4pAzuFES",
  "key35": "2PPeYWae3pJaENdkid4xQcuJHhN3CdonV7aYd8Bz1NuePPuM1Hzev2bUu43LCpu3zYmxxFEWuEKVG8NayMCX8oAQ",
  "key36": "BpfwS2UHfRniBoaS9romX3N4p5Fage69nNHC9wWtYSCcd2i5erHwgi24sXjyjh3dBnpTEw1JECAU62sunhapkuo",
  "key37": "4paAzPxmoueheddUgMLqfrEaZQVwkvBXJPUG15taYiUGh6mVQngQDHuRoCyjwaEcaqVKinUWshDbcyNSgZTozFAe",
  "key38": "3awZxsqUQzm9VjTWhGLZcy9M7sp7Wv2DL76S1xHonE6VjTNqGob6qkZTP9ehWewbQJjKDqaSD18dhUwW3DkFynco",
  "key39": "4EudfCyf3utoFrbJuAE9xh2H4MXaArC5YPEyZHsbubheD7ZLLopBdbKZULbWXimPjn7nGPcq1LxqM3eHamkuMoXM",
  "key40": "rx9wo66Kp6td4yk4sASyYWE1akK6tfPpX8Nt6iLGDXW6W5AkiSpBHUAVztNHd7gCdvziHUVpHnD6WjLxtoxHpEB",
  "key41": "41zBjoTWQJEPMpB7CZGgYbPWcCXNgB76Ywx2T9qWDdrUhdDWhJSQScMugorb5Nz6KdsAMJUhTsPj3gNfmJ9piRvr",
  "key42": "2KaSgPKfU3Uxwzuffd9mDoRTurkNZSsSGA7a9SXaNCHHbEpy4ddqBPiEePn7ybJcnAyFewSiQDWNe6VZmrqNYbRc",
  "key43": "CWRm2UoME33eWVRR63KzX6ksWTVqD6ag4fEJNVWhZRLx6G596zWTWAqZoxZx9XGuREfbcoGCvYFMcRzJYj7GWA2"
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
