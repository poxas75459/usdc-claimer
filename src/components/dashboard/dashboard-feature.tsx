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
    "4PwBRvJVB3W19ETrqguMrdiMSZmZ2zFqNtKRwErQWm4ZZvvjN8Tn8PN6qv7vuJSm78h8QEDpVfaNaoxmkpKhVRS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "thBNGJUecmZ4PZaJsFR6vazcgkC7ZfaeGt2HXr5ShEaWzZd4aAzHDV8j1JTKx5tLzDY4V7eGsG7ieVghLqCYckA",
  "key1": "yTcFBMnHBeBEeerBnmUV3644c37X2zV9xuRgX6FhgZ7nSsGWBHVnsRsRQn2RxygFWjLdKhDNrXwNu3676MxGDhb",
  "key2": "2cAKVxABArTbE31TBp9mtec9Pvd14YAGs9bxJeuNQEh6mNBXFH1traBkesg4d1q841JT8NoJ1TvaKYt9BpNxXHJx",
  "key3": "2tdcsknXzZ9m1xYtgAtFpy3LY3aJhs4Kotpwyxs8CVw6W8Yi4orjy1bAQtN7LKLMwqVF7Akg3nbGfEcQd1PhRvkP",
  "key4": "21jpESjHyVyq9QFJRqyYJnRbkNVXLGcJ7RVmWbjndbW2fihQsqmGNEy9xP81mHtHmDrb5MYenQfft9CQFzxRnqKP",
  "key5": "286Cn3C9SEGeSRYTyjXeFVyqHQ9KzSKVCsq5zx8awqmQt3p2ndn7H85ArLcDdFo5g44cYoF6cez76cmaYuqcJsDg",
  "key6": "3oPWgfwJ1B4CyzkT94xvxiT6d1TRiwwnR3FTM5w7qgoiZ2QUr8wnasswp2v3pHvHqhCmz9aPBNGduF3hoLh5Rr2o",
  "key7": "3jZP9DJPvN1QAbNZgBKX7y1NhDqpCtURffqZGLKHKHqmdWCaYuB3JN8B8yHC1xtvGpXEVAXQm68SBCc6NPwMLAEo",
  "key8": "2j8S6E4PaUcumfe8uWDvDPKy1EUCzr4YKqyuopbK3af1Bh9i5Sp5PPFufqt3tWhVrFaxvAMVFWqYMWPeWxGEMqEL",
  "key9": "3Sf7TD9ZQXFVSdp45VsTRx9FKYYDPvdt246U7wqBsLaDnw3Us8uoxymz3UofHs2CqV4rqtTgEYaj1M8UZTQTBgQZ",
  "key10": "3nyQg1uhfV17giXdf6ceWbc7r8HZ7zgbeKZXyANEwKq5ZvHWxLNUSX8fUiDNwxQ3zCVtE7gx3yGCShWd5aMY6s7u",
  "key11": "2Q6278ctN6EDYvmtavzgPYy4xgiWZvd2MzhJLEXQt49q75i61Bqx41mYKsgdYUagFLY6zJtbakYf9BjYnNHzxtSQ",
  "key12": "5JZmK8mbZxoYzeqZxZ91hzVZ2PDvNDZLjhjFa1kkEjf24wx8u9MEFwkBE4tzAWgD8Nj4uKsxJs1dhe1w7EVcvVLL",
  "key13": "52r7fLBnrwzdxZyYyxjBTerJ2x9cM1JMREWqUgdyzzG4GcgRHwBijPpNcQkyrSXuBuU8gXrhh1T9g822qNMnU5Rr",
  "key14": "5T2ofCrLHMbjASvTXfUV7fAozCV6DEnEjPiTnLSwJBageWSY66Muh6rFCQa5H9af5K3orBzRod2bGbyP4zg5cQ8R",
  "key15": "t1SiuoRegfNbrgS7yoVP9GwWG2A5JFYR9PMVi27LSTzYME1t1cnqfLeA4vtSgFoVjGmr24RAbRtQSbMieYxBJ7e",
  "key16": "3aCtdcj6eYcLRFiDq3JjGQ8YTWDbQbGm14Hk7CfCMjH6GZpoEQszxzMTKLUyDiFZ1xFBEajPD1R5qPrBzNqaDNa",
  "key17": "ybvZwnmQRg79FFYUYrMjse7iSmhLuBJK1KGzdsK38Pdgak5z4Yqf1JKvEkjijKysfb6ciuheH83Pd7S2pwtdoP8",
  "key18": "23Pa53wiS6QPcyYuA8ZgYJTMZtu16NaHxHvnBPKm5WnfhqXAUdcPBpypFP3PJDedKh6kK4n9tqs51BNdpZhr6vGb",
  "key19": "3XDV4gU8TXgbDFgibMWzwGJausfva15Lpr94UJDyxgmHrFkipP6n3GFp8L6HbG8dgeGnJGNYSJKuMGH9USVgodA2",
  "key20": "ujDvcH5dmJbqAj72TGkNFMZpFwxzbsz3669UQhaW7CiqufevwKs4rEWwn92K7mscWEkXpXqkjPBuXrYLmhfxxB3",
  "key21": "2YyFWXmEYQrczu8FoazzoMGw8YNxHmfs156RT8fTPFJ83NZZCGuPy4CWrLd86NA8TsR8DJtMazf92JbvkKWbQM1G",
  "key22": "48QoTFMXRcHhRTaZ3UZCujiF2Bwujnz5gxJGEozPiHPQnA8xmhtqVPq1xcePHtjPefungRVKuyJasmdaM7o3J5n4",
  "key23": "26Tw3DNMofN4TEUAckFHAmhgM9R5zYQt3M2FpYcgY48WZjTWmEwFXPLanaRedUxWuQo7559jNZh9y1hDHfKsXpf6",
  "key24": "5ZDeNSdmLAf9GLQxR3WoUkvk296gzXu7EvvCqVsmEtYoHohnrPGEKgtzgTiRe823r4t62ySxonR82QYyKqkEoQdC",
  "key25": "5jtnQLKokiVztuSewPirj34yB9iSmJVkXZWDDuYXNWM6qK163PjiHVRDTBzL32inGwA8jFsfezW4X4TjoNiPVqfs",
  "key26": "58nEJf48VZNvL4QU76uGtFiPqNndkDtpz5ML9p5nxHkTgsri4T9CY3nThLT7vQqDBuKQi1Rof47c6QKJwnrXCkh7",
  "key27": "3guhK31ys9EFag6gXXt1ejFs1iykYVKf9QmBgyu6rMBYupgcmjGkcQ7cuopjNocLYa6QymHKt9PRrMVzoY2nqSj4",
  "key28": "3r8mGWaNTiRKzmi9ezoDruoyjRaYM1rEyXFQgizMQHBmnq5tj2Y1opcacKQVRbMKvtEWwT2JwQFqy3R92vhikW4u",
  "key29": "2HrzrzawQz8ScRAsGewcMY3nvGLwU5BLCgxuWXT8AjMADXVsiUx3VmKB3Unb1EmMbrjHLVobGT6155Pd7KfaPruq",
  "key30": "3FBb1c42zErQusbeM1A1mf3pWV74yYu3ZXRD8Ar3HRMTWsVLxpFmbBs1MSgkC1ZrqaV1ENdVnAHX4wKL6ytj8tNA",
  "key31": "3cs7ENmkh4SbBguBqVvt6oKfVRCdFLNb7QqzwgAovWZ8po2kM18BqD6yi29fxx1vfyCPjYxPNzXsSkJ8chhcpww7",
  "key32": "RSBEyQmLGXwKT7XA26nD3UFwuT4qhpYnVuxPTXgEbbCGQHgqjDWGzYTf24soL1mLbxtvRty5FECXMkhBG6ymfpG",
  "key33": "5sc7KLxzVNhK3Wnx2fgvMnYqqQ5x9Tqr3tMFDovUyDQjAi2F48jpABZmoNW5qx8E1WoLthq5gh82FiaRnGZa1qRz",
  "key34": "2Z916P3wbZkaaxe7VS2xh6qYSv8SLz6A3NVSi4VXEhYEs2smb58bE7ry3UTG8Ppsm398APqeJZEX9rJZtWdyd9xf"
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
