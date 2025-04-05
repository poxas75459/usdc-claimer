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
    "X9octeSkeuQgy9eg9QyC24bFWH2G5oPbe3hLLLaa59RWFGU1wXWwz9YDrWAp7VvvJqguTeScRBu8iFgtgxKTzA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgExKCewTSMWJMsqGeL5Fg37HBgMHG3T9gR8JfpX2hL7LwJZ4jbC93EfvtJ1GhPVXUft1iHy3ojSFEPi1Uc9Ai7",
  "key1": "39euBzZhtU31HVti36yghHTNXLeoEa6vYt8pdZKkWoCoUabRQSfbMCP4q6qsY3GTuDcXY7CAgHqknJ3iF9BFDi3D",
  "key2": "378k8fXhS9RGCj3ohPHjmZh2S9ymq4cxa4VKVhYuDehhtHCGc3QvqDgaTpwT37todPkAeG83rexHqUTFwygZwpad",
  "key3": "oLzcHNzDUBb8QRRSG19bjDQwdj9CTMngzQK1WcdnhXMh7A5AtFxpBKV7sWohr8BB71mt29a1Wub8WDvXTJ68wqV",
  "key4": "2SW6Jdro88h3aXY4VqhHtTumiXqtGTPf2shEfqWahBLs1hLkaWfwkc5P2Fc36Hko76g2QtKXiBXmdcaRbz5bgKGY",
  "key5": "CaDreoSRgwqECMajVXoiRDtiJVnTU13yuv5wKGe66VqL1BQBPbRZqwfBHwDw1TLQkMfYXxw2KC7pMytt7tYBKP5",
  "key6": "2QyZvbhnwu5DwNW7bQMegSP1JPWXMFmWyxbikzJS8LKirxgd4xM9TLCCMUV9SsyAAiEHqnYBUofnt1NkTZ4NsDU7",
  "key7": "5zGVSXYwCbv22YoyTL6sevRrZkNTzFeVULc2n44ZGJiUR2gj9xqX26cDqJTvtpXPif5eaT8V7eyD4mJtbdmWwNYf",
  "key8": "5zVCP71PxeYao1o5zeMRRSXrBhYmkEG5xgPaCBk8vX514t5vzFjxsFbEzH6EuGs4t4u9npGY1t9tMLrA86wcyRhv",
  "key9": "5Z9a1ARHpiULscuarhU1AdKwK3nNadongEa1EwVvvoP8dC6F6JPXDVpxCbdDeZrcdi5GTKmwsZqzhuhBhj15d5pE",
  "key10": "5DeUuCHxzxiVL5xG3vMYX9oZLHhVdZVvqZhQRSTmQM9Nc2ZFdVLdZDCuK5exeyYWZE2gG9nAL1rdXdM7RcEXBdtf",
  "key11": "3PaeUrAK4oMeFUvwJrEBQK2YJNFJuXJ8eN93Ezv8RYsqFbvp3XHRvF4CvegMDYYdvcjGJMCVJmpiS3oz6V4a2EKM",
  "key12": "MC8WFTM9saxDzT1BFXQdKNoY8EvStqAdNSBvuN45NKmCWZagcPrTcaurptbuChRoobaJncXDFh8KzduwCi65wZ9",
  "key13": "4ZvGdGvUHPWPUYxJ4Gmkq9NwUG1f9s5Q5G5g8a9q4pqeRwvbRo7j8Eomh5GrLNcemeJsmnkQNzkBL1W97mtZsBh8",
  "key14": "bq8ukzGKRD9rngdqXRdfVRLDVfCZoNpfJGfY8Jn1GoXmfHBKKEmWaaQ1Yuh3pgKdQF636XdBtb5rHRBF9mi67rE",
  "key15": "3UMtTz2WYnErurLLA6LKhNT9e7cNNjtrkkbuAvq16TixrAz3k25Me5ETogkgpYyMx9kgoSmDsyAPkaKgSV1Vqhe",
  "key16": "3VgrAg2U8fdBHx6K3hwoQtWpa2skeXh3ANW3QupVJDGagoebq6119ywy7fgKi67MpUpLyteSB1UmRCJyFfjdHfsr",
  "key17": "62CzjodNMaq4Q6D17eMorDEdax8P94WetftmnuiiNDcH9cW6Sd6vFvFnoE1diXk1SmEnKch4H1Y7htSZ2SDYs9WV",
  "key18": "5z83CZS6ZXUgNqfcNmvf5ucnMPTX9QhaWPSjrqAc6JuH6qbN5FZ1kRUC2xM6fvovKkED4LRqSJ43antCqjNKBdjt",
  "key19": "62hEkBN9MXZSCv9FTNFmak4wuqezx1MBfomyUFbbJgw7dfjBg2XBhiPK4u4DEFex5oW8WodRRwByFSfwyBngitGm",
  "key20": "3RNog9cj6wqcrQAT8UXwhGPMAkDGY6XzRzmBLmqVRzmzmgEe3ksYJ2RjsG9USp2ZdjJ5MLS6CKDeJWCouVJS5KW2",
  "key21": "3btyKMo3E8KiEfVFbBKEfqAvp554EYtDcSmzPKoTFdzMaLkawuMWfGvWJ4zfFVHY7e8reZepKbwQScKoFjC6Z4ss",
  "key22": "3HLvC3NaLZt1a25UVt5VHQnuKa4oLaBQUzYER9FuFJfv2VfiLLwcoR79qJatTd8e4ghfShXLjVhQivEFE6KeyLDE",
  "key23": "5W2Rtib4Sum8TvwKXGac4ERj3Q7q2tEHtaKuXHquPjp7A1XZPyqCv7eekJy5CNVovtRwiBSWss4v72GyYaGMzLvo",
  "key24": "2t17cuBsFgotpAwX6kTJiggMBpEL6HnWywj9HCFAC5XR7KcpTo114j8FrU1k2g3ZoJeKsmGHY7HymkhBiK1S6eqz",
  "key25": "3J3yCVtWKeaHz3sA22tKTxwCbj6yEvMcYPMMb4ay5C4qohKy8LjrbB9mJW67V58p39Khg6QALFJ5niWEfZWmw5D6",
  "key26": "RJDfBSghZEmDrPnQcky1n1nja1J3epEPoWUrgHyK5Qm2cn6WJhqdUZQzRku4ew3CJL94t4uBiJJ4dL27G1jSSm5",
  "key27": "3rMaRXLte9x2qEQu5Hve7dp7uHft9qvEC98pULnUiXumKZhVXKpbRL7ARKNdymhMRra11BBcGzkBuJjboZWdyjD9",
  "key28": "J7Qj9dtixuXnaNBcw15QqMvEVZygyiSQE7SP31cggNX7vojDXPRGsihgNt5Q5KxtZeGtxFWKdorVyupwJgNxV5R",
  "key29": "477CVea32XfpSZ7VrDksSg1gjwU1C6MiP3r2gEyZtQSrpcBnaMJiyCZeTtcjpD9nDcbHLt9EeFisq48jhm8RAetw",
  "key30": "4nTG8LD93RBZKcNZdtUnmHtYi4bVGfNo6rpkSG3cAfV8RhHULWicgandFuqqgeGsnNwWhUTsGEr4gu1YEm4XDCNm",
  "key31": "3B5SwCARgqaM9RpokesWX29pQoUM7svtS9TLnShpxnXm3o98DdzfhGqJRHEotVS7cV3tHNkZqU8ifSRLUMKnWYcP",
  "key32": "4WNU6vpSSSLTAUD89TvMi55ibXfrtPyFxFu64A8hHdJ3Z28WKLugwJThAzGsRpmX6TnywyZdDLyN8aF8DyUg1434",
  "key33": "4aKkBroRn6bL41NVjLWzE4BoF2fguAXNtxJtYM1fWCjuF4T3XA6MC4wqYvbPSXNCzoBgxW1PAhWCQzK4rfjEpaTf",
  "key34": "3Bu3FYUgu512iCRN38fKzd8YHLbqWam4FGFWcoWFHpU8TVyjxeVRWK337ng8obtdxAUqapSsBq1M9g4KEgZeTPA2",
  "key35": "4b1tWFv9yN6v3U7K6ohvNnF2xUsAHDFJr9sxNic8UfmhFcsxvt44rvErAFG883DTjsjacWQFXScDUFBfso1Fumg4",
  "key36": "3ynveLjtSuDPTaZUYKDkKZgoPJJk7hDtUgZVRtVjzEtipaDXD84hD4sQdzu2unKVx4pBKib7hNKDqPNUePftEyDi",
  "key37": "pghBndtcY6shEPB4D8rvc14zod34Ei7ZZUpun8RNG1m2h1sVVyGujLmVHoYmMMQacXFp2hzXSAT4W4ZhfCVKSjU",
  "key38": "3ye9vvYsMUKhrkAiKHe2sKvQ1m1MiQT8nA5V65pCPJkNFHFB6WM1NGa7LmttBFXntnRAWMoKxAZz7Nc1ZEg8MFrm",
  "key39": "4HxgoURBFZ7i2Z8qVEL3gsWPobrdwknK9KLkpav6p246s2YtdgAL4u3TACKenWdNANFoAu8SgVpLNdqzMVxBiVkQ",
  "key40": "8hkSfxqxNAyJ4E3yUijyKF6rtjdafrCNipw7oEHnMNY9PVMP55g8HV2WCZzSP8KYfQnoTz3KfL1vdUSK3BXLa5V",
  "key41": "3i3U7X7YFLaekDWv3LzYAA1ZGuMGJTTuDWJQawkJRqD89DRCNLTz2FKnJdKPXnNxpLzUvpvteVTBznxA1aLGxMvJ",
  "key42": "3nmFcGjk6jGchi74mmK7wGmZc8Uyq7RoXZWQCqMMPexhjGkQgr1BokHKzCX8wiwMsnkkidkkXh2mypMmHSscNLYp",
  "key43": "4fRH9NKj5EnttWEZHE8T3sQNzGPcjdRXWM86dhXcPuB8Nz4UmcTGS2REN74JPZbxvrgka81b7LdV9bMFmZe1P9Ai",
  "key44": "5eCmn62VBUJomS6LcH5rLzFChgaEyQShqutH1BbMPF6ySaEkhUcdJV6sqcGzNn6vATDmFcCuU2WuBUhAZqXg3dFD",
  "key45": "5ebNGrJq2tqK2jgazhsDnNcC4QhLUYm6mWYXZTdVUWvGFwq7vrJqqucieFpDdKvgVjTz2uyyi5taYRqNg7KYPQoF",
  "key46": "4gxyJ4vVfAeQTL2ABykhiKDEwyxhCpH7pqBS6QzMJ3Cos6oqCraTnVTXMdjxKBic4zajYkJ7B1r4BPRbxS8MGsPk"
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
