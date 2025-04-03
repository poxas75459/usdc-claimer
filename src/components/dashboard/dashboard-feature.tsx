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
    "2hYTqGaE7X5H2moGv9ike2Fnvtipc92u5R4CAAZWT83WEApkg5bFwSiS2wQvnnogPdRaXPU8GhNops3URNCFBa7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZEp26EFMoM2Rhfs7hUeit5kDpha5CaG5RcnwCZFgcSKocgoTyiVnZzo4yb834Cat6NQqSF7RyqVTwS4Dqz2DouC",
  "key1": "3Py5EV1mWbRFgswSngKMQkKWUGxpwFJaCW9UHpTfhuugkk31pHCojVQGR3us6B8UCxja3MUVFbWpV3Z2CBoiR1w4",
  "key2": "5gLgRJpruipGZVaL7ssXY8DjrWXquVDsvwSHHycNvvv5KK7TRGaNCswKZa5vb7ArJsos5N6grFEvWoFcTGR7Y7NY",
  "key3": "3Hf15RFgogUi2yJLJYUZHaw6e1VViHcwfNxiVcvvKy7R8G29AypC5kHaV1qNNeHyeHqisornmYMDvfJJ4jUXBXPH",
  "key4": "4dTqLxXYXdh79mYzsN5ubENwgRktcJ88JN24ZzpHUAjLRUGNUc81jVLJdrBhktaoif5u8vU3zPrrYW7rrf3qNbU6",
  "key5": "3YZLcc7yfoDDpKJjLW4RCJosWEgLvH6YAhu6TC9VSCao9qgPPXP3pCLocbtFBGVQaxEEf7eF2TZvby4VpqiP8NTm",
  "key6": "2gnbLXw7RBHvs8fsrhfjeaeqe3pvvfe6nkvF1E7T1aJo3hoD28ruhVserNj7zt5PiCy7Vy3AKLpKzTE3XvaW9CsU",
  "key7": "3vksmphXzyu3efunKomo8SfYvqtNuRNGKSWinnSTbBr4jZFWExHeF2uZtZmfMNJBbU3Y1MDdPYbTVpKDoefMnvRm",
  "key8": "4EtpojJ7yAyuvm9RGrPdAXkAfYH1TdjHEoEkxYvDu6CYbYsQ8ZzdwAaZi2dkbM93Nid3ahM3Q4LcntAmHqtRJSa1",
  "key9": "2g8DeLPdU8Gsf5BFT7GVxyrALDCFbmvVLsaphmixRhJzr9n6FYdaUzhtcHQS1DuJKbK6eXMjwhSRpMNYHY7QVpUW",
  "key10": "JbNoaWXBBLQhETt1SKLrPHBqVBjGExYKiRMhkYkGzvKG2Eeys8KBQFQujNQZfUDWv6pgaKohr684rHaNMroZhEK",
  "key11": "617qDQR3gQjmRRtdDifaQACAYzM2SZwzR4UUbFnUkbPiZW2VZwRknhknsRx5zhFseBbVfyhsYeay1VyFEKEjV4Co",
  "key12": "2oFxt8okTchcgm1S5ng6MT5HWXo8yA7MZZk4B1wPeXuesXhnZ4vvqwHqVL49KUycZA4oKvcXJwWzKzvrxKN5zrVC",
  "key13": "3w4bpWq5vc2NVizB7oBmPYWWzLpyacdcTK8X9a4xWHjMKKphkuc4K7KcNXN11NkBwuKUgnVhBiAwtcTZjTS7fbJY",
  "key14": "3yvwi47TojSr4WkLerBgmXar7Abkdop6MFHpWCUCvmoXB9JtnXFu5JbmhsxXip7iqeVhvo61PZswejiUvTe3BU5i",
  "key15": "5XqtjBg6ZjT2dKZXyPtpnoeeJ3g31Ry3RMYYVtMoTDC8dWWSo6kf8LvYJpRQVzDmzVQZxLB1StTabKoUfwh9qtQh",
  "key16": "3hz2rGXfVpfDfXW8ztE9BLrhV4HXJSVGzEgZDnNVb7FB9STAHFKn95hD2WPnoatXVMj5JfFAJNYrJx3SX8XRe1w8",
  "key17": "3nb1zgAt5bjJQA9Gx39D1qntN1GvfrkGMSnzxLsDX5JKmJPs9zrGpcAYHhRerhepKqZHUxeyCAeASLTXpNZhx5AZ",
  "key18": "gmx92iFv2k3VZ1AhtZ7UzdmooZrgzqj1JoTzMUrQqua7tWjSVWKRSCnZdQXuNduoaHQ5B4u1cDFCVrNz9qNW52z",
  "key19": "2JUFd2Z5V8oXVp4tkecMEtNVghaHbwgoFs2H6d3J51XnWvyQ35pYG1xMKmyqdDFtQrHCxD7BzmbKNfw1JA34oWtT",
  "key20": "4H9LvVLYQ3oSiACzKcAjxSCxRby1yega3rYmUqu3SdVK5TY8kxpq57Ku2Es2kjihxTYF3FRdq44Uedt9Fmeccymu",
  "key21": "5NC1R53aXbPexEPrsCxpJ1i3saWKtKyX4fDsSPELd3s7TqaQWUpNiGYYczzvupsXv4rGL5ZSjtF86x2yKeia1WgR",
  "key22": "HDaugyMRWkixsdwP5P5ra2GZ6xCanPp82WfdRxRjHsVrx2v9YV6ZN5mYDx45YrYZpa35XrzcP4iYL79vqFtuURk",
  "key23": "61qKYqywBRFsZhpm9kYoxpbS7uxu51ANjLtphCJEceVC81pndmBAkT1k6mkybFUhj33AyFUmGhvStcQs7kn7i4Cx",
  "key24": "NAEqrWhva6KeCfBdjkMH3jzfm3DTCQGgAWbjymkhcvxAun8ugGushH3VXPbiuQbZukoKDSCrBi2z9mgVJHe17Zr",
  "key25": "5MNuRrhHpKy1VJQMKX7cLHNGxkG4NdTM3wYuoiVR3R5AKwiWRBLqx93SoihCmA6trpP4uMa9fbJzoeVGkXU9veKw",
  "key26": "rybiyHqcDSZSYirmkn7Qq9P3dmZDr9XrJz89vvn6YNf4mQk4M395bt3xFnQkX7uuptUzK6PzuNbMyiHCAKycSax",
  "key27": "3QveenbLuGgdzAuZMnZ7sCYxijcXZ4wWYTEr3U6wCcZgPtixm16du2C48qZVhWBdQZcAWDHURXccip6kjRsMUSpz",
  "key28": "5VmWxr8YFhrJ5d1XR9CiskVwQdmx7WCUnyko4y4rQ7tfj5krtqRQ5pdUwceqUHfQoVRKyUD4kTSftdagY1HWeYAN",
  "key29": "2pCUZpabJs4fLc8WoX7eTbm1EVLD6s4Sb5MJu6aeV5wRwFwz9QsoddbDhb86dtqPFZVza51vrREYg362rxXNpVH6"
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
