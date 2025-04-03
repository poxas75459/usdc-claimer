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
    "2SfRAnyAyYrZhQVxiEervcD6t3wXiKMzM2TeF77y64RpUCALFz5HxUUrdYz7EHus4AFQLau2rtMwLHgbGJYNVyEw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XDB6wueLpPKUMmvC5rD2v3ePSfPStY9svJxn6S6YPNFkQUrBYntgum1VoyypyKJPed1HBsP3AKc3hVtqFNVMnjX",
  "key1": "LTXoiDGpdcUE1mwGXw11t9ekivDyii8frPiatf8jy5cYU1kaxkm1xSqCWsdFrJ1x9NA28PahgqVc8UdPXKf4eWS",
  "key2": "mj8YJRR8DXQraxVsPj4MSFcEBUz5LxUyqQrQgGpL1j8rZgU3VXqpn8oHSq79ZGhYuafdmJFbXTRt1xafkqADH9A",
  "key3": "2zPS4VBq9baZY3VR7fkcW426HzHfTf1PyMPFBWMnrtJrbxaCjUU93no42wzABpPyp5ENjphTw2XkXoc8o3WrTbpT",
  "key4": "5oqPyNMuz9xwGM1BzD4PLi5BUz2STXC4e5hXboB87Zky6TwzCPQNSpMQhNdd5qZovogNZ2khTox2X26PGFxdh3NB",
  "key5": "3m4gDs9eCQXFznyKeR2oLVX8xJwr6VfbmzX1jv83DEYUBo7ofZ87mYuYpxdhbN3BLKTxzyZUMvdEsY6Kttzs2r3g",
  "key6": "kKi8Dgtz2pKHq62dn1ZeP3GDXj5NAr8SFGzWmAeGKE9nm6PkGDD6KqBj77qxJzHtK44QKUm9WbX1oTjbtsL1QF1",
  "key7": "2xZtguiiD7yitgsw8jzhzG6gWSbtBn5Z9z8ZCrm4b7ss9DKsDGyUUBzt5tbsRLgaAeooAWa56WPuGzKhkUyZRL6T",
  "key8": "3eeCUGUAa6SrAeGYZkoB5zjaMhHU5Kv7C2xoATjhbk41bSv4A9LvixTTH21d5fqfmPdCnrWFgANhCUcauRV8UWdy",
  "key9": "3rhy34zaWD3HYMcRWQV8rrRBcepCejFwFD6PmrsGtnrYReeRu3zKAFUZcMd7wsFwL6dMBKRhH5tfr7p5NvKxZGyH",
  "key10": "2Bwzw6ByhQrB1dmk3iHnFvcdNfctJ5CJewLG937Ckt12Z3aTUEtaYMpAGxp7u2o3ketBeetc5QQ6U3J6H5Pdm2Mf",
  "key11": "JV1S6pCUshQyrwdat9hr9MypMZsfY9wu4uxyoqbCbwCsyBMCXajauDyy8ecDnNnUcVeN8UqLktLjLoph8TvEuQo",
  "key12": "3b8wwPg7Ba7A2N5TfC1wqbkNiw1A4x13MjmUEtA1DUVwGzgpUMQivo3CSm6UxPk12Tc4TVGf5dhZLNYj6MqVpKt5",
  "key13": "35Et9BAQhrpatFyemTb2uqjiUUEK9B2KpJbGb5gDuV4TKZm62a5zSiMeaFLh4JpMb9FHTEYjUQqR6bmMZ1serTXK",
  "key14": "kfCyjPK5fL2m6fHoyWwzLjiYCBT7zDb1PghMmFtamKPhsFwXv74tiCUPYeMsbtVHc9zV9UA5fdDAJfEU38AnXZb",
  "key15": "5tw3US6ojHAhUNFuP5iYHNVd5BQyRfmQUmWnys4SVMtBmT5QVCt4RF9BsJ8FrU6URUWdpfLD7pzMyaEUpG8rLP3w",
  "key16": "2XHvaL2dNtkZVR69grrYooRb8Ew8D672Ed5KiEVUmk7q2gnmrNj9Yo2uvyiVGLJvdtbAkPBrob4ypA76TNmSX2fE",
  "key17": "Ej1RDJNELFK7XZ4vE5eNUGY9ezEVnUdqAKdr4dXBb5ErB8Rv9J5QyyMbAkaszjPvraDhhh5gUcfH6z3yKPpw3rA",
  "key18": "2gKXrgRMSG2wnwMPTbuzrL8pUq7QHu5TTHV9zgiktnXia6Ln8G4eEvbwrWmJjyEi9PE9PYHzGxPBWboeKkeAGXdk",
  "key19": "4sKGMLdDGy71j5q6N7uTMMVRdjqoygTZ2RiH29v3H1kaBHAQNMNWjLAL165FQthyNTnKHzkhYK9hjvd28gqgeCos",
  "key20": "4E9jSe4A1Zw3Rv5MFfkqDU4yPF4vZKuWUGDi5K7Yp91aUkqJ9zTkfyRBmRpNJbsjQRUvWa678NcjJZDB6LzQyKC5",
  "key21": "3K462m2rzazeH1gCnhZWqU4tTDFDKJsat4oLqn1JD8abuZQD5cjZmntATxYLG7zm9hNz4y2hQ8HQ8B9Qi2VbJdxQ",
  "key22": "2yQzwWkCdw8RMuqweGqhheSxa8Q6vnVgcFKxXUNmEqQcUutW1rVBbpEKqWY57yse1f7qLqb3muLq8A2wVWiY5Nr3",
  "key23": "4q3P14EM1WHs6N1TbBurm8u2gmx1qAHj1QPDQzRuDjNYvwCfjeuJ5Ln3R9o8Hv4cyzdea3S4pncUi5e88omz6oBN",
  "key24": "3cyLge5ZfAhshBKgS98Yu4DSZbqSfBgoMBdQge2FEinDyfCTWHJQpKKfiTwUTuSx9GPSakQsDRFEv4kzaVkhrt7i",
  "key25": "3CpzjPr6k6pA7cZ2WeWNRLkfYJBZgoiDitsKK7z6Adqyg3vmqQna8bJqSeeRPh1yxckJseBQ9gwYwtTnbQxcxxNT",
  "key26": "2RMj3z5ekKsdUKiKnjxxeZ92utNgUuYHnWHPDa645MjXJj5zeN5bETJ4uzVKrU6qjNRA8e7WPAN8wiZE8Zv7KgWS",
  "key27": "3HDD3KKhdQK5GjBAwr8poYTRoQ43fSkhaQ7YjvuwD41B8jymoCP1AAP8TVwe8yzJKaGkKzcBJkCUyVL3PzzpAHNZ",
  "key28": "4wPSgAToJzps5c4F8twmZAQKDd5JxS58QLXk3fP9MQiifL4fHH6QHSAE7r8BS7XLKBvE3nj7wg4HHrtw6w7uWQJQ",
  "key29": "bpSshHvAhx9V1iZNQ5AF9bxU4PtNgvi6CTatHSEQUS3AaJKKjQjDEnvp1mQmRGaC92SRZ29JWr2bScbn88GwSkt",
  "key30": "4XS5v52vJGTwg7NJnxH56B2r7SwBUa2noQcp4WzP8HVbPYYoRVtRJ2pSCAM7VxRgiLyoWdg89SFYKfruggvLioJD",
  "key31": "2mu7tfocm9GVmQ1bB43wYGqjBPeSQCSRj9vkA52dCU1w8tZb8ErwG7GGCucwBBbDdw4bitfYb6M48e4FrkhxyX4W",
  "key32": "pMs68oedb38AHnPc2cA82kAetCZzhmSzdnDLmA7oxvn8pvPzd9fYCXgnHPQUcRqmwT8Z4XXswF3KUi81TKJrX1Q",
  "key33": "Unv7CFoPEg8C21TX3y4zX4LjKFGZn2CEbdwBnDYwd2xFU9CKHP1beisxtLgZ9yRN5c4K7p7KsDWDnVP8eWGxWms",
  "key34": "5dQ8Zt967nCPheMGe9s1JjBGzJ64yG6pYfqi2YzyxnuWXUJEihRBhKyEeKQC1f9sPdDuSiF6JyxET22ynWxkeYTg"
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
