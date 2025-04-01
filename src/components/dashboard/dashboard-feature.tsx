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
    "2WhaHXfGV1dDxgNwG1ajaQ9oC644vyfaTejjo8Sa88RL8kfLBg4nH2Ypnk5mSrnt2uZK8L4zCB1GKZJynwhp9Rr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tjkfVMqDZCPZKXWdAq2Zf3JJLJaam9wiAKcmyNgW5aYizM5EXNUoBjSPJrsVMqovB3WFdNSY2ZxsGnRW4KY3E4W",
  "key1": "1mFbe58pKUn3CrLiKaJjz3WPF9LnJDMZmqLwYtxRH8BHCdwsKQHFHudASWLEJQ6pvR2UCpKbqR2tMJ2LhtX1CQk",
  "key2": "545pgY4JQiew3rXmCQHEnV1P9cBhiaJvE75FwsnCYtR89mroHzedoZQYDc646XHKhAVc74jDezWuah4TjPCRXbPE",
  "key3": "Zon7f4MKeANY7BMBd7KjkCadVNLzLZPFDTeMFeuwE5iueQmY6MZuipysHf4Yfs53bE91ZrgSrbRyQMXHbdxjGzr",
  "key4": "41Bi8ShXRusLkgDFZWy8LrcqeYhX2MtCamBLuTh8urHZt9WfukDt33kwdK9Z5mhFdD7NksrEr9hxw9hC1zKfnUvN",
  "key5": "59fsWCSXhQqTBHx5G47geFQGzWQ7vie1nuLg1VWTSfEN7xh5wyRo2fb5K1sZUiPkjzfcoTarJ8HPiMMTmkRhAtWU",
  "key6": "Y3K6UH5ajvYNBTVa8UTsNVmKLJhYiVPkwKXSLuEWwsWJKwnjFPJX3XyzB6VXmZfHwCtttxjUTpoyyfYrMKkrzZt",
  "key7": "46d9LAjYHqS8Ap2Rfu3pXHocPN5hgGNazVq6EwLDu4DzUn9Q3xiCuhwcbH3zgWT7dFaP7LHrGwR9jsD4Qzbboe2Q",
  "key8": "4UqkwgqZ3DXJVKeYz3y6Z71VoXLApDxxstu6yje5qKY4fG7SQzNeQ1qkdKm4fQwUYPePeovoSk9j8oZV5yB9Pxje",
  "key9": "FWi9j49gAYpAuaYtRtvHFyERg6o77rUq3mJ9phvSdb1Y3f4UM36oZcPvrSy8LSQ28Mw7Pj7zLcskx2Hzwx9hQaT",
  "key10": "2i17K4LsPfaG1dyUmXakqEZhYERT2YN2ugnge8aUrQjGciSXDtKhdP1CLRhQ6uxg2WG2JhMjXszkdTfmKVShWPca",
  "key11": "5FBuXhcDmZh1DxBDM6gznummhq6WfQV4vU2RRVnrUdiC7e8BCrav3hYqUdRjkwzdi235bzcNSinDBUovYsjq33i2",
  "key12": "djmAK7g7DcRkTu2Lo9BQFsj5ThGnBAjgd1kAo1o9BwutR2Ur86HpXLzwueGooXBLx7K4hP3YhgVHeeGJ9sJV7id",
  "key13": "62XgemFDSm7zQ87Dp7F9j2EmrC3b1fus6eQhBHFACSKi69r7MSqZnYs2o2gBPvGF9pM5tPasgTSbR9XAZgB5kwvV",
  "key14": "3hjx7WhBVpdSb5YkuEWcS3KXTXWjkMqRBsy4BhrX2NFZ538m5hWUGkFRuxewpmK7khFgMhNQCWPWdxv9CyKL88pJ",
  "key15": "2A2qDzJyBRhHYSqqx1op33J2MnGiuCcSWRUsCBXeHjxf6rPHRAUmW6dUkY4iq3QBqraD7DKzGJrGr8iv4sUs6Qmr",
  "key16": "3skT6mRWVZZDF9L2GB7bFEJuLNsnkT76ntowUzuEijzVKgwhY1rCtnL2xCDFMzuZU2ZFPnb7YQ54TRQYopQ69Wfv",
  "key17": "3MA4KcyGdqbDjwkRzcqyJPumNf2TNcMPTes4JFemXkmkVRkyXEcky2MUjLzeg2KajKhrGj749YPZAdiTLuG8Pd1b",
  "key18": "4vqTrnffCjQDPyrUmA7qoXjdLPqfEM9toXg9kbuDQjTqYhSYfuXv1YtwUQgREuFPtZRp6fvSwKvL7SbecfTCM6VN",
  "key19": "2PLehcEDgkTqXajicFyaYPMaH1dhewVb1JAxYL6kCmrHNLzjGdGcA79Dpu5LRBfitYWR4Dm5WpqMyhVq4V8rdbzz",
  "key20": "5NS5oFPuLnsVDkr23psEZAjW6GQZKZ7rCUfQ2wJpLgAEybqC5Uw2xDcQfo1U2EqDe4zdsz53D8ukhqedmTFtEVhw",
  "key21": "4PwFyQzRAGhhAUdGWPZWWaDESmxtZj6gyWqR985N2psAXLuwGejv5CEEV1GvWshmgHCfEwX4UrtGAiNc2iZ2n6nL",
  "key22": "5o6KKoMCjzHNRTijqhAooyqSXGpkk52mjDE5gi9j8d6p2hXP6goy8TxmNKipBpLfXH9D7RALVGvEMoXKz4ZQrqY7",
  "key23": "2RcGRx1ZD6ofadx3HerGY9yJcCC2Rs64jy2tjeWqQi6RujNtekoHj37MTGADJSqoYBhRM5DEsyP6CQbSqwpbcL9J",
  "key24": "5yuNEb6VLqLZxkQ7zSs84y5qtEKJTnuMArjLWHh4ZZRySaHVz14goR8tb83xLrTbVXvnyh8r2NmYrGsh61jmuFwj",
  "key25": "5yEtKoQ9BmfWjXxPyV3pNg3XFKprTgUQeQVWdetTQYSxAWpcA7YGKeVQdfziAJeYceVN9epHZ2D4r9frR9LCmUuk",
  "key26": "3x5CbBwcoWcNWRygs4opQg2AJWvi2PRrd3gyj3BkmdmzbP9ZdftxNXQ39qc2aLT5UsTocYxLPj3RiNnvbNpE6Fio",
  "key27": "YYdULiQVQrGUxr9uQDsn9PBeT2GnZUBM5yWCmCuxULLxtYuNXdVj2aApHfi13ZXVQjcW4WHC2tgXdZzrLNL9ZKA",
  "key28": "29g5xh2CpagjkoYCZwgygAjKRL17vuhnYCzNU18oXtH4dGoBE8NGRjhQEjK19pjsdtBAeWPbm6W8WbRLVu7CNrpG",
  "key29": "4n2Nuk5eYFRAw9mxTJkBwNjz2op8iprT95gNxZRahgdBWQsHKeYAii5rvcKFKstFqhNrabHtLZ1B5SixEvKJ9faY",
  "key30": "M8sFcW9Txsc3w5ivrsdvxgJcMB3gEpDePAUTcR7x6seR13nkRnV2GNpaSdCihzWUSnoXV4wejFSCN9UpPaQyskD",
  "key31": "2mDaZ5MwsvtPqXtyChVKqvMQCj714DdgpVZubdhXe1z5uWAccg1daKT3jRgxA5NxNnnkU5EqZ1R1LURAd4fVoPcK",
  "key32": "2LVRby8afkoU5nnpwETygMTeZ2PmGfg9AFfPHsHTrman1C57PihAGqb6R8nXGPie7gHisWidRwQou5VeoUCDKx27",
  "key33": "5EZXM5yBNDgcoAzWAN5jxuBHu67gokB1Kr5bg3ZdUHdDinGNBUomFsmw4c6viApkVuBdXdTVkBHPQ9X9CRZBNjog",
  "key34": "5iEmf2rF1Hkg99hCyc9oLrarq22v7JNUPm841YGa8uESeztg5PrKVWR48UGELamgtmEp7tgfitk51QFQh6defyc5",
  "key35": "RpNwDuT7cYBbCBeupqU6nf5LCTZBDoWUChT5PH3S6vRgAtGbwr4oqm6pjhKZUHNvGCTGp8YnkWEXq9aJ9uCHWbb",
  "key36": "BQaqzwFk1moL2gyyFf977EQws7aH7rTtaxspuPGRJfCDnJoT9XNmfSHqNvVNTAy2vCvEtna7yXVw89SZ7nsW9Pi",
  "key37": "2g8wBrEHnb9sSPLgKEhTJuAFpRWRdiCfugMRGh8QuTZ4qBHDfR4mHueeh9oygi6yo6zvmMcdTqJHhMYKiPV5UXXn",
  "key38": "4eWLDaBPNt6Kx2jaJztTxFA7Y7rAhvPQEER497krY7NKiUr71fQcSrP7bvGUmTa48CJK9D79MpPPQYNkgeNhSzZq",
  "key39": "5DSDdaEr1B4PjqpL6a6bhwpsHxKhEKbhspod8gEcJkodKPQ24G3WvNyDidSuoCnhhmU4UVryc2nFB5Dxemxon7Di",
  "key40": "3uRR9sYuWGsyMPrbMFUyKA9abyYLgyreD97fMWyDKUYrg66kv1uCd2tguUc5FFBMqG2vLGmGKEDNHvvoStBrx3Eq",
  "key41": "23YJF4s1NUistTr1HwVWt9QK1XMUGp1169eDfx4N3WZpDrzA27j37BKZRaAXmNm7kPYgsh3PRbbhd2NMjw5bcmnK",
  "key42": "2NyGQVHM3Q8SLKwK66tmhuuB5z5CR2XNAjjNftLDWPzcAfhzDYQJ8c5VgAwnh1y2EhmJrNcSsn1ry3m51h1Ks17Y",
  "key43": "2cxVcJvVwevEXxqZ7z14FmJ63EcDkFAGL5WWRhErCFHhvhqfR7AAd61uvEfqDePweWZbuWkYqZMatZhqqf4oaEh3",
  "key44": "4v1VpgdY5nmjCBC9gtpDhqGgVwfXwjSJ5LeMS9pB7KTHATw99ynB7bnZgL9TnsaihFV2YHQZf8cEBrmyzCjh2L6W",
  "key45": "5CKDujx4j7EzmJNngbcqZEog2qwpNq3xrowditewe3vXBMMaUq3XebHJMzSBLwPiRaAva7nhQie9DtMsbqGQexBM"
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
