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
    "3tuu8n4sK81FZBew1G3T5aBvYcrXWw4MYWSDL32cc8enpBbEZCc7Luz6UutpeTf3At85VhmgtcMmG2JvxHMQ5P3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S8Ks6rq7JCg5NXK7wtV9UpFYkDD2c3ARiiVdN8W3tP3cTnMM2CLfoU8igJAwyiFNybnrgGCW6eDi1YbXteZoFRw",
  "key1": "2wmnFdpVyj7BxX1ajLXMdzuVVmC157nGMeZRU15X7F1YWBCcFMyJzRdrEMK9S74oobD8CXEVuvrrjcy5T1MzeYdr",
  "key2": "5RWzvVRZyYXANKuy5ozgteNSvNDYNCv8uhisGijChPPemi4LpmxyiowhbSbTibZaKqahBtWjJzxtnvNFr91xrG6m",
  "key3": "282DCs6QkHJuZaUswkTZgR4Tvyx62qqCCxZyK6ifgjucCNzNRV8HswT8h8dDC9dRSTcHKk14QcJSV1exwyfy6xta",
  "key4": "4MGvZ87ctBFf6UK9Eujp34YsxZ4F9VD8iALTwXR66YU7YiYCF8jVov1juEhsPi5zjh6Vxw8KTSCom48ddAkVpSVM",
  "key5": "3XLTgCnveMmhRmsKsgVSynuYEykrrzyNEXkJZm9yYPCK9Z5imQAjL62b8W3HPajTwZJJgMmbJ7bkcUnJ7XZSfMVD",
  "key6": "5rwHFYoAAcFUPhu3tquvPsJ9CGoNzPPvNTg3rFkuMER4KqxQTSugeF8jMYeer31kCff8yeKkYRNZgy82cSz16daM",
  "key7": "4mmPjyQyRbKFDeWSm223uCFMQiwEuhzj7Bai2VCJQxAN8XQFqSzi8kDtiQgVgup9sh9gCcW2zZ2rCuY8dbxeLGYb",
  "key8": "2aDC57X2fkjTz2VNnMXmY58uRJ8RmfqEAznJ8GnduvdLUQzBX5zLDcrvYCz77zgnK2zU7PLUVmDW3LifZcA4uZYk",
  "key9": "5Ec3gRC3P7BR4FgMpCwojgikLmyJE52ETWmhuS3aoh7a3NTMEcnGhaBNjqXwCp87hSgNLWvtYQs2ZZzdafeLmz3o",
  "key10": "3PjZmnEmahaPtaUS8ssJTdoH1DtXpbyJQgrV8iZqy3k6yezijeFgbfBN8a5PmQjS9wgLU41czbQ491CCJhZi9Hfx",
  "key11": "joP5f3CLYjSLKsEdZozHaThXer2b1RD3hbJTueS2o5N14pCUysWaJgY9AzGRiF5JGH8Jc5zv6oCjDKWeNgxGta4",
  "key12": "3pm9ors7eWZ8BXuT5EGp5TJZVBB63P3UvcZavg3qo6NTKhuV8V47H8ZF9VVA5LghVvKh36G8vrUw7521zdy2Rszi",
  "key13": "3DmwG5mi8jupWksriC7YdhTbiYAum9abS3vinJjsN6NLExAnMwee6EodNk4wz5DkJftmvnfWGqb2N19S4AUfKPnv",
  "key14": "tbiTWLdoyFVYZSu67Th2RC6jaSM7tHK83xhvDnBEx3oGZS2g6dQQmJ68bSWCfDuyAo4ddpNcj1U5G4zy5wcm1At",
  "key15": "456wm2Gk5EPmk6Nt7yUUgDUyauothMr417uNeErFbEDQY8XZH3ffg79Wc7MaCWqn597dVwdeL8hAaNFFTrtAKmLX",
  "key16": "2rHAB8XZk7DoKcdnfzoBpmSjWcuFkJB1kDmBvcWrLYtk3xMPDAJVjuZVzKR18JSVyUfjUYe1MrCKvzkGWZ6DD7qX",
  "key17": "2MsuooCQZVfSkmwJsmEmCAmmAkjZb3sDaYGMCiPKesGkeef8fGXWTV9d1TLxPvMxKRM3Ub2T3a8uHSPaC3jypprs",
  "key18": "2JA1YBPNtit5ixy7LQfhEMX2BtzVnu4WrvVKgUAgBecqKENjtiN4NNTHHimaUhG4XJHa8mL69QgQbm6RHoZxpehm",
  "key19": "2AMg3hQqxHTSHiGMhLqKN35aDj7EcjBYUxVXCyNsKanxWWbM4i5pvaKdhMoSRGUM1WiRMwggiaAh4CJZDpkhfRts",
  "key20": "5rnvfYSsztfJrnC3H1LaAVKG9o1SvUcLeP5ZYWavJfGBQZ6JzemAE2g97Mn2CqaFtgy5ZoMgaEvKdk7n2JqLbqW3",
  "key21": "azTwuAe3YAjQkhgEuG4GTnuR4bNhB3HanU7sb65p9hPryrwY6oFdJ7thhsyiXoeVa7JueTmW4dtuiz85LK2VPBN",
  "key22": "4XJ6RXYmZ4H99ZCYpSqZXZgYpfubFF4G46qU6hamSETSv1WsDZTmbxmNxt5p3qRoZ2GA6RvRAWVER2VWHa9EUTxc",
  "key23": "3x6qzTFcn1DAiqwHuFvRyj7mLy4gdE8aRffGm5Y8jB714XJhKTHbSKKji1NFBZKoKJV5t4tgzjR5S5SCCcByBf7p",
  "key24": "c3nmt3qWCwjzG8cGzmxSwQNaJz6Mcjq1ZWNoV8tXbzArzkSEzyaFckX8KDmHdUzzWJPMPUVF26AhZXRFV4swBnM",
  "key25": "5S9CYUaWPRLJkFceEWr4ecz72NZrKWXCcLdp43LvSJmGRT87vgmN9fFeQ4N3U54wzc1VTFPcC2LosyHv3TmYr4Aq",
  "key26": "28GTeodcDH7a7AWyC23yRTtkN5cYvdifD9g1z6VTxzExTPmzCeGpGjeurgZu783jWv71FC4anx4yUrvUyFB4eJNK",
  "key27": "5MoxwQ9cZP6uqWQMY7ujiGMfXNCUfScTsDJKYDBhDCFuWa2E1zyKFqCetK3jNc8Y12ViK9h3cJUiH62Z9nqYfGDW",
  "key28": "63bcgZ6macecPCxYM5Vg9eXHtfX9T3LuCpJ3EbZGrv75yqSoCvA9Y3Dtf74at3vLcE9wZ2zuqvHYNpW7xFhBJ29L",
  "key29": "xqctF8dfnXcmRzhPSzPcAhhA2P1sMKcvFvk9gXr5M9YHvKcMJ6qcrAspp7AoVDUdd4X2E2StquEar6b9Eq1tE3E",
  "key30": "2z4RmH6GpR1bZwdKqh3pnGwE1vmJCE99VGP1zTGzkSob3cRPy5EEcQqsRP1TA6u9S4p1kmkcSw7mMYG9aBbn29Yg",
  "key31": "B58RN4uGcKYNPi8onwi4UJgZF8HX821bB1hKc1PH7ZC2PauPoYMhLhZjoKntuUCf6ptGP9jH38KtmaXwBTHSDus",
  "key32": "3gjNYQ3AdYNZ4oVjorDey9ze2NET1ZFX84oH7ypUXTy8LEjDGvMHbC3JdciJj9NRPQr6Gidb6t8AXCwd1cUTsjkD",
  "key33": "532c9Pi6Eh8GVGSBP5r12XiJfywGmMmBnHtRRZxWLVa5awiboW8VE8Ms3en9QECjgTQHBV7mY33qN5cPYjmRwihQ",
  "key34": "5KhCNq54n2uaorzVtsC4u7LfaZNLncg8D2SRoX8BxsonA8qBd2JpYDwtr2sGENuBfXU4gAM12mdHed8R2qpze5b7",
  "key35": "2W91XCkcbKA71Uy7LV61oDzi7bkz1dzfXJQwbtVtyofiJxr1LiBAvLXiLkj423iZtHyJz2D7hfiAkrxm9U5gqBg9",
  "key36": "qme2BuXMzKWteH16GLgpTU2mzH3yLiJKBz6D85ufg1k4sbzfrJmXpkPkDpBcgHR2Jpy6sN8azkTP319CmDiRTUL",
  "key37": "5fQHtoBH7Um4u4SmVGnkif7tsZKwBW4ic6FV5ZWfvRexm6w6Ax2fxwvubYXxWNJASn4r5ezrFCoYuAJkHwFroWFb",
  "key38": "3gScjPhGHmuBMkTyxUsRFyCzHSvJVdFVnJ7fPnrFVceJebDXmxwntY7Lf6rUht1xatxLZ38DLtBcPa2yuXHEkvWL",
  "key39": "2wbjewTvKir2ZHHrMFLUb6B4S36CwcUMySWRpVrrpXn6yKMGUBevrDArp482nRZnjKboiQ7SceErdS84ULM4w9kv",
  "key40": "2qk5QhkCacv2D65yfY1kzESBYDM548vcr5xG7cFuEkN9vwjjCdB22GxDELHBk23Z29qyhdE6VWT3f9T4CXtdz2UX",
  "key41": "4JNBae5vzAM62YXW29ekW6vfSvwc34Tr2KG1o1aWkrsMZbNeT83DVnkCNXUefU5nqsXTWfnYFa4LutXzTu2EL8je",
  "key42": "4cRqsLH6dCeWF2FFF8bGab3NxfKj5A6HuxFfjyG64WYkB7j4KZbpw8akjr9MCYddKtJq1GEyuRnzKS6RkhAq7Cbg",
  "key43": "3YudkhMqsAeo6Wy5Wmo2Bu1Vsuu1YmsJKXr1PHepjJp1zYsEoaHSfmqVC2xUUXurP2pHzJxrsUWR61XMRfsrDRkW",
  "key44": "3ijuYN5NSw4A9Y1R28YLwerNi4Ks2U7J5RGQiM7g1rzDW5naYzZmAQBF95ZWseQix8y9Lbax8ySG2RbQi5CEDP1V",
  "key45": "4bwy9f3G3qhKBxZuzsR5yjSHkwboqSStE6yqoUA47MUgrXqs4MycmbxU8SX18qaASVQEsixpaMEh8GgyBqGtPHsg",
  "key46": "2XFRizXYTmL6eqAUAtsjTCCiuAYEuYYJC8hbFDUzaV1bPF13xrpRmr46xL3WjXL5zSL7S43WtiQeZxLj5vKpbcVu",
  "key47": "5WEti9FhYfrbXqLayEsYZkGVU1YnX4ecVE1buYTKL6Lq3QAvV6nD5Wpot5gUUwX7Uvaog76WdBwT22iHioZ28ayj",
  "key48": "4xPY8vJnP7X1cAmVoxbcSrrSvWujnEYTnccyYFU85sTuwiX9SH8Zc4A54ZLw9ewq5Qeq7oCmGfLP3vLtvKckrH4t"
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
