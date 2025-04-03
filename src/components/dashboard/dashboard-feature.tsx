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
    "3KABrjxthoBBiprrWdZ8jKoNPFcuAVKMWa4P8Pufk9hQc3xC8WiHVb8sM6Udy4czu2JrcMDCKP5Y55TTVSJuuhmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AuwufFjYywSHAVG31qxSoHYTZFM6YeVTeNiDuHi5oUB5xbY9uVfinbG1CuZFZJAJfiLRKvVe3dqBzKT1X52txcB",
  "key1": "32HZEys5ooBfYMsQi8MKi8TgYbKD4HCqJBvxDUCVGiBoSxzgrgFQEJwa6TQxHcWoxFRY24y7pMouNQw1NTscbswS",
  "key2": "29StSLu4LpnXgVwXqqEZEwU2w4yUeYgnchvQLq3ZtnqBHogKuiFC1T4srLnfKGVBy1ou7SUk2Q4wrGwRjEuWw7gW",
  "key3": "DArvRBpiuJibhDoEiynmxie9ZknXvkthip2ChoJkULxaGJDRYLsh2GV3KSMj8B1coVcVJ6LJxzj85jJ9xPkXvsq",
  "key4": "3EYH2JKfcK5BJ6348HnhcW9EzpTXc4KLZBcGeGo5JGB53qc7aiByFsgK5ZBpCF3Hkn5xwnomavTEjY7DR2Qa8Cs3",
  "key5": "4JggXy6VZS9vEinyUKrBx3JRx7jZvYWnoeWncBctFUyBLbVEkAmCQ2Y8XBkA7a3x1R72EuzGrtCKUBgDmjahv7UP",
  "key6": "4m2eGnisK9pWVFNyuE6DJmMQLXCf2jPusoVnWFLHmxQMok9txxEcAG3cwASrVDJNwrQVGRLrPYAALDjSHHJSG2Fq",
  "key7": "U3Q8i6Rz4vDSBdbAejftkWv2c9Ew61Ep7LWBv9g3MKu28DFcBXaeZ4ABZb13v922syPSMMrKpwoCPwuhtw1dyJZ",
  "key8": "3TtFy46SA3iq3yMeN7myk7ZAVHUjwpiyGDALzynwJ82NDkYb4DRaWDKZt2wsgQAAXfkR7PC9LQXNf8jnEVizMrpX",
  "key9": "2m8np4LmKshyLHGzypC3aw4VQXUb6cNyj5wk7p45MexnrpN4V4QmWpDYBpuzyQLLqPAgvnX3bDYoqLRveGwEHEZK",
  "key10": "5AMnW991FhrCmnxhtMJj57ESPxKzGAVgqMNFW6v2H5ZerRPjJ8PkFFqCdLogJEMZyrUi8ePTnxckJ27pHWwRWJHA",
  "key11": "2bPdg7uvRT7MebYjHmr5rKAJqLF8iN844GEo6gHM1dR8bf9UG2VbWEBHvurtmSUcsi8kGqy83Gtzu84Jw6JZjTM3",
  "key12": "55DMYFzDYUzUE34DoQLE31KmecTukNV8S2DkQf72D1Ke9yFjF8q53kaTbGqyAwGM3h4UM3ELrzAG8ttDQ3hQLQrn",
  "key13": "563n8hX1K6zngs7M2AyeHtVt71rYnJi4e1i5oZK4ydy3Bbr2H8UDnyVEKZVtPv6cKaZhyyVhuubBsf6A6zi9XufB",
  "key14": "JFH8cjm6rNmLGgrytTYwYhqxyLs7eL4sdvGoS835PBdYMpGvJ8EK2kZH3bU6WQY5jW6EyJabni6PiFK2YpvP6A2",
  "key15": "efiQbBettoftYH7sPEK9BcAqpXqqzxrdMcVSjXj9b42JhD54azLNPHciGvfG3QnL59MnscZHqV6zQL33YsDJ1HE",
  "key16": "2Wyk5eNrn27XhJWZ8EZiv6icWX7u79CDycT3UMi1PxU9anKGJbZdFQyWRDbsdbVStn3XeWU3AzdMQSEbkwaKCWUu",
  "key17": "5SNwkXsfwqAERBrmUcg46gDrp2UM2f582kS8rNpCGpwRuhcJsaHRTfpM5BpfvFkczGTZspHbdhD2XDrqwnq6D34f",
  "key18": "5KgjyMc8yFX5yfuZk8EjiKDHnhMdXszVX6yLorp4StwGp177fNUC2oxxHkL14vYyH7XNuLEJuYrTuqQPrqK9REx1",
  "key19": "3Ktu8C55i4kaFJFHwB7MoT5ZFG8iooZmB3FU1Nk8hgv3kmXnMxFi7Ljv52PdJZjcAySFsWkgfJsD5SezJ9bg7CDj",
  "key20": "4ueMrW8HCFx6gBau2fV7AXU6F2zJ6pQ1Yansbsebk6r9dc8m4hPxxjsedn1KqxVAkDM95f9x5pukx3BXNKtPiPkJ",
  "key21": "fHXguoAjpzrAmXPf3hC5c9bBJcxpa1JJRp4Ka2TTfxnMHXmvLbgWhW9kcE6hbMjdfUpSHJFkNtgyHMoaw2DmFyP",
  "key22": "2wgYcVQfrrLUA1RBkfWg6H4nyKFAvmshbHdV3M77w69jpio9aDSnHyhGhQ2F89Rmi5GdVc8UfXBQN3PcoWVG5o1Z",
  "key23": "3PyzhksGsVAYKQ2agn6bXXpwV1gvtbxth4BAuRU2Thu9mKL5xnRTprqK2XDQGVrHk14J5b9o6ECiJUVU7CzpJFeG",
  "key24": "JFo64EUDYrogBnnsEaUDz2yfLWc8MhJNFJditbxx272TYce2Cm1mMRfLSSDYZ7SES41LE325abHzwQLsMmeuB4m",
  "key25": "2bcrHfyT8bZ64JGq2WDcaGHParUubZRXRqgRZgVUE9DoYnbGBX5RpGgzocbfwdZ1xe3dJ1ejYgoRXaXRZ4QK1hLT",
  "key26": "8F96vUjizPiEwQs33DHsc58Qwe1JzuriALQ6ADcDSh6verZ8GAQSWkDAn5ge3vAJCg4nD3rkvLm2wZ8rbY8jFub",
  "key27": "2aV5zQLNFREGFimxYt75XhYLyqUVUMpYnEuoH4gtw1LyGXyBS9Lb8HKQXYSC9iQGgLDadMm4yzpzR2SKSxaC88zR",
  "key28": "3pLgThs8Q4FypqqeH1W9Pw8p9P1B1t2jM1SyYPxEvoKVmqpR9Be52ayyj6AdfoSDGjWrvJ9Ua8BmMYYFD56DnLLh",
  "key29": "4BtRJn6iFepp91quR8xzZ74cwe2ijARZFy6qqZdGZqcbV6n1bK9TrdGoUKfwAhyoNBpLFnGXHVqScev9YZWT22QH",
  "key30": "5Di8n8ea6Q2FZ8QiZpRmFgsoB2Ae7F2RpqWMZgqnZZEQiXNvwnRffHivSuLjt1HzUFfAftXMMcaVqaSsw3Jn47nj",
  "key31": "N2X6jFTsNW9CsRjDFnmjNPct4Q5KMe4Apk4AnrRjteUfiYjarTCH3KckmiZtLyEjTGT5QrVQSXkYPjRA8pvgdfU",
  "key32": "2nRLmdc6aRccvNFVL3BbWWYeEDTDVQx4QD1L1KH2ngu8rCHFkvY7nzrs5TzPru68nehrTrTstqt4fi7hntkXGDkc",
  "key33": "2DsGpnrgm2oN8SZdb24WZfdCu2GKV7LcCXor5pgqXUodNzqvsX9veneVTfwU3KVwNWibLDJqFcz9Jskk6u6hAghp",
  "key34": "6161RTJUh4GjstpB1UqPoQV1Gz7RuByMQZnF4cy7cqfrw7fEG7CEixUgL9oGJNS5R5MKbmC4rjQ9VtW1WeKgKfuK",
  "key35": "1ZQHzutFtXVfdEqtPhhyzRvzK5ZFNf7bAtx3XzPWuWMPXUX3B9BFMw78VppTD8bEAEcCoonneQsukgwQN71GSkV",
  "key36": "3eMbjr5KJaF23e52RFzSvXiwGM73EAkMyesUQYxMDjKzd2q9TMxNWMRZnetaQExQkAXbbiMWcz24dovaZ4qLBkmc",
  "key37": "2f5ZhnLk2Fy9gB6uqDDUtsF5mzg2qpEi8XfCJvWiywLrpFuVHLhPJrcRX96p8DAm7BUGyUgBoxcUXj2qWBmSbH4Y",
  "key38": "cW8nseTXyc98x35dSsPU7AdhwZVr2Lua1o9zEMJLMYHRUra1mjkFRgTetge3C6cEzKW7nwQCEe2C9Auj21w9Uz4",
  "key39": "4JrqT5vvRquiKMQ4P7gnH7DLBjK4wqn4oXe784b7DvrxcEhy6MpZcPt6TfH7Yn49jbP5KPLfadNFXsxytrsYu8wY",
  "key40": "3Z5tPfipP6N5Locz1mZGH9pc69Sexkb4pDuQEdNgdYQkNYp4HtNQe4eZBz2EcoWkYgoqEzvV6mCDn3aX6CD2PD4Q",
  "key41": "4exPYxDGh2wfzGDNz2xaQ5V3DiH36QEeXKMxfQWJt22h4eN5tEyfmQDp7YzbgQbTexZpytc9maFt7yz88FdJJMWA",
  "key42": "3ipyRqQfpKx8GhMrWwcbR4jZbJWVLuCdHeGHEBPT4NXobQbbP1DkXRmseahizTJHfazFaKgF6Y8Yov8LSu2aQzGW",
  "key43": "4aGzxQkKWunFZRfnr6GxPmzoYRbRZcr9g2HjPK5PWrAP9BaDaZGnFTCS3CBBGAxDkVWmtYxEhyD4wFaFqVJAFKmS",
  "key44": "5mJGXH2eViQNbpfX2jC6MHhS8h9wwncD4hhqSoTFKMjm6pN9VL7s1gjhKF2EseTm4GXA8EtLi8qKBWdoYm9vXp9j",
  "key45": "63sBHaBnFfBwQZ4xicmLTetCXnSixpzH3TqGusHPKRRN7axCsSZ4ebxVrCnsz8jgQR3KuyXnVtdbK9nSnZuRXon5"
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
