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
    "42fMg3EYPuYeDiymspagMPBuFDUc4GEGKMQpwjfXta9jNaMuddAv1GvDU5eEwLCbnn1DPAR5ADktXuEzaasMNyvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FdANMUCf2GLyY1LTmfeDq7rEtCTrgPoBs6nGisSnRHPEizur9ueXArXmWQQCueUW8aswdGRmLqPp3mzwcZFhgXV",
  "key1": "5K4GvvEqxFAdksnpsrR25n9q4bvnKS8rpHPvfRTBAiobVjbTmHFHV2vvLvNsua3frVDwdGH553o4btCyzYsgrS1t",
  "key2": "3jz1WEbYKT1rVXj3uweG73CwXpEG8NPS7n7oB3RyQtsYzjrfZUhxXa4kc76ZjaSWiF7VmoxDWxMidY9SYX9w63Sz",
  "key3": "BmAKaGyV8oDvvcv1KcmFMZrW9RqQ5E6bQ2fXNnNVqPiVHZHsEEJgysMeerQhUTiz9wf9KY5Vyt9yh93XRK2ZNxA",
  "key4": "uaAaYxkGW9PL4ApuG8S4T83fLLGmCwYKDVgZ9X8X8FgEFqV3pHdycyvRZHwEzauWHNwmZUgQstkEKGxSAXqwhks",
  "key5": "27vgunV1BFhqWDLpE5r2K28h7iBT3fWQAxy7S5SJe389aSAAwhMFWXrihktajEsNZEf9g4M9gvr3EwehpddrMkgV",
  "key6": "4558ERLAVrr4v1ERFTMpm8eoRnb7ycRm4AdCmr2QyavTb43rH8JsjjX2vP23KM7CVvUz2rjzd5xdTYBSvxtbknbd",
  "key7": "473S3xSZAJxxoL1Jveivk3L7guXstsVocVbpt3iThdhyYMEduMtd73d3fzEVA6i8Wsp8rcLJuNVeqp8Gdq9sdHTo",
  "key8": "5Nye8p89Dq9MbMw4LbjSVBUHjwFHFzrf4GUQYmbJhfiAKtPiMGXAtQgfkeLt87qQEykiXX3wTjwxtZQZDn1BWQ7m",
  "key9": "3FSYnxhTf5UZ4emxw8WD65jy6jr9x4bBDF5pniSybxKKVSKQm7ckBVWjWdzw5Y9KmL8EZ3y6dSGBpW3JpUYhCeiT",
  "key10": "uzMW8vKnW98uQ4e7qaaqNrx58hYqiiSBQMTtim8V4McUPQuhPHo4KrnE4tyZjYsEf1iLrD5Dvs4eas3J2TFP7Wx",
  "key11": "BzKpzUyhWspEPeZZn8tHUmdToNtW49uxRs4EZ48R8yN9Tc2shCyqpUYcLkjjoxg6NMq5DS51ZwswQ3d8uX72vgx",
  "key12": "MvNm89gFJn6a5CJxme84Yij2Qtn3PPAjrphfqbDnE1moDBuPZKYJ2DMVfAaFSeL5v6UKuyT9mDbERFgC21prRws",
  "key13": "2CSNW748j8cWyMNA2rezWfi4kjXqLDW2PomUuyZBAirTae9XifZiNkBwfFXGUB22qwXnMazsjB4HRRhR2xD9SeNc",
  "key14": "58hRsmWvXTZD2KqVwb7P1rbAiNeYJqVBJHSUATqgHXmN1o8n6SVbaRb2hPShEtLRD3RRFo5upJTBrWhxYsowTHq4",
  "key15": "5aSafsExuuPPhmput2PHuRpXzJXs3WmZDxVS823WYh5CvK6BMgL47f3wsHAQc7g6AeZcnzmXYHj7AkTSYKMLk63u",
  "key16": "5VGBVaWtMvoPvYjmE6pQH3DwmWoxiyXMCbsuW19dhydvQv26C5MEiEzxq146j67rozVG2AdCap6zki56rHr8Tr8U",
  "key17": "25b33iDgtFddAUBHG69k4sRYh9sh3NofMXVwWzdViGC4U7c8XunqTt2XdTBhNJYqLuSWfdiDUyPSxPdWrnJzEJJE",
  "key18": "vzjqkJ1guDDpKEbddey5jZBCQg8zJKZRnGVggpQSkFjUT9718pFjpDasyCT4Dmy113tvDnpNRignAudFDyjKTBT",
  "key19": "4aXDn2BqGRiNBtRcW4bcjA1Nk6FMhRbN85fAPhqfiht2VHTQ134JNkzkXnMbmJ5CYMKJy3UnnM8bobLbQqEyaCQP",
  "key20": "3VWbTBx6VKQTsrJVJAmxEFFecNSsRRgQJum5rHHtE164xsAuhd6UQP4M463U21ECeQXU1dhASAthheH7W13ZSZSw",
  "key21": "j4B2AB7Amjufg69DN1A6be6qsuzpGmV2cEbTUg8JBv1KBhF2LRALwEfdV6eroYE2ZFJzBLeYPqd5qByGwWpAc6q",
  "key22": "DpCfSQuh6pu5vYpKRRsSR28kkZoifHihLvpRPG7F9R8J2dP8evxK7cZPY8DQnwjjAkz3Jego2aCcYseK7Ai9xvA",
  "key23": "4oNUyDSgixc7FzuRjCTmk3AJZAD7M8e1CLzEFUwugcidJ9cHVjKzRN1XTSQ8PK4WkYBovA3CzUx5VMWUoNWm1ypT",
  "key24": "21AbwAXnPfxxMjKWjjURVnpbdxyAovVR7mb5g6MDTUAVPQrqWmyiRcsGuWVupgFbmjJqfnsRWb4PU2uPsxjSgpYG",
  "key25": "56mvxFUAnmjnHp6tFQAKYSPmz2mPhhdqiswcqp8oBn5fodnAHhLQVThFoVFCUjhKSR9xfZy4iXCKzKb1nBfVYsoA",
  "key26": "46ReytLHyX3vALqYkteGPomGDua5Tvhijs2D7cdrFAcQ8W5Eq7zifKXjhSM2peEJEnfpdJCva79DQNDYTh2AZ24P",
  "key27": "3evC6gSijHZCdxuQDJpCdRmfeSaf6NeMCtxkE1gTBVfzzrEubbJsA1rGnBP2zR98GHFpDh4WevAT1R7h1RCVNfZw",
  "key28": "2fgo1udrbS6biE2RmQGHR9u4vVxx4NCLF77boLaiNjDdiwCn7koxeA7Af3RVbxqe6fjV1J9xGsg2cpeaYwMd6qLv",
  "key29": "2YNDzp7kPHFk6pKMUq2QzP32RkZo96uZSof1ECfpP5jXgYswRJYvhfMknfXggdwp3VkiLTgK1uNojQNk5PtzCaTB",
  "key30": "5wFQeDs9NwjmoxYWdnciJNRfWZxRX8oQRjAGDsC5D98emeva1ASrQALrbH3TySKexWM34VuCHRim924vUtn4EmCt",
  "key31": "4K2QKUcbaf63rNM1qUQXJB7o54mVitxXP4aNsT6eGNP6L2bwhfbpUunH3JyCqkN3Lyo3F1Miu1tYdv5qZeK84GP9",
  "key32": "4EZaNeqdJChwRgQD6PAvgBwurwszZtyg9Ljxsa9Rt2f98i1Qjxw3jbbTE2RePa7Ka71W3KMN9jbHjJSjNi5oKGnk",
  "key33": "46aymYQXafMsKECUTTEQ4FKAm6y8pDDpPe3ubBWoZrkJmC1snayJCHTdmWsLDB3SjudvvJk8KEmZdxeMekNLSEc4",
  "key34": "4Tfi1vYZkTHAHVFP1bJSQEung5ev86NNEjnyWEeAFgJbG5J3zQQVhiimUdisUjvzgCWSFFNqvPKTTJftXQNog4mV",
  "key35": "2p2Q3tAqBrzpRs4rag9iSuheu9FvqbbtHfq5ZAM3YYmXa4gvhWH6xnpLj8Bg13eXuQVz1Tzh5hwLw1NShoHNgJc7",
  "key36": "26fHnBpJhAjfdkaY9UAGHhAnsMFCsrmcpKxG1qgpRzdFqbGeV1mvbBBgxpaJKezHZBTXGuJpjhgiJ1D1pQyRcHq4",
  "key37": "25r3bAeto6FovrcLsWwNR1TfFfLLZLnxKJfRrv7gFYvpHBJeYxsWDGX3f3JbCsNCn3dHbVRCwYUyfidwPtNucQX3",
  "key38": "DaPNVtNC3k9hyvEoc3aM4N2Kdr9kVgw4XoebF5sFZEYJVRc4erzT4rQWJSN89pJMBarFtFALcBRCD7VDKrn8ZWE",
  "key39": "3GiAWj68hNiv8P7EnKSKQUEaSzCUn7VZnAX49E1KvR4kox9p8paSE7jQ6z2jpiEpSaMQ5Q21NNNirHV2faWQis7Z",
  "key40": "172SfVioVbMhVYshQUMP2tqh9BCavsuQKQMyqZQheUF7rLiGMouC9GwruY5HhDnyUCypWEei8TZMZNGa32uQiZU",
  "key41": "w2LPV7TPGdcnxDFc2DTsk2wWq8b48ma2mZk9ZgsveTeGjsJ15XyQ7yLxPoNKiV65fpVpCaV1FsjKaESbu96UAn2",
  "key42": "coxQFfPGKp7SzQKi2VXUnFanB2FxgFz8xX4kLL4PwAnWptg8XvCwNNN6eENQxUdaRECBrNAURRMGZy13Wt4Leow",
  "key43": "56Uab1xrUU1fXg5ypdyXK3PQfMxzdecVv47JDR4oMA2Hu29AtYP4FGoHzeh6UAusPc9fyNcMGiibvZeouDPFSijP"
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
