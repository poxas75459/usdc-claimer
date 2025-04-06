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
    "4xMJ1arNqJWKRty7QWQMLnAhXUejCCxKJzqqmqTCn8fNmpZRkfm2hj9HiDnF8BEYiKRpPHJFJ7K7fJ1P4rSvpng9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ByTMY8ypgXLBktZFT4B9QHTUW945HvSQU33hHjBTR5pKkGJJLZEaUer6imu6dupRMq3aeikMbKXBt8bEKWQTyrm",
  "key1": "3bkqk51DKQc6UTWN8AnWp6CAY6Bkqjy8Pk1psk3g63Vpbb8LUkBBUyPvn5pDvUvR6pEpkzwWAxkWGFdQWoEMgyXx",
  "key2": "HhbiEvPM333yktmu7U7gGh3aN9NbckmRjQDNi1cxs7xydJKSq3vtsAC4PidxuqQP79DDHY6bK9ouJyy1mVsN6RQ",
  "key3": "3cptdHiWrYMcLc7bToG3nNYV6V8zPJaPkP9ogmhZoLDFaJk6DXxVJDJ6XzL6p1yuUzh3LEeNXsBesHtkdaEnb7nS",
  "key4": "2yf8JNdMo3i6AT8z37fP2ycDwEJFeDhGg7beJVLjbGuv2x4uB4cJa2xTBJKyuAMJQ6YJf7Vvo3PJ6A16H5dJczJH",
  "key5": "3PGdFLQWXLpSJLT7BiTpbRC491mYWPvKwT6WvAN4VvyhA7XSgrcJ43F4w7Y5Eomp2NU36hafCR99CMytaX5HU4Eb",
  "key6": "54w1SmQWfXQC6XHZbMiGXkQJAPoY5KCvVELyv1kATTofbHjBMTLvo1Y6zqu3TS1R6owtLYugqrELSPiARcF3LXYi",
  "key7": "2epaPQBWsGtAy7wdpejrPhATUkmfB18Yaojru6zeVXwbnsatPZwXaeUdtAx7ZgCzLBLJFTZdQFgkygMx7gRn9uJg",
  "key8": "4aiDeTQwB8kaRmbiVyiCdbEDQvHAoXgekEXTDh2qEydjdjZrBkz1TQ8FcQASojNEEDVy3jgWH66v4WgijkKsZWyQ",
  "key9": "4h2ucWY8sVKeT2iGSdrWRQtkmDZZGX55F7udDCWNZHo1us7wXNVRD2syoRukNCTut2tgQtHP65XYC57tVyXp3wSK",
  "key10": "43gPxEZioWWBqfm1HtkkLDhLEz9kyZducw8zVN2WbvTRewKVRUtSXH1Qxg3TP8bW7eN6HEDPMvvVdsmXcM6o1NMT",
  "key11": "ryNMnnXbnPYhRdZ57a1EQroCGHQDa4i9LYMS7Bk3tYoWseVWLjpQmVF3zbqPzSmusQKq9WZLK15kByNr2YAzBpx",
  "key12": "2XmHDeafDgiLJdvtVhi7VKMQhWhV27bfebZ4WkW1uMy8P7dEx5KFcCfNbtXmxziNiGQvbeDKfTiMeC4Goa2SDw91",
  "key13": "3macdffYHn6y1GwFS1jfdPitb9bvRgBGugivwre8Jj2rzYUUsaQbHVFVZDQ2W3Ra4dUxTcYiiusFdoiPPgpi1Mxd",
  "key14": "5rsMMfQchRnpeJLg5zF2jjJSD74TjLEKE5wcGMzQVhpgAwH3Xuo45zJGxMBcNEBxBrza7s1xaGwYcYQEBqJNtE7J",
  "key15": "5a4Rhy62Gm1u1pK2RrA9TPPmCnyQKsysaNXcHSFwe1Y47y95wdBBGar1eXzDBQFHxuyYmNYhRaLTLpr5UGjs5CqJ",
  "key16": "wotUG1jJNp6meeNxgUY4kjSphX47zWMBbmQXaiX8V4wDru4673SpMNWGb42dTJxncUEhg5qrAsMJvY3bvgaNkvu",
  "key17": "4NS3rgAhuYfBCtGD4BZbDQVdYQXw6Y2suMDq8oW1kitym6MYp3c1qBqFFvxGSpHxYKdjZ9u72eb8tw5wQSTWhHny",
  "key18": "2L2CLYKpdJsgTjraRyE15E2imaPVYbPBifyrqVmXodsyR4XRg58dJCiPnJBv5Jn17W5KTr94P4uYNJ8sEADUvq6R",
  "key19": "5PVLsH2pcF35uZjt1rFz2j7m4HiN8ZrxPabrDgx6vSp9JjRNhxVjqnNFqex8AGM63Qp7HoAShu9x75TA4F2PGhCg",
  "key20": "38iz7uC2ehoCMka285swbsMQXbe31LaqeAVLg3kyRiq4Z5Xh4geuq2Y5sR5rE9q9fcytpTuFUSRMNYk7KWyVJLA1",
  "key21": "5qv25q9r5KhG7RsEwz99sjXACZKjBVGffuhGz31o7oeL4tvHbNa9LvjQ5z6fg1HZAR8WvAZSR9Ee5A8kj8BQ8Aee",
  "key22": "4CXCvqtwDtNXSnLNg731tNh7hUv7c1oTu8HNW2k4UfZaa6y7a1xmS2fpQaerqLDruduXHkHMKkouAyaLxJ5FhRRp",
  "key23": "UrJqmvxXdviGjD2t7SvsfWJNBCq8ujcd6A7pyGTXujboaxpa25wvWYiAirAxi4Kbpi1nahVLWU6RfR53jM3LYE3",
  "key24": "2nhXkdjzGg82JagnyoawUgwNQ5SPi7cNoiX4Qmgf6JLdn7RrRw9f8xo4Vc8YFQ9N1gr5jGLAsFJm9Tmw7wmmUWoE",
  "key25": "39U4q3QctHPuKjW1XhgEUYhpUpKyrHnjSKKSE6o6vPXB3PkWW878XzAjCh7QEJGzGsZJ2ff3DmCwqAhtk8wRTbRG",
  "key26": "4V7UaVh7FWdJZSCi7zV3BWYvjNCvt1Csca9xHmSdRZhZESYFMimxxpEpZkzooe7u6VSjF4JxpoSbfZX27KQiDiBn",
  "key27": "56mHdqynSRkvDDPs66NQcz1vqzPohkh3FwqoRrk2P56HesacEg28RWPfGQvvKnMcp6pXgfGm7UoQsQLnWEvVqH58",
  "key28": "5tQ37fHiAWam4C6bHZmcw19yP4X9oxpKxGgsNFSJrKQYQ5Nc85vPkvT1kESKPAMVvWgySbfF9mbCU93Muy5RzUQy",
  "key29": "3vWdFPn6cw9G6SMFiDSwHne5uPqNj6WwdkDWAXDx3LJH7VkfHBFekQnuEWp8U3iimPrN14ZUTFY56h4EtX8KtcJ9",
  "key30": "3uF3qCubZLkwLx4MfD75YFJYhZSh593mA8NpMfmJ6PjYnHngTzbiPSRshRbGenYjGzqf3YWyGPM6urpu8sfaFEuc",
  "key31": "hxK1AbBcAPSuM4SV8V87fF2KiVRm8bw6LV9nywoWViEDqDLBFqyiTnftotiHU6UDFi6qiPfVHbSCqrakFEdkU2i",
  "key32": "5UFvgnX5rUWymDwqsayUVcSgsmPtuz5ju89g7gb7z5btHsjSiHFPzy75RhG31zRSFSEikDhZoj4ojW79CE5pHLBs",
  "key33": "3kku6drw9hhoBTatMMMYUGQibiCT3E4X2SdzX6YRkwkzbQayc4tTDomgZgwnWT1Yfv47DsYwgqCXb1JMjGresoH3",
  "key34": "4S2dm2R9HaghVNDpQtoMeXA6Z33aHZKVh1yt5rfiGpDdgrpPgixzuvXh5VbNPUtpguGbXDcXE6BvQkgSBFxLrWn",
  "key35": "3NU7Utjg19A9dqywnbq4DQEGyTtx2jarFt9FWvXomCA94VDjrGH1oC7SdHWMvEWJ7X4jfwH6xyDLF7DSf5G7w152",
  "key36": "2TKPe25LPSXe1oDQBsaQKkbKgJKLGNahAbgbsfCGZc72LmZ3amJRt51sVajCZRfcFPZpedxGqEdmZX5R7mkhabnR",
  "key37": "5MrrnMYzRRi7uLb5FE3LtkWC7TfCdPgpPaPTKEL5F5nUmsqMMohmBRtByomrfBcjfjDVgi3fHTo8P6147xhnrXNy",
  "key38": "5bU2kcaxDRkmcic2ZEc2GxyzX1Ae5mfuFo9UeHPpX5ZAAKMVByTDBoSk1UzX3Rnr8Evn6BRAcbmkdtWpkh3LmMk"
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
