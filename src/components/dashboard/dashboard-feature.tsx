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
    "KQgaBRNwoBQftkD7mGfXwcJp2N27Jp7XhPzRB4J6huVMTbJWAt13CFR2m6ULRgVDejncshEyPaF3ZnTLDQAWhSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Paf8DFs7ZqwDrwKcMTyWesozMUT5dNNjcd9EcKWzKfyVrDoVwm5qSfQrpXWwJCQnLrt99sLxhhUjYF9jijjrmS",
  "key1": "vs2Vk5Rpnu2CzATJHT5jKkkEe1rBUvvw4kAnzbY2gRYgS9Rkxx8HJAyNHJMN6d9TPQVonDZ766pfozVMfYoaAaj",
  "key2": "3Fo2NPmKbqhhzpmrv1UJmhXLrkaPds9Q8n9ZJbXVrac2SdYJsMvr5HqXVtWBCstivSZhNdRg17mx8xVPQAJohiNw",
  "key3": "5XFXagUuZofbWb7Hb9wFsR5JSShWXMhpkdxv2EciMxfEwQ8R3VTo3PNZKcHPsHTF1MJpQTcpHEQZewfiauaBmAwY",
  "key4": "48AnqqDTK21dNXSDT5J4WWzakbmCQ5CoJB2wyapUVXcaViEJ2CMoDgE5SMucibjwDhN97fuPBuUSKEYSFrPPTAV8",
  "key5": "4pvmqRbwoRKE65DKPq9PoNbY69NbJ6LrhAYKonK8fkdK4ydQZkhe27iSmWbaruWprDD8Ck1apo2Se4NPkGQjVetL",
  "key6": "5y4Ck2Djx1SxNxdhQvje985oeoae52SbwFPPu1Y7NskGU9UdGHQkJi9ifocGqa8RMyzfdLuNziiwQ4VoWJza1pYa",
  "key7": "2HquciY8PyCshteHdsnxsJaYKi9PP6BUZC7dfezv8WcbvrxoxH4sPQCRS1dAba3L2431xHmx28nHSxtaAXiLVpEk",
  "key8": "4DQwRguXJmAFpieTvghTgfdHXphm4CvSGovg5KDqSpt1DQPHJ8RFZ1oV9TnWo5Xk11Zxfgc9ks64bhRitk6DaJJE",
  "key9": "3PJZGEjp1hA11c9XQwSsR1TXAHXbKJpnBf1qTMz95vDT9RUy8RoTzQYyUBm3r7xmWxAMMdDRgHtupaeTAmd4UriP",
  "key10": "4LxbRpRmXnTVGkg6B8pnrWAXETo84yNaDQNnDjHhQr8r8XMJc5BgpX7fyd5RWuXMkcLLXH2iNhAo85vMzsqGRztA",
  "key11": "4oVruPtMR8tZhL7iyYbTk8QBr6BbJdjQfrvaiX82kyotcW5j4cKxozFQqD4r8eTFWErKRpbzesTM5CWoPEqd52cR",
  "key12": "3ujxLtLmNWqj7jDS5EeZ1Js6ZvKFAc1L4ffo8xoPqsi3x2SzmFYnMQ37fjDGK4yopfLwHWyo5zweygsvz9jsqrbF",
  "key13": "Nz7NnJzWjBTz9houUQdJoeVkT8x8E4Q7To4f81svWFrbcDLNh9oQ9ZCwQCHWbnMdDAMqqJEVQrxSc363JGTbzxC",
  "key14": "5dcSe4Ly4C1tnVV1KCtkpsJHGks2pXh89iLCGZMTXuqGiKQkR367gHStsvEcjqKj7tz9rAR34c2MaSamiJZupJa5",
  "key15": "9VWF5meSnPr5AY1unJkowLooiVLww7QZZkG53ByeM1WNvrd9e6uENNiA46B7RJbXVurDXKDgFpWyEg7S9fsNbGW",
  "key16": "5L5eKYsKx71rJPh9KyCc3u3FBV9kTB1sF4scFVAuxR667u9qB8nVXtve2raToCokWbLafAQmzjeiRKgRMd7o1RrN",
  "key17": "MmcU1exJ8xzeYqkzYwgh4jhmGTtPersftiFZ7RnUvpLNfFLrMKKwcThtSba1tfPAThKLC7F97gUPhsorK3NzCEa",
  "key18": "2qeoju6qeVkqbLSTmaz8puDktMxYnFEehC8BCLCwT2q1G8bKjQFwf3t3B5qQUQPACyfkbMCCHXYH4PK6X4h3cLUR",
  "key19": "5QbRp8XNK2tQ2UFE7CQm1PnuzGAhUqayNrf4mChrdxzHqQzYYVMTTRh2aMyShKNTqfM8n53he1HxT6FVx3KD8tsY",
  "key20": "2bbBK6PAZ1DWa9nyTbi8fotqpxcnVSj6FfTyAR7Q6bHC6j92mVmab5d5jbGinio6gHdjbuAG7WD7ZGEVmyptkiyA",
  "key21": "5h1EV4rL452qkuJWRGuoCpckKtVLfW2vM9vsxjK6FQuh6N9NL18k6D7YKgFMSN8vd6rQj1QQpcGD1k77C5GtqHvN",
  "key22": "UShWj4HWNepBdsZ4P1DzBkiErgfUt6tAXrsE9a7s7WDCMYSrixqFYqJqhqnGvXH3vsZR5ETGSSERiNqCDGYZ5o6",
  "key23": "2jXkzwBfw594qVPcj9Ro72itE4xtdhBBJ5ng66bEwU14r8GcfYEyjqx9TDtTji49fWDDnz1zLBX3KdKqWRfJuD6Z",
  "key24": "5918kQCEG9SjugXNpb8XRCSm6CTwZkCBWJrGNDG5amtURbfoyPvYenWPCsZXu4F9BHHzEzQhSspaLpiJZj24a2Ci",
  "key25": "571KLu5JxJRNDdm6isszZimY63eiiwj2ZnSCssAYfHDHdNieyfYJGep8m6HhNTtodt3WtyiJduw1TGWDx82W638Z",
  "key26": "2X4Nupksw5vPF1bzjXqyJG2Vd7THsNXPeqFYUTCRJEBh2tKf83wpKguEhYs7GA7KtYY34cDbn9MPWqzcYoAQYMZH",
  "key27": "4qMazhSg37bksRJGSAGoj6uffA7PCSLasnEP9kQKVytE8iDZgtGpx29YYuAdfej5VCBuQtP46Ac4a48VMXGtDVC9",
  "key28": "3kdyoJduQ8wokPt9Tw8wKuo8xEpypCpJXMbGKDEnDbmT9iSmQgqvxcoJ2ZGgS6jz6RHHn6r9T5asQWZxnwMk1Ajs",
  "key29": "2nL43njofNHnfHq6xvP8cvHiTz1tn4Q3mF265LK78QLpBeGgTw5Sg3M8W5magnApxfMK9BeK2FWCtZKtuPn3PpyY",
  "key30": "5ENuZK3GcjUcuccEqjvGbeNRBhDLaK3BBNQx6vV4oK2S8sxY8LgeLqxhDrf3NZenBTzhHEgNauYtdZHh4aXVvHxY",
  "key31": "4MTaDh4bQfFtGreiDQyb9kXzaNjRjb5FRrgKti4pM1S95vQnHwRyLqMvBFsKwuDzPHN8aaaKCebn7fqiDNWYgp46",
  "key32": "54LdcNxaLkMJfb5EqatZn3nHLwc9bVwvUqZT5nFQtf6hZhdhSJdT5VUZVuJH1E2jxvS6KYQcU1PqjEaL2z3jyqHJ",
  "key33": "5pUoEGjfhTqL5VChmmtcByY4XxYcyQcJqeLQ2gUabsQmVUK63n9v4BFRvzdyZew3S11Lc7TwcQm2WAkhUyLq94zD",
  "key34": "5emfwz3gsygcWsr9LYu1gFgd2AXNtig5A9sb8bu7MEN2HXVqnNsupNZwyKCRZh5Bu7LiZYZuVhugF5wDM6Mdrpb5",
  "key35": "VvAq1wi5A8XS8SwAxhqJgC37gw2Kz2VPf8RSNM5dao5DPpmngXPCJ7zFPWEzMZuGZg9zV3GC9J8JC93EFT9vLjH",
  "key36": "5FuEkR4K8pJU896WA1Y1u3mWJ7cPCz8sYvxZiSkxQiJPUR4NfSAFoRWDeNT8GLgTWKwrPxu5bXTLfGeVFnsmj6q7",
  "key37": "4yeK8gWWHYNhUCQh7F8sBFErmUrihtk27oaC3m4UtBtrvAnNq1uYY966EGfjXZaty5F6EppaHWpTAsAdTRKxiWfg",
  "key38": "3zEWMdHAb6vbGMhxxonGJeVLVer4f1oaycTg4YtQ2B2ZnfwQ9s7DR8EPLaKoTdpz5eXdRXU1LDaNp8u3Je1PYjz7",
  "key39": "3UCSECC9rFE2SpRgFk3XunKZ7v1PT3FRmK5ZivGKeVHmstt214MQaHp7BrMGyC3W8RFBnTd3Xe5Xpa6nZjKJetVL",
  "key40": "sXfKh3RARWoAA7sN7dE7uViJmMz8q8U7Sn1vfHgVcsjgck8b3awgnJttNcuKLoTreMe7W6AsVo1yWC34jemk8bi",
  "key41": "5K3HmHT11BRiiZ2dZMaEca8MMFtSZsjksmuBWgAVpnhqEqCuhzFmTMd7kKS1nAvKZkwfPMD1NFg9t1t4AtzBsCVF",
  "key42": "25wx3GNyz3hxKGd4eABCYg8NL2dT3xyp1sxHg7xXbC7v2YU4fzpjGadX8rei2chpASesriqTCQzRL33FJR8KQZ9q",
  "key43": "4amP3vZrgPTV1qfXaY9ec1mPpPEz5HXkwDsT1FXBErgvg1cZTVgCeceDibnLhYvzEGQseTKgqghqD3uPxqw46tH3",
  "key44": "5mxkLhSzDAjGf47vNmLddLW1LjjXmgLmDNpLfzqJKv8ThCVmdyKyEQ5qrN7pjYWxj5zJp8u5D6YfLPYUU3PqQWve",
  "key45": "37thJgaffoRP9ye1RtRpbvus5kdAV2oVLtN86XKdLiE94th5xTtpW3t5zikBqJssCq3epuKNMfwWyubawwRwBV7f",
  "key46": "541kHWJCwHUKoVZ8XrjcGRUBwkx7Y6y2gsmQ9xvp4PosNuEto5QqqpSnPsBNhHoFkHVDBwerT5W76o1R2kuJNjaq"
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
