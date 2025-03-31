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
    "667J3SC5G6buo8np8aTkkMkrWZhE546PSsBXHGy6eGUpCAFSxADYXPz3ft5XHLDM2JjvX5FSUxqRXZ4FxBmApBMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBhjxbtorbhMtPMi5roVEubP5UsRhRpEAuotgLpErzwXixaQ1BTaMjkCNTUyB9FmJ7EpAghGbR7UNquuhKhV6s9",
  "key1": "5WVvGRyYbpR7trtj7enPUaV4aufRbw3ESHjUMS6DbfpC9B8Kh2JWK7Enf1Gje3E31pxzR8SWk4JJX5d37f8WnrZN",
  "key2": "4pV6UwEF1Muabmgpa7eFv1u4NYSqj1XL8LscM9q22F8y1LRUK22NbCVD63CnR8NParPtWohYp5pqkCUPjcZwE2zu",
  "key3": "4GMVPGxJRTRPiSmeZ4FgRndYUMbzWkiMmcyMUUFYZCC2XYqe4uJiJyHqwr3pxBfHWCrKHej7SXsby7j6KZsNFnQb",
  "key4": "L9zdnorjy3oYmb8LxXLCXzpNF3UnEZcjAqbUiKtCABxBSBLTVQps6JFNBwWkFMEqvCzgjPtv5we1xfJjF6ygAQe",
  "key5": "o1gAeKteft8Nyze92iZiVE3JwkjotPRVR3PCmFGDC654qjifoH6FsnQ6jcr11Hi6G4StXmSFT1Ekn8SEEZej6dN",
  "key6": "4wquj9oi69wtGg2Sf6rvWpPMxJHhXouqudtq8kyPTRmV5nruwsQJmbrQbumLnGhDEC82ArMbEgHNi9ho4C4Yny2o",
  "key7": "uJTDoic1oQwYbSrawwJuz76AbBsWPgSnUMfQuhp7jZLePzti8Kss7rFYXjS2jRdAkvrb3Mc7QvrTdT6uihxtUAz",
  "key8": "3sUpFZTSJrqims4mTzZ1sifmPGmPhJgi35aeqevA6e2bmxCWf82bQiBk81TMzfWgRo4rrr6Ln4mGTut9V87rXdTn",
  "key9": "2Jr219wCgYb6e5Vx8ns63rPBaHJhF7T9njVocwR176RtvVdwhZrHrKawLdH9hM312WeNtV5a1i8TAeRUJ17Q1Wbh",
  "key10": "5DvQpE9BS7Pg8yA9oW6yWNmP9pzFsfYV7Au57kb7wrp6oP1bBAb8436A124ciqnR4gFCrsRLDyKtN5VQume8HCUM",
  "key11": "3UC38rVu56NjerbUcz3DK6QPxDvmgDM8S9xnGLWFfvJh8H2k16LC2ZCMuf4WrBvTbJ98gBUda3CWyuJWu48byq2C",
  "key12": "3xHuRK25ffxZJWUrQDCF1jUUqXVfLiuL5uRZ6TLG8AWhNSCVWVoBCX1DJhVjshN7NxyRZagra7P9ByuefHz4epfZ",
  "key13": "4mm7sVdDUKawYJcyYdnVaj18Ju7ZnMesLiGjt6MD45mwe8ZArwWfzM3jAAHzLM7UsYAVapGCC5YbnomPqVh6hfTY",
  "key14": "Li9zkocYEeV5HE4X8LbBVsTt5zxe9FTBn3LXh8guez2GJ1nHfQStiTPwJTKiTPozp2pVNS2eqdKSvPJeo7GAdu8",
  "key15": "2dbvX2tPtyDrdTqbvtZjJMXRhXs5c6Kf3j4Lav5EG4SGWXL7A2kzCM9rq5DK1XzRyA6Ngq3D3ikaYk6fjANPYokC",
  "key16": "5F9QhV8yTvuMDzgokcymbkii7YtLqzFbxveVAMpmd7qnnmwsjmK4aUdeFxDYj9KZGynvXx3Yfzfk7rvTDxqcF2qN",
  "key17": "3kQPaNwPaKmL3S1fS26GzZB8bzhjL69ZNYPhygK2Ppp8wDwoj1xAkhSAzxqnYBsVwbprtV6CaaNB8LPLnYcdusEQ",
  "key18": "XSFmKojucrs6cyQhETNszhgFY8Twovi93u6XVH1EPspjGQcZsX7T7dqpdtANruLgkDLo6Hn6CV5sx6tpMeoMgEA",
  "key19": "NkryeFf7RHTmyjDK7WqQESau3tiyqhK1wUNNRUkpExvhSXkTzyqaRvEYAhzxqrCJ4GirBjWT9SBE1hVMSbVLaQf",
  "key20": "2L95rwMKD7KFqGBbnVsmhDsMJCG5Sa1wGpbPsBThfvJuEZS6Lku39tT5RCFZRYwfDfxRwerDeXeDSLpQz8bHoLUD",
  "key21": "3XGXcQubTcUEod5SxLXUa766mrRQpXFaajEjC9JaZe3b6Uctm3uka7DTt9GAKJ1bLZWAUk5W3RpCyk67oTc1goft",
  "key22": "3aTPLordJy6FnY8qkfgwUEeUkUKUQtsHFGgbtGxkTK8jR4ps4mmWCkGivUHHtkfszm3D7qauQJm3DQWoXNsbHX4m",
  "key23": "3mGio8GLpj9jpQ66n6FyTK4aiRvPJPbgzKByKXqMju31xSMcfJnTH1bpvvPHGpiRegFC1tDSScDD9gUaA9rZfD7h",
  "key24": "2svY57p62iSt47qWT2W9GpZqEKfC86MKrxkCp47ES6133kok3CFyJaSYB9KEjsja9AqbDp47rHtyS6CC86gPRm6f",
  "key25": "46hfnynBy365QWBQ8Cjps2VuHMRxE8zKFKc6DZZQuVYeSpCbqssyxfzoAHB73yZYz5BnHrQgzYFQyD4PpHejYvgh",
  "key26": "3cgsYDwocMHiE4rrRBFffDgVx14mJrRR6p1Kkr7sBLZSmcbeoATexCozm2yVtjs1FXhmu7qW7LK2n53ZERgbRJi9",
  "key27": "4mXYW412a64CfZjcA4tgkywkZXdHcErnNJGJzRAVCQc9H9BsWVgpGjEtewvQCcbQYPeVN2ADfSjS2J1LYNUaQV6e",
  "key28": "2WB15JiZuQTMyKDSxhayXSSWSjxKC5FMNqcQPhLzPviAPvBto9oY8APBXLMPkPDhi89rtTQsGVp9ZDsDkRVp9x59",
  "key29": "2nqwNP1L56cASx4wuFmQYwY6Lw54XCZ12uQYXHzc3qbWPHxzfg6S1759EmHEhjBsSwp76ZBuCpg9uf4Ht24z4r2J",
  "key30": "2reehruLP77xBTXRNr7JKkfm7vXXy1Z81cUxDeLGp1LeKxniBhHscHEp8cPbKXcVQhDTJzsi2ZJGY8neDrjfo9a1",
  "key31": "2daHpXWMEfv1AirrAzyjx8nPV88sdFFgRfugDuJ9C8caGCvwpn1RzakBRnoEgtEczzWEMHtCtDcPx7rhAKKDmUie",
  "key32": "DNjo4BEBejWncdWmyvmMcWjXk6jFwcfTfhWam22aFPtqd9eDeiUjiyHUFPVxfDNUY7jzum4UyB8fRne5cvnAzob",
  "key33": "4kzt3D8dakC5y4mJNjrEUVxjGx4eiatNYaMonMx73tuEjXfw5BwZ9uMznMSpbztCxogwFQ4GhUzxc2z3NueAfLYx",
  "key34": "397EH3PfeMZc2x6mWKgW2N2VvGRK6YgqSQuj7tto5jn1eFDCTpZ1pVACUoZxLuW1ddhYaEbuERDR4vY4iMXKWu8K",
  "key35": "rw6CUBqPV2pkmh9o6ZqSqaUnriyjuMiekpJHbVDXLF8hRpA58NSkLfk8aYFKFJKp4rAv3MepmqfQxBzJzFgtemU",
  "key36": "W6xseprE5wifDvupQhmUsxCSTLs53PsqbsTkDqzs9YasuxzRsXPrZCPr7Ag5zKxdC9R69SBNBEVhTtHdeS6nRQc",
  "key37": "3vAyU8zY8mMTn5KePmk7jTXBD1RCP2xF1YmWGW2sWdU88PK1uiUmWSKzsZf6hfbAbn2ZaqsrP3QCJrof2qHuwKuy",
  "key38": "44AM5DWPy3rBxr5zS1G71ocMgJDdvNPgi2gYYy4LD446j3TTWc2N8C9ZiXivk3hhTQfuGfVMDJriEWHGw6ESyiUR",
  "key39": "2M69ct2FY1Wxy4tfYTtg7sRCBrZoFGWka8KprLesi8CvnUGvBUx27oMcYsefpJJnFvXFzXK3UyoaLGyL14L6Xicf",
  "key40": "26DNv32iSYvghC8Sr1vyV2pSLMGeifNbtgLoNarSgYBYio5LFRsnGWTtY71jTAZaxikJbCjhW6pXLv5MiGdr6F2V",
  "key41": "3nzbcb1DgHMDxSoA3BdkwE2V1zSHBF8t6eiaDSx8VUSVcSgUYy2g8pN8tLCLuembcg8LzHZRhL6NZxVLS2fso2Dg",
  "key42": "3NhgovxuGnVAMjKSARAQrbop8NUpesfp7VHFv4J9rdJXosjagmCQVyzVB2eFdpK8FwaVmxuvjPBn53dahjphPDsg",
  "key43": "2bSEd4w6uZkSZtFuqFFvD8wYEXxa36mRjWgrBhb7mxZxFwsrGNbmipFmCui6aaGYzFUega2qJNkponH5L3AXgnNm"
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
