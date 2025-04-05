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
    "2UtxdfSkebhTPRtTzUjBBGDbrSvuW6QN8rKcjFTxzkChYvC2sSAt88TkYhsgUjyPt3WvaW4uq7e8fzRSEu7DoMex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KCDKgMw6Ez8cuRt5eevr11HGwdjcHr5YZaPU4GiXwrWUUuBHbTooNWCyKUStdYZM4zAkYmmmzLLx5wTsZsHYKMy",
  "key1": "52d9X1inZZ5wr8ozePSLwHMkz9suQZWUyDim8XFtYVcERujuA1mVDV8FBjECwY9Zgb28KyaMSRY1Lt5hZJ6RD68G",
  "key2": "9rFvD7qeCbBpUqEgpfPAHp6cTgYAHoDW3dkYBWH2aBztvjrSDxga9EeTzmb3AQkfumgjgRyZKoavAcS8F9vLEQ3",
  "key3": "PEBiJ6iHQfTfdAzvVrwTNXVQavvSW7CatjXbrum4BA77SLgHvJEpCTWmw6zfzvAVvcS1TjyCDTYv6FCGKyJyWpT",
  "key4": "5srUpf3MWMXKmJtQKgvMnjkbRtgm7P84pr6z49QPQyC5FbXZ7heXMCW3PmRpT7GXpXnYocMXSVnTZb6wBufQV27X",
  "key5": "21yhzUMqFyKHZVURTcYk1gVqmS4V1DnCTzfkYDa59CMRf68DSj52Y8ConGovy26Cuz8f5TQ7guTdBJ9m3Wn3zbH1",
  "key6": "4YzSAbogzMDnmoTcdhu8njaTqmPss7BUoyeBLXdLaFBr5QRL6LjtZDNcfiUGpaJS6jcKyPV6P8yaTAZhxY3WqcSA",
  "key7": "4ZYJ6DSDjQbJTLBT5CeWLsLMDELSqnxdciXJwUmpikq9RoGcerefNb3svJpqMtkXpVTdGThnP28G6KuY888y1v9U",
  "key8": "8PZspZkXy54dUa4g6RxaofuuxszNihTgNXXD7ZQqF62iipWREJKad2D7xUtLg6RbphbgUfrQFm46NFdmAa81DUo",
  "key9": "5dkfgsD1ApzLGThoaofTGRTbk3fLBwpUEQV6tD5GUS7SwS9xnVQxQwFnKZPFHLcjJjqf96BNjBgFuM48FEyGuAGm",
  "key10": "3WR5wx4NUEznJbrg6ecjkoan9eq3st2qNpAzyZQaN3YozyGtqemkKArtWUz3N9mW5vmhbBYFogHM2Tbz3MeZvh7N",
  "key11": "4h1AUfdFyGG2Q8hKzUggbQgaLRoe4gcSwcATQYXXa6phVHo9RMmkbBWA3AmckpHUCyuSKLW4sdrXVpxm3nM3LFdA",
  "key12": "61hhR8Z5aJ6qa3Xz2yx4EjcPHSSHkd5M8vCVAAN9ND6UYNyo7LfK1rcJUUxiviZygVK9e8hT8KV5WA7KoLTqEjaC",
  "key13": "3VH3dnZaUMtMGSHPavDyiwai2wxMYzYxZKcvz3LFfJ7YK1a1A53H9A7MrYfrB6RBgwJHpXrwTVPmJ8sfNkYQaYfN",
  "key14": "2GgLyB3Hj1zS3qz3XvvMogsV2SVaj31hTYs1sewtKECubwpuq6VbocU8Mzzbvzf5rdmbKtkBniT58NypY9FB1wKs",
  "key15": "43zc22SDP8hKU7jXHXS4txqWqFaYTVc245f6Z1aptvJQncQfGgssg5xDWVuerz8DBsDdShGiQuzYMN9pkgrZe2Qu",
  "key16": "2WftHYP3fznKd483JW36tqBw2z4VwUoTXa1HrKQ6JQJuddPj6NUBGeAvzvoApFj1mg8LmUMCJTy8rMxrjLynHrM6",
  "key17": "ApcoLTVJBWau9BDm69gytMydZQSv79k35oakhgrxVDFXL1kNQwMrMLTvsZCfuUNEwrkxGRyksYksLgFBQnJqm9V",
  "key18": "ex5kjgJ8dVVjGgfe1noHGbHmV1srkTUj2rTx6cFFWmAv9hpt9ioxWVuvWJ7ArWVajwrQPrxt99XWVJb5FUgy9hw",
  "key19": "4e16iJQnRPoaU4CZ98XPTagurwmTTkQCzfrjAp6TprgmPoYEEjRqF4Q6HR7Lvvxa82GUqV6F6iw3krsvcWyapozX",
  "key20": "V38pCxutKeZhLBKMYVNx5nGGS1NeChPG8LA43Zq6Uc4fYQbTLx1enWY5Sd44TthKFqvLnsscUzWqyd6eq4MtR4p",
  "key21": "5vfgbUJJtyvoLqH3Agtk4WU5m38mbQZ4qP6bYNYzerF7DyfxPVwwf979quoP7XqHdkfaigi7HzK9ShF8cCydoYFT",
  "key22": "3K3T8sVYEw8yw7Y3dMvvvgN8jBHakBfeapeSXRYc6zE6ZFYdfX7XK7R3dgBnopBWd726F9tqHk6W6KLLBuzaJPGW",
  "key23": "4cRchDTjBESkDYy5c5pr7XUWexCnPqvJpxYaXXcfZ9ArtNxZbSeMNs66wWeSeaLfY7tbX3FBmNfURh5fM4VbDKLB",
  "key24": "57it69CKbbrWiLDVYG3FTy9vwqnFyy4odVuvKMmbU2wWjhLDo3DvENWWKghbEqy8pVzwC1SDLQjbRYiHsDbqLCmJ",
  "key25": "3i3gvMRJd2iCRWWNr8562MmqyeEfChFSgPjwdmUU6n9cyG521aNaC5Cm2TiR9EjXssZDkKUsyXDYcCWCvQ1QPKmb",
  "key26": "3zm45xHzcnJLS5T6bGg8xZ59fZC2ADF1qWL1fydi4yihjbRbxkch5B3KNGEjKPtHzqRVK597UJgsbr7wUMzSNo6o",
  "key27": "3F53xTV5tZtTnnP1jZ7rXhJcUTiRvbCLxrYecq2aqneozvLzf1UN7bZkD3zT74k5NkzvADk3xSm1yDpqkStJpFu9",
  "key28": "5kDAYLywaA9c5NPncuPG5vhUoZmYBkQBmq8mX1pwdrFuRtt4tSW4R9wjroqYz5zm7T9A9TFpc3PWi7N8QjQNqC2e",
  "key29": "5zvzsty4dS27aLXfjQeEnkCYMrcbZXxGLm3ikH9PvmNvcTZ1L8XgAaY6FSP6zS6RCb2QifPPbT25eSnwfYvbbSNd",
  "key30": "Dvc5ywCV1TyJR5prkoUvyWb7hmRFs6nHVdP2yehwpEvJW99ZmkD5CYakd9epGeUjEHTgrzSE668E57VwrNLbnj4",
  "key31": "2QFs98VnRMm5Y7cgHAtUCE5pXt44dKiQLhgQozEqsTkZbBxB5jcbhMNdzCY6anEikgENixR918aa9mgPJoUhDqrg",
  "key32": "2qYSwBWQJWrsvwakLH824U3UfvcgYuxgYRD6eSqRv4Ev55iQySeNkJxi7Xs5o7WzpnGXqsu6QYuzGU3m8H8pBPY3",
  "key33": "5cqSmZ6p1Zho3X6Mn1YJx4gqcWLb45fqrmLD5uSE8fLB6BN8pYGBTdQjyhivGYWb5CaJUNJy9hLRZkGs9MavXUcD",
  "key34": "42PpMoQ8VpUdKqLvjrgZJHdvmjjyHYwMRvuCZYRqm5GyRdqxxSvyXUPNwUAGjUox4epxwbHaCEZ8xqRuwr8E4Upa"
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
