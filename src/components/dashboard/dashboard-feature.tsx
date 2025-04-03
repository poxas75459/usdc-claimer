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
    "44BhF2W6TnsfmCCW1dV65zGnbHQ5mvxstfidSi4BgF4TVQ7J119exjJcJpDcKe9nYYyXpXek1CR6ngWRQrDKgQRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgZrgHX7h4N6KZ8Kh33xNeR7iQSBPJoAgxyKZodUwk5PLGAHYTQLCt8BJj7To5hjffYoCnn95Xd8EzUTUqEAU3P",
  "key1": "2V37UfBPjHVu4waSmtFC1H2dC1Xtn7BnEaX3ar4mdmsgyNfmcGrmZhSg6n9dPThBSp8ssW1sX8Zy7JFnAMW9STT2",
  "key2": "3gSaDFBsDvoEkRW4vY75xmNveAz3tfpiTF32pv1chsye89Ny4ZaSnsmfJqA7BfzvWTvbG4Zp4Y7pEKaUaWRAoyxL",
  "key3": "5A4F1HKJkxAf8K8911Y87oM6WfLoGTPEq7BEgnJMZXm5u5fFnAfQxCRrQFUC3Dg4Z5tSX97q8W4vJQyj2Lu4762",
  "key4": "5fxCQEVSXJUK1oGko9DbVXjXCrxdNBkcZg7V5dPbu2w6XpToU5VPq8CZGGnib7krWATmhk1tu22r44jwkngArLfh",
  "key5": "2cPwWvameHGemZUej6MvyJbWeHA2hMyqisqv6EVJMxekhBboZWd8aJWPSLfzWQvyzXRqQHHB1QTKcVompyGb7znj",
  "key6": "35XKjCcEHXFQGkkBoYqZmBqNcVoR8NuVmxyq5kJnuEPbrcRwvEfU1TtKtbA3xPmi3UsEWw6HwRX2MbubtpACGECG",
  "key7": "3KB28QpPpNpnnyRsH1xnnNFYKUBZDFtJvi4x2zr7Z3WhtXGHX4xZfHo5GknzHGus2urpiBWj7VHoys9Rd6Hbiis3",
  "key8": "2voY4yqydsxAtmL7bJaN29Mwu2dyu2YhNaP7w8jMKbTFuEYU8Y8s56vzW4m2WZ3YzAGA8DWY91ifhMuCzkq6P63c",
  "key9": "4LS9HdGayHhjpTGRMSMKY3s5fuFoGkPzydGY3ToUuVuYGugPwBLeWzLoGq3PYGRa4QKGSEJ6Bj6GXRp3suvxGGRW",
  "key10": "45rrKQkr19xANbuF3P1MJxAafjaLLR5MsEbCv4qnok1G7va6rHQfaqvNBsiUJwe7yozWqT9jQ3wN9bg95DBBU6mb",
  "key11": "4eCA6uxwZkNbde9Yz6r4r2FVsi2ZJTwtbySZjZHp9Lb6ArrMu4oo1N958LWguL3Sf9dYQCHpPheqBdR37L5zCfMt",
  "key12": "4X5bnSvDfHw7hP56toW2dShTjLXkYQBa69kGFgdtmzs7P2mujZeEEcdjVHaUz74BgVoxmhg2C5Mqom9ucies5V7H",
  "key13": "5aegRnsa4s2YZE7rvsWk9STHF8hZ5Vq2ssvDuC1XFhaZcfkqkMMRp7FWZqGAozdH3AWuhY1E9FaCKwL9JY7qBMAS",
  "key14": "46hbogs61bii3Upozke71FbZ5TgP399hEq7ttMNXHMsxz7W57ihw1GeJL8rP3DHcE44ybAMKDiDiqWHtJcaqRqmg",
  "key15": "3quXyrFq9VZvhoEPREBKZxAekzzkC81tSsWbLB3N6csCCPMMbbPabv8wecyyHKp2uvVZ7EZ5hZgh8rEhWjbiVP2U",
  "key16": "2cePy3DQ8ssJ9kvY6rc1SyUQbRU7kzDmbFeUDZqGzXBKkH3e4SSJsbRe3tSL6ezDBf4UUdTDBgHrEzPjFahRd5Ug",
  "key17": "64GryjLma7Mdn6bwQv49wvdp6QkUPKshfVCcwrk995LrAQnfvCopD9EZu9tn5wTcKAnEBG3tLG4MFKtGe47CZ3hB",
  "key18": "4WgmD7NoER62kdnyyh3npYYtikQzgYqvKAHFt1s8N2nPG3Ja135nQyiH9tDDK8Lc7sM2L434WW3h9ZcgPSCnyBfT",
  "key19": "5sfVvJEyQVy9asAYVLAF9EvjnmDEH4MwcuQsWv6ieqnNXj8FyT4jpZPhbAw6nurKKKDVKn4dGKvf7X3AsHEBismV",
  "key20": "3h2shCHVunVMviK4youEZMPw8ZhFdH4KFeFNzwYgFpyJN92vfkCpL7Bn3xd3hxLKzM5qt2astJjf1T2cCgM5DuQf",
  "key21": "n2u8drXWCZpD4mpQTB6XDMv8qewiaQzAe7rCBvNUTkAdh23g1KrcKzQ2d6PfvaaoDmfdpoqfE5CKQWC7qc6SFB5",
  "key22": "4WKTDi6ToxHzjem3pJhx4jbR2QY7X8twuh4Z3t2tJQ9FaEXsq582YokapsKmgLHj5YkqA5xdCUT9gqkcY3MKSdUk",
  "key23": "4u99cvrDR9UU4cRZ1LsMYJX1vT5eGfC6fCogaemccaLqsbaF68otCTGNJsLmcL1TJLEChTb2H6jAuwPWSB9yuMJQ",
  "key24": "58xQ3ZhZSkiMWvZ7tafi3urK3Nn6tVFgUqzHavBzC4mCy3g3hLthbCxZifMCirVqy92LEE5c2T1hJDhnwyXckSNj",
  "key25": "4MCdZ9Cwexf7p6fQWyAZYTL1FUUJWum6DxYjmPRJSFFrPWwnWANjimL1gxv3ouZfXfhr64bNqf8R84E3i92EjdxG",
  "key26": "5PQD5jtND9mpS78xPUHbAGhYKcU75yMottb2xs4Nb36QK5hj8WjtLzm1XU3UF85VV5w2SzTzAnNxz3hx2gf89tHX",
  "key27": "4LJCBZzbbTBqW6nDErPmzfoApCDCLbGpBe9hSohUXGWFrq8YwqmHCuPuvKV5SejrAGGetHn35UCz2Fvoq8Z1xXur",
  "key28": "Gg7USpzPEgzBbkZfUxwcNMeqshfzge3YXq2r5doaVLYaBfPF8Mf41Be2f36trDKxZuLALSTpiGipizuLMKDYyuZ",
  "key29": "4hbNTfnVm8CYAMYngjWdXBmj8JtLikiDK6y3NJsTkUew9Xao2to8hwMcdZKGMvtNFehGFmbbnQRmU6UQRXRGfQVV",
  "key30": "4Ho3XBGe12ix6fMJoypBDsK3eoUXJ6CuTULTpgGYetViN2RmmM9Xb7UE3os2b8WY4WXUEE7BfzMVhFP989FBPxS5",
  "key31": "2h3jBLVEaRcw8rHZmy8nGxaJBbPRLLNLgYdyuThzbCTT4zxFdMsmm9Gf8qDcQo4BAKqy7cBgqouP6KmM3jUa1vnd",
  "key32": "5jcoxHoaaJ2vmH4nTJFqfEmwwh2SRf7NnizWipYFp8sugut3FfCKBuDgUH4qYYWZWyKsSyTSWEYMJw7GvNjpLR6K",
  "key33": "4nmHgTXKad54E8YdiVBLV7h3PpnZkjALu5AmFYM8TDsCGhA8jz1B1iUfmjFHYKgLuybLXvAcKEeTxyt5adGyUP2U",
  "key34": "5iEHgbL3tfuFFgc7fFzquciGKoa6VitrGe8xGf9LZrdaHD8AAgwYZX1kmQhep8RqCzSowrbdW9DprxJv4Jp8UhV9",
  "key35": "2FH8seMQqrZtXcm5jrKg1tU2wY54uxN5tGNQrX2Q8FpVB8DSsfYThPdfExXx3MXLsx4Lyod2dMFDFpbH76rviQke",
  "key36": "523QLKXckJXkVXHfoyQaiJSZM9qjtyBUDiN47LeYLMEQyAfQDAoP5aom1gzurmC2x1XT6PbN5X3U9ZvmEXGY8zZQ",
  "key37": "5ro57bkSxhHeu98vHm7cxAJeUTtkksR9Ann24XA2zyjG3j1whxap3BJUUuLeE4ULkG955SSwUQodCN3ugYxRBk9C",
  "key38": "5d3kMptC9YLYWERTqYUgt5eBWAPVWLWchnehS7wCY9NE7PdSM7Y1ve9nczqejeVweRz1XjfC2RTNMUdCSZYYNzSw",
  "key39": "5xqw4JeeuWem2S8s9chu4ERAJ4WXT5EvtfiUqvKy5xk1j8AZGaZfyk7CAkTcMjYytQbvrz3jnJBrjE5srSwePkDp",
  "key40": "5kqyTzUvdy95gtcX2FYhre88UwAzUhfL6WsCZFndj5pfxZekogT3uei8rfvM2FLruRapgBxpmGbZFA8xMrE6vAau",
  "key41": "4iYw1pYfrKSkSq24yiRcLjRv2pTwMi8v6p9F8ekY9D1AhH7vcAw5iJ4kDbExzxUYpAWNNrR4xVK1h115GYt9s8ib",
  "key42": "5yFeK2MqJe1go7ygZefMz2uaxNhMwiHDMjGgCfgoitXLwbH9kbpCPweqziru6uQjP126nALp2UpyXt6tPbjZktqF",
  "key43": "5a88h1tgArCjHr8mNRnTm6XTorCBoDaxhi2TdzARN2XLwHgimm3bZmNpTYz9Rqp5qoC4BJBWHZvuDEC2SuTWaZKu",
  "key44": "4by6iKk4fz3Sk5h8tCLUH1gTPNuASjA9pJ4ZrBYNGhdT5t54WWg9BpEwH4yr7NzaTXNTE7JJK69gLToydkgmg2Ww",
  "key45": "NWja8qAU5Xn6aZAUHniHme3NiTm4TrUentjeN6qKhLsNTnURn2V3TLnhQYB7xpjRtz86pxzscvd888Qd61gSL5w",
  "key46": "2od4XXAA1VU2nKD4CR1mjBTP3D6e66f62nYh7FiawCNMuYrC46TYyAnJNPaYN2bptird29APgHaKN3efntQxRtQU",
  "key47": "3BB2RQs7MqsuLftvvJctriELf9BvjvPVmXFX4VcEK1jT7FZby5yD5oXpWDpDDnGn4KK9xCHyhr2W1K516EXTgtpk",
  "key48": "NGBjAosRPkTZDniXtFrwRE4Dr17tXs4EHDq1jA7o3g2h4jFcj2ouYUuAw7LbPvWTdmECjSE43bJHcgkREFcdVhS",
  "key49": "2LPX8t6ARxueBKoa4vuJtG2ivApBAHhbpPRmBzGkMmfpVpmKpUobHiHHojKCkehd8xzT12fmMmcFb6v7NBSbg5AY"
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
