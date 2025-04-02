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
    "2upHxART173Xju1LvfKd89sUrknTjroeg3EaSKs7wPbErd6A58i3dMikG6vdR6ksB8Q2niHuTcusvzRhMV3fnXuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RHDKRfvikFpC4K2yEK9DG45VNaHtHy51bs859h4n8J3obiyTUzJvExUP93k2qUA8gUvB8LFfNkcrbysrHMogD2h",
  "key1": "hd6Z6xthSNuNDQcRpnmZb6dgukNibuFRBH28mJdbjhAeyigVVXx9kCKczZP1BnXWaEfWxh2fRThjorzD1LnHpj8",
  "key2": "4GbyxCB6WDXvLmEePcYUZhMbRpfmG2V7Gx8twiWoqaq8UDnuZ35fuEMod2XWUCKTxJv7a2Ef9BqakZ7CQqDL9nbU",
  "key3": "3CAr6EGJJNaQz6xK1GQ1TQydnj987BiQqS7FEotNyB8PpvUtdf4qxAUD2NigXLDyfGXgZRpPh44rCtGTmBhvwof6",
  "key4": "5VqVbgU4ELzLyYLExkgirm6qiznzgVs9JMDZfQ5UWWTpKJAoGV6iXq9BDfdMAd4fNuqw2SjPEjbYU8q2qiiB4J4i",
  "key5": "3AhaLy7JP2RXbnWhytBWswTfNro4Kd4DtWoHtgSx5SpSsBK4mH6m1PBfyJ7mh2oU81w2WBehiyrBVjBsL52RZVHT",
  "key6": "243bUG1wcEsVyJraajX6YTYp1QQRLfDfegD1xQE8WQqFhA9AsXhtLbUGJ9CVFXWcZK8sV2SYBebzJhVbPex7C1RC",
  "key7": "2ypde8zdirMeZ39bSNBG4m2bRp8qA2UJ52MjaPxjUcMKVaFMviUtc8KCACzxD1VDZwLhatK2ZqXjmA4DgBs6KVnP",
  "key8": "DfWpbY3b967YLgaNCdYj5u4HkKaEbZ5xugVjZ2WtK5FDX5f6vQHhR6wsqZwzDhyY1EnXmmbhj4c2ooajabpMsC2",
  "key9": "5ZetKx23kgwU6vnvLNec78f7eVda2deXm53tWJxm2cnBNwF44iAZJNhxYuhSPibvE6APXMCeXQenyeTwZVuVCRhV",
  "key10": "DArXFg848Jgihzt12SC2Y8TCkB3qU4B5G3gJFk4rHeC3aczp4yXUkXqu9QLChBBazSdSEV5cZdwhoPJ3hiGAK3m",
  "key11": "5fPAYBGQ4jhufmSvENE1Hu49fr1zeqEEwQ9zKkXJovt9mwxdgCbWHBdWACVidEFTfLtw5T7F38oZZptrc3x3UtkB",
  "key12": "3AoJcM93C5q9CbYvUD7cKcgPW1ZJsZdaVzqBc4XJL4EUWrXkQiKJ4U5p8LXCdebEgziecXMQHPicWtmibBL9437t",
  "key13": "39wRrfW1gKqSu4rniLP59LGbhek8DFQdw2XoiXoLni31HYJ8VbhEmDYpLP1YQoKEtPmkr7Tj467pwhf4x1rhjD4r",
  "key14": "Hv4ntw3inXziam2RjbQqzwPfJBAPVZ374KheNcAN4vTDs7ZCg3om1v6ANH45H5tuVqcHPizDzrBNCtrSUaNwZHM",
  "key15": "3jxYMkcNTJG93UVUNH8wwUYVsY66gLGoDMG5G11EuTWCnZiYtsn84b742RWqv86owW4CFXXGCyDCDqgVoZN8Ug1v",
  "key16": "5Ya4j8AmmZGzfSKbPRG9PaQBwFtsi6j8nm15XUALexBqH8SchVvze1c6s6gySNLG8VbjUipDAu5qx1BACMP9iuUP",
  "key17": "VB5KMhCZQ4hix9YmEkLqUNShHnZfBLaeeHm5itRFwNzth8XJtPe5DFPckPpn2c3CBDAuAiN5niZi6WFdUHrvNXY",
  "key18": "4pnfPmonxwU6NDDHN6w8jrDyDTDnEYTHxt5atApw12XnPbH3u22aidEuXZEJ8Fu2PnkmBN9maJEpwzBwFWHPwph9",
  "key19": "4ittvS3rW8xKxm9noY1cK1NK4xoqNHRBBY6XkkqzApbPERACaV1m7sLr9ypc5Bv44LNp2sqeXXZpXfcUS8FJigna",
  "key20": "5xe7b1T25M5vMhakxyyAZzBtt7e5g4fpMcYoiV1wcskoXb4x3fkVYTHFxfus9zd4coQoEiEkbna4G3pjq91bev95",
  "key21": "2eGwjqkdF53CqPjARQa2CBk49n8X7W84DvLLKkt5gnJ1Qef89FBj3u6ioUq6ypSqUNjZMY6ej1Zio4c7J8ChGdNf",
  "key22": "65r1QEwdt34GvSWmH2FQdokhTgFQ3Bcmsicj2zYmnb5GKgvXA3AhiSGungjvLXzsHWGSbTvWXUxXiAwQXZVExSSs",
  "key23": "5gmZyZQ2mwxoCqJXh95UB56Wud8gBRQVbZj2RbJQpMTV2aneYRD23V4Vr2TGCv95qfUzTnGxCtL9Y4d8ptLrneyx",
  "key24": "2zQpLGpbWwLPN7vH4SktRWiSrzAC2naNcBntTB8UU621tcu7fomoJ9pvngEXtiSQE8nQ81he8KxRCq2E3FVpuJC4",
  "key25": "63LLuJEdzRDrozqdfno3UiEFTVZuzuMBbx1h2kXGcYZMBXSFTw5TftasArYumAbXMCPNygsvQHyB2ejj9qUmuyda",
  "key26": "5RWhozFJrYdma4SjDjEgqQMXpcGUjhxRLeJwUN7UrrVMqgkbe9Sxjwktz99qgVdPwjn6turRztQQoWA9w5FTD2C",
  "key27": "5jecWDSzGKauU57Jx2yXBERs37x9xpvqNniXf5ctuKELteKQanhaPd9RjuewGAdEXM95q4dFj27FSEhsmUQook3c",
  "key28": "2R28cgY5in8m1qdgPbq4KBgB2FmGZVdqN3iqh3iaC2nuBXAq7sApwoFCNKZwnTzg9i7DbnHY5efbUeEJC1AP7USK",
  "key29": "41jrFiKo22a3h7AsmkMcxMiXVHbgs5nAZSanyik3Sa9sfxMn1TPpmaYLSBWvHsXPDJ6tw6MyYM8h4rvLrUickjZH",
  "key30": "5BWtjFtUTNknbppFiY2e2eTLPrW48QgxJ2sgKF4UBDfmMsGWp2EmMLsiwKhcovxLcRNHFfWgxdJsKXgL8jqbyzo5",
  "key31": "24GfZMYnLbV6hq7LaYUWABLZGgm1VNC8m3ZdBP9v6ft9NQzM8uZVZq3b8UAWXb4jBhtdDzb2KxcBs9cYaEQHXDir",
  "key32": "65GpZLrm4QBgfX23TuiJGGbgtSuMDYEcC5NSmwpvfMBk3CMZgkEbS2uxv4Mb12uToEHtzEj61f1Aqnfp9XFSQojr",
  "key33": "3UKj8KtB4YnUVGKMetWNqXqdecKKcRrkf8hFvXhrypN2gz4TB5jXDdgwm7TwvtzjcrsgyzUz5sCqEHfew6KMTCTm",
  "key34": "5hFEnhj9MvFaL68Bt34KNuVFC2yUddmQHyBMAoXDfmCg9jmmtXWuDJfhQeqJt1VGPH2cvCwdEKNZoyiGNytS26sQ",
  "key35": "52EAkDgsmFooQtRMdnNBusrcegvC6phzGNxXkHWcTRw4Si8zTmNor2LoKSmW8KLHQC3meAxMtNEbisCc2nVHnPwP",
  "key36": "5sBmxACAJFG3DR38DqgASzqCuSfqwVPsowDE2fEmUrsG18CqaUhzZSvj2T5YRv7s6tffM7DSeiWQNztiJLGWvavH",
  "key37": "66S36Bau3BiNoJUzzn78TNCWmcD8sB24LTChSVyXTikgFfcG7EZE2uiTBaHkXSQ8ycYbv3eQuf2GrBDr4S1jydHh",
  "key38": "f3M4ozQ3WQc7U51cRs7KT9sSXWXBrtEJYiY2jqSmEuWYGbZroepohQyyjZh6TmaQFMozKVvaqRLCcsKKXBsnoUb",
  "key39": "3CgEfHj1YGTmEhuoFuJokTVZF8Dfov8togsRZLTQAgrPhDTJjdatkKQyet9E1wCLgwuGokjrM1cLqTeuus6P18Ln"
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
