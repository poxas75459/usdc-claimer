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
    "4Acqyxg8BWpuJpLBLfbsTzDcezg3f1CeWFCPmEJNn88psPwjQoPDXjCb73HTHBzV8vRTR8Tsx6jLhi7FQW7xopze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ptrrABuJxwQgvUxPQEa2s8waTmQDkDA7p585C5bA6B93JuaGeY6LR963CJMptV9PjsFRXCgWWzoEBcfwXeioFf",
  "key1": "49N9fCPam3KxJUezfSbZMD2TgGiCULKQ5X8WMhK9s8us3fCpjE4FwmDi9TVo5NzWAoBRkeNKUQsZpTzNRwi4Gzn2",
  "key2": "5je88h65mFrt3wA22uXko2mekMZDCFbmNQ8dgLEUwRdpZkjcuko3P6xWcrLQiSfyLu8qEmpdSQiRZj3CiYreqDGG",
  "key3": "k3MJFj2THhuYXQP8BUraZkeg5KRSZEzshxju4EGaYGGUFDkN2SRZkd8VcNfVGWCwBTb9EHr6hZRtw4xLbEnoVjD",
  "key4": "2v1nw9CnpeVwr5cKNnrDji6na6JEV11BkEAbcgZryD1Y7bCgAtiGCVfo3TS17nwHd6bpVpjNYoiefU149d6wLARR",
  "key5": "6xBxa6h5Ax7oT3Rc1yiDkQXZq2KqSZxSJbXtYEVnLQjGDqfXkQfvcyXzhYM1Z9mupAA7Z18Gez5nLLS7KfxCVHw",
  "key6": "3DHfTnSzNgDERY3BdkHJZbavvLUPgSsUw3zQHS9ytbcYQKSUohcsSPWDugthNCE6Ew9HF6Ey9Z4271DWLQBncZ5t",
  "key7": "5oD5RysNacpz2FGMhXzXWzEmvNkBSspZwZxi9jWk48DbUiAVSRXTgt9RNzjNqYaAPAySdv4ALtqSm9WyX3PZoqdk",
  "key8": "yXFvZEiYy7jU6PcsNQe5e5imMDmYisCS2kppkbpPQJf6VgdsDgFxnPncztf1ebbsHPRXWq1tUUZRrbNS9vBtCup",
  "key9": "53JkPDRbdBCp9szzdLWTJzWbbrKieHFFium3JPD4NFEnL3gStkMNQuj9V4cYTst34jhdUrHZrkvfuSnLng5ju2VB",
  "key10": "4RizEEfQw7mS1qmcr4xsSWS395Hj34S1txRDZJ4H4ebYwp6Z4nspotNFJZq4vz3kCnn3W32F4ESfgBNCDSK79W5k",
  "key11": "Qo7oU3Nne7tX6GCKE32wU9nEhFSAXjpsyxseXUviCDz3tx9EhZdfWckMhRM5gAvvcsdsVPU3hBp6vbT5ty3fWRZ",
  "key12": "4fr9fbXPovo98ynU3fwWwcsh7amhQTsacbEWUQP7AJdUFMpsUkiFwiGusnEAAMe5WqHiEkT2jT1tmAjd4JhXaGeA",
  "key13": "4V3CsjXHTUWykmrGY5kWUmbCWKPRxJtT1VjWb5SDxDrGb2mHo7qsCuBtzanNAxNQJBWsC1CBVYGeZMQwMbn3mw6L",
  "key14": "5h4Dd8VsLxgeSqNyxqMJR1xXVqfzyXVV9HQbRB53T5jRErWqM1BySWSp9Xu4Rwabto9fem1eqmUzupxCvndyBprG",
  "key15": "41anPy4cxkM2ktN5njfELVLi1dMt9YUsQZWKQqdYroC8K7JQBBtVxRMXj1GtnBEvRrQuGU8d2pF5Dwty9iDFLXDr",
  "key16": "3AAvgSsUxJWd3trKeWJnXiLqmJSk38aLWYzz29GW42qtD4rAnqCMVnuCjnHoUdHsGjTqEK54HPtkD9D3kyqtt8Jq",
  "key17": "53eX1HPdob7KAbWUcxSoekybnYEbvQknoXK15fPLn57PAusAWmMuf7xd38Fp1igJsGofQj4QcNQsarkcw1PBvwGx",
  "key18": "5F1DRMiFtWbdXETHR43pZe9zsHVNKzsHirswrDNj6F2EL72oiPHHBwWgUNGZVQY2BsG9wn2rYoav5umqk4CevQEg",
  "key19": "4P5tCHCAVWeWbQfbiGBQCLH82cwxp5MFo5F2YmikRRfWTafmRxHYstEVaSAUMFYzgZcKBVYXU8ameSkXSmA1sCtX",
  "key20": "4SRb4MrXGEafnrkpWD1NtuMiwmj2pDJuvcSk93FnhxYPHXHbBRc6QqHD8egoru6UYez42MACLZCffTsNGfsqj2dE",
  "key21": "3gvEeNXu7j7ZW7TX8G56TuLtjtTTaduve9H164hUeYVePbRMoP8nU6dsvNFz6QJZPGn2F4CbZ2EmDJ7Xz6Ev1f7G",
  "key22": "4Wzvw3cPSJhPCQ8k15VzGCi9gWC8nKmc8xgB1AFM9bowQ7tqY7BhMAj47PDEYeSa8ykgeVbKXf3UsmiExGX8ny1a",
  "key23": "2QEVEDhc8e3uyWkJ9fPj3k2FyW2HkEjNqV9aNTAqyqiGRTFCiyqh7oajcSE6MaVu147c1KSRUismcCdBvNrxMN7j",
  "key24": "uLnMZGFniFSmKjQgMiysTBf77ihDAcq5jeJn5ZJDYdPbTwRguZ8GDg7QdWx42eAWVmVdw3jM4qLyERKfWwBz4Q4",
  "key25": "A8zGWg21ubLAem2eku5jya4GA6aijG5YfYRFtTkHdRXVGNzY3GdUhzKVB9MwyBUuZ8AiWdFQiwj2PSeQPqNPUck",
  "key26": "49DkE7Vd2hS9ghEQjryAhivv5bxR1xw13LAfp4q5Jto7gNPT2QMxNcFT8HUaHVCtYCU6FzqdBu1xPieYQfC3FjHB",
  "key27": "4kCSjhDdQ2jjLaL3KLRxfaMSrrg36PBguABLi8xWRfaaR4RjXh94Mv7Hb1tekGJYwXhxEuurvFjkSyjJUZ9CWHqb",
  "key28": "3gYvZG9XS1AtVh2D338PFgQbcK5RZJvogETWLHWLs1RMoigTbGfob3jmq4Bh17czPeWWUDFj4EYrL4AGZuBTTeqW",
  "key29": "5oKzxxFagEccWNLBiHMMbJYTBK6TDEsq3wuqpcqBQfuPRSjxhvhVymRLecfWzrkij2sesLTz9sdNFoFxLcirS6TB",
  "key30": "cwxnhvWTDdWQKUxAp6DbsmL5D68MS5hAcXeApGckyUYBk6RmMRtJEEojzdr3GQVgAUE28rvr7A8VsxijFpdRt23"
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
