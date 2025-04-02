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
    "5AkJa5WJ9L7Na5oP4gQ2WMjVbFULjyDYP1CrPR3X3CecqLthyqAgF4wVDLUCH8yDQ8r7Gi44KNnzS69esdo1V1eD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32AZb4w1KpE8ed5N1g6cViRPDNVqb6PjNj3Bat2WYsHTE9spozMoTC7LoJGPBCUyuD7aoyP2sDnADv8equWrP4Jt",
  "key1": "4ivy57iyTYbcfvR2cn6kxqacLMWDC3eZmB9EfMCBRqNu59LANLASqomDaSMjt5q5YBxyoZZheUBayyyxFtNy6oKR",
  "key2": "3MF91U1Ex8UcbA8Wq4t57aT9gzGx53EigohV8heZQA5HsmAdoJUTXEu3gvQG1gKCJMjJXrvm2ZeDt5qSUtXDZs1B",
  "key3": "4jEQnNp3D69A4mWyHEQKNgQgFgC8LYJrkXtaXAh4cWEtakUXRKpfCGQ5mmzqrnutUmNkvkzHSfPCWtWAYN1x8mAx",
  "key4": "cnmcyXMz8KPmdwemfx3nEJMPwDtXT7BvNC7qXnSrXZhBmt9uP8xmyjJbFRpgCgCHzgZ8ZrXWMY1wDvLarAXMyrH",
  "key5": "3rnGjyHHXpgCX6oXX1FF9QSjJv7dfX7GFuKyUDBBkb8CCuac8ZtzHQWBDpR5VLQcZWDBwF9jcFLFnnBWg1hnqs9C",
  "key6": "5mk1i8KU1Y8hfufDsoxUfZp1QEALidbdp6s2B2nyhxKRVYbj1oQoEz7rGvLRUHXn6jHFpphkPMn6a9KMMmygsZK1",
  "key7": "5SGyZPWfJme6nSvppbR7RHbEmfKXSQKmur93waofaKELqNbuHZYNxijcezsMftaDAwrRfnJyjXZzazSDXztuRs2o",
  "key8": "4TA1yiMK5xtg6EQd2KGM3ntHThBx6mcZguRTgggaGLAbnF1tPtJbX7Eofy6Jxfq12w3RFWc6fA3KRjrZVjeVyNBx",
  "key9": "YPxh6kL8dsK2339KFxopYpwK6eW92KmpKyXqoCTuT5DsaFfLxYsrycMypQB14v25szPq6pmpreTqUfeKFhVnz2z",
  "key10": "3pe9AZDuonNmmhZe4Y15NfitWhNmrJzkCikUWnDm2u4XMXrkUi8FpAkMt7g3sUhA3YBXqamRUT8JQbosDoGNodoV",
  "key11": "45u5W4Qz9vjXQrB4rhaMKoufm5BHaSAseDuLeTTU7LohQWfTjL34GNQWyHV8wJmbjbZr12Wsr2Dfv2tutVHR7uKd",
  "key12": "32G5a5ASFSduzWBqKRrDqyxphX6zzH2zWmcRRcjhQDDVq4zGfT2mtknwA9SarfhNsrCdpwPP8JE4dg8W9ixEnJuW",
  "key13": "67LWsSQeHe9tQ19mCEHKsKCw3tCicDHHK5kvv1HhQDhPSpY4vSjLYEPhvPv4kq5VyGb939WH847tgmzrSQQE38WN",
  "key14": "517Nw3UGXhCi49RsSU7ackER6PFTVQitkYfas4fbRrw6qn2otdvrHG8J2TBb9EgrDMvwo9jU1uB1K2dWGuDfgMMa",
  "key15": "5zh9PVemrHhUkeDofh2mjsU7mpRh75uigCPrCPKpR2fNSDofqfbNk6hK2Z6H7rgtxiWArCe1DJWCvuSahRr172qD",
  "key16": "5NU19Bx4jKs7xeLCbMJzj5CVXMQB1igKz7CQ6mTtVWsn5dXT1F99t2iZTY4uu4imY1euyRRUPzsoZ6yDVjYU6sUh",
  "key17": "NFHrMUAza67PdVzawomU96sQVN9Q2h1jFtkWWCLceZBt56yB7zgYUaxf2tM3FCQwfHUTqeJfChcgBF2jfPR63c8",
  "key18": "58hhjFtdkcT64t5CmBrK4rat6kK1wEnivTPqGJSzwN72SGURLef45R5QNS2x7FJLvCF3CYAnDE3zbS4zYHsCDHQR",
  "key19": "3S3fSeDF2aaJweiCGE58NPBd6tNvZF1EMra3Ck7rMqUVPLpWpCza23VXgZB7puvFLcf5hrNYkEiiQnUGHKjQPiby",
  "key20": "3kETyy4kkWaz1xU17P3wsXitS4qutY9P1epphYfdLytaqbAAqVPNcTo9x5m9HkrJsaS6HX7QCHgkWfK9Ec6t1kge",
  "key21": "AoqtdzEhp4hKHVYfbKroxAfkbDLuretS8JwXUnTjxjStoR6Rhe7tmYFuaLT5wkc1Bm8wpgEaNoVHHrYKZygoDcf",
  "key22": "2mYbfM8BHGmuxXF3bS8JJqszGDDHRxJ616uBgBHwAcpDexB9nai2KfoN3THzzVqDoGhX9iyNSUvHuHeJAQgPM9s8",
  "key23": "4fJhGwVDg67JREKQVbojmj5mVFT79UFZkAeJ379XHXJapsDikLVBSrRtVLGq8LdkYqM14Ho7cRwvpwQgHt6FyD5C",
  "key24": "ERoowE3zFzbQPT5JY7mWrdGqPQgnRzKziAw9mfAaTByJE5GEbUVrgQZ9zCTtysUd5h9ftZoqDaUWLQg2FfM8jXB"
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
