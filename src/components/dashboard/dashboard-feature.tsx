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
    "5JkPce3X4wcQenyzrfPCjBtBnrX9dKzPsXtbjNvre141vmb7n7uivCLWhi3oFe74QSoc4QjaTUoTj74aNj7DCugJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vfJCvLLMBMu228hwQPe1TUe6WiCrQg25TmmPYTb49Ks51SMA5JHPypHaBjVbSuXGDQiouWhT1axj8n8DJbqnfLK",
  "key1": "PpwbXyeyRxrvZHUNBjDRY218H6eN5VZyKo5vnFYqXZJ4TjufpoNh5y3LEfJTQuKNjySQFWEmr28cCBzNsYSdrji",
  "key2": "3AE9KWXPFyGYXfZNA4mgC9vrUdFNGAwEKm7XoTbDcBFvh7R8K1DKjLF68FDVLSbt2HwfRytZfZKGA4dp4XNgnMpe",
  "key3": "2i7jBWYEBCG1ESkgkd6nFy7ZCas5gw4jkoPmxkxdJXdoUKDA8M2mdasfeZ5bVpRxSQGVpJvTGbYi8APExmC8VTz3",
  "key4": "pdJdjbHrEt6kkWb7jeUmT8dSdW18vp6pre6ZTvh6JHq18ThAcH6zPS98wyeHiX5dEc54SoD1yYiQyQjQ9WVh2HB",
  "key5": "4JUAGPJXfy87tjhEBBfTZCPbtHA7W3VJQRmPXQXrm8ZFFwkGromUL9p1nWTrxsva5m92ubW85porJPikAiVcLECt",
  "key6": "geSX2WgA33gHiAtZkdnxadbSMrVu9oRCGJbZHX81fTvY6LiWomFeiRumoJUth6EEHqhJMVM55LX2SRG3DNsu2Ee",
  "key7": "529sQCvdpsAwhp4sTLUoeNUSGGrDZhWtyKrYk6gjzdGMZL92E4UKhKq9acCqbDBoUw9NFsoHbZFtGDFoeRHhyxH6",
  "key8": "5i1yxtEaBGT39tEuHGj9KES9c8ALy4wyDFv8qPGB7tqiLtfa8hHUCb7JHKpRPB2dZhZMy6FL8ddWUabEbg5yPdZV",
  "key9": "sYfV2tXNwdoa24bajqnwtpoUibBQy6XrctEDy2wiJtnhMaLuTzzqgh57aywJaJvY7J56nD9TcPZiaENzsNx9i7L",
  "key10": "7r4X2k7Ja9xBxYNqEETQXGfybvzztRQjVzkLo1eGsChYByay1tqtGLrFiZk1MwaAXhW8vyThtdrEfKsSdh2Loqm",
  "key11": "61RLFgtRiFTUvLU4C3DUZkfLnsty6yw65iGjRdtSYaVkZwgqrTZ7kNa6XCUqe3Hwvqy328FV5EHxYFJAEKZPyGG7",
  "key12": "3N7haiRaoUxWwMgiJRpErUNdFmYecYoV2CmttKVzkRaLkE4CdFwZ6LwxNGXnDaBMH8zxnCYxCCMz3AQM3hWnbkjc",
  "key13": "2KbmsWTmG63k8WQ1vBKTxRwd115C51c442vxihSSgRvXYTN8H4oAKwoqzZV4D7BgLzzKHqowx4KWcz7ukeNPqZws",
  "key14": "fLvUV7hZt2AofgJV9WknHcgo3MjK6NvMkcUdR4agheE5cWYgrrr45ttiiU4wF9YDceXCqDXKfLcUVvSBZcuVR6X",
  "key15": "4FQGp1xX1qBQF4WoCxCBq7TrPAEy9mnRMSpQJWPwLat52PgiyWNMnUpLXo6FnPEZX9EUJqCrBfCsApFao93LRjcJ",
  "key16": "2btWGeBVpwHYSmTKzsVzkdoe8MA5SvYfdo5FQrwtzBfXAWZRPMP2mpwe4vR8Ym7PRQUk8DekWCDZpmEHssaSd4yC",
  "key17": "4b52JVzKp3XNt46DXPXxpHD5Z3eoHvz18zB9qzL2kg4DBvPNCfxJ4SVASGbJ2fQ5i4L6wTo94HTwmavfCq8PKPL9",
  "key18": "2nSYx9V4UiPVWHufr7uA2H693GE98KunxALFfkjRwQ2XJS7s9YUya1F7hbUfarL2dBQizsZi9CiGobMx3MuMUKLM",
  "key19": "4i6GWVT8BTcLVV4xXc8ovkFSwLfxGfLt1xHcdphzyV34Jaue7CdD2BdpkNE1asjJ5xj4ZF8oyX6Fcus91v2UCeKH",
  "key20": "4AvLXXw2jENE3o1mUhsKxfJsLWs6dxCpTBZaPeZ7P48Mc6gM2b9cBFyYVyT3smoyESKxqdJqj6eeF6yrc2PV8z9G",
  "key21": "GyeCiPXEA1qgmZtmnMMfmhZhocmNKfgYtqQq3AuxWvmXvoyTA4dijNGNNNTNTHWFQgdsdGXHCZCYL6i7L25yRA2",
  "key22": "2XiRDAYc45x1WvG3MUn2LsB9GJHpRW8Y8FMJGxKLjoUfg2ZziKBWJpBp8rJfVPGLAmCV5EcSiFPZj7S3XBVDUbuE",
  "key23": "CD8uWWokZTVDZuY5S8e8JDkiHApHath51J3jsxZ9s5Kmx5rshWxRDixjMMH8fiecrSjzTiDbH61BGkoaEWLYi2B",
  "key24": "nZt9fxb8bMhSGf3H7TqeKWL623D1EA5URXDXQqnRh9d8GT9wKLYjmRfZdgkA1qdC5nfp9uNDjRqWyDoaqSCcNQ6",
  "key25": "5GHanFmE32bSqN8XNjeQW9443r6kGmivRpch9Su9KVpv7gcHgW1XM3APy3B3iFqnaTr8tSMxRj4t2CLRbWMTa9zb",
  "key26": "467xwo7xg7CbGPC1QZT18Y8Zgg9bwbxNUKgqV3iF9ZQutWLgfVePtuDamT184zkLxbiDbBrvGSixaJUEp4jM5j38",
  "key27": "3kEqYjZfpvDH8pNPxtXpKP7UEvQuT8JpvjSjLFYecjDUs62FALB6EcXjZ9iWqdiKUfgwpmy9VYEm2HCG5CdUdNzV",
  "key28": "5g4nrsFhosCdqz2HDiVScM14V4cqXmKVuQfVL6EBN6JkUaQwSgoW2JKXT4CDMFXv9Q3hHCdRpmcgZQub1nUzLgZd",
  "key29": "2m1qMPCok5f3VrDaEGPB6T3toxyfXrQ3iMT2dbJ7eyU8s1Ytg5ewBs49Y6QrS6WcGzdF9VU6GC3Y6y9pCKrz2xX6",
  "key30": "2d3nu8b3GLMagVdhEzY5KcQ9RocKjtQhXjuqj5wpxXybMTzpoJj9xvomkg8fP86Bxso4GRoLEj1TyaTzykPoGGsw",
  "key31": "4PRkQCAgxVRuwdqoCsdruHZm4SozLbDUpewjenmLtpcXiRynKyX2rqEBzyGez8GNoRaJMhtZnkXe9qfpVfRLko1D",
  "key32": "C2ioqV76iZHa82tpdYwtiVAFtkUoTQkeXGyt9XPRZKWkDJxB7Dro2hENrxxQ5FmQRTccPVHHBRtZVGLN6hsCrH1",
  "key33": "6dyYYtaV137uoHuf4K5WSQoEsyaTp2STFnJkCkraMF6EeGKFLHc6ffHV6GQwynHXaqNq5ZF9iBifjQMgXY7a5Vn",
  "key34": "3FzY1E8ko9ebhMARMLwpbmdYP5TKCtEKYcL4VLyTEcWLWra4crHoPTuiRQkzYm3HdFsRV3aJ6jfwX2nb6c39Pofu",
  "key35": "4B8asbwxeVdNWnQCDLMXjtvVG8WaXNraQnEXyXroooSw9keTPyJN55AtEZ8u5tWNCP1ubLVg2GbfN1o5qe8KA3L6",
  "key36": "68wwKBSuZuGNth8fwPYFtQyYAqjBBrGtNKugDtisC3vhnSFsjQ84zm72zugvRmeqRpNMSc38kE3uZCfpSKDjkfm"
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
