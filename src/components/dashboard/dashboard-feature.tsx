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
    "3rcfD6dZJev2NoKxzKqDzKYR9cMPSfcVQfR688bzCPsk6NMy8n4JS3Zs2wzSwLtUaHfp2oe1E6zs9QioCFTzP38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q2fWPG7Pzi6YJEjF71Q88vkGBeQXMev4685CqNbSMSuwvRAkY5aZtAidGWy4kN7cBnZRuhAfwWrUaUzcxGPCeNY",
  "key1": "4dwh7qHF2tiDrif9XdmDhR3LZ12HPKZZ6o1AnQprgS27b5zhdzRsJK4G3zaC3F8sZV94rdGFWvUwbKoeJ73J37Rb",
  "key2": "2McB7mqdeuAoLsZPkVZmwJ3EhDTbweCqHFghraJVNnvukZaSPQZcZBwqJMjiLvF47GvDEgJgzSB8xqExYW1j7PsD",
  "key3": "65DLQWy3Fy6WXJ5bJujvUwPp9HUntD8RiVGwf4gD86jDX6x9z5CDXXDy87L2rNuwN9bqGQkBkCBckZzgCPwJAJJx",
  "key4": "2vhHw2PR6GKe6ZKH4WbgRjzjBXcP5yHzzb1zYG9L1Y2CwBTgTSZjbPMd6km8hcPp4g3ajjvFE7W4WcgKGvWGgC26",
  "key5": "4WsapVPe1jz3Ve2yBexRABHNs4yXH7VPnDRSmjttRwKohK2qaAat8Mzy5SpNasP9YwpdJ2tdmeBDSYmmPfYPBKL2",
  "key6": "ht378VLsHQiBdXBBY7fy7otXAvLyrTNhgwM4VSc9TJ5bJAoaW2ozq3Pt85hiAb5NLcPSSczeonhGvuwVj4dyFaS",
  "key7": "5XXWRgjDHfsVbc5fL6ifqzRQY2DvncZkQSHKq4mjkDrsLUb3SvpF4qcXnBoBQArobh3q7A6dsofgqT7dzKXFHUvD",
  "key8": "4p8hmkMo1LzFk2Fhbp2tYTcqFP9HTWQnN8UdU8zyCLE2DQjorBYHqNAFNBrGnAi2jq1AF8YUjComhw9xTyP3zBbD",
  "key9": "2CvuK4ndqQhrJ57AT85SBeTSbSDd2KjXcddWqbZrTouq519bpmtF4T1khxpFCiha3qQQCK6Hdcxp3ZHSSdkrbESi",
  "key10": "2bMDYYsEUp8GHEBsAUoMc5pVgFykWo8kacnEc5frY7Ew7BhMUko2ekZtmsbYaDBEriXoF5sejTCEgs3JyTXAyHBQ",
  "key11": "1P1NsZpVTTdwapDjQYGeeywckHZossCb9UJhxt4cZmVuyNXtMEyQm4K84vZcCcma5wyLwxVpdbTWsip7KjWcjSL",
  "key12": "4opEkHTHKetYHWvtHZmGpiQoVFXvsXFKctZP3s7AJBVVQWoD9VimtuTqSxUf8KBm2PRVPvD8UKDPbqpLpAXz3AxR",
  "key13": "2ocbKsMY7AkRkoHnPryRuL3gqW4h5AjrHWsKmgLsM88KCZUQmQX4TuQR6TQQKD146ybNykuBBn6obtgtCLViFwGG",
  "key14": "4wrZjBuGyCLJqFLGCLRFzjK1n7m4FSVNdUMbQAuiftqMg56ntJAoEAK2da1K9usXhALknpASENfS9uCvPZyVRFuq",
  "key15": "Xs4bN5jAMNJirVBW4D4KqgnL3TGeNJXezkA6izVF37YC4517s4m8Z1sULiLP3hu5HkoaR3yUCZiCredQfoUMipT",
  "key16": "2nWmfz5WEv4VZQkmCjTRPWg2xSKwVZNpf5zbJZSKZHvsvptiPpZah36WpmVPwV7SkF3Fx593vdV9MxgLShKUwoMZ",
  "key17": "2tur9MWvg16mCSunVEcDHYkc5Eb3pfmmUpLo8QLPkAWyt9grMfMR9Vu9Cv7E6Z19KRuP9YJqMFMVy2Zq1dE8jqGG",
  "key18": "3zXcVnhQmBmy7xY9ijp7iBzyEYkwvKk9WSkGzmfBdeWHsmpFDrm8cr963xd5hd8K2rP4MCcTzgAAfPkv2HVKZkTr",
  "key19": "qUDYUEXLn7Tu8gfQFQGuMcwMPeVK6jnAkGtLhuVRvZpcWtBxqJmdMerQJfcVkvzkDWKDcW1jF9fbLCYYRad4LLF",
  "key20": "56mkZpVGjegqUJV1hfkES1sDgn5FvpLhrAo7tRjGjbqLBv4vy54gGZ5i7hFSHnimCGu4ebFWpHNTRfFhyqwHdhuG",
  "key21": "CU6yPVoHTUDch9haG8tw9rBRgDtKUSx5kTpih6wubmHjaSmLJAm5oEmoi3vnQ5DXtWsUnJsvzqFAim42Um7SEM3",
  "key22": "EY8SntApiP3WpFVyuCMJvuRBj3x2RKQ7quUCk6Px4jsWHzZGUQtaDTNVzfpNc3skoS8tCRejvMB7nyStfvE3yhh",
  "key23": "HKU6DeJBqNQJoNYGe8e3WP8nJNEsBRn1XJMxKFE6xvY9jtHkDpdCn65ksh1Mij6u4X4edase5xDZYdm9ozF532B",
  "key24": "5tQRL5v48BHMdZL9rftG9m7iSP14epHgFWQidPday3sCf8V4Rm25ME3uPJWFjffHd1dybXvib7APvWAaYgcAodQF",
  "key25": "2wef1cbC2erQvoqgRuAzSxUhEkvqDUZDPs5msQ3qNioYBzQxU4CpYoef1eFKQ47dUTip1HA3furKXz42nf7YtXf9",
  "key26": "8UbAf8cuqctNZKokRbGQmyyELZ1udQuXrkaCfAuib7KN3q4cEX1rXzKYLeSnKqLjaFHNVeJPTexuqQmkdyhZ8We",
  "key27": "fZ3GhjS7gZBEKkoqMWCVsDF7QhXEZF7XEFnNeTMiGH5pUF8uJj2U9KMkid4r2dCebuW4SbHu8RQzLiE5ZnwCjne",
  "key28": "3H9b6VEiAEavtZhLAwSGUZ2hgyngcuUnAiomSUWr3UVgUTJvK3G92918LKN7DCFB5KVjMTyWp7WECyQcSCmz8QFm",
  "key29": "4irxDPmQZqCNXfthRcQJjUXKAeMU5RbA8owXtdLL6WPHd2wTa1ycxfeBDUmQfDWVCBpv2XvxW2cp9GTnC8WzkYC",
  "key30": "P2ruM2cVSyLM7SRHfssDk84YqyaJVTzx1Ubgi52wuqsZvkdxCVZtgCHroXVi5sJhu6J82e5nSHtr3w6RmDa5jjS",
  "key31": "4HGcARy7yvXScRAy33iaMpEKeLFBVRkhuQb6331egtkS9cv6XkVR9MVjHmGhLZvPwJNcLpKzpaFMWTNww4VcH33p",
  "key32": "8nSh6yevLxPMKomUQ7aZ5jVp3WhNaqzTf2Qq473YMjXMsvuRQPTjvrfTzZJKo4CQztmnYpZgQyNwG7FzuZbKHBR",
  "key33": "54QuGsTEC5zqGDjoMyCN99DidBg67uDeCgR8939k9LKSHr2xDfz1RLC6RpurJJBoKoX1MxhuFTmYTeY2BrNh5Hcq",
  "key34": "2a5xLRRvSiGoVEmH99pGUybonALTfq3JsrDzNXQnVBL1DoJfTPywQb4NDAcKbJowzFjRgf5fhKpoLjpxUsA4TSqe",
  "key35": "62dHw4YPw59KE4JiJhEyGDauXcAHqGe7Ad6xAh3F5GhDYW8EEJM7Fn97FuYcERXqWUiA9pM5uJeKmCtfhUVJKeG7",
  "key36": "2TwbHw2YWj9kXB5kTjHYkcLnWRWBFEePVqT5RPiratShJh74rwe79grjALpSStdu5vXB88K2nrGFkCvsa6hGL7Dp",
  "key37": "3rkdMsU5A1SFQGMouQLRdVFGR57hXF3XCiwmMSmS8PhejNpfg9zxcyAFKaBKz3h5FEUpAB59QJwyJuBPJGuBHNV6",
  "key38": "MPoMot8wZr6xoXZmFpzkKi9zT13773fCPjvpJRmFSrczns9tDFm8nrDHWGMMCBHsoQjDY2xpjSabizDJZRBwgjP",
  "key39": "5P2UZnWobJaDb7Uq53ufywofj2FnpCMLYvMBJe69fQsNJ5gTcEgM74H1MFTEwgvxbQwieHa4DTJM5156gfg8WBh5",
  "key40": "5ABYVyX74q1LGfWR6g7NTNYkdLma7i7h1ucV8wR9B3XkL4EJPV7PQbP8tPmrUAvQfmBi6wQFpQQ5FV9yE9ZfuA73",
  "key41": "2uKT6Mo3mnt5v6QsHkUbbmcwrrN7RXn4sjF9gWbURSAmW8Ra5FSFrw7yioFtJgds6bXmqQSFsRS3Ho3N5LCHfknv",
  "key42": "5c5BxiStpaz6Uo2FivVeETYbCYA7ekDVgPbW9UUKgBR2fxgARGDQvv9H2YLbghUPWn4RgYYkeY4FeenHBb5pXKbx",
  "key43": "xQd56ogfQgRTLcHaNv8DhnwsxqgaNSPP5T5VGWq2amH4m1uPDicxR9aExoaVZ6U2MjiypEFUJrWc3Za7VmdGDkh",
  "key44": "2ggT2kP8AxQ5RvZXGSKRX7z8ENHppkFMq8L87HP5UqVH2au4gVRMBd5h674LjHa7T9BjGxPq5wFEWzyRhUESpRrJ",
  "key45": "2tvNR1xR5A8fJFrcxqUcRm6Lts8PFmH2BsSgRbS8m3gtdDNskiPvsNxbag8HpYCohdugyx4vUtaPpjNoK3PE2GYt",
  "key46": "3u8MTmEB4s8ebCLZzS75L7ngkC5EiQ8QDiMh3jQZn5i7J9RzsivfkZs1xouM6pm6zGm2x62REkYQtVErjHTxEFd6",
  "key47": "2UJ44JRpD9z7Vz3N2qwoPj7zsGPZX1Ecm5xk3UDN5YgT6Myt2BCRYNx46fmvXzkWQAQnSj6PvntwtcuZg1SxWJ5W"
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
