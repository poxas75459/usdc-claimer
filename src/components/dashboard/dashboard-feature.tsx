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
    "X6Va5FiKQV39DK86DCaFgwxSiFfJLnFo5t4Z3TbKtAA36NgCgwe1x9AoVeV4J61VVAJBiWtxaxEo3t3aLykumfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GnZEARTXhXZX1L7v7WTSLzzUtqePyzE9pJ3M3wKLigijafcXXTsEqok6xRz1UhG9Jfs3my6G2cYbrQK3VWucQwo",
  "key1": "4DK3ab4DNhDYENfTgmQdMkanabxtxC7adhKyv3tn1K67rntAvvvsMdcDEMQRHhaWkjNQpdMEUa2y6hQ4ndNvokGt",
  "key2": "4amtj474RTF1aGf9ptgTtkkWk7msSNmNbd7GihbLe9kCByJTkCzirRYR8zF6PKogBf8qpV4gVVpfAdf6NhjheEFn",
  "key3": "T6gSGzSXc7TKynqTgpGchQDJscNQj57Aqoky99jXUKfWwhg1fRxsjq52R82p5s3bgxZtB6kMTFSx5r6rsRa4gfZ",
  "key4": "5Zwf7JiF4FRj3ZGiM2VdLFj6FhUV8pqg1p7LRmTtx6tv3z6jfgnY26rXsjgurGqGttwpSeZLJAZgNcvnuwg5uBwr",
  "key5": "5kRgYrnyKVAoUwL3u7gK742t5qdpKWJKNsj9QqngWct2fb1DRQqLiHqMH8XiDthjk3CiwpWehjnNHd2GYPeJ1XfF",
  "key6": "53fHpn2DXNoAe6nFqn4jmz2tSRTrKVtXjajrjdwuJEt7TGcJ4zCQQ8U4w3LmRF8R6so4KFUjqHa3t7y1BTP3H1S6",
  "key7": "4fRX8X5LdA6xUY93qFb9Bf3rMbaZ5d2yzYtoYkpFuXKQ5kPVEzPoEnX92kpnd6ZEUP7TcAC2B57VX7HsaHJUrRzS",
  "key8": "4EJbjwifkBRemqrZ332GDv27tPRVD4cYoLzausWJc52YqG9jQauVyM3mDH8XVob5V8dXtJbpccy2aPkPhy8sWirv",
  "key9": "5cYPMbawktczpT74tfoTTAvRggGvw19f55ANLYPnW6KNwsjhfiRkoqbXguHVzD4EYfkp6b8GWCHMgSP9j5NsoiKK",
  "key10": "5JvvuPizVd3c4XWbfnH3TRgpTBNKZ5FZQRdV73PqSgtHnpJTLPThJLEvJ3XUrPNE1gRcDmDyeujKBkvQCihGb9Xv",
  "key11": "4QLYxrZ5as73GyYKVsdxx9NbdWkLDjaVEEkppLVnyvk8jWcnx4eWHVahWHV1pkYjxF1jFdjJgB4NYcKyYMxcWZkS",
  "key12": "2oZRujDPPnk5wUDb78CXRA84eB1Dj9LwkNDS9HLo8X9NimKQHtcN2Uh2ASnjcLdc2k565W5TxuapwjAiqx72bDtn",
  "key13": "479KG3sxDnGrdx8SEZghMY2hFnvKGedeFJkdGHD34aHGJ2vQaRcugmt5Z8D5pBDseTq6RyCumHfUyrRBu1ExA1SR",
  "key14": "2tpKYuBKgB4hbGughxncSbnTaytG5yMgYoXU7rMd7qAxj8x2TXrZkmZ1bv1UnpyAAqmNpgtkC4xoigHp8t5CQyHD",
  "key15": "62V7kdXDsfUC92eoWRPgWzWXMrnDtKsMCRL3db4EHQ9RUTYpc2TSafvbMSLWW6DXkFcWk6CDtZ3hDSxMD1TkzqTQ",
  "key16": "45x3hjg2jbZnCi628xXeXk1GWzYw3n8Brt1nwCtqjVju85LP5y8SdmPfwqcoY7g4pC3Vr9aEBZtg646VgwHruZBo",
  "key17": "2DgTSgkBgN1krw6eqUoZYMhkjqyQ5ztCQ1h1fUZXEtfEzumLqRgcMRKt59R6HeXixHw6Vir98YdHdBKi1HHv7nvL",
  "key18": "3yH5rWh25sd2F64YzRNnNPmAm6qekoRiSCmVdPF745U4PNN1wqqNpZXRbqQkWB1knsZXfTGKQh8bnFx1HAAnTBUj",
  "key19": "58mSXV8n2NaV8DbsQB9Q83bFZJboUWSokj9vpRQdfY5oZUjAmW41F2NKMStgruVuzMgXyNYgnF6bPaGG6GPpmDgB",
  "key20": "4jAfAgs6iviQJ3iLzrBw8JG2F6r95XSPCTcy5yjgehg9dRGZxZzbdKHi1A8j4qf387NEtEGEqYZN6AUVFvgaNjwC",
  "key21": "WAyvpUi5woTaWT3iySeyPssaSzkTL9harPG4Rq79Z5RqqXfvCYQmpWKmQJQzuNLMZHktG5AUs84LXk8YAchj9rE",
  "key22": "2eCCGchtgSwN4odygcaUJPxeG7jSutfo6BcAbzKABmzfbgJSyaNJRaxAhjLRiX9qFNGaG17jyRXBqnvvmW6UKKMQ",
  "key23": "3Q1sfqrQHJJukoPpDrQa8kZ1HCqpCQwEfzBvH7Rr5YsFRnqoYAsjH3H3WfGqB6PfLtrK3n8BRfNpoxHMAecssn1Y",
  "key24": "34h4QkCNRNnUJR8qDykZmiQ2nL96q7VvNEtco5v1otCFibT38HSwqccbDq8wmrV4mSBn3DhcBaEW5uxyPsekRcVe",
  "key25": "5e9zfXdEfdPE9UZsvf1J7Ussx3A4Nufv6RsEmHpfc9roAK5WrQQqNTXp4c2MsnJMoRvJy8doWbEwgj6cAqfXg11H",
  "key26": "5xHzk6goWjYquNkeK1kDp2r7q6wSGjscA9eXscyQc3VVDuvYe51zKBWcUmYoTnUEzdhiM6gxiqxMuhmYKkkEoGfD",
  "key27": "3cz6ET2uYoahVEpkS1jnXmiLeJUSkWjFGYchezuZytRNPftrKacLb2NqQnffFX7E2jPHhWJGEYjBzB5eVZWoz8fQ",
  "key28": "4neHfYGbJZgLRtLS4ui11JHQenrcAmobUC8MzpqhhpfhHx6K5WRUNCHFBHy5DCNrq2WgBTmaZrzD776d31wqzGS3",
  "key29": "2yNax7tPZLzH5AKHf3BCRT2kRBHAvTof8E8MRLc6HKRKjvJHWqrwHoaVrYRCnNNF43WbVMJdHn8rM9BwLL3WfqSQ",
  "key30": "2GG9iPaZfqLpaugyFaHKD6iNnCsa3fwuWZ1zTXGHKqaxWvdZdieDE37UTxvmNSSYJb3jWUXNQm2aYPB7vB5FHuvF"
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
