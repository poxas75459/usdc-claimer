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
    "5RmDR7iBpS1Ze4NkQ7BP22Ze2VoEG8CwokV7hpRBaUSN2syYWLYSYzBMc4xZFaowvYpikRhe3xP3wNMPW6XxxZpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ouezwJgRiJiAsS5VEYN94ZWaWfDig8kWsn67hhi9AmnX8E3NfG4unXG5dNeKn4WxPhoPgkK4oMB4vW6HjgyGpu",
  "key1": "5hk6DpUAfJx172SoJMVeqnVFeftX4vfJeTtqa531qm7zbjcimeFGubJuRYs7ETccgkZi8wiWFdmmMAxRxGPEAvq6",
  "key2": "3hfBecJhRvf4HQ9LbSTqMXYXLzCt7AD59VdLrchetF7h74HzJhXaZbVK2GqMpdozNS2oSKJ6USomtq6VkkyueRFG",
  "key3": "5mxw7rKM4ymKUeTPzGRZsnppnK4ubtdNXiWjEdgCzWiz1dtBRS2oQZve3BgaLc9N3R1BTyDLKs5p2fPWdYfywRWM",
  "key4": "5cA3qvdHnVjEJUP3ZcXpkpJ4edyPuhjSX9AxhtXDCdw8SagaF8zzBUB3BiCKf4eHaNBR4HyXNhqk9A1AgZu8QSmy",
  "key5": "SzZ4W2b7MAhwt3UJiF7uAgihhLvQt9m6NAH11okgdHnCcvxZysg4w4LUMHQYXfJt2PvDnxZPosJH7pC8WnAYvhR",
  "key6": "5oPfYHXUJmtzv5LGYSJc8eKUogsMwEQ15No2pug8hM9oxiruvU2Vj6jSZcfteTwto4Fm3R6Kr2cEboigdkUSwETQ",
  "key7": "4ZjWdoczdtP3AwVRJ6N8z3sWniB9XZ6KWA2fEA8cwrixZRkDL3oLPSHJrtmbyYd6AdJdkAvtTjyMYzkBrYYYTUv2",
  "key8": "49CayKt63UmdEamiGCG4ecw7qz36LvhmPRowdKNpybDr29r9Xj1RvZ5dh8GkpNPTddJ8Xn6kXsDYrUL4vu74kyjS",
  "key9": "4AQ7MzQcf2FXBzQx3GKuhBiFFVZqkrhJh4zNWyLkHw4TEjTCA9mz4sTPB2wtnnfLkWAaEMB1NtoDwdCyy9LY5feL",
  "key10": "31nAuysChs7uBHmTNhfvtKttbtCcYeLf7zs2ZfsWVVUnqgc1FSTZkLBzUMK6eHBMgEwt1M9DVz5z98a1As6vGSRF",
  "key11": "LooinxoXEAvEAxyLNfJHq9BfvJJdKR5Zcz51fWP3ByoyUXhY7ASQGRKH3KdaUSAL5vPqEGEW5pGFH9YdyGJ3oR5",
  "key12": "gY5BpiEsrnLEKxHdeA6TMxR9oio96JGYJsHB64itQ2apxakNG6qQ9BYMJLdiww6rJfqT2erLPfY3Kjr7ndSsaEW",
  "key13": "4MRM649ufsr1kZBPi8UpwBSQ7cuNJ9tqw4GVS6nedGsncZyFtHVXPqE7b4VedkR3deHaVgyVoEgQfPeZhnt23SSg",
  "key14": "65fy1fn93uhLriSqjBRKGV6oQEYawrXyZpuAFJ5JTW3UFofinTs3yx9YF6X23GtuGpMhL5VfsTCwbM5CNtxohgoY",
  "key15": "XnmnZUH2PRFPSJiaP4AubtA4egmAjAd2uv6AtQ3PJfGQGsG9VVKqnXKu6UgaSCoh2wqrkGgNKV1MYtK1Zwc71ZD",
  "key16": "23te4EPmDYoP51MumT75fakCbfmiVvP62HeTtuTvrocp2Wy7CVzw5mnzh8xZr1S8fbhVrrpodcYqS8as7NpKH8mb",
  "key17": "3fSangyS1QJEMm3mbAhmvyoFXSjhvetLCH4uWCmQXTKr244YnQYjg1zgxsKFMfr63Zmuxkedaxiqj9U1aEeBfVxp",
  "key18": "4Nmq55JCb2pQaHF3zwjSKn3gSBmPCqHAwESErf5spytnddAUQekn3HzDH7w6yQ4ye6FLzgosXhWB4UYtZEEYUm2n",
  "key19": "117vq13mL8iHTV4ocEvkCVXWhu4ipXrUJA4CGEXvrJWcR4zy8YEwyZT2EYi4Vg3itk3ZdtXULHSC3YZmpbHU9B5",
  "key20": "3ThpBvXdu7VRiRM9VWx4cYKGEYpHqVTUExMF8Zy8MB135ZtyMae9iLkMfkaNovpJ3acjZ3zWFYKgHNkrrwCZnYFo",
  "key21": "4sfZi2WCV8jmQzPdeDYhVkMh8ZLpUU3JNmihercJ63g5PjHijj1WvPJqZA4P1mtW3zLaaWFANzNPQZmDUPVhX35j",
  "key22": "4LBkpxSfGkRr33Gh8Fs5DuapbCSHSnfJCQj4TgPZRCjCCGTkYCgU1ULU3ofQ112AgF6P4uKhNGRWY7GBghTSW1nD",
  "key23": "4axaWnPyFykaTzLDMR7mFEqTnCMYRPtH2sbyo5j8fdDhdNnkUBJxENvK2DKLo5aFZaNWwTBxXYRKa6qyHFunBj4o",
  "key24": "3S7JMTjA5d1ZqErrJYcKQns5Sjjmb1giMz5z3gjrinVua9kuoBvcnrNg5rJ1UFpYgJDu9geuAy6jiHd71maD7kNo",
  "key25": "2LepMsvSWvmgnwoZ5irsiB8KCvZ2czcA1BpfRxfCaD9nGaJcjtxAp9FunaWFN3QH3H4dQc6hKveucDvZZvQVSPjp",
  "key26": "5kXUwEYT2tYwAoumgM7rVBouCAFRNnJYUtR8Sqdk5txxeTXkwF8xxLfyha1qb6sTqtMgDqaJdYEmkNP97ce94chr",
  "key27": "5EJuHwC4ykRHtzs6qmCTbdC38LfS5C3fpbDidM9t1eSxRKTASWEiAj9nj4e79RDEA3GZRqctzZUmr4Cnt3F1XW4Q",
  "key28": "2HLJtAnXM58Yksr7UiCXsySRJz5NwrhJEcm6RnAWWAGts9WCUi9ZrEk51izRuVicBdyjXWMhRYHqRjPFdMvghecG"
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
