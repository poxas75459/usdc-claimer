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
    "3Hd33Afxdgxa37d48uPrg5hHTX5c2fpdQNaQWceK8a4sUFZz1dhEKi89V1gy3vNFH3eh3ky4pVLd62qPnesanYMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vwH8rgwGn7uSHwpAJ3jJsd4U43fdunRdTit7SrzKaLcqjepXE9oFYuXH32temLTzomwzxp95Qp9f8Py8YKKAhHu",
  "key1": "2s5yGN2m4U6EfGKKFtgKBwAbkSAE5Zvtn5kZBcP1pnHZUvtZbAFPh6fhNJhCJ3zTqDUzJFAbdKaRpXHSuqQZ3yci",
  "key2": "3idnFSBAWUpjzpY8QaefXkW8irD6stBdAvq3RobSYShN6M4nGxJ5kURq1GJFhoVz9YviF9tYVfTrLPaMnPokBoZh",
  "key3": "K3CiR2KPYGKVX8iE5Gge2jCUmJrYSby8wRDNDqfymB3uuSNuyjxBBTvdiL6ET48c8xj4xreNCAvRxKNWUYmHivp",
  "key4": "3ne8LWYZdw9LvEeQNYnUr1AK4rGxiauuYZPuyM7F58nyg7fq4x6yNf3sCAEicimZBfJJTDHXYnf7WZmixzBxLLsR",
  "key5": "YjaPR1Ci8P46LMwkfkdNMJGKpMRXDr6vDaa6mGeQiKs5r2sGvn98BLG9bwytaS2XLbds1wsWYVcrZaJfwpBufnW",
  "key6": "5qwRAFLeh32z1Qo4vgqeLAAnnhmkAZgQjYPnnYZe7D7EWpwjy8SK5PuXRvxixVrV3aWez76jPnAGUf4cJ8p36DBQ",
  "key7": "2moCRzjymL3pWVSEJuhhMFvmBJGQjbR1jx6HKcMXB32LCnscBora7tmT5ZbecZjA6HYRNFgUX5Vv7kZn7NqzsZ7L",
  "key8": "5DShu8LxSohRRQiFqNigHa4Cspfrq7vfb2UC1BChB6WjY6Uif3Kt7cB3NpidWedKjbAySKWQNXN6C5W6i4Y59jMe",
  "key9": "3vRtRWSBELSive87pgR1oZmHuEmUC68JQPb18yQnePnbrLPBNJDtz8SxsL9yW5CzgfP2wsbznfdTfkrFkQpwmLxS",
  "key10": "5zzbdkjJWysGkHzgK7yQWEPHQLcd7vd9wdbhQ7sL9xJkZkvTHxFed6EEGZmY1bBPH2aDGFiewLz67f6cXFN4GQ6R",
  "key11": "Jto8KhJ6MrgkFTkdFwEMRPBtY8uW1EiMctiZiScdYGBra1BFAJtps4BD4skmaKRhZKZnc7WL3HRmp2kdLxd9uvJ",
  "key12": "3cpNefQkHgWfNwBnnjkmjCWwfRdfbb1CZRAz1yUTvFEK42NND4W4tZ1gmKJJ8PPo2YAEeQpkPhfzRDyQ1aCs9tAA",
  "key13": "3fHTxUTQ5Ru7EmD86nztXRnWEnRn1yYHphQwWodA2HDS1oYtit6JGfekBujYpp82jdvcyuPSHunjEAymMD8nVZFY",
  "key14": "4iBwW1MQr3cK3TSjcbcb95SZn2iz8fjbqzwL89Pjo7HhtEEtP2ct43CmXYVZekpUEpUchLPogZ6DhWk27gPyhnUu",
  "key15": "41dWz2HczJF1hmfbDTX3hB9hKe7t4TrE8owcMLJtPVusH2k4F5jsVtwVYAuRDZirksB6nLCdQSyc6NDShsum59uG",
  "key16": "2ZqQoG3uctrSbK5x2tQs9X8r12G2oVhE1Qzah9Cn3uvdHjWvYdg4UYym7zYrHHWfPRV8LRTVCEMi4JsdXc5fV5yZ",
  "key17": "2ZbUyZdoWKkJSDdGHhB71RPPUTBQ2dbPvuVnqXGJRs3fwnWYqhVpsQGg2JLw3JnRdYmfkoxvPntSj4f1dy9q255F",
  "key18": "Q7GWQvEwbQQ2mpH2KeS8ypyGt2dXmB9B981Z3mLYbkptHCmNBNpZecgi3AYm6NUHrn74jgA7vbFJcH3mioCHxMh",
  "key19": "ANd9riFXFxB3gEFR8D2oVwBzy4GExmJ3ZuNaumJReBnD1yBwV6eh6uNrHsAhYyqcEsnwdtMDEJLd8SeFhFm84uG",
  "key20": "5pQxjv3Bq8RBA292CuViuw9wks3ktpUXVbzqb5WDjo93yd9baFtZZWVMgiDXm532FBmrXY7eoKCZ37bovL6hyNXm",
  "key21": "4N11h6HJoNi3gqQtj3k5RMcte8ovf7yWUZMeLnRgCjCkqXRm89qzrZEj8SALA5c3CrXKHtBBD1jjbwghASzYtiGa",
  "key22": "46vPzy6wVozqhrWZTTaWw1AnraYGiTAEuUxVnm252NCxKk4nL4bwECoZtXWzd3VAn3R4NWpqPHjjhYQNCoXq7JQX",
  "key23": "513KyAQ9HWAqqWZ9iy6rzvC783SWnJyr1GErEtsMKaNdon8Exh2FzyttXX1canHaa7f76G8y5PWCdeV7CmBBB3G4",
  "key24": "4HVcxGuyDBpmTaczWKWUmCV8VqQHrrNiu6Lzkb8cuZaGqMDPF51QSVmBpTjWu6Cdb3U24pj5Kdh7CBPUPJhfW9Te",
  "key25": "5RevAid9ynfMAomFLnso7gG97cfPmxbF73AzTCNJofSVjyY2fZZdrizPaM1fvK93RfUvibwbvZDY5nYbgCe3cbhY",
  "key26": "yRNBpNWDFWbFTTakaSSXdnwNCkmLSqf1UqiQfBXocrj6jrPJaLmNFEZ5g2CqTUAhhdL1TsmbLJ9CE6o7aMftVHS",
  "key27": "3C5QsRKb1uYSinopQjjuN2KhhMSvUfXAbbqyBKH2ogQBN9WWMgevvY4DKN5GxFtdf8Qp1qxbVFqAaV4ZPvmyyDbu",
  "key28": "2zL4d3WHfRqRJEgM8MEr8ATZgSbYaVWJo3zrhauXyXYfM1pcof1CiNuVqDxD3AHAevjhZEAuqKnHYqLibtf7uWnj",
  "key29": "5GJNRAbm9A8ZnkCTX77K13mzLxGoy8hZ6XG64FTmPhHwHQHg2faCQ8gwc5keX5XXqhq49MJQWPSUq9EoN9YVMuiW",
  "key30": "pg4Rg7gZF21TCw5gujS5HAJ174EYgM6tWpKaznhQRR8Fp84wRxGbr4ng9rPMC3w5RCfjg5HwVBW4vaofM2YFDhC",
  "key31": "321ZKQCYG1r31A6Vtjm33YYwYGkxvzCpLPfQc6ZGBfXqYupp8bbRFNUsQQDaZB6LvuHFw1BzT4BdyPDjVYvim6YH",
  "key32": "c6vtuWLkwbX9PZBpCKcg7Do3Tk1kGqDP6xo3uWFcPAHqHzqvyBNAKmBMhrpExHPhRK2GvDbosh3p176v1jdgRGb",
  "key33": "3dgv8xauTAqhbLKm4Zn1XSRwvbvKcRLgTVyfuuNQikS2kzdi3eyrE2rKnM5ZgZ4QyAKirJZwrGmAXDgPQnDg6EBV",
  "key34": "5hebqQuetmufbSpX5beAZot2c7YVUw3Jc3RN4gxofg7CVzDMDimpKvd5wQwefE96UKkhU6oC3mVQ8ryHvNbjkDcf",
  "key35": "5YYAVoRB9MG1KBp93QK15uqdep8nhoZtUzpg6BkqDnvFGanRf2VfHc9Y3sdUkUeFxpLiX6p55giaKFHa1ndhmrjr",
  "key36": "2SnMgRbBWaBfEcm9o9TPN74bCXnxpcyABA8VvMyf6CyGg8PWtDdqDX5uQ9uJp5MwGguzMRnG8Tm8s7jquVo9a7pM",
  "key37": "5rjmoxh3t2ee9P3srrB7MVVXTwUNTYjv7WySaEbUPqFQnXxiSFAXLMvL9s7v991Z18PwhYarQXpAy4KiBsxcv7ND",
  "key38": "4wC7XjUp34gSp3YdSiovUZnuX466TTWFTFAF6MeQqMb4jYvaeMxgXMbSCFHZqc9aR5h7TZhuWWi92wGS9AQdoc7i"
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
