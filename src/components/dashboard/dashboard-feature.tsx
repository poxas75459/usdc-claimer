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
    "3t36ZV21KWEEpFhB5iq4nvCWzgeDCzmRtgRMXTfWAkdzstLGibqEczQqwaA4my2s5rVjXjG4Tk6yMbwy3qvrMDsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CmBxSuftkxiM3toby3xVDjzwakZRtbqs71RbN88hVxcYNZghtkiBE3ugPe2uDnqL3W2iWijoQfdMYM6nuj8PXRv",
  "key1": "2cTmznLPDfREfXjUmqBpBHFpdYAFdxkxLHw8vENroTmQVakAMR29Fad9PWdSjzzx55Y2uiNbY3wWpoX7h4eSz2w8",
  "key2": "3TueKehXsBiRzbv3yne1zwrVJVE4MdBZ7NYMPAMN1yxPJMadp9y8LL3PKP4dzBeAPjPhrvmbwukPgJoKqWSgt3i1",
  "key3": "46ndxcUod7JuRuTJiaktJrV5iWb96WMwbySAN3QrNB168hsCh3FyEyxrVdRsahk2Mk95TLSiXpyUopwwR2vmYid9",
  "key4": "3tNhHp43485T7zM5tTMp9kKafNjzYqQmEyz1eyp7rjGncD3wv1RsjFzsqx7TfTjvXrrUh3sdh4KWPWoWeSnXih8K",
  "key5": "3wHXm4vsQjGfsALNMjawR8mtYr5cHKcRUu49g5nELRzUMt4WDWnc9iwECtjUf3j5NGcH3aHZKJomrdqzurMFwA2g",
  "key6": "3JkzWgHP58oFQzenPztwVWZNknpiZvdzBNHevZEC6t16jFLbCuhZrmQeXLJyJoHSz6ZkhByU7EHP8FTjjZzNXSpj",
  "key7": "26nrAZF2x6aNVGwpo8o86Gkin1Zvc5Zt25ggvY6gvyHqryVdryirsmj96WNufRqoZwH2T5fXpi8YLVDkDffhStki",
  "key8": "3fVm7U4GxmGrwb7kqpWm6UNqAaAFpRjnUaYm58QtMqYKNoUe55cPK5Pvnf9y9LYvzUnZEjj89fm927TTiFQT8ah1",
  "key9": "39D5kuXZbM63W1mYWi4F7jHAyFqohUnQ2cPfkvX3ePy6w1nKM1sKFF3XdTUzomYa9myex1Thk2E6mpxBY1JEDrBq",
  "key10": "2Ky4mZaFcEmofhsfH1SZEXv5qJySL8hNb6Ntid6HRZ3ygC2F7e5s4pTYHzot4pD6VZjseThR5Dk2Z7KT83xvnMkM",
  "key11": "4Huz9nAAzakFnXgXUgPGruGGLyys6PxeTxk9rvo52BzhTSZSg2VBTdxRpTGiomUXoy6BkWBxGQotMSqVQjPoJ17z",
  "key12": "A8VXX5ieWg8MJZkBhEB8h1YT5Txgonm8v4ixVvofBbyYBDSrhYHXDaG2bsyAvSeRLCbtNPMPgt4LRW1QzfB6MGY",
  "key13": "2WMcRD7MKWaQKW2jxERXsnNamp4uG2XicspuckVeVNR8RX8ZnFyFDeGgsF8JAsDRCFHDjZTDsbjirAAtQ69pZnV4",
  "key14": "4fEs2VH8qJhK6knUkA7TwrZ2PRC6uTtiPY7Sro5962fgdAnXUsAc9bUmKYEjfDoWnA84imBdUxC9wgRQRTbCPu9F",
  "key15": "2U4Kww2rd8fMQm91y4zY9JjkLzBtaGH9QWPXPwoLfxHP6UJvrrMDAhtvJnxuG4VAZkXWNN8Pmu8FyTKco2ZZTixG",
  "key16": "4pSRV4oU7eeq8zRAFquuwMrEY53nSv3NeGCoZUKDH38Pkq5hUqTDNMhDjTsVPFDCFFFUCxBS1m5pM8NxV8ZNNMRi",
  "key17": "3eFzhFTgMTwkQD52jAbiCU8fBLUb5WTWZoPtsiozgLPC66RVr2FHDPyihezJ8ZrzfcmMGJuPFv9zX6qDar9wEDay",
  "key18": "3trQEBwmsTgSTkn76QKXZ94PrGzAJtyA6bWaNp8HRcTtArGJ1WPjbL9HoiVinxABmq6raqKDdN3VPQcr5rcfuRfG",
  "key19": "2AxCRiEeEHRk7mv12YmbkhteevBE1joDAYZvaxFM5WTjHcWtvojKbfkf6yYmkhwufEd1dtFvxv6TA5dtG7hHhN8z",
  "key20": "ntA98EutKQJRqPZtRR8Ap6EsX1mi6d4rvv2b3kzQmoMMrns9rEstPaAg3AMFESxS2LLRNHhyBxk1sXtf21BeESH",
  "key21": "4DSH8gG1ZixMi1HKCS8yyPhnKLjq8D8PTV3PgAqEZKSeaEHzJ4n3aUV96C9LhPeDhpMGARSLwsggV5fCk13Uzpte",
  "key22": "3PoFpTuPuDQEUjwSYCDbi6AMad9PPCbyHX2PzVRpMDzPPxLyf9EBAn5TAfiz2q682tDSxC6CEyXuSMDo4k6YK3TY",
  "key23": "3QuyWUBryZdCNup2vR8eQKb6knf34YwiLQncgA66fDj7p5rfQPa2DzGERU6gRjGTXLdCC3Mhu6wEWe4pgyR4kkoM",
  "key24": "5ntC6J6CmCTC6cg6RTb3ahSD1ieg93EquAiMtdMFb3fNrVeN7dczLAtDbDprR9RMWxGrrKSuGKcMDJUNWdspRLwX",
  "key25": "4AYppsCpJQtWUN2Vg9RXT7ZLkJnHjRaDHsamSbhpCJpgfrzHC3fxJ4WiQ2dGwc4pdMSBC71VDMWoRnHd6o3RU7dm",
  "key26": "2FKYHDnZEx6EgmLYxyvqpvMUFJ4raFPMk3QqmeFh8aCempCHXuXB69ShmnT4A7f4m8CXGFCrTgQJa1EUjKGgK2Ng",
  "key27": "4SR7aMCYse2JDJ5T76pya2KPpRnbyecthowgkKAD8kSMCQeR24LPQvRRMC6e2VTec1Ku6WBuMjynEGH7TJW6znys",
  "key28": "2urE8Sm24o2WU3bxT9TGntjjomWSKV8bKa4catiReFtKkLSZMTsj6mBCcxt6MVhwJHpnHByqqjptGGjnTHLqrZsW",
  "key29": "2y2TazngzeZR9PkFk7TZcYZYwDttojDJhgEA4mhHo9uh9BxCjLpPDvaf8FCiK26n1Xkcp3zKsjYYS9roTzSGKYtj",
  "key30": "MDdt3bqGXrmKw8N2wADLqUC6qDEWpzBg7jWDAGgYeDTNT7dPR1DpedgxYihdJh2iV552aejU1GDCUaQ55F11NAe",
  "key31": "5wTCpEUQyn36KyK1uQMLhwXoMvn39C6KqtV9cQ4t4KMmvumyJDdCPPJmFdhbuhweVQ3NsoYLSQ2iLsRxTsBS8fZu",
  "key32": "2DUXRmfszzjfhbqjzqGqDTzKSz4TudErWdPpmXGWPZVEVvnqaVnrqV8coMMCsAKGgeEwu7xejQNkbKNk9cMXR9pA",
  "key33": "5gjnLfScwUBgKrc2jUTmaHDw6M6LoRrpJZtdQHrdK1FeL7Gpph7FjFJs9hvvnNLF9io1orJvMV5r1ec7qaT7BCww",
  "key34": "2RapbmaKNieuRXWiByW5NsxD7dyk6iX3evKY5juUKpKCzbuwB9uu6f6vkTRTZCn7UwjQXRDXPg4S8p6CYmWhnLPE",
  "key35": "2PeM3UPWzTfcyreTx9krZsxvpe1VoSym5ntCqXc13EdAd79arPdQUGhR8vgVpZWNihaUdo2uLPjb1zY1S6sj585o",
  "key36": "484HjRQZUM6G6Sdkv7FM3YmZT51QiaVbRDr9cNwwvyem3NvcUYSA3d9hT5AAWZh1uHMJKnjSMYQGM58Pt6K1K3yd",
  "key37": "T6ZZ1nzkLJrZu8tMcfXnFyrBJzXLCiZTJpEcg9UinBCeeVE7Zjh7gzA68X3po7nbXQdPsMfij2aAsbvnhRtiz89"
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
