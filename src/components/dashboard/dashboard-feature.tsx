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
    "5A6VAi4gARKTVJ933sTEsUsNiU1vnp8b3WDBpwzH6Fne7X7btEUZiz46am6E8QTz34V35GG5ZaTrW6WUK5QQx9i7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyoMVCTkFCsiN9DH6pwk5vi3tdXk5BnezHuuBDh7sRRG7KpxSEKNyWSmyYNcBnvtg9pkzCPTbfuRF4JRSxKi97p",
  "key1": "3oFcvRvU1X3usMHTmndCGpY1KGhw9DpYnW9qxuZj6kSormtJ6ZKvp45Dnb8YDZ3ERN2nkmC61j33eWchUfwgiJTU",
  "key2": "2LHvNvu12qEAYxnG6S5SSBj3PnG4Nxcd9P6ExX1Ghut3qAgzxbwN1KYSehvwmns3zJw6oUmygLCSMsSJAVf4gHLM",
  "key3": "4b2gNNXc2ETAEzkJhnL7wJdP5zKZHVwUmYizLPmx7hTfGaU5HtqmVTguxn3nMrheVXDPMcgSQ2NWNHkSni5wz3SR",
  "key4": "36zLBpfZNn7CyN2PtvtRRPCyYmx9fspqNRRg1sCPsVQuk4Rfxqu2V5x3cAXNyiYPbCUPHjdB7NZTYdiqArBoVYhD",
  "key5": "555kTRtovNabBoQyRUJbPwSpiQHx5vTSy8eaaNEWKs2Fb5jUQtMVpnYMjx5nByftKaiNEVMyViLoCEQvgGLxvZe4",
  "key6": "84PHtUq3F4RUUMaQnFDDJwAfgYdqxppJRPJSUwM6Ce64HH9oKR5Hqqsp1UZMJPNQ8iww1YfKUycw5zKFDurdK1k",
  "key7": "5SuL66zjRYsYxu6v9FttWq6yTkdkiNxrsi7RbzRNyFimPD5oKj8oo8tK233iBnzW2xHwu5PegEDVyxENLWCnkpiF",
  "key8": "V89ygkhyFDYaGWk9jnvzxPHMcByQAxk1tCPq8FvFZ3xQnzM2QtdL3NFyNvWHkLfu9HeQ8ASg8ELQHcQJrGZDrSA",
  "key9": "JPN4gmeBVuEYNGPWdtJPn56QRWGxD2WJF3UhrQTJAHW9arZ1DpgxfL1EwgWn15LiA46ZxXSGtnsMb5B8Ap6TzUn",
  "key10": "3JtrsatoRLpJRWevffmg87ebS49XJe9fbHLPK2oy8wdzimCwcf8Q8mtZA2hSgfTNrNNhG63nVkDqkdfWKA9bqT13",
  "key11": "3eZ1W5reprDdWwvq6F6G8jSAKYtRjhr6YqYuR6YATRijsw4H2xdbYPqP1EfH6eqwwx1wcnCoJTBfBX49iX7h6kHd",
  "key12": "5idKK5iqbizE37dzvkFJGBPRWrBdizYwNNnWtCpoEPDbBRwvvU3ecweNArHLhkQewh4ijS7aAwmNViwtVZ8vkpMm",
  "key13": "3LP7PsT6b5M7yNuoH17yEo2GmWJLsdbM6bt8TbRzjrttcdSc8LGKQYq5azGuXaSsotVXKkPXfKaGRm3AYVpMKqtB",
  "key14": "KiR4yDfssPgGWmSJBsx9ze74M9j26Lij71phmKZimkRXdaXbBYxrqdKpQRE46VyKTzLEwoHgx46X1hohWpftDhk",
  "key15": "3DbAUiwDKYgyRY4K1LitAvYCo5y4y9gfeqTknkc46WzDjwMYXQRtrBEsjbYMGgZ7KWtNARPSEGJgVQ2xKagiJwLi",
  "key16": "KpUpUY29uwJozBQ7aLZ9xJqBvm4JdbTHNi1s8xgy1aR1RPe4uy1uxufRfJyKy63rcabGp86hgEWeodJu3fe7BFx",
  "key17": "2oHXZMMnKJSZwjfuQdZQMqvy7muwStvs4b6k6wndMa4Qyo2DoYCumTFKL1YRAf5JC5GkQjwMEDRvCmGQ8cjqSZin",
  "key18": "4VdJNK13HvFbEgLPDMyuNU1vFUHAj6rSxSRnJQJHzqtC2Sboq6PLkB8ymcvnhxJGxsjfHHH6yQgdLAPQgbwBHErt",
  "key19": "JtVkAKWnxDesjYhbGnyKRmvnqCYSH1corKU5ED8ZL3PV5213Hd6y48hzbMY19zUzKm1xzXeuQGB9Frt7Ysc7uUn",
  "key20": "VzRFjm9mBsVn1oS2Q1hc3mygdpcHcqcUmM3at7ef8Ju6secJ7EwJRZhbQcP6Wg2cqw9famkmUn5jECrUUyWEM4d",
  "key21": "ioSwbZKx8K7nPUyzdvqMd7YA6Nw7YSvrn97gR7g4MdXJG1TmwvVR8YdsauxSGi2HKzsnXqhHL5UW8wBRoVqDEXY",
  "key22": "cDVRYvagyePHBP5pYQm6HcNMtKNfh5X3hMAW6dipNrfV8rwXinNrvnv4amv3HFt8e253QWkQsJD1AK5pzyBHnJL",
  "key23": "2fomWEuWuCxGj2dQzXATesgHT7me5aporhFgPhTcF66FuKSE3PUTg82M5MDFXzDU1odQiKv74tjXqtiAUbmYfRXr",
  "key24": "4EyR6NNQtuq66y8fCShcspvHbhm5xdDDBtVYmtFaT332aNrTZiKXHidT6enxCxmGyuCzSA7WC9AYq9x1dVrqRYQS",
  "key25": "2FpzNHGjL6fFzG7WdEwvQne955cFiod8X5K9vh7QQZpaXX1jjG1XvRPvE4PbFHBJ3dQXg1BKHb7c2u1bexGwV4M",
  "key26": "3B3oikCq9HfBn5SxJaveNbzEUG6THxvUv3EPRdfV9XPQ5xuCACjm6oQgm4YTwuF2RaE6EY61YmQdpnGZhf4P84Ex",
  "key27": "4Y2uMy1h2vrypStaPpaoVpii2f1Avtx4JmEG9rZYsRo53jiyhvrc4CbAUqk1yDWFkr8Af9Sh2t5Xx3j5Ly87sAyY",
  "key28": "5NMPoSEhedQ5VvdeThGWKftACQqQBXs9ryWcnVCkhMmxRZHfb9xKv2eNQXDJrhXE6JhU3wkwpuA2Z8SRCrgzWvbr",
  "key29": "2ewYWrhwoWiPMZyAbKduPzhEHyHkmdB5aMK5Pmk4xC5yMag83Fo2sknbdSThM4jPHkY66M7k92RMqf7J2VK7xQTg",
  "key30": "uLqSrXQveE8JRje6rNqtvdUewMJoGZY6dFpV45UXjaooUX19HKugNhCeQcsoepXFGA82Aq3N37Tv3YxysGdNERo",
  "key31": "t4RcmQHMcEAYzHHa9RHNv3MBNbEk84cPdgCjwWw8YzoH4xrh67KkhL2JMA1CZDKPW2TyBuP6dvEbXBwbjZY7rBq",
  "key32": "3zjZU3ZRDC71PAYSJvCqqcjL2PqEJwLaTLaGjVMmamYNpt5FSwLs5vEDSJT5CfHj8zxnwt9SctXvQ48nqN8PqNzg",
  "key33": "PEKBnbbqTBg5vQSjcGu6JkQ6SDe21RrMX9U9hc2xkMDWuq5QRHb9SMa3eUh7mr45wxyVv16nk7Tff7WEg8y2pRS",
  "key34": "D2t12DzWkocJvb1cXq7nzz5KiYvskBE8MRwnPB7XoFXChM5qso7gVHE8KSXduhZBh6s6PyCBzWjGsmvCJLrQsZM",
  "key35": "4w8BEpBmTMyR2fakyTknnxDnmgbe5Zu3oXgzVWqajiDUrWSbpfHn2quj5Skby9SGJrbJSwCauNNNSXmfub7iD2kG",
  "key36": "2g2dFT6rNAsvPmWsGfVoMpPcNXzCr1ZHzg6HSyThNXXhr7CP35icy57LwC5WQfWEjihz4jhH5V7vz5HBpxwtjfr8",
  "key37": "37rAnTtYEF7FcVouvQbYMZJM8zhtsfYMwDiBrNvf9tBJ8TucXXsfd2z4dtNhQ6VcL5RJyeLZAga5w9yJaEsS7LZk",
  "key38": "SVsJcAE85GsyRL6eupYMfrzxBZmfYiGjjRGxw6ioaGtWAo5KExqSckHMVNCxrejya1sGTPmvUkEe1zBQUP6KaXV",
  "key39": "44kPJNCqBY7kgp4oetzzmNuh1JLkiNs9GAUEBTbWmvmiJ2ZFbEZfR3yyYkkVjyHui3e7z8b24PRUuij4acSgMXGW",
  "key40": "3q6wrZvjX8sysJQu9uSiRaj7FW1RGVekcEpWxvwMpmkyA9zsdtwbdN6LkREDPYnTgu2vXonLQEDoFn2RsY7tLMU8",
  "key41": "5QToN3uncr1N5EWLnJTQcjXHJGzY29qZJjVcGeCanTKfuHzGLHTgQiPVny1aPUThXUfo5HjJxiGPEfnjukytsLkb",
  "key42": "4oCEWStJsgSa7pXVezHtD8dfLvnPa9bhFyHKvqfA35SW8PFBCNK4RSwnaug3J9FuAMv6FwdMFZfxjH8vzyZGRhta",
  "key43": "39oK7FZNEA1H8JP3kQe7QAtcc8Vm58xgbRy8FjVUHRuC5YF93AGKT3cTF9vPAdcxcPnw2QFMy846tKPWWFKr96C"
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
