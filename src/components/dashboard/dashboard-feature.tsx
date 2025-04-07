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
    "44toNP2HLFWCjm3w3Eiqon1EozuRn6Uww6C9L8jL5Fs2HKnXCRw6tTWLa7Sqh3YFu86L9FYeGCNtpkCbfXe5mE3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45x5t6JecAeBYNWWqgDRDaoUmDqvxbdAjfxLRXEhric7xoozSs7t7WfziSAYPhdyq1UjRKmawnpZXcnGdVJPstaY",
  "key1": "3eJYxNTsbPfRkXCG6DehZ2hLdfjS7C8hZLWFKwzubkuoZLtm2C8kBMDc9bvEbBgQQKecpsDDuyH7KRranua8F6ya",
  "key2": "4vNUYBUN9imNycRAeFDwexi6p3koR1U8RRavpThA6wjiKJEv83cp3ivdn1a4tXkSfrK78ckqruUUq3NqigyksVhz",
  "key3": "47XWQtjy4MCCoyrzNEWQVpP7Q7WmvesTfHCwydKtsfvaAJhVY6vdZRZ5iUTJwAfi7bm4krFgJxgqCCPitqNsamgm",
  "key4": "5vbE9inWtujPzKvYLJTtyMXDaaEnu4Yzbj2hxe8tKH4udQvk2nm2PrnCM5ArEhhJMzp719YcH4TPQBaHJ2C6HY7a",
  "key5": "oXRNFQpefNC1Yx8yPCF923EwBxMZXvXiMTWs2W8puwoAKtw79NBAuvcRnYMwexuzDyF21qY5ttCPmwyb9nc9RGA",
  "key6": "5kPexjTG58hiAaZ774EQAxcUTLqP3Me5b2UXpCYsdafRYQfGS17bCPNyHmQwin24Zr7oBLwKcMYMFmZai716CvwA",
  "key7": "UFWcG642xoyKSa9BoXrsTEfq5hagyRGsQYoLM9gzor7m7v8YGdd8WrzPgi6z3RsRw4uhfZPiqKMGqdVKkBeSuLb",
  "key8": "3MuAbJms9uftfJmr3uDTDwxeHp7TK1XuvEYYCxS9AwUmQQouWrywg8SsuPhcVBy8efokaj48NbykXEUuQigrzpV4",
  "key9": "3Zc8v4wE7YRnmmz3LXWV7n189fqLsxVMVpEA1rmEvoRuEArzu6jFGwKu5bvi19kBkYj3DhnPXA7iyXmPvxZ8dFiq",
  "key10": "37he4q97N3ZHpAm5umj2rCNZ1Qt7vtWzxx2nLXqP8TQermpv3T61qUmvC6cNz6EnRHWbQN9Unnc9AAio1WigvQc6",
  "key11": "pGr6iGQuFDw4DGKwbdqe9djuhNuNCEj2y8hsjfvKbM6PcrwUAgaMtM4q1sWfCZpY9PLp2sd6FVHpAoaUXrbNVj3",
  "key12": "5D2yi17mqfNrrUkzAvSkSnqzFESmqv14z2fGxVyfMcRz7nRBqBV6Ee84iG1X52uQj49d47wKkF4KuV6TGeYV2LwW",
  "key13": "QjoYTytjUdTWsByk8ErmEnd8W3BtmRTvyXxoYacnsjbJosz3hr5TkU2VLkxjAcZKW1bfRZPnumN4khn9hnkCUYk",
  "key14": "3zsEyMwGXsbDAe7tfb1A6oszkyLKWuVBA2p3Jvk1hs5dRfydFLqVsjpDhs7xBNEJeULb2AiCzLBn1JrJH8W78DFU",
  "key15": "ZMpCaddba1sBSUnM4TruB7FfW4ijDLn92ppEVsoEwR4HjkPvUAgftDNH3yZv5p7q2QC1J4VMqEy6UZrvvnf1ZPm",
  "key16": "2xCSw6GTiCSHXBvkvB7tuirqQovWJqJkZvM5UkiUzbRD523GxzJrbfTaKjyM1eFXFzkvZf4ZMQbHR8fMMK449YiQ",
  "key17": "5gTgZoMCTjwsaBjXwDu43DQz33Bf3piYzFxjVHPuQJisovmY8nt1jbrYExGMbW8bjYEn53EGvQbQrbowvH2eqdir",
  "key18": "3cQDkTQXvGzVjjCG8e7BnfaHf9Yw7ccvPScqendMGqVfvA3DRqwVuBKTKr155qXf3nZpXEm4GtwoquE1JPvaXiyG",
  "key19": "28earsrChCHZiUh6s1Xf5Nhmhf5dGoUwtYyLstELaRLMJgSRJ72zsovBQ9e1ycHYc16qcF4wuABz6VE3MPfqzZK8",
  "key20": "5wEZi1GhYHqtpyxRFqr8UGTUDUBjEtAE4LFzdj8XMhbcgxMkgwjrqYoQ3i5dJuepJ79u9hM96GLTvUpyQk8cuN5L",
  "key21": "41YVxt3NVtAvG9VVfA6aH8nbVP2A8HjVJ6NeV2Zj64ncEWwUiYmAGwb6vKymSZvaLQbjFPN6qYTJxea9tyAsQMdD",
  "key22": "3ccMKrdKRwi2aGRBTuZ26BJjFBWfEaQdMidweDV5cuhz4DMUdic8z2fn5RPF2idMNgbuSoV6RcWcRuZyNDHVuMx",
  "key23": "3YzAf9u2p3tHcyYsvNVpxbxqDb5hZFa3QBGw2q7uWB6FHt9ZhtpLqk1zUH99d5vDze8oxWHHfToLD2QUthLTLtVi",
  "key24": "3cHGRY7ZQzXemmJ6DtX2dge1hvtv3WZQwq2SEUNJXRjAbEUsYzK8JPfZzceUXhQmqsrrDjHcmYBNDxgrgi5SX8MM",
  "key25": "3CTkbgGcHVTbTUo3CH9NgiF7M7qVvcRt6ffYk61LQsfnFpc8cLA7yZ2Cd2UkZMZ4bwq8AUztcncxA5Tbmdi9kFGx",
  "key26": "5bYKmPWV9QASBnnAdCW9yeRAnPfZ6uXeHViYF2cQJEE96qTnGdvi5zKpxfbhrzJYQStoiPVrEqpGCHsdX7pdF2dk",
  "key27": "5Wm56gNHZYRRrb7meeTaod8oM6DgwRPEwHvgQGwzXybt3WpsXDfyRHM87AK7ZxkPukJMb6iuwcQLLkEBgtXPHfSt",
  "key28": "4Uwj4eY5jfMxx5imSjYpSXaPvRFTgHnrn49rxYXkk4rmxXW15WbcVX4jp8V3Vmav5xJvSpW9o3eJEjAwaxdDqH1L",
  "key29": "349mZkQjAU2SJhLiikEH46dNCsLgHFJaMzr8ga36MuKdcuD5WZwTL2dUg6Lj2W7K1FHJR4Bae8oWxBjwEiRJtKkx",
  "key30": "b24jdtMfdBGA1f9ePK1wZxFzGtqNFwTEtCW4zpMNFm9BmK5NopYTx6fDttWGhbnkUMMbHU3quGRE22fq8sqaER2",
  "key31": "B2fvKLFQZ9pv3LuqKDuNP3J5L8pNcJgkzdCsjvS9wgxZQAhkdf6pGgVZaUzvehuLYTCCfqQmfqnJK19G2n67jY9",
  "key32": "2Xdrv4pmtWywX9D3oLdYGNBBnEZSyXhzX6vynJmCKaZ637Lujntgo8mrjdXSG9rApnDSpw9BiaWaYXyyP2jbKut6",
  "key33": "4c34kkgfTgUr38pP2sBTRi7icLWB7QxjjqYTu37jSDTiVS3g48CkaKiMUFRybmpGUQ8gV53kRHWRxJc8okN1xdpg",
  "key34": "2ZjceQ4uWY1zybUt33LBRbLbdbSbNgNZ6t9YW2ddzR7GNkvwcyXEsv343Jnj2bTKXsFgLJPNc5ADJdWRVAp9cS7c",
  "key35": "5WG1ehzhykkiV4qRohb3Fm6k76rJpC4HVnX7mB7zqFmN8FiXk7Tggc8t6tkYXSwtceCsMyKVj7CC8PS2uq9hSdzS",
  "key36": "VpPzE1F5mnomadJ7aD1beegchGkTKNA2EGQXgJgyf3fCMUmsxTWFWPQHcaHFLhGE1uYbgcNKv3hkmGkYTPJVqzR",
  "key37": "281F7qFkpSZUjjNEGygFyAw4PR7yAZTT5xhQZCxhktUQrpuNcPcvsDVPfxdwpnz5cmDDM5nwRFVTvZXtubaqoSXz",
  "key38": "5idoAF2JFiMb1ZMWFhiuFGngRQ4mPsBJ5CyYnco89UCXzSHUxMFzKUdfGKTwMmdQMGSDZntYnersybaxcmkhVe8r",
  "key39": "MnJt7dBhiLSTedCTczCeWx9ciW7oVVTh6oELfKRLp1FYC3bLo16ppMYiR26PFxhck276PRoXcdVgjjMSwxmTw8v",
  "key40": "5kBsyndoK3XF5PbUWq9PRK19ZdiGTEjddTxH8t7hPNBxm63REzSn6j1GUpvZzziYi21V8Nxr4tNzXU7EMwQ18LZA",
  "key41": "YnG2uGxWonUqNQcpHR3B2HmDbZHKEb9K2XugtxSZoAgpghRKwDu3voZnnxj9R7WymR8j37X7HMgSCuBcLZNmjUo"
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
