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
    "2xKtGCku6KZbLJ25Rv65NbsNb3WYqQobyh113PqLcjt2pVPcMdYLCmogfESEsnmVVErxeQjyWpsfsnVNqePfS3bQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NAEjGG5V2xZ7fG8pFWy6NvM83deUsyrPQ7J6rGhnF3wn5YWNrNQUpJxmeSXuKZ9a1cauwCBgeTfaPWsPQD2LrBT",
  "key1": "3Gxq3cjYCeJonVhoB2cX8Fodog9aZjySvi9qw92gVFWHHctt9iB17m3XN218bTTXPPBqoLarvZGiJHyF5bny5scJ",
  "key2": "2nYyoku3GgbvoAxbmWq2qCJWoXN2fgdxijgxS7x85AqEpp4Lq8yuMr77fTYDSadmVk2d9EAFzWyaVy3fV9GnQyoi",
  "key3": "2bwQWT8YxXFct6CALdZe61gXuWcz62o9qzpRVAgoji69G39axd24RxhV6XdrFZkrPLQs1fvMfzjMV9TfPhvqorn1",
  "key4": "8xFq7F5whF6dfsZnY12RBvXP8Jpbzeb28ZRsTkgK8fUzqtbRGrGDF2pi5ySRoNFeChBhcq7F4epR8BrT2TTkwmU",
  "key5": "3TKbmV9dda3n8wHAwLwNkGTtBsDEukvCe8KMA2V4iyyLxQ18UYqHUXdTdGfSUTkBVkCFS28gxWvTnqrdeMnn13ns",
  "key6": "4dn2noyfD7JNnH25ogFMeP9VxFXbuLMuYE9DpCxrZ2WKCbHyUuSMhmps8ZEqaYEhH7ce7enzuhcesPCQnrYV171S",
  "key7": "5xq6mB9jeALyxiUiDVhQxCYKyRxxSqUaeWrQiEkWWUgMTYqapffyvrXRgPyUimnVvhkkZ5aUQBrwb6WrUcRmV5MN",
  "key8": "4GdSf5Kyen3a2ZfWPCvfY5GrdJN1w2YhHcMXUw1m5iLA7Kgc4YksGLiRVLaND7Jqfew69fpfAygKjqT1WKfJoSxq",
  "key9": "5aXZF3JYZeDE712tqcQe4LmYt4m7cgsC5ospU9PCrmqwY9obqUiPnwoUhdY78Jdc3yQw1PADj7pr5hDbDeiiiEYM",
  "key10": "gGmBxvVJqDUC9HNQHnpcZhbEFycExaHMUx1M6BLGJ5DyXTZTLZBkNxdFMKk3EN6JYCMPjtRodigLE5TZA9S7wYT",
  "key11": "3BNonAjtju8F13s8ViFduYeeCrH3PqVFRf3s1y2qFqBtkdpWW46t3B1Xgne69C6Pxofy8945EAVwK7Pott3QqEbi",
  "key12": "3PZWYSLppk5S58JuoC9Y95SJBX5ZZaxEA18Sc4Rev58VmtJxVhom26X5EmxNzaCL4yxDyKVSsAMmkxb6eFyxbH2o",
  "key13": "3pfPqQFLE1WFkdHdyqBmZikmJgv1phQrv4LAyHk99thQmZc7LPJFiLJBCwPXBxibVgzY9KnvbQ6KuSQnzCRjBhWG",
  "key14": "2Hu57qBRat5r9EeWY8rncDfZBMntX5PgHGnvPvDVBpbGr3USHF1BJYveaTu8dXDUa8MwjfiJ4dNPqvP8cetw6tN4",
  "key15": "sdQPHnupZRAByhQzbQThdKbQpXpvRYWGbxSfo9DcpwXnt3Zg8YMaUBWry4dg98fpVPQjpCETZ17QZ5SwAoCP3hQ",
  "key16": "4tDYttHTwFw6CBDUpDEWuCoKegcaLmu3mXRzqF7KZJDJaiE5VJq22LGTeoe4dwyPZBUGR4vuKFXqbpWXThh3xbx4",
  "key17": "49iAJQX5FjiDRiB6vAMttNhTZ96QWsBV4PWB7rkz1ymTApkd8baFynuqKH3YRcXXmu7ycgF7HLGY27QAv3Yrdvyr",
  "key18": "3X8wWyH2kQDxTdyyFv5Q7eS8kpVB8EDAfq3ENEiYSz7rKSiKA3i7UiT64SDtkdc4HEdKBquWhKMQeqhJzZbpwmUH",
  "key19": "4zoBXrbysRGwdBdztnZ4AiJ6sdaVZQUAKzrYyEyYK6RD7xiYWWSJKbDmLWbnvbhphrBXYUH17KniTmXCGk7wfHn8",
  "key20": "4CwtVLWfNhpEhAuXRG5PAAkZd7Ret1zQ91PensV7Gj2wfjaksWwuBXN62XnrSfACdHGJd9RaKzmgYd6QwjSXoWZe",
  "key21": "kh8VnXxrr2Mm3wqu8PyGGSCrWERcnwiHFpaQZCmdaKsY9ntx6DgcvMjFu3MCFsSr17mkghurxx19zS2naHVPkbs",
  "key22": "4zsF2LSSwfif4LtYGW3svVbYpXQBmYg1zHxpWykfivEx8FtqVDFDxLJhcbRh7QdQcjbicoMQHNk8Pcy4AxxRAmhJ",
  "key23": "66vaWy18LvVTsjcPLgpWnTbCJBoziQaPZuEXtn5yc2FMpa7Ht3dUJby2RUaYEgkLyFE1rjBZXULzxF1o4vu7coB7",
  "key24": "3CEoxJ6DvrHL1uspySprxfeX1Vw5ifJbhokBxzGUoEmu7HDt1zmsYrE6g7YnaVDKx7iCnDwwqEakJ6yvhVaxgSXd",
  "key25": "5sC5eqjebReJBsZzMhU8bvRVQDQ4eS2CJ9XVPkj96prQsZgJeydaMzGuCA4V32Qt9CNPZpm3nJC1Gkr1hS1z5oa2",
  "key26": "65BKgJUFLFpiCdKX9aJA2tE7QT6hMY1sCuF1VyHoFxAsTmH6veAgBhjgq9mrLm8YpeC11nfm4ohZrN3Xvk9zqR2f",
  "key27": "wusyvFLxoZtisnDRJdmFJKe1QVRtTSm5wSWPpdkZooukTHuKvfQJGSkL1jCCYGySyTX18vMVKbhRkD8qve8RbWm",
  "key28": "5aCDx19zPXKmgdvkVxT561Dz2yEwAfRAMgYuz1BZZs81Msu1TC5tvCAZ4BiKnyuP9ZUGDyhg9WpmynatkJ7MmVrS",
  "key29": "3mjL3GJ1zispLEw1w5oBNBFGUamn5kDK9ZSU27YRkBz5LXveqMxkQMWzbHuqe4aqcueSsv2De7TkbSeMC4o1XeGb",
  "key30": "48QrhN4Zx12ZSrsrbtxAMP4wk5m5kppjBAPvgX7P6XFQf3pxPmLQdrxphS2VSEw4iW4PmsMZmc1pNDgW497adx3g",
  "key31": "4aDY4RmpxNgyaadQTMCHb9izet6hQfPYwhtK6p2ijE2n29ZHV5dUDt1GSzH4ZFqN72XAWhz7Hm8YsEfdgsAJNkUw",
  "key32": "3aYPV6eumRk2w5cwdHgrJW8ayTovnBKsfVWMWtQZbzrxB3PeTsV74adkxwF3mgmbiwdy8SQeEN2ShAN4CxKHTT6R",
  "key33": "4vm8ZyWjYeJ2tQ2S7LgY6tQdqTiJby5rAAxC6fxTx7G2wHeJCtEsijqzy2R6ebvFqgdUGGzE8JZNFius9rnyHZWW",
  "key34": "56sFuhNqftDczzADtFmrsEGBDjqPXbihnzoKni3uzAwqFuuJTpeNQamjKx2S8snHW4kZ1ZoUhFu7hSDgPqwiqBtZ",
  "key35": "5grjZQavRCzmfJ61QqtUmxwf5HAcwFVq93DT6L84gk8JUQ26QcfsJSLdESB5S5Ly1q1JZRGso6EW6X554TVf1Yjk",
  "key36": "CFajdVFNYvyMsX2L6eNarzxDQtXpF23MT4ytm3YtRtPeDHyqqfe3fpfUhFZWFMVSXo2YfYCDySWELpfWsBcKkmj",
  "key37": "4agrkQNeN6XxB6FndSzMuiLEySgCL8N2NM7vFb1pFsZzJgeGMUF6vkz92uuHu8nW4VYh8xq2iaJKvXiFo2Xj7D6z",
  "key38": "5GBzvT6v8zUiEMpmyX6C6bXDYksckUghufZkerLcr29qDpSccpVqB4JWT5Dfb3pPAWAm4BMkdyYBAQj6Q84m817q",
  "key39": "3Bm5LpsLEvNmv1jXoEdPuR94eVjzgDrEyzir1WZJkZh2mQGVz9TYetBDYMVcyzwgRxPXVaMuiUvKNPPwq76LVxM4",
  "key40": "2qfQ1gS4CXBtRySKebNkHpa5iYAgZN4QqU9kMi698pNX6cDrUGjC5mx9YKeBmUX6DcaEbRJjJnT9G7LkxcfQbg7P",
  "key41": "5iwnXRUcMHUy4dK2xjSFKFnSkkFRoVicesnR8Sm9rvuf31Y4N2CsH1ZMXXsDLu6XZyGdPAktwKFRRMcAVd9HGFa6",
  "key42": "5sakwyniSWpWqCE4JAff7yTvfx2DPV5GvRMuprBfiSembwtpP7QNwcxgqvHVhtfUYD1ShX91d9raipAUXXsYyGMJ",
  "key43": "84Han6Xe5cjnrTQjTPRC2E1njENo8bXYUawpDgpGP6uc8JT9U6YasUtrksSow4XUKo52uCNAVgeYrfm9V46kvtn",
  "key44": "bxSqtGkQRXZ3nxB9f2sAZFMFPVkxxFEUgSjJTUtDq3CYtVWZxPkomhLMc5Q3AAy9q2yezHQVmojqR4kdainFjri",
  "key45": "5YmCJA4zBUZnGf29W4PjgmmhBHyJg8KhPf4mPbWjSqe51TbEfE7R3QWJgoiWxA1D74fT5fG7DQMgNfRCwE1FXgZ2"
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
