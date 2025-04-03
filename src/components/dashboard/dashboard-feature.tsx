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
    "4JjVwQynnFipuhEsHMGFuqWep7VAZU3eP8cg7cvzNtFjuKTCWc7hEDkFDr1T8ogPbyLhCSws3ddCNXgiAqMH78i2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RdaKXZRddMmBxrypx9KNz33q3oPqYj5s9XKkKubayAaxcfhWJZMcGVfrBXnygM46ECC5Nb4arsu4s1GSoz9gScU",
  "key1": "2J4QmnFf56NHvXLBs3iGSfLJ8KdJDUJQ4mLQFcByZxKTNontGfRn1rkfd2tQRSshjhCHwcWFzhxrzurtGM9N4YxP",
  "key2": "2PH96rgvzX6jcGEyjPoNu2MSD3c3nkTfUUcZvbodX1hPPMmxKeyd8USoiYwuNXetnTAkPLPXGTC7WygxgG9wAyqQ",
  "key3": "zDN9SAs6yqHUjiuTnGVQP55KiWkmYUji7MVUAJtF8GgX5eXJxtBwBzwKA8za2UGqmx29TYSscrdfp7bhZzyhnfP",
  "key4": "2Kum1PM3LdHjVqhF4KG9qJJDa49gqD5adt4XJoDzscoozY48Kn2amH6DSa7Ae1g2zu1s99vsv7Nx4QXTGtZR7UvW",
  "key5": "5Xpj5vNyiHQurkAMpDVH8s7p5fWS3EiazgAB7F14R57oMChrFDg4uGC3mhWBSc8fExzZPRvhTWpfYsu4uvp5JJwN",
  "key6": "3uiMszApKkpjNC74kC6BPZ6sRfQ1WrVtjSyVr4o2b5gTxAhAKWpGf8MYiq6ZVnWDSyY9S6Y1F13Lh9azcoGPS9uT",
  "key7": "2XktsUmVcJXqK3PetP4CtbtDHUx6nfWK4FSPWqaub6JtqAkTWhwTFjpwsg1Cg76pyzyXmAWQ3yAiez75M9XBBFAN",
  "key8": "5795HGao9nysguVaUyQ5aFwou5X7vAuBnNvP6n46DNbLvxaqf9WpJCJDmdy9SZH2KvrXeKog1H7ktUiRvfcPy7bk",
  "key9": "JzsYDAR1emzUx9C327Y92pV9dewbgn478BmyzyxnFn3in64xyRFgHhSJPiceWrqDsbS1rKYxJFiwtcJXLYTCKgV",
  "key10": "47b47VrN7tihQNoRMpxejFpgk5isN3VmXeTUa3gHrYWtjsWKAmQSETKCmRiFYpeQD7kvn2CFWHzsTs7EwLgdHKeT",
  "key11": "2moJFaEZxPkcgaFubaXXKRjgXYTjd4GPXv2Cb7sWxUxhu5U4hQF9ZNgzEwiXMutA4xoo9sLsZJPUywaXJjvtHwG6",
  "key12": "Cb6kX7oJZvP35yLBEHPbEcyNQZEmGnwormVcsdXjwKQSFryUsLAU7yiuFfZ5KEkcv6rcjJ3EvMXaonhhBhJG7ip",
  "key13": "2Bf6kqgZPKcLibyrZ7vghHs9PXJHbqk7LV3HGMQTNmewtQsnLP58jYc1sHiQyCp7C5SA8Jq22QsY9pS3HqfB1t1c",
  "key14": "5XQzX3RuzZwg9MySYHHKK9Q4MQ3wfrp5dLnxmy2pHiJHXyFcsc73AfqGk2bGnxCTEHCVNp4eMmYugHswbGkqn34b",
  "key15": "uLieKPXgx137jDiSHgqejZWpreaFGa27VVZ28J8K2b4GQyVhQLen22Yywp5gxRehDUpBEhM1gptTCB3F1g9yfWN",
  "key16": "51NSFs6xQS5mYwMPitmVEmYMHXHNSxaRRkvFWt8FwznhyrbTqXswVkuzqkL3zFH4VBatayvALBrwwUy7cRSYh43n",
  "key17": "BfRuAn9jJsiuKaXRtN4GyGZE22y8j27tXYaUcVEpeLQWrzAprcnLB5hpGioPFXxzQYCDcvZXL1AZKemW6HhZZrD",
  "key18": "3fn4ct5HeRkGQRUnQjQV7ZRb99ZivdbekWK59L8q5fCzD7PExtbLXnoCJCAaSEwsDbhncneFMRCWT3Pv14UraKGm",
  "key19": "3EJ4qW5m9Zr7LjgE4V75dFBChdHLDKVSyiYKHcxwdbpDtdRMQtaHDYEtdDQyEX39Uw6JHFKYLTvXV1R7YtAHGF4s",
  "key20": "5asd16Z4BoMdpEgMNvBAcFnSDqqGT7UodSqHzH4cXavFa5DeUQUCbTuUuaWvsSYUA22yg5Pk7owgqfVjP3wAA4dE",
  "key21": "3P5jSvUNyRHC1NppYeUHeYFC9kmbKwhCYp26fep4DzCWo2XCMj1WYrJU9VvckBgntLfbiFkmMxVXnBtSyac9BBtj",
  "key22": "4VCrSiQbFdmXnUUCGbxgPVqe9sjwWW1Nr6pu9rFgfPUnE1yaH6VsEjuQ2tZ198Qr24YkLJb3yytntBVtfkLStD75",
  "key23": "4efNvLua9wXSXFU6ED94uJ8QVibYyZsSKNWD59NXeyapht6ihzUGUubuxDgRP8HT5oBWxaNWHWe4jV88pSdFvb4Q",
  "key24": "2ezBuEkRk7EYfm4yw1tj27mTutfnJWkdr3tfnpYJkhmhWxibWBYkkM1MSY5LGTY9tqtomaMtp4129fpRhTuctWzj",
  "key25": "33HTfJG7qh9QpfjYjC9Z2G2FPbxk5dAwGTXx9tRQg3s7dis3auvPe3Hy4CEUvDeyAHgnqf7hcCJFvgQqci9dA4og",
  "key26": "37EfHJMkm1i5d9oKaZ2RWJwDqN4F9JufbXc1zYCqnCzRvWajdSVk6GVfp2B3KF5hA7thX1qbEkPzhW1USSeyZxRd",
  "key27": "5iqVp7mmejp2MNsvtBPatdXV2WiZez3mGmsJ1AgHD3hCGV55Jxcy3CmkTbfafCDV6kXgC6id7u3GqjZ8upP43QAU",
  "key28": "3psgW3KdjoLSKz7r76aMZzArYduxwuWX94G1vEBaZ4cMZ41hSuqk92UnYDaqbADf3AiHbdyk5h54G7gU2H3prBVZ",
  "key29": "5i59dKG7Q7FpSF5DeCSC5U4RA1WFiBNTz2jHmBkFbPa8439Tpve1cUmDqhGY6nDgK7sUvdEdLW4tCuJibcLXdKcY",
  "key30": "46qm1xp2q8ySQjwXtxqUUjJyArtNCfaQeqBQbtR8sA7d3yYTiDytbq5Vkva2ajcUTvRnyXt8WDUFHSruFYdbWvdj",
  "key31": "472eU54NWXNdHUH94ttGZV3Nfxz3gb1NHZJksfSbrAHNdswCGiZ8WdW862svFCw92zedAmfBS7P7vBuAGF9jLTnK",
  "key32": "21jysAYrMd233WpJKSEs2vtUyQYvKxyxFLrrXatMXCYdmtfk5PRBaop49wGcvT72AaeLY4uSxEhW65HUPWUo7xi7",
  "key33": "GLCidTmzgwm58D5UXAhZKam6teJL2sUTGAdBGXBwrjwVzDkH7D9RJ7MZbFHs9TQF7MUSoSXTReHyBnbJbTx6PSh",
  "key34": "RogPGnLotzwhRW1PEKaJuk6dypuM4BhrD71HeWvisKUVfUdiNvduPuCcg6weKGoFQsCbiRdTbDiGSPUeNVMj3co",
  "key35": "5nJmu7G6LSQzTNHAZj15VLmQjCXkAbWaCPiZihPVAdRGYXPoAA5onY5PtcSeUTmS7k4RKuDeYen2xpX5LGT8WBWe",
  "key36": "2uPF6f44wr48w9NkeYCLN8UXk18gD8gBf5Be9s2RUShut1aQXWztjJwGjw4EP2Ru44kqC7vkd8P4T6Yq2vHYxUug",
  "key37": "5jNXjtkmbP5gNjgEp4F8B5Nfr5fqZqjyqbRLQjdxUMqXeAjZnY71DCZcwVfcrRfbWLta3CuNq3f63pD68Z9PFxwn",
  "key38": "5tyeQSh9pPtZKyKSNH8fkPiHgrHzdATEViX44Z4Y3x4EBTeWNHC3PBLpEyNr23HRfUHbJZAwpehKRXQQBscEirN7",
  "key39": "QE2uoza7GKevaJCpz71Lf91qsa6Lf7rckpTKuhVbJr3jrXperTd7EWQhQ6EVbRx5hLhv2BXm7aWhxFuRj671nAa",
  "key40": "3tFg978YNgRECozEm9237Vk5GvGt1RCrpTJBRnYNVKHb7DTbGgUcumXXKGqhc7WMtxPwRg6351c6C5cC3obden8X",
  "key41": "5RBb523c9C5LPSzZ2MPDN9cfmagsyWHjp5d5jo7pxqiQWoeS8mKz6p5Jb1bsgFxjAXgDM8faWi4jLwzS2rc9skxt",
  "key42": "ESYZeD31wydPSs3TSk5thZBPpyPzt2do3sjYtbR3qqzW642s6hsiowr4pGqkv2irjd8MRqnMyprEffqnAMAqZ9z",
  "key43": "2aunShuQegSG9kEAeFETyXPpbQMxxaYSFaNVNPrCZ9xaf6wCUUi9xe1pWMXP8KEVLkWhPKjmxyEBbvbYbxGPHTPC",
  "key44": "5RP8FE71dE5g9zgeosrAuvNYbq5ZzTUeYp8sjGh8XtVWpuhh8crQFSifRHGp1VXDMpHKqhSeNg79Gm6DPsSbpp8q",
  "key45": "5zHemwsM3bK4WhiMwmRAhCUjmUeE2w4ThNkURZw17E83PdJrvyABv8koGsuMiQoYhwzQwbTjScztX9cJbgP8dmBg"
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
