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
    "5cUG3PeC6oyQC95K6YQRZoK6o6vL5w74iyxmj9DXp748vvjFPjhXZbqGGWFAhKV1tv5G5MhF4pjjaQDHtQRoXFem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNkMwbgszghxvCrzJt45P5h3hyz2dgz4U9qPeFh64G1Wdu8EdMtyF6fBuYkStJyu6cHwbSGLnLitZLv4mNYHQwD",
  "key1": "361sFwSQzsjkmzowAQ6XyhHbom8tvnxvdTXSStcN3jRZq3DFQQbySDGMvSJ767MPjrJbLmyvHPY1mBcbC2oZo36r",
  "key2": "5a3qqiu56qDG67fNdUYSRc3hsoASdfktH313gJjqCZzYvcXTtNeDix4s9xYefFqY6Pp6SbbnBrbSHg5Nij1hwMdz",
  "key3": "uUEQJbyMQB3EnvBBKEXaeESuNiAPFXb7aGm1Pwqb1LV2prFoxHBrMv7tLpjBxJFPofkpxLJsp9Ap5ADcemFQZT9",
  "key4": "3yERz7uemh36K1zrQzFy6NckcsuK8jWiQiBpjzoE2V197FShsedB5uRANwuwPvf7rWTngTZQoV8q5cHf6fpHFSwK",
  "key5": "2jL72FZeTYVyhHvJn3kBiSFrwA7ZT2j4FRaqJtD8G2RL66T68i6H8Cua2rJE7Nh9ZqgeNdKiPmVubgH3Q8no3CBV",
  "key6": "5epVqyfjzRRQTdgjuRPR12QXW6nEynyd7HfUPDySfY5vW24fQsYv8QdDZ13pWxxQXzfSSwXmdoQHk2YEuSVZhUy5",
  "key7": "9Myqj5ADKsZSBUnvFhuVryhSnUKwpCd4TxJWk1iv5ngJAHsBMR5zzXbHEgeH6MgN7g9py7CiYPz6uYbbcWUe97X",
  "key8": "2qSGhYkhs4ZGPCkmM2sNM75YwKfkAj5XBZCPHB1y3HLZ44Xdmmtg5WPrk9Gn9tjnwbr9BdZkjM9JZmnvMoSg8xjA",
  "key9": "4rwBxbAQ84D4cPe65r2xthoXG6k2gjz2iBaUGSUTnJQK666BKsBUFytKh1EU8BTEQmLgHsh4cqwPHk5ArWJWNb5V",
  "key10": "2ShgXuCwE2jBxkKKkr5iBrGqTcU5kMXQhAsLq6UhV41BYTeMyVC8SfTFkRPjmBJYosE982uKTrYrP88J5S1NapeQ",
  "key11": "59shWa6RUbr8WVMt2oV4znozNHFJjJj3g2Z6s7gF5gcQn9M2E4wydX1s6LiUxmxCx1u22ovrD15VF4DHWsrCWZHz",
  "key12": "4vbHvftytZPSN8JXMGDeALtxd6D4EBwH6jfkfndyy2qZ2w29cQ3e24hBrwLY9wdah98cDVfeTP4uLjUaHE2dTPEw",
  "key13": "5Y82zcYFedhviLdA9jSBb43efNYwaADyZpJxKs89vVDSXJgmbcLe36Dk2eZmzDCNmaRyuGR27pKBSDn7cbAjL8wi",
  "key14": "2yxei5jejX8Vvov5JsNDzLQvGKByZA1Bdoi2KPrtzrHFYW5p61xHKgKGLtBmigo68AtUZkkigowpsmmMLDEV8G7d",
  "key15": "5ChdQc8djA7134E3NU36YWjjJPaeVgPSAYnfVpct17eQL8Btb7uwsjcdLJqohu5UEhr7nESHgGxfafTxjfve3n7w",
  "key16": "4k2NJnDRXkSeSv9LcumXZ8LDgiwjpAjArrYtchMVR8y4bZ8HrDjVm6p8LqV9zgjaTFQ65LLuQeFHSEG27qjaCWRb",
  "key17": "CHHcwYwVE9FqMcS5dT35nciN4Sb8KZCYhSD1piFVSdQayd5W4FY3mchsSoEErYb6h4xg1MAnGdUnxVTuey6kX8J",
  "key18": "4kzCb4dcHWsjBQS8cJVF1qQbqTJ4cfjes9kss3wDXoW5u8CdaCCLZH1CN5SnMWawTG1y9XkG8NAWtky22zQRuUMP",
  "key19": "3X8nsNm4DEMdUyXhL4nY55chq3BWDPuvp3En74aRRPJL1m4izL3afhXnUowjRMtMXvtPDfFCjkQ3GiAMz6chg37x",
  "key20": "2EyPP3oQ3acMPupR9toMqySv9iPmguSKPfZNBJaAKpa4PUfsWXm3i4yCmZikagw9SMYuGFcKifiHurw7Dg8YagJ5",
  "key21": "5Mk8Z6ns5uxRFdSBuvKacKKuwPSLpuVStvoJVZjkotA8Y46zJFiBhNfqwDmkhAQN9zmY6h3skfU2xyjcS4yFdQEG",
  "key22": "3Yp7QFaTFvFYbt2SAPMGFvULFXPPVvBXPZsPcoLv9QLxjorAPXuNDiipVpLtN6vUAnZmF5Mx6wq4Vcfj5qDXvhT9",
  "key23": "7oknGTRXZC3To5kYJix7KCzXDUZyBd4aHdWviyawRL8duBoZN89nhNZqkVfPo9NYxfZgRbWneKmwXxocggjL6CV",
  "key24": "zXkkXJL5dJe5WMR9RJf6LuVtKwmPucyJpkkekTQBLEPgWGNEmtVJ3AwEDGBnuoh4R1oZKNtZhivrL2kSF6ueEjc",
  "key25": "dHHP6ikDbchaB2C8RQQEYFBYPv3F6RxT7yRzVNfT6bFwyVbHBbd4xZ2uevV9dwR2yZeZ5f7LCUCtVm2nQCdLgmC",
  "key26": "2WyRau34tC5GWuN2E76HSAXYTeDcjJQSV1LPNXPwc4Xw4hVZD59iMFat9uYrpWA1p4SspVzfMpgZ72YG4SvsgVGM",
  "key27": "WBH2ah2Kh6sXZ3EQqdpL3Exoxk3LtKDDi7CGHjM5z5XwDTyQYoanvUet4WZqD4HW4YeuJcE5S9fPtxPgDTCi4ZX",
  "key28": "2oMkVJaCz1qXsjHBLy5379qHuLdcBucNt7mq1aasbqER4Fi3NNDndfBJDpNyCNi5K3jZzH9yuLccj1fnmg6Crvg9",
  "key29": "51Xu7xgjubaqU8oejDZrtskCN5qHZbdhCMsa7nAtEsnvuhQLa1ctL8TdoTo5ZNHjihzCRAGAPeKEacTtaJ795s7d",
  "key30": "55xGv6pVGFC3U83c3RhCU7tpqRrwAeswusqjp4W1gKJJFf64Ks749sZbjK2aCM8KPBBPmQDsZNYQcs8R3DpGotiH",
  "key31": "41BtGJHuYM7ZBSn1De2cKH7BrxUGMtDDMaCFRqYSAyJFwLhoEXx2s6q9xzQgaengG3NipZMYAMPff8D12396H6Kh",
  "key32": "U2udfgzE8Lwzod2AuwK2FYBvKHvPQgGnd1eGHKt8i9vub57nDruNQQ11QdZaSTP553qpHGaergqVvidJX4KQjxp",
  "key33": "227Rq8xBnjzxBxrXz32X8soSCUapZcMWfPK5jikcmrajA4TCGjvWYF4u68ogcfFrU8Deuwt3VG3kxTDLH56juH8r",
  "key34": "3HSZL6K4W2q374AkTGodhxoo1ut7arDNugn8JXTBFkXTmvARaDwgWWNWbzxCd92zv6EqtMyDgJ9GgaE1C4pc6db",
  "key35": "2Bmq3ec8KcEbxZ8RKn9prDjov12vfYGEQQtGEDPtRWWdcWT3DsqDoxpnJxvcYSbMzjaSkPD2kcVjennPyVd1XM7d",
  "key36": "ZkWpBaeAf5s3g4B1gJjnodfQZe5o3GeWUpjt1FvRpSSzzKF3ivn8z5hjbMq7KzZPPEvXRHxKgHFncF2B2Um6K64",
  "key37": "2zK6D4zwd8Fe1KjF8xFPdpCADj16V4BQUq56TN7hfNyxnfhNPoCjbGGVhYrjvcTuCSEMK9bHHEciNFrvsW3te7Wj",
  "key38": "49vXqecF3Aau7LnUdHVmhEfj5sZ3dufoezdBwTNbvnT6giArFJPWivLkzCvnXSc5XsH8fnsXCYE7KedJFb7KicTU",
  "key39": "5c7EdJPimVGZUv4oaTUJVopvLG6frUy16B5MLdknhJwTGxuQ8mRfcH4jSQFjg5RZuh4QNSfUmvz37D4xpVhTRDuh",
  "key40": "5vrhde7voeK8xQoFbj78jUgZDaqhv3euaUgbwgNVLKkhrdN3dsKoVSt1joPb9bNhF9D1bhrd9DkkrfuM6gHX2YTw",
  "key41": "2rZa1AdxdsdCHkDqroHUTxWbbR4YX2YyrcKHwBuv97G9pAsPQu6JAuVnCt6hgEVkMFTuVLpFfAiubczBSz1xVs7U",
  "key42": "24m9CEHVeo3w3i5CaKZHQ96KPBVGwg3xyb8pac37s14srdv8oysEJnTprF7znakBH4e7rynfWioiRTekejyvSrKo",
  "key43": "5xZsoKrRDaJuP7oyDLnBFDsESSYZz73FkWFnAPiPdMq6XbtJXtjQcMyfbrruwnZEoVUS8xsTr1j7eXfHLiE2jTxF",
  "key44": "2zQUA6nqxzFtgFMRQ7gPrJbGTfV8Jm7TqCW36YZ9qsXcsfNuEhtonsVVYDqcJJSuJay7xBbGEJxXNeKBXBFGWig9"
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
