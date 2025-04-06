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
    "2zbi9vEcMeDmHNQjSFUB9qtrHvNr6UPUtUj4k5epRvdcuhwJA8gowaavGMgYhawAtck3MVB7AQXJkX2fP2PBjqZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sTUcqNkTH9NHFRxArnmQihGpHxJdm9FHEdKB2VqxsKnyR5N3bsr9jQoDocjtjR7MemE56q6JGG3Gdt4svuT3f7p",
  "key1": "2hiS8TwoRkVFQTqArszQHPCkLzjU1jx44KZMoHQMC3gwJnKuNY2DqmhRC6HJLT4492Xk6eAkrXtJEEZWQsAQEPcQ",
  "key2": "5SM2DVnL9taucEExz5CMVcfMDzry3HMLjLXTawyo1ZZZ28B3p2F4CysXf78Ke9kEmLSLqfRSotVVsN5osKqaXAmG",
  "key3": "3vHQ6GHA6gp6z1prPzG9rhLSbRd68ug4dmvLWq4EUzXDacBydTYngwZzSfXAK2fdSu5e8FZjQzaQoczoVqZZHrvL",
  "key4": "4Q8fT2cTkZkV6TJBZgUAWEHab3fseEjyZ9pM5nLF98w6kMr1vkwKK5E9yG3w9FaXr9mqWXwDi4CSdu9JPzgnUHeu",
  "key5": "LaSdeckiSfRJrMGPhCEFP8ZX5yC4wsmodZtieQPHtnRertC3rcTfV6uhRjyaENhXGpdM5MwoMQd31JQCbsLHUJt",
  "key6": "Z2GRQtxzB8smhhEjsyJKKbVfxbWzNNxhEWy8DcqyGBRdN5ZU3RwtuCWCKr56aoYJMR12uvV9qnAXCb4YXNLYfbj",
  "key7": "Doe9gJuM8BPnemyTKKccSkU8VnjzaP7MaHghqp4WBhThstcKAWrjeDk82HUxMqUhhAT8A7VK7RgDjnTBwHV39Qr",
  "key8": "2vyrtCLcdtor8zJvWzzqMpmZQ8EN24LehjrYdLN4MEZLtToFP9rWASpRueWypemGZu896m1aRxZfgsznX1EvXYVz",
  "key9": "4U6uxv8HfjAbSpn43KEE5NQWkhYkm2xDkusgQcSDN6FV4aAKzckdy1NByFhqN6we85c5JYi3k81WuBZhfku3J8jk",
  "key10": "2WmpYAsPSGYYH1RVx7RYjSwy6nndjRHyh8qnJxuRB8VLLabfojTMyNxziaHprvQxT5v5pxHRrWR8vSinnte7Mve1",
  "key11": "3Cd64WhjfB6sh1Lj3x95C5wwZSF21hZjTm4homScMCVaiaQHAxJVE9bSnd8wUeUQSKkKaoktnLojJH7DFsq3HbXD",
  "key12": "4w1R9mqZ7kJiSmLbRHv4vZtotAoeqBvzQiURRhbzhxjYUNM3cTSVsQM9gcd11QjQZwhMwt3kLGZ8ZJHQ1EwPM7zx",
  "key13": "2Uprby4SmUhGAQVPtyCujh5zSD1hCKAQbg36CzbqNp6F4ZopoLJsufRZB3dGYAGRDg1ErQ3FCgzvepq3h4TXEJLw",
  "key14": "634TzzJtq4aK4ENLCGzGANGoiQvNRpEZNri7PPtQubjeCD2jJn3BpD97x1sfNvNeKM8NSgu82H2MPi9EmDFjuiQn",
  "key15": "2PFPC4JspJcq6KinXDUj17ivpVMW9RpQF48eM9a2yTHuboZucGnAsDywfG98xu1nhSBCxy5RQxj2WpmfqGZkxrf7",
  "key16": "3hS83JYWtLaFgtqyJEBx3ZynnrbVb1FKCt7Hr7JbGB7AM5XKCVD17CVpca9WuzKDUdpuDuAwpPx7C5r9o3vxxnXR",
  "key17": "rJD6B13GeroHXAesQJFPcQGVXhoVQYRvTz7Gvg4CPzpoz1fngvFEV7w2oo1kNET3eFKAEzCgswnLfLo9VSNCqEx",
  "key18": "3kJBYC1QjUTBFjFxCwK4FQ4q2WiCAMLyThJjYDCGfEEvr7ydco8FRfRhkjdNv84u9ftRAQgEH57zuesVFg5u5Suz",
  "key19": "3E6XwhAYygpeCmLXUkvDf9Js7FyHsqLMTrsD3JD8y46qNtCQycfWcsDgDzZFRrjH4WTKe9ZEkPmrsEvLVUYxEn3u",
  "key20": "5tGfW6brQioxzPnZgsGkuhgshAkxVgsDHjmFq6EcybyYcieVHK48udoDiXbA9XRm2zye1YnC131765ETbmEoEAck",
  "key21": "3x5Mo5YfmUdgDDNFAfZoCSnk96BYDCr4jkVE2DYx8QXT7S2hcSdzhvuf3F4CGjQSA22Xe57CC6y9PtV2yFbTmTbd",
  "key22": "5NqT2erJEFpKNDRcgKp5SYL4g9XwQq4QQcYAh2fgeJhBQ2nTxrDpAgJ4szGvb86XdRRNrk6gmTsyvg6Tg9xq7v1x",
  "key23": "3V3oGRqnh3ifbReh1Bn3MgYavXFUSU1JhnjGsXcMAEtYkp8Jbg6FByQAVB6CTnbqxKLLzRTfAoGXqtfXMp47waxP",
  "key24": "3dJzvfu9p4xTVrBwfgk1ysksSNvGmYYgdGxkLX3ibfCxt9Z1D5kocnyBCJyUdVRyGZKtpDUxQu53mnMK21XFJzYb",
  "key25": "3PMKVob6iNmJLyU62pS3MrWcks8f3oZLDS5U5KJdm5b4vzbzWaTq7hrRZucYki76CDPvfVXKDcCfVXdGsGe3ReRn",
  "key26": "4qW2WotryySG1A1mtgv1yfAu2taLN4ba3RHsCr8YYNEXqetMhkmRbFFoCMvUQW2b926siqtwmeHM9LANBy5jto1f",
  "key27": "44QD9LcEPW8gHuBk2246XDfUJGinoFNb7keY2MwwxNqELjUB7vJg99L8tvU3hs8kngexwcbtZ4kzGLejquzdC53f",
  "key28": "3XE75ihHRCu3RxJDWc9eNHniAzXLQN5yMtym7CaGiACxNqH2CnPw8QskoHJMFdFk3tNJgsvX9GgDzmSj95p3kq8K",
  "key29": "2axizWfkirEMQzMPnypKxKsMzdf8JcGiYu2dxg9XFxyhB2bqWRvULc5UmuLdf36bKfotomfNNivAaA3KURGnx9H9",
  "key30": "2sDiyXoKqCSucqRDKHdVMdrfA7R9RQM8Qffdz2CnmQ5dFCaGFqmNxn6MfYmXcMx3ywQK2jx4fx7jkyGdr55Nh9gv",
  "key31": "5YKPzBUJQ5YZ6HBikukwUtvaqnto91NJiThkuGGBsECYQN88XjcXbmrh1jUhVkV5kzEV59QpDQoA7gNjHKQs2NuC",
  "key32": "4t9cf2auGLiKUWpqRvm9bjmVgT1XCDMnHAVCyFP9zSGCtpuymaDG1THBCpZoaVfxpeibBxeC5GP1guCXaGhNZd5t",
  "key33": "pyrjBRscqTxDaBnuWduCwuPmCiRa1nWoMVE7GXc1wLaWAoMbqqCqyTWo4LoBvd6aHiL9UNHPvCcme6MsQ9aVRS6",
  "key34": "HYB2wUTozajzABNhRn7zC7i5t8A5KWUHHMbRWi63jVj1ay31D5iSiticiFTyxG3zeUke8auygq7Kq1CrcinA8DX",
  "key35": "4RGKFLCRbnx6dt1KwKieiCiBRrpqQzPeT63DJDntBQTSePs7fpD9J8fADsLSLCzJCpGAcyXmG2q6tF8SDfBEZLWi",
  "key36": "3nCk1qRHhC1ZkzB2VRAqFhD9UKsWTQeLwK34o7KaiE83N8MZKogj7hyoUafnXAhPUXr9k2i9oSRc1KNdBzFNFtqu",
  "key37": "5cuSyy3WUm3EEFDeAdG1LhYFHFzVuJrFr98rWWFKEJYMxyQPeqsZmPQprPyPcTAtMZwk2tHP1pEn2XruqCSEqiyY",
  "key38": "2BZRGh5FeMTLsjaFgLHMXk5rYiA71zasbMYR4uygDSPUDd37sCszh22RjNJyzwGhfNqoMW21jsJaV6AgqT9kMjNB",
  "key39": "4KKN6YV1z8ThPFjhwtsaioLiQx2XQUHQUSPpQXeun7pS2RHarznnarQCWse8txoWePjb1qEwKoPtGxXcE4aePF9b",
  "key40": "4WDxgMw7peoHvtSxVA4Bt9wBsg2SEbAbk2t9cp92J4XW431A34AT1sDyZGBxgoTqcMM93MSFmpFJNgg42itFBmBT",
  "key41": "4JsYfSUAGdeqNkFy2G2nYxX2U1vbqj8PBupx7ZS2qRWoJWyjfCafa632bHjnZmLYvBBvu5Hza9khWH2HhrqgWTQu",
  "key42": "281z8nSkiCHhBRXysuHSbXvwjygUicCRpZoz1bfdTFiv22KwoDy4ALy3bN6rbCKUi19kdDTsBzxpspn2twxWAiZK",
  "key43": "3citY7Fy55ATygup91UPNZtqL1FVL7MZs7WksoKgWkgwTCwksNaciQHU29a6HydUBQUqRFrahRzAp6XSuS8LR2qP",
  "key44": "5GTDf3DPuw5sM2cXt4uVGhyQNja8fPCxNoEfD6g9qq78Apn3u22jKbHeYHmxnj9F6jRYqQ44enyXohdvU4Jn1R2r",
  "key45": "4DFC5KE96tMiL3NE7P5DvQDtY4P311Rb3UGsb4DwZim5AJdd5dK8dRhFtTzMMF31CPQnpBfsoWv2W5BXyCi9WEFu",
  "key46": "29YoHHZoMMotbwRu88G3xYKB8gciPo85qbHdVqsqPD2taLa5efMtaVLSsHdCRKu6uMbwqsAab29hVszbaA6nrVfz",
  "key47": "vTWoq7qx8RqWYgehKhyFWs1BEn3PBvMuvNm8T35ufSE7q2TkXsXjBX92iT4QTRMbFX1pxSAUiDbXW1zSCp64R8z",
  "key48": "2eRzPdeoQszsoycHkbfB54TbEbgdpbqpswLiyxrPHWZFu2Q9S8spGraDUB9wQqk1nbPe8UwHsGcCyvTSfCxRdKC9",
  "key49": "45yvrZr2WW4wY9knmt54GPSJgziXBcPyMjtcVVMYpvmUXHdmQwP8dLypVemoSXoTaVkJ11A9RJfGRahy4V1Des3N"
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
