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
    "2gyqYzQDkzPmJteiqguMFPHiFCR86aH642kLJigtEBLFrKh4TZyG1XPzShk5gStsLxcQTNUdWBMivw6dFqkNQLdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B9T7uSYbapXu9awzsaVwt5Q9v28NDCgwCkV7wTQtC6j1gqCV9taYZuZgqzrUDusDRHJa2zLRi8G7eBHN6sEHGCk",
  "key1": "4CsX8iDcYgvW3EpFz7cDAYoaUGJ4uYvCjqtesoRd1MHV2DsBhZ9cXhWBGmfMK44VDq69gmyfhsdbaQBuSNQEAY3P",
  "key2": "2Pgtkr9NNA3wzxeB8nVar6igee8znHhfg6nx3yeUoPrbpQ9yyWsCsfszgBvH8BC2SkPDeXHdwmpyNnbDuX4P1UCU",
  "key3": "5avx9gqTDvyWyVgvpeFFJemNM9HMWG49Ja82McSfTRdVny1m7t7uKjfYaexrNVS56mL1WqfAd8rZdTWqCizwMYRH",
  "key4": "4s7kooGrNyF4oFREdetMs9g7b1tjKdHdH1jP1a84BA1SVVthbRqLHy36RiEukBS1ut4XGw6h4uMezE97cYiF4a4W",
  "key5": "4YFHwmgxtgYXjvFwRcedzoUAApQu3jeR2pbWavv8h7HiNf2swLvzQPZ3EhTmqYanb2caCwPqrC546rm2HiiuaS4q",
  "key6": "5U4zWz49eedUmTej7hLY4EaXeY3ADyHZ2Dd7AuLF5UCfNs3NS67aTbrQBLKB6LXEqpn6vtbqYcsJKp2qv6Ayk5jz",
  "key7": "2FaK5Ld6UymLLc5dcLtwQbEsUzWCLVNKMnFEp6JZNFU6BVzAaTSnLaoT6aCSWQDwjnVXUwBftHQ737o8SJZbzMT9",
  "key8": "5U8Uzx56eDnuuyM3bC7BYS9V9XXaXLtZfxMy1kJqTRopDYgcGU9PU4sxoxz4FuJpAHr3GUeJRoXscXtHQWGWpa1G",
  "key9": "66tXqqVNUnAtt7CNQtE8YHZi4xTHpHjxj7Ntv9HWWaWh2QWgVWNePaR1bhunPunQuPV3LwQGDfcSSy2YP8BV3ddC",
  "key10": "4Hs8omR8xoU16BT9bRBMm19eyt49j1Sqis3f8ED7yoTfJg8F1RreMiVRtZaGN7mE3zs1CiMspPEauh5ZpYt3zWAB",
  "key11": "4F3irfrNrJRhRA1LmYWWAmzNe6bxwdT65BWhfZbwRMXFvsfvodN7W7qzpTVicrY9wdJTngrZpfNj4ayerfqVtb58",
  "key12": "3L2VQEggvhjFCgSjkHq5u4AHpGN4pEHF9s76FX17UkqSkFECTz7GpETe8uSDXnYHRbaawEmJyXL6ya84RrstrZBs",
  "key13": "5XADdU2AG78rtXehX2qLJynFQwuPkfyceQ5AynYDjNHZ3SKQnnWVKvAFksnzrdM1VxrvMRQjrafRQLy8yZDckN6i",
  "key14": "5pQ71MTeTsEnK4PGTQoDmyVt7CHsAaWkNjbXpSRT1oxPWbKMKAybYqQ7aLuquEjttMj7Y5x1DJxoeUkCwuo3avDQ",
  "key15": "2SKSuBod4Gt84W83rW4bpu275YXSiFpkuGPCr99VQfTnceV9EBWBJSz1wjwkpVLU4DtGh7EtY9dZZWSKNRX2BdWA",
  "key16": "264mwJR2XAWkGKCuBMuaQs4QyA48YcWz1RaigZh9RZ22fVKmaQbTQvY1UGyy46FvFtLVLi1A9gzYbRFi2u3hkXxe",
  "key17": "3iMAhu95kPoVHzPrD2rmLNpH3XkqpRbiA5d2Lqi1aekqCE56fKXPEjaceWB9xCtCphtYhvgyV9K4113c45yCDw5y",
  "key18": "4BbosHijQZURvragXnu45j4PqSski231hVVTUtVszz58vqUwKfue7agCWcpY4yP9znqHxBDE1ghjV4PDMNHhQDcN",
  "key19": "4SrD16aUkaVoPTjosKULFNfifiC7ymSJb9ahBEqM7zfnf3UKMvLsafeNFTEXmQuLZsNnD9GGiXbEV2kT4p67NWh8",
  "key20": "3rvgaZ1NSBKhCorFpGcowqmXp9nRSUWaUshncLxnArXUYkFbxzd1ZVy5jNvWdLWep3G4xsuYSwsPjHEH7nZNmJsd",
  "key21": "47t6qWQR4wFzFMY6QwsyuKxfMXRjH5quvWiBkUX2hkybPoqRZBSmBtETjQq3pU9kPgnG4AbUGGPavJdE58hGMWRj",
  "key22": "2DmkCvHwQ9dekh1zVEuNjcR8mdmSLriPD9TGwF8M7mMbuVtPA9PQWcKuvUSHLadHEL3rT4eYWtanZA7APAvUdhgu",
  "key23": "4xhb1Ljf8W3hQtj9AU3o7zTAhgNEYRZmngGcKyrkkXyMtgCareHpmC5HxfyRHVGitRX34oDk89p3DProG9pFMyWy",
  "key24": "4WkciaMqmBujRSdQedP5qMhQowXuYUSjCagjEzyQojt5tVm55NmiJFiqJf9tw9THSApsCJou5TCc6tDxXnhgphEb"
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
