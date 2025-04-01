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
    "1ajw1crTEfnM6aCVHXw8JwmDq3t2rHeXrckoJC7vZc1c4PEEBncvHU2DM3r2PCw9fJm3F1zENPKJ9N5i5yFtc6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53RL1BT4CuDEHVSa8MSzpJ9WNbW5y1gkttTNZ58Dv7yH2wHD8YM6bo3dYr4KuRdMVja8GbByEesdCGcGa56KXsWk",
  "key1": "Azd7u8YDwBcQ42yiNCAphnCSNCwDE2Am8W7heDkoFXyaB267CTtJv7joCqB5XQ51YJVJi9QMojRLBUXQL96B7ep",
  "key2": "5CXask48Qy3AfNUmnMqqWzfh7DUFkWRDfxzYUcqCMrR9XxkMa4GJAyfXvwDccWncxSAFYR9kQh2bkKFnhx7LTsnL",
  "key3": "2LTbtWWaX3kwp7xHdqM9MYf3JEk9gmFRZY4q9HQxmekV9VkFwgd2p174mt37sJrShzgug1FWEyD1bAwm4X6qkPhT",
  "key4": "236dve9VDpDgdNrdePxjG4HfSNoaEzWdAEPLLeQ72ktgMcKPQtSGDjNnmWT2SnJ8L2Y3BzMRPeW6r52onoVcy76k",
  "key5": "3nF6DeV3n7AtnfqocdQR7eQr8ykUMn12rFt112UW2cm3ZcLsF1TSmFZ1epuRewg3qYWhW4y4CdGm6spAmbFyYXx9",
  "key6": "3Bs3TwGiHXvwRoo6bwJtfza8Rk5GtA99hh25bygFfWEi5Cr68UzQfL9sKnmF4KswqoCWFCAfhfE8RJeZNhAxWjHM",
  "key7": "4yXrtL87FRfiZMepDNMMuuSzBg77y445GAEsNK5zqTfFqJo314xPRzb8ogKqZkcYfkozCPZexi77s74ae5PyKR6Z",
  "key8": "4ZEi8K9Wv7sKrN3gb1u8uspwE43ZuUyG48wF1Ube5bNGVHDFrZidA97fckMTh9nxHwYJKaU8wjSfFKkGLppwVvRN",
  "key9": "5kvwQ3RzLywEJ9YhTXDD4V9DyJ1FSBauzUSWf2CGH2xnTHim4gyrMuX5gXgrPaebkofQhZ9ifuWH92k6y8hUsB3C",
  "key10": "5izSmoRq4Z5ra7c1JKcizqk1wDCGiHZEuTGCq29skkn4iB3VepQVVaYai6iea28TSL4H9tz1HnRw3dxXmDpRuijj",
  "key11": "3qomQUnqnBJgd3HkHjLCXvnke5k6ZjmPRHwARBn1WHvg2sFDoTvniydLn3exzkvTnxoNtXNtkeYJSY7HirQVBAXj",
  "key12": "5iNaSS9GhQGXtPAD99g9fcT9Vxnhfd73shn8ChDPxzgDbPF6CEHvqnURYAtZgtQamMkBAPy7qmnndioxHQv3j214",
  "key13": "3zvgreV5DZPkmcxhzEuffEhJoEWe7YXYQgTzNknchSRkoVZ64WGXED2h2EUE6U3PNfk7mWZ9mb5kMCGw1LCHKQAj",
  "key14": "3v3oUFrDJpxG4xpqinwK13qBquPzdUa9hg2jcdryGkPix1tW5M8kPwaWnF8nnu6mX4FFePvCzKgz2ChHnB8gcMbE",
  "key15": "4jV9Rd6xP1bY3781kSXaksKHvWKmuGorweVYztGYeSafFTTaBRtGoigUE6FswkpAD5sLaj1eznQzDAgdobjk2ygB",
  "key16": "3mVhzaJcF5PczWNheDMCmiFNWtx5gz6p83UUmd1snXXnfPJzBXpFdR4N8F2fe24CCuV71PptXX2zVyDHu3fbhyZ3",
  "key17": "4i47VczX8gfGEQv9fbHF33mzSh9Y7wcKyzRmn5FugEsRV16JyFLaD4a2ybo3eyV2ZrSmGK4iZQAUWggXHUPzPN7v",
  "key18": "46GsfV4bXyChXyfsM6Wj3r8knp4VbTmrJDd4eVZt3a24kLd7JiPhYMaEvfYBK9yn8HhqAwHdbeCf2mTJuphaVVWi",
  "key19": "23NZoeXxg1v38gjmbk4WNPdrp6d6MBYa1z6iYLREh3uw1HTdwx8RaCrD1nVbCnCR5YfdbhKWm2oF6FKnAvA9Ev56",
  "key20": "3UgLau78WzrkGEMNg85HradJtH53s91ynKTUma9H5Tr7V6JSuTHmjUQsD5uGzrzZYro58HQ4WJTHZNLihk4ek7vH",
  "key21": "5WSiEkSykAx9nnVpWpifCUJbhQfi3ayyTM571KsjMetvkP8Y89uLDYbMUAWvbr5LmsPpBJ1C3X3E6K1Xsp6XEtFb",
  "key22": "2KwkunhJUwuWMzKZD1g3dPyH2yJdKgzKwqoKMVdBCRGVmgRpYzmGiAudgQkewXr6fmc5RS7xkJV4bFF69QZDNuHM",
  "key23": "2e9R4hFMhuchYazDFR3prDX9jnubSEm5RUsD8crG7nUYbWJfLDqNMF3Z3mvf2AyvUKshbAvY9ZPq3uggYkvQZNu3",
  "key24": "4gLRK6tLMbvJG6d5M4TkCG6h5CyA5qprrtAGwy7j6McprxBdUKyfaPXxNYqFcvPL7Vnq3auGCgD3NBryHvXausev",
  "key25": "5GYW9WxvXAuDfnbKQtG4rAPHifNFWnWx7hQhYhFFfbtichDpHyuboiTgDVu2Z1KcftiVzNenda9e5y1who7yTHRw",
  "key26": "2tyzUFSU81KMFzWskTzoh8PcYURvgigEHHLgNBVQGCyY3TchDE22xu12fYqSqWfeKbSkvz2CXUeBQ6PkRo8onNAc",
  "key27": "25sGpCQDSRgZ1TTraXbmPbSn5oVXtWHVnqeELnVpBDwzCbRL8ayVZc7yHh7uWLE3GL2cC7AMJrmjgpUm5BiK6nWs"
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
