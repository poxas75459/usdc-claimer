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
    "ExEt6yPd8HrS74g9hv6BF9KT7yRaqLBCmoXbpX2Hyx1ZANqsJQZAGs3S9rNqXNt2rMoYhz1ABoyXDfUHACpF2ME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvW5NhHQLcrrojjMXxt8XGrmXNUZyoasNkWjBUKT2sE5XXvVenzMi6JSJkxAxBQCHtWsSnoZB9booCBqeuj66e3",
  "key1": "D21aiYZC74S7XFiWw7W4ZFs1vkAvqzujeUfoNB1fKg77oKZqjPdaERCuNHgH2mcAx7aUT7mL4d15qa8RGYM7EpC",
  "key2": "54iNdTzfFaVDGc6FUGbQExZcDKyBHHX3XNYziw1KMHibZ8RYgp9W7oQP2koDZfwTTMN4PAwFLDsKyTeyzVg8qLrY",
  "key3": "3GXRWofqMpinDuahyUxDFZonrxqrZfPMQv4JuR6Md46X6GofZX6yLnn8C6p9mbbp96RhJ1SiNzpGdKJ5d9qmUmde",
  "key4": "RqUfdBYkoKxhyvhJ9yzawc9JET4RsUudDpY9S1D8UmKowrhcTXpwtaqpVNL1qu2FX32arkLP3eE4HQyp5gq3WSV",
  "key5": "574KkfNuwXdkHPanFJfSBWccTJnMuGjjJfWkJ1uoNgvoK62GVS5TTL5nGFd2tjpFxKnsCoFNi5PuGpxqdMhupgHo",
  "key6": "osTaidjAaiAcFhDAB6DHq7q4QPiEg5mdbLh6cDXUCsihAB5sBByWrgPa1wjjzMYHjGW3xEq1pKbgv8C8fTMr313",
  "key7": "2J8UxxFHbSsfqafVyumJsGJCmfS43rxAJq4CS9jrNjZiU7mCA3usQqjr46UGZ2kh9qvPVzpRJmfA3obqT985CF1v",
  "key8": "4JXpiKzYFMA9BjpG9LMu7ydNwfVJmPq8ZVDrs1k4Gm9rRmQTkyQCCEoiccrdBcvmtvtQDNjsjTgyKK7iLbT3bsdk",
  "key9": "kH4QhogqhX4uPiERsHW2DC7eUWk1y5GtGekLE8szsbpWAz11RzakmE6tCXrbDdfjdtFV2mmfKxph1mWM2nXzvPh",
  "key10": "23B2AkpsgAom2X5hky3Y7xJgHrXCwu8zwSyjH4S4bx5Bf8oXE35xhk3RUvmbdspqdtBwafjrms5Wkw5hheGBLVR1",
  "key11": "2Zc3tGV1PTpqGLpgyc5DPZHH9SnguVxicXvgXHgCmvGaSaz8cQAwxLHd9gC92AS63t6cLsW7BVgSSEb7NR3sKXHz",
  "key12": "4owipogQFaGZTrXpRrD1VWAKRxgBDTRdf43e1cTvWv3RZNPpRAuqnQymR6a9DdBUsJz41AykKdvovtHdKQKnHJ44",
  "key13": "33JP2gfgSBN9UF9p9zdC7x71yjFQ4n9cujLDPPDaGseUZXRAohdM7XZMS8MhGBkyDe1gSJsBe7h1G6cZ3SKsn2ma",
  "key14": "3fDbY6vXhAAnLGwTbmBF7uSyLhu9FnVch5mxf88cCoj7E9TvCK58MVCXcNgKxUabUxwZVk3a8rwGuBEbd7oiw8WT",
  "key15": "23z88coysQNSjF2d5jNyHQxYQbs2HHQvyPBW7RtNhrjtTMxrBQxEfnGPMcDG1KUmNJbExM956s1yjFi2jT7HsuLb",
  "key16": "3zfsF6e1CLXC7S22uJ77aM1PTW8uTv3MLqhjcvMXkyVFyN5BUdE3xq1bxrmXqdsdCCJgXEsZHAQjA32b2oKtAzMS",
  "key17": "3SwrdYywYUDVcGBag7EgvYUZfZ7nmyAzhjaPu5beQ94LS51NsyBu3NxEaUh1ssvnKhQvWwYLhPqKZj9Q1GZmS536",
  "key18": "2qKvedpukm4ibMJwiwiyCpU6QwLXn1BWDA7GHVKuPHVnnRsvDzMW8K3uh8KZM3kbWjPdYqqneyfVnw8FoN4XwFjQ",
  "key19": "4gRWVcajSxmPM4i3v127vbhYt6ia7zidS89Rn89M7zamtjrNQLowYUPs1dsvZhdkWPta5a7t2mqPwywopdiyj4EM",
  "key20": "3s71Ybj1mrBmGqDHVWUJSXwwihfxkir57kZmwhFqb1NvERUrp7FBboHuokQzoPwEy3AWmnKZUJp2yVR4iF5RHbed",
  "key21": "3hjNm3FnNN5Z9KCqFLSkBZ1VzBVbiwuqcnECdjtKre2rL2DLfk1BeSw6WDKPoB69Pf2HXCtpU5mx9MY9AFGK6FSw",
  "key22": "5V1XnEzggSEtT8JDrRt7ccWoK3kvs817DXMy9d2sbZeWwmGFsSFbSwgMxiVXMANMQJSTG8i4LC8fDe9fXiGU6GVS",
  "key23": "4Mf8A6R6U9ogV3VapcYiksgQ5iLX1Ky6ZgeB5YMXYKuor4QB9gV6kHD92WifS7Db7RzPqvLRHt39i5N2kVZ85go7",
  "key24": "3DQ19fNbLcNmUbTUmuRMXTR6LmyM6oLY21bFJ9BjEJjtEnBJrpAK65tcmS97kwdGGrawm1WustowUErECU7ag9g1",
  "key25": "3KxSpHSn1XL48wEkRBL6nCEqXtiggd1MWboEyhbG6ahYfAzkFhRrd8qDoq4PZoW8oayUsHAUcXLN3zds9GJB8aep",
  "key26": "5a77cshWAujujaovFxLxXou5tfadpLhXWuGM74VwJjc1L9D3jY4gQxMBSDmmVCxVDbKvvmYL6MHrLDWBUnE59aM5",
  "key27": "2ebvztw8LueQfKB5itrNNrxpoCLQzC9wxsuPBvLtFD3m6mdu7v8d6L5HowavdaKvxwAtSKS27jmYz1kJFqXM7QwU",
  "key28": "4SSpiW74YqkE95dHkJkWmXYkeLd2usSeTiNSJ7nDz1m556t7YAbVUnt43Lyw7pw6BWZQQmrQLniugHAQF7gBeTqi",
  "key29": "oNdc4Xgq8zH7vEHW4yMXc8P78YpkSXLdGmJRM3pGaKeaPCNxeGAdc1BEtEKGLq5dFABu35r5vVMY3MiKEZQ9A5k",
  "key30": "Yja4y8ncQ4ErQ2qgXG3uSY1tt6TSQzr1xVHZxR5AB6vnqSmJqZs2zzP2CmGV1sfkKGWneAV9kifZMx4nFmS4h2r",
  "key31": "2z1g5Z82DwhmDURwBbxdWR5eP6cvURxXGFNE6fguQjUEAoQZ87FdNLr6xRKJCTHpUQhdmKrq7ZTDUaCwwFy91piZ",
  "key32": "38HrShQ9pDyXw5dieSZ2q7DZ9UDD8UZe3oznhJVymJndWtR5DnNUxL9DS7HEbXtchiwjQQv6HDM8S6r1fh5muxz4",
  "key33": "4q8q5Ecb9e6Ec1fr7sZjJmFQUgc5aJ4yX2rcQVzk4mhFfjugDaJvBco2ngU86Z8iV2szdiUmDkJHoEzdhGgDAcVS",
  "key34": "2xqkRbYTKgPu4TCQ6k8EoHGbJL6UsnJd25iK2pPXRkgsFRSEzmRa5KvhMvbqkTJ8v75mWgAnGmCtcsqFG6D5E2hy",
  "key35": "5N4GBBGY9wkHSnnHMYc861xQ7Wu9dakLK3Yj8yxJTLirAgAoVF3AennCLxVSB7iBzNoEnZAPVcgH2gXqpVexjCG4",
  "key36": "kHzPAsSKVfMpwu2wigCzTCg5ktBki4RzsveVJJ85cVyr2gqJHVC6AGvUY8snF4vwxKtK2qxqem9zrdGhqcfciX8",
  "key37": "5eRDCnpU3t7p3Jgjnc2RZTWknvtKmP6Wg8RD65tEqyVq5my2kYdh1TrjLgr8SmDNnRiC7GqzqRunCLvyTap9EqG2",
  "key38": "2jhahGt2v4RTs3cUrscKz8585nSX3oVGVWx4sdsuF7gFo3eM1SsYxmzudL5SwpTC3GmMMPeeqfNJEnkMzuBaLWhM",
  "key39": "8bmCeY24wTSSQbtMFuayvqih43Ma8KYg4BKxUYu2Ue93tqWi519sDeox1QfrV85PFmJ9DQbjB4bxe2EtiAmDaom",
  "key40": "2izaHSofErYdrW73cA9ieCx7SfNoxYZi78nJ7uuEQGFi1YuNU2X1gF8Pb1GtFaFafB5GxefbRbkdbMWSXJoMCZoF",
  "key41": "3HL5nNWM8AyPdSWyKWK4fKZaCaQv3Ev3rGBGWgNpoYGF43BvnVyXjxe34gNjwpqu3bZTFhDTNJGotgi5DLxH6o4W",
  "key42": "2WDTLscSvQXeYXdreGMao3qdKqtSCWLvcFWUkAEnTGbXVdsmHzQTC9sSc4VcqjMkWTrFhxzDDCvHeXCmkEBiZfJJ",
  "key43": "3bgrLY9XsuKDqaWgG3rJRcVa2jpC4wFkA7wDHh3FrifmymUNVTCMi6BbnRm62qbwjmYzASmJf141Ac75GsL7qkV8",
  "key44": "2wJYzF6WyKim2FKh2KwoSmZ9vVnp6XxSsv1SmnHZsnkFH9uDkk3s42r33uicxmJ5V4LpuNMe8KXRPTDeCB9LFCMS",
  "key45": "4TU5fBzdCw8PLPBCnmZDzTKw2me4RxW8FSfQBm3e7RWZFj8VjhsTkMxLFV2gu8wVMc3bmcfF5SHEzqXeBh7fVq4A",
  "key46": "v9w8kGyXD2JAdmjS9UxHK6TvDkQZjcHSS5HJ7x9tu8YUVMdesQw1gmQyGSokZAHgjsn3tayeDc6TnbjxjmPFTAi",
  "key47": "5rwyuTTCmHihQbM9pxgRTLVSEAoCAPzD71LMQ5RgGA4Y1Fcvfgqa5XaBBxBpQgNDbFbga82B8aM1o3GJgPKMyWm8",
  "key48": "29QCxxveXvHAsMkvKBsahqS1sf9QLaLr1Na9T7NpJVbv8M3uHjAowgUcaPTwoadWRF6S9kv4XcN7w6HBXf6z7NoY"
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
