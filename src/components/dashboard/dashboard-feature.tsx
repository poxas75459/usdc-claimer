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
    "zsHhGwUYSRAz19NX2MxEsBPJ61xrBmdAGuVFZYDLc2aGAZRy5KRUdSwoZUoumtxdw1VmV3Fy6hxaM7q1t9TLkt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nf67TwSArAPubQFFC8VtHp9u3bsqUbru6DJbBk4cXPxgTHobRwzJJXc88ZVDp6KeWbCFhw5JosgmkduamcSYW8p",
  "key1": "3ZHbk7z2a1rYqYPUnhXxgrc4i7pXrBXZcsuLDcPTiv21U97e8ddexouHrg4GPj6RFZADZzfCyTBaP9tP28a5j9LK",
  "key2": "4sFgYjvQL5D3sGrP2KaguT9nqgoBAVoRcKA1FBwbTQEuoGvudjJ4fFWsnCGtSjmXdon3JmdyFdp2ZrL2mv1K8Lfe",
  "key3": "3Gnfod4CySrcnDAG6BUsetyzzkHfCSzzafbcrFQD28pFqrU23CCokBVnsCwaH3piuDqYBBbSMzM6vr9c1mDDyZTM",
  "key4": "59fK53xVePhYbnA2BD88LbekyDez6F9Bxwq3V7yEquXaG8Fs7QeC8aPj3VSWoxTNuhKMb7NuckQjBP88ybk3vZEL",
  "key5": "3wMew7gL4waD2kPnrf6g2odELskLvdgevLiVhXvTmG84y1W8LwaHL4S1vYtZQA9PgaNNrkrRYfZ2y9er6Jo3BCne",
  "key6": "4Y24wJNJC2JB8vZLRBazkQCQnGqWijRoZH13s6RtJQejvEeWAZpKcisR1e8W4puiD4wnGyGnPYwXuZn7cSisXSaJ",
  "key7": "5JF13hKSsNb9YY3GH2g3nQWK3tpG7SBe6Dh6FCMnzvT7BuYQyrArp4PP4KWYJTy7EDWeXjBMdU8VdSkBhi3Hyn4k",
  "key8": "2819MpfX2HMepUK7x1YwG4Cb21uuZR8q3ruotVMEigksq3BGrKLv5MD19KP2e86rPtxYfrpS8cGNxjh8o98Aamu7",
  "key9": "3kE1Jzx13qiCVDvQqG5aerZsVtQ4BJ7VfkvFWbLt5xkuPytzfYkXsNmE9HoCbXneLBn8papNh5npymmdWcS5wi7d",
  "key10": "5CZ54gMYb26sPemDZsazF5BeAhYrq2qJJCbKmnMb7djGG8erh1NU98q5SmBbRcWQs6M6p2XkfvnW1dyCBZbCe5uw",
  "key11": "2GZsfb6Mu9b4FBupR3a4eebEzZ35Zh9VWA1Moor2jZq4G7bQZqy2G5hYrit3QV1EGGz76ZbormemUdpE6vQS3YWw",
  "key12": "5V4y5RZxJgxJM5bBTL3MifAip2Xm65PxVDPZAwApZfsgqxYZnec9SLqbPiPuTKbmgtxavWW6KGoVcDRv8UuGz5zv",
  "key13": "kuogUQ5TQefFUXNbpCT2nhFYTVoGX8HC4AiYQVHxfLR3dPeBUnkTeVNi9TZ4bENs3KyiotRLNoH3xuYsYFTBwQy",
  "key14": "324L3WSKZAQDahxCyja1VwAGpS7DzaTFDsKERNJmynpEptgf7Poi8JJU3PyV4SnjzXzif5MpToyGoHbApoLCuAgG",
  "key15": "4vvj2KDhJuca1vpNf1jHmmMEMhWZZceZiNAEZqJ6YomzYujziUFMMdEeSojcfUMSE1Yi4BANZ4SGMbbMMvknuSTx",
  "key16": "43p1KwosD8hw7DwD4zF2oXCoox8XE4CbK8mpFN4RQPXR2qcKip26htBSP1JSXFmX7DM6avzjfcycmgdLnm5X2hyH",
  "key17": "4fmZAe2BmKAxdAQkpnJCMz99nbzP3yAhK8TbnuM94AV6LxnfqFn5BPoHtHKKcspC7YzFYGQCsL8SbEvrZW1QQ35Z",
  "key18": "aWHVskd9ZemykNisG24TedFzLycLE9tcubk6MuSh3ZxmNbrUrUaJE7Tnt9SCUezKyD6MX21shLp1nuTFRPuNxgF",
  "key19": "7EnSzTfDfjkoAsiN9vWHtuUQXzYXMZGDjry8avEUSqSiTj866n2e1gD5iLrUwcEzGPwDXhfGv1h3YpMx9uanA3k",
  "key20": "5W5fcy8ANSMgPdWsHYgFrqqNZEaT2m8gZ4P6h2C3Z5Qjq818Kg3Jo4Tgf5fbKs2ZbcFzQJ2CMyGP3uotCAn6qzPZ",
  "key21": "4DFdUznsPtRQ6ukHJ2uSQi7nHCe4WZUQwR6UXj8VXWkyCQMcjJpWoDWb5e7aBqrK84P7n1WYLipGfDwYSW2xLZDr",
  "key22": "279mqPpBCzJJSxGExWwFF2WYxjgUuTzmtvyFXuFbiQ4j9kde8WG2uXE6uWWYZ74zdHShmroJqryvh6DSeuvUaFFo",
  "key23": "47F4hrA75Quy6STzmXXVdcEqZuLhm24gC5J4Ggb4Z1VTbEeRMAwRP7VuDJkRMpqa5iTzqNgmPHuqBz1HBze1uv9Z",
  "key24": "2TptRC5mPFYBw1LLXQKFVvVT5rc91SK9ECkgwSg1ABwQyPYqhxXdcZDeG3uFuPoxTxB4T72KJ4WM158rQCdQzKSE",
  "key25": "3JXj2zjA11tPVz5U3EoAD1cMfnbCmR5NPaoD2x5Zfxgf9KxmKyNMKEs4NeiLzfgeWf37wuDfAVvd912vUTYumGiz",
  "key26": "4Nq3GQssRh3tVnEd5xkbyHLrpRYd1Re1eryPkMo7LAgb25zcPQ1bMeGywX3rYLPZTQbL9ho3bFz6R1WnQ23krQX5",
  "key27": "59gTW2ZfbMorv9DhcBYq4f6DQ2MNMxQgFTEM2TY5zyyo1gX4nRTzeqL77DNoaPcfbJoHrBuZG9tTQfhcd2cdWyRf",
  "key28": "fuGe3HPghs3Sn6pEWUpmnHoFnUvJPY8CZ43hjmLjX8viY4s5kxQ9cxYJbD2C38KzZJtCqiTtzbdZasRR3AtAs4V",
  "key29": "PhvUbHZWj35jFAKyszB8XwWe1ze6zpDNEHScBiXH3gRdeEYTaQ6JUNcnPRTMz5Sb3jx2YCXS1QPBdQ2UPQZZASM",
  "key30": "5jRecWNxoGzxA3tybU8gAU3SKGsK5vPW1BMumgsAFtAavEHqvbyhY2AUq671GQbvUHB7ScL7r3eiWnWZEPPXb4CE",
  "key31": "47khXnpqiYzFG7pVCPrfdhusYufDD5MW8idah6MEQVdw2H8HjNDSfv3RHYP46jp8cgY2GzXUpWNGWM7qirrqaXxX",
  "key32": "NQabZpWJQiGbeYkFpakjvJNig1c52nfCgdaxfc4s8vJcU4hKHYpJADoWQsx4VuXwxpNsVNStqZ2YfbTJar394sh",
  "key33": "5xJo8fkySoe5gXzB4dH2V8fJWk5i9q9kUqeEymMsZPcZt2KSDZajSPEcw9cdyPAeGXxZ359coLHiGqkGm8Rradj2",
  "key34": "5Jvho2dcrBfopfMjyGPGhTKGYVScQDwjMcawMXfxtd6iMGjSNKb7CLLozx7Fx1N4ByM9JrztXj2sNciksQx9UgEL",
  "key35": "4vhLpm1SHgdbd6sdK45mPDSDGKMAkM5quovww7rpg6vLkvFTcipgWBQf9hnGqV72Kt7sWkLRkgiv8rUzsaVnTTNR",
  "key36": "46XmYeRmspmT3S8n2UpSut4V8MCN9SYstPvThivF45HSiYAbowEvJePuTKx6YPg2pAPskt3kTsfEDCyKP6V83de3",
  "key37": "5U77ffdbajMFk4vXrUZ837XJvpjHvryECjPQPN4HwDnECSQoCcGJtejYPjTADDrHfU6UvgGhwVzUBEkFHmrA5YhK",
  "key38": "4d5XDb4u2Cna89iawGaUQhjy5UyJBuCw5dGFj73y5gbuHQwhADDTjxFFVAfBQUAuP2eUrMD2i5QS6FfQgvZV64fb",
  "key39": "2KPtJ6x67xUvJYavXM47khQyTqEoZocp1bE7bYqnmJ6Aygi1eFEL5rDhLpGVdfHtj3EPg7t4GfwRdDN7JDx3zMjM",
  "key40": "5xnVHTv7mU3UWQ8H5NzE1gzw4sk6JibheatU1UU3G4d7sfdvpS2QUEWjyUGtoPQGuh9x1pP4LdjULquw1GKsV9DG"
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
