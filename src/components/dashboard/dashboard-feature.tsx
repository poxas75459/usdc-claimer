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
    "4xBJ5UzL5NKEk7KQB5oWYXVqg8VvmGjf35aTtBTCgrLmSMLUiADxZGW2PNvv1hdFPGEQFadCL2ZHDvENGZjeHjkR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bWHXbpgGMRX29Sr3q5zoddtGJq1ZJVGmGgm2MTKFmZ6aGKP8VQS3ziP9zwDGF4nFa173s4vSpJgLkU82juN4a3e",
  "key1": "4hY4z7TYHR75RoMdC2U4KTpopLf89J6iN55mx8Bfgt5RtbPjJMxG98a5KyKFFwEXnFQPbJ9bVB1S6funvKc4dwnr",
  "key2": "ja5hmtN6HHkkp8Z5DzvUKWPneJGRpa48bEx8jVbvJ9m1p4PnT1WXwJK52TwQpHrbcDY9wYQjyJTQwAi1ZuepJub",
  "key3": "d9BS2vKxGii62EKfrwaWw1o8SzVwXSjH4sE6aMkGZKHT4XiEaWvDpHNAtfEbLTEP2nbJSatgnAB8PkEuPj6Xffx",
  "key4": "4VEqQJLuMh75DRHzcMdzVzwCkHgnJJtq34dDx8HnwYWr3KZJQzKtF4tJJk823YmLp1cSqLGubJUnjuzwwrc85wpY",
  "key5": "5onRdYe2KmTN1VB2ZN9ekSJ2925F7eeqL8xFq9DGED7si5qtwvUcKXVy5WskGUgn9yeRSf79Ytc7KDu5DVJf1jqP",
  "key6": "3ez4r688CSCo53G62svnCLL1UP5QYou2HrKKZQAjQhHkGmtornwsXAcXsYbQ2uYQmPzh2y9yFqocM2P1vyeYdFpo",
  "key7": "2HVntipm1sH18f1G2vjqWj7VVjT5nyEr5HUnx4GdeLtwjDUfGM1FkGkW3jJt7RePFGbTLFZgpeLYm96gvJSf8s2T",
  "key8": "233RLt3U5om17XoHa37szc2Ad8XSMCX4W9pQ4R2ACe7BAGfH8rrQqMMjSUeX3VyfSyed7KzP56ps9UGaJuRSwq1N",
  "key9": "2AbNuG3spKShS7NCJ1Kt89jw7KtF1P8JagN6XUomdLdDV2ubd3M3vMCUJpfbjE3YGDc6z6frXfMER5NoAVRMcKX9",
  "key10": "2n29eQfv6E7o9QcpahpUQ7M7EYRReTjz7ESt4gAfy5ZbxAVyfdHCYRo4ygV8uLbWPB7mUou3tmba4phJEhn2N8s3",
  "key11": "2nMMVn2Be2mox3y6KF39zni4E6wSbcybrmnrT3BPwPSEkEsHKoSrUhzQBFiTwJGPucgL2jnzPzF4SVpaa1cr2hK4",
  "key12": "NWSxmeb3ubnfuk38hWR14udGeAG2SXr6TobgZCmZnbZAx61AbUzzK81z7g1kNxhsW7YTzEqPo7WQ5PyQHuUvHEe",
  "key13": "ZzzcGyL6E1tHkWoYXa1sJKnwFNFH91qnoJj1bR1ouGLRB87xT3XZLQcqQ3Kh9EaL3SEC3iKRm3YemgEhSoXuGRf",
  "key14": "2gY1CpSQN7gwbSb1Myxp2JvBrNktk32Xqf4cGgHuAj3Gce1KEQfj5vYmjkD7MCE5w3k5httiWGRjmimqJRpXppqV",
  "key15": "4XsTk65pwwYY2Mumb8ypYtrSaYaztRXVFZZCnrpbhnHtfKaDgdWzGnyEPdsMKVGxcV9KnCYmLX2S4V5MSEdEHP1h",
  "key16": "4StHk3Zn2TZafWvAGSHbqjbtPWfVKitgH6Sx6ep2U3hMktkn4wkKyhPsQEEiveB4LSiQVWXZBUt8rzzWGesEcHGc",
  "key17": "3JR2pp9NfmfqisdFPZbDh9q1aTNTCW57b4WEL4iveRCBiDDpSmX8USFGRtwNcZerV1K3gCtjS9bAM9h8aGcVXxoC",
  "key18": "zp83P9NbzGWMtgV8tQatnhoo39jkLkf2oSKTp3ZMNPhHzT7u6Xyb2Tb8hgsvSmzJn7H5GWiRRLuNc9X3ZaVqQre",
  "key19": "2wzXv7e2m1QfSjueuMKm6FqvY1hGVsTh6Np8z192J9hvCYdT89xG38Ku7K9pbWEviXj69yTomXdD9sZwxWM2qwqS",
  "key20": "4Vrmnqq1yr7Cup8W16iJiPuQ4zDrQio7MeospTgoncMNCqGYTb8T9R8GHdXh4dntkqt45ZKciKaQ7Ch5RtTqNkeT",
  "key21": "29nnZxiWLZxnHAzZpz365cGTHuFdfs2HVyMCnn82DrFyGYi6ReQW1GA39yyc1VZaPfCFaSybFGE7Ebg5VzRBXLmE",
  "key22": "2fo7U5RvEceWjDD2UCRqszKY3go4ze2FA7VDCWHqQMSYUKeFeMSWHqzN57MiMEeQvHbBW3LQz9TnG646xPiGqgY1",
  "key23": "4EJNXQUDEURFq8oCwkapL2g1jHGTStDTRHBCvtYpRhEWfDkfaYKQ2bvinKp5vUjtuozZF7WJpS5mVcUyRLAeuWNd",
  "key24": "3aJkGQ1od41vmpgLbcvhPUxy1x6EQ5sH6PkCVVvHjDhRVrK1TmMVXLLea2uqdryMtaLQuZiKBj2QwHGTTsEfYgKb",
  "key25": "32cBjrcfnBTLiXgnm6GA2rPqyMPT3u8ZUKvZivttJAz8U3QKHfGXzfizm6UHdmNHjbh3w45q9Cra4WBz1jPyCnx5",
  "key26": "588iqrgH2YSoWNqk9uDKyVrcUvihP365bPjw3qWxav9T8WYPmAmGDG7uGcgVJLT4kiXmbdoYvnBHTZujHUX3YU7K",
  "key27": "2ascd3h7nJX2q9QTh5xtSjfzqZpw9YTUimbeiFoSxJUpM6wy7cZVg9qioNgUZfCspRFudQomtDvismGXqHnVarvM",
  "key28": "MSq6W6qYg26JdvSHWcogNf9XykDDYfX52KDGX6LXsw7aCEQEEShGaCpd5JoFpRbswqsxHgYuLRE7wcDLCsXQCwi",
  "key29": "27qd5NM5rPkUqeYN74NpewX6bPrP7iiNwv1gMqnt63HHfr7ybv9A2SeX4kiHH9uaD4Nr8F92MuKzWbazVJasQURR",
  "key30": "2A4ZmBfEnRHL6ziSBgLSvt7XKVoqHav4zvKiP31DrFKC5ZRi3cp9W3SxYywY1KRXVyWTZg4KujJe2XtgVHnM9hcF",
  "key31": "2Xep7athqm7ge55oEjpa1v3i3iw1VZg1moCgSQLxGghx9EaPULFTFJF5YYNaKaNjrxSvYgupRDomFzAEtiwqzYwd",
  "key32": "3xcPhuDYeHDa5b6t7JULCnpiuTZ9xhABESDfgg7rBmHxEpBbPv9CBnbADunbg9DUpu5AdbKEVZ9ahjE4EQvSQkSH",
  "key33": "5Aezpi4VHs5WeTWb4AoXjzq8DQiKmvGRmKFdMVaxwQ3MQezVVSkuMs95yFFS1BHEnJBhFfcrve8s1hXLmYUoxkyH",
  "key34": "61x3rC72hjnLnn5QMxxZaA9iq8YyJsAGQEEG1ZaUzGoexMEi5yaxZ3jM8wzLJQC6pSSvzpF7giz9gE1vbADPGkLY",
  "key35": "3T8FB2SfqU7GnCRFTuFrEeDWADHku2r6yaGwWYKNoMCWQ5qmFpyRsKf5L8B62o28JKAVQP2tYpWUNUZ6nKd5XEjT",
  "key36": "qeyHmJpMxi6zxR5H3Hq1SjQbMxuK98j4jfZFGt6xNxv4sdYeJyDWneRtb2taLbGfCXip1gUoYC9JXfEEEhe19f6",
  "key37": "3NoiGGT1moHttmEBzQALMJMtAqfHh6c7MmCrwA9eBPQi9xgydyFLkCoJMbiXuAPmRYfWEVVRW1B15pbRnNUGDWuY",
  "key38": "eoPCHz9HoT5x2naKQ16Jit2mxBiQSmUXafTPTtE2hSNLky4G13mZQk7J48JwyBrQmCoTzgYmwDh6naAmUHUzLxu",
  "key39": "4yAyFLZVnLjU8iA5PfHrAe9Z1ALWiJwDYV7FTWDB2SipXEXvC1Bq4HHE5nkJPWVf2EE8TkkqUbe4DBiWBtswL9He"
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
