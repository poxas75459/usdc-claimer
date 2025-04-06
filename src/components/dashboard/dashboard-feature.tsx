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
    "5s5R2oSxNUuoRLyPgKRrHuiUyNNro6WhQZ8N8RA1w1ZyH1ovtDVVxHvW5wfZdsHR6ndMbkkGwwc9ct7jsmyZQTNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RYX4bcfJohYAmVccU3ykXMYtu7tugDd2LzdWD8hcWJ4ksnwcbUi9zbbrXPG8PqECvW6fGyeBpJgD1YonJDnMmVJ",
  "key1": "5QWnBasa4Es9bMScqmtSGujb6B26Qk4KrkrEqaiSr1GFMU641WhLU7QtGmcMTQxfQDwocCaqXJD1GeQuy6QZwWqC",
  "key2": "3Ud4CVFwz3ubv3deD2cRKkNxJp6GswRpDPydNz8QPWfLopk5zYwzSVvNbKA9p7BEUN7DsWWehYsCi3szZSbAtwvx",
  "key3": "3aKLGo3y7LWwm2YqH7vUQbBFzqrLikitYEMU5eeUQqq6Y2A6Q1AfnqRvqaL8XNvwyXbfyNMvEKLZDk5jXsPvjuMq",
  "key4": "4pNb56fh8awWjmBjMhoSSwQkZznBLUNp5x7hUFWmWryKKi7cUdMhF1LrovTHnWA87P8cT6N7qCwMqDAPJvzNaKsn",
  "key5": "5UewGJeND6pSS21evN5c4NHQAYg2LBbriRFKuruQtPX9q7pBPJNtB1UpRFUYpSKuy3yWcH5cwC4yyghqNTHPa94T",
  "key6": "2sEXX6SV5HYhrKws9w4E1xWXKaZMuNJxZVZME3nSM3fmY7yXYP3CaYxpKGcWbCYC7MwPcmQUx9bBvbXFkeBDESZu",
  "key7": "4RBznzW6d8UrkGhvW237JycvbVAPiaCgnrZaHGUHKzmrTFadM6PN7oVm3VJDPJWxcKc8hNEWvZhHAu8u5LpzA8tp",
  "key8": "2KU7ssUFUSnEQGhFYcAyPeepqo6PCFHAVeKZnScbW4h77dwci9sYSkdscjp8o4BC3vwSMq1DzDtTL44NQTdocWhV",
  "key9": "3Xp9LPmBmQoBeaA27zcfGgyUwvK75S631ey2pgvKtekZfVYs38c2nim9ZouAxxnKv7qcnBsgmHYdz4WixUVzy7Uv",
  "key10": "5Q4PR5z8dhPmvB7ZPj19bnVbHnzBXtd1AJn1mqjNZ6VUaAikV11q5RGCdv3G5SSmLSXNjC7AHEWd73A2wJEhrbrg",
  "key11": "57ABnfKWbUd4sGFpXjNxDz4BcpJ8PX5DeHHsqGB947ftLQRHfZbSbF2qaBizu46HHkosfvv1nXX9jWYwgrpYNB9b",
  "key12": "CzirWUJBeMMHfPAwn1sE21oHcBapCT5syRuTHUGaowRCQkS4dveEbmkQjmkAUF275o8mdVMYKD5jab3RWvwfBJM",
  "key13": "2k8JNX54YakydpZT38jZF2b2aeGpKHZQhAAC55VSmXNMbxWztjK423GhagSwURdrmPHYjcxHjowYPgXYASyUDG3Q",
  "key14": "C71SALkUr85MjPAXs6fUjfbBCCHGDPo5hVNPhg8ydxpy5imU8y18zUcFFTmKhY24AadoimMcEDxiPkC7GAM9LkG",
  "key15": "63VRHMzu6wYjNJtHvpbgnJPXKARTUE8oHkUkrsDf8kUrZgVoeE2Qa8vFTmu2yvcRYVrSemnf13WpjjML2F94A3DW",
  "key16": "59vHmdNvhJPPJQCUZzgbMMFXFRaRoBLZ7xdRbydinVXffxtcsjwCuf2MgEc3Z3ZXPA4xEKhZztyadbTPu5vZzJ2Q",
  "key17": "AZYYbazuXwoXvATduYssXNJ58jWKASQpWYLmGtm9Uk7dsx27y8s4Kw8Qq5PMVjx4ndG46tK7HBRuxYLtdaTUYZP",
  "key18": "55C8Pt8tgcrz24mZSLmAS6aNpwmyixWro4iKg3mbW28HDphPNUjEjYwddkbs9CzAsbpxDD4UP1zsL3WxraKqE8pj",
  "key19": "2nhE5TkanNC1mhARzMjz5VsV6WGBuFgsPbgQ2rmdzUdW8MEgvBZiGafE8RCB6ehZN3eTfxGE54mszFAcTbim8EzA",
  "key20": "kBzZWXT1VaoeCXLX9rjEvoX64ENsUU1PUiQJegavbqRMx3H1cTFgvTv8XhNPncxmwADAs3hyn4VtcZFi2BeEqmb",
  "key21": "3CvYByKEUPuWJd3WNJqUPjkaiCxGaYM1nZoNsNeEdbWtattG3mFcszXAUqECposQ1Hc75ieCPYSn8efEw2YUKDkk",
  "key22": "rUSdw14eJKoYhCFpMvz4FtiiqhM6w4t7P7iRwkD9phrJmYzr433GPsNPdJHVvEES2o3TEVjrXjk8pCPAekzwfMM",
  "key23": "2Gc3Bd6Mvb1AGFo6sFHhxcJjhAsREy62aPohycZ2pSAyNiuVDnX4eZy3h1pKZekjHdHN3PqJVoZbMHir7juo13nr",
  "key24": "2b3yNdic8dNNhmU6QHsrQV9TCJEBowe4g65eVrWuUS16Yz7sZKZVj5QbX22zAsXupUJXQkjK4zwxp1K4HgJJB9wN",
  "key25": "3o2nzZRK3pcnnbfLgMyTErSZ6K3pQ666DDBx9EeU2RfEDotZtUSFw7Bu9dwUsSr9Z25J2o44yuDwuPt3jouMk3wg",
  "key26": "MFYw43LH3nqJJpTeqUszgTwrzxfWqQtrWAt8eKHXH5Bj51GPjJcN5CjH2nFTUuAvywVFz5Jea5ShuFLkf1az79e",
  "key27": "2qEZi3UG74LNoqjetGiWMKMwN9hMRFSTDnYuaFFkKRB5ZZ4wQJVsyoRZyEWTSDikaWPP1VcQDK8QX5saknVaJSHV",
  "key28": "3mEQVVStEHvZ7WkLcPF3krQzda8zxmU2LhkTDL192wXcL6Tiw5swEXFkB9qPNb2ugAMCPxVrS8gdQx3X8UwHuJVP",
  "key29": "3GoQgQ1qws8yejVhpcDLSrWjM5Fb45Z9ebQz8vM62eT76eB3vJJKwf5JudBrs1fyaVD78CHYsvpwvza6Y5R24TS3",
  "key30": "3KSKeQDeB7QzAVVuo1zCwg8ozMH9PnnpXvWP44EsHkuarBDFmLrHtRWYpozPBBnyueGuJS2QRckTcZUAPrudMLht",
  "key31": "xzKdLXRLNLbz4fp24LSoiUDjsXf2N6dVHVCkjJXufPZ2F6JBw6y1mUNMGxqe4uQSKo5HRaM33MTMEnJj43fG9KF",
  "key32": "MXKN8r8DgVqA3KqrGWxCRKK1FsecqNpi9exjeUjWqND2Gx4xT4p7EwUgpA6ji62hNFH4BvVQiBbmS22MAR3pokk",
  "key33": "2RCUZ5RjWQ9Rtpah2tf2XefrnB4PYmgANVPRcTMPjTHAMEWfov7PYpQSPzPPz5RkhZVw5pMV2YyZx1myoAB5wYKA",
  "key34": "Gmxx9X9KHrMo5szNmqgp1QMJ3tLvy1xd6q2yMGBPkuT2jnJa9hQtdaEbqsM3aHZQXZhGVJX6Pe2PtFPukhWoEEj",
  "key35": "WGRAQLXAUJXF5YLEevGo9vFcahHJieV7hYyK9sYqRv8KVK1b4tSGGVe4wdf9u913zArfFzF7YRnNWg25JVpZqrP",
  "key36": "5DDao9Qa4uQGRtW4pZyjYbPP9sKmFZVscbrS2FtAQmb4CsSU2sCdwE6XZqeC83XSXxetyrU931hmjfRNq2A56JxG",
  "key37": "5ZU3smYa1wDR3wDeDMGsxAMv9nHimdFGS85zWESYNVsLumPGVqNsaSWCvWEKXuArQZMb275YjShX8f4a7zvqn9oK",
  "key38": "44rsX4T8UFAUEkT418WF5Zx9DnwEkjeJYtdyd1QKojrZhQYVYsoDtjT7LXX3nZ5krhHMA6jsv47L9e1DCfMYu37J",
  "key39": "4FhEwRBjLDLQ8oFEBKAsZihUofd5pVUaEhXdsZDPc8Gv6sSD7aBvsUUqHN4zjPj6EpoUissW18KBZs2aYXvjAsAq",
  "key40": "3xBBLv4Kv99y2jNKY1YMPFYofPZagU7weh4Y6FxKDwhN4H3sRJjkB9Lj5BpsWZVdjygUBLDeKdh3RNQnoL7n3ZgV",
  "key41": "5D3WUsabwRg5GSuLCuZw2UoWsjgDa8U6LDUfwKJcDXqgZcU1cVUgt8ZsE8dch7ASdpdw5HQgY3gAios2C4TMKDU9",
  "key42": "4rkvN3MMQFTn5PGGeG8sXi6kBM3Yw3aYMQF2HoP7ga4Q3tF1n7R5bZXDGxuGVFG2LumUGWo9RhQay1SQ9MnKPNqd",
  "key43": "5o1aPVDBapdZyHkp9nHK8fqByxNdiDZJTZSdtJE9KGY8jkjn73o37UTtPu2AP21uM53NpnLtQevG28WiuVCYs6C6",
  "key44": "2YPjurXKGDkFjqFma6UQFn5oQ2tMdhG8kYjaGdHrpqiVGmDaAWS1CvxyVjxmVaWcYz7HKkiKNSgjo5oxTX2QEXVj",
  "key45": "3M9zoMVJLKQU4wf6YWq5F6uNHDpkN2gzfgKDN48qW8YvhZi8LbHqc7xtjSXnPrWy8g19oDkAvkfXwMQsWBE1dXRJ",
  "key46": "4DrKMC89soLVGD2572f7suSqtKS6Kuo6DZabQEcKx4GD6wQmgvx5iWD1i6Ed9vMfJX7ZghmVgj4sLWa7UUyt5ppv",
  "key47": "5L1wZ8YV9yz8qyD5vPx9dLR6ZG1J6Hvx4KLmRe2a9NSfgNBZ7XbLJnX6g7QoHsnGK1SwMZmwkQsS9PCyiLsvEGKj",
  "key48": "iHdC7N9NdqGgwMGTi1MFb3C3gDvQuLVpq54aYmz1VFfKtjrrAfXzVXPaRHwPqkdmtTYAC5Ut58jR44224ATiAvU",
  "key49": "tajvotP1hsFeVLEdqu9Rs5RnkRQVkffvbfrLowJms4HQW7rq8y91f1MU9aiQeHg23fSfSxhi4ENEgaXX4cTciwo"
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
