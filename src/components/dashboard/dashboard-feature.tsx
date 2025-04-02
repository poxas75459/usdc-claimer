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
    "3YfxnfHJUEsx1Wo8jKqC2rCQ9Kg7a9EQCSJojXHq1dRJbiWX3gE8UUW2yYKMPhpCNNuRB2vH8KA8S1SzVCfQ8edY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7R2wN2EHNvs79hBHgHg9wMPixjQkDB7usMquiyUEj9ui8BmPsW6Q2VqgU3e2pndbS7y15sRVbFedVNVBstu8LU",
  "key1": "4qzYgCMR1Nwz3X6xvnNh2m5X4tjEh38jMgVt59dnBtiRRtwKEXdifA9VoUGrCriCcg9tSMnpmkUco6D5RZWpZ5YV",
  "key2": "2iGmS18UwVcXz3cDngEj6g6tCexTaHeHpi9qqBHsFpca7TKAQTMCagBYwdzcRvjxzwTxN55Tz18L37tY48DZCSLS",
  "key3": "28vKtqcWt6T9MYiz5p3T1DvEtrWSqKFY2zpumSZzvDk6DuuTV9a1Dacr6z5J3QxbqApotLUhwrL18qicrxDJEwko",
  "key4": "Wcv9SKtDqNgQUAbLDZgd9WwMFB1cnFt8UrmuD3dgDxthqxr4Zc2G2MMCa6DDBbozqsSoXvJ62CnVvH8B5Kkenmp",
  "key5": "2cxFMCqQ1SBR4rkbfonP4xXAhk33LK2dz1TpKqsbceJYSMwirPaPbpdxRGQ1hzhLxpJA9LgpN9cxBJfC3MtfWU6P",
  "key6": "4k7pEEeFTjmrPcb1YAWTXtqDSnY34WhhA8fny7EiQGADuYCtDgCD7TwWdgtga5MWJGrz4VEyqwxzsjo2qBiWdbHA",
  "key7": "61eujnPM1vm5PF2M5KmucVBfX35LcQPajXHJKBUNpKtLpCcvAkbdNpYJtbxmYj8N6BktsCighHMK1KosQEKg35PG",
  "key8": "46RMA3r8t7vn4keViA3ngSoizcPM9cn1g7mTCMw5skLrLbewyiRu9hpiMUjJG7m2E4Fv3v4u2DFjv3WVhJYN6yAb",
  "key9": "2ceWcHYBWFF5QhdNKVCJ55dJRmCFNhveHvf4Ak5JmqgN2MpD6caDWjuy2GEhd6ABVno1hgu6WTcbv8J33tdrACxJ",
  "key10": "4tNMqBshr5Ws82184NpRBR1eF3vmc9pkPLn9av7BVAxQEfsSQR7A8xmMXAE4j8ZCZsAvHs9tKH89izz5vC39rVYN",
  "key11": "4bi4meE4oqptbYWnHoQvBTRrQfpAGA1bL8QoyKU4qCj1kwNLc36reU8ejvNELCRRovK75h4iGG7aP4fvgTcCyf2U",
  "key12": "3UXR3SPsdtvLETEV1LLaLEkaGhwMxpPX9QSskZEJ38k7BP2YVqvgiZzG644PMaHtCbwnmu6CgkCQY84GmC2vcb7i",
  "key13": "fKWu7T1A4E1vznp51hYRpYsha3YtDsVEV7rbyfEEbztgEvf2Qr4ukzeCaZSpUgtU4wGrU1o2XtSW1r1AX1Um3ux",
  "key14": "4rgF7tKybRagu8VFtgkMzpoxhCF8HWTHRd17vCipqmxSurPHGcDSKQKczciZ1dHY3x1jnDoR9neZz8RHW4VdS6FJ",
  "key15": "3a7986bpbqG5S7Q6UvUR8DykrZA1iZEdfXoFjaqw8qbuRA2MykPWkfHrmSqj7jxj7BdVYJRJ9Dzn2hzDazNE2tW8",
  "key16": "3RTNWEC64apRe9bjFBm1bNFu1mTfMg9q6ckV92zMnKZDsD3FRwH7uooMANFk5SfNfFCQHHZeb9z3PnWaAGzatBdo",
  "key17": "5mnuJr54LDwTHafx8Uky7rcsTSBKCcPtz9CMndEzNce4bLBV2WatCJ8Dd41vnktcVPWCVsbZ6f6WZt2Y2yAByS5z",
  "key18": "4BsH6mWqoR11pc5eQvYgLerNEcZokNyUcRVy9Qekajpz9DjjDPPu93umxYNwMGUXfYSpFFTHfgt3VVy3mje8Gqwm",
  "key19": "5nq5GRc26JZwe2xhFu7y7wvQGac9Lbc8eYndfiMG38k6m9LBhMZxjkNtbiZGF2uaZrdHviJMSNhGVKFAzpAAwZjZ",
  "key20": "3GvyRB5hGkcmnrwMPsvJh4zrqFuRn9osJRSZ7EeMmLcmkAQ54s2ye6nszYtcGcS8TzbrNfdpyycWtJP2q6GjNM3t",
  "key21": "33wzWXKqQskNSGhDTaZAKDwyLHNBaXApT5fLQhECVh4ewyV5VSUxD6BzdCxz4n5d5kgM7MEvmZ9jS3b8s9B7MHLJ",
  "key22": "5MEAX7Dm2jbcTt5myMbANSMWUxJQDtr31sc9jsyCy61TvMv8pTFgX9QRAftsbRwJPEosBePrwVAZNwQStNRqcRH1",
  "key23": "4bzJDEg7tiV2MHa2dJ3436noKyQZLvRkffzRy7pFftbwv5iWRchRpb3UdH3n8WYycvnF3vSwnZ6hPqkGqiXq1XJ2",
  "key24": "312jKER3WBNfSFYgBtV19rNZUa7J2bobCz843LcWNAsZBp6uYRFPWwoa3Jo4crocX3UfbeTcHYnKETnxSt1woMV4",
  "key25": "2iB65W8U6kFUYLZwvgpEx66x9s8wsiDAgAej17fk6rA3y33iK8Rm2iRoSEPA4Swwc5tEx9NhY4o4Zk2QwpzrjamB",
  "key26": "4zGYmW4H46eftz2m6dbzHp13V3Mf2dKKUsTPSJmD3M4MazScLkfU1xoRo9URwvAfnFfKPhejrhR3BQ4bXJ8b5aSE",
  "key27": "VdAYZBZgqgtTw3GjxpdS3vfB7EgCUJonNQNMb2QmiU4zidcyRnEBbd7CWtGEsGSf7hUP1CookmnTLAoBwGqsPuY",
  "key28": "2UcvcrfYtBm4rd7BW3z7L8rB2L7uZhGTpyEcSafXuSNYkChNiCKr6tCvGGiCFDNexU2aQNfSdQ2roJZUvay1Wgz7",
  "key29": "2j21DRyPrfst4fuVUmztU85rB6gNqrqqfGhC7dSkyGCDPPmXuhFcSrgqWJBBVwr6Hyvco6PNQ3AcRmjmn72cQX4R",
  "key30": "5aJkjdUvHpXRqvcomXsYLDRvTsyhqNH6jDwxKeUrh6Zgusnmz2prjEgwYD7mENBzruicjaVys7aSdENL2pzpXjdj",
  "key31": "2eXvqm16dP1Q2gY64ydH5KSPMzKPsRfuPCfnCMs7JjuxqkbBELBAvcRvSjgRoXFTCQUqnfyb196pQxvBgS2fwDbG",
  "key32": "3RWzkS38bD1ZmEh4Cv2UVTGLUyB1JZg7erCTgxVUCYHJM148Fu2oKTd3yq6zmDEimEb765TR2iKfeuymUo9Cckk5",
  "key33": "36vfqNdadxWmo8TiN9F4z3REjjWFnsnAGa3jPfkXZKsSds6me3fvGNT3NRDEygZ1uSXxcynpJMCr15UfWPJ7hVj8",
  "key34": "5859JjCCQ4pttK6nzssr6Td4PBGq76K8jJKs53pirniU7xXbnMnxznUBrob9NKZCwp3czkveFWeF3P3G9FeVAmFC",
  "key35": "3BCktFBQaPGAg8H8FVFtjfaGJEoNsYxEXbZneRUi9pCcwzMpepjZbkz3cJgvPnStoeEK6942PMGSLtgM8LZ9qkUB",
  "key36": "3pBUvX1sVQ4i9JzzBAA9dJAu7N6cSuMiXq5gnH1wjzhba4EJistDhLVjGCFrBRAXaMDj4UzYydgC3THjiujpzVVT",
  "key37": "2pGpkNr4XLA4Ebyd9qcoP2bUCstE76YAtoSVsHHePZWtUQ7R4c7cb5td4SsD9bp8mjWR9JY2cmJeC4viexH6fFS6",
  "key38": "5NU4myPZYMk7owGZiSQktfptcDbKfoH7GtMR5xtfvWFgfiiYMj71SmmykrvJaAEBQiT1jFRz4znhq1cfjnN3LR7M",
  "key39": "Sni7in786gsr8DRmwKyH8dtKR4DrD89ZaEWeCGByhZ8dChnTjQ9H6jUjD6B1w7ZxBJ7pi34Hr9qBW7pEzJLR9cj"
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
