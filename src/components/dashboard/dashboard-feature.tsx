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
    "ko8d9AvZXnK4YKBkM6eT5BW62nES53CB8jU9e4TSsdNZj9jZ34KezQLLiQ3Vn7fUCAmaBuv9c5CV8ScSnxcHjSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rJHLSbBcLYQjgV722EvAwtZM7BHQ2yZKY7FvwDQwA3PNpPQTQKP7Yd9x5v4kWDUeKgyGVn6p3xYWptFfmAEXNxT",
  "key1": "5oYRK9VLC8s7xXFbi6bERrrC8ueX4thG6QxtBRySx4nwWrgMaAmWhdncqfu8qP6zCkEaTRuiPdftE5h9sBJsfeue",
  "key2": "3MLZtvsS9c9DHUDqUWicBEA2k7TwYZ13uwrEWCo8A3okZaBRNxfJNhaMEx9mcDXxwLTdKftK2qKVMx5GQbUUMukg",
  "key3": "4NknnVzpMzZ21GGjyQeKj21DDfxrZ4uRoDMeDxvYbuhLHJX2NUhQi5QBkeQHLo6pLod3HEYQhwAYX7xi62K8GYbE",
  "key4": "3GtVVFcdojYwZKoLJ9HzJUD7fLRVy6Ji3i5weerddFUKxmtDxeLhxqXTgqKSQuiL9JEdtatTzQSkbYJpekWKbzgK",
  "key5": "5LfZm8vy5kspP4v4u59VUF7cJRo5TjweZcMdW2L7Er7qR6KBiEM12knyRbxwujTAbSiwvdNH3ithm1UbCFvUjsvT",
  "key6": "2mzFbXbUaPr7qSikQ3aiRVs1wjuS1v9d6GW5x1aqNjLR5ej3KE3TrGSj9r5RLupEpvXaCHNUtEeajTjyiggEig6t",
  "key7": "WeYqWAY8gKkTXWHeRDPiNJS5z9Ft2B78QMKv9fBa9jATmBPG7q19H18uzMri9uKPFZmeNk73SqicU7m6ANdUSsx",
  "key8": "2X9ubBjeobbtCLVPerWeQwPhBRbwyWzd5txQ99DPPBGmpqtaZZDYR5dUT1wdjzAux87Q2gjaBL2tNHUujc1DYFTh",
  "key9": "Y8cn4A8jXMz85GK3pRYAWLUNRU35H8ibMz7cbMAuaguFfKsAD3q93NWhfFFjD4CbUJwxkxdh8v1QSXwUqSWfikP",
  "key10": "3FKHof5RW2yEPpBrxxomBeVdYk8rLatfujLx4LVxgqLAbdTtNM1mPev3XhgKq9di29e1Af9rQf9nVZsatNWQe9My",
  "key11": "5D77aLJU7jrxTo4rjJeyyPLi1jP3qm42aDNq22fSeX9FLBMJP62SvxT198LyrkNnH6onxpBP1dLa8iNUDeBcaLAq",
  "key12": "3BMQFN4rEJjEwTRHhiyh1pQkoGWBT8MWq3KuC2y5g9WSvB5p5Do8cWNhxYVac9A7HiimoELPFbSnipcYVFh4vJk6",
  "key13": "2M2jaZ54EnrCpWshdT4R6GEZYseKzLxt8FYYiBCtMjQ7Gg7cnWH3jnLvmNSKTUvLi8hYVSoENnuxXg9Eb4XV9jr",
  "key14": "4JAC1tQ6Zk6oKxtVtWYjGQxAs9qbDqRSNNGfr5jBKjbg6VpDQ35wq2CRKH9AXX6WHMny6LWmzKxp2HvXLHwfGMYP",
  "key15": "4v4LkLCAWD729FASojDsYqcgPE2ZgaMARFoYDPDjnZ5i7iQbLXSad9ayP1FQNnPmaW5dXXw6puzKij94o4YeyR9V",
  "key16": "4Zb8DjB2xv7D38GLQZgVxHxsxfdUUARRGSe2ZzaFwNfn2E91odZMeUWhofTfD2ga2C8Bo1qZGyQaKTrLvMfAw2gH",
  "key17": "2JAHc34Kwnw8YUhQSNnFGy2qm7mdfuRsmkPT38FigKv5TVgzwYT4kFePUQdLEve5C2Qu1bDGZQqKjDupaTfj6Pxp",
  "key18": "2mUJPYL75wCEkUKNRmCNkmY8cf3e1hLRYfGyUA5bEvs5A6Lqzjo7uQXvrsJD1wA8KHWMSc9116cp1orn6XDahVUT",
  "key19": "5fEPS9ssK9CuC1RhpCP8oZSHgcZGB6eT91LKGHajhUvy2RUVFZDdUFqX6vhUn8QG1A61yrCSa1nZiwFG1i5b2Gc6",
  "key20": "4JjmigA7d3ZYnRTBxeEPvNEvvSp7PQ5ioY6P7QNB81Lf7MzmdfubKVvDPaikjR5Ubx8bd81S7rjHSyNQYp44U9UB",
  "key21": "8zoYGwrJj73YCJScCRwmNGTdBo1AwsdQZrwxHggzMT11Cmsfg4gWGz9bJfQeGiqBrMqscG2TopGfUEx8waeYGSZ",
  "key22": "2uMtn6KqYpv6f1phaZ2ymfZxzGVyfHbfgisVvDbV8VA8imxUSHaH3zV1ZwzeRL4ymoiDUosAbQqGhBbw5x8dvgqs",
  "key23": "4zDT1FbWEfQFwuSjg9GD8aGXiaMkTgnW9JSs7QavtopBphTG3H3XsvCPJb6551BRaiuRYgpUG7rm1xN3d2amh8Rh",
  "key24": "4SyAaixZpQRiqtwu98GUaz5JdtAKaUSY7QJsiXyTuMV7VbysY2uc5uhidhPqCZRbsDkiApdkdpE1beWpUxRLPiRB",
  "key25": "3F3oKohDfmxYwoafCeKmHLBiDiz2FrjwGvxKhJmFLkDUxkm6h9XgQDtqYmYCZUCP5qvYeFiHnfnHkJSrKiGX2ZTC",
  "key26": "5Tef96f5gvgVKAknKebvchnCypn7t1ff3SUekndQDy2EhTJq3BaejBk2trJoMUoQuYMUzgDCsPQ966vdX96A8yZo",
  "key27": "1AbYjoonC2kgjBNv5jPRtywNa79Eqy2kqo5SXYWFW17R3BM3ZdNzJJ97TcaRisnoFebXgjUeessadtMMx5qxefy",
  "key28": "3pW978P7Lm6d8eEoDL4hm9drp7iajE2MpVRhPYAkeM4BYahBewuc6avaPR1V9GZmdb5zE8AFczAiEoJR1wyJNXHt",
  "key29": "5EGhZFzGG3Z6CaddRHmyBUoR1rE16cX4KjvpScWPZShxZkbeLiAK9GXwLCjfrmqh5iz9TFUUc83Qvu7q6NrHJ2xV",
  "key30": "4hgPGcmXnqwYUFWKWspuMX9cErqHnSihaV5kNBn262v1E77rwZFvAK5hVWgNsXVNVEVh5McHH5ACN86uHeAJbmdi",
  "key31": "P6seQry7swmmZJgj3FAADmhTppnMhg7U2RuELitixW7BPqRSzEWcANwxUfFXcowgeeci7MrXX8azAR6CsF1tFEp"
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
