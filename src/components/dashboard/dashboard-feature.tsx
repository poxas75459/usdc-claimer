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
    "4hTHeNQ1AHL8thTAibJK3wU6omANXN4j9bJKR26YGMzrJzURdqwN6ehnuq1kHAtEsqyA9LGqvcxRjWnPFrN3Rsnq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dfwgyob8NiF8YqbvyxQ1RhWQJQQt2iWUZjai3cbU2A1hznYd8YZSFPLWoV6vqMVaeCDjerjHC6hRhTA2j4Fpcfq",
  "key1": "2yqv6Jmu4Pqe6Geko8HPKwZG9RzSJsko6p4B54sm5gcm9GZvpUaZe6941cXdEyiLhQZ6vvPGJzJbFKcVstznQheq",
  "key2": "3xo3MGVdRk6rg9J9MbSDdMxCd7eT4PHBc6mjcPVzqxd7Nc2ffE9B8Le8PziLnSxabWXfMtmQGcMB1qtrpJGnSPTK",
  "key3": "5LDiHQRoAFFL5PG72Xp5UP5G4YDmS5EkkAi6wqDHjbh7HmdbPaG9tnonyJhJrNK4XGq56BgSpmPCnNCGk6EpT14Q",
  "key4": "3enZjxLuZfBYnqvrdzuYyKm8v6rTSYbYS6Ntb9VZa3HwbFTz21c6SxmbS6YJW1Qss9yG629uzkN832cQTmAMNX9N",
  "key5": "5aymTAT9pM1nihP5Z7dkPxTmQWN8rhCGJgEh4Ro67FunqHM6j3XorYQqvi7UjzsFVhdAz5PX75BxVZV4vmcUivEp",
  "key6": "2xu1DzEEKaARDKPJKKBCUS5mmyYYRJ43XM3A2R87b1mMDUWppuFtmUg3YpDaoWA34hpajz6rjZiP8ThMFfWLA5K9",
  "key7": "y2Wrqov9eu18PSjt35do9ikEnapoNw9zXNAi3FmVfubdRzzfwn5Zf82xkt5cXhLcZ8Sg3REGVhM9DQHU8NVw1jd",
  "key8": "4AnpcMbfbgeVVoa7fW1BoXg5Sb587rCG6LjY813dUEu15wHqHxMbiLNbP9TWWfFXv5K3E3W6rsFH78ZmyKSeg4Nd",
  "key9": "4szJyF4iCUTSFdSvetP9cVunCmfBcjztveTye3C2CdVzeeUa3bCbWFTRtvhRdCUVuAMnNd4CSYeLacKHv1kNeipG",
  "key10": "3rY9nbb6rFtrdtSY5o6n3Lg2Ry69Shi8Lyq9sgFaTVb9Yth7BDKb6kPrgHmxzsVZyQoRPUup9PGMdhmJ8y9iDeZe",
  "key11": "5XKQoY3ySGeyndHVhZuCpAesnJUoTs8igv8dJ7oLqdMCXnspPATeeLBW6MRjPkjeD4cXxwxsXyELWBj285abz2cs",
  "key12": "5dCGBMcPioSqvJ1qwkoH3aS9X7nHVs1cK3fcYafX6LCMSaerx1weXtVmBBUeMc6XoqVLroqnJxaTm6PHLU14k8Gg",
  "key13": "fTG7QYrXQrEFA2SbQ6n6iTZ59NaDVFBojLvmk8SvuPKko7tVi2vgbdwVfvG1EDjHkBKoNjKxAbLv1uGnPUQp76R",
  "key14": "51hZRzpLeFA9gH1wrEeP5aTngdjZvxcXpFC3YRiYpu5YPf2Wwdiu8gTFER3jjaCNuGsD9LFUDuuqGndGZruFqWNe",
  "key15": "5atBf3KiMjFZuKCR2HQyaUZbCWFLGFoCL2JpS5EaGUU3CATbx34JJfQdQ6xGBDWH8XRxMgV5veHFHK4z9Jh9LKxh",
  "key16": "2yyVRtB5J5g7Qe52S1xL2PnWvREe3JQ1MEFokw2TshnpoxZC1GTmzAGzaSmuzzyZ3rAH1Bmg1NrcrGTmvPcXRJbv",
  "key17": "4nxpiAKUxstpKH2n3KoiYK9TJuY3UeavWadzv1E76rLxQyCKsnEWrnpFcLdFLBYm1YzaotLdHZAd1TYirdXfmtVC",
  "key18": "3A4EyefoRQj35dvCxejkydmfTMLW8gc8TTmZpaHKQeAYseTCBsDjqMbU1PPwkcyetFMx4S49xSNDB6EcqUT12Db6",
  "key19": "2zRUSjHi1Hv5VAr4nRV47FdA2UKEgwGQkt7bRe3A1dCKBSKKEfbG1vgoSesFfMayERQ1fo9b6BKDQEwcw7WahcZZ",
  "key20": "4Jh97nNbN5rnHGNz3pJaw9kPq5o5pCoQJFunmTvLG1H3ybVbM1tJKFaZypMLBeSerSA4RxPaFQTkr4RTKff7CUoV",
  "key21": "seAbQBkEgbn4mjUCAWufDoTtKXhyMc8tHJDDFC8dS7TuqxuVgF881BXQzyHt6PKyL1bnJdc7TYv8vrrkZdvpza1",
  "key22": "53EWjTfUZuXUAZuvQn8MnFCTJvBFkqKi4Bv8YFc5LJRnyGAsQL1UvUzwzftqgYHNQJyiFKn59pDc5VXfFzu6thRt",
  "key23": "3cQfyZkT1Tm7W1XBdRaBXDqP2DXAVcSe6To3beQ5uTFwLzPr5t8YNocJnDLp4qoRSinGfRVrjxgv4NqBRD2rdLuJ",
  "key24": "3jLRoSZM29G6gWXUwpaeiWHri283oHzeQyboLiKMNC95orsTy3KPW2HJZu3b8S7xTSY7bUWbE6vhMSKZhAaKFjzo",
  "key25": "569meFsmfSPE1RHzuAvESeLS5rAHnfhVJ6XVvDFcCNToC79oSoW78RmCCbJyeFTR5knk8H1U6kEknLaviEUSMrm6",
  "key26": "4Zpe5Kgah76zNMpvUxh2HEp1uJwm8vS8iUooNwfBuLkwn77yMP4JVwBb5DKRguPE8eWqBYmxupxmZjEY2vprZiBm",
  "key27": "kMaoAG3zsnsYn5a6ZSQeFnnUm7bZSeK6AgFgsgro95jMNFrXLvmfENjv3EkJ3mL2qLgnKXnPUS9FTJu43QWFmUG",
  "key28": "66LcLksCTcCJHupvYwBT3BxhxVVEHGTGG1pXMQsSGWP1VVS7vftfDfHCBEchdFij3fEmYSU5p8RiGigfDP6KUQBx",
  "key29": "2dG6dDQjwJ9CCpUGYwFAH5WEs3CeWv2MVCkG5MwxxeTjNwdtCU8MntVZzDG7cMvdWiY2GctX6ffgM9tzMosja89t",
  "key30": "bHRNQc1uxAQne37AD24VXkVBSy6vvanLcYRpJanJ5fhcD2YB8BGGhJNkv6RpeqzwdFXVrAKjAWPAo4w5qrVqs1x",
  "key31": "jfaCwqPjUDbZ22keRFwxtGnhuNF1sszMcXWuNNRouUnwiCu5q8MFVUxMXuX5TXKj4U2hV7moAmsTrUWgxJhxnEJ",
  "key32": "DspKhfsWv1B73YgBgWKs6WDGTH7D7c7af6SuubtFmkaSE6LHjM8aABiVVsSQ7YVHvGahY4UYzVu6D8YopcLedqL",
  "key33": "4WpEzGu5ehMy49iJ8FrTJBpqo1ujwN3Xrfc7j5x5SfuWUZzDtKdZ5akvm8qFdEabuppkPGJxPj5S6oZgC3UDQGf3",
  "key34": "2CCkvfim9qTQS3xZe142aFbsb3qVRjaSCGnzLyxa4rTLGPwYVDzWdSMrjtekNFpxaNHB8RxVwqXhYCrSfZ7rCnBE",
  "key35": "4Xsv8E66MUuDapHnaLmD48kRn7uBaRcW23TGCNnL6h4TQvgcoT18yJnj1GhaJByyVQiw7P2C4ub88YatHEZ9tcWV",
  "key36": "5R4n5za1M43nqsLiYMyzm7UC5wVbPte1nUuFVAq3wTJKyKdL5WavohRigDApC1coMPUW5eGjcbefHS7z7qsW6hdA",
  "key37": "p1QPRTY3uVApUwqCmidUWKgct1MLws1TL87RyTPY6aLwMkwS58WnC69QGRWcP8MZrqArvw49uV84V9mVi2nGnQV",
  "key38": "Fv7G6NYkvznCtnZ2QkB71EgrDi8Bigp8njea6bibPQ1ukToBczKqVwzXiF1d8q7EQE6DFWRXBfVJ23LDYFUdcCC",
  "key39": "57EhnK6wyEQxBA5C8uELHwjphtcjGp9vY6u3TqBq75DTCEcXDy223t2RHakGv3SY5H1p7bM7HWymm5Mo4fv5g6nG",
  "key40": "65VWREGerwfYdEa6MoePBk9KvaEGzbA6u3NSQLdeb1HePrkmhDCz4YWF32dtkL8ZqRHeS5KpL6RaBUXUPn3RMPbR",
  "key41": "2gsYvZGYH72wLngKd3PHvz95AUjVn5MaGnkLHMGeWQ7aM1asAg4TJf4GswTYkRMxLjVFoqWn6C939Akbyth2Hj9e",
  "key42": "4VaZ6hhzXG6MFuwmPu8CgD14acvSVsDwVRpNVoXv5EZxFecMwrJ9ETBUwntnjM9a6ftk3xnZ8gdYAD6j3G8ttaqN",
  "key43": "4sUe5aGfSchEFwZKjnkYdzW1icRX88873JD7WmCuLLf5oeCazMfpugzYfHpbnTFiVbe62mb3q7Y5ZMK8YqZrsSKJ",
  "key44": "qhWdf6ubHPqYZUbxbGEoto1VyPB1tG3GZzJh8KhkNsUh6dabGig1Koe38F1n1bfAwQiRAwQbm8WjciWXpSjdL9x",
  "key45": "3zvSczGiSHiVx4EDa4vVvSRAKtE586Yz4dTE46eGskNcNPRGqNGEGTf2pPqhdmdLhdxesnpE7JAeVgWgvAQ9er2M",
  "key46": "5QvYntvM1VkpnbSshwaxzL83aXhDqChnsnkhZ3jEyFW86sRK1g8Zxcta8QW3LSCGZmm6CrxNhhzA9b6GBcJSnfxD"
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
