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
    "5iRW1SfiNj2f3Aa124LFgYAWE3JxV3RkpiCxvxVR5NdHqtxmJxRuuHwkXSREm5douDUVAo2zmeqAGf1m8ZcbUytq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mDUCY9JuAmCat2eqcmtumk61wmW9HKGSqjAEwgCHePqbSU6ivWcq8K7iAmUFDcMjfBcXLoHyiveHT6MxWqYYnHe",
  "key1": "4YhCZd1bgMcsG2crZ1J5hDtPzFKGNd6icYqNfvZtY7fLnbqXpBBYM5cDFRFY4NMKLVX4Cw5zPXZKLMu4Z4FUAfXD",
  "key2": "23CqSpmMeBVAMSwD5iCFA8mBRyJR1zj4MX5z3xxJitBLv58jsBeJLw3NV8MqoDy1Gp85iwPkWhr9DNLryQgVq2Dc",
  "key3": "4NYd1DM97XbbuzeA1wQ7sCnYkj9oS1Lvm7ZLu5rV4cnouPWdgg3A1ZUtHRQCFtEPrL6indB8yB8hP921Vy6ojop9",
  "key4": "2E46AUfo8gyHkYrUVfJxrDM3qi4JeS8QSMZFBPqa9irRZXikyx7uo1J3fwXttH8Esm9DDRyctqcMeAdh5HXrKLdB",
  "key5": "2rzkYRTtmsAvXovhstXWf7h6AaB3nXU22uZgdpC22Du1SPjaWkGZq6px5udf3wqF81VKRNzgSkhaX7imDDTgmh7M",
  "key6": "24MEqxRxenxRTwdUXhyVW1fcTZgYEB7FAhHSsBaAUDShNCMqFeHDZvMytkDUZ3M2ot7G6X7QdHwEmqR5mcvnL2dh",
  "key7": "3FRtR9noQf5qiEFxuvawVzhopEVjKe1TU4SV3JvtpBaux5rD6fnb95Y5NeqPieFoPRpfxGBAb4PRsQ7GJNnGRFPU",
  "key8": "677pkBkEujDSeLmik2C3QJmYJHkqwg8B7VRivepgqnxm39KsMYqRewHMUdAhH6izDP8QdWtSpQGGiqvDcb9EkYFb",
  "key9": "4kqeLj8syfFviDZcHRn8gS3HYCR5uVRb4NksvmJvmG8pVBFggPbXp12SQMTwsg86JsTFSbdYFzQS7wZ3kTWN6hw7",
  "key10": "91P2A1hjJKqGQ9BmvV5TbLSqo1FQbm3ZjUq5PCqPuu817zeF3C7EYV6D2d6EtvLkhgChfC2rFN6V9vMGmvncL7h",
  "key11": "3UK3sUHJ5BhfUjfcbXWCSnrVKg1AbWQDrYqjymxUsrm9VvfiRfd8B7EU6UwfiXESJdXNyRKty8AMZGQUihyiDmM3",
  "key12": "yc9KM82ZRjortdugio5ck2WVafFpev5g2JLtpWK7219MuyathZzN6hb1Mj7Lq8L1pnTbvMqRW5TaMRwWLas6fHT",
  "key13": "5WC6bJCwLWFmMAMkwAAqih4FX9z679G3a3KQEQ1a5mtRSPA1CU7nVWp9e1wtc8ochb2mZfvmsuyJAYpodtyXLHRC",
  "key14": "64fpwyN788JrH2gSyuJc8QEJ1Rap274Z2LPcTc1hahAyfhUQAR4Efy9znPvzR5sf3qPGy5ua67iDfT8zGej48tm2",
  "key15": "2D8ba19eboEoLgjmuhuPowuvnyUekhHv8o69ZHLSSYsj8sXKv6bU5nsFW748TxFDZyT18e5kk916aXy5QyGEna5x",
  "key16": "3r7bRNZEXy1Jo8fyZ7swrpDJ64S84JGQYKsB9ZdyKcgU6tMLnJX3oZmzGEsKFHcZ1kCVoikNMYfsxTwqaWYjyXrE",
  "key17": "4VWqk5QSr5Sb7TNMypyV68D36ARkcThTGamFiTQKk9f131ED6qCrLVkGs2oztv7CR89siky9itapiu8HqGuY31Eo",
  "key18": "d3txFuj5GQzUu2rUryjwVV8CoR5oWkSa4hwyChY3pPh1EMSdqH4vt7GPA3mdwF2z5FCa3EsLvAzj39ct6K8JNHS",
  "key19": "Fh49gJAjfZidrhApNLBQ11kiZu46r3QhQBqja8AyBqDAwBbPeHuL2wDtWXYeidUEYMoxjCGeuNb1Y6buFPsEPr4",
  "key20": "5kU9RBf4haXcBjnZKU6mcB8GgWUP95dzk6emJFwypEffu5CQ4erwPMVhRW39zcRzk315jMBrdj9hjpVNCBzusMuo",
  "key21": "3PQb6oHXRbQ5oT1Kcb4c9ZRyJX879vrRGHDGW6d6P2Cz3FpnHKPeHKsNkKDdeAkGpmXMNVx4F94G6AerAWhWynUM",
  "key22": "2C8uVbVq7gxdqfHZ3KKMRA8WB4To6RqaJfyCXGpnuxBKvce7v6QEmnyR8y7Fzx4QH24ehGV2ViXFtSdW1sZ25ucq",
  "key23": "3AgxPjzaxLmMTT6JrGh9P5nx6vnboinxgGPhDA92Nt9Vb84FVVK8u4r3BqFYPpoVjCtKFa8BotBhd7m9DUxi8FWn",
  "key24": "4n67RREG12ocpTotJQDBFSsDidwiAgE5HkN15LPum4KCjjWaYMf9FvzKQSLvL4qmzmddy5vtCCMbawN3FTaapXJA",
  "key25": "4rYmhrrEaNgwp3WCegp75rozWDWyYSEbcTJ5Xrm5Wq4cWfCGfEyUEJZgSVFAVkkFixUGwgpruH8xyQSw1e9kjzzT",
  "key26": "3Zf9fM1mmnfkK195Ay4t4p2SbXJBCL3FiDQe3iAbPqdieojq97Mhha2vdPxQPJ7j48tkjeACkMuUp62guJj87y8k",
  "key27": "4KsLbn2232yhYch4LvBNNc9XhfcpZSExxbtmLU2fmYMA4rzW74nF7HFAJ8iLk6koYNoKd4i3bxHSXVG2Rd8qSEbt",
  "key28": "4ZP7etcBXcMGfbMHmyQVjYsiMzS6pdSvqgcUGYRQapQt4JqFXNPUURRLdsgheffMWcxe366wTvwUF7bNE5BvxNMW",
  "key29": "2r3Zyn7EzY1oT8JygztGnW7JpGfTTMHTnW9fNfibprpMQBVcmhduHU41XRz8QyrZrmW3yCJn2CYgg9V3H4ySDV1K",
  "key30": "5hbKWhc58eJukU6fEGhqcwSVmzZmNFvuZ8f4Wj2CqHBoKjCH2HyDKWn35qd13897A6hZ6G5ghBycq91929qwsqZb",
  "key31": "mkQXMiFM3AMygbq5zdf3cKNS5qkAxSFpV7KQ9x3ZTPDAD5AkgABMHUKf31A44KZHH31hAXY3kZSHzZDxv5n7yYa",
  "key32": "2jtJ6KQpS894SZwTDPvcCjLD3YdPbJpJdxh7KZtNUKsBgjGhnEadbY68kq8BPdwg3TzYRKNgmFDqHoZvntzZwFZJ",
  "key33": "4knVDZ96QScjqijDijoEHBGBXVXhuqmuPfKMSQutKtkELYwgeXBcD8dDYALELaSEE1BuXcWGaxLq6iGt3FZi7rxR",
  "key34": "4WnnyDEDdCQvZCMR7qAFmZedCaSyfTc63RQmZEk3c3HhL6NgZSTRKjPscaSEfGDYRsPZ8NpoYDveQ8NVTPvreQAu",
  "key35": "67S5LmguoCt7McusnsMjnJjaKNX8Y4W3ErqDyeGggEJUvKVcznyCDJmb7Cev25HBuJWFkf6A9PNbEfstsUEXSCN2"
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
