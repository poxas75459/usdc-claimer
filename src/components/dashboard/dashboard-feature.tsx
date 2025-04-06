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
    "44aoLabFxQC2TqwA32cvGYFEB9h1A6z5BGLJQbMWrf86S4L9j2iAdTSbHfWdCf3YEZq2PNBaAKDkh6DoUXN5pH2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GdHq9ugjpnNwj92KUdLpeGLpKNx6EuWKdFypoR5drgTsSRx3vxXL81dWm4azSSLZYsT2PDCpLv5HcXooYvLYQfP",
  "key1": "5ue1dT8ihhh65VEqAXMC9ChHk6fubU4d8xSUXCb4CgRguWUzdX4EtN9Q4hYWKi1vpp77vQvvn16NQsD21Bps31Tm",
  "key2": "62nwHDW5nAHPkMg4FzPc8LesJceBREXK4yPqJbqBExk2vz4ijgwsr1cAzgoLZkeEyqbTvwVKhwDYd29aabHUsiLG",
  "key3": "58ZQLZdCpYMXmNcMujdaULjE6qzvmjkBxGPZLtgjoSBvAf1VomPqzYwyP5SnxtB8U2wNjLh3Rv3kBVyasY3yrfLn",
  "key4": "3Z5ZBTpnPZEuxqec9E6PUtSjTMN7NsafE5B6nJvRka1925irkiPSch1JAHzfTo5AiUp22MKAXS8bpwyWDzqqB9yg",
  "key5": "21VbPcGKN4PAQDavWQaFu9jdYZBUkazw7GoGGycaczwrSzLHiDKUgTFY8uze5dVG1mmGDfLthFH2TaDr9SFrakQi",
  "key6": "5cZ7CuyjrN3i7K7i42FLNJ7RL2926xikfPmJZJ4A1ovicQznmFaVqasUfAJdDiCacbKyAGXPx9gpWSPhmsNqmLuG",
  "key7": "3sqs151szmtBRYcSnAjdb9KsxgXNwWZEMvoMBTGkZCJeeaNAk1cYmQ1wCYWgge5u2ArnKkniP77KdFgyLpYtbukx",
  "key8": "pKZYeJG4F6J2UZTex6g9AQHxcNDyqaLmRvrVot1GLxMQVn8KRxviadGJuQhorrbYXG192sRX5tK2MWybbCVfpkd",
  "key9": "2CtW8z1FbekEgckrLvN6cqw5euX96zidnq4c9DDdwQ3S9nsa74PZhuaAvYqducBPLrDQrfUTBFpbBnScUvxEGrJu",
  "key10": "2bnro3MCnrCSdqaxkTGgBTin9oWSjxmTecoqycVUMSmwKcRt9EQJ3Munk82JyzhFUGZkpwi1tdzaFnAqLBcnBzqk",
  "key11": "5bt9tgiVSjfYejentxBXEsMuDkJUmfNy24ERfpM8wZq4qDjEghKQMRpwrmYJqiKLymSdJV3A93Jn1KX2SDKReE8C",
  "key12": "4oQpXXVjh5p9X8fmnQVf2TrkiC4SkYGHijfNYZLjHA38ARcMx6cQG1ifxC3gWQEbk2iZufC6VQsZYTtCFcPztGnQ",
  "key13": "WmQ1iSpc5b2d1gLLNpTEdu5MAZ3sYaM7A3WVU8RtaLUiGowjimP2dpXnH1VC7aH8AhpAmu6hkmEabsxiAzpVgTM",
  "key14": "yAcW249YYcfm2cnUWrz6osNYSfZ8MHzNWrMtftz1QgqGLgF4W3engTbiYbdLAsobH8Q1uA69kPaiXoyxvh8kMgD",
  "key15": "dtNM1LDHrs5U4KrCXZhDUXue7pP9Dm9miwvkwAnFCTZVwXUHNSeF6P8LVBkHnAMPp4XLmVtPDoVw2irBG3Yupaz",
  "key16": "3a65iQGaTRhsbhS2H2fmoXxvg8GS8aTFZ6wkYHpyJySzgjHTKG5hKuDcMKt7Mf7hK8Wc4i6b9Fptdmxnp33g6z3m",
  "key17": "5gdwu7nB1gqHcm2QPV4VM3ZnpP17ryk2vJGYqrXXtk8BkygGVHzKXVduQCMQW6aoF915vDorccYht8K8RQL9Fg2p",
  "key18": "3zHEVqeT533DhTgUAjotfPqA1UJmH51iVNWnpQZn8bd79zfQWYMLTsWpDCcbARkHiUhNb2QHcQ6TWRWj42tWpGiH",
  "key19": "3BhGv7jqb3upyScjmcZ5NgsEbCoXe5P4Mb1H3SmCrEH6YbntMiPRRVFbsA3V5Jjfum2Y3Y52jZQxBjSR4b6Yi2yF",
  "key20": "3NRUrhadfqEKAAQjTdVxSVcqmdvkskiKq4iFFPiHEznhsPUq967doFppPiJfVrxZ19djTtUk1MeBA7336muwwACM",
  "key21": "P3fyAVUDzEFqEukMf9DkAFViYJAyKzfYvFPQu1BkHksroqLKEgQ3Z2aegPQNyfSXcpr8XQ3C1yxgUxxAK6wUvV3",
  "key22": "42dXf8CWS2hRbnJpX8Q1R6qjdtHLL2sHSpFBhtnDKQJ6n236xphCAEY9o5qmwpSittQ2E4FLWUmLB4KfFr9JFToR",
  "key23": "5xvJSSzEVYhmks9yVKTSer5JS9nmr8q5M2HXdLDEpuao2xJtFW3WpgTVTgXHhVhJY8eFYJUhwNPSdZLfaeJSnwE7",
  "key24": "AK2fwcmSvAVmfduPdGTNFobrR7DbyjhXRWPDU22f34pbyg1MnHBvUdTJcCg6drasSfUTDzW9hjtwpZP7uxAbNhF"
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
