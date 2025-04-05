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
    "21HygZyHcorsfrmMqwjtqmxkaueEaPJTs4H4VGUM5P5sHKG7Q3jcgQG2N5c5YZrAUe6FhpfDfT1ivg6nVEJWZB3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmXum6dvfHnYaSxDbGrrLGtof1YvFNw2SrkBd7E4Tx8iN9qzbRNW3RDCm8He8q7uTwiXNENBBBopiXFS4X7786y",
  "key1": "mDgw1Kn7wu83vLW72YfMkEFZhLJNvdUjdTGjcaDBCcqUGvhWtD7fdb4jScdcG29TDMQDuZeufBpCGwx5b9bnNzA",
  "key2": "2zDzHVMXjhZ18pAiJ5qVDuNzRjQdYFQQu4Zxvbo8AiTkv6fJRyrWX7XZcWFz85Z9ovYQETQWAodZWvgPPjiTDGky",
  "key3": "57AqjbANbC8YsjpGhCirFz6aE9qLwq6oVp7qnyQxeaQphQZBbwXzsPtsCK3WCpLdUF1MvmhDSmqDGMP44h74kXKz",
  "key4": "25YZtSp6MLiD6NA6mHRs5ya9hYqBiPqp2MfwsAGBHmytzuEJLkZA5e1dEWBjF2ZSBSMyXBN1b6n1E7VUTYMfNXKv",
  "key5": "3ns3qm3iJmN3aDkAeZFoUuWXXBxsYNe7DGp9uc4cB5heoZnQXoebXbzUBte9oM4kpaHF147agRwXjUMQdCyi6LWM",
  "key6": "5hUsfqmH1sj21T9qxoHZqziLQBtcTjoUM4s9VjSQfxMf2RBmqnkPWbaWEt1ZoCunTV5NzPqHK6FSxdtrhFruXfz7",
  "key7": "5kb9eKatpYv3J5FdQpfvD3bfVm4Mastx1R4sKqnwT8DewNhM7wfKDNinbK62UF7MC6FfjFeEXC5UvhumDXNEUPY1",
  "key8": "2F78L1CpvKLfMS2UmxvHXk3tQqgAGDDmoRabs7qgVZ3SEAmH2arsU5CTZhCPjm576mFuUYf72bvaXBfCAeo7BP4",
  "key9": "2uFy55b4PVuHg6N6aJ8DMhRE9A6Qk4XsP7WTKWUDjpxyzGh5Y9sXdCufMjxehs5WYasRpwA71DBRA9KSrt6VpdVM",
  "key10": "4M2Fu6RnCnDHDuBCCnTJN7kjM3VKzHSAtrptPbSZoRcY9yc4i5PbZUXRSCLBK8MLLmU1uLWa6vjCDRFj4RNc5Ybd",
  "key11": "4trFdVLXZDQBn34XT49gjtyaDzptDeeMTz7rDujvW722zvmX2Hx2PL2Ek5rrzLr9RF2iFp1E4pHbidiTs6dD8y8J",
  "key12": "3jP8DneWhwkP9REeJoHSUq8dvqSVrwrW4t3a6XaRGNV7o7PsZWAjrpw5gsbrqJXeX924RGnjRm1Gpiv2yGai8K5h",
  "key13": "4Ap2Nw5ZEbETWivy77ZzsRQURQ7qFVaeZiiSWaq1dj3PstRA2tpppU4WfYhtfYfa9ugdYWRRKi3UsRE9rEQFNtFw",
  "key14": "2Pn2SxjJv54RNjRem8mArocwweVL83JCLphqtR8yDubLdUX5sDkdLQUC4k4rJVKj8JAmcc1z1c7Qh8PGaqNWEZQZ",
  "key15": "bwaUPRVr9fArhTPv2NPrvhvsuq7YFPViusL6R9ajvoSzXw1Gqwnkr7MryM3hfhvFsJ82Y8R7gedFvoow3fNjbPZ",
  "key16": "Kyx8X9v5UVTWRByiNo5xEXUgNP2Fc3NvdAYKKw9zNTVmAtdqqW3HqUoc4Cj4gUWfahJt8ER6GXjKUnmDwaECLAb",
  "key17": "2irL6kW7MPQ334KLHtx2Eqn79gndCFDoqZ3FLSeNKaanJPNsXNHogHXfuGHN1Zm8ENKkq82iUbfSFZbTW7TFbiMt",
  "key18": "5VxjoGh8cagrXBgayKFja8hseu229uwSGxVEcgXCGygaqbTLQLbzSfacX1EXnFgzM4JhKBuxSdyef3FeZpy3Zdcv",
  "key19": "2i8ZNJtrUncms41gGvL4VBhvDQN7CtLg998pJ8wEmqdgrK5nMCChupKbhm1vpufd1LSNxBV6yV9d5kji3xXkQKbw",
  "key20": "5vx2pKyizk21o1vj73PTf1npvA8R7GYteyLtoMEsSBYTNCftZwqA9UouBL619ci3VBzNmq2menibE81EptrQ4zht",
  "key21": "48S1QgcKeAkcqgNPudyiwCeu5LnUZRarvJTEuA96YECXQWcw15s3t1MzeyxiwBjUqFtPnCm4Vmw3yoKJMQ53pYaH",
  "key22": "xH2JdgMy3Rgdt4uuvV2SiD3dnHtV1Z2BkUzzZq69f9Yq23cdPPuLoC6fBVM7Pksp6hTeDaeZwciUXozrVde828n",
  "key23": "5TyvuWMSv2q2bFyMPoUXqZyLsmi3WJbCJY7JJDWp9M58pim6Nz5XwmdAGmYSpqPSXXMBKqpxBULUMq4oq6MhEped",
  "key24": "2N8t8gdNS1SUnZfuPoEznpii8QZfmAYPGuRmGvmvE3MzSKU7UzEhrnz3xRZhGtb2MYkjhfn5Yf4jeBATva7he37U",
  "key25": "3Kh3fhKbJwwBq25fA4FnzrN13bPPYN1F2yw7pV7u3dofCb1PZydfdLQ2B8gX9iB5fuPcm56jnXwg7kqw29SmLz42",
  "key26": "QnuaCrT3aeZvHvoVVEsgpfDQSryfrKV7TdtA3QokZR9rUihmRHVFKX2XXcYdkHwYcqEBK3wFy6kyKh2Y7eG39ow",
  "key27": "48KPxZW8f1gxr8BJTvCHMZYBXBeWuv1RNH2KvuKiq5nX8t6zyFjkv6uafdXdKPQyw1rbcoiWeQHMaket6FdFqdiY",
  "key28": "5bXTQ2F1WmVebjhGn5yE1NrmX9TZQJQ6dtzipU8fWhzzciDsJ82vW1qzDfvjNAG9Nk6gAMDKgfmpsMw5LVzJ1V6a",
  "key29": "5ZnuFeQpbFJZY2LYFPDXKTSbKhz4gR8EKRr6TFGryPCWUnB1F3CS3Rh2NHL3KVcHkx5o4QymLdAb12NxvVVF8nMQ",
  "key30": "2q6AseLeexQSBfX2PzYHSydBhK5Z2uA1RQ3JnzB1KTsFhbj746BhmuJHnkqK77iTRBg6Znoj4kmMSyFxdpcE4Xje",
  "key31": "52U7QyYpXGz6Qe7y1pdPAm9SLDFuG2aotjcoBqRgkHaFEMJcKpK5qNekDBzTz5gxFAoBG15pzuHCDAW8bv6m33E6",
  "key32": "5EwqseastEtnPY7YNDpoCRkHCTT92fLB3Wcq6ZmNfV1mGfNFXUdUsdxt64Gyp9ZoKx9QJY3TWZRd8rwPF5dmBSXt",
  "key33": "2tx3v5Y7vgwhiFRuAB4JgGkKV7apLABANbSmZA2ED6wrEj3pieT92Yh2Noi4xX742XZs4dDAWiLR6pHPD2jESwAV",
  "key34": "3przmS3pSgSF2BZfCWMXZKypuckgmBmBpLWix5iV9mFzQjXTDodZCMw9aYArW6arY9d791SkF14h711Q4DU3pruV",
  "key35": "39BcU6nQkraHxm8EFFgU3aNNenyLCokcJQjSnHBTjVgKK2QLCf5TvtxWozbESooLTA9p9Q4pWmJaT4AeFpNnGSRV",
  "key36": "2w4rzMy3WTbdWuHcG93sLykPvBDZuSp7QtDbFwcjEY1brrrbAiMMJPUnwotX7bsAaYz3sWULR4tqFCKtDDeWwa8y",
  "key37": "5RbfJMspC1HdF9irZVeHYnV4SiVAt3FgiduJuBAnCcbmgi5seBPx4PgnJP9CdadM1BBWvpKZZ2FaBvN3ujfeYNfB",
  "key38": "3e52REudxJpuiEyVsE1wMthzEm768HnqLfneDi8okbScQtsJssy5tB4YEoqdDGvEdrWeyK7jgfeh3453DJ2YMgyr",
  "key39": "vc8WuJEV65ZxQgHieuGXfzKdYhx1ETPrSg51p84C2ufobK4CfhnZrRRamxC8GGQSnqaSvN3EkE6MEhx6zgsFavJ",
  "key40": "vAvrc9G5RtTTHagfiH6hMDh8bG4LGbEtyszMhnddMAUqxYHJoNNBvBvhFwXwzW2QXKYZQoxAj3wNaWsS1BVdgTg",
  "key41": "4iZHqHkGfVqHuSTMn47vDt73rWAKvbuTBQmGysS2h3hS34PWrw2UdEqwVavf1FuWHCYciQQqxovXiJXNhnwc8JUL",
  "key42": "4hpoD631svr8b3zpdfmmPeukj6Dv2F7Ji4aSpkyXZmF6nyAHkJKMpLW6zbGpYyVcA466PBpPyjbyvLop1kzhBoLB",
  "key43": "4pJaVHm4jQJPaY7RqtKexTSNPyS5mAmbgdWNR6TYPeBSdGupA31K9V69efRsDRKivRWxySmY8BeknDWFw5ssUkZv",
  "key44": "47vsdKhiqkVciouHPmPCuHwFhzo7EvrmVBveCekvQHoanYot6xmRWiUmYMb9MdmFxNJGHSGNUqtc53HPi97LLRR6",
  "key45": "5joMbSNQwqTGP6PKm5E2P6NJwxwt1yWLoRUafpvRXqTgkQVSYLSA7iENUknkVJGyPbaD13oEQVVfh2NRkEsZX3PN",
  "key46": "3rndz18h6skEjkMa7SZpc2QjWdj52onkmuePMxeZVU5T7XXPmbTkoqNcs6NFWzkRvfQD9pB5zWRVDASpmiTt8Tpe",
  "key47": "YdwWGysRG4qVSbssSXUaJi8xQ2zQcgKgcAQnVkpJkocvW7TgothiiRA58pZPe9a2ixfFrX19rKg6vSactUpn69T",
  "key48": "4EzL7P3y2KcV8rAtryfKH2WkyLu3NLsPwcEH6Cs4LBxRBk2YeVvqWX5jGphYsYdhLgr3XHmXub9z8XNgmm7ijwpM"
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
