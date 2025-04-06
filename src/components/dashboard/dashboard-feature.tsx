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
    "WPcKMDBRZBsa4yi3csxYRykjG6Z4ZzxPHL6ynHA8txB9zVGxx4Q9JY7cS4RBwNt5w4TRapsxGaSNoubYSoHVLe7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PaTSrjWkyXMqhEzyaP9R8UvTrBeM2KH7DhPnVfCpQrdGF1Tzb1YrFjb2gjE5eGiCutKq75q56XJZbvyjtUt45pq",
  "key1": "3Htqokw7xcxBNnxKJBYqBBaRnuosRQ8bwNUsWiL5agUkKqwca3Fk6q5j9XkLUahFkjnCTZL8ttwfHoCvefWGJYbA",
  "key2": "2atETe6Y1Kkc6BM8CLLNdmMFkr94FK31zH9t9MHjbhV5c2Vyzo2c37w6EqkMFfQESstRXUbG4ybuS9Gxb5AcCfJG",
  "key3": "GsyvtGJ1cSqaVP4H6pK5gYpqP4WSaZr9JkoQ8meZUz7b1ir2vj39ktN1r1x7aso69SsUWMiu71bkY9YcFB5sWFS",
  "key4": "2QfTctrugvkXmTnarQ9ngmUCgUgFHAjQ1QEkLEjza22zvyPuso2QnEi3GCuofjdHK71NwUa7kMrfmoq19Gmr6Cd4",
  "key5": "fSujFtAkbvUpHeP5EBLw9cugAYQPpK9kHwseWAynXie8gUMzFbkB3K9qum5hSyh8c679bzo8ENctsARtCnvBYhN",
  "key6": "27fDWJLrYeZ645MazHReWaBvm2eSzbpmMrn9hu6QXX72wZEQwszDBDFqCGP6LgzVRukX927awrvTdrTMtarwoo3s",
  "key7": "4Q5eQgTaP1KmT8Pnfgc2AHRhk7DnM1GoK1y1uTQdgekT5W35tdUfyrDRUfzq2jZdxAmgXSc6BUpV5KNAFvjHEde6",
  "key8": "4H9BHeY3h5kA5dwFa9yAH55bBcQEiQ1GqgucgSZ7iFEdRjFFkQvVhyTY2itAgxxcWmQhvwmHn7iR5iW7DUHQkHXG",
  "key9": "2Lb7oUCKNymxoXD89GnUDQEretCrFeDZ7Z3x4pWkss81kpdFmFw8cV9W5HNX9DEvcMYhL5C62KWWFZUyw9wE59UC",
  "key10": "5WFmsegPLRok58HxAF6Cj91UZmUkTZXA1FJbjjghwMM78Z79ki8CWCnJRT1Q3ssAjtYqhHMF7iLPpdjFzn7FniqH",
  "key11": "29BfeXiF5pWUufqrg8BMHFw6EHGwRSfKss69kCMyC6Xu86UZEEXrq5LAaQ2UQ5ZU1786UMhbCGrs4DZFpYYmdWdz",
  "key12": "2z7Gx1CQbR1JpyiVisUT7Zx9sLVajazHJNXMzC2ZFiZW4XviEKp1JrzatHUtQWq1rAUmUwnRLTysKieMZZyy4CPe",
  "key13": "3PVBBcLCtxgRAsXd83FUojGyYW5SjcrFT85AVvsDs85ruP2vH9YaPSqVpVBkanK1X8ZYZ6eVwdCWCPxjjuDpFj7m",
  "key14": "48YwUTK22bqeeU1ZHhAJeyFgHzVuQBshJ1oVkvfVZ4tESwYJZH4fkCuY4oZDF5ZrdThRHp5tK6KJGWsDgZYVf3m7",
  "key15": "2YE4Zrpe2vbsJoCjKBBgTjvCU8rYXDW91YLfUh8wni6ez2wPDA4jDf5N2tcac1r1wJGJ4btnxsKsvGjH1rLCndf2",
  "key16": "5LaJuaCiTCHza5F8gkyS8mHiZNJywpLgkrFVQCbfzPyzLMt4vZpBC3zMVmnF5HiwHWWqGMLx34yZpqr1mJJJ8ymC",
  "key17": "45YSbWvvG5poZ4QgpehidZr4H9KAgp2QHDwhJkwABZppu4PxBcT1Zy3Q3ytmYhZYyr9ECkBUCeJsaYb2jAJZTtTg",
  "key18": "3p4sSX6JnXSn7R4nxtFtA9TysHhpTioBUSZFZyrWXywoUWhkn7vp7iDmw3MCUVu7MMXijbd4vt9bbPfg8bXXXf5s",
  "key19": "LeEFb4oJdWqbyKP3hKVv26N7tUuhf3gWvGcnYxoW4CzjdXjJtkE4x5H4MpF3x38HsxiPerNZ5ePmDW3CaUfYzqf",
  "key20": "2dHK71CK7L3JCk7Y6gBwbmNGaY1QCmeK7FYuHcHtVv8ERfVf2MtBJMXThCYM2b2QKX8FH97PFAvSMqXF95ftnKRz",
  "key21": "67QtWAzjmcBM9xf2y1TmD98uoVR3Bzabs9sEUs2BMYCNnw8Dvo5SZkhJbPFSdXJpSZKjqE1LKrmV3RoB6anXRFYG",
  "key22": "1V2GN9uagRmZ5UgNLF8HWcuWHWPLnxNg4tJWLKhqQSSwov8oy4Ccmiobw1gqCKyYZt2iypF89xRk4ziCRTVseXF",
  "key23": "4MjoDX5PxR9v2AsAt6yXwDMjtii2EQBb6FLnwcP1sUH2v6PnZSogxgfpurKjnJKvpmqZpCWhm9mbr4fKGC2yvuxV",
  "key24": "G9PXmZ3HxYhS9JQGUWd3P9CZymnNskSHURTzGrPvdV1GRD6fh3wibJeA9zEgWBdEk7nj5Ng2eUtnYHNjZ23sXV1",
  "key25": "2WijZxWa4XFrmm7qTzRKoiemVwv1XcgBirjuVGAeSFQubNYVe9D6t55YVqqCJj2JJ8J4KxY9s6RL64jqfmUGeHox",
  "key26": "4f1qRtfnju77CUJt2jXicXV3ToWozvTzh5s42wQ3Qzba4SYWWpSS2AVsTa2HZDY4d1Wp5oVvZmQ6bEpigEKfeFrC",
  "key27": "SCTT9WpapwctK9HGqh8ApH8j7AUeNGRM4TzrahH6BSsTpp59fNTeQGHD6LG532wQ9VK1yXAyXdeTiWUqi7C6Mtr",
  "key28": "5TMooY4Zy2GeV5DZASUmnCscEdJADTacCJ1ZBQVeYQUCMTvn5DCupSFsuU1ZhEgdgGNGCGK7EzLDpcpHKWnFqgDr",
  "key29": "4rmuDrhfAbtSiBqCTon7CPuVZWoMoCVbonwRNPsShye1VapTGbkxyA9uDSp4VXnJKfB4GMtPjXTGvQcm72RGi5ca",
  "key30": "2ggot3Zy4SGbE5Xstfxc2n7i7mkt4AAap9NNAmFioZAr9YKz33Z7PKiETtQUMbEGSPT72ehWu4fu76CJeJCZgT23",
  "key31": "3sroQMBWcnjcZCakjwJTD1yk3VtTwGGjkzmmHiBSz8dpXT612HMxbnb7rTT852EChBimCkYAiy5Pvx6UmUtW9PGc",
  "key32": "5Z9h3DQjYfP4Dog9Z7Ur4LSqAnZxCSow4z3jDbv7FxzdUR6rNwEiBz3CD1N9SxKFyUWKkBs1qGbSdqZph5GozJxg",
  "key33": "23GgXUSBUGJQ9PZVwUTWQo7THhxgvWa6YVnfpTTjdfKqcKQV2DyZvNgW7xTYhiWNXxdC3vS3Wt4gNS9XvYaC6Y34",
  "key34": "3EKkUhtXxzr1tJRMhGjpnyUQjCG6stBuQC29LZoKuvK8fD5QtCMD8SZ5KfbJJNtDcNmAJ8WHcCLEtgALagSShVQ3",
  "key35": "29DJBXNWtiyyJjdyBJWbF1j3VGYGmB5kCRKUQbgzMfU8y4MxT5tMhDGP825XUjntpmoxrkwArJ3g3XYwsMMwdPZg",
  "key36": "57VK9oYny7fv4gEJoYPmiHmhKajfUCEe7Gok4wacNmwVowSVAJH4T57iB4J8c4RqhpF6HfcYRxWbLMrsXFbM724C",
  "key37": "2TcLcio2cnd2qWSf4CUEkbjiWtRuuMFoxCobpDxNuBmJJUu9XTE9v81oJagtwpNrgWdmAwoEJHGKtfP9y1D5W1MX",
  "key38": "66NEZoLF9PSaMniLFVeUjcmL4XnbWKwSiP8wjh1yQneD3Sodu9SpkjpF1KxLLTq7XBozdUiNbPDuKbK5cyEGausg",
  "key39": "4BjSf3HasuJQeQjwjDgxAiXEYPXttxEQ3BoEjFQ7josre5SeDvu2F3xtJJBAx6ZMX6X8w6qkdBwtzXPWkcRirW3u",
  "key40": "4RnywtVy75EjLQHx5mtDUq92ZPibftgZMCK7hHDrLS328QJT3td8fnXFcJB2Cj7CseX3YRBHhy5jEhtE8HsegY3E"
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
