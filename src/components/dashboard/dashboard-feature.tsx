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
    "424H6LiDQ9BKQTHgo1EVtcEqCHsbLwWc5pjSXA5qAPQ1t14KEySVedXJpR8ond3pQ1p6m1DbJBf1KVvDeUcrXksS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gseSkzqPiCu1geZDwQqsfq1kQHRqW1eF1EwmV5VSAhtFjV3q43VLVgvWBZiUdG7arteJjJ41rvmqab2RjsGDBKP",
  "key1": "ytgqpqQXQ4VXRmvUTVp3xqAFpJnbWWLpHcg1QHDuLmENzbH8rTtujyGGazvXpUUYDknFg9p6XuEcEVSTkFWwi89",
  "key2": "9q1xeLvZETnAVdN5qwdKBYKpymqjmEhhsUuZWAti14DoUpNgS731JKQw3UqasWq35GtwwBWt44XRY4xGorhQwLm",
  "key3": "2n7m1KQiEgpHDDesUPQQ6UseKKcVfULdVH1p4TT3ndRRRzrvnPVrTAGJxWGcPJKVuCF9zn4QqBSnAtJ64mTT8kkb",
  "key4": "3nss3fnFHVAj2gEoLAw2BsjxqgPEQGUFjC2ih3JbudGch5UvRNTy6UvyUXMfiBPyeq4HvJVAZdEQSKPWmY4y8bjN",
  "key5": "21oJfXK9tR7BfJyuHybXygczZwXgc352MkyFhxhGzcEufJKriuYbu14BWXq7dmWZ7j9qig35HPd4YBWiVhwvF15y",
  "key6": "2VfZr8Eu8yiSt2apLkiyeaBhA5ojeejF9VwP2BA7m9m4NcctnfnDtza2iehfS5PN8GGei5D5aoN5FXPn6B5ZBtDq",
  "key7": "1BQNNayjgyHtyHGSux5xij2vqKUr5WmHnMZSti56Le6rvwcCV2NaeMZCpnz2k36dz8d7rEX1x9mqdtJi3SXdU4V",
  "key8": "2YPQms95WonznhtFya8qxbZBvBEnNa9oG9CGub1LeoKYH7L6jJMKwhYMXxzxxZPxPnoM4Z7pCyk2Ki4WFzNxdU7d",
  "key9": "WPTqziRTbWzVgXyK23c5pWBZ7L3pwSmSkSPbEXg8yp3Cme6ATP12C6azB3Zc4aoN69YLZSX9phF7hXMuKHMKvoV",
  "key10": "ZgYBJBB3pNJVfUFU8PRK81U7iPtkTixFiVRQ6UUCVL9GkvQxKAJuboBwH9tfoEuJUsWrgXkwp5sr1M2Wi2VZEwL",
  "key11": "3rdyqjCGJ8Qd4qokTwoN2RoXLu3fvEPihSGYbVxA6QsstuqfQhVswJ7yNyWVSsfTBihBm8UaAiMdYP3RpQ6C79t4",
  "key12": "2DTzvTMBLcLZEi9UkViaKXkZhMe9bGghuqmacaoYe9HjeBr8UvtowY4xshB35eGpyXPr1EkGa52tUMADW1uF2HcQ",
  "key13": "2esh2QDtNRWooDfVeySjqaNM6ZBLhGCAYrCbfcQ1zT5qzWHLoBSbNiDYbuBKiC9r5aNduRzrkJmrkAPdBgy1GvZX",
  "key14": "4XjrFDRxLNLskwRNeNK4tNtPcJsKwqNda7ehhct9X3ae7HU53ud7zS7hJ28HJwyxmRNgdT7gniK1qzDwkaC33Cio",
  "key15": "48sdpLdbznLfVQVbzS6XUCfgx9hLzCT2wQYpJpavXMrMpr7HKyjBHQsTAhmzbyapZH6qrReBE4tfseJaTnYH4yB9",
  "key16": "5n3zn1a5b5BfhxBTgA7kyDYbFpBerCnAVDKUWuDQ29eLNqEbKPKrtvoamHKqoHtXyiJUP5kzMGY57ngPqzXGXdVz",
  "key17": "4Fqz3R96GDD5HoP8QWxmSGmbe4wV9GotA5PazfY9z7AX3AcKasD9XM225eXQAhECBvg1djmwcY5FUt1M2anHqrVk",
  "key18": "5kXWwV2wsGLgMx3Ytg5SPqfxjHy72nMzc7ziNbagfxFVZkAKMtLZY2o5BX8ujokUdUMJMqGz5yETAwMBavEoWcUx",
  "key19": "3SNxRfBZ9qB79ANrt7fo79B4J4Q1XNzcZx78yQ5rrjUj6mJ1M6pKDxGrAcn2XbsFzajibXUJTkcTPPHCZhQCNbSY",
  "key20": "21EDvhiZP2DnjcX7RMffKKePTSx8Coen5JD3hDZGhZqXYEnkqC9T9SK5nFt6rFiRiGsTsuTcXtPQMMjYcNbdtfy8",
  "key21": "4HjEd8pjcn3aqNsCBnekiYHGm6uFFRHPxY2wzXg3YSPwyNhfhd37d8zkAvDTYp39ugbqyiFkHLAa742acBoBHW39",
  "key22": "5Bz635YwZcEWdy6F3E2L59dGdjqx7GBVh7ej5LCyor61DyjywPyMgNtTBjd6jPL17Xp2rTmgbKaZ8ZMSTNXaJNuC",
  "key23": "376trYwB1g1wQ1cYNRv19CWRQVVxSba6SHrSkzR2PTQ6Jm2NJtBRS6p4wFNAzzbbzvqJowhe9Yvn8GjcEY7BcYXJ",
  "key24": "2kXJRfNMYxHeAzvNCngtK2wKDaCYRAn9od3Gj49Bx613ftU5Xh1HuQDvRh6xHxfciEHTFH5PDwJ5EnScZkMpg5CY",
  "key25": "59QTRunzdgsfPQPV7JXssrP4wBVhqVPpKPUiJn1W2DQjvBfvGMjhBWu1jwDkkVLeFVwdbvEpSpuFvRXkZBkmrU2t",
  "key26": "21Gy8trXaN5dKwPcFCcY56ntpdz64xBstR1CKEQAwiSxkZcFQeTAKcrNjskKX4mEsnqUhF59maoBtps95Qzj19fK",
  "key27": "4nhvt39TDLPBhX62GyvpN5SSAnMdjPomjeoNP6kUWhUnSLs6Fnrbxq9oFio9gy2CCwsXtygFAmwMd97Q7gQSfHzn",
  "key28": "66tXvMuLt6i4HNsUgrLq7pVQqGJuBCaaQdAKmoxQJBPC5HKyq8Y7thmQEY6xVZXkw93B2Mkf8CnziE14PMaqcnnY",
  "key29": "RVAv7vFzHFQwnpaPYGcDEA12K58182S9Fx8jUMVEh5qmi97mGAWhG5597KiRV36XAzzP79d3Zptw8Rthnk4fEUK",
  "key30": "2HtgtykbWwbkkKexewMW999pVTJiJdSyUrMJxRPfxYGDPf9QmnoVauZRdwzWu1gdGFCcBVrNeUX6Y3LAyxxosfsX",
  "key31": "4gQ71F9neHbimJs1jvqYZZmmvG84t4LRGWhDtp931pWhTZ8yPHNgJRU3z18sg6xyZeRSyNS1k1qNhximgnVJWEwt",
  "key32": "2RuHbPsKFxA3Q1ApnMe14sbrpwfK2dyppB5nVEWjfxtcrSjsqKR6ptV3kmLjSoypznAqTxsJGsTV6U3hJfwFcJ2D",
  "key33": "3UsTpoj8Fne12LRxhmxbTiRT7k38NUT2KJCZpz1ANF1VRJwxsb9SYrHQ7qhN56Am3in4rA85EoxkSe93hpkVMvPn",
  "key34": "5DF8isgNv5F54d9Sp7SdkCgPWw3rVGXaGz71vErwjx9rrmeEbZjyauSMiFDLkZHtvTMXUqXmwQ7TcJVutHXyT9Sp",
  "key35": "4RU5VGcobFXL5UrfeoAuWHjPWTbSBjufyDBWWEDxwo9wg1XALGtosPDAoSggjbXMYLdZu2sqicYD2vfxtdP6HrD8",
  "key36": "2eRMBJ1KBndnLAM2s5YzPtoaD7s7zJSJ1nucVAN3uhQzDPAeDpTaaGHSH2asXAAWAnmi5mAjRUowLu8EhreD6gpr",
  "key37": "3dzXhwRcEoxu1m4eGSG7TQEEh9wumZuZmymaSfN7P2VaJKiQ2GNbq6c1gNULqpanH1oiecvm1HsqNS5RT1vxwqrJ",
  "key38": "4D9SVoYktjMY3JF8MoqispD6YKFqysXHS7yUwTTh6bQfUXUbrLgqYFp7edeUYwEmMASoffRV3rpmSXiZwPPB9XE5",
  "key39": "4bFVBVx2HMztxaV8QZicRZkP15QTvXLJ4i7UefJeazQvjQ6VMG6gdGQ3jW4hGGUM7TXk9EUXAb7k5jgrkRUyZYN5"
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
