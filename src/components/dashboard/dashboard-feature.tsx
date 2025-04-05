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
    "56qAuSVsZJ7A7HvUNjQFPnfZHCuBqEQHp5M3vJDVvsnedoU4WkHtmWHQFsAC1pn96ftiyizSySG2mTAusEx7AXw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o5TicR93BSzm1ruWEJPyqLpC3BYqq1dXsTSPnahBfCawP6QiVAMBp8JaN4bH63xC32eUKhyQXGAtPcNo2nn28zC",
  "key1": "uonmCUoCabbSTZGy3DmZ97qUfDDxnxoDGF4nimtsvXF7NXKXu1fnjcyQ8c8ANo8RTfibsTtjii5Vmt84TnAvC25",
  "key2": "WYfqumun8Nt1EwfHphqFoLeKe8kdYpiSWdtgLsYT9FroMMAVRhDgEtdWw63H9UjDGxUpgzeAF1yVNJU9ZfJSh6b",
  "key3": "3eQZSCTkZSmP862wu2xJk4X7L5uCPZodDQEmJRN94hpC6E7pgpjQaoqbWs1NS4RwRZZ2eohDMa2xqnWioDvzQgHn",
  "key4": "39VFuZ3Py4nDmRg4hAyVKSUJutBr4dGrazyVSm8ZUDsTeeKivjerCRRmE4fypwooywniQpVNnngSuAYrHZ6fszkX",
  "key5": "2TVhaUJLtEsmLPSuG9MgjpDzXgJvwMTAPVpHVfbCS7GV2xTyaKyRDMLccmQGWYEti2nMY1psA6izrtqajRxq1tQy",
  "key6": "4WWuUe7MYXqM9QAAb3S4A57oeXZU9n7vrdFQVRgFQs1uBQczSciytUjTbtuKXr2PDXy5D8mPRYbxFgo7rBeLUdLz",
  "key7": "2tR1JETSDfwgqWDMimBrcTzx8Nb6sBBrhWJ2TA41yTqerPomhCkaJpJvi1dajURPHZprQswit4odRcAJdr8W133x",
  "key8": "33UEdbYLqUtzXMWtAV4EhckHT4TAC1io5izTYJTsTZPabjYxh1jDtf4hxMAdPo7xooTgCFPPMrHREixda7ABUBgf",
  "key9": "3BjTkenCS5sbyadXfcDxK1DW2vpDtbWrMGdCpH2pZ4jo9Y5aCyU5y18nf8kL1cWYh591x4L5mXGsvDf65ZWa9Cgc",
  "key10": "8Rm3tcXmqKW42EoFVj3eLMJiEonjDAqomQUFYEJjWSou1LAbTDGbcwL6crfJh2GL2xJweZ1gTxChiJuxCvE82a2",
  "key11": "5ou7TseXP1Dm2iwiw4ctwdNoNKR3mUYRaGjiRTAqvwTVbpwzC9qJT9KYzyPWAwzY8SMNnJtvALVqh8EbUVqZNLiC",
  "key12": "445UoDSQcmhG2JdVc2be41wPPBTMM4oAqNqXX8tBos4d3HXnwopxxR7qQdPPgXwRjqWU7FV6kJRmq6ouW7hVuvw6",
  "key13": "5ycyn6FnPCsjbKNEigkRKzFHv6exgLzugDqM1dVTyCPuHLuANSmQAUkQxHguih8TsP4UiP5GRM4mYEjK9Uzwao8u",
  "key14": "49KLf13DjnUnNn17kTYEJpBAb5JhXLGw5JgN6jLY5SBhaNiGyw4m5N4P4JBjiwVafGvMPLSUhufSuEimG5u83RJb",
  "key15": "3ZeZF14ZbrTBdJs8zLs4aAy72Uf8rtjMQRCE2iCUsMCEf79QMFHSwK4aq46o3L9tLNkS8bPibbVC7hCZjzL3dCCV",
  "key16": "3uYs44KwXrRv97qbBev8GzobiqsP7DzhNKfJxgu66SSe11MdHPicKPRRGT6KuthB95x1DWjFe9S7RsfRJJqvTU66",
  "key17": "33NSBUHUWy8dcAewHveaMQQCNWdtqRjLMdu3iFTZjWPejgaD1LGQeUYaKRJHAV8fv1MC9xhq4AZGC1ULmDzCucyw",
  "key18": "31cTc6vgp1FLMnyLhjNENAReRi7zLpFQ179wzSnKFSH2eYjbXVeSnanxQ5z5AYymXNzuUpB8feEC7xXkYQz7sJg7",
  "key19": "cTSD7Jztr3o9AiT5xxT7q9F47tRzPCoSeNexen1sgU5EmuHQsMxkxqW6PThBVSz88mwWqHy5cArXUZeGFUAQu28",
  "key20": "2VjSSBgFFV18RvkyQsxBcEvUzzCXyRMDM7BLcKDC7pgrMkJiqFpCiTk6pLNSSFfUdmfvLDKe4EKaFTSV3ab1VLRh",
  "key21": "51Mj5Snk3Y5Lt4swLVr4qbXNnAtMHroWFLGvpkkdJ7eeNcJo8QuRwm6euXrhyDrcjsihmSR74Ac4cHA754MbRiX9",
  "key22": "4XU5Qb2C8vNjEJ5mmS2y4hd6so3MivxgkTc7YEnLFSZUzAP7jWVP8GCu3WFff8LFVAAgotfs1gQ1nsbdjgx6R6Nw",
  "key23": "wdssY1dyukLZQgDwn1VVTPnHxT2cd19DazivXz71iaUnS5BQEpc5Vx5W3weMe1fDaALW7gMU2M5VjpVF6MGc7yh",
  "key24": "4Sny7jyga9bpcf9faCQmWSUY6qmbo2usFzAR7cUS1KyXXdWUZhwD9ooHgBUyAakjfubsj62HAxVSNyK2sozifTsJ",
  "key25": "5soq2VcjNAK3nXBrmBkQ3gDTJyPugdHC8s4hch1ZLqZgusJNW2Msk9wdYSnmUhQq3iTMtfjYChj2Rs4HPmCsB4Wf",
  "key26": "5JLf9rGgrHkEno3dwTDtakRV29mUpNk7VY2g1aqYU4QVzVEscGrb5qFBpgj3ZUZgsXsaLAbeKUAFCdZXejdm8odw",
  "key27": "2AUmvSdzufHEi4q9ikpNTWPzFCsm8HoFkh7i3ARgeCR1SmGZtJxp4peRQzHXyhTpFq7PNeRqzFJ4AZYXvBmoVpwo",
  "key28": "5icGgM6aDanAZUofuJib1it2nswrvB4hZbBEP9arRSALkGTJ72Kxs8sGBq2vVL4poHRSLwS8Bw7WNCHJbzfrDji8",
  "key29": "2nf6UQLfD4dmNLPUpDyYAxAnEMh87utPrpc14DJWVKMGg1GnmTJpaxMEDvtDDgn2uUQpk4a2oyUVmv2EfWTJEcw4",
  "key30": "5XKkemkNNtVERUjFarqSyNn6hYAtaESsXC2519vaADXhdjyfsbWBuMg7SCp8oRyqVLZdyPs1ABFje1Z27NAJEUYt",
  "key31": "4g5BgnHAnibcEFA8sGC5ZE3mGx6d37ccvNu3nrh5vp8xcvCbZ755S6Rdj1KTqr74AaB4T4Eq9EsHFuAC3hGBQvGY",
  "key32": "2iooyEb23A2brEBLaoiBLNtSzRQi5JhXLa4nZLJcNApap6uGMdCFDps3mmFF5pmZsvybcQTBmJxz9gWcZDWJP99A"
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
