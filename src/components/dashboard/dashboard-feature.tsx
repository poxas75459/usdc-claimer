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
    "2SWeneiyEDgwwebXfXKuDEHEU5EnjHvHY8tcTScgszLYdHYqLhwR3c1k78kv4B3EvuBErXcg6Vaxydnp3jnd85fZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n5TL4ohzWuy7DCMr7i24b8AdAZRfyN6VydvhWBrGBhusBQ4DBqgQ8Et7o5sCb9pyPR473WjXeQpqXvDFDeL5dai",
  "key1": "5HWQrRamjUX2n27ximpj8k6HWuPhHWtLct9siRxZzrauEGZEgahhDRsUQ3Kq2chZTM3F5ADMqNarMQbbKcybCxGm",
  "key2": "47BgogYEmfvFHZnSeZ7X4ZWrMQQJ3htHsx3drcRAmRrp3b6E9qUkkrdUBD47zthytXKAVter4gQ8iAzxLfAGnfrG",
  "key3": "4YK8Q5giuY9zBouw87AQdxJTpfqPVrfJwo6YQdguGNLA2WrxVxkeqRPHFnGaKdYwPtJQv7WvEibbJzXjHFnZHHJs",
  "key4": "4oCiVXyRjkGGHwDurPC91KpCykF9pSKKk58oZdtbRenhu5PMMpgiUUdEuauQSrATDFhzoxVkC4v3g1hQe9vAFHr2",
  "key5": "53EdwAbiyP8kTtVgdwPPhQDKgJf15915NhqfeJJLpQ7wEVDWAVf6ETEc9VheeX4JLB81YTs73fgGy8TtErCboaH2",
  "key6": "2giYKGJBj66DT88s1ENUrjVthCDx8ebBPk4DVirdRU84DGqpvk9r83Hevtdbxd7LdT8JYShDnc45vLWmArAfQL1s",
  "key7": "2L5rk6j2FkkRGShVdYxdP1i5btK7ANvKufUPywgQd6NhR5DTrrZYPwSwVTiWQ4gLADvZAqCK9G2W8gqjPUjtHLE4",
  "key8": "aQZgKuoeiwAu2pSU6yJnUaA26GxPRX63AJqmAd9BwvDXwY3T1Kt4MCFoDok65TiuMxjEyf8vjGJuPQvip8Zb293",
  "key9": "3e9tmUcF5sFGWjAB7vjJRXUir44iW6CpztiDydMNCsdQRioXx4gUNs9x8mfmn6i9szm92vXaZFMAxNm6NG2Jnyw8",
  "key10": "HthNRQTaNx97zCgq3vZixTTq2QCg1ptyLnTBy7buoDL4M3Gp9GBJZ6yUexnX6GqLNgHGkLMG9VMne8tV7zuKfbH",
  "key11": "LdNj4Yrea9yRt886zEvnMjFsPPPYMQyfbqcNo4URnZiVBWLf8uSL6jBz6D86BouPVkSXBMrmULZhVuTjngbpwo8",
  "key12": "ix1jcy9C2pzWLDwQAissEbzLZbo8DnP6sXba8nJUs9LQ3q8wA7svsCsrCKjL4gpgm1QdZWf6z78uYAfiMZa8dsA",
  "key13": "4CgvN2k5LEViVG7dhN3MGtyLuyGJVRjgmsheAeFHygMDKoL28FNtA6CbXUNqUHCztv91qNDmoEq5hnXVp4Uqj4TJ",
  "key14": "kbXfLTP1HFi1sYtNApwFnqsxhRMhqRSiAQ582uhsNBmHyfnYGuYaN2kGcqr8tU9KV9qmo5MY3jkoEcYHDbNEjqt",
  "key15": "2sTqrdNkyECT4xYbFCefiWLg4UziH3c3uQ4y7JrJDzKDAtyERyEjdKaEJcNuNcP2RyXVbNi5S2HUsSoK1CBB4kX8",
  "key16": "ZhKqdowAiDbdFKuQuuP4ax2bRtiA7zcQnXSWyPjWgQZFreRMsR4oyBo3Mdcvyt4EETiAyriap79upCvdYDrYfXz",
  "key17": "4L4PikTVbhkWiWmPrkPX3WPBJ4N553C85Tsj52F3fL2wDi1J9V7hxx6N2Jzt7W283kac4aYZjU6FjFwwqjsF7dHD",
  "key18": "4K2qSKhdLQpt3jgpsjjSf4Dj3L1REa76YdoUP2HJ1owtA8nQYS5RgCRJJFfg178p82tiibEF8K3tAzocDGsk1RpK",
  "key19": "44NinxN8WNdebxinNo21NYR8fhMCXwVUpazYTtxhV179wECXLR18WQxdd2M7Cc7TRWzV1DoK1cMbU6hkcHspMw82",
  "key20": "4XRxuMe96LZvsFxm4SHhdBTYLSy1P9Fs8M4v8nPHHxhkNBA4PjJwUa3REjEby8bD3HJfCZGHWQSS8ovDaYj5T4wL",
  "key21": "4Ek7wBCpTnMNJM2C1hqdYKWjT1tzBByPW1HyVErCYDPqqhtzJBhQfeQu39QMedCfJqnhdvYriAFGd6fG3RsxHC46",
  "key22": "35gC36PExQSeZNYTP1Lx4UC44i87rkKABBBoJLnBsD9bbiJrk8HxJPicyeSAx97uHoYzqNaQYUKisFYf3bwNX83f",
  "key23": "4tjuC7Guh2NESNeKv9y2hq1ngkCo9DvCsCGhvUKx8pSDZe4unjKGnnx68SD3fTogTyvcAEnZ3rVwE18xhbvjeqqw",
  "key24": "5FVJ3Mqb1GSTDimk86iGmk8VTW4Zrq7qSCmEhFyChdXvt7oZXS5YMcuk3LJaHb21tR9qkeHH38Xs5hysqBeQDwy1",
  "key25": "pafBETASPKGe7VvbSY2PQTht2P5kYDyuo5xPbjcCxvZdVziwT124X2d9VyfLUJjNx4CZwYR93tdRGCtEH3baN7T",
  "key26": "2hafBTHXxPwTXdNFoqD6N6GKTFT9JUX1pimxRo2eCtpPgZ5GDm98SMpfVAiPYNhfzEAJLXWagnN2GCsBYUKFRESM",
  "key27": "2L4maecE6HJor1D6dkESseYppRMDw7qwKFikaAjcVoQhyTsvM2HURbMWd56KMsbh3yKrevJVy4CmEAKHNYE2prT5",
  "key28": "2CrCzAmjJuTqoCWEYEFJpFZidifJjsn469D7yBxSTtUdCbzYLQzxx7sRyfviKBG3Q3dUr6d27MgsbyFjCtxEJQXr",
  "key29": "34KPZ4JxTPwSU6zBMMbhDVAcRKMuzzWtbaG1wdSsUq8XYEoM36qnEgqcZtQmyqKCFa1o3SzpXyqDhUZJHZwfMzYn",
  "key30": "5HJDUXgJkyKXBrqiBcL7C8Nrsw5UMNZ8RnXn6x7Lh2LZwDHeyyUwihQwugeoA4PaYcwjBTuGtWhuFdaKTGebS4K2",
  "key31": "45DZYGMJDscgiFA9UcbCExsPps2vTzJkWat8PBzs26RXGMAYVXkq7ju3jy9pxVVNCUR2ry5uQ5ASiZYLc78nLC3Z",
  "key32": "67KvVzxPCPrizA9XG97dqUoakttxyMEKdofRwxCVD9ap7Ho9MjbXYNs7JTtxwnbFvNUfoATQ3z1f8q2KQJRCXkqG",
  "key33": "41qYdMoe3RQ3orNnigRAJRzAFs8ZPAkcMbteMAKwMB1omySVArGKPDvueQCV7YDA7JZAFP6qkLPAF4qW1JHmVQfq",
  "key34": "3SRptVXwJAgYFSwfmGyq2ptBopdufzTBCFSLDUHXm74mhQwKoTDJhLSBPn6fyKdr7ZWs8QQfZSQ9e9GdsBWGYjRb",
  "key35": "5RpVmumhM7wkbuLY2q5TKmnYmXR23EPJeNXYxDxFq6PW6xos8h6qdcG7b4Kg13mVe8826E7TUqBAePkTiTYYPs3B",
  "key36": "2KQAirZxSzFZc8yoRoxQkSR8RzJaCV7mVyny529gBRyieHoX6nUg83M311q5oiSGGNWX2tvuDzdMcCE85QZS9T9w",
  "key37": "4o3S7fvKRDYxN5bPHtf4tyL8pHuq6mBqKPidnfEMGcHs8quqWpUqVKE33zZFTMyNSfFyA6kNafvBVyQG4TQCWaXP",
  "key38": "5UfAiMkFVDSykfkwFKNjCHkdsmWWRBH9hWeazHf3E5k3nVyPfiXVCxwdGRYreFkfYBfVaYG17yHqVjYSKpLkrgbF",
  "key39": "5Yfh1nHH4RjnWu61wp1SGYZzJSLCL41KkDTX4VDbspdjiNmHSMczNueBEfSueJ1PuqvjuQxtHGN8AyqLm7k7ReyA",
  "key40": "5UZF6EAj4daqGkb1crnpyAaGcHkG2aFaFxyg43MPwvrgdx8XypCDtsYxo4FXcz34GnHGErDnBMuAexkMSqbi8Lf2",
  "key41": "2TPFxG2WSt5Hs2H8oGb3ZUCv4eFoBTyZ4KJ61wiMJWuusqpukEi28C42KUCADJJe8Meaoyjvmwtghfq52h3xkwAA",
  "key42": "5B53pyH73mzjArdvb8EtXXwQcw2HKXbozaEcZQR8ykRU2dsEenoyZ4Fm4CuHYmFw8fBUzbsm8mFBuSGYmYtw1J3D",
  "key43": "2VCEGSSh11jQKAhroZPkuaHYb3L9WfNYeFMrwDwUhhLanNdDPSDbXeZBq9wveKbHhUBCSLVZeCdvfyZtBZWmpKtg",
  "key44": "5boZPHHgfsymtEuA1raMUFb8a8h94SSQ6KWByainMvNm8Y7Qsg3Af7k49nv8suNcxdxdqmZ6PRTAiebkxZGaWCqr",
  "key45": "3VVCtPciNiVarXNr5NQNBpoVfmJFMQ1uuqmPR1YSB8pWo9KosCt97kHUPPf94TWfkp145BXX9zqqNpTCwDaw7rCc",
  "key46": "3ZzCqwCnKtMmpiUVevBf4Kqk5fyQDj6LD3MH6qNqCz6QsAHSW8E4nVEMkyfKstYBGQsxKoXP2EZTMg693YyQcJWD",
  "key47": "4b9fjihag6o4keemLTKH7QHpLFTjdt3tzVJSHcBPeLkckkmiKGsLsxriXQTvbhri9vrkDtpLPbNwmoq6kzFNy3wq",
  "key48": "5bY6re1RjEwKQmcnWmV1yDsuwpMDtFvkvym7KtyVym4Weij44gyzSNNNEBis77MDYKQWW8A78sAEahTf4K3VSEYs"
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
