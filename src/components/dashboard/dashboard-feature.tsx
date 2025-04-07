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
    "4URH1DjRsyCaDZv3523oUtpuHAbeBMVFceCR11pA7CRjDN13udziR91uHp16SKAmkYxce4c5f3YgMNNB2a57P78Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tfJ4EJgtNSS7YZUMT15GTbf57MLzwiyfF7Azifc7gzXBr6Bq1YHL859DMjcww4Y3vbrJWvMxKf1kMaYNvbQcKb2",
  "key1": "4RHntRvvXRKqGa84hqhTEn2UynPaZwLvFjDnGgarZPVS4Q23BrXeGfcUq5bpts53HS2RZbjDneXyGpmMCDQXpGRu",
  "key2": "vDtVcQB2TSkyux1ZRSSFmJtpZxCt1PEgu7hbEdSvXmHqRExQ9LGxGRSnPWw4geYZYrR8qi7g47cMyjECMuuAEsT",
  "key3": "2uGhFigcM6pjEg2M7nPNiQdSY17iL9NMLUknfzvHyVorrnddV3QdekHDTfaEJk5QBRUCfBU9XtBXTGbB7WxjdupU",
  "key4": "49JTk8y4X8RqnL5Y4TvQFFS2ufBkUSKREdh7ryMVb44wtA5Kz4KGd2V5AficCr9b777eii1BYGKuu5QNBi4XfUwk",
  "key5": "5rM9mdQk9s5LRRQkkiZS1TphMMH4n9t37upd5hmW9shoMGpfkVraUTjBqTwVQVkNzqrwsKNRqaKZ9D5PcU6EYho",
  "key6": "2x9pp3aDh2KHJGYimZ2DnEPB2ZZQYvCH3Q4im5fyby2a6eqAz5x2YMcFnJcBUTXuJvrajmWPquRrT24x9pmXGUru",
  "key7": "47vVArcFtNb5nCqbXqLSybLnVGadC7F9pravXo6Had1geZeGrfwxShZATeSabmd88ayqLJmSLdQBZ3HQxo3QkL7t",
  "key8": "6cCxmrudaCZD4rRhzB5NBpWE8rE95tSqEJHtH8j71swUASSh7YRsWefi7NqTDLqnfFFncpDZ7AT4PWG1Nu775vi",
  "key9": "4RNFq4QDx71fpfmxQoGuV2muKhQFCEmw6hcGtUx2EQuVeJ2SvU3b3A9LeXatRBV6Q46QvjGSeyxGMXJ5c9TtPTRf",
  "key10": "pdnS7UndENpSVahgJE7hsNeoLpSoHwTiQ45Ve8gFsHNFBjGEE3vhr6T7D4M2Bh95LGhRFiQwYsySPyWK8G5Lfhg",
  "key11": "3xXfxrcREKDskFMrdSbN6gdSTGkK5jSPjHj3pk8vtkwneJK8vVU2gR24UMwsF65PQ4qCCiMqMEDqd6ataw6fn4Tm",
  "key12": "gPxStdQr6f2dCGDBGTP7bJmuMsCnVkpLJKyzeP16u38zbJXi4cBLTZiSYRgNcpY3UGpsYSN6qXXKEYnrZfBXM1t",
  "key13": "3jfubZpFR2mWiMTba9iAoyA2WJQjDYPvhdJUxvmSEKVeQpZnD6nLWkp1fq1Qs1GiJ9qjkRXaHxzgiMe5WXjLYfrk",
  "key14": "kYJ22WC2ab3on7gYecBzfKAox3dds3y9n3cZ2bSMKdAS2yU4pVaRA1sGjZaDHKBX7GTb8d257uxXpQH9MxhxQZJ",
  "key15": "2CZM37CWqPFTYX5TE1aV1D8kRzXt8RnKYpU6sxcq9Q6cvjpoQpKYYsHwCChgRKpXqT1TxBratLqGv8pagALeD6F1",
  "key16": "4UDUp1wURPs5EK1CpFVxBpCJ3BPUsqV9SRBiLSXPXGqUUFpnG682T1Ept4pm4UVuuFXEN2DyT1xUN3FRxFiQK7gZ",
  "key17": "oM77yiEq8HCquoWdfYheA3dSYd5oJiCabxVW7jAdSLRueJHddrYkojnYYAGTvqY2kwMpB2yxqCKU8hMuxTSnv3U",
  "key18": "56myZuT2Qm16U4pxwTyCbWNpFkskA2cSd89kMg8bpV6macfnLjgSzeFGGgKNX2nJbar6hnQTBL1oogbuUyBxYmzx",
  "key19": "bcQXMJPDMGeUdHLKSsBhf2T5fyo95RndmpVURiFWAGhtvnjxBLViFbQLUR4YJuYVeim5FvczaUwBoFUDHRYaZPn",
  "key20": "RwRAwXFjuDT8MuX1QRybVCnzW6TqG8LoFbm2gpT1YRTiSBYAJJftLXpxEwasifwqujwVkkyX658y9osYUEj4cUP",
  "key21": "2B1QJ2APc5uSxuTSzo73dCw7dUxZh2w2Sorz98Bm9nq1igjXiSmh2UYBtPb1MPEiP4VQKQqUHheKy17GHR8Qs1he",
  "key22": "54jNZoWWHfAh6zu9dNXMVPpY5gjcAFCXXV9RXZfJRkRAQczveLYL9E7c9K4nGeBMVjFQUEPd3Uw7b4gjn1TQ7ArY",
  "key23": "5uyJcG4tFCpWWPWNytGmShsrRs4rsP7eQgzDrJkpoV2XY2HVZuMvmPaQw65sM4YnYH4asGpNQBSnLdUE1iYdtoTK",
  "key24": "4EuFm4Kbv8wSf5K8DdVHwjeyvvKi52BuzpmMtsZvvjJsAdcwg3bvZzu3oGG4FxpKL1urevXb8vWvS7pHGADYwbHD",
  "key25": "Nzs6G7Z1LyQvx8RY5PoQhvSFg6dZ1ckEJWVDMP4okDJ5tYX5kJAfh9Tok32Rm6dBsYkrcoySjJJKhVpC78nBsvT",
  "key26": "3qqvtmSfRncRnX1VD1Y7xMVH6wUGRLodsk46TNASaNaw67awgiYgzNSvzQLFZbLGEpNkQQXZQGtfAJMrxFGULnn7",
  "key27": "2bhoUTqTcQtcxWLtzWJdHgaxXNV9ehciZcSfK3ryjCbpXq1AMs9bzKFgfzsA77XpRcUtWVfLHEAQrGhfejJd6Fby",
  "key28": "rfCVqMn68vZU4zU6Kqtcd1JeNA2YB1HmKaSYjsYixgBuerAxFUFKrhR2FMQRMArRarXrXAEuebToHnAQQuRJc99",
  "key29": "5tUq1aPnrutCzUftMWwRuT3TvDZ7tv7jAvzrnHTSzZj2ddKbCbEZfnvscDXKrrTqpHPtXYxvafFCfeNLkKrrkh2P",
  "key30": "2WRpWaeqrQp7UqJMnPNwi4SKCF8jwV5wUwvjMoaQEHadB3vCzsByRagZ4w6RJgskUVw4UDgZujLJXoSvJgrSfmRh",
  "key31": "3DPMzzNUMaZQ75XnRpKMMbk5TZiCKJ31Xk3tvKuB6ax3DXVTRDqtx5MPZZc6iyaQuAyvy9ZHrFWVtvjtACu9Ynx4",
  "key32": "2AjVdRWcVgRyXUX23xdJNmHAg241jA9eCRdHeYhjPw2h1aeo7bwfTBoBXeyUavwLfmbu4boT7Dm3adn36fFQWUmj",
  "key33": "4QLwzFGDdjGHwKv51bJuMG3XqgiLW4BAHGugkyVs7rweWBwdnfk5x4DWknkgFcJftrLWMLR9142qNfTEJZvLPN4t",
  "key34": "3ZsXMSG7fLqXrTwxtrmoQrc8AjdAc4F1vKRXDvY2xvbeLdvzEvgQCb8L9KcfZtp45JEYBw1aZEBJtBoc3b8kTvVy",
  "key35": "3gTJ6XjYfGZYQrktc641PFCdKJT6EtGepeP2TGuNYXgGGCCsCwufHrC3aPUaqcB2jpP3nG9mZEmzPYpRX8G24b4x",
  "key36": "5sJXYFLwr6c6WajtK5ptdM73BqK28jNKUFNid9Q1YCG1bJrCQ9ZXtoVGDcppKnTEBiWkpG6K4BFc4yoybLyFNuRd"
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
