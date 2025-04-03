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
    "3icKqfZuib1hr62mq4hW3KKVToAchVFU1VGETiwxYK2MjdJ3CzRBMcvcT3x4rbBCDCkXGPkJP6EVkNUBkLn4mfWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqbo352bbs539rKgQZWKdp86aDa5dyAJAdA4M5qJSqgeJvbbhkTD5vdDwznDor4C8RQV8Chjo4NJwG29qWYQcXf",
  "key1": "2N7ww2kMDSDom5oHkWEcSi3PhqqyQ8uuVMvDY2y38t1NuQXerXhDVQFYrKTNvpA77vYr4HxG5TtRFmTFSoek4AKv",
  "key2": "4w5W32CKCBCNdU3F3REynWv6sy7ptzTay3b1QTaXCEWyRuvMnJMzwdEJxrHicBEqexNf6NAWudMpZWDSgXyisbCK",
  "key3": "3mqPPuefQ2sNXpBChsFHvwb498Soy9cCAwE16ty97Ys2Jmqq5EHc5iMweNmsncgTSxSsXvApvDVEZj61ngzhxZhr",
  "key4": "3gaA1RAK1q76xEEWjimcNYyWTVXwFpLoCWmTvb1JQenm18h4XzrVC9MRjWtcezSNg5vvCdTjorktCZfRbpAv1cFA",
  "key5": "4KPnsfzKBoVfFog2kBUN4zBaHfVM2Wu3JLxwsw5Gp6JNnHPeCRUjQ9k8Jta1C1o7KbHcsuBGujAGBYXMeWi3zWqh",
  "key6": "59Ch4WjvfeLufv7pGYW1GAYLUVZuoEJZRNk73LsTz1EQqcvrC4QrqFehexbAF9Fe75f433GaTR47Txjj9Vsf9mzG",
  "key7": "2ahb9ZsznCuGBW1zwag2itMRah5eVS7YkqY88ygbqvvorAxit8xqBif5v8adKXXarMosD7hjuGnputDV3JB4KCrV",
  "key8": "2VXf1xSNmfUjovzeq879Qijrtw3Dna3KgYWkypeqFVuvPwjLM1a97Nm91ejErjHyCW4GGs1BC8famqWpvBzhj92g",
  "key9": "4HAkWT3cPtZP5eSz1B9UJV2SbA9vcosznyiv9BxFcRJZo7SL1D4NH632mPDDWCQxLykAo2DkkGUGycA9KKLFiLBA",
  "key10": "2cvAnyTtmL28xH5S33vFMDbnm3uGzVVSnUTDncJ4zKcTTVmeyo9hqFDDNMBXnhqyRWUYmDr2qBerFDABFUb5uwnh",
  "key11": "2ZiAM1dsenAXxv4Xp5NVPwLSJbTFUnDEwvHCa4YDPra6XwQxcbfFs5KKs9tcSrKvuvxHbTmtvj7XjJmepyDpi3yv",
  "key12": "27FW2w1pxjZeoRu7KC6SZtQuTu1f16XeVqfWr83GA37eiy5h5RFnWsrSrT7msJDwEJoWZWhZ3efEszWXCqZBSQUY",
  "key13": "aDcRMBVA4t9E1qjHFfi9uk1DxGimXXGYDmn4ykuNzM7pS2UXyctmiJq5T4ooXEVptrbPcFPvQ8h6sF2Ynn2SpKQ",
  "key14": "JQGCckkiuDS7u6ckvS8FohPrrF2hv6BMkjRNC8FK2xyoYRFAKfu2hSpr6moq6fZtdtV9cETobiPxbM5bN6W26GY",
  "key15": "2GTPMrE9kdmvLpwC6aFLgMK9RGyC8kSfyQjrjMEaKyEJb5Tc2iCPzmGUy463LJkK3mWKYBuqWT4SmXqMWbAv3nD",
  "key16": "3dRFi9swpw9mEgrkgsvGJx1P4xrb5zbJh2vop5ENA7fJAJndccbWEV3i3qUpzibsc6fkGGXdjrvDBhPJKuCELdnf",
  "key17": "3CV39jGJq42Y6hY2YhnKaLGyk7LyPkCL6eQFo6XMVRzSxGxNaKyc1niDeHKypD3s2ams9Ef4fTAV34ELEQN9CUN7",
  "key18": "4u7QtPMnrVfPtQuU9Wii6bbmFQagMP4k8KDXkwDqt5o4mskc5A6w2UJDin8ki3UQaSeGQVVMT3wgmguSc3KpEVze",
  "key19": "2DdAW5KhXqfWmSzAqSax8avommAZu3FSPPUBJ4voyDddsE2WqkudBBiBDDy4qr5xE78RaCWbYFBtgqLpZ9ypXrns",
  "key20": "65yWUvoGpKwiyRQLXjaM3VRgV5nkWMRr7reRqoNR52SVHmQn1D5kajpqfngV4RDd2weSKfkuUrTnhRVFysTCSMKE",
  "key21": "21XYpJd4MCJtBFarVzMDXpG3Mj2DTikhPxZmXkNVhtLdMXQivWhqTrnfrT8UkrkYAteAFXuD3PRetngxSA2X1GwV",
  "key22": "2PwUyP8nyzRFsYBnr387YdY1gxZXTjLsW3U68596Q7G4HasjKXPrrQ6Hds2zbo36aYjrdYhtrGnFu3RxdjX6scQM",
  "key23": "W21F5gzwnLKvoq9Xt7ymeqvt6tU89SpCAaSBkwaSwbsBJu7iP7oYV6AF3scddeLuQh7a9Du3kiFRoXS5Ewovk36",
  "key24": "4fMtGLSWXMiu6m8NGr8rrR9kd4mmwq1QDXHeKxhgYkvaVLiU7LKU51vzYXU9AM4xt3hoHMVrGymH4oswyFSD1hhu",
  "key25": "67enXuqVqJWxToWemBsr9jCAWAgFv1qESLpQVbiNF8i6SmimEP6wRd387vnMVZM3hBFw9DvNRVGgAPwCFZKdDoCe",
  "key26": "Z6GRJeJJNTHoctHN2JYwgEDcvRZexgKqH22Bxk6nRABgTLGscjSQu7TeYH54ZumAgo1G4kV3GuDSChxvLErQVSP",
  "key27": "2nP4cAa3hSdZULdHCSWok18nhtYSohmP4AsEqgocAWQc7ahUwSKwDK9K3gtG3wG69BU3P2en7tTBfV87RqCY4TGf",
  "key28": "51Jv64u7BeBJHej48ccXv5Pfjzyuh4QLuDcBbYNTyNGi5v5FNhU1gJRUAjU9fcp3t9G2ZJMcn1DaX5LVrf5Q8gTX",
  "key29": "3cJmLXHWmWtsqaBpZkT13mXVqL3hpySKXt3hFh5ygbpAAmhF2SteqjnDZFcLcD1p1KzZcZZ5hadCyc4EQp4zVPKh",
  "key30": "2tz9TXreACwr868SgDiL6C5Dn9LsfipmKesTseurjqbWaKnkAsV6sR57QKTjcyZ1wh9Fj7cZg4x1AteXFfYLTrLE",
  "key31": "4wDRnn9ZWv4ENs1Wafepyv5JvtnnSArbe6zuqxRq6Q1NmwCh8R8ScKhvidYiiPrKF4vCkcfBkUAukPh2HKc1Fdjc",
  "key32": "2gSdHvMEw36pPWwVZWwJELq4fUwBr3xvQyFh5nyzLfPGQkHHJmHa44ZxXXCyCCJcageWFf97Aza8biwnVBJhyQNZ",
  "key33": "4nQ7LaMJU2tJ3JTE4mXWE9b7tEnryh743UUhCYhLKpmnudCecM3DRPm5RAMR6MaEmL4gHpedtgL3uhaCLMMSTMmD",
  "key34": "5Lwu84QhJTUiyYkysjDXoqHfnfGjZ1zn3dsEcS6RotSpe8jJ5ey9kVbKN2RKHzht7oV8Yt3fNZCWjgpUMHRgpx1q",
  "key35": "5ue4gLUyFamEaFaBso7VaguQjzDATs1gijkZBycFGaqaP2Mv7rhQemN9okGyYTygYb36wsTZGRThFUJF7fTHMDoU",
  "key36": "XKKWBSdhAomL34cxXjzwygGnouzJgSwK7Dv321U4TYprvESyp4vV2mBfJ6RGuPf6UCpJxU65q2kbwgbngA4DZ5k",
  "key37": "4M4Mh7EqtzAWwZh6hDgr7b6d47vpNw4FbsKr7pMxthMq9biJmdDT8pqoNNZxwo1f2ZSMWaU5vi9C8kuvtU9NWtvQ",
  "key38": "2u1kTat3TmfH8cpAoQWXgTMKY5wyGQWPaWoSdGrDDmKi9TUZV5TrE4hfJYMfXSuj46WJC1TdXvGBqtURLCmbiLYe",
  "key39": "5txtyMgEp5WafRRFrXoCSz6ekMUav2Vi3bA6M6NDoe84yP2TpEPCA3vwwwz57LNPSCrDEV4aoZe3FRXTrabv6ANV",
  "key40": "392jnhTLwKnBHyNnEx8sjHVxjjuh7RtU6BTRY97emwrKMB51tZF8JKnYPQPz7PipdQaaWFhRh3TgE4ANTLpo8xYo",
  "key41": "5FUgvViMvLUuFBE6xFJ5aUjQX6GMsGn7MU3nMLF6J4qAbbfwG89TSD5rPhoFeMrRT1kHcTfmVuD4MSzx9hqC7oWP",
  "key42": "4cimjrRhGyrnRj5TYpGJPLs98tbzMoG7ej5x7kMQcL9SLvEmMVFpLrmHNRBhR7CJ3341AhYSfsbb6j4B371w2Mus",
  "key43": "2Nw6mEEvQBFuhf7TA4QuVudf9YHA5sAuNQefFB663BG6QaabdDBmtPM62hFEV3ZGNk8dNrQBPXXQNKprF4PNTnWx",
  "key44": "4cvFttCVJchBn9U7jmkrSHFNmYZVyYNZCuKUufidQForv2CZ1sPCZZfkcKTBMjDi5KgLqQaT6Bfn54XubiikE9TR",
  "key45": "3mavVYW9mMJifn525KM5vcqhXavdsqBo4Cz6GFwBdQTJAXVk1Yk4rGKUMNgPv2S4eCDHKAa8vmGFMtu8fb6CoruP"
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
