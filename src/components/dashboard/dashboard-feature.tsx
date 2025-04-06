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
    "Vcb9Tq9qDsHxyLcUgYdMjnuMhsR6xb7txLhVs7KEtqnknNzqKdqvkRWZPsMvZwDnRj6KE4HvRktXhLBBHzhVVXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wjqfXJPVp2ERiDorCuLsWzSjkyATXk1oa1GAY8dFWBRNiRfHDVWCCNpwmS4rKxUeumtLD34RCXF8L3yuwJNdvYF",
  "key1": "3zb6GR5MChtjmTuKzRBsmHoDt49B3SfChqV47oTXChSZrHLkPwfjLCsyAfr4DsaeoJia2SJGU82uUwx1ZKefHHsW",
  "key2": "2wg4do4ApYqfwhiEUVm1pdbwq54P7XZbFpE1vxoEWaPacPgZerk4m8nwMoDX1DLFiJG5vaxHWEkSK58YsvsTBSvw",
  "key3": "63K6fdQKZSG6xomnDuBF129qUU7R8dUoMV52HX3ewDNxzbBMNLdFqNiuaAK7QLJtvzABc3MrYP8CwCdFggEAvtZc",
  "key4": "3qzNrTncaCY7GUMaqec1WaTpRYsW5acoxoj3cok3pdynz8nYgQ9u1L9QMVndbuzJf1i6AxUMNuuasTxpPqQ7ftVE",
  "key5": "3H3iyGbWCTBrUJxy6piawkDmXja47qrGMPXuvMFFnrxMoJ1PJvUBgDnVnPFhZC1YJhFqfbhrdyNCK5DTT3X213Bg",
  "key6": "3wNxwMqWHDcrL9UdusbJb6rpyspHuYq5Qr3cHPjt4zMiBeyHKWjKfPschuYRimpuhzQm4MuqQoeRgkYgFqrzTaLm",
  "key7": "3awza7G88oGwpjpqMPYYWYDZ3SECzHj57xJ3n7vEPXFfCTBFdBrgLmkfXMQsxkUHXzaKMQKYYRpGzfqaJ4uapN4t",
  "key8": "5i1Fh7tr6oc8XNhJaNPxHp2BBpK4PC64AreT8RJHh5oYHebAPuQVbr97pGuEcBcrTs5tWsbrsAnuW5UnJoK3v6Le",
  "key9": "2KddcbM9DNbnNpFZShbQRcdsFHjUwCDXxxRcTw61oHTeahWmrx7NhQxZXerkrizYyaoFt2b98JXBghq5BUhhHFS7",
  "key10": "4bvDTsX36e5V6SwwXKBcrdx5kWAVavYTXFhF3jahHi3AfHPSQzUmtCHa1BNf18BZtevg9kThFU4pfEdLDyNuqnkj",
  "key11": "ryTDpXn8Y9k3oKKhCMeKcwjY7CWynuSGm1L3NEmoudRHTA4JmXRjRx6pvW1iUjs8By3EfiPzVdU1xJ5GQs1vn22",
  "key12": "xwxF65iJqkyGDjDh5X8BYo6MG4w7GKNTKSymWZggZAQkg5BL5V2DR8gaBHdATjCn1nj7cbhXaRpsS5ce9bAji6q",
  "key13": "4hSpoq5wP5nnCVh5GRbNNRp9QggST5VGbgWCrsWxkSrwFTKRcg272TZMLYSNG9sYFBujEW5DfDnnWbJZbzP4fjaT",
  "key14": "2is2keRLe5FUfmSkbDRsDRsX8uUvxoRAdtKBsGgnzdJm3rYhsiwjFnFrGqHTxEQL5PgPjBwE8oSWYLRC7LaHs2iF",
  "key15": "3fNEi18AMLbcWZtEHiyPnmVDpefznVJFnCSY2nTtZWPvnpzir4TkbFExRFyKAMEZGm9YqUb9RkfFLiGwnrcX3Lmu",
  "key16": "3wVPY4oW1GP2ZY25PRYbQNBMbuPjm5qwqJHJbi23eJzzGUziamUVNc5M7xt9TAYvPipoSankwVr11Cx8ejWkW4RR",
  "key17": "5HMR5y3mhmb2CtUDQwVVwkVbAByDCvLKSaEJdWcsSeN3afuSKk1XrLaeus1xjLvKctM6Vzn5UgdcyRMPvsK2eVoh",
  "key18": "5QSBLVcC5kph9ZVYZjDAvhGzEqi5uStxPHiy3GfAkpNMRo7khyL31oUV5vnyCkxcTYaUiQ6EqzipkyVTEXN41ui4",
  "key19": "5H2bZwVpde3jgH76jZHgTaofNKd9A5bNZhjnPJftDNnY6HAvuaV4Sdb64cWsh8Hq3LW3sexzhYvvYD18AK5T9JgN",
  "key20": "5GAr7zvF6yFoirEoWU8dKBtBhSJLTupyLQJTRPt53f1aEYR3Joq5p5FNwmfpZ91XwW17uopksMaRSLxXVK5ncbXD",
  "key21": "2CC77wrWLbzty3paWyWHPz57qr1AahwAWLkFMhUo7pYgyMMdhSbVCCX3pxkc83S5Gof753GCykFHCiXi1xj9Wp7K",
  "key22": "3RVMnEyZYbs8guhfvS8fqjkN6YxVhxwsVMmEwq884eUekp2913mQUkGbKJjq7quxihTa64c7UDCQzJtBArDFkgfy",
  "key23": "2X9FQEfWyFZPR9Z2VqvsjsEMaPMv7X1e27xQeedJ9HFerf7q1oER3VxdB3b2DTH1F3zRnYXeW6tZB7LroYbAz7TF",
  "key24": "4MfNAstuhHymgB2q6N4ej1v1A3RjEdfDroSR5UiSjnoWarQUz9M4oqhvB4zwVUWFbYwEh8UGShneucvxbMRPKgX5",
  "key25": "2iQAFUMW6ut7YTnLuj19KPgUcVKoD6a6gzkhPGTL7JoPEd4ZQ8ytoQGCqzYcmfFkYatEkr5PsD6kgLMBFmFC6bmV",
  "key26": "38XzaiuSB2KpJaccvenTZKAW3kAA5GhTgH2CW85bsrGwbxTSE71qKrcbkKh5grcJdtjj4f3iyTt3JK5uhVoZoFFb",
  "key27": "51D73gCiqm8auPvhirHbBvxCYBodb39p67nnaW2heewkVCekpyyUVQqQJrfkNfZkkW4ATCABPCxrh5i6cRdioRtU",
  "key28": "w7HexhvAmHdVWaKaoow3sTJxEtYpEyM2Gn8BqPnA7WLXwRtfF32E2kTQPDhnZ41xs8kwdnF4Mx9yW9xCEaYnp9o",
  "key29": "4Ff2PdWzhMMoGeMaVdXBCjhGYvxtkwcxCi8VXWnHYFvyxp6nhphDVdCF3mUZ5sLkAxB1SBYrPnUF2Qjz434rYUDF",
  "key30": "3Fo79isG4BbE18GMupsR3QyFJsa96cbkwyHN9KEm2hG1Jsohpyvr4Ye8hRbDpukXqdbwxxFgiQTtpx1pn9RFZc3",
  "key31": "4v6AdtDYgza9XA8EJJRt54pii9Uc9NYwN2EP9sybVyTSKvPZQmB8zK4GFSB95xejyV7Bj5MWo91GjP3HP9qSguoG",
  "key32": "Jimzbw5rbdognaPgPkCLjGtVR9hy5e845EfsY7M7DGADDNai4kShSaRy8xcGXsMj4CyfkyBFWn9xQ6YkiJTQwbm",
  "key33": "SoL8SN9ArT2NCYzL5cN1t2a6owoZsPaUhR27iwdf3EqYUtDtGz5QoCtme3syndQDTNnSty2xk9VQ9pnewYTd8aU",
  "key34": "2odY7NhPMhvRXNScPSNq6H7CuUW8qzmSSqdh5F46Ycx2vke5mb9n84wcRkgiXQX9gqNrkLcLu6FtMpSCL36qxW5m",
  "key35": "2gtKvjFgzK5rMA3FqeJ9EJ51uZx2iRYrgwvYR1p7qaZ2rvE6z4vxtVDWfjaZTM7MzLUmjaaUpChTxhALZxJ19iEP",
  "key36": "2cex2GzePEADq2xSMV2VPbpC11vH5wHwZHwLhL5fZckxgWWfg3nDCa4qpVYsjQvQue53AaXGwB35DdL7dAnjSAiw",
  "key37": "PTiNd7mJMcyjmkhmCcYN8Bmjh5XaJG4ZGnbsgjCxxn6Kq98rb8WM8mUFceoAC8Z1zWLeP5pM6s3jqwcYF9YrkgQ",
  "key38": "2RKtEs29SyRf8RoR3pLh6dDbpy8m5oM9KEF4EVpq1jzkg8iUpakN5n2ZSA1qPZk1g4UGY97uGMzTCNbcgbu8sVET",
  "key39": "5DoVDjHn1sH6afRqjc7ahXmLUPLeYk9BPzsAbiExSNn7nqBXVbtmzSpaAhiMc8DXozQkCrrNYGrW8XFtL82Fbsnb"
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
