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
    "3qUs2ngFGvJadZGcxEHKAnKSPvg9f3EqJgtGUzBn5i7PUbrixFgKj2s6oPP19G9xQS8pvd7zqzuz2JgpJ8nWeNa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xitBL211VtsX881vNB29SmuS9dBeUUcBntky6UFrMqvBWm6p4jbW1TcwRd35LwFevRHmzcYtoeGaqDJWeMLYjiH",
  "key1": "fngGErLZ6Y5wAWFGx42dwpScNyyAk5ggso6B91Yyit6DkNfRn25zfcCY7YkRFZHut9wAzGExRqFi6pUX4y1mgCg",
  "key2": "3oHpzf1zK2KcLjZhqv6uq64gGMbP29JcDPEQM4s9DXJMC3tmDoxZo9Fv6mw32hGJZvUeZe8ciEnJLjZUBw8n7XZC",
  "key3": "5uCpCeoJ8aau7nDpERwmSwZveJaoreRMEn2GGP2P13A6MCFhFiVYebuKi5Zd8ENdyKkZ4kLAziF3RKqW21hFJ4gA",
  "key4": "3MseaF9N2EugeAKNcd6SZPZay6Koc5qq2xJu8vzgaunZLzbyGhMNKhEmEhLeh3dn4ncxdZtmvYu1QaLv9K159acv",
  "key5": "4wTgcBcE8MJBpAQcGUeaEc8V5HKKnKxsaHtzoB4SpsnME4XNokf8PT7xAnYr6AFMFSRDFSFkf1AJFZuiY9VQno59",
  "key6": "4c7EADyC5f1UtzUZt2sg6vUYxtqZ9EosdTRWG9CGMe6kRjxHRM9sifz8oT1UAkqkqr5WrihKME9M1K88FQ3rPtfH",
  "key7": "2nezRiaYacPoRex6BHYRxQ3nLn3C5YnjcFNtb3XQRkp3LBSibs4EWihjBUVPzxFVnfsvaVxVutLj1Rj1kytCEy4H",
  "key8": "4KR1vi2CQ4GPPxVXiRpctYBhMtmE4AVJXRg6ghv7weEpSsPWe1aCi7XBJGMQfMD2arK4CkzfQTczuNC4LwVcCHSH",
  "key9": "5aQ4sb56q9LtcfnpcZEoMsHcQqi5vq17QtBQUevnHnnsut3posuvfcUQuRNE2wxkJSrz6kZchVBkdyjzrnNjC1yj",
  "key10": "2TJ1MqxBnr2WuNFWXrdsH7rHRgNds42jjW6MyABXMwtVW4gkMnbm7xyQjZfi3BGeLBvMS6JZ2Fh7W5qxccinrs2f",
  "key11": "5s6fq52shzM8baDfW1EY9yxzrKx7fuhDeBpjReVrbfuUimNCXnz4g6DWznhez7MRVt5xnSkAE8BwE7YTNPGzfxPd",
  "key12": "5qw8hh95UZeSH6c6bue2kLrEvebAkZzD3tFx9FnURziWWio3V4rQ7611nVqCzCpHTyV6ckujMQFeYwfzY3D2QA2G",
  "key13": "4yQQboKbSF57nyDVyt8SroA3wXge5gg4tuXFSyQvjbnQy94GRHhkq32xre1G7zSdccQyCwkC27HC4nmjo1SKYsHx",
  "key14": "63QuzX3wBEDv4kRSqjUUEiQixpTZG6G4VuGKYmqiGnGwzhG374S6TzmfrmpyMsGuDzzhTVjJR2U1BvBBy1gYN6fK",
  "key15": "2xdb82LTeuvEheo8QDV7wYMPsjujnzxWqt1BVusbgqCUYL446N942g2RspL8AbCfoB4jABV5PbgdKNrCTv6BGEBr",
  "key16": "2EjC77JmmqcZTBTTTU9moYVLoPV3m9G2MzxUHvB5cEjtuJ5okYv25ZHuDZohwJeqvywJxSdcnkdHkJkhNZt2Lqxz",
  "key17": "4KDXakWM6HQNrK9cRd3XeaQy2bAyByrSA8BoqNxeSgWjjKmdTedAU9P4trajqR1Sys5QgfzLYGAqRXiNQq2JW8Fa",
  "key18": "3Y1gJcThRauWz5FcXab4CSE1mtoao25ZUB8oNG6sX4CXNtBhPQjGe5XqGuAHtujAtGe7PcaFBmfVmvC1VidzcJSj",
  "key19": "5ZmzBGsHKEPBarcGWNxsmd197Hbhn6ETkLriyNqk4aw3yzC93F4f9FrBdYgmjRXETjeyiWC13jAiAZfp2Wpm5gpS",
  "key20": "4Thh6w9cDfwgVxd1cxGPu76ZdMdcU4CcAqSD3Tzc3bJ56cv45Dt2LNmYngX815hfquPfdzGSjuFYpt4aXuQdJL4K",
  "key21": "5jdr4r6eyJjz1ep6oFXAAkCFjnkqrNKDX6p28PXTswbkgrX1nWs1HJ6oK81ztg1MsaBP6ympZynPzTKtcVW2VPJu",
  "key22": "5fvzc1rGQdsyfon4heGkUUFvRysDTqM3nbgnXrvS5VDh71uPkZv7rKBadJEaSirmTzeei6C4LUCsuzzjM1Dpi39a",
  "key23": "4CCcJ4dSBiytoEmxaVFrHsy3LdU2fjFcPojZ864PUuQgBCbGThF1iebtx6QncpJxsFc2ZYs5WsWN9s4Y9fXiSHC3",
  "key24": "62Z37LCTfLcEYGcjGRpGLh3YjNL3bv4VHk8GpQ8b7NdA9CDP6WjB1iR2otfwU7J3xDJ83FZweTThh7aXjpJGZHjx",
  "key25": "4ETwMWnGHSFN2CJhNyGKusG3PsPtWHy5foHfkap6NhzEaAgAx16yQzDALqzrMUvwfdjFa7hRALMrP1MHKU94q1Zr",
  "key26": "XDcpxapeyDBLBn4mdngjXguY4PwEbMFFNDJmGLEKKNnoqrbE3hS4pXC6QaKaiiYvLVtvwbti6x5WEra4sjePhRV",
  "key27": "39A9DmVWcCtvovGX588LxNgXiAnkzEpJhSBca3ZZ3uhGT62znWCKZK314CsFVgtTGEkaH9RQhdQ3U1Kuh7VsoDfQ",
  "key28": "5uN8yfWmfWqz1w6shh2hXpFVME7QNVMt6qqcJNYaEuJhJuPuzH8ox8MZNo1sELLJF6KBDiRWD1hebZi6E5mpBeqf",
  "key29": "3c1mUFd8qBDbRNxJX6EdhXVeBD4ifeb1gEgUSg7QftYqtbrdGtA2in5H8h1RxU7DWpY2zLbQzytXAVJSFzt3hdU6",
  "key30": "3bieQJyyVbLPKUzGFrMbFjsafNhh3kg1xLcjJDWsP9GtSuJ8i65iHz51rRkxrUAdGNUCZKyUwb434XJm1xHHnxjL",
  "key31": "2esq8NvDm3vQe4BZnMq6uzimu5DhPdq8Qw5m8MYxMarvpvmJkRgbRuTH6FMhrKfaMgEowDhdXpTQSi6xe2SSmXhH",
  "key32": "4naXtnWbuYXHRFbzx76VRHW2WtKGwVLR5QDi7brs4LpbhkQwFoCsJtb2h1mboPBAnAd8xS757o8xo8K9urSwoqK4",
  "key33": "3JGjjyjzghTRVE7cYzYahBmVABByu3dsnLzKogAVaSqVoUw4HRQTqtTPUwYwffPf5xf1SMYeCZN1AvCYGCE3AeuB",
  "key34": "25UQ9hX92pCajabCrK9UJH99PKmMrdWsQUR85EB61uqaJ5GWtECsepaFKDwvE4JgqDiQkj8D6KH3h9mddMEQXF28",
  "key35": "527iXG42i4eZU21uKeBy4iAKFMYoLztfL5r5VgYnRs8jRjVafbjs9eN4zSrGYyw9t9pLevNgoHeyPfGhgtNdbo87",
  "key36": "34E5hz9ZCmgKzBVcUH4GbhtYmu7ZwwmZf6aHgwGNGYngnMQwgVh8hVnZPTRzXERfMsz3GNUCFG4vJiMmo8cTz7ua",
  "key37": "3gpZm3V9c6TWQBwfoVVf8BZV1deoBfJWNvzfcQwaEM6mAgFkyWb1kB6W2fcfAqEvXfJN1RT8ff3jWrP9dh19ik3q",
  "key38": "4rb72arSyDM3w7uSPKfgFnHkK27Hid8LyZk12Qi3wMaMpysmYHPwqBha1Bfu18LTjZzPAdKYeU22R7hMagTZcj4U",
  "key39": "4QjuKgMZ93aPHxQdfUAYYTrEXGFYZmmfiodLhnNnZTpg1QiUJu5udeKwytRS8Qgpdeb3FjtniG5pnvRYCcy1p8z4",
  "key40": "3Wr7TXPaE3pp3Cch6vEUPM9Vdh9hKoCcP2XkDjzBu4V6sDknTCVxtzj8i3g4iFjPGBE8tKW2ndUpsT8m9Dgqt28V",
  "key41": "2CFazuapKygkrC1HF4An8v3tiVKL7uE4BnaTe3DEKPeYHFp8sBT4SYowNtkQ7q9waTY5hAVtJ5uCrtu6hQ9jE4ec",
  "key42": "3HyvwtJM3A97r22Cytg8Wy8BEVYPyqGTLbgfAn7hg9gb7AP2bcJMZnStPERxHyCbDcZ7ukVnRPPyTQS8gwHSr3V2",
  "key43": "5rKCPS6mFJ6eg1cN3pmzxyh2qdX3KYxV27DQv6bwNJep3z8kvFbxg2HRav34Zz3yjV5voJaWJmbkVSX4tHCxCjQA",
  "key44": "3AvYJQurnGJXu83YP6W5q1zeHJKdRvQUyxXPyMThVVJaRt65DUPvYUEuLP1UTDssKWUc1oN2JLdwsDU7NDToqKY",
  "key45": "WdQXDrRugWdGn8rDH3ckoWRksb9mYjpGTTVYmNsDYQKtBG6Wf1UoBDqE1krRqHMse636WMxgz54un5LRscaBaf4"
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
