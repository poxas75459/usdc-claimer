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
    "5NPu3mGQ2ovzeKakQsmkrw8ttLhtx3AvHvJzGa15SBWE4djUgC5ZmX7pHGJ84itzWiQK6G5RxpLGsJJoHGDVexXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P2cvFKedHVa4bTCuMqig9vA3qftZMUzryT7bDCGNt3GDRGKXC2QQRUyxJV3gK7PRZPLAXGsdWY5ShyXLsvhT1dk",
  "key1": "mznfZX8CwdLmK9mJ8XEbYk5FSJA5ciq8G3jKWCiyr7ovWvrLMx3PVa2f1MdTq58642eCM4eNAfVp1KixaxyGztE",
  "key2": "4C7Mj3QieEg2A13ZCPofrRRhuBve3UdzvFr23yHPRZdkRkr1xKBcbjVNvm31S9gRTrFsnHTo22yHE8nZWaY8TTA3",
  "key3": "JzS2NxBsm39dWXZws4rYg8VJDdVktVACD8jiejap6acC7T7x9iUSiyJNU7BBkfANjJzZatDyuemKg4ka1CvSVpW",
  "key4": "3trEpvoFiZ2UorxeAW7Tu9aqmyz1DuQgnyB1xthiDV4HV373AEzR3wB344wGUEsassstiaJUnNh9u3GpUeroUcKa",
  "key5": "5QiXbEhB7aV7ZyvizErbrKkHLzgufdQF8fns9VU6czKBaU9yjTCumQS8Pd5Y8XQmpGQ5XZMdDKom9VVEQvybGk4F",
  "key6": "3PsY5SF5Wcg6LB4Y1HjhPZ3Ea6AzxvNYPTwGsu14JvC2FaVXtigdyYrsnhMmMsc221nAA8Ryphp9c63ecirbWuwT",
  "key7": "4DCLB1NVeCYst5sUibQ2js3cU8ifVX4xp3vHoESRsg1RxmtgFHgKZU5usbwuxkxfDrKuqL8okEKD89meVusd4qB8",
  "key8": "3vex35s37JuC13DdiqDwtMovt75VmxQNCZk7Y5LRTV4LcguJYkknfeukG8MaCFK1SJAtzuAcQ9yNHvsgqr9h54kH",
  "key9": "m6yYwvdQhnES1onCkR2Vi4VydjyRGC9qTLLHemYULV81RnWQY2Ax5FSVnd51RXJpiBZDJHL9AbMcX5foP4PMeXr",
  "key10": "rQ4U2s7YJXLmcybVcVm5mjwrof42iLV6TjHu24dtEehwWddmjyg3HWszYprvFuTBDY9jRZ7hNGb2kkJmykvtrd4",
  "key11": "2aaBV9VYi1sA2fUapq3vkvsyuSZGLatcE7vuuDs2C44xfJiqLSrc5dVvEHHvgPYgWRwCK44tG2iDLBfXSq2eq6M8",
  "key12": "9TmAZmWvJzMMw1DbQEBfgF11myVG2zuBPK9mnPYEYEW92UrH4m2LhSjhceSfPNbY1atKgPxom8VxuoXqJL3pkpK",
  "key13": "2GMv2BBQiF4mftjHoq49axRiJ8U1v3oQ3S5e2CbEZvpZbSpND44VBpJ5Ano23cfHPXe71pTbSqRzHxqVbcnjXcVB",
  "key14": "5SsgxtL7MrpL97DSQqM8vcXGkfhEWtc5BHEHQhgddz4KDcgWcAr1f1mp7yquKKA4JknYeAbrQLh6BF2w5P3fweyG",
  "key15": "23sTvW6grqzWDG4RiAVJrPLWf2efbsfyuXq6C79mtjy81cH3xCrGpcieeC7uAZ582Tg2ucZ9o4TvPgYSvF1ACvPb",
  "key16": "3kZ2ahY1UUgTY7XcuFT1dRZn6urcPfXXngqadp2gftfcpTYfjVJEUhJT2govry7FohMFsAbmxzuddjGeS5shMhBa",
  "key17": "2wTSUvGcbEVYSBmpvtk1vTTLbi5nDd5TZPgT3euwxLtrbyQjyv48NtVRsZKwNUA5fyrSkFk1H6aDT93rnSX55Ezd",
  "key18": "3oQgUJsZNqRdihHNmamiDZbnv8i2BuHDg9LaY5AgowAus4hRCnwhubb4Dbv1chRkYDqgukBBevHeQ1kuW56MScRv",
  "key19": "2xCKnhaEeECJ9Emr5ExH967LkRH56HAcD7hBXTUp6nWeKZ7LmSfk8QQmAKRPebo4dmmgK35smJGFp65z392USqGn",
  "key20": "3vadEexcxT7GiMhVLXNZdUuFYeYQqmvXnFBP8SPhrz7XhQ7zJskgzNad2aWEiireEbs121K5tkhY6dck9NqRScHb",
  "key21": "reqEro8563mH7iTwp9WQYSUkd9Cph7R9U6mQ8Fj6Ccdy6A2APWwBbVbDkLy9XbCJ8YMMqBCDBjgx7zzvEjyhhTp",
  "key22": "3dVxuckGTNKu6tEQXhFHsdwvvrMDgEwn7Jn1nK7SXcz4LUi9uo6ESWCKFws61npiV3cQmoN44TXNyaydE2PV3GH9",
  "key23": "FRK5LwZW4Ui6v5D4smxRJCv3AXcavCnZx8DnRFovUa6bQibanCzx3CQbi3GWZR3UqQdeHkQqRtymqqdoRAY9B6T",
  "key24": "3zcJSGMgYAiNqAF9hRrNecfWwsGS8LxJFkJ33ZKpTw7JwPztNTiPbAnxLm32MtXnE2K8NHSY9eg2ND7iMsVG9Sux",
  "key25": "5x6h29Q6KyiqF1QFbxGvqQ91KpaM66wSefQ7mAZH1L9CDko1v4ViBS2iCJCSFKfmZ9FmsgzLeDgmYfZv5nDPAf3r",
  "key26": "4xQ7UmJMHEj44VsT6vN12pRBtCQcxBaYVt4rhnxAf4KngmdV3BeHprzSVBZkHt7nG9JewkLbY5pQjQEkaTWtibjw",
  "key27": "2SrcGDjBGrVyfZLMf8bfucnFFDSHnS2uQV6azBfEbR3Y6RZCiEngvCdfPVNFfCmjJdxSLjAZo1WVYd5yqE3aF34g",
  "key28": "2mqQMC96r8rbKkwY6zqkJ9C7Fa1QPC6LBb71QqZZyBYqWVr8VfYnvQ6AezfE9yXStjBymxzjBoRd6tVQ5CN9eYvp",
  "key29": "2Hgq4s3vN6sLH8izLtN4AVXrD28BfAsadKrYSMiXGxc34sgnsTbiiap3zbc7J6bt6VbWt7GQEG3SXEfuZidFhYU5",
  "key30": "2PysGR3ZGqijc2zR5zQvf3HipLmiiCgrJ61fCaykkxVkc7R713ZisEUFjiHkUsU1Q1DYFqmL3uhZewmtJUDjhriY",
  "key31": "2Z76WhCDgkUJfymuawFErk8YoUwKVULR2yigyLSapga5qveYujME9yHPDwJgaTj5zXs5h8ri7KDckbL4XQcTUyty",
  "key32": "4w4zYud7NsXri3NsmJCoB9bWMp8FLpQVxyxMKYFEMAMPbpEHEWjA7gkBBEGyT65nhn1WkWGiMXK4tsWY2AC68WTp",
  "key33": "2MgoEcoudm8gHu4Lg6rHvrARgmLEBpj3ZyYWjBYLQFfLTkMdYFVrFkzduJM98VTHuAqptKkmREDKzpATQxQW5s3o",
  "key34": "21ic3jdeCifjAX2p7PaEXgu62P6yKBX15zTf6WaMhQ9Lw6ukBzUAg7hKAetox4En5PVJcNmmpcSBb3UBJiL7NEZf",
  "key35": "4qKt8NuCFLxqWFuaLtiEPLu4PeMvHF7gGJMpQsxwvxceiYdE9T8EcWoNSRP6DjSaKCdHf6j68UfBdHDxPMxWdUFH",
  "key36": "3maXhrLDJJCbYpVrxskWxndRJDd1tq4fdcpcGCVhtYkkR4Z52sYj1h5Bc1Tynttm8X4M3Chgsb6n6ULYVAn4ufMn",
  "key37": "5FDxzqGm2WgyLK5rpBfNpvhqVK5HNVgsV14x4CTKJqt5qw8TEgCPtxhf1iEwB6cR3qesNs3Fjyko261hD1R3wCZv",
  "key38": "5CeovxontgkF2y1tKyvmFZ29KBn3LxB2yhBQiGRkdNn2TCK5mENmck5iG5uCaQx7VtdL1pjMppJw2qzPycoiv3RF",
  "key39": "3ZFJnA4fyLj5iXE4MJ29od6Qr3yJTvXwHMzcumx3g28M9X38BNDptgof4gejCeKsY4RCySk8i7UCyQFLf18H9GHV",
  "key40": "5i8SgvKkezukWzz22CT4MdpS4TYvcsUuh6Rh4DDNm4vhwAQTQwtsx8Uv5v8CJtryw2zHru1QZ5M6o1r1x6bQxxEr",
  "key41": "4ZbVzoyWbXuXg4B6TxWFsAfutSB14qkqRsfFFtjb5y9j62JPhfEV4nJyjJxV8oHfw5Mw9WCh4G8wkiGLtNpctzZY",
  "key42": "5p7CgfGHrxZ67KSsuZWGGzAnDWQRwErEBoJkq2R3AMxTMw5NmB1VVnyUiU7Mr4t524r2ZVijoHBs58oggeDggW89",
  "key43": "3Q6RdGMCtpnq3rUizoYz2eSHcEUUJRThSbiqPKngpx5zZ8M8ENKN9AxnZbS14q6WM5tQmPbEfWfq4XF1dbzYsL2z",
  "key44": "5ZvRggqJDzaUNuJiosKy8DrCjbsn1N6zc5NbNrvUghEUw3TQfubP6aaXj1bH24M6FfJs5DGHf2bboc62Lv1Sv9xL",
  "key45": "4pCAVqMnozFGxVfXtafbAMhXP6Q1jHXgFy1X7UUBZ6Xnor3qLgL8azntR2NNaKpt2PtADbpQoauysGSieutpY5uW",
  "key46": "Vgu8QnAn2YZHXKgYVZ612ARRjkiFRfXcArtK9GckXb7FzauYJc1JefKS9M2gStn2V8mHFvwuaJfjKqmjmnScAHv",
  "key47": "22XhZg8A9GsjAV2eXr8b7Lxhz4dte2MiwTQwsEzPdxyV7gTbM2ru4MEBhgfgF1EBDQKpdwAB8KX6L2jKPPmhtBgu",
  "key48": "3vjXpeB39ucR6XHy12Cn1mPqUUpN97tf53TnvQfc4BGMd2mPrFcqrWA5T8QE4EKF8vgGpsxyuw9fkmbrY5Y4s3Cb",
  "key49": "4LRQgsNDyyFM4dQxbFbA8EzRyXUYy4zzhvAtUr88JGMMPtvFVic5jMUu39KigNZxsc2FyurWd19w22S7zaRNSQX2"
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
