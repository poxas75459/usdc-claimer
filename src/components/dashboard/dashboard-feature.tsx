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
    "zo5NXSQs3UTSJLEEeLSrdvcvnM1pFvYEn9DyhqotKWXmkfYaK1iNwwyrjKkkiPyGu9PbqsTETqLEAWtCAdcdqwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvL85dvFwemfC72yfW7ADCAfgRuDYUXg1cZji94mNxszozd6R353D1xfmQieVWUX3ijhpDz6UkSATAmUoGHhUHy",
  "key1": "3Xm5p6KvKjfJMeigxJK7aTvAaWjP63mKt2WTX7xnq7i8jSiV3MyCoRFF42ECBFoYKQs6rpfxozsXFpLTvzCuJYyK",
  "key2": "2jcLmyqDaYWsKyL9zzr5C8wb7DFoyWvNN6c2mr2sD4YLMcMEJGjErXQE9BpB5hEn5TvzaabHdjU3a1v2Y8ProF16",
  "key3": "dYf73M959xjt3Qqdaz3EeZpXCPfwpVQGV9DjR1AovMpGpxKRBf2DjpAGX5dq8gF1fP3nk6QrT59UArzTaMKpbTV",
  "key4": "3Kism9qktVBYgLyyeCmodc8BRc3BtW7EXJVefupN11YCJ2zM7V6hYjD1A2XnGDqh1ZkLzuNoM81BW9H8JQAtEntF",
  "key5": "cxLZps9gD7fhB3SpXG2Z455aUSggwxPN1uKHPxb9SYf6kCAjom1xsmgLpKWSHj9FqDitV2rSwwBBNd6yPKnmN7U",
  "key6": "4SYgKvW7vgUcAyss9zgzQrGXDrmtdTEpDniSZXL8k7UU39bCc76XzJPL6qUX8KV7azkJj1XXK9bWKvDNYGCdKGgz",
  "key7": "42prdQrEA4FtnmHAWtU3TJvNLsw1PodENH7N6B5VUvqAGbSdc1vxsSGRC1xRWWXxBBexdpjUsMvBXybojthmWk8k",
  "key8": "3AaVXiitbXE5rezmok3bFPwh9wf9dZkBdAA5h96x89dQZp3RDyqH2SAoGa2gvunktc8YftEfrYutYsN4BxjFr9y1",
  "key9": "2Ljzn1cPP3Ae6dbcnz77gWia9JgsmgdW7UoUg9KEZbCwFBxm2w7uCZTJhi5gc8Bas6ZLyWTFZnAiEyveMzEv8PTV",
  "key10": "3AtpZ7hYEz9qoiFeeff2VSg3mRag9LjSSs4mxZQk3UGU6VSy7djWmBvx7bTvwRMSmfNNaUTJy1GrkMsyxkUdKAGt",
  "key11": "63iEfgH7cECq5W644hapDL81oo9atQwBEkGg6hTFqbMU3Bod1ER7Jk2yX8cTSqk4DcuZyPj1WXqEsukfgWrGHZ6i",
  "key12": "5LrRiehYFxR6EUZXkQHjeXMvcFku12BsP913c9hyajsgv7jpacjpKbgn6Kq69V3bGcPBuDpKVE631ynUVTbe4ZJ6",
  "key13": "4hkB8aRaFANxwUSBzGjD5yYGneqUp4h13BJpY1yTcNYb2kQuEL58WrQRRrL8Wbpmv61Zm3yd4FqDWw1iNkZcmM4",
  "key14": "ZZACv2KBRcMPgYUyTCe1dEg72wHcJtiJLvScp2mE3Vy6MXnZZtntGZEipLR12uJyNaPJCuHbxByLJDyqo5doVnA",
  "key15": "53bkSWNmczt6PrCa7GdynDxeBdmbshRBgWLizBzy3Yotc5d8tFcyWQjiSzZFWHwz7U1zE61z6bSE3UWGLbEzT2fb",
  "key16": "3EdjRNN47xNHWdCHvnqJoU9VyNizuTcFip7e79f5LdNBxUg4ajdC7y8kJobgubCKrfDPbyaQft3zZU9B3VDUkMcr",
  "key17": "42ofNit2W7UAkQYrwrZasU1bphj1n8NHwevLkqu3vSMSAmj9hCn3GZ5s2Ek8tD1ozeZvhTd9NBUk6Yc7n3UezGLd",
  "key18": "5jxDhCGsiLm2e5rsVPbwJJkDsD8VZLeRmFakno8ygCbqSUjJqz8dTuwkNEXoVTFBdxABCZwqDTFJVT9T4NrsUtvx",
  "key19": "2k9WsaF3rm34XtooUdYq55JSRoFRMuAiv1qLX5DeewH4CpX1WetPBSfuCNBa8fTv6kXkvwzVjwvi4atseqtdGfLJ",
  "key20": "3VDVRM6Un8vcUoqYZVjWwDhu7fQGzEwnHeYWD2BUqMMozyqcweyok2rBcyqy5AaNARgvgw3V9zor1T6yUV4EnTjm",
  "key21": "5bzVUzLhoWN32VHben6AqRXKSDvZahtnKdJFyeGejuAKrSEhhvDDGUK8sqrFZ5c4PeaggDVn6X3xhfZ7KmsGEs8d",
  "key22": "FXb5X9NiaRKhPReyEGvMEkxf9rZPvFKe81dGNfgfnFLgL5waTxZso9tYT3ZVWfQu1pC83j5hMgW6a2PpTEHg4qE",
  "key23": "5CUaSJwzbuNzJFETt7jYUvSYPGPDpD8qGM4CUUy1PLpy7j4jwuT97VfGPcbKLxqd4CmNMWgPNW8CaANpimpokxLj",
  "key24": "4jR3w2TKLsCAn3jy3gfENzpWjwAooFtU6rqSrLYM9v8yp1A7VGjd9sRkRe4NrtZNATUGYcLjXpeLFiCT3dYmHEWK",
  "key25": "iR9p8h7XztSESesouojdbNovTxGXuGBeFaZULUhkPirwEur8AvaqSMRhRZKFGq56N1eEURXUktKQhq2eSbq2GVt"
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
