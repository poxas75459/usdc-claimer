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
    "5ssYqBX5jerAHH5sDzjzvjv7StGFRQKECiu7HiyMKXN8Cf6vcMprdrnp9rX3v6bt9utMZ5er9PCW9ts7wYNHbrZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YXnv4oCYbYjsGAJ3MTntvRDUHpHJDFzJAFXG4dWujxVzw27k5Gdy6PqP4mRqXYn7ca14GYakPTCkNkphqGyBzn9",
  "key1": "iKZhtUdZbJ9dAeJE7p6shY1KdUFMjQUYkU8GEio8M94PBEu9M4434EhYZKyRdgbZYVLoLPNa1TXVfcVRMSHgW9W",
  "key2": "jmHNpz1k2PHVYVNQ1a3wmEtrFBWLxsFxBHRLx96NZmW1oDFM2Tt4aHBuuRXmmGzh5dZv1AnUbGsymf8N5nx52V1",
  "key3": "qAQzNsLwDVFLf8o8x7jSZUmm4DJSW6DTWnCTnaGmtJfyD3g71n5JwX4VfPx4BwfCnBbTuJFkGYirqX4VhXtsAku",
  "key4": "3SpvHXzB91oP9GRC4PWcBLebaoPRN2ifPXNAMJUDrxJwHYLpTZErTjR2YUXg4gqFnk1rFwGQV9UwooJWTBJvgj5q",
  "key5": "2NxEkTYVxPfSPsng5qEmDgt8UksiSBi7iEY73oT1dFZiJbnFQ1Rro31najHAjRmqsnjh5L9k9jcefhGdu2Ki3bR4",
  "key6": "32UXgdXRYNfZeyjD1MhKARxoyTPfHhqkC7GScu7oRV3UPKhpahCnXt3f6pGMvP4EPUpAaSswr5wVLmhVsP2oBHmW",
  "key7": "ffKDpMCZW5YcatcZ6yhDVTgkPowizoydCcjFTUq5k746vf1riy2NNUicKhjqJfKZ7EtVXyrvLv8RBnbpGfkLFjR",
  "key8": "4mgdZfpCd3GaAXijQiooB95P5azSKbYuhvRNAuL53incm5MfxXru76QZFEAnnPEtVk6SnmZtFHb3CJmk1Yuj1Set",
  "key9": "2XuwhaFV34VKMWFt6WANzA6DBNL7BGHyf4jEiTe3acrtkQ6UR6U6ggeqjGDTfoDiX817FDCd7B4m3aQ7sxokc2wx",
  "key10": "3cmUpeciDgEYqJtXTDzHX7cYLxgf8i9GbnXXwuyuxAbD1pMKZsSWmioGrKG3UxznJn7HhdVBb6U65JTpzrqvizBS",
  "key11": "3qSJXEwKrRppX34u8gxg3B8Qd5oHycdgF2sWx4GDsrXEgVw2HZBw92NTtt6JxjxAac8x464arP7mDAwQ9We7bYVv",
  "key12": "5NUbZxzBmNbYqQ81wYxrjFehw3rSZMHL6Sr9CwHyTvcu7YbUG4fb12yJBJCkJXz1jRW7xncQnBKX8nPBfH61iw5W",
  "key13": "485bZuZpAcLsH6MBZPGWgp4GwW6Lx2o8UbnMZ8JSQHDFcprbLHDqs8j2xu9xjuyLaXGRyozdkHXM5vgySaK7kYHj",
  "key14": "5BZFkoNsG923ERDLmwiC14Vr3auyZMDtBgb2FkWkLGPwLYpAA3fFi1KTqM7PRRxRFyVyaCZBVGbLuvbsjTdCxVfc",
  "key15": "4bA3mXP9G2FZd8HhzzoCmapHaD1gYnYc8jrLYPdeCkfo6nozKNGpYxbduncKpkhtL2iEf766rdrrPHbJ6cFLjuQ9",
  "key16": "54xXdDsQRu1SPPHByWEXivgusTgtnSMQPbKc2Ynwh1ixrxErc7HBZ8nxNhZRG1x6YyyGKU2Xk93njkYPQTmgK2F6",
  "key17": "3C4cA3sE5pAtsWxNtwcZcqnWXdbwVyVzbay1Ji1ZpyE16jzdsfjbUFwXtn9WfP8EotnpxowmheDGkEq9nEJg2d1s",
  "key18": "2qDDsJMhDjHynfX1mSBtPRjZeQwP69HYaFqVdwUqBejc2oannGet1DoM6RcHnUzbZpSqEgnbR8BwdrL78nunLW5z",
  "key19": "96F6kCr6REfpVNVE8KNZ7kUgrAvShzNhqwBuEcW5vRJ7P27tKLTf8VFTymJ1xPAFXYuv4UEiakSGwowgW8T9ZUi",
  "key20": "uUEmFBmy8qLMPwfgP7MyU4mTsoCCFpx6xyrJdRyXLHpSrRU8q5TWzvmeRqHNtsp1rZqfeCo1x9Y4uCZQxQnyEZR",
  "key21": "Ypnzyb34bfxqnf3F47HtEww9ajyDSTqZzQu9y8iMzmehUg8CwaMH73zaATQVWr128Nj93oNp9RdynemZ42H44Xf",
  "key22": "22VXJMRmcNyuudu5AVoKWiHH2wsn2KELfgzk4QEKDczKyBY6RW6XfdgFUe2UnLWqAA6cB2LRqzyuLtBmHdQY7Doj",
  "key23": "2ujoV9EBnutNDeBTm7xfPHYtyTAnQG7Jc9fCGZ5P6K96mfmcwSwrXmUbiDA82CZd3uZLBKz2ii9EfWwkCxW8bFYh",
  "key24": "38j9qEkBEJ1mrVDEMjiJX1YSyMQ4LkFtQe3e1V26VnUmuFthUrNNnuUrbKGM1mV3pNbH5ug7nGW6DFPU2PSUwNZW",
  "key25": "5581qWrTMmzPnWsWaUo2VZrnXmwkQU8QW8KrKvZDucCj1cmvJGDEmj1GhL3bkiNjqaev5JSJw4j8Z87QhcTXcAbS",
  "key26": "3sjySgnAWRL89LQvLdsosNrvvHTtCpmfKZViJzMCBtvYvkXTTWy3D9DEb7kPgiP8gqhok8Mgqu5rLfrAiDKE4Yhj",
  "key27": "2FvD2LG23ZQ8sG1h29Koey7xkbZLWx4phrnbLEhSiLcyMRxCvSq998N2oP3GccepgqbcdkiZ76P5wgeSXB2v5qcw",
  "key28": "5KgKV4yjSKcrPzoUno7kUtav4WmTcy6RbjKicc8LNv4NqhMxAeuFKtCf3icgymfo8BGskncreqUnAKGvQN7ij8oE",
  "key29": "4HR7P36m8CDeZExa2MqN1PHdeoW3JCSuVXYLEeC2uZRAJCSHZvgXPmS8MSybNz7hxfpQnSg4CrecZYpoq9HaBVAF",
  "key30": "3kzExf1GLGMZUVPgwFrBCaFqzAwqkjJ1tsxkMSUXYXzdvunZPTvoiQzScpHvrmicEj6HSZwyPhX3ezx5qWYwuRPe",
  "key31": "Q1W1Cde44Hqn25S2mKdBmvd4rN5uB8VcoVahoV3LtNmZ6mxQrsEjQ5HPr62PsZka5GiSPBCXeMrB9SG4yz1oaX6",
  "key32": "4Teag86vBrekcr962JxNwFtGF725TF6K3rwL131YNzgqDXpxMSAzZUZcTYdjQQ77KQKo69a8xy5fA4rk4pJyETUA",
  "key33": "5cXWSv7zvVXWmnTQivH5nkzzKgD5sodEjCkPFyXvnJcqKQ7nJjqAaGeY4Dx1tEazvCTpN698tsEgdnAWdfFCNkkB",
  "key34": "3zVb5tAaAQaoDtTjYmg5DwMUp8KJZWJVHPZZGbp7g9oNZBg1F2ZSwnYeXYxdbSvHR8YGs5itdokJfLsxJzsqWJs"
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
