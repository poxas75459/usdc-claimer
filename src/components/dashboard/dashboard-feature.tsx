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
    "3UCWe3nLBn3o28vB3rBdB4KXN9F8bJ5NcnZL4x6i3HqwAhTH4L9E72sLomCmtLahj9Yb9HyCiAvePemA6pLhK543"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orcmytxBTkr1s1by8owRvq5qpeRL6DbUU8zXQoDQZHpkfzTWZqtjtTBv86a4reNzxX6kVTLMakbjEGbbgcgaNHn",
  "key1": "3eeSRZ5WDCueeRAPMqQGG9u3tmJMZcxpeD7B7Td8s5dBogQsPH4BuV913DcNx5qsxw8BvR4GtNwE4y6ECyav3k7b",
  "key2": "EfF34ukUzzjxwSbrgMj75qSx2Vj3A7F8oX5t4heyeq821TLTX7gGANPtrb2BFEC1yR5WZu1i9z9jvwAJW8d8WLv",
  "key3": "5tpD7qgZuys9yj9RNDJ2QirvuQrN3YN8eBb2cofEmy7J3u75hg3fPYC7qK67STtKzxHvoDStxzbK7sfEx1aaE66C",
  "key4": "yz1ma4R6zZYsF9ZDnzp22BEUfAoGoEhDQdxHvHpKo1yM57D2EXffEmF1GpeVc8pE8WvdLzEFTyXpw8P9ua9xEcc",
  "key5": "453GJYnPoUEcaG1SnYudFESGugrw7JLg4xtiocvVic8otVffYgXUSVb4mh28xtxdVHuH6JVR82sL2BPYoqVs53c1",
  "key6": "5RTr4fRuUGCziRKgGPYme4ADErsYdVrwHPWqFSqWrnKWBoy9TqoUjkbdPpWFHewcApaYXK7F3VMhhNR4mPQG6M2b",
  "key7": "5wMT8YD95CsbcZKRFtmUKWzfsP7q6c8bVLcsTsSXBTKuAdAuHy5BMRF5w39DbvCCxTH65bwLjZvJCYaiGfUUfDZy",
  "key8": "3GgBGDK2wk1ZaKD4RRZDmQcfrq32aTVv6uWiRfHCGnH4rCjkHHTL53MJz8APiySQe4dBrTKZvdPpHZvmwikVYTMa",
  "key9": "5egCDeooh6jQYbpSN6izYkEXFD7G4FsuyDVNeWKojAAmmyJ14r9twRJMjvkGArCpnEHYUDsbPZRGQb99Cy9xAamE",
  "key10": "3jo7zTmBEszCaZBDSGnXdUuc1v6mY7H7ZHApadR6NAaExa5uzwkccGtocx1peQTDUGYieCmsst9Uj4NBkeVe627f",
  "key11": "2ovkF7yfrhqUh77jfUAyGjW65gb6KNqw7M5p52WSqCRjKiZXiefv3bM6uip4xw4oK8ysS2gw6XgcpbNV9QRUHxPm",
  "key12": "4jxDpT7o3dKhds3WWe9ARybY19PGER6n6W1sAJRQB9JoRDGCcin7QDsDppF3K91sL2u4Y7rm8pcwtF387Fy1vCCk",
  "key13": "5T5B3EKnRRqBg2cS75PchRK4PvZN7gwfpXPp9ejk8TKLUT3FH3TSFmZ3j1TwnA4kBYsk9V32BmZi49TV6xpLKcD3",
  "key14": "3sh1X3j6N537ZLx3g33i7uZ6RByVTPbUPiVP7iVFrWHWkNJXasGg7JqPaNCzquzUnKL1B6i3pP7ZKitixmBKCN61",
  "key15": "vndXRR4yrzNWEjrJwHsUK4xqnqxMBUaQyjgn28Y8DdbXuBGWVWJ1dJaRqStJungihZJh1buLFa6FSkzTtp17Bt4",
  "key16": "43v8aw3vsjPCy3ckjBvUxFM8Rvk2TQuwewFGUzJs1cPp82ZY4NHPuWLCi7ypcvZz988hZGxePgzcCd8KakDYFzE3",
  "key17": "ZP1W2PbYGjBpUj7y7Dw2mUxcjfoRuG9WgLgvVz8559HqFR5pUXaQ6uKzaA1X6nUfChFf4as8TqVCevLiwDPAVm5",
  "key18": "4wsh7nmXuj8EG8pEoaDnkQdnSNZCQWLrP2sHmN9f5F2dQpy36BdEfAaXmHACia8DstsuLPM6AJwSkzAjUrdCX9Hz",
  "key19": "5mjPNmwX8kxUnwEnhQbqxgsaehk23FfiCqNVz4HDMmHeKtqyNaLoNXV9nVrxX1veuzy9Qyq6AvxngkrX8q9cLrbz",
  "key20": "33hV64QWQh72LaXWt23r6xbqfwBYL4uiFqmDVs1cEoigbA7WQy73MeoTVTk6J4W7KEy5LoPPaRC5tGxtt97VzRwD",
  "key21": "3zpVQwBuvK5N67N67KJA57n6rS3SL9anPJEyCMTq5R1ky7PALJa8w24CE3GNqBCZy3gsosn5Sieaf5a1dzvJZjtB",
  "key22": "5TLLeR2YfnRM52y8g2dZ9vFMnr6E8pHD3uu5DysjWCeP9zZDierfaJxYC8Fj9PgrQwjFNxUeuFko7AcNKpBTE63k",
  "key23": "1DemZF4pE7Yu7SXNWghM9EPGoBESQb5cwujK6NTEXjJJ5x1zqir2HEm5dKioUscymuK2Heo6Wqic9iFharU29p7",
  "key24": "2qfaHmhyCszAXAFNcMWWfxV2LjxTk7joK5YBwQxZKeQ9YTsZXxeDP67uCJU3dkvpuJjAS9uXA9tqX7xKRNxRw2B4",
  "key25": "33XRWtUFcKR57F7DL8QsfN2F5W6fNtA778tbSDwUjWjbGPCdrjVcp6WQuJVZTRRz6i91U2zSPacYDgSaPNp4ZEkj",
  "key26": "2VGWATuPFbayEjmZuJnUPEZTvjBPDhgFQ2nrk17ja6E4nsGFfQbKQevKVKmDFrpVro51JviV7cyVqbgR1xrLne6j",
  "key27": "5K4CCbF2ZfRHA2X3ELkbBXgiuSxKztf21bo1uyfFNpaYvHhDUAFJSe7HLsfPQQhtp7XDHnhNenEsivtsVtMmv8pq",
  "key28": "5FtXGVmVZgqp4qtwv9T2jqZdd1UqqzhyHcbG5kwUhrfFEvf87YSKaCdEmnzMdDtUvNUNsBJLVZbVEx4RkUhBKphn",
  "key29": "2DF37NVR7hjVyvH4oPteomWVGzdePamJwUets2jca5Hr9nPcA68EKKtWaFX8fXrkTVLSno88W2ypZ82joGvuUK57",
  "key30": "3zj2EBATSKvmXR2TxjcGaS83mA3EnRyBoi5iB7xNPi2H5zbnAnF1WHtjxiAcoJhZq3yH2FgprUDqiXkMtJtukQJ6",
  "key31": "2jX6waTQqdLJ6G3G9PT4cTpKNmB7di1LZ412YE1AxtbLu88PAEByWyTkVVQFzu11oPmDbivE49q2VAdduQAHHtGZ",
  "key32": "3Mqxooo53p1LSBywEWKjA63pNYsD4pJbqvoSUjWVFErNDuudfh1JGjER2LKFSK84zEhvf3vTKc4mEUJkFwU298Tu"
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
