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
    "39KtNbWRBAjBiQP284NdpuW7rY7ZiqinSvDN5eD1zmFnQCbsUsjm26rrDECCyKcdbUFivALtsqfoztfuKbUsYHY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n9mEZYchb4A6Z72gpH5t68YvT1qbBLKD6sodqaqHXH7hYKViPq9RbQbTudNubmtpYvCJAV7rHUfxzyXbz2xM9cP",
  "key1": "2ALrc9MLre8Afe7Qw4qY935tBcGQzPhFLzKF6nLZwzu6Fooqm5ea8BWjN6jKCTAEwyoUGttkkbPtappfnVjMUPdU",
  "key2": "f9NMLsdotchV6kgwf3F4HK6QJ1nrTguHLqxfLM6wD5ExEy37ZRzNHXzf213WJiptugfAPWZCBdeZegLPthhbbzg",
  "key3": "4kGFLEjYR7cCzfdU2r31a8788VwCdpzhBwUczH6uurQt32fyGWdfbrDb8x33EEDWTkAf57ndKJdBCpEwsLXirPNe",
  "key4": "4sXHBe7S3sb2kqrVFLMpbXNW7xxMLhQ8jEmJTauZyBZ2ptijm4ZbjKaBUtuWZ3XLhoMP3gWXfFFHWTZja7e8guNk",
  "key5": "nheaSiKJ6GCgy3hYGzHkQ44pPuJFtzUpDwF2bHkrrfMFp5rTbRXB9NARm5Qnc8GXteHnkXFBzeBcfAcAA3qo1nS",
  "key6": "4sbpNYJJMd8CUFgQcoHZEfcq4xEuyKmb4Vjh9rdvNWjn2VoBdpgV7kgY2aJo4MWajqwJJ3bhft1oAK2jogwFQ182",
  "key7": "YRwLqDrpLL5J1VJKUsDHjCEYvzfg67xMx7nUxQ5CUfhyh4EvCo77NsPV9jhMBE8VVR6rTXyoAWH5LdpfGxAorGY",
  "key8": "3aGBhwGFK6Pqek9KU1BqDNAhGhybJSH4HAM7qjEvGnYpX6eVMoqqVMHo1WhxqQ45XuFru35E8FbvXKddkFncyRzz",
  "key9": "3gAKAk4jdgTcxSWML42ntr4AsezvuAeDTTvsQdH99YnTgdP3rU3NS7SsV7e8Re9UNwrduQ1rB9wSHPzekrtqb2Sz",
  "key10": "4mGJV28aUG8NAwgCqZqa38BPp8H4pR1c9RrDdUdyuYsdpXEdLarAhwXqvT6bVeG5xMPqs8QpfCRzFGAgLzZHq9iQ",
  "key11": "2q9homwB4As2hJuJhtrqDijrHQwLomdPtiFpAbFEYrtCpV4KQav6tBYtoi8ntr97JaP8ycSDEPQHPsn6VQasHjDJ",
  "key12": "43ZFR49WiNXzdqXhduC3c5XZ2FJt3jbMtQvtLvBRCxtHJAdoVJKHqnJTPooQUeLxa5KXqD1nwM3hL4tdzHKvcJ27",
  "key13": "42QF6JUGiXDf2bmewhZcXNh3TMfp8P1ZUo2yMqwp8ndmahKtbohqWjyBSH7xp9iNivB2d2mHiUGMirqjDGuK9v82",
  "key14": "3AjanCqvpfHh1fzTLyiWnvRVqcBewWhHjHegaxKnzMDwNhvNekwUMWSQG9TkEiezhgtP7y3ZWTqky1r7DC7UUXTR",
  "key15": "3nUj3QrsEcLT1CWWSEm21QPkZV1CEpHTpDhwk5ZZGAeSCGq5kxQPwcZw98BccGVvQmfhPtQuSJkxUmgNUwhLXUNn",
  "key16": "5raJUHX9m4upX8D5ivtGtewYYCN1PtbF7QjE3yVtEkf3tih4596mCk6J3PbGMobxYG4b2ScDQF2s5KGJLkxpx2wE",
  "key17": "8Sdvu2staqyJDHWBrKvc3DxpBRhEpkStebxcEsbcEVoMZHj7AQiafjycueBGPB7NaPwxtDEBLdx13D7zv7sdWBU",
  "key18": "5ZHsu768YL9YMyhKEsTRHZyKM9Fz9geuH1i4K9hi5WLWd72XKupsJRiAZBEgCngXneoFmBkC9qFf1hRUg9M7SShd",
  "key19": "tJH1AdwX1KsyAyVq5MmUZsvss4TMKffoqhqqvo7YvitUB4koCFHEan2qb1E9g1PRjozjJik1qGn1r6qiuC4aDnX",
  "key20": "2LBudnv6pspSdFbWtqkhsTbLVEpHaxwcgE72LWGyzFSYuGkqHgH9Q2WkT9EouXQy6QwN4dbZ4ALASXfFA9PTMRoX",
  "key21": "DvLFF9aPQpPGZog666wK58J7g2v5D3Pq1csXRa8Dkk7UVgwq7VohVse81LaJrN5w5r6ZLPGLXE731jrUwAdLNYc",
  "key22": "2JFY6YJue2oMstHGmmcoPn3Q1hpLUigfv63stjpuTK1UNbiANk61FFDNxfFmj8NyicwP3M7Kk1pzstYLZhqFdzy4",
  "key23": "4HvCurc81C5M5hDyLncTwWkSXFf2PJRzaScHijPAx3cCV1JQHRKTEiXALWyVx8hjwZfToE5Nv9VfoSNiHSEcHmp",
  "key24": "54CggeEG4ovK75hGhp7kjXgwviVpiWZSLxcxEbagK33VkuT3EVXWf3RamXyPTMU1D3Pk2TwfBfTHRWBazTvKv1gn",
  "key25": "3JNPBpTYVgY3zvC9Mgpv2mDUSrZetq6JpR2kamHswsbYGZM4KfkRYEnFQqRafirr7qVL2j3uUp7g4TrWTUQBRjkX",
  "key26": "3PYid8o86hZdtd5TKLC22cCYYrm31Je3oLzncxM9JFyjbop7ZHL9QRPyobLvLhojQHigEEjtvfEG4UiuSnxdHkwx",
  "key27": "xWAQpVBL6Ztw9aHwU9R91GdW3P4GzKftovL9dWyNWxK3rTb7rqxFu3cPYnmFeX88JzyBn7cr94swhKw14qBVunR",
  "key28": "CnCuqxbFFzU7L4uZ9jZpWTkGrmSSS93ELHYVKYadMXAU3mcZbVyYv4eScyycmQyoQJU7aDcqQBJSHLyXxxqhQpE",
  "key29": "4aYjL1bSXxcp34SSPk66SD6i7Was2qNFQ2y5WUAfgikwvytDZNjcRqqKr2fqiQyLykU5gH1msznAbNCTWt7YjHyE",
  "key30": "4B58JVXULVeUG9dgeTPeRhPy3XQkrGK9XGzk2Q4CDBSPnUeX4Gmdqz7D5wwFMTibM1LYetZyjbFGQga36QRqzy79",
  "key31": "5fQqpaNYUYzHxqC1veWV3GYGYhzaB963teY7bH6mRSUnAfggxk7FcE4TrZEgBMkyNLQyHeanervEh9HVWvkEAKXF",
  "key32": "3FE1Hs9UsWfHGu4Pih3gfEqLnqjm8UoXFphzpL47ytAuQSWYzrQ2AuprQP2Lj6g1fWvCs2UwHEkieteK9dJ9pgpW",
  "key33": "4Wm6XB74GXf4NA6YsQ1kN6wfPTbwazs4VybsaAL2gLGZLrsVz6FrhfdkkbGgB7f9Akx8tndjqpAxpcKrDoEtzVGF",
  "key34": "3WWhJK2gPAxWMXbznNwrsXoA8j1SoQn9Q4CKZHQX3vKqiMVtsmNidGzi6b16ESbvaevGjaWPoFcZjqKgQBQPo7Qq",
  "key35": "mPqnY17fp3sTuq7ZLd1TRmA7CX8Mp6mWmo6ADsqVRk8ZefrG6iUjaM7H1q8LQXgsUkb5kuBFi8dRB1hjRpBSnUv",
  "key36": "nK4R6xS71ZwU1V49ZzqucDScGCYKXqRLK1Wtb5Az1vKmc6PAxeikKKtg4UXEEB6yDhEW1vqEHHCUrARx6T499mg",
  "key37": "42zF4SeFySkaj4JZ4BePPFgcLXKXYCwSrC9GqGxz68r6zT2s4R1b8DNM2Ke5MfhngbtV4Mg1LRgyDnpXvQRGDnLY",
  "key38": "58S4o4M9CPKmVV7EYLEcNkn9DjGNxb8U5HcK9m7GuGnn1bBLD9qWbi7tY5U7iqaacePmfeoU7v247ubyrYfUYFso",
  "key39": "2BBbHzBEg9VJj3ZCyVW9yahMptac6DqJnEdGckeEGz6CkdHq6Ep1jB8suiih84YTq5kCoQT1jbhBYdGkB7NXtPCe",
  "key40": "XKDzF7u2nFvCqqRkPvTn83sKAoEF6uHxN13yTtiMChPRZHYXFdG51T9rm3UcU2PAWvNBEC2HRcuJkWvQJB8kVag",
  "key41": "5Zob43BuoDnD9eVcyGnGstmUmo6HdwaQtF5wPdJrwXzvYh6AwtMz16mJ1cYBcTrUoL8WtPQ1RjqR4g6vaZN5GUxp",
  "key42": "24aZHs584ceAfz51wR7rXvTbUjSMrTFsDPWGNc5hutp2cdVgfk1ixVC5PVz2r8nPSDvEiwzLarak9umcnY5RRM3Q",
  "key43": "5LJkzdtf63rBJV7A4tT9qpZrJRK4Bs3tkMmTjQRB6sXuTFfbk9uw2bg2L6ryQUP6bJBocEnhaerjapueA2rHDjLt",
  "key44": "2eqkA6NyiDBopc2W4NnoGPSZrkeQXEKUomW5M8iZRnafL7Rj131pV7onQvRMRrmXeAxzDVkeAu9kdyvZVutdZCqJ",
  "key45": "3DMqLWrJAhsFGHz6huLAajnhontEwYhcL7EpsC7FA8kkGJqyjdjo1X98g9eMaT7SU9F7cx8i8CsbNz7rBceu9kyy",
  "key46": "rafonJR3Uyregv69DxmxJuEvpCStvZZamkQpjrZH5SkCGb7vhgozMszKbiaxbWzwNyWkupc8ARQEofbVnyryJNG"
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
