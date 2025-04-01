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
    "4iTvxktTLRPbPwvao3ui3hdZTNgK5J6HcgaxXzXK2uxtbeysuwFs6P241gKMb9gg1TBE4tfQEjdiU5S2bQ171zC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMSNHv2drjmugJitgzS4FvsmExTWbg62TTNDhMjbwPtMBw16xnkwmJyCyrEbfXK5HgGsTgLzTK4YHQ9iwps2Ykw",
  "key1": "2tPY5qJSNug6NRASc2ADAkefuhAz8YdvHj7SP7FRm8RuyK3dtekfxT2bpZj5BSc6DuHCWBXCFsXToZc7urJv4bvQ",
  "key2": "x1VseDnq6PZthcCyYv2kAKUXr1H4bTH9uFTcnEyZhPFrx3CTgniH2cpnd3NkQ55WYtbDMTXU4SbewxtNj2Ry8CE",
  "key3": "4FLWjiHsEsLHfmv7tq8cAtXBDBze5HiKFtgM9LDKgU3DcCtAQHJs7pxjg9tudMTZVz7ULrmf33thQ9ok81X9GwsL",
  "key4": "5KnK5QUZ5UmP2oY34T39BX5YkQNqbpdi5cMTuVSgRS6yJP1EXZ6jXmueVwbU1ziDhEqikdkgdqHomYDhL597Kcav",
  "key5": "4FsaquTJCc7qH3S2s23fRJSJiV82hBp2SCBHtPYtC4NLECMpkTKJBWupLYUMeXGaZWjhB2tC2aSHTVTRntCXi5d4",
  "key6": "3SEKH5Nn8nscHnFdpfVvAhRhKiwGuVcYt1Lc16AqZXtxJUmZxyzSgTnGn2QDSkCoYNhnSB7PxKPKCkqjjhBiFRuv",
  "key7": "5DNULUY6eXyPbrF8zAiVoNipnjDL4ZW64fhL2Dg6CBNofRvN6JSYpPfS3T7hBgSYH8tM7hWRpgQNaXaR88CVtTNr",
  "key8": "3oYXdmMEkxHbWcKZLckXjcMTkv7CAsmHrhLox5VPm32PHKvBd6YcQqzcaD6vPPkJqkDvwT4di9nL61Bdp5rLeEdy",
  "key9": "61n5wyAVE3UjAEeYoS1N1K6hxhZwoGynjPC3tFcJYuyziqJYBHVTTmNUVswwaga7mu5aGTPwguT23bneTyu1nzTL",
  "key10": "33NDUK4AipPLXhByPYiqPzuaVtpT1csLnunpc148VEC1UHzadQEErb8KoGbFtELMGyfCLZ95yP5hHSzcdB7QE5rq",
  "key11": "3CXzAg9uWsoQKnoCEAWoactoyvWC6a7Ku1LUUu1mMD2UiV8fdc3DPZ5Y1DBnQezPmbHemHJEn78UmqBjsYK48BNF",
  "key12": "41Ej1Q4Z8UjaJXhXc2mG7DynYwwjpNuGEp3houB6qFYgXbTzwrAWp9p4C6Ct57Ba2twPeAWBBukWwYUcdqEgfExz",
  "key13": "2AZsREiaeuQ27EfKXKYRy2sGgbN5DScHkuZUHopBN9Pjo9PWgmLnoM7mYyXHRqZnYkRVuqi7zBvmAgzE8hz1KDNc",
  "key14": "58CZvRiiQEcBZQhsCyZbv68CcfcRmL72RpGg3zjMEjohurES1rDnLitWJxPwQ7LQDjL7utVwMK8ELPzNQTp77zcy",
  "key15": "3y8st7CYjyTVbtYqHKu22R7xnxq9qxZENgCCnVvpq5ZYZchhZG2Vyw5zmqaVxCMdBtT7UDWTcyC6ua7PHY4ayuS2",
  "key16": "2SXX8uzTgeB6vC6579EhosNHBudr7D6G8zC7zktRx3ZSSBHmGgKB2Wi3ZfHp7ToXxUYtgUKsmGbvt816e7WSY2fL",
  "key17": "5r4X5cvZkLGt4LoahxZsrCRXo8ZhzQafQF6C8dxaR4qqzqRSVsWBq1wG5tojVzKc3qsCAqPKv4d19rEgcodH14eY",
  "key18": "3qAQoSu7Gc2QSMaUxApuxjf4b7YfBNCecFZu6giPQAcevg5iLDDCGYsW5NZ4ZHSocXAHjQcS34Xe4Kuxz8KmFGJj",
  "key19": "K6ud5JisPazEsb5vbQjB3cMSbhRmAEQpJdot9GkCs1LPhqu6NWLA3Vv2GcJzM75R4dXwa7ayCcRQqXUj5a91T41",
  "key20": "ApzmqRBEVwtcCDNCCDGoQAVQsBSsidyEPrxiZVMXPgsizzHj7gchxrtTbPSnQPq4AdzfdhcB9JfUtCAZTkWS4jn",
  "key21": "3BpSepz6MgRJjiNheTARV86ZTa7cZLvjv4PfJ1Xf2Tv5vDejJyFby97ENrPAPNqy4st4jw7m8jTNr9DuNdNBRPm1",
  "key22": "6374Sdprw4QxXL2PnBPAQZ1ydc5juPbMc4CjtaqntqcsQhoLHMr5sWzQATd5QxuDyHxAUGgemPcLCroAX9abq6JM",
  "key23": "4ymvP3wJYx3WAj2ij9j2B1jhVt5VgST9RcSiPSrJ5e2kc6QHrw1XugWeJdVuj3omZBwsaoQrjMsokg1sgbPGjQWV",
  "key24": "A175wn5Tn4ST5h9HbcuqtxUnfrhMd1tAu7joDRmgXLGMpKp8dPA6LasRRDnhnSkGznLSPaaxJz1duST8DGPePmH",
  "key25": "61HQx3Bv4useR8RwKppTuzUA4gFJ6LaWUGWMGbGJTmjdV2C3TqAMZhdYzRcNB7u7hN64P1P4aZjWDVjbT2bsZMMp",
  "key26": "2dykPE1Yk5m9eWmdiNABJ6CQXx2oaMd5YDegsWYE551xSh1HpxEzUqUPHZYM4h1oTbXfpbbZgufo4EsmbwVyq6C6",
  "key27": "3qwgteb6aD4sCqMBcBfQ6SV4W79YkD3mgmwNhMiaGYxHBN6mqyntMUTVtGB7Kv3h52atyfoQBUFaUeVtnY37dEyV",
  "key28": "2cozyr6xAGxpqDG4FTEHBSiraQQu1CS1fbqExcerfvJetf7ssm3K8NQC6h6gsaUcvrqqz9b9DbSCoZrNUCwM7QSo",
  "key29": "YcSc7HHBLZZMPwaB8bQdyZjCwsrwCzr5ezt2tFhBtVGZcT3VdEmwMBfc7NEEJLunE3D5CpqtNrg6vx33y6LbbpA",
  "key30": "2Ygo99Bh3b8AiQPqanMw2hXyVRfS8Hc1AeEHnRDq9xTEZ4WCGQMkvDoWkfEREP1RCNqf3kqnn8TNpKVHnwYcK34Z",
  "key31": "4SBejpNSHecumhaozEHyFpsGfvqzQJMPfvnDnE4fNuNqsgB1MNCbxgmshkPQMqiLfmuURfaDpUwLexbfQ1zNqwTR",
  "key32": "YPsZnZFYhpAt6sXsVzyritfuUXz1bzVK8RAaAhvucN4jASbe8uf63tpQu2KAAkzohi28XfPAEWpTxg44nMc3si1",
  "key33": "5w45AjR5412ipxBAaYbDWjN7zc1fmEx1gAfcUqqxUmT1LEYBtDwnawkwqsJsbmQDjAX2V7GQ2GPmuZaC4fzcmi1f",
  "key34": "3r7uHmCpLxr69Shn2T2LQ25PVTQQKsTZTEoWdZoxTUCq5dXYuewLioDiw5A4KuWxQMWJVzvfR542h3D66bUE3rXB",
  "key35": "1xVwP6pRuqJTN5bRWUMTmSybZvgH57DY7uy7bkr8pTCh8FyakS3qPu8yznQZUrqSwEdDHEWtD9hsGztigXaZYsC",
  "key36": "5hMygnwp3i6FspG8raBCebQyUcqP2xLYnnn8phc13r31JmKwZ71YJSj1a8ZJmjXs7sDdj98QSSU6RnsBt4DjiBJ5",
  "key37": "XgEm6ZbL84TN1BajneteRBu7cmTPeztu8ciZY1GsWxMccmuTtxqcNwzfYxYT3YqhYvu4VqKAwvmB1wdrt2csuXb",
  "key38": "4YRXu2cKfGZccnPaRuhdFDRBGVbU6TwMc7uNXft1jjjRhBa7ZMF7L56QiiRimmKWGDRx4gBhNg4c2fK7JTVivePa",
  "key39": "2kBvfxPeaax7MczohaZyLGBbnyn488ZU4TAvKuDym2po7gb6SXnF331XczUdzTKyZC7uvbuhvG3jrrJiL47Rvhwm",
  "key40": "5u7spoyS2GuRywt6bvHtYezQyUjtmPdHGhiDvFKQKqcCPHTYFEoShSRwLgeHRTVEEAMtfPdEFqbdBMhAQ3T1mJrS",
  "key41": "66WJnaL7wSLVUFDMQj7XkSCzhuPri9ob1DoLYBLm8bVvk3iCmZEioVvTT8aptMxgnmAmx8VQs5S1HVfBewuktuXH",
  "key42": "3u6S2F7uKbcDSAas9dkGNVrK3SvDzV6gSpoomH6Bxt4tUiWsKiGEK3onoJbaFUpZf48GUfWnqeDYvmSXzu1PAaA5",
  "key43": "4aL7KG7XYijjpc3U6oPWkK73EJsvRWUegKK6yMGVZYzhLyW8WJvMWie2GKK1P89QARjgMmTjKD32MN4UW5AKnqeT"
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
