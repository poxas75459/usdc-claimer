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
    "5t49abMghFEyKmFyv4cZZ4RM6NyDyZSP1UUbmVeMMkrFhGBWN72QtK8A3bmBK1NLPHevf8UBA84nGnhcg9vVCSRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S6zG7cbHnNEoy6PJHyTSyz9X3kHFAS78yL88zzgREVqoELUGYEyUu3V9JtGX3dCLneeP1YbwfZNKDtUKXykQgRv",
  "key1": "2qbGMFPHZ9Fe2TaqoN2xbzscuSq7YoFGQkYg6q6N4QLD46ThEXw6td8MWgA4hx3yYLpD1Q9pwYZrzeXQrXcH2vEv",
  "key2": "3i4eBb9rdXau2uk7c6thDYyoqgwfLX356UzNSCyf5FEAhmsuRg9zEqHgUGjZbJ6o9SGeAE1E3SBWPZbkhgBQo4fb",
  "key3": "3XzoMVHFwuZU7kZVhcoQgA8jLiDcu7fCRSNABzvSgcbjfgvnh4bVCuYdbnC7SwZRe1dp1KdvUMRYqPXZhyZaD4jG",
  "key4": "3L8XAF3FPXthk6hjfUeB6QUUpyiG5H9wgWa9fv26uwxPeuRKc8rMJ6D9iRpQdd3aoQb4obdWq1pvUgkdEeDzbg8S",
  "key5": "2yFcLpoduuNfLYLhHRwHdNiTj4U3ASgtyueBt5qtUyhWSjJyg1o24Nrz9QGoheGC94m1VG5JQeqsWLYUz5C85Fc8",
  "key6": "2kNeHBPD9atDmbxXZXhKciYiENhWNgGdJqVzbs1ScxUnjY8QngMqUMETWMHeFJ1nUGJ98sTwdU23S8EJqfeKuq67",
  "key7": "qNR9esPtqqeHxwztPPFkhW1NNmSxQzoPUP4rfBCnavhBranbW6JfnnfnDCcjz1BNPGDT97aFQrogTVQYY8vd3Mb",
  "key8": "2rfsp8GQq3dcUzon2HzhgDKywUx1ekJEERH2Wzd54VnB4rDQHxg9p4sEHp3AgxbPYjspr5wHBQdUbLh7SsK4QcoV",
  "key9": "5JDy2iR78Z87N9qoiyGYAtVZQRn8Qyk21JawSThws6sCSCsbjaDvjvv7sdaLuLfPKjzBtnjf3KSFxFQ4GFN1Xx9N",
  "key10": "4QzbPNFz3QdxUBeS6eaeFp3FG7C7mrpVMHKfFvJv8fQnxvB3hn8PgzyVoprrq8YsGbkG4yGQCMQwWW2hBdnxk8wQ",
  "key11": "3ocfwRYicwdf6nZrHVtM9bj5D3w5fV2yuwynBdnXMw6JqhNfccC2Lowaz7TCMxvMzrSCLLf6CQQowmz7p9cVZpCx",
  "key12": "jpv7vTcgAFr9T2oBi2bvMJscv39Q7jZxwhdLNYbkVBfha9rHR2MB14Ft2SQkTTMKTxq78aLtz9qKyLkH9q6Avca",
  "key13": "5aedJiGaQgEDDjvdeoJqzmsi6seLyPvzr18oHRHFNKddk9ZsNGpYSrVhvJhkj2ZsXwwUiQvgX6VFSf6UzszPMHZL",
  "key14": "5PD4aveZa7FJ1sh1EHQohJGCSLwwFWJBfj9G7bfE53439MXnqhC9d1xacKALBQcCabdEW1XyUNJN8KKERmMXpCno",
  "key15": "4H8SX2XbGcQzn1bSbtNJpRYrLE9RaaTJTaXH2zjagfm9vYMZaCAEqBrBhpy5vDuWwFr6YkgdFuhS6PcpYKh8uMZH",
  "key16": "xJvyV7vAJLw7Q76zwbwb7jQ24vCgSi9EhgBCpAVyUCRMoJE8HooPuB3mpmywM1BzpSKdZW9UverskQ4ePfNby4n",
  "key17": "o1Cp2cTxUCxwPhit5wGEWgEihpjVn3VCRB5inVNeLWb54VvHf5FpYVrTFxC61bDs5rNPUMq19fEFhfr6w37prXW",
  "key18": "3xDKNxb3eNASWjFBw4726NsFPQNB8cY53b2DRyKnHt9TkqVkfHMZF2uPq3fCW9VofkZggZVyrrArjmRSGiiiWaMJ",
  "key19": "wWKPzcCz6oaFtKeuFmixDe6978aSjz1kyEoQoGfW8VGRCkYbUz1xketHthPfRH9J9eb8Ahq9UZ5JnzKBoaWZ3Po",
  "key20": "do1EDzp5rowYkGzWZnWKhsyy5yFcFthVS8SUdZt2pqWMYgP852Dk6zN2FsyKVpdXTnwqFytT99rTUJYjBMJ8AGx",
  "key21": "34VrjgSckQk3nn1shBEthCDMiDtFNwoY4joF6NMhtzgXZQG52rynjpsWHx2L27N3QYttExFSMQcxKYmEHeM8HvT",
  "key22": "BEdGdDtaryriHcZJdurxWaj2naukhEQBAiDYZ8CouUQrL2DJazn4ZQhhQQ4tKMCYrzNtv5RqtVp6CHyr5Hy9P23",
  "key23": "3VE3LCz5KddBB9k1mJ5QbH13DSUQ5JqwNmSLCUXGSwDb14G2NmqcTj1fJwSTjKq78Zvpgfqds3MvdmJAwYCBgzoS",
  "key24": "4YfQxukcVvyfbV2C4Uy3xb6R1bgoDNnevZX7EiETNgoSXQzRXi4xigJsrLenHgfLnodaenDxY64eWc7KQnow3Lsu",
  "key25": "3uuhJXXTo8mVmhecY1VXBmMetPrLe89YagLXeMQDr8L4C2j6aREbvLnGnd8X4kXH8UbVYmQUdPvevskXb2AkcTSL",
  "key26": "3ZDV6RETQQRLFLU8xrXv19cmQozgwFFXSrYy3kAdXpvMXdmpkdjxEwRh8xFk7hZPxhbnSbFxZG4KfK2PyJk8j9JA",
  "key27": "3PSMB5cRy6mt2oyJGNrmL57wrzUnM535bZ8VVyfizMLLxCjcvjLXEA1ngWCeDWwa6qNHXkZvEny1c8NkaFNXoq7G",
  "key28": "349tXLxH1giAAyBsWvfRyid166y8KS7NZDMLWf1fJpNvcYRtEu62grjiJytCcrE9LvJbcpzPzQoAixE1V5Apfc7L",
  "key29": "2xE6x6AQSA4FArfjdTcoVUEX8euMgCGFnnFMZbmsqhdHEdez4QMrzdYPuFcqJNJQHGiQyzd9wTRTeHNHKFpiUCsT",
  "key30": "2ubVVVzdcX8d5MvVmenNDqSgdUmzykhBQj4aLvo4zBjXQQHecHKiCJ2LEzDY5Q5Fr1DqZjnjZWsU7vYN5fnVtwCg",
  "key31": "3MNdPfJKupJADUyyrjXzXgVrobWBBMsWRRbiwuEZQzKujpCnGMcGE3QLSwkR7v26TduNFX3fYxxGt2ckFYfUu7Vb",
  "key32": "2kNEbMJS8kmnkT6yNLFV7EbRbaBdoaX7hosvn3mKFEpHNBBtgy1ogBuzQFskufLXPh3X6fEdsbt8gZ1nX6htdSWS",
  "key33": "3Sf98nta1x18DSLMzBS5GL4dkipF1qiLfkT51tvKazTW3bD6nbUn2Dq3XzeuuBAbRaaeJpR66dwU7qcBdrGirddY",
  "key34": "52Bfiz4Vs9PWvcYjr1vTyWzDrK7HyNMuEq7yj8MqocCv2ooPGN81pQgXWWyVWuFqu6aPJRqt4p7tAfiFtitE6K1w",
  "key35": "2on7x86bQ69ZyHJeDMV3ogVMLdm8PimJLX9nkNtApW9RZkMPPesfsXeFf2VdZn5TMmrtTzNRuBj3MNcCNfKQhmaG",
  "key36": "2T18KW7CFiyZ49MdBimjsA1hsrDvSqHJ7zxrCmPbWmhLEQ7CCHKZFz7kHo78KgBQsxVCtrcNGZMNENnwqdECDcs1"
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
