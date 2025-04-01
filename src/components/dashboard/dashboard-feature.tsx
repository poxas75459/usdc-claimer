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
    "VqaJDXpyqAPdQU5M2nKqJRhHJRG1VJpeBtPYuzdqvrCPEwQ3V4VVpmvQG8SYDnoNetSBhh4evW6ET8MWwCzruhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TLB6sddB5dwNHHnrVmvMxcvmPxpQ8oozTgxo4iD3QAWxDZUWoXHMo4T3oKA74RNhUqdo9z5fAj2TrDZRjZdoSXK",
  "key1": "5euKXEjTMMVr7jPwHmCrz7tSbep5LrpNeacdvc2eZTjgoHy516XsjURzy3Fa1o3bL9Pdgn9Txg83hCC3vjn4C5pm",
  "key2": "Z2Y5cpQazNrCNe9GMruMcvwU2p2LJevUutgsm5x1aFm3afVKcu5kwU28nsDeDff2gVNwUxYEkAccCnrNzDBjeuG",
  "key3": "5Vsf27FcPQ571AghYjXfVmEgYzF1v3LeWZwL8fcw7dZ66Lxye7ETaAMACyi5A1zdcZD4dSnPogVR9PGgEfdxnPt6",
  "key4": "JTczxVSvCRYHEBxyGcVv9cNZZF9VqHsx4iwxswspRUG4KRPXRGWN8edKXpxEiL198mBidj2nejKTcRXP7kVNsU5",
  "key5": "3at4jbKdqKn5CuYQWdUqdCKnR7LLw7RoMmuG8Rpxiow3gjszu57Kaxh53EegSVgnefjCdYPN9sURUECZ1ugB23dh",
  "key6": "2TMtdBGohHovYGoYCKMNYu63xR18gQD2YiuVFFa4wXtN1CDdLQzVdZZrXFypRXS4admwkwRA3Wrxbu9yvbHyXfbR",
  "key7": "4sPHaWRsvRYcE1ayzozqxMy5HaUmXnpk4HuPt6bovxbq3dorW26tFP33hTcsEdgY11Dv14m89HpoeyYbr2f6qWeT",
  "key8": "2NGUGKxcoAAWwtf3q83cvgdfh5Gm3r4Qy9diuHmqcEx7LzczTAnaMGCmswALyayUUep2ydffsCrYhW5vUznR1hk2",
  "key9": "38kzykCwV6dyuKqxWSEoDsymRwBdcjxR935wHAVKEzN3WU33rwwjfG7oRz5b7dYmmFQSzDwWqYnU5YicVQcA36rY",
  "key10": "4XcdRLQXHfM9GovPdxJ1ysQF9HwzqhkiiHZhf4R4nCbNdxUojzh4jXL3PmYUD8XGrmWqn1axKbYVdPZasKZXqAQy",
  "key11": "5iAuGKYf86HRJLmHAM94otR1gtNmn6Xjyk1abVWfVSa1sLXJQVx3c7oSER1FfufAi8ihJ739jm6Gzb1rDqBRL18v",
  "key12": "5Tc2L5vwsbNEjjp6iPfKcTbrXN82ifzeJSrFVL65SWJ5Wk6BjPM8P3N9pvRzbQtEzsSu6pvW3gV3J3EhbQ8nv29N",
  "key13": "28ayifW8KATc9UJ3cwnKjzT52STqXo66XSz8d2zSGmAjdW2RwVxg9kPjwiwKUE9Qfmn2RgWMgEUJCWwQxawUHjc5",
  "key14": "3J9b5btjNDxg6Wae7Lu8WFqVtKaPEqHfYMTzEbuxv1BakdSRn56Yai7h1px8tSrjGhiM6B1NatN66dZbi2iK8H79",
  "key15": "4hnzJ9hJoXH3QFcQ68wWbQyFvt1QtY7YTaiQ4CjvdgiWGTMaUyhZjcWU7yUQHU2bwcXwEXEtNrM8yWcacrxfvxqM",
  "key16": "4TjcS6BHgKQq5hkvfinos7cHwUgJuxLFSx2vRt7miXnrdVKY224v5HK5Ya1xELnYPa5wXCxW8rf7KPHqHZfbn8Sb",
  "key17": "2y1SAVL63vW7Y3wCJ45HiGLn7wYHNY9vGxMF1T1o7uWvHY3zrRhvfjmZqz6fHX8sa1FEX6FvkRLKxL7sN9FSVHZS",
  "key18": "5wUeyz5EW6qNNtcnmdWPjuPU8jRvrhPMQeAFJU1ughoKWyZydbp6ueck4isaSta5BGTLY2QKAYk77dAoBtScAFA5",
  "key19": "59esUnPbQDEapVgBHbfu5qQGgT79sXEhWrdzRGRo3rNJtPL3NvtizF8peQUwrD22Fb7iZGmo1hmYDTTvjSEfSpPp",
  "key20": "XHVc3nyGGkhZGKivRNcyJw2W6J6JFEo7cpbU56w1z8Do9Ue6e89eT94SJnnkRGScPUVagXiftJQnvcbVALWS6uk",
  "key21": "45G3CyoduaYfsEijRRsFmjgBE7C9kod4aM12MKe2QeMMQhJ2M2vvk2YJzkZivfno9K4DqXU8iHiS1m2fPwkeGhbj",
  "key22": "3B18D14tMr7FdTvtyM7TKSQ72a6wQTH4hrvFz5E8coBSEQ6tarah9LbGh8MXuK23EMSyUzZv6LG3V9aRQxvbk72y",
  "key23": "4jaqLP1hNs86vNibACedNZ24swDhYyaMz2f1gPvrXNYHmbxxxkm6h51FYSxqAgBdDqgAH8Bp4yrPEafXibYrWSVS",
  "key24": "5WB4VfpufhYAA34pWQtAxaHnQi7p481FEZCJsvxk87hHcKqDafdKxLGBjvvMYuAdz1qiYKft2ZWdArzm2JafaF9w",
  "key25": "3ZMeiiTeny1P8LN5rY2wy3rRkm4Ef8wKJrEzqJ8xGHBTx2fQ6M48DSEz5Pw7C3mhuMwiaBpyJv1XNKJPEtyhmRDT",
  "key26": "3pLFju7Ur3ab5CJAY8zPueRyNo9ZaEYrfAYgs2LTa4iRSHUQxKJJzFQEET1UyqXFx5Pu3pvRrKN9qWZCJ7dE2Ga6",
  "key27": "55VEpHNBw97dEyqr86bv15RSr5iGtMpYCm8y4Cv6MgF9RDsaFt1wbVsg4X1JufJEYKs2RhZNrxSZMzMZdZahsTvk",
  "key28": "51H7E93wrGCU1ZDYVVb2bufYZdHyaLNPo3rvMeALyN7abSnVq21HmFP3fu7mfCs8VSgaf67KhQ6p6jKoshXVGYVP",
  "key29": "2t4MPyZNsUu5AYm7RHmyKnyeMoNuN3oRxgx5HDp8GBD61GGpJmHXiNMRvdZaUjfseQHmwbj95GjHkEjnwJoA1ndv",
  "key30": "oWTrw8JkwVvWRjWFKCgDwjvytUkWTZwrrYsZxhybmDWkWqrNhhDTokhZPrTMjgjnLMX1HbSx8FDkQFNz49j2iDi",
  "key31": "3tSYFavS2CdxJg8NPo5nym4HfBB7RVeRv5529rN4WcZJU9jyoXPsygZqSB8w74tEYMQoa3Jekx2gwaRfAJdEXHER",
  "key32": "WrghWg7ZzEGhDQngSazU19WRGLVacjjTkF2SmtBcUWw2t9X7h7wpXVXiwewQwzHt6dpxRWLWnAiJJMfzFMHqxZW",
  "key33": "5Q5mUPrRoDQvqopMbngr7tuzNJoDeeaATnsYAgLCTWDynoe5UQJ6NwWv2tdRsrqffweCDfB5SnB4NBHBDsTQQKXA",
  "key34": "2cFeX6YRjLTAKd3eit4g6cv59g3PCTBuQbisWrou76yKyFa65s43qauVYZvKcWmyT6o1TaJoS48GpcA9jHGHEMUg",
  "key35": "4GfzHmJTc773VHnAac3w47x6KUWf7My29nnvZuvXgZXXTPHPJeXc1mamZrydQSZG473fL7ftT3AUbbkdThrh3Sq4",
  "key36": "5HyNVXtDwZsVuWMyKvV9QgYUFLGxgsovXzK4HhuFogaEaFfHAPKqvgJ66jjFJJUqqKHppLHPgyVJCvgjtKGaGxsY",
  "key37": "63JfQqiQF5XSyjwURUrAUqqPqE2qae3AGBJdHPPuxgNR1wTwuZF5mJXDWJnKyci27apW9ypsoKcNgq4EZCeWLYPA",
  "key38": "4Qxn3NhudfXmAwhMYvtnWwAGaQUtT2ipQ5eb8Kk1SFikT9KRdu84JRWxMofnGTEwUcBZEsequN8718raTiLL3H6u",
  "key39": "M48Ppk83hfEXC8hdCUQ63Ext5qba5xoE1Rk36oCLBGhRUNy7ZZYWnQZ6eR5hycLgVrH3Q4dXQQKMB4gZ77qnuCx",
  "key40": "5fM9JGjHV7af5pMMhAPPGhrG8GqbPWmtzkYzG11jD36jaKc79REy5dcFM12KBUuFTBRDCx6jMJfEpFbiryuwR7LV",
  "key41": "4jZpXs7wgQQCRQdiB4exx9mUNaWsmtYEt76GCTHxf6vRYoBURue9t7N32bJJG88YNdGSNq7FvqUb3bkVnyuDFsA1",
  "key42": "2rwpzmyExs8cQeUxEDsEPZhh2qqiPbT53Zh9DxLSq3Wz8S1SQzEWoDK8gjV65RnQyW9Ymt9wZRkKD6u772hLeTQ3",
  "key43": "FdguEnFJJ4d9qY5w69zqw8bj7RkbvmLVUgMgZSNcgyAfG7YUXE6TBoKRREQmw2dvvaoRuis9Wraq7b9ygRZMLge",
  "key44": "5LPNJWYgbH2hoQCYCqVcYa493Z8o3TvXRbGGzmQXKmopmDPJBn6vTfBCk9yxyVcXCD72VdDrSCxznCY8C4eu9faq",
  "key45": "zpPackbzxKKQ1jbLPx9yep1i41f5zoPSXb8NiM1o9J48yzjXufkNYxHtdqhmNphexQafP7ChRYCNew9EpE5tfaB",
  "key46": "5rkoNDQ6tRcaEDu88qjJzs6A6fUbGEwJSGE2o3sX7WrYgBiqdMhtHA7wDti9YekvyHC9sZd3mpwghMb193XHBQVD",
  "key47": "2nkqHW7ToXuaQbomZbwRmHK6R1AQvXpiFSwbziF48o5mEUfyh1aCSQyUHvVqkHNBnB5zKVbHmQrrEnNLUSosUMFU",
  "key48": "4qjmkVa4ZzqX5E9KkwGdYDctHbLmjNDeEDDqPJrYKqeQxJXgJP2Jzv81up9PTDei9zFRvveaGBGPugKYPVrGeebr"
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
