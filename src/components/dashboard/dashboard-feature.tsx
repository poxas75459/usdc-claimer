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
    "54WkAeYKw8kjK6C7tPTjuYAg4twTy7EMqEfLuXpodxETw98BnRxaGeBPaLkrZvqCiNQsMowe1ff5ELEwxQ4GjdfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thjnY53tiPHbESKBxRktovfsPREGxuSbrVL9uAx4C9qohNpjdjXgKMUr9se3uyDDxSxZ3Yv6A1vrGNYoHQKzsWC",
  "key1": "4FrnkanADQLUfpAnDvyFHYbSF4ebugrdbeM4D7pC1fm2DEdidie6CJyutaaF323nvCMcC1TmUJGpjPeimenfY1ai",
  "key2": "27n5stbRhgsSJ4iMUgChqUV2xr4DkHy4y6KtFoZHBEFW8UjAsZTjEUR4wZ6Pw8aNigrPJcJkj7vqyX5q3cF1i9GL",
  "key3": "3k5qyqnPUe6uEkvXSJHMxvN6mSGuWBuyJB9JjH8oJP6rzTrwVn61jeLvou6p6XnqR7HeRo2Nv9PnrMa3P2Gng4h8",
  "key4": "43Fi7aeVrRgm5gN4ANUDQNEtWGDzqp3sW7fmQErT5dhgvMWXwoCYoHMydjuQARqTgAuKSUgYHDJJRcQpcGbMVbzN",
  "key5": "5YK2xYrpjM35NEAXyAaz2oNaU1GvfXFXhx2qCqj4qY4fZpEj1Ve84Q4CLTPHQCcV7pdCpPpboozd2rrt9vc9WAzz",
  "key6": "4Kd3mBN2UQXFZ7yXQktgxpKtSJ9Fj6or2uuxsJMf2ga5PtiB5ruQsrnLr24koyL6cMMvcVLUwY6oA79YGTThgfeQ",
  "key7": "4SkVBqqdMGcXAg5yrNGddw4xA45ooK9aXyVehwPYojYKrm3tvUBe5z6tAaxPoLuz4aokFSgtU8zT8Xtm1EzRdqws",
  "key8": "bmWaj6bNGMg9rJpVK4DkRcrJwSfw8PwD1GVSdc7AYJJKGez99pwDDQjNUG1TyfVdqnsr3wuMcB69xX2tYoP9iis",
  "key9": "2QZrxpGxsdGFjjnfC6uRMNZDz9pAS5TDmTTjthmFVTj2YepMCQGCTtXLwjA3bjjC7u58u1u5Q1vH6SeghCpiWaka",
  "key10": "3hN89vzKiksJsT4oCSwJn6hS5P1PW2mEZ6nzfBFHAhh5VCPjvwGAS74UzHSpSXHXbCEF5ibpDnQWs4iRgQKHoeyT",
  "key11": "BrXZ4RVR5VMZyK6EuAhPEVxTg71Wax1M3mYiwLGBRQeiRB45n8paTR1Ws7B9ui3uPvGZv4MaJRtz1BGrzTSB2w4",
  "key12": "54r6VpiwVZMMsvKnVdUxTSMyC4VJkWFHuMrqeFxkcc7Vh7M66qbR32SWsuXjvXv1DuP63uVfsrAF7ysveMWMRbxD",
  "key13": "3buwGzGeE4biPDHSUxRYZj1aVABdi7P6zx68TJzTRt7L9iuZiAcCx62dQ9essUnr35PNKhxvgRAv7RECqkim9vSt",
  "key14": "4jTs4N3T9co6dFkUsc8t3GW5HFvq45dCWD2x2YmYcmWT3oLUtbMdfGxob9YRK4RdCBAyjwExc57eyGwjmudCMoaH",
  "key15": "63Ut4xrAnVBK3MQA3CRSgoCt6PQvknZ1V2FRxptNMr8e63YqR4K5g62vZjLKEARuVrFAJiEe71PqVLucP4Lv9WBm",
  "key16": "4tNMucRapNciDL4TLNYWc5UvKkFFjYSsi6UAqw823G3geMrn57MTSZpRD4hKdmcEvapq6jEtSjwSsBjTHxjaeKRH",
  "key17": "DD1jzU93Es1uBx4diG6yE32yXC3StQk4mUpXN66xzTqbZDN3vkG5pz75hrQWHcHqFVbTsuRvyfHaidzpy24ez8J",
  "key18": "4Akp7pT4qxKzCf3KJPTGKRydeKWXSsbRZdQsmmRPr8xkmKouVx5xtwdZDtn7KQgi8rKqqQSWitKRBKHCd9B53Dfa",
  "key19": "46VSMqLhB1EX1TrkanorJ6enFQsri8WLH7gaa6k4owMocCT5c81KDHXsP7zBbBQP1PbWUy9Pnx2DSLSjUtC6JUFF",
  "key20": "5qv9m7qAifBbwS4Gh1sUbpRvD1pwZFuxKNYzh9wt5WL8GGGpQ2vqKfgRVSKdszyhmgXTqgyVxMcxD7vTZYJDQLwF",
  "key21": "2odN6e7nhHAc5PW9jXCFjkXxzywjjFUB7RepstG2x9hNVuUH87XdTjD1hhPhwyhiNg5aBg5PRSFYqd74UVFrWxwT",
  "key22": "3pmeZUH8D5GgAsABBvSzqhApDVijCc7sk8KXVB17YtBHai2WJ8whpccJ8ZkiQyvEkJUhn917Wm47rXwLNxCJHjxF",
  "key23": "3uDjts4aaCjUr3A2mQV9WNyenPbpJRECTrz5jGmMgMHnZGjR9nVWNvXjBcHEYEhzxr9eY3rqU5c2KNM4RptKBEdX",
  "key24": "2jRtgPkUHJJovAqyixU88fkc56Uj2Xk8xeUiP5XmT5wjGug95ffh2h3EJrq2SRRv4oiZgb5aTJxwgNsCRogTGr9d",
  "key25": "2BihzCe1BUcyoDsfkPmvCHAzCkps9FtJQSmpmhrHdPoLp5gCcaWL8Nd7Q6TZVWQGMdjfkyXrJbazmd3KpTEfQp32",
  "key26": "2nBrRnMUf6Tkaqouwfr5nygDqQnD7MfgfiAP6DKiZLQUWt6V7SiBBiukqadiL96nrLkE4AnfobsoiuDAnQWe6onW",
  "key27": "44SfSxCgYAdopZVwyRSjRRKDWkFGBhrUiW31C6dDma9yqug7FgEJoqdZL5NzZ6R734GXG3ntgqV6xkQ9uB5DhXPA",
  "key28": "43V2PMkFTStd3zVAAsLaiXxwHsuPbmxM37nabQw8Vg1jozemWv2ubBE3rdJmDEe4X3zZkNBiq8qUxkj4XjZU6s9d",
  "key29": "3zz4k8x2CozkcDJnkjZ93eS1FHFdkkQdeo2rA3FXgJnprEXMNW49bdXuMVKbcT4zzGDK5zvcstzhBimwpatq77x3",
  "key30": "22mFm7FKhEcT1prvCvWdDZcy7PiovgBQArxfsMoW2i6A3C1KiJRuu6gMqjvdxnJWGitsxMy83JnUTDHWjZbBBekh",
  "key31": "5to5R8LhU5FVYHHAVHotEiwgACLgo3u8rCrdHmYJ21aq47Ld6fjGSDRJV3Lg4wJBba413RacvNFaeLJTaMX3LNEv"
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
