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
    "3qtd2RFQuGivQqRtnbXoSBEifLGSFK9xMU2QpHYMkRaRXWxjsZAEyPycsv6tsuBjwemXGdaqfWwp1SFqcJvnrXm1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3crP2pakgjByrJcvc9LNxVBLWdjVfFSbb2phBwuCyqpa77rCeD6JHfEenphpRTKaSHz9f2rK4x1nz4474ftsdbNs",
  "key1": "2dYz8p8qrZXhdCrPwZyrxzqg1dDjHymXggjgBSPr786NPZTeRN1ZcP7uxvzhqnm8fX9bUxwZnV2ph31vDbMGbMSP",
  "key2": "3PXXCe5sUkeNXUhj4x1ZpukinqZwDgUYfojwGbXjwyAhCifdpdQdKxECZ55WWjEqFxLjTj2nkwi3X9ZfhxgXeEdi",
  "key3": "dRyLxcA93U1k6KrXmUchpfnwKBZU7i1xCS9HF1Yia1HQPhv3dXNvVBHDQiivJVVvDLz6uuEgTwjNdLghx8KuKSR",
  "key4": "eN8rF1Km9jd9eBU6WB17YGyybF7SNyV7AjT4T2MzSyxGuTWd9aXNXe1UZKcrqvCnDtg2ogneMmakrZWUmZdYzKj",
  "key5": "44ZNV3ZhuKF738QMQHU9HoucDPg4yhLG1QxopQeA46EjzXEQtvWgdBC3JiigsXppSo59ZFnexz9J81WRcRSE6EUh",
  "key6": "22ukj4Z4aBo8avuY7WdjhwiwWsuzwCe7BBHdPTWZm8Rj3t9ac1AJrLTw9D4Sg3swfyuXfmr7CZxKcqJ4L2REUnGm",
  "key7": "4Ybgax7ZWtfTfMjksXTTfYY2H4QeArM1KSVe8AGShCzYnz895R3fBtYBC8cxscoLUm2yemdcXmxrBDMnctVKMERp",
  "key8": "o1VFPqaQ3HPbb7Wug7ejQKEDTu2MW3oyCdABMT32saYemfmbzoKn3LRfPEqVgG2N4zGt9DZmMq7z11GNDGuEcV8",
  "key9": "5c7zbsavrURimHA431SXBEw2MYjGGmLomD5FFWGwCqppw6nMKyFKtxDkS66uMNAHWFWUh3mjPHww8WLi5KpAMNg3",
  "key10": "51o7Z7LCroevqAB6PjExYbNjJKcCij5qNptu8C5y73V7bnRcRAV6KavQtCjrK2DepvGs51sxnkfo7bchkaMa4f9F",
  "key11": "5mRbUafvxmK7cdxgu7ret6qmjUWvG7NGDrQ55SjV9dmLXj43XGWtFDcz6GC3qS7jFVtn8bgpgripaaSgxnN3iBCV",
  "key12": "KTiYezvKN1eE4UWwP9ZXHiJ4aitY3hjMeEZe5Qm1ipAFYUz6LkYZBDgaPUpHzQJ5cpSYdPGTGLTGrQ8rvVUsdtM",
  "key13": "pG48pcxzV1jPDgD1TiZLJFsXfg1S9rjLpysUJAtGHKeZS28f7qpwQM94446ksuMCv3QjVAQjq5o5wsK2F5kKgSP",
  "key14": "3ePK2bosYdJpb2ya5ghoVHxcamZMz8Ko14C6191qBmZxdMee2TA368mjKCrovZDLXtBBYNzMdpqSdtpQjyUXJzoE",
  "key15": "2bQtK86bBLC3yvShJEj7jw8t7WnoqkeDqRC6VVoaRiPUQQDhc1kgtHx6bUu2MPfJR9zeC8CeLAhCnMZwERPzutt7",
  "key16": "F16FBRYvMExUiJwoQAqXYTnANRts5iGCAXS4RqB91xVf45tHMNAqcCWZnkSFRMMKHuZXkNYNtA48ebRw4e3oXF9",
  "key17": "5tjJHoM1C5LFEZE2sRvdnM4QekT2N3BWC23RmPKVTYWx71uczfzv2iZJtLPtBAVqPZGbakgbvPatH2gaxHq4nShH",
  "key18": "5F1FwmkPfwRmWqRJPDLqSCKdByLdjX4oV2kBX8izfL5jDgGmuQ6on3w1FQgFXfd8xJMLGtk4yTCB3phhEzkfQmvT",
  "key19": "55DXJXkM1q9ZYuo5pxpSzK5PzUpZp6aFv3ZearNqY29rT76sjNAumG5T4a2cLQno1zDkYRLa7eCVc4cPUf2MLsjU",
  "key20": "5Gf7NtQPt4duukMjCL1d1M2hhMZfYSvcvbJBpo3D3CNScqL9H98XoDjqg91HtRRBCvpcpE5WjeM6Phcmta1x7esS",
  "key21": "3PBBkTheo86WRfouRtyfaNkjt5GkPDncN3H7NmdvsTqz5hK6wf9nKuZcqYJGJnvBBYXsJwcUbhMH1Uj7GB6AE4Yi",
  "key22": "WBQU4xw1NsfUjchWyaPjhrkaKpg4grL2d3nNMnJaPZ11M5dXhfkfoHCmejeT8Rh4JmqfCb6k1KXJ1T34563Xr7Z",
  "key23": "4BwHrP81bgvk7X4Znjb5JXUFM1YhXUuApT63mfsW1Sr9Mn3VtC3fJySf6RZEUHXtJKBuhr8XtHqhoft1HbxibQx5",
  "key24": "3z3Z6pWL9xqxUh9yGax8evcRZ6gMB2sRRLSKsEk3PcWRNCuGHJQ5Y4zTUxgo21VqFDLeqxs4Y5JzoCfMv4S5poQj",
  "key25": "5XUUAVdVT94gVhcdCf2AiAcXpPFoVTmSRNrs3WyPg5ydV6ZJRLqQwS83TdTUaxAsrW9PVJmUW3QSgzZ6Ge6UmMFe",
  "key26": "5T6Tbt4tzQSf7GFd9QmDmTw44tQLqmkafw4PxTdvBR27D6D8ASgjAqcSFy7HFPi75GARn8KsfHqRCZ6s7SpCmFy5",
  "key27": "66SMeyPg2epDUf2SEzsNfs9tXxnnTmnKfjztRngeZnHeBYJNf2ZE8w897evXPSDLszd6bcEL78eyQfwFWLz6FzVg",
  "key28": "4sLeeLtf8NienY5vNRsJb949Kq8nJyqMkShoH5wHRNPwADMGahSaFvtCbyQRLXqmHyriXvire6htJehNmUZG7StJ",
  "key29": "55WxfJn9HjKUr6jA6hh5KHYKqvkVpZ96unTqNYiLTXayNZ8MqzWr2d425iXRN1EYSWQg4R64KVqvByR6BbEDjuA3",
  "key30": "33JGxcFZDtW1H4Gai5FMFCJW5NypA8cyEy8j7vSEJeVwLVahtFZJw8uAeFEYDTgLekPmPLRhdX9m4R5Z9FXqHDSh",
  "key31": "3KGZ1WscEMLaMYoR7vBWcugq7WNnXjR6vGNRUcZh8Sijo6VHFQdFAL2YXCqZtbNRDanjtspSbNnvKywthgWYU67k",
  "key32": "45X8ebPdUgQTrvTPKMzWrMrjJnwiUyRBW4uPdfTMP294pzGdQXFZRRDnaru4NL6D5ocLF83ACt9h92SGzs7R2KXe",
  "key33": "377M3tFMqGn6WM1nkMxQjZRJeMubY3PRaojh3MHfTfgEi4upx6R7KsEKFFz3rJV92nphBGLprdtujYHGuEaMaUCt",
  "key34": "3mqTUxcSrp2zLbaJAbijvTFjrGUjufmPBPafozgD6vuRtdzTHbXdFbt6SGRzYof11K7qLYADrw6Jh68vJa628rH2",
  "key35": "3vGTxHdWw9Wd9AbN2U1EiVFJQCon2TP2wBLRTgP3p9NFpYT3rnbSRrBmt3KBBp6V7tmBKUHP54N4osPwUJc7NLfZ",
  "key36": "5VMUDpYkWkS2kJafaBHiSNRoZ9Ww8swVi9xP3GqsA5V6aJEWUeC8cRscftGiMWfLbGZNshxwBCTw3XG8GYhErzih",
  "key37": "38FYxkawA5BYtBLCeZHP85BUgakVA8W8hvs5UFDzkv3H5FLnAAAhzaRigBi7ZZwYpDBNVeXPmuJ2KpYrV14nEyhW",
  "key38": "2qZqZa4jmxrWyV6xBK1YqHTtiMTZqqutS1dPoHFGP8cVvz6g8BpWGtQAPEXEfAnasNiFRs5YNWpC2eH1KdfuujB8",
  "key39": "CozQk4qt22HCtbKtAv1ZvCVHAcXikKX7hZFYWM5EN8iz9EBtHGcxxpF8ZcCv4SxZdEcwbN8vVnn4qKqNJmNNK6a",
  "key40": "3BGoqrBorJ1qm5k8f76pHuB5G1MUg4m289szZazbvkUnaM8SsMHN7DQK2YYkxMgj2Sovzk7Pkmzmtkz6yyretDBB",
  "key41": "582wu5MTsyaBdHnyxDsHkw6H3UZteJLrzT6iNQ5VuA1LeVHTxuu7HgHc6kQXruuGSb4JCgaM8PBu9hitKGTBfwhu",
  "key42": "2ALkJdrvUZmUsjDWdX4orJFUwfB2Nqk96DQZaKg25Qev22VH1bo7K57p4okBeJatYZ997ubBkZmn2bytbkuKPySk",
  "key43": "5VGBPoLnWv8VTacYF1LbhaiUS1jptesvLA6jAaBw1FgjZCULetXVR8dmZ4wGeo7JNDqSuLzRugHMEvfz9S5cFbL8",
  "key44": "5sgesRoh6Bi5H2np7tA7aAzVWs4dtostP1x1kCskp6GtnzzAJ817qecJQXfLvZkUG33ZTAPMGyY5mF4pRik36cH3",
  "key45": "B7ajEZDMrKLPiFrpx7AW9ChYn6mdYjx2aAMJpi4pR3cpymTRdaAcnDzwZ9BZHFn3dnemHS6qBwYGYaEEmUXgdyH"
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
