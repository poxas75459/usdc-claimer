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
    "5Ah1wvpWomorsssWwAssMWXpBg4DhYZNozpW1L4mHAzWTXw4VnToA16fCkorsrXgSGQNL9VtqHvBg5YykxjkauRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24EN4aUcxEGrzmqzv3ERy7yrq5CGGVXcduxv2NHtCzECzRzX2Vxsto2BNumBxbq9VnmAKvhKSNAS7dZktRRNQcwS",
  "key1": "PDvTxaDWcgqHtVkgN6SHZqwE3nWHtxa1g32Bp2PQut7mdP4XetLJMEaXTwQcF2a2nVi6GCqczvczL64WNTBSZMF",
  "key2": "3BQ4ztr3BX2jwUVEUEJ6xwHAnPY13LkH6FeBq3jNsdrTCcyVdQuth5ahg6Z2A8a7xxKxovp9zwZ4Dw62xjiDn9AA",
  "key3": "4NdGhGAX6A4zybyBtd19GR77Vc6mKvvoiFLhuzSriVUfTCNQCWL4sg68S9Rhw5KFxP1EACh6tcyRMbaLU56Qzm5X",
  "key4": "2p48ahdkekCjjCZv2hdwRYSSUhiYvCdAtnNVJ9hHwRrDygzCsj2tM339tYK9WsiEK9Lh2y3vqBq2nCCQA7ifutC9",
  "key5": "2V5UoQg97zDdnDC32j8U1kN9jc8ej1QCPKNDWDnnkJb8DzAPZ1xJvifk26WreYZj4SdKDVthMif7Vr9TVYQj8ZH4",
  "key6": "ijSENcq1k611e8VYkdSv3xJuuGMoMXSyDQkfYL4SX7pQXYKesLynYhpsBRU5MDqCVBn9XnTJKDcnEyTUdfztEp3",
  "key7": "5dPAnx5N5ecxT9dPQjtfQ62DgfiXUBK2TbaY5FJUvwqtjg28GYKvvyXMnxzwNsrkpB71GKa1nrxozwsGyn9EgRvR",
  "key8": "MBAMQZFsW452Em2QHCrW2sybdByN6JMCn9naQnJ58CKjqWPCqhgAn7d3i88xcEzPrib91oSk11SD5d3xL497TSe",
  "key9": "4vsDt3PN1Giju75VQudTtAMZzDdBYohuNwgSq49ix95D7LBrZ2pdqYeEfrSj7CWs85CtxHnHPzkDWTAgekgG4a3G",
  "key10": "52QheyMTc2LoSi5WPpNFXxYFhwRY73mCGAeAwRKGBbh5vbhWyKGeXStZXbYZooPr92PFfzEhY7PY9pHRwG3fmJ9S",
  "key11": "4PeEi23j1PcWVH3jJRi7YkAcNQd1amPzdQYgB5x5CAkwwg16siS678ex5VKM2FggwumJdL55mSiEWHfh973Mi1fv",
  "key12": "4C9v9GMeXjkF5MgnKyDS1UrNzDfGanFwLbTzDezkE5au7k7jLuZRV88iksstNVof162rZB8Pe9Uxkr9FandSGLqh",
  "key13": "VYFPmndhzWmDNmtHs4fKECdUD3o4zTmD3NTiGK6EdvYSjrthetmqpw149zv1eL8ndsH5rq7m4q7UQSTgYGfVaaF",
  "key14": "2CLU2ppxLfuvWBdQKAiKwmxzMobseVtV8NxHhQFcLDeKUKjEJymJYhB3pNy4ingsFYY34U4DgsRe85yx12oQN1Cr",
  "key15": "528qu1LMbj1zXtNYY6BitCz4fAYkdnMjeEZGELrbgTGFfD9xpJCHwz1QSyTyZuQ57F1C9ds9jEbjgK6Ci2H5Qju5",
  "key16": "2DmMot3ZehjVw5aHcHW9wQu6SnJheautpCLcBaFrYh9N6UaAjzmyBg3L3TJ3HKMrtNKVVfABNsEChJLH5WzMbhBL",
  "key17": "oWBMgGLhRJfgvb742PcFj6iDi8rGb44gpCBWmxW1ez51fdMnijqZ6HcdbwPy6BwmAGstkQyvM7nXwdW6vS68VsZ",
  "key18": "3QzGcd2i3wQ3GN6PpBwDvqD7qzTSrf98fUCjsov2Evw1bTULvKkqMY7CyLHSeF44HC6ZmWZ92zFeNBhEa1NJL1YZ",
  "key19": "3qzeCaXg6YtTFB39TkDebiGa5NX6vsfv1ZNRxDyL7kEeCjbyG2a9VFFgLnqVfUNaHQwvPMSUcrm5XP4Chs16ek8a",
  "key20": "2tJSmeYf8xD9bzmbs9pzP5C6Zwv2t45g97kfeP3KWiDFK29aq6EPWZ1AaHePQCuC6j1zZRJdXoWqdk3vZL3bFCCM",
  "key21": "5xPK5Uw2VTfhoes5zVvAV2hWgbuE63WB7rAwtnRUYQRrkRLPMbmmjd7qCBJUWpeKeJPytQLeKbeyVp53PWHXtW4q",
  "key22": "X1xDzt8nou9b3YHe92gV7SLwzUzqufb3JdqPXBrfeSU3Ns21AsT4GuUmu7T4M6PhKLnBTEQ1Mwo4A8LyDHaenJU",
  "key23": "38XHYAafa7SQ2c4VumVtD91KnVaZb1mQZkm2HE7NffxFUaCcfwEEDFGAvVaprGP78VHPCmLRE2BEry1f8T2gKA5d",
  "key24": "3pUodJTGNrzemC3iAHHZzEpMivTQ8vwrHhdbndgEVibRwDtNmmHZko6Y3rZmUTSJ6evoznaUCg8qvuxgsnqGttfN",
  "key25": "2FKNDK5wthMSMhCMtQxWRwoHgijqJK9UHxNvGPTSL5CPQ1qoXdRfrYyjCoECMcqTZS2ccwTK57JtATrfjCDb3G4u",
  "key26": "4D6A8yz8kyty1f1WTbBmQaGSw34CxoX9nn6nec2rbes6VYrmz9JAjauXwEoupmmCHjBxCfYVkuncffW6b7B1mjqB",
  "key27": "5ZZamWvcePnH5AUpB3RDWN1W5dBACBn1GYBGTf7yFBWLod6WJZCyKdm9UaDHjQV2dsrg6dQhuS6EKsT1UYw9WgGz",
  "key28": "S19PeXuXNbTS2MAdtAns6fdjE7BNP6Y1DqMfYmdXgUqf3PinDb3XciU4Z54FmSW3BEqyKXW2TH3dsoe7Re3iK4g",
  "key29": "2cZYhM1Lck2o9AHLZnTgPBJygaRS8KWCjUUBfGkQczUs83tqZeScGXYuKDMWqNc6jEKcSisZi4VkJjNpduuV3vZB",
  "key30": "3UwNsB5dxWJ1RxZcePzNzJZbVp17v1w3oVApVDPuQUH7U5qjvuo7zy44M8dB7GrPKuw7pmF2W8YbYbS6gPVWCrya",
  "key31": "5gNqPMWiqL3jKzvKWw2q5CWK6PaTdJ2GrDFkcZGDtxK5s2yysrpKjYkobLo52oBe6wxE8Us6465bxeL9gpeXPsdv",
  "key32": "5mb3dbXei8HxDiYJVSp4mGLwXDXuinYHVfqEHyeVPwcVQcyU4W1x4SzhasB3oTcHdg3eJ9Q5SHB1kRuNCHVTtXwJ",
  "key33": "67GCuEm5KsTRGyrWJVeHyi27mZnCuo3gVJ4FCRhp2hmFk3d51jvvPT8CprwYB7j6TSzwtkKP13tfJmnhp8ZYMTgQ",
  "key34": "SoxTRsTjZLux9rVLujbdCJPixtH8UhNoXSfKLqRukcow5ED3taAVaoVxzf6c28n3tGJukLs16TkyjfzF7Hx1aej",
  "key35": "33FNCtyyx9dKXYGEpaMmSRyNQkUHjgcZ391KT5JNaQEkQGzcvLxUcB6bRxdjxbJf61ztswrMsUtPp7Wq3XzmFLXu",
  "key36": "52paRPcxbggAVXaQ8i4mabqj8sBohs7nb6DjqxKrdYyQsJMASSpbxgmq5oPB6GvtkrfFe8hJtDgnJwK2j4Dym8qd",
  "key37": "3kixKrUEyhsjsKpBLXkV1A8VpjxmowCfLnodRmLHKr5w4KkhagiiNJGgjKN8Uxcyurvz6oP11am1xBLbedDU2Gkw",
  "key38": "tMEWq4Akij1BPxGdsXXs65yyvt26FrWfbYHDtmLxt1YJjjQHaBgjTKbdkDoda4zmEB3QNuq8n6Um9kokrnoLDVm",
  "key39": "28BqpDw6sDBMqSM2AxHh6n1NghzkdfK7UXQf9rWWkTJYy4oCkpU9LXxEGYQvxnLDvfZKQ8FoPwDVd1d4a6oBdppD"
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
