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
    "44FSVgnYNEQpFHV4Wv9d99irM9LmgJtzDDMENMDWF42eKyB51tupv9zoKjwHAcsUyEWbUJTQdT2dcduWwtQAXVky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYu9RjaAPKLfp9zSuLDKXytN5ygKCB1wAY6emL2WWSpEbKCL2Ni8Mpah9TYqNNhinoAqPL6fvwva6zM6VmwzpR5",
  "key1": "4rxToWcFnD9wYXWeQCJZa4vzHjQuG4qRh2P4UoDRWcQTp48RiRyts3o7xstsFyGiiqDv5C2LMxdUfdD9RZ82UhZT",
  "key2": "5ZXcSUiatcc6rponV2pxREdcPPSQyu9SX3YqHbQmJgY1B3h2tsg9mMG3oPRxLfkWeZSvNHxFKmhZZYNipgvMLbrX",
  "key3": "4PxY3LgzKeyxg4dt6tyXC8EijUs7UWdb8jcZPwt17pcvhCzeWxb8ZNBja76EK7mSHrBYuaHAKuhZbCNTmE55zu6U",
  "key4": "5as6ki5qZy8gxkgZEUjuvegTsBptcQA1c4TNZrxH1Ur2P3zonBLgF6zheFHU9REDdTYGNasoFDX4XSmkKAC5rwWR",
  "key5": "3LEfy1b9HQtvpdM1uBPwY1i17n5txzHiSTA8vFLsfztKw5NQ82gpZdV6W2V7bnWNbQgrxVPe38ds6pZk9gFLf6tx",
  "key6": "2XK4Hs7M1zfkypP971Xoa81gVCu4n7NabXZv2XF7N9XrJUUy56GNvuoux4emL5pgPBf7rucZBqt6cytGeSDuTiQ7",
  "key7": "2hKHv26Xy7EnbY8exb84Z8nwRzW36TFaDuZWtUcYySTXpYZTnX7XE5yWnmS8KYipeRUaNfkNVCVrULs8nxfG57tB",
  "key8": "4uRNcoVKZsnB2pLCWA9dQXSenNiA2PfaW2U7eugvagyRigKRqeHhZWrvd8RSWewnsPULaV7bMXqLaabYyuGUTfNU",
  "key9": "4nNFqm6XkQF6s32cJ6YtAekgWJU5cRWGGDy6ubC4556SHPSbjpPsMHXWg8N2wsTYrgXe5BrC7oCxvv2JZ3s68Yeb",
  "key10": "5ng9DVz9Mdvxgw6Fmi4ZFNYgdhs985Bfsybee1AV6bfokza3QcpTp6VHUpW6jvzfBcTCiz6tJEWWqt1oLZuDDjG8",
  "key11": "XxWA796EtAW69cqqZy4jN7vT5UiKcsWvyWC5htMKeV8aWk79GqDEekr8nFbosP6FabXTdeEpnMuUd963nyyjB2w",
  "key12": "27btAjJFnrLrK9Z5MB7PPDR4tUZnmALFwD6Mas8K3bJeznciJKxGqYU1WHy9oCB4MGZiJLY5PZfJCdG5xT9ZYipS",
  "key13": "5kRQwF97uD5gMZ3bhs7mWm8WWSxfVBHMH1NvbqvmAeTz82XwoPqYvjjLY4cTKF3JoVL7V7Zbx3L8BeK9AUGxVKVu",
  "key14": "UeQbJHZrir5Zzd9MDYv3Vj1iM1q2Ac4F64SoCCcQvzkFuQdXU8rZCDS6yRtioMK6gyvWdSWyBp3VepizBTs6gDA",
  "key15": "2R4BSxoaVNdu3tiUR33sonv1dtYAKZpyfLWGwtfAgW1TiCJhBB4quSQM6kTegxnZRaWrvihvseKCFAz8G1TFnPP6",
  "key16": "2kZFkMhdyHALtMo4f1vi7AxtEU23a2oAZGwQhf2TmjsHP5274KQzFWnCX2TKbsMtbE4HdiKd6gfF3FXmTfmSwnrZ",
  "key17": "5uDAwtnuqKMdAnqiT1xxxTxtPpYGURyEiBW3k9nssvH3QJQBQVnkX6iLoY36D3JFPdhagUDgdor4Dgk62z32HAfv",
  "key18": "5LxFv6KQi2xzASRyncDBrSEiuZfHQNmeBELWGfENiSfLPQ93hjtqHqj763ME5WjwTjk5BdzjpuX2owx8jsT1UUxi",
  "key19": "5A7ENnNseac7tX71QMCsnHHHkHm1A7nzsTh6aHgKcigqdvR47RK248bQdrMd6vB7aXv6MqcWPZos2fEtRGC1ZBpu",
  "key20": "vWttwrEDqVDyNvPuoweDkU2LVmDoaevBUsG8jQRosvsPGjbvBZygFu2Z2HGs649yTiN7tehKMG4jGMFTXMq57Hb",
  "key21": "3MsvfAUec43YE1YESg5dtHjxq5e5ZbwRJkuUjKniPKGDWExVRgm7M5RPVzxA8oat1TUxhU8S6tu7uR5vGYdke13W",
  "key22": "4EbjDC3yxeXzuXqNMYjNK9VdPR1yy82U82dXFwkFsiUbytAJL3FdPyv19zDAwTuYoDYaHJz74SFMjfyZCGQvTQM3",
  "key23": "2aeyFMEBu4VdzJA6ADRmceP44ueS11CH6mms9WA8j6Same3A4KosbPsTmvdMk2nYp8PTRpjxAvKnzhpz7fgPFUcp",
  "key24": "DeqTF6cc55dPmKtxWeakjHJjGgC8vDfiMtyMrg6FA1bxpQKteSnQdFbTUvRPZVzzzxK8o2x3VMHjq6kRB8xcuky",
  "key25": "3h7pe81bx1zcfMiM6mp2G1JS3xpfADLJ7hhJJiNjkM8VDszp5sbbJD7YbqMWgNEn8swyi1CFZc2c6wGkfqd86MyW",
  "key26": "3pXdLS6XUmWoySyf6zeu1R95gfJ9a8pzxPmrSMbqEywcShsvdMe6Vnfmy7kdcodvGhAE34RVEjGMcsKLFE4sXyQj",
  "key27": "4A4HyaBowsUiTHdQa6JgVVdTBGSU8ftJT8TfdzrFHdZZgrWpUcY6WbYQfWNyfCka8xzLBT694N7vkVkct5ZcB2L1",
  "key28": "26suwFmbZVsSvLYg5Acmc7eLY2oRxZMfPjStJiQ8YtSG6xmxpLS3aBi9JJ8yicJ8ZqKkwarUGicYd7irWf9iJ47m",
  "key29": "2ien7qBDAUvV7L92qawD37WJ2LvyytXZzpkoFE3yiep8FfHypwZ15vYKjhWMgwuZ2sovpyqvbB7tuqdmn3xgTavD",
  "key30": "32TcD28jXYPeRiiMepNcksvQThwnfxddwPaxGSDgpwKP9m4h8yZxZ9DX1SeXNavemmYbSViNa3wYatzQ5uHMctvm",
  "key31": "226ZB2jyfSLd5jzEAD6D1H21LBhhtT41n3JCRMsagzjy6mv626cG9vGp3ZmskKNeD4ZtyRVZCe46XWf1ZT42raku",
  "key32": "2BQabkuUKv5dAYMDznjwNcPhPjYY38gHbCtXUt1D96vLyswqe5jcgFEXpEn5rhsQYrTjrP7pBs71UessxeNBdUDa"
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
