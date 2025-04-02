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
    "3jYSJV1i7nzaXMJG47oyuyfDxYtT3ZNGGN1bNvVECkq3koxPGxFovtHwW4MTMTWPy979SpznUu93HYohQCPRskQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PQ1vMGmuMux6JHn1A3hRfpPbdJ5Qo5TME5zAmKb7FCxr5ztuMNeEBJ8DaijXXGRSeTMqVgSYgoTykLPB4TmhRrx",
  "key1": "2UjDNmMTayoUQ2JZhWgAYHi13tRMHPqgE21WHYfp2iDPUzDYEzPpVXV3KwMWPicM8Lx3p6XSsEAu12uxK3p3LDy9",
  "key2": "3qgTGfpY9sB7nuGMTqjm5xv8GmTGTfWC2aSyKZCfF9WZufumrdhm6kmXctZPCXcpdPwqRiknAaiMpNJ7VX2inZFz",
  "key3": "4wM29gWMQ2s9o2bzahZhGFBwXkf3mXGj6zgsgQebAkKWQizwDGcc61JKFWSER87YSxqt3JeuFfeBmtPWZUidVmtg",
  "key4": "5dobcuq8FzFQNTEEiYwKxK9v36nxRRQ62zwAQZFR5QjN74LaRQ4WGnwJnjjqDZ1FJbXkUYboUtJnbe2CWFCYHapw",
  "key5": "KSh7A7FWgY3cizWpDMLkWRmy9QparzVWUC4ai4TMEU9XF1cXhLdFbHLePKv2tnyKxqZk41ayEf3KCsE9a3YnHkK",
  "key6": "66rbvUY7Uuu7oKpyY2fcRtGdVEbs25vnJUY5t1XBMma61urFdbaxBZcbFYXZaRytZSisXH9eDmHPxSvKYSSafo8d",
  "key7": "p9tqxFdp1YY5DPCMHayqi36ggEcfABN22cekAgexBmdw5RMbLvPhF8GZ2jhVqEVdyaPViULtq88yMVsLUPrVFi6",
  "key8": "5VevsZD1rjPdoeD6bbd3mBXzkyDFVyu2K6qgZ1Y71jged7VCsPtsYbxv2rq5h8N2dmFTAFxRtbz1Hv2Yimkfm6FT",
  "key9": "3jatfwns4e2gfPUiuxZBZxZ8QBreNUAiDyqUwMoM4BfxpnnoTJVGH5sSn5gkwQ4mrm6uDkwyCwPZasrxCeruH2sv",
  "key10": "37zhGuy1JWNj1JEJoY79mHayWYLukSi2UX6mhM4DxKAFSsC21aAfXLUYfWnuix55nCAFx2d2Pjyg18GNN7R38hyG",
  "key11": "26nZrVDefZjgzyHaA4kxuWgPvPzV1z28Kv88j4agctF9HFtTiVc1Emok9wCzvcyWTyqywthf7UgRH22c5nE59uu1",
  "key12": "4GphochxX36p1uQfVaERBtvNGspJtRVag5j1QqxNGuJg5jLBBLGb91jkn8hFPJLW3kQwr8X8sR719apBG4ZHzEiH",
  "key13": "5GCn7NHSkntbjUwhWg4kdhWSs9uYhXG1a4XhViGBLAYEYeuJUR2CR3u6urwUthV8aZNfrxJyLGa4S3bZEE9VviwU",
  "key14": "2Ut9gjTg7ZGrao4STei5scpFzQjMfEUVxhkDnu5ki2Vyhu9b7cmWgeREtT3gcF6kztXs2pscWAJJV3CxyRTNnmLV",
  "key15": "4qxbjSHgJAfX9aLNXLeoYB1dfEwkRRdBc621SCqU8yxFh7vXGkZ9KPcop72q1ns2a8cNT122cEZKu5bf5YTp4TeB",
  "key16": "2RT5f3H1iy8tVqLiDZXxSSUbrjvxSWz9TNvymjTZX9wU9U8vvzUQyW7GvxfBdFKNWoPaTCc41Ja2xEQkcgqikVno",
  "key17": "5Mn8xpf7pFjpEbQcrzyi2chbcEdPRh93SFK1EC6R8GeVk8LaChih9oJkGHowWHbmdfSZkGkR3ZiHVLyYe1HMEeXp",
  "key18": "5yzCKsMh8MeSr1zziubiS95YD5BA6gofrxbSqJvjGKBee1m4HE6crUEvMdi6LMVPFpvNRepPcdubAqG7Gdz2nVKD",
  "key19": "3sgLbSysg156MD9izMtuwM6kzdxZbXBzBR6dpbAegaF3UhcQrTQxAjrmqfb7FdkYNwEbFjdYSbjXgTrpWd6QTYH9",
  "key20": "5gwcNzYCrQEc2paZDtP5KVjfwpnyvNREZSWYx72mXxCT7bPWreBASspXsypPZ3FCxvVakgSHMMnUwGzywkbSYtCp",
  "key21": "3L7KekabhVqKWCsPBX9RMKMThwxrnbBK8BuBVZnJQJB7QoHMAXjTrhLe724ZXbwKca3XE34dtVqewyj8z8QpFVwj",
  "key22": "3knNdPEoMAi5YxkL98r7euJkxAqvs7DiCFrhN8MF3GnXVyXSQmrEqWpQZCe3Gns3V73ZZwdCA3eBuyAKXj1k5NJB",
  "key23": "3BCStkETyKGQUZHjSxGXQgWus8Djng9bbMiKRiAx46RHXwyUe6B9jwFVQZ6Pkgq3LGtzD1xbpHKtuLdJk4ak6fV8",
  "key24": "m6YMZgTbXZ66wkwwoa5Wp4oAcGqg71x9cWFkpVpVqDYjEPjkLmigKR9mEF4dfKMVAQrDRr65D2pCJWWLhAWnJEm",
  "key25": "436ZNJoy5uHWMJPvJDPKtM9gUUAaJjRmPvDYsX99a2LDSeMSfuPUYd85AWqNuKUgokVbxCh1ve8g8DbNDzMXn64s",
  "key26": "2CWohWN6nQX2JwQSZr2ozsbWAiZHraDd3DEuRKZA2ZE6TEGEk6FpZRcsErWJaBLewRJXCjkfY7ti8FteTaNuaqD",
  "key27": "4XYbQG9y3Z3ivttprd7niFa3AF58B52qxHMwQ5Lcmw4aeXEusAS3zJdfxRuVenz24ZScG66NcmCYknYdpCu3Vxbm",
  "key28": "HxkFcEmr6fcw6qn73n6h9wBYXRn9pnJXA6QBGSk6SvZ8vWDpw7F3duiUZfwZsQ6b34MWUjmDhDcJGf3nEYgiPK2",
  "key29": "2kkdhXpK4QvrhHLsdERcs62c82r3Y5hhW7nZ8ARLD1BDSQHcm5fYVgmYufv2M6ZRzVzL3vWeWRaGSNzwCyf6bQ9U",
  "key30": "4RPez8wMXLBTdj175m5UjqtwoAQoDdgnB4gnoWHeqgxfKNAmUd7zQfHuYtb3JXXAAvyzrHanHDLQHXQot7BfSz53",
  "key31": "286DdCHpMaK6fWwmmpgXTWjRpW9DGz9ezc6gGtBJHpaGcUQh4WiV4nGpSuQpzWGGeanDy6QqMTjC3t9MAnf6ykQY",
  "key32": "4hg4doeeBzJpHwAUcfkxtFFg1YNNkZiWZU6padGrzJCV3YYZGskyp8NsfhcX5cvZqM2FFbEgvx8TcMnuHsz6ZhHy",
  "key33": "3Wj49gRocUHtgbBVYA7GJcQFtnhU8pwk3gQPoz4QrYX8wmQmpPQdQQDU7aZqrAKJah6V5G6WSbemVqvwVboohV11",
  "key34": "5THNP63u3duzjVyC9Uj9WiJ63s8MZY6n3yKLw5kYvkBELbR6D7tXeSnXMQk57vhfs1aJVLkYn6gHQnzaxbBb6Gh"
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
