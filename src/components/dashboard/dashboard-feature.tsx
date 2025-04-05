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
    "q8oYJZhPpH31YJ8teGEZHCahgXHh952Eyjcu5G9evguVoqiuzCY81upv4B72HkF3tYj88weECBBdncJXJ8r9aZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2coSyLYPREqU6cFGfKQ9VKTdtJskyeK4tAjfHC6hin3gsW6uS5dqoUoHiPeGr2rKdwNX2XtZ6HyAw3D9djrk42ax",
  "key1": "5PXgR7VdRkZpofUNpsWSRfDzmSbLdDigfDFxfSSY849PK7yAEXk6GTRYGgwjD4HPWCmjrqmEam1q9mKJdR7xvpRk",
  "key2": "3dUsAnqk8eLLraVoC9uCkQnXfzAt54AwxhJrTGtkURzwD9ntuMjMrm9gFV3sDxu8brDwo578jSYG6pLiBb6kn2dz",
  "key3": "65JJVeYuWBZKNbHNv8j6dAL4UasoXjYTjXAaX13T6yssnf92GMMt5GVDGYsGFqj3A4dEVfeLe8ECvrzgadeJ93ej",
  "key4": "52VBCN6QMyzy1ZacvwzzNQejn1218E4QheKfs2hqYrW5PozWNKhMVvJS36oyanSEKpsZ7RmcX28jvSURePR8MSAC",
  "key5": "4KzwXQVnbdjcACqw7iumzjYB6f2xcKaDTcYuj5dggWK7TRY1yYcqUA9X8sFrxQEaPtHMu2gsjx7bjoFxiGtRPtwH",
  "key6": "3KQZXTL14VKhDQUYUnJZA8Xx9XQumZE6B9WpEdqcJ57qERjwb4R4v5vsw86MrcyQnpekW7LMEhETjLJibCCH8Ep1",
  "key7": "AmYTCquh5vPJeUJrrhU9dy4fu7kUNxyqbNAkLawHae4s844BHnf9txyWjVgjoj243u7UreAES9w2iLzBP6PxXZV",
  "key8": "5jmsZeJiyfRrvfiFW26LVLqCKSRGrTQijXaqGQCkhwFSmZUfxA3gz6rQBk9Rf5z99kKADj87LGADY1moSk5CxYzV",
  "key9": "2AGfqFHYPvkXLJzQVUnscdUNWFfvzYuUSnCFfHcS7pgRhFySCJK6t2jYMCi31qYB9S8MGJu1BpKEJGvyYcYnJb1C",
  "key10": "8at6fdusn7v3ynKqt2mxYMqK4eBnQ1z7wxtriGurmUvundSfj4c82GvvCoJHB1UuMxK1ZPeKm9K1XHXYrwbeM1n",
  "key11": "rknFXtWtGk93bfp2DHWw6Wghxn5PrfBxKjex9Vj2gNrMe7ih1Db1f6cmWnRF4rh6LnmnDbusei5M7djZnfjJPak",
  "key12": "RP147n4RsDy3xmYGcH7bb96qYHSd5KprWASUDx86PdExYCgDTWsSro24abE1FmA3FjgJo2vHZevgcuGEeswjQik",
  "key13": "5xup62dfaR5A2Q3ZmSaGLEUuHY1ENErh9C8nnhPpZ8etdPAnV57fzeDXRvjid7KEYSJfzQkjL8wfZz7i7AtsXdiN",
  "key14": "fqmq8Y45SqFmsSBZqcsW9KfHZZmheAcR5Gj9UzywjN2trUvWa4chQktrmq9F7su6SF6PZVFpQ1ErohmQ1LRPU49",
  "key15": "2WTRbFwAwLxDGr6GQNb5LjL4xRKMAMiZTKpvAMG8fofyBqRVd3TwRACmnZywfnUzyQ1bd9VM1po5HDqoX4KbkPBb",
  "key16": "EvNnbV2xDkC728Pwno2q9obPZhnv7md8tieieiS1oFxBHH2mN62CwfuMn3ped1f2bgyMYA1PxBJNQi5pP6QSxL3",
  "key17": "dnrri7KiVa3jDwa8tFSdkGMhdRw34KvQWpT26Sx2TQk9Ps8ip6pFUDhAmAxVg6WT5G3t6hm9WLuVdm9hegZc9AD",
  "key18": "mUFsGKNfVLZMcSH3CzhBRSnCptK1NWgWkUZco8MQ1SttY9y2mZG4hWb7z17MxroxTbaGNqnUf3oSbuAoXjUiukZ",
  "key19": "DJv8nUSods9eWn1vCMn5wv6fHQ415LwD5hXmJYjhXcodrMVHEEDtBkzkWrpCezqPXzhSEJdj8KRmykQ6yLzV8ru",
  "key20": "qohHCQsBoMLtXKFtV4SKoJqY95PMkdFS33puku8XQqpuQywjvpEoJRJHeGjfFAUNLGBW5sX7uwjvH9QpFZXHmkz",
  "key21": "59aWhprpytU8XM8HYSWUYf21M16maEGm8jxSwiJRgKLQXfy1yZHTaJC6ShFrf5n6aG74Q7M87JVgoYtdzkEr7Xo9",
  "key22": "3XDtZFZ8ouWjFeuGykurainZSn3jqZgu1SWefvDbKKPvWjVk2iP6o7yNm7inFAExyioWP74WqdpS9LK8rdbZLGL1",
  "key23": "3o4sjb3aWDYX8TgaYZKXeJE7UJttnbPZkuMHc2PCsmL5RJbEJMQwXJH5LrbAMPp4HPNfi1jtMiy8jPRQbQZZupbg",
  "key24": "5Sz6WQip9cEaYxoqqhFfypXgU8Z2gUNtnUYcX4JFBuHHYpRYXEmgYvKdUfvve9PUF84naFnFpybsivTzgS7vifef",
  "key25": "3k3QFqownsN3XmDopWyTP7RJkguzQgHhDLGgcnguNPahv7h6GHH6ANRpZo67EMGyjhYyT8XfmKNwggjYUDLFjGcX",
  "key26": "oYLxUfNcovdze7R6EfQ1bqMgqAGvddmYKBkwxPj68SbPLBa6oTssAxHZJttBkLkseBcQkXYJnUVJa7anXLdoLEC",
  "key27": "3nMxGsHM6uWUncuJbEvf24bgffM7mYPVm95k6gCNrjbtayEL2oc2WpNKgTKanmwSqE32LG2Cder56i7Y9mfbzU11",
  "key28": "3oo7kXrLz6orDP2CWwmpRsBiwVfbWgYaqcibPsn8FnG75tiyKwMeLUtUQuewJmqPqzNQVHc7uSxWNdhFEp4mrLqB",
  "key29": "2EMPacVUArU6wrNKCckjsubdRiAJtSVkvVNrG32nh6BKufa4sgFw6E8uUJE2bMt5zpBxfh1vgafabtgyTT4AP6zn",
  "key30": "4yhMxgEnUqpuSUoAwkiV3LBy4WUxXq6T3jWuMT3aRcsbAY4GijSrFq3A3uikUdtTJjRhkWWTKgfqenwFWZM55Nme",
  "key31": "2kWtRQrJ1DcfPpXzmPJtdSpJxhfCKfvMLE4DcsqbWruJVbEkEx1pJ7HAAuyrmWsAPRLwDPDyaz9Mr3MLr9bo6b6L",
  "key32": "4bv7Lq77JeqrNSTXECEnAwSjkwJDqHTQ3S7bWokqKkJDWQs5kAFL3kS5YyxzeAKwG1NqLRCDxT2dqdGSrBn3gkyS",
  "key33": "33uK972948nDiMhDXAkBjw7HmRCqRU3BSAtss4SggZYZjJ62XjGqQAuxXcPJrAHcosmgAcr8tvRJmqMn6Kj8MbXC",
  "key34": "48WYHJK8rvomnTV57epcHNSFo6L5L5Bc1UWtaKwBUYTujhKKpakSnPLVU8uUwHBN4kn5yFAVQf1s5un7n93ivdv",
  "key35": "65FSLKFCidxL5wK16wuKnuE3jGjhsuHEUYncgKzBDuMZN6E37fQhsnTeDNncNg1tF92GcWCuEHLreiyHGxJRErbw"
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
