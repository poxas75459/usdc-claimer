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
    "4VjSZjEqd7nh845WBAvEr5FQAafNVZu9V2ZBuAHHKorEyF6cDerisaNKmvj1Pbvb5CFUV1LVKT1eehrh8zRjqSSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59jDZjMgt6EFvkBWedXyHZVoobneRL8igBfpURCXWdMTHaeuC6nE64FYLhCH33fyQZZRnkjAGHUG1gUwC2osP8Lw",
  "key1": "4xE3skSVFvi7JAYXGKi1SPUCDa8c8RknmFMjLjjzNekso9KzPmEBx1gdb9LVXZrTtSp8AxHtYBKqtzkXWhCqWiCV",
  "key2": "5agof4PUWKoeKfN3Dmuq9k6zA8RzyGjgELZsz4bdxTQyDVygwt3juDd35AU2UpzDxGU5v8iit9oZQuptpuFaquEh",
  "key3": "3Mx9JZ9PRbMruMxSjpFJNPxAq4w8asdHuYYi6kir8z232J7JLrKeQbrtavn2DuvH8XceYJmg9GXctnFYt4sV2AM4",
  "key4": "4uWNBWByui9qYNfhyzgwe8XSRQnday2hqCxPQthGwThBX7essH47yvunCLxsar7PvSdMrYQxJPqa3mVTZA6Uswmx",
  "key5": "3F3B8eiLWMAES4xVbSiiWJ9U6rmXbQsTfxWcnmVNNmU2jzCbytP2LJoUNjWhNnQzisyX9ho8YNcUC7kx5Vii6JcL",
  "key6": "2Kpn9VDqibBEi3PyLu3zQXEAELqGbs9SkkUpMLreZUAUu4bfRi3c3YoP5DtKBzvz6v1WuDSXQwus9QJReQg5m2vm",
  "key7": "2RB6B7mK4DvdyFjBS4Riv1jq9ANVTWHGG46HEwVXS1rt4dngX8qKXybhbvCPbG31x3RvZrG5rZRP9kyYGn8bBuwa",
  "key8": "XvR7Jjf7eqP3o9vtRmnVHce7SArqArY5cY2qudk1tu6ZnoYfNSWzc25kYrE8MoQv2SA26kKjp8ezp5UpuTRR6A1",
  "key9": "4rwtP6E2nWZ15kFrmaDdkUetDi4FBAdgV9RP8SwqPZsJogtDBu8UT88vx9WV7SmCh9Z5C2wSggNARHVHJVGz7HvD",
  "key10": "4P1nQxVkuRGRwpgmLfS2QcKnbi92dXLW8yy4qvLHQKPJ8Eg3ThakugbmZEW4BwX1zN6cj6umuWbRJDzmehacVtG1",
  "key11": "sdvsgBsv1gC5eGG9WWB2MuwVfkcV5SwVoh5jXxxFNaEWW6crjqmZG5awLKPjqvSsHAdQ63vbAJTS6AE6h5pJNSa",
  "key12": "QbH7hbww4M7LUTi3vD3rqVNUPEy2KW1QEAQXYMY3bSTzPsVabX5JqEdC2fRf45iGwk1t22HUgSHVtbmPy7WP9np",
  "key13": "64iM5eVE13j9qp3NyzAaLFykijVibJuZFGfed3hhJo6Q3xAxTHGUVuvusjRydhzBWvkWQefr4cQpq6diLaqTEiod",
  "key14": "WUFvB9JbUMGN6fvyavCTbJEUSCR5cM5fSueKBu6GD5Wey9drBjFx9omhWey2MvkTvU5ByFUzvK5JFdNzRxMVExP",
  "key15": "2xVXur1pCJJgVFtwE9AbjrEWaeKGsaaK9JTYK5i63T3VQ3b3DX48wVAS4AZ5tFDXASyVxxYf6moLNxzf2fGegh4j",
  "key16": "52i8PU6NbjgyH45yxxBM8fwTUJNMiJD7Twa454H7FLU24SEhJbNtKF9j6gdqDVy68KMVTBvmDUDJRD3RrLgbyi9C",
  "key17": "3szMoept8ETHW98Hs1HsLvjH35gjH63EyQpWvF6m2Zn7GxHEEMiifJw1KMgcxDrxa9aA63BFUR4zqJCT66XYme3T",
  "key18": "wdLtqCU9pVMbq4sccii1Ne9eC3fbr4TwnrFUT8zump3uMioxPqAXGTgct1sr2oGMRsZhh1wpN6QWuE2kdVN3pC7",
  "key19": "4q3oGK2eDXEbWqBQvLwaiMjdDvmRWScxtbALNgBqUU1gMPX7cncbEZmo31xHAMeUFTfELdePHbzwnsVmd8BCm3on",
  "key20": "27UGypK1knT1qyX5Tu7iCM4e53s2NzGSwwwV9aQjx9qPTXJ2SNJpspGEd2LgwfDF1dwL9Gy7PivGYz6eXFbuDU7F",
  "key21": "3bMpEoTHbZNww8sC1MBUatVpxv939fM1jfBqaW9LjAKB1Nq8ZnwxazRsiU97ZKnNtkJ8FNGpUTeqTPYdjk5d46uX",
  "key22": "2ptE3AePs9W6SsioQNevdwZBS5YzmDFLUsztGzNf138RHzZKAyVUH2a57z1A4nwnwMMr1kdJYwKErCEVVmgxFG3m",
  "key23": "4aCXEntteAbYyU7pSQ8iyT8bt3kvintiJz7tSGjBKXP1kzaQ1AbA4cNtVLeyKw9zFrALbsjKCBmfcnMc1WMT3dk4",
  "key24": "KjsJMdu935rNas8VgYMWeMhmEC7ge96GuMg84hQGDNmsN7BWaqm5AkHuWgjLfPWmr8XVMuM8w56qbVALwkkfBus",
  "key25": "3VcGYmitLvrzhGXr4RN7cTZzthiuNbw1V2qDno73rRgAwFhcFFeWtDshpJQk4j7jtskKCauqNcvx2tzTeY4F3YjP",
  "key26": "1hzebFRuGigGSLpGN4BmLZ12EHAKT2QuZU8uozszTucURhX1wW4Ke3MDmeH7LAz9HqQmEcxvQDBJqjeP1eFMq34",
  "key27": "N4AVrmsZj4zbYn3wqkpWfUXb6G4fpwamqJJZGh3jTJrw52nR6vnhft815ehuDrhAbFvaNciGio8ErnHmKbmbuSN",
  "key28": "r7ypx16phZNwyUxJqoRnKbhQzDFCtRUkbQ2Jt1jvSXZZrcs9pYVbBXfobQUF2cdgEiZDZBynkUgmW6GE65vV2F7",
  "key29": "2CPh9R9AP4XnxYgUgTFySskEkexRCxwmak9ULsrmobqeJta3BjSScpaVc8Ptd9Tf5kScu3VK6bJQEYudun7zBYcK",
  "key30": "4AFsie555TyXHvysfJJRGoSzH1bjjeRRino19qHMgiX7kzRz35SyVpsRQCsn8Sigah1HpfwuzdMTmwkCRdk7gdgq",
  "key31": "3E4LFXnxePGg1Lo8euDwMwAMr41x5EUg4i7vs2cwuKaix2ADMinutzKdds6QrZ9ZUTkV1DsnXT763b2dHA6v3jAr",
  "key32": "4g5CpEe68uoHmHNb5SX3z8B4zTyXjzDCTSGUiSd9qiuqgaktE4pc8WhQrx5iuhr3knKBrPD37hnf8Rgw6DcEpmFT",
  "key33": "4TkHcH6RyVPTa9H54fSCCsfyThpj6Cenn4h4Cmn1ADPXEswsk3aFo1fKDrTzX4ex6hLFMeY1YUbXp7dKo3JzaRby",
  "key34": "61ngXF5AuEJ9RwQKsVxTye1EtzMQKEkRHoQLqDadikkYrBhEwcWdbvTH8aeS76GmUF1DkyFzupH5QuTYHrnW2Vpm",
  "key35": "4HpEWm63xHi3fBKM7GsuxVk2YxzWR3fXhUKng9VXF1JUQoEPaW2ZUPBySvNciD2d3EmptkUdoiHwtBVoEeDNjfU4",
  "key36": "29YX71GqGFXoKSX1BUTtH1ZMBNiZqrhKZd42YFzsE45MGWVRJ7xSARMEmBz9yBgnMRe1SctfgQZdEvjEnbtFP6RL",
  "key37": "4vXZ3dPFMNzQGvEaxDgrfyZnm1LuMQChHHK6QbNradgdofN4TTQJek3kiQmKBLxXb8gU1aJp4qVdrxGL6rwMihzk",
  "key38": "4wtYdTd3xuhmDmtnY4g6Tbg5QGD1z3bnhP4TS1KiH5AWst4tkUoYBShRyjpwLrE9jWzqBmaehAMHtwRLRGhcgrLc",
  "key39": "3MhCsyXQFZiihSkpod7sBtqL6Kensyz56sUYJdRYzQE7hH3N4UbEF5iPUqFcpKJU3MbanPxpL3A22qsjVwBv8vPM",
  "key40": "2wV5tiizGuxjaZDGowGEQ2ryg2PNzjQP9P3zhhLUtZvULUTGPe8Y9AyvrkTxgr3DGcdJpHXGFzjUqaX6pDSLGcEu",
  "key41": "5uh6M6iRhsK4vAkm3RFa2zBHAJyexcqoUG1sfpiM2MDGwwV4EsvyaAUr8cE9wH4U8JivbvkqVJ71LDdYTVeDPQ2w",
  "key42": "3ZmSqmjyxMug34aSK9dhn2KxkqJVG4L6PZzGPNvwWzEqJUmVMYCoMWccbFzVgtJY2FwPNCrs5mRCEnjaEJDmuLbz",
  "key43": "oozCL7ovQnqHPTCjNQkaA7hXbnuZJuCrpp8aWWAGpLE93XKthznRucAupcfjPbHcAxz2RM87dss9K9FHde1b7Pk",
  "key44": "3sCoD1qqCUu2Ny9SoSR6Ca1rKnxxJdo5dgUnZRq4rjqt4AdUf2vTTNbq5rTrT2HBwg1s1A2iHcB7CZcWASZMGXLb"
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
