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
    "cjyBX9zBGffkBRcCRQnWYZcmKTQRZQL6FMZkAvZ7hGasHEic8PdZzceN3vDKnEPFj8bgoNPPQwshcYDHvbK1c9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j1dg6xfKwj1q3xZ16NU91ALXndM6y3HQutsUaU3cF5f3FpmazWPJrQu2oGrYT8UuNKFws5kPQxUxGPFWqkb5nH3",
  "key1": "34D4iAhRgAgTerb3FwvpJCdxS54drZkWPv6PqPxkdNU68XMMxZYQAGhaZTksMCRQJ34L5J5vhz26BoQXLWMDcVgF",
  "key2": "5hgM34Usgd6ZPz1BLm7B2G9ecLj5gsJT1N8kLEKQWCKN8FGQ6LdCT3ZyFbyZNpZ4FGYdNqZ5D8eGfLvbHuFz6362",
  "key3": "39ppeSeszVjEx1FfK1HYS2iYJ1uVD2atHqexmt2ekcEvmbqEe3Az8uZTUCJLCf3FGgoa3ukGnU3x43Kijy6Az8hj",
  "key4": "PxaxHcNkJ6q5HzqxcyiZMXRcPzpwztJ3PU5sJU56qz6GTkNTCAwwsp6qWtbG3Rb3tiac8cbAwrSDn7T3p2Ei9pt",
  "key5": "hUPD1KEHPghsQHBFEamY5YMeGAELTJfX6aJDfTaW3j74cRdYk6R45SREaBowUQ1bKyfgfnJb9ohaREdwr8eQ3Fe",
  "key6": "3FuvRj7uw9JcbXbaLrNzKhNK8fEEodbuzbpVV7dXNNut1daVSa2NN45UTne2J4rfUdwJEhfe5JhLFZmPjubFZfKL",
  "key7": "4FL6ymWXoivqbJVQz2cWucmuD4bomZiLe3MDDafZPBC8Gu4N7Yfm66g6bhbhD79fDq2B5eeXQPNzaB4rs68WEauq",
  "key8": "2JTECsv517Lad7a2Sz3bU6rJjezf61SkL65sKmGxmXUn6qxwFeSB7P5QmXGzDz39j8AuarVZH2JLDEkHHs5QaYUn",
  "key9": "EJmykKQcG3umyEwoqzN8kz1FrWQD5sFLv67x75QKhMT7pS8Gp2BiekxfsHFkTDZndcVdY74nUQAsc1cthqcGmfw",
  "key10": "3BCDkW3uYHvz6TqUcDcpqCVBmVHh9A39UAsYujESTiWHTWJxCC1qZzQyhvMGAHic5USMvd1tN3bRBhF1zkKHcGLX",
  "key11": "37MAAGoKG4bYJycdQyZpXNW8XD3m1rwB4ttBQRMTnxANeVje3MBLem9YTNdYpsL92tQA7hm3ovTkPVEqyNeAt1MR",
  "key12": "5D4aLb25HXMaQdMmisA2wk9HF1gkSpGxJJJYFfWdGCSqmXc4XHWTcZ1WjkPvCEKv4o9KGUAhKttMeyE69mLa1h3z",
  "key13": "deguRBqde6ZHg3DfR34SnnhhLts7HnTUA1QvQzKcErM5PZ2dWZgDfHzpSutUErb1A7ZsNJ9VzAqu96mJKhnsakn",
  "key14": "2qYxjdXziTzYuu1xzPX9kuMgGSQXa6hLQUk9A1XMxBdhGzvf14yvcqe6FGHzGiByvjqWJeTBzUJyNpkL9gAA6KMd",
  "key15": "4DpFBSJD3gVXEzZk9cty79VGkeLadosJJMx3zVMJtm1cXL3V9vmqXcWSmGi6PBb7LbXbf9jFuFbSMJjnkgRCeZce",
  "key16": "33RqCdGc2LuVKAAViPNPKJ7sh5utxVuZNomWYcfWLYok6PJLyoAGaEQpDR3V3i3Z3H4fWP6fiD2R2rXavQh68NX3",
  "key17": "4NcqLWWeGosKhvzTQVwmEsjbcFLGFJHufo6h6WwmNoSVbAPkUm7ScRHQ3DNtT29cDbmKDp7EsPZAU4ijdA8Y38bU",
  "key18": "cpJvFUwh23UWMzdNNE21DEMDejAG5MWbLUKNVAJSLr68rPdGzb15uZzE8uGoGH3yNDhzfz2ajRQcG5evtM6C2gb",
  "key19": "59AWEUEDiYceTSekF7WzBPavzKWYPUB2FEgtce5qESS4G8nfkqGQBhxX9tRUeP9d3me25JsJq6KYLtECUsCjsT5K",
  "key20": "3XRSn3VbFWMf5tnigxAHSoD3XzdMNCwXSp3FPqYYKPDiXsFa5B8huF5ndqsotjR1fAUGvDNF9bBHJjzrEQqRUM4R",
  "key21": "42RWBCmGe49yxF1CZiBHbGCPGfrA4zY2p8HMWLQg6u5KUFPRyy2q9pBcUUn9EYRVUDoqh85NRHbSJ9a2faMkJRRu",
  "key22": "4K4EeTg13tv3dGdTmbR2iEYZNHdzPxPSqH2iJPSy9eyN8Us73B3mkj7xH3iY95rwmDMyE7kgHgBS3FMuAjmQ41Ru",
  "key23": "5TRtdovno1aFGd3V1ANfZWJGWBKby41c5aYyKdP6Kp4b5XsehcawktEsGn6kAuxTvzmgrZPjk7antnQn9jRGPEiz",
  "key24": "3pNSgaQukVN9uA8DcLokzYHptL198WvWPMfLUTkBKcyz1ZWsS5DHucPKSFQsotLZYGaNWQPkgedEf76F2MAabht7",
  "key25": "3LVTY3TVGw4Eb6EhSfSNqPQVAuiYxprxgcG94K4f8RPrX939YuLEFFS7FoU2qSrZrWcqiwRXL9gZ9LCqHPxdST3m",
  "key26": "5GEuGZWRBHVoSqPsuPeusbQMpAPnat8u6unRuT1bLvQxs6WygTFZHfsnBXFeYvsvkQy7Tqc5iWeRZWgAVhD1RYht",
  "key27": "2hzcc285Es8PF9Afhzxth18QhWZRm5idVw3ZtNd96jCJdfz8npn5JDQzJA3Yrjhk2vVSbktsYtQCRyJ9HvLdWWfM",
  "key28": "4fKKjcc6mUERDeRfh7BWhm3w211FbM14fe2vogEvW4xi1YFG2iK38XVzmdgyyikUzbmhm6CzkmoZEs8LWLzRDU5b",
  "key29": "55ZBCzVr5RdmkeJwg1hpLcPzFr2ynUSWCg2WjxsEvmuA9xE6FSXPEtsKd5rzJ3Sv9YJPamyxzRimacWiN81qbUmG",
  "key30": "2qc4EEGjv4xvBDoph1u8koEsTiGtQpZC1MayrKCVmon6SMsiMqT1HRAEghr5uVf7HibrPy8s55p3Ros2jK1xXp7E",
  "key31": "nSSjoRYhzarNM2gTb4CMBbeDyphWAaAzPB7VxnLHens2oDkKj26v9MULWf9eXuLELeZStdhXQV45PaADnBd5h7u",
  "key32": "2eXw5DvGv5oWKZQmGnF38AgErKMqcdbVqFNuvZ6ZBPoU76cuvVMkAm5uihWDHTw3EMWvXjJbfSp2M9f7ZccYjWvE",
  "key33": "5PpbXWhbsvLJtsCDfmzKkQkLryXhiEreQ59soQyBE3xrgmw3m3rvLB7bCKM9WaMpXYJSYoLwyUcGgjSY2yE4uW8m",
  "key34": "4rSvs7JY9MYU7tRt8Ka7Gd8jKEePg1T2szr71iXf9scP2bEJSsTiiUQMCmQU5tRemdBh51yHWQVto6U1mzeyGica",
  "key35": "5uEpsgjFXGQifCp1gdZbHiCcNgDb4jWsXw7mWfm91mBVSDz5d8Z8emQbPooiugxQpF4N1sp9tKmZ1diY8XsFXoDC",
  "key36": "4MTFwvbBkHEzJLPHUWTCNSQ8BmaDPsJMQJKtnSM9MRe4oZNgp2MTV5SFuLx9kD7cLqcZJuP4ihQdcyxxT64tX8wD",
  "key37": "5NzsNgruU4zdoQHZ188f5YGt5peZbioizGc8cs45A59sQ727vPnyxd8pirWq55KFBUn2Hx4hnfe3E3Y99GVvzwiK",
  "key38": "3TutmKN3YDUGymLcM133chT71SJvMyXt2trBRPeWT6hRjszznsZh1Lrg9N9dejgWfSon2fuJvoapS3nWJwwRHpyk",
  "key39": "3g63ZeTBT4XpR3qeqNFDuhswCtuPdnoB8AmXwEzTA5UewhwnEVQoM5nMVEUM79yxAV3maLZBHNxSrTJyn1Wi9j3V",
  "key40": "48TQdRqQ1eJJP7S2Cq5vxL85SKXLKWvwAZye3cEXjJs9JbbY6qsVq5DYrj7Bo2SoYryoQdrdxvY2pc95uA8JttPy",
  "key41": "jDSNffK13KeUxS11dTz3fYKijyUyjEt7VTZw6TibAcuVeytGMdNZpiz319b6kGxoztCujMxwybPJEUXotKXzt8G",
  "key42": "592UUx4WoQLsPsNFLQFfRgzzhwc2iUv8Zv11uHunNfSyt1HLxcHrDnTQCcvKKU6Bk76NCM7WRjq74qkhujgvjuac",
  "key43": "4TZabkZCjXRrcToKSFP9rMpRCqwiL5NMiyN2XqdZx9dhHiDBXuBMYwH5GurVnUdtMLRh8rKQoy8CHQtSYGTkpK4Z",
  "key44": "uyd7fFccue8gRUMg5ugnhdW5hzxnM6rVs66napR2AahpWyjNKXYxLBZJDE9Qj7zudNfrcSZAoniKErqVkNVgcNk",
  "key45": "2ZGbEYZ5Jso57XWBy7Ab5ZCS6D1u7qcwfsGcPr2AEaRfd8Pb1iZf9sGxTjdVv5jYNrzVWQfAKn2mjjnKeWu93kX2",
  "key46": "3idBAVbUZ8kEvugkTmmyewjHBT8uRWrBWm7JR6ZoenpcnkdMvFHzGaenTm26NhwjjPQUF6F9a2C3zeYyLvvHtJ6o",
  "key47": "2KR5FLZNR18DwB357SSTVoC6fgzNyPCddsZNnHxcRi6D6t5K2eD2Fhte38SQ3GysXEYQEBhfuiuvqPhcjK7Z357R",
  "key48": "4RkjA5eodR6i9NEJKAqNKeoik6quL8HQhVCk9yGyAF3ipZtS19mfaWDbs9sTHkN6qYCEZ9TDHneuiPe9DsxG3xBd"
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
