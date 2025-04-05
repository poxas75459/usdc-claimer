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
    "Njvzkq9Zx5NFQJhyU6b8tCfLskmwYAAG421Ghf7UA6RTpcvUpzrFzZu3RawFSYc9zmrirBx5aJdGgUAn6hR7G7T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54RXxGj21H5GuDGC9BCZLpoKNeeFzHTN2wRyiYrAKBixbwRkh2RUJj8xJhNBUg3s1Q5B4xbqZmJXJ8s5jVYX8xxP",
  "key1": "63PhpGwMPFEjth5UtQgJZWtNxkxQE2SVZ7CRSA5g5qxsLNvcvWCxiRB4Lvho2Hcnas1DG6VKAEd4qdTCNNrjVmU1",
  "key2": "36eEzuiy4vbSfbbPEaJatGsBpDmmnjMziBBZS3sXoPT2gqDBbAi7XsyV8jyaVLWNZUn2eohJ9dSm4XYdboa3b4ef",
  "key3": "57jWic1wL5NUbGiiPe4u6SHm5es6oHx3aDYsAYK7fkpbZrypcxy6KvYN2TiuXRPQtwoz2sUTg1xS7AqCt3aQ3gAW",
  "key4": "2fNnTB8oe2ExtaYRrCWk4DAfV48ZPL5Mwev6XDhSzwBBd7QtULmyNU2PT9J8RVDiFSsBhhJarghBja5mhg8Aeb7L",
  "key5": "4qwNdnMVKd5maEvutTCfzdYkEFyKXSbRdmR7MpSzTfcfKgBepsJo93LAWAYYGErFG7xRKp4LCDQN82QcwqNhKbdm",
  "key6": "2LucW21yquSt3c38u4j9inWnEdK4ps1rM5NPpqmcUnyk6dtMhZuG7uztAxjKddugMbF8sbFuFcUqXHGWEyEHAbMe",
  "key7": "5rZUf6yfzJL6EQbk2vKC9GhGhuxUShiR1cpxp2sbTQLmpYMB7TBvVjeQ7n8bNmMH9oezmAm8UBm8UDZAXQmJxVfT",
  "key8": "5zAJ5BNYfpzXQ6iaJ44VZzHefQBKjemAcc9cJo3sJQFhFF1vK2UfTBEPn7sw8vjDCq8VXU9K276HW1iWsaT3a9eW",
  "key9": "4KMguGYwTDySBXJNCfWD2ynP8suT4Ex8zmetjFAKA3URkAkY4CpdCcftekc9fe3FbEE3L8f2kMsP6dMYmgProeue",
  "key10": "UXJaiEm9LTaAAm3CMqAb2wG2E21m4duaKjXQQwsm2oRin25nyWod1AvpBfXUJnKsK3UE5rCiSmy9n3CtWkr9Mz8",
  "key11": "524zRNkmExsRCBQdWEHmBmWFRcRXNHeYTaijpgqK4CXHA9a1phCcV72Ln3axyTbfaK5Qeo2ygMQt3WWC8h47GvmZ",
  "key12": "5WLd11BYfGk7tJLs1TPW7fr93nYHDFxXyWvX29JturQJXK1QrzUbjtEaVWAckFVGTYFccUamLgE3mZQFLnVHdokM",
  "key13": "3e2Um9or29znACA6fCVfATwm48qmfY3Wk9fRctPg6x6jR2JDn6UosbLevLMPu8d63U3dgdKmH1M6NrrgrErZ9NsY",
  "key14": "ga91qEg9ByGBsWYB7AeH77uY3P5QhuQxYnyowGf3tgekjwYWx4ErombuLhhasFFCeDPzdGmVeUqE8K7nQhmV5YD",
  "key15": "454rCw1zfUKQj3qLnDPQ9kGtc4cxQZu2VdQfwaGPNEDSiAqpuUx99KU754ygFzTZ7uRwsZhuhwWWQpftBc89S321",
  "key16": "2oR5HWNDNGafuo3U8nRcz1oqrfxEKo23htVpXC7rrMAtiiAqkP5i9r874V6xYhridH9B5FDpsnsHrui4zdthHPYd",
  "key17": "4ascGDUSeNpmSSHhfqPxAcz6KgUc3bvhkTZNCGcJyHJp6R5oSa4J27kK5h3ZzPE5sxsrne89AhJN5P7MLEZuZUQe",
  "key18": "2sdSJJhui9m1jhUQP8Eme7NMQfJwCzVHxowfGzoxk3raJVixP3rPgBvYSDsPtwymVWYngRZ8mKygzfaPsh991iM2",
  "key19": "2ZqMtUifFm8AE7fHzACXzVVXbkfGrFSoaePf5wjpzg5NEbTvcQpWmzent3JD8Ee2J5rhZbuPGVS7mkbC6JgUfdAm",
  "key20": "2kzk9Rzr2ij3SQwGVb49LLNoJKo7pfQjvpNyWgD2RvZ6KzbSyyQ72F6YmnNuuuQVfCMA2uv6oieUEzEDxeEcgAbs",
  "key21": "7dGj8xeZ26Ek6Vk7eXyA9K5T2aBQP2k3TqdbGwxPQMZAaZWnL1RUab5PMH19daw3aoUYro7BSn1iPWcJnZYefG3",
  "key22": "2oyge6UHeSdkuNRCrqJx2KSXWtNJZiDh6n2XDVUbDsWg5TuMhAw4nD5qwJwMnbmZm7b38AckQjT4T9ShHSvXPjwr",
  "key23": "54ySFxNHwwPKDF3r88KQVN6tVcnWsF6dKtar9GgAjhDVy6rwrygpDFkEhqjLeanoN31fKjTMqyQJddHuuMNzWFkH",
  "key24": "2nsANYz2aGv71FiA67wtkpsr2sMrgVRm1bEhjPGuDnAdeaednYfDasjKxu9jgfW5HUS6dATyJcMTHE5MTa1EAdpu",
  "key25": "3QjhbVrwwMaZyBKurhz9KQQUxVTL3WP51tvsDefa417KcL3kgNJRf1T7JaXEWdSEH6ZJzHmEEvtcYpfDP293sgoo",
  "key26": "46sDB1vnsEDNUThEUopqR8zvTaZMEVnV6PG6hZHhFHXJHjRgLXi2wxr4gQSsYiLwsNB93TJXU3rdUhHauVuCWoeE",
  "key27": "46UXH373xvnE2ECKwkfKwtFk1GALypBW6ToJa6ycxLTukqtpQFheDMsnYtPYvjuV2is179JatJa31FBcs8sqF7gZ",
  "key28": "3nunraDik9b8UMHdKNaiQrUWNPm2We2DPaiZCvSun4Ch8QJ9Pb6YpxGW9Jc9cSfWGXDhR17dWFJDxKcHo4X1mkj1",
  "key29": "RJJqcQ969iwdF5Sv9rmUD3UuRJumW2Z33v8HKC7SgMphtzeFUfXSopaZB7WCJthkJpKE42nU6K2efcfxh4x4EEt",
  "key30": "5YsALnnSQQ5r4xCWNh71di5Y9TgUsnyyUZzzZGQeQXwi94HiEM7kKFwub8cZjkGmsz2LKwes96y1Y9LtX3bEynzj",
  "key31": "58JgJHp6PLAkCL3b86u6yKotPkdkotUj4hVz5GFcZUMSAdBXaGmmRqrivJDVL4oeA5dxstFjwLu4MsSLiDGgqcfB",
  "key32": "25tnBDMvckLxgSYwF3vcnfpHGhqhVs8XMAqBjkf16Thx2TczBQWEHuCSbePZi19JRNnhqvU4XBMEzwvqoUo3DF1g",
  "key33": "2eaV5syn8oF4NR8XmZQJ19zfe2cbeqPphC4HRZuGcwAEsCULxeAty6VZvFxXZ3oaVnjwXrh4D4CdUgkfPC3cg5BY",
  "key34": "5nV3sU2HTkMvF89oXYtKoqokL7Q7QVzoTfL1EjFsdrxBHDNLCzcWhVNLZLHhTdxuAHjnPjHNoaY31FePQAhAFQCf",
  "key35": "5izJ9M852VS4KVcjhs7QRTkptPPvBhTjM9XUNbRwNhvSSZ5NNLnd7w95HPFisTaw4JNuPjqACKDxghXoCZSH3MeV",
  "key36": "5MefiivZCssR4x5MfkUscP3YvRYmwkSDAYWh3TvhiiSpKiBzHqGPtnutbd7N9BQ4aYhokaQUj1BSBswRRuYSMgy2",
  "key37": "3aYsU5iRARqxPvTgUAqAyg1mUPsaXzrU89ffp829VqSxySej6UraimLTE2pxLYNRrcadLG12yNFGgZzjEYp66D6f",
  "key38": "3JUUMoJGsgEeFbSXeY1a5sSP5d24LeEPrvHjzXdtMmcKxMmSHYMPUQwCWsTi7JjGrfykqvoMAKBrFxPiuHv5UXoL",
  "key39": "3PAbAYxd1bor5nFswMfWc2XkVbQuvLhknGup6QLB8BhniFgxSofuVrgcUQRc8cVz9LSsj65eguQSxZPwomykg7Gc",
  "key40": "kqbm2qVbw95fZLjJH1XG8TSpahp7u7Cu1ThYmP8rFriRANdqq2NuEggJAEbroBJ8zMx7MZoPwkJX2PaJ3p1XmDy",
  "key41": "278J6cK7bLhrrggVrHYJsjhTjFGfAnLUMkJz4drzmQXfMAPhcPs3yCBjL7QmyooLVkg22cbME9aG59iyDBW6k1Hz",
  "key42": "2AwuSMAKpyxniKsDvA5kU2ujfs4w73JwQ6cNyxqUa8KGKaxCSR1BfEms9AJgCtK5vp95qHKGZtzDJHNvpJk9hwnY",
  "key43": "5Wh2wJvCwCWtpa5oFCxTBQCZs8VWd4HVJ2ezYsXts1Ri9dW5WZxukiuAM1RL32snaQQ42NP6gTeV5sYFUXkp1Wh8"
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
