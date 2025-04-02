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
    "4xEXydhvtB9SHAefLFnYqCa4zdxudFWAkBWXTjTuXgYgE3rhPsvJ2Gn4ik6zQuMJvGJ3wBGVkaa3ay4vw48T3fKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vnoyTEYkW7b2mA2Dmh818couNmTz52NJZPa3wb2BbuoatRQU8cjNji3u5ss1LD6zB8MXgTzar2gX3W4duBECEC",
  "key1": "65WnmJDdUSz165fusAAx5kN5yhkHx2Gbe59rRdXGGth7gsVYoxn5YnaVnbJnrhWKMJ6PxgHD6x72j8Nct8GuQwwW",
  "key2": "qrYsGUwvxS5FJrpDuaRoyQPQxBDKYRZmUHgcm7VjWVwJxiHyeawJTHxnvqupScUnmyY6YQUMqgMxXGCoDHixdts",
  "key3": "3fPwZ5WsN1sKGa9g5ncS1urgAP2HHELxkLkvWh1uTGYBaTxZFPEtTmf3Gd98hEPhWhjrA5RWeCZExpek7FseUAWf",
  "key4": "4HuD8uQq3qCtuwUjM5psQcRGCisU2qCsPynSPH4XHFH2JUp3eEg2Cf6TTnmWPiLrogR6JFNNYYYVkoH3uLXPSfvr",
  "key5": "3MpAvNyWdNnJfECaxzuHggSBVXg6wtARJVZj65whVsT9ogchVAgS27yhNYCAXXcjWkMF6UzJX6JKpnBk7eT5MVWu",
  "key6": "2jiQe6Fug8TRbiEja9NEorSVqQHTbrnHJde49RFSUrjsBXpkxRVke6E2F6F4d86JPGzKLVHyX3hpW3nfBEMEbEfZ",
  "key7": "4qnPJk9wrLNZQRad1wTFSnfeteFb2bsgShgUMJgz1m9MXuNV4KXdpHQux3aTPtuHUFsFtCQqYqkdMDzqY1d2MCiL",
  "key8": "4b87RNisicnsCnP6JhKQHAmE2ZLBeNenWTqWug4CGHaR4Z14VXPEu1JtTRUQda4E1hoBvm257qebfnrNevTA5Bhu",
  "key9": "vDZb9TNqwfQtan1UmsPxAZWxpWXLmZNdtJJ5EYMHsGhnSu7mu2TbWGarHNQE2ry4vEwchQksfqCXNTvHs31T14N",
  "key10": "4GfPVjmbVZbNyDMD8Vc8a6DQgBWdXrL3FY5mmAN7dpoa5duR11L4o6zUwuuqaPkHByrSdovHDK9RPD69WeTEFZ45",
  "key11": "4vUWehGVqT4opZG8mW4BxqNZFDG3Z2Xh25LkDguck56UCHKNr2MUKC14oeQTPZo9R66jWnDCPmRsbsWY5PkjNyEE",
  "key12": "5FdDMbsZmoM9bd8GC6jeQiE8BbnvYu3pQk9xQSvGe5vi3974myawdVrCJ5BE4t6QWJCpjvZiEHTVxJyb4WVMonjc",
  "key13": "2Cp6jxczoJzagfUMmveRBCEg44BkLmaut9TtoTiSt9NWJz4enkhWQaEGLLYrPcigBH6NGU4u45sEjMdZvLyShEz4",
  "key14": "4cLaaN13ZcMjUKCYqScapWtWikyeVwFMYwXzmh8J6oLhzXpdBALZMaoRRzHpX43CgUfx7gihSt2grrooTDyQwM11",
  "key15": "218zS3dsRvWwgJLvbMKbjHDugVeYznvcbMW335tZMzAccArAzKJZdBgBqpWRo9bupsgPfWcwaowS9me2ZavgDS2D",
  "key16": "5FScxUCrxg6HDY4D5DT9PYUW8HfwyAJtA57BwWsszsgPJZkRdRvjG1c58MqfYq8KXsdFvjfHMSmzRNngxaHbGfvz",
  "key17": "ZgQ7ZQj8WFrYwd8ULLyqTiA5fLCT8DVf9c7vV2LynkX4rcUYphh6ErBJVKXb9GjJ1YeBpLRawFUf6XBEVCUxsJh",
  "key18": "21KujzuG57ntJkDdKYSvKc8qxwMjJe8teYEzCLrnaCgP7tGwyL6TFdT4WKUg24D1i5CZhMWmBHmcQHysb5qSc8rC",
  "key19": "319Ma7jCTjYMUeTEs6jFSSwQgjZXDduydHyUyV7D9VutJ9K5dbZemq23EbrA4DG8urLgotrZnM6zacab7MFbo85m",
  "key20": "3w6DJ5H7a4cYhf3ovoEUH9eahZphfCSYXvSZVECa5chDCoS15Lq9A9majMxnzYBzpK9JJSqoUKnLVWs5as5sKPWX",
  "key21": "59j9u3DGQ6e8eh7gni1NSjpLTw2gQGbsw6xw7JzUELt15XSFRi9BfrzKF7hYaSJA3es6enoSxSEuUNgPXYFwVwTf",
  "key22": "4mWbcq61pCmmAdShWWXJPc7GJ1VaVnvQoJycbbqCCSWUs7tGAKY9vJdWAPTqJfMakzipG3EcqoHrd4FE5qJeEhzG",
  "key23": "315ue7eijNYSbvMthzMDZgNuqAPTpWeEdox1ySBedXGtFoZAyN5mrtz7vpkqnQFHTsDTem2cjxcfKPSiS9Mo96Mp",
  "key24": "2en3wn7scQMef5PULuCTVHrwL5Gx7nt3Z8QDd7KvgLWT2vzjh4zazMXF34NoEPigsGPgA4zwZH79S969co1BdowC",
  "key25": "3crPd2GhqZKeHoo8Jcu1AJZdx4BdcxSdKwApmVVijAeNdXyYZgJi1zPw5jYLnBTzy3wsXhRFbbxXWwoqWjRi7uHA"
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
