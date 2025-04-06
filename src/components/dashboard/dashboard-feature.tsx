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
    "26p4c9JmuEo8w5ZQjH8Kf5eQtXqiGhGdwrSvpk77Gxjimh7VN6WtiuWCj6XsQL6aAbt66bbN9rWwmXDVPD8qx2Kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XH1E831xr6Vq4jYNE2B7kQLwNwCvm2qHRz8gLXmQRbjzN6kUHPRuaXCmPjUHDq3SB8sThapaBrmxstTGVKxxehe",
  "key1": "5eM6zFn4BfB2tXCCLZhmWTfmFpANGrnPktW1jL45JDktdDN143GwebXtoDgyuAuYyHeprF5wu8QzawD4M8hDnE3y",
  "key2": "4g948KqdLtAvCmYUX7WRhTAnKgHKMhu6cU13Gmrt2ecngjyU7aVPzQc7vd5NxPvU8HvkgqATtX3ZARaA6xeA2Gkf",
  "key3": "4XPPnGnoucro3K9ES2DUvgMWm7xue9v9YjQaNa6nTBeCs8WLpQdt78HukSqLnCh7k4AuXyRTdydjD8dijunBqEXh",
  "key4": "56EfJuMYpaVhpjEeXRYgZCegpKL3aTPyFggj6fV6LDyVw75TrreeE51wNApnYR2KFguP1oUSF3v27ZTgJDR3VGgj",
  "key5": "2fhmiNUgDEQ2XD6NLXnMb4soCSxuFeXxpwEiU8sDm4q6FbdVqrgWPxArWeXnHQ1K9NqVgfJmmaJ8Dms4BSfB9WNc",
  "key6": "5eAAZgoffJZkHBsLNWJyUUKBJSgHNdQiuDetnwSpy4utrYkGd3em9rqueKBca81TipcSUSRXE6r2qrBpZC37Mbbn",
  "key7": "5K6S7APmYkbKNKqHNMMcqkqsDeHBbqjhpoaqijQBEg3vh5qWca1WKNb9VAuNtskd78SKYWGrT6XJxSzhS66yiVkP",
  "key8": "QbDqtG1AD1FbB4ZyahaMD9CHvKKVkupq3podi5nT3bACPWaVFWV5UVeRbrTHFW1CtbgoEtxGShzn5oR3bNB17yB",
  "key9": "3PkrVGYsZr3jr7WYgaThhURZB1HFhU1JfbKod2yfD5Vu99WSp8CHx24Jh1NUNsqNFrpw4w83jqoJKsA599A1ipqz",
  "key10": "4w6kay3KgFncTm5FWDicYMBoBCsqD71PaXAkhCvidyufqEssCA2sffcYy9f5cRCiPLvNL7JHK2eELxD5nYcK44En",
  "key11": "3VchBXLLYzV5cQWYhkxazdy8aVXJxAQzVFuXaKx54yvuHBBGkHKtH9gy2h58hGNuzjY18uRDt5rfN65Gxn6meT3h",
  "key12": "41i9nAaZiezK2s1iPis4S45d6UVnLRMo7uvRMnymeZJipNRqWcDApWGgsroVN1Qp82yuPWSaxmA7L1319LmZTRdk",
  "key13": "2iQa47T2ikC1csjbCMdQKV22hNarU4bVPjYYRJRXPJPZGJFrERmS6KGQokfM3tZUwYArp3NeHu4ZsmREAHhVbuHG",
  "key14": "xiL9BG9d7FAzUxsyYnh9jujANYpWAhd1e3mVw137ZfYXJrH8ncToZjcD79HUVLDKN3Kyix1S3DoVzN7AKyA2z58",
  "key15": "3CbzUfFk4gykbmoPaxsXQYYRhKhtr1yCfAgcJVDJ5qGd3o6ZvXHeEMfg3csrb4NedUPTyK33DTDWAB7JPe9W2Lky",
  "key16": "48TUS65G6zgUFnP4DNVVHZitTCfdE8V7mJTkrbnrvvZxP7Z1ySKSmXpEFkXRES57nN9uGLUwsefDSpFGro6LvMF7",
  "key17": "24Czk7eqwCxnheCyeeobaxAhK8Ew7vGbDf5gpoQ3VNo3MrZzbNQr8JW1DCrmKb4cCrVEfsgcgJkmPxbtGjiFkQXS",
  "key18": "3wweAsMGQKN3Y2a7D6tJGkPUNtRpQJQWruBac97dTe1NGKW2MzvVMtvu5T6k7b4geaFYwXXWEo6kYDwVgUpjGVMx",
  "key19": "5QHu1R5fYRz5wLz7YzFtMdBkNZNX712zt4eLnwuQSM7w7Qoc646JfvnTuzkwKLMC1EqrobRnkCPM9tfW8C9nmpXx",
  "key20": "3nGNmd8nrA657E39Tx5s6uiFomMD3MiHGYt9ycRJJXx4tQYfQnuDy6dYPFzybNoSSrn8Yro3p1eUoN2863yYFT9p",
  "key21": "iqDv7aZidqjNm3koXqnM9xqQRV6CzDmdSpXcmS168u4s5kcLCTGFqzsBcavK5kqMTUEQB4TtGWJu9ofmCRU5Wet",
  "key22": "4SF8jk8f3DWntmJm1P1tgRApHTMyVZmAL1yzd87G5tHmJqomY2r4SLzqieMCdtUiughb8WCaYVijQ7sH9qATirTL",
  "key23": "5j2dWvKdhHfJLQeThubEExW8W47j3KNvcyHGzE7uR7QunQYrPh9KaJ3cXpGkFKrySGZVyn7Jy1Zae49Hipbmv5ac",
  "key24": "2oXm6KDobQKdVuMBsf3egjG3wvoiY3z4G6aGxpv8PfUmNztVm9nhn5zu79xS9mbvwC1ujsMbNjmeDeFhtwykHQbp",
  "key25": "2fZ1rnUFbBnFGPJxw8nokUv9RQgXMoxomnbEx8GWDDwHGufVqiq6RMWf5KsgRJxcxoghTKYgJXTfEEFfFNWxRS7",
  "key26": "4eYJEzLL9HYo1sz2m2v6ycHSd3oE87L1mmYFvKZJHK5j8zTY9JfPthza3GRfiWZwiib8cR4Lfbw4EuxZMcEenRyf",
  "key27": "5YNJ98oBqMFeWZKgEHqdgyHnGNeYC9Ei1v78puFH8Av4KxPHwdDJyfxBbBcrdBAGBbQ1CbDRiJj2QyzXSSeqSZPA",
  "key28": "3AqXFHgDfeygGTJ4ERmxtPQaNE5oSRkSHhPYdPsDNpQ743zBTdAzEqXaNCpeskeqVL6c9S48Phhot1DAk3Nyaqn",
  "key29": "5MbVhuzMAa9eWcyE7Xp6j2arNfxWxKwwRy9TtRt67iVyGdpLwBVLQ9PEFDNAVrb8NAYZuMRvk3iDvy91cmzQ12k5",
  "key30": "2pA3sc1UMTwkT5v1QBqNp4zh34w5CBsYtbdhYxzi7t5iyCMf6hB8yPYPPdW7CPAZ8uNy6mkdcNS49TvQBMzmKf9C",
  "key31": "61t2fb2KaVrnbixLWCgSs6LGctsPFU4wjJf2J4i2YNykqnXp3e9VXLgwDLUMdxKoEEK4cUUyVjh6A6nhd7gWqJV3"
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
