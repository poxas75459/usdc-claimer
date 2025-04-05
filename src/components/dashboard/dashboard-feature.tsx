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
    "3HkDqLGMMGgYA5pDiH5b8uNZLkC6T2hiB2zDCdi8oYmfyHgaFgQEtC7bqCpPMjTFSyZBX8akBFwpWJFqguv2zYNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kSryvAK5jCLXHQeGKP6HMqp23op6GqZo7oChhnZVqprPYwDdAhqFHnQB4pYa1N71H4QcLRB7AAAN4kmUjc5qCcv",
  "key1": "3g5WGPCeFzsEHSXZgw4vSADzN2HA4DHcvBSzkSyF2WuqhEub12LFZwvRpbKrjx9shCfHSUbaRe4hQTdSiyumoPn9",
  "key2": "2YJoy2rrJFAURhUcFdt5UHHDTXaJH7kaSKZwiYeEomnXx3gVJfCNYgk5PsFfsDLer7LsKTKFKDEmPC6NyuHpkZiN",
  "key3": "6gsmiM8ZbStZ4HTgqdAUgUDMofKySMHgCXaZDzLx3qxZj1coWh45jdo3QGvcAHvG99FcrHdDJvVSAMjNN9koxjt",
  "key4": "3fJMcHQ4GrzFh8QphjrW3X5cYwKqwZ4hyb8RqcpkdJ2yzCAqbGw7nrnpP9NVVdxd9NmGUUrwo7wPtLb8hvNSLe7V",
  "key5": "g1g7CCXsiUmpfa4F7QZthwjhRDK5XKPpmhzZFkQu8UvGGEPNmT9g9ZAFgjapYqDLWRMY3sAYRHmuWBZA3UP41Nn",
  "key6": "4ojcsDFDcswQfRDosD6Nxu25Jqa2qudps86ssm3Dhjdc28Xbp5YmdGCSiA2jR7a6UQGGC7NwrFTpDoKt68gQBLkJ",
  "key7": "4cV6obP7ddp7rLXMDpEW3GoDWqnDUWuBKfUnYzZKWtn8nSK2HNxDEiyY3uYXBdwncJBSgcCmjaUQmz1tbutReRJJ",
  "key8": "4eBrLnZNBLMmDUeS8mY2xySMUsUmBAjurx3fLrL83mppDF9jEgszUDpnyP1dWGtKDWtbRnPtKBxkWRG5NoJLsp9f",
  "key9": "472BemHxjA42idJmMeFBQyCMPKQwFcAHwYcNa59A9QHRJqGY3E78Yw4J6rpkk4fT98ZYk4CERjUPtbwQhYcCiCfJ",
  "key10": "25UkBtGsHW4R7H4G1DQecyrJUYgkSnXRoxFipjQti2XN1qdGfckRJoY4UiP76bvuJU6Vifh2c89aWaAw24FAwQmV",
  "key11": "26w7wZfXXZvSgPkT5xrZgk1X4zGbPhZenfyX1qjCWRuENeZK3Sa79561v8GAccqw8PxV3tDmDocB1utzF8QSkq2E",
  "key12": "23EXwBpgH1bZpB8SBfSKiUtMwZoN8epmZoQiRQVwzDTo7Edd92Jo3tU3wyrKmgtdUhijeKNnLwCudxAaMex2xqy6",
  "key13": "oyqGkJysP2s1Azz4U8wopiwTZycPb32kuF8E1jCjnkDAAVGftRo8n1eMLgfxwsv3wZ2AuSzUkSRmmVDgUFhiR66",
  "key14": "2kAoZo94SihF86xkXR2tK83m3rcWQWixP47m3o9eD3yH1bKg3Ga5uEDysdrJDUHiaCZmU3x5ysqAiCahwxbq8VfL",
  "key15": "3qa2uFVZj2PfucdN9rgKfcHwryijtLH2PC274zigsbJHViABMEyrKWR4v4ErwTeFkH5C2qLFmNG5hNzPxNtVRFRg",
  "key16": "MgN2s5egiyTA8i7zVXR7esspaDgoVpq5H6rASKpprNJh9bosEyATN8sAZepwC3pzBqr1FFbXgP27Z3qDNBCtBKv",
  "key17": "5fmrRvbTpsZUngZtNMiPJmpREDHvexS9AFmJs6sPfJe8eLLZFPtijT7aZsNW6vxo9tJkNEAQSRvfsbXycY85s2xT",
  "key18": "3MknMy66ggazySmssnUuPkT9rXGHpQhuh6BrtAJ1VcwWb1Unu2XjF3rvFnwU9t2zPxxgfvb2PakyQNCKWHsnoXgj",
  "key19": "G81VDdnhvWukWjNi5utKL7hLtrek6cRwsUQqkdnxNpBZ8ZZ6WbVpUkUxUmY11dRXrLehAppR2Sq2SqQX7TDxjT8",
  "key20": "3HcjNZ1qajVVq34nF6KjTZGdLxHioq2Z9YB7fn6s3Cf48Hdacq82z6jq761xN86jUBJLRNcUjduWN4utdMfGB9T6",
  "key21": "4dY2Dek7JJ58d87Mw9NxooWqSRm7ifMCxekWR9yV3fTq4r39xX4X5kihhSeZCTeUKyBLWpNyE536BjZYdJszgLdH",
  "key22": "43NXivGD23DptuHKn1ktHqjH48mPS6z8HRNTpdKd2wKsmhbcMpAJ9gnr5jYoS7q426PrbxAXoSaGwTgxE9CRgLQy",
  "key23": "3shAHBv1xHXqY3rqtcZXHawYW3aPTKSZjKEMm1TModYSZ5xuabRYoZ8xc3Bftyy8gjjwWwXBA5dfbDveUJnorfAK",
  "key24": "fDJmt22b88m9KKLab9u8G52DRduYWz8hUuBBJeXVZZ4Yhv9LyXtUcANMg72kgWkwb1PKj9MYCgtoKPwDqu8Jofo",
  "key25": "5jV4hkxctuhFgbndb1nCcu9hPiRuWBgdgVndETwchUywbqfY6rYQapBVid1DUob5ARR5zghkkqLgKQS76ZgG1pFh",
  "key26": "2KMzb211iKjwEmfqFQAwCqYCUh4mGZpWhy7jmhAMT7boTNgZTPUQSA1RM3LfzCyEYp1MhsBTVXsAV6Y8skYKUUer",
  "key27": "5UvNCknEt5HAY6Duk33jiGrt1UDjnsjf2Nec8f1ph8XJBhPqzTb84arjFtkgCFhTi9NFeE7xycDwosZMP6ZYj1JM",
  "key28": "295FqzusP9gV2fZHyXpTAydVq9YKEyoHXEcqqjo6wZLftJYyEVXjrRaX1sk7rkmrZ3iQi9fb9LZaEvWx57Y8CzzK",
  "key29": "2jENMQmMiNwzG66UFSuf57Njseqgzy4ET1ZsUu4GjMhcmKJtyCcHyyZSN9h4BfbTTkWhTYXyLVoBg5NBXpG31gGc",
  "key30": "5KHVdbjodJaZUSjS3Qbci4miHvkXoGQuBaQyY6tcjjsdYP8Pme2yn2ZxKaCMfBWjU94CGijZLx17XeixSPqch5Vc",
  "key31": "5gntZX8cJ5ixU7QzhUk8zmR7bAn4NHhfMbpXGcZdFu5QHN6DBUveQME7FrnmTmUNzzkgZrHiZ92YooY7XFeGGTcg",
  "key32": "2JHytapRNvLxJijBid8PA9inDnrczB9xmMsezzTuT28VfZGwqfzabiesssg6B5af9bxnemhBpw1q35J8BFKjSZbt",
  "key33": "2CvtKRg8Kv2R4MsEbGqKDBsSerqyPXYNsceGcd4F3MJGrydTpGMo3guqk1t3HmeHBVXN2BSYwZrDFDj9PD4T6AfU",
  "key34": "4w9JF5AKxxiFtq1SC4LvrZqhG9ASKf8dQSfJ19eCkKpQszkL4ZVUfNYypkTDvi4M73gT9S15RAALx9qUUhDWLcc8",
  "key35": "4GpztpBHDiLXtcpWxjU23r19QYLxtT7ea58xtxQvbnJRaKBZGMp8hGBwmSNh2aQT7jLgaYUjigWzmH6vwoRRjrzU",
  "key36": "HBmZ4KrswYjeEoqxcULGfTMpegE1EUu7MRshYWTxYfavWdto82zJFytYRtboWkghQkhruXyCKmDNrES7TeaSpKW"
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
