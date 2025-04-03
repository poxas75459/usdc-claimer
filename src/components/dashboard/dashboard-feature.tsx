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
    "tSTyjdfdAahzupQbFnH8bxoZWSwjwqEPcncfrAXVDjXq9VHqUCZdsm9fFNxEb6NkUihQ8zjyj6dKdm2ULXXAUEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kJiY3fUPZSPFxTCtroPCiGeF1UkUDNq2dDUhNbYyMxpXFt6KgQ5c9mW1QnZtVnD8eee1M6o3UnsEFLLkLs4a4By",
  "key1": "4Gf7vhFkA6GZLSTQ9tz8Tgad5bMshRhjvcWhbkmdHhAhsbCW7wHsmXRtqQnMmr9cacfdWAc5nmCmDL6UCH5yxunM",
  "key2": "YXkqvPJnQ84coSKDFcQXbxahjnZkUNHENqWSAuhYFpKFTZSQepsmk4rjAbdGQroNXAMo5epn5JW2DgPoDoUnypy",
  "key3": "3pwJ7oGMSMr2EERsgiCf8VyTMriZyoaujJD6jaXWpPwy7GwBKqJnJQPYCpRBmoBPjsg14DF63rZKKVrrSjGspeWR",
  "key4": "8f4zRUZx36AiAgDZ1GfHFQbT6chdZBmT6mDKK723euTDE4TqaiDLBGn5CmEvBwfFSvPUkFWGpGiwvMhZkfL17hY",
  "key5": "3jdmVXVDaqzZGVF6ECrbcpRHopKP8C66pUWPQBaDFR9THKQYgAC7jgrPheLgH88Fya3GQba8D2ABpzhjEndWGrQv",
  "key6": "658CKhewPNhLPkGw6d86sBh5xgAMNFBiTrQmaHg3srE6Cf7p8woXwAoF7CiRKrFASndJhXXCyNouNxatyKYA1Zjq",
  "key7": "5byUgtH62YustUrS8P3ocNgZiiVS1WTeiTzBnffPQwZEjAnHW2XfJiDKUYVrpQ3bDLU6ZTqwRB9DvZfbc1wAiT6a",
  "key8": "5JZz3VfaXiNutjgAvGCrkoF7ytve5kyaaas5iAJaHmQCvqN5VD2MDY6GYVaJsmUErb6UZgZuUpFev7R9bMd44qWT",
  "key9": "5Ajr8mvFAiTEoHLus87zy4PCK8Jpq4YfGv2H5VL7kwZ3E1c7893656EYVMDoJ8xTtj8NBiakGqz4DfCKsi62Mc1P",
  "key10": "38zJMiHXvthPkGpCkMGzGzKz5YNUTKNYFPzvb8LWxtKEgANRer7cBoaYJRZ7ALXej9cAzJWYiqfsHrFxHQ6ourBz",
  "key11": "5raS6LXodagaJBsBZost5v1xcnQ6Y63Ue2JGm272DqcXxFeWpqAnPDVWCX8JMuAxsGSD85UzMCYGCVoNYhC5bDmL",
  "key12": "5tbLL6DdZZrCQEjJK166aB97uqdoydYFM2zsFWum9iGsz57hRW7JoqBAkkNSBautEgqpqs2gGJ7wwwzFu6SYTbqP",
  "key13": "CkAhWh4pgnFo35c6XFxm7Vu95uTZLdnhfRZ2EZN5Db3ZXXmkshMFB8sjk5R2EUpsohBGtbjhiCCwVBgePn7QRM6",
  "key14": "eevVt5cdzm5aAv7WLq3PvzXu7H3N2BJsQHVDshJFswZPve8V6gPuyhthFcWH8gaG7mnoTcZk9daN5eQ6qEf6bh9",
  "key15": "2oMDWSESCjEZ6vi3P6pknkNHRmKE2e5UmsUMi6G4kkVcue9n9S8krA9kuTykzF8ExM8L9XBeBuEHY1TqcpcxFnGB",
  "key16": "34a6mUexLe9UAQEtngV2fk28wqCJxi4SENnbj8z7UXirLLUyeRmSqRP8XsyPdX9sYYjmfh7nea6baun63e8p3FzP",
  "key17": "5of6Tf8MLncC7jQermxTqCuDfX1d5nXkWEH1fnXCXvkMxDQkdpauY4yiT86bRTEZo9eCEdNDj2AuFPm3jrSWuKnv",
  "key18": "3McxPFAM9HQjptcaYT3WbEPP84XXoXG2FSZyMMXc3DvWmjtWidh7NQWPn97MgpVxxpSemkxcEdNNL3TtgDNzT5Yy",
  "key19": "5mB27FfFzZsvDW9yXgTcP84d1ETrwCEDkhRUQDAqx8bocwFqwYrbqaxa49pRzbdPVmHb24JYQYEdah1WZ9ZfL9C2",
  "key20": "2NEaQCFssWnTwoRaSo4R2FJH5pVv3RYeYkmohYaS8M3LBm9nH71JnrP3trhX9UJXLr1kyaDRcet1trQQTtrfNvyW",
  "key21": "4aRn3fSGV2gVXaDq6uteTLCZ1jCx2TqbZm8KY6hoTHywCWDv8YFifdbNWTzBiuEqT3nKGcK5xqa3GowdVQYeT4fi",
  "key22": "4WLBKzVMebTZdiTZt2N6kFay5bpFs2EAQt8fDDR5busKFaysa622THr1fTgXyaQbBCUzkpwN49PuGiVawPznJubS",
  "key23": "43AhJAxhtv5dxyn5pgoYHT7GQ2AXu68hP3rxAYtqfq2hc1VQQQnC49RWiMmKymhNo1tc921DCvYJpMDygMrDT7HB",
  "key24": "7ELRVbioGaVeZ3ADkyJDDoHoSLp19DKub4W1VnPhn4cFyNJSAT21oxE6DSiFBCJ78y9rgQfTYhohfMfEMAioVmp",
  "key25": "4SZ6wUaTZ2semuszWg2vaZhy711gsVRdfeFzaDd8CL1udfk3bnacY4XfaCLEqBeC9LCMYyjxTfjei88wYs4cQVCr",
  "key26": "2QSjwLcsn5BimB1qKkLmzTwcPGXAZ4rLKXjab1hFnZdvnNfeKxES9B9tvgqMqyvPDaA8ZnEnLF2qcDrfbLxbM2tw",
  "key27": "3UGAVH8tk3GVxkoztmoUdbUVjvro3Fc7qZunjFSvzvs7LJn9t13RLkX2EcPGc3FGDzwpuN6kENhtb7tgfadxSxqc",
  "key28": "5EZM1Rc8QjGFjrpLVRQZFnX6ESz26gQ5GA6yqRGnGqktUKk1vfUtpbpGbGEQUGt1zn9jQg4GmggezA3yjug6ctUZ",
  "key29": "2m8G8yNbAMbHtqRDeJayNHnGoADaF4wFNbwcwfA91sJP8jAxxV3u4ZR7MnxQvGFYuTdffNGKFWgttB9ewkMT4CTn",
  "key30": "3t1djasVbRaMp8xg1ZDzteAQmgShXHjPCr783qPkSJ3inMwyaxV5hQ6TsRKF2as5Cu29UumQGkRhoBvmGz6F2phP",
  "key31": "4G21ZRNFYgPduXRmeKg2iWaU8ByDmiJbMZAkftmdPRncozEXzFvK3AcBkWw48Zwe98xkfQUkoqbvUmLYLLUrMykV",
  "key32": "4G9SSaWLmtotjgApjHcgnVjmATWJLZMxC5uVyRnT6jJG342s1UWd4wVn5YrffvQANTxk3bv1RENk6YYEQv7DSHW",
  "key33": "45qgHm8WDXeA95nsNKcrRtzFbazTEX4PnSU2dxyFBhokZR6nWC3bz4QZeK3k3woBNSAZS8AmUp76GBvtTfg2vyHH",
  "key34": "5k34yT4b5B99R7ABZMnr6iz5sTmef6hH3oorokSy8qtneQaKJ76fw7M5ZHNQJ1Y1Bm51bgNgm4NirSrFGitR8Dmx",
  "key35": "5hYLnbiqB1Cf69nJS5Rz4juar5oMy6cWZj2Ah8jRDMkHjdppVZrb45apG5MeVNGmQVvsYWKqXtKxdfYny511iPjx",
  "key36": "65PS64ZnCuUFTnbNaB1pUMgd2oGWHmbFccST4mPsBZLoZF14uaykU8HKJkpPWwt7NaBBwWktYz6LZvjcywdHmdqB",
  "key37": "3MbLQBi5naZTpnQM2VoKrDz4X9K9Sqc7aNURCdqCyv6oDTzEVvCpt3QmnAo3MGQDxDUgFZUDmxzdFXfmJRsr1awe",
  "key38": "wmhQ8njACnggpPYQAdUbMAdGk2BUa1BFYHsC9KZJUez7sb7Ms3eySXjQYPEzNXkNLS6oCxizBXyDwQC149mCeoi",
  "key39": "2qk2insKMu9Wbq9Mi9pagZrhGogi5kSdKwY4iefnjroAwo9nhbZkBxJ9ip5sw3wh7cSqEXqrfrWGj6c9cjHV4a41",
  "key40": "TaHT7CdnaNqji8rY15GcFDsXeJw7zvX9ZFf2npxy8Vuu9jDwrg6U27rxJ8Z6aCHQzxufHGzfQ1kpaQXRxCkcxU3",
  "key41": "5urPe5ooksRZEdSAYUoTPHYucnxezBDQ3Uh2aUd2q3SwBJ323kigucV96JXXQkn5PDGRNSm8YpGX63iQMTMf1Ppi"
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
