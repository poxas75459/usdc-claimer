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
    "4aJnpLGRbnsdV3XQs3y3Qd2UKifBv6gEpoP9LUBmaEVUgfqDtn9p9CyZeco25cULGPwDFfEcxERMAETpq7MvUxcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W4AkXpksXqgthvSiW3ywkgdWey4M4S3tfvY3KxM2rhioUtS2yLUR3BtPq4VG7BLCWSkPA3P9yFaHztGQ3hHpN6t",
  "key1": "46bkorbeeab64pQJpfUro7tpoKq4dHfYgshfhemtYwA6xAGyu46dqH9wXJcsAUe77iPNbdDWph9qv4yuiu6shNrN",
  "key2": "mAek4iFCHdCBERfZNj3eaU7hvNJ6KDWk6gAQJB4jz2XF7X28U3CRrEBRfm254uWmGpEa6GYctenoHWyviJByje2",
  "key3": "4ZSkfzkNNcRmhbRyzBw5Hz8cHQM2EQ61CuKwuPbBBrAb8cj6eZodeDfXQJJtrkfV9Mb7AavLHMsEFX4ebG9LjcSt",
  "key4": "BrHhzPJjbnWHCQYyDjum5NJSs2m4vH6svF28j2xjBFGZntzWQr1iLj8e6zvHzgpweMLD8eMptHKdHde79ScZF6o",
  "key5": "4it81EhXZ54fiwobaU3zjgR24wFT6x6R4eNxhFpdbafTec3tFqtDGdHmjUzMQrEDJx2Frb5dDHvF8ZuGZQNPN3uB",
  "key6": "2dc11SsDmkPTNrkZxaJkD31raVWpbkMSmN1ujA37oAqHi1Gr8e6o4hg1obbthqbg6Ek46C3CnwPcXaYYhnxqtrFs",
  "key7": "55CPRLoWnsE9fFnvxLTnkT53moZPYkRFTWkonP4pXt1cHissbL4Wnm3CbVbxcPB2PnFrRQdYNcC5AfDxEU4DUybf",
  "key8": "5XAysWv2fpZH1aqhoqdMe4Vmo79xpbtmw5dRzeZtvm9tywhuZDPfxCMn8h52dk8Nm267eoZ76dwcoAvhaU4Qxjje",
  "key9": "3G7ERGYDmkEVXS2i8cG1Vj6nR1f1emB4PqGUZrfKjmo4MSYCJmaS8SyQ6rw4aD5egvSiuKsryVxAzWBiQZp7PsKP",
  "key10": "YqidWXgPnXXfuomUXEKXCrEa9bLMPqU4qfDEniTbvj6oGWb2wPsbtNQYz8vbfJSfzGVqR6PGNp3EwVxiBprhEAX",
  "key11": "4uTAhX3aF7QWNFpqDPzfa8wNtWGbE4kX1RYiw7XkbWiXAsUPVm4JtzNU4exncMbHJk5NYBXBCpqmfBjKmwqDdzET",
  "key12": "36GHtBPaztBegLdKazx7QF4h9v6huzwu4akwUhML6U8uCKxzR1d7zzv3ycuoX12zMUzCcE42WEx6h87r67csDbAv",
  "key13": "5Tvjo9MJXuruKMGMBW7xyNcBtGiotAagZSUL5yKzZekqgTMP6UCtgKeFpmCkCTkKJE9GzvmXyFgHctfqFRoktthC",
  "key14": "5ZrdCBHpikE9KB6be45T9VWmPk4KFCTjyLf46MGQrzG3MwxXgSn2EMfFV7h3J7qgnjxNDSK5vE1r4pDSqjb21Exy",
  "key15": "53h9bzFpQeQaZKs3ajD77uz1sYp1c1Ph6S5Aqu8s5uCYhs6Y8sQccvATCo1n7382y1mJgSWDKsacp17YY3oDrYFE",
  "key16": "2f69ttBD82j8cmYT7Cn6qua1m8B2GuwDsBiwe8u5R1FmVWeYPJe79w69GSWjbGVndL2YeM99DLcpMjQVbQs5gqWY",
  "key17": "BHHBGUcTzpaQ3G1RRqDqjM2M2QZJjG22UCE6dqn74gF3iYxmBPY4DStvZr3UG9NHuPCmW1daa1ri1HgPMYeYmBB",
  "key18": "tVj6twFNHv9amrvbcofy5xb63Ai7gvuEbccieDgoKFwriV1axyoyGTyMnx6o2yLU5BZSUSM6BskzAJHLPUBSF8M",
  "key19": "2z1q5mBRBFQ1J2R246HgKrKpXJR9dG1uqkRMcrGp17asWHTdmZ2yxfLhCZN8iTzsQhW2s1hYtZmzERfwhQUvJiy",
  "key20": "3oZGcXvU2o6jwYKr31VJDCpDipGnqHKeEGqWdj47e85LHdX3MkjyMk7PWQx3BVsPmadF1XwzAKnDDnZ3NGPzJaTi",
  "key21": "4oP3WGv1Rh6y9rA7hc2cD6ucEVR5SqEczPbtcWXBNbHD6hwy3orPPpAyeC7rNk3PPMWnAy36BHiWucJjfGhDykwD",
  "key22": "2Eh3x2xk5X6uogyXDUqWE9KsPTozedhbrgUYmAZpce6j2ATwDmTheCtmBaEFK9KXiqnUQiqH3MoiZ8p3sFTkhp8j",
  "key23": "5a1nNCvhhcuUCBuyxSUVFiAkBGhRvay6ME42qZNzBZ8RquozgfvUSWhRkpBc8R2T4TQi7R4u4WieCywrxAzAELmQ",
  "key24": "hKNWsA4La3AfQvb4MGX2D6BTyNm7p1NJ376tEUfUS55gehvwu9pn9HefXADj4YJXSqSmkLQmDGNX3Wi63drCq9X",
  "key25": "2oQxX89Rx9mCdhoUxbmc2Ca1tnJSbNGVinm3EmDdFmYXNV89qav7GoQHkEu31m7PdPToN5B9Dj2XMwCmH1Dx7dhm",
  "key26": "4tJgkaPaC4vWztnQ2uTmCYZoGiionkasaELA3skkpksjYpwKQAu5MaMB7cZKNDH2zEsL3qbComYCeKGrzQF31kDN",
  "key27": "2keBzgkisu5PeKE1KzyCsnAQYj4WXWSFzZ1KDGojnTkzoeeUzApzwwKe4HJVQTFYV9dajExFEhTAysnY9PbSpVFV",
  "key28": "4JZcpa9PvrKL9p4bpYXzZq2pbBrvWt7ALT8Lj5N1XyZKWh5n2z5qMxqTrFPrAZDFuWtCtGHaQBC7ZMDyBHFe1vKK"
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
