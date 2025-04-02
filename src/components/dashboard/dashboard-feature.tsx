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
    "3wGJtNbFmNDoRGXiz8DibgaMg6wWiA7wpnsS8U2XnGX2USF828SW73pw4r4ykykpJTaMWEz3JpokUtdk5beqDitq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4awfrxsgtXGwbLxCxLfS4WED4NahEPY54Tsb3ujw28kyxCgX8Akwp7YWvxw8MmbntuEbdFTLTEZMvLQqbcPKbM79",
  "key1": "4A3DkZ72EJfVBQu3bRpoZCJciDgRRvXh8TGmcHSq8fp3DtfzQkkfXqCmujnZJvNUWVKWML9X1FJ23FNBUcBEd6xu",
  "key2": "4NQfpvCseUzPYZ9i8Xg7Z3oZawmjVZNCiDrX8VaUDjVarQVPXtNoDKXhqT9DRR7TnkD5TH7TgHg89uVG1EwH77Fm",
  "key3": "NEid1CnvnMYP9Fxdzrtzx9PBHsRgsue6eFitYD6UYYAbehALZYFdfAkE1QG9PFJn7hhgUfaesfiNGVZPjNaz8SE",
  "key4": "1m1yXUL2w7oCkVWKVTJvmsfTpmBQpJoJsdR7XrCksj8fhRmKzDyJMhpPXaQBssTKo8Gkp7KtCvkYUpyHRF3EHp8",
  "key5": "2yFe6AQt6q5wd5ggDqNhpSLFNdwcxL152zLpGCEzppqMiYh3kX8sXorVUgZmEKNYQ26q329Hi7381qKRCKj4Ty3d",
  "key6": "5ptPwa4viGvbkvZBisGSBQvz5hJn2FEvTkLiyT6iLEBpN4SCvZ4z4zdNZaYMUYgN4SS4xg7MYoRz5N9yf8SXy567",
  "key7": "2ZmrJ3y2y63RN4mPELfNyW1ZTjaWHA68jXP29AXqFEqPwUQ16wDxRjNjrLXzx8xWvV6LUFQeFU9eeA7qQBSG25J5",
  "key8": "voP3rvweS49qGetmY2oKWY7K6TfAE6855Vj7ipvkuGZsw1kquRgRW7j7wjN8TxfR7wm7D8QAEQyWvYwEZ2smCLT",
  "key9": "2c8xSSdbzmpasbakzJjuLEqyQTtJJPSucmRNWgkwLeuTyKKdoX95UMCpcaubRFy5RTgdJ1QWnMK1sUj9Hx1W7xq3",
  "key10": "41wvzErzguSWLqwvAG8WrcBzqgAAvjCo9cd4ndQjxU73eWprchNrwb17fJwPBoiuFJR78RCX4H2q5Hx4NyM9W4rt",
  "key11": "2NGSn1zWaDG2gjwTXsiS8qHQ2sn3SED7MMk3rBjeAa4YMRPcFgz7BffhTjgvGo98hPBXzt4jhz5ShvrLcmJ8HbyD",
  "key12": "3C7omqHovSsvkUknB1VpwVjNr3mdUsPRw3UEhjaWnqf28m2hRUJXKCxfxPDLrHRyoeSUJ5tjKYFT28cnynheHnxm",
  "key13": "3LvCLHsjch8muqKaNV3WEtMX3gkytK3Z7EAip2qfNCibiYDfsMFM4nRA5bs8JUrvdjegArevUPVDT13nUD5ZFqQ9",
  "key14": "3zhqcwdMv8g1pgfJLMa8TCu6sGwc7Q11yRaTZEyzHnNPGU7j7cF7pGP5KALTwvQgAT5KrQ6Xd3AkkpXzcMxQcPq",
  "key15": "29uZ9EvfV24PZ1EncFzjD98bEwTMc1rgbaBpvoEbhQH9dWFnfbBcZbR4koTwzKVppapLEuZNc8sA5nNaKFzb8i5e",
  "key16": "YLT3ecavuf6EBGNMLpVsuq37y7ETBCZCSANBVWurCg63WkEFjdBF2dNwLxaP6wi6R1MQejdQxqPwPJtB3YaVnJ3",
  "key17": "XQ8eugVDx9GvDPEL4jRZdovmydBfaxdpReNbpmeBYvb2JZGZ8gKUYSPPPGj8dQDcV43hSv4WdyWFykb3UdZKZsW",
  "key18": "5MmpMW5WnUUV4oQgnF2hnjDoRJMZcB2BRPC9DWjGvfFTexcjkAfw4tCa9DWgRdyVsyJ337NPj3Y7wArUPh4nWTxM",
  "key19": "5CitNvizD5YwUiCGf7Y3fHCMqRtq4apkTN212SXT8SE1m47BUsqkvc9wWqqgHm8R2TJmfV2Y4gfdbZbGhe6EAKhD",
  "key20": "aoVE87tZrWMj8TVrHTDPanfhjYEnouMjk8gwUMXptkYSxVieH4tdNDG4UDSWJSRkCa3FskXXWeRTPH2MRAnLyvV",
  "key21": "FZAaPsECGwJ7e4eRPSr7Fcqw7hydFNXsULhFTEL7D5G9NMh7QFsKy6Xtz27DA9nsiKWudKvUtr6pgS9PkhnEYfT",
  "key22": "52a9hEBQesNpG3j5sQWGoRkJKxqPkbsMEp1fLe4qmHxhWgGeGExUZC8Vspa9XwwBNT2jbxBnbCotnebGGJy6B8B2",
  "key23": "qtngkNApLuEeoRk9AABTYvUAFkjF1v6Jroe5jCfrB51egdaZDYMzrzQjqgBE9uc3ybFH6rRPVRSwodJyN2wtpaH",
  "key24": "5kxrFBTocw9mdMeGHTz3UnUtyoNJ8fxDqoUGaHWrPnjRJC19ipbjpBX5Qj1gUjaJu379Sh6onE8smSJwiW3VJtGV",
  "key25": "2PLDhiXY8aoF1134b1bzBtPoiXA7rfrY8nKTupzoxNMYhz7ErX2M2vmsn1gpokTR9MvXwP6iK8PBVfvgQxpeJgM9",
  "key26": "59L9ZnbLBpwJtffveD7vcqSQtE3JyQCwN3NYFTpcZZnZ8yaYc7AeEgKx2dvcoGceA5tf85jgHxCbZEJsbUSNJWhE",
  "key27": "4aoDVJ1tEe8LvjKCXjK6vtqaQnQnwSSdSaUX1M9tW1wx9nrPXfVGeMbbhS5yGrYxwwPpJhntyfK5qsvpDXwmd2r9",
  "key28": "YmvSE2SbKHksCYi2Cv6a4ANYUkfn1wZEgKZDxdzC2fpbWUAsyVaagmE8Wo2p4x7DhyJ43CH39xHRocfELRVWsP9",
  "key29": "4o9Q8eifD3Q86rKjAobUQkiHhbpDufP7bPxNpvVCkLcpBwxG1P1VfxUYzDJMSUQBoKhVH7GhFn5DtrWtd3g2AMvT",
  "key30": "54Ym6Pka2Z6PSSFVBr1BNSjzJjXUsqgBQpoBo4QJgqzVQp78rUeznQs5TyHA6xG7LCFFGGNqcRXmd3LUCKzzFBbs",
  "key31": "4pZdpe49gzZH7GkAeK9tD88sPuZtc7hprxg3pC6pRMqQ4V9ineBpRG2UfftePLz1JTC7n2yaULFBsQCFbDr4XuJe",
  "key32": "3xMRWiU61cq4JjcjUs1XjeZccboFsKHqpSgwiePdMDF7oG7CLishAyNkE1MhjNxtR3xqKxrA1pKTJTuALbHVtLW3",
  "key33": "5Ztf1efUv6YuBeb1TxanXp6Yr1UpnaHrbPkBVSBsZacPgWnZzmEJ9r4qMx9D2UGV3emwL3WoAw1JPcS7sEQEEA8D"
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
