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
    "k6CDoVeUPB1b9GJjfsH1HuS8FYxBVErP9dTwPkP2zrM6oQjc9m5GtbBWVjD1kSRftKeMTyeGGFLqdDZY9UQkWkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ses5EpM6B8zVPiBE6XJ6w4dbN37xGPgRS2nQHzCTnGCkdLC5xUyJgRuTzdHHaDSsGJTj1aZpjp4Szs2Z4pXdPC",
  "key1": "61LFFhwg2xBMGkjtBMhmFZkZ7QHhqNajtQd5PwfrEfJYVYJn67EnfshDmgMTGZywCefN4EuvY1L8zzkzgFrnXBoB",
  "key2": "YwuqdE4nCk1wMUUrV98bbwBaq2w1E9Q1GR1JwYPe2BjKo19GKdUawp4GxeopKxDL3g8C8knYs6WgrzLE7tX4YNs",
  "key3": "66Sas7xfVtDC9fUUxFQb8Zy5Lbdo9zJmFv6zQRhcN9h1ycfvCgMVLz2YKoifeN1GLZe9Cs9bC8wbVqJBdTtYSPzn",
  "key4": "3BpyCbWjiunJJ321eo26vijKNuGYEmrZPYDxGMaFVgzxiq4cZcTsnNCZoNTmMVZ6PPvo1YT9w49QezqS2nmb5Cxd",
  "key5": "vCaKuUohKCHh5q9xfoTwTNfGU2rB4GagQUFAKWPvcP1fZNWK2k3FeV1psXmDGdXcdokkbju5zjxxHYZvr1fbUvh",
  "key6": "5WCR8YAdmZgQpy5aa1absKVcksntpyna6puLXvKQKk5riP3dQrt96Nahkh4hTwqxvjEmmp1Lk9bmukhrTNGeSQdn",
  "key7": "4v5hKLtUXXJ6NWnneRjJ6M324FA5fhY2SRqWLSAHJPtzcC5rxJCKsr4M8iQV33PBX3UnTFrjuAigVxkJ7J32ijtk",
  "key8": "5GdHBfED6HVpsmeEKStuZ2xVewWfqdGkS65qkghaLwmfNxeWVgu1j9gMuCQJZuw4umGXT7Y9c1UNq5noq85zb6GK",
  "key9": "66gWfhJsvMNSg34Kczsagqe9XQaEMU5K5GciW5UW4V8Faww15HWGWvCySQextiZKH9br4yyzpur96m3gqTcSNojm",
  "key10": "65oHdc9izzvgZDynVxMFRXPy1gqcvy9bFyBxtMUSuvkBMBcvxw8oV1HWc57BxSGWV1BMWWhFSL9AJePnn4P6oF3n",
  "key11": "4y7vsc4HSsCTCZcQv8iTQASMmsoSLARGH6onpvSwfDHYXFZ388Gjiq8YikwS2XHXiMDhaTej3wfUC3wF7fWbecwu",
  "key12": "CAE3jsFh5GLVa4FGd298AyTsDXWvLkQLiHZ8aXDuCiQPZjjaCTJxQ2dfAf53YC5BpaUciU5efSZii2pMuEcqFd5",
  "key13": "36LoAxWEYQroZ8GETUBuFPKiEF9UrWKmXaMfpdXrL7rXDEuzt87sUjtsvDjkdQgMQbWeHYTBbRd1N6CHLSTTbmYb",
  "key14": "251tDMzNKBLi6NBMarvL5VZQYeETWYZz4zyQZszAQj5E88VHrh1hR2f8eq25cpX9G1tNEd5vdy5cYq6GDebd5pZf",
  "key15": "5cfJNcJEkDQCMUH6LBWvdPBkqLAZsXDFU23X3CDKJPLB4Cc9WR3jydXwSMtr3xQXrHKgzHGrSbYW79wNuhHQeAtY",
  "key16": "4iKchSvMmxf7BDLUhHufRB37X47WQ6tBVrCvuVHteYTihscd7aCjGGf4nPXFCiLcmzWPYLJRtob3FBtdM3yPmaZS",
  "key17": "3sPL7zvHPkqcNCjn8f7vMWDvZfXi3TuM3ZoNgr8FzNnYn44wM167gpQnYvrVfeSvqtGU5kcTwNQGFV7mHAKRQ6oD",
  "key18": "57V9JS36a52qNszCjhbzRURG9SSEWNZggastBQaZCj8DCTYbY8uRBqiESWf9Np6uwATmVJJE7D1LbtPnDoiCJNMk",
  "key19": "5Zq6CRfi2W3MReBQzd516EoHG3ThzGn6ZgWaRD9mxL41ET8whotQs8MFvkKCDBMd4KUDTeZgYfRN92DyFoLWbVTB",
  "key20": "4szz8SUHth75GqeJTrmm85BvNqCuaCYWnGzBmpLfwd9TtVDQTk9vkEHYSY8KRvXh41rfh377cUBzGJ51NdckibLF",
  "key21": "2jmVYCPQShNMh4yYGmbgwssFbWU91zNCyD2D8m5VDqVE2WQzrjyvcoSnyzQYjXuX76tzt7K8pyv4GaiK2JsK2yLo",
  "key22": "4o2SK7kdvGRmP2S3pBXLc2hibT4oRgWj3DS5CMec7WAZHSk1biJ7FmP2Yh1pyp1fJbzgv1PQpiBpGoV6thxi5Jbn",
  "key23": "631mwQBVorDan7S2jhdmkF4JE719ovD9FGaoCqK591mipjhRQss3V4LkhPVtmg4R22V3KUDKhzGs6nJjFu9hFxcd",
  "key24": "2MmzE3X3mKDGR9Zooce1TYm12p9AFV7x1F3eE2Gh9vEhYi2MWxKp5ugu4jxUAsK7doMaFtod6PkEgopbLyjXWJUa",
  "key25": "2tLE6qQ2mJFNqfAbYd1vnGQq8VMpA5JHqxH5CCiAvQ1zhBiBLBcA9d4vyLq3GLhXAtjLEF6NfSK6TMjoELzjjcU5",
  "key26": "4MRApoqq9XSDgw3J6sDpgmr5kQEBYM8PRTSwZt21m8UfbbnKwhcugMCRzPAYL8eqT9srpJSwRQd8pCd21Y17qGGh",
  "key27": "2XeqZtpMyDgwd7ufQaiXfUBpATMsYAHPq5yb3XhAWkQfFrjhghpDwa4amgmgLVM4n6GKgwYqFNFzdF8FAdJvYuZs",
  "key28": "5SGGJejqnwyeGEWBCCFTNPzzTgAHRgtnm9ox5peyaqRmT2HkvfnEGKiehuJzMtU2Wop1E6RJRXxDhUqwJZMFGY1L",
  "key29": "3QcaXHKgoERLUC7jHwHeshYMRFerpj8zbB9VR8Rta4LnMTYTkzApCAhP3biPqRxJkyszw2uzXrFPcZtNksEzf39b",
  "key30": "L3SbLQM5avvUwq44e1amEYXYkrzQUYifmb9bJBtqXWbVYVnfXXRk2akEoBthaLhqhYMvUEQ8Ra872pwtwHyn1vv",
  "key31": "3S738LvuXsd9Z5nDndyuvmCWSmXjbjegfjhyqHdyQ3i4qL7pBm6jbEwzzAXreAJyyQn59Ukm49d4iLXyW8nDQskr",
  "key32": "4yR7A2v8FX9srpHcLiP8agZMSFk6ydsgyV8t1dby7eHF3W7xoDH5T4mw7XNVVX6NxRAeCPSbzj6YBm5L9CRvoCBA",
  "key33": "65WChfx4zappnSH1A8jEBDVe3FmtxxVhMZZUAMTQPUPppDR4RZfJUj3zYR7e5mG3z7kasVMtyGsPjhm3ncutdBvC",
  "key34": "5ztZs9d5BgBqwgHtbbBzFDh9F3zUmDRGqfrJJDY9VHQzUnv8bcP7od2jMwqLQmrjdFmSBsgbcXNkoeYnxLvsjV5G",
  "key35": "4hWGLinF29iT1fL44UAAJAkAiQBhdiCwf2B3AiLntJvxMU6nMk3zdK6xKArNumcxoEMLVKVD5yF7TUqEhGrtFDV6",
  "key36": "4ZagYDt7i8R4PtN5AHTgfr9TrJkZNjhEmn2hewasxhkRXf6NX3187MqDxEptHSMsXe8by53yoaWcorn4rU2bBVgj",
  "key37": "27YUWYNxmi1C1A9NfAxxhUuBv6Wq6mfVotJyi7XontqHmcbBq8KF6KacMHLvAhY4wysDC6HoXXuywfxMcxxL6sdk",
  "key38": "2QJRcpicQfz2QaEqAKghD8QL8ZKrySbp8BTcDWQ3L8EtEpNQzqmLY4iQ9tHasnHkLHL4tnQnPi7kVxXLBkCQKEJw",
  "key39": "4FTTKnLbuMtDh2rVqXxsHiiWWgFXsi58ZtkPBVBH74bWfHZHhiPPpHpZseNJWgYKwyj63h2qZs8X3HfRXw8UAVMh",
  "key40": "2Lw7zwZm6K9tpoYezSRS1MPBF8C9kRScCht8wLp4bmT5SQBwmN1nJ2KuKjjQGQZauwkwNTg1PdSxUc4dXSVmGNRN",
  "key41": "2KxT2f5foeyz9vWPXASF5RWwiFEqL2UbjjQzTsSnvXfSEdD7HMGQntKAWqLLNdW3EZeaiqBxYrPu4yN4zmQSM69h",
  "key42": "3cUDt2gU41QF1Xnd19Tfu65mKLiKfVZsuYeuk2Pdn4s1ZtmnATwdjPqHjxcTzcfaDajifhhVuRjugkZAz57t4jp2",
  "key43": "3xsku5RdbuyHN73aKv55po1SHC8na3Z8YXGaxJNFxV8MSEgXTR7YzQz73xpQeQCkZyKLrqPKrJGy8WcbVBJUY4Mc",
  "key44": "6BcTGGGqEMgXXDc6GCbKVaJd9Q9pkDGjJyXU3ymREi64PE2qXDRtzqivVX5XdAtPYXFeThEyZuU1m6aevvu7iBd",
  "key45": "5hykdPk6c2ks4tf4ozhNCHJdRh72YLBJfxqv8azovBReKbxq5GZXj6fXUAVsDFCaESAfs5f9h61SkTznez7xjCRS"
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
