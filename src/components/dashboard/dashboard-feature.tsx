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
    "UV2rr7xohBCkowV32y1qNfRW7Rb6WsfhvaQo2zNtXpAiochYHSUHNWPmW7vHapq1VZUQDHLu2qzAKYxGKAHxwmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHkVCmb5PxPweX85u5QznCfQzxpbTui2w1yZid2E1hdDbjmP2yCGnM6KWkBYK89Vwur7hVJeFy1GURPzExE4EbT",
  "key1": "55T5d39J3Vqati8ZgRsnmg82DjiBTicJMg6WahmUymkbqkM3LK1KovdGghrpxrbTR8AcXNKG81TT9BJcH47KuRs4",
  "key2": "5NLvByESMQU46GPPcai18s4Ef3jpay4d4D8W9zFsKQqCphh3L5tkZkKcetfMNCfci7FxUX9tRyc1ubTwZ7oiZaHY",
  "key3": "S3sRv8jFaAejygQorRRDAQpN7Kni12HAREZ3Rb7d2BeFrRgWLUEiFEpgCo9BfXMdfUbvBmTbiu1XtKwiEj5Be8S",
  "key4": "4nrbPCoUp74jYPnTGn8pAqsKGLyHy1VgQGeJDmpYzfvME29ctew4mH9PUS1ns7g5HoytLippgt7tdLffbHwhFxsH",
  "key5": "5PzorrYz3iNaJDWAUjoCzp6QQUJnFS2zw2n9yTLiESjN7MDsEofVpuiijYZuhAHsMPPeh44ebrbNwmB6ZuTHSdsd",
  "key6": "2WdXUFAe67vAm1eS7k6UyXKpEhTmcoH1JmhjRvE56oSLS8PVuWmCF7DbT6UtMrDKYXRj2DkMeNRDqLHYH3jDJP5j",
  "key7": "5YJBJxfL4jDie5tm54vSDAEQfv1FYe9aHUSQiTt256d7rn7RPSgCCeA6sGQbhLWz7jc19vYHuVE9wansqsJvhiWe",
  "key8": "3cdWJ8J3QhGazrCsnjjmmyv4fHecshaKPHTpQjX2MYPDYsMP7echgUiytaihwwogyLC1zvEDcZVsWt14d55ygxrk",
  "key9": "2dGgxNkNUNE34bwdSxqB655TPNnoj6fwKXsLvwM8Gyyf5GQEyRyfPfjFiBPeMttmjmY4oRydVussrTLhYANdBSFH",
  "key10": "2YEbvR8YMNh9QmWktpyJPY8Pu7rttBuqZDFYXoAeQcMhnL1t2wdBhpouobtGxK1LNcii4jvqudJaqemRTRT184bP",
  "key11": "3aTaCUtJ57ScQ2ApYNA3HVj8TcGVWWtSe7wFeymqZKJHd7BrbNumbxz2daPJLsdCNZ59kw12EfQNhbYLBM9XDZeY",
  "key12": "46SMJmHQA4egh7W53FAMXSAXnZ5w7EqcCoYJ4zBvrQVxeDAorjrdVPmRHSLv3xL94JZaZLdrWy4yfTrWzjA39pPD",
  "key13": "4By9FuzvDPkQPbYMt68oLwzCzz2c2Rjab5ZAixaDj9eYqjKwwbeLRFGFCsDKLpwo322UiC91qKEx4vZ8Fi9kWTEV",
  "key14": "4Pba8M8fN5Bk1LcvYYHAXge6EHXByeUwb4Wqw7F6LamQ5PvFxn7eKcK9PFxnKYZWHwEfGHVSAxZtdx4DoaiYNFwq",
  "key15": "233FRYXRfzVwJJYrQsF1NnDN61bGi4XDY61Nk2UrVbtKhK3G2A77YiHSewi3WGDS88SuA8z57ZKAxSg4wNVtjX4v",
  "key16": "39ESZMf14uLNhJFE8xvG9cQRgAorFaFzJctJrofBVhYXkQxwem7b6WFKMB53WYDg68UAHk5yDpcwRejdRYVQLBoG",
  "key17": "XP374hSMC1HUiuzskbLPaFMv8c4A1G4P1ni7qELAoAfEZT2vxohcJZJzMbgDpZGPkSyqHF4LVoqPWAgnTF117Bi",
  "key18": "2AABbXT7eByW59SoXziwDxya9kfJYXKd7HL7LhtQqYFtevXvJHjSqc1gJrcrv1TNBSH8i7vL2Q3iLqyyZjm5R8Ye",
  "key19": "1L96aRJaJRnggBAqz52o4pkvTfB1iTWC7ADJ3sYjGeRmm43VBGFV22fU55hqgR4j8Qsq7CC7uiQf7L2gDT5pzof",
  "key20": "4Vh5sTHjbN1cA9oQB6bZBAaUeufS1voaQVNHQV7Hga8TF9mrgxZVQ6ga4aFoZufrhuQ7s1QfxsRcubB4344vRJd4",
  "key21": "4SHwDJkorAYVW94K6VC6qhTjs33HND2dwAoSwTEKHUCoVq1FsZZicCT2jVokaqiUjRdnWhcLT8nbgoC4Mdtq56zR",
  "key22": "bKUbqnQatkL2gCMzApfxcUFkwtuUYu33Q4mf6UucgqKEVSkq9cdm7LiqkEzkHpPfuFTpFehtZsHhz5RRLY6smkT",
  "key23": "2mDDWJDc75PBWdcd1pwS53oPoRA52irgSEoCLHyosVtUF7WLuuJsp9USijpe2ZZZs3xrCayi5oMcPo48K4RS2zVx",
  "key24": "4wCrB6LD9biD59gVBYfNG2UzJditFjtgXsproNoStTWaCVuBaUgvh7kFZjCC5vZHzFv8UEmZRJUmihADMwNEgYBk",
  "key25": "21DiV1QEUVg7RGVPUjeyULtoWjUfE4A9g9ch8s6UVE1FtZ2PS3fCD9hRagJRb2TkTduYuLp1gaLXtDA9H76mwQwf",
  "key26": "kBWYKSdZQ2DCiM7Lko3LDueY2KpPoZfPH3MERUfwosABexVcKgUZWaEAMGZKSJyfg7vzt1vJbiGMjmQa8Q389ga",
  "key27": "3MfbvuSCy2Rwu9GsrhezMKKJ5svqAKMXmgsr5b4zGPFTuCx5oSPZA33EFvb2tzPYpJKWAPR9quM7XDSq3Qob6YqE",
  "key28": "4VjEeZZQSYwGgnNDUweyReHpGA8J85zwMe9HBoXhcKxn7LEPXAotCuBCM5JtJStz7P2ovF7Esm8aAhxaefW4j1A1",
  "key29": "3umi2vBkJ6F5GxEEhBW3Nj3jhNrMZykybL6STqZsc31PDj8hXvNZkXeY69LqjfN6zV2REwNjD6Mds1jZ8B5vxkTb",
  "key30": "3kBHysZLt8yfaDoWrnp4eHT7A69e4KPY9PbAxVdgAe3DwSXCjZqUiqFT7AQg3iKcDwi2XaiAUMXH5o738MWiyVce",
  "key31": "2cAZUeqGLNC14knnupW5qUxKvffbb7GTy2QRXKH6toWYrYZ1YT5e36x3WhcVsAZfyv9e55Hw9kpnG9AuYKuhtYY9",
  "key32": "4C3b5qq4vE5akcLWtiAXYGbGkeoxKVRXDEjjgaP7akib41WEsbMiRT1qinmq9U2u9aR9AixhwcGphRUHssPKjGT6",
  "key33": "qGY2bWE9cMmh46DiLwzVP6DQ5TVmgJENuG7WRQtjSLzTnWFP1iR3gCWh8npgR2CJfXrD1ELtpApWnks5zgehYyx",
  "key34": "3UTWbWjketkQqXfNj2QxMGKPVk3e33PdebgAjMibUw3E2NzuK4QCobVTexfuCF1YFLTP15zSDSbhvsz476BgHEZX",
  "key35": "48V7Uofyz4YPvwTWxVWLSiL5sT7FSc55hWmk6dahr4rr4PQSbYuNpj4SwjQQWwKkzG9MoHyaeRWJbEj5sdndPpjL",
  "key36": "3oYZ7nML5qGDBHLRdtBHuFZSbhMsjPsgqeqt5jjqhbRxk4GhmZkHkqysDBBTp5SQg4LrKL8CPTerCg53FyXVCpiT",
  "key37": "krYVNpXZzCQ3MC3gME9pb3HYSEcSdt6B2S3isduhsgFNcZef5FLrNs8LjTsYHawKUzvnQgp294WPL3WjdJBZXyC",
  "key38": "4RK8gYGHP5G6GAUCxRQWdHNLXCD5NsF7URDZeMkETnCp8WCahnDCyMdACLhVBVoSr4ndPrcLDr9vLijSBrdsWUqp",
  "key39": "35AdRKJxcdsSkUpoPBMYAXX2H9d8qmB2dXCD5m3mF9TcF4GENEZxQQrkXSMqjnr1HXQKvrJLLWoZFgBUreMkSY47",
  "key40": "56h9W8FkVQZNGtd8m1Y1BPWkNHzQfQBypTULvUaYbZZYdZkWj3FpDkHDsM9XtnRN7zGtm7TaLiYjokhTN9XPGft3",
  "key41": "3SgiHZWpVJfmHDSusyE1QM87f7gCSC74PwKWeHzGrA86wLccgWKexKcmUXRCrmp7CERVQKiHxFig5SPTsbQbLHg6",
  "key42": "2MebxcoczbBpxybdDib7Bes9VpCpdEx1GSe3X2h8dzGE69PMnV4C7UysLGnHm9uaGZzYXbMz7ucxBXT7Rz88Wv3z",
  "key43": "5TG9WPoeGi2UieKS1u9QPp32XE6eqBx1Zz5DfJvqqWtoetTiV4v81Gg2oYNXmcDyVpSRtt3zJPfUfF23xJ5XQvMB",
  "key44": "eQ23FJxfsrLSD4pgvubRTxep9hNYHKWqb5ZzR7Wcpk4fyd1B2dnhUXvPvfYiQTPSMNnnrQv1SscgKrJsv9KBdGG",
  "key45": "3JUKnen7NZGiDPaGwoohPg8P8oBU3yRsNJovS9K8A322JFTRn6EAfRz8bXypsG4tH5v4hPcyBJxmK6fbCy6JWV6G",
  "key46": "4w5W5ZzoUwTCrkXAtke7d8qKziAZWLEtmNXoK3yGP2nZB5jAVKxnJHNQUBkmh5h3jfQW8BwZakzXBmXvDwtvHoaE"
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
