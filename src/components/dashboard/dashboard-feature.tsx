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
    "51jKou7DFXuRJtg9gsoo6dS2Ec78fDZsWPJmNuoR7nYYeSkwKT4WZ855xtTL965dU1cZop8RJaFayf9uNS5qe251"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ghV6ZLaZKBrKTV87nmjr5jTVi2v9AkEbQzokAbw2SDYAYBH7WJDb7aDaytm6Z9EF8bYnzMY9pnyvY8vFtWCHi4",
  "key1": "2Q8RCBPvP6JRxrJDyVhCQ9odaF3pNm2jrNxbw7JVdm3vFV3ZKge45HzwEPcBn97NF67sJnyszgWBND5PZLaY4o7s",
  "key2": "spKUXw8pfaiwrGfoPxGwdJVfsozizKLZkJo5DdNjmtfYk8PeJammNaoym9K2U4mdKpciQQQh3pPSTtMUmusXggM",
  "key3": "4qciX3hyudN6V4JHjF2A7XQJUgxoH3gPDdf7YcDi9hJFvoQgSH5PJd9X2ndEfkttoKxZ3Gfo2Gnij8w4h6S7hgoQ",
  "key4": "3qMuTDB4FWY8L52zXz5mLiRV3tpFJZtgT1ciJ5BAomd5YBYXFfTfaWr8wM7L2A9FYpuL2qr4yUd2oMQdUeawgmpP",
  "key5": "2SJHMqYvSqWUPr5gwxg1GK8nXZKG8sNU7TC22WnJY6pstsJPueSKq1MxfK3cy95H3S9N7EQ4sxYMmKgzAY6RWXZA",
  "key6": "4K7YxWBYF4LzMPnDmE3qNnLfYcPumZwyc1e2B4WDrRJEzEmF1QWBfGbVRgq9LQQDd9rSFqbivQcSHjvjVWvXC1fj",
  "key7": "4m1vL3LkDu5h5sHJvrULW2TtopmhzfVnKmxhaqUHCzPrRyvuxEgyGAsbmp1m1fchGCHWo1XtRPMZbUqed7BELJe7",
  "key8": "cYYjHzr4Svbg6oMYYe59iH7x4VyPryayPBLA4RPEY74CysfBB7ZPkU2mjSBxhMDDKEFdE8VskcmAcBo2D17Aj55",
  "key9": "3RWfJKSmGTEkuuReMQah7Mkc5k69uQmJRkSEBL8qqokS2JRDfQ8ZPuPTZgoZZLqirSWd9BGL81kuXV2Qm6wKLj6v",
  "key10": "5V3pwMvMjAm3yiJ1tXwcpwqmMwQSGwJNeYHrtU3kVPN81sauC5dy4bY7SEcQPhszwmudynoPUSqR1FmQ1MCK5M3e",
  "key11": "2FonuURByPS3LzTMHvSMAGkVFfVrVZ1pLLnJ84atEadUDxJRXqrek4Ra8zxpbMKn5vUyrkvX5JQWsUJCWUwzZqqJ",
  "key12": "78dFCwQs6FRLN7KyREopv8po46FTuzzkT5w9WXs7rLiSmj1vEjDnHnRB74RZgbtdNf7CWTnj7Z7iAywXp6WnY3q",
  "key13": "3rM8FdAgzXLZLepgbHh16ALTxt3DN7qyG4n1Kfaqd9SLNLu1LfjNa8PjnPKNoH8q3JVzxUzY7oXcvonWoxjfoP2w",
  "key14": "3FLbXcmykzAierrss9K7QN19hdtrZ8gEFkqYUwmcZ8JyGmZ4g3edyb1JAN1EknoTkwgzAwpuRynifceM9B4k9w1C",
  "key15": "4roPBZqpsbLLPWGrAjMxkvYgY9S9XyaGhqsMkbTy2h6dYCMUaG9UnVFsChsG2kQNhGhqsDavo4XfPHfLEQY8XfXF",
  "key16": "2FZAHkpQs7BkzKLEsoT5NPVEd7WpF6Njr6aJj6ypvtJuvc9ZKqUYNpMcWrk3ah6y5sTJJUejgQNMumQMAk2AuWpY",
  "key17": "34HWRZKLnzgbctUmFG8XfDvCnNciQ7ywJF1wpT5vzp2GK9CPw2E2TmTJy6y8Lu8MAJJiZzCBufebNPFQS8wZvoQ2",
  "key18": "8P7Re2mZNBriP9DoXF86Kn8GYzyVc21HvAtKACEyX8cQpzEPwNV1vJEaxwZUdhszJHKxhd5rJKUt9Ng1Xs2ALXC",
  "key19": "3n8JnEbc6qnx9qye3e8KGCDuxy4F1metpk3rXV7FV27m9oqWiJWiDo8w5oCr5HbrLWuth8bM84kpu9wozwGcNb5h",
  "key20": "2Y86FRieztVaN1vpkxEXeG4v43wrTM3FfJCMKYSpbnMghmXAos1h79oVWqew5VLupsJLvFqJvDwuNHirqgYh7Guz",
  "key21": "25YjMSpQSLZH5br47QXeWer6N6Z7gAQ8j3vpz1qvMNfMAdoPj7DcUTMbEEgA6kVzCdSQbastgdAkuGaQGFxMXFqK",
  "key22": "mxSbDVKxK722xFTvgzutaVxVtVew78XWFC91fgYSt4vHxH9NV7ZAWZq49jZ2beDkBGimWhUATfnnNSw8vHdpNim",
  "key23": "3Rc224bu1mKqQDx3vfgLPwaN3MuUbusTi5TLWEx8aWwBm8s7QwFds9rbXLMuJfySpQvcuJL9Zru8qCaSKKHDy1tB",
  "key24": "4APcgbvpFEBevw1sPsz1dNbpcyiTFDo4nVVBwwPxeMvhxRmHRkpYWz5NJrwsFJPA7TBgQvYeYW9nTErQyQTDurda",
  "key25": "42CBqWVRcD98Z4nu6xcbEu2DfCdgF2zRD1s49frpq4arQEYw8AcsZ4ieJi2ZpLXpnEVweXaHvtkUVupZi3vCUN3u",
  "key26": "2Hj4vP7mMUtD3mFqzeDZKEbz7dgC1L1j3ueTUEuMq5gzqfSa5dhC5vhup5KZrB79Fj6HvSP9DLcM8quSHWsPDYNA",
  "key27": "3hZu4eAbuKzNwRJ14mvLGU3GfmBoLZwaFCjNWMt9p7wSqDTsPoB92A2MKBbQ7kBRdNDbNev7LAgAmgf6oz1X6W79",
  "key28": "SjB3urJMuhTBzH9nxkrfJJjw7Mu7Wb7h1krFnctwLr6VkGezGmqVrS98nUAiAUkGsaHMuS8eg481K6VidvUMezt",
  "key29": "25XnBpSM3zL4UZi1jYvExtt1eAZh6GEamKvdpaZCiWk6xSfdYYEoLLUc1GT34bnrXmTNJnqVbuvpN1DYgSeCyTzQ",
  "key30": "t61U7s85PWWjUABEFHU1fNrEdAVq6Hx3JaK4wAJYoRuxXLMaCQYSmarRh7JzVpHvXM2VqFkwLGKgzJcJbzs5gt3",
  "key31": "4o2v3LBgpq3RxhvA2Azhc6BxDyGejSPC8JLY9mCjJhn41Vdnxw6x5UbWwsFhvn5jE7VBw5caR4BYMVtBvYPaSvoa",
  "key32": "2ECJ3tHkFDzzQcSSyTeNBJQQZk3Dosc7oKA1ktCo4PauJZk7pzNdLtLRARo8pj7BdTBKLDi3zPWGWvqEJLvg4SSF",
  "key33": "25RLjnpyXYTtw6dN7ywug6avrNnT8qscqV9tHnPy8USRYTyRU2CbTwhH8QrZpn8nzQtQXsmgDZ7Mif7bFZG1kNzb",
  "key34": "2HGHHTTU3wJ7U95HNNJKFVo2ErzzmWyVpqcrX96nXzR9BTjwr1podkqDsNW8yYrek8XQbHYzB69muz81ywMc1HGM",
  "key35": "272aGd2f5cbVTPxyR4jaVMb8HLrNhCU1mtMSSdSepjPnz8HWzsyHJS3ohWHuj7AMAUZgetwZPWSuLUNTaBunPrmE",
  "key36": "4QGqQEV7uNhSYZYK1WX3g3jFDGCLj1rKHTotzKTqUXXK5uRUP9MaCNCUkhtBvBrXzq6oESXUUEMimqE9BwormrY5",
  "key37": "61638KRdGmAwy56ZLoY1k5t427GuRgZuDAnUNbgtbWxNzCFc6KvKPVJLwEALeV67DgnabktyMmUYWiwWLhbn4pVx",
  "key38": "3i83BK369uL2UUUJrYmGBo6YcyzWYZ8T9ZL2nUvpT6fYMvGmm7MTZe52Q2VAsgJXqrXaH9xNvhNw1dLsSJRd5iet",
  "key39": "5hX3JFjvsZ2L6uhjAp2kVQpbb6gZ9tMWjDa9efpEg5gK5FiC2KH4E3MdeCyoEw84KS6tAZ5FYSMB7iHZWWzFfpan",
  "key40": "3QR7yMvyEWPKuHLY5TWfzMN3G3YZ63xbMNprnQn2UQyLJMsXa6wN7aoCGJnMhCAqqGUnhonn6YB2Yj684DZE6jDn",
  "key41": "QEDyRoXZeCwvHozPdFUYdnZMZg7mH8muJwbm6xXosmTAj7UEZqtzwGnCgJ6rLUNUhAb6ya46uJhootkkaYDFwtw",
  "key42": "MjtzgFkX4gddggx83k1FjTo6dAzhSetN1pVv1KKgwu4THZr2U84NYgg2rueZzHhKXaGDj6LFyu3UKA1KwYitYxv",
  "key43": "5YLNbhfsD5XrRA3YDahHxdM8TLJUCqEJnT2cnE8NYzQct6ASwVwE7EEMi8rky6Gx77D9KKemoDkJUQozF18H3kR6",
  "key44": "4PjJHN9kbsm36Rc569QyDG5fgcYGqodZuMvzBK63ATp6soxtVbHfC1HtVftv3fZm1LADGUm896MUFLghTyrR7EDQ"
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
