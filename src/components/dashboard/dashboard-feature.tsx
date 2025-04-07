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
    "893wb1hNfeP5QQMDXVSf7isYrX1r2ZtMYS3EaLHKCRdHK6rUFgAykFtDWrnM6BBRdGz2bdrDxVvt63yCXHfMieT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aKUZkmfA1oSwiZzKoF6L5spEAST7dtSFpNyFJHEzHzftsm2Ne3v3jNSEcdUjLv2kw9fnidy83RXYEw5PmfBdpJh",
  "key1": "3oNNyuwAvFyd6mD1hMLmetDdHoARHuaGqGv9ejU4GwXCxKRyAow8kfFbUW5mkVSmF3VzCzMFVrU2PkyA5eMPTt1T",
  "key2": "R2fDAD9popjkd1LFH1g47QdhQ2cRKeVvy2uvFD4DjdcZ8tVNJjEFx1TMHgkLVYeP3UwD3EPekPu5upr6Y5NHRwr",
  "key3": "2qdjn7gnv9tnRPCE4tvrTxjcTDBBvokDdiRaps2QmmyYNJytnQDpZEo3TGiC3eYE2tsUB3FcbaR8WGm9n17AXimv",
  "key4": "2gMhr76bCM55qxXmZztREKCiMPed65CjQGuW5vbqeimmknh19w13b1igjf3mwbWXJPeFJ2Vvz3j16u6jxuQ31Y2P",
  "key5": "5F8XLjc4qi89tAe7ToXqsKpb1QFFMGA13JhSExj9zSH6odYiEpjvM5ceaqp752TjDMEhK71RfixsosMPPjdRcX3P",
  "key6": "5eKief1fNnWnqfe5jXv8cEwhJY8vMJpeSt9EBqGUmLeKjNqXrrcZcrro2VFEXLrJEw6fBrkmc8RG1ik9nYozerJ2",
  "key7": "7ZtosaA1jR4pWV5mqiufehtX7joSfuKADtHDHM9MqzwQWZR866QqDTjwmeV5XGAPeZhoedkFjCbzRLM76qe49fX",
  "key8": "2kbmDEfJQNVC7PjjPtapsdwMHRSZ3KWUhBj4A2uLDv3nM6HADKjKshzpqFRnCJVbxLuzxZbajDP4xG2udX5bDRTL",
  "key9": "28vQiGtxAf1DCpJcNxZhxm3RU7HQ7EVB4aHPLD5UogLc5nvHVwV6rBDCpViYT9qEm1GsL9S1hhegRryJ1qwciHZo",
  "key10": "4dwrpYqajT2VhvDMHTTwocRqqSvHTZEZkxyJHkNDavbu1qM4wnbLpEuUSC3KvshAmoU336gVBM898Gywk8mYAzdG",
  "key11": "2ccZbCb8CHuVBGzA7tpGJcWt15PFpEd2oqHEFGW1nVboz3KPy2gTEtt1VJUQMibNkGQ8hRfexXwpUaMocX5VdcyH",
  "key12": "28CQkaUakbZQqG1gNn8X1rHghW5n8azNbYFZCiWpwKgQgBo8UNx85U2KWtSzZrvttSWiLuh9cw5fK412d9793abf",
  "key13": "whvbRBVtQku3e3adtCvgFLVzWrKHVNndvfMhD2Tzkm7Bau8EnDAT4FPdycV43WTN7jtHH1R79F9RMSMVJJ73ze3",
  "key14": "3fEsSkoeTvH8Gaf365LpbDntBxdH1UoWdmpnmzy6MKxe8nPJhLSGBT8o2sNeeeTGvrGD7cJV4o5ngriDZ36jx5bE",
  "key15": "5cQbh87S6GBQBR1haE5errhopiqeFkxjZfznE7SZgrQGHcWQK3J4NUWCwANxZaifcYaqfmtW1G4ommvSsmtg2mtz",
  "key16": "2oXutGYKBPpDnbuAZ6onKQkyq19qDZfnPDDx8PycZaQmGWNUgz3S5joNwa9h2iLAKyqUtrywKHwwwUBGYfu56JUj",
  "key17": "42nbUkF1MNRG5ypLPkWVouqmpo5hB5TDQuednXJqJoorMtzw5CNUKHSjfKnEzPYuJDHGHKnzzK5kD9yuok3MFi1E",
  "key18": "4CauZT1m28HVY3U1o1V9ntiDuhXPaMEpVbuKGXGSS7pPehrf4nSnBQksftHsW92Sh9jJi5NRJui65JqFppDP38Us",
  "key19": "3uHaHa2Ju2yqdZtUjceyN68XCzoPVSWV2ZvvZua3gyEW5djJC3GJ4GRsVtLh4s8bkpwq8z4qvnLzhrYtKcSVeBov",
  "key20": "27UBFYvYuchMKvqztR2bRFKzsPvnPNSef9fqaHLAZxSCC4eWmyZYRLFhodLuTJqLSmKBZJWKBktAkMCc5cGSo5jX",
  "key21": "2FrqjFK6WSuDp4JJT2K1jrBQ2ERaTiEkYxzenw5SL3a32At82bfQHw4nYFwA97um8UYM1NSr4yEdFYAHawN3wGzV",
  "key22": "5bP8DL7B53QMLm8MLWvJ2PGhPrzuCgSoMDH2yVRV7bRa3qEivr8DWs5XaK1s7iL99VKesjYSKTPiB28k9S9Mpx5b",
  "key23": "5fNMzBm1N9zfwjHwi4umvtDd39Pm4sYyHQ2NAUXgQr4q5Q1xjzA6tRUoJz7Pg3iAQ65w59RNkFHiJSXmm6hAmQyo",
  "key24": "4U2TDsY9bLnb59PKUw1uHJM19UjQXNxSf2XkUXsZ5t3GTDaYoCNac3R8Ga6yMAbnFik6uHydktkq73NYbhBYp1rW",
  "key25": "2yEGzHGd8KJsV2HJPuEhgHmYoM4qqLjGGKoMyxknfxuMf2YfKGSzhDr5LZY8UCzWF2BU5t3hk5Jyxkek9UknxtVP",
  "key26": "52uDMCbWzfQMsydiMMK5tRzfddqa2jPUnjKDKSHyaQfHmqMf2TpMoBvFLoCmGppbwJsKafh5fWGwYBUfUQJE8yWT",
  "key27": "4K7ajJeE2VMDZGL98ynXmAZKiZzpSn8445Tdj1kz5291s1FrwDkG9MLbfTfXR2iPVQM5rc6PXjNojL2gqie61m76"
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
