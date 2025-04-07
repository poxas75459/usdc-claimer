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
    "3bQWQQjLRJZqkYr1vDMLhFLC18HpPTm6yKNt1cF1w6SNPPoTnmQzmxcDvFKZn1SBRofz5FeQRdURC8d7EMH4o8AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uViKdaNcNNmNeTUgyvgZT4WGBhBrH3J9wQPSKRj8R7pTVCRuPyN1d2GsYgwqeESHstVgcR4yJrMZ83J343xrRUJ",
  "key1": "58JnECWiUCXJVc8yHQMCihg4yW4UhBz1X8HmvXuZCeXKR1erDzH1ShJNZSEjs2VfjUt22o8vPX9w1XgG6X8uWR2f",
  "key2": "4Eh8ceGmwhs4fbzahApThXRiWJDGbB4oyoSRihMVVQAErGEvTMJ1zK5R7h46j1ztiYivqdeWyS4XkbagFEDQ8T8c",
  "key3": "yXuLGKv73V3LiNt9yTmSxcfVw95YdAncsrsn2oQ4DYRB4zbjkgTDWxGLHc3h2DvND7dxqEk3L2JPvx5XcwxvWZo",
  "key4": "4Pjd5wpfnFqvc6m8GcPUUDCr4vXT2UeCXVUWenxsFAek5mbzUTnnCWpFFp1SnnGxxkVsdKWEXuLebJPQYi4hGLCH",
  "key5": "2TZets6jkSmuFyx6sVMTxC9yzG9wUTfxsdi32ekXLGT5t24brhEpbM1NdUCph3E4u9sK2TySb5SV9hPZfevMvv2o",
  "key6": "3n9xhBh5NdRNSfssqUc4e7KfMd797ECWnVgetDNUNY2m5FfNEjYpj7yPEe4T5QFJgK7v1bNLZFsRriGfLBsbXX1F",
  "key7": "5aEJBDD5XMuGRzHDm1N58K9eYgMnhGdGUvi93r9HeARx7i8j1gG3tCcYxdMrqG7JqL1LLfFBymqQqmMtynzFAFyc",
  "key8": "2cskH69HrdNyCAU7aHS7WuFqpf6jGgZxmUZaTVA87yc1DtYgkJf9MzhLaRcRu1KuxwniHWPPcUcXCdee3ZXiDSLb",
  "key9": "2qmNxUQazTVgBkNPWWMETZ5in5teSpKCUDABPDPbCXDrQE24ZoahowihNHETLUH7bz3bLRFKv7fe3WSUnErSndUF",
  "key10": "NxEpV7JPoJFjh4mpcTcu3pUd7PkJNnPx9w7g9zWu6dvngtRHymrFQUeLVp6XBcP5DT8QcW8DRLev7aRM4b49pUC",
  "key11": "2iuEoLxgLrJaLTiaQaCst6N51nCinT14nenPd5k6yv6jKTHJCYWFvUjhudKwT6eQhgENNCNQYgUYXoqg3dBGw3Er",
  "key12": "4bDXHUuT6hfWA4GNYh8xJFoqDDX4fnCnSPzg531YxKju3ryKCv5gh72eDGeApfExN7qnF3SbF1RUkjC8toPVfrip",
  "key13": "28M54CbNchcH23XNWz7La2Pz7u6xrfVq5ijy1ege6ZSqqnowzG6vEybhEDEGBaAai8pcoHAysxQUet46u7TWydqV",
  "key14": "d2dWunUY9NdGFMuSr4ooKuRHEeknkqqVXjyhfJvW2Z3oJCkpUHyaFN9JbUHPQsH2X5fWrAHQcAVgHyFtEFgxDwf",
  "key15": "3jsWhUKHriW79211CoCm6Z3LAHo2b6NGWqccz5P3BWUpNqJLbpgv29MAd1Bzqrm5Uwp4xzUsH73oepTzzXAeeB5v",
  "key16": "4Ka96qd68XQUQWvdeynjBwkxJ4bFRfhzJto851v9ZWnqvgYbpi7diQWDW7ujFuoF7jd8JnesLf9tkAU9zgEXPi5Q",
  "key17": "N1c26poNmMh71Up2jmDPUeHadpkV2LHiry8GtAaApbavdC45FxJMrEojB2PyTHnPtcyPSPc9MMGdtA7gyJpeFzr",
  "key18": "21tTzHQkrBFqyr2KPt6gdfFVHrB6TTbmkUiJrwo9YWTYTiPVPpCoh8UUddysWyHsx4Kce7npNnVenCe5AUCd5F2Z",
  "key19": "3rD9aTQt3QbYdhLtkqe7UDU65sH9GFM5oLrtwJsRiQswWjXqq19kM5AGttiXD7USJRpcxcgF34pW5gqeWrzHYoto",
  "key20": "4dvk2YZsn8kLf3xL5t5upd4pyNNNygzuEtkVr1WAqyBk8zuzdmbfHmaYkjszaejDQyVqi36fkAH6XxM3jGckb23W",
  "key21": "R26xNtGjkePvm3hKG9giK2AkEu56CzSWw2A4Hm7Wc2qzahjbhaXvUTWrrR2rYzNPe3CKuVNruJGg3nSuhj3gjKL",
  "key22": "5fHiXHMqYpCN5jb3aS5xGjknHq4ZKN95YtwZrS2LHRj84fFyawV8wMpMBoPiPEdcdyH9UuRgPp6Yrds27WbgbwBc",
  "key23": "55EU3wMZax4HwiBqyZ7s1gySvuUx8CAhTWXBkKAeS857TZwuBpArG2SVNHtwbtr5zAgsx4CNAsQEojrLp8MSJVAL",
  "key24": "5jttstgibYZvEF5Ve5iAv3pfUMjCnL6nMykiWhfqUXac252beHQM1nwd9XX5KbHiaXjvSpFaQW482gjRNGKARJmB",
  "key25": "5nMCG7WzTy1fyY8TP1kwSzwEBvKoocwBM1BGbmyLFw4RhJWANdo8mBzkfW2Bwt9rdKarycUENvPdQBP6exhXAegq",
  "key26": "5mSDe6uA6SUxP6qWrfztsAdU4Zaj5swhiDtq3vHCuSHHwe8Siac9UuoyhkWhct87wSPTnTq3qxkymGvorvqD6var",
  "key27": "2JZ17P8toY6CFs1WJN8NSo3nK4rKejua493fsEBKBd91uYtADBHFcQM4FNBZf7LaPRrAVVSdtFALkpYQBu7sKprm",
  "key28": "5YcN4BTGwV4AMCH57KKnEbw34J1XzUwvVqe5sweQp6xNHpjVjiXTAywWGAG7mt6C8L3vc1Qy1JAMuRtwC7Tj8JhD",
  "key29": "3zbYVT3WELHYZ5B8tFaXCm5SEPcJuQCJNecMvN6sVs9w5M9Y438GjrxPW2cgSQCj9Dy8t33wRN3BQs9E7YujwKSy",
  "key30": "4izT9Jw1btsHxCZaJq9ecZMNdVdwvXDM5KbppHocP9BmHy2XR1623kP34bVe3GcyT5BmXSzegrf1RQAWGziVqWCx",
  "key31": "2wfD1ewYS1wqdqK2L1ronk7jH8oH45cpdRzEABgTvcPtmRjnKkoef1yAruhH93B6UvgR1KWV5DxMmVxnYabxgyUK",
  "key32": "56d3DzTUpUrzBqfaVsHP3mg693qBZSbHwti18kGkG68YRhDfiNiTW29RTnEjyFiHPCx2RBxQXTU1XJU1MG3NJrRe",
  "key33": "39wnd5YHskC6rfoj3ZUvsrufW1Xw7H92gX4S7sotTzs8XyFSgD4RCRff79HhLcoN1QLk9cVhmegRxCm42Zftd5Fn",
  "key34": "2RJF6WqdDPcWiV9hRSgb4XLyGS9j8s5KN4qBYHvzme6NedHRk9MoxHJ17Q7uoncRPDP81PL3UWAYqQjaULkJchkq",
  "key35": "4566qheNqWhPSZgzECRNnfGreuc3HMdFjgvJAVsmDzxrUeq21mUNgwM2J42y5L4vuBrB2iJKfWbpGAmv77Ad7X12"
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
