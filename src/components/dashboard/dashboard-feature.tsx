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
    "24RhDTi74VcKLkJfAAdfP2366CnnHTASxRcbnuPNXRvA9GWUYX5XWpNvCuDiMfMEGuvUy7XHhnoUs5nBHbyar9gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jcpTkVuySysKiAmJAHoyLu5vXd9WzB74E6i4hFxEQQbnMTkwLJ6zdXVVibXtPkeXsuuJ1xgofxLmvM8r36yid8w",
  "key1": "64sZqeZP57EyFEGxjX5KjbhmH5uKaS9XrBWiVSDSdArd5HbLPWEaYRwCqF75kWnKHEVB3hp9rb9Jr46D8WQVpNxj",
  "key2": "fzBvd4YWXWDd7FWF2paUZX6K57YdPRD9y1M31s39CwYvVT2iprGLyjMTXc8FaCH3KzCdNxUn3hVkuqu3irj6hoT",
  "key3": "QCMVhXTaf4NFbrWYJfNaAzcxViPL5zbekX15Arc2UYxLkEVCWHQNeTj5fDkLcLmQper5b6ggfdwNdYfSf1FTbgP",
  "key4": "5dXLDPX5xbqGqwe8hKW3nJkbnHU2THK7MPPXCYLkGXUPhokFGAiNJ2MnkUUq8bRVmHWQwCUmmD2Udgvg8gf6hyug",
  "key5": "5JWcoEarEeFofpm61NxrhnRePZYqes9UMucT7ogqNfQeDPKk6RFJPzFZn8pmrYGQbvxcwcYVAyhdviqhSBZFXtfa",
  "key6": "4W4t6CUjaPwDyRMdUqV5YrbJkaaTPCkT5rtjEfP9iTm2Eozg47vTZQfvHypNkKLZvnEXdTTdcdQcgzcCk3oAgv11",
  "key7": "2FtijVG8n5S7LuFhzCDDMgYmpiDMuoHYp4omFCnDw8sdBqP4acK7zjD8KNvREkBVyDBcNzvRMoYjw5dCMpKXdfN1",
  "key8": "4HEE6SH2G6EkDpWioBoWTY9GiRLi6Fu6LMAFray6AsSNLRbDWFkViuu7JrWyDnWoTmP5xU3U6p6gv6kowKYhZto8",
  "key9": "5ToPbZE1TNMaju7XFjpE22AaW7rBnoYGDDgffCEzMXvrbqUsMvWS1xELwziyAFNbR8R3BWMTb5VA1juwSqu9sp1t",
  "key10": "emeDAfTtRzjHcNz34c4Sg2C6hQK9PypSuzvhSvUMWMZ6pQikfqqAx9tU2RLS5ccdW5fifuCxfvxBdHacoGKpcu4",
  "key11": "3uk448WNWio5ku2fQbMr9aic9MqxjL2ue2jGf9yBkV5J4AAvQ5EnbxZ4n361zpts7ETbHttgs9D5MKbA9ipAdSbr",
  "key12": "3MrGz6xmeFEtJLd7STMRknmYDiDt6wTvFBVApJFSKT4KuZJTGreaXPEJ28RS8Wkh9F2KFwkkJDsFjDcfBPySQ4M3",
  "key13": "2YYbZCPtuscxm35G7FRewGaNG8derJQukreFARujprNptW6Supno8eQ4mRgYR9JaYff4bQ7DiZcbzduo7CSUsr7L",
  "key14": "62tzdubZb8vGCeWCbn7dwrvsEUQc93cVUgCMnj1sfgkWu2JesnoYXwajKFXFXg9AHmnKqDqhWQ7fnzmpJZi3Lb92",
  "key15": "5GLJCXA8PNSAB81NKLqCiumDSYwvzxNuBmVxgLSESr4qxQEpQmCMHgie75fxUS3j429eSVPy9RDkiij7es63ayR4",
  "key16": "2oWuP5bM4RAgRHQzqhyRtWTe3NW1rWNfBs9vf7NaZKY8ARvPaWxknpTanFF9siyLyBDcpyQPwEfawERVJ4emqEK5",
  "key17": "62zAsE1UEvHuVYQyYQh49WBf39hGq8a2sksEW7FLq9NJTuJeerAFdjDaVRrwUYJzDBRHmyixEmWxJAZgMGN1h1kW",
  "key18": "DE3cNGHe6SwZRo8GtX9934oDCzd3dSXQM7TgokUQeB1iaxkhfvwdRVA8GpPEhddnwE2q3TsWEbRB7HU5MEtDYqF",
  "key19": "4wQKsKdizburPPni2XGKKKrukxroDh5c7eQH3KNmvywfxtTAejYDJjnyNd1gmAoW9TJpvoQMupjCPzLN5brZAin",
  "key20": "3SPMh1fwuHNh4ARsa4nAwaDpkV9emji5e3ksTvwu8DoR4JVaJwEgCpybBQ2g363wtsTFxtZx8Z3S8doicLcWLabR",
  "key21": "2M6jMuYgct21B1ckoUzYfDuYigpvMPEcLNW1qQH5NtunLGbQCDrREsniFt4VzqsFJ32RLKZExQcTqsLDAiAD1afj",
  "key22": "2aAvBqLKrK83DSoBYQ1pX4eFdQkwTJDa2DxMbMgUTq7jHPbAQtk7NFmsyvXhReCVcictB9yfcosuQu26tBbYEZEq",
  "key23": "2sjUtvQvy6emcbdUzJhfs2Vv52vHxUa1ejuXSERGUWe3jrasdzD7qSbkdduKxVLAAKhz7r9Jp6Hh4UE2kyDTWhP5",
  "key24": "2oUAFNXQPBjVG7MeZEhZGoj4JXcKw7j4zh56VtdUefSi4wF9HoXLKRe2ptKtiAbW94wYT7dNcBT486emd34tvMNG",
  "key25": "sSqhbF9KuqfgKpJoT8KU4XL3eb8mVjo8i25sTzqCesBCDF5ezqbfGgfTSkxPaghCtP1RGRRvza89CsRHjP8PZwv",
  "key26": "4WapXmd7zKE4mtXbpskLhvzG6F4tEHtdfuBDE79pFBZEhScg9isCww4NL8vSdMBQiRAA31GikqxHRMRzKt8bHUA2",
  "key27": "3RhRWTVSgQjw9oNvZuj1ZWDYkyUwGDzkokmd9ssL9wRqWAbVVuUddzmBoJugFbk5nFys5NLmBG23Mt4M7KFeTP3R",
  "key28": "5eBH4z6r6Eo77NsTnKMojZ3TpKfkAYuw6ZPL3Tftr486S2NXvcBFierpEupfmYbzT7ycptv5gMZWtTrD14QJJzfQ",
  "key29": "5JXU6p5p8QrEMGoZUfc88UmAWjdkHu9bAmV5djkSzc9CvCXJQRSWNZn3fV5aWH8gm8PkCWftD368zKyKjsBioHE3",
  "key30": "67r1b5QRARht3QMFAUZU26dvyhCHFUU7e59mqovy9XwH3nvnKEhM9ygx6ZP4XbPfFKYw1h92wtga7xhx3zARJypB",
  "key31": "5ySDXDV8M1kRoTMFiRU3aQQ98cxHgFAt61wkPGBqPR7KzBuwHVTAoDstxji1MuxDHZYkpuJif5HveWJoBJXpX4fN",
  "key32": "5aJT8XHwcgyA9rkFkLDFqYBFYXh26S3QLyCSHRXf2FruiPb6W2zu27QudU5djcuxBN8y34An4W2bsRfeyNm5E5Fw",
  "key33": "4JujkA7Q15Z5uZygDo26boTVbhwxEq9qe5xZgcWGw8QSGWXk4istbGLo1TgSwJ7YEitj3HuowyExfwdKDyfMeZXe",
  "key34": "3rrhFNQS6azAuRNcXBounc11bbuWQdDwzk1jw7KvCTZAmAs6xp8NrGNS4ZyZczuERvm8vkKKgrFw12vkbxES8e2y",
  "key35": "3nBAsaEgfCLUeZHD4hmMjwkL77NDGC6zPtVfDrA25DZ5RPPAcLWmcs6JBZLNaaW8oZxLzVHgpzG9ezjt5629w1RE",
  "key36": "kKiG5i994ofyoAHwMLzb6TCS2a7G8aJc9LEgekEeRv8jdAkcnyCWt5Ghzp2C54kf9ekrC2gmYt3t94v53KmY6ti",
  "key37": "F7Vds5dc5nokxpsU3KbYLNkVcggCTnxsBJ3TQf76ZCqTvKSGbsRBaeVDejA3b7xhRjActubUF3jokA7xhi2LjhK",
  "key38": "bb5g2TKt9UcSoAhhetVpae2Ci4gg4mTcD8owbZVYDkCCsNj2WrC1jiH4Y38dY1HsAFqqWtqN9ab4JbXG3XTwFqs",
  "key39": "5nDFL68AXJT6D6q1UVLN1TC6xiyxPncV1Ys8H2U2Aj1g7u5KYMHtPpHpJkiFfUL5cSUW4yfzELRPSQ1j4eKU93FJ",
  "key40": "5FD3dzEGMnKeS7tx59hXAmgLTm1TsAAcpgmAEdKNsBnZWMUMh7o49RPB1nwoWtZ83tRAtpyMf14dHvBc2maGZBUU",
  "key41": "3H2kpA31ymecemvDRCB8xBfPhJxpUU7RQ4749h4oaQzscNLEWwc8C5zrrLntesqDC5LyCAmGgB5SfGWEucCoLEVM",
  "key42": "Leiw3WvPvHgQiHTdMS3jcB14JwAq3M93WYhMRBqEj7pXjgRkkjsdCvqVsjYjd8aAxctUu6c4XGd1nEgLfGUUN7v",
  "key43": "2Knud9XBb2aYhTBo8TPuPxP8dZewpKCFjRCzhCHciyd99JSN9AFrrCZ6ynKDgFTqocfUghDqub7h2sotPJT2QwPG",
  "key44": "3w2T6rHWJnhAp5tQvVRQF2tfkHEMfYQBiTqf2tZV521FBnWnJRizbbM5JGGxnott6BE5UT3CoTqi9gLFRPHL4AHh",
  "key45": "4H5oKs9mAZmv1bMajxw1pDxr9ooi1TBVXbreW3Fv126BYpNNFcBC5STYaQ38nUPvPTbsARqvt8Kj5UbuXbSTCgoz",
  "key46": "2iTkUVYYsEbhsCWCbPpceoW9nwdMhGXwbcVBVgW1Mon1HxeT8r3XHf9CZcgVfWTcnGegFz1iJFvsrVDsPPBwsy57",
  "key47": "4iH5RezkA2BE2XnX9BNfRZ968V7UjXLfapGhyrW5Qp954QrDvRuBXueoGMtd6DHsTx84fF4sDdVEjD42RTKeDufN",
  "key48": "4aiofJBWBpUDVb2uzjH1s1yUyuEYUmCvCKaXrk1fjP61vRV1fmBcQeh7EMGKAkfeoqvz5AJZg3BvNZW8jQoZT4k1"
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
