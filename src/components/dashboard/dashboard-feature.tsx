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
    "2YhARwC4x1x89NDn71vMMuYaEscK9N4de5obEhXyzAwyBQpwjvqMeHeXeKgjPTBGJ2SbfBLMBmRuVMKTPkTyHmZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vHFiWptsvNN52RWmccxqHtnWdCarayN9anZ1MKcZH3xsPi4ZupQsWak1qWrAUt7L5tTcksW6UCXQ3kNwMyfEF1o",
  "key1": "3RnZJfhfd8tkFDsiJsKFFwrB3zwjrAc7YJT3EowAapZXKoM5LWrtz4niw25MdU37g8FvDubrfxEYvvmd81rEJyXf",
  "key2": "2PLSVgCGzyKKWFbGk3coLn2e3dV5vXatcFM25NbEib34AsCUzU4tNrKz6XG9puwHEWFhYVJJEDKiVDgBdyQ2LiKX",
  "key3": "5xsbWCicN5C5qV2hEQB6MwhRWsmNqRrD6MHiGbLFNjuPvc1m8AmaiMBiJavFL7vVvHXBv1NdoYdEtTwSr2EsUZ9L",
  "key4": "2Ufy2sNwvwBAFTNomdJpTnUkYxccZ2F9g9VvXuopApvDfVRoiX5itAwTMMRRALBSuEJbz7UAuQoDjGhvthhpsdPe",
  "key5": "2fV8uqFdoBGMKdwxSsedyiJpVaQBVZJh1dhaCQCQMpsyhp6Tmg1FiMBGMm4qpDboZMLyurRKAByekEnfCnfA8fYP",
  "key6": "Zp4ovxAG7JPT3CUp5TXj72PiNTyUSLCsSoNHqB5p26Kc5gaStW6swDXeLADxCLQDZMoq1CEkPjeiCtQSV6EDec2",
  "key7": "5kUH4QeavBAaMwbJwDMo3BeV6nzv6URpkc9HUEENdbsryMqV7Tdz75Lz3rYD4t6utyUCm6Wnvynd16agCn6X4z2b",
  "key8": "5dgYN7VZLLqngu4L9QfiTJFvC9mW9modP4k21y4QaGyL4pmiDhgHLQYp3KsRq7nqft3egf183vAMLUeaEN7ws28L",
  "key9": "4CAhpjhisHYkM5p3YVLoSEYf9wB43tFBApvTg7c6dUCzwpobvBpLSmR7tANMjKGyF96SbyTikyhvbJq4wZteZoMA",
  "key10": "55VVfZQQFvxpzRUrwmY2TjKykFv4w6d1DFvK3jC6V5KvHv8wrQF9NjN25agf635vXuqV3UJUYVDV7gnPcCQHEmXk",
  "key11": "uot7SwpwYghrzMPpG5TCb71tXcsp3QmVoBgBu5S3H1e2Edw7YLRL9eyiLojGBDLyc44pdQXUCQScgvum2weQ4Yn",
  "key12": "3bDmG3FKnUrnsvWeEctMWuzzQSEqmRTM8Etm1mRAkMRtFhfLRB1CpqzpNjem4Xx5WpsuP7NK9kdosyNSvcVZmJwo",
  "key13": "3Q4fyoSpZt5wzR7JDW52co7Nh3BkLBg4kr5LzKNFKF6XaiexcQoNWhwzrRQLewP6cjKTx23HG1dGG826Dd4kysY",
  "key14": "3WcfYaTdC9jiSZtFGvnJ2UhoikPWjtUjomYb8MvB8LoBys7Cf3XDfufUwopwdLFPVZQ2PTw15JhGh99G8mfJrMkN",
  "key15": "2XUtXf42yaxwYBZdg5E2tTvENiftJSG7Xw75Vy3eVt3rRWEWY3oi3os8q469TwhXEWGUypw18jHPwU4mfub6Gjgu",
  "key16": "66q81MRCv8SznWc5JydDBiHfUEsu7AqQpfJ1EpYPDAfjL8p9shVgbx7dPAsdhUgwXWsegfgMxGL5sLRLYFqqTDy1",
  "key17": "3eiMcNqLwqYJSMRDDCsTbRs3K3piNVAjTi6bVM7kxtBFHpUDTj57ARM8v7zRk2Eq9rAZcQpefrXvyG5taYRe8CBZ",
  "key18": "5KPHKeDPRhFJHhnF9wbovPwhJFwemtdLabxy6ZVPcX8gMJQHeVfYcnrguoyoogaDBDTc18qUYKFGB6wayz7CL83",
  "key19": "8Ph42drA2EpMBY8TWb4xwjHcwaqkCAdEbX1J6p3XvBXqzfE9u3urTiMNnkntZa9zYeJgi9EtqwuMSLMZGcLQUKd",
  "key20": "36sVAQk1VSduptS6Rivoe47syxyCCmv7imAs3qXdbQMbtJMyKrmx2iYmhvNQJUyABybueyXTTvL15eU1XAoAcsaQ",
  "key21": "3Z1GzJ8H6SPDqs7gSBtb3Up7REzBJ36BnkD8euYc1EJj9oCKncD3JvrMTReoGZ7HhAAbdLBx7y7mAyryggwb4Z8E",
  "key22": "3AStkZ5caSKczQQJxX96261j75JCTeWEHabEfZ4Qwyp4T5qp9pn2zuFQ4Gn1BNyHSHnqvrX2fBfY8y6jfGpk8Sy1",
  "key23": "eX3eiwSuHYpHKpP2ugBFKjJSPzMj8bKjCxz74YL2Bti3FJ9VzKfjc11Fy9pv6m5Spj7jjAVn9UzukqqDUFUdidY",
  "key24": "3xz7sVWiwBggq7gsVyokCRurbGUYfd9eiBsc1x93kRQrRVwjcfxNfLtsb4bSK9t1vjuSQyNPiFxU7T74HskqAPJ1",
  "key25": "3jHGCfkgzbChy6V5dqTK9et2JLgAnk3h2ud7LrFhmzMomusR9T5eUZTHQf4w7Hoq2RrJgezcqdTexNKJdZKRJw2L",
  "key26": "5gZpNTTNimMwQLQguwbFJYXVefxmQqoqmdLzjzGWuBBtZxJZvD9y3c6x4vJdmRVmpfha3zcZJsxUxT6ydXzZQSZb",
  "key27": "EevNEc1hwZgqSUdfvGnE49abkFgBiwJewcYcxMtXZrhMZVQmb23jAa2u4oAbtudRNgnqYWHfKg74nnnCDpm8r9x",
  "key28": "3hEj6Tvv71SvKcTUt7dYMTcSoW88EJYezUaiF5wcdJysfescHNJfT8VrrKQEYuGbJf2fD6CkqgmJPQvgnrTQ5nis",
  "key29": "3zsBEEDxGWvF8XE2Hfm7BdQCaryyUWTC9MKcLhRhPtcWnQ8z8syr63sn3eWoHJ6gPtnbtJ2mEKkSxB4kCTb4ioFs",
  "key30": "636EYb3mrbEfmvivxyMWdEL5tX8vbmGWeNfQVyHgNq7jXYpwcuzjCvBoh3AqNSxySYrNFG2dNFXPxJvhtXxxeYLt",
  "key31": "5QYxXv6LreC7x6m4ajbjbkDcCptDNmnrPcQ6LbeXUiXYGFUSFa13nUFw8iNDwga3MMPdvu7djrWQjscMBmiJQ17n",
  "key32": "4VwL9auGZoeqowarfXHtSCjW7hpEZoGsckniaNcJajwbSt4PfuvmkLKwKF2tuY7ycQLsjJp9rxKMRkfw8NZJEwQG",
  "key33": "47x43SwTkrLJyXYy14ABP55wmJWcdDLYVtcVcfsNqBbdarZQaMonf6Xi3JxSVrWZQzmzqwvwj6RjmkLNabxEQ1ng",
  "key34": "4awUtPFkH4Rp2MY7YSiCXvhFh9dPcF3zMmoPcshHtcGXSbrnn4jCEMJAMyKWYzVBTbmGVoSquTsUxVyoBLb98rZr",
  "key35": "51n9uMNe4SFJhzoeFdUZgQsf18Wo4brfuNf5Coiyjk9uhxJbtEujXNyN82ah8VaFWHqXDV2GuCvgjJynF3kp2gy7",
  "key36": "4qihZYiVnNA4PGhX3TtbCzQuv3Sa111U9eAfQcoqAj7jxV1C4wkZA2tZsURhEoRpjnjAeYiZ43zWKif5x5dWcxse",
  "key37": "5NK4EMMgVuwPxsCHjMeicPpQY2pEodFsJ75skZtVH2YXqrbntSFZkzRGkNVmkX85vs9RpB8fJnMkg6nkHp9FGBBg",
  "key38": "asjsHgV6y5gxAu1gsFH6bpWyfFNiKr4YNzLZxCSnSZ4wRuHeYMLLXHzyrXMuoafWKWqxWC6FZsz9cD94RxVVXDg",
  "key39": "33SSJ4bXbS9awysDewELnyiNk39bnjs6Eu2hdaBBCPUibW4xDB2e3DmALzMegjmgQ6RrAdFGKxGWDkWV1Q2A1GMR",
  "key40": "3Q2D24YZPJYLA17PPn3VM3yTak64bMRakyQa56KVHjUHbhNtZ711E7q7G1mJtyQfqeyPTT8urWPVKLUEnfKUZqMw",
  "key41": "4TZhnhux1JKRLMRRqKr3xH395bx7krKQsWBKLB9hDR8HPHFMeQ2sSGXaKXuunzGHJK1Yopq1gR3aTvFJCvAJJjP8"
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
