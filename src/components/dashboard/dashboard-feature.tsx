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
    "4Vq9UvanmLmcUjQPDyVo8mPDfGrCd7FKEqEUXdhdUQqY1ujCehzydNTqQch53JYAcgZj7hYwfefC1hJBftUiLSph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SKokxApuwuMD1Go1fjPdVCQSshfsfuXssUjBe3FjBugDoWQfQJtvk6xRrsmb7iWXk31w5QUSavGYHReetF5eiwh",
  "key1": "27kv37Jhz3rnkXMWerJNw3cMK3qijRKbyMQhgMSJs9gJeu1A4tdoZotWzvKESH9yjwTkuojJzSed7Jgjc9stLwmy",
  "key2": "281EJoX1tHPBZWS6bLWDUXd9kD4vv7ceKDdJcU3smdnKrcH5yC8dTPjwZoazGCDc9EuNsrSCyJAE1bkqrFCzAtLw",
  "key3": "jhi9XWNW7mjhD2Agg6sDD8KYeuTouUuuYCjTCJqECJB3Z4FR6m7tvrDWAEeXa5QSVBug3wUFbBgDGScSvAgNRAg",
  "key4": "3cJfgPTVVuzUnma1CQyvveyhYMXDybxyw3qArRx3xHdPytyMesRbdsGXn3LUSk8BrcjfGwU8R3wMtiLSzeancYr6",
  "key5": "3b1yJULdLsky9jovQPnnKz1CL5YXAoCqtHYq6RkGYAR5jvwDJKUdMZM6YRSS1zRqHRLGdNoU42vmtJm7jWqzX385",
  "key6": "BjDPzPCRPQzA7buCiHP2Mo648A5TUo2Pk51594YUExVcBWJTfYvLbTdWMwxjz157wJenFDeiH2CDrTBUZbh9N44",
  "key7": "5HqWJS7YdLiLvbsBL5iF9J2j1rSYKqKDuSdDfXxtfwRy4gZwXJ3xsJLNZo7HFkSWEQDjjvUVyf3JehUqxwJXtP4b",
  "key8": "64MChTDy81nF7UqYkHSjJvLG5ChbNKUqCv6SyoHmWcp9CYPTZm5iKrswP9grKvgT2z752TxWKdsY8WGN1t53TrkM",
  "key9": "W2WYG88ceQRjrw8CeHwFB3Z9oESuepPaZGeZLuWqD6knbCLNgomkAtVXznebyQojM7UuxxCs6vJcix3NpzHexSE",
  "key10": "3qnV7N6mfEfzv4Ji26S32vrZV1CKScqFQhmTgH4qHWwUhSceVjyYq6BJQhn94F5dihiYikzrQfrx3SFSdVnS87eM",
  "key11": "5pHp3Atcst5J2JQkfW3F8r5NxE2QpZcTYrtcQHLN9YpPXQ9GzbUQ2hRE7DQxRn82KvZDgkToBF3hzRiJMP7b2C9H",
  "key12": "2aAWQwRQ8WhWT1r5CgNEoRLDJVMsN2NvMKaqo5Qk4gpeEdokAf2eUdEdiQmEv3qGoXwKUFdxMXCJxGM1T35LwBKj",
  "key13": "2Jozu67qxYxcBZXgmjhFAswjnNetj9VkGsjBU1mdXT5yvm3QLQ8jmHsNeHoHAv3QRMNXafNTZ1FTBu8pVG4tctFG",
  "key14": "3hwi8Cb8b6R8BoMyLowuedsPyB7GQkq1xTL62Xtt5aqc8DFsbuinE7sFzXgJ4EaTVyzepSWKiV5USwdphcHFqFyK",
  "key15": "2cepkRUX27WLAdaMQiD8aK5gWwZoCMmvribABBZK1KJvEoyaW3xjjwoSGC1nxJweMCpdwjhdHEFnGCLHCrb2uK9u",
  "key16": "4vx6PHnBSe9rihdZrm9ipFsYuXdfwg6cwGfD78fmXRYDaWJ1c72LJT8UWDCtHKRVkNyTqHy9ZiUmTpepCeSECVSg",
  "key17": "dnox62ScPA69dcd8e2yu9FWQf83pc9pbifD1ptxXKtYgRSWPU2JcKifrfgvibchmY4zDCWn4p87VeFruUv9sotv",
  "key18": "3jdG7K9KqVbsRqhGDHjpGmfxwyDZDxXG4c3r4tMebgsE1bMrt9aSkdPuBF7jbnx1rYkF2su91m6GSDM84dfyBYjc",
  "key19": "4wX4AAEdpkQyTDqzCREVHUHpCYYPMgKZQw4hULHkPjE2khbWLD7rWkBWTyxPdw9LXkA4HPemGYHRdAE3U3Jm2LeR",
  "key20": "4jWbECMfhpoXm4E9vPo6C8m1Z8prKN2iDaqF3taHsJz2VfF21NrrboKfnLMVaqV1U5ztq656FCD6WuzHBNta65Ke",
  "key21": "e7T8bdaiXm5bokJNPUNYRvo3ddDFBJAct2grTefXP1BDNwLbwALVKSeomN2PoG33ebqmfgxkaFoSSZtr2XwYCKN",
  "key22": "unvLKQnrw9FcPmqHyjJmyWcnesUq5Ek51fUpSdScA7t3zGgNCBrnkwv9cxwLWywShpGbcyjngGK4hSmY9S2JJZX",
  "key23": "4FLcgKQ36NaiV7yC8zLCrxmWBDAXL2bMFEXSDA3SCXJkf62pum4rpYhu7eHhPxbjnRbLir4Liom9E3JRYD3k68SL",
  "key24": "3tXKvfEdPmei7XGqTYrvPmyfZucFgsSVthYspfQrfetz5ytgihD1XfUuYwCmrehNhqWbsjj2k9oRgioBArbrhGiu",
  "key25": "GtcErHvYhbsJ9YuVWFHtom8uMXdb6ik3LfN7uw4zJJ4UtMvivZfUYDcYa2Km4ND2LYvX9pTtPJfmJz9GPZTnCHW",
  "key26": "6CkxQKc5JAnneboM5WzBFtYX6pbdWJT1UtcsW7Cob7pJnFGt1drosHX78iJ28pdXB15G7HwqSx7TBg3KRA3Gvaa",
  "key27": "3SYHFThkmxu4CMXq2HUcsa7Z9NRX2ZzM8AwTcdMcs2JbGxsWzCKfYvhs5FMpDAJNozD2QdV9nXCrTz1svT6QQCaK",
  "key28": "xRGiijiSvb4Di4Yko31nvcHrSNTZToFUMoRtU9a4SfkEuzBxdzFkMgcsude1zFbr1TDsmKAhfEiGpCzVtAiqvKW",
  "key29": "PhA7MdmhL21qznTXbAev5MtixHw5WvFDvucm55FKk7SbHStfY6ZFKhHFLj8Xk9LyCD8dzDDK7k3ASHbgBYydKCG",
  "key30": "2AuaA9vL4UMmCmDbKC2mhGVQo5adBWgF6jHfA78WLBdhAG6617PkxLKJ4pnnX2KsMJRGcovtgz54vP3ui4V6tjYU"
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
