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
    "4AphkNBRDXvEhyPRnAzaXnZ2DjWfcahBPGd98Dto3Yps1ciy4XDys6oJPn5KToHWriF66nS7kUubv3PJGpxHrEUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkq84GG3zxmcfGWXWSJGjwxkNwPTqjwM8nveSLcVNQoQXkGFNChM33SSsqo87rgj2ebLLin2DaaMocgwhzXNp7M",
  "key1": "2p4JeGhYEEH8fT3TrVxfmmsYmKEL5NXsnuLozkBrAVhzcv6sPVSoJpnSRFNWhWoVkpkGJmbB9MR4tvPWaaQVD4uH",
  "key2": "25EFgfafYWm4cNqsrCdojaojGirsD3b5tjmGoNEiTooFXCsS3DNXWSnY64cyqkDJqh3zmGoY6S5Lbc4dnjijYa4q",
  "key3": "3CnQQWqddtaAD379c8c6Fsz67vnbTh2iEns9hbVn5iXo1wML6JhNhCg8WKtZjV4swmVSxA4dBnaWoKqbfYKNuzYq",
  "key4": "XtNgAkep47ZJ95DiSFjqgEGgz2ERt9YxHCRws4xWKJEd8Mgtoyff2MMw3j3jRsVsiZtFAXnRtVpcw3mXqh1ecCM",
  "key5": "3Dw4Ry35uHQcxMmK58fzs23HnBxbE9d2uofY8YmfHidWQixfNPxSWcTWVouaSH2ez5jfRZ9iFzNMAEtVtmUMjtsb",
  "key6": "4gWcHQLTwXb3NJPgF7yhtd81jLFeLAQ1WhRNqNDXuTPMXNYYYpU4xcfRnrDDKQETbNYJTNFt6GopppmdZjny53zb",
  "key7": "2CTUBpCkeJZkeB4BjEL79XBMvBTrBBw92b6cDvw2xTKSXofEAcS9dv5JwG4ysgRyAatSoY26i1sgNJnrwMJvYUoi",
  "key8": "xvivwt3D1MYx9fFx6MVEJP27e2ocFL5ZbujXeHS21yapT8TUZAoMJ7yrGEecyZmyCtqNZyPjEcx8cq456HBeD5p",
  "key9": "4hMyom9BK2vYj8i81cRYBjGYp12sTzBFAiN6HBtRJvpbbq1CJ6xUNdwanRBkaPcykHoFaGKoZDpVzs6m1GyQ6QGr",
  "key10": "5sfWdPsps83k9Qxub3YhSN19uCYb5NoRnoMK5Hbhet3fkX73cgHyuHfKDkdDvMEn7rDCBAfh6cQpFNAkeYYWGxgC",
  "key11": "3MkoH8uQDb5e2vbPLtFeyaXacpRXh8ytZkvm6QqjZ2PE4vL8b4mFNScFtNsczohjVP3tEb7WLDQaq9cocqfC4XZT",
  "key12": "aVrjdZCB3sgUMXsczFXPcEHrRQKGhe6sosoCr73xh8eRN934qLHTbge5PrSLSK8X9mTz76set1aLte3rqMkQRZB",
  "key13": "2mioAnqVPtkLdHpJ74Kcmf7jVrjsdTSiBkKf81WGUTtNGfeRhTZfvaP8DfXaNtKqFWS927nTRaMzZxQBifVb5YgQ",
  "key14": "d23yC29vUGDcJFsBoEAULgqmGi1Y6uppwoDXFYfZXUf3Cc4sB5Jhmo7rYNVmUGSETfk38bMHrcxk9qdBG2kXeMW",
  "key15": "2WQKZTZzVn1jvDcUtCsqVhzLkM4qkvwz5sHB39Lqoruuz2w1bgJeodfJVDHansJ1GB8sbdgVffAnN5MmDmuXisQZ",
  "key16": "XmMQdg6obWJkNAUP3mHdkMaFSFunkvqkzoDNFyYvapvy7zp269cGUJSyywFduMiZSYMPe9hJxZsgPev3He313Ru",
  "key17": "2LBnMDSdbLd34Q9N94xsxr5gQLJ6MzNGXqTdQ3HUSjZhw59UpFbTNrWb4uacekAyAXLcg1JxdvFchb18e5mUhxM7",
  "key18": "24SCfiNkwVUk2CY4ZztBjZNUodqzYbb9B7zZpkTA7Xp7FYWoNPZGjBjPBaqo7JuCNzG2AYAx6jM6DSG9rmKHLxaj",
  "key19": "5uVYRckbZtUqyn2WY9PxK2JMpaiLavZoPTo3RYbUej62L6GEuUhW6Pi9K9gZGgs9EgYBXt3DutJE9cCcMWwwSANd",
  "key20": "72BDQQ2p1YkT8URfQVxzKYb2mGgHNXaoNrW7zRapLu1VVAY4HAwjAdVwDMUEi517VgWiiPpezBUt7xWMpz4Aotc",
  "key21": "qMjFzTjWBUoHhAiaaeatb5rKaUp3G9nZDgxgehnMh2sui2fqgpPVoZTChMwkAcqA8qdswBo8ewTxVRCwQhtRnJ4",
  "key22": "3dzbR1ooY7Vzp6HD2xuCx9Ko3k97GB8ma2uH24r8kT6rwj5cekjJwM8f5xiGzu85xG69nDftengraVSMU4EdSguE",
  "key23": "5GsmfDqKtxu2daN8PnSLsybU3kmMEoFVQjqQriufMBcs9o8iHv6rVNXPRt8XpiZotx4Ukq9WQnRwiXyYktvQLggu",
  "key24": "6Wkv1Wy9RKpYeTzN5J9fNi4EUuFCpiYUqw3QSNRX1Ef6ZUskwbQPT5fnbMa3EpDBNb6Y6wKySfuBk9FvaHrNPwq",
  "key25": "38tSdkRS7sQVZx2n3nXAvxj9yNB3uN21HfxyooQTJispdViV8u2FKeZKu37XFKBi1t4cbbm2v3Rxh34NnSgjLZkh",
  "key26": "2EFUTc8VPggLCwANypriuinAqdbLZXVFqXJbxhs3TsXgAh8mA5N7Q4ULQNPHU7ZSSSWyWzZNZvFLtEymPYRoJG2c",
  "key27": "2QYVNKAPYWYfczMMwVf8Psm4nJyNzh4v9B8G4dgFoHDSacUPLHW4XpPwdB5WX4vieHPEphEAQPzF5TfdVQ5zjkXW",
  "key28": "5YerNuz8EPGThWCiM7wRX2M5ZVqBgaUUmHbpL6D7cvXXLtDVyqfc3zei2UxJB2rSzFrDr7xyCsk9jMP2MqS2ihe1",
  "key29": "41uKwJsyTdMYdHncnNMvc3W7TnFSqQVCaVZDLyJQeRWbZkwxCfvYf2wPLaWTTX73XKccRLfLh84tV2hbzdgQL1eT",
  "key30": "28Ae6Wn3QAvegBwxBULiiCP5y7Di5Yoa9AN3GtrhgWrt3y4iTg1eA5cZ8g3kMDMZBSHBXezFQEzN3kZ5VhxCe7cr",
  "key31": "4dvtpcLbKUXCHhQmeANA39WKkhS9DLzDhtdT8T2P3m1rhoasbxh4F9796uRaahunw27yFgmwB2gMMmtpAVJZffuZ",
  "key32": "2nRNrh89PApTi2yg62crcKxg7G8EvNJcYGC8Ap4GHKAQveEwEyC6mmmDtXwSmhnxEMgJ7FHtbYy1QyUf2mjvYaMr",
  "key33": "2MzM3iDuxioEfYdzGg7qg72txfxrEfDTq2ws8qM8BnMKpuqsjm5MWQbT7ZrRuf4AYF6t6RZFwCv7SeKZCLo4dZNf",
  "key34": "LskJSh8FPpYngyynwAF3mYg9yAiv3aTBEf2AHt7oe7XVwZqYwM4XrUeD16h8Np1iJLDThBTaMCCokjnmagxvx4K",
  "key35": "3zgAgzsR7G6xvaWHJUWQfbKMba6EHnE528Qd1XsPyoR5x3e5xVoQBGbidBmgmfBAqYvakdnqDBxb8eFHVbneKT5T",
  "key36": "5sW5BtmXgVqzNrhPejoSejZjMz3jVtwHFnKafwjUCgjAb6XQRwCMWsL8U8zBM2iUPXLBJquxtpw7YvuQkBDCVvdu",
  "key37": "34n1Xi7oRKBaJu6fQ5mjsUydU3XaRNdQwzNMd9NBfv3QzahKwz9B6ncu9BvXisELMHnviVusvEzZWNvHpE5WrysJ",
  "key38": "4GLS9d13LzDpf48BBZHftbZzERmb1RbeaMEjuTgnkTVVHHRWaQjy6o37V6ck93bcFXdqPGE9nSrfmdesX5avharj",
  "key39": "2SYqQ8acQry5K3mnJaxLEFXPBhHW7HLnBiLAi3F1UphcQ8g7ZVLepd5Bj3KnKpefkfoG2jbXP1p3Z3QgvrtfHco4",
  "key40": "3s7u2zHB5VrrA6ooVMLmMk4A39mQKpWZhoVvAtRJsxAqHy1sRzM8riRJaV6kU6oauQ33K5mMg614sNQ8BMt1LY4G"
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
