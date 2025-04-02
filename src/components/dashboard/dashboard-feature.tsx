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
    "3yyKrRonnZgYHi6tSckbZi5RkY3X3hdTm8nqVAvk5iwoTTHabisx5t7KvtsvbUCDYsiXxVKjFHEYZKyjFwp7phwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WT4kqMWMTRrQEqbreLnTQss8pV4AjnhbdAnm9uWEJJQkpuCu5GbY58PpKdWCAWgFwRoERWANYk9VWgMnFqhSMGq",
  "key1": "yAH6oXHHoNMFFD7tjuhb3CHgaQj6CcjCcuCKJxMdo9zeTzqjRSKQtFiJV2goQ27tvg4vWxmsgUzwbTbTEMo9v3g",
  "key2": "5qLD1X7yor2S9HQJPJ7AMZVx65Ruz5fnijttHrbe9LpSXxkuftHruhkPCRtmyiQLPB7TepJPZaGZq5vV1Xcnt8Vg",
  "key3": "5reJasCyGHsSDPn9pm5v17xjHGyydzK6Ms1AVaKyp2nYi6nHKQdEN1LcrUXkNszVfLdurmyhiP6grBDNdVMinx5c",
  "key4": "2TmcVT8qVNhrczg75GVt68DGFTjknWHpFvSGrRR6tWSW58tfuxLKSRviMJb8ZrxZNbyqnDNdUc3HhHugybufjNuE",
  "key5": "jcEa1sSTZQDzC52mdxCzzh76pCdev975CLtbVZSZmTs33CgKVCZbydmzcCsP9fhXgJ3PU9jFsZ5UXYNYDS1Jtbu",
  "key6": "62biepeooQbc1s3hHcjjeVZefQLR2ncZmFyY2gFtJkzGGeSMxMoMH6tukuqNiHvjeaeTmwJZLHdX9Majkmyc1L2d",
  "key7": "5SPFReJjFXrAtrkbufXsQ95PiFu6g6MrRrKtdPLuuxTEwJ8vDM3qrskXuxe3iB3g1Dzuc8DRqLodDsNwU4UiAN7e",
  "key8": "54qSptswxPBzmp41NRmbcKYSD218gPvhTtbmeLCjjaXTAB36T2tbSXNW1FWpu4dQa9tAx8Y6xSb2QD7Av4DNMhDc",
  "key9": "GB52mugk948PEAgwxsaLdZrMePWaQaPd8WxXyFNN6Vq1eBXBMMQaWMSLtWQ62tr8zZhaHxhugiDY6xAuA3PzLhL",
  "key10": "qxQb5YZitjw3timD6ZaBd6fTKhMzf45YvXJuNDsEniQ6hiwDvfo3RihVcjReh7xmPxhQpo615gRQhAKtQ4rgwuk",
  "key11": "3kK8WcpLbaVoJLcBrio4bPFVnL7JA4rMzVRH1WYnbmfTFv6hcid9tVRFXhhoNdfkJTKVS4Nxbc2tk5wNiGKBxb9a",
  "key12": "5ZTM3QKbcxzBk72EHAtbJoDpc2XcVQptfrrrPQinKJrvb5N5DEYrPjX2Q7tMRNiNY9XFNsEA8k24bYYfUy3NSNbc",
  "key13": "4UJj7eJUrzcUBBdKfZU7GLyCJrZYY6wCms1NNwVQvJEubhA8TdMx23xCt39sEyUH9M8geHCgBnFvcbiUmarqmrV1",
  "key14": "4op6P4dYoqvA6DEUSzMQDJpDf9pmjchbohDnYsLgeFYaBLB6LMgkidioK5DfSt4asoNbAPRmjUCmyRMeTZ7LoujV",
  "key15": "5KSgd8LKeAgU3wuVbA3nxsZqhQZZeGvjqkva91kpyeX8GrjXeksoT99J7dhP2nm9oAJqWex2r2wcWbvUxsJmQTKu",
  "key16": "5uzSA5fXSJuYNLZE4bwuzxDe5rEu25xzs5r9pJvpQzea257wtZvYe4d6XvEaS53dz77F3xw4kbfiLz8HtSB2dLGt",
  "key17": "3WjCdfLnv3vC9DvMxMSQTjr5gkfhK7D83fQoQmPiDN1C8BezRF2rvN1TMKeK1ZFJbdkkSf9LQBrPKTyFLJEGqmeF",
  "key18": "4NJ5wcWK3nc7mXSXJi4pX92pM1Q6WfuSJ7NQULv5CSemZVEnr27mqx1LoD4BF9RiAvPjnWyeUsuYfW4LCeWJQkCK",
  "key19": "2NBSjM9vairV6pLh7dS2xh8QHNJJUiUA2bQfyEPRYdX8aNa65j47ctCGKr2gxGesZ3u2Kq3A4fRwFeoqMk5gRMNr",
  "key20": "4e88XTrqmFq5MgGm8P1AgFTQduYC85dEw9mzMrCq2gRocXYZizApZe8nwGkYJBhnxGLMRRknBEAMJyxx7eW29P47",
  "key21": "CtHp72PHfiBSvSevR71qtQkNjiBSjy8VFRYQMWA8V3A5YtadPbU6j8aJmRb3osqjvAjHsGnXvdfY4QtXGPiWxnp",
  "key22": "4anCYqRMNxKp4BT9RN8mcAsiqZdQywUjckoDh7ahiP352zZ8cznCpuapGp4j3yWJUAwA5DY4rt2hQijJgQG2mdDX",
  "key23": "2jLSR8nCMGS62aFkUyJijoVvo5yVsaHHzYZaoRXaqrYMbmJiZemZooXCtrosP8amKbPsJRuHEfHScAcNH4pKPsgn",
  "key24": "cxbe9BsY5qf8hQPtPEsGEGzxKV7Souy2zWTYkCoSGPcdMCVyomjDv71cdud31ku5wmiGKnnScyPHE4uaMhuvDqX",
  "key25": "25eeHeJmYBtv4aks5R9htW4aytaLaczSWV6A2fyV8uG1iEge7tPVkff3nYmWZP41NFpCwK3LhamStcD63Gvdux6G",
  "key26": "bQcJdzQCw8SYfY8T2PCCMHbBGk1X9ivs5jDbJGWRJsxtfJsMt7e6GEkgNxFsxd8oAYh8CLNwphQddLaET36RL5w",
  "key27": "37bupLfjra5VqgTtyXNGaMrVV6NzowXfi1nbNoCrofWAkncdhBw4WQE9xFErpaNQav8E5sRtRBCJPoXGsoUrFVL3",
  "key28": "3Mbz8czdMgXLQF5L1aKYuJRuPmTQ1ZVpHSM311uC8GP6MEjc39zQodUcDELruajDfyF2dxSHtdpk68596f9SrU64",
  "key29": "4QT7mgfeBeJdFwiUGYrt4fGG3yDy5WUEgHsCqurAhoMKZ5eDSnxjBQiB1QroziwMRJvjRiT76qkkozVDHjwXxuPQ",
  "key30": "2asuGs5VhZqoP3u6Z5vJCoiGULh6pkawgfeNhL2RZdLQGc1dwu9986Gmdw8tgZ459ZrB6aeQMQwWHUuoDhu9ui4A",
  "key31": "4eusS6vFaiEZyyo7FoPwMoCwr8hUPbo7e2poU1Ju3pDzp3vE686T15BWZ3jKZ3yByAgSWQNMRqmS9Cj62h55vwah",
  "key32": "28RvHiSMgAgAVmi7WVKxbAN1L7VZRmzcJa7Qbw7z239hSSSPz6V8meo3qsWXeAAn8uPV2vxKcJqJbzUBTqrQHH4M",
  "key33": "2tUahtEkTcjyV5wuga5RkJLR9JFTtrjpPNYpjfjxcgNNwnZXTcAd2dH1YcpQRNYYVoQ1R5ssDokc2KQySSNszBPH",
  "key34": "BKWLiH1UGw1dTMLosC12BTinUUQskZsaekcma2s7yL1PHknwTN4TbmSAY53B4XQBoQKWPWbUfD7useke2Rrcr1g",
  "key35": "5BggZ3vS1Nv12BVRcoDjuZdAVPPMzxWkq74etTSF4wGovRQ37PMKQ7Qs4FuaxfYakitbWdGr4r2eJQXfg1CHVzGY",
  "key36": "23zcGJxdB6bEaXJ2T8B92Kh2YYPSQYnRLuWDeiTXUjwQVcg997kSmPZCyDGnUtdbNsz1VBcmX8PdV2C86Vz5FrWW",
  "key37": "3woEZRj8BQTEjadun7rNJVDAWEmrZWSEaDXDxz5kj7ZH9iAvtYE3Tn2wFV9bTzLLtZFSCYiX4nngqhRDyvGr8DXu",
  "key38": "5BYaCmLuRx93KgGWYuLv6X34QAMcLfgBYM5hufyvoAtdjnRqMa16cTtSJpnrRwWtsiXg1h5RiFMwhwMDSV56M2cq",
  "key39": "3z8D56QEYd7xFfD3quEiB4kH9W11Cgm3zQYkFiJR3dUQWVuFr99AStNHg9Avb6WEpqHdfiHKerQXNmpWPQFd6Tud",
  "key40": "NLAtPnnc8KibXUAZE9epvdgKwmab9eK55WKLorU7Hi2kpGexMp712qPNsbQTm7yRqzr17aKjVZ6yNruvaeKcK5j",
  "key41": "2aFY72TE1XURA4ihjR25xTZrfL22wPrvR6kWgNhMKNu2r233LmFih5DR2Jqk6cgEH3PXrM2ajFhBZ3z2YbdJL1Fi",
  "key42": "3yRZf4Nqv4RTygQP8iNmyF3XakdBZGHjL8LWFYV2nqz6cxMWmikhATLhqsVgnuGwtzzgHNFnJXHuyYDX1odVrAPJ"
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
