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
    "5A4nkmRUXxCf2T6vLTsdhhcySUYzbFfFUTWyjZ92VXUjfoxFyEtfcLBM8sgjvb6RZRRMMaeMScUvm84X7NErXEhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GeTvSnoy1dWnzVQr6YRvK9RUUdAhFFMRKhERQFiscbjjWH55x1CZpWRLMjfBdfhUMLzJSfmyRYq5raZFRRUQmzA",
  "key1": "43QwwzGCmHzrikZzU6DtiLu3NwXsbJn8JZXMRXqNCw7LR6398jQLrBtXyhH9LATLGkTRSsmtAg5SbDjV6A3H9uv8",
  "key2": "4CpfLyzDRdSFsffeotNBhmHm7gHK7p2WfrhCwYNEL3MxBoc4YkHWiarLggTaBvUsvTus86DrTc7PDaEwZfwxzpsb",
  "key3": "2dZdUpdLZMKaRPmun5c4PFYKBKstLdc47eBMvY95eGvkhnfJzaJ7g2eKRevJbK8jymh89fsh9bKB9LADGAekvYtf",
  "key4": "3BmuzSpNzXTCbvJMLsqnjaa18suXC5g9CqWj8egz1xKhDU3ydVrbydgTNz62CypKJkTMuSE8Dk7WXkrZJQVnDDJ1",
  "key5": "2NsDwhyaPPgz7Umv4wYKX6djLniT3AwjamxR3QFWK15fUteKdaBLJo8mY3Yz1vRoUHC9jdQaALQ7gNP9A7WHaFUf",
  "key6": "4roH8vyfLRvuKmKrch9FWYJEez72rNFRQ1mUWw2SngNtxwZ6iiyYXgHvshy3eCb8uSK1RXDzNWkkBgXjhGRvuBxy",
  "key7": "5cJ5YfRDFZs7LFHs2LZu1Q9Xcu5hTwKMQpku7KnNnBLA6odVCRj1o24xr4xDfGXLyqDAqmpZ9whFvz24ChmGDjpj",
  "key8": "4KAibkWm7uRYGU3RTD6skmZ6U8Hy4bPxHfTzinz4JSP6E1pdd78uQFAGtB7QHFTxHK7bUG7qnwPuf5HTCu1Jrrmu",
  "key9": "Xu844oreADn2bx3CSxmtmbYYoF1iQMc38B7uLCA2S9qqcmtco4TLmd5ZaC5MNSURWGTz8YU84DWmUL3zq8Pe4GK",
  "key10": "sfhx5MGVxqDZvTX2J86y5v3YMKYZCYF7eiMMvCzinc2iuXRpm7Y6GdFn79vPGu6huq7MaMgHNQsQhsSthn3b2Wx",
  "key11": "4bkmn8cLstVUEFSyQLV8Hmk6MR5yCW6ru71R6r5mmBPgY3pAHRYL9x3BNSBwxc9JngTbZUn3PJQLoiHpWTGND8GZ",
  "key12": "34P1pJYFN9MG4VfcL1Hqp3bcvppwqDm1JXdyEKvCENLU1Df41q7wH8i5hWdHCrz1Rgosx995Rwd8bPrY3qurqi57",
  "key13": "5T38SFyDJBgHwt3Bk24n3wec9c6PjVwqbytRUEUhLjEfza1BJHZ3WDGf4NKbSC2iWg5dAawhvPyjv54cn3w6foHN",
  "key14": "7uS7aqopcNjw71U2CAXBtjR1pw4LDqTRdoPWQ7iGe4Gh6eykDT7ZxuNwvJr4cT5agwZkfA4w8ftCYe66EYQhGVi",
  "key15": "JSMCqWhWUFMxNrnsNDH3N8eRPret6mnwVm74rNx8VRoFreZxLJaS8RjxcKGhtRUWS3SDDrrLNG6Gx9vhjPNCuQD",
  "key16": "59mc4tMEyGfRMhci25uRCD8wfuhmVV3fTNirSZiiXH4nryfudYnGHGbnwYxN8hyfMgT7YEksJjGbPs6SCNSb6BdT",
  "key17": "5BnDXPRGJ8A1eix3V4Aq2QJAb8fbUrtAoTKeCUzThBAhoFHpx8Aq3nEGMRnJhHNicnioLmkh4BTyQrh87aoQyuHE",
  "key18": "3JYomtBJWRkGfr91UbVh8JH7WKfR5aT1wBYydjHgqov3mbeW4Kw6ywCy16JomR2E2UZVFcSRMFpkKbFm5rGR8coZ",
  "key19": "etAYwj6VBfm3gCf6iCDuQSdtoK5F5bqDTEuySfnXyzJeCPUzZZEtub49yj1JsHUWFMJLBFtwEcBsVkAd8PTCcdY",
  "key20": "zwJ29MK44G69ipBKGBi1qGNzViC57JLh1C6sk6YMLw1rc4qqYyXLjCw7WEdTXuoqTkHrUbVopBuf11scJ1UJqkK",
  "key21": "2CSY72RDtBLgST7u8cKGkZXB7NcFs72UgYimnsjJqzbhQ2wLjDsmvdLNq9LjNiBrPTAboCQUzrHTRhTKXhTD3Quf",
  "key22": "HXG7nhQ7QUh6HYvKCa2eTy4dcGnhzXvRL7LD8j6p66Nj7kJVSF6Fz3XiQQoDbncBktAQiyuvrQtsbvETFVc9G4D",
  "key23": "rTb3JSDRzGdBauKteGdwGKD1dRcfoXfTueec7vToH4aQMjBcBvpn5spf5n1W3uNFjANNVkycBbDcxQUMn25veMd",
  "key24": "Q65mTt2pkHVZ1q9WDzYoE2oRvnsCzyKVzXJBuwXRtLz7iSUnzaAv1ksuew1XCS2ZVfcHbjwirnKrvCzaoBBVaB3",
  "key25": "E7AQqRgAoUMCAr3ZTisyDaSEnLKvCGfRHwRMrGRSFqNhiXpxhxNiCCTfk2usk1Wex434uu72jwYLz2fBEgCR2wH",
  "key26": "4ubDeJQZ8bTHkKVSMzUjmgXQ3KoCjY2qw8LmMUW4QczhepRxg2JH2dfHS7NrVLbj2Ktz3rucf6Eof16wZ8yDDKBG"
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
