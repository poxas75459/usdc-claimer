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
    "4KrieZ3BRgHEVT2sA7H8BqN1gTaQyfQif3M5oZRYc5xkB5aEcAk9Te8yj4qJPKmTTa95jjzTP3guUCpmzAxo1ykS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GakRBHyEWdwj1JMCG9BCm8YhxnJmhA1Ycm94oZXEjKh8Kb3E3hmPpN1Fv1feNtLD3mcJFGozDfEQoMfKkf2yLUb",
  "key1": "42P92gqaknVkFfKcvmptqXVcddyeaHftwFTsPkYdhKp8mDjQMsYhpeFei9xxWmoDE8LVDHnMsiEBYibRRxuhCn85",
  "key2": "3XqFGctmnjuUbhDMyV8bNy15S5MhhFxpqiLZJYyLxEreUNMmaB9xtHPHAARCDpYEbUPdy3nTneHcZzZiedYi9fbF",
  "key3": "C9UY3W3Kio7pkkfYZM9EziknuRqX1969TgBtRxTuhGd7FvDFBbcsh4H1f77hwsVBjpeTwxCUECvJcy9UpFPQhQc",
  "key4": "K6NW91F96VXFqvYBJ9HzXWT3dTzyyBcHTyd7FPWRYALJCTPhqwpCeEcGFK2A6HXzYzUnG69CDgfh3gf9rYMFrPb",
  "key5": "LX6u3hZbGCHU4dTxzW9uNoFrg3GSGiosJ68fimCLcoKK1NjLExcCcU9CLBMhHW3uzs1MiXe9CQYygb6D85y1LpZ",
  "key6": "3UAgjBaTqu1qQoLrpXRKBLj2BVwSg3YvbxyXtuzYhvPinssr66ikjC39tWDM2Yp2AKNMHqWgg6PFtvX7uYKKgMH7",
  "key7": "4nvvsJfiCZtoFdfq7cLHZAVnSmKbesMyqSFqJjydu6BTSt6L7PrEKLdaB6YwSJZx2mLX2YxpkZF3KtKtSmVuMq8d",
  "key8": "3K9WULm4FtDcNNu3p1CqGCcZq2f4QjYgEcSAzu2a3c8YK2VkMwwpcFhQEajgwUDYwFYftQFn5AxDtpWvTAN3VXWC",
  "key9": "5VqsWTCYCRYc526REaeghHFnC39LmoSWdaZAojXjki3uWp6HrdyrxK6yeuiVdpMvDb2BcxQE8vmCg9XK4sYtSKQq",
  "key10": "3qEYUHFQvXkFcJi94NoHkLVQ8HUToC7qyBvcRhqsibYU1ctJhQGvyEdFUvP1tMTpUcom27569jjaW4srrawU3rEg",
  "key11": "F7xws2wE3kenAxQ3gpoFb18gzVDYs4ABPmhW37cY9oc1yvePmdiP9EPqMD6DkpVyMG8Q3MmzkkjxmbC6kcYoEcN",
  "key12": "4RfvGcSV2oZXaCMBHKfnKf1k2feaDqgMzM6sR71E7SMF2hdub79RtfMA5Z4N6ipokhyvL8ZRnZRXXUoMyNU9BeLy",
  "key13": "5cNCPjpdhvevUZQFECyvG4HC6gdhk1qCgyG9tCEGP3eaZZpkTWXuUd6ohtVqhdCvQDn6hKuibo1VpjuxyRYpdhgL",
  "key14": "2UtPkD78bmzrznu63QCCrf7S8twsq928JvD1Anj496hbCxyKbFsDAo2321g87vDwt8nKguDXjfvEzjRCNTX1hgQV",
  "key15": "47TZzv7bpdT7uG7Pi2LoxqGcXf5EPLgAZCgpfzSxFgFbkGb5ctn9ncHk48ZwdY2QhWcGLAodVc4dguNr6ydj9URD",
  "key16": "WMKuaXHQ2NSfV2vFuHSMushe7f9TvgqAot4PJLAQWjEsYbaEv5z3pY2MUToWC34W8fHJfss2tATFF2NPFGahrge",
  "key17": "4meRKfQffD4EoWFJF9Vxb53ik5Y7co2RrxuuQfTD6TW4d1JioGp4YvNi5TSmsM8w1VPcpcQfMX6Uc2BrnK7w7kQu",
  "key18": "3kkSWtHFBYwM8UJKyTpR83r5hD3T47xgUMRa7UmejopgeBveyhhsS57nhMGpCiPt1x8HS4tJ68fuAPQcq6yrGdha",
  "key19": "34HHezgiPLTUQ9uB8VTrt8p7CV6zeB5LSYT9BEViJrr5cK2UXbpKipvYXbd8tFijHVxqtnn6yWPtx8gHaESS1Ef1",
  "key20": "5HqKoLk8ZF5p2zh6BEg6Ws1gmVvG7KWwKad3cb6Kp58Bi5fkv4TVrLkwbtiCyEtbhKSAz1EHS6Py16CWhBQja2X9",
  "key21": "4oyUUCYviycPBR4r5MAKHUYG2KPCPfU4Hx62qa2fQNbEzpngdqpGjcGLsVhz82DWDAhfm6JwHs9WEVyXGVxyoKE5",
  "key22": "4fam1YP4mmKyWoVFJCgnVDPVJeWXvdp2Reee1mRnEvQ6C4K4ngnfBfgAiMkjujGswTpkWumVqBnBmwyJFRmhju8z",
  "key23": "67YodfKq6wCpPPNC7MumT9NyXz7KTrRD759otJjzUSbhALwjrx8JFwakbUZHRW4XJ67ZdfCVoLZcj7GX8Pbsuob3",
  "key24": "YjAneg71mMJAHF7pyBurf33dUKWmKP4fKpfAFiZi76ykh7L2KtQpj9eUXNDbErLfaDC36QAW17FYA5TF472Ua69",
  "key25": "56Q26Npmeucd2PG3cjmqKpgLSD2CAhKnxiHAB1tqKgsFRoqzabiWEQLQ7YpHyZZUYqc4Zad12bKA76vAVkym2k3E",
  "key26": "PmCMzEg1NoRFucgAk8kzjF1fAqZacHyqCPduZ8xmiKHJbW88r6xexH4X6W6T8LnDmtHrjHJ7BDuk5PCayJwtSqb",
  "key27": "4NUXW1EGbJtJkYkQv6LA4z5vP1fS1HZhnaM1LcXh1Df7Yr3gBC7CktBKUJPwDWPbKtVEqsRNFGLRNy6XQmeuW8S8",
  "key28": "5Vk6gDFzRg6jddGdbM3g1YchMrkrseV1zbjgt372WdK7mddskVrFeRyFK9JvudvwLfYcy2ijWvxKKHcMs6nfCEir",
  "key29": "2Ds4bju4wZKSaP1N83BWZgQ4R8TmcfJCSETQmpsqXyz1txJhuezLiDnerUXvgkvi2TQRVWXNPSqmGXNBp7GbM2au",
  "key30": "2XcLRu8wad3FSRHJSj3WFTJD6rVZPgcf77NBTX13TxsTJfhKWcZSfx2x3vHdG1zYXdQxFwLTCFizW2KSqXRmsfai",
  "key31": "3VGNAWZZg8xUbWsJUCz95HYJFX2uM3P5ptkUPKLbpHpz2ZCw8vQPQyb7pR6qPGd6UN6KXJxB5yRBQuywtAidr3KV",
  "key32": "n6kGB4CLWGjWLX4NzcxBL68R2TGqMW4YNzieeXxtm8ocwmxGuq9CjEfE38BtfSRiuEE7e1uaoP4Tnd7hYoe1S9v",
  "key33": "4PAis9oKk9cRUaXZPXgDPFr62H7h3A22F2XN2qT4YWhG6WtqdyA6m4yhCSQgDFZg3ttyrEftUs1gQUs1P6khqveb",
  "key34": "4iYttRqDxdso8TQpGYYYk9oixGzX15musa1WEkanmeScvSLyJGAo2QJRbKG5y1ojV2VzJmDJP7sSE3VLGpS16pgq",
  "key35": "3jE3tsXRn9WWixLG8ND9vr7cjroEncyV6iEYURa7xtSX91hT3HU6JbUv263E82wmMaoNuGTWJpPGHCBa8yxwf8hu",
  "key36": "4LDuCLP4njvFUrTQx1EMFVcWm2GHfsQvxFtDpmVJtEewKz4LXhdUTr5LPaMmDcFv9bB3ZvmUMzVvFgymB8ce4vzw"
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
