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
    "4cpdgAZwJFYRkTXBVZ7ukeLfKHs3ejQ34QBQ4or7Hm57X6MhGBk8ubLPtbwSpk7XUCJ7tJhENkHeYyMa5eE9FwDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38juxGtVJXn9xqzzMa55YXVtQboW54VxKJrTq67gVo1eNikT7CcayakSWN9qqHvFAjNtQ9mEZXdDyZXeH37H5gBQ",
  "key1": "3JRnhC1BS2DVRVQqsBHU67fNpGinGKYLCgT5PK5k2SXxENz7HnRQuY9hkExwDoxCff1ad48EGr5huh2KYxLYw7DN",
  "key2": "5mGTpLGNQPHFSW63wpcRbU9CkF8JBEQZvuHe5rBHwrqjTvUqrom8fPAxesDA8aLFmJERu6VRZqikRy7Xckj4RC9V",
  "key3": "4uMuykMx2o8FXvB46rVnFZ7mYw1ojtxBPKGTc9671UTKQ8Nj54EEWxZqC93iKMp6Jd5TRkpSqGz93ujgHA7RaGAT",
  "key4": "5spdpvGgXLEr8MoudFYpMMgd1Uc7h1kVAQMRVkWrdeUSSGvP8K8FMAtybwCr7oU6izAvBQ5xjQQY1Hyq4ZvhG4B6",
  "key5": "3jUFa7oxKWZk5ttm3nD88vcWzFuitRUL5Bd96TxQM3sWvr5oeXcHSvQ8y2QBJ1M2pE7ZswoBqQ6wUMZdQEykpSeo",
  "key6": "5rNo1AzREKXPgu9jNpaS2Y9E4N3uqwNwy8wmwATwZK9TiW2ux58XHn1FZDXi4m8WzPPMx7owYhKd94o8JqLSVydC",
  "key7": "5oF1x3dgFycRdgNqM1z9nitr8CdQQZULuyU5g7BCGjEKD7FLyd9eebiqBdVRrakhjftAtb9MqY8RgW5aHF5Kukyx",
  "key8": "5hjFAmMK7vk6ahPnhjnNE5uFRRbBc7uQVd6MY2am7cWyPKJcphnS75U8YFvEz6Cupm9D4Y3BvmFoBe1GUQdP9McH",
  "key9": "5vYnfrTEQxZjNqu85P2mrEMdo24zmuwummdsT87DZMBzUqXTAB1cdWojKexCuW1ygsr91uXnGcQW17gDSfxpzCqx",
  "key10": "345yko7BBKUN2hftGQGo5d2Mt9LXgVTQDVN3gVuwEDx4MApPzN6g9ydCjSQu9jNXdZngh9tfV6uziVYUYbbJZXhi",
  "key11": "4Y6c6MUpTsDbVKix2MjGt4NuEncaerb9BLvQqrpBj2vLdB4ww9nRWHkv2Rnuc83qTwiUtfxg6EUGDakxoMCCZVj6",
  "key12": "3yb6vHmi9xefrKWBPyAPT2BN8crq4RGfe6voJQsfe77rcEvsVsf3eWdYt2qFRJPaU9sxdQ9TYbMRhFf2NfzxFmxL",
  "key13": "2AUBm3sT9DAhMZgi5TBVFx24fsZcEwbAuEFgTE1nBWV2oNoVTuZZeztgCmqUNGPAhmkyC3bezcsQVsbSWqURvJkz",
  "key14": "4fCKmAf7s9mpeBqwsrZxMXpdVvfUTwrfJeQNHyeViTTYFTeDd2G9twAQbSCiXB6GZT19VJaCtkqFzwe5eQsmxJyo",
  "key15": "37tMcvBCy7tyXS8YECc5HA5CyEzPiWXQ2HHY4VyUikGj4jwxKuxrzFK6hyqS5VjPVr5niHsUAFHUCoHfpN69WPDv",
  "key16": "37NwdtV4Z1W1NuX8Z3SxMesbNFTD2J8niv2F5A3NP2AZPGJc5ZpZ5VN1Cgnu5WEHRSrPDLxwT3v1U7mb8zANsSiN",
  "key17": "27Ya5zQ1QWCYkxT96Ep3BwNNmR3ifby512jdXoobBBmsb3s4jeJs61nhG6WpJCG1PX1WaLDDJkpikPUuEUeprkpZ",
  "key18": "4EsHs2kPfGy9nd9PePPsYLMQi6S5GqC6SXWim5SmmYNcwvJGyqUxuv9TaSnujQYYh2KnFXRjPDjx5caqnPQHXnCh",
  "key19": "5sKFMkUBCNfVPgxDSnjWrsep6cvXo1cDwMvwFtePuy9VNNw7W3gz69Aqn6B26Ma9KoAvNpJjxY6npVs6rCBGNqGM",
  "key20": "U7CToQnPr4EHu6rpXXZ7bnu7Afyr8zPcpm4Qk2SjidSEsEJ7vAxKqt9ofzHzdtATsFFy5gJps6sYsBKJMNXuaSj",
  "key21": "2uu4Kgyf9AbosbCJdMnMhhR18HVqXQBCugvCnQHnfVzbiJmG5m7UchdzQcSqUeQ1UrMQkw45Fuwg5Tvonbq6tM9E",
  "key22": "3LNufB1Mp6wnLAeHEqtfFFEYqdFvRK8m4KW6QKVb2MWtNYNaBKQWU8e437W2dLyahJDi7VpicLSZnJnK1y5x8YMo",
  "key23": "2bey41eJrvX2ownbHkpVBy88QDUBRbAiW7fdmZ67YfD3BVNd2M4oCSSFM9KToQqB1f4LiFmufMtfXw8fiXPxMJLu",
  "key24": "3SHN8W1XxTyJdsJdCLHpitL88b8MNE1UAUtJfkmJ1TtQfkNSN5bLxsVim1SBKYrKQwte4ADtKVTD1e3gDH5xG99x",
  "key25": "cR6fqNUjHarB3pXeJGwUqzNzmxUzFfY2wZmbPBYAZLnPrLKm1EiDpu3zorA8YeYLxcuBsEtNKpxBZvPEe5Cg5j1",
  "key26": "4KF5nA4X6MF4gWb8ag4XjbXnbCcCUE8oYJpduywWDkmHi4nv5JpsdjmMHfwRnH6zyiFKDa4QkUfXr9fiirbCD8hR",
  "key27": "5YcD4fE1Tw4JNWH9YnmPStjLFMAPJjF2q9zNu9dyXw4YVm5dyzu7V1YPRJ4Z4MNjM1mfJMoW2rWWgnK6TLud6o43",
  "key28": "3rXhQeBvjJr1dEyGNypc7qZ8ZMV6FqjodC5ihJHGcX7ZKrYLGbBPXTZdedr7tugzSQu5NMK4Ue7GHU7gycf9SP8A",
  "key29": "2VweNU4xPeUJXpysPCeQgBCp7FxsaFjx3eESaUecwMrN9TZzQwK1j8up5T7uxkPLGNqa3VKorWthtLm61bQNR2Bx",
  "key30": "2yjhxL3rzmZimQxYqhudZk91bJaRNe1rCUAhPgpKPRDPzYAtjyRae5oXzJnH2RFcjCU7wC641nzkaW3CTrhZv6jD",
  "key31": "38B9XRzYYoEwXsgAF3Bia7UZRgoFH5ac6nkmhh7uwTU5Rm7D82pu84CtYTXDB1dXwoKYTq1awJmUL1e3bY7K49pH",
  "key32": "L1KxixBVGQzqPEMwwCEs8AQPKt9AkJ6ZUuCyAT4MC9ZsJSSpbSRNRgBxH5YG8HoV5i3yz8BoJ8Tccx8tzEPLQ17"
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
