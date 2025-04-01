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
    "5zvdAPP6dqpR4Md8XUgWMRU683cUSJsKRnJtEy7o23eoynhEy3PQZyjHMNRXhqPemFwUKFLLBcsvrxc6L3qEi29W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zwdxrvcoG1GH1TvUC3i1C7MY1ZN2gsXEFAJtfPjMzg9gLmJLShX8QSqtHJKiGE6F5f8nCNNYzwA97HP7KKdUbZA",
  "key1": "31ZRWD7oNe7DY8Kj8CnVyZh7wgp5S3AejHQAJyXGbEXL7XQ455WtNHGbWoNxPhk27EdFjxNM5siYcwSJSonkNsVU",
  "key2": "2LofFa6LVaY6bo3h9sxbwfe5vSr6qqoiaSPCLq9dEy1oQVzmFVoPNiWqvFw5PCFXFd6AVdHFER7jxyt7Y9UaL6vy",
  "key3": "5SriN7SmXzJRACWuVgqBJbxGHq4od8RZnxGLnn6NBc2yzB1if5R7sEEeaDgox9CwwngkHcvNhKgkR6qnqsTau663",
  "key4": "3mYH1ZUzXQB7KueydCaV5nw9qNBjGTbg5W961e3vUNZ11nzR6YB2isuGQ5EXDuw6E2NCDV1yK8pypgx4bFkEDWHK",
  "key5": "URKn7488knYRcRV5KkqykHNognR9m6DSYHorUok6txNnYjbxSQre1QEAFLkbbTvJQgstpF97ZftQ7ZJnntLy2Zb",
  "key6": "4GFBAQot97ZMqS7VRSmJEvvKn1ktcBDjxNjYbkGvoogxALLcfzNAPnijuLYyKkxiLPfoZ2EajpLpA8JmqeWSham2",
  "key7": "2Bkfypv5QkvntnrwrFCFKJ41jxBbCMUeMqkDByUWkVjLmKMYY6cdqwjaSHqnz4mgXFpmxA3Y1JWZT5vkLu68cEpL",
  "key8": "265vk8dwbMxJ7vxsG31QWrCNy7CXRJxRYnVDmwwbnbiPmFK8gw8rDP2ahChdf4iRnmjCK9mX1z5pNNrTbxBfYSET",
  "key9": "2meei3SCe4VTNBV4jh3eBQ22mqbZLPjS3JsGWzAoEvwcUvvR6BUZPAxng7jTdTa2x5cVCZ8LtDqwjy9WPwgvG5fs",
  "key10": "4EAAiWvF3SRu18tcfF9f7tJgeXKqKggi9C5FcBkkdE1k6LwM7kCGBwc7T6VHBtQRSdeauG9Si1CP9qoHbq775Trs",
  "key11": "4QMYzX7ji3wNtL3zn4Ma7yff6X4MqbieNcAQs2v96Nd65SRTcR7vLVHsg4aFh2W8SbtdNsr2SK2kyfcJXdNJ9W5z",
  "key12": "3yPBeHXfxYUVoJ8aMZPXz9jVPgy3oFyKDJ6itJthRiLZtquQMGnXc8UJ3Cwx5mxVAoaiPvaqiKwviPtJMqwrFQt7",
  "key13": "2rZaV1FFzuPHUjrLsGui5ySGo489JakvLWAcePD2sCoD7fA23VTpJvSMKhssSZiUoHhk7HBYWEyJgq3mtbum6mNA",
  "key14": "NoTaqj6weBfXTdp6utCjSg7yuy6FSPcnoc8LKfjrpy6iumfc32jq6NoiYNTBckTXGK4QfAWGM8Wfrabh3Gypnsn",
  "key15": "2nQ7KMoC8FmeoGMtz8n2x7AbfCwTgYjR4w1yoxAjpMUJhZn3JQwExaiLpPAFHdJ3dcEkLNULGcg6PVWunrt2RaNR",
  "key16": "43xSnMS8d3iZ4bggV1T4PKvmyeeBL9CH2H2jcVQtbYEajdptyciYupvbGhM8wzfn3jS7eVXH3J45pEHcUb6za9JH",
  "key17": "5iu6ywNLuxsa4iCwY1k7cgEQjUYSiRMNSz232uk2okFhqU9qFdczz3FQtwtrijNRLwtSrNcAXcvKmXSiXg5bEBWB",
  "key18": "2ZWSn9gtM8HW3wrdfkAtu8tEJgVDSEofaphT8DKgKoz8Q5kMVd2MkmBSvoiVjXxqaB6aLevp5H9cV8YhVr87P67M",
  "key19": "648Vz9LfzZChn1t6iV6M85gjCcFMYk2CH7BLzJBWq3Jgs2uqcDph8ESEZECWYvwHqajbbemoSU4TwXHC2QkoTdF2",
  "key20": "43civZfsT4o5V66saEMLRZupkvKdoCY86tTptMUTo4afaWWWfFJWcNZ5omBUSuNxr2WMKzy8Ko8rJm1XMDbzw7Bs",
  "key21": "5AXC9PssBoVSbi1eKdM3NSLRENCEuNSknPDLK8f8xhDwmwSF13CjvgwBwhAS5c5GmYBQ6FW2sj4yREF4XYBq238G",
  "key22": "2cLZYkVFzLbR6hZE5JjPi2keeWbgouQLy2fZMDMHheKVgbKQ2f1bM4r2LCMXQ9f36c9h7thkMRaJLw475VzitqVa",
  "key23": "4LPzNBtR58pzs3mg6kK7LdcYH8LHSfNQfGb4tz5K6Gn1z3qodGgHUf8gK4dV4hELyLUxrWwo1cSeHD6yM8s4CNSm",
  "key24": "PR2w6st3QzEAQ6P34P7NLcS9Hy4YX5EQCrYRTdeAvwM7UWo7CXvaYCCUzgthCUYRKAcUFDuUkkUXNfPG9HceQ6d",
  "key25": "55C5SGfKgvtSR2Z4v1BTw2UedV8q72ybQxFS26gWt42HsEM8sdYD1UK7ZpKdmWnW64tLDLbCdo4j2KPfjqQ7U4Ea",
  "key26": "2hrqgvCNdFLUXYo2kBJoYbvwcSZ37bcaMhkcEM1CuLZk7EZcw9PQyepaXohwrFxU8kYgtmv3WG9joB1g2dfRBzL1",
  "key27": "LhxZBiLSabui262LGADC4KSTpmCTp3vDudknArWR2o9mRnVMrHo5srvsRM1T6nwKG2X6CRQPAwRHUfWTtRP43n2",
  "key28": "5Wq4YUptkQ5fchhDryouR14RG963qynvMUQato1hFTj9tcHdeYNXnHAikQeLJHerFq59Zu7yzcYDtPkGWsDdhU72",
  "key29": "5aUiFZ2TP5kveDXQHrE45LwjMxT3b5wgjoXbyQahikx9bq3ieL8eTQDTB532w5LmZYwxSUzMArc4Mv2ymFzwB4bR",
  "key30": "2rZtX6EVZpj2SuTVzaDjJ73broez9zNc7R3u2Seoh63kLNgUR1zUks3qY5Q2rsP3i2u6K3b3ukYSDbPFRmcaXXWi",
  "key31": "TTpUp7UEuCXXYfWFJZKAz739kuTetwu8znHaA17bKrxjnQhiApmD1Uax4uLovXL6zYPEZgLqpjGARdH6wuNNdbx",
  "key32": "nABH8zjoFgNdY4mV2cpB6rmedd3kNJ1fpin4FcCzLEMBeP3LuqkujLiZzTqsuRgAN5gsYL6upjiCTxgGGD5dy8y",
  "key33": "XZmK9E4EuJ9KyXUZaVxrrtBHsi2ipypWLQzhkCavhURhwvAe1dtoreuBP1jkjJHHa6oMNQWDyfwZEKKr7xbeBPZ",
  "key34": "2biLjetxxFyVH4TToFBkBr6wcsAMhZhuCzXeb4sDhiHJW6wxQKdmnq8kFmXrg6gbYqTQcmEsAKKMspMfKNggyGWE",
  "key35": "4G4f6rQ3r1pMdSamksYgqKXXDmREWWdhcAsKpgw5R5KFzenJpSJojQFtrSDvmiK9ZswdtC3TZiPtAR9jUAfrTTUu",
  "key36": "4QXtFDPpGDqvjKAGmt7coTZtdZEnYDW5QSNGpvBH3QnLaf8uwFDnjaiT31jYfCzLdiAtSgFAAGFmjN7AeeZ42fn1",
  "key37": "52qnmNR9Yb7W5FEaN6kvuPtxdSpZwdvZFwYCkJhE7R6He9th7cSFsVZdwdSEXsgFcpR66Davo7eoiXK2JPxiSaGV",
  "key38": "4SADExx97KbY5LBYWtUjMWcGveqZn3tuSRZM6mD17vstSj1LJX4qMEykHvfJmXJpNyb8YqL1hTdcwnME7s7gBs5i",
  "key39": "3Dcg5EB7BqWRy6y4GRvbB3mjEXV47nkG6MT81E3wXHHfvZXJ7ZsMQAf49EPomMREHxFqLKNTGzX9z6oEVhZ3uFZn",
  "key40": "4TuaMbX77nMCFzx8ReqXuiP63GCQfKnLCix2ri9DYx7FBg64cfgBvGRo5NEShERXVKmxSUotjGFMBMBArARLY7QG",
  "key41": "44C1sVmvxAp44ku8CTtj3GGBryYTgwbAVcUG7hqDxYjY3q4vUqK3q6JvhnL5fdBJwRY18Zx5xu85Q3HYD6iWAXjw",
  "key42": "naD3A7aqmnQw84fq5n7j2zLPWKdFwCPrqpRkX2QxjLeDm3uiiDwtHURKmuWn2sxZL5WgvWvgU6o8G9eBaeHG3Yz",
  "key43": "252zsFAZuphLJFSihbQ5yLvrkBNxVbPM1J9c3WgxsjkVayNw2MyDodYjBvPTvZCN23YuxyN5BSoQhyHbiwy4Asn8"
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
