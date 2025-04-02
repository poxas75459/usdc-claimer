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
    "CU4nBtkxqahwkGNdoFausxPPYpS4hUKR1eeTV2gXjYrBoFS32fuJ8jP534BGtyM6HXtQS69QdimwitrZyPZEka8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22DPCqp7nx7KAuTpdR8qdQkxsRLmPwMqmqiY6wu4hwbPkRV82wJ2mBA2qFYn3nSS7QCSWU4R8DmEZjCEN7Nn5fEW",
  "key1": "5cdZHnE88mx85peDK7TE4fsfWBzrqWJs8iz8Po85yJftUEsoiQWbi48L8HbEnUCHWfqgMFtLkFZxGRNiuqhpD1Px",
  "key2": "V98XVaTFNdLmR8TK5SKau1gVajHH1WiEBxPzSwqpikyK84BmN15WZyKN9cfYSwiKAMZfeNuR2JDAGdEfNXQBZs5",
  "key3": "3uGHcjjcYb8wAC6sDNEe1yYjBvEujPVzzkuzptavU6SHeFyTNoewqPTx33AMuipvA97NUDUuEgM4aURdAQhXPe46",
  "key4": "QgJ3KN8QwBfQ1XDsRP3RXNn4MBVgCK9MYNe8uCjCcbPm9xUKG1RRahzRfSW2BLcFbBDJkq4PqHjeKPTEp7hMnBB",
  "key5": "5c1XzxgZUfnxhcNKy7gaMvYJhSamkVnb6xcWkyQJbdG792sFvza2T47Y3eATcLCn8BprYh8XWkkFNfEdiHGKsPdD",
  "key6": "2upDuhwBqYXLX1mrcaJPNZfDcTyTNYM9Q1338wzGpPRPN26G8ug6zdor4mp4VvKtVhiXvMEaBEvTy6spo7vXnQuS",
  "key7": "2ySu4qsrXET1eEtYTbGQkMRk4u1TKF116ia75P3iV6mzwMJuoMB2bdkfoB1SPNWTXxamWxu2jXxfaks4rvcpFyQy",
  "key8": "37LC92y7avEEyivbbzrhhqBqx5BJ9rZyQ4pWoXCKW5jQGu6Se3VNR4SUtFy8Bt2NM7kYT8ePeDe8jsCRCzqdY9Ms",
  "key9": "uh8uKkuEPffhrf4vJfssCW1GSuY32KFMPxY7T99cbemyqcj29syVxJHyAYEN3BSpCjvyh5oDwQfNpujsyH7WYmf",
  "key10": "2P8Ewej48QwFW7EjkpwYohW9b2hS9uv9ivDGncM4pxj4HpjX9p33jWyL5Nyt2AdmhJogpFr3aiieJFXBe3pJmS2h",
  "key11": "2hpa5BrBFPd7zDCBcUkeo1hRax62r1tiSJj3wgT1n3oK1UCmf8EN6xrusu728um2eAfMd2KWAyamQ8aKLJmr4Z3Z",
  "key12": "4crcdhzMN5MuJUnAibnMrXbAKiX64rLG6JkMQHRuUQfHtqGMBRHavxne1atb7QA8o7iSBuJhX4P1TCbi9ZG8rDkc",
  "key13": "63d7Ti5jGgW9iQsW744Sx3iTfMWj9dqfpZ9ifizuQVUuzkP8fKht891Va5gN271R8EEfAqLcsxx6TBuaH1ztLt27",
  "key14": "4MSKCR9UN1xzfv7LDb8gBsULdVmcnvxV1ZeBYKZEijet7D1aCVdE5EhnfJETp7DMTkNi8aF97RD5s66txgXj1AUa",
  "key15": "2aUm7g38to5vfhh8MAZPWuKPfMEWN3Vi1vZobqrnfkx5NvEPazaciRd9ngprH69SeJsUskbQoktwgJcNnwZc7aGw",
  "key16": "57LJaJ4Znhzgm4pa8jH9xG3oFeu57RsVGwfx9zv6fLER22dAXtxfMFo5uRjQQXAojzAmNHJAnRrRJdv8YiCAqC1y",
  "key17": "35Uw9azeCJSo7V3NTQua9ec14m6JF2ns6PSg2YRjQ83zJZCZh7tNys92JeGTvkB3ZdT7iZXcK3tnac8M2C8chgn5",
  "key18": "7SznKzRDpjNrfjZ9wHuusWFDgWPVcJr6SySpRQPKziSBH6YLbzqF1Qb4Wd6G2fHL1VyMHL2YC6Xrw6u6CjM5FRE",
  "key19": "4LTtoQ3DmHWxaz65GSaUD4nbPhZB5wrkwsbkgS9BusFEfSGAt2SreMZYYG2f8tZLkviaY4s646tTQCPSZHzRQEZ3",
  "key20": "ErJj3btKdBLLGhL3iJSsHaXouFsirpMKJhxzeicUQ9YV5AVXqwPudTMWxryLw4k2ZH1d6p1fDYMYCY85JJnkxMT",
  "key21": "2M6cVtjsJb29kcRFSR4aELopSamLNCXqoeV253pNkQYGJaTxcf9Qa3veBWEr9V1htHYbXu6Svg1TXvrvuSS6Pk3n",
  "key22": "4PwTeDXou6kw1ioT8zETeUMBNfjrTSgfjseJ7Y64KKYEWPp8v8MpFwKJRZapKc16nLHnw9GaAYyek6nRoEhKdcQk",
  "key23": "5MFg88z7VRA4NWhMzyCxSPHb1QfiPgZvhZk31oZu1hY8LJqsptueRg9SHHCPvyyFkE5YMR5ppFevMUxrmhPogs9i",
  "key24": "BvPKj25kaL3FDsEgejk5vPGGoLSCE6Kg4WTHCTdeuMFkPmn4uMtHLmQzarX9dKezMBKMc9SmraSqzaq5Bu9PHz4",
  "key25": "38MNHwqv6Epzjdx8JPRvcQ6Nn3jxgtVYjHew2rmp2Fbke36VjXgSqiCXZdEB2FedtHQ3YqPYhHCHe7a3oSwQmihv",
  "key26": "4pEh6BYs1iGo3eeQeZfKq864MD9RbBLe4wfUdhRTcikqpTWVVqyPyDAPQ8gRMg9Js9fks9bvShms6uLBFrPewdMb",
  "key27": "3SLCve2xmu2HnAvFFp4nwaeaKxmNQwftsu721tHMqp5wVyT6S7mJAsps91u7MqU7K3KGQFLTKfves4aMnqXJzMsY",
  "key28": "2NxkrE9iYAEwrmCk71xQHJB2TZztsD4ocsoWH3EV8K37yz7Qe7iKK2JEDSHCkwDxJ6CVKKUMQCsaXnV7t5nwc8DR",
  "key29": "2P4Vo18eivuBZLLLZbV7uXpuMGFhRgfNiCbYLPF9RWmmFZLBKTkfsGdMU8zu1aY5dCnr5xxQBDKa3cWaAw23YKpt",
  "key30": "4BjnoQHZeoAd3AV67Lo58X4pWdsZtzMVrfterhn8HrYnWLNbYuRRPHvp7wrmEmWxenJF7G59GYtD3B7mbp6KQXtR",
  "key31": "4jHBTNkGSVTUSWdRx1N4jGRCNyPZc7khRSGRH44dNnMp2QoiMUX7wz3nLGSRfHyUqnfUahBCddXoKvt2BGpMoCrT",
  "key32": "MEHLpGva1tmNu6EtUCdxPpf4xQQr3Snm7zwaT6CvivMu7eAkhXuaM4bnqCj7DFwkaJY91GPNtYcK6vTjKqBYkGK",
  "key33": "3nDc7rNdLg9DJQ5URsNwA3Xdmjg5DAPveE19MoL6bqcLxKoVXdXq3Qy3rUrNahmVD2WR2LNKhsqnqnwfTKcEk9Dm",
  "key34": "3akDYNDpzbuN8UzUF5iJwBsqa97BykzvTgML2edLVYMe5i4MnRyqBHS8QyWpsktTrfB95uYbgRyMoGjMA8ugnbxq",
  "key35": "4Sjc6QWX9bGx34ByuANNeRnnBaQs9x2iCNrqked6Ys7bgji6SeiuzVTBTR86K7R8xgiGUmwpwwg6hByDZd67FQaA",
  "key36": "3dpPgzAdp6NzKJCRkY2C5yQnzpMzGw8a3XRjZEdHTfkmiCHNJL5UvnNQKa1QeUoRWWvZcBBTW3DsZCdP1aaM1xvu"
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
