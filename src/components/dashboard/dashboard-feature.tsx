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
    "24rKnXGkknQuBCeVX4XzRuneat5jMfnn3hq57Uxm14Ka1gnFcuwW2P5kAznMhURGoy44ALPy1VqDRaBuLCmRB4sH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YXkUa5PHgwqF35yFpayR5KbEvpTXxQ9aKEs8wViK3tNCUjXXjj4eGqC9b3VVsRNNXZwAfKQxHc7s5wy7qGt684R",
  "key1": "GYU2sz3HXxhks7pcSarL1ceJDvrQAApN2g3rTv7cyHacGtuSevu1DxUzEkvZy1xMe3F9nc18wVNkdKEeFo5gQXB",
  "key2": "5Apnvv2fgHjY8j14cdoanDWAc6hTXmCLtRynCTStGqYNMTcPGun5y3wQgUJ3UAFBbRvsPRJRty9dCkhiw6s74WTC",
  "key3": "gV7VGqbJYpuT5rNw7zPBQqdUxYtRBARPxrkH6a9kcrUmnmR3d81mbkdkjsmrw953BtLeYCq2kHLXn5oCvggmH99",
  "key4": "2KaMLU8YYUfRn6gt6yN3osjDqRYxYkv14pDGnss8CCFUQmEexA75GAnqkJb6s3sWkzP2DUdh355atFke8Eaokypo",
  "key5": "5yUvUdXDfZT7p8rbJsY8ojc8G6UvoMapXXya4JhmHZgHLpx5DuZWG2ZFFYfWgfQhy4rYAugsnEgSJRTups8K46Qv",
  "key6": "2ThvdKxmRgSCCKzNBT2w2bQAdRmmTB5zF4aJ9A4scoTqiYraJQQ4MZYTXH2z9jj98fDdt5kShafP8rrUG3RUL4Rb",
  "key7": "4zCgqTvxiMDbV8N33qVYNWNXWWRd3QG6kphWKoxBAJr5SH2PPLo1sCsGXBZLk4KmyQ9vjmFHzCerXCZYviBNhUHs",
  "key8": "oMMYQ9Lzuar6MuPHpaEJezDSw58RwqgeRbgxXerhvhnLCYnYPgyVQ7oex1kFPMwHz1XehnRnT2Y1EKvN2ig38sh",
  "key9": "4d1gExUTxLFAZbGr6XxtMYQ8X97NqqyCJREPBrSevX5Nq6YCYFcPBsytjhiM93RTpwENt4EyEVY9cFp6kU6TQR8f",
  "key10": "4WZTKcWPCXWNdXU7bYX8q58AAFLDV8qA13XhW8xBY63nLLLDjVNYXSET7x88RJnQQXR2N4Eg3bKM72vQZ5vRTiv4",
  "key11": "36LNSABrdfcckwSHd9zkTJ8JQKY8wuRfDLGqM7dqQUqLoUpFfUoi8NCMVYmdQmvkymLdKa4mSsicpJxEdKdsksdA",
  "key12": "zLw625bQx7WR3mgburCHeBdZEohwDcfP9cvg9Brczuoa2y3fxG4AQL7efCnnHkU1VVeNpLEQjrcShpwMindfx9F",
  "key13": "4BE994KQ2wz89R6kq9AMTArAZ2PwkC29E8DharG3Sb1jhj6KczaDVWb2LJbBYAWuxoZYAwTGfYg2TdTA1UnqVVRG",
  "key14": "5cxa1JkfavytTL7VUEouDUJF1pbHEV8bYHuC1JiSB2rLDkuGmzSC1A94Sf3CYTVKK8VNttfJWfx7F1uJSLK7EFUF",
  "key15": "5cSMT1ZF9p6wXKQVYQsgH2747pc97ER7u6Tu3LM8sRzBeAZLa9G9opMhBLq9sXn6GLwMszHk2JPRyKPujGvFwN4m",
  "key16": "2iaAkSeKP2uLJHgtQDp8zBqvDzMbdvT47h6HimLZw7PF1o7gNsmnUQhiGKX9oX4GzUQiqfjq7fztHmLKj3ykFdXN",
  "key17": "4zRWyfe7792AHpTZ2dCcvbSf16ibn9sE7AjiTaGkdCdnFGRFjDT2Lb1oNwtnaKABh47p6k9iFqGBTGKdVMeQdM4D",
  "key18": "PPyk2yfmNxckDaRj2S9tet3i52rvFkcH9Va5UHpzsH2e9D2qDup5sboMPH7h799dTYGW3eErpdzct3W3EEfCby2",
  "key19": "64BJsmvLU4e83E2sDYKsQsFSyhmcBuPwQjmrj5tSf6JrFsFqefkXvYG88ZYDSBngsxgqrYXjvAyyUW2WGBmyDLuk",
  "key20": "2xVTe5a7KhNc4wN35ejCgLpwPwgqbggcjdzEwuBcQgfkiSsSBHoUsAHmvVa4pifJ7nxW4kYSikRdzPeD5NoHHk2o",
  "key21": "vi7PXYF4R2rV3FZo2PbKqYKmqmBCPqVHrrFhZqtg8zXuC6KEVJy5QtZwPrrfXWhdxGEmmzRtBfcsmUFhSwyDZME",
  "key22": "5MbrMKFerzRc5yh5AJ4By1L5cJwEzZ9vR5U6jWQ2Mqx1pKzbPRFtU5xBzKqiyhuFbUHxBG2pxZDRy5YsEuBFKfaP",
  "key23": "4YKzz8BakrHDoBfgeP9EPNGx9NT4NheJ52dYjbxksEck8BUtmbTK3jk3GCZhEtxtsHAM6CnY1izVDSgYaLjHtQ7L",
  "key24": "spgydGs7hF6n8DUgHpfa5wtku9GNe87JxCUaG4zexgi5o6879XU5f2pZAavSxPdqavC5Rz48rArLvDaxVvKs85X",
  "key25": "fwu8iWmymLF8wbsofaiLt5qrngfSrEe8iS54sqxuJjce6fxGhA1kZfycj4c5yFyiXAhQ8CoRhzWqWAJMnjaTktX",
  "key26": "4LpFRJxTgawsHNJvupYPqSegvznVRgjDWK6qR9dShsX5GWVRZ2Gf6K1sEWSXWMvz9t4bGC2bZg3gntghXKVAgGqr",
  "key27": "2xjY9JwZK8Qs9RKa9nERyq3SSmJzqeVozdhzmkCBauzjLrgw27oYAKduy6jUfa8DyQf7X35FcZJFawCW8eSsUicD",
  "key28": "tHuFXg4zCrkUZQF19adiyBmxs32iP5fQQsrcc4gVtTrXvib77beLFTf3S5PLLWvDNUpN6aqVaz7erGiWtJSnWMw",
  "key29": "7GeoiRyH1fb6xSnri27s7sEzgz9ND2HFHjtpAkaPfDc1WcdQxJkfXd1CWAzsYJNdUq8BWSv8ifb55YgDbVMgn8G",
  "key30": "5samb3gMBeJazc5jsEFEjp423Uc1sYj2VmcZ9akzDjQB792sqeYiw1mc2iEmkme1oUSZYVSR3Wum7vKoLfkqjA1p",
  "key31": "2rsYmBfbKBhHsvpz4Q7vgtpzgHxpRTWwEtyot1arvZhXhuBVWNLZeHnaBzDwoiWWAZpwfnCvqD348DVxTZtp7exW",
  "key32": "4mAM2tLSCzLRR1PaGdugQk3K51CiGJB7crtwV3m87tDzgSQVTHsEK94ZVb6v4iSehQvdeqteaQrrav53PPJr7t2n",
  "key33": "5XVv2oTzaPo31CGBxDpkzRj59gLAoTLAepmhAvxjQeiZ8yBi11DfmJvcfpYTVJQw4q8hV9tfM4kkwd3KczcsZqgB",
  "key34": "2qejrHRy9HJffqzJUGmD2JFJXyGVVFPbB2HSmP1wBC996yQZuutKCLhmMxTxTtYV47YHhnKW8wJgSmS5qduSVhEV",
  "key35": "3ZCHjSEygSaM7CrQ5FtmragEzbPLNb9TPPY3HAxfx2UxADm6WqrVww4FL5kg1fY1c7Mt5QEMjuoHf23Hbqsju9Ch",
  "key36": "61v2g4MS4EHLK81pnLYzW7x8BC7kUNNsxMzTehkrJgxKK5qQCqS7CkLeHHAZxmRcgoxC9rDndGXVuhvTVi319H58",
  "key37": "aqtcMS5265wHsPJq3vENz1ZVVEzHnb2qZQBw4WoPnWbYXEZPrs6mmueHcyUx7GNwJMgth4LaDPjVxx3JHFaMqMw",
  "key38": "2wPY5SugCeK7reLAn7CpbujiVCEuepkrfWtRYacMaSx9k6acY2zwKw2zsThXB8AFimcLoxoEkqUt9yWai47hqxj2",
  "key39": "5eMfnuad9tGofRE8j2sWv6XpM7MKqScM6dVUyRXgvxULpN7FnJRQ2SABvJKr6SW7am8zgqFXHp9qFC9JkzvnVjLZ",
  "key40": "i5c71A9wtbgoS3XB5YAL3mEkEwPd78k2jjba8g2ssMPVmweLJZFoNNNSiGebrZ5AfAq9L7qTUTkwpRKthSiyxWJ",
  "key41": "4Sgw15TbWSWnAcQDACTwWnxc64n4qgXHe4MaEcwFVskJogAvSaG2DXe3FQtM7dbZFW8gfyQfCUCbn92Sjhn4nTdU",
  "key42": "4ZcJJcwyMjv4yBJPyfDbfj7rYAHCxiNKzQeQYXCFnBf16AsatdVFVmQSthBB8HJCwEEZL82sBEfDSP5SYSu1tu5e",
  "key43": "3WRijV7LneWfXvVRf3dhBiWhora3weZMbcbyf4zUj9CQ2uCKqZA9ruCGh3DZ2DS7fTxuwSC4nWjXenXvc4HGcrdw"
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
