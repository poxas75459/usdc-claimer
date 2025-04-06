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
    "3jxW1Vq57zDKM1kmpcVDsYEVu4K1tuwd37YKH2rfa6chRBGzd8BNXSp4QuGKsfTcNGSXaQYP1FVfjMP9fYxibdKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23n6yYDiyoeNE9sbjonnJnmRGxhc4Zx9nk3fMYYtMz3yaHMoQNoEeEZcUgwUEABpvcCCGF1Lhk6SmbcEtEioZyUJ",
  "key1": "ZnzFL5vwYtzMrYu5LAEuafz7iVj1rRomvvnyToPdFGtBF6r7pNcGoUU2VyBVFy638ojypPmjGWr86atV4Vfe6QY",
  "key2": "3ZftpgxFSn5dBqGAyo2TbJzhoFuWuaBBgoEDMmxZ8xe56No1Nxk7YD5dp9t2rcrPHkFeRNmMpYmKa4Xr2ctqAsqL",
  "key3": "3MUe7fSEP67wPxmWNrJv8g5Xq1vS6tVmU382X5TZnLA48tgmVpfSwaQwejVXCaFg1jBi5v2P7Jo2zQNAy6zJbLoS",
  "key4": "63jDDTbYyCKhYGrEP1WSiKkSwvq1R2FBVCFEzfUwLCW48DB7oMUZiUYr3Aon16DapffyJi8oWgJRiA8krWdMPdFU",
  "key5": "m8rsZCFJVKGHF7E1HW7e6u4NnSJ341WEnbrYvPqX9uje9Am2vf5gLZeo57umk57H7NuAC5BdaFG5FSEuWYBPRTR",
  "key6": "3kopCsr7PW97UNNZqSodBmfy6858SySN8CUeupuG6qDNQXCoUbssgQ6frz7C4rXJKtDADv4d4JEPJ4aVHD7hFo38",
  "key7": "R7aHLCQ49iRmxUJHuyymbhpzuMH2qbgVg6SX9E14adDYxhsNWf63MzWkchhc1MxD1u7bXG1pZPXE33gzGuk8YV1",
  "key8": "28KSJLm45id6VGN7q5WxumH1ueFKKeBiVWFK2wfyEc7cvhdhmKreNRXPjVxPg8Y34oojdjccF429gT9uz78xaECS",
  "key9": "2QSqHpQsosBHWK4TosbNA9nwj9ocxMowcm7ton8vWZbN3Xb53VzEEh9i2wFiTAqHBeykfNK5zT818PzmLwRsZGda",
  "key10": "V9PWD11RnMtvCQseDwURMQnZwxE4x5cuspw7S1EPXqAHdxvdr84JhYmaAirn8apujYaLdic6oFQPxa8QEF6XhRq",
  "key11": "2mQBZmCqwtgLVGtw6YUgJL1H9Q5TXnWzLRAwrqg68caRixxMKqmpb7Fuq6iRJQfgLCgVderJLieVfYvxP3Nr6VVs",
  "key12": "2uAcgUhewnPZwes9xdBBwBcSsbHroB63PNoGAA1RcWnHfnR8gRqUUJwkNuJsLUKRAJtgDXpSq1XJv7pCQ7k8oUHt",
  "key13": "2ejj8situP4R2gWBxXGyDpk4rE3Z3X2SgzAfk3XSF7oFhbRRXHAVPVPGyphJicdYB6rHvFAdCdhU48Ht3zSoJTAs",
  "key14": "41ZQMty9x1JAJZ12fHCzLXPH4LHKWcXwzN67WKyjLJdhY5GqKk8GhykZLVbhxeXCLgrjM9bGqY8Cro3aDiUpcMje",
  "key15": "3b18rkKDFr4m7SmFTpNbv8MhvizBEXYp1xercZQiRDHTNSb3vWLVe5SqdPdKqA3JsYjmNMmf1HYLXsLTnMeAKFyD",
  "key16": "3AgqXLUUNoh9dUAdbXfZz72UWfw9m7CChjwJKHu98jocj4UaTbQpJxWstUq9w6Hzmdu1JV7m2Nfhnm9mSuAxQf7C",
  "key17": "2gDyWF1VHvDpRo4KNDiTTSm13RHuh6qb8sbVMriXiLizdm8nTjs2dgEuMAUQewhqHKXnVwrjGYaEHA5vsG5vj3ZG",
  "key18": "2TCKuNaB2Hwyrp2vEUSonwg9VvDA7UNWucNV4uaCqNuySC5y4Qx9coNZstfCsQQHVigfBdWbqL6uGvPFaQyAAyQS",
  "key19": "3ZUpM6CkAd1DREhVbdKhJPsVkKaisSw2TdoWC6aoexRyEccxdk1wip2a86f9gYNXVBgq2rrdjJJHEdECrKPfQgvq",
  "key20": "ogTABVjQkWcDqwk11cB6zCUUkJ648MvYS7hwHSqJ4FMky3z3KVuoPBDeYfHpBztbXdyXiuPkrdDUNn6m6zAUNWL",
  "key21": "nZiSySmAxeqyqTfsFSpfQXgDcvCmijLSEFmyMkGt62jMXJthuDYm9UcXcjFhuG3piBjjJuQUWs4tVPbuw8jwXVq",
  "key22": "4auW5Bb1zSaME4N8GHRyYjRTbMtW2uLEGrxxJuUL65j7Du4e9F3ifiKHxcoEw3bjgofc7hZQp5dCDYNissF8c5BR",
  "key23": "3VWejvV59w89h5oVQDG1wEo87gmFs2LBM4cBMGfveMcmP81nY2NEGKN7sQTRLpKRamuZKpujKftbv9a3G3cMCYJJ",
  "key24": "PQ7yHG3jxYVXGf28qnHEe1EvgZH1wH3qwSi8v1hDu7TTY6yedXceWLpiseyRgBGE1TBKWuRf916paVo9s71wwgR",
  "key25": "35smsLUGoHhcTjaR8LPypk1si44MDctrd8ZhiiFqLWFwFnyTxBjzN8pvmVMkx2radkaa1GfGb2GNWmnKSxbjUfX1",
  "key26": "7j7CUqAsHcsLbsLigMCKrgLHTP5bbZGZA1cpLryAi7e52kLmFYEWrjMcoJLgfZF76U1GLAixW6vdEGN6u1Tp7tU",
  "key27": "3rwGHBwHQ91Ph6494dtmpB1x1C3RqwUwrZE8dnbnRwCQjnxqHjhMgdFh224agLCtVmFamox2uTP6SbDgF8E5MTYD",
  "key28": "4EWQ513mbgmSm7reiW6VDSpRLVseoBc46fnoo7QLifSjggiroar7UF85DgJ3zFtxX9vVvNhEBQhG2cV4vd5TUbNS",
  "key29": "51nbpcnUnVHedCe26DaQFFRoCvqqvw9eWUdW9XPghSJ3pKpEBF4ZErBmvCQGfuY93ZfKkowaHqTyA2LfCvo8kp8G",
  "key30": "3QoUxPZuc3ua1hAHeyado1Ys5EbEGoCbnXHwfo4hgtqnDHP1gMvPfHHmdtbnVMc3sXYfnFoscNkYHRDoaGhN3twF",
  "key31": "BzmDbnRipQBpjzrbr1xzumB461WhmxxU7JDZXsTTxvSrPNZA1uZZfTDRarBD98XMNq4nnosMLqEQ4wwgmLupAv6",
  "key32": "2CQSav4vmvtEFCN8qqoyzaoSMCpZpBt8DYy95Mnu72PLoGsdUYmumcfapSwi8JPiP521ahhuCGVo9uivJsyAKMz2",
  "key33": "9LJDS2PLmLACH8NfuXLTowXNUJALgzFw9JZKkjSUkjLg43QjtBc1namTMQZ4To6LncVCakgAd4PHaxmX3trEcys",
  "key34": "3mVDRScPQTFMhhTiLengYjpvjHGvDoNbHDWBEGu9dXyPgVkiBSED9vC7dT7gXc1aJXmY35Zhn2sbj1HYPcgaJApk",
  "key35": "23DuRxNksMXLJXcoYt19E3nRVVD11f3NnjsFPsxzCjWJtqkSsHr8qtGqBr7ebbBp5dd1qAAju7v83nqqAfjRZmDh",
  "key36": "5eie3mTMi4QvehPsMFYh6DRBKtQKfnACAepzCKJy44rfyzx9BSFn29ZZzwmicAb9vvVWUwi7MiQ2ukEH97aqQXoZ",
  "key37": "8tvNqhSL9LMJqNm369uYboAAiSqBpvT1zHvtCc62o3emYdMfpYm4628rgfnDDwafpRZLUe18LfinqC2vkah5A5t",
  "key38": "3UrnRbaGc4dqXgAcU1xTCtNKMfJnMvDJcPqn1FcB9zpJ2NNEu3WppLLNxG9Ag6XaMNiczoGNnqFPJiu3FDFNsgKY",
  "key39": "hr7TN9SDwvmTed8zD5sr24cparDV8eHypSszujQDpW9ooYrowz3tArPSrCMEDYrh7jwagV6T5PXYCWYQGtyGMd2",
  "key40": "4vZ1vkqyUHR8mwvunaAa6k6icQsQqxsG5QgejX1gitJcyqxTrvwtx5E4KaLdDFkeVZe8wV5Qt3FsezCCvizynCsg",
  "key41": "DgUWJ9QzWPYwQh7m1KiDF6QVDC2kvxWPyyg3kX6Trdj9bygF8hLSxLyJTr3McMUpZVkzoZenjqYBExmB8guV9wn",
  "key42": "3DqpRZR19obsqhFgvfGnha8wifgVqsZ9uMVQYxQvUQZvP3ySTt7yt9kSX9HjTrUd6sYBkbhN1LcXuH1dydiqhDxp",
  "key43": "32ZugBh1PFZN5he2M1uEYcv7d5AgD93FnLhf8ahmzLd4XuFAsr16d8QTohndL7TKp17FjbtVPkEXdfXT3bsXrsNE",
  "key44": "5A46gQH1GirgLcCw7V9JBJEW7iNZdAnXGeHD4taD2Bmi5mpM4XDvWv2F3pSf81xzq7byJ5SmneajWWFZoAGEtq4R",
  "key45": "43oYpaTG7Vq1Xj2UCV5mPL1ZUtMnv4EdDWmKnMDo51gxS1vrLMDVuRL2AUzBGWxVbhDPZt1LuB5CDtJRmkY7Ne1z"
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
