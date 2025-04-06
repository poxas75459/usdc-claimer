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
    "bCTsGmX7eu5aECyoFTvLjxSKgdCdmqerZkaYssJLr8JDFyKdvWK5fbMP1qtBYP4kCVWHbSNRfCALXR6vuTduaJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fvCPYssJA8KzVBFYiLQQTG3ijEgX59X1HM52PgQSFA1NPTeJPHiFyxYaBcck18pR2nyewY9MiUJmTQGfPg2Umd",
  "key1": "oqbmiJA8q33NnVyQguKoaZcJDZSfzZEt2dyEQnHUcTH15RXvkmnevxLvuDmjiNLgxhJaniRXimbEH4yZ91AChG5",
  "key2": "4xiZDHyqJT7kXq4hBW1B9VKSXAdMRua88gopJQ4NACs36DcVVjqtzYBBeigSw1JtuowE9B1bAXE59jygHEdS1qQ9",
  "key3": "3ACnZLZBid7Qreq2V9i2W6r1bRAHokKgLFuLdaaYFFzHx9XSm4fB9FWu6jbfwnqGsYDYj8pLC3iwoVKfKkAxLKYM",
  "key4": "3DxM6WqRVYMswjLe3dVoMorZDxzacCYThZ9WhocEZuCcWH9MmXF6EbkznJgv8hBkSmN26iDRhGg2ugZwx64zjAvS",
  "key5": "5eCugujHxoEkv3Nnz7M9wDfbcaxBgdgdq8jdFdKe8qBoqGwfYkqYkeKMH63VuYwscenHJjPTEFq8geSNPbyiC9Fv",
  "key6": "3MKPqjcgiMjkphBDaHYn5ZnEkUvy9i1BPEwTFJnFwrdLRFPNxUMPTeJ7orGHG3nhDWHtpwhHtuXfZyqZqSpTa4c7",
  "key7": "4uonXEYsyKymeNTYqWsbyTpgxFyKaMfCWJe1C5sVpyT1nZtwBetYx3fv43xsWn5Ra81ydQcXk1D8FqsZGGoe5vQ8",
  "key8": "3zSihU2hm9xstmG7VW25gUAfjDAhmvL76ztU5kFtZtWH8gS8gqXNscJ6GLwrkBRnaDQWyujvJmPBVsQyBvd7Xs7C",
  "key9": "4rQJz4P9x6N7SnwXxwtJa4WxzbDBDvbi8kdqK6QVSEvLyYX4khHRpoAEjEAKhJrYP41cVTgj4n1ECm3KDAk7j7YX",
  "key10": "5Uf2T38US4XPRjhHqszcoHybfL54FHnRjhwENFyk3z1ygTk353a7xsrRntbMEwytxMzk95vFS5nFXreMFzbhhYS6",
  "key11": "3GjSXrqDeSpRMGYhMZ2pF9Yyo3ADYi8ox4QPtaPb1r26wdfp7UugA6Em5rmqfwxdBtwnWbfijGe39nLB3eKkLuv6",
  "key12": "489J2uew4ouXDoFtQhWK7vFTgTFRNVq3wxuTBWxfwDXZ1qYmNFDX5eo31xzyt5R2bdfvJPhRNwevd54xCcbXYBWo",
  "key13": "4RosSYkSzeAQp3aUGWQFwae7oA5xnKpNarjVVJMWpDUdXcbrJ1gP5ZN4fPz6f5mNVvs9ssFJcS98bMqeVJMwNBK5",
  "key14": "4md4cujn5iSiKzZKxfD9BPPjRWk98qoEisEmv28kAufpcsPMUvqux49ajmyhLcNPZj9oyVUoH3cMwFivNpyRERiM",
  "key15": "44G1bVh8NTLkTPfKfsqgHfzADYkjtrUzfJUQHGoXoYSbeGESUgJfzBkKxeEHhmXb3khxtfzuYinXixhnrphLMs5P",
  "key16": "61vdsjTGzKHZsyFSPTe7wVRLLNq7Cy8PqGBt2GgdcusNLcxzHefJFi2S8hFU5bUNGb6PFs8DujbtxYT46WXE5WGM",
  "key17": "5S7vk94f5GwfsnKhYdtzmMowBfXLTfRRsfBRfu4dgC3DRgtdNRqmhArqQkmWrGXGo4U3kSoXw7j1oAinRkE92kNM",
  "key18": "2EvMbCPdWfXwcqp7vkVdCSovN41148PSMdjNaLW94kVLX8RTcMXePiMJFExfL7dzuCV97pSjwms5sMAS78zsYVNX",
  "key19": "4CguTMKLh9fJQGyRxWQwdCDbseuZf8VWC6urfkVSmc4NZMHjNNHpQYAawuPACCrWkzyGi8i76Kxd6hxSKngXyiFx",
  "key20": "9ekRgYYewxE5LEyfFaLFdDMpGvmtvRHRh2q6X9j6trBLarH91cLyeWAQWxkahPZd7UJHFnyT3i8k65zRun7kBsp",
  "key21": "4yMAoqvZcRWc5hd43mn1JvbpK5mecjC4NZ1kPopsEB7oEDnavNjbnEiFmZbsPYxNXaD19eHay6TaC7LsMsVC6UrN",
  "key22": "NaZMpYji2AJPauQZPPpFAycM8RQYCDrSsWRSpdi5epGDaDjsdyE4eQuuHVTki1keqw5uhUUHbWQpMe4W9p9BCB7",
  "key23": "5VbhJLFDbtk9Hiwfkxqn5MGfCbsvjugzHMbsY6LCSnqUdgAAii3B2uGakrrY6qX8NTiXHS216St4WUCKWL4eWbQq",
  "key24": "3Qghz64QQjv4BL6G5yUWqdVHJDMAuVDUHPzhF8fbBdy6ZZdSRz8BYjFknk2No6B6ZdayJyhmnpuZbiXVFdWc382a",
  "key25": "2173YqcKtRqNkvX6zQaghntwjh73jSyUxqQaxZWEb9smo6reuwps7GL2frG7Y8TF6jsu5cFnTEsQAjK5fVMwMruG",
  "key26": "2rSaeMbzWqamuZ7vdTtqEx3EoaUSQhjjiuGEt5oWDWjBVa5F1GRWticidrU3hqHLj18yKL1A9gYAHCmbAcYgi78j",
  "key27": "8zW7DMzXK8yp1tL3e95GF6yAzKdhk4JTRmBYCp5UoBgPjaXx79uHbY5eZGNWvaqoPnFHMBUq63AzAvF6omg1zyg",
  "key28": "3WciCQpnV7oMPv3Tw3FrmH6Me9XJZjUYcM51DiEfqGcWMABbk6E2qV5v4moSDPpDb9dYpWArXs9kvy2PTN3UaW74",
  "key29": "59DL9XFtxayMntzt7xGpU94c9Qhr3TmKPZCPgfSvgGpMkgQJWgQRMLN3s3QTeDruweZy3KLWKbVhnaTrHq9cjFt6",
  "key30": "5u6xznF6UymopNHRFAXx21RjmzeXgWp6o8jHbzWjN3QG3NNvdqpK8FG41ytgFBLAJn21YxKJqkp5j1ebZDZ72iV",
  "key31": "2Sw3jPTLYXtnuWiszxzL5EtpG9FEMr14xbwxmB3aBdUar4NPyxD9T7U9pPBmZ5c126BRzBai5c9rvSqMf2b6E8Gx",
  "key32": "2PmLHDrN6Yoru55K6XhCsVTFXi8yXJB6NipDATUS1yoh6rRMfff2s8tkM3ivH6k7gdKgTbkxwnEQ56k2qzn51ggp",
  "key33": "3Ya1AkP4Z9w5hvoKmpqZkNXfrsR8jjFbVMeWYQjag4M8EzSGCqDfDqdrrS5ADatYigUgGSnh7WHNYxiD4sqPQAh9",
  "key34": "5LdAdP62iFohHeZcuuvcq5A2oCoNR63itPGS4yCtZHGotNR88WAwKTRxgiuQd9Y4J2stgqMtUrxtPPiJNWqtaRYr",
  "key35": "4eG1HMRgoCD2AXSZUvviWaXbHYSo96cMm783Pa9eoQ8ZAWYkAjWRUevtX9u5yBMtDmbHDmBbwoJVJc3ZYcrxrd2L",
  "key36": "2Vwrr712yFk6Shdu5bxHHPFMT9MKgeeoEZg98qkS4SbU7EyJrBRXc2Atx1ngu1KcHjSSeEAcnCno9Gi9hTWx2ueK",
  "key37": "5eLyJ5hC72oxuE2DsqM9hjBjk1vDLYVB8xcVqnV3LAVSisMNyyyB6hxxWdzQH5VUpRu1e4qNmY6dEzMTTXDenxc8",
  "key38": "cHCowimm2KFPz8rVWZmULmdEJ4MUuwLd91RSzMsEYLgF7yrPY1azd555E6zwqC3obRaG5LCEW9z68QByTssbYro",
  "key39": "2CoB7unnJJ99gRQL8WVJJoX2xHeaSuzzNxcqgjs742PMF57T3mUwVw1ufZEajagveb8spLAjEJ8nhsJoahJmJLw",
  "key40": "4NseqbuYeF9CMQQVbQ1Na8TLstzsSHE62mV7R1EFwEB73cGhsXCLFA531f4qkXCa2r7mGwyAbfeQWxba6SoESD73"
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
