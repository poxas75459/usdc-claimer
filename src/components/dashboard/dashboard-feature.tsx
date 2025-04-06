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
    "cEct6Wk88xKFFGNG3QbiECT1bhhgtXrqS6yyEPi45L6AA9WYkxQuFrvwAgMEi6RFi98G6dWF9PMgRPnFMBq4hVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fwH73b75EMs8YBjNndCWKnD7tYFz3XjLXS9byVLyiC4VEeyT7TR5ygWWBqo6PMQhrGXzGBtHN1uZeJeWgwJ7QLW",
  "key1": "39bDffkBuEfVdjFjErU6r28i6LHpixXk8VHC3UqcGxshXRs4Wi7L8xRtMzc3Tqu4EuYw5T5hCARMDEDbyCMKAi7i",
  "key2": "5C473ZNBdBRBLh3sNUzek3JCiDgE8KSvrpVcQToVPC5pCc7CivSZPCSdSTLtnivWES733GXZqhZkxpA442gt9YKG",
  "key3": "5JUa2NR32AajtYxy8iLpK95nPL7521hu8hhVojQcHLFG8TNKEdDhv69CRsKjwxSxQz4pUNoSbDuf8QBK995y3nC7",
  "key4": "2dz1uZdHSivP57A8GVirh3sbTyztZToCHtehYSWxCtg5zAt6dabvBh8aTnFJ7BBaejH4JcuJb7qvfsoe2w3r3CtQ",
  "key5": "eBFo4TgA5aiZRx5UCwC9Pi2T4xXhAgQLJTxz3AGvKLympeUdUcMnsiPHsGEHwJJMwiVNttHkzD4ooMGELhkT3AV",
  "key6": "5N3UwjzApwMBAX8u4HfWCCRJyzXP7KXKkoVPvR9Z6ma5pTNtyALSMnrx7vmd1dRsNxyo56Cq4HiicyKyxK2REGf9",
  "key7": "uVrKCY5bhdWbJwAi57gunk95miEgyYng8TgYvJ18fSnGw5TqpK63vdTRVs86gmmacY7xjMWYoiepq4TNnM9vU7y",
  "key8": "3nShcRJepVxfhZQ2j6CoMP6HTuTMoNn1Ko4WWG1n8MQs5JeJGihZ4KJVLgeUj6P3PbwgVseGcHWqCaMV3Spgm8Fy",
  "key9": "ugr7Yd1Pg7SyvbkaKKozA6JDFUP8CBPDJvn7SuUvafu5AdtU786ZecKMb4o7a2xMSgeBziBxTMTcKSa86Lkmm3A",
  "key10": "t2efHiHf7KXgFwKLJqwjEpDh9rk9c4Y1qHQVueSRAL7sTkR9UyLku9MpTsWDckuLFFFwGxX1LDWFBnBKbEJfYuW",
  "key11": "4KzNSwdFqUN3A1VoUyngdgAk1sFngoPcnHAeTyBxxHaUi14gjvEji3c6Jx6LB1gBFSNs2EEuE9JwDP8YHqYoA2jU",
  "key12": "SqrFMAQe5qKD9SssV3mE1Fw7Nt4oEcz5Zy8NyYReneLGkMaAfzBWDXGoh7jbVDovtB4sPnTXYz6ArgsnpoNYeyw",
  "key13": "4AD9PR2fWF2PHV1v51W2wVBJnk8Wcb45wAMVBNit9WsYuHekzXzLxP3pPQ8kt9jWtSURrKNzRsXbM92JfoNVbX7V",
  "key14": "3agaV8m6oBZLfRwcLc8XueMGN2XGM2mMfSZCTF1sHUpBryZEZqdj6V8sQhYsuwC6dNdfv79dveYvoUXhTL35vHr8",
  "key15": "444mKYaYo6SmgmhPFVQEgr5M6UhPUSqiwwRGWoUj6eegonEcQyJa9qfJQbXpM8iDKTVFyR5DbgXPWFKcjscs5ggT",
  "key16": "29R5vCNSPShBNitwqFqjoYvewkoUjQ661cQcLMXV8drZLTxPYgPik5WeZyA2tCqLoKcpTaPQvCh2ZMGmwtXMwyCK",
  "key17": "25s6fpb7ackRvmXPW7ViArRE5KTzD4CETL4qW4kkpidF147ziy4fzp6NuVYthEWH8fgqNpgpJMEY26H14X59zGA1",
  "key18": "5m7ZdoKkYAUE1P7Jmm1vN8ZWwYSsNrsrt3YMyWgRfz2EyC2CfSiM9RXX8ahERJcZQGwHWwqPgEjhSC2EeJ9VoLyM",
  "key19": "3PTWZxNsNitSq7yi8PhPg9Y3Ndq929ckTz8Tz5A8vYg8sfMQfGebyUXE5jRnP2ka6gB1vxNFXa7qUyXE79QkZFXb",
  "key20": "39raHhBVfBmoatxgWn8tAg55KDHBjVwamviV6p4S6YGVR5x4o1MiR7YnPpsSQ2mMaLqgf38iDni3bdbXHVi7XZXc",
  "key21": "5vYkd1KMSQ22yMtMwLwE7PSZ5hqxzqkgwRqoyg1QxjVynDnLFJm7pFp2vutRoecch6czkAtoXjC8FHvYwJZYpJW",
  "key22": "3Hi1DzGAPqy2fc4TzBvYekoDQ5zkXnoLmBuYtm6WxH4KNXa2q5EYpDmxhG4ksc3qK4Q9cNgP4vokPUhkaXrMpvZ7",
  "key23": "3RPxW1EqTFngntFU24cq4QCsgvJGThAnN1wyLunDwkHJeTqXVaG8iZWPqguQQAqWPAicG2QdY6vySztGWj18LaWf",
  "key24": "2HZ5JHBh6wZD7rhTy9bQBKqfZrBF8GbjYJ4CNcvNG8B4JC5SCrGv3xgdUBs4MH2wffqUAP64hJjKufxgYi47jCZp",
  "key25": "3Scjy6zGfgFirNdJ6kJzWnCt11PQioGuMJozYsc7zwdJjkYN4inD2efHutML9bYdWo3c94sns9tUbgyfmzcctnMs",
  "key26": "38D1Gs48RmJUtxd5QzLxPzgj22NYLpCugPdfbZAcQWtod4ko8ZKqXnTrNZPm3yipLkSwvM7mYG3NbcGuwEi6LJux",
  "key27": "273ysLtTCTM9iNgj3r1rfiuWzFdztghrWcdRJJt3Kn118nXFe2VtWQq4SjV1ZNfmbo93vmrywUrvwJDNqfG8NTqH",
  "key28": "FCzJ6Pd6pqsWh2DuJ6tdtCrgoBYHDYt3AHKdriwM4LEsTMtBnUf9DRQUeL8BAMZzKnGoHoBA9Abck5rQSvGcUbC",
  "key29": "67ngQ1c9MdWcFwt1aUJ9rxoPnZnf5zyapRHcwZhSwozrUj623UzR1veN1hdiPFWWMwa2iKU8ThDQ7iErWA6RvvQz",
  "key30": "3tNzEXVYuqGHgN79mYCiuPtKcZmLXWmGiCpH2DuJKwXPq6h3kjChEzfHx5EgZwExg1LFbVbk67YabJaH5hmCyEF5"
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
