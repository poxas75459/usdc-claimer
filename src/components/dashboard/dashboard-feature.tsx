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
    "4mAvu26uKb4ZhkcTvA8pTgbcnZDYQkm7Vwh55xXZr9zoaCvAc3mLLpEcZEKpoSu2feH89zgdg7C92ggzKw33B5uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rPSbkaivkuThuLe6Nvi58Rp2mB95af6dpHXzQP7jWZGuh6QxpiEo7bsJW6NJdZruECViyo5cfgN8U53nySKFXcB",
  "key1": "4GXdJH5bKTzjx8tjiwtTwN6pFEJadqZ8jAnjRczHRi6FwVCQoHBWvG8RoczTcaFvyaEb96AigBwd9gGiEysJEL1g",
  "key2": "cipzANE15zTRf4QJdMN17nTqbbb2iYUTKBUyegqXcABvURavzEhdnDgypKuiKpkVwf6DfcD4soqyfygwLHUUStr",
  "key3": "3UuC9sXSJkKkPL1qCY7W9TV1uenf711TbAyrcp4BW8eJwEZCaDrZqt8PNwCqxTKGZkGZZi8kSzv2r5H6s9SzkWjn",
  "key4": "5JiBfFb2n2o3qprYHJjRAVvdCU5vksXEq93BNanze9UAe1RZMvCF4v6GZvSDnfWzrbSSRFAYpJ1Fpzpyeoh1Zxms",
  "key5": "3RR8L3jk7XTKCTnmhXPYNdT3Em5NexeE4dmTP6AZ2ZmBti6YRnYJHvdnRAdFocV5h6YN3Sexg8rWvP8yrtMiw6ug",
  "key6": "ic3EZi2G3V2YGdT2dSJSZfmUKZQdsmPeq4LYq2TqU2hiDNRHtBAPDoWnceXxZ3vpqA3CV33LRknmsCcK946FPBV",
  "key7": "61QaRkqsjt6gkNKkbnSGwJNZzzovK5ST1rvQ8SoBV5M33UQ9ZvmmWr4yJDkQVFrRDTnhFKdrCUdbnXrmygDhbEhL",
  "key8": "YejCgwZrqpYC2L2Bk5FhjSNaEJyHJySjrbsccMR23BSnQbhdVZgWzEWVtPEtEJYDvcoovbnExn8Ysbe7366wzZ1",
  "key9": "2nK4sZbPtxMjLg7N3d22VmmPjaGRLQnfs1yPQHbFxDvniXg9f5FESszAZDFqhEjaech4rSjPJDkGfHVrdNEi8sFc",
  "key10": "od49qtWEemt58CCDfuB8AyDwLXcy1fhDFpesEEJfbkssEzPZJvsn29DHdx1DLysXWk4hG5Ace8SVDWuVs6hTHQV",
  "key11": "5UJBiPhhbKAK5HycsJ9ds8BzXLBgWH2p7RJsHf5H1tN8epav35J5RfGRDhf7YXJk9ALfzwLQjdrfUGv697HsUQDQ",
  "key12": "37NX3TLcBwQVwrQC8grYu9vn7v6L4NiJbuqaTK5UmyGLgLtRXYCbaRUFfx2ipSzz4gZoqkwYYLfwXzCMSeFTMabb",
  "key13": "67E8uR8p7WdsbbYNhs2a6dP7bve3voejMfqXrsS2nLWi8KiuGJP2DFD8zEBEKWhM1GFfWe5JocMtGCSGiAsDZWwd",
  "key14": "38ixiGh5cqktiQn74rbjxEAzUbrRyL6VW99WBLqWTmTVv8wd8FwGDUNmBNumhkq2siPt2tJMndXnMtQzHoyLkVan",
  "key15": "28w8HWHR5cKwFpqdNrthRZW6sbAkybU1Q4qLvjnoqeLP34J6gvTEaouoH3VWrMu9gV9EBiHwzJjddJE97RHcUDzD",
  "key16": "SmzqEKhXnn32avXRPJqSPHY8bNCCGkCiRBukqNXARjdnjKszk6BXU8ntjFya2Bmdc44781uaw3DacsJSLqCU17t",
  "key17": "5d6vbngkWC8ZxFq7yxxB87bRet79BEZRFZzcXLkrjAgywwe6K9TyB9yBwteMQdXTXs2BVzvrkWVPY35hhr4AvmMC",
  "key18": "3d11EXeGU98XsnEWVqUoMRSqeXxYrWSJBhNVFEiEQZcZfNzJjDLRx9fXcXNx9Z6FyDEkgN8FV5UmMUWe7F8ssgyw",
  "key19": "4em8UAHW8rBWepqwpWL1CJ8DHccv8qT9PsUNSxcyLyDGePs1zhTggtkXtppUQdcZkovxHwKnudaX2bSWuT3msFB8",
  "key20": "3FXeDTEmqrHGbaJ7tJNURAFUNdTdCEK957L3e22hLEatzEAzxWgpPDytYyGr7t2sxvVoy2kw5zRauJXhHPFSWXzr",
  "key21": "3eMp459NxsYWygDxB655iUsrPZ4gmF18gPozDoStkxuuy3PcpvjwBsq4Tjgb9s3FyfY939xX6nsrGDh3QVmspYs9",
  "key22": "5nRRNkrMRzjtzjLHhaUJVeXfsHew6FF89Fm7oVkvSEMS6RBBtTEMA2SDSrH1FbtzYRiEekSeeUJTy59wdBWrTg2z",
  "key23": "5sLJHJZ8iJmBarVbpfGCkhaoV3BX1gAsMGdTcBzZTWdLwkvoDVf5F1EnnEL6JeGxS8Dtik2SPrt7AgXzp3UfxtaM",
  "key24": "67kfvHgzTQshtRHzkNDWQjcsRvmWkwJswmwSF1BoCu7ozcJgwPCjtsQY8Spf9oiPwT6cHRvAMDBVhGSaS31RQhEE",
  "key25": "3sRNDLSGtLa8ZSMKeh3FyaUHMaF7Dm7cqv1McwjThnxM13JEA45N76T55hjaMEt3DyTd8phWeGBespBvmhgr2w4P",
  "key26": "4cURkGL6gzBghCiKWkBj21JjgMR6GVnYxxbStAZUBoTX4NErQLwAsp2xNhYpcFQjnko1QL4w9sL9ieq4Mf5f79UQ",
  "key27": "2XyMSV7gSpFzEU5js1qH2z1Pyo4EkiUmhsBXdCwksPvA4Ld3FTaT4MwHfWsQg7PKBm2yanSYimCKBFZoEWknDKBz",
  "key28": "5mwaPttqjtR1gTX5D8Ft3xxW7rouX1aNN34c9WkKGKG4Esuq2JawZKuCyfXAe38kVmcGrapqHEQbbMixzVPCR7W9",
  "key29": "5vaooS3hf5CjnksuoWxNGqRrRNNZJNbb2mskxtYvUVJeeUrrMMbijiN6V2w3FazypxtrNv6VKQtdNGxdJ8R8rAUk",
  "key30": "4RrvGEnMMbhNqQid1wnfAGkhuCHwoag8acyeArfxBYvEZmiH9syjas3twyWnjL1ob5j6vqvWujZxjpBkY7AJwyjR",
  "key31": "4HpQsaWAvcT2ERmwghP76PSUiNz6EY8JZUkrCWtVcoB3CrRjcMdMd1kriexV6CwYkazPMrBv9Tkyt5QesJE5UKgw",
  "key32": "ND6pH4HCfsiXcMqsjNzmsXyERnrWcmY2rJPmxkcQdukfqmDiCKwGrxmoidQSRvfD7RjxvA55HkmdfRGpaonYhsS",
  "key33": "RyiuNwbWaMuPuFB4TiLb2Udhfv6KAq72LNMW9P2ckf7psAvC815Fh8LyokmfXLSEcTYBAjtCXKMDKC4EmRmovrM",
  "key34": "3kVwoYFjjxzJEUsxNaAfHStq3JWRhAkgvkpXZBjAQTmE5DobepKp64YrHwZCixFseALHTQWRMXLib7qp9piQEGJN",
  "key35": "4uUUUPZu3pSvYJanhRUc8BB3TFWYykKn9EqrwfoF5JarwVWnSzzUJuSqYUM9BhcmuQ5rS1SPMLnbMUhbbUF6StYG",
  "key36": "Gy1hjo6v8ah4hXeaawCvVEUPC5MyxPJ4WCmRvkyxq3kcToEDTLxdj6rz91P8xSCV9zh8skRdkwMuLeeEiWKJo6x",
  "key37": "4DXpYU5buRddk1DAa1zjEWiZtctkKi1dVnCYKqWSshfQYaF5xYzp15B2UrjVECxCWVvSX9fDxrW5UCcX1yx1CXEc",
  "key38": "2nB65CrTWrpGSCbAxthHCkJEGSXpNehbP9rY5oUP4n44Co7PQNwYTdsuPogEwnCD7eDCL9A6LzputSEV8qsYVwWZ",
  "key39": "2Fnyoh8rmdZVDQnN1pk92NAxxL2PQDAL5uNzoYJYEiqN1kW7YsKWozQqx3dFyjbfwswvQh5e8FHXAnNmxe37APuG",
  "key40": "3byh4X1T3gcrh1SqT6BSiPAoAAgy5nhXMNmwGZbN5JB5BZe7cRFma8DRWuUChUPUXw9v8nPkfTu1C5du3A9h9Ufs",
  "key41": "4gTZFi5oXQdAtekpzDGYv2At62LZorkmorpqPADeJwmjYiFtBRmguNEZ3b4gTdZXjA79s4SVaVdv8gRT48ACqtnS",
  "key42": "5BjhomT63bDSoyF4Mr3X8272ejwn94NfnMi3JXyLp7WHMtYcqu21wf3zU7GKgPd1Y1Sc7gmmBVKwwEUqCkKfMKyF",
  "key43": "4bhuErLMYqJc2zQ5hfgZqYDTLxVgnazy1NPLVWoENq2fiA8GY94DWWULcYzCFVs8MRkZe6ZHqSYjrbtg6FQiyLSo",
  "key44": "2ADcJdVG88Vr5U2XpwfXQPJzFnPnXh4r8GHMEP5ft7kpzkHRXQsmA1rgVHvsZDBbvQTjMXYDSbuwfQc3P9TkLm9S",
  "key45": "5TM9kXRkgJvn3wfUSeURhYvSZHAUn2h97xm9n7d1eaSAQzCsbgghP6Vigtd8jjvbsiXzZNh7yuXxTzUBNhqEiRvd",
  "key46": "2qNFCPQqT5X5gK8ipTnhRZdwdB8kn3ABwBdF4nqy3LMPsB4ZpHDZNgLPYfDLmiG6X9q7z2mkdTd6xpqpdTB1pSg9"
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
