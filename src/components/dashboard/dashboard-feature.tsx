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
    "2FjX9gou1ZbuPN8Pv6NiCEM7tqBM7ZJ8TCLeWD21wcC9dKA8gAHJwU9vkhznntgm1qwZd9gLzpYXArU6keghceeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "283jBmMVrPXmiHZA5jRumJgxiABvx7wv2YuM6g6gQcKULH96XE2t9xXFgyLMSYd48zZov9W4giZqpCGUziyjcDfX",
  "key1": "4C7JGoF4DrhkZoMy9KRYAyHmhKWQXn9qYgfWqpzzK4eQ6SuvcboksegnV5gKWAnxQVxwVUjRzSbzFfzKwYVY6UYq",
  "key2": "4tTitneVCpmbVkKeAJfeWRiDMS8MkAAMQyBB7uzFiEErdXXHS4jp1Qrt4zhbRwXCzQq4UHJhAVCbwcnDm9hWdNvA",
  "key3": "2hWv7EF6hz3WySfP4fmppRyaAyvMyyPnQEH3onn31ZtDfsrvaq8zucxb5M2oRb3fPW9q3pY1M2zbnGjKMPxMvNjE",
  "key4": "2GnFVzLLozEzAcTrfiZwW96n34sYra1vzQkNB8HAvCQEuVzxpiUFJvcBM6qNrLCmZfZJDrGXSTMHTMA6Yc1MPM3p",
  "key5": "2WT6Qn2PnqYPDc3B5znsz7LQv19n1BXKDGTzr6ssNpfdP3p9EaS8mJrT7nAx5rtxJTJwDLCAUkZ83dLgiNJGc3Uz",
  "key6": "t75hgZs8J45Ebi3V3ATkgRqNQnVWNhaPtKK8JF8SykgCbwUhwWAUSh1pJxWZdWsodss8vUzx2RBVM18W4dpoXp1",
  "key7": "3bY8wDKgmvAdtfkwtLfvAPprKWSBkjf3HZD7SVqJFEhKZwTAfNFMBadzW7LSmw6qCqKsG7gzhZdokpoSHsZuRhxY",
  "key8": "44TvAZbJCLtE2rfKAXxPk8A9LwKYjZL91xmSr9PrfSFCmv5w76yXu1ocgrPJ26oQn8k8YrkriB19HT6qYiTyLGwA",
  "key9": "2mU46wRgR55XuHaiknbH4H36ru438Q35Yd8ExLG57B9MmuNWYtXFJ7tMPTMLNQTUYVLLm8M45pDTc9kuuht6UQL9",
  "key10": "55XwgbpGi8ZPSzsLMQB69R4ddnWD28Y5zD8wAzch4DUBpi8tVAvzkp9tqYGv3Y7pyoLfTzaFzYXFJT42sbtbaQ3L",
  "key11": "KNptYoVzXzyPMVEEFDqKiBXEmRAzpLFWcDa7V7xfjhtJ1nHm64UTxgApdo5pnY4jpwA2rEmDF9sQfgTgaCWNJ65",
  "key12": "DiHfNjrYR6fkC7KpAv2ThQKEnfYNwa8GeT5NvsNuDkxYw5CubhX34TCWpzKAPXgQm7BsAco5sK5kXWPFzUdwKvZ",
  "key13": "3fACCbjvpjXCv1mahjM7VS61fejFvNJ3v5e176Y7NP3BRo6Eh6U1fYxkQZydMJLW6hHwbrvy37bb9L8cdVjG9iKi",
  "key14": "62gogPNEV4VZpVtiJyxhbAZbpKAKwa1UycAFzsT2NCPBRmUJ5EroEVdUTf9iwR7PboUjoFvybjVSWy7tPW6nH1eQ",
  "key15": "sFuPYDrANi1qzFPJaXnwf4EdJny1a9PWZkJBkj6nDuEoBW8MsjsaArzXjPruwnsWAPtkbSJXNrj8axBKwSZgycw",
  "key16": "5CZTjhY5FzdxjgFaQ2uL1vcUjbB6vfUhPSCCb8Y3RNSxot1r4zoUz3m54beLSZuv96aUD3RdceWw2yEnTZoaycoM",
  "key17": "5o2wQBP6pgDNWgec8f8rqFEzrcC2fto4po2F9GSFAiLpUXc9gsjX37n7MarN4J3oxtVbkmbJumH29mpfQ5juj9kS",
  "key18": "3x5XmH15b1D72RBPAW2HgqQG3EGdTZjawzNM1PnuMK6CzzAP1Gnm36spTNLRMcrjoHC5vfTHwuiniWexCEyJ2FeV",
  "key19": "3X9N4QLiTXm4jyAkuBAJa1aw7rCvEbWs1FkStaoU3YA4mqXLkAhd9bMajgCjrxtF5sC3aH4UGxELZTV2SrKKRgpj",
  "key20": "5hWNvpLvogBWjxDzaCkpiSLJ31hGXPLTS5sXqfNbcBfdnFWMDtUKgQdRU6irPTibkv1Rc26Ji4AujqeYX2wehvyC",
  "key21": "4HhR8Hd6tWBqN2BQ5EZnr3T2fzn5kRu3iBFkvtRp7p7cwLWHVAiAv5fnxurx3CwixVAv3i3sMvX8wuRfUdstJTgx",
  "key22": "3hRuNit6utN5fEjW4CwQWYV8j53KdFUdAtb1aTrL3wwHMPgzHjH2buWPqWtGLG285RcxvSzHoxJxQzwT2MFLQKJG",
  "key23": "5BaivAYrJ5wWY1b9UZrAFaZixjv8FiWCaTojKZLDhCFc9rrnsLMy1iJvGpWCUVxyqbDFQ3QadyRKTVxPxUVMRAzp",
  "key24": "51jV8AWHF2F9nTs1ajQntLs2T1xFSCC9tehTXSRAxbDaH6E2AvDHP8KHoSpWzHuGWuBpUFoqEvzyMR2mwmSp5yve",
  "key25": "4NYiqDS7ejbMLxufZ3SGE5miz21RTRJ3Kx4Y4PqhtC4XjmFo5QtFsMBf1qzQHiUoFSzpZZmYA6L3hKkUYdwyyDy5",
  "key26": "3QRHhA27XusmoU57po2SHV8mxJ4WjCmej3m49TFqJ7bxPgK7dJZoaePUVcWLSpREtBP1Fe6z9oiyyKwzUHfnPkaM",
  "key27": "SQMhKvX1yKHa7iZXfBGAQ7rfcnDJRUAePzNMLGNWX1FSBkKSRjoFs9nkhqukq7PFDxpDhq9hnxW1KQq7FH1yALo",
  "key28": "35v8aJas8z64d69aQCHDRoT1ugsb3gQHP7Pgo2eAzZ9SYN8D8bD6cDhKX3rVNLhgA15RnGsauGBfhhsDFd6hbrL9",
  "key29": "3xs1mYyXL8VFkwKwfr1eYgY39e51AkVM7RUVU9iCGwsXQtaqyCEUrM5pnHL5BvSZfsnzhpw8ki2fsVvbft6dwTkb",
  "key30": "53iybiXTsFj2kBk6i6cWq45SDgnPAEXEdf5vSV6M2jatJMzzeyH7AMNUxyFAfpYikPDmuzDjiFFwq1BFuDmZexNg",
  "key31": "9wGiC1qKANr65gcGYbjERsniPRsdWUK1NbJXLGzFcsHoahtkYoA1YyLk28YXmViJ6DJFrgEy4PLgVgTsix1NK79",
  "key32": "21BqNcSHogTrEPESshCAmX4Yf2bqeqK4txUdPsMseyASaWzbL1HPLT1VF8AXZtPHUqauB3QQMrJuxopAp8fMqTUF",
  "key33": "AAubhVPNsJqwWPRZPV2bb83eTvn1emBbVWrhrHu6dwbRggeB9k4hwW2HC1G3AmzBaS7BikJRW8vZH2Ca2kWd2MX",
  "key34": "3P3TVWsPBbcSmjq99NS97DFAyikz4e54v4v8ZE4kFA3jmhXM9EwzFKkG15iXcft8Qj9cd9BHLcSh1Trg6eeMno5Z",
  "key35": "322dhbptgoUcgf262ya8Vth3dQHRGih2T3mcETpqo31verVKM2WwNWpVZMRQ9e9nPWaeqzFz9WVLR1tLCqTJHhof",
  "key36": "3XVxdUS37yxH7Mn19Nhxav5tndRNZV61vciC8SJrZ5TgHw8vwQEFbCTn71Szp49mE2XBq7nybePchtvQj9T4K651",
  "key37": "2WmHFAWqaCA9nytVKz26MFyaSqjAWfSfgGyH3AYWzU1PZaHXNsnRSDdMPkeyLpGakCoJGGUatPE2y6EcaDrRrRFg",
  "key38": "5UWz3WBBmiWTjFj5zC87mCdW8FMTgWePMGuwRFhdEgU4sms95b9hbD4VTaSoG2689qTobRW5cUFZ1bMDLroxMCNE",
  "key39": "4kUvUU8Y3BZcu7cM4KgsFgPrzu2Exp5GMvyuzMB2gUjC7cfCdVFV7kZeGmbK1sjhWeEi96JhzQSXBuVqVCmde7hF",
  "key40": "2ZqRjTXrBiKt53WyvmZvKjScxiLyjSwUo8MTPFyLuqLGn5dD9vF5SFA4NZ2pv9v97ChsojbjhLxwcZ9QBhdMzmaX",
  "key41": "2gdNKGL8w4jdVZra1kdXKqZ5dEk1cL2TpKU1jFY8YNHZGzAJd5YQ5Zdsxva7UyrRvh1NZdmXvML9pWWdipJLd7dD",
  "key42": "KtEXxQDgj2GXKsABL1NuaqFmq86V7kEp21UfaTBtQH5vrqt6yh4JZAcDw3a76YJDfWZY9Zg7ZXajFJUm5GStCNK",
  "key43": "2mTDfLM9SV2sNhksrZEiJ8YsHmqFbidbvC5u9QnPoRXaTZ4c8Ygjs9g4SpaG88Lcz74yUc5jPGBF2S92eh3PHPqe",
  "key44": "2G7kUHpkZ6F3CFSk5YuzEJKj7dAJK95Tmd2QrGg5X9QxtP8a5fwxp2aYoPaNj3xgtJu92KNrnhBwNgwvnZvyZi2q",
  "key45": "B9z7PFdL9FVmWqBF2HZ9QMqnkx11xoKHyZMf96kXp4nN9XcLiCcxQzFqNawAG4Vs9vVcKEAVgXtdkQYKXpZ8pvN",
  "key46": "JzJpjTH833iUUcZFFpo2EJvG7q5cEXi1uWweyjX2njajFUAjkQTotCzo5JBWNVfYhUwtFwfiCC3rbhesT9M9a9c",
  "key47": "2x5ZKkybSj1zHN1k2e2i321KMSztihBtM1jKcBVRAjVF6WYVwyg1D8aAMhBUTFx4iWcLGTYkGqfZCssUDC6yVCHb",
  "key48": "nz9svvV3dj7bjWWbBQ8Evn26CBEmDLStra1EsffLXHiJRYJSeXnXnE4ksQ3zPpidAEeAbfg2P8BVHmT5k2oEKam",
  "key49": "5nRDBDv6i9GmYB35FuQHcGVT31yi3qAfJgWapvRqGgaDDQ5HaV39Ey89r3y6bTdr8cKMYmNShzmCTQG77JHfiUSQ"
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
