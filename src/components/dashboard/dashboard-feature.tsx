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
    "3im6AVxouK2GYr6iJuNguCRUcu6zD7FA9iyiJAiNzsHY1Qcb7WrR3ikLgVKsVd5DbQhgb7tWkZ65A5AViScaNZyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jJcDm5ojix7jLYy434wt3CLHPAUNbnVr7TWmrrBA7j1MCrVSaZGqQfJKiLtDGkp5xGNAG4WMziquFkZDebPEwoz",
  "key1": "3s9V1DijnMUKgAr1risjKgntNU1AfAZW9RtjwRqTediaQVW7m6DibW9we4JZDxMzvztc5xtHLm1sCr8rA1yT3D2C",
  "key2": "53RLL42q2UqRWEjS6nyN1L7pkk4u41nr3YCgLK5pdGRtwEqqWFkAM4kYy5DX7kSXD9XFigSKXtjBAfGWQZuKoZ4Y",
  "key3": "5qLpdXergtgMPFAsP6dNfB8HEkvwQkRSMwRnfw2m6z3MNY6d8Q6yfq1xFtGfYTz5PumZS7yjgRp3bYRzFbkJRVe3",
  "key4": "47NFp14w7xcp5Rg8aUp3xH34PgUiww1itH5vbHUHtdsVYUQQhjjk8Arfqpaak1PFYs62x57TiiDKeoXroRLgXfZc",
  "key5": "5haoBCa3EvLNoLLpDFDKyLq1rPXTtbiGiz7N1Dd916igjcBbCwF5wD6yERUCPr1wHvRmgP895dunk2TQWYcfjKmW",
  "key6": "26SxbhjN79j7j74Vt3dM37ACGFAVQt6mXHTPfGqGY75YCqTVK17ptgynZQi4iBHKPQu2obNji8scPeED1mhpSuXZ",
  "key7": "2GF2WKUdDRHg8FS5xxzMeNRQUmpLjvtjfqFAaizHuF9QjE4ntg5avBZAyQ1GVNhyM6yggmTNHcVzhT8aGvHGZBo4",
  "key8": "5q7VGwHWChCQ8RhtEg4icqSonPdDKk1c8wUwDDEHdMQfvYSo1qud6BB7Q4uqWKrGphobWDKyrVC6atfh2pgHaGbe",
  "key9": "5gu5Muuq4ZCpU1YKyJeWFv82rNM6meszjAYQWgZPw53HEVHjsXRp58mijnHpYhL7DG4sNCxZrK1oMubTxwvKbnF",
  "key10": "5uGoh47NPNW8TUDLLuQYBjjgA4Z9YonWXVmdnxMtZatYHsRNqb6iWEQmbDfBR7BfxMVBH6ZKh8axg37pAuKfXkWZ",
  "key11": "3LWkAL9ie51PWkTRCcHRFdqrCHffLvwwhKqqEnip7DP2BEVudwRBU9WZi331QxVYxbpERacRXJ82XfVyqjaKvQ3g",
  "key12": "46GbiSes4SEnDuHTNkrxqfAmrWJuYxL9DDVc4n6Wgw2B7JUBeCgWfeL3YtL3k6aaJVugXDkkyNMHMr5JkTt9upFh",
  "key13": "2ZHa9oZ75nNVEjgjZhZbwEDocpe1PRp2aMha1KuFqfK1eyHHt11bjs3goVHLdYVHrppvgz6UQE3jHsoouMH5FyhK",
  "key14": "2rmeZjUFnw3uKm6CNvk57maprZrqNJx4oY88mewGyxBm56w2ajdmpdHZUChQ24bCcCwCLLEXgB6xbyXTPYh7xwEk",
  "key15": "2BHUhnaS975Zx1zZsnAS7Xm7tcKS4rcKAKpfHenjtbKjatyJLu5yXyMhdyH9W6pUNEtVZiNq5QVbtHkr6NtYfoZp",
  "key16": "44Hvhd8HVGACyT5r7uzFkBye26ojoUJeHZeK5cyZC5m7bgxYm1AdcWAscxe1ZFiE2eot93AAeZZE7NyxhVN3WgRT",
  "key17": "5yzpE6U3W4FRuuDBjHgzN6N8WMiSRRNphnRYfoHBy2VU7dj2Phpwj2adbqmDfcugD8ogit9MJz1aiuvLN3it8BKs",
  "key18": "5yEVjsUuPv256V4AVgUmYVvbahyHBFGHRCcE6CpWGSQPDYLRYSEVZAFB2DR1DrYU5wRVjLAPexCE6ey7VmoHV9hF",
  "key19": "3RjoJeUNieBEu3fgEyaHpKTyzAwVyV2JE6m7WbEyj3s2M99ve7H4FhhiSUP4z82gLoUn9m8F1Fh45uMvxuNH1zGb",
  "key20": "5xv4YvZnAmKqCcgjF8T9Mh8Ur9P3MjzNb954UummZH7mikgWnofYxuqSszionRsazDjMbEbcdb6ZZupws2TPAMwv",
  "key21": "5LAq5Jgxu4AdEijBGim3TsY9n7Zk4iKTgFufDGeq23fyZcu1nPKrdFgTPmzbPzd2LRJczXrNr6FDhWQ44YHaJy7s",
  "key22": "FPhSkJaqcWjGVZMwsL5pKishKFhiRmsY4dMKsuBs2pZs2frboTibzENgwF7VKb14eVpe2R1Z7whtXms8KYLB52w",
  "key23": "4WiW9ze1YcdVzmEWcdyMVKVt7vtev9ywz8jSUkoj9hfDSRP9CTDG9r4AGnavcWRarbN3VLDx8x3oL3RrHmg1GKHS",
  "key24": "3joSmgWVRMwETcbrySs9BkHE9htNF416z9R95ZmHpUkemUendahovfVYH5BtgRWCHSTfrxfTNeaNL7qG2MLahoD2",
  "key25": "4ix2Q7ac6D3NrV4LATcULqE8YrPS52tPNX971vn2Gjr72NvzMXknKkxA8TFBErry9kcr2Rzzm1gZmCk5guf5GpqZ",
  "key26": "iWZovnxqcvfQ3MPjRcN3B3urghB2zXhwpG4dPC6kJy9GY8a6U3FkBcaPbqRFGAbPQYUGcRfRjCzoXCWChDo6G9D",
  "key27": "492BBuqmkdjvSQAQJTLgxPAm7QdePKcJ55Kp5qg9VaPKkbzMKXkFen5YAzt4qJ7TqQRTtSMtbnWiv6DFvLd26w7M",
  "key28": "3to4EUmAysucG2fJQQVbheUF5eHqHYQ3nfQg6JYQqCiMSaoLCyLKhU315ygTz5PWC6VX9fUc8yVe5HZNCKxB5hAG",
  "key29": "4HQgP1TFpA5RZEMxAcLduNkaGYL2vZiKZZVesgC5RFqxpfZrv47gXSezd8wuhBqF4WAm8sgdjRXuvC7BEJZ9rujN",
  "key30": "5GJsbJnSXWT3BeRuYRFUryU2UGZHoaemwHzi5ajb1JJyTTfzde7yZhGQw2wAg125Wv9284nTM18Mx9dTpUSea9NH",
  "key31": "2gNpob6g4nHTZyG5s6o8nMUydYyF8Fv7LyFtmo2wMEyCdGhDNnDwbMM7JKdAujsu327gRs9LPtjohBPh1VkCw668",
  "key32": "2s8V3v1bHaBAVmUmXxRBvbKPCEkbbPPVz5FoULPnttdNVmrEvgTKQzozth6qjXqqKfa99GrjPHfjNUtqmzHb9EYJ",
  "key33": "5Y2iqf7yjfNixYky8audcuic6ZAQxvE4sZtSsT2YknvBWau33XWniPLbfeAW7d2zUVhzpifiAMmfeEwz9NrFriPq",
  "key34": "4YxuFevAF6swgdLmauKZZq8JFeQNUduRrwddf5Z6X5LZhc5SA3XnMZTMhoFrCdNsNSz9KddETEqmTjSnpQpw9yHj",
  "key35": "BbMDJ7WoTr7757pQbqkCubfKDa5SJaAMpr6odpAUBeQ3aqVa8nCNA9EhnukUCPwAUjSxn3kvorrd8Qmbp1H1qPA",
  "key36": "4occivGZNLYWp8ETnmXL6F7AmxUtdofjQii2rPLB2YsdrbFHjZNkbRierpuJjWCkDfkR78qV4kcqbYkLLT8BmMkn"
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
