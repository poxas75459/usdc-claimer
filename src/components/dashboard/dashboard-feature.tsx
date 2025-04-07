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
    "CctstuzUocuRZGVHij4U3bPeHZgTgB1skZXup147C4tegC1uFqN7puhSVzVzgsiSSSwS5PSeJg3bbCv3FSapzXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Z998LX88ToEWz2GxdPsYdxhF7rYcwQsaz1Ju2eUSKhgq4BsrLeR7cUkZcLQb1ZEsUvNQ2EVrAZTRQb1cNCCtNQ",
  "key1": "3teQdU4h1k67DPQqwUwjkJ8TTv3G7QqHWHSufMGmf3Ar36g2bA8PdaHy6NBes53gjft1hYjWp9zpNS53L3UDa5QV",
  "key2": "2h1KYwYmTYFuZHiD3pwC1AremHacwLq33uPgook3iZii6brGMVT8GWLMauhnDt3Ctsh5JzQQ3GQPd9C2VLuiWY9L",
  "key3": "2T48dPxWUkHHNtMasc4HkooHw3bUgWhgK2Jc4ZryHZzRecNL9pH11ABQfJxRNEQ1kV2FhHUYjFrMfjnFVHZYFb9Y",
  "key4": "4Dqq6XvsWqHrqRLRjdWLtyNUiiMrtakvfEwPQQKhRtUszadceiHsaqwbXJtLhkUuPxUgWdUmTRDpZDYhhiQYXBda",
  "key5": "325x7MjFozTCFu3zXKDzhDQhK25k72H1Nj7aZfVqwUxJmmE6W73xhpKfbrHkYfqqJx6tMkphhypF786rcurm1mj7",
  "key6": "xcA7C5PSvbuEBBmWMaJPEUwsKtbXFofQ9kU3sdY5mENuhqUrYYJwMvXCcQjwMfAswNptih1gzVBXPyzzF99QCkD",
  "key7": "ypdPRyaACrQ9SfimotjapUxfvxHvo96nuZASHbRveBHutf2x25NEpLUfrwfXkYjxmdonPknppPdoYmnbqa6jYJc",
  "key8": "4EnfdnREAfVuTi2jZf13Vj4H6rexYNjiZDGJ9uwoRfmU9Wi5QnTi4yGw43xha6pRFcj29k3bTi5KaP7d5aHgQ1eq",
  "key9": "5BBAFgNBn9rk9XW1kcywLi955sBNcYPfAmirV5s1XemUvMyp6ZCcTHLR8Q16vK8bgY72WK7JrtJP5uUDRFRYnfvr",
  "key10": "4yDzsdngvd2Dbrqt9u1Q2XtKp8dgH3GUvW8MoXxiDd8PX7vqctjSamSPfhdsAgQrMqYSQi6KDJrSkyAjAmFbAHoL",
  "key11": "3mvArGzCJbbLkRpJoTfcDLhxkZepKgCdL3etbRz9jEdNV9sGR8GGC32v3HZEBhwCMb5sdmAvBZnU7Qb7qdEazNLY",
  "key12": "4Bmo1by1g4nLdJBmaEeKBtRyBvcWyXHCFtR68BArTKepeDKyqtuvidWwAr9DMhoV7onB3n5v4YcSXxxeXkeBpNG9",
  "key13": "Wd7LJ51f59rUYkipyrWVok7RjnzLqH7kygxqTQ4v9FXSmaoJD2oY7tJn6MAst4qY56MWUk1rVvV1vG3rAqR9k4A",
  "key14": "5tQKaCEyaAZSauq4gHGio7dSYhXEXqYddPGudWDWpMnURBYkcgnCP4Lv1J4YtouWqYhpGHLQYSYhHdvsrZiEdmk5",
  "key15": "5SqYK56bkWmWNYWL9Da9cqz9i3H3TdJnVsfYRpuzTCuYb4L32pzwYNhwLf8LjZUrDTHRsVs93kVGyDmoE6Yw2Zor",
  "key16": "3iighErMQyoycKk1PkDTQtm8UhveMtqNuVnvQvXpXZXzij4uZDaNj7A7d5V56MmvHkCpSb2KxqsxC5Uh4gqNxrU9",
  "key17": "3LBERcbDrffCNDZBFPDAJKH2DBiXc8GTffiRK7BajLNcRzMs8UnpWbVpx6WZoB55CngSiYFYyPDXmG4rnAQYMwwY",
  "key18": "5Uz7a2JLBf7Gy5srSU8CW4Us7aiR7SaUqEgVGg61CbinCCZpEhPsUKtbdfRohMh1RowKY9MLsJeSaNGzwCy2KcUZ",
  "key19": "4hEMtBjUo36TJEYeRR6pQwX7hMKZciUnvVBDEqjwPYpFqcmhAwmC27m1FrkiECrKeZQHhBX1hifL4gXZQ161fftM",
  "key20": "59URLUtJCknmBte5BjNt7tuPajDxhQXLVemmpTrE5aGRxAripEWSxX6ivUPfnvWGShHiay2GkVNryHL1LTCNKiT1",
  "key21": "rhjya7ZM7PQEZXZyime3gA7pwKBC5Bdxo4NnDoyJc1dqBvxjrbcGRAtzgVK38bhFhZohpQxPjDiRvEhj9yWDCjX",
  "key22": "2MECbCoJyE3Ni31Zwxaeop3PTMouXzLpdArQXtxV1FhXd5DgVMZxk9RQAvpEcTUoovyUqLDJw4P3rngxShBTyK9h",
  "key23": "4WNxjGgCSDTjPfXeYrptzsTMnvGWJAqe3yqgM1vuyxT12ttcRyW9q4ne1QkkABHsyhLKTo4pRVUEodrV4QxfNENa",
  "key24": "33Vd5VFAZXUGoAXUPXpmJeDwqmTcBXTUu647Cek9obXDagAU8b22JiVTqU2i6ZNRpCFSqJcGVTZGLpDFvfJT5HZ8",
  "key25": "2Vy1HFSrDqNTwQBFQRBwFFFikwZmhzQQgWScJExqRcjBZc7s5rXFwmzu63PPP7ygYaZJGzJa659ejjMz6yoeZXPA",
  "key26": "4owXQ1Rvtf5wsfack3FnNZDUXzGeb6qBNyUWrvbZ7NAoNvfhyFrricMWpkJaaWy7WwXogrEiG9WPd8j6es76pHiK",
  "key27": "y1fbbodXhSav17DfNrN94HYkF7C813FjTeNQTM4yGgzF1QwB1dkUCmUprxtWwt7WSSXA48EbwvbyrRziV6uEysb",
  "key28": "3YvubQnLcuhoDfLwadfbMSpDPyNNJGyQZGrchdyUBqJqLqyqKaKZo5o5rDjUBMy3ByT84oMjbW3C5QnyeELGjx2T",
  "key29": "4vD9NcqWCyRozPFkWuphbM24QFRxNkwmxjLfy79a41drKHAHyh3wBh2SYSUL4kP6VDPgGG1GNtwHMcTZ6uDrA82K",
  "key30": "3EJU8AbKKvUzRi55ppMMrMVxeYhxMyUpopypfdsmVDnaMsZjJ1TFvarDzMaxt3WKgSkzcpJH8pNsKDC9CFCfMiAY",
  "key31": "3c7cMvpKgAMNyotmCrW2ftHjKmqZ3nRNq6g25s4FAobubiXjWkB5oVqjKMxgkLRjiVWUotpLJHpiVAi4pZytRygf",
  "key32": "4NcQy1Q5WXUiGWLXSM1DJ3YqdzeivZC5X8gjeMkFUddwkrSGnhhZX9NtgDsFxXHxGnGUFuKbCfiiovA8S8UineNa",
  "key33": "396vxqux4oKDCt9FeF1NUvwfpkqBw8ugYwMFUXT7tcgeLAHVxBGhMithh2CysnfzkQR9ttHRvkw6vmoFxRxCr1jJ",
  "key34": "2x2zqKKhVr31H3nkiqCX4yvnwb6y6eht6KGw8WGCm5hka5YmUPxJzXJ1vHqHKSYRzci9xK4aK6u6CsLy66D2W9b",
  "key35": "3fkVKz9L6Gy3UyHnqLXugwBDRsqFfAHWAVy3c7WDHFSbBmbQfdZrqPQ63c5eHmUHqVajNxxDiBPESrC9dFbcveVX",
  "key36": "5UiR6VsuBjPJv4TgiufPepvUSMU14fTD7f5gj2QYL7NvFZgseh3ZqxWonc4uFQn99dxGkPpwttiheVvWRrGnTwfU",
  "key37": "2RBKQkVyL4ZkQquUp4YH9W5tL1cPvwPeUvvxpWuguoELMN1v8pLLuXJdBpGLoiR5gNsRh35EFLxgpR5U5VpGdndS",
  "key38": "4i4FUr81By9NrLWaxKs7SXQWHRBxrznD7XHLdcC412DXMHTAMuRjR6tKRCZnRSJ83Co269p8aANVi7LfGQXDzQUg",
  "key39": "fqxSq52oGhmsRbyxkVHPQ4hQ43moJJgUBAWBGgZjhEHWTm2STQbztfr4cudGx3bY33HH7qVoduAu2ZMFxwNSynG",
  "key40": "3pRp3zVY7nptE5Ltk3jt2Dr62P8zRYygMnWuvWyWEvEkFnKSYaaVn3qB8phM2MiGbCEG54YhN4j94tRgxyFJwewF",
  "key41": "5z1BVkZ2jRuRpUWrLhuhJLR2maDjxMkJvLwGvZmUEqPq4qJHjmUEovAcQvRm4MbFJj3wxNAvVbXohURW3gEaqAUV",
  "key42": "67cPPHZWqRXHMbu7hW3HPmVx7Mrd5qkb6jzALDJR7ita4t9VbdVJC11YsAidEb7w2B33T2XQx6kk1hK6SKctsnh7",
  "key43": "DEtETJRGhtJBawsSqvm9Rmpow1zkbwRW1v8rEoYrLWCaHSNJydPvGVAEvZfaGj2vA812ksXMKRcyRqMnMjtCuzq",
  "key44": "42LBHHZq3ftg7Pm1cjAhVLLkgfDhMNQeXkQTAS6SYZMG77ierwyN7btnyAYdS3mY21sg52tLf9nqahu2yGZ45pz4",
  "key45": "2MriJsyjqzsqCxAVRYLo6Mk8daKk489BQA8kcR9va4Lx2Dzuzr4h7GBEmWCtuoa3spPeyU2ZF5BCmsHhsyBk1vXP",
  "key46": "2yFVrKj7zdt4xL1UGLGfHdWACFrAcGUjH4fVXbduYHLT9sZ2HBYHHKDi48HR9hcfoaxGzta7eTmWH57vbRjwUpYa"
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
