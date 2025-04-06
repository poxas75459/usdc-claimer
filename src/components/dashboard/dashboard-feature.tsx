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
    "4jxM8unAA8UufWDbHytVxCmqA9cRzXuNgtSVtrGwnm2YkGFYxbkVVn3vxCF3fTSEjUvLaJcpnYjjjNsnDnyU6hqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vcigQCs96zadJAyW8qUWVedCoXooqzJURsv3mG98qoG9RFtQrUTzRHVgts4REGacfSL4EQKCqWnCK6FYj4zuERj",
  "key1": "3MracWic67tYRaDykFYtUMXE1meS866kQceMRrdfVykzpP1pEeZMvqmhP9oMzYRUrCDiP2z2quv8g2zrEKt1fKWx",
  "key2": "3fBvj3LFpfqnfjbUfV21zqTiSDD6sJr2fmd8Dab5vWi5MNGRfNjvfuS98RVDnjHaEvFedx8D1CQhsFSGpEdS7KHi",
  "key3": "63UG2gPfrYgFriLqwyZNhoeENUFHLefXfg8AXmskDjeGeDLTgpAahwPQi8pjCgZNouAEF3xyhQpmgt9vF481gUvA",
  "key4": "23qb3ZcJ5p1CmbEVW8T6qAh5Dg5EoMZWgLPCE4Mjf3GhZuQ8wyQasfvJyHgRjsdDEUGvTpeci6HnnGNZsXCDRsDq",
  "key5": "5DmZZv5dzBXZCjGzz8MUKe7oTrncr5PppG5V36M5bcpBmX1jiPJqiKT3APjuWb6JrBhpkXLnpHTSWiWVSCxUpbhT",
  "key6": "27uWceLmfSdEbqKPvQHufzd6K5kBrZHrQUaFHSUJb8Q62c6X8VzT99J6Ev3YJUuQiKrHXxCBS2cDyYZTzzCXDTqn",
  "key7": "49hecsZs1yfF6FyNDnD2Vo6q4nN1wNgiTeTreqdvFEUd278EejFDfobYP5CD9eKmZUrLYM9q8LHBEykcnG27MBip",
  "key8": "4avsSogwNdgA2sJuWrzNU4xrFWJN9fgJqKPxku998DH2XNwjWSB9dqDWrJ2hew6Laf3BUBPKHXnynrmVkBaRHpEX",
  "key9": "4nAbJ9e8MXKZRHyKeT8qqWU5s6TuBV5CjxmwvQbquok9mK2XqwAHn7sWfdmsiKky9f4NP5TPYWFWcnwMKxpBJZ8d",
  "key10": "2BVqYYq3YySQQacXtj2yKLx6QfDGz8aFUpgzsbpeTUV7MTc79btc47NkxiucmBumySx6ga92bXJ1ZqpufAsCjYgt",
  "key11": "2p4RogkkfDK6LS6o7LrPnQedgEdsM4Ptt2iLihTboS1fy53vbGnFX1tw1uos8214fZm9sUZohi4NYBz67gAhtJKD",
  "key12": "2DyMF5xfMmMEpMPGkYvjn6FCTWaCi8MMqhDiMHdx4uAm3zA2LrYreSDcGPVsSbuZJs4tyqvpXqzvtTpVEr9HdP7M",
  "key13": "4xrvT6Mpj3Ys4tZHjCMEeSz2CvwcKmCcQkX123R3GaEAaahd7CRGJWQ9Zczm6eZbjPBBeJ2RFygpPwSGr8fM7XNN",
  "key14": "3B8WQHtGR9vG76VmfzzxHDV56fjgm9KkK9URcGgm4zSJczHEDkLdES7hPHP43FuwixKAPRqt828CPFBNf3D2D1V3",
  "key15": "5MTEWqUfi9y59BPRdS4jVXgSxZDQZksDdbjM2s9g2kyxjpr74ik4fJdC5MGSx9n2J5oANiyn4qPsbtDfDzBnEmQb",
  "key16": "288nVNrRXsoZAFUp3GSXzTR9tZWHiXUHC6oqwSzJaZCbRZ3BmmFdWhtNuQGYre3xWoZ9qYtepuewkKYFNaPTr9U6",
  "key17": "5H2QJr2CrX4A7cgtBWEzR8zwdyHkxaXnFLGH1h5HjdnwyfqHypd1uzxe2H3i4XjwaiZgz2x7rLqtJJ6zgJ3bhQV5",
  "key18": "4AH8KGoYqGTdkeWXYPMHpyPP3YatTrPXVZod4HkjKge4ZQPKiV4cAnEwtkaHgwihaWdkAhjcR9fZsE5TRCjNwZYi",
  "key19": "3TWTv6H16meC5oSSP9bxjsRGBvoYVXCP5LxEZugRhP4rGzbLqBZCENScqV7WgTKEk38hnnDx2TV16VbytnWvBJ3d",
  "key20": "5TD5svArqYs83rciqcPUpcSeZjU5aS18r5def1onFLCpb4y3cBCr3rcqwP2X4XMx4jVu61SG4rSYC5bWCponCjf8",
  "key21": "66DeDcoy51eiN5Y25UqysSwW4thHQcg1k5WhGV8JyWDpqBwWDnPuWBkxt871gSY7pfb2QbSdw1NyPecexPmyR7H4",
  "key22": "47Rs8VaJsQzDscmzoLjpMFLyxqdZ8g24JiA7DgfNzTNZGq3cfuQRnusfrLqQnSTQRgdk5uutBFaZkjAmrJomo77c",
  "key23": "4Rs3EeEzPPiVtfsvkZG3XcEpBitUQS713oFQs4dAeSNQAeDqUeZ8hk5iS64zdCuQSyAk48wgyMFjWwTaCxVbe6Xd",
  "key24": "26dHGn4CvuCWcYzSL5E7gz7EHPGm9J8S6ymjzHC8QZkJGDPhFEcTBAi9yX3T2C8s7N5syMQfX7ML5sTY8Pp8jFJW",
  "key25": "5q9urjANfNBbNj1vdiFwEhbHMvKUKiFQnBgBRo7f9R9vTURBpJJVaajSVijxqcvYFXQZMvfJhWpGxuosYGW4J2wS",
  "key26": "5AXyyDx4Qb7xvQwVYJb9W3zY24rQxA57n3i13KazkoHVMpg6oCaWMT2R76oDjzJ1xnU5s4sbDPgij5b3WiVnjH7M",
  "key27": "4veQuvebwdwS62wXzRe3pUgczDAhPQEVpbyXFHFjWPVZ8ESJpRQaqgDigVqykYWJZPDThfA8P4oCnQj8ZVjDH1ad",
  "key28": "4C2re9fztUyzz9YD14DxUUeXBgf4nWs8bUHJb5corUVpXDePKj9Z2TfP8TMGZMpgoXA3LhbD3V8M5XhNJozG89oQ",
  "key29": "3SoofJ5eKG16EdHsn79bm3njqiADo7HD1iL4oy5xDepCSef87dqntyMynxajT4JqJNbVepoSdWugqV2nmqyw4nLP",
  "key30": "2stS5QwoavmeY3QmBtMxbRZT3VcbarwZqAxydcxuyzvaiMKiGwXZJJCbfg1GFwVupgGnZYLp1Ht5hydEMHEQ5BBS",
  "key31": "Dj7VQUDDhQbPzREZJwZq6jevaAWJ3ugj8C8YYfCtKUfqgUcwepMnHc5woeo54Q9sveaWeeTpiPMuR8yDBLLu3dt",
  "key32": "3yFbLodFPQ2j3heqzhVCVEPgcqZZeswJu95Wwxw2EAoDN6AeruGWeRnDMfJo4D5Pd6HLWsWwKMj1fV9ZPMEkdhSp",
  "key33": "22khh1ZJSN7nLa1Xo9eWWcjxp6nW4aDMncr8XQrLU4zLTFyWWpkiqygJb5geVeHVhT6W4NJNrVMFmzDYTi8jsD9t",
  "key34": "2wv33RrhZCokUnXgQrxq3zLjoE1aMRgPSfZijWu8pw2bPkTUaycUpbjL96mGWYqv8sFeE8H9XdHCkZkkRBg7Ce4Z",
  "key35": "4SPCMQ1X232vDAxfPKbJ8Z1Sezb29Rj8EE34fSpdL5rBrsTJ8h23y439eyBMPvbYVpzR5i8AqjPSWbMtzNqyAKLA",
  "key36": "yUxn7xnhjtLrghuwWD77fqpGF8LnLBofRhKUPUez5La2DaeYVrPwUyzahgAQNo78RoCkP9eNWGbp5QaCnSC7WqN",
  "key37": "5oW2y4DHcREhX9fFra4Lhvp5gEwZ4Csz5Sdp85A8E3X6KDvgqQnV1RfCN4hVC4LEnjGkVVus4qtughJp8FnshD9g",
  "key38": "dStFi4gj2RgmiWY6YiEo4GgerxKzHggnAvEB1YriDAdymBoM5rFUGfdgcfWnsSeTJ6DFFoWTjckeLW58fL4Rgnf",
  "key39": "59UMx9KFuqKACRxU8sJNf1HWYXyTZNVsiYobnWD8GK3vFSs2XQ5AUbqb9CxwpSgMrFJYqPofS8w5KXQZ7V1ALDMc",
  "key40": "4hNV9jdDWB17doHL6Y94hqdhGXftGFpipbi42gzBbz2v6LdaJs1n8og4dGLBFJCZG6RyzMQDz3BrkGBwomc2Vn7C",
  "key41": "4aasnMHm9Y8xrhoJDxKH58KvQfTgTHW4qPpX9o7YYkKHDGn1YUFwgfa81iU4i9ips6RuYAsTpMmAhRtVXvCvxyg"
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
