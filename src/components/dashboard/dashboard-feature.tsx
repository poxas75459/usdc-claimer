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
    "4s4ch9V7RyAKFXjm8MawVecS3c1DJzbpYEyUyUM16GqCKr157D9doxHqN3WazFzv2usDMRSmAjcoVoHYMCjk87A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sBq93kXdFxgA7schVwnuhbm4e6cdWUjxBwLAbNFCgiFU3enyAaaf7xiMu53bfwfpKJGZBEKHAGkJc6GzyT5VGt8",
  "key1": "2U38Sg82Xc5rctByN2jhXQxBwABJzTww9jwCWaiyXSxaK1JtxjvtAV2F2DXndwBrUCcDUyWVbQZ1S6WVH17ZdW8S",
  "key2": "5JVc6gaRQmonq3BvXn1ANPZ9pcagUfHtC7jt7SyizCgtgpZA3u5rbiU1152CvaG7Pedf7r2DCWzBKuK4VXn1qmJr",
  "key3": "29R7Bx1keMZFozrqJJRg2a7P8DeUxApC4fjxUe5WeVfz2nqKeZphBkECXkWuDyLWxZHoEMKLCA2n7F96tyKAYbnG",
  "key4": "d3JbHYZFVdTHSi8kTwSKfqNbhGTjN55LbTdjT3UjDu3C3srn7TLs2tYXcZgYzau52Vksro9Q23pbHu3Z1R8jUXd",
  "key5": "5G1QyVywthjsLKUpKmHgyu4dqCgPMSyDS4xE4fK2rGgJNsL2oWez79RHToCkVBYesKVWkoM439Ssu2P7dGeVXud5",
  "key6": "2vXnNJEVZX9Sbnf3bQcNy3kqfYgzdhG5DpVRxfMtymhBS4Rsrz8yq4MuGtxND4EtkUpNuFSnpALE8sE84mfoeAdf",
  "key7": "2PxJ2BnrzJAAn6KtCfuHyNp1ys3wA2Nq2MdudaDZUbZzeo4rteawAWKnSwXCm4Qg81V9GEiFYRqPTysACrSrs4Xt",
  "key8": "3MafsGz4GrxzRz5mdpK6h1EH1dX7DifDudPFa6yfz8CbpibmfGMdRs1G9Fxjcfx1MuYNCmedLmN5MynZVLpq7KKd",
  "key9": "2VJaGSDNAWhAW428y9bVAzmmUUW65tAqVkNaNh4K8pDJMNXwVnCs4pgDeq7p8zKVhbDD7vdjLGctUFeyiMs4FA4T",
  "key10": "4mXq8PB7kK6mWFK3cKLMa5dYULDf1Lo25ff2sNtTZJWH1fjYuRvmTGMgPa44WGCmP7DtpHNoTu5Kj9L6VpoiQdwz",
  "key11": "5pJNh9Ft8Y32Kgoauj6D7NoK2XU1h8PRDbSvg2XDNJCdZTZGWMidECmnmzb2RvP2JwvELmbLHZGXSAXSqa7uoQ5W",
  "key12": "m3c7h6jUB423Sromb9X1pb7yK9GJtYA5QZiuYwXeVgBRUcPdcc6tqWnhpPVLY3F1uGqyAzrBDHSNgt5eBL7Z8sd",
  "key13": "3im63wSkWMbGxCkHKp7d5uC4K5WeQYZbTBikc45R7PjtYn9iymG4HNNVhxK1E9vDpCQNz9zGHFimGxXNAN7mSb1h",
  "key14": "3G9Bwr4Bmuf2Uds7HsXqhbsmuaZVZ23uZLyo4EgLngSg2k7pzPsFLEJAdsP9DvR3WbXiFxT91PthvNgsj3yZShop",
  "key15": "3tEWXhHkzeEkyertPivpbbk9ECdZjogja4JgMi25FDdSjkELPmxCSpkw5wYgAjjPzcV3x8EFuxBa3UkA7ok1hCPG",
  "key16": "HhriMsB6D1P5S6d2kHAVmKr2sSFE4BAPmFSA5cZkmARjZdCX4EKDHFScAaKzwyZHRE1ibpLm6AZsA7pi7zD6Pbz",
  "key17": "5SiWYxsrPTwPz9QBkGFe6L2ByDRANbxvVUWv8gcQsYvteeWcniU28EHjietkKVkGwK7RxpSw74aZbz5iAkewTHTQ",
  "key18": "3kLCWTANRhtHJSWbSp91BGQQYi9bS2gGMxTWZSjuZqq8f2SMQiL1W2cXmLnVwL1NjyhmEzYcV8qcntsGucKiVDmE",
  "key19": "kvXzUdN8XkrN1qLUeVsm1yaA1heiavP4tjSnPGWDK3ttPjgfyiVVcdypi4FgtPaKph94SRa2HSKpBN7Vhdukp9e",
  "key20": "4piTsvhVkBiT4siNeFB7aEjMBnzqZABUjMTMUisUed32Ffvu6JyXtWFSkocPtCKwuaGmkCfqqYvLgzEgvWCGnP4i",
  "key21": "5ZKQm6gWuoYpkv4cVQvkrJbJZ1fVhmaXdyNqYAJ4oewjyojwUZDvMd2Gc8cV3nBFSemv7D9mSAJSUYyotsu7P5fY",
  "key22": "3Uw7pxLEJjxWpnwWbqx8DVGdv1bKMDTjtPRwEwSxHSmKmYFTSTVN9YPuDcMErAYZ18aJCofb9BXwDSBSfFK492cU",
  "key23": "2aJwgtnsvNirTsT1sQMz8zS5xEpAJoVTqDD9X9hWui8pi4TzAnzAU71wcVSymmUc1rLYEuXNkkPDd6Ys9f2C2pNf",
  "key24": "5dEcG9piCBVEeyAkTb1iC4E7KjpvoXkLD8jw9HPATt94fGM8NFPYZyrmh29uk6vGHXYa5ZTPZ27GJw6Mitq7iqwm",
  "key25": "cJcsP95ckwtxxamxU5AE3vMXYTUueoXrvD3RcfeJ8Sgc9vDpV4HhgX4cwo5yokCnXsNnQHwphDsc1zgiQBPqLMN",
  "key26": "MAx6yrHc6JiBGxcwBXSV6ANdGiEwiz9dFUvXiZyWNfWfvNSDYAENB1ejrTHZwdma2b9JYudD8xqeqYGhsRpKi9h",
  "key27": "4TQmkc4ShwMJNpH41XppndDtUSaBKsLBbPxKLyEBKFRqCh5oizZhYadWzVXbTiG3pqdHrKqjUhMGXSgJgHAtTpCM",
  "key28": "jzgutGa4dNHELrPDzL1KmZMtMkrAJJsSgrGFF1Qau8TW8DmpVLt4FfECn1TZu664wtbYkye2kTfwMeteghsNAi7",
  "key29": "5MM3Q4RtvcZkn4ku79rZiK8779qQmVvig1kQK5FUG7kMSxVR6mA35sVh7gu81EXVKbyhXMgXbA5ooa8A2SDtNt8G",
  "key30": "2RNMJ9TqmZ5tP9PeG7WvKjdYpaqMzhoBNmgR1Thq9A62vz2ZfRyfHXp9AwjMPXcWdjZEtqmrsCgxWE6b9vVqmHHm",
  "key31": "3wrY2KgMhCxn2QM8JEsEeevJ2sxv8LohMGxuT8cHw2vgVre178qaNnHpS65A6xpYnyQMoqmBVZbMHZpiZmY7XQcT",
  "key32": "65HuzjqdyLYZRzWMfhrQNG8vbXzkCSZPvePtbL6qtij2B6e4iwCVkCPbq9puA7b1g5fD8BEZjZnJUPcK9GgiAQey",
  "key33": "2LU8zjrdNzRaWndtbrJbeUJkr3YGUNEZx3BayTtmr6S4R1ByoVSLgW5RNJ5zYGgQ1bJo6k3857YKfHt5rZ1RAKmJ",
  "key34": "3m7moMrfyYkGBEusRcrqg8LLYdrQfUUatX9D99ULUitKRaVRrThpFbStyF1HgkwUeB5FqaucbUX6MRkQxZJJiaQ3",
  "key35": "5bm6uAugtKEKf4DkAyKksSTLoSuKi5omrCxvvQjcXBZriEJ9zwHPoTY8JCaxZW1J6Mfp5T8TkNsjMTLDpnVDRzBV",
  "key36": "2TDVaKTWcv4Saf3z4NGZExLAvh87eYRRMenbJT5Su69JMDscf66fVFSKEGPppDnGS1hUhA2fUU5zLZMokCpbrUFn",
  "key37": "3o6S5uYSHfGrAYXL8NCoZFKoAqdQu9V3nTpLP4fNBVRNdJa1jaYCmHYUjz9VepLTcF7ZRM9nkzMLYdVZdqxhvqch",
  "key38": "5XKCjCZ7XttWjYK8avho4YjEvtk33V3wpwvp97xpJtACe4UBZhocEXhctojneJRFaz2dPS15qGNgkc6VhZ5bHsMo",
  "key39": "66qwuQVb3TU5TofWnVg9kA2f7tdzQAoG8AHrkec8XQf3FBZQUREvNAaMose8kPB3f81HeWwGmytGfZ5VB87C9NmU",
  "key40": "4j5fXTtjNoNCNNz5y9TUs3XPUGxZ44NTncofgKtdUszXpww4RoCi66mrLcUf6PFDst5TfhzPPEmTdCF6xM9Vdmze",
  "key41": "47bcQQVa47kTuHo6h4do3YPXTwJbEb98NrjZvbLrLfDvHeFdaEL8bow9mq5qMpNC165miaAH1KCmCa1ChRqcCMYL",
  "key42": "2qQcGv7X4fHFEGkPUBmYrsT4dv2QTuF1X6qPbUxay6C7x5dTWUySGha4FZTzumoMCxsfb1nwV5qc82Qh8Bmwc6sq",
  "key43": "4jAgUMezfTfP7R6tQH1FAVxcPW5TWgLepsCPG53Jgc4fKoQPJtp6mJn8dmCzieqYSqwjXfR3FciGFTyXZjkdadrw",
  "key44": "b7zzHkrgVfqh2umRJiNRhLLRcKMnzbzWSFXpjC1ubxw49ZuFpuJCqMNaCDyp2JSQV4C6nt9UoHARRBFVk5AtFwx",
  "key45": "5TQe8SbZsXyk9ZDSBGF6rRFrNt4aaRqd16hBmGq7meD442T43hY2n9cbV58osEvfL77gLfUYStPA3c7HbMgsHFAj",
  "key46": "F3AQJizQUsfQTbLs2sWdWtrkRf7ACBwBPyAUrhVoCDaScC88jaKqL6BkomAqNj79G9e13FsyLFGrvcB5um9ikJj",
  "key47": "5qqegxLfvGkmdsJ9XggqwNMQTE4Fi6AaCwFfAbLjYK3ByK1AiWr84jV6J4S5m3W8VWqmSPPHyfvNGgHCFyP9y9SX",
  "key48": "3p94GGkb9VyRiBfihU8L9quwsTdjanfrtceHMqwS3i7qanuvH65HkP5X9iddNo4ovJuRE8e5dGZxndD5VZbUnXfB",
  "key49": "wKud3nM87KruQjNmKnJHELedJbj5jnZoLf2LkiKw113kLP3Mj353NweDRmQhZ3gZ7CpmNnfLodytKcYPjSN4Yp1"
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
