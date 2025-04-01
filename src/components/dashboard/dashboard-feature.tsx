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
    "w1FCpq1K2ZNDAJT3zRX3UivvDaMyUhEUQq5oSBbdVd9d262ZREWo5eAvFTS8CB7YjLWL1EpXWy9QhgKphf8Eye7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnFtDT6RPagb4DQxk3YJsmHtfFfhcmh8qVjZr2xQuNGwmpQ2MwzvyXq5yUmJcFJna6dkPhKRuN23GKe3NzQ52SL",
  "key1": "51JnPZ7WHGFfnUNFpyj4sGyb9huVyDXCNH9cNJGteguTG8p4xCGgPd3bsJiXTqV5SJUkP2Smt9oZ5NxfKFTSBFaL",
  "key2": "CvFaHhGwDg58mbWKj1k4QudrHxczGV9LuVVNWJzL3SdobipB8YtVRwY5Xh2cQX1U8rpf5WsWrbfTFFSetK31ET9",
  "key3": "26PagrQYYDfA3aA5saAj31tTnrEDtPUJZTfgnw3BDq6xoigm61g55hFxBRC1qQS7wadz7sMwqYfczKxTsZMbBvpk",
  "key4": "3xT4YtXUZqaSbiAYEz2h1QTR6MurRV94WvyzNox5h53gCwmerecUtuKEA5CkeUGTmPyUtSwXniX7JCbLEWTVA3kX",
  "key5": "4JJGYmiX5AxejxkPeNjU8xahvnZweduxbvmxkHhLtpvwiFNGr25rDyzprorgbDqdev9HxnPmZDxnXB4yHV8Bc6bz",
  "key6": "3YfJq5KTNHq1oBTT2KgeK4xovyWPQRBUnkyBC2swvifiBL1AKgnBAH4nkMQPpEpSVaM8YghMNmPGQauW6WZkhH9p",
  "key7": "4m6Z9Kxwv7udGoC2UtpEuKyJ21HMLo46JDUXVBwTY64LXx5EQLic2t3iRUuRWxh3BvjPqybU6y3SJKcYXyf9DMPt",
  "key8": "cgfUxz9iTAiSQNGFgt3VVMfhadw2ivxTZiSkgDCPxufPCxQw6aJb4wxFtENJCrN12HmgQPRsrQYDH2izwFmcRrQ",
  "key9": "3H6TDQrkTxsJrmwJqT4X9BVgnFeNWaTEPgBxM1uU2U4gxWwpGZGJUwiWY1eicmkkkm78JEZuzpbEYfjUkRdRQ6J",
  "key10": "3cPRc42PPNEH2tLNG582eKknT1mZxNGHRRnBCmhYWWn1dXtBy1tiBH5kcV7nUnaGxAhqGh9AyB7qmCh1SdftYvC5",
  "key11": "3quUW9QbpW77Jk9L681U7kqZbG9XSX7Fy3z4vhwyg28a7RdA1pF9X8wtuQFbwUU2w25gchCGK3Nu3z8oo4hic5MQ",
  "key12": "3TPy299UWz1sJNLBTnHB3ByjmcRNwGBRZHV3CxR75maSXY3NFLmCs6F5E3cTu4jxvBJALJJ1WpJuBkwZxuiv4E9W",
  "key13": "WQZPKmw5YFC43PT1yxLC6nNhBh9XqxJ8b4MDavyiUo4gFJryzyfwgHUs62Ts7arbTbRS91JGwSzFf8JhHH4E7bX",
  "key14": "3nYx1Z2teh2z7MqcMoYd7doF7Tn2EPh6jKmEXSi9KaiYeHdeuAHkXXyybeTaHBtXZjnyG6XdMeeApJwYsPC1DsrB",
  "key15": "4tw9sCTG3TCtaScWxEho8g3fjs8uVn333zAEKTCN7t85vmv7CWkN2Y87qPauFRNwR5yY1VBrBQB7faek3XQFja9x",
  "key16": "3tGZ1xPe6JPHsBzfThFiTRXD7wHvcGswyDS9oiDKgukGrjXUAXQyaKyYAn6tVzDbkYWxaMyx144qXeTZ3gyZzc4Q",
  "key17": "5LienJi55gYWBzRk9U2A2QvaNx7mpXL3waTJe4eJeyUFzhvLinx89F7UK8UE6p6PeWzRFDXsDY8Mpj2uaanRfKai",
  "key18": "3n3c4ChrGwQHgHu8sw2GiNiuWvXEiBWNUJZBPSxhsszJsf9fwfYbTEgMXYSfpVKBxM9QLNtdsZ6LncagrTRRL1MS",
  "key19": "2gNdcnbxyBNbjNLwrkyoe8boRc3f1hcvbxiRmembKAoc4yGRFoad2Hxb7aZfYSN5N4ENNWB5nMyRtgum33qA9S2k",
  "key20": "AnYgnPS4tq8fLrYe61NpXiezMnVfp3mnyM2MrbjU1mbRyHZnH11nbw14haYX5CufToFpuGDJbzghzCHpi1i6vwx",
  "key21": "2ZJD2weuRTvsHS6RaFQemz2oQ8WyWSNQC6mZ3NFto8uZwh5jHYNDEPt82HwuW9qYv3FDi5szgtFmWfPp5VbZqnty",
  "key22": "5kuWFU4H5RFjfZqMSfo3dSxY4VWrfZaXDToi5DCtfLDMK4aj6ncU4GjpnmgRCHJfNoXPHrYUr3z6s4iM8kGsPYoC",
  "key23": "2tZxE5CL15ndszXj7hoRcwuJcZWFsikq7E1ws94x4AHoWiggPvHmHpauwPGKQmRUn7DKJkkytmY9R3RMkaLhuN4V",
  "key24": "qGCKkTUQGsYtaYx2eXWevbtPXmGqRoNBcTsTECpc6u1qwt9QAojTs2XhVXo73ZHLLhox4StVQnTaBB7KjcndxVz",
  "key25": "4zmKMdesGzzgzgq8cp2k7hA8Srz1pp8acob5P4EWNHmAcQxEje9kqqgPSdBT2dxFubuAnGQ64yegc8zTLYeJAtBH",
  "key26": "61b6jhzwJhotcnhCGvbhT6JpyJzhoYm56jZaRzRmq6bFNcVQ3F4oHxCHDBKqM1o4LqtmHmhF7wui2RmURhRxSBhS",
  "key27": "4QYH7DnzTPnWe72npRyEKKcqcJm2xv5w24VUsaYUGcgKwNwC9op9s7svpcpN4Nzss9qCQESQ7byyfPsEJf8t4w9e"
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
