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
    "riJhSfG1XLVq6dQ88mHSyw7Vwo9a3eAxtg6eLewAYypGE6aPU4gtGthwbFrA1252DevXfMAHjbmxSo1a188zmPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5MgqER91FH1g3mtb1of6psBiqaoR2hGSTxd4GutvHnwwYEVbDaGNRkBq8PQnqPiMZ9JiifiA2JzyDKBdK4pa6N",
  "key1": "5iFNDtxu1u6gZLLt7gmFRMzgh9GPiLikEP1rPZvgxLuYsnSkAi2nfeQmUEfZDfjjJ9Cyfsq8YLZxJMubQw8jveze",
  "key2": "2KCN1ajH4mDcZ9NdjzW3RLgq55RoNoBfwdd9adEz9i4An1pSk4wvLLK9tHp98Ld1YZKteVgFyeSmLi6Xfp3mCbMY",
  "key3": "3QzA9bP5GUaRz3NWQGkcHabkw34SZfuMeUtYW7HkNDMYFYy8NswtxM5hzpFTk3JXM5PYu4FEJ8Ffdg2pfnA8MXqR",
  "key4": "5ph3oQ4e3m7gis58G5KUYKYCW1wdkcphWDFUv3NeLEntBrYqJfxBiR5kckePaVMF4hmYeX7vvEGkvqdn4EjxYp3W",
  "key5": "4y5HDpYzCqfJx3Tw625pseQWrCjHxGW5ZNqZBsnvZv9mjnuwY8eanBheiTvYY85FxQD81eNdbo5vs4FXm48GMWjb",
  "key6": "29mZGuT5zA3EBB4tDwWuQYPrYpfkxPtZXrAPGx4h4pTkQUEQogBArjD7KpXXhk9X2zDRiLnzrKBRMfYZNRQ4sHuW",
  "key7": "5GN1z7M8dEWGNXenWfTqCKcxi7o3Uu3ZHTPzsGZpubmu6c5ZGBaNX4sQGn27WVfGuy5Poyde2KuJYt14CerE6sBh",
  "key8": "5j848Ha22B8yGGJjDa8tCzELuMzpWnF4RKVLRC6Cxc7qDo2iGWtY8KJapLTK7VoewtPmCRJWpuqzJPTemJuefjXV",
  "key9": "zWVPBYdP6pG9jHQfouzYL9tfCg1LtjfJNSvLWVWcFjAxeXSeJKDQffPfYLyQQXyRrX2s8smwU55p6N37wvTrimv",
  "key10": "4cFtDbYU54agpnf2eBJkchC61StAnF3tyKCujkfoecwGJAkufNNe2orLoCtYjmYp5y8dfwRkehW8RcfvBAY7rgxo",
  "key11": "5hLnnZ3ae4EfkgWdMKR8Gv7CZR7XgThi3tWVRb7ewG4nyBhQfuyyrAuDb2KYSD9CUx68kRYxuPosAFcw84UHSSqo",
  "key12": "2t1LgWL7RcJvLGrVzRhFN4E8XpPkjcrwmeYZfG3jFhSEqJNh5UA9cWGSAUFk3H1rQ4cjeUeRbksRAhotHD9uQtnM",
  "key13": "2aLa8GQA9ACwDiPZyUdYkxf42yDuazi2KB6Amf6NnotAWBjeafWbRV71xunBaddJuQRvDbPjkyQsnYgMaXhRkC5z",
  "key14": "38RpLErhS8qyHU79xUDmG6zTdeFKa4TPs5FDBdoeHnXdEkTjbq766K6tp72mLsPeWrfQk9KZNvww2tngXd4ejucK",
  "key15": "5XoJHDejwAM6hQxCdcVMEKJQN1V2Toco51hcsNTYrkvaqbaQ5NBfLp2b5Hf3aC2D47wbYD6VfoThHA64Ln6tJH2y",
  "key16": "5UEaKGCB675ipg5Y5q4pRGp5TDCKVGvxFz5QgFLgXMn84zGsZu6Zvvu8T7X5veHS9KqQ5TpHnVCAQ5YS1nGkTLyV",
  "key17": "FPgaeVF7sLK3C9g2hHo2sey7F1h6bXcSpjEwuEELgpEK8ZrLppmDVVkDLyKzfsEFsBgD4iXp5udCA8PXB6sKXXg",
  "key18": "4F7K3whHhWy4AG4Bh7UusGcSNVq8vHcfYSQ7fMt8bApLbjUihwskc3SLrYJqduTFYNaWsCiirPcGJW2vuYDmpKsp",
  "key19": "v3Jv7T4m8zF4QSnrBXeVvzejeCuwT7iWPzi6KiLa4f463YQwoQDVTmSxgx4kT628tKBtWigUCpQbB58v2MTnCfh",
  "key20": "288fbayb2ZTawHYtBvABeYVvk1hiPxWeAnYUoD5NdKXCb7xKjuzpP1MHeQgTM4wVUtb88V5h7Foyq8jWPJjaYqCM",
  "key21": "5zzjXPsj3WQmTrqaPj1PhdfHXQwbAWMFKeBdjUEQqqUxtQgT4wZmpa5tu5axVqC7exxsHRSY6gVB4LH2iXF45jPr",
  "key22": "4BXNy1BwuRyJpogVtyc5d1Z62mnPLrBnZobUGPGztCRtknajY2v1bV5B4TFNHaAEN1aJ9uzwkvTG5BJiyf1puPgC",
  "key23": "2sqRPPBG7j8FoYqmVeyjAoGmL1RDxUQXCYPEzTBbnyKyq4mPsjPgF5zv1FMQm3fQGVu7FpjaoYRwvPof6LNcw8QV",
  "key24": "3skLXBB34ZFvh5YuZCuZEyn3Uqzj68woAaTsCamUEWMoTytpmuCweSr3mdkUHtJ4cBto93a4UBMEHH4HcvE6s3uv",
  "key25": "3uCeMB7TDzhDi4Z3tPSwsnztK1xyGPyXzAvBtUJmibMwDoZFcgSmnj8qWmEBTSQeQDPPMSMb3i1ZuJMBsWx9xLDw",
  "key26": "5juW2XNKeAjWSQQ47EL7qignrdqoFXy9xCFxbEdiFDyGbzSEqkN1DViJ7Wx69ejTj7ndtx4DLBQcGwza23ridxg4",
  "key27": "4dm5Z2FHqtE5i2Xne2BCoAvzYitodUiFzrKzBg5J1YAf1SKmghx5j5rm5ibeDcK1XBRbLttrxv4R8JLtiHqmhuZY",
  "key28": "5nmg4229rGiZ8BRZjSdxGooipEdgHiozgBFXaGxNfY5JKhCACnbg6ifJgg4KFY9GE2Mke8m9SzkU6VP53whmSk1p",
  "key29": "NzsDbYy7tNn3xsBE4QB4cHa4w6yXSb39g8u9pqiYhMVzReQxXf3GJF3q93uPUPCZYzqFFv1kdZHeyBBeBqkhE2S",
  "key30": "2XwW7PjZJunBoDPtzAk3PxyZX2B9RXQ2b6H9p4AqyUdE1o4ftsu3QxtY2ZwJa5DcbVZkEJ6JMcYQhx4ArhnyqS2b",
  "key31": "3s68TMKL4YnFXbvHvkXMQyA7zLfPn7SxH1Z3yXTdxwo2rPbAbN5k4BSfhxghH24o7Lc5hKSDyZw9Sr77uYu2cVLj",
  "key32": "3fPmLNusxH9HakQPJPJfNjoLbHMbauFQ4Kdx66bPufUNVRLHrhoe9aLEZ4irGMhSb78YYf6ZzMbeUNivDbvj87Jn",
  "key33": "5KumvM5xAvXXQkkgxABJvJgJ3VptsyVvFuQRwG4viGihqcRWfAMQVg94yUPw2t8QzpDAXzrdjFY53S74gZzdtxRn",
  "key34": "eHS8j7BtJcSt3n4cErTawe6NSs1B316vXHQ4mxmyUTnq97un8N279PjP6fw2XSWbzjuGmPW1oZaUigo6u3dhYwL"
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
