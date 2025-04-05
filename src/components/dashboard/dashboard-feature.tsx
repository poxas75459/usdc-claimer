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
    "33PMnp4YYqtVKGK5sCjozEmsbCswD6rbL5mDknCmMhruRTPn8gmSNXXJ197FEemuHK3Wp5nuvUwWknqvoVg7oCm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DrE7QJ7f87UF36bFZDyZNPx2QaABU6Z6dyv7yetBUmnzDveZbPzA6vpr8wNbxMkVNEMUeoa3Q1ZzcYxhT1uJHZG",
  "key1": "2F1eVXL5zXbGsmx578dCTiEVHk2wLpFDg8zqUNh79BVTP4Zg1ueR6NMFzmA4QogYHuFjxpuCEYr8tETMyCptAF1M",
  "key2": "4ppBMKdp7ZTStP2h69Amr59BKSoauRChhS4CZsDMgNik2mTyMqHubVC9xY3UMvfkgF7QUz8gCwME9zQMVb286fZp",
  "key3": "5t9ErWceBQsj1VeGvmatn3pDHvb5f6xfD7LbX5PCYgpBBajHLLyThmmrdNoVRcpxMR9GXP1xzqisb5KAossvWk5m",
  "key4": "2B14jKSfJasozArheeaiPNmA149x1KGNaCZ6FzsAAXmhEKymrgMrHG9fjbGrQYebtBxQbcVrrCAMSRKmNMcrhEFm",
  "key5": "57ttw7nZthaawe6U2xejT5iTXxJkDBuJt57CnzFwKCvLXhxVsM5pZGxccBxrgjjzzvB5GL5CMsTPsKtVGaSazweW",
  "key6": "2YkD4R1fuh2pJ7nCgiaKyTLP2vmkTgs9knGcNcTY6RLLWKnAtU8ycY1kVTQqw44o67nicSjcnHbziBxfipbfTvh4",
  "key7": "63tFo7Xr5QdeQcdMidPvcvB32pFMJqGQWT1UC9gynma8xbZjyDtcrzgVUejVTN4be2kTmkk2C4uUAF5GxQeArCKF",
  "key8": "2qFyeGqKvVrT6gvovnm6L576C2EiJheHPtRy8wAiPeo3DBdos2Z1vV7XX8z2CQSGwDdoh9dVgDMASXiQZQrDB7ze",
  "key9": "2DW7b18xuePeDLeCEyAqCEXxG4N4ZQ4qpkTtX64AjSbw8JtCpzuyeFfRduwajb76drQziBjCyZN24Dya1Sd1aJaK",
  "key10": "3YrpAEhwhACTMYsorVpkZtAgaAciLKWcYeTw7Bn8XFjUxXnvk9C7dEWCn4R1Vm5SQp6L3z3a2aWb9vVBjQqmN8n8",
  "key11": "YxbenDAYqQa7uB7UDqNWSBq19ef5zJfwCw4Snsc5t729nTbaoUY6rZRwTsTPnSEVqMUBpZ3py6cFGAkeLwzTkRB",
  "key12": "4hUNhx6Vy9fgX7Wc29MenLF7Y6m3qhugwX4J8tCMXNZhA7QumZz7ReVpcL6YgXhc4sJUHvoYdbFKbTf5har17FVY",
  "key13": "2XST4PZYg3mJb93vqF34wCvk2hRCRvhLAbASSTGNRHMV5Lm8XK9strN1dX7Nz9WTAKznMeWCvxbfNCY19MRaooD4",
  "key14": "4n3JVxHTC8L2q8KGeAk9dNAahdHpyihDUdLHh7NxparaX3qBsZvJBCHs1awoxM7PwmB8C6Typ9jcGqHogVEjnoHL",
  "key15": "2kYcyPD6SqjTk9fkKqjtuk2digj71gLNoAgWojqCME5E1FEAqpyGXCsJXmUk2WJV1ASVx9J4Be3ZMi4AVg1jL7kK",
  "key16": "cBpfv9xJQV6tfS1pKPkQXcAhzm4tj2HvBo8bWxCZyMwfBzpGzTtM1R8oCYUydtSdaTgewp2LtyX9gR1aFdo37qq",
  "key17": "47JZKjXoSC3d51VCAP9kbVcrhwKRgWqK5BoUjE4DgVfqrYoPLS7JgkvrzM6tKixtMsKUDdpkpBwYejNcd5yNJQaQ",
  "key18": "2tr78VLtZGuUv7qRJRoUhYew9VadMKaErARuUrJLz5x8TB1wteMTGDb5mkNKc2NyKnxeqMZ1jyYMKHJNhSS1QfqN",
  "key19": "4EmU6wvtmN2sTh3LvFn4F9VbVg7YWpkK93VULruiFxqesgAuGSYehzqSSZMh45n3cBnPmcPSkLDhQcx1UyBLLKgw",
  "key20": "2shEx3wbbxNvPMVJr6suzLcfXeMh2tQBAXerC4Ly9YMjsXgy2yWa39WVT3iKDjo4CmYoFHwHY5uDbxhhUtcPsxCB",
  "key21": "3praG8vxV3xd6MRdtLvsW41892ye74xHgu6dzCoXiz4hEEpc7iGSVU9QqKc1CjbaThNgqBG4CjtFFH8gFrFZBPMM",
  "key22": "3AKnsyN2a5EeX3HBjVkyb5JDxNKzF9n76n7yLJHKjfiiR2GLJGPNtFs9wBTqNvizrkRVBA9vanQLJi4HWSkTs2Me",
  "key23": "25yNuM7hA2Xs3CqFN5tnexzh635iErtQ5oRH2qLjTQbzADSfNHndL4TztSZJB46wZ7gsatUGRNbjCe32JkJsxKRY",
  "key24": "2xhNubiBbvhGbfbU83TMA9juA3DncJ1TP8q3UqoUQuC6vmZyEppve1ogzv5d6q8BgrPXsAnfgRVtWm1vmaTw6Kbi",
  "key25": "2wyWQ5vApGQvRem8nJ5wP9KuUhg7BecAAAM43QXhHLoo6sdjFAPFGuMTY5hNFnHUBZSyQhzUhHHyanFKMvWnonT",
  "key26": "5BEdKHuRechPzoWqqge9QJjGWgBfbNr7sL6G3okVnafr1XDwjZw1awFKh5R4geV4AMnxp27sABoDsgJzzKgfEqbY",
  "key27": "63hsSJ2JdvUAXF377CU6p6zthkiySGouAydfFKB55yQhjNQGb1dTRLPHNLzmnVpCVonEFfe7c6MqUPAntM3p88Sy",
  "key28": "4iqGgYbQ8T3jDgk6wEXUhCs55A2vAvLEG3jCk1wB9LEHaScEheHwcnFrgUb6zc8kBrukWg9CxtmMch5Cm5bGYbGk",
  "key29": "4cNNVcg6rayEqKzJjCYNaHLjMe7E3VdqqeMcaWKMxC5LJaWSP3PrsMe2QTPZT2DGzvhz5SC1CS4eu7CC6TANM64a",
  "key30": "2utoRz3uTpS4Ufp5sv8Vp4KE8crQg881LMPvaXyCpZnuEsms5c3xroKwk2wLEKZuaHFiqMM1AMusvSdppErbAgn1",
  "key31": "2EkFu2zigrLoiYhHgkvKWxVfLsh9a4bDJ5UxMSdsWm91LJ3F4HMuXSzDT86nb7tYeca8t4LmiEdxnYMoY2nweYbm",
  "key32": "213ejbEkvPhsj5249wZGM6UTMRFteRLWdwdsZNfPm2YgsLgXsBxCo5YRMFEBaBcSLw8ZfPze7DcjBxbXhLGQWfu3",
  "key33": "3yTXnERpmgrxEaeMbqjoTh8jGUkdiMyNksfcHmX5wCvoPndzR2QdDfeVGu3AddkAoyMGATQXKGUpa6ChQvEWPFmN",
  "key34": "5aFRyDmcYu7BMF6J6TUmuvTnX6xy8hYtyiuQ2xfSdycFYYThSgqLuMqjoe9kP5GT7cWkqaFsNXp8pfqN3iPWkuJz",
  "key35": "5LRznaaLKTRazqrcwQMrjDdNzN9UbDQBUHiVTKF4spBp9qyYu6pR9RFEQoyriUaaLwf97Bvo8ousAxNd9JLd3gkq",
  "key36": "E5PRZHJhd77y1R5H8MWPSzXCjYzjrmM7BCnafqimzYKmr2hfmUws4MbKDHAdkHzsVaeZxuDpbAVYPvePqVjX9mw",
  "key37": "mGtCoWeHVRKRLPR8Bh2Jy4hgroBzgtV3aTAhuxj5t119LXKuYnra6phYQb4BusfUxfe9bGNWe2EDU2GBbsidn1V",
  "key38": "NeoypqCPoKnHx2PptJtLjNLi1kxertVWhrxBohs2e39MMYpFWSQTCaVZgvGLzb4FeEf6J8gU3mkgsdz4PhkwpbX",
  "key39": "4nHHbWyN4tvf7inP1a7QjFwVAQo5UpwEbzfNBVoUxeyymcSCwaVqsRgG2grBc8YDcXq3UoXpAtbJxk6eNhBEf1so",
  "key40": "4axeud99u16BEW5uT16UgESvR5YJFpyY9iZJS5qv4Tjk4S9txdE7TrnXAckhfC9BZj3bh4Fam73vs77qvs7pjYt9",
  "key41": "2rFiFo6ob98C7qq9ZdBjtDH27EvXF3B9ro1KVHGLC5tcm9o4b2zfxLndRa7Bv4nbR9atasjomzU6uCBvGwZVzbCL",
  "key42": "KskzYzhHAKYqxkrh7J5vi4NC6pGZ13aP3hVseWnGCZgTbhSP8F5KB4aAcAEMhkrUQw5tJN6NiWS916nUqB6y7LX",
  "key43": "3iJMm9omuE9Dp2GpujSx1KLi8QFD8LjSUKrheTx9qgcKSRem3frJwSNDge6LQTKyJNMPc5hUkbfU8yBdJpwsfzZD",
  "key44": "5DR9EwdXqjLmNoWV1QbMgywcYiVhrUcNH65kFnWDsAQGxBvSshybZjenkT4a3gTYgq8vgUJKqwPSbe8ja8LhcaZF",
  "key45": "E1Bd9h6qWYg79p9ccooUXH4eEfbkXW9eZMqLvHxDqXS3XbWnaK6SJwCgzMSg8SKysVsL2eDw33zZ8kv5BYbBjra",
  "key46": "38oRwoiaQqhP85gSJJGKkRUPey4Ju2NBrviUzaKWVS9dMByKbnw1UdWBfaGGVL1VsL8Zpbcmbvs6uRsSPxi6Rwh4",
  "key47": "3osr7VPRfFgdDLTYGX3y7AzuEWi111og6DnNc8bND6ssW1ips6XDUUzjcgpaSVQmRW2FApGFunYxNjucP75ai8jC"
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
