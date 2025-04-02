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
    "4UgYBH2nCk6sEvYAyN57P9uccRfN4hmzRaVHtGpXgb2B5NXgYxJhefHFTuMvABTkcS1b2PYTVsUZo6n4k6ssu8Cs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X4JugY3J2WsX4gJ9nD3Nm6qoT8zoFRqRUB7uTEF7zy3yKZDh2jNLQTWRSPZ3psJVJ5iN4eaxF2MxoC3BEEMUa5s",
  "key1": "5tZppz8H1c9LMXNgBt1CWEmdt6Js5Xf72Lj1TCS1KKf1yY6nEM8anBsG2dMchodPgKJk2QM4qBuFH3UWhaMvy61V",
  "key2": "pVoKgPd7Vha81hAY9Dy7EB1N7uT1259vBBbbXKAKP1jqGaWDLpMidQaajLTX62BJ16zEmaZMPurS2yFqyB83joU",
  "key3": "5mcM4fRnJCzKimQYHZ1dBXexNqndNdkn6KiBv9ZHLwrHPUd2iGsnErfdDX1XLR3CG1qz5Rfv8i74TrJ4Dz7CMBML",
  "key4": "5zZMHpdRz35gka6W9wK2daR4meuiMw8GeU5j1eg5NcMSXAsGpcRJeY4seejPdawipBE85Rjubw1hRkbbzmPeZje2",
  "key5": "5NB6YwkdA4Kkvu1StF4ocLpooZnh1TW2rvgvDLEbnvKddNLWg6c8FyA1mx8s1ZMBaAoMtnfHL7h2TMJPayLNR3tv",
  "key6": "3QPycgrYVdv5D2aLmTuCPMY36xFN4oqeiNPtcdQQ5LuSKixnMDprdPyCiUifdz16qU7hmW2qfwGSGsZtowZdHTeA",
  "key7": "meVHwHWJptX1jAz8tz2GzezupShv14nCgWdSehW1wNm6PuJnXUrBnuTbUi53tyWRQH5pqpReDnFd9XQALeVrZDw",
  "key8": "5fp2KR21JQ9Nx9czoHFbjUADdT8R7af7uWwDDiy2JiMyewMuBN6VDHJ55biWmc4CGd2QFDJJGjFr5oaEqL8YHAQ8",
  "key9": "3muMVrGf36PNMYNviXaUPKUFn3Ptqw1Ez5s6XQXVpDGhHzJPsyvb8E8KYezEYEToiUZsJPhSRMnazueUKhD3LitT",
  "key10": "49x4WqF3mA4mCs2qVJC8VGH8g34h2f4UuZnSVc1M3WNJuXEopH2UPRuhnhzwddS4QSttF31X9i3BCSK67wCwAfSW",
  "key11": "y3Ze4dDBQ2L8os6p4PNoibWovwJ6eAT8Rtu8nLqn9Vdo7gqxk6zZnuzwq9t1NswE1BWad9FndU6fgMzW46FADQJ",
  "key12": "3VRYLqWeqctBrjQS2xUPJ7avMEgQy2EjYCL3vCRYMYJySfXh8HzJkXBbSurxgneT9L2Dm68PVqXJacXCZT542Hkp",
  "key13": "8ryc2w5wx6eGiL4VLNnJP3HFLCSw6mwk4YhxX8ckXn9A14cGhquDzdhF4y25UB1jkDN66SJWQsC7z1vBUmFt766",
  "key14": "GNcWfG3xBU9nSUskNchrxJkrH6iisHN625b1Cmrco8q7PDSuTUbm7WG3F9uLQacT2ppjjY8qNgGnPRyVJLaAzmW",
  "key15": "NVadvke1FhiwRdotBm7yBet2tfzmGSZezqxsmvGV2MAze1kb9KDWKFpQXzcvnm9i8MTCCfCs1pW5h3MxCh79tT8",
  "key16": "2Po23pUkampFq4H1THstPgBMJVmD6S6r7FTQybVpMgfZ5cyXhfQgzt6CaVV6JtytjhHSR745pxK6nqRG2hEFQWPp",
  "key17": "QJq6hrBHP5szBTP1XxMrATWspzXnUu4kZKMAzE9VBcEGmzyAELsKZ5RmSqdDxx3Dr5Q2dwdTFDon2VPh1zsxQb4",
  "key18": "3VL5hBLEEkmosPy8vxuwRKspGPFgb1XRuMdgs8stBvYXYEY9Nf4Y9or9FPDWm5vJc865NPneTmPWsSHWxTQ5Me1i",
  "key19": "2jTTzZwJbh649BWJZW1kfTPSJR8jzb4WGaZEegiw7KyQjkWEC8fuUXX9epsVwBK71GQFEw8HRH6tv378S1oqX6QB",
  "key20": "5n3PhWSYQhrtHcCL3MpJStb9TfEVx6vVj9vVpk3KKGh6SGx5KPT8nzaSvZ5V4i2rRo8LvGMmQdaecN2GENzr5YPH",
  "key21": "4464HuiZHLEXcfuL1Ae3KFNoWbQFDKiuUC3MUYrAhSyeJum4kakSLB9uvLWkePYq55Js5yJfypwEFCxwiG4aYKoa",
  "key22": "ytkLPFLTDmcQ6YrXP3sUija43SVNDTDLZrUz6wx1Uftioit9nd5xcdj7waPehJTKusTWHuWZsJvx9aeH13Vw5GF",
  "key23": "2uZTjE1rYi5ELeD2ZaRoYpLt9zXq66LzZQYuC5C9DEpriTwHuNUrwCYZgeC2qQ2UkqdFL3zgsjQX8rAfiBqUpNT1",
  "key24": "3tQtrFXVqTdtsCakZASRnWnX87xGXgP8KLhejqK8712u1DyepzTnQp4X9Lu3PZ4ynjwgMfExFxf6V4Gwav9suLdD",
  "key25": "3MiyiX71vFrPVrP31U1oSxnmiDCzTMMbzRMm8hMsNSnNZamjxoUfUf6pxzWLFZoYSxd7JYRnHeGGheG4L8ugb98D",
  "key26": "462BMxJWoUrTppSrJ6iqmofxsUo8ZyFiGtQZme6avwzJxugSLBQFYL2aWxUyb1Nneq3PCi687fZh3Cy4GK3n6Y86",
  "key27": "4RU52f2KJXGJoz6t4ScS4i7nzhy2dWhcoGKnQTiJCgy1uwheh5sBjXFsoDxwfhyNjYCWFXuUFwCCDrswPm26AjXH",
  "key28": "5RduTG3jnnzj3p9XvVzBmPnkSJ5iYUBPMhBtYUbvgedPhNKd9cPq7CaRv56sRFaV65LQH4Pg3KHTArYcy7QJQs1w",
  "key29": "2sy16oLPBjC2nS92KVMg57u7F9yc4cJCJDtomwRQA5U1t6WdvSKX7haYuByAfes7LjAXLyi5fnx3zSEnETVggcoD",
  "key30": "2X7Xh5m56ojBT9bQfHVbCxZ5ov7PGK5jD6kw5yVqJ8LETJyFChaiNKye5UqHDXSZUdFq5nsvxQ9E2uFbtedvPrso",
  "key31": "5kT1ReGD94o7iUmC1UYrtf5Z3XibBhfSHSkZH2Z2WmMmr2p2XS75xnYX2iCCip6StFELgBpLFUQBEWYfbBDQoRy4",
  "key32": "oKtfB5yTFn4j3wev9erGJa1gfpHZbK9p2NsiFeLyhPA52hET44et33Yc8AmLNgMv7DxALZKZTR9TJAbLmRtPvXZ",
  "key33": "5BzarYSFjB1bdCddHKwbDbd77xALTzhz75WaHPvFMVCLRcrvK1yrfztBGZtfDoSyUWMKKDxKhWfxs9Sw4TeJMZdA",
  "key34": "3FNx1CKc3JzX5gD2Lepz5j4XANELMq6E1nBLKXZDsbsdXh8BU4SdzxZQsNgjXHYrVjmYfu8k3duprs3cV6h2iWRe",
  "key35": "3Vtn6VCZtjUwabpGR4Ashv5Jg4PrKzFzHr7V75FJXx3mCzayED6qmn4Q3gvP8S2FAMfTXdvBm3ZMfgW8LWUBaSR2",
  "key36": "53JjrQB1pxnhHWcphBBFukyWXkKkgkDYZJYFvyaXfWu6kbHTShgw1nbEftZaLn4iiJbCoa4Rff9gnDDnGkvG1Ucw",
  "key37": "5ZEdWT6xQFL7QGPDjYM9ChiRwnyNozrnoPEFo7JWv85gNo99MARqL8VtNmissidt6oushN3AaYJ9EC6y4WBEAvr3",
  "key38": "3yadHZcCqYNuwyuB4qCXDoF9KrRtFss6dmnF5dJR3cNark585f6SGaubxfgBtYyyUGskdpKBYmDRfCCHi9YiZbok",
  "key39": "4zNi3w5E9quMgyBfa1mNYsMHGeqrkZ2KoH3TLbYhnubHHDfkMCuF7qwoDCw4KcxSfAW12juAmkrxksAqe6iCvp1Q",
  "key40": "4j1jYrjjMLbVBcu6jvdPyxVTeqo41r7EoJLPzRZ4bgRUtZwfzsfRRQJWpiw5VtyamHs8Xo5K3A8b8ePWyTCZd8sC",
  "key41": "2SVXCeXF7WnG9wAF8FZ3mvsW5edyzHmKxh7Gz8TiotsZ7Tt48XS1aLqkbehkD8Gvwww66LJssXGcHQt3SdPiWVq2",
  "key42": "5smUZHVRBaB9TvaFMdcWo2uBE32k8NVDepUrb6Ry6sYgkaaf9dcNeKgrLSvRw5eDmXYFz5YTU7Pemm8QDnDuug6z",
  "key43": "2Xut2b2Vx9LHMzkYwgr4wK8xGbcjbUie2MtV7da5jHFuGsgFZL6ha4Z4kK5AyCRzJZoZuuzbrNa84LAqCHoXhMJ4",
  "key44": "2c9HAwt2UL837uUEwtqTdTbcQx227hoAoEkuCXUQrmKWoZrSGBxTEtUkAkkjbM4yxrEP1SR2b782UXQwTN7HLG6",
  "key45": "4EU8iabC2sYB9vV3gwS1FVV5GgfwCLjuYn8ohqM9mE9uS5yxdLjMLgmde6jTFK9BzgFgoXT5Dw6QmYpmLcsuDiZB",
  "key46": "4wTMCfUgGah9pRCcfvm6jCGTgSeS5ZMqjzNAm6BqULyZ4oD3x9cnpniTxLHeex72DuoFS9oNejeftBjYM4akaLpD",
  "key47": "4nmLc6NLETNaSTqJmawJ5tQ9D49D5AMTvjg9JZDiHF8vfcuwXsfNJLEo7frQoJULnEqBgpbPzGaaWgpEbAzqSybq",
  "key48": "43EeWpi74MwpcS3uRZfkAmoLvQTb2ra19Wzvmg8KfR1gBwqY8FZpfPcXUBut61kVzL3HWd9AStbg4xBrs87x4hp3"
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
