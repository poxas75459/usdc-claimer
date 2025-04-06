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
    "2FNXZUDghZXAw9BUByPMP45K8x8beHuaxbXS3Pt82bkUWoKLGypwjjq1NoERDZSHjE9WJrVAxuebHB3UGPQBifRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sExnHj2veZAutHSkVUyEJWEsVCejppsVAQ2mKooqqcL2A9WHxkKanatYjgtQUR5on5gPikfvZhAkTXXHW7isTm2",
  "key1": "3sxfapkNrXdrNjV5swr9tehXiT79BdDTUwhGFrfLfzPdfBTN3Wfm3egKQ1QWu1vk9BL3VwnPAqRvB3Lr6q5apjmM",
  "key2": "4ed93JUJfA9TxFUcnSuTCL2rkscNDAmdUqVvK1xDpNNswR2sqhmFRqWQC6XuyjDCL8e4xLU3yQMr6qAFs6CjtsGe",
  "key3": "23zKakHfrWRmV5wSM8Q5ydnAXTbCNXA4MmTyUF3C46zDTmYThXwXbr4nTN1QfpFXpeF8iY7VYBPYYYnsihn8P8oP",
  "key4": "2MPHMcu6tPLK5oxcCVUBxoMcWmWkSTN9nxLw4ByJJh5XrqQSrUVvdpadPjrGXotMasTShPMhjkdp5eGWXoGmo7nm",
  "key5": "3mHwLUXxZBXtmP7c7ZGHmtBhSmE7V14UU7sSiicQsAFRJaYRAa6fNW1e299yFddgFXhNohejx52ZnVWmeZS9Y8g1",
  "key6": "5wcSei5wUnfPK6NowiEriNXNqJEAGgn1KVMbthSShaLV1uSrcQr1voZaYfAR6DjRjCF9qcd6f5PBm3vdam8pFYEE",
  "key7": "3k2TR1c9CsPSq8uN3JGnNhtp25Ynikn6u9naVNmm4LiSoXcekNSio1Q3b9HmEzpVsFTLCqSUHhZyo3eSqHpmrNgC",
  "key8": "35prMSpjLpVrQoatbbHLtQB58yNgUcS4Xp5PhCGGqCFL3nS5MNE7eaQVgsHXCARjvtmCBLsr5VkwB6MTrm3RXeA9",
  "key9": "3wG4mh1wwzbop5sopf6vZ93ZSE9H8UL8dfkj3JVVTnpDU36ibr2e6hVMNVSrdvuifZwmV4qNFDCAAhezhncyft5a",
  "key10": "232kctHTkeZtVWmQSBvsQgjhkT4tp9rBogztcbuqtWvCrvyL9XbL7DYapo2XUEQ1weSXMD8eBesBoPS9r1TjBwsK",
  "key11": "2VDZVpiLh8YH4FYEy2iGBhtd2Adze7YZYrd6tZTDf2oVzdMi77hzkireaRri8FuzrtQHrZu7kwnbTgFeGG7HqKiM",
  "key12": "3LLZNRw9JqsHg9mvK1FpzLWh3Qqm1vdaVdGKTUiGPsQqpjWniQkjBAR8GAczFqnpTYwLU9aiK6d7SbYduQDh8vch",
  "key13": "37MGc16YtkjSx41R4L6ADKrKBHgqJos3MvCB2uf4sLVBXiaiPAQWaVB1GabhStyC53yRvu7FYktAVARYaa2yiSYx",
  "key14": "5CXD47t7yyBaMtrCswJspp2Xh3fkVXVwHcTxRXyhiuJjc23PAJwWkExPfU6hRgchm3Bc8GV7Be6pDfAAisjdgdeG",
  "key15": "2NkXmYaRvur9DkojqHa527xJrrKgymZb2fKdosj6nQkrufHhyEVSdUE2F9qNLpPyayggHZ3JZJgNhvNed7TBdp92",
  "key16": "61kGLx8awMdvYXCjhyYw779JJF3UnUVUdZcz6zkdU7EmSqXBpNQWJ5iHdf4Y7ZVdDQ4LHG41Q2PaBKKBdt3BSEvu",
  "key17": "4YAunkV2TP1uNAdaa4i76PqrsgcL1P2iPG1r8TYhzWJzE7h1k1MMcdnXv3wNbUtGLybAGCjj6zj1iMdQs254pWq3",
  "key18": "31kgAiAnVT5mbRLKtPijDjg6iqmQYTS61oPuyyJfHyQsqFYrDvcJ3WYkdDViD67xDyjzDXrHK1yW749vHh2nRt2V",
  "key19": "2PEi7HzmFNyJ7VERTs1Y3DB4HL97jsv45BihSR8b4AWwuZ7sT9EgoUDgnkGEQSPFd2PTHRSr98ey3UfKW3ygGwPi",
  "key20": "257zhYu2G6tb72SokcJMNUUCqKrrDGdG5XjMi6jaeY7Bbc4BkqFbrfLX8e77WUiTecRTgVjmyKoAwPrgiQ57QZi9",
  "key21": "4d7eiqsvUyKqznjTnfAmHkD4o6ZUBknBwPCBMbdxxw9aYuhpHhWXdJJBuhbrmtKVhox4qgE8C7PP5XJywzE8MLLz",
  "key22": "48EKcSSeX8Mc4G4qJfeJxjGxSnMtH6RA8xmEX1ebdWbiRWH7xV44okPEmZktNgKZ1BW6BbVt7y2ppwgTuRGnFVyR",
  "key23": "4NPQFzVn3QRmfJMbzvocgUxVcR9Q2yYk7R5ktAGcJaLCT3Ad75BwGc9xBS7eKhX5R2yrcakkE3gHnjziYND3Z36N",
  "key24": "4ep4atbDYetoSKhRWRYjgPiGBcDGup6HdKikSDtqdycWSLTvEfaeyHYVzUKmz6DFwC6b8Z9YcS5qHTQygvKxqRnt",
  "key25": "4dDA8LfQLZs8ZZSrv1JG4w4ZuDJ44JTgC6YVNqzqbLGYT2Xiv1L6qns8fVWrcsTWEPespg7BVwd3fjfivk9VbMx3",
  "key26": "1wr6jw8UPDEALPtsDehzhGDeQoMmaTswKx1QiiCpBCqa2wkgcfr9LrQTgNtKhuRs4QpFFQiaJjkP3eZFPFr7HLh",
  "key27": "3Lb21r9NyiT1UuvGxMVmwzammHxboa98C6RraAX5YdWFzo7SDzYKYq8ZswS3D2WjbNyp7p6yp45aG9u39QKksrkF",
  "key28": "65XQCYgf5uxpTJcdepzJvYkS8aWmHiD8xAkJGBpaPEqxsEfkEwAvnn7YyVV9XxY9tJrNzJScki93CNwVMcJMoBcC",
  "key29": "2XdvTB4s9LPtejN6GQYuBf8nA83D1kajtNxnkVMnMWJAQ6jdmdYKcQBcC94R5r3JD2g1Q8Ce5TRHn7aHA5G3Ljz6",
  "key30": "ds8spmwPRH72rB3rHzyeu7j6M6ivWvBFdJ9Ufbq1P4T78psiexnEzKPgJa51PN9JNSqMFVi5KBEVpj8C6Xgfv98",
  "key31": "qeDwLj7oFhNZ4hP75aH1a7BGURwmnVkuYuER5R7x8fCdSgovDhfDh76HjNWz45BsP85ZcqCocvBJ2CwHxzWR1Av",
  "key32": "4VXJmwxT9Ynfn1sNXHpwM2b1YYpPNzesbSi2QZJj5TLwe54UwQFbPV7BPifYXx6YAFGYrqjkpr9gJMhLpjSVj7qd",
  "key33": "35SNKhjihqQvT4fToaniTjctz9HDPfnmh2xmjTgQRy5U5z9bpeoJadjuQPkWftVWsyhT4hrzX6XQFPDPfipxJren",
  "key34": "5mJWAvrdg78oUGt5JtbmXiL6x1mbN1Jpb7J4G5LQVX3vQKLFzd32HsGyj4TPo5HpCwCiHs3ZH6Ybip83WtXux7g4",
  "key35": "5mjHj1ESivSG9GxcVn78pkB3cZu9LTRG5symYwjAnAFGedPcERubVFcBx3km2K5kNkT1KGZ6uvKy7ffH7PkBhvF8"
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
