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
    "2tsYoKX5i7W4iyhrebj77QNfW5LLcUmJe1ksaKnBpBbPF1CzizPoBabjXwgtzcwyQcWcbNq7n2onCtRp6yFkviim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f4NbjPuntj8q1zSbvN31rLi4VcPDfSbf7yD8HGaiouQWw87fHjd2qH3YnokEc9xnBBg3h5Gk7PHtirGbKUtUxuo",
  "key1": "4R1VsA9q7Temu487J1P4yRgfDBuSW4yzYvMKof3sUAwd9kUqjenBdhJ11wgSUAW5njXkbfgho1oBqjPU3kV4WQY",
  "key2": "2kFHFdT5wYcn3GL4xRb8UX5FgSeAJ1okAxVoxx3jM3RHV6v87K8MmfTKza6DJ4LjAxT2nh9Zq3GwWEc2J4iRJ9U7",
  "key3": "3ZcZWxLJL7beCc1cfmjyqnrdVczdm3SXmmq2TQL9BEMZTS4noJKBJgcsjmt8ebcKx5YHiDpK7wRaUN3LrGoxKQ3H",
  "key4": "4Rj9onmTvTRjGDiMhCkCBpTDyXHtHgjDqWjDRehHQjSsUUYq6jtiBBGYLrYBruRfbR1pkKAzxovs5EESsWv2oxBP",
  "key5": "4dskgCVa3s5L4BVvMLFNQtnruv1zQ6jSdBid4F8X1pXEM7gcRXQWxskDLDPoMUBPidLR7NJAhpKvSaumSZQwEzxS",
  "key6": "42v2BMkcCbAhuAv7HxbVDksiRojsfxdvqCgnsLFERquBqK7QibNyhdquTTDVtLxXUhnzihSM9u22heQ33PC5acN2",
  "key7": "ySXvKJgGSb6nKfLh4xBUmxUAdzTh1dwShG7pP5FrrWBNAbTacc5q1C4qD3Pvk3Yqr5PSVXpTeA2XHi9WAuoVr1W",
  "key8": "28kuRh7gJHzW2jQMdNfoNVTyUGmWjsHzPLyNt7qLyWsQWdXcWGYJ1j9FLptbozJxkDPr6ncXabQHokGh1sU1BfAn",
  "key9": "3KGA9BTDK9VGBUoJrPEsBtfZ5XtaZn4Qgd73Gp4Rkz8VNoRkSuVUSittZTyjiGWTbNYA7vjA3Z7pWDrhyiyZtmS6",
  "key10": "5UsM6Ap8kncFG8Tj3GfNiYkM99rq1s1paVddWk8Rzs6SCUdhdKgZjvr5xLmG3cRwMh2zCS1Jsx1uo9tN88xgHjUf",
  "key11": "2RxZ3idmzTkYdQTMKRtUq6oMnCC4ir9mhagD9mxDBd4AJa4g3Pxu6xqnFKpuauPyTnAomLUxF6vU5bFMNjUgQDgr",
  "key12": "S6TW8kcxirvUpCehMf1Dns8GYCUtepmwY3kJwFGz3JzhjyqqHoQFBwe4hrD4Zy1r3ZmbzkuxakNK3qGZCQmeGmF",
  "key13": "2Hawnn2hcahXxRErei1AcokvjHfYJSR69YgVmXQfh88SuGBR8FNMcsSPnPqQva1DuooNnJFXi87bXsR8uv1sa2Md",
  "key14": "3vUhRtx6hbjZ9A2XHVe2kM5HdGmadFHYZP38hETHsEmjCNHetk6CTm8mukT3Xisvx8t5wrTK2GQwzum5GrNwrEC",
  "key15": "4Uc1nQsiJhtCyU4RoAw1rZh64H34zLg1CofxW5egQszdSEo6ppKMqC9vYUgEVA5YZufPWEMWapeogxM7RBM1s6Bt",
  "key16": "3jhpSW1jMHBFAACfgXa5SUKMfmjgjkrNWBXUay6of6xF8XgdWuy2g1JYRdSht5wKMKRMeCgDTV1frbqa9kjU1w7J",
  "key17": "4wJhjQJUHTV1RJtVsTmUQhErngZH9o1PvmadKvi96yGH7CwbsCrZkGAAEhcBZj4VjdcxDQ5fakLw6yuieQWCdFV8",
  "key18": "39hqG2QXbLbFaTNxHyvfJsKL3NqdqgRsFWJarxAFw3podipNzGdeGvH5wCcusDZwSZTnaEFtvHs4yNpaqkihwjur",
  "key19": "64vmJL7RGyBthbDVWc8B2BDCE9o4Rk3eZ2GEhNAYPM8fsmVHJUX7hf3pnU8kiUgzSp8BApT2YJYQ5VGQrvhgtLSQ",
  "key20": "3zfLb7WcK8HQ5KStRTyhGM46nEcebUM5CvPuBdSgu9JLbvSXj4ur8JUbUEhLDhHM4QPWU5SxdM6GKHpLXZuhN5VF",
  "key21": "25nRb26AuyC7V9kQdDiKjLFBcHEkKf8tspwz1fBCpd47jpR6VuUjtTi9zFcPMz4AvWpKgtgoaqyebcNmnG2t1tZV",
  "key22": "33cQbmjeDi5mav8Ws1efF7oUezAgSeZ8Z2u5Z7Q2rQ1MYzapvj4AGrVrndM2CfgwMvdqDyUMriWExYVsgjMwpfT5",
  "key23": "4m5n1LooKeowfNogEPcf5iKfrbwxnQj5qvBRUq3DZyjCFcV9j3T3KDZXqmf37U3QfnwXwfcspQLLt3gqW2WNs5oR",
  "key24": "rZuKPPo9mZmTXzhgQ4re4jrwXhM7J7jJKsDZQ5c7cUz4FJCpaSDrNxPAxdrUqYmkBSMZ49uwCWN4YwHmaEPMh12",
  "key25": "2HMXkEks3MC2TGqh4g3swrXUD1YJ9HXKipsz7xfMZuwvb78YRGtQ2knxg9FvXxy4Yznws6vWTcGH2z8HbEvNUQQj",
  "key26": "5EDDWd6J7BUPhVama7G7bwHi47jYNCwmBgX3F72VaEuqBu1ynQdKnS2nyMC9LeCEAckYpoJ5bBxka85DG6t7qR9u",
  "key27": "2V597wiyUUApJd9exCaMgaE94Eg5vGuS2AGX9Z6wmH2wdTBWjpTDx9d1TYCDEcrDfuA3bVGaDSoWPGE4QBVx4Z8z",
  "key28": "588RjMAr1bs59nnUTsbTMaxFbc1yXeZLXnRipSWj7sjH39g5e2Ki2LvJe2FSU1YQM9XDmX9m1zBuRcJfPk1UBs5m",
  "key29": "2jfKRETgXMAaSj2E3PZAaiLTzKxtywvPQnXKJveP5VJnkG6DthFLqujWu5TWY8hFsba3q7JeGoWyA1nuWLrAminT",
  "key30": "5yvX2a4WTmB19DBHkBeEeWaHY3W1owHFe7sNfjnckqVLTqC3yoDkNAeCpEWEy5JAJXjrgHazmCCaGbLXRiMXnG5v",
  "key31": "LMeAMdH1mAaDuUmpCzA7ugsfi58SU3xDNwFTuwWRVBGWCnXxdhX1x3toZkat5Zs2YpJpougmMcMHFtg3bm14Eyw",
  "key32": "3KNiAmQKwcW79kPiArqpqrbFcPbjLAakLpWycaKctKrDJmNzFdkvpz3prULmVj6UYAyVEFKv3fwkjx1Y6tAF2z69",
  "key33": "3PQXLnC3Jh1WtxP21xH8Tt5EJdmSSj3ZYKcsCAxvpVTYMVwEy8CJrNs43j85TdRER1cQ58nPUQkV7TwzgiXfRHtX",
  "key34": "5d5D2vporoVb2V1fywcnhfqEjrkrxkKjhQcB5QmjTLeQwwhZEk1xMHdFhdgrWmWHNEM1t6fGTjTgA9VN5UmQ122E",
  "key35": "4aVHPsiFzEZGHRwXS1qzsYpmtVw3CcLbSWKZQXq2Cv5WyPCUpfWZ5LZWX9sBaF2CLAUBK79TVTK59B8vmUd6GDog",
  "key36": "2QHt6tW8Zu3kxQGXKYs9mqiT1rWq4EapBsEAKZdShR9ZwT6mt1yobsFhE5BucfQVT5756NnbFftntka95z81SJmE",
  "key37": "3jk26UPQNYJmZUt4bUJ59cB6tGnodbdpjERHkzeqY2p4nV3ygABr46VXa4vS4TbFJSrVuKUDWadseY46EtbUFria",
  "key38": "2QB8WP3RQL8LMj5VJKaKR8HrXZnR25ncjpz6BZzr4fDHP8AuficbDsybYHh3Nc77oUndafdqA1PkaVg2cpjAvjiR",
  "key39": "2U3nNGVsY4NWw3tcfKgyQLTWJE9ccUUQSy7J8tZeqdb2qbmRYWTBAuV4o7dzBmgm6dsKYVEuPPchmUWdKiVBVsF2",
  "key40": "3Yg93kuCCi96ZRTdqH3dLMntf6Y4R9m9aaraoECM6tNdj7gSsu9n9tW9oBVJmbxsaF2JmET4qWYYmQirhjbbVgqV",
  "key41": "5VEVYtsdTrSD96RMXpGW5WfNXMV1Gm1bTgVnbGtZFL4vrkJ6SBfNs8YrhUZEJ1LdsN2SiRiDpwhcWNCAouuJLkqc",
  "key42": "6iKKSpUbZm4ffaozAarjr5PkzGrneXYNijo4y7RXXS8hBYRiaaevqr5aZuwGbKaUm7d1PkzdhtRTRWdy3UZa5Bt"
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
