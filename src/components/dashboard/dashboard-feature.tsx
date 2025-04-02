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
    "2K6SYCqw9xL19SQ6e9rP8eND6P2VTLE1zsgq8hDXEYg8zfU8PhnScmfphQ4xXqpK3onzZYzzdNF3MfxiVQUcLfSK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ogwEqgbYFTMsjKhTQB52dse4E2oiJYSveoywCLgKhuueEqEewmahpnKAKQYyxfEvUBngqaTWJxiPvwscJHBb9h3",
  "key1": "2snf35MF5QHh845MmSUnNhJZakZW7gG1GJFtmdh1Hy9rhDDjsjBtAFG5hTiAs52H7g7iSsz6a3Ju2mvfVzsa8WU2",
  "key2": "4h3AJXJtdG2E18LqE2oJ72Yt14eAYUYTkVXiqnNycURp5NESUBM97aAvz1v4M1ocgiFoZKQ9hTNpma37pe8Q6bw6",
  "key3": "4J6PGtJEfm4vdUQk2jYH4qtaNeayJfQoKzAqiq6jUVp1hufSZrxKDtTfN9JpTKhJkwiGZyFuw9C6CazgHPwbCorc",
  "key4": "5ziFRh8xLCjcgVfY4bcbFioPivkSw1ojFyoN38hRMzZsfd3wJ4AY8yYzUr7aL7oJzqT3HdMGaaqkJv3n9xnVx4YT",
  "key5": "4EhGotnt3TwJvr9ehwfVQW3K12kjNpvq8uySTP7vT5SNvwWPRBTPJsgmyBGDC2PavCE8Td3kAdR74HAqE1x59NnJ",
  "key6": "4vDc32htvMoVrvLKLSYFbhFc5x7m2n1iX4c4zB3q39nBZmPmaxp16m95oZsNVAfZ8ybqJZmNiggkY2DHWHPwoeEC",
  "key7": "66c2zxf78SmzcYS5gae9ZrsJVgb7BhnHasdhSLUwivXTtK6yvXt6oRUAPrefvfGvnz1dPQEMwY88LxZaUDs2WbsQ",
  "key8": "MwyZysxdPPttBH1VmrXfUJbEZxkcH1LF9Y4mHYdz5AoN5juXm83HVZ81egkb1WdzBoGVX7i8yBc69wWSMDyzJJp",
  "key9": "cB9vuezpsWDfRaoCfa24zfYZ9gRgbrLQSZvhjTUyAVPtpHtrXUAJqK2g9sUMpyzc2vDjgoK1aegrbLuRrQQoGVy",
  "key10": "2oX27kjiCdxmPAYfwAHsWbYaL3fEpMmqrok8YXASepNPqtoCEXBKeZXGYymMWV3pqiD6ej2Z3CgYGop3AQK8efju",
  "key11": "2yV98kZhPwf4CzoFseTgDJgJ2xoVdtTEXGoXRvrDfix5FzyGqwV7pnnmH2W4TGCYvVZSEynjPoBYETMAmyAHSGZA",
  "key12": "2uSoMFRxwXYAwsberVL6H8Uqy6JHmsPw7Us9SGcnPSvdXpESBw5JK9Ch8gt6JBpSBET7c9ZtYZwcPy17Cf51swKy",
  "key13": "3Jo1ccdTkagaXiioXz3PJKDzWBzPaQo8vVwEj4a5EXpYGMDRYtxWEogyw3Kp9YwSDbDaYnSUSk8q7BnmH33MrvT9",
  "key14": "4YUrNadHqZmgXRwZ6bhMZzS2Cztx4WZPbpN13D6XjK3L1TMbPkxeqSMUuYF8hwYJcZbgneYS4hCEH3qgtBLfC1EV",
  "key15": "4FRhSar3isVAPnh4Aux5X8YVqkMXEUijavtbtfdgghYCy1tj8NsqeNhP9x3tmdmm1YXLE54vWf8gZCJMRpdMp946",
  "key16": "5LcXES3TNEVJhTKoAGrTMZPByYkCzLpHMFk5gnapMpGBnSNGMyvFdJ9hmvFpo8xLsSsiyi4ZhTzBDfeWnwzqmtNM",
  "key17": "ovnkh2THNNRooFgdo7bx2PZSVsbSM1zr7b2gwjY3tnPguvnAxZ1ddHraUBjQ2b9LRtXCtQuprxLWJKYrqgXL89S",
  "key18": "28BN9orkhPfWyFzgTD4KNG9Ri8ettwMK6guud7Z76rNb5ozR4JoCkaADusxXvcNQm1ZjdfNKEtKqa6QgEJqd6ujz",
  "key19": "3NK3tqEf9CZvCwBtpsTMnsA989eJ3ndcAfmMishE6YZTxQcJRRHqD2yzBibxS9AMJM7jQJLjEGXefJFJYEUhjgu2",
  "key20": "36NvFhsBwafMUJ1H3Mqtf7TpF3umLywr9jbNtyp1aJjuYc3xzQxniekLe1xMqQzxHKRqag2fdqArgS3GsG4W9gQ6",
  "key21": "5jVWqqBpqdypzUR26a8epAntj3rmmBuAskxNV8hHFLFbjt5HaRV58cW5V2RzRJ6me6zzm3ZqyfvV59V9iota1zhk",
  "key22": "5LUoUypxLHwajG4YiiPG2RTNNub3d516HawEYkui5vPkQybrjHTmqR9kzumpy3i7a812DPxpL5VPrfcYhHy2RCP",
  "key23": "35R8o1YL66zRVVJKQJQVzJHChcyXCPwmR9DarkWMcXfgH2JFKBToGDiA5C5fsghVbAVZhBNmuBvfj6MwPJXR5j7Y",
  "key24": "2BC5yqbKLMA5Zw4RNcVMBcwz98DzFNGrvvh28KNwoaGa5Q9yi4HxKdLv3SyrHG8p3HgmS3MRmh3M2CULfFs7RiQ",
  "key25": "1aiq8AzMNrA3nwhu26U7ujDc4aWSqrAmHdZbJm7zLGVF8vzhTNEyF8MkaVmzHnYgjkENXT9UKqqSLrvhfX6uvHT",
  "key26": "5bRACzeXLzQkMvqhXLnCR9NbZGCzef8cCx4QT69BzVfR1WotQzC6DumfhdRAmtSo6tSdKDj6gGdA6g6BYPCw2qqu",
  "key27": "HvW4cDyRGrnrtDrmrYBnScHrXpEmPToSMjcDPkgAi2uTJwGJ1YNFTB9wHkPGoYzoFPQkaDf4atrevaVMCmrojSe",
  "key28": "5iuUWs3VjNE8UVUSzL39MVcQu5XTsrJAHNQCPoMctkJqFQWmLsub7LNQXm2zRnzfeB7aYqwfrszYgRM1KAFRFB76",
  "key29": "3xFT4BkXLzWEPxu4jTfsHDV852ope9kmvyDLzBHh3LZVo4jQ7KmcRqnfSQ4vga9PhmMMPDVJyNoCvbgqR4mAFqbP",
  "key30": "3tboeaCeasXqndz1SaPyXpjJcLZtXycDDtn5RqCtzD98ur6khpTXUy1nDZMSpYvidCtFMfDappBXSeMNspB39pRS"
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
