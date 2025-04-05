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
    "4N8k5sbpcSqQpkD2CC5KoPVQY1W5WPcHSoqyi2uVbYKoAnyfHN7wGgErt559jNhpB2i8itQynFxWs89pyxNgg2RA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53Ho79NLTx2Yau4bhcajdhRDHR5ppU3HQZpRHHAjd4KrLk77XT34smmA7EhFJKRN6248bUbobvXBNu76mwmvMgf7",
  "key1": "xSSiUdZPfWJSpEN4Vouwp6WMZoUiRL8KXf5o1gtEr3Tsn1TYS164j2D4vnFwWLGUW1orLY1EhV1FAVbNWTb5Ptg",
  "key2": "5hKt73NZRC4ps4Wen4UWTNrh3U6nQuNmxSJPXTGgVBuq5Fn4PcDv5yoaHjzycddAXoQFKtuNGoZ3xk2qbdWkzizk",
  "key3": "3Gj57E7nNzLSgmbmpjnEtCLBRRuJLVM2zqHVkkJNRxosFE3RhADXvJeqziSreSGYQJQyjpGJwrvkdcfeJUPMfMyq",
  "key4": "3Vtvu4CwmEdQLsXtjckTymzdZJAdL1in6VtZZjmD79evQTvc637M3h4hvjHYxaoSGHTg2KzM2K3ZM7yCGgCMtUVg",
  "key5": "63DBtwyVTL4ipXvSxRknaPxCpBNhe8xjrtDX4yemYJUKnYnSyzTRWYaDniuq15YMWJaVBx6pCpeqRFrrL66R8T2J",
  "key6": "5zbVxEBpDM3dptoT5WcNYrh6LCbTG8UWbkcB7nNTxo6fugPHT8bdSUcnDVmyMhKwVx3gFQMNP6bXtkyVjkgamR7Y",
  "key7": "LatAnNoVuTeFFVwM2qLDbnDNWbEjKUwmVQjGGiYsLk6BTw4D3t9D8oBC7G1EbZcF29tPNYoexbpX6jQPwVQxvS8",
  "key8": "4rZEiBDge9sP3JZDfphNXjxV53YGEoGs7DBUDkq5ChScknAXMiWR57eGFJna6zFxSUyv22MheKkqmEBhdz1jh7v1",
  "key9": "DX1q15PhRPePXqryxT2xoLHXmTKcNjPejufwEeAAn1LF9ujuF9bTWqrT4o5ZU8f3e1c1pXoMQS7cURDrvjYdqTj",
  "key10": "4bcLiXG7Y9vQr3tEfnUZSFXHzzvaDhkN5hPwXnjN1QGj7rSAgJZViUpoVE9zHTDHW1m7ks7GuLbaZTJyvewwZh6v",
  "key11": "4sx4zKPRdum92RXp7KqsefB1VXCt2YgREH1fcFKm4TUrWtKMihBprEyz49JMroE1og9nXwVgBkL7aS7itfrvUShb",
  "key12": "22kFTvLKVun11s7tJPULXtxf8eCcvobV2SG7M7Wj76GQDK6VgHQyG1azUfQvMi4JRtxSqsgH4xjGmQi7BVQWDo2H",
  "key13": "5JNkQFY5MYFpjUzNyttznyNjyvXP9NLfWutZsRNA8Kp6kmxuXKxtjewwgHxHsFq5sbBSUPoerLS6MrHvFyUtYRMB",
  "key14": "3pKSd8xX9Pn4fqCeZzwJMy3VSGQsju8RuNvj9KkJqqy3K3HLhHDpcFNBUeQtb4ybMvzHLWHNuLWNyszwvxvivTPi",
  "key15": "FDFhdFFE2nk1erKSqk6zHB8ynamq7vS58bbFUmYQ7T3Sft7AiQdxwNppLr4hyaquQHsQg98fa81gbB6hyTMu7fZ",
  "key16": "5HCRQCx83VLzpBMzWheawqkzh7zNDBxsbcH5AgLtpKPhxb37cGVrrE6rwHY9N9PBNe2f3sxgKxpQRcwdF23j5GF2",
  "key17": "2pw3Cths1c48M9QaqqE6woLdUdzpJ4ttKgTzu5qTDjAXu6Lr8xUFSs4abyFDHS5BP6A8YWpZaMMF7BkExBgcaniv",
  "key18": "679LccXuF8kX43Ur8JRjmjtaES2F9GpQiLzkzZhzZLq4zwg9BnK7yzrq68ryxc7DqRM2n4GqVYbpnsiBZ5QXHBt",
  "key19": "bYPemyJwiNQuGt9ftktNpbMUMKqmsdyYgXmtvXpxQuBdqxCUzBUSudgy511XF5dHBxnCuSWXdZwHNfZC925yQcv",
  "key20": "5c6X1jmT9REkqLteHjq3KYvbGLNtxvPo28y1kGV8wrMJnqSrC9KCDs59kLupZumfUiq8uuhMUSwS7iNM5Hx1vv2G",
  "key21": "KF56om1maeEhvSmMoSPycf6pSSpfx13cQ2j5YaThZ5swztJcxVJTmEhYxDLPrTjUgnPZrJPTr2FKm6qnCccqaw7",
  "key22": "GWY6w8qxKqjfXxJM8gqkr9uT5p4s9PJ1Qu5vpgcABiwxPdUd4M4wCvkZN3C2hNzaTnXsvsyVkRZ8zMcfYXvFnpA",
  "key23": "3aKH6WC9AKAiUPR3YTgSWZ38SkcWHq2uD8SMpPttZu9fmSZWaBXBf3dtcfPJATZb3TEv6BHE8ZJ5fd4WzJ6EBPwJ",
  "key24": "57y3aWoN5LUAyAkX2GANXbttvpZVABqu1P6HbobyprPSo9tGk6GyY92CS2U9B83ymntf6KreZUz4B9u9r5xbKV8",
  "key25": "54EzWumbZHoghRd2pv787XENuWtbydrEkSPey8Zh94RUgCdmyrPBuMbSWUDQTHQf8UYVaqSnEqJvekNk3t7VDHby",
  "key26": "5xsnCF5saM74cQS7d2Sv7Ng1HaNvfvb3wmA6YcyTN4BGza6Z3BgZ4YDEtJD2UkpnvkCYBWEjy5WNMa6hxV2SMxsY",
  "key27": "Nim2aQLPEbqcddqFThausYUuwjUxfkWgf1x5HzfABtokJ43GndSNXy3ze8EAgzZe2fcgw4uT4d22WBeDvbPWkF4",
  "key28": "47urjmProKHSfrQKH961DDp25AzQDbXCg8yaPMAcEUT233gddWguKJ4E3x8afT6x5ti4VNmWQoQ6tvsXYPCT17mw",
  "key29": "Xdy7LWGZRdsfNBfyUazaXm3Ps4BoKRY14DVZF2jGFNajVAYNBGk9yXHhMAtumpQf1erFXUcmd464dcNq2sFqbcB",
  "key30": "4MGbbFWUmUkWu3oWkwafjmVLkUUurMYFLjmFy2heyQErxUSpi7jjWG5a1jLDYyMobs4bPqTRbQhytiHKcos8642j",
  "key31": "5GZbizus3qRGy7Lcgh9LHmCM3Apv1EwKgnyW8ZfTBmJFyLZsqJXY3SkSfQsZWtZQUevxpYB6CtiqncZn53EvusLM",
  "key32": "27MNNXz1hrctaXL31AirGmthRoiy4tPNMZXLNbY4ErXViuhL4fPsyxMP2MWWtABhjDduD2kW8s62qfKDQb4K1dBZ",
  "key33": "21nNM34aQJGMV7Je1Twkh88GQGkYNa1fatsD5db9MybvUcmQKFx2YrKF74kAfirBgYjCABQNx8ehznN2zg7nrHU3",
  "key34": "dWcQ13uP1vxpEMCR4HuuKh7CTxfwX1QYRXeZV29ESsbbt5SmrkWzQVPSKrXkziMPSUj9KsWr17hi3KHrJuusdFW",
  "key35": "5ETtDao4LDVpJAhJPdgfgYmt275ZB24NsyXis8fGRyU6ZdMnU9VaHvQJtUju5GDc3kn5GtDLWDRAjD891JRhXb8p",
  "key36": "LrWJMDJLfThEc94AUxYqwpHA12f3Xx9tZ3N55Akc5Xu5XVeSJgu1CSCk9yzuir7mUzAxYwdfhfMNyXvTqq5oTi7",
  "key37": "3Pij7YMMBKCHKLTdgfP6Mju1oJGv8oveqaqKPAgear6reUDMdsWAfDBjsPyX2XzQaXpPceBguqTwUWqgvBRa5sqn",
  "key38": "2dh9t2ARErL3jJPaNEfzEueuGDRNZRiZbnYhq8Z3P247RqnSKgoEHskZVoxrHis2q1yg51xs8Rx8AwUMxTfKS6vP",
  "key39": "5oWPuNNtjPzFELdSeaLmG87qi6jTHVhor4b9CCJCLG1p7r1L8HTQMZVfaKHx6JpCGm2TnSBWWMSxo8iL5x2pnRk4"
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
