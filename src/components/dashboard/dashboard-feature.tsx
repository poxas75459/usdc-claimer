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
    "4Kx3ohCN68Di79PAxuU8vGrvUbZ1N3rxwzVTipzD1EEZY5RVF7CnECtULyYsp37j2vU6dVJDUkwqRMdbBDZ4A2a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yMtpTLzkcaX3wwexaz4wU7Un5JYerBWPfpSa1Abcq435CePW6RBpbcYYSknsG4r8MJWwegt56AeWCHrP6AMo5S2",
  "key1": "5UduQv5GiZEWDixjkQ2MPdwcT4hRWHDvoqLvipMTfXVi2J3sgYn6rejbF1dyRSPA8QyzLsxSNLXEUjqfsAhstJay",
  "key2": "zKF8DRxiBkub9FydBfsGpyrku2yH6vXugepjE8Fb3q1FyKz6TfF7fosHUcbUzS2amaQNVKLCrHVBtD8S8wEQLrd",
  "key3": "5uzkWjnkLGWCu2Wo4skRpcoVjQyfJ5AKmbwHzcerwifPSAK9HDBsPBf44LZFzuWKjAucThUSqKoU1Do6SQVQ68W2",
  "key4": "45xXXxzSunNZAwRUzEgEzxnsYDKv14R1mVD6SWyPZuzQLZp2PVLopwCbrf6ckmh6DttSk2dEYJYA8mNdMBBEamA5",
  "key5": "3maSbL4HbhEyV9cMiHHQtTZNzCcnsbpF9hEhsbdEooCLU2qJiNPxd3xRj8Nxd6LhbUcvx9hbbJJtwD6uDzitrnu2",
  "key6": "Mn9kF89j6jdY9D48cDqikfd41m6qBFfSMY6fb8Wm2ijxxm5DHwebQscDdSC1ELQRQnLxXHd7D22sQGhq3cNbWcw",
  "key7": "4EszkgXg3jNtQDwKJM8NLxfYaaKFdi5XCCrJ834HUT3vkpv9wmLTyAvmq6NAKuq9xbbPbCMbrUpe4LFZUrURPNaF",
  "key8": "5PxqbGYHYkaBGRs7RUCtuxtB4q8tvVyUzPUrTQ5MmZ5ecAi5WT8mWPBhgU6rsdGWVnyiRNoRfqvXkgdVn1JbBpAr",
  "key9": "5HEUVbXhbwvHZq4b32icaNyzpuBD23mCun5h9CNcR2B7HW8HnZdfjDywdSvdV2Qcfh7dqBijK2BtSdajAHthTMk5",
  "key10": "3KTkw2uvMKqukr5H9v14Z6npmA4Riyw6qZb8SFjV2MdaAtzXUvbdKwTimpP92M1jW4x3oJ9k5AK6dwiWUPnNJtZm",
  "key11": "3h2mfSHQfMDfPZDzhUFreuDfLG32CzfGobtPRZgnSFth4W4TZGY2KtzvNUr9Dc4RU7Jhf9p2pRpvr6RX7h6263Nw",
  "key12": "35QboeSrMfpwqrWef3FATCNF8bJ1pvXNP8SZmSH56nFYKhcFQKSHqNWhmAGa9VN5JaYQNtrQCYpazqM8kSoebovq",
  "key13": "4DgyvjdNKRvoL173stXnsGqCbe75LsEC5UNkdLdEPgZT6WLx7H18z3VwNZeuHa5RqNB6dd7NMdakMc6GJpiov1me",
  "key14": "3YbGVDVPW8PsjpjESgjKWAJFjHrqf8Ggm98fSo8j84q8yJJ9rPbxGSYb2TY19c9gvCJzRszDkgCYzEHGGFnnc4W6",
  "key15": "35pGQMtpzVqFA8Up8sStpZWt5g269gA44CupFZjYiWYVmwvCP6yekn9P4H9bbdsTwSTurBCUijRQzKahvvJGkq41",
  "key16": "5dvPuQ2ymPGMhns9XDGkAszi5qUUWNtuVK9VQEjfdfRCagPXcwP4LePskdaM3ZU62vdHyBTzxbGfCX9pL6SXXtdb",
  "key17": "4YSBcW7cgjajC19zginsBJhPH6zDgi39wZbwZRmfWrpYPbE54J9HNJykTCy4ToA2m39zUYYahAmngYfpbqPgf3XH",
  "key18": "33ToAsLSoKurZ81iae6hCtb2vyEZbRdCtxq4vwZ7Yy8gVHf2G5v1JD5vCHHY3HnXXchFwLF8DvGFAEmBv8oJbtUR",
  "key19": "2JhP347X8bVpSiCWEf9wJxT3r4CBeMJEGY6QBRLGJsqrTVZRd9Kmu3H9AQFNc7UrNenw5FQRTThs1kbLeThW2bvW",
  "key20": "5ig64AvRkRTTa9hKHQsyd8GNH8pzs9n9a97X9vXH7ZkUA7mmkWjviACS9w1Hc8pnooGpC1x3ddY96tBaVwCXxeeR",
  "key21": "2XaMkDyKZkPnUCquTDqnpGiLWEtbHxH4SB1R8rkSBoFNxP3P7kPXN92Psbyfmy1Ux3LNWfTJ8n9CddfkYQ9aZL1d",
  "key22": "c7B1pzerE3o5voA9T8sFabfTsLwN3KJ3nFRtSXNaddz2Fkp6oPWr5HUrv1VGf4EQESgLLT37JDjr8QGB8EoWQgd",
  "key23": "3nKacc5NeeUGyEjaedNH5P96HH9vWeaAd22QHxc5ZSf6fCwHcBngtSyfcGXLWc5tXeUoEWThyaM8EDaNFmPLzuby",
  "key24": "44jy8vLXhyia2Axcm1PFh5SAoyWDYfjpxPkTt6Sy6tiqv1JNRDFF5VF6PqVJLgi81QTvXRd3GFrRhpkDTgavrfHE",
  "key25": "PQZm5sAAxJgDc2wLBeExVqpDm72cLSVeeVv9hnUj9uPW5EqPmXdktFLDEG5bgykxo7rKJAsAFn9KLABDEE6Pzv6",
  "key26": "4MNtaQ81J7vFXfcB6mic6PqNx3yWkhqhg5NPGXEUScnpBQBowrL6PGYFvScF1QEJed2ZbeeMsK6utegQfF1MnmQa",
  "key27": "4zs44yHq7fqKLp5tAWk4rJc2xyNx6BpdwMfqTK2ustjpcBwk2P1NYrrsqvb6XsvWCD8zYW3p6kiQNcoHt1yWMSUP",
  "key28": "5yjSLoctG1gMM4Z3jLWcKNFoMDCuLJYZEU8HuXxsfoViMExbgTY2SJFUQmj79W7WJjqsH5KwoFHLEhcTkGJNgQWa",
  "key29": "5XCKrHAkHuCPF8H5MA4jAn9anebG9zXzV6ZNbeU2DZoYhnwexeeRES7xW2bWYu5znYEG1Easqtb45PxPStXpcRC6",
  "key30": "57o9qX1BkJYPFERyn9vcg8MQSPHb7SRx3wpHs9WdFitedvjYNGXMdqkPjTMVS39m1SX68QV1rb9kk47CkKHtzn89",
  "key31": "2G1KqamxuKYMitURkxyBfx8zXsuDyVptTWYJcqotW8L74dyhBNV5EdkQDyesqUkSXAPHt5iemrz8UiBxhQuSgxK1",
  "key32": "5zEpF2424nKMR4DuGyURWpGqSgMys84G2DiL9411dJXQsszdngiM3QmGUS8PLxizKHhzD91qP6ioDAY7tb8WpRnP",
  "key33": "58qmdAdavU5RqoexnWQo7ooB6kwYynzAxM3PZkEggcrL9zipWcK11GUZUyFWu2Ue1ru22SEzeeme2j77CNquBiAQ",
  "key34": "3EckxtdYyZ8s2xiw85V2k9FEDR3myahEQ9N5MpyUJXboFbcQYkzLJPXBC9YGwcp5SJvFmkTvc4vx7BH9YcdvSZWd",
  "key35": "28Ebg3o52uuQfiKTE7EAKWyjAALhkKCjN7wYKDeLjDLGcAEZqRv9ZjuhtGm993JVkFPaFLSioNKnxsjL7XXkpeiT",
  "key36": "jxtJhR4cQSN9mocnpLs28BsLkkHgJYBCDbUdyXdM9XY3jnKSeRkUKQXXMojg54wo1hSJ1pCme6XCrHs2VffkUpx",
  "key37": "3YsTN5PaA3qBHUZZBNMmCpvM54qTRPeDaeVxWBuhhLrjfHV2b7nvxKRfjuqua2bteg6uMJGA4uFM5NvdYC4U6Sqn"
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
