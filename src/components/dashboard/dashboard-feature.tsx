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
    "3CP1wMgfEZvCCnFHuu7YgvRRFKQNWUJVRR5RisQtzTzyQvvCZWKNrn5PJNR7LgfmfWiwBLAQTMaauTiGmkKg5GxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h1mbGH9zwYKXTJV4ekTAEYPQf9inq7eMjXcPNTxEK3ySKF8YAo7vKLsTh2UQde2T9bPouHzA9sfMm4JVHZVpyqs",
  "key1": "4BBFd7G4xu7nX3STKBTCqfSvzSYkkzpxv1PWViqK3snStRKox8J8d9eUF32yRpGbp8nBe4iAGHYSnRXzJ6RxAjTN",
  "key2": "JAVhnrehdms7yKumRL5z2wvLDKzdG9DvLiz7UaQRAuTnNKLS5XioNx5argiN4GvfPRbmfFJ24XYn72T1B4h7SNY",
  "key3": "2UVmYAufCdXz8xtPHbv2ps2xVLgGKPMWWhGZc5AH4U26q5CjLdCCrXs4T1CHGj9etXQdTgMXiSpfjn5yH9enqsUW",
  "key4": "2P8KBbFeUcwrdX1WgcxXhmenb91UmMBaGAttRfRvTwpnxE7NhComiVz1GyWecGyPyofT1EdtWNAH1RrSniRmRyaw",
  "key5": "52NvDBJx8yY4GX3QvW184WG1HpfKNWfQj9vDCCWGWTw4a8MLLKix4vVWrtjrntnrWQ7uwpb4mMsBE9aEG7rbyXik",
  "key6": "3ouWbK465nJD1f14ys9fMkHiEWzfG8aiUT2UHuWuCyF4yqty5GQzFADeRUTW37APnLxYVqACkUFnR41tGoEA6SCM",
  "key7": "ksXUto7xvthi1sRsf3XofAKgTN9cAWs2kjD8qk1q1zfyvGMYAjabu9ThaTSrTQVc9s8URiTPvEHoGGiTVg7oMyj",
  "key8": "4d8izkjTzudG3Hk1CNFtktncKKTVebC6R7DjW1fBDAg8sMMtY4DicCuBcAbpx6UTmbSxFhasv5wjDzU4dXttTWkr",
  "key9": "3PgFXDb3DjkFQfxZQpwPk7gT7iqJ7veHyZP6SSntahTbaDsJmsckLzyKVvHE8Zd4v3RqGCV3rZ7S8yHNPr9Edd3U",
  "key10": "5dCUm1hdPeaSjM1Q5nontVajrFv6ndxezLi5tMVmZNwvTbzhMWzrMB43fC1FV6jnvs5kdQWKbve3ZcdiJRhifLBz",
  "key11": "3XPjRuh8xSjNnaMQvd3zCayhkRY1JiWuXn5sTrpSa3prgJME5wCpZQpuW7PfZmZqKzdCwTTq2SXhKjErUPrCaK5b",
  "key12": "98gWPGtYmadfWPm6Z7nTvVJJQbLsieeyqXi6MyH51YcyaFsJnFUqKP1FsnfzqBpxa1USvnSJsromCEtvw3ZUejK",
  "key13": "5hScb5RnKJCnz4eKH3JxcKhaaehSUQQdWPX7ZUNJAExV9xM7Pkg7HNEXojrNiJsd9K49j9zdJ543ki5WXyQEzZ92",
  "key14": "2yHx8cusZTjdj57EymCTwiWjW9XW2ZAvUTjqHXjvRuk6nd3r3mNB2xkTPpGr7dD2dqv45L8T3akKYJkxZJHKESgP",
  "key15": "D1Syy8pFHtnijWCQrSSw8ZykgGp5WqzzoWsXyYto2Wr1o74XPfydKT7RtMfSK37F4zjDqPwcr3jn6yqGNkrQoUh",
  "key16": "4L8TgZUPzHRa5uYxoN75WQ4Rp4ihzCXdMuFr1XPcGFNa1T7K7baNNmecFcYsKZcuQoy5bWakhwpbMNdYPvYj92Ue",
  "key17": "2EPHi91mmgpvivBwwLjdeK9q1u56GvtaSNSiQvMZSgeZGJm183NpUXD4h9KurB2toSUdDico8FYUfDs6WEWbFPnL",
  "key18": "gC9oEKfqMRmn6McDmPtRyrBFcGsBm77MJyqYDtTTg9t6QoCQxraCqZbiLPMVxqAsKuppVoTBCinchaq2wQfrHdW",
  "key19": "5xLDaDzm5s989BuBigTn4RLLVKMrMD2RtEzLLPK6LPP843d7gatuSJkYuUAEdTGJhxcovek4CrRCsfPEnxEFam8d",
  "key20": "39dadacHWadiWVJDi5De4xC4VbLoUmmH2cFbtRHmt7ibvKCmqaDR7qN5esLGV5aP1W2wLWfsmcnstidApZEUKwmj",
  "key21": "2AGnxa6zk7hGUgrmfwxv7qyLRxjZfCHp2Cevn9EvAap6fffNuH9qXSQHRVTkxmnBjvLgP5dTz76CLzRbvUgS9CEL",
  "key22": "2XGRgLeWApzhfQ1tYLvyeWEdCYNG4EjLq9mDpi2DUMmi4TBYWpe1njGkr9zGzeNrY2qVPe97fLQCWtX8dqM34YtG",
  "key23": "j2XyuckwyuuhXULBEc5ceYPaZkpM9yKh8Ur3sZ6saGEAiwbcxd1HYCq6m6Wd2YbGS4TC2ZXdCC5PSfSyd3CXLHu",
  "key24": "3gG6W1M6mkQAuqYRK5toJs4dDYLPAzQYKzN79WxFYX3JLF2apmeeDRoDsZrJ9r4VzktgKZos3qxMRaajpkTD4ggF",
  "key25": "65svsxRXDJTx1FvdQDKreo5mN8BifR3oST1LFnnUncd4QqjewdrNi64CUvtsz5n5pxiENTwN6n2yuhm5t6wxxmuY",
  "key26": "5mq5L1g3hsScqkKywacNfAB8Trt3tDEBWV23cpbnXHRU9LJ1PH2yyMUFCRryUR5eAxgBHRSqjZTf85BfbCXXaa9D",
  "key27": "3iwaMPxm5BTP33sfYHbkhGT93nUhKv7kTKTYmEk76LYYTdA9Lt4rqnsgwAwP6dKSjw13KvaRwAhBWtDmaitNrpte",
  "key28": "3NHpT4wJ33VVUtdFCq7yrc6fRY1m4xc7Hvreiq5k2QbJ1fRpBqeHaDPkdADSzbpyZVuxm6ePjAGpEBrqwZ8sDG6d",
  "key29": "674ZwdGxtprQEZbWNmgWB68mZBwdHmn94CqPSKsNUzikL5BiSHEmjDFYhRrZiZrxm1GXtgBLPe9fC3VnNf8vsrMP",
  "key30": "KsLJFhfn7GLMMzH1Kx7F7kAWtgJ8de5VwaegDv3kWoXvCt5LZy8SHrBU1n7u8m8NhcaxHoqQqwSfSey5afNr51D",
  "key31": "3m7LFb5XHrEiH3pQG5oFTbaVSPC68CPqfVoednmzSfg9aqZHSvAy9vEbjrfcCGTvGApK74Pz6TZRZh1475qXmVdc",
  "key32": "51Uwo8X8cVqLhdnxnN8vNSVwvxkv25GBNyS16SYGpdtNsnxu5PmBiLLUBHytfqkyAzu1usZbX6TpV24XvJV22oDP",
  "key33": "6DXDHQkN5DburUXP943abEmMUww8tmGiTQXL95jtpPVuN2skPMjkbA4NZdX6ZHh1wPDR9uvHVx2z5LXYVYEYjG6",
  "key34": "4ZuFtkb3ZbDcEJfKQzTUV7AQee22px9YF5ft16EgF9d9AriLqJiekPLKNQthckx9Z5TVwiQZwBg5MbLAV26oXGeh",
  "key35": "PFopBvuAun7Y1ZcKzLMfSEpFeDGjmttgKWn7b5Mvz7XmgJnXAQ9bAQss5mRZdDPbJJPRCAhJVCzTnXyzXqgnobT",
  "key36": "5veXEaXvdgpatJ5p5QAw5tBwMnhfFA66h9TunQ4EfmrvAq5CD968mwgyhtxGan7HQsYMmpVSNHej4Qv7eB4DCnnw",
  "key37": "2Av8Zxekn9vzxENNVmdhidS6md4moxbsh7FnyNw3CQuSCEQqcUGSfUJVbaBSL2jMuLQCGHMwwgW7CasL73gWLuiK",
  "key38": "aeKg36wjQruETX1h31ssJYJaJr6yhz9M23UxAXuDQYgkQsTjwiwAbfqmB3qPPHVFgFBs8cGhzD96m3CQ6LDT1Tv",
  "key39": "5HjUHSAoMAD42oBihR91vKMxDPjmFRY6j3xKc3wu91GMBxqemAuhRT4rAAjKaG2hWvbXUfSeQFLCFyfEnLzNz3et",
  "key40": "45MAiHuHGj6MMXswkzsv4BjQ2RZcjG8fwDUPtAy1xiydCc1gmBdEQUitiJoCApee7LPsnAhfFFKVtePNf4WpnfJW",
  "key41": "2jjkAAqdTadZF1nwe7ajXBYuXg8ZmUr3YLibtoSTWZcPT1T8gDQcNbKKhYVe8mcBTk1wnsaaVFH764nwC7qKg2AL",
  "key42": "4UWy6pEWFhBWRZ595S99fzLiNiRwiaUBhPcyF7pMS8TpFgeg2kupGDpqgaWYV1t1YXknWpcoSGV99hTueW6dNxT2",
  "key43": "4KGzDi7VrNE4uThTSSdtNxKUUk7g4PocaiqwCKYBbrQrx2xVd9oiYboGpqeBbjLfDnU831QpuxY7pkovCnTftySC",
  "key44": "Lved7VsRiwaYBrCiHb5SDz49JJuxDdqvGbL3gYsZm8u3EX5m5QTw7VTuVrbKSnfvpd31hHeRk1UTTLidsLuxmoK",
  "key45": "2XQm7PsGvdd2h65HP6riqE3YJuRyLLEwbfQLhX8ShUig4pxoapRyCGB8ETnhVk9mvaF82iMHrt6TVcj1eVKXJS3a",
  "key46": "2tKsP2LwPv48LJyH3gjL7fKBkDHdh8LkBEqPH1DrXAvZ59zaLVC7reYwvPUsye8jXdvAohbSw9YPNA5KNuUmoDsB",
  "key47": "QZ2eKkboSCfusPq3iZtxw2C6odtYGndoMSy4WGMGKR2k86ku5cCDsaSJiVDwqtsBf8CVQnXVVrKD9y4mT8MX984"
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
