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
    "2QRCNBMXtcFnbXarnToHcdxcr5jvjgANixWsA2dEbGLZmvaB6qWHs3MrJdWCGFqK2PnNTDxm4qB3bBeb6XKuf1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TFM3UQxV4WfV35bJMWq1E2rBRRrbDs4eCwWeCbGjdLN1QxRGFg4YnxV52eL3wdQhMmTUmn9uV6KK4gFCVkybWus",
  "key1": "Uoxob1qY2QErJ2iNvnzoqGV7MBeDwcWpUzy3DC4SFrc4kGuoFDsjRmpyiTCA4Pww1A86ofBzQhhmP8G2EyWiHoT",
  "key2": "4begEDqzTX1ssMiiwtjDE3hhQBFqhp371ZjQx3QUqpNg4ftdob9H1k5FrFJDBiqFMDWZMpTuoSSg1VLwu74AkSTp",
  "key3": "38rTrzQkV5BLyU6earEmy8rKCBnc5dMdSc5Wh1jwvewJJhrSr6DGpcJ83FRhbcHCS4s8GKTyZz6GvioNZ1UPJBBw",
  "key4": "kdnb1TZvTnE1khmi31Fi8VgekudU571Bq9u5CzGM9Q9MDTi77zG2QB1drKX777C4cc4ayZXazf4Vwm8svd5HR1A",
  "key5": "214XPnbiLLenwJ92nWazN1Uu4vXbi8csj6RWq1Su6U2p5ZxVa1adJMan3Psv2fsKb8F8Dpq2cRA9oXiBaxhyYmk2",
  "key6": "5kPAPQ6FqngcTS1grZNxjGLPNgGJ4Kgt2qBRZP139sLLcheMViUq9xVwTuAhiYT7piVNZy9vR1dYLaqPVfp1G6dL",
  "key7": "3UhdCLdLW4LeKDhxGhdfLRwxaXDg5iti6M26wmRYJ8FQh8uCxZVgaJ31VhJjbKaNTFrokA8FSjngihPjUtRRtqqs",
  "key8": "4Y9wS2xFuFr5hMZ2qt4T3MUQ2LijCHQc6ZxcE3gFa93kjLWfzdEKvo8AS2ybqY77pgz5SpHSun2TWU6DMkDwJDbK",
  "key9": "4smspw9ySAPDUi6Lg3fy9cjkHMokCF5DSJMAZSAT5V7TyzpsfQfG4dhodzsqSSHE9CGUA1nbXPpU87rhHwdKSybv",
  "key10": "3MtRZZAq2j5fZDtuK8yGzb1EwAFh5RxBJ3xuFzTxV2ohxM2yFWi1Mdc2F8Qrk5XUwyXw9UFXe9Jb3uVmGGfjyM4d",
  "key11": "45iLoBPzejrvsaCW2fA2sF6bkErtEFidzEbLztSEuRHE5fmsGgW615SgHKex2ouLpbnP3oFfS4r5cVFAYQFB9rwv",
  "key12": "95SkXjPXMK226f4oAhASM4vL2YjvVbeiYTEbzhvRQKsPL6qNdNsov6dxxDy5pGog21mZxX5gEqoJTJPj4vYPA9t",
  "key13": "4XofkFuRucqWgNvUCSYjKkUDDVPQ7N8J8yNsYnjZK3cctgt6QU7zacG4t8UuDi39abzJXMk98jjuYxQujXVQaB4h",
  "key14": "3XEn5US5c91CgxPmCsPifvQ4Q4m21YxMMjaNWSpKdnmWmMx8TyeFuwqR11pSoBjUUy9X6qTrmYKqDeHafYm44wX6",
  "key15": "4xyTkoz8d5EvmP6jzZ88MhnVjcetSs6jnyoMhLUXKMug5ijyJQnn8VY2vp9cQELNxz7KfcjPZZUwjVBwuLgWu2xd",
  "key16": "5kBi9VoWTc85Xd5oHxY2WnG1piKviF1SSggnhyiHXi9tf5dAH3FBw8STsT1hTvL7iiX7PSBZW2WaJBkRRy7mKmRT",
  "key17": "3EHvupFBCXF4kca4ZytbwQWHqxFWYP59hRZQLVuSAQfjPbxcxMT32usQxG7XHvEacx9aURa2yZypBu2yGQ1RYNhm",
  "key18": "5gXmpEZXGJFPTXEoJ7fDpkYmGwFD9Rp9uiiE8rmnKc87DUhg277ibKocPGcAVmcwsY6tHQ2R7dyHgf2rzaRBH6eK",
  "key19": "nwnsy183p82ShQW4mDtzqoWR775ZhgsikXpkxqTSqcHmYBmD34FMKZyXqxJUfd5Z8Jr4vsx3tHP6J1HaG3oR3UX",
  "key20": "pGDkeQdSNUuzRoX2Em9YQYcDNjBzkf1hEwBbiYhWZ9gZkQCvuR3KZq2dDrJ9pwGUHby5CfPna8F2jJiyUCbx4pa",
  "key21": "2fYkT7ke1pewnmh3xsbftN1nfvAAh6U1sSYgyH7FVodwwxGtU1sGiE5wuQMawdLZBCDjro9eZ5mR5TdU9MGwHhxD",
  "key22": "2f1qQKDwjDExir7WmD2PSKd3wb1YBMwNEJoXRgRNHnMBg4HgQvW468y9KkFbwPBa6UcpYBUSEkcG5gpStYqFKQdo",
  "key23": "7GmeX9QZGkEPWuddTL2u5t7nrx1snbShog9qQdKD1o4xBserWiHGmMoxTWk6s31bVRNDMLgpCF4Lz5HqnKh1kx1",
  "key24": "5ghd1HpHAXa4VEqkbYd4azX7UtbLx1Skdx45VSYZKTqkG4pJck2rLXZjCxDTu4pgEvwX675fcsJoUDoo9ZFE3j6m",
  "key25": "5ZqiWCUJJFR3Q1VsCUKY3qpwV4FfiAtGdviRNpbyYGU3PmJTmdkGmZUJDkWCk6SBpbTggXwN2CvvPpU5mavjhDwG",
  "key26": "62yqRG7T49VNBRG4S6UvHRGxVK6WxTLYHqrQsQ2CCp6LbrxEqm4s3Vp7SE6CQ5Eg6G7bxsCQ3LKWbrJygvWPAJ1V",
  "key27": "4FWuHSE7hxGK2PCxHPt6QvSrT28oaV2J1atsyFdhhAe81PTijaYd6Wc8QR7EBJriHdm13c9Qnoosv7rYhd87Leaj",
  "key28": "2oTzJZrihp6tGJsxLncW4i66meMk3D7rhvhnT8yJQJCdzZfdZErH5wSYvPf7g7zye3fyfijj7MLJ6ohR6yAVh8XJ",
  "key29": "FP4u4SNt3LXzq4JgEUQoetv9QMwM1wHqrrza7mF7VYgJMUtsaqE1oGMWhL9ZKWKagnyQccUTaiGfo4m6mkQGPnD",
  "key30": "3y4M3R5uUX6bAXbqPXcT1wwde8DFYpubeBsVNtWbH4kVMUnaMQAwiYH9CuCLxmuLNNDTPz3Z8GyhbgCzyD6N8dqd",
  "key31": "2eKBhxVsFZKNViZjhCQaonsKdTwwfUmy9hERqcRbEjKXnNi3qeYosGoKUFxCkaDsRAD4uNNxKhpS69E5n6CtB3AE",
  "key32": "SXbh5Z12HNZo3a6vWWjqQ5X7eFfdqiGAnyqy1eM2mAY6ChJ6cMFsUnEad7L8jaUxSJwiooTn8b6tcfmmqxUTDDi",
  "key33": "4n6dhzVUzwd8JNg8kAyhSnK1JxBu9VPepPrQatfXtmbXtxTWqMCr9wpkPMXLkqmNPoaZZ5T4g17Lp4pMHXweaNfJ",
  "key34": "5sAkjT5djA1Ajx1x8iUJ3HxCMApkSKnrLVng12mNzzsVdsRCGZhEWEimcSjLytKCdkmkDNNujbSWrjGG5RspsE2n",
  "key35": "2EPdFV3dXS676wX6WQyUeu4xH3TBTwo4izRAeiz8JTW2jsKnJCVwYk135iXhPVx49Y2unZ2comX8AfsG1W4ZXs4t",
  "key36": "2953T8Sv3h5UhqsfcFXxkYkdFmEXP8uMbptBCMWZ6FmvJTLkAWhg8mu7PkkXmDjjcVzDBo41u2u5Y5pwxhHGkJGD",
  "key37": "5wGM5Av9zAWnuEM8FtXtBA9zz1vbnN5BqWymuUKbAGGnXQaGqUY6baDTo3CuDpXc9ccsBrsLo28zyxNPXxxLjzrb",
  "key38": "2gZ64kyQG2ruLVXd8drhoa9Q5SSVPFfK5X1rxkLQMspiCLSYJK4ikmFxUbJAdP41ENCSKGWAYQtX5jYUnj387nnj",
  "key39": "5xzq1FqaCpugf2qUktmBSBxbhkWGqE2zkzXh4XydLHbY4FnpeLnjxgfp7tE9k8a86KrbA9H3cbrGzyWADVJt3FQo",
  "key40": "25DqmZ7fESHHwY1VzdoqD2QU4BYkHyEkhxQ4wms1ogWgAPY1ixJPGGJsELUmUaW4vaimcQU2Gt8R6qXf5YdpxfFs",
  "key41": "4QxgEm6JSSJ17wMXDFs9sRnaJLC3WDBDttXKGpHwLM2T9oxeLu5t73pEhUL4no7LgA4cRnB7TnNJsZ1iqBia89Eb",
  "key42": "4DCvwwmJSb8EbX5CSmmHypmfMnX8VUKEMEKgWGXSimZUEVbnR3YHEF69gZWiMaF9tw3pHtp5vNQLB4xqp7J7hK4g",
  "key43": "nCrnHBbukWaeBymkrqf6HjfFivFrg6maCApeFd9NT1MVGfN4BuCGFHDsXx4bms4eTL9EYerMmgmNf9kUedekKeE",
  "key44": "3gEhDZHLUD6oZCqDmXW8DoagopTXYy9WZh7xvgmpsENjmwRQ6rPb88KHgpd3Qbp911v5onZCmyfyynyftyf14QhA"
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
