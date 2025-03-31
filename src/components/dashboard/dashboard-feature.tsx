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
    "4BeZ6HH6E71PAcmCgLFRU6BYCzNDD1xR3kSfhVgjzQVTksBhS5kn4ieZUD9WFe4z44xQyLNdUfTcRDN3HHEbpRaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26avc18kouV4uZhoh67D6gVttN8RV1UGCnqnT3bZKdyv7QFb7bT6wtkX99d4gqeVHQ5S8hhNT5gt83Hj3LzFJAuJ",
  "key1": "5t4Vu1TV9VogcsX4kXU2yxYRNm7cvhp9fqhF35yb9WwakcV7HPCjg6eA548BpXXpubZrZ7uU5n3VRWNoXWvn36gd",
  "key2": "GVD41bZykmK3wW9nAiJuJwfwKRDfgsfXz7n6fQwMELfPhbhZePa1Smh4htNFiuXv9c5EvtVtJBk53fezvSM4943",
  "key3": "4Ka7bfjLv8djKLA4LbU5c8fkDob5xMPRbqVZu4XqfB6p1e1vXDXZw14KqJXnPKjsJSyp4qMDx78AFqcwDd7YqyBk",
  "key4": "2TPTTS6Ajav3gm1EnmDLmH6hKY43yBrkxYr42oDtX29YGRwqwaRohWDQpnRJFQkd83uw5ruAcYn1YftnjAQpwzdw",
  "key5": "5iZwVPF2TDay3GZSkKaD9i2PvKhsZ6T7CmQESGP9n9HwPt11XbRySbapYJh5k8usgNHbctj4Upbfug5fBbQyHBtJ",
  "key6": "48W1RC7iZdt3rounygvfWLAFJkp5P8kSbThVDK1itv85rxF6aZQTYJaw7jjxVR7xhktqdXHJCyTo872tiFy7JCkk",
  "key7": "2cYXq8Q1SPCahjk65HcJxry7tbhxehW85ztYp1QJPKootueoMQp1hNePJQvWSLmfXskQf9V35gQ7H2HFXh92Tews",
  "key8": "5qkSbfeVA1ftFmL7VXCFRmnVVXSP1QMo2UcAWyByhTqp4oh6jiYn3osERtwSKjJPCRuPUnBCssqVEHVzuziQ9Eqd",
  "key9": "4Lfj3HPPM2QUPKMU1dQbHsLHrKuheGNLiL5MvjQjxcvSLXu24mnPDo2nXrASthdCkvwn9gVRasTurMzqK8vy26c2",
  "key10": "4EGAfgQUxm8n9eMXW75JzaiMLRRkrXjMT5pvpf6c2yH4QGVZrhziZiJxLxJQMDnqKWjxsivb1dDe4pDMdouZh4mb",
  "key11": "4QEbvPN3h25mbLBeUFTqy637mTeQAFtbVdABetbAmt61AQpvqbNaxYCiz3z9n4EZ3ihKFBcSjUFT1MQ7WkUz5RL",
  "key12": "4z63nmucrcukrLZLjuDLTEsdz7UdnEW84f5v7yqa5Niyiueekwmo22sDZG2VEjDq7ECT7XStpL8kLHTdDFv1ejgq",
  "key13": "kDUKpV3SnXDrWNHcF9mQX9mEdQUQ7X8M8EFDxqHojQgTx3Ghk8F167gGvTqFAxrS3FVJE5WzhdneJt6kDTAdmi9",
  "key14": "49jXhBwpUpKDqigjVHkKtqRnQMBbUDTQm4cvFg7n8L5AFvUmDxXjqRpXntjw1B1v18ZumDckZFNcNLE19aZHTRRo",
  "key15": "2Dx33nP5hxykNotxSoJKZ61bhr18RhLLsYB3Uibh4S78PJYZ7ttHfpGJpZwMYvmApmiFLH5XfSkNRd1EsDPrTg4Y",
  "key16": "4yFpw33n7riRz8CA8ya55yGoFhb1jdJgHhF4sT2X9RGaNuQiDqVebK6GEF4qsFLNrGL1S7nDpbyUAf3gKp7T6Kek",
  "key17": "2CstaNmYwoXWNMScRYFrb6vbVG4S2d5zqZtfEJKxdsADcfknYnzPgoGakK5RZGKTGAR9BwihVJWMVWtHQW9V2Sqc",
  "key18": "23XNcEs2oXu5eKaw12VV8cisQJJErhiybCif3f8iatxkeZNckXg1RkV7T2MDyFFawQgeAy9V913wDyhm2i6iauLx",
  "key19": "5Uujwe8k6w9yJr8HNKXMPvHAkTRwfEyQrw8rsYyf616MuntMUr2BTsfkdZiPbDDjuaGBRY7jrFKBF5Hmmb6Rfk6G",
  "key20": "kmv2BMDqEVawUkS76bCYNVwEXwHGa3jhyjjWwiAXmPXKDfb3SnHUqSMsE6cTt23FU3GXYKg78F6dLo5qgKyLteu",
  "key21": "4qahEPvdRH4Derr2eJQyAt6x8mR6GxhiQhj4AwoDjf5Jpcg1cgL8HkpGMSREzAQwkGxhDaCMMwUas83AG9u4GQ77",
  "key22": "3XHpjteiEG2f2cZQxfCyDCuPgwriCkiyts17uyKtVky1BKrFuXZqWYDH6LxQ3mvLiury5GBLpVdDCAkHQKmZpHy8",
  "key23": "nhdDVi6fRbuVH2p1AFcqVjQMkDptPBzPNMW3USqfUGu5nVB37ZVQTWDPUvqMJcCsw6Sm2mgzCgKFRzy9kNqft9y",
  "key24": "4tbS3CEjd36ycMuaGF3ofuSgYSrFGdDepPnEiyjLkdDoCWfv1duEG6JEWiEVNb81bL1zPvfEvEqcLtYfjMNDqzzp",
  "key25": "3ydRkFnPdp6aspzZk16ffSsqrMVTisPjza5Sck5Gd7R9VbkjupaJ3CpGjrKnzjrbSaRqEU9yNcens2g7gFhDCY66",
  "key26": "2ok5gpJ9qAFTwwJMwVvYhDSK2VkHXzs1maTVNUML9iXRahWDrFUsS7BBdb4Xj9NZc6fGRcVzyMKRANWVH39AftNt",
  "key27": "LcuFrZC8Ra48P7omfzvDfZ3QKxm58mLFav8VT5hhViVuxTJAs5akaTLpDhpiHNoj6SM9o9WnES7ZhrgS9rWe7Xy",
  "key28": "2J7vZzjg7iUAjWY48QLUQefvagQwY5ahCUHfUe4VTMZmuqAZQWFSYhEh81HpPDdndZbtJ7guWkNkGmLHiTcWFAyT",
  "key29": "5AexuwbuTwD1iEjuGTuCSkAyERgiR7MYQV5SwhrLwk4yEDpduR3YJyJgY3rYg5eZJR7VoBi3wHTWMTU5vKAXg5Da",
  "key30": "3pMBSxLu2ZSKdtLsuwgKUyEWN6FU1a7grdQCsL4Bv87peSj86rAr4QL14hdgMV9P8yxJmF3kJxguxT6ktKjnn6bb",
  "key31": "4N2xskkQ2amPmkukcVW96tE3wwnCjwuLvSeLRtuZA3qnd61Gy7QXD8F6EZjFGpsk9CYCorYzG5WnV2VtmeEh7rig",
  "key32": "3hUnNLzwQP4ByEgdrWroRH9Ldsk9d2b8XUbcJF1p7sJdjEpW7DXLN2YkRrydfTgFBkK3VoquaivapdkmPUGPjMAF",
  "key33": "4pxwEwA2Abmengf8BTrZToQNKPwWfDocSQEish2zLjgPXTi47EJkysWiQBGxrrFcfxyG275QL8JMtPKJDcQG1wTX",
  "key34": "4FnVVB4b9WYZZRawYKcSX19igZy6AFZKPUMswHCkVwTPGdjP8N469MZjDbiKA9eRA2ao56ygHiMfb79E6UBz5y8W",
  "key35": "4mBcKCCEdjK9HR4eBWJyb94G2LChKa24BEciy3kCqbykFrrqXC2EZZ5ozwS7iFfFusnJGGEPbXdjDUnHXqDxhdFm",
  "key36": "2Az9Qh6hcBmmkHjJoqWzZ8tig8B6Vci96P6MubBvb5TnApob2QpZ4KNfzngAmWRi4Gsaitt9krtafSuAZjtccbbv",
  "key37": "3qTydUdqNLuSopF8TpeCAByTv6SmjCZFXsgx9Zjgw9n87sap9Xi3XGrXtNgRpmhDvEs24rc1EDR1ZMcysYM2qU7y"
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
