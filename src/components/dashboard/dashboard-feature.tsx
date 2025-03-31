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
    "3wNqGgsfQM7BGFnZYEVwxg9xjhLNGpfaLaSP4c14qZ95m2angE3GdoDcWBskQNRfXvHtDQwWA9ZtGCNapTJrFXPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KsE4EnPZoiqS4NfZR4NviWesUEWUK4j6GvM7SM4BAQpFK49RRvP1aFxz51sdzjHPFtYEFH75sC3KjK5vJwRwHn7",
  "key1": "4ZLNVjhDTV9mJXuvEjMZFVtj62hbNZYBECHBy72wKs8PrgisvVqLk51Na3EeteRVs1fU9btyoUoLp2traSACsYXH",
  "key2": "2tFKnrzpzgofawhFUYKs7mY5c8iR1GGky2QwETonRorB7GarfiZNGdY5HUc9u775suiZSrP1qMMrEPuNL5rzuZop",
  "key3": "5kwtZbPvmjmVttw7PWzYSrMQ7SzbteSUHJKSNMuu6hYChydYgwi2x5wPVkT8Hx5SYJbG5RD2DwEa6gA3bwbe6Yup",
  "key4": "3GJMyZ1nDpgi8nPw5fzP6Y1uETfb1fPednha5RmE1gnFhMpVaaHXbJFsneCWSra1uPveniDz5GjFaJf6r6qFqBnV",
  "key5": "2gZGn7zp3AJtdKRCdeYnbvv5wieqGeuPbPAbQ3M4Yn9Ga4pV5PyYAjuK6gna5dpKZRwc2ZvgWY5TzPwM6FvQD43K",
  "key6": "4qUS1NziYsUmxHpYgphAeRw3gk6bpWs83WZiFeFgkFnxrVy1Nx77E41tEoh6zkVnwAn6xr9vdwzzEQ3YabaeXkaf",
  "key7": "2m5NnyebkqEpERK2Z3jGK5WQe5GE1RCmTiCUTSpPdayZeSE9MofTNxmL1hQf9ZPukgc4y6wjfsjGz8MKQYFXNAfU",
  "key8": "3wAeBdVjrnbqQ6VdRioUnzHGtoV9yYsmDqEMfGirJcmncG7utWGmpNv9Ctwb5KwHTiSHyY2aNWrqDbxLstK8HatT",
  "key9": "KF4oneMju5dKoeDziYYTWkfGtrrLUcQkLSgvCGDcsvUssk2kMrjP63iHDeFPuATMcYfbvhb7Tbd4ZRCHAHWhgBG",
  "key10": "3ExW2Z6GnN422NZi69sE45xMdwbYe6Q47DwBJiBWBmQicn8qJqX6iZCSvtoMUzCbtzKMQEa5JBZSPe2s8XV63KKa",
  "key11": "3PwqQckNbUCS2a564bzmc5hFH8gGXQpjAAKPca2XDUsD7h8SpSucGF8C47H64xDXMVnH6zkhNnTuGQgHvdV4EMHN",
  "key12": "3Pk8mBUW9yNNVaSSdQUUzxiskr2FJMdFVw7tqqbU2A2uZMyTrvWtMf4az1gKoJ2DAKDiwguDHJGGbDaZWeyfy8su",
  "key13": "5cwWWYvfrxETTmNfca1eXGCLT5K3zJ8yXoiVUdTgQW6x7tV4q8EVsXU1AkFTAeXuNfAAKtTEnbYXKJgfQ1ASiNGt",
  "key14": "hMqoUV2atpanYk67NPuyhaF3ZmP2eMt4EqnN7xzH9s7bKEJsS14z5nu7oAcDsz25fJDjF2KXtDMEkzF1dAgSWUY",
  "key15": "5zuSHDK3DX8jB3sgb6391jhHN8YiVgJNhS2RhiTFvxMFLymTWbD3AdoRCf5Ud7yAik9WpoAeUCwGc7Qsi2B9gPi4",
  "key16": "3snhEdbKK9KgU8jM43RxqnyJrX8NKqFbTf9a7fatghP8pGzCT1PgkYDCjGH1tVJKQ9MiYrNPZgBvdHFyyPiWHha",
  "key17": "6WNTShA4S8urRswLAAFmmWGiQodeaWnUMbpX7spbJDHFK2shPeJZAduR6gm6kcMcTcyo9spfgYgLKQRxQUkd8F3",
  "key18": "59fcWBZokgf38pvQ8JgT7K5BUFr5fkm4nbQogQ2Lgg31U6t2WjJyc7SwFXJ4X5rTSZQzbU5Teg8272n8s4RUg1ri",
  "key19": "2j62aPquDZVCiHHZ87gF4fa2VvF4oHRwqPUz8pnQgECYsu61JJnQzNjGBA8MQuHbz9yBvYQz2DfrFVtbh8RCqMpe",
  "key20": "3tcA4hNBdN7p3wxv5f33fVWYsrDsY2whHHRWsgCY7dTKaEeeqkkUM42DMcawntTn862Miywn8jZF2CJpudWb9sJV",
  "key21": "4xLf4XBXTt2AV2SBFLRTqFHgbpUu6NXgbHGVz8QEPDT3NeSufbTm5zSagz2fDMUiczRQg4b6cKSPJVUwkdf15tVR",
  "key22": "s646GRrFRiG67xGFicbpeHqPudnMxD6mLZUbcacNtH8ABHAXPoKWKtpvRhpDwineZTTSNUJ3RwZQ7zcYYFXer4X",
  "key23": "2VMR3JB5BWUErtRrevs36J7gDixUMMq9qQKrBS3W6KVPH4nyLYB2GQrj7buFAF4XDzs4odXx33dX9R1D2WasYb6H",
  "key24": "5NZQuoskTFVRRg7H2XUzGgcyYYLTGFNuYM5dtwTNDMtDkKLdZPyKTBvvvSy8zeU6Xg7Was4BVAwbzm2TZdbcwA39",
  "key25": "5KmmSCGapqCEAce5MZRfPe78SNKzunZCEmLCuUufAT8h5V5TvUdMMjAbKwHczroDSb81AVLe5Bx2f3PMzoDDKKeB",
  "key26": "APar9WXhU8wytcDcKYnmBn8fd6fenyHcFtbmauHuHVXjKjXA8BRmomEkN6RwsCdHZh8giYUzwxxJZxNzTcu2pnZ",
  "key27": "2kxGaJYiCzZtp9yGt5pKuHVGrCdBi4fzPREMXo6ytWELwpQLSyyrHJgw1AR1f4Ck2XLJqCVF9pprttcW4fBCtdrf",
  "key28": "416kT1xRrSEjzQdmprdxQ1XjeDcTxaDbZh1GZRUbRt6B89tCFyp2BSafj9avC7YuHY9mHCLdTeGYNtv1Qt298W7V"
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
