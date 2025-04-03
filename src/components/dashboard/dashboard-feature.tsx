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
    "2gLWAB8obad9NNENMKCZPAXicdygwVV9aMbJnDBzheAFe5W6oZoMjPNKVEUfRNYeYEwBrQTj7adCy5dAzQJfiZHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hhqqaUtzD9VmLfd7yYzoi2WjLhRbtVRMFnYQXADPvRfhvziU3mS6kQFY5y9QPjN8oH9FSz5S63io3P5K56Tw2Sp",
  "key1": "3foVgHTavrZT9VshV7pFEj9KJ86FKyFjME8Q4MNFAjVmoBj775PC3h5ozVvhxNfGJxNC671Fohtba7MjXwskdLcq",
  "key2": "7oBi1j73kjJTJABdce27wMAA2ge8dzvtRptGnwWv4A43brkMQHj6waETKSFH6ERckEv9WDP7U8rvupbqiBaqtKd",
  "key3": "2qMb1opsQoHbq8KkDwyhFgh9xqd5qdrgXWtUiR78S6L2EA1iasLdH3Be27WeMwTLp3iKvkbduzDNmfzeEDFEmyQV",
  "key4": "2orSYSUn4crt1YqhcueFuDZXMBvqCMcwSqZPn7x2mCqL9omT3Z8kF7mvgEkZ9eWKi3fYDc5Hb3bXegsJboyMC2cQ",
  "key5": "4v5f1mui2gHyZLcykYMUTT1nnfCrwF758Qv21RiehUaVqNpTQNK2es4pRQWL3uysYZKJKQa7NuvFENHw4cgZ4bte",
  "key6": "4CgenSjrcfSCcz4ymfgn5Eehe2ShBa1BUEo124B1yJu9tdswnrBUZeAo4c9srBHqZtZjP7CqyWtSBcnYmocSoMPM",
  "key7": "35fGs1j5A318Hj2HhhWiRvaNZ9dYpyjgCAMivpHYKdCA3wkZHeFyd2PKdkG8LBGp7hCiqoWtbxJNgWpaa4J5tr4P",
  "key8": "2SkPGSogvmAe2kwfc4SWbA7yCwFPDYNNftNpyTQwHTX2RiAqrNapvxKKCRLyxFHyAP23xe8kdqhtWeGeUynoK5Uw",
  "key9": "XS98PL5JMciTAhxhovvJEnZhCyJxwomjk73vq1wbF1cSNxZxnfeJiEdBVGMB6ViD3Etm2LWbBzWibg7HRCzZK4Z",
  "key10": "4WxJUoCjSi7pjtSU52avs5W8xesKgfBSCAckwBguTRJwTbYa43QaVh89656JYDHkpityY62C5nEEh4fRCFFhbKLB",
  "key11": "5hKxuM71i2wVzV4LMQ9L3biWM6ygYRu9CK9EiKFoyHecfNm6MSVYme5r1h3XZAZ3HbFh8g6gPCz67Um97RwjJQGt",
  "key12": "5EL3DFBDET3gynbFWxagkAwpPS38wHdsCYdVcrCU7u2yDnGDKCoYJ2JZBQpJsfJkFPMX4GY6yckFiacRoAH7Tb8E",
  "key13": "3khuaj4UBtcxV8XCdSdnJjARtuFaiv71NsPyyt6vWD548xQNuAh2L8CJB7E9izDWQQCrWLZyA4hEVAyZi6N8GSUN",
  "key14": "4aT2jYe2Bm57ffoxkWriVrFJF8S8URx94sYEEc2akzeQhfU5qYcxEYE7rAqtdHT6ixVeQcfnT63qt8HGWmoQmQug",
  "key15": "4FFNysixTkaMLCf3cNWvruQ7eEPCR38Rctzp7Vq1hqGkbjnDN4RxfxvMqg1en92du8Lif18q1ahAoPXhmoUfnXZT",
  "key16": "4PRViY7F5PwmAthFJzKbbh4qFBsJgF2rfYkisjNDP41bJc2WEtiKnGWwBoRNSj1WEhqhLMGLEAX1BDgJmitmqmV2",
  "key17": "iMmpfp8x74VU42pZ2P5ARs9XVSAgHSSbpxQBRBavcyr895gUsARo6rpejWce2VcGobYZXjU93cTfv3fMQ4rhmvE",
  "key18": "29EyYUx7R1GUmHBfHa93XyE7HtMTfgnCa7K6WhKiqMdZtok6aLcFYPtyajmQ8DFNtKEauTW56v2CALSasXEmR7bS",
  "key19": "LWodCj2aDCczKkVVfVAWZ9f5qk4XToBjBtv7k4ip3qk1QhfARa3zFXUU9tmbpZrNRPZPtM8i5B6x8qJ3W1bo9bq",
  "key20": "SareiQbXJA73n4SHfg3c8M6oaV4rWSezwQvFZ3zuxdAJGKWLQRahvx2RsmxZM2MnPHHrZsqgdNbLpFuyyxHW6Ra",
  "key21": "4QVRg3XZ38TvJR5Xm8MxJ7VKSpHoC7w5ZKezgvzwEzxpcau8wCVajseyQTzuCAJuNo4aA7R67cGhGbZmpT1c3cyS",
  "key22": "r8gfuvFX1TcR2uP58wMQfrUJU15d53tLAhXx1ZGkYKhyvSF5PEMRFxjDehQPnRS5wDZRM8U4GMzxUdsd3kqy6q9",
  "key23": "qA3QfTVXyy7J2V2bqviMXDKugsaVtzxpd84U8g8jnSC5wsLeMH3zN1nXs26srnA3LfV5moTc3tnC1sJmmYn4ta3",
  "key24": "4idzqTQUcQ31H9PdpJCBkkjM9fxmwK65sKgsH4FhkMaa4KchWMjgWkY6vDAM8h9H9RmaVGsj78U6kCZfLCMmH5q",
  "key25": "4k9wgwcRJKyVfnZxME3sq5mgevSwFzaWrAsawqBr9XF8CSBhFhdcYsa2x9NpD21Eq21cZWZyJsZ4Mi7XoH7aWfzP",
  "key26": "3P8aEt2T2wQvRGmC8p6rnAwbvU1tnbAqP5mUk5HUKyT67LGBagQJm3CQaj6ibCbE9o31xEkSueQqbEkdJkZ93xyL",
  "key27": "QnQ2ZnYHenWWGZcrGWHMR24ThURdfEo8p38y4nCRWxcPrf3Qu9viwxyT9Rq8zvGeCL9JZq4CTMjtmStfsn4P8ko",
  "key28": "2cbA4VxqHqXMpTAwFYaeUeyQfG1iEGxpf5RaE5xTqg9NbEtGCDzvgtwSgW6AZaDGHXszUioG6x9e1Jkt7YkaBhP5",
  "key29": "4pGyd8bsRAdkAjVDRfqQLF3JxtHR79GmhkCa2XXBPLzoWRJm5bK1L4VUy1UgbVBqD6VKD7Mar2P5pG8aMEELMKvp",
  "key30": "4zR9grftZ33aHj8qKukZ14fTuzUog6zRsLJU1oFedh8h7bZivkm6u5uc5NxjHnWHdJeuEZdegn1XUcUkfk4T5yqf",
  "key31": "2EnrHbHnMjrnwRCumgAJcajnYSYn2BS3nrqm2oNm7uzWwvmscqjLe16nxZXCSew4ac51dNJYwKhtN2sEnkhmPaM1",
  "key32": "2wMXiXefe8tmnayW3AS1tHioT1nCvSucvvNR9eaGK23WXjPCJrZzf9RezgUGqBvdT8op3DvtUCqws57imcpg2AbF",
  "key33": "384hqCEWurYsZ39FocFBPtaRcFtGj5x4ZnBuQfDicy3qMCQXjffQ1Gg2vm32pRt4jyjXj61VYKYd82CgSMFtjBKi",
  "key34": "5Gd4TJn5PgVQFA3dikzF8kbzDee29adWidUx1ifajCr1wuK3xzGc8VDhzjAkyF9HHcyN9JZvciWNFeQZMa6EABiH",
  "key35": "3X2boXtDqSsEEsAWmgoHSHhUDZinnth58koHzSCmV8bu525fvkV8amj3zRMB9WmaXW1Pn74VbQRLmvyHDckzfZAg",
  "key36": "2a6n2ykTR2cGmdNhnbGGXF3xG3nhSPBfe8sFGovF9GRXFaVZ1vjQMQaV98tmbe23VAnS8NhMNAkvss4hwnDx5aQM",
  "key37": "5KJKHJKcG9X9Bv68N2H6tGUiuk2AfGswkYRazszUCtJ81xgU58pvqydTHz6EnB2KCJbm2creYLp5uuv6THU8wQKd",
  "key38": "4VBuJt9YczhdAXud4aqYxwHiibsqvGNRYX1r4nV3nRc1mSbW74UUTS3psvvsR1XAZotDUAixtrbqSCKrC4i1i5WG",
  "key39": "jVsmkfqdpnfHvHoCngcGiaDNRNUqbGwtArNWh1UJDmCzGq4seosZq9DJbCFw6aR8q8kWj5FDn9NuWZrXWnEb7hG",
  "key40": "3zLbvMv7rSpsDqDzy1yg2SXy953kMJWToxAf6UciofpDFSU4rBnxCao1jcxxLTrVSMrNvVb8bTd2tJbEfjH5EXgr",
  "key41": "3D7Rea3BaSSGkMYw4PQ1JcYnjYaNKTzsudtveKffJ8A8Cre9UGChhjjLXdyxdkL5taEnh6WXot6APRosT6CjRJ2E",
  "key42": "5sGHudveaZCTNMiXCcd7LpX47uckVkK52KGRurB7E8Lyps3arG1Qb798Tsnf9yZmGn6TGY5Z9DUXXPPy2cG1MXts",
  "key43": "5TDaz4MUENbit9HGnKHBLNzKnauMbfwKPbGDZS4bBTMxYGNE8wrdkbcSyNiG5vvzFcEDNUYiB9LJUSjJ5wkR3mgR",
  "key44": "5vAPua5FP98t2ADyPCqgoyhQpRvBREjPGzbgiS7fHRvysEyFxcbVWiNZiNRmVMqSMdKrwzyrNgQqo7HS22yCPdLZ",
  "key45": "4Lg7bJyz5p5bLRr7pfLnUAF7n5QwMxuWvcuo8mxoRhTFpNUgZatbME6mvoiYTteBx4Cy5LiEa84wpKFymjhoQLsK",
  "key46": "ijrKydo6b3RTqN4tde8ijxyrJRM1hvWF8wVJqoUJvw9V97NTLRVFpSTUqcoA7T8ZsJxG2f3cJ5JZWX4yiEgaer8"
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
