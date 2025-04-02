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
    "3D7u6zuuQkyhksgrdHwc7R7RLPKHRDoAPVnUq3uvwxJ16RAkAcXSuobFHffpc4LyBoLK9dN9KsLpukFAiWhencRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7sQM4syHycUKtqFnD8AtTdVb4zJuMbnGKCzHJWwYCEjpCvub7df8eziZ4Ceiwkc1K62S6eqmLqb28ESh58gJP2",
  "key1": "45etRj92hgmMGVxmiu3WDvsJoqEBBq3AWnJPxaat7pFLREPbgrMt9TbUHMeKy9Q1SVnzcyForPNmhyPxtGvYNoj8",
  "key2": "57wE6Xk3JAenxqdWpxmrVRnTCzkDv7HwA2h7vDmMwkT6YrUDknGBRJghVsJYfp2mzLk3b7bRrZNwRUBZDpJgZLx2",
  "key3": "29XvKVuGPn69b3S9HdfBfct8WwyE8rFbKrGhEhYfDUrfzngYWrG4tSA1kirFJg7TiKhsddiAn2tXs7d71FU3uNEJ",
  "key4": "4A4cKpQCeRVii7A5xYYBzKFP1JXYr9DafjLKk4eeosXwbGSRH2W91tGF2s163a992ZHnPJmXu741ScBvG4AVxxrM",
  "key5": "4JHYxNdzJ7wziTd5WWbNQyfvdtH3S78d8wRYA2scPYm2Z6y23dKxekV5abWbGSzB79VcnPjNvhgfqBcVXQ98PtPo",
  "key6": "4cEJMd2kCcfNKsxsRkFt8bkv5bJBxVyCLPRuWKi8VGffcjtUJS95AqY6fFa1zC2nHpyXkU2bdZB2iZT1spRVU4cy",
  "key7": "4brwLoZFrgMNVYqagTh9EcVUHp3mU1QcLwc9jSKSTNqbDesmxvbdbN9gjVBzCthPyN8ovPiP16TBs8AsEp4bJd67",
  "key8": "5e6SrQ1kHonmaK1HGF6zzSrvukCivNnbC8vpCLwdxzZSK9cT2oWESP9e3BS3MJyGu3Erv3mbWi35QBHfDtzq8gak",
  "key9": "4fRyoVDxouZEJKXMw68fnfZYytZUbdSvCWGKAzN2mNLo92wnnUhNwGiZ6ZfuyxNEFsJvHqtrxNJ43zDTaigiRhCj",
  "key10": "5pLC3ys1EGwcMuaPkXMCeJN1kDUeoEbZLSDmTeTTNSXWJvXGJamRs78Hc4tdbGNCrDJwg3DCYbZaFiZBb7eeNowe",
  "key11": "2SYtqyiRFuxkhdYYA9avZtQCzDVKZVJWQac2aSEeJ9cBM4aYMUDL8qv7PLa6x3AKSzftbstkm7oMWGa5WoiKW1T7",
  "key12": "Di4yePQTrCXVPb81LD21ZN1obqiUiMypfwC21rheUZFU1QrHhxvGXKVwDTxexHZ3F5M42YzogosFXHRSMe8ib2W",
  "key13": "4baPLkxLc9sUWCQLmBo5QQy14gauxz36EQ9qjAS5dmqqpaHqUPmw7i98kvvQ3cPNs6Jc4JTFRbG8jvfy9G8nV2F4",
  "key14": "3vPPYBREeq5KKvHBJoNt9m2aP2eprnvquvqMWJVi4ozZJiYc3KzJm7E1t8Hvy2YuZ5Xd452NYkRvcmoEt8wiCT8a",
  "key15": "5f74gtu2jfkJGomxqixT9KAkDYFmAj225wqga7AXzDqSmvzxP7QKdXPSZTgpL1GPZVWkMjQFABeFfyCHRj4SFm3L",
  "key16": "5hzAyAPzPBscAGSBGUUgZW2ijrrJbh6Ez2C56XVUjqVmttDT63LbNQ6ZExHnkHbKr6aEqUSCvy4JkxBHaxiLy6V3",
  "key17": "2BfRwwtR5KVP3YiFYk5RWp4yiW6e3PDRq7fyuWGtrHgfZepjVt3WHQGXBbt4yi5QqPm8KMHejCgjaMgvZbBpiizw",
  "key18": "2dqT7UPoPNwoE6nweZN2S9w23BpcSXgox5UvFgJV7FUbCCaKBENNLp1hV7MqJ76m1kAKuEakExhvUG6UpxdZWv27",
  "key19": "4v5uy5VRw9WyHSaHqv2veQBt1SrKFTy2yHu47dCuoqagHvDo1nbGDroJk6BmNoD4yCgaCnZV2VZjo5KDD8GMvmby",
  "key20": "5ciZaTDT96UHBuNCBAsgh8hWbLfHpEmJ2sifHwCgprL3WmxW4AjCuPkUW75QFXPtsf6X7aJvDWUvLsguxYUy8bt8",
  "key21": "83n616wxDsYhsGjEVnH8dXbgv8WWVNiWEtWUac11wGVh9MLtMjDckczFqfULsSyVC8puH694sdt6HyK1Dua7wYb",
  "key22": "65EU5shLjeGtUYHZtJFhPqmrCEJDtD89ePvsSk2ThJbfwuwRHw31yH1xRQcQWraBx5NuUDAg82piDxLGMbnczzbA",
  "key23": "32wC7j6xX4p8Ph5AyNGXkWHnSk9CafokyTUerT5UjLrp8SVrCeenCRHxmVqvyGpuYAKMsspgFwcqZUNi3GPJAstq",
  "key24": "66Rn3nc3JW7JrQRZTSb687DWomUzV2AaeWfY2PgKviqLErny9g8utytES6aZ8edkvpWgQQS7XrMyAhtVEE3qUoaL",
  "key25": "5XqyPPrxjcPtQodHdDT7CSesFK8EuU7wi9EnG1AL7ryzw2bn9m9YoMbZYGsUcHHW3Cy4ajM4HZZ5nUgJgwjHh2Xo",
  "key26": "4pV4yeYXwuGXDSF7pL2ERbepEmm4oRCKCRuNcGFELGEzUKZ3DLaDQ7cUKvKVXZ7zAcJhTupAhoCD8zuu76xCJAhU",
  "key27": "3fgzvZdsjzgnhdfvDo4VgbXXoPEh8WViZcgArMtqbmfVYUHEVvcZRwx7HfYgehQJsT3QhguYJwz9NyGPe8h2MuYQ",
  "key28": "37GXvccRyMTJMtGfCHnhF5VedSqDJUZkTPwEf7kHM3AgwTRqeg9zsrRFUxxsXknTUZdFPj42RRUystjgu5ghLgwp",
  "key29": "4G3oBW9RYtDpxQirmujdGjNhkCrGWjx8xVoG2bRVheHXTuAsfXnATwMMd7bWHp751Q5GjYacQXCoPrfFn79BUf95",
  "key30": "3iycbBgdx3DFyhPwXrEGuTVAJKyLgzw3MCFaBMm3S6v7A8VP8AJ9RGyydBQoaya1ponRYPN9TnP4Nrk9BuCSEfCL",
  "key31": "4wBPuXQs1K1rEnuosmQaqcdRrgMpiNuVNoVBVcGNsFwRhmxKbHKBcisQEE5UYqYbXuynyJtxNzsrTy2vRosWRQ8c",
  "key32": "449mCwEpUjop4NnYiFMM6aN26F4rDuH7fTVBnRcLKR9gNWL14BKXpuGZ6g7k1gs8UrTBKM1cZiLecyTLmsxuQLpb",
  "key33": "2iC6hsQYX7wT3rsf8yjJmhtKAXZVcMeorHq5NuztjXfT1NJ9gBZcxgj8iFuSkgyKWxc2YaZVUPdKhJZWR337PvHb",
  "key34": "3JDnE5s1GJtiAPV2Wjyu8iuPsai2evezABVGjcb6XWD27gvPp6u5L9DkMJaCWhpEAVDDHud39ZG4juHtUZ7QeVsN",
  "key35": "2artJkgqJFzGi52VcUYzmQ9KceFzFdMQndQTnA4hM6viX7HuCvayTqntHKQNr8W6Xy43zLhg9JcY41BetwL3NyvD",
  "key36": "2mQJBNrKdM5VogvLQneYCQE4HwJ4d4ZLnSeUMPky8Pfmiuhg2jfBCpbLjXqEtkUQCP9EPuPTDNvS9tKauUja6V2f",
  "key37": "4P7zBu1Uey6jE1U9sGZJC7sNTdsLHe79JdH3at4qiRKaUr4A3zrLN3RW35J8c77ctD7gvmb2jdgVYn6FDtGCTRfq",
  "key38": "2u1h8qzKxqFQPhkauQrecR5wSFqF7E4r6X6KUwaXm3bsYYdVjYfLh71feZLEeLDTuRuXozNcauSJ5HJ6WHvioQHg",
  "key39": "3uHQFgHEw6TqmHSjvHmMBaybNCEcSab1MacdTgCxUmvRpvSqvkCEktKyD7Qb1goTN1Rd3g5q7wqeXVQA8C23bCch",
  "key40": "4z31g1qrCS9kf1bGGBCEnnxjncHk9hpkcrkuNZh3uNE6VEAmqkE81NTf1xTLrwv8PtFhtS1pMLh5WabffyEG3byZ",
  "key41": "5NmfKVxTsmsRpv2NBsprtKDdZfqQGQ8dxGm9vXTiMWcV9RLeTWQXFBVVgz2Yk2vqiiHeZXWpVxDWWx5vEx9e8FR1",
  "key42": "4F3dLFgsaW4hbbF9YpWitTVDU492HH3PtfDiSH5BRLVB1CZgPympWMsPhpJchUELXDez3UfT6gEQDYrNZeeWBjnt"
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
