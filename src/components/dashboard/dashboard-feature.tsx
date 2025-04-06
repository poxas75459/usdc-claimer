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
    "4nmWPzFKNphEj8GkhykTT8yXt7jEH1VvAtBUttQ4KrxaFxzqP8mmxmbrq7BSXcsorGCHLhmkKvnFTy9E17JySuLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LykidiJb18MUQjLMbyNUfAnoLuukxhX29CGF71icrMoyLsTKWiTC2aj6KH5M3TthnYyNPNdaH1sZvHDdzqVxY6k",
  "key1": "5iRYLKa5UpuEmuQPTuWhg2oJpRYuweDeuQZjMAK6jnxjYgQwsHdVoLuJAqo6sgnHGUqERscF4wyoD8zNiCSmPKwQ",
  "key2": "2eUvkRjuZs3YUVZY31TgBKvw4YBNyfW6werj4i3xUhPLevrFs7jyNdSbJwUnTqSPiX5rYwCuTr3CqV3xGKztPVXt",
  "key3": "zSNyjc1fkPAzcKQUok3TtkvbxFqUuBYcAeSYLbJTjGDX5zSQg4re39N7B5kEfZeQt5kvkAxCjz48bu8pdkFC4V3",
  "key4": "3m9dKptaWTVPkGL9mEAomdLTzcGpapwEFauLBRv4QDz6qniPsYhroe1nUGvLi4L8qPjq29w8PPZK7PUeCMjZbxFJ",
  "key5": "2fBTJLLHWaRiySSeExSwEqzTFQk9ew71HcjXjenxEFtfvSUZmBuheyL28KHQz11JR1d1Hoa9XNMy1zZtBhx4hSXP",
  "key6": "4WMhbCZndSKVUL5RGo215nto4KA2vrMoKGAfoLFHSJUFPNB9qF7hrZjkByMnjkqCgnnk4uiFy7WZ7Zh8VHBWPRUi",
  "key7": "35X1jcwe11BNxcXtmMSoubcgDUJFHhJCz6wuoCn4xSErez3eRmJWLEDfcmXJjxNxuTMU1jwYfisQgAHvZDyX98X1",
  "key8": "5zJniDdu8fc4d6vvAeK5MGY99eSQFPkcaCa5JjtEiVq8okBfQ5SexR11rnYL5CEk4CJxijFUnSMJPpYmu8ZDhCrC",
  "key9": "3w1d4CGaYtPCGTefuGzWkF7UQvCvexjsSBLHV7wJyuTLs5auoTdBjzegXadyZkxUAjbiJQ8NtoYuH5hAEFpf5eSD",
  "key10": "4T5ZVQXimD9RJwqxiwjMVesKELUPGSE2aruNcC7T5eJgZC4rZQ7wvL2M1ir6tGYEuixuRS9BiTA1bUoz7PAUhw8P",
  "key11": "3UJdSHjKzt5GYGsnRggeyUf5sjfWKdhzqckNb67Est4TxQd68q3D4mCttG5SRb8u98JMTCKFgLnYAsL3QHmyo3oj",
  "key12": "3SjsbSLNc9i3bQMDQz31LRxiWasDujh6RCFiZ9SBt5wQujWMJxv9keTTDCTRT36tFNi73FWT7rj4FZMA69TY2Y4w",
  "key13": "5286imuHUVadaedMW6ukArDq34eWEpL8Rvw6hsREopnhAVyse21TpPisbQnFnXurtfzyS53586kV11CPoARKZYzh",
  "key14": "15PfiPgjz4uWpyo4zeDg8wWTYi5QW9hSfAnHbzMxrt5Ju8mfHPjwfR8BStFfVrZZ9VJY2HzkiWXzDYmKWA5GdS9",
  "key15": "jE49EjWkpWbYBtiCjpzzC2iMuWubwfZS6tQqvAXjRTGsAUNEBjoQLZoUFBpLRxJpSaVHHEe3YS7T1ApZ9umHQa6",
  "key16": "4zVsZfJK2MEF4ytBVgF4jWgJE4U9jpXdWvYADV3StCywiVCmMakECWhDg9spZ6NWhwcRPFV5zRFmEvRAWka3gZZJ",
  "key17": "2nm5uEmQmxwmDdLAzM7fwS8uJ6s23HD9y5V6ChWzreXiVnCVQyMLxiGhWtFP8EF4aDwPkm9UUWJgVBscQyijgkJ7",
  "key18": "dbLY5EwUriS5XEvAxrkCHkRBbwrenTZVpuyoVaANqMKWLKfwE1GqMxUkyvjsVLMpBxEpvLFgFUHX6chrc25WDwo",
  "key19": "3cjF3n4wid9f3LUtcv1npPDcDqmSgxNMy2VrFGVvSuEMWpr6RJifvrRamkBofG1kZSGHynXAVXpWVdfP75BMabjB",
  "key20": "3TPPiR7F1MAysDp8JrtiXFNoVr31TpDusAvBe2ez5WrrTudH74dsXMeBonQSReRw4hWnJzC1opt3u4TTVpHXQSPg",
  "key21": "2WxRdznkSzhhbh4V8XBxajWk94hMRskSbqcVKWfwjqdnKzhcs1Q71r92Ax7XpaJcRXKRtJc9fD5QBY8SpJs6n18b",
  "key22": "4RE3Vn5wyHe2Yg3YhQNL1vxL8Zc6dB4yiWMyp1y1FD3jMzcvw7G9G3RsnMvPdrE3FsQ29odm5G2CWN1ixMve6kUQ",
  "key23": "2Vuys4b6yegoauKp6jZRTTDyyuxRGcWXkvuRRedU7G9nvawhaUVpLTxZXjXqcUzSPLkion3fjE9LKusHra8qpJop",
  "key24": "JvZzkCpAHdx6MVe3nq5nSwDDzwf5uw2Hq2iMPpMZFhk8ZpHUzdBP9Q1hMraLwNCv1jgfcrd4WtosmSXLrefDMyX",
  "key25": "56DrAajjEdZm4c6LH3FXN8XzXFEJXc8fjSqKG8oEaQAX6zjmVJ1DLYJK4dqzRzGPKx3cxKgwyYXdXZVLDjZTuxgM",
  "key26": "2jixyCXvz9JyaQJ7RFcS4M7Pagvb4mZJtRPEXnYN1EvPE1tBoYLatJCMUGb3z6hGCSjbBc6GXyAqGPpofigqFi81",
  "key27": "2uFQ6BPj3KYDSWWEcesXRP3xMbjRjzamPfUFe6ncMWLmWp8oiMMuP4ZPAZ69mDqpbJZ2R76t6cLjfVkRvhGhQ4tD",
  "key28": "5DQstztE5XXV3fzYWp31QEMYVQFTVV2h3A5zRV1NfxMsWpCXBW48ghJbX2M5qSa4RTZ2pukBR5JQPjxD213J6A4N",
  "key29": "4YuyPURxvaXvxHvTHMiD5UGn6nQM7raUwAdpFtMteK6upY3idJqGS4gRVRZ4WoaqsLwg1YGjgyUoxS2QcXoQ574W",
  "key30": "4ZtThUQABgGEQFTcHKozZqkstuUYE49jxRjERipPLAiqMW7foDZss5g7B7FKRkGwmYhKM5iodTcyPx5G3ou1MWNP",
  "key31": "4ZcjDPw4Q3pFwp4NHV4AHjnCkFGtfp9Kx3st4kRczq9MANnEFjybBV6i8K68suinRWdUmmp3UmagmVwWBNRL3RGS",
  "key32": "2GBL4XVfpXGmKKPS3Rrz1fHWF9FuPU2BpYA6AA4U8pDR4Ch7NvkW9BKbbtx2rHQoYnP4s9JSpnUMyXJGbLvyvA6w",
  "key33": "668AcDPWQ82mueLk8DknkPnKGaz1nq5x84MtyCtFFEJNHAkYV4yrsvqF2KCfHp5HeHwhoA2DFgHLmwTuwwKc63Zx",
  "key34": "2Z1NXTqr9hC1bR79MKoRsLkdz7vQDBgt8p1hdJtrGrJ8Kixj2uj98pugitadLLJ3uF7oNowCKAKYJmiZr13dJ2ih"
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
