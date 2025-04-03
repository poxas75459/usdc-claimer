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
    "5ZYHbNUM7wY3s6tW9xrgKdUNuRKGr8F7MViZZHQL3V8smw6hHbtjeYAJtCVvX7xj99bQCoZossSFkBPrWa9fdyud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EDR9FmuReJ3S8MfMPRYYnQjKAbtVXQGSsUmpPBsJjx3VibbZ2YcVgHGc9GviRqqtaRB1hNmGdgaLKXubALK6J7u",
  "key1": "2SzNZ5H5FGxWMVDrxrL4joscuL66Bfd6MhsKEoSu4dte7DHMbLXbvAG5Na8c44JD9WNaX4s8Wv7CvnPxkNxJVhUH",
  "key2": "29TsBaVtGVJatKyVHBxKGRzJafcpFFeYNW9q6P6rYpiyQmGiQCmqh3i4eqTvULfW2r3h4EmyAn76DdUSkPqMuVSU",
  "key3": "3zsmpXjCwhaxs1AYf37MSsCTBVaqv4vyUG8e84vg573AXB2PUAjFknN8wx6MBJHbkpXjfuWBts3hv8CBMp8wQmq3",
  "key4": "519RjfLVf2UEzXy8Ko4QhRPNaKNFQxK6cWrdAfieGSijzn7dM7772iiYYzotXujWfJ4eYpaftb26cYut1ndmfhzJ",
  "key5": "5WdNmLr9LXvrkKbXakRNyQ2TtUJcGiQFTstPVL1g1vdiP6ty4nT3fFbUzNC29WVqK1QKY48DvHFcQM7ThmJhPfTb",
  "key6": "3N6eUnKosrrjLp29wFmzp3CUBn7JnaDHYTvUKJ4KLPGVjXR3EWEL8qu1CWVk1k9xz2atMRHEpbdiXiiW2Sg2dMdF",
  "key7": "4QfNCouqiZnM1iQyTiNeKki6c1kiCdiUqqqRTfZhaqgmPqEwAqP52zCPRWTf1qv3n3hdnUdkEqhbRYSdcGvUT1yH",
  "key8": "iY6qrvrKPi4rrHSDAWKifW4cep8Z1D1CXgVuPccEcLY4peV5Fj1YnpXHfRdob72MSVFeBJwoD8jiCB2zNJGwT8T",
  "key9": "66BLBaMxJkPswms6vfHFTGtTDsfCAiWabsHLB7KxqoJtxhQ4fjHo8kYVW1jHs3wGMSRR5qm6itBGf3GNU9xsQucp",
  "key10": "468gCz1vrwZHhB5f58qWYMfd84kBQXUcqJzyAq5DQ342LeU2nN8mZiHfjmpsXmTbSJUvAEpE9dTuNxyCCVJ1tXBG",
  "key11": "56RHLVkPTnAn9QhaXoGU2277a5vd2TSeoxqJKPeiwA56seNuYTdpEoAgFgtas8Z8vfcNTbF5bh4zMLFCLZ3dPw6x",
  "key12": "3SJbLDtLeQmd9FjZRsB4gg36RhUFGkrDdEjhF9CP3h4wEW35BWSqHuTYnLS4y4K7KTp37fGaygWqaCwDFYNTP2AZ",
  "key13": "3zMorbdjHvm2WHi184nfuqzb15sNuVFsUpPxKCoUusvCxKfrQGHfJXa5hhE9UwwoQNm1VGNnRPjr7nddh99cQU9X",
  "key14": "4KgRvRczJmRhGWMFRDMupSfCjXTQnyyUUuUYA8JBSDi8Xwxy7egf1QX8dHvjqCEYFRSrSzWL9NiCSs3pZsYDDFkn",
  "key15": "5FJRCiU8hp1EHBymUk4QFXX8Ajfrmd53V3v2pAHvrrB8ofkvnK2eYu5LXyELAQnCFXFYXRpGtXwd3mWevtPpKiqK",
  "key16": "5XkfD1aCR9n7mXZnjQoXQXWAmdZrNxdannz2kCrVj9MKTb2psLzYYMXcwtHBhN4VG3TvVQ84R6xg9UF1RdKg6ShZ",
  "key17": "5yeeScbNYiUbako3s9kJ7BeiNza3dajZLdfBk2DxxKvHEjxcbDsg6S4UjYT444v1nqz8Mzs55H9wTFr1tfSsHBYK",
  "key18": "5foAJXbUjwkvCPg7tcyc8MhAM6YXHupSdWQLDdDbtK4Dq2mincUGtAyt95w4ZdCNUNbVV5epGDwfNAZGT6hpaECr",
  "key19": "47t9RQGJrhsq4KCdv3R6i4vm8ghQKAqj65B1dF9QLVj2t3JrpB1Zwr9HnNYCBc9RT6BoTGbhU9SAEqpP23tRrWVU",
  "key20": "5mAfgukVHH2RzNTK3YVuJnN7tVx9QFxZX35YK2xReP6GAVUHk6F3FJKp9NtLMknqj3voALMkR4gchNBLpRSb3kJ5",
  "key21": "3mh1ndtp659K8KkyDNwEv5BRRorVmZg5EWuKbufzk24hLMjzSAMwqswQix8d7JAkDwUd7dujfXmJnqpRBdE7q8pp",
  "key22": "34thbuCHm4ntv8je8Qg3czJaoyYhrq6DzFxRML1SsqCYxMFaDDtn7t1Ph5EiGEwEhsebbbVe3sLH1jyYJLzUTGMZ",
  "key23": "62QygQ8QUoSCFnxGWinGkdUitnUfFWdFyT1pfUzyEXDGscgnbqzAQaxGsKdRDSDDZ6C2yjVVqTuCGENy9AKRCgEU",
  "key24": "4Ru1jwySQJDqtqWzq2JF2LdbsZuWyMAZpJLiRe3H8wwrK5U28uxwxCn6FyLtRJjH4TzWx12GtVvRTaC12YEuvbRy",
  "key25": "59U3YSAhCXCDuUcX7J9GvAxFsWMsyo9pWnsh1Xuh1tRch9eg5uzYkZ4oabNY9ZdPhKNbN11qpSbUqhXoZgywXVqA",
  "key26": "3q7SBMZggujijQQemFtiyyVG3ykdktzGyxSmXRSwuXasaMmbDbpYR6RrsWV5VkSTztr78uQ6syUqzWkYZSBRWVvG",
  "key27": "pg94Yz3JWcArAZUmhuzQZBCN2cQDCmyCSbBvqye45Ykid2AZfqeQgasR86m82BphpBq5uvuuTvcWC5EhCQXGyuU",
  "key28": "3b4g5v7UJMhYWnvAaRuqLPQSuyZLEEKjqBMhRiNuormgdawKix2GCUa78JermzWaQbB2GGFMmVbAepwtKFjXAvJy",
  "key29": "4796Hyx7f2opEn2wH8tDfTLyZWrCNySBTDSS2ZsJhByZUpfXHHrqScQijX4ua9rqHfGvju9ezAwWxQvNnx9wYFCw",
  "key30": "2gfba3vfmPTQdozcoYmdfmffDgYgufpmhN4k5u4GfQ6VZ1DJYqowKnu8inveRZMmP5MxhvTGruKqEa6Vji8JsuWc",
  "key31": "2guVkK8kPominr5CGdi9gTTfp3YkmHftwhey3CrSRY61iZ5SvE6A45yhuWVc7tQRDsspZwyakQf8BJ2dxwGjdzke",
  "key32": "25Rz96SUkFSX1DQaXrBaJXLkDUZVePwNfd48oucsKUM5SUiuhPfX2GPfhGGFW3R82kG6s1gVbqToLsqd2q2GXz42",
  "key33": "UJ17o81k8K52c3afzSD1rVgCQmApHUNQBQPCGkz9JmWHaK22N6eGnXRCVimQGAMKXuaacj7goqWk1ZLAuceq5Jz",
  "key34": "33xaQAQAm7PRHoxwNwirodzeq2S8BUKcCyGxqbq11bbL2QokW4H7XNS9xtfqQhJ7t8UYKYShEHsWFQwrm8avstek",
  "key35": "4Vr7fbWBwTgShNhxBTdoQUBjXVkGQyXQmhP1wbA9WMLcwoJXcQa3v5u9QzdcFo91wXC8PvCwquFMPTV59e1Ho9MP",
  "key36": "5bmsxrDDVnvmfVJi59HnKgfL1fCe9tm2NVKbkLkBrmvujb2VbY9mnF4TKfBDpvARoywvAi3MtFvR1vYTvvSjxQSy",
  "key37": "45D3XcEWPHsnozd4aY2bMLjXsfSKbKMEUWo9bMz7t3tffYDwaYDN8gfwxNrhzkQkpN4p7Ye4YoBtDxoeAFsLbVw4",
  "key38": "4NBGSWZYLHkvAK8w8iLZ5LjireN5agnkYkLVLcv7wPut6NYo1mweHcddJ8gs3LvMeE1VMa5UygSDrQAMfRLFTiE",
  "key39": "5H9UQr5G2rvKTvga2fHw9Lfqq4AhjProdntVDXuunoiiHVhHVS3JKtzMBpmgoPW7JiQe1EzpcbuQRo4MntZxK39a",
  "key40": "4J6w5eVHZjgEGrBtykUh1KGk84HmuBD1uUGCUufhWPujhS6hN1DM2TTFLM7d7oyFEsuxptm6HmhzfgkQRM2NdXwK",
  "key41": "5neeZ4vph6bKri8HTmohM4BeoxvBqgt128qet7gegy6v35BZPVrHQBsZ6vxiuFwfn6qKrJpWYhziwtn1Xe6qbvqW",
  "key42": "45Ty27EipCXDqheC4AY13seoJxoistAqHdNveEdxoDTgcuNyBGDKpveF7aeeRpHZfAeQs2WYB8V8mR1fKkUVAssm",
  "key43": "2mRT5qEh8aUe3Kt5GgDgYL6duFnG5Q56XnNMBoU9M1PgbAcs6xEBPsMS5vjwizpq5P7YEWR1LqQJ8ERDFTmssVdc",
  "key44": "gcTqGsYj9CAiHbZXBDdTnrm7UB621TqWmYVc9DafdjM3vnj6zEo3C8C8hyf3E7WmPo3fH2RMRyb8aLpVXV2myAb",
  "key45": "FKmZ2LsgWZZRsoPq6shcXeRW2bnZPMw3PU9dv3EfC8v2DX9fmJTAoX45jU9jDajwNBZUomA7V44dP5ZtmKpjSgp",
  "key46": "21PCkKpRfQeQMC1CmY6yMxdXf9iDUcxFeiUp9XUTH82KVoBnuN1eWQU72qafjDxgt6VoxdEM4RBTMJk37HeiuuRk",
  "key47": "3C23AmHWj2Y4Z8gVQCuatpHH8awquQY13CBj8iGfoZdmziQ7AZhhCrY1ShHvEcJMZjac8ZRUkJudHZmuQrWHd7hr",
  "key48": "2UC7Rc4SKZo9eEvmEK8d1RL6mRkMikZBya5Jy1q82zwQiARCLhePZR4fWoUZC5Fsvi1cijwGHJHR2zyMfWWRqW3t",
  "key49": "3YUh8FuaU78G2akHLcAzCKnYptyP8Gjn4RSNXEWC9VeZpc3q6uhLSpN61m4edTW7Mx1PuvR2RWqwVV3r5fsGiQYz"
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
