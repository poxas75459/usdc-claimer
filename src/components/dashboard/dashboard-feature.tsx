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
    "f5mHAVkjLPhWeiuaBnd1ixxs6mw3AeoGBaPJQYjtSh8JD7RFxhUK4vnyBJMALceu1iorbwgtYFZhqeLPjFSZt4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xCszcGadFmCqC5znuAFiDenpjWmb7NuRGPDjzcCDb82hq9eRtjXHPpNepAqx6k5HPxjbQFJPmJ8gXKqsMg48djJ",
  "key1": "3YB64w7zWJLPX2tS4s2WHuBsQWchgPjcsHfEZ4MHjirMMANbLpiGuwXmcMyUgFfEDZooqcC9TWdoPWCSsY93aHXh",
  "key2": "3Ptk9c2kdeSwTXZTMUKJVWgG7x4S2qka18Sn5YezFMJYL96MzJtkjZEVLEtwMrVgGnsmNFc17uCEg86ktKrK9fnQ",
  "key3": "4E9XfwPqTdiCrM8LGJ18r3g2DQW73zQ3cBg8GEsuFnnDJUSL4RRGkFDNN2Ts1zrLxX8rxgHdY1rvfE3348PuZGYY",
  "key4": "5cxfqrKPF5fUHavqA4Ej4MkkgXzg3ZJDnVDTtVn4mN3p67s7mWjvYDWYN2dhcLYsqaDLewShiqzeWnSz9zUto8As",
  "key5": "34JHgXGL8nyWoxJeGkCvUsSB8H9NxU7hY6kbiCRK3t4tyHABbCd4ag3UG4HFHKp6bUUBamTJU1icF55w5rFbF9ph",
  "key6": "5eigYTnVm8UmKqu5EFewQdWUfCjoJtaAcLi3ZC63f3BZScT4CcFajkgvjoZo43LJ5w7sRPK9GzmKGQ8cWwsYGS8a",
  "key7": "4d7Gf4H7gGwSGtgSNvCCHrtVwWaembc5UNmvVq4QQCjHu4RGMVPGyrGSGkU1g7JRRC3oWW3cYboZcP5GGZwnyAGw",
  "key8": "4NgoN1g5bpnzG1YPsSWu9FDASkSg35XFGBwzDCJZ1hKQ4TC7eCNweLhgutgUfHfApWk2b3vNgCAoVakBr38qoYdq",
  "key9": "2Y8PP1Nt3eFFzXz9SReK9Buhhos1CpRTQMNmjhMwd8sYcCVzhf6RhiL5KGCqe2roER5WsW8SERRB56ss7QeeAZ7i",
  "key10": "2SmyYigZJ3hKiPJJjGjMsE7gpwCcPiD167FD9zg7TRxLhQKdQJKGnpBDMyPZpsQduB6mK8XC5AQAcNhC5N8Win3Q",
  "key11": "4tyifnhAfUs6mEpAhSmu7HaLGDaszRCH4hZWU7fcPCBY1eC8DfeUczHUAdvtnF3wiewMXfuhhkpRP8K8u1JNfCsX",
  "key12": "BTAfS9W18Bz5frg2f71WtfzKwW1Nv6rB9KU8HMqpeSXuQ2hFMvgtuW9iyjzDvLsVScNNPS81yy5poVddZy8XPs7",
  "key13": "3rzsfg2suqvpDncnEesGdpZjiPkikMFiLAeQzEFQBuYvPwmgABLJ8eg8HQNTguN4aSkDsUEWwosgyi6FM6wkTmtP",
  "key14": "4xZ3GPiuLoFPmcRGYPcv7zF7LiWCVhKuHsQGNo7dvfTB7MqNxFQPi4UM9EgjBnqZay5NMGFSnrs8dvAJvchAMQk",
  "key15": "4oG75D1cmCmyhARiWu1tA7Ws6Hcw7KN3vqZepuxWcnvYgPFLMQHeQ8MtpUbFnTjoFa4tmdDNJ11X17ojECAEVKnK",
  "key16": "Hdh3nSDkuV2YoHhfoz4Svkiw6bkE51CBDrcpaPiibqBF1z5Z9uopY7C7WooGzrCPdE1PiLENLwd2GmTMLMdNnJ3",
  "key17": "48bapXNmRZZ2eJRsdvLM9cYyYAstFoc6mmzFijeYVvHpG12Ktu9BN33qgVY1p9UBmcLHVnaaGh9FQGsSaAMKBS8M",
  "key18": "3ER6n5awLBj25RrryFii3CgFAFgqHWrjtgpVbqkYnDcYiYJXjX1vztWhQ8yy6Kgojg6uGEuAVT9tCVH39zcNqXWN",
  "key19": "2nVYgxdj5rTE2dqqEZd2McmFsVjPcbYWyB842PEpDbVChbfwfkGaSL9u9mgHiUSvTsGyqcovhkWqRKi96wFVCjVW",
  "key20": "4sTeGwaKXBL87ym8DF8kdStka4k7ogAMFNzNnTa74Z4s6NYaZd1FoMVxGf9Ep7N6YtU8JCXE8MCJFxqJprdB4Vca",
  "key21": "4grKFH11TWMnoWDLmJKRbvyqmRpYYa2TG4vzThHNiEG2ZazCdLaK5yWkds6h2Gwr7Cd3YUm3NaY7mdfT6QR2fY5Y",
  "key22": "3fwaN3CTPXGQAQ6s4kBmCULvnGgvTxwBP5SbTw8bCUq2na9JFadQh2yEymm6e2yRNVF1ghUGWSzGjfk6oimustkN",
  "key23": "4AMZ3cbnN9b4mcBgPXJuJLHx3k7rqXRSqChHUQeuSXAuHZAS2tDxph1xstFg4AdRMGzwGgR127cZxkSu7n1L1YHJ",
  "key24": "LcWzvJ3sMCeeSHJJ5ht4kbZtiNvjBPfwuoiXVXgJjF8CtJHq1C8nFga1oUSefUiaC7wj1taMuhW5jSGNvvQyaYA",
  "key25": "kgtAipKYDUtXHko9taDtqTWCXfFdNtFAq54nYZQbDjyzHEmdQFNfohBe6Kx6r1otGuGE3w3pqrF1x1GhECcvweC",
  "key26": "4cUGm3y2CbEHFonXFumUw1z1Bf6RZfd1kt3DvutPzwJtMjMYYB2rA648xL7yu85gEXZx3RawtWobPsEVnzFW8JME",
  "key27": "TgqvAEKCJzb89ikBficXVtFzu1ifJTU6D9T61iUNs7ui6YebqLLJV9if3CSNP8oWysLkFabgrMhoKD8UBWf9yrj",
  "key28": "2nRiUHuXFg7Eq2nTcpyUF9fb66XLiPHSeL1LUbGziN3RAq2EkCyRuGFf3voNzoWtCRfbn6RNj6DkaVUCQ7hNeVBg",
  "key29": "4Jx4SKYEWrax67NCjsw5nKthMJKs485F14DfV265D8vTNX7WwuJrYThtuEdWRcUnt8jj6iNjyRKJyQzxL1S3kE6m",
  "key30": "5Gwisy6LoVuzzqW1xKsTfMspWByj4d46mmfZHkczNtETTVSBcjRMpFwSfC4TyCFrcbgzAQQWSFqttS4XGYvPFAZd",
  "key31": "5GzcLBqgW1KzCxiMoWNVGfuN6asu8GRu7vdzrJtF2s7oyaWLh7KLQocH5rZUb3e89ZmiLn2u7TN8i1bxsfvQh2vL",
  "key32": "4Hra3bQApHTQzDMdEfKHpyerk2Hh9Z9MbaJ8qMX2aHEpnAbQ7TZEcnoWKScnqhxozJa6KrEyH7CiWaChnKsgcYjT",
  "key33": "3k6dhDrkqusrasUdvFGciYwtG5AcSWfWpVpwwtqw69Ke8cPmKiEXiL8d24v2D5aqUZFsXgZ1ZPqMntJPde5SP3Vh",
  "key34": "4Rg96KtVft1kPrtiu2Kwewa1KNDWNjE88p2TCAqHVYzoHa5qK88SyoBVLpQV2Ej46h9KCd4KDsefrbhrhiHSXVfy",
  "key35": "51pLU9wX7XZVkCFxr768KtvHvrfxDNW9UXseCexHbQ3pNT5DtNoE7axGUJczDhvEqiDE5TQEUQkHswkMoua8dPyk",
  "key36": "2EwhRDhZta6XYxGWR6JgqJdcpjszE819ZCBSF1czF9bYxbn3665RuUuV6yoC9PSbej5BzHFisrpJJ4G8RHx8dFRu",
  "key37": "2ZJHA8q53HSCCF9yRLtEmAzvgkby1dPWz9jju3RhDhKHgTNK7AqG4DkRCswNEoHB3XC1eE5mKszFGXGg6Aadmo3p",
  "key38": "2GvMNcURvALsqCf99bfNAVN6983KL2hePntnBqzLh7WkkvtzvDhLDvT17b2fjNTURkmEyoy1kzVWSvoWgySaLF52",
  "key39": "3iWZvFLZAyJ37wVQ7JWLMJe7GLGuRELq6iS9bJq7cVpKnes7RALjZxs7iRGkXnUfKQNZeiJ2bfGYWHiYw11trmPi",
  "key40": "GgEJsY6zBTACnkTrb7vjEzW3m64CuwRJJWeUBvagJnUaxyLjoe11Pc2PQnxpnBf9eLeHJNkHuAUe7wUYPNv6GHM"
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
