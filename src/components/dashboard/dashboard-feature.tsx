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
    "3L8kYSPwQCmyyfqyeFt1aoEL2PEUPohnSxhJRtLt2sNKXCcvkJ3UNtF8yDWFNuw5iZWVY13CnA9B7jehVHGzGjjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nKJrN6r3q5KbfLjfKLdMjkUuC33gbav4Mqo9ShbBSr9DVMcHtE8FS9qEFaTNMVdpM7RDHPjen2NeDR9N5RBmqLR",
  "key1": "3yQSyxxucsMsqjF5Vv1dqFieKyzQ61NEy4AhVUYcN2iBncsA5FeGKfZiqkXkjgXaLLzhhCzFYgh3TwM994dVazbe",
  "key2": "3yoehhB45oFn4LTPo2WzEUijPAAtGJkhBUZi7bTdwp9iCb5kdtVhTRyBqv7LgqeuY8VoqsqRHcmoJn7KUG3eu7bi",
  "key3": "5RvSsE1hZkL9W41iQeemPMhrr62tmcWAPCYVsSVPcmzVzgTBRLUUk1kRstDk1fGz1mwKphNbXVZ8WcZp3eMtLL3g",
  "key4": "5qicHwksWDiqdZAV5xrdcKJcv5LkrMpN2FujHP7v6Mo46MwZuEsniC4GiV3GVbTdxxpMXk88g9m41iaYHQbs3zSR",
  "key5": "TzJd6jC21k8kqc69XDeg49HrKG72QK5PXT19dRL6nnyJomT4TJL3VLQyh36tq75MZSFznm7X6A1eEfo1KPpQcKy",
  "key6": "4Fc6HMmYFhybVaa4VT86kQb3DcMpL3MsFAGXdLFVxG3T3R2gyqnrqhURd51PTCzNiHX8KJ8JhQiMwHUzQ9B5aHYm",
  "key7": "4BX8M1t3yXf93ZSDN6GH7Kc1jLD4gGm6yxuZZqiQ5mQuE16xqtfCrqUhBqvzxAWaCMRU8sKdAuF7gJ4o74jugLEd",
  "key8": "43ryEtkFSRyi6shZ6LgeDuhY2W7dKE6gmQ51etWB6zoVrKgitvxeQSuXrLaMtwxu6GbBnTRVfCddd3vx326D9swz",
  "key9": "51GikGoj4dcktFMzSF6TjTS6a7UZHtmYEZ62qqD3QBtvnP7TYNPMxfyrkmuzJyZHZihukvAWQouvD32wPb8MC2r8",
  "key10": "5PEvCkRPAdmqoPDKpBVBY4NXJsanB7FYGfw4ZhRMku4q3ZH58xi1yDCmKCbRSgcrNs82KDmSnqErgaC29vKpmEHx",
  "key11": "xFfjrs1yLCY4PTVKPUNmQU1bpqmxg1kPu51PPJJdDAcid6h8dhxGHGfsjXbZMZzcK89v5gq6NiB1eVpveVKGi4Y",
  "key12": "3Fjwhuwc8Vij83ST6QR2n1DggqqMcJD4aDX3pWQVZowueHkFHpo991PyEKLWzoE77QRFomtkD2BHAiX6iDzPJYmu",
  "key13": "32URgZX2KeFtGUGMuw2hqrsCPzuqqAgFUkETJJEDJW5hZankCFKcHY3Gv4NxzjJ15672xMYCuxGaX1BGXMu6thYD",
  "key14": "2wT61UyxzUR5Q59pDwnGrvGPHat12Uc8yZPaDzqNmw8s5WhiFxfwngxSNbrAhzsbAXRPgN9SZmjg5PnKKvs8VwDg",
  "key15": "56tqeYyiX46GEmcrVtdX1ZuCqigiiwv4vpNvHX4zidfAzdH9zBNPNh5gW62DoF5HvTV9pquEiBfFtzJkm4zSVBbr",
  "key16": "agat3Gd4eWZN7wAkeNMSmFVp3FcAecREnsc5sBMEMV68vmgQDUrLvaJBHEruZNakgEwSqSmNkEnmPvzVS8LURG9",
  "key17": "31uiPvv3yzHB46X8nu2BCcgDh4X8YXEf5JYsHuJfc4zQMKwEFycnbsMQcAPEgX35qvUkENvz96DyEhJNJiJntXvP",
  "key18": "3F6RAnh3UNBgArqxLBj9RqvESdJdczFCMreTRXFCR8m8n8uiYec1roLkXz92UwyBP34GTuFXD1bBCqSuggtvjqrH",
  "key19": "5mP52Tpo2A446PSiQqjiJX6dWwCohKqjnTS6eh6WJT8uDBSwYARB7mUDkaQkL4TTbVrBM3sEuK6qVsqceqRHRAHF",
  "key20": "3MAsatSnWC4NketTpF9qGAEc7uhpJ5T2pvdhGJFSrGMjdK6yT1HdQm8xJERyFjwQQicqUfkuoDVbNCzGMo5SqN3M",
  "key21": "4TiYhQUR1WDV3pR8A5HUjAQaqXsagejfs7VtKB66b17V1sgUgQwSBf8QJEj5XpD9jQ9xAj2DrLa9phtJNoiXc5q4",
  "key22": "zhECkeZigLWbCzZqxAwQGGNDmwanFMRWAyckdmu6yyYaBjwyfRCcm7d5wzhDQJGZZJCshcH9yqqeZMYHpCvbqto",
  "key23": "AEX7zvEqvkKdsLTR1P6awVpy6DsvQYzSwhB21wxbTgrAGnXij3gyt9Xsjr82ySufRL7YZhJpZ5CbazXunWbXV7F",
  "key24": "tQ5bjgxx9qS48563LQ4QczKdLVj4CfbWuBqcZmvTXkvTL7zsmKjsCgfiqVnSUgmGSfjHRPNcxdSXGo666TLRgs3",
  "key25": "4ECo3LrABCJm449QGzAc7gQTwRXBM2FNdHTbgMmGzBFBCPLG9sFTuk6nqP8asT4wDFL5vD69E2zBUpnNRKbkCkBn",
  "key26": "4FfH8w9WLEnCqT3pqiLTaAPnu7EnDKNyYrRPP8nLKeuBP8dgeS1qN8Z3T3yhTD8psywjdzyDgkNT1UPYcpifxmXi",
  "key27": "567AuUS4trx72zDWT4qxKpy4DeGnY5LfbM8apD1Mua6UCsFCDeDbxbijKi5TwwgtCoYp6exV1ptoVQRvjh1Pn5Qr",
  "key28": "3xkfeu3L3ohgNoih9n9mWBNo1gHWMoNuL2BoEUXzeyvzDGvScPqeUEcQhpVzJypr6G37uvqyb8MFgTLy6Mch2buT",
  "key29": "4jdLsHuUN6RTxeYTivRFmprgoKJVm72jamYsYuHXXvGB4hGz5oXyEoDPhMtbo5bpT4cDNC9axFk9aJL8rQ1LJVwA",
  "key30": "5wY8Ya1h6DrvKuZsHC8sPifXssKWWxuJ9xFRRbG5StQfD5kd3SnyMbWWwmvdGf8EpCVR2VVWjPicwHfG6CfuujtC",
  "key31": "2NVrMVPuRnEmp1CmUENkZ9sVkxaBNRkscaUQQ25UD9HNirVztG3XzcnqBpFcTFbPWcxoLK4qjCmBeKFJ8fUQGedk",
  "key32": "3CR38rzRyPvV3ngHPQj3EqdLJx6rqr2bWWon7GowrDa5zQosjXYuzHPN3Lo4Jwy3iknsJ4tAgmWMr3m4b7rRavgQ",
  "key33": "64fy6pfT6TdB2zrPzaZeeLngraeCGpAnmdxmuaUVnwagKPWhRB1NfEYCt2rz9HnA1nVoyn88B5SwHmkusKnWBPUf",
  "key34": "5zByqDfjTuLEjpZuMLwVWqByDgjogpnrPjW5dkSgWhAXr3PjTPksbTiMzMGGDikwzySbSuZ2x1yTU5WPS6TUMgGS",
  "key35": "5UrxbNUCY2eBeSukNGhL7WKFRqit7aGfKotyuCYj86XTiwD5U4tjonksfRCWEhYZds1aMfm6C5JY11YotK5LSj6X",
  "key36": "ZfBNqiUFaJimntWBaWT258NQDcjshLQ8pgBo5bPnAnuTq3PGh6p98egPnhogU2pz84QBouNLWgsQHvXvLL6NhxL",
  "key37": "5kMgq2E3y5Dz18UnxyeyXVA85UusiZvta2b9TYNHJSow5CTEbBxdNHYxLoybxp5Hjn2FMSEGBbYsawNYpvsXQ2vd",
  "key38": "vrbEe8XsuV16SDD1doTPVwrvg3uxGVDAj6moGriKqdXkc4c8nPoZAaK48gc13GvGKYnEHWUvtQBpxXMeA7wiguR",
  "key39": "2TZwwYrhNToMw1u2HUNmsv7mvd7i7gdLH6tLXEYuSwiVAVeWxSe1qi3rJG2BU6gYsQSTSNaMg9nqepXbdT7zzDnb",
  "key40": "s3GcFMKsVngvUF4RqFNKEENHwhfCmnYqhDLYehAKYJ2jc7CsK1KBu3DwJdNyrg6GMFMCFBFJu5GxfcoxYMiyPMi",
  "key41": "2pN9czQDDwzyAMXGrGtQE9Yhxv5ECQq2yb4YBwU62v611EqbyydE7dA1tuB3mpwJCrTuyBM8VYYwH4XNR8UHyitC"
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
