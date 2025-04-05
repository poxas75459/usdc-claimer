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
    "5KNUqePGGn68hYYfL2VvYGW95gXf39YDEabwwgPXJpTDkQUsjR9HFFcM3CJ45CjPg18hxCD3a5uQF9UcSKt8RDSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "333pWtvNavVaMaoyRGswMqaVttKsaLPhzDE5pVgCdZkvADjMd7TiYiKjjNbCumChkkBCEfZ2JdmxhB7Tk8RndfMk",
  "key1": "59Bv1xNt8e3s1AF5nZdmMWyhDcEFXctBLBh7iKz2LZtMbYXY1bXwf7gCojF1nzaLwY6mdzn5PQhtzMk49MW5Lku9",
  "key2": "4XUgm21uT82c8RQagSVQmCwM1h19atAz9ttU4J6b8UREFvBuqPgqMgAQNEGfW6bTUCkHKeupoAkKnXeAKDwBBf6A",
  "key3": "4rJoHSYRa6PpqDUoModfQaSpyrLrZ1U6kaBLt8GfZJCUZ7F4TELaNbTvoFEKDquGnNBdLYoNUr2wd93ECCRe8mJG",
  "key4": "37LrEanUktdo3KBjjakP7r6kSmuwurhtypzVrjA2mkVo3NFhb7KeHc5dZZNjwVymgAb9qjydaGp7F1pxNHAasYYm",
  "key5": "3SYF9U3u7sQ4qQYYPj7TCLXzGaNKcDzS83mNAUgRW48cSaWoks6KZ5nNvMPtBLy4jdVGHPWR9ARBTvkDTDTWa1bh",
  "key6": "2YVttDac2hQ6pEc9nLyjSMY4DWWse9AX7j8xmHN6oncAvKMPXZWsccsKQYrL5PkuAP7bMpL2NikcLn6VxBuFPF6W",
  "key7": "3Uidswhqt8Aih2jS3GW5JdXv9VJf1Z8dXfPcXXZqAKMrUsP2aFz6JJ5sKMYagLC1WRvSU8A1cGkH7GtwpJLXPaXA",
  "key8": "2YJrDsc5DM6dzHyjQMVzL1uWwzQV3xpyDCYS5cVLjsRE5sFGprEyW2kZMgRFEA4CSLWPYur6MV75t8U26Qskftbh",
  "key9": "4kRJq2rEwbPugpn62fF5KR5aS5VqQ91Hrt9CUZcyu1AgkeEsXpMPmFt5gMMe5ybv6hCKfPCuDtzYHiqTnDcpGRqg",
  "key10": "bmRLx1qWEMxPGtLDFX7mAZYoaEiEgucJsUHFLaKG1pgGJemiLGnsvYCJamgNXPHdiihCddHUQBtTgVF6ZQhpvYJ",
  "key11": "2o93QMLxTKbgoTdGihGcNjWQ89z344oGk7Ka6Uctu8Mv4AcypWwkmuSbnZ4PEyv9LxecEVzWNqGYuzfytT3HTJR",
  "key12": "47CABawzKRJBwpAuzoanyPKGYUoPHu4Jpn76xWL3czBwH9GdPUgfPusBFoRGRoGi3VLh3ATpkXvcKh77v5FTmyck",
  "key13": "5843jBUa6UGLUgAuEqPYXtMaPHh8Q8zKNGZUaEDFyQH32VqyVtMM25PQPDGjprLBDUk7jmN4Gmu5Y6iAigRkERDz",
  "key14": "2g82V2xXHzhqeuAgKbdVw6y4C2Sc8X86Zr8kvWmCrTAVrfv5trmJb7bNngibFxwhUj4WMs2nG4wPtYC8ZT11PhDT",
  "key15": "2oteUt9fXCFei77fAZpCtTuvzkNVM2JrDyCLi2kjARHCDgsvhnHAhGaKBJMNwz8AUefBDAUA7itf61AhiAtfKu4g",
  "key16": "F4MpDa4QHNKEaUkpv1oZQFc867wcRrDodtZ2HWweipoiyhcd4W951CAACXdhvZt5EvR4dfbd8Mc1xNjDxxX7Jsh",
  "key17": "4c6d8C71SM1kApPtmkZY3nfYFUQ81ehBSoVwmtb567azDpWsmm6nSMBpRArmJRddKtjimfiS1S9TGaPC28a1NVc2",
  "key18": "4CstTXQodMVMcyNGCYYpMUuYqsoqNyD8LNUUyNncbEc2oSX4oomaA3KQr54hrz2bVa6Hcc3Jk6GjFyeqqnxNQYs1",
  "key19": "43MXdyc2ChH3qvfjqjWCt6GcSHSBgWwrwbV3DLMqqk4c6eAzM7ZqK9mnMMU5dx3mG2B3Cf1PRL8HAjVdjx3yWgVu",
  "key20": "51aY8Zy1NZBrV9eUNoYtHVmMwXPcRZ7SUdMzAaCYiUB38b9WRPNboy5LoAXYtE1u3itMBibop5pD6F5eJpRswide",
  "key21": "2J6eThjnDBQom1BySj4E649xzGuoA1kjesWVinXZZmasLT3HeLDT8vpKeXawbvyUVcx6f5wpjzvDxiZk7adwLdxN",
  "key22": "4UMyi8whCNkVp6tCMs1mJn926Sb3i7s6ePnmHa5H8UbYbDFqyGBpNZev27bBY6ogcmCX6sfA7zuFJnBpUtcZJHuD",
  "key23": "4raQpMUrY65x9G67LfqNUEfFCcXUHUv5dAc5YDQ2aQ6oAY7BsQ4KhnVyPyzS3eW68YavxH6jAvpp8Xq4F6wz5AZn",
  "key24": "3i8C9kRff2fLANtb4gWfHrTPbwFmCYtqhQXbeD8qUyc31Nq7xqDCqFrPF5R4FThpRhy2NcK37kVu4dy6EBYBMSk2",
  "key25": "3b1oHjm49Fmm2ibSdaNkqFsFF65XpPinB6DnX5Hmk71pUEG1B9CnQV4ife9YhpNmtvLxThrSqFN1etrUWQFPP8ZQ",
  "key26": "2oztRthEFGG3x55Apn4YPcYzPEx7nr8vnKeMMen8uRct53gWNu2ab66TZnVrd1Lo9g29r7hxnziT1HxjpJQGYWpt",
  "key27": "4Zwnm4Byo5MUR2EBXDt3TCHT22kcmgKthNSvQBX7Hj7YmzeAG9NtjpG9ESBDdHpuPU8k8NsurLinEx2Msy99sb9i",
  "key28": "UTb9fKej1EL4fyuy8BWtnX44uyvUkEyLcq66tbvK9ZSbXoMjKoowG1hZYengqeGfGkSt5t8HMNsnDyzB88tbLAf",
  "key29": "4kAErPAhQPrMgat18Tx2D8GEpfTkKe3S5jtvG9AyRYBpoqPqMPY5pSgVFCRTFHbe9etgf2yUgouvqpHsrtoB8Vx8",
  "key30": "5xQb423F5Z7BcgFX3u2fGwmucwktjkRN1Yh6p1qCYgT2b8Bfcj6ac5fs3r6EEHL2J8kgJy6JQ9F3rRsqd3XZ1156",
  "key31": "vVsWPjzLyiC1ykBE2BiNWePbJR7zpv3jXXTSzpvsCcXMFt2PHeu7uN7gA4Gt1ka4st4KSNv8CXFu4QQog5X4gGC",
  "key32": "4aKPHXeGNCpTK7sj9ZehUEadfKWMqZhJUvDMSNvRAEjJ3xbwjHuGtfj55NTHkcheu6sDyk1DEpc92YCN1m3LLCuK",
  "key33": "53Bq1Gpi8xmSAcMwQUvetjNxmpahnAnmTgM2T2BFn5P5pqrvXwHbFi8JWaripHfdG1W3wVR8qVetaT1f4ShAq2Ui",
  "key34": "3CR22WQb65YpZCTXvvYky6xuJMdWqaEHWXEyaZZHnvDtBjEvo71CLmx4SWnNjpVTyxnsngSsDTJoTi3mBmc3nmC6",
  "key35": "4KKijYP7wzgsSo2uwwqFZxMeeqydUaapdjLUAgvMZbGzSWsBEsFDkA5YG43W7Gsh1av37TK485kkK5iMPsJ6dCEp",
  "key36": "21KLxfEMCsokZpK9F296Aev5vyTEmj4xr4r6p5WGjxSrUCJCSkPmacaKjkp5q7SrkaxY2Rg6WgZYuiEo1dddto1G",
  "key37": "3Xjtb4eMkB8t429fx7xREDfHtWXyiufK5PgnZcbJUiGVwxBrYUYi9jx3MJ2Muznv3pmfV4hbPGd7grS8yUwWR6Jc",
  "key38": "2Q3eS6rZtdAEoUPeSrqZhy5N3KzUbuCKDwnB2qB3XRJiis7xRmfDbm5DC2LCFNakMQnSaptPkVK5wU7hisB8rcv8",
  "key39": "2rUE5LDtJNaKRV1ZYuP3wovGVaoXQgwHcK18EuEnWU5tupk5An4VMzmNEAbE93dVs4RwKmXZMSseJzPPnLnxAvyA",
  "key40": "2pPRimcJXwakZYzCCdFeQAgzTXwnnsKHMXTpCs5ApTKdEawhzh88pk8wvUATjFJv8GYp4gTTcMnnZa8KJYbPDMey",
  "key41": "it5xZMd37viyDvGrrWUD2zyQxi7HE6bxgh2botkM8eqPwxrYKTMpeanLZGKeSkvUooZwDLGSaDo6Z9z1pMchm8U",
  "key42": "2SfzQu23QxMcWmB9hE4QQoV85wdY7PYxBYY4wNGgEYgZng9JYW2Nnx58mYJ42uCDhk1FCmhqzEk3WsXFAEyzBoHz",
  "key43": "2RUBkCRVCuRmMMy7DscmXcDSg2uvav9swj8kcVf9X9ovggTHF8YT5RUegLwTZgLY2uMoB5nxbAmcJBvnAqfvH5GN",
  "key44": "qUXzHQEzPdEVfUuWxbB9acCid83m3FjDXc4fQs3HDZHZstbNdHg4EbJTem4VJET691W96KLMhfePHK9YuBmfv5R"
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
