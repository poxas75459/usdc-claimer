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
    "26mK77Hn3Xh2sHJkiw8oZ1MNioDHuY9wUifCegMHoBCFcw36ZsKZBRUm2Q5CeZKo5gurydWDa5GwHcHnRqSRjETF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TCmVHE61SVf44ufrXeMbcq4kpxgrjVnqtojvd5YkGa7LesyMzmHukgSFGU2tReksVQmrY2o7YMBdBfV7rNmoxar",
  "key1": "xefXDKKwA83fhP9u75KTg5p2Ww4dXbA4BQppAFkRD74UMJJs2ngNm17LTWKzxEnvJ9A8AXketmwfRMcewBiMpZK",
  "key2": "2ZPovgJGaKghJ3RKZVLkCuj67A45kq8CMoAAYkTgyhid4tgZQ61b1nskTXF6P2LVKitDij4q6bwJGVbpm4mcQWAm",
  "key3": "GmemD8tWNwmZDw7bdVsyy72NsvETU6Vuj1ACusPAiJkhf586RxuhUQ9mJrbPtqBKjvcHfUHnemjPxhCubGygUmX",
  "key4": "53xCno6QhPkxu6X8scA4ija5SCxURveZevxbadCpFPJrLsmkEGhwn43URpUgRssPEqD3JQhWoBZtgdSvDwUxUjiP",
  "key5": "4gN7N8qMfF5ZimEk6F2tmzv13TsC5WC5njmHmcDHzmZgLJMYXvaU9tAzwE3c8FK4M7y8UVvvGj3bdJtUHKbMuZLg",
  "key6": "4JvAtaWg64A9cyBpHi6W9R9GuyYhXpWQBj8Kqad2iLgwwMWtfvtpUVQSfZ8BjWzegGEA2UDpPKXxhWxeKJmzcJjg",
  "key7": "3CHHgh1atRYNdzxH3QjUCWo2YcgsvjNjoncuTxsuwtrp3rSDGBCBDQysULeWHFkijvt9oEtQBq6bF9NLrLr8uvjR",
  "key8": "3GstT3gzSn9zuEApBcRmR4p6j4zkbdfEV8wAQKB5Dn5USddVLqfgd2MYBCi1rwxQWXwHhnq6jQvv5NDShjW2QStJ",
  "key9": "24wngrrWfYvWJMcFXYzzidAeDjoJzneb1xRS7YNxJr4hP2TbYsDdgAwzq26Wt1LQ7b4zg7frW3g9k9j58kASpRDx",
  "key10": "2j6zqzcWMgd7atutyw1QkNGaqZu6VTEDbMdCLjqRut3wvHDgeZZ6uup6GXowiA6K3QwaH2gUTZZfdzVzWuKXwr66",
  "key11": "H1wVpKjPuWb8MfJcDwbt8rhud3UyLC99FD3xBXHsir6Tn7wpBw9Hy74ZpHbx4FRazGaPx8J8M1NEf4xg9aS8FbR",
  "key12": "EG9cQBvxycsnNGic7Rsq65ZJsQo5SbvD2d1kNMUzN85aPqQ9BwYc1f5Vkkg7gjT95twsmkio4sZwUjWSFi4vFpi",
  "key13": "4norb4ZStsbafipcLcv6C6tdBwcfeJy4wPUYW1Qrfz1ywqiaHrJAePschAUZyaSuNtLEh2HmYC1mXYNBnzA3GLZK",
  "key14": "4btGxKdW2XdrnxmMwNnFNBAwKrgFCMEkkgyo4vZphLSWMGnoz1rN2KgSfmBYLcuqkjQzPQ1EAhdkde9ZrYEu6E8S",
  "key15": "2Egr2ok2G3NFPf8GHpBFgKdZVXhwiV1RH5yAhnjGq5xS3py7BeatzkZvbnmCdo6RjghzbttPEkYVGLaSddn3X5cB",
  "key16": "qcqcxmeHobP34hAxxTR4E6aDdLicVb2coz9sVoQRAfEgQhfJGqTAchVSGJsySWCmnckFN5i4XkAgAxKLQnK6RJk",
  "key17": "4j4fTKabdjn1msVw5aDx27cdvRVVKKbLVxb9fCNPYLEj287eQAiQ8Hq33q6KtzYvfjzrhAiwZ2uLhvABx4AJLgi7",
  "key18": "3jtLjJEUJoxU6QNM8fwoRZcs1ARm2hFxQN8W9GNCutizekT7gKMbcARJQ5EUYHu3WB271b4kvVrYCKcZKiLvsjDR",
  "key19": "5SGxVcGDgWgu7vTavqrexzfAQE5KKFmcRAw8jtLoKmA2TqMUviVUCFi5V1z1H1PS9GRtuUvMoESgzDNUcv53zcW5",
  "key20": "MqQvyqovkytmbntwnwL58rH7zG8oFyq3LHkWhxKGtqe8C2fMoXjWeyTamHeLsemw82wKww4TiknMtQtXwp5uTA7",
  "key21": "2Resci4Eyj9ufrxVCK6wChHZEGphrmAFFPchYoMvcfhc6hjcF2aV3oH7tEhYzkHwVmuEtC4nXLB9ppDDgFtMuYQf",
  "key22": "2qUuVVu7viGAvjMqj8DdDhaGa3fowDwfYdkBek9ETgmgqVfCSXq7cpabJ7hrPH5x8u7886AhYuZch3VtvTjnuDWK",
  "key23": "3yStGyKzLuoP1QvaQy39rVjDjDJ8uB4bUgVEeVUpzV4MuKf738PNwCNr7nC6sssoUabywUw6vTufwv4QMesEJn3B",
  "key24": "2eLCQgyUdVRHcq2CqGWZ2Z5HK4a9oukYsnARgWtjZDmUvgWnBnX8MXUSoK7AnUapDcqojxhta7pfxkoKvwCifZsB",
  "key25": "3ZjpGJu3BHZWt3FUSkeERoT3GqRXkB2oz8LVaNgs8DNySKZgXrUEczVghSb4sqvBP3rsWRcEpKvAU71wkwa86TRe",
  "key26": "sYxyrtasayNuFbhDqCUZRGRvPTWLzGRRuFHsHe6TURHJZ1Bj8DtosChBcUtw4w9697fgjH5mw3LPRY49xfVq66c"
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
