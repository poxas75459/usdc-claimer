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
    "2R5RAZTwwyFxc85nFKzfhF4sgjWPfB3JXoByWDdLdQdbkhkqPkbz4X1GhsxMnH1EUtyXg6cvAhEsGFsCUAAStdg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wkDSMrSt5mwHvBiFS8DTXkEo2SgpoRuU6ZHXeqtiduExicePKnYVFeNwHKCkUvEPXJy92qM9C8cN1d11GAjZZZh",
  "key1": "4GHDdyrccZuSaZmf1g1sbF8pTAaxyUqi6pDcyrBUpZRJWCRH7XUZHx2r23iNMshGPTYWiVmC39tt9w2tqQv3nCPA",
  "key2": "5yvH4Sti95y4BKMTJT3coTjXqzizsGnqBXoY8mSwbGhygMYjifmeoRPcysih1boNaXZCRooqowBLHiZz2cP6vnDv",
  "key3": "2dK18whpDogBLiCKq5NZSJnKY3hSmb9f96MjQT4qLnDJjpoYrQjZ5Z6imGLaS37ZracD84QPMXC2UGeeDqqZAxMs",
  "key4": "3i2sXuB8ddRVg7q7AhXGvuPTJc7d1XH2UQDAWYdSB7GMs1oPTWZe7ehFGSasKmjtdBWyau1w6kuovGeqxmzkfvEm",
  "key5": "5WPGbePe1TKgzkCAg3kjksjKYJm4iP256q6zvBFj5H6zFiZSz6nA9594BJuzbPixoYZUCqCfZRTjeoS5sXRgEN2d",
  "key6": "4bA3aSUkgvCDjk96KH48smNpa394djSCD72NkciF9i5t6eWSkRbgWqbNcFLSKHYLMYDE1qrChz6Yp3rM46WhFbNN",
  "key7": "64u3KmyBgdUp99m2LZR9RDR1if1v7THsUjUQykN1ckVRbSSzmHs77eRq3a9dhy2MCiLeWzN5pGbJTc7KgekuL9ew",
  "key8": "2m9bFubkt7oUceZGkPhBYgLqSKqoxKrgJymvRbztDJddeV8Ka9p3fBoEfou4BxuBFJ1MnkbHXcETE2z3EppDdkmK",
  "key9": "3HTnhFHiNPjG6nVg3eQZujthZCYSaQP5YjKY9n7pNBBQXMMqJHp25AJzv9e6DkoCaF2gLBqa3hX7FQspj6bCdKrg",
  "key10": "5EWDo49AwSmw1zDFG3inebRvQkkoj72k28rr1oWWHMbX9QU6Nntb6Vnhk8q6XxWKT72ig8vPtgVbuTsF4bKCvRcD",
  "key11": "2PJLRx2f8YWL3c6TJMRkRjH199rNtJJfBnq98MmUGLKTwBABFcHsFiRBrDefey2JgULjZXskW2LeGk5ArRvH9eFB",
  "key12": "2ruEKAkT91xfN9QTMBJnpo4biuYr94H24kNL7J2AmC4LcYM2kwqVtHqmgnb2Joj7AVjSWzZySUSx2cRsBDr4GN4R",
  "key13": "5VsPu7k7rx3qMvFAN4w3oSiddpmNFTgfvFdz9xi5M7AEa1jNVDEsT56dd1MthhV6bbfNuQnvQziyviHKEUXsFXF5",
  "key14": "3xNDLGFvej7vsa4eBvJh2kULVG5tFWYFwN2y6ZvTCTq2rDEcRLscWSs9QcgS1xkypv21hjptcAGsDKHLMMu66XQx",
  "key15": "5S5ZspE5fLvBm8qEwxFWZKhza2etigyykc8bbKnwZ4KH2LKNhP4PD7hP4YK7XTuqWeHYScWE1vPMCCHkBRfjwABv",
  "key16": "2qPvGaiMgPGXAYSkYp6hV66PngfDvhqX28C9s47h5TSXcsjLzsvZ4nTk4AbTaWDUZp8t5JRkV56FMKofRRmY227K",
  "key17": "cDGsxYB9QvLpvpuHx16ohwSifMcX59vWQmPnDT2uMyCndWv9ra3PSLGMh6ZVwkjGM5WSpNaYWTZ16KPFN9sVJxG",
  "key18": "28que8jFaeE1vgQqvPqPgsD4q6aaNVMPViY7GdT792ydxfyCmNqRUz5tu9dzHWce6LPDR1YwYbTixE9ESEaP31HY",
  "key19": "33ggrSwKMoVHgYsyQwLHzcNGiuXZ35MSWQt9udhxqawAzvNvqfbRm5Lx21f9RBvazsLhbDrYFHpfTk4WeAPR4YB3",
  "key20": "2pS6eHjHPmCZqAteEnZGXere2NVZUXdYB5NXtGZt8SfNsSdJgUS1nmfTKvcPdxjsNPaaYyXbViWnTcgzfUcYyZBN",
  "key21": "41DY5yuH26T8GkfBjBJf9aX5vnqbpSaeRi9xG45sz8Uk83Ru1dT2dThmd7LmqZbbQqQ73MGurNYYRoNpGYtmQwD5",
  "key22": "2zoLTmkBZQDYyfMF2pEfdovavK4zv9fL7WepPbqQLnVyr37MjR6ghzxkPfJ1xqcHq8QPQJovP9h5HuzMCw4aCdpn",
  "key23": "2sNHeT2Pcdq2GNCjAp9PWCkg758Qb2GeCM9QX2rwMkkCG6jV5UAJRUyo1RVPKWtR3V9rGy7Wq4kvZHUovxDbsVaP",
  "key24": "2c1FvfrSVVsEnHNbGJe6sme2EwiSkhD7Y9hjT7uXFcpTvzgBx79JuWHiyBiHpBmA1qXDujJKgfYbsUSkBmhpkoiM",
  "key25": "4JHxiMiTEC29Ld5xzZHWKocn6Ct5GPp53HCSN8LkvKzBjwinqmdz9zvuHjdW7Rew7CdtFNjPPiJU3jsKAtQpJ5Ua",
  "key26": "hpVMDV6HB4UatSLVcFoFs12K3fvaS5ACbQ6crv3aphXzeoW5kCxtZvoZ1XqL17GBRAha8tqBxff1kXtFKomCZQ8",
  "key27": "4UY28jsXDfEpWqCt4EWgDucHzgJMX4gMQKcfd3RrC1X9Q98bXekog1hZP8q7cCrpLDxkc1sEVbpAeocLoARHmwwt"
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
