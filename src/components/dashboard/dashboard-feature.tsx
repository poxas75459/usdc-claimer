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
    "4Eqfsxc1koLDcbCu5YNLVMhAkW37mXP1KnMqTfGieaKJFsGRYgrd63MDrKTpYgEKPcRMuAxjRdN3vj9QXHmCZJJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ctUn3hRZXTp1pgEHbXepP9KkBAJFHJAnHFiZSAhx8e3vNxK6uvF1YhDYdMkXmoWcCn8cCEzFKAzGipMzJaxtyiC",
  "key1": "4L7SA997sph1jQcPYgGPi12meF6S2ec5vGnSnJSUWoKfxRTccMQ4ZwKjb3qJa5ohQNfANivX3iC8fMznF418V7no",
  "key2": "5PzLKQhdybTmXeuaMh6kG61WiLYL5CcH3BM82CBs6P38ez5k9ahJh5bHN9EMErkRTbTyr5dXHwpV811eX4KJuW5P",
  "key3": "4ACQBjR2xi9XMJ4ExMXWEwaA9682iahwXKdNJNsbRsTmzU1Q8nDkNJVVfUBUTueu1Zr9dkn1EheTuEGtToSVTokz",
  "key4": "3up9VSmDZNMMsgXsz4XYjg3cheyUtQCTnoh3qmB3QmemrjdjSdk6Nwi9tgZvKwtCEGUyMSK8Zue63Aii87QirVHg",
  "key5": "1uC2Y34x2stL6XkD6f1VcuombaR9ZmnGw5gFotKFdjPLUiFUF6GLyAYQGDYhrX5NwUQyq9Cdmq2ARdtLLh5djaG",
  "key6": "upLg4Yz9GEdeA9kg9WrbwsDpr9DLQtoJB94483Qpt6ie85cGWpM4UShpYzE1p7htYLQpPVx61EXMbxPCLmicfrN",
  "key7": "29Faus6G86vrfAHpSTPqyzzc9W2QVjh4BctRYVYbMWfL3wEqA4GJeBWxhBrX96XsDhvzgAVMjcCMs5F7GvzSLLBm",
  "key8": "58vJpCxLyCMDjovMfG7i3xFKpzqX7hhHamzGVpB4i2LNkwPxukjDVNEZQmgxX7R7jeMKS8AyJL6bW5eYD3EniSu4",
  "key9": "2nFVLeQpLmCJ7NC8PhYnHKDt1YNXuzkhN31GynqXZDxj5UPttT8xrVo4XDzt5gjZQxBaFW48EfiepTbjm1p8gWHn",
  "key10": "u11KBPi1GFJVndVq4tugbPNSUGzFvpEqZ6W7xQXPSJZvJNXyHna53YDdcYouXGsuRsk3bWdTuCgYN3B7bvSmaHd",
  "key11": "jSqGVGZjY81cXBYa7TRx89MJmZfwe5EHGd8R93qY16gYbDtwukyvjnr7KzVpZ1ZvbRxuCPXxddbQpxiCq5GKy3T",
  "key12": "kP2ppoyREWk8rYE8L2WfhydavxbkVaN5gQ86r3ErtvQovQ3ES15ULe5AAd4g7kwyeTSf5zbAUwPP2Ktve2hZwgM",
  "key13": "3x6o4ifAZhdpxbr1FnjojaeDfayXG8wLBJeysZnE9Raj6N7DJ2ggcrgRUdyB4ajHsQ1hnthT81GnLgx3bgYjLffP",
  "key14": "64JPdMBZyHB7arqGsSbHbDF9fWcQ8DbgEgAmAreKwuuFUWWhYc4vk4tQypoc2WtXfhUqGfoEGyLkidTvDbYV4nF3",
  "key15": "e5Qez6dPJhq3wT1qcWsC3UhB5NYKjFncWJQ8eEG7XrHNr2Ft6tbzFExUJNQ4RSbNk3bAisi77TA28i1ZbmW4Jz4",
  "key16": "hubdh4S7kp6bu2gEUZyVjnMEvwp9j1goi5YoZ72Xb85mSnk1fWB1oYRsGGfqauxuwLr9m7Vt93PKpg52cb2HAtt",
  "key17": "3uUH87dZK2oXu6PVUhv8DJU1PrA8hKWMpCcVjVNhNrVEVoHZDnLDn1WZkSx8hkqjTaQMiAhSP23PeuBGGrboSyhH",
  "key18": "5XUxH1Ru2KfS2XqpxHGfBaB9sfrXWAyitesGeyBT3TYwg7awg3HR4x2NTBsSHVhf1SHQwqmySNzwJ4xB64LDKbtG",
  "key19": "3QGNFwDTAq2ZJSKchLu2HD6bbRCmTBvKBRNUcDedbMNPEapc8pxrigqF7ZvZYvALNqJNUVF2FvQaCWYEAQvA4422",
  "key20": "WSuMRK2ABiw6K8UwjzqTH2RGMNc63wpoKngTwSo44nq5uWnWFBAVZiXZNcWJZdt7s1pHMZuh72oqur6geuqQvRj",
  "key21": "4qy3R7FDCGxxtEka1GTGwjin3977GoM7c3vN8jbTzxnL8fmupjtvEho18Epd1zuoPxxrHWXWhJr6qcroT6sAYi1D",
  "key22": "3H1pxf91uGV7DDoREKLPZdVD17LXkZTCuDBMgfj5bu2En6GcW7GhoDAzY6wcCFfdLmdptHG2ahydnSFDvQcU3GUT",
  "key23": "3LtX3mC1TQGh35V74GM3zyPp1dBATDw3YY8gwpACc968gAoButqevs2ngdaDwmGudJs4gCkzxw1UisN2L7BfHi9E",
  "key24": "4K1YBFcSw3zP8CLRWYjSvPffEd4UjgpjTXkZngbmcp4imeNEXLqd7aHYap9C6JuYKyv5prKQbnio6CjikBYKQKiC",
  "key25": "nXdp3AncNBnuj511bPxTa7Y9EkY2YDFEJtjhU9HjF6kFYDVv49uLEo1m31vyZYRdUvFPQEFsy5Fed8AjuaHuVCr"
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
