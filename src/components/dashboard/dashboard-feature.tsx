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
    "4JRbnTTyo3MLSfupHJ6ABtrzrMsBWQKR8c3m5RSDUfxWDxnn7QX8JLrPeri6Mm4rz7AgveQaiqDfeBSadxRv4r3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NxM97S175NXNq7bgBu9AUBPyRxNxaJBEihj7cmdaBe6UhTQgFBre9crD5jRSs91CvG3v3M7B61MMraT65qwo3W1",
  "key1": "2DFPmRZPLmctji4ucXfDegRG5mozWFuA4StN1MaKDsuQ7UUFNtdovRsbrF1vdJP359SFY2yMRmyv4CjbBRmRfzyF",
  "key2": "2jMBkD1EFv9Q8fEvYzTYS9Jqd7cLNmXimXkyueCPaJHJxMNURVRgVh1M2NYk6vMbS4vhP2whZQCQQQRSRMYrzi6y",
  "key3": "3mS9Vs99KcWp177fWGyrhvAb6yzNVqmxoLPjowB2MQDWJbi9V22yZVA9r9Q9yxz3raGnpkWvaXSrBYoLxGv7TLyu",
  "key4": "Z9mM5wjyP5ng43wdP4cPr9voRVUHC8mfRySmb4BpPPRmBypBbkMUTGhEbN3MyvRrrJwYrQmczB8t4QxAhnBmeXv",
  "key5": "2uLD95Vhxq55hcMCY8oD3SJeZ721XWDRFhzpzMJanVmMMuZMEEZiXXsy8VYnB2vCgRAtCYY5vonXfEbrUrCSy1bv",
  "key6": "4TA9Uw2GHTu2E1Dywmz5HBXT6euqwEBuEY8qwTsPizbL5HAjQxAXBpzN2Y9a94E4BojgaZ2tDiGfGqv36NEMnSm4",
  "key7": "55Mb8gspTb2SCatQdAC9VeEtjWxQ2uHLi8wm4qQf8HyfQKVwEDGCABQJqYcV1F2ahdUUX2dZfkMnZ29gyi6YsQDR",
  "key8": "48oEyXC35XMiYTMmEnz48yZKxCkJ3ZHnoA7Xve5mCQ4HXMtDuDJpwTmGaDBafbFVmQXXWU2a5SyvU9ZtsspmwsSJ",
  "key9": "4S45jmrKgcmbmppCnJEJxqbAcpgpdoU9f9ndZ4jf1dsJy6mEZt6EZScyd2NYVb8PTP8hPCC24UBZBSRR2JbsTedf",
  "key10": "4ZmEu9znWyooxhEU9nJeJhUdyZg891mhQwVZNPTFXeRYCEZSFXXCRT3exRDRw2fpwihdFSUJqHrgKqFRyiRdHPGA",
  "key11": "3g1fQyDtvDemji3cXYy1TeFspyXe9FKWSgfgB88JErA685HNByrCCpLm46iQ5HEL5HJt8rCatmEwNhYUs8Ect25k",
  "key12": "41cQEGN3kUPrBi1PFmiJuqvnrjMQzDbRqkTYG4nFeD9iYRp1rcqzLjjj1e6j4MFXSvC2zhUoozr24ocLq4yyXAeu",
  "key13": "iKDwWQaSMRzF134uBGCYqccgLe79mppvexhmCJA8Uq3phnQmqhYBUxxPpPfitmHdpXstbDkRyNFwf5S1hdPrDoS",
  "key14": "2yqmegWfVFwUoEudUYojudR9N7jaGiozvoBWY4KX9SBWtJRkdWEtCLGpTC1n45UeUgsZ3kXK8pfKX9x5TPmE9Ck8",
  "key15": "2Kmoc4MZdv6tRye3vPh51Lap2pXZbzk326PEhEqWkDFQepVRsouut6HiNtTDVF8a1k3DgLjHQWdU5v9xoyCXcLE6",
  "key16": "4tTA8RHPCvmkUUH3bDiqCmh8E9mYawh4RjaTPwDDyuaWhHDkHz3mzWKn8n46V3N6W2CXXFahmDEZgKuhnDJJyC9g",
  "key17": "4jbKmMHF7TUW3DEgJLjAwSRepswVHjXWMJAWSttTme1CmeQEsmcUXnbPNydxaE9E5LQukAZuHCqWX2UWPdn7z2FL",
  "key18": "5x3uUhruNhfqpR2JL1TAVKUiz2NQqW8hunVLY9mpQ9QwhbuKv852nFhB8ofqUKU9VY7HUkPqX2tjpuDgUt9Pc1qd",
  "key19": "USNnizKFeyqcLZugqyoFBRDxnCRtHm1VM1iJsJjHS2DLJWZvcFN1AZzZidfu7W16Zmvscgvi717Q5zMu7eKaypm",
  "key20": "5tPSGHdCPy1BaeXariWWQKHCuxCY4igAyMQTn5Rwuh1PwY9WRQDtRFDwuPZZtGn549fY7uEWC7boZyfTyB6kDHdF",
  "key21": "52ZCbr7stxZTXwuReN69jnB2cXVQnGgi3zjfdRzYyHXXtqRbgZ3VAWn6zqy1s533DNDgz7gS874Y9FJGkmMppkVB",
  "key22": "3mn3reDDmQEFynCmDcr8snXHhVW3NxyWHqAfCBUaJJ5iWsEYHNcLvoAqvheRkJqLkeWfmvKoi3iDxkgpAhBv73dR",
  "key23": "2UfuEa1fd8dBxH1ega2mSUXBJxQ9ezunZcgNXTw8Fkr893NT4h9U5TE3KjWQeeQkyPJNa8andAEcAvQtbddADDDB",
  "key24": "4zZP6ccUDCeJz63WuVXKzXVcgqhXu42yrQSQ13VvkzysnSoaqhMhKP5q8zYDKX7EMxQXisUVr76x5jo2xaGbmwNB",
  "key25": "5Xs2iwxSKgBZgv2kqCYitNHPV2VJ5N4jXo2kx13hYNTRSfBmiYaC6rCUnzr1RkqyNaPSsHoeMcHXqVAy4tYcWA2N",
  "key26": "54YkYBkWBrfpRFgu24Keq2eA9EUh44U7RhYrKS1A6583SqMEX8RaYvMETzYdj8EKKLUfzPzcaSCXj7ExsQGudtLZ",
  "key27": "5rvUChWRpHXVGpAPNBMupJnazT3UPpGstGFYChQMK2HFw22NEyYmHa6WDTstkYS78JavmHrXZPkLqcybvHy7Di1",
  "key28": "4gNPFZys5MW7VRyD6nMz3d3e3be4wZpo8JDfaP8sUnfV9nEFsjQs2UUAVQc5seGkyj5MzdUrKwURs8dBHbJaxEQx",
  "key29": "5tvFCSGzLrSo6dgc8Yth3LD8NS9NpA3rk5dCrwCxECajB7cVtoMHahxUgYpMzwk8ngkW7Cs4em81NbZx1gmUckvu",
  "key30": "2SLBDizoXaEfZbnCFeAhbvjgtsLDgxFJZDLim1fbedRzA8sk4MJG97UhXcffduKXJbHvDtH6u7iv6FEtBmiQY5hY",
  "key31": "4BhwZx1yxseKaLRYJ9Fhe981MnFMhYeemGXNkSD75dCUCp7BJc842YZyecjDaDHSCYiDRDtNg4nppLjHdXBKVWzk",
  "key32": "3ByGzub1y9WbnxnsKPMs3BaTgkhrNaF2u9tbj3UucTPt6scmT4pX5ozeKHQJ8hMBWoT1TTNBNjXiqghL7mmD1Asw",
  "key33": "4h5fJdfmjmhuUbBSGk2SNqJhosTnZ3YRDKezuUTXi61uPySxnLpwV7jGyeTZLkw4k4xYCBXtprfKmUdQtVqBkT8J",
  "key34": "46QUZe5AKTMC4zZMM8T23bckUnB6eFAppuUQT5EqN6v4bWMnpkQ5GRMDByPvak5mkYNydBJbdtaCSvwQjSU8JtXp",
  "key35": "4Ki2U1QWQNbUEGuPubtNBu6xdK4z6MCPp7Zv9MzqzrqA7GUiYH8Yufd4RJdFdgzg64p7R4hkhmzHVhrJNh64rU9G",
  "key36": "5T8q2HUi9AHsPLL2vsxxAWYqrkqeXPX4WU8x7nHgwN8hk2MUzRqyAzxVw7stVWHekVfLrYsavEvj1QnAsgZcBfFL",
  "key37": "3USjDt3PexjSTSu1xs5HNmttNVVryzkcfT51Hseo8awasnKxBpP2754wVZ688ZqW39ZCmnUzPNiNgSjM5n7hbCh2",
  "key38": "2T96hgPbthBZzjTMmum5p7iqDuEcHYCeqKeaBZs2rnEQK7vFJgarzwopteFn78etyhVxB2DrhBbnXcdeTc93kRve",
  "key39": "3yKnV9noZT3KWobJ4wougDUWcnHdhKUj8s2NjJmk32ordfD4NJxTpBgzUi2b69VwoFFWBfH35Gk3nkbJNMUJ5qdz",
  "key40": "5CNak3V3ni87cDpwm23pSb2DJM9n9rdg1C2aBRM9WSNHEqgymnSfVTs1TKzuuKXL96WTgRRZmi1Msf37RtkD2NJw",
  "key41": "49Hk8Ps3MMrwY479F875rAZzh9xWTPktscRrWE3iu7YiK9k53mxkxqegoQe3PySjG3Hz1YZbuhNighMY4c9CM4js",
  "key42": "2RRiPDfskXk8EFbuS4AVHgCpcBwT4w9hDjfjRjipEBiK65u5RR6js8j9uPnLpu7Tg7wuufb6iuwLLLbMnHJ7QcvK"
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
