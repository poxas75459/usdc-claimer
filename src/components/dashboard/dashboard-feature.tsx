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
    "2JFVNa76QdG897NZsuizWVwkQ5W4ZZYveCPz6X6qnm53EUAKkMehUSjAkZBNEeLzBoSGMLohgiGaNcZsyKczNMwR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MBCc2kb7dnR6M3sBaYzwA4yszFpzZkhTgARapgK1T21GcmqFjAjVMB49UawCN1XdxipQP1thnpa6Ryk2ThniQ5n",
  "key1": "3Fw2q3MJ8RyXoFh52NyvdN6xaj52zioWmSzbDXMyNRi4NJC1yMfMRtbCiHLZvTAUbc4r3qyZjaPTiZ5XHVT6EED6",
  "key2": "4ZTqiS6rg3zBsyGiSR1NeqGaDyaXturH82MyM5Rsx72A3sUXvFkfPc7MECXWt53LAGkpMPgim3nCZWfZJUEvnYkq",
  "key3": "525eW5tR8BEXbw7yc6pqoKfYJGerULMg312Pj2yKkue1qCS4Y44Zk5FaYzJYsixqQka5r491yDkep8hWPSxk5teD",
  "key4": "4bv5bDTVktxd3gbNFYjYCRYNXdhUsTwXoJQR7dUhpWWUrH5dZ3bzf7L8Zecg22qnVydB5ZZga3XKZ8wsLBU5g4eN",
  "key5": "61hoH34Qw5uvGTQ4KGszLgZUe4y22yyyzhg51ZttHPSvBn9HV2H2EepZEpR1rdjcDNvhR1aF2WJiQfJBpTycnbXW",
  "key6": "5JZiD2vkao5n1nZwknexCPeYjRDY87btQPoZJcPLijatLD9EXzPWc5BWwQh6uP7LEXB4n2vjZHdg5StRi1BMYP4M",
  "key7": "3ZzNaapW7iDqXde8WGKdf6JUF1Hd1mQvmzzvpYqX1iYVYYnVNtWwZ2HRWXkLpHVoQx5PBroqnK8ezYLjWDFrMJEo",
  "key8": "5dPAXWo1sp8YHBaBCGrxvc2DGYDDFXY6Q6GoT85mvD4fsnve2pDdVn3Ta368mVbKAJyzzmFuP9mkquj4U5qnS3aX",
  "key9": "64iN4fCiYPfLJdTCxosrHH3zzyqV15YGWtfpMg1hjpg1QErSyokE3qfCnwQ1yDTwTz7qFoyyeREJ2SJThetchdg5",
  "key10": "24en9Tb6ehSNk42jQGVQ345S3ebWdtWttvA7tunAwsQaBq6Ujea5atYxzL7Vy5CSCcqhHgfkJrPSqLSeG4uMEGUM",
  "key11": "5WYg1RWQGXtCinE3V4Mrd45g3EgjwXMzAKrdrHM7bWhexpPFWxwyQbLgc96kCJea5KxYJVRvLNXLaxFiFGnsJdJY",
  "key12": "5DoixQjEVuzbeqBMP72XPpHhJDpQT2k3VPTxLvrGgFAA1t86m4XtnhF1PYvKHfQokimaddHE3fHtSZXRtaNCdSPj",
  "key13": "3HydG78EwMvaSPjH9Memv9csbwn1e9uNnEnotvm4emD6G4XPAc45k7R9ZvkiGznLhuAkQYJJoWey7AbotzbbA74m",
  "key14": "5Rbu93Hg7Q98NnCVr6JDcCoxYkWGbEyBkT7kUPCx3GwVHKuUftYaAPNjDKWQZYNsdHzUsL5QuEzKpcar28CRawo7",
  "key15": "5NUTokg8L6AmPz8hzUfNXZuJjd4iVV13wjCDEUr6rADH4Bi7Kar54s7LwjaffkdwweSAN9GVVnoQ7V6s1cPToijb",
  "key16": "5Hh5QTVP4A7HxYiSbw4eDWMpDiKKNvQUDijspdFA1EARuF3gZnCtsEy9CmwVckkjkBLbpbshaLzkVjbKB7yGuyHy",
  "key17": "2DR7jsdairqQTPJdC3YerJXP9yuNRc2NLH2fcPUh81Hmyw7E2QKQqmZayWFmHrUoLnGmG3gycM33CgiizGSS7Cs",
  "key18": "2nNDavKkk9XKL4AoktYAQBnE7YkhwHK5SfjUMD23d8qaQRuP4irrdTKr6A4M7kG1KJ7PgVDuqQzVPcrPsQphK4yo",
  "key19": "3SAaBUD8pzbc6M5UKwQXR1vjQ4uFRg5nitDz2rqu5hrvbRiZpdmztvt7uqXhy5Wz6RzXSoHVHYYWx8H4k5aHyL2P",
  "key20": "4g8M1EuCokeQAAbXKW5DSREMVLubEVSHYqFQkwEevn6nFgh9Sg6EYWL96p1fqnstXE9FzJSkWxWkzBGWDcKpwRL6",
  "key21": "313QSeSeDBfGhhC6EubK6aaX4Vwn3AqqMk8d9XxBt1sTWD6ej45zKChtnNbiHeLnPfR9DvP6YHYoCNwh5EKt4LHM",
  "key22": "tWku4UuHFdPWnRapHLBsK2dXGTpQ2M6jZ46UhnJhq76gcogbAdkFU9dtZwqWNc2hNTLz3oyNunvyXyRaLUdPZpz",
  "key23": "2n2dSf7pLV8V625CsKgDLjq9YiJXqG7DYWtGMXLRDWeD4ibYzvdojtNJt6EUtJY1Z4YRESQ25M5gZVTH1A6eQARp",
  "key24": "3Bid3PcFFiEi5kU4ttiFFALZKqr6cKU9vfxmRxzsWH2qvcHmZaPjq2ZmQ5mKsSQPzJtu9LKTTmuRvUscpbSwikqL",
  "key25": "3vXWmBRUSK8YH93y2YDTudPFTic6BkbtjBRiXEQ5NCdiUi5p13jFbpjUmw7ekkbqdSoi5MgjEGChj1p4bysGjyhg",
  "key26": "5xoycRC66HvR9HWRdKksWJQSME2oT3xZzCojZmrEue7QPr5PktxsCyU8aN5yXw6FreycP9P1L1vQLMqqGihh3Lch",
  "key27": "5km6prYvykE8RJRmap76qdNqXTvd3s4dJHb5PC4NejAa1uXxLQPUoitFHXV1juyDNnFhQDC9uhqYm7EBSZMCjqf3",
  "key28": "3g9rkqsKZZn955uufreH76id4oXTiiwkQNYePdKBMxDv6P9RbDXZQdiiYoRtGV6D3goQGWkhpSQbiLZFMzALGg5Q",
  "key29": "dMxosZf4aG37ycShjvfGJrKkgiA1iiGSoGdimj4HPnCSXuQX2WYfk8Gz1E9BdZG5PDzCcdWFaiucrrz4xCXtw1S",
  "key30": "2mAYisreZ275jJ6trLKoWmhcuxZki8FE3wxSTETyE4Vztk1yyJL99mGKPa66HQGmKk5vrqssiPD4aquFPEUZcuzP",
  "key31": "4ovTmfxiWG1jYn27rxs8B5VCo3vCEmNaH7AohrCojRNBKQ1G1WDu4QmhJUyfvwSd4MusT5Ddt2bfjvJMC6B5GnCB",
  "key32": "rUg1t3PosVaheif1svExQHhJ5m4hfvat36asNrfcAAHYbnyLFfmbpG88coAHYx9924uaCHGJoDW7WwkPw6Mhn81",
  "key33": "5NSa1MmAGWXb6ZNRstMJZMu7c6Jj1wEfhfNw8ZhRoEzD8wyY3vF9vGVJW1M6uY6p7nciyqkLWtUQYapwttduLoWb",
  "key34": "D5Vf5RhjNSKf7BkM9AN71z5kmaXA3P2Ys8ZKbz5oP1UGcf1nNyrpintLHYfA7vqQ5Jsyp5EX6hiPqXDDLpV2D5P"
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
