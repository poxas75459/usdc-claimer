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
    "3aSudsV3MmtZa7jm2Sd3WTSokE8NhLsxHnxvSvMywGxYhhSq5gLrS9DJQ7QPfbaHf72LtVaYrJknTfLXJVrfWdFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64At5Nn758ToS4ux85bs6Czv1sHGFx2PGX3n2dhfoDeeerur19PPyhCGoPXcEq7CkvarLqHQAKzee4AFRP9zk9Af",
  "key1": "rMZuGzVT9rPj6jPV5khLy15AcMop63fwfLt4khnsuw2p58LCJDcc6JS5MQnhUcrHVRDWhWHXt5xfMBo8fcjsnSj",
  "key2": "2oCVuvTujcmW3Dcvkj2SrqRQ1wpkzavv6sGReNiHfbaq2ea9dN9z27mCBmkVux64D5VQYUvfqrGGP4u6B2zrtYeh",
  "key3": "288TEK6f6aeJEXtMARbrwQtVr2N84sX1kUZKRzwW37oLJmfN1dX3J4VLSJumK3BZ5eewEgxJbaCsg87fSRS7Aigh",
  "key4": "4YNE1F74oittyLk2KjYg3siQZwwv14scLZycfyRNRXFmRUVwpH9A7yCQymxepqrH5YhpaWfBNPkn8YNQ3gXbxDzx",
  "key5": "5vXeQoukC5DciQ7vppk47W7B33VPisupAPFNPrMZWBKjUvhtddsywAF7DL3gnzu6mX16gHJ1i3rZbNuaTni2NVsM",
  "key6": "4KjRnV6vdjgB3P4veDKNg7xq4f8tyoLuktTFKyyfXrz4mrwhRzvsana36xdWjhBdUAMu37ubzmJHdpXkCskp4wHQ",
  "key7": "2wYoRke4eMW4cwJWDtQu4Po2Puwydmp3mm9tCqv2vST4cLhM6toctyf92SvcPvCBhcvB16VY3nabNiM75Vxh6pkD",
  "key8": "4A8WCrdzJrFcEXJGsL7YtGiNz2H3DuA8fquCjnHbSi5yff45ogt3tYxq69nvR9KeEQqSmsmDQr7khCqRjSikdtcu",
  "key9": "5xadR1rkvciBdnZRfvMCmb88vRyWAtHZfaxRP37iUqyZtoGZ1E8YEJEWSRyZ2sGY1wJfadevDYWz3kqKMQzZcJZn",
  "key10": "5pwYB4Q7EeX96pddafBsAifYNacyL5oxfZ2gvMRVXxGRWLAQSndjzqCM9rTdNkDg9H7ewaaQvzupTGXVuz8MjA1R",
  "key11": "3Zg4b6A9VMcQmERHUsNSadJoVfjZ2uDHCG9ChamtpoDi28QtXbYsqixjfGcQs95hieJi5kLPzwVb3YRLt93vVPEG",
  "key12": "2ogtFpgNyC9zbtEX1YDFczWHS4LpgZGRpjgjWEhfvPEoCEWWv6KdtG4BiaY7ysdmXAikZK5JCrNgEMWXsupuSKL2",
  "key13": "JzVKzu8Sb6kMSHaubK4wA5WVVoKef2BvhvgA9HXjwe3oUcePqpAqaFifoYnBfjkqSjHv5NdHCPazTKTXkuQxfzr",
  "key14": "39XHzdnDnTnXQaGGoHLHW1SKJUqcTw8Ma6cW2mHw4xcNHCPxqaFJNCDq4pzRj84WQerumUWtBtYSdDJJsyZap2UJ",
  "key15": "cxHhKJSyC67niW5ToE9MvEVF3Sv48tJJC1xyzNs8VWbSSFwTv5YqDJwWwdu4PjYvLT6RcXGKbPz2MXvzFWXppBE",
  "key16": "5efAsahAbYaDFQbKucvgGiYMm4nM9TZKrKEnn6DKG9yKZpUsDGDprtD34gLqPBdxQoZ1zs5Eo1JnMN23yTtGdtEF",
  "key17": "2GmLC9guP7LcfVDpWRudt1c1KaCQEYJ49Z3tusozZ3AkVnoFMCL8AGXMRxoFqrFeHV9VPz1vxW6rKUwZ9xq3NKGf",
  "key18": "2S2cw1xzfz2mEf9JoWbSZdmX5k8MBK964uAj2UXTXtCVUkcH5akMuDU5XKs1SBQPB9KhfC2BAtuvUAFKSdYm7GCp",
  "key19": "858DMEmLyi3izZQMdVsnxtgnSg4FEtrHExRM3h1fAHSv7e1ixbR4GAXLbjckxDxc2mSaYboA9AMvGyfk3RrXi77",
  "key20": "2YXy11aX3k5eUpBBsYSbB13LknfwwEa321DmLb4NZFJiKXLgU7nJdaTeKJTuTPWjs6kmGdBw8NjstPJYYR7REpEM",
  "key21": "cXBg3D87GVBEmvCuGYiFEVZyfxZNNsEHXcK2zeVKb61qgvS7u7UaArUq8n9GiTVZz7jEFkh8jcc56x2vTNwhJcD",
  "key22": "3xDsReFLUhMXvjDnHFFGz29GEKdmibzmkuHbiE5g2hUjgD3K2Wjpkx1SH5WBdntchQj4TEsoMQ5vzJ66uZv6EntW",
  "key23": "3yQaiWPXFVdGx3N9wcxU44FPehanVPijKdMR9zjrFaLT6kRP5GYn7mycd3JEoLzmbkNXMYPB9UEAZ9Memny3vJ2U",
  "key24": "4xX6LPw1iZFTiouBiCDBLeUhZhAsWLYfhiYMw3qhRVDtCSqB1oMfn4pe4VppdKAAE8R3atWRAmgzw3Fvp3DeLD31",
  "key25": "5srzRZDpQn9ugyqNZM26ZWTjuUvSMcSXvaA6WgjbwbUwgnJtfxYsSU3egve3ZmRcQvLK55iDRguUUHw7HTYRgKXo",
  "key26": "3hMhPSsBMGzc5yWiqe3tPPivA679Rzxr4m7t2xjyuHZHKwfig4JGjgXmUMXzqTxNE5nFmX7rbDVTEi4wWV7AfFgN",
  "key27": "2B4Zqc12KfaHH7t58uny6R1req82zD2ohybLrQWwUCusrQcpP6QhFyt6otpotvf73jSu2BB5Zg91KyUiJc6wkJzg",
  "key28": "DmceXRmbRWTGDtb5WPZTXxGrddnJi9oK29oCupgr9C92nwCnxsverA8g93oZZ1iJGVqPjTQjLtLSKcvvyiL23wU",
  "key29": "2Fj4Dv6nxiKHzpPSwrLLkR3vkoM2rQnRHKthd6w66mvVYgwJFWz2yq8om3vUnzfSTJZt3gqbig1m3MtMudJhBTS6",
  "key30": "CJtsB4ZuSSk23e97G3cfer2Bf6XeFPRCPfSHmZvt4JZybuWNRzbRmziWi9SesHX9eHY3y6wq2Y5XW6y4LuTe7mL",
  "key31": "5Xhae6hZbsitaXkLnVQgdRoyKefwAVYP6BKmgHtwt9sPuCtJBbGPpn2imdyjEF3vu2rN9xm51LcTKXtreYB8ycD",
  "key32": "CLJunpePoiy4jka15PVDtiudtCRkUU96iMxrgjaEvoRUgKjjJZLUAMrT2JwuRxyTcStdfmUw11uuXaHNP3W8rEN",
  "key33": "58b1mf94igdvTbv1yF5PpJ8WBS4X687G94j7uWNRnjxAGDakDdB7bmUtvvdkSGz3rktHecLkCwbVg66g4gekyVuu",
  "key34": "2S8BcGLgDWzdqhDxyCXWS3qXKXGpFifXndtHHooejLV8xZGePWmhP2NeQumU7H4Y9v1h7AbNxHNSnDEZKdnDqgvD",
  "key35": "8MyHEeNz19rDvDsJQA57gDaKKw3ccGjGgFwFWHxu8kSMghxQJDJyrgXSb9cBLdXrRRGKZ9nxdgGFq86kjzE1X1v",
  "key36": "4kuYL392HrbL3GYKi9qGvrdKJgFgszcz8BdqNNDXP28rZ445DXh4PookD5cw34q56eWy18Fe6v2hN8YE3w2BxzCA",
  "key37": "4dYUMbrM5ZWGpQmWT3R28ToY1AdwP4yTB1YXAbmMsC5NMiecUPWX6HCGVW4wYCTAzTTQRFUVmzEDT1BaLwSEjBXx",
  "key38": "5CUN8qdnYo1B3FrCM1nttKNJCPdx9puXKuMxNAP3RGyqUPvAYpNHcY1FyNFQu55TGQ34HUer3LBLWQF4SxwfFmb5",
  "key39": "2K9PHcdG6UnwoYSjvHASn4UhVtLcJQeY22FAjKxfT4VvttveDfu2aUqQAX7WFEHV2YbRWDc7nKJRu6428i1WDQVg",
  "key40": "3WUbnMcETkTRLdUww6YLih2aAwqfuPjmYrAXatEQ2p5jHaAp4FHsNRVojtkWN7KnXo7p3uxjkaCMMAC45osCi2yN"
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
