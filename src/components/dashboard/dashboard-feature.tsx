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
    "2a6apHt9wyMwmwKgd3N85yPoUBLnWMuH86oKJ5HNhoqvD862XVXPCfihzF9H8uCRYkwfX2FJSrMyBdyaY98AicLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2afhngjG3fip71GanXnfUjRBLi4th1fApGqZC6femf2saFQJUCvTXXQQUCAs8cMBuoSrCNKvNc1hPQouawffWASW",
  "key1": "5TxAJn7pVHG838P8JFFPn3PG4xryUAaa9KemjvmS2iVPtofEsJ7idFjsc3isM3LPfyXoReJWbDBELAqQM9Dqkgr3",
  "key2": "4ZUqCvMwR2e2KJJUykPqory4tPHyjJjNoWMK8bQzsRrgNZgCPmKeqLiXZvziQNY4G47ZKfZwMPeCDu6oCV7VFbD7",
  "key3": "5nouw9Lp8veKpGSQDjgdBmiY3ZG3KHiroET9Y9dGKCEJAaQVqfP9QX9CpvkPsbHuLGJ7soE62KXRNrR8HoAKZQsf",
  "key4": "54pfYev26T6LFCDWSvDbHpMCYtESSVee4m1Tm4rNHaF5kSzASYRa4YFH3id8nVuzkEeq8jCnrBHNszYS6dqunTyo",
  "key5": "5mD1bibAaye3NpZUsZgCFej7fwn7qv1Gokt4Y4RQB5movNcmvXi9bUoXGVP3MprcRNTzWeyvyRf12miyJkniDvAJ",
  "key6": "5omh2uEr54YLKZDFcYize8Y5A1uyzHoKz7MyDqMe4w3WyXowZykfZMNzsY9b66k9j9Q29T2sjrg8XdAjFzoGkTDw",
  "key7": "31smFw3muNe6YVyhVk3Qmz4r57rPBkvTDwTVqBuqfaRVDezNf15WKbZTkCGyG7h1sp24U73gms35qtKf3yfYT4mi",
  "key8": "4kstPAk4fN43LnVWxr96A3xKA1axu9oVz2Cx3QAGCTe9oLfn5rSp5mAWs2VUi74qBFyvrAxjvZ7MZ79fwbWP7mnm",
  "key9": "4K1FV3SugJV9i3w9YGshFqhhmL8pDyz5a8k5W5GcHYND69cbe8AP2oNkteXZRa4TpwNchKyL7KZo4216FbSJuZ7d",
  "key10": "2NRVdb2kw5iQePGNmMbPEkGc1knTSwakFXXLe1c7YunnGTduzPkbiYt9pggM2Q6JNdX9NoCs4t44NCwSKh6aYTSF",
  "key11": "2vRBcAuNsBnST7HgmZyoKViN2KWQjU6jsGbw6cEbEf49EMnPUFhts2f4d6zdBHitHA9Fhn4MnYjyxx1Wk7nxF1kf",
  "key12": "4qnsxFKR7NWT5NMknZyGudPkK4NzGjNSfajeiRVGvAsCWTLebgDDV6eEf24qnkZj1tLon7YnJxsi6xxZtnQhwTw5",
  "key13": "4pAYGHRsyKUwDafk2wpBkVf2VRMrsj63FLUCwwX8YbW6Uxt1BZEiaV1AE43XiaoZtGBoYmQAAUdgdNi31TeAWdnD",
  "key14": "5tuJDh37JBdbYzsGdiCnpMBuzH6WgcBkPjQpNk8RKJqpyqbTJnMtomUNpoFtCUvd7KYdEXMHEMK23DEqD7nKNPS7",
  "key15": "3cq9fLm8vNLoxHQru7Dinpwm78vbcBkpN1nawRBUqab11LFtS3Wa13scivYGpFVvCjBeT96TYwPCkemPXhgfnJk7",
  "key16": "2voYDdhdHBNuRyC3ztjT7SxRKDC8j6AwnXtp1bmLjVijVWNuXq5QKNQNVU6FHuxB4UbWTJrN77kYwgNYeuggt5h5",
  "key17": "hukmKK8UGanAi4s9TvJRiokL8V3ehV4xYb79yBXZu5G9tjCSnT9nn4yzAgpXD5pyYvitoP6gBnFaE2PgYKvJ4cQ",
  "key18": "2VjcKsPPmqew4PDF6m7fFB6byQDi8VXtuY2yaUeGhDPShGazAe63xq2FJ4sDq1SbGooTVFKnkMFk5rQwEbdBN8eu",
  "key19": "5Xt5iKcY1X3uCP6qodGpHvSH9AEnPoyQkVTxM2XTfnZVeApxfRT2f3XgnhdUzjnH1BJn9t8i9izU9LDLxgFsTUCZ",
  "key20": "4adE6bPZnxwFbV8HP6XEQui8F3WoWJAmoSsJRWGQhpPyLjkzfBdNL2ucWjBxEH4zwkMn1CFNLzhhTEMx9ra4gHmY",
  "key21": "4kFrcMWrcdMFwnZrcfRZ9wjRBRBUSTUngL9mHPXSbdc3bxCKhGoqfH2rmhM4Vn9gbfoUBDAKEX3D7hyY2dWXAKHf",
  "key22": "4BJADEMrdWaQ1iuhhnb2wbnsH4BJ1PaCFGJtwH7ZoDVNu7Lxxuc7cPj1cpH7ZinfiraDwXPAVecHgWrNmaLzqGan",
  "key23": "e3GkQqNMtXqP7qmZyVfNCJ8roREMRRfzrC98uMpZQsfd3AJGYvmkagq5Ct4iBuu2wkadpTF3gyrz8y7bo6r1rPf",
  "key24": "5ZRt7abHfgLQaWYHc8KtZdTHGUv9BBxsYPm3Lm4TmcNXo2iNWMdnhjoytNeapinFqcY2M1N6Rh2ipx66oBRvjU26",
  "key25": "5c29Un8qjAgaWsLjSxQCGKfFDqVbiUW5MkNAnPf9PWT3ztfpzRNwd9FkvSXe36eQJuF4cW6CxrNhcdePV9tYfvqe",
  "key26": "2MEBiH3xvCRTLarhYg9zhXDt4emqdxjx2dyfhb2Gdd2YDshvD2UxuVeFMPmXi1iwvfXvmAREyMeNGYLQqCLiK9iR",
  "key27": "4G961pRuTrJV6nQhvaw5QL7Z4zcZM9ybn4WstnPtAbKrcxWBmk3NTnBjcFWSq4ows3NvguTB2pZn1Ubx8zwtQomV",
  "key28": "2JzvAzVRV8SWQ8VCaRYxmUCfFqDKEB5Ko4tVd6eWhFvf2W9QPtWmegN6xt79ZgT6BTaMFA14Uf8hztxxAqz8S562",
  "key29": "3f6LrvS7KpspHiqm69wBJETfECe7RdVtNvaEpjnwM7FVDbnoEdGS7LxTwtoqpoxKjoNM8daDvmmrH2tMNEgnZU19",
  "key30": "2BwzLQY3U6FxsAFPVQrnNRbK5JcGxGwusiybBrwgQkrqUniC2WjrRFxtzPEcV5MHdSVemGbgHz6WEAYdFFaAW1Uc",
  "key31": "35EtxWcmUuumi32dexZbDvDFrwSBwk3EiH35HB3ay2efsj71LjX1UbF2TRF3rnYY1qTo5VTFQvQchD1m6owt22AB",
  "key32": "4yoHibNggefawJburYzitFukut1JNGeUD6A3YUWvnaVwDx5vsjT68PBGdMyuJQwuoacf1hc1EBdpjYYj4Sitv4Ji",
  "key33": "5fogLxDL2n2vwaU4JAnwhEdUGHFUbEWuB46U51pbdQsEHAqmKbQ8UneiVz1GcBmJEoYNhLnPRRza9FXK9FAq79tN",
  "key34": "23CXiqa7s59uXapyEwFUWMyr3q1K5q3Xg73t11rP1XnSCWHFvpJqkNvArBGetFk9QmBcg3LEaSKccjFrdH2AAhsc",
  "key35": "2qVnd5gEsSf6eSckVJRnVXhywUStKWrAeHvWURjQn5ud4LJB8kbPKQiwpdxAXykt6nciWD1UiC3M2Ex6nU2zhzdX",
  "key36": "2LNJymtffTRumSwva9iXXbX5rhJtVWRA79jycis59xCLZbS9Mc6gKXAs293HrYJ7xR4nQMPg2apLuyS3a6Fg9Nf4",
  "key37": "3rhc3AoXMSGyD7Y7DauhvGj4aEoonV3ihgniCZjQw1Hfrqf2whmTmVyr3PFL3VxmZoKanDRmeWJuR1Rz4iUXtVgd",
  "key38": "VHVMKH1FPNwTAV7NTQBJ7kT3jJgzRoK2RGBFXCuNctxwi8KhVVUoQQ9rQmuXkoND84UyALs2Bkg79Fww1xLBU86"
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
