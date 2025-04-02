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
    "5iGHpB78cy8S2sDy2mkrSnuuWE94ga75nPSVdC5XN4JqeCrWsMFJJUZZZK1pCGz1Q4tcwLXCXVQEpwew8RZGsG97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTQEEwzecZtVumobZnezRZhe2TiibfQ2F2uS9GwcKF845DGE1oNk71KAbbFVBe5JK5iqgLx2E26NUgvkEXMtPAQ",
  "key1": "51Ym5aT3C1VJm5XC9MCYJm4QcAyXNFzSiMPmBP5c9R3hsa1zu5sZNT5CV9dDz9xC8wKP4pGnTshXGXzzPdn4hhtx",
  "key2": "H6DY7rzyrHB1TrvzuikPeFvtQZ1BAkZGj58qJE8E6W9hWzW9xSERaaudmksasqVBWt8PuasgSLXg6sczx4xPtar",
  "key3": "2RiXZwMH6AKp1TJXusywY1feWioMsuyHF4uTcyLeVfdCGHvVPQmRWTWx9atPGpJikeRQEW3KksApyedWXgvTgneC",
  "key4": "44vWaTbaACwsfzZECSGxdNPcLxbR5aVyLuD1U2MgitY6vH183fY2YyoTSNnNSbVibF9bS78qWYQ81fSHMx6e67Xs",
  "key5": "2g7TWcog8n1z8bbvkJJhKnJHYXiL63FeJr6YjE1Gefnee1ZkhVb4xarFztEji4mUhBrRHcESYMJ96Vn8BmY4Xwrq",
  "key6": "3rFHzjssy9KGToB8LkavQcnSz7nAExhUUFkuLxHzmE43ia9uRErzPzjLdh5iJcADt7DkKGjHU4WwehXt2FjTvvmN",
  "key7": "Mv3JLLTYqPG5m6qiogSTU7KRtmYXGr95A5EbaTjKQDeBFmKH6sFujZBNs8pgmfyZJgfUYqLzahSpJNWNrmmWNUF",
  "key8": "5XqaskkEm3FDzXco9VPxVVQzJ2cNhZUSMKsrD22uXn5UgxzDRqwW8PgarzkNU5GjLUpeF9U7v1fJR1XhCdAfk5Dn",
  "key9": "2mrG23EmkJTqnL5xmBJsdpriVfuU4PqXPZF3DsgwvLWYCUn78M2iRBK9FUdpe9Bd3kDHs4GsV8SrphG4Bfq96NsT",
  "key10": "4hAnTGw9yBvohddjvxwnuPHYuR3QuSvZwT156jq6DznPhEu3qv7a11vi3kKg2S5KhvKgTUpeA4LZjYwXWoRyRL2",
  "key11": "3wS1mrt5wUm6ZqrD5pigELTVo2DrDbn8QcfsSvcwzuLjJUm5fDZHduXrD6sQPcbk7BUHb8AaWvBzumQ1DbZiVCuy",
  "key12": "3ntK7oqHyRQKrXTcJ7jJAezpuWXgQV4tiN3Pbdyt7Zq7Tz91By5TP8Fsq719NWkarEsU7P1RxCAD5NJurAqju4a1",
  "key13": "gBBcdtccmQfPZ6VxSyZVe9u3AqhFAmbGJGuyde1uR3Es44JyySShtV8ozokKYjqHZXKaYA4iYuyFy7ZSgCfPLs2",
  "key14": "5VQTfAKKwdFZSE14tZV8BFgVsKPxCYKhbooeV9wBE7qHVxbTNwzSpt5ftwB4VE4tXpGWJ4WJSFw8ppKP7C2H3rjt",
  "key15": "4Ww2mY8Pcac7aGhFCejXkxWdZ2Jw6UsDFk5u1Gp2LsapuDzRESExA9f4WQ5MHQUfMeJv63p6759t1qEx4xBFGsYP",
  "key16": "61S9hCgvvHsPy7m6TmGp4nQmXGHCxDWMKKJ8RvkikwuCHtt9LUm53Mo58ZoZ8jkzFt3QcMMwLuTHixX1aLX5NBL",
  "key17": "3DqLK1UtxjJVPhkvmjJiLoueLttGcGMJCMwn1CMgrMbuTPAeE3XDgy8jtfJm3kPuZz9U87CUk7jrE5CyFck33FLk",
  "key18": "v5UkkaKqWjEZTMVW8Ve8qYbRxEHQY1Q1wnRcBpyMD54yDD8xaVirz2nPr9z2p44J2WxFes2KhHqVd3pUwaB1zcT",
  "key19": "5SsvVoHSu5rBVSwFcVqu3ZGyvAd3KHHmdyx6yWG6hrxKwqiiVMXmy2JXQ73P5RqLAAcEpxkTRBLkyGQuWmAh3a6B",
  "key20": "shEZuwR9V8QHBaVmnjWx1tphyXybQxumCKn9XLCVWMRTfFJpEb3fYMNPnTS6kMPxDPQCon44QMN8Nkcs27ivyQq",
  "key21": "3cjvHkXYyvXQmmpXGziTUrxdm3xRi7epg7pp3vwuqb8i9Wi5SG9iSgjvvCc6o2nWxtBGegB1SK6yAHn7BF9jFvN5",
  "key22": "5UrAE1p7rHFCQsVoobtQbggJjZKpkHprGmwW2vGzcbSPk3RMFZv27f4wLcnm9qs3MfrzEYmYrmcCyGYyFr9qQWi9",
  "key23": "5GisB2ZvRSZnHcyACAcS5qFm77X4qf4jGhW12bQJp4i2yZMYZgxKxsYDRG3kFZ8DbkdV3irBx1Aa8a82HBhUyYfx",
  "key24": "2Jy6n9oaG9ebVXrZeiXAUdo3yTvaDFJhSDkg3CXB2iWJufEYtJ67vRV2kxyccJ4DZt7CcvXb3Sr3EFEgh4KbRrgW",
  "key25": "5n7mTvGkfY8yDz3aiXfhZFNsdHhWur4Qxkem56Qroua362jytG4McKw66Y7Fi199CjCXGLNYQuZmZHpmx6W6Hjwr",
  "key26": "3Ydd8YjZ7JHc6LuHdtgvCZELkES4MFzvrLRqmhmvpqzBjRZmWNzvZYKfNEMqxrkKCRN2hEVNbvYv6KrFhq77J8aV",
  "key27": "5S58G7SwtWFbP7uAF4skG43rm57yihwaDxDfU7MZB5z5z5111rH1ejXQeQWZAAqgnAk2xVoKojGwfYpdKua12unF",
  "key28": "456A6XLBMJYgp2Fj5pykhdmuP3M4EQ3REZVzU4qkR1UgHF6g8tBbzUBCCjSkFp6yLqNNvxKbXByAaZ4rv1xS7oPp",
  "key29": "4cr4GmRa659MpaasgCaT2sngMmVYovfDABjxheQsgWbjnyQSvo2EPG7KgaZG7eKJGDLnSSU7V748YzHhYFizL9Tp",
  "key30": "5KwPPMD3odKcdVvhNURFPsqZ8ohorDGJXv7NKLAyA9jqqGu45S7pXu6b5zGccnDT4atHfKrFcjjDPXZ2FaxV6QXx",
  "key31": "45TaQyzWn1TGpgMi92DQA4ZvKTKbrGigJP3RRe9yLVMGtyTBKkLsFYZgJuomLSmHJQe2tsWQSa1Ym4BSiXzT16hV",
  "key32": "55fQQuA8MTuxPrsMMtDUE7TerGm53f9oUerv4uB5wAMx6kvkmFXUxnranwUt6ASGR7DrvigXRPehC5Uto5hmaeYX",
  "key33": "Ck9WUHndWYAjFBC5NLHeRmXDE2fNmEHBA92UoSxH3pegXR57Sjutjh4RJmE79jKK8vKobfeQLdCbEu7iAhfcuWR",
  "key34": "bVTf1porMhhp8pwQTce2L1w656ycJV7ubNaivHaHzyaEKzXG8pW6yx4zh7VYSL8dfmQrgrdWiysnt6BQSunRswJ",
  "key35": "31YnLk6fRnJK7VYuARHPZPn2NADKUwXoEkyoRCMGnViHvrGRmEbdhPPvmHDr2Xu1z19S2CrrArsFVvqzGAx2nrKE",
  "key36": "4JWSKUvZRgEWG3xarGR1byMiqRVtf5Y1zdJT9cnFL3WvovgwUkswJWdsL93xG5ayq3UtHRGNYsqY9zcYKHwQfZaR",
  "key37": "4S7KPsDxAafmCX3cSDGdY4FtCcknVazvfZo1swJHmAXDQu2DJZjhLdNJeGLY55qoT3NCtB6TK9AAZ3TU7LpnPhLq",
  "key38": "5Qj2DVFZGEkcAm37aQs4c3DUWmhnJCR9LHjyHyX58TLXMKkL141sVJ41LMiL1GYPmPNqEAtmj1PiNEZ6RJLY8qiq",
  "key39": "WXJeU8Gz8wfiAKYRMDc9fKRNMyytnpY7R8MVECdNnnV5tsUhtrgVZhZsTURFh7RN1FgY2w9q3KrZiDht3R9n1Gi",
  "key40": "kw74PxvAUJGjUPpWVr3fHthJw98f2vNeCZ3LZHZLVKbGSZC79B6ARd5vXvnotwnoAZXAAd26e12bk1PbB1ieYBi",
  "key41": "4zXngRX1E4vXajCxcDu8RKkJmMusq4CH8rX96WZ1BghBXrvD568M9sFXb9QXtD4Zrd7G2Pu3cmEi2oYZAcfmqLkp",
  "key42": "KFJHXu625V68FrpFQfvD3ALdMSZGvR3phi35sD4xnD8yEXTtCc8jynM5VTksNgBaQDikMoi8EQvaeEwERhSi5PC",
  "key43": "UrbSchNTiRZTn7nHk4XfnHoimqGmZh1vhuD9gCrjKbaaFsQFPhFNRs5KfM4FPThHkihpcM9JmLJ9y5m9fFBLw6n",
  "key44": "hhRVhWAh6NZhkYp3LGayVXgq6CHGWgMN8p8ZWpftvEkKCejSdCdJnoNqKtMiSHEFaMdUaCTAtmqhaSpa1QTZKUf",
  "key45": "2njXTR428jzLoor69nDgT15k6T6ZhoMFJgm3z7G8rq4pudfhibYwXg46jNAAvhE3fF8KWDBAriM41i8gXR6bBR1o",
  "key46": "2YhvonBP3ta8u9DsVC8dfeu4odhC5oTRi1CPZU7VSQxSLkAeGwcGSDFzvSuFaEKgFEd3LaKkEEW8PSwUYax1URzx",
  "key47": "5Vo2WJjKPubw1RSAczTEihEqCQkXPHLcTZvjEZpWGAQmPai6gX8BTCGQBswTEEMYo9zrqvNN75xkqaTB4Tn43k9r",
  "key48": "47FgP6R7Mk82gtRCCJYWooYh28no4XjKFeMY6uSeUANDjjbd7bjfvwrHocYxqJRACwf7LNoQnr9Z8B7o4Kiuy3A7",
  "key49": "3HG1GfU8mxsiB98PdnQtBSda7fR4asPkThpGKV85fCZvkbbTQnQHNtucY8JYiYRbFrh6b7gBmRp8WJVvBaB9W3vC"
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
