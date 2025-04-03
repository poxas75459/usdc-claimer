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
    "2sTjkG8zqsbQkj8SdUc43dkY6fDNXfnYn8E6JgGzjrNwTLnTnMjPpCMcu3sM8ErxCJtBjgRKEzFV26znffiEMWjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wuk4gdgVAVdfumy4i8EFzKYgma9TJrwRZVwvvgd835VHSx3LhMj5J7KgF49p7hjCs1yULSpapRJTRenjUpy6ikD",
  "key1": "3awkbb8gd7Z6V9phs6XmKokUmnNsSqNpHYjn9Z8WHXTSdvXtddGdYHZZAePj6bBNvCfPSqtjpu9cRa93oamN4rci",
  "key2": "4shJTP6nAWrTmnPZFXE8jm7WrMyz1YwVEvdtxAjHCc49kQ8Mv5enZMWa5vSVrwaAPVH6m36tvpLo1PY6Lq3EHERY",
  "key3": "3PmJoQ324LC8S778ZGgENGYnbdzqTdU2wo1KSSNdbbFTCupSZnSeLaaLEHaqiN8qrjzgJZYKFxi8VpDSsha4kV5W",
  "key4": "27d4XkibkHhtQvxoV5wdLFMZdFogmMEG7e2wrRG3MXmFAcRXSpZ9xToBHR63KCmqHN2vvL4h5KVnHtbX4eAUxE5G",
  "key5": "2Aq59CFMFZPPBVvE8ESypoZJg6fXKjXY4jGhCRUTzB7UvSP1gL8HrnBPrtZbn5hsPC1KS4eDyTLSED7nwGiFyU38",
  "key6": "4PdMUC6X2hBByCXwwEf29aYzm9eceRmsWnkTwJtjW1SGhEEqQQNQcVZhNbzDqGWuDVtABL4ZmoUFF6UUTLHDGywa",
  "key7": "2a3YjhPEzBAbzNqtDFehWabZ4mRNeQpBSyYmqVVHAVaZLBq5V7qgNSionxMFhfqBfgE6pgnZVpZTarXRLcjMy7H4",
  "key8": "3qjSLpziRrPjsjb9bQRn1iTowkA459uDR7URyboh5oP6GJQaBYdgL5aZU3mvCKAWKmRXfL8S1QPNLB2AMXMQt2Yy",
  "key9": "4w4U4WbCE5VmUTmqrcFixSAiiMzfom2uvHATCg7yn9wkwghVDnaUQRiiiMKX3mpdXPV1ShdXDvVyC5K1r9VJLLVT",
  "key10": "3SDvngHfhEjfRhEW3ogxgfWGwZuJ9Ej86e393RP5mzrT7qdpSewTigaCuuRmtL7qFRmVZPHCuwcGmZzGmfXW32s1",
  "key11": "31GJrgND7k9JNmUgRwr5XeUiWMwLQyPUDCuhGvkSwzTCTpSvMP9TvswqY9rQquUD8H6vrCgppwm8xWovhYPz3KxH",
  "key12": "5foGGv11WhuB2TuGb5U3ai6xN4yhNpVyEvUggxEUBmPCMCm5NrSH8AaiZmULUZa16BDrxkGiTGibUgtrkcQYE5fy",
  "key13": "sXhMTkrg52TM43ZZkwcfFsarTZiszv19Vz2SvMyXtADYqNJ6mpT2HbLdrWfiCGMTFR7uAvHEasRcppib3id1H9k",
  "key14": "2Awo49U3og9T9UU2Trm4gb6aaLZPUzLbptVNq7Q31LaKGexZFF2DdVmhckpSnaMjSj4Ub4y2TVcUk7yGgvj5awnC",
  "key15": "5TKWNMXkHjMgbiahnMKJXsgNeQPzhuaDRQUTt6UU1zfdk2pnoqRabxvaNZM58RAoywaFKRKCbz4KYXw5BJcp3q2o",
  "key16": "yaTtiWfygRCGtRSPDrturv5b6dCCZk8W1j76DNiBA5UjNeLQgQvLyqao3qEP4Cjk1td3uEAsKkKFTFPohXCtRCK",
  "key17": "3exaDMP5ReJPkbVYZx6EznfLqe12wtetQST2SzipDKV9xukHtY22i6KzzXoSkEJx17vfsLkGS1ekgweByCQJ8LXx",
  "key18": "4DgzK7ceq1H6c67MQF68L4GFm5jvvTg7KYX3CLMDwH6fXFJeFALC8QJ8rZ2bZejPNhW6D2Ath1Kji4y18bY3c643",
  "key19": "2aTDhXAvVzkgN6uSx1ywywHbpeEjDPzDGkq4uko31TTvUT1o8Dum1UYRaPVt3Mx82ATXAkgXDfxqoey8mRWHmPUp",
  "key20": "otaXECa27Xs6Waw1LJTAbGipTVdaQQvBJSThCFpvX97kcFXXPGc47BMWkkBjZ4u5ex6C2dUHtKHH6wCpNnKKAvv",
  "key21": "CRVcd8m8MFJFMd879Luswb6fdddGr64BLBN4yVVyfqbESDYgqd2L8wTRYmG8VdhXy3Qdjk8vKRidhNVDLwYyst3",
  "key22": "cshHwNjAux1GVAyQhEwr22YRAGzTrA4VGGtt8wMSuRBif7gPrvo1feDZZghDqrGLJjejbaK9hgbGc39a6jKsbPA",
  "key23": "49dmHjMgjjhVcRpNmYzSYMkPPqPFtGC5SeJ8zuaX3q9pYhajD9KxfkAdjX3o2W7Yti79fn8UE47mKEzZi93tDrx7",
  "key24": "3ex8QLxfd9E3hQrQG3y7Qa7jKMNAXcXHWWxeVtNfAcHorUBNKqDxBpxyEQpg3ugxS37v3THNRS2ZeUYJh5gmABG2",
  "key25": "58VNZUyMj4onobLnkX5CAwGCPEXq6E7WfFgEWMoZd6HbbWMimWu6g46vGvvXnj5XoxXcpTFJQMXSun6oEM5wRfKZ",
  "key26": "pxEMLYyBSxHg8spnkpLhfz2zadH11LnAFjqSfxJNL25A5rtKwYq6Aj3Lj7Q2LrVS9HyKbeKbrwygnjPsAqpzD3N",
  "key27": "5PDg3NLDUx1Bw3QKKtmuYUoHPtQvoNUu8v9ubRqs8RrVaeY48TZF9FVr6M6exZ7p94vqtxYaJuhheXN9biaxvR4o",
  "key28": "5GUPSF4WwKEPtMT1mKUPqUUGV1z9MTZJNi8R8PsnNtvqfVqQHMLPKmDzqae6B7SA5Y3ZEd5BJmKfDrWPbncVWcxe",
  "key29": "K3Z4FnAnUQuqKd85hqLMD9mmARqv2Low67ATymAXq4Uo94bGmLSyHEotVfiCJmPcRhxnrxWBmwNcvL3p67g9izD",
  "key30": "2fELTvhs3ebuweKSWorAz8MPWkidEb8CQw8ALBanLdAg2ot6xsm7QkhoG3CzV4NnRQT9yqtVMMNRpEoGrkoSM3Zv",
  "key31": "5WXAeBZNoZgAEfim1qdujire9ZuqBALo8EW7cQtETS626dTtSXYs6R93iWtWCfuLTbcbjn4zjrH3ADBVfLfgLeMN",
  "key32": "5ifGHaMwCJkNCSEHm6HNY8E8ni9Hhs6A8Ea8i9XD8YE3CTPW9fj4VPqUXajD5kkSXL14t3MspG7XEUvbHwADio1y",
  "key33": "4Rf8gGPBs8pN2BphBWdte5BbWT8CRrgSHMUFvocBfBJxnRpXZYFih1jfhJ817HGxCgSM5jn9xvmo4jrBZdMcTfmF",
  "key34": "3k1mJSCGXk7PPJ2EiB64Qxz3SdQHr75DN7JF1Q2FJbEikeCQDmGe7KxVK1C2rmPrBKppboDbTizsdCVtpCS4heuK",
  "key35": "3MXpVgJFPcFLqiAZs6SqbGoqz52t2G94JV49V8igZQ1KdiVKs4UqP9KstEkiE62W4rnzQS2oUXgFsEBd5jPMQ9Rq",
  "key36": "2kPDvo6BnvqsPs4WwcCzXD22aKDnuFS16qmEK8AViAysRMqRM8bQkEVUQRnnoFCjHD85ijABD3aF2opyrU5ARkVb",
  "key37": "3JYpiJHpPCEGThpmezE8uBwPC7WVY6MVGPgzQ5wEWB7gndPa4Yuj391gAJ86vxG3FMNs11DJezWDTk2a8iQFRpAG",
  "key38": "4CFE7Xbq5kUmgnj96B6UReR3NqrBub4ongfKhbpmQ9aFM4HzNmGuGwDKNv2YPhizXGbT1ULEFpTDPM8FZJPoev6x",
  "key39": "3nfeUihg5QA6YEXA4Xr2MehNb2qMo8UWWQC5vopCKBQwAzM6jfsw9prmQ9bLMyGHxHtvXWfmprckeB3s3xy74pQ5",
  "key40": "4cFziik6Ds49bP4PiudmmzZufb257bvAynP4dcayTqgHrfodkgWcYw5NF6gF9YAonfFQHu25oU2aTRGiYxVDVAkB",
  "key41": "45ezjX37jd5f4RjkZ2u9GMv5vBqiMBqPcjYLtH668UQF7st2gobDyHqHVyVMgYwPfhQMAPbD1v33rkzUnqv4FZ8n",
  "key42": "3cKe2zBy83ipURYnz3zdiYZPp2YgmWEtJT8psGRoDF4bPRLo4gwHjhV8gkiQohFZA3dSxrW2CBY8JEhmocoN46y5",
  "key43": "54iesyVHRTrvgFZy4p6mMKj1dhfKsPrvNojLxuoau1CqTacTGPBTfqQMtnzUtvXgRPpQpG8ugiuCLkibHTt4KuMH",
  "key44": "3E7SYc37tzN2R9Uen4uAXcobPJ9yNXpDTdKaiXZMSDp4jNoPJ4U1xiq1wrhsBn1eL6724HP5nwniuZ5yE23mf4nV",
  "key45": "2DUzVQsU4tSc2QxtPyQcVBg9J2NV8RHeJxDtQdfACZyBJzQ7f3pz1qP1iPMxyPZDQ1CnzV9gP6T9ojiJHeqvKAnv",
  "key46": "4WBbZod4ef39U8AnraPaDcsYX3gs5gqAya1h2t2njn1Zhev9q5JCyLYX3zdL2xmQj2Uy77CVxamNadPqvRBv7xx1",
  "key47": "3YhnJkMFLmeRSkz2A6R2YSCvFAUhmsaLofLsUvZBfLgPtWZHwPURMJjNbjm126xA7qmorGfw4VRpkpfGB3gib7zp"
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
