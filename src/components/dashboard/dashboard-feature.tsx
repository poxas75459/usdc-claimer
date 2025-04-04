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
    "4VeuudkCD4ikE5CbdLBpNEdNQrqc44Ta6HVVYYHZLGqLYAv5R8AuiDmp5cCoiX1yUcr4GgJ3VbA1ommPwtx6ZLF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuqrMKKYX5f5th87t7sae4E2fQFBy3kKKj5Ln23yriMgPLCsDY4ASQBzEhVRFDDWqCizjwB8ZbLBSFEfb3BiqvT",
  "key1": "435F8Nq4NYzinrEcYnoUs7fQWKmsKpbNZupjsYnpukutfXSvsQQdu5pdden8WCWqcBHB8e4feXMnAf3uc5em69xa",
  "key2": "2KvknizhaNHRwpirZ6U36FpHCSA9uTvEse4zh4Vj5UjD8JUwohJT9nXXJAdiJSURQ7B1hz9yRCXndrU8yWX1Fxox",
  "key3": "3CLicKftxGzEdfrP2wJwLsWP6ErzdCoX7WL2CsqdQA1GWtwmTjncuiwivnBSGCXg52RM1E82pdAufhQQ2xG67azS",
  "key4": "4rGEkpw9HJyfmjDLaBWhBRn8hHPivX7yTtf1HiKXczV4oAxFJtso3iQHLAKhi6x9E5NVWAVrgrLJeAPTQ9AAKot8",
  "key5": "2f7R2Sr9KN2zFHce5NHdsSF31ddbtAVyMri3UDUg9UB5AJGTASPhxGSV39KkDgvUMnk4Z1pUfgx4FXfWofuWDn28",
  "key6": "qt46EUAYvfchQTH6vrcbu4U1nHeC3yneX38nANv23wr2nRFaJbeFG8YZhZr7WSy1BjCh1uY62fMFKwde6xEGjNz",
  "key7": "zgPcZTRXvYyVw6EvV2h1ptTYDwnvvvDZjxXZ9fj11EGPtVBt8NDpUaUFShRNxwizKv4Z9Wfm7EdrYfNEmsRmRgE",
  "key8": "668h6ycTSB8pAS2FnM2Bms59kbeTKtz5qopoHP9Dn65Eh4z9n3wsm2wntqPDczFisSBuruwnYkzJbcoztYjUhviB",
  "key9": "2Bec5Gmab8JAQK5aan97taWmmTjkosjjHf9NioRPFF2Mrk2Jk9DS6TGtsZCuis2xqWdj4jZCs977XGTCwjW8CbEs",
  "key10": "2BibC2KH985vQVwb3QQG66W9PPAxiZdyhKb5feQU1K7MvQ7UPqXwxkXsEgxdKmnHyYUuhKuUrSqWdsn66fzSh489",
  "key11": "4wH2Jreus3ubXaVnW2jEKc44GdKR3JN9PSzVKVDZ2gJN1bb3PAGWH8zo3ZTHPnfnJVGRby4mkpSmN7JeJg4ZYrgL",
  "key12": "4oyUjws9bmJmF3g6rrXM6978tDQWzozxLKAZu8K32Fsznw1PxH2b4JWAEuFkBRiDXhBR1VjHCXBwAdc34p4SnAYu",
  "key13": "33ftsGHfkUiDZWjwJBx8FKH1B2sTZb3CnZQ519pdyX5ug6ChAjBs6HMNUHQdaBnz3wnuX5Nc17JnN5f97AGa3JyR",
  "key14": "25Y7K9atHtWf38hSfCQFDRQkBSrktiCA9m7FonMwLJYbDG3M167r9WzKwqdgLLAb2r6zcuWnTLWfVJXJcxaPwd4m",
  "key15": "3uoJ14KEPNfT7HXsUqe7arTUgVefYp2m3VAbpQNRemD5cuPNWVuJBtwcdNe1L3o7WsXSYa4ZJpkDUFFke1pddDgE",
  "key16": "VQAzFyYK1eTAkiEUBkdgWUgTk9pUedPovNoy6zniofDYTdfrPjKF3HaAxrdiBUacigc8fmSUZpkhAt14uo8v34o",
  "key17": "4RZtg736fxanb5SGrntWXqQ6cG4GdPKx2faBVSenBFzmcDy8d3rjJLnVgAsnwqmNT4hdKRpSaLDwdSBRGW3u5ayk",
  "key18": "78S6pq8JkWkcLaRT89SzBZk3bMuL8A9pEZ5uciYHjEKWsrnEevpMACv912YUXgzrL3Zs7foXCzfGXf7tnbZN3Ak",
  "key19": "qmCJKCcrSfTcKfeq163PQrY3rBwzFPfrNXrRoxspXVviWxyUqP2ZxxF6a9LwMujAPdfmAfRDYiXEJL6T41Xkbyg",
  "key20": "5XogqGBCPr5kQNdDvggEp6HvFNQZ8HXbTNaMvz3Pgs5YGMefjXtD3kcKhSVXFwVDLNwg6LURfnj6uB4pWSJfstf3",
  "key21": "2GA4RMWxdBAN6Mi8vtTuaeVPjk3UwjBPiG4neRX2Q92WF1NX9wsn99G5dzRJwmSAk6JZ9KvskxQNhhqNuJYq2sgh",
  "key22": "NUmSsv3GqS72sd8fJJXRn6cBwMKNBHhxYTSH7GF9Cg2s4afTEXesMNNAxjrEtoxKjtYAfsGXDpriJUnmhPswfRK",
  "key23": "4d3cUkkwV7tWhWofP2MbMk6xfezoYxHi3NXXuw8N1tBseYpwBhBgBDcznYHVXqq123PFb6T2hwiwSmJfMhWYxy9i",
  "key24": "2BUiR3jJhcmhD1WHpSppJGHsXnqQAVoSCSeCU7Y7CRGmXiPwecmmDVWPqmjL1TTu8ZAkwnCkQSjfNddzExucqiS",
  "key25": "2WScT5kvJb9LFavDDdh4Yt6wYjXbJkv7ck3LPxvUvyw9qfcJnjhuHj8cripViq5c7BPWu9c4wwhkAehoW7jFocv5",
  "key26": "xScPt1MNVD6DURV9upN8bXDcW9AqZKNRuf7ajMZFvzshEi1CUTBYhSdB6jDJoXoVjktW2TFRA8PcwUpN6ockBzz",
  "key27": "5sFPMEoMgrwukyx8Kvofs7zi2jJEEb16TjmpgFAqG6fgX7RmkybSH98Hx7N5Fk55pv156NkhK1ppafuCHEBDFDio",
  "key28": "2ToYYMKu9NonktvMr6ptY448Mpe6deuPgjQJesjaxnziqawikAk2i8RdXnnzQfsS8M7NbQ7WuJF1WMSpQUg1CWmk",
  "key29": "3SV9oPTGaCf2yoSzgEpjwUTrF3ZFw1Yn8HHGZPDbB5eRtAX9hnkJR6mJU3NLjsQFuLrZQ2Erhr91ZCXA6TgrT5H",
  "key30": "4qH8CVozAKJRk335XDCggJQFEHidtVUo8UByo8rLobdik7d322KFCE2xLHEYMdyRbUL1sQXd2NrZBzwo9JaXBoBq",
  "key31": "e3eF6HQ4yCc3LRkPV8pJ44c1JSrkrfSfa5PGfB2wfvnqKdPCDwU3QJrpQ7BSriBrsyBo61AUf1249E66c1vCqtV",
  "key32": "4J3svedsa8KQPNMiKy8t7YawzmoVPWw19GSfjax3qJtAWoss2e3KERoeDGSD9K9DE4Rvs7nfqmVbD5bAQoeeySTs",
  "key33": "4J2RUnNnWkKAMVvXEXmyj3RdXWjaKGqu72zKHzBs3RXKvpxf9rG6VWS3NaC1XLjuMdEKvUJvFuxsPowMXx7tcURd",
  "key34": "24L7Z27UrwBjkY5s7HvzeU534HFmuiehynfxivvoGtjwfubQ549MZq2dceVa4Y4QHrnfsPWfGnviayMzkfEB98V6",
  "key35": "23BpxmLPV5U22FudUf8EN2bWgoTxeEg8YYqUP6wRdM1nKdpNqLiF4j84Q5wuM7zPEAJdTnbGTx9YGEgnnC1nCUZg",
  "key36": "41b1A4H5MiryfnBy8BYg153Ziiy3BvTZqViZ5ZLofHkEzK8wwmTmhSvozfB9Z7s5tjGEkjs5tuqefQUuBTwtTUKW",
  "key37": "2oLws5kbetVot9qb5YeyV1wuqAiuzcUb2oiBYfQ32E1LAPL1VhSxsGYEg7oAvAY6wYpYYUoJPJzrE8HmGADSRJh5",
  "key38": "5bzMs96xq1Nz3bmmfNWd4kRN5ZjDibmP3zcijdL8oaxDXYbF91daCZnzRyA8YjTNKjppGu19P2xzFXY3GYX1Zufd",
  "key39": "3umcggprrvEQw59Y2MUZpnrRPqehGRdWoU6C9GXEBrZ6fQRwjgPr5GFKbaEzMmHZof6QvHZimAuB5p7arJSvjZyL",
  "key40": "63kXAfPhkuU4eWwi6HSvW9B2fZeY9N3nbaGif6PfKMbbXLevVemjkrnCngetSsBcqzBxdKGJyjD74viSqDx7y8Z2",
  "key41": "3FxTfv4ofwRyERRQqmsJ3apthJwkoB7XHgyQRKqApFdF4zPGawZstybfvrDyw8HDZsn3UtgFuc38S1sPGZVbnW4T",
  "key42": "5T83Bra3NqwG592PM1K5cJATi6ZygpH4rVCNRVqC4TtGRYgP61NnTMKhKgzEK7oVS2fcRcMn3fH2ouH8YKrN9F1W",
  "key43": "25ZyjnBiVxFGeaVGeMJxkyA1iR45fBs9PmFvBi9wmfH8jivZmeaUpw9daHmhvf8JcHhYnuZB8hQkUuLPPkURKZPf",
  "key44": "JZsmCsW4nukj4MngWjbsVSthKH2gicbnG5AeokKJjySRqxsewmZ7vx3b3K5CCasJhjKmGd1EGUwwBKgUcASQbEX"
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
