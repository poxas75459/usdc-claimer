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
    "2LX4J7dB1t3nuqRHokZtiostm2bjHbJ7KfxtXzN39utwGeUqdjpkbTsGXqui1Uw38x7y9xrhtngwTmmd99UuLafY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25seQWG3Cnha3gSJt4HqVK8BDYttWnDADJzk7Xb9sBC7rJiE2F9fgbVkbDiwiUJojX2UgXoJD4ZQQnZHo8zbgm1h",
  "key1": "voJwXytJ6i32nJa7NnKQfBVDAJFwj9uPYNsUC3BfDsmWmsWn7MkeHE1m4rwDxjuUsQRfw5FHDsj8aCejKwffQft",
  "key2": "52XDfAwcoyGVZPMc8zeAVofPWVQZBaADH3xDGCJNJ52F2yiK7ZX6r8Gabs62vhPSE8pEBWC7yEdweag5x5r39BpU",
  "key3": "3j4q9dhFSWoC2kyvifndYMhJAxTQXWXt235EaGoVQhJcJSD7HmyRz6qE9sMUSVZX3SViHcNLRxK2osy5DMuHAbi1",
  "key4": "4Jke5t5QFStMHguoFWJvVqk1Vks5vCZWSJcAmygfkPwB9NVBDF7RgEWQQASkSib3cRdL1LjLKBU51SuBz1SA8Q7v",
  "key5": "7GPw9hTCVn8tV24JbC5aiygnNrjkzBtuxw9Enuao2xA42NfrMF1tmCjXwjCp2oRU5fAjF9egvVJxMng6ey772ZC",
  "key6": "56F3Lk2SRqMxtNMtJmjujx7fYFfgbpChYYcZtPgShmKCmR8iXLSd6MTUvF9CWhBB8n74zfvAnoQZvyVuyQtErfot",
  "key7": "3PTsCyNViF63Utpdv3uuaNZpEyW4EPJQEEU8u38KXRmgqNJYh7JkrKJprGzqXRAXUkprH5FMQbRzMPRks2wKj8XK",
  "key8": "4XnB6VEZrnKktmE2gpdkdbnuATG2jyqKHzb9ddZyZgwwueMQ1dnXrjKTRdh46NXrZR4WZ2q8ajubLr4W4kicB7Xn",
  "key9": "L2euuXfFJYsaAEy4VqqP1Uiw2cux9W9ogwsk55eErySJwcMnNCLnrc676ktvcb4BgoXoKGvAixxF4c3J5UCyaAh",
  "key10": "65prWVW5cSxdFpqhLzf9yznGUe7bCdKVdrxGvFrHJPheRaBy74wMxrsGDAtyCQpq2NnRUnShwxYsSt7znXBwbZaa",
  "key11": "4EAXrpD29EUeCt6jz8NcmWH5QBYCL5ZLwTeAdi21PEeuroC4rMCuFCGAZWMZ4TnFWfjA8ike46KK4eAuHvp6uVkM",
  "key12": "RcaXDv7p5dUUDHgLqcKZCTF6n4tNS57F1C7Dss1766vzFPmnXxxn5JFwA1dBFYZStSJbqEPSakUiZ8Gpr2k2Hmm",
  "key13": "ZSHjfDuDxhTrFQnTv7PgvPCsFAJwxZ5EFM26vsfAEpjUsSvaAi6tbpWbaxGCzjL6bUbmo7AciupVBLjF5yH8tRS",
  "key14": "2CnBm1poFAumwxwcY944CSNPKR8oLuaDysbLPxwv2hQmz64mjQhmucTiP9mWevq9QY9uMNBSf8r5PAwwT3Wgp5SQ",
  "key15": "JRmG6pj5iCoT72eyi8WAjvf2rneNdjkeCpKa6ccPZj9xu4mmcGA3y6Au4FKAm1U3n4x4tFq2uuiqa4ZUPo835UV",
  "key16": "2DBrdJdAhCebJuVjGjzQKadXKwAvvN9FoGiHsWZ5kh834zywRdRE6oaiFKdaYomMEoioZ1usLP5buTVcTXdzt88V",
  "key17": "5JFscGRXdKZpr4QnuQVtxszKTx4dy6HRMyQzmv3YX1TCAZgoxWvsL7Ft91tVjQasEpjz1TPbP2DmrZFDRUKfXXjj",
  "key18": "64A5CwQ1rM9evAYv7UDfPpRUxcZ4giTsG6yCSTx5nV1F3j78MBNM2FELRye5yXNcLsZWLy71YeAYrT7kakxSNL3y",
  "key19": "M1K4wVgY7m5uUmwtH3Kvr6WL2i5tdw4Gg5wDex1FaxgKuXnHjXWKNEpKeuDEm3hRCYPvYgT2HURbVHQmLvwTAng",
  "key20": "295GFXNfs5er5tZcgWcxVgBe5huMgDn4a95aCjEj9VqjgHacy9bj94UJRdi98iZvBEbY5iCWq9Pm4RrnwkTZm6vZ",
  "key21": "S6jnaCYjCPv5Ar2tALr97w2cBEaw1RuX8YzhMe9K8YQW3zTwmJ9QcBmjNYybZ8FauNu22yGD3hrD3MvaivReNbk",
  "key22": "ZHcfy6gdsjy2bGhVubdZx3sZkU9GdanhdmsY9Rs4QP8PiYKUAnq2jbzSTJh2LPkNkehSmNrnQYgwonzMJHbohwN",
  "key23": "3nbY6CRjHoMy8p2CRQT8mjwUwd3uBQMRm2932AJCHctZ82kzC6WfzUnhyDb6eGw4msY8mPWmjGbF27FJLNewTHkU",
  "key24": "43hqcXE4FCJCm7uir61GdfbKA2iH8nSLWScY53EV5t3EwonFXaeqzWMheCGBRUmh88Eb6mCqaGk15tj9uyrvvYT1",
  "key25": "5M6yY8hpdqihuJaUSuAh7kMnZZATSU2KY3QaEvwjLk7pww5tGLi9miaCFUVnYhJAbQyavsE87koRGJ5z8mZq7Uu2",
  "key26": "54qe3kpxzPsXMLR1wYjzgVLSNB9A7K9uB2Bpv1EVMQ6iun6VCxD8VPYJiqXJ9ADDwV6i4aJXpqSdMuZkpxkBPUD8",
  "key27": "dXYBTaeeVDuwzuoC3dq7isax49sT2o314QJUZuxE21nJucjbrhVyeK4pAwszTUWezgMAbw5QNdwMckB1q76fgmr",
  "key28": "brCkRSXUY4ouCjHVsWYxx4whboyyvn5MLbiffGhP6rbQ4u26UaVecP6W6sQHy9wYsXssHvzL13EHjTSFsf1kuqx",
  "key29": "5j6WPFfVw8ESVqwRKiRuhz9ZT5HXG5sj7wuDXP8YyfwwRYQdroVFG3ikN7L84SF36cAyjoD2T6CnHugh7BfneAMv",
  "key30": "5etseiZdPkHmpNGHp7ZiPmZmvBNRarhmKZQmc4k6PKRnQE54EUx5FrdpCa7HmqL46tjmyaRu8Wca9YPVDrRWTH36",
  "key31": "dP1vZBNSNX4W5SgTZ7bRcrM1qgZn5gkuhcaLFoNmx1Bta4BGdjDAFsGASAfPMKYKedUUSHxJZ6ozrHB2U26UY1L",
  "key32": "4qi17ywzvLPrMvZ7prvs18ByNdQvBU2PLXEjm8wXQkNkuiVMBHwJJacAZKZpSJCD4syca168a5GSsAQBk719Jnif",
  "key33": "5bT496f2LQrPLNsYQCierKo2txb21FVxP3SR9CY2BHJtafJwu3opWR8PZEUGb8mG1s9oWk5kzfoVscwUvzwJ7piG",
  "key34": "43XYZ5ALyanHGTjg8vRAtgsQuLt92iRW2LoZu9xJc9kjuN58h4acReZUgJ1GEcXmnoLjDVGTEYvFw2RfbPu63Uz7",
  "key35": "65QEdRorVqW1hPSAXRKPUaauw9ZiJ3FMtTUdamAWDtMxdqY5qWUmREhtvN2TaftreUr6tYY1u9ZT2jKx2hcCwSy",
  "key36": "2qiSwpS8JXbN9ZHpzair5KoXcr5znu8iJgewWxQz2r1i8q6zytcacb89kpTghSDQvmGwRKzX3G7jGhTqgDzPJXP",
  "key37": "2hxeHs8894y6DipC1ZeRWw3AjC4jjUEbfZxMJqkKc2G6vSKYsWnQpJdtjGBBssjRE2QaUPgFyTzt134dX5M2M8iX",
  "key38": "61tD36LE9g4J2GPfafDddbtejvukRN8qRTM3VaBjoPJgF4SPV3MwkGmq9fdo8ho1auXyitT5MFPPzaQvJzJZSL9D",
  "key39": "3NEwdcyjpcpEuKSp9hnHxeUczhGrYqKibjDJUrD1T23DsV8T2dNisLFRzoDSYEUdRV7x99Xre7NCPibw77X9nwQ6",
  "key40": "5ddSB8uu3ugSMM1HWHNLh7NzK1yjjDYBHZi3aTsfisa2A6WDtV6eS15f97M2wBbv6nSGZDEbuqkNyGtvtxK1LLBa",
  "key41": "3TevEuLsvuSRPawi5TdnDte6QkvwPPwFDARrBb2e89WjvaUAJogcavpEB6WTqxLDWM5CTASU1Ak89pA8xHCZcDZJ",
  "key42": "3dTQtZHoARLQztpHVLmBHmjy8nAwMX8bpM2akcGxjqjrYfDqGRsYJV6gsJQHHCmPF1XJsLKYTCAVPB5cLvXE5JA1",
  "key43": "4infJkdA2p6dGeSbja7YoXvnc5LqizfN6DdaQ7egY478endPU4Xf2juuYLGp3dawHp7UNovuE6HXwZE1STvypVUq",
  "key44": "4BSywWkPwhF8s5tTc92F4sTrN5LqFScpgqYYk9r8Bodp2cQ9R5qjrC81F6RCUjYi7oJYQsjPYE9kPYV6WCqSmJ7V",
  "key45": "2kutCVxJ2MmeUN56RvYV8g2hBf2vxZN9kZ7Qcf3EygcDL7sqGAhz3UhHQjXkScE8Go9W75gaSVVLPGu3jZtb1CFR",
  "key46": "3hwKZwoMFF1JCqevUYLQjVCawUnPqcbfCqdBm7VThZS3heD4xojkDPtU5DiHpPZH8KpXs7pySC1hPoTEbsxndQaf"
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
