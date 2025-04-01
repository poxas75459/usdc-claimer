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
    "34EuUcSiY9XdhYkyERQT6xMmh1nnNpe7GK2FG2LszMqEQd9r8YBzjGxFJrFznqP36B7ecMAhkMagiAs6vebMm24Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "485FRYkrmjGXiQeJH8yiVPVhXdCNg4xFV4NvTPqY6NZu2Ka8Zmio3smnCz15PN53BzgFWh18o36G4LYaNPphomdc",
  "key1": "49KUsLbz2brQ8FAikHYjdQPm9yzHYk5rbxAJyqn8u3cbiJeHJbADVgq6cUie9uDZFxYyjNoiKuVAN4T7aaptNtGp",
  "key2": "5wAT9WSWe8VQerXSEkN6BLHvK7TuAdkgykpBqrC4LFrJDTZ3oafoBxZXozioxjcXajf22wJRs6os9STLkKsJQvoC",
  "key3": "QA25f7TiUcU3gk3LeWyP2kNvwcGDPMqU2oVf2xmJ6yjpbHFT2BssYTcpPxBace7yzKpFHf9mfujPKFNerqAFRXq",
  "key4": "2fdFHbNuFWopz6pfNi2VhCAy7SuSjMsNaShUwfBHYoLfLKcNw1afjH32T9FgPx5cyjMD6375B4mSMEPDQzpHP8TL",
  "key5": "5rLuTRLjMCGPhgaPETe32eJmu9cfmY8LsR2vnXCNuK2EwozuZTbs6ZXHPT2a9rGQieKHi6Ss73Ku1rfUvJ8dD9r9",
  "key6": "59e6SsNuy6Br3Wf7NqMhQJ7BntUnpBHW6aNPff8hDW9myXhw8Mca8Sa49ZfdHzznyjkVeWryrfAkCe7cs22AKU52",
  "key7": "UZcdeVMMP1JjqMfArjcHqkNfpKARwvQpShW3A9ScpVCupzZkWaXYfuuDie5iBBSrt2y5aE2m8M8BhQoRbkXr7pB",
  "key8": "2NFBob5LrAztZg4YEUsSCGypPVrvTtnDKm7RpVt3QtoyTFZJXEMXBeBZS46XevVdUh1BDoeCjNfk2fWqhfPxmdvi",
  "key9": "2xUx5WNvmxceQ5z2aD9SFKsmi45oaxfLAYjpSH6xntUkEXmyE9HeiATxzPTnVXAVRcBdjncEyzvT8psJvjFQfijN",
  "key10": "5XPjGeXvaczodRiriKZqZUWULJBnBCfRmRt1ZqsZTpxBd55RLhaRHejLxEnpw5WxVUrq8MHbAdw9w72Xt8AyvdWn",
  "key11": "4oRomZp1ddiTYcxSSQX5xGNJmEasBokkKNbcmWBKsrecDBkfxoD7nEAfMjoQk5zVDCTvgSMv2mE35etcthLoJm6N",
  "key12": "25JE2XRRbP5errSe1J81GYHcmFrQwsVrvtLNod6PQC3X2K4xnj4cHFipXgYkRnqMDmzTZ45stGKdtNeDmNQrYDyN",
  "key13": "66yjzXDrTXqr31j1Erw67P9NXNHus98fSa4MwTVoTxMj5s2YKoxHyQcG7Gr5kKbKkSN3bPRrRZURe4ZQiE8Qg9we",
  "key14": "3L8ZBQsVWAi7nhPhh1MHwsxwBx21zdF8NKWVZGcJyqjtpowpEFKoSdAcQ1sYMNo6dS8pi2GHWGgfeSqL8m2W13CH",
  "key15": "5hf5GhcyxozMpabLihtvn2m61cEWjNWRZaqfcS6s6cgBMDdSYzFPrnXwRndess6dFccJMpYsTNdxqfYNKru5LDR4",
  "key16": "2wkoZUgGGd3WwJhSnLtntfdgCSjKBrxhndAd7bdVbPm4ki1pKLVHzWCyBttZQHBvZpmrCxrEDBSx5AF94tLCiGC5",
  "key17": "65o2m5yAubGbr5V1oYR8mLANnuE6zEd6DYsm8qDPn9Xd28gjWDJE8s1HLvyqtff1YagfDFaPytg1nTxbPxvAAEMD",
  "key18": "4r4nbJPRUFzh8nMFtYj4mr4pTwTuRoz3vmQLeP9E7a7nEevQ4iyxN9rc6a9W7gUiv4Xv83hP3mU1nMfyK8JUxKLX",
  "key19": "3JfBzSHzec6Z9mxbXgTVw9zk2DvEzmtMV6LqgTd6Pks7Nrkzs6caRbEw4g2MC3W4xWf3djsBMHMpdaeMjDLt8rLv",
  "key20": "5biv5bppxuTUGgdPMv4UufX4UkPmbP2do3Gxdwgaheb334HVqVtk4ejcVNv4p3EUuX92UDxrTvoirZqWvMh3SAfN",
  "key21": "3kTeGar6H6PZxDg6CxNdHfadgQH9NDh1cRSxbCa2twhWSqZ8E8DPETsLM4cHZXtY4rnyZe3XQYMcptNm4RDNzpqY",
  "key22": "3AcAgKUsT8PH2cCLfZuFL67VNmvyD3ow4yWeSADjRDZVacZtWM8qwLu5r3FXZK46cghhYbkCwfNqFi21X2xKGCP1",
  "key23": "3JsHeZ8eeQMBXZzZZAawWEnb8U3RBrUtFt8jJsFGMiQy5pgmeWWfNrXWKFRYvTK3s4gqpquXaQhf12KuKSxJ6mfE",
  "key24": "4R7EGaVExS8Mo9npfdU5RBdR9mBdr5cZmiZJpE65qUpWKDNJdW3KqDfvqAu1CmvGXBGkvyiz86kfjmNdpjuHrCfw",
  "key25": "Kgf4gd1pakbcybYw4oySWJ1q3ANMFCNY7DX6FrvuoPtp2UJbzenETfKUPzqZafaPm6zs7r1BTrP5VvJnqnn3qHB",
  "key26": "4UdM2mDV8SEi6rqz6WehG96S7Fvumi54tSwmJXiDKWTXnTfKjJ8vgaodkDtKNcRAEf6ah4oaReW4LRBko7kCugnG",
  "key27": "3v8RksyJeNEuLDAGm3y83NxyefyrN3JQAc4WugiiSYTXeFuPds1GMzXrpsiqyXKufyvGRfetmav4p6DgTB5S5gEE",
  "key28": "4inJBunybnxscnuHwP5SQt7QsJCSvTpZFB2wjPDgBkqhWG5qn6MPZ6UaDQmyJu3zLS6h77Lw1VRaMnYQEpzDsYbd",
  "key29": "3HsiNtP3zP1v4TfTusNTbCRKXDv4jvcP2QTAWZyEsiXMnVKpjn2qdtqaSM9HvwZhSgAr7bovewT3ijtdc1Ufg4Kg",
  "key30": "iRGFV41cm6cZ6qrjEo247CEGUVH1QaUrCyTg782HAf767zJhXapsdMGmNi4dRm3tj1qbNgPs1BrQYCPGEEJQvSA",
  "key31": "eUu9sAnLkThrdY6mqCkYQsyX9rwCdT4xGLXKgEHwFDbpw9mTjMkyT4ZdLTut5z5EFztdDwUZsCoSa4XDKQASAMD",
  "key32": "3EX7GcTbZJUmNppsjdhKNyEXsjQLxM1xcu9Em9Mhx3nTf2B7DjReXUVCfQNTsRPwsW2gD9miYgwHywdR8JTxafp7",
  "key33": "2Hm6nA73N1BuDLLdiwgHwvtzqCauqNyhU5Fsfc5qnaupazesjyxWmac3fr4sLcM5mEqDt3YYdz2XitjWP7W1QjxJ",
  "key34": "dmSc2tMWWiaDact1PBa9svUFiWkufUhNvyEBgToeYfPVhdG5DDUDGUVckBSBD9Ez7Yn3J1b86Qg8yDiiZzKNtro",
  "key35": "3g89M4WYpbRjMAcnuDNYKeHSAxsCn7FtnG3H1MfCNUEWfWXkBENwfAXLtfx7CY7AS8W2nsUCvxr3vhGqtUD2gPk1",
  "key36": "5KSDipe1qFXCr4u1q64nbRtxsiP9uUmNxUbK8M3aFAwYQ4aCg9yWn6hiWusLm7ogGPhDwQV6QEELgGbkKQk83sdg",
  "key37": "5Q9vLvrHH1BcM8CbYmqVTbkKcrMfq74TP6mJE4fxCLG6iZG3qXNoWkeDBc8hooMaZo4qNTPhGVvxToSTQPqE5Z1f",
  "key38": "3E7hXtvanLA3dGMg2KffssfzVyYacyAR3CrSwW25tqqXdq3VMwVymd8shrVefGj4QS2o59JCPxPLnaKqVpFN8caP",
  "key39": "5dRVJqnct8XDcfPjgmnYSqEdmFZqgnP3fZjKgK6DrPbwrvj6yDbEnQ6Jgaf8TuyTft8LumZNr7khGbt4buWLZ8vB",
  "key40": "3qyZrtL2yPAuREFKfuZsonT7nvLb77kpBeS7pQnBYTnNqUuTcdprbXHvFdZQG9C1uPxa6bxEJkUbsSkAi38GzGK8",
  "key41": "2QnRyqa7AXYGEvtbvFucWEorC7Y2hip69uY4q2bUBgpKR3UjmWR68UDvdUEqzZEjVYYZeJq7yrobwR9noKd7qmGU",
  "key42": "2BmKq2XY1Znj4unb3wruLuCeGzYqejQtBDT18YRnD8w4pH3zHruieius5GasUcmWtfjb2gwRFfK2w9RwaDuCqA5Q"
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
