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
    "2P1iNmEBo3jqF4BgihpUcaD4evqy7U7EmhRZZPSoo78CWP1G11SiPZCibtMYu5UBZrT6zRyMag3fNMiHAQaBRfGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MyjE9YoCKfAcE4Po2BhZpf5K9oRRUhgxYJUQMJZj5QERurNZ2Lznk8W2sd5y1abz12WaqTuVoFi2KPrfE6J2fjr",
  "key1": "SDmNqhAauu2iPLnqVNH4ouBjmU7WUnL2M2Q39DUnw6KmtNxfNs2MoepYTf2AkkGznEQgwL6mfdT2LbwqtYtSx7H",
  "key2": "4BVRWXMpEiBfJqZiAqA8gysA2DoyBp6S14RnBVd2axcNGWZU6jccq2Bovmy7XKCRmTrZXcRBfdnQbw7jSMNaHAL",
  "key3": "YpbCN8vhUXvYsh5e7ztMUdkeqYd9uPk3UpBY7U8fw46NN6DFM74CJfd3Nn4GP9enR55dbZPREyHHRHpgRCSJZX5",
  "key4": "5NHP4bL8VJpARir8BhpaPndCwKWnMsMye8itdmRXwZguEJe4JPFhfxiXUa7E8RorovTRzQoMV4bNJttLZEtqJvsK",
  "key5": "SHsPta9kw7N5H8H9KkTteU3CwyKNA8tVVr2nATMyFPfsE6d5HZGBoEfbTyoiKkHYg1m6aEGa7qLubaz4cJbHfWm",
  "key6": "46E9XEpgonRuU8Kxm27yadf81KLcpSyzyNz8ApkRJbWMUVcmX3rYNhEwhHdzz9WiW5n2rijenqMcW75RuVpV6c4b",
  "key7": "aHnzgQvfNpMLq9oZoFeLFpkA448kDjM8KUGeLLzQLcxpXTUqAogKug8Y9AmgZrD4JnvSYMdbV3oUWWws9ynj9SG",
  "key8": "3QHoxmfZtf1vHnGDt5o13SKEFpTKV9akV6tXkayAMUcyUep3dMyJhtjcoefFuLrSkzJWhgYf5NHnqFMysn8rTb5S",
  "key9": "33Tzmi4UJxyzkNMVXBMdy9PzJ4P9MZ6eE4rLALXMA1Ea2pYJUfco8eQGAPjAkYduK9bAWKSxu2aeqVWe96VaGk8T",
  "key10": "cVDG5uYavKH5jziD7fmtw5xrQWUfevGU56Ry4W4tUDqdKK7jPkj31YmEqWrbcxnSTiBigfR367sQL23dDQB1zn8",
  "key11": "2yDLvDkzR2kjCfJaej3LRYgiZnbQ5QUvHHPTs8BRPAb8LZ6uGofPBVje1m1wPJVpSakN4Tn89ByPrzQ2ciY6QDgQ",
  "key12": "5tfZpFE1QXjgKGttjf7JVwtMiyiJESAZkk9qnDJYMHq7pQy9FpqNi2YfBu3uuyBy4vkkBiYzTZCmGFx1V553nnhH",
  "key13": "2j2R8a23nRUfcbtSnLAsswFDTbjg8UHHcx9PmMZUvhHLCVvE9GwPwDPybzbe2aKyEzZp8hWSAojjpfQH5Lqxitb2",
  "key14": "4Q8rG6RsUNXXsMBmGdg8TuuA75K5cmqr4QCiWoGayKWwvHE3iCFrZkKRWQMJZaRuox2x7uQ3x7GCrqzedEydfw7D",
  "key15": "4pTFvzx9kCqzQq4YnGxscrVeLcaDJKhJMRVxytF99wWqhndHZXve33DSd7fJ9HbK1wRZhzB2PhBvbBftdCrTWcF1",
  "key16": "27Svm5acVnKq99ftNg7qLXULthREfaXELV4XLgyGzNxTo4wBGmUUWepmvyzArj5m8J7QrJutA7KNzr5Kqcy7oaCd",
  "key17": "3TkuS3iBi8ZZ6yxABNcjCHFaCN7a6SX8Qi8GaHs54NYgEWLv9gtQmsKkByDZVfPnoQp4fT72wHZnuFZKzrfHDvrQ",
  "key18": "4f9YZkNLQK5pbHpQELej8MKjcRL1rVkTeHA4zF2at5f5KW7UJ9kvuz8DkFWCRPULvWBZ27vCSDkkXi5aU7VQ9aRV",
  "key19": "2djRLchWuvCdin1iohZZYPDaqD4fd8WUsRCQKPkchrJepfvWBXUpExL4EVWG967nS1tZ5HWjTmrnYDfesxD88L6n",
  "key20": "3szDbMw5kG2Pr4Htrha9QL7FtGHDy87QDiLf1c2QFCgtNvqZdoZQRub8WybVnLa3jY2QEhqod7ykpA2oJck9iW1B",
  "key21": "4CLTSEKpgZhfsSt95XQK8hCvFvxjDuAnoX9donfBdLUML7Cp1C1KUcm8kVDDiQQ42S47snPavfSABRCNPu19W96A",
  "key22": "51CaTF67oasHwTzmBkFwkZ5SfYUt64urowUGh986YhVnrAqTzvmDT9gt2xWGFNM7FvwJkoPYXwvfQ8Z64tW5QmeU",
  "key23": "4s6S1MiVkZiTE5gHjbNjz1eYf7bG5cq7KUA8NqJi2ahg1EtTfFTpU7zgUFpe6hTmbwvP6rYbBdiNyFsBYzttyb92",
  "key24": "246xFY6SKB55q3NqeJfMCAjapFB8PqDWKoMrnwcwm3QBY51rBZcU8gN68Ud5XFrFDFofwUfjh8qDoK3ic4LKqiT7",
  "key25": "29TPiAV4oZmPqE1mNH9c9VVXXmaHpkWyyZz6tCZ2kCxSq61aRf8LjAkWxUQpt4VBK2yNLaJcVeiDD9pcmDusa5Se",
  "key26": "4ZqEyZyVKiACnZ1HfoKAtHzNStdkXjsyC2kcCTCjChPX7Hc1298LrmUHMpwrSVntkbobcAXNVfceqqThdFbJojWZ",
  "key27": "2aNNhH15m8d26LKvz5QsDccEminqbQyf7mqsK5Aoa3GJMxwuw3A5QziGgqEy3ynEU5TAEAnPMeX5P6QnuWSCRdsf",
  "key28": "4Kb8NtEbrLL8SgQ9MMPhwzp1ixbMzHY4vJyZbkfA7bxopRS1eb6tcLCWywauprNcs4btTKhNf3pbi55V1RAYshij",
  "key29": "5YNFwhtVqRP7znD1fyEvidX8BRMcVPY2Mg8ynBj8f1XnuXVnjkvq3HwvAbZk4tQ8sDJytqJcUDUZqBwCxDib1Svm",
  "key30": "4s7RLMF1oFRyHcqnWW8qHXn9VwRhuCjjFJTX4e9v6ethoVC5SPeRrcsnjCN6Xvj9GFMHXxqrhVE8SCAHr5aNgWR4",
  "key31": "5NY92yhxzJa6zVHBfsJPeLt7chjtJeN6puuT5q3rCtDaQ8AdDzQu4N3CRJdUY3fGJhJaDEKjfeZBLCo3UHyRyRFp",
  "key32": "5mwCDXHFmqzApfhFTQF5kscqMaPJRUwFRahSRpTSz2xZhTs2hnvcRuJACEGxHhoDqvQDGQKRCTuQdDsHD9nijRm3",
  "key33": "3DHjZN5W1RsujM439nRMYLHEBsTxSsszUyW8VWf3L3ZYqjgNkqCutR3LzKJ4WtiVRSor6ozsVsnnTR1KJA7w9X1i",
  "key34": "3YoejoY3mKszqUWBJ5Fcjvp5AcCqyWn5TwRqV2NXdFeoxYosZ6AqXiPbqddgActW8py6tVUKfSVLu2qvYMyXT32z",
  "key35": "4ErLxYekRbK8qp3BUjZftote9G6ysXhjZkNL25ZSTjp6XwTB7BLSLKNHLiygMRPud8t2tZn8djxC2qJxSg5xkbGL",
  "key36": "57brteQTeSpbGcNPKPaTfedXZaA3t4eNwsyCDhAiZUkpAPoqutv1Fe9TpZV1pGX8pgUFWGUWbhNwfK8Z963qAaHr"
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
