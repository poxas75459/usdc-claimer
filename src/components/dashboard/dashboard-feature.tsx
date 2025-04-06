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
    "2mUfC3rCCCa2iK4okUNj3rrbgQE3tASrjVtqC4R1SHG4MEHr5USF44GYnXovi3q1SU3aVF8Qg1vvW59YSCKx9NyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zf8eFomW3yX1xpb1nR4wUhXRhAv1wMjeztGitwTTnoSagqX2ddDAChkF8JWtFCfXxZsq71MujBLRJiKgfcMKAAT",
  "key1": "4FPWAq1Pw888ufMhrCbfQ4sXkKm5cBbgJfqRb6G1BLoZ26x8yrTR6bfSHTWbwHH48Pz2SN554dG8oLRG6hTrT8oc",
  "key2": "RD4FysYKeNWxGzncPPNmEiszPKwTKKud1GFh2qDWhMvf6MyiCTCBZgYJfWRHomxG2FjH3g4agRAzTwR68a1pk9v",
  "key3": "VEBu9noxc83cigcgDsXtw4s7dhpka9Dz6RVpCvPBjtcbRTwb85YE65aeRZdxR32o3yQywLiunuo16TMBKV4UuQU",
  "key4": "CBm1g6CTNaD1QdHmEALCEw64gfDxf17vqdAcJzwAdK8YAXSXAd5SFE2BxyR6KirZFPm5zCKNPXQ57uZhNBkiVj9",
  "key5": "5XLBV13fFETwoDmVP1crGZYQwWnoHor1GHWFNdiakc4BrW6nCPUdK7barVtiNgkqDxQaMRbZHqPgg3JhHGs22rrx",
  "key6": "4E5qZnhpbtssUeDo3kttL9nX2SHuhFUhjL8DLhoFKTfx6NxMDTN4iSyxUJfcjfMRYvnmfDptdaGt5avQAzqfqA7Q",
  "key7": "3yNmfyRY4pyKVXgNnPoD8VwBJCcMn5eeBUc5t2DEipsHkvj9cMJkmUfRYRM4wkRkTCjjksXsWWrJh2z8NajecWWm",
  "key8": "5RjCriB1dcaQMC14MLvx8pCozaYfFhq9669QRJHineguSSbUjJ9t1W43BKSK6na7sSxhZTYbB1Jj77HMWe9k7cBa",
  "key9": "3gouCYRo1GiF9EAixDRBp43CkFwQ7pG2HaRqdiiVShKeu5d2byR8CeopUtKgMuxpsRPu9DFYeyysp96XqtESgWHc",
  "key10": "35KMeZbKVCFiHtdGXyKiDe1jm1TjRMDD2mFm96HhNGxYt6qsS2pdvaUdrzGrKPGBD5Hs2buAVwhxnh61oFJyLtQp",
  "key11": "LZ3j5JsCdpjYBgN6pm9RyJxq129VYDdZ9zjgT8xSSHqbmae8MoFqg83WeUhZJFNXma9kDXZsU38UpaGLeaU6Fb4",
  "key12": "4QB28Fgf87JTCXn876rrcBTWDDVDm7xe68q9Wr4xo4Xzm5ojBzSBXrs3yngTjmqdHm5JKLvfNMDTKo3TJNrgsX9p",
  "key13": "2sTvbxeqpNx9KR8Fu6stuphiDDx9UEHbuDzAnYUtxjh73JxVFk1ZY9ukzUk7pCgMR3shdU4P49w636G5tJTxY26r",
  "key14": "4m7sHSR1uAnwpx8sZG4ktw2LHeAY2Q1Zn8hToKhUjYPVxWjyvVCwamLRwzpwpWNhfMv1VDxtag9dTdQ3nvGAX78n",
  "key15": "5TcKnfMSgvXBLJpWQd5yWAuek1UiD7NrGBnrdE8a9YmsBFp6LSYtYx9naNXcK3V6gz5gy2ZSpq71mETSTLyovSBm",
  "key16": "43uEBdBMmBA2xNvPmsiL6jkbZHV3ws5AukPbXaDvw7cbwQJVKhxvPFTWwG3xcRTf3E8AyfsK1SxCVSnb2MpWwmN6",
  "key17": "2GAdSWdVCMxkW6gRor6i7dbMnQyK7hfmRDXg9qLSc2Vv8tudeTGykpsY3ypumAQRrUWQ3b5UKuLr3nwL6AGHBxay",
  "key18": "4rEy9WbEungmkzxpduWtBucAWokCS3NvLrqSTgBLrxh7PyVR2zqBWoefgXQBRBSqxZCV7Bd5Q4aFJrWVAfoniVRn",
  "key19": "2xuz4rSxzTiSWjAixuDzmiT8rfcLiw4Ao3FURvxQMnXAtSocr3U9XF9C1g4zzLbB1sVxYvREXsBH5Werbg9QRnbM",
  "key20": "3tndNXQxftVUUHkQ11HFEQvFE7ChQxjpm74SMuwKKHPx4HtQswEMx4rJWCfsAzX2aZfEyXoENiLMhi9MerL5hHsu",
  "key21": "5ZT8bfcphBLSHnGarEHoNNX4JRwAuEmrMEpuAy62sUhbuyeDJQpReii87FUi5o3QbSBnzD8x2a34Q48PBdzqnt2j",
  "key22": "2t3h7x7zE6Wf4gMfamjRkhyTatop3GMhCDdSqUMh5yqxsiphGNSgFqB6cQCBokeuw7t9fEUSeQ9LRbZ4nRWDgxpH",
  "key23": "2cVQXm3Kx3Ji8Pyig2cidbuFWPF6ZNWnMBZimmgTcFwehdCWFoKoAWu59da9PYm7M3pKYrmxFnAyZMthDvLurtaS",
  "key24": "4X2JqtW829Xxs9NGNSx2WeLtQppxqCa7t8TLaof7mftZ24x3NEE1KsPNHWiKnw1EcyNC4VLvLqAVbevtd6kKxKFj",
  "key25": "CbP6b2U9qnG12KpgDPYWgTGZry3DsjS4hjxDwd29hhTXXi677v8cYMAFtyPob86SvXqifEFBAksCxdJfCHLDpJn",
  "key26": "2wQgUuNr95W57JatUJ1KbBVSLTV4kEay5BgxT1JQ2zXiwxHpfr9LRZfLfDt3JUfSXEwJ4djpewoD5t4qnEYhYWz8",
  "key27": "TqFMaYr8L3zb78JEXzDkf3XPnBEZAYZNTJB1hN9jRuWaB9m3QYcPN9AhoWe9AVUEeGzUVi2Frfz7MmbmChUGkCc",
  "key28": "4CvaCMfbKQB4PBB3PQjDLPY4BJxv46rSh6m59RwHQDp5QHoJZQmWrts4of4SX2cscyfSnCkNxsaNTUPjW23TnPdh",
  "key29": "U4TfrCynkTQtUGe2CmpEhxVKXbcc99q71CgzX2qhLTuuVBdDpaFsPj8NzD5dZWRCae4xc9acFqeKrYvkUG9LgTz",
  "key30": "4FgzwpYt82bBLL8ep9bXpMK68AxrPvgydCEkU8i1Se4FB3WMKAbh9sWtePZNWbakQXzJdFWz5zhM95Z9LbBLLbsz",
  "key31": "2BEWK3qxgdeWPguK7FNxEWkfZhwSzqRZAh7vr7Q6JQuSNiFuukvPc7xscWiWAGNsQ494VKPaB2WurtLCzLMND4TQ"
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
