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
    "5r5ZXFfUxctjzqVvJESC6HKQhMczrE3XkftrM5oF24obfsZih86too6fieBNrSJU8WYVL32inGnJxR2Hi5ph7sBr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523JyJSSd2Rfnf1ecve42sdyKHpzKtYyDyM13CKCsQ2gj8sb1Nr1LZUePB9bgsHtwRnczz5ZCaZ9KCW4RA4DPxvH",
  "key1": "38UjZ66oqYMzKVZ2oug9ed9u7BPMqyxTu62yFUGnUsm2zRUmVziQij8B5yrqovodq7XrZAeh1x4FbwtfVSU9nwrh",
  "key2": "48snT8By1pLtpapH8siFmSLDwUiTiSgkM6ZcsDjFPqNA1AgavDKtr4K1NvbXmwfbgLtDXnRoQzD2SPUX3x9f765u",
  "key3": "3UBVpJk7pThH94hv68Jo5R28NWXLtH9wG8fVArrxfBZ5BmRA2S3Dft1DBvBTmEb1yYaVboAV6HmzSshuk9ypp1Dv",
  "key4": "3ZfHmho6qBF82cGRwPaLiJYCxqd1E69Au3Bs6JpfRNmoZAwpTRir83Y886X4WZLQ5pfZg3unHdDuY74JwR671SFk",
  "key5": "33bZPqccbGgQWRmFPmpbgpiMDmuA39eF74fHEYfXapkr9Y1LoPfmPtkZuzBcycBSUhUGhbBagYRgfnAi8dxEXdhu",
  "key6": "5wWG4WDPu9PKZJvkfmetdqLysTP1S3XyQbpS6kVU9GqcBctTxAkcK4e4Dy6CWyZWRQrsVabaYR11dyyjJBUmjizy",
  "key7": "tudFafCCRzBZJ53NmLAD8M48Cp9ST6XEnbuc9Mr4uk8MrKQbAHCPFitWxwx9HLuZFrqHPF6nrjjYPUzAd2fsaNG",
  "key8": "2ucFH1CWcnCui8y7s8GRZyz2voGwZWgKpYkBhrEQxtqyM9ajbSpz1NJGiMxySU7t511zF5UVS3fo5Ddqw13a1isn",
  "key9": "4Km3kQJSb5yhPzBAaD7rgtgGUZbRLMJBmtXhaQpt7jhZWFmAQfqFE5j2KUpBchH5qGZWYgFWrN44yoy8cKDNCjpz",
  "key10": "fc1P8Buzjp2bC7zTyWkHki9gvGZFuJSuDUUjD4D2kDon4NQTRRYXzmTQV71nkSx1VdMC7mD76SYMbfrGZpXmiiC",
  "key11": "2MVFYSJfPPsCR7M6VWxfcZik3SWC4MxmUD5anKSQeaMgpaq2S4wsmvCGsfTeBwBD1cAxo6SVpSAngxZvsJLPHf8H",
  "key12": "4y9d68Hag6AZgjkmMN8oHiKF9e2fsPWBCrf8wdJq74vazu3zM9HGsY9z3jLv65KvjH6uwU5DpTSjqbQoWPDXN3fP",
  "key13": "5oymF5kTDinsFYNc2rXrFkihMxUJwFBhvLgbQVzTPAeGCzz1E8oFcR51yUQ891McmVQZnDFLxJ2abi4dS7Ec5r4a",
  "key14": "529otSCNKFWSm931nx2frpuJUutsXmugKP353JHoYtVP2Be6dxCqFAcqPS144VosGuGEHgj338GtcjjLP24QcJgY",
  "key15": "4yu5T4A4oCmW5sSG1ou8MURuX4QtHDjeCA6ZGav2LqmZTwaKeXbi1EUsPizmpvpJsJsm5Fcv7DbJiFPSLjjugSrC",
  "key16": "rvFKgsAmtZqq7oJZSGR1KoBMCvTijHmj4tahA5teqyxVhub1n35DLGMTzKtsBeoZZd22aaxA95GJEFA1wrebK1F",
  "key17": "2wKbE8DASuKy7vzFbnMGrbPPDKH2ZoeeVVAtCz3PN82cTCr9cryT6h4MjUENBzfu49H2Qwn21qhVfS46wJJtf43E",
  "key18": "4vAjMurHfYvoqd1kBWqCWrD2Wa1KX7YxqGsBUrstAULjxfNefWcfPUj1W7tTq1dD5NAnAjJ7HRovdj3u6zL7LTC5",
  "key19": "3HB38vHQebtjgmhSDNNEFHkUXAhdH2S1PfDUuK7oDZz7UMSPKsxn1PgvW4XjLvi4xvZfj5ABsSqwDJVJKBCFq8CY",
  "key20": "3RwaX3o2ypk4GCHkMWsx7LS4n84VBUtJgJZabFNtwqC6GHsrbiGoN4SFuD6sFXaGzc8y7haxjY5UfHwWX8FK6mDh",
  "key21": "5hHktx1xifFcLBkyDfGkh1cLimHmxLFqWo8ikuhQZYRD3k495nByoDQCmmkHDMVXgpeSyBeSHSoTcRG7gXtCwkWQ",
  "key22": "5c4aFewdPmdtBvh3DRiWjHChS7Jz8phYyDKmic7ac7VoJpAvLJBUCUSMUDsDhcBPjjNaumy5BWSgGhMPYHtEE4Hw",
  "key23": "2EsSr7ELFZdCYxbwy4YdtaERcwwB7m1Hy1jbBkYk9gu4hEZKsPXUQxLeWCr4o9YSFrZfEdgdwKZJj2AA38nXJ11t",
  "key24": "2RBNcP8eBXCZ98RaNxRSB1i51pZeCwE2f7vhPrJbnvvPufpxH3ppmrGYn7FA2e6hCKADNmnzXWPWzLZLG6F9J3T2",
  "key25": "5c8hCK21vT6fxZmVeqrjvnbN15goq2yDNm5XnWKC4C7niAvJMJSear4HCAA9JUduyoXkiCUSsUDPjyc3RPXBNTLb",
  "key26": "j3P9hyMfrUpnbsNC7Y1MisJDQtXyEfkMfktZ8p8FcgrEBkyAW3Fyz1J4LPrw9QVJZjysuE4vboBtAhtwWJd1Jap",
  "key27": "44FY6QQDCWEBgTPxSPaWy4TwVsgPDRdKP8vHjM3cSdtmSfqHL3XbWETxHpGHaNJoZfbDb1XsnbtcuptWeAUaXa7U",
  "key28": "529qeRDowFPYGWsLoMAUXGzn3rh8pnAGpHXftAyGd4n6fVxegyuCkCXbacrdaR3BH83LAuJKzwoKsekufSfPfdGh",
  "key29": "2dGvi9u9zL37Q8bm61iFnJJTECbdENmh7cUucM4qJEz84vb9kJQ8CXfLSDDQtmkZEGWDx6EgzLty2nnHfikQWttN",
  "key30": "HqLTKVJvCgm3WjgmAK6dxH4RMtzo6M9Ja6jch7X1smqLc4RCvT6ovwCM12u7PPHYkcMe7PeBLDWgZbmapCCbUBh",
  "key31": "3XkWri4GyXHxhYKUtbKnEvRYYFb8LUzyvY5tVxRsNbJv9mEaB2cpYwhUirGSgun1DKq1DVMTFDpZczzxP9mDpnKi",
  "key32": "5JSPA2wDLm24NpPi7wdK9tTiGY6NUr54EGh91LMDV9h2oaMqiHj8Rf5XWU1J8ygGhG3s61borYc8E2tdMmzQVXbA",
  "key33": "5p9YPuhvvERKjZ1G8JxrEfDUCXXrR1QjBX7H9WgXUHADKf8w6s23k7nxm2SoS9JtsEfsUod2Je2cmzpi3bMtD26i",
  "key34": "4pjBwizMpq6DaJHczhR2DVFYkq85zCQUc8Ztj2WLwreTZ5QgXkGZmtvWGBjUbuy83S7eNNDUAw1kpVBJ6jvQqZQg"
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
