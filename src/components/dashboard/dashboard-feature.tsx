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
    "e5BvRwMovtJ1fTCspVsyXfSqz3b4oVVTaRoNt8UYNj9ktGig2o5XjCnTfqErJuu9nCaU9VVe29b7nU525oTCnwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dh3w2XK9kF9Lnwm2iCWsGvmd8hKw9ogVp8ntbwEGcstkeSwGnTaLLHHgNA92xG4Y3ByfhnYuvE26u4iRZRz1VZG",
  "key1": "5HDuPK761ikBPg48CravL34x1GWxBQLp76A3cmwSctrzaqvhL17AbHo6r1m4YHsYjJazQ79oXSX5AL8NCQ1jyCuX",
  "key2": "2UbtqiuepZ3JikNZ3Vy3oPW2kxRf2DzaQa55m5igS8zRvsFY9bDDpvkt15ZWQe3VqTKP5WwZqgkbcXkjX26tBjqq",
  "key3": "4fQ6zbdMF8bH5S3uKj2x7Gv3JsfV4yw5D7DZKBf2bogFqAsFKiF8FcGidcuJFCDBQ3Mh3ujPSgB27hhQ3Xr1uyWD",
  "key4": "2eXKufBWeXG4UW4dbACShWHn6SwtSsq19CQhFksEYZsdw2KEGrUZGkii7KMd8Acei1viUFzBVKQSRby8abbdoipA",
  "key5": "1ZwnFBMduUETkeQnsMVSPJdL25Yyr1WG5RsN3PYUJbcnWhBBvGdXWbtFTA3twjhzRRSWBji6vN3kN8jhGS37nk6",
  "key6": "454AcLEzvJ5VGfY8Np1pMq99rEfLbjThRUN29LY73BLv7ubZsEX2rGGbAeUcNf6kxshqJyzyn4pNFfKRPEyBPQDe",
  "key7": "5vhTmP37FJU14DEbTE3tkTyMUm64akDS7nrksMhNbR72tgwdRU5gNSnmHo8NyfTE9GSYok3CEBSKVHCM9tbhYUJV",
  "key8": "3oQFCmkhHfHL989a98BvA51a1HEPU423CQLUmZvWDtJvmDgCzkcsYziMTFANKVCwGqQBL7A7HEww4xB2YCzvZYA4",
  "key9": "5azadr2oKfTS8s1GvCCKUtNb38zj4DfzWuxhZu4XmZyrn9z6KpfFcbe33ypE1q5CvRmXZy4bJkwfD62iMiMgG8pu",
  "key10": "5ustmEp1buq8qQi6Qs85SnAgdq2kLVQjBmVRVuv1bW9wNkcv8fNnLaLwRNGShAa7LbqAvAhpnSty2BMUGQtV7nBo",
  "key11": "3AgcXxBWX97KmZmyL76FCipM3NAjDAS3bAdEduMNvc1hzPAPEctWmfD8mga7TBb2s3qk6KXB9dcoLA4aVbK9Z52L",
  "key12": "5uPWUxpM3tLza1or4BZhPTbZkeJPnDNqiPuS1zw7cbdTjpmWfruaYq4hBiTNx7kLAHwi4oqw4YvihjdUjBJWur3h",
  "key13": "3YNEKR19PCEp9bXdf5LpXWk27CYYTsf4z7RvaHSPGscSUTfMkcMYZvJMBVAw9biUuZwY7LVXvsdVkYDYShLEhuJz",
  "key14": "2kFdPyt3bNAwQw35esbATbRqqC1KhBmMLqYJQLttXZCGrd78yTu66tQpYEetJyWWa18pdZkA93FibQeEomTB28Sm",
  "key15": "2SvCTgm4cio7M8QiNK6CgRdEQ7sty4C3fr3KCuoK9MpdQBaDvAhdDRpLYdeHHdBeDKcqvc7E9JETRcKn8iv8FdeM",
  "key16": "2Wvc4s4yehF5mYAE8CibzvCrRF1bKJue3fFa3Qwk2GcZbqHkQ8rDTFAVHZuzuJvSJQfVzXLzQeHjQybcJvDzNjp2",
  "key17": "5vQpb2Q1x56vzL72wThFhWL911QaDkfLpWcU7jFEZUA73gKyPLyEzsWT9RzTZ7T9ivdWT2x5ZRDxURd6vHQ83w28",
  "key18": "3Xf6mwCLPtB22YHmCo9Vt2dkfF6nDiS4ZAp3BvULUnVkJjmtXjEUfd3EPhhghZ1LWc6BXxEE21mohEzZz92t7doC",
  "key19": "4kRBEvM8cVU6F3dAJruKf83Zj7p2d9EsPXnrG2wKPFFb796YRetkUFWk3MKrCnU3T3VjQizgXtrSkwsRLjeHBG9R",
  "key20": "23D56JfTZRgYEuaPtY3NhiQwecdGADaNnbSuBUcXsKJVRd5yzcKnJmg1kyoRe9Bsu7ZMCdheYyJGY3NrQVFyPcXL",
  "key21": "2pPMum3xgn3mKUQHZ2QKZoSSavj4Udwf89qq1p53WGvnMTfERXEPVq7cXmw2S4hxWc4cdJEqjrtiDTVa88GL2wXo",
  "key22": "5WCkUSxtsEuhTBtom6UR8zQV19WQscgXBZwifNkJcd7mbtTRiMBMd3xyvt6n1nRhaX3soNrrqYcsxHLrncxaNZFE",
  "key23": "3wRM6bNpZARProNjtG3CmgfsqBUFdbDcEECXCKZcmqn8JKPn8kaz52no8CYjF7o9db6djrirw9U4943FLJLE14mf",
  "key24": "3GXpNU3ddaQuDBwopPYunRCHXwyvxc8L2QgsbASKedTsvZzFvJ1hf6iMNegBCgh3253dLfkT4vYoM4fzuN574WLQ",
  "key25": "2Zb8HLjFwoCrsxLNRLLZgeBUECCWGZtCwL18CMAsV83Ktu3K6zeeDAfkz2D7pvU2Z6sRc4mLNxCsdf5DZKCbxEBe",
  "key26": "3ki7Lm9sPYuBmf1vqd18G1ALR7GQP7VGGcvU14Qg4CWEwDixx1umFZrpyMZvGZkGC73b9hkHzG4uRJP5p4MWBan",
  "key27": "Bk1M1HfN6YRNw1e7UxrpHRbPJnSxDuuLX58BxM1epV32wQkH8CWhLEVeGneSNY9rShikGitXyjjbbb1WTqqD8DC",
  "key28": "5PBJgqxCdVAZWEYz6cS1GPBRDkDZ8A6ewgKJ8pr7xigiHjFGGn39BrzXtBVrj3JTdE9dfqMBjxLn4Jo3wQ7jiXv9",
  "key29": "7RFbzZAZUEHg3UWHyX7cAhz3QHg5NoAVfS2mrwrbQq1XVJiVgcQ4uQGwW3eXhuknZYBdxS4nKZY49PcvvdG1qjG",
  "key30": "3WFkqZri6FGVnxeReytTk6TcGBvjLT5QMDoYPyKd3wtefhGz9ZiT4huJMs5pvd5AF8YYqkczjb2NHWEDvCtQB4ph",
  "key31": "4VxPwthaW45SsiosX71rRjfFKxY7w16BSr6BsrKuQKbK552CsuJRqWKm7cJLEooPEJbuGBAwYEz8mJhEp6HFHrNp",
  "key32": "47yiQHpJJG537NzuAafqSsk59MTEdkTQjoEZ78bJmV3ksz2xAzYtWVZEYoXoihjgbLv5EEYp7chCqfsPoM1MxiDB",
  "key33": "63GLJZre3YxA3Cxqouj9W6m8x9MkR6eCbyryRaMYrxxXPjdzc8BwA2XT4fTqFRD9wordPCqn6QLC6EtydEKLEbEP",
  "key34": "2s5nVNvGvbKqNZPbMSTJzfwLsi4eSziYhW9W1gD9eS2qimFhpGyESqxd5mtcmKoaZV4xwS9t8YmF9v6rsKyGK5xn",
  "key35": "2EZUTxvgcHPR6hHFqzNiHHB3C5NHz8JXrXonJwWByy8mzNJ9M7PZLsXjnfdyZhrim4YXu1hkv3dvwc26XaBXprr8",
  "key36": "57wdMNjtvvwBzfYivRsBQk9KX1SMWTCckqaVQ3DZoZ4nyq1mf1uGVJfpYRBhjawryRfs9tbeeUdBhBrE4qgBYqaZ",
  "key37": "3nHCvSE6BpJCvY9RRUQyFvjznPUQmF8ioqtmMKzK59fMK26FbP2626i3zzbqh6fpeJJBANiDccTu2TcHGJXDVHjj",
  "key38": "42KBtDhUK2w8dcPJaJnMr8sPKHAzLifcAexUQHo3MqUFjbCg6ZFWhGwEsid84aEUHgrcLSuDyNEoQtts2ycdtoCW",
  "key39": "G13MnvbJnjxDnnZpYCTkQkHP5WEQ4p6CNdCeWDanAkyxdCjBk4R1EdAzf48pgJ8FYmVfGE75gdMQGseRP3Y3skS",
  "key40": "9HeSCf7jbaJwxShvGPZkfLHT6bx3DhX4F9UGYfZBzybgV5U24GXLVUFqBYZQmK7eUXHLAS312ouqp5docyDyDUA",
  "key41": "2aACpmKSAAtEjKT87JfVhLFQ9G2pHCDhJTRTuUVDoPW6vvYzovLmojXRy6QwQcDWUZW9xxGKYHSWysLuBhqPFDxE",
  "key42": "5ma6vkwNkkVSL2m6Zf5jqvtJedR5rT6dqb73aq3UwXtMLHScYVdYujYXWP4jvKMycMK4rrpjLZvRdRsdT1UTVikE",
  "key43": "4HGuuGxMDhGpLX5pzdRefZRLhKhiz6wrNa8CHxHDGCCaddQncFD6EeyqpuRsj5vQgtrjiznaEariYRYuEJn3YENW",
  "key44": "jHnGTBi7gCyybXQB7phTaGFajKd4XSkBhvXxqFuJvuUAfPurtwuvF65hA4UfkpaVSoZqZoM76TMLdVykaT9sA14",
  "key45": "fVL3dfJmzs5AS47MSWSv7SXDtVkWqLN1W4isEujGdnNDDFFPVS1Y8L2FaNNnH3nCLgDiZyZwuowraxF6THQAFpY",
  "key46": "5CyGBfwaGUMUtQu8v65mKZCGRFHsecLyXk4ExURGuUpCLZrap9hpY2rw246p7BTfJg6WQyBTy9CfjdR1D9zxPmgR",
  "key47": "4AFZSZnaKkmk5DGE8WW2JpXhrk2p95wnX1jxrfEQmHHXASMuFWpA9vkbYn1bVQMCwCBbaxkVtBnUHf5md3zVbEem",
  "key48": "3LySSnZEAtdYJvgvBBWNYTGD8bPjANtMTkiAFzUErHQsMRkRt9ZZTkouVq7bJJTX2FTgiV3thVdqZ7bzWFkUc5s2"
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
