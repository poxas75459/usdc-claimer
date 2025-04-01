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
    "3qzjZX5gU8Q6ZS6wdzuFfyVm4E2sh5xWDseYMhsJydfV9k7fzeD4DWPes6MZ7b5B5nGmRLAVULbw8xKV3VFbCK7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRzCV7pR7x6Lzeab3C3VYth6qumi4tpPHjVvR91UqJrrJS9wFDU1Wg8hXvGDTk78hModyA7cmTkaFLhHUVd3oQS",
  "key1": "jaZqZXPZdPng6vW1XZKebhhmLWZrrEqFgW81qXrY5Eud895cuSivG9UWsJvExzcqcJ1wZjGS6QqLYkZr662twTK",
  "key2": "WMxcp1FtQJgqryrK2Sn4nzWeCpnxbYTBRkwJVnspDtpGVVexVtyL5uGEXsAsUqJrfYyiEvKXzVotQSGVa44YwGu",
  "key3": "2PfdaUauJqjoVKhDVqPrJxisv6e9chdhoN2GxcbudhHpHyUQmhuxN1Y874iL5bYuBf53SQ36HMvps6UwUjJzqBwf",
  "key4": "LHbGfUGf2TXNDyheL3gaYkZwUif6BhKL5BeXYwi35vthQBrrw6bysdVjLJGGWPZzDvVsPshtWmnNBbHF9wqBS1w",
  "key5": "nBJKDY86idqpNpwEhAEW852x2x1TdUmncV8SAkBy2gkHvFUqxYd17L6sfqT5MttF45NK8Q2JGvnDjskrazruDWQ",
  "key6": "sZzfNfzcECRwp2Wp5WJ7hXBDWT99bum7o9fhQUHXHqHjExMHU6Zr9ntZqaSHmFsTMmz1Mt9S93mboj18Rd4FVzn",
  "key7": "226iqvEmvLXrKFMQEAbiuqBPXx6ZSXUeMoi4x1qh5c4sgsQ3XdrC4utmWsgYSdSyPJPpdhUXmEd5cKakcdFqkBmq",
  "key8": "i3f1m7xp7qm61DDNv5aP2MTkw3dBdndckF1AD4CVsxUbMezvd2sn3eSzRdd1vrmVKRJyigofD4rKhov5vHf6Gaf",
  "key9": "33ivDzpNna5uP3ByTDc5ZW9nTZ59c5zFiTgScPR7ZSv82MdXxiVLFgsqEcHTLmYoLJiqRwcuj6nYpUXej8aAhMiH",
  "key10": "4YL4tREtV1e87PC1thBS4TZAguhVKBs2bYhzijJFre5a5jMiqwEcaYurNQomD86aGbFDSX2QpbeojoKoL8NVKLHW",
  "key11": "2ghtqngFJ7Yfwb3dMusprvYHwbaLjqCZqr63Zpex5V3qsguJWaaqxQhJZjgCftyXNKaY3vpKASaGMN6q8ppcL8o2",
  "key12": "3sN8J1BUrPrugeU4sRHSqgkxskYwg1rfXR3jqGmSvFE5Z2vQKXv2xh4c6fLF847gY6UfptqhYGMHFnNDgpSdfjkr",
  "key13": "27ZnmTevrzgskYAVRfK1X5fQjR5BeTdeTttrMhrNfmDyRwqp2SAWCdF7CGddgoCGRqVWxCVmG5BRYrLM221LTymD",
  "key14": "5YDeRdpbZEVJXwz3AUzyJWG1xfC3ywixzLjfV1c5Mvf1t6CT3RS5ojcTvfWDTuvXJRKZSLPmBZQXRR4SP6W1tB9v",
  "key15": "4cfrEXGgU2UTNPB68SGjJ1mJYDwoMLinh3MKCsUDJwTts5YoEpMHJWBtWE3VXsBTvMrS7sUDWDCGaEyffngidY77",
  "key16": "5g7SgGMYKCPdq6X5BfDVuSR7DgzNeEUqCnk6JhpTKnhMXqTxKaaVP6igihiCdQcbJSAUR9m7ibWw5ZWmzUW1BKju",
  "key17": "4TtwLH5Z5K6a56hBcU3kKqqDnTc8kAJ37FAzNimcXvgCe7A29mV2ub2gHP3hxB1sJExMBj8afdiRNvU8q6zw3W37",
  "key18": "s9yTAaupFdJ3K5a9JCZztuH639M5sJdUbaGrYiZV5Ej4rScFtcxCVr4ohHPVgXMwZQQTRn63kBAHFWKUHpNG1uN",
  "key19": "2cvn4mpNidthAvmVG4qH6N7NXz9BZ3w2wT6U3SdHRmtwb8eCZcjp2Ugc2DAhER16YSXoqJHb98upN3uKEJJhAHnf",
  "key20": "2hbUBTv5ksV8747xXuDZYdd74m13er5x31GyHK9uSUSb3ZuqkFDTgKFJ7av3oMCCzK7GB9X7fUP8gvTeoLDmuV19",
  "key21": "5qpPhzYLtLrYvzf6tLjLnMak7VSEBE6byU8p25p5fzZX8gc4kwLLins14QnaQ7R8yd3b6Q235EBbKA4moFGiaXmt",
  "key22": "3WTBRxwG7f1a9t3WE3gBWKCVS3tbK9Pp8XuvhmYUDYGJHVbY9rDD2ESedDnYfbqpRMUChasPxnqA5ri1SNbCFNov",
  "key23": "5YeZH44JWY8G4AwD9SccmEUEJPaaRX9r9fKHoAA8BbkoAsDyjbpn4XZxEf3RqitetJTpMLiXo99M8FbBW1xpzaH5",
  "key24": "5L44h6skejBHcm4nXgwrdAeLtusqYFub1fyLh9tREzBNKuYrErsp8iRjFvu9ECsgP6PwLJz4JSqPKT5JA6BWfSh6",
  "key25": "5f5fCCDpu1Ck1kKHiqGXJbUcTmhraJQGYX5Bst1Wg2X1mTGMrwjPoi6C28eCdeWxmJ8i51Caf4cQ8oFEiUqobdkM",
  "key26": "4H79XXG2wT6oWSDFzHAVCN8qbJXqLbWdzeDS7BwpdfvNTVv4sUAcRFpWcrhPT9fxYf7JZBgbTaL3hQ3KP2Kt1eK1",
  "key27": "fL8VDaB89hCPzNFumfQTHNXjVTAMD8NPPq7Zqpw7RARLpQDUresNtmJkygdbNNepwbTnrsqcv1yqXwE1e8nBbPQ",
  "key28": "3jSAwmTQ22nXSvYDz1LBe6rFVZgZd9GKLez2uPuTr3jHthpdkRt5Yhgj8v2RBYtvUfk5MyRUpC2Y8EjXcSWeRNGh",
  "key29": "JHiS6fPRELrmVffRyT9rY5vHEGh7d5gV9gS3EDPskLpbEmnoiGW62x4ico2k6rwnRJkfkAzUYv2amSSxa7Ym99T",
  "key30": "2RL6T6hWH3ZoXdppLh29qnaWgV3jRcmcDYempkJhgG9p5Qdhgiiy9iPMdHejNJ7wScu1TP63ju4RNNAUr5MGz5Lg",
  "key31": "ksHPeupdiEKd1sWj7FZE3noSnbUkj8vk4trfHsAgidzE6pyUcv29Kqp7PfYcdwH1nUnFzzG9EQp4YFxNwEH9mkx",
  "key32": "3qwwQ5ZwBZ4A5ZtWMZPa3haLT9MWZvzBaxS69KtZCyRj1x1Ybig7PbSNiCu6dr3jstoaFCixjEbH9S3jayRLkFej",
  "key33": "2L3W9U6fD8nLmhusqqFaijFxspTPuARpMej3r2qdJjXL71ACZg4k1JBib2Qhb8qJYgJnUyHwphqpx7MvzRYE8TW3",
  "key34": "4XCYgmJk2vk9x82T5LyqQEQcorjThHmi71vVzqBCj7mJGgW3JAni1CD8eZMMdtAxKvBgxjxCoMzaiQSq2gKbZL47",
  "key35": "5BRaxfDVcoksKtiYoUw7VGTAxaAjmy57cBC74PcCCHKJMTySHP3mWymTzcHEp6MDJJ6bDUKtRVrk1nqW6c8Kf3y5",
  "key36": "2T1ut7Qxbjv4VUcmM4ndzAXqFzgdrSV1wWn4xDGV9nB3WkeJ91jzUAm4vsPsZE6RMvUQkYspVrLHtnVeuZYzNYYN",
  "key37": "3kTfvfEtbjB571KdjfwoyZXTfh99PT4mT7igofCLyfN3M5A6WF78pR5RNYCxcosZio1XAmhCjSbYXPE8cSwYqTfN",
  "key38": "4tQR3sjKVfkMAGsGxexqDbAcZebGXtdx7AB3k1HTATMXmRcreNBRSAd5PJxVAX9B3QomLreqFgwkvFtfwprnpsHG",
  "key39": "vQ6TYQJj1a8hCMYaxBksFEY1F86FdsXdy5TTyBRYrNpDhfjHgonfmnYsjDHt99SuKAVWM115qGG2yPofPMTWnwX",
  "key40": "2FU2xxMQCmGhecbtmC2T3bBpiVnWMAmfNopkcWndzGvg6zApva3bvZEJzRFZVxSo11EfwH6LaxAKmaapH1jhpowK",
  "key41": "2LSMSK8vfCGUFdGxwETcPgh5D2TZfcCePVaNRzNXnWGBQ8yancx3ByWVeHg6ZAnRaqz7MHscxDvDR9ntqrvBE7dC",
  "key42": "5bjFNZ47cWfgfBhbVr1SLjWFgtRsWJPNwrebKS7Fr9PBZGiggJTHtsoCR1AyFRBvuYuJWnWS1JtXSCDhfTi9758E",
  "key43": "2RLHgYXSe6pUiFnzzSAXScTdNH91eagm29rnuMXue3vDcF4Q8f6QS6Epk4HyZJdp9sWEEu81sFc2bGcjUXqcb3ot",
  "key44": "5WyTEC7pwnnKYtKtimy2b9qmMosFPoU5QrCSPoEDnVDYZeHfjeLYjSJu8AHbSEHiE6QEbuqxsrkzrMMMXEK6tHsG",
  "key45": "5JMbFyppwiCMeB9KthwCBDewTR21suzK8fbZYnakfgJeJ9YuN4Mo1CmVEzpkk8xgSKLHAtM7ng1uGd55U3kaspML",
  "key46": "BCp8izJV9ntghNSLm5QU7prFVJvx8fvZPu2KZL7zVKV9vWxpkvRRejthJYqByyDLqAWiKUwBeXf1iLkDHvx1WHN",
  "key47": "2GXWR6KrBFgjmwX9AU6xtZKHGnPqA8t5wsHkf8n9GTURzmerxNHqwieJeGuRiF2fbRFLoFrTFQtPF72w6C4KgLj3"
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
