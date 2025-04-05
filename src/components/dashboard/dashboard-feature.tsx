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
    "AveyEdNU78VF9imkwcrLicivTRKcmEAUDvSMH2wbmU5qhfYhGRnpp8jc63dpCUf6sHzDWrix7XjqTXMoPREMvrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whV47qnvgUG2jiKVUMkQV8P6HNP8ooXF8Pbe8PjMjZFtY7CumjA9gsVjjhi5tov5BycfCi9sLvG8nD8mktub7NW",
  "key1": "355KiEyYU27FUhdMTxb6yYnK4SuCwSfGJtYMkdt3J9EzE3nbmh2X2fKVyyyWrdikNeUUwYuHmAiuxAZNmzMyAEgt",
  "key2": "4VTg7tKWPh2q3bdPvFesp3NQtPJBCekizJ9Wg3wCaUKty2aiW8bdeXsZauXHbY9P2eAzZCYUL3QXQXxDmePREPD1",
  "key3": "4Sx8rQW7cgEJnPnaCF4a67UZg62QRNHytzGL83i1EbsChRjMYyfWGDe9G2t8gaiCezF4B4yQg7ezy9e2H1etgXB8",
  "key4": "2pfcHtdnAF6gwdfjdzj6NuaN7XXHGej7bEgPUJBbo5er7591cJ315uf52fmqQKUrbPgzm7NdZLypLUPVmNxx3tiA",
  "key5": "6bsyKdUenEMaLQ64veBk7feXAmXo6bc7u3ciUUZPCXZrcWmaj4jPJQcaLUyYG26LE7B2w5Zit5wdonN9zk8L1V2",
  "key6": "5v8s5w23HALMasJSdanZ6CkwMVbca9dRW3GbrzkeuS33Vma4ujZBLvXcQytVSVNshufF1PMJA9WkbHUey93dxTDz",
  "key7": "4gRo99HLHoNxMpwnmi8gAsVDgn11bzMBQuS4xKbtt2UYsSQzW3fdSZArwh5XJ21nhEYGwP6QaitgNzoChsqQsVo",
  "key8": "3j4rmWKSYqUjdiEdWRbomJ97L2WLRXGCkeZeHggYLh3Ueddfyd2HM5hNodNNja5pPCu7jNa4WETaBFEChDv9gUmx",
  "key9": "3yooXdW9a2o8qo93hoMGKDYGh8m4FJBR8YguniSei7XVFo5f28J91fwzzTiayQCjyLAcds4WoTkqCEjznYYGJH7R",
  "key10": "3meZCS8L7YTKi9MnFAWkSwv9UFNaNGjyCvWDMaDCTHhYG7sHg9ti8YYqSHMHxSNoBtLnzZ8cgD5weGd3d7pUip4v",
  "key11": "258poRXySjr3h8nmzDkCU5LqmrEZNA3Qukm88fTJwYYvkg8JNG3sQLYu3aTF5RWNR6GjiwAgTG8RiSUn6cS6JDt3",
  "key12": "xFVcLtUaWPqWRLAj2TkysFVJwrNWXgvHCdoiKuEskD7Bcrx3LUgnGSyeNRTtPRGMZdv1GsAURCb6RsYGvis34E8",
  "key13": "5C2LqSB3jPYHq1fhGY1nfVyrNEypjqbYthX7vkJDFJbUuHHNa9Gz4YeLi5HKDHT94a8dD69MEKf1rovYocMPmp1T",
  "key14": "55xmcopgKqfsfLnR3QWiR7Bjqxq21LwohKJCdrdKk8isZvmQzBLgRCGpFKGM5eCTGbtw5CjuRPPDRP6Si6Z4PX6R",
  "key15": "2n4sPy6AR5QZ1Rz7jfaXEfj3uTKhuc31JHuo8s9L4GB317GjunoLbvwdzJrzKzTQSpH9QKdKf8SN7TQ24PaCPMFw",
  "key16": "4bm1ycbr4WbJQJqG42JJ4GqatNmyjCMfWxhYfSSeWnz8ZBx3JmmTCcqAxWLcCdviHxvJQJUc93FNZWqyVvgo6zNs",
  "key17": "3tdJjKXACEK5PK3oZKt52qTfRFC3aejnPG8bU3TvBNc37sMxVes9vJcCgLHEoDxv5FrAWD9apHQKRJeEMUJonb9s",
  "key18": "5Pov9EmFDWywccsZoodKUKtPy24ntk1j5ZbkkKjUEsq21wfMHe5QUWByioS3MLnwRfmr3Juo8nL21cfB6UkuXQ7K",
  "key19": "3GtRNEcW6WrqYyAHZHwwySbeqtr9XMuUDBS4rSpFRvGg4fH7vKBCTbvzuAVTwFr7Ec2SPgjZzdvZYVu9JsgqdZbb",
  "key20": "3MVrmEoNuiDPsh8G4n4ryTN8WrVAmxZYgLmDkrcFS5YJNnAHe8TyUrGVTPgXSajuUPDnToek4KwgXsNW6vE3c143",
  "key21": "5Cvo7mteksHoJZ77eVk5785tHQdsxR9uUAiZvEnLQD5ezwMHKupQgCpeEwVxXegsNieshBzuU9U3HsncJxcWvk7P",
  "key22": "4CYcUKa3CvEJfmmHLJ393R4jHB8uSCFR6uAQ3TXwHm6T2DXvVf98Xe4U1okPuThcU6Aw9yDQBKp5pwFFCWAfFFk3",
  "key23": "4uekoegGGF6UXCiwCa6MBDodg3ZMXFNB6xGu3x1gQU1P69WmYKeo4rTo3T4SsVRdfsTyRdinAscMjfTkdeAL8wrF",
  "key24": "5QjUsMGGopGKjxTg9Fs2mucwBifUEGKAXunWBBAJAXcjXcFXJZV6f4vdzLfJdqRQBM7ZoH4Gg7immBZ5kJCU7VwH",
  "key25": "3b4YK1L42yCWMPPGN3qjivZPxV26o24QG9nmBUdUv7Z1FB17RxoytDwDthw3YNNvcQC5sS18vnBX3oWfvtBz6utp",
  "key26": "3v6GQNrXJmB7ysiFtyz3yQrcGrzAP45ZrxuQVD6RkibPFgmcu2yBdbXMhLCoxjNxYXaoWWR33bp1Dt2sLmbrW8cR",
  "key27": "3LicSXBqkdK6aqdah3AJGooX56KCLvi11PXbisXuxbY4S6qtkmwhWf6eBkwj6R4tRrCJVwEVQYQfpksEwZTq8xp8",
  "key28": "443FN2R7bWzQtZHuD7JXgiH3bXxnaNoCXwqSrvW8Q3sQoQU2UcDH7LppmM58LzZx4p6xJGni6FG64tdbL8L2cV57",
  "key29": "3KBPquJbFrwcLvk2hdyVdyoxo9jad6iZ3U2esGwYFb3emukP3CdVZa5vrYWdZ8mbL2kaESfcsXrMfi6aYRRU4yZZ",
  "key30": "5SQJUznfRFnepTRbCmifG4orbND9WjSpCueBXoi3MGMPFgrvVfUsKHdEvwdf7dieghYToKo62xshA1eL3C3wXKtv",
  "key31": "5fM2Fh1ZmX7aSBaxFTSswfKWFphAXJGUwYN8dPYXSkjNDr4wU6xhGN9Mo7k6gVCo2QNCHiGHnU8QyXU6xJR1YwTK",
  "key32": "2xbre7px7QMRR8gPT1hNvWBh5w3fDz4ejzRtwW2LsNhumBDA7G4jy8ybuGnvJQbTzNnd6C1UEQqGYCSKQTa6CKU5",
  "key33": "4z3gzzEcPxwjzPoxkQAYXvqHWNpWsuMHc42ofrvkj54V8RW1zDcb9FHQMCQTdgkFc2TQC9uXFSjZ5uL6WRqXf6d8",
  "key34": "26DgMguQiMTnQwqwrBAu1W99ChAbAtrJGiWFxrxiLPqVYzCyESViNUEsgc22RohEE6fGb1cTaumxQKhtfCMdk1JJ",
  "key35": "DcW2n8fQHpqFPhZB4bWGzXoqDWSPGk92CYFEmQ6uLF1EUeV1KdoT9a5TwW9Lij7y9NHo5AshMqV9erNEn7ua9KG",
  "key36": "5i6aChzfAFPULfJ6BHDcyhaWFKEpEFfamNsij7uo9qmpuFsFeHrQAsPW1jCgsXp42fwehwzsHnXSjmn3BvVUQuzf",
  "key37": "3mKaAcSkEyWUmzMD7RZQHuS8oeCBbMJYGV5i7B2Uz2S2TiHY8rHyPVrL5oB2EiEbDgmL4X1mwzuPMJ5ap3NHtSH",
  "key38": "5DiT5XzTqdYcqWVc8LZzwW9WzKYQAuZSxMv4R1hFND621dUVPeqNzQdmreEsqkYc9SewkrzHpmJyhbbydRK8RrUC",
  "key39": "5iHMpFWxW1v4yTr4FD8kFMH8p3XmqXPvk212ti5h6sAPRm7Sxh1afHrELRsbheUkGTXdABZitgPh818Yti5gkXsz",
  "key40": "39b2m2Voy3kBpwjS252pE8yEvec1zWNSXirBA1Ffcpq5jFWwjHbVmQ4nNFL8Atpg1ejSsgfRp8AaB95BnEWQMJbi"
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
