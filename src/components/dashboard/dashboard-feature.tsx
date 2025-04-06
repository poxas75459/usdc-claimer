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
    "29EaDVEjtgdqj51KSy8cn3pqdNMbzqFQe1i9UYyP7yhfSanjA14Zj4CsUbajG7EomE8V1dnfyGuVvcn4gT2Z6z1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e6UFsj65vJP6nnNkoeoADyBmRw1Pysrj1Fan314fivGuYrqYtRGXxxxSVcbmZjStkqfJEqhoQrvPG9TopBUWyFY",
  "key1": "kF3eWeipW8fLh8k2jqHRTyxwfKEwxuhsvB8qNFre4BuALMYg1U6QPFZQuovrjx8A3h8Zz8Bs1TVDMwvGGtMz3kq",
  "key2": "5jJBudJ9Mmw44ouqhYwFMLtQGWgcjEfuDACda5wfm7WK5V5hE6e2FVnkEX8QLrw8E9gVTUE3yQvJ2TmD6qL9t4oF",
  "key3": "5f2NEoKHxt4sMByeeEPX42UqbyGQ8GJ1zyeSBwWtTWprDhu66EDCDDdVMC8xwKyH2w2x7pvR5BSEQFEZw3tKpsKD",
  "key4": "o3W43R3kHmw8vZGKFhTB8VD5Riteuiim38AbD9q9aZitM8N3HECCb4YqWTq9G5cGjTJ1HnVLM1mR3JyCzj1WCKj",
  "key5": "3TNUpEaGFAXETq2zAFeuFKmqXm7jBDNu6d3oeTLA9UjHpvQeMa7Kcij7PnWLsAjuCqgmELZcgKFsCLrFbH34jmYp",
  "key6": "2TDGZ2xKVPsJ9xXmgdqXELBuR2K5mpP4HXjzJY234zsKMCKpS5ZLT3WSNR2f3TELaTabjGm7kuXFzbAgQ6qwRC8W",
  "key7": "2Gp1PxTkyF2vBEaNsNFEcJh7FTmSN6SYLYB5338FWD9zawu3g6oYdm4Dw42nLmsMzQg769yMYPnFdSLJWy572sUB",
  "key8": "33j3nzY9wTsqXsiE7CGGgWe6rNkoouoP4RspFzdeC73s93M9S2254wq7CkEXmTYwfsXibhMnYnBXaBWEd2Zxvz4a",
  "key9": "53PrjrfiPd1AkuzFoMFKWYfgxL8UiMND5DYJwPuzyMby8PXBY8QAKFtcHvznoVtqpjjjVFTt4f7ypUT7gAPMZDqT",
  "key10": "5e1xjPVVPcTBPF6UoFA8DXjqZPMdPoY9e5VdGX4AK3pD2voXxai1vi84Ta6YHcvehtdKeHvpnsAnUJ71nukSkr3J",
  "key11": "41KxEQbRTkzRJowpPHyeM2dZJ2Tr913qKvS4yXJUQB1bbLBPnvjabnxbnd8TtfP94rJqFNvX1gFn1MxmMjvoGjnz",
  "key12": "tYKPNpMArpXgBdCscbcGfst5Kb1RFSsKcfU5WYjqMYwD2b7tfcANhUABb9hePtvEvDWs6LZBvra6Ji22mijcFqb",
  "key13": "hSc5CcZz1JgCL9Mjq6LjYyRbsfto7XrWE3q8tN4shyT4Zup3rqJZZbwLmVZ6tMzRsL5MYGycJfrr4V8jPbDZq1a",
  "key14": "5xw9iACxRDzGtSZgv7H9kTVbWx1H64fSqY5ipqUACnCiq5MAPbHDJFyqA5yMpSpH9tUJuvbnXJ92kpdjnBX6mBQ8",
  "key15": "4TGGYCvvrnN2MHbB1ZrkxPmTc65t9vno4BWDqQgMYfp2PGujuXArYJze3DWD9tJEkgyJFq27A1FjVUkpaVeJmi8W",
  "key16": "4b1ABwzgzfKWJfUvHw1R3FJtfwyA7SzN8uMffA386PWdC6c9ZF5bGSLvtqWMp9FqLk7qLMVzdS2fHka8ab4hZyWq",
  "key17": "3Vvz9bgvjMYZTsHkzb3PuG8WTQYsDc62C3umX5sKQXJyhYK5RLURas82HFqEE5ZJrqDhZ6cyQivg3ATogJH3SZua",
  "key18": "4hjftgsB6NLJekvGwR1JjUnUccw5i5DQE1aww7yDrFnLcUxoW7Vt8NQfrLUCZLZ1MTLDVaHELcRZReWMiAsPjzPD",
  "key19": "3rTzUPUU9d8pJGZnzzBQv8cvdq21RWHeXDF2UDKiX62BYW7jvdMQt4DNZEQfRcZPG3PRZhHjtjVZ6sBcTQimwbse",
  "key20": "3Vh5DPBCorxswdtoWe4FmWvvG28WxtvLrRekZGsBuEiowM9BKkd4ZiWkZc6YtBibL87mWqLXVGjmqQmaR91ssQJq",
  "key21": "38nhhY2XVUK4QNswCbYBSUBFR7FiZBASAnb3crQPfQaVnGiLfXmvyu4hqys1t4NhAZTtZ9hmSRmKoi1MA1JzN5eh",
  "key22": "3kw4Ljr3KnBY5yUGyCeErex6RJ9tK8wtmv8YtgPwfsyws5s6b2CScPBhcgJiSz5sfBTVtcA7D5My3A8SMtkUJ2Qy",
  "key23": "3TKw8kgnYWcExPfFFzpJHv2SiLJqrpUTDU5EaVHj3TjgF3tCyJPP374eF2gzmWCQEMwspkZEu7BnyF35wKuDjc9C",
  "key24": "UBh9FVq89Q365n6VkqETjwK3GJ6GLQGqTqDHXbLBBTTfZwAQBzKT1uXD4w33khmDoic81wkMShnU7zxSc1B2t8t",
  "key25": "655yHqzQx3k3vteLv1ULZBMcgFYDCB99AG5nKVArM5qB2qQHzWZPPBtv2ieGbCDizLtupn82wQH6g75NnFh55Ex3",
  "key26": "4KGXkS9YWUT4ta7j91sXEFSMw7coRBLuBeBRb5BdWiV4dbYGSjxzqYsQe1MK9qzDd8FbkJ3hzw2itA2u1AVJtmTJ",
  "key27": "4WgVB8kz6b8opFvTQb9LP7bjT2TBky9BDc7o24C1RiQ11TQ1TghjbTittamjAbV98yVCDC7S5TE1by4tMGC1xVjt",
  "key28": "3vyXSLMHK9SbyQJMHL9BnkRezwdT97AzMBm16BjgwhUcQQ7ZPCrcMXVFsYYYdo2PrS36GCmdTxm8FJEwA7rdHSHT",
  "key29": "5Azt9HPLTJDgAzJzz1KU5GE3G78ZrUFdikqdzKV61t1MBW6ci9dDYLaTQvPHWWdurekQt3sXhGAqShnEZY2WAokk",
  "key30": "2vUwgJPtvggFMZDvwVnR1d37nciqo53r8dxr4Lp2kjD4HtuAcrvJVoUoUnEEzT655GPr6mAPZXwHzg8MMvwV2YrD",
  "key31": "5wgMX1CHFxLo6PxwyhCsu9mXxiNPdtzxQQ539JPRdHyrv7efd4ayzA5BQVApEcVEpL1sq9TphttwUaGiKJdzZeya",
  "key32": "4wTKoHQ6EZsD6SHVAdoq9yakSKQN3saa6gWrn7bAxFnHxEePnJj1iMbfjoLThShUbgWQYDCmyQuhnAtwMEiQ5BJn",
  "key33": "47Tr2RUaMzyPHwA7DaMW6snPe6e5aBvjHZ8J8b15uW6R7PqpF3PVoP7UTPLDwpoa9nE8rUUm4YZmhPPvv9x2Nr81",
  "key34": "5NcBiKBuDkwWucXhrf19xwtTBhojArGcgxQoaPMi18f8KQuhRYoTAH8FWzCcaoDwWcUL8Y6xSFLastLxuTwwbh7n",
  "key35": "4XrTbGyiqfaQ7AGcDkxb5TuqRPUFTcSU6gYv35xCr36QgrjbTzCbe1wzqQrzZkYurJB4riFmnpViTfhxuCjGbAPi",
  "key36": "4HBEheh3MkXvRAf8uDv2Jd9n1M4bCGUpng3mWSx6BzWALaviBigDu6wXZPiPCMWN8pniFbSH6aNSYBYrAt6jVsr",
  "key37": "ZpPWoc65i2qFFEAsRXShZ4FfbsfxJf4THrYerqo2Q826LsNePguHgKfSPPFj2wgGcVviTTBbK5xaVyZVJE2PXzA",
  "key38": "LHhjBbv6WC7yE31HwBgzJRg9V2MJx1E2q9GxFxF8iYSLmyomNhmDb1nCfSjDVqb988ooDMAu5yxwR3C8YUenWda",
  "key39": "2CHudtKLMJK1yoJSz9sNrkrABu9w2fXmYa5RGwPLMDzHRz36XmY9wZQmreCyxQCRuyTg88tZxXZFAYxuUYT9S6qC",
  "key40": "5H7eiRMucZ8XNHmXs2AxiZZHm5esixZwMo5pe7TgG12PU3ccvR95JtD3pmFT8KCBFgaTwj8u2d2zccsJE9zvfSKS",
  "key41": "4pRdU6CMmv3mZDaUwgm7ehTH1wLwJZ3oVR78aeZ1AHJUMbHkx2d2NxZhU5TgTBcBYGxkQLnPc6KYeXGVE7cZTUHZ"
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
