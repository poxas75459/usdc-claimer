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
    "E4mJyhYijtgXLwY8qrseQcGdD639JW3dJXBZs376V2wd6DZz9b3DvsVbauUA1YDn8rZoPiHyisZNbyNx7H5Tcof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41wAtzAhmceZDTG9BE9Qg7jXDndm3nAaJetcx933hJtLC1x9mEkETVtXTsVB9CbeM2m4H1GTCirWjBPRGyzHobrF",
  "key1": "8EJjoBKBA9G9Uv7Eys7gxPyYWqFy3gvLr9oWY6AYfZXBUDArpVLwkuYUWoy9oAWYuEAfpB4C7VGFhbDHPCQDL4V",
  "key2": "m7yHXZ7zMDMiyhdJ1JApyTWuMNXsZTGmfNTQYaZGFJT2h1bcMtpG7KWWoAxPqsLWRnR2X61JLBM7K3QZD73bGJk",
  "key3": "QfWMEazYr1hrF9XB2ujFDSR7XnYeHL4bjvuJkwim6Ekprm5gq8dAzQQ3a73FqxUR6vad37podimNpe2CTXYq3tF",
  "key4": "5hvh97cUS8cWLB4G3vdzhPi92frAvXuTfLMtpsg51ZNXn85QPX7XX4GpzuxGUEBaFFMeEDZasrMjZbmHgNEJ5zmT",
  "key5": "tgLQS6zQiZWrviCM8LN8i8MgoXBfGfTACLsJ9HXmgUCET3rUubBNXyNjEoKh6Js4ViSz7tsizw3rmTWNQZixkQj",
  "key6": "5nyXsXdovbjqgVMt481mPjyhy5VmVnvg1ewEB1T6zjoJy3DN3Fkd5HmjudGG7RMr8tGd1jWrBSKARhskZMsZrdBN",
  "key7": "5Px44v61Qm282hSNGwaJtmaLuFGTafxEvdwxBVusuRrtAFHsmhqb6TiRTMnUck7qzW56pS2E3KQVMZnFL9qyeSyq",
  "key8": "uByH3fftkf57gjgF6Ea8obQhuTiTSN5H9PBSAp6eChpL93Deq1q6tdbhmZ23tLA4tDWu79aCek7iyv6ZoSYrAob",
  "key9": "4v8HfB5Rd2FJdGwqz8Xn2WvCXNpN3Cargwgya7jJYEzYhq5aX1CfRSUegCaWF1PDoEb3yFYN9bNyYTa2L6zk8Fwm",
  "key10": "4BCNhDSo8k9FcVkUcuh6gk4tE2225P1Rcy67kP8GUTfXRw6Hso8CaYCuPBHcuw4CSfRGNeyPSBo1bNvLwLg2qdiF",
  "key11": "5h15u3CZyMv37s1STNUBF7eBss6uivwpEqQi1HYZe8nr8yieuiPkdSnTVhR8P9DSkLs7gYWK2AJi4uAYDt4ChedR",
  "key12": "2dBznF9dT3gcESS72sVezn3GbGUfKZcRqSAT4JmPDEHG8J3AxhxBCy5J1Xema7StcrqPGChkxX6MR3DweH2gQmYw",
  "key13": "4gDzMgjPRak9tWg8mXdL9PW467TZmNZ7xJEciBX31QDP9r6xmAtMUZy2iJHBq5w9Fakvn3ATKLUmtm8JsSCbLwS1",
  "key14": "5P3EhpFUZR3h6VDmLRPWT55UJC3VFrvRCAUSZpQjdQgRjpApxbhpaZVbMWfegV4ZqWGpGJCWTyx8QWoB7EnDXH2n",
  "key15": "QmkVvUhcLNr8k3Kt1dx3Hxnr9qwFwhWM1C8XQVY2CKjVHffU1U99nG5NmDavLKMgXxBi8sERv6bVMKY1bJUsDUv",
  "key16": "2L1jsDZidMeGYFcr5cpgnR1MwiFrHuNw85nJ8YhuVfCZNpzNhosHD7tthcW9n7Nmc6oG9SD56MdEbcKeVHvRRotC",
  "key17": "2x9Tmj2zZDpkqRtD6d49vPHm8L27nhkaZwKXe7R8deRryvgrmovqEVb2yL838Rg8TWjXcH52reptMQMZMXkzoieL",
  "key18": "65FQ4eqyMGX8TXABVSzAPPSzVVAJta7TwyVmdKJj12zbfHhhDMPHq9Z2vh2BQdcbvyc4ixzKcBAritATeGkJM5RX",
  "key19": "3Ex4nrWGWEQkwxYki5fAp2wJjUJ9LPRar4YdwtBsYxqpB36VHGEfgD46YnnSLbWxWcfyAp3GqapEj9gm6aPJ4mQo",
  "key20": "5F6KUcgBaama2QGAbeK5wvwoQMwWjuLsXzP6Rfrc3NGypRWJrgFq65fHRKpWeVP6WAtRmoPcBr5QWZ8hJg6oYGi9",
  "key21": "ir59cTMZcik1tokSB6pha2UZysEYyzPTsD9suFevZznq7c9gLqwkkQ3twC6MoWEUYR1ANWxZhxUpTLjcZ57p1WA",
  "key22": "2i5YP48RNXymPKoPZmYADqsjdHdAPWp4b6p6CnNezSQ7caZ8Kgb7u2gTijuddcB1GMJqPDXEdcWfc5TkrbGUwq6i",
  "key23": "3JuJBHdnt3xWGrpvXMZWonEUu2RQPzvXApK4TPt4jfnnZWJkbvg9rgaPqxCimbiSqGEhfTeCnhKqHT3FyzsetXxT",
  "key24": "2mZLXjHdVYspL3FmLhEAFXoTP7u2Dc5imk3sA1QL6JzT62ZtY3a7CNbhaP7BFJhAnABLc5RMTpsGwXVfpBjPYUBY",
  "key25": "24JzrAHoC1rXHPCVSJuqicDB1AGzqm6Ja3dV9a9HFQKnxsnHyM7ZkzkbKGxfigpn8VQu2MiZWJ9eCTaU6FgSmNJv",
  "key26": "3T6Z9shagGSdAnY5KEDhNc1fuHb8ZvdEbfhhqmrnWH9DERAzPvQXvH7q7YZHsA9QehJJ28mmUzWQVrA355pDPR39",
  "key27": "3T2tFyjfjksxDrLysBa2ZToRpVxCUcJKmFhRycLnKrEUKmzvAvEyiAMyThb3ycWKYEdneGwA2wxY9ZnQQ4ftbTGF",
  "key28": "HY5TWUYPU9kz3rmb6xxKKKGBefDs4ZXVXtnXVgpDMj255cGL8yM276gB1SBMHHXEMRRW6p5FW1kpjaij4gQptS5",
  "key29": "4KoH97RwSAEJA6UsZcmtVxgRYFFz76VVd8J7XoGM8bYBaNsPcQ3zFSeT2sucZFtGdNpigJZ3SpfqRyH6CuNLuzzs",
  "key30": "cehqKMLZx6enN4JidFEz49bKoFyWdbTLhxYcYc7hcZKUU5QP6kF4p7Qw5nT9aYxGzRPUZJGrZjLhx4Xx3psT9z1",
  "key31": "WV3JAUx9ZJr7qPZS7BZpC3fSJqZLifgtPHnd8DEaXdGq9bzYcaC1erRtvrFar2UvvydAAL2nvDjMCqqj3zVkrEP",
  "key32": "3bgUHzT45Lca79LUDjPXpDDBkarPG8aaCkQG6AsdVZEn96q9Edx62D4xSKikNK3hX1grzBKZvyyT53MybawxNvkQ",
  "key33": "2cW8EXEiX9YeESidRV5Tqp8EGKSoSFoNhoWXEuPuR2g4gEeb8JzNe24dNto5nYAYNpAqsSkEkLqKS2ns4U8nFhY",
  "key34": "n6j9bSdp1TceQk2PJVSb73MfrPXbpMqSoznRF5rqiWQo4cqnndqYtgkkkpQDXE9gC5FJc39E2mtQzvWs98HzNvU",
  "key35": "dVeBUGdrMdXdnRMKc97EZL1Q9BmtDZbiSsUixnVwkrGNPEKZTcTgxpmo7BdAXzkKtgk2bKssaJSJUhHsksDnRWC",
  "key36": "5WS6C7T2TUBbEDAihxSEwPzS1Log5BVNmmPrxuzCvi76wtkcSVHACmSrz56JGmFBGC1AHGfk7DzFdiBBVwc8uxNK",
  "key37": "jVe8pxVuqh28fVidmZvgLS6QsY4UVTcxgE63CVhmuHFWZNTLdfuet9orXCY5gqTK4zJNxGBokGXNpZ22Cwx27Wd",
  "key38": "26ZggVWQUDNXMnhsuGJoTRyCszgJfzZW6FRhWjYskdfMeQ2YwofYjnXhp37ZGyrBE5H1zRY3x2kYrhrb9pt8DhXQ",
  "key39": "5UeWfXDuKPfjFV3AXQGEFL6WBUxfko1uNCVbUsJdzjQtdNcYqi7p7W4HFEVSHtkUCr6Nj39GraXQy66jHxBk63he",
  "key40": "44adakBx6RYjSEh6tvgBb1Qa1w2MQW9wGAJ2FJBqqVdfQVwEPmMJ8bMR4AUPQLnYNVhUoRqXps57trvwVvnwNP5p",
  "key41": "p15eBanohkWLGSvVt6Xhr3xz5wXknx5uns664H7scLqV78F9t8XeLa1sutVvGoBRpnsKErXGTNjRQftbTZpSAMN",
  "key42": "5h4SQikwCvJcXkcCrHMweehhsRAeP1qNLtLJVpK8YVZmT2xvPzcYENfxBtUrfSx8m85gNFpC5UjgzoncRRcn4SeG",
  "key43": "3y61JDJcrWHzMpr6UqYQLiFeseJjfEHRFcrfqTzE4oC6teAxA5tdjXQyr57e4kDAUm22yGEGFi2cyTVRzgpcgjfP",
  "key44": "sDTLQwc3z16cyhJ86cViMJq6buakJK4mTWS9y93cpZyXNRcivsEGcHnEC2JnvJqX6zHVsPdHitwYBUxfSako1Rs",
  "key45": "3KqQcxzgoWuVd5JQvUpykLokhmzG43ZsEvWv3ZfPGjaGpJLVNDS9wS1931o6jBafYrHpajWNfEJiaYQbYbcyK49v",
  "key46": "2hxV54WmSVSkie4Y7Ly3Afcgssxnkabetr1UFtqsFeBRfiNSkUppWKoqpgQ4N5b66E3bXth75xG6WYV3aiwDMzuL"
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
