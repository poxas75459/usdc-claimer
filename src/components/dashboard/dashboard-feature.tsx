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
    "5fW4PgpVckEawjJBt3Yf5eK2hD79JuQwCS14XXDfDoG3vhedAcgWre26BPEm9sFhGMNa5JrFAyEkhaDoEXHFydKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fb8y8BNX2mpSzGHh2Giorn8UWvtTfPQy45znhcxsGTRRVaoTYEhad6rpRcVVZBD1xSGKP7tRCThjL995ou7djya",
  "key1": "2Gdya2pWev7PE1GpMQxJpbCgkzbEVkspQb35brjrxP3ggHs3JvPRL8NvCBnmXFF6J2ZHeA9vp575rckPWKTcKen7",
  "key2": "3U1PnKoHbeUm1BuYYhsJELhuX2H8SA2SoFTUSX39i9ZerVUBb62KMEGCi4iaEWrCC6u551ZapcfumpxSFL1gA1sy",
  "key3": "5aPrJH1KPcoRBzGLgYvxLkcSCpYEoZsyerDJoNCb615ogfFyL6sTe7GdAyarttVuVUbysWMwmBh1WJqwbWW6jFqA",
  "key4": "3cdLmEhpoS53HoZnDeZRMSStkrNQVfzAAMiQxngZoqRHit5nc8nPHUyu9NaUyHbWWupbii97LwgUJekXreAfqeB8",
  "key5": "2uE7DJKYVNK16tLKLPEVsT8Kp1i2xn4K2RvyYk3wh5tZFcDbq7dscWKYmpKf8kMj9YFTEezAqqqRkzeZVriiJ17R",
  "key6": "2vFoyeJanogZ6WeVdL2zR9rG4BNCZc9Ai9B8U4pdKH7cWZyqiVw6t6fLXSQC4hEGbeYG9P7zAqpziHAHSDCwU23G",
  "key7": "2yqnaEzwrwCP69BYsCHeyEeYURRvqyRje9tx7UQXKvoTeuMTdBSywE53PRpxCTafcv3X6jtPtWT3mqXpubx49PSw",
  "key8": "5fD1wq9csRfTMqhovDshoydpFCytz4DzzgSZgQAUnhdDTmrKqUdm7NGaCJcMEQfpttwUMJsaq6sxn21x3qzpc9Ys",
  "key9": "5xQBvby8NoNvuvJ93ZntGZcw6VocFDsPugvacRkJTpHz1ivVvx2qh9WePwNyAzFDpJj5USFPLxUHNQdYEH3iwu9N",
  "key10": "55Gg1g1wiDFe1LxUF4ijAfAYQxoZ8QXavqHrrz9HpYazZbcn79RNWZ2Z6BPhdQPczqzvoEy9FZkegjSm2XFinCGg",
  "key11": "fsBgof6UxtgMNQSodGm3bLs9zUYNsESgwNDhgQnjsNFhUkS6uLiLfiTkhRSzBJguFuAwJvZAhs1aAJeWfpDB53f",
  "key12": "2KcJY8ziwbrZu438e571c9n1psNRA5g9WSdTs6C6nD4L4oh8m3PaNdDCqWUkA51CarUoWCoWiFevZYWqUhFqLFxN",
  "key13": "4TzUoZrHArujSH5hYHbaDYoY5jLqi46ZZRMdWt4fjhtNTTQ12vB4vRiQ3WGRRqGA2wf9hnR6So8dzm1QpjWWbvGG",
  "key14": "5LD5apXUhMLUgU2HBCAsrb9eJYt24CZ8yofryvw4Vz2SFwA15nNR5HFCX7ePSDStSFkyEkgBJJNML1rDp5HTg2xK",
  "key15": "2p86njuYRtcjYEqsx1wa74vrG1jdLfi15FFYst9wTw1uJ4LR8Wy71aFT7MpQP5RkEau1gk6asfJEy7XBDtq3v4dC",
  "key16": "rgnMxGF8pUYTCoFAxJ1TUpD6AA6FesYwWfYYijcLPVdNPPtrRgr7WMGLRT2dT2ajELDytaQt56UyMnYBxPjMjgb",
  "key17": "4AehLVnDJTMvH59UoqDYifcxVg8SCvq4vkVYwNMLsXwPpcJjbJDKku9K14uRWptVxnqNtYrNg5E4B89m2nakDxFR",
  "key18": "yzsnJcywgeuKpvNyWR6DbGkEEQY4S6VyJ1Rsq9dCwZVuqqjgPXMb91pLPNx4mwW8Dq1nMpj62fHAUPAYEcu7vUk",
  "key19": "2aRrfqQNE3zsFnqiY46oW4GyprBnGpkJ3jVncAizftugoMBvtZz8dg9X52m1LEA1ZTGuKNJNd743owWJ5tu4gtgg",
  "key20": "5VBhhCvs7tg7MvjjZoM2i5jgoKHwLB4oYmWaDr6zypzzis48wbAdfEnDsEr18VdK1yL55T8vMxScAaxkGy4WqEDU",
  "key21": "4AWMkf3gmMFR4831QS8EvxvTzjERqygsB7Ef7FLC3ZPLxHg6t19C5qpxMYv1rD7uPhP7CY2vdar1zJygAcU91adt",
  "key22": "3kHDywBmot3EMgMNLGj5SzQmhsfH5s4BhchaTWBzSiSVbVf4fLVjEzDUARuFh4Js28sSZt3BVRvQUPNawuk2hhjb",
  "key23": "22NMTnW6zHmJCHJ5AKoQtutXFZxo8szpwfmfYzHAB55ssW5moNJkD9eKWZNu6kEBUCvUHx2zMKsnQcnPGADPSmop",
  "key24": "3JwJog4vqaUxUKJVAE3gUDMfGWR8dTphdqUjor3GMwsoTquHWRj8wTEwy6EQvEzZZ6QLtpyFKZCiHPiN47PgBCJY",
  "key25": "FTwBjuaaLcPW4dDnyQ8n3gyinEp5yc1iPBuetmiugSM1M5kERTHjzCFK473uBfRPCio28gNuaapPU23ZgBeCHvq",
  "key26": "3UdzDKxFWEAt8bD3VxsDwoYFgR9u914EcYjmukRJpP8edmPQV8rx5p7TK93rEq8rsiexrHWoyYkwPrt8Ukw2mQdy",
  "key27": "2UNj5HWVLFeuYg1DioaBBzRK7qXQ6swmERx12v9TrrZfwijKoXMuysHwzTMnN8iwzyUvBpnaJoTsS78AcssbDQyw",
  "key28": "42myUuia2eZDCBdvHhgFvL9mNeDJHuvUGNEua2gyhN832AoixceRN5wNnQodDRap9r8ouVbzXoiTFJYkyDgXunBT",
  "key29": "5bdFJib3PUr4AtssNrtoGTK6VGrtugRgG9Z7fN7CtJk3hqY1cT2CzycSarALEmk4AQywz55xGBqMmucuhYwBdfo7",
  "key30": "3rYMBFzT1vpf11TkkWBgd1jABAy3QECBo8wwxV4Carri9waB47JV2wTgjTNN3YsPkn3vsMUexVnLNTJ6fnhUmbgj",
  "key31": "5GZyrM6U4BkeXAvexh9YLUhyMF3SCTS4rgbUbb5DhpTrenVvnxNy5iWMWtLz2XHs2hmR3j3wDtMJ6QQMZfPSWJGh",
  "key32": "4JKwAKa7aaiKPj1AMPRFWjXAeMQSTDXzw1Pb5eZWQ8soQusLDprLgZxp1WGWzvvCYr69sL6jzf8fo5tGpy2NopwN",
  "key33": "aDavBcCsxYtvQspQBvV9ZPUQvXemEdXdXYdAczR8TRr5QwEZkUUVtYNNTFCZfjskNgsSUnpmjktwb8mKeQVTbne",
  "key34": "KBPM4DjqHnGMKmUT2LudKtaiDoQzWWernJM4X72YDAHwpC9WtBfbMF8hgaGW7a8CnVuMEsEtCMeAZ3PdjdojHdS"
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
