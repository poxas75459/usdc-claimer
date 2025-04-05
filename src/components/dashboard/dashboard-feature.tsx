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
    "5QroTWywPXG94ufo9eTn8LAQhHL6TNEmc9BC3CV1E1FHLkAwWiV5vXmNKLHv1p1o4a5i9rQHnAxpNJf8gdYyK6cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCP3RDs7B9bTXmhm4eafQRD54WrM7v2i1MuRidF4MDNk4mVLiqfitMVVDh9rQ2xVQSFbiV1qvJdVGkk7PbNb7eQ",
  "key1": "3Q58aXgyCzoCYbpPURyAwsp7JfVnxhN1g5Y8UCzpxPR1VCp8t6QLJffuM4DMUzSJXY4iaf8aT6qzGxL5xNbPaKTS",
  "key2": "3y5Svegcq1necJBk8E7uXFFmj53LcFZzuBxjfceTwHDWsExedfgYzW9D5ChzPftZB1TQyqVjKyXe3RDrjMCpeffs",
  "key3": "5Sp8egxJkYB9EjZqUJHkfFjwASDQ3BCU9fYYx6xt62YoC2K7ezT4JtZwnyG6NKFaGqnopHH6fAaGA4W1k1Y7hCfu",
  "key4": "2jAV4MLwYgGNfoXbrh4x8tBeaZUwABaGHAr7LUbjuyu7by2NEMbBtYArQNs5DxfGJNwZYBaDtvFFZkhcwSufhEXu",
  "key5": "CY7hADinVBe7F8k9RMDCtfLUG3mfaBnoYpzv8isk287K4p2cNYVvXaZ9mCUxkmcJvGZ4K55539GTbMC5P3ZTXip",
  "key6": "2LbF9CHvas7g8LFHmqk5jfZiGBzqFC4vNcsnDWcoppJZnqKHHsYpjKHyXsRFeiyiwHbcLwc882KoLRvZzttar41a",
  "key7": "4ozRR3C5JUXe5j363htNabaEBmSof27DdPYGTb424S1zTRRjK2Yx2XSJvFhJLgsWQiiiZBNxTWiwGhYPGXWFPGMx",
  "key8": "48JCgepNiWjYvMy8Y7qBtkcwgLczY5Kv3je4DQJmqpKy8SpV3sWH8zgr7GxGWUBbhaiLtBtQXGMehVVn6htxWURm",
  "key9": "3Mo5vbc4PY6ngYsNqAbUj92fh7e6WnBRFio1C4T1P7v79KZkc4MXMz2e1TKdBpHHXo4tfzewQ7Ei4gbfysw6JYfA",
  "key10": "FB3XtNh6xD1nztUj3QXc1DiGmV4iuciBtn8TvZRReSi1cQkJHU5QciLLUkK2cyH5kY3vFL5a3kJVt3Jx1tx6VP8",
  "key11": "2jmJwxzqXctjPPGhkYUZ5cPWyoNYJrgrZG4Fn9MFRknYDfKRTFdSZo1y6scVLtNSa5V54jz98NG3p2TYCAkjZRFn",
  "key12": "3zn4JF4ot7QWXmLwGLKAsdAdhCASPnwrh1x857TyaAXYk8ma4EV6EMMjGVnWZyhtb1SFsJR2VJr3kRn1XV1Ar69D",
  "key13": "3SsiyASZSVBR7CKSjMyDBzgjqKPynm7K553u7Sni3Pfj4V2zJwLmrkG5HbBzZsCk8acLZDhEJZLtfg6js9tjQnrm",
  "key14": "221okJ2oroinEUThU8XUBWZJXnJaE5xCR3FdZy6T9SdLL2E4zqtHWSCSoRfLbiALUNLVQUR2PFkW32zDroejnAjb",
  "key15": "s13pFETYnC1tZ27pjBC2JvYs9GJ2UCwF6qcU6npCZZ5oabtpwQvPVom2nzxZ9Seda79WDBGU57tBRUXaUb984J3",
  "key16": "3HVEmYWCaD5S5jxCqJd3tzqnUj8VVbT6rkXQE8sfwUBPmFyjtQ5iJ2CuPsjsjG1fGkXfm9cpNqSsiZJdj4MCKKxL",
  "key17": "4NJGGpJrKWweJHM5jndsysN7SjCGxUHBPvasMV5b1gw2zxHpfyuaZJgqmQvNzvykxx8uSb4howWRhVRdJAxGv7vp",
  "key18": "5E911S9VCTjghyFoQyNpKNDEDKF2YjxKcUfxPb5t3uedSriFCzWQyFsd9Tx3VGLhDHjMT6rTeFbiY47oUeyPBpuH",
  "key19": "efZhpU3LLgTQVD7dRJ3xfKTGBd3qsxbQWdbXsHnauzgGpsFfGNxngVLx6sHnRkgBpgzBpTantZfm9diZdEHMxii",
  "key20": "3EfLac9QpZrScGFg8taTeUeuQKJZHwNkYxMaut9gdipWaJvyqnpvXS7qaq7sbgz7yfpTpsTNFdyFKaepawV5tnLt",
  "key21": "3rLwLdEAW3DDY7dwtge33L9tiiCS4gcKWYkLikGV7BXPJmJCnvfEdGBEdFftNzSPL88smqvEBN9ykvvP3Gj4aoYs",
  "key22": "4WAM8mjVovt3axWQhVLHgpSgcmfiknbawmjMwoVwPN9ebCPyry1NxTe5HZZEUuTPL58MtgN63Y5D26v12sLWXqvM",
  "key23": "47QhchD5xWRz7YwrEsWafos7L6XgPVLLFEEQPJ11XXqkwo6m2YBzBBhdQWAQMMAyCaWuvWYn9PEdjHxumkbKdhfJ",
  "key24": "5ThWN9WrP3EJheUQwbea7uDdSbRtJNwKJnbzt5CJZ43qBKG6HKC82hQiGfJyK111Wk9UmL2LfkG6hax5HRKi9Cyj",
  "key25": "2iQfMQkuLa9cFBKzfrRfpXUqnNHQoHSceWEb5xZ9sKkdcH5xSmRcYe69Hv5NH4qL9WNquBMfRF5bbuJVCkPDFAdR",
  "key26": "47HCS9EKyxxBeZNAgzNJJAUh11Wd8BPYqb6cHK5akXpa7qBb1tyx85oniZ4cunvkZDHsdNEPJ7NC9vKn9CBNm3rW",
  "key27": "66bhZVpntN8vk5PbNatBFiR3hHn3pLwLrucmVuvC95PUUrcKWpR8bzkKLvBeQ8vsKTiP16nn5AL9c72aYnXKLDXJ",
  "key28": "aTwZ1peoaZmUTrFhp6h7SddQgmQnXBwMqF4LgYoumX5TbkazPBqaX5YyqaoF7xpgSYx8hCcqmAQf5mj4AX2kwRH",
  "key29": "2rW1igen6iX1PNVg1koFn2Xkg2JBfH171yDW2muuQfhH2D8Gm32g5rJUWVr2ADKJqStXYRhpYiq3FBEX7vCU7Dhd",
  "key30": "5D1vnRyo2oYBKe7TjEfyq5Rs5F4BeYLPepNrvjkuXfnuYQKd1JxKorpX92MSLYVQWssSDVYUuHpgN9eY8HxH2kFW",
  "key31": "5RZ4hd1nYbZrxoV3yjKfeReK2FP8NMjM1h3pZjGRsfuyeKieCEFKVyiprvifbGJdqv5RGr4PGJGqBnnvWmSBdfpq",
  "key32": "3ykhv3Hd46Cc5qpEuU3zzk7BBfSNGn3ZYiJbMXWK4VzBmiMtDH9UnogmbEHfLM3j3QffJpJsTWn3Bps4Q3uyUxae",
  "key33": "snQ5Sifv6cbtb8ZnL8uW6ZroJpJepMghJWP2pXpv6qsXcjExX65LZh4NUqjZaSnUBfHXdJAYof626GxM8d7tDPS",
  "key34": "4F2kHasd39dZMYya1XUBwKSCGNajwwj47wd4pHzFQBsFEmGNaq7bqUUMPyB7zB7qeaaYsCqm9QVsCqF4r48Zzpdq",
  "key35": "2NSrKUkDe7tUSeGMELtR2SUzaap8Dv7cDh6RZaq7MDmy6v3Y2i8fWLdidgUpLScRm2XtYes6ZaZib6H73dLpLxrF"
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
