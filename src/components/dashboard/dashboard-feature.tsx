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
    "5dmv7NTcUMUvqNCtJuw445Nj4KTUsRoHWPHicn78jFV6L43VmA4ABAe4YG3ARxZnhKnh2NpVq8vUKiooveAq5qrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eFhHWDSmX8BLHVjPRsy2Vm7ccPdPy3urs3A6ycUGXJj6pD7etvW3n7rJbUftZAVwTXgwpcyx7tggCeCKQeuDbGm",
  "key1": "3kFgXNAoRrrPo74ccw3ixF5GmHZ2HVL3xFgXZUG5aCL464TbkjbHBfyeDxbdvhakQ5jVSAA3DqC9D2hXZyxYeSaG",
  "key2": "3odDPmDeojN66FQ2RuVVZKd8wGXJE2f1BLQPyKmAGfZGiVWRyjZLb7cg4kcQBHibdGr3tPfJTG8kj4DuQf9muQ8o",
  "key3": "smAmrfiCbLQ8cqhHMggPLPcHRtCDXyAWELL3LeGuTEgNf7mX79BGxuPs3to4b1jeAjrz3QjEQzYJ4wCCrSg2mLJ",
  "key4": "3qbjx4FbASVHsAoYmfbbcqune2z8DvXMJe2Y2Yrj4Du6ox9BAWcdUmb5zUKAkJfrzkKCoiygkYorFbUkZjPtfMaw",
  "key5": "5PRcLcZEKRdHn3tCxsg2pT2bHecCa3XedXjRiQjTU1F4jsRuvMFvVxkriFLiXzRzVCypUQ6hS8B5XG8qsRDiERST",
  "key6": "4wkbRfnga8jpmecMfnk1CridNsDECAwcnd1DbwDGzCFuANASzW4nfwXuPd9VoPJAUEpyKsdPtQ5ac7uQWPopbpPk",
  "key7": "85CVdyi2jAbzDzrJwNqaWz8abcnp1AHFD7d6JJ3Jr2CvW62iL9UXitBe4z2jULGaUopVmbVJ6QHSuT7M6yP77Qh",
  "key8": "25bAez6WSfakXyLtA6K5iQM1K9QVzA3ncBqsdFppTb2Tx3DA8kc39VbgmQjNUvJWrsiDbxCX2uBhdE7RYkKapH7e",
  "key9": "N92xohgzzC58kTFuuzgavewdr4YfazgTa1cZMcfbWEM7Z43dVsZ54nrmVJpRGjP3qin36b8ffwprQnMrDNMQXkh",
  "key10": "2EVkByxnEUn5L9fJzYNJjq6ZVJ6RAqvK78am8sjy1aQsTpD3GMmsM1WbPbVarCHFPZhPPyzk2cEvMJSeFe1FxnTP",
  "key11": "5hRRVkPxjt1Z5rg3tXKJ6PtLitYfW3kXNuszee395T6UhkQ1fFK2DPztewecTnFvGuwMpz5GhdmMyMDH9DS2wghi",
  "key12": "4GBSncLXo5HSGDMN4NWbF1x1qha2GhUaE2cyEpHnZuLcymDAwrxs9WVyTP2Fe6jdJptog8Ma3YiakMzFyUHFM9SE",
  "key13": "4WuLGob3xguQjKfjkHU4mybXu789S5sLQBxNDScuZJkrSL6RsCpt7x5qTXbu3xHX48AfBXj1Mb7at9Y9RNCXP8qy",
  "key14": "2BthRhHgmYFu6gTbW516YE9LHFNWxpUPnaucMt8Zc4kfAJ6mxdRqkNwykChXuj91gJy2fpxY3QskJnaJjWYaN4A",
  "key15": "34LFz1fV4RCHZ3RJwDHTcXQxvtF1ydDaxetxtQgF4hAoitgh6nisXBrNGxBigGxZLuMjYmCEWmXG8rLYgDWVzxen",
  "key16": "pjwVkDRt86HVmJMRK8XmyGqECks9JtXWVfU8KNfgKu71wKWz9TZTVchUA3uokSeRGYfuTSdLvxQ4QdDww4K6vej",
  "key17": "3Ei49NqJ95qgEyHZTPzHr9kZR7GXvVgFt9vD1Dhtqq3wkfFeA7Mxhvbi41CgaDoAgPsKkvsF4dyoaQ1cepZ7Za4h",
  "key18": "5ssHQoawoXWRpA3EGxoSgmbfrnJ6eCMm2xmB43HMb3Qj4rh7d6g5qVpUMKhJBVqr2g2raBioQxG2cQTBG4NQ97Me",
  "key19": "3p45yoFpWyvETDGzuZxHsLLQ7q1KPGbkVDuFUUB8kNwkvrrABuxcLdMu8Mmmcos84LE8ouv5Kpzi75TmrMPnUayd",
  "key20": "2SwAkEMAvQ6UsTBpNpKrGXFGaXYdCbXEauCxiinGQBgwDCcnQJCUX9syBKLx4eAg1CCGKYpg6WhkinV9tZHGDFC9",
  "key21": "3wgTYyxWTXvHT1QMr5gr2JuMgn7ojkgF91QVVFgXcghuHnCUvaUBahAqna1UBxwjw3gGjp8AJv3Q2AhtCnAkd5FB",
  "key22": "5YJyVAmo6atpv1cCQEuWk4jt3MYS7WFzmPtM9ZKhQrPvKrPr4tTVBWyNNrQiHawMMBi8Cmo8Jw2WKWTukf3eKFE4",
  "key23": "67NEvYgr2k3PHV9S52NFTVLnxf4NqXPM18cHFSu8ftmwbXwM3xEjhCzVcQDNPESYHLv25QDJMfrWPeTASPD8YunP",
  "key24": "62oY1kev7QWGc5Hq1wP6V4VaXTBVrSMiufG8dmhL9pjzyW8QTRrcVNZLAFvwXqBrc1HRP8NBEScfMCyBTzo395kA",
  "key25": "4MFsxPRzwdUaXDH5dGghmcHNp65hwy7Gbqjo3VCV7VfLLkzGgWh2dQ7jo9SjXRwJa43NL1gDTXaJ4MDR2QuvDzKG",
  "key26": "2AuDLsQxhgk5iVuKDcZY5VoMpMMLZstMon1DsZnCz8HkVhs7pEESAD86CjJXJjTHtcnoz7HvBb7zrQ4Vsfyxpdt9",
  "key27": "aMqz3UvyQDRqyVkVbTG5j1nSzVydzMTkcxi7gib8JwrwVEp3S1539w2AZsQ4JCXvbnHS1ecqK4yEo6qWsEsrw77",
  "key28": "d5V3t2weUXoiZYbdi1zTrokkz2kVAASwWoMnKXULupskxF5fQb8ufFJaeVMF8QV4NFGTYuQsFHfEheSaA1ziRgt",
  "key29": "5xtwAZCEbF2Aybk5kvB87PPjb7TW94yFdmcQyCKtiruz5UJoyuM9wY2jNtWEB4wbZ3213LgyVieGPw5bauKhtDzE",
  "key30": "56fdWkX2d67Y39H6Yhw9Fv6XKdqYdQ8UiP2YKSLSQekxUoarMDNEqhweNgStXQQtguFaHenTZFQC72Q2ikPrFveo",
  "key31": "56rHp21LewR21HqrRXeqqcKKbtkFjP9XtPrLmULguD9KtxzpsMWTMy4w2r85BNUiZMLq5mFrLPLyezDBjGBqjBCE",
  "key32": "763nMv5QXwp7AyJb1SSB8zRFJaXL4c8s7XTHtZdNmj9tyAA7iAYT2XrEKakg9UEskHfXyTfwkzZFNbFGvR6CqKU",
  "key33": "MQGKr1nWK3zSxgfhEN1Nw4vJmR1DeG1zZ9vaiyoKHDX8Va8BaqU6Kz5P9EnZ4YXGfBH6QYts1teQRNKDsK3wFif",
  "key34": "3WmD7mduzp6Wnbi1P4L7mcuZmpPPFV2qJbqTy48z19qpFxfCtektfCnXqKxHWNSKDH9ptC8QLG3vJ4QkQZFqQuKF"
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
