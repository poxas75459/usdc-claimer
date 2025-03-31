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
    "34dZ3w5noFLYTbuFGAGgznpkpdJXq21JSyoWpqRWtmYNFticFopAXC9gaRqvnAuANeZYLsA8EKz5wPzAjr8AgYqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jvo4jLVG68FKmPtgqmLCj3FSKwLqjzy3HzTMzrbw3TTYbphwiTve4bp5GjDUf5pBkomCWCyJ3CzTCro92KYatT2",
  "key1": "yqsfcUvXLDajc7MLPcXhNhPVpL5bLXbP2dQDwxj3Bpzm44Qk16Dd9YaviAUJd5ykW5o99fn4mYiMQK33pX22a5u",
  "key2": "4sPDRcpeeqGdDuqfYXbvvdAwbCcf7MWRQDMZK2JD8dN8JzLVZENKCYHjpMhjcKyYmm4s9ibiGfiXQWSixMezEJXr",
  "key3": "2TBpAZ1smwoseombKgt6B1AsghtMzK4JFTwje8S4cMYy3nm29w5qs6QsTWk5z2n91zYqL18VKDBUYuPrj9FMJ13i",
  "key4": "3zq8U6eqWPdJzUNnZ4MC4dQz91yZ3draXjMj8awWZ8VbL61QEr5uCuhPW44YY6NG8GLXuohxT3QvT5sc5X5nodiu",
  "key5": "5QWtVNnNYjVaHG9sdxmpEYVoK7NYcQ9CmusMSp8squUvGMF9tSVFqB2TXbgfP8GYaotCgv6dszJAPpch52AeZdyN",
  "key6": "4TuM3GBFfyR46wfp5S3SjQGxpo5Ltf4E13PTT6245xj4MDk8BkKta1bKAtWybj3UGPY8LrivcFYpqszeZBNyijgL",
  "key7": "2J2LTTrjDKqqeJy9eYd3p5EXhMi2itxuqXT6iZRAJWD9Ts1ECxe2vXeGmz3fe9Uz49keKmEVE3fkCLjMgM5iRAeh",
  "key8": "DV3oPP35xJCKiYesqTeBY6ZfVyqwXF2atXux6ds7aK64rXvjEcmwxpsMhhHtQ9CxYodgkH7RkD8zx7dfc27BDT4",
  "key9": "67Ap2YFLTwbPEDyKTmpdZKTSNQ4o7h4NmQZN1XJUynyCeNL6nr9wbiqw9nwEvx4cbFQfHqL1owfxHj9i91AjNN4m",
  "key10": "67KtNy4VCcMZU6s2YECDe3hkos9sWV1h9dXuamWJBPcVnMNFn4SdZNSFPypedigVyqUV4A2P2AGymDSQiyGuysvH",
  "key11": "2LXhQzGhLoNQXHBXiSMeCvZW4iYxN2mk4hKA6xiQqrum3Z8kZVFfRLzeAxbP8AkTELX44JHq4VazNoH5dsvX9b9o",
  "key12": "37x7Us6JeryBrNbCYjcZqXAw6CGeZjppbEpgTEC8Lm6wycCUyd6tyhBMhtf1kdFrfFrxb44wgkat19ryZnjzmTd",
  "key13": "49jrodqRFKUguoozNFdKZ2CXCcn7G9JesE31BfWNka8ZuBWS2kVM7rgg3C8z3KY8asCqRmxtUmzQ4a1CYVVZGv9d",
  "key14": "5fRUfQ2Nh7rNsVKoNBETjMaWAmLFoM5XPWLVYwRPba91Gp67TgJz9XPrGBPA5HzmwMKgHW1W1wN6EtxUzdpHYX3a",
  "key15": "5tTntUD2dLHfWg9Udw2HBJMTqZEU6M8Fj2vBSrqv5J5jgkFXQJLjqEFCLyN847i9kz2rwbnuRJy9JWyPNW5yiERr",
  "key16": "4QskbhYwNvV4ZAd9iqfKP14E1HdSFsp5RA3HDF2ec7QqRMddSvtFNSyg9FXg8h55ivuXHE2ihNxaTyDXsSfiYqJA",
  "key17": "2XgdjDNg83SiYgm3Ry2V3dKg9WUnWetTkP8CBcAzq214ypZEWE9vNwcjW1zUmxwbZpcZuTCechgTUyLAw3V65HWX",
  "key18": "2cfJm8ps7sdBAfBVbt3KBr2FATW7SR88amKM1cQkNXBoDSZZf7xNRh5w8DtweJkJNRLeSVwwMN1EzQk2htoiQW28",
  "key19": "VwdWTrdpYVe6R9YTdiAdFFHHbCYVd69bUHGkywc6rC9uhbukZ3sR2tBGgCJwBcd2hG8Y4SqeU3U97D8D5fKcx2n",
  "key20": "FoMDeV1TKXgbgD5qshCbpbcMXJ2XDFBMncgciJvhxGSZm25cSynWzQGaqDSTzkvwmurxEaaDX1zjUm6qxwFeX4N",
  "key21": "ta7XpvueJecwGxFmHMttmKy1Dy32gSKxn99btsBGJ7FS5k268npmiKMZ1oi7PmV8RBZKzjmM8TkHsZTH3mAm6Ho",
  "key22": "3Xs3o5PAKPMDimLpVc2HZonLQwE8Ewp4wEs7jnU7jJfNyWgnpVi4Zd41ATNccVCiDjRThkLySeHQ9Ky1HJNYEC1j",
  "key23": "2UzpFcRNaeCoH28nPyvqtAp2pDJV1BxV6TKrt9mhxdnAvhnnLMXZV2t9y9nF3A1AZbDkNDJb2Qzy24c8dgyk9Qc9",
  "key24": "4fBHWJMiqhakfEQQ4r6uoytTyFFrNSSpJkHVvmSK4AQAfHuvcaWEb6fvynZEMUS482wJ9ECzJ8Yd3x8WRFCHVzXp",
  "key25": "rQLPFhZ5e8BRJT3jsJBzwx1GZgtRqQVT2vRR8E85REpnunjzSCt4j9BQ2m1pZ4tCFkF7Lp8eMuZ8D5MsMFj257u",
  "key26": "4FXKDjhRRoU89coJNswnDbqzwiKqnFdHNsF1zxRyonbMZiSSh76YQSDd9y6mri2hKZMFcERDyNwsmm6Y3cjmUfs6",
  "key27": "21qzahrvpSDKsmhvrsLrXs6nBV6eRhYoCgWsf6WijBhxngCGb28ZMFmcUmXHpEC8A91aeeT8Vcgx7pvHkUtEMNiC",
  "key28": "22kRxttw81gn9KHzMRZXR5YyCpeh1F5YfcX2Abnv9CKbw7jG92jnJhxYSE3VF2TDPDfi4QVnikiPmL4rG6CkNyNr",
  "key29": "vVcRqYDg52zb2Gz93pFzdY51SuH7sovHepXQThzztGVWeggrbfpABBAosd2RJZhrtLxUtwf6MjhaqaqWxFTNbMF",
  "key30": "5DyxFfGpjNmCsb5sCTf6oyvusQqNdxii66XHtYspURbBzsGpYVj6VtcYmBmbckNSpat6SWZDvpM17P46gzvkFYbQ",
  "key31": "2h1DBuwgLFvSqinkeefBedAJCuC9yWDt4Y6aMavBBDaVV5K5mQD5atFb8V4sgQAgXCTt1vBLge59WbgRvmwof88p",
  "key32": "iK2KcGvp49wezzLpRTqeZHfZ3G5WLzPzwZsnxxnvsMwiAaSCT6jyB7LWTzD9A7noqVwBxEWWeLvPe5tvQKc56T6",
  "key33": "27KYCXXnmW61ozYgjNHt17Y9aeq5uj9dJP1N6BDRAFkKB37FBBQQk4MZzdYCp8YU81MB4PCrf7sTEzmE8repRsfE",
  "key34": "FVgxvKRitmBVuTgy2S1T3hd6h2CZifkyViKfVQDp4R6yq9fRXQNbsUk4zQxAuUk6yQb2Zz1F1JWvJBq7pXf3f22",
  "key35": "2HxZoywJupKU3gmAPgMgHqR7xSi3Yqcs3VLnD4kMALEXW4Ra6b1YbTEigDWYZjJpGiAkfDegmDFduB2pdNGssF7m",
  "key36": "5AN23HsPt7hXbxYaf1nE3LawwJRminMCQXFwyLZLfCL7pUMrxhxNYLNEp9XjHK7W66oUa2Up9xfLxqxNujSu74Rj",
  "key37": "4gnJXoCuB1w64m5Z3imMfuWmusbU1aBT4qxLaZM6UMeiYZozxywgKY5uU3ZB8d1aGpdaCkQsEs9x4qqoGBtvdUpf",
  "key38": "5QN48mH8P2bc2t7soMzxHyPNQJtFi8nr1i6er5eHgr5CiudFUZBB4VTLoSJBHS9cEUXYPMzU139jg1mbbyvbpzB9",
  "key39": "2WqrozqHJ575RHnmUZhC7H5F2LNR93gahi33vj8o98uw5YMA976KMZ4XpbVy7MfoPwwzrrzsBDHEVGJVV1UReya6",
  "key40": "4fAy3dS1YZHsNdwYdtXdxgicujWR6XHCdXuNCNUjuMfXNYcTtejshmFeEY5yA3HzuQurHSPSDxkTuWRJmfHfAqgy",
  "key41": "xYhgEth4z35fU234Jc2sncwhDahYct21MH1N1o9RBiMSQrVX4BG1eT1tqnHJWpNfXNieFD77bUUffUqVNA3J5wY",
  "key42": "3rLb9wshLsVrxMi1HTd1gE4wCWvKTAKs1N29F7hhSSyvwycmiTGmwXEEMPSQQNvLfK2rtzq9jgdsh8MmfHbWi8tC",
  "key43": "2TCpsxhSTWF3X7bYgDpwFEhHnNP6m8K6SFGxY3xRuheW9VoVx6k1cAnDGW38oPW3YZ5qVPrD16LqWPtAmvxY5L8J",
  "key44": "3qEYi6KEZUaMvtjRvBPoWTLYX1u2cPMCRwJCvpCQv5yStCKAMDHNdm3otQzc2u1hek8m59E7kpGgS6n2PPYqUN58",
  "key45": "3Tr7YFE56SJjTKhUYJXnUxajyqpr8Do53oeDjgSC5G7kzBpRwXCLrDSSJGnwTYvMU9wB1pndqqme2PdAdBVou9GN",
  "key46": "3AfVvEEDrfGz9Azsfrfe5zGT9zTEEUvfaSi7xshL9urubExw22Xbv9TgsMqpYCZFwPpxzfWQ1hVJeMpNSyBP3pQ4",
  "key47": "2aP7y1DFQkavtS3JNRQFwvGzV3PGQkRbJ7RWknAEnrJY19TNy2yFRKeMbFpfd5bgEjYEKT1Q9Di9U6LJDxH27WPN",
  "key48": "5hkhPqJ7SUzcecLnK5uidVTVtCXuRih2brsw5X1BNK1goy7eGy9UUhmYhfWMrohNypaSqq2BaYkVpsGqc2DuUY6g",
  "key49": "3nMgg4u5PvdMVrDLR9sGNfVFhF5PYBJK64s5XDJjgpegwNc99QCd6vgsyQaAvBtwvYbbYezTMbjs4zZjFitJH8cu"
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
