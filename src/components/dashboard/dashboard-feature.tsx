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
    "39ZkSbv3SWxFi8uhDkWUceEfuFENTbPAGXj7pSFB77NWpjRRJrHxccAJfcBgnfsBhtmEfZFvC9Qv8ByRgUS2s7nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XMEwCQd8ZHxPBmD5TVAU9csoBiW3Jzf8kZK6spBhT3DWtJe1CPSVFb9uSLTTPPbGFjBDYWjbA8uZYAuUTREVrqt",
  "key1": "4D9K8dEhFtNzJPPZwd43nHKovq1AYqbZW1AgSvbi4MGriWtjCNE3X1zEXivADoey13Z2Twg3advctu9jS1K4VDgM",
  "key2": "ZfnJTny5PhbpHhXXhNS1VDfPWcYSScfdPFxpA9wP3eHoBLfZTLJEvKd3yvCAeE8BHVKHefDKvPa51HcJEFztFpg",
  "key3": "2rCZADKgF2AbaSYs3jwHSxpJo8Xm6rj2cFyPU5DcNygmvhA5sjRuTcxSFc4YWHDoA8auFSFwoMWwDejyYBamNjnk",
  "key4": "2s98SXmtpMi8Yf9cf8vu2GoaBahskdaZphr3BQT8kRmjoBKkL6Z2M1Ci5WgxSFQNv7U3Rc6QsWwShzrm2zohiuSR",
  "key5": "47ybgrKwqXLYYMcBNqHibvQfz39M3nHW5semZ6867quAdixxsUTMhJVTdx9xdHDnpkF2WoyZKHHYNMVyVmZ64irm",
  "key6": "akZj2DA92iCYCTayGzLB5tPPv4xZJDheNPEqKkJP4pdtyX42ukVjw29feTi1Zbgzt9WEvoPkGsdMrPZKEmuEsiF",
  "key7": "4fQmgQH6bZDZaojszDDjeCrtCoFPXUi4Tx9hvyuUqJBpuLY2TPwYey7fFtFEEBv9cAAk5saP9cs32yoAkup9rKfD",
  "key8": "4JAoVvkJagpk3JwzSQ38zxwkTg1As825sV8zx3TUiVizU4VGPvkKH57KAHEwVuN55HJKzzbarLsStaY8muB19Dra",
  "key9": "2BuFqr9J9k63pgXCKWdH1cen62WyWq4MZbmKxMbDNdKMaizV1XBiJRzF5Vhap2dHo8jeDgxNZ2uXmwoMHxhPftN3",
  "key10": "2uRamsRDJzvESdKKqJjsiy65bWuYDBqu9ac9vHhuAwdE8CEarfBe2d18n1ugb3SojJ2oYk4DfaUwPbBBccSfaY1P",
  "key11": "4yqRW4ZXmamAXtRADhWk6R8TifJWJVYpqZfi7cApcNz5yDqKDQhoPTMHr2kXe3TbXKcxxQfCCg3x4dc4nCsJmnQF",
  "key12": "qTZfHs1dbxdRjef6jTegmwXgSCiouSxmeDkdmdo49REPMU1AVMfKZnreGPCrgNDcxYVrQrBRtuziZZMMEMM71tx",
  "key13": "4gHFvmdWFrxctrLH7sqneTE2Ri266NHSnfEfetSkQ95w4zS4AH4HCxrpqKGF2vGtEq6yGtaViwm1z4zo7eBeoXKA",
  "key14": "e8yCrhPkPTTkKcJMMhaxMRm6T85G9TiDAsonohRHXmaUP8PZssB47VoAwbMCsXHK7wuGuYizuo6dpgeBU1mn1tP",
  "key15": "36yiKb28pZpLfmNhv1bfreDDggJoh85d9AMRBSrUmyakPMWY9VfGSiMh2WsUykeE8pDYpBLV7RtaGFXkVwHa1wSr",
  "key16": "5f9PWE1ZpNFcthv87UcBTLCpZ6oZTrorJ59B2TC4ywLJVJiQTZ4dJx2yotN6XoHvQpJk47bJy2Qe91vb7dNHwC6s",
  "key17": "JtUnGgHXJtWFRj5ZfMuzspoeZEAUbmVQXw2sPj47ZbMSmHGvuyXmvsdejyLSSjgPaxu5SS48mE5ZNYV7UURF8Vx",
  "key18": "nYmm57XcnESWQStgWbdPmLJCuYJ9we2SNmRfvb5E6y6c6KEo8xMT2oarRcEcVtyzieE4bUYJfLgs3aaxfQ9XJNC",
  "key19": "61nvFw1EuJavgP4HnKfwMMtMeiUnjxiUBUkGtjuaa7W9YNBiPDwjWCiVqFxtxfAuEQhD86BsdTpGUN5GNiMgMJg5",
  "key20": "3fgnYysCqcwgrXrX97dDTc1R3hHrMx6YYoLvnGgCf7ocGFGEUFzSKSLPAULMFCCChvBRPSxW6UwvMhVTAdRHWmMM",
  "key21": "gTW4cf3hhdRD7RKdbet122nv2MkAuhhHC1CVoiv2zqUVYTVfP66zU9Ud8M7hYNQ4fL7vN8zCgEejJ19dJw1fpNv",
  "key22": "3Phd2wnkfexRtaiAH8YZ7sN2UkPJWm4Y6NuMT63Sg9Gifr4157unkE15zGDmAabVukPqwzJkSBUr2DBdYDJKXA6e",
  "key23": "5dhPaRzUGkQBV8VCoTi7osF2vZcDkMp3FyDtmA4CKYXbk8T6ReT2EwsjK38XSYTm2HYF99p4cCbCG85WNf6wqk8s",
  "key24": "t1PLicFEt6nZBftxG8tABT13RPbEGLVrC9GwhbrYhx6EJFu9JuvMqTLZg8Jv9nmh4jvXZWCp1zZ3JYTzXd8vPHD",
  "key25": "5ERN958RkNEwMp3foixDyrMtsetKnvprSfK7uQmRuhQcHqt5cpnzZ2DR71QRWzGYQZD36evYYyfEG1E7aqcdf9H",
  "key26": "5cBYfjCfLevpXUeo69PMLTbCfzCY3w3pk57igEpU1KKxxVZoEXmqer9apUU1u6a6XzmHsV2Y35sGZFktpcHaYVGX",
  "key27": "3rnT7gbrL7YvbYbayiP1wWSvxEHHDNYMjyDJGbDbPDnrAJsdZPtVgTMnXwoCc7rKCoW7SbHjPXwThNrSVvaZhMr8",
  "key28": "57BN1QApgZSbXYWS43HXJM8Nt8CnVZVKtvi8HeTLbReHLptUcTPYvsff796utFVPjvKbjD8dzacpy1fs3FSfaBof",
  "key29": "3EKtWTuy3rUM9N9qFvPtdecS5UAZGwMXReXZFiivAM1hB4ph9Ew9VhK3sobEdGRRSS18NMkE1pDjFNGNJhcq2f6V",
  "key30": "5qbQ68JSFEcGHSu9NTG7kKegpoia1RhKPcsX9K7RtNsX2krfo1VN3zomHcXTJcc5bjSUjBcckokDFrxK4rLASwjT",
  "key31": "vqxj8weA3BnQjm6EGrHmL1bF2fKzra9kHka9ffwnbp949U15yJzngPZi5NtqECVSki7SMtRgxFMJGhqBC4nwScG",
  "key32": "613dvFWJLoURcKm8LvBWHpgjwahy9hZJhVu7oWBr3PfcTmvUWcAG84MEEoE4xuD5Ucd4rwTMha4g2nh6WLoDhLVz",
  "key33": "2Ey2UpTWDccfTzwfNvvvX6i82d7z7uwXFFQ4zdS4Hxnn75d1vNwiA3ayrtGLNGuw1hAkSc18L8fz8N1ywnNmZ87v"
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
