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
    "4ZA21Xz6FmdcYZJ69PdsL4315VCL4pG83k98JWx88UtEGke1uR1are6AMVkxEcWwR1cSSoML1Kz3P6zuyNQ44xAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWrW3tcT5V8PyFcaVsXdeRGFz79renNcZ4B4R5En2cqMv7gkCBSzXdMXbka4q2JCiCWvu3o5ZumsZoFyQEpbHYE",
  "key1": "3mteheopfgnk3VV5veYhubUt4ktZ3DBs4kmY5MWsh9Qo3p6ECAtFUedKHzig21ds8nbgF3vDpD34eqZdpdahW94y",
  "key2": "5LqxpJUFK4PTutPotKYcwKmS4hSWyE1bkmvVTAWbou6Tjzi7gxhKDkfh83CFGPNEk1koW8VsDmjyAGHPAD8JXMcV",
  "key3": "4YFbfCfqEh4NbTUGfMWdTAyZ6CFoQozkeunnBey5mLwc28yPwbawej363dXiDdNHUD6rYnhCKidZq1gWccwAnSbA",
  "key4": "Usm2RwXffPdoFg8Y5sQmRuLiRvKrwMeG8xbjD3Aa4zN6GH8LpNR3KYc6NjHVto7gnfAVs2Y2TkQi4wpLdFZaEtJ",
  "key5": "2SNFAaMa8XeMpbReAyjEwYXrF1VgADo2HqXSGNuAyhM4LkKEt2egqen2Rft1k1ZLQE51BXTSZPjnBFzuPPTegYBV",
  "key6": "3DqPL5gLY7LtGSMNo4YHccfkmTsp2JFTZtZXi3ftueRYpfp41EJoB44hfGUo9iNyLcKqobTksaibUVbcZKKF3NDF",
  "key7": "624BWpCG59qxYygkPYuTzrP2smkQytM4S54fj3KteRmmUCEGy2uyn1hzA9kwcj6uy79AjjnM7GzAYVGpoKNvWiJQ",
  "key8": "8hJgKC3BHZCBXhH3q31Qsa6gzHALJmcdHBsCXiq6efjwUxcAu13DXJKsehJkMKMaBrbMCh66Y91DLjBocqoAhdP",
  "key9": "3nT7xG5KSJNwrFTsD8CY5o3xdr94wVnYwmd4dcJFYRoMqg8zYjik6z6KfWCRjpQquUxXwP2zr8VuaJskTQzC573X",
  "key10": "uSQxAQ487ahUjdpK3xXr1kY2uoTw2fCesmbxx9SZ4VMYPmVdJW3C3w7Wcx696XQAfbHekT8B6VqqtaEyoGAcrVb",
  "key11": "Gszq1oAWQSjr8xP4BwjfwzyR4sXnXAVyt9Sw33HEaZRHApRKygnLTncq6xHfpru1c96Jy3H3aKfvqkHng6s9N2n",
  "key12": "54yBekbnU3tNVPd7eTyeynFD3DhzGJcr4s5L6gvoNvzj9bGV28gansdEhxjSRm2odRJ8HPrvXycn8nMtsZaCSXDz",
  "key13": "5Lk6bg4ESg73XsvCKsUU7Z22gF3Ayh8nCmPb4eMuLU3VrWkkKL3KGoHqTqYSFA1NKcLuEfBoMepAaeWGAfVhEwGV",
  "key14": "2EbAMaZDpo4S84x3xurqK11NpHWEQWJDP3FWZNJT2PfhVCydwifzUzQ31jJQWj2BHZCYoeccJ9BHoYhbbQxMY4Bx",
  "key15": "5HxTe5GGnchxMja3DdJNtn1krFxGmt4ivJ2gwFnTCK49Sk11wzH5pSKCN5ScmpPw8wrGK2WJYYvTsyzNs1Bzozgg",
  "key16": "o3qFLWXnMPWkxbi6ZKYWRaNiwHeDEEYwgtKAC6YWRwg83sem3DqKHJ3mkQXzuuaYWkZLaRmFMdtEVBPegDdQjUL",
  "key17": "2cu8zhuKWE52HE3YHSyJjNMEBLo2EamGFkdasXKAv4FTX2Mv4GJyRGsigrRYCRkSZFsMpHdTYyYEJnDndhwZ7r2k",
  "key18": "2FtMd8JQbroEMns6nTbtH21UMBCbv5GmZFKSWrWHPrZ3gi2h69JTnoJt1YWbkGUq3MvBGwCGUUD8EuQR5MZhAsF5",
  "key19": "61B1juWEqa3o1P4R17rNm8zCFt4wuBHGVCexDPA5ZQiek1t65bjwvJQGVLdNdnyWdyvpwE5iF3atdJcDbewWS9sc",
  "key20": "3MjvWqTxYVP8DpTpfXjYgzVAAV6Rrm5ievYNRTAhR2EX72RHABm1nwvpnd219EyRXW4RyzkYfGfgbSKy2XVyyqgj",
  "key21": "3XuKqyfXhks74nndpAFURgbFkTy47fjjr8HdgyEgsWD2YG5tTDFHrwHtCDfe8aW5xvyMc82fb9EuksMieEGFEmZu",
  "key22": "3dUY1VwTsRQ2sKNLt3Y28RRit9WiqgW83QefhrkGqm16tQ42iWyoeWR7ZABtC5SrwgpCDDPd28dHrLiKvg3T2TX9",
  "key23": "4ShPSLpaTSZW7aUn5GPCiE5oLVrg7SadtBqfpmptoumYJvG9TVauyWSLGGNZdfWYBKrUWqVRJthJ9xxnsNaN7K1X",
  "key24": "2vqzoyqfVVKiCZFUG881o4b61qebwnkNXMBc6Yx3zfs57Yy7VU8csv9QpRfuvbYJUdHbtCQDQdFHgfqNopAVvabM",
  "key25": "4ZEfh3teQxTKFf9wR5oHCLouviNvQ22RLL8mB1UJaPGWJGnBQHC3MhmcamL4cdkNuxbfPVyeC5nzui84SbN8dW9m",
  "key26": "5dZzuHz96apJWq7SUdPg1FjHeiqfH2UphduatSCv5W44yHQctdnGSvg6kyWHuU9mJka5mCw56PcBnwvEwzhDxu9F",
  "key27": "2jRZBdU5CeK8jTuEhrfyK1fZ1L8ZH9FHbDCWTB212o7nVcM64MNHmMfWHXB5jAdnMek52uydi96CZ45wFxfnnA9Q",
  "key28": "3C7NvxPFyEpVTQfmKJFJX24x7kfMqNzdLuzZAoBWXUoSS7iQcDigqCFJTqiBescUAUcFhYb3dPRRk4WBFP66UXHZ",
  "key29": "5B6UWf36w7La7Jn6GHcKnxBVpxBgYAAgR1mDTCcamLDQ6QvkGmksGsJiCoPa1spzx4eJ2trWx7Sj29Ck2d9NJaZA",
  "key30": "5oHBVYQatqmMyGzYMBmwr8Y2NMW4LgD7h7yzGjW2d1c1yPZeSbn9taMFBX1B2QVMNYYpV6PbEkeF6tdUdNnUGdPL",
  "key31": "p1gyUqL9aJVW9PTEv2HuEjH15y2BERkQ6CLKSbpoAAVSLQzZt7s7a5fjqhZiACzk58BULRPG9xWwkGPhiGMK7PG",
  "key32": "2HBQBQNwTGnPjMnafDvPj7ZDcpJtruUgbGUYydPGSd5B4hMWvgEecLpEa9oCpYYaXunMqgDvso4fLqHKXjB6aefo",
  "key33": "3iV85arxktRPbgUnNaNWJPFNWy315xM4ukEFbehJGTGdBUP1WYLdDqPpW9S5iCejikm7G58wKUzWxTdDXCEDVi1y",
  "key34": "EKjQ2QjqEASfUfVsh7cCTb3dXAozGwvL8ZNHazp1MguSGaQcs1uiXATRULT7XbKYXwQuQmTNvqUC5m1v7P2RFq2",
  "key35": "3pq34qb2yAPie61z4TsR3TPD1MsT1Z4vP2Q4AjfVCmWpRAo3CSukMXpUeWhd9nqcpKjhAV9SABDG3oJsMqa4h49Y",
  "key36": "49V2CqbG3suuHqaK4MFxjAvwuLoZuuhQ7E9CRWNWHxnkNXgEv7vJUwyQTj2aGGXLUp3WS7uNpNJsdm9MMiDX8bPX",
  "key37": "3hrkf62bXYQR31LZg18EyixHyEX9LeEdjqxJDoH6wuTr6NAC43a8dqK8JUTmwpmFg2cjUrKwsdbmhYqMMdpcwaMo",
  "key38": "3WwDM7ga3nyhxBYX7ntSmThFYGeeVgah3N1GLuE9WRV95dMJ15iYWyzVJQPnsaZqoDga3eRErtXewbv831pRrEve",
  "key39": "5hEM3fkF5RAKUri3JyY8SQyuqE7pKQcKZk23W4W3QXSrxRemF3E89PVxiThED9FnrBwphAPPXT65NESAHZy38Bc3",
  "key40": "234JzfiRMUwmZPdmfC2oLvGeYPQvWcnaA8No3q15ShX8K7XXgHDqS4frWcAXXiMjW6UFX3UpBKofFAKXLHvhLxGx",
  "key41": "4SNoioVmCr9WSFWc71YGuPai8LrB4m1EW9sU3nYNUjy7zEPdyikun9PC6TusfjVSb35f94UJsbSp52esKzSizNnJ"
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
