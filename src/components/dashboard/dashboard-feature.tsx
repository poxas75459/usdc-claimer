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
    "3hE5jJ2HMkt9NT7XukQH5P81nP82xsZpPyQt9kfZ79GLwajCsah1GncKJB6hd31uDriswWN9yaxGqpTFQbbteQks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rfu84Z5MLBajpJLnC77cuErEFZWDMfj2LtehbDddP9Gw3YnSkqZtwj38KsrvSc754Cfxh2w3yD87NobuEErdkK4",
  "key1": "5VWB9aUU3mauEtR23ngu7tfG1LE1xuLvAP4uMVs2zaimA6BmckJKbouKWJ5iqtpZkxLdPJcmfs5TkZzMecsT3s9v",
  "key2": "LapqikvwLdSYfruFrkJemM87PKyBuH6m6K5uecpkCtCkHXW3tmBY7rj9bcYJbLAi8Y4NBJBvgCCLn8ZFMuZnDQn",
  "key3": "pspaPnVwS9ZQ1yjDUt3Hc2mbKUFRaYtqS195YeHX4zdg4PiskASyUV679ex99HMGMo7kNcXPXJhE8VV7pjso4ia",
  "key4": "VBJ3wEU691eu5EQA55EUnBDVLVRBvx5uDCnoiWvpx2PaNHKubUWDpHq5zprijjQfaG21ZMY6tVGC5idEnSUSPtJ",
  "key5": "tKg5Qdu8gaK5etad5kHgFXGoFh9zjN4UoQGHJwnw28GYJr9gbr7wGZjhECBxd2uPnKbRsUVwvFfP6qfz6JV9sBF",
  "key6": "4SDEcgodWdQEGkZPf9zGAyZ6Z53EV5zX59g8Zq8cpyjFmxQCkrEARKJ8dtkYNNzPH1dUvW7Q2NK9UDnz3pYWS7V9",
  "key7": "5yYQ9ixBBFw2dmAnBwjj4hfHC2xx59MffAxV3vmpPcYXSRaM1jDXCDc6UKk2Eda1RxCSZq95G47eThUPYEDrNffe",
  "key8": "wttrKJguYrLvqMLpJ6TzaPpr8MLZz2gAYVZTKkKg1H3MatUtvpduDUR6DVVHmxDWPsKxUT6zNVhoWeJv29KWWtt",
  "key9": "23mMZiEJvp4kocbx6ajJ6ZZ953jMY7RJK2upQijCBqmMimz5CB9mwRNNyPUPJpnqvHqdqLiEyVQMrWHDCVYAGETS",
  "key10": "2BrL9xMLowLxkXuKNUQcRXZMmiQGiPRi4hV8CJ9Z1NUhVgT7dcWj7zicGnExJBSE6iZayw8vvVRm9ntKAUYn38XT",
  "key11": "5Ue13JchNveFnAQihHSDDk5UnPf8onQoZWA5HMQ2auMpanVSCzr4JQ7maA5cmf287dDzaY4n3wz37PpzMxzKeYc",
  "key12": "38p1t5KUi8MSywTQfKfcAoDqadD6dg24NWV1yrQAQcj4xLbgSqtXKw2uNeBz2QzqP62yvK2r3gD98VjNs9Rz4CXQ",
  "key13": "39nq9y93dBX5xgnhqo21QwX7RhxopyT9hoAhe6zSNd8rb7Yb2oGU6Dj9zBCMDtKkU5YgapyfVJgckUeCosqgwFhr",
  "key14": "6MsNpVwssgF8CBYBuMiea79dA25rXvJD6H8AKRvwHVNQnFsz8HtP8gxiWYezLxikdmHVLDJ3gQWXjwtDth5k8E8",
  "key15": "26BU5LCsHtr3NP7N7nPKvMDQEHwsGFRL6AAHC5Y9d6zMiL4PwgbigJxJiypCgSa2MR3WP1Kc7iWMPnF4xDmDpVid",
  "key16": "2ww93ki4j57vGXuECAuLpPJtYTznS44TGR6Xdc7DzmpeEibQV5TAf97RjDC4pVuXudi4AAze2tMF84zTHv4cmmPA",
  "key17": "2C6eW1T6xf1bEKQjyLrdGLh9xdFbRELg8NuEkSuboeKB53XQ8Zj51T7fY29pCRjXHSf18za82VZ59yVj918VbuYj",
  "key18": "2SZ2v4ANrsFQCqFuuyki7UETdpg237FUf5uDZbnph1cYFeejvoJpbpcqPmQWS4XTNLYdp3x7bhmV9njrEjTo5Tqp",
  "key19": "3ft6WhwrtAC2MsKHswbjvDxR1tCnz1kTwZ6gNLW98gLH8Zcad6SiRTUCQahrUyimkYirEJ4xEDb7e7iBGvUzdjFN",
  "key20": "3wmYCEfSpnaAQBtbEsJ8UpJP67zbjoBigr5xtVPCEJMFEC32HmMpjQPKkxkvDMpV4NiAVdgoam3vyXirUHreDSLk",
  "key21": "4rn2nJRRGyR3AroFHFR7cqpJHLh2Pvb4WxQxe3upa67URhRJYjF5NywFRHVNgrq1uS2bU8pdmVuo5gRsqxWvs3U9",
  "key22": "3AyQC7n6UBEpsPkrr3RXec2w82P8qhXkViBQWFmyBN56UbNBK34iDd7sYWP9Rp5ENgbEcnpdRkFFFeRR1LPVSPf6",
  "key23": "4NW6hqYQjFyTUwt51pdcFZQHdMfSNyUokxScZ341tsURgWRuKDwg2VTTqnZaGLqn72VETgnnFhYMX9Xk4LQdkzPu",
  "key24": "22TDNshy6uQQzFEEwS8R4zsJq1G81whL9vcp3dh3R8v5Cset5F1BYSRxCHH1Dn7awK2hHFtTUpVsLpS5c5MhQGTZ",
  "key25": "3XsiSXPjVKhYtDepnySJUXozoRiPoyK4RG9sJ8wEQo7FyrAHciPhDG4nPWn21R31QZ4999uWXSUR3rYbGeMkcEg4",
  "key26": "2kAdiKUk4T6CjinUdJYchwDJTWUMVRrUo5KmbH8FT48FDbPCvVsZ7ShwbFtWFX6G3Sw1hTiSVxbqovSMBvXEVKCo",
  "key27": "2vZ5SQpNsmUt9N7b42yXVrPQBC2fG3UQJN8ZKjz7C7uM9o7tyvuP1VXNpHTio2rgfe4rZwXCQx7hUADSNEhiPvtH",
  "key28": "48fXoYbR44QPqbTERjAZqPNeSDFae4ytECVjFrncrvbWCss8brp2692429Vp7TBypLgSJFpUQwVQHGyBatjkHvak",
  "key29": "3Y29GCdLQz9rX4gMJbCuYUiejrDVjVg6tu5qPQHqLZX45fusuKT8MfcUs97WidYPZAm6GtdGHRuf9V59UfsQy3nD"
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
