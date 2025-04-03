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
    "42kiP7WvMieHviyY3c7JyTR1AbrGjNxoY97dqm1bvVqn2jw7XFJiZ2td4oD3hsfADW2jgsbJ7ez4novhU8dNG8bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tzX1uqtBGTTGeNHoYpYoqCLe82KEPEXPAMrL49y1K9AwgG23FQvvtwgm6ZYEsUryfRxZBg4QjKt6SeBJhwJZ2yx",
  "key1": "3Teyr7W4CayP3krhTqmEsFckThP9s4Msaek1X2tZe2ugiBFttbH2RZ43LFjJzAcTarVkygNvhbfKuwfCDUZsHUo9",
  "key2": "2n8BDgptj4UucVfREjYec7PB5sgr3T3BfQD2cjamNds3iCgXN76gxfQge8Hzwpfs4uUF5aiM1BsFE9EEhgxd2TGJ",
  "key3": "3uzi2hFNJkSiDNApRzCGmwPXC5CYbY3RAQsBgqPA7NSpZTUofNPt2z1p4jq3gSkvKVfQEbeLn215f9YmXtLHQdys",
  "key4": "5dVLLxukjuL2S6Hh3WW4TWkjtbyabt2FuQ7pxpBH2Wi1ZwsQKDWVf3gUiv7j3L2zWYMRvJ8r8VRcAiDKsRP449fg",
  "key5": "3KrBSCVxxJtEgUKrmdPN6LwjuASxct5vEZRGzLyKiDoSSbyQGkrfHQU5PTkR7cszVKdvcnA9ej23z83U6vKPan9s",
  "key6": "568BWJjq2rEhwUUXY1R4PDso9AgHPMDGpB3NXSuETYF1hCvpqKokQ2cUVwEqtvrdKbn6QyBzqZ7RXCcPTSQnCjK1",
  "key7": "5SKxp3u6nSbPfJgLn6qt52yhKPFVXUv6brWLzfEL55Q4P8AF7JvXo1tkZDiELzQNgYpjbXjoiJM2gAcF6rnvG1AU",
  "key8": "44952HmrbyA9Bm1nx2DK8Yjy3cotz2cguZECJRbicVuTGEnodDEZKg2fpwQaEpE2EGW3BafRfe6AhiuFhZMxSjNA",
  "key9": "4a2nuC7cSmTUQrXm4SzA59BbupXPbhVgEBAgzYh2SCKhkjqGWqWeySfjqFmwaq36bYPWnJcbmwmaRuZMnvyTUKcS",
  "key10": "5s533agkqa62aSafushRZwp2gkmDPGPuWaSPUie97EbTRg1Hceo3zD3iPhj3WZRczTPLCwDLet4gPYDj8zZ7oAeu",
  "key11": "AhbKz7qbQQNBF8bWN8UywYUiHZArwkSG9QoonjLBJhbyWcvGgFdxo96Uw4NdBQxhF4Pfg6JqS3vEkBLxxo11QbQ",
  "key12": "3pQPdLM8prUBzzQrf4HCuXNm95RXfVFikziXQUdJAeyyWbjBfyNvTgjTFLKv6QSi9xLkfizaUsemXkr41DYPzsVK",
  "key13": "613Z2GwnBSZtV6HUfL9fe3RP7NvsidthaarMehyqWTERPnL4hp4sRuK4u4Mjr9ghE1V2g7U7fYoSu3sj4GDoUAUf",
  "key14": "2MMPQi8GCSdZzGFLqmzP674QPBbvk5BjSoPBoNpgKfDCbBtkrobzoUaqvM7ansPBJh6sFqLVQ5X2r9ZaovMouHBv",
  "key15": "ThzChzVYrNaWHnJ8JsvGeMqqADf7i9pJUJ9nftZj7fqvvBr3oHjky4gsZPambDjQz1B7wYwfkWY2Q9CBNye1Y6Q",
  "key16": "2jaJnFBhZLAecELyuB2hGAfz5FWEhowu5egTbYaVPZg8nmH1yzucibch331FJrqBEbD6e1yLtsiXFmQGEMKZLPAx",
  "key17": "2aNLpy79AtEhPosMef86zq5jTDfSwBNM3sTJTYTyhLy35t144ze6NGVVbZPKeXJJgE2jGQc6SafFjZG1WcjEUZsa",
  "key18": "5WGyPpKTm9w7Js2ukwTe4jsvTyJUewVDbrqVgS5v6nAK9LnHybKB2pXCX4m7DLEfF6G8ve94UQkt3gBRxgAi6tj4",
  "key19": "2AsURLebbLLhvbckbqW6sRFBjPXmUtDakHmf4LGu3LXHT1oKZQAkxMnafRg4wbYJqNFL73TctTTWvZBwyW92Lb19",
  "key20": "3TFPRBWS9eVYrCCGNfxfFjzug9w7XaoU3EfMNPxaajaJaSTHVYva7N52aFUez67gCNQbz5iZK57WNEtxb6TRimzt",
  "key21": "5vFdK2cQxaS5szy7Q4b5ARfsp8DKU4UbKZskqCScMrpAQBtFrPGMGHz5AkTdJP5q2C4J2b1fi4UaX1oapPGxVfB6",
  "key22": "658Zkig5AD1sgXNGWfFQmkKfeWDxKCcPPdbK6Vk8FS1sVh5VgPPH7uKfMeZP3JseyJK2e5jGDsCJvcDSzYyBkayV",
  "key23": "2yJ6mQ5b5PmArjbynPrAgU9mK7wHpEsoczYbGFw2MkTGKF8kfxU6ZQjgmr9Fsf9QEg3pkYiLEMXJjHLQr9qs63k6",
  "key24": "3mcvEyPFAk2oi7657E5rFt6vt88ksy8ZUN5hv5nH68jJThLz7wKk3FNZoQoiNwDVB5cz1RFgZ8Bh6YSWG2sjTmz2",
  "key25": "2mydtWUGcfmnirNPt4EzDV78Y2eRLxvyuzvvUQ7wX7GqwYmvdd8S8asUhp41hQPnw2h8RJbyfsoZe9Gn9euLbkYd",
  "key26": "3kXRxGgSQBr3TrQAT5Kmwv7Ckar2FpJZuUdh2Fi7YfEYEiPqnRfJJ8jGxKNCAVh1rmAgCxvKq1FCQAmW4CFk1g3b",
  "key27": "49kYJNKY1aQGJiyjpMo9yw2s82d7MgGv6GXnUcdo3tm4wBF3rpP1NM7cbmaAxWEcBH4fJUXbPFyPnsHFZPFcgcWM",
  "key28": "2Uej6CXbT16662k18KwpJnjsAhE5Hdqp7UUcJn2NThKfgSFYqP846qwxJcp4FBEvcMmhRgJASboP8iMJHwd1VjSf",
  "key29": "4iMYAHETPxgevoJH26Zqn6GbNBU7nrMPQEZnXpPkwwTAN3JrNmr9ZbRJomsynSCtiW1Ahj85Km95YVYugqt45Y7s",
  "key30": "UGkZp6PEVFvNVhGmn1vRr4EvzgG1DZ95q5PGhfijbZSdxTno7wpQMZco3uH8H9AwRZm6RKpNKXLQF1oehbyj9pQ",
  "key31": "QQC5AGTpMrBZgnBpfjagAZwKZWivm3fxvEHiFvBoCKZxsLXQ1mjkGrP96yMFpyoskGEmy56ng3UXk77qpq8eb1y",
  "key32": "WvTeuMg1xrzBEfAMdqj1XFbLC2v7gw4Bm9kCa4paL9Gm9xWuo7JaBw5oJre8kPx9d5CPKqe7XRea38dwXTYxbsA",
  "key33": "2gDdkDNJ7hY3Jz14ipvyMFmbAU3U5LRAqh7PEZ6VAxBXEER4zC1hSh1UneMDszPL92ziWiPhckaF8opjC7aAFKPi",
  "key34": "3CZdo1edYnYjzXds9T9KWEyGCvbV3dVuY3PUsM2a8Mt3hUyezK7LsLmVw81mFbw9nMPevY8AtfAkUw4fSba8NrEY",
  "key35": "2aPybQPMwtcKhG8EugzGKZ6dB1Jf5NQoHnUGgAkpkQQntpcTqKuPvtTqKbTvfP3DJbBx6mWkj4rsS3xrV4m285NZ",
  "key36": "4sCX8NNYSSa8npS5At51rKyZRCWFmL6hjbfroVxBQkaLKJduCYT6iuNHutjy8eeeDtRvqjnDYKtGtDg1Kxpc12M2",
  "key37": "5kY8oz7rUDuDMUYScFwSxXn5rRJAdw6yM8nZsm5umspSdTEVNweeL3qQUwehNiSWybzAA7NAEDEG7Be7PqMKVA32",
  "key38": "5AYDCKFbgb4fdGq6H5YkryL4zG5oVsiYyGCctWMY8LhKBLB3Tj6RRBfqHYbDEDGoaFoaCGRcXdDR72xqZNW5R2Gp",
  "key39": "3fmjmHF3MwNCREA3tLWkPpLn8LwL96KLmg7jPvbXPLmqMjceS9Q8dsrYd7BYPebYcgh6yWbunEMZK7RCbvVoL3DM"
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
