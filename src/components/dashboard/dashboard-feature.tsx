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
    "5oFHAmzKMQouJjVtS1U3ePNG5qXajQBUA35EyGNfrzW5gArwzBKhRoywsKtutaY6FkcmcE9h8T4CTdmhhE3NkS88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U6hFKXhgrqP9Rn33nJ8bgoHE3qnpdBBccJwwaKGGQUQm7GTX6rpzet6nzhN9CprRAF3cLZd54e7DuFWK4UW6Tzx",
  "key1": "59C8LWa8WMHLbaqrER6HpWvs24vK5j9KoQ4m4PYdrr8qJjBU5eYFc5QT9uT3qAVr1bfkcfW8w5r9cwPdKYV5Fo4V",
  "key2": "3uyDR8deftZYfuFQUjZCD8BSE434TX3L78rgektt9MTpJ8iTMUAR4V85mm9jLcBPb4uFCCYPmYEdKFQzKyWwE3C9",
  "key3": "39qLKtaaTCM9yz1uYpQVZcHmUN1xMRgTPkqHNwgNH8jqcpk3ciaAvfSyLkpiUYTNV4d9WLSRmdvmQXgREy99BYA8",
  "key4": "4usXwj6sBdyvxXXy9Ac6mw1HSA7SeMrkhYY5RoVJMv5t3QexCKVaTmTwAvZB9odNweAXr7qH7RNLCFwG9sbxszbo",
  "key5": "2v5n2zeTLbpXDbKjEdBcdt9ku1VrbPf49N5fYi8pCQbpxAqKzDFNnMhccbwVzxVHkDaW8ufML3To9vDqjNFp7Fic",
  "key6": "5mfMrCb4WfSc6ZEQYwAwxaNwvFkDNNgwErB7RPZqUbiTrMtdEZN8GJ4WjgDaKyGpSxBvPAuXfMxDBep8k8n58LYp",
  "key7": "4cbkBuCBJ3JdU623cjnQFsVrFUHgzRNk7XoR9dcsZiN9VdUtWkb8K2c3skhKmimRcJayRzAPabfbvw3qhEKktDZH",
  "key8": "5DVMTieYBgDuQQUyLp2jYtn9SU4aJEMAxQvLP185NTSopttPGcX8SQRtCUQjeMptAwQCeAP3xA7kVtYMZBtHmRJy",
  "key9": "3gdenbwBP7fqanSHkS9hR2fcjPDSyBs71BEq9dq6YYFkts9eNmaeawNjGEkzkEuo1Fa4q6xibopAvAN4gvU7gxnT",
  "key10": "DTrtmUSVgWVAP9zFvr68gPdkaS1chJjiC2Y5xDX9g2BE82UdQKTcuFjYNqyvjSdyrGqtD8DQA7TqjEb8QJREtFH",
  "key11": "4oDRxvFLSf214yf36K8EcevEtkPrJBd3SwsfuJgyRYcmPbhXkXBy2ieY66v5coYLz2CygHGpLuE4TPTFx34AXEGK",
  "key12": "62rPRmX74e5bbAskUaiAUggqJPFPSxSfPkwQqeNxhnhCToBbanAMuCwq74PSsKtNQCZQ7yTvdqz6i2Qywwyp9tYf",
  "key13": "44RSUQGXL8c9C6enVPMZeG9huLrmXQDgWtG47UgbaNT1dYoXG86dSEAHwP2BmSLantdSN1BPNP26TiBQR7s2vC6k",
  "key14": "2MMJv2UPZggSZwLBanwauijhPD9yYzWRQP7bTW7bheX1g5e4WYN1UZXxuciUMq3FpXwiWyXg61c5oj3j1kYfUTFU",
  "key15": "2iebphvPCem16piRCc1htkiugArpeFqDa42XFe6SvjVQq3QXB7EVax7os4qvo95kesvWPyX7Jgtp2MnX9ixaUU65",
  "key16": "3y3LnHDRTdHSqzisgwR7J8tpjQ3BtaHZiGgtsaYUS5Gt2aTqX2cthsHPh41EaemcvNt1SZsMQTd4WnqgQczZyWt5",
  "key17": "4F5SWjZB2pYp24jbG4VHRjmCKNwBMkbjZDUSRRy3MrrihKasTxJyKZtsTrXv3uVYky6bkc1XKGbvSMBhunoAWCzs",
  "key18": "4VyWiYAEfD44ekARfjggXX4yCHvwxDVCo72A8LVYEX6mukhAc42DKgF4ceSrdaXdVp5x3gLY8wo2J8BvthioYVP1",
  "key19": "eSRxjJWbiKjrqTKT57fprKKTyJ3VhCWq8n6mgTJ2h2cB4gGcut7qWvwYUbo36xgYgtpQ1YASJBZHYNXs1ssbX9Z",
  "key20": "xa16HeVF3ostKsxRHQfvcJMKtRKwB5Zk9Hjr7idA6VBr1K4wVCscScahuYqqt6ge4VFow7pu2WGEAm4JbYTqioL",
  "key21": "5CYfoa7TXSfmfzFWV9YEtBm66UYawHn2PsAhgqQTF3LVB7Eqmvs2XXHrqFEbSmfTLxKmsLtLEWir6t2yq68TzEJJ",
  "key22": "iAXJgSpqzsWe31zDFD4rguCW8fXdrwmrSkJQ85F1e69dSX3p5zroFcrEhmuRT8CfN8JsKucHn91uV7mctqt8jPp",
  "key23": "2dLPEHEN4Zkb6oSp59X8pRNEY5w1YcF848u8VCfhYWkpon5tFzs4GbYjozZuAfMLgsy9LxVgD4S77Grg3iwA3xVn",
  "key24": "2phgfyG4eG8woB4kQDoLoLzVydQf6vs13Kav8in5s6YTgPca3Gs76z85oPF1b6g3hWkPap49cibYLV1CrSjzqfk7",
  "key25": "4YsGGwevgkvgWw9sJpm1aDZvJ3xaY7MQccmfvzecrfzZQe8zf4x52z4d5piZZHojbtSyveNnwnfK1CGQBHSUVPyC",
  "key26": "1ygbhgB8XmX8zGBaDEpgjXBBD3JEF5wxizFx8P5iaooiM1XtRv8yyyKDGGneKJkSK8MmHKPmLUt7NWA1uwFp9Yz",
  "key27": "2kN5tWNDWJTQwwfiUEDyYNqT5Z8sGKNh1BNMcxhHqyEAhMWoCAhNBE1iPfYqgj6JZqoAhkLstk4FqMpCXYf9xU5p",
  "key28": "4xLkFwMzwpjbehqiFmPfCV8S2nd2WPj7g4LhH9WXmrBxHEHvQoxFTYDJyPqV135FPsNbTf83LMX9QnoLZeh66PDp",
  "key29": "RhFw6yEeiwiDptybLgqVoQzDdLiKo3AsEmA6exT8Apk2Cmk2dTHryofmXyvpxF5Qskqsi9juqueun7DhS5TuFk3",
  "key30": "2aqchCPoxx2W9u2D8D4TJNntKexFzSbQHiSU57qoRKJhJ54o4mv6XyErBna71B9XJ7y6nYDoohFGVEk32p55edQp",
  "key31": "4GQ6bwrwKcQGuFzoWfZWGpqVbtjJb8dd6fXKKn3PJhTPU76JbDBg7bZJhXxinoCoLchG47ukmRKt7eLZZucLDy3n",
  "key32": "o5wEPhg96DtUMFFF2T4utdErwfmSE36LMDBQEcJzyGyk4DFdcAitp8SZPBAELr1DzAYD2krAXCSYoDMUfpakTq9",
  "key33": "g7syvFBVc1hFsLKX6xgKUCHQh1RYovHSy7CW1ZkAGxc7rbTDyohNzEqvBNrt16JtPBZ2sZeBA6wNo7qB6Q9GSsY"
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
