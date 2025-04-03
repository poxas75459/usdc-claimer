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
    "5QZJ3NKsKdSrZMBWBFdHiHcxa9ymn834gwZt4tp58AQM7hmy6HsR1auTwwGhZX8ui36K3KkDwPBFR5hSmrinNtaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PgJ7vSNq7C4SRTzDqgRWPYR5QRcjmcwDUgN7TX3uWNQFrK2rrgXXNaFSTi4Ueq5PF3S5m59Y6tVnwTdFzngYwwK",
  "key1": "5wXLkiYAfv9i7xnQNuBWFUzD37iAW4y1oLfmoKJc4NLXqySV7qTa9oM7733KGUCb3u8WxJYg2C2X6yQ6CsMhqGgd",
  "key2": "3ykkhqJQfd5BcVax27HMBSJWDMojJ14eLGNU3vcGWrzupbo6FGnzRn5Pk6FFTmhicvcpcLq7GPVJHJgaCj9zaqPZ",
  "key3": "4BcRHCPrxJA6QZsXgNhxAeVYu6jG1md6xh4xHkt8Uuh5meVwqv5NjjN992ehaV6zKTXUBJJVEpeG7agxkfTbUyHC",
  "key4": "Y2Ckyd3c5D6SgWotkpRTxde6geiAHWYzo4gcXvpM5uxUcdVgX7zRkgvvcgWmvPa9wh6tqsJWgPSrPwn37uM275Q",
  "key5": "yjCxRLU2CYydSAQiEPkPvASUgpcVibWydwiHQajw3Tf3TorskVTgwnEQNcheZEqMVP2LNzVDoxGhA1hmLazSEFC",
  "key6": "2eNBsfiFXUSFpbnuyMnyazpGEbXau4wiga5A3xgvNWYEcPtC2BzQ1kF78ejg8MA5Cv6Phk9PFQqYACrUf5BmTr42",
  "key7": "5d2NpEBKL1GfeHMTWqHfMP79J5Saiakj8L6HLTPcbiHs7S9D9PzdJGzgTi4nVujRnSv6wWzxxiZXVLRQmRZo8G3o",
  "key8": "4Y6oNhU2SEtsv27x2jf6G75vrNrA7ofCGE2uMFSr2kRUNGwmN7dqDKzLm5mvSwMnRyxfaxvH8mT5JivsMVZSkLuF",
  "key9": "4jznb4DTg28cBmohk6qc6pePYYybPmYnqyiwxGHjwPJJiLaFqaQ8MF6dghynVyyw6ZAUxzbgyKgYdqnmuGCbW3zm",
  "key10": "5kcpo3yH7XeN7b55WH8t5hrNH6Lg5umiiAmZjuSAuSPNWc9f8yqHVNvKPR2hdZJgaoxdKTrA9qHpTFVWXvPeiNat",
  "key11": "3zHdsv2BJqhmkZBRuTs6D6E1rCHCYSaJCdgf2XzUkkpUFFL9uENCxuzNdZimtFvsVXMRKVHM8v4kXux8SApQ1QT3",
  "key12": "4qfmrnARXpMKmKurmFCfXhGM8NyzWSgbDV6wojr1SoxdN1eL2vvc9B35cyyKqqae2iBS52X6LFyjcfCkyCJfyyur",
  "key13": "31fMnUXBMsSvfTcX5bqbaxRhrmTQrV1cVPshyzVkD5LHP9wszZXM8dqBGXY9Rf4hER7YfJ8RToSuLd1pz7J7yg7H",
  "key14": "5ZwRaEYwewMYeMTaadJ4icBri1aqe2siAKRELz6z6bhsE4At5SfLHmrrUh8uFTGvK9BaM66jBhLzpRBNmoTn7Rxv",
  "key15": "4Fx9n1xykHgyFn3Y3zLd7aHS54byjib3LThsUSHzKGn5LQJyVEdsWqRKmJhEj4vEwDnbzS8UVCsjnh4h6bu2EiPd",
  "key16": "2JPNuKkgQsAwkU3zxjUdNBMivMZ9VtEqFViXgiFEYhiH46EYK96DrdqTXm2iPk91ouMeNqdHZJiPpPnTBkzVfs8v",
  "key17": "4GTxkDh2tCQe9Xpr5WKK6pMPtWDeLfq1DJzuHPRyKraJiG1Ri5ug14yUdg8yw1gJemvyYruPvUjzH5QCQzg13Fwo",
  "key18": "3ZLdvTEcjow1ss1sXESUCATHHCH5du5iSCqtMwcKkJjFJ6RTTirvbzTBWrFA9cxi3Cin7mRyxJpZxsm25zjy1tY8",
  "key19": "2SVCKrm2PR3CpH4T9vXQknFWmoxpiT48XUfhiBZuYo5jButuk9DSt5djfxsbtLQA3hWGTRbxPZoRfqqGLDbAQWhd",
  "key20": "4MovxFh6EZMWwXqAZr2ovyKeSHi8RT7ErGfRbxs5mhbeHJBxUkn8tiAKofaBHa8e8JaP66SJNghg1HwiwgNr3eJx",
  "key21": "3GbYjWi1dFBHsZ4DA75JJUCaixEDUC7EX5tBZZhkC9T6usPk2SPg6t8sDq1ZL7tJQCbmzCM9SFCFuXYZsGAspoQn",
  "key22": "4hyNtBTMysCxZ98NUrZAaDx5eZYoFiUMxdXzra3TidivEBe1i6yidw67bsCnkqkEmKtyDXt7ig3QFZHCJsxwfJdc",
  "key23": "4GWwvoTWVPby6nuDLUu92V62Q89Nra8mMffhG7nNPzXDSGPpt1M5843rCw8gBA2fecAQzEmZf5LNB3gb8JboNyRU",
  "key24": "6PbX5Uvk9HwH5HYRKLYugnRDmgbcXqdYQ9X1ZaNYfwmDSwvT3Hhhc8Lzm1xzBPPYCYmaF4UkZ1Hpyo3VpvXHLyj",
  "key25": "578DUxDBmDq6A1Qn9pjyvcYpCSkpUvHXnbPm3gLvXeRpTebXoT6Q2NkBC9QM3CpsMCGwkURBTby6Q79i3VV2eCSK",
  "key26": "5ZPqX8f98nWSWsTcBYmXjcD6X1JHAQvtzBXn2p9iGnb7tLnnztn41k6mA5wtr7272UiYjFk68XJ6AkSp1DfVAUAp",
  "key27": "5NTpNXWx57Xs7dPpmcp2u3paVXh3ub5JeeFgjPfsViND7Ho8iik2k8iab4q1Zdag7idYUu88nzixvwrkLheBCMma",
  "key28": "VYBoUNjtr8HDqznZ68Jra7NihE6zoQwqc3mZqsG9GPzKdfkqt1mAcRwazDmYUJThUSNtVrr2Cf5MmKt5rKVkW3X",
  "key29": "5LqfafuNpcYFTAEWJfKPugGu12Nuoyjsiqq9hGP51jQsxXeVvUCUSA8uKjMBTPqEhZgPBy4kTu154dxmDmy8EnQ2",
  "key30": "3vcTAo9xcy6UFzeaet9JQS24Xq9gYZ9ASThRPmTJU93cUrhEz8NCdb3JS6NXYDWNtZndpMmw1ecVbdQFWvpp8Btt",
  "key31": "dvjeA2oZ71he3CsQMNf8ciZqpooHoekRkWV1NyMnLdsNotzoH2Bna6q3eGGvZsh39XMvxAkzTfzcBYF8nnQPehj",
  "key32": "2RkRPJKrXZjvceGZByr5rquedyQ1NGD7kSZpEn8Thb7TUZrEWi94fTmNoo6FrbkngTTPJHes3Z2CqrVrJmuNVKEm",
  "key33": "MRFNAzrGEmMn58L6oK66QZVnvLzHg4jnvT1snsc9VSoB2t89Rd5Czzu8E7mpFhhkiDxHqXkoaGesJrWDVQztNun",
  "key34": "4MRiBsoPZdXre2LBF6ZYFUDmc5ZM8Z5mDEEFSYfnEuR6mPEYc4JtoMyUYZm9FYHfMQUD1QzNeuBuJu1TW3DKVGCZ",
  "key35": "CckYuhuu6yMHpWXTR2UWHDH5AX5UnrXYMNe7VzLnSAm4eNfiHhWCHwoUz3ddgWJFHkWUUSVn9CgFaDrnJfHadDD",
  "key36": "ZY2NokYcbVDTqDxF4oJQYa5mF7sdr19wp3WaTRcdKUzJfFSeLVSrzEABgpKoAPZZiNfj8nmvmM2RbgZjxvceAHv",
  "key37": "4yxiG1WpNtSJrHikPPcyCDvrrrhfu33raNLBT7Fm3pwvLtfiCva6wFnN3hrv7vkDijMFs7NkaJDDTFA8G9LwBZzf",
  "key38": "2pMqJ4tkHGocRa6un1oFp7guFNpC7kBPrSbZA4KFDP9suRPrPjqoZo5Zd4Lzx1MdoQA4MasLSAcAgTFyn8PrKuiD",
  "key39": "3f18CrZgZSM8Ym8USSAwEx8arPN7tLEmY3MjMjiAZfZLrCiGhrnkbZGXX8VFruuhzYdTNsJD8e5ao9XYr8amUhmz",
  "key40": "4sVEJvtajhBin4o7He1okHHz8bKxEdcz6xfqSr2kfAVFn1ybkFwLQtNsnjPUDPx5qr8ezCvuNLWMve8kuTKG42Ny",
  "key41": "3RVz1mTC9oPbJrMWaEzFmNVES52CzhTcFvKAKEtVuqrHMB7KfyNu4w8F7LhteUQsM6xBMpf9HLAKcqpk1jf2K2YD",
  "key42": "32PrkMFUeMSkgSyVKE3o9TFEsJWnZCumzP7jByQanoCXgPsyKGeVzXfbgJRbGVvVqhs3LpyZqy4suecNQY2z2HLV",
  "key43": "5YbLvuieaC8eLyQVy5JncZcKxGPNituoL5sBYiHuaoGd5xJsGCeGYjitoisJDtLnSo6xo1pqsMbqfM7zyxcz5KvN",
  "key44": "3dRx7KZ3NL3Ncj1q5cQhv4SWdsFUDL1viRPo95u4CtkXv14VzkWghshJXWgeGVJfoMkcV8m6JxRgWZiYnhDpWzoG",
  "key45": "2w8jEcHJP2byVDovfjPgZETZBfZxJ8XqKS9m4yAsLGgQtm2nyHG9HLepkbqyHUeBazbrunXdtB3VTZQTupvnuqJr",
  "key46": "3p3HHbJCuLMBb5XeBJjrXRox14UjjT5eFyDEfUE4UVKSM6BEJ8nKduUYW224URmbRem8tkN2Rx9nKGX5VDmq6zN6",
  "key47": "uJp6ucz9FEhACUg93ZiKPhhaKeYRkUkLwmjzCHoAG6Q1ymfy1NzciCZu8EFMTqHRWckC1p3cDi8UKEMu5j3754D",
  "key48": "4EgTGusJESzGRuejMKc7yADZFf4zGmTNyYrL9pyvSPJiGdh3j2EMW2GMD3T2t82ZpjX4USXYHPFn29yfqPbd521q",
  "key49": "29JDaqvchX88QLF3zfQdLA5FmnTgsxkDzxfRzVv2wkGVgTLVrXBzMgBfWzWiq7SE2B7qMX1WJe36AnG2DAqd1KR6"
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
