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
    "gPj4pY3zth2u9EGhY9M8j6wQvF2RR76Lt8pCcjLDD36Dn4mmBHDA5Gcm8JZAnCBLTZKkTiweif1GVTeYMXiJ9pB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3reo9uvSZLTuHsPNe3LmskFmhunenVMaeZ8kBDhYWHtbmwhuMeDPfRtRpfcfxW6r11Q3h8SmHgprY8He2xLvfJfv",
  "key1": "5A3uV6nHBoEzTJVFq5XxvgXmjFkY66uehApvA2d1iT28D4W5PnCHrP7KoPqLYAUaqzVirMqN57xjbLFs1R9J4EhM",
  "key2": "2pguyS7NQeo9ZuaA5Bpcgj59GiJfqjjSi33tySr8phkeXu3huPrTGFm7Bje6UBXA2u2JNet6SLxTuW2YpMLQaMfn",
  "key3": "5q1fZJTH9UrWtiGpo1yZ2fextJwJSCcUxfbkwvYp9B5867EfmZHgNCFha2572914dJp55EfrJonSFdgi21xTrZcS",
  "key4": "23XCzGXqPnR1BmTTmE1tS2U46xW4jS7Fuwj9QjDqPRrbJC8cpF2kgDb45SN2SiMkS5Jxd1SgTwyEeZ7w3wAPSHEr",
  "key5": "2iQtrCBjKNWA4joDABZLbYPtY3f72WzXkF7CEycTS18jgdf1WQgFtUW88HzVVWcgxuiWsk8fZzkBFqR7AfXja9Lv",
  "key6": "4hDUhu3MXiYJW19u2RwUFNnX54akJN477kqxLpxXUJGWDLY99qDfjpq1nBwkVAPtkckj56gkr8gQogy1simhEXBS",
  "key7": "44HaVjavXNKEqsUMTV2aVMMVu7K3EjcaXNwTDxE7y85pJe5tUcw1HkDu2Azjajh1i7d2uRRTKUk5M3RaE7UznTn",
  "key8": "63s818yVUEBdTCyPzWQF4QTpi1irVivTpgALY9rpHRezrYjvYjcegpscsV6Ni3ueBMy87zLnEXuceMXynGBGZhTM",
  "key9": "bPcgsKnN82wpfLp1RUm971EJ2P2YjTdPStmd3A1ohk73dzJPtPPR2zomdou7wJcCpJHqWM6teMyKyUcY8CnQ3ah",
  "key10": "7Q9KPsXU1s77XFB3sjCnSUYwaaeB7kT2yaHGTnHqzXdDNaVmMghewEKPM5ro7AHoEa5jj9LzS6x59mqttqs2Ncg",
  "key11": "65VDQZAHKoeb5bp8jMGLpo2GAPpRRnJH9PLTcbCpJfxjyXepuisM32cWF7R9AjQb39L7UAYYXVkScBkRJkUu2aPE",
  "key12": "2Brv2FJ5HrDWygXdoz5jqY3t8k1NTAfmHCzEsXxbaeKRCKr64hJVa6toG9gzs1erAqjS2U671BP42LNa1Kt4q454",
  "key13": "35YcQ2sXhpK4WExroBgHFnd7CpjUFcoAX1kw1ovkqdnQN6ttoC3xaQCiRhQVXujXk5V6cQTvrErPXmutFdNdYJg5",
  "key14": "633Tsxz6dfDmvYRMQfaMA2hJcKw7RdnsHyztGUf7qUocqWqj5dXoDPhtQefdEXZ3Sy9VB3shwyK7nTSR6sQQDzyo",
  "key15": "i6CSVV579SVqEc2F1MW3yb143omfCaT3XCoxb2gox6g7LXcVq828KJsTszv9F4BzvBun7E69jRhJmBhFEav6WkH",
  "key16": "5yi3bz5rpUnqAfVhXA4djDwc3mgKstzwr2cr1ZhpHLDi6YdeynVDrgJVEKzzJPdN6nxGgkdfRDpfSCoCcGH172A",
  "key17": "66QFLTGAEwNbyWLqyDoqRwmqhJf2ZtSPzTTrxsyiec1ptSs6sgYwnuGnjKHxVK8MgsS5hHRCmcndiZiWjeApbB2a",
  "key18": "5xw962qp9haHSycrMvd4jGcn65akDaCmFjBkzupXn5bHm3J7BG5ojc2E2ZkAhRY7UFGnwvLQgw4y6THFmySU2s8v",
  "key19": "5EqTHnjj4tpano1u4LaExp9rEZM2wyNkRg6fTgPEUvrC5QWriMeofML8b1J91i37XW96nQEoB4NNJcHRLcNhbZe1",
  "key20": "4GuMB1SxL2zwkzxjcH6wEws9RjQuncz35QcBLMtH3JbSns2wCnTUv6bNxaNYiBQkibX9jpyiEueLftxp2M1Ute14",
  "key21": "33je2mmNoR5SuPWkWnpkZ3MRXYiS5waNUSZfLQiby35ZqWpMCJtzeqA6qnUGz2uFfsSJXynoQtB6xcLETrYtg6WY",
  "key22": "kAN1zzTG7J8K61h6kBq19KwbGDK5phiCVZUd53oyJ43PrVK4MchzdxFqBzMHMKey6xigxUqaJrig4qq7WEDkpec",
  "key23": "Y4gPgqa8gPRRvVei1wvd4vfe4bCxHzmBHMDtnpNqZcMwoUw9Nf9g4YQaq7XdktJWVQEATX8gKcQiCj4ictn1CcS",
  "key24": "4C3wNTynVh39oNqv6u8DpdBwmLcUb5LbU4hBSvjuMkRCVo6uTEonAkSYMXeQxQgoBndgGxBuCMvWngrUqF4CSY5V",
  "key25": "29GpXL3dBpDJT6v1qUUMg71e696ajmEGiZC4ipRUfFmv2maZxvPgjdeLk1qZU7g1yd3Zkr3dRm8g6vUd1E9B98CB",
  "key26": "59N1fagCLjy6MRfZRae4hXWymkeMUppWuxMEWCUExwS4Kp3m6Ny7vehurDauKX6uBRpHFsCJTEJvALMyTUXtjRLr",
  "key27": "QYzqQBZz3EL5naoiMKYvfXYdtC7rwRaerjzQztAz17fABFhDuf3jNernSVjJJyn9JDwmRUFgHvzgG14JYKUXyy7",
  "key28": "Q54cuPe1qGJbxQpu9hAbPy9dsRZhPQnW4YbMaxDC2gw9UqC5acXbSYqHftDHDXHsygByAdVFuH5zr6TC9i3UTeR",
  "key29": "Pd7CBsYr6uyhemTrmRw4yfJ4nyPXZBCn1ohHkGBBhSmGLgoMSMfGLyxMdN5c112gPn3y5jNPtv8AiKxZoJpiRQK",
  "key30": "3XvVboa1UVBPMa91sembhsujtZuJ13aquyCAtx5bMx8U2LBJYYpCxfKxyt1kM65shgugvkKqLwoA9CmUVENnUqJL",
  "key31": "4JpSrQde5hM6dqVP4x9h31P6KcbEqdQAUasBYnn1ZrSyVFRMra329KsTfT9Lsr6jVKYf5UWHyryXHtzGH4LMJnnz",
  "key32": "9NjJRYyHepN7axZgYWvzbt4ktEjypnrw3xqsZJsVrrLNLQ1KjdLaKgXccjWFiHm1C8DtmsAkFStz6R8EoAf4rJ6",
  "key33": "21JV9x548kUL9HaWXp9BMkpA4uGXoFQNhFBvH8ZGvJjytzDSY3iJKjdPwQS3udi9uG9NJMf55AG7MWfEQsk7Qdsi",
  "key34": "ensQwJ2NmRWCwm4bDKKBr6jgLVeS74mLhDdfJQZ9mVuoMdEe1jn56kWFH5za1f3BSrga8G15SdbiD5ZCKLmZfKX",
  "key35": "56rTWjTecQ9mFF9M4GGGBAjdXjQ7SGFDb736iGVDz17ZEuRFRsyKLPUJPJmCg3Nd1N99UdN3LAN6Kv8Wm9Ve2a89",
  "key36": "4Vba4CUVQ6a8JiPsSgcEbsCoJZJ8XbX3TkoCkS8ZwRvZBRvvbFvHodfs5qXbBNMTVbSUgana5GgGHN7hy2Ymo87Z",
  "key37": "38w897Gymhr9RnTtikmwbHMkvD1dKGjnL75cED3SY7uwfiwuLCdMbHhdEgataFN98QnGyE9iabtN4P4jNUNFmord",
  "key38": "YJdYHvP2aXboqsdUYSFFBZ2BwtVMPunc2noB66mowpWiJWdLpkzAhUwKoF3QmVwcetknDtjnijfn25rYrdZ7S1e",
  "key39": "3Sm7o8EKiVVizgNDvj65KzSSntJq7ga5D2wRnGfo5EHtVyWFeicwwBDG8RRLjJCEbyeBmqJ2JbDT5AipgaZmRTZg",
  "key40": "WizSSSi3uPikjxkjjt71kyijVPeZvuhmSUvqaEm8Rhc43akpxJwmGHfP7FzGqS7QZFDHUepxHFYyCJ9UVwCM3q3",
  "key41": "DUoavw61sMzyLFK16XgP6Z6HDKYCqzbgF12Yn86Mhtw6Cm7EMxoJ4hgQa9pJMQgUSDPPwGAMskrZ8RFP4hFUezj",
  "key42": "26jCxKyVQM19G4cAg4AW4SZamzagoxNayTaHB9FkGSU7qazJN4fN7WvEDgTekdDZhgfdoSPb2qWc6i8EyC3bCGUn",
  "key43": "NpcCLVYwyvUEzKxQhscrHpa8tLqJSHupbYnT1C5mg9CM1PiLSsEtbT6LdMCG8rJMjnGXFSMLTmugUZVzYHcPpBs",
  "key44": "4kqj4942hVBg4ujVTTqWTyursyo59aAURrzAk9SnAyRUhZ9QgxkZVTDiqvHvKo882Kff8j5ymKoxirb9JE6xcdX1",
  "key45": "3KR74Ujbn8NNkPUTnK99zPzbTSTuZWuta5dp2B9B6KaVFeqosfAHJNwcM38kfNC6uF1ybqyeGrx36ukkCZa5rAgu",
  "key46": "2e3kohhy7Vi1kp6pCGUG8YdMxpdMCoE4RcBr4pNxCza8v5H6zEjAkQdyu2pn86DLMHonQPGxzzhVgBrwTNRozGM1"
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
