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
    "qQnXgFhruz9qrggg8iNJmsMfpEruEWqvSzrAv8DYEcTnKG95t3wZCriJzGgLarv5PGw8q18eoqKoimT4F9awYvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KWWhvCPeVFSEwqdf4qbjqdEA7G47ar2uW92GEgc5rXBuXUeUpvxoFLMT1sQBzomzXbJQ5cMioovpj6QqEEn3cs1",
  "key1": "572mVaXJPPnERLNFXSUrawfLarHFQyQZFgrxtWvknGP4UQihkZVTXgcr89foTJ45BHLv8hqAzjdGcs4qcQukV8Dk",
  "key2": "3xwwNisBfcg24YUcdGaL3sHHAuyX2nAkVrJYsdwEdBGFjyFAqt6MMKutsq7SicRAHEmCupM9aR9qUso9Dxjqnk4k",
  "key3": "4sDroFznHSHHdu1Lh1wic8SfwrTT1bS6awbLnXD8n8Kto3hL1khaqyZsh4PQYNqKf7oqpSDKduYQbefZsatfS1XJ",
  "key4": "5gLPSQ4jjQ2bmNZdVbttWjY1PJ4ocqjoHexGG1vyqm5dZRkEN1ZsuQ9cv9F2H3Ae7VvfBDJBPuPQqNDtw47uuGM7",
  "key5": "RiaKksszwKUf2mA4Mrhbx7Yqj1K9fZ74i6jTf88TgbPbcZha92mCb4wimnf9PCPUXFfSQ1S9frcVrKPG7vKnN59",
  "key6": "4ozea4Z5QbsJTDkHJVtQAN9ZAkcYQ82u1wzWHWVbF8E9wnmmUdcZyzRAVAgH5iyLHyavUxugktpqgRrHzqCn3EXk",
  "key7": "4c2HN24JCWEPqXKZA6yAJUqfsx27oscJE5tawkecRsDq53kTsfAfTyTYUKuMHX3bKGUytXKamCss6wHpwJqjTxFX",
  "key8": "2QY7nC6Wb2Nz92oiY7ERn6PEGGcy5qJmKm6m1EeYsYRrhwdaApzKt2kCjVtaJXvpu32SMNmo4XzXvDw9hrqnwYWS",
  "key9": "53NkhDRVojFbCXsdWi1zjPoNVxSooqv83Wwx1qGcjytwsV9T19BpWqoPvZzXWjXQpeqDwQ7Tr8vRVFeyZs3qD2wj",
  "key10": "NY2FYCZs7TFsjUVqXCfnQb8aeJVcc3x7rmTuHVk9EyTNzmKq6TTg68oB1Xn2fG2Y7P5sW4G59dHzLhbRm5MTA62",
  "key11": "nAwkaFxYv7Drj4iM3uQf7vJJeuVPLVYRgiaZ19zWXpUbwNQMjMc5JdL5SZKdukEituUkg2N5XjKKRKN12itkaeb",
  "key12": "563382DMai9Hn7TZySyJkKYwCUKNuh3mF8hHPfmGLkZAWvEnkvtQrvUd7TDtTdqacZ2K9jrjaypsB27rBBboQNsf",
  "key13": "4hZsmGX2uEaDgR8USkp1jvCWEKoGUnpfHDG46zXogpkvNLXHgKt5NEvX6NQoDEthqHwYv6EpnCeLiYpPjCH8sbF7",
  "key14": "51Ztex9LiC6aMPL71qMoNM1dcPYNLgCYD9RxEW3mY8rEj3Mocc3Mzee7dWc6hPxaLY1kx6RQQEgXV2VWVWMfwHMv",
  "key15": "3N6iMXar44Zb5TAozzcuyvLDXUnN8J1hH3C4Cz3YzorswcwENYRh37qh3hSL6ML8uuZjUjEaG3ALUip5oiDSAReq",
  "key16": "3k5GzdSvom9DTCb7F18GdFEVBwxLgZCrQ3L94HDjt8aJQcHJoezuKGxpuik8LZJRQMzh7xaekZ4c3Zd7K8xrBUtP",
  "key17": "5woQA3ituxqJMauLVx3sso6drWd59cDY1bVBTxx2S6dMiVPS8jgQg6FEfbEoniZ4SuzyKcwD1feiVGmv3Ax1GT1e",
  "key18": "3rrxCmXqGsyey4eSf4p7soq3zruSyQZgqsnh12iYfwgbact2kmYTbo1p8ssPWk8ZFbjmj4z9UJkkBqUJf2ou7df6",
  "key19": "5eaeDiPNLRcvfGLtvV6sRJTKdHBahUFWfQg9Z44EArSMbwBQeXcwkZcRZtkoUta9Lip1fKxcebJ4N8gr67bREbWY",
  "key20": "2cJsHvaZfNa5We2Nzquiw7SPjkNypfG8mRinQaXAhnN54niTqezbVYrVkwyTY5e9Xxew4vjsqTa6apchgapt4AiY",
  "key21": "2ubqHfCu6EJVmvuBWvoQCSksbQcyLr1jLTnf9qJiDjnwFFff2sNj6LHA6aqLTJrw6yf8Jh2RAXo98bfetitsi1uU",
  "key22": "55TVwWo7bKJ2TqKpDDM6wF9gZhPff5jf4gjAGKhRXfk5fFD7LgMoqN8xfrXQzxzmdjHZrubzHns1E4Cyn3oRT1Ur",
  "key23": "3aVhsyHpUg4mmhzsYSwXrWUgbPZ4jzMxXVgdGsC1jojdDWA56YF6naPWGVLqDjnpYjuQyLSbpPzCqz3iKEWf3Tjt",
  "key24": "3FsLcKC2S7LzeXp8wqxXzZLTq1inzFeYKpL846pZWFPKsyTiFPWe4nMW1Gj6rVYsUZPSoBVcaqhRG5K9VuJNXCwD",
  "key25": "3LAKhqoCqdEV4oWUkmAGxYQpfGG5Me3bcEt6mBhypBxQnSSFNhwSryNWX75HgUQXhnhXrWnHCp3buqN5V9AcZWsc",
  "key26": "33AAp4jdw6mEVGhfHAYS4BouG5yr78LfjArSbq5Muu7XYmsjsUeY5pM8EU63ApwBcUKGYeoGRHNsADtJjQSyt3ZY",
  "key27": "43ukFjSfZaMsjXsV2GM435txKahJ3p1uqFE6gxmfB4X5wBT6zGZhSHmLwSS3XbzUgAGSeFMUrSyCdBcDY2oD6tPk",
  "key28": "KUP4HZ8dMXT1TKYwYWSVTADKtJRA6a8cEMj2B6yfX8ySdfU66eykGaiv7B5yRwbw8MY6zMddPiiKtiA58PHbL9B",
  "key29": "3xuYaJ8Kw4UrUgqNwEqec95z8gHN26NASJ2X6f7uBqYWb1q47VJTiFPKHMw2kSjGEnTM83TRJTTwVTPQJJKktVdk",
  "key30": "65GS1RSmj6ny8vmMHmuENpUqEGTBp19njX8vB6DyUz1RaDrSgTN2cBqEtsWQWjcyKePtrTrwQzeCkFBZKExhtbyc",
  "key31": "31eUefzhHEYXLEA2Ch6dQoQuW3rdTqCc8ddVvX6ddkJK4P7XTM4VrQSrYxr4Qxbkh5C2jPUjrPEj794qAw8rTziL",
  "key32": "3Kc1viRWPCYSiZnihWRp1AjGp1b8QC7VJVsCNFfWeQm2uM51S9ggAodn3YL9fiamJZE3LQqnzng9nEjckbcXbu2K",
  "key33": "3THb2Fic3MXRTmo7f9GhpKvKCBUaxNpFmL6gnZKwtQBTuxqJAAneybgeuj9MZTcQLXjFGeEadtCjxtYo2PKsWHWr",
  "key34": "3E2HiKfYjhHdA6wZhAxUDCRdzq6tNrPWL9jCAjXjasEutsByj2mfSe1K41ecGaKeW3ccWxefdJSTVcBKQxGwGPn5",
  "key35": "4HdxBVxoEL1yH2cXbw2V3DvfKPyV4fQeNTQyCdvvPNxsqMTmEywYkXR6sq4BE7ewJ5pB7hdf5nAa7UtL6aFufuvM",
  "key36": "617zFGLBbNQ2phoqyjpFXc3bwRpKoYywcFSjc45qRqU74cu4kBw7rBHvHmca6Bxi4ccyXoJWf1EgHzmRGLF6ZSJs",
  "key37": "3urUL5wqxvfCEQLN3qpDbhsgzZSuygkyFhvfy4RmqtHuJ5DeMsuPPMTQCyEz2f6fu79wphAim4tZJaaMKBM1x5vH",
  "key38": "3b3bf7kT1tunBk7ebmbtTwZ3wHMr8GqQCWpwUceupbLD5mz5QUtcmecxjcdzHkp8ZXcuGt8RKuemU78gUt9GzVrY",
  "key39": "3t5kxjg2TTJoYXFFvZKLizunfgMdncaCn7seKQubGsSUGuXcMtcfmgGPtpRbCbY1hFS8mgsoLCYSXoK48fS7ncot",
  "key40": "3bB4gkd9B8GZaU8nDG1FiuYFaRM1aV3JyLY9tcBow25UpowduiyLDT67S2gMgTJ9UhqKMDviZz2kAXqnVGXJntFJ",
  "key41": "27RozDZzHaeh5cNSwbWYFoBqmckrFdNLeb1BQUQ31gnsL5RdjCtx9NTJBMjeGHjzHxfN6nYMv1N6F9nwoSUHd16D",
  "key42": "5mwvm87AbGPq73Xyx2gzDCZRCJST8ac8exEXYKqqBPZqTQfF3HEGoq3P3uBfZDZYBHpopYkCccoNH64nBg4wNHXk",
  "key43": "2MJRDgUf6KJ2vkJAVpufFF6o8RsrG9EdT13KkS1LcY9dFgnsp2newqrVdoCED8rsEadVr56vUyYSv5DyYR2XtLnC"
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
