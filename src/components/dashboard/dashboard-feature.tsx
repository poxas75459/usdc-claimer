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
    "2UYcuf5nXvA73kikn5YB47TjSNmVYqgSxadj3fUw8oNJuHZPrwYgFjxz5xJHxrisF8s1UWswZKeDQ9uisWidemFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FA4Yq6eJoZLS5P3KmYFF5aq7m8h9htS2go5wAKRqrVWbnXeG422cG9hfbFBgkaJ7g7AQ1Tq1GPTPXo8d6v4pER",
  "key1": "5NAQkThah6oftXoWJnNQ58kfTCoenubFgEwtRzT6ShigXYGMbgB9nhSGfWSuRty1AQQsZGSzwyzH3uhGfCLzCkEC",
  "key2": "E1N26UjiEcFj2bcEDCevNpvWyRFUfDjZLdoFjGohS5QGD67ETtFgS4R1gCvc8a14eYSpBSLaasLSrKwn9JePGYi",
  "key3": "51vk3xP24hwHadirzTJo5oDSLDp8qxmDZ4jUQr9ffhDBzLRPA5WrZ4s8jBAaLTyVxRDbc1JYKnyusWMFEA7NvFbz",
  "key4": "5MHgkjwhMfu36QHDVX9ohaFNhywbZ6W5qdK7tkhX485dkUQdodvNAXJhbwxYHmwEG294j5HwHcx6TqGopA3iVXFx",
  "key5": "2sKYTmirL4WY4Wqo8U8yuuUzgNNoxi5mYGRnGZGCHdyDsX1NHbjC6Jc3DUB5amJnNbB6USVa7xUPBhN4CUjThaqL",
  "key6": "Ex6yMe2qxk4ovRc4aXpDW4Skif5hY7xnVf762Zbq4rjr9tgm47T8Qkoj3ZjVKgWJYAfTR5pTqNEexZj4ZPx9aNc",
  "key7": "2q317d13DJa66esyn1wDawnHkoVVEZDzChsxoFfbWGYkop4a1SwkkAevt7mAjuyJzezNrpQptXVyaNrYmbS61Fy2",
  "key8": "bxvJk8N6j2AMz2fuHSLFoEuH2Pgm7V76Yuerx6zDVaJvMzfzVtrZmReyqz6u6MEWk9aSWZVafBqpGti3tHm8DZC",
  "key9": "3VGs177XLnUiTP4fVprsxbQKKwcsa978rsdG1tk8CA5FtHmw2zWVNqHUg3UsCWN51CVEoHzCUykytW8MrJsN2QHz",
  "key10": "4hWLjdUKzQSkaKRN2tQVAeFKavQrfwJGNJexQSrgGsgs6bREB1xcNSjUyUXGeHi5jY8Rc7Vu3X3783yx2qQB4zyK",
  "key11": "5pkMnXADq1WeHhxcKFWEDQpaBH6Mxwc4RitnVD8DPyDSu1GZZLWqDxWY2aRpxXZ6rq6py7MWeCB7hAkpJcMVhiZs",
  "key12": "2XmG5ny6BNMJehY2BV3trJ1iVoNDu6ph1M18qtqLJU8z3AUutcGDKvzW1u2B9yKBfHtMpdpiaeVja8cAekiXqQVY",
  "key13": "3SQ9RZm5qL8EwcNEQTSiKqRD1ZtfF7nUUaofd4MbqoswTxXCZpWerdw4bRgFGswRVtGNBvVDunJgN3EtkprLuGnw",
  "key14": "hZX3EfT8GWFLfDgYpenrFntM11ekjBG9KpYj3nMCKEMpeqfgNUouN7sVRZVHbe5KBkiv9HEQ31yiK2Ew6mWB1dv",
  "key15": "3fQRZTLUZaWVgoiE89gkqju7m972HNZhycAYZWakuMZWiEqqwdnRS5WNrjHe388oeJjYqcY3nZdCPqJg8YDKD72p",
  "key16": "5oiRMJxvwwbjLG8ZHebSzbopzHETeVrBgVp4hhPK9unt8bx5Xq5AiJBhAgooAY1Z77qUvJFbmjNj76FZD69AVaS9",
  "key17": "v6iCnVaPxqkrdMbRGgTTMh8Da5hry291vhGLT15P4MYQzbfRhfv9LeW1tGmwfQWZ5UDkvGub53V7T2VMT7tpPXK",
  "key18": "4xXswyDR2s7UMcJZWXahf9C2Pzh2637yUYcjT9yCKStfWhboqey1cydRa87tgNyHwECPnAbHYwSdDQ9JeiDA8aZc",
  "key19": "3aKB6ovTdBYq9Sm7tGcDgS6jnTHWNWLb63q67QQc5EnW4yu4kuaN1gNWoFhW16fgwdy4zvWZj6w1Frw8D2T7BoYB",
  "key20": "wmRbGCwoKWt2h4MJmGZXeFttg3G8bCT5LzhnMidfKQPoWiLMN75DyAwWdbcQ5fsun1yPC9hfcAMJEPd6MM6esxp",
  "key21": "2pqt1mpZLsTd5bQTK8Uig5kYomBKs39S39Rtu2mmbRw6rDb1YAnVYSRTT99GFiY2ADY38YjnxUBo1DNAe2A2R36S",
  "key22": "5sSUPSf6Y7YayXaeuaZ2XSdqYEzmZicqBGQXAPfiUhcjLxkjoixhsLyStgxVrQ2necPXHzg1zooofDATAtMVuq5Y",
  "key23": "2Mpiy4TsaVayVqMrJDM9U1AhiuyKCJGbXNWjTSnnSc8gqPQKqF4pus8hujn6ZgrsF9YQshZRMbFDfxadzS1yPAFC",
  "key24": "4QwQjtxKUZaNVThpZqaVt7BwdrfJynKP9PNNgyCnaZZ884aVe4KDBtDkMgSFceAHGwSCX1bDsxiro8ddPagtZ9ET",
  "key25": "2qf7pVpU9g9qbQ3TY6RkZVteMMw686xMSN1GfZSatfZyRC8WXrsrDoJQBS8bBUSyFwrDxEY9Kw63sS1u2n3AxKuQ",
  "key26": "2WU9EQqnif5bUceDSi8Tuc4NosJQHBabBtz3YKd9vrjPXYwhQ778C6ABnD254YAMPWZqEPCZGrqwHyydQJB6NW78",
  "key27": "9uhRoubW1JoXKmmTyrK2S7v9uivTRGejEvZgYVgnSwCQRgPE3aMhM2tEM4GcYum6PrZsCscbCrJRtc24HNceGmT",
  "key28": "3RNPtFyCZf9yTghw5L2UqHJoGZYBtgRhwBj952kTBMMUoqJYULQa6gtahYUW31EevMMd1MbSpt6X5eUJDubCxXqe",
  "key29": "4xL95tNsJnfc1Fi7v5fAD9Xwfc2viuTRvMMUJsDnTAD8TB4FpZXcJXNPdNWf5ojY3cRLAJbnWt6eqfUtGEmpYayC",
  "key30": "53EFYdyxmZEzTXsasZkKiqtJ9mo26P6CHfFzBsaXG58L3rC1wPQ5gXXepX83oqWjBoDFHhUJsH73UyyxMRvyh116",
  "key31": "2kordqR6XMvgY6iFXjYRp6KnqXiS7ZMgNnTaYmcBpiVaryZsjj3k68xtQYhWUzzo6dPgruats5oEfKx8LSC1mmhM",
  "key32": "3WZaUw8t7Uk113mVXP5F7TiEmFXdnxhV7vaWv2R2SU26TQ2D5SiAt3uMJdSYz1Y1oQrdLJnK16S5DWJZMBN6quz1"
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
