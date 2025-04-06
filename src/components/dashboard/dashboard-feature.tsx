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
    "5jqnwoqz2tUxvKLP8UBkiy4r1JuuhVksxutKvHEsHJwjyCcsB7fnyrscqQ5RMzcyfscwQSLJVq9aG44EYpMTCEv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xiF65QnASovyhuQr1nZ6snoMgibVqZWh3XQGfTjfpUohzbiRArm9WqaMr8ize7FNsykGDW4zdwLhQGy9Ytd3V14",
  "key1": "21YWHp62rePAKgY531SxTM2SpxxMSZ45mGJJC6b4yGLyM1y6WdLQJBhrwKzv5r4kdHwUecPffnGMXdzibpbEBAwu",
  "key2": "3pCYdAQsesLYnz7uiH4BhsRD8fJM4WfUxYo6kZyaNUd1sq44y3it2vCQ8wCM5mgtSuB5obx2cwB6tAJwqX8V8vDW",
  "key3": "533g16aJzLJHYsrwXXjKndG4u7Qp7C657haQDE2S9Cgk7Nri1yLGzpCia2obrLpV1F4GMdvy8Q4zoSdZ4cEtpuxd",
  "key4": "62FoMbvYksVb1yNRn8xcKdUSLiHm2YXMPVSXXZdauibj5UPZdhkW7tU5VeVxmsqcczbghXGfCSDaEEL9c9XrDe26",
  "key5": "5oC72ufXmZMXtGbFcrcUcU3pbRgemjyiXaHYXSUZzH2Ax3Qh3W5SjfBtpgaATVmnAQ7Ha966D3ho2uWok5EN7nGp",
  "key6": "5PSQ9HJg8GwdnA2Qv7o9gVdYHoJtqyizY9oBscF25GENKdj383RGYRptEttiWfK2q5BCyeF446ciVvgkeEs9maBS",
  "key7": "4hG8Jxk5cCFUQwHMKEUtiaeWcW5p1NnLDeyeKtCWka1KECbygvC56ePkZStF3ZJHwJM3wKYii5dkYtffgWjKztjg",
  "key8": "3rjjdGupeggYR1FEAPsMkeGceTyPWbzCBRh7umBaqbCnDV43aiHX35LjPyXq76Pm5wSKuXtauWhifQncphQt2dce",
  "key9": "3bsEMRrS4QkrGPgbTsLp46wb1jTEkjsWeztVN1atRcuXSaie2ga69QpXwueFzrhRvnR5ssLFwtSn7cnkmMf2N4ov",
  "key10": "63xs9pydKi8L1cjRa3ZPzYr7WQnEFTQVN4W8FALtrwz52e3HRPV6qeSZcKFhKmwcrKqCgCRoYdGFhbV7F4AyYpEV",
  "key11": "3NQ9a7AjtZTiWcLTzfShZ74WSy32SRBjdqUBCEU14oDePEz4rpjPqoeqL3tVG87nXjZedj3gUd2H6zf7o7Kb1fBf",
  "key12": "rhaYnLkjGJ88p9Q7TpXpoKMBfX4jTMT5CjELFgX3zmUjcNR4YsAiXufAkeSdDTjtyVWuQqZ3rDSj5Uh5z36ayFM",
  "key13": "2XsQsRcGmsjKS34f4GxGfdHooNMZypsbTz88iY2NN7VYEVnVkxY1x2JZMgVoCjw51dfxgYyK8zsrc2tV6x9V4deo",
  "key14": "3rb1JisgWdw1FXzy2oYf5gArYtyn5DSddXBRd3fwKNPJekvkUqJ8nY1mfiGoWgJjA5hBYC3CaAeunwZEXKW8cgb4",
  "key15": "2ehqrRHa6X4BpsfcTxuAKSSS4zcvHX6Z7YKLzmuRVnuvmQ9nkiVMsoKASH6Gd5uXfSxMZcTUxqmCDfLCsTxvBDcm",
  "key16": "63WceFwf1Bas5z49xsojRMrb6gSkuEaxEL2d13YJ5DR1vvuyxBknSrhPZFinaTm8f3GzpCcsp8iMNGFjH7cAPVXN",
  "key17": "29S7nggwXPQsCkTPymfnXba3T2aQdq9ihS1grRywxq2BW2QaT62u9KDTXjmySzULmjPXFFPiVZcfi6fm9hZRUdgr",
  "key18": "nR2pAVawASGZT8NQ4cP76FofwzhZa2Yh1Enduz6kbwC2puRbT8D1f6zbARvrPFVViwSW9MubSoeN3gJKTcz6qNE",
  "key19": "xTouioemT61fiwEQU5HsFUnffUg3bEN6DkGNF34HDNqXH5AGvFubxcNGykqN3T12LD3AftSkmfnQdibVGtMX76v",
  "key20": "3sUtm5SbWQzbyXatCgzDDprPmwZCL9qfna7PM9wfczqWTSUPSe1MYvSafG6L9M74StHCzfC1kviUNR5ZD7jnS6YH",
  "key21": "5Sj7Dw6pzrjHRwcRvRaSxQ47e94oW87dL8rwoB5NFNAay2QRQgPUjFNuMW9UAKBqE7bTBumUP3VbUusnubzWokT9",
  "key22": "4gXaWhAq9pCMBcmd5KqLkCFLhJCn3WTn8AKwk9cFvpk5hXW96MK7G4GDN6HRJHFaCSPCGLdwP1QWsVY6Ue4jmbgy",
  "key23": "5C1GSeATFBzVEQtMjdRYu2Aci22ogZ8XjrThdA22rCo4ak8YqxVPZJk37Z65wwUY5GnDYjexvSbtUq4dbg74qnx7",
  "key24": "5nhYBfp86q3ntB7kaQgJZh5YNQDsVxMFbFDLXjUya1DjXLDgSdJCJZ27mvoT3AG2s29rPfkLBrYoTcW7P7qGNQwA",
  "key25": "5DfvQNg3C1Am9WXtmXjQVdxGFgbPxSPv2bBcCRhArUB3yXWJNZucrSEbcLoAiN2vdK9JeCYmQw8hd181XQLBermi",
  "key26": "WP6t5s9JtgaiZ37HyyyyADekLLPXDjea1232u5SJD1E7JGBL32L3EiWVW53jHUymUNpUCTVhcVPYVynirRAyMRQ",
  "key27": "2kRjLUrnjrGk76dyg3rG9AdWhJCDo5YPUWQooa9Hid2c8t9L3TjfU4g892xGG5WMuQAZuT9GmNnCcn2hUr8tWR1X",
  "key28": "3NV2R3knGfZDfZqZW32eWoHHq1HAykUUgH8Vx4deeJZwg3ozfXeJfy8oLe74s6hctBYzv1gwJZfaxa7XFsPP1KF3",
  "key29": "4RwTS47N4jGoHrt7P2uxhjVNM2ZhL8NG6wRTaZTWLdYxRY5xUSXrwcFfzJckpthpVDqmyaSAHcyTm6o7opTSu4KL",
  "key30": "3DDpLHG29q7SaVFUoknXqr4VLViGvZHbhDE5CDUUVxhKjGoHdj1ZijQdF3pJidQNXNEGQ1mvnLX8ucXfNgFFTd9F",
  "key31": "58GGYHTjoAgmj4GzNYQky4Ru6m9NcjJs7RsF2Cq7JBMrJ4JKJJcHqpuJ9yzVFdDSysZhLoSaK3SsSe4tU9h2y4Wr",
  "key32": "nN2N1saQT4KTwiXpeEe3gbdTFDF1sMq48VGE5xQnYDbkpUFfkmkjip79432ndUZMN84155ZjFcnstH87pWPJqvu",
  "key33": "63umrHPc6XaVAUn8gnGKriyt3rDNmNSZL51xLopkvY69hkV7QEsXrGt1nwirodGEY9zecJ8Jhz4FmfZZW3iT4TXw",
  "key34": "WHmCNFSmcWaYbxLuxcNHbKQJ37sZceA8h82cdUjURiaXTfhGSiT2dQYE277BRhKw7puRBKaPVM4tXi6qTxgVJXn",
  "key35": "j7zx96CjcGTXyBrocCR8tc4YJXnXHTAMkEx2jo4furdk5JqJrCyo94zkcwV4t2yYF6zeGREBkepZdtGLJrsuw6z",
  "key36": "Bgsv5G4bMC6tgc4Ld3LL1qdHq8DG1mDT8C3Uq4bMseNxPe4p5hNmtZ7TvEmriSP3Ky2XaDxQd1yCYPmy811rJga",
  "key37": "3otDu2KZMjL66F7dUaZdyeGqCFhoyLJYYUdkUvmNWSJLF4DXm5Bic6BCzDjPe8bz7trbkY5RFNqRQwL2fNFSDakz",
  "key38": "6A2CX2f3kERvSZfvLvZjwUyEJeuQEgWCEFs7NhTiVQ4k83LTZm8uSKPM4FPdGnqmc3oBpAYoqozcPw7N5eQKcqB",
  "key39": "2HDPWpDiVXLX4Y1NCcUMTmxz6MDnaRakgA49PzpY3vpbG23n7yCZ747wpxoheHDKzJBhBCKWmHGfk3fy2GEr1VCp"
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
