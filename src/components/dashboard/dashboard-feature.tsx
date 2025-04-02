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
    "2HBWNHkZAP2EqhYgrdu8wTP2UKXzgP87qPEjdNWD4yHMqaQcNwjdiDboyyqw21X44sh1VDE7mfMkxfGYxu7gySdf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wZ9dNSHx71NgtPjct4Z1pGw6RpYYJYX5KbU7R5zAhuDbKQqNXV3hNug5B1JVRf5cbZHQCvNDXkWANNpQ3N7xyDZ",
  "key1": "3XeuQhoWDtSS8HjUSXuHm6HufA18PnqPTQBjViB4BbNDr3aeU11z74G5SvzUPFgRsS1vf7Z47zGpuPaRmVfcTjtR",
  "key2": "ohMs8FRULQLbCxjDLYHuVPX1a95zvSvoCS3tWjcCdaNJq8keTzCE9KzVUrEgcDC856UuXdpTLSi1EmoK6cwbsoq",
  "key3": "3asUiK61jwoYeCRn269ewmngkByyFX65pyU6rswSAwoYeUt5pbzrA4vXZeRdRbmjyDQzPfEDcnWDWApwrH7e1m1J",
  "key4": "4BBetNeAHqwCa7XmWEknJzHdBJEsPZDoEtxcVHedJi3iUjEeSjANEQ5PvrPNy4ScMDxWNqxyzwLsHVhLxJzpzP1G",
  "key5": "4dP2SEDqwPzoQoz67F3WCLx6VftcSzxhe4VbznJrgDB8HfAkZoZmnGxcCRWBBRZ2gcwYs7v5Shikgn5BAQpkfnhE",
  "key6": "2mnpgZ6Kk9nGnSarPMmRPreEbHnS4S1GJHooMXe5Qw9725JXyp2ey4dRKUWXT818w9WN5uHkm85k7RpEKDQJrTtE",
  "key7": "4NzpqjFhhw2TkL8SBPfcAqrpwMgHYyQnkvuP8ZkiTysppgR9EZdQVZMNqypNWqmcMjgM9DVifBvhPvmNa6pzKYed",
  "key8": "2dCq1V9ZkKn6md4sBjjsmgJFrEcYPhhEuEsuz3hpB9u229WkCLwHoZDSdk4TPhdCubMKceKCzaJPLxquPRt4zB5Q",
  "key9": "37m2tepTFsQSarQSxMoJebqAdhbEMJeGjRu26QnxEQQP1dgot8Y3P53tyaRrDYZiF2nsxWHJfsZPdsBQwUFN7TPq",
  "key10": "4rESu6iBDGZXJErZ1zfeJhFdFdnunRZcGeyRWrma6ujFz5t9ejx9z7rLBMWuoAxRgj8uGV1uJdWiVcQ3dHf8Srn1",
  "key11": "5mgGJWTQNaDKewAXfyFZZhnyvfAvWT39txFUq2Pu25CYRdQyMYJpbHef3sJg2hTXc4QkqzhsUvfFFqgWmUDTG17n",
  "key12": "5SwUQXpAJQepxJjcGGDeEBTSAguhvuhnYohDXfppDDxC2PzTqL3ZH6fXE2akTKC7vEPRio4sxDPNbNtAgg7A8Mya",
  "key13": "66XdBFydeRB2zJx1yH6pn8xJum7WCSLdX5KGQNCMrPSJKGxtPZh2PFn7KXqxmTdYSosBjSac7HFreRGPrYbeSxLR",
  "key14": "1cefZipUz9j9z6mfkNF6gx3Z1LMWfUeBLbwM4zcQ1pZwQaqARFxFGBXCFsusdFJFemRpDYkXL6SwRdC2KECYuxS",
  "key15": "31H7mC3UNTaviKAC355nKgqMExcYCco6PzuRVfGHTZd4HrJ9ZLxvVofjVwczJinX6nw2AzSeCfgh32qVYLjhq6Fs",
  "key16": "41FoTCG7dSsQZL65k4sAb2VadXSTTy6YbSHhLqdPsUvMYXM2rCrjf1bkd8PwS4KA89DVb7BAuditbzmov3f7ZeW9",
  "key17": "5gxYmS7yYduJHYr4VGC15XjsQnoUUX1t7P9P8rD9Cnmy7oN2BBo6Gpzcig6thV681CmxAu8NxWaeJ86djb9wMvVS",
  "key18": "3NKkrdaGnthNWPnkwbrQFZkyruFTGf2XBpsdV834VcFt5UFkJaFLunBEgvedm1VMwF1yZ15f9YCfXTXxfnfUTMLV",
  "key19": "4TwoNd1waogpYusceatHPx7mN41Xj6hbgFQ1VvGtVjDX4QTaS5GNq1YbHSCXsfy6nDN4quRqYRDcCQxyW9zoBc9b",
  "key20": "2RyFcqSdv6s8562NDAwuivVtQtB5UV6pW3GASFBtX5hsFBbWpKzvLFJTiFPEnYHsk89J4vmyXueh3CgD6UyL3aUT",
  "key21": "5euQWSF5FpRWJjoNH1ocBVGnEX6QzkgphWHWs6uM1F6XxArxh3NaDq5fosQYTKpfvrrhvu8VRf1CSrh5Gs3mDCi4",
  "key22": "4ooymsC4vxYYHh5QWTipg4cKLhVJfdMK569q9i5aQNM91u2LdcT2HNbPbATibDjbjYgdPGr12up21YkCx3Z2pjjg",
  "key23": "5ej8rj9bZWppgwfdvLFZwUcUFfk7aijS1wAUCpZV2Khf5xpKbguuhTWACW19RT3Zgfh4ZuQUuWJoURt3oqT6L11u",
  "key24": "3f2Hcv8AECrnS5RsWoKXz6C5orkSLacen6nneCncQmTDjcXxnM5PsPfR7Um2UwGZ7KRT8b9ZQ5F2BZ8N7ZpCNirm",
  "key25": "5cYSyiBkQkv39K9EYYXbdPbh4x38gdYVqxE9kh8BZtfddu7ETUA61D2nvUV4Xf1zU9zrkLZEnuHChD586ugb7Fkw",
  "key26": "34ntDySy4XbaLbaBp3gZL8moKvqe3NL5KTbcAL4fj4W2Eby4t1p3K3bh4DdvZkuowK2pQRa1vqwRkEPvyc6abuYd",
  "key27": "5YQF1Qa4ieGW8pdAzo1UexMnR9SwTn5unmf441WEMHkoGZDBPcbXGVUNxoNuxCYbVh6SQpDeV33Z28z1cmQvmEof",
  "key28": "45VVPJGTmHXtkSYYGdQTqYFZK5EjYrE473EH3vnQwS1xnTEZ9pZsZBCoASLTgZEiWCfsCbbGcTTpWuVPfd1aaNjZ",
  "key29": "2H2WHjAghpDsJvgbq69fqkDZF7FFUELVamMDG1QEY3LwL9CQ6fTZ1U8SfMkMEjSrBidF3JmVY5bYKW2DoLdy4RXF",
  "key30": "oPcczZwsSYtcMLf5Y4d1tFiNZWGxCbmk2k3zCicaLwFqiRqrQiTwyVwibgUaLueBFH5DFBM64rMmPB1XUhLZPsQ",
  "key31": "54EYCWyqLJYKFZc47fL5ihY8WtLj59hqfd4jqPijjwJRVfP8oJmes3kZ43a4vCtpkTtSAijtwetEgbCtR9kdAUNp",
  "key32": "iisCjfMFxqu9Ntfzzu1DmevcV83oCZvNdxwLute6WcxKA8j5vV6pH1DwTeHsyyB98EnGGVKVxZpNrBn1tHyMxdp",
  "key33": "5foujZsSD8RuME9o21jwhmJWeFyVfcFRBitodt3F6n9swwvNv7pDwhBGkW6Ri46Gq9eBbvnCFHSjocgEVB2w6XrG",
  "key34": "2bdeK3wk5R8J4sqNJu9XPJRK7XX2rUCvFabgoaKjr87hPnHyxHFAxZEKe9jvtDarDkXMrzEM4Qo9Cs4JsUrQ4tqf",
  "key35": "3z66Ec8dXLYGeRxTxJCR74AHtgcU3QXSEp3XUQUP7LhiPNdnsUDLG9x8wpBsH2LMRsjaaussvYueHDqXBiqv3j4G",
  "key36": "575V7vMDkr3VBW8S6f2FjZqtYvJa9NVXaKeEVkK1aRyBhwTVv5ynhaZwE87jbk4CTsUe4H25SwPby8tiqhYoQWAW",
  "key37": "44fWMnKPq3Ngeho99FqTRrCGNFuN99oMTrU9XRgeJbwfYkQMCaeLztU5pPj15Ysr3GChDAtwDrS8Mn4WConfWXUG",
  "key38": "5iuWySu1Ffi7BkMESpgbLKESvHZmwEuxfiBqF8TYxTodvgnACTAbpWinYcpa4iquDr9H64dwaaWNgVBkZTLiVYXN",
  "key39": "3es6PuqTo5RUyhRoXU9akjNcAm3A3PF3AbyekV8YTZArierQjcbeMNsdnUXV5jrPCsj5TcSCQHe9FWrUEE4JVyjt",
  "key40": "DuijaPuvUVuvGHadtxRhZYqtpFrsHjyXmzJhHMqeouQRbhrPqaKjm91b6mrdMAYZz4CLL8DTufN6PPSq556jJ3T",
  "key41": "2FBAELPs7itsm822nSwFKC52LZBfwuMM3Q1xU2AeAj7zodSCHKxAPjTG7TbXeDhVZkJ8jTPWEqPSPiYp5xMhHmMc",
  "key42": "4iGU59nkoj9L9BiySQQWk8V3Xcw4ugcuqRPFhpuT2JxyVWyoWvnX7DrNMQeGQZ7XFzJ9DWbuAuaepQSC5aEgno2h"
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
