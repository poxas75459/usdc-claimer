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
    "5LMBqDTYoTvudZ81ZVDv2djaTeLp9toEb3GiZYFGEYqxKBbNeeh47KYCLLmYpv7zYUAzPBpruNRcU19VwhDZWSeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GMwCq7kd9hx3ZYds2sbmCmMaiK6VR4k4nSWGjUsDyFVhNkhHSBjra6umqbBNLefP5VhsqEGFAmrT23T2MukuKiU",
  "key1": "2vxxbckCdiMvSPYz6fsq7hRncDRzsTEW3Ssp1ajqLe9dEjVK7CbYhyDx995hGVteHpjPw7ZwFn9q5zSH7Un7UPnb",
  "key2": "4yGYEBuPuEMdLbuZ4Nmr4qGWLFfLWAuJEBcmRDdf3f4vsRFEGCrgkZhDUFka27rcpp6N6jCpiMiq3ck1BxnRNYZi",
  "key3": "gKYiQta2pn76MY8Aj2mU1D9mWqpiNV1J9JoUuTocaubBiApEPavWNHigpFaEeHZ7raPnNZfYkbLgM1ugRcWDmRM",
  "key4": "jwUAjBbt6raYnyb7M7AHfoLaNrLULSChnaGXFXrCEh8Y6fVSxgk5firFAq2w2mudH8srgx672dCFjMvJBLSf6Jz",
  "key5": "1mXUsU4MiiV2SBSSuZGPk1K44pjJUCyFYBMihRSSt5g3y2SCVDZv36ySxgrv1ZHK5BoEAbdjtwVECG7jCZZk1hp",
  "key6": "ijRGXJ8gytbXVjJrbx7P1kEBPPUD9DKC6W57Ctq3oxaabKvPqxiou2o4LpCCQ8HxFpUWvFjBNKJbM2Yqv5u5cEs",
  "key7": "2vjPL7stETphfTqFcYufwHh7vqUeLaQyMFsR4y4PwjT1jznx89koxiesLBPRUVyZuBX6vj8d5J2Ly2ScnHcCNf2H",
  "key8": "4QjcdyWkyZ9ABGTMgevdwv5XyKGKoyx4VqiiEDbK3WjYpxSuLsoRBaQC2QzDeygyTx37t4HcfJa7KKQ5D6aoauFt",
  "key9": "2t8g3VeQt7GNaKBCy982gBs8GWmSdAYTvZWTuBxBoMjkVdZoQTUgUn5tkrua4GUzELp2m9kcpRXcMunWsvq1VYeB",
  "key10": "465Lgz637cFvZndNt4E1TLHVYqa9UD1bxMPQghf9jJxuq1iibr6wCTVVRGr1ZCD4a3PvaZ4Z23FpKie9YTVEJhDp",
  "key11": "3kjs5PetNvJzAxjDfTwg9iLazwUKFcNaSzXTWfgKTQUYNXEYVVqUjriFXbmMGq6kY4Top85VuVtmDxw3gvk9MPmZ",
  "key12": "2zrBpDCSS73B2de77u6abpm9t4tbpMewg7saXyT9h8U5AXygQFJQhxciaWY1b1StMr6fNzcZGsHxVfqwwYuaYCTZ",
  "key13": "dL73kfJcobtJWW8RUAD9Y5XfaRkeCryn2G3Fd3k5utxAAyTEtWDPUnMaPdBUkcoVVCTz1iH8PygDjajrokRZ6ye",
  "key14": "31Sm1BRDkZK39FnwkauFN6kWUjEQPeh1GDntwStWLiVrDTsTcmfmxGfD3DqENnT1a2cP6cgUgiY4HQnB157R2ZTD",
  "key15": "5DPdntsCgQ3A17MMarGKjKvrMrxCmXDve3LhNNjDEUif9RBtszVnXTFb5DukucCiaawaNyst82AS1sKZFiRYN8So",
  "key16": "2J53uUtLYdUXVqTAvTHWNYg6GNR1zeEdNouZznstfSM5a7AmSHkPZwkhmKeywQHaXYcuCqekgCUDpEPU8ZxTMvRp",
  "key17": "2FuiRDSCu3JBXCMg92di4va3epXrzfrrC5XFePu8Agr6e5gcohk1nzXezRAx8s5UUmxtcWuE1n9YvD9oc1tWF7Ae",
  "key18": "ikjYdkv15Xokeewsy4bsqH1QRhjkazo8AUaLdXaZZHnCX9TCVLcZX9Rkf6Fp761goedZ5ghLXM8JHrV4tSPxBJn",
  "key19": "2tVYSZGaHYCbLtmLj5VR9gzySXd6zemYTYdkaFNGdajbU9JYj4wFcHtFGB3enzSN6ksYt5YbEqBDRFiGXuHBEY31",
  "key20": "3rB6WUi3i2fY3WvNXLkcws1jxsvahNh9RuLU9Pu6KV7Jw9W18EBptnFFLsHYCu6JR5zuMi2FxH3hAed5LoKyA7Az",
  "key21": "3nQiZFxaXE58f8ofngd9da19rLGoCcdHfZRxe1NBkF19whF9FypjyBiV4Y5YxnrW4txD3VvT9J3CPEhtVDRcNtFp",
  "key22": "YoYcf8kspLoBnomzmSg4YWtLXEs8Frzwn11ztQvkS99iJMiDKhph6gxsv58iG5ohpjacpGLiDbtXu457d4v6J7F",
  "key23": "45Np8jfev7AwAHvG9Pq12Q5wfE1a16ZQssbAPA5xDUUnSFvUhxiRtPWGKmMZTraS1rwPPXHTajwDyEHB3BrneYSV",
  "key24": "3tzh75dMePcELwdT89baHZ5jAAMYvYerPbyuPHNNfGpJuVueheGp8r3xxAsivy2v9a2b2mXRv9B73GJsQu5VudHg",
  "key25": "3d8YhPoU4D3UnMoNFdw15NBm5q2xZ7jQoPRjs9eevCiCzgwsvWXdagDfymYj75nhQH7vwbyqQMWHdczV4FEXGzfa",
  "key26": "h2kQ1a3hZVANVES6an6F3JhbE722vorm5K1fsw87QuCTw2fSDybLgCYwmgScXnSx5VwEN4vbyMt3mJCDJr12zMf",
  "key27": "3J8aLupDJuPihmHWd599qDujBU4akKMEbkyXbxZGzKTitXB6ZJ1PGhNwwtagswhY3e64rAWLkFidTk8J5DMYUgfD",
  "key28": "iERgzvMfWyFbpYAuVAHgwiqu7bu8jFZ5pVVUwAN7pjgaJ5HUbGht3QSPX9zumCngHvdYfRbpjeFHirk6KFNW1df",
  "key29": "y8dEhbzhy2bvzie2q3n92ow97EdRhy5qJb7co7xvzDP1sbPP7KKmymBinF8FwVGcCLJqtn7WEe3dCahbdomtf6u"
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
