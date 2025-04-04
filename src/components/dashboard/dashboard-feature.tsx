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
    "4XMUGEaVqvN1TQYDbJLgHkASbAypCYhnb9HTWi3vhNDo5dcsdB2yVqwEdG8VjSKhhWbVo8q7AFJqBgFeuroNPzF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z88hv6KSzMUKezSpgEHAzJWsfEepGfcHhT1bSgjXtkj4V7w2XsokPYPGoRT4N4VhCTMBsjhX4irtM7r15sfBz1D",
  "key1": "4YbH3hRihnCjKcis71Axu6AKhBAkB8nvBFW7XrRFPgYJncG6Vp4SdLJ8T7CEL8AoQJiY7KitRwWP6MNi3etZtH9k",
  "key2": "4yM4LBmWYLKDHWGdkPTTwYETDjkh6KxyrTg8bLJKWLuUDCAgLt7AWFqWdQDucKWArqu1c1FWYq3133rQ6aZ2FgiL",
  "key3": "4ZVYsfxkygt84bgwzVMqTQF6vfbuZsNvn5CQP6j2gzRHx9kjcrSsgRRUqJvkTVcFge3dV9Puy8vUhdBtKDJjgYxA",
  "key4": "2z6mzzNgBmLeTU851N1LutHUXZdtFowwjqZupoa2bdrsVwQYtNjYET1EfTYg7jRs7eTgto8ByxjHZuvaZcfqAdpF",
  "key5": "3cFW3YxWiMMCB8AP8bn4nPSyuT1qNiTWpNv1zRRiz3U9wajMexZ2furaHikPc1GYaDjpfzixY5cVuRh41tLUVzYq",
  "key6": "57HVAXprKh9NBhmWegTfNiKUM7WqVQDrYJY6gBZYKysWUkss5VhV1DPPCJTbzqRjVmVnVneQf5S5MTY6KUGTNJTp",
  "key7": "3knioNh6mXbVwqBLoD5AVakTsznJhfSmFT8B2G6w1RKZJpV4xxZtZmnaKBdmBpUMk7vHYjzY9PAV4vj1PJBPF38j",
  "key8": "GQDWndoobkRzfbLTnnU9xQZKDod1PzfhWd4pJ4zxUb2L73757wLE9MzA6ArH6ALan95bf4qrLzZYcm51NooU2dX",
  "key9": "2nPK2pv8mwF2yiNrLMRwpLxbDTALYXGWBq8pYYXhVNfHRZq95psvL8j9vyejkFM55EheuQvhtBLahVuYpBJ8dhiY",
  "key10": "44CxNdDTA2idVJvjoQnNQrevLnhAjT82e6Mx7J2FMPoMNUs5q4TDVQz2yNEEFVgdKU4smLv7Mjv9nGhT2ovRi8mx",
  "key11": "2UFnB5SNYzj6533wzYqY15mKGjEccNXxTrRmYEbFXsWuccFSkCvHUZ2ixnTszhQkVcCbHM2aGqMTnvB5Th2yYuB",
  "key12": "VjF1mRtBxgspDUFNys6RSUEULvqFKKp5vue3yiXzDMuvTHudS2mdBkh96Y8XwGBs4GFZComDAzadYechGqsfVDW",
  "key13": "5yrHYr7g4R46a8XsUMwbfHxg1swtizQHxPevuzgmBAc3TjajPKFUzhMz1pd4DV9PxBFUNL9cZTykQ2hYj1fsKnP",
  "key14": "2MeFgiyoH3kZ5qejyYQUKb6xsdJT8D8J53y5VodVWM9emDYr9mnhwbuuSK8mVagjg1XZq2MJ1kDziFrd2V9V12g9",
  "key15": "5jPGU735Txx1eWsAJ5P4itgDeN44Z2Ssewwxsmww3apy6o9eKbXcXGJai6865454QhzRQcQBPS83SPmv7oAjzbUz",
  "key16": "zCK5DJnEXNhXWFycLkZgVmUMAePbycqnaB49jS8KCmdKL6L9AM8i5GNAhwrHRVw7EHkDkP2FGrHo4HHhm5jZKTs",
  "key17": "5s6gSRssREmtM8XcRd4tBZDtymK7z5WAb6HCm72AqLWc4ApErro41PWLpJMhLLuKqaKnry6rEmwqTeJkY7w3A6Hb",
  "key18": "27tQBqXvAJAgdeitEt7EbR7x8Uih6se6dYE7nXf2L2HwGJmwgmoSNLXs6g4UpfMWH8UHjHHse4yNMiboN8gXodP9",
  "key19": "5F4NrMtz4rTdM1uZUGkjvaFkmhuwqtiAGCbSUvUSCWNxKRqx7sHyKdoQSJLQneynZKpHBbCcu2mXAWyZYQWgQpFY",
  "key20": "4srN3bSsikKB1cAersefV8ngBGPknfS98UFDuCQor1ZZQxJ2Nerf514YQHh8uk7X1TTsBEAhsdNLQHKMUU3AbkwB",
  "key21": "53QNfe7CYkEZVr7BEGKTt1W3b6KGRqJiuf5Wk6J8dy5T8abRY4xTgRJM4k6veQqap9wdGTxNxCTMzCC83e7TU169",
  "key22": "2pXYcQMyy4BbTptAJssFq8LA8XAptLJGY43MJsQr32cwK2ZXHZfRGqbtxaJjnXiiS5ju8xtFAKHML1AkzWWD6J3g",
  "key23": "MXsmGUUgLo47fGRdzFXRaJWDAZjgFX34LPix83P7AFWaU58tNuyxvGDevVBSwgeQZCJcNJfvgqWhnsEb1vXxC1q",
  "key24": "2RJ9AGBk7C65bwhxAXUACKSVdm1rPCxVXnyBuJ6aG9mYLv8KZuYasZ7LY2CgjWewpa7UkHofFCHetw1PN4B5L75r",
  "key25": "PdA2HofxSyfyvHB4LXgbYzByHyBwB93n1cqTkprPXn73FAkzQ7wzwSpkjgB1YpHPQbNCDmAAbHtaeqkJ3n8yUnd",
  "key26": "5YYHZkfujepd6vCW378cqzWVWaeVm8fwWx5WPCbxgawd8LxgQjpsAba3X64NvFozHJgTHConJ7gKxiNLYLCKKinP"
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
