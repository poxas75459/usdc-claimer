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
    "32EfVKHQtCwpKGVS8BvbEbMKQHAHDrQzzCRHxAAkHSFibX33qPQ9jsU9yeRT8pgQNAbxWXWoTyCqGbMmidUKu51s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uLd1JQJBi4XhCGUdV3pHveKvPVidCw5mwcUUi9W5dhXLCMbBQEpc2uJf5NGwGdKPBo5rU9nVTzMJ1aWwnTMiAB5",
  "key1": "2a3vuWe4fEytUWPpnyq9rf2nkyigsboHtaPZFvJybFmJPKfZ9SNSNDBW1NMRGMk8H9mwUrJefCigHxcaisr4RJcy",
  "key2": "49xprVNETeqNUyUBzp5rVwXHgrzN3ZdPZJm2UsKXkf1X9q5FZ1GDmdVor7V59o37Erqh6oZHNtvBi37hs8JMf1zS",
  "key3": "XKRndPcaARC84M55p5yNo55va2H7JEFRYZDjp6dLw7HQ3Q2Bk5HJ1A7heRYsyPmc56zSJJYdZiyeKLNaR2mZCqW",
  "key4": "3HiXofEhmiTrJbNcAeWGPnn8V4ZHwMxikAbUxseKkzusUJDhk4vGuRLmBg1N8AAvZ1kDQgsXgGRw8ZtTjoKdEkT6",
  "key5": "3DPQKnPA7J43pcsWkSVrNaSzX1ALsh8ZtjKL6ifbndzJryfwRDGsrZS8jFm2NbcK27HQszyWtKyHq2XBUvcDRRsM",
  "key6": "3LRdLcn4XCYHpfBsg1Xa5wojm3DgFZiZ3yuH4WvaDjHZed5WqapCXVXjyhYyiZuzogm6J3GqGPwPgfMJaiT9acRF",
  "key7": "5Z8AcZBE5WiMYq7aVdoagvWAX8uw9MNZRRRP7ube3qjKJAqna44i8iV4j5uQjjLLwDbWkgTR2hYkWAdR5gURrUrf",
  "key8": "5obqugJJQpCm62RPfXwSZfFcfD3aEtaTi3TsxR2u9biEYzCFnQ4fiHZV1QBM1Uikce63pMfqVfgPicqu9vY8DPdP",
  "key9": "3TyYLEEXeRMi9TnE9S3nHcuSKXmbmoisq3Wk21SEz4Qg859vyojXnmM9BFzzDfuPUH82DKnPq33HHiLcU3XJndKD",
  "key10": "zWZhaTZ1sdgqx7EFCRDLyP7Do1SxiwXwY9wWWZ3hGYeRDQ9nekyQoKdLyUfCkpozQ8haM9shY83hWPYbG36BbsJ",
  "key11": "5QdHQD8A8SqPXYwqJvcnPEr2jadmA6Z2ibcZPyx7bU12bR9hDjxWCAjMAaKWi9svNPdJrnnYLpLiCVPAhgUsdXde",
  "key12": "5GcLc9yjLcS2vssuJJzqTm1H9QAiJCM6PjpKhKQrPZucDYrHkQ8BziPwaNjdoP7PsGvCXgngetHabAAfiATQPhi4",
  "key13": "EWLJwkP3LdYjpGyHtVvN5duTctjmeyjfi4YC33TRz8g6yj3fPkpEvV5LoQkRkt6gSWSQVY5UjgYC25nLdRgFCk8",
  "key14": "2w2tkfihjes6f2y64N8DhSNm3VDoAwx2WmBgeQFfxcoFhJzPMtAb2Ejnd6UHqqFnjih4yFyhQUkGF6ZctNJhmmgz",
  "key15": "4G3eDupM5Qyj69qBMEgZ4cyqg8VK6m2W4QAQnHmv6oM5kvfEYaDHQJWtnTB6EXF6fZS6k2WRX6kDFJdiUQX7tYXd",
  "key16": "gaNJArA8ykR1TRY3EMZeyhheCf7RVDyQ7aC5z6TSfeGFAPztwu4WCpcmcv458XMPdDti3JZqG8nQpFRrmaDtakC",
  "key17": "2ewXjShYe8iCot2Ni32f1AFhH1oFUG7Ypfv6aXHtqiPzVDkeU7oBTjwZcbm5oEywniJRySKLkAre7gnDywD7GZ43",
  "key18": "5Bn1xtzmgNRZhxBYUajqJ9Bg81xzTXEjh8qi5sKkoVAmfUhFDyxRHTDoQNCk6SFSYe3hon2DFVPWNKSAGdVe7c7x",
  "key19": "619QSTNfW6FHJ8rGbvHJWr9zZS2A7a66phJPzzyr14A5Yb24F6FVWNt9G1kZyjhPALuWpM3Dg4vXzrbXE2K2WHyZ",
  "key20": "5LFuMrTm3cMsozNUU2sDZJR8w8qNxZWJ9j4aUU9dTipvhEMsfXxaLgKT3A3xUToSkRXH2ntZWbZmjYAo5DvQL4i1",
  "key21": "KKF55Gn1NQEZXUFnMNxG33y9YFRYgS3USNJS1oLrxkyuVnXWCQZqzpcGJunaQJfstTHRhr1B5fwwRTs9CuzedJC",
  "key22": "4oHvi1mi1jeN2mRfnBDVgP8kG1GYSomWweUHGuW5AfPHvQ9CNsKdjo7Ni8jKDhM5gCHZY3uErBRAf9Tx6UmSHSJA",
  "key23": "3q6fH8dKYpZcyM3zd6ccqfCbVQuzyADFX1SaWfpRjRsEYgnjoCam6SUPPpPkMKvJLGJaNTpTG1CxQ66i7X9azjJt",
  "key24": "3BN9ZnpbE6wPeL1yEdagLn9LGjViywW3tAZwBFpurxzE49kQVa9dzVQEWp1rEGguyE7nqgH4zMfSdv5nEzbBoKCZ",
  "key25": "4j2nethBENnUiMyDu8zDuwESb1dcTXotkao5WosTTQ2Qw3zyLfgvh9tDquGeqRRv98xoXVtud1abUM9j7sY7VVF",
  "key26": "ihQzzRP5FPZrVWTmbxQuinNakD4yZgVwoyW3nNCr7FRrUiuJZnEzyro6yNcPowqsvetS53UyMrm8vtXoyiwu3HJ",
  "key27": "qiK34pVGE97Lh2QST3b8QycjXNFnKrP63HUASUenPK1unw8AQGMsPDMQdZtNr5X21ahys3LkkjaRYRnGtNc3QUb",
  "key28": "TQcrRKuFghBM9F3KiyGWJmxJQnJn8FrzkEKZuHeJNRdQaejhqMkFfgGCYjARL8DJb8QGEDhYcNTTFepcjyW3VaP",
  "key29": "35YkrhGSB7no8iwSnyf78owFR9EdKkUr29TcF1vhuTWRZnCdmgMdqZpdQ4mRdsxafSrW149C7QWou29JRs2VZSkh",
  "key30": "WTS2W6PaXovsATBzAGqLDEgyHH8VgCLYLJK9yQRHbtnoZTu99TaEoWp3mSPNpo8jisktuFepuNfJaF9Xjwxtd4V",
  "key31": "2yfhh2WV6R2ZA6mauzQ4k5Rpbn71NXZhvV5g3uRPUxasMc2qYmwNTF2EwVZG4vPpXvVp4Zc3jdK9d6Su9p8uomcb"
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
