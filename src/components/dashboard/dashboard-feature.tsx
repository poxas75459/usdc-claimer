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
    "4txnyqeciDYG4z1EoeRDZY17wHRrXCv2bfdmCSYLRhrUXSo89VMc3QaAfBkoV29e3Bk7XK1KFkaoXYxqGUYyZA91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sK58hRqqKWNp23RSnNVR8trB2CcomNURxvhpJAK5fv8PCZrHUSr7Jrj5F7DMkGA339Ae2msKj6J5tQYu4LAJsGs",
  "key1": "4eRs9rvWR7B4EZT8T84rVJucMkb7jeyb1PsV1Fb5a43cLo327qJMJMA7EeHKvDetwu8gazjQvAUGdsnjd1PwYZnE",
  "key2": "4AFriw5a8FsNUpRrDSckLHRozx1YzBedHUfkmjCMWuZji3TAaFb4YKgrVXy7pXwsWYxDbkAamx45hEaWpC9dTA8x",
  "key3": "3DcSGw3xSWwKwwF4V9nHYdF6oikN6vpKh6NiCews1C5Y2DfLzzuxtNop2PXwPBhxNrvgKbKGoLTGUpouMntfLWFZ",
  "key4": "3hHHY6JZiq29XphBhoRTNqEnh2Qcjcoa4XSkeAsMhaWpW8UZ9PtQRukCqo96JcdQxiHuiZHuwj5t1UXAFvQTJHPT",
  "key5": "37YWLVmMfnxX9Bs787CugSwEDHgDYvm5sHEH8ARvptuGjELNy4h17s7jNp9QaxvJgCyZf2DLkMDGuWT3qKWNGruG",
  "key6": "2awmsNeitX22tuR75YDwThkicfBMm5EbCypccpGUTTr1pjFDmFigqNV8HLiEV4nnYtxMCkFZoZH1mm9TKv6VWuWL",
  "key7": "4Fd7iurukoWPNhYRjCGHhVAPZKjwE2T5QpSLfocLnt3QnLtP589GVnnWcR72qCmprx4u8Jf3VjGZdQRWBpn6xQkS",
  "key8": "433pq8ab6eqLYFWBCbqzCER1HyjCrrc6szXpBrTPM9NrwGiY2rhHhi89N1Hb3WHY6PZuXKieLCQ82HHfyUUHJnsC",
  "key9": "2Y1NruMfzzZ75KP2BD3dBuSQ56e7rej6uuoGzpgPbxQDfQnMWGtbfvevXzgahRMRpaVyMvHRQ7pPAUj3doaPHUo6",
  "key10": "3z8ZxvFNJfVnWr4oNaU65FtKcrt69w7b1tBj3PkDE7zC2R7UCTZ1h6HeCVxsdEJnGZ9cNVMqBVANauUq9AykT6sF",
  "key11": "2eb6NDhunP4gnrGsx2GcieQPBBX1Nk4sJd7cqXfPuhdgqQhoFz12TspDCaruojJKV9iRenhaZ6NaGHa2MRWvC9Zj",
  "key12": "2eGjnGbxwpaS3xLAfsxkVttSzZNrviey4FVrJMPEYCBZfAMWgeUXM7BCskGn84E75MhCPCjyCk65dkim4jryR1zD",
  "key13": "3P2EYMKe4VXaYDxFfo6qFcWu9RnvtGykAuibZk8jKEsPnL3DLC2gQeExE1GJQSSLkPuJYE7MG5v34mffpgMsWth",
  "key14": "3Z3XaBxptLAuQTo5SLde7W8qmrzh7WXxXMTQMTy6MwPGzUY9JHU8C1SEgFvN6NGoqZHeAZrLwgPLris175RfTfhD",
  "key15": "4rD8zDS8urbtq62WLvHng8KvyDwJAyTh2q1vGPx3r2vKj4VH2KDtEeuLzqTZbma2gi5KoFy14fDSmudZF2gJTDKQ",
  "key16": "eWo2D8PmmWJzUsoocd9RREWfjmHeBikKea92W1CvZFK29DZHkC5jJxYeSMFk5SBS6SDJkfLNf8z9mSXmccnuksa",
  "key17": "3aQ1xVpAJpvwk4L63KvkZYskwgxCXtnhG4dBRRvBSpoKNspnXTHSMN6qCqzkq4fQPF1k76MXCjQujYYk82sgggtV",
  "key18": "5L81sTswuSNiBZJiJf4DSdYAhyYjguroEoFwfFqDShC6PCZNP1ejVdoiYiNpTTML4K8Mk9wqnk7H25JqsxE3b9Tm",
  "key19": "43ufUiu5ti5G6mjuSXk9e8knymbM9BMeMEtV1v5u1ATnquMTPkV64bgna2S1rAcoNNwh2dTNUdkjyX92SiN95waY",
  "key20": "4oTaUzMggMTW9Yb2KhcsMdtRaPkRsptCScaqx6cavKqUk6j53JupqppLE7FcAVgTVG2uwMhnQPCtK66uDhWv3Ktw",
  "key21": "22r8YFCFCy3nY3nJo8dC7rFKTXPSUDyhidkv3LjFjJyjSNMixWLeQEfT6yth6nW4mYztubNmZLFXavFDnFiUtmJA",
  "key22": "3q9acyFY3c6qCZaCiBiL8JRa6zzfFs6kEsrVaPPThJrYtWNVLNKUjaczPRr3SHvyqudgcWZsuw8SNSC6pCKZu3jF",
  "key23": "4Xae6Gw5dEQRqt5JaJjxKMVyTJsYGLCJS5PiZePnXrsfJjkhe1karsbf8PDNsgYQzreUFb4yAYThupEH9gEp9fDA",
  "key24": "BF28chQQrzJUdsFqKada2M2DksBGD39JKxdU5Hz7YdKd19TJTiyZ6kLiGck6YyqjTHnnTr6SQW4WsbuDZk39umA",
  "key25": "2rPwyheRr9bDSQKPhSR3AawFdGMHwiTzTmzbMpG6UG9UfGZDiMwndgzPQwhhCErMwUikGLMaxihspNS311oUYfo4",
  "key26": "2JGqAkXtt6NMbtVoM2PUFeuh2fAzhNk5q76BsjRTVVQpTVWXp5qRFmjPSHPNqsrnQxy3iVZEYqK1t9u5Zbf1h8f2",
  "key27": "4e2VuZrgVsDtiDRWnAsMDe7BUoMspEUfoy4uffQdRGVH12QAS1sWn4fPvkmPkjJMMb6n2UdbgrTc3k79BXFGYDhe",
  "key28": "iCDq3BZYgJU6aELkc3xL9VD8EurXD39qjyGq7DAyELbX85gRQgWjpXFYGF5xWzFCNzUXCRaWBottjMKnnDP4nHy",
  "key29": "4pbMBhU14ffLXD7bcMFbU5qQjiUdqB6r8ykhau1ix2nz1C2JBmJJjcTRewvAv9b1Yyf69sf5naFr2sfhQGUtx3kh",
  "key30": "4yrPGcZXcoSuYXTcybG8e5tvA8TPQvYxUcxZkHxQmKuuDAPhMhNvtMHa5VLtRMwDv6uWCF3gn1qkSF9Wef3fHsqp",
  "key31": "4cmCuXbfghQY1sg4zQSRaMQzSqHj19afgURgq86fF9nH9KGAmiP2RfzhYrrDqwLoe7scgrZs5DSmMAGbYzrDZnnJ",
  "key32": "1faCM59A56EZpMHtSnQKPKk3bWeXqr1ZQ4jbEBPG1yNnHFq39FL7r5ddZcrwNCW3MWK7FFd11b9m2Ev6HUBTYMT",
  "key33": "bLtMPQpMSG4ujVXah8tXEDKSEtEF8mUz87JoDjJmFiSJeoNXm5Mbw5rQAcNvcAhmi1wpFxdvrQrc4XxSvTjF5ET",
  "key34": "4NCscLqeygCXa4mwK2j2WquCtCDkuBqL3zZxt9hSXFbKbLDXfZekv9ZgLtnXgYrVFsCYkrYLLL4tXjhdYTTsxPSe",
  "key35": "3aEwqvLNCcPVWowMQhNC4GHPRUwiek8zvGvpM9wTZJoQKHTmAEf9HG9d31WCAAd2zix5ssrWssU4YmqnofFkUgfk",
  "key36": "2QnJrkG1X6TweHdC55oo9wGM23ihbgbwDaCDfp2BAPdFv3wfeQRcTD5mrdEhuiFywJ1SPXZhmsS4BnexWn3xHXSz",
  "key37": "aiA2vGnNTxHC4Butk3XCwCj99DuRyLc2HoJAY1tkHfisJKkwykgpvNsQYz2zVpWM7XGuuC6ijrvzmL6hBLwYACp",
  "key38": "5vPCghaRyMJnV3e39vF7etmqwrSxWzTrvkcJGeX82JNdR7rnhymgZ9DhzBDJ7tz1mAdUgaj1Ce4X5W8ucVJDB8tX",
  "key39": "k7U4AdbcCj7KhfvNbWTokznhGDdjNV9r25ewKX5J4xed38pivnUD66tZb9Pujug89wG1fU1atpsSFxcSz7ZtV4n",
  "key40": "52GqXgCYvkP9zztNutBLQsx5p4x4W87CiVZWsLbmqngnDeqKv36ptiPKx8oySAkirt6bDGF9ZTyWS9cxQnS3zx5i",
  "key41": "4jp2X8gvfWRVPPKxckYyVCiRjYVLN9akTEtwu1iQXb6zdTk85uj9jFz3TysWvPfyDXaQq1KAD6fr7EzunocKVEt3"
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
