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
    "5BSDvrJVTxMczhacZ3PkviMnruyemdkRT71ie7AK2Da7wDWQ1A64KcWkN4M53zDCHXg2qJEe8xCDPT8kTqMeznff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxdsEw1tHLEgLatA7634W37TYAdoBy47HBpzWRRjrn6c8VnGtkfnNAKNPQx6nLmfLzpEZDtfTp55oWuojFJZV1k",
  "key1": "5oVsNqLUjepqx6o128FG4qqpygTdaNVNeo5GjpDXccqxD8kaSYjSFJ9syJigyWb8xvr3h2RcMcFRZNmzLtRSHaAp",
  "key2": "2JNf1RsgYY9sToKjWp7an9vwfYAdTd6yp4jrUSDELqdRsoGmpXXXABpWxsm5BW6J7AYp82kNHoy94ee1bj1yyPRz",
  "key3": "47iSVCN2juzWpyaAAx1oKUrjFUJS1De3ejPwzzH6pZcC732rGwvJQrxuSWArSWyJdcRG8R5rB4y7G9fGfwWYo4jt",
  "key4": "3mAbP9F6A7Uw4QuXMNcoMVeu19MDyCoCEwv53YEDfQL7N4ayH6zjXkL7L9h1MowFyTSEeZz1JmXN1nHugJQHTGLr",
  "key5": "3yegFDZAKeFcARtxLYmgwTJPNJj7Lt4eVeE88jQCMKpSXdS3KzhUytPdsVurR6Vm2Ze8aMQtZMnKphMDHGC9mjGc",
  "key6": "3wcQp2gskUK4g9bqJXT18vY3riFRbbcm4qd4ZNfHtafALpw7pxLadxPwHqneNLBKMG3Vk5rSVu3DbrNe6bncfgqQ",
  "key7": "3fmBnBVWbmgRfRmokNnTYqV2wKiV3oeNjSG9of22nXpcZVNSHmaVFJxDYkcy8SHvrLnxtfHHhF9QM8btmTEakRem",
  "key8": "tHeZcbcitnvnDoqzLfSHgrj5zdCMAdK4mgeKT6ihmwzXrd4Ub6gELdCuXz35wHq3FU4vcjvmPP64wRpm6D1pBQk",
  "key9": "3dKGHy75KTNysPsGRLdeUmrVexcyQH89XYQiLbRNdH99rkMGSsuiTpkWYnUV9Q1QvXveZR91vcnHFxAcdcVTev3x",
  "key10": "4yeaE38N944MYTiLP2eK13WywFBrqiyfKZT3mwocucECPBuTGNhmneyDme388F4NXr1reXqFWBGbtbRHVvDs8NMK",
  "key11": "5wk3gh8DPY6XsfotK3Xr8kM4YpGp1WQsc7zusBTsg2Scq1zxHik5ZvEbTnC3q1oE2pg3TQdmMqcRx3vmQb245hai",
  "key12": "ig8w4c84fS5ZQExcCDriPkWKH4cEVNNnsMhRJNXij9X3c1uNTwWMFxF9wERJCeBALKgwX2srHR6xDeL8rYcSEb3",
  "key13": "4dQs69uDtV9eH8kDbcFNKFew1t8je3BW7mQdhTqFZpiwKNaycXADXBgvPLxjBtwg25VUarJEBsSSwXyy6mTjwdNE",
  "key14": "2uDhwAJ3iJC8UYgtQG1AuosYDY9ckATgJn7wFspNoCEzWYzSw44aXDgob5uUSpqBae62Knaj6288WDXM8ksk5Aus",
  "key15": "p8i8d6K4Dpmw1rEMgEQ6TiCpNTSJB5tpKfBpKL3x36saB5orvpZUnXxCtXT93JSDAmhkHQLJ4d4vfEGq564tm5E",
  "key16": "5C6836tMKqqHKKD7oz266bFv1PyU4k1Ed3C54xo672u93kC8dmHAmCdPBVrQ9EvJgmcdv6u4fYeiYa5zpLiH8vyg",
  "key17": "4Arx4XQF2iH95ZossjS6ndGMZNgG7QHRqw7vZKnuThb3SSUpgeRS4Y74QnCLV28vFCJnZxv4fybSQU1PQqfA2buB",
  "key18": "2vhb5SjGDy2oxH3UprtUrDdTtCkagoGKZbB6vf2Cfh2AYbHKpooKkugDA3ZB26e4WHzrJsPso6WLV5AcoJBKvJqi",
  "key19": "2iDCbcJiTixUxD4wbPwXKu4b6HicBxnofSZDdfnUfJmti85qfKsnjQm46DDWC7AbEvR2hJNKTeDWmeye1uW1u9hW",
  "key20": "4a5hVZrGajrfbjACuq9iCBM71qix5bADniDnAjkZT3DD1hxTbcwvz5kZBWNTKHYpB5VWvkyvvfJd532EaxSHBAnd",
  "key21": "3LfzB8RvNR99YQoqR9hxdBBChiiRozhHF4QJVZxLQkP9TrKU8vqm92n9hdcudHjM4cKpLbtnG7e33mBT65jQHLq6",
  "key22": "3bVXoLu3XWSABDzJjnxmnNF84GhtF9BewuPyZ4ZGKnWgVR4Ny12taqqo3TnHq912H3At8fdTm5KPc5Q2P5JXqZb3",
  "key23": "5MwcrT9PQX1PzMhYKD2Cxiq91TBDRRQAexecNuJ9qETYC32aKHDNwKVQdDTEJCEDL6DrfABPgRPmSM1Dm5smANDV",
  "key24": "5M3Pu5KTJ6wPSNmryYdpRPG2dmGNZYQSx3pSriDBXDnZqZpjpq7mrYyDMW5V9QTB5GavxXRVqu4ytX9HbDENThgd",
  "key25": "3EaJYG9AT2ejMsjtDTsJZ8s9fDyRSDzu7xMCUMFw9TVoEnfnWA4KyjhD1RTv6oYpS8FUW2gx1FhVzMknVgwsYuTe",
  "key26": "2pwpNzYvB58XJMapwYiMGVyoavvfiN2KLrHUTCgskoxc71onkqG1FksgpHKXaVGP4pJBZid8AUKGh4L7QPYH6Qqv",
  "key27": "2QSfbkCc4avzvitHfaPVE4MrGTbZ1PYiYwAwAu32DL9hx7ENqEdVYvpoXj6apZjnMbaZG37T953QULobXL8BzA8p",
  "key28": "5Z16tpvAm8DTqbNmWNvr9haQMbjq6tXGV8PUxmvSjBmAg9saQeU6nMHjjJEaLDw4c54UC2KpGGF29DZ45i5a9zxi",
  "key29": "4vgCurTbqSvj2NepbMTsSzrhnVs1iRdfVbXxJwRfdeBxM8aDSXK3VqwNaGgWHhifJa26w9tuGy9xu9ZpbDa2j3xN",
  "key30": "63du1UKy5sZoP8tuKuqQXRxArxwweWWatFDBjcpHghFaptxjYUGfxrjzZ3X5ZpEjrzK6Z2thCK2G5sQ9RQ13xcWA",
  "key31": "3YKudEoVqd8eTsdM8PFSVArxnvDkAwEh847NvdzXAbxhu1eAyLuUFEQKFAnGqfGV7RNXAE58aQSq8KFLZWDFZvJi",
  "key32": "3zqqrUdE3B6SkVKFKJhZuaqT9y8j3uvbJ1nqP4af1X7oJ1t2p45TEgYhGDCDntyQgK3bT1LfucUyTxwzxH5ZrtNA",
  "key33": "4JqoQu1R4uRkd4AWQufhSdiXSgCaqUo7bQ28rK2Fk9oC9DrpuNk5ZgsmvMtFyCk8G2EhAnnPQo211UMoqbWsivNA",
  "key34": "3pdTPVQdiNquTH1gFPAzs5QfXro6foSzUtA99NcMNmU2AdubbWhtXhwPxzY4emw5kwr95JuPYpJsxSmRmGEioFAR",
  "key35": "2SvX971Y7gHpn5Ffy9WRTndbeL2LAUi6XXrLFiFHZkDkzLhe8e4qJXc9ckLoWDwmEthvhMmVAjoQkHariSQ3AXbc",
  "key36": "jZuf7LJpimbmQZtn4CuHwRzcYo8aqVyBobHFkRnGGWvv8PpJuHTkqyz6z4TaD7AGLebSPZ7nqTxXCZnGzPsJ9Vi",
  "key37": "xsupYNyS3fm479YuQEtBr8c6mS9K7ww91c1KaUwgKRSfLya7s6F9WaqZzo6PiQt1i3nzJ7XsBKKv4xJDNfEsNHq",
  "key38": "3K2cv6HdvWZjX3wwC4eUvDMLoPgN1iPH6pDUHzMQsGHXFsGNBUNhBKPwJkdRNrWEU4fihTQkYYEEuJ98owx8GfSf",
  "key39": "3kGLSpfLXNkwaYadR8vg5JWYMSUyccSN1t1X9S6rRM7ctUw9WUK1k7ULe5zQ4E6Z2XeGJ7iLGJN3TvoumQ3VvNMQ",
  "key40": "45UW2frUsxp9Ez5qy7miHZ2tecHWGTR1Qp8QtqXxqk37xFaLBgqbTA8T5bkVGdMWKhfVgLWjeSB9VdmJiFwv7cEU"
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
