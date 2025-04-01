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
    "sbpgX4Gi1ZpbGV3ZC2fMpad3KXNLe6EpSJspg4RmcyVw3KsGy8iVPbeFdwDrD6sFviqHk9HJ73y3dJewUardYmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zD7SAupcYxQuzsQdPG3E8xMAD8vcs3YfUaFigcboXMaDYpVNKn4icdH2LB9iV7QWGsPaE6ujP6CuVmMB8pRi9Gx",
  "key1": "ya9CiWej7ffGB114m7FXMm6Hcu1tRfy3aU5UdeQFA3nxhtieHkQk5LGGWfd5SRBzvk9F9GDSA4N2THuRHpWGcLV",
  "key2": "4DncFadnQGE4dZuus28sV5NKEB7c3jDLUMcGAuf6KgV8vmqZPwc4RAZWHjmeLgLTXdSiw3tYaqKmN7rP1Vjubkf4",
  "key3": "5QZrcS4zY7r6VnPqdSCH53EtNZHh6XhPWYyqk6LNcTXCxA86U2cQa712jjHPLUkgTS2ho1NnvAPSn1xAwoL7JZAv",
  "key4": "5JLUjeZiZQRiQN7QJNTaE2ay4mgkzq4zfBeDaWT3d6QSUM7hdR1RR1QjnJ9VS4MaE7x1h3JAUBgyauvRjc5WTh1V",
  "key5": "wVABYMaNva5xv3pKdCGdHY3xRQr2TqKy6TcMHL6gqQ2rjkk2TEM9HEAGpXaW9MGFzyd5ZBXGujRu1MxjaH98RLB",
  "key6": "3a2Eufzg81EABkKHFn771iWPqmV8Y7dgvqgBr4ZAF6KXFCm5eurRbrwedAfWSE3Het2ny3LCbzDXoVUgVjKyqbXT",
  "key7": "3qNu49yCjjGNf5DDKwCHiD88Fx7oC1QHL7P29ieG3WLjVq7uAe8MEEeibpCxnzYyWjcWc9GWJxzMakJCY3ScUgi8",
  "key8": "3fcf9DghPzo6uvDc5XtMBpK2gySr3uKKku65MKVuFQrYEChUi1WWDW89uwMMWBQ62J7kivnU5XhEMx8RG9HciuVd",
  "key9": "3gf1BJbZDBZTs9c1JJx7YvXBataFPdTwgou66MUjGUAAhpF4w9moQvu7XCZZVCFd48bHfTVrxRaX72HZGgp8wYHY",
  "key10": "rgbEA3UVTsZwTq88Tcy4tLrDeYpyE6grdquB3gHZEynqmKxAhL6fbdDmq39aVJkw3kcz1s4c2dqGFMAsC798GSt",
  "key11": "3ABad5VZkBhTAaYfc43tZQqDte54Dg9Cif5Hc1MHy1tzcnN3JZLmkUbuuVSEVwLDzLG4JoWVUo7BwkKzQreaor6H",
  "key12": "23Ls7TqstaJwb6NgcwRcLs7iSJzzfBuGwL7KwjSgzPJkZ2vaPpJAgMDaPy9oFi4Zc8fULjVCKmE5FT6wWg1xJNk6",
  "key13": "Sx7dRVp7rPfCoQ8ssJ3EZ6rPuciVbNTTpTP7osTzXxuQYVFjwJc1yJx8CEAneRCuzFeZPP3xAqvcSnwgcTQhb14",
  "key14": "3YFwwf7J8Vw5v3rnsXuWKNPEuFfQdTUTYjkunKMK1rwGCSfuGimTwgJ3FQp9u3QunqYp2CdQRCvfMHfabK6n8cTM",
  "key15": "2zjQfLYNdqbQRehm7hEzZDzN7g6aQtHLP9vWPEPBpP6GttEXyHFC16Cdm9ykyRWUkoRsJFp2AcUSfXjPComanxSH",
  "key16": "ZeNQig584nrYkRz93Wj3W84MFptbanB8EkmsWRHE9M3L9LK67u87o1PYDBzTF9Eu6ivUtk9mSC3Lb31oXdoTMwc",
  "key17": "2xJidt7pC291xNNQoYq9s6pq9vKTJpiBsfYTXS9nJGut4hFvMGfLJ2uN5anGsJUYci9t16t4x8bNypecphDKqSag",
  "key18": "4dug7sSKShYmQk8jHe2xZcrtbhn4EnBBXF5TcdmRR72FZ8NWn6Ufm8oUvE4Uw7eHhEiNXZhqNHsCF1pN871j8CPX",
  "key19": "4GGsh3Y5KxyFWbDY4KmSdLDvXshcc1S2ZJo71AGcLMFSHGvdwt5BnPjMWxwPNpWPSrC1xkvKCZw9aVoL3LMqvxdA",
  "key20": "8YbfJ3cnYEi95DwFu2MhfRzHy2fJJiR95Bk6Nx2sSWAEVddqHBRo7qgUShTxnTE3djGfvoxu9sRFeqg9xXd2Asi",
  "key21": "3DAkrUtp97kVmkGcVvZqY2CMtF9yijuPUSN69Gr27JqEEGwjzSHDpfUu3uo4sNE43dTvr4nokXAVSRnM8PvV1tmC",
  "key22": "3sVcQ9D8daf1iGZ7rAph9AJN1HFNiVTfR9FF6uBrfZ5WKwwapwHZtgArbBdTqLmDTiexozYb52vpbQy9RnPXJnDc",
  "key23": "yX82M43e5jiGepvtsYs7G1x2ZLEtXhhfdcjdb6Diphjb118ZC3bqCsaCDwc6Qqmk138CzeqELDVoLzcuYPfVchV",
  "key24": "3HYoC9xNY92zKM97cY3WZPBon98PxD4v4hiVkkZ6F6knbor1SZTs9Uxag2wJKHmWj1f12B48wC2UGfohRjbxJref",
  "key25": "2Z75pfXWqPSqFP5ErFoisUdJiwvKxdhpNAi714ATVRy2DjxSC5aNxSJy5nVbpBxqNqSTcUtrkDt8RdtmCP5WACH9",
  "key26": "5XXNU5NdRK7ELzKKKWGUPJ74zfTBKqM1yZymrSCufev5DJPS5FjtytvCsvwx6LhDNUehdj7JWBZgVfEaeD2ZXqLR",
  "key27": "2uxJRyvLmx6TnSq2KdWxsuVqFGC2uaLowCc3bgzv76e1D4Ug76zCQgCHJCjnp9uq51rxu1mMzz4Fq3NUKborVfM1",
  "key28": "3S1rexRKhjudxNqw8otEUtxK6DLZk9byna4feNkEnGssRwQD7acP67ZocfyXDdfudQxKGvj3bZGhZ1FMQYETk1Gy",
  "key29": "aFAGRf299hT3QmAWwZ6CSo98gt3ApJjJV9uh3cEwJBz2UwGCyTpABsYU4j9ws19f2UkE8fTZaTPRA89ct4kfE4o",
  "key30": "3dFguw8WwUMV4GiT2HcKUQbUXDfQcKQtDqBJvoHa1u27BNfkMzXfqfTvL49UAkxSqJs5CQtXpHRmGydRiBtuPBA1",
  "key31": "3AujyKwwEiXYq7hkVp7KAYGDMvi9yzjZqH8LkX9szzxXRUfye3NWearfqWJ8KXG2BZXon75G4fQRbV294FC4S6xU",
  "key32": "2V1doeZjUTaKPk4aUGn7CUuW3Z1Uz2J6Lwd7NieA2PFfySEWR4Ks6MWrBrtktbZRVnEwpjQVkxKCBh9YXyibpvqD",
  "key33": "5JMkmGkjy4prKwDcyaAzdek1E9na1AYCaXRmfADii4dknAvotfZVxUgGvrb4yMvPpPwuQ3yUCdn9kP3F3auHV1pz",
  "key34": "265QSk5w9zZSyimsxUA84n6m92AJgMGEPHpX8x1n3GVziahkgpEnHMfTpW49nijmA8WZ4QqTrtuGizZvQW439vd8",
  "key35": "3Z5D5dCkQiSNdW3MSu5scm9NcphCdH4tgBzTTPAfmdaPWNBQTQbQHR3E2DCSHGfZVNn5dmzWJEdvoRQRUSE9XtZK",
  "key36": "3NXi8t7mBiEQA7v1aEUoXfCNRLnjAUywpNRMqwuQ4GJtT8hEkTibjmcLEVYVYzLKrxqHmrLd9bFgpcqEw7ixv69A",
  "key37": "613dkDePy56VByGbfKC4SZXte6pZ9zSprrZT7si7WnvgjbZ44LbFY8UiuQ79WqpkqKJ5UQNz7rL6Q4p69ueMf93H"
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
