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
    "2fkcGkeoWyb9q9wSUHvBroisB4mxUtCXPc81bWBTj2dkKoUUd5TAgTzcrxj3mAAVxeAxbjMP1BP5D1AthAAS736h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QByVvasjsfmSjjB1L4zGVyRRAMLHYWS2sRVH78jNwhuz6tMWB3yUgf44fb2zALCYmBp5iVacTdpiPmR9NGoTgia",
  "key1": "3n73MVVnBPGfhYTpQCMczF27bup4tVkQudFNtgX1Ha7xkoNjuR9r7EzWZwRoriobUqDTeXviVuEUaooohstwpKFy",
  "key2": "4gFzy4W9BdnSro79p1hyD5thS9goKe1PDjUfv5qnTNcEomfVHhUAeAcfgX4RfbYamPrg3Ctmjo69SwFzD7Be9eGn",
  "key3": "2jiiT7usri85BH1BbEo3EWmHfCsWQ5jQ13dPnCceaEeVXHRwmDmA9XGhbN48uRQn7Acn5hGK4aUavib7pokfiZns",
  "key4": "3Bv3E7XLnCVfUoFGsbSCHQxdeU2Xtjs2TyY2CtY2r5Aat92TKhjVoGGaVKK2a3hYc6mXCzdhdMJs9gfCDybzTTDb",
  "key5": "5VnNddH1C2sT3HkVFyBUDFtHnqKV4StP1Gij49uheWUEAWY2YvQWt548fDcNgNSrrxbPz7Zu6t2DLezBjFom73ZL",
  "key6": "ce4radztUSTsGnrHR8MjViqJNXxrv2148unJeF4gAT3Vj9Hubu3ixt4XGpKCEpRfVZH3AH3K5fs727d5vusE1tx",
  "key7": "2g6Aq698LAMyJ8puWBT9LhyYzxC1tYXsYka9aAabkiwCAgaq4nya8s3Mh7scwqm27CJxxcd1FStETB3bVXNvTXAU",
  "key8": "n6D2ikKgNsfKre58ctD3h4CFjuj1Wqn7BPWFVJkedfN6zZYtgZvaSyF3rV3Woj1G4kBx48bWZUeL6XYriBu9EnQ",
  "key9": "3o3afitqrEAjmTXfXgJ5CnW6AbXCjAY2Wqi5Rz3e1z9aByYoCpFg8Qi7JoD6RbsZxMR5JFocXo4eTDPRf7MaQjCz",
  "key10": "Am4Zn4wrsUGXeRLTsRkCeo6y3vQzYapiib2BzUnn856buao8oDmG9BNNb5RpLaPCsqstjngTrMYDQeK1Mne12aK",
  "key11": "2jUi9qDuE8o9JtnPNeEd798gLRw9CX453c6vEWDfxKRNH95GWADDPUrZS5x2RDuCiHVAXRoKup9x2dkfXEj31ut6",
  "key12": "415VhZ4VQngpfE27XoRUiE3FQ1DiCV2f4JUC2rG7jqAtdpFLTzZhvAwGmx6bUrRbi7t3TFmDfKedmfwj3cCC5NAZ",
  "key13": "4PudR4TGZ5CGGA1i5En2KSKpKC7GkmSduxX2dP65uQNrXen6HLqxaBBGAwAzBqqXF93RqGxqDjykoeNraYcU46Vc",
  "key14": "5DtR6fHBP7PjnfDiHGxEkj3YWnawodbwK8dE5DcSKnyFssEWsUDwxeHrkK5PzZms1aji8kWA914cYKf3WNtu881d",
  "key15": "235o53kD3W4vorLdgkzR9XUDLX4XMpyv3S5XtGKYU1y6RcziBFJpbZgmGsEGTJLxTfoP16QVnfvLCWjFaJ4vNmui",
  "key16": "4tdPzjtJ7EYKtiHSZn8yTvi3wanMDSzFeCgQAiT7Y5A7UvWfYbzdjx5LasQQJebiqDvs8NyPUMg8h3yUm1LmVi8e",
  "key17": "3L1GYTvReuEm5Xqdb5pPbFRTuooexdvJF8CGGrm6g1TpQ8C1hBijXEazEQkyJyocz98eeqer3LqLKgDgkz3cU79N",
  "key18": "2vN9jaRRSseycWW3afjCiPTAFN4hhdgCkLkUikxCbXFqwJ5nL1pqmKVFX7j27zfJ3HsPymufhsH3ZsYzJ9MyVyEg",
  "key19": "pBFebSiB9CG5L8xQdKePtaUr2Yschj3mBrmPXALSQW7EcdBmXNLrET9w9bv5CNakEQELVgJxR9mJNaUibgBbLir",
  "key20": "43rw2ZpFRyACbKGdbosXRjm2vsTLRNMjv52UcGRdR9S94DwvEUSAhxrYfAdhYAVaFW8K4AYhP1MTR7emhVkH3M7W",
  "key21": "XHCA2ggnyRzg4gUEyAGQvUtG6Zpg4Yp9MCF7Z8j7gY4kDMybibwPonyaE6fVM3XiS61C6rwfrKicqxgXHumtBY5",
  "key22": "41SYDSyeKNHaqydvoxzqucDnUXvLxd4cbwVjqYcPDJaHgEn9NA9S2EnxMJ4HawFXZJXRrnF39BTs3ef8fTbi1bxD",
  "key23": "3sZgfa7gsPmCdNZPegsoGyCGioGFzoGG3ymHGeoZV6a4sdB49yn4Z4b1c3cQhUYFxUuhiwhfFcbh96PKWnYN5Dev",
  "key24": "UATUiZ1FKjZvjd2hs2KAA46rq1ZA7A6k92rZqGfhWcMh83sLUZYfscZ3W1VKU1GAyVcMGbDEk4jB125MrdbqQNY",
  "key25": "3Q9ndVyvw966Cy2Tmhx6UipGKckPftg7JmXqTj5ecDp2j7Lk6jsPCEq3bUnhb8SLm7miJuGKrHBS2BzAJMcMgPTx",
  "key26": "V9Mg1csBnWFFQFedJ6MyNte7wb9jH8qrn6DELP6yvtNawnteaAWMSmvLZy6QZWPsCAL3FCiGxWrM53zfDKV6jjc",
  "key27": "5cmHjE8khDjSXGrUhXhRYDybZWsTrnAfsjoDsUrQxSKgyQDrBHmtZi3MXvLBfhCdigA58DF68gmCnsLN88y1WFfA",
  "key28": "2cARuvQndDj1yQYMwCx9BhG9UvnNB2rtGKYruYQu8KVFXLuqUvPWuVZffkVG21CeSKZFEM6WdjHkSpxkCnc8M1pa",
  "key29": "4mxmGzvNkfZmJV3ZRBC793kJN8SWCdruJETqSBgTaenkcpHJPeFxgXLQEdNeiy9KDR2HRCkbyixzYwdEuwY2LmfL",
  "key30": "4fybgQxW3bhq2onqxvP4AEfuFrSPKgmzTX3BN2cvqqyNgnJedBx61p3CVU3yX5minT1MYK1iHQ4YLpgjWkt9GBZo",
  "key31": "4fBYceoQ6PMVTdEPL9bKzZw1GFDmow3gwHzV8FaVTiiJthujRjJDjiWvsygDdP7MrczBQgnj4Lj47F5eSDxmjFDY",
  "key32": "2Lk7KuTQ3J2unknqKcbK5sEjSrM8rXrLBvfjzmdWP3gk3A7XcGPUCgYoXeidYt61d2Cv5sWTiozqpcp3Eiqn3WN6",
  "key33": "kTCdGRTW7ygaZEsqPu3uY3NwRFrTbrkPKhYk9B2ZxnzA2uCbe62wB9HjNDDzHniHhR3zThcTpwkBszTbzYQbLiP",
  "key34": "65P9ZWUv2xUgHFoS7HF5EZJzyqXxFKFUK3KgfkxzVTcm9Eu7y3u1mFQUrPiTtKyeFnwj339AS6CR5M3Jby6PoyLr",
  "key35": "2escxTxQXm6WzNq6ThzG1xg9AbTiQaAWXsLau79udWkSTeE3yWcRe8dipF7rsdcMiLQ41ABmwPoNL418SSSGMipH",
  "key36": "24qjpPxfoSwYNSKpegUmXyq2dcmk7ipxQENrAgZXZ1RGxhvwAVN3QJZ8wrDBVrm2eoxrdgkba1qJ4JVYu3dgVmL2",
  "key37": "3an5TDk3hVV7X2nZ5hnQpho35LpEouCAtXApKEg77XaooME4tCwgD6byr4wzPvHfNwMQXg9ZnPK9EdkMNDvDyQeD",
  "key38": "4uNbBkgQYZtBm5snwSPFNut85mZ1KqLr6ezzob2UJzgyc1sWpJ6GwaQGSqoPNpMbeqJGMp4VzjsHETDLdDDrghka",
  "key39": "5nVTXHZ3FSPtLCqXPNdK943Hm4VqVj81BkQaf5d1FpGwVPHsvC7PcXGPZuwHFTUa88r5u1Q2QSUGYjBJ4bpKFgPs",
  "key40": "2y4Lx3x5V1FVYZ2xdfcQoJQMKQXaYxNKiYPEZTdD6WF3U2NPQWraE3iN74S7P9jTtXakacndCjuCtyoFQSppfD3B",
  "key41": "2718yYDmZ5fP72EJdRGPekZmnyzhQwCHz4jn2PHHvSjV27SdyMzfqRXHZHezjdWVXV9rYZpcrCvRMySzJ8VjiKTX",
  "key42": "4FADSH1nr8SkDJTGQLD4EX9FHW6z9sCin6VfTs1CNDWFT49opLSuYEBtoMVqF4YuyoFNWWyewKaztFeLyPZNX2ZY",
  "key43": "AikooCnykp7jv5f4Z8Ghoi3WZr6fvisx5Muq2junyZaG8C9kW7ycsvK95vrubSw5c6hLG66gWQCrecw9pGMFfw6",
  "key44": "5n8ZTRzAQntTSXtfws2mY9329bzarBKJLGWFksc3MPeqLZ79WdzadVFieiK5VXf3TvAn7YhGesBKkfeMkAz31sqY",
  "key45": "3BzyUcqscZoJsTRS1j2fFwtkAK8jj1p8MZmGYs69e1eNA4fZ1FZNgp7eRewbtyxQpGwEBvAzwKnMzdA7h52xstds",
  "key46": "2ScU9ho6EoAnPh9ahNtmpov4Z2SRBy3p9mfgsTwK6aH4jm41eLnvq7Pnf8Zy6Scbr4JzCdzQYnvpoEVnVYtoiwUJ",
  "key47": "2Dqca3mBWEiUfYeDXzwT6z7JPyir63K6FxDAp9xEiAXcjZuHdJk281NfD5U6MHba944wfADNUkV9QJxdb75enH65",
  "key48": "5HS2ttg8gAp41Yc2nTbNmtxb3mjfjZ4YLginWmgWZKAEQoZWHqu1hqraWSeideg899SxEn7gQJX2qgBS6j1yL3du"
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
