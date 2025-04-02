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
    "2Ra8tLtBjomvvNR5VcDTwSXXf3dB3kkjNgZns8Uabuc6XrQg8H1tkwYjymcKfkx1TaM3fw4HzxG7biBcufVmV2Rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obeHgpSszg66fRe4bnBufeVvEnGDBSPAc3WuzzegKdMeFBsomJS9u32foHRdovBMnMhDvu6Ewpdc27y1TvArZMY",
  "key1": "4ChNb5iL8C7tkrzJ19XwSGiU6ApTbrCDmahxLnwtySibMbF6U32Mc9sQbCefzhy54a7yRmf62WxdzFiCd1WxwWQu",
  "key2": "4mPJ9YsKQjJXCy1We3cTStWUWmsE7sTQzEJyMvQVFehmDn9PhPapRQEGvY3ZxnKYeL8ms7yzRW8uxanoWUsdSbhv",
  "key3": "J7VRPeApJxJcN9cmmJbTuSstj1Grc5JRoxk7cw1vgaHFC5q7M8P7EV6UvrxPWqXJeoZQqHrrauuM8rgETmoxWQB",
  "key4": "5zEqxpugDstCW4qRiEhWbb7uhZUSzViBM7w47aFTNfqvjjfHuNMUCPqcUtYAMzhSuhnPM94XLmhzf6xLBkMZ5Ed7",
  "key5": "2rsyaCCds1RL2HfKTJ6xEPATH3YMMsbtfrGozUjA7MfWxNxU9tc6bYjscUFdpuofQ2sxKYummwjsCssCLKNr1HC8",
  "key6": "3HpmSXB2YJ1uQo7oiXtPYzePBAqED9n1zvuYFZXcwV8zDiGXL3WHdgm3YjvYFo6zoyCNonJkkaWuPhzahAjjp1i4",
  "key7": "2gKi3SCSXkU3kZddUzb9poXUjCpwzxcyb7XPJBSLSPSgDSBnRBFnCRRjkwHPJ4ANnF6VtFVibW89WY2BFrVFKA9M",
  "key8": "2b8wHWwEKa4dDeL5ED7XdkJyZRB2YVbu28b2JnXbNuEWSPDzZZQMJCiheWEvFdGuCu9Htk6mgVZSpoRqqqHihgFk",
  "key9": "3RL2KYLeDi5BuD8ogzbKXY9VrPP8G3cfr6H2icLFk4y7CmXFKCSFftB1Lec99cAzg2Xr89pwR5X4gf3kQ1HuBAnb",
  "key10": "4QnJoXL2k2GWJ9bAGpg87NHsPumsktMMw6AEkKW5WdKjyeXeFq4DZwav32baAjtTXzVfLKTyhNyvGqUAnViHGi1v",
  "key11": "66J1nc5vUMRRTxdVJQZxrvF8fcvPtYtAK4utp1HRddQAfLCdwzaLpbbCvErfuPgRe64RrWqVPgFj5EKosmy4Befz",
  "key12": "4SL4eUkhdk1ppHWnec9HgiBHhDVYRUAaN5YSEmeuYnhe6z5jy99HssB4xxgvATN35qDpDmvpf1CFtyFokeB1GmoT",
  "key13": "5Euj7Wm5DSD7WEjVKjeHS9MJbAaGCkqHEa38o5XmYHphskf5K1XXo35eEzkKiZXbLns857RAHjfWZnBHDDocT1Nt",
  "key14": "3NUyqQVsxvRNXFVugdeT7kYpoW8WTh53GkjM3SVRhDUNtmYHEAUqHcLnhmGfy5prBgP8d82RsnaUGBgs29kqBzax",
  "key15": "2UW153RgfGrfGKSLoUkxx2DQewWhWEg8VZgM1Sp5SkB1BofjEnB4cUbKEozWCVoRXEthegeCBMZ28tCd4WNuCne6",
  "key16": "5V6JGJVPgnWz8nunATsg7Y3xxtYry7JTqLYweQbnEkzPcFuNgvWfrhEYx9LHEbRWBb4mtur2Xam4vcqmkA1TjPtH",
  "key17": "2PChUkN9iNFjJMR81HAuiDwD9DDwTabA8SV1oGBaeUbxhgVWx4F6TT9wNxCiwENwG1mWkD9MKikcY19Pdo5XjKZM",
  "key18": "3zvE3VYNpGF2NU2C34VUsJqb4A4rd3GBbcxt1Mw8znMBtEtRhk9G3Y1LGYDZBxCjNRuTtkJN3DB2uKd674J9djWA",
  "key19": "5dq546wC7soxXKbeMXtSEY8krhUXTc9KQiGnuSHDqCx9L4Df6ag1XNLNZ5ZhQuEwYUAVghvvCZHcLLrqFm4NrwRh",
  "key20": "2Ra745nsUVMRyMFSuXKzMYkWj4Px9V5eMABeke1iyXXJqPHtLHkUpM8jhVcpShVqMunEAdMfJPTkECJgfJqu1XR5",
  "key21": "59YuShyLV5bHQ226k2ovQE9TGuns57AfvjppPLzMCUsvPmZCfhxJwH14aLHvojc1pGVKcRbZhBqwxB3ZTG3Us6hb",
  "key22": "2m43NePAoQfXSaLBDtJRxuUWfW5kVu2qJTgsNCv6haU4gj5Jv7Wvr2Bdhnf4Jv5v9bJJ8p57wspRTFcZhXPkcwoq",
  "key23": "3Sg5zcMgZEm67qApBzCUTPzyubvAgyrr2Xgd1GRb17V5WJLrUoRNeNS2pnshhZi7YmGbRX1Q8gyjmpGGeiLNPpq6",
  "key24": "fRPvu5jDJ7kcFxJ9MF4zZeRzsAh6f7GY2qwDsoeNNA1gKyf7LaXGRxqNN3m5JBZCSkYrXNhSVUBkB91gd2c7a6e",
  "key25": "2J5dSiNxFFvfHgifGNJJwEgJn6HEGFs1K6M7Q8paR62aw4vSdTVicdR7F27upQibm2p2fJgg6ZjwpRSyq37EhsiM",
  "key26": "5y93NyE6o9duxebgDQEV8zq1m1vfV5TQ7Memg2UktrR6qJQBpV8cGF2LHPsTvNSSRJnTWJJXShEnH5rGN8cD6HaM",
  "key27": "wL4SCkb4r7WwE2vo23nShdfamFoiEGzTsoUwYXZtxPE61Xq4VGYagga3HGok1iB2nF1CnktU1Lpvqwzqfg1vtxT",
  "key28": "62hnGhYDDgV8thsmB9Xim5sBudVrnL35qebTUyLZj3wCPSr2PuxfspbYSGiJv4dwx1FnzsqhhHEJ5G6gSwHAAhw5",
  "key29": "5w9Jv3NyZ4nVXVTCmMrq3Pp3jkFu5ED5fpfK2bj3tHSSb4GJUKZGmnAFWomVTNZrVXub9C2wikLEuqQNz9PR12GY",
  "key30": "te7paNhS3UdHuD5wGYniSRPSXiK4vm7PUuPm8ZatSJwrWEXUsGt9noDvmpgPHFREJNUkWAZU1DHw3JSKMH89Ac2",
  "key31": "gQdERgujjoHNHXtd58rW9Sh3MVHC9n12q37PrQVse6PPCZq6JZcgXi44ixrXWDJjTMzGMm8d8tyYnBHSAqQufTu",
  "key32": "3Vt4MHXyZUAcXswjqvczWMQx8tA4XU7yfmYyRw65oTzzgPGVvK8SPF7KjwbLesW8CyLojHkySH9gycZpgfNNJZ9s",
  "key33": "5bH6dkox8QENSWHpMXQN2URmj93qGA5eJjE2GqyFjuGKdKzajzbMZsKB4Qdx3uYreiMeHxZVXXoQJCycGos1dDb5",
  "key34": "2mNqaHXaCuWWiTUbpXKK2JZaNFnt7J3PM4yiCPSFwLFZDot4JDyH2d2nD5swUMC4s4wJTbA6GWTXMKZH87DnomcR",
  "key35": "2FNtqyLcAyUj3JDVyyqyxWPHVFL5UaGXUoSsoCCM6J1uTXmwrtpqZXEe7VS6RrZRLr4mw54oD8ZhMnpxjLLUqpFc",
  "key36": "5ZrUKLej4bKMzZgcoQpNb1HchrqoX1prf33dA33Vnm8CzukrTgLFnT2NGNt4B9eN2UN9BNmLqUMuq2qNhoXg2GrS",
  "key37": "3M5zFp2FdgqaCGStjk8YRV2BedpoATaYXZJxhgkYCTm5R2vdtLLJrAKYyauruxAX8SYJzkR9gntvmVPnQSgLHJS7",
  "key38": "2gzcoa7gbvSzc1Ce3sd493b36Yv55PWuHa8yQmcvTB4LfwVtGaLT98kGyTMXEHuF77hoyTG5ESuzU9LmYJwR6AiA",
  "key39": "3gpEnxsKpHXe3SnnjmJHVGakjWb834YY5DPKe5RbubNeeowvKCcUXHTiSmcbdcp7fix2pX3QGVHAFbFbFMSptj2w",
  "key40": "qtnNmkVwhrycarxBa5kymw5GwMkEiBY25uBLuQkRxho4YtatA7tBtd55J35wfubmpoiETTLCEUD5QVHMUyAgfUS",
  "key41": "3KuBg8xyUpaD8r1TfR159fArQSGeBSY1fqokrZU8Epi5HbQZCus1pmnuAipg5Xg14XpCfxXyXwB2osSEZGVMGsu4",
  "key42": "3BDAqFcsbL5pDMqofyhZyhNJn3HfLzYMWz5hw2bbciTKXw19SwdTRBx6TgaQ3CzBxeQGkKzpZCCQbZGpjR7FTzX4"
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
