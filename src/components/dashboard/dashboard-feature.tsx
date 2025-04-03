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
    "3Nk4ciNcq686iga854WcUHMEckk7bkgQwsuPUkkF814GJkamaDLAzJB3axgjoEGEUQwFWAYdg86TS5269Y685jTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VPwokgz4bey5nhLTodjCqjprnfXEk6xiRCdSKLBAdp7EicWuw8MVi8rXpJEzdw5vyS45EVFh4b3ZFtNMvnRjWjY",
  "key1": "2vSKDu5oMkLd6sQZwhv4f56WTLLPfTg8zcda3rjujC719J6YArY5H9XHa1hKY2HjB79U83rvwZhe13gKcQnkFE87",
  "key2": "2z7ZXCPuzZ4Beikx52B5CDD9iLDzi1WnHBmRpE8Ud1DvBqdB7wpYv2D5e8kJ7XbMioCN3iemgc7QJsCysjtYEvEF",
  "key3": "45EW8SpzwxedtgvuhVtkiEQLzFm6PNadcaJdEnCKXh3Fz2idQj3b1Z7RgUwTSXt99RFmkWKqkkxUKn1br1XPQyvt",
  "key4": "2kR3Xf4vr9BgMefW9m8JGywETpC6FwP9BCkcJpnG83316gaZFuu6t19bCygQZyx7euoWbNnx6wfV6T5XZSZBG1aW",
  "key5": "4BJfnKxytoVp5e4byXfgSnaYdAYi47tXGmAEkF3EtMYxh6F9ZiJKcudLPw3v6bYoxwP66pudwtBjVoaBkpT7VKRq",
  "key6": "4u7YXwiQrKZUZG3dvnanKhHjcqUEJ3t1U1hjsY2spYosfErWWTjfAZ2LicC9HX9AWjRPERcYEdyJNfUYm9jzeVsw",
  "key7": "2A3UkZdZUz4HKAGmqoTzKtBxqKti3t2rgXU5AjXwWRfFCZjEguvj6kZYVz1soTS6pdjrooyudUfaUqMHPbUmQwnp",
  "key8": "5xv2Wg1pVLNdBa8mPGHhyDLTzitroDbTobuEnkAwk9F4G4VvTZ3Mf8iSin4UR2ra4oCQhTTJeYMkoZ6Uej1Brud",
  "key9": "2gQ3isS3q86yuaueEnALsYC9GckTtDZ3pJmDWUfH1aLwpAeju2h8WfR3TRzM5cCMcvtnahM9UzHzGg6o8AU6Wev4",
  "key10": "5Ttc39LgBaVU3ofqhyEcqqSe8EHoN8SQXiChfVD1JNePyo1dn744RU1tNH2BiM4R7eQNuNRzPoPgpUotjKdVfXS6",
  "key11": "2hLCoCfGi3MqDTt8GiEKqaEZwsR5ARceKR9yXENpgnvN6E4Q72NkaKHzaVXqP95sBXP2PZDyDWkMKteuRyBZFYDz",
  "key12": "3QM4ebPCRTfdHvCJjEWbUDThjmztJpEdQp4iELDdqVw7MCoQi3msqhdRSfF3MRawPjuawQtMmGJbTgFey3vBPKbr",
  "key13": "HtHyXenQoKABgWG8LajDzQVdYtSk8F2y9FnX9zpX7dJ7GmDNX4FmyfnQpFdqSkTJmS8X2eL3dgP8bsCPaPgjHSC",
  "key14": "2C6TnAqPbBGkQsuC4dmESYVX2NPdV3rN9wPEpSFisKkSf4NMFb5MSe4Gvm7QKNFGcvb8aYdNptjNEQbZy68uoiT9",
  "key15": "3pQFTzzgUHYEEaEt2Zwap5ULhH56qZajyUtussQo4Syo9Z95DMSkt25emkto6sDKLvmWxjRgxu1jtDpGMRqNg2m3",
  "key16": "4LGvw6pee3oRYb8RHmrBXVbyDsXSASfBsGGuhfNVCnaEqsMZySwFsyxrShaox6PEPjAyechfqcnNpj3xr4s8AaNH",
  "key17": "47a4V1vQXcHPcvMN34FUBbPLh2jn3cYCWv1wUS77kwk4fUMa9QierBhp74CDUB1Wi2fzcFJxoE4edb85yPtYnYhN",
  "key18": "4orQSJPspMy9cRp24PLfPYL9mWocbmxUzL2vXqVBReJoWSKdxxs4g39DzbUPSaX9QbFxrdajjVNAiv4xjcSu3omn",
  "key19": "26JpDKwHgtxSEX2PyxdjiGghM2b9JJc2o25iY925tRA3hmEhYyhz3bPRMjBwBiBaUw2wtVTHp6Eo7a2PpDKndCwj",
  "key20": "4q8AL8xrCU9cprLxbbtg8Us1SaGEXF6xbSEXPcxi8KDquhX3pim3rLJo8bNpNBS4wYU5bULFBPYCyMK4WxVJihZA",
  "key21": "5TaA2Qd9anpnt6yj1Z26eEJnEFc1Jt27T7kFHuM9y3vfyYCn2cKKJG6rX7h6oFBjorSwhsrg5wQzCVtgMBPvQY8h",
  "key22": "4PYc5ofZ1RHQVuuWhUpKdD2GhxuDZsGtjYefWTEGTBpFPpGnCesDa1WbymrtLUo8ugK3sfFAmJk3ee4mRcT5DnQ8",
  "key23": "tvSCa7hVawH7ELhC2XvtnPc73Vu26Xav2hMJ1rK8XCuG4gnMTabge3s1HsBHJQs3TnfR4h4c64AtZRA37bnYXGS",
  "key24": "3ETVKDXPHcXAQFmj3LKToT3LkikUSVPjfh5GjjiP96eEZ5ZVFs8TY5TX2KAChmqyz9jCg5L1tp4uDA5qxVxKT8rr",
  "key25": "34cmm2bXbaEjJT8YLSx8D5VtXCBdHgT4ntZxZ6ifpfJkwRczJghBhziPt6c7g2NybGQYsqzWQTSNjsvD564NYZM6",
  "key26": "2EKjvzGqHsMhYSnLgL4PPhYRfXCUSWBmsgJqsAyK9HDYWBNJ3eFT11MteB5XY6JaKyc4tDvPxEHdm7a43odgXhBb",
  "key27": "5vS9fv8hvCPyKKoysckdd6nBYkWWiodnHoKHoWzi3CZHh4N6psV7wPuiEcMYx8Nv2B88WRL7KiwXY6LCVwSHaVDf",
  "key28": "2wc3VrrcLuqQMvUW5SquXUCc9BeZmHGpnBKijLfNK6TakzMTDu7ZLq4G5691cUjsB36w5sA1hYqzbYkaao9EkF4",
  "key29": "5a7s7mioc5pzr5rmrSyRq7goieYVcpoDazWqzznpmXJg6QF3YWZXaLTYbgJkmr4fHoE2dG9hGL3SBmEVHwM1GWPf",
  "key30": "3rCnyebw4XazeWcC8WJgy2AMRribpkKXRs58UhNX4NC47SKaecVCa2bivpKBsFN1JRbBk3JxX23BE7FryQbrjDr8",
  "key31": "GuzKvRR7X5RXuSVdMWmY9XDWt5ZcBHYP3AudEP2FrhMFzEV6NwkwgP6bhwgj3MMghSt4FpLSjUMV89L1dEBGHww",
  "key32": "qseWKVQkTt5zgTVTAt1XKbZPn4fHN74SKTfmP74MnS8Xfyk8qTshHm3oeo3co317EZ9GFcBmE5RaNjfZ3CWribA",
  "key33": "21Zvpyqv72r7hRjmnVsAHUGX3w19wpFrt4BXi1yzAnVoampgpdoe8LZWyS9uiQiaBYM1s3sMd6cxqkBL3uvTr2Vr",
  "key34": "4hLmZcy1vFkujf1sHzn5GZ1UiSqr275XYY6LvWoQ3uQQiFBxUGN7wJhiYHyqy3kTTCMMAk1WFrB45KxUDhT35Bni",
  "key35": "pxdkMo3wZMcbAJqk1P2hiuhodbi9wn8eS4nELa5XF6g4MWR94inzhxURgoQB7YQGPnhQNRWRcF5Tg4GCXscTyDT",
  "key36": "3DbWsBjSsKjFDAkGvmw8gPK3v9mLLX5swSe4ggcGzyiusyzoCmji9KdAwPT3pFFJCNgRn81RkEPYV6ecpMtKzX4n",
  "key37": "3mdW9Gcxhg44Yb7EJUXtKfcuZDmQ2zB9jt2G5A5f8hqaqm8Li8C7GA6uAAWgmJouQF537MX8wpTwNHu1Vi4iVsGD",
  "key38": "2XrR3459qEfEhtvvzjAdCGbtYCh6Wq7iCKWXbWZ5gHxtiUU7GKbffvknFKDtKmbbeeXf6ZkwsCWAzUV3nPPMCRuJ",
  "key39": "32VhsaCGe7hjKPhUqbiEpSZg4Jsve8WsToJcRUn1hoC1oakW8f9q5Vyaduqhdy5wNZG7P6NiHH3jAR8aPV25i9LV",
  "key40": "yvbg7dCe9ELKXJv9Ru5i98DRDhbYey6So1NZWT1328fBVGV44t1hstU8sMWzGUQaEgwHBjCLWFQDMnWr1d8j58h",
  "key41": "5Hw2kyLci9UJXSX2M46fV9qm1p5xzKdtDhCd9ryRq6yN68NUpMB39tTZJ4W1XSZ7nMGCSN6mkbTMsCwsEZFRYQGz",
  "key42": "3Qivri2NNZ8DDzJThoq71sHrRLH8nVCJJdkdjJUAzmZF1Q97d8qwStBQCW3RYz3vyLyQXwQmNjqKGtEUDrbN5ifb",
  "key43": "2FoMp8ws4DhDdv8yf5zNRLFFMfFCNiJ1Q4d2Gd1h1KhmuhRYXCbGfLpv5bhiL8Az2pauBCUKUkBLDrNmDtDB4NWj",
  "key44": "67fkq4tcJnC1Kj4aJe4cwTUrZ8EmfsQed7nGcUS5oFB2YQVFHNqNgMuLNfw4hF7x6Nc3hvTXCka8VA5T3DNjEwMG"
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
