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
    "4XrcGshHFQPJFusKrNtb9vrBzKbw752CFzdy6WiBSm9epGYLm3jXiqLKEhmhGsn1smsyAgc79aGRuG7yKCTDbqPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NL2JTQkzLeg2ew9Q5RkmZTBXbw3KfQcAoK8vhg4iJ6pTBmkiq1ERrmVEUcv8Cd6Z9r9veghv5TtVcZHgkE265mL",
  "key1": "34XLT6r45YmtqsUS3frEM8KSS9Yj4knhR7bkNcUuyTVDjgQVN7WJ8SS4DqhSkb1NsQutFeqXFPbfNzuZVWEATSai",
  "key2": "2WY9FN2y4deCiwEAv96TJs42DMEhoaYcf3Vh8t3QeYD7DyjGwVTgh6HgXboiRCpnSLDw42mbndS3wRaHYKfwp7Ri",
  "key3": "3byyS29yzQXDY8WYcC97dmWuWw7wo4KpudnSUfmbAHssr2B9YHYBkjixXNaph8q2LFWzpNzxt2GMGdoyxJSktmUL",
  "key4": "UZToiReq9f88eikkhed7tEsBC7vBK1ibtLP5KY5xDGmf69wZ4qQv3a5uiTsF3sFepcede82fu1CTWk8MRVbmZry",
  "key5": "hUgAwci98gihBdwcV2wU3jMoYibPqujFoxr48d6Jey3j814YXGDoFDpX6QtAKbyf8GMPTHmgoCHvgaSFB2bAn5a",
  "key6": "xXxRyw891yxt9k1Yc2rBrYtc8W8dUJpYiafTxmBYH7wJB8FpStbTdXRPK1coS1mDLbdjbrVFby5LqwEHD1s8LDD",
  "key7": "7qfoV9p1guzRNi4hcjt1CH93v8Xqu2TFrjQGw8bKTcpSiAHhByPQJGSwNoyD93Njk7wYGKhDFyU5UNB2maPGeaP",
  "key8": "BkzaZ5EzgqZncTaQqVtSJ7JafcjH1UA3MV8GEDAZmwbar5mBEACaBw8Tqzg7s1M397z2WjzYz5ccdUDqPMvcwj5",
  "key9": "5HqyNEvLRbsJ2MnZJfoaDkALyMbKUfBag6Nevr6hMY9jEBJcvcknkWjw9o6mS19UZLKC8htP6vtCZdn3nqLh1eXt",
  "key10": "uiVSJU61uvxuaHWGxai7YPni2r3XueAzUPq75pSdpzYswtGnqmxQVJe26TVg4NkWyqhNDeb4iM4wuSKZLrJXsAU",
  "key11": "3EkDCMT35iSwmHjyRLAb4kMrqKh8nXnvSyaXgaVNnTxov8TtQpyCEqB9iqom6SrYgqCo7PiPMXVV2tt8qHmzMSms",
  "key12": "2kcWBLWUunbsiAmP8BjtEmGfMBZ6VPhHSPybNcYCCcNpXmpSG4aya7MQyARty9WW3Gs36SZMvwikjeKYdBNZB2Ni",
  "key13": "4xoNXF2CL3YSi3sEw1xeLzEU5Z67FauiZhJvrRiiwknqd5hAf9hrFn4yAgF1QzfftVTJWyfj75JXYovXTqLVDTX9",
  "key14": "2oaMXDpUM8XKgsRGHLnREG6C77fvKogK3xkfyH49y6TBD9YQ1N34dkeMQwWZacZ5sNNWTbZa6gVYX8paaMGi8kua",
  "key15": "4RUBJ94qFrpJX5x2rCVXh5ZCPWyHPhHGBGhbmJgNiMbsJquZqFXqexSRcSzQgzef1DoQHREJodrAS6aPoupQ1NWM",
  "key16": "3HiQmy1U4wgM9viLDTitQxnR6u7LS3oDkfeqmPsZ8hRUcwmeubh5nMPPQ3Lu5bJcUtWZst3QBpmHrLKDumR8LuUx",
  "key17": "2ozoAeFFbEiDfUrGdemZyKHEGWUESFwGqno5ZHrcUVzpkhXBWN9vur5mfn8T6hqFAGt3EpQ95MVaKw8LLtz4xkWk",
  "key18": "4KkhjPbB77mD1usZJRBD8o2U81os5GgLo2u4YUNjFiTDeRuExP4qqDoPfRgKZoLpkjeJHPEmTFfFBgNENHo8HnsJ",
  "key19": "4T5E6M3T4Ew9kZwFbU8byFge1cTJNdiumS43TQcyyDtmccYpJSddcFLD2gBH9bdHDcrLktCWRemagjdhKqBUsM1N",
  "key20": "48U22aVap7LJaKmAbfgbQ7ift13XkPBoEy3prBfQSh3WGqS7mRFoaEqGvTpiciVFZBTkYnwGJbQ6kt96UPKVScKu",
  "key21": "2WXYSvf1pHU1xviS1AWNFNL6LwP2CJ8bMcTz73ixksQyHquea1USXFWsvnFjTxBmnJXnmYNW85kc37kWSRxJdeJj",
  "key22": "5xtqb1gRRu7yqtg8t3s7BHmxsQUbhUPMZMBjKmb7ZjdRhFjMCDTCJLnKRnytpJ8KAp6TYhrAZh6GR5PvaUtCaQcT",
  "key23": "4wSevpu15NLfXAHHzwDf2QjnJEg6KL6mv9JxhbPGDjRsePbxyGFkwWcP4NA1dWq9kShCzPsVQ4RgHEtsRuDVaEeC",
  "key24": "5rVTUidp2KxgkdeWcfqsfufYzKW6efH3htaGxw2d8SaC3GhXun6N3c1vRH8GiHL8XSPqrYAwNvJmPKGDqGZerjdH",
  "key25": "4aUQx7Goqnx1HnMiTCmNK4jYyQwNPwS9paMShhkKSZCazc71gyjQUp2hHyKtVEMyrL65cvCLCE559Vtbc4PPuT7C",
  "key26": "3fNX5vpiczX4NT1zsEuL1mBytgzyz96RwUfgryjdHs4q6sB94NpUSb4seczAgyf2Nh9i1LPqikdbZT499WMi8n4Q",
  "key27": "38cf6b6N7eWecXh48jKW1yrho8VdMP5fXJycfVRwRLVRbQP6Eajwfzsh4jDzj62bPZLybyB3nZunWvdPRWztbnEm",
  "key28": "3WVk3zA7c2Zy4SuDcjfZ6ZM2V4HAmgPhqJ2yHanEovYS6Zip5xw2mk1peeZC8zfyWjUqJ5Tnj4XsRKercW7SdDJd",
  "key29": "2t6yQ7HqLnS6AqEX9CR6n3c9BJkGiNc6URdCPyjDkqfezbh3wbVFKKErfu9C2ACi1uVBP7UYZFVRmypHQDumaMod",
  "key30": "5U1t7YJG7ob6J29zX8KLYaoNmCorpjhKQ2DyyBBBdLtFRvwBXAigeMGAVC66TR446WKFP4gmLab5BgLqaRJRZS9",
  "key31": "3pEKyGoizf6b7DJaC21QvnYa2NurWKKcLiM5PehwrLbenDnGWVp7omVYiR3MYP1JouxmqcFmj2VJeezKyoh29S7f",
  "key32": "3eT24Pya9waiQNJFmnYvXnpeoyC4cBqgBUgULCuXPYQTFQ3y8WB44pcTQm9bC6eUkGhcBRZ7Bi5ZcK6HGcgY4i8a",
  "key33": "2QMMXxtVWgh3E7VYvp5GLkf1MJ7uAa3baJTzZRPvEacRBNzg4CDto4Mkjxh8FjyC8rUqVY7mTZAKeEteVJQ5WZZK",
  "key34": "5uJ3DFro6tcmva4xATHkycQPVKsCboBKAtqRbKxWoEwuLioUDa4PdjAdFkuAqpJV1JpE7NcvknLg5rMt8HWtu3eq",
  "key35": "3ZJ4RNN1oZkT2kcQy3QQvpQxLSVbAMcaH47b9s8DZS5QVBzqQXWbCVjkWcD7rQa9NrtEuDkZuT1MHjRB6taAtTCE",
  "key36": "4BUaEd7xENqaXNeTQjuLP3C92UUHWiL3XXW6XbyJz8xkQDUn9o8yigfrYoYYGf9qrEPLTdF25k8fLE29oavhXjgs",
  "key37": "2TgiE3AfUuzgxmqRz7VKP61PiikDGEvhZRRjiPae2dG3UR6B7hrWtGh8z3bXFdmEuuvarcKykLWYoqDNMSXyRYhb",
  "key38": "CjGivstiEfqeRyTu9W14QrZDQVKdufGXUhHyx6NWeRtubZHF1h5fY5dcKM6geaf9RkFYusyxpCC98eJoCz2eNqG",
  "key39": "21HttjA8iL1qd8C63vURCaLoxjpLZqhATj5N8qSgJXSgBYpWk9Wm5o9t59S1D7kEniLjmWtHi1kFdXM3gZmCUmkd",
  "key40": "4ezw3HNaNnw4zBMk2D4Fpm9zkTNiyHHkMEyT71GWNfWd7dfpHNc7mq44UfgRMNRH9c5mvkmJ4NTq8Sv3zarknrYt",
  "key41": "2iafQiJ7Z22NHveooMSin5K8ZHPnZG36ezYrGV19jBjA99XbwBdqDcaC7Y7GTUGaEe7b4tV1cGoBcAhU2zzU9np7",
  "key42": "dWSz7jMhbBWdC49kZFdMXLrGzSt8jppS5Gz6qwgNamRD7vaa8r5ZT8eBASrBYfZSmHKWu7rLufX7T8YTrumX1Zo",
  "key43": "3rM1hzT2fyHRZPxyfXTfoWptE35ztCBxoq7gWhGvpgiW7rpBaGNP6jpNBuYpFBHpP9qizyarb3cTtcqfLryCnGck",
  "key44": "3Reyc6s9Tg9FZzVQ888u57eAs3ZVbw5gSZ8BUaLSBm4ppc6YzJ7Frg6Lx4hqeHMrqJtDhGsM4YtSMPrPvZUTB4Km"
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
