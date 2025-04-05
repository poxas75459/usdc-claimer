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
    "3EMHc66ERvKFgDC2x18u6oZ3hbY1zXAn9DPQjNcN629fx8e89EyDKRrLYNbk1qhnfK3Gx9BCVH6CRi2yoxtKBSh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F4y4kQKZv5DSoa82iAfJYwK2bNTc5SRCBhRvsF42FAVfY5HdHhy76t63x7k8V2uxdRaQpvZtyc8fPNcqHJ9NWh1",
  "key1": "3yZcijP6u1sLsBf5wdySkamJm4CJzhHbP1XgaBZ7sgd8mmNKozJi2CAhS74hsLFj1yjZfjmN9VfGito64KtdcK7d",
  "key2": "3jiag9Nigwr9GMskYxybPNDJecZUFXWmRwtANJ1Me97aRXDSGcd6z5d32FgzLQWpPNg3knoEW2rLiqz2imcNjrwU",
  "key3": "3EfKJjjTPXnRiMeWTHQMjoyMWt6QrYHSd6kchGx9JpStbqpe6gFivBAChHTGCNQv1P4yQoLsoar3vgwkp9pmp2KG",
  "key4": "3VBhFziJ1KJGprv3iRuPVHyLU7M8oVswsHSHAEupzr8wf1h6tEEg3omUpmDSPbDVM8KWCTyRn7AyAExQC6DCv1p",
  "key5": "5uiEh2PvmoJunjY32x7tU5M2K3d1o1k9t6Ncr8MmxodPxGxyYsALJJ1Kv4TohTirr8AcAhHS7jLPvp8Nta6uryhm",
  "key6": "JpXY7zvMJcxw1KLkrkMvTpDDUyAxGS3ZRnVF2Zt9fPZAkwrzX2qbzMqvtDjnSVszFypxhewKKrF7tACGSHJZNoL",
  "key7": "2LsYanNAmFYfY8sDcM4Ja4azuZQtd36KkHimqHZC8y5TGPB7zGaEugWbU72SXbhN9WcmMnNn3GHXdXzJuC39wx7q",
  "key8": "29sJtq7EEJCiBPipa4VzPJAKoyGXv7ckwRwDrA75eiyUB9RVkR5SQPqAj5RshdNtUKXy44dcZZ9oi8sP25c7fBCM",
  "key9": "ztwjsWL982TqhwGLqxWGHSXBU75vMUrXkm9PiBDHCpPoHrLgPmwm9ZGJvo7yYYT6cD4V4nBS9FtGjzNex5wywHT",
  "key10": "28D4hEyw3yrKfCinsaUFEcSAJJsTtJEWzFrzc9vCXm9LeJ9vXiSxXYn992LhVGgn9JyziBboJKBxJUvh3M1kivZT",
  "key11": "49hE6M2dYFjPkkFVsn2X4Zb85HdpQEhYVSNsaMWGDQZ39AYmKCXStYK3fj9gqMxhvib8hPQvi6AbNNSe5yeP6G9J",
  "key12": "5bLXiRebdP3QAUj5iVa2jWg1JYrivcAK9EY9nuMGhDxAncmvDimCUZTNtCLrumPTHJxSQLqbgbJFTXcv7KG8UkzL",
  "key13": "2eVgAAF4DZCpthkjq7KhgSYMdoX1sqvAPPVsBPbXUKWnR8r2NvzaUCSe1biEP43zMi1ASEHLLR2XLhk3m5neKRkd",
  "key14": "2dyB21FjBjGzWqiZowrYqe5CEy5DUzZFLHGNUcWY4LKGEHFs5HkMtL5uvhGcTpSz4Bm8h4nwb73FkkFVMncg9qEC",
  "key15": "ToHSKeQHijfpcUGVz9NL8vvcdhrMdE4qjY9RRHqt6uPyjKHMys3YtLbnXScgeFsduuSFUvkrEhpnGHPzY7M9WB3",
  "key16": "3jLnDqWE4m1SNLtzF5XFw6AZkrRSWpjLuyGEbDSHadS9RSCCNNMGq6B3R4wjUBHEqKRBhGA5S2djvJ5ZEYYp9BAB",
  "key17": "4Yd34w5o5whCrVzs7CE5u9bqs6HawxkpZ8cGetC6eo7EkTnYE1vXvAx4zpT3VpXNsonVNJx2m9hApBxDLxMEc8Kk",
  "key18": "42FAQPZUdJbH4Bj3Z2KeL73v34bfC1NHUj89RXHrB1Q5KWJZeTzUQoeyzd39SFJXbb9QeDb1LoJQUvgagpnXBabL",
  "key19": "3PPHz5crPPVcY2r34ngQ8AFozeYqGsnMHxKqPwjAw1bqAmvqsXgzcsKzVi2qLFzZn8ts5NPWq8swACMWpKqNnWwR",
  "key20": "3923JHQJnjg7kDcwG8D5Ra4s47PWR6idLgv5qfv2M98w7M7Wb3ZWyqgsuiSHatE7fpL9wVVfxyDSKkPkBVeQXpWu",
  "key21": "433gEM7Gmz7NcgQTpTxe3g1Prqmu7bQJmni4KKc9Bo5jc1ekYnpgU6Jpup7YeachyUgnmC3DaT618K64b9MT2Za8",
  "key22": "k7DkjwiCk4Lx9xVQvP75rH9xi2gPXE5es9GxXaBde9PYFo7US3oTYVtzZ5kj1HnSdm5zj8ZTr6tn2MQb3VLw8CQ",
  "key23": "4BD9crshoxBQrN8R9QbFad6i8xxC4SfR3F52P4StGRZ71WLtUbd8RuWMdZfdxENZBGgBX9zhQyFjjmoauVe34SS3",
  "key24": "EUNBcBCickTwGL2RXWhaVLVBJFPRUSTHt6qTRE2H8qNFfcKivc9W9nMbpuJYYBwEjX9v2ricfNfkKmf7TtGYQNE",
  "key25": "2db6vWiU8W8gZM6ZVnmPsAiHfrsPJw1S5qQHaoKVwMU6ruh4khYVvvwDjPTfmLfMsecaSKCkYAtuFhomuQKNQUbt",
  "key26": "44EWjfiS157P6dz1rDgBeGSyz5YSsuHBrmMeRJQ8aWhUozbQZq7cAipmY5K1z29XRrgfNrQdpnTjNYSspijRdkdW",
  "key27": "2FQTDbBuU12tR4G2aos8WorrtWcDmsD761M84ptVfhdH7WueqUUB4JMyZP2BrYjVTXdRXknW1BU3a1FVxk42Rxpq",
  "key28": "2YXoGhvCfd4NKQdNpksP9VVKUqYJJXZ4iCZ5m737L6p5ayB7jQZ7mt7Pp4YaB8rHBM9xfSR5fbhLeyuj93kGojwo",
  "key29": "4qtiqSJY8hf1oQcWm8A4kiAapaeQfoChzodmmKvqWJwPZ2oywWst7aYT9byPrT7zi52aWVKpVMwASuMqYbZwpZHH",
  "key30": "P5BSWCsRZoXhbUgEUJCetQ7H3tTFGbPoU561YxG8TtoVHAY2vsJQ6vi51uWdjv9bTEQWGFAs3Uv8mkAYMrWxuic",
  "key31": "3SXGaXi77Xe5yx3JrUasMFBa8e3DUywye2igR5QpS1AxHgKHSZyctY6Vjsv6jq9Ex2WKF4A6pxVQc9wfRP8apSMU",
  "key32": "hKeQ8CZhKgHNSESg53jyJQQ9YfMqm1hxLRs1GLzUhYDYa3FYwEhVnPFfNGQ6GQFufbTqgxNvAHEh6aTtHxayW2t",
  "key33": "4uEQuUWjPh54pdxJSqukkt9mAMxzFQPMnApbDUZB2idNM2TP11H3Fbt2jr8Sp4Y1hxW9xEBHoG2dKhjjopTA1vq7",
  "key34": "qUfktfAnpjwkS7JVCJUU67sV3f9nWEqkjJUf7EAGDwnrdBYsBuYgDRPNCbVbVFbVHYTQ6579LrhysUQJiVWt1YD",
  "key35": "isLZRULjQfvAjFkhV3Ay1gCJtQ63RZ9XCF2tgHUSXMvr3XYo3y2d1WjA5RwgR99gGTbUXvxYF8rPGL6uJc656gN",
  "key36": "4dtqUpaM1wptKSUE5fnLkoVepmg4SAzAAh51yDo21hDR5v6y8aoRCFfN6errhLU7pekq9hvp4j1hBU4XsSnBGP6r",
  "key37": "bmqxYHxpcfbBVCZ2r3acfr3gtPYPqAmScaDHCBDReFr2rMeENVTecuWbbMEVhpqjDXMLnUCLUNpyk5LXzsiPGNy",
  "key38": "3tQm3VKzM4b2JyVZEfzZ4wHqu4ALLEUaUqg6REtGBCs8wNzVxcpYHVxv8EZBnYgnLLF9wNrWnoEkH3M8Xg9h7QFn",
  "key39": "2cvTWb6jWFRV8AWqfGjVNK8AemXgtWNqPSMm3oXoVzamUxp1V5PikuMJA62ceGr93SYLp92phYMwq53jRuKBnprE",
  "key40": "3GSfevDezrUnxmmrVpwVBwC5AHHC3FPFnbWiYh2dgMh6PiHriWwg1Br7MakdTXmehs79u5u6fmHRuPaxDAmV1bhs",
  "key41": "2TrQ6Drzr9hhdgGiQgTASVXqFZPm6i14r57wWBBrKRMQGofkH75yJsT1x7neSzGFxpihNBvXkcTr2fsgit8dPXuv",
  "key42": "3YnENZFHWEURX2dEYbfs3RKJX9MGPck7h6EC9PSVh6anGtJ1BFRcNygCvPcmQmANBx3mPaTupF22wEs6CYEh3Ktu",
  "key43": "g22N8yTDBfysZWmS4NigjKeGwaafBtEF7NERxU4jLuKBrqxSe8VRGWMB9sJnKmbzEPRUHBwvidTc9oQ22G7Yme5",
  "key44": "2Dj7LJdUqqSD48mCksqkgAXcLsHRzjLbZoiBtKquxU9EFg3qLQGZG6GfXdz6W7yPyH1jgSAqnRcpAYFRMgsyHp8F",
  "key45": "4XNRZWm6fzkWNBV5KBaCN1o4fZ4FxUqJLjKYUJvwSnWVFQMmqDocR6kcgRxgSeabK6GKfT7NDa2qogJ8UyRTNbyR",
  "key46": "5M1G5m3sWZAcWzxywpm1oWs76STsAxKqBjZwWE4jRRcSEdGc8o4qegNzNxYdnrXKfHzDbecsyexN7voC7Z9zzAou",
  "key47": "3QZLqyK4rzChZbNvrmXz9JYYXzCwtfG6x9AkmjcCCsCshWhPY2efQwAqJQnrCUPUWtBvtAsNDzwTi8uA6u7NyBSi",
  "key48": "uiU9abPZNTZf2iLj9rYEo5qpALHb6vuRKA2nrhnF7FiESBasmQeXkXCy1oBKCHJBWvky29DkbonPMpYyxouU31w"
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
