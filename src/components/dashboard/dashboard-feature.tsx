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
    "4wYCNDDHs5KbcujMsupzFgxaSujjUYsuRyc5XRYAZxuEoRbYUtLqM18B8UQpCFGdK1cYLU3vjyx1aBKbPQRAkhUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dXFSdf5R4jHZwf7MBMcKS8mUg7NWB8XPR9bkT4V1ZthbFHyzzoYyVK1XCbgaQ54hxppxteKqpgzhXW63nvf114K",
  "key1": "5Cxt6k7Gs3FoCRubGPh9UuWnE1zcmtYyMpA9TtFi7Br769C3Kb9buuG5m153PbxLxvyBKEMzK8tTH96EraLV8uYP",
  "key2": "uiBtUL1Rxrr67CzhmHe83nvLpexagGwaPr3E2WUq52PXfg955wKjVXcWcqkR7s2oeHsqWm3tuu5MG6HtFVrw2At",
  "key3": "2uwVP4H28q8TWsiqnhCpU1LjJdkH7v6PUtVK3SXu2tuKxGZRp2abKojMdyKcXsT7rnm7MRW3yR4XqYiG8fUgDYQ8",
  "key4": "2dFB4Sv25xTNciu3X4aLMniBWBhefpCqSSZpLpkjzwEG7EB4TNMqMnCTNEHPYwENvWBjqLzBwACtvqnc4LkQiMmE",
  "key5": "3bzvF3oC7ohTXLh9Tyj3taWMfMNXGAMNBmHDfWt9ZpnB2oGT54knu8pfGera7Vxo6qvgff8VpGWXjftoVLy2qRwf",
  "key6": "2QUseoBemTwZedGvnqwdZ2oQwW2U4Txu4uDhWHgZdCgQqty5epUqnZ2UZWWtfCudPEXGBSJug9UjG3LgoPP2xwdM",
  "key7": "4Jz31CVhpFixj7tBa2cZ4bME2dYbUtA3z8rctzaN5f3SJJUGVV7QK6uhZ2ew3eG9MoJp7esfi4C8AkrbKvYtDL28",
  "key8": "42zEiHCsrVduPmrmRJvMELFuXCqyBgmyQR4XmW7m3CcHG41MrecASk5c8PGVXpNJg4TLTPnVe8gJ9QRtiovaSEr2",
  "key9": "4UEGecQZVNBcxyxoBki3XYnxuoTZGLUtc82y8rD5BQcoSaF8u6g2LpAC5N9NxwpLvhZ7MSMoBymkM4Ux3QwmMHDz",
  "key10": "62qypHrpnUK8zqWaiw44h1dLdsLEPpMm65ahX4ZoeKhe2kEaGsu4qdhwV59dZ8fNesZEm1k2aGHJZcMAPEEsjiVi",
  "key11": "3nFUq3Q8rWnNdpeaLcAMUCcfXNbgadVmDwpYkRYA7Jd1JiXzVZNyKNzNhpxFCZrtwCaZJTpnXzp98uGu3uUSriLQ",
  "key12": "4aEyqodvRM6Am4RAyLFyStieCcWHQLm6mquXxA5rPGt6CP6N3vVkaLU2EXxWDKNpeuJdyUs7FMqug8JZenC7wK37",
  "key13": "KzC2urmVqsSHF6yDmVZ57HZh2EFL2gYArsM4A9nZbMjDXFM7q6Qtv7Ai9rtEj8dxFXgRG8WouQo1886ZX5C7nNx",
  "key14": "5je5K17THf59RQJFQAkwZmhcRa3cS1Lg4fMFjpRgXjM86XWAXsVzYJLyBimCFhEdRBecy68Tw4rExRe1NZEmYRtQ",
  "key15": "2axKfDbX3EFgvmXspNr7Qeb6FU7w47UsrZM3qVTGYFDzF6nFbfMWRSEnqMDwq4xPEQtX83cgj5U4WGSLjoQeTow7",
  "key16": "5VxYBoNq92Yipa1d8A4WT3ZaWS2fbGsVZ5iAP5P5irS4kxXatJ3EeRQeJj8QzBdxopKtdfp9azLZQHGY8rhePhPd",
  "key17": "4d3LjeQMJ6KkxnkpJQ6RNH6hKitWSKukXRXw4JsBWAuXJyAvxo69VRbdxdTzXkpiksvKGsMYsDGPatmEJbMkmo5T",
  "key18": "3n8NYKsQu9Tdxpgo1smaJmS45dPRvQErKyvhc48TxhYEkwcd485G6yUo8sHQZpp1K4yTrmsSeqw3cNjcbfqAnSPX",
  "key19": "4VQiF6LubuB7zpWy7eNDXPC9ssutNYt6Drsfc8wittSq7fwy3TUrmjHvt4zSruxgScEkvsLGf3fMMKnYoTD1AnMr",
  "key20": "5K7WvngnEenfJ7LyW3UbhgUpzq9ajXTH9cJpgJ4HVxQQFo5sF8wTp5FbY1B3bx5MrHBSrhcd4JxJKknDVcHB9Jjw",
  "key21": "2avju1tnsVCqfTn7csYTG8ZseYC3AHzwkyLiAeXoSno3avRt7G2ywQp8wpT577JsnwJbcme1ZAj1nizE4BNie4uj",
  "key22": "5YFf89CwPWmxhR6ggsaDPjgUn2M7KFh75dXLKnTCABf2TNVm4C5ZVqbLLTdXEPzS8SQ7GS85Q2VX5XEaSfscMu5E",
  "key23": "MgZ3jfLpresxLFZxW4Ay8Mg2Ut1uhk1YKvvAW7CYBFQjBTNyXVwiEBB5GpSt4MQojpk9fPm59ygfMJLF73TKoMo",
  "key24": "2PCC2rCQxDepMmZKssnNRJQiXQzmsHw462DacZiGSgL77vfBRcS1KBx7DDSncjcGjVzAMXNKWiBvYsM9xv3Q4zXj",
  "key25": "2EYkiRZZQatQksPhcLwoTL15vH7S6W7XegQM4MTZ8V2g5YnWMQxkJPrAsV5cF9UkWRJEg66MAwHhkpBWPjXR4mad"
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
