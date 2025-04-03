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
    "23uVAQpPVc85aCqrpPsFaP6G7sBXMNh7vdXYrWcPiB3oQrcnFKQinoZPS1fVnVT7LTvBtYKuQtmEjG7payueywdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VTpfo2s9Brdoh1qmPSmeJwUuKSirDpSnEVKrobjsPLKayEhfLPar4ja6FgnBnovgMqqx5Kq1SyALW9THgCs9HRX",
  "key1": "42E2kpsNBN6hADWxVdC75D2fM7mT8ja9MxGPBkqPqVSp6ZVyJVzqqT5gsUayQnLTefgdSanUp8xveUPreQ6dG16J",
  "key2": "4Z6yszfQTaDH6CP3c9hrYnDxvC1FBANVcCDSMq3ec3HuSr3gg2YMzSV4Jiy2j8kTwmzHCBDhxA1h4Zzb5FiDi8vW",
  "key3": "4qmRfWxXvPVG9PsF76CUwfZLYAJFg86FCjNQvdFJ8zwvvpHyLoy9k553QLuscmokmuj8L2pJpo3yjLyewqPL5LqZ",
  "key4": "2GPjtGufoaUVyid2ptGivvEKQWhJ1GiCoHDu4WA7U9LBcx9yNGt2cFcXBkiY8tEyRwfwFxQN65NBmh67EFcg3Rwo",
  "key5": "542uTvftDYhVaqCXHNHvoi6TacV9NowhcqiAEPsojHomSFwF4G9raD1NZXcQnF6t6B9DvyK2EeZRnMN8oBDBWLau",
  "key6": "5RiwDMLjq5BmgzXwrthvmBtVK5tqadHynHaSfvJKXzuuL6vpf2LEMof9uwoCK4L86ugtiQtmnSTdFVMmHjk4imcB",
  "key7": "284CD4zVo9y2PUNbjuBvr8ssdN5hwCtSSvQ3vJYg6JgxwyHs4S5XsTbW2NTowoXme2FudtLRFZsKPHK5gt89JAcX",
  "key8": "5UzbuEegZD7QXLwgBdWFFET94ezmefSHisJsTr2ubGirbgF1GTMrKbmQiGWg7pvvMzccw1nY39959PXFxMJJ7pE3",
  "key9": "5JGFGZkXd7etdvQmWgRBvpQrPvCbmMzQy3PQ41xNDEcoQrjfeML4DePrs3Aficqi6c5hvd4PGseKiopmV3ZbPtaL",
  "key10": "5eEQAhMbpBktUXwxa6H8dmkMjyjzo7FH45tdLEZkGc7MxyGW7XYj5jiJ14fjr1qDwQ9TMd7JAXkEn9QmVWUfUZDG",
  "key11": "57qTUgaQzmNMwHs1oaAsfRHBYQDdK1VUVbG7a8gw2LZr7GdkSDqBSACUpQvZam7F2QhVM9wqGWcnBDGPxEfWZN7u",
  "key12": "2AQvRzuErN8CxYh3bHNVLK4KtPq6Unywvwzd3BbFDYZigMZK6TxdXWEaof2YCbajpZ8qTu4fkmgy7F4TVUQmxyaA",
  "key13": "3JKcAkeQ7TsgWgHj3yPwoEbkd7BQzFgYGGM4a2mEQ6b4ZctMShT31UCyK2dRo2AdD4fnekSvNGnRCAcQf7kbsyXn",
  "key14": "2PAz1cdvmZGpKNtobjUGfNK3mF8vj2TrH642fEkN9JVCfWfFrZjpnyapWKjUTF5hVP1FFQYoYMjCmypXUrRqF7eC",
  "key15": "24qUM8HnACaGMfYMbqLQeTkW57fVszhPnX7DriZSX6x6S2BGTsgFbkrUVkZKBsmFsJneBPoiBfCX79tvdFD2cQdA",
  "key16": "2zcJw5oqev2N3rkAsiZzy4nnfkptRmBqMMaQvPp7MYRmvZC9zn6mVmizf399dgKfaM3U9eMJKs2XqQqzwp14phyo",
  "key17": "4k5dQKmmq8VsN4Cox6NDs57UPo8W2no4QNJ4wudVV5gzGuz45d5Zwoszkf1WCxfaMuJsfc5XWWnag6ugsb3DHDBq",
  "key18": "4dK4RB1eZqCvmTJiN5pwTEmJr5RxWYEaSA7rnBZ67ixiQKfHLnznomV169qU31JhXLqit1DiFeh853hPeXMzP6gq",
  "key19": "4zQzrhr1meXas4ADz2y23tTdQK1Feenqu6Rzc9AMgGS1Y6882XwHHzYaixTyjFhoaAxtmuAgNuwvJRWHkSRCGz95",
  "key20": "2yVGEz3oA86PmD3hZMyU1LGcRdm9YirmNhMsYrmuNesZ5SAY3eUwT9iKv4EWTFzoN1ZpByVJfn9u2gD9QBJvNwoa",
  "key21": "66ZN5KQtymGJfKS4K5AgG7Qn8ZiY6zSm334uXHWXBJLNzS3ncCL6HLoo26JQBAkb5MEvd9hTsabbET11gchvyBxb",
  "key22": "4RS3WYmXHai4V5yYSYrDfNEtyfb6MmPsBb8hAvZjr3Nh3wp58SmQ5b4nMb24XW2LohXoK6SZSgn5GgQkbfM4u35j",
  "key23": "4n2Q7tf6LCqjqZx4EFQZVvWGmS2sfzhMX98KUC2VmHVZK7urFvcbzw1svvdSH63wPeTgUNHNfch1VjtywHDZhh6R",
  "key24": "4SNYUjznZcr8kpE6SPWtCSqryBkF9xDAagcpHxA6612nURCrUmHdksJjQSbzJJNtWzAP3AmnC1cwd9nP3dJDf5Hw",
  "key25": "36rgS8bF7Jdov2uYdKmDtY5vi1fLEtuYyXnPnRF8QKSqVP7cp9EjTcTKBMNt3nT5ihehfmtZBoM3Z4B4RMaDSe78",
  "key26": "4CYWfXwejfMP4ESJ632dePaKb5qWL34BGhWpn7zyW6f9nESz42YjRTdMNgYF1RYMwK3Q3tStnZbCMRUGWoh3NndZ",
  "key27": "5vtxHbDMbEM3DEH5FAEpQjypKzTyVb8GheSYGiGaHzqZrcznZLKu5cWshDVa3LxeMHwjMpEw55zcdk8wZe4jMVrY",
  "key28": "4M2zUzzmyXGAgrzqjktgL8oumTGAt6afrPUTTg9Zz7GAvRPq5qemkxipJ13Bh88QvHptGAcgH3pB4aDTr3BzqpB6",
  "key29": "4hQ4vmjfsJ6N2oYsXqRCEeQSU3HLDnkKFdNDFF1NgNQ1VUFSLBSPZwvwp5zZrVLcuqvk5Ynp2thwkuvQFL5dpYb3",
  "key30": "4xkXJrdSh9FCCrKtqcoVYNdmYysuNtzyBVYjqJwGid8rLtyHL5SKdVgcQVYYC4iVcUL4BTS42GeHgYbPLJb2Mc15",
  "key31": "4hXvfWHSVeTKhtLAkT29ZfWrNcQVj13sfpzgKD4vCZv73DV4zzfWS4CUTiHsagAGSywtJYu3vBKskKFCQXreUUra",
  "key32": "3grkPNmdgkF4i3y2R3BsdZdm6ycDNAo2xP8uXXbABjeqMmispTbrdFTKhmwsw9xqa25No6YeHTswiND8DKJWjd6b",
  "key33": "3NMvGorMSWFnJRuznNHit6xXMut9mQngGniJHd2y72S6mgKzGLV4ohW2BTic2zAmzTZDsjTM8KhtSyx9rEAQk48t",
  "key34": "4HdVsxdqWBuYJfVpdB2LfPbGjDvYCeTeUr5GF5RTPmZ8Hh5Lk3mBqV4V3JRRHDbrgyoVLFygQBppQn6pjYzQqAaS",
  "key35": "2b2pRdSWPJd1rt21YbCSivXG2q4MJQDkPLqvqu9ibdbWo1bPWx365crKM6MRBbVwH6SkisK1XT6PtpDDe2ioLRSx",
  "key36": "2FSKMvuLQ9piSHgEGeHPCQPNTft5zjn8pY5xFpUVmtYk3x4B15eSTrResS76WBa3hQMCBZiYNeQZW8y7BxuBXC7Q",
  "key37": "2Hpwbt7LKi1CgueMrnCHmPWw641E3Z6CDdvHp7sr7zQRt9bZEBvPzUDKrFiitnQ6Jf9MSJt3Ht67fPT6e3AGpDgk",
  "key38": "4rELKsz2rBomWVR1GfwzLdtkggfFBaNeicoDNSXQyQtyd11HRxdJS7Yz5fT4Zpc2ze54vhw6DBXvXiNf1w8dkrUG",
  "key39": "35CXswKXLnUNjY6rwHySHAqSzgccST7yuAWApsHMbaDfTye36vYq52S97vA6onauF7A3PUBexMLAWCr8XuJdnfHs",
  "key40": "rYEctqURkqyYSjVyibdDkpyTWLMAPuFoSRD1ZnWtdzGHQkUpj48m6ZEeihgGgbTN3HCtSQKQuhda2noZYaqvAun",
  "key41": "3zS4i2xDZCUoboUbQbbtS1FekwFC4Em4MmZhLcc7tHz6Z72bJmbGmihwZaqK5EteNpQCRktEhTc5MxNs4hsevac5",
  "key42": "3GktExprAUgZ8bukt7idgabMrmNvhbcJRZaQvcUh836r3D7AhLiRgE5GqWjbTvAHg6zfRvyQtCB1eneLwcuaVbSJ",
  "key43": "3RLf9VPkHTJqgNuicGF84SNnmWbi7wpCt7Tfx2nno6E94cGmTEnG4VAzE7aDzNSxhyPvatHFxAoRkYUP937chQeh",
  "key44": "3PjdPtY21g6SwfHfVV7ADUVdhRt12B9exvLppiDxbXqSkoVBHWTfoMwXjpvGUDWssxnzqnGUANu1mvAK6T7nMZsa",
  "key45": "5GzKmQPmxu9RPVZB55ccabME35GW89DANtGDVryTe6AmiAehsrmfvtSHrJVogc1yCpZLpA8YbmnR5zYhp5kXSVGt",
  "key46": "54owbzTXF3hZfNjSvbRhHYe6UY9GMrmHPhsSuPqJyEM3YPuj7KYjjgf3p69QdPk5Eexfr96FWXQKCPSMn7PbaNtc",
  "key47": "5r8FTMmySocDmRp3LVoByLHc27pBhLw12TgewXtdrZ3JBZcW294cbebiV35po2wKmVGuxS48HU6N5Juh3L6fk8Ce",
  "key48": "4TupqUF7k9F4zE9K35CKk7CGAVTH8Muk3YR8H9K3gqKp33Eqwaopk8qmysw97LZRzshsrPdwQ5w1F3fNCGDKS2CX",
  "key49": "9uX6MeMqd6xTh3nzNEAngHNrtTrTAHwiwUw58D8x8BqmUagLpWMT6tvp8H134mqYiFDfW3e2dm5EQSPHWkW3RoN"
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
