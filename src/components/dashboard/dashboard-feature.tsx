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
    "4354UQpY5io1uMTwEUbrji8zW3EECbn7FtZk1t7yxwJxqE2tXhLdixutNVHHFx4pmpPUbvbt737ZFrLuhQXn6oPj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65e7Abj67q9skmbfiWswvNd3LfBWnVUmC3nBoPxTD1c1s5vZCZ1Pyr68AkERzPcNa4UBcNrWQ5HsQnQMZNXfNeL6",
  "key1": "45oj2xuEYXgg2MVeoJ1GwhuxxphBvpxWMrFnKuvCQnuajRS9drGCerZJyu43RyG1hymLWuxqTS8iqq7Hk8Q2fk9V",
  "key2": "3Eo77WUZqjbe6paE7N281gWg6p9MasT9GKvnQiVGG1hn7Tsti3k6PoUXVC4aLgv2fskRnfYUA6LuDbCQz3bzMsv2",
  "key3": "2JtKx7nydj8rNN96XxWTRGNWmrfNLtY1XNGfoPRQfzexmUeFUMoCJujCqC8UQYKMbGYhFi3qT2ufvszV3uQiWN2L",
  "key4": "4j2MD4uoVrZtGgKpxf6zyxg9psGJZYb56d9Vwz9xuFZ3yHs5nHn36dQtbzdXMKY8eVmDWtaKxznnGgYfvUjXfoKh",
  "key5": "2VafzBXyhRmpCZ2YW1uUo4Z5Y84M4ibFYLxxZVQkBobcTC3Q5n7mmtwpxcSCfjhstmK5KbH4KtxsAUZqCRuwdmB9",
  "key6": "1N1rvJzuVG5Fn3i98kKK38iSvSdRtmEeCnoXX2tMDAExyRL1Xkkdvp8SSrmRrai2LaWyhefGMrWU25XPF1xtTy7",
  "key7": "3dsGhcu65CXLeRw67z8vb7FL2kwYiBRUgQkJZUUBr6DJwNt3BGzy3pygivT6T3ETrFXawiBiMQ9zfUM1y9LR71gv",
  "key8": "4ofwwEEgYdWQ3DVJeemKjUJtq9f143jxYxAj6zbsFSAxUbTzuTyaa345iEVczDU7VdDcSGBnHPn1mhh1a7DvdeCa",
  "key9": "59Z1RNZEdFykSkWEPZsQsLmvP2V9uzY1EKWae7FZUCPUVsZvE2HHaotA3G85S8y3sPu3Vgs1qkr2sYEB7Jf1Rq2S",
  "key10": "4uCazSNY5YdUKnhd4rsyP2RSDU7mZvbY7Fevmypr9nt1yN4Fkoah6Yn1DtaRowLJqzPKiZWficGkFG8VbmB1PX2S",
  "key11": "3guXVG7y3UAnHeumk5AicnP4Uoy55euQDJNvLrcKyFu5eLB1qTa8tYwVjgxg3nP7J4eJUX1PdiL6BgqV8CEWFug",
  "key12": "3U8BKYnhJ5P6imgvSMmjSxihViPEujwb8AUe1kznpXUYHPZZb2UMgim7632WMpWJLduR9rD8hNNPRwkLJPm6ubbs",
  "key13": "5p1H9gCkJNghPQz9ZVu2pWGvD43xF6d18VUxXx7VghyxuZvJmjCgEd5otCHZwWd3iHbjXXdaiEpfjRfJZQ4jP2tt",
  "key14": "JmaqHkNpdHoXVikEJB7fQkMYCQc4ep8XFpt6jKpxBMcRtuUJzXYgXdttBsFDAW1mHn7snu4s5S4LG9eWPNr1rDe",
  "key15": "5Ab8Acmcxo5QJNxPX9jfNDX79nWVuKBaASJ3R431yUZVDgCTnmXqgvqdxu67rbmcd7zmvwMEYXLq8b6oc8SR6NPB",
  "key16": "21tHBtfuadU552Q7x2ABKSNKoeyhxWQGhL8KKaYBVdgoF41J6675Ya8GfXkjMCHt9BZYx3MiZ3vQL6cpnWEECvai",
  "key17": "2NyoGPEWewyr8hPPmM7vQs3JMj6ZbvxPQZvpTYXAGqjSAPdpTyvnJVEpcLyAQ17y11KcVFLqM9Jx4kAEsiJg6eWX",
  "key18": "559kDrHs949jT88ZZAiuwX2EB5evuMxXfJwYUQTbgULTvqB6vukBSSwv9rsgDUFXob94DS3rFVqHk3iRvnZFJ9QG",
  "key19": "4WELfhjqgRBGsDFLzVDLqBLAbxYJqFiBMv15MrHUYVW4m3XtUfc2Bcxt2gCGvYeQo1C85iVX7zzWR44X1bVEUaox",
  "key20": "29WCjpWVibe4CCgqkkzKhrYLhcyrcyVaivN6BbM93YGZQAb3PgbvXjHVM6wqH7DRCe7huC2qCmiEhzQrvthLuJdE",
  "key21": "47RPjanUtJaBEajJrU5hy3fCHj9toAbQUA8UotUKpDQFsYtZ9Zm5yiExcUG8zHi1uP3QAtrGxXPrQdaYd4JiNQ8B",
  "key22": "3jHcLq6CdpvWjmC6g7XXHH5SB33pmXCcMvYr5Dm3YPsuaUe4nAZMBZL4YK8TBgB4eZw2tPXa3CMotCjTx2xk8R4m",
  "key23": "3EgCACXsEzNmDDoyHtabrUePYvGio2sw6QAce7fYRbcg52To4vRXtgGQCdiN5vqH6XRZKL5TmGYPfnLKANURyLpZ",
  "key24": "3gbhKHts65ivEGNui7RBpNbjC15VEaWRbfuzn5UWbfHwpCY7ejV5kq6Uaok7CzCbJ2r8zuLLybMhxELffRCtHxLL",
  "key25": "4Wsbju2mzVEdtZitMLE2682RNSzXjX7N3AxAvEeHTP4Vxo65FVQ2XRaU3Gm9iPFgYkfR2AMYScoVxnGHHxbB3rnh",
  "key26": "3k3G8QynCaNo2RrUMjXqwCNqnv3Yrk8fY6143zYVQk4mHE63oquke9wneMxskT7gy7JGnNsvGJ6cpDrtzWeNFbHd",
  "key27": "2PTd7AxUvS11dr5HsXm1oq448ZYo8qEZRALXMTqJN9iU7cHFhigjkryQ44fh4GqMywETcBWefbckbpxFWNt1FsV4",
  "key28": "4w4yThfBm9aRL1mQzhyN9FRhyuYpvQpVpbtGHeB6xtsp3doGhV3QmJY5UjRuff9ZxEiZzRtULMcP1fwv6mxefuzC",
  "key29": "VunxdeX1Kn5tk2pwEA8mtRaWkVjmvSXvkKGRXbcEEueqrT4zWkGYieBSAkynXtvKnjiSXHEnQGPhU9Zb22taPkA",
  "key30": "2Kss3kEXB1fLnvRAjqWcb4S7zBHgyijsSm7AmPri79nqv5jFWz6Jsz8kQRi3XgXDB3fS97rReGuiyTu7GXVG7MGn",
  "key31": "5PtQuxgVEeFtgqSedQZJbKtxCt9gkvEYzH9MN2vZ9H4PWTi7hGeeM9YCHosCNn5VHETSknqQi3ppEHqRQKwAvHS6",
  "key32": "mMui4csw946A6zZGRJY8ai8tbnT92ZR4MX5Ah5aNUhE6B9pcpb6dHrQBHyap458erutg92EVwXs7jFP5LUqx2o2",
  "key33": "5HrURHh7Td1KwmCKZeDR4tqESFUJnHeB6EzrVdizFajManVn5poPqkmiNskLsai79fgHmRPooiL4kVpkpfeMx4yB",
  "key34": "2hFghJq8cYiwJgD4MLokMDCSGz26xgSkE88RVoKdjWHRBBCsWUCzd5oBuKCwtUYhBq1XXq9yK5Ly9xkfSbgGB31W",
  "key35": "mFr2L8aCNGuMnho6uxbUbvEEXY3Epj7PKsi7xF3gu8aK8Gwz8Agj6ikznMb5FnsNqNT4mHftTm7g3EdKN5CYUbU",
  "key36": "5Q4b7AFvNSc9XZ696Rb9CaUdBnV6Y8b82jr6q5fijiEKGWLkEas19bSP6qrMwHk3SUwhjtb9Etb6Jf9RhN2XDd66",
  "key37": "2eGL3pJKicwtnxN3kp8eM53uDu2UDXUhRtNpgv6RahaKkSK11kJadVE7YZpemrrB1M4tQoEryuAvPPnh6njZkJ5x"
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
