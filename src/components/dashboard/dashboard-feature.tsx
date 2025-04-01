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
    "4NoRfjZbT6ABhhZNrMmwoQ76sgvcPxejrZjnzbNnn2qrFKejucg8Lh8mdRmBg7sNhndqfU9Gbf1o5fhkhjgqFveE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GjJq3pcm5GhtDQaW9RAst3Z2SZx6PzUveZhMgJC7t4JcqGkVJnyFqziiiKXyLZvL8vdxiPd74XzzVWuK3pisJ34",
  "key1": "p4f1mWoGXRF14kWYpsrSmgu3xznJnwdHmYfdJkvyNRd9qux6zj7De1F1NWac3QPXRpDdBAkBsRxGLwBoSn1oZ8Y",
  "key2": "4VZs46LFHtpRwciTwog58Fw7k1d3eEow1EzTs6ZbAc5TuNrKx4Lf7WbZYYTE3rDYSRAxA8hhzX98Ayx4vpH2TsDZ",
  "key3": "325qJ8SF83Y9AXSNdsm7N4Fbj5gPDo4oH6fzDLFSZV3oRyPw34ySJqWiYgMa8PVpsJe36kPquZueWeG4fhZetgZx",
  "key4": "xLr8wrPw6GHgN1NRwm2D43K1fVGP8p4LF2kziCE641JLMfc4T26qDcDRUyV8tNYzb4uW7EWDjavHvyTLiMpCj3d",
  "key5": "r3BrjwMVhEW2kufzkBaZ1L7FCmrEC5RTiqTaPCKVG6SQDkjcTJeXJCheaSyrvJWaAPYJc5pT8dvCmWg4aiTTWgK",
  "key6": "oeRLAX7E3KZvZ547P7iDJZR6iZg9xQWSfDnwpncdyotdssTJASJqAM9xatvsuLcCcHyXx5o9t4LiUxNq8v9qnEQ",
  "key7": "5PrXqUsxzkdvx79A1cWMgqp3eKJfYcDWYtJBWAVjsGm8yZP6Tk9gtzeQZ4UFai9thEavZMcaX7KBFggqqWRrVBxc",
  "key8": "xAL57M4oWUBT7zNyJbYDXeiTeEkCZ49DvcKCShPn4L4QhCWtLUPe6S71x7g2sykYdJV2ABUu9nkdhgkBEtLEjEi",
  "key9": "5Z2oq8TYh6LEkhwoM7rZNQwxYJJy7S3D43ps6BBHWXzaW1neeVyFEKLgTBhv6tEya6seHqZfkzrd3d2GfkmPVfQP",
  "key10": "4LGPj3mty6q8Z8AqPukn9axTkxpUMpiRqnvqhakHv1NcKoZEa3RJnfMLB5s53xff3QReSzMh6sGtVqUFEkj8jRcY",
  "key11": "2mrattsF9rDyEmvbrNxCLuqdgAtutVrARXQ9sunthU9gqsggDpL5agh7XKMD228cjpfdbPs6eXQXFXw3KmxuAFJd",
  "key12": "2dvse9uarLhhRS6W9F2P4ZF8LrzSTjRhTWtcp5YeRecxyGcF8qmT3KFHSUW9KY2gupY2WEcNePparJvGHU68fyh",
  "key13": "z6Kc66hkQwrrqLjezbGvQqdu1fRRRRoWczpjf733KMzp8jPizB3PYbqDi2E37LYYE8sozW8A21c5ae8qY7YC3Xs",
  "key14": "3vgAbf1o3NUKo5XPnULBkYq1BgdiyVgMn7KAwWCGSdsGmCDNpsi9eFuFYk1wCNwP2NN6pGYx6RSTpgyDxVqU1mhQ",
  "key15": "2UHBZG3urZjFmn2iTVWkcWAKMxtZDNQJmayvkatJERRhggZSHtba7dLjG89DebDHAixfTzwXBruNJK7jnb4y45jo",
  "key16": "27HmF9rMnVgJmB2ssniorptX4DJKu5n7dx3ZVuas87b1qhDJyWGjqUjwftkag4kMpJgiWXD2R3L4nLcAHR1QjBWY",
  "key17": "4nRbqGGfY2FNu9eva7QsnQp7AfC8uV9qr8NetUxUL1pYKGr1aYHykhoD4HvEbGats5rahyCw3J5XGb7mAqPskEes",
  "key18": "4uM6zbGJUmtr8nCBMzcPCVMesNvtCV3ykwftWXA5MCgixdnbhXN14X8HA7XajhSAYL8BtV3nKKipjAGyZsLG8sPQ",
  "key19": "4CcNYLJFPQDe3jzKeuLkfgZKL94RcTygBqvS5gHwzz7FEt2xc8BRcsieLV96KLxeWNX3VxZWfHqob5zJCpGyhQzS",
  "key20": "3EN3XQRg9MkgGoWE4Jyu3YqWJGTceUBL3PmTkgaKwLkU3e248ipU5j384XsSF9D9LktepR1zmoKYc72cz9GLwQDw",
  "key21": "3aefmBGsvUZxCfnKscoeWfAQhyHFfcbiMw9SY4SQEzCVDd8X9CCt5JXvqeBpo6HQVo7dwFzArMBjCfLCWE312MuV",
  "key22": "666URmfxzP4oRrGSaAkCZ3wnTR1vFYAfEWJzadGMQaRAupCgDLxikDJMfZizuytWcM1DsiVztKz5GcvDGg6zkyUU",
  "key23": "8XTr6tvsbr9BAdqQBKuF86DMVbJeXV9Rq1n4dUVpC4GyS3UiV5AGoqr5t7nArbJBbYmvpn68KZSixv8hjLvESaA",
  "key24": "4ndMvQydQ5uLGrcfzdFdQQ9DNvGbo9VCdacp9fzkb79sevtabBZBtQYoDGfbACtz8SBKQSZL5aQtevw1g1CoCT4D",
  "key25": "5yuFPiSs6Fx8hNNtH2HGWvLLxaAQhBbNNdbFY6U2rUw7s8Ng7naGtWm4Px3dyKZjKyrQso64XrGSz5kVewS4xVNE",
  "key26": "wHbqNUnCU6ZF3CZ1g2xVeBMvsxLGZgekQgPqPzUmBQzCouZSTZuvc6njQpyX7LiybD8yDkX49mJ75pMxWudiaLi",
  "key27": "5kTrpUJtwh9EgpXiZQGi5qPhU7U6VmqxTWgxmkq74hkGa2rURTUZm63WQsFfTLVPQFmsPY7q4DfM4feqCcuRr7u1",
  "key28": "3tPMTzX7wnPj2RF5361fJmkjon9hCRgQJCA4aXKdjDJTRntnHjGBvnk8U3NeyDq5UhXNgFkM2WHvXuc6qm5rE83Z",
  "key29": "2567QkchKZMvn6NLNQmBrgR5RjFcoWW6tY2VgkWQ3SNEG68egQu76UPPPmycPGkQ9RcdCt9d9qAM4KDQDrNkd9XV",
  "key30": "4Nz3jCKaMXwcy4URzrwq1MBWb2PXSwHfGaixx7upz4AjTMtGV1EYoeFx89L3o4BxCyNjhRiX4vUToyuYr2WyDPqV",
  "key31": "4EdDQaoK5MTYqt2TwNXgLmxPyZH9DfukhVR4RWrVQD22UiCrRcawpqcbfYAMs2ALYKbH75GYtRBxVSdY784dz9By",
  "key32": "3NZY5vA3HjzLM65XktzfVfobYuryZ34DeCNsKqfoQrCSDdp25eQJqRjMsQ3MyABUH8vH1BDEUpXVBd1LqR2BGvrS",
  "key33": "5d7oqRPPcFFdBn165zLMeHsh3EGAaqg5TqULQVn3gmKzH3Q9qyoRvk8n84nUDD6GtkRmt8TRmFSTnztR1rAPA5e9",
  "key34": "4Tzi9t9HgYvwL2ZshDKC5NZdxhcPxwpMNqUjkg49WSXNdPpEmdQUc7Y74WoT4mosPPf165ee4EkyCfoe7Au2fx7L",
  "key35": "3GvALG6trchkTD7KVdyArU4VqvzA7R4MdPvhUbM975yD6JftGBS5iKgfJn8JEcugvEeMVNh6b8HrHbgDFtge7m8M",
  "key36": "4R8h5UptXKqN6BZKoth4XwBe2Q8opa9Qiqg7137TFqbiFCb1VRk4yXFoLr55xbU9UZqmqR2apBEfptgCrsjPHybV",
  "key37": "5BDu4Tw2kR9VVa4N4xjuQGkdsRKqATQG1PjcEUoYSAh1AqEznNymsxRkxBL5pPyygKPMkBPwxUBAujdX7fJMrd6k",
  "key38": "3G387FFBzXNPsbk2iMSCpAUUDrEB6ntov4pGkN5NVUAbBN5Psk2JNziVrc9wEGm4rNrNHGySuCRrVg9G9cd5FCW1",
  "key39": "3WEA3L7QF4Ui3hpnYXa7nmfKPnqVcu3KdFCLtLpFNa7pNMJLw6ZkaYn296bEzmbiq7kspkfnxGxm2aKDuosKLpQE",
  "key40": "HH2omVtoxC3jt2Yt2a2yS9EJjBh6gJHBmURtVc2cCwiZUUqBzcCt6CXBLHMigrqHUpHEyp3uuwQ5v8EUYPNCMLU",
  "key41": "31XCiLYr9KCqUYkZzP9FkXTQBPJ2EYfirbq5Cn99HvEVRdkPbpTowbrGC27VKLkALKEARJmaZQY9Ec3TvYyfwEAx",
  "key42": "51y9ervihoSSqsMaJMRrdThwYo8f3UCZ3rhvAH14H7wtgYfjrKvfzYWcMPLiZYWksSGSWJYc5nynNXJioThYSWf2",
  "key43": "3kMLRgAHx3BM9eR4nURMC2vnJwYiMqHUTyJFsxbbN7fcMoRKpGv69LrUrBkWnFsZCSAeQQx2oMaiz36oXDgf5vto",
  "key44": "365qQEpDcoHeDzqtmGn6XCkQX2Vm95qjjPC8TGRSUu4778E7Yxkz4DckvZabo95uvJNf1NvLgW6e2pxHAKd2RpPN",
  "key45": "58g3c1uhQNGS6sQ5XVqjPfidbtL8VmDdXcShsN9DAWATyHAu6nVU4j7LVdvvkM1HQitbwnUzDjK3Y1gpCQpDss6R",
  "key46": "5pXhAEQGWCz6TwW6FNJK8mQZHqgNGGPF8UYemcvyCSvRkV92oJFET7FT5sg8TpXSkUT6gMtp74HqhaoYSf1xgyqA"
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
