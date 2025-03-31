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
    "Gdaf6MQ9S6VQygXp466DDMKGTqXQfTVL7HjYvf9UUaiXXEwTSVcVyuioPVyo1iaDkWFHNGqo6dqS81LoqAE1fp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CeLgEoqWjyC4gnFYfXTZ8tKeKS49cNSmiW2eWUKF21QLdMMry7ryVNznK71mi5oNeKwcLkVcdwmtHTvv8uuRNm1",
  "key1": "nQnLEuYkwzbZmyu1SJygCCGjQgjN8VcawRrEAwbVYiRwzPM6Ufa3tKwMgU3n6i931MACvYS397hfywotDo28i6u",
  "key2": "2akj73nn2n4PKRyKbas9EvPy1iATNV34PucBvwAAaokooyRm48n3kqaFNEZo8yXsNnynqsie1tbNj1yDvekB2p7K",
  "key3": "2NrTEdAZ4LR67RZL3Kovt2Lj34RroamibGc4s69GR8H3Y9ZE6mXXrGkeuPn72JzDMqUf8E1CeEkgftPDLK8bLP9c",
  "key4": "4xmxfn5NgRqTXPJdfLMpmRSpyX9R2fmQBwnYYPDJCnnUCtfnhQCZ8uzxNArQgZBTMYuAoiNXrnxBwfQhCHWCDwSV",
  "key5": "31oqJkTyTHWMjfx1RmJC6ZEwbs2Xzz7mMovJBN87DZFSrRjpXwGKeQ3uy85FSwE9L9NVtFsczEZLzq8Cz2bhk4wh",
  "key6": "2Cw1XoHNAxRVqPfAzmwGinV5jRKN3FhYuGcQ4TV1FcyJSfGTzLywRQhsRVACfzFzfGaNVxpun2TN1SvjYKXhnpSG",
  "key7": "5hrsoL9SJFF6fnW7DAXQxnToADb9Gss2vJ72aMNtiFF9LyE4vwKgyHmFxRecNUdpDoVSNiBNPtJFYAcjbBAKBzyG",
  "key8": "cgQVsqEfnXmkMMWHNde3ZQYrbfbPBhZVWtFiMwyiiq8AXz1iuoJS4XaPnUXCqJr74jjS9JqkLLv5P4J4D64NbZs",
  "key9": "xR6cJoitTMq4tRashJ6vwRPbNE56zJ1ZRCETnCYiby3M9AyxY2Fbd6ZN68yuzf6mA2Q4KPeUYod5wJB4AWBeFfR",
  "key10": "2cHtqPf7RtMktMaovszKUJCsjgMYHs6RP3ds2nRJUDXeATbMogL6J8TQQbqjCw1xVs3azCSzrQ2UsfaTGVMowjUD",
  "key11": "5RtGp8FfsCviBsC8WjvYFPTx71qwomfiRVc4rnqJzemAsQL5XynMkyUgpyt8v6dHTqNkZurrBige9mGzwLeM1LhS",
  "key12": "3Ey8Q2pZfCjSmtesCfwzarhDXU3f6FkxCtUX4xgeQXxzDYJLdTA9kX3gRXbV4DRTRYjpgbXkq6sTS241Gmx2Eumz",
  "key13": "BGfYQYEy7Esz9ubdkPFsNc5mAPDHPZ7HbhJiAHw4ZrhbWxR1yU5pEUKrkQVThToVK6pbyV44rC3JYTLowKVQYcT",
  "key14": "43qPLi4WExRE3Sguja6iFvgS1BMbHHaDgnKu6Hr3s5jwt1Fcx2C6n52ehmEZrYEUy3mF6W1uigCDk1UenzfFz5bY",
  "key15": "5tQF6wWQAKYkSdeJibKuoX7d9ZpH9HCCCXLA7PqrHRrFD8dBZCts1UjJmwvwoUmxjW8GjjNBqAKAdrV4wp6oofMM",
  "key16": "5sn7axamv1Ei73zyWmu46fFBunHsBPMZyB9Hmh8gpx7u6zcDj6P38vNfW813hb5324wp9APXJgT1MHeFiCktBtug",
  "key17": "2YL1Aba9DC8oQHisSxwJicL1ZhYAZhyq6F68WpAsD6hAZnS1qm9uTf8XpNTcpE1D9trk5rBeMWpEAVNyM9uXDGEG",
  "key18": "3WgdDFRnu41Q8ySsky1ovWJmdigPvhgnjvBAEJ3Mjieny8YnPgu3VJEHTJCNsbEKjMYsyECVrZhb4LoXQcs6cGEa",
  "key19": "3nDXJGuQSuRA31gKTgzTyxpVYQmBwvYyZC3smt2Nmq321MowQ2R75zR1DarF2edjZs5UW4rLVamHZ9hcWdU3A7ZZ",
  "key20": "3aCPhfZPdH9B92d89o5oAhECYeVq4k8H4yTuu19hPLLijGuLjEjiLqUHQFmPgTUuqgb4dbZSxpTbpRzhhegm3oQc",
  "key21": "4LiBckjsDXyEi3EMZZVc8WRjDQ6pUDd8WcQ8Ys9ga3wv3PAGM5y9ByPDvCYYmfUfLVtYYiv1aXN6h5CVPYU5ThoJ",
  "key22": "4RovcTUa6BUpvYoXeuNzL4kq84qETFwrAq44tCWH73w74bNcVYvwbN1bwS2p84UQJt96VrmCc8BL1Z5GVMNo5CvV",
  "key23": "4B5QxMrJQGku3kNxQU9wFRPkBZY3VNk39cBw5UJTJEmrZJrRLuVGRquoWaFfw1bDBdwKmTq8Jj9PQX3Fb9Kj8G67",
  "key24": "4busazKmgZeWsKBG7kxVsuzzUeByrpmdhuHyew5j6ZWLUDTFcDNoAUB6xCzZL2G674utCdRZFCsNYc5sqPymAQTA",
  "key25": "3RoYA8WLpnV7FpiDdbSLW69JGtbccrDsneXHFGRJaUrUcVCk2TzksKJKee7gPA5KaS6yzQ1yxCBqX4Cc2MZiw6qT",
  "key26": "4n2j1gzp6QSd1gySBMPEQLUjYp9gPjUMcScdN88S6jxncP2J9RwjGzZaSwU3tQqHGYMeTD4QnPjixterdP2gnY4V",
  "key27": "UKXbCAgHoptdxy6i9BDA2aLRTdwvorC6xSXwXX5CjqsSDscvy76VAxr58y4nVFtFyRRB7wsueSo7eERUndFy6GV",
  "key28": "HsdSVcE3yoDRR7UytTfCKPGaZKtjtdWTjtPfg6HYQ49WPYCUtN9JDgK3sw1WmPxex82XPgSWPhn4Bu93x4cs8re",
  "key29": "2jqhfDAcBwKZiM6W4EyJBZHBq1wsvYvKvuhZgz5dNHt83zdL5xyKb1jFkvJrZuMXTNskup14n7aS5tVewu317puu",
  "key30": "3VUtAKZhQAeJ7T57p9zznD1A5wBPx82ezXVyb3J5Vs13m2fVzNevRGyrvpPYrxCgcoJfR3KhYp65B9bovmsQq8w5",
  "key31": "3x9ssaTcpocPqgaqT341yRRV5DMAfHxCEaoy4QnM8RqZRKKLzWiHy1o7enTngycf5wDZm6s2ZrBevabrbkZngj1e",
  "key32": "2LiFpZWyXsaFvT4S1VfHUC9eX6fpStg1Syv6PFJzY5LAtuLCCf46aMR5Hn7KaPyYo4dKNEhWftEtcFEHc3HojCa6",
  "key33": "5MKT2yb3DxjtJWCjUVBxrRCnLiP2jiFAHtoKjZKeXaKeUKegDd23qidL9BNVS7Nb1S1T2tHBQENDtLuTn7F9BEVq",
  "key34": "3KcdBApc9X8u7rvL5MaNo6zMaxBr8Vm4sxaRZ5eFG31HU3AbUUhEv2hJrmoehLjn8KACxjrY1Xj9Mujf6Rdzd6ab"
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
