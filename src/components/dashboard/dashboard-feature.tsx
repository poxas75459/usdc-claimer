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
    "3Lm5JmneMZmuWY5E8VJhZf9GBqsrVNqiC6XT8bRm31gpsK8FXmrNsYEoMGDAKe6NVRHrpRRCE5rnLjomusm4Wzb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43maFqtBbAo1E7tCdXHotAVuVkcHGEL6Qe5S6vaLiDJGi18xm8LwpCVRLFL5cp4UdcdrSZHK1aQLNXGn5S1HVsLo",
  "key1": "uWLT1kswzRngWAk83RvihZ8XWq83tWqMKxCDR6Uv3HS8kfFZc1xgZXxvcdYVHKJWGtbYxe6nvpQSAEF1JAkhSBQ",
  "key2": "3ZLhj7TqebZXnoKxNJCs3APAQL2bHwv7wY2vLokXgkLrqrnGtRCyuBR9R48UbkUh1iKFVwr2efmXuPZNeDTcx3KE",
  "key3": "hGmGqVaSRsUqC61FpBHMy7cM5E2xcHxHZ8XQCTL7vxJu771rwcbEKZnbzZWkArQmFWgAYpLLgKwVQRkYS94kvos",
  "key4": "5wKvgUniN9NEnkbizYAhhMPdknZCLTSbfMWnfzt3JUef8az9ZjBxNFagwjZCYKDZajRPQG7BPnJEJedKPdb1DS8K",
  "key5": "37jYps1sPLJB64gQv2iaAnMDxL8pPWy2D8hTyem2nE5725T8rStn8i7trkbd8W2MsTtENUph5ogQcidD6Cg9MTqv",
  "key6": "4deGMEahYFYC7EgTfhJucwjb3RmJLdnEh7WgkLL3X9w2fVvb32cUaz6RizJJZhMaMqY43wPVTvU6SBTGfXWBRpfa",
  "key7": "2P37yxSRxbA3KBT646Z4fv7jSm2FnwAM2Vw5XXV5mcX27Uay5Xs5nRCozYyD44yukLLvRCCZpcMi3uZs8j85kex",
  "key8": "eWXf9ZcSVRr7w2ZHnfB9V5j4wQJd98yUcEbbaJyivMZrXVt8m81REgEGJAdgvjQFG93CB88sYvd5omMhqGegv59",
  "key9": "27Hiz5W9H3akYbhbFSdE3aVofvqfsCzwLcaPzztLfHMoMnop3tMXZ9MkhBAHL2YGdWDHNrKYFWhfRRPfh4ShnySH",
  "key10": "2ZykzbjvTF7nStWSiGWSNhQS56SH267wrCrjjXvRYpwM4sG5GaHD2pNMMvi1BKX1veHtTywQqPZbdQJWv15NfTpW",
  "key11": "2Cuen1Y2EfLhyg2ajBPaQwjUzt8eBR9KAz57a1hzGvnazoonzwwmnn5GYAimJ3gTV3PGzyDwFfPTV8amsXzmivQL",
  "key12": "4x1Z4vz8cDkA1eE5bL3ohAGBghwWkhKMqNpdkP9LW5pFdwd9hEa7gf1yRNpjfAzFypUD4w2KuDjZ6eHky91JEoCB",
  "key13": "2BU7bvTwBQGoXDzHpTx2jXxpXaHFVgv5qAWsGYhJZ64mYos1dN4Joo5YCDYLNwhgC7LaQRLAXkTgX8iXNB8Fdkg3",
  "key14": "ogmraH5uL3jF9uKhpEhMjQUBsQCzDhgSgHtTnQHmBvjQfkWt9QUbmTv1HNtxnqcUSCEzh5QGGYsUVqGSEcgE76J",
  "key15": "LXdAvZwuQt1jVpFmBDjrWppxANJyqp48QubWKZL3vYMfEBtrLaDefNykvdunRauqf3Vw2pcLK6v92Ys7tSqeuf1",
  "key16": "4ZcRCnVkTPpTgQabNTtpHaDD57Kpj4MSaiNGsa6xRnfPkEbRs2teqQYtUi9YLAx84K897aTuTb8AMMA2EzATNSjN",
  "key17": "4ns1uH7y6AbeQs1H26yVi3hA3nFh58g1a1E2T7HmpCz5ajZRm2yzq48Mu5CiHLwpDor6aW6RNKAHVz4ybE7t7vuC",
  "key18": "Gdyoikz7eH3GzSXzVb4R5Et7W3ykVi5vWW452FsisbqnJg9koYjhxGkKcjcxTB7mfcvQTPmA5LjEKwjyJXAPffH",
  "key19": "4PfrMMCbkeQeSnsUDJbyUUVMnpB29j9YnjpxeCqBuK8qVveYWbvrttivRqh7xqp6eaHsphpKw1SQG7yaqVVrBmVy",
  "key20": "2YZ7WzTPHfgWe6K3b5zdTDjKMqfGp4NHRBkQKWCYKWBM8ovqhzcdZRrdzTBQkVrn4KR9hwGCL4MtAAGqe7A1ceU3",
  "key21": "YHS9SbcUxXgTukygguYgWND2NcyPhMbAwEGP1XqwndKoGHV67QmVAdSgt8mrK6c7ttP6wPFC4AzjadHvjnKcx9g",
  "key22": "3cZcQB2SWLV5SeLxXDhFdWDe3yMYwzt6CKXGm7Y3s7dpnLEtA5fTpjkFJfvfupQqALHQ57rP5WRUiJPZauMPipH3",
  "key23": "5vb6nyeLc7wLbTR8wGgRHDeJy6hUxGEDkMwRWmvmUEWTEgWtEh8VTvDHQhRJpmgTdP7YtDxzxVwFXvGWtkZ8engq",
  "key24": "5QtPuy69eN73dESji3x3NhGgkgBnSaYyVCMXXcZM5aUvaaMTYAAM16uxsfVqNo798DsrUwRyUukJ6NXvKopuq8ET",
  "key25": "3YJebAMhFzXK4JLQmeBQzTFEacdTRfTNpYsH9fJvaZYWrmfePVXvksSn3bTUAFocd6NwXPVTyrvHP797D5iBRUXN",
  "key26": "4fVdNrDjEX9uhMgWprHmJAHpGEmPRwi4sm5SH5oRsZt4tGaspSd2LwDpKhsBe7iBQeimu9t9WzgSmpdJ8ri9VU3b",
  "key27": "3cXQDcEUi1PpV8PGzSFiBZmsPEj4PADQspVjYf5r2geKdT2c5Vikyu4KjFKzRg71jMu7FbYsMFRjP9JBv8GGX6V4",
  "key28": "4AsTj25Bg3YgHihFDXyhSp4rHZfXPArXv8DJDSM3qEGK68WLWtKAv2pyuzk43549iGRiMAArYd87sdV4M7GXkE3v",
  "key29": "5f5XxcN9EW54ygnztMFkNFBohrVKuGfn2x6zkiKH2zsPhRFjdjWRJVXVrciMW4kbCVVvbb91e5U1rDeqVpXhAUqs",
  "key30": "PN1b663pG72SA3CNau4inkXfivBqhN8UFmCuzXTRbz5C9w6UKb5MAoQUzESQr52ezaWkGYosMESx7nuznx3E1bY",
  "key31": "4kRmkdH8RFUt7WwDspdV992NZAbm5EaVdLpSqgSQQ1sveDJ1i9PgXMGvd3HRmviqBRTb7XuXHbupY63DpWrfGWSu",
  "key32": "4qRrxEaGS7ATzvWDzaJzkodpq9frJ6acAKkUhowgk3pHYMKxBADSFvQD4ScX2FgpucBq4kpvtFC89JkaMtfad8nq",
  "key33": "33zxkqhtHDYn4C1j2mVFZKg9yyyrAh5XUP4DXhoN4fn6hu1yuZmg5m6PaVon6J3xjwotdS47VZbhCV3E7QH2NYky",
  "key34": "3hNZGiyLFyh1is3N6AeuFJzB4XUQnZ9v7MruiMTw9cqFFUp3N1eKN9m83W5gnMSQ3jYBYPs5LZT6Wec3dmkh2bR5",
  "key35": "4jKPxonxVzgBifu4Nd5tLgV7SqpiUgMarEthn4cMBTsVnQM4QAv4ZRZ6EKYRFJCksK8AE8XuSABTni9vVuMV5NnH",
  "key36": "5EUcDydMgFiXAckyP65prk5VJhTgDTYd1vhBfwxaAjkFUZT6k3XDDhUCXGsCxmagZRiXsx5HZSwvmPhRAHnKzPrd",
  "key37": "5CmfUdyNbFizBsfqxvibPt7Fq8VDhvGq3YTa4dPrJdZpb7ghQ1dfdNjNF2zkrR4var4By7Ycwg4WzRQ2JxPPg2Yb",
  "key38": "yTvvdPgZ9wMzZAtV1Ho42yVAV9wQ86mDa3JdVPVGbzwjgZ7kBg1TBg5jAbKfaihNgfuLAUKXQnixjqrtWbxyT6m",
  "key39": "361Es3wu7hvFaRtzvGkMp6Yy1AiueUoGMLrBMyyCrDxVUXpKNHZzUQ28t4RZY11Tq3KRG5k5Y9EN4FacrzjqUefY",
  "key40": "brAmXYVZ6ffeT4iGSm4toXbqT8TZcjMSZ5GAp35zhXVno8ymoXQnBWKDq7o3rWTeTstkDPfdKYZnpCBLCmJbYsh",
  "key41": "5ptWPWpsWBBLg5qKByEVzVEWz3AJqahqksS6krXoruE8opMssNQWsuQcoAmKWN3PAbxsMPFoh6E8UbcJBctzkWFW",
  "key42": "2qQXbHHQ9qcDqs2FyKk9aLAXp8iix7g9AWizGmYgz8YTzjvWN5dT9pzAcpq4HKW8C73ozdrVmxep3LLH1fdUAUBY",
  "key43": "3AVtEeDTJ3ZM3uAN75jyXsPNg4jfn1tjUazpRj8CKPXjYUG7gBh6piPgE4kxuZSM9htXJb7r4ZDwfDGjqSiyNJUi",
  "key44": "2pkhR7txvqSiT5Y3hmimthvm81zxtM6wubbTFAtEKejqE1X2XsJ52qn8EpL3omH2CjuQkZteYywfayb85pVGM2UL",
  "key45": "46RwFgfdjAPJBWdsEHwQa9Spdnvtx37e5D6Ah3oCCL8JnNPE8StLMwQh9JuY3QRJrx5DE5xBRoY4hprLTqEvmkG7"
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
