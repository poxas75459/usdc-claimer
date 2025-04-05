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
    "4L6CekqTQTmdJ51vx4Zcs4Abv91zQN28uStJYJnFyH9v7wCYdZT5A7omdjqKiSMHF2MDeqAhRTz1jXcKPq8QkWii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ozbmRt6sTsVu7VaJiAHfsuF6Niz6AmvxvCMdN9kYjQV46KMZSeHkoEfy9tWnh7SvfLMaJhfTjtJQd9NthzDedvg",
  "key1": "4P3Er4Q1KLjvko1xY9AB4vjVaYjt882eJoXBFggdpPcUVEfinfdzp9gB6TWnE3gNe3p2NJq5P41jjWTq2mznN8A9",
  "key2": "2uY4mqJw8azdRNLmuUSBCBVGSJWb1WXv61ShV6TcdE7FGUpMwN5CmbX62mUftaj78KsmgqwKxq9EzirshMgoue2o",
  "key3": "XztZqk7cKNZKkPkJzHyKbCswrtWPGgFdL4xsk26WWwvwW3wTZsHCs6gtKxrJxSeSvuadTmATkEZt3NUVj3rGD1S",
  "key4": "2USBzto6PzYDKeP6evhJFq4gf5awvREzwTPvUk39quMnbbsjV2eThCEbXXYxy34geb3UWNjrfx1i2HyqPpPFzM99",
  "key5": "5eKy1e2pxz5phRvcxSr9nX9g3E7PR1rNQZt5BkCT4YD5b5NzNykrtYmx39Qox4qbBsrosYSF6LxuJQwhiRvrNLUe",
  "key6": "4Fqt4HooMfCRtCmCE7RisV9yg6UkMD9Y98oQ4Hu3ScwwXhz5RWkXqMSiugbq49kNZbmKFF3hkiWUNhrA1vdoTRDa",
  "key7": "4yLP7a1Jop8fnrTXZjAe6etN6MgKZinimKTRx83udrrVBe5CSZFTjg7pSoJJX41GE9n8Nq12Z7AbtK3jTKGdfe7W",
  "key8": "3YgWgQ8zqki78VHnvAMWzW539GNXDRaw9SAmT86DUQFDP68WtSJCEGSvRVhaoDZQe3CojcMV8p2eaE3gMsUof8Kt",
  "key9": "4NEzgLSkfnPHA1BSR6LPoGpUYmm1mNG3FfMFfzep5qVU7Sio4MAKCsENVQfMC2uwoNL2JGiJHqR4Cv3MpS3xJiCu",
  "key10": "5tSb1S97GJAbmG1UQPvtm2Q7qXD4dVeGUJzVvhyuLdGnngYiukfZAk7JUKZUNw8pvKwmUcfeUXEA2Cc4nYJSqK39",
  "key11": "4wEh7GXkPUmHcDGrv33FYfrnF66gtUbBTr2yBnpRV2EDSFy3kTgFbFADcuqimVdhY4FjV1Cdfc5YTN5eBTAA9XE",
  "key12": "3Yhy9dfbCEzwy7mPmD7GbNtVZM617oCntLTF4HtqsPT1trA2yWo2uN6y2WBKTA6GizQTXw2XrFTjsjY8hw7Gc8i2",
  "key13": "gsGbE9UqeQmLuNPdj5EmPQ2Cg5ny9Piv2kdTdFVham9S2Qau5S5K34dgURw4CuUgvsWxyyc2rHkAAnUsPe2umhv",
  "key14": "2kGkW9TNUX3UNdgCCopPF2SHUTtsjMaoYgKDKVBpGZfZTowVHhxNp87LGFNeE7gNFXjrCqWnynX6UriXf2MTAPWz",
  "key15": "4zc6TRiYzDPzsfzCcJoJd2WaNaPhg8AEcHo1NrUh4Uaq99hwi5QSzsznvA7NjjYfbLGyS1XMexrjVVMP91CSeyn6",
  "key16": "4gLjxzuTZxYtd9BLWHB8rqcTmfL5j9XzpWX5UN4fVvKXbcGCP95rVjQP14hrQB6PyLddvDdDiwcE2mFHfyJYPqFA",
  "key17": "67nffYYjF7AQdjUq1B5CrTSzBB7U2sH14fCkoRFRh7a3Xm7KKeyy8whGUq9qJPVLWvXfaQikCdiQoKPg1XfW3VVB",
  "key18": "wGL13xzEjMHX6TZjW4ehXQpP68V2XY8ZZL9WZ2eWcX3E6n9HVzpQTv1hgU8zy4PYyzvWnbZgmwEjX9FGjhEctQ9",
  "key19": "3Hn2fmueBi5uWtSDf9ohUcAC51vDfRaALXBV2L56ZBDWt59UqHwBmLfMXGzYERsuNr9Z62JP4f24Uuiopx1uRWBY",
  "key20": "5HbAHZxyvAAL8MFHwQii8AyToVQYMZknXnCWiug47RR3wDKDCXdJxBmmHpx4WaErNe1Ndsf2u2pE2jthnB4KnjJr",
  "key21": "4wiuMuCLKaJYuQMjDSmcWGgRJ9j9BntsDczEonD8aC5bT2t7XL32Zji6JcF887yYX6wiVbcUKHhT6xTavcMjk8C",
  "key22": "3K66WhMJMskaaeFaVMUnNr5SHFe46zW3Cf3RQEZofNhrNaoJofyGn1mSwipm3REJ4LuaNN9kZgvyMDoirUCDQG5b",
  "key23": "5CpMxYovcoXa72RT3MpBUzmyFfLThcbGmPtzNmMJszzC2KKxqvD4r4D4YhJygWEKbu17CDZuSa7DkwaWpMGD8cGp",
  "key24": "66qg4UyL8ejAozWPNB3oReyC2N73kwi4ZuEEhN8f4LfCNWXeLRPnEyysiweLQ6feeKDwuzQm98C7579FdJePmmsV",
  "key25": "4wLKAruNtWvQQCCQiTBnGdKpZViiNua72PgJc2WUSw1JeFqGBqeroZRFmMVTcfLYR3cxBaTq9aPNJ4Ty8Ybb3XCt",
  "key26": "4fYnCsjmx3NRi3KGHcunxRb7G9SW2v7Nc5PNUjCMPTXSPKuxnrinARjmsAPgTajzWaFYsPu8P2npqUhZ2AM8umY6",
  "key27": "2fDwiy1jqo6Bs6VLbM6Xo6o6WtWGFZiyL7LzPnQrydUL1JMgsXMHBJwFvRXBH3cCDDzW3Q3rx2SMrmysEF1HLc6Q",
  "key28": "xZCRxKe4wKLAHcLo847urwJWw3c47jM8F2thnjTKPHEVNLheX5nUHaC4o24uR9K1S8oJCc6Bbz1HEJ8oD3z9XUG",
  "key29": "5adYcZHVv1tQoMAG7dPyQDes9Sf1DgewHVjHMZeknNSmBAfaFuWNr5juavyLnKznEAXEn3TXGM4yUzZN3Vugybjq",
  "key30": "4D32B8ucJfdz3tTJWbELKnsuQKE67rpAxwHisQZjx2Ar1943xaCeehsSwSCGGe5SpGd8LHBpazpUFeyF89JNcBrK",
  "key31": "3QVRNotZNfe4YjT7PZbjq4Czih9qG8vVJepcQ1kQ85P6Ta333JpAYJtSuTE8tEjsWCcXYBEYdpGVjehhtmmHZjf3",
  "key32": "4Z8VKsT11UKbAg4BmGdiDf9xoawen3cYnjmh58CWXESiFZZ7nBHa14rKuAh3RTZ1FHLyMuXiBg7G5heXsfL1HTP9",
  "key33": "VwHjPmFc8pfrZgiRcBLU8HjSxFuq8AseKw9b6TDCXEkeun7V5dRW8p5yHpWvV3NhzWbtG6FdQyADAaVF2JNYuX3",
  "key34": "wKdhvNfcHPnVYWbnuqbJVPD2un3pid8Lw2ukxCJvfrTUEHye8jDE2TD9AcCfiBFx9pgahPyCPSQLEWGyn4kGjpf",
  "key35": "4oqzhQ7t1huSNLgPc87LoAtBJk3nuVgWRpkVmiACJaLp9AbzUxsvMiThaVh1J13RomHnYfRjd2G6T3s594nZD1HT",
  "key36": "MQodx9iMDnCHGnXVwGb1s4ohDFdQtyGbMTWYN5PjX2xhj7fb57dDDNg5jgkYvszj2Justj9kz7GV7bsQtTni9Ty",
  "key37": "34QdbtNYSxExztm6THzt5DPu9H34PpqM2i1v48RXRsKxHvUkQQnJWRkibdJtZbHCobPWeZahrDkCsDT35rTrh8eZ",
  "key38": "5C28ZuDoyAV6BAyP5kxS1rkwR1o1RtJsmpxRGMk6io9W9N8LCPyKHK3VFcx6d4Hva1eo8YHAiRJGoa64AnneXJVv",
  "key39": "3Q8v9ybyEjrVkX3skwkNNeVyst5XUUacggQvkE87d3irQYhzp2Dj9ZjrpWdN3iqbwEHA9bkdZcKJxEz9QHd4roF2",
  "key40": "yWvVX87YtCg16pVVkzE2RV6kRdjHsxPRkbmdA5UXjAmP62H5BAfiqwxpURNYvfZ4kLyCL8J3MoeU7ocv5j8KqNa",
  "key41": "4JdrK3PH1FrzGF4oXcSLgyjdQdppk9jDuYgP6F3KXkZ8K6C1Er5Ahhon1GutUE1SExf4eBiXbNyCg4HmHKU66z4x",
  "key42": "3ZH8TLeAeESEm9P6eBRhosMGYhaWCySvKmXv8kcCEPSMTn8RNSH59js44Yv2rnsBxHe6V9R8C3oj1rTunqjwoeHZ",
  "key43": "599u5mprbtSo51jtQCcnb1VBeFCTgZn1jKmFRCTw8jx26WzEhA4vuQnieSJ3zueLbsksbmfXwx1Jer2owuVW18rL",
  "key44": "3Yfd1mYmqjSzzd14GFzS8ec3LevMzcwbtB7gwYA1jVz46nVC8zJyCF46NwoSNTz4rXvvmWZG2qy5QxVpBkD7divp",
  "key45": "hJudHJx91Lt52aYvSF11DNgELZ1B3rJzRtASACzP9Bo2mGPTRfosZKYwuXC8C5ZLwZAZd42xvvEiJvRpanTyGP1"
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
