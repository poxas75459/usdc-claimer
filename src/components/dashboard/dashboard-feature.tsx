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
    "g6Ru21vFfNXELsYZqvGfG1sKuc74vkQiQ2L8rH6SriwGzUSMov5QHHqCsNwAyCtVzsUKH9eK18d33hdHzBXXG5M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XxGZwxuV4tkPS5Wt4fRU7qSL588UWowBttetTnf6hc3gMHRTpagnbKufcHADP5JejRL1BQwg4mHRciKUWMsVHWL",
  "key1": "4ybMXw3bxRTLPur7ttfzethy8bsY34JXcNedeWkSt9tuRXjENkT5SteVT5Xxr4QxJfADCfUPG6pBfrBnax9RTCqY",
  "key2": "4ik6YGQoPKF4Pm1QJMwjFmo8nU9djH9PKT8mcCbaWJmvNSrCSKLFGEejypZiTEGCmTai7s2zbFEQrZkA4wr68RDJ",
  "key3": "54p157mtz3XqLaqPTNWQMiufaujq9DGNkqQmd6ossaytjPRRAR5yYuVFmk9W9UgNriXAzS66AYkTpqCvJNfqyPRU",
  "key4": "2JHUKKjgTNxy8XtHJxAq4y17dvQBaWA3UBSkKwzMDnH3ieSKXxk2DXdcWfSwVtasm9yU6vtj3YY7WSs69Up5BBe",
  "key5": "5sXVAoyQwvYgzsXBU2dQBFpXi8NQFV6YAwP7Hy884mSdVBkMKDRKTipMFGgXG5e36ixATa87i6Z98FZKvxPVsCit",
  "key6": "2dMav9RuwLrTTThDR3hV7fMkZcctYg1KfBGPCGtCBiJBkf8wb3WqAdinwpUxLUMCiq4rhu5GhL5cjLLhpA6KY1wJ",
  "key7": "3bfXDFTSV28mYLM3NHWM5XWd2B2H9FuG1RPZGxYs5psEmoUrSWXSWtPvKH5AuSFLVS43u8C1B5bPMGZ2b5bPdFXR",
  "key8": "4WNKuweqAJcfoCj8tb6DCPcQt8ywUrkdVGDyhwwWsnorTaEXAM56QAta1eHiFxUvsSoRrmzv2kaVRkcNtyxk9tWZ",
  "key9": "5HMznEC8pRYBRzmsdQkF9USA8ophJDL9qrjQQ96CweTw6EGyheXgna2HbS9DAzoijbiimnuDJ5vm4b4iffTqaQeJ",
  "key10": "4hCbeXZyRmFsZcxP5pmrSYCPmdzCRtVtbzJ4btJsAzhwqJosZ2NW5dZjU2Eeay1ZC8poafHSTdNvyQTFE8KDmvyb",
  "key11": "jek4vULmjRfzsJCA2jAXg5UgmuAWyhabJutZqVfw2kysT6qn4GLUnDpAXsZ1XK4yaK75fYA4MiQCShS31o7f46d",
  "key12": "2cbriDsmQF3a3hREMfvP4Y5mxYrhm7DxuCEGVegX8pqeYy4z4GVFk6s8Zh7LA9NgHefeyhZNQJkn2v7yfGoU8Nyx",
  "key13": "LZPu3EQes8DtcPx2qW9rm56sngKHiTicPWQVVvYrAEtERtXPBJkoa6Gn5XjqxQVH5Z3ksFA1istwdg5ZSB8BfHv",
  "key14": "4vUybJzatzREm4ovQEWaj7hjDmrEzf1BPrqSPaa7uNRe7fniDoVABTxaMcZeN5CY6ADkrN44R77khgdLaX5gGh34",
  "key15": "2ZtNk6gLvJmKyLtfqghcDf2EqD9uAt8a3jTEqvwWVregzhMiAev6yaN6wBTx6G1szhYBfWs4da7xWRk1jpbpWe6G",
  "key16": "4yeb6HedUXPh4PpfPVBx47CdEKPhGZo4LbQp1id71W8rd1RKXbY7gqiQ3wGQJxJVcuaiS8jTXYi6C1EBcbNPrFVd",
  "key17": "eSHLTQUShSR8U36HM11EHSAiyXNtBSCDW8Hf9xPL7eCSv9wvwC13o6Ko2Y6p543qCpiWY88mfcrNTabBwijkRMG",
  "key18": "4rp17cXkW3C3hB8855iyGQdGj3d4fFWQwWZuz5Mq4XrwmdR13NqXCE8osKRmqEfVM5AeiroNKmaKstUgfAtHo381",
  "key19": "tjGQhvSAkRzqLZ1GP3s919GiHzmMhgaLZurigdwFdppRN4GpwHvh6YfnuNCTqSGAimwGMu85vU3yFvggrZewLAW",
  "key20": "4LY9FFHr9jSnYJ9WSgHwUayNWPnV1edAGP2oDDdJqKaE4pHQ3ic2WoaUUMGn49SfMmAnyGHcvxJcZUi5wZxenBpz",
  "key21": "3i84EJSZUB9T9iGdGvMJEiDbyS2NkGL3QgFwd5BrFaN5rKrQwpuqJZ9497hrvoxNhYey3HZZYAyUebL5eFBQJtYS",
  "key22": "4LgLa8uvNGnbjnLWoAgQP3BUn7qjSQKR91ijRkRd41dgeLcb6dwzuyS36wAeXHF6KHgG5BcwkqS9ctuziq4boboV",
  "key23": "26Zv5prA5STH4WeEsPX3V5dNmt122MHcJDWat7Bz3TruA27L1H8GDJo1LTtU5yVpMfdafoq7MAcSxk7SZuxjPoru",
  "key24": "2VCc79ubgQSFKLvSq1qVkWZGutcA77Ejt43burUXPs4BESEf4HzwosuVaeu1vDwdmW5NHPkLdAM8rWnUJP6xGzJj",
  "key25": "R3Y1NFmJKaQ7ftwaxp12nA42Hk61uSGZZmBxrZWBHwQkEdPWLGC5cxbzUd2S3dk3Yavg2RHrf2Ed3ALqadS2stq",
  "key26": "5raQ1C3i661kN7LfYBAmaXpznnweDDnWYzqv4ZiDKFcfTd6frZfpvP8iHXtpnEDcL5sXAJ4AZg7nfugUL3UZxFmB",
  "key27": "iZZW1oKE86315LPgHbm2zQRacFRza9EbMbHdWtmaVaCaHUhgqPatrpGUBdsxnMRepS3T6KWdET8H5q8DXXpRzGn",
  "key28": "3t1MnXh6RZEFcaTLWKVMPNW2WZPkDSBrwt24XJyfUgZT389d264apD59XdLynzPXDyyieWUcKYoPtpQhyJK3ohBA",
  "key29": "2DfxwsyJfHuKwF7FzJ1EWPNPh8qx7gG3KQVTh8Z2HVu7vsrYW5kkQ42sxSYwC2AgRuLScAWcVBxh9q5FeWTn8cym",
  "key30": "2fEnLC3Lds1ckpBwLymgKhpagVPdWiZmnjdRwyzhXu2UovZpcABRCXtxoZpq38wkxc79Xw9jJgiZJgdjPeRdMEYb"
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
