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
    "ocmRhqF9omG8vPcAkwZUmfi5WrGPMXX4yymyAKi2RR6zTaYUA12G9dvi9SAdmMtYJVc1HHYu9KdNHiaCG1zmThS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9bP3rC467UZVKyPtSD9yhjvPxvYnuGgeT47WL28mDQKixsLoEEDY48JCdp4L1G5hmegk2oa1Vd3rEgTnUbaSk6",
  "key1": "DWJJQtMJhqFAHVGxs5tUh6KRkQbYpwn3oZsBK6TDu3kb55JHhSuWmUGzHprDqQkrN7U9MF4c3hxu2BR4m5gPDYJ",
  "key2": "3Qbtu4XGNE5uBT61V6HnRzv7JtvxRoSJ4GmJYPfbs55u2dDmVKiLD8bj6gZLCizXTsrBq7fKLoXnkbg6ZUYudc7R",
  "key3": "4kqH2zTNsRCTuKkesDhEp3Paz6SEUK1KP9FbScqVr2b3Gj1HJurnKKhLafXzjjASPNmsvLeAgTWZcGfKS8fLjATE",
  "key4": "47X1oQCpMbt38zNHfKMDmC358baeuQKi49jwziDrtqkQBTf5au8FwWaJZ9tDrrwHqCKj5yBJsgiuBNEmFoxHH9mo",
  "key5": "2AMTq7vQ86Kup5vjuLpn6Yhi6RTfdJd5Eb8kjNK919ZsBRCGbhjnjEx5QNBgcaQjGrTqihFT1nQtb3QnM8E4a1Bn",
  "key6": "CM6t1w6qxma5inn24p4g9981HZVeFcg3HTr1SbFqxHH6a2LfFytBbppoENJ9v39dum4Vx2wTASZsQc5AQ5mGUvB",
  "key7": "4eAadfLwKuyJ2umC1zSrcYntpVpkJGVTHUt3e7vE2DuCLVMAcPEdhvHLd7gphEwn1ezusWPR9Msy8N2iQ4XzVTdV",
  "key8": "5YNbW4VzstmsqdJsCdbdwUqywUXeok1fXXgdTSHKvNHZjBp2vjUkrsRnBxC7aD5XK3xGtBFJihvXpjTgaZo8qw1S",
  "key9": "2C8bzFV92be21zBqpGtg2QVQfpRkMDrkPD3oF6kPmF7ddPK6NkVDdz45cqjpsWjj6rnCBjhDz19WcVmWWJtChTp9",
  "key10": "3rfSRwx1BfxHKPSzkY3pxHMTbt9CeMm7b8hzgFCLkaqg24riUxSwAVUdPcAwq3po5nFtfKwvRiexJKvCo9kJyEQj",
  "key11": "7gZLkQJrAW4GrJGfK5PLsCPi6bE93CGUjqbAirm5SsTT6PzfLn8if3jDoBDRJYGDbjjCg9pdtgRst9FBRPUUW3E",
  "key12": "3dRWtkakbxokRo1J2BAKMV4gJtqgn7V3ZnvFi3uMs1Q86L7etBmdrHdeDMZ7YHTPMee1hqhrM1xp3stieLVr1v6R",
  "key13": "3TuB8HbzmQcTyfVqVfa6GgeUUAcv2m3QrwE7oc2wiQC1xwuqnnwi2JnKx2otHRborpEP1qkioNjiPx3JDGQ2fLo3",
  "key14": "2W6RaYoD8K3VPXfVXz3x365E88KGfBnZGmVcN4aQsYcsRaAP35SzXyeCEQwGVcfU5ZoSmhSDctqp4uj2cfpaccmV",
  "key15": "3MBjXGNSGgsVqRLzmC9C6UnyZbzSFUEeDrqgC5C6BvvbbKGsBPrBGeWR9uqnrWLmWHnFPBfTfqoXKaK5y5UxH1uf",
  "key16": "5qtGxf8GjNCEuDhiqZyaNao5moQjkHnR3NgYZK1mechnf8HWJswT47Y6LkSJ9GZm61UDRTSeRiJMcEYbTjpJsfLF",
  "key17": "5AGgSFZGN8bYbmUioHGjChrh86J5WiLh2DLGgmuxT3Qm1vnD1uvgguW7DQN4VPVTYNeyXng64ZDUMCzRAek2jPMz",
  "key18": "59h5q74ND4J73F9tTSW9Cg5ZsWH39BKRFM4EwXZRjfGZRWghpq8FUSxhXt3nZ9PoebabNKxNBmqfj2oKDNTBA7Qm",
  "key19": "5PjhvRqDK5Ni5VmYAn6LmCUKYjXaizKRm6bcCanmQFbsffHmXsQvUXHc1xYP7UjuS7ZPxerY929yubK5ew8D1SyN",
  "key20": "4LC27R4qrEZWXMdvX2SttumPi91F7K2huv6iUrAKYibQ2LNQmk8UthkX2eNwexAT46aVKfJcmi5g2vkY1MS3uFXh",
  "key21": "2c59qumLFHkSbYR6HQYGMoT1i1LyNT8YPuLQyLjqAJH9qPVMKBzZevTgC619g6n7tvW9h3HtR7FHhbgZVaW3kFfJ",
  "key22": "jyZhQRT4D8qEQ5qB4TXxT7Qg38EnXxVvAAuEMz1e38yiZGCPBNw54rh5ev9679DQ2pcjHwZgrZLFvqTGm441RDp",
  "key23": "EdcTWnDL1QXqdKom5pYk3gzFz6Pfbb4QQpoo1FeTm2d21n733WTkXsgupBuwsw3xRu8F9U3X5LqxMR35zZXECUx",
  "key24": "4g43naF3buCbqbt9mBP3SjVRnw83BsCtb5xiJUeWdTmv8fT8QBbDw7ZB2vVA3M6mvjS7jsC1z4w2JeXQ4Yrsisne",
  "key25": "YvAH7JvMjhAQFDmwCParP2LGdpKfWyJ3juUdEfXTGHtjMeAZE4M2xxTcC42iqbDu76xVAwVMmY4SCzBGroHhGF5",
  "key26": "3BrzHfTbGRuW93JWYpotetVHNYTKbNm1wxydFvSkeCA9tWeWVM4hjNF6fGDK8p2ihLkrJLZUmXP2GPpVpYfHdEB7",
  "key27": "5p3tUCAhRGNW1jwcpLsM3QVqJL1Diu69RzPe2yNG1PDz2E1Y7gPpdTrinBbmnJz1SpiQoP9c1kM71E8f2CMKn7EE",
  "key28": "4RURYLKWVSGEX32BQWDrDqN9nMWrGXxLWwCgXPWSoSr8eHxRqrgbKjQb7DgzWWz9exaKHJAqdyrGzEtZK2PHwhpj",
  "key29": "KyQivTKi35WoELRTXxTBYSFYKvsF9WGpLsJWBJ1XPx8XntJ9JAUboiU2Am73WsS7fqycVv7pRsCH2HUCx7bX6iX",
  "key30": "53WE5qEKt2DUvLFdqyyg1G8afaiN6X4g4nkuZQL4h3GxMPLBTd3euJQyphiT43HbCJeUqy8tEevSDbcTabnTE2uj",
  "key31": "5VLxaRKJmD3gZMJtsfyQaEQXCwZDX882CYtnWk9Ldr413VFZ8QSikBnTm8avXkqV1HBG1afsJqXdwdofR7bWoopH",
  "key32": "39GgWBGg8KwjMNuSoo1YGF7LunLYmtJZBuv4YLNFu6BnSbFhTbtpD7MXDjQzvX2rAPsd8kxLmgwCinqH2VthNj6L",
  "key33": "9kBvwxVKpXAG4STgXkhzSFR9NJfQ1admxQgw41vJ9YeULofQpUefDzFxUnJnpoubwEzyF1QTrj4u9eGh9KbLJqT",
  "key34": "2p5ikx7vdBW8ehs4SdTpbEvun4zKFhEJRxgJg6YTBihep3JtXRkGzBJmBP118vgKRk7SCosgC51f2G2ZgQ8A8iVM",
  "key35": "45eVkN27xQCAyt784SzckukPEoKGHh6n4jcJc7i5zACs7zutsURMHEK5aaXVohyuRtkShgkinfKMAFeXbWKVh8MU",
  "key36": "5QwJVvGnBwe8MXfX6jSVgasmaWmcje9vcsXexDYoV2PBWR6vCGXE3vkXVXRW822zuG6kC6VLzgPez63gBpX4sPGZ",
  "key37": "5vUGdSoyrukaBmM3vYG4JNKcSZ1qBwqFXw2JtyhpQdQQG5bC7pYM4jXGk3ww174jHz5FbfhPm9jW1LeN23qUkwRn"
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
