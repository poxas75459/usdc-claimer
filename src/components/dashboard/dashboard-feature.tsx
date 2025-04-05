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
    "4RJkmPuaphnbgQfiAQNHstPP4YazoFUKJb7zwSxpYkUJs6NgYTucBevH72S4S3DmhoBZzRcmgW8i1tvCmftwZuAD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KaKepgmK1u4uWdZi9zJ7pGHXqgBjVnL52bjn7VB53sTUdQzSYXAcZ9kEiRrHrkUnfptKaSy5pqvf2m8Nc9mHBYH",
  "key1": "5sgMbAAtBpAtEPvQWU4uTPEPscKH6NBf6EX8zWRSQ2HWygqdWhMuwLTGWHtwKqFvFFreMgihqL6pCXcCti5kBppH",
  "key2": "4EUzgbrxMsoSirNtRzvpz7dhbsm6CKysfShq7wJPAPSouC1VDqJwLEKPZUq8VRqe86vsfb8mz9YJp7Z3JpRSG5vM",
  "key3": "nwb6tRRkk2m2LPD2E1MowMHnhnT9j67LStfEwJA5cmKHbMNhkQfCDDfYY97QxHiTXeGeMQryhtzD5viNPgqjvoR",
  "key4": "2o5VxszdN88rTmPayQ9PSyQB1EztpVoVUJBbNXB6v8xQ5jNJjAVWGebmcZznWwLSTGupyBnk59VpvHVBaFWXyj9A",
  "key5": "2YgjtHneT8bwXCMNArDFSgQvgYeF5rcrCSoBRY7YtpDR4iMN5yUGH3XMjy4j88Ma1nRofjrdDaAyEVjTj7gmWUq1",
  "key6": "5qtmJ1BXo65xErBU9hg5oti9342FsWE9GepST1MPM4eRQtsEoRM21iTaWJgtX4q7KCZDw7dXffNPp5gTP4F3efX7",
  "key7": "5CkbmqSJZqM1cd9FYBYoq133W7yVY2ZDFocje4zSrGVZghThtREp1XdgQbS8uzDc2z9m45Kq8VUMicQyPu65Lcmj",
  "key8": "38qDCN6ntsevbw3tkD2aNrcXUrjezPTrKf4ZUxVU6vYFohF7LyZHXmskDGWr7j5M1dhbFraP3sswPJ5ppj3xjnNp",
  "key9": "4yXV6wqLhKppky3ea5Q4ACmRjdouprPR59LcKNdx62yZfP8XeDsnZGjyrhXt7RiwVJvE6tFUcXZLnKLwysFCTJ3G",
  "key10": "WQxbnQkUK6p4tbfS83K3DjzTcfrqDvxaYFQjsbHZB2b5PsNWgwrHjg3JmdiuAwtiqvN6ZuWWrEagDmcExShjud5",
  "key11": "3DvxAjHm9daiz8uo2N9zsVLcCn5o4BM6iHHv3YZNyDSWStNgof3QqM4tN8m82HaKCRLMTc16nfJiTjRBa49e6t8m",
  "key12": "5TeSX4XJRa3MBfobv7cQPAVrKgqipQCM4f7PXpBBUwr1YQZdzrpiUhyfk2G26rMAwspuJKrLLPfKe7uhjc3MHTVr",
  "key13": "2wTYznDdCpZWFAXgcuywuLyP7nDdPTF5Haio1o9fMGkuYZ7PFiWS2NUu5D5YZhTQpJ7An6o7Y9r86nqwCU9cEq4o",
  "key14": "41FVkfZYwfEwTSsSW3dcQAQQRoFCeSPfBnoUXRuotQsSqEkC4yXU3XJut6ufeBaqbyZtqV8gcrq7fhJwabuTPjSB",
  "key15": "4nHmfy5h7ZwUAuH9YZiqnLTVJCVitqwn1oPimnFUcLB9SEzwA4zyBMKBSwS12iGozKAhDSu7zXgPxznWN3RPkc9F",
  "key16": "CpyNHQVNbZEXWycHq49GGZwG466gRYqez6pi9MBJ3nyHi7g6yugfakzZp43uofy1eZ4DhpSMBoAcVrgYKNfNNt3",
  "key17": "2rf9GqQWuZV7dX9fJn9XJAuXwEU3UbHesrvdTxR98xx1ee6dyBTyfQwXhugx1gQwtNLaotTeRBDzMxLihhZUVHtR",
  "key18": "4snydLmAfHmtgKdH3teH9J3ZqM49iiqRbsiDrPjeqpyjMQyprCH7JjtS2a3ejkv5rE3z1xSHZ5VapQNPUdCC2ddP",
  "key19": "6eRdCq9sRXUNk4DLjtRM7dDhYLcDMnKm4QcBDMTSmUh981FYrZQ5HKLPnJPQSr9c7kTBW6ab3ZEwN7quzBcdWFN",
  "key20": "5ytuWoP8ePnSbtCZ82WnAmukhvzjbw6MU2ya4iMziyAwywR9owcFzVrGQCvXaxBhTNm8cA1QWQd2Mxhjzf7pGaeC",
  "key21": "3kfKoZztfLfiWemMqqcFfRwZoKQk4u1THmDoGtu7VuUhSBBLX2cWjLVU3N4qdgCknTE9hhHBayt84oMYiykkxYNp",
  "key22": "23EyGEhMTkPuZtfXE1pFHSgNPGgWLW6AYxAXoZ6XfPedwA43SYvzKGrzSe5ZRCKocHuEZB9XYGtitBfRgcGHFBuk",
  "key23": "wh4ecdQB8pJko5FPB7R26T5STZFTi7m61rFT3manrEdXYqtjDKQuREjrvf46g6NYV8DfFxdcX6B5wp5EMRirchX",
  "key24": "4acvX93BvHBGsUgs9vw42fVqJqmjUGArZw5FcU14Bo9vGRQhSYPXHojSKMjtnNWminrc7rdVHn5mnC5oKQ2wmJmf",
  "key25": "61HjFx64EqdJXD1ARuB7CPNxdMTBJqFzhbaUEHRioDZQJA8jbtkQq7NvFcf1LWfGqexwoKHnmJVtMjYQf32EyFsD",
  "key26": "3GRZQBTqcmS6bpXgYfkoyyGNZzucfuZYSR1ofFJT2sKY6bDfvyS17spwKhBZpcEse4RTENN7C1trdZFvyGvrqJWj",
  "key27": "5My2NQQ5yLBZ66s5Gp2oPReVuSVeGjTyorPsps9mZ6qpao6Tj3i1GHur3WqcnLEVSXVBHJ9ciDCt3ybqCrcv8idn",
  "key28": "4SiBvTCzHvXArkT3TnKVgdoYR2PM14AiZTMA8C7YdqHgrrLeMssknkivgyJLr5fVE7rXocMEGpFsxaeJuMWMJ6Rp",
  "key29": "2b35idayvvB83XYDCVVAuUNnQGz3TmujwwidSXTkRB97xTUFQE2ZJLTphHPL54sEyUmBKs1LJmjhDcHW6HfSzptG",
  "key30": "4ZHd7yU3SPhGqcw79MncDGnx6amSBZUB4tSF4UeA8JEwT94eKsy7BKZmpvUkGL76wb1hwMp4ED8EvQXPfaKBfpXz",
  "key31": "ymkgnZBLYdFT4BNRBkFwEhD1AJQrWFBw4G6i5s16eZwjUF6tPd9rxQTyJYuehPidQHrBRat67CPtKpCHLGMmxao",
  "key32": "3oNzSXtpRCYocQc7EfiWtiMqgCUKa6XhXiSgGGGhX37s36jJqH1f4ss2W6r4qH5mKBtj99Q6YqPXPyDJ2zzMTjYx",
  "key33": "51n7HpRwpsoF2F8bFkzb4H1rXjDBg8K6R37UCYRE2RR7qUNNAUisbe6vUu4DpvX3Fv7dp73eLTXq97ywf3TneY8G",
  "key34": "4jCQvAsBnRGavY7fBb6aVWE3Z92B13sWxmuhASSZRDPPkueCYJBBNLHvd5ZQf7YWMLRAsxQ4u6vz7hivaDieH4Rn",
  "key35": "4tyoWg4BX5F62pW1JDHSptbJskK4Evg3K1ezdEKTDE61pUGDqiK36BSbzzKtKbdXcQxsAZNiov1vERReTe1UCDiL",
  "key36": "2G9mKseMHdhyho9ShUHfCXCSPfnAKLeqEQMDDt2BkBGx75Taf7iyttDmZwVfpTM6XuUo7dFZ3cagtUE317w3aNKL",
  "key37": "37JCLAF5PNaRsjRfN7ky6FjHVP2XR25jHW9qzHP8yTACPU6g7so9hvP3VPhE7eRgCpwYJkrw8WXTTtgtJc96qhrf",
  "key38": "2sJPQSsK2DJQpAuLoCfpWX7SVW5g2kVEsHJ14AVoRPkHeYKodgkqronvSCch2qZ61SMAUSgZjuko3MQDPHiXXewH"
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
