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
    "3yRuNAsM6xfbWEKHbmJqE6YqxS71yLmQxm6cEiP6MBp2P5PTQPLSaYdjgJLLSbE1SkDh31ujViXAmgsaDH4EYUBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAYjJj3TeWAo5f8KA6FTBb6VgY45HaF77ferfARzZG5vQSwLaQ4YMgYVzof2iCh1rb5ympU39AhmzpKW7rdaKd9",
  "key1": "2pXgNb7pEbEKsPqPAQAx6Yk96iada9M5XWLc7nTJ23ZYn4mktSiL4bhnRP8tS9QDPNUcH6VeSjFJxrnf8mgJ3kkD",
  "key2": "3N1KNBo8NWoeffYnRgv3brJjFmUqKZAAYa4JaLfB1fKndk1TdKQeWBugUbbNhGzpMfAcn4v5biA5pd2P1yEEfY5P",
  "key3": "2kC929pPNYujqjLGfmP3HXLdq1j8WcqLCxfFNB13GrV8sArfsrypbUGLe1Bn5e3jAh8wL7hnnt1d6AEWau3m44qm",
  "key4": "B3xGc7isKhQvRfndEFRBwK1tjiocgzyLDr3Exmghy5htGkF4cHbxcBR4ATMe9nuRgqbyPEJHA6ftr45CiWXB8rQ",
  "key5": "517Ne1xqh9abw1hkhx7Um3zTb7NiX9oeSXboh29Py2YqKudZZBPmoHBMUFJ1TitFd8mA5zLFCsmB8xFPUZxrD3Td",
  "key6": "WCMeCvVP495aqGB8iJvytPsVaY1zAEL5XnuA4GZVf8D3B1RAoEjzVkrxSL6ffZdgq5DRkMhUh2DDrQhp2pcj2tw",
  "key7": "gjTWiC2VA16R122LNSJwNpi6WehgCjSJxzgE5encKz9FodvMrGqSjuiYKbYpDyYy3vhcic25MiqcqKZsV9FYU8h",
  "key8": "gs7nGvzLFdFLvcXvESG8XJroD4tdJGF9PSNA6WppA6KyxwNuZEsTHeCjzoVuxuchTUPVY5xHpriB6hyPELqFV5r",
  "key9": "5YmTrVM75JEjDvfaqpbRXvWABRwmDLbQzf99CicWrVm6r8yzr7bgDtYsAVdx8PPds5DQ92qG7rKjjRfTmTT1V8rR",
  "key10": "2js4yQBPzWPswKFp6qHdn9vaUPytpt5KKKY5paPj5VApNCVmRMXFvva7JfZ7Fj9GFzmRGe9BP9wz1GZQeSo4PmwC",
  "key11": "2dczEn3haTbqjN8DGCoMrvrSwdpULUrNQXruscuY49i6KuCZN3h2KhcPC1PCUbJRLHEMtAqZR222Mxp5Fz5LAJnL",
  "key12": "2mXtZGbFNDmGAgWQgb8qnTkymGgGupKFpTHkgLRW49RGNeq9jxq2jxbkCDYVt1tbdVQdmkcUvXt8KS8eqh9bXciV",
  "key13": "5jgS36NkaXu76aSumLQ6Rhoj7Tru9FMLM9QENbaBKFBz4AbB2BqxLSURMq7S4w6PY5YCBByEHkMPuVqnXrh4rKgk",
  "key14": "3mxPqrvDMxCgTxFzLDriapph1XEabDnPbPYmjtEggzphXcrG2An411crHRvMV5o7qshEHVDFr5bMBnyXNnfcrFD8",
  "key15": "3eDsEPZwh1v6nvaKj15PpgdjuvG6NcewrVT7daZyRDdqqreao8vinTwiBJLTD86G9HRKJ4CHXpeV8pc3z8Neqi4G",
  "key16": "3TjqHvRvsiUQe8jSDD1kMq4xaJLCaX5HcqrYTP3ryjSxi4YNZfKXBBsSfADZ62iT53oCMQcSJHze59jKaSr3JaZ7",
  "key17": "AzM5cV4bhk9xnXVdMjZn1TBMEGFaHEjra9gLcJ14coKSQFjmyRxkMhBy4N3BdvHoFrqAZ5TzzBTwiHYDJZqa8JQ",
  "key18": "twCWuHYkwL8kGd8VajqNrkhkFQoYVf3yZu8TnhfU2p3ed34skxYeHshEcKKG1p6zTMkpY7avJ2t814KLTBDeWF6",
  "key19": "ev5NpaGzTaYAkAX3ZhE2hydwxwREM5qcCdDmkjwvwouYTsf7bzhWBpbn8ZmM25H3AC23hFLFqwTgu3FTuFL9PLC",
  "key20": "3UPssqVmzoXsu6MxiT6X8eabuBCa3XDpdUpWvgwcu9R4L8WWXAhXoPy97XWzpNueqxLRXgevVx27Fe3uVVXxBDJA",
  "key21": "5aL3QhANrcKejWR657NXcFGGiGvwsoYYjH4pSdT1sTovyWHWYUWLTb8AD7qmbMu2C54mcJxn2FhtjfMGKFwCTW7U",
  "key22": "2GTjWfcnZN2oyioQb3Cc89TUjgtuFH1Bgsg9577m6ApJ6heuDEbrvWKrgShAQUUnHuaou3zJKg4SbHc6gHV5yqgV",
  "key23": "3au8QHQwjoFdXpn3Byfx3m2gyrCV5KNCpPKQm2rimp9T3dmDYjjXWpdGeqCiy1EzgZuRup3nrZ7QWd9fXSyygjSx",
  "key24": "2n2HHnWomkxtsA4vrhJfCpyZcPLNZe6vx42vNSwZ1AiLadZr9BrYchZhb37gk9xWhMNVLUs7X3XrAQnBXaNsjPSo",
  "key25": "2jD98W3eKcRFp8McBx3CgXF1kiFtkfxnYw6ANLB18moTah3W4xdgWNS9QR1xi2eydUFjLFHqqHsfhs7gZAhCbF61",
  "key26": "5Xn8sy3CJrPvPNGg6uC5SuxBdbRuuHkYC4vt6UGVfNd7AFNBDknTzo4QHbru3CJkzntjZ9PGE8U4t5NP5o63hCSG",
  "key27": "512oTZXzi1q99hGWsruESViUzLLNFtUp5MstN48KGmQuashC5Btv4CVV4Z5oGDMTiumZKZPU9iz7hkS2SnadLM9N",
  "key28": "5YxEtonxP2c3qqa2XbAB4ReivnEvVmeBxtuPU6M5QrEXqLp8WjMQCAQc7jUsjuZsNG6R9tEKyB9XZLtSNo6XrHe9",
  "key29": "A3uabNzZX31ABv71pf7aeCygewuxnMQEPUvrBFbNa1V8xV9mPo4AXqbN9TtX4yWTdcS9dZGoGFr3CK4WSUgt5Cr",
  "key30": "cCbtUGtdgrLtNiRw5XCi5rK5Z4vR4QUWVEs5uU4Reg4g2BceygXRb1GEokqKdvLwQeTxQEGihxNqsNm8CaCbW6f",
  "key31": "4kspCfLWuiF7GL2myGUCz731kAcZ1iAHE4T8bgj9Crbfs5barshVhxHX37NGWBMy8cJ9JFRsBn22ykrX5U1ifnsw",
  "key32": "5ZbyC5phxiyqEriyb1By2gX2Ywkd8xAXBg1bEiKk7s9DbfSGEsaHiC9jpe88UvdoMzSS97rqoDuCf8hhqE7rSHKK",
  "key33": "3M2FC914yKQxUd37dZHpK4aJaDmijG9Bf2HDP1t6r54ks8fWnd4fRxNDEXr99H6QEsnvXSKWefJeJQrzRqXbPWbn",
  "key34": "3x2h14ayb6qFSHQ4zAbRUFWqzDkbNF6yFrNhBzF5mjzHKGnxBrscCnNTfBS4aBaoF4QNb7sMZv83PfUqk6P4omvL",
  "key35": "2sVkDm6uHLytgPqNPVoWmcgdA9dCBY5CUh61UuTR5uHMGsz1GMFyfmvERfiWSsEaXQ7Cy9L3ausfeoWJUGqTdoPW",
  "key36": "5Mt5X6kLCV5ntGBrADrguXwXATiE3Qviao3YF3MvpjAykGGzbxSMMdBdtd9oWBY5qMcxmW8RsjKkV64EnRVAbEbt",
  "key37": "4jGP5RADEgNeEPnGxoPboXcX8a4Vu19Ev27x15isVLeE5L9VMztAoYtHo8WkMK4LucmS9gy2LgVFrCbKG3bLUG7E",
  "key38": "23jN7WqkTL1ZNs14NEu3JkxVS96GRri3BRGHPe473u55nxGnhGWRFRGL2gYt62XvVhzyA3uAwZN54StL616GXB94",
  "key39": "5VLgbKY6uuoNcQLDFmrMV8KDnaEFQGS7Se1UomWXyFQWTCQ7NmA89Q52xkxyvBteGKcxJaivkSHC4qdr4wJymU2i",
  "key40": "5Hi1shZZ7RXYwa8vJZdqfdW8cp9WhVCgzjnDFkADnYveiLpqK1dD7WKw4cKHoraHmQksVEq2am9UJwXeEU9a32Ha"
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
