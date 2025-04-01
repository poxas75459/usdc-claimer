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
    "5EXYYLi5ESXZarTVGVNW2nu1bJffWiX4cTbagUqU5Z9eL46pqUNkembpHvxpD8fw5YrATPoxzvAavwZ469X5qCYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6bCpYLYBhNnBJXrhAVBC7WpSJesqaUT466BR8HLghNMCpx2eP9PB7JyXRbBxjWXpmHS1HuoQF9uJaiH5exDcFy",
  "key1": "37js261opirSWsNrui6eLnhU8NPyxfVyKM7TwUw6VVQoqKJdDTiAQW31XnEfyi17MXUv6je8xQDrCkun9jbYbaLn",
  "key2": "5JPHoZ6d9cw3oi7b6iDvGE4KRxjGDNyYXxUtdrkEcxfmPoF9CeqgUk8yEPtALATMuLMPop2HspwDnLmfrBcqfYdw",
  "key3": "4mM3YRtp2Lshv8WHf1eRfQxjMBXRNw8qncFs7d2DSA7tk7tfsMvVj7w8zHPaFp6j7U9Qpbvjn5oYEvcYi6ac9UYk",
  "key4": "4fTd3Vo4osUW1MzaxmZJRSzyUVsRi9Qe7wZba6cbL9La9aJ6VMMWCYNwVAHvC3KYN8xKoAWPDKS8HxbTf3YsU1iT",
  "key5": "2dXuKrXde9rMBn6pye6aUD5fe47gfycbZMy8asL82umuhyaJGoyDJg1xrXzxoaEgBgmeBsiaTSnK9ExmxiLHH2Hp",
  "key6": "5sT3oydQayeYxTao1qmDW345rUGZh2Xc5HUSsuEdisMGw72eNMDJgvwLBmNv5av3o254cABY5AGLyqtzofZ2Fr7T",
  "key7": "4J4AEzQgHPMUnWC5dwH91x3rYiSTRJ3ASy7va8Y7EkUwQRCJrMekukz2uByWNd4kGypvLHT5ZmgWhRwcW4YzGhke",
  "key8": "55cv8VpYjemvjMCo7tHEVNET7byeCCnzst92C5eD6QAtkQBTTnsRWbAwuCHu5E3HtyxMk3unfbCY1yUTXqgv8hds",
  "key9": "352HPVqME4Q55rdxgkdkdBv6jnpoLUii5zdfCpS7LKd1JsEYXGZxdgYZki5BpFrhQPfUbseuAfeEA19smxyB7aKw",
  "key10": "2UhU8BPG2nngd4Tsa9ZBucMrZjtWSkrBc6ppUsJ3tvX8cxmDTCVAMR5ZiLyE8TqTp9iPjq82WYNSLQkc85FnJ6EZ",
  "key11": "3dDUUDhH523oJhvtRj6rvasgD8hMeUHQP1q6rZf2chTJrkjqiA9y6iTroBfjVRfPvXMEPbbewHoSXZN83keCyEyP",
  "key12": "4AGQz63fdGgTLKNQaErymSh63KWWjqtKmT2eBV2bdK8S4mkKPfuiSLJNesb5apzA79aj1XPbNWMKfuscoBu3vnJF",
  "key13": "62JATqU1pucKhzCHrKm5SbtDxLAbMqeUZkPfLp72Mru8EQSqzj4GHepbWsbqFW6NY3Lisix1B49ksHutg21T2rhY",
  "key14": "2KynsEazg1PfNyc45NQKBJ1Gdz61J65pQGitjjUUHxvDrK8dY3LPSnEnH5LnnfEFCGfUhBkQVcF1NH8XbPazEeEo",
  "key15": "962Cxz91J5yjZi8suMjyuFq8QPPJwv2UJvgZUVxR3sYNnP3JMfnBkMY93i8xnukJNQWZx8UoF2MfSYexhUcWKnq",
  "key16": "2nXUhgbP1fw8kr4DvJzz24reawVaLYKpR2mP9kubV5m1igY2zGs74LWVEEGSVG7x2g4zkpStyHsR4uwQyCCJzgnS",
  "key17": "4HAcgxRg1jwapH72A17PLALwkKwRiyuyFvHsoDy21uPr16xUDWPs6Tc8wv1Q9TRdUYt2Lw4hJAJHJ2LFxaPv9S5U",
  "key18": "44M3xiww2SihJ3wjMve6Cf7K3gVsaK2qoKgS3KAwu14rMTBomuuoSkiYFhYU6KKqYYFcBvLZaDUtxUw3emCfjtGU",
  "key19": "34ia79zHPj6BaYFUsEPiy8sFuwyNVeLCZ5g2ivgydo2yxXxz9HAqhAucMbLi88XtBkqf5LKocMt48ZULVZPh9VFE",
  "key20": "2GkvXT3s8c31m3ZZ57tVFHJo5phdyTmKk8fdVsmB9423qpW9B6A2yUgUxgowCc3b5rbRoF94FY9bfiwmHS7RCu81",
  "key21": "3DiMoEY7nMFCKJURSt6EyybA4xLTiPXYtE3RCpGjDX7oAC2QmQjWcS3PABJfeEtgMDxmL6RA5uxtWysN8R3rJREn",
  "key22": "4zEvwknAwf5DjZ18GNbdu8PygyYTX7sV4P1h87fRvTzegr3bUN6MZnU32LtKHsCDaK4PdfgjgEkQeHoH5tkYwcCf",
  "key23": "3vfrV5XYGBwoGMVv8ZXaQkkJLarxPitHTAKw12d1FAm7cf8qMSmhHPT8eaLfvrtYKPDP2vf9bPTbY9e4p7Vpgwxb",
  "key24": "3Amuv6c7wq56tSFDyr5mx96CYPtmD9HK4vmCh1HYZksw6b4a5uGbntN7o7ECpyhGDoUYbAweGxA1HH3pTKQMhwtA",
  "key25": "4rQVuERPvFQEF38abUffNZjwRiM1yet4L5qYCmTLsx5EyCe29CdiUfQMpbyS29p8qyrtnqcpuwJtuEubmVUJ7bRj",
  "key26": "3HYQYFcgXNm1h85fPDv16ogNv1HfPyu2TSb7NMvJ7USz9AdyUWhRLzJsX1QTzQcmWYeq8r6fRWpRK61MhFky1jF6",
  "key27": "4bFRkBW5z6dKEZ7PNQxbuoMtLozC99vGAmf3Wd7C6HN9d3SfXGYVdVuYDrWb3BAjEnQUkB8TCmc3LDYPDtYuhoaX",
  "key28": "3H2UDgHZnZ1h1RCxgnnuwJCbqtqXYrN2dqppM52Nap8cWfyTNVa7H7q3uRSW5zHPBawqYMy5BMcMzqzMUiue1XvL",
  "key29": "5Y5dYe9u45hXo5Ewd1ZojLibDbLHQM6BcUsWUpqRbfgk9iPbuYXNXD9CpzmiJ3HzfjXZMam3uCWLkscSwahWrjVF"
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
