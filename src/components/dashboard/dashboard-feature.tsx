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
    "2jXHtfLvSZ4N6eGexac5CDBX8NshhmALqkX1S1hxP4pLxf7eJXt1fyuGSatqQvEjuLGwHtYRDUY7WYsg63YyQv3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZxXMoHGUVEdPk8ayTzjV1zzAVVDF14LQN47XXLnZAzTunFQuJSupuU5eEJnjC2NKspr49i1paTACcp66XX2rwo6",
  "key1": "FsdmR6rxTYMh3ZXvb8H9EvRuFZdz2F8rEJcQxui1L52zGQL4zXpd95wprUy4b2y7yrNSsGU9QfEmGYXoPBpNapm",
  "key2": "2TygXuEhQ9jRtCM5HnekacKcFn4d81bM6zRmycLMj2J18zuogS1hZUEdxL16yyvWvmk1t9whkRcerskajcJUGgQo",
  "key3": "47ENQp4hpP1onaxkem3WVpmKsNTdNaRnWb29118Dt1RzccLtySkZ44L6zkMNFA2sRc6WesEsspAjmeiMTWYpphv4",
  "key4": "4tKWbMFaLgu3ejzWkRLG1V3pwPWdeUCQiPC11MhLyPWxWGGRssFjcCkVJczXYJ3k3k82mNDQ3eYATtFDo6nHuDYG",
  "key5": "4kKuVp7dj98prMTL5viqNg5VGztXiGM187zSKvFt1dDVV2zKivvJnfcQZfisdGFHWrzmLvNwBKm2HBNqbFcSUvH1",
  "key6": "2hXF5WA56oAexgS9XpUnMW9tJjm7fPL5reCFMAQTQ1yzigK6vpbfBUcvvPSDiyhqutbiCwy4nK76nDpegyJ3nuqc",
  "key7": "3i5wyPhCA44AZUN95Y1tGgCDLYFUZTKoNgxHYm1F2zbGfz9Au6DQKA3jUJkHxDRi2RhyJ6w8o9eUidkEGLobmo83",
  "key8": "2orFQe8W23f187Fm2k5oL5owfwtgAbJkHqgCyoYhgXmDL3CoeGJw7wTiY4tM7b4eud6rzh27tN3yZNXo8rrbWGxZ",
  "key9": "hjXi6NJcR1JLGVJz5JEB2XJN56cvYowtMUawMh284fjpKwQckCxinj7iTX9ZNFoS37APhrwmYTu6kicankQZad3",
  "key10": "4NHByMCgre4CXoh4RE1CzPP7pV5b94ob6nCxs8xMAFYPYRZg9h3GZZSN86RpHD2ZgQc3u9nM74AXep29MNPkBYsi",
  "key11": "3iUv8xtrHaHBFrw8K8Zpq7q4YsPTUiAbqZiCoaZDEWkXnMZur5r8nnZboY8XJ2yr6ZHAQ6soUu6KtcMCnXR2jW4y",
  "key12": "4SUhjzfvFCFb4QuDZ8db7dxZf2B4et33mbjFH7ZfeAT9qmfvDAeusrXHceK4Qfq8hEX9N1TarmNrxVHg4SzZ7Jkw",
  "key13": "2xg9nDivmWzUziCwAA3PqhaAXiWUNk1iYBC7Zun7W8G67N7Z5Tckk8nfgRBx6H3ssdeZV5asoz49ustJJyhxNefw",
  "key14": "2C71vtiTRP4i8AHzL4Z2HKjWoKvktoGMbAgTzG6CYqVMnBKicYTd5iR39Cutojhwjnqp8tqUgVGmZGxbPVpDpwHf",
  "key15": "PGGrVxyeq5CRcw8kK8wxEWBCbvGtNqepa4HJ47E4u64iVoAezsBF2Pep1Azt9P27Ad177pjtuApJqZSjgr6aikL",
  "key16": "4L4oQFG5CgsaWsTtw4MWhyGSCXkdQ6zpE5RGMiwf4dwgbEJTWup4Jrz7srNzzZCs2i8QoTQrg7AtmCVKpPjZmzEr",
  "key17": "49Au3HcN5YLhjR6Yk7hNh9kwD9GfuYnN21sBVAgoY3KYPVVvPJxYeT1NnZuNp4WrQwcPZJe4B1fNQL4jNr8KtxjN",
  "key18": "47UHusmHWfsJJwDM6MBaZGrBtfkv2fuTz36x7wdaD8ftAd5coYNKCHY85L2K1g6qpXyN4PmMC923n4q37yHDzXKJ",
  "key19": "4FGaFYdX8HRSWJLwpq76bFq1znaZC9NsUoLSgKHKQi1pQt276Q9KX6wUqEK8NHtKAAiR1oUAApQ8K8iQqnW1r6qk",
  "key20": "2Rwfhccojkz4uno9jdiepi2v8MtxTbAs1Pht94LdXrvQ43xM4H6pQ8Qh614MFnnekQsE5Dkkn7VyvEHx7SKqiePr",
  "key21": "2vjiVn5Mbv2v133iXiacv1Zn2rRdaghgcWVcryChrkohsP9YKQcFGNLysQ9n1arNiadHcdqfEmUbfycCwsWw8Mbj",
  "key22": "21bPQh4Vrj5iZ1Yt16VKLiUjkbfHDUWrh4Thy8rbQXr3MYF3LNXJ94xote5NenUbH9dqcsC1YTxkYR6ML3QCHqdh",
  "key23": "4EZkZxQ7hG9bnTmyZtCggCxGSAp1THeEqhoBk18PXB7uhFguYSHt5HjZWqdpYuqfkTPous1thbJ17SET8YkwwoHR",
  "key24": "49TcyqqVWst7MQbuYpmbb5bsa8JWzxRfkCWQ14kegRNhsTQXMm7by781tpkttcgEaggrAhc59nwWmQaS64TeXrBZ",
  "key25": "27oQ1mqPGMmiuJ8hkk1uTpg4zrRJCo3ynMWmAqyZkvdr6ZT5LvRrQfcUmadNgrrqCgWkZ7z2tYFyLZacko3dTU2Y",
  "key26": "5EmkwSGkceuyv3rnVeZBVgeCEuDvP6Gt8GAfXGXVXEFq5bfEivPKmAjfP81TQSsWKQ6AkHHAXq3VYLhPeLcNgwhN",
  "key27": "JthSvwMdMGL1ufgRDN3pLjFWCewQhy9GMCsoHUtdRXsKSvSAcc6RvyF4oTRRjrjo73H5YqG7DWfxWXoJN9xrmX6",
  "key28": "39NZk3xJxPHHmXM1dtXWutuPyom2JgAjiXE2t4f3FevhfiDm3FkBuJdwuKcYswv45vcm9zt57ZuVzawRYRw7AajC",
  "key29": "3Q4RdQ9brSTpJ3YWpQfHa8NjqU9EdxP2Lb997LU4QgazPSHNoER1uaaNWRCtqSJ5jjafKUN7uggCsURrh6p2Cdpr",
  "key30": "5vn4GsyanqJ7X8hQkrUrXqsmBbeFirJVZjHL8gc1vAXkaSg1gqZk2vmkY8pGMvTtTTggwKAXRP9aQ1ThrUKTR1cD",
  "key31": "4YDL2nysahVFrqRDJ3p52iYDTbNjSzbvSAqXRa5sJEKLthLK7mvcoir966eWc6nimCyXztDMUDta4zAHu6Ebk1QR",
  "key32": "3DYiKnxze9XbpJpzkvFvfamMSZTZctCdin2MnvA5EW2MiuohBqPwSGfPevXDjVQcxXxpbncX231Lrb6ougJdBB91",
  "key33": "4BWEnprGTFgihTsJ6R5tPRQhSidEkUscUt643qeLT2uGM3zJ7VbxEinZ9n15YAnkh829XTMJjFMwKGjYYmY1ovDp",
  "key34": "3EPQWd9Pf2C54hesYbEvq3CeDe7KbhBG2LWY1PC1gKfxQfsqhZD83VeMPN2XAiyPhp718uL1CmoqwEnQhznf6C5p",
  "key35": "4gLqv4Eoh6yRZyL4KTZGJW6PpGFhTWdPhWuyeSBr76XfcEYvvtePFNnRctUnqJRkRLemUuRdCAHCnDyYwwEGjLKZ",
  "key36": "2ywX2n9EZbrzXiGNLstD9vxSdbCVivdjsKTUE4KmvZgynJcCRj5pPVAvFC2Qn661bNf4GwhEVMkdaXc9exgXZbhw",
  "key37": "2bcJiJy64TWJN972smW9krUKZiMYFgEYGh522nrGaQSofbDLZowd4VexmGhEm5UbDdKyEdhcBPwAofq1X63tRY3i",
  "key38": "2v1sUWGsKHMTh6hgDbhhPCDevKHXtktUX6AgNY7RAC2uRkf7ADb9uWc2gSs3DQ6t8ZcNc3WsogMgehveHMEi2CjF",
  "key39": "5SWC6gssYQi3T55yf54ffisje87mbJqJLmWEBQf2xk74V7zJYpftdCDwdBb87FnXmsJCcKd3ymv2QVrZKAW1jiaM",
  "key40": "66AjuW1XUvMtUmZAfySJaNt7VfwybFQghr5KSrHRiyHeNgUd6fpScYQJi4j4hPDGYhShvqNwkZGJz6CMXv6AeV15",
  "key41": "4YfqYafKUrBkLe49rRDPtfPMBpTG5zWB3Z1i7PeSoMGJXuuHNn2thUomUetdRtEzbdEHiVukzwq4RYPd7bnnFetp",
  "key42": "3YViKtucs2NKNJVbHQkpbCHxLE7M1ZHkDfADqApGEfUpuS2jkWMBN21bQRDwq3e7srqJCUCdJ7kYBiCxdgWTM2HW",
  "key43": "5WMMht4BDLw7ajWhowrXA71zLW6zJeLz7N7WwYMH2QmjFhFrV3RwR4HfEofxbJEBSvoXEpo8CXEbnmFsnaZturJ4",
  "key44": "5qGAFz7KUaERFe2hQ1JBUVHdrcarnMX61pvjjt9ib2EKU8PvuCmkjUtndNXDbFBFh9GY7o2zJ7LQBUchffFdmgPY",
  "key45": "2ZSQiQDVh4JqS4HrEmob7LZKeDCGmGTGSjKxpYuiEGaSqMXUVmaz1ZHrYmoakojbJXnKcaEA2ARqwrzFE8JAFQRu",
  "key46": "4hvEhs8S2Qt5XYdqy5FB5PexJn6E91wFs2rTXeQw8XW9zs4M1RxbJGn2QcBvsec2YvAuQ3MmhJhcn6nmBtY7y2gq",
  "key47": "XfUgJgQzMYuZHPczVLdp679iHCES6M2A9boAiLkAMyHcQrDsZqT4wTs5draFLhstZLgWhcgZi2ykQU64VeTmqf7",
  "key48": "51LjPR5eV3caBjJGZiAxdVzAweYW4jsRyXKZEDZnYfy1NadVDzeuCqrVs5W1kWqPkfeUnbvuwuTziPu6rVjJGDDV",
  "key49": "679HaTKanjzLjP9fMdVfkdjvsg4fNCgLpHEjv6BuStKG5ZB5JLvp68Bg6cxsqnHc3EcVw5jcv7V1CrJPVSz7YT6b"
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
