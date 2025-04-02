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
    "3zrwQxh6HejWtK6BgkFw1J8jzQX7YtDz59D2ezrXNXS3t6sg7HWLzJTd1L73oSVn7wYhmh61BoUXoaswEHEF8yWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RLBW2DHZrrxdHhKevF3RwLS98c5FG3MV5Ep8u8PkwThyGPY8VcWvriEGExupDPrQWh1iEWYADNovKmBRne2Y1io",
  "key1": "3ihRhRQRCvisJiw2m338fm36a8JzqfBfcNFNjko7PZJWWC8HwpDBHiVftssMBtMZTGe5TEigXDR3DTyg39uztSx8",
  "key2": "3uxgJWSJjPtofaUa9ZBMMimkXqvjUspMKeKcUwYaufFj3oD2BWj2Q5VeYcV1fUXSQWnnGeajtdmYJRRTBek4UvRo",
  "key3": "3jujNJuS8Srfsu4QNWUFwyySUcGLADAPgU2dSttZhTcNvNyvhgRq7DcnJY4uDWA9TqTgGFZr8UuHA3Na2wb8F2Nn",
  "key4": "2fG8sud2gWNvRKVXBCJ3BLzyr7VEmu4wymSHxFjLS2ffEm3FpYyFMuAejkB5unM6tE3VrNZ2HCmLmfLfy6dNGXvc",
  "key5": "5ee5VaJ9LPzzAdhovdSejZfYgP9xPHY3VqhXDrxxZZxQd43ASdSqXjL8VnDLs8NdXydTeknErEwrc6bK5wDu78f5",
  "key6": "3hdnvTGb1wowtP5DfEPLsVdKBCLgKpuS2nrcP8vLZQHkWGx3TgC8Am5PajVSjfEbGpEtv4up64sa2PuyDjs5NVkm",
  "key7": "2NhW3RbfBWXwP2ZRh9WbmdcY8m2tso6cUibQh9sLt5NBUX8SeBqX7R6zYBv4nnNzfLafNVVnCrySirRhCdWGgVxb",
  "key8": "61pygJTH3fMtiDDGdjHPcfFDAzQZoZfo6oZJy4WubC1vs3jP1GQNQmPnUEKQYKofXgeEsWEngzAgLfRhBmjqSvCN",
  "key9": "2dx8e92epmHaALq7xwEHgt5eZXyAmRn5UFDKe7Jso1WYCdaH6nMdF7QZvWEW8fRBYiGWFYJzkZvSQ1urbZMqu34",
  "key10": "FGY5nrKK53wFPgbDZfMSkuNLViXw7zTjAgFYp5bnfDmhWPT8HmBk1YLxQcvaLgVUo26hfCThp1VdpvzAQejeg8W",
  "key11": "UQSHxGgxxj4GiQ3NXdzUGKWV9fCiBfPpMD8XPULk8urAquzLpuWTZKWv8RdKAANp7PU7CgifcacaMtL7uG87x14",
  "key12": "Z6YWMo2JQAUqECtHL3iGDJbN1pXKJ7X3h1XbBb1TE8AiSEbbF6ALNexefv5MHeoAn9joEG7GGLPJAGNyhhhuTNN",
  "key13": "2V7jUP6VvTzQHAcyK629eH2GnxEa7iG5cbwAxKws2hJ6QPcCyS1N6XLjpZepqxE1SN5sE4CvDAjENGLFnq7f8o2o",
  "key14": "pjLZ9DbrB34yjtF334PMxqh6w55nQ2EB8TejdJM1EBqe5DkVAYVAk1sKDmoGKACv78b7os6icJ6VdsJj1x19G7D",
  "key15": "2ForWAc2HPdNUFBxHGpdhqfejp8HHdobFq6hPkvong4ppmgaFDTF9ttYXyx3JAWKBNWeWTbFnEFKiEmBBJHmZa9u",
  "key16": "5M84srgWn8SNbjx3PHmNE2DJjytxH8oi1914GYHBwVncB7dBhBfCfu3UgGCd4hZYS1GmHGnXYzvbstxWrykKE24D",
  "key17": "2P9DQmQYcdL7T71ye4ojooRh5P9opFDsqpgKk25nSSP82d2DGcEreJxX4roAhKgjR3XEStwn3MctKUX3xpyAmHTJ",
  "key18": "2n4zBsyhgMjfFsajJ3JAvmJc5DLDGqSBWrNni6bVewvuaBEvNVSATLMciWJoLeCAzyWWVpioawn6saYauawJhdMg",
  "key19": "3E8HMhWtxd4D2cs2527iq2XmYok1qitxTpd16p6v6nqkEjZenpf2CrBm39jj5LGKTVNtBfdT7gbbtYVwZkxyhV8g",
  "key20": "5aL58PSbySUUX9mAiDdXrQma7gvWosZsrqrBVadLTj3f9HUQrKa2X9MCUBYafNYgXSDBWTqGWXH9QwtowsQgcwLv",
  "key21": "4gKhCdLMxkYq37o7cSTPcpU17ToUuPG8DcuEzbU9g2JjNaYTtvD36WbmRHc2tZy9AEKGCpvVYWTsHZJVGDGVBtWe",
  "key22": "3R84hFJ8Eu2C9j64NT9UXuRQkDcyNbdcQfvN5fpwDCvJUMxzN5VzG5rMfrhXVQj83hpv6rJJaCpfQX9ywxkLWcFv",
  "key23": "5vsocW6NuzuBFHpTNGXkpv3vNoQHHxREZ51YMGy43wbYuqUrAZF97aNwqRsbMeN8DvDVQYtgv545wu84W94tCgEX",
  "key24": "tr6gpTP7pT8qPecCgzXAAUzXhCucxrmMK4jHJ76ygfJC6ubkHZTPnGueGav2SC1ZVo3fefFbr4ZKrrW44R7Etdc",
  "key25": "5cWHRsSz243TnjVvpuVAXgwdaYyG6tdXh4riLznUSZvDMhpyZvo4RfmDSjewmiQZV3GJMQoy5VhdZhsEW96utug7",
  "key26": "2xfs5GJijRqw2fZPjHgJxrz8PQZ7QR8mQEumks44XFUsUwcoxnvdNYEQLTenSG9kqMqAcptSTUsM1UP4umchPLcs",
  "key27": "EoN9tcGqJFSwXz3aKhWdCeMSVQKZNpJ9uLHREwkcdjAYVEtB9JqZuohS1QkjnW84ekYwwDJ3nPrGUuyW1rfqfpS",
  "key28": "5pnRJpQHZdw2yhNw7goRPxRYBL2xAoNa6H35MkBZFk5PL4BvAvfg1LwuQEHEUg4Qh96QknZYXzgR6bk2TQhGJE4h",
  "key29": "45DPVjEts3hC8o67MCTCG6oqbypVRrk1H16ZazfHVETfYJvYGZFHssVCjgCEPBjArYaqC6Ymri9xfPj7NxpiEAUF",
  "key30": "4LnaCSEXPkD6n6JKhL5WP7pMLpaJwHqLDbzLKjxaVcnSnG7tTJnYFz8PSuc2zGPKcqZs2UJHh3Duye9gGwoBz6sd",
  "key31": "2nxvwAKs9eW3V2Jpz7MD4teh9tsuHuWnbhCBRB9JMTrxbHB1gskVCDYTYuvbDJqn9BtvNobZGU5ou4h6XG3S27X3",
  "key32": "wFHdWkuo16iTJ4YvQ9DQRr7katfCESBXBZSK6Ahvj2CJ3trBkjEUac8JpJc16qXwCwKFZe1eHrB5G1mVZFAUT6R",
  "key33": "3qrRHdwUgg4ig8WDJFVxmMDfqrNSBgE5cSQ12GNwro6WJSW4K2YaYEbb4wBJ1ncBanbY1CiWGAgNNg7w7vjt9i1V",
  "key34": "41R8JUXpyb5Ce1uBP4njpSwgFGpDV8VNJ93FjsSjSBtbQKupYqU72Bcahcj1EKaXPkuVUbZrk5EjfCigQfrWm95S",
  "key35": "4KZHRTAHCV9pGfad9tLwE5utugwvqcuQSRNu4Xp5LsaNLHafm9QjSAqgMawuW6zVZdnAERrpbi7vUCRabgvioGB",
  "key36": "3MrdTNZBrnSzP8Cj5X1X4y1qCgEF5WLAec7mx7Bdd8kPnJvBimpeJtKgYwAPxQHH7xXGqpxi5Cpj21WwhHiB4ZhZ",
  "key37": "2LfJaQdf4Mki2tGU1J9NFG68S7MBQNZTwSzZAg424yPccqTsvbjCsww2wh7jeCrjVizyTKGJdywGuy9BwA8Mgnsx",
  "key38": "4wHQKQeQqoaBHxYv8EBYCrZWMHNeKNJLXUjY5BVee1PEMn3XQHo8YaaeGBMX1iNp5hBinEGjGQyCAKUu6SzTcRF9"
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
