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
    "39T9oDMKdq3yymahi74KcvLD94PFaqjeSjMkdh4sbinJrv32BjTqnidkobWCk9iDvnQACP2FaPngpDfT1471Kb3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ddNFLmGL9yLCSPJiRLsdj6WBodLW3nsu9yA8nvj55aMi6hnfV7C8e76jUQ2X9bKDTqvMxhXWEqkftVa45R5swDR",
  "key1": "3sSMZ9EfdCDCdfYdKZixBSuT11RJJT8FRag91JRYfJLujqBEJYgJxCCK7ifshc53WyNRoDuxGdcJj1XMDjxTcN1v",
  "key2": "4DqNmvb6Tf39RUH82VF9F7AzqmYP95oHuN28ab3ugBvXcUCwAcLm9iyYhmCN6cfmUN4iFJsz1fbUWZbWktd3pFNg",
  "key3": "4G4BYHDceycb1wKsJXJpP4GkVyyiMNTo5fEo1vbAgjbxuPwX1PhsuuhBYQDi8EvxAyLivd1gvDsFFVabFKT332V4",
  "key4": "58a1wcZWZP3BTejXYLjec4xwpQss1uonLa6y5wjTps9qZDkwVLzWWK8Qw23M47rfJmX7YytQoiKCGmDrQNTzvPYL",
  "key5": "5cHVHxQtwT44YpsMHuXEzYJywmPB1K8MNoGiZqoQrYkpTeUceUZMF4Lss3GTumxWurzfwfrdwnhFTB2f9joS6NuF",
  "key6": "61MACJrcNRD1EpTKNgDESSPJ5LihwKpnwW1XXSssJTmsL2zbQt7Mu852yjCieohoPvmMffizQ5tNCXNAU6eezsSn",
  "key7": "cDddngzPszNChvDhhxpA4FrsJKQgx22MV1aF6HKx1mxrrEiwxEmmCzvz2RSq4662cNnmuUTY9vRcv93s8RUS5sk",
  "key8": "5Yp9gEQgo8qSA6wqZpRZpFeV1mG3w8L1vkdzoBoRA98Gi4hR8XrRaRmQL5vCEYhdmP4zWrnvhe7VpGko9vyXN7wf",
  "key9": "2eMja58kX4R7xNtbzZbUrjMAwmuNBQLuTB4QEJs4xYF8pdFJE7KtfkMauP4cE8DNQ3J3GSdKmdzxbmCwKBWV9fLb",
  "key10": "3uT8ebzD1ybjHExQSWN2EyaRVFz3sPk6yhvKj72nSGMR94TffaYxbJ4StiSKQy1TYS7XnnfQQbdons3NYBmBYBFo",
  "key11": "tJdpTyNjeCvhAEgjSe5wcBYHfoQk6sEhGQX5rzsRR35HNpPSaVAtUNoGYSDK9f3R6Sd8P8r8ocXnSV8DsNV2asn",
  "key12": "32CSp1Rff4FrxcswmuVN6b9qEgeGpt2mDw5LrH13hKvci91qxEwS2maPz7zc1tjUrH2fm61ztiYLCtyouC4kujU8",
  "key13": "Z6Kf6yiRwGG4ZwDJNLv2YfmfUQerzDxpQUjqjsVDNhZV6DAdhmN9DQWPZ5zJ9KBMQsJDydHjFCJmyUEgQSnTiLC",
  "key14": "4KBZSgCeu5Yr4RCcfqV5cYeHZJWfkEDw11f8ajSfDPqZCdMFpVK1KhwKXhuDKcA8YapHtmYAygWRbWS1u85LxCgM",
  "key15": "4aRPNKiXgbUjxWVkhmo9UoKQxLkpSgpJjoUDcBMy7bAoSGZsbrVj8xxZECXRcShoTztFfYeABcwWvYjJYJjRsscB",
  "key16": "2cQ7GTiHvswmD6t2uF2BjgCpMeD8zq21JfhUnHKiXwiWmbCwEkyt3JjMV3gavFvac23gsSoi2FaWX7m1JQhGcr5L",
  "key17": "2M3tijSXZnQtkEJ5FByPEyY4FUbiB7Qsnp5DvLtGrWpbfZte33nX3PM812jJ4WozDULS5UFATuBSEDDfNB4oQDye",
  "key18": "vPciX3qtiXSENoQdibgN8npLo2xJ5kENaD4LTJqSq4VMsFnFtF4Hn67SWGKnqaAkYtb3cajTuo5MWbuPzLMEdNK",
  "key19": "3LYDD8dAcX9fjq358xpMq8t4y1u11QmL36kmcq3jw95r7BmX8QCom2EeehavN47kcCMVL9BmMDop63d5N8rp9vKo",
  "key20": "123n5oJd386m8SQm4WNdwwbCY2mStMuYCwZzwU7rrb5s5jgNaewLub1utYdePzqf13HzDcaphfavMkrqQNjyEP6A",
  "key21": "4qcobLj9NPZWw46ZVzhnh6cJavGugURcbcc8NCBwWwNvuRJbWGzgPU3eygw21NhJoyDJvu56pHZeAfTmmh1M9cVx",
  "key22": "5dxjrWzABWRedL7qgHZY1BkGDszYZAHc1M8Bnbv6Bs813ndwQZCXUZdBzHYaByRBzWFrdu87gJ9amXrmrX41tTjq",
  "key23": "4wnAD7H9bnyAZLK59rD6gdD5a1FtYkk2n6d2P5dBWxUY1NFWS7nPa3aSm5Uz9Q9t83R7h7f7ELqguTigrMpJoWQo",
  "key24": "5sqD6gG7Y3sxPkcjpXGYKRJgovj9AxsuFWzVhUq6WpXX6ub9rnikxc57Ur84vzmLtjgPfqbFvsVDg3uiu8wZW3eA",
  "key25": "rCG8kHKqt15rmuGvtXZSBoNBEARSz8oqjFLJMRQsEgRAke791PkfwqtJBNrQo8iQuRYXMgxahDWQXuH45WjsbHb",
  "key26": "2KVUDov2vhSSxaZz9Rd2B6jPWhrhU4o3CbHNKZTjnFSrKSZ7F2bJbkuLSdubCFdn94emY9ohjgHjnt2EyQFg8xJZ",
  "key27": "HXQ2oFBbpWvMEwFELbqTGGwaaxzoPRkYBaon7MEN4E2Uc3n1LRbdmpcZkigii9hfDagamyYXEXPG87RB7GzCh33",
  "key28": "481fuqBx7yvJdU1V6pb6c3RBePKtDYzJFFXYWKZ8iPEa3PjGJYfm7F8fBQNd2B5zVj1MdiFkAz7J3bPGXmEWGzvY",
  "key29": "44Ur6GekQLLAsTWVRnuGLcEt2fw78kVo4v7N7DpW31zz3nmSG6SQuUcYMENLcF5iPvU9C1izjEiuA3nUegGNKzsr",
  "key30": "5sT16K1RFXqDS1ki9E9UqxjPAc5Cch3Lu6MZ6A3PniNPXBDsXt1AmxJqkvkZK6qV6A6zgDBP6AS8d2Cjfuy7UzrS",
  "key31": "67cNdpg4kdRzFksjits8NSb31e8DjDYJvcXPqH55f54CQCp1Hcc79hPLLjCkUq5ivhk6xpH54zys6MLk9dCyuFe4",
  "key32": "jfjx49UVAt3k2boTmgfZcCMi4hjxAtVAg7f6muCygrKaJKPUFFReTtUpW5a3uGTYxvXw6Vbejwrp3vmAErg78nv",
  "key33": "5G2M8nbLzq6Hg8EQGYr5qynCmMCQuGF6JKtfquQrvoN2A1y1Z7AmCVmLvpFJXGfzeDuzV69tziVtqVWFJtiuUEX2",
  "key34": "3MRHhtXkbR9h4HW1oNpbtEi39D2UHkbPh4vWKBTnhbtX1GZAkkC5duNSvH1bCu9JCibH2iTJsXM4wa9SUxrMj6Vq",
  "key35": "5ySmKxHnmSnPk6ExgiCVWuhYU4jbRmumrQ6kBavu2ibgHVLyCHhyknDktizYd4AvHiXhqUkW7Ca7MNuphhd2p3d4",
  "key36": "Stch9ne6oTve7ReqGYQDauRaM1fEtMPcgypjmFmtT2g68jGMP6nfctDZWNTbaArLrLqLtVT7wfNpdjP3PmFdxRE",
  "key37": "4odbFk7fVmzFSGb6AA6t2tvHXehTC4ZAFeFcj4E8HZ9GFQhbKjVckFuRA3vJRX6d5KzPD2Cn8fAaBECCxy7WNHt2",
  "key38": "2bBnWJfrw3QZMn3Bkj4kFCXVCNzcUZ7uc6opGsMhnx1hzuBxpxnN8AMWsjMMRGDodYhhAQxGTYzXq21ia4CU6wPT",
  "key39": "6FWCJqADGua3xEGfuRxxe5Lrdpbm1kLXosBB7QBySrnt32KscySFyuSqJSB9sNQ2qYgPHY8apmt6PoMNASpYY7R",
  "key40": "2N4xTcBYXUzWY59u8rbKAZ3q3F9G9mo6o21LF67MQ9zEAacdVwaz7t9JrLcWtNsjwwaN4nnefkc8DDgwB8KRaXKh",
  "key41": "2xRTkmp9N7vLcJt7gZW387Nm3qwtj6BMaJcyeurqmsPX9cC9Ni2rpsoiHUf4QSGgVqKXzLnC2oUm3FL59yqCBQCB",
  "key42": "EZBz6GL3JHjzXFfWKdmJWtqLkzSJbRvo1ooFMTqqHsX8KeXZuS9uh6HifLHEcrgCsUq6ENacUd1LJwvRMGa7w8c",
  "key43": "5gaMCtVUPVWSpvFR7iUb8A1AguWqTDftSW6W3HEcue2Z7f1LyrF47iB7g4Fckg5CSW24d1sRCFjQQVAZU9oPTzNR",
  "key44": "3NmBBoWoF25AUiiaUq48CuURVKiYJycR9C8f7L5RQqnzzLe2seji6afdWxx65rtJZdBZ4nF2T3QaV6RTc1i5dbS8",
  "key45": "2iojw2B2uf9z4NGSXYjDQnGq87tzEc3f837Wp2KoXFWDTLDRjvj8vbNGtmhVQMno91rgidPXnK6cYc9B2qQ8i6Rt",
  "key46": "4nKyqAQEbgvsWHcyZBrZMWyq4jiMfrXE9ntyL4H5NrCq56LopBaWjQq9YCubWsqHiwcvQyKkFyejLRLa2VPRGGGN",
  "key47": "2wMWqrNmBbfXqoaxQkzscxqJ2jqXm66TTTjh9ND1RuCLvwCXdsa7VHPaY7tMvv4pRvvfVJMtw8WsRZq3hHdekTXZ",
  "key48": "5nDB79mTqaTGpfk57oT7rcpfBjuXe7diY2s1gJc2VvVeh9mgc1dd7uKFExuYJSVVFf5ta57Qk5QGNWMnV8xyn8FZ",
  "key49": "573Fi3CWkJApQZ5HETnfws1DjKZ4j239Ds47sDHyjuAQxruozqgq4GGGWEegzbeAP1MdCAtZevCvbph49Wo6seLE"
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
