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
    "2LaKp7gNcA9VSYtoSn291yqR5F6XUViFsKCQBKShs2nkRdMwECp1AonXGn7JUQZBvzdokwnm6u6TAbZipfL5hWpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3stTJf9umwkHy2D3keD7S4NtK3SLdPHzKXLrjHMbyEjjgoxbe2vkWnPdV6y3dT6STH2wuBJ1C7d18o4BMCosxHJE",
  "key1": "2TdxbiwvLn19fYhwfebbz5WMa4DJ8gfK8NqgEXCrrYiLBGhso9LeSWKhKFk3PeaxvVNuCgLFt3zUc2bJpR1nS2Lq",
  "key2": "27VoVXdhrLw4vpaZWzBXtmTLhBtKypfq4QPKM2JC9Sk8QVsgDgcVbqPYofvQdepxeGJezgEUVBDCibzwhEX3qiCn",
  "key3": "h1DgjKC8jwu51PXQzrFHGHPVTaxUMKib7mHyHZBKGiHRMAdvT26uCTnT6kWZxJAjVCZHF2SdW7uv2hH5nv3JWCh",
  "key4": "2yNB3mJb3NHaoUTVvkXxxUmJhzFLZ3TrY2oCDX2WkfE9JPuuZLY6eYPDmrX3peH9yR3ygxbCT8UUeGTASMXw5krq",
  "key5": "4153DHuD3b3yQsVSQbRrvTHw9kZEPeABYUgvEz59qHf1K933bpBz1VB7vecTLx18hAKoPh7tguCV7NXu55aoAQav",
  "key6": "2mRGa4MwQvfG5JBijhMJxutcTSkuzprphW2EhDFbf4sfV2L6h5htfqAQRDB6ea6rGcJYkwTkBDBEoNhtE9vXgXzG",
  "key7": "4mi4xuiqrZnTvTZrM8RFSK3A4SBaoHa1N78TLUVRFJriRgdaQZnK8Q3k9cw4xRYKLvm718eVofmqf6Tg7SDtsnVD",
  "key8": "3XJZHLSktaH7VUDNzoyQQnAmb1z6GTsxkSwGeemCnPDJg96oX3QJ5Pa1AoEC7n6ogSW2pnGhi3W5px9hNHkzzudo",
  "key9": "48yLLTMZQvS48jtCiUhjBwVNruRGSGAK17FhWyU8qMMUY693vqXDYoymxpEDgKQ8LQcbYBNoth1UFn2eBJcPB6NG",
  "key10": "2uVn15Yu3w3cKjiqRGQdJWAfCiuJDLX7yy3ywv811JCCtRtTBY4GvMsZiahJuZcB9SAWuE4TC6mYYrM6BZUsaxwW",
  "key11": "3tCcZMBpbvxffrJ1AwyBLG2DCemPosgmseDpoA2Y7P7s6qiv3oMZwddWoJ6oVbNuY8jZ5iNAKVds5qeEN8Cw5NFm",
  "key12": "LqHuk4MdQwS26hnbrrGkXNqvzwGibuwLk7enYJYziMDgBY23nmzoHqnicwwc93y1D3q15G2fGikhoSDcqzDVude",
  "key13": "XTq7FyEzhHfNiK28TSRUa6aF9pAuDBxUZQnkWMb6SmH98DxxQSf2WXd2F24WgVUrvE88bkdxPKbv9fKwvuzvnbP",
  "key14": "45QaGJwb96ZqTknZ5SjSm1W3E3fg6yUK7mkXdkkzpEz5UUgkRos5Q3EBnB9qQ6Bi6rxBofXHyvZVcaRATQVE5Mq9",
  "key15": "4jGHCdwX2RczMsHXidyJ8iCFP5tH3M9y4LweJV9dTvTdZRSgQ6pz9LU6W1nywHPTqKPxf7c7BQG5h64z5UYL1vwT",
  "key16": "4Snq2UxKhgbs5hugVzNf68RYHLSxxrn5WzYhH3oTk2EPeRSz95N9DD1tUcqP6KocEZm9ohQXCURQ7YozE4EDqo76",
  "key17": "QpHAjdx4RKcFVpQ4CuZFkJ4pxw7M3yKPsEeYSieDqAY8NjR2h3tPUjSo2LWgS37evZxr4hjANzopcs4myZhsGrb",
  "key18": "5du2KsUiRR6wbKah2nshFg1rtMaHBnU84YpRJ4tsXVB8RT3XfF9cWhM5qSDmE2c96JZ13xxj1Qkxr8j1uyudp9QR",
  "key19": "FxFxFQVuGifHSCiKUE7udtf7tbgDczbfWNep6kPcMTCjgroChzEWcRT2eRGH1bC3y12fNrB1BfFEfnANhJ1Jr9T",
  "key20": "5XYrrKrRLHJVuk7CaN8qKAYznU7yXGcRSFJmHZy4od5bFeFq9uqF9e46W1L6vMnD5zttMdwe1NtjGqToTmXKPDep",
  "key21": "3AuYJ3CdJxgpPo4cVzjMicQds3ig71LphbfmZusD1NTDKaEyGKvG9FDhjGyjn39LgDUC3m4XCERj6cdcGJHpuWNk",
  "key22": "2ncrSNkTBnKE7QwwFNWQaZcbkpMD29b7NgfGQtzaW2hygGmchmkwxyXQuSgRJqJhPduKpdYUCSFrb6NT2PVnVHAa",
  "key23": "3uU12utLfbpWdUk9DqmGPYbuB1Go49s5DaypSKFnvAX4rNgtKJuUmSMgiR19dNbSNU979c1bHsTcyFRFqizdnbJt",
  "key24": "5oGuRMn9wdVqGNkKJXE6TZESgD7U3V7Kd6o9mx5VAPYeKZMV27buqeMjn8ZZDM7zc9YLcHZnSFXdeDGxeDXU6r54",
  "key25": "3pAfPdfRKohvdpcyj61N8aqbfR8U2qXFKgTh4X6kYCCm2seugemDapKZ4D9q492g92cLbvDz9x7Yj5dUwD2ErnKF",
  "key26": "55yKUjgJqygySe1Zcqhrc5Er3DEMHAQDHgbUzL6YzbPFf4dcX6ZJozY9kJGenhJdxb2pmJPgrS53Aom4LUwuiYnG",
  "key27": "FKLKV1vG9iHDcXkCkEP1U497AFCzbgJGBbmgvDtQGFTX5sQXE3Fv9yYxKSYnFjdaYisXpcTHW8WXxLH1g3txMJE",
  "key28": "rT7UqiDsRfQY9N2x8CraNrq5Gx3xBe5X6Ex2pVe9mfZyxqxh9bzwQfwice5CyPHQhwzVCRhXjqVibkzAsJxSrar",
  "key29": "2HVWwGExyfcFT4FPh9VTAodvdHzW9zZTKbxXVMzabTiC1o1FnfCRYbNTUv7jcrT19d3gPDKziHR9TGVywkoicSzQ",
  "key30": "24dW2De13rvPoHDwx9BSrAuXCALwdbrup8GmdAnmDkuHfwCzLWiRwYAotENCw9FRyhc4w4u717sSzo7xtfEbvpzd",
  "key31": "3caUHZQr78DBAvgvpfKxqd4wDzYeaxD3qyW3SDEiLUF11HdDQWK9fTd3jpGGWiiBviM7FWFuyiusxiH7K27pyzA4",
  "key32": "ga7pAMhVWfSDH5hDWQi6nPE3gKVZfFXwRbQvTgrcLPhEKV7qDz9Ks1gwZUKJmmkRHZsPPKXKas9HbEXuvFY7ruZ",
  "key33": "3EcLi5hrxosWA997enDiiz5CDBs5MRmk6xhERy5oY81u2v25xKwNHQhAywyLJeSuc8FbM4DDfxYNhaW78XZjgJBG",
  "key34": "SwEMuQ8B7o4TZ5xnCc1gbFW7Y1vkPYTnite7ihdjZi3M21VUEXLn6GVN5YxzGVsATpBx1FNjbia9exJ8NA2iDBW",
  "key35": "4LG7Hs5du6dgYw7s1PCSfxdr2E3qAjFPQzNpXvVcMSZw66cRfYiKG3YBJChF3pZiUx4NfFSV2SkvdjYNxeAEvju7",
  "key36": "5LrnsUaYG26AhoHwbsAVkUm84W4sDdbAV2JtQz3hPJjf45XDBu1rZ723CUVNwT9EWXHwYLWjqM6ifiGzZsDG2L1p",
  "key37": "4NvZBeK4aKfQrM1yM51hrSrju1DhZbJhH3aWxmKFLLmECjd62ppdB4HgU6gqqDwz5pN7aAzKXEc9977cFjCvGMhw",
  "key38": "2KmNYjL3stM1X8YzaMphFNXAsHCjcJofXJSMfTPkJ5xBDNwiw7Vk3Tyb6wGhcmutrjh8BxnVrEeCB2ZdNdssWKLW",
  "key39": "2xo7VNqsNgvMzEH1CHS2E9RMUpkkPN33ZxHiUqaMdcMPAATMoNmVN9Ux7BTLNuetaguKX78JbdDFwgHyKUzXH4Rw",
  "key40": "nSSLe2Xa1odhbdqRZm7js7TR4asy386vamuFWRiPFsRAVnE3Lfm6VbUmsa37J2oc2j5dF44v7rXMKgmV6Fmexn4"
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
