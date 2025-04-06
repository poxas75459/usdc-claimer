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
    "3QjaSigNMBJRPR7AMrfhZuRXAmVbvD5YvbBiYXUaBp9yyfwrGTzju4HiCGzTEvB3PU7GaALwhV9VBXPE7gpTmvmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A4A3dAFo1Nar4F2emYykKkM8qb7CWAWJTKU3ukMusCN1tWdGUtGiBrL1gkNaCar9dUHAH9caRyXWBcuCvSZVncN",
  "key1": "4xwMBwE7Dcjf4CqVsTY5N44GBGSmq6o1v6qc6nnLr9x2hFZc1GM8Q6r1BFLJiLdDVLqiFFUZJxCrrzVBiqnYG4p8",
  "key2": "rZpUra4puxBzJixrogZ2N9TxjwN1vVZJZ9gRFHNxnh2k4MUPPuSRxWGvGo3aBHc4FwjRQNJzMiBdg1he4ZVMCvf",
  "key3": "5QovdCJHm6uuN7Fh9JYrDLnLJpJkAxdK1vE2Z6YffKhxRd4oPE5Ww16ihQFkrsUX4joDijNJSyV2vWgBVj6Su3eu",
  "key4": "4CLC5BQfUnGCgsR41wQayiMZwGSH9Xfp8AYz87SNHAVJbgEKoM6Ser86CXzV1ucivH5JenMjjvcrntLG2Pa2V1LH",
  "key5": "4d4jBiA7Qvz399k3ydDVrPdZGNWkahZPUz5MeD7GzNjLSHGH3H1bRb4YePY7dL2LSD2nHqwMZASt4ud9bHNFF5Et",
  "key6": "3bc1JsfTwPHfjAWvN8KQLBHPX3sMwdPmQ3yBtghAgJCup8kVazFgM8njvK5bPmsehpBbQk71cFBbBPZjSdfLBzfT",
  "key7": "rxeGXcB5zFb4pdgv76KGPxs6UbVZsiweNsfYUt2csmMrAWJhYjT79f6joQBQ3NHHYjR8vS7XMP7ttzDJQiAJb8j",
  "key8": "37cVs9YKPbuXswPAdnsRs1PtvfRnpLutHXum1K3GQgrd36aDikTF7ZSCY3QZ8XPchZ99mZXNQuDvB9rk8Ka91fRa",
  "key9": "57Q3Ec2j1bv7MDvegGPNFkahXJ6rgQktP8YELhxvx7yqgBFzdw7XeAMScMLkxL2v5aqAP4M73VY6JcDgJgGr4a1n",
  "key10": "3TSEsoaVQ6wReU2iM9WrdTk2ep63Wa8C61DTeBaCngeaY5oqNKXCmsQhp37p7NpPFj9M3K8hpjgpR2vTF5zSBgif",
  "key11": "twdvswgafz788dTQyHuRJGRoD1ttFCUPZnGWMVw2j94FSJRT2Dvtbsp7FaHbLgrVVz6qRANACLKhqNCMtQKwmZ6",
  "key12": "5fAGZNBHxMLQpWe61Ftnt4h72Mdy2HhsuCW7Y71fKc91MXehvvKK39bhk87QperuFi7otS5mhrZpUtNwei2bk4Td",
  "key13": "5wH5FFpQwGECWXHjcu2Yby43mJERkQc7kERgYLjhRsRop5AvXqQcvenPbsEuxUeeR1DdBWHQhev6m1adcajeFYg6",
  "key14": "62kspiCXHHuaDE8SH6gzum1d9B8xScsbLHiVDYxFCE9RuFqaZUpVYEfBiB2yatX7wegTM9AqBPaoVzMsnVpYypAf",
  "key15": "2CQ8RCvFQzvU2YL2Wom798bNyAcrhsEVf3Msngt2FkNY918FbjqqAomYPgvPVHQz3cifHwePK6bQuBDcH1uUbvUU",
  "key16": "2J4TJoPEqGs1d58vysYheFzCGiTtTmv4NSr11Wb4BjSR8SY3qbmc2QJCpnjteeSnkDhoXQ2TFTxx9H21wBWXULkP",
  "key17": "31KM45iTciMXgz7jgRfioDxbbAWn24GoPC1s4XiKNkMu9UgTHJsPFRbS3TAQFWDB8DMEawM85Jsu8QUARCkriXUV",
  "key18": "2ske1dbbF75KWfMfvF9Ju8yy5PoANNYHjgqD8sXHURDr53Kq5gn38aQJUcYPLwST7qY8zzPVtyHBkKT6MfEvcm6u",
  "key19": "xwsk99xqdwjut61N1Rd9VHiKPA1dj8VK9kfTfY877Don3eoS1yEGjN24DXKuRMXXneMjRz6a9ofq5H78ojEfZCs",
  "key20": "4udCvC67JNkMEaupk78WBBqNgfVnVeY7ePTYanKr9PKg4cavyxLJik7fdCfk1cNDtrdhhHLzm2rHNvq4bBzJaWBm",
  "key21": "9i7s7ymUvcqwEMjkrS2F1u5B24WVTuqrHoRHqELY5Bmg4FoQVhgu2npECpVaCK9na2z8JYd5Bu69EEAUJ2q7TrP",
  "key22": "2vGtpbJ6i34b9qmHUw8dQP6Gs7fez1RLvtvdWJL5XxkM63WgbeJ5fHKhAgrkfsL2abzdeWp294bWGZS6gmeWetuV",
  "key23": "3or2DE9cgEtkfmJeG5nHRfe61Jgv5xmu1YYEHYjLmt9pXfwNsXdUYfXkaCPp6mi33FPqp8uVAfRnUKaXidADHUWo",
  "key24": "tnEEnFYjeCvfA3JGqk2bYc1dgnNTpJtWx7i38mJ6rRkXkeJ42QuwytakGBbuc2kwDBHoLkH7zdGJMTKoPP5nvQE",
  "key25": "4pgh7euxMduwGCXAJ5F9MPqT1EWs1rBkX6Jyo1HoyRpdD2HzBwkEQRwkiFKhmLwQuDjoZoe6azXKMPZWsUkf2gPo",
  "key26": "2QKyxxzgEk4MkNL9e7Usf2yJNAowYBAK9Eo78t1TPntSxeRov2er6T96QqmUJTY9R9PjJaa4QifQ5iPZoCMTpV5B",
  "key27": "4dcjNrdqBCKyASB2Hkm2YcXUAx6UjpohJkM1k4XEUM9G4U9U1wvfS9a6CGkR2qN7CMnDMn87y8SRQ843736geatF",
  "key28": "2cPKNHtsNXhiQQUUoUnkzPQe1K6LmJv3mbmP3Kfravaznp8s6XCqKEB5oF3peMAzat6oAfJJQDkssvohPtjT5Yfw",
  "key29": "5c7jNQZh9tBPo1UWBA4JFxcw9KeryCFjNe9reo2KMRtpP7vzST6PJGVD9fxGfARYk2DdRGkCkbw6Nv1i6YwYQD5B",
  "key30": "3pzAYMJ1uSLTpbE4aiWHkyzNFLV8kWPX2pgFFk5xchq8sZo4Rt3DHxd9UbpsYdZPYJpYyrMormhqQU5f5VxXxCdr",
  "key31": "2hHn5xEZ6HCE8YFV4WgB5ABUNWdh81eoJhfY6YVcpwzbgtvrfL8AMqf3V7LEGFjQQQWEWdMFn3mJy9SpdFUCBzwN",
  "key32": "46i64vDJsUxfgp9GgqAhrgVYQVadu9QLhA2fQprdxtyyh9gRgia28Kt3HfXdLMA6P2kQVWRjtwr1xvsP2fJddb6B",
  "key33": "2rLZ5ywxZYcaoMQtoPx4GUbcEWMZkdxnoy2U1JHSSPwNc5EsYg8eV4UdKomuxRsPoBrH68Z2sX3RPK257xzTYU3M",
  "key34": "4VHoNdBwutrknPTu9CLzLrH79LA4j829G2yU7fwBtbGm2cXVX8r6AWWddZEVHJqkHEGzxY6wYGkuno7G3Gb9dt4z",
  "key35": "XV5au6PbPprTPCJF64tbBcoFdxYiayRB1EBcfqNXAFrx93fo836HmWeWL1CKrG2bBpUfU4aQSMy9EZAjDmSKPMP",
  "key36": "5Nh6w98nfXvKJNK91Cd8rYiKTq1cmfebqPWFXGVWmxUgzjzMsV7rEushabTUxGdDMogVHHQHMapejRAMxxSo52HG",
  "key37": "4MgSLpftFof4oap1aq7n7iyhNqjMcsAzXWaC3q6KdMQVtS7jAFjYWpM6P6NNkBMcEQv2JQzWzh3HbUSdkpc1hc2Z",
  "key38": "4P7Q6KXSzc5tSXMpUiLeRMPA5bfDrQpGzWG3qXv8Aa1mJj25MkeT1CrcSgRe9fmXMpX5V2ty2YVtht31M4BGgXf1",
  "key39": "5DF636vEQp38yx8pRXGEU7ieVQLxJRuh5KNuYMrTZCiCsWUSqrVP8djrQe5g6PSvhDvjNtwWSpc4CgHMJf6eq5i",
  "key40": "2uFPXrRvYaP1NBqR2ctX9SWh9cztRgJAHYtgipTPKdiquc3bDJBJdmLaM4oosDSpTsKnxCbrRmwnQLmr1wtiwEE3",
  "key41": "5kE66EaRWvNkdkon59d93gqzFTLkNZJv9NK5kg9vQTTL6y3C6if62N87bCZRsqNKBaGc7dbJ21oPss5uJMZbX92f"
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
