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
    "4cYj3x6QcSr9oxTWSXTjRzyJcw2xvMfchSZ1YrFGFePSX6q2VJhovRsyJbjSwVADBPXYvtHUTANdSiLjgxsJCh7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rm2fi92TBaPcowd2pcX2XRYMNTCdbyvMKAud7pEAL7CjcdnLVq1JW7hXb98bDT8LrACPh2HWp9n4a5HRLMeXED4",
  "key1": "23boX1AHYDKZsKWgRPtWoWPxHbNeckLfZnusDtTyXVAgzeaE6UYV5Gt5fpsq5ohPhnHZJw5n6RFVxgrEu1RyyHPj",
  "key2": "4WGUt3udxmEnW2cDfATJGwqmc9L1JwC9YnTi51RX3bpZy6EBETsk8waE5UKCDVS4jprFxuzpQEsyHvzCmrYb4mda",
  "key3": "5cnCrbh3XxfeQaaRyKLpnQo9TQ7XPmrBL5ri5w17iM3qJZ7aEm2Qw1X3shQ3sh25GNSdnFLPh8WeQCFGZ5nyVGEH",
  "key4": "2pR4SVmfBUqxv6tRYbkPB9P1aETmjxSGPtqqeCPyHAdZ1cdiQkRjEuHhAP2fnGdDZCgde1qRc35UwdHvwQDasVuc",
  "key5": "3u6vRqAyRv13WcTcZKZaqvNLoP38XrXQ55TGrBhxvL19biLYwGkaXdXsbPeVpv1f3sf5CNvon8b4Wx4DkJ5wSBSb",
  "key6": "4gBWL5FxRH62i5oRKJy2YuxgSRZp6MwyBCAWAZW7Aco9jFQ4eKJVsrSWGWrMV14PgBAt6SE124X4yfF2p7BeGN11",
  "key7": "2FBRVdmJjcfRa1bJPr7MFYoqFkqdQQ5knpscoCuQcHvTM6TYnqwnyM2auJG8aYZGd6oX3BzGjnZm914KMG6iqsE1",
  "key8": "dVKirxeQgzALTfC1EenAqBW7M6sZ8pbrTWWgd595Ftzz62T5WoyzSwTr6T2tpZszq3x9pza3WqXDqcWZZegnaqE",
  "key9": "5zjgQym6v4c3rRCctqHGHrL9U7VUM9KPkWXzd2i5YN9SXixyZjmTz89wJsfGMRwHNxx1ksJfUAmDansxV9X1YbU",
  "key10": "5d7rNfWjssktbZFUYX7ufGarHNqtukgoHatFcFMnZgWtqga7PgUhv9UUxHuVy9JSjfDMKbACRdBg5gsyS1vArdyS",
  "key11": "61F1HR4eZMmmp2oLorshAKSZKpAwkhmWA6f9ay9LXXFDjKkXQP3vJbdEuWSJCMzEU8GWAFxq2LgZPiCGaM65d81v",
  "key12": "2TnmTLabtZuhJ1ZWRK8vPsYPpbPAjwzqBhZBKjBUCGRTsbhvSVqTxN7sriLCiqcX8DJh8VXmVbvNeYDUU95xnaMd",
  "key13": "5H8LXAetvyGeDCyt5UfZfxwPwxRh3xm6x7Y44uiCv2H5tGpvcQAvXZG9VjdnPnjED5tNGGbQx35y7kdWDXEs4CQB",
  "key14": "3Vnb2dnc1aVUnTecuPuMXSD9F5penXfmJ1obwMM7zfzrN8PMjV8Vmaa9uENBcRByuvNkwjCV5EXsScCix86RKvnL",
  "key15": "Y9zoBty8uFBWpeZ3YMNg2JACmeY8k4f9wXJttox4ejj1UDp4sTy5xTLk9GnAhtGHQZQmXCZqtQysKFVRRn4doVY",
  "key16": "65uq2FMAJK2DoHUwrmsYhvcy2RMRWUmEqbmqU8UukoUQPsmiyrV1yRBKa4JsChE4AhVK3P8VHsEef2QMZ9myk2rk",
  "key17": "5QrxC2MeqBvJnskAgu8cuoqAXTePvNgPiDxECVyJMbnN6P2G7sszSWpCCFAK3sCgzvgubFvvh44tR7ughZoc2aU9",
  "key18": "5j68VFgEnAJC75XUneeZPB8tD5TGdegEraFLfic8a2rN9jGWfq6zWhEmrP9xAkCCET4SPhQppTVV78yf7QsZf2Xa",
  "key19": "2zqT9KvZ3HDkmQ5jHN43wiem32ytdiAkbHFcTC9eMp75dvYuRggL5VDyuPWnmCucXmZ3KzBV6RaxR4dv47GgDYkL",
  "key20": "szwPzBANaBEhWVWH934EL6K1MyNMJQjr1S6VRbja9RLuHY41qvnKwnNJcn4WZ3b7x5DkKjWP5UhGUxRUyR9KiEc",
  "key21": "EqXyPN7iK37RJhGsqpF4FkW47mymWrrN7JqEkyGuYFGVgi4gig98sjJFLoYcsicqPyE99XRY5kby57hLpq3T1U8",
  "key22": "cfm3chmdemhjABd9YtCp6WXbHCE8zeh6Dgaguum3EZLpssG8jBhSZfh82NfvegcCQdqzoPVWRHWnnr3vY5Vdhhp",
  "key23": "5EUCBY4TL3c6F1ojQt7X6G6NPwKeMFXj1Qp8ga939VP3YAqGWYYFQiMs5c2aEM2y8Q6gwVosWbTrT66ihv2skYkM",
  "key24": "2LjJWhkBAQ7TpLCVa9vjbu7Usymq4wmnhJyycJGHJoN1stZc6KiFZwvVB9DahPTr8GhmFtPLrQtQk8yTAhbc2rjX",
  "key25": "4AwBoXpTQnKddxe69kYHsTgnAUbAB9Rhg8BnEAizK9JqNQRQDzcMqWE4Ut5oUgqeuMMeEPj9ZhBtka3z38JA8Yr3",
  "key26": "4cRQWc4aRyyoHkDbifBDh6ukoyR9eRZAdK7sDNZ7v4ey5zaJAhjZCBdWbnWrQ7MMrja7tLDaqFYsDP7nLSwRQpgq",
  "key27": "5gDunWhxPxXaLP6Bg3fCo5nuFHiWAxogeWKTAXe6FJRjh3vd7mniP5dFj6DMy5VUktA9B9xJmaE8gPmscHAJpP6",
  "key28": "3dhhpQe8Ppahw3TQ9hVc2pmXeTDrPJy7G2YUccvJewpYzZVSwX5o2bt26zyguTxonsGTSFuE8BUnEsx8nL3rZ8iH",
  "key29": "5WtxmvsQNQeG5bqGrqthtRd21wt6raEeWUccTcuZpv2UiE4zWTtdn9P3jp7GmZr4ZLkQp4ZNP2kK1Vykirxxv3mz",
  "key30": "41oP9q93yYfhb4eMbV16Ksn9u7KeCRqCcMBbHF5iLXZQQedEQfWrJUbiAjZ3kYBJpHcpnSfX3ds5znviNL816EMn",
  "key31": "2YSxZ2TFZs1grjYTsxKAbuLLcSJTH1ivsRtzmcTmwU3F9MGMb7hLMc6F35GrJAzf5M63GHoTKQtywSMam84ASpCp",
  "key32": "5jACqXmaA2cSH7mC4rq8LcFCnMuLGSUHXN1JsZm6ofQSaKEKySYaMe8qV8gWtT4xD6xrEMWTfisyhrG766w7vBkH",
  "key33": "4uATvZ1kuHu51cTbFEfS6U5tzTrxAMxnHnxWLoYoDmLzZD2oq63MMMKDxaWbHkVK6fHb6ZomeEnqxQCcvpLkYyYU"
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
