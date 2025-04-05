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
    "5HD2sbwmhfUxkx6QJAHfSv3CcfPWXbipyNvv7hNoGjK3gueUQM1NYpeyegrEhbSddLAUusJsaRKYMyr73VzuhfRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48AcZCE9UpwSVJSzSV9Vz8MUGt1EPRph6S1f4WKTkjot19QcrS5ubqspk6AU4JWUKutmoq2QXpKqR4EtzNkXy6hG",
  "key1": "4oRUb4a3E6BMxLG6cD5TGhZ9qNSH2b2feHygXRBN2s18DRk3nxzuhzeBmz4mLq4kgFz7R2fwNM2gYChQ5YdDfeKz",
  "key2": "LYcCXWySRXYvJU6CDqMaHzsgzeR2NQx3bPbLJ9XeS72Uk16rzB5Ek5hobAhGPWWVxPxEdamHJMBnK9h7GrQP6DH",
  "key3": "3FUGwk9EM46uDLnyzepEQoa88ny6TkQE5kq14N6C1mqMb4gT5wQALP6cV5KYV49vgQUJ7Uy1QS2nfYCGkEjBfx11",
  "key4": "5iHoappkFmT7FjA7D7QnMjEEPtA154wQjm1ZcPr8pHP8En3fdxyGKX6t6Tw63dEVy1BZrFsot3TaDcKVB8a4AcFP",
  "key5": "3FhooUqRzs79r6NKUGYaBn8uDAK981t6CpWfAGbX4HRYRtt7XzeoyAdDgx4VFZte16s5idJMiFLebLXUsNTFnUz9",
  "key6": "2utR5tSxqgYPes4vcrkxikCSQCWMZrTGdwxd6v2ZqmbfB9rjRXRJcnQwhqT7cs66QgRoohtvnNz6N1dekAE531x1",
  "key7": "3mWQMRmJch7MofBJN4YUAqDBYMsGoCbFeRsjPgu8saUZAobUB1s3uv261MfLiJTZMuAta8mGnbhFDHgH2tdScgKe",
  "key8": "5hsFtwTaRZTeUKpYqB3Q3Aqhri9gUwcS8RYLkWSUuutYs3QwHcWR6hvTMAp74V1CVereEuKS5BCcLie2fZgXLnL5",
  "key9": "4twWwkh83HFfmSorLittyVhwZyoYDYUven6ehMgXVHF2Xu5B2EXesUNeRNLcSwYAhrm18SdahH68SWnuXJuj6CMG",
  "key10": "NVQymMvPug842MxiK1sdRVHpiFnYtmM5Fu3VgbVoxzahxZsg6M94NCt8P6EcE3TxaQn16j2eaCrRBVdz8m896M1",
  "key11": "4ieh8BWiy94gHp7Tgk9pTpq39DD43sSWjSor2uXrr2hDtsGm6xWJWs5MQHzuiRHeQiFmV29DB23Rid6Ly2eKoATp",
  "key12": "5koRJAbaVatVDskYy5NnQ4N8kbtMmVQHLD2WVRJGFEdcDnoLYSL5M3zw8mD9jQ8zV1YripZmLi8LckFY7ozgF82z",
  "key13": "3UK9YhSvcXF1E3RawU1qvPuVXqyDT9LgggAsTFDmYjM59zHUP5f1u2fRhv4arEqVkbpm1tMFWv3q4WWRqWQurVAJ",
  "key14": "51yEqpbfU2gqvqXLTFXqEYWH4LcM21twosX7QAoQY2VEeVJZZeB2tQQud519B62VZFPMn9TFVFgGtrXWaKPm5TAA",
  "key15": "5zx1wvtEhFEPqtLvuRKHwEEvTUbMaZVZCquuGSPAr9ZkDEoeNqAj2LFhHonebMcKZdJBDBTyqyroo44eRQGCisEn",
  "key16": "3G6toe3aJZsaxB6sS113HSowqYbyNSDW7z6ecysf6k2ZuRCkm7gE8y9c9HriBDwSrs136sLhWqJxgPQi8YWgR93U",
  "key17": "5t6MLAAArvmX94ePBp89N9hk88HTc6DMakSjtjCVsd4WnNJ1BGk5qvrS65y32cKPDVXTBKEuXq3fubE6LuVBowft",
  "key18": "4LbNpKZgsU2TstGDApxTHnJ2pJCkcjjmet8fX6Lw1P54vk93KG1wrzRUaEHMcLNvcC5L5E6xZ7uiEk9M3MMkYhMz",
  "key19": "4iaXbytWftXnLkZSQL5j2b5roSTYid1TpoixXHpbjSzDYio1qwbAAFiTy5rBDaUEPhhBFDqjNrN1WBC5JgMXE6f2",
  "key20": "3T5wpup5sW4peAZtkLHbYbXsezuM2PiRmAi8eBhpfxnP3MEtSNLa6ipfwZHygfd7oyXjA5eY2gjNF3UJR3Hb45nn",
  "key21": "gyb6Vohm8S2Q57WwHhGwi3HxhTzCcERTAjgoTUiswrHxZY6bQdcM7JZhsMeEyULMJ9bMFDhnS6xU3A6d3mrXmvu",
  "key22": "2fZi5q7fBq3VX39NgDSXRFTNk2gxeA5hMD14BHn733T718Cmz8uunCiaQY1Uyg8fSnMFpHSJ8gqHTpuU8TnPxiFb",
  "key23": "2xJ4b7Cy7jAmaaHsCdRrQ3WXJCp6u3NvxEYjwnQBFvqRWYfYhjEXckLspEKkpbPmVKpG8VahU9bPh7nLEXkBZ9Uc",
  "key24": "59bmPaieZJhSpkN7ZX7E49vV1CASioVvbJSC3gyNwH4fcpjinrd3W2sUtK6JX9mbcCWNwpGCRsSSgUUB8qhq56Sg",
  "key25": "2Rbtvr7o9kNCmZiv5ErbxbPbwjqdhZ2MqeTc4DSSqdW9vyqJrQU1TWAjrY6jEcP6mvCqru3fWb2nrsouJ1Z1JHoE",
  "key26": "31jjF9HerzRUjDy9Y8K14vf4c5heJSXubWTMqnMLRVyU3aqr76tz6aDnz33okvg28B7sEuRCksecVQXTmcfZ3NFz",
  "key27": "4CavpVeNPicm295kUoKdmp2fotbhMjNpXtPBW4svZBtyMArRG8bFsNF6toJb1FVD4QusZkJ95BapWVPzBWLk7JdF",
  "key28": "3FL7Fxw7JrCjTXMCd7LFP8QTTMnCBa1jkiXoagBi8BoDrRH86vZTVEybUeKWQHRtKRAiknCyTCfi8ZKw716wZUc",
  "key29": "4JdLQu27961SyG7Yq9nZ158z47Pnco21v4YvWsnmTxcLmfoSgio9vbXxTZSepWxMB6xMXFKbgDZ8RPNUvkY43wW8",
  "key30": "3aoCXRLVfXQDeA5F1vj64i4s1UbTwGmkFoMEtBxgaXoazfpvnytGKcjbbtJezBXQSzNfw4TmV4zic1PYvWbNX2Zu",
  "key31": "29V875Ledvi8NuQEG9dyRTtCvJhwWUHhi21mgiH1ACZbE7tawKNgb2MmFyvyMnZLq6NNpW6nDFWVUhkWRmbAhbAX",
  "key32": "Z3aAM1tkYBC1F7DCGgrGu4N51gW3S4kq65uRnh6nBTHbYHeUdSMDz1bntb6L5sMuuPbwabjwrug5yD9vAk54GKu",
  "key33": "225QFUBe2HwtK4pe2WfFD7F9X5AZXEPaZd4g2kdjd7mLrSeJf6tmxP1UjV88KHnn3WX5zSnMc9qMP9QpJgFVyJBV",
  "key34": "4xQzAoZNk4AMVVJC92YFiZJboHxaCxamEKAfLVY9gCTGYgPzu2DBgS2uWK4zJ1mX4dL6tdb8cPoJHt5GxQ6HgjYs",
  "key35": "3LMRyLgMidXTVteKb7xJWdscj4SkbuZV98dXGWRotGcrhx1o4hEnFpEShuWejY1GPsBjH56qNZfJ2JL41fKoBtNW",
  "key36": "4yhTErp2VMkQJdxCRK754zJoouBASYbc3DXzgRr8w45Z9ev9Qutz4wrgChA7mtr2EmydFwaSSez4heY7Vs48NhTo",
  "key37": "4T9B3HFppf3Y8vEPCZ4uLiSmVyLDZvtk5cKz2fK2H5HHJNznTTEeiAr7ZU8znf56vbKQ8hCHvE444YPAm94Ni6S3",
  "key38": "2KxQoSXzWCw12Y9oK9FWcxXqc6NyYK1hE46fyAxCNQXBuJu9whCxUKMcWhpu5oUckz871T7YnZswA4nmDjZNaN6y",
  "key39": "nrcR9tHSQkxuL6aPe3hQ3f7Jeau1JTQZEkKhzRBZnwMrP8xTLHxR3sfNpRbmDynLQBL5JDCmSpBHifC45iP2LW5",
  "key40": "59Nb5uURaTdZeW4Cjv7ysMvZyqPrZ1m6TmaCGdBdej1XL3kPMbXMUGVsk8vJiaJGaiNJHFwbEnnPa4RJdPiFQXJd",
  "key41": "4FgjsRF6qm24bK1xuDABEuGU6z4eBAX6WnY8D67zxCwGbKPXpZRwdzEPj8BXFDFFqcahozTLt9UYEB6ohePzHVKo",
  "key42": "2p5yp57XGMGq18pBUbYWxwuhGa95DBAizHVCbqkPwPAknbdn2VjZkB1eKUu7VN4j5Br9GrqLj3Mhq68wV32YUpRt",
  "key43": "pW7X5VQM7NBxykxwfJoFqw3uQFSRNBK7xi3uTRmtqwYzxfUFT3KXkjXjJE7PxGdB73HXTVwuX8uYHxqdCew5vmg",
  "key44": "4QX42kBEMzAtXFxBACfxDaZxB5SjqPxZMUYFfwXe9R2Uy4CjRVzBZcesaYMFKr1yU1QVrEws6AduXZL6tQBZd2Yp",
  "key45": "3WTv7p7pKvNrjdkSae4UkG4UgzG2FikY3jd8eyRynMddbnduGdFjbSpfnYGirtVo8G5qjdc7nrJLpoc3SRSCXQfb",
  "key46": "gy8R2CB7ayt9RaDMJKJDuPt83PwfqTQPud71UzgN1ZowYq1RimzE4KQfbgHQu2DkNxmtNnSv1mWRx2NU3eUKM3F",
  "key47": "5BccGqsxr9FNTVUxATftjcmdjvGCWqHQRcizyHs6xBWFsqdhANorJZPg1o7x41vj9bvvTESp4qzi2g7ZkDgQZmC8",
  "key48": "3cC9fnUBxcSpmNuL774AUyvBy6oMnF6542UGZbtBA1zgUkrQvQbGs7iJ9WnkagHu6q26NQ1WjZR4FjAuATYbmaMr",
  "key49": "5CtWvFh9Dr5mo8XoUj5zGEbqr8WZUKpAeSWYA4GJDrDVHoFMHxufkZBccZdLd2JGG1F9wwfQBKabtZTPU7WQM6Bb"
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
