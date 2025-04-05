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
    "54ZbXPBx1dD77atzd69EWUGukmHDaXDJJHFTcvQtiXHWPD9aUogmurMTmpxQRVvYnGXZdbwPZW8SujHMoVxVCp5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8wRRXqxBtFtxkhAiPWWK7YQvgg5bScg51RbdYrUsPsS88xrjdkrm9RyRnmi1dQJFP3AuqEvMeTP9Crvh9kV9vj",
  "key1": "3fBLWJWFQH3n2TVJDok2dzP41WvuEn32dZD2qzghoPnaS2X3F4SBeTBjBRjnFsKJDMip6XJk5gxFKHJYfPa4Un8F",
  "key2": "3FjzG8ZwpQoAQd86hgzr2thtf7ChB14Ne8eCr67vZVpUShLYYyVa1y84ErgL2vAjxfYt2m9iWnbonn4AXXm3429m",
  "key3": "544gcELaZ9XzwLSEU7iJdhMszME57LvbzHtvzp9GQfkwTa3fJjnBT122xuHQjWxAesjY8gDT8dM5aR29mr8G5i5k",
  "key4": "Pvwfb4PVP1n5ayJ8aqNXS919RaBLY1nzZMoHtRcDpWheqTdR5y5uJsBPwYEEqEdWf2MTbUWqP31w6cB85azqXP3",
  "key5": "4x1y4H8udsmsjKg6ZcMk3VdqNSfEeaQidbUV6rSAxNEVrM3CbUMrXhyLEGmzWRTQBB6zeq24JtzPAMJ7XdHh9dcA",
  "key6": "S2FWfYjf9LoFXHGDhBBMquKa7D18KbZmykxtEisAQULqsfx5rSWBKy9a4N65Jd7uGvqLzn7BzpTWQNttYe6ratd",
  "key7": "3hfMs9xYvkHz18fDXvKHV5UNzNo3iyRtbXN4V76gGMUbx9yWTrNNDJUfvbdgXjmwphgsrifxU4143BgXRhLxwmDn",
  "key8": "583ixrbhp73VQi4oKC8qEZbir9rMEtnDWxdzietFmUXuXRu9p49ua3675buhpYYjvYZN7EVHky2EU2Aa77W7SqXa",
  "key9": "5jytpe2WE8ywJx4RWVtLuFriV2Lbt7rJXjQMUL3ZCnpeGfL4WANuqAUvdmtTvwgmM6czA59jfYxK6pPpKbrUfLK6",
  "key10": "2q2cQoovDPV4BejC7Wc4xLptGtwoTiKyFazE92ZdmTaYGdBmzrH6W5CmbLusVGykwLW4E2Rfk2nPXDLn8gEc8Dai",
  "key11": "5kbKCiTnY4HFcfzqMXLx8MHfKHe8ujLW8sikQ2FmLJD5SVeTwLyxLPyo5pEqwFdUt7P9XvyF169n6fxhj4Yg8wDe",
  "key12": "5g8ikpmkF5VTTYwnorDWDQziJQSf5byQKdGECfHRCizGARuBMkJihiq4r5izfbFU5aj8VsyaWaavdoNMifPPSTgH",
  "key13": "3DFhU3VqfpGorS4hJTJ4MCzguwzcMLqLXPMgtBnnAEEZLVUFj6naYDrNBgYQka2rVqVfCDwMwWRonpQaxkYgwcXJ",
  "key14": "imBPB9nUsARWbqk2nkPiqoKTTZNmQVUNoUtYFZnEH2ZYdJnLRjHpE1fpbuGEftJybM6RxwnfRZa3zw4GGHQ7Rjg",
  "key15": "2nhN6qUkdkNE1GTWA5GAYixYm8PXdcadpVidUv37hEzshrSTt8FiQtdbTBtJmv9gDT3pZ5dRfQveDCJebYGT3kXQ",
  "key16": "3B4aXFXVTJ5pC5ZpscChyV2LW1hXEdN5h5VfmbQuV4X7cBn25yxXdu3YPwmukC2jQnmPyF88eNLfvLmT8pUua4qn",
  "key17": "2Uz3d5pU5xAqsFcixervMUj3mhyb1STKG9wutscNVXZ2PZCTGUFV56rPwmeZaBG49uSuM3ePL3VmK2AWoa9eEzcc",
  "key18": "3pzAqQD1zZ4pcyXNTpC4h3ontTbni7SX1rJ84pp78BYRUbMmEKpxUbXWsJskzUULYxTCEPbPdoUKEmJB3ocbo8B2",
  "key19": "3pVmfYqKvX1rHFq5ZpAcNxqydwBhZfbhqo9RiJhZ2CWfDLc4D9nLdD56Dk4nPuYFmot9wdRqrEDC7QAo28bwJCXY",
  "key20": "p2NWxB2CHcZpvXWzHEtwnZvBLo7RXb4dNck1r2WYyia3Eiu2hgkrPqqLMdaGt5Dj5UZGk1Y5C8ZaNUxUSj6g8UV",
  "key21": "5kNhdjnB1RZwN4NJm95UKv2Um84DA5NckQTub8JTepq6BVaFhUsrbGozsgjPuMUWVrRAkhffZHuLGHNyPFtNNTDW",
  "key22": "ciucVKUxBM6KLZ9UGxpLu7geSPSUoVRatEuGyCfHXXmepEh48Zp7zvHPuYx6Fu8doHFfFVk1GpS6VprtiJTXYQ3",
  "key23": "37DwEgpsivsUoKqvbNr9dUesDsNTTjN5xzAAFNjX5e8WuUkS4No35DMbRBZpUtZ3EbV2x8xHL1DP4TAWpQ8zX35X",
  "key24": "2gqv5wCqioVmR3GTGKQGsBe1CpsKjJEv5mjPe9Rm7Yi4NqKWvSrVp7c2rq7WvxDAx3DgyQMvkMAqzKX31dsVjju3",
  "key25": "2Mk26tdczPkQeev6rL5qVJK7kLCnE3jtZZ3D6RyX6S1zpyCZgYdngZjpQcX3CNEAXnwwR3KxYymGufaLY1BsNn92",
  "key26": "47ey9p7LAVkMtuc69bz6GyFSdk4xdmMaCXZUheiXyoVkKdPxnvyzEKaoi2KfcCAP6WyubFKj4P4TsLikCeLRST4R",
  "key27": "2nGwbSTwvxNxd7yoqfD8hH8Z5UGH77EwsmpYnRQr9aB2EcesgJ5GQJEvvTpUN7sX3BjUu5GNuTWdykHPzDBmpYvT",
  "key28": "9oaAo71ve6Xp1Gqu8eMC8dmj1Dw4ufJwd4PrmGowLcbR5g4zpWo2VDY3Qc7UDaM3Q299AGxUAtwjEhBwUh8grzp",
  "key29": "3Y44yHS97qrnmP1wFN4qSnSBDjFfoeDwrfkpgooNz6dDP2BJs7bchBCVATDunqb9d28vYx9aw9nxv7CjjnqXrssC",
  "key30": "2RkTKJBG7B2zsNg1VExVS7uXiS9p5TtzVGaMZy2at7XHqkaWEZiWwgVa94JgZsEsoCLJpofg1N5yshxxvqeBhhut",
  "key31": "2biSfFv4Hd4RKB74SWDtXJ14jMoNshViWF5m5232ZiaqG2U9aSuEeN4hTfH8RWxoQ4pUPv5t34d6zMT6onxgmZRh",
  "key32": "36HZFHGGtb922H5bjNmguo68N56DEg12XKPkBGxYL63qH6SgtStx2cERkjnBhJo6PcrsorWg6tcHCt8FYqpRZe9m",
  "key33": "4nxVfqVs4pMzKQoyzRMcAsM3RSmwhJbKgjTm1n8QuqyhmLWxyAVRabhdqs3BN5bx5AeV7JE8CAGVD1h3p6TbUReY",
  "key34": "2ZGWKrEDNcrHiPd4oDimoQcXTmN7Lja6SYccSgH6a7G4hFAs4favUb264q9ZFL1YHCxbHcKRA1kEVE4RJWECAPtL",
  "key35": "2m9xMpt1dmECQA2yFwgyDyYXiPriSJ2a8BifQVB9scWJQcY8vJzz1ekY5iFFLEhGRiJDduktv546Sd8PNw4Ld7hF",
  "key36": "ZvZWTEM5BkTVBt5PfkFzTKHXhX7BEoH5XSXyjHiaMT7sCGmDNf8J87eVZmxHEsQaTCmvD2tC93NJy71y2SAyi7S",
  "key37": "56nWRTX6mc8UB2cfgxUsgdMmCaTUDYntM9tfsWKcKhn3mTzF6NPG7VtwEBGzGuxNu4arzJnWRxHKrkUPYYvuYg3d",
  "key38": "5o6cacQCpCW8zNyediogiy6WHu5PPVah5bDLuhg4b5rNVzyEWTnVRoJkNkQ8b93WzrXNEdtc8kjqPrcHzKnhvsov",
  "key39": "gzfidfJd6vjnqprPyHGQRQDzFtVF9bR4M52pnsgV62ioWyuNJgJEjPi7vBdsYcUmUpCSeYpZzE4pN1xvdwH1FEF",
  "key40": "4tZqBmPPoqp1s33FdrAqMhBPrAw12EwqtBtV3ijJLRa5rPMUzmHb8rPfxnHE4LaE5fCNtzwvG2creP53rae8JXZb",
  "key41": "5DhPeZ2hWYSSrQkai9NBYafYKNyN3bgNZdr2Dbcm5Q9bygGNeskDvhR4wib1F9gruo8njJJqWsfrkkwLoGbyyG6y",
  "key42": "67mSAnW4rtTfTedDTBaCkPspT88aAzNVhe7597bzBjQojeN42s6KPir82XaGR2AvtFs3EdLgKRNN3DRk44Nv65j5",
  "key43": "5ZKkGSszZo7eXCfT2Hqhsg3Ab5vuSkm3wXkjior9SfnQugoWFnKepnRx3EHksuiHTEVYv1JcjM14ZN31khQyxyao",
  "key44": "3qc7zLL7QBBiT6ypK1iiKW1xap8kHVA9MheJD3MMXWNEDGgXUeKxYAvZzowcs3RcGUGWP8ur3KkmzjK5VKSvTH49",
  "key45": "3tbXAEBHXyS1knN7pQvvXSWvmB23NxBgFpbhfRenAoxipqGRdd3bhCsdGHWiQ4bYGYjBxrWSwSZwUjN1GAu2vDfJ",
  "key46": "4FWCpcfJWkakuReZyp8SgKLc6Cm2whbsUtWXhjpUZKeWTaDRc8xPEm6y7sLXho2XPsrV6VhA9ZRhm4vTQ4h3mxM3",
  "key47": "4F8PhTMo96LCJtG31sv73UuzbnnH2gK6f4vx8JTYUCFVLwvs37PivfqDKgNDPQpvGKkn5qiyrE7dFvP4utHmgCiZ"
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
