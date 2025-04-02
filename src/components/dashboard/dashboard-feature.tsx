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
    "DtBiRvoueKc4ZNU5ZWqthuB9VQDhyoejycmCJ4Lkj2TxvDfwQybXf2sA4szA376AuLoqpH6FszoPneQMkyrjRKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxRrZyc6EEjdPqHppMaaxCPzFdxVwF9xFs8DFMKWLnU98obuUoGzdjhcztc7HeBQLqMFwR51tSxput6rmpQZjNM",
  "key1": "4aeoaKxpe813iLqjS3k98fzc1NuerCYd6dzYeUTZbvVHoUhYDYCb2PstdW1rgDb2GRu1K55Q6LSej3x7gEiHh7qs",
  "key2": "91hDBRVqjnJYd7LoeCxSnyVxwHnhwzNPDG142eZHiHeLZuQuntykXrpzAAS86wxunurUycWdt1sdAcKQUnVva9a",
  "key3": "4qtLpWtToxXjbSNTQ61mYWoEHomt4A2FgzGnuta4w8LHmJSua75fKJDBZ5hXfPJxH6UfH15fraGZUWgMvdkFbAPG",
  "key4": "2vL4XyAEonU8Esmo9BKhojwU2UM8KcpQSwJkFKDou9xUEYL85vLZoDJLnY8C3rWvHMS9snw1Y1WTrqUrBrGU1RwY",
  "key5": "X9BRcLemBAWWPeTCTsrgJhLDCEWiBCVoLhP4EDmC8noygQPUS1pcMoadz5cJ65AcgFdPQEYv8hrS4RgKkCXEGTr",
  "key6": "3eEAxZdVYSiixBqkvW9TRrTozgQxonMT6aRH96h4w59awZz6avri6XEJpHjwC9Wc6qh3pZ8kessZF6APQq2zkDZu",
  "key7": "2R3wQKjcCqu8xHjjssyAoVJjMcp37NT7HzHX1BLjEQcRdN8uaZPfPGkSm9QMhtFk6Wk6DDHvpRcxHrLDhFQhNFp2",
  "key8": "62nhS61pdUisRp5gvV7v5ueyQqofY8As1Yu9JHdqmJS43Snk1fRWCKeCq8nQNdJJXMCWzADF4YoXbtYhmKV5zkB8",
  "key9": "4TYdckZ3LoUPQoG5vSnBjvnX21E21K1uD5Q9J1jKmKSxothx4EepFtQUy4otQwmDfZoVUkNWGFELJLRNwBY4L3AT",
  "key10": "4gqXSZ9LvdbtPk1ZC7AZYHDtEGRg8ydwbKTjeY36YfPx9LBSv198nkWf3U7kWjeRVdD1jqD7KHJCfD3cNsX7KtKj",
  "key11": "2PpqTaWQcuPoME5NCdHpn4kpLcocmKbmLqW5mp4XYFQL6BeUwCbPX5NzxcGMswbU1vnpUY2UQW4oUVm8YfDVgU4B",
  "key12": "5XhWaVDRgftFc5W38x6xvXayPzWG17PejAEKoJRkpWsCf7WNcuNwBiEz4uAvpbxg9mWvUpqzDfy4BP9wQZiQZGV2",
  "key13": "rZT9SQoks2uEh87McQvFYknTeg8cLEbozDicqE4WkmjqTNopZ7YFC2HT5xEui7kn5EqiaJiSqr76DHopf6a5duW",
  "key14": "54RSbmLSCiuJ2XPoMhpBZobsDzCPGi5j8ZzzopVv2z9Qz4cam3jL8TSX6qpx15wPYritg4Q5PWkw6UxdXovQpdPC",
  "key15": "4e6ULEix7AVGxCgxUf2o6B1McC1CvsT1g7d9bs3HArLTJrMnS5LARnPNd5MFXWUUFPEEFPsSDnN939V5UKgCtNhT",
  "key16": "3yLHLwg734WzKsYoJWiCyMEvj9bEXfWr8zezdYUADYdh7prStp2LGPaabhfk8Q2eXx46PgKHKLS9DLvj8cQymJXj",
  "key17": "2XHNtTk63LoJ9FCPJcpfvBpxRftJC6nW7obCkV6f4NxSQp8NVXBS65EkBmCT8nxw7XVpGqzfg5RXfLLWqZqrNJQS",
  "key18": "uxDbucTAh29tEXHULxbuEWnXUspGSaP54SHSVyriM3JgxzGJGfXAbGVJzXCzqNzTLj2KPQKh1tosbAZJdCR7UrL",
  "key19": "4UwbiRkcpcUZ8EVRsSZHRPiuHzZZ5BswKEBbn5A4aBAforJFnErqdk3jtwpM8dWWz5Zfy28kQWLfoFRSMHRi6Ujb",
  "key20": "3n8UUQMjshVdT4F49sk659JZUYiy4yvSjGgCTKqZqxhhRVaq6XNhone2gZEChDdjyjhpZkZutrJRo7YVedh9SYcW",
  "key21": "5UfP1LULS2pqN8yHcg78JpsYkB7Mc3zcezCNJC1GXFppNCHiUCLtHTdkxKDwNNvzd3dNhfhJdjhqRF6d86MRpZsm",
  "key22": "2kLGaS5jXPduuwyLTHDxAbNc5qv6fRffyFkupFxMUPg8MFWPHK2xBVXVGduzxtD41r1dxH4KZFcKVSyqwYrhLsJF",
  "key23": "C5rPJJWDPApsNjbi8MBwg7Y31FXqiwrqyz34wtAeTcCf75CivmMY1ANp9ncRoAvdFL2U2cA55J3HQTAmYH7F5sV",
  "key24": "46Vni3Bcqeayac7mLQXh4PKXuzFhD4mP9AVDJWFgsrks6qYZrWBL9NtznrMgW1gdrtLQ9ea1xYtjsg7GrE7apLkE",
  "key25": "2RfNfQXjUJARN4nXpL6kAW9DBNbEHmN99manNdYFtDFCBd3ss7uxx8QSf3336pMYErUgJemLLnmai2xz3tLS3pSu",
  "key26": "3osK2veh36Ds1vT3cgScYBgZ9X6rCaPWpofUkcw9C3RT7cxJoerwYgWaSghwDHigydg8WyShKUK24HA6jB4tH5Ka",
  "key27": "tYMbGzQ1tPVvdArwUTM1xGqjRJNRd5a4QpdoNxXWboZGWZQ4ta9uhaq7ft5T8x5YHZVEBSBH76BsZ4AVY8ZALSJ"
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
