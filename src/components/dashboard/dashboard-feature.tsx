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
    "2RjqaRS39wG6Q4mVXDhDW6BxRHR3FeMLKQeWKyeDshSqpGkY7LYJaYLTPRNJWo2bgWeuxNp8A2hpexxVj86P4HHT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HtdSzfUoKDhN1V7HLEkESXWutVZ9eUPQRErhowxL84S7DYQBb6znfaDKmdu5QnffaWmdTmjpKnjeMvFdQVYze5M",
  "key1": "t1b8Xb4ES6gi4ihEKqAPM1tA2vdybu4cuqWk98QWwhKPnBNumyA5Y2KjgvNRaqEKeMzp7QuR6f1T64z4YNFwqES",
  "key2": "3Gce9qdv3yvxWxUDzat69ap2X1ToEjJ2pL9KxZgz2AmUsbrGm5VCemzJ6qbuZd9V8qC8pRi6dtmAYkPbQkyUkpwP",
  "key3": "nxB71f7cpfhYCfBC6B4myZvexede4u9b52os8cit5CynGy9HiZGaJN71buv6sLpt8GUjGCJnXCEdu3yoPUbqNv5",
  "key4": "GAr5bH82mb6adxdZE7Yp2ofQvtpawDv1UKMbvMWrd7MdCC18HGsU84tpGjCHmWMTmizdAN2JR1kVbpNzAxX88Gu",
  "key5": "5sDUPjhkmwHMeSVZcCMAJ9p226FedQ5VZLUE4SUbsXybpX4JQRCSRkyWyBFrWjzzqxWTkv2fkNbC2ztx69QCx9mZ",
  "key6": "3wLkr9S5NQ72ReWsbkJ2wcj6EdvfDa7kRaS9SZS1j8f1WP1LJfjDPDQsXLoApQWMr9yaL2mxLisTrFG8q8EvhiV9",
  "key7": "42z1Vc2eUaBM4nQY3vFp2ft9nbr8zfkAdxhukK9hwAT79QFdJ8N5XoU7P5Y9vfLcmPb5sP5kFRa581CpWKUeCRwc",
  "key8": "2RNB8WYqHzFzJzWjJgjrHcsRjAESiaGPwprRrTW3xLTbPNbRVXRkJhFgkDG5svSUGEmXRybwbdqEeguo7h4RXNcC",
  "key9": "22G75crvX7FPB5HCwbFaXdTWqS3sa5TkXSRRVj2gMaL5gikRb4Ny4VXvwScgGDDqtdYtBWY9UfmNhhz8HKShQ3To",
  "key10": "554ErNw1QudrmQkCEp6ipgcfmpDqrGpp1KGuDDRx543pvgp8ckrJKWDqgQLrgVehrQbn967Aa6qwUg9pdfwECtQL",
  "key11": "4ub2qJq4jEoDH2Dz9G128Uz663YL6CtZscRqm8XaQuF3SWkmhrDcRptqU9X5oM4C7MkgEufRz4x4nxd84CvnzvBX",
  "key12": "2Q8T3LEj7zF7CfPumPujUo6Dch6WQUHQU5vUGe13Sft2uGudhnKArUkz4CSt7JxNovNgF4qQvJ4cqNYeSbwBJ2MZ",
  "key13": "3CoNjdCdedwK2tkopV2jxd7eAsAeVfaZC3trTLiWjfQJp1htd5MAmXS4UGJ1tvGX9nLZ6APSYu3eN9ZWGZPv6R4p",
  "key14": "47FR2MpX2MTGQqRHpjp1ribRiu8zJAXMmFmTuF9q2vSwTRFTmGYnx8BQA4LYbLEZXU8qt7UzWuyFmJjDDNPELEhD",
  "key15": "2pwEkmuReZg1uWkKYx3odGsie8L7SLHPA1J2VEYXYFdZXU2wtAsWgiy46fZ12bTUtabnuqTccJnndvdbujAynoYc",
  "key16": "3kwwM7gUaQUV3gF9AJzbQzpyNSKbVJw2murM4GiyBTDAFq6WwY9QWdh9D6n6c3FkXyWZGt4LZ6WuA9KTV5YWTpCR",
  "key17": "4zT16gqYBH3b6okUJgbbkPwQj8CoPqfjDV3ejgQb3KLXUcBpLzbcaXZH6eHBC7hAXopSfeqS1AqU6ULUFJcNV6We",
  "key18": "2XKycRGCdXR1n3h6Ssrvcz35bKRbFkBGBzK1Nui3R7zuKzAeSii8mooU2aBKW5kBrGuRVoTpXMMcUfvs4P7g1LUQ",
  "key19": "LQgAnGPMU4g3pMWTQvbqigMkYbqC32rsnEtecMzR3VaCw9yHK8sYNJTi5K7L6rszp8DHHecqDLPPTYJYdkLSM5G",
  "key20": "2gKtKmVjCx5wQQBAtTHwbckZjPzGwqpVLDhZCnwHnQ9fLxkeTWKdhDSfef4BvcZzU7xjXYkhBfieKt5RG49QVbEp",
  "key21": "2SYTbCcrUTmZZwXDg9p6BNjqPVviSAqRFwWGxyTza6hHZbz88j7h6PpQY3tPL3d7DDwinosuxwKgGdyxVSS7muZ2",
  "key22": "2dMRcfpkDjmGeGANSXkkmGannprTZtB96sGhP3CDwCuZCpKfHg26SFafMdNc3U9Set617DkMgFutrK6uYWF5Xyx6",
  "key23": "2B1BRwyPetbh9c6RSQYoESYsm2Je4nVNRbv8MfG7GttUkkkUeptEL9TUogBzwXS4W7Ro4ieyGWmkxF1cZTDYd2Aq",
  "key24": "4RsvmrwaVriX4tbCQNGNWfHcWwRB9THPKsvUxCfsSwesYwWtLAgxW743kZm6VsMdUfCnGnYHY1KW4QRdoR4GRpAs",
  "key25": "2mABC35ggCbtVgcKLf5sX9c1Vg9xcdDtFAGMBVR2fQdR8yyByzB5RNGrY8uNP3ZVo4X91efXxig3eqQaWLxz8fVB",
  "key26": "R6LnvvqST1qwrFPyDbChxeJ1pagNwDs1C64nSGnqMMPxAUYir54GbtG94cDSbT8QVRMu4h5kq5D6Us42cWAoqjx",
  "key27": "3H9hUeRJfmuap7SJyKjDgEAUd2HbLFAY5tZoHfEPExMTamzGb9GBZiPN6doRaavjJg6FrcHifmfce4nksoWci1N7",
  "key28": "3SyDoUcTCb1RyYLjpZywVWFbJwz265fWdwQEwC16ad8LcHLF3Fwu196WnqzP6svkg2ogSCYzegCDJKLjVko4zpET",
  "key29": "3qPHyDd3ftqkLWvRV7pHE8eV21L1jncW4dsHjZRtr6hhC2GkPmN69BPAtQj4bYZytK3ZQc3DthTmWyJy6M3RB5Z5",
  "key30": "33KuQn1bB4VSfg63jd6LgDhgNMLYQ49nXA3EDRJK8xC4L4Wbyg13XGeUSt2TAYvuiFmMzeVt1HKSpitxtRQyKZcr",
  "key31": "28jq378kaF3X538cUBfPCtm8t4jZfQ9uhF7zNxGvn696KtjC2ojnEpi8t9f9AHbPcH7AxUD94YRKsm3NC6mtYuDr",
  "key32": "3EsTa4RYYHrenxebVXkMJLxjmsmW67JqEhJhS1x8pHTWhHgJ22dSrra4tkXoh4D7w9wT36uQ8FBbHDjDmNZextKA",
  "key33": "5F1P5t3dPrHxVcQhEcmHHafL65QDwirD2KrUju4nXwZ5vqa8f6vSp1h5nZkzUSA6k5cMknPXxRBSkQqDm9jpZMGs",
  "key34": "2YdiYBUKrbqRfUBV7w5BstKPYhgKZh76XY66o23oBGtCWP2W9Pe6efacQ8Tai39LWF7irNhPxuYQ7GGDdur943Ho",
  "key35": "4WkJjXVnP8arVLwujfv624m3R6FnKXGGBNe6vXpfrbfz1Gq3p1pWvTn5NzozfTSK9WK5KoXJX7EqrSJkHo3wDZvL",
  "key36": "4HETm448seePcHAuoa7wmaEHwyuxskZ2FjmBEBXwMMQgNBeJQ4mJMRZCdUs3r9wzbgDTxHtwehz92jRkajPsdjj2",
  "key37": "25tVmY6LdYY4MdDZ8khx65t6fNkJLJERFuEtF9v2u6Rfv8GHjy9P8JQqJBJpUXQWGSWKkFRw71Styk7s3q1CPLwe",
  "key38": "5wYK413jd3PvQRQZxckxmqNfVHBABpEoKRyQWnvWRWazfcoZ2tEskqoErJrwv5KAyFhGZyAFCsSLj4vLfwQsiKdU",
  "key39": "3Q3Lksn8V29WnS1gqe9YHPHja5gw2rDMWhzmmPUkFjjHjPV5st9ijacW3fZMFdmiRk5HwXrxYBQLeKaAbt34XvW3",
  "key40": "5s9czeJkE6JAg3i5LWL7uwWkmD9hA9RLWoxvcD6NNeT7P22djZbM2fN5gjyKYHBQXS3ErSCj56SwHogj6kCXfRwN",
  "key41": "38w7rRTouQ89BMNC1oknqSS62R48FjkhdiGtvPeBUHSSmqt4wbNe83FXNFJ3yi4Qk6g3qpU8A5mAht67n6czR8Ly",
  "key42": "3SNh5mWa6A3YE176tqxZyBbG97iwoLZ4cwybcaNSX1pUhRGmAai3LbQw9vbYVYJkfvvPLaFy62TB9d8MRzqrDzbj",
  "key43": "4cQVqCjNpd5wtygj5d1acRq9eR9CkEgCQTaQFsYXkgDwFBUSRy5ZdRAWAoqpj7m5QwjJfhKNSZYznaiUGw4Si8WF",
  "key44": "4SgpLFg9KMgkyYEvgxz6sRYdt1fEpx1GTZjF1hAaAYEWWwAHsp1DfCh6tqPYJXzYJFK4bwfXGszNrcMuk1kWpgps"
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
