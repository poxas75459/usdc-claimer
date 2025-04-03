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
    "55bEtVEJZJrZyPEPjMJrNUAT7sQpAjVWHNd3Qrrp8VcqhbKAfYCn5caEBGEhs2sY2oESrzzaTthXoQ5zCG36Zz92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QNYWjKRuZcwoo8PYa1YAQTxgGJsdwoqqsmCdnXQNsvBp7xiyixtwakwP73BHtYSsbW5j7D8wPNeA69nxbmLfEGM",
  "key1": "2wRCdRTjJHufXPRWehZA1WKyGX8aXoZ2JQkf3wXiEbSUU5bt3xQDf3mC9Zpz1Yhxo3F6fD286BEd9D2wt89JNgu1",
  "key2": "4t9iLoFV8QZMiwFwHj37GW31eXWrm8iicWALmEruMywZ5AEGzgdoc5wUqB1DAG8x47xkQ9iv1Emfu9epUbejRPSV",
  "key3": "4nHEwvJDezpiPrLK9RDivTFA2BJwL9ab8g6PsXn8sDSkJuAZoE4cKu3y9QdZCLp7Dj4FXoZtT6q27MEJrYw5peCa",
  "key4": "2s8VKPHFeXALuC74zvCDDMhZyK9QJc6sAdShps2vWaAfsS23LvrRtJkAtJrAkMkrDkbtaBeBitADcW5X1VzP5aYv",
  "key5": "r5KAu9R3Exjy3XEznBuVmBjX2NG2m7vCM3Y6kx9dxc134bX9DnUAFeVoRt7vPxxnHyZTZMPgfnbJijrfRVcQEEs",
  "key6": "2mWtB5DBU38fjQzCUAR6XX6eqThBZHH2wkDsYTftt57Fa6uWv4xh5s4yoAqgNYxr8VSRE5m8Megz5qS98frpbL1D",
  "key7": "bpgnn6nnbAWDvgs7xbPJUbxQbE6HKs2ftR43pH7nygmgQuJc9BJUjHx2NAtYXW4tzQKGoKsnzF7nB2ejg21gdP2",
  "key8": "5hsW9kAshHrm8iQieDr6xzFrEP1WmEEP6yqbYMXQrVX5NLcvJ9WnfyaqG6UmPUkwf1Ma9DYPBqLXWjjS3XxBTPNW",
  "key9": "3GVyxvZqv9gixiFQiKvqk1kygnHjiMHNSJWY6oXPpZbNNhLgmxn1KsBgz3dfCexotVBtAHnvF2BVW1kEGnrUFC6V",
  "key10": "Cc2yB8yqWWFJpN4en5wBdAYPWGDnJGFdg8hiC72DsJqzufWzpY1Vxo4e2sYKg4TGGP8LRZfJ2ZYHMj2mWJTwwd3",
  "key11": "2ycGwioYBkge8Rn9xsU2e68pdPvH9gcfmrusFSxapkeHrFU6bc9z6Nut9383ovLY3y27NkEXA8oD1ey5sfvMo4AW",
  "key12": "4YMZyhvzvDNmVb1iRWX6hKz5jeSetffAFQkDBxzwExBfTfUKGgJx5UAr7gxNdzPYTi4gumRqgE8wvvSCavxweB3Y",
  "key13": "HfjKGrkJ6JjmrW5sPJWxKy35ivnFqYGzdfhhg6HWAPRbGHSeapG1NAyVMNS9vojVvemxiPzWSmiYzgfnK6sPLMp",
  "key14": "59MpSzA1zjKQBuMJcUTzRUvqfiL9seXbTCjYWLgTLKGGcamek9dF3ScahZHXWXQbWqaneQSGwgkChZmpa2b1yq6m",
  "key15": "53CKBbusD6SzjqCDdqUTgkxQ8DcQjjf5NYXttV3oB4oa69DFmXEchMjHFdqcrEVm3tpnTevHsappPZgiecCC1cFm",
  "key16": "5eFZ1MKdpwCqrMnnFRyeGMWAtJ8YvABAAbUYopQmFeqoeXiHxugv2SmpfzR3tLww6kWVfrghTovN4adW8TkrR9MQ",
  "key17": "2fqSDxwmQgXrxjAEiPAhZtfRDdtncACv5vsrw9R3WMup9vZLCKU7y8yFiVPeDst49bqZsFUicpaSneubnwBCfUDR",
  "key18": "41YCt9mKwZnrALNGi1bASj8yiTyPpBGE6AM84Gxkfpc6hRfJHYfDbEL7MmSTRL4sVd9yc9S9wwRson7fkzomXTTE",
  "key19": "2XjiMkVCmk4wSyW179ro66JwnrbVhsCGCcGCe6yvX4gRZc3jkV6apqcP928fX6BQmwNwKfpndDhFUDEiu6rXzQRJ",
  "key20": "2fiGCxbjo1RTnfyCrGSjHTivzRyYoggpKbygb6pSsb7ndc2H4mEC3csrQBR4tg1sZ5LJGPH9QBprqtm356YaoPke",
  "key21": "3ChUmATa7XtfEJGY8ppVm1g6CZxTykXRWeaW4EanMb6KwriyJb1DCbm68D7xKM3e4bcTCgBAnH1c3KDQuDRGNZy",
  "key22": "4XBtwvU9PKtGtDGXevts6gBK561CLx2Dw5d958ekxg2b3Tzua1tABao5611ufmFkgGRWWZ6aF2iVKVPPvMxgkeTh",
  "key23": "473Bn3LtRdALFgxKsUeEYfLHADL2N97gKf4d5b8Rvd2v5W3pmLT2VcVjANrPX1xF3HdHqtpJDiLstWUUczcLG79V",
  "key24": "3mipCwmwenpspk1LuvpXf1FxpQUbWSJDb1jdr3qz38W6c61EYast9YEHkCVqBDJSmyi6KfQZd7sBYNDL8C8Cjer9",
  "key25": "JrrpdmE4svJ9ZxtC2Kz1rZJCPXhPRYgJ5N5VZgUEnWXb9w2veBGRVdLNCpNM9kAk6QHKJ3kP9siwoW4hh7wV67e",
  "key26": "cuCyrtEKEhnJK2WD4fKK7bJ5tzZVyjM1dZhk2vAZ2EvguFBq9ZFgtLYiu7CsGkQYeAjd1d2WMoYS1cYjKmFZ2KQ",
  "key27": "2uMM9FtzcTRnnh7exubMfLYbyjXyBqshPXRhy5Bg1smP6zJbSihNiQaA6FkMX75m9k5oLA1AkfgzevbZFvKQz4J2",
  "key28": "4ExmU8Am5jLX84k3Heey4AhaBuAgBcAm1jQnJkiKoxCvUENAA16WWpT9BAEyYCeWnE4uyv59WYNgbh2cbT717d3C",
  "key29": "3PThnq3UM5aZroqE2ZZpjgZxUdek8yfeErdSQroKVuyTG63oc4kzpmiYsCHxfXM7uS3HtiwtzaPBnY8qoyGepFnv",
  "key30": "3BzkbFuTsy8hij3HJiU3bcQFZjLLcbH5f9JY1p7YKyyTJ82kobNJax5dswj1a8sfpXStpBJoosoR3kJmgC8tF9ey",
  "key31": "5tfrSARsmntLnV5qmVqYHtUPbnp3ctiFjoZCNor9PEPQnz33fww8or8kC1udbzYiVFrz22EFZMoxqM7QYBd4Ptmu",
  "key32": "3tsiwiKNgeHKitzwYUw7TrJHwLswYV7e6drkqQMyw4AaDRLyCZgGxTx3Th3Tj7amPDUgLWbSyW1chgVfi79qRW3U",
  "key33": "5C1SHX8rxyMuK22HHJL8PckXdgdE2sbvDSWdzwg9GGqXoqvCYkF9L9srbRjz6jtyKiAQuE9AmKRNmvrpVVnfxLSM",
  "key34": "4QHeb4zEEHBdpDeQWiAkvsUevQ7AnhDg8YczQtGRG2eEHMvBFK1FiZiBP5FMYjetdpTzEWEUGGhDwDhzEvURq9nW",
  "key35": "47MkVrXToueE71m2SudJqLxfqZv1iap4q1HLjHE9Kt3wev3PhKA9oHK3zLjEZDE794TVpmmXT5Pkf5hFsNtNeHMc"
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
