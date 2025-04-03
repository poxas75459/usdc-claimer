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
    "4NZSm3UpENuvJk7QW398HgtFPXQEfq1gkdCgWSDL123cXujgKmQF59GEAMiCuZD3faWzPtk75GM5XYdKkmrrQYAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49sAVFboYwMH9QCBvGDqDuCqz7voGFrzrrihm1UMHsEqyC6VR95ijbMehFvcvEp9FwR9RzagDh4HKkotXDkptvfC",
  "key1": "2PaZTwf91NsA4MyZwGNKy65FsyMbZ3a8aQM2exn1D6JfaV8WkPbke7FTAbyWhbxcJRwoaMj6HSNPmgYiYhnTSCNr",
  "key2": "2MdXSvrTWJGMDusBK8jh98TiXsf34RnZTRBho62BWWhkPtny8jyWG4WinmSjcfLSsismhnAovMqKNRjZWiYGqYZ",
  "key3": "5cXGJFcHQFDEdRbHG24vaQK4xDqPhg3AURZwc9QTDMYYAYL145K4TpqRpz7ruN7p3gjdc1GFSXVnSGMe1GDxKXZV",
  "key4": "51AddjvWDmLW2RHy8tgySFGKLyFDh3WxLUXnBLbJq3Aq7xATWqEufDJ9UrWVahXCLoW2hs6aEwpgFBs4HXDhq9Sv",
  "key5": "55pFQMCMa2ehrWnezZFLbh4taSY5qoNoC3eEQnqYjt4497PG8PxzgGf3FsRr1naiKym4t1LMuc6bVGU7EAC3Q6YL",
  "key6": "59kskqSgHErkDrer8omUCEVoCZJUv2YFPiFLqJGQkKaYZP6VGzxCe5jAWYykdfJYwAxXHVjBM1CckdddERstFEgH",
  "key7": "4CM6RYkQqahF6tqsanBrQRPgXzt6eRDuBySQtwoCTAFcnvrhZdpkvhchRSEJP7JRuKnmB6Zuc2wJvhMxs3NHryqN",
  "key8": "51VU9YJbkQaY3oMnwqGXomAUzdoGhjYchtV5UaeGevagRkCZLHgM1vWdfhvgXzhSfqTswqY1Hsxpa9iQ8bv7zNfw",
  "key9": "4uT7iot6aLYumqmURzwd4Vf5d6kQo7cxteN5ihn6PX6HuewdkxRmkG3R5eL4U5XsLSLZGLGWC8XfGXvKrNaW6RsX",
  "key10": "5oG5z8VhPYtojiRFvsTjUQHCuzj1vDyUwpFfrdqwv4wn4sQHoBHFjApBuAnxUTWLBptdw2Q4NTEsGNwH8T3XP1Ag",
  "key11": "4K5bgq5HaEKk3scSXLzvAXJAbdX5avj5mGhbYV89hGWM9NcPMZfYpSpXvtpruEwZnz1PAif7rVoKby3uPw7GkU2e",
  "key12": "3Zy8S6pQMMoY4MFmncpuzXG45krBBio2yFrEUyb32P2dgmetdymkvPRd3UgVa4rWa3Jeq8wBryUWixTG7ZW4gd7n",
  "key13": "2xRUzUbnWc8RXxhe7yndzX2qRv8XpYJiohXvtiSWQAU9ZCMfjAzjfN62PR3YAVRNrqEvKCVS1NWR4Zh6ucUVP8Ke",
  "key14": "4TfDJPx7pr45AfYDeguUmJSgfQWm21o6XQNAEkh4iDfSUuQiCYKkapvjNfQwD5LDDrvZfVDZiwNgUV2FFjg7VkrN",
  "key15": "Gn6nYEhRFecgsVgULeapLveEzAs11CbD4yFdPiMtsZqCYCrrcdPkqKMuPgRmMyqYkwX6dy3VwFLgjarj5L1KZZ7",
  "key16": "3fUHP8deuvoXf8s6Lqaap9qhwSTZn1WYZix2tDKbLdyDFPETxLE3xnMiijKPUsxLkAUJDVgL41NWvv7w1sbzvwXL",
  "key17": "3awg9wpxZpE217aefrnanRfj7xnwgJZAKRUDni43BgLWLScX7fxayAev5qfuGAU9PbpmeZ9mg2wk9KNspbyFy9xu",
  "key18": "38AUAnr47JfwPKPNXLCzoM6whs7x1ezmDShTzwXUEJdvoxe1yLFZtLBoS1nah8wsAMbEQVrQakVL4GRT7tbwUxvK",
  "key19": "5LrQKZLjqka7JEV1MjCsm1vNfE6Ba25Bi8GQnsuxCaVwtNQr6boGmoKxSYbz52pSqB1zeDov9oCxcaAA1QSmsRuZ",
  "key20": "2uQGAK8GfSziELwverfiTiAnRWMRrUbQHkS6M4jgA2DnPDAs638FLRWgQy5fGEcVhi75dRhowe5hjfh5MWVuSs8D",
  "key21": "5nL6tBntUdzC8kR7tGhJE4uHzYrYKjD6U4Z859tX7oakNtE4fJYbKW6eyE2TmaBDPD5Tt7Xod9JkWmoceTDvvJF8",
  "key22": "4eH8uigG4shMekWxPzfnDCWmNkVvepniAwkGoJLiVuNyKt7J46cWTn7U6qjZqbGPUjW89FHFg6UCmMRb8zvVX3K3",
  "key23": "31QuWdGnj4Fyi3W5J2EWbbkVrE1ZqFhJmdztaMDSrqcQXDkNnC6CPL7Y7tkTvMZLcnpWXSrN62Ks5AQKrzLaNAa3",
  "key24": "4xeHjfrkgyDDnbrL4Zb6ELNofJjF3K4pz1Q8ibXmmHsUPnidGBNH2HKhgPx9ssy9u1J9Z7Y8ALgc3FTfUXxd1PfA",
  "key25": "4AUehq1rSGyw69Uau1Vr2aFXM9CDriZxmHJT1eeeHHoUDNFRQmQXFFixWY8v5C7tYcg6uuJ6Y15epeSfzYCYTANT",
  "key26": "5jzusD3mycAmcwgLdw7tjWaXhkJS7AJxPLhz23Qg2ZVY8HAD12E38zSXsUR4J8vwP8XdUmycC9dg8UY8KH3REHrF",
  "key27": "4ALmQE1SDtuDXeEuXdLeMJMW8EUQBb2saPBSFQgT1Xy1xXH5BLoEVWLYNHydEkJ88rtDy3vpoZ6zQQj7tUFpgmg5",
  "key28": "31WagZPegA13SVbi99YL3iLgy7Ejb5XvedG5gekppUPfjNqUbGULKRnzYJ1xUSXR2zcs477q8ExAHWLSR12Bv8fq",
  "key29": "zyUVWA6zBtzHut7LR7aHmpj6syXfCpRZVXaByxFUtCcWkErQjnpo8xtRcuLeYNxd8yy8gKp7Buz9f3rZaDCf3B4",
  "key30": "2PQDciQaFxTQKvBrsos4c3KFuppFYquy2anmbacnLpo5DizXAhhkFV4uGW6TqWeFRoXFeXpyJ6PPVpRsRTifvaZn",
  "key31": "5zzaVTfnQ9fqyDSz6yiBXkEdHgsohVPD91neDzXCSJ4FFLuN6a49HjdruSVn39LxgQtZRWTqmkVJRZuV6j5rVfMt",
  "key32": "5id6Li74AmcRRfwroSVaZj7byicvdcKVDftdDggjCj7PrBiyNugzAwaJ9LSFCxBHuEehEykg6NWPdeKVEYBojViC",
  "key33": "TMj9iDw21QzgnivkBXWLZfgsJGU5nd31pPm7UsUfB29Aik67igr8i9ovEoiFcdbicBn3V5LHxgboNQ2ykQL5Zoa",
  "key34": "5btfCWAbtCYLiuPHYgJKJRNSk8p11kBmTWaK1ANysF3BrSPoBu8fBWa6EzYVryWe4DtTqxKqLKiPKWykB8UvYutx",
  "key35": "36mxwJAXQQXpFqmoammTupcg6cQEU9kw5175vxH95PHfvcExYJvVd66P1P23UAqSNCEafCNZB5JJjGvGYbdizLxg",
  "key36": "3Sdo4v8ZpjTrfRq3Az4vbHE46NWoCGzAUWrnCjRfwLkMirdn5zgWEJLo4rWTYgiNhAv68fPzzpnNCJmdQPrpr724",
  "key37": "Kg78Y9R9FjAL26j5Y7tDguJw7BrcEdsXJ2iDfv2Wr89kfodN1upC4o4t6kSzEX7aKUDxTZfUsH92TUeNbud9tEW",
  "key38": "28h76YRLKfSEf8jFVRWB2ngsLKh8ujfYq2n2a6w8D1oqm9xkUqKWmyFR9ft2HH14kTumNw5rD2QALfVsn7CsVFFC",
  "key39": "4eAPSHL5mhwewYKRTLuiDmU7YZCGAWXEcfAUUEPMamBZfzQ87fDDE5UqDswzLbJ5C2GVkaTktCDxFQ9RfoEpj7TJ"
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
