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
    "3u1pniF9kKTtUnN5Th4ehMvxQFv85nieFLUrb4YqDwzrptjYCz4hZsfHnVBUig7G9XpvN5R2JB1bVc836JmbpS55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5WZfZuRwEuB2PbLZvRiZjZWBXm3eNktKhWbF9utA8a2z7w9Wp6zQ6t5gCS6AvLmoERve6pD9yqu8gbrFsc4Aer",
  "key1": "2Hg1RXY91txk7fYUocxiJXt2aM2Egvg7A3JvsMsbGQ2upyKHTzxDejCq3zrozDPKccQXwfaA5UBgND9YxS76wk4B",
  "key2": "47SnHLNQoMkaWaB4wj9dtqFhz7kfTZAJWL7Nda4yPNivzydgJjpddnWKzB1zKChj61DogSBnnrZS6gznd5a3WsUi",
  "key3": "5bsMdYPqnqRe5ErMzpgs2qYt6wLQLiB9KEcwk3dKM1bkBuCgfXcYgXmg2CUruC7V55MZbxJES31JyU4e975Bqgk7",
  "key4": "5edQEpeADRMt4Qofw5psMxYARfu5X85mkxV34vF82rr7rRRZiyYz3KTbQAJqYB3LQLUCdLFbSx9HKCH66esWjEXs",
  "key5": "4ZTAUoaHTiwoEUvSQXazV53KegA3vU9nNdd7ZdPgVhJSrKEggZ4Ka4hDtLXt7FVNC79cr9MbW7vhVR97bXSkFin2",
  "key6": "2W1FnTyirsbeFvEmZrCeEPMZwtpactf952uVb6AVDH8ebz6yduJ5PEHcrkrhQ2bnqmsi1Fxfdfihzgmu2nsUpWxq",
  "key7": "5RQ1E8EXtY9H1Yv4CZvx6NmNioEAA2wTh8xng7g2J1wjieGfnWr2AodDKQNfNqAHC6VBev68eN3Eg1KftnmXwRqM",
  "key8": "2vZxn5ezyzVCimH3Jcdpcw18xYxuRm8G1dCWyQYPVbZm8gBnwUN9fQqs3ZRNCWWaFipyBMiuatBjnak6zr1t3C4g",
  "key9": "4q2et8y3eVesDYoqvTyryvXKUQBEQhEjfTYENQoarFfBpTcB3exP42BDnkrpdpa5duMsUpR6n1RzK98vP4EUjiUv",
  "key10": "58mDQQ8JYxTQnCUfycDo88wVyYHyf5MZdSm46kZ46eR1BgY4Po6HGTBmKDJn8oXsx8yETW8iQN9xoiiF9jakmmk6",
  "key11": "4VmM6n81Vkp5FWMWiyQ1cc28J843JneK2oHUrqJBnpQKAzNvvBp5M369UFAa32R9hFmr7mVbTpHESevFk3bWMymZ",
  "key12": "6PCedSbBrLmefcRRsUV6efBjNYaVFV3fNx8cqfXLXPn53LdC88kqvYjciwBhg9yg1Rur5DvyAmhjsdLB2vv3tBo",
  "key13": "2dhD8EMCBfvT74PpihscauVtYDE1bBjp6ppL91nLHew1BB4yWxNqmDF8hYvUCaD2tmZkDQBjCpgsH8GNj1E2bkcG",
  "key14": "3chC5uxEVuAoFz2cZAjHo88Antn9eBwGnBLxmvDJF2wCRiRBz2B7H8w3vQSFvYmbtpybUVdLqV89RUbN9jp2DHdc",
  "key15": "4ZKpSuRaLMbm7wA1ZT7929swfmkmfiLKhmAeBwqXnyT1ebDNhqdzybYg6xWMCaup2KZJW8EzKD7Wgr5GfSwYT4EF",
  "key16": "4CjHVt32SxkoczrpsDyA7Cudmp81WCWmk2ruc3WVvYfrY3uXLXkjWiiiNXowKb5CCM1U8WyJ7DwiuGbxrEBGbP47",
  "key17": "5DGQpE8abiPfrGCts5wMjvmJu9oPczkue4yCUYTyjudcP2njDfzME4po8b2nQWbMmw9SrprFFS54xRjp6GqQJV6W",
  "key18": "3QJ5PaKK25Qd9xVmEGKf5QMnDxscAQ1KJhseFSbNvEAL7VhoXHfXPX5mZnYsnf2Z4q7gAa41mn3cRQjJiKJ8EpBi",
  "key19": "5pxki4WgCm5pKhVVzb3tdJENmRnwdgccjhxiMnUnUjET2RaNvVBeogHrPh9Ea4tz337BJ5VVg5FQhLAuS2uWEBDj",
  "key20": "4TDBjkkYF4YUGganuKApc4NEJTRipYXEPqWMKqo6P6h5QqWUPBfLKBYbNW7getwiTe5nvpbYTS9jKRre25cxSyXp",
  "key21": "4PNedAjkH6DghYBgF7iYDyMxojHx3KEWUyFWaTEx8fN9ZiwBqjQPbQwgDmNumGjGAVWu9USYwYGo2Z5oSzBCpZ1K",
  "key22": "4RyVLdF26GD5uju5eyjMzieNBagfk9p3PZRTYbgH4dQTAxZyuiGhB5tDdEcyg6ELUQRswd6rUAPTy2biHr4SfkPL",
  "key23": "2d7tu5D2Faeb9cyWZUtd8patk3g1TJL7cnw8v4PPUS61jZnkTMLXj2ZwGuRxTxEK9HFQ2JCQSZWQR8gXTfryQPs5",
  "key24": "2CamMKtiqPHykuiwuT1X2a34noyJvqMW47RvzZgCVM87bfXcSmmrKYx5mCwKRpp6sXJPvLbkapEG332xvD3JwgYb",
  "key25": "p9TBrUZT5AMAwDeiPFEPuTc82XLg1T3MfGrhTxBbnUtF5v7uDkomQ45s9ruJmTdwUWRAg4dnuXKiSstWXKFCjQz",
  "key26": "3BF1XdFpbw5DLvHCEkSNmTT8YyEAKjZckoQd6sHnRwNyZKpucTYqhb5spd347iW5WxVK6DtTmqJLciiNLy6BfqzT",
  "key27": "4WkwLHAnSmGjhLEKEt51mwm7dodSfrshsa5Nq868RD2TZDn25ikuBZZQA7bYGFG5jkQFpa6XVKSRRv5B12rqY7Y2"
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
