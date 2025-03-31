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
    "2VuJ5SwtWtNPY52namfuXHURZA5hL2564d9tFKjyNf8VjUZFQ8VM8MCPNB8a514no8ZYaYshVhAsXFSeAzpYD6sL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yt2B5EGiiKGKcmK3MmbbymnEcj5yVFYbRVhYXq6iGP44xv5vjQ6mCRb4KQivVB7ErbpDo3Emu79xZT5ewbFR82E",
  "key1": "5vT7ugoDUPziPdWmZGXVUwmyNwtJi6TsUUyei2tS8pafTsJrM8MFY7wuApFK9YJC9TRrxjNkYGBbRMQkWRBp4byn",
  "key2": "61VaqGrcPPx9fMh4WFVwoPiprdayqF5dU3fEV44k5Jj43NaoaxebGNAKVgvmGWTwiG4uy8kMYpu3m6Q1epTXNLjJ",
  "key3": "VogPHYWG79oazfUaaWLXeBYnFrunYLepVQcs4pWugNQ9B1bqMd4JBD8x8JtKJJRWsHY41eA45gN1aH232UQUKHt",
  "key4": "2PBU3fgLM89K3p7RjSJq81LwCGTx8NPXssvXy4iWfN2FjbhVZx8Yv39nvRsT2d4epmQokxxgvgbaK7CnsWNRcET7",
  "key5": "247QfSxHVoFFCns2YowobGPMS9TuxbLcAc45gyxsb6S1ZAMfFagyhaMcB39wtovUE15sCkzWkyoq3CSGDSZoE3iJ",
  "key6": "5BUwcGUK8RqhHjgwFQyqLgbmsdvqWiWp8g96MnFsZWEUTMEk4atmukKgVAMiHMEZjPsPhEsBNNeBAq1TdLmwCw9J",
  "key7": "PmKLW3hR9gMWPnE9nRJkJiDeCPKRQvR17xrJjDspQcEuYUpAhrmQgjFDMWc3usS8nv8h2xVAqwHVSDoj6hEwubq",
  "key8": "zdJoy3xrF6hpRbqe6n4qoWQDSJbu9YPoCq7rgABGUFTg25wJjZHGY1KJcibf3QX5GgLKb4JZaYjbEckppi1i4CR",
  "key9": "37mynng3peF2g2sj5LZPF7sZubnktmQ3hoTkZ1B1C2AtLjqnghVrNb6BCnLS3LN7pJT21HTd7AvueaUpMxABp7dc",
  "key10": "5PVa71u9FxeNqNNBZiLvh5LBy1SnS9uzPn4re5FgwNEQGCyADv553zKgVnfcX2JwwnDxpjcb9P9vHvzs1SnMrAiU",
  "key11": "3EaFor7QGSAoyEx6aAr9hrk97sgb4sVM5PYtRBSWNiNEZfUD7FAuN4cLWReNAN1UmEacoRi97aFm2u3eq7mmdHGh",
  "key12": "23C7XGfnopUEkPM7zhu6KDQKxb27gyZiSq4ckPbGifvovZ41rDrYGHKm9MrUFCfWFZVBW7QFLH1UhDYx117kdBMm",
  "key13": "4reLJbDbEtQSMeq5fvJ8DiGo9qtvQ3Kj1TxDDTdPa5AxxnH4j85hSB3rGEjenJ58XhkrXxrmVaMrMpEnkfqqLskD",
  "key14": "4gbBVdqUSnKns8S4VDj1WY2p5vcWXkqy3JcFeX3NPZPrbd4AFw8rMTmpvpkbxZXiWzcJz4Fh1SbKXQiYfsQusiJX",
  "key15": "2HJxb1RieXftgabLcMnJzW9661dPYCCD6FpoSV7s2HbTAwcZsTShV7A2LR52tJDTJNn54cGJAtvrDRjpqKUXckwD",
  "key16": "2ge6D1SPadTMpJduxwJzm9kGxUXBDGUquUi63nLhGXEciCNcHrSgu9UFzdmqq2NDqbL7xseCUgRSYnVwDfYJFxV9",
  "key17": "4wn4zLPt2orA6qKC6yUw78q6NDg1CTMXSMQe89sAMMWXKDKQiVpFf5BQw3ssnW8x6TPEBoGjPcz3dYoi5dJodQxK",
  "key18": "2UGAKkPMG26nGn7LCL7krsU6S65BNG8heDAoBkzgxLXxBPMEkZoBEXZhv9BwridZrFcY9icLEGRQUkTVuwkqTM1B",
  "key19": "53V2pfPWPQDcRNu6SNa6s7Lcd2U5hh7GtCcK1VgbW1sXQG36pNDUvy5BgEFN667unJDfw1xdVn5HgcJqu6WX8tzt",
  "key20": "pwUqj1nZu8tBDCJjPNuRkz8x1y9kycLzfuT1VFsy4AmzSzmRUCAhSAYok78feMEWkqjCMRG6UMzrFEjVXYagi9G",
  "key21": "yo1cn4tanPioc5wGFe5CR7v3hDrHQ6azZ7vhE2GQADbTzQpZTDqnFaTuzYWBSjKdxXFrk4WTbGaExx8xDwuSnoj",
  "key22": "4CDMHAkP25cnYBGgGeafwXK43Dky5ETw38cNTQib33WeGV722rvSKU1VetNqciNEbyVokMVSE2GpdooK1BBGepov",
  "key23": "3Qy8x92s83TUc2nmQAFZ2upTjUfXTvQDDqYXYHz7FicZi9bcHLP2hDeX7Tj6TeQdawEvM9EwD6DdWe2vZJRjyknN",
  "key24": "3mUF4SoKVuM2eJ3fVUcK3Gnk1kReKQeGKYndtpLmVip8hrTpKsVK5E2ASRsSrpDMoHLLcstVkBdr2CEmyJKR3doM",
  "key25": "3FrCdVzQFEDTgcK7u5yAfteWm9FEkiSexg5wAms58dPS1FpX4r9dMfz6zcfDFZrFehpUDzwmpVTr3CRBn9mcJLCm",
  "key26": "41DtGNTacbpdA9MV1o8zLcpbpGNUiwnjtBHi5o2ZFJLyfcBwmDQ4nsvioparJoNYPd3aRGBogwfDLqG8uUmi3LsE",
  "key27": "4ZUbdt4wqLMJMtw3rNGVHsnFnpHztd22vLsecVgPMd5GuuNch2G64J6VCdhyVcKvzeCStr4wpXo9vXg27LHAAWEx",
  "key28": "552nU9b183tH6k1PySgGUrL85xHRNmEmszqMT9FCHc1wWTvdLJsH9hXDJJhg6TMs4HwfmsUnNet5RtyiHEsZtpgJ",
  "key29": "2oAkJbRq3u83HQQ483J76vcDpKy9Y4HZEVTR1Pa1UKoWEWoAus5NNiYJGXhZYGpeB39YSVSQB1Sswhw9nHFssW3F",
  "key30": "3MbLK19ynVmhYH9B9SDS7zbcSjcvp7nDcpe7dZa9MJx5jjEwRPv84GSjmcG5uGxca7fEDtoKB5hzhVTCftWGCUp2",
  "key31": "wVCYXVv6Qq2QsVxLGM5ErrUioR98MHWx3CHxZ99pB917D1kTVFjgnENSK3gBoQzSSe6rGxUbKjmexb2bCmuJEh9",
  "key32": "2mMN5r5DE2Zt91BFZoEbLsjC4oUVjgJCPFqfn28b21YtiDhWi4fu7UbcjFAeJf3Eo2oYUkMZ2vsF6kfEnm8skk9f",
  "key33": "5EXpRtkQ3oCahiSKopgdg2q6NwV66TijrV9nkaracbUEhLQw9b8JUqoRCqUjfJ7K84aF7STo1hNrRtMheP3YVEfk",
  "key34": "5jcMucfkzX78vvjj5Gn9M7Qpf7SBC4SYVaV6Eis9QTs7piM1jA6E8eA61g1zkUnUFrRKHf6gvNNzfhg97xu9bfhs",
  "key35": "iLBhEgqQ58MTHnj4U1M8e5PZn8pR69WmbUiHQ5PSDHn8oSyGU5oJYwt63z5LtPJyLkLbH4f9pKpKhE5NmbLqsxs",
  "key36": "4geMwgPsbCF1rxxHxpP7K2QKSQtjBzxfbLvUaFpPHSVi5M15AGdfUDAmA6pQK94gcRSjtogLseEGQfVHqr3V9QYt",
  "key37": "4V8dyLn6bKzEE6BzArk3SeMBhBReFyQSdY8bYmSp82fM8LVPSAquxsM329MCDifi8sZQihhmhHH2DQtny2m95iS7",
  "key38": "4SQPEWz2eR6Rr1JvoqpjWP9y4q8zdXvHTYXK74iz85VUkAMxrFzkx6Szyz4PHsdUkazogWzWJTz8Jftiow1Y6bBq",
  "key39": "3bumU8FcTFeC5mxY3hYeVX53axzLDvfo4kwAAY9u2ABcGur8YE2jPnCS9Jp9h8jY7gTfG8XArZAdnC4xm58EC7m8"
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
