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
    "2Bs3tEwk78pyy6p88LnJqK9eAyJeSMZutUuVPu1rbcaSYJAtWXrmA2CmYWjokFELChv2FanCQHkHN2bgRxz3ZSae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fTqzbP7mdDag41UFpgdEvTDiNiicgqqezsRtEFxHWkvpbqmuf6W84JbEMMDG1EepHPSH7fKNiKAV1mRaDZZK3d6",
  "key1": "275hUWURG1xLdBtFfSo2aVwS34c9aL3rq8BuANH3YPNMwhjBXk5tqii1CnJqv2u1Z26Xr1Hor2eREzsniL9W3YCf",
  "key2": "5g5j93buXqKT4NXNHHnQygeT3eK9fm1rsi2gyxNGrkLAppb5HhexXozBqsKf8YhPLkqeFpyZcyq3RcPHUPFKi3t7",
  "key3": "5fnHgoYGW9jj2L3SWHtFmvShXcT6Lp7KXXYtTV7zofSjme7RSkmn3DWzY5kRqgpMe1tss2JzQ3FXRQJ7q6rCJBjK",
  "key4": "3PeuQHjiMoc7KUqz6hSHJEUBV3j2QPyC1bMW9PpCorQvndcBG3qLeXuBJcR8y1h5nYUE23xoXJqbNxz9WvAy7NrF",
  "key5": "54uVSMGcxUn6jBj6UqYSStMSSuJyUR8mZsrhPj8HjUTM836yLQUuZm6J7abDQ9XftCxGC95AHQSLfJvgznG6aZq7",
  "key6": "2i1aHchw9wHwBTBCiLXfV97ZUp299X8L2TgVSusoSeRmaaeHFYckPGhkDcTfZ8j92qMEaPcGgs5cn6L6KZm9erG3",
  "key7": "33i1s1VDT9GnpqhnfbEsgrYnwSNoASCUDkLsGL8fNKtbZVWaypNFZKKYuAZcwZ7kaJYuR5sABQyCmatRY4YuaQik",
  "key8": "4DhJzaniBuF8oP4ec4pQrJ1bwzCynsyoxTAMxVNeotBH76SS1VXEzzAuMkKaKeqzdTiJ1Ez9jbabtysF4u4SXSZ2",
  "key9": "3KCCTcA3S9LjCz5QBYuZu9yoxu9CNnjqpEThWJ5HRpGpDidTcTo5SYPAvRzz55FGFjYU1j5xwMUF8XyDa8nx66Gx",
  "key10": "543uDFdiQkNoKPn8BKWJhMQAjgAqJh4qdKiy2CCjM33tT6gAphynkY2Ude5fcacpmm69773uoYCohe9F2mLvTeJ3",
  "key11": "5K1ax7N48MzQJds1sbqrdCTdkELninvrVYHafp8v51d53bYZZhGmezKFWXiKRakLFt3jBTBTGfR92yLkBYeebi5g",
  "key12": "4AZ6eyhv5iy5sDBibHHodTBHdSCL2MTTcksxiAeZFwWBvVMswAirL4WPpYCtRUNis6g6vrVZjWZMNKnYfHVxvfgp",
  "key13": "2AgXcYbfyARt7Xup43ZTuVerdem17Q7mtrFBXq2cyiJKSYcjWaVVyPGwUEnUFtq9ZQUe27sNXWTe89pzPV7xmSbZ",
  "key14": "3U6pnowpBUVL3rHBvWekVPT3zWvvzQE8RQ3HWGPxmfGH3BciZQ3hE1vwgue942Fm5VVKc3ADbTyQqKGUQXkPAha8",
  "key15": "4Bp1gzQUax5awr3a4dwPmD9jSWpvvUVUtnBZ6HiyzYna7vJ8dvqo97JURZwn1LjSdQG8aDySC8h1bJV9RPEWK9HT",
  "key16": "67H6rNu2ihruKd5yAebCockcegVLCv5JQYY4AvEbGiH3ho9AoEw6dxpcB2EzrK5bD7gLbykvuFepsHBM7a44TVqA",
  "key17": "5YKK7qWT2ndoYWkT18TET5L9nSiygQSa3bakNSKtoQq7YqGte2qHW5a9QTtLNZZTofyTztU6D9QnFJus1cucarF1",
  "key18": "3ieeetZTxYL9iN41Z41fpXLVdGNv5ZheSD6nZaWPcDDWocR9mNFjG2KaCgnnCMGvzBN11denZLzpXU1vdLF3UguK",
  "key19": "2p7dh6dpZnGD8iE1fyzBSednJseP9VEE4DrLFrve4k2wq4W6DCYBm2r2FcTnqmzEWUSUhqJPbAjXfBvnnuqKeP8Y",
  "key20": "3RHwoYfaGRc9HopkfPEoVqCrWPexesKiAUabcapJavdRMn2BTu7Jm1qkouwagWWx5zMwUzjJPyYtSV6vBcrWEKPF",
  "key21": "4dTE5PUAksCtxDZ8MMtf3PdeGZUgwStRscNzAw2cxAfYs28Aw88rFmr3GCmjDyHZjpkoEgmLn2EcMmzhD9fmv9si",
  "key22": "5AoAm7fcW9ZGnARg14DzWWne6G7Y4qDTMTFjYXeYPrf5MWXAp7HU7PaAN3rv2UDPr5yV3p7ig9gJ75caJEtV7x25",
  "key23": "vbiyQxxDuh6UxWPd3ap9JYu1ozL8NVeuyk5YgFbWhuQuFwoJFpUy1GdeyB2Zijk2FuTDHTMviUTWSYEUQDfqvuc",
  "key24": "3cHmALwSxG4V4hZULgigCh7Qo6xR4czisvUgb8vBi4d8K6W3hzu6a18Gfrq9F7PtZJwj3ALNWSyYdLpsAw7mkis7",
  "key25": "RKTS463RJ8To6xagaU9VRuxkR4msxPdbUmj75vmaLqdPYxjG1uLnyDLHsvGJa5NY1krKwJSpXS37sZ5V4tvEqTB",
  "key26": "4wjhz3aYXGbfP3SPVT7Vdih9kKLcmbdsPVZ4R2UKaVa7m7VjidP2F4SrHDdSLhDE7oiMc58sHqGKM9WJDPg86BkM",
  "key27": "2d9GPkYEbE68svaBfwvxYU25PHzuA6VyWjwFUCJ2GGRApQvAM9NK71G5eqbn6fec9g3NguAKC4X1KEn3ApeiZgkW",
  "key28": "2QwouAZnpBpptPf2YFhD85KrGbbsDGtmEX1UGemFRC9fRRoH6LPjYsY2nM14xag4wGAZcrdQ7QhetMBtjTWK5973",
  "key29": "W21eX1KuPUc4bK7NamJ5ZxvrtBybc1n23tywSAWf3RKm2qgWQ6aYeRwSpHFhjAgR4VDQPBP1T4kAkttkY2MnzfS",
  "key30": "3oVTpfcFxpfMhTE1c1ZsV9HPdEgosGHBH5qVMqi9jNhVRZxygPhS9RwPgaaR5iEEBRGy74GHSa1F4H5Fgkp6rRum",
  "key31": "2rHSbk5CFig3ZTqd46e9GZUzaQDH2ifArJLb5MGV2B4JWU5r85fg8bsvxa8yEjNfd2gyz1JGzMeT5qP69WFCbvHt",
  "key32": "291w8iU7qwRb9NWwvxU5NHkNB9rJe2Ctdh425yfTbMRGQkdV5r9uYLEXoD8cUr1223nrzQCNgvTxgRGx8h1Dc2Q6",
  "key33": "3oNk6Ta5kDBXDwQHYJKfHRGtwyRev6CDUQkWZDHBeDigySmAwqZUKip5dSBqehkYDggcQgxEXFW8QRgTJWjVWLZb",
  "key34": "33ziqC7e7W9x4pQbXZ5XJHrb5RshoaLHnQaHC7obyPMJWX4BtGUarxLad3CxiithZgrcSkaRvJtJ4FWofumLhtbX",
  "key35": "BdXvDWrDbxeoaxmM48CG3mwSRfzQRamSb5owpZQGDSZnoTToBg9EiekfZ7yEzvgYzw8eRwPQr6o31Nu6SKbB2BD",
  "key36": "1twX6jRLc3DNifyC7RZVqRBiPwCc9zPuxKjGQhghYFbZ22Dp7PmutFEiWsZcUU9SXVsnuEdSh8A1XdMmtkc8Mvh",
  "key37": "jWdNJg7fAV96pxMGNvGFaYPT7XSndW3Ni7hEjqLoBsn4x1FA28UnxYfShr3W2ar36ETQ6T6bxA8r91ihHeJPw3b",
  "key38": "4PGuDPF2dWu1kLYAwoDbFUJ9msdSrAYQRyCU66nXYgsS4S7yAfYW6uRXe1yT4V1898yuGLhGJDRhYG5MxuL9N4op",
  "key39": "33oRyLo6DMAhTqN9bLnnNrTzL5NDsbC6yfn7dZYW7FsX2gDCiuCNP6mzPcVwBPU5SWxkhrBbWWbDdFVTn7uJaSQh",
  "key40": "5kFNKTs7o8kAsxh4FifKhQdpmNz4EW7VsQSpZGbGmafcWyfDvhoDvYSGirnkeLUEUANNx8a5un5em1wN5sSm1uvG",
  "key41": "2kg6eiiDSNkjVEGqZUXK75b7Es6AexKfpyyfXD3PXBR96Mhco2iLLr4soJgTbjfiqxNgwCzM15JKcCfqodsYJDm3",
  "key42": "589mtNZaPc1o73RqD8Xwq4kuhZb2H5oTNURYy6RsGruNFm4puMhXz5C54dbA4AE7p6EbfEXxSVps3WMLLCbF2Sh1",
  "key43": "2BFXEoRAt78rn5sCm1YKqYF4XmrbxJsYGUEJNvQhtDwfLTXCo6yqceYTBLMjeMg1aDZHSggfiLJQApFCTR2XrYPF",
  "key44": "2FTKawEhzai1xyuSmP9g8N8HRNdUZHeZ6bqMzmgdpxF313NnzfNcecuM3Y4sJoijciG6n9EkvUNLpnxkjq6xxrAq",
  "key45": "2gvLSqQDu7Qnk2aH4PnWpkh2H635dQcCUJU1ZHyYK1pmrhF18qLzaU3U4pm4KPTY6wd4yFyVfsyXKP5UE5zTDJcC",
  "key46": "2R9dBNuYDxvfKH3LTRrpRv3Ea3wGR9VnKeYBnVpQSH4ae9R8cCa3s1ooZNVkof385bVPdiu9GRGzMvWxvdGDiKyK",
  "key47": "ycU4P9kEkweLxv4kefZ9ofAJf8CyDqLEGYL5fg7bX1qoxYU3Au5C6c5V3xAeW2yEsS1zfrUjiG1ZTW1DWQnHu9y",
  "key48": "3SLgveJXVLX8a8aRJmhP3ibTWi4Vw8qxEHkRYNbixecUKondvoNHT8rYEJDfB5iYoyZDNTkxJm8UpyaCronLZPV6"
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
