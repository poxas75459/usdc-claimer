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
    "2ndzKTWMFDHTg5K2RRdqM191RrjJutquRAYdhkcrHBEkNjYzQQscVZcgakhqynRQC8rzszUTDZUWtoAtbBXSpKrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ogdr4etmbcTjr2cwXnhXQdAAFwn2xPHTDvwQmNYQ3NCR2pzghoUnqdnayMi1CRwhNne9h7sYGtgiJtRdZWmDKSh",
  "key1": "3TF1zAUEnTHQwh8gh3GEHKyM5wNDvtogxuyp12mEDjiPdLjQVRvC2vHhfioozXRGNmDVqS79A1NEh5WztWjrCC8N",
  "key2": "2WHmgpy3LeDj5Co5RMsFMteSdR64bhf2oRgHizbagQ7vFyg6uDueEfmZJAmPETothkYzKYQPZQrFBEsk5VebVGf5",
  "key3": "3SMrjg6LvSPed6fEpPrhVAr5hCNwZHwXRyDjdfq3nhPdbuqGLLn5ry9RC5wyxqVNAe5dScX2HwkD1iaHGyEpfVpD",
  "key4": "5pFgqo4dzPQFhp5i9SjP1jYTgrsQFY1hRLhAgeFu2seLJHou7f3D6XzXGWormgrU7vNSWton74EqBX19XQEZjMuy",
  "key5": "3Bz6AfQMJYtj9ZwD2GyC7JXdqizgiY5qQk1Fj4fmfhTjZvuL1ntywjWnRqHk5Eg5MagxsuS8aYpWPRfFDo9uudD4",
  "key6": "iLzQbR8W8oSWDjipeL7F8JVwEAEKcYWMBwmcQLkPAQpkHqC9jqAwtj7L1yempoMKA5JteDtJ8ym3QGx8Lpn7swH",
  "key7": "HfvYe4qbLzvJVEqH2o2DMUrU4AUELqn7XDkCnowPgwjpq5hPvbRUcMW2ZcyFuDRfxNSVgDnYZsuDNbLdS2WWVHi",
  "key8": "4noDDqhbHbpvTcvonYLQ43oTAWazMCXjyFSLgQF5eBLzGZVdtYvjXx3jTdNYWyTriyewGQNkX9KE7k4mGxCmoiU5",
  "key9": "WzDs5mPotNeXK1KdFDp7UvrNtHnKaqqJ7Tg6es5vpHVZfXS62MXMk4K1bDTbGdNkTEDeYHDvEhaVSUHGs6FHyz8",
  "key10": "4z6BGkcgUaht7WGnH1fTDQSd3vwUmofXsroeeWaHif97JG1GQZS78XSYT2JrdkYBxVrgxA7pCiyBU53ftA96Fu9G",
  "key11": "5dbXeUpDiaHuDNA547aW7aDGNJrRL9PCusQsgcQTRsPVddNJZmGdFjdaGeAes8BePaivcs4vZDhQjxbxMR741oMW",
  "key12": "5MqEPDe5Q6a4xpcGKRfTLQBjoYjyb7tUsVfkfhxJd7KFnD5xF7nThPW6d6qYLkS2mWiXP8GafY6KrfC713JhiXoK",
  "key13": "5SVL5LBnqw3otA1FmnbWu113KeYiZfW52c3EFUgWvMdUzHUSQxEcfoDWWq8gb8Btke8vktACrMqnNZFo2oa4WF2g",
  "key14": "3sXZ1kTmhv7Yh51qcpuqpvtjA8GDBdzbP5ScWCUvKbUSzmKdYoyZnBmFZ6nbDgMPbibfYx6cjWrkG18sX5P6cxkw",
  "key15": "4rYwKJwCXYtQCc4utEKJv9qnd1tXV8DLjKCc2KQCAQFbMPNxoXzuaLJBPHRViuGV5huJkGiHfmMckpuDu4eK4J7Y",
  "key16": "2vJgbz51KLsRJXe4tuMkTJBZiFnNpVg4FjwiYsj9dX5oWbE5XSohbdrQQjME32xDQMuCBQvKWttSG3s6Kf4Qfjua",
  "key17": "3yNrgAn6zdgE62fJLpJbSGq5KEXXjR1PVik9sSPjDQbkzTGtxUC3DTAmMJTw6zh8zqXcEKC1jqDr4vSfaAywpFzK",
  "key18": "5gTEv9WqY9wYRvRicJ3rHX3NHdTYNhZKZrQnBSNL3JtGTAouvK6jJ9zGSdqH5jnMRftTGP9uXZHL8TPFoYdhFWq4",
  "key19": "KunzpZJ1mnPns6PBKJF83XnNakj8T7mYWBKXkTEphEvS2cQzrp3m2a6PwnjEYYhPFYhMgNWBNt3w8Y5oxic8ibg",
  "key20": "DKTuA91kgxPviHidzWQjxq7f2Ma8p7KE1rZJhaLbQqP28GDkD71Scd6GrAqw24C4LiZShyKVfxquMApoQcGZwRS",
  "key21": "4D3hLK9snQPC6sSNRShpZ1vjBgd4WHwuVZTXkc4EGqdgtAG4jguqdmdLNRUP9hLHNd6zF9fwpPuyjiBoRWXrE4ZR",
  "key22": "2ZuTwHMPs6nvcqPXu6cNM253xfinWxH7cyPCyAFgzdVE9zbpT1EiLgH6PJBbeQKjeXd1QuxiQ2mAksrcfGy6LqE7",
  "key23": "2aZ4umRkE9Zb9ovYhcdHF2w7PRCKjzsPU25mty4DD1cokBQxh5AwqfcyxDvf1JH8dM2xpnQkD9y5SAJyLHUKKHT",
  "key24": "9BnYWaYZsJu2WeDyfiL51rzD3A3es3MPeyrLp8PFJEEWHtUDQr54piTPhTCkbKxzoviNHHj8bAhyyYqMzL4ZvPW",
  "key25": "2XXqtXyBnwcdDMi6HSWR1gXe6sdHXZpoPzGUW9mahLqqiLcnAEeizHbRkHaGcfbJh5WbUPhPsEGUS2i9oi71zbsx",
  "key26": "3tCKPJfGomtFyeNrZfQGi7BhBweJf9GNrhLF8bBridV6NGRgVx2RwZjVeRoAYJFqB3ufDuBeFWvYGSmHWMaoqL4y",
  "key27": "2mo5Vgm6MDB6vQmkBcjdAyYdEjeoNQiG1vXxZfDnnFbGXG3r2vhaeNNCzYpzY92jPoUZEVWPSiDve7uxNXAQjrMx",
  "key28": "wXcstk3t36H3awwbGiaAVpZa6DGVc9hGwwzDujvjdUfpw9BxtPPZLasMQ3o7qYmj2LtoRJrJb9s9CS21HhY3byM",
  "key29": "4z5EVsLvx5i1SjqzSXJMHtEdnjge8TjVYBNfYHp8eNbpCi55LdKAQbA1UTvGXGL1quwDdNnTucmDb81kNVUzLPVh",
  "key30": "3gQeUiNrgzzYWsQDupoDAtZJkZ6Y8veyjaHBb2S757e2tZJSkbvWP8t2R325LFSDVTVecTMDNwWqGpRmJ3iuQRJj",
  "key31": "2GXYoXxPnqzVYPpYw4sQFykcaUargxvvorHxz6ogApFAG3wkmHbeNw8atxTPoeXBdMvxEzLXvQgZpQDDHcRqqtfp",
  "key32": "2m2xjxJCh5Ue8PFMeN6b3QS2h1DoU33Xf4ddmCdU94VhXjxjQgPrYsTWzCamCAGNcqTWWqquBRvR5NJD5uNHgGGx"
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
