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
    "3eMAuqo6GMUijog4KPedgQwtztZKJ38n38iCYYBqHMEwdgCJfcMthXpVxfv1twQQDKUKPgy8HQQdptfwjcQH2P4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PDQU5gtgMokgUrSg5ERVvzGNxirhbMGQxU3Phmpnogo3CF9E9tkPcENRmeCtgqMykLp5F84NeaRv1hRxWZFWqmC",
  "key1": "fsVFP1rqQcZguGYLbMN8QivdosksTwkBH12ukh2BN1NWuYo7Yyufu9RYv4LRozLw6GvoaSfcJUahso7jfcPmvtM",
  "key2": "3vPF3BTBdLXwVRqRgaJaEuUswwn8RbJeP7SMMGeDSFhCUUtfEqp7WS66XVxk3RUaLPYQ1Hs1PjRYCXxD4ZPLTy9D",
  "key3": "MCBfsUtoZ5gcq4Y2SXU4CUyBDdUYiwCTk4AZz7Wg5ibi1zjUZQU3CaEzq2qGnfT4c4j8acNY5ZbmJBaejMM3SJ1",
  "key4": "31w2MNKcWzzHb3kHH2AnJ9X1osxRY5KAgLhDpLHZWgKY1mjP3HQv5qLzu3qxzjkscA1uF2uHr7sM25uMDw2H1D65",
  "key5": "4EzJ3WuYfy3JL6vMaM7h6xbunjZeQiNoCxs6fgJQcY8XHyj9W3LVkQVGAWvTXZtkh3WT2Cwo2RbNk7jGwa9RKG8x",
  "key6": "47YCynvwnuFE1JBfZ1Z4jFTpum8Wj33BLz4q2Gq22xrCAm8DmSZEjbm7wfMYc2YLkotd7EMC6ZnYJQzRM8NRKYGm",
  "key7": "eBpnrxLLoRcpWYanoSN95tbwaFgsNLfE9vbjDTysa47R64rLNQwY2aiT4QAmSntj8BwqwStVZLdgYyY6Eb864WE",
  "key8": "byUNmZbx46qzz4GvXuZKLPzhircUky7hGzxA8QT4LFHe7LU8eUcXBAW3FgvH6g6aR1DiW8aQq7X5MDRGJfaBpuk",
  "key9": "5mAnxifZig841hHDcA5y1rkXTbKdvffLuaRp7wuuXPZNo29yScF42L2r22P9eaiJ53r3CHvEnXuw7drG23yPLp2c",
  "key10": "2RQj9aXdT8mzvFHRLxiR8r3jzZeMCWQCWgDAtL5a79BCg6exsMAETsC6KqHs5eQJQVT887DEXeSgFZ8NviqG4sGf",
  "key11": "5wyhqAbAXf74bUxL6BGJS3r2rm28bs9H4HPdFpAG8kSUDrG89a2yWtcmdJjVwWuRZjwdCqKSgkKb3zqKH4JvwTm6",
  "key12": "2Zpvhhm6Ewkg5TctEvChwn2ndTFSL3ksukTcPtZwwftidALAX3bKH5u481EmPh4rrPEzFLdik7wVeT8tcfkCAYq1",
  "key13": "5nPy6FKkqVibz95S2Fp1PsA3p4M3MXPdKcBCpjM1UU5yo6FDkAH4h4ZZymxP4XvgeHtc5htkLGQYSpE1RdashSnX",
  "key14": "2dgx7aH7VJmgXnzYVh2zE4M5zL5VRoY1JW7m24szfapsgGBzApba1L8iKYfWkxWvkdAQiK9EXG8fbx6zVe7jCT1G",
  "key15": "2VWmVJmNMc3c9iphCwXD66PKXZy7QnsgeoiLSSPz99U9yVG9qKAQ5KX6i9YCyVNWN3ibPg7ceeLSjN7vTny2iMfj",
  "key16": "5ZF9NFi6g3XwrGvYzDFCeMF8rE5J5aU3stzaAvKfzERhosrSCFPVucXyruXAQbXj6Gv33Y3QeX2huovY86Dr3SEz",
  "key17": "24Cc7DBh9Mxfntti93TptVQA8xVYgwQvxnphSsdZDeCCenvcV5CmyAtB6KvTVYfjfuwVLm5cd8QzU96tem16WD7u",
  "key18": "4zVpULSUG4iB4W7z5AwLbRCUMELsUjTTceDAAvyVfTk1kEaTWDkzcqwnEUddKUPEKWEhuDgzPmqwZPXFKFrXauc6",
  "key19": "5X3rcEnJUt6Jez1nyTFvx7vcSe6RzxaVRHPScgVpXFBLUtBMEDdaLX73STrSaB6KLECLPMahK4XcFwrEEX1ZaoHa",
  "key20": "4j4sH3egXq6jeW9CKbDy775kBDfSiQDqaKqGseQTFGUeQqnp35DfGFLjheuZeozNV29esd3hgDaVUd8HBN4wLh9b",
  "key21": "3X5mrsw3PdQVWA2wXrbC3zbcUxW7QSKhRbL4xQkRSoL5AV2ZCBGPbEQQaeqVw1nj31p9i22m1wbB1YPtqaJrWGKd",
  "key22": "37g4E7MVL4hU9H61WYzoopmsMRoAQTLQZiP9GEB9n9CrFLeoNanNRCNnDJm4yE5mPAoyQPviY5EshxgwLuniJuSX",
  "key23": "2UpGqxDhVv9wZoGALBNJBxd7wNv9AZ7YU1M13va34JjSEqDEWAbCoiGi6n3gDHRHbrMHFi9WKcZoJBnU8CfxprZ6",
  "key24": "37EXnb2t94gff48Gt8sgBJpJRAAvomYT8KT4e8ufknxyf3SwKozYrNSkxLRQ1Gdrkk1N493pKGxA94MB1LyrdUrj",
  "key25": "53TkAvmTrHdvC5fvFZSVU6pJfR3KW1FBiPUBu3uqkFHGaYsZMZz7XaQ4rTKmuNL1wuNapn59RCFF49RJa8fcZj9p",
  "key26": "3ZuzWFDe8TrcFcp1A3ZnNJWd23kCCbMHyogMM6tw535SrwCG5cVN4xdtoYdefBYMeRwLhShDD8LJeD5bJJbdSjai",
  "key27": "4rBaDfeMMyqjrPsQLXtjUrKS8qbwb6sD3ZcSK3HkVESJkAWFBNNrPRKWJqAkSgyceKssEo3PSFrXqpxCzButPgJd",
  "key28": "25cfEd3687B31eTpEF8338GT5XdWnE9akaYhqQ688fecArqC5KrqRuMUjPbx8fTYCZhTBJbPGvhAUcMmaYWfDQ8P",
  "key29": "37Cp21wNRtUED5AD4rQF3GaJKjqEnqqFs95ezoAq81oc88r99mrUwEYreP7paMB5WfKj6QZ6fFFVkuvtAc2eidx1",
  "key30": "4ZZpA9zHHrsTWgVoXMmrx7i7p67Qwm5ZpaSEeH9UpjVbSLdAf9pkXuxntB97japUVug19HL5AePYVXXoBBnx1a3E",
  "key31": "2FJPQxw1T2toErnBh7MQY5jbqSYWj9HFVZmFgw2efVH7CB7C1uyeEKya3MgLPjrpMnZu3m5pcsR4QKBnEedT1WXk",
  "key32": "4oRGVSpz6WWbe2Mh5CstPHM5tPesCv5U9XvadV3Mzg1qPgRyFqEbm52WQ7EqtUjuBUWhgxhtxDwHjKpFUmnES8Gg",
  "key33": "5tZwTfUARLaA2wjzSZL6QQEmTMjM2BgeEJs9Wg8ofiHA556u6YoKzoDgjaDqLyHBrquuE9k52ncq2riWU2GgKuQ4",
  "key34": "5TdSL7ggeFVbVpj9mrKPJq9uVKmvGY1gcjtnSxiM5G7MraDTThxTdaCfAmo3T5xWBLLvnFQ17tWqkkP8ttcKcepL",
  "key35": "343MAr7ma4f6VZiZAYxsJgNwk8GugriiKaF5X4AomQhCV8f6QsbMAcsTAkVkSdk7bxyDZPDxLfD2TRAvedVv1zrB",
  "key36": "4i1fsuAFdjmJ4gwPYStYmEKwD34fgyABAkNMzWc557SxbtvDE9d2qEmN8EBtyqYfEHHef8oPMq6K7s2ARCU14SNE",
  "key37": "2mTFr3PxpnytPocY5piLw4mRvnxhvsb7dtWoCe1ihEygKLc6EVvoPWW5ZoRGrrYAkRcpfHJwuzrFkztfhB2jwXgM"
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
