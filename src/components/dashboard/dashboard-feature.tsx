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
    "5aG2E5EPSazpNMQnJpx6G5z3oLZfFULMxZnocZHfhDWp8KkYi5HPFzk4dP1MQYMdevwCFr2GUmkLXqsyLsiscTTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvfNjk2FkvBwVyYEScnp91GELk2QEiJojWuNd3wAMDxeL3UBQGa7PFz6j4VePnuSHDWXAEWFPiboCtVsyZRRiPu",
  "key1": "haHLdQf6BsYWsKHZTNwTMaJxygUVyn9RSHNWQvf4GhAkSAsQ9PDJiEQnyr3ZoK7XoLdjrHJM6jWkxoh13z1AANF",
  "key2": "2U6LpFb6qap1uNv4n7EXjDwua7Y9iv9ofEBii4U3aTA1XvCZVkSei4ZCoeunW1qkjT8QG1kJhLzBpx4zbR2Xcwhy",
  "key3": "4bDLXb2i9DYiXn7unDskMSJDxCb1i43WSpwHMg2YX7FFqsgtis1QvmFesyHY3wdu9jshvgpY9qAdkzxUwkVZB2Rw",
  "key4": "2gXrDXevSXvZVSVc25WcWte56xWJrTigUxjCs83RuiNvxCJzbTbmPSZjB6QdDgZ3qDmfZkyJsaEQXwHrFbEi6VEA",
  "key5": "4KW32y68U1AmK9C1qBbMtCLakgGRwiCFx46DyN1HE8Xcv9whuroSSDZ3zh2R2njZXHaGwcP6NipJv44DtXVdionG",
  "key6": "5E7aaZ24QAf8oZU3suPkUsuACXP8Huo94DtZNghgSiKpmji5MtyECMvjX7FZFKVQ2KsvYuzQgsXrszJqtVeCtyB2",
  "key7": "28Za94AUynSiiaJeUhJMHGBpkZYXP7uQo9bCTZ8At1XtT3Lo5QXzjXzyXWGVK1BjmSxyget9SUZJos5fZ9ttxtEH",
  "key8": "2e56LHg6reEMKEFBWfFVibmAgwXrRh83Hmzmd8F1DH8J3u93JRssVZrhNE2EsXqN57pYJbidkKw3jv5DymjW9TRf",
  "key9": "5Czn2ZEpuMuez8yoecx1rWMxnW9rZUtWDAb24e8zajLKsAMnTQMzm4bGxPmc7vCxmXAfAEYrAiqW21TvoM7Yavun",
  "key10": "3SzVZNZVPXEVYmpijy7wMcXbvYLDyFgutv2MVpPMB7Yzukw7u3odjAAeJpUwoD7HfAww7kaaaU7WNUZkW56ZbfEt",
  "key11": "4veK3HLpo4W8oo5No1asmwVvkKJ7EqvG7rN5egB4mvTciYDFDMLfmHRQGD4AJEMWNSC6fCDJrXB8KGw7NShxcS4f",
  "key12": "yGYyknUa7kEyy1kGCA1dM7DKdBTaeNWHTu86JnhH3ib7iiEistPtB8UnRR2Cn6mCJVxWVdecUjMHPvcSJcTDN6j",
  "key13": "21MDzkVTUdhQEiScZAYC6TwU7PJnJihog7Mof2Cz3to6Zmg3Sr77QDapwQCG7ViLXpBEVrDrf7zty4UBrvibENSn",
  "key14": "4FvXXPyBALLyxuUEwCquUqHcks5MrirPhCnYMS3CgsvpBsUdzVehfssb1Jj4gE36y7HDUyN6EUoda47ydmSZubTP",
  "key15": "49V5phUEyQqubrjzetkyM8gnftxiShVucneb3rv4RUwwWYAPwq9RAyKxhV4UJLCbpdCoLc3i9DBnWNbnc4mUakvK",
  "key16": "2AZADenN9zVQnnu4MCzXqKZUT71sN7Tz73Qx8JfvT38t1pzgaS5fS8p3aT6AtXgMMH8MuiawVGsSoxfmEAXdiAAf",
  "key17": "3bfwhmedzzXHhuxyqe8DuTBwHTuJBPuQh1N1LTEEyL6wSstHMmwTfXhUT2PBsfN8h2pixKLphWoNsvvmuQhJoKn9",
  "key18": "pt9B14RzvbqfE2jfHwuXqhN3yyB2LxdBN2WqnvoRGH9KasLDoK9nnaJ8qErVFqFAWzPN3bfrVwTh6nne1oYXqDc",
  "key19": "2pWfq8Yac5KLBsvZpzUuddUyiPxysFF3frFkcpo3HZfHnaVQcjqQWWMwPuBLk7PfkMQsauqB5ZugvyiTGAiNBUsV",
  "key20": "26QjYWosDJBVyC2AgSeUyJcqFybgTtLQASAXiK4v9HLwJD7wD9VrShVD1Bts5iA4zhMRXGqvsDxPpdgFEra774Vr",
  "key21": "5CrTzeeG646BrmNvANdACyfN9Vh2cJW7BR2CVdt7M4wqcdmVcraXHEUrKTKCRihT7RdHcfg6WmXLUuAzf2Zdv4in",
  "key22": "62Yizf3HG5atwFRo6ktWfEcFfMDLBm9rAMYr1uvSN2ejtMnZC2R8ePxsYDK6tx1Z8BN5XxC3sAVXFPRVQpnJHHWa",
  "key23": "J13eRQbHWHPQc4Z179bHA2hdB3FfMxEBxRFoPTbpYzGUy74cDrmShZegvxSg1yiUJ2ibTAEU3oHb8F5r4XBmeyF",
  "key24": "3tmf2skKV8MQXRoSFoAkwJ3dwTUFFoSu88vuZfZUbuntoBHrd9cNSijgQUTkRVRBBN4QwpxzFPpJ8LADZ9Gi3ehq",
  "key25": "S5hedxaNFQx3N9uLfCFqzqLYkiu4DbvqczdmhC8bYBk6SiyWqsDHBiAAp3hkzrdyTgBr7WCqmmxfXvwhF3V2wSr",
  "key26": "8CzqGVUbgtpZw9y8bbvSuRvFm3yzKkrfZTRBZJNsnupviXNdWXHe1t168XHJSiBEYzCtriacjvDPm1vpXYkkKXc",
  "key27": "2xbs1WrRzbdXixboP3KfpQdMSpDdpAzUaXGB5LRVqTxcFUmunUdsakRHgdPF8uPHXhEadyum7TwnRn4oVRxhynB1",
  "key28": "5XShfiECoNL3qgH8Ajvj7eE7fUgMdgquqJt5Ygj9fDAe4ofDHJxWExRWUcPoJXTQp3bnt5hoipz25g2sRgLcFgFr"
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
