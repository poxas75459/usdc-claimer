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
    "3kJhGLmjtV8YCkP8CFdXwj71jBzCH6zWdPQt529BFbbP8JgANa9HaLQEPTqEZ4FGGYT573LVyhStswCTVR1naGU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfSVV9e3UHGnC9TRmzoZaaweCmoEhhk7zymWgw5YX4HBozMLtLBzFDBvr1iTK4ZkuKEKcPd1MmEEUs7ks7XxA4P",
  "key1": "5L4Gje8cMBwgAEnLp1L1XzJ49x3vEg1oWhopnT5fH8Uo3VvF9yfU9UMrVKG6a45wnEBkgQCX7CFJ1YmjimccKABH",
  "key2": "3j2hpj6kJHiFxmmcGivU1BSW23iggRnehZsZRiB1az5G9vY4ozfMrPcDGtxPPEqUK2wY7iZE2MDCAELBDnwnhP3x",
  "key3": "2aCagyWWHUYGbrddr5vDMQ9QpLK2TUQ92VosdrCwk49kVYLJyUN8Uw32JdeQ77fDFJXK9hLiTeWidjEfYbbR8tSN",
  "key4": "3ozjCgr5YPQ58rrQ2ZdZyt3wnpXwnry5QCmFSqtnRjxG6Dgz2FYq2QKNL7AtQG9ztmga8X9315VHjSsAk3yecSC",
  "key5": "3f7qFvDuUUgbFTGkoNJK7s6aJLjnh6ejQk66on2fVTJmKp2LSyKxedZqSy7HAafsyE3XTYuJy5hjguNDVhvkZXyc",
  "key6": "zd8YSDfVUWkcqVjQfuWNiNT3RqPLM7fzMFEMHt4uPNjzgBLXjWojse4tcncjU3sLjxt9SbBvFq9cGWRYGbt3NmD",
  "key7": "2DCZpHp5AtAYL2vMPrPL8wgRP3dVfCHT7ukFKq3MP67zMP6StSijmbpvqV1dM72HRH2xSsW6BcGhiJBsd1KmzcZE",
  "key8": "59tRjkwiA1nkHXrw7Hgvhua22vA7YpC2jS8i5FAx3N3H9WWUzUKhpHr7gigay81U2pAnXuTJfdqBWLd4WNV2WUyh",
  "key9": "3SzPvtT5LawFwygJNxAWCuWrJzC4y8Z39Q2Xx6Wgt4tEAchjeaxG3F4vE94ffyfiuzY7oNYgkjpxTaD9ZimaKJ1V",
  "key10": "AZe1sBoUDDQCPoBidvqfGZPH16W1fUc5qW6sRfdTMmLZXYsQ1EPCfnPkasuArSBdMFKt7uPTvAAc9hg2UByq5Gz",
  "key11": "5UgDDPiniyhrFRwnzx6VErPhfkehSjvq8HjqHKquPASfx7DdiTBwYchYeUhtuopfoChPsgm92vyeWccvXgSpQiJY",
  "key12": "3AmVqaLLzEuNuv7KifmYjkHmSNVxK8oJdda6qUwLQb5fsQMyc8yHQN7GdtWPwSkF3TxXSaiqhMxpB5NomYZZuKzC",
  "key13": "39osiYABDYfMRxhuhSjWu7bqw3iG1AZLUMiWogryGughMJgRWNj11Sywc7GrNduvzv3Zgm7DU4YdmyTF3XXkqE3F",
  "key14": "eT2uPXhC3u9XUpesZ1qwTMoN4Ed5voBFUdB4VvEdQLBuX2ztPW9SrSeASHDTyD6CWi2ZbDxQyrJjok5x3nvzyBh",
  "key15": "5wsPXwVFsCom4maSMP3uQyuFM4YBvHGnktsSGKo8QgQ5e5wcCc1yWdyQb8gWEnooA6qEibTgNsDDKacRyPhTmhQT",
  "key16": "3cajQAWvKEcttpp5rnrNKncosqYhSW5fqLeEHHiDMc9GdP2QNZ2cLiUP2kdvbNBoBLRjc8vncQjHKBhkd4hqowfd",
  "key17": "3BgkmVCLYUoETrBa8T17SS89fMrT5phXsv2bQ1ecjjD5kezYBrp8eAKrGr4hp2urPk88bTo4eLzdJpaDSJZPd9tt",
  "key18": "56eUYWysuY9KADv3hrGwsCYpULCEZGeP1cFr1hW9p91AxxEZiqwRCE1ASe2F4YRwYNJx3n96ca3Lv1eiNN76K3JS",
  "key19": "21e36UbdfqwVvF49ZVcVej1MpgvwK3Z9SWYi9cqkRFiQGvb4wjPvZS9aQ2NZi7WwLyAXAvd1yneZkHxAxNxmosuK",
  "key20": "5MigJv6PSc8ptcjptFmAsS7ctLYEQ43hC2iibvHv6ciz7qDShmiYFmygkEMsLFrFjY8gVvxAbekvq7g4BwW644yg",
  "key21": "66rvSjv19nGj1CtwMPce1pkn8uZGyYiuZYaFWfwssjeNmnUPyEYQhg6voXG5joBk1YSXtqB7hzLk41Jm2XpQhLjJ",
  "key22": "4cNCTskgEYxhnZa9Y3Tetmfyg8TEcKA6wY5gXpRcpA7aPBaqiDE5p88ExfWJW48D5yt7Y5FF69YkeRMyXJ8EGnuJ",
  "key23": "CGYDq9rz6iTJDsqyYWWEKsXtWMKugK7D6LRV4eAnW7XjgpJ1WUL2fXbqQTjrTrpd2oS8Pkg4pwdRgfXec9iP5eo",
  "key24": "5pstXWhD1eHwwweopDuKnytQe1xkSwdEHqDPZrdNTHQUXTwhGvbygBkUAVD2zxPMn6GcmaahBaTfnKtpnA9gfjuc",
  "key25": "L2GLLa2VGsXK5yBYZtWuBYN9GQ7Hw3ugXmJ9JuT4kSz7S8LMeVsAVAyZdtfF1WzmTaLVrx1qrUK9Vz2KLMHrYDq",
  "key26": "6NYRLSRyizbyha2NY7FMaw5dEVnmStbrn9JneUMnypsVsu5Er4ao5zDLtCunLo9bsZtNhpRyqjFdPNHxDfvggzG"
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
