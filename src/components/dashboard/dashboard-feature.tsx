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
    "4gh5YWQpLGLfWQtHtndRmH5haymPzEyab1upoSmbqHS84hLjdda6oSeTTYYxG1GgoTiGWj8A7GxN11m3SQxZdCpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34TWzMJuHrJMpxJmxg3PgmFSaFpJiuGgjurQ1vk1FcvpEhD4EMVMw3ab7qBFiqN5evKRznc5PTcQ6s6GBqyi9AyG",
  "key1": "2pKRBykPR4bVWJCQThDSNyTfQeqqiXEsD3M57oLETc7QE9My2ficuLrDEBShhqDFrhRWL5kg2Fu1C2ev5Bnh4ed2",
  "key2": "4hEKwRJWt7TYA4zzhqKhX17D6jXhK6t7J5CsN7ncU3wtNbtYJ3eAYmq7gXA8A6rxWudaW1mXfwkcMeENQ95C3iet",
  "key3": "3nG53BHgFQNLMiTS1sEdiVTxeW7qf81EcWC9TuxHRuphXHUdJQnkmHgAQ89FguhrmY8kecjS3UYDMuetqr6iScQE",
  "key4": "4nR7XRBbH6J7qdmqnBgHeq7BAgtftEW73wsXVbsGDijN95ZpsCJpPioBov4ycfzdfC5GdxHwGniED6wYXXop4awA",
  "key5": "2wZXhWDz8b82q1nAdSuBsxE513CJ1jqLqeyfkMCBsa73c6CMpym6m6y6GPNFgCkqZ8vL5vqRZfZ7tg2EWwGkgJ5i",
  "key6": "j6nLxo8xTVjnUdE6JoUGM2ogDG5kXJUnS8HNLqD6tgR91DVSBLvewYtDhYKTni9Y7pqNhGH6XsnWoztVCD45vu7",
  "key7": "nY77jDimYnXcxneWGb9bjj4F2Q4iGsjaseGzJ2KpAf65Z8aquR3b66r5vvjybDGSFmLKy6NL7HbLcskk3Zzd8d2",
  "key8": "YUbKAZiSzWe6yptMQDcvuLd7uudUYxiuMP1rdyQEzr2APgMKyFP71mguPT8SR2dsPQDEyHeiB1KeGn6iddBkZ6b",
  "key9": "4Bpm7RQ4DDYpT6ivuqMANHrMETHsRpF2Kmaib5WheFzPkFoJzUBfkoftqTNe8UiFZkhdHuu9G9Gi41eqHY8fUQes",
  "key10": "5JGFBWJx6r3qwfmmsgxoLrcrwdMd2qWnk9P7Ji3upEWQ54SZhmoRPzKvNRLuRqpXiTXte5DkRonoXCnYiprB2c2f",
  "key11": "35MEFzEnw5BBBubMrkwq1aZYkjSNpWixaPQ8KyCrLevHkM6EPXXQL2zLFYxsU9N2XtPVv7AogNLcU3bsS5kNyhdP",
  "key12": "3Hhucf1RTRJkZXY2rkRWSdVTofXqR2LBpSvxfC93cf6MbrQKZf768WqfnXkCmC5Lk4QEgqVTZuAPuN5sKSD85tKh",
  "key13": "sJph2gfBfhWUoFiavBAvDBgzSLYH7CJBMPAJ4dJoKvf9wGyYvXC1eLW66nKdd9MJRudSAaRKDw3hp4kiTJGzzu6",
  "key14": "4R15f1ZpkyaoSwTiEa94tQt9reJoSVSvvmExbgh61VTwSuRN3bNjiXkDw3TUHeF83mQNazcRtWKAoKdZqfFBo2Sb",
  "key15": "g6K8JY8PCtWEHZacwjws8EzHJSvgi6yRoPnrenN9HHvHJJkGZt6t5SG9YcfEqiVF5hssYUh5f6AKnSAcZkfGQsF",
  "key16": "4DojsyG6KUoG4N3zaSVXK1ULdd3JqjigChxnao9vQyAtYFRZakvmuN1P6v3bLeRWWqWJW9SPLADsMxXdRViu2wyd",
  "key17": "tPN8ui1y1pY5W8kvhzeDEvnEx5noAYTsfJtTfDRTrSUvbvKVckUdnfRnwxfZ3ze4w8eR8z3Z8LnwuMzoxtsCQSY",
  "key18": "3LmPpfWFv6Qz9SgJ3WbDqYTLv1yhjHYuUbtpdkRb4S2QtvRpYqo8W3RBBkiEVH96Gv9TvAK9w1VcqcLDeDspZcZc",
  "key19": "3nCG5FUrvjtwznGkp6QQMM6QoGWg2a6MY5ig6RuqQRyUQeFSePJ5VUZmBMWJLEAqVxoYQdNvKS4vnxRxb4XBfDm8",
  "key20": "2nLoL6x7T5XeqWjpDxWURKynK6noUxV2w4ss22mXYZc8wSreTfbcE7a8fUamUcz4Vc4PkLFvtZrnwGAfA31pLSoB",
  "key21": "3SgBbgzsNja8B88Dg1JUz6rJ93wWiH2K5YaHKo6aburJ9Ae7LsKeKJ8hzNQButyJ3xfU3SNYTT76aKfN2StzJTf7",
  "key22": "5YJVBheLLzZyv5aAcfWaeykheQRaj5GKMCaX6bvT2jBpB2wAa8gJxcesfSRww7euGcXbirPafD3NTBRcuHhfvcCh",
  "key23": "3oEsiZu7hxcfgZUNPgd7EdFaPtGeuf4kUb1VggsRBCQ2v5TtHSmLVcjxrs47gPsyvxVWwz6zk3GGPCXKqLsjMWL7",
  "key24": "3TCFvakHFJgP9Ru4WHemn1Gu27ZE1mvpnKzuSiv4wLMnya7FnfjPCQ9dQwrNGURyPEPnLZe6HCZSqxp3TAM8PuZN",
  "key25": "3EmW5V6jhqfceM5a2qmzzqyz3EZrH2BgwQTxYfmYaJANBjPVxsuqo9sR4mGwm1eYdBUiJyXKQRoWLGpJczrPvTwv",
  "key26": "4FcxJArFHa4qmGmKYobvqBAceT7td7Y42JhBQZYP2sByNdJBrdLGhBueBBpGAHSBLi86NpJ1gy7uhRnEDwXXufMh",
  "key27": "5ekTyQCXkBbdyxQ36PZe8Dx3PQT1gCYrhiQuCVErVgXGui7dQidMwfbinqRkYkUmmLsnf6c9KnrQqUaFD3mvkUoC",
  "key28": "2X94NM7mQQJ8jEvfGjMmUUrcJmW5wH6RLCaWam7XoJU8JijNqdh9VB29LgxCcjB4EXruB6YevjSBs7hGLhUnpG3x",
  "key29": "4Fd9HG6Ge73oTf6Hky957e5r8chMQZemDht1Yb8wrL77UCi7SAdewHX9Zsy7s5DDVANG4yrqvaB82hzaK2SQGdJ8",
  "key30": "48vm5Ujg2BQ7fW6YHvbZFZejP3pXuiJ4X3T4Y2f5DQxaeZG2NHj7bgtb2rZR55g687q6PeyhbJtZpkReeVmAEjgC",
  "key31": "gnK7gXRQQD4BGmLhkFqPxKqSz3X8E6ZhpjztSJQbe7AxZGjWMAobJByg3yjTe4CEw92cqSo8pHpQzcwmbmEiFjo",
  "key32": "3PuUTADw5Lqmru4QPrd8M4voSSm8u17sa19yvVALDML6ir1DpehoQFCZyZTcye2boHbRJbuYBPmiF9hzY88pg2ER",
  "key33": "kUDcVNMTd63xPQwCsbcTH6Ti637GsXr6TmF89tb2rLmmxEtNqXCHNJxKv7DeXF2jNt1VqMnRhfDYuY5YBAYLP3Y",
  "key34": "2CZJYpeL32XXNBJnpkjUaAmPdv7cXAwdAqJ93ADUEcwbVg3YnTJx2qncWtkf8S9EuH3Q73cTY4ACHM6SJENR3Q6Q",
  "key35": "28kjpwM4p75qs2QRLT8x1AZpwLVjmu6ixp6vFMsekP3RUEPbWgnHdnAZWMYRXcqwUiDNpMo6tF3kH7VJbF1e5TnC",
  "key36": "3eUQjxHxxMQf7Wq2YiTJVpy9jqGavX2niVLm9umkHkbfMrX5aWf32RWQZLgvXim1ehunVtbK2rdpWuS8pCTKTbSx",
  "key37": "2oZGVZ7rxamWdgdmRM489XMAHVt2TwY2AcrAPVQmUZW8zyZ3cZHmPyQfezde7Th9z8UA81Nj7aKAWjfkuM9YA3ps",
  "key38": "v6zR9TrGMtEDAvS9AGNTaBuvmLXCkzsPYAtnnSbdQ7vhyUcvFpPHy93WTYMLXVkobJdSCj8AVo96wfAUwgZwwEc"
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
