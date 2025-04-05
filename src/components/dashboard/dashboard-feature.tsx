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
    "5CzkBJkyETLnYEg9EMeDz5iN3jyTDZEkS1M6obFF6UCVJeUjtPCYj3tSPp2fSaNdNjvzcuG9yfjJuxuBLSEqX4G5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iazGW92gzRXQc1yPTnhVxnmSFQ6zHLrhJht9RiVVDM9hR6t51G6jXhopMNWcnC3VFKHHhbiUKALMVcJAfS3kCb6",
  "key1": "3LH29kF3WESAQhXmS5c91qQRqGjf5M6vT3AcTiBq8ct1MAp4WKBua6dYTLgXqs1Ssjfg8kmeFsXTHqhosxF6R7P2",
  "key2": "2y9eL4FD3XhmMTfEecJRg2uLBnDX4HLkrqRWzCYB2guahfa6DeEnYWzwHCprPcoscoa9LJuYqUcWYE1VdGPF9hQR",
  "key3": "58wrhPLyquLRTcLHvwWdHQEBDcNUHfbGGCueLTVcLKSrM2rH7J8YwqDd9mprkXHP7Vr3g667gRLPLoBJuCyZQfcj",
  "key4": "5n7aqei9XVtD7sFvtzu8mLzW6E98bWpXQwYySwF92HzkuLZS9JAv1CkZHc8SMaGjmNzhKr652zufvbhkmFxzYDqy",
  "key5": "4GZxjjGn5UbxVD8vc8krwLZ3WJ6MUDJAZv5yeUPf7cGtoUiedVgky9kh8pdCJrtJfwYkecyy53r9b3ZThTk6SZ7S",
  "key6": "3qFZdMKG1wvzXvwAMAaJ3teP3VbVHjLtFwpuQvr7UanSdiLTFeDJ2BDFtAcaVVFQoVvDxdAR3WDPXJbAWkxDzk6q",
  "key7": "5EdwdoLs7tTPpHcGbu6fZziKXb5rvxq5351GgWeJFpzoQyEFwQji78kCvj3cBTmvqbWuM8mEp6484XXyPPioW76r",
  "key8": "632QGNkNZPHr2GV3PLcz9jz1bjCEafGv454CzZf2s4RfCyCvi6yA5ofQndpwcTSLRvY72yBU2GaFL9kpTWiBjmCk",
  "key9": "3phkYnTAJHgnF3M5fnXSXa3D7ZB4CuYpjLJmwJWa98mZGXxcfxFBkiHfLfq99rcRYnfMrRWjytvsgiPfQbw5HWef",
  "key10": "3aws6Sk7pnynm3KkWvCZb2a4v6b7ZpBs4SvRbwPno82k2iFUsz81VfdBsgVQXLVURv3qhfZ29iRPGxqxfcTkWJf",
  "key11": "6VUmFb6Pd2ZY8QkuR2V3UHsweJ8PrFeLGNfWaC4nv6hJf4GQAjf4xAr9ooM88shjU9uPQmurKiKJKJK41QTReNk",
  "key12": "2Su3KjgxM6A4djtgWAxgEodjnPPs2oxCqj3yUyJ8X279ujdcqhnicRsYdhBzrCBGB76xTLeFyUvYN8dD38KtbKkR",
  "key13": "4UH5QZ8j72dZhAjcTsvUD5KdfXAaqQ6qnBhkHg8B1SwVw7azEd4mnngirWEyU2fwqJsz2zCaedyhLsmEpkzEo5bt",
  "key14": "43Ct1DNjTRneAsbTL8ABtbY5b6fYDpxTvEvgXyn1dESy2VU9ytaJ5zM7i7keVhYGvoU5cBJsLBXdn5kjJWocMbet",
  "key15": "122xgz1DdiH2PJPF3bKaL66DzqMZ4HvvM4kL7EXPPfJee1Wqi6FBJ7FfHDpW9uhQPZn12LyG2fVHwGfUEwPdSrDC",
  "key16": "3J3chMz8RfSoPJfRsE6Fp4GZxSdVQa88tpSqG3YocuYtMsNurs4yczC2vGSy8TNW8XBp2Yqo2bHcchm9toDxBiJg",
  "key17": "37G8Nnvh4WkCh76JKyhxesgqkGqensndgCguo6dX4YHiR2wtifRDUyR68xdYvbkWoP7Dbzpn5DeL1n9m1c2wbpVZ",
  "key18": "3f1tKKh6BGzVjfaxzvho5XNHikn1qmqoCoTEnm1VpQRUTrm6H7ERhFTxDykxPaSBW7QUzEVTRpEJt6M9uS4Wgwm1",
  "key19": "4DbmgtEEyRJBhf4xWT5G8FrymjYGfpH2KVnesTr8ekGmVWQ2ppJnhkcLyNckg1Z2QcLsvK8oe1UYdNCwLTfVu9J6",
  "key20": "3ArtNNbsjzJJ4Bwnr3RkjCUbzUhkRyEgEWcpuxHqnRGPA1aK6oJ9t2KcNpB5dEwscpahotDFWGqCaJ5V3VzGVPDv",
  "key21": "35tTuKCJiRdbq4YWsCs6FXzUAjZgfQSKPuE8LTrF2F79tbXACzkLW9wsz29h3ynZsY4iTXtjDz4RPhgU4D2HwAaT",
  "key22": "adzPvdGpVGxGyyjH4fx1M4XfeuvKGc4FggoEbeqCsakYNyUMrEqKBNxuzEsES3R78FYGvCDBi87HdZdgs9ptYyJ",
  "key23": "NNTNMjGphmMQYUf9pD68NCqfFYZQh49b55o4qMUZWxt6kMtgjTKe95sLc5QGyZgoa4rGXdGDkUJnquHE9X7PPst",
  "key24": "5FEabgz3nMQCh3nqikDtbNT8fbu8Td9JLAMra145xXGjRnifDCEVvkaZxrNABihuKY2nxJyF1Jr9DgohB3wzEYX",
  "key25": "5rdjbvREjohAnaR2uqeL6bPSSXDnXsDteiPKKUkQWRQcpQkiH8TTodjYB1uvAEtoVDra7ZGwvNu2dTrVq82PtCQ2",
  "key26": "sXeKLSFe8N99CfbADnuyvSHKdGn6zWDadpqrzRMjhzykjpbam8L1fSh268x1axUe13qgZV1sFKYQ22s71e7vEmW",
  "key27": "4c5ngHzpKjhP8iSqwPt2SDhD3Z5SFg8jfvA3LABHwFR349h21Frt8euU9RMpcvy2jRaZqFcWDyRUzkLW2znvZJUz",
  "key28": "5tzEhEeP5Zwxr75nkKuiPjudQ3hgDt1JJYdhpVpTEz821grmmFcRa5XW79sNb9Xgo1xqjmrRwF3CBrBQGw9VAdfY",
  "key29": "HvtrjvCmrnCDHnfnuKa9A7v6cWpEyoLXCr8ePWDtibRdTjN2zWbMCv9WAANxJYjyt9SSF67QqnmECdgsFUN9NK2",
  "key30": "3y46UMdfKH2w17Se9Cg8yGU5R9skuR37NMc4hWzbvt7z4jXL2iuXMMFuM9Pig6nQuJTtpYeVM2To75YZsvvZ5L7D",
  "key31": "43XF7HmNZq4FfjMUv16XkdR6b6TYNXRhxZg9u8h5cBP1b2kmdzaT5QZRbTNoUJzFcnoWprPGdJGsnFhLfWPbT2Zj",
  "key32": "4jRgRtbTaCpPnRJaF6BJACYmBop1a24LkoyYQ2ZwepSU1UbLcSDVRaxjYSj2hMMkLmfvn4dktiJpPE6YLo5C5EAV",
  "key33": "4Uxnya5ozAjMU4YuWBH3c6czJLQzC8SufwyQVJxPVDWtTa9WySe38pVHF7xMRL5L9CAEygF4G1ugTZ2hh4hoaaSV",
  "key34": "LjnuFUmp9FY6sJpWsJxaYzHhyffY1PVQGYL6NVJ5cKA21fWLUr3x8f3BG7QN3VAhBW6xxJHUPdMuDYrSoS4CPiF",
  "key35": "4c7GDwHy3EF4WNs2NZt81Lur1T88YAzYPAo24kyKZtp1YbB78tcSMG6QXqviFK7rvwrFgCDJNR9p7XufYj9xZXb9",
  "key36": "4u2SwqViQaP86GhDKJTvfZwxy8nY4xE86NEs1Xvq85qEKU9uK7YbcVvfDvM3TwUgzrBfQTtsHrJjZtEX4Hwz3XpX",
  "key37": "m9XxCJcnPPuvAdP8QfavH9dwUK5XMBo6gxZS9HLYud5ssQr8E7hU13iGDQYr3BXsufag1VDBoWEki6c7CYJL7hG",
  "key38": "24T7PVcbQJXM2jsSNVZUno8BZsUuDYYjw1CBD4PWjgWeTFMCf3MehTboBzCFsyHiARicpBjHR8tVYJvK5oHLjpgm",
  "key39": "3r3xz8f97zk6ePJJ8yhgnniZTp1SZKRMNAqp65zMcr4xeiEKNGfh13xUXQzyp3PW3yWjyBa1wSPFEVmCTJeSz4s3",
  "key40": "2WbDinh68kbztCFEV88SJpYvSH9iWVx7s1j254KrnWjg2D1kiXD27Qffk5jY4Pi3oNL5j4gVRRSMxykFqas7Fpgu",
  "key41": "iBqouyd6TmRDc6ZbuibQGpiFdE1vcxnsjEfckkN9qJTX6LeCuYTnDGZE9xHQXe7fTSMMs11Wag7XiDnNawSap7x",
  "key42": "iFxh7udTkqmc4dYXP7Hoc3B93e78HysJvFsc5swGonocfcL7mppGVe2S2TCdJDDREVWHdhCpniFmr98oHsrxghQ",
  "key43": "4ckrriJ524SX8wveXJiD1HXfqYk1HhpkwEBfzvoPLPgmenecwZwHxEdk7sACH3NLw3RsZfAYEGRcwkPyKUGxtxHw",
  "key44": "25n3iWdELqUfG32xJip3Y9d6TGELGtvBo9QxmTspEveQVjiU2LPtoXScb4X7NwFkoqHjMM9FyoEAGbJ9DVvEmXH6",
  "key45": "5H8FBany5dy1Z3Mzigoof9CS4RNwaJHuX4mBe1T4Dtsgb64NbNarqGuhb9ZGF3Jf2DachRn38PQwrm8X5ZRDBjjp",
  "key46": "2K6EFKvfVoLJEBAPMx2uoTwtcYLwbrNCzmTXgrTUQRAKkGsqzEiRjtmbs1jkWSYWD8Jc5Qsi3s9MN1zpE1f7SAPe",
  "key47": "4hZ8BqfXyUEEZJtotcMEufjr4kN4uVRGT5QgfHhJC3NdTDBQ1Aj2BtkfgppXSug24A7PRtwYNmDu5DMByUtogXa6",
  "key48": "jFXi6nZXtJgJ3zyz41F9tTRPeuhK5s2L2kRddxWjNz6uFUNgix8J11GgzbbVhFpEtckZR5gzMYhw8ngHX9eYcvW",
  "key49": "2csNUSf6MoteXa6BPqusb6bME2osC86tsV5tKrFRQEbpNudvRfW2ZWTNfY4MemS1zG56oQmtLqio67zYAChZSfZ6"
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
