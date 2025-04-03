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
    "iNk1kkhHbdqvuY33iip7LoURW23HSjgYMEQmdLtaSCwAgED7Em9CJvsgs8w35p4t74FwE8smfC4vSMdfYmmVgLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41vApQeuF6h8mTfRNjiNwGJBsBUaS7rdKjrtSyaQdMdCeqND146KdJS8oAMWPcrnUEw1xsMSaNDBfYfRY34hEgzP",
  "key1": "2YePMWAoq9M9SbSbDY8sPJFM369Lio8DdCqVWEYJJiBK93gn1u4XdaQaEgUqDsn7LMBTp4nppTNv2QyvbKy9mRjf",
  "key2": "XfDdFicf1igvLpQ3AXmaZgwvHTo824EAkkaSmaBCbqA1KmxrvPxHHh8m9T7PcwK9LjszD6vv41DcWsqbVcgCQTj",
  "key3": "fQ32B7aRfbsgoEaJvtRgCxNsKB6K9vwojkL82bVLkzuXt6Reg7nDtVab61fjRUM2mmHJuXayqDB1PTQ4HcNJttg",
  "key4": "2zJpz7kY5zdxo86UeHDchYmk7teTDgHaqM6np8Q1dLvPLZKf2kRSA24xtDtu21hBnUMUJ4GY1fQjqeBdcBko7B3G",
  "key5": "2KJDSMfW1wrxqqoTZr2jGdberEskPVsLHpgcAiG4kRahsMy3XCkKtRy5E4e7kwMBwuvVNrn1RUVAwXx47gnPvY6E",
  "key6": "47ftnpMWEfmXxMpGbJMiDPta3znrd7EvZDBa2BVk5KSEjzsxiSWioopya9SZs5Xrnft6daoyUtJaAsS1nRVJE9PG",
  "key7": "5LJ1So9GY9cn6CXiHjoqgwHG7AporYdchKRiWPBduVbpVfSzSXXsooj62ZxmMbXAXaEGr6fKBdwRTUEhkTCdPsvy",
  "key8": "2WTDxe7sqkYcoSn4uAwKhfuHFhzLN7djMYJqkvvg534inpEq44pJaybrXwaMQ51ho7bwxkys5tnpYWFAezfDGYMa",
  "key9": "64CR42szfPMnk4UVxRehM8VUN7aGjmw5q5LA2BYaWggYX4kdvrFaaLojgURax55HHbufEYQHnvxDKVNUcqkexTnS",
  "key10": "5uswrvC4zwExJdTqxgJeoPJw9YUgjzdcmYHJySKSq7hCdqWqpyXHYAZgw8yBWsWQ9KvVvQYy7Bc6vPKpvsgJjxGJ",
  "key11": "mcshkLvD4FAMDHYPuU3AzR8An61jwLu4QXCL5kYQgkN3AVu3AK8QwFwgxMEFKDjWSH455JBmRqBAxkfxXFAGWeg",
  "key12": "4NYjcDUXHYDqt2Soyi1YuUaEmam6XNKjaip11A542DddBfAoAPN8mrjPLiEJDCZSp4YAZT5z5MZ1feuD6RfGTM32",
  "key13": "4oeTqZG4x5YVfXSs8eUoMv4ewFP5adxJS1z5uxzmJAKPrMDW2PqG5bkJZC67E6TwV9QNxyd2gJNLChXiZH4D4YXN",
  "key14": "QM2696FFMerSCwLah6b191TG3CHogcuhPQu3BjTJHqWQ9k6pLCcZkcpNZ4vz75ZP3P7cgoPdCwvDS8UrVDH3s4q",
  "key15": "5AVa1tVawFTx47NW5Jv5nakbAT74EDdWqxangVorkzw4A7eJxWVCiYrR31mwZVVak612fdbGSc88VTY68oDAmor2",
  "key16": "3AUAVHmi9PWmJYyLYEHavLxMQ4hjySzyU7EYuDym9dQcYxvD2qiuCfKJLsGpiQY4JgqDuV4FEkswyw971t43DpxH",
  "key17": "2hzpeek8WridC26p5hC3a5TmLjikexGJymezaCdWksi2TkjNBMmDeKH2Xd6Q3s8YtiBSUcbTkgBm4azyLJq1uRqy",
  "key18": "bDupd37fSBjc254K9FEUjf2nKri5AZhrsE8cKnWMYdEN1j8kdr5yjB9Uw8PBzesSmfoeGABnNtfFrkZYc48Ugdq",
  "key19": "3QiMzHE6hrpHsHF9vKRXVAEfE1ej6EgTSXsyi32xymCeF1rnEbrqFkcdRBmBGSv1cj1KVdd8keWLMpYYuNYvaTjV",
  "key20": "5J1J4gxvkuG6tw9tE85ozMHQH5inLXvaW5X4Tr3SvWQMrr5fUJjn5d6SGvghSEAFq5MmWTaKtHgKAfi21UsGehqq",
  "key21": "56wVTS7vZpQ6BcvD2YLHtMZmrMAH3V4DZbhssgFFeRi7Za3ZVGEBcAn9dZcrXQbxYdbUfnuV5SQryivxHPueYVfh",
  "key22": "2VSkUidfWuxwA5WUPxHxFBArdgGXgHL8k3aqbsnb2pHQaKEJyTXAawded7Ffq9rWJ8KDgoQxvwo3kj6xWjvLM2rP",
  "key23": "2rWeYMB1iNG9gzzUz1RRUbkZMnaePRHVdfJwKJZ4Xem7BoXXfNeaQLVZNo5wG6RWfSZWSMdaUE9yBeDfaXNoyRZZ",
  "key24": "k5ogva2LmhkS9kWswPfSTVTYLKYfTupqymQpiyKcicB4XPd3H4379hBcsZHVrsj2AiXDGsJQwDxugknnGK46FhJ",
  "key25": "4HUgCUrmVkGrVpY6fyweDHds42JxsPYthqS6MZroydt5pq1MoVbiYZFimswSSLi3ecTRpa23XocMb1eynMFcERYj",
  "key26": "5RJ7ju9uSMRt53v8cmh6grA4yxg2DcHWrp4AQw4Kn9nqtQTSuN1FTARdWnYeaZXFbeYPZmjTZp1bhNTVKPw9QAjQ",
  "key27": "3pofSBXaAoSDRaZfdimEzwKYmtbcSL4jxsjSfeFMQbU9A8NULpauGGodYMttBhB8VMA9xJZhyAFEYeFETqaK1PXZ",
  "key28": "2jwthFCMSUYcpryLi1df1jhKFHDoNDE78yURZEaJqKDNUszXVbkCCkn6CvGYfEQiJW5DSV4GFiKN48CrbNyuaPYL",
  "key29": "2er47uzCfe9DNYpz51NLa3HTtZ5RQ93DveLzsYugqbdz2NgPdbkcJp4vzzqjJJEjAEhtYndzpyc5WPLZnN5sFgu5"
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
