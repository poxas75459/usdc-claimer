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
    "4SNMbD1kVnr3TtpXvSPzVX9NH6zfYUBNmURyPQJZJjzmH72xn9P6eAvu9toGDcSnSS3gPRmJyM3JPc25f93tR6t4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dzv2MH7M17cfDGXi7vhrzDTp8bbamH237nMvJF48aoLofR8iXyaUH6PADzCGBsj8bfufgKoXsf66VvskaQDkoWn",
  "key1": "5Gj6W2A8mgBphd6wWdkRTYD6tLV5c1D1TtxVHGG1zUSvujjihSe2g2edkjzeZEnhf2A56GP2wzjniQLLrPvuumnD",
  "key2": "53g7C3w9jx6m1ECMMz5LGi7bMcesRJvQyx5Yizta2gfv5n7GByXLBQCycFBrVTmRMTfT1Zphhkx314BDYbLEqmnd",
  "key3": "2FAC8TT8g5YywDqZ3v4uzH3Xkv63Hx3rTkhWc4k5amC2ys1bmD8wxmbNcmQf9NVv9zsiuisTuVGoUbXDCPX4NLHR",
  "key4": "4mNV82oEjUxhzU8ENpucptwEMkdMQUXqg2xXeNm5LRMGHbRBb7s9YLyNkHMzvWTJxdcFuUP8ERHJ84GfYrziRtiY",
  "key5": "4eEL9ipxfE8QE84NPUtmADm9E94PECeEKAFwgWntGNQSnaLTTFdhiA1GtJkyVvPyr5Jmt2eCct3LtzrWTHZmRE4K",
  "key6": "4cRuY8y3baQMrXu4Hr7PeZVn5appaBtV7oUoBMKGamphNqAFeAATniuUFyZnCdoCtn83iSwuson2SyoPirA4DicN",
  "key7": "3WtY4Pfg5dsfJcgZBewhQV2rQKe8v4k8fXs4AVQYzvjWzE17evLvp8DmpbGbgVBAg8voTekxxPhime9ccqMy8iHg",
  "key8": "3T2dBL1bd7WbafWnqxtsfMjdzD9SP11UhuUcYPQkJuwuViw8XZYMRRFrLvvbiXGtwWhTZUX84UEMKEMZG1agyP3k",
  "key9": "3tp6ZvM8KVPLU9R5XZVt8GteECNjGKtWbJfC8UAxz95mLs7Ep8H7uLED5Kst989R1M6sjVqpZxfJk8xbjUzWTxCg",
  "key10": "3JqHGDnEo4RtDqrVXcvJqs3ucoWt9sfdG1ACzNqs2tcHRJuWhVURSACpnHLG5YSh2PX7Lene9c8MPa1MsJTfJ9dd",
  "key11": "4jP5k4qTFoYgxKSNJNDQG5VQovwMkyshybU5PUtsvgyGj2uGrMgRsnQKWzu59RjWqeryr3uyNQRi2eeags5c28z",
  "key12": "7en2JGqsZYeVjQRFWVcMJkKqojDrBXT766PVtDB2N1rRLkBzzbmCYQUvFZZMz9tcASwWD2wjEAnk4ZWLECo26mj",
  "key13": "3MHsMRwbTbhrwyEfo1BtTAW6rLMR6a23oH5AWrjzGc882SbafgGq1DRRjaWn2VxPJjmA6UmNCE5XCwcuMk9YDTN9",
  "key14": "3zY85mjoYB7559N3AQ2itevsEpjEZC8rMDuTP9fyVaq5Jvw8DDsX6nnPckwQSs4KYoDTrfMKd4BZQhKo2dsGpvQs",
  "key15": "yPkdg9waaMi3wMh5pWkmVPQ3uBDeajMEQMtqpnvcUK647u55yJSnAvVXjc5dqhfdZepBdMH5V1yK5xVeMh6c3jC",
  "key16": "52REYUDB7q9wATsddVNUZx79S14n3LieeFtwEPqhMGSH8s7yg744NJgjnuTQN6YDVYTVfHCFRH5YLZtcQMuhwVX3",
  "key17": "5tic6zrz18BYz9ghh2S5P4pqNDZMF8tEh7LrxKNU46HKR3UDzD3CtGc3pGxHpaKc6sVr5HmdA8gnrqaQn4ma3AgZ",
  "key18": "3NZVmUhmfHBVcdLv52p1Wy6adjpvmpr3jHAJ49eVvKLLxTcoWNpq8qRPEDGCgYg5G6SMcL85FJw7V5vT4R8QEPgr",
  "key19": "4FdyVxzbVMYL5u6x1zxJwuxpUErBS2mt4sMBkditjptE5YJRaCFRgAD46nQd43kqVumZzhUjDf9xvP84j2kRazTu",
  "key20": "5QAKUijBk5rMAMaU5QHHErmtKNGMye7jPDwZ4PRmC6rVHm5xr47nvi7e7F6TkwUTQaohZWViJUAqAiu9vMivxU4j",
  "key21": "4QeiwurXWKd6KxLciQYN7JeMtvLqP9jr5338HtkLus2su35PHEZYx5n6TPUpWM7XZRBzCT8mTCJ51DnZF64y3XCk",
  "key22": "2EWgxPjZzuGn47Qyve5NUqScQ4mmcNSJYwb3RxiasBdTP68cgeHBwd85Znq8U3y2TPhExFLDs4sYubRkxuMPwLpc",
  "key23": "3TMgpqqVEpHstfySjLSwWwAgC5r6H3BuxV3fAVHapft7ntHv7rUYQh3BPs82syformgtQ9Ss5n94yBhbQsYeUFXE",
  "key24": "CMaPSQ5KFNgVfPiJWPXkbaupWMTmHXiR41re3RS3RvL4mWeo2UA55FEQPxhZzUrDP5N7F9hYrd7X4eQ1DL6671L",
  "key25": "3yf4Gn4BwXm2WViFXdNRmwCsxZ6SnzAZYEkJQh2jB4Admsd6Dz77yJL74A3rcbqbU9cddZ4T983jdTBZSu6Y2nnv",
  "key26": "2n27H39W58jGqMVdcUbovWNgJK3YDAVyFu2vfWxdWcxibkd1GpHFt4FsscsEiCo634DU4715YtekrpfhJQbS6FDz",
  "key27": "662g952eo8SuSHGYzjR1vBBpiec4oKqt5WZer89r34vPdvPo85bGCHHfztnEsypq8yMQ9fYC9jWiGzzoHyE3EHPC",
  "key28": "BLpjerGDBR5TJS6rfbZaxTac6LnfsMzt5gPPFT3eWaqSgXbQX9Jrej9DoEvwvZo28EiS3ddjh5cAMBCrsKuzwRY",
  "key29": "1j6W6J7z5q7MZvVEcvWDFrbtzd4FDV9C75xznBJtdQtbnghbVVjnvx9ursT5fVNyYeLjbw2doZqVUHrkpnxspoA",
  "key30": "4sRRLXqsL14Dn5aEbRBJacX8gt4QR4eGwmvDkwbJjvHrb8CmqLmu49zcmgshT8ZRtRFKWHeVFFYEWd7cN6vFtjxv",
  "key31": "3i2ybQzfdp1CNS769efxyNNWmVpFCBnPC689uqwkqayzXaRSUdR9qY7BNJmd1joa1zfN64zDNAUZNk4mCozDAzme",
  "key32": "3BCwovmsGrjuPHJ8D2hTURz7YF9kLdP66eoYB9BYfSFurEPgAnz6FMBVfErFNyrHtWxHuB3Zv55CAeN8oZtyQZ2f",
  "key33": "2RvY9YbmiCELEfsNeev5sg6qk3ZSuW18AwDXL3WtK8re7VvqpRr3DqEUCTtWREcYp87Y31bYKSAdzuNxd6WAMquP",
  "key34": "D3fEiWZUaY6RMutuaX6kwi8RnczVmnqJceH7BxDrq7MrVWnK2ivA1D464jT9fwjK7ztX3TWBm95spCGKHbUox5D",
  "key35": "2SFbDPbLrZCZ46dSFEWeqmtwKuhWaB14YWac1GMgXuCEHFtBXjmN7LogKkmWrHaBDGrSYGFtY6Sq3q2apPxf6LHG",
  "key36": "3QWJEiP25LkHgafRbrnkWfXNr6NvaVz1PDhLRNmWNNf7J43LX4KGqGYWLmCbhVsrDU7KkWfrsqqEZFbB146cu5W2",
  "key37": "skouxX2jswpHufnxmECsfwgd1BCcakoS7fXNXzC8vn2b1HTv81oXuQ7TMNCDV4znN9eizhR5HUWMuC8v5FvSi4W",
  "key38": "4zM8dUJ25si6k6S8W4kvr3AizYSK6tycWLkS1DKrF5j6ucw3fM1yuXF6mV7A6Dxrg3Srt2MYMhN5KW6Ui7QqavtV",
  "key39": "5EA4fJ4wzptnZVZ77phmHZGckv3BykTKBxBuktsoZ9SC9ZtuyTn3mWXVJKK6Xv7RinDNRXvqnCECapovY6fXbFCS",
  "key40": "441kScrtfiQUktSisNec5MpbK3FycHCXq6eL9DLUCJhNfAB2UQFXfrMNNw9BU6uKa4wJCmi5ByvbB6hLrJHCxZPf",
  "key41": "27qYvTq7ruZsgM7eY6XjdYPjkJu74fg441qkqnxHZigkbXgNMgnJ1mchifAYSamTsx3wEZHaauVeCLa2qhxMxUMc",
  "key42": "ACD28osyXHv65KyjJgkEXgEwaMf1y6CYmdEoRNRoj3JfWrBwxHQ1rSLed3SAB6nPMSQkkFxfEz9jhybjfg2Ghfj",
  "key43": "MFm236jRM5LhDmWweuLPDscJBAffzAU1rtEjgqm5HiAG6wMpipHNQnrg2wZjUG8st6pem5aYnDN2qvkn7mz8eXG",
  "key44": "4GLmYTZch9e7gvNHEvzAS1htYxYKwndFgrjWjZoNuo2Qn5jnSpKgTPU2NLnKgjeQtQhtYTnBnQU95enPRgUM6uuS",
  "key45": "257hepgV7dUSQCtmUXFej7znvG94u1vouTFpnKEhrgWkr7Sk5awB8oXpMWcFU5o37M6s1ZjrSJr1v7NC2Wn8Q6od"
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
