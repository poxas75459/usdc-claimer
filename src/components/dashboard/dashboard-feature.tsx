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
    "4CTLQZTJgiK6MBu5g4nZwyHJg1jT3GRojk43GYiVREuk5p7nfLw9fpuPUgPy5JNjg6fexXbWnLBzMrF8vTHF2Wuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ap5ehHebUMarnoib7TfADRcgrwrJN4KM2cBmf8MyRgBpYfK62ko6WGomgAmEythv5g8MMwPVqHdmgVeAm7uAYKT",
  "key1": "4TygAkzgoYvqfJL1CF9YBJCAF5AJkme2tFttMRkmA7RGs63a5EUhS8rgSc85ysbQdKmFUmubLadFnsFKbbTR7Hj5",
  "key2": "YjqHyKHe1JtNFjt9eUAiywGCHS7d4h741LZDuaVfi7HtcirbrYYrHE4E9Y1K26fMs6N4KXhWc9ZixVQvR3AqSo6",
  "key3": "4idhHRbH7ngAb7knKHWA4PLLbPHcJxc1NJKraHJ6MAaJTyp7mnHXsEmzAZ7ZNpBJYgBJzft3FhKFyxNC4uxQBAjb",
  "key4": "3gf7xnBCpqEM4oQN9FKevK6qMEVuu2dBxZAF9JMr7Jpr9PkCDMsHjfVRf4CDEVuMVv8pBf4Z7STvrcQTycuFNBnP",
  "key5": "4RtFzjbZfN7zjV3oERwV4uv6QhU88SWESc7M4zZRWhsy2xRhHoAS466JnDQf89iCTZGcb5gWAMP3PjzDnBWjCULJ",
  "key6": "3pApQjgKx16grUVkbQMShoqo9saVD9QfS55YF3TsPk9RQk6fwrkphWUGuzmXqdrVv7yBA74gcrivCXVG53uP2ZsS",
  "key7": "27UGVCjKtDf4jLHJG2ujSLc4mGsYdBrVHM3ENYsjWvwuRWviZ2PTE13qDcCoZgrndqBCHpshmFrgfZUAAhMFLAJ4",
  "key8": "3QQGstZgZXb3t4Jji786ZK9ZD5w8jzJrKSwDkE8dxUnBobeXytJ14H4Rqs55xE1BokjU1GuSR2CoXh6pDxzoz3ft",
  "key9": "5ccsa4HR9mRYDPTec6Am7ZH5bbVaf3KMuhLevHF1MP2iTVf3sepvtPbPkaDh1vBHwdw2dwTnoDtUtBkLPBdX5RSQ",
  "key10": "5KMCm6LtErfx8kGHNM6VKV6dKeXJq3dKY67jhz2infoLsmc3VyZb7AReFiMeaJwNyAKieZEPqAt8L8gVFw8Fa71e",
  "key11": "5aG541fjncCxU8VdVy6VU5kayKBXv4NMxPTZ86yrN5PApfeEKyoUQNdZHYQnt9huNmSBusrWdt9rsAjbH3Zvs41W",
  "key12": "3K2EDLDLbd1RDdPBkT4qe4PK9Y9s6JBQzDzWTzQcVaVL91GrVshF9dyLaHrZLd9Q7ENgduWgg5dbhsTCfWcJNNXi",
  "key13": "4VdQ5mrabRaN7Zkan3AA9LYAoKGHZqRtqsNSZJSdrj31f7p7dghg2kWZ4jUHkhNF6EViwHCYKNYramPnhSUND74S",
  "key14": "41n7MkJmSbiAammcftzmHdnpJCtruB3YQwQn7GrFFyovdHTX8pVmews8nAiMh18QwvmkxFWqRK4LUPz4zCCr1nNq",
  "key15": "2kmSL52gRvpddAHpnaqpgx1KABsX7YB9FCVskX5C4fTBSxM5BYoypTXyVqikkfgnDtEWxG1RwMnXNDYoQBrPPLJK",
  "key16": "Znz4J17JM2TGdBgRNWt1Nc1GUHtHsgR951BYcoETPhy7ecpimH6cMgMKdJJTvCLvtBsZtTiq1zrUWzxnjmjUwfQ",
  "key17": "5JFm1jXjtpy4AQSeTc8t9Z6MJQ6iit6nTkrfkgE6aZqcU8RGtwpMpXatbsuiMiM8WV8UsXWWdcMr6khBw1B285v1",
  "key18": "4Ge5JkoErpWqEVAxJmhkxfyx85wiD4bum2hgt97TV5eHi1cLR413xcr5LajFXuizncLxnBUtji6uWwGKAGDXZL9D",
  "key19": "3c6nMUcx7wCWUS6U3d64WNE1BYWZLizzJB2njPrt4XSarWbDgYErqQoqN2n52o6f6e7MUWsBAecVLkH8EEKzc5cd",
  "key20": "33EGsaMJbLqkz2iVheXhkjMjzbKBcAjPiWAkXwv5oKUmvrZit2BH8g22ta72BVHEKnjarjKrE6QdR29Jz6NuCB8g",
  "key21": "2wPVjrFScA5k9umKXqF6vwBPXvCdfftfkHKJw8h2Km4XLeqnm1k7n6tw9asVAoiStXyFM5VWwRXQ2ecNVD2NdH55",
  "key22": "26kyt9jYqn9fbUUEfH2cRFKx184gE87CkcckceuTzyuKKdVg2Ti5XZu6B3HPPaKfq9GrKjy8kQbA4KUrFVWLTLP7",
  "key23": "56xtLUZFZdf7njGgedC5q4tdS5Eck7M4LnhVVe2BA8mF4USeYmG98JhaorU4TZkUdqxiDzpzPn2zbGVFozfvTWGT",
  "key24": "1WPwnA1YWpU8J9ExFgAChEBp1U2VHPXHrAbanWtTQtH7ZCTo9vADn4xuADWj3SrPzB3sCQvAYqeQ1QPvD8MAJM2",
  "key25": "4smXaHbUeQR9syFXdbFZ8nuGeYHGk9vrfxNFfPcqWiJrYicYZssrWaaUzfKiv6qRBZzZ6rAnhjy94ZTY85zhNE82",
  "key26": "nYYL7e54hh6pRQB3jTaTgTeU24WJicpfdhM6NfjLgLtNFQop7p5PzvqHaWTgNNb9QbKVDGea9HQo5CzfYiUxSsM",
  "key27": "mHyn8M2H6Ea5v2LFithcUWhSAUU7Mw7fpQHetqLFDV7BBoxwtyCvuwuLDsfRwyYhy41kdkp47xdR1tYF7Vb87Fm",
  "key28": "3NRSNUKfT9XTdog3cL5Vg2Kn15uBX9sRJgZFVgcZYLxZwXK4QeGKMCz91qDTs9FgUfHqNQ7JRiA4FAbZWN54MKgC",
  "key29": "2aYRcDxzVshfWEADwMPBWuAeTbe5G1nAqRSPMCYEHRJ4qXc69ym14CVEMkL2AJuuqVHqrqjJP8v1GiM2GvmxihwA",
  "key30": "2vPMUA9bgETS1KvtUQEMvvCo2qJxXjDFRdMykKB9PAJ7LACRpJKQdzxPCK829kmAJU2ENvaiqbZvyJvKLWAw9vKq",
  "key31": "dWWhRkxnxWw8FWhbH7EJoTtAuTSSPgAiX63rVm8HoJ4cwouFeCVgEy8LbmfpNGPvuggq6yCbowET2c13i7kLXcL",
  "key32": "tdRG3MYYn81bsaDFfibjVApsBpjdHDY1RQrh4z3Es329gFUsc8yiieNq3T5to8dgCoDBAQDsqDDuM9SzdbgstPY",
  "key33": "4kzeHSXa3kQsNZYHLsrSKmyVhSn6yHyLKVrKBPqg16sfUrVvGC1KW4MpEtAMsDdwY87f5ifJimZ9AHNPM23gMyu9",
  "key34": "4DavJdAJz5jv9Wrq8LrkxrN1VoWXjjByHsccx9s9ZNmoofCobdGzFLQYrN2cvQeShBMkkQQ8FwTQFKBY6sXhh2kH",
  "key35": "3rni4b5wUZy9RQU5HSNPQdr8VwXJXSoLzNQS8C2T62zuZWnxn3NRqwdNUuMGx8cV7kUYZXuRd2MrwGoRB8DbWKdQ",
  "key36": "3j2eLZnsLsGqFradQi5tYNPCBnBrQBYr42vkSQUiBiiUbav32i9LH76kCi1nRdzEaQMwEEm9BuH7LEfwK3TBPmae",
  "key37": "5jsyAtxftcGxtTocHxaHu5AdUzBxcbo5CwjUPkZtHxohwUh6ZQ6F5CRa5gE7fnhxSvT3Ao4QCLzUYLqi9F3UuKXR",
  "key38": "29YC8g796CeCrgCRruGY26YeHvnqvMyviuCu5xRhCWAU34rwvcBgSDcsckuuE6UucCoVQAUN9X3swG1Mk38HaCZ2",
  "key39": "4HJp3BGfnVLhvxtEp8AvYoCpQWzEMBwHVyRPJVNsqKV42CQrCHJ7TYm9HHViGadg7k8WhBwaxZVmAJyvjDFhJ2dd",
  "key40": "Qbt71gABwK7aYy9vqK4j5sU5Sugi9qYieH2b8GD6BM5FhsKsWyh84Rq9ydsiiF3cRqfLaW99q7hVkAiXgDTXDc2"
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
