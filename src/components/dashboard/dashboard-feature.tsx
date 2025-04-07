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
    "59yAbr6saG1vhrS4CjHhuy5NBMPMwb23jojCDUCYbathCwzwFp4tJhTsAYFf7zcwE71cY1ShxRTDs55q3iQF6Ums"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zh7XCZB4YeQowwdWuFLKWKhoNHi5ATgesbBtKD9MzBW5FNSHgS1KJZXFCuo3CrHxeJdF3e5Y3f4U89PBacWNmm8",
  "key1": "vuW8XMUXiJqT4z1mZLoeD3eViG3NHJsEHaLPMYRjPJrKoy4Ythvr5tRm3ES8AAczRbkFwJHUVLSQuhaW3Yog91M",
  "key2": "5UCyvFwxXHb8EnFVzFYw3uXS4QExX78CbcMbsBwfsf8juDkmQtT1b3jPGmNTW3die8K7tjHrAnAcT7PG4RkuECQZ",
  "key3": "5uLJ2X27oAqnGKP21x15tb8A6QMyU8etAyrCZuAYaMnPowb5NMKDKudruQsM3pe9bk12KmmEUpAABzCVygNJRF8o",
  "key4": "5r6qRNgpPt3CGX7NzY2zfdNLqhxoBh1jU7CEmdT4BQua2NbyV54ZK19otEBWbm96VeKVAxx5jfGCvNCW7QNhLPCP",
  "key5": "2NRE9RmmybaJoadfUqtFHudwAiLMSAnsHnsxFuFek41hK1KnxKexEdD5Xxm8hznarJmC9AdrSVXTrzzEvCyAiYy",
  "key6": "3hiS82xnt8oStppoHGwkYgQC53Ch2xk7ETErSAFY5pdCrsP3EHZVDLvpVuhZLqPLnA4WTNaQos7ZCxjecg5RcmPW",
  "key7": "U2GDdZLJF1msouM6akpgyRGSP4AdKtGCrL1Fjr85PPnRpCizKpMXiW3GnD92u6podzoxWainRiwoSEUwckMtz1E",
  "key8": "38BPHAMHAWGJ3y5eaMhYuBu8KzgEKDuVYPvqFGMxKPVNE4v2p1Thak4DFySeWM3EQRNXdEkdf6nG2s4if3UCpKS",
  "key9": "4m3ca15D6TZW864NqmzKTt9whk63XamRDEbZzMRQRLV7uBeojrumGqPNHmkSnGyh5oWJ93d6NfvmoXxGciABjgNM",
  "key10": "X67aucu7AG6Tj9KLmBY8uAp4XCgUhrxhXUuMW1uuf4e51JV3GDhNFEBp1BUvDwzNUgyLFK8gUAwLLHVBFfpgYwi",
  "key11": "2zCLEBr2WAE5kfTVeC5dD8E5ZDngg8J8wkEPRH1QLptA8nCmBWkJN7tzw5t7YZCGWvExJRoLRQDfBkQ8NoPQfbvS",
  "key12": "21NpRcXvfuKdDaZvZgC2hindx5inrnbSa9q5CxmARbexrCmh3p2XpTH6uxYPK8GkPLTr1MEbJqjz9N42u5wSeVhu",
  "key13": "4SWhNZWiCSFsoK154yCb58LdjtEUcKsJSyu9cb5Kmd4RAzhCSaXg5qJ8P9N7U7LFz6d8MvFEMH4sVdw3A5jHGmTy",
  "key14": "9SNFKiuZyjALnQ7DQij6zkhNygLd5tGM79e4R1eWzsqZBXVuaPRnYmyBFh5UVM6MhKD6ZajJ3xWHrbgRrvem4TM",
  "key15": "4UnsTveApa6aKkrko7fP3jW5wrf2QtaE4yqFDmwSWKhuojvuD9vmDmn2uUSJ8mVzgpLqtx2Lb4rXDK7xiXj5Xzhr",
  "key16": "586uPF5btvEBkCtK6cihzxTUnJKSmtzjTMZ2AfRxrho4VTKaZhonJJbyEXs2xbNsb1SwCHFDPLuwPEvN9p1qZvF9",
  "key17": "2TSnu2W3289MNU8d6kpws86DT3N3gG9hoHi4urRdTrnFYC6kn2LnRhvr5mQg5LT5jpS1uG46ekZJCXKZhoSX8u8K",
  "key18": "5qxXA9b68CpFq4FmVieNCwdCEHpGgMMG5VZSd5k5AAdmWVmfvt6A6y4emtsphDkzq3jYwC38nR3ZxtHDb5JaomeT",
  "key19": "2u5m8dc47uhHD1sano2a1Ym6Bk79qUQ73bQEVhN9SXFLaeCX8VXhFNHq5FzRuLmMzbS8K7Dk1njqseHoQXopWn1G",
  "key20": "34suvWDVHSSQgZy9mNngPpr1k2e8Ar8c8VF6yYL9ZjQvqAYbQ9SyXijRHf6SB65ZyTmGwNBMGKbbdraCurejkvjp",
  "key21": "41LHeGFAPMQAYr9ZmQHSDAmNQLWFFf36issXrhpR9fzUvQXxAiETNme9yrquZ1UdVAM1LkGpwnG2jVCTWjTr5hF6",
  "key22": "5sjBkwwmuwqqxeKymvYCi19kQNSXL4y5nf19Xqiffbt8PMgdm8qXkFdrR5PjGCEyAUDLQDy5izESCuBeodaejHqv",
  "key23": "1CGJJGgQDwsiWaDtfa5MiTy9wa5vt1dYAso4DTgkjANks7sp1Vny4CyLcVj9DWVQTH9JXH2mioChwuvb6bqrduf",
  "key24": "3jvp9XV9LD8D3KF2WwXEUDS3dayKLTwBQ6RQxCN3qj7YHmRmwkomm5wRvoKRtgzxrMQm7hPWD3nBGZAMJdSvSNhD",
  "key25": "3sdx2kuhqT7Csyagob1XDUxptREZWS3suhtrxXy2RgJ1YHDwsZ9k7dDWeqjYzxagvCk86SZujzdTpTgLkD8eWDsi",
  "key26": "4Q2iQzHbctFhwBNaFGG2FmQrgs8koyAwm1drJkxG7LMvHNFr7ttfjAjnX8mNzQTV2D185nNBcyq1dq7wXfUDkweC",
  "key27": "3Lt5o4JKiZgvAqLZ1BTgR6a5ysFNLcmWHFbT7wwYKtEba6toMu2JCvTAPRkSyVnKjy3JhmWVHjRdHyD1smcDJgq4",
  "key28": "2Ajxpy8a9tJmeAFsTU2n7rCvXj7D5n6uhEjeE2NgHRS2fDVLSzMdpTACSujGaZQijWXjrbGp3jyQfM3AJt8TkGav",
  "key29": "3poXUgitetFQwQ3aVPR8r7QnEX3WUQyuzEzkY3dmRRxuLSYyWYS6NvGnjvCRFiUPuAyxqA2oNyubzyLTcGK15X6Q",
  "key30": "3xfp1L28MiEdstgU6ApbKP5UYMGqECU4ygbzqtZ9JGYk3v2Gt1dYCJj5aYUeJBQiU8o4soNhByQkz7ZJcYxq1QT",
  "key31": "5ohBahzBGbaTwRcFqoWQguFQJHy2pJVzt3hSURgRTLqFNnEeFhgvpBKJ4TUhqyLhkUCVPmX39bQck5Yjru3qFath",
  "key32": "5C6aABpkcVXE6hjK1iJQkWppeJANJxig7F3pSxXDKaXT66rEKKhn37rRR9wQgUvQ3WkWEWvCx6SDT1itCrXBxu2L",
  "key33": "51yPp8buZ1jxQPFHVrtiPuYt3sX6p7iY2MM9GXRLtUNSB8AVH3G38i3ZRCUu5tDd3dig1bHXBdHGDuUKme4pa5bj",
  "key34": "3MNyDfLTTUWJKdm4jG3U4VMWns79SM3kzEr8MoJM6d6dYeuRmyinFWZXE3u3rkzQtCYCMKcz9HcyamC6RcdwHe87",
  "key35": "2BP9H6WMBtzXqpJ3do8QkwbJRFVXYLeKjW3X79xnzoYG28xmrfYvchLkmed1YCzPyEkiiegLuPDfyqjSnsxtT33L",
  "key36": "49WwSZBKgDvVvhTCY1GNFGHv7iD3SeghDiL9AzQFm8iPEYNm2CsXvpCqjhiN6V9QJivVndTACpqYuE3FMcjSXNDp",
  "key37": "2gJSVaLfikBzpWbEyTpWqPyhVXi8ANmt3kKxPdSZMt8mLBTm6hMue7Q53k8oceP2ZXHgHSBzg5afgWPtm3F75L1F",
  "key38": "27aBcxzR4EFn4DfxaPeWPFLoUxBzKpncAhj5qNFbiUYpMgw5k4aFPyLnHR3ReHCpDFfrgAJi3mRJ3vPaK9FB9J5e",
  "key39": "4NXJFfZ5XPSr4SYyyZD6DFjhjkRbYkCMYMdKYmxcoiwrXL9ccg8nMXiD7sbZyKS2YcbtNbcMkY9KrxuT56UgqcT7",
  "key40": "68uFs2V63nx3AossuxqoSL3cHjx8VcnjAoCEzTYfmAr4T6axmpvVwYhHWfYcyYfobG5XDaSdZXAEveciTQ5Eqru",
  "key41": "4z5KHCoseXsDdkqEYh8SLv6wresaKE3xamUmzDRsLCdWBEfFMFKQc8xFLVxZdFV5LV2FB8Cybg9pi8CHjrLusy71",
  "key42": "XM2JjbvaEK7Vgp6idCAgsxNL5d3EnWToYQqvnt2PvyGM6LyEiVTLnXzV82uiTAiasbgp8Y7xAhrM1z29JwBYECS",
  "key43": "3b52VC25q923zeLmq4wCFyFmy2QrRSdjqeXV2GqzNAnsDzPHvEYiKr1YWhigvei7vyf2paLG5qukvBoB77h5j23Z",
  "key44": "2QrgUb2WxAfTcYfNtDFZG2PfjEby8dsueLuwuyR9oYVBXRsFNVA9MhJBYvqnvtGsqZuh3KaQqDRHadHXrTEtVEcT",
  "key45": "3YL4s8tvAYXScdDjukx9j1aCL2EYa956GHcHvxBLuZ49g2mym7cxT56cK9LkM2rasBFwN4EkEQmV2rx2t6m6Xcu",
  "key46": "5ppjbjkG7Q9qXwbSM7HzUDKcgd5eLgaYvDV3vBrfX6eYygCQ9Pycr5yxyasewSVW5kMLEATKwfZ6vsenKd7yJgHT"
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
