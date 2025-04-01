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
    "3dRJCANMysQQRbfNESNKKb5jiGdZ369bN2igU15CjhMHmcSPnRdNyKJMpubowr5RaRpvqYpiJMMS8grUxM3cCybU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SQm4uxns9rsAzaVjnFeoE4f7Tv2Manzkio5MQ21df7t7pFdxAtz2Dpq8hd8HDEF6ypyimN6hZFWbDSTzcxquH8g",
  "key1": "4qUTqKCHLVsMFKYV3kYYEP2cNaCf7TbmdiHPfn2NZHanVhy5Piw5sMUnRF99VKD9NmFKj3phMDnWzqW9uAEGYKTK",
  "key2": "5pfRVByZCCTUHwarofvdJKNwpUdC237yXuycGthQUPJ7BqpHG8nGHjm4jF6Tj4LwQ3tEbY4XjnaWFXNN2da8oTE4",
  "key3": "4enTi4W49CY5CNPY9fU8emcbaGMmt8jZbRDyAxnJ1isHfAWMCGj7cFHSqyYSnYwoj6Muv8QpMwtQRh8xtrgjHPbc",
  "key4": "5c4EiPN5fnR1XhkBoVnKtE8PFGcDNV1A9rCnwS3Lofo81BrK14pEmHZto1HBqgbFqHsDuekffNdoj6MmYNRuVNiw",
  "key5": "49DSpSAw1kkDSTCkXN2uwY6NL1eDx84JMmQEYQXakqK56GhUGfPSbUGQhpaSVerBVhpjJqC6TNHZ1p8zHdt5sDDu",
  "key6": "gSfiUJcdfVAcTrwirvkujayK2uJfruQ1WCjcy6K9ViKHuqXuZvjWgpYkmst64AwiMU7wKPWqt4SqBstwRcMgbap",
  "key7": "5FzCUSJMjwz6qsKXLsnp2Dd5SzkYVRsWiYNSijC8NY2CSS5a8XTiYikTpiQtEkSfoxXii3Cvf2VqWu3E8NhjPbC2",
  "key8": "VfvYZuT5PySLV2JDhb5GB8oE8w9M294ft7WDfo7urmK9gbSk3H4uzZXeTkNkZkK8M2SMDieD42YPeZ6dN4XfanH",
  "key9": "5ezsJPc3BTXHZFmufB7ooCfxeYxpaMSszJ51SZKFKDv1osMD5Yjd1EmNts2wZzAtRPY4bRmGkCzbMRcTac8W7a1X",
  "key10": "4qQUncYuHGCgia4JKdXJXBWRa5aE1xpxwnk4tN9szPSdGPZAoskpjqwWsezbhhhnZBFWpCGzmEedsueF43X58DvD",
  "key11": "3Z7PQCZ5iyFSXRC8Sq15Zzexyeh3ZvbqEXruLV5QZR1oQEiULRBgQzFMgtXXhF8Vii9nEz3chLtwtFmBJrhKHPWQ",
  "key12": "2R5tKW7d9w48z8GcYvN7BvySrbzhPSmHFNAq6SjkZ5NhPRet7fJYK1VfcFEuEJe6FJEBdcWnscvj4Ds5kP6bxn9D",
  "key13": "4woVu3LuYBJCZD5T3bc6DHsUP86FUWNiCmqnPZMPKdFEQ8YK2jevJYKC7j8VCTtvipNkhQtF63EVjSF9qx3fqAhG",
  "key14": "5mmgqre6FAPbZtBhQCSfq5ynFUi3pv13ArrWThMrZGcR5ovL8Jq9TpGHRhrtdEg8h3Ao2B3sppqE8g7dHGSADL52",
  "key15": "cZ9YmVv32dKRsXnZuY6JaetsbAHtPLiK4vAxPQ6yk7fZnYSneBhSZq9qLpZD4fVk3UhsRbmD818bSu7VgvXKJa3",
  "key16": "21ou4ekem4Uhrz2RAdPgfDWSx2smmx7mMXJ7HLr5ixfnPg7Gpqf5Cqnq7rzmboWAkmifSfvCNBmZLcof5sMZJ669",
  "key17": "5EYjm9TBeP4KVPpgxYZPeRYNztCzXNXbMDWxpu1muNtDLs6mpLivPccm8zvetAKuTkQmZZTugxYvhESuuJMoPERq",
  "key18": "37s42PtXHuZBpZDRxoAtNWbqmREzegsVPi7v1LuqTDD6j5zy9ppmfTq6KvUF247bCUQVSyWJqzdUYf92iK63e5xt",
  "key19": "9xFj1wJEDDsa4kaUQq1YwSQwWNzrUZ7YPbVW8BxFzaVNPguxM313S7m7xWwTpRPcdCECHHjhWTi9AAcNYksH4tn",
  "key20": "3sWfU6gwfjRfyiN82wwWJAUEBvyfNTcJiWf8LwqCHZDNYLWYLJUMeNVKJ1nKvRd6pfRDhzfeAdwnAJCwhCZ8YV1u",
  "key21": "498W9rZgecvFhYHRnutKUe8XhuCNHQHr3BrHsZFbmCdcGhauaSqcEHWMTsY3UFkD36CuhTZYYrvbAdspGVFFuSuo",
  "key22": "5tBRpKbNJ5U35Fu5NPkVQcj3iua7vWpcCv9hkKW7Tab6sN9QJ5bsf2VJN6NYeZwcxW1FphbceZZqyjCogggXvkVB",
  "key23": "4Wbog1uZwMCzq6G1SfhLw3Un8dcfLG9RBEjZ4mcHJQqkmHrUhRWd3p5QMkKj8PLhhSzjPNaYb5Yu63TFk4xKdZxE",
  "key24": "TDrEWvz2WBx7wFAUG1Uhnrt4LfaWQ94JPBjTErh6CtU137qKuQTXyXdK62dXc9ypbvLCChFhcWo5g7tcCS4ugKA",
  "key25": "4piwfgRjEZDgARftGzKbAMWqPFjCxEaWpW4n3GqhMv99zgW8BhkeNLr8f2PaTrVcujtHKHLdw51NhzKN5Z1QxcRs",
  "key26": "5hb2jBtikz6HzGWD25vKEnzcNtk7EZdQ6K3tcYtjUetdcuJDHRcVs6bYV2ipHPPkMgvrisK6GmQMF9As1P8AKzYw",
  "key27": "4LQYb6QRhpkkvQNChYRAcxjzZiTACk7gBDc2VGfaAoEXQv9mS8wVTTn6itkqXD5ZPVntRXtK8uQqGRFYm7WGSwAD",
  "key28": "3utexhGVmtFYJ5Xeurtnxb2LAYAbWK4Pin3cKEnv3BitDQy9qvoBtQz1bYhfadGUrpJE7vFqt8SiP8f1G7Rcdt2v",
  "key29": "5AzDgW63pzkYCV61xiYNknAePKoZCESnnxjaQYM1evTkih8WWNknrrrLkFDP8rT5P2SmUNFVnVHjozafS9q7VWuC",
  "key30": "4A5u78wbeidRheZNnfCZUZQPekEDB4HMNUbpgBTngPUByHMMwQnKZoXKqhxz9akTCELPFje6HGP89Vu8CEBKTTkj",
  "key31": "3AGhjYdreAo5B6by3HS9Es2zfj7AFJSkiHj6kau2juipnDdS8PMwAc6shu1krP5YUecjiP69b8WC7EVQ9fjpbCzd",
  "key32": "2hMJVjZyA9JD8mQLnxHYrK85Dg9HVupoAbUw3mHppdBKy7QTGgTis9uXWi5RELeYCLyHJF8p4CdeL8s331iDn3JW",
  "key33": "2umGat1EgWLaLcJZD95jfVk4RTiEmkCFENtVGtXeArBscLU3HeaA8shZYvgjcEPiNYuuMyNjfGg5HMYQntWENb1t",
  "key34": "2qH93nvkVFyVDyfVsUM53GF4v6ReLpSGJDrJ33resSDwnsaYTmdLoUY9jmBU2Y9y7oPnph3XFGzdEW9L5Bkhwttj",
  "key35": "2riFUfDn3gu9VvcXFi41gW1TJanG1VBJ3SHzFnXeGYjRiiKdw5ef4GmrGGTMprmMVxV6QBysgDjMeuH8FGPeJ1is",
  "key36": "4KxMXpMQJRXarpBCVBeTrECFaWZW5DWcY8Hzi1gQ9Tohxc4riRoACXEacbL3Xb5rQ7AekyWtwrQRh6vHf1GLdyUa",
  "key37": "2EMA4yYNfXnhQEr95jTUwoXFNfzznNrRCXby2ZRTLHBsAh2D19hjipLEpQSdHQmVbDQkG76UPN9yQpnKE9nSWPXL",
  "key38": "3csquMde5pzgwTQC6iJjBQQNZUXbXfMXcgn6j2VjvRLrNts2YZHTp8ETmVeF9thQC6UFPzGp8kLofTY8L2HqeDix",
  "key39": "2Eu5cuJMwKqTxM4Azre5rKXbyQnjtBmboyGTVy82YkPW3NRhUyewzW15bZgoY8vAbdBx2HszbDU9PWUKehzvtHFX",
  "key40": "3xBMyGq3cCP3o3bPZB21zg8vWVrmXKiReC59X9SzLTrzeu3TNbLvwciz6vsSfUZvJQY2sbqoSqNsPunghmN6PXvG",
  "key41": "2DRkLmgDdHkkoLviC76joAwTHX4m4nQ16AfndpERaLXLskobdTFQdqQtWYPA2nsxycxPFiNNSRo7y9GXw7erm7KS",
  "key42": "7H18LQy7mTAWxycewnoKCBzSckL2Se3iFHeBAoNXVSsDboFDuCfvrE2smuiuzcTh1gxG9FpzBjokGBLqoz7RhfY",
  "key43": "4gJytm3xS1AyWVSxknK59cRKJtThSTMzXEAXG7pjcTtQcP1tDo4bYvviTLjBivTHgReRbbASqSpfWuPvPNn5Brrm",
  "key44": "vLUK9g6YpY1CdEBpxRtTcu3KBxH1chQNeYh2442sZjBe9WT7fFR2U7FmAKfDwoZA21mc9354WSNqBCXbyhoyhZR",
  "key45": "27dXCfHXrnS9ZPgkSuTYKREd2dW6vhEnLfy8enNNh5xo8Z9RUDVhRxiwfkwEiYKZACexLEF6RGzpMU5ywKuz8VQ2",
  "key46": "4R1bumAXcze5sJ9LSd7KQ8QyQuUSPzWPx94XtXeqk8y4YEeDqADd8uSrWDFJAHeS6vp4vishKFuim84DXkjTtvGH",
  "key47": "3Xc5m5FAUdGQPNCcth4FFMt65UCuS122EAauBJd5d1wt9pfZFqXyCLWTcZbbtShsNvFt8Vm3qu8Pv3pbhprZZ77r",
  "key48": "TtZVMjdUSKoftjUiHUcvNmZnurTkeenVbvQg3gv2YcZaucEWJhnX96ZCDoL8LzWkvUrG8d5WE5t4MKExSUn9bPm",
  "key49": "ZSAhAcNxgnaVDwGJFcGsc4YpNhgwfHoRS8h4FBBSFwX96yTBoWHczv5DyfnNjuLstaH6GEk4hVJ8QEhjQs67oRM"
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
