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
    "5f3ivntFKur3iAaz8RVViD35GYARN3116N9dtN8LzHSyQ6Q3DMBBmk1T8cGZ3YtetRcuvsDrUHvb4bVkCZP3TEeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXGiq3vhNSiG5T3jRLRYV7FAr9dkVBPoZtom8NXAWAQr53fpmPgwQ973m3HFN1RK77QvA2C8o7bUvp7tLEkBovP",
  "key1": "5hRtXVkJq9Qum4Mk2bEWLSgu1EBfySNp47zwQAdG6TKQSfSzE52BiTYPdacTrcXE1szXKxiAp3R6WVH78AjeaySF",
  "key2": "3XepjW4v9aND4ieByjcJbWU4m87HxYqFMQ7FzVswKUKyK8jXPv4Hoky27a4fFko9r38a44p3Xn51KhHTfVPvt4XD",
  "key3": "596io5XfFt5y6tHcMYj37C3MD7kTnLbJ8bjUpWfZKrxcc1no9Gqz9MrgWKEr9v6KDrRGXbSeDXkMipHkkwV3DYSB",
  "key4": "2sr2CFQjwNfs2LtaiJGC8M97cDDYyodUQYwsZkRMmCcRh3S8SbWwKrrD5qqBPhw4cYJq1wSdUovwrSxQdPSBd6cY",
  "key5": "2r64R6iPZrDc3t4wBZh4qEfnsm8i6wkWyzCu3orADvGG7jwSrmykFtBaoBqUquLH2L7dQ4nhk9RzZgtCAvneMQ6j",
  "key6": "2F1jwohzk79V8iC3KMPYTGboZdfC18E5joVt8bNRds7s7z4ioTn3E7K5Wv5dvofQkVPSX94r5WtKM6iG8n9TcK42",
  "key7": "52p4LJZM9Wygzmau1Y28kFdWGbbYUcKFJPtpu3QRW5RXZdB21uGkjreQNG5UcKgsKTfScSc2ExCNh9NdrStmCzcU",
  "key8": "yWrLjuQP4pfoX1Jobn5RRMg7vbB5WXB5NmefxGUcpt8NttW2nouUPmx1Msm4fFkRUgVP6HStjkAgCZcbydEi6P6",
  "key9": "3razgVWGR2x7jJewawPaQzXWxsEPCSd5H1mPiCbyweubAgNdzZjYzz3MHhemVAwMXNVZCavv5zepVCm52VpS7Na1",
  "key10": "3U9EFwq2HhA9JUX71ETYXcPPk4B8RN3G8cUBs2H8UQDALCbYKQYbv1fiNS9Cs1xfuGYnLZ9hTA2Qwu6fD95Y6CC2",
  "key11": "62CemfM3D85kHEC2b72BDTcuEK99RtS1eqwTiDBJ3GZ2521C2e9jvVS3xAiDyQVigYVS5srx5Gk9CyerbPZ6gdfX",
  "key12": "xWEswrRjNEXKHecb7SNebtF4SEvq7QiLTNYU7jybn4tA3fNTmgymitjjRC6SBhJkau9KZ8pUg66BtV9UFNy7QBj",
  "key13": "33YAxZY1pM4aawYSLBTQUGXVV4qomzpSUwafhQ7b62Msj4BqYQihRgo1f6zUCosCt2WCK8khZyposfUqxXbjcDeg",
  "key14": "yWQ27iGwL2NSZW5pMbPuT1LgwMsoLYxyBrwygMtWVSsPkqL7nLirre8EhrSsXJTfjQiv5KBLCjav7wZ2uVyiWJE",
  "key15": "63D2HaHKDqTjHmThG7UEbPaSSKY52Rb4b1RKSUbun97R3XgAgnUCjdMouNuXrabESXoBCLqXo8V8G2zRQC85tRi5",
  "key16": "5g5rHe8twXp8djArVk4YuQBBpV4Hqbf7m98MiVyUctwe7ESHcRtkGZV4tEPuBaD26UpYgajipd6U9CL89vifkL81",
  "key17": "gYhRDdHXXUqygYSbVWvykZFgKBMxuDtxPUfqdddE66EpEXUHEgJ48Sy6NmdbWafeNZEZQXSaKSrF1RDnZWHUqCj",
  "key18": "5HMby4KScEwV4J9nVPxvKjRXpqYLX3Lu6h6LpNvt29uffVC5TvgQVtdtHTV4eVnGT9ZVRUf4EaJZhmQpgBEZzwjh",
  "key19": "5TgzumLQCvZ3KnmkxYR5aFdquR3zg86hmsJ5jtjgXAwobRJiXqQxp5Z4mAbFZrMwE5YSWDjEacsa6vBsjjanXoRx",
  "key20": "49gWydWmr8yETLZQgTmPNQN82v1iUZNHEtyPCcT1d4F9eU5FBLHweWPLXqQoY2WKbdbMTV8884vh9VtYzTrHESL7",
  "key21": "3admhSFrun61tbwma68rPoDe4uSBCRvDrw3ZT8PLiKQaazEtQBqR7euyvUKAvQJrUBaTuvtrxhMGCMgGxPnoSgsz",
  "key22": "37Xx7kG27xnsRhMB2t4UL9P39gaPc8xiSrupCeZ2U7s9nVeYzAmxXfeHBBzXuqv6umtVMJdWXQFwGX2BbsYEBr1w",
  "key23": "4aT2WbPAaFkwwDwCnBD4mejN4oBiRun5uVGtqQPU32KmDR25LhVTvymU8wMhsTXGdEdJEfEUPmkbDEtAZ1eLh5uR",
  "key24": "51Q9vaoAczMZVPRpCFzjDgZ8QPh53fMXdx6LaJEJLA7GbUQUxQLr6fd5LW33uTRwjHi6tPiEY6eszTVmk5GxjTyy",
  "key25": "62qC54K6E5td4wu2r2WMqVnpz41FPvtX5fSpfdAmTA2MLXLpxJprt34wLaBPwxoZFFPZd5kG6TzxnKicEP3StMZB",
  "key26": "N2BF3onUUNFFWWSQ7C3chVTsiiqh3t9fDux8sV6S6zzECaAsDdC5T7PGzS2F4sr3DDedL11hqDfbmE26TDsi98i",
  "key27": "kkmBEZPkZxbeTPnqEaBLstynzRLLWE7zXj6mTPUYqnc1dqT1KxXsDHvGuEKV1pK9PNRz5QMf3p9gimq8vxWD4et",
  "key28": "51PbG64egPvgzNjtVbS1Z1G7X1Amqg3ssw8C3MNZ7EudVVvVAwU9toUQiSBEsE9KSHZLqrbjNpB46wuAtWfr6gPd",
  "key29": "4spYe1Z5MsejKS44BGHAAHhCpP9n5w3TTW1ABBM19bMetEZQ1d4SzwpZmd96PtenRoYDEerhqLTbxBYJuwjvz2Zv",
  "key30": "4gT8c85vHhXYrejtsWM2dUQc7sMZHc7aTkfH685oYXN1DSggsMUxSiZQm5oDBmXFTaBXAMPtbgbEcQc9xRwx21Ju",
  "key31": "4wa8EQrAZbTR9Nk5D84dSpJkJzXCaSZ95JypdxkqN2PTA2ANCK5iQnF6gdFMboaSksorUHZs9Cx3fdGgV5vFtc2k",
  "key32": "2seCsLhj7rp9KEK2i8QyN2F6gz1E4v4iWfFHcJ8WMpR7RZLEjERw7LtLctwYm7otwsWz3tg9jUmDiuWqzDH6Bok6",
  "key33": "5FvJ9LfWTphBkosr9MRQpu6yVKJAzi2iK8o7Wi6VKVMCKGWVc7W39xarAbfk2PzEdtnKxtnzY44iNvg2MCRXucXv",
  "key34": "4WT6Ws3A2K5nT39RbMQ3JWWRovDUsFYdFNQ2WJZ6SeiMPMS4ZC6nXMT71nzMgtsABD5uV3G3iKa3EQSWrYkMBAtV",
  "key35": "2qB9w7sMc2Vb9G5aw6Xobf4f1XUQRAsfHjQR7V9RwkivDRQCeKCjJMBHG8wmLyRt2XJq9Uan5q6R9TWwG3N1c1MA",
  "key36": "y2eYv16tXDAmE8ntqVnHswRRoKzV41kWeDT42eH4oxAcgzijHzgMkGPpRZ3D9NQQ9PZ2myDPTpKEabwLNZzW8tW",
  "key37": "KbR9eZQPfaDDsfG9F7n7QoYgGnX9bn3X6wZ4nwKzLb6E1NEZCFpCjRptN7KGVq9pS8Pmikr5mq5bbz8wh1h1bVt",
  "key38": "mgGDyMXBNNXrPDeyqN4WmvrvZc84FBM7jTFXydKjcHe71mfgdAVM1VErCsWjio7kVAmy5epaYpcnQ3wVEW7Hwpc",
  "key39": "5ZjevWMXcVemPmyPxcwLGrdAf7FB1EzqwLPtvikjRfcNV95ed4YkCfuhgDxJMeQ6vbSvN5JwTcpNU2fwUqp98FDK",
  "key40": "54y4NbRWezs2pqz7Ctzk67eDf1KtMqGf7UY9F2GED8Ao1792qomGJP6vJ5XSiWVfMkxVNwG7yb68A8acVeVHq8Y7",
  "key41": "4rPtFQ2seXHRMYs9coN1NZT7Ma1Gm1pcL546MiaVgBLb58RbHERTRy687ufDE2Ek11eMVnJ9JD2J4xDoGQmjYwxD",
  "key42": "23wU77tc8eB9TUHD8tasXvaUHnL9uh9Ze6BtYh9F4cMU1c35zXmtbacTFanFgH8VdFoBvXw4TemhdKFYv4dUSZem",
  "key43": "LZ8XQEwUGJqdCpFa1JQ5GvLcaAEnWe8oKUKfcnExh1uTL3a51fJhdzdLDPPmNrVpHyTHLND71jEXg5dXj8NdxRS",
  "key44": "33ShwJNTJFzbHLKAC1z24QpnA8pciXBGHFRTH7bLGHoBXVtfNe6y2RzoPjAE3E97BASF5s5rKavXmuA7sTBha8Cp",
  "key45": "2FRx5DZufJxA5gEWaQWoD1G9c6zn9K7xmiMZcnzWikFk6gD17Pf8A4epQFg2MEabBG23Kh4vh85tY4Hs3GWX3YVR"
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
