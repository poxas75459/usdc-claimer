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
    "sNbz8UeqVQpAwciWzTJUAfwHPBuNRwHmLibSzDfQDDv4LwsGCDcXmf9p4Qo5Ar2iW1WXnYFzcrShDejYqJusSt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hi45x6XczccF7Dw4pnMACKAvH3bVLsaqAGRqopBZtsESiCchPzftk2EyNXCARUn6zn513T1XGMKpSgQHukNyggL",
  "key1": "3ShKLcyhbgW9DbQqQf2hT5FPkyppAuZ5BZaxbT6wnRepvsVhxdgstDxS8DD8iZY55ionpPAnncmSxv5YPbAKZXLV",
  "key2": "4aQA4288BZ5ZqYspiYoCR7jkDANnLGC1C9sjfdojT19Gxo95VPEASAJGPP4dYqDrxpaA6yoNeCscncyqVy49BPA6",
  "key3": "2kpSA5DWPEGeAizPr6fCswonVMWq2QrZhcgA9YyFaNgPFtBWoYHM8AaDQktAoddpvKdAj1MxkA7ovHs2pdqZEKdD",
  "key4": "5L6HVbXWCZbXTQkGXqKNQNhZ2MidepcH6MHwA2SyqkbHKjsu4GBPbjK3o7PeE7rqV1tfPchAb25kGcnbbWkiTGPf",
  "key5": "3psZbuqe457rZMNMMtrwiCCdQjbzaANzbEr4zm2ztSrfBeBAAKBoEE86wVau53487eSs8myM7cUXRahA7jLZLbkA",
  "key6": "2vxjs6ndoQPVh9WNwMGKkUGgP7vohWNVBSmmt4h2C4wrzSW7LmStTHbXDq3cNS7ZXUk6s1L3aBb5rX6SrgxGYcod",
  "key7": "MotbfUTeryuuEEhsimmxAVhBZ5GgrPzbNivsYpJcRKsnhs5zcAr68StSUCWKLbWZdfmDcAHvf6vnoBRgFCpN2Tv",
  "key8": "ZwXMryqqMS6RLJBtshTKTCDnyNwMf37KrsewrYW7LBcFqXmVmEAiFQfsZ4YYDsbdv4uY5WegmHrP8MgbG63HenG",
  "key9": "5KqsyEm95j7Wfc3MgRn6ZYC5VHz5vVsfGiffDTcg7WSjpFT6zm13vN7VAvoeGpQUWVf1WjjzWhkvPY2ZXzGKWbU4",
  "key10": "4ceb5UjnseG9T276BwGnXxacv4sZ38wQ5RfdzfL4YGjn38Tr6u8bg9zfgRknHAJKTK2oHQMLXTaZTBmZaLDuRTcd",
  "key11": "dgRFZ7MuKWPGcXLcavtPcx1NrJmRtW6fV3jpvBhZs4zBsnqh1Nh7o1H4r3rsBGyVPCyGBU2h97HUi343JQufSuC",
  "key12": "488ndeBPDrFAnHRzBNNesVQAkbwq8fxNRV6C7TUaVYoUTVQVzFNkxangJE5v94m4sJUB1LwMA6TFE485AuXAUii4",
  "key13": "25PQAuBKnXZeYBjLCyrbWGeJw4xBw5UfPAZB1cCwWsagJUmTPRDprbfxjWoWWarsPCh6M7Mo784qBDVYEb6hkWy7",
  "key14": "te3EXXgiEdgAQ3TCkf1vqCpkBbKCmTzViVT8pczDDPnmDZvksykYsng15xUu87gLCmkYnpzQmyYFoUMdWaj1Yat",
  "key15": "2PxyaHxmLiN8MptoBt7eASEDQHaiEg53buwK9bzMi88kQUdjG3ohUkBng4bB6mn9yP8QwpZJXC6KivNT6sZR2B2A",
  "key16": "4aT82Uhbsi5q8RZKKS4L8ZzNFcmqJJTpwSisUjcKggmZoChrBnV188pM4JwdbwtQPQazjGBKwLbnXFrYwJaLr2Nc",
  "key17": "4Y4h7EjNECqj1s2SbDaMV2GSDRhRbkf6k5EeVmYcdTXCMqVn1SBrtGvpdQRDXiRf4uA1nWY3hM9UtVXFRSi84qAL",
  "key18": "3qBrkn8DbJGWFbEY7EENffY2C783wzU83QYDBpytRes3duBjX49AzqqoAwqHWbmKms1mFS1ourbeQSNnoJfdMJt3",
  "key19": "4LmoaS9hzYhcLnrxnGr5iR7mhrvbk3CG6jNGJw2URV9oNXH33V3cLpM2xi7mv6PozLWnd8z49Voj7Nds1CSTP935",
  "key20": "21k8E8NxHbQTcLicJFvP9Dnq7EM83sJJTYCWT9fhJTwgscR7GuPvCTcMepDAaPg36nXgJvLotK15nBSKfpesMr3z",
  "key21": "53v998thNtQwTvshjEZp8aZojrsraSNF4ykUueRUF5Hj3KjfFs2drhohxVzhAjxPN1HoCGdZxgjKorjs1QdB3TLM",
  "key22": "4FK9JpACrgqRpJjoaFpjzVTQ8dxwHZW1Hj5TdJvU5eLayQ3NkBL49AjjfrUF6xZPwngM7KF7NyNRUhi7wTFWKPzk",
  "key23": "5cFWrqVGo474DxU5DJwLiR49jxWr9fUELrsHfycRXKZQXKwt2NrT6Zs3dssEgPNnMxjLcjXEjEQJs3kLyu73HzGp",
  "key24": "3KU8E3bZgFhN1HTGrKNe72TtrGvaorADQRMkzb5EHnmxZNoqdu1SnhqPWg2HKgTbDFkUazSe4bNQ1iGW8HiTvXxm",
  "key25": "29hGUwJqqyoBi6zw44AzpW9sskgdy1e7cxgLWeEpYgWVTMdvntEhmcGZegsBt8JhwNmKk1Mtr8he1XT3qp9pG76c",
  "key26": "63Dv96ikEvsxGmHxjAiTnGXuAPJKk8cbdAsGWWdgFRA8pe7AgBYJ6Y3VuKsj7N3va2UjsZtvoy7r5xX8hKUxYomb",
  "key27": "4EH68c61H75Q9doepVcDP9A7WSE7ymMWVcK9X4TcdkMFHFec26qbEU7rHAS388V64dHq6ZFFP9oTQUHooxzR1yV6",
  "key28": "5KtWv9ZjfYrBerFT9pVnvSAwvTnyir71BKvdA3ywxhPYKu2AgZxXnStNiyNma6bg6TVzTPw6y4TQSgihYPd2aak4",
  "key29": "29Scow6AXKPUnuD8Pix8ytV1wuoGNbPvGS4SzX2LrHDXtHuxnkeXfGyKPisLE2e4GUh67K7FgHJbvJ7XLXeY7GQz",
  "key30": "4uo8fnTSFtCJ9MjcUWavmCwLd1QUSJLAn7eL8Ag6d3Quy24rT6KcvwKi3KzLNFzkcsR4up8icAFY62PGdKkfCXNj",
  "key31": "2EZZg7SSKakyKsKjzgiJEMrbcifnHyWKynCb7mx3BegiGiizzTbmXqJ5vTdRjuRmP2umzQ8v9zA1bKrPZMTnxHyP",
  "key32": "5PJ5kaRf3JZMdCNRjVThZGHsGC7GPjYWk2WJo5mmZtYtdcxgbw4LQbVDzcWhhLvLGDMrHWeypYnA4MpCoxyKFePq",
  "key33": "59958XFxkfQ5WbfYgeAa62NNfWxFN8YA2xaq3S6azWHNcAjyXqRJKGuoo5YnVNY8cmWJbWhT7yKApGT9hHcCoKKz",
  "key34": "4Y5eaquVjtdrSu8Uf28aqMTykqbyEEhbzpKuLw5fiSzF4CrzqDgQQsmxsjbPUjiTQwcRhz72x4e1QSgVFefydZs8",
  "key35": "4PfepdxceEbpqGWjHyPg1yZinoL2sD3AcX5eNWikP7HfGhiEjZ2HVQxRuxTa2xRkn6Nkw8VZ1wVhSyouwnBML6BM",
  "key36": "4JFtZRczXUo48Zaof4kVoYzz1jDXJJUcfSinrgxJujHY1HESacJj946JzyVwpBgVPKVxikDFet8J6LwfhwcK7SAC",
  "key37": "EDnH9yFujZzu3BZ8J6BW3tA7AqtNBZto9tjasSTyY5oTPjgBykXePZgsehi3hyQecG7M3ikawLnGf9ZM4wYiH8K",
  "key38": "8AZNydua6yu5C4qeNVbwv8QtZyF8tVan1HUchj3291pEbJevpEM14gWcmibXET6L1pqk4YKfj63UvCUxRz1xf9P",
  "key39": "Fb6QJn4vHEhzV49ofEHWYhMH8tCnRYET6Frq6KTcmNHuLTbEjHRWg9YW44Ma3hwVehCZMXxgCHSViSo5wGUsQKa",
  "key40": "28RCSnKyS8bb6hj8zvMdHP5oX8pJ81U3RJp9V6YPdpisZuAfkST3h5y9hLPjhcmAVZshmmA8QufzSw2v5ozv2agC",
  "key41": "3UxqSiUBLmbwaYRDB5J7D3yYCWrn5mt8JDpQNA5bFcmjVo7o3UBa4XvbfMNJGAPeHKBaUHgfLVRNtE2uFwEYiMty"
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
