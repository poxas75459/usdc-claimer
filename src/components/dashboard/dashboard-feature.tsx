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
    "2YKNn9SMFLYVR5e8V6NnX2vAoA9bGaqGQUHHhwzcDYXfYDHdG6wBKAz5AVFC85jabyTyGxHYMn6dFxm4ojo39JgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rcHhsAEq5Uw33s5bgVukaUciuDwA9SwRi8LDbkmNBkWwjRm9Fv5NPPExPo6FhbfyuQiCpirLfq6wH3GsLsTNqDG",
  "key1": "m5cLoWzkvnPkdCNzKaBg3BzeBWTZoPwcTCbXHP5JNkCx5TfZ2u6EGKcHsUQdqCDRLCRQd5CsJ9TDVYnvPB2UHDZ",
  "key2": "oqvZtXYvjavQ4vTh6HpHKCJrHoLQUzTzvD13R7VpUqLc3acG9t14DBpfgvZ4hWhCexnDwPNy3mCPY6gY9Yx6f4V",
  "key3": "3pBUiyQWUpnCVAZWX8A7ZFYFAM9uQXWHcHiZfDczCgusSn6XAbqpkbUvPPesmtAo8g88ohk8FBpbJpcsGhssptmV",
  "key4": "2hqnFN4ujTNrfaMCNvsDJrkN9g1ZG4UiSC6ZxF7J4VrLymxnZXWxZ4nYsFPh6bCNSCDuRKeXMQDQq6VDAi7jtNKH",
  "key5": "3Mb8nu6SjgaaBUkMxiUgojzk1gSPw6jYWrTkVZS8mEA3gN7wmJYffyDzSdweJnxUER9jwQ1hDMk6iTP5o9bzus8E",
  "key6": "23Tg3pN6ZXoyQXrjstGsH3YefDK2i9RTBCEiLWkCTM9tfg1SZ2xKrSXKCnmg7Xcy1yhb6jjnp3jH5xakKAvfp91F",
  "key7": "BMhbAkS9nwqU6WtUtMMP36ew9NA6jEfgT64hYSoET2adtBHqt31fruWChxndcp9LWnrTLUy153YSzXs3zsAaVxL",
  "key8": "3NyMgYhR88cL3Kgh94JaqC7kT2po59Nyss7bkWpPhDnCShsJJQ2tjvPR3stBfqLaNGU4NwLMwDcRSyNtmQ7yxEBu",
  "key9": "XNuUURvo6e3s63VBJyxWg32RdvvGXzUXwZ4oBVcDKeoFnqqzUsWVCWzJD4yA8mmCLf5f6eZ8hAR2wDeLdzcLnaQ",
  "key10": "PsHaRsdDTGaZgBhn64M5amucbxyCQQbS31R7jnHf7MTf7HbsZAvcbDwarz9d92qoEpu8A2VUhBxbfwMGFmHMKGJ",
  "key11": "4oEJXZ25aPRcydiBXqfUHwXDSnoHRqjhwshLYnxYrvz1yPUNAELaSpFAYVYwUnSt9ymFMkMsxdSBJ8MA8FhdypzH",
  "key12": "2wr8wqjKGQhYrhexg1zoWcA8PcQ6EfnN77j8avJF59PxyxTv4sz2LvGUpNM6xY1LcFiQ8T7Hh4cMh8WBTLv3rqeu",
  "key13": "4nf9qH9JDrq32uhu6GjLwmMA6R39RhruBe8J5JU5tthjyRrcNFpPQceM2BNCgjDc9Co6K1dKt2NV8dswtrEp92Wi",
  "key14": "tJoqHGrzzsRk6wqShLFQA2mbJ1TwvsaiReNJxoEAywbTC1Fw1uqKBfJt9CGxp5L6bZFA8qSZ9gBsxWD7KVTrWLr",
  "key15": "64gaDbcFABPSQqoFaRa2t1pJvD3ohCRKzeFocqECaM6fF1cBZc2afxdYyvYkjbfvomJMttQJp4EvkwxFnUvfTXL",
  "key16": "5dh7SfQvT5bHt8HjwdZKHCf1TN9uvNi6smmCpTxbfWoYnkjGFYamrRerJg1vtvjYKZBvYhNn3pH5NM1UytQJ3sKw",
  "key17": "5gp9Xwu4gcPkkDcUH9p2A9Eh5ddSeGEgb6JPskwhfZH3Strp9NwQSbt9TKzSEFTSq7NvboiwaLMGMusVgJh8F3VV",
  "key18": "388YAqVVq1iHs8yt3uS4rVoz8vUkUzPMcByG7ohrzVYBStqtLurAVs3WkybDnXnGn4VjQJ5cg8UTcDdPRemzYmp4",
  "key19": "5yWGPk9y7N73AkDztei3unpP9zch5QGTFvgo7qRdmGrVAJKVcM9aZfSm7qcRg3gSwPkgsYnzvk9SE9xNg8xUjEMb",
  "key20": "3QZsBZR8G23HcpoEBBV6NcsVq5wt4wmSFQHQMi84RFC55BZD7xjhrwkT3ZDRbuLEsXDiYn5btYYeZP1VUuEX21Tw",
  "key21": "5NLBKeRizBgEbgDJGccwRTijRMiDnG7ef16So8picVFpNNfhHSv6ByHXna7KT1BX1PF885iKpwP1QjoMKJ8uTa9F",
  "key22": "4PzSFCkYgmMDHenurZoQAzGeV6P2N1j9roBqB2Nqa8vo2YBS5rRBTiXq9BMKQmY7Bk8H1Kps8uxjzgSmG3i1cs6U",
  "key23": "2Ms6q3Zp8yjcvZBZh5FRxUccz7ANEZk3RYcCmuaqVv3X5xY4Jbbp1SeVe598pvJffvK7nDB6eAHqxSGHXA9oYnm6",
  "key24": "KMhgKPGUVeKzJE5yLzvF1Q8wC5KhpX71iYTXDMs8ZZC4Hh4VSbfWbxV9j5zmPZX6RUKwDG2oZ2Hd8kfskzUZHv9",
  "key25": "4zKqpQjWNayk415VQgT5JXUqFBjzMb8ZNANEzNrtYn5JZaZ7jKZSvo8hDMagonrVsNS7eM1fa2yGnV7BjH7gEHH5",
  "key26": "4XHxQkUnzkbEY3h3LaJmwfJ9mNqAzXeGb7ZTUwi7jcR99BjQVBkj7yzWZ5F7rCejv8q81ZSaq72zHr68CGMxcVtr",
  "key27": "4XiLeWS2gpUAfnVCJRJ2qiJcrjzT8RFUHqazyPzBSeYynMiiN99sLnqxPFfq5kpJF91y9dKoTZtbmmf6CmrRJz86",
  "key28": "2R157FdRK2q1jEFiXyat8D9Cw1SBLADUN1Kmxyi7bD6A8VXqf9PmsxTqssGYY7LfPMHcvk7hraJj6RnSVmFp79sD",
  "key29": "4V99h3y4n6zjysWWnB9dLsJPwRfqTuz1TXj5Hs51HRVkPrpa4ZcYb6GtZKXhk9dAZQeagp1Qsb6Ack48gXsZnF74",
  "key30": "22qviVU4xNVS5rMNFzjoBwudGkbYYuhaRMMyRBrwvMQgp9XCQQ3vwhsdPba9tyJS5Y5VV51ULS1yabTuyaA9d8Bz",
  "key31": "4GpDapghhq1uoCx46dzkzqaGWYz5AL7SxE1kn3cpk9uZUosSCeF2ma7k1XBf83M8o8VFYRDMYyuW3LvpgSW1hJt4",
  "key32": "5jqiNEM9UbTk6cxwo59MDmdKqk4Nfm1K5RQQkXnxwitkGCJ3fKyRWFqeQ9tpfm4wP4PSN98bci36kKKRKX17X7Br",
  "key33": "4BXsFwJVVMuGbzgh67FMgXCDSvF3NxRSfZuwSBERw4fMjg6RJMfEG8CrvKhJh9WBQcNGxwGf8e86fMA3bkicFSzK",
  "key34": "4UC8gkje4sEV5FJsEw6Q3uF76AKZ5R9SBH1PGNTbvLpewegf9myztZ5RTNNE4XJm5Z3F9rcUZvJ5gUjsqsBQBTP1",
  "key35": "r3odLdEvPxBA9RwvgF82kenWas5Xi6scQq7ENRKURF41dAw7vifmeHYrK6i7CbLESt2DjM3F7u84KRjTFYG84h3",
  "key36": "5dxzN1PLDgA32BnVEw9BgTKcAtLcAM5iMjpUhnqzSHoL6hvcucb2ExBHQpZpgk1B6hXMLwqeQmd4hVCyaJgsGAGd",
  "key37": "CbUEoNeDF7DqKFuCDnPdS8YtQ1vyzEjipgQdXuXyW6dbHyggCSCVqDv1w3Sck19SiEAsNNeGTP2D19V96FNjiNn",
  "key38": "5xS38TR7F55mQ9G3Vbwn7obMnNawZ1XZk3WLQWRuq6fd9UdUvnjJWorqoMdQXrtPa7hFX4731XBtAuvErtekFRrW",
  "key39": "4QJ3AwbkWyE3FVSKcm3q1gAZS2siktzcevExsEqXGbvsao85rBuu6k6m7EYeBLPy2CLoQukT6XTtuB25j1NJPHEe",
  "key40": "5hJkLrNHtn42mn9aKvGZT2Go5G3B3jDE2ytwmgtooEQVtYwNvJHnHyjw6LpVEj3fKG6pUaGGm9zCDaZ6T2KWuy8M",
  "key41": "JrpZD7cQG5YMyL5EFyMFSFeiPAL3CAXkvJgZbwZZ6nP1LyPdQzWCJZfjMF6eG7UbifkrpD2WzuJhvXA618R6eaj",
  "key42": "UptruDBwDp2UL55LaaDkxQLzfZw5U7PSFFwoyaKV5yxP8wsCzPF9WQ7TT6fqiswDVuugEBsSkXAjTS2SaiKVGq1",
  "key43": "2x4sGBQZWtaPBjhNFFhjt1h5bLe6mM7DLxXzNu7JzosEGpV8g1NCR5gZAHVkZgzeUm7y9hUutmxBy1R79Y9GaFUD"
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
