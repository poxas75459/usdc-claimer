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
    "3U32EU4MKie34UrSgbZ1ZJazSW3fRiiBf5jotxETXDhPuZL4rg9iFpzvHhEayYYygiggew7wByRKHxTwh5T7bLzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "297vAWbdu45qkrzfGAtE8cVJFYcqvBD71BJbmGp3aiENRX5i6joGSyTqiJmXdQedP5DR6ki3dR5bTKvNahHC2ndj",
  "key1": "4exf9HrVwCdEvzfeWdfn3jankGWoQDvYYMRvgt64dJ4myqiK5sg9i5k3spuACFRb1P8bPRLCmw32nzWfpFrvfPmy",
  "key2": "3ikTASMA9te2Am7nRJvjbLBZiG7CJPdLTL9UKhJD3S8hACU5DiAjjHJt8xNewYA72sHJVc7We7GJNrTPGrphnsek",
  "key3": "jjPjwqMXhsMb9Skcxc3RJmXEjE4659hp6SJq4AdXLKWGPzAYdvrgjUvKG3NDCCFRCudquAGx7nRsuBYBf27eRFG",
  "key4": "3W4fZ8C8YaG8hfzJHiDqwtYGPuBokFypdh1h6suZEyiA33Vt7bnUpPhmGvaHvEDpbj3ia5JR8w4X5GwPmAsryiBJ",
  "key5": "55UTA2FR5LykSWvjF5mmyFNhvD42QQAMgFShmkP5o93XTjFYHALrY4QFMDbLbS63viJazh8npJxjxATs6bjLAn2R",
  "key6": "ymu2N4NYqzAGg2eEDTRdnDZ9yLpCwgQ3wnkgJ5ssBkHuQaSCs9Fz4zjMcGrbpwuWKphjPb8Ar9os3f1HEZCxSFC",
  "key7": "ATSzYosxP8C8asbSnPfE7ANFRgXz3T1VicJfZJnq6SceFXWwfmfVsM4NAXSF1mnXqUcoE2RDTmkoz3XKqnNhRFc",
  "key8": "2dW32mXmGztUjAtzQEXvUzN2a7Loih5hbYAE9pQPTehD11YnyxEH2oh9EDuMuVotRL1hw4kJberJMBF7w6m8mv8j",
  "key9": "51piQr2FtAqeKxQzTn2ahRRjuKDco1pnKzwFGGkW7txMxDiJ8rbNSryj2JiY2FE3knJdP3fQA9zfdUeiANu5LegV",
  "key10": "4jRasC6Q1WzkvD3jodfqFiBTN41Ht64sk8t6ydbrDqXLjLwVhpo8upTb6JXDFGTY8eWixU4ucpDP2s2gMFX7nrZw",
  "key11": "2sxyPUF4hYtGiEW6KEy1jvLxY6NR5AnCLkuSKF3587YMqaiyzJYqTvPfWDjdd1Lk6XQ488ZD3WkPQhrrpNMz4J9q",
  "key12": "5mGrfivDDWEq8K5Zc92gA4dubtERg1SxGM3wkpVNvmBptHpRfoNvhZeVvsiDf6MzrWeAufyhxARc1Zq75mBsxWyz",
  "key13": "3chP8pzGTdTvmbiWveZTFRjJQbmpU6Rys1JR6E6hrt8aJaiFmYucThtHCeNNyKahGLCVSQZX2KqmNM3gCN716vw9",
  "key14": "JsfBeeEKT2SvQTnqrr98ice6B3NPACkxEvCLovZoqtq8KsmxTbP5ag3N6AvJqPsMwfxSCcNNPAo5LconxCWX7XQ",
  "key15": "4jGo3zXFeV8HSB4yMsKcD5eRr1LE9i4BFSYfLLhajRe6aLsvAzGzexrg3bwv29R34XP6GEXbvUrdXiaGeArwYGqK",
  "key16": "rhR3mLDYt7BsE6tUzboViF3hrWSnd4k3WMADkD1P2iAYA1dut6i4LkqXhvvfNhj5qumEyE6SesLMwfFoBLYKE2o",
  "key17": "3rF1rjdftJ5QYP998u1BnTzsNEEL6cvk2adZiP4hSh8t5vjzav1KBcLGNmNzRM3D39f5WJ7cvwUsLpAUq2xDCm49",
  "key18": "665DPSV5T23L8ELoqHvGQufXCueRJ8WRf1kUbKBCwXQDxw8xUXZ2n9voEwBrZndwbYRYMByDVwAX3ye8hLfq3kwu",
  "key19": "3HAciFBC8yAwPzUGbUxzB4gWFziY6XZFWpz8dkzgUcvWNZFr53YhzFFZvNyoGj9beMuhMQkjR3ZYiGe5CXAt69yQ",
  "key20": "4stpxQPdTC5xfdtyTGbJzMetc4XsqSnzgT15JCs5hKGJu2Mu5VXQ1LRqnRwfdpaT7YUVESdYLHN7ygwnEgL4bJP2",
  "key21": "4mxiScksnS8yochW5d6YW1gPZSGKzdRK9JxPLu6HeCtd2NATMhThZKN1Bu1KRaVfu4Rxzq7WLL9uojnPJXU4jSem",
  "key22": "4mSydokKb7hSosZXkWrwsiVtDiAn5XVsKLkHHusZLBSZMbmiLMDjsjCLFy5zxbD8hr3MPeNMHr5X967d5gvKBC52",
  "key23": "ppcjFJUbHZP65gVsmx5a2Q9Vc2CaNaxq3t91LeJJMK8aZhFwNXXhvrhJ2AjpjYrnBohDHUU5TdLvmGpzsbAhEk9",
  "key24": "2M53LNxPsSs4ku9TbDqoWbVq3zVd1P93p423R9YPb5RCNoTqp138GoyDdTHuMMJAGGR5YFWyRw57eEW1bj8PogEk"
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
