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
    "4NwiBea5oJkLDYbVXdjLKZiQDoFGcfw3tX6nkUw5twnizWmkkM1BzRnET7mDewU5dk5UwiRM1beh9gqKvqSagkv8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUp1aTybEJZsNYiXVUtVMHNYV6cmJToVGWJN6eV3wVRFNFuLxwQkXrqeyNqfXvagqtjSrt8Nd5GPLNutQjRYCti",
  "key1": "3Zt3gvA9JHs3Z4VehLEbdyUMBczHQavJvyjKsqXv2UeNrHhcQ9h2tKRb5hpZe6JsmPZYUihTw8QHLCJVCFu2jQdL",
  "key2": "5jWWb6crAyBPEBiREatEFZNi9wQDuwxcPPr2STsw7CPqwdnQrs8qm8d5zYh9ykoftZfZrr65VLfDiDkFzAb4MzdW",
  "key3": "EkB49g9nhwMyB1qsyKxduP8jVnjizcmBT3zvt7zJ9ru4a6CLkt4kmFiKqm9FZu63U3tFZimtH2DWEtps4R5uvFu",
  "key4": "2fiES9yFbzejmZtAM4zvW9PtWvCXWJEziDfQhh6ruhxGy6tXKds7n8gM6Y9m5u1NiFWSe15zb6vaZo3J8Y34YsS7",
  "key5": "51wDSuCCCPsQVt6EqkQwCCeX6jEeE5rEaYhVjT9KmWbHA3oeD7nsr73C2H5oS89cfrkkCnz2mbmSMKgYbAvaT8Pf",
  "key6": "54G5wM1ZVJabFYGqEgv2qXAzmCFvvhwy7zc3Kn7qk976iUiUgaoh6XnJ3sUCXfLarcEeHAHj6xQ9KbJ8innN9knK",
  "key7": "3QJ6Jhi5LT5D2YAq6oysysKxvZx5Cpx2xL9zkGbHLAhM2hNCFjYg4TAomXUSnqtLEGfxamBkJtDh8Zw7xYnvBuHp",
  "key8": "2uXK1uXF4Wd2JJnEpQ13nm9AUF94FaPFdv5kZ8hiu5TT85HW5qFuqMdWQCt1mry29uMXfE413WUDMpcR8m9j3a5i",
  "key9": "5C4QTagxuDHuXwFyK9BsAj6EpLqnRobYTYkGAVVB8utWAvqbqZGLyCs2SU8SbujhqTNrBuUZvSXQCy6RZmdCuywx",
  "key10": "5LK9b59zTA4ToxubimJA2tPJzeoGNPko23qqCeB6YdSn56iD3bpkiEUwYX45W9SHjsPFvdHNT4WGawRe3SABZUPz",
  "key11": "4BDcHGxYRvimH922XBQ7VP5zcmqwTyZUaMCJzTCgcoyQ74EvZsLhCAVLXurFRmkNQnhGAD2CjYR4zGe6VKW1QDrW",
  "key12": "2tRxCSfqKgSfvCabGrXVg3Q6H3Q1rvazkt4N17HuDm7p8UMA2kRKPZQa6NsEECNS8PFw5cGf4vrJhAZDB18prb4Z",
  "key13": "2hvwwALpZjkdnd8i3Ani2Ndjm8QYa1xMLWtSdchJdX4ebxGqtBwF3QXBymrT7HNxYed3Yb9DTFyeR2jPmfm4yf2d",
  "key14": "2kyScXnodSnKFgLCmrwAsRkN4dsMWTz9EvXVQG7Y4rVcAoezEfxaNxHUB7iGBhytC7suUrxmAVfdSVCXV5sx46oo",
  "key15": "SZsSKfNzpXBySzZAyBTk7f7Navqp8eZG4u61PZ3oAXbeFmAYteKa9ZvDb2RnftSjHzGaSrPrveh1jSFEkWGzyox",
  "key16": "4B23BnuXHsJL1XCgpAQSguX4zfFAXAa5or9zRio5eFqRm7gEgHxBTVRBipycRhJnm7LHFpkF4yEQ8KBPYiVH6viS",
  "key17": "4STdmnYvJv6J8Wotx6uvNdjUMhYHWdGedRCiWocGdQMe2z69HMzfcT9LM722V15d621cUXHnz8LJBgr4GGzfNnB8",
  "key18": "2AG3PDEnwpmYhZuPeR1nNVjMx3JUyJaUAWbxYRF7PzgYGeReigV4bfxKkE8wtMyMTNsRzr3QJpkktKLfALYUXYNF",
  "key19": "5RZmxU1nJp1TAq8dPhk1EmUaT1jwnfU3Y7PFprX7LdWd2RkC9DWfuPQyxaBZiE6x5fvjPbhj5G5J49PdBDShnkHu",
  "key20": "5V2SzGTqaGLFUn38D8hEz4cmDFRUQE1B5BPZK4ydRtyc1FyTCzo9aAnHsiDbRdkyPBbEHxBRHfPbvNG8tH5HXmJo",
  "key21": "5eYv7ZUgMV4Zc7HPhxbqvhEkmDVw7v3xuRGMLVemts6tL94TGr5sAD7QKLNFFvokS7F2nWdAfYD81e2dLbdHagSf",
  "key22": "2vzRevVvfVC6SGootgFzo4zMNENh3X4bVUuHJ9RsS2QM22baFSioPn3PR5bhNosVuRfikSpJftNrngogp7UbVhvr",
  "key23": "5MzvXYHG7dYTfcwpKDZtf9YrQsvWkrZgSArnLkEXDSi7Qt721Wo1buZFEyKpqaukvG8FMTnVrZY9YQX8V6aKcirp",
  "key24": "5r2tYtyMoSpsezk4wcyEX3frDeAqKmgGVgFe9RR9bru2mH9t7bnE8KmzkwPVptPzdxZZNbLtVYEeWjp4yGsGt9df",
  "key25": "3Hh2d7uc37Wa1sYP6SpE6Us9aMFcyejJqT36D55PYmyhMfMBU6DEp5dpbhwMZeJQaHF2gatwzLLUbGdNPvN3zE6K",
  "key26": "LyMFFLisJ8tyrYNNGPkC6o5Jr23Wp38xrFNpdLfCaekWERt49uXBDrFmcGRwvRLEWjtyfQpGthfHjoKKuiHiPgV",
  "key27": "62efTSevby9AdCi2p6UYeUJsKwvKPcwTZJakUuySTaBpLj6JbtHHP7NVBZAVertnfATnedTSq89uzMBLPraJxf8M",
  "key28": "3QPXJeVsnf64Z5SWB6FcYFsSpGLaCMcNDzaaj7XKvyL3VqzpBohESKcXGR9zCvbTazbM6eqrHZG9kEovyiteNnc5"
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
