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
    "5ZacnTC1GL54QWpANxe1VCEa7KUWYQFr1XMBic6u6uqXCbQ2BNsyyKbNNXsF5VDoFS17CeDeMyTrVWMu9neRxosQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437MGvg51E43ST9cLb8DbGMW9fYshQLYXuwDkWa7S644xdXxJcwBqFydPq9udLPb7V7vKbRQdHW1QXGhzQi2EA1S",
  "key1": "2h9mSLARRTZNpGPfiY7VAEcPMQMoZ51j8izXWJtWP9XuFvdFunYAVjNSVWnh16mxbBWgnhfGBhsXn56DBushd3Dx",
  "key2": "4nZnMYGg45yXurJge8LwkNEgfWU7vHUEFV6syZqFMajzxH9biyvJFTE6mAASqZx6pKScmEdb4FBJfy3THKQjxe4C",
  "key3": "2fEHXg9WmMFdmGiWrXHUHzCUtgJjhHYW1vo44uH93aEoUnyEsburAbRkz9BwxADnJ8eAUvFTMTamFuQmCH4MKgVw",
  "key4": "5jEx3xcwdCaFqB2BdxKaJKZ5Uaaope5WtDYHAD6uC6ZBGDssjif7moW5PNJ7JKPjiUumws72qgdaTAyW93LuyrrA",
  "key5": "4aboHpb7f2nA6rr5A7f36bZqYetXawQozwcHiBwyZqFUCSwzNu8QH4nuuMkm5FurKvjjr3c5v3UXttz7QVHay9Az",
  "key6": "3eW86RFiG8yoUrdXiHrKGCWrohYkL1DU3SYK7Bys3VADEo3cPweJdYaG5TmDDBKCeG4WXohb3YSJQ9VkJWmCLsVn",
  "key7": "85e4TaYfHLfiUmfao5yqVJfiphE2dosTRBcobWsH6jmbMwtZVLEcbQZv3cgUSXbdPngGe3nnHEeg4M54FxbdbQr",
  "key8": "612XYq7wNqeNj2owLjvGDABYimLvZVMhY4MHHJ2VtVMmc6ZdXDMHYCMuG99ZJCVQjxFjmStzCHTyh3BoCigGV23B",
  "key9": "2WbwqLB4HFBf44E9aDgD1JxNsGzfUVFM2egzp5b7tkaFxoTGzWkm9kvXfeaRQpJopHUrLQf1cXrdufsVKDnGPduh",
  "key10": "4jVaUkJVvCdti6Si6dgACU1tBy7H4iBLxyWZiD2BFMaQY8W11gNaotu4XTfC71c2m2PistQyVQzCZ16tVhytTAJ6",
  "key11": "345b2LkDKLvQtufNNq14WoW8nLRDNoWSg36qiyfUqMPcjE5N1DnVtapxMpu4JnoYxzRdHaDZLQamjioArw3otRZW",
  "key12": "4iUKc91nQVqffGeAz8PYMEKhUmfCpAmQbtvYEBtXAGbtSA4mD6ggpmekvNanxUWCodXzGxBf5qHmiBo6uBHPTtFc",
  "key13": "3MNUYbSEGdiu87qDkGBEScuGu6w4oFpRBLegcZrDxp1MpoGad1mYMBmYzT3NzJbbZT1ErkPJkq3FhHJvUKMMSqAM",
  "key14": "4f1HoCW4FuEaf2CHvVb9arBeJmdcX22eb227BsTogXsJV27xsbn3JYsizLsj5YUNNVoa5H7JABBo1wEgiEvXonAU",
  "key15": "Kz8G2DfYTfbLNGUpm6Q26ad9xTFREj6FcH21quBURGipPqtGujESqcrox8eSkwcLHhPny2ZRRvw2TF5M4jcpQqu",
  "key16": "2gehGJEufDQgX9aMTQHSBrHRqgtCqqJaftFmJn7kvZr4ApKDhCaPm7gQ1dtm5Luv15ai8x7cttJdBHNsVdf2uxNR",
  "key17": "2nRQYDZKBV3tAJnHppJsi64aqzZyeWvZRn74YEgdo5Bvdk1WoFjpXAAFwcu8nnNmnUwDW6iHDSFsNxm4oXiYzPDf",
  "key18": "3YwKJPQwXn3W4vEcggQ9ZX7tsQuaFwcAYXWx3gjBCGVGQNmpZvxWmGaJiEkLK9qinWxtxd9P7VRZfViRKWUWsj8V",
  "key19": "nwyFqEpexwkroigv1UUpSxzMwBAk4uhMF5x3GQc4r8CA1JMtHsFSd7jQYFYbTvcKoQBw3jH1UYkZzSEv4iDtacz",
  "key20": "373tHAdFxr587zbKQTf2Jo3dK7jdjXvN7vAFHk5WZ7Mck97VyBG9mQ71AVq6s2eCLfT7KxR8hYB3CzENXH9Z1tSZ",
  "key21": "2Lhz3nHDF3mw9cYBrSB7hWV34yFEE9UKssuFA2VmgtWHXNJ6CEpJin1YQtmmNoCDzP7UXdHkkSLRKUQ4TvTdEZyE",
  "key22": "SSMXSXpssVDHpbHwqnUpnAfrC11HpfXTay9FACfgWWCwvev9zHdVbHoZpV87oCHWSE4wo7iDCFZGUz949euJw3U",
  "key23": "3QgecEa5ZtczJm3YuZ7GA4YwcZAzCMjimGH7QhQCSZZoqarjhGCzoVWuqY3KyA8KDqasiDgVsQ2buatxjLQr3im6",
  "key24": "21EdiSQ4y1cnJr1ECrvrE826UmpCoVeL3sjqs9E7ggiEkUMYpXQsBnDqUiw6fw9HDzxtViyA73UFzMJibwuywQ3Y",
  "key25": "4AFXwFG47VYVnZuxo6wajwYPaaGkVxPUN3NQuY9mHYhpYiai4nAv3kS6G3Au6hsdxKJGLf4eCGgGAwLQwoWUCSRo",
  "key26": "Q1zxRWuSX88trX6Aab8QZe4uaKkQSX38EmAQhWaux6c11hGTxCvmdWoaJHTRSxF1a9Gm5eAMR8zGuXXkaJLBmBE",
  "key27": "3VEaySLRzRQ9aQFdwKKBNf2PCm8hcjGiD7ahsBrL2emqCAiTS6nQbMQC4G2jcLcJG9PSnkyLxuvhYXhZM9zfs9BY",
  "key28": "2qZJv1iENLRG9T9Zg8Soz4dMK8xj3rM1cxPLhehpXaM33t534Xjb2bYujirmufTDiJxb93gjacQkVr3kGFfQncqY"
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
