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
    "51gmZjNKjVqwfv9uDuPUJ6eXMMJXTCcG2FLC1k1ABRA2vh4aFYhVh1cSSBoZWuaobsfGhM2zzuJSE4MGhRJvvGwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPPvAnA1DERqpsQvWnSo7fctaeMgtn7rqmqgE4kVMXUtuPUrgNmiRPEHnc2Ruiy3tqYLQForNscShmgLTZAmQUM",
  "key1": "2dgtmiZPX26kDqJeWhf8Y4DebYeBMph3hoMcnsQBEenmnBmvrJnhY3G2x4zMYerxnS3gjafX8XB1Hjp9xn6UoXYF",
  "key2": "2WKX1x3uL7qb1XoTb9hnkYy11QEfYYi61F8J9949jct7tdGtopRGFTzV7dUMg2mKYaRjfNhUMqnMXikfAMPfs2zV",
  "key3": "5rv5QvwBBiKeDps8Nem26JQA5S3pPv2D3jmDRbgsiLc2HaYWKW7a4ZTiVGiXdW5bt1o6oVcPaWxUbsQ4LgBx4E7m",
  "key4": "5tPVt6GBhsqvCcxjaAwmB6XyK5gB13pkpkU8hzY3wwW2x2VTe8go46bfq5kzaAmVJnbhz2XHkw39GZX5r8rKYgSR",
  "key5": "4X7c9SVZuipvtawqtaMQwm4oc7E3wuK1AEsGUF11Ec8T7KJERXkubah9bLNfX3oBbqCxS6hENi2SFVfQ8nX2LgLn",
  "key6": "2qHgZSHH9sSBZTfNFb2avq4n784tr7BerCn7krxtSpGq2LaZNj8X7hn1sXG16dudD3YAkKJMMHCEGAAhTCBMqMUm",
  "key7": "52ukdKzx7msrbyWbYHH5bETzFzk4dr2mjEnhKnCr9hNhTkRwJqbkphSGQcYfog43RUeFS7yS57mGMV7DxtAxN6Q6",
  "key8": "4j2sV4tF2oi7VijwatWkEAyxRL98ksNJVjzKKEMKS1mC1eSUN3v2JSaph26VvPtjqoUe39ZjYzignQUuqyBzXbLJ",
  "key9": "3Pq6GaUEhYxvR5uEdZWsJWtYqjj8NGbfDehe99h72JhxSW9pf95czn5hftcEicFUWfLysSLZYWcYKdi4cJ1NZLN8",
  "key10": "qnF3yiXA2WsL8ewqrY4VZRYXif3vbbugZ8zD1hLwnSt6Dtvz9jCTr1AFNDpCz6kFhEjxRipzJYiyfoQHG82Nyo4",
  "key11": "3CoHDW72HkUL8vVo329gzS8BLpcQQ4mDhuHaDKymiWancByS3FsYSUZfgu5fq1eKMyZiez4upHCSXgxjh2zBjRLj",
  "key12": "3gEbZwZsTPNu55XQKQAxECSUBw3qeLSnayQLQgUTp64dMeuqJLb1X45QTZXQjLbxVVRpAy25ew4ZgWdBnivbJKWu",
  "key13": "3xL5SC29VY9DnxfkeXsGAieYAiaKq6fWn8ZQyMkxJshj7cPN31nGDWQyAD5jUeBKwaVZtvpspz7VN5ezf3ohTScC",
  "key14": "47wTUGbNy6xbi5G2B8xTALk74K3MnYWQtv6wvAg3KchovBoTkudnDDgvGmK39gmK1vYmJTQfu1EMHPyT7jU8xqCZ",
  "key15": "4PAxYeY7yT1aaFnKPVT1aeCAb3zCkLfNXKw8SxAFCT77fPHyjgdq7sk7XtMV4BqXizdRmB4MJbTjq9LpqU7t2mrQ",
  "key16": "2UCPCeL4J9rHkiRFQZPdJJ51r6iu9smUd8bt3pGf7RQASckyTuohsTocZw91qdWqDeVt9F7r1LjXtyJom8AMDMQM",
  "key17": "5Rz1xRjduU98FkL8oUxn7eVQYinWHmdLSy8Nc9sh3Ce97m33SqrtirQ2Fzpd7hzxF2qczowoUq47Nk5qi8EygVPR",
  "key18": "2jbVYDjDuvLoia1erVouk6HqbNt3E1Rb3S3t8CGuWFzSpkex1odX6TioP9xGLV7tY4U8yYoPpLxe8e5hkFdmji5J",
  "key19": "2X1WDGX7BVyupJiMptgYrsmrg9Yy5bHWrrUBqSV4c89XrNXiU7zszCVB8f9mnKKFBF37ratuGnUvkr3AvJ92qq1U",
  "key20": "315TooV2kx6rygsrUYEhU8v69HF16vqySwFJjoVMByXJsdPwkuSfVU7GSuNgXAeNd1ZmKQFAgxnggYq97PLarXW6",
  "key21": "2Whq6eKSS97b2H95KWYsXd4D7ocqGCujCbm9k3zyapNhHSTBFRXDiprcepL7k54cRQtPKK6pTRrL9G4BLN4ibB3M",
  "key22": "5kAqaUCe9mBWJfkNd27N3oiMKN1b9cCAXtR4qZd2tUeKER2XC4emcrZrubxmQbdT4QNwJCx5iUjpxpPNNDYNyDHe",
  "key23": "3XFZpYCPXT4VjyaPxhuTbUKBguHSbrGXKCYAE7WVdQvu48UhoCYpY5U6H9HHE4o1HLMaANswupfQDgpMLFTurCXo",
  "key24": "2nS65JWga9NLKED9ean5AHe3fkivzeyz1S5aeya4r9xHSTPybNhox9f6eVBr2uWi48rKqw2cWtg7RCxNVyi3CdmW",
  "key25": "J7pQiRWCdKe66d1NudUrosQvZVwry4P5qQgv9sCMwg6sKkWHvWejiPe4b9FxeDbZz3JqBd52mGweApxM4136sGr",
  "key26": "4FTTDsayTxZiG4A4m149pfeTMXHH7Rx6eUh4v2FtWPUqcKyTCTnRQi4qmjSF3M7TbjngXLDXyMTdxmZeXNF9tBoM",
  "key27": "29srKxoUnZ3yZwpHPkeWFQanRBdkNZwqSfDzb2U8nNtrBmFCJah9FHsvjZFAe1YCz4tap5MXxEkR44GjHSonWN2K",
  "key28": "7BLADQ3A2APkSMfFZ9uuxwSNgwQfosNpkYLXdEfinqaeac9U6HwaaGJLsSEbfk9aSTpZGN9oaQrraYraVDpqyyv",
  "key29": "4u2TgmezbaLza2PftosQvxKtbcHbTmk1TRnfbLzYVhQGEPcXPXDtqBMXodECf7QtKLaZkzH4JmuH9pxm2qQvQBT9",
  "key30": "5U68QQCZZn3CzJrcqHmRX53fEMW5pfgxMCNoLdrSw8WjC4irNPPoBWfks8ph31kCJxPniqWN2YstSb9xBMmpgqwT",
  "key31": "JjYyBMX88fCKaiAR2nDtRU8No5uQNBm8e7UWfBYZtX9Gg15aFnoQo6bt2iRWEWJquZmnnBBGn4UHF1hN7hqJuUW",
  "key32": "5q7cNSM7rYFvYY4ku8TNSVrnXcE4ZJ1rv8XsNQG8PCLjxKvW8j9ceSbg54HjxM1YZShd8DxViMcSyuFqQb8qzjvt",
  "key33": "4t819GghykZLKndMVWKBmw9CgnhB4wFUSBNmFxkNvYvLo88grZxKhgyU7Di7wrWeNYzEwqxrqR3V9U9jH8irhptS",
  "key34": "5WwX4EFAPbQABX6B4XWS9Ppw4gnXyRdpqFudXPRFrHBB4jAcTWU84ceuCx2v3q9EdFkzB6S5cs7duvJQJjK7Gs1v",
  "key35": "5PfRRpzkqVCn94RAcKLdzf2NLyf5FJ5G61Y6djHnmuToFXssMeyerGFdF7iQZbZYfHmEtFjrTcFfxSkfYjeMk6E",
  "key36": "1sjKuTicZGwWVTURikk6uZNnSSDoha5PuTfx4SmkSZmp8onYe58TEFKjQW6PdFqwg4FhmdnNhKDHeXsuWCk9BZ8",
  "key37": "5AsBTDfTjoBTdBPzBVzBtPUdww4afWR7tRKyFLFNtMvk9xsXcufTAxMJYwS8jPVSY4fqkV3HFZbp4b7vRQBKzYiQ",
  "key38": "5NyyqMZwg4S7kkM54onmHJd6oLGg3AVdaiiH3zCHNXBRBaZAVmwQs31RobZcQaTAqsZh3EbDGQKKCjrBnpynGwSg",
  "key39": "5tcEsixK81MXCGRSkZwc92EHSzZUnQ8J3kdwHgNkU6cGcGZhW33nQ4CZb4s3XwAdscqtUaNEZ9W3JjtNT1YYY6FG",
  "key40": "4xUM8uTkK7fbtWJt5jZ1r8skni3J6HTmRTFUXeVkgmfKzTYZUhnqgSnBHX8XYV5eTS8zUbQYudBbCoW7iCfH8jUW",
  "key41": "4pF6GxtANkCxkLqPrMJFGAz7meYjU4RbTDehzfYjpeowDMADJzRGc7eGq5qurzqwnGNmecaW16QzaFurBxHNzwtM",
  "key42": "5G966fgJ25ZSqFJbmjdkvpSfHbEwGrCKVVa28MrYqumMDUJm5TsdEjDojQwc5XMeQsVdBqi6hk4njLcgAM5c6rZR",
  "key43": "nHUCpXZJ7FXWZ86maDn5Jywm3xkyMNkS46MDxBtUCZfn4Cy4GEsrrKgJS7wJshaMuyrTB9vnwrhHRnn4A1Xyp79"
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
