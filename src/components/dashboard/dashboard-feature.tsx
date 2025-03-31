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
    "3AjSSAqthmMi6UZn3bZsYgZkXziMYXpKN3m26LY1eUrAMXk2h6fbHD5ehDztJCKBcaybH58ema2seJeczezPiLrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34BuUaDpZsht1CYm4vUJfW1Vr7mR8y4DbrSbZznegSoay1beRX4ZCVcyTUfXEHUnwBYmEK3mVLdkLMiEw4UmE9gZ",
  "key1": "3zJ9vm4v3qwhdyGTDZMv9L4Y87KK1GzCGheF7dYZFWvwmQEJiQzHPUVBCqcUbChq7Vsq5U4bp6dzL4zPQfStogh",
  "key2": "4LMVE2rKBeH4UjiY4qv9w9Ya1i7PP2QzzEkVQbDDrbTdRmByUjDo5Y9WmUjnUEcqUwRCD9DDLHJvKgm9QKLnN1cL",
  "key3": "2nXyW6QTsSjBuSqeiB5LPYJEsAqKP3oXXXALX2Ahi6bFc6i6wKm8ZoehuKwUAYHTRR4ovfy9VBzmP9phTftUtUrE",
  "key4": "5jeJK9y8773d6zQuvhqhkoLHeigGMHt2wTjcacpGXvuMw2s3kG7x3oo3s7gcy922RrsFK251GS5eT83c1HU9yBmS",
  "key5": "59GpR7NfyHq4BHRWZ7PUmGKVKseMq9Cn3gbb5FXZRUx6J3JZ149faSGvmRRDxXrQrxN1u6YB3dKvUNt598wV8ei7",
  "key6": "2REUdMoLeX3XRkTWPPfMrPKAhUdgZVTTc3N46edvokmTcxEfCoyFC1urAc1r92ciWYohUkH3DMqdg9AZv4eRp2b9",
  "key7": "21JUWThVk6hC8BCuy7Ee8Y9c84ZuHTEgccLhaC6K8Ht71kZsERGE2tX3Yfn8effivb9QMmjXKnVwSXfSw7zNGG6T",
  "key8": "kRTSGEACwZmJczSF5F2W1LpsYZWcaxCrdc2mE4LHoJrZCsNZ69vCiwhLk7sfmewTwiKnoB8JwbnFJmVaAWfr6WK",
  "key9": "3w8dvajdJrE7kky3YYXLBZ5c19SHXrTL5XhQa7z6DeC5zWHekNGsUAG7qNBmJAuJWEiFcs3RHLQZxzEMNgGgUVXZ",
  "key10": "5fndiw4Au41TrsXGcreiB3aTYNRP6mkuBqUSCz7sUUkex7BmLDRnBbWmPDLXTpWLBwfJPcHb3KEDseNYPUgjrgoN",
  "key11": "4t4415VfUYymVgrFNDqJ3bgpJ4rNks4WhtK7hVHjnJR2t8MSQRcriBpjrRc4TWUERDb5tCFkUoeQGiJUp1SQu6Zr",
  "key12": "QezifK45u8wWXZNUi7PkPBduteJcscDtwJ4DEVosxLfNeDpfuUHrECUFPnvykPsrLT76yNFVKHP7gkSZGmpJ1QB",
  "key13": "3eCSuzxMf7UzQ42Kk8wCjPqbuqbDXkKVx3tpcBfEmDZCXHxm62sDq8fy6LEgsdoCQXE3RsotXwjkHNuLLLWnB1tj",
  "key14": "yZkxR2foMU8q38kQbwoeYdoR5Xybs2UmRipJavJRr3VDZcvbpymzF7TSbCZnWc8zTWukkZAZEq4xfNCZpzxZE5P",
  "key15": "4Udc2YYXZVea2kjMzq6jPpe8u4KimL51HWr4EmuzAaHFS4ThrPXNZAVYAotzVdk8rK3iFWjvrUX3V2ZbvAp3skrm",
  "key16": "5pb8ahbBgRGEPgE7JsYkW71bJAP6XexaApr4rn2j26exARvMda1DnSurtrEBTS1JiBhzjbghYQuiXyhKURXvEVvN",
  "key17": "nWYfponrB4e3Xoo4LVLrdUEwBUFaecubPHiKKuNw7Gr3KJqjfzeJsVCz9rTZhpvUnDzkW7tffaxobf3h1eJf7SZ",
  "key18": "28b7XuMLZs61uq4tb3RfYgLSekfAJEVVf3sxFujnfu8TgMBDSFWCTd7mwhufWuh2cLWDpUUNpfALxFjhRh8Nrz7Y",
  "key19": "2nUv5HwF1ocAYNuoDuRAdjy233wNJ9WrgAzaH4W254A3M1utBHxCCjeLcSFnm6PT3K5WHyh9QyWZTiwv6csYpWSa",
  "key20": "3hXWEBRChAuf84DeMMtQCdtED3rrdXqR2knvL7fkmQLPLo9csCNZRH9z3EJHK4eRFB18TwJbyJf4H1nRgRCE3Fu7",
  "key21": "3UqyUBy2NeFHyFXFjA11JPAsoNkdRSkKAVkbpgMSfp9KfQmYWjNm4nXVgUCxu7CbxiQazQhXestSijzQ5PD4PLAc",
  "key22": "5FGEaAZ17nj7DHj1XCxcXafbJbwEaJryKeJLhNCw2Rgh2KHeym14VQQW2Ck13MjCEXeQhSiStre72tV8mQMf8anA",
  "key23": "2g1bcdwm5YHuKMnkeYrvsaExDPN9XChaWCSoH9pECJ7gD3VADSkkavNQ9TDQ2NiNYmTuUuHCGnPDHE1pNSxbixmX",
  "key24": "2GT7BhCxH5RdSab2VQT4KZPDf8iYXsiyg319G6L7ooe1RxXdvxcMbYiTTpYPkQtJXngXX6NAbzQNKYMvMUptnUMu",
  "key25": "2NvasVkZbRCbiRoyMXceMjMPJGnRrm1rZvwVcK9ehch3Wyd7gh5zps6dvH8aWDjmQggKQYNajEgJQPBEq3P831tN",
  "key26": "2Rf3YZ6W2pudwyrKSGaGdvVdJs35V1j2J4o4N7xQRfkG8jb2UCm5BiCiEB6j8BTHcFNX2D6xCek5Gfa2AgPtdeyr",
  "key27": "3u8rRPEU2aDtZtMR5yyU1Y3mkJxE4tDkFHrQfpY3MThugfuZrTyVEpREAMCGcPiSuv6mxKZzcWNqURVFmyKwaY49",
  "key28": "okSu9NxV4GEAdG1TxnN49hpqf32PwYZLhArELCfttejLzGnrBUBcZME9z9btkjGX61dmMbWfXu1658As71QdSEx",
  "key29": "3CryUCxsZxkR6HQ7aPhrrt6QahzbZB2ZG2JK4R7P1rn6KMBkECHrCCNAqRcqx1n3nk4K7fEkUhaZQpej4jMy4hV",
  "key30": "Vx6w7yQqt98WcyRg22QXRcRu8x4UVwrTarHXNR7deJLjdBztanqPRAjZSabJkuJNAkPeWYZYrHJ9FpzQBgFUawY",
  "key31": "4f2KZLtuY7LHPQw82z4i7MMbSbQThy8R61gK7RN16skJqMF7nz4BPguX9GcyhJkPR5FuHEzQTQPrDrKqUt3cZSy6",
  "key32": "3eFm1tuREFPouRjyV9wjBQdmbqxhcoQpjxrFTdwKj8mJaercAKwRsNShfHytZb7a9qLPDX7CheAtPL4GJ5deMVCG",
  "key33": "3rF5ZwY9Hsf6pVuXjTc6J9V4zw66GvYTnQbbKwyLomHCkcXLDpSfvbAz9qsKtj7rhWCsjqw7yS82XDHeyJa76XXc",
  "key34": "3UQa3uZgbWeSLBdoUFtmbryEst8QWyNyCeBz2tegvNxSH4KNvaLBg2frAyQswXkv5mHfDRHLSVmNyKxi4b2jw8j2",
  "key35": "2RhH4h8TVRmMHaM8DJ5riMFZSnktvXQruY2citA2DUNsSc43Wi7Xym3fw4snwbYNgeFEbFPCSGkvNANVv1ipqApr",
  "key36": "5BrKhHhZzPuT3Aw25LhixHBhm3hBsQ2E7Dr6xnKysGobLYBjoqHGBasjW7Wrhu7FjnpTV3GoDM14rDa4fVvxuuEb",
  "key37": "P7dSZxZQ5zxbaTQ5DLF1aQdawQAdotHzJyakyEr2GJucc4e6RwiM9rYcCuH9ePQVvNDXJadWnLCUKU8HNAUDmBT",
  "key38": "XFjWbeSPFgNKAgweHitmS12Trb67xKBu5sqr4do2hvDiE5FZ2Hu3M2a75LnXf4VLXEyLRa9qgjNNyCYzcP1x7fF",
  "key39": "3znC2LfVABdvVVhthLDNRaaDgGnmZKXSAifewi2CFqhzHD2NgKBudvXQVt4k9wpKwKMhGiMi3FZTJpg2freq77w8",
  "key40": "MgXKANykqXWbKGdqPwSezgfupf8WktxSgiWJ64hc5YHmHzk9QHk118t4MVbkBFsUqbVqyKng1bAQktQBUtCun2V",
  "key41": "2wXesSkDJbpL2YQEuEgGf45h4r1kyHB5p3Sn1U5N8E189UePsVGfuf5YLbAaZhA1SPHBnavGbBBMGVKsrcJdNpKw",
  "key42": "5DPXgQcbs6KsCmCTvHoaSv8h1Myy7Drq26cMwkUbAydNYXmnFi1YUSfvxhLitM5HPRHsrg63GyCLA1F4ZWk6ZSvg",
  "key43": "5uAV2r1nXdcdHTHCuriCyqDkgNeSwvifvjeysdNcGHKzoizTsiU4cgjfvB4LDFabRRwNuECFX9UAMRwiqayzAsB3"
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
