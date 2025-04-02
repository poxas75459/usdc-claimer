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
    "2hXVkwtA7RpQ6xnQwmsVfy8BPw53LJYskoTbtmUseoNgneiwqwNbqQvouiRGzgmhBkiTimFz7UafDE2tCJPMfokv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaCA2dUqyKKKDDSSL7rAJhnkNa1xcfh48vBtcpE75U1rRtCK628CUM6LZP598JgFfJkvYY5VpGpwXkwWf5o2NcZ",
  "key1": "2Vj4jdpBsra85ovTFzpvnCzDsuCsgUp3ZdRZHhLVnbLjb8AjcJ2fHbYEAmaCJJTX5KXYXicwe7cL27N7vJ9yWMeM",
  "key2": "2JaA4y8VcjmYtBogwB4Q2nsYpGiehYAVekKz1Z7ZuNzJE86fBx3VVSHsphZPp7dJaEzFSs26ioTar1nSuwdoivee",
  "key3": "4tN6ywy6DqzdAvSWqQxHdyTz4FZaroBPV2P4TJEa7u6DRjQMhUf8oTZ9WdrPz1rUX2nRRcC1GLLHGVgXR1Tf9odh",
  "key4": "4xCF1PfBtrh7fPVZfwboY71VRMLVeqbqUFKUhQy9kfZ4hQPyAYQweLHamBZJQVvso9xm3Nsx34V42rGtPtbobiAh",
  "key5": "296v8qQ9GCvrgfoJGbZhw1fN4ZvL9vQZTYAEBdFDcUnpRbffRefv2EvN7SzEafiKFndj8upXqY4LtGLcdgK9KpiY",
  "key6": "3iPUmHMQdDfeNXyK7Vwj9dk3onV3ac9zx8vAbG6X8At9nV9awG2eNXixPpcFpkJmevcoMQbMdk4ygd86MzQBM7nx",
  "key7": "7aYdrNtBG9gL4PELiNH2u3oaHBmxYM8h2TSF6WTdv2iEgsf9eTrQmiazBezhYdoqKFVbu2dp6mjmhRdSh785xLH",
  "key8": "bTdNWZvs2RpHVPWSsprwfNoxb8AUTyJ8Cp9UdDSnbJuhYmqYJ82NvX7fiEkJTD59E2AbpD4YXGnj3QcuM3raH9c",
  "key9": "2dxUD4M2859QRDLnNXiPY5RWr1hQLDnFTmcWNhHU3v6UNc3uBYzb5e7F2wWBewt9BWDzytFVFGShZaxCrboUuW3",
  "key10": "3j4QxxvgPgnV5r3qEjdn9ChVJfnXFkRaUuR6RKo7vYU7JXvJjN8zZAhpdbwUpr1UKN5FDcjhPM9ZckwgBqUrM7RX",
  "key11": "63VoJ5vuB59DpyXXWfvtWUsfzbPaoV2ym8JYE7gkMvMrXVP5ipVTo7EDWCrVEZgVhCNKcPAUvrr3x9oNf7wR7i6W",
  "key12": "QUCogEKEUAof5CqPNTbkHiFe99E2DLXZu2xw2SCA6L4oTzb23FAnyfN22KL1i9uks2Kmn67syq1s96VcaprXfXh",
  "key13": "2XC559s9SjP29aY4kPFqBXs6VvxMwkqcyRcGUG9YvXoZ9wDiNCZWUqmME9gQCwBnm3bdy33Kp3aJiYzdAA7qWcr1",
  "key14": "5aAy3RGgQpr5ESp3NPNcaDbCgtAKsfD6WZ87968jzBwiYznkL4AFrK9B6gYq3nSJD8qYnHZ9EEhrGZXKrQU79fHn",
  "key15": "CBte7RVrTnC4gWj6nqWjQ5ePaSzHGduR2WeoTqaubVDkHUWGswcSpLkNDpg2qxfka3zgdmeedBASg6n7gBUF8WS",
  "key16": "4XirUzqdkc5AB19erwukdAoZr1X8S7N9Ec2woBaWsD7Ws3PjXjJnbE4uERSJJjPfrmB4YLmmKhGnsn2LS9WAr62S",
  "key17": "5AsC9Nzo7gaDC7ggUUzoy3wcQsHGCG6HJy3kjtVs9nSbCu2e1QsLRhc1YGSDJoRdveStc3SGEpV4a5w58exMZLFF",
  "key18": "2bWGf8Hobnd3KNScGc67b3qKqvNFErVujXpixhgW1SP8GS381bNDRWhCABPkPtgTXFSZjGVDc3NiNw6aKxfdeoRi",
  "key19": "5EuK63gG4PNAU4hertjw8fUhsCwh5bjhibb7CacQ4fpaf32k7qpMHyBCWMNTTzJyuCMMD91cpMCnzBzowDeKR7zk",
  "key20": "34XR5xpFnQC7C5aa8VTBEJy8MfKC5HNC4snn4m3uZ6PVH5Qz4JWGbfPYYrQmxERF4AK2wijX2RZvYCECfTpeEnPr",
  "key21": "25Ex9SLuRcsd41TKTNsSDdMuC4ZP18PVYwUU57wvVBzCSzkDHBvEKvqxPPZoZnMzazsA68skE3i8tx7W4wKGBk4i",
  "key22": "3owibaP8maft1g2xG8aUBH3Wfh1k2rdpyfgBRq7JMg8wQnRuBTaRUkwjzqQ7MMRmLd9seyQzYKT99GAyoaySUnRC",
  "key23": "24tCzYbtg5RbsUrsNAUJJT4QEhBRD5V6SvCBPNAgJA71busLXdnHC4Qr8JyGW3Mh3zWkwGsCEaBqT74o4wimwVnN",
  "key24": "3ZSGN4FvFav7hmoqUKaKXW9ERmZc1HzMfQm193rKJKmwZHS11X5niwc658bgwYA4ro7LZHmRMXjUokP7R2thWxXQ",
  "key25": "3HrXuvx3BqfFXp1FMgpdw7BwNSxVVPzyvy5jajiccKzGHC77r6gLDQdt2TGFbNfy9W9NZsu5PxFJRB6FPPkhHg5F",
  "key26": "4ipCeRPgHr5hzhUu4BY7QCBzC8vyyBGagmgW6Zn3rAu38tKtfX4jeLk6f6jKWDv4Nn7mVXFNiKyYVcZW1xTXLVba",
  "key27": "266J8qXEri7t4tmFSrre6z4v66zHJyQBrXn8JJZnYDHW5Ze8X2ieyM2LsCCdQHetNQJUf66dj1WfjFNLvSzp1Ygu",
  "key28": "PQt2F6ovacNUS6a1tXivVAan8iBCq3SKZ64rund893Qc6uN6xZhXnERR92Pi4BQyPFZfMrmghDhfU2qy1zjFnKf",
  "key29": "3NnK1heT4hZzCyv7VjRvEiQ7kkEm1K4C8jZyVoxUKv45Tx3BNPgxfW9kwdbexK3W7MvpvDbRqqGuYvoN8RUxQKPy",
  "key30": "3PFVcrRhycnXQpXZ7aZDtaWDcdsLN5vUVvCPZxX614CpenpP5FsQpQWqDpVPNckaeLiprnEKA1YxmPhr8mvLv6HK",
  "key31": "LxYa63KaiXiMCxGdb5LBundWtuxTfLGZEqadax7RDJEz3e8TLkXhUknYXGTm1etebtKV3ad8xUMFUopo13xmRT6",
  "key32": "3v5geHCABxmMHB5S9keTrLKwt5HiPWLjpTpnqbgf8WMnsPzkUNnrm5MXygRCGLHgezXHWTNXd6dTkSdoUhR6PJ3c",
  "key33": "4Gtj6qcNnCRoWmjyQvNTLkcTbiNvxVDdKQHe2Qg4LJuGx39B1GgpncDX6Jfh3cqEr3A7zxJBMjWsE4xeL4MYd21L",
  "key34": "YgxXD6oJP9au17DR6a4nM1naZdgZ6sS4KngnReEYYDjqpcaCDaSqAQZD7W78JvcTPNF7oJxWcHLeqD4JSkbCycv",
  "key35": "63iUbSaYsEd8H3Kw1U8ZKLj3ozZTkuZ8REA9iVV4FaPtnkyjJoq457mieu45F4m3kaaRU5aqi1T2GfGxS4THZcyb",
  "key36": "aR9g5nLncJfEP5tXSVMsVyRYVgs6xXVvDTsAYQiF65v2sTcD5BUksx1nesGnHjyEQwgEFPMUEhM9YbRqrLHs548",
  "key37": "36kRAxuV7BNmVaiEfN8uXp8n69tdChUQwyZtpQS1X4hKvHGLySQe77WQLw3eFa6oYmAymukSL5RAQX2nnNMSfWPj",
  "key38": "dcCPdcnQD4LD3b6ZfxPWkbPUoRPe2PtXDYYDRFGJGhLhvyYCvFVSeDUDKG2aRsq9mG2X1DS6FD4j6B58xnAkKmL",
  "key39": "3rEJ5XXB4w8KJ43JzRybkfJddJjuxyRzj9fA4odVSQfuTMKz6tnRmLz9XzCF91UET4V4A12Q9WJgMSZ2vMY2Wv7c",
  "key40": "USBzXDVeSmQRUUfg7SyXh4y7xtmV89EtQt3kh6zGRCJ3pWKwmx1t9toLP5JBJL1mTeiNaVBapjSTcaStEMAr2a1",
  "key41": "2eb1qUg1r1C1yZM4jzxmvqeToQv7EziDDcecvW6AqYPEVAh9E2rGgkLQTYFwLz8fYQsfnwzFQNp6j4ABtogaev85"
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
