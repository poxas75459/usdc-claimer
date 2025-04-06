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
    "2uZxZ1SY4zW6e5mUyDR3HfjeAgMFUCjkQGf43YGp7YfJYFMoTxpHqoPX5QrtMJtx9EQJEG5bMHYfC25tqfEu1tL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wbBwRtDBAny7N8WkBTkStavcjt9LsbCWjNFhJ4BVzdUgiqMZzwcFe8TW3xw8HNxJmZ1xvxE1aGgYamFwixVpTtn",
  "key1": "2ziQikXsq1Akm7mUnX342Mqu2hKKAiN72KT9ZV99XEPozvAn4HwEFmHhjznGQF6iWWMqvygbCLbW6PZJ9xTfAbC1",
  "key2": "5sDo1cLGMPDNK5dvFJ2i75ooj6ZwUTaZPTFVmNXFEJ5U4KeX9h665H6KSmAzrsqfJmHLjEqg2oi1PeUoVEMg3yLs",
  "key3": "3ErWeeWEseqS5pmGxJfLsHSJyZ1KDLVrTnNr7XCs9AqpTTFeupDXbr5X8V5aejVHfS7EJofMh5xXNWrEjgcvgUAf",
  "key4": "2bPY5RPYrCqQCB477UgmDjCqgbD9Jafz4bVcGrx2FkjH4KJPN2e9HJz3Mw9Df2c4MVY2P3x8JHxHRqpRn9uz6iV3",
  "key5": "5fhvpmbtdThWbFdrepLpbSGqj9mt48CxdtNydrRWgwrMDhqcUFY7AUE6Q8kbp7NFxTkCZ6Qebim7UayoGxaJdKE5",
  "key6": "2mdNmp3M6MrspdAe6ZWGUgMZiscFqCfSDq931GdtsCkoJH7Q9MrZYDFKdpgLTPNddREuPFdg3EToxgoYuq1wbSUJ",
  "key7": "43t71X4WfcgRtCbMVRnt8645dCmiciGoxprpiqh6i1WK9JvfmmAR9mX3x7SHq51pDHwUQV3VypUu8cCeGeRxBhYZ",
  "key8": "4fDy9Jb3Mh2k4PzZt12TUus2zYqmdkN2tv5oqLL7w9Xfhgc8iGuLYCjLPCLcz4Fux95MyM8RxEVy9DK4tgffRVr3",
  "key9": "4NALRg5CmbrL86qVV8j6qE6nPhjtNqyyMP9vd2EUXcn8L852YoDmEmWzZkU58tmQNZhoGGx2Cuw82FfUKhhDDFVj",
  "key10": "21kZ6TAxCwMRENAusyjtJRToF1GVtLNAdYtKtiCaqkYDNHne4S5FqkdvKnvZyM4bqft5RzKRT3R26byFkXRL7bix",
  "key11": "4RDbZDENacCxJA3zUZZajV5uyzMQGp8sAJBY5b5QM4xPSBeSHRJJd6zH2a4FR5onCyrj3m4NNw8truuyrNotDXyW",
  "key12": "5oX4NrtuL6hr6gVN2C6Tezm9Hmk3u9DNTvwnpLkREmcoAemCeRymg4W26Pt6PxMGAAi3XGPaumex5hyuuhqyrkjL",
  "key13": "2ZnWUDt44CNW3T5go1mn7D8BEVDifPbSbyKqajfcLkTisyihMzscka1crpKGx1AhbV1nL1HDeXn16Mh8GeiXWW9d",
  "key14": "5avhoVdMCDWyGyXnbz2Pf85yo1TJZgsryrcRxb6KFuBeStrVxtK1nsYTyFSjXwrH8GmUUua8tGm3wrA3Xyu8uh6A",
  "key15": "2Xb3zFhzu3QsqT56BEQd2pe3LHCQrzUBmHfVDX9AcAxjTpAZ7trSsJBJopKXz2T6txjiH2zn7BkvLhSMWVvuHecX",
  "key16": "2jbfnSGtka8oiCYhmQBXTNGLvCJrYErC8L8FN3bQt9QFNdB5HwmMZZhoMkhFE4ZD73UW2jjSXr3SBbiaPcV2n1P3",
  "key17": "VUPzZJtMvxwCSobageP9S4ZhBw5ceH95S6XHbXerGsc4rvpM5a84DwNpJ72GE3j5z6PziJKUAabgWZG1hXNucaB",
  "key18": "64rbuMy8sQ3Kz9GiyQJjE48Xk9Wqf15KDNP3MnBFoxz8dF7B4XqdYV3e413DM9dXkYCKnZjdckRr2k3KmKFxF686",
  "key19": "4LyXNZ5VSy23UF2g1YeAz218RJHKQaekfAzM3HC3vBHLiA3Nk7aqNiVW5beYbJhcmMLwVY87wQaELDvD9qMVm1Aw",
  "key20": "27ror18p5HNaJELYRz91iEMHXsZE9D8VqjYYR3zVTLWBnq95cY8zLufJgBAVmMW1iH2HUAh2piGZpThA8LSHZq9X",
  "key21": "4bmfL7s9KZoeRgFnHTwKe7VXmUBuYp8E9nVauneD8uQRbSBjdFfYwGMUhVADy9Aio6Nw9hkWrVZjv31Wx3ydxSgC",
  "key22": "4JqjhLzcsMyKzsDUXxZnhe6tC3bQyLMVnXhLhqjNQPsxwvys8zqX1FeqZRASdVncFYtxBQaYq9y1DZB4WBEteALz",
  "key23": "38JAKDYF8gCbQETJ8ci4VJsudoMAT56cFKNUB6tm7KtomiwwJ5cADbnH59k8UTzUsf32HtpqYQGyD7ZDRpyT773h",
  "key24": "5qfiTW38ZMwxLArKBjb9JtuWQDPtxu2WXXhEbc8nHYiSbGRC8xUCNkiqr9ZLt6WrntgexdJB9MDrEtrPCTmeJ39S",
  "key25": "3HjjADE1KSGzb5jGuEVVvCovyq5LcNLHuTHZqyfHWNxv7SiE3hEmkd7DydAiNWCrzYKdr5spTXDojaYspCg6UrhJ",
  "key26": "2X8qvispavYLoCki6f2JykDSaGexwhAFiA3GrwosHrwiRpBS8bd9oQEw8MeKHe2zzy99hYz2y672jhV9hPUqWf4x",
  "key27": "4kTVF4dT5CLiL616v8HGdTsnwmyCChnkh8VSLX7ZrgB5Jcgt4V9b9LjKNbfaRUVAtjvb4AzVxfGBr57avGFi7uJ9",
  "key28": "d4zCtHKYEhMYudY9nvDYTGNt34iyvdwHgXk2mK5ThNgjs62VuSJuKNWJhK9mcmnSY2PHttfK3RvJaVFgvzJYMuF",
  "key29": "28p9vU69vhz3PNhGVfxjSZPMnCL4oBiagsFRtWnQTbYyz51cSiQrVo6b321UBuCMfXL4PRJTZ7soBx3Q6zBKcAjB",
  "key30": "4FR9eh4a8apU3sqxiQdUiNTZBA1Uo8z4RUEuyxn2yhYbhE2uz7rvL2FYF8NGt9xDdHEYojWMsAjoDNeYDSWoSBQ2",
  "key31": "2m7djb1GrWSqUcswPnqyQxxWE2mNvXS2u62aKrjvrswv3LwLUxzoPjk5XUukZ5fwB4PTsCSte8rX9P7oCciDX8p6",
  "key32": "3KRSmcY6SZ3XVdhgmbA281d1QazjfgpBararwmhPTwFGMQFHSF9JBaxBJHbr4YZDMKBDzZ69WRhUF1vfRp7UrceP",
  "key33": "5f7aDfThKhztR7pmw1Szu6qj2wK39PY1Pvvt1o77t6nhFoPP8kMXHKckgPgMyVALnZqkiJ7CRuiYcW5H5UjdbMoD",
  "key34": "3rapGLubzoecidbk6gmpvRjKBcBKfEatfRz8R7ZeLTnYnn4JWm3M9orvWWqE3m8z6i7kYPEXbf3vn1vh1jj7Yqvd",
  "key35": "M5ZwtEuFU5jjpN2KGNSW5ATJpsjFYZ94BRfaP53nLqVpLdNzaZQo3HCN8p8E6AWZNr1CUJvxDY2RG5jGagzV4mB"
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
