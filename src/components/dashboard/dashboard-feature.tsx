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
    "5fU3ef7T3CMHAsxij8EdchRAdZGKkF736p1VJWUHzPgiJVNrkw2CHdGgUwCCQb8uUE3SWHXdQ4haVQ7U5rzC9HP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dqwGYn5DjEB376kGmtR1wUtDnkMrqnNtNcksABTU6jZG7exC2GgStJwFnXtjN691dWkQDziZKDwdrWZqQ21TQD9",
  "key1": "9tb5FrkPDB8NZABX9UXWcktZagVU375GHiGVovNueCkurfF1mvkvX2WEXFvN35uTmSjZoXFBLsLkoFcMHpw3RvQ",
  "key2": "5L7APKWvv2HpfevFPSiziyjXtsdgzpbEUD8oPWVp8weDGK2yiNSf5tCbgMCn23WkpqHg4aq4qKbEmNGVR2WkBsDV",
  "key3": "hafJMu6umHzpvRdW2c9MworBDQFsMG9dmk8iPo5HWFjjwBod9sJZqJtvDtHCDNxm1zTBGJ2bvuAXTmsrMECmRbv",
  "key4": "3nemx6sRH8HzSjt6oK3aCG8hGzUEXCeHEcovmfDGjcUzDhrAfHsbjE43cc8J9EbPKKMfxYKvgbCgTcbXYfJVink",
  "key5": "5SaBDY8yprUzfuXNAXpro82SrmuSUJAQDDUYNh4K66pzL9ByBirSTyZaMPXw197YP86EyLTrBkw4vdWbnBhbwDLn",
  "key6": "2uCWUjQSB3C1k3q9AYPG4qS9J6FinaGcW36bBSK9R5XGCb3g2seRW8Spci7eoxHJD6xbFfRhXgzCMdHdy1XAEccA",
  "key7": "fVjHhgpdjzFhp2WP5KwkQPc4bNfKTK8v61zEXnUKuZkGwjNy4hscPkTdbm5iABkRrNBtBpMcB2NdYsqGs7uGQRv",
  "key8": "RY36WJvZGzs3ytDqRCnYieKpZPJvKxfj7f5isbQYvgJFNQG1PbbzGsyyV73gPKirw4m5E9LeYGkvf6C37EsPX8E",
  "key9": "5jBeBZ7T5JqXXbPvYaiycca85XW3fBkiJiFUTtYvo3zuuBbmmpvWV525cWyp3C5TvYD5vdQHY8TvzwRVcGrVbyPJ",
  "key10": "5bSCWe5HmgrUWCPWVm8kEk5XHis3gHpWtEwq6vMgGnshVFpNpux9paEU1XHraLKAXvFXY4FnTjb4z9nELs4frcTF",
  "key11": "3TnbuNxkUFxfVhTQby7XqUu7VsF6H3sAES3ZY7RgugRao8BaDaL995udBwEotd2ReEhdsq8GaU569wcYrgfNwXPM",
  "key12": "4vMiNk9866D4j2PuhMCmsNju39ZPmoYNkrSMwm53QGtyvDrN27L3Wi5o5YiiKn9gjngwt4zzPQzMGHMEG6GF4mbG",
  "key13": "2uVNn4avJcT8XKKNdWVknMwd7tFPjDzudh4fsVkCJB86i7A5yetcr3LAQPnM6wavcsDTmjmgnPSWGNJRb3McVjN3",
  "key14": "2d3mwLWuxCTDSfopL8j8cF8aCwrpfe3SfTjqDUmQxgGkQrDarPA6e6wWu6LcMA6fgCb4C2ycz4HAjXjQGwASQPxm",
  "key15": "3E3j6frcLNVG2irD2kKY7tHYy4KDbgqF2S2WvWE5f7mppQtwa2RS4Qwk6mT8FeAibHGNzxP1GfJFNYoaRMEiiniq",
  "key16": "2x5SsSScbKN4hM2352kf98knUFsbDULo52PWHeYS13gWTzwiN4vY8TTJqDCRr7auPSKnfXfD35tNHeCeJaayg3Vb",
  "key17": "hbaR2YmvR6xycyR5TXpXyLMgf62i9AjnDiY1V1UVQGFoTskWGnshXiU5oad1Pdt6y5oJ9WixR59YYDS818YFXLb",
  "key18": "i93ywBTQHnwD7cwQUYXRJYr8Fu5vu67nMeX8caCVkK2cfFPRBqLbReMCwmkpyKHjwmaYUSSaPoQtrYNWq2gPi3f",
  "key19": "5ZWSkUJm7SU2vu49qCmRzELZLsksVQnJy615JGg5ihK4EsR2DkkuZvtUBHyBPxmexrXMGgtFnk7PgCuBTAvzTCqJ",
  "key20": "PaVorBZABVbigjfusx3fAQPfFSTwZUwGYX3Xs5fvyoxr4uYeZRx18iBmG3VsaypMgjAwc5zsVDcbcXyPVpX728T",
  "key21": "5eY48rmANc4GvaQbyHdZTQfPYPvhiUVRRCZsm7vEzRXngGXARugihipS465ueaS7yiGoYEZykeMDoQGzsH3pR2ZQ",
  "key22": "bi6nyRiipzEZBbaYn8VBzcxqaiG7HvGrnHiHAvHovzS443JEkEtBuqLLFeQ8e7amWPnuT86J9DJAPNTvL5Tnf7R",
  "key23": "5oGXp21JZcAEKLFGegdHpZ7Y35EGZGZc8d9MgcXXFheBPCdsBHrvsf9mpgZcFrb36eeoLn1HyNEvMh2Lv7p5ZVgQ",
  "key24": "2pdaJktyieK5vJcq9bfDyq6tRjqnXGpi8pkLzu1QS9hBKcNNNTkyYEQCjhNRQEWsetsSdKXXTPWuhdzmVFzxAqDf",
  "key25": "4hWtz29LGX1mApPUsMbz2v8FZYGNDRGdEQmKMKDn4RBxmcHbu7GZ24XDGsnr6HTchjPXo4vtutideGiP432RGX9",
  "key26": "5fa1FxKS9Uw84epGhJvHVT5CSCTMZWDNnvRSpkcjLCd9bLuMDeJRsrBctTHFGpUEDit5h78jVp1Kg4fTWpQp8bwr",
  "key27": "5aZthsbBQG2MF5vdzY1bxJ65PAgXRsfyvPRLgqzsaCSbwMeupD1HK9XnnmQ6t5m6hcgwRVNND8wZofCZkJcaRoQA",
  "key28": "4p7TonxNT8YVvbVXd1L52f7VySczCGPXjXGaNwaoD8AChXX5xavFYBU15sHPoE8Qy58HjkSvWKnvnL82S3TrE8Kd",
  "key29": "5NyJYwDRYSRtoQBn7Ye93dzhhCj6GxPnSuz82AHuqyFXkdvP6DXJ7ug2ZyxAkXS8gbHLii3vCrn9QhsFHYapeyAA",
  "key30": "2W3HhjTKCRAWEBQYsh5zJXrajksZ9FeTCfGv9wxaDUp21VkRZRfuUYTperMebvkqerewyzHYqR8WZ9w2KUr3EwzC",
  "key31": "5rRUfCDBCnoQXDoH4GneeuJXnHWhNcXGybRSh9Acw8xMVdwkdRNWAfyFMiKj1iiNaSBYEc7cdpfygYASPEWx8ZAb",
  "key32": "4F9v2TYxCpAJWNn3JSYjr2YZcp3pAfhFg1dTpyUzhAwxTK7ZLdYVZjstkMSemnqxzBFaSqRiG5QDs3Tw4PGgv9sP"
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
