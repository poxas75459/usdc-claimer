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
    "31VPzDwiQrcRQ4Y2cS3y8v5bpj43JXyWH7V35ais8ySqdpQF4UCJKgvrAMZHe5jstwQAe5xZCpsrCmck2oUDRbda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q8nwd3CH4UNg6uh7poqKcRyot5Yd9YKFdw8gBXBbWhZ99GvPxMgVfNAnBTcQPpgcukSohPpniLaZUmWcJCDopYk",
  "key1": "5xx2ZS8eUKvsbsQbYC9rb4dTxs3SxRJsWqcejEBeUtAQUiJh24Tq3RHfjp9awtFSH4AyFLAxRVrt9DKgDwz1JXGT",
  "key2": "3ghck9EzUdsYALfoHpgzFL6gKFESk4U2FBEU3PjELRPv4S9bxG3zPdH3jbyPsbHH6SyfomrsUKo4VxZDh7y5KiPp",
  "key3": "5jTvPvB6gJmKwEf5qJnwFwh1UoF3PwgoHk5B52HoimD4tBWTsJExhdemG4UEHTuGcRqUvCJDq1H6c3DaRM37kaDp",
  "key4": "5C4u5XRqz3y1YGXM8FAu3Xa6kHA4EviZTY4CZH827ztSGorLa5GawiifUJaq4jTCmeWScSZsqCkjSDy6Koa2mZa1",
  "key5": "4TGVDn4erGGdt5PqCN6JZkQm1BYE95tRpfnvoLaVN6wUqVddsJhCGFJs6zNnuDLVnSWjPB2KDhrhfQxzBf6U4A8N",
  "key6": "49WJrnrk94jRyJU42b18Mks9iMAnmQSjpLEZXRdDiAFjuegqBn9AJYVnRwz5VBEx5Sknc4WaRsmxcobXBLnneCCn",
  "key7": "4D5YDpd9nn3CDQSJyYJpXaEGcR1B8Rx5b6USpgoEzhRJnK5FCz3Dbyu9urhNAYKqZGoHD62v59nK5DTaKedsVspe",
  "key8": "4ELjuS6WKZ16zDBb5nnfeXEicZ482BVcj4GkW9h7k6XAzn6W6d9nMZeWJCWHxPsR48SaK4pTbhSYhfBg9puMHNBU",
  "key9": "45reBNkcjwmz967RyhNDi3Cyk74yaF5VMEcSMoGkZpuSwAq5XzfvY637pAzfANn58NKwsQko7phhG51HbR5jaQqx",
  "key10": "YTdYtYvcb5MZrnbwQxpqmBfrWyQb7upQR6iHNtHm9aAfsPUYRge69dgws1LJFAcrRZtX73bAWxcTZshH2iCj7Sx",
  "key11": "59crH1mBow9oTvLWMxw46AppRSbFoXaiuaypw2oCaj17biyLNk4D5eqPVYP3Wf5M82oDZ9FbrdsSZ4NCn8Q6RbcP",
  "key12": "5Bhm66EeVWgZC3CFrGDBBorwDCJ3LUG81bgAtFmui5QEMaC8SysW79VkemFuNCvsSXZSVg8Mwoi1k87Ho8UMvi9e",
  "key13": "rKTnUr9iWGmmXxxndi5Ucr7TMCEHkVX9F4cXmevhwhqZthqWwQfp9EjfqFLfh3CdP6xMF2cfLv8DoDzLwsEPdcg",
  "key14": "4vZrwFwJPQdD7P4Z8NtdEMxJ6rAUKhdSBudzD3iXDbzgZaTnF2qKDnaF6VVVHkFfrtiyRYQRu5znov9TX24r5TJ8",
  "key15": "AdgRijUzCvhbfqtTdFGu1WdAafdT3NNd4NPk6mVYU3iEUFNJaeq1GpJmppQfBbshtfCBs8wSmSKb8kW2UwJHPi9",
  "key16": "3xRLXqQFrzrLYRpXYXXKYted6LHTb6PD6uMAJV5UZ3QHpvzsdc6U4GUJcEyqxbjLdjFQyDrH6bmCwA56KqUt3PBG",
  "key17": "32qn3QJhfhfypGrqmuqZ9u54ZWaYcnKynJrCc1XrGKLs9fMQxxnKvJUpEbHfucBqDJ6vbApVhEHjw1H2t6PGXviC",
  "key18": "3433v7m1o12Syujx19NQtZKA41gRAx8Qja5WenY6BD8FaCkyRLXsgSrxKGQf8x3PqTiWKTjJmkt1KF5YRZA8oEtP",
  "key19": "4X4iLkwKp55Bv5nUWTj9A9dyL33gfizL74717EVqLXGz24yB8WFEEUh5Md2Qp5YFFMvhLdFbdxoYc4uBRv2AmEv7",
  "key20": "2YuTJtkTx2DoUhYYnsrp2SuCYymbpqHARHMCD167cQGa2uxxgP3BZUeDqmYW5a1SQH8bDvyZFemXju5mZD5ppZxm",
  "key21": "2HakRn5v9xQSPuzcm7tU2tLpWxcmX6SaEYsi7JaNFRs9X7suhmstFNLE6dH6UwcdnuipKbCBVEHURK8GisA1mQNx",
  "key22": "g5KfhaiXZorFcvAJ71jAYE1NcWZGCSMP7KBP6KZH3545bHfVULKSQgof3vBzRcxnkuL7u78z1tPUNP1HfhcXeAT",
  "key23": "5UEyfv1KHkox5p4y9veZo7CHdVK3xVngtvmNe4YA5NoTtpvb1xBC3DJrtwXMQ8SjK51U39fejacSPXww7gAvvPpo",
  "key24": "3dvFJgLA32oSfU5eDNDAup81JLZHwPFZ3m7zi3Cp5RpVVSwxWznZQzCKk34A3LWVay6UdCKahYmk6T3FPHeRfap1",
  "key25": "Sos1KJgw4rT2sRsR1Ek8KKcTiXzWHLDvghwBCSmsDw6ZbFrmWZsnKxEjP2Mfy8bW3ZEhePW3wiHAKnarQCfzAVj",
  "key26": "WegDxyjnAnyJoFo1bueGYbiEKUZpsZsRyhUReKj4rrAjkU7ZXMFkLUgkRrNqBRBxM916Sy9sJBZvHVLeZCwz7G1",
  "key27": "3ks95hkYzwikpCsXwwyqVi9tp8AEmjcwKTFik4hQbPbGkVFCjN85HG7xhaobebuspU7cS2EYwC8YKNbv7BwWx4Ds",
  "key28": "KFWGmkSVrmVTscX3FgD8ucoAzEgbgFT5V1ymjsVYWDsZFrU7VFT2VPBGBS5EAK9r7NXpoVQeJqpNZzBrtdUqvkC",
  "key29": "iK3MKYb73tKm9PL3tnpnGmpZ7T7WiXGFMGyb9G2sFE8JbyAttwLQKbMD8E5vGY7Uh4aFpjEUAYu1NcudDEHU545",
  "key30": "48m4PY4S8BQoc7XQaLMWg24NhDs5SZwPttKW4HvsPDjzWLqckv6gCHck11a7upw917dJTwk6EHn5dqvhxzMkXHkd",
  "key31": "3L6qChuynFpeAxeZFXEA13GhvZdA7SdMi4xsKnBxwbxE663R8DG737edgDu6ugt6FFHfkX9Ffww9z6dLrAEV2X6T",
  "key32": "42nJXUEFjRfsvvjJ67ka8MxaQYDSN7emueMzN2jwk5fvso6eyDLyvtB22ESUvQYGgaYmtnYua36HCzVSZsErJEid",
  "key33": "35eEFxX9pTwr6RdVjQmvd8YSEfub4QQqQnY14GAfhzSF6Ni1NobM3JmbEisB9BeVzQ4QKLopXXBE3a9zCARzkb1w",
  "key34": "5NdiTWzwexTcB81K62m1WU4hpu61gzqiTzHeenj8tMvufnV8AQGR3Zg3A6U627BQaUgWtJRidZPxqiravP7TNmp9",
  "key35": "42YesLHSg7iiWYXHEvjCPKA6zpEA9vcehsrRKrMMwwgSD8jHc3dv8TkL5WkrAb4FiNcwU1PPpfPfzVqxsJ6jb2XM",
  "key36": "2aXdbQS1aJV4YmpaaiUznmCjKNSg6GFpi5PqXsxe2RkdJuEV3qgVaHVjoLCHnSGgSJUmWAHPpgdLJsxR1Mw8Z1Ve",
  "key37": "5BQYfEQPAWHj6kYUw6XZHL5kgAbTEhVYatjHSsEHMP4kGbgGhxDxrptTWkFkaSFZFWMR6en7b7PcdsopUUfbPnVB",
  "key38": "5KekrkUinTBT1Zi4ZQKNj1va8cx59WsGPbZejEYHjce1ZwCBbs42GdQbfK8puvNU1tKy6612FAJnkRnuJFSpFkWB",
  "key39": "ECF7J3AXhUdDjff99HZ4mLJbAQUVV2GtWuxVTaithaTpoTuUzcDmkG81jb9DEn6qKo7oPqbScKbQ8fSvz54Quhq",
  "key40": "3zKX2ztV3yvr4PheZENHUDJUbjToiS5GG53REA6S7vjHRkez74vTfrQSQjn8TiMQhMf4FScRGiwe5VQ1ninY6b2t",
  "key41": "2ur7u7LA4EquZuwYxuJeAHzVfLX6ingo5FrqUMSKvQPNT6dFNh7SqXTF6eiUTsFmHEVwWTv1FvLWEmpp35fvZX9D",
  "key42": "hD5Bo98wfaXxKPt92RgJawZdAB55VzHxA2GKgTmiDadNiTqM4FtgagCTsceGcFNgRrgsqXFeRzVMiFbUAaktvMv",
  "key43": "uFLZB2aay5HSikD3LRXS6HofqQBBjTnBjiWvBhowGFmTJByQAp1miYeFjFZNVdF9sDFz2XTkM6s8XSUnMpYddLA",
  "key44": "22773zi9n2H48XAzT6oYuF8vEuQfmso9SeBJueuETwgapNb6M4jpHD9mC1mUzL21JTWnDPsUWyi2QSAUUjZ86uWi",
  "key45": "tN3waLFDnLVomE2mndKGrPs17nTRh2bwHugNj7RF9q63nXWJvcEidpEoUkxpQGHrxQD7bU8xANiiZasse9CkWYz"
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
