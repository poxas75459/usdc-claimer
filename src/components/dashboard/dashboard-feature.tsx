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
    "4Jioc3XZigZLXNjTvpEVH8jtX9x9yA7CzZx6wvWEcaRHRiTKACVPJ4RXq7VUSZdzs3uhmht1SSH5vqtTxzmvEV9L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tqVMt8wVpH15Hz1vWfBhr2ZtgJd6s2rjLWSBii5tGfKEL5aDdcHCkHKhTCEj5ZrAgz4FtKrPPoQLjVy3TPDavg",
  "key1": "62QDbUZCuofL2Rb9fCLUHZk2XEf4sc1sHGzv4ebJwi9uop8z7wmiryCnmZAwau9FsFhN2vLFGSHzJb446yXNqZa3",
  "key2": "3ZpMDwSRiZKTFpoxvfQkYtLBUm8PD5hKG8WQEjsFrLvtemNnqY8KkWDErHv5EHfiUJyFubZRqR6jEZAMFm8QgWC6",
  "key3": "3Uqjb1yTaLwd477mPzPp8dNYUN2MwjxtWMMnsPSBHuzej17kDhQhQqdJaxajVwD7T2z3Bt936kd9uFJXyDF23VDa",
  "key4": "3grJ29XmhiEW5wKUfcuyScjv8CfEtrTfjsd6o7wQxf3w3p8cQ3V4L15iS9ipX6zi7ZRn8SL9QBDtTUXqKMtVcMxv",
  "key5": "2w9hUkdTvd4RfrJeVpHUVVC4E8cyqpmUaszXD71ePfU2917UNwKXsuzupSrhAKDZ7utT9BDHmCE8NXxW7ga1VAjt",
  "key6": "5iL8GSpAL7EPArBm97QMVWeqP2RABdJwarKH7Uta8A67EjcgifNwzbKqdwRsbSKCxQdGCVx4a7wC2CSXk2yWk971",
  "key7": "2HHjCdWGfdKjr8PeBptZfxMKVKXLHiLYsqbUtxnFQkVWbGET8uiLnMMuzK24Le4vo8xNLj9So7TNSUumDMpL6Dbs",
  "key8": "4TcGA67B62ZEjyn17fHVrMvyJH4FAQiGvbb7RQ44d7Ym7TkJicMpGuQronMJRLgjSXVFT6FUEc6XmbuGmWToeLmT",
  "key9": "6wz4pbeiprvJNRxgs8DNeBjJyH1FmcdLZkmNqfGWHf7uwRCMHxBypaem35RYF7kLB7qnWyDBibkTc6BQTyRP9ap",
  "key10": "2xYGHZMA1giXb8UCB9GVwac39LAZLXEuxY8wEcziYvhKARHQh8LNfCqsBFVZku7cGtJradS6c8DfdBV6sVJmLWmo",
  "key11": "3DRJBr4b5zeLYR1Y11vPbTcdmwPo8FJzbm3uJUxSH7quCvFKdWAmeCyJkR1HqtW5q2ZJcwjf8s6nsHbmNSHjWFAf",
  "key12": "2vnZBCZgrtmeg444kxTdSjDKfkH4tqJZA37iAWJYiRNu5JNNp2UmnsUVht9Jq4orshvTgmciWyEh3NjVY8YR5tpZ",
  "key13": "2cq8ip2FdaGzs1vkvWiKdkNL4jHVJ2ut9RjyZMceyiNN9GZgUPVtd8UGf89ohUn5A99hpysGCkZj7XBUZK3dSpT8",
  "key14": "4vdpZaCo6TBrzBrC1Fdair2cVEAxXU6i8PAoxDgbyjnVhGJ7TJi2fjMoNq8gMbzaT8VkEn8yrRe9uwXxfCA8zEna",
  "key15": "3WKfLXZ9EKGueXYVJeQENzUGLVRrHU6zKkdxMJayuLp9fNo5d91vYJ8vVHnzjk3r9LXQCAyERKyKpPezSedWFusm",
  "key16": "5jaMpPjnXz7QxLmH4g7ZEdzocSvdWjBpHq3Bx76XyEXoPYcpBswrS7N4Ac91NBupTe98JdWGNEenjefLEuMvAW1v",
  "key17": "2UuCnCTNUKsaN6GQfxayNxQCAEDReHibi3f35EAZN3bqRVYb8LxsXy7CZdbWCzS4up6EV6zaHaCZRDL8EUr9GBeD",
  "key18": "3Nv6Xc8Y3iTKD2Fn8kkUbtdVdb2ZShjc5t3VjaqZnYAX8iEDbLrZazp8tenkt5u4HSwCPZtbWw6Yks1ZE5f9cxtj",
  "key19": "58QhcVJNZK9E8soicZYG9Fgr71tDaaQzJCzXuuGg9n6rh68fPiQffqFzU4cB2zYcAnTY4wYtACaZ1BGCwRvd697z",
  "key20": "5eKgrXY27YP9eWuPM4E22kJmiNJTABfN9JxnQxEhDXAyPJsDPA7LRL29B9kT5ShnCJtoJ2keJDyTmy6fSyYGHY3x",
  "key21": "2eV3azZ2wu7jVaDNh9Svng7ASGWm7pg1Ltq7nEeQfFcLUbSRR8bBU36vS6UAx6ZDWycC15RoCrxYyHUsb1SLgG7A",
  "key22": "2QTVcWogARjQYtZFMhZ9cj2XpttHzFNqxABsXgFR2TZPsxJqammFDA8v4yphueoXWuzziRrZYQK3HuxCV3F48Soc",
  "key23": "2zwqgX45vaLR95V7pCEAQVo9nUBAfFbUGo2pu2MdcATXtUjhBWBb8pmbuMGisE5eEMw3cAJUk4y28s3ZrpJrnhfT",
  "key24": "5mQmhejYC2uGT5dFUj5GqabjTpgVygweshJgCnw1GFctTZ5rFv5UvmW7m54Xngu1r6UXQhQ469w3irStB9p4wfKB",
  "key25": "vgqnbXQYJwk4nA9EuNaguVBcN9MbSWf5QrCXBFEeeUthoCYFtcFSu6Mzq6Wjzuze6sk1hrqXrFEeZfNmLuerDXa",
  "key26": "4KBNreWGd9o9k2fi2mjX9Apawpauhz8DDyN92XYV83yycYE3FMHbVse7uT6jjYD4pyGCaJQUeebKMi4x8abgBNsE"
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
