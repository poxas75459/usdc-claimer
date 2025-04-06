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
    "Pe7UrqE8TNxAAU3foY4opXrSjKThDDyG57L9D9LrTs6Jg9GFLZa1KF8cuLt9VX3yEJcEjNTqztbyjHrC1XswbDP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ff1qsWqvY8ZEczorXWrgQjNpfBhHAWxNpzyFNPbdYVhGCPFwRPyq7RdETa2g3fFtyJEtcTVfMpUMXh7uQqKGZfn",
  "key1": "3YothGq3gEgrmoeSNMRCjENNmGZ3pYKpdrk3mjC5B3FWCMCvoSSqtV4KkcM5GRtebaGeYVPVVezBN6aSTNXoNFnu",
  "key2": "3C355Sj1Drt4Q4iG2hHrZoAmWvQxA79CiwgPAMoB2Rd8n3bV9pdbL7CE2Q9EvvwbqGSrK9P3Atgmn2TvGuYjbtU7",
  "key3": "42tH7GJXRtGCmREmJXof1KYgVGcKwwmSxrqDaX5J3BqcumGA363vWoFKFp3THsynfoGHfU9mcFVgMFAC2UPS6zre",
  "key4": "3GCEAo6ztgT5b7DDA9YZxzawSQFyvDXbpV7zHPewPiELN2qt7Vpf6wbKfGmLDQ3prdfFZiaZKRF77tmCM1L6SGxX",
  "key5": "A4Xi6N8p4A1prMeiUzmJjGb7dRVAsXgnQdvqUL69w6mT17GTXGp4iDuAmxcm9qv4sXx4GU8DbLh645D7RGq4Pgn",
  "key6": "2yWDAut5hkZdWkVhoBJaMw8nY22hetcGZqznkL5nhJp1PzWVrGxFPYy1TzaG8jMoULozg3c7Wt3XQkrXBGJ9oHYA",
  "key7": "5UDa7bLdB66UpXhYnL9Tiea78vdjcDs4eeYidFHE6PexHt5VLa2uH4fXavZWiaL9ojVBDmZJKLY2hgQF4m1wVp6R",
  "key8": "2Ljj5j2ic6CBggDJBQUJz4xoHvbrXLohs8WL2C5Hf8FMYv4JhswcBGASgq3UYYL3RirrFC34AccFpbt7Aq4ZhwnL",
  "key9": "46XKueXozNXzZGJsRB5uUAvWyb8oHCrn5J1Y4TjDNbfzD4jNjmGE919davyUAxynjCidwcwmeqCMA8riz336Pg5Y",
  "key10": "62jNi6fHz8JdTXAGPrieNqT2kmkbnzJqEApCHHxX9oYkxf8ebMnsZRHV2tDceS3rYXa7PZJAQMmZZquhXakANnHX",
  "key11": "23fwsicurUo5yqAuzenkwiSW1pNnR9sm587eGyM5fNsH6CPMqbxNFxA9i6WMg9ydgRRyarqdkfM9rxAUXVbuc4LN",
  "key12": "5Vd1s5pwnuppke4xP37qxx1GfmQEvcGNzaFRNmujBhF67huGkbJvzMJXzqhnE9zy7chot5Y2xGR8b8rXiqdakbhw",
  "key13": "2YsygkwzqiYK7sMHDs15iecHianNw81vTTWpS9XhyVhfNzxMwVUPq1D7D3QutUqyFVepZN9Gu9vrHKinBHFrJtGw",
  "key14": "3toTtnu3hvtWQZ2snRcxedVLvN8PcYVM1JzDh3rHJMkaHNDMU8yrBoMdM8H7eeHrZnCMWZazz8mQymm5X4GWqfEr",
  "key15": "5Y3FYDAvDtypmBxGHttFk8D1z4f6gaqh1F1UsUcRayh7FdaQLokggGa9at4XAGfAvmqDA3jBT9XvULKoAVHhN4DS",
  "key16": "52rViYP53nqvDTmoTQVLqHMbGEDTrC1ubi5N1NU6XBJUks7taRUFU8iwQJzySmXoWHkrpBZXUncbfmcx73viYQHn",
  "key17": "6LFvQmanM8WDdRfiaqL3cr5pc9JVEJcJ7jRS6GZTnadstUQBikAXakWCigbAjf5avD9AvKAiY6HN8LA7Ao7PTqv",
  "key18": "Aa4RMzMvc2EFQpmVqtntzrS3STsUgQhiFKvHqXhtyTmudorQBnZvr48wdx4b7k1LF9UKWe6e6c1xUcRAQ6bb1bu",
  "key19": "JYjXDRF3tguNHAmXe2E27gJmps9DHfYzAXtyVMZ2SjUKxvvrJdBDyRij95qtZiJaRCAfYxpbgRCgVK88w6Q9BYP",
  "key20": "2muQcon81xYZz29Xby1nT4WAid536ktNRAjj9fB45LEGa6yt2ibSdQKQ7sM43Lb68t3sVEkYa2W6zXcde3hwBsuq",
  "key21": "2utE5vQduNKjDQogSEujWiSwkd4BgYxwD3UsbJt4SktzHMGAtGPUMk3fLe1DTFeps9whuFVUmPKjtDDFZJa8mwq7",
  "key22": "3uCe65L2pHvyv1RHi2ZqkW155R82YU8aWZyJqdYGGtEkeR4tbFMdL6ctwJxqb8QQEUTL95gqUHLyATf2mVSUjBeD",
  "key23": "3dRKSZjoPHeb6rpZ1W9pu6uhRWTc9xxkX9tpUhJuPHYKqLbW7XEVXWtJr72RCrtt3GkydB95NPpVna2kFM3KkTfL",
  "key24": "4DJU23jDYorgYBECVmLWTGasknGjdkJcdY2orxKRZdtnBsk6ybhegKVmDRgye2Snh7TZuA9Qg8kHaHiYWKdL2N7w",
  "key25": "2nAS8iSTYzYCErkSE5jRMLGXt1seKaioBcDstHLiC2Lq4t2xZasqzY5LBq3kgbYPuVp8BzcmqbB5y4cACvPn6yNi",
  "key26": "2FuJAuzqVBFeTtsknrRyADBJU1AAp8P98TX5xPs7sVEYaXySfufxynyYkx6oZ8GpSHYHcNRBVDiMJao172Bg2oNe",
  "key27": "vvM852A8GDkRNLYRbSdnWpsrBTiKJoUXatLqxVfTMrJvjr1kP2F12WDphiHJQBu8s1dLxEx9KfhJMYksj9pxxiT",
  "key28": "Apywd3VwJHWXGiZkwznHCoPnp7wdfbiyZ86MKLqb3xMDXfovFiTjwJETEkoKVTe5vKNFpgNizb88MMRc32zLkyU",
  "key29": "3bUn1joZeYNpmMueKr1JxuLLft7GpzjTfndN5SzgfempWE41wdJ3jG2GwNc1un62is5BUHDFJ5d57v2uJESqXh19",
  "key30": "5HCBXMmdsBuSh5W8CsB5G4vUU3eC1WBZjYYPDXuNiq2dsYvFDNw8RhprVjN6V32HuUmntujhWRabyWHrY9CEqjm4",
  "key31": "5yL84Fcy5uMuUUQBroDJjpR7zBShWFrhEztAVyMbjgnATGnhvFnJvTbidmTX76D4niBA7JWzncAxqRHE2bEFMWrn",
  "key32": "5u3nQcxBqS56GZjM8vC8CqikoxZsh1cVHV4Y7HUABiojGyvkG8tnpBSyWgAKH5mHjhjCQThRnMntF5E83gCFiNuy",
  "key33": "2DNTKg8EWAmq8RVT7areheTeVPFS3rSwFvr2gCCGdvZFeK3mfhoMreohDSReG3ZKvXsuU5TJFcoMZHFSLD5Cw8xY",
  "key34": "3QSqs1tZpjnyEz922V564tScVnwwbiZ7UijU37EFubvQzRaMzUb43kAEG1AiLANumkuALFScTrgeZzjupeFgB2yT",
  "key35": "4HgoaT3quXyCHJujBrSobEW6q1fKR9eoa7zYYe5fQz9yuwQQsRc6wfW8N5m8pRB9zPBKLCGu23nWn45hruuGRqpH",
  "key36": "3akwbXiXaJ7fJbEyx6X7u6PDs1tdnGty992ZapYGsdP7uUjmsmPgWg8MM7myrCsuv965vRKGFGUFwTgC2MbnaY6o",
  "key37": "4BkQnHiezqPt7u3Cn6QB5pUSj6Yrm4XmJnj6dpPB5RdPhczRLpKZtkSvweEqcVu96qcfMjsmEGnsdNVssphwMyLg",
  "key38": "2EwVQreCymbPev1J9mWGXgqLLhoZ1T5r54KmrG7CdCHHrbBtdXEvtXzeyi7H4UYPcUdLpbSAqyhAdAkbkiguFEEs",
  "key39": "4rVnprRyFegwX4AdGeW24kDUz41P1JoPcZjz6GRKNdo9eVvbaBVc5ZfHC4yCX9qzWCtQjmbsyk15obuTTZ38LvKg",
  "key40": "62XckNp4R54Hk1qC9chNkx4PyhDT8jnqVpSHGAeFjYvRVJ6AiSH2vQ5u1PDy1yn5434dcAJSmzmfhEqucBd84E2a",
  "key41": "5wSDH5HN2LZrL2r7P6BhPpDtWjTkAhbxGVTXrNzRCcwEUm5SvevipwE6XReUVXpWtstRRgE8XtTi73595BYo4Q8t",
  "key42": "4KEU83E2iah7HBmKv3nf5pn73MWvPTbzEaVnGfzksa4Nrn625YWNsjvYwGjaPTmwmhdhHVChtX3u9t7hAmoS3SdN",
  "key43": "4EtuSmpeo2RE3J7h1pci6h99Y1wS9pnxcYdgBQCSxLsdakr6DYhuGf7GSSLaWbuQYuqP4zVVkz7HXgC9rhPEKKMJ",
  "key44": "3Fy4NdKmTtW9qQtFt4grgXTTStCXdzz69r6pQhSPVEHv2Ks7D9HvT7Pb88mvSH43Gsj7neX4RzRdS3vdTnJCcHGq",
  "key45": "D5CTpbLkz5hzqckmV9NEjPuyb43ogRQxgApkWzPkhRk33i5t3Caqm34YeNs4mYdWV5n3Kd5wkLp2FfvhH6DbNwc",
  "key46": "67pBXRYfrUEp6hb8W8UiJJwTDYnTsNWvfE6nuqnndt4pzUXGA18fTtpfXb6Nei8inaVENmVZao5etcuzP6mYfN8v"
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
