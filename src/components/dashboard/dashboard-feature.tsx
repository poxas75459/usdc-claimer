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
    "5MtbuXHCqCykHnfDE9XnktUcCrPeuEdDXdTiSve7eHvB8rJYGQszoWZoTF2tFGdyuR74GgE3Fp6rGqsNv1Wsn4eK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mRDsg3Fbwv3jMbsVF6zRbTqm6dZd3vK8ydbmbzrCZhMU3PnsEfAC4VtHFpDPzB7pWaJR5VCGKv5zmPbthg5ZxJR",
  "key1": "FHf5XbFtGjfjg1MaY9sGKoTTmP6eaMLRzT53jzEsnnrUJTe8agu5eLVCHSvvoBeVCaqB2gozrBRkp94b5hg126M",
  "key2": "3PEQKqVvJizU2Xbyv6sv7gkin72M85QXoEYrPk8d2JDfDggucWZzFH57B3YeLAEsZXE782syZegRUSs1x3SvkcnF",
  "key3": "2FYJLD4Evm5ma2kQxfdAgzfx8Dt8YH4WmkcRTiqDVAzPhJ9LriKDQ4PuT4hTtKbTZeb2nyxjruY97MTDzjyGn3QC",
  "key4": "39q2sDHyj8s34GYnRbFENE6z63DZXdJqjTwSmEVJsUXrL8ETWsX2gTHR456qbHxb56nteW2XMbWumMJurs4m92N1",
  "key5": "5oFUiYnyszdbxDUp6hDRXPeCpY4WYF6jNngFCS2n8yfCRGDJGL83Hoq1UxhtLHq3Vo6mQ8oUDhY8Eomwu3w4YwA6",
  "key6": "219pDACYYoZxKjQqLNaS7eCFmTy7XhrTG7yDdAjFu1symJfVs8oXSPcAug7Z6GHukHc8d2QKuXwouap3SMwjA5Nf",
  "key7": "5snSKYjN11NbkTfMrFZmYNUqX6iGhHtvr5s68kCa75SGznSxxZycRJz5U5rg6miyqmLxwKfGvYjEH93ocyKFzBYP",
  "key8": "4CC2U26Yt2Gb6AvdaWJjDP8r7jybCkKz8wW6W4tSTpExiHf19EyG2C5bz7gbYp9soAavhYN4PL9TzHReGsMPvi9V",
  "key9": "8JM7M2sNizAWu62HCAvWpoQcgrvt58ehL29WuANtG8yFwFEfh4MdkdGEniYRszHEFjPcgZmxVF6utEkcafWHf27",
  "key10": "SarVUHtnGzv45QEkajLL8UjPDzrxwCn1JyQYYaeqyqn2Xtbqttqruf8N1gyQVct2Ner4wDsPhaYCWjvCd7bcqSy",
  "key11": "2dWVPpWLWF7zpGF7sHRn2aYX3vADGDR2KGS7KJZExihQUwRHjqPoH6B3whsWCmnNtEDvKmGJqvmZChArEQa6W7FX",
  "key12": "5AREXjxjcSe72td5abdqjdfKLuTyMKVQ52V6SJKDQUUaTRvqU6cHPvnWMMLXRJNiZpSRgwKNYjZHyg3kdJXsK8bD",
  "key13": "4CGsqsVrBuxs1XR9xv4YY6fS8xCmCUBbHBUL3n1TM6jw5SWKP1FbUuVwmGmDUx85ris1jeKRqSc2RwgxQoeze6K4",
  "key14": "2aZRXbLfXULfugg2HyTJJV7wEfiFtQwoFn5KSmCBiUWziRphbEaLAKDztDX648UdgM38SUqVnrpau4FRgwAGpX5J",
  "key15": "Rg38Ufocqyr8CWARg6dy4WYyttak7XUDg7NH5aSqccACu3poGUtPi9EztvGsJbyCXVXFxhK4zyEcq4eSqDptjf9",
  "key16": "NreuW4DfqxzwqPHYSzbut8zxnc4qBxphjExBmHVQLKHDmxsLnoxXzPLYVQtUVVhaMbPdiFfSWgTdCAqJ3SFqKHa",
  "key17": "32fKDLiLHKd7w5btcLUGC8Ldz2zvKy3MfVbhMxviJD626CiEQoTQqrPQjiPiDVESx3WvBeM3cFaKgpmFqjaAtJ81",
  "key18": "2ppv2skdhpfJkJ2BM733Ds5TuTAttxFM7z9eSgdzwtefr91CUB4Q86V6dyLKpJhnQpbLaUHrBYQnJSAcPw8ecCp8",
  "key19": "wTAoHamAWvxaHRW7773T41w8G59AqxcsieyMWb4ShgLpNzFHEGmV8R4v56UT9jd55nmckw6R95Hx4BcKonJNTGS",
  "key20": "4U5nxmMnx5XKsQv9GPgUTqF5GoaV1KUoya6qDxnCpPuqeYighcAgEomo3QXKdEZyQLMLSupu5Hi1DmThBjR8cxVP",
  "key21": "2NZgcGhLXqJ96BjcpNXV7HQ7D37dE4R5quJocfiWdbJSuGuPWHUQ4tBcymid6WkgfFvzqJFuQZJu2MstNi8hPaiw",
  "key22": "5Z56mqaGtQ4ZFHJv9E73bedEhzb56mk9b93tPUzyH9gx5aeHLS1diz95zvPibDintHDkBjRXoTKQqSQ6PiaMAmj5",
  "key23": "3jPNvA92s5vLpNkdxjZpuxjzqsj6S3c8TfGgWZ7vzFoHkXPjri5dxRzWuwYPWLF5ygnqHn2s55ajuvrcX4UjhVDq",
  "key24": "21EEALFQWhPGJmobLgatGmFR6KwyDQqhwVCFwqTEPdJPB7kS8JZD4FMQ7n6fnY9CuPh44qKwQMHu2SpR9fGw22hL",
  "key25": "3MqFRYjSTgHzwKTjunU7kZy8AdyNFeuxieJT8hVgMuTVgH1aYYwhKsNFYDMCvkdrvD8bKLX8a6HpUZwPMhtT2CoF",
  "key26": "MaeL1Q5fLEtrJdE3i4vMh54y9vynvs5XBFzLHNPCBrozWG5GCsTTzC4SnkDuipPjMN691d5rS736yFtt9iXfBTE",
  "key27": "4E3dxY3T2jwtsZu7vDxZ6FvvijbDcXnuCgSgkxukQEXEg8rLQMXpbY8F7ZTts3HtqCVGqQUUR4xEARoeZzavoRtH",
  "key28": "4cmmGL6Lcea6NvX6zwiNQyqiycpeNbCAqKTDJ2GEDTHZStuEEdQ4jhkMqR6ygr5FZXXWjaqCvHBBFegkqjebYnsb",
  "key29": "4QWYziz6EpzAooCJkmvWZ2r3wk8bdMKCuMCMj9kaGYL7HbKfRysFRMc6qp3eyZ7Jbk7JVc5osgX4yiRcRrRND3ei",
  "key30": "4FeSi1Z2gfHC3Jj42sEGGYSot6fjuQePLFT26K4KUisoXHyn5Lv3JpknLf3EFBr9JpQ4C1EKiP9kJKJYhRh2ZaeC",
  "key31": "KPkkbrfpc3peqmXHP1yhEvFDgDKdpQ7oRKYQjDbU6Kh8WmVWJSaS8yoeVhTaS5Th964eHHzhaoFkSLQUYsRps9h",
  "key32": "1JwUZ99uWpPvipWdzZXr1b1QD59XZsUJXapz1HpNYG7RypoHsGZtqKogRi98oxRs72ratszKT4jE5N9i2CCRD61",
  "key33": "AGEi7jBsnBWQuGJ2fm3m7B1XDTSv7yQPoswRxCJdLWEo87ugK4yn2hFmgYyPYm3i1f5UK7iNXvq2k5hsPJ9cSgh",
  "key34": "4gwvPdXKDXviRTBiXCnabVwVXXR1Gv5LjJDDo911YAeJC2SYJq64mokueXTPEjrRVxsn8ue8aB1xfdnsimkg2v29",
  "key35": "2avGpvdLE54tTqMPTzRWrn5KgP549wRjrFyNGLLonZbCsVaykBqhRB97kvzopJNYTApDzTi9inpKvpRDqWoukQxD",
  "key36": "3t6f9PEfdv8vEn1MdDd7swNvH6Cu3NBE2gjcGXDYKBLPQaXUnnAXumzvrpsNzMrmhYkBESdJECC9bhXBFpoA3zci",
  "key37": "4C6KHvYHciFFAgAo5vG8egEyfmKdWGwTfag2ghDveGi9mHad5DstEruTBC4qLksDJSch5Z3BJTVQo9XnA5259oj4",
  "key38": "4mpeSpu7Mq4S57i65tLvvUEGTThmYZYPvRo4FdRwULMQqMSGkNWeFqXXjdmtynDSrbKer86H2JvzaQ4GR2ZCdKE3",
  "key39": "5Sgfu7Dz34vBxVSjyVg28Ba9k5nDd7i9J1mc5CvaGBhcStPfaTtv66zdhcq4R6DvmjFjD35HemsJvCDzMDoucAQD",
  "key40": "2PUsDpEd2g2Q91ZExPwpbcvR5H9GDiPaPkzKXZ2r8djvSiehbBdWe3dzn8W7HzKfyS18yeqX9TcHGPCK6Yo4BC7Y",
  "key41": "23jc7ncJvQTrn5XtFBkTDLXkVEog6F1pm1aZAyK2vHnDXKcX7FxfLK8S71p3V2PbqKCGWuy2unBnrr79RV61J4Rm",
  "key42": "5v8qWZEuYihRBAaZA2Fm3PoB6AL9oBuNUZkdMv9us2Jdk3ea8wbf26U2NEzaUZjBxByr6HH6Djk89nbG4KjoqtGU",
  "key43": "XETEFx42qoDryL1Sg79SD3VDwQanQ3wUuQeoNWJuyU3vmHoeaZ47gZ1Bt7fHWgB4MzCtXR1UfH1MUTrNnEXFVG2",
  "key44": "3Nye6HkUBRjnXyZTZfXXBsGq9wRi9o3nMQiXtajnwgppm7pT4BiCGkXtJZoBKV7BpwxpaNgSvQxkZYvGwWg2reRb",
  "key45": "4H1jD47niTJEQJK2QLeJUerV6V6Jo1khWVPSgyNH2ry15Cq9EcQsWfT95w8QTgSocYg3MnBvT79tQcQB4MuT7gg4",
  "key46": "2QqaC11Cc9Vuy3gsMTcjXfUUyqs9D7fry3cXMeq6t2Hq6hrAByRgjzXtw9UFWLGLSe2mDDzApnGC5CLnkAypcapT",
  "key47": "b3FNuEg4pfkw1KsAvqXnEbihRPU9U8ehP1dU6TL4wVKFfJ9TSzXFoAAv4BxC5AVpq6tcUSv5DvJSHH8MeKSn36B"
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
