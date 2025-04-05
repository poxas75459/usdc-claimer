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
    "5bjeDH5AbJxg7XmpeRMaKFUL6Y62xpW3nfhrmKwjJBnyw4822pdJBZMGcyKfdRYukSUWN12mseckjbBz83j1jGXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckvDgZErCwvDVcgKTsgSDXYtCFuvba9dBr4P76LxYCBJVkka8Gqrsaf8xTJgTcY9VPYX39yHy5jEgHMwBrQq5ZX",
  "key1": "4qez75d538qRheYVoWGn8sQF6EEimMoJMfCQsRteS3aPujMeYwnY7JBNukTq4CiR87xjjQaiNEW1EghjTxBb4hFK",
  "key2": "GMePgsUJZ3LwaBcqvhWA7ot9UsEMBSKVypxSUgHf2UD6SsNVycTbSzivdRL1RRVUZhhYep5CBXam8hJwqisk9zj",
  "key3": "4GNYvd8CmCmg5vb9Mj4ssUmXFknbWJ9yWkhnHSMyqMwJsw5fFPFn89PTtGF72CfZfvcVz6JoaBQ3He6csNbfzDyC",
  "key4": "4iEPvAXcrGM65KXZH53WsiFnVJUibs2jMBZxffPGyqEJWRWuZ8mJpTCUUosp5szwT73PMC8vjs6MTTHaFuhZQTyD",
  "key5": "2dFN2aTP7FVkWMBspC823dkS4rfpUqUVteJePqW3v1RQ98KnLJsAozxn4fa8pwppfXv9wvNCuQDEAvS4oQYwrJXE",
  "key6": "2Wt6a9fV8m7ZYc9ewQvSRXRrZ7xySMcxwSXow36NJgPm9pHRrLord33GVzJrtE3gP4Fopv7LAozqDZYFEZsh8xSq",
  "key7": "2baftEuYEsCKsP7GG28ThJtsjqydSjt28zsqNsCms4QiwdkG57rfktm92uqnYR9QwxZDhhJLDXSvvompK1Ktd69k",
  "key8": "5ZtsjzgcgSuu8j5g76CtpvP4sj6UhRTAXWqZ2D4Jeac6S6eFQiZGpc5AqW963Vf5cQhQ9DjJFPT9Lki4VWUojGsJ",
  "key9": "5AHoD7w3nvTPdFY18rJpJUYuQSt48vaJwE3QmzvrbyW28mUsNN3uHwShh6YK3tZLe9R9xCmxWNdwgdUJLgsN6Sv1",
  "key10": "2bAcgazfZp8EZsczj1tccvev5pUUpbwe8eB4yuKQehxxQ5M6KeAhVQHSHLS4LbiY4nVzBeauQDj4cWSQXmmy3cMo",
  "key11": "63hoh4EAJRoEGyFv2AVw78ebeVyZ846k3qTnAYpqX7P9BP4ocJj125DSmwxn9nR5xMfDU5vJniXGfrqcCFNQjU4V",
  "key12": "5CzRmmd93JRy4akiW3joDzp56gL4GbNmVAn4h7xTtm3WT3sfjUdmqwLdABPjaD3NhCTHUT6QQw5yLVvFhyka6vAV",
  "key13": "diF1teUvJqA9CqRCxfnAdM1ftxK7vVkHqj5NtsmN5ZeGakASYzpg7n53qcgoKUtchVCq4jMEEvVkrEbyYPt6qrs",
  "key14": "3ebViB8o92DQn6doxNcKNWjBoPuTLYRMfLo2TN2neaFsc855g6YtfpsKbzm5EMf5H3uo9ucMpBhB2DxQ3uMfzuat",
  "key15": "3ywVGx7c7cnQ9s4tEVt4BqLeYWbfVQaVE1DHYVehDjmkPn6sPHNVNmrvgxLfoC3m1JPT1VSVLSaK7n6H6ooyMprK",
  "key16": "4KActEcBQM453jwHiG47Hd47rqXPFFsD94McUQn4wSQb1je4VrsE6MrYBd1Qjso6ES7mPkrmk2VjnMKADa3RsrwV",
  "key17": "2brFu3ZWKHPsUDM4Gi1JjnBKamY2UHqR64SBPoBD9jhL9i4fKERztzXpuyU2869jVbAKbF8fEpX59xgS58ecbWzN",
  "key18": "3RdogTBB9igGTvYeqws1SGinuReCGRb43oEts39v9Ry2rREv9fR4cwJmUm91MFVuk7TYK6ZT8dCenVb7qFCnGgH2",
  "key19": "518bou7oFcg2LHNQtLFAiUS3nHdUJkaueiSVo1ZLkdDDDPVwKpCdpkXeEHozi6FsqJ9sf7hyp4J5o9rVYnUSM6Cy",
  "key20": "5yMrZF26PKyjrVpHrFYP9jdfMGtKNcqrVH1dLmGFomjjwks42z6vZjtKx8cwGeKMChrmW6S3kaBFxF8VeKCdR7vE",
  "key21": "2PncMKqvqHA8DHxSfo57hshhZYugVn2d44FbYwiBXY64xG85LGTzL67ouWJSU77Un4t6YqE7HPdygD5d6b5bkMLu",
  "key22": "5q9bzpW5KDv7MNtpfai5fN8EUHZawfTujgM7s6jDjFqRxqWzQCdxUQSjcx9Ya4wn6faqdVtze1Bgihi96wbEvjzj",
  "key23": "3iAuh9sUfnmkpqrANq4nWMwDaAD9krJG9pRvtPcH4KAEygVqn7E1cwPyjGqG8iAsnu3AnE7HuAJf5VmRhy8YmNZ5",
  "key24": "2TbyREXJuQEY7rfLEYeN2EmVVKoNMxX8TLwEsSJ33y5sN6id2yZ15FZUwyzVTcwshrkh698Ju3md6h3Pi5JopVCM"
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
