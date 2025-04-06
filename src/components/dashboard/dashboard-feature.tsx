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
    "46UcEomWqSDv5yHXK7gVCfWbossZrMRPMyNsv3SrvMJ8AF8k4GnQoY6mMM6nEcq2oxVxurjzkMqRfRkusmfLANmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVk67cWSU3WA2wG4RchpRYC7rJM7MPFeZvhuiafcUAjBuZs4wkjgUJaSmcVgizQjfkaaguNjQD5eNFeRxABJX3E",
  "key1": "3SkHdMMZxxSaHUZBAtpLrdMfQjyYxssanHvaZw9B79k7ye6WpS5WKf8D6hFHp9fbMJRr7NMGnUEzibE6pp7aVBSQ",
  "key2": "56SBW7GZGbEKf1fXJDkSWBaJqENiHChHoeJM4SbAf3mrvdReswRz1NDh7FxTwFNWFt3ZbUvFhdv1TFn4sJSjyceG",
  "key3": "RXa7Zi2c1D9H2L9gkEW8NqF5QWWbdJnrzAEq3SN2RkeyobJLQGh1mm73ZoWP4skqkapNES7Zn38BrPaQnUS8U9R",
  "key4": "4tNkhJm7kEMdAGm9sTKxKtqT3BGQs7uJviAH8zVtz9vc7Jqew2pcYJvVsCt6uhusSPWdLY7jmUpH5LF21NmoB9az",
  "key5": "2PNoh796DrRKEiC3GhuKoojzyWSuxd4VSNKiBinqz4MShqrSLG6HXGvEjsKjwpRiJknqQyMAWxHfeFVgz3LASkVe",
  "key6": "3foLqwH9dmqnq1CE5RLW1n4wL7Z3y6WtPvcpuREk1hjWQNwWVWQFtwgNgiHNAo1smEkS8fdruaWxkfbeQiKm3677",
  "key7": "FjN6y8pGMB88dc1k3ysk1t69xLRoZfrFkqMxBKJJYRHYUtMj38JmsKjH3Dwx2xkdcGc28YV6dxtfodKx6YNTtRL",
  "key8": "54mNCuWrj1HvKKwaisqUGfaGEVJ2hdsmUqNgUFFHUEzTaHHV7t1CyKpZCgYesNYr9tZCL1ZH3RYVRzKugz4RHCH4",
  "key9": "5ZmA2cMLUJ8ruFqjCuzSeky2R9MGKzTEJVUWG7Cus7NJ48bnuXbKXLf8WcxyJQn2GVfpQsKjiVLPvnBFC6RgLKQ5",
  "key10": "3XJQ5ygoaWTe1uP9hhh5w8J3J2PdXyLorC8UdewN8yD49FBstzCUSxdVnAUprxiUQCLPTjSf8FXBF8zGp1uZMQNT",
  "key11": "2bL1pvxXoUFYWdt6jMvGwre4jHdAeh2oj83mAhsXJuqt7AEMo9oq4cEVhGLVDNiadBi5HuCg1brgzyzV3JwrBt5v",
  "key12": "2QZCDtDiYTSAU2R31gqq2tQV2DZoCiy9nfg5pN4jtMto9jCpAQqfpwx2GvuqMtUNnABdwphJJQSBnbnifuVSYxdQ",
  "key13": "4F8caQVofBH4QvNpRTQdN27F71X1ncQ2ztso6Lr8btQLXL753a7NuEeu7cgbwdaCqmSva8jkHxtju2S3i3Ly3pND",
  "key14": "q47vpf1qVk4zLdHEARSkNr7MCwAvryWbpNHHLPSagYwh3R85zKpYbJY6xouSD2SK1RbqUknsKdm2tFAHFjm6YQi",
  "key15": "5LhNxkU6fdnhDydEWddXiSBy4oA7qBtmcH1iDTXPdfbb9Ba2XYYcmYFseXZeQftsEuz2hv6QbiScyLp53GCxAsyH",
  "key16": "5TRsf7VhFA6UP5gFWhJmJ3cohc7T8DxXXESh6ceW7itfz695FroiWBa21NHvuFniB7u1AFYh8kuHrn1DK89a8ksh",
  "key17": "1ynmQATxp7uQxa5VdeZc4cSoG8roShY5pqVde7JhHcHVkX1kPejs5SGQL9bS6WgHDLXV2GU44oiJKW4pBN9C8R2",
  "key18": "sj9YhFFY6m231a1qwJowXbxrxnSot9AAa2Vn7zPeiy4y1zV4nT24V9utMgJmVBctYzn8DA1ZQJhVa2ekfPknrX5",
  "key19": "4wFWPnbVorxwy3Har5uGaEorAcvEjwT4b4t2hvxy7dG6p9VA7hBN6geuvh62GvnQuCirG5aZLSgMQPtrFzhuxZXr",
  "key20": "iVXtZzbFCp6deQ4m1MbYQ38CqR1j2VwJ5yeNxWs6HjNbsTZ6gBDhccnEKBNfq6koi7VtkwjMh8ZvVBdF5tgYntp",
  "key21": "4ATCS2ujyRCQJgDGfzYrVr4qhq1XwcH6YnLPEQjkHoLHsb4RMXDLJWEUG29msQyQS6QammQRAcWJpqoRXb5bXPwc",
  "key22": "5y6PPNn7zPD3qorRXVHh82JVQuVDnYrL5VkGuiCJaEGYttADknww8bGGM2RqQ1bEwdFE6HicJV11ikCfM4XWrSa",
  "key23": "2d3VPFpLZGSjZ2VKNP947tbKJzyCcgsEiyWtHdDPMcQmb28RxpcQX92ULukU5rKnGMP2RcTHMteHoyF8eGw4Qutn",
  "key24": "yHNkb3QQgEM8SQpVZLtMaJirXNUUregNbuj5AWmy8GdSpQwERgr8JCw6kKT2CNRB2xNRKQi9FS6DQ4mc6c33tsg",
  "key25": "3jeAPBDdWdfe5F74TV3mKBLCh1ZkauPbGt3cA8UoPedFmpukMuJgzeHWU5VBH1wUs7ebPNRdDgwB2zC1nySBm6TZ",
  "key26": "27WfsTQaB7rx8VtXUhM3bd3C78rBfZjcRp2ZA3Q9Syv25XJJn9BEKTZ3FmWACFLViHmvacY3ogzHo8Ad7JigDay3",
  "key27": "5n2Hnz7EECekUvnF6cjycsso1oCd9HmAA4MAzgGcKvnEXrStep8cVom1fmLboydFfVwaDKnxL8VUxaDKMc94Z75B",
  "key28": "5B7von2sXPgqtMr2mwq3FzfJ9eeLi9H99tP23XfMr3XouYyMRbhxkpYsZC2YQ245cnLnMiTD7WDtiNTcxS7uAq84",
  "key29": "5CEnEzroPH27SRN8MX7wCDvd1kdJJLWE5joDqmjk86ijJ5JyegPT2PvercsPTKGqj4PWTk4SHbALBxRyQVPWnzYC",
  "key30": "fwoLA2WaLVm4qURwhRSGSPbHJ6jn37Ezmxx7t4pf5GdBXBjM1ksNSpmKWZJB9iqapPivkyE31fdbi13SNYb2iqQ"
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
