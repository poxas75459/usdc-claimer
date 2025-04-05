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
    "jjPwYJDKR2wJSP81KvRdHnPuq6PQsJQv787mpmbvmakhYCeu1jXswPt97WqgqXRPww4sAC3oKy1DLL8VAhUMtbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SHEc1yNXjyziFnTqKopY8gTQyJmppHVGrHwjhHeKHE4uv98LeQVyUadmicT2wv2cimhBftef3hwzwXDuPuhFVdr",
  "key1": "eeXFqYmDKc2sSUazjLD1gsxcycqLTM2sYBYWsigwa7RP36kpko8oHnokYNXiAgR3jVUgRLY5qyUTiYhQab7DHy5",
  "key2": "3vS8aZ62jF8ouB1WjWazqzYJEczPDhKNv4fFTKeSHxzTwcUJ2A9V1az2TRqtKZTLTdQNUCizBvnr3pp1HJEpJR4Y",
  "key3": "zFH4vBezUG7AgD4fCYub3NQp3m5pZtkB7jwdHUu7RtY4UUygEBkGSvLVwrHtdSSegg4TRJD3UrvGpMGEPXTYTno",
  "key4": "FY7AYwTViUKfJLPcxkj7gf2xegCJ3S7Dd41v8fUyySJNwK9qf4rsvxUPUE5fJtFenWNf6TfRDnDYUQoYLziJzLC",
  "key5": "2R24KYkGVCZhdcxCMcsKTEdN6QsyNbQfxg6hUVbwobXeAJJFAXbkZbay1WBGF5hH5roxrccCEo3UHP9hBkBddQBo",
  "key6": "648YwnxkTieZip9SHbVu9Jiz8P12avqvYmdRyWuTnmf7rkmzJTL4qSsE5toEtfuSbgsXUWT3Gs34s4JFBhamJMx7",
  "key7": "Q7NMchZcLmMZRWvZFWXNcyFP4YY69hpXgWdrJ539jfy251SbJpNr1Ke9ZgvMwTvGLjT97cZKudrJjp8UJL8ucWH",
  "key8": "tCBF53aeQDyZQ8ueygJJGKfpoUrYCU2i5YKq9EpmX7JkS211VgLv27t6UoKmowiYc3DseRZus4azGtmENDwLU3q",
  "key9": "3PqGKpdFNy3wYXcwD1VS4m12uwUgxAFpnuv9VV6aMJfTxQopgUppSoCAxa6uHsSb9SfvVGoXuGEbzBNmV9xuAV4C",
  "key10": "344vs2xu8vKRf3REoBkfvcYaJt5mqejqeTFxRbEECqZpg6nmPubXPcZCmNG3oSbQg4Yyrz1mgLApyvgYB6LD48QN",
  "key11": "kiXf1dLoGUHUyfTMCPkUd4dvSh4cPPQtdGgn9LViN1Ao2AL3qcRB9E66tczVBrJsnBqcEmBuVPiYreeZ91hpT6t",
  "key12": "56SjHccZV7yVY95EX9Qs3RSuwZBc1hdiCvaXiPBCidMNt4gjbneTAmVinC4pUjHvRQPGeLoWWR1oDPo9KPU7L51z",
  "key13": "2ZJS1J5KhiC5GrkzJ2N1EWMabG8E7CKL8nbvPWBBNm23RniCamDk8yvuvCPAddSQETbPGSfigNTX61q1JLniForr",
  "key14": "5m5VDx8zH6R2jTNjXURFu3pFGKffEDqidWL3VBnXVPDoBHvzACXNWYVSrzgKoNcTcc5bYMUZsLSqRCnc9eF1Niet",
  "key15": "iMRXUerjCPhvcDfAhTUnMxi8xMdanLLo2LWwHLsdjFgGzbMs9PiNkWw2wqcJLy9c8RWkkwS7xY1eMgzQfCbPK7g",
  "key16": "35BEpF34FzXcE6cRhcgW7EBidur5qxCeYV5HXe8Km8befdYzeA39B6S5SYzQ5Mdx6dCyRfQ4AWKQgGYHjfS59sqZ",
  "key17": "5vRHNWaekVYkUiCoPLYS9FUk125iJDoTMXZcdHMQeenPU19pv4nBA7qcw2twdQU7kBGdbPMHRHv967oyiLK4Cx4V",
  "key18": "2EgD5viCCTZXZjWrLoYnhPHky7xfpBzRaED8bnJR9FJFwZHMtYe4RtANyKMLnkJHss4ncyKbZXHzaGCTQGcRxErC",
  "key19": "5KK17NFkH2t43BxPTkuwGDGq9RSKE9SUVrYAdfRedUqY3eokEhGbq7wuAD8ThuzGPBDxnZhVSut5usgEzEYGNjSW",
  "key20": "3KFvuQfGCXaGVy7zpf29NXCdRjQSnbGn2xB1aVMBsbp1Bggk9J3KuNhhWvYVnewRCeYVDC8V7GPXG4yq8YrjMTP1",
  "key21": "4TCJRtkhLvSBocLtV3r5oE5vTSfFV4mCUMGeV3Zqa3juaann1CmGqD477KaF9KSgCTS1cZp8pL7aV3DABHDzv81d",
  "key22": "2Ka94udKDCL61ijeWLdbVQhxABf7CeuE5dYgdHEUSwNxtNNRfR3Z4KoY46pLe2Pxxdo6V8a1SaXbjvaz1aPv9vpb",
  "key23": "on2UfzgyGyy2cBxiQ1X5o84RRmYbgFzdcHndAQjns62pqucVzVDgZ2JpyyiDiDJG6sSdHZ69Rj9MwmwuU159NsS",
  "key24": "4CumRsU55QaLQYCxsjNNc7EhHwbxB27MmJuVwE4Ak9fUxFsBAzGoUxsp7fEhVe2fDL7xXRW5yt6dLppVNR113Rmv",
  "key25": "536xFPeMZHk8REAvQCo6rqjbUK8kmG2o11n9KiV8TQpA6rBsu22PpfSN7b6pxx3gMb32aMWxdUq2fk9ZYobacEPt",
  "key26": "cf81pUJMsQfjtSp9mCMetS4BVPdw92bYgtb7KXVAkjJWjGQKdwNNjkqnQHnKv8Ga4kKpCuwVFcM5SjeSNBGsphm",
  "key27": "ZRW2An2EajEDZ6opSMroJ6Y5aFx3vnhmQTfaMTXeRS3kE31vNX9yCTqGFXfPcYqrMXbEd6LsV2PupJxyqwDPzSr",
  "key28": "x2nkFMwfgg3WCem5cVJ3yUiFybwnxYJux9GHPm21dn66tyY5ZS2a7K3Z9hcpgH3jPSj9XjM4PdvKb4LP5roGpUV",
  "key29": "3paPd2pDUZtGR8MwZ5F9dA8wEW16XMiqtpxL1CtjLpVGXDdNWe9xwBiW5p8jmYg3KwaGamp7TvNuW98e7W9jfinN",
  "key30": "2LDMBuWd1FSXeKNfa8tbGWQwk7YcmoCkF2ufemyUH1Wx89rU89Adq9dURb6San8ksqRKDazuBvTPE2wT2nP91wPg",
  "key31": "4rzLhMsVFddfYEazpmqTmJNS9HfjjQA6kKxZnWA6SZzm98g6FNyx5FYgMWo7fUXHRGqffPYFrcBuW5yv49WJJFna",
  "key32": "33o236R4Qk2hso3tmqSHR9x94QTFeSTgS9W4tHYUeic9zQRRTDdEGqiZHp8h3sHKg5RieoXLzhvbaMyRXiNj73wX",
  "key33": "3C1JyzH2HJ7Q4uivP3czQup3qUZYZyxnFRtbiftxhXXacYLKdaKSQHzU5NPrJqewvtGJvfWyavWJ2ctw71LLesCg",
  "key34": "3C1vizyepteMUQPo7ozvSHb4aMkcnuQm1jaHjdXXEbkMcu3J68NVwYBUPfsyZ7MXnc6guJd7AXiEp6MR3PSMx3mv",
  "key35": "53vqgXHbsJWAgZZZg6rMpDmVVhcwCvTGUfsWhKqvcjcVfLkusWymNZbVSEr3u2moLHk4gGv8cy5Cr8DtAhGHrxBu",
  "key36": "5JEST5Lh4B1gouEpAvqN69QR9FPSVu55UzfDKWS9Ep16q2X4SuBnGLwMitvktoyAvhQpD28S1xAMWneyvKtCSzhT",
  "key37": "5FuhhCVSGzuQc9EuZZUWcWNg1vXLeNNk9PZAD4rsZiBk41eUMTT4u7HmWCkhhof25NTqfBsYfbkeSkbVqazB7X5J",
  "key38": "4NLAFfbRW5UAmdmViMV6nn6eYmqMViW5XGQbzFwGzjjN6mhbS5YaNtp9Q9Y7Td1t5dqtSCQJyAsV7LuQ88Xttft",
  "key39": "2koKJaBizcwcfyPsZznte2HJn7LqgVSej2UZwhG6Mx9DuX1RaGQKFxjxayccZXwEyQi3xMCAqmn5s6BpZxVkz6uY",
  "key40": "7BUNfmg7nXxgcwrDZTdgmEgmq7gHsYw7yh1nRSbuTjmB5VLeH9xcVGVm8pJoFfiQKJbxiRYsC9Je7dfDrDcRrAR",
  "key41": "4ABs7PzbzebdhesoUUFc4v3jupFfvCNardpgJJCJxr6iJjqYQ13fSKXqqyJJUbh8rDGgByivZy2FRuZCK3cbZejf",
  "key42": "5iN9468ahHWu67PF8HWzAH46noDccdMGGnaGjtRzvBSGcmxDcBXkW5pkWg8BAi5WobadXGNThXiZkRSqjcL3KUu9"
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
