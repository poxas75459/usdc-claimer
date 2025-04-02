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
    "4sxkcwripshp4hKKFepnhZJV4FS1jtSwrGiuLzeehYsf4fqFJ6i5twzDdb6RSiydUoJkSKERtqajE8ef4MYPY1Nw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gCnLdSC6K7xrSpnSaZpg4ekmD9RgXrPbPdxhkg3gX7Cukz3vDHq7VG5vpsk8qAXhhThAKMQYuFZo9Bh4Wb2GpE7",
  "key1": "64GEcqzveK8YwrG2gFGNuXZYesyXQHtKwZkESLgU15eqvEnxKQM5wrjFz7gQz7Rvgw8uZDSAwYR4ZDzNrTs6uun1",
  "key2": "3xJhsdWgi4VPnjeFdpodvfSSkKyXKQy8GKzGQzs9BFJ5XT26JpsKwAwo911iRq8Z4s657BuCRDQT9ZjCPPoDPmMM",
  "key3": "5oa725oiN63zcdAjTkmz5aKfGXR1T6Jmp7eZPT8wJmuGqzbDxWXCiF9BENaTPDba6WLreVfqDGzCk7rkSZxn393j",
  "key4": "4dRqD4hssqx2uc6ZVzPapy8nB672Vb4ug7dBUmihNHuWsLMRSroD6tmNfk24RVPAz33njNTnaw2H6t8PmRSqAvBd",
  "key5": "2Y3nNmkPNBS4uhW3YYGEcqLvwuPZwe4T6RyjmW4M8QB9JjBNF6uNR483Trhv4p17wb2tE6V4j6PgANM7tMYb18eM",
  "key6": "3i14BcxpPveCLHwd7Uh5GzU4MXtRBLoXyN2b9ywsCxYSewy7RQvGUgjfEFepTqsdRyFwNb7TXtENCsavcf68VEnW",
  "key7": "3HDnNoxJSTwUQf1F5ryv8bC9ismj1D7mMM9ZYA7SH6VTmXZWkLTBkdqzY2cbuD7xi2adgV82MXdPMi72pMQstHUu",
  "key8": "UB4nV3eLZK9LYfWe5u7wqpYvdHkULuhRvgTEvfHFZNXfoNrDQ2Y583MKXESHAf4Gs4K9NtXtqKxKmxvgWgt7edv",
  "key9": "5WG2orZTEwpvyc79MSJGXoW1tNM6zBZCdFY6vN7droLUtiVZ8hSNQf6fg99hzaLDuXhBGjSD7Np1CbwKc5kMvYmG",
  "key10": "5RK7J6pdsSDKApj89EGBDSv9Qr37Tf8GsuS4y9qqmH8NZYbh7NzvPXU3qkp7x8CBNpNVTKmikAj7g3SCFfQ33tb",
  "key11": "2ejQZHqyjeLz2C9MHqK82nE3m4cxvA99dTU9nrXTgdmN8XYv1QVQXghVBZXt6Bu3E7GTP7n91AHcKBgo9thR18Xv",
  "key12": "4Q6NnBPBZB4GcEQh2D6WcD421f6m316beaSvwLxvU3wmfboPLsVLhtqpN5KAvjYfqnsNPdn2GFy1woSdyhRsLzJy",
  "key13": "dPa8nw5pG6S2JiRNYat1us1qC71r98SM2EBtzqXF8W6eyemWiMXtoviwhgcpyjc9niymkYMwDn5fLq2ep2AH1EE",
  "key14": "5TW2LSbAABd8M9doUHcLVAuDy7DGBPFCx8yuPJCFZVDA42TAQZLVDvbDujv7nETsY3hjxJcKsY7xzwAxpPTZ3LS2",
  "key15": "5KFW9kGDmg7AgDnAJ38UM1NPXMC1LkhjWWZpchFZ553Kz4wxvsspvtt57f1ZnNt6Akgn3kkto7EjfFkADmxgknbU",
  "key16": "2QbrkTPXVxANud5ks7j3sh3L1uWhiYi3H4sWVrGxxQYJXRckhVvR53UcbyZTVCDa6dfk4Prp5FeLHENYAGPF3Y88",
  "key17": "52bar8KMbMmTErkuR7rU1s9mCqze7QmRCWhUzbPbBsQjvWg5YF4EAmfFoKo7CpNfYWiaTnB1yAh8mwxoBv6DJWWi",
  "key18": "2MjhjwVmocBZMMGLdDyWJhiNe5StQmu2qoK7DPjJCV6r98v1sfni7x46zNeMXH23DtHB4ig7XjfYzBvrttL1zWs1",
  "key19": "fZEksvB9P2phjwcMYGA8ZFErDMymtqn7sbFJF9UJeR5ex3f7wDNYQ67iM45oMVHDuhmZrPmWSnPWVodPsGnLaYZ",
  "key20": "476h773srCPjT4dtYX3EpXuaWAdMMQxHM2NT3ik2sgdGdqJW6xFEq1f2ShJxu4NFcvkUGGARteE9JYyETaZAMkXi",
  "key21": "5Z8T7s3e4xohW1c7p9H4qu9KrtCbCVnQxVXAaDE66yL53dri5cw5xphKx14Peb5RjhXi2db94SUwbZE1JSYD1fZR",
  "key22": "2YMd4M5wSrtBnBWCDCXkksdzXiK2z6s1XdS7kSoUU4TFw3rFhBCzJg34ipidwK6Lfs4TSPjivrcxkBZzwt6BaK7k",
  "key23": "5oN1G3CjzPgPDZ7xRtax2vEr5efR8gyHm8BvMf1FCqxBuLqZ5jZ19kD1P5rCqyFJUBFVoHizmQ2mmEDCjjLcmG1U",
  "key24": "5jq3GKee3VGvzwrVRZYFAUgrnbSBEURem8yqczrw1ebhk7RpUtPptaa97bC6cZBEjEM3EFY1kHAmJYBHuZNwdQos",
  "key25": "5A7gYJ8aHXRafdvGSb69QVdxuKtbTRMS2K3Ypw4Sx8LLfghERmhu2b4vRtSLLGYZ8ADcwDL3VLwe3nr2pSKwJvUU",
  "key26": "546zT2YLj8b5DPa7xWBWR8XyRKXg6QJBZy2rEQwYB13MrZxVQftbi4byu9ENG75uPzp6jUTgsYcu4JDpo9cKTT86",
  "key27": "QrdVnHNUJSoBrC4GMrxySB7o2orZAveoQYfJpGW5uWwNNqXNgygt6Y7vxY2ahFSFV6tPQCxBjcWmmWDxRpACZXx",
  "key28": "3tfiS1EQHHpe6NSVT3xHz1SCFyFFAywWJoFKN8bDkGZeaEP6gFttsf3yXernPJcfPe5yWX2mMGPJ22NuMa79Dnuv",
  "key29": "4b4E7wsadiij1Gfb2MVpTiuq5nYA1rh9WPF75WkCae69LdHSLJjXNCTrmdoQDPfUswFxR2h7jSFk5vAZGF98xLcE",
  "key30": "4aCszW116eLpob1uNpuf8djxYwAmvriJuVJkQzE6JxZAggQoctLDdUSJMYD1Coot9DWGd9PTR8uuyqmYyKG2Zf65",
  "key31": "4SXzfdd7s2WGmx8Zii7X9EuF4HAEY1gGjksZoFVcjpjbHjcDnYmrCQvQw2d7cUzboekpzY8P22RDeRPGrvz4KK9H",
  "key32": "2GvSdhDcMTYQ9mqQVTxeUpiMdajZKdjRAsYXd4hQTsXa2T9VCbN3HUS2T3MQ78NgxVpVo96p2eMYoNSjie4QxTJ4",
  "key33": "2hDz7tAAbdDaa839Tc2qZ9J9RLtHaeYSePo6JDvJ3mxD7u1Nhu4Jh3mBWJ18poh51kYU7BxUYPCCJ7vHzHYNYM2F",
  "key34": "5zsnGQwoLk8ea6Z2miJ9XmBUoSQDxBvheLCfMCJddAUme4BbVtRmtNetYbgE4PnB2kaT257DPV7Yc9tnnXFXH4b7",
  "key35": "5Y8jmZrcqGPQPVsatJnBNSKsd5dmmYvfuyddBF8CALJzyLg6dXrPMp1DZBQ7yFDVyXwSu7p5FLaxpbajYfeap8MZ",
  "key36": "4LzmF6rgUBEdhdJ5siUMfrtayQ8mkc9UKbseWekpHHemsQPCkBArje46S2zatnjU7XW6pNBGkbT74pQWYB53rxbJ",
  "key37": "3TAK6MJLZDnDfXQSZWfLnfmzK9XVeQLn1Kecwn9SVogP83EYzUJeg6adr881GstcEsb4NwhyzQz3LH2dAmDVToTn",
  "key38": "5QJUkm9EYfjPV6TgaqxutwzsL1LNiQ9rEK1c6cRMGoio35imLkYDmXe1NS4dn2D2BwtUqi3szH4HRmThRHjmeGt2",
  "key39": "54KP5HJZU64SCLv6CYGfWs4cpqboU7uEegbDThuUteG2ansEWmht5wRVkucBEH1SKDiSDZxoNzhw5vktXK8M9Yod",
  "key40": "5aedho47qQogLrfJHFWNf55ktsAfYEpvCLDfXnFFmjGqhVdRRvheaF8HbUp655qBgfjzuYoLhYUcthuXU6gihCrN",
  "key41": "xGXZRHoyjt43Msf69Q3ThzeFvfTfutV7fubVW6D3zP4F7QojS2AKK46n2S8eCg7EnzFx1K9os42mdtJNegLrnAa",
  "key42": "5bYb3iPxXFSwAnzqgzQxyEaKSV2M1YRJxVQv5addZDvGG88HJAYPmzKWxJ2mvnPS8h9qbTtdH6mL7vfXdYzG68zG",
  "key43": "3vMjXthhUWfB2oKHDuCC3kFVWEXMLva62gx8wDacm45HmP4P1AFd6MN3qQhdp62B4VWNptHgTJ2NBhLScSZ4ZYkh",
  "key44": "4qiGrp1sZVKXngVRK4ADhvyWYhKBhRaP8b7AFcfqFqrXn2xMjgn2JYbBAdzB7qGpzCGGJtpxrFSHStqoc1jVszSt"
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
