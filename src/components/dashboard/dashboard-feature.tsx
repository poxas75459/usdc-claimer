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
    "2Xo8kx3BysgtD8xt3sMQ9jMnnEoZm6UZrXwV1MxnpSyrpLvzcSr5n9hDfpYmyb5UtzHfLBAJCjkMs5krHz7tuz4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y5L9TrQYDckF1fckkUXDJYcPSH1Gchtk1DWX8CMzL2pMgqGtaqgKZ2t8pGWtaCZfKx6waTK5DtGGaFJ3mYpGwmY",
  "key1": "4xLVK4tQhXeokxnDk2W7vdb7ASxx3iQBw4tQEMtvLwupXbwuYzwkBbFffoPy18hBr19z9h5JoqDz8cBAXy9vc7uJ",
  "key2": "3oz3zv3DKUPa9fXg1q6Ko5QPtq4tvjgTce7XcvxTj4GAPzUMV3DYuzE4EnDZPKPcUcE2ZfPqKf6fexfMuUk2s2sD",
  "key3": "656V79wzCg1h1ZVhHmUcZ4J82P8LRRNNRA5f2nLiAwmHNgcGdxaZfDqmpPhyEcxSTiXUAd2RvfgXmYamJ6UkmtA5",
  "key4": "57dnNGaLKQ1DmXp5sHT8XfbySK86LDAG53JUoYPmEn7sGZffVgqtbvxcJ4Qhh6cuqwmF5TecFtygjwvNN3Nte7sG",
  "key5": "wLXXjuGe9ubD1k4RvQXDWMyRCnMwzGjA7RfdrJYsago763L235wvTYdZDNfim42o2YZ7JgVmQ6NnJDMLoL44Tab",
  "key6": "5tZkqqECuzDLPXQtL68B4N4SAzMppCAMGh3dCTkkzipG3A1hf1ytoJo2hCxow9EDhqeP1fK3dLYH5UK82yseCJyw",
  "key7": "EGQnwSVhGHzPjwZfot8CRs75F14c1sCopVQ45R7ZUyNbBu7jsURGXwKoDiSsKHkQLbvYsbh8fGQG2gZK67sMX6L",
  "key8": "27mGcvQspBeyS3jYB8U2wfGWWND36Y69T2p7cPdESmDdHnyWJpRAicaofc17LHhq1Sgh253Ux6EYqc17eVABpyz2",
  "key9": "3gFmyNA7ohsBRcg7TqCMrbJryvDUcQfBC4dCkG3uhTpAMqwhEaF7juhfuwtiG6WWdFvPMdXsYGwTL93vdVTgwiGS",
  "key10": "2VVFjJWx2yb5szWa4zmmVQsbrUZzyrK8bj9ZaXKj3yztcBhDwruDvghqfomkjNJH3XBN2Dp8ryqYsZXnSAb7WTBD",
  "key11": "5rufSkFyX8c7BgTfJdkVi2zYmzgnSrEpvcSs1BCuxkm3cJGBqCPk8PAoVLvsB1kUrBx1eZNWUdXW8cm7FRLck7u4",
  "key12": "4HDVBMQfnwyfLMQNSWVhp1FuGqEG2Kk8DapSM6nP11MARNjRW9eMD5uBi1N1NDa2y6bEc8f6RPgMU7rtRfHxJ5Zw",
  "key13": "3kSEn3kRnMaYVuKqqQEWDixSoGgL4doH1Yjdp8SuEy7gJ9nKVGbofbPsvuTMDmGUyWg9EbxXbWn4F2yA6Ld8f92j",
  "key14": "5oVBVpMto3RQWSwHbyHx14CGY7zApnQZae9z3bB4Rv3RHYxBFee5d6j9Tfcf8D59KHVcparoPzFwVye3qjrrKUJo",
  "key15": "4koQeWfVRinEAYxjYQcLsJ3x7V1DKggNNz3K2oasX1ut51wC8pUMuTTbtjQXwo1bfPMbec5zAJbRCmS5sz7TXzP",
  "key16": "Xm9rnbMWRxLX5DqRwtt6NuCjiHBuqa4YzupExyPecdNus5EHjFPnMgAzHem99TsAJ7TpoBgxGrhpxhJRUDpNa1j",
  "key17": "58rW9VYjZHYgvcLL58zesm4px2obqJJxgMkk167MBjnscp8U4XhCgThDufx13fRd2YjLjiTUHpWqLCBCZsT7v3Pa",
  "key18": "5nwaagBZ3BQ8iyaxYVQrsr4xCu3K3YKbQTwNucZPbMKWyaqQYWpzjDSN5AABjPcC7PT94SJ3xVMLfTPndGJTri36",
  "key19": "5e8pEoXfrawbTF6FVJ2Bw9aHQWfDkxwJZ2k23onz7eUDes2GNjGMYqPbDay2feDEGTWWDR1jJc7aAtt322ZfooZQ",
  "key20": "3s1t7XowTU3VHSQpjiN7pAfhXMR5BtZ2XEFZ7qotf8PsEm785xjEd2jx1oH6zSb6p6HfwDF31Rgzg2scH4tgAGfi",
  "key21": "5qEfpEyYaeDLJAUA8pAWPiGhzPagrrj9Ag2v3SDeKaEjRbv1JMUBWWdoVVgpamx8ABV8LhWfYqXAR93B6u9R7Vfy",
  "key22": "37HXXGN2onZxMGTsDH6wqkYyC2s1Q3E5gUrBuKAoGvBLntrRPXvfJu8XKHW2ZxtqQ1YGU7up9d5rrAEfePDb7HX5",
  "key23": "3EJTP6vCit37pEUwcitTo2bxN9u2TcN8sqJ9NEJjnSC8uhJKpfhYi8AQbseLmjzgp1quyVvwQ3h4Fen69JnJ4gpi",
  "key24": "4D7BydoxxwK8iQ78DcieMrvhHH8fHyYATKYqtvAHe27kpzKmTN3Gf1BeeXa8aBPkhGhoeFxRCcRho3BudEieAwTt",
  "key25": "KC4ern7SC5GqSxvZpBnX94tNnYaN7GVCdRExrbetAUQExot4pvxZRt5mnFJtaaRS5DGsJcieHYJ9s2LFEGomgFP",
  "key26": "5Hcp1DqfBc6fFFqnkWtxsGLSNQa8y65eZ9ikhd35yDiLz8iuHN5qWnJ3bu8buoZ9AMsiFZnJphrVqJEw8N9Rude",
  "key27": "4raLEhpuJoX55E6GYm9XfKmyz6tmN6jnbZE38GujKU1wAmZqoMCHPBLjNBbX9tGZAWwRRK1a65fovWLRGcL8bDXp",
  "key28": "4RQk3N14pKfmdnh4yJVnRc8bF2bFDHY3csKCcoMu7eTGdyexbvFiggm7yUDpir1fuRAyDJUoWZb1oWoJahf2hPhB",
  "key29": "4ASf7mJSutkUjJS1ZGTFhcBtKHQwGgHfpcm5pR7hb1Uv1fHJAcjAKt2CtxT7MJPofSJMY4xnxP3fuAwGdYVE1PH8",
  "key30": "2MvXHJtLRxz44NEitAqxXGtpJM2Vd1hDcU2pRXidMkhNT79DzVACCoHPc3GnPXeztiW4FXwZ3pcnvR6NYnD6DBf2",
  "key31": "5uLVrh8XfxE2Zd5ttdVCYKY8JSwWd2fiWDd9BZxvWscBbhfRWNtsFhUvB8BFtBpN8MwVSF1WXL2Qd6uDt89G4tzx",
  "key32": "5KcdJFsPWJ1HtYo4wrQwiB9jeGPTMF4HmQ95wPhXFvSBRrmAuQeSfgSimNGNHBu8pCiiAPtpapgu8JtByhEvmkCg",
  "key33": "34xbc4ynSe5zqvTZV2cHffAiNd86MGXwuc9FHeEXAYzjAXm8hdLX4zSA9zt43XLrSgT2qQSC31nCkfC9pQwyZ5tg",
  "key34": "3XK2JAcN2oTVSQZHFHNQVz9LE6VpXShEpdnUse18MXhe6imEMFbfkVmzk4GHvbtgJYGH7kjaxJf2upq2X2R7YkaV",
  "key35": "JX82DzEoXqhxS6x7mLGQfFDSa3ehh27zWQxQpZZQRTrwpgCMitukza45nzJnhv1bkaj7YrVYYiLANyL46bu6mWJ",
  "key36": "32ULsUxibPNCgmRkGLTGzQCMbzbp2zcSvW1hN38vENS5uUmRH5CMbhau7Xv39QmX1CrQfZUeVFzeWxjCTGDRxaQh",
  "key37": "4LxTJbmB3Z1aME3ww5FtEeArTKEvmK7y7iDgVuSvSF3crKpngLCXj3SbsQBag9TypicVbmEqw6rEjAa1eH9319cy",
  "key38": "2uJowbGMouShBxGCY6XZz1j6cT1N7zeBEPP5s2jP8dhHZXvziDQ7o61tQbjasYmBKJbUQ5pVvAZcB9GibBgYNPck",
  "key39": "49gwLqAPSpghqemGPMBEbHUjLwyFXaHUTCyrRvFgjcGrYQH8A4NG21YACLKB7Z1Nar5nbuKdPDfvYbsqGNfSdagb",
  "key40": "3fVrNTo4Vkv98r1naW7Jr7D88kA8duxksQQSDomqWGeZpLg4jQvtchSBtoYfTTBg7QcfYWDxqKMaEaLAm2bALY4c",
  "key41": "3bj63MejgkHWfpyLhCoyZtUnuoE2yuG3DBig7CpTgfo7tKPzEy8ziSbey55zpF4sfpQpjFeJFfQ6LfArHCj3Da6p",
  "key42": "3G8tXMdzGPjuc6GdvXN9zq5kh3YVUe8byQfZJ8Zq8C6b5DxEFf1VF6h5gApqGBjA2ckKNvzZhtJbM9d2Bb4hVhfx",
  "key43": "3eHFXzDqFjBjDVAGifPKeHPYhiRwEzr88h7bYy4dhzxnz38gZgfcdenP4yyNAvqDPEYvnyGN8vVaosgvTEZApt3b",
  "key44": "2JUR5hWCkzV9NNZGkEZDwQDbcjqMphWEz6ipCpvhdVpM5bxV6P3vncnJGsLqgc8y7qRM9RuvyX5Gmru2irDYtSLf"
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
