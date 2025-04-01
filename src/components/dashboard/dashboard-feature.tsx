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
    "5Ux3ChMSVsBR1bHQditPSAhb15Mo85HimnHvEueLXcEkLk6eBiFfZp5RdtcMKYXU9XSjK7eYsAzqz1HcKpz4yzWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LcDWE1n9rN9Sn4Jv1f6SWCcE5bLEAYqEi7TctReW2ct5j3MC9HRGjo7nzxU9HrR6ZwoJpyuJiq7M76hjsQh79Aj",
  "key1": "4sGj9YyDb7SjR573S8YAFKi6ubeJWDxVEHc1dGitgycb3hto3EZcU4sAJ353tgno6h8PGJZMjGBGtzwJWjnrJGYu",
  "key2": "KK9P3VrkBNqNndBpC9yv1UN57u3zKjCb4nyKYH3hbD3zdVWjAerTHFswQ1mc4UUbdtb49pj5yRpk6xx41YARHyY",
  "key3": "5D4eLnY6frfGYJEJeQpikeM5d2RCSn5LBN2crZaAtkVVrGNbnLDhgMfhGWTNudqmF7z11Nnxg9ii2FZPqagwXWqB",
  "key4": "24buKcGqQh91CYpgTzJ68k9XV3MPtETAyikLG6rnhFkg7XeA9YBBsLKvzSU9weTynTtgsxjnS9qvPSC2x1Qytan8",
  "key5": "3xTLxdZ8pTkAUChzwC5TpwKELAeT6kWapz3SSrcFLZGyBVE8FBHB57M2mLVFjMqhbhwjqrzAc19qcmXHAVSvDiEk",
  "key6": "3vWDmgQqhyczUtBCCCD827km6GVQNaTwnXNTmdUAseni4s9K5ZGauE5cdWivMERxkqwcVuqVaG6vQ8jk6AEJs2px",
  "key7": "2yQaxccoVjvNGJAGTz6KfqCYChEoqM7GCN9inJKVU8vcUgE1AjEXGiq5tCCiX74nDUdNVXU5Ag6aMQgB7NFFH5hQ",
  "key8": "feCbmCk2JfSzwNnXYZopHzLewZqDrZscugZdy5L98fhw5hi7V8qq4yPrVrUqMRy5Mx9rq2yv5bG1PTXT8W9autU",
  "key9": "2oVuW2Kq1dW7nd9snoxxcHunEXhCzfx8qjQuNtu2dhifVDLUGvAuGQGo2TshXYhcYbf3SP6JExkdV7eWBrTJbxcP",
  "key10": "2KywdVBYKoQ5q9fZtCHWqrwWDFmNZJwca7a3S3PFgSqgGeHXBkFWDNuoj8iTD3Hwqijvr4VRrY9nv5me625HCaFE",
  "key11": "PDr5KrScugp3pakKfRkbmf1bE3NsP8nJTHFp6YfwNVmiVxJ3sup9DPRbGHMzvrmxys51FW3uVbRbVyb7ZwbpJCL",
  "key12": "52CS3WaUGAjw8FWnF8Qeh3B2s8aRRVbi8NQDo9zzTw9j36ynoACx1N5kCVEu6CN4MaiCNzV7hRpc5w7UdN6fepC",
  "key13": "2ZqymRq8a9WU6GGDzvqe3zRQnKS8ootHjgXCEXj1PSKdRMvWPqjAzWo6nbfY3zEJk7TUfCa8vVxbT9gcsfhZSGcU",
  "key14": "2qu8HXLW2VJRubT59uHbH1bqrkPqAg3iu3qFkRYmi5asqiCvUAB2j5YnvsoPBkkvYvPPsD41EoKdigszCySmdggq",
  "key15": "4eQ7XmGcPJBuFFixyG7yKVz2RTVyCqNJNkThEUUsEA5ryYogsinkig3hAts8rEXatQyzxjZpiZkNFQzCkf3kETW2",
  "key16": "5s6KotRyC3bEnXKhtvsEVGj9JooiBwfPxQNrKLm9vbSQQMV5siVQ4zy7bBNFFjmyYUPKwa1RpySCQGPpipdA9SFx",
  "key17": "3m85pNft1c4z6bo921gRoTdv264kWFez6PvukSv2exHBX7GtqF75SVyMLdTHpC2Zi5KeRaYki2uCuybN9ty9qzKX",
  "key18": "5jZ4JUbZVKnpokZBS4dEqDBn8Vs72PhweFwja1KcdyFudxLXsWFqkehkZ9KEBy6EUkGCrhStRUbVuVDEgTQXucvR",
  "key19": "BbNKTKjcQDoSmjaQMs3DEMX5FpCEmdToR4bE5N82bLyJM31YqGBqH94bHGdZwKcYdG4EXVZL4GGhZQvs2xb4SFY",
  "key20": "2kScSYwQiMEnqHUTgMjA5zrEQvUKkZSjadBdWAtMH4f2ivkZgFWnzPdLZNqUY4oxNSZQUZLufhkyx1MnL3h1ok7d",
  "key21": "HTuGfYPshtepUy2r5Mo7JxJPJkEL3MrR7zba1HchqgLvbEy5Patj43Z7kHo1s1QhLzSTS8mXNRHwzV2ZYfejHHD",
  "key22": "4s3qMo2x4udG5NZHk4xb1UVGkbCRaHZibccbgfe7ppBVzrsyg2DUEhRbJEFEg9GCAQttY7JvcBHgMAhDDqyWPjdH",
  "key23": "62sbmvjE1EUUpZf9wXj9ezQGq85Te3B48fTV782NgBCEpJSm44i5rucq5FxGpJNU1e5KnenWDcrjT5dBE37NNy1W",
  "key24": "5V6QqrUUEW7WqwbC654HpC3fZpgrGoiUbCVuLds1pZxS5TkYaxCc1Ej3tg6dPwXeGGtE6CgreHviFRWAKSPKjgjQ",
  "key25": "667HKG3SS8ctA8QPtz9orCreErz9qQKfRawirKCZQcF11Uz17yRyJteEUyKgQUQh4pM5b34qRxpm9BxvnRPoT3nW",
  "key26": "5HEmWHZJWdbWWEsJsaxDVvRCsGg3RiCbEaMAd9J7xrMzB8FWahmwDeHPGNtoaRB2AtuvjGezDauJ33BHiY6GLPTS",
  "key27": "5XVdVemqe9HSdbYo7k7UKXDgh6wmCYC4mQ35bAu3tso2qUCpWRenw32KQzEQLK7aoWohcat9CFcY6oxYMt2kFeRa",
  "key28": "saUTXGaE7EDx9SX7yY97TWsQLqShF8hrjHJe2E2ViHgzy8sKhtYRVc6SXp2Pvihz17NikUPNEBkBC4UTsP5e7QK",
  "key29": "2ZxPcxPQnMiHPDh6yNpHMRBTNVHyHDEiLBs5QSaH1PMJqGXPW75J9498yixLnpFvcNU239BvocoQMBA8oc2empWW",
  "key30": "3iyVRf26rYKHEG7koJeBapRwiUZQ2UUFmfystGnKbazYWBMLJSt4cNaxahneW6oWMGQRjsny91tBSP2uGk8TCtSz",
  "key31": "4M8eZ18xU19kz9ctoccZfdCu4Vg4tAngyHHMnNAbX22hDF1ckuRAwKjp8B6vSBqCTu2KJwBnthPBes21q3omJfLU",
  "key32": "5AotCxvjz7YnLZUpUTpLbGcjrkJFSPf4gjq3kiapdrAQbdHGoKqARJi97EPLPMQ5MRE2oPGvcixKjjerawYpjURc",
  "key33": "2pqwobZXvLqA6HS8xvqKk62G99cxCseHzcwU8tCEa67FSdhpu9ph5ZPCYCrfS6Jz4ie6qba2sM8LBmYYCdotmXVb",
  "key34": "43GL7zpiztm3Fd3aFAZqraoMX8YooM9pibmXC86EjWA1KxxZowAkKMng7yc4VGHYLGVnnyAL8GwirMuczMJYdSpv",
  "key35": "4sBAghRgtJ3fUe2QK2thmQ266Lq6dSgbMsvHSYw21GZxURnssNtM24XPiMCg2jXRtR6uSGYCaP9zbqqRvpscmGYb",
  "key36": "3MpSxFU8gb9HqdG9EsBtEiz3TnxQ6UC9Q6iZFn2AJJ6sCwCymUAD2mmuRomii577ZVAYzeeRX87LH7mRqfJ8PYzL",
  "key37": "4PzVEhYrMRai5Q3DyzaFZUUz7TwbhjZjH3eMu78WJemKkBVpuve7NrixzTDvrgb3VtfPJevDF6XXD7m57uBeiHzv",
  "key38": "HC1VhgYsjF4PVcDL1ddm3VhogRrTkNf37LNV5cibxuFV6gs6EUyGMKKxyQ9mPH8diVBK1TvjPNCgbrPKWrCL3eH",
  "key39": "53EbGHUv6My3EF2LrQ4FAKS5iiXdagcfV4mU5n37uADJ9TBUhas512bvuqdBGefnuYQnA8b1iJ4w6qUqFuFbT7Xh",
  "key40": "2AJJ1TYvnmwTUoGecBBDNePdoSS7gc1syN62q4NFuQ95uRS8tkHyr6rfNS1FU2voci2dLgcCrKCA8sEg8gVqt7kW",
  "key41": "3u61H2uVybhNkdBPNybmgyCEQD2Bx6LX73mdYfagP8boK6Cv7qG87fANXWaXKYaih3NeU4Jbe2msG1i6SUVnXmzo",
  "key42": "22gp71wD6CLPjstUTJnTYN84jjbMNKQX1wY35k99EuTRoWUdSnwaZUHhztqwF7r4eZs4aMPABAMFGvgcWHsFNne4",
  "key43": "61eyxisuxpC9icqecKFSSyAiXD9zt5sZB9ZbBVSU9hv3RabYjcRPQqTskpna4v4LJQB4iZXLMFfnnY75JU3zkSkJ",
  "key44": "otY1Thacc37vsCpGMbb6Ey9RQH4ufW8h9oxppLTUQHSwMJTAfU3GLo9xns72U7Nhmpv41n7eYPosWTCXwEuCoz6",
  "key45": "UB2KhgQ6WMtkPQr2V826pWRk5LbraRm4shzFhnPtMvQinQGvViShp8J3yzH53PvaHFzuHbjQaUQwjLLbor71GCm",
  "key46": "64MCzCtqwFAZBMEUw8KtdvNdW93LTgDAxkpiLfjJbiC6BZsW5YUB19RwkeFMUnrBT75MSQYGpaKM6N4mFCqi94X3",
  "key47": "2Qo4rxVPcPRjP1pkREPAoQ7vE6gSafnm3ahpShVgEhmFQYkC8hC8DbP7JuT8AasUACuGeUwokPA1aqA3FwyJgLPk"
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
