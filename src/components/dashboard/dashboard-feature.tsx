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
    "4JWA8rgFnWAUJhEY5xNJi8XMqkNRw1Wxkrshs7ndKoz4rapXsnEJpWASa6TzFmuBgnSpPS7TSuU7pH1JPJqWy7sV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aDvi6apshK4z2QuT9VNMhVdos9dcfZRihKPbXPM6MHApu7QjjmzyFaNZa2C3ERHMacQnZwXdXn5c6XYsiyy6bC6",
  "key1": "4JizwvY2yfcpGudd78Xxk2Cp82Th71fpCuqHW45wWfFcttoHQ7iXV2K2Bu6fGJVRbzmAvctDh86ZGUWT8YYeodrp",
  "key2": "UAZTQw2HX5xWxbiGGTdmkB3k5g7D7iU4HYfntRr7JDdGyamVJ5NFFcqE8DRWYDZSC1QeEw3s8iqyoivyWvt2nEF",
  "key3": "4RhqWAugE3Hqa84fQHtT3jS8toizruKWxjYD2sBcXhHVu2nQEE1GnWghMtqHHzYmwSaG97jRZ53DgaUo9847DrRY",
  "key4": "2BqPkzP8NkFLgfGvmcz5MNcMjwQvoaemU8m3DJBQjEBguwHcdSM3YCRbcv4fxnWHhtxrHPy1jqEExqoUFofnmbD6",
  "key5": "59gaDGQmNKdz2wZnDnbWWCwcTEiHoRbtX4YcsDZPqVvit3vSr6C6N8y5BNqe33J2cXrbVsvpuvcy3D1rEBGqQUui",
  "key6": "2UGSuA3u8qcDSpUTkuedU3zVbLnyfjhBo8YVEBVJtvp3bKq8aeD1fQ1qwfJDc2xtZ4RUUrwc8Kz8Yq4BzEswspkV",
  "key7": "F3L9cNn9XJ8DxQkuYzdYDb6tL8AfYxPVM2Uo997KjTWD9fq1DeJxjPrmxYtUi1s59gLTv8c6gprjJmnmmSFo2at",
  "key8": "3QQmo3bVgj6paN5FoarsGuRWgheeyVoaLHyrGjkaEV8VxP5uxAbYuKRd8Qn3nDWFbKqFvq7AoZsg7t8FNkivgRjh",
  "key9": "3sSfov47X2rBMKKARbnyDuURBJtJGa7LwtmozEj3VeVsyiNAU679RkAKLzadGsg6SEtZm4mpGkbZ2L3LSm6Yq3SL",
  "key10": "tDTS3SK6o18uqRF3DPPSeTXtL3iaGt92AP2er9sr1TE8sE5XaDraUgJamjydPv15NdcCqrM8uGEx3S3cmRvfQg4",
  "key11": "2pPbcfpTYStwWq62vmVwpTUJq8mmmSw6ssnxNA5mNr4nXHzpEJEdXC2J3zVqUfdGs8ML3UTpgFVjvwxJTqF56v98",
  "key12": "64pcdne1wVC7u49Br1AqK8xgDDLZXaXKY7z65BQ2Nzpu6BGqGDZHGot57JKLBWrm1ZyHfTu1A2c7RBNQJNnY8A3H",
  "key13": "2tu6RRAdCAbmwyMwwG8M8LHTNtp8MRou2Xh3fnLy1Vaewxa46XzxrpLCAAyv9QvxR5fURvDjyaeWRJjnHLPguiTb",
  "key14": "2Mcsv2kthdvfuHWozGtZC9g7CE9kiPeLPxSLueBMNFT3VMuUkR36f5LZKKTuHekvm6LUwAQpJXje3VqVhruz76FD",
  "key15": "3MftszVPCcRRre2mQNyZP92X1KB8Fw2iaganSLaAdg5WPTf6N6GUtbm3bKbo3gesh5sqNWEJW869aoXgcMZbJj2q",
  "key16": "2qBdv3FNcvp8njajYeuCMU4kcLXDhEakgRENCSA7eu9nVi7JvPLkuJFUi5FufcSTQaEXZusiUoZ25i7BBrhZP5zW",
  "key17": "4DtY7Me915MztXVeooCn9BhUVcPCrfM5QchjiM5THQCaNeH2ZyGDQrNMNS6aD1wnZ1DANo9TYXUVqmNdbXzJajju",
  "key18": "5rBx5ZXAGEZvrnUgs7o8dqPaMw9YPKhkp7npmiw9ucatB1ewaCnR14nJB5iDnGFApgJHHhC4RKHyxFg4aqffFdVC",
  "key19": "5293dhFRDzwSoxfZ3De5W9M1ZDQYtCEUei6GPvP5kgWjo2S6bWPXzjK669y1amXyEZDDetZjFRSWbThKRjK9cCub",
  "key20": "5kH8S7tQhP75kgXGTP9NsnpDMKNs3d4iNrBXV2zy9pU7cXADsbNG5TZT7wsGogTDao6WfTanNv1fND2JMjGX81PN",
  "key21": "5GtZZpB47Zkf2EiNU9SVafq1d4gj7vMCa69iwHDofz125chBCAUxe8EfVbCZHQgeZxmTenzMN7uV1vDasC5BNbFr",
  "key22": "4GegjwFaJ5tbpB6MeXCGtTMh3iZE3fDDoko5R31TSh2KZxxqvX9WHGpRAgNAQQ7EWpubShjz3mEdJcM3cyEARMS4",
  "key23": "4zqw79KoicCcncpa8taYGZZkgaLxAY8LMsLXDV7RXu1urHFowQVuFoZtpAhK8LPfoiPZuKN1KUagsxJBA5pXLgM3",
  "key24": "5cfDwVfdYnXZoNvqtRBpRkahrCn2qQKGtmvd6F2FgJVbsaYVdwNCFLu3s5R83AbiDBB3AM9BkSE97oYcjPHH7DwK",
  "key25": "24spAY4yhpSVyJRvaNnRjeaQXTbbL97TpHJ9vJsuofsCRM1rB5dT8Du3jmYmNxad4e5csXpiWpHz8tZsSzSwwrNi",
  "key26": "5yokMdz9ESTxURA5HjBN1fgj3vcrZCivLvCmv3foPAswMKh226wcAj6SWbhexcjpD34qydfiPtE9jgTYsyWngDv",
  "key27": "3CpT2m6QncbKJTaKgi8jGtM8t3qNyntumJ5WG5xxmGS62aghiKDGxnTS5CmkRsVu9h2SrgSeRna28o18dDExhHue",
  "key28": "3fN4BzaLY3p3iXx4cdweyR7KfWRYNWyRB3e5CL4ru6Au67mZ2tDDAGYzaqj1a6q3Aw3PzFbxLukp1rgM6ZBUgLce",
  "key29": "5AdSqZ5UQYUKSp5qc1VKAWYcSaDFnpddcavPrphoN2YDoSUxaqM5kfkrXtbvnsyfZSSDMiYiV56XsCKSaJjNoRh5",
  "key30": "3ALwxusMdXXaUfhCXCHb8qNP7tw9S6jaUQ4s62Xt5Vc7o2hZxSicrP7aLpiGiutE2o3uEup3JR6px3FxF12f3Qyr",
  "key31": "4tfjGSkmfKgBxhz67vCCJJ5XjUkFCDTFe6emSbwiCHF1ChS7wLKVqqd3hFbeR9x1ytwqgS2bJ5UKHG32kcRSc7vg",
  "key32": "3JjaT8AXbeVdU42MWcztCiCy4fRyWJr7P8EodYUUqwQL4CBSiMq4TSjoTQecqSZ27mHLYrckT16v6kZyn1TsDxAW",
  "key33": "4xBw4f2Lf929RJ58acPgnTPP5ich9DR67KnJULfPNJdqXsGqe4mPzw6BXQHyzbxiLYVwLvWNMz4RJ67ssLm1rG4Y",
  "key34": "2YK1is1F1XqrgFdZxbKea9smeU7NACVKjdSyDsudcBUdCLME5DFriZ6Uwi8yq55urSU2DNnqEaW4GBqeDR3zsWbm",
  "key35": "XWQ4VNK8tnC2Fuws5dB6MpZCUqStrm8VFMVcGZU9SaqGYLx6HZHfQD3kehm2wNPBhYXCEY9ur8XyaqVohqGgSx4",
  "key36": "4iifSTCTfMVxMX7EnJCypirUrnsZbxZWdxWHJEDA4fAL8cfiEoTkurwaTwBQHx6TekizdLa4pTopAtypMwjbt3a8",
  "key37": "2kxR2DrxUAy2Wm8KNiwJdbQjode9bQVE6vFv9CEiDzZvhMSeU9HEjdY1tYAd89W14x9zmbLEqukb2png89TTn8Hn",
  "key38": "55px6EHZUUgN8EGigtGba1UxgecPC3KqqM89H9pz2v9PrzMmxqfuh1SrnXT78f2sC9roJmPfiQxbu8C4y7ZtvzVU",
  "key39": "4vP4J4qMtVQXM8B1uuS5LGVv6sHYc2pQ7k9Mf1tUc1gHXCFo3sRUSAoGWhEjpia2TiYupysAsgMgVWf1AnPUcLiJ",
  "key40": "37DdSZA2cuWjMZD5E6VN82Jg2aGbd3aVCgWzk2SGwADLo3K8ke5xH7AAVxWJ9CmPZBSukYn2JGpUxdsPCqNf81in",
  "key41": "61XC422EaT8TieFMjpdZkqTU64TUuGmdUm4SdEuMfJgCM3UJytUryU6DSLmLBGojcvB8MbtDSAkvJrbVqexw1A4x",
  "key42": "5p4Wz8z5c5dW614NAsXGGdj8qCMUrkuoZnJ554ZYPUSgrCgcwL2T9WVYhkuGXfeY6j69cS1hZk8tKrFnkbEizas3"
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
