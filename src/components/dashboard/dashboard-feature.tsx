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
    "3hevQpAQj9qeTKYSseDrkwoww3MbtgvvUUMdU9AFLVqzYiCdAhFGQ588R6Gvsbj8zZLazfyK9a5yp3P6dF6rGqyz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQUS8GJziLTbcWeEcDi26rfNosb19EiQ3mQbsLKTrP2ZPB9SbzsUcVzWkSFU2TvvhMG8xjYdScnVGGorcokAEwK",
  "key1": "3NtRTdGi5mkQJMBkgNCgTp6JwGkno5NszJnsd4ovCoQHgGf1cLuWh1m2dw5At7UsonzuyLAtmUBFnWXBdeTgXu7y",
  "key2": "2eR4exrnYZYUm3NBd7ToEAEvjC2bJ65NgKTaRuR6iwqGgLeURcPSBpMxjqeSVSKJwRRehYQJqNLJvScKQpFqG9FG",
  "key3": "NjPPY2CT5wsnoAYB6zXLR3XPxZLkiysFLdQb3FDLewrBAuGNDnc87W8KD6oetoXAA37jhBUD2m3UDwbE9TrjTnp",
  "key4": "4tvB4kzQ97bSuwKNnP8d9tvYjnmsP4a4xJqAmE4j47PPzmVEgb3kgYZ5udijebS15oxM1xGdG96XQAaMhDFj9PMD",
  "key5": "4dGRXR9Em3SW4XPqwstsbYw9ZFGzTRrgNTAUNa1pibskrvtfyWBgvUhBn1VRdBzc2YkZfpfNbsWrJKamnrvtnNbN",
  "key6": "5GkLY9ag4HtT9pq7uEgLo5HHp1CNsqYRMfGyNG34sbkXJoxw99FQ7LNiVfZT7jKFPCzAmrizdH21Jv3h6dV3PQXk",
  "key7": "5Yp1SHhT3D3SBfnr8rdsLVB217pWodFeAninVhPTByHQnxGKwr2eL1pA89bfQnLc37kDzWXnauWuWwLYdzZfNyzS",
  "key8": "4tqDhVFtuxEnk1S2SNvCFPbdNwu61zHVjNeNqAuCWVTPjyhT4HrjttbMmZMnx9XpSejJcjhyokSTPXxVvVkxpNNW",
  "key9": "dA5vYsUcUXKyfMVYYKR5E5oxmRBta6fjfKNrezaDq5vCEaq4VfRwagBPkVi4q8CZUCxvhSuTvMSFewyUqfZiwZD",
  "key10": "3gBV2SisBLgrnFsAJ78GpRq4Ci8y3PSR4aebhZqM2Mi7YP2DqRnGk3qHRpp5tLgphrwUc3LTaSGnNrvVM79Ry2sb",
  "key11": "3MkDnXijVn35qJzeQcHniPrNvg4gBeJ6f3LpTtZDGG3BPsAwJut44tnjvR9d9nnr7NpLQNdLbezogixvVeJeXjyd",
  "key12": "2vkga4Sf6q8ciLTsscb3sFKkq1RFEHCVUNMJsBR3K8HKcn9nmFTn7Nad7t5EHi2nwHEChXmcLbJG1HaQgVRVQyCE",
  "key13": "4Ja5sFbPhMLFSALEdDe5cRZRqd3gzn8RNdDdse5efL3sgEVkx79ewDbzPzHco9vfm5ACpSWD5fs4q2sFcTNQ8cD8",
  "key14": "5Dq14skJJ3E7w6UrLEojrUB8fJjrD8iSwApofsNwkxgtUSEupGtKdRhha6WjqZMDR1tusTVGQtsZiNBuiYuNr9Pv",
  "key15": "5D5YGFaRiBZKokdMnAgqXTRDNVLynRqiNy1XNLYxt83vLmvAKQnKf8ebmxpcYEZWQtPha1PFF7p7MQrrMY4Wm5Am",
  "key16": "2pkCJ34cnmM81xY24EmAbLePvQLSNaYhGqgM14txEGzMG2CLoqtjj2HqPMTNe3hpNsom6muzs6xbs7bssKXYbu6s",
  "key17": "4YHmU6ivfhgvSQLBTWpYkj8hjM23kpTNaTQJRbFwjkHZ7gi1h4k4ug6SSGv9k8tFjnGeguiuz3dZiiJE889RtmzM",
  "key18": "4XvBSVViJD4NsYcQN7BEU5nx123UCPSK78rVemGzdFy8Toz55nXkLZaqMs9MYjkVDDCgQHuCN94rVrc29oqKY7hu",
  "key19": "cuTGG3wh7sg4k47H28KYDLFCSwmtKwrUFL6HZwyq5q8n7iEzWzzFTMMNuYy4sqPZxBXWPeK21McNCPBVSbzGkYv",
  "key20": "3eA5rK4YYZBkPM2s4kVyEkcDHtVXPB3iHaCVa69UCfmtdGyvzZxn3dru4JBRYvPLodGHQ6ET8tbgSNbpdrQgCpTr",
  "key21": "4MjD68sSNSsUfu7sLsJi8r1gUA7M4sZfhft9KTJWtpfZTJoWjSawZHq967YZ4xEdpoPNM6PSsPumirunECZF8qL7",
  "key22": "5npb93GAXsxUGN8abVf2DxthYHm6X2KJM7fkBh4ik5FowfQY6Bw6ZRz6vtBD3EArBSPqdpcaPxEEHiyGVcwJyY9N",
  "key23": "oRZuyN8Ywp2jVMNTfNsXc3RX1qhtRmi41YL9xhbDyfirntkhsN17NPhKcgoNjibmovi4YTUTgNgx2t6zc76MZyj",
  "key24": "4c7eiJDZsgt6yTNsaq2GRY88MoCRyfoHLbvo2YGcoDQvqTsSeK4jr2HM3psp4gnDnKcREqhkiQu1fXVigaXdKfAK",
  "key25": "4wPQMgqZfgyNisGvNUoK8gRTsa7jvX68uVVyakdquPwAHNeyopX68Dn6d676hc27foxReC76tnUerYx921ajwvax",
  "key26": "3hwrWLRMGbZWCLP9gNcQFjsqkXs8AXMPbrFz1yjxmm7qPZSM6TVpBLAnxx2VhPaVT7jkY4GcW2E7wLxoNaYDVhSh",
  "key27": "2mMWxP23tx5fD5vni8rUiWv9sL7Z5Wa1r1Mck8Typsw7dyVFgXHLRETb5zSoCVkfwCSWvihzA1t1fYYsz91dbfGN",
  "key28": "2tZMNiepPdmZepe2DxCBSQy4C4yvWkG6uuaBygzGcuCQ6ZK1SRfP1noCtEsfYGyaYPK51YxJmPn5LV3BWa21JE9t",
  "key29": "523kzjbLQEGLr3rS1octJucxFw4hBM68PhAtCB1Cq9X9C8h8zSV9kXjxMGuZJ45ymF1KRufufuVCgnewXNHHe5Xw",
  "key30": "3EirKpx2ykZa3Euq3KCRHkWmbhXQW1X58Aek7Abt8DS34uXAbrmAFgAAxeppzmw6QXt2eT2bcNqBE9HfAv86mP2P",
  "key31": "3dNggYoU39c1T11GwHkKqcFAe1yFeoaGza5dmrJo4znvnGs3djP7tUrCDtn4EyUUmyy1mAyDaqpwTXUP54RoKZJD",
  "key32": "2rBwEukCjNN7t4FJ2TLBXvD2spi3YBfMe7iWhxwX4cftMzC6xTHraKCTmjhgcvHsSbj7oWDBFYBhETttetEQxHJS",
  "key33": "5CM4chAscVBkoFsvfbL9iPH5aUUPAaCWwDT6XdUzAADa4yEp7EohGwr1sGm85WamD25LxTVnLL8D8W6dmmnFWDtn",
  "key34": "3GUq1GvRMf2sRJTzRBN2ckaFS37mbRRSnpxKpY5QjQ4isijxw7qBeWbku2PG6pkPu86B3qJtdFPwJbGmrwQ9tsyQ",
  "key35": "65xhRNBxdTGLeZHDZFASpRWGtVX9acZH88f1i8j59Jzc9NEnQef6Tg3Be7ZGacTZVFAaA7htWxTEAGLGDQYt5F8F",
  "key36": "466QmjBcQa2RNitWALavbekhGxCf83H37jZrBFptwWbqVHYBHhJFL6d9Liz66DHoq7ErDz44zEHxqReW9cXSa3S3",
  "key37": "22eYHqstVi7oFkh7PJp2dEEPZ2UkcwbA218v7aQHA2Gt5FDMg2FL13rP6mYqFhSaNY9kUKSr4N1J9wFRiRxY8wbD",
  "key38": "yw3x9F7yB3SzqRHdE2ajH7tGQatNAdTnSCM79bqUQJoxqreUUEg7xoybdZVqtmci3QkBqBvhBKbq3oVDJMFerUW",
  "key39": "5RAFuZScNi9xzQiKyb9BwZAQ1LohgommceYj1UQQZwJ2SGiaHAW6BRhGbphWbHN8vj1zin65nDNzTx5bqrmh4Bsn",
  "key40": "3hjYeNnhff9BVFQF3dzdiHrZvbQzGTMiRn1xEvBdqWd8YSdujiANTk6L4QFPEJhtdU9xKrvX5BZhShxihg3Ghs2e",
  "key41": "3Mj4PL2fV6tSTm268LgFsdU73vkgMHrY7P1RTUzbAeD8VDEtapXQHSx1ZenDxKM5XaZsReEdBcGtFwwYckL9aND1",
  "key42": "3YoJvhLmEg57vmeaF58869RRJeVtuf89X3ZWN9sHquGG7juFvgmhUKXScDu3op31G2jdRfUpk4WhzCXypmb33r5a",
  "key43": "5nRwwWgc99in56xDcPBSDNKEFF4f7WZ9pmKatkBqPf1QwUadRLfniK8CxapKGR1ZQkCh2XbSYed5gKiCu5DjTWFV"
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
