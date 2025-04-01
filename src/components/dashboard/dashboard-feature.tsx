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
    "wA3vHEeD1fnpVZL2YTGZGVgMatAprA11zVhqDZEvbAkqb8L95vxVUdfKTjd7WUiyfFbW9NBmtP4HsZ3k58xea5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWN6PrNQZc81iusR37jAQcMQvna7dgJRZMo9eEcTMo1AbtqiXNLtWhoygSuR3JBsPpGKpL2w1rsNiasMQNFakvy",
  "key1": "3SEFjZYpAVC4zwFAhkhokM6Yxu615KzqLaSLTVsM2STrk1g6DokXQUtEvZLEYtPYBKWbrWLo7sXepid7KeTFfVny",
  "key2": "3AC8L3HuvviZZchKooKwQswN6CsbeThUfh1r9ug6oXZRiEPXToptH7Uu73ETfVFfaHA49SadNoPqtBAXVg1CXtJ1",
  "key3": "4Z9w2S37W5fpVKbUfUehb3Jk9aDnh4nLACQWw4bHmKBTfhHu2QSZi9rdbYb7iJQW2cXQZJhbeDHAktgKR9E8QfJU",
  "key4": "BxbrmRJ1669Z7wgeuk4aa2v8f54qm5pTSuuZU2Q6H2hv4B6mQuo7V5Ab53fy8apBPCus1SJ7ykCefM5po46Ct8M",
  "key5": "4UU9oFp1eMqtSQEDBzZGXv5qcj1utd1i62psZ1z4yjQxXi6shPJAwo6qe7twBAWMRA7GjVa1u5zmTCvSRHx8PsWt",
  "key6": "3aPQKdDXuuvCkLZkBS2kc9ubESUfgZHn5KGdx9UDuEPX9unxZzaKT8btoGVqvQSViggrNLU7imJDvTN8u3QAnnCQ",
  "key7": "67mTyc1XyMvA5QmgSRvxdRKKcWy1ndiFxxXY4fnGwnUWLDEirRjdXxvVcYvhzhTEdgKidUbJRKb2KrPqweTPcsi9",
  "key8": "4iBskjCf2P9QU5yDuFTd1mLGM3Pm9KepV7CeBUuq9LASospQYNgxpccR1qSaMjR6FK8aSpRmQSQeiL61QzvnbKMF",
  "key9": "goAFgBtkDF84Wj5ecUKudif51gC7nVhSbTXzVRC5ZkVNYtMDhohSmyztxqGcpMr8bZjARyHbZykBGrgjvdo2eq1",
  "key10": "BgpmoA9wnfXoAoHfzXUddgUGzPNxPibh7iKMBTfdQeRQ2GrbZrWFytSyANkez4nFjMuZYH5pK7LasSDMpnGjVJV",
  "key11": "5Njej8RPBt9i2Xm8y5eGtFS1jucZhwhMEHkVxEiWkHrB1jiJ24xGn2eM13jhvxwarHvjspHB449A2BEdT2ZMp4BA",
  "key12": "23nXK8oU7MGBxW9k1uE1B39px9PUALLd4xNf8rpHd16Nv95xUy9oMinV1en5RrZMRcNXmiW2WGyGWA2SpGLzPzeZ",
  "key13": "3JPmPLmNVxu8vrfoRvQzkAPouYqwda9EgQ71YMhCpo3E8zfsXtZiAbe3WMA7hYkeaxiXGUjhZWT5wMLgdGJsfQD3",
  "key14": "uhAKo9gGhkTVqPfA12LpuJyHHnobPW2aLh2xRCv427oguqJsLjAeAtPEjTUoPSsq1KZNJmdCodnDCC6u2bmMYgW",
  "key15": "5xPFM765wKgJnroGU1Rppr7LJAXU3tT1Edmzy115M9kugYe4JRJxFByE2Zo8fuYcaeeX2hHi89J5GKuHVm6Mwfbe",
  "key16": "5nXGdzjQYAm1La5bzwxueDzv2D7R4vxn6dPNRg4dgHR1YEwHzJYc1wDUK3jYP3juRSrhnSLsv4pzsCL5kjech9BP",
  "key17": "CYXaMcuv2yqfQ3dDDmcGEjMiPPgMAvNrxbvq8fi1odfNDLnR6WHbgj7u4Ewd8fXjUkC8qRdJJ41GKzJ1duwYotm",
  "key18": "45NTdXeRi3KVUhXRrrQ5XbEobgAZdpYWpJxPKiMoMDyjq1Yva2KZGShebL6FfNgY7tTLmtxyzVgirA7EjXjsVF37",
  "key19": "3Prypqgio1tmXufCtj15rp2CuTWzHX4dHvQWAvJkbeXeAAqTaRCp9jeHBeoxTR5x2ePuFJwW7ViExTPVA1uLEzdW",
  "key20": "DpaU1hV6t35UdW51wbsHbYof5tSaSYvijvBTMzizwoB4Hu18LDzkAHZy9Etjuo484e8zZqDTyFvPW92XfU8tCti",
  "key21": "2fxL3K3xA6bCQJ8pM8de1YH6upyfcKpqstihvQsFEGC5ECAJDt5SxjyfgewfGPtDcgnwmnsSoddTrhcfPC3zwNJu",
  "key22": "3UJcdxRPTzMHELe8U1Auchvg5ritDZoa9LywWXXeLrDVnkFYjnWUQLeS4drcQGBoXJ4Fq4wFvRWweWbKVYE8Lkr2",
  "key23": "52sMCnoHqktWV7zpLfcqFJcJwekrgLhRgTy4g31eYyjqPTJ7f7jan6J1UkKXjrQgYi22fh7DxKB2YoCsobLtZWoP",
  "key24": "5N4N3dWU3ExZ4xEZMHYnS9zM64D822S46Ypag9aXn5Ci5EuVPqtbghikhN3Cp62Q3iYA2vCmLRn9xgs9hHctmu2o",
  "key25": "5QQuBPkeA9wH2Rx1xcR5ESWT9rfQcKTQQYyefXVhD41AaQCwk9EUSjboBQJ53V1FzfDgKEkMmzmHgpcpxhQb24JG",
  "key26": "3g9Wv1zcLDGnh1ycYkYaksmhJ4cHVfhewVrPChiNUVtji3mYUenu1pVrzAEGwXgZgs1STWzFbjCQ62Tq6JVPZZTP",
  "key27": "4RYz6fWs57Cw5KJmWy9ztf4BCNaZXucLmpLT6VHZDv9e5RDDUMrT8aXdi7bkpDzSJ1xGQ4Ju1vN4Ekxs2ULpzPHQ",
  "key28": "25Fcc2PJ8mHnvKyE3aDt3pXvnKeJuAKpw4jFCrMEDotHY1AFE8UvHH13hZw6cu1A7zSQNgVB9Epxaw9evui4mrgG",
  "key29": "2Nd7HkPu4fo5QoUkKRLUEiZ4NJCUoUdj2EyFzrdS38FRVBvkWuCy7LWaidA32twpCnTtTSiyiQy4g42U5UqbL6Fc",
  "key30": "xaLWZanQgxNGdY5KezWZGV47QsEik2mQseXFs1ESme1JHhJzCHbzLvd7zj5yrer1NAYLafHePTBHmvubPBSq2CQ",
  "key31": "ZUC65fn6L77TRfUSqfDW5scZZScmaswxN7jD8uY5qckf2uRCfPX1UfwaKxxsB6SNbnL52TboUoFoanxYc8v46xc"
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
