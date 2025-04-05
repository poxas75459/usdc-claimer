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
    "gJk8XLverEBLW8p5WtvEATuEpxLLLUTfcKqScpc7xmRNuqZXaxPFVbREWP9fnoqqyuWjzZDBV1PKf3VJPCbxAyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366NBvuwQfHdpstJvH53pCTLdf3Dd16nxxRxSjSaCTnmeAERGLpAai7Fd3zATaDpkRvEPEjzUPfNyNvM9Qs5nyKS",
  "key1": "2ZRmsh77ePKD7CvcXGYBb7utMYsAB5r16kyKiB1FnMRDfxxwJ74mYtUMYLk5pwt7Zbwzb3P2bS4GxqBBK2WFbyqz",
  "key2": "2oa4nUs1CsKis4k5fDraT9bW6ssq4ejGdtPkwtqYUymK7boLb62ri382kiYSoPrzTTsnFzRJSkz7JnQsf8eSqZ7z",
  "key3": "5pKvnUjVySGRJAEhRXjDtUHkhXUUuEgpjZYwRBUHL7S4FMehSV52fnUcR9t3iy3T7LkHsSRjJWFT9nAyQjraGHDB",
  "key4": "5xuNSc48g3HtRwmRRKmjDegjfCCFF9NhHQFrXhxNxbufH7crLRn6ccAcahoSF25EofMbkSMhZY3aSLZR9qNG1mE",
  "key5": "3oCbzBb9YHGcAexttThaMUTUhBcw5o2yQrGHeLMrZwEvx877DR3knDYXurT2LBUSVE5izPbQags63vKr2j4BfkBc",
  "key6": "52YJHPPUTxYb2yiQaM23ZAK6WnAJn7jTWpKrC6aZvrsWry4e3zweuF1ZEBXqmJCBM7Vvo3KoVDLo7CavBJFXMR7g",
  "key7": "5o5WyfuwXkgP7T6mToFZSrc67gy1Xa4vWTiLHLWoU4qxUYf7H1kGqLNKdPCD7Lzsy5XLtAFSECSRWihnEHUFaBJb",
  "key8": "4cUWURihXWxoYqNgewrVEwkdYh6G9yiZhfwDCYE3rJy2LChqxbuKavXRXTUFGSSPmne98wb9C42nTxhZk9ew3SuA",
  "key9": "5HZiDq2GeRVnAihae9TAPYv5xU7mHqEb5cEwKKA6bHz2HA55mTnvgzCcsDccNMWvjFyjcjtjtfD535rUAiQAaN9N",
  "key10": "AqztfmtrCdiUhpseofBHMsywmR3cg4yYzfd6S5FppB2AnnMvnyfC1Q2UShiMXmsgS3s3w44TNM8oVjY2cFZJgVq",
  "key11": "3m1mLP2QwhpBhV6mRUntp9m77DNm2VLzmLJWrnRAsU47RH1HM2kqh72KPLicTcKbipUoqcwMnnaJYTHFhaJB87DJ",
  "key12": "4z2sLRvZcND1zX8FsYjyqu3AUsvdVUuNneMWPzVSwAknQ1beYyYqTZSwA6xP7yd1q6rokUa1ZhEQG3EdaHV6CzcE",
  "key13": "3n8e2xrypx4NfbSteyY4am6BeuwUgYbgC64x59Woqquk3UXpbMUoYNZNMftqUaoL9Kg7dkQfmofSRRNVottqYMKV",
  "key14": "5F5YxwVY8a1DHn8RXqTwUiNrr4asfyhvLHHDJcZtoBGEUAP3oZmGVdj2DED6xKV7FgbGVtYQXNsrwFEHWZibYyNF",
  "key15": "5H29Pxkhmua7cN9hBZAt19Gt3b61uNDKCUnaT9cjQ8TYycXN2pNh4pAQmWRYy2WoeAWVwUDZ4AWwLApnFVz6CLPJ",
  "key16": "5Wh6sZj2CC8fAxt1FWFVKZia286pWZkrL8nmT2snYZkoH4G3XZ2zYs1o5PMpkc1pTDP68scBMePtsonkycWafgLy",
  "key17": "36VybdHtG7mJi9ZrWE8Vi3abqesZt2DznnSd41vA7vggidtvDVUufbnJpCEdGqqiL31QEfcbdamizY4vScDhDfSm",
  "key18": "51rxtTjDNqWXV4T6yKxEZod2xNpVPxPwda7ZLqaiM8Wu2ATqpbGA1UTXWa54M8kRSUiJ3Gqyo67WRxLJ8pr8R7oE",
  "key19": "29FTPrd2CASb8CkV4fRSTvEKvWfHzdoMJuFmp9vGv7BSak1TxbFRvtcThKxnx1QHbA1q2fk7sz8o2ZtwCtZMSkBM",
  "key20": "7wx5tzagoA2MVdhQLfsTXHBtPyq6P5fkMctduRoB7dCmKfMrt8nCmW6Q4HpsRDSd3Ju8w7FxtmrUUxyvmJWv8rZ",
  "key21": "35w9TGhScADgZbgWAGYhxzg3N45tFDYsX9FsiYaLB1KJ8BVoU84bp1MtYaSxgyFjZKWTcTqzagGhoBV3HAaNCYZM",
  "key22": "LxQoREryQCne8KmzpJE5sSUhu9X8RM1oeYeTKXx4kEHDJwJvBjdmjtgRw6nr2cRSU7KGzPfMirY2RAGiLpk76eL",
  "key23": "2zXMASw8f5cDPJDEPusAcedWGryGUfcuvYgS9q8rWrLjr994K3wrf43h5ePRwfhEaetwMsFDukGs4uhHbgTtXN7J",
  "key24": "5mqjovvGCmqZKGG5rt3qbQFwZC1aHvW3EeMTvSK1o55fHcpjdT1wPWxmG3iDUW7WKAFkYk6NueRnC1BegoaRA6p9",
  "key25": "2VZFq1gQNNzTbAWeLqGLbGRhKErJDtom43vM4cefPuyeGnbgzeZQYquayJauGNv48UgK2ZTpg5wQTcYfuqjJEv8",
  "key26": "2K6XEhexG1B8sNvcMyqwEHTMmKMc9m8A5WA8SmG4ecsYFrCuzgxLhRVU7udMRdWD6NrBbBzVwoGasTEZErKReurt",
  "key27": "5aQCvqZ4fQ87R6xk3qm67tqWCrgzaeLTfBLMFAETasr1YFsYuE5hiDz2cZFwCCzVdCxDb8Fru54LcKPg1XWtGQoF",
  "key28": "EDYcNeZNtFu17E5ZweUKH64RqWnpKe8tW1PZpNSWwanzeMT971bKb4f3K8GSYXUgZFLurMsmky5jTVQuShUvysS",
  "key29": "5kurns7eT3EqiMm7KiartPPoGPVpxPnf6jLxsAYNgC9WMZg2L7e9vFpWMZRN26zn5qQTvkr3TVUWZ1B5H9Y6yPJp",
  "key30": "WT9BKuWMzvn1WozD3B6keuD7dWv5cE55oJ9nDqL8XpCN81xL32oPfihqkYFM9agY82YRnwgFPfte1HuWiBge8w1",
  "key31": "3wQ1Gzu5fTo1Y7LZRyTkadHNz6T4UaQBmCmKZH6oXWLmkUNZE4e3GqExEHzu4j4uYMEbDYMqnDTJwsqfSeVdYT5y",
  "key32": "5jAbjkK1BeTnLQ9wrWXZmq1qtVknwPTbgdydYceVdbP3ZyNswTHByuwHGHzJKnA35TN1W6EeRjmCUpGYaANWGcMG",
  "key33": "4BryPDqnn9qpSWRU8ajKYXTSBwy3jv233rzth9KmvfnDWnmioSwZfaor5ZHoVBj2PXnCQW682NQUAjH8RYwwyUno"
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
