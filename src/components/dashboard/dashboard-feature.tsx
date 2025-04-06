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
    "28dkcoANUJc6Wdgkj77JBW94LiJTxQfnbfrqgANt8bzkFL4nPmK69PfKiMyzGssQt6Ne5N6ktJuGKqA3hfg92m69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3STkkfyUrcHACSDvWomDgy5gSMXcR8HKyEFuuuZ9p2y5v15ZfNgcYtiLM3x2dpa8iNKjZoJUyqMoSVnW6QW9mS9H",
  "key1": "4HbNCiFEnxABnTAjdaTFiqvSzwTxgsxWk6yYZgnLn5SQso9MiJKRRhttd8TzujEUHpd91EqreHjTgMrH87HhdH83",
  "key2": "53K9NJuTkcNmFrBjKV74ju5wiAqcTM9ni7WKnWej6ZdbMGbYRQcRCBc69Yk7WxfbcoeFGb4PxTis8ePmLVELCwEr",
  "key3": "4XoktRzYepDQx2fVXyJu9RdnLoeZA8YH3o5bS8MrDqZdWnQaJVVipjq9X8X29JGkUCX5DXs2vqwvXo1yBc2mtbeK",
  "key4": "2Ch7rRuW4wpGSiLBGrzENjPz9e9WEsVorgAmKmWMk5pXhZ5q93uv7Nc3j9te1Tq4i3W9PWtPp5YC48WKz2tXKCYx",
  "key5": "3GQ75tfopjog5VwnjJAfzupYqkTgdCFw5QDEUz7N7BUAPCb2YYsxiYyreoZYhLufr1ULvqv4V9xfcDgzpcdmaMX4",
  "key6": "43Fsvzs8SQkuJtKDRQnD8DSsVfYafuqHaGSKbcxiNgHQHL4gb8LnJeTqwd1FTJCGskwW2u5E8anmQj1QAXByC6EK",
  "key7": "4BqWs7xA3fPuoxULLWcQM9o8DrFtKdMrTjPL24yvXkNRzRJkDf1DH8xXunBYPrYJWVZirfKBH92QGeH4RHgdww8W",
  "key8": "5XzJeLVM5BUR92Ms9M9rtiZXJcQBpX8L39RNDJat1ouvggs48fHHuhsdwVBmSRLPSEcd3TugecQ2haK4E1xkooux",
  "key9": "fGj5fwqYCXsMQh7wz8JQG2eZU5nfprmhPY5hsUTuHUEMVpGknqBkK4knCsouadPGYPXLdRvVnEHAacevn6hHFgX",
  "key10": "4yP1HQFoWo2EyTmAtdK3ESxXhRDUcprkd3ysBvtRwGRGZCn42M14caaGnCCAi6yh2oMrNpQi2mAGfgNXPW3TCBXa",
  "key11": "3LLDRJa1LzhZ3AzX6K9hhBUTqQBKs9fsXL9NFAZCeVHtwRBUzWcAjhfb1ipaCL76dtvxcJx6ctz8Yj4GEKZnzb1x",
  "key12": "4Bq291RuZpYc5QuWSwSVhtNe1A3fcYsA7ZnnR6caxyHnAeWGLQPMCtXNKL7EEpyFCnxdQPY3fnrzDyx2iVyrr4oK",
  "key13": "2mT8ntoxQf5Vt4yXTdiveEPgsJAnJkvyv5cNTzkCTouZR7oPXZY2p7MDnsBbTBL7Mc1fBSTagxBrduikumrfc71z",
  "key14": "4b8HiFxe8U724WdZNuTZsqopj8yubXmK7N3M2Y4XZia4Tyv9W5fRPrPnD9orXgNpsvwPQtyXn7P9ZGSeJoS2BAS3",
  "key15": "2xA21KiMJgiMy8fgovnoesHJWLofZQYhEFHk9tDsJTnRKR9p3sk5cAxmaWhzyBkmS3qfiUqsCNXGRbsGRxzbLpHY",
  "key16": "MoKn7jSuQRNSxGS48s2fyTHpLARyTgZ8VzyYo3G9favcTfnriCuNWRvcUn1H2ACVXevvh5iRbqVt9vVgkcnzEZP",
  "key17": "45VHwwfmVGY78xL4xvQSH2m3prp39RWet6RbT2J1dACHfwPP4esxuWVUVuJzVepsKmebqEdmZed4tN4J3BDf4RAi",
  "key18": "3Saq4uNwXVqaoHUkSCpQrmn8cBJvn8rsY7aPuEe7cgZjnNeofisQ9Hk48EgAradKeZGA7npskxHEd2PxzhqGMJ9G",
  "key19": "5svf1GYUYspfaB3dxbZHcqnGNCBynvT4qFKSKrx5BfdK33G2M5Az3i2xuQP3TxJepw6fm8um8g4GHmMrTneTyJih",
  "key20": "WrJqLaypBqZAdVRhYfrn4GdMWQY7kzxdWBGLthviWnMck1VCwmmK3tko1LBN8hh5UdDmEj65Kpx4uuZKTPRUCZT",
  "key21": "2FBQmog2qdNqVBxu3whdtHq4QUxsPFvBZUwxychWG5Z8e7Z8yNnf42E58xsTp8gMWGPkB6j7fuVJWEmv68XPYen6",
  "key22": "4ibG7MA7iDcUNczdbqDcY8v8h5PNSpyNxyiULFBWVjG3Pa2b4KB3pFZgUsHQQ6P7DNNqcE5bjnqLiAsbg52b2HDo",
  "key23": "2Q51AeD1SPrS8to1wLFHncRw3BAyVq1GLR8xcK45qToivjWFJMHMj28FppSkQN3PJxyfboH9Ef73bsBvDgbtGd4E",
  "key24": "cgaWUwKQLY1814fj1MNBYhSYMn2a6BaoPNN9eRvbCfg3dnJvT2Sk3PNXEHRnfDUZnNm7KNU8HrARBDd5XqMzNy4",
  "key25": "4HeEod4mrAKSQuUQFUSw6fBP7tognUiQD4tHQoJfvtMmGLjPVA78vPSSeD3xhDbg1fvGj5dZmEvGYkj8ADXJCs8P",
  "key26": "3jE6uJQrh7mze4uAaJ7NS33sYvRE2LXdaz7AdZ2CSGJ4sDEqSAoEt4nViYmENbPWTXt9rm8SNNEx5ofrPVCq4ZHK",
  "key27": "5wniatY5NEDoPQJvAbTsaWb64Gv2VcqTSPBWs6rH8jZ2xqq4jpW3cyn573mx5eFjnieqq7wz1rVfQMtFdenD5Zqb",
  "key28": "4CPtDTrxWpVEKTAVyH92wkmhJtyRsKdLougc8o4uvCCcuTufYRMPwGeYH2r7dPWjgCGsCHH3Xew61X3EHQQp8wbf",
  "key29": "3ehSTbPwQeE2eKDG5AakVd2XibVhgEnbVCiUhBKRaesL66wCWNF3ignAFmcBiBhs3texq6cyynNUpXuR1gfG2HTU",
  "key30": "4DSEbz2StxN91cR6gNFL3tJZSTm6FZLFUv39VCVNm7qpMSNdWsC1RKap4qtEpGJgaBh1HhdfgsF5aAjidX4dTAU8",
  "key31": "K71RpLnqZdhQAV8W4y1u3aQNWsH1ot1XXCQMqEWMsHHE72gttY8whniYZLLNdWnAv7KWr9FnqSdh8Hxt2Ncy89r",
  "key32": "4MhKMXkUwjEeCtCts665eqEe4dcEMQydzZr6ZvK9oiDAQVQ3x4yVjXEdnUsi6w6x2C3c9hUQMtZkqsRuGfX3RdFM",
  "key33": "29HXrQiQFAALUKcKGgJtpshi57XXpu8zDczGbnfLy2hkMJuLdrk98tkj3f87AWcgCsGyYQTZJFp7h8Nbr1nG5FqY",
  "key34": "46vswqdkCHW4imji2V6GtwcNt6nMhuvCYUGkZHAPCFAWZdA2aJThKjEXc26KzAH2Mf5Ufe7a1V3N7EK9YA13mKe",
  "key35": "5DNg54F4QLzNgh3tyH45PZjEbLjM4fGJbRbtwS798GA3CrTj2upTgBEQCFs2FFrGN3idTa9CawPgEdfBJ1AFhjTp",
  "key36": "2GxYMXtD81T7F3RfXp4igavS3YNA1MJso8YqCrXofHx16tct3YgqaVXGM5xMC1fHhAsAogHqG4ycA9fAhPSFLrtz",
  "key37": "4heqUX8QNAKeWcWFi6f49pjweyLukyv92xMkb3zD3eo7mcZr1H1YvX5yyYcr3R3kxCcjJNrEQQk2bXpEa6YfcGN8",
  "key38": "3vxXWTScJ3W8PhqVGkW9weq85X5CfVxRpRcX95Kocy894gtcYJMYSsjhndGnszxV7DPcAYv9vU4fJocCFQR8eHhm",
  "key39": "3N4qExmRaBbGXt5yrmpzf7wAmVCEBqceLqwwRT4QfKhdZHKNucFLeXeZP7nk6xcK9mPHZZcUyWTDX4SUdRiEg5A2",
  "key40": "26EKaT7dvecYjBR3TNTuFawhHzzuptviNAguWNxWAcVoAw7DWtnom9fmK7Fojk29CFwmVrWXRZmVk7XGh8BpuC3X",
  "key41": "288pzh5WSiY2ePhDhJqEJyhW5kg8XiUrVVgWR7CWy4jamJVZbxx65texqVaJiMmStqksts5WxPSNdZiwfUpWV4LB",
  "key42": "47pA5Xm8LtpNkXnE1DMVBvKLpREmUGFAjcyBVxsCfvkDxXUuGAGYnV6srcv7uWwzVvRF3z1YJtDdGnD6xySWw14U",
  "key43": "4ykP9enJdRnFVnWVfJPUQgjyKQmNAtwaueTMbT3F5416HwjiNPWY5TzZ6rKhgzsioMD4KYcLqYzYLkiKqBKpyKxc",
  "key44": "2hy6rTb3zNmdDG2zUYKZPEoAanofTpE6B4Ue6RRs2UWLNLmLQQvtPAXPm8nsMcdeLQvpnDCorv5qFHnw5EZj3jUu",
  "key45": "xjPbig36CBAYvByJQzM8qExd22HJTqAz8AcP6tZig4gMMWp6JUkFppPnFD2ZNCyYkdEKiHw28xwJpT3ykURPCbg",
  "key46": "25sY99ymMWhJw7i98Cv8hG87xqM8s33vxh5jzKWX7YBn6isBiaACjph5bcmvCj6mmkiLDvY2RbuCH7WWJQ5qZ1CJ"
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
