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
    "4MsovfQZStv8YPHQjzNQLpeyk2hFpjvvLMS9wEey7Npxp8XFf7N785WZQVfav3odCxzpYXeMvnYycd1tvz1tUsNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uKAJeXpC3mHhK3DXPJkusqP26obaf1SziU7PzaZsZR6Li5vKfCuCRRzcjWApKAtZMuEfovPobpoDQmcoMaKLwVv",
  "key1": "5FizHBJb3ssLqW7cFp9gYczPqgz3CGmJbwWpRH7tfHoojFuChsgdv6wueQVuWNNBABSPQ4ERGd5Tf9Cb3x8waPD5",
  "key2": "huiZ4k9Hk6Ekkc8tqDaTwfA8JcDkM62cLQKWukm5PNU8RC12aAxa18sTsW98j7uo23ouue9LRv917wGrHtbByty",
  "key3": "2UNZrZ8rtfwVnjx1kdbGeWfgsLByUQSYt5dM8B4bQDgMQ8zanxCFCjogq3z2A7m6fgRRXdmJ1x93JMPi5ox5xYJ8",
  "key4": "5Z5ZrhJpwF9k1cHC8gUTi9zBn8pno2X1TJTfG9rJwGLLe3j5s7cfo89CCAqSzE4cucxKijUaMeSdGvuM57pxKwmr",
  "key5": "4YDgWTCvtwEc9FFnaL6H5Db4CcNYon3azhY6iV5gaqLqfD4zPZRgAR4S94XaAJwCmCvqCTtAecjGsTRkd2FcfL4w",
  "key6": "4XG95XWn7SZXnxRUd7BSDoGHTZ3rKRRimnEoiq1uKjySopAe42GWkpv2GPmoXsG2WFtChTinxWTwB2wG8MmfGJCQ",
  "key7": "2qErYwDGYMH66ew3yCCyCcvsZEMkHjTy8cUA7v8MrkyCHPP7fvJHTkQMppvU3Ka162bu4iG8s4kdtx2fmM4e5kjL",
  "key8": "5bQVs9KAnGpumTLqV7rNHgd2jKoyCPfUhKKPyKHbZW5K2jxVNQ5sz1DQJ2woffBFaxWHPiUMYJWct5y3jfY1MbEw",
  "key9": "4cJcwBGYtsoZgaHugGd2XTpxNoXpPjd7e3zD7uo5LGrHgbmWuamSV38Coa3qbGALXTWvCSMGenMdMhDJeqPrFwS2",
  "key10": "3jAu761G8bU7knxny9VwPMUn2Kf612qD8jdnNW5c3MmVMVW5wCN2RhQwcSpGJe53jUBQatr8633r2mq9ejahTuZj",
  "key11": "3b1mpHnijvhFuW3yFbAmjKrKi1NX1FZNRtXpscEztMNZSApJCu77VdRpTuHwAAWtqcq8AYfvDsAW7uWhGVRWLE3M",
  "key12": "2qjfF8xoMNGFpVzn2R1LX7Zpu6ynkXzas8XMcePookBkk2avfSbCKBVQqjNvx6WX6NHfUeyaijQXbJV3fwn6Y2it",
  "key13": "4k6CMh3WNos4TVKWcoCP7tejHm2XZTCg341T3GAknVS3ydDoZBqwhXA4Jg2KQsvCdwCbGcnYiLraKrHucRJ663V2",
  "key14": "3Evx7UGtwEBsLWWpybU7L4TtY4BZsSpmM3YysAbJ8Am5NvyGkj4LXziaJ7hAwVMu5r5mKbr8i4T6d5c3C1hdMcoC",
  "key15": "4XJBCKz8hEA2NL3dxn34fkgiqKKbQ1Dhh5oqPxwwvdeT3RrW8BF5TvPaqRcUkHxy5W6S488e9iNr29NhD1ZHz73M",
  "key16": "rEbGuzqUzUXxf2Z1TgmWC3eQ8AtQTWhKyDTpwFHX7H1D3gkYv6HUgvYRxjBfZwLzBAyHTJ73LxVEhjUAFNmScmh",
  "key17": "3cRXi3u8ayHrMu8iaMSzDh9Fbhz4r3tFpZ11AA9upzewc2cYMWKJLdGc73qZe8EAwG8nBkTb7AwAsrRQYzesBwv7",
  "key18": "5UaDcxQuaxS5cCFyi64ebvtjhT3ae8Qh3S3A8x19Mpp6cmsG7C2ejYRfntdDGJAABvJjn4XUce7cfE5RGtWZFASA",
  "key19": "5YVocRqYNJW7JTzHEtyxmmFwFMZtTW8bcVPLyxVcbcAWaqSKc8jEygDKaGhRrtrw4oAMYPdSSvQLHz7vM9vZ2yGT",
  "key20": "64FLDqURoyaDVJQ93EFLfArrhEFPJLdysgC2BEpHhxBTTWKvipJ6YaQnUETjpxSUwa86jT9VrY3RvVmpG26ThS6E",
  "key21": "XDSv4bHFhEc95wXgSCuyXBmfPxdcfkAs2NiiCLYAX5TEdPXFa3EshxZg3SMcLPWAqVH12JVX4oNsPwtKuSbzWFn",
  "key22": "4UGACKoDZcqgd6pzwjo5pBXMyxXJn1VVRp1epR4VDWkP1NdX1JXhLVDtwbcDat86NeKhLjiqSC7EGXpqzShhxacx",
  "key23": "5c2TfQqHdEoamJr4GFB3sNAZ4SCUH8cXgcq71pvNZEjnFv1JZ2VmLx4JJ3cbsEGAwFcCJYLDWVzKDsWMKBBknVZp",
  "key24": "4FscSMrSVyz7fU3kSdP9S37D5k97xLsGFYPRimFyr7b1XAi8FdFTLLyoWQNKDw7pTxJxSzTM26jXKRwSRquaTfLp",
  "key25": "75s4FxRYzajgpcMw8ZCFWUmyHa8NYsvXrCx8jeGk42D8hQvJwg1D56UJd48pNRLgi6pxsVcDpv2gkMkpUmpSPNz",
  "key26": "36uJUUffm1s2D2dGwMGBrhLbqaZaEFHPjd5JEF2k41DiiTdXXdGaxYLMvSV5gdYiuuW5WYhmZjXf3Wy5krVX8XDj",
  "key27": "37xP9snAgv1BqQkNfw2cydGBUDBejL6Ay4h5Z25sL4KvFuRp4usB7iAhywct6kiRdDpozwowC4AXngMy7X6tzKuk",
  "key28": "LHcVCuAXVFe7aWLijzo2H8Qpf8FzX8ruMvghSiHyzwYyHHyHCszvFcsDZrGyjcitAgYVSRDgUygku2HnCpooZUa",
  "key29": "4ECCdRd2FAUFpjPsh8frFWD2ducXaehXyK6jMF3CWAhn48BtkVuNF8Z5ubKH9CCtftPwRSDdwB7A9n49V8mNDqg",
  "key30": "65MwHCx5fSxBAPPUfLaM9YunL1Pg6eFgJFMGwRPvqRHS4aD9o9CEhQr24M85GcEWrKSSb9xHeq8AyFUwhBF61eap",
  "key31": "545QtCkYPRE6Mf3efbCm34nr8NSDkyF37EvfxWQuPiFrvVYdf2azFBRm8nQo4CBe1Y5LRVo6KFu8EQTmjrapsCfn",
  "key32": "36xt3SAXd6juRSQeMJfxmVrAUHd4zVUHgfEmXsaArGGTwTYZqJQcFtqVoihiHqqGzYQxqoPXdWC74g7mRnhcwnDo",
  "key33": "45KkmvAGAEw3RajCCnttbyzALv3pm1m1u6d7BdKxjaPFoUPP5jJb8HMZEt94n4mqR36ZwS4tq2TMz7BBHf1Sgfum",
  "key34": "5S6wEu9yN2EUay8qXfiJaiRXtCncwUM8oxemcPVx95RvRSs66Dq2VZTC64t5tDaXdsqfe3CGADMrS6VSMx8Cbp11",
  "key35": "4jvXpcdjJHMss6r1gXwRX63hymvks2c76oaVAnJrTQMuBafpiL7FbW4bYDwcWJVfNoLmRNR7iwAdgfnSdyEJDj3i",
  "key36": "62e3qDXSdFmtsrneGBHvr46Nx9cnaUCMeaaq59MTF7zQaRuYVEKCMULrSQoooSkyRyFoRH2fzJssZDmSqsSG6WH1"
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
