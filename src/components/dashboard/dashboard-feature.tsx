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
    "2cf97H37TjE2xCgN2hJxFJb86CSGH2V6y7g84J7PycC32EckNsRV9hCgMhToUBkBK4hB5DbQ7iGLXnDsUBfnRvux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kCuzcVy1wD9eLmaTVWnQvhnKbp449apy5Qz489Fp1bTXN2Ayyu8t4ANpn7sNfuF3yeFDNP1QYMSUF5AqgBTK2F",
  "key1": "4sdtbtxSVqsjWd52YtwPo7yD5eYJtbCXmQwpYKo3NJHXZkVJ9zUK86aR4gtVc4azbuFr9P1rtx4RfumxY8GaVvYn",
  "key2": "2x8AvsGsgJixvfukgws6x2zSiJE4YmTJprRddCaZE7cVWpEDBMX87dvkaurjmD4Wzs7ooGNuwMkqZ2HwuZZdy95S",
  "key3": "48K4izJmFCiedybx3L61rcres2xzxV4H6mo9yzYa5Y5Sh6r7RFHWUjnr6ANW3BTUcZXYBUFvVbn4vWxY7eTwbWC1",
  "key4": "4KPXthgUtXZDvcc3Up9H2e3kk714JHELNkb9cbLgKxLGw6knFhuyeR6CJivSHdVhyoi2sCTWWPUBgznpfzvdUhde",
  "key5": "5GY6dZjjhUcJj2KF49QxAzToSfygAWzimPgnjNHp1ab2fNJ7rEgrW2C8UYZQAdEUpGZLwzQ7e9ywAPfLi8Q9gG2Q",
  "key6": "5t2KHn16uftAhD6nsqbA25jq5vGyxu9p4TLEJtARBhzD8KavRu8T8hE4vT3PmxsSEBMceTE8B3YPSrLP4tftBuy3",
  "key7": "BqMfRcjfLnGJzLC3wBQXQnac3xKzH42M5J9hMx1BugoXAQcnEvYbKLre5PKpAg6Let3u9TH4e1HXrnW6S2pxb4P",
  "key8": "3dbxx6MPdazUF7tEyUnobAVXeX6nqFJupqsdtvNqctEEeH2oiFyTaX64EpTfs63i6QNVqrnuaCKGvrpo9EGaL8hd",
  "key9": "5C58gHRQaLFhKtp7q6qbeBRBkDtiG9chtxYtyKGS5jmNqC6wJZ5F6o4C85rExwbBTWdt3w33v6j7LRnbKzipBd97",
  "key10": "2jyZCbBLPszunN3Hj4Cv6Ugjf676q1BrYGGYm3LqNbhd8wSfh8dYyknWLaGkfHp14WtNnsGceZgLoSvCXUJqpqfZ",
  "key11": "5pwrUip3z4WneK6r6wMAZGHzjtCP6tkrKz4nJded7nDwnzUUB78VVJnzeskTiw4DVBaD9TA4uv59TVh4FC31PkcE",
  "key12": "2J8heGFJhjdzKsZUYRdGTwYvSvLxviuUhd2Gx52AmVca2Hw6d7UiytZAK9KBuYdW23xgnJusPEgqjhYNPyMVxT9e",
  "key13": "4WKwmtwNEERbj4GE9D4jWAvCo7VqCEoy2t6j3PWpi5WeLCtD1yrPb5tLov6YjdZSF9AfLwCMpjbpuaGMxFY2jRsr",
  "key14": "qqkqYt7Gzn49p7TsGUHovy6gyXMeMxjjt1BwVBZFN6Ak6tdfYHwtNKDyGWpppa7oSu9rW2yQj9ivzy45Ac82r9y",
  "key15": "5hiMNkUihhdib1UxwEKgBuYJvyyCDWCsyEnThTSzdTPKW5hbCDnxThjxaXRZ9DiDPukasD1QgWgRvNN5VyH2msWp",
  "key16": "2mFszGGN7zBMcX3Yh1iorWivmgfZ2Sp194rvYNvG7uQM2kvSXZwGw7E7NBzmJykVeReZxCJbn78kBe5dgJytB4gv",
  "key17": "2YHRh1NxEvEJWnxGQayTW3BRq4BfvvJ54oMPnReQcbX34kQAcX6XpDYqGmpLMgcGYErvzLJfNxNYY4HzFzNrDdd6",
  "key18": "4MZgaEQvEMw93vPYJNmS8sWQkErVuupwoxE3LgyAzM2RjSfBXNSG84Qs5QiGLEeUKTRVkA2353N11iphxip8AJJg",
  "key19": "42t8f5iEgsssBYrWzRuPQv3pMQzsFgtNxgeZW58wV12hEW6wdP3RBwboWfnQRuszx2NuchxQY8qtosh17r9ZKkUY",
  "key20": "3dnzY6zXRCQs2PsLEBkxZiG669YkGK49nJrUpKjWziKUG38CxfPeqyRAG1U8QsFFNmXSgjng56F8Kb9PK6hxrrSc",
  "key21": "4fHAwtq6ZeLbqj6VAosDFm7TxtREZzXWsAyMfb8vir2uoiSfAhvDrasevJJH71b82vyWgeV1xEMvMaC4LDiR1ATB",
  "key22": "2jr87SEcrcSY8Nraccc4mfH7VabbrwekBoDMiJ68D2cotjpxRBY63j1FFhQNUCLEZZ8yQahh4dat3BXeTtEU4sgf",
  "key23": "ceEMp4hR8GPL8mfc4HcoHG2Zra1uEJksaXzq3LkPbiTSJSMJz92bxRx1hjrnnqZi25jQV8ZZvLKaUS7RpxvtpyQ",
  "key24": "4QdmGwdVwzpmCyCTsVf9RtxZU84GYEm5FHK6uZD97Hb97ghEEM2ihRh8MH28BckZK2k2NkDWUjecn44qoUfHJwo5",
  "key25": "5TQRwRXJ1noSnGvRMxvam4fEjxxiLGSqbVTZrVJ3X5ZB1fhB9FZaTEqXqxxLMZN7keYzrCW6j2yypPDnooDC2LFC",
  "key26": "5fZRZvFzSeqCaqq56zndVN414cqSoMfTBXhjJTn7J4snauJc4x6VmPKiswjA4dUAicUSxdknpnmd1gRBAGxZ8xjo",
  "key27": "5H8K8RSJ7nMk5u2v9HcUcnJfd4b7iJDQ8WxGVKREUBDGzPaYFHzDvhYHk4w2eMr2gFPKKb38MQGYuRLkDdx72o8x",
  "key28": "jfkjQqqiKxTKqZE8u8juWQPdSfVqKecYVLi4iDq5ripKSxicrpXFzLiANtFBLJ4ajmW2QLj33PrgHB2XLMtm2nY",
  "key29": "4WLkteNkmkJf9XagnVPB75teSS65Mv48zbydgnhdzLvepjA8WMHtuAVrtMyHG5jYNxEUiYjD3YXYhHm5T2Tvma6q"
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
