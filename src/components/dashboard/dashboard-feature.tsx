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
    "26aWGYHJrNybcCwySfr5Px1inQUsxrGxyxXdyEzTofH2BKJ1NMJNcTFxwPtsGmcNkWcuQGAbkfybJ7Nt1zBn7s9m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ccVnoEttMxa2gQg8t9KiWrYBbtLGmSbye1Knd8QLus3wcF3Jv69y4tA7uXUDRPHTBUPoNGRrSEgBSUFw2hVxgw7",
  "key1": "TVy1GfnWk62NTfqaxBSbAodaw57sLkN86zumLo5X2aeBTByD21jgyPmYheXVDGzD7ZVcHXDZFGVnY395dYKd7QE",
  "key2": "P14h6hnrK9wTPu7hxTx1tYiCzcswgLFdncHuHtSpQhAdt2tcUbarqc9BXa6U9SqUbGUHDY7qDp85kPfNRub58re",
  "key3": "2LnCesrYYhXVWSDcLNXR3ztLKCknCgxnz4o6VLH9DNvBM1tXL9x4sJVhbFgr9CQch8CxZgWfEJg6JN695kWoeZUS",
  "key4": "5pzFdRJLWGroRPm7zazHbXijEmdaBdEpVwZRRPWeSRxuSZ1M529d88HryQxv9v9a5isS3cpn5sp2avSzsvhRFU7H",
  "key5": "5RnyL7smbpS7sDz6YRrnaFX22qLPTVXdJLS7EaatcU9g8dxRJSNC9LBcfchdJaTcDW3Abs5qKWB3Ed8RGjZydFT4",
  "key6": "4RaxjYm934L77oQZFCmyg1nJQcfMhA9EjzyawVMYn5cEs6F6SGTypkTatMPyZ56xX7fdGEp4x8iCoESyLTqYHvTG",
  "key7": "UzTbq6m1QB5mAA3HBZ6YdKyHPRw8KdcFGv419mqGTXt9Byuw4PC7YAv187QYtW1vgYuV89UykYDuYLYQHqvcdGB",
  "key8": "WBVqHybz1CYb2Z4oR9NNjwGBmLybgPtjXLmt73EvY7ZUenWvZJcHrbU89h32WHCSU2a2Xi7iW19qKTaJQYcn56U",
  "key9": "4w1S1d6GqMjL9oQH4iAxuHsR578ufsgPudyVfQjNJr3pVvTC4McSP98KPKmhsTgGcYSgoC8z4ic1f6aNvFGqhVV1",
  "key10": "3rWtCCtzPuxEBcG7iqd6LyrpJNtYpj7eDMTiaxmV8iALgb2Vs8SyGnX5sgcLXxUj6Umq3nKao5EsFDhJVCQxxZz6",
  "key11": "318hiCpdtrmKG6j1SpyB5BK2v263EZT1vyhnxw4oMn534qMLAe369hjwN1N2vF5V9odcUw36ASu6tHxHKtjA6may",
  "key12": "5CuKigH4ypVAC69XJdU65hbrnCzYcV1u5cKn9F9hKkk4fV3DRSXWaBre7s3N6tpuRn1hFBHC3U7LJMHfPj7eoMoi",
  "key13": "3eWnv1N3aFvjSEvbVYQb5DF38GoUKUxicavwiCBPJRK7adsNKCUX7Y4cnAvjfAJDBwRGGziJzfzqxYHCNVkTDtXP",
  "key14": "5mbtCDAiBX4HBhZvnSQ8BmoQe3cbsTLjEiDFoohhVyezQYoUDGHXm8R2rPErQ8PFEyP4WbmTiKRsit3JwSbxDhzZ",
  "key15": "3VfwnFhCpJzLsZUmbuBsafdzEpoUPbPjzpmRAJGvzWnyQFexwqdjcQznagJBDWW3bT5rkEhiCjth1v9BA6VfFYWL",
  "key16": "3iqkLgakjPuTZHr7pPdgcxvki8hh6i5Tc8nAWP5QPemUpSzPmErnwNhn2wwDDziGpgHDUb6WaHiu49E9i1DhEuSD",
  "key17": "4t5vtgaxrDerB578TTeZop6fCMpDi6AMcNrecP48oujYkDLyLJ4h3p4FXernQ1djrYqDruFPBWf2fVeQwot8yEBp",
  "key18": "5qrCZzjYUuFDwnSQSQ1WLAxVDuiipC4RLKmV8UbAP1to7rXjVfU79cKRh7qrQq57DRTjkdxmxY2sRZxRoShCGr9i",
  "key19": "3i7afqCukfXDeWKgaHickiH5GqiNp2ScHHY5eUTSUuyJoknNHBGkS4AryverWbxVAFb8kyEHYLj6pTS9BZVttT9t",
  "key20": "SyMWTD63Hu8nvcr2oVYfNTLuxx2SGfi9h5pdipkrQc56mkeU1s1euVAf6Rp9Mh2yjt7Xifz7e3FrqZPND851rvJ",
  "key21": "W2smBAYJtEzjqa8M7pmm4CZ9wLAF7bvonFoWhrAoP5kqdd9YKjj2Ux16MFK5QjH3AVy1nwiA6QhC9LtB7JAWUo1",
  "key22": "2VpGKGajPSqYhEXdQjM5ny591z8qyDEuGysNJSErYzq71JDYV2X1FrMBfhFSmxFJc345psoeGBFqfd2CX2BCHaTi",
  "key23": "3HeGbe74s4YjRyXYQZ5vi4zZ9nXAfMmKA5Fe9kSuM9rKWr6mW2NRvtzhKnWYFPqKqDwEocMUPHCFPPT3RyZCC7Nc",
  "key24": "RgamoNKDbto7bEfzUG63uKj5gJZDeksQ32roz7GThVx2Cr4P29vG5fWuZ6h13QZ7769GvKNRKuysuwRocMdKMmE",
  "key25": "4CT9JLsRbxgbmbyzMxrDH95TXVgNc5jubeT5NwYvozNSJdStdBoGbKgi7GWyMqSqpFD3PNgP4CHC55ijyhzo5geX",
  "key26": "bJ6TgRTLQifZMEYnWy6D5XKwJdrL64dzjfuMef34qRk5YckBjTvqhbrSaRjaiax1z7z2DeTqiEpWc6yzoGJyvxR",
  "key27": "4Gy6Xe4UJTx7vUS2cMadk5GCmPwiX66S2qDTbQQAtteGZGM2vPuBzL7oqeNVrdJAreCPTHD16HjmWQW5dK8zZXkh",
  "key28": "3rLRoHmJNys29BCxUV88cXPsgmruYwgjJ8aZ2Q2u6akx5N4guMD465mDUdo5ffBH94mPJT3uJxtoofyMa81UjRLF",
  "key29": "3P8MNUoHXFHBTUfHAvqHJmExz3AoK6isQwe9UDWSs6ee2KftaPtjXQudpezBQWYj3kVEBvry5K6h3TsknL4mYU4Y",
  "key30": "2egpUmteJRFseKTsywNysjJMHHvu8XrLMeX2FamVL2sAx3t4xjmWxn6cbGFfpSM6FeyTFZZgRLRQx5rkbEQ4KZnK",
  "key31": "5omcRwJjKbecR1o3Mith4zXPWK3cPA8SPWZo9ekgmLHn8djTd8dprGWkogCJKJ1gRAwuu2bix5qf4iuTywxwKi7S",
  "key32": "3dXYy6jxBNuGuaEvxseGzRpC6Zs2baywgNd5VPwUoieU3AAHNQYdRo9ZJ4ck2SHUjHs59vXuVzKhtaDEzPj8VzBF",
  "key33": "4WoBpLAkxixHsQ1TEpaeWLeHVLewpd92CRvPbJN8Zr1puAuVAebLTmogEsjn3cxAkipiH3t77VqLENmWFwdtjBgb",
  "key34": "59JD8AGXrro7S1i62MTcgjQfZo2mKkRsvo5EEPsEpy6chJeyzr6jvCFVPMA2uJufisWWgQWNcFxm3pPsd3p8TrSZ",
  "key35": "4SMv1puZvorjYiahnXSJwtWATkkXLX8jeMXdbwz32sri8b3E8G65BSn8eQxxqUHMp7pf2HupNcyb7C7VS9KMSAd7",
  "key36": "4LNWVU1pcj3qixGxpyKB4Mydna9McaeAhKYnki5b6FCjoHkFuzDoEJgRzJLyPPMNbvbeCbECdxGGsgbiPMPAiFLc",
  "key37": "3S51zVP4WHhhiXDwLPn9yBZVtvhGRBcRLhFcTBkVj3yFwkn6ci3SbonyGRirDT8vtYyBNfKz1RpgJjfh6bGy92uk",
  "key38": "fKNGNQgs1RWaYQ7rHdeujuoCddb28gUSKS51rNqvbTSQEjsW1j6bBqZyfaVVirxg2hqQCHEecKjDadAkymHpaDE",
  "key39": "56Cu3ceUeTvB8HpaBmU5eosXXHsgEdPSHwPsaQBnoFLfM8bjWR8K1f8CkiHU7WUxB4F48Uw1PMPgZaMKLkHk5CC9"
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
