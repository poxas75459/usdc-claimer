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
    "5EQd73Nju2XkkGZ9vUdijr1cWShVWiAZdneDJSdo7cNaMPQDcgsbJj2CvfTsnUTm2SmswzFR4JMrNa3ZMwuJZTjC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dtAy3o1RSmepoKrrPtJq1BVtSNvxjHkAbHZ9b49kqg6JZeCZeDLjtKqQUr3QCWQnqNdEC1ExZdooMVjkC6uyv2A",
  "key1": "4vJJRWaeUXQNbV51yF7SiFDp5kzXn3xH6o88MLm5RntyBgNV6CkoTJ9gg9MtY1FdwL9fyEMeRAdWh6iRpuhvsNPP",
  "key2": "4zzmcoKq9FhXbBVoerYFj4gfNA9NzLm8Vth9EQK4vmhDUBu9rGPH7NYLRVdgJiLvUUhEDr9XBfRwJp6oNNJbpa83",
  "key3": "uX13j8fE4AMSNjYq4AXuYFnt3o9J1gLFqo7m1nW2uUFWXLa99mejpRKxXxRxjhZSt3mxFYGWDc3P6uMq7UbQrUg",
  "key4": "ianT2T7nms1ekh4YCYNj3KnRv2ypj32ABjLysfG2J4TR1fugbVSgR3S67NhLumsQk1EnaHNDksGyd38WCiJ9YnW",
  "key5": "2teS1o5XWhkRv7cT9MZzuU83TB7A1mbcjQ6croo34uPtSiJrwq8PDuGNpGCMw3fYjSsH3webk77cx5UbcKDQ8hWw",
  "key6": "2ZfiL3rzRj7HaF4kEra27Rb6NEkKpHS4JTK56YSmArByrc641cVdpZXbYFS5PFZoBiJG1Xne8SfwCXWtwuk3URg",
  "key7": "2MeRWSh6Bgx5YbnUwEHBzmPNizSGzLbDo4K2V4pTXQWgbfyF4co8Wz9E2kBsK8E7nHp9aQCTLLUCquKU91Cre3Xf",
  "key8": "22v51Ujw3XDnXR8mcAjZQsdryMLaDWsfUfGvMYhQowj1gGFCkG7y3sv7uBiacFEJvAziVMVPU4yWMuYQ4Rc3B4kW",
  "key9": "2RC5X9a4KD4U8iRNuAHWAh4EH7b8hYJBsgFNJH5LpzXrBKxFos44tYgJdxJBEGkdbtLtf72d2s7XC1CucdQQz5uQ",
  "key10": "4xXHjhzcP4Ye9LyKEiY4pXiWhZiY5quoS8kaXKvSftai6TNf3YxSDWvGdxLAP8MxPuKZNH8DeDsXCDkQ86yiA6xZ",
  "key11": "3qjmeiDmAfzbj4mPZ736SvuFDJWywy4RQ7pxskzDhVwPsXrFpAw139EatFCEUhYnno4qQKykQJDWxkeNLtAFwmzh",
  "key12": "2CnK8E2RDv1ADzDTF313FoucmGRSLWTFPpTR6PEvBbpaWaMqvK7XQscTCBN4ps1sVVRMMnxP6UwNoJGtiK78jJbQ",
  "key13": "4GgSEdTgtRNm3Bd4gEJxFtFSyBj7F8YFTwsJbx8CJGWPhGmXe6uoiRPysxRAV8jhawfz2sPcZ6Q8GThEtUdHiV8Z",
  "key14": "DPfEP9rkTnyS85opntsj2esktsLFe7egqVjpXy8hmaeqbYyX1dztTRtuPV6N9A91KzrJa6JrdTbRgAcNGSvrrGQ",
  "key15": "4Mb4Uj3XzZgQrFhUJM69bNSxDYKGZZrCGzfSoJ8j2uWyqWHjEHDjaEf92LkGw8AeYrCUvpuh7SPKvC3niowYB3Um",
  "key16": "2w6uw9z6AryQ55RE6DAz5sHcXidjUtuXSfWx6vBPM5aKFqHyL8Pd8TXJEWzmrwSMaPh2SgWg6HgxCeq2r4QoFqXj",
  "key17": "2cewcFXcdDQ3yLQghDKPqSfD7Ud1cTnRKwXeTSPKrC7Q4xZBX83KozygxFkE4dCRgUXnRpSPHQiy6HGbcWDLqkdv",
  "key18": "42N3bbM2FsKES9XW6yXNccsZbcJsp6Emntnseh9erfKDQUSDaVqudAdyGEsonXLbLaFSkzN6r4YHFYyCk9PqJjSR",
  "key19": "477U2JyHK91HhJQQnTsNpY1BVAs2P3dzWW2b5G23FNCfa7dtoUL6A8PGgPkDnCeTtnC5vhv5ocz76s7WL6M1yVkV",
  "key20": "4vCts1CzVHCi2mM3vUqC1rFeZzjLyABKw4qtio4pStF8LpcvNsKUDhvH6dV35eNM67NCakkMygSmAzRGbrmAiiiJ",
  "key21": "2yDDog3vjKz4zcudHMiswMN6rvBq4boDhM8bb2LiSQxikFB6tsayLLD9dsRxxzqQQwM487bsCmceJVj8ZFNEDURK",
  "key22": "HzeTkdFAbD49nZutHhSwadhEs7vgXXarchcWUFQW7DHcEPuP8qJC237rcHicnmBo1QXbdHGeut9AWwbb8ocxN55",
  "key23": "VTdNum6wfoGqeaN8WBeU16NkbpkNrQrVCf5rid4FFW7xWaxmwjHnJSVhi7YrXH2QAeLWUFZpbAcePnRVTmSksEj",
  "key24": "4Wp33XJZCHDgouJj3AVGsPR6mbijx1XMFCzGELQgCoH3MTtf6ietR5K5yCV4eXRtMM8gVxZSaQv3EDR1UHxRHzyX",
  "key25": "4CcK4FFweMW7nvNELTKcVwPoEEi3nNXjU365BqLY2qktnN9t3LtqyjQhcKqUo5CD6iZqmNMeSueLvNEbkdTdW4Cb",
  "key26": "5aSS2VFRzD4i7jJ9AzTMGXNNwcqq8XvHy9ZcMQyi1wFBojGaypy6YYR42xH8EcPXFWRjrG64Wi2y5G4LX7zSge3c",
  "key27": "REtKDEvSPV8pnZ6DQwqarxCoDWmrmedyg1BSypYPrZ2GHNXmuxpB7LBTNRRegabfRaCDAsjUM6zje5su5d21X8m",
  "key28": "2quLbm8HmAcYB4Z7V2efpZEhyEgep8WydaRC19TTYb89DnrntvfBQEBymVahJEkrB4ZtWuyJ4ovoxZRZwHRDgEib",
  "key29": "cP5H39ifRrADDv5yvoC2hsuoezCn4rxwetqhNuZdapRjq5X2K5MWjPPZZniji8Gt3iESgn5D1gd5zQZ5EsvGMQJ",
  "key30": "5EmgCUtBzQSWB5zELE53hNkqqshLfJm2dWBpF5txb5FauVFGhv8JNNfBg1mWRbz3UXbd1UYANrhYRVkX444f6S2s",
  "key31": "4Rriu5o127RPSUu2A6e82byD8Kj2W8pGoBrJLwpT4wZCpWxCHEUFAzYe9vm185rTRn8gHsZr3rpbTdP6vHswbbXb",
  "key32": "5dvoTKtiJT6cnFoDxFV139SmNQyx8rw9QRpZ7qMPZ9sLDkq9DGf874vnTWE6mCqukKX9fpTvKM2TjAWHaDLm8kod",
  "key33": "37jPcK58XtoaUrdh2CALfFGUhMRVSSGDDc3HJsvBH5Pbi2yHNzzitHax7wmkyUGtobKvnJ3AkPB797Dsu8DyjJnc",
  "key34": "46SRuL2sWPMgWXec3YGkSjKSCZBrem9JgCK2aVgBb4JFYMMd2Dh8fKMSwq1B6sFR6BvzmKkhdvm4CmpwWCNzT6QE",
  "key35": "45jUtxdk2CGbWcrJfmjjSpCgqMU7jzFLYcKTENprjakHBVBAbwtg28fSj6ZiQjDxhLGYyRqj8gKysxG8hVucjYc1"
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
