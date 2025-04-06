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
    "4pbca7vMAqWwEX4mUAbwfjqXGdCTyQDkQCtbBhi1dTjdgD7A2888PVhC1Cu659k7F1VpVB6qqExpbDW3WJLo6qjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cdJwc3UBnAKvJsx5GBgWkHwXmXT4WSvV2E7p36iwxPfrDmnqJ9xECNoVyGpKYaACrwbiH9ZFgrexsEGYa7LXRTc",
  "key1": "3VKtPND3cSTpRaEHW6VAtj6W43bCPAeyrhX6y2neDK7ZFTLcnJQuaXWohtNu7fQswpCHRJSVYouK6dqsFYupUec3",
  "key2": "48nVaDUzbfs5ynz3XNVVBwy1okZx1RqXfUmDZgVNW5fx3w6BR5VxQrfZiHA41fHkRhGKynd6HPn4hGYRnSzjxgxT",
  "key3": "2KkYNqZ1wdbZ4cyWDPqjiDNkNEmX5Km8EyFNc9yiw9SUqFGaYK3gbVi3L3SmTdhj5DNG4j9DS6q6S7PkShM79Az6",
  "key4": "38aGsELBTCTTujmaUtKrxjoHSF9fSk2rekyhFktiMm3EvM47HQChFSw6tBhrBoNHd23q2X2eXC6nku19ifBmQzun",
  "key5": "4jP4qpaY61wLXqnSDM42uq5kxmGpxpdTi8f49CYw8zvbD5eJAFzHLzkF1Sqkcqi6sojpJ8iRy2uMSXqMfY3Sj71T",
  "key6": "pfz3u34h9bETCvM4FhAhxZgGsTCm4YGzT9ByxEXMiwu6EXAmvXxdhBtbKuqZdrwhBpdUuiehqeisYhRwTcasym8",
  "key7": "VNkVyq4mGEK3UZfGpYngfbnpo4F6vSwve7wvfKYz7g1R8yu943qr7JVrSDZZUGHxrqTpvfuE96Y4hZbxBH3Ky5d",
  "key8": "oiefX7t8q7jdoFvtvicTjJpUBC2hB6wFeNv7xnHwjYBPSysanMm9JV1xAUvCtuSQT8gZJV2Kd71hz69eLaQyXCg",
  "key9": "3mgbbHW5cEdofbeiXXjUTTD1pKF9fYTcTuJzwx9ffpCsVkWM2J9SJyoSJDJJ6SsuzAkBZuWU54xn1bLLXVv6FcCA",
  "key10": "127gjpq51xmctPyyVNXp6FdaY9mTmt4NWEpK6UpTaYzpYqs22S1gm8zGuk85BkeWF7WaQLUjoFJpBJv92fpV5rvq",
  "key11": "63Z7T3EXPgDHtPwd5yohg2MAd5Wvk3irYjvDLie5fBU2P4SHu1hKSYcZWfS7zBM35tpyPcR73dLLu3So6H7XoyyL",
  "key12": "5U3aBjon6mmoNuY9U7E4DHPLzpxZsfyAiAwSfwVpEdkJaj191j3JqMRjxKfu2Mw23uTT9wm4tex4j8uRt4ExM4Yh",
  "key13": "4UBRiEAyxb9AwuK6Fn8JshVqFBJo8RWkY5UP2NUQQRHbcVLccAwnMckwsRVSamtVuZQKzZAxzvmfYE3vEvYkeePK",
  "key14": "54LYXCR6YGA88XXZWvP9srrY38Lrs2iV7UKywui6picSahgVTEGDMsczDFzn5YZpg22B6eHbntAUhsVVYyDiMKVZ",
  "key15": "dj7wdJGUDJaFXQiG98AZyxyAMyvkG6vnBHCXVPKXgFfAUh74hS4hTf4mcQBbRcsPu5DdUfHizSo8m2kAESfYQRX",
  "key16": "2gfW5B6iLEWisFvhTKGiV1TCa197RJNBfNzzAMGUJNnH8NByiHPHWBtWPgo3QLkW3voVVGMW37PqquGhTaTzT2fs",
  "key17": "2EAjXBhu9HFx4Zbt1Nf1hQBVyATLGCMFQSTtReGTvZ589r2Zy11Mfa6MB3771FdZd5eoUVGr9YQsGQDCfMupaCXB",
  "key18": "36Km6pWL35BbSC6t8B4L6oBBbpHSGUWouMoMBsKe1EHZazsLmpUcvtw2kXXg2uh3hNXM9ucXqKWGEx1FKTuDy4m5",
  "key19": "4egU8tyLwmSXDSz4yxYery6sSQcKfYBAQLBpaybsiqdW1nM9jjgvgDchp2hJwkBcFJGK6xtVJeaEhMw8bWvfMrxJ",
  "key20": "tTGZVDppFxTtPR5HT6DG6kjGq81hLsQqVuWtceEezf5REMNHhZwLU5BfZGtDoxiX5AtpAwyJXUni8Qf47DrUbcc",
  "key21": "4dspbqXkoqqrA3fQZ3e5n89WLPyCUXEvyU2WxG5rXHwtGraqeiKcPLqbthxzM5ZfgcMe7aYxVfXRh8ZC8g8zLgQL",
  "key22": "54SJyWEzftwU12CCsPyWYpJB8hqXaAaBrn61caSNdmaN7LzQcLmU2AVtf3WqRhDA7f26Xck3gCKmLXasHq1vTePX",
  "key23": "4XJP3KADZecMZdeZdxghCTW2qG9ifsJo8xEeuVnrUKVFLBpUuo5LXyaLsznmMQ7goBndQErgCwhqJPcd8DuMcNgL",
  "key24": "3Biu7y4AgnBJdVe2zLxcWiC6mZHpKzMnqeQPdfrGz5KmGXZ87RWeYvaPZY62PiWytsBzLuhLqzBXr2WZnvMSPPLi",
  "key25": "44he3X31nnQMiMDHJtyf8fJrfFDVmmb9RpUF5MyXtK3qK62jjR7aJjev3MTt2rcVMqby6gLt1fa7LKJf5mjsczGH",
  "key26": "FnYDVuDsEFJe8GZnSUY5SKeTHvQotXSk1EcWhZgyptEqPt63gxL8U1kvMgmsXLKfdb8TgSiaC31K5XAubF3StFw",
  "key27": "2ucErYorKwCqoTJCpC9qb7P9tjx9aTc2yXm1V1fwYvmAr1EW6TcFHks1VDUbnnmmeJ9ZfRLbJKbGVi9HkVEcu5dt",
  "key28": "TSfcHp2Bw59BHQTxsFugsRPKTgDScmeWJT8XnShrZ9LTMywqQaAAKdpTGuQqTbN1CgkWzHLbfDdw1LNvRmXFLhh",
  "key29": "5ospztpe7AdwbPnsUCfNU153eUnxU4b9Q9avtsZArVnQr4Z59WLzQAHXTdgTM967FJpeiJZZs2enWc4teN2mBLc7",
  "key30": "5zsmMofzDbrf7fiJiZev2KayM2iYuViMMMJgVBH7URJkBfHwmRqvqpj9pYbTYZZ9XnbUBuKf8LiDGmSqQfj4nKqA",
  "key31": "3cRGmfMVq7G2YPMeCrAoTjYEdNLYDbh4DkGRQ3VX8dz236gxxw5cq496PUvutUzpuAR4pKnktetMeT78Pvzds2hu",
  "key32": "5TDy7cTQCacyKtLDhJgMTvnqJNp79oxpzdL5M25Am5Q4s5t8dS7QsS6sgF55aVo6qbJiGN4HkCD4S66hJZfBiAYR",
  "key33": "oxgZj1PQzFPZGpHgwKr54JvKcEAVWyKqcQ5Fh96zXvJuYbSN6sp8LgfW6Dbrp2PXsiNTqw8P2psXoHGaih1XkdB",
  "key34": "3TTXWEE88XcYCFPHXKzSSJPaW15DLNmx3hYVgfKJnnrNvbG2zZypYh6C34MQPY1PTV598cYGa7L7Jb6MRubXbd4a",
  "key35": "5KeK4m9Bd72dvFYKfubRKrgY3Dcr9PaEnqicZ4h6QBzd6eVHXqdLLQXw443Y5vDxAhWRbec7a461CfUX2rpGXUon",
  "key36": "4ieDZikW3R2MEg7ZVNJ4Hyfz6LUNzLsb4unNWe75M6hBMBuNhZGqUCrgM251zGhnsrpGRpuXrNcEMQrVii3F1hk3",
  "key37": "4iuh3sMiNfVLMaioR3hTPAwB4XCwFLzgaH3m8hBTVW7P5is31RyxQRxguKJw8yzrR8VeKbhfdhuEVH2BRznBnByi",
  "key38": "2ZDubiy9qpwBgtoHQfEWJfkQvY2iwJdjJGfMPH1L4ZmNPxcwP1LLLxKdmppZWGFSHb6oM6yLrffLKqpKS49d8Jkp",
  "key39": "5PAYXhjAvPouTUR7zzGVZ2Bg2JfjEgbJqeZmRHnMvPjrj3o5h9octK83L7pwWFbKBL9vH2ZrptyBdWahoeUKFBqQ",
  "key40": "2h1bR4pA1hsBDdeDdixm4QFvZj7wDK3tPZXDCepSDKutiCfKk9Foef5zPnjFrcb8D3rzNNrmw6eqhhCjzBQwueWE"
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
