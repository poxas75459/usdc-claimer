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
    "4gEJVEXDykPyrWq1BCEqXDdiW4bVe7FkZzS9wjXzPYTDQ8xYaxRmXMv7vLxdnjoSdpgzYsyWZi5yLZ7DHQ24vGe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31hL8qf7wkNaCRAXHAwy5XskYVMKgyafGWjWfeXLBKW7M5mugf86t7z8EpAmq7Dy2Df94BdBef1huRuKcbeQREzV",
  "key1": "4MRkGoFmyE89adHxQ79NvjrQZX8x9xXPZ6dJGCwdaWenxGnLdExTafm615ksdeemNzCUmPdYR46jFfFp7iRXkes2",
  "key2": "4hMfPkuwvxhEBufHEci7w1L1RF7R74x4YQGJ8AW4nsc2MPFT2JfUPeXx1pA3nAVtH6CNCNMgPHMstt6PXJRhVZMD",
  "key3": "5FTyFa3q4s6iJmmwkmy4wr9kvzYFjfzND2hzxja6xRq8mo35Fn1kZ6fnQzD5WEX6QPvNsdKg8MLt16cA5WpwkCYo",
  "key4": "32mwYgYy4DJQrB4EtNXtREQphdzwnB6rksBBVkyuud9j52Pq9ay4aCjrncLnuEpweifv7HqKq7GHeCzhLVK9mYxU",
  "key5": "3Mq257QWCvchkb1gccLqW9qKLGYh7aNJFhVTuiYhmKMjXVJL5vzHMaxs2BciPkpt3gtVSdSgP68sQrfsARxCU3Tn",
  "key6": "21JaNA2ZaWwY9XySPGoi3zDj6EzuFYy4WAzAnXrFtQgeHug1MsxAPECjvnpsSBmrK5mRk3AEYSZRVPtCdRzEE3Za",
  "key7": "4hwVGW2ukGHEVbVyejLuR7er8nYfzfThfGH6xiT4GZ128hA2cuCmeZ86dfqKLMKcAapxs9Zs6QEnEXnAhSxZSgG",
  "key8": "4BHMiKjPRYJe9J1nDi3YeZ4ePSqrXuticvvjHp8Q6fuiyVM6aLSQbyrVbMcEL2Xn8aBFMESnay1uaSDQV8LKijJ1",
  "key9": "4TUkXTgbcoK2FU8tTDKrpuURE2wgiEsLnwjgPVk9HxEA8YvJjWqorJbegF78piTtWtkUBjq2kZm22FcXEv2LqR81",
  "key10": "HufVriWnzgXXN6DXF4cVighZsfF799fD6fGkiAmVwaQT1ci2Fmni7Ym5BJaQrSDJpeGbsEdBUWyuh6p9z12FEf2",
  "key11": "6254bbfToRWbAh7gHEe3MX1WgmJFZ1pB9RZjMVfcDrXNnukxW3fMLsY8GfDX2LS44BMJYnWkXXzec2fiuiXGb4Mc",
  "key12": "gNL3V8CcxcZQAw1qBXqbXoAi8Y4B2hdz13zoTew6Qj5e2ov66ZChPay3yGoAUUkRqMAhFoQrRuLwJLR4ZPAzV1V",
  "key13": "42a68r3skRrf1xzhxb9n2ubzKPiyd7bbGfJhx22GwySe55r9bmgUxLsx86TRKSwmwLBNfC9VPtDiRvFgJ4F1ZWKn",
  "key14": "51s8bvti23ENdFmKC3RWKC4JeCBqVaSD7DapcX7DEA2ugfQS19YEP65oyjLkYQ3g1hMBGdZK6Mfra8mBTRZ2Yv5o",
  "key15": "2MmZTaP4c2WrxUxT1QHMbSoqYbZZ55g51ZSqhhAR61rB9rBP1JeGvvFA8umdhabnwW8BbjQxxxHR8L7MpxJSB78s",
  "key16": "2sbGhB2Yu65GU4vJFpCFrfeuXQuyBuDXvt8iWC6V3Ebsa5n7bUM7AyTBEJ1SazAtgiK7ovQuLt31Bdwo4DCSbKwm",
  "key17": "671nRKbuBdxmQHAEQaXictT54V3LBCs72X8may5VFkpe4dDHY2Pf2ybeX2fNCgu72WxkZau444y5t9KYipJZCWgw",
  "key18": "XBaZWnQHbjF1iBbeoteb9sUEz9ZvXTSqMDWNK4GEwi1dTr24ZERqa2bv7nBmPyX7pxKqt3TmXycoaKgkh2i5o7N",
  "key19": "64FW3JaUQbZQYeix7EnCY3x1UnktHYbRhxC7MDuaMm9arR9f9UQUZgoEJvg4VAfFqr6aLV2HbBUwTr9Lzwhtbg4c",
  "key20": "3mf8ud1rGFfi5NR1ffY2AKferWcvk9m7cmS25Nh3sGuBF8y97e8jJVo1j19Zsx6PJcDxx8hTHERUveW6YX8Vq9y4",
  "key21": "JAAJwh38MmTN9mnG551rcJNo7J8sagcpfZqoKYx6SmpoAMjiF9cLQLmxFGkEXWPuzEL16Zpc9SqzBdeoDgw6RcL",
  "key22": "2u3HVSYjhqZ9iwMqj87Z46KAbJBsFB5tky2rkwrTugv7AkmNaemy7CmQHzVsEjYajmKkKPJVBmqFhqW4iwkCaME4",
  "key23": "3i3AEEDTrLBRQZ89TkKKZMUnhZm7mzTWDwUdbuax5oz3wgFXqEtKK5bKgyrYfeFQMULyNH774pwNMUwCWZjpJcxT",
  "key24": "41xx27yWedjQPmmFNB3VbZZ4KLqM3gyAPeyYC97TsFGNqQoHyq6zauNNnmAFSdzptLm4d9sZSMabvQ9KPi1YRJkd",
  "key25": "3YJ2wPqGVRpD5up4qJRA3bntfFgbvr1NB4svpx3JLZwPPKBmUikgXhuK8JRTWWzPy8HZ1GpKMo2uuE5YMGTYjRqV",
  "key26": "4vRPokyBsiGmbwAFws4yewnj1qsHrDZ2p3YhGkJb6nq76CUmmFGLac36WPKu2ifFufzLhxEH7Kz52zDBapvDa2Uf",
  "key27": "2SrxV3dxxX8f6TEmMfpqVdBTbUgP9QWye5kzW3VQ3ftff1QUwCYJ35ZCZTHCd77Comu8KrKbxDcBjYMx8KudL9hZ",
  "key28": "2zzXBg4cxUo1PToeduyr5Q6cPaHTTLT1u7BgcUvrVMVAoyVjFpAT4KuYKJhvZg8HYPfhc9UmyJCCUGx9yosMUwsj",
  "key29": "3eoZfYa1QYBGpDoDbMsFpcNkANQFgqNTbUdK4SYtf57XgnY44KXPpxEB4oSYc4Jd2AZZ6XzFXJhTxAN4ophYxjeU",
  "key30": "yiV8JSympxBDMqdABwZVY7mEeTcBg1UBbY2mkioqqMWzF1x8ksvaZ3rdj2LjbTvLJwxEVfxXANS9XeEyU1wjD7g",
  "key31": "33meUq5KY6LP4YoUwBoDFeQSShnzwsn9qFTXVn4PcdKxr79SSARhEULBTHgY5x8W8NGR9eYNeqjmUJf63i7hAWCQ",
  "key32": "4Goy5DceZh3ADvZudPS7RH32CdKr2yuQKT1VMniGDSH9ZPKiPfzuaQQek4PVA8tHCrTpEUBom1oMYnpGBs5yQuqq",
  "key33": "2KqC4M6cQvQdSKCVT3uK69GPTNiieaTCNLW9tX8f517KUWuC2D19j6wBBTAXSQpQDBu68GGS1YTWMLkCNweD6FRB",
  "key34": "2KgHzb1KBKJZHfeeBSLs2WJZnv7iHj8xb4puwUi7nnw1tRLWiojJpfoPVqNFnoYgRD1UGVtvGEYhAkS2nzfuESbe",
  "key35": "5MjsEXsHUkz8ttyBsTtbhGEUhMtQksDt7ByEmWYaYM8cTwt6FxHX7bMJe2D3pAT1YqQHPNCnftt9YvHfT8t87TaR",
  "key36": "2yMoJvbYYUwSGdcX27mPiKMcgtE4rbWxXsMBbb9inYE3KfsD3Pg6MnJa4wDDvHnG6HLKyJUBZCuTrK4U6FSEXyb4"
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
