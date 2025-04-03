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
    "8Ri8EEaShYD3ZZoog6Ycq1w8TPcQgcmxbn8m5xyHR346S5CZwyRSLeJ93EzLShcU4MGE7fPwVK2Up1y9xr45J6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H7KqKm4BhzPCuGwdBGryRxyKTA25TKaLSMUMr9DAMi6vwYjJxD7bj2a6yJYUJUmwLWUhtTg7wcdz6ge1Nt3djWw",
  "key1": "2TwRsm1Wu3oiRp75zkdoiynGKUDYzZg8t4MRZuTVKZzf6bmkfz7JdRgzR9BZCP7wwqEabeCt3Hfpjm9XNeytZEFV",
  "key2": "3qptKffbeRxpjaG9zzk8gzYLLvKoA3CR5wjCwvZZmcp6GhY5dsoFebjuifBemkoqL29iMGhzo8JRWX4Y8vzLviUX",
  "key3": "5cb27J5HhWFraL5CkfE6cNZ8nyvb7qwy1bn26yJCT5vtbByRZRXhujRhxjFPrLk6aiRGyXuXaXc9ZhypZSBnySKs",
  "key4": "4g2mpHFv6uS4jGxhQxaobGpcLR1p1tm9KHzdd8XstF2T7oxxuDJs1GPMnZeY7PwhKjd32xVyFzG2GmvvoSSeQEUg",
  "key5": "3UWVrmqc2qk1K4krfNfzP4hJww6R5q7KMLasXcPij9u97e2kSQTjb2s5JhdDxv2SEyW7TNwVB1Dk3hWbAgUDebtM",
  "key6": "42xojGHciJUbacntF928PvFZuAZt34m6Jfhc6mKDdgDtPgBo9PLz3qei3M42hR7k1syDYn9VUa73khCWadCjQbrr",
  "key7": "2tnoAszE77gHVDpkrftev7YBM6gKXWh1j3dGSMCF13aNjaDcp82qj4YWopRNwA7tAvgPsky85qNar1QY5t2KjbRt",
  "key8": "2aFaeGAr8yLKhBZtFezFEE3udFPSuAc85zyQtBCxKbASy85puAADmb6jyES63NEc5nRMBkFqVvD2yAj6BTosaGS3",
  "key9": "3Nd8GPrKRTer35MR2WZq8sLgonsLrUiBCSme4KHp7GMLdrekXQiUkavV84iBRv6BBHy9NR5c45jHx9AbdpgcyBiJ",
  "key10": "2Svg6RovVcC1MBvBVb4u1pNxD51oigc8k1ukCsyQ3r8rodFyjzRJZSF55FUUfyVpciX6FfVPP5JPQB6cc8Yky7u4",
  "key11": "3damM8qZ24VnEgCUfN7THY7H2dqU82eug1WEzxvx42Jm1PyKehvmeDzKdLGy6MMxEDT3AmTmSEyUevKmfmL7HUG3",
  "key12": "5i59nYbRA771RUVTy552Y6WEDzSU3eiZn9RkAMo6k2MNkXFcsvjwLjHWQrn5SJcujdGHbsQnG1xrxti8gwPwMJts",
  "key13": "Vd4gAavwNQvZTuH633Hz1q3CUFaz8odCK8auueCgQ72fsT3UCUMbQtpBSb2tCpTf4f6RfxCkmupdzchSzAVeEad",
  "key14": "2t1QgcThATtZ8BTTs7LZ7T7HqazEmcffbBJDfF5PhnQMtCxxDGWMg7uPFgTQWuhKT1QoJDwiRHiBp831cTuSTwu2",
  "key15": "3yTF5Pq5V9m1q9wDLkqHymhadEjuPef7ZBSbPdwhaANXxspWKuqVgnxKa8Sd4baXMgtoSK4YNk4Vf2JmLadoJTEY",
  "key16": "5TUgShpAtPnAZtj2MfKV3YbfupCcdvfwFCD5E2iYN69MUZ7WnFyiW1cbDojnszT4k1M5wJytNLLYHraBVwoN9UhG",
  "key17": "4tVXxgGcVBo2QdFFEWxAdHFywMYt7X9W2Aq6Hi6NLLYx3mNUMCB1bk2JZWW3xMpU1pwa51He9cLrbTSeorccxB3E",
  "key18": "58RptxYpP4SaXgjpWUe9sQ1tCsWBVEskzWZfWQT3i59NiuaarxVoWpezrqggAQCwXh8AoHFG62VHNNazPqQpyrXU",
  "key19": "3o6PniHEndgpmt3gGmHSFfkfT5T25YD4burMwfKR6FRYXLkdADihU8C5B2GXvedQnQf1xRin5nD2sw2pfYq54D7X",
  "key20": "NZ6jXeXXiZjm4y7rvyd5UGqgSg66pUDHXXPVmjgkKJU5bcdBpkV1dkgyugSMwP3kyc6AFmZJiELrGvufGhU5QHJ",
  "key21": "3NCJtKT6FSrL5KLjTWqyjCrNJZBiFwjxd6abyT78d2PeyiHFtFS5V5ZBuvtVeNZHEusBSfVZQzQE4wwFLZY6qgp4",
  "key22": "2MhnwDnJZJdsvPgxUC9MrAa3v7ZVsU9BVQfzxru9aeeataeqceA4Pf1ZbnzFkzLa7xzn7zNG9Y7hUJoYq7GDCDqB",
  "key23": "5ZV4KwGKWfvbMg6sCaxGdSzgbUte1UFCU7jgJRSvGATTaskZLtDL5HVdPm7b7HVNruoxAQXre5rCN4ttkaES4k7c",
  "key24": "3jDW5RGNXPKiByvC9fXxfKtEVruyC7Q5mL3Sak5zNHTtnskmDrr1Th4jBVd5K8HoAA2p4UMgeEsTtFMRA37Yt5uf",
  "key25": "3CXth3k8bwYvtMDyA69wx4BjCHbV3VaGPog5EA3twrRhigNU3jvRX91mgohMMVWP1nHLm2PsW95rCHT749qinYMp",
  "key26": "5Egie1xh8DfNQ7ve15FP98TGQqR2qUVVSLANPrw7zW9HHsDt26ppTmnyjPPdYUK9tQyN1SRxGNpkeBJCJArJf2Yu",
  "key27": "5W2qz4j6cRRpcFpF36Fh7nMmdxer4xAH6JiJcWbBmscUc7K4ELvrnTaopYNq7AnaGv6yuEhQ8EE8aXy14YoVpxzZ",
  "key28": "5F3Av58pEo1aNpVnuv51sHYiekop38j7PRtA8CTPrCofPEcPDW2yrVqgsbEpGiTQA83U6nQ5RvXrRqRHHdvHZW9h",
  "key29": "123ydrR8syCrFrdSkAHNwTa3YqHGoD32vBfoLBRbysNTzJBUR5FVG2nNNZtoN3Cx8d8teDzsVxhZ2hjFaSxSL4M8",
  "key30": "4XWAnaZLergQLxks3Rttnq9CNJp38t2XxaSidrYzMutnTg49sPmbV2QpVbZyXZKu4zSanwuQ3Mjm3i2dg8Qx34x9",
  "key31": "2ouQU5aHEPSVAad69RJ746CLA2sPGwd9c8nana9oByCyNGuWkCw6sjNTYMrjGtozD9UbqtFb8totEfHLDYhbpC4G",
  "key32": "LoSVt1LgTbYUsCrcj3gv3Kz9meyYfbt7arcNH75AG8n1XHmtH1UQg9j1xZPxFu1KZSVSsTk7tZ3uq1EgrxH2n7u",
  "key33": "5WSNRL17q6G4sCnArsx7btWdwQ9rCbTUGiubDYh9CMabkYnfRbCU8qH4YdBAxPVp9FXA3eGamKBrGmcKY1fBsj5W",
  "key34": "4ZC5CBAzHMXzvbDw5ZnkKu9Cd1V6jqSBmhHdG7gheie1MS2Ez8T3pMidTBkF1kRBjcMcrPmw7Nh1KNGBwXo1xds8",
  "key35": "3dubYhyV1hB6Af3YPevVHg7Sq8ZYWHqVtKaj5attMhuUKAxRVbMHX4VrBKZUvYrfdDPiBiUxuRtjp5Unb2dzg8qe",
  "key36": "3eJDnc2DCbDp77PgbKfPvSX496fWmZrf1eo1Kb67VR5p8MFdNDu89doWEPdb7ASmTDDkiypu35Nq6Q9BnxuA5xRd",
  "key37": "FypebJkDz1BMwdfc4ceHCL7nPNYcc1N45WSAH4xY5DyuqSmRnTD3MTuwZLBePLqzahQv4nAPwjfJmgN3sApxTow",
  "key38": "KqLmtk4NHUd9f8CJVtQbJdEmu8ywbW7MHkGA5AgPE9yDTLyv1GPfSjgEQEANGoX3VeVvkutdHp2gA2n7exToCf1",
  "key39": "3TWtCCFEJZiSDdUU83Bw9epR7FLFkofiBVVo7Fi61rcg2bs2zzVwUyBw2v9NcTuf6k43DWvfktuSyo22TuVhNMKe",
  "key40": "59p1wXZaqFBGoR3MyM1N2UksFPdHb4VAA2FWTPTt8bwhBn89W6CPHHqcE46RFBPKue1GG5UHViQgSyQorzQu4bLy",
  "key41": "5VnHTAU65cjVGdMg3zrwPdTTmLyKUy4zKVcbQJAAT489ibL8H69TK9NGuQa62skxWa73v3siyLxDVppyaLtB7RVm",
  "key42": "34VVf3WfhYgfAB4nDkHWEDrBtWL1WNRKTPj6xin3CpsfF8daR8Ky6sL5c9NhkowgNfh6tCfj2A5vFP7QdR1dLhxZ",
  "key43": "2M1VqNZFMu1nG4HgDejL9P7xTTdARmV8EfzCNtETfRZuLdhis8RNNnMBdniGJiST1r5LQVNvQYps7Uv1SppvFCUA"
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
