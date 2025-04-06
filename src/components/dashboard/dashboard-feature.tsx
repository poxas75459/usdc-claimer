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
    "4rDvQayjbnFBY36irMV3mafh1kU7YRhgkVfDvsB5EwKASUGKxBTbTgX9y9BLrB196FmF2u12h7WeTchtBAoyKEGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nL56bfyd3sCCnVUnCeXmtgBDYzux86wdkGh2dfxFJB74wxzSabmcB5J3XiWFBMWTgit6wuBSe5TnHkBYFnsD61C",
  "key1": "5E71QnRnfbGvtSaVxtR9tAA3gpwNZxopneYrLSTMLgSYYx6jbmE7Lo5qRPutVdWY8QgDj1CGWjGxsFJH1qfB9fBA",
  "key2": "5wEf6xWnmqByVdV3qUb82aJYa3jFxMGpUC4twZNRiwxuKBT1sWHiNiBMjSjw1bezpEjQV8KJeWcYdF6Wc6LdSown",
  "key3": "3KFECV2PVJTQdn4o3iEkWMxxxJsr83h7gBVcTu3KxA2GaK1z2VYJFdFjC3sRLpAYbKSm9mLdZWJYQcRaq8yLw7Bo",
  "key4": "5q5oaEGTe2T3ikoVAd1yMXQyBGjzDNEj39VVqYfZoE1GD5qe1cMHLrs2zpLYwwEvsJrxPS9iFfAhJq9ownmxAGvk",
  "key5": "3bTGjK2w32deRuMyeT6uSpAH2P8rWAH3dLC4CpBKDK3EJsEiwHkHQyDBs2D1U22NgvfdPde6wuX31niuCnw4zsQu",
  "key6": "4mh9JZJ9vjgMFg9gRpkgjSHicTbw7EykaHgdZovzQVghNBgWnZeBvZoDg59M6jm8MSsYBri1mU59rgjeC3vf9Bqq",
  "key7": "3oLDnCWekSQhpJP6fCWRiCMRZXcVYKrjAN2yZ9AXThLmfmZhm385zD3xpid8QLLi9FUg7hmza2SCewY75Nv6TgGk",
  "key8": "bUSQz9eey2dTm4giRzeA17YcyiU8Y5yeUto1BbnCChhuyLHBs7fMcibKW3mH7BZbCSyiGUP7wfYavEzGKnxxF6r",
  "key9": "jL5ZL4JFr4xEZotyqNRQgEKzAQmuKHbHejrSSxDaQj1ML8qvG92HYTn4nYtxrTEUSzjQfBLxyrXz6PyVAfQXvzo",
  "key10": "5kWkzxxUtKZNU5BenQTHjYpogExYyvodUF2GBKftbc39kC7J5ifuaMAHnPCs9vbhdryMFB4GzTiCb3uBNv6q1xo8",
  "key11": "5ds8FhPXzsLHL43hzUdVtwNMsJyPFjYE6RCcjb8PwEn4DdYQpk5x9XsHhVmGunVwjAh7xEgSc9t3cp5afFGvgow",
  "key12": "3cRGv2Mnv1v6FBJ3veTZbwScdDXgwkqarEzTsthjZbDxJ4ukcmSPWsnr9xkfAuNRPVq6Nw4cVDEzBAnqpCjejJP4",
  "key13": "4FNqk1zWKAFP7J7osYzDj7cEZLVGAHwcdYvuWuNqervh8dP971o4HmJvWDFGom6QR1XKQ7qYfYTHxz331yRKp4N1",
  "key14": "5t5fRdgbTHBqrXUkfSUREwdFZA3xvJiKUvWK8ArM8uHLwcQLNPdVWd1NuRuZUmEigAnttn1FwzjuNjkRgVRZmJrZ",
  "key15": "SmEvdQFBikfU1jKspff7QXQUxrGnZKtSfc4dZoTeu7ymWNdiULCYEURkE5oqujHx6f5rByoFU9fe3SchS2fbxdF",
  "key16": "35SVGte4mMYcBw1DTfjKoNroiZ9CUUqqy7Y7KcQtmqhQGRjSyiwGcNUK1jA6fUHGzbNuodN9sP3LLFV65BFKV6SA",
  "key17": "5YnUhZ8FVLMdQkJoocLgY6rGCuxi161QXkDZzXPgGxHJQdJL5R9zHHXZh43d5Ms3LBgvefB5KLLJqHJfsvudz68R",
  "key18": "3rQFan9mUgtK4mW5TqNFtWhYMwUAWV5tE1NhrW4PeC5TA7pjcRpx6g9uogoUUgFUB6V34xwYxpkpmMspfKi99DZ5",
  "key19": "3QkEtZuHAX1CJV6Htbsgj6ApBCANqUKSzQZhoiHYgCTLyMTAoiFBnaozjfpZCmbic7nYh25rsTVx46WWats5VdXm",
  "key20": "59VzGyikrU7srvu6i1Xp9122Nq4Kx15wWJsQSkf4gRz14Ts9UiRbAQ1uCGarUYV9KGpyBTayqi2Gn483ZDxPaqhP",
  "key21": "5yiG86VoXWoFZi1ZZa9NASnnTURMHJBRFBkq7FnF9HzDTNEvWJ5SQo6ySY5bQ8j7H73CBL29w7fQZJiLSKyFNsn2",
  "key22": "5aTwA7mXU4m8Wfg4g3miV8dykxNurnqsxEGzj2sspTfhY2cAN9FDwVZ1TENPpYbvQU7gAToDkqFjnV9sQffXdaxd",
  "key23": "62fuWCqzyVVguEVhMJfZmmSxQdHBsWX6qaHXFoHjms4ca7FgzNuVyAjXmW4VHkn1x9CfGjcPE7DZNtfa4ttT4pu9",
  "key24": "3jPeFkeraUp6AXVGD9RJhcPvpunicgenFULvwXhXJvs9DQjguXFwZxcUx3n1jydaaYAacCujnHAYqvczMKKS3Uww",
  "key25": "5sRWkreP2op4vNbhBikrTennP8z2Kyc4X6hyhRFG1cHvpt7KJbg1VmzuM6VFSeNC4kXeDfCWkrwtrGDXbD6uKGFV",
  "key26": "4A4tK8wh4q1umsT3865y6xDEFHpi2geZXeTPvwAWpQWvVPUCihPGmjDzkAgugWmiuCCC5NVxyy885omgLxhntVny",
  "key27": "3ejEXEZSEM7Da6qXBEzqPNjJ6kFyWowDjGoVunsdyhuB1HwjANWKPPJkX3E3KgnUuVfe52VYzoX9oBUnFhRoXMsN",
  "key28": "41UBBCmHLaypRAaPpv9rLjRdyzjMber4Fcqh7mST3CzhgeQjEoyXQp9c2xy1fSjU3eSBJbrz7taKV8JHtxgcg1A6",
  "key29": "4ZiHT1e5HrpFkQoPyTPDzGHKnf5tALt61r46RSA5kKFSA7sFrTDKDbo4rQQVAtnB2okFKu7sBRnjWbXHVYdmmRia"
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
