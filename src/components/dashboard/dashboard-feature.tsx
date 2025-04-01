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
    "2QqaRmnjA3mWZ6KUx6rJ2NrNmvrgRxzvEJwzdnzmHqRCxQ6q975XK4UQ56ZvZT1uqGteAEp8qr6H1JHkLLf3t7sY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o7cqVswVgnJVtJH2ws9uNNL54hCxvonsrcbJYpFTPg5TfsyhvnPwm7iymHjt75AyoZmF7rTJYwg57HHHUEwrfpu",
  "key1": "67iF7Db2xMKmZMiWMza7vqXiBGtmceqkg5Nd9DfKcSFjQuiHeLL4frszBJkPiPT69Zq57i3L4rFWo7qS98MwsrM3",
  "key2": "3eH37R1bgJddeuEVhGnqDUFLbmpGYTXdrroNFa1uM7zp7twag1sDedfLGCfs98Qb9LhHy3FJe3ARX1AAEcVkupkL",
  "key3": "qG3Kf1Tvg65n8SthSgcAZcRz1VCeRrvyg8GheYPNasf7SU7Wb8bg8pZUB2V1fzZF2YBXw2B2PFBnGXyHEgDXvoX",
  "key4": "514VMtY1AQ3oEYYRLFLaPvDs97CgA1rDa9kSKWpmytHXkzjJfzJYQzYsE7Hm6GzVqzx5mKPdeDFUpw9P6Fp8XfZ6",
  "key5": "2crcR9UerC5DvFSFvdmjLfreVA3bMYy3mKPAMVctvgyVHvxbJBKzADbDRwBwNqJmcmviZ6XexShGJxZmhDifDXPb",
  "key6": "3NPbSqMnnoMNvdEuH148DzLfwNMhsxgJKzcdrw5EmNAuLjpiNsdvV9eZ6KBk4ehHqrqFqCt1QPpwHU1nhrgvcVV",
  "key7": "KtiMvq1eoLWY5oAvHCu8ySYGPLYrDmb1iL27mT4m3byKboi5r3LTJuQShQdmzaJTEq6Z8G2MdWJ1EywrQoVbeH7",
  "key8": "4qewrczG84fe2aJirakcW82m46zc5SQNTNBQJSrtKFmnJnEKVPxM9uYGnVocG5NmE9JHNNqTxPBshCHbiQ8wcpHy",
  "key9": "3sbYP8WJu5xjwNLZFRVrQkkVSTpcE8K6UeMNF6XnzfAq9oCkiSsXgxoJDJsgfpuoWsbSvau6niC6HgM8nuY61MK9",
  "key10": "zwHDGrvyzg53beiuycpikzQmhjU8jEmkDE7VKi3o7ATSVco9LCZ3wRNGzN8egTaFUERPR6GsxcSDdfDtFtFZtSu",
  "key11": "4MFyTM2BA9TABFndpkQLFU1BmMMJSniw44HjQathPQmq2ce1W2sa4h7NT8PoqinS3djYziebK97HvuXuxE7LY4dp",
  "key12": "5pR1CW7huWUc13uLu8ksDkxq11vR2rsAN2XTBzZNrPEruMRJZoknNkMPTtnFNAdL6AbcU2KFmijgtXnA2dD9mACw",
  "key13": "wWjRG692UondQZNQJfqfoqBaXQHU2SqMWceVtN8P7Hq47CzdR9y9aCy24pawaVYXY8P8UBez4p3LE9Xag27jH3Q",
  "key14": "5kv8w3GyUNUmzx2crftHR3Ao6djZW6R7LhC3JzsLKmPydoPBzqQFQYuAVLwCtKDTbTtKDC9ydYz4k297MnT6RhsR",
  "key15": "kRzZnkDoqvQMwFtYpk4rYWhCqaZqXo2uoa3eo3DSev5msJCXqjWib4aEn9iNomBDoW2YmSi8kFNM2aSjJsgDWCW",
  "key16": "Ht6CbCSxWtcwNNyPt4CLRaoCvZWpG3ZUkTS7PqaAbEnS8abb2QfKgpru7eEJV3jSqfHhU43T6uZREZsBGt4ij9A",
  "key17": "51Yhx8vmAXTsiBxzr4sdaa8UhpLfSkH5DQ4xaVZwYqd75vaTRE3VBttwjCUm25jpETQaFVvkKzMBPbXYzVojdY9U",
  "key18": "5HimQVAsw8NLVe4rY58NUWVGv2hNNhop1uodad27XcyWhfWa5LkQjDUu39HgNvFg73NZNRy4uHZ9KRi3LWvHwMUA",
  "key19": "Sn2TZMBuJFiizRzASeHrBHYveriKGBFMkAkdoT8PMrpWcWSphUkxPfDmUmFVwit2i8JG42BxGk2s7bWijXYQccH",
  "key20": "WgbSDttr2txxMDZRTxKcQF5xX6LMtCaoWHvLmC1NU72WwXuZ6BMUKkJpiyDukw4aWuTtcMoG2KNMrgZhjA9JLzA",
  "key21": "2Zn3k9taBtwfAHJzRuKBeCDMheVrx3KSJPQit5k7S3bSAWBgRxNjJm35YgA1jvuuhvXoJQ5EHax3NTX1SkcxwAJy",
  "key22": "5si7yRSZk8NSXEt39o7fsqj52Ee9ztYDinfbkGod8XEpBzxpkCgQY4eSzZiwfhbwgwDtHqQxYRAYs4n1bnw6S3T9",
  "key23": "3pNW9mdGyeZtfmyLN9hjhzTuE6SGKQvw1Ap3wZtX7LG6KZwxqaB7UrSK7iWgXV9yHR1UsD7H1yDwqPyK42iGD282",
  "key24": "4YtnynhDNPcDFHp1LdM4ffDtvB4WETmnG3Vhw1R7CthSSW5xrEy6DkWQY6YsKcsWvQkBuf16H6JBumerMVZ8UbVW",
  "key25": "2FuB3rcxJAiETHRwd7WD9txcXqMsYQTgeGKc7uYPehjxgM5qyUhAZJEySiyx55nzwuwXSxW29VYRFir93BPRu2Kt",
  "key26": "4iweh89MH3YAMdWYLxFwALLUu53ZmYF48vpUqyCh5pKzjFfwUKw23Pz81Mya21wxVRp9mw5xY9MwPTYtGovm7Pms",
  "key27": "48kTJgKu7jgaYvL5TfgLQWvUG21Qc1ruiwfhJHVJ37xS4Gihr6Ct47fiq6UbzSBh3WnBX15ZHQURe9r6HudNA9YN",
  "key28": "5AJBgUYYH7YPViU1LB7vu6DzFyRHpA2Bsut6LbySgdeWxVSra8AfokefyDKFndBgGDoa2HWpYqLXMcYyT8M78YLH",
  "key29": "2v772yNXxYqG35VjXv8tY7MyNTHGTUPCQwR85m2KaSSw1EPv6ZBaFqWAWtuEqeuE5YfnTuCuKbBUgqTjEoLR4iUC",
  "key30": "5aHSarWD6n1VXd9YNtPLrGLLp9cTsj7Hj32aPt3XHedaBVuTRgQazLXpTLowPJw6jx1gXGE6pp64ZimsBNqCcwUo",
  "key31": "WZxhUqiTrwnJjbCxEeRFwckvy4CZZHNCYppfHP1ra4TUgDRGwJfJv4pandgfAtYHWkP1KxyDGyxFy26gaHqKbTh"
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
