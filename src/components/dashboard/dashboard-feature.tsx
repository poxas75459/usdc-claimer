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
    "2MJVW5GWKs8kiNReZTaycKFcxtn3okNmDxzkiiG4ixErPDUg12D7ZL7KP4s46jLFhW1x65QstaBMQqpUjpgKxZ1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ogZgaWjDgPFsFn9apuHxbjvdFDimbZ8tgGuoQGHaCS2NQrhTC5voA3NgGq54Jg2k6AWMSXAA9aosJEgH9c6jMU",
  "key1": "5ndXvvQ6JuSPySwV8VnWL7y2FNeZNk45uoXXmQHHXYRxEympgKQVK1xH8vtMwM7VBPfPdrcDpqEsS5Dx8gFB7pQp",
  "key2": "4qmXsTUmGFP1sNqa2aq6FAwQPPJB33ycKNtyjQuxUZ7Gc6umEDkwMCCCWmqdY8pnxGsJdVavLruvHotFwmp1KtpJ",
  "key3": "3QkRHk3b4qJ5VJ2YbevfnYfgxaibYYdDYcX7H3HB6umu6Yferu3R89RMSAveiLciTTasan79ZWWNmW7pCpUnUxCM",
  "key4": "5ynSuAtdioCwRtrJ2d8S47hzJaxtjHSMASKgs9HSkTVXQ4g2YN9ZaDvd683Qr7mwd5UsPZKqrjP6wyw32K75X1U7",
  "key5": "YPkqfH4RYaDs4hfdX5FgGbUi2cwwrfUJb5fAA3Loemiv7jvfPidxv1KjrZg4HwuB13ZFAM1uESXtyk3L6TFUai9",
  "key6": "5v6bg64Za7BmM6yjpZ48LrKQ8LrPiHPK5GrVwXqtcpqrSwU4cAXBexeQuGJVkr79zukdxUaaWcrdd9ahtE9PWzZv",
  "key7": "3ADJZRsUihA1gTPcfn5axksZqqy1CKys8tcrCgmrkWq1eaKLJMuZRqf6q2QH1gSTyy6Z3fbWFYayrsn5anvDKN1D",
  "key8": "USTezcg28bG26PVs7zGRgSJTQhgMiLDNMxTkQjAwTp4QEVy1opfHEwhG6gPHnJpkFhcVG1mxUkanR522kD1UCHK",
  "key9": "3C844M758Ui74RH4UYeNPxu6JBqaiuM7BVDXgZDCgHy4qj5vEK3SLyKp9XAtmLVd74ZuwFRiNk6tLfhQmKSctJ29",
  "key10": "2RHrHquQGdVdF4Lw97ZPyj31BLxJs2rR3qewAkbSQZUtnt9aQZVgEiK72H1wVncimpE4caMjVf4YY3DhBiQoBUnZ",
  "key11": "56gRdR6VMH5gzahFNW3dZ6HnenQuSEwHK31vqLCH5m94WtQ1NXSN2jHaNhUTdNurghAHjeHNZooa5J1HzUvNY4v2",
  "key12": "4KLrmashfZqLLeUF1dbMyrk2M5mhQmdRcP1XN4vgrF5UCejWCD6L3DGgoVixdyM6p6okkPpsaqeLdvwhDH9cR6NW",
  "key13": "2rPVTWEXJP6f4DpNn1mNCCYhBsnkzpeo4s74f18Vyvfx1ZHjhnSepegcpWvRWMpqpCSLNca2Fx5GsfnJAidF2q4h",
  "key14": "29PoVdy2HJURVcZPRXQcod1Hb4SZphjt6MLag1Tytj1EtBLeq1p4vtbXSHWbHv7F96h2EAUdKENmWYprNaHiRD6Q",
  "key15": "2aeqL9PtV83Yre3SVR9mS2anbiexujNK4Ce27TwPPEU9oDuek2WqXkhtrdjNJ9XKMjCBd4ZQcC4NHku6GWLREXCy",
  "key16": "2ufE4sG1BSGe6pKYmQACaA4z28rjYwRThCddY51uc792EJRxNH3zgpjw9QM1B5ujnTUp7cnvffZxEPgnTxvhyLZ2",
  "key17": "jXx71xE1fGeuQmXB1YEWtAtnLhFDcRUbrszd7FCPUfXkAnEkDcj4AJXkg5J26dL7g5Yz3rLmomgsDhqJSWhAzZa",
  "key18": "33GLe71i9ou5YWrgYSHNBLDmJTpA5LQdXhFAF1UVGhdatJCtzebD6PKSpKPJ5qmDjmK9xnYQE2UraFEdAvpS1Q1Z",
  "key19": "5nWiGraDcyt3xbnzM59qwjinswWeMkgsy8kit8H1GFcYNK2YhVHSNy66Dbn5NH7qyfutKJCYzEkwJCywvhj5Pc7q",
  "key20": "5KEVbWgsJxge7ztdT2r6AbB7z48o4ce9iWmPbBT1r83kae3bUahEfJgJLAAZ1y8nPjUTCpphiwKF5HYJmkee14Xz",
  "key21": "3C5YfUXWTQWufFEHZzdevPsxyBT566qpTFs1DkdtSbFNhSWp3kkHMPbQe4p4qx8ZqDmu1chpSspHDJbrYsPdV2K9",
  "key22": "3xGVwoRfU9HDjCQEGCWvsePksTB9n74uha7fN4Dfnz8DaE9vsW29AjV55xZULQusokWVKgZQ4XQkhhMPNj93byfC",
  "key23": "34qvxSZBHaCZwLvfoJnbra3tFeSbNSfaXASLi8vecSnj1Zdm1nqcJaJqQnu2Kx1Zf8uHqvXjdGVuiUSdumctX1Ch",
  "key24": "3eM5JncCgmmd9KWZUc33TaZ7DzGoJQH2wp8bhvAx8mKjbmHmvS1QJjYDwmbgtAxwRMLZqef6mSXcLMi6XSuYQDeg",
  "key25": "5oub8xbinSRwT7LNZedo7a1Vxabx58Qw2x1ogEPFjtVcSiipMdthqXRQxjPye2rivAe8kkPfsLjgRr2Z47vsMdJC",
  "key26": "5MAMVvsuhrqWQuGLXqcXMqE2aUiyVK1f9D1iwDskn53fgtzTKFHfWend6hpoK9q8As8FTgjbGCPrit2jeF5ZQUB",
  "key27": "5T5pHThht3bchL34zzejYkz4Qh3fnYzUYJm1BcpcNNd7HRCbbUmrEBuq6U2VUYQJUG9xx5H7kBu365QCHngap1gB",
  "key28": "4YiyqRfoFXoYmuFRjeLH9UmS5reyWNYBsocPmcKTdqeDGqE5BHfDdj3jjsA9trnJbW9fSYK5dN9J7pednj66cUn6",
  "key29": "2xT83S8mohAMmJRunub9BgUjCYX6PQepQJcwngzoJgYPBV1B2DMqk2axD2ju1ERYwNRBfUNuF1QAYyDbq9WtbRFt",
  "key30": "DHFpqM4LkiVAGLrYJzCvTwAz3cHboYi8jPW85WaZNQNQyyNmPCYBR8vysQker5L3f7Ujjy6oBBnxHH7xmCZe4vC",
  "key31": "5FpsZxbV92SxTqiuYCMvX93ChAgAP7gSkbfeq1fU4AYGBgTdbb7DG8jHqMhJSReSmjm9E2HpoQwJoqDmNNUpYMPA",
  "key32": "5qcNmXgP3jgVhwyZBRh8evrnFgyphwTdnZdGVjEdXHjB2FxrSbGHzbH7sQRw9SoC3qSyqbiGjUqAf7dyQB61yPAm",
  "key33": "65GpbV3c51vGXpy2Rkv1vmdgES8wgWNj8pG9PZggjvfd44KJ3Bkwg1pWvAjPSk8FYcEzXNF4tT2Fw3NKco4YBVGM",
  "key34": "64GTDWTGS2dk5YgLk2zrVRytjhuwsf5cnNpxntqjC7nwSgZSreLricvGuA1pC84VHWDZ6SbS2yWxGRe5xLqLJcUy",
  "key35": "2Cy3AQTq7huyjmQyitNSFzhZVxcmKLNhoy2rEEShavZKKWr5bS7rGFQm95bJ2knxyNJx96CWAcu1S1FTqrSXyibx",
  "key36": "5tbEvjX2YJjxK46RdtYzcgrYmHKMCXRFMFmdKS1omvUMCdeieFrkFM8KyXDaS2odaddYNbaM4BeB847Dt4Rpcxm7",
  "key37": "3XaUzM4Eyr1hayjrefDjB89ntcDob9Qy4WgJnTKkrhsbB7QY5eibayntQbGKL3ZXPaJPCsrAjZXgddschthjACq8",
  "key38": "3BuywdqKTSHy2D3mnKtnz3Z3W2NrATg9664tP7BazHDaTNgXAQQi28AkUqwqohFRT4W4txf3nLNALpceah4Jmmgg",
  "key39": "26A8qF6TfLVzcgcifkNRJMkkpNHtVQEZTtidKEUedRkiomdhdQrZb8YrwKtsFWJhWVtUG5VrDZKcbdJKFWHbKxGz",
  "key40": "KSYN9R8V6JKqesYtEVGWJjNhx6MieQgHVPDgmWHqzRXWJQvmi5Bh6iqmVaW7uEfX218aUXBmZ7tbvYRnr8e8PKt",
  "key41": "3drrdF4Z7k56jgjhNScT6y3ra4UhPFTXeNS9461m28zgScRmmqQThjTTnhuwbQpoNq5TjMSsScf8HtoDY8Lu2PoP",
  "key42": "qizL3sJauBToeD4NKBGsi6vyvWajkVQoBvzcu5ij3CcCZeE5tPEEf1QH7aSVoLubAs8Rm2oEvbYwWtoAcRZHYaT"
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
