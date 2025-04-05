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
    "63atWG2zziUHsTUjoVmWkBQkJf3bkgoUtJzzPe92nsGzQi6Zfu6dx8nEMVETUGe7dg95R5FWCxqjJidnunE2YA4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PR7Jbg8j1uB3Z9jgW5xAi8hyTwFhVtpqCpFUnwGRWhhUB63CGNBrnq1QJTFxJrPwKS6E8CsXJSK1G8ey2V9dpyU",
  "key1": "5FHSCBkgqnf8wUb1GwosXWhqdrje52Kubibn2dTGSAkZtTCMak6x3bHQPUmVUBD6LUMLmjEXL69WQpFHuJLghjFb",
  "key2": "63LsbGFJ1iPizcrAjNKz19fLGLefTxh4HmoTDVCd7eRrgfZuVLAQXNYyjLUNs1ZrSwxqQw2VDZDJTcX7L9BwKjz4",
  "key3": "4Jd21gfpv4nLHFX5wEPnfsrDNtvve8h3PHz8GCzGs5p7JsdA1NQx4x4j7Gbn7NAtSaWEbmZAisSHkGKyJFxrXkH2",
  "key4": "38jhQzBYT5AovUoSeNXL73K3J2N7XWMcw8B2WayqZKMVpMCQVcKoeV47qazK9kwxJRLtiTAXk1i6WoXmzCVm7dkn",
  "key5": "2d2oXeKaTEQrjWYkCNhXGYgVt4XKxvwjucTBVq8uSk5ST1azBvR3HsiGwRsfmY8U6UXSdseWMDpSxUeLs5VQr7cf",
  "key6": "4qD6421senKQDdJE7Npw1ZPH4q5bCCTG8fSmoqwpPszBVi87w2bF7xwoVoRZCwA1rx4FpiyQq7f9f2e3SHohRDgw",
  "key7": "4YgEMnBKasy9mt3HMtBhxUaUfoVp2KChbQbktVxQWBnfPSUbD1BXEN8obRd8D3XF5pYfmvtdVzc93LKUv4tog5Ru",
  "key8": "4JYjVHc1vLPfwomJwUqhYfSYcwknaHjgK336wojWvmJG1zZLhumRwUhjqx94oBivSJKfycWhw6yj9vm95qUroxPg",
  "key9": "5cW3rKswRFd98QU5cUEjQyqyzjSPLY5Mu8SK54dqziEFANsaXY51G3u4G5ymFyrkrAmTzkT2SXwoEhyiRgFqCYnE",
  "key10": "5vwyTzbnvxVuSen3CFUPSevHiMAFqtUmbg7re377egREVN8jWMM6EBALoLHXLzhSxMeBtKu1Z9ZoP5rJAmMY3Kee",
  "key11": "2UtT6bGfDm9mjmNKrMzC95nin1k6BrNCfG1zUVXmc3njNV8xTYzZnNpVXidJ53VUyxnSyk7GxXSmV5Asfn5m2o2V",
  "key12": "5axNHoF36fL99afNiFC8aqrytkZn3zXmcyoY6x8C3G7pHHhEFvCkPNS96rnpGiR1AGRhNdDpTkftnRo8XRLm364M",
  "key13": "3FRseuMrc9HTJv8RWCQarG2NVaG2qBp3eeBYoQQGfU5NsE6FiiJjXQH9hrYoE8G883RdjheXCYoh4fqCct5GKzEq",
  "key14": "4xpYaogcAociyjyp3gpy5K39t5WMJq42FCfBAojKrCEywDRJyvgHMewKp4XUxwkDoVDVsrK5iiDTynRXwYeTDiBo",
  "key15": "66ebdEhihDFWs136FPBfnLKuSampkFmtMKkHtyQ8CGR2PMx7RkqEVJJVTeJCe3mg1KxWjHV87pj6wwjgD3WmMrMs",
  "key16": "5GWBWU7wSusTG5xCAHm3wZznUeHnvkhk17qq37tBUXVTidJuHqfeSikysAF4nfCbFu4Zzxk5nPTY34XbU1Lk97p",
  "key17": "5NB1Q8Y8G7DuHEh4e3EgrwXeff8RhVVKwmkdxd56PNi2q5WcDqoLw2ymKiRtCvnrpV2d4QHzrHa9X7Wz3isRGdLD",
  "key18": "52Y9FnuPFpCCp4w76nxfaVpRU6xBVBkqyStMhgutrrKHgqh5EM8nNDtsZKofPrPLzm4u58tybsgwxr1TayUg41na",
  "key19": "2rFkaauS22xuX6M8wZqtxBQcnxZVgMxkKkVEotaBNcLqimLiKw17CH9BEPSS3FZUrV2C3koy7pARNVYzmAihBtf3",
  "key20": "3QJkqm84PRTahfQFDaRtabPrwJF2unEzkSwXp877wNjt53zfLFjHVnPrAkPnWFRP53byA3AswuhxE6Dze2hCSdXA",
  "key21": "233LvR1DCGUYmxDzFwPdx3pyxSAG8H8hZ2dVMmptsd5Qns9joXXi7nKWseHS6QqxGQP2HsUsFTDjMtknJRXpECr4",
  "key22": "z3h28U8bMdyoEDdtttAx9fihi68Qc1xzxd1UpbkYczFGwqhTdyKLmv2vBtjbhjgMUT63Bw99jT3RcjWWRKYQVhw",
  "key23": "5VgoJmNPqxNtq8vJycmgMKRE61pkzMNj4b49r79afyJzQMzDX5mBh8pLQiauLtjZV3Bzi9uWezN8YjGFuRC8MLpz",
  "key24": "2GwtoYUJES5G7wHU5L7xdXRhGc8RVwch6ekoJpEBRCAsUURDwvSXTzJ9YqRVJDvtvNFzBCB5ZcoiSRzRWaJKvYdU",
  "key25": "3J9qLEgbMzNJQkKYdAVzrK4if3gVsNXjPQS7ifdeRryHSo1pmnrxV7rTH8Y6TBTsRmyW4zPSciLMhnYvf1MXYxdf",
  "key26": "2d4bTrUzwurgEou2rJCmc9vzvbMjQhUAt8Z9z8iydZNKC2bewtnytYps32Ydx71KBJRD7rTBmKegNqZ8y91fA6zX",
  "key27": "4fFePBuooEq6THEJQ4XZqfxPMEF4r8gCDji18bGeW4Nem1dqcgvqY6XU8FGDXxR8VngJRbKSFFUeNqw2MbdvE64m",
  "key28": "i4UzbY9voBRbdktxhpyaQ3gbNkDUHoFK2Z1uJWRmeEXVEdSrB29pnP3NwTZVc6EX92gSyCgCh17HTc48i4rch4o",
  "key29": "2749GdJvbhBsJEBUduupB5NnWRPcAqyPuncCkVwQGL8V9SbJidNUwhkSX2215yeQ4zFXore8oK44GbAHxg1vfy39",
  "key30": "4TVox5F4CTx1AwwrkTsHDAEmqgLwfNSPBiKm3Y491raFhs6w5wjji6seVXpkn6hsw4MUjHCCsNXUftLJyEoAhu9E",
  "key31": "5TSrxoYX3JGy7DysDqmrT7RJMpNbtRJo9R8nBpvjx1BAaBn1hYxrVSWvudsxgfzEPfEcaijLEtNoXGZTUqZui78c",
  "key32": "5cXjK9EXKZ4Wej7CoeDTLzJwXbMXF4BCXFwng8mjZ7PJYhC1NtRhqEvT2X3ozvUWqRueJzbnSRR5M93vSYckYGz3",
  "key33": "3QeJ8db4VUC2cDUKxoga9bA3hLJG9y3oNUS5aBToh3o9TUEQtzdtV4k6oPfAAerYs8qGA6kEzbwqAqbtbTEgs92U"
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
