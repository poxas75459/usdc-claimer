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
    "2UhAUXyZj2vt7QEeCe5bmDH8LBQ3PPQRzaiz4MyfXhtTQPa3vm2Q2fSdYjDT8gQtEtd8e44ARd17NAug4CZesUTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f3oFFJ1GZMocEbATXN9L6FPr9iEYtEWeXnQjipivwbQfoEt1dHntC39eVcRZEKXr2WAVEWD9riyUU4LiYHaAFNj",
  "key1": "2Jn7CSj1PDqBZGxyWZ4iqKUBc9Rj2NcuEVuSz3PVg7uUmVdiSk6YmX7Co2LXgK21k2MCtj2XR5HpAD7VWSCLRTme",
  "key2": "4ULCzYQaWk6R8BUM4bFkiAH5z4Gouq1NaHkvBqs1hWYW5Sxy8XxYW5Dp9x29r1PrCxWSp5h11aSS1KYH6Mvm5Tiy",
  "key3": "3ZzaSHFZmAyGczVLBshdMZscLGGYxmBvRLn3Nmq8jJQ3xPgaCbYPT7upYGeSbbuHiadeeGLeJRXwJBuuAEaVsy3q",
  "key4": "2KwB5owh4oVFH9PdQuQJe1H1kYQrNuznjwbWSS1p9yaYw6jVUZVjc7VEaYkUrBxikkkRvZTrBLXf5LXtMSxikEJ8",
  "key5": "PF36xPXkNmHamC7LXjq6SPSXxoTD9NBGaCn36EHoF2JWMnySkHq4Wj5XsGsnAp4EPy9kpYeiAknLQmfrmUvmvgY",
  "key6": "dVYMXLdL8DU1nMiiSYWjjkhmuXBDHWbBxUfPd7Xy2Fd9QakksHoBJobbrsFfxK4njJJ5enR6p8cnPcCG6sENrLD",
  "key7": "5ZZHmeUA8hbfRgKCEg6fAoZYY3gDYsXUVz2GtCumGRE6FUi61MXVNkDGBygWjR1F64Vqgx1zP9t1SZoitLzcHfDr",
  "key8": "3uZxSha9Rw3Upf61qcevjVkcDzFA1VaXApeNpmsKYxC1pifYbQbofGtoZyijyykEk3oxAmWpYcrMEEhZVoqAs2bg",
  "key9": "2DdkHq737aVHdaVoZAmAcAXnAe6uf3CQQQKDEEERWrEjK6G19NUJTP1qphHyVBVmdJ6TiEDvrJviY9eSeFthqKCE",
  "key10": "uP4xQ7jc6kXvpraG7qNSt3dYLnsr3UX6jWEZpvgtm5bgdg3ZPME4uYLw6cnka7m3QKgRbySBWEBZUKonkCPqkTZ",
  "key11": "4TWCLohtr8yKMYsaQrTce9gue94N5RV5BqNAMUe7xYi7Lgv7mGhNJefzVXWqpmz3y7cpB6XniSZVLG3m9JgRb3wM",
  "key12": "3CpxPmeuQ8EyyXFrojy8eDzktkysg5dDdWR5VmhFQ1UR8CuDNzB31vjg3nJQEXXCMF9Kyu7GX3ks6FBhWRhWdzQD",
  "key13": "5ycvYsQnaZX9pT8aDmvAdqfwuJJHJUZizuKBnELSFNdsMFYK22YwiXHcq3bBUzcpNihWLH1PqVp54juHG87knNit",
  "key14": "PcwVYEamKEeukfacNSgq4Ngcj9T8tL8ydxtfAEwdSEoKVfGryNV3EkvEJ1HEMFPP9DZLY6S7zW35c4nQKA9NxiM",
  "key15": "624uZLNvPdB2MVAwFArgUy5N1C78kBeenFnDK6DjGRAspdyxAk5cf9vNrv4hhco46DDA699rRDUzVbZJUSNPZ9gA",
  "key16": "24G5DMZe9xP9rN6TKM27VhXjVpPrs27TMXmvp7T18gnSiC9cj5TmaEoMesKRe8xBCm1fUvNfSCYY2jWdfKqqJYRB",
  "key17": "41L19iPxA6pfG4BgfY2N2S1UwARHbbsaoD8dcj6PVRXZNbNKH3nF6iWHPvmHuaVQjBruWovvmhK9ZAGsaure35iy",
  "key18": "2NAJLk3hDwPDMNHECYjGqfA5LVfb3yX1epLLfWoBTQTeQQW8edf6drF8Km7hASQvkJtrg8VwCa91kY9oYzx27UiM",
  "key19": "5AJPmwV8PAP9d2uH1bKwCHRrwhXouSzCRGfXa54ot5CjnpRXonJJAAYwogYzwvBLbFLJEQzcN2rmkrShvZkjrqXX",
  "key20": "2i8x8CujMZvgEBTLXz8xFLvtxthCt8vMjsPnjFiruBeELAyjN1Ye7f5o4VRJDz6jhrsLA59eH8gpAFmtivPUCnjn",
  "key21": "5dxFAgYsKtRSWCiWHUxRCcakBZRsQHcitYodzHWYPL9ELKF6yJJivWXLzUSToTeidm9UYgUXkD3GexMB4kwk9uzS",
  "key22": "3Rr9X7aurjWC4vsrqznnESABRLTAL56GWqAgGPUBZSD9AbMpXiwznmXfouB8f5V23dzB8XJHkY2FHaikHCofsouY",
  "key23": "5zMQ2CmSyAANLH5rVAqziTnTcV6ompZ4UnhhqZvnGX4VfyKVe1jvUy4ykZSyWrK66TagSaBYjaNBbs6dLJLTXkev",
  "key24": "3YKYcGJ6zNEzBEwrVaLEpaCKr8PhMbea9GwmQ8rnSvVXgP2TW9bgMTHPTMvJ9wtf19oRguPTcnTrcUZoXw3aARWi",
  "key25": "65WoNftmqJRkZ4SEYscy5JQTMBF5uZBpu6wyFkrrUaivXhXf3a3TqArkuncAhXnhZ8a6h8mR5kW4rNjtMbqoBXcx",
  "key26": "ZRQWJdjazyt9m6YpE7UkyCNr47Yhbith364Z9Bo3Z7XLEmYiTBcv9vN5t18jRFxrYARy8hQRsPGGhXSbNMLJBby",
  "key27": "4r1wf7fZsAaBiCX3hkJmTsZbCh8T6tpnJpePE8RB2UZZ8MzD6J5PVGU34Ko1Zr3AKwtW8HJ4KVVUnH5F4f4UuWQj",
  "key28": "4aA867KhYPKvLtErgJ4KQMdgTkB6D6471hTfRNcUySGDVen9z7zgWU6wPdTndW8GGB7dPszJ29SCaLT7ZKoCrVKj",
  "key29": "3Mjvkzf9Fd9whBSiswrBtUAqRsZsfWSfikbULFD28LX4cT31tnN3Q2cGWSiouNx1P1amZVhbCDGjPdbX3YAWRwZT",
  "key30": "51sVP4Xn3Nr3gXBofeHouy67QfcM3MyWbkoFBUEox7sx1zscdmUvpk1q9b7nxGKU3L23MuLv3z35JhvHZL4bJVdG",
  "key31": "4jqwe6KGkvhCvFN1G6ZE897Bv8CBC7cP5nQqKGUmHHJNNtYeTLgMJ96vA6WGxVwXMMrrM1R1aEgnJDrZrFtSt6KB",
  "key32": "2wd1K6dTTuBr9NN3Hn98x2sewoHGtCHoxRxy12yLYugLk6RKJBg6gF5c4FN1u5sWWeF4MFjeYpUky3aHsoBtjBR2",
  "key33": "3SPhu49DowvEtbqGMj5RALmhac11xchZ9LGxPd8SMZhVVmXK1UPfFBeRrYF7YFJSbk2ZkA8FBuVUQpLgCDp5E4dg",
  "key34": "29c7Uug9VAG1dXhtyfaRzZR9Q1aG9WpQxbMWgfjigAB7ZfiBqh8xBW1Nc1HVJe7ifhZAZxJL32hkpypiLXercqoi",
  "key35": "3ozMzN1QfZyQpYGu2DqT89BXGA8o4BH4wVCJcV8nCWK2P641sirih2qRRpEXdnHxxp7hwwUiN51e1YU4GcPDD7on",
  "key36": "4tiWi1oz9P3F2BwoUGUEMhZpDf7JBNg2UmPeAjudpzTMRucGgLhHiYCGm53hUZQuB7YYXthU7ZH9qpXz5ooeLRm3",
  "key37": "KLey6THrKzVKJdL8CVpPD6jPBcZKgPrMmWYhvmg6CDnnChq9E7kZFTj8zJzzmXK3JmqwC8W9PT4Xup7mt4H5r2E",
  "key38": "Qv2uw6mqYwREo6AJmovN7cmBHDZDthKkFcC4fJ8fLme3PpMTtpPXrNmyXxjGDcCwmxY4Qrne4eP2nBF6FATRRzn",
  "key39": "5UjTaPY51Zi4J2aC2t3WEXQwhKx8FBWpcwZwu9LyjX8tRREVqWAPa7bcmMe952xDWkyL5rtAwuKnT1MwiWWHEHwP",
  "key40": "3v7q8YaCbdSDHKgTNPJBLKiWkxAJYZ8nhrN6FNb2o36tQ6sdoFZrPfny8tvi5kSo4oaJmWVonwzWTL67Hh3V3ACR",
  "key41": "5xyDbQF9hwuVuJ2Jh1Eh1uvT9xygAEYoH1JmseG2o411k34ojYDgo4K4gDFrRXDtsin1ZzGKwKGPcSQerhR7iLto",
  "key42": "DyaHM43qpje9gsrF56J6hTDHSVnvNHuVzPKjHMitiMA5YD6Vo5aCSwPgcoedm3AmJvJbgDeGs2B7KBN2omAbT9i",
  "key43": "2vFTGHivVQ9GrjK2QEMA4b71Yr3xK8UfWo2f5Bf72Ei3La6ZFkJePU2kbv38h9K5VfzsTtU1DsG4TrvDM6jWYn9P",
  "key44": "4MWUqkrWkpLZwYA8z9GNmCNJ3BDAGtXWfSYX6FfFWGb3tgAPyTVCSkNBjmYBnMLJNAsfWGzKgfuVA4YuVc5caXMV",
  "key45": "2mzu6mHdKdEHHDc8Pg3GTsYt3CvuhVVnhTxrUVT1epus4oRCcmLuBwcr8v12MLgKrZCrSAPycVvSq5pHFf2zoHhz",
  "key46": "48HWaQES41mQiyqq4JrPExoRx8aLBug7Njc56d68Czm8zfpp6CqAG4NXY1KrH5h8yNQjoqMke1tKwxtBsXTyo1m2",
  "key47": "3dAcqbPFscLDFmxZPF9Y81gUgDix51BcXX6FirCddKkjy1RDVAFM9mLZAPiEDt3wBGLHYPJNtCdhPxBPsmDesjtF"
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
