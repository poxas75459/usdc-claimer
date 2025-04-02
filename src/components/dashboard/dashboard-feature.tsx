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
    "4rByoQB619kXjiuw7htEydeV9VLZHsWBtcgkjvrtEzeAbaSbP1LixTqqa8B688CHoJPAJUKiBaAW79Pvz3yfxb8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SER7yEkL4Mzc2o8D1YKzNkjKqRLsbJ4KWMgrZ74jn37zVcFGLJYk1ywmytNCxq73KRw4BE4DGXAq2WZfPQPzkJt",
  "key1": "t9p7hoNLBCTNCpjWMYw6WjdmPp2JXaGHjW8Z5bgTmsaQTbV5vFcgnC5mStkiv7Y8Z9W45vr8L3jCbvwQoGmhbeb",
  "key2": "2PrHQRMDkhZLTGJ3K9w1XHSrHqSx6tWV7Cy2iwsVBQR4w9wLdRaD1QGU9GpJQv1eqDCAC2mQBb8rwe7JqWAMPKmU",
  "key3": "4wLefvLuZhCyMXnMLHVBXhgTSG3DNWEXrMomXcnvj15zYSwTrqEemuAqa6Er7HoZg99e9ZWzfScTq1thx7VHuKXo",
  "key4": "3HvcnbpHHG8tBbYgW4n9cVoqYwV7BSZBDbxPxikFiTqLUYGE5iZ4yFgE3Ka6vAPXqT5TxzRB3DfMn5zYG54Eedat",
  "key5": "goRDNkDmWxxZvknKcQJfeAovMGvk7uSvaPoH5bCXEA5XbSnn5SPPYF62ide5dRcHr4rbbt92R9p7oktS7VPPPR2",
  "key6": "2XB7nu4ybKE9S4hLW23bJJAyip3QEkwZ3Fx1xddewwgWW1piMCcwRrTSyCgKdYRpQTarsaSuubAxGhmHrE5EacGL",
  "key7": "25JErH2KfDvL1dNudxYhhBA3jCSy9V1swxAb2kwtCRJKQzBh8C9zZEUVmQH5C7oRbtUWY9VGHbKXsR1osF6hbQ1V",
  "key8": "2492Vg3PiHinpbxt5qzyAfNq6NaA2wpVXhFYQJCdESvesduczUDf9cdaFXwfB3LSijQjk7fC3P9qaQfcZrCLrF3L",
  "key9": "4vNEHQufcFyM8q4kC1CsANDk6HEaursso9zpbkUzzHPVGKq7TiCMhK3RF6mgtno46kFJK3318xnMKfRrSXoL9rpL",
  "key10": "5YGw8ix1cgQJj1Ao78xXrMrGL1sS9phtuFUMYzg2nixoAA8RXvdftk5CbuZ5sqfyhheFxmnw8rmjDXMUmFw2RRWd",
  "key11": "2sw7kDqEMFoJGq6vXGpeH6nXsvHpCtryzsrETg9J6esu2RL8wMWHFdo7RKTPxDjY8arFRqpuioah2syS89LmTazV",
  "key12": "4SLUtQzK1vXVzmyLUgaF6upr2PnyHRdnEk4YffkCnYnsJh5atiqAEdaCWa7EcMYPVGNfFtDo94KNvwfCr1e9Pf9c",
  "key13": "99aj5r9cuRNVKgeEp5mh8oto6gPgaYT19kDyJEimRhs6CnQWtFBrt6cyS6aMxxoCPcnWEzVg7poFw615wBU8qFH",
  "key14": "Lx954bx7jFd5rVRuQsDCu58w8ApGAMCtwzbyyCS4RUe73nr7ZikvXcsodQGCNVZZ7ZrizXY8cYU5YxuxXSTmP9Z",
  "key15": "5aEEP8C24iVjAYMED1qP7aZH7ThFmvt1hrWM9WGGxiQFo5r9YSnZfrmyAxseiVUfr5J2Yje5XG8yudxy1xhvQRdC",
  "key16": "4n5fWW796TvhCvXFy67f7hTxGeE2yRLbA5hdjzqAMXUqxE1TedMmniaqKv3bHSf5eSCQqAQqG89X3BUct4KKnM6u",
  "key17": "R8yoaVw8CvdVYMu14KJS3yxeKd6anZDVuALpxG94BwAQxrGnn4yf4jKo43LspGZWmvGtKT14r4DPKp6Yo1Rm3cG",
  "key18": "5THUFqbTptWS3r5yATZ5Q3ycqCh9oF3CMB5XL4aRxZiMTFZDHFWX5QvEvDnFTzNY7S1sT7jWzbMuxnkMs9jGBPLV",
  "key19": "3JtMDow3Nw6TZjD7eR47kJ8uLXfBeBPrjFin59gZBcHC5UqxfDii1GMTUMay8iSAUd2gVZBF2p6PFhbZWLPGGda5",
  "key20": "5PLViDCAvby9HNuJH89Z5n4ZX4mmbBfrXpt2dc13DhAgsnMewrKmPCMoHRT84jfNHe3SsxERz6Tj3YpBBQeHoRTg",
  "key21": "FrdB1tFMfXzBSeB4z3u4gn3Lffh9TAmmbazs7aVMoEKYn9ieza1jApAXuDspuv1v1J9861kHKLkz2x8kphbntA7",
  "key22": "JYSm2JQzoQoZz5ySphdmBJwhpp7PbGUxB1xvBe3exqrJ3bYdA5HPcap47nuKeDtpJaK38AWtuqa8TE16Si1kLLJ",
  "key23": "4YZywcKLhsWe1wp1SebETWqx4vveFRZAgFhh67GMaVEDPhdDHr2qHbK41BPFRFkgzBuS3BMh2u7TABsx4u94pMxu",
  "key24": "3A4Htcfnkr7Ci7YbAe6osESAeyLVevbWZX99kVdaeQGd82CDUHrnWj66G7K3hLmtmuJzkPUa41BcWd3XXXTQkzM2",
  "key25": "4wvNbvLRU14jDoqXcmhsnirJAsBhbSngfpPYzKePsRwoat8bUJy9PYqdv8o1RpNm5vy914NyjaE1r1r6p72QzWkq",
  "key26": "4rKr13gks9ErYMSAdckaX6RBG6m8rnJq39hagJ5XFHQsRRQzcHvoQC2pAyK2UY5YwHBy6vjWxS47yEBFMbLHEM6H",
  "key27": "2BXSeKM5F5SFjytGpfd7PVQbKyEkweWzrhkVjb6m1uhpQi7xDG3TQc4AyKS8j6apxG442JJHvjR2Z5YkqzXmZga7",
  "key28": "sA5UBe86xJMiCiupcyMdAibPBdXUyzTeEHvXqhm5UEqsMnZR8yN42nNcoZ7UzRZP4wRa49p1nwz7oyHMpxDXuBn",
  "key29": "2ynVwUnGV6zkJAD1V9zruzidsobf3W89vCueW2YzVHuetkEVLEZ9vrDpmpR71zaDnZEgSHgGjRkC6WgmwkFZZddx",
  "key30": "3HB4rabeB5xxu7Vyo66wVk5i8GsKefHaBSXy5ZZs3Gy4nfJffrjn1GqTG9mEr7yN4MaYLtdfXhHrwt9ahNCZcaaZ",
  "key31": "3qFgunMXgH3PVCb74QxEhLxzUb4k8VHySCojgiKpr9f7Zc6DvdsEx82cs8SZadtU7EL75cTQJPhzoFp6sXx9ng7K",
  "key32": "458mjJkCQuCPXScq4LHmNgTDvUpoSNK9coHj71pDmfctxS9aNwmj1piEtsaAhukGHJfeKNLG4Jd648SdeRuNfSky",
  "key33": "4cBoT3Cwr1fjUZ5AsTGonrYgCTgs5RMmDrknqaPc1qGwKGLGki3qewo2qtZiK4gcQgZxSKZzRWv7d3jBhy57pD3X"
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
