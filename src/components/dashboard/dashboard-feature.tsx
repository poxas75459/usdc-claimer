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
    "3MyK6TQWahWMCXw6zZKY72Q9tHuwyxzcZ5v8oKwfkV25crfmaRHcs1nXyGGdEfRcMC6CfJX6CJ7edARGCuSS5uie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eSqoLzSc6xtaK9tuGvq4sp6vTxrh94va3xtUfwR6VohuVhy2utyDJsVyqLxjTHDVodoBCmt9mdj2v8KEwoQKqdx",
  "key1": "3zW8ACEfG3t99Bjk9QHdBfXhEfwrqGemBnC6PoyMJYMx3tvJHPmpdWb7Nx7jbgUCqyaB417XxFTTWsUFz8PyCrKn",
  "key2": "5Tp4Uzeep6MxsfzAtR92rEkPSxxehiFyEomeyecRUaWhsw6iZmSVDH6ZcnWvnCQ3jwznLc9ESwfEVNjJZWQAdbgZ",
  "key3": "4Y2sE3MGdKCNSp9TuP1nbMoUKUrmUChfqoESp4pCPVfY8s599oanVwxVZvewq9dw2qKGvsyn8KSpoyMXce3a9ET6",
  "key4": "5QDK5WEwhMjLWJ1hgBtd7XEo7hu1yaiovW8xGUrHHwjhH6JLkPWzkKih38hGSZgZuzSYDH5DdX72MfNy1kduXN1m",
  "key5": "3a2EPcmEmDVdxjjNvFVSxYYu7vZeyREcMKEeJ7kuqhnYGieXozksvPQU31yzZR7b5w8LTnpM7mpmgHNWR1BHVFRh",
  "key6": "hvkKQQ83TFm5uPF41egRKdxJhTBKCgYDDYydf4uNTsrQMQ5mDc8AhhSi7T7zeHchfBsJaRP5UYFZiy8KEbXbXj4",
  "key7": "2853wUHY7DULb6T6A3ku18osk8zFo8QCbGintXupLXR4ypdm3ZkxVjAAjdUssE5w6SiHRTPiBaTAXFeSCX5nbS43",
  "key8": "63puQ2LkFzjEqkEzmscxzqk8F8fzg3oiDju9hA2NsueagXpJDkrZpYkLmKVRene3iTwVSSGHWnpAXm5nJe3BfRFp",
  "key9": "222YXDYVivuN6bnxfK7moWUtpwjoyvbHR3FMcLGEDH4Y27ePukTm52LnqDzbm6ywnyFmbiEtQmr2UfeezwDyfz3V",
  "key10": "4VhNhuk1zcVRWd75xvbxBp7kTqKxaTGVTPnrFb8W7cRfwbLfj5WrUF4WNP5orQFWS5j7eXsFymEpTq46iS52AKbC",
  "key11": "4BYKdv7KMaMEU62bnGaiAbYQDgmUpW2oPmWHHRghcTTftHMhXsq12RBNJrz9MdKFkGFXazo4LRJJA6ZJFghvMW4y",
  "key12": "B3UjRMyqr199cH8uqPjVPcAMpaTMdw2ZaRK7W5bkp8eeLQoCqWLBDe94LnhgKKHVaeQNwEaTofi3jmYa3uUTFV6",
  "key13": "2roDCJoLwPfMCRcd7CPbnhmXiSX5fjrLVJjny7xejRMxsqD6UMRFqyYyWoDjGTYsV3QUb72wbULou11MLF6daGpy",
  "key14": "8vtEeWsvz6qStYiCneTLXdXG6PrCH5XhrEj6vVHVm7sM4wt7GQ6UnG17NxmipovBV1kGsek3qx4mq5hR7tcoEWR",
  "key15": "3JeJkqrjGjngqW9BAqVj6vaCi9Qj7tD4UzWpJR2sfrFAfCkyd8MnXKbhpguGis5qyEfGMW3PQWP1ANGdZSeDWz8s",
  "key16": "3P7rCw25X6msFLuGWYSayTKFw9LvaMixuJ4ryggd7N61gntGA2Z6KrssViFiNBjN7fNwVuwewkG1AfX6vnJrAB6H",
  "key17": "3z1nJjqAiChg1uUaKyUtrRgfU4ghDpu7rxx32Exd1qtVLt73rRCrX6EkP1JwXUAcF4j2pSsjcXKeuDBizBVnjWHW",
  "key18": "39qpPZT9jQstSYYFAfCUQG7qjEuupAGesYp4oLFtzXBV5MccXBNcdjCfUZBooNKFBPCn8gdQNG3aEYj1XKeSdmQT",
  "key19": "3cu5QtYvvqXrjFrqvFc4uKUopabFsqNwbLKsxZCT2EMQo4N3JDmegrk6uGqvpe8L9FFcjdSNHbfav52UvMVn9By7",
  "key20": "2GdyNvCLaFmDWhvV6YK5U8HftAKtbvwMeShnwDm1mLjhNQR8m3iueGXbVZPDD1ZRzVLNwcCYg24owXEibVeBujHj",
  "key21": "3d1ueqXkbxnzBJTj14gSURmm1pnYCPW9s1f2qpvxEZrLwuczsBsBwuXzTQ97uzw6v8sTbAdF1iFNFFCff4Xd4VsV",
  "key22": "5hKGQqfsayC3Abo1dYW9PqfNbA8DzujAitNyaw7hViqBZVrk4im1XJn8DxDLTJJySkYD6kfZ95rbMPfdfaydh58s",
  "key23": "Fga6iZQd3L7uP1VXeESKAa34gASGrmZ4nvq4R9dxpnvkYX1DKFjR4bzwtGpv6bqoERKaQGVXFiUHooRM7bfLKjf",
  "key24": "5Z5yUt7bwbmaevGvXse8B7agu9SV22AKAxjirDeFqD7pJkdFghCxaHj7GBNvfpKn7sbY6NgpEAmyugmhFNtfPn7Z",
  "key25": "4SQwAERQQerjeYLMY9TUJDRkK3V4hAF1whe8pwVPmHJhbKG1ztqp62dGjwd4TJLtVay964LyhU1agQjJGmUDvsoC",
  "key26": "4eAgmo6X6SnvrK3AtPvXAeN8G1uXWUUBsZL2AZ18prmUmCzBcRMou5E2eU4o6e7phRdPLDn3WDotkZLKaoZ638MG",
  "key27": "5FHWXAruTC6sTLu7D8LrvK75MP3Nv7WSmpSYcewSkUGRiKiNnnB5hs3kiyT3iD9HxHv5JfZZT7cWJ7YVaBNKoQ9r",
  "key28": "4s8c5zyyL5BqWDtdsLr4btiizNymUw9QhbXbEpQ1JkLQxcgM4FVdgoKMhv5t4GCquTF7srVViGansmgBdRcgeau",
  "key29": "3JW4gbHhuJEW6ZopunXZ7fSzng2Vw9gLdhyL8Za2tFwqDzeYdWf8SBaHXscf6k944DSuqip87b9F26GFT2M3zdYc",
  "key30": "5wqUR7WLSHGdsCsxfppy9yRzEED44FM1vbbpYdMZxY5ABHXtR5CUfsa5za6AePqKpN3ZrDdqR474EFmRZyQoixFr",
  "key31": "2GPM5gBwMj6mHtv4VKNrQyxsacrAG66Hgwcs6FxsLRWRwBuDKnkS3PreCjvB7iNWZeXtdb927Dbyyeu32UjzFeWw",
  "key32": "2zby5q4m7B2hkFNaerVsy9bF7zuLX15izh6UUHv9RxAMTKzzxuucrNw97xLVUwCG3cGemA95NMivPZeArKdVcpFj",
  "key33": "35ooddsmQDTWfP7fAZSZQ969ZEQ6cJVmNs2ohdgQPfSpj3pXUobxF234HHoFPMBsfN6YFYe7k2LLFp16L7YDu9qm",
  "key34": "7hFyNyAafpuLmqkKb4QzrZypPCXx5sHzjZP6pjKgiyHLpqges54PNGkaPRc1wFBiMh2xVqv1pWavCbar8ADAw8u",
  "key35": "23nPtcxdL8LPHehMecHqyJswywFfUzopSkQb4AQmz2fck2GK6bynnYBbf8TCqSXCro3YD8AK7DGGbahxaEHsmSCU",
  "key36": "64xp5jeu94JMSSgBLTXdGJfYpK3KEAAEoJfYpiFvTvLSJeoQfDyBK3uE8Q6YPmm3rerFSUwb4kRtCR19RR3mLnTK",
  "key37": "4n965uwuzphrhwNnaRAJddN1npTbtQ5ctLY29nxmoUBBJ4U1dyEdPftJhXg7VFBm559QCLQWnw5q54XQmSyeoQxq",
  "key38": "4MSiiE2v7hxunUP6SLvn9NHwTMKEhZNuiTvjnd46iAKcH9c2DbsbPinaUdYqWu7wjGorehh7gSqQjq4536ahThyq",
  "key39": "4j7sVFwvrpCFapbbSBuyhtsAXurKXB3H3Ad3Ehw8UhKWyRxG63fnz5DJadv3MAYd3GAMswQesUXgE3Wef1UBdEi8"
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
