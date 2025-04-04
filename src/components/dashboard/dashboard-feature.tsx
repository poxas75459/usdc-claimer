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
    "2AheDWGY1u4MkVGQa1EXkrJ2RVb8fHvKjPEKYhbohqPyHtEads1cgDYsNUfThEaRxcKc3qyr5KzGfZQbE62UUijY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sSLhmJQ181YkBfAtXqMCEG3zk2hab4ibcnbnNuzstsDC7Hka5XB61LUxKCtf7YDrSrURRaYnvGgvFX2Hm2zdrCb",
  "key1": "3Uh9MvoBM2YjaH6W7vx2hb4mmLxHUrphJ4cpdgJkqHE284gxcaLg89AWPbtxWqActnKpkpsGVVcUgJC1De3d1GUX",
  "key2": "5EAwovjuU98xEh97RGSqYdKQ7ZFtdLAQ5owEpQ9QxHW9mFfQ795X2FBRXWi8wDDofhkYURRgYq4dzPYsijyAeRGD",
  "key3": "9TSvpRHQY5EbwhCq54vqNtw9coyudooi7totBHaFNqUJZSm69D1NbChx6eiGa7SbsCFnCGEr7eK3drtqj3pdAyg",
  "key4": "2xx25mWbwFTkHckqHcXCzkkxk68Df9VojvxTZhEuXYyMvAFJSMAn3UrQ74yqw1ZevEFsPt1dGW44gDCbeyZ4YWHV",
  "key5": "26eR5V5xLZAkw1F1nnq1a2FtskenqRW6ntNJSAk1D1XtG4ojfAgpJ5qVHjPgTdoeZWgXetz1i95jFDa2ptq55RMz",
  "key6": "3jwcTsXdKthe4oi1uw4JP7KGggRRw64nFG7WRFHMaUtEzm3P1afLF2WL9RyJBnUHSVVr8Fcz1CBYb4xt7igdxEUW",
  "key7": "42We1Aw8sU6cLffELkgJTuZNikxRivmXtprzN5854LdPnwuzyNMqtNJLnf4qnTK4spJjHTBtGvkhFjDjgpHqovzV",
  "key8": "5ncRGDEJtWqPmZs5aXqKL8PfxS9kkSw8HWaD9F55iWUanqeFrX1Zq9gkaxKuZePRBgKHFYyFRq4SVdVpMjViququ",
  "key9": "dLN1ttdYbmduqVmqEkeY8hPPsjbhGNyzEGm5JVjCRpm9CG8mnMDfmdAJeF1JV8Di9z9zVkouCTgRwVpknkLxa3u",
  "key10": "63CHESkzjAqZaUXiKtcWAZpXpWDZKEHjJZZoWQK3QvvGBQXQMaLhoDjSoK3A7Y3RQNgZsTdqrrMuB7pLagMMGjGc",
  "key11": "4z9G3ziYoznKMJQYTfhKTZS66mEYy5huDgRuqGDkeEULC4mfC5z3JB1yZuSyF17X9BZMwybzhTgC82kPeR1F7DhD",
  "key12": "5PqFX5XR6QbB9E9v3Avfo3y2NYJcUhoQDP5wQgi23P4gchAhBmh1mPf8mpdxBTQhiNzvNiy8JzLYQoG5Tp1sgRWe",
  "key13": "4hwdNhMERCiUxPRMG2umRw7Lzr3DaRHHjU2YsYtQn1MBxwTZFVLFr3DA7YexX44BTUzMBewHXyGWqeDvbCP9mBq3",
  "key14": "4JEoupf9p4BX2wm1TZJDFk5cJaaYsESYGjv7GwGqtaEyNKsz7TTndkFLiPi1rYUbweygap13g1FgbKcsPtLj3ZQR",
  "key15": "5wVG5WbTf8evDRgu2TKhoaB5uYyEKnSdbiM2njjNSFSEQwotLdtEFGeHSaoMLhEnSsL5AvmvrXJLRtVao9GvmR6t",
  "key16": "2LrRUgj9vW8YQYxXsG57qFUqBY4UehKFcZEwEgvX73qTMRSzjGW1zWaauzsk7jbtHE1cdoCSCzNQHoz7ZfzN3nUq",
  "key17": "tXAjkngWkgvkgo9SfSQDhn4QaQQ5v8z7xvEpJ9fk7WvXaaFTLFifTm5W7md7fycmeXurDsQjgtARcDtN6BK3j9P",
  "key18": "3ApS88JWG9na3WCTuMxE2S855h9RfcHzkCBsGrVGKfWQrXEnptBgKGCYpfMjZpoTf58kq4of4TLt9YwNBQchacG6",
  "key19": "43Wp7mTc2yoMHJpwVxfGVcEUXzBKdZbdNuAhtkD89p2f9nhnGZ95tf9EJMqiFQbZ7czgQDSNziU53Vro7GXXHXeo",
  "key20": "XQkF46LypbA4QDK2sojtJwR35pmkpVTzuGCmVved4DrN4p3VJ6rHUbWAci2kNCvtkwuqFaUixbwJUkTBNVLyofp",
  "key21": "4NE5rDW4pQD3YZGDAvuUMbzMBTeButjEkbMUmoqKskw1dEmxNfUu2Zn1wRfpmKYziZpDPGSMAauY4pAyTiyegpx2",
  "key22": "2E4NFUipURdUrjeWJEBkGuHe2S7mrNzVea7p3jgGw7GSAikBwsjnx3b1vgFmipTxL5qA4SqwqohtNS1fFwLufay4",
  "key23": "3G2XrCGte6z4ANgV3aki5gyWwDDoD9yyr7S8LeiPUfRdWzwMA6RFNu3vUGnnHfVTasnw62WjEFMCRueYsdDxRb5A",
  "key24": "4zFof4Homa9vjym2J9rJdrj46QLYqc1rNgkSpj91qUTgRiHtK6KZV712FZNb9rFgVqnmN5XkdNv6Jt8sn7Qy4tBU",
  "key25": "5sU67AN7Qvd16YobAMFH8wofsNL2SxYCrQxivQ8Mwuud7b9aRrMSRfdXKnk63365Vwp3EGBPSYCJW5cMtLoy5EUj",
  "key26": "2dotbfyAaKjdJxSwAFQG2HdLTZybiXeQ4hSnt31H2uz6jqN894B9Gdbg8Bv5UJZNFBXvarrLM3a828QB6vu2aEzt",
  "key27": "2f6V8xUnE7EmjsmdtD3s3WMGy1y45EarSNtQoXRCdDRAShuozT5Hswg13b8k6jCZekZPnc4gY5W1i7aQuxUTEjR8",
  "key28": "4ccRx7Ab12PLLy2KNKCMb1TkKWm18xyFyg6fjKromaboVgefiBakmZTbsLec3ryJVm198nzjfsoBeqfVMpQVHVPi",
  "key29": "vZJEaosJtH9y8CiHzB6QHVYmuVH6po2SKaT8yBnw7mU74qe5WFsULmrj3WZEfb5uwsJZno6V6RUKSJRribxRriV",
  "key30": "5wTVKAU45vT78VV3VPNBf5KzNvEBGZR7iHLz9VaddXbTtrsM8koiqLSoSYm1YtWfeHntq1in8RRj3YfqiXyMV7hr",
  "key31": "5Pw5ekdww7AaJe1hmaUipyNnYmshe8adLTBt3ESTMVcTyDKobYYKiZjoGbZ9UwD7wowfkwpbrW8XmYLyaaQ11AvN",
  "key32": "2xsTDW74yjJJ8SrrioeiV4mDct6gEPxmuuweDKYGGWiZcG9m5SPmysJYDJ97ddKqkHcpRt3qfspgr8FaKgKfUHiW",
  "key33": "NmLnZBZ76fnCVN15XDayZyxk2b3C7BCfdMQXzhvJqSUbFQCGgWCisJN6WNbnNoJfM78qUHCDhMtHepa416BnqsU",
  "key34": "2GkYATmcsNABpDXKtacWLQ9rMaf1VSaf1TqN3C4NCBRMrwgQnSTdtqhvHGqVBhAkPVZdhW9Uo7habFyvSUhB4LZZ",
  "key35": "hK7hbiYSBnjvRxGXRXNPA4cn69nqNg3x2ooocswiM2cQNKCEATqkMZ1vryB8Hrhu64WVGUXarDGEYZjfACSYZWb",
  "key36": "2TvDryBpoQrZDdM8ZF8biiFLG1iiTta68Vd3bygCgmTLptM4beopDsPGK3GzFjwdeXEvUamJgjVvpUrs3n6j7doF",
  "key37": "5vQMr4vuD5kLhzumFP78HeoehWzqL87CeUVFQvDkYymUZKf4rJC4MUw94LfVJthnt3FmhAMzPKELHKfQP132mWhD",
  "key38": "abnck5twPM5uD5hC9AZfu8FUybyqh8dEFTueGutCvPFHnpHZGKURyV58JiPDGRMCfJJUD8h6HfGwGJpbWG9z9ys",
  "key39": "2p1TXKBtSTZP1fUpnCSaABCZS67uZWta4ZeM9oc7d3GXNaME6JoaatZCEV1Pwz7QHuE1oX1tnZwL1qCSP9g6r6Uo",
  "key40": "2mXxUhJJbTrgCQh47uEGwNpMTGngCnXk9cZGwZJzd45KEbpeddjFryY4qgPDf7vMJgmtS4eKijzfR2drvChbRdtp",
  "key41": "4R8c95P9aQVTJTnBTQTVV44bvKC6Yi7DqQPHMSVBDxsKPM2T4rpjywYZzzujNUzvMAPGUcyPK8tKFGcfWoSSS5Df",
  "key42": "CFg6vZWpqB1MHd6izWkA9j7b5Zta1je3Emf2RFBQFagF7XdKHnPJ6Xwr467pCuJ2XUeJ4bzEHqQqTePerDQSsLR",
  "key43": "5DoMpU1rRDqrRGFc7s2Q7TJQyM8fjK7jyD8tCTWqCvz8buj17RF4b3sZ6Q97zRxBqGpJTDUHyJJ1vXiphix1BYHM",
  "key44": "3edzad147GxVxjXsqM43c6ByLSdxnhE7XSvE2f2mzhEve5QjyAUL9DR1t98ZGGb3XFG9UsVkWZG1Csi5Dw7Keea8"
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
