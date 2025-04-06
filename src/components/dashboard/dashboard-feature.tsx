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
    "5RFNfv5sqTSddLUE52PQptzLXJ13GizfwBdHgDGzJSS4uXPbZvcAp22vAZ3Qx3yYZohFgprFx4nJWw1PxXGmcxvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XYBqEcuGbBtryD3Zvh7UYvctR9GwEfwA5qCb3U1nSSGAcxZoUcwwzkYTwBU5JvoJUuTrPaPbPCgrDPWvepcbXRP",
  "key1": "3JQ4ucQRew7UHEcp9CKsdbiF8RXiuF1hsjytT4cdqNqUPeyF3tsA8D67CaSJh9T9nepziKxDAMiwpHmT6EeeUDwW",
  "key2": "jR642gL2Z9jmwywxEkUjPoNTk8s6aNAHxTXeYNscAAJFGv7MXcoLaidtkuEevdLLmHNbURnu3bgDurRLoTojVs5",
  "key3": "27C5cc2cknCrKfxQN94JuM6NLa349uU7zBC27FdLuLfPp44zxzhzu1XJ2mhWoiD96UKS8DnnkoLUN6V1f9c8Kqxg",
  "key4": "9gYLtdM2NMYb3c738N3rBSst64s1oCdGrmbetnQjqCZNzp7sQuDvDU2bfqj5wMAuLFj9etJor7QFeqchHcZW4Y1",
  "key5": "31SMaEHFcsVBqqpwVg7GSf6qNs59tR3mnUdM3sq9RUpnkHvpGhvPe9h4Q38eYtGFLfzCKsiN4STcAXgiaJoZoZnE",
  "key6": "4ZheJwV1JAae6vBWSqjwFZtDnTCcNuTyZiSJxnHkg3VxhDbKzXuzqwuT6wJNZALG4mFoCx82epro51VzSHZDwMns",
  "key7": "3fRbTGH2sRSXGQqYEXtDt7jdPjmgjZeAoTwTHtYN5tiHFzQVKKEZRJGx32maoNXUZPs8VjEUX6qXmR96PGiQyEhT",
  "key8": "Uxb812PugX99wxLJMTn1GKgWG4tezv2Ac5ZeZYmW3h7RSCpp5t8biD6cQRo5dtfgzFNLKBit7gWptyYjk7ffsaB",
  "key9": "367XZiBAtgYdJT4hjVio1wVsuJzmgEMJXevadVmVttzsWejkT4K2eKcPTRxaV4EaB9METXsPVUZxPVbXkjUY56wf",
  "key10": "4QaqXZFDF4RjkojCSDixFmc8iN3mnZqaVvcaGgnmqM57mJwnPvQ7Fy8hVesBRSbdqP68HUyrBrhGKcaYDaxgRCdD",
  "key11": "1zWYvwUM9mNjAdQEGKiu1iB9N7dMoyoF4nX6FC37HaoYb6BWFc1U9qR8XRJKZACnfBESbc1TiGBom38zwa2gTGd",
  "key12": "4VBk1EbboAxVCUSXY16XMKm64cR9zvqbmREHjP8rKQTdsK6mwAFPZnHR11dcYRHEXqhzrtVpfsRfKXozJKDMZ4Zs",
  "key13": "9KFxoLFYp5hzzupXKANzMB2sLs6UQmnJxWsRekkMrDj8zpAEZdMWJpznWi9rFb9LRURbHF41uSRwDpoVfabeCdw",
  "key14": "NpPJfL5Kpsv4qpCNLBkvjgYTSxdh5ht2vSTDzYhQy1NGuYWZDgVBzwPBQo9Jkszv7PBqr2WyhkcQka2YWQxP8z8",
  "key15": "Gj3yGgFerEdnH3N637daxK8rASKt5HtK7Bbouji2KPYMehrodCof44h66voUvR1uc99QTTeAybc3adVJBptPsDs",
  "key16": "4i7Mu8tCnsRK9C76mcy7phjE512c7gzxFMAkMjTAApWiPCf3YnKLtPZvC6cftwcrPWajuCNJH8VaZbh5V5LoNgY8",
  "key17": "3hAZdkenXTap7SvAgswtNcmUvoAo1Pcee8VbidFQn5ceMrJ3VvwJcMkyLvx3zpsqVdUzGHYwS3ZwxP8MFa82JR1e",
  "key18": "2ZPtWrxDFk2iriaDKN21U9M2uozmwLgW3HfjK1AQGRpjEUX7TDJWML7vaHdjFwdy1aknn5LRDSfrzn5HgbUB4wgp",
  "key19": "3RWFduodVMpHwiMeXKy6agJFudN5wRjXS3f4Eg6C5edV9FaYBQccctiXkNNtuUFVDzsipcennwdhx7mxnEM8kwgC",
  "key20": "5c6fNU6VkeqavVdLyw8Y4djGZuVq7suq4viVERj6ZqVezevUHkQPfVz6tvmWDJYeLpHxMPQALkm5ys7zir4uKsMw",
  "key21": "SrpxZi2Kbfpg139kJwxjYAQPokid9zeeHqjhyEY4fi5KLnTP7RYfEpd6eMuBD265Z8v2tdpoNX5hG5HWAb1eiRH",
  "key22": "56t3oPFur5khmx22em6vdCChAzedJ1wH3LxZ6BtbGn3mMFGrN5pxPB9mmeS9BPVGjmBW6iPpM3a9XvKYq8mSo4Ur",
  "key23": "4NqYyhG1hSDGsFHQ9DkxdPdhshCPC3sQ3kUWv5uPDne75CWvjTWaZqyKo25BunykFd5NzfCNg13qMiGHBQKofp3b",
  "key24": "8xAYJAHy8ytxV5Uru4Uv6Xem2qg7T1cjmhUYfzqdiMvFypwo3zW1nJYEnkzyogAgutQsu37ygcoe8nPtr3aTfBg",
  "key25": "57eCWehE5RbyZuwAr59w818BoSnqtvyF2a2PPm6U8bofQs7RFqFbB8Wn23TG48n2zB19DSJKrkRygYXBxnDQX98A",
  "key26": "61AJfuMtsaFjfAGFX2XGtiYvtPcttKSUbd6ECqxNK1g4fEH2okVtWhhdXWJsoF6adPAcJgzN5swVXLNgkjyzbzPp",
  "key27": "58S3SBR7vwSrcKcGJCSeaKS9MW5xzNuK9giZLPmwaXAEep2pv33JCMXhRUkfe4dWzYzXTPsMmXe5dVxUsiDUU2fc",
  "key28": "5qPoYHo6B6x7pDg1JCjnnPZbCH7zKHwfztpRz33Fgnio8KNkmzRi4dp1qdFw5nigNCx4xsRGWfJkNaS6FLq7wP26",
  "key29": "5ubLV2xRWU5AevanXYKR2VZ56azPc3jYF6rmNTmpsZpQbiq1A9HnQVj7dwWNWSToCFLmxWJRo5fHtfFQ3Xpu3sAL",
  "key30": "5ToYimuqfWLshCyCT567Rp9qdBoicF7h8DqiQ2ux4NeJ5U8XdFCnAzfHTtsBYhUSoAYiMkUraXPMgNrHLN4smLWL",
  "key31": "3AhBoYukULNCzRRHLXgyfb2WVJX4B4xDszQJxc3fe6QbWUVqAJ2yKMD6mgqNJqJQY5wBULwtQXF6cc3hJqZVTED4",
  "key32": "2ipw7w9wRjDh2nvNjprZ9Bsgw3ch8NsaTkCL57abbogX12FufKiVUasxgbjkqAGNGpHYv4s35pBzY2mpvQj2s3Bg",
  "key33": "7en1FoPetJ9YewqjBwy6cd718vxtxd7zK7ajE6tZUgkkhPo7Dz72dLAUPyrRC2gMzkPkPiKbn4rnF7uD9rSq77u",
  "key34": "55oHxkf1TQHpqzrWdoh33qR8WY3H2YZTydkLZtS5BUq3qQ8t2zGPvto6CP1AQiE7YWXtwMAmFFnkzKXrBVdz4ED8",
  "key35": "35bKbh7TKfLDu2yghwvmb7qvxXmnTyBHrCMWiMrEd6MNRWLh9Q4kbDPMLz81h1yCrUUpN5Bnj6J4kLTvRKnsTfNp",
  "key36": "494WMWHr837so5CaCrc61yhtGXc2GecuQbW3Ae9fUNEkzLas11vkL7zDprykg4BXBdacsqsQWPe8HzZnVMntX24t",
  "key37": "5wcrTvTCAsHaNh9vZaM8tmaktDTR24jbnwxgpeKqTnoGV2fYmN6roXw1K6SYMwPjFaGUgi92g6k3aaznSSbHwCxa",
  "key38": "uz2MEx4Xu75FrMpK4i8v1Gyj29Cz7kciqdh2YhiWwU24f8zpiCnkDgrvgzUCDYiNQdFHjroD5HKVduk7Q2ttbwf",
  "key39": "BFN9upXPNwnTezK9rhqz2FJJApXrxD7k9W7HsfWnusq3dxKR6oWQmfxHUeRYHtuRfPJLUvpymhcNo7axXdzuA23",
  "key40": "2okMhN3a7znQj5jJ5qdtfY7uDHVhEvk7MqiUToT2HPZkkLxkTurnVpEUxftoPRD6eWc7swvcC3eXsqQgPRY2yqYQ",
  "key41": "5pLLwigZi9aGkSTqLAG8PBtMKuMUkc49Bhx8yT63RH9cQBEVcU9UMyGC85TdbC8zWJ2n65x191rjzSctXZjf6gCW",
  "key42": "3HPPevFmxo3LRNYcP9mEuJtMWUME5hcm94NQsJ6pWEGJpgvFUQdrQnmTLCZcxCKTHprGvfhBQbJeMuKp1XXy4fs5"
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
