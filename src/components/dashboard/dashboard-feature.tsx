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
    "3F6956EDLXDCdRANi3uFwV4LzREhfwrqFr5SEekgFikBb8LX3k79WSg45R2rEqnrEauVJV7m9GHrM13mdDpUpJrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFNMiz3UNyXZgMpfZba5PvAHKkAYJmr7YbxgFHhXJGu68dkbxupFVZDdienCx3DhdbDru7o8wkDkc9byhZZsqrA",
  "key1": "3SwsGHdrZuyjmD1UmGoNVGSkhYsDDNRFZiQ3wxrCCv2F13ezXaXcFXbNaKmtposy4ccaTx1wBK63AxwCcZmaco9F",
  "key2": "2aGTL9aCEhJypuyQ3BJK4eRFz1qVLgRHqvdg77qF5s2vdUxDSqBT2dRjM8T98tjsVcXDrgB17bqRPxaXqbtfaghG",
  "key3": "Uhdiewocvzq2Raaf7XKhxYaaUrV1UhfrNZYp4EYCLn5rmQWZmvWWkvwYCGAjRAGXqbBo9N6qT5ZgFyAep5ZtChn",
  "key4": "5ddsMXZbMnfYz6A5DYF8zgWepkpa8mAYtVcbAzg7dGyhBdqwVm2mXTZzRCmKdwc6TZnXjZBGsij68wggPrCdX2Xj",
  "key5": "ytKGTVKHa8BrVUhwkoqeuuUYBV9zAwC4Z97vxxf7oKkCwJxdna7HC6byyhPi6cgvS1AQeRSDr8LoDMbcNeioDoE",
  "key6": "3Kx4DnqWc3QjzGYmLaTUpyziB52jxf1A1b5U2QQPikwodzVnjHAzvoPAonVaCkxcx3t9Nb8d84NRxY7YvSx3JFG6",
  "key7": "4tebW5b3kaLhT5nFvT5GJzeymUddKP9bv9Fx24FMK9Bf8yQsz2Ehpk8Rz5fHHDFvdizTs228SWP7Y18qrckH4fXv",
  "key8": "dQeqFYsd2FyamGXgzYumB6DTXBQ5eFi5a4qdH2jDgJPAndsdMsW5SJErW1jJ7cVE8ih8AFCxKF4NPtaXdrEH4yu",
  "key9": "tz3ifzs6ZsW29fjfFYtwgtychZ4Gu8tQeKDELRRXFChkbF17b8oTx3YVkvjDN7tD5Py1CCGq8oHrGFS2yjuEJS6",
  "key10": "Hf7rXTYp91KQfuQ7FiQiTMHWXrY2zA6GLaMKKtXf3MwWCAr2UPgWVq2wbKHBQAPmUH46VbmMPN2Qz9qeXKUREo5",
  "key11": "5hTVNg1vJDoVhf2EC769NpCNXDLQsLLaksVKRogEdgD58xeRrKHFVrWaq599kfk7MGDHkBMdzUDXodm97KhKasA8",
  "key12": "fgPdzfPZEfEC2uMCRfQHojcLzVJ6vuF2RH6tLx2g8aLUJpEvzJVvKEgJ2GNXiWtdAz8GZLejr3kST3HnAsVyddi",
  "key13": "5bi8CPjxFtcJQmmuo7eMd2Y3YD9VCd9LoBQjYFTYUnQtPEB6FbHPE3oRNTQBB3yWLnha9vBrDP4meVWHfDDsdrjC",
  "key14": "4DK4dRP3o6HXSLoboFuNsVHGR9zUPrrxWWcj48jvU1n94o53e5BT2rRawaCBJRhC88WxLtL88VZ6pR5zC6PW3gyf",
  "key15": "2atS8Kq5SyfHrtrmmrkfu2JbZH7DyKDrx3zZKQazLS1XYur5SoAVqS6ND7LRMcxQBKJusM2BE7M6PLxo66f6gFHS",
  "key16": "z9ZEFy7pV2Kmzrxz4AqLmZ9hb5sHv759V6bRtS2KhCmPWBrQ4C4Y8nhBNVbmumAZHQRMr5wo7fGaLZBTPB5GjJF",
  "key17": "5wNafxL9eQ7FNKXGd5riLSSUuX37gFXwhGoM2jsmvmXrwk6H3oCe7Z6iQ5jfmSeXdbqGXtadzzTkYTXToUDV1JRD",
  "key18": "5kk32F8yR44mU1fBAMK4MaE2ZP1Bvns2QLcR41mk3Gh7uRfqosyoEBuyL786z7Ptia6Tww7VFfRfxXjSiTtHDLxU",
  "key19": "5x5U4f8SEukxD5kpaEWVF51vc4Wj4w2WdE1ggoCv8ocwUFeDX4z8kNW7woPRvaC4QTKJMxmqKvFixWD7C8Nuyx6P",
  "key20": "297LX2KQLN5K4yTtc1VNLDTpE9bpXnF9fXkXK3DTYt7mtsy6Pk2ZiVoysJj2pJvRVDVMGS8QhxDpj2EgiHx63YLz",
  "key21": "eAWXKG3MXRsdaHtPQ2kpesWN7ciP3edQsEUfQ9kWn7q9ryfLfBHYEU51zLcytPyXY444Ys5UPmMg7HeV6yEKKoQ",
  "key22": "3wXK5Vc2iCh7vCNbdBuiYpuC8UEFM1dXr3is3THf3Rrh8r1qG4YNJN6VpmPh6Mc1Sfk351wbZbvVWtW3hdFkeMm6",
  "key23": "keeLZqUvkRN4Ka1woj5PmzVQ4aATY5q34RDhYd2i8UCybHkU4efvdJ4Hs1GYcQwXm56eCMQapE39DsVoBPb2x9k",
  "key24": "4REUCvqY5RA3UugjatejZUaxh5C5iwGJcGSuaQipw1Ywf4pg8RSwJdYqzbRoPRK6eTGC8HpWschM1hG4vRNWCCxh",
  "key25": "2NpXtkQTSE9ExjB57nxN4HHSioJQFtUfJpzJbYsGU2Ba3VQcpuFmGuWirJ9G95qkALShRBMYa1Ruq8fr1v5RjrA8",
  "key26": "3iZrJoCvAE1j7qvP1AHxsbqkRjVx8UPkU1zGFbfGZTvpqMhyb6gDK7FpRp9cVsESrcD5y1orcSvdnVC1uDFnpkmQ",
  "key27": "66Fs2ZpawvrHKDigtbhUqS5ohZyi5YaqYZt6L8ngq8zxBk1ugRUMpqCm22FQZ5bMSeoRia2W4kXtcTHC7NAkv9RP"
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
