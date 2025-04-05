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
    "2yb6Qp2K68JjRHXjYhMxL6Ah2dVZ7netmxuuChgumCzfLfZTuaPSJs5sHbyW8h8gM3NMX5BQ2NuPMb7fFxAPJwav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eh9ksNcEHZ9oWBwp4VTZ2mzPADQgxzPeAewnUCTbPrKtD41QtNAvnTJDyDfiS7YymMe6XZhhPD2HkhvgyHkkfCR",
  "key1": "3PVprmTYAcSarkccHbEMNYPGTdpa5eTxHeNTznsjTar9fzB16b7gokViHKStTe88KRb53aiQQS3NDe1cVQwRVc6K",
  "key2": "51KQGcyTSxvwSEWkFcj8zXDtJ64BwjWqgFGMDqxVsCehaptrXoDhf4uWio2zHim8nQj9VSag5hETJerPo5Q2vYAE",
  "key3": "4Cy4Et2UKHfxH3MF5Go2xLkBKgZBQx5FiFhkUGQFCdzgPqUj79wmgZovchTeHTtbCTJ62unHaWzD5T9g1Cnmah9K",
  "key4": "4ckkerfAPggZSfxnaqEVe85QXhWhq2S7escGA9Lh7F46EBLPrnKiNaRKhNzg8or5g6fkRJ32rshBGuL19timb5QY",
  "key5": "4ZKGzKfn6574hJdciX5ddXbdB7SSHWmTYDUxgcvcjJmmuooCRdXw2ihDQwn5BFru95tYbUDj2Z24ZG82z4qwa2jS",
  "key6": "4S74GnWQoyuUDDCBEwqFzS1F4phpdnD14UDbUMe8qheuf5XPcpKHmZU3ndZsCY7GLeZ9trKaegrsM9vVEYXt8p2Z",
  "key7": "3bxoEJXgKqPH7Mbr2bgrPfuDY86RrMZy46yFkhgow2Q1CaCLTGDE9LNZvXS1JMsuiRkgRtgp1Ek1XsoH8FSSi2KL",
  "key8": "BKP7v3hLVnpNbRZ4DSjATBFHPsSnuGhY8VspB5GMR3D5s2DQGqhMdsBXjcYWdioyFQB7qQDZskKgPtMhVN9TcWj",
  "key9": "NJCbdaMmZSvqRWY9LmeoLwCVUZM51rehcTvrJab2vZfQZmLyp7GbX3zAGpjbgnk2Cnq5ry7LtKuoEM4ze6kvPT3",
  "key10": "52a7evYTtji8SwNihUsFuKhLwUwbrz5YPXA84fFds4ogDKKP5VTtxkNybkujotLJQ5ohLBKHjvY1N3VxSDux1otj",
  "key11": "73v8au1jYQ5RekrPFiJeVjsNTopPrjTAvEzu75UoV9BKfbBCEzKkNJS4td1VJEjUoo5JSF2EA9jxhWoWGjYPkZ8",
  "key12": "2zkxenXZuvxXq6GntLWv95cCJBAzp3FqsnatcSpFTc3fN9EPDGREEC969SXF9UWBcMExUbfHCGYEkjXgaAHFxVyW",
  "key13": "5oUvpRgg7VTKXCx1AcQJA6z9Gv7M83gFQB2L3d36BV8n8mcAgSgyAtQ2q74pzGfqtFr1Z3wPV1o5xnR3pLCM4naf",
  "key14": "58wQTVNzF7n6DWKiR16qRUzVaTqxgoZDmyz1yiAg5VtviTRCRnzU8KrVbveN3F5vrCgiHMeEW48dYtT6n3CVhKby",
  "key15": "fua9jPCWC7J9tCmRubnSByGmMEYzmT9Ce67J6xCM6kGXdiQmyG7TXCysHA5tp1PCJ8RLLyzvgZzhqBbmUU4miPm",
  "key16": "KzawxTKwJWgLrLfPm81Lrta3jaP4BKUzhkovob2UXjhsqdvUMa4LGCReNmvqLjmTAKi5zvZi5hLd2KJFS6bX43V",
  "key17": "ZN6QK1NqbBaoGs8xH1853FyvJ5QHajUqZgGVH3sEhBjcvMLoq7TN4uEZv84N6pPABWpmZfbA31L8QVAenv5wRNQ",
  "key18": "Jm9tXtcqUsqCQPBjnq9td3AvmYhaqbHcRQx2D9HnuutoF48xeenLfr9mq2S32kwqzKfjPjKysy4RrKLshteqJgL",
  "key19": "Z3yE7L84sqrwWvmXpwGVCZ71XMZ8izkBzgfJWbY12KygEueUZSiJaNYpM9gLxXRTCmC89PT1JkRZhrA9v1fJcB6",
  "key20": "33mJodGQssDCMD44GcczsdWa38R5oYKDExYFBaoCeEt6XDbsmDX1yj4kVeYKD6fMr8whU1vj229hfU3L682QCMZf",
  "key21": "21uV2uP4ozjLM5s2EAxQ5ponDzaTyJxtcaWHDo3g1Sz2XnH7VEzNZSXLMitzkQWn2X7UPgj1izLyZbfMvuVPiJJ3",
  "key22": "41wC54o756NDXimpwSQCfuvSK9s6p3QN9MoCMMHMJAry2ec6PyZp73PZJ2FQ5qdBgRG16AvAthkZaX74kK6p3Fy3",
  "key23": "4JQuTS1VPxoYMekUoELpoSjxarsC3HsVWor4DisMXhtm7BWndN8K46UGasfrksRgDMHxyE4gN9Cg3CfxWTJ4wBSh",
  "key24": "3Rsoa2i8tZU1UxaKdtVryAjb183cMCJXJq2QHECsfLSScaDkv9pd8uvyEGprqykVcn6ZCEhZSv2BUE4kqTUiAVTr",
  "key25": "2uQpEVXfwyQxvQF4BWkPahxwFCfvXvX9bFB1LkoxzHcf7H8bFhmPayGmUMLUMLm1rKNq2UZwmWDWsoFwdnQUtnVz",
  "key26": "4MrZWjgEsr7f8fQh9dhHcqViULNNQh4vh7VKgdAgntm8NNmo1Wd2JvPGS1c1i1GCACndckhogERte6yNRrfNtava",
  "key27": "3c1D77ed8dU3uZjh3hpT4pPAtXQd68ZRutF4YMCChP6kK5x7iDqvrJtsVsPC9t4HgQoys6r7Nrvx1jdz5ojffnQf",
  "key28": "21782fkfnBbcuSFPuMm8iph1sGZvQhAvMUAnZuva94g99xZmy3Lixngc4s9uzg7JbB8W2wDAzv3Uj1L9kNB3YdR5",
  "key29": "2nRRyFnMCU774cSD3PvJe1RTF33A64hx5GWihf7U54xsgJ3MMtoyqaddhcuTbCWNB2VTeqQBUZy8W7k7hVbqwrNw",
  "key30": "3khcFvM7jghHdTRoC37A6ZouEhnszYwGwWpisYaxuYWPsXFHSHDqwkCfG3swhFo8SAB5JuL41AUuSRAieZC81kDK",
  "key31": "4wJXyHtz9GzNYg5uCqFSr6kWD1x3VtbrkJboqtv2Av9Ao1253R9MNv54oYMDbXBLyJgjTDwrkUUZXzEZTj2nyp8J",
  "key32": "HYNXfc3YbVCECStgfaKpHoDMfBbzdeWm4mBN3PtHNAufXVSpZchTiF1XABH6L6sCgAiDB8VvTEU1Y9oLJFvrNNM",
  "key33": "C2dfsfoNiekc4T77cfVd2Fm7UDy9NrxHnyRKQawrhSHwjyJ2dEULKQY4NUGx8YSTkqWRkDsjiszw1Ztg2vHsr6F",
  "key34": "5v7fSvSHbhUPP6SA6hU1Ru5YNbkVnxh9nQMdZUtVhGBDSVdtqsR2iQHDDWE8fGtrEAdbR2DJgnXR6QgPqYP9Rq6S",
  "key35": "LNCQwNjnwqa9FqPt8RUymo4rDgEMMs9nDScN61qhkr4TrEcTmjFefv75gk8fh85dQ1t4rYy2rYWsv2GykPk8vQW",
  "key36": "3BEb8492bxyyCiZR3eixDzjBBYAtM4GbpcL38QnmuoXwuDy9xKzmjVPPsM2wSjn1BetMXFJzwgLEUi4dVHQyd8wg",
  "key37": "LBc3RUFn9Gv8GBYgq4bE7WTJguXwuBuLiKwcHF937CbFwNEnUJ67UvAfNWjxnPegqwjzi5uEDT14mz3mKCuf9pu",
  "key38": "2wEVS3WLknxKmmGKkGmMxTxZ86s9grns1Dt6uMpi1yvgTi18V46dwUBZTUPvBxGSrgdXkCBdcRtu2ZKJaZf3VH2a",
  "key39": "4dTQV7m6xnqW5LyUWiUkU9FGzRf3Yb6Jkb5QjaX3r4gEgd2cfwbe56TZQhShkuYsaB7TXNJENigfG8KCqxCctVkj",
  "key40": "36gJyLA2oMbaLeLj4Tq9b7j1XexPobFwiguRoSHxCts1yibcpZtVM5mTeiQnkMNjyfF8MRRxBg3XZaDMbxsEnaHD",
  "key41": "2yKDjiFxCaunGzuMgkZNrHy8ma5MaHvspMgizE3s8aHrdXGnM4akgc4RMs6SFckvVFhqByRMzYTTmEzBpPEg72gV",
  "key42": "3fekgYSPuJ52RfjPL4ttZAaC2CCmPu9iCucnoUHiwMRjVAMqtvb45WhzCRXT2MRMgvFNXJzA78iZzUYDJ89iQYdf",
  "key43": "5mJDgMub7Mtdso8jxW6pKTVPq8KFJ7wpZCsn3G2FLxmFcutE3DhBWCYQxmqw7JeYKQhqfK6ZY6gDqaGKcbffzCJZ",
  "key44": "443oCuM1mCireZErcV8J6du9ZF5YoFzHg9EZSU6obue9CarnxgBCHS8zFbp1KGBmQyP5Y89XZkDStxs2dAQS7Ws3"
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
