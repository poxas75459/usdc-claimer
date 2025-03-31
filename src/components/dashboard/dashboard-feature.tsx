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
    "3jK2Ui4FPHANTu7CnroxgotKgYHeR46u6zyTbjKqwZa3RkzeTWhgQh8krd4WwDdtxeH2JtGNAW5Fdit31Fn6Q96F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D7ybizTLMxeuhYwC2oJ6PZLX4fBFEtu5bqongT7qrUFZbUuy6hpgNMCJNPsJLEPtZdk4gDg3iWk2n9dwFz8MnR1",
  "key1": "2Z45cgY2YTZB3mLrhEXi3B9mHnUuGKxWekdRzK484y6eoKdkDhqcUwjnCki2HAEJCUeZLPshVKcsLnJQBEhHDMNK",
  "key2": "kRMGA9e1aFcr2xDASZrFVMiCf7WuF1R3AJP2Zp5Gw5aVcsvTLcjZsijwj6tWw5gkgddFgLG78Y9NnsuvTN1f6Nb",
  "key3": "7cSJpjZ5K4B5LtaTaWTbn6aqR5UBAnddDMQW67wW1YeUiGcyghm9HJX239A7DLHkgmoorvKMnJaEhMJDAJ89S95",
  "key4": "3bJoBhu98gxCbBM9Ns5x1ahF9jrnMfRvmgwHzbwNmnky9jyRrMiUyZoqnsfYudzv9z3o4YYKqtLMSBU5WX7sAZ6T",
  "key5": "5imdM8a8aiwkxL3HKqQUq5Zzp6WebXusswvp6Kh3Hj7VQrFHuh8Fo2bbDrKE9h7DqcvFHRQxUkhfewyr8ZuoYDQG",
  "key6": "5AqdznFGQRyXwumgNDgDQS58sMVh2TVq9gSttcP2GSU1oMxq7W9KGYU9urBaearFP6Z3mNecyn7APkUXpZwtdjBx",
  "key7": "2FX6CxGwRAa7u7M5VxjzzCz5yZ6CQkuekNw2hVudGYYqzx67yPB3phbdF3ufzj2XfBAm7M7s3LR1jrAVgZQNfaVU",
  "key8": "5VAP33hMaFoA5Zd7AFLv7kk2NUhqj9RkmJ5y8qXuiWdktXY5WjTPWrAaGVGLqjdkHDP4x3WrDzFyM82w16tZTGv",
  "key9": "sr8srsty4oys6313AAbiez7nrVUZxokeMmiwWY3uyJQMtYnLi5yq8Dw62JjsCoNd2Tp7EWDdn9BixCtY6vmDWAs",
  "key10": "QRYK4zRne2uhsvoketDaxk5Z4s2NDhDwAfTicc7gGeytEoAM4gxZnTkmrmBuUu6qk6J6NfM928GHVRQHSHHPRMF",
  "key11": "4UYnGW1C9MUvXH2Vr14gwSGj1bdUTLufVyVC74ywppJnhq1mit78X78zw5LfRNPibU32iYyDUEU19o3RSs16uFYX",
  "key12": "4LDG7q6jRae3HZ1cjWEtwXzxh2g9UtKTtNKUrqyX2FoRa9Rcenzimrk6bDV4K7cUGDoD4KyA2em1kXvoWbXniEbr",
  "key13": "5MuoJctUDjVoNF49MrQDN6RAjoi6U4jP4gVWbZTb2KgvcGXrQSyP9UuzqnFqadpCS5JSBYbnsohDiRLvRGtkrJZT",
  "key14": "463YXTMEe9PNu9bPMava5u1ygQ8KixgP9FafnNyJU83nCDCg4dVUx4fDUvx2kAgZqGn6AYkLCkrRW9UiSfsT7QR2",
  "key15": "28CDjjbbzHW4C9BvTo9SXBZcGgA7ZcQWU4fGf7hLBBPgp7HmupsKWQDXN6pZQVhfrdYSDhwdbhYcnbHjPJfnKAFc",
  "key16": "3ea2Hk9emU24rkBQN6NYSwqZc4NT7d3WbFtFGn9XCTSSrJzNbBQb4gKjxQJcvYEpLVFCdxMV4WoHwuyxD58w5wH5",
  "key17": "5t9ZvAfZA9CZsxo1AitYXwWwpNuoepv2Ympr6yWx3NvNFFGYicxdjCX8VtMi2K4h6kBYPW6kk57Fdm278xEuiBhp",
  "key18": "4Q9FqUcoSDCtEXqJEYWURKRp4q2C7LL5MdEszEtjx84BXCkbDqauGvPHo135GAZ87TaArNfs98afW74vDcAbEWS5",
  "key19": "4hFpPBHwR7L3ZZnAVUiKhhg54HL2LV2GzqbpGWBAbUkq6BPaE2Rf26ymoYzrzTY8AAwm1F921bMWBNT8yZKYFkUp",
  "key20": "CJUDMBAESeHJtHLRHiYcXF7fLfJLv8DpvN5nQ4NUCwyPfcEu1p6MWvbh11WU8UhDUcK75RsQDYDxihzCJWhSsNE",
  "key21": "2BXtYTKVr8TMD9NTJCyFr7XVQwpR7XqGVcHbXwtzKBWqEkBQUNFxEQuZV9MYZ5naJ8Du7P7Jt4kDiuu8nLtANjvb",
  "key22": "KE8ZpQZT9B74E1o84wUtU1Q9vwAFprVzAsTsDXoawweMKiRQPTA1ytkMM16cMmVFZwD98oY2bnbjxSRyH9geJCW",
  "key23": "23vtJz5seNpRVYSbpcStPFHAcndXrwwZwrntBeP544tJvY7gD5f1cdipkT7gFNuFMRN9eKov5KE4FSUK2q1JZ5Rm",
  "key24": "yZceD68a2aKrVZtF5YhWkUCz9Nmca1HUWMr5yJYopBvctoP8QQ9pLMeT6N24kSjL251dxu3Sn1UMBtWS1XzmNW1",
  "key25": "3N53BCFQH6BHyhR9Mmi3wBf1SV5g65PDEGjbDszeZAt8w1n8dtt9TVpam2GscdmhRxDzc3Q3H8LzqnmxZYqim6ik",
  "key26": "5Ri2CEzaZKPZfFtQmCyhecFLnHWeNxNtFDakemJH1UbmgESMPXQ8XjD8h4j2xjXBGQSTCN8UDgY91FXuR4Czf3dn",
  "key27": "4XtMtPbiYMG3gvdiSnpWHD8KFRrvr2P6hpbM18JYzDxvaciZV1wZFRdffgV3ePdqx6HpewMv3zCpa3tDTzYt7Rk2",
  "key28": "ihRsDcJBzF22FNu9TCSfgZrfa18dffg5wKdkREhZtFE8DKG8nQyuCEe7nyXnyspgvSPEMvAndfv991wztzj2Z35",
  "key29": "3ZgWF65CBnXzuKzZCj9GV6egzXTRfQdC7rxnRSLHugABzbvJnroRVtzhdVA93UmNzvbjtTwmYkUD7ZDM1NkGBhnx",
  "key30": "43ASHBE41cky7E9GqVnJJrSH65gJ7q3LG69yAECmTm9wwNmaBFpzDjit9d11bgCDbqEkcpTks5whSGBFyN8xLSyL",
  "key31": "2T91seUf7bgV67XQGRNayVth3DJhUeoTtZUvdyoD7ogvc3cRnR5Z3SdnhXnuxhCPexGSnrY7qvCqVy8CBZTK7XVs",
  "key32": "4Lyu9neBfTfMnNztCZpVLd1uBofsZ1jnX5BVGswVfMFPbe3HeZji2Ss32HZaKddiRta9qCQWPFvswmiEc2o9rhvc",
  "key33": "3VpuPULFpECU2qdUbdbiuE8adFcFdxScZjg3hBRqHXYhWCzDZ5k7kizXHfiJ8518RFuur9PMZyhyPymHuoiTmfiz",
  "key34": "668eqRk1f1vTePAsvwBaR3HYCbk68otfT8kxnS9MZoTZk91dffHZaHRXFwmktKKejvGv31W3sG1Jtfvpi4cqwDFd",
  "key35": "4Ez4kw96DhsWQkU7CqCaksGw25pgxpWpYNdk4bUKFyKjjfF5FEm7LYYXDwMqFbr171518Whbgibiq59Di6r8mPuL",
  "key36": "2mweSFKjYuFZxX9fTrXgKRfHibXCbRULKfgkP1NxPM8qs4YuCDBxeaguMU1RaMsVoGx8xYyJk8ouBXun9Qfj2arx",
  "key37": "5v8Pkw7DGz6c2bFqgB5V2WDfJ4ftfLs56xEXdq6HLKx9iHRSHqzJgyL8YLTZWoC3YZDjKZeRNcJnnE3uuvMKv5Mq",
  "key38": "3xVAcLPgis3mTEq83WM35uYr5LgSARLvAPKYhtUExYuh9RBHbW9wrNRykhSXBXNe36vTcRivyf3PD1nhmcaYC5Q6",
  "key39": "2UkrsLaqDSkteH4hG6K46Yg5uTfv8qL4HWJMLg1GpgH38isQt6Z7gZ2Z4rL9qA1Neqy93iHoE8CLTFQ5KC8n4BHq",
  "key40": "25m4XHHVtmSt2n3ccM6f6hwTLPnhwudj8MrnVXEeFESQp9RzoSM5ntwowobzHmLPNgYmknkWtfHsdvnjzkMmqTPo",
  "key41": "5YVvF84UiTMx57fuo7YK77tbkZM1qaFs5JJUKHP2wbJMwQUk39QWBvY65kNTCV2RbLRysob9HcuGwuZ2evtrtcyv"
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
