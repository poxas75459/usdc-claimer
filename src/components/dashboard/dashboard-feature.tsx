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
    "4E5Js9ry2RjTJjFerJtFJq8CiNEy4dw9EVefDsFBpHbpWsrcCrG4efqb79FgUUbZDsgh4Ywkegg7V3pyPXT54PMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BCi6d5pUxwiF6ypKQdNNFNFgUAZAv4bZtPM2vMVVUEaFLS7Lgmv2HUYhJUeBDfP1o6kh1gcQUn9kRATp6nNudHa",
  "key1": "3LwSS9HyZQeaJddB2jQPJGPVCtn4wYS54382c7GQ2pPNZUwRDhrSTZJEHgaqRZLSXmgEffokkgsiPkKk9u7UW68S",
  "key2": "4pegKkZCYE2oi6UHAM8pAD9bfutZMy3513RT6NM5cSoDtcZ4U7qf9UDia9cDZsXjkVL3kcvCwEg8ZrKGQvzoiUeS",
  "key3": "5iozL4LPmf7U49d1wFt9Si3fj66QBjE4KqPCeeKdESddRCtSBhYVmnSbEhupWZ5Q5HvmKD7aXEgccH4MkJhjQeYY",
  "key4": "46iKvBvmwLX8B7UwHwMYP7f44vkMwoYzghQbi3FcCCA6K13gekmCCqmkSVLPYMenvKBmeG9XDGZ6WJSSVdrYuify",
  "key5": "2Hi8VZmpdgh55n2vuVEDGAei9nZE2iWsekDyLNWtrsFZN4cRgBYTAtMc9JmEYfbAD1uEZSmfssuw8T6FuPhHnWwz",
  "key6": "oFoAdK9aBK2onEGWqND5HuH6MJd8gGwR8ukL34NohoUkKHAkrbEqp5YqyAQ3JQ7rsFfzq28tHn1Xu7qQG1Szfbz",
  "key7": "22jn4variAvXfXhUSsWn334fQH7ZSfhkwCojK9Vif5TDU5JbV3LVaBMqS7EXv3ZQX99NMMi5DYFUBBtpATciBQD1",
  "key8": "45na2erauWy5jNDV3JpwFpZsk8qhH6sS1pJa9p8QQz7Z9C5cc8u86AWNHMj2bJtVNCH9so4n3m7FYUDWLKZ3AgeQ",
  "key9": "4k3enRAnBbT6SL7D8s9UxcjTggEeb6kSodXCy2jBB3tbStX9FrCUAvH5i4qqaYwnzaLgpdLdL627vACGNe6cfUjv",
  "key10": "2SKPeiySgzSACQzcS1CZcSstgEFAvuy9i5UUetDZ65rwm31FmevvBL9PArBKHMpr1iAPxCGAbpqCBYn6SLQeWYwq",
  "key11": "4uULYCCezcvFSFH8GFpkqRVSAHnC3QYwZZPnSaf6Va6Tgatwh129hKMZsH1qzjHjrxctsHnnMQTiQKbvnGSvaoga",
  "key12": "3rUJdtLV2neCKxCLDVF8VFDvSBaqCZd9dJNyKXEMNBnwfm7ii6xDiZp4vC3aSq3zwDEULDpvcauWerJJB9ijwYha",
  "key13": "5r2K8N1tpx56o4nTEGWM4fNajRS7zAzocTvspB4vViLaApqZ126gRpCBWgaccb2g31a2x63exncsFvfEvnrkTM5",
  "key14": "QqEPphL4mDCRzY29zqTA1VDDDFiHHKTdfzcttkgyRCX6ZCEA23YU8qs3EbKpZWhBqRyymMHDrRkWApjTvfCHTxY",
  "key15": "u8AoZfRViAk5yHvCk47R3s18bcTqJq5sP7iQpQsTyzhTuhTz773pM58Xn6kQVvKZTZ9Uusae9LrGQrGbsumP2ae",
  "key16": "2V8JKehES9KzcjopTCR1zDZh6mYjrfKu63EqQbMWJGD3NCa5KDpAjNeDwqQE87EVZxpKKG1efTLRznPuN5CpVhpk",
  "key17": "3zrSLQzAL38VJDazarGf2caPKiEknvVHQdmVtgyhDyJBzENxQcasdmhmk9nWh3kzNt79Qpzk3BPyWxmpo7LhrpH2",
  "key18": "X7mR2u8DX3h3Ce3AcDHTk8cYgw7XCByU4hmvzjMEfmwzuaEzKxRBMYevs8L9JHouJnGEsxEqfhevdVMnHWCuBNq",
  "key19": "3LsTpnSza7RiMnxQgYu4kdSsEUN7aGRfUo1wTUuxP6UyL1cWqZGbpPukxP7JPPXZ6Q5TpVYz2Vx3N5AkuGkNzy3R",
  "key20": "dSXREPUWmhb6aC2pZgMUur3CLE9ViGVoF1dWPB7cxSCdLdjihaCamUVMtCDuTa2LmrzM16yAk2iLzDAZkA8T96r",
  "key21": "6N4LF6WgU8kEXJR9Y8agC5rNUqyRj2ejUDgd7mDbbdrwrXrqDrTtxcPo6f3JiY4cJ7EYJo8DpJmj2Mdk3ettPYS",
  "key22": "3uv7xzQVFwC2KCXtypoQKmzBdhXnhH76aWdnwfYbmD1XKFtUWfvBSxgvtaQDz3yMEa6ZCKbH4furpB721LjqM9VB",
  "key23": "3U8t2Rbe2aeBjC9N3d9oxoEYqDonbGEAFCSTwNcrENvPjRBRbNjJoCEswgoiWFdstr61XMYHY9HHJrzNWniGauVM",
  "key24": "7Z8peLm4iBXrqNmfHBm4koWp1QSsxZYjCnYDbT9aB3EwKjRXzBYcz31i3P6qhrEM3SFhyN8f5HEt5cR7nU2bgnF",
  "key25": "4mkkG6NU8t8xzWcWsc5MEyC5M7Drs8AZfXhotJftDtCFnLfcHGh9RFp7vFde8ZYi6anfJiHi6PTPeKXa3VUmEizv",
  "key26": "2z8hcdXAqJo23SHJcgGjYVCm1hRbfkjBsaLkLrmAA1aXsEJH6w4r2Ndnpps4H9ue17uHcgUqMTpcfH4ZtTGaVyoL",
  "key27": "FAu1aeySzGrGSdCifogxvMCfM5v6jHemwTXSdKBwU7hro3ZAB9PzGKpsgAJVtxRuWDR7ePvsCugDtZiDPGePsdD",
  "key28": "5QwAKCygUR9M97Sa72B5KKQWjDSGKytwuJHZePpanEkFxqRxNzhdkTrnBt8ssot2npzGPBqqeE5egfosc212cFde",
  "key29": "3dNyHTespc8UfPi5fdKZzRqbkLhi7ATgee88G1XYaB8ERqigjGaVRk5iWrYBxRuNqcjLFd9THAWeusPimDzXMMre",
  "key30": "4FVo2QTzLcCyQJshyvnyABPfU6Cn5tPzWM1u4UnCvX4EMbzpAuE4za2qhYvVtgiT2sHFnPhft5T9Yi2TDBsmLXih",
  "key31": "3Gi6aQBeb3sKn5yiKvXd2uKTxktrZRXq8tmDLXnYSLBBiDpJYKDhv3SqL3z2uXVaWKvNQ2DNFsr2aW1D4MWwBkcZ",
  "key32": "3Eq9f3CWF24WGJg7Pn34NRfudcoCNPyhDGjfhu8dtKXA7jyzuUvgd2R5eRacyeh1Zga4tn1ww1JnN2c1Wa4qbJdY",
  "key33": "R5CY7EzS8kwNfdByknYboUt4cMiDiaZSuuwoF5FtZKJ6PhjSzDdor62y8CE2xJ7w1APnBVULLBpTC24CbgzNVgE",
  "key34": "km7tzmN6ncZF3cC3r6doT5crRKXkv7hfFxUVUqnTTNyDwSGzNmmNtiUdCJyj4HpUKtDxoup3MaFXwvFhXPUZ3Gm",
  "key35": "2XbDKynQg8siWKgQ764u7EzKghEauSnReY9TsWUvqvbtezHuf4zT3xKnnmGtsatYRWqpkfLezcVQcnZTh5ssvU1c",
  "key36": "2Zni3FSsYBJvL8sfUxmDekEfwKnnjdgHhGh5f1P1A5PrqLfiSbYgFLTcE4FZS43HZJSx162CbFj9UeNvMARbgN2Q",
  "key37": "3e5uU8fsdWNHkN5BAkRHQYGwF7bHzvg8AG7KZz4eXY8XtNx4cQmP1jqet1LjN8bJvjNu9FNsx8shZRxDczB1Y2PW",
  "key38": "54Mi9wQ5y1X6kN6Z8LdoNwWH3SmTzWqx4uL2xZKkFj5GHmaDxGjeJaJVofTBCcAhnqRLAiv6WJnD7oeRKRtddKHN",
  "key39": "2tvQteioNSjYT3MJTwRfdzATGCLYL6ahq2U88rJ136FrGwih3dkcfKGiFwUUUKZEKZAJtWQ8mMa6JaEK5S4b1tZM"
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
