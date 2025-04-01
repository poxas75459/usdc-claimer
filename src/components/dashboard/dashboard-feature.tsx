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
    "3zwXTP4uHnDRT5P8SXpGEa8kDMtaXcyW6m3AwzBpx6k9SwDzEqVxY3VgHV5m5hvAQejkzqPeK6cCywzpFq8ZgRST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m6aS14PQnNkwEx8QxSDtHtvEaRouwaf2CKvWczC8BNDpwKpz4csfJ4VKWSj1gntxmEgitJ8P2WBSbu9r3tbyR6v",
  "key1": "2Kw5Q7y1wSxPyDNqt2QCxsgmzUmkNNrtFXLwhX9iS5fqV6gWSPP1iaSN94derk6ReYnxZrEWQqGLiquZ4PYnAg2d",
  "key2": "2AppPSvgQcKbAGsLQwXbv5NDtVpPtfQiG5xxjDzUv6t1W1FQzV4tuzrSqt2TSah2ciJ1kHZtZBCncm9ynoWvbYhp",
  "key3": "4CJZSHR6QSYTQrewueTkyZKYtwTg7emtvb1HtmTwkGPKa1ScxS5kus1Nijnwf7iTCqxHv5U1t1N7fMTrW2PV35MQ",
  "key4": "3qxzNqhiyRZxM3hxNLeecrGfA566qJdSqprLP4twKRt5oN8iJDdUT5rxpEpPm7J9kHZsBTVLBBscZH5iHJW2Zihg",
  "key5": "5nqd8knfFWtzT5GEzhKhe97briT1iNVPN6mSdVX4ks2yUJfgqfsZoSftnWf8bfXoMVPg49EJnBFpSRH2WsFKRy4Z",
  "key6": "NvmcumMJ1pkbKJp6qmGnpW5KFmgZQQXJND62TzC9bm8BcFQzZNFjUQb24GCaDpGr3VG9UiYNK9Ajzn9wkKDuU8K",
  "key7": "359uZ8dihhYr6huMaaWcDqwDBCQT1rjtRazJB6AQHFwYCr67VuCr1yoBMYzeAxRMaDgirz7t894YnTuWFZT9Bizn",
  "key8": "49J9D19JxhV4F6NWyQqCZjfDoWHCRHdrTikLDB2cNFdH7LS7h5wA8AZz7HzeiTGC32v8oSBbG6hyoTJuAqPgW3hg",
  "key9": "DsCikM68yXB87ZYwApwkqEuVs9BmiiqqwR2Yhp9G8PiAwWJ1NmW67PJmzckfXJ7x5urmnfcQf48yXsZ3i4oWJkY",
  "key10": "3VxrxxHwno97j4LvZFEdMCs8GbY4kdXPbcJaGuqoFSuHXnhBRdzMp5JchSUDxUQVdWgmPJTtBcm3zzT8sqUvhjnh",
  "key11": "SNF3QuVYJbLCfANzBDdiWnsCWh8LXPkAbqUjewQshoH2BpFhpTxnJ9RGHwXkemA9cGPc4cna7NMyRmK7fpS5fgK",
  "key12": "2KLQBQn4HyzYTuWnYS3wnLFSWn6enecN6KegoGLCBFyHZdEgaXjjkMYY4yNwtakXfxezPBcRs7jT5EgtoNbBmQye",
  "key13": "ttzYei6Evc6o4ExzZyeXW45ARm5oEq4Wv2nHqNcQyXJ9Yn6YfedjLkBWeKSanN1i9sNwAEZ9bKGmuEz73SA23bG",
  "key14": "4P1FzYavvyRfeESCS9xVKn65aAt48emqWSCBSpEqjGE3PRby1KaSQoi3w4t6xu6TK5RSPFvsit9MYjw2ymvDHkGt",
  "key15": "5bBnpHyp6beskHmK1LannUFAdeTjkuBGc8cPvnTpq8UhK5Q647ATwNVGL17T6etHm7AHv6T1JVsEbS92FzC8gF2e",
  "key16": "3UTbFx3vH9gbap2cuuUaGf5EXHGkGHrdjdx11QmBGJHnkKLRcjmby2B3usaaPwNcjPypq9LLZWunjn3CoZakTBVd",
  "key17": "LQmiqBD4nDrwAMcbJyA54yXuoFXgVU8F1YE7U1x27ZFHsPS3VR2NohzSeHdKrcP27GduQG2Qg37jf4CjqHQi2kk",
  "key18": "2Vbn3TVxXfHcXvPp9DSg5Sat9EgTQZdxzhRnn4kMWzZupJtgzuifeb1wUP62wNPLD2XEDP1BjzVLS9eGakpW8xt2",
  "key19": "51sKthkmjdPWK28VNNcVP2S93Fvs2EoF1FBDcMbH3XTqbDTQj2hgyP3Ejx4bf8yYxktNGZoPqoJhDbaBNtRBwT4L",
  "key20": "5Xb6w6bwLYuFvvVaEuSvFks15ksJg4AQY9BC5jxENGZKAh3ww9K5RDC65urpo5DX6ixmZKUayrFwfwqi1PxMME5H",
  "key21": "3m4A1ahpKkZMxnaEbXYHGZ6R6QGVfuiJ42VjeRWbaPxMxhSMPn2LvGS9oLgdo7xDwE3oXaccxAfcAFQgXgodzjHG",
  "key22": "4A4rnE1tYNmbfrcpYnBbpVff7k9apEGvaMoequjdf5GW3gh9TvpuWeUUoRwFxSWh6B9n47F496Hjpnbe1Sd4VcpK",
  "key23": "TsSjavx1fUr1ShgUqwaPQndgAYsD8U6weH13rQF5wrtWdKbKjoRzfPNi6SV61pEXQzq4pUcxozqf4n13oXqUdfh",
  "key24": "UKihd5yn5kkjFps69xBReqcUTXLHcg9qVFCsUfVMP5ZYqRNvfvqzAcnZfLz1MqkAsVouabeqqUJJnJr7M4jP5xq",
  "key25": "3rVehngJW2Gd8PXpDUxosJ99K5MJrUG1u4AYzmV4YZUtdd4LZ5Q6j6JVUX9fqkmp3nPFUq5nnrLTMkfUE67BqY7j",
  "key26": "QGEJKqXhkheBEMPW1bKSgTQbsKhkqSLDAn7ptkQwgvM2tgVsopazV1vN9RyF79sQru6w7h4Qin1Jwyz6yTC5m4e",
  "key27": "24BUyuutSsYB2GAFaZ9w9WxoDTtoToHCg9quJJG7AfNwBG58LLr3VARPYK3eK4fGKdQhmYJ6uPcXDeAjPQUBLVfq",
  "key28": "2Pp51AvYeX8rmHkm7N6h36Bip1Qy7iYpHYb5xPWoXFLaD37NGC9zATcuHNYSUFpCpPgDdeRcSxy8tsv3bFZKw2Gp",
  "key29": "2pfGEo1a8DZAVVDCDVocLuubf2NijdmiF45xFGZA87kStWd1dcz1qHBtAbvJzUxyyee4EB4rxH9iXmLKcX7oXmqd",
  "key30": "gCD9baY5WzfCKBVzHXXBgg12xFHDMeAe9U6dqwS2jfiCspoCG8SVW1B4kpU5UCEaaYihCR3oBJ77iNhwXZXAWbE",
  "key31": "3i2h2ecsdjVvh249pCDFoz964DdoAJ4co2KmpesTfyNjnUfvyDNs1AP9DEJagqptE8mbZCzLkr29ZGeGoCcwvmiv",
  "key32": "5NG1zEh3dxcecSou6sniqeMm7prXhPLqeyFZ9eu5W4AwxcA6WLfynhcRppEvmTQEycMBZfMACSbTrNyDKv4ZkDjV",
  "key33": "4G3r7Cmvc3iDPUtjUiHEYL6abR1QzLC7GbQUQaB6ow4DeTG5de8FELjEkdiuReLMtSZFH768xeWWPcpo8KJmZ73A",
  "key34": "4cdCkXUMktgQwQntvC5fxXLdU3EQB4SaSWQoWhdSrFj4DZNLMaRaoRYNBnCx8UQE7yTdDiEHmGgtsof731Tx6x8t"
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
