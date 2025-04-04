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
    "ct2GyGB2bvGbj8iZHQHg1hCW5EumXU82y75uEVfVpEHyR6gEZ9M8XCw45Rw8uhC8Re8c2qtNxGDHLFPtyfzsXv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qrGvydzjRqLCHPQkFuvKGk4u3HCx4zFQY3hQgWjZ84msioP5UDoVd4maqLABYbTKFGB7hRJKfY4L2qTLbHGhXCL",
  "key1": "2LhSuH26xGNz5sQpBhxQsM45nMvUwwFFh5tktgND1QQk5QWsXyZhuDMjuzBzZ83kx4oLSguqBsCU8pBRsCWXizAu",
  "key2": "3Gc4veNNQaSFFKZ1ArnXWMi39qPTY9GoeZh7mv8sYrhsCLWCxqk8EiNT5trcs9CDoF6FfPk525HE8XFmzddFih4o",
  "key3": "2BZ1hqLi44DeVxVs2DP5DTTGzXsieCzCpS3Rq9NNnAd7dj53BC5ZMVmTZqYKxeuAqPcvxuktpTzkv8A7hsFJrJwL",
  "key4": "3ruCGFzTUYhg5DdCj5kHXAi9UtKsXcQCtSajWQXdsWVCw35LbLx5BWrdvitc1jF9J6QuLNa2pwpuJnLiEuiZN9Ku",
  "key5": "2aAp9fUiPecBYr72nRzdeo6yFYFudGPrLhZkqcDcA3HZ41nGXrkyAXbEXqkNE6zirJXw1iZjfqZRNj3LnbK8MRmp",
  "key6": "4Et3nSq3GKeEwwy8oxBGSFGkNubKfcbFSAdXHuUzDHMys3hoJo5gzEEofietmX1n9X2eDqqMWqwwYsYgDFDG1ygp",
  "key7": "4bFiAw6ev6Gu8hUVCc6B2vsw9tYSPNiMy8uArsr7VHfshKUv8cu5Jer2Hee7zSbd92Fvty2BhMzaUB2LnucxW89H",
  "key8": "2rQR4e4nKfVfe64U8xtzpf2m1wQEHbW5DwcjgMRkfFnNAFqXoEAaDNYT2bN3P5dDJyMJuDUUBUZPEYwbprYr2kRk",
  "key9": "2UgNxF7L8Ski4bs8EM8Zk58F4JBntKkDCK9MCeBGv3pub312bmxkt9raTkDJuxpqtwfF8yaSY3nX9tTY8yg4Y4v4",
  "key10": "5f2EF8Mzuzkd6NNVDYPxueeoFZiz1SXkZ8B7sKdyBRBuNfQSv3gGfhU8DXia9Bh7nDzWPiBMuevy87YH2rCTk1or",
  "key11": "iEUMJ71hsAF6tsGLDTog8mBqt2JFGNmcEnty4JU4cycNFmk7sMrXqhDStWDdzbcjXfEwJikrCx2aPEwoocMs1Dx",
  "key12": "3zueL41jz5xWSw9rJQPDst5jNryskaykN8AZc9nHehQjpaqg5D7yMYpFhtD2FijPbCaYRp94uz9K9iT1tz3RC6KX",
  "key13": "2L8eGtrQbq6Fjd48fvYLCYWmcnWtCTSUg7GZSqoJ7bQnCPvpibaZG6kPkuu6YHsAZjoH2emLBKGULcVaphgF2hVo",
  "key14": "H3Pd4exgR2JLZSJcUQPF9FYJMYQQRE8za1EgN5T2HvgjFeyZk4mzMnV3zviP5eyXMc5BcaRS8wo6JQPpak99S2z",
  "key15": "3Pia3P2gR4wrkHAg95QkJNHtgna3gcgDYaY5qpSyH4EakkfTF1JXVWf8taRUvqjLFzJsMqphp54HBD8jrWFRThgW",
  "key16": "46qp1ZC71JyLBggh5uW46YcYxSvQ7u1KokJTK4UpVfj2x1txW8CokRMnY5Mzgv2RPmJsd6PZTnYkrwJzcYxgjr2V",
  "key17": "UXkZA1tYwoN4ohXXRY7qWZSSioXMPCmHYLo8YnpNqz4FT44pLvW6Mnh7JHCLozh7BZq4Y3PG7SoF75BsU7Vko4f",
  "key18": "3tPpktVf5wHXeMa9q8MLpKcJ1e79MdKVmHEwx9UtH9NgwaDVqRVWk7ELkYAz3B1hUCeWFoKf1fKN52YvKcgrcwdQ",
  "key19": "5c4m4pix5UJBGUpbna8FW4nMTnoqXk6MNDj6PatVvzwNcsR28wnCbwhX2e48LKrXUCPe7mVCZx7BRC8HXQC4AtwQ",
  "key20": "QjtRSo63AbPNfvkgaHHkhKjfwNeTMvHZE3RLpcqRWaC7tcMe3y4QwVr5JyYYLE76KBGSLxyKQPcqRjbsSFbc7A4",
  "key21": "iSMmW4SkyWNgGemSoqa5tekFTuu7uN2Y4pPLYcWCqruARVPocW6yXGAi8Q5EreLwBaV74bazWdo3W19bJR1jeoe",
  "key22": "36meVyN3maNvUNApW9sY2zcuX6hA1VJhhpXt94EpyYJowoRdnrMeed5CwFrPn3KP3HBZ5ibkncFuC1LdoJjBGnv9",
  "key23": "3HRsWx964edwv3bmSBENnW7wWF2LR178exsMSgLGCKciS7PxhdXDUgWw788vQb3FMh6wej5QXbkm7PkP7KwLFgtn",
  "key24": "21zq9Pue2p4yfLxeJfRKBzfG2RdgFFs8PnKNDech9iJjPvkNjkYmkt5Ci3dG4w2cSqtDSqUwym8c6Snjdwej8XqU",
  "key25": "2qHuzeYsiekVae1RYXZhGgBj3DL44SDpEMwrrT1WxNZuPvCMe2PXjk6h3tJuiKnRChtEwoztBjXkW82cudLzx45T",
  "key26": "5oqD6kfcVAd6wHbAS4KSKdRUZyt3SdJGkzGsUDtLcUjHKS6b4waDhodaFammDv8z58EVFcSMqDbmhNuUhZhM25qB",
  "key27": "2UNNM3hBJG5L3D6kT6nB7rvZXksQq8rFoP4H3H6gbAGswyQqhB3B9rmjzYh7wkYwFPEvBunUAGEXV1qFALGJdJEt",
  "key28": "4vfnBVhnXCKKmFfDHEFsfcANQYbnsVrnJjfZmSK5e8MQeUv1gqoaJVGTbL5B3vwxCYb1QYUDjt8UWfDZ2YViKgZx",
  "key29": "4FW2T71MbeFHHXm1vdgdh2QgyUaZyJpCywV3wnSpCaB1gtxMwg7KVWwsTity1DHLDcnmbGwwpnUtJ3u8UL4oYbop",
  "key30": "4CwT6kqcPvXzfCJtgFxkYkL858b8HghyCzHAWzXmPN6YzH6Z3nPA5AyU4R2XmNuzKkPkEGnYwSghBegE4rqwnitE",
  "key31": "4iULqSAE7qy549ruPCAHYPeusKqQNNR9FoZDszwbKVXdxTEc1U9USWLtiBwY9niXWSV57fU7pNVYgRYpEJKrXffd",
  "key32": "3KEeB8m3NFtKGxie2WVu8LQRATnQcsiPXrsRndB6S7mg3bXg1mLFbrS7tijm5aAjKvMn3NaUZJ3wMfVyynAHZUYm",
  "key33": "5cuNHZUqwMQmZbTX5ZdRHTgJLJJnyDJ9ZNToE7u82dUQqLrBzWSkeEtWX1dDWQc9h8JUuEGs5wjP5oNCXZvSMPv2",
  "key34": "4LqgZU4T8UTis4QMWJH5zoug2Nz9zqKkWUFoFYdGmViC5p3BL43sb1etKiU9Ss5k2qeT3w8CMPcBi62JJsL1rYkV",
  "key35": "35vmihTuhJm3et5yP4xGQQGap77kFpErtpMPgGDsZHQiU5wMzJJm2dpDwBaXAT84A1ZsAg1Lq2v8tBBzRGuTsgxH",
  "key36": "4YzFk6PWmBgB4guwkdHx9JTZCv9PAgpwV1GdYeA6ZPTq4Rk84kKvypiUa9dHfnJS9cSLH5BKiyyPbwMhkiEac8hS",
  "key37": "5bDbbm8MdWHzBXThKeM11mK7Bt89j5yrx5UNXKXBm3JFj61pUbYoh1g74UrU8VUUP5eMRD74aDFYqtrpRekp9fFw",
  "key38": "2uR37ewau6noqsvzNHWx2i5Wj68fkM9q8nbGSEKBf9NGJMseVmRNJwi6i43XqoqVYUtbu6GAiFFp3Zke8rMSCA45",
  "key39": "47nuBx7CG4Vx28uPvuVY4zxbQwzj8FyG7AGoSsqLNAtxsK5Zp9LZ2H3N5FBrCPG9JDebZU3BhMbFEhsTRgTryzss",
  "key40": "VoXN5LKMcLWYnQ8i1aBCHgabXZYmnZoQMFZRWPtjUmUXC7tG5a1RoJCDvT41AnDda5qvfTCD3Y9Fwurf6DubZJ1",
  "key41": "gEQCyAY5sTSYvNoWcFGg9Joq3oYui7aQLRGTjmGpXophthFT32XMUgwxqaWQZsKeZAXd4x9B5b1Yc295BmrDsQR",
  "key42": "43ik9sViL5hbnv6jEVPgVtBfRR3WeWCBaK544ZaAxjBH3UWRCuCBDjRzWSdRGDW7eN43NCgC7xaUbdAUvAd1thRq",
  "key43": "2vy2ia9ti4JA9xDmjgDNY8RukeY65XP2Y4T8q5oYEk52ceCL2p8ojcYPxCLYgYp1QXEGhKWuuZ7TSWVy4aVNC9HG"
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
