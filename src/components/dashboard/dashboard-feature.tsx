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
    "4PVZXhJXitioDwcP1mjygq6ndrknBC1WrJVUqiz27eDKqFHdXGxXcPPaSrFizdk8PWsauRq68UaxjWnAj3VjFF1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "418MkW4AF4nQSWZLHvu3cCw137Tg2GMuXxfgqAvkAvJsVoh7kUvUrR6YWVnWxiz7A9xhTcerFRUTtKbfVKoWGrYy",
  "key1": "5TQGo65GDakGTc9cvY1nbqkRKVoi257hXg261aKpvpoHsZqBtaPsL2WbUsD9Fo76Z4kbe2TEgoQdmnQUhPYi7Ls9",
  "key2": "5MY9CH6Dbfe3akqwWC3ubJFG4MzfRReDrRzxxpHQ2KhEGmegML73U6ZyggQJF5uQEg8ohftvmkQpJbN3DWvaMVfr",
  "key3": "2oY35wo6grgRNNyF5qyGW3Me23ajPNNDgMZSTcwoExV87XkN9zuHUJDStYdaWYXHv4iUUdDafHzThg4X32uNkBZg",
  "key4": "678ommsg9nWVtaTP4UEMdTBDQ72L5KKgwKU5Pbn3i3wxTkWXqwdfMNCvgYV7VfCzMy2wKwN4o6Si2QyDMhSZsn3f",
  "key5": "223MfWtaDhQuDQ8WvrAmPqVD8pyvCGvgb6oB3GWyiqeFQ6nrWm4mCaMKMZ7M8KWHLddNGJcfYkKbs1SZ98QNrB7r",
  "key6": "5sMgfUQhV5SYiFbDiq8DKnjynyYM2aqGqpJFaiMH3LJWS2tvZKzg6HzrPpMwpF5YXYVZvRwZ2L7bDjNn82LGZ5Jo",
  "key7": "gfAYzfRaWSh8bNBrmb1bhzYJuf2FnSma2w2VnJYjhGuDryfM9gHhTWicjawtfmaScRrWgzKGJtwe6xmQodV3LqR",
  "key8": "5SHJ7BuAaCwM3T4sMFk4DgiJ34vBAiFFacacpBWqt3SdpTngv56BWTw6dGHg9Hhpz1YeTJJEdyhf5p8H22nUvWpp",
  "key9": "dicLkGmh5ptGxSbrPU2dZJ2Mv8q3vT8EvHCutRo26pZcGkTtW4xYPXNQYsfSxATTgK79kLhBAWt7pD1bBYRx7sz",
  "key10": "2XGLQYCaevxUMppme4pjbyBtTsirX4faJxR4VSyRunhyV5zK3Drv2nH5xbQFD1TsYYmWuQUDaPYdTRxwQ1grC9D3",
  "key11": "3UVL2Rq5rUuPMgTTLLLd4kCTrZLPr85GrpwMT79gbXtP9soCaUdHAiMTDUTU5SqyHuMThsaCDcXrXJKsyFztA76s",
  "key12": "61HuTh86CBCP9emS9oV1vwmo2reKyu3bcNnGKiM8zxG3KFhYiR8o8JBLxvSrwFQygFAewhB5EoroJ7DVhHKdphxz",
  "key13": "GrRAWSLZzJiQ6soEHDSvxT9Kv6pj1YTaosbrZJ8f21Sr4AsxXLCSsFKJW4JMTGGnvu72739yTaneg9bVGjJdD7g",
  "key14": "3RpV87QkVd8Ab6RU2BUgRXQ9T5fLAE7TYhnz6pgw5rZsGiKrK5vSpMxkNdVzPAiz441eJXTbgVSTWCMqwozdbXA3",
  "key15": "5u68kP5EvQ7Zi6KKsfTn7LGkiASU2cSebDA4wbWkx1qBKkvW3vk4Pwnkc7KcScuevBviRQKepBuqHYowC69b7ifh",
  "key16": "ZvNkSemS5PibzgS6bF6kRG8vw6EuKmSSrErSFCvxEadtDsCn3Q1P6CSmbkjdEQhQGcuxWbtyV48W4f18N7xBbv1",
  "key17": "2Ss6v4N7JgdoNbHbREQF25jSaaqWpf7mNgrdbe2gG6NUA5RhrNnwyR3KcUU7qv5mG7xU4wV5mCPn5uj9wUCXje4t",
  "key18": "4f1KxettwgmorEthLCpWYw7VBNyVN1qoVfFCmbZQ1BaW5g9qMb5KQMaENkw8i8Lufqb4DMdg6hj3vmeds3k1vVLG",
  "key19": "xgg8mQ1iDxSFQp1fNQurdggZ8MrP5ptbtyqUkNaNBMiFr1tt9QXXaxM5VgAKWGm2fcQKPbqhhk8UuTFqSBSyLci",
  "key20": "46tuKzKb5fC4dhG17mDRehgLhuZ6UmBQPtczBTLVejs2Fq37q546rbg4wBQobke57sYXmN6XD45u2ujzDqNfmML1",
  "key21": "3nq4KFtDpY2Lc9b7PG5GiBi2AoZbGkEjug1TcfunGvfbsXWdx5ago33actQ9SZAD2JnrntVs2BicTzJBhjqKQPor",
  "key22": "hBF4ENqtxZTfTHJMtHub3PGzAFziRpPkhQYAARtF6MTC2tuLzmbTm7hkVctR57McVnVj9qpyU3GP8nbtR1CiYNz",
  "key23": "2hhWxKFkgTJZLx1BExVHPvBrgimkm2562X7NcZTu3tUauNNJd5gc7JMqKrtsQ8FxgWZJCHrck5F2WjvZy3MjSjmi",
  "key24": "636ZDMcVLv8aZF6M7tepRUge31ubeCiUcasGQx57hK9kVx6HR6dGb2qotRdikb1CNofA2zL3a55ycd4S9odbks4g",
  "key25": "3VtuGHKCen2HWBah9qHAwUiDmWeodhNAgU2o5tNewZG3UpaxX1bB8a3TrMQquTqSjxvVzA6SEfiNChCvT28cpJqN",
  "key26": "4K1v24N1rYvLEprNWaThdfVMf6GfVsBaYfpTrTqRf9paSUH5meqvpL2Jq7L4D6LRHJ3a7AsmZDhfrFTjiMUqxrtZ",
  "key27": "4oBakiPc6Cq62Xrbq6qTrPZs2vmDaMe8JJRjRqwHhyQ9teDTqghG18y3qdQeYJCNrQpfecsX4cTP2mzhfgA5wqHj",
  "key28": "2LWUvsAHitoyUJYN5QC86uBM7jXxEfsYG2FpZ1mALXFtT8mSnYrHFhtbyCjeZV5sNbqCvbCx6CMSGDRQfj7wPhYS",
  "key29": "2KjAX4Ns6d3T5zLGsDs9PohxHkSTCW5h9AVYHeo8ToNduWEZP6Rnes45mGfCbyR2sokjQr8eajCEckxzYqRBBu6x",
  "key30": "4xDzGhgANJJtibAT61BcGEbYBeL2cK3FJyBxVRiTqdYma6uHNz1m3dQEM8YXKV8nb61k7LHvU6nhyUBsFGsv8uKy",
  "key31": "4kDKhv9KhCouVntfjuDUW7NS1jnCbu4AHry9Dj5p5gW6mZXngU2ncArLW7ovaxJ2o7nsBgf7voXT4KKgnNxbU6et",
  "key32": "4MHpmJXtzkhV2HhbFd35TAhi3Q8LaSVssWqPX9YSHV3bXRVEubnvT1uK8Ddpia14JL1bzC7WRTYun27KhR4f2Bmd",
  "key33": "642bgK2cHbHJ1hEMLRVE2YoPr6jgUs3v9pgpVXxTgNEaCBGs8qdzcTUn9Dr5UpbpRQkH18DjqS93QMmEQqTRPcNa",
  "key34": "5ZDYhPTi2kifK725rozCwTZabgFwgK7HFwYDW6a77SRu3F1At7EC6X5VgpcQGHAHPvitSa5fdAGmTi31RbhFCyJC",
  "key35": "58dgVyrPjvDkqnXfMps2VaY57X1sByhYGinA58NrYCG4uuNWM9q3RvvUqMwhuz5fSfkaV6gvx7k3TtJneEMFsqKn",
  "key36": "3Pcgie6C2VMx73y9uBXyEPp9B6Fv8NSmmCdVRCYtmvhvkbVXd9raTESbjC6q5Lh1n9pMoYmc2sVgtzcQqayrKs7f",
  "key37": "4ohvpgj79vRBaSsxRptatGRWfiGVEDbe7d19bgr8KWcKTZqd4EAEA6ufdHRe6uUcVpzjKrCSXZP3f1kYCXjwioex",
  "key38": "45bc7YFosU4cZx41Q7LWsXND62A68wsJipHkpnCZZBNLw3nWHxthJoPTR91EWRnQo22M1uz6uLtPe8g6LAQEiSWG",
  "key39": "2yGBbM4RxMccQJqWGRiQB82LCQ9YVBeQyR26ApMwV2zEKGJajWU4N2TEdEqKaMMsMPGRno8gXY4UjzX9KPBwYgAY",
  "key40": "4TfT2nKe1iThLbLVBAX9oM2LsU6xXpq5YVD13NYpM3P3JMJpNY8hGzzHcNKsp6XRikhY9ACiExuZkuS5GYcBxYdw",
  "key41": "3er2vPZZ76v218ubmwNz5Pj7CK8FMwsgxKa9yVcuGqQYeBWiB5dHaHSEUxudEiHGgYqyhhFmztJ9hRRQA59yfAzL"
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
