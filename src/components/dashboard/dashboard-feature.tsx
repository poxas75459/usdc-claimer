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
    "io51YenRpZ646zsn9WeQC9e8M9UHY3kqFepkEsWbmXRohJZfaY4AuPzw8zxBbwDpNRJZPbCDoJhPYrd8ezcEN1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F9KFCX6c291NuFPcSEdNrrdLWhV79E1o66uTqzTun6NhLsN3aGxLjbkDg3JykYXC5zHqh7fk9Jz6YoQuAYvH2x9",
  "key1": "3DjY3qAb35zGgjgJdv6fBArLDqnHECBvsmuLe99fWjRza9BnyxCCB9W2ppcdPzy2vdzBJLx1TjwbuW2xQFkKcfrA",
  "key2": "6hjRv4StMGRbBYSU6PXcEDTQGTGcAakgFhq4n4jY7cxgP9kHgNLPHGZSvoGKBZzJWBPa4G5KiEHbMrKehYpXKwD",
  "key3": "4TLJLZ4XRNMce3nNtA6Hy9zFK94jnspvMZpKEDQxANFcovpCxvZP9ExhCnWtGi9JMeyaWNfiXz49cVS6xZxa8Bzo",
  "key4": "stA71BHeuQTGHKzcViEEvSi6MrQAbVvdED1T7kgNVpDpeFYBUbfzFpmBQR2v45ETXsEDoRZiMXh8DRp7r7jwuvM",
  "key5": "5FwGe4RtgaqcCgYX7zCJ52EaxbCMmMBAiV6L2p8Bc1epfPTDKgYLd1ZxQ7ULfDWA9GVPmEKReFtPq3CXZBYgAVde",
  "key6": "4fM1dLgEaT7DAj9RQJjUoJQMQ4vJioRJUXeUEHqFFNGgXqr3rWkT8LrS47EfgojUnYY1dgXqwMoTFhTLygA9GnGG",
  "key7": "4rjRTd2xdJ2qpB5fPJnb9Jyd22PMescNHvNDoXZY39YnEnr66PcqTqzf4xMFcnwNPryZyznz9DndVBAkikp1hnag",
  "key8": "4TtP6u1McatDPMvuUZ1t2sLsRvRwSHrKWwkgAiGVV3jB7BKWUssffyfW32fTA5kzkXo4X9ZiNVgUs9FtCZd3JLW",
  "key9": "4vXJm7PWxVnfrFMm4yepbDGQsGyrVvCdstoRfB5tT1KbN48ozNjzKeSpTC5GzqgJYTG9kxUUfUyg5HTZp95izqj9",
  "key10": "5jWhPXWbGf1gYNq3wtkqMePooBWKfE4JNRoVQnEsEsJEEQiJapDgsH1SKbhbPez8tKfxc6VhkXeM28C5oCFEWjCM",
  "key11": "5yZjqu54wqvxkVHQFcQEVUVCb6S5n3PYG4vbqLyPJwngaKAa5JibhjBkbuZ3A4VDbSBNTTZEuUf78AsURJCtFKrs",
  "key12": "5WLpQExRQ9fSHCsa42axy6oirywk3F5LkktYizZgqyr1tzEAbjTaJtt9dY7mCYfnimgXRQ36eYagyXTYuswiciug",
  "key13": "4pt3DuoUMMBQvzTREhU4KczyDzoTNmt1yJg1SjebESJrjqocTS4NEgKPCrk2aSd6RPfxTbtKybHUNXAYmVkhfXuU",
  "key14": "2wN4XZrFXPRjnuMEJnhKaNDRA4FtZvrT3UW6QgCBoZ23choaYhuoYCoEWWYfMPqRpA2FAgcq7KVjJcL41X8ovMBP",
  "key15": "gDokBLt1PAh7ciXuEd84mQhhmHEpqMBVoKvoqq5mVgjzXYYJamWqEc1Vx9nDk1rBSfF8sVUkWwR5qzRthrNj7aA",
  "key16": "2HrsiD1pHFvX38GFHyLZ3ctdv58kk3N3AUCgweLjMCaxdhChhWvfJcn2i2b6TE9p59QWDnnXGTvBrNtXPLiwjuvN",
  "key17": "2VvXwf7Ua6gMxqrDdapVNRgGZV4WbWGdqLu4ksFdphhsEGbgzL79xX7JkNRtSJc5aDdkGwqyXQMuUCryAz6rqKFA",
  "key18": "5413dbENXHbAJK3V83Buz1BPfsog1AnyptW89FHi5YopKwa2VjnaCAjNGhNPKLcJdzyWDi5q7aWz3nmG59GL97Yh",
  "key19": "5BEYhGRbAb4ahUJPXDg7mjJuuWkRe3k6wUPnTWmLBzvSGZBi794mQzCcY2nxB5fSJvx7DxiXRM4bSNeXvW9b26Dm",
  "key20": "2QsFBy1Yym8WJueeetDKMqferNNMvcrpqsMz7zjq1HTkzEuUNdE79wSJpJVhqH8QkyMRUxVMTpcBPd7c5XcgmEwx",
  "key21": "rZk9NWvEAcvrkLE7HDrtW5e3576umUNr1s5aZVBvmnSNQzMUoM3jWw55uvQ7i4S8HfHD2PqfSUXjmSGnVr8sjx5",
  "key22": "5qgeg4eeQSKrgb3P2sYpco1w9sMoZD4pvqdwHLCWQNbH249LYeX2txSMqv9Mr3KDotSN6c8pET7fv8aTFA4Kdqum",
  "key23": "3CngWkraz3pvL4UFh8W21frPZp78omm7PXA2FjkRUWibbAEcPq5RtLMzpVmvV2tJMGooevwKJV1DrXDiVxE44wwT",
  "key24": "2HQGmdHqfvSQL1qG38zkQ4ZVwR6LLSQSGgK5fsKRwWCnwUqcj7upUFv8q7XyXsZASxygdYk8TMGw1TBXqPQnSVV4",
  "key25": "3hcAuVcxdGcnHX6wyxdk1sEgUVkqh2T9aB36fdW2CK3Ndh6Jo6gm4W8hRRn7C6U3a443EmHGLc6aQ7G6gzLHE5dt",
  "key26": "4a5SdDSy9j9QhDEBx4N6Ns6QyPJ3vdEHMaE15fbG6XKH4RVDkwrnK5J9xT5Gm4uzkLyXx5zndzMHihjpsea6PyZK",
  "key27": "2ZzgwdNQmpCe7iKaeKUFQcqwkH1WHNremTqGq4vMcsqhpUiBwEE3mutRWKX3qdStkBqRAEHa8FXkdRK53q7ARVTe",
  "key28": "UArCNEc15u1qX7GApaPtN8mLQvCaddrJQ9Bh29tceN6EaaYy9BsEjqfcPBmtvzFW8sQd2PPieoH4ke5nGm5KPzz",
  "key29": "2CtLDF1Yretj56izVKqn8g8ex7om8tY7LkwMLjTJ2pDGD5tY1AGfmeCg9cGR9xGeQy1jBYriVEm4zEvhgxPWALfd"
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
