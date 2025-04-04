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
    "3TTxGb1M3gPJh4XosdvyMuS35GpiDqEjZQS3GVShfHJQzawzbBiqyyLmnBh9d8CZvvxg4HZ1G32qvQF5AFe6kdt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zdDLqdov4jnsb15cygdTy9HSsz98i4jhFtWUqcAzSuowQjdYqGhNZuKa9cQY5mLXAV19qPSUHmMfQEd4K7y49eW",
  "key1": "sPVLrVPLTrJ4TPiDeVCAfsehVY6h6gyMNKqotJv5d2Xf5CXKsvcWPqJVN1zisjfhMEQPLNE4fvJ82ckaqhLpo8i",
  "key2": "Q6sVhUimLCFR4XAWr7ykYB1k4KZ3SGzQvaXGA3kksWvEHq42NPXQmpxEMw5ko5TZ5iTiPDo894nU9495brHyBxA",
  "key3": "3RdDS6D9hrRfjiwam9goiGaSBcNS69y5so7CV6QWFUPCw9pwdrcyPAFP5RSJHj3w2CxqmqtjELYfhdiuhDPCdyW4",
  "key4": "4V6Gz1t3nGeSyFcyZLUkejLsPJrsUH8Ck6Rg56FF1aRafd3AhMgioTvZ2Jnx75anabKAA3xxe1HrMUNvaEUwvo8i",
  "key5": "2vXC5Q6iTvDBaUWgXtudPuJtjFmktdYqmDr4C6dgGopWet2FnpzbuuK8nrhE4BGkSkYoeJKeJpTEwZNBM6HABN2w",
  "key6": "jpsLGv7tyGM5F1Yriipi3hygB9GLKYRv9LNEYxN3B3hh871frSY3Aba2boQKu8rqn39YpvryCi87aguph6R1d3V",
  "key7": "3vTyRbmXjMZaxmGg4ZvdxGbcDVGfTWkMn4kRTd6QEZGvYFj1SCYDHQcBMJhHeiLMBXzKhwcuvxewY45asZeS75q7",
  "key8": "YnSjBLZQcbYLPmrF2x9Uxm7putuWmxv4aRix4rec19u7S6kNbrrXq8vixme6jKunFyHimYe7HUc1KquGzYgmhft",
  "key9": "4nweqA4kWjj7w7Ypxo549FDLz1YcnK8u1FFWabNDd5ZNFW8ndHfgv6u5TjSRzMjX68Veawkn392DForq33siSQzJ",
  "key10": "5oWZpobaFVQWUduLXq7HmywaDJgzSfRTwmEVJCB52T6ZJVUsBjhXBV2ZPR3LCk6ZfdtNi6F1X1CdJwNwbRPjUbDr",
  "key11": "5nMz37Cgicg3MP2hEtM9jVHarTwwcuUFD4LYyzxCMLf8FxYMmHpGtZ3P8VuGoRMtGg2J2Rmjv1aWov4PPjgZwaqo",
  "key12": "5NxB2WAcuGKqcJj2hq3iHddCXMoMyGrrnN7DhxjryUhgiTTbmMxwEk5D9VRc2MzqGRkoLEvrCCUoX5KAJgivswcc",
  "key13": "3q9Ah5MnvTk1tPqucw1N9iHaanXXdjP6tdHHPZ5CWHyEjiyHszKnKfdBhFWsQaKvVKjc4n413JS4sfH5uC4iECgC",
  "key14": "3CKZ3nNzqXmRPCjpfv7hwuzGRJf69jckoTN2yeGLKTcGhE6XCffRTMFxTcwdpJ8Aysxb3Wh3CyFbQsmKCDvo1rqA",
  "key15": "5csCWfLws8v69LHw47kWjTPvF59HaDUzNusVTg7Lz1fcyPX54meVTnHd3UTNgDHSYp3o69EzmanxRwqPKANRbz7X",
  "key16": "3QeUFD6cHiYwSwAVck9BDPzJHScT71PxYMxGVQY9zWVYv2uDFrMNr3hoEf4xuCUtH8T5FX8nqDXMDCvhhNy8pASa",
  "key17": "2XkJrTNhSCJvrmNBaejthyNmbNxdsWui49UEJXwN5WsFmsF8xhrGy5kdZsVTudTNnbzPCJDtpRx5LhAUK8xN5Xji",
  "key18": "5tHF7WUnguWCqczSNEYQCL5UM6FJaXqAdL2rvXzRHhUiSc7NQHMfY5TabZM9SXPxYb6rvvy6hvhaT292yXMKqWDS",
  "key19": "2H56RNx7g8xzfk1hB6iLiGU4RMWAxPgWu7Hf9yQStCumx2iTi5gPZRtwSHJC72JFyiStnafjyk5AXiePHGmCeSSx",
  "key20": "2qRwgESPmzjhbzV7EzTTodbYAyvYscbqBkRgmyVSXVtJWSDQckXWHMqFYFGBGUdbmBgQKQ1ZMoK9xYjj62bm1BpX",
  "key21": "3e1bujr1rzNHWs7qdViMn1cge4dmTUabJ3DGqZQcuJeH57DbLBe2Dw2sQNCj79gB97NeuuYSNn6ewVsUASELExPa",
  "key22": "54YRZjRE8a7884YT6x75KxqAbpjJcVJbAHPNRsbM5FnLRKKQsuYcmPR1BsXC5s1pgNJEcpqGDWej4GxfkJHdZH27",
  "key23": "3XKV8hqWpM7wvraGuQEPfmzdRVUsEyPBMMEpsdFKi5VCXn23CS4diMAmu9HZsJAz3gkMaerEQix5LjSk12DMmmep",
  "key24": "hujriDdcZtGvK2ds6sntjHpyxXPBzKP3kdTk7G4huvfjzj9xUqVir4uX7n3ohybt62fqcLGtxSDFJRg2657NkpB",
  "key25": "3ARhxQzkTt6UHWbsYU63E12DGJBktxijvmiQ7GjxChnsJn5ddAjMpksi2g3endaxihZEUBaNPn1qafxnL8ssj1SW",
  "key26": "42kr2M3U9imzxEXRdg7SSp3QjQsRNv4pjUn6SAdZTQzxTCVMQqs9DHT9ZTnPpvnyjsWt1RKXmAQYwh5FYU2Gxn4u",
  "key27": "4yV9NVDdq5S6611rwhEbPjc26uTGbQaN8PQtBUNKo9i6va9SBCguTLyuNqp7hJS9WRE3NwtAwnhYyL3NCPK6VjwH",
  "key28": "2n4nQZJBsTV4dzoNKG4J3W4hxqAViAQn67HzKDm3z3Ufyb13Lf3N5aeBrSgjaruDft1SiLmxmcdgTxnCPeVd84Tg",
  "key29": "kuPCSXK1SvVzKy1933NibgT95one5qaV7ZV34d8EkWLMqe6dyLa3k1UHSTzswm9GZHwyqnRiPAR9bqZsatvCqFG",
  "key30": "3xYrYALcL9visVGkEkioH7u1mxz3khGEGcboKg9343b5DuWYdi8WZJBR28BJV5WzgiLHdnVejYZzRxUrR6PxEuXx",
  "key31": "nvp71M1xM17odAzF3mfNw35rKUZ2rLZDJh3ov6P6yqkExYD1B88sSoe8Gf3GhKfrz21uKzx48hoRjgK5rV1PcSf",
  "key32": "23WJixWCorq7TkiJapuxXnFQikmavmsm2Ana5r9cPr65Tn7AiH5wGUEhSH2N1KFq1Dz6pNswPBKHocSxiDKC2vZW"
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
