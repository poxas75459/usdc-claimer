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
    "2rkbr6g9cjz2mamhgj49cPCYKesakDd2PbjYRAs62JjKT64Pjvy37BLsDxGesPtVzh4Daq3K873Lh22tFYCKNVEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymcjjizJcQkWQwf2qunin9wp5rwuvmudRZ8DNvBohfTPy1uFUyeC5CJgopa1eBWby2bDwyS58shgSu2YtXq1XWg",
  "key1": "4QfFhLJqmbnggpH8QpjViwR6wkufwQxdfUwXowbWDkNPZSAcjTwpfb8oKpT2iUNRF5mDZ1v6vwLMn4Q8ge8djyfd",
  "key2": "poifXkTvwZaymsno5n8ndwPJzT8ry8Pg4XHib7H3j53c68zxydgsjrQHVJDVUhFyXpLJPcg1thrs9bjrFnm4qjN",
  "key3": "5osGzUaVsCy5ZA4BwSH4DLJCcjE7PSh3EJq2JmjwkZnSEjSjz2aQUPp7nG35TtpRR1G6q9wwXjaW8LdbyPDQgsMd",
  "key4": "44jrnfzJ43EDLPh65QeRmXMpeXsPV8ZxHUc5xknixj9bJsCgsfKRPdLPV2ydAf9HbxXKg3LMbxoehY3LyPRxufYu",
  "key5": "5KAcxmPXKv9HUPXWRPHCj88npxDsLxV56s67exgvVmHXKTz8hvsDCWfRq6ZpjCGAEGYMo5odAtKpeyU6LLuL8Qyy",
  "key6": "3SEUhT46G1ybB7AhG3EGhfdzo2sfuFjpRBWqEXQhMq82ySvj1ESaDV3s1dxF9NLwbXjmKoQTNA3aFd7QtQkJsKs1",
  "key7": "4XxEJSiNAJ9xkSoK7U4F6BrqouAGgh9ofG3rkKg7qt4A74zLeYtmL5vWQB8erhZpWVT8vvboty81X3R6fvpAxciE",
  "key8": "5iHADrNU7c7QPZsnjj7fN5ynExyTJkMxM2m268H99sPaB9gYp7SBJ1MZb1DuHernupYQ6Tvh1BNGRavY8Q7xZ8gi",
  "key9": "j59pDFXYZDfmDrJGtSrCKxm2bfemUyqBJvek7FkMmsKe6awySJoQgU3ToL9QvZpsBShxephtD7pPg7Me9Kqb9Xh",
  "key10": "aatMh9Jq28qJ3vjET1sd9zQHCz6Mnq1DjTZGMGVcrDwax9cVy2wYaSyRx9tGTYzj9RKK98LiUtiae6AjQcsNyLj",
  "key11": "3L3yTpyE1NcyDvRzzQrkGri8PqV2VgXf1ZMAGFRboapkATzWbAmXRicBbH77x8E5Jo6roHQSQ2u2pTNodk8p936",
  "key12": "63T2bqwigRNjkGeFFTo985bzqeSJG3KXY2oJLvaLC89skKnkvchFEgZFFYQZ8T43MV7ReCWMibM12GHfyrizyUq4",
  "key13": "4QMjVJPXoiwabCicDJMBsdgpAbQB8aPKT9sC7MUgKvjkgF9HjHCafZw1kv8ttHWwNQd26EM7SRRSZAEiZPFeYsiM",
  "key14": "tFUYzSkK1K6eiayPVvrtPz1uS7xNW9oiC8vQtuBwvqmyAS8hoHfE2KbtWUPRkqTfdHo1hutNhoQ6AyLif1F1QKf",
  "key15": "oybXjF5CyKRrXMA4b8J13rgjoELwoGFG6uwFbEH8q9mM8xrct2cSSmDF76WrBgkXScqBfB17w53bzo5UaZvktzb",
  "key16": "2DCLLL63xNH8G1GZDa3oB2FYq2ks3YdLmkDA7dDfUfSJqSZwCBe8jBPQmBDkz79K5K5CQhGAFQzGAfJL8eHaEqez",
  "key17": "4UcUzPhni7W9XXDEXiNhFfu8sXB3xeaswCk5ADoWiTTnopcRjKTfMSL52aToCnaDJKDZKNafziAHsRVPXbuxKv6h",
  "key18": "49oqgjWMPmQuQMAB8fTrSfasQYwQfETkQuGEjrToQ2xGMEUdXD5GHzkABY2wLPjJ49t1oqfZt7KixhiS4mP557u8",
  "key19": "54CkkwH1XwSbKYeWWRXTHHkAMXuVBRBgtB8JkqUer5rn5YooV6C2zHv8QPaB8MrrAx5d7huu8uKubZYUVLg6Zpx5",
  "key20": "3SYVoQ4UGmsgXFwxukZGM5Lh7P8SThL2qZxwLzMiCgGapxA4aM7iYkfeY5sig4saUFEe7BP9CshBCMSarUC8zGqU",
  "key21": "4M3LmqWHWGfVgomeLFG78ph2CcQXYfa9NJ494vz9qR836tbqCRuFtMsrMsKj51vQTzANX47ZJPzNpKJUtPkydfut",
  "key22": "2SXFnMnRCzjxg8a2jFbfzW6tBNmR73CRqPUiGnfHZifrHL5srTewsi93xpmAbjabW9BW6U9nYYHcBbLEAqbEQ1ZL",
  "key23": "oXGQyKax5uu9b3LeaMWQQG92Y1v83yESFN7vsQBbTwKQsNsrSASVi7MJJZYcwqU2b5oAQfzQ61hDYpQcgDAZpXw",
  "key24": "oSGCJbo8fkAufV6gDeJZZ67JE2PznXVqAuGBjeAkGvtfVpjzhb9pz5FSJCARB1JbJmeFc7xzL8hwuv8ChCD7AUU",
  "key25": "3MB6a3NdTX96pMS1JYU6f55B5YusrworSGacVL6QTVwyQAySVLYHE7Uaxt4Q4HUdrJVjdHzPkvjfD59EwhDPXpEW",
  "key26": "9Ly1o85Un1m1Bupi7Z3vsAeG4R9mUs1s7JotqGETxJNPAgWMmYGDk9Q37dXxoY1UWFGwLsi72cZZmQFiCg9DdbY",
  "key27": "3eTVHNu41mET5beDQzk9xLvoUbb1qAJ2542xSJ5zR6pY87bHfmL9EFcSrGMXqKaba4c3ZFaggX2LSj9wG3wajqQS",
  "key28": "kM5zsE4oMexqwGQqwsyc6XvptGNFyCmbwYeQeC3osar6yuhxbdgv9cGVMYXPDUjMtmfPaHxASm5MPZY5WfbeNQs",
  "key29": "4ncF2YF7tgLMrjRh4iAT9Vd4wxB1NsvBNkgxWyKJq4pgWdqH8Q8TNwpCmzG7hx7ctWaALzjz2jE1pqT8NVqUrJEH",
  "key30": "3hrYX96F19ug92hvG2JGtJj2JGqVfWZ3gFtC1TfZUVsuAbsxBjJAt43gwHZyf2xQvkfwZrJubmofHXxGowMp3Rqr"
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
