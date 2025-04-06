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
    "3tPwp4xKTeQBbN46h64PRpSwV9mzZDX6ZHUjdqoYs91cPyFNmkThpNTco5NjPGCWHqa8sGrHqDAJDoTG71UUydpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9ZJeY74FG8ka2As2MEHGrVLYUer9x2tjXXXfr2F8t5XM7wHntmTwthLXUHQYYMgGbE9JJ531Lo59YWNftcdsTk",
  "key1": "4Dg1Uz1gnk47siV4YY2jsrJtGRG7M8u7jMPrpAToubjL4JhPqCXrET3UtSnjWkBBMUwqypUSpmTZAFYVAFoboA7u",
  "key2": "2vfdXs32M4rKYNjpcXXF1B46oBBWsZo82R1NoosTV3wbSghzGvap1dCvG4viifdAe84ytaHz8QjiUFKUYL7Pt2Hq",
  "key3": "2GdspPxMwHF1XrDwf8GbdSQwJsEQNFjhDXz4fFFteYoLPcQsxMT3wMegHwXJuDJQwBoeVWCV6b3TLidByzDnPNGk",
  "key4": "4vd1Vth5VqY6f7TQAjYxap7R8stAjQGzXomifu1jfSZivkHBebJxh68ngsMGvFFpfFHBuEq6c2Jv1dcn6RLFg4E8",
  "key5": "3ViNtQ231gbbFsnxnZMVXRWexBgwaYqPv6zdyaBP3kVmrhdQfvVq9Zdk7pTGLsNuzZB1gSbkumetjjm8S82Qjm4T",
  "key6": "iZPBPzWHc1be3RYSHB997oGsfdpkGEzYqg8j9bgEe8NaB9PPErA3L4t5JvJsBzEz2xf8s2uFi72YkWAUjd9pVif",
  "key7": "JaDFgvjCb77PJNiC5jRY16F3wPgqJzaubJSqvjR17h6AWHwGWDvBrt5KAx8RDPVA6osmmQVnBeGN4LzJu5cnCvv",
  "key8": "5XVUirBsrzvnC3WxAY5DmLdtaz2rJ3E2s9ZG4tPnkW5kEhnsmrKV9fWFhQHLxYrsL4YhxQFnwfxLTjT8NGos3mjf",
  "key9": "5noodijZLSvuqQwu5zZ9VVUwLJNKMLnMr3PFfC5BGGLNczCRsS3apyLScu6tXnDfdHzJ9d7kVUqkSK6ik2mq7Msb",
  "key10": "5Gm17W3T2sfaP1cr54BrzawinfvJ4PeQ6BG69SK7qa5THu2vAToocwBXxQVYeknybgFJoAoViZRBsAtfkA3CNCJt",
  "key11": "5D3iuEtWtQB3NV5oTFTbxsiEWS2NkNtHWo8yk29wQVQCzfmZxcnuBqxZqgUph2afH5am3185tZrX4z1vt3fFD4RQ",
  "key12": "4ziRExcS1awdHRyRtEyR6mpZ2frFUh2vmjfrPesd1qem3DM7WjKMqnbf8kj2A4VkxRpfA8L4ZYSPuLFn8zCwBj1j",
  "key13": "293iMFoDcJCLnzwyufa3Dhbqvc5Auo7Zn8GkKFBFnKPaVSnHAaQ9Z2Zi3DW5XfowwQ6u1Wz8BwyLCgbGHpsSgzEV",
  "key14": "2k8yWUpxaGyMaBzavCHpweuFVjq5LdKh25TCbVxfGRPowEyf922SigxprsXV7wYCeCcDgcdyLhaEeDznCU7anQ7B",
  "key15": "5hM1X6JUa6Du4V85J9cwYdoobDXHAxy9Tyqj1sNXLsxHZeq5yvoQEmVphGKubjgzBpbWyEmEtFFcm5Nt3PDkXA9s",
  "key16": "5FzYsJuF5UWTAakM8EDrLcnQQK7VPuKhVPoS9xvPBAeaygNFBvhXU7nmGi9bqagR3PnG1ZKsfBKEruxWMzDws3jh",
  "key17": "4aDjd2kk9yFLbi75wNaaXfwQMfYyQB5yeYxEjTqQ1W9SUfnEjJ28AXgcwDQfPpjUvhqZq8FBt4bk2jtw9piC7wwd",
  "key18": "35WFETAy5cfMSzMUQ7NXpPzZoPMN4uo145GcHuXZmWhPPXbQxUH6CBar4PX9vwsktaiDAdjcqbKFYJFEd4m7Zqvc",
  "key19": "2b2R4rpXgVQRKYrfiZEV1CuR3wC74mHg3Qtr482HCHA8op3b3LKkdBF1BLnBr979EivQMVAfFqeErU127VhY8fET",
  "key20": "ZVs7Tu5iejXF8o74vkNBWBFCqkuBHVhwLYjc66v52T5bZGSgzBW1feLwsVZBF9Ctz2xWBkznxs97aLrYkWRFZLm",
  "key21": "62Jxes1hXNas1Huh1i7xU9eWyUuAo8xmxiHEKoyNB31b6TTPG2n3RewFiGx2V86mqi6FPXwz1b1eEwg4My6UfqzN",
  "key22": "AmEoJDsWyq9RTwxjp4aDaRpDCxLccwMv2kFtYQyUrDooogqsGXkbFMa4kfUYkQid9Q9uG6sLMVRrGZBfNK6haqh",
  "key23": "4CBbrfqhXeN6MuysgTuyjToU5XpAJ3zGzxmg7XjkEzm7Jor62A1ypz1kFeZPy8Jp68hAUeNRmwFchPKtrusTNGk3",
  "key24": "3jLYGo2ctzgTw7dLxyzVyoY3GGcUaPMRLNtW6tZmwyoiqiAFVvCwnfx19Q8wdmSjgxed1H5NUv1aedBVT7eyRPSQ",
  "key25": "2vTvHaTaxSRGK1ptpSb68ZwbHLnxaQ91nmCS38nug7g82tgNzEGrLf5WTYSYkjZa38swfoFYzu4yo1tx8gDGfXas",
  "key26": "5aV9EsKTdZQoUyYUWPK5YjaqpDh22KehBBTpqzFR6fhEUbJifigdR4e1o3mmxrJoq9FErtCM4xDBJCtiWZEtxodi",
  "key27": "5hserRKX85cfLfTCu7YjRyxiyyi9Cfuz8LCiEv4XFWa6bj1vxFAMEmrSriWsY73RBDhjjHmY9vAa18rKumF8unnU",
  "key28": "272MyXfHW7R6Lc5RccBxggBPjvceapvj4mYPnxt5pUNuvoVKjnri5zPFqC9bNghUFA4dbLptuHN1AXsbmUFgCqwC",
  "key29": "5KnTXFMf2bJZvoEF7inU5UdQd1yD62ztrHhd948LiX7iJ92kX4CTFWtYmQRR4U1a7STtUR993cjQE3mJMcHVXmuk",
  "key30": "39HtCqMSpkfasQRTA8hTn4G56aiZKUSrNezorGZpN8RaAB3EEFNzHyvbfy4631R1NooURCUJ59VKpaQFoS59TL3j",
  "key31": "Qu3rHAJUfgyB8oCBeJPsyp3ZLMn2xgk7m9V3sws4Si8coR2tGYVmejevBJpQRiEvuwtoPVCD1CDTbAFEbQqNtQp",
  "key32": "5EzVXJkZr94kXzo767o7VdcAgcseDBvfZCNvGX5QsaghgFnBL833xXAN9kx4BeqtCNHjdMjcgndoV1DQMrwUNpu1",
  "key33": "56eQFbDXyWEze3LA5YRKFeaosijwVzgByDhPUH9XQsvbJ9n6gxY9TjLGTsDuYcHChEEh5DZEXcmGoMDobF9e6y9g",
  "key34": "374eCxWmRDBP9m8MkZpFZPezi4JWiSqHtkZVdqU6w4knEoFvPttqgbQh7oDGQP7M9E8hZn1D1C86zJh9ivhETYLx",
  "key35": "iRQorSbKY6HdyG3YR1LGyhXP91VCA528RkYmXmdx5BazKiXDLyNgKtDtsz4uc6ZeA8sXQREvRhrFXWcPmtqbNH1",
  "key36": "5MFmMGBAbSwEVWSuhpS3uvfHwk7nughPmks3GmbzFaPf9YgJTcB5Mksxgf1Av6Tvof46vHK8Ku1qLhRnEAhcSfHw",
  "key37": "3V5jQVJxmb1143uxgxLyGSf5h4iFLwQWnRaknfJjHCnq45HNn12cik8Cmd5TzYunbgKP9j4N264GZ1QZddgG2XN6",
  "key38": "DTpyyhBeVsbDLMcxWRaXTu26m91HfWMSD82AtGrNVBLjQPHX7XQrjM91F16W6tM6UCGCtdgL36BDnwiC2kPZSWh",
  "key39": "2HZb1CVZQs6ZTY9KoZGmCkibtVswxRFzwdyuWdKeQiT6bQqF3q6vCjVsmEFEWjgAucETaFdJE8b5ZNaD4grXysMi",
  "key40": "4CF7UsktfMcb2U6cwhFtUFdUET2CCNquL5VXMHZPnqqXNbauxwQKrjgyBeMRGuLAa9k3uR7LpwnaaLRjS6tVPUAy",
  "key41": "5ThytzFS4TZpftPriM9F5UL1BHgvjMf7jeffAuWYPjcZWosFrcQAgEUvhzRLKV2JVFkbBp3xpJfRiwtYapmgd5Mu",
  "key42": "8FmTGpAYMbs6Xc4kh5r8kEnVBQPqemb84XQikdtQYM5yvc4wA4aeR6xWbudWuUkLs7mf5Qi5GcU8gCjj4LfyDjN"
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
