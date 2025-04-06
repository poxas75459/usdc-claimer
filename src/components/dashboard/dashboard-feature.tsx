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
    "5qLGCMPL1BWJJHEgVYGJfZjRAEyx4gbUawzkac3XqHyjceFp5HDAm1NEJrLoL9eqsvH8vZxku4PZfWh4QD4BKwXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RgfvoD2rMekfZXP2E5bLPec9W8rQBWvjPFyvf9wE5Y1nY7brtXzdGAHWz8VjJH3H9ZvYDbNnqXHHku8DssHku7x",
  "key1": "4DyvTb6DNDMk3kfq8ZxJgFVqGexAMwBLnqdNgcpAPkvgcKm9uGGtm5Pdds85jKEkb6W7mPdP13KxRtA6rEKmHx9z",
  "key2": "dSVJzBaUPSTfPrJTXcRgWVcz1x3pQmzhnHjvdt5ibyvQR7DivdJPf1c2Wn7Ef6mYZDzmhsPddrLQYe9ggcMVg7C",
  "key3": "3P5HBXyyhSyKTLa32XJxMvrKsLAxBHdUkkaqkKgct4K6xWNWenZZGuUXYUDWGATBBFq4U9pJC23cJqszRuUGaMSf",
  "key4": "3MD5jLq3DragMmhtjQ8B1fmCdJqGr2uvyi9ohujYcYhAQP4rLbAdHM5jB6YncsHUugoA86AGX7xFC91TZAvWmWrp",
  "key5": "23SwiBGnUwfTUR6F39k5RALtNjry3x7E9TsDLcnoFGSebGXNK2MmiDg6UmyFMD2YDSBnUNqX2SdGSUanciqLf9ho",
  "key6": "tNpwPpzGo9b89eb2Ao3se9ppWoQUakZvNJbNjD5r1p1UyTac1iTFws8K5Aq5vozqP1dEW7nfheV7yZBp4c7zNFN",
  "key7": "5irNLEsVjd979T7DfjD2QvD8NFGDQA8JjyaMCDVt9JLbE22UD2Sfp7SD1yxXE7z3fYPAb1Q3MY4h2dQ8ouZrUZ55",
  "key8": "521Wvb634Xvk4rA4xct1y4brKs4hYEF81nmEmtZd8gAk15NRNmu96y3CELPo2qdvumfWQJCQwU8VXTn2GuxBpMR7",
  "key9": "kK1dEtWqHJMNNrJhnKTNucxmR8hno8rUiohRDYkP7mjXaXc7DegukoxfSTVUfziqo8UjuTWfNjm7eSbpMSyoSxv",
  "key10": "531JQfu61PD3E6qL9k3zX4N75egvzQxN9q6VLiDvMpu15kuiePWkPGdz2WL7oJkpSUc7bBMf7fTFDb2CkCCQeSYE",
  "key11": "u1SN2ZaNEXG6WdotJyre5wZVFiszP2UAiSstgTQdV5QbpWM6zBAZeD6AUEXLMz7Cqyh9TJicMdSn3VEWDM3jthY",
  "key12": "VcFZ9sV3pz4mCogbrW7Tp3KfrAS8KTWz7rRF1GkeFVdmHD3NPnHqSY7DbaV4Spuu5A2cz78r9jKqayoZNNCV13F",
  "key13": "46XSb3ahK9JuZp9qrTFmoEBT8qLLJBMyK82DUW11gm5G1yAmrZ1NxD1jzBJD1bMuetmPYUkTYBAvdmFXhja7JVx4",
  "key14": "4vDe1q4gStEN5WHMqJ3aJimuCzA1bfsWFHw9oizRgZjVLKzxvExFWiWeyyeBwSWo7QAUfHJzEvhp1WqrGCejfxNd",
  "key15": "4Pgm5MokjPU7k9kAbFBit12jLyngiizx6mQXpFnL5C4pJZb9jriMLg6xaNfEFYFtSuU4twwgFhHhvrLofoq8VNtT",
  "key16": "2HMVMRK9TYovXGJfcFeuSdL7XbXikKBp5Ek7maNugthZUMGPFfDx4GqfJdbKJVwhqdJSAzyHTuDXqHKP2ih7FPse",
  "key17": "2NjcUh6Tgiigyj1BbPLrGLeoacfHA6KhgXFTuhkjufBk9Yttv16aYNT2JyUQyU3xhKFoKCuPnLiNf8tgntfnX3Xh",
  "key18": "2BzRHpcMg7C5ejVuNz9G2rj7Nxzbw2tfte5rrqrPXkhEm6EaEv86wQanMEV5h6ABP2SxzkLoeCGiQ1eCKyE1qniC",
  "key19": "5i3V6EZfG8vo3FWpiGmqQayCU5Q4ZNp9mtKXKMH5i4VKhftZ4XedSV89Vpr9sgAQD1DFVZHA9V2a4qCcU3YAr3QP",
  "key20": "4bc36UZYratkvYMfWvg3i719X8iHssgmqdtTXGYyCjrY98E8JygEmz5x3KEy7B1sHhU2mysBne66bXn5cvZypjuL",
  "key21": "TGgXm4mSWCC45UqddmkbNudGXYQw9HHDTDowh7gBuoPpAKPL5ZBSpVaoDKHfZ2264p6UkwuciALgy18KkTMsmRH",
  "key22": "5Lx5po2114XUQdQgWUAsqVL7wzuSMWALvfX4kodYtM5r7jWnbbjNfRnNxYkMJv51txVYLSNudKGNjCXAx4PAQJ6s",
  "key23": "56wxutqhCCfahfNk9WXvpErGXbvoZbfVxy6b8qRLem98236kN2Qsf6Cahc3y7b2M6FKU8aYUfW7EdhgECHnAM4Kk",
  "key24": "2MKFFbrd95eaG1hSYEN2ZFX67DJsSLrTwSinrE6BMUqSWSKbDQYKor4mst82pJds6Q1KvcrKFVt5Z6XU2YrvnYwG",
  "key25": "2CpCXU1vazSsQF6WpPQoYLdp7k8ngoXtk3JA6UqV6hZEhF7kRRTzjqKwx5RcGZGX3VWTGCccbCYEuSaUkJdWetQi",
  "key26": "5TcTcyRTtbk6J8HZGdD8Zz1cDvWohnuPdHW7axGGTZFpiUZSKnHZqKVkFykQvQNhSXKHMaamRE6QyZHjSbJDuqrq",
  "key27": "5WZPfCYASRHEWfWdnDtmJ4pghzGGDFdi6PGXNsWisyACBmmT3uiC4Lqp391PRaN2UCoDAwmutbvHm9khBKazXEoi",
  "key28": "4c2e1v4BqHgcBN9JyufFdQoeQDNbBExqB43zRpKY2R2vUCFGJFCKikF8smV6oecbWPpuurat78os7HSwmqMxmomv",
  "key29": "3jePJKmmQU7kKPxWV75oL2HGSY2bmEQJGVSiUCG9S8mSDYLSPiFH9E8EfZJPodxoTRgRajDiioo8HhTWs4Ad9WSK",
  "key30": "56uP1PUzwRMRRexesAamrND2HsCMzufaxoRsVxfGcA51EZVqvac9ZxjCz3zytpqkFbBiyKamd2px3nE7DsZABGZt",
  "key31": "5xrPnP4zXeuQVXfTBqegp2bGy6bFkhC3zugRbRCed41abRRfDjgT52i9Bw75LxjiuorQd7SGfbUyMu9XqfbVJTRx",
  "key32": "3vY7WgZZ6wxvG18XCiTNd8CHguKS8uZKtjb3wiUuFMmXAJRDqDJVtx6D8rnyNsUEn1gW5t6ryAPqWauwbmoHZcXs",
  "key33": "35RCBQrScCBjARcNSJuLXPZYsaU6kdnydJqoyMnCQW1dbhpd3fYQnC2TtFScbjk5kLhtnRohjVt1jXYHUUfhh8x7"
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
