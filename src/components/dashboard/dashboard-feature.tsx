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
    "T4YkUJ92gWANeJujYmHBGcBDYvaS9gSeVaqujsb2711HYGGUd2AYjYLQjNvW4LewyoMnYUtz4sbrgWrBprCAvWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ooh6e5JTMP7wPZxjqd269hLwGjzxJYxYor26oKcSco3hN7QDdmeGoePqwPRJPcnCVBrQtRrN2nowX2MDeKfT97z",
  "key1": "3RypYAjwvbdPabtwj6PZpjaWkWwtevNuAJCUNmBjnsc4MQuycqqd5p6tmNpVMZ7XFiepRkru9JYJFrCDLcCCiP6o",
  "key2": "4o6fAn8YetzyFxxDHwZGYfmDTfqivaNJ81Lsb3YG1d2Jchg4ah8c7n6FvgD2UpK3JEmwrSV62zebGWYHhDJwa9Qa",
  "key3": "2JfeDGFmabiFUoqDmeM7cv9BL3bcrgfmqgerqLR88D8oyf88tHsC1eunCYuuz6GUVj4whhiwJnpHPXduQ9atgMEp",
  "key4": "24teDNPKHkvzpHQgMxi7ikRtXY4PWr4j6nAini5xBbEVrbbsDMVRyrZoRSisohZf33V3AgWmdSZzMyF9qpH8ovh4",
  "key5": "4DLAkLM2EVAdZ22sD5NL5DBYfVqni1y2x65XEhysR1PQhzKwr9esgPNq9Gi2ia1dr5wZAsgiZModEtjEgdb6oHXZ",
  "key6": "2SAFYaCSDXpYitkJnmceijhqLiwo3fVjcAB8oFtYGBFa1GAYu9ysbofqUrTbEAfZifMDaPbDBffapQc5WTpp2VwM",
  "key7": "WpMVGWvV3eEecYqDCdkeY8stQH6vwM9V3TwEdQ2Muq4JSGh8nwdJnQRhBRzSt5brFmoKRnCQbdN8gj3AU5E2VHr",
  "key8": "2cDQsKRhS45oEZdX491tLhFuiaMdPf2MaP3rQXgcWWDEBiYWE3KxG9qoX5h2EKKenkhnqr62yhQodvvND5yhAa1c",
  "key9": "4RFn5Vk4Lwn7NRRVeptrgeZE8CK8vf7k26YGQAdrPCuQFYaMbvmApGty8Ey1RqHZf5ZgqFh3TYrFHYw1vNuofEbU",
  "key10": "2i9QnSMQJtRdfNMa6feVBhYmdWBHUUATrSehSRSFdDhxuXi8Q7g7ALSmTX26tx8EGuDKwfoVurFQ7UNxX6cacat7",
  "key11": "3ZCdM28fbm4h3oppwFzV1NqVtEaY8D5qMhaysQNae7rTuRAkAUEx92hWKHhY2Kng2meJp5NpXSdkJD7v9kWC9Kc4",
  "key12": "29o3Lo9DdJbv2opVYDzweuWnHNEHkyYcMsz2bnDZfXacLEiNciBF7u9XiFCi9mw3qrriJUes2VbuJW53p92XENVs",
  "key13": "3AAskw7Z2m2P9ZhnitMWsze8qV4cjPkztP354H117FnXnLHLh1uo2YvseNbQznoz7bo3P8wmtcL9KiyMjL5W49X7",
  "key14": "3GfYmuZme1QLRh149zvwG6mkdDyT7eUULKkVrDhPavCA6zrPzewVQ1sDNMwedG5ACpvpTU5esX5yub4zaYq7fcvq",
  "key15": "2tYztwU4bEQMfqFN9hn7uVCHvCUmtrxhuPWN2uXo5WuqPVAYv2HjQkLmRTmBznc7sqDuiioufLLi677Afzg1foAQ",
  "key16": "jtLpZ2WJRMQuEjgGMEajGhfKKpFd9C8N88sKhBeJbVTitPtJFJZhMKVBaLCBmgfanpXyLgsDHrTFc1SfZMhhRUi",
  "key17": "24zGNhS3FjKZCP2USHsJs8ZmNYxsstSNDstFgn18prZznxAiiWkA2ewszM13XKDhBKiEpvZfD5jHRPuA4LVe5Qzo",
  "key18": "5t6xMPs2vzZ64B3cFkcyNDF4nuHVDjLHxeq94rSJpcVYkBMFq9Huyhkp2JHF9tuTd56NLmMHXdQfiMSCguiBYg73",
  "key19": "2jThiKRpnLezJv48qYDSG7BpV1r4Z735jA2UfCTG4cnNDUWyWodipZgaqvUjE5mYmxXUgqs5Nvtu7WzkQtQHbYyR",
  "key20": "29sby8769aT2pP7nC1wGupwZ9ybmmWc2qgFxAonZvsrEQaRniw8mnhcgpzGCFPCB6v4m8PDkVGXUWbMMHWsT6hPN",
  "key21": "48YzbsFUzv4o4UnU8KXxRd15C3iJURwmeU3ZVNkNXi15Ky9we2VfZWWM53mevyXUsoXKWpu3ipEgdFZNnTA6nwts",
  "key22": "4GmaSVk41oewDUNYAbHgMPPVsh1dbacw6ZuMZqc3Wh7Lp74dfVXSeSKGhzCf6sS5GKJNkeHbnufkxGZgtBqShaVg",
  "key23": "5KjafDCRam5in8zhXQPVFomTYXWV8SeQXkXKioJY8V6ChTj1JdERxNo6twcFFryY3yySLenv2iDFk4n2Q6dfp2f3",
  "key24": "5BzHKGYkgFdBadXVeFikJg4geXCmnoviJQGJH5Ez1d6UVorBFQiupMdYckwYTc2ott9sUeFnJvjaLZJfG5bknt84",
  "key25": "2EmdH2Kp74PSTosktMGRD3wcdCyetgjRXnN33HbSoMWMXRwhACj2AFr9gNVcB71BjTFdbRCaRjdQznqUPq7XBUKu",
  "key26": "3MX3onbDadZk4sH2h6eX2Eybt6rs4GFQffcJqQvZUefjSK9DfzWecihxQqDD6t4we1meczraQUSuRPNftJhHhigo",
  "key27": "aNUjW9NafzsvgBQEg3jipyBRE2Dk5nj96A6z7UeFz7tbg5XDdKQvsUvNkUTubhzXX9H8TZdTERBEF57CQNadLCq"
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
