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
    "5E6nRPeywmeLUd63xE4aTDcprY6hNq7pq22MKUxi7XHoX2b6UwTs84Lj7QDJ7wFLopU4qdqtshebTDfUfSbYVW6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpbqDMnchKLHhV7W3BrRN3pxpSDN1gsJf5D7K73i2w8CkWxSdNfjJjugPDt2ba4JkDKXpKJ9eXkKRCxMBqn6CXX",
  "key1": "4iYBqqDoU6Z67aosvpeHKNyJFsX94sYJK1fRtC2R8pLqUSEPvLUo2kk8MkMgB3YiCJaVj4hDgJMeVhdvXL7kM8F7",
  "key2": "5QZ2FQvrUfTqsb5c2STMc4DczdG1uanfHHjgvdZ5q6iqkJyJY5A2LimA5oHkPLRbPN1sqGfxx7o5a6ydxv62BQoh",
  "key3": "4uBudVNVuXpuRxNd8VJjZFn6aWjVYKGGUY8KY2J35wtv2RAKbMLUwww4JJjKanUx5NrqXpBUcXiNEqhU2K3yvrYP",
  "key4": "5KF65L5zi6x8LTezQY9i5Tdqe6RWq6Y6WVM8VfBAXcwfREBTL4MmsVJdXdV7drzgN7W7VU3drSxfkRJLoVQZ4Kha",
  "key5": "2HUBM7TUvtFy9qNHQ82KjANtdd34iNcFoPspKyvhGvRE6SPhQco8fJv2xKByzMt2vU2wjXeuF1UG1tcoz2zWjhBm",
  "key6": "2kdXaDJ7eSWurp6knNKT5NpTuEFDUMHciUhB6PH86A5LZ9u6LcpUi4g9gYuuKZ2X3dugCvbTDFXc5y6PgBMPVifn",
  "key7": "5DfS3CzpM7urPQ5RsYPqrgdhrgEJDLdFwgQiMASD7psKqwVQj1zmndPqRHo8Qh449EVP9vADephKvWUxkKxtUXFL",
  "key8": "3PyUmFepQuLE2mk9LjBH8WeFTpWhSb7FCzy4upuuBvNshPZum3zCDaefnU3KUxq27TTJeJsQxSM9oFHM6h6P9YpF",
  "key9": "4GakhuHCkL3HFeu6D9kD4M3igjDbf5t5PJYPF7o6kWtpxhZ52EAS9nYbBdeKdWjC54a7xgZzscEwRufV2ZVMoKYB",
  "key10": "4kh6DyYHjBcnHQoAXZGChsfGfeE6vqwNgq3zodU2KTpRycq9PdTfpckfTfiTLVSxKnNw7v64Jqt8AXtDU69wwwuW",
  "key11": "41zZaUth8fuL6yA4bDpehairLxcGxAc4574X1fdU5TKq4Wufyk4TxqiaYrAXMmVjYwH6XWtZ9JKYCrDRfRfcJT4V",
  "key12": "2ZuTTz7L7TeBEZ2HAc2qqU7mdKhJiBuz6zPoRc2YqDUAsHpejxD2CniD3LSFGXbgcgaUzX4oBXGE67wgaHXJSxoJ",
  "key13": "4j5DKq4jdbitGzj8J6T22b91FWeTCj2CtAb4xdHTTZqybqM8mHFvbEmmypv6Ue8NJodTfFSX2tGWMDxJLWvW3gaU",
  "key14": "2i4miGUh6k5gSRzC6M3o6MrhPGezmsbzSxSkjg8AJ9fscUTT1kFQWhnLDwwGeZCWS6qzkELed1HdmaUNaongB7wT",
  "key15": "3VHTvdRxnZDP48MoxNftqGSH1PoR81ZJM88V4QYs9Lgx6PgGUzLHo4pJJDbXDmgaWPXYMFNetQLQok151sWkD7gX",
  "key16": "3u21LdVyiS1enXQPHSNzQLTSR89TEMqiAhEav2YLAt3XMaAjUMtudoJDFKBwWVy2BR5KdmpX52rAiuers2gHqM49",
  "key17": "pnVGYdGNJrQ6rTZE9i89tmpSXSqsZKTJCdaTFSeHuymBt3ouPX69TGWeQYg5fBF6e6wffJe2dq7c6B1PZghbrw3",
  "key18": "3EzJQPo5145iSu9aBEBPg3RyWTVjNBXdXVADiL1jXJqzMPnz2WN6fkKfCN99cM6JNeZLdhUgvyQQXREeVKMKwhJr",
  "key19": "2V7zBWVRBvaPtj95RXKkVqhAUzVMkFMGPgJ1HheBaEeGQbaYwuzxKjXt1inRuAdz7zHYeMb9wpMwLvxchqk8k4pV",
  "key20": "2mVHV18C5EtRX2k9WnxzcjgtC2N74wVahkSNJmuNABBBN2AdA5shD6AuQYSiQteN4JDN42J3SqC62Bqad2UaHmwT",
  "key21": "PF7W8c1NbRXXDeeoSrBptR1wa5am8UoZ7XYDxtCKFKALkzqdaHAeQWpRm9AthtT8hZnyfuuy7z4ewUtdPcc2ERh",
  "key22": "27b2TQHFmac2pC4k3EfEyw1LcZjK8hEmivpXnVN2E6hVqvG97ifGzRHFv98N7NYzdexh4QzG85Q1E7neiA3QFcvk",
  "key23": "2zjYR9KWb2DvPSTBSuFnbFU3viwWe6RNp3zSDCmBtJNuXCbBa7Wy7pgjrhcSk1KL6MS2YXLc4DRZzhh7BgnQmHm1",
  "key24": "62J2PJMzSBXDERYBWRz7RFP8MHLMGXvr9wrq2gYzTXu2hLnrvFE84H1zRerNhURcoi48aaA789Ke4cXbs5a9wa8T",
  "key25": "2oWJAeQxYDbQXNrR3qpPrfRy2hSLZzWyxfRfpThnhDBsngj69Xh2e7FLA8PRXoU9DhGZNxfyniC4SBfUWLKWJSLE",
  "key26": "3kdLLZfVE2ktx6hTRxYruyuR1DwEzvdhe2JfBuHsJS7YtoLLnrgwed5KL4cWZP6ZFNrGt5bUkgVE6jWREKdCGcua",
  "key27": "2kw1JRVHaZZJDrwpdBG4nSAceXeQCFpmGLRfXhkfb8nR4DUompPUNkeXtmwQkE1cV1oftwz16CPeWvjzqkQDAR9A",
  "key28": "4AHGnHZDu2wCdMByf3SnQW3WcK4ULbPC27q7WNFf8DjJgWZ5yHW2Jtxqe3LBZy5NfYgRkPhKkDmjizFcDmNwza2w",
  "key29": "3dUYQvzzbCu215AARP1yT2emhMqi15VbKpTpsHb5ngazzeP2YMGBwXTfXf6fhM7XgG2vnSVgW3oZRAdQmG5p3WLY",
  "key30": "3Da2MHa36XDDYCLLRyLVJ1nZFevaTnXx2yAFjnrsHCvw4sqGAyzJPmFUeQb9rKfRHh7MRusWz5fbiNgMH7bVJkHQ",
  "key31": "2UPVTVxhn7NHMNu2Mf62AjJ6Nk5FWsdcAmvm8rFPbefU18rZRQrxESgkn2uo9it7rx4zysj9gJGZAM3uCaXm4uzp",
  "key32": "3D5qwXgGZiddrFKzrPxJnBcvSCt5hyv8aHojhSLv5r6REU4nzGfCrKPia9Bzs4a5u51aFrQ2CWgdDCchZc7JChVG"
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
