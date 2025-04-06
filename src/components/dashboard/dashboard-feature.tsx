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
    "367yeZXv8rKt2Baibz4kHazyG13u9xnfkxGBv1FibR5HELQisq7VgQhhjyg9cAMiDqu9nedemzTAhAAJi41Nv5H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JXgcDxCsmH4Kq3EYPSqoiwvfHm9jDik1cpd44T2gYen7DzGEbVjYpQyYUpjyDxcBEyW8bBjfBkHyzgCHBVXeqw3",
  "key1": "4UbjWXG4LZquDj6hYANGwhMGBm7t2oNWYXJ3x9ZoRZ4d4MHMu7xG3e4vY8b4ch6TiAsVTdpBk29VaDhMtWh63n87",
  "key2": "bG8K2SAmFB25X5EbfnsquJkGVS3L71ZWLNpRTz5kfG5NbHMnoknG59dnfNg2zVCPsYdNcExe3gZ8NN3o4oH9PSV",
  "key3": "3ECDoaKjkcnsdqMeWVmW8xDUZ3Ju2rg4RNqGAubRUCLj1HvmroxGEp9Sa2SvhohJJYMBFWr3FVKT3TD2adn9nytU",
  "key4": "43TfLxf7NgZyrAwKzrYzWBKd5V78STDoeQDHdKzSt5h1dG5LD2hmHkhva7iNEuQhSZnghJddbpJ6xK3sPXwCoA5U",
  "key5": "3hZLUWfnZGqKe7EZczbMtgvn2Afj7EfKPXqrYJMf4WSHRmQiA2wD8UFvgB5AzBPYxZosnsyPXeu8SGNLuBPgabu4",
  "key6": "3QwChnDe859VVoUSr6Qt4edmNnGr6vTq8CZ3o1cor9g4iWtNGuwCqQNXq1qy29i3niyyf6XKKbvkCGkDrd8RxxFL",
  "key7": "4j5enmeYFuJnTHxQA9jzEH5QBz6kcsvYsZEZTU1W8ZR9Zo5f35ctiEAGz2f8P2vTDaFRdSDT3zFsszP6cBr8dLQF",
  "key8": "4FvhSRBXvcwzEtauZJqLebexCSfreeSr9Lyh1eT1deTPE2BQsWDZzGArdia9HZQRTxRNFnrFejMLf6peKJLPPqXm",
  "key9": "3PUrMsQXdWNWVFj745D7rrb9grniLixRiYWxnWAmBSg25891fvgkE6zUY2uYMvnkKCvsXK3ntuYjJRKWvvQVChSw",
  "key10": "5ARfRsgFAU8gbrC4tryzPRTGMdEGDhFDtUEzYN63b5sG74rf7FiM9KN9Bs5eZE1X4Kg9MQeBDZBRtWdwGhPforSP",
  "key11": "4C3EdYyd1ck4agLQkJSXAeFbqY3cz7cuBC9CYsAWhLe4JuHBB1gZi8SghuYez8yjKpAgwXfg1cvQWnbW8RKHBCEm",
  "key12": "32W5yAGBxQ8uJD18jS5GVKkwhgKehxEFqZJrBYSHNCJCLWAfSZoboTbRctSwUHnWKedPRz57XJNtbxPsWWk2reQe",
  "key13": "2t9TFUZGGbfKdTCSAvKBKQcnbLo6FygMNUNjc58jmSL9x8DMyvhTp2EMRjZiGGWgt8PkYPgvfvuRx8Xnq3tzvBNP",
  "key14": "4CBiAw1mgqKfKARChVxCxHsqJTVk7DfLdqqege5Ln43WxedYXr13rBDSTRDUCxnRSvSmraYkEShZhupqY5pLhwzn",
  "key15": "2GweZYWFvKVt1db9JHWhB7rXjnUr3B4oQjbdu2xKMcw5q5Ars441Q2sPWNqDjMZbSkygpKikKjYoq7tXNjXQ7uj9",
  "key16": "4njt1Adto9Bwxq6XT2zzjfQKABm2ms7Dgz4Vowixkv5eF2nL16EapoJtRtcUsJc2q8oaWxCf14MSi4CUtme9tfvA",
  "key17": "4Gey9kZ36dnYNDnCpkBGkhW8ECa93xEB9wFeDUxVF2qoKo79DJbrRrt9463r6pjBzqffzUztU2KxVJZu7WQn8yS7",
  "key18": "2Gmwe8rNCKEyDWpeTf5qmZiR3wbbpGJaktAF4CpwKFzm2z9gj7P4k9rjQZeGRwZzJDEkdLFbcNUYTFBm6YYMqNgf",
  "key19": "3bxXt3hS6v27WKNYECQuixnuC2MPMrUCnL8qtRxxaNhc7QSpHF9zNwSpm2SQqzEfTH4wYMmXAgwXkffMKtv8gPte",
  "key20": "NpLiPAJEVH1M46VcP2AUfwmVKUeYQaYQk5RmjqX4tZLJ7HKHQLYzZU72jJyGbcRgFkE1gp3eJbxcQb2nQSXaDMV",
  "key21": "24CUZ42cd6DftxC7FUFmAJcMZpwx2PuUqCu7LReqVTNZy2t3a3csMhmRNhrgTQUwhkX8yVnrp9SwXL2MzSQQkPsp",
  "key22": "3WNSWdSzuuYER8472yVTEnmiVJeNMZkpkbxwEaAjj45hDWJ3p54yCWYvtM14AEUGbKaYbRaeVYPcisaiJsSqCBkL",
  "key23": "wHMDP9qLeToSFpoy6URgQwGj1L4d2eTnaUXtZ1zoiSwkahtUkfVnL3UoKFMRpyCmS9jTk1XCUfkZpzBNn5yNimo",
  "key24": "4MQaSPjxNZxDuD2gc3XAEf53DoJTkgdxeHBnayHYjjhCTEQjk8UoXFWQ5615JcpJ3KxmAX3HWcXtiTHzPhBFojh1",
  "key25": "3dqr4HGmxagW9sWFjiczaYybQLWz1krXarVsEWtXGMHWEW2T1pCrtEFcxYPnBqGEu8J9PzJNC8RhVuhrBYLZPPoa",
  "key26": "2H8kJVLggdnKYWuLLKCov1cvktga3rieH4tQEbYNaWD6sHYqPLHYxipnwRXwFhLbbiJqE4FxztZENkcGf7KmQSC8",
  "key27": "SkAxqX2dsPp5mBrvwXEoip58nMScnSxmmJcN7BXBtBm3cbeG4Y9Wp9FLyxe9CUAaoNfHpuDGtfJHDAYdwFzbeTk",
  "key28": "5UcYPSFACKewsB48bMvjnKw7saq5UpE4TAdQnpAmZCJfQ63wyGxsnv48qrytFnMoV5aSCf4Rji5KNXiNcuv86HGi",
  "key29": "2Ee5R4Es12VyWakS47AQvwaxKyEXNnLHCNS6cMcgAx5Vg6anvsdBGWPb7k47hxwdav4QjYChKp3eQRJHT324cuVw",
  "key30": "3jRBGu4mVZSaB3MvN8bcGpn52jdqeDwWMms4JQtD4j4ToxLTWynRwKbxake9zrBngW3iKR4YnmJ6MJrDHjjHrJst",
  "key31": "5smWWkkfihw5bB7hwbuYwGvhT9habXQrgBDusuNdycQbgRt5ZLqkgC2N45TdeNrQsF4PmozjjJrApqKeBooZPjFR",
  "key32": "3MooZD7ZBJ3qCXZEEEJBfUXrr4BVBEucpqzm6uWvfyR2omvdCesPa17JdeMBD5K1J4eWsa3dMEFdXktZxKcPWRgz",
  "key33": "51CyV57TDQvuuxMeA7BHtC15YLev89PvyDbTCpeAhGKknhs77ZYWJY4Mbdkc7CQ3XAjuAUGr1PBu1hnyej6ivKxi",
  "key34": "5jjcso6jpGXGoAGzzGggsGAYk7vnLSzpUheabtrbyimdkw637hizDxc5hyDRFr4kWSc1UndhkLG6ZbokWSUacYse",
  "key35": "4CtwbAycKACA98WxEjsvkoFUwL33YY36kmzFu5MxSdK4UNMVd94Sk7APaigVusqCFA4MxpKFQWmzMf5HCykcuX7n",
  "key36": "3njuVN1NwCfrRJkKC15a6Mt2kXzUiXg1UpnTZc12YkA6CRKWCniuPPyhhVmR1VRjoD6eYGMVSFZ5KQgproPhbUac",
  "key37": "4ffR9GQ26MKsLyNguiYjdetmuy6YentrW4N34PnmsaeCkDPQdNxKYtQw1tnM8LE45NHQfGdWawpt77S4XErPd1xx",
  "key38": "5rsv7nZphEh5VnmwG4ZkjmNiEirXRnVZTYkR26f8eDmx6rsoy2mu8yxTsDjbEbxWBQDoGmkEvW8uuTXp8ksnR19",
  "key39": "26RwjtvuRYzUwy7h3swUPczcJUvFTa44TDZFWqpBzLzP7vUEh8bb8jZbhe5FhBWDZEjm295RteKiryUaagF3bUii",
  "key40": "3fCdHarTGQ8mcUZYNzuYBPVz2UmKWEfZVL6XMyJ1WyrvpjSutRng1MtVmhSphnX2irnN5yg4umW6AyfkPr8jNk7Z",
  "key41": "YspB6QwQKw9PMMtPfsiq36ML3xQxBCMz1AZUNChezteMyxoMPPFQXzBLrJELUoZXmAY1fuaqatM1HWGGXQzVukh"
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
