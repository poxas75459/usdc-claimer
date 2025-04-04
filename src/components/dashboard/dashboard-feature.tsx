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
    "5wCKvNVQPap6hf16QLrU9WB7DvntY6HzPsbTZ6iWnsZEoyuugCg4y8KgtGm5EwUiV6Qixa2wnDmWhdVrT1kgiJDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zCo4MjJsvSnymzQsXmUmA5wkwVU9ragr6rfBqbc1x9Juf6e8ePjifGmh5dvZDewPtrpiZJE6fmgKfHHn7qbhEgk",
  "key1": "4LymAfRHd4v4EJW8XqWbqfHpHByhHw1Y49SkSaeguyr4EZZtWvNQgQQ1ndN7sG8PBPu4jFDHWNgRQqCBmg9MzxVt",
  "key2": "4PSKA5QjRG3XAzzoiaosiuwMkSb1VMTrmERF6YhyQkgB8K6WJj9VkudMNQSScw61VbQYjUWizZUzyErqS6ttsuLU",
  "key3": "2iPsS3Y4SwqTLVxFo4tepz7d1PtAnqSZwaKkAYYqjRkTcbfATMu1xvt8qThyznymGoNn4KAdJ8vjQkdTGYFfwFKE",
  "key4": "3sJwcHQGxFmJ6Ma3aEEySrsQSNCYdn4RG7sDFeLQeCSCqMncF3TdzUXrJmdBdUYVfXfYvSX5A7R7DoiEnnZxAn4m",
  "key5": "Ugr1w6Lj3P5PPKj7fvTePDig3jAdft69VUB4Z7d1bWXBvo9XSUUycLGTeKGWpTN4ZbCa4nxUZEy427Y6o5K9EXx",
  "key6": "Q61yJS5zRNjkVTfpRjMKrrre3BAGeND3wzF6dpgoaPdoB4EsBZZrybCvM4rjY6qZMMDTju1UPBFPL2cHtDJUT9t",
  "key7": "32xtBQJDRtkEWgT71uSHBHqtY87KRvLaA7PjTU2BkH3rm4bY66hoVJxLw8x5GKEqCLjTLBgfQoiEy3PJrCp9eUcZ",
  "key8": "5DHbgsV3Bcd66qqeWUPGewXrWtwf15rBFEW8psKH84tkMuV2TnGCTtmPxqn6JHYEE7e4AVksmS3XJBUUb3U7ATxD",
  "key9": "52KrQfmZim8BRWxH134iAYVUxPpjqPZ4m8hPMLhFjRnySikHHoo2NgPpM8AeAigUCd847awasqQ74PhvfZRkD4xc",
  "key10": "Z4EGHHoDEoLvTUFkWrFh81o7N4CMQBPBJgq4AHZuDeyZ2tVCjiEffhYSG2w4RSqQTiRYtWp5JcY8K8FNNzw9Dwj",
  "key11": "5sSHcCFvPeoyFMdiXZe9FxMedrXA47XtbzfkwQn29KUcJFM9hV28e8k4t5YLTsQqhsvLhcjTHWigFtQbJUAEGU7r",
  "key12": "3GGAUQqDHvafLta4tN3bJzHCNSeBMeLsPm8Jn5n5rZMqrTbZGJTvuDpnzUJLHr5nbG4EifaziEQkoQkmVhmWRmi6",
  "key13": "Dki3fYcBefyb2zaPqd3hrA6LWmWbh46RQa7EkWEriUuzQ99szSRxoBtGeztCduuZ6EyWPEmgaLshRNW3Js61sjA",
  "key14": "JX8EeSe5msZNaVCNWDXjYuBcPsHHN3ortpgCoJ7bxFkqpvrx8SR6KiDUJdrh3hc4DmhRudQLMBmRQGnFRb3a58M",
  "key15": "4H2hn53FMf6L53UHUuHm8PfhcZX3N5CMntTbqt78ppjZMJyshZXjtn7MHqVgTomFtr7skz6m2SiJLAaWagcBQXa8",
  "key16": "hrbPjFmLsfXWNQK1hFh9oHMWAhVuHn3y3aHdLupgKk1N3GyHi8cFmPt6tFGqza5E2M6JbAdXWhyTGyCd81DrV3E",
  "key17": "2iQb24mABu9sa6qkHcHG7VWtGVR9zDxZWnVgZ71eaKwiKJGYV1cp3kYcyW5oBMk5S3M87p5GLkx2rCajYAdAnCWq",
  "key18": "4qdJvYjCeNVZc36LxskwwVqFPSbw6C6dT6YFBR4hdebhZMZ2fvriKbgxvch9KJAHqwRWjjFfG6wDDYuRWQiwnb16",
  "key19": "41kqXBdte9r6JpFoR3aeEw6LgdGN5ASkWzgvySAqzVh8dMY6NMG9Ro3pRLJVmk4T8K9cQtnKGhH9FxCHhVEU6LLa",
  "key20": "67eo1hxqSuibj7C34aa9MBH4bwGu3KfPQzCMwBeKf76EUY7xvdUsxMctS9G8saBaLMCDsCkRa9G37QXNKW5BevdP",
  "key21": "5S11vfgMwYDfQxNqx7hNDsG3jMY4sEzFLGTTDE4ssZuJZFQ7QVy1CRVC982oUss2Ls1jCaBGhUsdscQN3xcQ5U5c",
  "key22": "m4piUFcB1xpvbGQq6kR8j3WeTWxbWzfvRU8P8fgEWzfCvyepxVu8YqjccJvXq68a1L7ZZfovS5u12FG838bc9xK",
  "key23": "5oN4nyaYm5htxFsn2qavAMnT7BcDz3J1EWdb6He9vrivpbAwgPt6EyzpnWA32QPLfE3VvBMAKK6y7p3rnuVussug",
  "key24": "WXSrCnj3VDMgMpaHehQR1CLoCZJrfXwkASu8prUFkeyAbS85VQ1kqBCcvQ2tT292mKyCD22eZb86hgJzaf8jMib",
  "key25": "47EurQ9y6UiNWNuddGioYzptqfGXw998KkWqHjyxT6zHDQFpd29osq31Tsk2Y1swsGbPY1qtLdEkcRD2JjMTwfZ9",
  "key26": "WPxJMnV94KbuiT5RrMRy36TxgKzRbDfG714RwuFHXqb4r1pC8swQ9HfMZXgRFHsVQUSi8wJjQTo3ZkRSW4MeF1n",
  "key27": "4eCJgsczs1AuD13eVJyext7GXgPxqDCdkgaeTaUyxZwX6kpvm5Xo9HUL7qxuPNaNqwbd7L88tERZdDX2ZPgUhB9v"
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
