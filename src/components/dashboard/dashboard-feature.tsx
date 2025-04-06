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
    "3CVTSTCtyQDMJUTEATLmPFHwZdfuw5R3PrqsiCpWS1FeE7vmLviEearKTGXM3WF11B238P11ABXTDTUH87bKwbtQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29CdbW8VPcz7kBn82UoRCP6Dhe6qGjBouJSC6eWtzaHLMVSigVSffuW58efhtw6n3Bhmj68JvVdFtk4oMrpzcsSG",
  "key1": "5puKnLJXp1AvuJFaRcjVCscNwy2eZneWeMNT9nV2mR33dqjATWXmq7fvGyyUdLXowcoBW58f5PiBznnXqbaBcvw2",
  "key2": "4dTkVoeX8j178fdLGbUtQUcCUaRY2aGGkX8QZ5PGUZcaVz4YVS8SP1eCfxQvA3MZguZhuvXDT3zrPCYQD5kFhMqa",
  "key3": "3XEfZyLz7T7oGrQSWXHjAKnnRcVNb736HipFxZ6BSHrqfoY9kLUNGMNoSpeoteWLfy7Cx3GMfrk8iakDGKaupp5E",
  "key4": "5Ju3peGUbeSdGpVzmypPFiZT9iNf7UZnteLpeKfEEVhHCa5gHjLosHgippQDyLVAQrqt87fmytHj7tstPrVRXEGV",
  "key5": "4THVMrneq3STJMcTPgiCWsazx4svmevhNLJ7G6edyNGgtzqi21EJZkJNTjLjj6BjMVyJVv9ojQmW6CZWV1kPGB52",
  "key6": "9aBMmjoMrUAXppde2mbX4ENZHo9YF16PAJYgbZd4dcR4c5Nka86oBiipZQupgx6LW91fSsVfGVQvkgF9zvCve3P",
  "key7": "2BrqMDWy3bqKGhob51N8HdopvAXTQk8HsVJ18cLEPcdf77UDHXczNHzK8qU626Qy1Bf1UKFAhgdRhKC3w4gQi2k3",
  "key8": "3YuUZJMcThGNt3ZGHG2Bomg3XLzdVnnPb7kUGwQFsrhRVmgBQSA6RPWGuodybC4aaTn6SPc3GGjNxvFFRee1fV8L",
  "key9": "3XDZ5TYux5M9Tk1hpxmkAB5N79WybdfwTVNJ61dfoNy65HBwZKbYw5YFuT3DcZKwUtvyNZx3NZjJahkX5yYyyJHv",
  "key10": "416mKtfSxAE8Y8nnLCkcjrDrDJwsZh4MDfDpr3bphgDApGQgNtaPxQ3i5ppbVKbEWkbr8DuCQxpZgXfkFTjDDMDR",
  "key11": "41Jdhs9Q8bxfW9Y93NeGUpTKnXeWznc5x9aZAyPZwxHdUdFnzXmNbbDfb7dRv94Wpoh2y2XW7CsRLmsXfDFGyptT",
  "key12": "2xo4QY2aeDH733ddV5EqgTgrZ4DUAvZUoYG7AAePrgKMHMR5P2J6Rrh6SGEXTacqCLKdRYh14ZTKisy93YocdfEL",
  "key13": "5Bfz5hSiUnE7M4Q8pV4LogEFyeE4qQKEewGDiuQjy19DbnLHENZT1jSUFHWWpP9W2JPrYFKY4fmM9NWg3caRzWD7",
  "key14": "5mB2xu6DzwdwVVdigu9JS3fyaF7aDJZ6iVXk77dKaqjmK4DSbRqoUXwmhvin1uypUhqbELAg9YgbmhYEDoDSi5k9",
  "key15": "2eg6ch673hXqQbhE8UhaPb2Mp5cMpSq4LLhm7TDLEc3pPhx2vkjPgQV68XVFGD3szGKZWiFpD1MrP37GZhzp5p3d",
  "key16": "3eW1TDYxbGxD3d46poyMYTozD5zoZbXx7XnUvoKwekfYeq3sRoPh9Mzyhy56bQBzXpAAL4gYBwcTPMy1ZKuMt51p",
  "key17": "5pDkEGfK7q6zKdP7HPUkk362ecdSthpkBPUdfY45LaMSnBat4TS4EyU2CYHVKBq7xLKnW4tQU51v4VJhzdSCR6Mc",
  "key18": "4bmjXxAAoSqk8L73qk78BWr5UYYHUf2rwzinuXuhLYyWroFsRpzpwCjm1uY3xt3hBg6oy3sSGzNhP1j6qFyUnd9",
  "key19": "5N3gYJ7hvJjiKZArgxSK1xgos7gzBmYUvJ93Yq4zoH7hm2xGzpWgDY4sQ58X5LsSj7EPboC87uhEdBASetBe178y",
  "key20": "5aC1MhSSFnifk56MVooQEqVeZkpFNZHqr2rrTK32Ge5WVGWedEH4z4NaWL6A6Ua7D3WVUXGqGnDZnqx8oHC6YFf4",
  "key21": "4PhtGrZ9UDAbwCXoC5st3PmiArRCnvzxRZABTsYszL77zcxJFTyoEGjZrNsGbBH9e22h5kxpdybjRhVrap5Vf3to",
  "key22": "3mUBsRLS4yRLbbDD7pJXMfG5iMTduN3yKzYKKidsw9fLCe3YNZzooF8agxP2s9PgxkeYMCxU7uFxnRzYxT7RWvct",
  "key23": "5wM3CBfbxQs3Pybp8gPSVVT2w8JQx9eZbYK5NsEFftFvbHUKCLt3zMe57HagY6Lro3WQ5btSQWfAH6BUFUXWCwWU",
  "key24": "2d96NLo1mCNL8HeyMmbRjCLH8FzT9V2z9jgK8fGsUcU7yQQsM7cREWhCQtKPMwKLoHnrcLxzzKjSxD2gFBEoxK4u",
  "key25": "3yddPcuiap5yzgG7iDc7RtRpcTePuFfJ3sG9Gy11LNsAMeZ1K3DynReSHDrrBQr9EsJD8vmL6T9dDNmH1amJ4GDG",
  "key26": "3G73uPHfVySrYjQfEqUTum6k85nVmaciw2dxxXzhQkALBxnNJdVtkK3PaVj42Exxe1QBwL9R7vaWmXWrrZH25Mb1",
  "key27": "5ukxgDvExt1MeMaUefxxTVgr5iuCrX7hGW5VfLZ3MQafNKHNWuXUB7VzZePmzfAE3iTiHNGCmEth7MsnVVzozN5G",
  "key28": "56qDaBEk9xJVSY34CPC5rNmFX63tLWNvFKmv4viN7VaJP3Dp3zuyLrvGr4zBB61eNhzuq8SQcSiyhrWqfmF9eJsW",
  "key29": "5djweCPH3dahdmCFczE6DWcao6DsZhqbWP8WdkEwNpSAtCwA2yRZ5stRHkv6JZRJyiBM96RcmXHWksM4j7nDBqfi",
  "key30": "2qeWVp1JtW7MQ82LyDeuRnpkeB97BC2ckGgGzLE5hFxaKUygBc5cHFLwQwbdu7Kss3xQYY1CsaE2HmFNGjwH9Ear",
  "key31": "e9chkg549Ldch1hGm6TfSaWXiqAxvS6km74wDSUXC7r9TFrHqKVPUNqJmbaaspErkPJg3E5aFAM8GdbPV5pka91",
  "key32": "3gbHiswaf24Hqt2ynfrNySszhun48KkPQdMPDoVd2ctvN3TY9TX2FKgeDXm2aC2GmXGvBuXSRMEuUMgxKaJYcmNZ",
  "key33": "226Bk8cTz2JbqrbSJgiMYYAXRMhYycJNDgs7pt6fLLChc8exg8LTkHy2QdSyZnP3L88ZQSL5z2w98v6gGknPm5iA",
  "key34": "56rxZDGdLh8fr51TKaZL2m67ZHWyLw2mSFoMQtaaqwECGQ1Q1XMPMDNpvkGgy7AyTuqXcNV5Gy6CBgtQKro3HzRU"
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
