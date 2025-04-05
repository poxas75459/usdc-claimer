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
    "2v3fEU7Zi44diaEvkP2yxB7bsNBAh4WRtTiSwNZHPgxkBiJ1ay1MFpdrbdLwq1EN64PcsXysXeZKyyT5xX8ymF3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gBJpibV7n617QK2Euxsk2pzNmaE3coTUU9opSpsFBeWiqhungkx3QehA2pYyUtuWpApRFpJFVm4QVXLVQ5oCuw5",
  "key1": "YEibrpsL5FXGemNDUs3zQrG5LXw1fnSbfYsVW9ubGnCujsAJFZMwdu31vDX1RQM48NZEw66fiPUGrSp7GUWgQUz",
  "key2": "5CKspYNyh5NgDWgRJZ1XNqj8MVGNyL8qwYF1mpZtutRvzqXo9Uq2uRJ4U39ihXz5U8pTsFtR85Tz32fstvk9zB8F",
  "key3": "5bDk3GZ4caTDHy8vbreeYH84PS4j2KmARc3iTr3BvNsDKwBZBWN5r5J1bGm4CYD23EMLoHQwwyaydDgihQ1xXBEn",
  "key4": "3ouPX2qiQLZsBva5FZ65uxFPJXfqWJYrKc7xMCmMkpT38VYfRcApxzLujjZoy9C87ZwEiuMnNhvP5DQ7rWpBiG9P",
  "key5": "39dAS9wJA2N73R8B1cXCe89WXWAzmo3aSy98MA3bCtwp9ga2pYq6PoAyXkdYWiksUNd7R5GaMZBRtF5z2DML42Cw",
  "key6": "32qxGpWL7TRc8q3FQ6Vsif7JK5HWMumABpkjdgR21GozQUW8yy6YzCVxDYV432LTG7cnVuW36g6o6emq6PBLhvuJ",
  "key7": "2csBMJDHnqxfHDdbrjZvvT56QfzseLjmEwKGEjB9ei1ig9WMVPT1XH4L8tghk3WuTjhkspQ1nRuqmCD2xNYmYtyq",
  "key8": "5QSv2y1FXYb3MV9tASbB8Z9rd9Vh6e1NGxKBw1tJT1FYttMNXudTBPE4JqoSCLHmrpofWvT6TFWStd8MkPfcxzUB",
  "key9": "bRWrjTb9YALQKAh5Bxv3KxuukNBtYawtvPn4buvJmUFwZZRT27nire5s6QriLU8Urr6W83vpqDyRQsQ3khgdE5P",
  "key10": "421hNRRbQ7io1cqaAJVGrNKLLBcB2dpmrhMpcA5NEQZLMXsgRSCSqnP7BQL8LgZ8yYzLCCcp78vLApQcZWsPDwN3",
  "key11": "59QXvhpSEZjj57KWRtm3wsHTXqXf2zzvEjsGoHsjiBNeohdWcdnBt9S9yZDPH6MaRDDNaF4h435HxsTtrbw9mG59",
  "key12": "4H9Kp2gah7JR8mu7YVa9sZ6CpE7EGxXUJh1MfVnYpcodyTTRsbp56bgjbXzsee91FmfqKi1o7yH6uFDnzzVzibwf",
  "key13": "6VDaYJffTv4RBajE4zrXpfuB1zrHbb2fBHPUsnYiuzdjLn2UrMU7indymj2PKsBbXBS8qqCZrcvFXsrnBqPvVd3",
  "key14": "2vAKZ7UAguoFJCiFHg2aFwmH4zXmRb3SCh7d1q1sDoGSbiQBwwrWr3CcEexabVEcXLCiEch5ARsDeDy3odpfQzaU",
  "key15": "3FXrwuCs5EvkjMyW3NQokMymbkmScQ8niNFDrLMUib4Vw4SjP5f7RFDRXEH3b7snCD1pjz5q1g3NoQtKyukaLwbx",
  "key16": "5A9GEFRz4Bfq8rdtkfBD4YGHRq2nvUfdkvmEeyKhtZdPtGPufcSpQj4jD9xyDxQKxNdkkm752pDRRoa8bGL8FAMk",
  "key17": "4hNDuRWoTBxdQit1K66KrgAVtpCpTKoturXykWVQrA48kvCoMfvrgnXZWxSVvQnNgbS9awLTPF9tsvsYfsrfxxrf",
  "key18": "5UJ8Ekgmwpsv5vRN6xPsvi4QtLFdiGwsMahTExNrMYrfZq3AUDYJjpbbG2PXdtLxDBJM4YhZdEpbU3kMnsCQvUpe",
  "key19": "4Qw8iHrPyLd9gviDqxXL3UdBKTjnyBtfNBkSjuAv2ERdHb4ndJaW17XxNUi4iXUAJHTtcj2aRXvLkgmRyS5ue1k1",
  "key20": "3fARjPwKKX9BpGGCgbY6wwWy5VZ3S8nXBSjLgqBNZeJFyz3dtQBd9oB1BkzYuew1LzEgrAXE97TgG8gB75RNsyGK",
  "key21": "2HjMo7STToU95u2RxebrrwBMwJELsDP3Eu3RyHSKXmaw2HEumpn3aKzc396zG9N3Wz4cX83G7iLwFu7RnSiF52SR",
  "key22": "27Gp23T8Qv2GYvMzgML4jPGr65DmgJxRKyL9rNbah2ug26A3vkA2GpnjN5pPtkrZAaMHXARxMMiaDP2G2eWW8j31",
  "key23": "2f1nfF7eeFt19hzYnAssu7KmMLsFxqmFsExLttfYRc1Z7xVm31RenA7UTvFhWpm8ALQYBmb217hxuKgHr5snBchR",
  "key24": "5HJBN4zXWCgSZQsqdqz8qTwFQ6uMc9d83cAjYqYocM39i1HFuUPx8ZjTrB4RqP6eh67iFEAKQW5bLwq893tNr9R5",
  "key25": "3mnBdx4KkfPYhyeRvWH5nefdAYJ2Fwaj5GtFNRAKQBN93G5satF35VZc9g5wjkbuZXasxsJwGug2m1DhqWgtPTB6",
  "key26": "YwrWxrDmZjuUmiaMvL6MCw7JCdn2fsZBVrzBwFUzWTo5cz9UJyZ9k4uzL8AwLsELg2GxpJNWNytG5ZaUrWJBZS7",
  "key27": "4sdtopViWbexQ3KC3VeFL6Qob1dmCwNiW4b6eyWiStDM2NwhL8snTWFbtdYxgNs57niG8ugwuLbQmf7DT7KGgHY3",
  "key28": "4xXq3mwD7hbrWTDd36ECzdNyYQ2dM31UoXCA3Nm7fr78ENg1jVWEnviUymvmxtSnVy6u7psQBywLH6ajaAkzzLi1",
  "key29": "3EMC7TLTSzYJro5eCvLzjdLJsM9xqscpLMqBEsTj2AcNeAEc864EJjAMto4QZy58JsJjATVpXZtq2ycggNeq5dMS",
  "key30": "4La1NFZiycvGjrnJ76YRLzwa2EuSc25vwgFRR12FfWi2mW6X2qb4ts3abJe6yBsJA8VoHWH4gb4zKo3vE5TUHj8F",
  "key31": "NmnxDyEFnW2bVbsDdWA9taMpckrZhLe6jPgw5AQ9vzCJekPgJSSRDRB7MihPrgCni4SQXY1QQaYcM5ym2BZLPco",
  "key32": "2beMb52y45LAVf7sXCoN7gGkk5pjmHNVcYKD6pUes5FYUdbLd6yMojLPVUBxwC2BpAhmyp6znZYc1L6rWubmUNGv",
  "key33": "2xk2SDcQNLwxZDYBGruyHCZ17AsJw2kvhT1yHqSmf96fzj6d3H7gKQbk9m8TA6TDE6EUpsKdri3ksaf1QiP6sH1Q",
  "key34": "3Xyw6r322XRNNwp8nwNvaby6Lmu5LjkwUYKtKWAViPctgyrVfUptVWWTUvXn3CjXR54oeAjgtNDhLtjkSTHWtbFm",
  "key35": "4nGLJaGrZ2ojfxFT8W2DB1wN3E6hW7pXJ6SHX7vYQumMGSVKPePGshwtR8ayX4wsE5grzaS3QNt3ajV7zjLbeujh",
  "key36": "61V1yWeopu7182JSHGasxkX4PsMwBw6zQFcFmoQffELyrY8QaNSWWfenKEdYo1DeCH7Cb1wxiy419pcS7pB1vAmL",
  "key37": "2rJ1R1iHQSFTxXgjmyo5xPKa43z53Uy596ChU7jJocwZF5CuU1H6BwDXxZRYdeC41EhHCpvtEe3H1EQ2qenZ48D5",
  "key38": "EaiGWhoChvWPqcZ3CSrt6LfCtYToCz1ahPmRT1XgfKMNxWF3Ru6RQBUE31tsCqJdkH4vE2SSEuLDErjP8id5LFW",
  "key39": "5217v7mP923X53NAvu9VAdu2GHRMQQ6V3PUgEGyHhRX9iu4ivWhEExS238fuqumPNnao3CShExreWTeUnN22Kz62",
  "key40": "aMeHkCJvw6acKB3QSowVt1CPdwAwmMZhpbXrSA3tqTQGoKVJxg7QGUCmEpiZwRdgQZxce3Y77CaRpdYUNvEVrP7",
  "key41": "3UHnCnD5WBTiRkCznk9v2bAEYMg6yb7xrgUrp6dDmR5SFhjpDesxWuM2GQHc5WgnWMAagVQRNuQb42r5mfwRPKgT"
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
