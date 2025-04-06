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
    "4vfv9Dg51Ce7VJ2MvGFHSKaeTxr3kUjao5HLmxjDrFy4EyKC17pPADNUuCfoujKjzwoxRKgZ3QULP6Ds5KUg1uSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zTfrSUCj4gLb6fCdXdNxcG7aqS4uVBZqwv5ViJKoj8PgQat9uDdiDD1pm8CbEoPfKLKVnotTLgY7B1vz8qy2BEt",
  "key1": "miW1RJ4gu5qY9fQYXeUps9nDRwo3LsZEQpoWDywTZyNKMZt7fpjbF9s3p23a4ddLk5CLRknhBUTDKb3HqDNo8fr",
  "key2": "3kcDmx9QZFcrWemXH2R6DezQQvBdLHcFzvymY9Lb9HSkJwKvzgAVWmZJcL5nWWGrvAPD8CsYaF1NCGSZufW9VYVN",
  "key3": "65gszz83gz2zsy6KNCF5EaKUSuj4aTvnFU1LhedNaPC5YbaM1iToq2NgEAJk3AipPjMhB1YeiatqBZDWm2LwMme9",
  "key4": "2s5CfRcu8g6GuspxuD4iQXd41cTX5aBJLwh1qwwLUPQcggPafpZ2TLzCBk1wRx1UBfGKpUuTKXvrhA7JNE6LAKxr",
  "key5": "4iZyKCTbs7sQTGcHFcsHCi2oFjEgZ5AfcGToWLucj6eKUmeTJ4GVn53PReu1HB3RGwLcQR9bwmmD71uyhTLTzEmP",
  "key6": "s1CM1Pu3ro8kWG8qSpExVQEkjqRh6sNwWArfe96YTQqVfX5xF1GvoBe8Ri4NcbcXdCr4w9nsq8Xdog4jcEerKH9",
  "key7": "2KJZVv71UbTnikAJTxU7VNxH7QFGQkWseaRs9nrC1kH4WEmN595r67ByCcM4sVComx5jmoEMWFYjKQQ3eFTHyFnV",
  "key8": "kpzvatX8hAhUxtFRybCx121nNVGLwjCRe5BXHmLmhyxzNxah9D8mtRnrJ2p27ZmFudd9gLA5H5V9NpyzNA9AdWq",
  "key9": "2UJuWTcs4ZRHHwYpcxX5w9AeFuLqCz6iwpGS2KQTkfhjDjhM6yFKBvTxYsXhyAv9LMJuK8wpX3okYwR55YGC99Bf",
  "key10": "2VFCzGPoK2hg61dkptfDPJQ81qbHKB4oosqQDkvMYSTd1pg5zxnqU5z2faoP2ey9UPxG9GW3KJtAbJApS2BbCa5B",
  "key11": "24FQcbmp9mCCacxfDd9hccjHfYjMaLMTTz5gSr29Dbq9RdF4KXagXEnnB8gfgphVUMMGcxKbw96J46NtM9fqbter",
  "key12": "4gbuvi4cVfae433x78EdcuUbdRY279P1WfpXnj5DmXh8JMmcgE2T5GiNvNCVXHbgHZMF4h2fnNoKn1Apz7qKML6V",
  "key13": "3YP513937faZKLLxCTnVDdYRxUePtjeCVa3ajSYbTuPzHEzkJ6kok61oRqjyDJ6Z3AFSbYk6nSThqYf5vC1p3hY7",
  "key14": "2UNZD3WRkGgGYWvaJQcaevqD3TR2j9qsrfm1mMSsFsHqscsPi3bp4T39ZjW3TfggXRAM2KH9EnrFrZUVPHe7uj41",
  "key15": "4yECHJa3rW2gFu8hc8YLa94UFnZreuneSfawRQzEKGNVHq13NV721bZzhPjuez1bx894rdm7wv27sBRnoYYoV3BX",
  "key16": "2GCWTzHrdpJZhBXy5MgLPTqwv2uJj4ZDxZpKMXc2DKb8vUe4KLvMGBHf1SwqDF182FoxW8iDqFvJEzj5kdB9TeBH",
  "key17": "37UGUcTWbiFH2Q6SoXW3KwruoYDL1CEJNbrG7TW6MooH2wP17X8HjdJBYYJvAQ1ErPZsXFzD5xa96HeC4xLE7V3H",
  "key18": "3pvusjJHsrFRv2jrDTGzk2EKnvGYqrzffR6rBXxoHFPMvsm3bU8MxN829yFmJgn76DqJN3DuDuD8vtfbKHvQoV9r",
  "key19": "2PjRihdDDwNehL7QvHaBpQWSfY9LdTWgkNuQchdx1xtzcQntGjp6R3b5ovL5NwMvBKdJ3WeKga5PkRt4JHvEYZSn",
  "key20": "4hv41dKuG4KePV1RGxKVdKBM9QMHoVxMznxag2rxfAn7pHdAAuLGNkYDs654sopHSX2iy9MszvCZN5zMk2WbT7Eu",
  "key21": "2SsdrpJe28haVVLpEfk8rPF9JSNUMi9F72Q146w8vJze7iLyXDniyJB5ZKRT7wDRJi1foocW66NWd4hdD5f13r54",
  "key22": "2RaKgPvpZPnDMZWwC5zAqP7FJZ64HrbS39Bv8hFDnXq3Wg2U3t3JLG1PWt769Ef2iwmkWDZ4x9Qt7qbGtR6TcJP7",
  "key23": "mvCnb7rmeVr2D4SGfTiPE5Y2J738ZkRASSCWFXyLN6ou62r4QK4Lw5eSQ5mE9yAjXVrzqVQ3A3LjTJbqAQX8dmP",
  "key24": "3Z6KEtCKPPXvPu3GvioLsq9u1yQRPUzsEs3aWQx5nZY2HzrYzGtx4qmhCT1XAM4cgBod39zgQyYMqi9fERA7p7Fd",
  "key25": "5WAx58YsEkogFiw5EsztHfbJFhbkz4ogMHzpJqCMpgczBJiUpT3VWhL4QMi2K3r3sZagtnzpK6wZu9H9RXJkK4ar",
  "key26": "2MqQwotG3S88Kqj2GVy6nTfUW3d9T9GsCccF6eocDU4hCReufwePTg4BRWMwjLVFVC7G3Dw2aiqhKVVWfSUZZ61m",
  "key27": "2XRE4WbGvWiBPLXW2hSedMEXTDSzP7UoxBkoxZTpxFxuxoXzEze1nQYVQLBBFp3hBGnCBmCihZYKCrADphVD5ifY",
  "key28": "38RNpfcezMJnGjHYyFjBFa1qqsqChiRFqnqP1Y6zMv43aLqKKk1R6FYD7goMV3BjD7jdVLpewKVWs9bYH5DyULge",
  "key29": "2xV446j7q7rufbDHzhK7wUrZjFpgagd5SvD3JsKSqHq6fPMK8WSY279LrYBi8zBuEVjnzRrYf3zBsGMzAQrPP4dn",
  "key30": "64oKWtUUbMAs69mEc9LHyg3PsEXXf5drwAaAwBes2KCQULbeDG9aBfkfTHT7VkUW4YtV6zh3Fko7geefEuu1sr6g",
  "key31": "oAJZ1AYna28NVDgRZG2XRxy8NHnfhCqh9zLo1zdwtwAmMhnfBaxy8RoMrybPoNJvi7Rk3FWJRVVXncpjkLig5YE",
  "key32": "5e2GWgWxo22GRwJGgxcNYPShwbE5hDzx88czAKNSWU7VEKwCFn1HMt7kmLa3KZChn52az127FCszQqXwhRApiU2t",
  "key33": "4UQT9oykuGdZ1h4yPrZQgM6AYTsTrEv17C75jjMT947wnTXJrCr4ucXF7H56VHznv7qxP5Av54c25h8uRbfBypb7",
  "key34": "5XY2jNgRCDE4fwuCb8yraLaYGMk1C4nWCmACDGTMqVV9nE6E4Uww5jyDWZHSxgFVmMbJNwoY1kgGxK8wRxCWUcWo",
  "key35": "3RXYa4sgQysY5EfJJgW1bVZq3TFcLLQtFLqTGi1zAyztw7b8quP5VBz5ENmxVvQcYG2B26qLBo3MFGhdFE25L5AA"
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
