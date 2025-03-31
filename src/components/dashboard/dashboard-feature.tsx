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
    "5AsFH7hNdFrqu6Re84PgSWrqsb8sLyC4gMRxGCsyMM8MPqYXQvwjEAvrdWUiF7rHwb3CMHhwZjSvsqi94up94hGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rhnswM7ocD7vu5ASEXDo6j3g9caDueUwrVMEP5N2vTAHdeHLE68RNriWCXGnuWYeVfWmJYPgEYHfwHBjNy5L8jM",
  "key1": "4WPnbERUPjafDRnu7Jjain3Aih5ZhhVeSku2JpJP3eovm1Du8vd5L5K7nXNvK7Gffmzc6kNmF4JM2FDSR9vDt7on",
  "key2": "2yMhHXhqhTPjgZu4tRFZNoPrG8fTWcTNaKMVYF3ZmBCqov5Uhpb9iFDPXptgFCXwSHMWZuyh4ie2T5DuF6bFtaGG",
  "key3": "4Y3oS1Mp6LLdHFsUC2hcAYeoda8Nfz6NeKW3sETsTMrkt1Lz9L1z3tT6sWsRatKFJD44NYJeutsb2X6MMuUHoxCw",
  "key4": "4RN2rdgpvwLuwhZsy6RdTnnBDYSadQTwXPGsgksuwixCYQS9guyLChuNGpww9Jd9u7jhJeYNcGttEL1Z5iEYPZwf",
  "key5": "4xP1o8CRaoqZ27YFv6SZ2Q9FZTESMpWVWRnnetvGbBTU3EpwU3sVappeAsWVFN3n3o25LLANsp1AZHQ74WbFhbCo",
  "key6": "5kKk5yEKaZgiDRdR9fmz7ZuPq5aDo73LVnRedZ5UccPGnJdkgHUMVH7mixc3Qosu1zCXdCP7VPgUbrmZadzzpUoj",
  "key7": "2fqLBE253bDi63w9Uvzu14thQvQv88QgxVAbsd7xyR7AT1kwYPDU7PcmT83GyuehyDQxSdM9A8pTPJMZaDRdPvGt",
  "key8": "3Poqn7gRtjdzjzBhBMqmRbrdHk7qB73GcMNdbHJtj4FiRfA35AtSYt24LQfTKhRApkKeP7SrceJXjiWzapvkfczh",
  "key9": "SmxZsE6dw6BT27vKoHX8E15g4XdtDtu8eVd3bSGXCuoaZyzHHwgm3toGgXRH5yrmjieK2XD5gXPbmQsV4VvdWbX",
  "key10": "3bRP4MLGxRTQ7u7tny5nk6Puw1VcJsFzurYkMDkQGqPfPWsiuZTJNRZSw3hCLPnHzcUYwfHw1ttnX1JsNVawzrzJ",
  "key11": "24yuE6xx7vukmp8bzFB3dL6DNv4WgGg4wKUjz7TJ5MznKWNPj4tYUri2aM45t4ZmoZ2GTc9GcPrenzFhJNqYC34G",
  "key12": "VTGwfxLLoFMDpXK2VfgURpDQg7yJJXQwVdURypPkkPiZ88u3tqFUDQz3z7K69aYgG5mbjgu4WKopjv5Z8igCYE6",
  "key13": "45cLdSqYgcxjcHLEB6Jq4gC3hWMEmW2smjdvNmkRQ8YH8vKoEq8dszadF23oShvfcTQMENjt1gNmnrPrRe5YTQib",
  "key14": "2P25AAuSWSHXR3JXkMgF783sbfw1gLPsYeMCqYwLeVqFp3CTaQUs9G5XZTV93PQGp4qgUaRqLhcYucFBVKX7Cvgj",
  "key15": "4gCoyRxK5qDtuMMwGPj3JpUgcs4pxMfb8NRaC9XX1YL1DEWcdCwCCPna5L6mp6JrzKgqQdVEFaNtzq5xVaoxdBWU",
  "key16": "5YjouS6yxUxYgEUVDzfLNSmHj2FUpiq8zQei8jFKaVq7XWYyA84r6iC59tfRFTQ5E1KBTd7Ui8mDSLHZoZyURTw4",
  "key17": "31vJ83TVNcYGgkF3rv1ttCoZ7rkvLVxG3CyvhkiDx7HwstZrQp63W3h8VL25VmzGQxsZefVBEErEiHKAkfHDbowY",
  "key18": "4VTUP5zNyVeGWG1BU77bsJ2fWybTkrdqyuuchqeb3dPc44NzwHTnVrLUYg9Vp5DDA6D4uQZmwUpViDowPxkbLBaU",
  "key19": "5LcgRMkcCEV44jV4AqzjZEGKucHjycN6nqAtcVJrxJ53Hc9Bw7fu5a8UcxtaCWt8Uc295hBGu5kaoLzWRudEbywg",
  "key20": "5VA1RgMKK3xw1Xf8bPkJuypFeWr59TdDtX7JCG7Ghz3vqgA5nk3MY5U8q3dwLAtw8h7P1Jr88X1Swh7hHXr3p32o",
  "key21": "5PTn8WBAaUyvcv2rktiicHsnYNNZXMPCxpYowgsFn5aCGi2wctXkzZtwMwtvZg7qeYfBSASQfBHnxqkPwdSBYGA",
  "key22": "3a1XZokf45XdkxSQQB1PEqMLfMdMotZDDTVxNYstEywKooEwpiXd5PyjUPnqdLTdRVznBzReWvYCs6j2ZST7v6GJ",
  "key23": "5Qasb1bQV93tp62nfvKd7NeWKcZeiJZj84npyxyaUXkFi9CesvZiZ7ZntRzKbZz4oAPz8cjba78acn6D5DRzJ4SE",
  "key24": "3ExSLQDrun6vKxSisWFtUXhhKnCik1nmPWekJ96jyNw94Nqq1o7pbDJpKEmZjs2aSpk9qQjNYBuVrvWMbcwZW8NS",
  "key25": "2MQY9cmTgpHkvg2nQvKsmgtsRAjkjLvyBMzHLhXE5EpJJz8yVMjFFJVfkMTgPQwokpcamBpMTBAeGHjRci5jxtHV",
  "key26": "2UAkz5mnDNE66spGZK3tf4BHFEimb9aop9ckp6a3En1AskMEvDN626DQRNN4C2QFs2zE7CmL3Vq9xro4ZAoZASdk",
  "key27": "32sHvbkphvVhNKYBTRRfTMKHrgcJjiN4h9YsgdMmZDdAC7DyF6tJAQqy4Sw8JxcqruZkDGiMSQnygyfeeAEoF6kU",
  "key28": "3E9j24dW6y82gLiSfYbLYKAkiSn2HBMCBiBQ6p3eKdnw18FASRNH9a6fBR3MHEQE3HzA5qtJeAg1FwEQStoTXu65",
  "key29": "32dLbsyfG7XJyKTzK7weA3GFuD9akjhYCPwvoWGT2sHFDT98G14mpxHEeqAcgBy12kELQh7qsZfNZri5kmu8rJ6P",
  "key30": "55bp8Tgv4HieFG1qSuPfNbtcVo4HYV141XSBuUB2bu7Pbp13GKSCqYyuHpqKxEdLyuYrvc8FBDAhLvqk7kxKxeDE",
  "key31": "2VeqdvMjkVFTRXHw5dLSaFU25zBFn5mNBuvrda4bfJJTtG16su19xM1LL7joYRwV23MRCw9PV75wf7pF6pV6s4cd",
  "key32": "3rYrPL8gazUYS7uVKXfHPvL9G1UTS4jQUA5F3Zi2PrYudgpDtW3WQfpxo2rG51fCVYBjbPHVahgD9uYDuKUjQDdB",
  "key33": "3s3P1ie7MN87gzypcBkRm1LS4qE5RumuXHV3p57ae2PLyRQB2quws8JJ7VWQdTNd7CGT9M2JyKuRKNqCRMEu6vLx",
  "key34": "3kpkdNfYkMFY5x4epek34u1JLAU1BxFkwoDdxpt26FSv9gX9qiMZMviUrfEnaTLAGDN6n5KjXaHd8NDFjNReqQws",
  "key35": "5Un7Ma1b5YEyBxQ6apE1hiXnt8aD5roGpMT4qX3kiHMXYRvFpZu4H6PneRbhBE3FUMy36bHBhxhea7RxNwjS2TLa",
  "key36": "2SzQJNAz911f3k6WW2HJZtAXkLuJ4L2zKmQDoHRC9qQToWsutkgu2Fufd1uLbtGFoW2ovFmxLEXsfaXsHgWiTrp1",
  "key37": "5qFrjBUYnaUSa4NxjSM7BxTQjkK9V8MtqXpSLS6C2o3tUfjcM6TpKvZQsAuuJCzafSaTroNDAFmfQrGBmGPnXj5e",
  "key38": "2BzLLsAYS9NJHw3FqrKAXnz5oWaDicFWLqQtEenpFnZiMjtRUFR6ftAc6wTvg8Eb9hZ7HYjXn3xESi3tbbepakyG",
  "key39": "5BjtmSKwRR7NeCgoCZHogUnPo7aXfZwJov7iw4ZcAmxZUPS8auPyn317WAFfatpg2VW3hqs1jxXW18oZJeAH59PR",
  "key40": "2N1dtR4sw41Efwq59CrgemWRfkN9YfiudRbZgVvw75W8dHjksGh6aAAiCr9xPxCvnjcDMi2XWc5gy9z6WKhJ7JBx"
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
