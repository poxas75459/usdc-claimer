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
    "qo2nEqq6w6KGjq9Rs1zySaKBdJwv8J1BKWYiWFd9uZmwtp3DvEjWC8nzqTFL3STJvnaSNV7nJDqqizEekCLwu4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJwZ4SWmGUP3H33YQrAW43jeVV1dTUiTxebSP118Mkmto3ZFQ3RByaUAHcaAhRB7Mipj1pxGAb5S26X9PqbSw7U",
  "key1": "4L8qhJ3KNnSCQ7uXjwnHnbdGh7TL31YJdaNRqgCmddH7Gs5iLBpkbjCPnp6NbTbisRoyRW35nwWK4qkVkJTqpLM",
  "key2": "5rUFgjdapdmcqp2xr344vpVVgxaUJaxiV3HWsCBuhAXJoFg9bEyxeYxAgVabjYfJ5qxjUjRsZ7AmjMZ1Jx592Nx2",
  "key3": "33DNPVA6UtcFKMcgCa6qfcXX23JLsHcT1fcjXKNFdYjEVqYqebXmt3uiaAmkzSNFk2wjRQ6g7AiaRnqsLjqZMPQg",
  "key4": "4UmAQQjDsY1mSDgk1TfgSeT3NLyKfBvgtU9yxQrxtQNYhUEKRZUXjgtC4SLPvb8uo7VNSMwwqouCVSpn8gUbSpjA",
  "key5": "4CpfczjankN1xmVasAePvKg5n8pUxnu9B3WHBdxkRKp8pznpPen7F9jyEdmPUFhEViVR4sKisnVtAz5aHG723G32",
  "key6": "TLrASaF3wjym8MMH1FnDKzRw1LXkPoN9nopLJ2n88hgLpoAmqs3U4sTyq1hfbxaomVgtajMVRHGERGKof2GBWif",
  "key7": "2EGiWS6civTeerpbHhyDbAcjCjjQJmQ9UzdN7rBqEqB3W7zPsUaaFEqqXJyxCtuyLJTeQdDdpwx12wcEr6N45XY4",
  "key8": "55v4VDrmfSmxAK19e5WAhKb1Vgvjrh8FsWBUBVvDf4fCSEdeHvaHV4Dkh4vwif9aHhPes7gGf7ELrXhB5Tb8cm71",
  "key9": "4pMbfBUe621ZTEqACePNnSocouo6GnKRZtbB9GCJkgYFnx42xHTVuFdjHWMVp7Wd7KsmFCeu6215xDD5Lm3y6v8L",
  "key10": "32sH8s2rNyYVuHMaGFcoB2aHuKnyMdmd12rvRrb6MnRhSfm4tqr4giS9pReEgY6bR4dxz2G4ZVJn91NfW21jQNxi",
  "key11": "WJv9N1Ld7eGBimURJ6TD7otUwzXEHvmYMy9PdDdKqbMEemBJ4KgbrWuwMKcnpJT9NcfghAJf8QKg8A3ACrLedQu",
  "key12": "2rw57pTYv2bsuFB9jSy82dsEuF8LfrnSHow6rX2yvyjfx7FXiYzewZYGEY9Yor5SSEEQzoAgrtgwWrX4bQBdrsyL",
  "key13": "ZzjzPcTxtAWN5pbGR79RpWfwkyeH2ySB8Xk85vqWGHVRV6AXiWE5MzmjbiW4JJGmQzGXLEsm99fDGWTZfUZNWew",
  "key14": "6zEjEmNe3D9DHWBLMmnLU9r9WT2gU8VCmGotCmouzWnHBNcTjPMQihqXSXydGXRXsp1kJcDkxFZLyq6c3Cbobvj",
  "key15": "BZA95VE9S8KTNewHzEX66cEVpGDLqFAmxfpkZF2Latykf5y3WHkHAtnCf4eBFcYJvyz1jV6fAr17zPUqbjftmvJ",
  "key16": "E25Q1wyuSSTDPmYDU7c55aGH2so32ahcjWLK3iaBXeDdNZHf2Au3Li9jC3rwR5AvM3QdkzUxUcQZSHFd63kYyzZ",
  "key17": "5jC5km6cMRTi8zM6aqBvngzSLAHeNmpzPsaoMUEgfPpmyczdJnzoQFTLt5BBEJgs96wUrYyHWq5RREQXcbRhLBtW",
  "key18": "4FhCJ9uVjNzyVWN2tGacVPjboZ8US15fgUWBVuwsm3bdPi92JD1hPsohjNZzD4SwrVGUQF3SeXizJBYn8ZCud5ri",
  "key19": "5XMeCykxbdLUJDhQt12UkjjVEMfa2XrN6UBYcAjNiKZJy9ykU3yCwLS1hLZJZRgwsSMXzgbMz1g7HGo13jqNT2US",
  "key20": "2LdBgPAKjZvo8FPXjiUBgb4XNVMXuJCE2x5xrZfTivhKAyZcKaZRk8aYupFzXZ2uSvmzU7k3q4FWkPCxWekin7gn",
  "key21": "3x7eVM6DJXjNj2a8MTGWwMuP9ecaKmsDZpG6Sj8jjHwZT8X8nBxFFM2fDiVXQSES2KnQAeLTBjbW6ViD1jCGhQ7X",
  "key22": "59wGrRw4JfAQbz6L7ByvkTCrRToQgdgCDvx8K56B1nv3xxgV7Ykjn4UgBbmi3GrTgspJJSnSShqiti7YjveDDwW4",
  "key23": "tXgb8AsPC8UsJzRYLbGEWV75r7u5jxDpxsp5HAKqLkabz16BKwDUzzb4KVVvJ89rfJuKLeqzpWenh2g6i5f163F",
  "key24": "5j6Poeh1KvrqsoHWPuiGTrxvGUBAh8qhEcueus9ZGa3Rp6QrCHVeyvSAq3tySkiR2knboYr8CUnZ3UuVmZHYw5Xx",
  "key25": "29WoohDjmAHVwdviYtKJuguRC7AsDHCUYrBp3mJpGELRe4S6wgXuTHF1CeR77zC8StuM5nn95Hd7sCKVG6ssiJ7C",
  "key26": "5pPtbFaFdQHKc4SfAybuSwYymoeWojwQcyMpiEz9Vtg7KKUSXp6St1SSkWxqTpRaJ6Y2bT3XPjobttjMrhMAsvJT",
  "key27": "2frG4MWK6LcP5PK3NDpyF3whAUgGhyZPXP4NckD9uApL9rPiQSEFxr18RKc7X4uHJPY5xvCtVQWsM6ggKW8StvLa",
  "key28": "3KGB7wjnsf5Hqepg6AWzr7GRpmnC3tUoY6ueLPBEoxXZSUYE3ySDQ2B6dM8goFPEE9CrUYzVTjrmV6mkMVs1N13B",
  "key29": "rRxUUCeMKGoejrjd61JTU7EEMAMDDJja99Q4fN3TxKLSkqDY6xqDmJoiv4bjHC8QUjAKeZ6QGBui2Y4mesZuKmZ",
  "key30": "3YHeek2QoEHzD2X19R2uQreGwcZCUfxDukiBYEKn8KgSh4erWPmBPSK5bvZFHE1rTSUUV2KKDC1rKyDmficCfPvb",
  "key31": "Em9otsbkFqRfwDgkucFdyN8kmBE31hKgW8d8ZU8EK6yESmunn2fApiAX5fmUzMK6RZZgWTJVr2Nw9U3i9fiFBhH",
  "key32": "2ftHfGFcuNKqKmpSLDt5kJVPzQsd9Wy1bPiHVHfkAu1bQjyVcu1ryZEhVwpW7SU7HDCYYG5p93hTvyRT6Ydf4wpd",
  "key33": "3a721vJ3QcginUHkaS5gArCHrmgePnQdMtDAsVXMDH69HmSRbbTG3d32CuH9msXx12ZHjZfJduFmf1V6uRh2VYoS",
  "key34": "2GeymcNCMqUCQpLsKQcJDi8ZRzjDc82Txr1WmmXERBApgUdurPE8Nr73Ds2udbwk6S6fE6JRyJaEkA4yZhk6Pjsb",
  "key35": "3Be41nkTPyNWSn5u6cyKLFzbH7sJa9NydZ6cTfXe96Tag3fBLq55QYjpy9SAY3S7QsEjizgL619AwRRYaUp7JDeC",
  "key36": "2smSxefdn6bXyjpjbnE6cDvSP7yESUzeaqGNczUCTcAKv2JtsqMtT5GEdgPbga8UU7Y8m7Yxcy9njBqxS6pQd7sD",
  "key37": "Wbd9xZMcZGaY9ee8KJXkAEQzuiokejrnqAMuAuA5ynm9NFPqgz8Ar7mqss8qzPdgU8B8f35wocvcVK3vYNf6Neu",
  "key38": "27zQAKUHLaSK2rF5frDFQMJEwZA2z2HNFdHwqWwuoKGigjVfkGtEpgHDZTfVWkPD3jb1E2aUa9CxehA3eg7GHYiH",
  "key39": "4Yna4KAXUN8ygcTXmwH5fP35E5tb3GuQcosezG7Wpcro8ovzCApYxopgg7KjsvPckBs7pzWKJ7BUFgq7vSLxF5We"
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
