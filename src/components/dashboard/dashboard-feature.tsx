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
    "ifyiujbfN4Y9s6dfzBAeBxdrZBJ1pQ1N2b8EGX6M83XQdPSKXgrCYocpL6WRMcQMbnzmmAF9TMg4biSHbhxitwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64XbUe5XPFo6mzqXNAS6m8zHEqGTcCBCGCKMhPFPD8uwxNoJr4EKAfEwptQVftmXzUYz3zAEEcBTqkLMwXVmJRaS",
  "key1": "2thrSHgtUbgeG5ssHfGvPVy1ZBbRmGh2ngrZmBwApUDWCnkqSbxTzpAyzeig7GS2ZvXi2RoeR83Y75cby2x2kFAn",
  "key2": "3rzsTh57Hza3WbJSa5ZmwfJGMn5v4Gu7QjfMFCAotgm4rRLipGHUnKPrmYzNtKNR2tFqDW32MXWy6C3ms6X8mfFf",
  "key3": "5LFSpkviVera1cJvQfz2eP5aTK8ji8oy8dA8a8KXd7Uh8n7YTeep66UEEWq7TncpyX27Akd9H8mAUodDr1CaHK4e",
  "key4": "4EAMjafYBE24HnEK5KLcBagDRUMKg8TDFYTH2kd3Ge7kDE15neXgwiJZvJHhdYwMhzJgwwnGqbonrfkxiNKR8vBA",
  "key5": "3C9ajy5apH4VyQgTxHhZ7dE1gxC9zZXk2yQT2oGrGC9PyHT3WSnizJQRK9o9VoHjs2Y2Kist7CCctWvkYtYuN34N",
  "key6": "4r7oPYyHsBVo7uBwX7iJUxdtsBWNCoXZzSjgaAkVProzx4jX4uAVg7SNE6NzJ5H76iFwq18UdARauucH1pPPNohE",
  "key7": "p5Q19FEAV8FbCAZW4sMZL8P6W4cXiDCsi1fmPrkMx3tJx8re2JMYy1KrPmnnHz7L2P8TbCtdCtTVHzVRUBJ1ZwY",
  "key8": "4uamrNpstYsmwby6LoYZt3n8updkNnvfdftiECmHdwF7joQVRK9j9UrGRaifef7Tra44N2YJw5MNtyiynRRFvQD1",
  "key9": "5jPSwucWVfW5M2ge7EioG3ZmmjVuHtu1TWeoV8tENnoyxuJuMX9DMJMVW2tcsDwWusbd5V2muUaDwQ2edWg8o8Dr",
  "key10": "5c6FUczaXhnrHr6Htj3JABiwv1rETwhZjbYmfPuXyFbMH2246Lp4ah3PdtrynJ6PZvYX4KWrJGmFtbXfTQzWBwYC",
  "key11": "5VqjCTS67iCigC56FLQYhu1ds526LjUhmL2mC3xNPjuWHt6LcttcRTJuuwCJgXotF2185HBFwEvfyffmR8YDs3Da",
  "key12": "4frHkesAS5T1UypqkDhiJqAnAAMNYgioHkREensYdnzP3ys8Wt8PMfzfWDXX93bwosCvBrQZi2s5y9z9uR5ZZrkZ",
  "key13": "27ZxXx23Qhd1Svmxd1Cgm5HKcybnCaPeBcSmex9PiYw4nnJrjWBJCNQVn745Ky3ViNmMEEXmbUTcfRrQ3tqgwm9t",
  "key14": "fk8rRcwcaCSoHWFkY4uiUbcVZX5vSVpkJHtUhY5nPmZo5a7DUE21sw7GA8Mm1nd1G7RMkeFmuHp9VQwDKHYjXQ3",
  "key15": "631WgG3u2BZnjH8HsUnZm6fZTGTdQ65gzdy49Zbk38NtT7CMF4XxyUxnjbSxAGBzxTg9iGxsFj85JJ1zJfVCWLXL",
  "key16": "4BGvSHCRBu3RFWymTvP8uh3GYEKEU4WkxrLSqfhbfo5fWzugY6YECePnt9sGtRAnyxPA8fGTrXSbdyTzoKDyDpXg",
  "key17": "2DS82TNBm7hTwu6n7KQNXat2dTAUsJa6iwbXRTmcF1UrA4rYqqgGC6Yd73xKbbqkEeMG6CME8JaajRiziuVETLbF",
  "key18": "3a6KyiXaDsYFsGszUFMURyJK3VLZYUXrWQnHqNoUUXhLUJtXidjK33NgGE9ZE4tza3PsM22MLrJpKLojPm4VCDZE",
  "key19": "4vgckr1ePzGXVK1TxvaqD9NQQqub49n54zRXobejWnT4yHmm9UenkwuC76cwcnoqSxP5BcgetB75wnJVGL6Bh1bV",
  "key20": "57vHuXnsWtE2VnythncZedgihcBRfKP3iE8TXQZdBk4DqkwJBPtZDfB3JxuyPrjFnrA8yjgQEejiLMYY5wJBfsyi",
  "key21": "PQBVuTK1TypTggVgTYjCuoXeiJMHK52MrVxj16BsnS14WKuJcwhJrEPinpm5c9xUcvtfqCsw2mJAQpyat8WTM3j",
  "key22": "4NSw54D3VMbaTrRmHu7fFmfpS2B5Rc5jAFneXWyT1qZ8jZa5eLAxQcLCokggG7ChgQdiR13oFkwGKpM4s14dQ1Ey",
  "key23": "eGvhs98QJmBmaM51mF6CpBPjsqTewazBhmV9mXy7bgj5nPoyTR5Qa1t24X2xH8TkjjkWWEhydEZtKsbug7S5imM",
  "key24": "2jq9YiCewNRfWy6BGiNyUgrj52hyiNHSmSaJ2HeFHGQQqCvfm8jBuYQdieJ27ttJNNLidiMbJ7pZGH4igrQSnuQ5",
  "key25": "3M4kppSpGeNgmqXvpMtozdvDwzFD13xqCrj9MPY7Yw6ZFwdLyDA3jhnUFsYjB2FRc6DSH1VEme28ZQtFq39hBtLM",
  "key26": "4MvjjkAPEpsMro6SRermakCd1RQtFmaPhKuxhGeoVZJauSB7tkobiih7cuLJsKaAJQpJ85DyH4f7hb3E6THbE4i2",
  "key27": "eSykppPiQ3D66hepgHLfAuhhtWgHpJeXEwjz2Vf4ZfnaSSQXtxNTg59cdn6sSC34MKfAHSVqZtcT6yXCvEHE1hE",
  "key28": "4FiwM9tZcFdHRbkZ3yAhTN8YNEJ9oRWBqxNeTUcT968zekhbgjeYEuQBgE65Ly56CjrmzzTbsCDAp3E3QwzEtgQL",
  "key29": "3beAtTmhQjCxxhmKQ6pNpTT6rJZ1YMe45GxUY6iBZjQEhMswGjNCJETDMN5Vh5EZzKV3xU9mUrjxFswSn79JPnUH",
  "key30": "2pwmCYw8912npqHosB7mRcodVUVYycsU4nvNYA2y1qfknkBkGe51a4tSqoxfEH2QP3ToYMP5dgHtB2TeD5FpJeAk",
  "key31": "9cVTi9wccwT3GPSQvTeQNPp9s7VmCPDnAYtoKRsJ9M4WPVpdXY9WpJ2GXHWM5UYMDb2VpKWtVCdLMzNA81w9n9E",
  "key32": "4dupBoTpZJqyNeK26YPNvnXgsw91A8Vhk5XLRXyuvu6gFcvQdLFvdi91XG381naUJgW175kDddk5GL9cc4JmWjz1",
  "key33": "1c52DLuWL3h8TP3KYADtaEmHV4UHJ4HNgjz8Gs7o2FrAtSQ1q6MWsUp5HoEkaieeqLRd87uJG189DSYa2X3xkkf",
  "key34": "2aYvGBtFSpA6m1RwAw7UVPGWgCiGAj3oXQDVHvauPiNhSYddJNA6eehmY86faUGS7RoEBJ66oJGjLN4e46S2oBHs"
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
