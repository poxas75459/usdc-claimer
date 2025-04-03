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
    "25ff59t3UHYihT7Lvqk9qHnSSYEVRWF5TW1TsdcSE4o9vABEoRUcXVhEtapQ9woGww5AsxSPyT8cHWrGvyJPefVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geGtMyCSy9UmSu75WvDJNWMPh5wo4R5Z9YzjBR1fftWPvFZpbpXNFyPGpW74b92qEdGdjZdzebQXb6PqDjcQbXV",
  "key1": "65ufkVkP6Hy7uMEPAGPaMcna7pHRarnjLCtYXGgA3jrWowUTS1aCuLczzcxfCZpp9m4kpJkkYMa1sJvPkXzG5CmG",
  "key2": "4YwxgoxtPmytqU2CySN8L9NSoWL2iFCrcZbKAuec6LGF9K8XtxRSkfuFYt5dPMLQG6Q2gASZHFDyUCfnzeHRhGh8",
  "key3": "2y5afRjxuF17FXpKWvBdGudyUiwx7YiHNG46TByYu4ecuCtwshyFvnChia9oDYcETn1iuvGH5TmoDzoEnPB17vkH",
  "key4": "3W8tsA6zqskuoShkK4CWJj9wqPhf6FRU2HsD1TU1Vyg4TkYAEjnbjBBc8mfAxamBTNwh4wfFQmu2qcunuWLVVjQs",
  "key5": "23duanmYBAXshmzYmVXmg4mbGhahaLi7Ri9iZpH67DBMg7RNQ9ZDwcgCfAq32QzFqhTZtBJSBBoMgFasW6HQjNEN",
  "key6": "3vKGkafpqKLVgJu8DHDqShzp9i9BiTt9Bp7oCgSnWV3DGDMEUFttwSU2DAVXCgibXsa8GFY7SFiSm4ka9zfba8Vc",
  "key7": "3K9Z1rmrnrQJZbd4fGvWTg69D2R8Mx9KoUNuRt7QQTSh1noFheHdBbeBSLD3PCfrDQoKVj3nNAFmo4mSLEkYW63n",
  "key8": "5BdDucnj66mAQ6k3fkUhnXFa3aDvURVJsCTttqecC9eX2HGf5pw3TXrCzkTBPDU48yHQs8p8NkqJcFnkYTzpqDU5",
  "key9": "4R1rBHp7dYBGnpZ67Hg7KE7sCvimTvmZVat8LH2pH4yf9vxbb6JDy3NFAt5TugJ98QzTEZ81aQciW4x7HYT8LQpc",
  "key10": "297DEgbxRPW9TBitYKzxgjEH9LJjwC5dBPcLsPaxs2YtnrZ9LGBpzWWeus4H4ms2EnKiMEbdyG7n6sGbJK93GKeK",
  "key11": "3tQ783Rn53cwid5TVkvcKjgkEQsfyk4mWmo1kmmKSGdJSaQodV6HLqyiWT9EQF2j6Ty4oSao7rk56Uh7miTVJrZJ",
  "key12": "3Zxcaif1ddfX63hKAFVzf3TGYx1H16SD8g2Wxy9ydcqJS9EgS7VcD1R2jnstLnxvLRRmZAw2TrHRe3isB8LA8x55",
  "key13": "gvcrhEgzpk5uGbHAPzGcPQHu59jWVJGYmwFrgAKnBDGwpLq2xUF5AHmFDp5PYbxfrvgS1AK3YtMNfeicUyEQRSW",
  "key14": "2mH4q5RFbgkwUKynbGUXXEhBgtGJCXEs27QHbZfexdszt72VozPjHPS4HVAcS4iJKXLcGsZ2F1dp1efnx7fQa5P",
  "key15": "2g78TZ6QSYr2P9HvHwCeMKdwAji9xM1dPHNQGGFLUA7D4YcSvj29rHQmGLNiRRPjRp1kCECYR4fQjrNUZjURYUnT",
  "key16": "5oC21evQNEeERCNBhdFXdVsHvwQz4eY7zMJSq7imrVQXmFBnctLM1YzsZqAkdMdoN4psvmgc5QzhVx8q9CeKvsEQ",
  "key17": "uuC51bRgmmnWYq8HkRGsEYFKJwK4jkwVCPpQjnq2UeneCfxcfd3RMPa3KdnDfm5HbYptQqqW6jXohYyU6Q8Fd4p",
  "key18": "3TZmTXM1KyrRxT6w1LumAo6ovokcVSDBJdZfrqWQPNdiTHnfVTq2CzgRf6fPqicLo1VXhaXVNVGc3bJh536666Cc",
  "key19": "121X7F9HfNwjx1FyaW8SmmKjmMzj7MfEDpc2i4a5DhiMf9hd5k5Y5D8GehqBStGSdL2AfH22fQt9RepDYLqVC7PK",
  "key20": "EqXfcALRr2WB9q7a7hJoDXfMnYK2RgaYzpMWkNTkCuYpLaGTcGjm6R3eXX5B5quxYWHrZGK4NHtDSDKidpN5JWw",
  "key21": "2a99tbz5ua8hGirEhfibBCZHMJnYmJ7SKUC6o9tvoMa52qmDmEQMNRkyYfc2nQaZDtFyti78dAE3yUFmcdMLd5ms",
  "key22": "uLevvjpVcBBrgyn5crux8rwXbKrGCv2tRkGy4tzqjUydk2ystmvusbedpAnpjGcJk3e6kt83qWdMxF7P9NqyJ6m",
  "key23": "5R7Zp2gqpHod6qcDqZxuum659fWKe8iSumcS1Wx2WuWbBabj2QnpMBxutJ3vFSAsDvMW3KVZkzBGGLoSBwkjCVRS",
  "key24": "2a6Mzg3PzoQQNoUv57uPeGV52UN9tpd6PAcrvM1McKjqRTstTiA9FLeswJAQsueEEa9oKdJKMzxgxz2YyGwbVQmY",
  "key25": "2kbTaSMh1MLsozZEMbVi6iDM8vZQtGdsP1hwUQEhxdpTe2RSF5kjFhuFybPh3a7FJQ99hmgB6Hd5o6vcRosBwxG2",
  "key26": "4SC4dTvkXctdBTYZSZvoDT1gJq7hxHod2FgRDW5xHPNM9HTq2zG99VFYnzM7MTbvBNdF5i1ddy8e6saUnxUdStaC",
  "key27": "4yWWzdxyn73U1Woj9j7wShh2t3uMy8MeLcLvsp4LLDKdNs3d5K2DZT9JhgUMKy2fLXBaGpJXTDaQFfGwWxBVhguY",
  "key28": "7yVFF7j3bMU7v69UWJu8vMeKDJ4JZf1GBu74FtZ55bNuGM21nicVN4fsZcxmM3nPp8Ut4V7vsncGxtCdhNFr9wr",
  "key29": "4CSCovf9RnWkutSgqyVcuKzerkmRWuCK6jG7aHrm8q6k1kh95LR7c2Aph84k1taLAEK7pNNJWH7FG8FttB6aiZov",
  "key30": "5gaiqkSwkwtsG8pqXDVbR5yDTVWgmb8HUuAGYFZHcGfnhLSKDonkq1wP7uDW7hbQnm6h8BKtcJPHznCjHunyA2Zk",
  "key31": "4DLTeae5gBBUXn2poPhuF75U7s1E1LKuQHErAVfxYV7FYGmjtWqj9qo3SmHcVRrrGc8SQnbdtt2kBZxbMC2hSK6g",
  "key32": "3iRCMFvzezZ1WGpL5dPv2K5Fnu7tefk1C4CWphT6twgYoxB9mePpS29sBL4hZ2hTr5XD4KdrLRc32se7bwGzLNKk",
  "key33": "26Yv187tdFVbpMwAzWbmCMQsNczEXH2SkFEdksZZpL48GUdhKqnpPGYfvb6Xf9XY9GnwT62x6DD4LA3yHxUsWjTq",
  "key34": "5Pt1pj61F4pWA3xEfBga6sQWZdDR5eHqQGGmYAaKjfHNnCFqeG1zavpSzhmV5PDNj811dFd8yy1MNDhB6nDq53wP",
  "key35": "44Lz7dx1EDm3Uqib3gvxpQH5qftahyMXAGmygRgYNGAYmDsj34CM2ZctBTJsZQbzqvMUbWmKABXw3RgMsS5rCpYW",
  "key36": "2UgRU2er4pLnYP12ZLun3MHHSfc654Yn7y5cZA67fMSvuLXPSUd6Uva7yxL8y2YiqDB1jGiC3N6fNkyYFZCBfQRp",
  "key37": "3qtJBsEQLThc9UKgv1qajLr4Zed2ETM6iT9Q4GkiTieYUFUjN56n2RgYBtZspGQfXZPi6MCrjefg3fuPGXWXga8e",
  "key38": "4R85HxZvqSKEajaGoRonWj4o8XkHBPsi9U7zaG366F7PC82bAeiCfX5q6NBtdHAXWnSURmsq1vfX5wPVtvL1CtdQ"
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
