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
    "NmxRLMg6KBMcE636CJTMndVLzVQmehg62HNJNUo1oYEcd6WiTBDsDQyJ2ZFqMjmSYVKJkC1pUnNfx2QZYrSPEbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMxXkhjYn3e4YUGnEcMbm94EFEzt2UfeDJ2SJupUtEswoMQgq7PM62gDU8LRQpDoF7peJopzPLTheuu5p5Cia3d",
  "key1": "Tox5sRxcEdzjGWGbzpEb371rqm7iksmnbGcmyeNj7qsXXq9bTj6A8x4LReLkcR8zbn3gaDws9XCQ9vhGTVHFjn8",
  "key2": "KQVv3r8UqurWGfataGfvRKy7wyoL2d2aMbCkeDuQPfpcuTuwVTMo3bG4U1WuQZzQRZ3ve9LH8rb8oMuGb6eqwdu",
  "key3": "62pzTV1atZdHLEhkZGgTKEc5pCaqk2NtzKHa7uC7uKpZ9VUzqrUoaMP4LYpSJgSNmX7SF4zUuFBi1GCGTG17Csvt",
  "key4": "trD78SsjtUefAUsir7Z1gFBFjndTAUx7Jq95ssENAAv9ESLcS1NEDCdDbHAKwa44hytTeNn3B2dL3Xf6b9taTGQ",
  "key5": "hZkhQiqPvvBPL3Gv7SyYorUmEYDNYydEFwP74x3DTfCziCd9DcS87JzpFZM8WSTsk5pNvjAo3Bq8pkXge9A9NVs",
  "key6": "2iviTMUnu4PoD5fg4EiiaNuVHgaNzwjKyqTGhA42MFzec6PpbJ3TVNFD4tJTTTU2TD8ZTVZ3k5jnFZoWq6ihsLYv",
  "key7": "3MfQpVZvoHD2kVcFKKiKSzbjGdU3gp4nxFQogfCsYdVi8zFscCbgtgdfJ8iPvSPec62QS1Pydq3WAsXc7NqBWA4D",
  "key8": "NbS1WAh1Z82LBpkVQeDHsjzmEuKkGKVa8fjmSRSe68BAjoBVSJYQdvcJPHXokfKELRdH57awUQFHGjHsDLoLQZn",
  "key9": "2ZM1iNtSCjUhs2eFitqVsiJnfxPHmQy6XVdcZZ5GuQQeYG1fd9NehtMEEWhHSqSb162b1b2Q5eV2ZRnMTaoBfmBt",
  "key10": "QoDekpLmCsWXac7uiUQkbZTN4cwvEZZ6io21CWKWJeGVbZDwxTEBNgx9jsEUxQfLkgXj9VvWr51uJeq4ZPuTjJW",
  "key11": "5imipaMwTrCKF7aZVxSuS7wWLA1hiWrw5x1Du3MUgccbsVeMXJHThY3PNCVs7pHyevcnQSjMTpmWTMp7HmihG52d",
  "key12": "5dThGgBbXAKKvdqHi118nKNLsEq7h42HW7nwrr8cnuQhgeVCb9Bs38EDTJKpACCFCwkcF3NusZHQ2DV7i8Wn6qxg",
  "key13": "2JUUxJ27xCAyZVLHSUEZjY1Wxqbaq3NuwrR4XUrJszQ6GLGVNPHnWZW14HxuBLNtLpr8JmZGPHyaJDBcZDqqa38N",
  "key14": "ytTyoSAmxrZTuL3oiXVyZvdWxVdoyUAKmyf1TQ9vmMRDfDL2nXamZSSfAdKvPdKZTVEvUPbMW6isRz8Kbe8vYyK",
  "key15": "2cKuwrXUow6B4JQo9puuQdv4ALWcSt94WM7iSXuciPPPV65WzxZDWzfGMcrxHi7qte5rNG6LTcgHCo81c6MYzyQB",
  "key16": "3VZRWXsyfBubW32g932LVsnkShRcfdcwqJrXZ3w7y1YgfU93r1MeXAWo6MxD6EBJy7BfM1aF9yb13vTKsEDB2bAV",
  "key17": "4HXHEbGETwXP7XhDAKRPgiRo8UsoymAcAbsSS2pqAxFqtscrXvSoC8G4WfdCwCBNN6nFeqYz75EBzBRa8AqJUqM8",
  "key18": "4mcxn13LdXttETAhAiz1EhoEQJzpaq3WPpPg46eFvTAHLBKr25T72QiK6hvPdydzEJAQNDgno8SgSTVeKfnzxTxK",
  "key19": "tZqVLXuoDp3oMSCrej4JLHVKbNuW8LAT22MPbk98jZ6P8DdKKL7QzGJW4MFh7mLuNxoB9NGA9tpTHEDEB25e2bL",
  "key20": "4tGWEopvgNUefi24Eg5Sh8HCamC3muZMyWzi5fByW4nDdRxvTUNQD2LmpMVt83wnB2c26bnXuwCCwLKv4C1naM7R",
  "key21": "2yts4xajo68pJ448zYBNrHmtpzrXjTRA69jTYKLsAyT9GRh9p3qa8ogBYZDAcn79GFC3QUNnBwUQLRgSTBb6HkPF",
  "key22": "5hYAUxGhqw3HiHSPaLpx4FBTpkJ12dAaB5mR3aHbTWJHsXV5stchQbpCw3bTCjhZAeES487uMCTFR8ui8LXTQT1U",
  "key23": "3xs1zgPrdmA3Sbi5bD8qaFxSTv4QRF5FNJdcf7nGVT44jkDBrDu1KJTUB7oebY5oii2SqstVKuQaM15KrLBQmLNy",
  "key24": "5jN8U1qL1uPGUCs6jUY8xsBeDmq28VQhmBHh8QJ2wucH1JMyQyFmbX2ofyG915MWMrBgYpsKPW1yrCnhmkkfN6y3",
  "key25": "4bNpQZmrar1hFuA83QJq2ydQJ9xMPZ2o1atNvYjotjAhPirzEcFUuCQpwg6pyhFESowGNu5FW2ES9aNFcvNXzghM",
  "key26": "2qLqakSQE3ErPtJTRBgjLi81qVxH9H1dTGJf6HxkzNNKZhWSJ9YB2QYf8qb7gAvS3Tn1TupK1n2MKDDgHAdZHriA",
  "key27": "2HSpVVu1GhZFVduqe8myb4T2jcizFEo5LWvo58gWK17sdYWqqAL62wvMBy6ZP34UKGNkFPYguDoPfyv7gtFnz2cd",
  "key28": "5SLW9xLmgvGhSTJNSYf3vKChc8iU4gFR5KUHFGwssg6cHytqAd4jRqYPLuMrtWoy9nNMozu6nyUr3VJ1rbywo8xs",
  "key29": "4YLk3V3wPVoorGc7sDqH1gXWBBbtUCkcuV7fWFf4VVrYX39yDJzFXYK64Qvyv59kYgGUqpSi5EncdE6Peh8ftjgE",
  "key30": "3u48NmtDiRXCZZGKin7J9WT1CrzRKE9EuVjJb715toFoyfet6uhTYa8VFndc4NiUJEJbmahzUF61QJv1CPV8SJEt",
  "key31": "4CfhhzNaYzH2kLWN8HADj8ceGVDSCHTSrTuoVoT2McTgLUTitrfBm1ZaRbMF3QP4XH6JT25TgoXKV5h4GZut5kSs",
  "key32": "5fUCfAKaQ2NQxB3dt39XRGRYkfBKdD6rekgJgD1bQ2VUeTtdQotzWEdtCEzp47KctK7TZrJXEru4oFjn3eXxNDe2",
  "key33": "3MetLxnnsY9Q3gg9d74wuQDzmP49ik9YzrYZeBf1TnP5E7qwARXmBnALt28om5i5jxeopLppkCug2ojB6mFT3jkc",
  "key34": "hkk7nA1FFYfSdDc1BKDDzBmhpqnM3S2S4ZrvV1VAMDYVVoVs7coTmeDPmDd4cia8752ENzspN5hX4ZhErkfdaqr",
  "key35": "2YxCF6prNzmiZX991ibtpxbLDYQewmHRjrAdNHwDuTMwoS4GtWh4eL9sZJprP15xVVNsWCJ5dXPX1UJtZ71GmA7M",
  "key36": "58kYnVKg2G4QQSW3GvmAsfKS5QTNjCpQdZv2ZSAMNfcSeTMswSDhYy4LoV61NcCjceVmwiTBnrwyQjRCqmLPef1H",
  "key37": "4BFRzrTfqWGfAQ1S6k6fYhFzwcW5PjoTDBn4LNkogLh8a1CErTELcDeWhtfeBBDuJRchQ4eTiM745F2HuZsLaprr",
  "key38": "5cvUeEzuN3susN92Urzz4EsQsQaSTuqfTWZmU9kjNWVL6v6FfaysbMR7imkgzCMzZDmiweM4rMbHvswCvCVf8iF6",
  "key39": "57pgiwMNTTo3VLpXNxAVCrNyrrv7mrM7VR36JkaQXR9o5oWtNjtcrPKYibtGGkCNtEpoHaf9uqEWAAmCdTapp6PG",
  "key40": "3S5GzUN6Jwp6Kv13VteW55yEWtM3Aq9q6RwjRdwYURqNPheFBkidQH3WZE4RRteJfDCpfuS1x2DQZMGzanFaNuEz",
  "key41": "5KidN5kSMcGbzZmh4EsTcjRZFuAhK3BXaJMGe8tHCm3cAyM7LJg3WF7jfhvXa4E5MwX9rR4U2G7vdUMWzRU7YPYA",
  "key42": "5pJDnh7tRof7txVyPEprphhnXVDK2omMHitLhqLpDaajLYf1UiutcZwfmET6iMLTrr6UY1x6kNsmcWzxPWfaWpF4",
  "key43": "256zHRLs63dxuzyyPj11jTxgo8rzg5DpGvMmSsYrm6bDBUKov4EBiSiHM8EXxX3Uy11XkHYdatmwASbxty9TDPft",
  "key44": "5Nyk19HK9iujG6YdP1ppzKvBm5GTXoL9rhYphykPXyqEpFmJx53mnjkXbn5AKUvcA52khtZW5nTeXN1MFRq6Vtt2",
  "key45": "3HwRjGZ3m5L6cc5VC7F6veeHUuVa4RD79SgZx2p6eouaDR3Hi4itjxJdnwsdo4A1xJiQkKALTZvMQhDGTeL8bKdR",
  "key46": "2Py6JzjnWhRCXLbwQdTjECsEKi1iREccK5n4gW216u74VPy2kaB22JReeBbDXrWrZ2nU9HGAMU7gsSkpPZmz5zwn"
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
