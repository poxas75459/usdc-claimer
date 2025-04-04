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
    "4pFAnyKuv2c8y7CMRqHgvcA58ogQaV4X4XVknwqARfBaxq6i3rm1ZhHHPTUH2uPgq2DvnQzoKrFtmKX6Kq2D6USD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZXHaFkJcr5rFQrybqaS3VS7XDDEDRLvb3qPT3duY8WD4N7TtDXmca5m1K7B7tbbVSMbz9b4Y4SJygJn7XfkoGUe",
  "key1": "5hnVuzoTziVDHffSwWbsBz1cExkiFCw7nyu3WS646G9onWh2Z7oNbSKgSKjBZm8RJA7qxTgx73PqCiPF91ajBc1X",
  "key2": "3Z6MPMyQ1HNNxMrjtf7nEXSkFEDsx2Fqy85p2e1j8sgEuKbUA5DtRfv92PtTK8XDikCTLZdWq5bfqCjjByWc4BtW",
  "key3": "569HHfmNpeKbvEEo7Ma5iLmH3eyfXQJbSkCSejYT18asTxfsk74dLMWKvwoUzuZkfVnY4xCmvLwnUxndtjtyPTbt",
  "key4": "hjeBPHJY9Sbxpg21EcbLA35dXvvNBGM17UFwWCQj9xigmxfXr26rz1gyfNR616L9DrLU3r72Tm31SDF5hszmb1Z",
  "key5": "5675t6MKhv5QfYx9VMGXQYuDZ4ohBr3Pa7yhMBvpDQp9fN7EUzEUWuvUFP5uDNb8DVC3ZZVcYgF5hhudxDpAuAq1",
  "key6": "4pF2cwVqgkiT4zDFvpzEL9oncsMk2Q2SrwJp7dzkkEyXTeEzwPJnWEWH91XjxncZqzWsa4TKCmjjUQ47osdepudC",
  "key7": "4474prRp94cFxyKWijY5v3qeg52pxkn1SFYtwVk2t34mZkGDKM2gatkBbQoqZVuLBJakx2WRRHBZ4y85n6A2ypqX",
  "key8": "2x499zshoXfZ7t7JQuH9CJ6GxxigX6HFweVcyP6FVMfGQdntgrQajVyf6td6Nka1vbeyKE6PpDfa2WodQH9ENL1P",
  "key9": "LTmdihTvWTcSwJMdMbNaqxaBQFQ8Q1p8vHXfzAwQVHozQiGyENSyMVP2b3fgVR8j82qaGP6syweTsAY5Qzr7Kaq",
  "key10": "4MWqw2fqAeMfxKNifCjxj74svALymsE5dvb5VjJuuCSJehYwDa6BuN2P54xsgK9QTWM866bunTwmYSJp38vHv1nB",
  "key11": "5UV2bPuaH6UL9gDT2bwfg57EScMdFwVYxDsPG9TfBgCQAhjEw7wUhZHgcbrUvu5DVauy5yXdzWtwcDKChV1mZH1A",
  "key12": "44mT9eGDB9ne62rGB9QZ7bc3yriW2M7W9xx8GVWrfeWpB8eDHMQLXZWHi1cMQMuidTShTqaTLPezJau1Q2AiUs6Z",
  "key13": "2o9nyphqTbfKZ3uoJAsriJsMdQYHgZjFcMFsz73vC9twT5Kbee6YuAXT9VhbL9CwSEGDRduUwxjk2gcLxvMMmwWC",
  "key14": "59zJCxwywjwx653W6S7EPAseWDAcqZsMRTuw1N6PGuQXxcxL19dTZvvCRg9ctdyCfsxM6yBEYBmrDsSGpyb3oMYv",
  "key15": "RCMaH6CrQA8MDPTGsZwBrpuEYtaai3ZFkVEHdytpmGVT8vRpALnScxp6N9v3jTRGkjwJjvXKYS5fmTEW9PLB6rr",
  "key16": "5DzdN6JpYeeiz9NJCUWdfHLNMipqvvq5zqf4GKodTAix43DswD9urWZhaZqXj85nY5CZQsEBXBUmkvnbC1XU7oWV",
  "key17": "2KbWrXNmF4troWvnZ9gE3SUYTKqmZomd1cp8rawuDcyy3KeUVZgkXYxiT5uQSaY4adEGXJjp9B8kPew9rMS3jKk2",
  "key18": "4oc3AAtmjG6SkVbYs9Zb7AzVjww1QFN6nmCfFp9LfB5upETthukN8N19Lm5jmVRjpKxiR3NrwoY4nmgDt6iC2cj9",
  "key19": "283vwFCKkhf87wUjTYe3neaBRLM7FFwSqTPCAoJY4sQfNyPAM5Lx7kKmjvdTMSWYDDKrMeiakxwgh9MzzqnyqAWk",
  "key20": "cF512fXEG5qKfu6FJgB5Y2DMkjNNdaKXtT9vMdfmQnhDavWPjrhXneChk3gDxgtb1RQRUrRjTnhBcbMzDZwzc8t",
  "key21": "28SuNwivDBhnWoSjE199bvcEtwkeXzuKYyhWjnW8AQniSmvNRYKLXBpUV48a4Ame8K5BNHPDLKycaM4yb9tjLQQz",
  "key22": "5NppHiWSz2SWw74KXVan2GowLjDJA1GEpVGeKC8o8QzGRzVcMt5XSzQ2CYefRzpFZPCcqZehMLgkf5pJeP99SWDG",
  "key23": "3t7UJ3igvazEYoUMUhRBChpzG4rCQdtEtqJefhoLTnZuwGFEp2qAgAskiFEvfekKMvKXbsQiLi4K6MnLboECKkAD",
  "key24": "3yzxrTB8iU7h1WdkvYnYhZbXmVNj8cW3Y8TmNG8gVQYvwwRxmtHezPRshA1JNrjWhPBi2TFCXANHA5hSXtmTVDLr",
  "key25": "5zVC7ogHnHz22ytmagAzBtFwzwiYC6Q7VQu7A1vAAdU8wbAwpL79Aj311HqBsWkhptsiPbATdAtHRso1SHMsLMST",
  "key26": "45ZqGSLsgm2S7MVS7XrT7mrmUmFYvcLpJACt3uray1e1zz3Cj3a9ZvTgFd7DYxB7Ae5E83Vd6m41Ys4ZeZg9zwR5",
  "key27": "3jk4mSawEsrbWXgxpfEz136aFUrxub3KK4YthWWMEerF22mmsiQQR4TPAtKKVZ4hkuLwA7SY5E78adZw4t8bfxj2",
  "key28": "49bZT8WREAnqGf9shu87vt6oeRAvVjAbsCZJXfQmKQMG5855dABF5pkKx8RyUAMgYG9DAg11Jdvad8dCiQzTKhrA",
  "key29": "4kC5Leq5S7Zno3SQg1wc2RHTNQneYCJ2c4zo25xCY9RjcuYJnTkwJH2LeYHSeCpq8YghkwpisbqukNA8LNDYzDSD",
  "key30": "5vxfRgFAKck4H8bKDdZENNnzpaiqUuE2rk2bKU8io6TFeVhsbBc38DGH9Ex3hkbCCFtGgKUSmNBZNoecgwncGrG5",
  "key31": "3uk2A5hQvcs5bv3vwtG79mLHJ1wgNGj1gDcdvAJfVsadyzU4892K4CGAPv15Fy3T3VaZxPPqiML6uUtdHX21nCup",
  "key32": "5vrwfGXswQRNfzwBhQuvdiqNWcCEZ6tyFKYbj88hTZ16UwZi864a4xgieXy8DuMxnr3z1X5Vkv1dCeDE13gXHBgM",
  "key33": "7kX3ZRNPLSpN35LnjUKdpX8TwRc3FZoWLWkstM9LD7NcUKhKtC43UdXduqfLSqPpyi1uiFJjdWQtpQHnPyypg1E",
  "key34": "B3exz8u4VQoBtzS4Laz6yNMnshFui161nSKCR7JsZkmhi74SyqLkmmpVnu41Jdmz17kpp4nfeQYmvyPoqvsqth3",
  "key35": "3wdf1kifZj5xynv4Yy1x339omdY75F5pbkrf8VRTrdiUXNezGZaXHwteptyzuDtxJPPH5fYEeQA4krtbuwprxxBn",
  "key36": "3MwvQTgFm91ZJtQNXVTHJUAYBSVjtghuKjQm4J5FQHAYpfbu5eUy5s5BNHi3fLzZUS8ymTqZ2YhCS6XBrU66mutD",
  "key37": "4v2jwj9S5NWQ8P9oXvnG5zSC7ejyCu8grM7cNa2Ks4yMGMff9uHsGKsnW5Hwbb1JoZcgRkM4zntPDfVgfjUaP7cE",
  "key38": "2tgS8ngc3iqHWdJmYWGBUcHM8S9RYLLcGGbQdJrBoDibLhAqW439DnVvcWhCw7BrkDdQ65ASE4Fu7e5hXgVRdE43",
  "key39": "2X1WP22kfic4yCdhwXKyfMgZqbxJnD8erUjrLHyZH9eUc3oLaHHBhVh9jbRR5MTUvxbEJEyBGyY5UNpXiW2QDTUa",
  "key40": "5J1iqsv6mK2tuzVvCH2ZTehxUd3aFK2iWaWAfWJQnGJLtwigy5rE7K6U6myTWWBURv5cBtu4ZMvhjwsosuVVXmpB",
  "key41": "4U6dG8i9gvb7Jyz5sn5sHS1RnxEExNnidfyhhPAPhm92AAnBDYffbnoZwfGLRW6w88rJ6ECy4KTHGygkkbEa556K",
  "key42": "5QWMEz1xnJKPogXZsAhWR8LqBzmRRAzaNeECTvQZAq61PCdyNwawDemZcEdAnuxfGDNxYePnaYsGC6o9FBWq429n",
  "key43": "3ZWdjEyx4izbBDPfkd6irsQzDJhbtksW7d3zVucvysYenwQL61SEpAdTkDRzFRdyBKJsCpfpvpyZNNqEFS3un5ap",
  "key44": "3AofGHfyuWrYuCAdvQxPa15cf38EHHDxUmQSsYE7kquvKt8GkLhc9e4d4YHpPCMQ5cPvZa8T47ihq1JYCPJPZAmy",
  "key45": "2qdJPsNEvQyQpTukW58QiR4hrwvwQtia1SJ3SR1kJLvfreHFCTBEFqjj4Bk37QGyeVu1ZPoFYmJ8v7xDapRFMxs1"
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
