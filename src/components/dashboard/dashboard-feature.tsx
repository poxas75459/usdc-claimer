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
    "59FrrCYwaMwAye3LFCozK4fJRHFgiUjSDkDDM5tuap6yhp8Uho1o6LnJC15HgQXtFoeED1TQfVK5G41VnBjNXicq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBhhcDS3GYFZJEKc7tQFYNEXhjPRNmemhZSqAPZAH52NPgkXBSRvEL2C5nJty7o2voPvYzAC7KMXUH2MRhcTT9g",
  "key1": "4Nd5gTHvcUFXpJFV35JsQQzxmuoVH7qhiGohq6dUnXfNDixYLQ3c7un4ViCAAGwFAdJj3eqBWjMUJDH3daioxbX8",
  "key2": "4L3cXXQ5TjGW6dapkEqU4E6XTNwfdVDMkxf1xcMud6gPTvEcgqUBBd1ZbBxaRh3yRJsUxE5f7p4FSVbH3TqaSfqo",
  "key3": "VXkyffXJJ8r68zRZ8T67KBTv57sF3TgFAA5b2RNuswEQzXgRbE7GaLyEKBmhdgmBzhPXF2bV7QSvjSaBtb1PH5y",
  "key4": "2EdXENE8PZiDXEiNSL2ohm49TBmnaNLDz33gqWvRcLo9qgcTrp4twXR9tthFKNJNDDSzW9jjs7dHirXvRo5tnFkz",
  "key5": "3kiarcmmtXaxPnYx15Ug6KVCJp4biXgwQ2F7SPifsZ5ivqyEU8YZVoAvvnXvFF8c7fCXdB5oM1e2DkPdKQgt2SW9",
  "key6": "J5yPnDKhVBjjVrbUG73C7NycayijwNZcRHE7sTivkaY2uTxk6voDHcvt68ATDCA9xTTZRjwba3umrHbePzr6WNo",
  "key7": "5YDHyBbQRiWkrTxutCwvSTonudSXE2LWMmfhgwTiVbQUSRXaKT1N8KzHi1RLEp4cTnhmJnKZeuHcdJ1Hhi2mKjgh",
  "key8": "g3Ax1YLeZcpkoptrhHCSoxDh3T2HCuTKAarqJAgcmhFsqRQcH3UbsjHnQHzdJKFFLSfGdGEsAMek3FB79da3DED",
  "key9": "3CAdK7BSJdKrMBDqRxC4wQsp9uRJz5CabzGJt2BUKRiEmEvz2st4F3cYjx84Fetg5b2KRhZseatMQTeU3bumR3mP",
  "key10": "3YGMEESyNXD4YVmpAuAzLHpC2duYUa2gqz3yM8UB78DpbjdbRWjTLeAr7Wya666Z4o5tAD62ceNwCegqUeJBLBvy",
  "key11": "2Gvf8JHi828rKeFSMP8bAd9JskEPnKUTj3vZuAH1Z474D8ZmPgje7ZzM5RHq2hfUL99nYLYVfFRjVgin9gJMDciK",
  "key12": "2kkR7q1gMEXLYPSyaapLLkhWarnN8N4A5AkyzaG93EtZvyqULbUN1t9hwhCEsNDs2aTEo33Th2QnkaTrDAgTrCsV",
  "key13": "5qBNfYhVe29mUP1AFGjswBxjXWasPXRPtENqCRV1RR9ggVduRmxkDpDGCnVbdikUrRDvboqx61YyaLTz3doAPmSS",
  "key14": "4TkDwS1gpNCHKQcVYQFCcBkn85e6fwDx7gfno9tey7evJMHsUF2an3moNLmTDeS2895nWwMr5GwfqQv7p17vj3He",
  "key15": "2MJ3P16zVJ9PqRrRPm9JfiupPUsA6LwKbjVeV4cXWmidHUrPF5FnYYHeWdM6uoTnzYF3jGPDG1YWFd4N2yqnA7UD",
  "key16": "eu1xtTaHjmRqSc3Hsd2oR6eUjDj8GwddYHz2zbcaYowWp1XgKrXvzneaWgyFbGFpyJNFwcMcbvCc1BxZete2vzL",
  "key17": "PFPYTSnft8AVGB72smbGrjPpK7kqKmv6fUbjBWNV7Pe1MFGzrcfjisnU9h2RuMYBxdnMT5Pzu3vuE1E9Y3jdtUC",
  "key18": "43Ls8iMbwrF57gBpmRmSqibkZphVQS4Cr1Mtz9b9TTZBVS7Dvwo4CxvoGpV7ygLgfjxivVm1UnThMNbUdM9vMb8p",
  "key19": "4xc8MktYJywEBxyXqfHenbwviXvkyFTFad6kBpFw8mL9CJPeW97VW8oG8v4aP6Vjr33mWGPeBPqjxTCG6g2ACDQE",
  "key20": "3zyYDnheBHv1xWemSizeSoAUZMZaBsMBfSt34Fw2MPtYf5mouw48PVkos5vXqBvMz9xghUeFdZeWacfbgkwHW1LX",
  "key21": "5Nuu2Xb4SWEGTd3vjJwb763zN69GATr6k7Ym69Jukmx1TfcajWCbn85u9e6bWENiSFgNp3kCELzD3V28dL2j5beX",
  "key22": "4rncy8AYyaXbawiBHNfRibQkR7bfW2mLjcqZUUna8BQSUnJUqUq2r5HeBTxYNEBgGQ78GLGNp5bENb8LVdjeJFWd",
  "key23": "59pLDV4QghtHNNVWmte5nB6pUcuF8pGevXLxXcFWZdbms3Svyjgn3rVxZGKuNgrpH3haYCAACacDJFVvBxKqQFgr",
  "key24": "3AZapQsEALezpwCZNPxxAP67xFDDwrXs6boLJLD7oqdCCDk9W8XNjW3WeWd9vnaAKVzwv7Dx6xafPgtizda8YJ3G",
  "key25": "Hnc9qtiJEhJGBtLF6hmT838YAaxMBimmp7WUYcey4KFLve7EBvbugAg6WV7fVe1J7Xc7gUSw7shqBvQiwvtnCmW",
  "key26": "5mDZm7mUnfdGUGdPpmzibo3w65opyq7Ny5V2k2GaHEEEA7WSAZAKUF4m9Semv1mxx2s7gXNfQ3Gv2AWijbFeCqVr",
  "key27": "66ZgXWB7bZVnFx6SwpQmzy6NDYVDXPoSGmhX9rPRuRK6TUAahR6jULMZvXVVp8m19HuY2tAuxT9ypb3JVNXvesMF",
  "key28": "5NpmQaw2GfpCfcLgpmq2zfRi7Wqks1Ekra7R622QYVZNmfaUwjwCLwugaN7Hg5zkMnohn9Tq7fPcvXqk3QjHEjGQ",
  "key29": "4w5y2qu45yqdMwLteLdKkrrgJ4zg1BBGcfqGnHUFbpwGepkqFkj7Zsv6iD492AX8nzrUJH9h6wmHy2mnWwYD3BP4",
  "key30": "4NXq26LXQczBBrFK9oZFRZgJKgBppaNdESq3CYeAgyLSr7CrVnou66TV3Yv8LFNe1ecAm4epypCJEPKo1rNcbNyW",
  "key31": "23oBt9ZNhnixZzY1xAhJsn2TySx9uC1Bq41oBuBb7t7tMnPTwCYr2ENvDCjfS4ff6FABpKCuttKZSWdiekERbDEJ",
  "key32": "3AGyzaUfW1BJkVwS7dDxBFxqRm4BgHyWvhwGnB881HFxCW5pwAwPfojKk41QYGkQ489WJg8jVNMUndwhhTh4r6qU"
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
