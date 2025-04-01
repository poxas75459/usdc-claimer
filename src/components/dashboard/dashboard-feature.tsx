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
    "4h1raQU29X6pi7N4b44HWGdPYjc1naSGZhk12Vs5orS1Adacd8jFgamWeqgrDY8LnigPhorpyswxC7pu6y1MXXsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37YHTNCJgbsuwLgVoBMB1JayBPcbbBYaF7TsrZkxigcYwbsyNbgdKtGKDMqJx4BK7hAivPekLJfMqqCQLhFJr4ZP",
  "key1": "3rmoprUy97Wy4D8vbL2dmkchxWLHUBnFHyk6CYs6LZEHjFyYBr3hbp3BSywBSP5yXw6hd8cMUwUXjfUcC8z4batR",
  "key2": "2SWc7M4FPg4RUGU4AZGYhN7ZSrQj4BVUXbtnqREodvAwZQknddXcLrXWfekHQAMSTDNfopC9yTrH6ocAPD49FxUD",
  "key3": "h7XHcJri5xE17tFM4ZfNmRTPm6PPR2rPWq5KiX1QFVQ7eeFhRA8ufFX8e19HqVdcjRRB422Pd61bYDfz1QHmSNb",
  "key4": "2weqYrFmPKCtGBnMLAw5jg3zAyvoDav5wxCNjo6pZiNS9VFfmvbm8rCpNKXuLeBhxc8DWbjpZn47Bn7SHZzD86Qy",
  "key5": "EmFDToeNfBZrhrW2eduHPYvajhH8ZV5dtC1UALo3EJbVz3gcgt2eiiCoo1P3DVysgdroohQsJsiqrjAkg2QDCPv",
  "key6": "3yxNeGy3TeHU3AsLFRPerfAvTZhexbxfutM3Mngt7si5BAYTgK4U7uVw99ueh1jWdweUzqrsx6W9MCr6p89pQVVP",
  "key7": "2M42Vb68aNHuXjfJcQHtU1niLb28XtqnNurWrm5jBceFGG88iqE13WbTWe7j9ugha5YCbz6Ecv3hD112QU2cwsAS",
  "key8": "5UHYwq1jB5Jw579UDzpfkRzfGizNKNi3GXTVEHYnhkg93NgqEZ4cLhMdv6LSC4bMw3Mf9wyZ4f7TVoHfuXFofKiP",
  "key9": "MFwCmLYYX8Up1DTQtn7Vkk1NsPDzqtq7RH4cs3Jx8FHddKoHCS54F9Vax8n3gGF6A43puhKfS79JiY9NxDNucwd",
  "key10": "4aXiKc7C1sQSFaHTxwjw9LFxm5V1kdVJ8uwfDiLbfXEYFrhzMDHR2YWvq3BaUxspe72zeQaRWUjS5GGxNkySKFNX",
  "key11": "4o4L19wCh6sLkauCVqtWFnAqJxjcPANE3b5zc6rtpJHsjmqn4mHGjEF5v11JbfW2MWnCXXLnJnQkgwHKQ81J5puo",
  "key12": "2NSSbne9oaggvromYSAfEeYmaG3d5p9YUvXu1PMt5rifTcosExuEdKXwzmViNxRaBgnW3Luyy1jVTwpUmqqMkb2Z",
  "key13": "5aA7XPJwF4yH7gTMbMaNozZjWk4gaXpzziGmNMvLwEfitZai9MNo5wycgW9dWqJr3MYMW44qA9fMB7bfwGk434sg",
  "key14": "28mzGf56cmJAtxbzZVDrNz6S3kMLjjk2Rj6o554byUSVegFacrwxhEoCVtQBpJh8Em3uMzrPQkhPzxLNyAeHmLZ1",
  "key15": "3Yweaux4pzMXXToTEwo6uNkvXzbwAYKGRqT2Pvw7xNSL4aK6zfEVfdVHcggoExuppjB52jTt6Sw7XdWMEyWtkPjp",
  "key16": "5ECrCEUw3mV16Z34J2h6NfzqCKYczKnk2ZQUjMQvcm1e8oadqGmsAWs41C1MmieCbozdLmBXFFCBt8ohGY3iYuvu",
  "key17": "4vLHRa5iiGrxUT6TrQcGXWhLHMkyvTM3Am4DEPGGi1CHrpV9XhKEP7qDpU22aZxPobw4YYeYGRRM4Cpb3ZbwGMSA",
  "key18": "3nxPWtFX4yM9ygZMe7dKC3Qtdw9nw78u5DXcXWAQvQtk4Ak62BCku4JC5AUe6Dmgdv9BAjhSPvvap5SHkVL4N1J6",
  "key19": "3bn3S6BRKKE15kbgpCwn3vbKbjgTC5vD5Dj4qj3cHiVNp4HkTX4toiuZjX8euZr5kbVgsp9mpBqDrJQuUijRUguy",
  "key20": "3AHW5N2YV3LJMTZr7xJ4i4RUCwi2LRTeZZvoSebjaVqKrVZMUYkPupTK2ZVQQfrv6kfBErZpp6bpojD9dTH7Fhz3",
  "key21": "449hEZwFA5sukfu7XkYzkcHPCRVYZrNh9DEN8N76fmrWSu3B9ZxfsKUtPpvWjvrab3i481J6ne7m67gwPpv86z5H",
  "key22": "62dUXf2hbNpsdkK17TWoNDMmnK4wSDoiKvggof36R7icpiRFCbhhpXy4hXKBRYw8xiiabKSazjFnPHUCe2HYkERR",
  "key23": "2n1tr9bhhgVvQERQ3ADQZVMeXC8cNQibASoK1LtB5Km481aWLnmJtZVWy9VMraWMojKPShUwndjkxiqRVmECswet",
  "key24": "29q17iYfEpHwZpZWvB14ohpYNKSdBmSv9jp4vWj54ocACu5dT2B6mnGNY6zjWs3gaN9EW1sxzvuKL7Aaq1xntFGR",
  "key25": "4wRoDcN5gBVrnkXQfRv4uKHg5616mNzhjyPFEAVAJ1QBKcdizZWYLjVofMe9qVPBHE7ruAie2UXgpNKPBSbjB59u",
  "key26": "5H9D7dmEA9yvBzew7J3pGEZHKSKupzbfcUmnVzTERx1Y9WK1gXEMTHfs4tZ9Sgr2FKkCQ54AvkwRetSmcbqCzty1",
  "key27": "3EN5ZpqtUfTaZuDKB78imdJELAJBwzQQT3grvDp4j9pHnfMb8rX6BAFFdgCn4evppbzy6bCG1763Znxhfm8egQNS",
  "key28": "2JD5X4ErmFiwp9K1NgQveXR6RzbBztoPDrEChZZMzrJrbmjzLoPxVzbgqMfYLmXjCawVjJE297xGs2PqGQxyWbky",
  "key29": "2Fq7hMFfzc7wPhgy41x1gcMj8eRRJspZF3cdfmhxyqwj78fqV5yPwn519QePLXD9NhED8ueJopJjn9cf1Ve935VR",
  "key30": "5bBP8AHb7QKW1DhM9LcsH6NUYqdkd7zNf2ksjAYhBgxqnRyBvMLPhHQkRQAfP2r72keZvXEC934jGBdLooWG58po",
  "key31": "2sWN4K2ijZZuYodAwtXPJgP4HauTGxTBEMzMm7fwi4Cu2wqcwcHvnEmxJXzxkLFKXwgzV11gzPiUXf1QnfZvmrpE",
  "key32": "44gjEDWos3dwfyxTtapzSwsStA8GQMQkBESqvCHQQkCLtYVB6UjnWDuTRoqWDUC78EuqfrF2ehMEMDpLNLjNgpvg",
  "key33": "3jiSFC59eu9n8NNHsCjdq8wkC9AucExkzccCStGGG3MMwBPz3aXETGkpnkNJvSwLfQfNhR68bk3vtURdSe5PwLbk",
  "key34": "4xNLvrD6tXa64dr4KsLExjd2KRSvNzMchiPk9HCbj885xQTm6aHfFCNWvGePp4DPSdMrDeiLdo3BQhgNQpVWPQku",
  "key35": "4gggr2WkbvDphPj1ZK9EDZ7bNz58ctFsqXKS52sKxWMuA48j7CKfhxcrGZzAMY1rVQpxWdM4nGkKfQxEikaVsgp2",
  "key36": "ZHLc1euaLXw9mHKwJ7vEvYQpxztue3CpooB6xERD2zX99khComoEx3Mb3UrJ8Xmnv15mGE3PLzNceo4innvebfT",
  "key37": "qfhjNY7AxxYVvdjFk1CjgoQhaikHZGY5dhGijRRF5txbfZ8i7S4UMK8dbKPhfg6KsoEAXqFgswVkhD6oQDpSWbb"
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
