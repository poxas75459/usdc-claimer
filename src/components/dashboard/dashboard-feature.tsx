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
    "67Gi5qJSfbGxZWk5DxXjdVBP6WJ3uMvfmCxJM4gHTx1SXxq7TUqUtYTkqV7W5TXfquo5s8NyheUQ1qnrgASqHqUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dbBmieWMx1PtHuGAdRTM5DnubfzpzCo41Uf9xX3bmS56MqVAnzpJJx7XCiyVkbB66ZsohHvbXzeHFFQXSDeFcu8",
  "key1": "5ZyX4cpBp6ncSxM5e5VVv2LTmo8vDYhv9ADfLWDEHF3cxxdBDWuxiHeKPtn74eMttN8mnNYQKDkfVmgAxj6k2NY7",
  "key2": "58p6e1zuxBvdYmPQVqubFXqpJELMLJTEc3Egy5YBAtZCviFH9vPT2mK6by3Vy61QrXrzJ371qj1QjPJdo7cFUD34",
  "key3": "4ekTZvEMRWFthGStKi5n8uuB76QCAenbtWefwHR2P8epzJ57iMo2XgY6mdzLXAph9ZvdvuD8b6s7aauTmB6xL7AK",
  "key4": "2MbvP4RaurUZaL1EbFaERtdgn5FByjyo4DZVdyZzZK74WAThBUxxNs7g3MhUnyjz2ZCCvUNVfDCfoPZ5XDpSJq4y",
  "key5": "4feWCAstr9aPydopBAA66qrVdVBrz3ByZ9to66378jbWK56h1o4E4FNJKdsbGb3ZKWJZueVpA4d451XH7YNPBj1K",
  "key6": "3RJgv5vtMcWuxB1eU4DEXpGqT339oqE9g28EAWZ5sDwY5vu6baBvTr1KLR4Zd5ofKwdT5TYobAo6M1tUTXBjQTwb",
  "key7": "GCMkLgF2HpY4E5QEkmCoJoxRufFQaqhDgVXSpR9LUecz8d2Jm4KC765BofjHtnRhRpjcmFyTosEeZB5sEcEPRAZ",
  "key8": "ifzV2CzXgr4jPhMzzKXPEtbPv2Pbbcwtqh53UQVejw5vXK6eS6okzcwotCdASP4rA4KBA2sQRuw3TaDh5Hztmz8",
  "key9": "3hFE33GMzQ8VQRsKFSmNrGB1FYDx25WyZeoBN2g5H9rpHuK11NsvDJsZs6ad7jgzkGQYkK9LMWo7EjsnSHNNNyd4",
  "key10": "4QF4bx2snbasEbdmLD7iuWqcHwtRBxsoCN2k2cnwzPqoRExPkSadxhS4tRguP7buSXN15y8m7vhFQ2VqSEcjZK3U",
  "key11": "5HMvGsDdiADwcQHbfKZsDPmU9TobgZ3fuuNqxgFdDZtA6iL6BL5L2LWZfD6gaLUiWZWDh8L8Qw8HCaZxxmsgBb6W",
  "key12": "4AWWhWVQTF9YQDcKKWEJS7gV4PSd4CpJCjGeK77rMyynj8u9JUJD4ewi2LpZQnBmFSDc6ufXrH5WmfEFAzKGVywq",
  "key13": "y8HVEyHpovGfehQvUymz4hd8NFAdohg9mTQm6tCH7mmeYST1LVEYFM7HotWu7oCSTQ7WsQW5nYSj6GRHrvxexCi",
  "key14": "4mieukiY9i4CGsbnRpbvNZKgcC2BvTbi5aj9jUdb3qJvNmvxpcVdGdoRo3msAGK3igBEyuhuxvRgubD3FRRcgptj",
  "key15": "25Q8VvkH1gaALVryCk8YXzi4cfjskRqpnQ3MqrTgArwVfQQZ2U9g8YjcrH5Uk54krFqf2N4ksS6WjgVsTFPUjcYM",
  "key16": "58vaFiurfKc48ofPqdsshSjQt7rDWaqdtfKaCEUG4tRc79273FwNC6beXnR4552WqWZCJu7NbrqRi4BpM1kVt7Er",
  "key17": "2nXNXaezZQdEk5WkFd2mpQMKsNQHH7azsJybra7MChaVM4cVoY8A4ActPFiTBSfdBceyo65UJBBDvn5tybuDgvzC",
  "key18": "57cp9vp4qrXkMYsG1Hn6teNprNeFYm1YAc5AkmjpJBy8TXc8H4aghnNtvtqh19bdRHYpajB6FKo1ocsg8gQ25Eyq",
  "key19": "5NmUeBobgHHzekdzoj6n6gaJSJ8z62N1puPX7yewaw7hAwMDZ5o3xfgkwjDXfZV8SpNCyCfWNFGEMTUsgRZZQFsd",
  "key20": "5oEx36DwN5VDoAWfKkNreFPXzkzmS5jPKGY8V3qpQgDPkb5NRKJZEfc82tseRaD4vmhapKBVBcdyrPiB3DwFEQx1",
  "key21": "3M9xJjjkwqDtrrgFCqCkrgk8ZzEYizrKCSviUSfXctcYheVAEazKYtoHaSDCeWm1zeUjYWjwbXdfSgorVqx4Wpci",
  "key22": "5yWN1R6krifgy79YTMNerrbq8cNMcRnwgEKev9WGGTz3JudR1E6j9Bwt9KiyYggxTckS8BNQEGDyA8v9gsm5ApfA",
  "key23": "2bwGGRRoYsfYbUFjXfQAxcV1HgKw8BJHGFHFvtzAbXUtvhiKQUjgFr7F4nVcTdorEbHv6dzUxhZwu86ZV9t6nbum",
  "key24": "5G7wEFY9UEq1pve5k1BVFEx4ZMBqcQLnzaN6vC7x67zJKF6HZKMv4UJcyMi4kJJMr7BKXTuLoutamLhZiF3w8o9",
  "key25": "4Kki5X48SfvFafa11Wsh3B5ut8NZwvJuYhcRBVTwNzCNB1jSgkjdeNRWXpVHfwtQYQnDxnsDSZgxbCy39LMGbS4m",
  "key26": "5ECpMA8ARLhpmkpcx9wqgP2XN2XaYw4t9uFYQhNCkqnLry1kc4awQDcCMgsWPaFmETiWrUPmqMTKDNBqud6S1B33",
  "key27": "4ntmWBBLaDkYeNvLiq25PN3mmNnCCKpaB5fEA6UBLbzdk1XJyNrmHsDLd7RLP8wy2udYPPZSJ61dcXTEMtbqFg77",
  "key28": "3zkAxPaYMB9xLKw2ao7oT4TiMpRFjJ9Bgs4BwujaFaYSFqxVsEvoEbSNPVDT5SHVCtbLDCC9pQFQHd1KxswE7hZZ",
  "key29": "4wgT6ymfhwh6E4tfg3cLFVSuTgiey2pKkBQkNeGBccRFTssiKMtqZAfJTkbENPYTwU3ypYfhEH2SWqNUsm8AhtiW",
  "key30": "4G6VUrZoTKcd3os815s9nV5iCn8ZbvzWFHXcikwikfZmcHQrf6jbxf4doxT6MtT44eNBxztNxRcVEnP52AXP4JKT",
  "key31": "3j2yJzsQRr2GLfp5HioPwFbCwVmEMJPtXxpSkNwiZrmxKuqdNiDj1it6VAZMqEcYCTbWXNHK6HBByiVYH4SSSL66",
  "key32": "3qSJNxZ6Dxz9fEBvyXRbSCNfqHyGCuYWSAtmVddEJbQNLwNoapzPZ7r1zs5m9wfAYB7zPG9F9Rauyyh4LqoSkwys",
  "key33": "GsJhguSzvr6XS9sQw2UJPmQhpCxQt1qhTdiN1575G8XA37EydRJdBKVmMCUYAiWwUmsMh9bMzrwMU93R58AYnv6",
  "key34": "Z1jQwVmbpwkmgcVztyZSbhgr4tBpfeH5ihZaiWUxawtXb1eNTyJcarxDHqGMpQ3a4X7STesBwx1BwmFeNKTnex8",
  "key35": "2AXtTQJPEtTuLAWcXmGG81PxR95bdJMcQyUDbjVo56D2qye6qqmGKHKAb2hsj5kKxdUENfHWGkFMnts4jbBSTejF",
  "key36": "1kVX5cohkzvQSAERj88UEpWrMkeAwY5zcW4AvqoxCt8fzoH1Uk3W3s1CVBbDaT6tqgWQ2EN6iSY9qhFLkkrRS3",
  "key37": "59LFwcki1e52LAt5Ds9LMFiqKauSnh7sEGSjFN6LH99YV3phPxFFE5cV3Pc59Tr26FjF9eNPh7KAqNeSDDKYF28P",
  "key38": "5uMLrS3TVnWqnxYpQGTHbxZ92ZexN5aWhB6HDdBonD83UopqqS9DDszWQXm3Puj8sxb3SzToeeqM1Xa8XbPexcYu"
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
