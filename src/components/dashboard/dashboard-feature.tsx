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
    "5gd5jsNSn3roFvSvwCH9rP1B2mhQ1QcG2mbDqG6DKSXgRdrgwteAVeh8iG1GDPsAgjcBWBDTTkzMiU5Hvz12pHKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RTmSuYXhiwRi3go6y6yKiCBFECT9Fc4GsqCDMe4BQpAwiyBv72SMnKP6B9WW3dk44oScBdJUSyPLY6TK9EKZRMz",
  "key1": "A7svDF6T8suRK3iTwkgk7FXyLarDjztojwtbnc6xVfGyiAhnoTqxyanerrvmAwfF8HfFWDf6whJqqmB3VQafAxx",
  "key2": "61VLvNgCLLEqsKkWZw2GqULcqGdusEVZ6tC5DXAWvDLJSigkgkViCDopN2DHyZirLZxJbQNG9sagLaZeL3Yqt7B3",
  "key3": "5PBZwWGejSjAGAcCKyd3Ty3xNZSBGDisNNWrM2r7DDZqu61y81GtAKksdmCPHc5isPzu4AYxXP7G6B1i1nEdL3nW",
  "key4": "38sG9fmBv511aFa3VzHtpNFnhBL568iawyBFraEQBYZ94rvETuDyiNxRswfk8PwmmjKhZz7dFmQWrzxAXVokEAcC",
  "key5": "3iMpxMsNYZUvxL19eXsXK2JcPJRxJQUMNAXPiLjbenSCfYioRnpiHL7oKxGce7jekU7vkA8NYFTW4ZDqpZs6vSMN",
  "key6": "tqSFQr4vmTKiGrRELGvg3okL85zFYEpmXNPbLqJZ5YaRudxFXd783XzdUdmW5HPAXATj6AQ5Z3o75P3VCbWTQhG",
  "key7": "55hb3EJcL4FK38PfnhQoRts9KDhdqUtZ2tw4gFGUkkpQvM9vAy6YqJ6cL1GAZNAqhExbGnYiyMTDwENAo4CJUWAt",
  "key8": "636dJb5xffM6En9csuyc8mCpwcb4RafLYNHQBrVw7bRQH441TFma6AFqqAwHjT3aHd2vnHozW58T1xASYW1okS9L",
  "key9": "67Fd1J9aUnVQ1hXL2ZTtp1zX1GEJJU6cRbhcVSiQnCjypViHPvYonQjWjHwmyaWcrwua5g4jyKHbMTmM1p8YkMPY",
  "key10": "2kERBT3BMtURp7byQmdKDJAQtcpHkemNuxCajjS4moyRSp6wfu1LopcSp4siWXTWNouFkfkV1XQ85z2bQvuSNprz",
  "key11": "2Uu4EVJkdJgS42y6ZFPJ2mGUk5yJLYwFskjP6KPb3CXTsX6ay9wg9Eq8CKtKQex2UxfExrYQ9tStyU3CiMiLdtv5",
  "key12": "4ZfVkUmFPscbLJQzP9TB3NAD5GWoxC3979Tsu6LSGBSFHefGkTVrhKirUaiRn6K7TRvDFmjtevYVqBRi1ZTVV5ga",
  "key13": "5JXEY1kPMcyF9zCbjD83dvcr5LuWh51q4jmJn9wsoo2UBaYF3TLtbHEdqoMTbi966wxQhpNWaUhX2xKWRXzPNism",
  "key14": "2LKotm4v3YLpj6UMRrVH7jvYgzQdat6Gwkoq7cxoT5mfbcCJSL48hNvcQPHboo9Yzr4MrMPwovJFyG57oTWNJygD",
  "key15": "3sRUtX2rbZ1jfht8JDkszFALYQFXW7aNVCsSGuf2inTSeNQ4f2b6qJBRr7baVPaNmZ8qxfmXCTAu5MFNWtfa6WKY",
  "key16": "2fU4m7eNMYxdKjhi5ujkbxav5Yrtrg3sGsi7TFeqRk5XfpESKMBttfphyT323t5XzdVyJy8vdcD8TJAkjqgwhmxL",
  "key17": "3HoVcK3HhWdoprQ7S1kDgD5Tx8ZWMc72XYwJ9Rvu8XtGTfBeKzXaLftrhBtfHRefF4Nabq8e388epBrzgAJB5Geo",
  "key18": "moM9Z93fLi5swKBVwfy6nHv9ZgdTi325pvE26AYGPXGnEtVjToE675m4uBvAM3oGdUUz3yZqWuxeKVsmmrudjQJ",
  "key19": "24coJhDLG43rAj1KKkLw8cSBsYDmfBRb1VKZG59Dcpa2ocPZURKNAsG32y2cFKu8YYY9uRKzR3JtU8xmU1CrJP91",
  "key20": "5bPeEF6F36QCzDxkDoAWoLxpXwsCzJi843gmjaJKNPYt2YPArMkuTX3FSecxz3LebK785pcvNPPDPD9GZns372Gb",
  "key21": "2T25ST8r6ZtmNDGqN1jgbrzYKCkPzsASfhKanxNvJvmRg4aSkAwCSymQkX6zgWmX8Lp9EcduZZqt9KK2bDPbGvtx",
  "key22": "4kYwJKrAJf1Xjqvygu9aWRRGMK14tzygYpB9oPWbNtE8YaDAhjx9o5tqkknsQNZ5eyLsoo3tapCjioU3ZzGoyqTE",
  "key23": "25K3BnQi7A2pDsXRqxQBpxuMA9eTT3AauQcvUC6218seJYBrd5EdaUjn12FguW1FmQ3u98HNQi2LKEP79q8jwvcm",
  "key24": "42icBEG1129fj24vUxQvatTBhDuaeWqFUqbcNA49o5n26gtJ6D1tAw21hgtEcyhMRtVYygAFJoELUa3utLskhJv6",
  "key25": "4Q5HjPrxJ7UcWK5x67MXoJigW4Pi81zLjZFA7dbD9gi1Tvfz3xEFsx2BDsZidYSR2mQTpNkpuvN2XxaNH1W5qkNH",
  "key26": "2e4nL9oGrTEXafgHeTU5bBv4NB8BCNTDmiSCv4WkQncfTXzxF2gDNNguuRSPKkszCY8YzzPED7EoE8PY2RDRfWdK",
  "key27": "57Cka54fFfTE19JEhLU5apLLDNsVUpwcADVpFtJtvE4MCVyDUm2wM9YWs4GarR5oMTvLtLpQaspw2zSNxCaSckvA",
  "key28": "59hTeeaGf9KnpdK5dFEi9HKe4dXwrJgFiRXcKC1QnC31Zur9hnsC93VffGSrodDPPmxJPgS5g4vLHTtKkB1Reytj",
  "key29": "4AeWrBhdgCLcKeagAL64tGepEfBqyNGfb68TUkDFvPguGHuYhKA21NvzDoWg5MrtARURLdssMbFDZoSetj2SnLbC",
  "key30": "vDmgfxQqHxWwn6SQ5VVQZ879yuouhxxSLo4NetmTYmZNPMAXVkvXTxuMBZdi7UUcPtR3Ye7Ewsci3Dt7Bp8Vj9F",
  "key31": "4u4fZgqqY9qUYcXYPh8pmyP2vodtWaaLSTXqqxg5NEBgSRUzcVG8txTFjAx99wxbHxB8J5PyGQ6xjrSTkguJ6Mfs",
  "key32": "5yqy96cA7fSbxbUvnPbSQU9yT6ucHYAoJyADXm1YR7WevJc4Vw6MWps6w83MfMfhdXcmo3WzBwQRESzvX7SHFoCk",
  "key33": "5EhUrD4ixrhKjqkPi5BrMD13JvWh6VuPjJsZqCdTTuy79CZPZQvGUYXtRziTUoCwrQEBC1NwWNwQY9K2zBxqyQXs",
  "key34": "3uboSBVUxBKAadYGgpZQyFzZYweid6gYyTYncqdyLKAi9g5UZbzxiDAoyp5UFm6eiNcVrEZVAMzxFFZJsJ8WXukm",
  "key35": "2HghyXjGWXjicBaVAU5yGAd4vcLd3sVhGByk4JWGgZkT8yJQPcHJnvYdWp2jWr2pRWDGE4QJLd6Gr8sW5XmzYXGR",
  "key36": "2W3JAJTFUniteFCKCmJgAy5jaYERZAL6z8MYP17dRuBrS4vYZcPDxD8WXUdUAoqVoKVcmQ7Evv899S1RLiBthSj",
  "key37": "bivPvaTuKnByic5Pzi5YfcDrijjHNDR5bmUNwucC7BT1QjijDZ8wfXCud9JL37NRFazUZQQVNxM1qnPZP7AEJtq",
  "key38": "4ksHPAhN4nWmz2KRNFNUU2fJZTPH7XUAEo2DrATfrmfqYksiS9NQCScfDfqwg1VnTyiRaEKJCzkRfkaEnLvo5SC2",
  "key39": "svvLcKCiS1Mh43xdj52mVoYrRyDNDs63UG9GZyzdZgC3GZbWozmNTqWJJBY2y8rtGrGCYzXajNTvvimEEhCDZN8"
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
