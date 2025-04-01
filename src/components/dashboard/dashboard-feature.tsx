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
    "31Pj3cTJUCNNGhUMh8HV8Et7jVNoJ4ZeKbzJrQwQPKRuSdf72H6GagT4FHrPZ7HweeRU3YDmSafmfqztetEg5zhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbstnsW62o11uMTMHupZTnUbiri4yBXeKQ6HDSDC2m3BeiWWckHz3vwZaynQ53WydmCSgsSBGUCV1sBnQiozYwK",
  "key1": "5XnwZbcduycyiKtLbKAt7E2F6xGEfpiWRTuuAniFWjU76aAkJsUrH5ocJmmLhv95Z25KtriK2Ln89s5NP4PyTz1n",
  "key2": "5E3kbCaHML1sVi569WJ4P9bR9PR15pPTigoaEYVeBgP76Mptk6zhJ4qaMiyLuYPs7J38oEzhicfzgBw5H8ZC4Rqf",
  "key3": "5PFXAmzoxGGRW2DAJiEL6DZi32mj6g351CYYNoJR5UUwz9kx9KfCLbpVFyXuNMyXbno3qweP6fEoiFKn7tigZdTP",
  "key4": "HuvPcriZx36tbMu4bF6uGj4o6qW2SFk6hmbz5Z3JDj2ppyKbNhJ4CjK8PdWKBp7pawicYm3LciKUKnh4xJMcGSi",
  "key5": "4UjAE94qYzg5qvTbPZ4BqhKvSJrUK7iSUMTkio5eKnqHbMpQXJV6QzKUaprozkKJNEUju11gqc1dw9SCSGGXGiHH",
  "key6": "27zJcmVVTeXccRuFWiePWj1UyEWWapRXXkeaZ1V4ryJkx7yGVD27hk3XLswwzGpFHpmHCftHkhefVvddKLrd3Zsy",
  "key7": "3k3dmv1zXncpBNEykCMkJpV2mqGSmUayBSoxz1F5W9cT5MS6QFLYPk6cmGyaiLa2fBbTr5dbqzGkEPiXFbPeCJQ",
  "key8": "22y46uvLm8bqLzK5Gh1RguWn8zMKRifdiX7E3khudMpdkpSrFncaiKPFdvVFzMKFH1iSXhKdtYZzKayvmGsYuWUg",
  "key9": "TftVFKNDqVzna4VwwvBZhr1V7jYTdWTGC8CY92GaqJQ4rqBeRGir1BGRkdYiEN8GpkbYH72NAoapJhJYT7jsTPV",
  "key10": "2mya2yhm7V3AmqKxNHbC9BsCBJuT7fpv2RsiKcu4BXi6wYZSWiiUhJe3evXzM6uWCtK7QjaxaZYVW9iTB3VE1gUP",
  "key11": "66apUDKVoCj57HQvnS2njKSoaDJ6DWa4oi7c4arfUAJTB9CbdfVW4sBjRXMUKz9MzXg84ayJKbiR43UodxXRjkm",
  "key12": "423p1rD8pQctaJjDVur4c7rBxNPAf866d8HVbPrW4tBTcY5bvMHRFBr7ujp9u28jxaHrDV2Y1ZiKNXAtbnApCk6z",
  "key13": "5K8vo8M3bboLSskHpxjNJ7jqpwzXaJhyp4ip1a2HN7FEjwhEHK6taUTxArz7Un2FXxMaHzFCPhWzWHxViXmJXFos",
  "key14": "2QK9r8RVcKqZPssrJBaZKDAbTpcmHsZaKXixCrAkx8zQF2jjFQm9oHK9bXtjxxH6UnQGe58TuzoL1VUUa54Js5io",
  "key15": "3CFa9KRPZzMAmwPuWkVnaAMxT7p4vxk95VHvKZ3nJdD1VLbymGzsnYfaL7RdqpAP8ftRrvAFn4nzEpPwZU8yfjax",
  "key16": "4FnmvpCuosDCejxxCzW9HUUNpSdHziZFUC42NwJJHLaPqSEu4vJk8ehaQcsJC1L1Wog1D1GQFxiHnY4f5NneiS3p",
  "key17": "4ChAyRUXboLKV2VeTyPnUvJoYZ94GZeWbSG7fQBxVyXs8i2u8eATYjHa1TRcWFcfSckzgsS2pNLLRYULWe36hTEW",
  "key18": "53TaSyozrvHkZFL9E7DuKsWCdYXvWC4prhpoWc2kD1FYLJfFkt9VbsxGUjippaCCJnmDvxjwutJXufUoDB9wEFaq",
  "key19": "YrPHq2bbWdqCHFF93p5Y56EcYBz4idNEs4Er28DJoRcYHMsNDF68rTPrcw29UkqYv7uCpSJ7qgZRPx5bwx6oXPE",
  "key20": "tXKUZDf3iMq5F7Z4UBCGVrthLRdAmaAXRKvV8eCNNJcj5ZUEEQDKSyu8F1qni5RvbLQiAJGhTqtPf7Ed6miTFSw",
  "key21": "21fzBJ2n1iATe3SHfHD5SZQi986a12hQ1H4XdBVU1r6cF6tEvd7wKpCtDYyyMCEHAfwL6nEUK2gx5K1PJCYXCmTP",
  "key22": "4jVLQRQSg2hN9eE7bX9uVBBUuVjoQcjtE3DAkL6AynioXFyS8TPXLDYr1nhVshTjiHdCJ5h9ibh9y2FtuwEP7QSx",
  "key23": "59RoHDQCKHe1oca1J2pwJ7HpWT1CsR7gNMeWMftmuP4gpR8gWvpf3cc72BJhTf43Yh3YkJKRdZP4r5d8XTSXQQdo",
  "key24": "61WpPcfxHEurGs95xsweP6SGC2XnjMZNXEXHkWBLtehq5HVBssU9uMg7qivmRv2oTsoNDE5eYEBaP5JZqZjBSUYV",
  "key25": "48VPL7bwb8Hum6dQC61DNsGfa8BjS7AFsZo75dd4qyaG9nkf11v6L8wHzVMu3ygUHzeA1kJVGmM3J7ibkkMBQqWj",
  "key26": "4pDH9VrHwKGFjkBywoH1czZBrZDuKVXvdmLkVrLaJrjjGbFDFR2JVnnjyeipcxnG3WtAj921pfpjde9PuDpEWBMB",
  "key27": "4DNWoiSRFdeqUa6xEupwQ2Vo8BPojunr2kf61SFucjEnPaSGoZYCa46KyVRjP2GZGwU6npKx7Rmd9fdhp2fSaF3p",
  "key28": "58E62E9q2nueGpPsweHmCqASdhCphWQz9yXttfdBRwRH83LDBA2FsdoNa3keYq1X4s2cXEBvY9c1ZRgYdKoConJU",
  "key29": "5iVtyKncCXd3HuXAgSxAYS4cyzXGkxo6LbdQZ4XiTHs45ziRwvmgEzxwj5CRHYNo3gHMpNB2e9UtPPQtexiRnTiT",
  "key30": "oonieVG7v9iedJNuCu75XGTMFThf3W4cccd4eYDyMFsFgXURkLsYnYcqU8QV1DaagF5Hyj41eRQovvaKJedCQUY",
  "key31": "2TVjJb8pEkftKaX4BLd8mnXk3jRhZcM3wwR5uptDcTdL42Feb2LJuGvJ4jeffn83Tz8YZQeoxQw56sVpfV6xvQyg",
  "key32": "24nTEJqaQzTookyFiwG33eV4xXiiXyQLwevfcyscFAhdjr69H63G7KELTPKQkncDTHG7ohWH7ppXapTF3qWS2Ghw",
  "key33": "fPqbCrNFMa4ptGxDAMKs3UkdiC1XKQF1V2UZX4KiqyMFEnx3Z5q62kEbG2wr4Zg8ZhpVZ91wWPHzZfAv1VMK5FJ",
  "key34": "3SVUqRrGbyaWbu4QyQQy15uf1M8nGEU163CNTaHAtjNVoxeDe2jPorCaZW3Acv2rXA65YmGni1xDtxZXELGsx5Qn"
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
