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
    "4d7Nivi8voWqevzZ8avEScgbjj7yZXniCpTjnZWnnD6jkFfPE5tETUaAevzUiLXYwvL7qq7icj16WrKH57ZGeBux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHyoQRkM4sVCRsGH9Bmy5mDVevJqWQh4Q9MAaEPPFcX7w6e3Bd8N9p9LMA9aMdwkhoVs7E9ULuHJ99LsfL4ZS26",
  "key1": "4zcpaBR9zMJsAWPCdZneoqzPXKeJcmVzoicqKzbhxkUGHwrAJ7EtqSeX1wRPb3vbEKqDmM1XQEU57h5sE3BWyudo",
  "key2": "3xnd8gA4GhmNhxkDJT66pc3aMB4Hn8RL2kGTJaxMvypSwtpVy7YdA3qQGSV37V517zb5JD2E6w6bdyijXs4g4zEo",
  "key3": "2NxMxtThc8JHLAJWnRmZ7vVGYYWNmuffLjC1hgjgiaRR1BrF5D1GFWsyrT9pAJe2nFsGkGH1KBei4TDgeqJjCveD",
  "key4": "2dPNVbDjJwSEaf8VPtSPUdjzYmeNKfQnv68LbDXq19p8AJJA5AdWaACsLauJ2TN7BgWhQu6ZfvUvuNK5sjA2pDsE",
  "key5": "4aNgva2Wt4xMkEzJnZt26AyrgjqTpi6vonY6aMVXdohFhR4pveK9cvzqLrnpsXQfHtMCBwVi2ejFsFkVmQUC1Ug3",
  "key6": "2xQAwzyJgeU85KduStqXjCDvcPYqz7n4kjmPvz9nRwRLCufBvrTPhFBN13mnpD9SgYmJA3WLmunF8Rggc25YeGSP",
  "key7": "46pgEFJR4xpanUuNDXTdBJPw3wVuXfF1dr1J4nHm9MATw3pmb49Pmrpp7LnSHE2G3SHThaYZzYK8nxEZft4riPKy",
  "key8": "4Y2xdxTDQunjbj4i4yfAMPtb4S45T4yQMwstF3JwMRBv6JQKomQc9f3rGUArxvtASHTsvp4FHqUCzKKes15njprf",
  "key9": "3UpN4RwSNbPoRbbazN6fpHzd27EX3knQkNxUq5mRfXLtLUypPaipamSQMJKw7RQNUCGujVrEYQ7CyiCMqsthAHLr",
  "key10": "2mKP3zHBbKFE6A7ZXUbc9yf1h45FqDCbwUEsHLEUthBnAibLmHccFPsK6yGKRgAdRABFMLH4qPJvkegq7j8srpGh",
  "key11": "25yjXJLR8aqbA7RD4dudX5jZL6Rj9nK4SE8yFqoV2LBsjuPMvvLCvJrQPJoAQkkEzZhhQr8FzRcA2cC37w4Te6M9",
  "key12": "vpiLvozMFYA7PWx6f2h6jB13eBmhEGucTRkFgWY4xQKSijo9WZEi4zsbnk3Mpt6RzHFgbUwmcSk2emuyuzi9TNn",
  "key13": "4iFkLQe56KRs8jdJj2Mbo3TzP5yLevwKAAyYF2YMCRoKJjrV83WEuXijGJ2ZJncDUhfYFKjLLjHX5m5J3Fokjgha",
  "key14": "5noEYmFLWrgmKEEsDxmzTc7PDv6fibs5impDuCmuptXETwb8RMCNVN8y2SXMAk1FNp7wDuRq7uudcnKmX5TVsnuL",
  "key15": "4exAoPrX7LUXGEufKcN8a2uGHR2unaQpPJksKpDtdUr4m3qUamoP19HiwAcbAEkU6FV53VJXmW6qMLLvxaskXA69",
  "key16": "4QiUMAt6h4z3P3jv72keoEQEEKcR87t4nSpN3mFz37Vfdq1WLQh55FHr9wuMsdnnr7rwV8qfJWhmmbML3azdx3uz",
  "key17": "38CtUaRDtxbfPGKc3vCEhQkd8AJfNzKmCNYJ86BSPKBvWbARkyor2vX5k6cN8Me2wRxbVuCX3PcWW1ZQFbLfGYdT",
  "key18": "2xmSLzwMgp29Ej7PhzBeNaJEAD7BNE65MxzQzVSrnB5MhjTKhQRDEBusSZCMridouZTwYGGurr6LFg5XWquttyY1",
  "key19": "5koeM16spubuenFdE52y6yXEpenZk3qZ6yG5Qi378ozaZvF6RYwJokLq968Nukh4BVBzuVnQYj45N7Azref5Ma9r",
  "key20": "3jTcYLKrb3NCrPuHHDa6v4T7qMmXju1tsHERDYwZq5gzFgrkHBcvtAWQHgNoEyUnU7AHqCMPsWK2YWP2iceXNvF2",
  "key21": "2Kq6678GyytKFWwnNoFczvEML1m7VviBf6yYqKgF3AhbXanrho7fWhxTqwqYDE7QSH6UkmMqrf3bbPoXZtV9PhgE",
  "key22": "2yZUMVYrNPq3oeVVxQ7CBLztf84oGCVdaoxveBA3jKaXwrmg3E8F2zB5xe1QrDhiPxm4MehRynrshpSTmmFuASTX",
  "key23": "3fPcujb4w6LG4RPf8spHjfzUqGpAR7PJmRs3LZHJmKiTLFnoZnt8RNexzakHnLvar6LxtnTZGYwctESEqF5x1p2E",
  "key24": "42Hn3DkrigHF34kvu3i4FiGzz56Qr3jag6etmhvURRdnQ9WMBWtwMQprcVZBRLWK6zjSdp6qjXiLLAVbzGTz1JgF",
  "key25": "5n36cAzem4RzNpsL48TWqtnFb1aH5Wt7aBqzQ9ELakyzioVZVCC169gPYzAjYieY7guSAPaEx7NdkSHRMYdDtRa",
  "key26": "pHPXqMp2TKreNefed9PRMdNVbspug7Y9k2aYWAfgodXLatQECTcSmkduS1RYH4cvKbwKRcYXUTwuzVjZTvUx8y9",
  "key27": "5cpM7TomkudiryNDkq6r1JCztBrAG5ysUSybY9ULcMRvyTdVfhsnHwXjC7NhrugUJARThKHp49mDahCp2KE6L82g",
  "key28": "3udeBdNojwX97eTVezrjQGJG6RproaDvNnnuxRadFmGgPnek92QdXZZZ5A2FzULG92z6DUUoWmjQ9QsrsUXvSWJT",
  "key29": "27FTNdWVXk1UrJWc2XYjpxYcFYwMBhVvBfEvBNJUVZea8npe5Xoygad8NZGRs4ajH3aCwGh44YJs57JYngrGv6HB",
  "key30": "4h1urRqmZoRzDZjKGctD8k1ACPd4X7ZVTzbka7rYN411LQXzC9uT36gYa63Zq3wmEbUMK3mK4dwFbDdEZWfGFWjV",
  "key31": "3mSQquYqmU1q5Pi4Kg4EGFxrvYfgDLP9UhFwD72vWwwPG2a4gdAQDaUMPeGsyoaxGQX7wno9uM9rnpQmjV79MrUX",
  "key32": "5kQVgnz3tCh4g7Cjcas1oNrkWaepi8RMpWLVZ71ziyP1LVV8hdt3vK5BKtiSUR3TsfY5NsFv2sACznat8ygyz21n",
  "key33": "5Jfhc3eywBYXyryaxRueQAPd8at8NB6ajSBoooCuxa1BT2aU8MjrkCtYoQxsTUVAE3pGECEdxtcNU3s2vX8NdGdg",
  "key34": "4obx7osJvQADAGb5PqDeCAkUCZCT5PV2UfJBTUUFnr2QXVtiz8Cia4guWvVxGWEyF9tyV1a7YMebEsSMZa9EfTsL",
  "key35": "8Mq9EhKEraeWhXXKQ33mpiXwn8pABX13kUBXA6h52g31S6zEPMtztFztLQcmTDvyft8eTdZMGzmx7DjARDFYsRV",
  "key36": "4AW3jwugBAWsa8LMj6bwapEVYfkiqioVjaDWRXbMGjRNX33XV1vPTTDWtpV8ZHULXxReWFGXeMYdWNnEZArU6ZZ1",
  "key37": "5FnhMUgBAiYV7W9zYJUVrSvw9CPKHahzzFnjQRy2mZnxqsXyU6HKdm4RmqKKv4qHkpa3qvVF6x3DfKH1KPffB8hC",
  "key38": "2yvt3bsHDgZfcpLnhEzbbv2ZqsKpYcdSKoNc4PXWmRHXiehK8JHnt8RiSLdUvWkMniMersZ2T2TJJHnaoJZoKYws",
  "key39": "4QLLPHgZLoffoTStSQX6JKoXjr5igZMsqY28LpXMEu3XcfRJk2FjakkKyjAXwxPxF5AnQ8mEuh5MCmB3DWRCVJAq",
  "key40": "vT34DXPbn3LttKfZM4FUPJrf8k7LPpo6fAzPv42ETrrSVK71jHrpeFUjhJYkMTBi49a72Z1qsrknchhMXrifxMW"
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
