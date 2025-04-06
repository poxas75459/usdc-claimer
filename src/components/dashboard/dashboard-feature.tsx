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
    "3zkqPjLZkenzw3iUMb94w1pwu37AqiU3KnkXShDQgXujBR4cZugP3auwHJxL8g1x2AnHgof8VXzccEeLZpct72qX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e39RmYdRBrVfH5JWVYx4QqKgxT3PkvzY5eLATooweeMXkPf1d5DQXAqNLgBdhzp4oapnYjDv3PuyqNsg1K2hjkq",
  "key1": "5qLNXyV563fzeJfo5kXQyJ7xV37CdyfhfauEXi8yjsm1dMwtTZrqACGLaamF2N6iimMyopHAyGSm35mCBQwwC14T",
  "key2": "h5DMC8pKsNyN1zTtEFEJAcsefWZZNcmAc21JJMSNNUbRL7os9TxxiHAY6wc2c9AJpw56K7faqEJu8uZfrYhtjLh",
  "key3": "BqkMvL66yAuzN96UUABZYDTRZ3DcpfVuDcZhZ8ERCCFJ2UwRAXDqBrrFQSR8HE7TzRwMs5b6TwU9GzLwxXR5KqY",
  "key4": "AMzyBrMdLfqAtb93tj3DC2SDzQWo6XrkbBkLLuPbd4qcwVCqBvr48kUCBnW9dRDPyDiktZz7Ks7oDLuoC1nNXFS",
  "key5": "3yPYGzu7KCsEZzFwpLdkkzxJ9zsA5UHktE7U7ipYZSQ9YPntRB48TLf7Fmbz5xFj7FJ7GXZWYbKpY9fR198kNyup",
  "key6": "2vugmKeQD7dqdhoT33shiETc3hXRRBnHTGjvaZaeBjtzkFeaEQ63mzsMMwu6izS5czY3CbX8saucQ7Dwu8hATUzg",
  "key7": "4LYXwGqWwaEjWZgcEhAnCrQJyP3b427LKt42SJ1KYn6H9DVwshLA24DQ8CDyqTKGBJ6ZQMa9Qtewc5V5Rvw96nij",
  "key8": "5whW2yXF8vv9RJBjqzai4i5NMenwwiQPRD382qh74qM3jVUhfNrVtStoHMAM2VJ5PQraaYNPoavkUgqFJWoemyBD",
  "key9": "4eSzXnENhFeQECC82DH9yLM3URUr2S3zC6LcdL6MzFh3BgaGhgDcDeLNJW6EyM5jKCNGxQqoh2C7NbqiRYa5V2W9",
  "key10": "PVE6CaL41CmJLMQ2id9seCFZ7w5NGK4GxVPrVeCyTUbjzUtW3dXmePeumFqiHn6NdWu69o17yA3KsT692T4mMyC",
  "key11": "3om892n8e2BTYUzg6qDTyCDgm6WrCkJpdHYZ2N1taok4FoT1Gv2yyXqPbj6PrimusB9HPvU4hDshr8NnheFgVqDE",
  "key12": "4roQCWoFuJjUZtUPNw1WZHiXEeAwHFwWABpFBC4rPsYBGprc3r8FyaRkayJmpQC5VsbbF1FRmCV57wijNiUTKPR6",
  "key13": "2t58GLSekwYoRDFC3583xnf1abSYwKybj4Lp5iuPiTPmLddcTfpBLXKc7xXUA5CRnDzgDAg3SkhRhqt7NJkw9eRA",
  "key14": "23C3ptXSqFScAbqaKrrm19bYEG6vC15i6j5jULuskqtfaLzwQqRFZJx5bWQk7bTJYRzaFyv3oSEwtcUhSjD6uTCv",
  "key15": "33zEcQR8mfzH4f6RZ2tLQVa6YqfD9BUXXNjrQw38PzjnzS4Z7JNBHT798PG9U1pLYxrrdfLbF5efqdU3tV8RqaJd",
  "key16": "3hgLRYJrRfBhSBAzRS7Ytg25adcPVLuSaWSX8wTwXVZNqs4hJNRx8QGBvbVvYBd71FfrkcTxyp3btYq5Nqcg4dba",
  "key17": "2ePbqsyYSj78cajT5LCdYgxR9sFDY4vba6TvC9vt8VvyZ61eUvKNYYmTHmWL9rMXHZZj2aD7ssSYvweNxGuk4iNL",
  "key18": "hQda3JCoT7Xq1AKqXhF7fDhZSEc8xmNzoKd7MdZe6TB5VeD2AyGsPb7KxwZV5zMDTxXvs9QFyGPpfgEM4fp5oiR",
  "key19": "4qAGiWHaDYseTbTCNiYmvuRWhjt3aHudNSdXt5feiiXA7EVvXLQAZevLoYq7nYb6b3drtP7M9i4FZTfKBqkGHJgz",
  "key20": "3RXdHKrb2GsTj8ix7ASHMSuYuEnnzs99cWFLSU6znxEuPs3oqQYGbHjD8sZDqS8o7zZ3xX4hbQZ1s4YrCzEzA4AS",
  "key21": "3jaigHxT1PtYbSHjEzkHog14re46egamM3BSJJ92BteaguN7Ve8YMrM5VuxjrS7cGxhBHyaHGRyuzZiFi1tA8Pwt",
  "key22": "2JuEBadnLhpahcbb9fkK6D2AR2qGSLzWp37nSt2cEzFBFoLpFhNa6TM6Ln2iLwKFFfWK3ebmwEqjNPkE2uLDkbLo",
  "key23": "5kkkRXwQ9obqE4YogxrArMXcMa8tJSQsrjREkv5gnRrRnv5awxbS1nCVfeWvXnhz31JnHRp3a35mhLHcEdFKYZRd",
  "key24": "2uthc6uQd1t473jr5BhYu3pgGGrpjYdoZbSCK1rxxSbVYPfKadXmaUYXuCFzPTUP8xjo2HD9rNKsZFcgCxorJg8b",
  "key25": "5cHXTRXw8q8XoW87y4Apa5HLCZ4yhcAeSCsS7AsmAH3tph8zX8tpff9ZFowRzhQ9vvZjLggSy9ixmGRRvNdKk3wA",
  "key26": "32gYGsL649kg15PsZqKgkE3zpDPHnsBeZ9sPBBTPSPRwTdgGd3z95CHkDEvYZLD8Yqn38hyqBmqCJfk1RF11RSuo",
  "key27": "36Eq6Mzpha32PNAZniTiXPFr7gDNw1k5zjrxKCNAcXHhm31nwDMGYjYuxtm7fji5sGFomAF7gJ4RePTPDEWa3iA9",
  "key28": "3bhH7X2gXwncYHasMRzeS1xtA2cWqJUxJoRjphJv1uRLisAQ1uzdo5zme82JqxGGVxS4LtPY7YxtdLrxJTNR3fjN",
  "key29": "25vGyB3iBfqXAq3p4to9LBgMwwbWiyf9EPsSwJyyyX45wACiMVSGYkjfZ2QpUv2h2wn3G5XZX4sssA4DZZgp8cgd",
  "key30": "3DTPUW9jcJrzLaWZspMwyhQd4RdG6kcGbdMFsgQSeXf2eNvkSfCjSEF5z7p2SUS6j1aAKEi4YfdVgtA5ganRhydF",
  "key31": "4LXKSz2Ufcc1WmSxNenTkQDfzV6FmmTjoBWghkngWcMiW9adcEZB8YvrwEioMAU3accZB4PvMEJroUbxwuncNTbe",
  "key32": "5MkFt7Qi4wFX7YyqGSj7xFU79KAeByKTMLVfAUTWpkJhVZWp2EvJEMSbRoYKreyrxVYMNdMbSyvXt6MqZWB3LrEY",
  "key33": "2mqMsfTKJatsk8NEHDWrqjTVcuvvMvJyf8V3D29UzF6WodCwvs39i1adcVcjajDhHkamT8UP9c2hoX7RLT89zj2s",
  "key34": "5u4SAsEBYKX2FrbXbN84gnAfLKDafF3yJMKWcNcjp5f6rww4kzECajKus2vqJCoXFzs8sd3PFV8PJHeXCr3XnHXY",
  "key35": "4wVeyp4Wseb9mnTj8424phswrUuQAgcHDPUhgtrpCaaj2ypcnh3hkPbhLJFoGptKnZdJe5dJBHBPvbvkF52B1FjT",
  "key36": "5btywdrBYnFuZWMq3Tik11KGC5ctXTZkNXcK7RiR5ABZmZw3PVQ18itwRPCHi1ENrHC92MxJi8BenVoNi4chzbkQ",
  "key37": "3KggRB1AzeU6xLyNwNkguMWW2txiuB17LHSZyHF9iNqgN9JuzwwqX7wVWCKgBWHCBPyEtNh5HmV7VWub64ceodR4",
  "key38": "4QD9feoYDtP9DBT999fS7uufSVadZKbp5c47PVyCqmACxEG8yoUR9pK8zxRqeQknKUyRLoX3KD7G466yDfwWYKGY",
  "key39": "59iJemn4JuapYwFQ6PHrBa3zYsND5YDzkdc83y9VyBmuYnzDyUcun3GkVC2xPmmreiogqfY8txtsBUsAgwZU2zJk",
  "key40": "52qoEdA2PvQhKEUDazEjobVAgTcgzwLs8US19YQFAuzDxXNX3WKh1PpwPwMrftiEmhgmXsMt3JsL1WiiRfYp3ct1",
  "key41": "4ARPzvJLQZqq3BWYwZ1uCUshNxX7mMGXuSdRPhPyQJVRsPQSXikdqiwDGSSFpH2YaG9vFQJhnYDgtoG1LNBwh3Qj",
  "key42": "jxGAZdmaZG8EUzXRs9GMFT8NfYWNrxtqkvEhD1E2ftKUzeqApm3wpDHfn48bnZN3CsvvNRbMdkmXEqckyZUKSFf",
  "key43": "qLAmDLUHiwLzpe579x8AQ1eoTfuzwTN7whKQTumiVVd73anB3ku6g2jaKJmBASMWKvopnmQC3GT4xLB4mUu7MAZ",
  "key44": "3nVpkCA1N34nwKweQLYXXnK3xF3iPbr8UQVXpRdeAuobk1KgB5xnm4T2Na89PKwm4JCSNrzURTJY1CE3FLNUQJBw"
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
