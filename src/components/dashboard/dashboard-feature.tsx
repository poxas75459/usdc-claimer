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
    "2GkeMwpfFibwcE5AR3yzg4fteRYYCkz4VNTTFrvAb4HN5gdj6JnTz9tJSZAte86ui8eanEXGf6pEvfd7u7hgWgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QaqFj2M7mNBdMgcRLkDxhGf7pTJ7izrePdJeCrmJBUpAqGa7a6heYHmh3fJxSou3FE2fPYZCuZJxMWxYeQPY7hR",
  "key1": "4b637T1d8dpM17r84BPjKrLx7KidBHkze2oj4GkWgdkSeLjPPVgk2b2o9ve6GdLZZ3zpaF75f2KQqSm2Loetf4Sp",
  "key2": "38AiHmc9EkpMTgLDzFn2GEBdCsZktxJGp9hs6E6sZqc6yhETxC28WTLVbeevS4826xp3vkMPuu3JqgHzNpaZU9cS",
  "key3": "3zwvxRgdWBtkbLrMQvgRSJ2pe67Xaq1WrBfSvviartNPPhUsqGae2tss32dinWj4WVNGC9UScsE21zADscTs78MX",
  "key4": "3ik1DzsvJ9BruRRrde2Qi6BtYmZX6HQc8RCUkuu9muNEgchN1F7R211k6hksSyBrDhso974aQMQjXtQQ1RQgg7dz",
  "key5": "7g8TGFi7wvS8s2eJZoh18VdR1EUgtNxRJ43UESBsEY5yxG3hFCgABtQjWGBvpnBqyvXkX3giAoVDea6gUpCcPBu",
  "key6": "eEyPq3VKNpu6LBapVLT5fDB2jUAZyod1pMG4p5ooHE1TqNRmik3kny39y4tKdEkEaXyH1yqYzWV5eMtnYeBgrvi",
  "key7": "ApbwSMMQr9TR6VYrqWcEcKum11SxQdHaiXezB7AiA7mTkenv6Mcd5qSSFG6WMSmifztWQkURyGfBkiiCu3gPbZx",
  "key8": "54qzQbCQwrkP6Qy99n2M5nWcAkurf9Wnw22zPhtm9E6hYKFxfF7GCiPAX6oFbBCdsLHHjxSnrGSnaK68ED44pjnT",
  "key9": "5fSriZHKrMaFmBjkNj1kvsAfBK6hfUxHXkTAHQeKgkpdBtD6MzZ5FcP2Vfpo6VLZHSraLPEnrd2Bajd6JKQRPCFK",
  "key10": "2jKBDUuYNach63Vp6fBSW9Khz77HKwncc2pW7Mtdx9bU5CNRp2fmFnRaj3SoXBvQ2Z1UgvaD5d8KPS7SbTwssang",
  "key11": "3pKFZCZmjutzGCAZFNqWaFXmtzdeQw6SGBFfjpmPXjR6NdDtTPGuiSKoAaaK37UQ2DuPLzhu3XFwcqcQqWTKpGa5",
  "key12": "PueLuvvAYhN7fPZjnPQdQXx7hszf8g1vhCmP7TevnSuiu39v4hEkLwveb69G6YiukHxKLhLsSbb8TFCDUvQd9DR",
  "key13": "5bySnWAixTrWVMtLJTwspYDCmVeFuTrDGvs3NcUfAvPRa2RynYZSJLd1VAgXLuHmSGdMxa5brugbYXo4i8vTYW2H",
  "key14": "31S9rngTtPoFbfZCwMYihmdx1SmuXMRz7B885P9HsD9L8nw1vrGW6R1AXHJfmQWuu9VQb2frXbDerXs7xYAAcfZs",
  "key15": "2oiLN2eRCu9cUT1YppTnho5eXURLmqETX15zxF7nY8chgpRg9xyo3rBgSJcUcuuMbPN2cfcn8ChaJhizhnkXNbt8",
  "key16": "4GgDPpJBogkjufYi5pvNDvVND1Y7v15BxyACgEyUqE31697yzpDJogwm4RCax98G4rZYdQcqxJnJUYX85kA8yebe",
  "key17": "3cgBpy8HXhTkzZvz4EkZi5PNMGE42Kd5B2cpVqJui5uv7eK2xcY6ybwDU6nZFRnuiZk8vGZtdPbMs1v1TWhUy8Wo",
  "key18": "zwkJAarcspPDpdZfoDRPTzXSpQ7XDr6JRarUMCGyPT7MSAQNnpxzdP9DfGHZSwaeMTfrphepoMdWQJyUM4T91Ji",
  "key19": "2b4wKmqMGk7j3F6SGjAP4XcMZAkphp2y151t6UzQw77kus7rQunQEJdB1kHtbggLpjvbm2GindEJ5j61LnZGPMuj",
  "key20": "5z7PchxSyqQfUae9kUF7C2THrmP9coXMsksKJ1SdTbGpfyJUFzJgdsWkHAncho3bTjXvka2bDJUbBEHthLFioCZh",
  "key21": "3L9y2X6PD5dxN9w4giW3Mu2o3J3CDpjr7fnar27LF9tWxoYH7H6PTv36jDCqPMqEBpqFXgMPbcHJ5ibo98T12STX",
  "key22": "TSDj11r1HWFVnqxtbELiK8E4EThrE4qaarQ174h4kn3Ybby2b2e6wVWPbRCCG1X753KWGMBKB6cSZczZG2wUouD",
  "key23": "5QDD8KYu3Jfe8pUhyVSTddQahUzXV53fitZnctDPKn78aEzhGfKdSRk2wxrfWTGd8chfVFK479bSgeRAcM6bpQQs",
  "key24": "3t9g8rqcPfUd8PEJL1BCNi2wFhjr3niwpVwkK9JNcP6hE7TbJ5ZdYok5U8Qsiq8HnU7hnyCtxSDXri1YZW9XzNCS",
  "key25": "4BpFtFBcA8ZLSGCep8C9YE6B5QCLy1XawTHtN6wWfWw7Zu9H7PjqvUesyXtDaw1s4bew2vVXZqrhYEwP4vbfXoob",
  "key26": "2WiL2b4PdzTAZpH7H3bxFnHmM1MNnPxa6CaYsA18hX8Bn21idwiRfziYkDjYJ28J6F6sawyZLBRkgkVXxgDM4eNf",
  "key27": "3RsvCGggvTxgoYGgL6EfUpEJiGowCn3YJhfZcu362rk6xoPzV9x89XT3wymzMPmk9GCBSJeZrSj5Ge8eEsErHAti",
  "key28": "4ofWzk4CPxAuwkosBPVo4SgXoGScs7L7fsKGfjAkmMrJoRTFLp5Pfz6yZqLEtFqpvYPY4bxJsJBAAiwcLQy5DWjN",
  "key29": "3mxo7rzbbSwSRhwaF8YfXxioBvjTojFbcjXiaiinLBnEfgFtsqwypHchjMtHzobF9B2zcaNau7Xua3i7e2wqVvLd",
  "key30": "44kPsq8xvS8xqKdAvKMH7XkxCysV2qXCBWJ4PFz7i6c2ij1FFQfpHT7aFiTQZi5HtshjVDTLsBAj88tLVaeTG4Gq",
  "key31": "4e3QKjpp6UWfP1dwt7xKSEiUxa6MoEhixztZmDibqFTo9o2yiJDQwcR84zmTdWR1z6DhLYLRdLqVvc99EwoeKGsM",
  "key32": "3pepmYEEq3hkBLSFWD365ha96oaQCeJ9s4MebM22QH7VwSi72oia7c44KwSE2i6UqWMcHNpYU5sBnquWdnh4EqPS",
  "key33": "3Ffmms4j4rDVyfnQnBASX43kfRVtXsK6kYjyT9EUvXoXx8N7PiUgj7jiZ6o5C5PmAFNkVJRHoiAjq81RHCqzGQDy",
  "key34": "2YHyFFYAPng4QNH4TECknsHeDVDQ4zYwbZgdQYLdZWZG6scDNbpGNmL4J3qqYhJtvQS4AEvkXZ2TDcKxnsgYJXgN",
  "key35": "VFu2sXZu5scHYiXrnZynkrc227gwE1ppWXrUaDFbDaesyMMXMTQ2uVDATHdu7UPLHMXitXJVjGHoavJGGdHvXra",
  "key36": "hq5CaLzo1kNVeoUoJVnmiySs2JXF6anpUHdpqgeZuF8ocpTM9skAasycKoJ245oxP9F4BZaMeJseWKi3pwLSA4m",
  "key37": "BtKFtYjsVyvh89tQcntQHVGWnmgTvaQ9nisH2fCUS5gqVSLY9qsiESTaqCz75vJDHC9HXQfS8cX27AFtok1Hseh"
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
