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
    "4ddUhPfjTjDtqZhajXC5WjGew8GeH8u4afC1ewTCRaVj6TCH8sie9xqHZ1uRtvzfyUyyc16FNQAQx3QiBz56NbqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QKSPfJwFgAKfMhcqRpBPeURXsM8ESqQ62GaDXSZ5mwNzbetLf8U1wQ2Q42Hs83gXj8RKGB8jgsyiHb9GSzhqor6",
  "key1": "48FjEBGjugcaXNV3gZQki1STKZczL5Zf4uiGtqLRP2wQoh7bRDXfLZfDWDvUD7JYpA2mBPFWjsK9bwYHAE2mbcDC",
  "key2": "5hiQABELwhm1C1Ez5QFW5LEzwNEaLSnftQ9tfVD5GbFWcCARa9CiitqS5PYkH9Grcdayoxk7GkNNjcWqPUKnsfCS",
  "key3": "4W7kUTmj9jSk6Fit26biwy769oNYGVt6tzVqRVc5QuLUrhWvpEemPzHoxhqAHf5g2FhJPonFRA3HZL2CUG2YDc4T",
  "key4": "uMoDkeD4GDxqZNQ7e4Y1HCCSRv2TBwT94N2bhWN6zqJ2mNN8kkBYDi5Gh7euBqpms4QFeEBwcUXPN4C8ez92bLs",
  "key5": "5r4bp5fVjx5iCdEeuWpnheAuJTHttxktbi6zcmE425zhpAKiZ7SXA7eqyEVgKochFJiLoFKq7aZU2Agq8UB8mqsp",
  "key6": "3ezA4LtboT9w7fr3iLmQfcnu8TQ3kCMy6XiWxW6okh8rtH7L2thzJWALaUg1SDznqzaGBjfDMCqAEqB7fbEP21ev",
  "key7": "4NxU7phbPtdyjdDLV8QwsoQN55hCeV4Yf2eVFDZXh1hRZmzBkDByVerZGDm9YzcbB6hwHAGkSuyqX5ppyof6mtBY",
  "key8": "QqpJQQ7akSXkmJhQKX1cyPU897BSzytxwFGr3mgcKk1hUwAXpBy5M12tdV1uRiaYFeiZEAUfixtw4nyebpZChNr",
  "key9": "5GBWQRovhPbogR26ye7AcVvaRgTZo4W4a2czs4JnRkBf5zMywnw6sGfyTPHyvWruiFshkAzFmuVTiwrpRJfzE3ed",
  "key10": "597ftqvYYCbzWVZG8LCPUSrMaEHfRVkB4upyjKPEn48skmy4KjaYkYAJfH7eC8ouoa9Zba1cBKtF1xx3YYqNRWWm",
  "key11": "3PApTaRcdeKb3Ki8PBgRMv24sF4WKtfzqU3DnTZsofiooSVdd6wZrAMZKGajkkERaSMUi7QAvd8J7rz17fqqtWoU",
  "key12": "JSTNUdXE7FoKQx3idqZ4WsonTku4EM7zRubkm92W462drdJPnvXKtpBUDH4V6jn4tFNJq84bq9VnDWKHvMk2Yuo",
  "key13": "xtLT5YFtzaKBvqWbTDW3FBGMrdrMWEFGpxBWM9Qq7AahEMXbpKngKf1UDfF9GoMfLnHcgzQkM2iPVqjTS6a9nob",
  "key14": "6DQS9p9MiE8oZtEveaxoqpAep1Ldhbk1JbEdfq121oAjAHor5gqVcrXjAVe7yMpLGJNnseXaGvufLZELfNFgKk3",
  "key15": "61oTLnZRDp2GsqvKTDa1FjnEVGTuPNhaoGUy65Q1qmAhcFaxCw1BEdGKnN94srCM5hs1SmwCsxu1eq2kqui1i1My",
  "key16": "5GtnbW1QQ89SEzts9RqYftdZuRPZed7wDb67xcRgk9C5NiFVmAN6vfDFBYGVEWBQypMyDde1EowyHQaSzRdioLVz",
  "key17": "2kufyEATpV1jQJGQbbXcwuSn6SW2QQ4La3uiQJrmfnvdnRSc7XxpHr9oUM2Eeijh9hV3PV184oD2cnbBaWA2cyf7",
  "key18": "4FCNxaWuFoTA95NFE931ydmgmJzUGDYMMMFiKNHqtfYoRcMBx5KB7LJPtmgCHGVgKnMomXnejY1eq8NicWT92zC7",
  "key19": "55KFwBPJQQiyech7AshMaS1xCcJgr3k4cPc2JfKSDBEvdQwW6KCPDfKBHJtauNY9qj7QBcimKBv6ELMABmsnuKfv",
  "key20": "5YkneuRfdwZT1zsRUXXHjBZt7FbfUVh3Ygp8Y3B7zmguxiMho3X6KDq4ViH7myq6ezfAjsTzx7R4hioAXkxuDZF3",
  "key21": "3ptUXCYsT3j91pJMq3fSkkjUa2Jwrih5DRG1uPaVoKvNdpoPvczERqSE9k6wDcRN1zfCTVJm7pNsAJ8qaJvXPfTD",
  "key22": "2wKtG7xZsjLyD7BjhvyedsW1H3Bk1RETjRdB2UcCLRtFDXNXzkEZFQddxGbCEVUXYNLtjXVsWhBMJqqossxYBLKA",
  "key23": "5N3UdkSCiaH4o8nG6b44PEGrKmZKqJbxTNQ8c51JVyqyV7LeYM44oqq8YiuF6hMgxMDPkcTtAWP3t8p2TrADLA1W",
  "key24": "4YbRbUPAD8tBV82PnTVFAhHRnSDbt6MNKeYHTPRT2dgyqQgrWqHehvSX5XkFyfKjynEF6p4miPmsigZngZ7mad3Q",
  "key25": "65TChpMjbph1DG8Cj3eU5ukfFmRgoAGabc2dsqfnqzLFznWaRS7YEV9YYrvoV4VdS75e7sPCon18ufywh2dkNAjy",
  "key26": "3avVekCwhZ7AcTS6v4EtCYvrTHUn6VKYdxSx3ePNiC9rjCcu6tD3qENj5vpKrzr5qf1NFuwPejjdqCk38KeHSPSD",
  "key27": "ADdK28tALoDsk2Hmw7up6842tAqEKg7zjEwNctYPbn3UVqUJXGEeSnHnb4jygLzkaG1jb2PSQkah4wKbyk437r7",
  "key28": "41yKtvGh42RPoJaUrN7XsGM3AE9AsaQMduxY9jRbcFqGGWtrMxuKeCLw7fwaX42DKUyWdUTBBJWbfu6qck3eN6Ln",
  "key29": "3CU9FcrfajiKmU2HA5NXa6smXfmGAdQPM7mbu5AAXP8qxPrPB6bELPeodXfysRZ4aa2XXerfWDNDKF76f6k6LZsK",
  "key30": "4CkLtZ7J1hcWKuzmUY3x6wnDgBwvdySpDbK1C2q88HszptgP2dnjwfAQo83VjUzSiJ13vcdsef9U4MazQubpydRe",
  "key31": "3irVUX4xCk9tNNwfoav97uZT8DUHZv4u6PRuZDEgrM7HtMtBz28vXZ2JXgTGCuDqMKv6t9wEDAKJkcdXjhVpyP75",
  "key32": "4Xi9vssNtJgBkS6UbkL7H9cMKhCoYjC2EVwwoGnNWrdr7knF36tQpPps5MeVH3waKxE9dZmGqiQ9TpVLrNrTBsGH",
  "key33": "51TXhnAKQjy51Smzy1u34KRj3EDQdvSKtJPV2UeEJJRvmXiQF2uCXuwasy7zpviYrVYcc4VF8XPqgrXtWnSEF4sE",
  "key34": "4NZbgDmXGCbPfazBHCZgLoPhAGyYfPKyCwwo9s8vZYtYs9gTeDnUkeEXDGxS13ohAM1RYJgFz7mAr2YcEnDCKPWX",
  "key35": "5ZG1AFou4FmnDrKuCE7a67MY7GKteMgdrZhobZoRefYwTK6z4XsXpRVUUubeVY5UGFfrp4FnA3yys9saKcEJoPuK",
  "key36": "5XZJTmRQzTKbPkEm3xm9XwDV1qPX8CZwAjzHhQNqt6swPYSjZ9NvwoQ1KCcyGYRQfBiBLvszouQKLhSFpZRdYskr",
  "key37": "4UXnMkFKySEftfz5XZnrmnwJrC3PxgJ7TEzvqMk23hhVbDEgHZ3t3tVciYnhJEXmFiXAXAJRZmosYnBXhzgpweya",
  "key38": "3ai7ifASBXFnbB6b3wq7bxZwjPRmChLTP3BbRcyfGs1WDLPYAzWwBMDBt5iKK6yKGBqn5kSBp4LAftQu9iiPg2GS",
  "key39": "5ZEsLv6JXopWPBGFRXCWLThCFBaS6iPLroY9rqLwDvPNu6mriidBQkpVp6LVvcjyb8QGCEYFerEjfTRvjzj8U4K6",
  "key40": "HzEs8zkTAZ8o7UDDyB3fS8aoFLFHhtCbCqiyciC3q6Sby89aGSEMznAffGqdLcJFTCmweNWLbRbKvR3XpXWgs6a",
  "key41": "2yyMfdaau7qpBgxXjLzK9gAH77RHbVwGR6K1GMpjjsctRBahKdQLih1K6mgNdg4aFRzLb8RrMJk9CqBFifLF85MA",
  "key42": "4EXiDoJA1nqQuKrrQ73ecLzJCv8Rj4WkxZ8efcCbLfkfgxiUnL7XS54AxA21j2gQhWESypuy16v67aDKQQttfCKv",
  "key43": "5FBhvu8wTQYnXcT8bUrCEvSejVz5kmWQEbgQxTxuQmS4iYGXKgEfo5xMbDoNi8zaGndgiwj9t6EXjUFcWP7sBRXT",
  "key44": "65ah8YajjDVKajTH1gSzkG14SGrZTT5Zm3dTha86vE115mZaMLUCLQhxNuing31y1QmJU8BKfg6czsqYeHpSERp8",
  "key45": "67AMCFoB93WgEszyHYKQnjdUf1CAezwMnuGTQk9SZssWVemospZDUGxvH8PN47hgXs9Frmiwn8Yt6aitxuP7PN5P"
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
