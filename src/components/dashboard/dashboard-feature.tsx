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
    "3RDKhRsZPhVGoR9s1rTL9TDhQbvXW6ZGxchyfsMUYfftXtoZmjMKJaZymrSvRcW8bsY6RGb86RhjDXQwQPtUJCdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4669hcNRGhYSq61MnGdTobMUgZiGJuYzxSrKRxYVs9LjsBQ8fdtCtLVXQMLKPUoJacNUDbiGHK571dxrT5jhfpoR",
  "key1": "631w41XVBtVkmASGyN5xjysAZEER5738kcnMBR3iHkTfxs8j5Ymh5DKkJVZ3e6XBm2AsmyGhkEVc7kJVXEy9uCtC",
  "key2": "R2b5pmzj5485kdsXBPacotoPPFH1k4mTmrvpCzE2MG9SKf6XhNpep3Y7xiSuHV4LPxVwAX4eUinyZVRoGP9aFmE",
  "key3": "2t9BTmrQ3NfaNduuWDA6ixYnBSZ7HoJwYL1GkE265LDr32srQr9fb9u8MVoZWrnEwCyiNVbNc1JbcjTDM4f3yYg6",
  "key4": "PUW7S5ZPeqrYp3bB2n6Udrs8PMZWQX1fXLhY2E2Wzbk8ot5BovSQ2NgtBsGzGG25Q2okh6esTVYYCR1LG8V5cww",
  "key5": "9FxKyFQeUGL3mLKR4GRgBT9QPUyhDG7zMTs95s9tJJNruE6X92BYYjA6SFdCWsP2MjP4Fjut5rt9pzMJFpoiHF4",
  "key6": "5Fv2p1iXissMuzVtLird543T7YoN4T1JZDiYKc63vM7xuhUhcXqzWzymvD4BzMpJci2qseDBBH3vDVvn3zmML58w",
  "key7": "3JsUfYyEVqjov3WBam1hfSzeg2iyvbiusgAbCxhwfrHrUMQW6isYC7pEVusRTsEUHH6dUSM4zdwpdq9QHZ9NNJQe",
  "key8": "2uqqa82RGqS1mJTLdnL5Co3r6mvMnSzmDskMoUdMEmYmrqxErestConEntC8Sm9M3SDLfrd7SC5ZQwiGYKwz8H4B",
  "key9": "inASFwEbEZ3ihuecbq9ZbNvk2jhmhYEVjDMCgDRdRHUvtA6qEL7R8oRxD9QUiu5N215cfmBEgBNhB9N7KxVNNhN",
  "key10": "2h3cgwAcWhuEBiXjtx3EawTPPPYMz5WGTJUHBBxQr11suTT555MztbiL1Eub7ts9ZiYeHK4sst7gWpXTBkDf11MJ",
  "key11": "5Q6aHbtfeGfSpQnEVbpBYsEaaD1X8gwbfim48w5PcXH2juH58tRXNcw8u9hJsnci2SvSwmVzPXrBtJuWykwpV2n5",
  "key12": "u5R72VkutF9uiVRQjMXu712BCzKhmptX973w9YK7cJEzvpyknVU4rnCrFhQ897qsNFx23ubErkgzKaaGzftCXM2",
  "key13": "3LwNy8AgziMDebC8vYuxjQp39vErgeGfDwjdEc796kcUMnMsGT1zvntnjVAyHdZiN4SnmZsXETJXYiB8DGpfKYWH",
  "key14": "5PU5ZS2o4h9KTncACZo8UYpHP92EMZZeRJJKYtVeTuPQs9iC1tnX7K7FtNxAo7KGAfKRguNSqGzL74NZusr4pXF9",
  "key15": "3HGpJsVFPfusBRXFPyrkPy4hzN2mWRNTfr5cHaxmtxNgugdaURYNweEn19JGR3JacApB42S2xJqPGc2PwKc87VyJ",
  "key16": "3RB4hWEQqvoAQ1XkErbSZmK3EP2drdnDposjsty5YjwNrk3sZt2PjDY9bENyptWWvZD7CHDsBpGXnLTBrMs66H4i",
  "key17": "3aks18SWPeMTNqEWahAopsPV1akYaTMGbQ8jpNWm3XsiJ2pDZ5e3vW5Rny641CyYkdeQpHsSB8zNaXebMQ6u4Y4h",
  "key18": "5AnHTxJtGMweHWzgWmjJML2uE4ciCgcu1xL6aKhKxJymC6dNSKoW7SSBKyPixF9Uw7vSwf7gDASFRAx8GrUa6Cie",
  "key19": "33mzzdRLxVSmdKYm9ZFv2p85W8AzQSJxSWLjaxwxoT4BrKhU1SxJVRoSnnyt15TPdXUipViN4WkGHAt8qm4esbWq",
  "key20": "3iHszNcgejzDamKF5wZVVSurGgGp9mDXpvz2zWh4XxZD77CyqbWxuKqaZep7HxPpzELBg5eLp2YC8HAuKaCfxvu4",
  "key21": "VqyKuE5LMgBGxRJnwewhMMiwfRErpLUxC7F4TJVq4T3iuRu2Xrj9AHL9PBXrrgbsPGzAFuoWpXYi8aUSvA8QAS8",
  "key22": "5wsDPJNSPB1467g4tBAbQVArzk4MS12ZpuPJ5YWNSPMjp719Jx1gBqUs5hYAq72Q8dvbudKrvvGjsUo76R9xUJb8",
  "key23": "nMC8dHZwJfwoELs696sb9igrSToFbAVgTwzx4n9tFcReXtsHhgruco3WoUBDJVAf9o6Q1FmKHn3BDiNvWehot55",
  "key24": "2o2iUipAaX4BFTUNFFJzgxkbvv5SiHaKNo2kNBvCqNZ8LU48fsSJnL6kVMatpyANj5LQV3SyonGWGbU83aTahjRi",
  "key25": "3oTthV9W394ufFuH1xop78fn1w2fiAX4P3s7ZFqGPuoCsJ8GGK1VteYSuEFoPrdPh9z7MNNSBinbdaFrnTmMLuEc",
  "key26": "gNcSLKuQCvT4Zbqgufzi6ZVush1Rvq2picdCQZUq3MRqL7SWFjBtrzDeKZHvp3ajSdEFA4aAsMaMHn5NhWkJvei",
  "key27": "3dSe1aCbyvqrU7caq9PB59yTenB7CJvJG9Aa2KrNBYhnAFvFERmyQ351jptHZ46WiHrhddBCcYnugHw8UieBo11u",
  "key28": "3eofMng6Aiy7xAyoM3S42z5GHNdZ7BaTYYRBts1argWtyR5nmA7HmHLpzenkpnbbeSRytTZdGkPFNqGm4KnRdixZ",
  "key29": "3fLF4xVbNtdLMnGy8vJLxxjWRJ2duiUHaJx5AwMSYjsP2PWZkzJPLgh9AnFkvW4pCJbwt3zcE3gzroMTY9HxVzKb",
  "key30": "2ENKSLCx7r8hKEwomvyvhJYNVEP47TLWVTXhJYuEZB7u4RoFksY7rXN1pHnhaeNS7QpoDRF86VXhCv7F8irSn1sd",
  "key31": "4uKjPWU2CaV6sVxQSxAZ89kXnDRDsGTca64cAS1cYjSR7ArXBZHBWEEucgCUzJ5RQnX8odScxeG1Uemy44t9Feqh",
  "key32": "28CFSkLWgzNNUtFcRPaF7hJoPWZwK3JS6N2NGx1invFUr9NHAuaV8qnRngEPo2GFMtbuwNth9XfrMsCYYQxBRa4Y",
  "key33": "3Ea2wFeovLrerfq6LNLH2n15Jikzdd5LjnDHS8pnMwkiKLkj7SZ4X5idCWmbu3LaB6fvC4T5ievyLFz1C1dvHfKx",
  "key34": "2QRP7TEYXo9A5tqokPfzrawXcobWPeefdNfQQbMdA6kxG3BXhWwQDmezKb8Vo58iWX4Md8ukmGFtFaNhjK1vCqye",
  "key35": "2yx8MaQHbB87WbsmktSgnXbofyomvSB2sbpQosnmhAjF63mfAjk66zNuKyRttoogZmy7t1eBA9Y1bcfXzkQTCAYq",
  "key36": "4ieiJsYzPjb6NW4Em7AR6zibVJRK5iAHFFtNMHkmKTvqX6HME1jNdhMrUb44kVZv9cDukxXS77Ut5wy5LdATbVGY",
  "key37": "R8ScQLtnTAwxapjhjybP6pDhkCPNytNQqHoFaad2mZSGSZknNEgcYdus4bF7BdhrU13JVc2nHzhuzYqvByUATrd",
  "key38": "3JaDMcwRMVnPpwv6CPELBf1jmx848ANRRLR4ksLzUJQko2NfCreyeUkfBxNKsh5n3qY4C3rDF7brQifFDd2bc3Su",
  "key39": "5rmgRTJTctQ2FxhHDGzNvSpFxgfwkV8S3PL1fQnm96ytEYnSEQez5Dei7tdGHFaXtv3WGxuQDznueFxwAvnwnhg9",
  "key40": "3w93DZm18fZe5RjasRwHZZtxZWWuMChr6CfUt1ESg1R3hEtGTfeRL3p4ENoZNWkD7Rm8zyrhnhYNsb9seCW3fKJz",
  "key41": "26THXYxUCodNp9Rx57iurVH3zZr5ecpMHHgCuUeWT1BC7T71yKc8cd92nkmrNuAStVpVvKqJ6tV8NUPqBJWX1nac",
  "key42": "5RZGg3E9vhJLyE6tPihrcjBWZWx1CXj6QZ396uUPrppNY3v5e1SaVMhxxppjYouszj5CwRzhT2xeDL7z6AdA7B4t",
  "key43": "2Znv7yMh9jdHp11n5EiUBukx79FdzYP7bDFTchpUvzhkfsE1X3Yqb1iFMQyhCN37vrGgN51hDzPoGz49WQbq1jnW",
  "key44": "65xb68QErwtQpWqTyg5B9Np9RGQ5BxXfB6rPHYW8MwYPevGW8TwhhpAkjycQcLdRaRFFj6jUZm55DMC8tzdRc5ao",
  "key45": "2qTsaS2w2J2aEUTtEMdR2vNo3LZQd6SmYDVew5oT3GZ6Yez4fRaz4JUWSzvdKFrpbQDb9f7wbvd1kQ2ByWqPefY",
  "key46": "4dcenzxBGu5DxtWZY7bSigLBpms8ubfRqfAZC5pQUbWHgT2xph7crkStL11Uj4fPnDw62tWyJuXgrndNcJFLcedh"
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
