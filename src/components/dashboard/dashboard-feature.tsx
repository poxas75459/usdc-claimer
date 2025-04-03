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
    "zGusyky6r7rFUpYXEMY5s1MLw6gGBbEXBjPMQhmt9rwVorofs14o8kgthsBHsyhtz5Aq2GQWEu3waPFBjJhyJ9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qDW6YstgDimzz4Y24AGmYJBxJYfc3ULueQfYK8H8HwWA1gbbSCxY6yZTJH4dvk98kSwzrh9SC1J3xdZxcqfaULM",
  "key1": "3FqRkTRH9sefzTcracDrs2kGkY8agwYx3aQv5kTMXhK1veDVj3Mc7W9DmCqgVP1pqjPsXtVZpMH84H6wxM1Xn9Mj",
  "key2": "21YgHYaGYXMDoKXTKFF1gMneZ12Y9rdJvPSSc97VhqXT8SbbaWQrPggxcDWtyzmvQKMsBYfu5FAySnZ5cHJfNyzD",
  "key3": "A4aAnSRfn5CYdq1ysWcAvHZUWp7u4SppaRe3Nh6LdLtJVj39LLy32pkoWRwbgtLG37vitQdyS5S8AWKyviBPrJR",
  "key4": "3NePTK9t2cUUhzACk7cuN2mAxVA4rMhFkQGgjJp9fDURGAvrkit2h68VYuHyhgzskQaERTQS73XeHtzgsuomH5V4",
  "key5": "3pm1n59pZ46b3KVgS8hV2nmHUHV4X1icZAM6nN5HJdSEdQhafrWbXS41d8fxBnpf4WWF8n3sSqD6dYnTHxajB7js",
  "key6": "3cSubq48vJMGkqKCTsH2LAJJTVwfiftoZtD65f9XZJdJCVendFhLWm5JJUwAFKzHDkP5QBaMjMEr4ywsyMWhrbWC",
  "key7": "235rWqHeXbA3DZF6yf7Uh3UpX72hPPUmm75MqcPyXsZMXxdt3pmH3ws93Vmwsm1vBgiYUiDt5A54kEq63FM9WuQD",
  "key8": "2hk7Hn3LaVT75JpNdVjk4V68TvJqYyHeDkPAVa9R5rXJzNKv9cePCrqMoTc6URPdy5T17qzVqGvEeGiMbFiQXx3j",
  "key9": "2tpJFzgt7H36d1DaQKRHhHEBkRVaZyCFrH1CDxTWru8gik3uYUH8Bo6EBz8h42xsHy6dA7bd1NxWogLLozyQhTTF",
  "key10": "5oi3A7wrVD2qocVMUcdrM7sNw6sXgoTBLrG9q3HWySVEyaHLxESVqrLbAhJtBNkkMGUbaeD8CcKRhTJpZccowo2c",
  "key11": "shmE9oCfaaRKiJfwjGtqFSkBcpTC5xV2xinjcWxBkCwGi8wdSTAnQG5uV4Gkx4RuPGyYbUVzKaqfiVZhR9ghqQm",
  "key12": "2XUXbDcVWM62RkYWA2SuqE7hJJyGMWv9BfHt4B8QtWdUoABxKmQxH3N2gpEi6mgS5Pfk4rcKpT2pJpqkAVcByMcK",
  "key13": "uH1uXS7akUpZWCjWrx9EE64gsNC1p9G6BVRCCz5cmniBHxpH2nJyGVKSVkn9Sr5fAQjqk5iDvmPUNnrPvcBMHss",
  "key14": "3DpbUhWMtdoJWoQfGozkSBnUAq1jbdEq2TAnWGt7Qz1iXrTKbv8hGExpXSkJ9XnTBV726gWLJLtP2nhDg19ZYhCQ",
  "key15": "2Znto7PcnP4AJLbvgUp7CLuKzgRMXVCCrbQXq93oEBovJs7fBwUsAQmb46ULQVFsXQ2CJxMEqSWue4XKsfDw1iBN",
  "key16": "2vnWCNfGh88YEiHpaDMgCtMv8ByTCuVVt6xi2LLzh2yLjYafxaNwsekaswRraae7c2F237AQ6Kb2aAiGgBMjRLEy",
  "key17": "3QrNm3CQ66QTnUvQBswtEGNa4A5nhEJBhHL8xXXbTrwKCT67UbZqaFX94bEv9gQf62EXNufNULn7LaDGMc131t7T",
  "key18": "58gpbKJFMoAkFKoCxTBpfVE7j8iS5MQ8QRt76fDhTS68HjpfUwpGtzTxD3bcuxzKvtdy8xiYuK5xEFuA9yuK8VuL",
  "key19": "349o2fZY7yLGbwxcRf4NvSrWNEE1aBfMPT6n81YdHLYq3ZLq2CvSQwwMxKi52VsFSwceyKwUHM3Dhocnf1jLNPCg",
  "key20": "5GKbg7eEsdhG2J5Vqu9UAkfscKtRHbb64tt3keNLNimMuMRPJ9axcSJ3euSfhxB92JVcgTFHyQm71MF6VXpdvjsq",
  "key21": "4CpuDhEfY26ckmXC4etKBq5bPdTe5tkgtTLUkZmKdLt3pEzAVNkZytafL8zw9j3kiNrWHpU72R39eo5fx1bYvLt1",
  "key22": "3KZYRZM8ey8vFkf62t8ESq7upgR9EmtxvVjtPbYY4Ztor6LYu2N2dz6wZbPAw7Aq35XpmbBXpfwRX2pCLYMwA48j",
  "key23": "31RhwUobmSLUN9s6ePVwXkXUpQFi3NprCefncuYwCjwQ8QMoeHWQjnrLgZYb3RYZBXK8qChTczodKbqY8McJnamM",
  "key24": "4w6T1Z4cy7Sbz3ndjWGANUZpU7skDpHpiZDbW3JL4R2c7HwFtoPFnQuF8JrQd95xydBLJ1t6ozFArjJ9c2rfSBom",
  "key25": "54ZaXH6carA2U32aVQAuNHWGkAoMMYYcDFxNAPE6MCLeRYfVx92yzDPywD9XPmT8vVeBYBcLeKAukxzBybNbH9oU",
  "key26": "3RoXuMYE4XzF54cNsR4yFnvwdvvAvFifpHsUFeGAUSHLgDPggqMtajFweYAFaRwsDgJu6pPf8S2U6KmNDi4SUbHZ",
  "key27": "3sf7h1mfkEiVwxzZvk9adhF25x87KTiVZDrTboQAGqGxbRAa8JZpz6BqhtDRv4fv63ffKkkZKmU8TGVgQtvAX6cM",
  "key28": "3fM8J5reBdvN6eQyYeqgRWi63L6ZBDoLmUrGyMmAkUf5DB6Y7AXAdwFK8w2QTsjsXrcmcr5itrCEi8dvYY9sqLw6",
  "key29": "kAtvrAk7fVYA7jdrefDw93Yk2jeUsvguX6XMb2z5J9cY7Xw9DrivJok3fZDbBmHG8sJ5iUKsWo6Sz57yAHSMQ3b",
  "key30": "maymyGg574NQ8vJk3JPgepaeqoXi7kNoD2mCiSZyvDRprER7VBSPrW963eiiHamntTddNc6rczLVWYSGTorqy1R",
  "key31": "441UQhXC73sKihk9sdvNcitFt8gN85A3yfzPL3ANZdrhHynfb65ncs4qvByYjqiSSJuXE5FFpGedqysSASAAAWXz",
  "key32": "5e4tNmwNxtUXepHT3DLJYb3bYYKCGBmRJZFseyKdmzoccZMZF54f63oiCrhBDR6Lc4H759ascgQd9AQ9shjdRNzj",
  "key33": "qD1ExKYRwhC2up9ZzjYzP7g8ASgyyBX39gUXeTqrsS7xcgCwEKgzUsZdGq95qAbcwXXz63dUvoxbvxNQKJ3PL5B",
  "key34": "4MYD47uRu8mAuceSDid5V4YcuWYwUN8MbVbHvsihUreX8VksQRxC21jyT35UNK1AL8PJMkFpZDSYj1VoAaESXVh2",
  "key35": "ds9FKjeHZWrtqGasD7krAnDXSKPYBgvpTZ57Nvknodzc55ZShmithduLwLYgiAzMLJXpfGt2Z4PDubuHytpCXAs",
  "key36": "4AW3VKZFZNi3S2b6PjqcbPmLZFB9P3xDx3UrhsfQBAgNjyPgzujc22ibXg7T44QMABdxc3x3LiPuqjLXSAUQ7qh8",
  "key37": "2aJHMM3AmLG1RZiMxqRHDNwUYYgWjnvtSm5Hit1Hh8172btJ8h9SfqER63Bx7q3ZYsExqJMnZCs6gjQw97sYwtLj",
  "key38": "4M465ffuBpSfKdDmW8EyEkTeGEj3k42vEdKwUrkrt7ehug3tnJ6vVCjeir1vBn9ANC7ic2gyRcS7YeR5YCJ8Lj6S",
  "key39": "5GxpJmhWRsjaGoVD6JojvhNhaMkFCTnMohd4M3P5U2xuXXDnUK9pKKQL5x97nzk5b15yFEdgwVVrkaeFRCBGKDVY",
  "key40": "3KJUPoksdQdqr5vb9iW4vnMiNnfnbgJd1FBip4BL5D5nh951YSAxHff6EBiEjZMnyMgq2bztyraufm9CD96mQsNm",
  "key41": "5C7TykDQdduS4EwuYJQooA68LpRvcEungsizGgLHPVu8QfgLrVKGiMJbPA6N35RXRHFkpkXmZh2zuJT4k2DHdcmS",
  "key42": "4zV3W2KdeD97AuXWVra7Uan6Je8E997RbQEmuY6JQiKZutXQ4ghYSuWdHTZgpN2H956PjabiLN6RcFkhXtySmtJy",
  "key43": "56jX4xC6wuVzqYJMPacmnfE6WdQry5irzADJtZWuesUKqNBeW4g5A2eVL3c4MC33nBtRtsxeoVDRtqWd5ZMgiveP",
  "key44": "5uMRTcTS52LTY5kXFwtzHCPVfxcamJA8b2NFUqfvYqCimJBhKwiKymL5KVeL3rn59fSzqfSZfUapQTuxtqeNw2cM",
  "key45": "4pB2x2hLcftar7HxuP4NaFiJaEWDS4Ckaqb4PQkhns6dbuuaGzKXFtP4B1vtnjVwapmsvfL12eHVpyC3mastDqKR",
  "key46": "a1FvEpBNbBMAtvvqzfDhivwUNhH3kn1jJxJk3K8KKcXWdHbChruhnFABcqZmjD7ZZ7bGdT94Szfufq87NvjficM",
  "key47": "4Pqp6TBE4DrLFF9CKPGEKiW4PxiQNzRGdtQQ4xzhpLW4q116Y3HpBvLjWGC1W5crPRXMCmBiG8x2SSWMxiUZtn97",
  "key48": "3ob2QacPyhpgoJpHACvrchparoRoNC2VcJ8RSEvVAEDfGg1kYmTjyk8qazxB5srEZeSZwMuHG4HrhjqWUVseTfe4",
  "key49": "3X3kroK1VnqVLhmXuza44WSBmBwByHJEwEzHAZQQTmbZinEytxoUwaQasznJS3wCP52nGjTpwkhA4H7cizFQV1Tt"
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
