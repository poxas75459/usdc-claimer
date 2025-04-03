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
    "55N9wS36GbhXe8bddoFYePXdHgNjPST1KtcrYKtEX26AKoJxNaMSyacr35pxrjZCwNmdxXUVETWaXBPCqPyz1nA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43T6xWHcwzvRvctQMpFWxFtZeYq636CsMkD35mz9JGkcNZpGYFudDXtSdcGipRscBZXG2nYG5EigN2p21KhieRwP",
  "key1": "5RuY7Zm2g9EPtvC8kN1b1yUrDyeAye5EgpspAqsE6PEo57fiqBwdZ4n8WoTpGhy4bdMw98hThs97Q8f5sAMpdDfq",
  "key2": "4emMHE3Vpo6UKDMdfmH2RXUdWgMDP6ogVRFonawEcvWmYhe2zysg4qyBjh2DR6DSUMPvubBjU9GPhfjhdJHWhqvK",
  "key3": "4ByUaXqG3ntDd4ezkYeDRPwEzcucXa66pAJAMNDL4r1LfafEGLCPpaupDQn1jnyF75WQVVdsnE9XxfXWd9BMGYeJ",
  "key4": "629JbwtbdbvQ3BZpboz6pvE6sNdpQUxxboQY5odenpTC413nKUd7nR45BqnQbawvub9QqPvM4x5L8mWbU9Gs8gUP",
  "key5": "54APTfV9iPooZpRZvoT5bKm7hhssqJDgJbLjpX6rGYSgyYndsWfiNQYCKZceip8VavLEhE3rMpr5Uk85um6AzLYE",
  "key6": "58J3weDSmnbTTGqVhnSskenADe9rKVBpnpJy9tDmEbcdwHUbS6KTRTSwK8jPMtqf3pzcjBNZNCG4fK7w4P4m8Gg7",
  "key7": "4XQNmEQRETGT25sWQSuqYpu8DnKwQWVEeveWFohUzxGrG9ibbc1kFeo8yVknJfRhb9eCHvp33H5TS5wJxUvDT7UY",
  "key8": "3AtbvHyzK5Px7bxUnyea7yPpRUov6JgJd7vPEQHudxmWm9iRcuJK6ehWgu7s2TWzxaVxgJ53MAKWvjRb9VSs31uu",
  "key9": "5k9Vi6QAno1SNN12SPxiyZwEfqzQQFntAB5E951t43XHQDr7bPiXS6tHVRLevBrvTFe9r8Yux9Azxed7WK93hP9",
  "key10": "51iZGxwC4JULt3cH8xTuwuGLmYXCfPhdeYN8hUgdEkQXTB3Q1LakB2jcaqwQj9NveHo6PZCVoQ67cf9rjbhKTCU8",
  "key11": "2nz3zK1jdgaHZsJBfCVT5w6J7UYosJjNwndvfSojiQEizGgxJL3Z8ugnFkvGsNCpWePncZ7qiUT26SUrwn2PqbeQ",
  "key12": "3kkKvRUrDzHkmFo3vddaESPcbFZHNHp963uS5g4RcifCEQfcmtFbHHeLtCS9mHnzWXXcbEhWRU4zi3hkr34pQoSm",
  "key13": "2uoSkj4tqSPmtkWhvCYZj3H2CUB9whzQRcYLaCdA3ie7v3oDihuP42MZwDm8FvzJzrcNZhX2Rd6vSKE2aqQvu1yR",
  "key14": "27QEPuhCoaH32i3eAr6xD6Am7kda4AtoEHd1AyGv6EDSrgDRxbyyG7bGqi6vLjgeP6hKqwKEAdhyJKQWC5qNbgod",
  "key15": "3Sj7eRfWT2fWsa8CiBAm76mUYBuMXGWouKAGYNk2qMXWdjfLmEpkeXoQn4cA51Rw2N3rbVpTefyVPsxnwQ2bc7V6",
  "key16": "4K31NzxQjs6N7Lwctgg414BJFmNiNFoeedJT6CXvYPQZERSYRnQxUXd79FkH86btD3pdsvQEFqpCfsLB6DsVGFKx",
  "key17": "4uxKdecjyXJjzTjGsnxVHUkANYF7Pz3AGXpPZXvokggyvLAS7wwh2mF9gfpaNGi2oKNwEUq44CGvbokSyNzWJNQC",
  "key18": "fTS6DZ4uJvSZ12t9QG6pQqmpnRsoAfU52D5jsp6FiXHmYfWBuqS9basKrMsayKgSqMvNyPRPKGgsLXcJFnwThtr",
  "key19": "QQKBZgeZUtrgkRBsB9oc2u5vvy7AEqPg3x4tdswTtDLHijesuM4xXiUY5wqqfJLcX6VLXm8PLrHFGcd6qjEbZUA",
  "key20": "5SaMyVghezrXVtuAs5nenHMyEy5q69Sw4TVo8ky1ETTM5m4r1GHhEmqF5Tj4oiRLKBEHMg852v14Ry9PDuFZnrLb",
  "key21": "5WMBAb5JsciBLaNGRqDneCTzH5PsPpbcLoAcQWZf8qbbzUQ73r32ALhjkwY7QyKTPx9L6WtGWhdwFih5oEodQ6X9",
  "key22": "4arto4AcuzLANRCBkSdGLnqAiYVbtkaW71ruBNxo3Eo9xLxzTyuE9bAQzgPaGVtWXqGGLc3D6czECVj5sKPBLg12",
  "key23": "3HJAXy3UUaR3SaYZArdqJyJbM1r1uUHJnqZo7BW9J5NXpsMHDGEdr3zNzaFZ4RSCzCeDHRkcXUj5qQwYyShfp9nC",
  "key24": "3MXvFU5gQB1bNJhcoyc3b9PpjygPNXgPLNJcW5LrfTXe4FJq5xWu8G2uupDuomJWhbkfhwpAvBSNxoDMYUGFtmfd",
  "key25": "2adoqpNP7Tb44tLygzMqVpxBadK6vVu8WAV2TxiZWyQ8L5F5CznBFrgMgYqmVhCnxx95uWGDwAqrUG7wVyE5i6Ts",
  "key26": "2g928jEyoYzRUPGSwjPwEfSt5X1R53ybM5DKzqmTpArgN1uETCQxfHyaWbPvTw9mKUzapMJES6vY3BTikeD3Z9QD",
  "key27": "3b5AgvcsmPKXMf1TBqCsXBuQXmvQ2vxo7jGKxMU49sUEqZyXNu23JzC89eV3SdeyfNZVnvggYFRcpnsAAkG5o93v",
  "key28": "4KxDUjoeNMpvZQJvHtdGg2ad2dEvtgwy1wniXg4D8PaMErTetd33cdjx5CkeibxB94jscBCeUtx6Lw1JVSExMNqU",
  "key29": "3YoSRd9siKaEp3YP4dZU1wRcP8zMBG3m9etxx53Pjs9ghpF889QyGh9xD2L4cyX5BXtcXVNuqPreq8fRjmRKmUSt",
  "key30": "2CE34oCJ9rMdQ4xZCogBBxLvpwqbNVYmNmB3FbWVBguyxX86WSGr5SQBsjvJoAY5n77rsi7LpP7JZLsMniuNwg5u",
  "key31": "2KfHejFBEG6N4GEktpKMvV24aBqSppZoDLvDKzfaUZueh6qaEJKzZ2A1nJbwNnaew6L3QvS79ZBbMfW97dauLMwM",
  "key32": "43rdBo71XYKyxWgsEfqn1CrHUvxMknzWFkgq36MHynmiboeR73sxp6pm41kbYKXeVU2Y2fQSSo2Yk6Ukw95bkZCS",
  "key33": "43RdZaWdfokkXyj8q55FagmYtTAzg5spMDbBgKsLoe3AoBGq7n4GsfmX5saa3xYcKmjGbSuNnKRKQtYb9QCoD2T",
  "key34": "5mipEoQf9Rbt4p6mJEvS28DpHaz4mCBDnHboTj8af4JYDPWW7PAFUFaqD5we9u9C3ewgrZ4iEDdwZoUX3jGzgun6",
  "key35": "3JbYpafQY5CcWd8HMLy6Bgbf8bi1YBU3BAtAoqPQPMm5Sgd3UDePpWjwxCHdCSSWQREPgsxpSTxkVF7igQuiPmRQ",
  "key36": "4KcVPHTbBcTQRVi4XeRtQzZdZKk2KZqLtdVdgC8WYsZjUMmyegJMToDw9MPt7YsZDejJCax84LCvem1xSXcgMwZ1",
  "key37": "2BQgwjhK8Z2QPPqWauqrubdxXq9hhqVLJQyY1oQRWkw44TQr5tNMunqoQ2rZf9jp4UKSmnAfsWHgrVTyowoE4C9",
  "key38": "4JaaRdviTNywpGCGtGr6Z6JcgkRe855t9N5VoR18UYpKz22guLyXyqUEbLM76xCLq8YBJecmrWvhT9HfGy4EgR6C",
  "key39": "3wY9wGCpBJXe2EgFNT431C4crZpbBrincWVKyHoiPynjsdbRGWAnYsWPEe3pWWqitEqUJEZzcL7dgWFxzSq8VZF5",
  "key40": "5fivsAKPt1bystNa8gmi3JCbLdUDuuFsq4E3SehriaBnVDNJRv7cD8WX3cyRS78LjaQ5tb7tseVAFh9u7L6djgyE"
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
