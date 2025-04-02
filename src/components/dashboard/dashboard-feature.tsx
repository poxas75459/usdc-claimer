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
    "4z3PP87k5q4ibgQ4JirHkeqoNPhecxyTdFfz6Gcq6mCYW7vSC8qyTpBQsrN1y7Ff4xzRy2KGJoMbyBmhuuSubzKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHtVctQGiCoWzA2K1RXAV3SZLajQ9H1wJYy8W9FJvVVsn5S33sQLi6yGdjpqA25EzJqpyEkZ4A6oNmsF4LpFAtu",
  "key1": "4XiD6iubw3bHaRzKMMw5tjMa5uqEQuLE4MtG8rheWzzMmQrNBoEmMpNfjcS9byfPiiE7kboicRNfp9QgLqUBebp7",
  "key2": "61HYkggsQs9MrLpmkdUCH8uwS5jQ4NTu3CA1AqUxKb7TGQoDWbHs3Z3g9JPEMgzwh92TqMpcHxe56uron3QCSKet",
  "key3": "2a4k6FzaQDopcfvGZudd6ZLcow8uLYsnh96vSm1g4srWhEdn5XECSh8FikBQvvSrchQrtBGerb38fYZZh3R3Ei9F",
  "key4": "5idUY3QyeYRebECEeZHR5S6Q9wu48fLnP6XUKZjZy36k1R4wf4Fyb2hR6zELhYGoXvcD1DbQneHyjEe2kJrh2PA3",
  "key5": "bNpq4LskH21xxiPBrk2LxnfFD8Kxd8rudhCgKCVtmWLkYcHnMtPJ2g8CUWayuzfDHoaoeC9mEU1LMC7geW9NYL6",
  "key6": "5RMdj5D2K5Jsid5FTyuKSo4awmdQ5BebHiqKAMGSrSGHpMazVxjKayVcgGKgDmKSPMg5Vz4Rw36RTrWa3pLnHw9U",
  "key7": "4LSv3SfNFUbMnZQJsvG3X2Wi6umXGWc8GVHNzcvXKDmEuNwvpoKKdRAWY9NcwukgNgZD8WUvA2TWhkfnSpvWZcAF",
  "key8": "3PKvjjiZhQsmxVo6JaJr59hMn53Vu64agkSZb7vLmduMGMBAYdRjb5mAHWYBDMcqZoXuPubZs35AYe3ApaV7te1N",
  "key9": "4tiBwqBg9cyCdi26jccHQY6S2AoLmpkbBjv1ujPEAKAkvSe77VLo1yusZntoGWkQNaMdrxQZoQziZxJPTUDBubGg",
  "key10": "4Qb7SeBvjzpB7Uk4KReEZ2qPLeAzgdwGtCXZukinqruG7NTiUWHT5bkf86wX5rUQCaCG4Nrbw5YtGkPHSP5Gy2rj",
  "key11": "547tEQ7k9Smttihd4yc6MgJa4v3J24wXS9yvEndHJdCoRMf1C1PsX6u6YR6uu4TEcp3nDu5ypDed43f3vnFbyej9",
  "key12": "PNwshE1FnHYjBNAF6X3Wq5gnoLVLu9ZGgw8m2Smg8GskJLTAa7Jo1d6f81T1WW4s6YR61pJzGVREQa5UboUf9J2",
  "key13": "3SWhS4xkJ2mtmfcibAFtuXiJVmcJwhzPBCBPcEb7GvKnZ5CGDEe24cbnxvhWJiACw3CTQDz5dmpRQr5DSZmPHZjJ",
  "key14": "zRu8QzUDoCVbnAuxYKvBQubyC4VFwaj8SwhEq4DP16uiL8Xeiq9GjZLZf8k5VY54ynVG9qdi4UKDktV3vWqB4qg",
  "key15": "5KoQRYRDCXRL41SUGUuCTbYXdP5sV8KTEHFWwfHHdzhv7TThdiFYQ5WJ1gXSFwziYDs1o1cGeupcvUmMPBrHbseo",
  "key16": "5XLFdtSkLvw32DPqzqXDHjiX9ELKt2SfcS5DKEyQReV8Bfd3sE6HHGXeboCac1bVH4bSkjFhKKsSfcAoRtGJhuyK",
  "key17": "3vM5gWyzwC53dy2sEKjQN1k3GncrJerjU7sbTYuRPXHn1cvHfDn3GBPj26mDwszckYAz8mZ1PQ4qHQPYZGz9f4r3",
  "key18": "4JRH5VHBEYTtHJYojatniBUaqF6QV4n4Xv9cZcdHvskVFxiK1EPVaxMvpSrJqgyhsjpDkN624tjM4nQSVRpTv5ZB",
  "key19": "3acdTYhk1H9tEAvW5tv8QsxbuSyHfvUyAJCKb23JYWedUzAjEGFNvuDVtUpmWhqJ27T6M34xFJUCAsbQ6YcKu9L7",
  "key20": "3zAtm6yckpUKfg44xKBW59qZR32GACMMSAmZiqddN2cCroTqmcKdGTex9QnzgQj6oFojWtB5wUSK3rDubVEENH6N",
  "key21": "3tiLi7rBMkDAZnUsGMEJWCLt3LBmLMfFFgLfh1k6muGvcCp4a5FqQhLqL1cGJPjmiahvzgRsM2F4SM8XD5coC9PD",
  "key22": "565uoSsKyaRG8gs19R35sMM3ApeG3kG6cfkN6Pw51Qs4KqeMtsfVMBXLEifkdaHTtU1kwLcCJM56AiaW5xXjDeGt",
  "key23": "3nUZjMvtKbmwnwQ8PShwSBt78Uam1ZGCxYEW8ehe9V2YkcvWgAGyymJQ32oaRajfAL2bmUHLiWaCuJrsN5AJH3UY",
  "key24": "2mRspLYpzfddvTXDmd73jE9gbPojDacNok9KGGJTqjdvWn4CT7mBAfgSvL4u3hGPP2RNccYkw7MUFoA6FTysaLfp",
  "key25": "42XNQFyhbPaXmYu8PS6Pe6pM2LnSZSxAv6WLRkZGTph5PuiEJWjnSwF4PVY9bCttwY7rM3KCSjsVW8jiEVv11ZrP",
  "key26": "4adzR8XmLhhsqfZRw8yDfzEJrWv57CDEtsJxFZifVyJoe7eCcGMKJtJupe4CsW26fKM7LgVJDhJxwNBH6cjseBdR",
  "key27": "2ywamkv65mainn8PJaL5GEeEC7wPKf2Lz1skTf34dvgBc7fRxPrUwFzCr7gfY9ej18Eb6xX9kofEgnXpQ1fj7S3p",
  "key28": "3r7p2zExEU5MDFxhnagjgLgc5JN6GtgUZhsi7P95zACbtsRfC4Zid2PGyqV7QjGJHVgronfTzyrjsGm419JGRgBF",
  "key29": "Yv6gBo47jukxMaqJHXnqdxcDtpuZZc164WbJfAgxt2baLXf6vsK9K2DT6kmQWwfxEjPU12fGEzQqi89xpD8J27R",
  "key30": "2W3gpAZjgBkGWaSdxfzvewVSCVkg9k1fSYAfxtBGcVssMYAF7gAd6KW12uiprNxhEjE3GUhuj2C9wsFHrkyw8sRs",
  "key31": "TyyUXWxfK4dARZ8GBHq4nUV8NizCVN8vx43JrX4KVbequGeVfZiTQ6fkauPQdzRK7vB6MCSJopZvaJPJdgNYLhf",
  "key32": "2eBxdcEzSniSRG5j1RagPMUPajuTQikUKk6HkGdicyy1KDP9Y785AceAZaqv142BsmnWJhUX8v4icvdPWDW2B2Mk",
  "key33": "3WQUurx9iyUCM4mF9hXbS7PDLQoR3ZDHtZv1kJsZfSiwsKMchHW4QHquHeV2W9KtCuqR1KDDHshDkKZBuFmorKXC",
  "key34": "2m8QSGktsmACVbabr8dVdhBeHnnm8PuyNav4UReByUuqa41PRy1TAZJ7DxJsEYZrLmS4scVWcKoPacJHSyqDEP4A",
  "key35": "4e1pRv3GFW7AZYKiiSSn22ZSqyhMjYddZKRf4KdJGDvPEXZinU3j3yiLGRPMtMbE6ewmfDRRwiiERDLYx5ZkLsCn",
  "key36": "5siDpQ5VMN9md1saVTnA1gtzWdGQSuQnKcNTnpDYrGvMgwDG2dHYQBpGxTqszjaVgT4kw5JxDa8WN4gdWnAMXXtr",
  "key37": "2dPitmgnxBAPtpuUT2XV6mkd1Srzxzi91v4hAGQa6nq8a4dHAvW9EgBSdbbbgaJK9wVRsmmGLjEptvscjgXtd7J9",
  "key38": "2h2k44tDey4XXjNdJPTnnDs9r3J17EQdhAhU52nUqucwsBeZNAi5vBUmydvesBF7PtHXEF7hpYUQaLYKnowGqSQH",
  "key39": "54ua2VpbuoCYptvyChvJ7emUM2pYtFhJn1q4Cbvnh7drenJQrir1yEDbZSS9BLby3puuXASwYgjQArmFJAASXpt9",
  "key40": "5txVXZrK9vTCf5gn7jPsgpEt3UDSVx8GQKYphYWn6VGKp4vUWuh3MD6NN4V4XvyERaqPQdatq8aFrbWAkZ6J7hXx",
  "key41": "3bStSDWdUUPzaAqYwRg6JZRhM6pnaFV3CA7at59QWUB5t6kdrU3Wnup9iK72ykAfyp6jr8LoP5KucRosJWbbkxkG",
  "key42": "3KuYzjvEqqHQiqj3tprNZjCGp8ddWi3MhZiveJ38Gw5QDuBtiMXsFJHagZmhhAzc9LGN1pD3NiEgCfx99f5FJEq3",
  "key43": "5y7TQoTcuF3iuWYSBKTRm7k7YfKRxhDT8hBAdiQwNc8KSYHat1dmq9r5Z2Ra7HjRBkwxLPknbCXgPGkHqZ3AwDvV",
  "key44": "44BQtUnsgzY71WS7rTcpu195ZjV6vHEUyg7jVfXT3SNAkXgZ816xtSndAUr42FuJRZir5GLbdQX5qe68r9wLdBjC",
  "key45": "46hf67Jrg6hiZgBCCH1qKj5LutTNwcUHBdoo53ftMGSh9j1URR1Q45GDxriUzRfHxmAAmPEPN9dYZFJeC156B4wN",
  "key46": "ehtFNH8buxJJ2g8Sv2dp31syMdBMNZLQ227oGJM3urGGBtxmonKEm3QjijCQobV2dDJz7UVwmHDHhovDxmn7eQa",
  "key47": "3qnEXh4wSbYMwbQwn5Tc5GDLFqb39isURofjceBAbNL17mLUeN7uN85qpRoZdN84ApvBQpdG3bvJoFiC12YFJuPc",
  "key48": "31wxbSoSbBERLp5J8oHQCbFYVZfHkNe34mXc3nfJakKXq3Dxe2BdLfuQ9Nw7o51pAaV9b3oEPqyq5kYiemmq4cym"
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
