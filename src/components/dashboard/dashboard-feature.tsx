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
    "5g2wpVdhR21To73ndwFZWWZL4NakKkd8bGFF2mQQfPh8TpjjK9kQzHB2kdVL3BDidL8DoamR2NA2nfbQTZ8aBHno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEfnSKdQkNWLnLrcgPSmCkhK9URbf9MjABhFparHQfCo7nK3wSw63qLDoFmTpJB9sArN6pQYh2GPzhSMUgx2Upp",
  "key1": "9vwhvCbMkEAzWRfYpxrwGWjg76v6bCNKbZ6o9BYs3fSFirURESVnsPBYb2XabcvZTux88uHyZn5WzqBrwP3b8Xy",
  "key2": "2yKr7XeTrpQipfVNrE2xwa93BQ41VAcCqZea2i4q79T1ee4AEPtm2rNt1LisKSnxcYhTzsWwBgho72yz91RuENA3",
  "key3": "5G451UEpbVsENzveoo3DiusmpHa1TppADaQ86ucdtWVp1E79dShHptBR4DZvt4axAP42Z9AVYhm16fwGzvpVA2ge",
  "key4": "MpWvPuZBRFyb5fikqSFZ2SJwPVUfozSwSHv9k9ei92kVm9ADwy1PL6NCTho9vFxpqdbGit6YTS1ZpoxeZuvbmP1",
  "key5": "4XQ7JoRtFRDnj1dU7aB7KzTRxX7K9BsF1Yxt497guohwRPmSr1aUQ7Y5rR9L1mB3LB9QEce8rLSMxeseyNPj3Mby",
  "key6": "55NUkPU3m8EXWizsVpywxR1NVPSAPpo1QvvmTSKj3zWmxFj8zanL6dWAHXCrMLAPK7nsMnxVWseXTXukanjztf3q",
  "key7": "uATzHKkMxRzmYKD8sNLm5XhwsCs8HXvEaSuvbitrzA7uJC8xSsUQBUH1N7mGEVSdZZg1JtfczVJsSyM9gkUDzJP",
  "key8": "5cr5UQDv996XLt2vaC8kw9LtzpsB3dj2aDtYUyRFQxnV1p6LLt9W1JhhE8fQxn76KVwp8j4p2Cs2GRegQwdN6Yg9",
  "key9": "3AnVViRCkYawaXBDKsk4DNsUQe9tmab61xNMGVa7oGgMHXwSHNciZr9DdmTcuXttBf3jU4gjzsV1gZqKrJJrdBML",
  "key10": "4hUhLQpprWATxvGmMRBR65sHUqp5gNA4qWttySvcCqpwNX8h8AtnL8rnWdbdFpLVPWwA1vWQvNn4AzWFAJmKHrxY",
  "key11": "59VXNjpArJgVmkwTnZ2KTEcCQ4J9hPwDfeeUHA67hbgZyGrhuB2UnkQUaMPCKRozbdDM1txTcFxosgtSweXNRiCG",
  "key12": "47WExdyqCCDSigTkYmZSK4WNJ6EXJH7Sh1eJbkVrZixkGeCkq7Vh8QTQxjc91ryAGVbsdovN3Ch8s3HSdNJkBrRu",
  "key13": "uztdsbjsD29QEwF1zeu2ENhdPZAeLjwAKmeU7puH1ur72LcX1hCuqpB29BekKrbxwmkaqEWR2hZVjDnmX6PQxPD",
  "key14": "4BwM8uDpuEakQtCcPot3KciSUfFpx2Xc1x5gxdSY44ae42JdiHr8KYdKNucunYjtHX3cSPXcyR5Y9Ejhmn2nayXC",
  "key15": "4D53BxuLcNMg7DDjHdbU1zy9neY62dvbQrwoNhJLNAEKTpgC2yVwe1T9czApvLTYnQBf5qFwCDLgMd5XQzacvQDY",
  "key16": "3Cs4miGw1p2zRpcYYyrAb3udQr6RfQmGemCUsVWAEKN8UMtdUYj89UknDxmZxdLbe5tEs1ej4BrA4wyuBEkd3GAD",
  "key17": "3PSTwh7ghb1skZ2RV46k8UGDcJZPoHjZUS15kKa1tsUifQVJzfrPekNL7ktWt4ieSTe4GhBt5ynZssRnarmKC5s5",
  "key18": "4haeb6CyRh6k8pv4g8PDgJPDiE2JC1Pi8GbSFEG8DXsR1b1WwqTTUhjCMP9Ht51KyFiFVMEzvx9oHjMzAcVUawbq",
  "key19": "5N1ELc7huXs5rdRRbFKK4dVaQqYk88Zvzzs7YcDo31HbRxZKF2bxy7s2HhUY6SwBMWavz8JfDBb8s39ScW6kY2tW",
  "key20": "5pH38Jq7KfTTXAXpcMY9scZFAtkYMpEMiZxL73HrRoZtXhn8hcxVRtFYmP7YsrKLMduxc3bpSYBHSboAP7RD8Bp7",
  "key21": "2sEJMqmHLFz4nfq4xfu8r7Y4d4HUUqb9m7sJWi7FiyXYMt1pSvSnN6nF2SaFDecpb1F54BdK7WBkPeW6qVfULdtc",
  "key22": "qmEVN251J1f5bYAc3y9AaZQdzPuwNT5fVpHe8khg32L9BkktEPahc6kR5kmDk8QPw29mCeWuAY8JCgEhLCaX3Z4",
  "key23": "65gnN1odnGGstq2ZxLJdRb1Q4eu3kP1S5YvvAQYWd6FveZutqice3sCRXEFBuZdadEFau99WtPP448LoYTgnUktT",
  "key24": "3xkdwqPzk9obhiDH35yQRXv7Qsq7vYuUSa8UpBHj9F7Zv5ai7jEzg5hPmJqj8qDjjqE8WBwTcYNNioDQbNfiSbY7",
  "key25": "NPAdh5y76sbVjbzBSTXGm8EAYKDLxPggPqQPsX2yk7kn3eGuf9o3peMq8antcGo7H1fKt2VCdBgVoZZDFEo4t7B",
  "key26": "FhnmJ5nvyd5U4bvQtGh2X7ynoogrgG3rNzUnP3jxvpD3tVKUVn1XvfBDa3u3yDcgPuZrfjXMXm7oRXSeNEtrqw5",
  "key27": "29rHKe41NtuhUH3ounBAFGVhmG7zbPT8cN7aytmwUyD47YwjvZe58rEMWeztxfJ7Jvchq8pENnvn8fmqmijbYfH9",
  "key28": "DaSzbkighFVTaVxwuDV2Q3Qw51TJYWaSbZNcrxzuzxwrCTn5nF7jFbv5zFy3ZoV3Nj6EDASLutfcUXqz7tF2b4P",
  "key29": "5wweGJGjv2WnihxnNaT9mMfbm9ACvd4wKoNcKtKLSkHh8moqnbst17d4TCGmhrZ8TJprMEoSP698mRxyUbQEN7nL",
  "key30": "xouzicKpC1xb6gZbydKCqbdtearVdPePSJ6Uq4f7Evck6rVMpb7GCpDAWpRcDhKrkT1kHPbADfkuMnEzeNvFjyk",
  "key31": "3CuwfQ9sG6YcrEY6gXqq5jNoT9o3aqfbvHPGYEqVHiHcqVUjErhY1FzC3P8nT1hjARr4WwF7naPsJbfozeJ8AYKh",
  "key32": "3ZrBoqVSv5GetW3f27ucHzwqPNdTxsJKXFCiCcEMB8jXMiTDo9ALVW9vuuBCCjch6k6bdNSWCgjrADyRiGC9K7zs",
  "key33": "561hHjwcBjMsinfv4y3mD38LjuSwgSAveFwHxG94jeLWHg7zbcyjhQiEiNFHqoUpTN8UsTWRX3cytwvigJNAZCQf",
  "key34": "32kctr6GXBHGx6wY7zB3QVZv6KEbebivL4GUHFq7wJ9Qi31YrNsgioozX4cyWdPayRvtRRj8jNhmqZKFe5K4mBGU",
  "key35": "4yLFqVaoTUU63xHVZ4uzFW2JmsjwHguJjPxX19owa56k7S2doDz2uuenNNS61b7ity7JCMH19uwggLRJNypPcEpR",
  "key36": "2n9Z7v6EtVXBewyGHyCWRkt9cwhzUzdepCJm9RJsSafFFkjhviNtzjm5mZ3ZjvKPiTLg4UCujF167EDwYjbRS3zq",
  "key37": "4SLY9CAxmNJHXTvW26tsu8T5Wg6HgQ8znYZQhW3Nk1PkSaBfW3zK9RMpJvjtqE7Q9xfzVF5DfQCpxTrYBPAevCtx",
  "key38": "51cEgj8dkSPKVRbC47YXwjwRitP1asgpugRd4Biz1EoauTjTFoTyPFJ1vyxKhxXXc4eahR5v8hfisKLKA2qwpEar",
  "key39": "fDroaGYBEhCVqzgmaGFYUUjdUxrDRgQj23FxXhf3J1Nm7x2c6nnAQ8LG2TdgNwG3hWJKYYmXKHxoqR2byDaaLQA",
  "key40": "28G4zwBhN1cRm7qJ8334GAwMPLmwy8uHZHCWm6Uq2jJm1jJ47i9L2h8oaV7mU2fJ5ZRfM671HTUhsap3LjxssKk5",
  "key41": "2NELopsGRWCxNkBL74sKm9yXB25udMybsenHgbXg1UobBsCzC4XU1aJXiN1nRWzAXBweWUhKUZmBbmkF9jFGECfo",
  "key42": "MFxpE4Mru5ExQTFZJ64DqiCvsYVwEUsfhH2SWGWzh3k3K7S741yK4FpQGRWPo5waouEdxGGGvphj3AtwKACMeM5",
  "key43": "3dDYnpEn4xjADDZjjucCjJ84pEWUY4ivLGWk9SQmgF1XPkNEyZwEMP7ZeqM4xVbXnV69q4eiCq2q1sHJr4Td8Kxk",
  "key44": "5tcECep2kwwGTtE4LDumtoRdMUbRFyYEFceNVYhPvsgVtBFVcWoskg2bMpcEWR7z6WxkGMD8tmMxPQeJzPpgpjrR"
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
