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
    "3BkA4f678gZ9di4mq3rJpccc3mcgs4XLSRzd35zQXDnxhHHPECBRu2M3gCSjCYQHJn87wv9Ftm5PcQhZzLbRZSS4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RQX1ukz7HJCXXQ7UzA1aoC4RQFRvqQAcKXEHRoL8Ar5bnziPVRRBpqtRtvgkvJJ34b6ZKrhxbFwZXAz9j2QuxWM",
  "key1": "5DeypAgYu2rFHCDtRAKfPnj4H4P9JFfnUTbBr2ifUsvUNoVz5vdUyLLhVFYZ682Dw32r7vut1FLQXQSZNuZsDZWr",
  "key2": "oowPsqmiuJdZsgu2ctYJ8Et8pVRwdmvYw3basBLBEda7PJL1GE91ZeCgCz1WtYJb2gBMNjsbU2DWArDrrxFBG5z",
  "key3": "2fruRyqEkU7h1FDfnm575XEquFTXERn2VSaeTabvdMkpxqt84hGkMyW4z8tt51fnUEHWDTs7czAF2yeDNTbp9AXV",
  "key4": "54AMVinYQD3nbGtUSQqCr6ske2EC3yoPdMqdAGgdQUDEkfoRVUSht5pKtikQAkvDMXZMQZjZdpbMbmWNGTUHBr6G",
  "key5": "3cjG3EogaTCKiekix6As95DQeE1wrT5K4px5B9x7MhTz4J1atfbkB4xUPBGbGLfUdvZy5F6iDKgX5VBQVmymHgoB",
  "key6": "4X2f3TEgiTLV8ySaaDCjpCUWfnUfPGJ36oG9Q75HrMqcmbeeieXAeSuyoJPDgdziwksX7dGTbNgdPFzvJHA73xnE",
  "key7": "4JxZF3p4oPCacBmofDxJ1YvNoYvPWNMRbntRQouJ85DZT7xzHoxou7mXi5m7Ej4oKWRozcRgpf9d7DXKyfo5RduK",
  "key8": "R3oJzgKWTYt48YfAu1DAn7Gy3Z7PVn36hvoLQETzV2eu386gjBzXtLctDvxBppEPSz1hAoViAr3nkw829ftf8tf",
  "key9": "3BNBXqvYDaiECtiD5E3Ags9ZJ71zBGm2yNDYXS8jAMw9AxsP2kisVTT2hzmQ1JLWGwx6Xu82FCyivXF8VrJFTDsU",
  "key10": "iS8AexmQmqpQUMcLj3FDcu8MsRQPKo7x3yzUDY4QHF3HNT483eLS2Q1GsYdzs9LB6ted1pPVGNLvcFG7ohmCQ5A",
  "key11": "32ZA4mRWLzugXcyors6YutUF7RixCK8uYRzZtw71zefAJNo8RjvUB2Wxzy4gN1cjK8Lj8mhGD7SeNJ5p1vcMjYRa",
  "key12": "4MhhxAsST7PhFbCKgyFa2mWGrgSp5ARYMuKtU9USaif1DLTajRc3LhC1w55ECJQdYG8usDQgP7brKaw65thYNqsn",
  "key13": "5Aq8nA82kp8kFUGWDjBprjfoZJj1XPot3JxaqxHVN32KDifnT33pVs2NNRAkXpatMBEZte6ecVvVQbJgx5Rq2ZiY",
  "key14": "61hTCSH9sU2vwVJRj9YZXCZwP6qp3KUNybjPHieu7R8Fg2FQCpwJUSokEijHNXv3Haj9o7YPjr35xQiz7ozi8JJ6",
  "key15": "63nrbf6rhy1WSzYqeD6ng3eLidLFHngPohcH8gSKVDFfeZgKnGySNrP5xM2WkaNcStdDVh7YmuLv8QnBX3eLfc6H",
  "key16": "3dEHUguRD12y1rUVHUREoeScCZTBR4ma6r9PwXnKqxA3LEEpjp6aWMFFo6ySi62MNL1zM3kVAHyBaEYcFo4RAFY1",
  "key17": "3VVms8h2x3WaC3113gU1GtfGGj5ZfgU2fxphcq1sJvynC6tJFtX67BVwMvkdwaG6ajih9FMHSPTkzUSDjuSiczq8",
  "key18": "2FmP4fRcE6i3eYgEcDtkxCPhkimuJbMFUkvh1fNVHBxy69w7mYNGaMr5XtxYtwt96tYXBtdXBGGQbbiKCTuezBo8",
  "key19": "3sNAVhPW6fSq2KczyCGLpmgEXw7t4wdnifMaTqaVSb4Ftmh52LpCxfWcN1CwSBzvNn1XFQrUikNHSGh9KBboE3dS",
  "key20": "3AjDdtUEbKT9idF95b54C3ELE1GbNnSuFxp2S3fz9auE3GdPnyspYPPw5wL9wqqFeamHoUjJqTQXd2F55ZdtavGw",
  "key21": "23qu2x9MnKeUutebM4pk3Q3NZuwjUtmKsMuLU4gwrv99TdgaGvT5PrqoYdUzTf8JghWiB1EDH6khtpRQtCDpbhiY",
  "key22": "4zCL2BumutzWPQDgdmWsnFSHXDwc3UYmG5sdg1ZhJP4wKxdNUvZfx8aCLJ1cgXcAAyg38AeXSu1YUHiBCToQUeiR",
  "key23": "5wQWQZmQE3T4rj773uLQUE8zzUP93ryqRwMVyKbGNaaueUdMxguoH4dFGggaEfn3K1qzYFyQuMG1MSdtk8rGvjPu",
  "key24": "4DC1WBzo1aXY2KhPRjvQggYsooy9gRyrobcyNLPKKqcP6GFnA19ufKyXw6mLi8wKXBYcLTX38ZUZfRCyUXAf5LQf",
  "key25": "5G5jQkT9yV9xqUVMgwojPZuG8NDuAEhUgEirrU3zkrawExpHFZEKPrhPzeFMUpbBZwqEJhEeoY5Wh4P4Uwk7s7zH",
  "key26": "23zvrWHNfUBTLX6eddN2ixyeRwqCo4S2WhLnxNFp8KANTwF6S5ixQF4ocEvvhC9BANwvMARZwcEQNmgGsSkVHuji",
  "key27": "u1NfXofhhrHdK3mMUUGSUH6V2YEqeTGdUZzPAojanKfXajbTah9mK2qU5QsyVeQwRyAZuKwak4KRDMJXiitgyJV",
  "key28": "27TqtnKWroi9RV3YdUHU22HBRfCkbZxZYcbE6TuoD7wR41J4fP7vC6r8w5FiKkqcPcm4dUMK1cBrfAKoKVk2uAzU",
  "key29": "58qawSHQvzhaASHDLGPqaitJ3oJ3oMx3CAVrGp9DmEW1bujwa1PJZfvpBwS3RDeyS3EXQqLNHKgB8zma64NBoKdR",
  "key30": "LipYJogaCY4Eco95wHBLQiTdTxNvT3Xv1iuNNXZVFPbL6n7yLkp5NBYKgMV7seYuXdu7wGgnisGL2xtXDf4NtiV",
  "key31": "4WkNuaQVyt11UkHAx19GnDaFSXQKS1SZtLnXMSoWZSQV5BTtRKMoBG1398GAQmNqjaZ8ijXAuaMBbR7ok8dwNmiK",
  "key32": "5rRCvSA9pNh2HFNJ2CEpw8QdSDw7VorDxG3yzqkGWWG9ndYDFDZzgGm6hWNG3xJgjb25cxKj2iG1zUKJmZDHLjYX",
  "key33": "43CLGryAfzM18G6JG4VjZhPxeqJVVhaLT5vA3jRFJ4yVjbAcYe6UVVQ8KSwLvoMMFQMGurH5bCHH56BoWtht9s5a",
  "key34": "3etPHTfNyXJvxGsZRCr1MCcfNHo8iS7pA6LnjGTxKgbXnfd8k3DYiMJQ97piTQmzK52cJs8oeLAoCMAUxFs81N5X",
  "key35": "8hszTNSuM7sDEJg7d1SnVCuRu4h6XtyCTGcDaxhAeawUFkKQEdL4GYQXBDgN53futYnN27A7xPs7GUT58LF41He",
  "key36": "4DaEmJmN2rMr5ZEz2Padu1Hfu4C3etukHe4kP9Jtwk95iHH453FNtd65K6q6RzUeMMJaG46CA7VWo1FXzCvEExQx",
  "key37": "3kQk7nVBgWWMgo3dig7ZmuXvas6GyqGHtgEsRzer3HYNXNypaE4Bth83Dzv2ziKWKmqFfXkVGE35M7tvDWLBoATV",
  "key38": "B8bQaJeAdNUAto6LNEtaDR33YiPFCVzP2mr2ADAGP9D2A67HFXhMrdR8s2881ocTSdDJ3ncCAmX3BRX1XtnNqxZ",
  "key39": "5gKgsJueUaNRhSUM7jEKr2xaFiMJUAbN7Hc9DG7iX14PXEibM3sA7fTgPY5Y8peDz9MtxfspEDeCBtuvt2ZJmgCn",
  "key40": "4rfQhQpvDuD2SvQ1BQ3qGsuHgXiwRcjBymsFXsh2i1PSXm4jGrjUn53tY8sF2Mbc5tHWjo76FYtDHz66CwagEbY5",
  "key41": "2ZwdiXS5X2ZeHxo38F8KeGi45bMActWqNJWyfv13JoAvMtM7BkhcSmN1i4fihoFa1PNA4RUMsnKmFa2CEcRczkY1",
  "key42": "2D5vn8inMmtzk7v2F67oZZFhvUa6Y9wu7xu1gSYQebR2JgxBUAbaFpiu52vpvXoqYgHG8ZkUtnsbHGtjDHPNefW1",
  "key43": "5pFdmAymbhQ4EpACPCCjbt43C941ktp1B3hR7c7Dibn9CJpE9GBjXMAGzxwgerpoezLz2TmBp9Cf6j6J73x1x9ZX",
  "key44": "5ets2YSvA8YfGsbsqBf9gJVQ3ziL1A8Fxvc3sWbTmYmDTRiewsDB9U3sSC6RfTtvyfYzeVFCh1UuNzXSnceJS76s",
  "key45": "5kKA3sUdYKpiBjEVGWyvm7TKjVT1x6LpSa6gKSHAaCxD5w3iQxkvnQnkWnVDK3W3wsMnrUzR2aCTb38zVNGit8mQ",
  "key46": "3esTSeoyrfPV2R9NEFg7pVd41RtwEaCLe2a6f8pPWNHyu8aTTjqF7YMfXrwLu2gyQGSPFZnQv4ayK8P8NVJ4zJNK",
  "key47": "2wRYNzyxPxWeXp8xWjJobfDRdUVNVon5SejMKWFREVinXUxex9CkFDXEohgkR977evrZguULauixTiUP9oFCh4dG",
  "key48": "2C5p6gEsxezzXjr8aw2raUF1LD6N9h2j8fcidagxjaGGwwDNzv6MQRypVzdLoTmec51ZULFN7HgjmPYBbAiJDq8X",
  "key49": "29MnsmDGp9Guq5j2ti1BmQjnA89PiTLtnnVCHhrSKYqte8A1Buz7EkfJyoWQHNjmJdiypGURHitXHT19FsnK1yhb"
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
