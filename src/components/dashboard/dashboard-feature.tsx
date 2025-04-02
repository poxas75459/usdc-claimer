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
    "4Gza57PzEsDG4tN2aFnNztBmTWTVgMf5KaKaNrYQXJaiNWrqTW8gD37Kxg1Zes8kknHozYFs5b3GeZ8bYe54iPNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5shgjxXebsjWwTLmYgGr4oyUEnAC25yYfn2s2byRGk3hF7ZVYabAQn48qVT417Fyof21aEWVsG4aoXb8bcTjEFbJ",
  "key1": "4Lc2UFE5sKCUMn5z95YVv12YXhrFEnBrD9HRtQ34ZmEFeqbyzkrfvPQdjwKW5o77y8yZyhURLaCtcVFX2PgGesmH",
  "key2": "2U7wEhhja7K15dP8aYaVanQtG6JFrKs3qbMdnZZUxHdPJHimyhXny6he7XkfUWJmSNAwTDjCX1GsYnvWDNPWL3bb",
  "key3": "3NoGTNqiCZNhQtDiKJqgxoV2fNFAz24Af2hb725QfnejDLTEZSS8TtZo1V6RgsMS6R5St5HFoFYRwLFZ1qggT8sJ",
  "key4": "5nvfx8Bxff7jA42FrAMKAh3JuPtCoxezM2AGe6rA4NCZTnALfPFAd54ydcSokN3kXcY1FPzsVAHn3ivEpSxh7Bss",
  "key5": "3QaQ5eX6dCnVDFp9ovT72otbdQvNjg5m2VaKSD46xrWuysikt4F7bHWCJNyFEW86roxHTH9AesRoY66wHE2tzrbE",
  "key6": "HwHZdwFz3YY4J4J1JoV6cxQw3vn2kd7DPg8zQJChFkZt4eWjXxYb1gdSwkKgvsDpJtkbN7XpXkP3EcJgmJEniJC",
  "key7": "5xqosyL6AULheZNFyGQpTTV1KNsUmBcULi7Lciw8QJZuLG6GCQsrvi1iWjpFihu4aHsArMEzcVkS5SgXJUHhwe62",
  "key8": "3iJqxtYpSNQNDoEhRDCg98SaPsaE7KtR4wXdn4X8vp2acWqCWa6F3xi9eXLbuQpmGEgJC2Ue5MgWhYWZrkL2Kh74",
  "key9": "2B9v9M4qpsDuiURwsm9nDa625rEFp724dMLp84eQRq6rZe3MQqNSYFMMR5cC3GMjMJ4aK1ushvTxCJUJtCsg1meY",
  "key10": "3dtBAmQX9HjZsHc4K4xo4pwNUYEFw35qESmUtrRtHZ6xBsxnGWeH67J5Zv7fsrSoj15R38NUgGo9PtAc72nsgn1C",
  "key11": "4Qjg5WuvKt2upPyZkGy4bkyvMPZzR5iSVzD3H9vaRUv3Fqn9rHrSJtjbYVSLT7UjdDYTtbUa5ZmJx9HGzHAyEtyh",
  "key12": "613VaaNMWXpqpsbTJEjFnwaKZaD7idGmp6eFYAQNGS1KQjgj3tXay2AFZPbvBRhLoLdrm6APZPMHKDrsCNhB9vaE",
  "key13": "4s98Lm3PFgPPfJYNXQDHr31Q7UAz6PFSdKKyriZ7d8nom2SxT43ALTouBtSGqeMahwCmJpDixgNL3obBGv97AWGC",
  "key14": "3sx9FuC2YNewJQhLiowhjuZLrvLnu16RBe7CEgRQviNjjVVvDB4MT2Mqo9XCH7V7kU1cwyX7V8TWc1EbU95Wp37N",
  "key15": "UHKnXLu25Mjqwp8BevQe9wFrJdBtroDjWFKQdW5FxQ9yDZqyjhu8UEWxESy6gwyU9G3LppZox3TcHd6Wa92eJYF",
  "key16": "2ZyDPfABP6joo3tAqzdSwY4DZavx9W3riS8GASHqdjbS4WgWfY4AEVrqb9ztWeytzkw2C3cQTMFNhoSeCptVxtsC",
  "key17": "iSJgLGTfWkWjfYznGhhDD4fFmEpNEzD7M64fWamieryF2ruoCHHSmvd2TbN1VnQAbske261vFBZtoPWYRqquPDB",
  "key18": "63suEzzUyzsvLun8bHSZ2nWLzKyg5Yqh7T1jfodv7p9KjjTKbXFzwkFrWZ1DxA4nJrjDMsZA7PTJBHHpnpgWV6kL",
  "key19": "474E6JUsgDLrc9YtYPJey4c6mW7a6AxvxQCMeqpfTpJN9aNvfoD5H1apai2cjSehapcG6PmnZGBR2JaYz8dPe6qJ",
  "key20": "4jQZ6kYFuvWTXUPwFH9NMqhCxZbqQxkL26B2tQyVneCtNyaDbaHnYF9eGucCNvmC8LqmmtJYR2KvkBN2HjraNG4q",
  "key21": "XKPoaA3rrVToaXhpdoMjVe9vzF6DgFNeBWsaAhwUmqff1ULhwq8fJRVtPacKm6KLGaGth4cWLCidkiqSVuHFLNA",
  "key22": "3YdxS6SmcVE6wNWZdEERLh6fxVRAanPnAj9jDtvsjKe4HiHzU61NUT9KiCZrrFrup8Ctjcxp2moK1XB9SVjLrj1F",
  "key23": "5k6A4tJTZ6a7VAvjjzkmWW5HG4YoNiRRG6g2ADjSLCefPGZeksvp32kToRx5Wh3Ec4VmpUSN6YJbNgDvg4zfTHcZ",
  "key24": "D5jyRpzTy73RfLvDdoxEpVWUuJs9CB38AKTk6cwAQZwYW1Ds5qgjC2bMRchNw74SDisBZYfPPLZkdvR8CwS7H3R",
  "key25": "USp4VRtemHHqghpCo7mchqDHS74SYikZMpbBTYivEV6vdz8gXLApFTdrfddRq82kVxinGF9z5Nb8sNVgSVNh6Cs",
  "key26": "5j7mQGy138ktxQLw6SRADcvum1TrLZ1FUGtsJ6JEQZArV9nywcWZFgjHdcPVjHNBbfewtVBe9h2ZXL59Lz99vUWW",
  "key27": "WiKfJPBVi2YhhKTJi9Gw4qVEM5qEpUCrMauwQFjc9StHQh2ViEaB8R8Rg996EiqSr8Y4De6anVX9QAQyrye3Cy8",
  "key28": "3y3oME8yziibQ4sPWR8UezsQXoqxUxCxMfMzo1btcuuvvW6MBFVSn5ocg1Ph7CRKMj5dTaCRbmycTPTPyFjhs2R1"
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
