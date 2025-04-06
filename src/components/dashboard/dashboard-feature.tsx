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
    "33hsiekUD5XjpL68V8oFjU8VUVrfnNss2Zeq6YtvQx3GvyUND6sEW5L2MqrdCHW4GfzMNTySVVFtSVDvJLUqjs71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EzmEGLpwrbEs5RPxPaPaxaRxvXCbegUBdETjJdxZ9W9oVwfnCXWi3cyb6eYcg3B6U84a6QCpqMpsZb7Pd3Xc6ZQ",
  "key1": "5HVatRLy7rfDt1E91MELNTGCSvHfNFdTd6bzYvSTYwF25yvBQiLcXW2Shw86EwL6q4firDAFi1K9EEy7YmcQ9Zdi",
  "key2": "23jiPpGX9GCnY8bm9dvvbHnjDKGZeKLaWLKaTuMMrPPUaWKFDnvaRk6isvNQCSF4eb4a8B3kmpHiv8CKjQmD7LBR",
  "key3": "49KnYLZLmtCkGkhwEG8oxhDbXZ6p72kDfru6Mh9GyY46D3n1JwJczdFReqjaRi453THBssm6UycEWp156YXjHdY5",
  "key4": "43M3d2QxQF6bRxqprMMNHfVFPQH2yjvVqWBN3B2J5DsLdEy5pJn1ScpjJMtzv6bMZcj8TjDRnb8tiKF2H1mzbvH5",
  "key5": "5YimJF2PwwKvVsXERpGuA6jWiXKPDK9hrVb1brZawQN3cMxHKnzSxKxmvkwmu2Jifm2GeMWzqh92rrw4zi6z1D9a",
  "key6": "TAYsdhN34ZPEQhbhqZogVZ76wdiCq3c6uyiYmBy1BWTfaD2Bbq5sjXTpGTbPMFBeX449KKmHFk8VmE4Z5PAd62W",
  "key7": "5YJhFiBWc329Ks5rV3yrJmC1nRgVkUdgtbLXGq7kdvd3r8Ua6GmmiqohxdDFihykBmmXNfN2ZZNjJ3XrQfFx4vik",
  "key8": "ZawnXsNC8xZSE4GER3oTUTRNsEGndR1ey96Mygy7vUjM5F1Ab3wBEvGQKRNK3s6rFPUo6F3YZHuXSsFhWgdEKdw",
  "key9": "2ixTgzjebwR953RCXUdL5YjRNG2pHGByDuTovAzRoU3RgBYB2noGW3e97P3Ug3T5u4A2oN33hYpDZYWu9z1fxUJ7",
  "key10": "3bZ493PGixJKtstgfQz728HmY2BGNJJnkK5hehmME9uQ9zBiCQCEQFRAghV7rM4K3XksMfKAtMC1wsSA76LFCZSw",
  "key11": "36SbPkSCbVuGrgYPzjqHwx4uDMpLVG6gdEPdVCkEbLgnShbUmQP8hFEqEKZFUtEuqvt9dFKAfpEk7XQLHQxEWhrz",
  "key12": "5r1gqQHLvG7ZekKy5yFgGKXJY5NnKLXQedjS28rEAtCRQ51u7yz8ADwxTFis4mzJAvHut9MZ9APFC8RnEB7uY8C",
  "key13": "5CH3qiiXXdTWnUuPCPDUUKUQysAyz3CH6LkYoi7UV4KdvUU1L2QxcSueJXEvRjLg3VHjHX7b7FnEkvxttWV7cPdY",
  "key14": "2j7LpUGUmsFFiqMZVzHiFKTStCpieQARBmJyEQpvAqFu8x4nhvoYfBDM25yT2YBhofhT3hiXzuEV6EvEdMe27fHf",
  "key15": "36tW5JytWunNbUHDTLafzi4wQL61EXBLmJTUkNBM4Sa2qnuKMbA62Y1KgHPDBtuLZK2zpD55k3poMFqRg1TY8JnX",
  "key16": "5XoPk14hF9be1a1S7sJtd4rHXKmVSCiwNG6aoFRVvkJ9JYKU7sTJH3o6h6YCWKzSmr3rgzuaTWaxGx3okyscaR6R",
  "key17": "4d8tQB8kWJ1UXtii3egwki5xxwa9AMjKeAGxwvket111FHGH62XiEZTo7CVB1P1bqeBxkRZM2hkBXFdMyA8HjFi1",
  "key18": "5Zy6Xd2SB22yaa7kPL37d9EcKnmuP7NHfYJcZUaLxtrEv1woa6HAFaWdeP2KA57i2FgUPyDu4SLeVp2Gyj8pDBQS",
  "key19": "52cQkVqKbVH8h9ctvzew4Zsp3oez9Yo6dLr1hgA5x96CeBUhSD4fZGuQrau1ntCCMQd46AA2ND1cP2kc7vDYC7Xj",
  "key20": "6a1F4yXJFvJGPT5HvfpNhyhT6fnPvGfoeT1G412JEF4xwchUvnLkiXAKVpYJDFPfV2b2NdduAv1SKGaUhQVhPD3",
  "key21": "3n5L2N4bPpNwLpnW6yNpjKUGX8mLfcvJ3LFFp9DctMGV1GxfTeAJTUFPCCAAg5fCJr6opYLawHxTegAW2X2mkd4H",
  "key22": "4a2du6nVQzix5ouN8tjjBnGaEnBV9PwqqXqKZjVKShQ3Upa2K3A1fyGtS94N1Z7sJGuvoVhaGZV61FrEE6LBAEyi",
  "key23": "4ZVhJEULR39tdV7TxWFF8en7nRfT5XiZJKciMy3UMuXaD1LjaEzDWa9Q5NRcUBDhcAhoB7N38SsJ9Eu3GtDWdB72",
  "key24": "pZFzhS6vB7homy3JfP3mX31VnKAZ3T66vh4PxS6eY9CEo6EBMQTdYM2he6UHAY45da3dXJGN2ogAWpWzo5X9Kvw",
  "key25": "5mB11Emm7CzPth18qVbWW8TyZmc73y7hFwuQMopU9gUbSDkbq7wky17uEduNgkR6GDbjXg2iXXkjsg4nGY1je16f",
  "key26": "5y8vzZoQ5c8JfJVJhFvkNoQkTqvCDBmyacW7ohqqddsPk2w56gbosQ5noCaejMqVmuSSsNFFzSkbvSQumBZqeoK4",
  "key27": "42XxW5oxX2XQK5d1XTqMJcSYL1ELD12kNS6JG12Zb4ZccgayQLS1mwaBnMX7CqN44G96ZNUkrK6UeB5NAV9kfA2J",
  "key28": "224hft2HDaGKaqB92tG3J9gLai1xuQDnrLVu4Uk88GZ81gtiqXThJwpFpLWkqy1JWA2gugPeMP3ETMxEY2V3muVH",
  "key29": "4eE3MMkDX1szCp9KMjd8Qfg3fzSMyLDCPeFFtwiqsYg9acFZvindvUZ1CJpCRisSRDpVCaTmwAU7PPBx5quzidvR",
  "key30": "5U7mcyJzteFDNJRuHY3AtZK6bVvmuAY1baw1kDrUnLCieBiGfch6oR8yUDLF4E5HQHy3cBDiSe9g26uEGCs4CSRD",
  "key31": "4e6YD96qMegFfHYhVFfu3JCWcKMMeCnaJgt7nSJQVyGMLZAysJhMXfphbiVJvqQWZhcF66hDshCfdLqLKbqXEZrV",
  "key32": "SEBhDeAyvpDT5YNtXu6UqrVpSnhGCBgX6Y6gFkrBxHA1aYuWCYyEGo31uXGqFjpjtkovkKUmRFJmWx6MZFPAhf7",
  "key33": "Q4SsnWS7zVUMdyzt291eayiH268fEKMnYyPuDRHCAX1QPiJdtsDqYTuoQkaYyEWe9URYFDeHTBb2eLx1r3k8Fgr",
  "key34": "YxyPLnMAPBaRU2Ja2VBhDkPsFjJNzMq4WFSgSaDGuD96zQWtEEGvR1jXHsE8WNSzaCQb6pMwTWCwyHxQDmms1r6",
  "key35": "NkVvFG4Sq4YZYq7AEWYHKC753PsGQnxbux3qLiC3fj48sZveKXrkhC7nmQxj7kX9JCrEGDuxg3JxQaq2PWuUUGK",
  "key36": "xmep2kCfjG2ed6FUtkvhKzneHVuRBiUwFeC7bPh4rjjkwwesyfeSZuLo1ZHMRQKv7nEJgLaVzLki6AsFiMETn9b",
  "key37": "4cRuA5AePuqQYXBsoT3QMCayUVfUASWrQuTHuApmoBz6JSuiuPGe2nHFhuXRqMvGiAu6TjmGeVMDmAkBTiEDNutD",
  "key38": "3sq8djRpcabgg1dptFSQWLre5SFFyxyywdQ6qQ1hiLwjJLL4hiXoJzoqdUNLWreXhqmos8UYEWvdPwMNn3Q7VXRv",
  "key39": "63utiqZLjdQMQ3ccT8acyAfSrVyBEnHfQQcfYWzpWwYkdzYAF7M9DW8Vt5zw2WBafiYixjXkDrgg2DpwKeWLBBLh",
  "key40": "2bf4i8XBiXi9TZNUfva7fkRcLcyBES5h9NpNXKHDAvL3WGHwqv233tjZvYZQ3HsXFf9ND1TCP83yVwYrPwFaCFJH"
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
