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
    "4YJ2DJUNM6f6GdrVgiQ8zMpY23EtumKuUsztcKGKFhq73N8myHJgSnH9krx3jL9M2oSCHVoifhbQRGeJ2A3ciK35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hgQXjTAMtFDBJEgd1n6SnrsXYxPdjexbaQZNKRcoTuum1oVNWvmQCh9UtBcFMBZ2LsrUSXrbH78saPxoJVhNQXv",
  "key1": "N7m5rT1ufwmamFpHTpj8UQSSRUgzSA89X5A8MbLt2SvbZ4dTra33nGT2ihQT2yrdbiyVo8Q3kdFg9fmQFSa37UU",
  "key2": "27sBMNbGiE8gad71GxRdjpbzWxtiG3CNwZMycSibwwHX5kzBytRSPreRxTXiSZo3vQ2RtNFLwo96CDWz5nu5Bata",
  "key3": "32vvPQF7QR4tqZSFwe2CEL8Q5BbBU9aDHYTYiFxMKvMhzu5jyXT2Jh59qtiMMVhTA2NZEmriAqwVbAiyUEpPeeLQ",
  "key4": "yzpwwgDatyu3WyUnzGr6u82DH5qeBGHNxGTuBrbugrz6wJU7kNUfNUhs1Hj1Dkb5z3HZUhXLGD7HWYt4JFXk3pB",
  "key5": "3g9JuWsES99ShBCFkGkVrLwgkscuruDS6L91Z8FcuYUaf5wS9n5P7yojxVjK4iFacCuUubK5vvsFgDxE28EffjsD",
  "key6": "2upJbvj6G7wQp3xQnGb7Q6ERub6ujMr38uLcqttVAwYvxFKqZnaTJruKz8SCkuyT4htqdS8b5mWp6dQKhEvTDUxD",
  "key7": "4P5VmV5pPSuH24DLzWcTbVidC4SHAE7e8xoHjaTSyffdzD8FJQZi3fF1TtrhNEiT1D879FikvkFsfDh5FiP1ordk",
  "key8": "4UxCc9mfc9FzQN8ioBWXVFfwkpHaM7mQ1vrK531NNPpvHte6VyaaWdASi24ZNvVJUR83MV4LcQ7uwi3cDZrXcdP9",
  "key9": "5aSVyQUk7HDVfoULjdBDfFRQLFnhpBVmZ8oAiWc3zvMWn8fnQo5APCcjHuPkLv9ddkMyAo51eTeTtj9kL6YZSFFR",
  "key10": "ex9uZbm2C5xBj5P7hybAqtMwJMgoTESiLtx3XfLiw9JLwLvGNL9mr2iuDXzbXYEDsQXwdvFusj6iZLMDELaX428",
  "key11": "51jCPhwhuGZKusxrKEdE6ezyETGGeHQQppsC4YV6S2iCdjcUtGgSohyYkKWMEs6bzp7G3nVhvQaawLsXGmS79o7j",
  "key12": "2yLqD2R83kUZCFUks4EEvJCRgv31YVBQbHJ2Dm4tSYmFQGre8AhnGetqHPX3Fc7gXtoD4QGiPztVjb2jZEharQLo",
  "key13": "2HQpajPNTY5cUT5YSN6Dq9EkupXikqNXr2EXN2ztZjeTU8sA4Qe2VGMmNFtffED6uJx4Tsaqy7cqg4C89EbgBwtP",
  "key14": "52B8mKV2uUd4x42euk625zTdKcXEui99tfz8JW2rd9whXWvevG5Qd73L5LnZzzgABpoBjTbLAqXh8fVEpnxTSshq",
  "key15": "3w4Z5JrqPHT4CD5zfz6SpYTLpnjrk9YP6Rr2g4ZgRMyPHoeLbhBcfayAcHcPyetKBTjkgudGp7aKzh8et4QCdm75",
  "key16": "5vrprgD73iZMZU3LT28Z5z6qpZijJXNG3VSPvrRQC76ASamYCBER37NW3aMGMrCdCSxogWKAn1aeaPbRotxyvhEz",
  "key17": "2eWywucExwquWv9fU2vkuLaA2mHirqcYvw7hqrXwN1kzoHpAZaFNXnJqw6XoCptM6gvrNhQsyAifQaQzt2PpE6iF",
  "key18": "sRHmjeoiKe3sMqgZXq7ZZV1kMaZHjGpmC85vjSyHTAAeGfumskEdaif3HawysTBnXnyRLsSnU1JXRSRxre6Fccw",
  "key19": "2D3761YzBVqDyp3hwg6ZGHEgGAUNjVcnrBUABi2Fo998UNPQa2QaneXT7omUhWBbbtQ5w4p6AAAujBnYtFK4MNZY",
  "key20": "2psx4rWaeivUECwrZy5poWAr5zqy9tkGNVHJ11KdTogBa4Tp96BNoPM4zqm78Yai46sNtiRYCUvfbppZLSHAfpTp",
  "key21": "4L7ErisrpciVpY6DS8BUzkUir2WE7JJ2gxqv2C2V5UQHzebUn6Ezc4oxWnDx49V6GX7sWrM1RXctAAR5svABsi4L",
  "key22": "5V5eQXFV1wiPEHJ1pMwW3rLGvuZPdFw2g6bfzEx9CFjuWKT6Q4TU627M2M6ySN2bpKr66A8tS8jXAHu2eQFC5dze",
  "key23": "5bqCp7NM7JiFM932ccA6xtKjkyintMXSbEj15K1iS18fw5ioeZwMvoGzir2WJ4krpCfqe1etZttzYvJLVfSs6KGL",
  "key24": "3dSwas54goQL3PgRXr7wRbhJ3tkNKj36w6TjLKDm6mUeWn85EZHwuHPBj3HAU3AqcDQyxzCRMrsc2c42hnqAFHLk",
  "key25": "4nxY8RCwVcF8LSiFmQ6MPnTsqgioBJgPjy6PJGxy62xKhZBa62pgcNxXhhH6JCDMrsCsVejZDB6X3YMJ8tfKENNi",
  "key26": "4WEwLUwY5QrcFsssY1KYim3VbmHmwGtR7nXwrjZb2VF2f4B4SCAF8G8c7pFbcyai9LsQwj6rHSs2HrQ6Sqe7HPDP",
  "key27": "5UNnKPWi4tL3qEHok4aPNT2cb3bM9wHhNReWvsGLoDPAs2259DCtQhiVR4UHwejZCXu9tM1QEWXarmVRttoC3BkJ",
  "key28": "2MTamovAuUEKX6hjY2dWTQtdhUaie6yYYrRryU9tqgEHbCGhucuzZXtyrKrjYbZFeMeA8CUEoFB4izbBXQK9MFvz",
  "key29": "Cn7AkgpgUo5crJVDe1YNWQbr2y7CYVJWMiuRTLr9gbrzbmJY917YREGduJVP83QhBYUdpjx8V8ViAeKfQ8Kn65S",
  "key30": "4zTtLKN7CjdKiMgfgJM1dTewYctgHAhze1ZmHqEheXNZx4oqn5qJbBAjitg1qvxdz2VFu1kpQGyQgS8sqDwfHeTW",
  "key31": "4hxD5a4kSAz3N9ua2KF2pAJ2ABN9qsN5NjngSDdr8fiLQmJryxvZQuoxGm1HvSUfZags7XNbsH6WHqqGv56WWKVr",
  "key32": "5Ra37RQZ3gk48tj79YZefkwArXU3KGtpgffraYjV3KaGHEJUwJY54zaEyRek5peg9yHYftVezc5cDS6z8eJEdVsS",
  "key33": "3yEwKnVP66H7YLSajoHSiouGTZFMWYmV51Tju4nCfEzLKY4htKWxwtq6B5t76UisWBzfnHgcVx45xeZp1o1smFaw",
  "key34": "PbAZunoEZXfR7Xf9j2h1RCeYVDxLZxh3eC5iMGVTbMJbtZHQvgDHdzL5Syia5txbiH31u9kpBm3eCFGKgiCoCRM",
  "key35": "2mBxZghA1NfcKAAbdBKjTm8u74bsPmaQhRhto8P3Bu2FwN9QmYmwSyPoZFf94K2LcYF3ckC671m4hW6RfkMheDko",
  "key36": "67as9KM1RQPR194uUeTc4YhTZFCAGGbbMmAH7M4WZNrkvVNaGe2AtRqtsbaWN7UqQj4WKyHH1i2pctL22fJRWSeJ",
  "key37": "xu6jL2Q6Ei4acxJfkwSWz26LtEHLAoM5x1rJVV9RPHqhK1jzHRbBsMnwKFWUz3X4UAe1SLi7Co4qAAu1KegvcrT",
  "key38": "ghR5BADN48q88gTVLjnTNThpGyZkqAD5HiYMtpdNhtBnXKF5dLuxa8FfpdRoDY3LytjQGuda1t1yDo3FXbZio3f",
  "key39": "5UCaYVHbLFsSsYxPXSxHcsRgsW3aDUC4HoKLDZ8ay1oXesYRcTa45GUkFKcu972atkn3HRkxEacgX1XqWnmcdMNx",
  "key40": "5aCcCndHddymSUKSoHWrqZckXRNKYVmm6Qc9erTm2bsbQK1TPKpR7aNAV5LSbpgyTMsfiUScdbrotcW5sn5PoHwa",
  "key41": "4PL3AMGakgca84ciXfhtZWdPeFxiV8aLwozUgjp3zHgmW9GnjHNRDfrG7Yw6WbYCwhLxEptj65hUowkvRrdMrjMm",
  "key42": "2fWaGeUQncH8YVSRwLiLHx2U5x88DF6BeaVDpz3VMS8yf4Vu3pbM9cpknSWWeBhSYAYzgJeWs1KFPPcCVdGWNNxx",
  "key43": "GVrFNf5Vkpdag7uqT3gBe3QGDs14W6yWnMscYhppixtAuRSmZcbSFhjSx9vvrgQYiRx5gKP6sTnmm7V3HSivRA9",
  "key44": "3V25yhh7DsNj5rX4NLGiAjGKDNZef6t8jAYnHDiRnFiw86b6sL5Mby2zGJZe4Kv5ZDrUqFkyCtUQfvYSR8NnkvA2",
  "key45": "4TmGSnRe2553LN8gP3g7mp4ENP6jVc48PQu3hERJHxsacDSBtNrikY3GUuDfsfXHNeGKz45MLzxsBrc3cdsDvDEt",
  "key46": "2Bi7NK7Y1xu2L7p7zycr6s2wh4y8TwxekbGJZUzS1Us7dp9ykdP65Q7obqdhEGDDKrygtuT4yqCHt9ssj2pGKVSz",
  "key47": "5CtNrC4PWD7aHPR9BY4qDPJj5YmuAACiMM1ZjD2mt5JXbv8mP7P6iRQqMACBKRHcNPmgwCD1uXv4rXZoVhmx6K48"
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
