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
    "21eT4d49FTjzNCLv7RMBosJkqd5f388nqFSaxWXYRh39yTVUtQnswdDN8xMbEydfD72mXco6mqEZiyHwUAy6mxyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yvYR5Hcmu4pGwCa3CK41U3RYG2HVMajJkH6uTrBnZQkZ7ZHfmeRVkud8gNSeapgG9uhV6yvQNYqd26UbK2vaKPF",
  "key1": "2diGQq9NQ3pHAJ8t8atGXv5WaxYdmaq4cjczfNJRXZh597seXQnUJz7F6FNbSTf1dNMadWpcHqEG8GxyryysjHQr",
  "key2": "47BnEwuzkAQ7DLugdJLHJqi8EYWJ7w9xfBQXkH7ZKaaycQnhmaSvoBsH3ejwFb2BEs7MHgyidsgroZsv2YEK539W",
  "key3": "5wneiu7MShfgvY8zu49oHQxueduBLDSwSkTorY43mDDkav68sXSrHhAdDTqhALesqGwb8CKdaZEAyTYXQirkzC4D",
  "key4": "vGXT5Kjq854TKoicMgbH91sStyt3eUFqudYQwyweQfB69H2p5GC1w2J8E2eoA1qb2jkF8jFHWhnuHieqeDjXQwz",
  "key5": "4UPLmSCiSgrBR94xdcaDt62K5T3a6LDGFTGjubAfQhboyHrAqbDmPLYTnUMUiettz6MQxf4rkpiWzkLFTGduomEM",
  "key6": "46m4AyfYNKZU2xYBtR5rQ8Ei7QBWwpM4cYMUsXXvsCVX8gLJLRvo2AU1HR9DE9W7DQQy73pbg7mHWcWS5337NQA7",
  "key7": "DExFmaLXK8u8PfUyvrcrLqg273EKTZw7ygZjiqA94pqzk99bx7TatuNiR9oKAXbAFHXfkRyG3T46rSBthyWQCbU",
  "key8": "2JXmvcVUtPUip1buusLCJYxvpxXNYYkeBeXAbUnMPztwCJQHejQ3NzEcjzVoWrdVXDCQsHFKZyTz4dNyNqRCzusV",
  "key9": "2GgRJNZetCxCVNa99iun8LcQ6MFUQGMeuLZ9Ktob3j8Z7zQuMjxYLv64j64K1TdVqykfA3k1k5DBZGYC1wM2u6Fy",
  "key10": "2XYR1hvU3RJbCUTgUgC45X9h9sxKXU7MmnnT1WFs2KbfheDKV7Lrha6kkpYQvPFeiQaG28eLQKuA32efXK4Kdssh",
  "key11": "3uacXyLRr4PBq7UUtp9WRQyk3wHNd8m37gcqMQaoPyafQZcQZck1wAd3RFszkWGuuPeT5ebupsuj5WQ8pcWA1soP",
  "key12": "5By6gNuKgd571WmixEptun17zBBdQ1eDwdDsZ9FdvHJrSZ3nkG9h4nW6EYvR24SWaVj7xKEnCnXxW4F8TzusqLGC",
  "key13": "5vYYzMpn3rNSyx1NHhrFfNMfjHMMtWjBf7mWmPQAS88FXpKsuNt6VpyDN3o7XU6hVJQfQrTwH1ruBxfV7Jre1h1W",
  "key14": "5t9T9U6KXYSR64ryGCRqw1xcjkTgq65eydpCvDXdgTEAiP3yi16cB9CniPE2zuDrxGejUWDxfnQnLUkaBSbczBpi",
  "key15": "59wenJctWcozNAxEcdpnMZPAo1NxiKUMR6WzKUvTZ7gCEaNLJaxRhQyGQZthVJYBRQzjuaCjcsPPx9RBFqGENeMN",
  "key16": "5JMFjDNXmFmAtGMcQq6DA4w9raz3Whu2joMc4AfjphU6LxdEbPaMySuaTZqYBqFFszRP8qRnAPy7DCqCwmyFn9SQ",
  "key17": "KzgCRPW1baRNAPXhhVBKdnLrXfDwqBTjUJcXQMMYKZfH6JwKY2xAVtsZdwYyUrggrwkuEB4ojZtoynhL4dWFv3Q",
  "key18": "3PwA1T75Tf9ZVsbLMFVvfGwc5BNgfaRHcCEz4Xz7bLFgeXhsbHU7m2AiWUaDBRGnEzj3pGe9k6HWYvMXQkjeDFsY",
  "key19": "RDdiFeS8D3vNpN5Lp8vTpUybs8LaRnPpBfWSvfbnTDKsEKkm4J77qrHRkvZ1tBfa2wyfXUBHNSajmDNRpCz1UTJ",
  "key20": "4mMm76Hv1a5LvkneR5mkeJkh5F9y8PXHDiNa23brGxXBVk2m69xvq8VPXZPDyGs1dqbf7TnHWCQusYcmXLRYHXyo",
  "key21": "3Ym6FnVmiM3htpkfLzYdUQLZWkBRMCygPoa2cioxJ3SxmdzYf6eooVxivgkLSUdBfGo1t2XrTfpDbfV4fgAWakRR",
  "key22": "bgLP8Ubhk7e4yvhMBv5qyvRF7fV3RNGDSgGzbh43CniRfaEQ4aZWQ3nF1BVHEmDutDf5yDZGweiVLhdejjPkai2",
  "key23": "kct6awNTEcbkceFPiapftWkPfY6W5XnN2arVrQq8hK6dUBcP8na9U1XQLVnF6kmJY8V3vtFL9WuZ8sWKhNm4hMh",
  "key24": "W7CaPpJRpkPQ1MhXqrzCDDY5nMhmSCHsjYHqM42QYuhwkEbKMJ7yJrcYAptc4KYvLLfNAnqECK6jc5QnXGgdZaD",
  "key25": "3bixk6GnkfA1vLQJ3uTu15nCo7t6tVYqjCFBvVXw4iJdQr9SLm4t7RsdPMby8pa93uvC29M9FcfxKUdWKU6tj3wG",
  "key26": "3CDGr41rsZgQBoYjdAUPEDVMf7Ymx5jtAsbKbwqKUnmrs9twE7aPJ34y3W3QMv34eMJV2EHB2RLNzsE8Qf7VNpcG",
  "key27": "3MQZEAU35Sh38VMX1HJDkmVV5VMvLJUxkUwW9Rgr9hTeZcsgxBdNYVkbtK5DV26iRvQtP9HPViSCRSFuiNAvWqGY",
  "key28": "qSTDYv7NQQzHpiBW3u8NzJBuEbbXcWndzZxbpCo7sd3n2P6NKe4w9Yv42Y41y3VGfKxNGv98HhWkmJfQN3Q5ECf",
  "key29": "2DPX6kvtMLviPSpXpKFMhrBtaTTvE7eEfs9yn1zSLGenED5zPgxCYfLeRdx6qFRg1GJUpGfBMskRMAXJLbqhXnad",
  "key30": "2eBJXkjSv7ewwpb5EAYeEj4L4WkBeQ9EX5aPs4WMhFDrqGSw19JHGS1rUH2GZc1eP63UPgjUUSNqERJDJqd1Y991",
  "key31": "5RTzYEJi6RVikZWUVzuJZxSWoswoDdNF1q8W1rEEH7sC7m6H3m96hfknKysdzxHnsqvFooMPufLmitmJTzsHVJq9",
  "key32": "s1rJida1wS3883vGbTaYU4saWGvTBXAHEPHJBavupsz1XaFDzE3Nvrzv5vfb7dMHwiyr1WpXXgUMuhGqXFon5F9",
  "key33": "5i2vKMSCYQ1SZCGNDesSCVZMLdyaz9Prhvm7KmDXhmTWUVsP6MdeWnUKZ52XGjZQboggidqQ7PsQAyy5Ar258vmc",
  "key34": "2bv2espBdmLJU4w2ZA92y4FxUhgKyHPPRD5cePRLKKDKv66R3j79Cy92ggVQSsGRAJt7BkYB7MCAbViiqsaUw3Dy",
  "key35": "4tMv7wQhUJhFGHCJAN8Ffmns1FFyyG92LVm6MwLcnrLEgi2TNn8p1siXCpgEBg8GFM5hMtqzm9QCioZif4K3aHgU",
  "key36": "2gXbLd1KxVgWWUsi1PiVHmzcq9BK5gSCUJ5WpjtAQTej7d6wtNGh8q1c6AxNrEuW8QPtzHEq1qM6v5rLgVK4GZEj",
  "key37": "5kZSxGNU6xVp1ZrLQ67xsHLwEAyJRSBqwtyAdfmNwY5ywAyBARGMETJA8snGV8Bs2MN9kXSx1TQFJ9mUQBXFXtpW",
  "key38": "BG8VoDqV6efz2ST3zV7kVEEwbfQDRcKTnn33WhE69warSmUdCpyN7nrBAYuqvTDF2G3KdvXDJ43E19hbY6Jjei6",
  "key39": "rzrN4woAESBgZhFSK9zRXEkdkHiu7q9QEcCVaURzyyYvBcWzZ1tyZp9o6vykSecppGEzHLoSM3MkyU4KP5P4eQm",
  "key40": "Naa5Aqy2sgkJkHgJdmmN47AUETWgBNPbJVs7nV8TUQX3sGpp4K8ZX86vDPkhkJfEVWBioXpSLWgGZeXykVK566B",
  "key41": "4XxJLzSfYnwW3jTYLy19ZA24p3jJf6vmx8JvkXviuKUuhG6Bu7kHmVqKpQRXBmk6pWUriqa9ZDihQ23BaTFWbP5H",
  "key42": "4r4fwF7kggBTuqkNd7DZFMKWgrsgmUuuxSRcxXiWpseLPCtnJRXnEKdeFiwHJtSoofUThwktDfykWeMU4b4PPPDz",
  "key43": "5VU6QUviamCA6eNyrGciDFP5VsUABPjPgtAhoYg2XByeeRE6E1bZmDeeioxUxBgSAFHgKHV45Sv4x9sbLzRdX9TH",
  "key44": "5fspWtQHSFN58N7oucMzAUGXnUhP25cQAuECkXi2wD3mTXqN3eAwPFe2qXVskRzGftugmxXQ48rm8DWi11SnPvDV",
  "key45": "X7AVrFd3poWX11Fau8ouwivD6Zg62LwCR1KM4bdJxisEFHPJuFBHwiMsqb81s4fi7yRXZDUo1S2EFjY1MpTaZQX"
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
