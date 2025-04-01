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
    "2wPaNHfPwbP61y1FT6c13wiPjMnw2TFU4wyo3kBLbwVXkdiK3HCxDvw5X1Wg6Lscn6KF6e5kp1JEiVwSCZSWp4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qu3s4xoZPEebt4p9H6ovMqmhvMMCUcZ74JvcX6CXY2em5YpD1YJNdNKw3vWjAzN7bzvH5QRQ95oie99VeeKfoTz",
  "key1": "4ZWkmDuXQiWLtcnACTLJ2eMhUm1B5y7sfon4pf4hepqdYnnZ8yVMG4T8gwYDZL93AaW3F6DDm2zQmbBimUNc8wq1",
  "key2": "EgaZM7pRoFsG5q1hKMWuUYgAF2kHUBr89z5ibD6R8qot9oUudzZ6uGwaXJfNZgNRiWrn4uzV2a1mUUWhHYa6jsh",
  "key3": "Cj39pwzthGGLqvFHRTTZbjJozLYNsgZnQp1RCr4JB1wQB9hN4S47z9dmJTD4eTo6gHBGVKF8DKTXgXmcEbv8xrQ",
  "key4": "3zusZAmj1Ya525Agq4TAtbthdVpjwsXq7TsAD8Y8K9vj3g94nynuiZCUr6v8L8Em6wunKcGVA5YFNMzN1LESqXNp",
  "key5": "qDYxN9i2D1mjVCr2FWEgjo5hoqkfwV9kGTNzYMHCpupP8RYzM66rjrskcn7qSvSkL7gwMmc6mhW7dZ7GCR2AgJ2",
  "key6": "3rSYk5PyyvKaHtTR35cgapRQPqmd3Hr1r4T1nBosvo9Cv1ZoB5h8E6LiT2TD7h7aPnroPVocYb26pZcvYNmE1mHp",
  "key7": "4FR6FgFSAj5rUKFfokPpdZxyi9DYBHjqVnvsNSLEnMeFAyaRm1wZtVNiVAQxF8CrUDHhwCQJYJPQgobbixqzXQDw",
  "key8": "2BJTbt1A3deEb4Mx97Z3eHVJ5LjkMmsAB2SCvAA8U3SGdzr6LZtqxJccfne7kv5saTa47Vs4QTSa6KRzoqom1Xs4",
  "key9": "4ZBQm3UAfdywrZVAadyovQitFjyzS8y7esBK4fkdfbSyK9GdH75tzKfxsDPPwdnzqgK2SzrqsEvBgmZRtQ8adqmH",
  "key10": "SH12cDijkkKZHg7Rg4bTCvgdvZeK7SJELJbsisBa5w91x9xSDR1QEnJEm9LKm9iyswyYqdgSwh2HAEvXmf4ZL2a",
  "key11": "5pzQrX7Xd5yqYRcFCd8YhhB7Ci8pNWTSKXuERefJZ73K4oUYmXfUS9H8kmFSPwsmCUVwp5nHz6wjsprm34b8nn4V",
  "key12": "2dgEoDtRVeeENL8yDLuwXct1BM8KDb9GxnLU8bYJEScxjZaXSRkAripToy9rXJs5FPvuiVKdneYBhmSP82phJAcj",
  "key13": "2biJX1i6G2XJm9bMhRjvNjsBB4sK974f58AhmgUgLoecP2fRzqVA8gCHPA8c6BkytsNBLrEcMXJgEkNxmmg83SmJ",
  "key14": "5crhSRkoQaFPTUtDWe3pzBc5N2y65EJnRtvKGCxGiJzu5nbHfnZewQHimPHb11S99ujfiyigY4TGCdWHgmWq4RoS",
  "key15": "2p2fHB7XPU3cG84x71muCnyGfLnqSKCn9y38njH74Ky9VSGsdyuwPNcVffTrF26gDFEQg1i2LzijmCZ6HJRwH2ci",
  "key16": "4WzHddE4nE3ePz275e7dsLhgZowZziKbtE1U23yS3uPngs7BmfhcXS4qQAZBGBv7jnFTYrcUd3qP8AhtWsHXCRsR",
  "key17": "QByE3AsM1acdAiphJDveaUBiRMAJTpgyL4oNmikR6RP6ysKozrtndup8VnxGsZSXXHc4JdRy28kWErzyYqm6eaU",
  "key18": "285AXChP5Dj4RuaCAa77XY17VpmHzLCxXcBZuosJXUNN3M4YWkY3Umc2x3BCKtrfFtkvGXiPg2nCBZqmWTW6F711",
  "key19": "4ewfRJtijeKKpzVdE9nc8QcvV7FCtSy68vGV9PrdacRhu86N8LspHXAPAEdYWA9KUqRLu5iNFjabmF9H9EqFBow8",
  "key20": "31rwS8hQ1cLbDeoFL1oFyDMoFvUsYMJb3nLPneheFcHgsxP3UdN9Tqr9qRZyzdFH5EwG9Dakifbx3LhRLDFqnpP2",
  "key21": "5dnFqThMWij8Z94k8eh9GAx8wufX1xjdvTsi5khj9fFAmWh2hPpghvi6b7rTY48ZTNxyWCUxpDWzfYfgkSsJd7uf",
  "key22": "jUkdAqYcMoXhwwwm8UPi71St441g5oFVryLZwVhHpHLGpxR6xCFTm88cm1eRYpC8zwJV8Kv3WpYdpSfRe8enECf",
  "key23": "5D7TFusbDJfavgJGEeaNR2nacPKws62Da27AF6eEbzdcRE8GAPd8giw2mKzWxxeRbavf7CrnP4kYVyn1MWbdbbvH",
  "key24": "4hDAtkiRedoUmVJ4HLz3p8i6fLPdkdFmk1tJyaZE6fzparkuhdzEgjzrRZLtqW1cGB2perftttcJMT3A5WG1wm9r",
  "key25": "5AVhFjJBLDjWHevRAAAcJ3Bu49hKi6JkZaHpa3cPwAjGkagRUAiyXBMQMVXGddjLZVRdddzk9BVRyGYtgnKKc9DS",
  "key26": "2gdSXtYvazwc3mpJ3bjMH3zdByQteP2uUnWWSxEi1VZ5tH649JyyoqADsC6D55zJJcyx4Fpz6VZdjHpwDqtqu1ed",
  "key27": "mVfNcr8S3WVbf4FbRdg6LywXuuzWqiBtrs4Wj4JS7JBeaBmeKbrUCVfXKiiQ4hf1CQH9DSUwsE8KyZkeFGXJzHn",
  "key28": "28mWoaJc7dMAWWKf2TEAvtmWt7EFioEHTAN1kR5RiusFAuUuiZe5MiTHTV4KGAVzXRiY4xrjBQ1UT3q5onKFCKVM",
  "key29": "4LeDMrXhXcZn9WtGoRUhZfQijW1r3VowrrqfTfNBjeUanyjYPvaZxF3wNootTvGJ1KSX9VpEvZKxB4yvM2eNadfw",
  "key30": "5EDEbfCnSQmi1D3r55j2DnoVgFtENeTLHpRqmjqffYKA8fLJDUTQorC4SCvVxteuPrNwz2EVDGLnpNoRfx1Dc5QJ",
  "key31": "XWxBtX8GCf4qWiEpUsWyhaWpswZKsPksRVsHRYXc6um5P6oMxdSRAL44AaWrkqpscnigQmp1dgtht8sMefr9AUV",
  "key32": "4SFoaAUFmNvg8b15tyaGkSCdKvnC822bnoCsZSM1BjQWN9twru6XhvJCnBrPHqvKeh4MuXmahDC9fhieCLXAKmEk",
  "key33": "4XT3sUnjLKGrg2EmuDgatQpqmkdeLMCNFvYQBS7wXFNwwSYd7BxvPo2saRDBw6egD4r8HU8s8Vp85utBApbUTEVp",
  "key34": "CfcE778RojsvaRtXJNvx8JKCTSNFf35SSkemtokRXRUexS5vcUc1MUFzhUm58J7xD7xkAHutvEeDxmzxSkse8p8",
  "key35": "3Dj6wfJwhpZo5hdL4zWPTxmraf7JWtKSPQtF9fMiGN3TfwtqLPpfyURaStMJJxz75ehEa4urvdVZP1Ytih8DTSpY",
  "key36": "5U4HyJyoeoVyAA356jNa6Z82uG3kznVLRUDWYKbA4W4Xh1RYakS25a4rbHVLznUoZw539qTa4M56TpyV2eAfH3s7",
  "key37": "4vGevUrQQyM6VJ3iXYLd1DxMmkRPzuiamr3A1h7AWgNcFsUktXwf9S1qcexffVGkaNErji7RT8vJmpQHi8A3zEkP",
  "key38": "35tW3vWVmCSErbrJR5zSYbBP1b4yY5sNrx3eujjVsKPApBF51yCh8oUDf9mzmLuLeEH5sH2zqSYA7Fp9RyEZxjNT",
  "key39": "iqcMckLRypWbWYvMNWRSsqeguVUtQMPBwgjFYpKAmF2XFPuupbDTbbh97EnujXu2gwwX4Aa8aArea1WrDcvdPXX",
  "key40": "SzFpNLRyFCqqPAQWJpDccVbyAyYxx27Qcfs5WVyeK6s1SkgRo7qsw3DL2V3LApJ7J1WXVB4TmKH9TvtMjtuvnBM",
  "key41": "4pmk5SyKHadFrk77UECAF721NbhiQ7x3jDN76z5HX69REihkJ27fP4L8DiuMRQz98sqPkFtYkyY19TcV6uafndz7",
  "key42": "2GnBFXT85FmAjg2JgjoBQLvQLzCpbXAV9vELEYQ7mHqGjQFK2n5D4Cjx3RDbEQUknKrERFW4xsX85gs9m8BzVsmH",
  "key43": "4g1WVZ99Qrgwqr3yHxyWqkeEaNpZkA33d9jDeto26tH1bwhJUQ21sSqVVRm1sow5BWP1yoyCF4k5CFxRmccLpnsE"
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
