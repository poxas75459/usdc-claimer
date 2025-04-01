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
    "MFp7UTCgLaMsTAJYNsFpnay7PDSxtnpyDBCyu31NjuXiVYPFkhtH95Y7UFkG47Qh9XFtQN5br73ffA84YZzzDZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sPmHSRfnh7xJnAe3KnvsfWAqf2zK7Ujr1e1KmDpBU8wZk4MvPNxPVyNW1mPdeUiNSoZxz8Du1eVFEt3GCxn4pUP",
  "key1": "2KoiQy7JFBx5QJy6EvaM2oE8LhaujsGPoGnXEoyMxhoEgKDcRCwYEcQsfy8KCqBRJGLms2joLYtLXZf3LvitVGCK",
  "key2": "2ALXfEdN2pHJ1hwHEMqKESMqyeqzAkbswFUTwCSkR7hEV5L8ngky6Qn2k4vaeRgrF3NbeJsskdJb1WdPGM8t3Ukq",
  "key3": "63BVd3ikeYwPzPup9JT7raB5BGQ9AZqPKap4Goj2i4wZPQmTEZKQeYpab7ZkKpaSYV3ugm3yJhPY6cmiQkYs2nbb",
  "key4": "27QgLukUA53E3ewnCB3zRppy5W3aKwTk5bGLgxZZq3izANvAjYTzjnBp4bKqB6ctNm8ZRziNSX3CpwpKF8siHTuX",
  "key5": "ps9iB3rUV14EG9PWVuAZdPjC1AKfJ1badgrM1hCrniyaNzmSLsqkkirEGNiazC487c1M46bWuCXkJC6JprXtbHg",
  "key6": "bLpWAj6gqWSozZK3aN5mzc9XAzNVtnKmgjR6K9kQfPHzFXZYwE928wpXZXFqahoG19KUEM8mQNp8YMqvNiPPLj2",
  "key7": "8t3PdcgX33xmPvfKCNpAxSbjo21bMb2RWMiQbvBYtpN6jUuhWF1Ho68gPxE1FhfdnLcorDrwnPAMF8PX3nNPKTq",
  "key8": "2qUf8Vsm18qCVBdrAvpnFFyqVp4oCWAuc8ZxEzCiwnnwDzgg36Gsibou5wLfyTiTNCbrNjzQr2FGTYoxXoKMZ9cf",
  "key9": "2MVP32qmjnKuh9x2Zuf4txfvok1Pivnm7JBVAsXuWTPBnEWDVZimkk4s1oqpakNRkMjPU3ereg7VHvR2xDwvni5K",
  "key10": "5FWKuUDfgEJjL4oKZD8AUX1cML43cQvn1PzWvjCGU5ymkt4svVt4tsMdcZpVq6Ym7J59YmpMobgVUUjAc725enWi",
  "key11": "2nE2nwzqx8E3RVdtVNZbNiXNcMvTn5odKA9scpWpcNxbX6VUFBWwt4h62gefH52Gn2JhM9bbna7igEyAp5pEGh4i",
  "key12": "38yDoWazRgEAvmJSeiv2TDsEyaAJAsJVjwquEhcERxv7qGKWsSU5hqU6FSxR1Y4CGiWBQYqNXWCh6czKpMd7czoq",
  "key13": "2ZsU6BgANgok8gDqkJ2dRxkGbZKHSTQVuNwaUS1UijQHbXNZv8kumi91gyDdvwqStJYKGYt2s62EraHNe7TkMwhC",
  "key14": "3SRS4rATD9L89Px1ZAq7bBNmc4Dssr51G2m9Tij74qszFpaaoovLBbFjnKsE47CYD3d731yghgQarWTAnG66GUMe",
  "key15": "5JQowQxzknLY57LSNNkKw5dnpHM1ZdHP26Fb4yYV5nr5uDmmthhervtWgv9P8hM3o9A81JNgekg8Vt8i2qSts8Zs",
  "key16": "3WY1mvVJRS5J6tRaFtNhF3cJ2bxz9tFPbnz3LzAJR3Pkaw4vi5Cbea1PSeWusx88q5PWkKi3QkFnW42ghhNk1LZd",
  "key17": "3TsREHUp3goLr7Knxvy5awvL9KVsdYrHJkVE1tBkgKVDrjyvThQsGPZajxRENAZf3R5cxoDt6B4UfhJVp2dpoYy",
  "key18": "4vfGTg91JdH4v9pae4ncVSUerZB9ZGYJQdytBQreDRvumTbxF4T7vU3cV4rFMNEtk6F6eDpoa3JqeUYzMnyBU2Ze",
  "key19": "2SwGESFbAG3LpmU3KUPGkxHeFJd4oifSQ3oHgL29GuajZWLuL9LtpoPpqkv2ssWxjsNahbyTk2xqJ22VvyH3eUZG",
  "key20": "dE4TFtv6WKHTwnVtBwCk1KwqNzJzhehMwHHLrUonpCCzaCBNQQKqVfo6ZV387AVsDhifonWafAFKwjQLsgmseqp",
  "key21": "XFWbDf5eq3Cu7xK9jAiSbZyeVktyBPPGcFoTrTpLn3E8hxA8aKae3teCiAzzUowaXcuaYyguumAi5ggVYJPejvk",
  "key22": "2pQXSoRSD6uerYGtA8fBx4qf79j3fqC1VAWEftfdbFvRMiuc9jK4JyYwapL2D6xKxtXXQet8o2oV2TTfKuUEeJQb",
  "key23": "2A4U2jUs5LuC4sKjkFuXiWEqLBK9Fb4Jf4747wiiiFZzBpbJAwUnhqxxApBSKET1jSjGPu5xZZ9cxnbT2NSjwnfy",
  "key24": "QT9vY3EhGvQpSVWyWw33CEjKsSCYCr6acykfyYmz9U7BpDtjYGGu62acoVxUjpouFrqboccm8qZSmxskfgvVTzQ",
  "key25": "5s8t3eSYMfnqgUAmyxdsvKMELf93ho3343FGekDDovU4DCWSCsrt1SdDVqHgtJB96RnsGmYxppuZKDf58tseTyW9",
  "key26": "4FgvyDrncSWi6nB8WVFQv4FXrAuaroUTbDzVks6jWEKQKy6BSTLNwZ9HXEnEyPZ3Z1wbXeAQdRe6V1GPaV9XBXaX",
  "key27": "5tuum4FHxJskhQZR6VUBywwZpJ8EzEgZmVP3w9if1Xw1MQ2jNmwgXFGhadLJu9gH4ErJDBczQYuRSPwHgEHYrEi8",
  "key28": "3jzthhQN24w4wXErk86i5H74cUAw6hiiUS9LgYPpar3gTnL2eLxgfh2KuXFJRiWg9t7yZ55znixcRJWi3FVhafnF",
  "key29": "Qic2mi3GQTw6jAsNiPbrxoT3sRZZi8dgVuvVURjWBcKi6ZLQ16YnjsJU1RtGuExqU2oJ38e56pg6WNv75xQBZmA",
  "key30": "3xtotFdEABfQWC3SYmubFvLkKcGhfWQNRkD1GYyijRPyDwMygYWdwuNUFVzi4p6LApH3AyQxSQxRTNEzg5JxYcA",
  "key31": "4pcDjj4cgGGNafwo4nwMzcq2qKihcQR65UgxZnVbAP3MLnJtZMhxVeBGD51stXHgYihLHRsRNbu7t1rgPaE129zE",
  "key32": "3MYaAvR1XLqQU5rvwAUvNHuF9bHQqKLYbR6ernj6WmHGcW5zrkDC8S7sqz3omVJkin1LU9PEUNtiSHmhipuKnXmp",
  "key33": "36mosFpuGyQjejVdrkwHwUMCCncLsfz7WTGpY21mvCQCqTWX4DeFKX11gB9GS4HgGJc6Dizb38PxrR9esXgevEHF",
  "key34": "5jVE85EajMPhMk1XAcx9GQjn7uossnQvatHAH8uAMPSRf4QBW7vQCqQ2r3JiFAD5WiLtAmcKYsdzuPfn4Raeo43",
  "key35": "3xpJ1mEWDFz3fJVNHjMH6RCAZmPGkde9LEnu7owzmobiSb9m3j7mS7DjanGFcz9Zd2kdE3VcwantJN7RYWmX3SwG",
  "key36": "3EQZEHzF14zBCW9NKuZmBUg6YFHotzmu4ARzWskDYWaZQSyMSqLjpx13Vi3Yr2d8NzgYuCCUM9FkbCZ2kvJby6iZ",
  "key37": "5y5zVa9se3iLAqUHhP1y1pUuwDFLL1PQcJ7LWAh6BHMuHVodEeQZDjCPeLct7d6Qi2thz4L5D38dg3V1RXGxsXwq",
  "key38": "XstTCBYmLw6bRjsF496pkfA5koS9pmZF88pw71EvPfR6ZJBsMX8ddPFuNCbCJp8xPBXPkZ1FxQC916aViAGQQj9",
  "key39": "2QCpNhzsBm9ZiYkppxvZa1RJu26MAbU2qSLJRd3TWNwNdc6jHe3v4macjL9rXpj2B1R5P1PsEnmPMWMPwXo8cGDa",
  "key40": "3C2MKZBmvtMd3y5t1wDV1TUZA7mrSH21b73km5BzenkBYPtqUh2AyRqzSS2H3FSiL1Y4Xyvn43SyWtMo5c6QPPDJ",
  "key41": "58ZcwUG4kzj9QAfEQUsLS6pW7TkHPZXvWwp8JRJTneKzreAP1YqBi87o6fGvjtwuRiXBMGAUA29mJ9gGbWTyf8PK",
  "key42": "5V7YgvnTrfZ1v2oUyRybgs1jHQxhiV7bUxYdavdwRqgLJieiiGzwkTsVuoguK1AVjKBLYa2U32Mn6WNkhwC7FLyD",
  "key43": "5YYvmnbas5ZCkRJs9SUXM3aKNE8LVieZmGTwRWVu9n11HtkkvadSvtCbBE8rzgqwLDpF1ZfQCtKLCfU5yydgnULD"
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
