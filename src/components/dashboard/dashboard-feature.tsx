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
    "2GgijfA7wv7y2u1G5tP2vpyBmsrnfKzkk6SVA6mWGxon6QgTVrXMqznBdnrhcdig95FJVAnaBvHnj8RNccXS9NR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFToCXEVZ8LVBfU8pbRiCkfw2gr4i5D55GAAMoSKaHTRpgbCTEsXnyi17VD264EJ6EWUuEuhV4BhoiGdBpg7NXx",
  "key1": "67XrbGG974GhDnzm8pRZxyu3NJJ36LphYV6XkH1siHDJnBSCiiSv9MMjnydeKSKidF28VeUmQ6qtr4HE3FSrT7sV",
  "key2": "39g4rv7A9bXufbbc4AowRCF7F8hcbHUsLo8535hDNnnfnQHkUVtFwAsrVaSFFdY3LMTHHxfn8MUu5Y3tKkDazTH",
  "key3": "zgymF4m9HPcLEbk9KCGGdCxnnWUw9h4mtEid5ktsYmZN2cf25z4fd8BUsbNwCWpnus7DZ6SMctkndLj44kSSzJ7",
  "key4": "56HgkKBmQRrT8psqrs7NMdxpVFrvw3UEDERGspVGqGKZeoAhWqfnYsvUrEWJdfbWvx9pW6NogPmciJXazpHNiQ7t",
  "key5": "3EvyP35x2yvGC2vPWPDww3wxBsd8LmRBwCC6pEkZGdT8xYsYJ4aUrhc3g1wpScdRJau6WcYAvDs3Dq4vGv94hGk3",
  "key6": "3B24ZFtzqmiKVDNZUU51bDeEuMwwYqRp3WHpcVQ8BRBhmtuSq7kR2obYgLVV6KhuBKZRTjnSLvY6hA4MNfe11AYN",
  "key7": "2FYUQb5L69JeBYnU3ZswfLnq5TArZ3hUKAydvLtAAVs6wAJ5gsYeoSN4pijp7V1PKcMfs3wsY1zrY26TNV9GfFzN",
  "key8": "9G3qpSsyQa6QQLbyhzz64Syf2FYiYugrWCujjH1Kcd7uspFXCLYNjJ7n6SBJEkZQdiMyR62Azp8gu9W5w9m5Uhn",
  "key9": "3Xgij7vVDbFhtmuHfeJ9ARNm5ku4kXFqtYtVNuvF3zhhkA2M6czV9o6rHYRBscr3rZxmShoYrk9fMuhNtjRQBeu9",
  "key10": "4B9coqtFdKswf1nUxi7KvGdU7qpUBdusxF4ceyBExx2sgtq6FUysnmPZTzvKd6xg4Hr8wgvq49kiPaPrFVaGyxv7",
  "key11": "2oY9oLtYbJGrrPJWjsjuUtR6MfYPeY3LwGHdHcBLLzhiiWXBDyp2hysJyeCJvR63edAo9iHWKUoeQmjQzhRJAYN4",
  "key12": "5K6HeVsqRr2Si57xyJ8UyAA4Tx4KfHG181KWwbbv9p7jmVabkt7r2LVXgQ1nvfWBdinWrYGR9UQNQKJDqMRfuJhL",
  "key13": "2wdXDkRaHQnC1JLFiz8EPMRZT4iq82Yd129pnHWHyhZWRXnBNNd64Q9ydKXFQk8YEJXw4agXg5x9hd2ZxKT3Ez7S",
  "key14": "PoYC7XqMeLtjboMqqnHF6kBMJ1PxGmwmAeD1JRsQMEGG73r3kd5bkbZ9Fkp67Jr7eoHVV8HRCVXbEvULqdCJRk4",
  "key15": "4zCxm1ifhn69L5uduZGjhYiMFTGfZoJNvxJgahesRMA1hStFsFDNsaYhKZMNNxPtMo9xEGDUXYwDUTkgHhXEWsCh",
  "key16": "4HQmnxKcLpVAP2m8AnKwHM2XoXNjNcRZVbz7cBwWQwA7tiUqxVfHVs1tvx3AJo1fW761r3gBEpiztQmo5y3cfmdh",
  "key17": "2qjvyK9GF9SpMqdBpJ4sHCTPWY5QesZYvGY6DmAaRPSyrwoYDpd26DvfGD2Y4EReJrwneuJpXywfE84JQWTdeVpS",
  "key18": "48BFzHYTDofKP1CBRqkXWJGFayUnmiB1zvgdkABuf8zyLLT3zHr1xJnAWjCYBCKKEHETMaR3UrGRbeLSG36Pdkdv",
  "key19": "huRypceixPXwXCsno11SDvCB3x7LGQugx7BJUNKcphMULGx84Gm61SWTZPVVwvUfAVssHiJZaEPHUjcoaYbDTah",
  "key20": "5uTzeH1S2NwzF3EyDqRL2VRZxnBPKzTDUf8KiMPXKf1zFZLgZG6kXe7iqo684duAJgvHisdoNrhK4gNHKYbTP7BE",
  "key21": "5cg9S3t6k1y6yt3h8rjyVAJTXHkiqDv2XALtLgL3gURz8SxNJXFsqctDhP3m94Wy1o4Uj4jvftnciB64h5ksxzDa",
  "key22": "3oZhXYewcuhvxW8zXnJL4SsmSkFFUm6wQKQuAuyZj2BJLdFLQmLvgnPUQXb5GfQwr1AnH3AGJeg9RdEHwn5KX2P8",
  "key23": "448g7AAjxqFx3ipUpK9X4Y3eAa2Ju4FhC7KitrpXPnK8JSqoNrQJJkefHzGnu7bMVbSxLcDZiRQrn6hzCZnFfyLY",
  "key24": "2o77vhEoYB7cCdT1vndXbaFYfvwX76enKCPB8qpzT5w1Kgfiwuwivc2cg76a6EwpHfGsYskjZZHvcFUB5aXJNnKf",
  "key25": "rraGuerSkCoMPgvCfVhzm9AgjxtUzArpp8WkVpb7YUSZaWDhBwrFMoVtXeysnedTUwFWAKFGtRRJGbiHEND3YRE",
  "key26": "1VtphysRMikeAV6FPKggawGrvpUxRtsXu2kFPwi1XugLq6DcerMhbRjQafSQAkprQfRHVu7DZSsKSZXRRCqa9QV",
  "key27": "2yob7w22867CbYpYYaisH7EqpsuFEdUZLYrsQNDWAVwcxes2HKBc28oDCZGb2sxCaqR5GGAojX1G843poHkTT7Jk",
  "key28": "5R1ZiAeWLitnBdGhY5ddsAyUVMVLR6suaSnWLfUS4i9pHbcndUdAGtxN984kYYkRNuCHHwWutpAwqB9HEQk5r9q",
  "key29": "2vjmf9p6MjE5dCGHvXzVpu76SZKHy1tCRWzLwfPZxTqNA86TYGspse78Fhyx1hPFRZUw94JPJ1PXuitzypZZ7dub",
  "key30": "4f1JUm9b2qWBeVXpUczYP7DSFZBXWBfJAdMFRKCYrBsbLffaya6M47qAMVCZUu6BXFbT3xm4wEkVqgRm196R2CbJ",
  "key31": "295vLcfPVPzL7UZNxsb2D7jDg8fUAcHGu6X4VAQBLuS6djRgpHw7n9Td5EFMAPXU2Zfh3rm4VbkmHbNkEWQWgVdy",
  "key32": "4TYuVHzeR3FUptrCjodcxM9RobUFSPJpENEsiJwnvZ4JbPWHPSUxauWVjpfGUF5YWHXxfTzPb9cx59uENjXA785s",
  "key33": "2Aa2f14xei75ZPLPdF2kFMb7HyqM5p4P2QjE3Vbf3Uea9qwSAnKb91BrPPsAsJEBfmBHKfdHU9Po51Z34bi1Y1Gm",
  "key34": "3VDU6S86jZ2s1C4jZrer8kioUEtiy2jPNUEYyJQCLJPwQS2Hc4UMshfycc3r8p4v3keN3NDv2SojMkrcoQCrYoKq",
  "key35": "2GDRLjzz1KN1RnRcrnL4dNKb33u1rHB75vC23NpH399DBMuXTk5FJrUbnYPPVGwTXNHeyAvotvjuGWCYzAMxr5eX",
  "key36": "28rAGEYzHUeRMS8aVDvCatofvukU9u8GvxJ7MicYpNk1ii1e2UFcrVRNLvAfXJV8hSifpJU23Xqp3MNa6NErRuSG",
  "key37": "3Bd2rgnhp17bsU6ZucCxDz7Ho7AvdbujX598xuBgY58U5H3JpsQnSkQSoFGbZPniNn3Bn4uMycCPhMNrd34GmHdL",
  "key38": "2VAdo2jPEsKpkywp4aBSgBgzb9cCPEnAKfKYvbBspikJHoViBBSr8suKJe3HsitQdVoKhF11CTfcTrqDQFQjdqan",
  "key39": "3p1XoSBGmpr7iJUaSWivV3n7mimW1tVvzqQBL5PhP5TuR4xxogKuV59JgWdP6eHcD83e6xqZqooNEX1MWMSD7UMX",
  "key40": "2SrQEhfrJi5vYw1Lhg39ByqkMZoyghbUB2ZieQq9W256kDdswaCjtjKWBU9ntaQ3ojZ1BNP6tNUkrR6sJa3xtivs",
  "key41": "4oC2LT4rppYbnBqzhoKPWHt4bPggZPJq4QcU5BBHkveTYQv2oLun5icPqYN3aJdXZ5DnnzQL8pr1h7cxYgozujNT",
  "key42": "Ng2Ki9aC7UJLPEbde5gpxGKK3p73EdMTChW54zX3ZQUq4Q2BuDLSPSDVZjPR8pnbnyYwSZn6KeqLm6eQ7iWxiz6",
  "key43": "LxNbZqMGm4MjmAEMJgRXRiRhD9P3aijGqxpCq2VX4cRYLmJKNBWfhNeqpQgj8LvoMpD2MM6CYSngTFwKNYsMkgH"
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
