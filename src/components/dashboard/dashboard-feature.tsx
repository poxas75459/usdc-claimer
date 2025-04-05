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
    "wFMw1gokNGZEhZFNApDUYjb2dJdwSoXQjrXpd1Rd5HqSuDsbX9kXZpzZptzah1eLT3jBGMUs4XEvQ2aLzpXHbsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57heAEnweqK68oqQVVJnW5UqQ8aEJdJczsg8cemTD3FgJ2HjNqeJ83M5GUd6om41LqoRp2uyrM2c3C3Z8cQRvihB",
  "key1": "4VhAdjPtYCnmtGRecVuG9iGN31V76UWxcpGVtDtnUmmQ86G5qU7DYUXNhnhnj46Xkov6TqkpXQKTvqYxC4KYc3TD",
  "key2": "5LVy8UdW4FAFqvzzt1ac5tszfppyZEEJYbtuxHSHgALM2LKnYziPF1MHKfbwPt8epK95VQFUqN4i1z1wRhzoZUZv",
  "key3": "4Bv4Fm19YcqwP2qVmYnBYsUbEy9TcNjyousgPK4eBJTxAf3qQXGnMnurEgH3JJAFr9UU4Ffb7ddE9277BDr94Xc1",
  "key4": "FkY5V43XXQ6tWngW1KiQi2ZgfaAw9jKzR6zr25GCresS8SubA2FCs3CcrYCSJXtKxGAehkJPzmaDR8Xq3wRtgt6",
  "key5": "55VTnw6qe7Jm9kCJUf19YEbG7WZGmmcW8K8nFznAEyUF8Fb6vHD8i9vsNhQWM8EQkkyuRGbUPokpHsGL4tibz6ma",
  "key6": "4b8yhHAH1tX6Ra3CGXMoZpP6LGmXnf6C3qomf72X8JMNdFapAD9Wr4ryR9eQaM4P16hT9dUj8nDCuvVQwZXHpkK2",
  "key7": "4Ungshotm6mFEoev55p7oJ8JAJxRjgd2jyKgE8sF95n7D8P9P6DQLfajpLaiAvcyX23gdLwYt6XG4LXc6KuVC9ga",
  "key8": "41D4fCTgnwAkRyXFALuZSXrgqhdomFD6igfZL3MLhbuc5PRJ4NnKp7yng79NJ84qoa484fFv7AMyssxh1bGTWvV",
  "key9": "4jTJYsHaHuzPVpEzZwqnt5843QidgeTXjWdNko6hHhFeDcmwykScS3zi9NFGKgam96gdK7LThqWS4xRv1cpqPYCm",
  "key10": "3R7rHNEUG7T9MCSZsEWkcZY4xvjXWK4oDZcGcgzFc3NZg7PMk7FNqm8KGbwceVDRZz696S2WrizLVFBXJ858ahTM",
  "key11": "23troRVn4acZ1BfYUe5MuMiQHQyPojbPP5CVLuPegUoyVHWCiRr6ibE5q7bxCmh3eQRMK18xmF9k1Z7RwhTuTHyR",
  "key12": "5EdRTaPPKxkkcS3VjViGf3zDhTaZQQdFHQLQSPQrGCi5mJoZpcERLaU7F5vdB2LejM7AZFsYJ4Z3Bgx8BJRRxutY",
  "key13": "5N9m63XGaqUEXRPyxNJtCrDfu8F7qo3QFhpuEEXeGgtiLgCdvA4fvg4r8sk1dZmoDA7iQZtzHm6bn3e8cAeTqXHz",
  "key14": "53u8X2ErXuUvQx7mHocjFGcJRLQnfy89C8zJFXKBwrgNALsVgvNTxmT8dHMiroEsiEkDUmABtYmead2qVczmWc4K",
  "key15": "4P2Mgxq1WenyTJWceHQEFcyWkTvKD7PvRg9Yyj9rctbUnTqPpZaxkNPCkeCGr2yBXQ3bUQP23w1BVc9onDQimn3n",
  "key16": "5Hortz8yyWsgMWAVERA2Z3PY2wt1zfuwH59rRMygDXNyo6UnPACasz8W96iGmygLGTEUVvh8SjnxfcmGNcMMaGrY",
  "key17": "RChVcN9GhvMnCz3Y5JfwEU7GQzNr5qqyQ1h9mXmN98vHRkaypZRey5yNigbmbV663zuqNZ91V9ExhqLYxuhKcZc",
  "key18": "4SGibbpw12rAxaWXb9pbJQ9kSmJoGp4cdM15cJhs1sqxwSJit74QDWarB7LG27447MmkUFf7aMqFtdGAqEg2g2ov",
  "key19": "2Dbs1QLPjYxpbXL6YiheUZdHxQYXohsoKfrvP3DMpghJEnq24JZmy54fMXQUsdUb24Z1ikoC4ZN2B37jSpicipRg",
  "key20": "5Eq67jwBfhubbBrAdp6mBeFGHN8dWcyohafqV2o9QuaoEcWkQ83jLHTsXhhDh95RofaLRAhhtxVsZMXPJjjJyDhb",
  "key21": "2WM6Fjy9EypUqCJsic6EEseiLZAm5sPB9P6J5Wm8qxbx4mnnC3EZGVCmvr3G24CVPSUjhe4B2suUNkvYCM92fEZs",
  "key22": "2nooYMK3FWPJ4D3yLtZrxxjsfG5VvCMm9Bcemu2dqH4BY63TpHZ2ujCKzVUjHzxXD41jP48mH2DXqWtGv1jMkW6g",
  "key23": "34qpufviwqR6GBLTd76HoFCycspHQEvAoRk3wpREUgjCS36dPkE3uuhhRYGUC2c4ZjArywup7mffR9Q5Q3yGKJ3M",
  "key24": "3PPRVBwVHzszLYzE5wGZXMt3eHL68yHaoX8uPgMRwUMe3TMB8deVoUqAfbV8PJ5BNo5xmHSTaj6SpZUqgDeEQSDk",
  "key25": "iPe2epbJfNs5BTv3scgd2YYXwqLGUa22FXuCDFiKxMWV3gB5wZho9rEJuCV1tX8KTUWvjsWX6iLqENM6EJisZiD",
  "key26": "2SpF9acrnaQQfik931wYHpK9EvABFPamkPQXuaXuispJFUFYbX8v2dbSm3bYR2xipJyzz9sQzCnsTwJi1jWD1M2",
  "key27": "5ZoYdZdTXj6CXmLGmttws7NTzmJdgHyxuQfaGGHBgiRm5tLYjbz13C9HTeTdJCu5XBEkFsu8AsbDMHDXuppUdQ7Q",
  "key28": "5VRBcDJzR7uWvTUrAajJW1cSDNWQ7kx7LNqrNWrU65hAmV37NuL3isLvRt1yrvg5BE3ctzcUnzmsjgNwcLw9ThtD",
  "key29": "5EDwcwRyZEGYphp2C2zrHgJRjQ3KfeUkVB5vVia4odk1Tyjp6U52xpqryMkzBxrFgGfFEGwvBubp3neN7cHMwd2R",
  "key30": "5hzamkQQNkFtU1sQAwyYFvmPkiGhm61nM7ZUZD5xvXYdF3A6cFTaMUMCCS5ZGm9MZ4FBy21MaY7NdM1ZGa6CzkeN",
  "key31": "TvtM791UZb4azAhysQQiuYjKLPufvFJc7V7asmfaGRoa9fLEeqSzMAzk1eTFfjwbnK4WmDWUUVK7zqgGurFAskq",
  "key32": "53ggMuCgPgGz9R3mGvcw92z21rKuSPePPNbHfTtmE11mKDNGD3vRbo81etAh58SAox6nABABRDwRywkBLN8xRukn",
  "key33": "4thbvpgJ6o5cecaPMCxqg7nCZrodYghydy44JHqyifgLsKZBamnTq1xQUsu7usBCgc7SrvPVPHuQ3axb1aPiw5Qm",
  "key34": "uWKGBLGXJsW8fs5jcBqN2D8hvyi8HJZtJGZ6EZEzfLEhGthhPArjcv4yuUiUS5s4dz7e6b846qsjtvnmkxsgETd"
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
