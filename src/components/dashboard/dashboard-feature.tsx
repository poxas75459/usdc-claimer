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
    "xaaXnBMFM5mffjbyeM26pk6RmVtGKaPMX1kkVfGswEuaJBAoa2uZnz63GnAovev3bjWXHtfQGMNrJ495ReJH55Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQ7HKQZaAzZnaELqgfLuMZMka89kEmdB2BP3LZgqe71GUugKn5JsSnbkbTSwPFC3shuNXtEYajqSx6tKkPAZaE9",
  "key1": "2FuVKHt51x81osCuRQoWSrUNtKnDC57fyzY9iS2U95UP5RW2CHYJZQe6m3oKDTwXKF1W8jgStRdNSpEeP5zBNogR",
  "key2": "4WLwHytkGMmDPFsLExvMYcQujW33DxFYdSE2VpLiV2chLyvZUWf8GgG6JgRkqdWfZy7koaxCGJrfd3Fghscxqg6g",
  "key3": "5CKAYzoMhYLW55j7zDoq1XjFwAeBMDRyTvh5uYX8pUhf9CBQDNTCymuBWAVmDqiPWGexyAnUomiDAaYzDZQ1tjsA",
  "key4": "3Jmuo8rTL7YjDeNPipF7sMa6n9xRqzFRvbEbTA8kSx9F33RyEf7mnwHrw3X6ToJpv6BUwPLQ7dfv88pXdwsM9eeD",
  "key5": "3m1pvyhfUBTgf9UEzZrXP92SvBfUwM8yzw5dFrE3ET77Tzp8XFHqzvsq3hbDAeYNMZCeJNZfWcXtMaMZXHPVcXKb",
  "key6": "2cbM6ERXdLV36nmqKWENbLmvoucBFHs9DTLLbqmdr3DLQ4PCWvH3JKYe1XLjA6GQmfQRdmQ1fU4dTw8hDARZQuw6",
  "key7": "mudSYcHuDJuBY351RLeW2unxRvp6hx6KhBX6fp6F84YsC9ThcyBCMw7UopEWTM4bDPx6Dfx9mLc8sLcnGXDJyaf",
  "key8": "2h5oPJR41DKETG7K2CTf3VWZTdWqSRYTkSJA1zZ2dJACPiAjJFNi4vpiZdicmL1Zr17s3VdkNpQfSGg1tbPLh1fD",
  "key9": "yR1VRAvJUbwWAMAmx7UbVZoyzCMyvQyHoZz3HzFokRib8yRBXYbUTykNKJANFFhHfiRrfS4rFJPrcmjw5NGJx4S",
  "key10": "4Q98maFwyn2ydrVfdLPeMJrehKKo6JCz7zdhSoUn6aobDvgxToqXGFhtRkj6vSEtMMgM51hhjnPDhy2wqvbkyzu8",
  "key11": "4ATavm1e1dvzeJ2BHKLJfDaYoeyYppPQPPagEjXNpzGptmqpiNiVNhwpouLkNJemDhAtMF3kmgLTGpt1xV1kb5j",
  "key12": "3BGJLmCxa8jg7LVhAf31Y2gjVPdd7jpGGWLF4softSs4fZ9ogGuDezeciTfXt1JXMYDiRjN6nG5cCAcnk6VuF7oR",
  "key13": "4NdEGo9wWq5aKGywsHvq9vC4tPxmPaTRACDk2spKdjSWao8qcyvDF3khw8x5J3KEmjpu56uDeZK9yd94xcqeJFiv",
  "key14": "rNU7YCUyA7cYUsjrSgCVKRNDLpb39XTtM5YpJDuPea2LF4wNaT8HGXrSkBXGaQLypqpxSExrnrq1a3dkVC18bgD",
  "key15": "51btwSMhfiuidwDQxKGvKicvn3f5p4PBKUyVJtoc3t74FMWbLERsyU4o9nvxg855L7qn4zWgDBu3iooV567NGHsp",
  "key16": "4QAPFtjuidWvyVceoX24K2PXNKQaQ8rMVHu3CNbDGjtmAQ6VsdfPMXRQkaA5tckCBEDE4mW8dt9SPM6VjgRQTSJU",
  "key17": "5Ut2V5XFGJZoPTyT2PnoYTQxP9KAA348qkHUmfNTCELXwosMCTtSKVFcnMucn1s95ETC1tjqC2gXU4udLisXhmBv",
  "key18": "3RkvqhiWT4YrzU6EjTSPFVmEfsTHVQcqgwyVvbgpwNttNiMApSAK7mrESdYFr5qXwrLgLwSHMTScq52QmJXiXkYv",
  "key19": "4KpvXYeVERnh5gJhu8ToJydpSxXZDyVqQkd9wrfFR5pXb1G59ibDkmCW8jjdtGtprH6VtkmR8YgRGwpsDkdApSKX",
  "key20": "Pp1q5a8HkGzrHkNG1i24srVFpfiFFTzvV5H5RYJaXNSe4ySYVXKbn9jQHnwi5MbXbS8wEK3n9HECGZpyJQcQCvp",
  "key21": "2hWQD6m13RAz7rq2oBbFqPhS8Ak9umMmXRsecHoVFLkjQb6GmRHrBEGzQ4S5YvoSFFPCH3zhLp6H6CdEPeHqAPax",
  "key22": "X2eRhuiy7gmQ8HqvXmTbs4wdGk6svyQCEThkQaEqNFVbkU4XyLnBLCpY26frydo4kBQUsZJiFG7efohDycvWdSq",
  "key23": "3exbKCpfWaJegANfgf1PzqkuVE7Cjhr47KJbabHNbt7uXypXU3cWAhHuy5ThVLSVdcZNVC733pKwbvnXPhZ1iRNF",
  "key24": "2aSrN7AVQY5tK5mytc6W8AYE4Fy3PfyBTomrngPsmWaiWmZB3ebAB4yL728V7cbthB7dAKvM5JczwuVV6awUArRW",
  "key25": "5sr9Bou8FWUw92S4if4tBp7zhjAVzoKWZucTG4fxoKwt7JWikw8HabiErSRrszX81cZB2qyF1CawiBU7oNE8RfeD",
  "key26": "rhWuV582LAq4NwziuK8UFDG7Q9FBpugYS4yzkqrk9vBoCohftRpDj3w7PxNsbNCruLLRkcYcS4dcgcgDvkCF4kc",
  "key27": "4ykm6czoachL2ZZuZrCGtE57SRbWdRTyAqtH4JTsWQLbnh13VPkuuZTDqqD24f8hVdMb6myaKTxpAoVpezPmiypM",
  "key28": "2A5NWxbsDUkGeMmzh598s4otYsmDBf3mvKTCxsMeuJdWxXtiffXwjgbdXaApaDtSSpUr9dGZ2NUGiop52uPsRxLx",
  "key29": "2BWeJHw6RDG89s3WrnfXGbCT8z5VZGj5jewSnbjogRetqjCc9ZEowkmYuzorB6HY9d41UvinRZMZ9Vm3sqeYq9Bw",
  "key30": "3qvVPV1TpJ9bfqUCXRDpvb9cZXZQAYJTieUzsCCSgeEFozb2ya4dGkHHESjHKJJ3LMZj6SNFQEZWWHKhzc9m8mhF",
  "key31": "AYFF5C5MCDmNpsyUFj7qPY8Cxis3aUJuMv5cxpLccNR2WphDowJp1eiuuTFvmVmPwg71dqUAAmkmBKMUYk4WKNo"
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
