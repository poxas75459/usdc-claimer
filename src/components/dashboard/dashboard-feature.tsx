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
    "n5GqCfoeMuyLD3VsRCtRd4MsCq2MTwMY4kX7Skwi1g2dUibkGWpgQPC88CznSrU7xj7ZXD7Rj5XS8rPducPpGuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqzfahCmcDZ9PWgxwQb2rAKhiopAYNxXRKkV4dqKXyFwTa6HwRfefGqugChxszMdq9UwmLFvGiGHZp4FUNe1teA",
  "key1": "tnyz8ShqnjUVKYUd14nXoRGygm18fgbZcRH9a7u76sMDur966fWRkkSWzUkpt6V1k2rEwV3xFWXMCCDa4BH7b6L",
  "key2": "2tZx2w2ZHgSb6hVhNtom92d334RqQBTyyBCCwz3ycKvWQPUBUs2U6Tx5PQyWYPEwQcvLjrmnb4pw77QjMHAMftC6",
  "key3": "4555cUm5j69o2HAAjgif72axGqK9NFuJzTQuTpr1PzhpuvzfBp8vyKx1VjaivnraHug4pArAp9xiZGq24wgTyqtJ",
  "key4": "5wRum9r2hDFCSf53RKensBKq2C42WguHXNLuMY7CBQSvfT9SQRXKob1cg4M12JD7AHbzsUs7CscUNF5DnGw6ysv5",
  "key5": "4wyZRc9pYddhkKjBwjG82ZuioAz7poJaE1UiDQCWvzsPyFstCG3PQqfmfVBcgy62yMw9cz9xN95NyXwThc1BsJQT",
  "key6": "3dmr18vbYXrhcahNDoJWfjBRnVV4GLwDAGSmsUqqBCsDDaBAF4TxNRmdR31JMusZLvHL5KTnAR7FZG9nixmnfUh8",
  "key7": "51hPbEwqGZuVb22bgxMAvJF7jbRCmdExTqTYzqsGSkoDsHmWBkqoDSBSW4yiFokBdJHWiCFwxnH9VJ8Qg2NEDtr1",
  "key8": "2QsLwz5Q56AnPzg9WD4JXUSi22czd8NhMuPcnFvCXihfiyNYC2UfmWdMCN358cnUduhA1gk4emAEK7spS16swJx8",
  "key9": "5eQgTwxjjsFfovzVDCa5DnAxXttKn3nCgjMYDQrsNCKkazYaDdrviNPBQ2mZqPwPdADgo4WA9MnVGC4GJn1ah7mw",
  "key10": "VvASHzvd1siD7znR7Jmirp3DW4tW8tkpxJCWNY1AGuhUb1KAYZma1zyHpZJSQunpk88Ra5WrRuMmozzJkoaiz68",
  "key11": "2GfzaG9K1wbU34cwLGtfpdEUaDenZGPV38BszTr7qGtsR2gxkQPbuQysoDT4gHy1hbyf9MKf5BKxeQy2HD6zbAH9",
  "key12": "ySsiBNHuEwJwb68jkeKW6G7XwuRYkkBWdB2xMn3ZRNnfRfLaNiKDbJzbcdB4LkUHCdWB9CXSeD5s2sRJGcNvdpa",
  "key13": "59kz4qhwJiif6khJDHaL4TaAzx5tiE5x4bR3Q9CoHTexiNAd4DWkYHfChkroRoKkqUqwR6nQLrHtgegStyikXemS",
  "key14": "1MsiZuLYt9Qm9tE4zwXveccV9ggXUFm8s3d3s8w93B3EQ6uXt15hvwxXoAwzVaeK5oTRWe4z9v1xUPa1bDQwmd2",
  "key15": "5sNsfpzqzygd9FMYnLmge3oScoruxpL1C8vp14tfeQaGDUfjmiMnqjE1XFSKyDw3ej5e2L6bgRsDEAueeCnff9pM",
  "key16": "5UWsutbwD9aBVxPZ5q2X2LwY1vVkNqWj8mAKBytpss5tVF4fCtF46S4MQGQSkS7H1WqvJBXot7KT5hs4XZS3cmiF",
  "key17": "63wLD1Z2N3a8E7KMHVbuWuAx9etYHU1C2q3hVp22Euw6Ci3zpwn3nUNNMYxUJFU7benfD1kiBbdJ7PKhrms1vuX3",
  "key18": "7JKovtsv1xi9hjUZ5xUhur6xpMViUotdaHtUuZygyRtP9hruqfT8xDQvLkCcygpCR8ewrTvQspbB65T5KMxGhY8",
  "key19": "N7NfUvAgJPpvdP3MMKgaRcXiLPEC3kCXY87Tas3cSfEL99neQ1yA8hiYCBs45zVhuVejW26vuZHiZ5VCbnFzB8W",
  "key20": "2NSfmzBv7nRHoBbLhmVffoKADUG74yYSxdzWS8q31n7TYhocmMjcJFyWHCH9P9KyHjAcVwiJtrBLUj4xpC3RKe9X",
  "key21": "4gobH3J2Q8hPfdNKK8FfuDxqt8oT4Fg42q5u42XiXzXqz1d64mabGFWFfBU6YUJzfQ1K8VMBSri3SFxmuj5BomYu",
  "key22": "qcPD9eVVroqCKG9cRAuVeeKYbtUGeQbonrMEna86PYNSLwiM2muccLTXDotZ17gPB2XPv5LjkPgEPqrDkib2dPJ",
  "key23": "26eWtjYwpUARSSAg726vZ93jtwUU3apyZYf7AEQz37VB7YTwzjiGghoQrnSkKraFsMiSaiiztFPE1evamfU4F3Dy",
  "key24": "626q5mxCmU2iDftg24R7YvSiGjaH1JrVYFWUxa8KEajgXrNQEffEVA5kx8kApGBLVcAy5k6efkycfWtizS97BNLo",
  "key25": "RKzJNHY3xqdv9V14e4XrV6tzZ4ZRUJPE8gJpQzqocZ5QXW7aVXU2qerG59aizAfSwpdghd2ugE7uYdVDpDC8Wzo",
  "key26": "5mCgTyjYPhkH1zgPsXfWs6QTcK8ytzuv7AgmvFE2LuErjWxVTLzC6uwWqZ2bUBSpFKZLY7LPw41HKqJcKs6SoYno",
  "key27": "5kW3Ltof9UyNXkhf9wpUBtMCrzJj5BEnMr5hbWcLyjAjrhzyygnv3PphWEXCgd35s7mtgcGKKSYgj8MCTG3UBE4y",
  "key28": "2pPQkqwtSj4Wq7TSVTGkn8FPJcan6Ue8mYVTLzY4XFigSPqBq8q21L5zFwKz8PgddKZuJsUtcCdd8SwvWwTQjBV5",
  "key29": "3dmtDvquutHF6MXspsJvzb2FfGyFZJ1Vw6z48SkaiWEpCZgyBMYNXkk8T7nJknbeZNdogprVL8BztfhNYjLcaksV",
  "key30": "ULnan4kBpVMd81bh1Zx89Yy7m7FEfEw97bWWrJiQp885TepfHUoR1LUVVNX8VFkVQjBHFW4uFFpiyJok711ZKZo",
  "key31": "4r2D1LYhsdoQHaps9J7XPBqjXRq65TQdKo5xNCc73SbaDK7GHLE5Bfz2dpp9q9weKQAgcSLyAFsqTVZvebsp7nHS",
  "key32": "4M4YRDKHY1M98wuvxDht8b85ifqtQaYBGmU4mH8DwRD2QT5hMaijFKUTeRSTSTLGJARKy8mzMZSzxPXwvqrz5vqB",
  "key33": "4tK7cAucWpr68K1YFhKzLNzxMTji7Dh5LTHhiWFVPRVCe3rDjb4QnyDkeEPBoDz49CbRGBXaLwqJQMV7GSN8jsTD",
  "key34": "4K9LbFjksaYpx17FbyaGrfBD46USEHbwteZgtQqRgViKMe2ePAzcmZoutSfDymR4ax3irtNSNR2u4FuvDDDzsm1g",
  "key35": "3XGPhGC8FacHNvvpXB3AWBKm7pFVctrKTydeaqow9aRCY3M7qLViEvqHGyaeUtiYDpLTj4DxGEcxwGnZdgWA94fi",
  "key36": "QMZP3CLoTZhY4T9A7xHXehv2Kmi5bJkfxsJAgf57LbLEZHx1X1nt19nCRHErGzGiHE9cY6CmWN32THwb18HpQF6",
  "key37": "6zj26Y5yM4DSV5nPgYhaYF1GpPBuaMQdeVDzoUbkE4t6oBSuyXWCdYGaP479Chs99StVzD5KQvkr1WY1AJyzdWy",
  "key38": "5VBrgfNceNK2BkBkFN8nM3VVobsiLsf74oFsTVqu5dBpuVBmAtbg4meaHpC8rhZZdieNGgjez48tHMGQfJsWiW5R",
  "key39": "3J11Rd57756H1pz5AEHiLTh2ptcv51dXCDkcmQh7srtdSbJC76UrbCa69W4Nv8NqAxBvL1fF63DtoStTa8BEeEUq"
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
