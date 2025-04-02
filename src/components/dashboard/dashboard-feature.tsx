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
    "59hCtbnUsoPTdUPksvSYXRzz3DF83To7mSGdr6ngRnVYLqoSQWg41zLvBCt1BzHcP112LnTrxLQeTVKivLKNAViS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjcS6Fn2H6QbNWfiAd9f4bwTm8xo2qU31gDhF1UjM8vwJseJuCspFX4fTqNZDtgMpvZjwuVCBPedGQcoHdYNdYE",
  "key1": "5mmJNJSR1cB6nkYCJ4D4HMVfKogmnUjto8QyGugKtzZguwUmWhqr4ZJ6Jr2jzui65CcVw9Bz37pSTYCvFQz9DwY1",
  "key2": "5Y3LLx63tpJ6ZnSVBPowsK2MyiPJJXBYhrckxTrtGRaXSFbw2eR6wgQBJcSkHbSdWKerPbJmTKSrCnkwt63nR5jW",
  "key3": "2Tj6YTskVkWoNLv2Khctx3akhLjahxx2o8FYHMg46zs4dXVjyxJSmJWFVu5t8Psm6VTkXC5Mz2WXsdwKCFXGhY4A",
  "key4": "43HpCxH1g4FZra2oijUThKBQAGYerQ24HP3VPevDM9NJzkdcncc3av8WHKVx5QGg6puaMYKwu1V9aJcm12NbAVVg",
  "key5": "GLFpPyLt7BvxzCYpwn6njZy66FgaqEKxMCopVC6w9GyXybmGz7xAabumnR4KNaeB2V8b31cBX8Mp6WgtZUrb1Br",
  "key6": "3QUQC3f3we5RVqQe5v1CSRM65aGhj8fn3JW6fcXTxfYmQJEDBZxDwJmGeuo8tkZLD9JNX3AdsTrYjksgXo3MzSrg",
  "key7": "37CoQUiNGVjdDvJmga5DbQqbayGZt5jyPry6KuEj5YmKkhzLFuZzMYgiNVacYkG1vX4gxzPcX7j84RXnEmiG5iZC",
  "key8": "X48jhVB4wRqAiQzgDvnVGmBH7b2EnHAS2L24rGi14EC359qzCvxtss4dmyU7Tr6FfcR48nvDNoEhfmueChQrmkx",
  "key9": "5owvRwbT2uyYQ9hTbaXVyxus6uyAiRnrq3iYKTAKqJvWcJVT67oeZFAuKyHuFmmHDNaZLcMcaDxj7tJPpVPaQBfN",
  "key10": "2k9Hunx6z4kJTAypnf2q7QXXnYjccthNSjTE99sVoszEQZv9F7SujAs22D3xWq6aGQ2MJusqTsPEh6FwzGGE5fAc",
  "key11": "3JErsFpeSKg2kL6ricnGqJL6CWyfHYCL4Gu9w6X1WkRjpsBCBhzcmK3S1j9XTSfjvdTGcdJLFm6yfjfpKTW8pBFh",
  "key12": "5T9CZG68WLSBCXm91y4zxurPmCyxMnxMtwbUJc9Z8f32F1jM4aCzAHshAiyYbhDyGBRshZn1WKxGEXxmxmpyPi6p",
  "key13": "3uWKqBSipt1aUctKi5KXyxeFpqvtfKjTWsvMWBcjASxcwdNordVhNU8rS8SciyAh7bouSXeqjFRJMGUWTdG195N3",
  "key14": "5q7HTz8f24enszr5VtcPZFiHh82Vfacxv6G58YJ89LYN6gpM3m3MCHiWULw8KkztHa2prLin5EU8hqDg32ZuJKAr",
  "key15": "3VmaHeagmvzshwXC3wYNgudkKo46eSkohDg9g6DrVMpSR4qin5PqVJhERCoNgF9zU5CsxtfhyctHRXUmS4BQDcZ2",
  "key16": "aDhW1g4AJPwse7ieugC9KBrS1rjHjaTb1kMunsZ15DAaPgTzj4WTujzGJeB7LLyHnxDmPf5xR8ZrALgVBqwsgTs",
  "key17": "2d9mdYTL1751vJkUmFASWKwJvsu5hSXobGVAKBbSwwEFejqQMJf2oDjDeH19tbt8WwV4EGTzUXXX3jV5oM8YM4ZU",
  "key18": "5BLK8vodymLZmSDYH3ewKe4c6J9NwMQ3eB47mXLvF5UphzamQ5i7r8dx3wTyeYTyvMqM3MVeDFjwDyWKvjN61PUK",
  "key19": "3P6fGQpcKeEBnAUHrxuW4bAEcLV3jGPVppv6S976A8ahaR3es3qBbSb8DsM5axZJH6J5HK8KcmaknfwpeSyV9Wv6",
  "key20": "5PkEtKFm7dCX4FuQ9XrrA2DLDg4NpZwHs4wThSiXMmrr6m1CyC7b9A4xm6Zi9rLrMfuEYFUXGNYk7un6PWBw6MSt",
  "key21": "3YBeQVz7VDq9r7LT8PxqLbvuTmnkgnK55FHwVyY3ths3WBNqjLMhgxDVAYagdmQTgVbj4rZXYUpRMEJEghct8nYP",
  "key22": "2WZ8Yryg7iRZnfHhe87uUydprNRVnkWPL8v4FGuauuULXsDGSK6giVaCPBwJnH7jtAxhivHjJtKoNkaEa745uY8a",
  "key23": "53vCETtR3kJaYAYv16AuuhGqTX2qHYcjXKKuL8XLeg4sX4boQonpMnBsCJCTLXeYQgDqgtr6BYNbfEPuhXHkwiXw",
  "key24": "4v4bBvEAhbjiQ5ZPAJtbfyCbQx7gcWqoju2XUXuhAXa7oVa9hm62wf6vpwud2WDLFRTYrKuCBBg8vxtp1KPhYGxA",
  "key25": "3WDSfq7BkGN8PRHFsaTboGGh6qkGQpnZX1w4351fKD4B6mmbc5bnfJq4wHw93yEj1EA9RcW16bbGHktXFfignJET",
  "key26": "63CBkU4MQNznVWTxUbqM3T5wQmMPrFD19evX7272hEQwNDx1dKab11M4cYedvuRPZZvmP8oo8C4Uxtyb2zk4sf42",
  "key27": "39FL4pR5vCnTxtujTvJx9RsS7kCJQoSBnF3ocLyBHP5J2bm9BGRznYDS8puU8QUy2VpgirJ7yeBE2pAEGjwNTzgm",
  "key28": "3n8G1Tpu5a8DhL2QzegoyzwcLpSQbqUAUgwoMFuWbxTCEa3non8apmVVRcinir2QcyZEzeBH7zsHSWFWNoH3JDkf",
  "key29": "v8NXtKMvEtTLEuMr66K5QTphG7JQw7dt4CxPjJBb6PqvJiebhgp3hKUqgYbqXSK8eFWL7uWbEZHo776xjDM78Xj",
  "key30": "5R3XaSk2UxB55MgBDdAFerwBh4r9KUQ8u4g574veJSUKPuZXFNhtfmFTUNheGngxUBH89DbowujMjpmDNoGEqq1M",
  "key31": "3V54wky3foNz5n7uK68iapEAyrZjVk4HhdqJz9ptL1AYEQEeKTpWoWWZtdor2aALoifcLStWuxMfDhsxaipzabAU",
  "key32": "4zfWf6qoYw62zyHf4fXL1kpcGncpX5UUDYA9CBsmmgTgQTcrSncCSvRVb69TdwznNckAZRbVAwTtWVkvmc2uHyek",
  "key33": "dvnG9UqHdorRh3sfc8aFcB9pJSi1kFAgt321CXjhgu2LUYQypo2BbLrU2qMa82L5VdNT4QrGH3C924vhrQ4EUFi",
  "key34": "2iU11w3ykkCs1U248P2DFLZ3WvdDujtdYS9MnyRWCKRcA74RQE8jdaGM5kuSAW3DNsYYNoGJqvPVei1gfNFyskS1",
  "key35": "5huk4T1vJvzxAEEJ9cc6hAdfuuAJYG5kkANK4zM5B7roV14rrRRr9uWWqwqMSgMrumEKHqRqRQgiAGXp8Try5n92",
  "key36": "293LjA7TSdDisjjpPCEzLPRxkK3jHYE8fNUxHzDHJMpk4YgYKpPq1YqHYrjQJeCDtb6GjjqSyUWnRDbreAae4FVm"
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
