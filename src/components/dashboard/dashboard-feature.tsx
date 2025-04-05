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
    "29G1pS5sCtVtjpxENboNh91pumUXe7dswbq8g5cG82zZR7oe3aYkqAVfiSvmzKE88V1NnVG1hHdvCkTSoetVL4ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUXtY9YGmPD4JAYxozrenhsETz3WPjnX6L72iP7QMuEadowRotiB2Tn9ih18BXFgYWMRMyq2Q1MHfQBwEGnt5JR",
  "key1": "YSkwdW9NvrKZ8utSKXZ8zmcM8qoi172uv6mGYdsjA3j2Ra8k1hnm7SLY98qHhSymkZA75Nzg2denbVVfKDBjep7",
  "key2": "292XwbyAJgEUv7XqGS1zMvXeZxyLYtZe84Q2RRDerehNW91YktJriPM66ujtBTKCMhXMvqWZErKAJB76kakpGFTe",
  "key3": "2vfnyMa48BTNuwioe2UXRd8BQE5RsTfFvCp3fvBXkJ74Y8fi6JV1FY5ReK7XcmpS22cZPyPVkCwA5Eb3vj9CGANb",
  "key4": "4D7sxhsPpPUdk973oD2XeePNwEaox87cpPTe4GFprQDxLktHZnTT5VXPJ362BiYdi9gtwUneCnButHkPGqjPAutT",
  "key5": "2nRcSTb7mfr18buM2FbcbtagsLtSTQvSAQFShaNmYErzPrGfG1RHJqXfNxhAkhvqGa5sNG7skjPm26vbkx7RT9h",
  "key6": "3TSU4rokAdTo6UzTeFoTphRSq82F444t1ZNV2M6gj1eFZSW5n1AkNyby7LhPyoepbsRQAUTzBR9QcjixQGBdWRyh",
  "key7": "2Lbx8eRQphwbS8eyPi9CspsV4KGPPrtB3bsdrUnq9uUB6uu1B4AunxyvwEuyaA7wq9hDp61WvxPGPraLbygFr3j5",
  "key8": "2AxowfRb6tGogCLvsRsPUNVcfQmq7LZaKVVqevCELgo7xDstCCec6JMenEfrXVywa7husbTD8fksrSyTR8jiHhQH",
  "key9": "5P9NY6VHRq4mV3YEXSm5nCrZnFSqHLfCTyzZ4ecF1xFNywjX8yQgavcbM1DUKRvm2MZPhRQFzQkvwN2N6oDMLyBR",
  "key10": "2Th1GxLr6u4FpDeR933qPZzJQwv4REsKoW2tBghVV9NWtLNBpvemFHW42ms69gRCuvWePRoGgE8n1bYFBbGdGDkc",
  "key11": "oDAaXA6TAcwzr5TwAwWg9JFsskUopFrFb7YpZKjNTApLMY9Cih7fdw9Vq4KDfGWgGd6RNzymCmDK6TW25v8xmpL",
  "key12": "4Pam7WsmgwuoUjU3ehDJ8uuVpLKGrkmMXRmX6QCLnVXN7qXDSsWngBUAM31DbRwXwuonDsPa3PYqJMswvnkig8hZ",
  "key13": "4iByCs3eZJ5F7WbnSk88iNfp2g4U3Q3rJWHsar9RWKMrh6hgCZv9XwgKofDjGNaQcxUNSqvq62y8FefRTJzW4HJS",
  "key14": "4TKEVZKhmjqRa3CjigADDze7hXbKkCRgoXWRGpdgxwriQdxh6r9ChnV8Y5Ye2ntFTFv9xnEw6b9QAsyoztqKZZSo",
  "key15": "5i8wpLEgSMg3gd8jYSBHpy2oMeUGirL9G6F6anYkXW88mRyv17wUtX8p2cvRJBebNhwSWmxywdrj6e61QnR3KrTN",
  "key16": "4sCaDBTHsWQS5YTuKNN3kXhygb7Lh7UYwoMnPYPJMDnTzRwwU7h9hDjGkwZ7QH2YBzwQHCnLa8uuJJJd2QdncGYZ",
  "key17": "5or67uqeNqCgyXSo1xKXUWDek1rCedgZ62AQF8Sp3EzPQTKsqWHVrrmjRR3pBueyfYvUUzyQyJfXAq5CQSLVEqr5",
  "key18": "zafqCf2uRs7T3o37z9oQXyL1R7Q1zsaviHPtuZaUpCgsYzf9eJiPGSAFuBr4NT4YmweWnF9sRCf9RAAxKcE8gYn",
  "key19": "gLNTMJtdmVpUhVpGE4EXCJLA2tfbh7zU7u98e6m3P4xUqUb64jGe2RZGrKN8ogHsA8vAoxeaGL9eecw7BWREzjU",
  "key20": "2MC6rcoV5ncXWmSz55Uuyv98cn3vFyE494pGmrxWDVLf4DDNcMy4xJQXTCwHg2WTi94ikggsJaED5geZtENCrAyK",
  "key21": "5NCPRcMpncBn3Zr6Bx3zRXKmUUhKRzC5CK3MgWWizchKTSJLN1T4bgd5HYCVzdbokDVGgVQ9JV8cwRBf6GC1XMPV",
  "key22": "4RpaRX8wkwiKegJs9N3PvzK6R7kzLfy1pfTwxu8GX9VxKc3gNCZVFCJ96WX9kzTP8cB5LWJHX29Xgbq2gGFAVJ4Z",
  "key23": "4JMYTnBeDA7bXnAdFZgBTYAQVK8jFb17PMC2CyVcHU7z4rcj2grn1FQ1czsRyaNnCd9SUZDjd6H1cu8yU1JrVYje",
  "key24": "bUSLC3WVEmne9VAdYJLaF7LFSsq95Z7whKPGyjz7K9YmgK7LBZ9gsUV2faqZwYPi5YFB9xEgJxDrbnUTNgAJ6jT",
  "key25": "z9ypKjM8F28r9PrhxvS69A5EqYWVd92HkimQoL8j3sBvrKYHKsBPzYrPPhESjPne2EDcfqxFpKtFsFoA2bCzafT",
  "key26": "5jAyCzKky4u5C4MVD1iB2aFRin2CZHQw1gJR1g3cDqsDashBU8vGLCRWyAqN8raW2U4WcLm15UwCsULxsTXA5aqc",
  "key27": "59QctXn6BskRvCsFRUoRLtEoAfWK8UjZtJ5WHdgVjRiyZTmPG6bKhrAqAemdg28Ba5GCgE2M5mLgcuPsNZcdxWo8",
  "key28": "4RRXFsLr1wc9qPTA7VpS2aaW3RyxwzvXEJiRedPZXiZjzY5UxksugZQmtSRruzAz1gimbnU3ZJofxHkv2u4JMQe6",
  "key29": "9HLosLXY5j9uXS15poPvjjmJTRbqCXxi9yV7ZRgiGJ6uxrUDkUKUy61J5DyUoL2VcTxt2UJZvSNmU9Q2VEZKGjK",
  "key30": "5bFNifRdwdHFA2yr4Je7Hc68K8zzg7GnXb3kp1iSGdqi6sgugTPzK2zv5ggQA1nXHAqFjrWSuPnVn65AWRjnyxj3",
  "key31": "3kQ2mUzZGC6wTVemqkys3Ewk3MocNbhcZnSq2NXsGr5mdxXzBZQiDFgHZ2bELpRVkWGwhXgoyzU6CUEN4kcgzQJp",
  "key32": "5hmrwJdpWJteo9UTNw3BMGydLwjdrWFF4oWocb56UKwF3i23sMpN7WeW9TvwxUziqzGZ7HiNhp3gNhZqNWJ2zn7c",
  "key33": "DiFW66RzMdytENemWq4zgyavmJEBxa8TJY6NKG9Rdq8Nkh5nrRo3Dusaw9NEE7361nUFXti8QGmbXVS6eH5Avxa",
  "key34": "UuHMmmfvJBHt8vbMW7BaaLuio1brcJpjxJ2CvqjAGbBthTQbdHoZER8XownvYgxQdybim1129q2BTokYFyVDvNn",
  "key35": "2GZ1pWeUwZfL9CfC8y1icMvdYnfdYPTyw75STTnEGWL2ZywVYYG8wP3nkXgo23CFFmdD7jAErvBGSaNs1tSJv6Fj",
  "key36": "5zR6eqSjVUM4PfGBUKi2Lagj6oz6jVRJFRftM2n4coKopbWvKmbfP1TQRJeDnp8FyAQptPE5v5XsZQx2wannjshL",
  "key37": "4SDXyMYQPPMBixT3dLPjAzrPyGnQg6r4AmAeMmrv5XfZqnqpvGEzNFshKfiA5DiTuqQcXPtEg7bAzGSizwv8XX2a",
  "key38": "3KjHrqxL5e9YnH6yJuCg4UqpySM1hsicaSbq9eafhfTJXBJQikMTccHBYKou5ddzs8QbQa92vHhejaHXqY8Y3hKq",
  "key39": "4KyNPrRmY3NbeBHRUQcjxQXZbhrPy5fcwF3yrYVNyjAPYALogWsR8UxLLuMSwBDhvjTuTkjUpHz9KRSNcRyH5nPT",
  "key40": "3PXYkvjybJYnHQygxaabxDExz6edKL3wMafR845V2Nhz12vbLFEEEL1sn9o4ZxVgLefA3PEiqgoWFfZFAGhxfnjT",
  "key41": "2MEcLwZwmJT3U7yWdrjZ7FdVq31f77PeDyrVDYcGevN9MHZCizWppQ23z7LpokJv6L7xDg9RnLzpyceA3JU8et9Q",
  "key42": "5PZsfTUPoZbJSNyR3UnxQUdkdQfTwFpYGwj6cNGhybZs1jWeJrdT8vseMATaJBhWKCaobDTD9NRYYx3aVZLJ2bs",
  "key43": "36MNdtC5zNVqPNk5YwWXjjdsgkPphQjMzUHpZJDmNxnLRxFz8AdK28SyjhFxFbDnUZcwk518Yh6xuntV1PKr4Ybg",
  "key44": "2uQGZXQyeh9V9VfJSFC3vydRzjRwKXMi3LVJw2fKnGg2MDAQ8fEmV6MADkTwGCbSv3Z6173DWz3DGM9rsHdfQUme",
  "key45": "5btZW4mW3ySS8hfzKnoajkef661oeUefRGx4ciVGLDXySCXofSFvJqrSE46VkXWfBv1Xr1diLs6ohtoDPJv9zBCA",
  "key46": "3Lqpe3v9wsEaRgCDZe7Zg5YUz16xWMMu3fEWiWV3SGb1StCmZ9bEaThy8mp8KapzmFgipywFoSYghrwkqqAkaJHs",
  "key47": "3J54tU4hURpkLHNwGqiL1JHJhvmokR4cJ71DHQ2r3QuzwyBFzEFoyAA1YpseAkMQo6bRquDr6D3R2vtoEci1XvGq",
  "key48": "2uiAzaZNzUMSqEUs8gPsDSXcAN3N4hawVtNjXTv1wZm7MZsAQogFQPhfNYAEmcjm185BLWKYzjMRvPDSAA96pTfL"
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
