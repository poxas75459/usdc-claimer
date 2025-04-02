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
    "28ZzruVkexQEKLAevnq6kw6dsvXsWaGyDXd1x9XWCQFf8rAP4vbkB29Z8CLmaFPv6baQfyxqrBQk4EYkUg1nS24T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X9zpkfFidUsuqGQNqzSNhf7WKs5uBsxksajpDn1tWiJ77fT7CF69cnku96egoXHdBwi6vKs4EdHiefD25SMxCCc",
  "key1": "3UF8paywBiBEYjTLkvpdcJhoWfSNiAtGduYwq8fTBpAUcogvJKv1XUoD2S3izL9NyxNrgwsJMejkNmhFv9A6Buuz",
  "key2": "5GPE37GVE2LLymqZbg8HnWx6Qho6ERAF89oLQyavUhs92U3wugTUJnFXhRVpz35SzV39PQJiSVHuTnUNz1VieNcY",
  "key3": "4A5nsDUDUsGA7U1dVSwaijQRxnz6ZZhx9xsbgAypcTQBLNaCGUQdzM6tDT2erDSz574dXs9He3G5BC2LksDUuJ1R",
  "key4": "4AujMfBxW9UAmNSnXg7Vr4Zr5RURwoWxPNgNtCNat7N64re3dKQPWDMVU38DR8yDdCFY1iZStxemYuWm4Ys2jFtm",
  "key5": "5fXSdPVE1r2rhRZ2CTnCew91FDkwEEdeYVqfsDUgR4hY6LUSqBJKyS3aWoEEwbrmMHWWKJn7YmtPGh37NW5XbK7d",
  "key6": "2RTncNG1mRL4SZjjMTNWDJnjJGbFgkw7PUpYqpWWBgHc7dW82bBg9ZCWSSQVX9ZGTFdb9XQY5mdMSjffGXaTqeYr",
  "key7": "2Xix3VAvS32ydHadFak7AV9A9kUDhr1n6X84NDLeaAAZbTuNrhbXVuSexa1VFr5tYiA6HDYGyVKakBCvm7XjDcRp",
  "key8": "Hy13SVKEtgvpwRM4iMPWg1inLdExhg2su6Cd2qSWFgjXRxSKXbY1LBwurFNSBernTdjpJP95Jaj7pv84USdaKbu",
  "key9": "D7i16SkkWomxnWuhTKkoq6KXiD9XU1Zm89nG8MtoMoyguuJ98i5E9K9gs3DrG2UzkLYLJg9Py7UL4VKyKjCUPXf",
  "key10": "5ndLysY6vVSVp42YD7vUT5MeLsJPYJkCAE52j5ZX43bBR5wJicnhLjgnXsGpKD8F23NNKs5JYD2X9BFimsRR8RTT",
  "key11": "3PY1ptXLFQ2KUF4VFSJ2aKZ1aCaXCU5BU6xtQxLtHqag47ejoQmKT4CyPis3bes5DXnZGygrQtNQ2CMuHrgTmdcz",
  "key12": "yCio2jMYeU5HdAggzEx9VrT6bkd5s3DQ19sEoBe98pbHi8dbWWCHiZCvC1fGMCnbqerunmB5BUAzG32fZjCBiQM",
  "key13": "3zuVNAxZm5keskCyAKcJFimVjdboZiwGst6kCNq3BWpqWJYqAaD8byautPZYiNJfvexvsaDYXqbe7WimWjBsDTVP",
  "key14": "4VbUR2wQjNDBiFALKD8tBoSSLENK7gK4fWgvaYxeuimQZYt1vBM1cFGx1aJJQakSSQPHqwhohTEMMi3ScphnhxfV",
  "key15": "3mGvycheU4Q97FcDUtBGmWpBHvNUGPsvox6r1Bd5mx8wsuFKgS1A3RStuYwk9Tnq7UqRRLG7eWffpKaQCYkpC6Cx",
  "key16": "w5668U8bTRShVKoumZ5zQacKuWjxRScdhtJznii7cxi2vpZaR1rsRv9RQ7JPvLsDac181GsLjPFpqJYgtd5DLH1",
  "key17": "3pTCCwx3pbJg7Wvs6gWoj4XYABAxsAQZEodjQjnakRtUdDV8Zfahcqx9tL4NavCshbXjXBGhWn7AXWHTLKtG3YW5",
  "key18": "3KV1zi7gJzFLxTLZ5JXXd9AaCJCKTsQuhQpsxVFue9FX3fDTGW3A1fGXjEDNx7zgkEvPUukD17EecgSJcc2hUTei",
  "key19": "5GwjS59kUYt1Qo17oYYqzFXm5NYZht3MAYX3iiG1GjMWHdvtUA7MCswVhr4R8qT1kFN8FxU6xSbeJTqUMoUKWaSv",
  "key20": "offYvz7FUDeyEGt3dSDaDvjCtWQ6sHRJSs1YNNsnrcLntmcKjn9R6JkgfN4FDZmbByeEQeDMKr6qmB74WZnJn9L",
  "key21": "5DnNG7DzmainLr9MH5tfPEBuZzqjYXUiXuzVhi414wtR2vEeTXtt7QrtsFTUUB8FfqWG3pcXyguSa3AkuxuWRNeF",
  "key22": "2Xyp35dGAmkiZgRVREPG1rK2FYS5gt4hxute3u5aerSmRRp3rfXQmPU7dHAxkZyWee34zMqBRFKzST1CB57eGe3d",
  "key23": "RNVdyfug1xRezFKwufv2izzLZyjSCP2sqBwqcRfSo4C8TF7EpKJvtFtEvtBEKLBb2eoqvaecuRkBib2quCfMXJg",
  "key24": "Y3ebprp75Rn9U5N8J8WmNMz4ome5ckqs47BWRLLZ5FuKhWFY2CqcaywGJXmRzeTMpk3G971wDPCqv6D3Hv9N9Y4",
  "key25": "4UPB1Aqr5dY3uaY5kxzVsrvLHnHuT1TFn8r8pVmq6yJXGeq1Xwv8iJk6FM2rC7Db6dpu1EXTxhawQ5HFjVbRxKud",
  "key26": "2XjA3XiGdktgJVcuxbRRcNjLGpuZKKMnStTUaZLw556fVoQVPqaHZ7r5DTt9AqnXBdBDb5oe4VAy3TASoNirR36v",
  "key27": "2jAaLaCD5m7VFzwhN2fdzctUkaaA9eC6HB2UeP9khtEvsBVjAVZT9o9opXBBWKoscQ97gA4kFE7znvQ2ZNoxW773",
  "key28": "53YYjr8pqDhmitNmqVqhNbwN5unnLTe6TLSHMeP9Yqsg926G3ftaCQPeUQvuuzNLTebRBsypB54YLvX8t9EJfpK2",
  "key29": "54EogGH6YUvdaQH3kuUq8HhY5VxDfpv3iQipW3BEwvK3caYDnWreNDZS3wRsEV7MLxyMax8VYmzzpXW6X3KrWtDH",
  "key30": "5SeCDxHWoP6ViZUH2GXgD73LqP4nj1MpFHvNB7Z7wZuXeJSNF3QU2sFfPvJtDvqAHp4cG65RhKoUASEwPKJM2MQg",
  "key31": "o5AVqwq2jS3vk99F8KP87ZnDmaBg2buPohuDnSBBm7Natnr5eu3Tgz6w3woEG55nw8AFh4kqf9Npc6vs6GLPV8B",
  "key32": "4cYpa9SJPug2hSiks6YVUxLxFBK4iUCZH6eSvxEvZxvnTcHL9MUWcyV44meUb6oFvpZsjUo5wcuah4Vzd4dSGtjK",
  "key33": "66pZC5RRMQyHHFyFp3dyzbCVc7H2KXkHCcZoVE1RYJnbLrxzMHAnCbMSr2j16z5UWvC1sBw9hVSNes653LJiZ7ai",
  "key34": "3xrb1Kt11SGKvBEAEy7FYwmPW1j6GFydJsahkkGt3fgTdfX25ZCKr3ftyDkjGPKQEd2RmuRUKkf2LrxcsSL12Rfm",
  "key35": "3UtEMv5F2MNkHBTDZj7bXkDcjemirM16wvEe4wYbrXjJJR2a8tBDFQbZRS6vMFqiE735UGPS4SaRMg5AACH1mNrx",
  "key36": "31rEm1QofqZmxtK7mdCyGXw1GshHaaRYH1LSv2pZDwuqiMQVzYLF9YXqxndkexL8QvEhnpXhoBS5qjg661x5gaiD",
  "key37": "5ixSzkkZwoc5L84KdP15F4FSikhWf31WM3VBJWa5wB82KJMCS7B7Dd4vDh6d7KASvJk8TvY2mpyyMKjzMAPA3cmZ",
  "key38": "LpBBNYoYQYrUSddnyGkL4iHrAatMdfXpjXqoL28fwNoqyPF1sc8agp3JXkBjFHdD2QD6gQ7nfYKb3JLUQcqa6nP",
  "key39": "2mU5sFdQ3afPNfogqEdKu6W6SA1dkNjfRWwap39nLGuEPxjjjevBKfx6vR8Y1rWYhcTc7pfxJraMpDqwGnnQ3Xdk",
  "key40": "VrXzvADz2o3mY8CB3e2Ma9f4kruR9n58VJCgcGmjJm1iVUoKkauW7Vh8GQMxwmdY3fpcGqrTUeKqhRAM45BzXXQ"
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
