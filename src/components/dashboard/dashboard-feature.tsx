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
    "2bFuA6Gou2fQ8u9zh8mi1VLkcZEL2WKgpThMeBWVegvE1iLLhoNsViSxNWMAQfquBG8zPrj9Lfk1ziK5UpzZqtzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UibwWkEgUR97AYJqmGrt3iCjeSnR5ZieVLHRhAyXrqg1Vi9VawdqPB65mAEE7HzA5hG9sRwSTBjDr8837EGqSsQ",
  "key1": "54XM3XfVwqqVSuyYghUx5Ak3QesLdfswmv9WMor3X8c2tnjiVgVuaU8AWXhbWFfZ834fjQM7qH52t2R3Aer23juN",
  "key2": "3vwrTsysEbTmeVuS7Yq4j98vVUNd7Pk8Q42V29LtSuDNKjwEGwUioCczTCLh9FHXipkeToQh6j3vrDzCGFmKEZnc",
  "key3": "4MJbD6PAy9ZBfJ3arjSNGQFraLwdJJj7W7f1513MRBFMGHxHeKtGNnEiecwNqf6DuN7rW2NXJ1KcsyMoo9yz3von",
  "key4": "4wEiSHXS5Hp86AUTP8PmMK5U3mYxV4XRSJPGbc6VDSVjxda3kvoaSZ7fYn8T4jHXjZH7JKQW36fuGvhYJYQvXyJw",
  "key5": "3zndRN6Pm8ononRyNCytBGV5v8gjb5efDGnS99sWGvASNVjcRWUNFnEUg7uSWk23RMHa7rRbTWUj7oy2MrwyYAoN",
  "key6": "2jwTmTioZFjup9qDkJ2K5qWKPp4tEmAAxuTHkbKG6yiU4YdLhkTiZQ5U9ZZTzR2iW67oxMNAyzHQKToEqqPM55cd",
  "key7": "4Mr5MKzyCQEH4Tak9rLR8nJLi1433YRMdDJiQWFHD58ZKicAq9SW6yWs8nJ7qcBMByBJni7zNJ5ssEFG8EFewxSz",
  "key8": "d6c6wqD4vouJLf5Co7pnrhQXCqBV1MZrejmR5wZYFSa45DRn8U7ZjbJGNc3uuFqfxthEsQaaEw4UuDRBrzD9CXb",
  "key9": "84fynhqoSmGVa667K5fxPQC7PaNgBf7ZqxyFGK9FQEuzyyo87vGtLTdNEhutwF31gN7fpQWHRhCxQhnFbEbzfym",
  "key10": "4RR5CUGQUBwV9guCmtxdsHkviVYQkC9cyEj9kdBsqHW3cZ2v4eSU7PgYmCo8jecaLndTsuRfMAKaNez6fqR8gfGe",
  "key11": "4FfaD3N177kFrdPZEK2bRT7yicfwysYJLkvUhRDzzmXsiTVmYkJYgcMyjLTeFdSJxukfribzPjE75CD8hmmCa12Y",
  "key12": "5AMuw3UtFwNd7sjp2jnmh13KnF6hMys2nkYYgkA2x1HhyWuhji169x3TM8rTq3c7fm1Pk52B9PmqY2BN6YfJEjN9",
  "key13": "VtiHxAuHgRohxv5kzveiVPed3kJcrZYwxpHqazbotkm1uNZCm95Ua71d6txub5HzCLJ54ov4V6G8ogjLN65W6aK",
  "key14": "3CwMfhotorZEBz9bKXTtBXwze6Gaf3J2a3AWNk4TxaJwY4SrHBAg5zN9vZRa1EDAs9LyAeZEqjyuzrzdHs4Xbeqz",
  "key15": "3C39deBtydPefds822ecZ5zSQZEVXgh2Bx63GoY3ZKbsmcQYHWWz6HjYrmig3y2CjaL1gc2psSpysS4aCLMVFXVo",
  "key16": "5o5hWptqesqN3GKjFF1Kn44yz9hYjGENereJQygt7GZCASwQ9AjYYM9hWZywpgWCzj3WKiJs4TgWsP7zbMpdZ7nC",
  "key17": "yhKsHNG5LRnMbESDyn1sm42FGHdz5wDUMNu72LhxkGAFyUU6HtD4WVvuBQpGQjMfw7us9HuyA4kyNni3kTpTAKV",
  "key18": "4Ty8CMQ3jjhYHZKuqr766orqbFrrAdMgpyTLrkNeBUdncTaZ1cZj3fJ3ku1LTpkXGJkXtKDF7EZjZajv5v6YsLEU",
  "key19": "5xpvk1yyQdYVYXXt4e8kdp9b5mhd4DnbzncNSNYwsZuyxGhTH2mZ7Z8TRz5srxzBX7YkFiSSVBuMLXTFQrRoz8pA",
  "key20": "5QqX6FTKKb9bfsqgStu351gvxKenwzGcEt2tGbgfAttf6o4FReP1ZXhrYkLPzrtetLRWSVSroB94GnJJeQmmkFmw",
  "key21": "mzbW1xbs5vgfoRjoahSe5ndVczB9fqm71ajqcFzLDBv12fnwLJQrRK35M8NCxUUAv7rb1ghZjJYPUJreFkYd8Yp",
  "key22": "5XiQoX3reeNWHKWKdGpgGvhjTF3FV8EkUHSaeTPuYZZ4oUHmka5KHYXA9CQeJwhoqFx55mTCUDGrxwny8DiPKNJD",
  "key23": "2Ayyr7XPy8tBcLRGLXyt14tiMFRYPnBwGv7Bb4Xi97iqUtcoqAeDxRW58qGdPV2fbJiMVMNjM5yZF3f59HZ61WBQ",
  "key24": "4ikLwQfk5Gagi89yVCvBVU5XJoVPhE6PiAX4TV434YExopSEXqcgnaHGjcoRL59ihaqSCpSKasRvSJAa5Zi5exVT",
  "key25": "31ouCPZDMkdai4kdDXr2HeDT9ehfWqb8PcCTnQLZyabHBcqvce1s8pZLErFc3Y9FXbQLyYahb4bG8vE1JP8PuFrc",
  "key26": "55TUadH1YLoeKRHUqvB7zEH7sE9RPQeyYZV5A2xcQbaRgwHMyh3qFVBEK93iBS6DLS1CjQVKtyAt7PRnT2kfGPcn"
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
