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
    "4BxJqSEhppQM91E9scEwW6FaTV1Qew1Uh9CEoqJGVF3ui62cPbPNZ3wZFg8xAVLnJPjCBvkouPaKyA2B5BmSEPd2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cwMzrTy65yegji1saaPuqHsozMB1mjDGnc9iMC7tHNKkkHWoekGwSCWLwv4CougH22K2ZMfSnL2zbmXmpU9F5Ro",
  "key1": "2BmQCMs2YicfPVeDmBWjMJbq63dFeTAxDJo5J48qbNQmB7TRQCXngyhjGwtPmr8fY8PhhcrkjuUvQ9KFZtrfoCJr",
  "key2": "2wMAHRnpMnyPoq4Toj7QWxBZCbwA3TgnyAyjykMaaiGvcEoRwwtXnZuKsgJDHAt7M5Kf3sd5Fx8UQfR5uCZUqZQM",
  "key3": "4WmCHGrNA2Au6nAbwb4sYGPG4EUdRoftZuUbSK4Y8REB9gYcPDaNQvJcbAkPYTAD5UWmuvFwcT3bMo6VMBaoNoch",
  "key4": "2iCiZLaQ2Q2BnBEMbZy2miKSYLrjPmwCrDWQZMpBoXSnFet71M6PbV6c6RZCBU8X3ZUWU4wuX9m2ota6TEB8Qv7G",
  "key5": "ZQsGpTR1JwD4WtqGRA6pF61CKPE8cF7hCLcfyNPULL7PK8LFjrPCGbj4XzDbtdQgr5edBEdShtBgsQQtPsepSDb",
  "key6": "5kbrpEqe2q6SC3TkAwMxJqfQkKtAQ49ZiQrRSRiBqoNknocmxrvHp5HKsdZDP1d5ab4JRHS5JLkSCwbXvfeXEET9",
  "key7": "4BFmjsErapFqXhje9DiVgZPxftJ2ajqjFyThYC6pVcivwG1rfg87Y41dQ4An7KN22qenVTaveG6XY3F4KHVsvnQC",
  "key8": "ychRiZJ74WGDCquZspL2rVQfm3KRHh99Snat4riRPqoRX3YxqH4vik9Jc9AS3sDwRDmVMohhMPYy6S2egtHjssB",
  "key9": "JPbmXrXiukcjbFqBKqkCFYpHYLeTvChmphjogBax5BmGPF1c1AXfEQwdmkWMesopZyqJNVZfavHLG146BAhgsjM",
  "key10": "2CYxpc3D85fhhHwAbkDZMVqxnUwhXkSg1W53jbmDASPc4tDDuHJRLF3JhfxASBVHJ4vWsv2LqXohJLu9ACz3Fb8M",
  "key11": "453yGRDorZGr7XVKipkpSBuF2dgmJg19ZDRBgymAdNrJTak8nMS6V5PrE7ws6JyX14uTo5i35EeFENfzYJzcdgqF",
  "key12": "KaYBie3WyRSZqxhJDdu5VjxjwknchMdAuV3dKREThF6frfwF6i9p73XgR3hGuRz8UqSLnjd7PskA2P7Ro8UrAmc",
  "key13": "2Xqj7gUTdWXawFXuyx1h5js5SC37W4XqGCByNCn2qptfPaJmNQ1kDHmxSjkquxtXPQoEtawjMHvC7bbwz6McbBPU",
  "key14": "1AdKeVVa8iyccQmthgszs5XFJzhM2vhWibn4So3qixzV64DAThnVPEMWWwtcBys83hpuV2r3CaXgMXNbHrwE1rs",
  "key15": "4fgZyoebHBSZmYoF1Uf7pUKpLZ4v9ymLATT3Bmj6CAj2gn235oUHY8CKETVUjt4aD62UBFaHnMik2vMDvXJdKxoP",
  "key16": "Mb4M2WACpUL9uX9RBKWABitAHse7cumh8QF4Z6jui3eiB3JL4T4RgLw7zLrQ1s6wkeoPu3WhoG4KoRjVqRoKGxM",
  "key17": "3QnzYHYLqAt1HfzmiZ6E72tQvAVT8k4VkVP592ZNnS8pA7HwHc83JJybBCsoxFN1FNmEyq3n57pPhJpV2d5ZMj2c",
  "key18": "4evakbXa4iPcvMpTc4mWL7ajaTKuXMnxVvztMJXj6R1gAVmxsEDRJanZ6h2B1oLDVv1DdpEJuo4CGHJQz8okoegS",
  "key19": "8S8sLEcG8ua791X7LE4UCLcLQGXpFAJywFWyzwsNf7MaKvXGySgqT17anoMmcnZuJRLqHXtGRTd6jhJKR3Wfgzt",
  "key20": "2wk9EGaDSJABNzMtuKvYkPzhtSZb8eFQ1HEbX4s1up3vg9q6wfbcn1L3bidN7Kk7YSSiDerG7c9iJaeByCvkpse4",
  "key21": "4kY62rG72hrD5mXr6tUNmHNsvdDE3rvt9g6rj2RRfDJtDgusYTEuqchNesutJUVJpBfnzHTQTc88qSztmQqoAu3G",
  "key22": "Q4gZgSvSMNx7EkXsegmVESp8D2TKcRxnz3eL15Rc81EYQpPTbUsDHoa5KFFYXUstodUMWtinVuXVZnbQSw9CBMR",
  "key23": "3nCAcHATQqhaNA3VQGH13r7Z8BpM7an5orPGV2jGNcAjeTGqvDJR1TETFYG3QJEU4ouAf3kUUcyTJJ9foucKQN5Q",
  "key24": "3jusUtpV2975PE3t5zfzvbswY7iVCYiV6BgEAp6bDTJJZGE98v6nrFEw8p1frirGg8MbKA9iPVt2bZKfTiXMdRea",
  "key25": "2ou1uH9rUdyMc4fkrGMYKqZ5pALRo9cG75eVfhzPnLRhD81i9wvxYjstm3UUqP2sYRaFRNENtCKGBfQbWazizqUU",
  "key26": "2PrkMzsLpFvvCK3QmXxBdHrpxVZLUhCGym2v8ZsgkUue5x1fLBQ8ZD3MnFVHd4XAvCrKVEBA6mgbJQ5vw6SvzVhA",
  "key27": "3hJwhXx44314DQdq3ycD2JXEgTXCb7kKWuoV8hpQizjCMh4tNbPiLGaYMY5oabcJmdDtbm9Vgk7TTLdv7CCFEvVA",
  "key28": "4ZbM1fEqewC7giUvbWvjhN7eutrrw7ffvMzxYhY7jRZVRa1ZBi2KjySUnF43RqXG7TRRwrKDtiYweMVGSKpR9ET7",
  "key29": "pKcdcBQWHXDLnq41Yu73tsxii6tSQguaT4xYzV8CvQyuNWCsGQwQ9NHDJxJzFWxCfDpUF7MuhNR9uybiDzHHgZt",
  "key30": "2cTWHWt9U2Yb5fNfVtAxvAFAQykk43YfZHRUacTtanrAo1cSy1kj2BGwSALHAHYUuUo5QNpCzek31fN89uug6aR1",
  "key31": "3DKaSCHQYb772mxw7CyhiHyyrkcZZZGewj8qGYJZev3vk4sDkUK9a8fKJyoJ2cYrFsNH4Kd9pqUZxPTK3MzWM6Dn",
  "key32": "kViGfE9WBxZVVwcokdPwWWiVHUvWYM7qchbTkLMemar9wnU7gzdQdtxDNAKaCwTViXG17wbTEidNo51qng1ps1n",
  "key33": "2xbPzEmiy2Yn9XhgZToUEmZ7kZ79Zncnzev6rYPdwknXSSxZx9XkXptKt4hL9uACqtht56GmWp6hPmBj6s7uxbnd",
  "key34": "4WMRFbJg6aNMDMKGbcr8yEBNeTfpfKwn2jjaAU3W3wvjjRARk3vSbYwvAsQ8dNkZbHkTmREJ9aCwoFN4LopaPJLY",
  "key35": "64nXDo4nZHbApHo11YuvKVbsVD2ypKut6c1krNDsfhPXPEeUxfXBTuSaPW5u2g3c5DL3PJ9Uj2KCLy7YwELyZjD",
  "key36": "481babdFznUsSbUQ3YYJE9pvAQKR5XURPB2RimyXiAAcPfgwJqQ549WrRMzwEtDPLV4hDhCDKnHd5wZwb9pFRcHZ",
  "key37": "46ULxYAi5urLMDSjCqFmhKhHpY8RqgVs9YpdTMkmG1ME6XejfCB8stEFQ8rLybDUrhKbjrVpspXHcDj6ucnT21KJ",
  "key38": "eS1SwTbhGZmz7R4ap4kEEFxnyZwgwndassRcyDCRiwjkBtJrVmWwzhwjzhQnXJA46n29HEbPqhUZk4ZcYCJJCqN",
  "key39": "5D8MoZHgBCFu2VpGYHqYgy4b6fsReY7w3svTESMbA7oq4dRAhz1YtjB2UVTsC1bdKgYYFijxqmUxndnpngSYjE2q"
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
