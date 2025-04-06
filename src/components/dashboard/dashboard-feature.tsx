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
    "2A7iLie4NkrdbDuLfJbktudi41p1PsFhxH1bk9ns3SKa3R5646oUwZjUcojHU6bEUR6d7aS7mvKajWk4xidueqa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SZWbtE82doGdmffa11tFkNYKvPgR69aZocReeH9VCppgdWgnQyC6z7di5TtKHVdou5hJymVVskuxfx8dGndMfj1",
  "key1": "ZYEnEeTUSh33MCBSQSGDpCg9hQKWkuRVh1wCfrXkTyy7jBJQ7WekKNtBJafL1DCM3w8zg6VMZDpsS9PhYft2dZB",
  "key2": "4oNFPvFKgW6DN9JH7cNoGAzZrdRHmKTUZS3M8H6H8UR9Dy8QbpWAyEJH6bRsoNnPXhVpe9fvu2Z2Xu4Tc7PCfQyj",
  "key3": "5e3rA1Le2reJ4KRcgdpmvKEtFn3wTJnvFTuReVa3Sd8s4PVZbG7D6ZQQAyG4j9aDDATnE8oeyaipWFABLDK4U58y",
  "key4": "XFkxdCyvuAC5dXNZgRedqZYnjSN4h7oWFW4tzLLW9pYvT37T8D9tAo5HbV1cji9g7K8oVkUnumHP6tpxBicWVJE",
  "key5": "3Qcso4r6oxTMdaGMubBhk3tEGF5tSn9JNHWyRmVJGLf1UKTfeMr9LobZTXAxM7QEmzTPNBYXX4uNK1YgCVNXXMck",
  "key6": "3s8ENjnXBsMgScZ7576kK91yYPVeDWsfToiHA8cYfbtGG3VCxVTFp665NjC6y774x8V1ZWkVYfQnjKpSFLK6Va6C",
  "key7": "4kBp4gLPrYs7k9Vv6ypMDA8yyVDPn1YrTkwZnShJwy3QQNTeGVuPcKur6RQ96uoNaDRLZ4r95TGHAKu6haYDoEdz",
  "key8": "267XBxA9BEBpcwwyHcgdt8Pz2QxC8jjfgSKTf342S7dc1cH6Dvy8p3mXMPLM69D4J5Tn62mtDfXfKS6BQ5ZQkRPm",
  "key9": "V2LqzSoKaZYpXMbksnuQoo31adWyW5MSEpcVjfs69XnNmdV5M3v87E6pAPHdR44DHyTzp8VCLjnrQez2VqaShkG",
  "key10": "3shwyM1tnBcDucDLmQJJbU7eVzgAbGM4WBpSQicavT3QfFgNRQNZWayR2CvsyjzXVqW7ZTJ2BMUdanCgBamAeMeH",
  "key11": "3RMZViHa5hoFcdf1PhxAfeFknFsj3KJ4W5yqfhkBJZXhawg81QCA65QzgxwrFkRuGX68m3LNVseBozzeMdL8Du4F",
  "key12": "9KNW64RjbTCowXNBhAWCRPdxzVZwzStmcosb6zne3joEqBsiSrQXyb25aDEGakGMN5xEr1ymBthyL7anHaTy7bk",
  "key13": "4RfK6rditd4SYESwwF1TeWmxNie91zfm5UZ3xp7csPp2FsWyq1UnVz8zJNQcxrRQxMX1rc2ZetMhDWDH8XZEJS3M",
  "key14": "3SiBJVyfFX2dKmkZtfrCfhg4z5gHDTgJHPQE2HrQWm9ZL1nvm6P7EpuVCAze3hjbEFaWBX8aP9f621S9PRqEjibc",
  "key15": "5waFrXv8fLaVdG6UxhTo3pifTbzGad37Z4m9asu2fJqdK7Y67yQA8zt1fotT5pYHWfiq28dHLAfW6PuooWzgH7rZ",
  "key16": "3KyYgemb1HEJVyKM47susCV8j9guGNefDxhzSuigFj4UoV8mn3kKHSy5bsaX7c4HwvEKvGQotYLG5Q6iWw9ixRgU",
  "key17": "48Yz9QtaX84xZroMAxHqD9bWtjPoxuC3f5BzFFHtZba7U7c7td3oQVt26HqhboSNUCXSd7k2Lc9LjPJuMTZiw1DL",
  "key18": "2m6BdhYHEe28EToe2A7NrrDmLo8oPfkM1gFhTrSxDKs2ySjoY42D9MHJhyz1L9MYKjb93BBBU3qgp1rRBAUDXrUS",
  "key19": "57j9QQbHAzV2nfP3YAmP6YKP9H3hGyGNcaGHbfTg5M2sDBhqBxigYgu57vyvZMhgBExCnuUWaGptgUaVLdrFNBLp",
  "key20": "DVgdCerfg5PeTGAGXywVTYQrqvgzGmobVH5Wu8rkuEsJef98LFeWrMgNKcka8FSJPhb2JHKxjnQXmWwFPgHWb5t",
  "key21": "3SqvtZ266hv1hMDRPtq7ZkWYQrHzFw9qswReM9TX5R8t3EmQDr5M6o5YiQiSuGcmNXZV3CUFF2thAk6Bs1fp5VgY",
  "key22": "4hT4y9CFMAuGnQJAkTkH5Hn2pCc8cGQ2HaLD2sTUZsGk8KeVoyHZN16NLWuD519E7hsuCQ2SHBA9kCADwLz2WKiG",
  "key23": "6C9bab1SgQTsXmDUYzd9ihnmiKbBmEd8qdu8W85XKpYXgbst3gSwUeUZJeKMm7QSYZA6D39UU5KjGAtt6J8n9hU",
  "key24": "47sVcZrabm7zBgeS5SgaWNrB587eXnCS9da7mBtNSfmGtrapbQmCp2SbWJQ7LhP2SRw1g5hyjpCw6vJSuHoYy2KB",
  "key25": "55Pa69LyJDPd793BdNfSchQVbejuZoVmAgKm1M9tNMyt6o1B4p5FRSe2ym21GhLpZd2gWv7gfxyysp6UtXpTU1NV",
  "key26": "XaDE8kACPSfaKQZizxsa7yscr8yS7dCNgSvNCLywv7NqtNz2rsqcEoAdnM4HTeseAMmHrz4Zja3eDWh4RecaPur",
  "key27": "2FQ1pBekW513pLtDK8sEYSJfBn426YyAV4H1LxXu5JEvCPHSm8Q22RPw7S2bzjSTDaUm5BizfwmQcjGXK2BXwinh",
  "key28": "3JWPP7Q3GiZ3hpHtMEq2xbSZU3MeAAuUo2E61DCe5QkK7xCyjA8dvNkNBUT8ctPJid9yD8s5jycQmAJoPQe2n5ca",
  "key29": "59PW49DhLWfFs35TQSBZnQTE1WPJPeacH3qQJEXvHh9WHyqVEWoEXoPYerUK7sHjvxQ5Zf5oFxarkkLmDs7ysH87",
  "key30": "NXHK5hdVJ7sd7Uh96S65a6tCBBnvqiTBShSSLRcthkxpmyntkoeK2HJdrDDM1wkFdqwMo4zUhNzNXGYkGtXtzu6",
  "key31": "2MLFi1Qc9PfxphDdbU3j8vFkQRFNYLH9XWtED2PwQ5QPEuW5txgkuDyNVzpbaeGvTV91rQZh3W9gZrn9wBJTViRg",
  "key32": "31HPFGWSGMXqTwzGbEkp8C9fgByeCT9XNAeaZTSCfD1ZPsGcSctMXFDoUfTL8qrWY3p1YoTU9yUtidYyEdg3dzp6",
  "key33": "TxN4cdy132gdvgm12jFoJuz7dAuS9hPEYTjE6waSGm951EGXkjDCEhGv7aBq5MsfvJFFfysnzTqrX15Qgc4bT7P",
  "key34": "3eA8wEBSZCMStvmsD2VkUQoPUg2Ta1ki2fRe8mE8Dx3m6pR46bXhtxWFpHifn5mfp6bbiPFcGp8sVYSXJ7HxZU3Q",
  "key35": "3r9b8siZ94bxiVKyqKu9ooFNDzKajvG4qwZQP3FFf9anoWPWDbfcZSXzMyNvoYkRYiLGiN2BVxn8G7MZsf5ZPQ52",
  "key36": "4jDfV3Mo5YmydbCRtRrtUZndKQuSBZ2P915kyH7pBzAotUwex7c5WQhdKXnmCmJZzS8tpWZHmJUCBdSeMKHhWSiG",
  "key37": "3dsDMZtHzMN7UbmRan5ComQtujiJVce3adjCkSoGr3Zj1x5gCcY984WSmSYyFyepff1YJQDuJTYXGD6pmExC3z25",
  "key38": "3DuMWLk6mCmovq9HTctK1WgBasasFwgiAmcgqk9n4VUbR1RU6gEgmx8kCbCqEBBWTBHRvHQfxTakVuVsKsZFiUoF",
  "key39": "3fZki2ah3wtbkLnCccQqEqvMnFULpdwUbBprVQD6EXGp35GFfuuyfGrW9UxCbA2YVU2qFyPGQ3WUN4pDGUzQ2fZA",
  "key40": "4sU5Y2WbaDWW4jQXqYRT8ZaxDtgTErs1UVgu1g6EkqdSbyrYJTt2PkF4pPzdQ2AgsK13EjzqJ1LjzhP5W3zGv6m2",
  "key41": "2RS987YEiATDSTK97T91oAinfvjLFouwtBmFENhurZhedHSPvbv4pQp2E7fBgxr6H3JXNgKm1iCXo9B3e5HdLFg6",
  "key42": "3tcHzY5omxaNYa991PqpfvKAfR841sx95KFktVdwX8DYH3kCUaRE6dHuumBUmjkzBWCmJ2PmXrMn9jc8mMiqcTLz",
  "key43": "3BC8H7argM6PHXkEN8L69C1fiv4ezExnQiERMVLkwWov6N6DWxaTPfSYqWkLqq4wj3YrBmNNERiu4pG7BCwbfp1G",
  "key44": "2Nfcz7Wahb66U4RBWbCcxqgewnuyqWQ26tVg96fGwZjm2djY9hoxyX1Y3k2D2pDw4iK4fw8mzY5GY9nv9jtMxvJp",
  "key45": "4nQpeJM5zhyZAdEdceqQkvi1BU1PF3wfvDqsLMdYCMqKkL9JURuuYTmsUNMTmWgf2ePQCzi7WKXJ56XzLaPdkpjr",
  "key46": "36NV7bZTXfrxerRpr2wrf2WVyjVpQ5QasVye3smskoxAih8ZQJ7yiMYRP3YhjepDvJihPjsLFcMPkcNKHCDTLnop"
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
