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
    "5tM9ydsahpUWrj6Ti2NRjjzFmEsveDwC55yiWJcnBbDqpuXrQHFbh6ZmmdZKQjFT1Ym7si5wirqprAm4btTj7d7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dzkkBRS4fp9dDqdckPiz4S8uKfe8XAiMYbNdEUbQbzyt8wpTrzxsa5AZr5cTNbHBw8rweJgrDXnMxt4e7kmirVn",
  "key1": "3PEEYM2qZS7SsYrc5CNoL7nJ6FhM5df5YhjB1gecRcdYJ4VrC3Fpe7esTAHPGZMfkmzdMcPM9eYcZSZNRo3erymS",
  "key2": "2y7bVrbii7FSXUY6t9TxE5o8DRY4iRaaxjqSgDbfsPFZ655KbnU6uXqWfwd6LnRboukhdM9exxduRrB2uNhg1bS3",
  "key3": "2PGfwYjys8zeVHWkxrh6BkaNKhPmBUdqccQrZt6V21RT2dneJiHokYfRY2SpQWp5ANw1teXj7FWnpzUKoNupP5YP",
  "key4": "ubotG1sDwV5RsVPM5hUFU6gHnW4WLeG6rjdx1vNsGzhzcDQ3LgS8BBFv9yrwP4ke3G4FCUMNSTbz3cDp3XiCzce",
  "key5": "3ufhjjMVDbncRR6sCWoFWX1wyPT4h5RhVbSM3otNZgujvcQhrenMLznaWKgqfe4RTbWsJvMLK3DzHVPmyXxwW7xX",
  "key6": "29tpc7vNdEE7Cx4iCqB3XnkYgNFWiHofCyGz3MzYMbREpWztXK3ubFWbdv52inDgY4JmgB3fjAKXVdgHcL7iH5ka",
  "key7": "4QuSYcHDx2FVHTxw6RZwEbc83t6ZnLvW53zGJt9T6N4tCwMbLq3rVPJVmQHi4wFuBoBeR8Gk21CBJhzNYVJoHMYv",
  "key8": "553qQjXHygyhEeQ8hbUV5XnBLAmNAaTmiQ1BeYnb43bJXbBjzcELrTVmuDWn7n2vymaDqEmymmSq4oJbzszBmALq",
  "key9": "Sj5Ah5Qc7pVNofibfYhaGXS5nbbeZ51LbRZDKcjnAnpyzrHFwGhughLVNEHeY4KkyRN8EG5qVqLxn2FR377LLqX",
  "key10": "4VwMQLYC1bd84fqPgdxWat2xVKEYaprdJnwNVAPodovT5ZphcZwT1gfTvq7m8fWzM1jEpm9f4Rds6Th1HqjkRa6u",
  "key11": "5FJxEcp1SkysCtiVgcudLUgz3sgwJJ5r43p5UoTWHHiDLpqNLaSk2VrMzCu9kFNG3syWJAMiKSwUBC8iyToGjsPr",
  "key12": "CaG2ev2Lc4iZg6BDXfhjU54agX2NJ5wwrK9kjtyZ3YsFCrAfuodz6Mere7kSJ1EVmWXZqxGUBrAUBuwpi9QxNor",
  "key13": "D8pPWj3aMsApi4mPH9qSAUzXVgCoJp8yooR12LYqwqzGyxQawYw9u5rotc72dmxvamrz9HroxfLS2BrEWPjKVmX",
  "key14": "2EYbQgqLVXWxbWBYrRXAHavZaw1eXUMcMhebnGqPJtZToL5GvPLuUezunNH1UcdhEwd5QZtLzHgg9MtTm35ZKzVH",
  "key15": "4SkzGpyL6qNgQwXjJoJf79R5ms8tGgXf6mCMhx93SFkVC2PYJaDrLbqagwhvLRqrTEfSMeKWt4jv38uYh185jwLy",
  "key16": "4DY7SNVJYMtBRCh91djh5A3drF3AaTAvfXWS28KGCdJNYzZsJ1naswAzrk9CMfhP4J9xq1VZXXYQn4UUihzqgfS5",
  "key17": "5NScfKnw42ZKRanZW6mbFnUxA1u7rn2rXcvdRsFHuDGjSy5vkFvkbVmBWmLX9uszubzpVYxBhHMLRxzKwTJMNAZF",
  "key18": "2vrMsWpXv5chWeMPHzV2Li7BuwS3oqKxuCBesa8pJxFojEdWQXUBjuKda8mKaHR9mrc8m19Fyp11ai4Zny86FnyZ",
  "key19": "2UPEd5Vay25ifQqK4vU4uiVfExH52Kc9uNm7gd4d2jBRg5GL4tx8ZiyqReL8gYuCKax45sPnh2YRYWquDtj6sq6U",
  "key20": "3uSkSRbAMzCjSJk52TTSwT8sSgCW4uLP1UCBAGgvQLPFrL27cT2CmiAMC2mPxuBjP99t2rrnFPPYCktQ52kPE43f",
  "key21": "24jLz1fC63v48FXT9eVwzj8NpAgQRCaWQ38FcC3s9VKDbG9qXuhyoJZHXqFJ6YC48iNBFHqxLAq6ZREPa1ncm5tT",
  "key22": "mxd5RGLWs5eqZJu9dCA2gTs3hwZ5SqqnRQvEHTNVm68BcgZmFzKMTLg3q2JdhjhggNzY9rCNRt9gs8DTYpPjiH7",
  "key23": "3M4Zoq8VbzhnqDA5mrETqNvaw6YtKYoKEqJzVzAZacwyLi5PCAsSRXuPM3LajjmPAh7RjB4GMMVEV1Np7gUwR21x",
  "key24": "xLuY7aDxVERpLxmAw7FTDAabakhbj9ndbcqCksv4Pga4po9FNNU1JBoogQuBpPLviMKKVKscdtsy8Y9FMdvhpeT",
  "key25": "4g1wMMNUkmJWm4rB31JQHNtMs6vaDKRTEcGkVQSCzymyWmEMEVK1NVxTmfzmVyu4awsPTEzomRGWejtgaM9tXQYz",
  "key26": "524qVCDpDKR6VgAUrnabmar2wjbtbR348iyKPTvi4ErNcyE5RbRuPPzWyz3eF6PMyfFWgFJQ2unh6UQuXogx6fjd",
  "key27": "3yPaANKLrozR1AUbCjEMWiZQDoiVnQwmirsosvt6dcxCH1od5ntQJDoaPHj3eKn4TybkC5xPpX9HuqbpyMSrJnw4",
  "key28": "2s4ZFc1Kiuupm98B36NFscUqp4YjUv1Mfpo6LrAWEeqnES2sMEpDJSnCZd5NPkpDpwJ2MFx4g6CTNCGPw7rJxrqB",
  "key29": "5BwmxQ6NM9D6occCMCkCF6gCo1cR7hkcHWaSHu6ksJFLeuw9BbhJkWXTjicfmCm7ZH7u4fQn61cGtHLa1PDkmsNr",
  "key30": "551dZGcBcTCC4z1We5KQHMsGfuixngHMrsRQvSnybpKZoohisfDQCJUsjbckKgWK55BRsqnCgb3iS7qmTwsPFabU",
  "key31": "32AxxmRNxuVCGQMwurZjo7aK7oTWWNPWGNxNgmV5HZuPibmTwECGg5fjskXAs5QaiaxAx9jxoXiciRBTp4LyagVM",
  "key32": "2MU86ztpYeb1e4AxpgAx4gqXa46JCymWWTawuthUgE7yC4rPzdLDqGE1S1hRUVtbApfWTC5gP2vr4QNGgxnD3yRw",
  "key33": "3GLwiy8SrbSygdzKAvQfBzSnAQstBFFoKLxkaWg3kP15oXyzvWUK3SamiAfBEHsrfC1jjFS2QcKfWj7oztn7v8Qm"
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
