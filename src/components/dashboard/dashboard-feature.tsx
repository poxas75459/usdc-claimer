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
    "H22KoJrE7q6JQHiM5sYzuXvUQ9qgiUuZKGB2wSeAMrbzsKpTsSUAS9Z9NdkoTXcEc3gcJ7uiPSgSjtS1RhMjySd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VwGFdJyNtKruJroTMBDkrVmgwbuvfLJNFCgER58o6fbuojhGj57Rt5eHTMjGsvtj6RUr3KZzcErYTgrp43DTYap",
  "key1": "3GeqPweZVagYwoBscFvi7zF7bZQV26CBrmftJscSQim7vktpp5RiLKEQfsBqddJj8AgH6zaULZ5NjPLBG9HvdNhs",
  "key2": "5pmFGDFETM43dDhva9j25EF9SiX8FUNNHPt9Vf8SfUgKxVWJ2A93oz5qgHAUB2DEPLKabBzDCmtCfiGEvtZe5wa1",
  "key3": "Rhw3Y1Cr6Bv2fnaSaB1BLKy8NDneqXeLtc4PkN9Y7bYtG1f4RgNhiGr65nNhvUERc9VFGhM8zvtKxEp6noeNp6Q",
  "key4": "1Cj4tiesJB2rJkES6dY2VfrWCkn52m15DU1X8LEUbNtSDoL98L5nR79XbwFrUHyrEr79nvGsgZcR2X5rnuKZAPs",
  "key5": "bYYgDcZ9gwpTk3cdACV6LoWvFbNmqmQZ3Z6Jmv3CSBweLBBuQJZdRS3SmKxYCHeJSeudW3AwT88tiNMDoSwiYrG",
  "key6": "2AgeHG2WmACAMpyLgnWBG62WKKhzBhFPmRWCD52HYemePWZMATqDTUCaukgZ6nXcbR5aYJnQWfZ7ZxzqSLXbiawp",
  "key7": "4twLZqigivVMBdWtDvjmpNp8huJzc4pTJAyUntjJB4N4fNRfnFC9iSVC6LQ2dWKQTdh1YLUpqM5T7TdTjXHD8Kzb",
  "key8": "4tDg4ogZtvE9XtbeJYS8o3trzjksXDm6Ef6oUx316bPq58mFfRT1Zx2WtiTBWGYzC3GeJo1kAmRGUKAdPPeAFdGL",
  "key9": "aG6zTAjQ6pzPGbJAp2zyRw1Vx1ACWVPP3eL4BBSxqYQ1rJStdEy2Zo2kp22UYM4fSyK4xDajY3sau3EGeSrkd9Y",
  "key10": "4Cd7xYaJ4UzPjyFUgccibmgmtbFPJLJLhue385p4BzpBVT6WiZj55sirHagKfVGGEPF6pXSAFRNBfV6s1fFbTLTr",
  "key11": "5X2UAPhsZuL4rXgtwXptedfvDkY5m6wwhRY6S7gPkt6hvbTYSA9TvxxocqDmXsNSdegUHCw6NYAHhHjFPa3Cqq8p",
  "key12": "4cJPazMomMD8h9V2U74uBxkdLbToKmsM8EhzN5bF3TtsNSQ8qYAuYyuLb9jQbmLvijogWbc4SBZstpGg9dZ1yaAq",
  "key13": "38cQaCJurQfYWcJfsJMMH5puXEV4Ppe2sYfA3uRUHQAPtKtL5wEGPa6bpFKexVEbWVF8QLcypBPvUhbSTo5XpVpe",
  "key14": "4vxt3U1ciN5tJ3JfNAKG32eL7dRPhEEZf3rYsRFCDSJ1FASw1JfgzEeseFgJTZmfb2UimSgtxSyUHKyKbNviwrmq",
  "key15": "VesARVDm42nCgZWh4iNYg7KWrZuHbutUqmdxdqD1pUHwtSxXTfihXYqGk8DpjXumta1uTpYzUvbfecVoCubcc5f",
  "key16": "2QmwBzNJBTMHKSWFAJDqFPudhCt1hDV1jTxcw4XFxCrE4DUtT5LvWVyjWuFUPSqw2CBog2HYcvbCwbZkKsGKRDrc",
  "key17": "54GRGF8nykwgrBY8Yyjc3GwWvgDsbhhVphSBQj3AgnqLadvT6R8Vyg2ZTFC5dU4iYY8uxPC3bJkp7jUnGTt1QwsF",
  "key18": "5Ghp4XFaQUgTtYsb6n85FMxvpcC183Z5c7LyN86V3rqDPxMeTe2zyoghdzskkQm6bvRE2WSfENaXd5KtvLL2h9JV",
  "key19": "5SrxCoRJNYv8fyi2AZgVE6QZYJ4fkhtGi3k76JRK4rYtzhFwideftPofrvd33eP41USZUHtHxEXuRhkEtj667xT4",
  "key20": "2ZFSQ1rhwUuGMCy7dx6F9okJBGB4DQu2AzYQYnELaykekC1bSHtb23kNFV6xHAEVFDTJ9T12YKW6hAD3hGMDSHYt",
  "key21": "3fnaVUZw11ZsSn5dosZFNkNfbKn5Pt19MWn2RyAHvvTQhQZmpHvvcFoq2F5R9KAZuy6gbfHLuEryuhiiZVz2xEvd",
  "key22": "2onbN6eA5BFJtWRtAVaf9ZB1wD2HTVihd8Ast7yWqdaaYZCjztrPsiWeeUmyE3AXLchvoCfrVMTGsttLto7pFKb8",
  "key23": "4aJ9p2tR8uH9kEocaosZ1rq4LV1EvgnQjqJggsEAg3hd9XMsZCxgo7XS2y1Z8pPLMKf9Q4AxBezVBHa2yQsUx9BX",
  "key24": "4hgmgYG97fnWH8XCjywUCfb86n4CewTB8r3FSowxSFGpLwBEJQsvqLPWgvq5tXAa8WDgQaYTbr1xw9M6d8R9zqsE",
  "key25": "2gQ38dyfeKgB1c3C8hSzZRH8oKFtFZV59tCpZDiXcNT6bYkG5VDpQtdkCqJmzi8hf3d5maK1DUVaMYYENdmfAnyz",
  "key26": "3ySKnhsNPY1xXL1yMW1a3y48DJPcHmJ7PJgCh11jGAsyWzQQJ5BsupWGbKpXfD8fEa5EmdpFMgNCecgDWLSJFRep",
  "key27": "4LfyHWbeR4xJvp2QyCBNncJYExtU3t8Hbqgz9VZuJr8x3X1N4DaMTTR7b5U9SdJWqLZaoB34wdsMBMUCvWWdj4YW",
  "key28": "37NXZc9US3DGBqzsxMBw6RrxSPFVKf2hYzw3pukB2yWTRGthXN7mRRVhPoQA4PEwki2vWr834QkZ8yfna24xKJCH",
  "key29": "5dhCgQ63bBJZfx638BnbB4nMmoYuQMqRK3YS492TQ94eNBv7CMchvFXXLC1fHZFzDNSqaE1hqeqFENsrHQaXwhvV",
  "key30": "512L7nQCtJjTz3HyZU2dLiV9J4zGaXSSvRUjnkieDmFPreGgUGHXC3RJzx26eLbWHkC5YzYKdufNs1vrRCCZN5LU",
  "key31": "5skb5FhmC2dZnxKpcmmSTQRcZXNsEcmveHU4wQs6eRFo55uCo3j8ZEhQpN8bCDo8NWuD3qiHYDYVAu18T2yWNkM2",
  "key32": "3GNMpUGVxBt7GGmwuKsYMiQVQpNRdYymvFZKYVTwxWc5DgZT8F8SHcjqMLfkwr4cRLe7j4HNeajQU7m94RRFcUM7",
  "key33": "5MiVFmeh392o4tsJwq7bEpxiwHbSHvKyrHz9uHbZ5VHaycJ8b1t9pQqjMonxyJo13cpSdDy79rMVMF7v7FA7zJ39",
  "key34": "3xS1VdKqHVALWVTUknjEwCBqk97LeUJRfSA43hu9BxKmdd9DuzxvE4Qm99iXLWXd24zLecTPYHCBshhE7zUHSKQ7",
  "key35": "4sJR7RFw8ej2oQcfg2MuLWeCT7HAUZLfKET6aMvnDRUqkV94eNaWxHXTBgSSd4r7Jo1aXEQdCjeKT1YYuhbU2VGp",
  "key36": "4KzyWSjCKebhPANn2BgMSDDsgMG2T9YS2AsfvdTTmJ8jyuNK7PQqgKY4AmoWSHrrLe4pndLzrUN5b9zk7PtKVjPZ",
  "key37": "3rmatQ44Z6oa1gfNCjoW6Yk2zVuj6bLqgjKShuXo4BbfAJmBakcNYg54SUs9bNJkA7phFKyFmQqn3V8Yos3KTbNs",
  "key38": "5qffBapCr7jLMEJY2zbUfDDyR5BMgWCH5HS1XTXtdoT3kVDxrZaN6MnVKEHb1wu3hNEzVLUsiTtvpkvCzMRtu6Vt",
  "key39": "35N9VCv4ZiwxjoYofNXxYNwKEHguavjdiRTJaJVY49Ww4oefb3escQw83UCQsm61fymi5hsZD5dS57bSx147V294",
  "key40": "4AQRF9jX9UAyWLNzfRbAqWLQcc9dEhzNYRkBwHxGSUApM2D1KDM7ZXuJY3nSHAnvMjV2CrcCwq4a5zhtxLtgWgUY",
  "key41": "3J92SRq5KTxeP191PXSanJdMNBuFn31dQhdBFGdbEnbKEgczefxuqkXgDkeoCZE5hLKmXFz52j8cCj4B3LnBwWN7"
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
