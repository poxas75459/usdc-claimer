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
    "3SNGprbzSAqYJPjGXGuBt5gJsGBS5g39CaAnoc7nJSJAVfnWjzQJCm4pbxRsgLoqpjw8PG2URq4orszUyo4WYpxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9CLN6qHQrtKTRiWNF1NmTTmWXfrhJX9fsGJQpoaob6GCfjrAQn9xHKVCciWe4Vc2u5foWoDHJwFiz9vayFLzJN",
  "key1": "3r9MySMLg8uhoFyyEa9hbYifrxottDdL9DAmEjV1SKMYt9hGFS1Gx4YNine1JSpRKyfMx791E5xx5zpZSJJ9pALz",
  "key2": "3VJFfz5YcUke2raNPGNxk9B8gAY6Goj4NPEm4wrxPCCUJNfocc6e2sCt3Txo5vLvkGmTKgGv1ww3C9Mcwb6iRJZj",
  "key3": "39p6NqCPhF6ychbNoXz3B8mkKdFZxMMnPkg2PwtA7y58RwC5jS3jmNqWKLF8UgFTwiuJQTipHGLYyojCJG3PwLqU",
  "key4": "49azYWcJWhQXtCKqSnGBuMQHNemceNbyGZV2ozJ2md1VwLgDyaTNxNzKnaj61XK3BScB6Jjj3mF7Ye78ukSgWRmq",
  "key5": "4q6F4fswKgNhPXyy1HsBNSQ6ekk5AyYz2szPyFC4BnRX2JC16tEsejGGctWmrH6CSiAxeeLKyQ9cKKbvFEsAfsvg",
  "key6": "Bstpp37Hc2szNyHBirQHUVCBioxbp7hk4E5qdEee84EYqC97hmXsxCPSfFKY5f8GqgDWRiS9tA1ZKHKNBAeGbNy",
  "key7": "4XwDcnxxFKsAQVHj8NudmnpagWhFCUdwUiqRkA1SuNgmU6Y7c7SzYVs67NqV2GizPCBmGU8iUofjS6t4BmUyj5g1",
  "key8": "4gmzXnXPnY5mRer2YgEEXTwrUX8KkxZJvvbR6u5tdSyGwJTch3ffqpvL4rNYNrpvTRhApACtjeSvrS3nxUYPtJfr",
  "key9": "3xtjsrznwRDTuEbFc5q5R7L1xpRp1ipcji3mr7WW32VZPu7RBHT1UT24EAFuGwHcY4PHMy7zAVWizFnAgbLf3kv4",
  "key10": "2XhLGD9eSSyuTcLKovsoknBe232sxa7aBnhFiRUybfyZcVJB1acCHRRvJYx21KPENZDRe9ztvRM2SuRPiFfzRk91",
  "key11": "4rJvvUSoieaqtTA29r6cFJAXhm7LKFwJ7uEioUyq6pNdASVssBuU222pkGgcKQuL67wae9M8hpMJfd3hqK18txcX",
  "key12": "3HNkfgrtMta2FbeFykQiwa12EhP1aeE5rX9rNsK3QeGjyRJiXfqoQgVrEjq9edGRVkmooFGqJEPRzQkd2V24eKzP",
  "key13": "4JwXJXBWh8Dj4THgiYmn9FyWhuCsSVtTsfpDNjSJir1F6t1CDYiqGafk7iqZ8TYiCTTWEwiAgKt1zEBA26DSxAwp",
  "key14": "Z7fnaeDXKji4MEDBG4cECig5wvmWCrdZYumoz2zUDtUFviQPfPY4uFqATF8WASjD7RMHXCzoV5M6PYbyB8CHKeA",
  "key15": "4zC1w5jXXTVLUgsMtES9gy5p48NeJBiJz6hYZhxZqq5YdrXy8pUnSd5ve9c13xWX6C4Nb9ZFjbr43hweYeQQkWMe",
  "key16": "4zXYax6hZVcRdwofgf25JzaBMdeTDJ1NQf9aKPJxgp1cBi42wuDA5MFhimaGCJRYx372kApy7hF2N4sKLXA5XbFC",
  "key17": "Pz6nZRYmdBAUk8nfuqR1TBm4eFkJDBGTSurACHUvJttnzZ1QJrVenhuAHZ7Z4RUs95ULAjoddzesYTtEv3h34kM",
  "key18": "dxmoTMNtVFnSpoZYmkNyoVk6UJPc4KhrviMiCd2MWurXHidZfmjSUkguUVa8enAGZfKehhXaz8JqPeS26udTzsY",
  "key19": "2VLNRU9M5GM2YpUq3rTWHP82VuR4ZYPi8QvrHZVc7Yzg9odMRUocfHPLRJDpHTrppQMXwBTfRhCoXhtqwDReprSM",
  "key20": "iWXWtx3Fb7pqjq72Grx25VvdX6BtdAgTsqmRfMbXPjw9p31CLUjHszqaPVAEae2igxz1qCpzWnszmvikWC9DiJT",
  "key21": "4ka3srkWnJZL2Nr8GGM6Z892PPgWRUg3XJRN1LWnRdW4MH7kby6nNZgFR2aw2YZPxaCEZA3K6gQyJfJnzRiQFFT8",
  "key22": "36dXMgRu5CwiU7d3z9BhqMzksnG5RrpsWpfsGWSZkCrVSKQ3LcM61mxD1pF9DtUxyshVowanQrrueyCVFVwbVA3V",
  "key23": "2f8KizBzHRWyxGpTtPU6pbbvx9MvQhr1kU8r25GiGycBrfMRtgmFMkJpW7EqgyURTH69d7NBhUpDgvbeG6LzuysG",
  "key24": "52WmMvkrkpogzGzvsevqVRr3q5e1kaPsG96iB9KgitBhKxet1Qvts9Pyd6gAynJHcpYZ3nSXZcQb3KCooEhivMYn",
  "key25": "5DYAEwum6XMjHouqFcJVqfEY2C9YqNcTXDE6MvQ2pPP8UbgwPHA9mnMbeZvN7hAExqY97HJEsY34stw3wFbr8tyZ",
  "key26": "StL4foRFge4Kcndstwykh8D9yunVBxjqbsetHyUPCxmYKxxQDqrmrNo1fGy6pMjTpB6VCCkMhy9LtpEschcWsJu",
  "key27": "M5JUa5KuiSTWBd9uXHnHmZp6thewQf4dAtdJSBg4oD1RRhYqvePrTmzJgLWhpcHLjQZxmqf4YGJTeZNaTdTnpLz",
  "key28": "5T9zc3xVCQrNNLzKt96ZHXnfLLxxYNnX3BEMCbf8ubrwQNaRpAB7oSn17vPTkS1J8YihhoANRbc6DDX3zsmbGUuP",
  "key29": "YaGogwiHooHJyauB5orbyGsufKZqBfSAsot693V9DxAoKoV6eWSpCuH4du8mt7Hi6jieK5USE33rhzrb1t91SQN",
  "key30": "2kXc7NRfGriu2YBeaQTfpYbWFHem5SKsrSA7fjtt147XzA4ZTcRTuCevyLKMarfoqWNVoKbcqm6rnb5gLHrKrCF3",
  "key31": "27i7xFMeGWbGLnMbbPzH3e77G8JLFG5zBySUH4cCTUexSW2mMvWXiWucMuV5TwGcv3Wz8SeQ4Z5bYCf5VPvF6JHX",
  "key32": "4RGG1tiH9UNhARHkG9dvzc4dncFBgzJZ4T64Dzj3ovJ3bGKEiyRPyBshWCxcHnwUF65hfU91AAGc4YRM1N9rDCLG",
  "key33": "2bWSPduxi2QDKJhSyxD9uJ4iXPoKTxavxS1SCGaqwQaVsrcab2wwVvxvCSSNKiD6oMPMvQpdUaTPJRiuYTH8ytyY",
  "key34": "4Lg5YtoKNrLSjtdtSxukmpDAdT1mHCTcNvb4yy8xVwxKGp2KLR4jZLwKUgnbuYVV7g3T6H5MkBfUcGvgb5ghYb7q",
  "key35": "2WNo12DpipviSqodQpuE62VRMmLBu5CecwzuXFpZ4TzXqz6zmhvfRfqB8HwbehFqGvLBveVj4G3VWT2QnyJUDpbT",
  "key36": "5oEH8kyv1VuLHanJ57BWoJBEGtZ8mQEGmAmHNdNtHLRKpTmMT3t9aabhcbTGYDqFPyRmMYKrY3MRzGz4WkkPP9At",
  "key37": "3kqsPWQ62r1RjbfGtTjURnGpjYMKKQSAQ44BWM1xpKF1WQh6X2xh6eAYcSqDTFeDXoXsBGtndvNBGrG3aW2c8YQ",
  "key38": "4qVNHGqteDHRvfEhTiBR7YJMzWmVJV4f4GAYP2KTqtA1wFftb39NWHdHwMe4rGXNAHJWNxNmLu4KbBoWiggDYFKv",
  "key39": "4q74Txu5MKSj7biEN4yQ8fhD6Jvdehx2vBf6fcHMvMWtT2LmRULBdX5U94yD29xhPSJaitTXBEgm8HewBSdmpBQr",
  "key40": "3e64LCuFHKteUjmkCVLoBd7HkbShBMhTWGry4GqsSNJZ2Jx3Znk9sjkgAuE93DPNDHZzNMo543SYcLBW3mPiksYC",
  "key41": "4jesAdVURrRxwzKXCqvd5XA9rtQLky9zztYDKuDXxxvhm5gJ4wDmAB5sy2jAsspAnJ8gXoEacbjFy9PsANLS5Mm1",
  "key42": "5ggg5T5yk3LsNeoKJCP3B5nuhgMLFpMWERCEzhhZy3HZkg2mwJBUB14MMcgEWTvKyJpGmPXEsxSWxtQ8DzyrecQc",
  "key43": "52FBGmyUJhJ9FA7PhDbfPRRAe9LioRsSq8znHK9noLNrj3Uae8xBEWBcdVy5TBMfrz31cG83k4aWqc3m8sty9Jng",
  "key44": "2REaLPW4hgy2QV9XYVscmrBdGmBUnfUYQ9R8tAAxdW27hJN7qJoLfe39PyicvRfGZu6GDw6cApagSssZ8bcmNygK",
  "key45": "5RVv1vDsnVE2H2p14Jnraez2tJv6vPLigA5WtH7u3fUUrcgUq6STnnnMRvWumppvc1YDKHfFByF7XhfhrWTiT2D1",
  "key46": "jGQX6jpYr9BooKfQSpe8yjv6XQsDsZCPfWLV2Umfmk2VWwGZMRxiCs6t7G48XZJhTWRxrm9sAzffSu3SvxWzChf",
  "key47": "5xk3bqqADgCucXmmovs4KVEmCMGBh7TuQUV8J7BJn2xuDmY5gP8EUXmraeLe6JvGPKYsdNEKKvBHUCfcVgVjVuDb",
  "key48": "5XNqhb6DndGGibhNtLfDQx2tGFeWVuQXxJRbgASRRp9JLAkbFoftUezQbRM2HMZGYYL6ygXufEQB4dCwYFJLYKQw"
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
