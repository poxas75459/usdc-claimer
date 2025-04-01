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
    "4TR2vEHtTVzLQWHtG71kQzLqFEnNoiLkSt21q8Pg1du7UfX53v3Jfnp28931j1C4UkbxpXhDrcZQvtWvJgDsYdzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5urFjq7ay92fGQjD7YKUBoGMSH84PgvnTkKp8ymCpGgEFcRBixbbZTALYyDKm6wp7zsUDFc7K1xGXp9s2fY3UmmF",
  "key1": "23RzZugkA1wiY4azKCtRjTrYs7f8Ajc6jQF6W23KoKBeu6B6Uk8mzRZ8fqBbJrMKptgZNyf267rJJGQCCwa1zpb4",
  "key2": "26ocREUsNx3thA7nQLEwd3S258APEG7ejsarjuwDKtm8sk4LWUKbKArThZi6GvmRsg4yMYmd6VNdcXRckQnPWL2o",
  "key3": "2gsaySyoEXmH6Y5RYxKfZ8vhV2e7dxBXvwkTpS4NP6uJRUrhCJqnTaK2W7QWPfn46sDgnukK4QiywEaTT9pY4yS2",
  "key4": "52Y4wDXe1443myux2LcdNR6v1Eiwde4xxNYkz8CYTvHaS4RSEfdaVQ64YRxHVKT3izUWtYmDawbEUE19YzM2CDNf",
  "key5": "4CZZMs5vQMj2u88fe8tVQmNCth3cN6JadL3GGGBBaAxtDDhb46L6SaKAiNWUBjkve3ZCtPqqrG8oQVsZthVRkeme",
  "key6": "3zS9quXQbLWyrMUAGh7VGSBPwiY2xeFNxDeBq5BKeNiDBVcA5yAZtLPiJUxwF4uMoB9b1J8WnRhcua7SZfFPkoWU",
  "key7": "5AYEWaPZZFotuinbztpRg7XrDDTUk7MzQ91foVqroE5PayVNCLSTjpFNcdk5m4gQMzsRAqC6yLKUNwjCAvk9PWiT",
  "key8": "4nVuXfmodf86iMMQ83cpmSufijCCfUWzZ9TaWGaV8naCX9spPEEyML6DkE89AbiydWcu2uYuKnkowWR1LQ8Xqa2r",
  "key9": "5AL6rn9zaAh1vAziK6hP8jEnL9kRJebr2veBbR12LAZ2k8zGRzgR5y4s17kXNSTJj2C5t3Ug7yVs5jk1qozFfJiL",
  "key10": "3xpRSiCZJU12MGDyRzj83UbADBNwcvr5dgVs1CX7fbBoRaTiLdqq5Eetuvi1xkoxcgdw1uupv9azairVCsBKC1ix",
  "key11": "2hiTUnyPYqx3m7pdhiEHmrjkUEYg8bws33Ub9Z8bJW43UGBJmAp4LyePHGghf9SwKEpr8AowDrPoSWL7sZfG3J46",
  "key12": "azjQA29iE54bDur3VgqM1dYAAwjbXHax5SBurjQK8NiwxcDa3rZVFrCEWU4PuhDwcV15KEgN2VW8V5ERbqQ56YL",
  "key13": "5kcbZfwvBcYyTdCDcBGEy4qbXSMcwKt843jccar9SCZ1oZH3mYvVJ4mNpPSDwpK4ChXtvvr1bZb2yThtSxPebgpZ",
  "key14": "5LJN8nhzHF4ryYhAUdE5gd4WEALyZYjdgU5LpYv1QDvYsR7cJeYxnvbAeKKcdPvNX1Jkro6csMuiFFUCyUrbdBmu",
  "key15": "3iUjUg8Vm8oXEtpgQZdNGtZevXapwAxwJZvBj9J8TD68Huf986vaYG9gGaKQKLhimkeB6B9Vo6oTVDLJGRwaUrbC",
  "key16": "21QFDXpJjoqezUgJ8oVFLhdNg5HKs8NxJPCyykJSn6ZKQda6JoJZbtXRRimxvsEEpJ7mGTnktyXafdnypqkXPB3i",
  "key17": "3Np3LeyuEbfRnW1P7Rf4uu8N7yRD9UtVEQAhUQwMoApRcCJCYgjFderZe6BAK1x8CE7UfoVHNzB9mx4Jyksxq68c",
  "key18": "3FCjVPhA5ARfd8AaKGsyL8nig6KbPhr2z9pWEsdCX4mkaJmNRBQzhwuUznWZ4azjrnSrt4zFzykvnZbwqsydypFd",
  "key19": "5WR69xoqoaohcst7563sGi7otp3LGKnkhUsdaMgUUyyu9dWkd1FWg6WVr8BnbaBmCvKpCfFbQwqX1E9b9vQLhZwM",
  "key20": "5rfGJJ6BnpiZpPn4XGZw9VbHH2hFcVgc2EQw6Y2upWKMdccBWKJDyTv95qgW47Jz8PWrbQkTgpL9XD4Z98BzRboT",
  "key21": "8cAEzVh5MfWHMzEYqRfK3c6e99sR22GroL8jFTWK7HSbuzLtefiuSM94bPRCYk3PboaWk1sHpgVW7Me8Vy6a1Wf",
  "key22": "4FaEacF2CiwakGLUvYHEPexKWGdpu2YdePW1KY5ZPFzuh6iiHn7zTSGu8RXskyU9TUtup8qGRjtfmGjhwS8D1KrL",
  "key23": "57rT1EnoLa6kkXddHEi3k23FcRTcLyyHxUTpQUvLMJ8DcYfLeBFgMz4qMdtw3JZ4VT7z4YLXmsRpgWMZWEpGMSL6",
  "key24": "2iRo7CrJ2zejmFFKgL941QpcHaPayw7hdaSJ4mTTMYkGKZThXJoRqHBNV98MeGiaLFs7k7d6CGd2UPQHSkJjMn5x",
  "key25": "3zkk5zwj3LzF9WJ6qEY6FqfY2T4KUGxuuZ35KP9fPdhQgW5G8dA4FJwHQBVXm6DhirDrKiB3jZW17kg7qgksYv6a",
  "key26": "4QZjbEU8CRTiFgW5b8F4SZGkaKKuzvLdAcCg7tbtfEiYwQyGySs61ySQWCecKfDQHVavwy6G9nx6kyL9GPypE4aS",
  "key27": "31YBfb6zY9aj5k7qAsCaDXCGoci5vxC56qYU2jSjF3wXJcQnhgZugwUQPiT91LvfoqVg2AtxicENFkZ4PfabxrZe",
  "key28": "njwA4wh62MzbyqobBCijoy2o2bFYbrTSSQ7Z8dZ1V8CPYYdB1DwDUokSEqcYFvGJF7xqEzQxJD3cYz6gWpEkY1S",
  "key29": "5CQtSdBtFb2XVEUR2VEDvaXwjFf6wHA6HDuv1LNjpvHajoAVNV7EXJscTMYQFAk7YN6Hx6MSnqbuFxAphF9bmx1Q",
  "key30": "22NZn3k4RX6r3poQRjD9WwRhYHvR9keinJPWjtZS6zSeqwjvh9pE6UcZePDi4E5U8Dpu8NhFpgkK2iyrqzsZsLVh",
  "key31": "23m31cQpM95yXHovGsRt1mCPpinrSN8uJuhgHGJD78MNFYjgwvtH9Vbitp5XeTKB8RRivFkpjRs1tQE721gVZ2BF",
  "key32": "2JbpkjBcEdqMcAkmREbauvtcNd75Nh5saFTn1mPrCsgBahAfWvo34UVeEzjvXsVVWK9u3736s7sydPj6EeydJaN3",
  "key33": "5Ey4H8vcdEkuJzwDj9RuQcSqrZAPsiYibnEXDCScZnHb3yUDxFKyuiWFTKpYRfs3mBC8GazirvLiXp8m3Mt9Tjhe",
  "key34": "3veGXe3vhLd4Grea3L7wZ6mGT9Q1rYCFsiYNYDsqgGr5bweG9Y3jnAAss2abbyPaBXWxvdPNzcXvgFMe9sGcKYih",
  "key35": "25gpeiSRoCtc8AnoBio58cFJjsAQrq75aRbDBwRhThpnmWaeuodgX8RG1FKHU1VYjirWW2yMBJgj1oeYEnzJGaT6",
  "key36": "3DfW1SN8vb4gDCR1erW1AX6zx7cz47eiyvxnVuvSkcYPr4WiHUNUKUmdEzoXoSahaW8syonD6xTtKMzhty6ShUdu",
  "key37": "3dmPafZpmGsjvZehFr3PU6uXZY5oYUjftE9df6vtHcAoTFm56U8pasV8pQ8EhngvB4tA3wr8J9Uah6C5db74bNfx",
  "key38": "1Cmu3KYKzvNFpBqJJ4gJ9XHjwnbJU5HT1UB8jqYyyvEZujNGiQnvbWgHC2fthFb7jeERG5YAaneNpf171ZqGYBd"
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
