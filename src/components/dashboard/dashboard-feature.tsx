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
    "5vKR9hZ9brLXUs7ygetFGhPaTAh7QYLt1LxFNGM1F17nJT9x9ZJasjr9BMLrYn6jRM2f6UYCNCijz8NGDRV9og84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qdg4sen673RkVE7scVrwQqTsMNPGB7AJac23xw9kdi4dV6Nc91eMQbG7bk4BYeAeno9miFbA6MT6iigqVomkY9L",
  "key1": "2dQfoHAZ5pSh4ZYd75F3ZYZGit3QyXTR3zonfCtizauihuv7V9kqtqvE3Zjq5KVyxD2VVNT2YPZ1rTU54V86gYYZ",
  "key2": "4x3umGMLJS8wusAcvMENA8yWY8KsW3PTnNE3Cu3vgzxsXRvtuZ3uuSgetB38XLEbNoQMfLSumrxTWsWMyn4VmahS",
  "key3": "3RxBCH3PxpXJ2EiNVeQMA64GcEHDjipngVVpkYC8yyZfKi82wuS5GG4Z2zdPiZHpt8VJHUbg4aSNm8ZexkUmn6G",
  "key4": "5enkRsWBYiKvcMo1FLrQXCAKBzgdwTvin1t55VwGk81YEYjhkhFPdeQe3kgnwmj26VZKQPwdhuZtGvfMKCVYpYre",
  "key5": "hRfduZz2MVNzwp1Vu7GxaHsMYVy431dN58k7qDKX8e41jGDENjR55hJJm2wi1CKvfqvD7vc7ckXHJwqxp9oDtua",
  "key6": "27qh83YSLD64S79CpnAwiedu2jJMy1QoRjSKMFnRfWnSP7tJFDiGtmrvWdgvpjqxAHD1Ws7EnFaG78LzzzDZCJgX",
  "key7": "CZTCKoVFskZY6Nuwx27uvetWoq2HMTJ3vkdNTUe1P5G4B1QmifEUFf45kFeVKWdX9ANYQarwQYpuiaQszwEHige",
  "key8": "SYHDMKtLRfGXAH86eWxtuAPS9zfubjNkZHd9begDncdS8odR48Gjn3i4iuH8mNMUkrK6oWgNqkGVJ6K7VUZGrxa",
  "key9": "4svq6jDJ9f9zXZVELBuS5Bdqpux7ReMaGJT8EygBp7Fmc4HYQRe6XbAHL6EuKU8Qhcvoco2JFVfrqMPASFKDFLVU",
  "key10": "4kJ7qztbqPjZdC7S3YndcbHZAC8ThxvD4D5xyGHCWpyioQBVSp43g9wRB2njCTYJaojDxRTH3uTBJh2q2j32zutH",
  "key11": "5wi2wQoQYkdfsekqRg6qdinEN25FKSNq762LwSEtx8WZ2LzAgqm5kUJNLvuaAGC9Z14cRXXu6wyGetnH1ie1o5A1",
  "key12": "2LuFtLSf1i88LNezDWhnfVZgoX1MDsPZ4tuJ8AU1KbeE5CyRuQhjeyHBtByKA3UNzjSPgUCGqGBQyeCjHTrWy6Yf",
  "key13": "gK12P2dyvysS8e6JzEF8942k4gSm58VotTL3EECBtSnroTweMq3NMfQY7nTsiXH6NgVQUFXakPwibXWcxu1Azv2",
  "key14": "4eTMc1KNsgHUaQXycKQWa234PSfFAEz2P5nsDs4Rn4PMcBVUk8rxE5Rep7f4cdpLe76gRqqtQxUvkXezjUKH5mrC",
  "key15": "2TZC1afVFuNBRJPTA5Ewp5XzCUdrG89mWhKMx9UQyBGBrReC8VGzdxNzDxoyNsF685g4m3WRJ4cHpNdvQeSXyw49",
  "key16": "3yQzVEqKzHXRbhTFLJjYUgvSohS9yS91vvSGxR1ThcpbkYVvvFrXLpmm7dLYkbFmqsWkokk1v8bhjYq3qedSTwYF",
  "key17": "h16cxeTSFYaxpGMvLTsJP9B6wChi7h9a5PVEV9qWop6M9WhuXgXMeroPiLxwVENZMLmm6e2ApxFDE9oR4RGXzyC",
  "key18": "4hnD2wtAaTbKPvu17SR3jN2x6WGeWReMQgcLakj528ABkHnj91BkAMfAV44xmrCGQKWJeeEsRmy1qQ4FVknFDSN9",
  "key19": "2kt5YEtXkGRFAVsqpdnyE4wKKkoqqeckmQRNPHgset42L9RiL9BiWXaGT3yyUgTsTiqRho56nyUrttRHY32EKLMP",
  "key20": "3m3rxJZ73QsMU9qsEx76vD6Dm1o7duZ7XNmKJegoLDuyLxu4yAzMBeMN1fC2MG8ZECSgWNWVWuLiiwkcygYJCPvJ",
  "key21": "5g6sbvpP9cFjKLC6Ke9kqxZRZqQZUGkRcAZjpijvj5BS2EtoE4YHk8nyHn4mmJgzSQFx58KZpgFiZuoatZySNTZk",
  "key22": "2FfeUt7yZ8nL47JN7sdYxoAPLmkPMPzBs2sm4tCZP7HJReVsYHNpjWs45ZvoonhURxMWb9mvxEb3ufF8EJYmsCsp",
  "key23": "5FK7TNqCAKHgJtCryPkRAxEY1qyDDY646UnE5jvyDEEpUyLaBGDRCYsr8k32bDxJX9gdGS5nhH34ZwNy1SQHSi9z",
  "key24": "582zbJg2FpNt7U6fy2n8Z1E9HpQa7Kz8CtjRsEjUZ4xXkDZCKzf9e47KaYxkFtDuy57FAHfAbvb5bdVpwMXyswZu",
  "key25": "vkuYj7r2SAS49ZGjFrXVANuxDhwvLD3V7bpFg6RmC77EnxkFnL9TAYir5vwVk4yHpGTEvovKM1BimNmm3eXP1rp",
  "key26": "5kFTv8VJahK4LkyvVVXfVPMJvygdNqeQeMmhffJsnogkazhYoD2h52dPHaaCRHQU26SDN115W9h6c2dc1Ux1tdDc",
  "key27": "3KVg8s6L92bHBvu2p3zg34vUX3fNCBrWUW9iAVMfZnRNPSNRRBnDzbeLBaAiWd6bVHkXF2wKJUitG53pYCQpaZTy",
  "key28": "3vYgTdDdx3SyVZcnckYG9Bc7jgikBZpL9mavQFjq1wjojjUoJXqVV5gx9qaLDeV7ASngzrKyud9QWYkPqeAiJ1Mv"
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
