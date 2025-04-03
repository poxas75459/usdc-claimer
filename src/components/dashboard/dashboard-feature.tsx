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
    "hNCv2H7nmtQ5PJRBbY9BGDiNVwz7gZFSbxxb6kKJpxuKdtfVT1At8G7kqQ59gKWbxAbVZkCSe9WyjQbnZmbfTBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BstN2kcfCufPQqMbajVtyyrMgMfzNb6Uw2LiDBeGxYvcPsvVmiatNdWRg9YxEHdJ1Pdazvoxr8sv9e4PiDGkw2B",
  "key1": "5v5cP5bvnm7Rurar2GNa3JKufmE1DkXA4UAX7HJZankJDNU2BLqnnDjjqTMLwb9qC25TPvJ1xKBZCrWHbGmwwXw7",
  "key2": "3si3y4DAYY2PPXq8iYakSP1GyrrjR8aP9G4X8tAjAQ1wbRH3MLQAp2F4uNyjmGRuFMemQghgHsDr53wZVyMGGTPx",
  "key3": "5iy4tfNkrkvPc9YWr2MkW83prFifeXDpNMzz6CJFrrRgQ1A9pf8GySgLrBa4mAtvJtSPn6h2YR2hG6S5Pobk9ivQ",
  "key4": "5ta5A8SrixH1RseApza5KaPmohnRwuz5CVGVrY8LDxX1pLetYhDo8r5E8HVufvbgtuPLifNmkHGE8PJmRRupd1rb",
  "key5": "51zPH4TLP8dCTXwVrjQj47SWNxzAftRaVpjKYscvDt15uEqVT65KBdvebo9B6izXtunG559eKRDR4FoQJCX7p6QX",
  "key6": "48vu3x28zk1pWQn5fG2Hu1onAzTRpUya1yhLXJP4x8q9ni1V3yJsUYYhGUywToE9KrqMCscxJPahfAdWtcp1CoZA",
  "key7": "ZzWD7KH5dhNAVLjj63nUuMRwUiN7F6W6riGKvakM2Le4Sn2G9ygQBqhQUEzy5mkfSkShE7azKVursvAfMgAvKrN",
  "key8": "4PvpANqwgqVukmdmvC29LLAi5nWmsW3f1Yp2LTLhsvTSXuieXkZAZmaZSWDeXNzikzNPhoTLzjLBuMenuCsn6YCe",
  "key9": "67Y2H78LKaGS1fNBDgjmzneMeEmFEWtaywgHuJe7F7QAyL7cmgrero5f3THqusCDZrfjVvKinRXsRU1V2YVo5Sso",
  "key10": "4KRAujbYcj2G6C13L6GJkiWHEfmeKNJMba36zzXFDTNLnqN6myzDNkpwFDneRc4onLQvAkUB5dDWdsk5FPJHiZ6s",
  "key11": "2ohQoSrdJLm666CJ2Q1gffoVNtYu3f4pB8awHapwkL7sR57X3xrhwofQwqBy28fPcfTi17sHTLK5NMq87SnwLtL8",
  "key12": "3MGnNmKhUuPkdHG5FqF4Y6rgP9BFQh4S4PPC7cuyfQcifXYjkiaZ1TxbGfo68rwNsDaKSRGK1SL7bxnGYaHZhYVD",
  "key13": "3ep5nwW1nu8iqpjHems284eQZKceGMdZVgcZE24KFWbhu5pVibtXgNZMN3yN4Guq44yiJCVuDi2pigJeNiKfSbPU",
  "key14": "2Xc1N3k1q1LzAgCfDioiv2xd9XeSKaz6Tn3K52BCpV8ex1Dh5MFzLQ53E6zyJZ37dngfBPBd65A5VKQMEqhfhTrq",
  "key15": "4dJ7tpiZ5GM2ptPYoDm4AxjEyakCUoRzDRDWdEnrXKJfp6zJ3dhLyPZmhtnt8uW8XQgEU8g3sexBWGVy63YRznvx",
  "key16": "3h3SUKuNoQrJQnoFviquXHmfbQbLZULBnUemwkVhcpHCRoFfL2rNZhNxhC7oFvqpkysmMZSg3cpuZRXixhtG7uWK",
  "key17": "2sL2BzH9DhujFF4s4U66SFf6xL8e1CxH7vakDzrBw38QEo84GxuyN87YwnLs9prFkyeJryJHM77naqpd3z1xLGJu",
  "key18": "2iu2gASjYyojbQMoGC9wXY8JHDzanzp3N2eXc8XQA597dPdooms4XPj41CgzhXnumTefdt2KBtiiqvdNKwJ6GMcH",
  "key19": "5koAX6hqsRKUZSsetZNSTPGETn5YMkbPi5Hw9pJ9LQFFrqu7Yj4Q89DQ8ws6YYBrnmg1upuU5w1VeiGnbG5L5Gsi",
  "key20": "2JyjyXQfnMYEPpuvL32WwJSetBv3H4eyiGkbLCErM2W6F6P47kK3Ce8kD8ycCLMihZ2hCnmFr6sEngNPdbJqVrEX",
  "key21": "2MooS15nYQbShM22pusrBPECEX8tA25vZfz9iYuWYpTTmXTjQoQvkVjG8Z9JajRGhWPB5vcp1g3ZveC3p92EXtqZ",
  "key22": "4Zfr9zygsYQqYW2xRWDKkbRXZgnsbaQGKWiK9vDehgNUebteuv4Duacb8epDq1H3FwsdRm4ofe6gK2jwopvseuzV",
  "key23": "4i4mHg1xCVLqoXagchLbrq7puEviYnzdQa44y6oJPeJgdYGZ3ebzZmzrFm3c4gmk48ULVDZGBqz84ur1HCHXzWx6",
  "key24": "55FTvXWM4CiJE5YzawZgNNSCcyUVE9bWXqYw9hWzUYw8pMrP6EuJ8g32tiJshNuQJpztDPExA1Coaqcim1Lg8UqT",
  "key25": "4M6EWjoLd4QGFqgsmeXHWkYitPZVwomx4Y2QBrQDEHBoRowcVS6NLBJeaCAXvTeWccm4bBHfNHN3kYLmSXRkeSQi",
  "key26": "3QW3gXrHRpUBihCPNExkvVpcpRpPhMTn1xUk3r8BpTkzuWBEJ3oHa6ub8zdH2g97bChTZ8cm5Pzy4XRcxTUNuZLm",
  "key27": "3MiCHvgxWkW1SLrcQvUdRsaTpnvZVNhncTCJTBbfHbawoWyVaw9dnjvJLde5rDteyZCP2nW29wuTx6fo1FvtgMYi",
  "key28": "2EDhkdiHmZhsyZ2q59AfkWaWgdZWCZ1mABkLcCVc4spHin5CpmBgExaqgGbszgDXKTYNA7rXv6WhmYnFfwixq8Ge",
  "key29": "123hMipaUTvfN9eSroTnun22LzMHTDY359aJSMPj8Yj4D5fkxYTo8vsZyiD15APa4armJn5n8cHndMs5Y1Lr8k79",
  "key30": "4DbMCXrosR2DzfEFHeFpE1Xqwy844LzAk4cjXv8qVmKxfvK6EMwHwTNibuTuPueacaPD14wdnkjQu99h7u9nHoGR",
  "key31": "KfK991L3WTxyCegPHZzknRrVjeL776BHYynbwHJ222fpxonxzjPV4hZo9i62v22X4LBdveaK7Y2qkfEFfY7F72j",
  "key32": "3EvRmoMW4r36rTqiL7iMMqcNgEtdh4bWMtKunVZ5aEZPfRBXDvjc9S2ssgTgPvhwfWeNmz6TJGTXFHRUGPkJr9NK",
  "key33": "3pcdGbD7N2nMzVJLxpYP1wDL2dJrt28UkHPyq8GZeoLYZGxGzmA37bRqERbY4jZs9YpwnNkc7HPBa5ctNQor23R8",
  "key34": "5QvGBwnBKomiPRJPr1VwPM5Dkw4SadjfCm9uVgJB4tutDh4QgvgiVR7KHCPmRQBLFNJ55Hpmv5M7XazS2t8qnbpB",
  "key35": "5BM2qPkurAj2oV2xYi88UibpBDyLqtrgodw1QsNdGVo4t64r21eMSLT3wmazN5Aphxv1yDXVsz5yxasJLwT7TgiC",
  "key36": "5hexpjw8QBRcFCgS9G7CjdEWCmJGqBVMWEd8gtUaWZj5g49Jbg22949jZvTShzKNA7X7A321YgUYVyPD7Q29HRCG",
  "key37": "5goAD9TJk4Ajo6S3Xftj4sUviSoGhwD3KxGbtc4x19FnpwbEQWubytXKVaSufR57rhpPESRYG6EgdueqVz4Gi5dD",
  "key38": "31vy237tbsfcHUjwJtMwW9JELnBwTLsH8VSVwyKjHmxbqw8KUtJmE8GxU2xJt84UVXNDyEe4ooF9CY3qTpQDbwp1",
  "key39": "hMopce8KYVNBD3noo2yK5vu1rrRqL9TSA1ew3WTFGVJiNfwPgiNiH6w7Tg6X37xP7mmaatLEVFoCvvnz8H7WN72"
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
