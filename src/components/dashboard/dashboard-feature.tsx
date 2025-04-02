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
    "2LqpHBLKpmfgBEtcZQvSh9pQfj1RgzayJFdQsy2yxC9Uwf3ZAPnvnhjGpPYLK28JNKtPvd2BXu8DMCMgoAr5QFpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eT8p7JSC4XH7dreEcghBnp7dEzSP8qHZ53mFt47PjipUwuwx6zmwtqekHQr5R9TNBEar4V6WhoeKtz6ZDm2VLJT",
  "key1": "3waBAH1kbNYRHGrb7FZ7KPdMvKniBET23gA169RAvm6ZCfxkxoik2evHbcy6ZsPJpDSwYZLCUfMWnn3cTriUGj5E",
  "key2": "57LEJKR83JLk8giPWUkErEJy8e1dv9sfFTzyUJTwY5oLZT1uD7dVpAuZA6bVCfDU6216BseAn8bExTb5CPYxDgir",
  "key3": "3BHDfUShPujmEwMqSHo4Nm8huztprf23WKBMD5oF4oaqEYAz4jrYUN8acVRBqwr7jH2Kv6r4VR9NfiNFaVspmk5g",
  "key4": "4PAW7bDcLCoL3fyzskENSxAnWHqAQ1DnU9Tg9gBD6Wp67BV321QiznMrJzwCZt2dCap2DJbfPRLZgsgH3NKDtMRQ",
  "key5": "4kbw2XeGwUWTBF2darcFdQUsCQDhQVx7oJAcJjkbX7vDcrC7wosrHrHRyDSjDLPQdz9CAb7qJmd7f9q1VrKQS1ti",
  "key6": "2muxg48acmNxwFpYnf2LwNTxGKf1j3uioom1XQybJvkSpaUWhNqPpJtB9RPFe5x1DnbAi1xUbqVTeTh6HTG7HAi5",
  "key7": "3vJHcDFWvzm2nte7DKP3Qj3tnzuh399tHmqfSo7iZecgM59CgNj97qMpc2DzNUGfWHL5a2hBY4HvVNgR3fB1PpG9",
  "key8": "3CzZDyDkfxuAnmHmz8vE88biGWqS4i4Kr85Ca1F5n8RW4t3J9yWsAccXfwN2C94dW25YjgL8vS8PjERNDXqn7pnK",
  "key9": "4L4owDayL825sQCTWgPhDGH7m3oMnPkps8Zo4M7m6By12Dk62ZkKCZs12RxTQdhJETv7Dn8wk8CRhn6g7HCBz5QA",
  "key10": "ctth3XC13UCW6BLVGotYwSe8yyJLAjb15AZ7iuVV61HLMP7QUpjVDNPSswsEkUrVVhwJ9KB9URjNeVuBYRCRgSA",
  "key11": "2oGSKwr9iSCysjDgmAHNHQbE5Lx7J9E8uAcHf34P73mw5pvxD2L8P39tByaHq5rbB5Bpic3hSjkErfv3Y2EcicX5",
  "key12": "4hmEW1wiHAcaXkw5BQK7zHVCyKir8EhhXh5JneKavSYLQ7Cf128ZbyBvCDikSL2zxU2Txjq6ALdryPReokBbj3AU",
  "key13": "WHAUbFjtuQU1jFQxwY2tsta8Ldojt218jGBAc6RWMfej98RQBLdDHht6vBRneiVSFN3rrTYgoajymS29g3YcKcf",
  "key14": "5BzDfEMrQaKF6vYajTMDyV2aLM1awMyggP8TjRSNDqbmRFh7LUw7F97NQRubGNbXn3ssrK41E57CjZr7Hwg3RcY6",
  "key15": "44TjShHJzxVhitbrhztJu51JKjKajJhzqw7cDakMn7n4YEJKF3Ug1Yie5dKyxnztSjXW1mEGHRD7uRNyk1DZVom",
  "key16": "4LHYj1aecVimLBpeifDi4UZMgSouPSSP2ow6wPrr2jzLufdq3KxqPeq1bsXRLo7USJPwK3SQnjhZDLAx5P6d2svg",
  "key17": "Y9xw8UTLM38XGSENBKJ9xgQqJ6jJuP9kw65bLPgAn5QFZAYSH4VDZp1zKU7ao2ED4yznr18b7MFcFfNMFC7mzuN",
  "key18": "5jhtpnZP8SDFmXwNQAY9iJT2vMSYW9ujG27MHyH2JB3pPZrBoC2TrsgADJLVqgrEoXFms1qJUmRbLf5eRQABBze4",
  "key19": "V1nDzZj4cJUmWa6mjzNjx5RcgphkKeQ8vzuEMKBHGXBXcGABUHDSy7AsrcjoCMMv7E4pmBxxBqHC2UMvoetvYJ4",
  "key20": "4cRc7uiEYnvwLvuKw2ha8zTwawtZBnbNigAaCtqqSwFhu9B1pHRSP5QHay9qcr9Q6azG1aNvL1T2SDa1DzVrPyDf",
  "key21": "3Tq92nPrkvUm7K17EzUHBKduDX4d2ErHJNxEE9akLBvtyXhqaBvPUbmaVVCXWbAmpF92tou5mua48mmPWjFJcXJK",
  "key22": "2i6uvqB2t2hVC62df5ipoxsfNJft5t4zjcSrHm21R9rvET8GZmgBa5DKSxKRGnUPf2QxRcKp3CECX9hTVh9dJc7j",
  "key23": "2C8iyjh4XyWPiMVyfqUPTaTgpeWK9GENC7nEVToPoA8f1MYM6xW84UyfnBJw4NvMgXBoe2E4syX99snMdxEQnVcF",
  "key24": "4ShCLzspQiixTrafvN8nBzpKMkWuHAgF5R3vQ3uG2WU2zq5J16LwzY4mQN1z4ehLKY4QpZHagc9dX9MfopUTyft4",
  "key25": "2TdY2rJvvJ7TXjxb5PtkX7dSPLLrJinU3YYpd1y8dN9DXEouBmAASMDACnKRgt91aAV5m9L5edkY88yeQkcfFvLa",
  "key26": "3SxMFL2tKJHEQvvKXAvNFcbCQwDbC3zn97g9NL8e2ATcwvd8RcYkYL39CSD2CDTMiRnCagA7H5jH5dW7D5GyjKdU",
  "key27": "3Q6e3trPgZB53U5mFTNFrJZpzZN5fU9wcWvM7ead18UJxne15NB6KAWGER3RvM2MXYMQWjtVrkNxPdktA582eu1r",
  "key28": "24F1XZuWYdKvX7ZBLcPqJ55tRxPo9FkMr25JmkaXbZEWifP3kQcdnBLU4757UeqCnBb31gxMH6dVNzVoWQvdQELC",
  "key29": "5HDUSCwXkje8jxRkuutKva3h8mCQrN47WSHj3BxvuSypGrx8wvMM8DHVArezVRENogpCvEDU5Y8cNyDt3uL93P3j",
  "key30": "5p8ybDPbUL5gGGBSYRdH4PhLUcCT4SVBuagP9aCFfLKirC2CcJy6qxnfhcC4JUee7sUrW44qKn2zZ5tGLakRcGc6",
  "key31": "3XKokQThbEtBbHJH1QRSeDD5EJKuY1Xr7qz4Y3PQZg7NzNnYwH9r9B2ueqnUq7PWTcEpatZE8KMSiZRBV8ntkrdX",
  "key32": "5vXWFm5v7ETKcXrZFEvJEHENKjXBAyRhwr3UXRXFWK7a1EoPmL4AMNRfJKpvqh7zU9qXehcNbR9p6DQ2JnGTmib2"
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
