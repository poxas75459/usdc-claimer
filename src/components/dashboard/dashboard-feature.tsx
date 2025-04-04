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
    "5GMPu3LMu3W2jkDDKVxSXEoAfpVzo398ALiSgyYfWWmmotPzoeKCDDmncioYke2cK5p5ed5WFGx1RDHYzTbQjZoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jREyzTUweX3Z9Ncf92uTU87qjyXYbobvmpwMexngy3KDN9XD8LN9HdCqm1C2qaSTNusqUHDQfSXA5amsm34VKe5",
  "key1": "2FbVS8NLpKLFG3yZkfp4hg8W688qfWvLyC9STh4c6b4heZ4hsqqcMuSsSYgW453i42NKynD4GWooqBSfbJHNhvLG",
  "key2": "39whVVwLncKEh7AH2ojcBDZC2eu9ExERcXiL6Q6v118edCUFL9vZ6Q7btsBxmwnY4ovHWdLhMMDah3zWwvVYHB5Q",
  "key3": "46DpXA5bWZMCDrq7DkBHcs9tRzcYvcZcDfCX6XReZtP63uWs8V4GUsgG5opGyPobFvLGPMLzpDZVBiFuYATHD8qw",
  "key4": "58Jneq1q9gaY6UQhbFR6rh6jKJv3dBHjwWZAvtehhxcAzDsX9NJFG4XCYZUDMDjn8bxCp36jGuFdWP1ox459fTfu",
  "key5": "y2WFwJh4km2GqfiAiFsBZFm9cJ5RyTY6je2yifAan288zsThhH2KuPg7wYNGBwF47bV8iyxmJF4ArWWnDuVj22p",
  "key6": "2TqAMv9uBwi394UPykXH6CEioFffaornGo4krLTkCeVc8ovXDjqmRCQwTEpWREvGUTj7DoK71G3BJ8HBdkXoVt5b",
  "key7": "6E74mFpoYv298FTKj2kHz7YqrHaXRdmVPfXhAXLvnFhXsLQJdtqBRTMvs5ZgMYWK8o585GEgAqG87rL651V7RK5",
  "key8": "4nkrnaBi1rdYri5wGmmmSdrBRyQoeCiDSLUuKj2rjqbDY6f1UdA965VyST6rV4xeYZ7dJRcKaXUYj1xnb7AC4sER",
  "key9": "2FsEVSeuDf1CxPneQxRguLR4MYvvJoWn1ieeTMdtwpq2rqdRtMBPMm46XcFkmnEnnRJ8iM6Q5votZ6QdJMzcxV8x",
  "key10": "3bkPkXHmyK1EA2QD8fjkReT1UodA1oWYApJkCuFfjW2vX4jUWSoAoTmoXGaGeUoVwAvRZGPbLB3e5eYQV9d5u96n",
  "key11": "3FFJvz46Fn3pjFGaVP8wpDb7fTrsgm3wcMFo6D4sQevBPhZMV9MhfiM7gUkvbCkHqoBy7Shb3VcLbLx2gbkEnDca",
  "key12": "Ewc6sTdANSjdXqx9fj3xRG5bDL8kDKS1Jq1Qpej6NYj52ZGBToLBDSybTjcmk2xmtG4oR8kn5XUWkQ8NJqdvDL2",
  "key13": "3WmpQ1NGBdPDZB3k142WyfbTCFCm3hmBhJJcLcg3cvW6CNjdJjcof2mBFKCwrcYsFJC7Vehh5qGCQScLg5tK6vU4",
  "key14": "5ht6S6TeGcJLBv6Ffq9ejj4w2hWzQhyX5WmF7xXsHrs6yhjypjKKSMW81eNX63DCmkEtEpzKeGnWo6ULAu8o6bzw",
  "key15": "3M7tMemAZxLUeyNuPpHPBvbeCqckCthH1pNx9E8Gvoj2S63ki3v6ewzYKkm2EAqmCrCFMJHXyxqY3Gny1sjdYduS",
  "key16": "vccsEYao3YQQXnPT6txaqhD63RkaDJiKsgrxYL6k7uUE1D8tqrLLYdJEaCh8TcDTaT1eYvn6xCFZkwGv2CJ4tjx",
  "key17": "5btkfR9AhHp2CnynZrtgyyJwY3ByhNqrC2iznBosvT3zF1rERkR3DMmoVkMaM9V3sMA7a2a8DcwVV8xMwWxxmPc8",
  "key18": "53jA96upowGFxCmTg5KosHvPsr7ZaUyZf41oEmtxNZgUaHKNvQ6fHNdLHXxo6D23gDVc8h74bNYm1TFb19E7gSd1",
  "key19": "2XKHkWmWLpt2RK8EG8uNCT6nnPmw4VUN7mnaudDmUbLHNJtL7FkZvAd2NhDXMsuR2wo8Wc6yqeMRfrLGAs9Mzg3s",
  "key20": "4NzZ2iMquHHr1NgAQD3Vakzfr4b8DK4fvCvmL7WFfjrtEXHVRFbdh8c994LMVM7tPsab4wNM2FfdsVZg5ysaiReS",
  "key21": "4428MaHkA1iTAZS7NTWbU5prDF77PsrNM3hVe1o3DpCLs5fnH2hA2LsQkmXv7CXJMjsbtf8fX94dpjkxZutfPcLq",
  "key22": "2mvJQ6zwLiSvynLwA6Rkq535p6GAVR75CBKr1DyDKHtuDCMk96d7ieYxci65VSiZExz9Gxu6sT2NdoCwTqzKB3Ko",
  "key23": "2FRmsUBuFJUvmbR4N5dBe2wAbXfpZLsUM5NdL5xF7tCsWwCNtoMy8JVsLwrBFygkwfxSrZUjDBkDmYp5GDTdVRE9",
  "key24": "3wHdCFM59Jh1B6yoMeaejG7az57X7M2Zsayq9AGmPxgCn61Y9UEzy1KCd16t3pKN5EBJ4fPmSNXtK4PmcAQFma8K",
  "key25": "HDCK9nHxJpbaJZKu2qTC3XVVD7JCoKRFngGAZPgeGEU8tNqV8h1BZLUxVyWrci1YbRhdwb7iJbUSBiQxDgDykUN",
  "key26": "5gajcDhW5vCsqLk6HSn8bgQyLT5GfWprYohXCsENWvChAQG8NUWDGoZ9U7tbHNDfW8ZsnCdbytdEAPx3fZsSdKWG",
  "key27": "2R3cnvnyVkzF9K1KAsjAvKnpvRmSUbQq1VuyTBgQbBCF9stpt4tvHw5HfozcSZJ9x9SiEvN89hA5eABCC5DNiZor",
  "key28": "TD5qAcvUBY7ZqaTpu7eWHhfF8jDuHERvgSShzc7JNLNQFC6kqtYfCuWftzwftZe7S9dQEkNvoJzGDsub3uvga7f",
  "key29": "26MLKfqghGewTzSD9Twk1q3xwcwSrnmn8tvuhWBjahhTkiwDUaFAhYQ518GZQ58UfPXSrGyVcNCXUQQa9j4TSNYq",
  "key30": "4z9LCCk3thFviskjBM9R1D68tBgoEc71xY4fzkT1B8xWWdQ8LgCva1T4WF3HS5SDg9kUcgoT1tv4dVBkLD1UCgAD",
  "key31": "3TWioEi5Prb34WKWXt3Ly6KjzvixuB6jdVhVYYRo8nsbZNj9wx7Rrt7Ugiy1PZ8fkhHGS5GU6AfsauS2PtzUbhHE",
  "key32": "5GX3RhhQes8ayfe8xPGSjwTR33eHVqpLh3KLkhxNyxXnAQ4vNu2M3Ej2FBykQZDMf7hPZ17Wkg5NBcBaFpj5Y6nH",
  "key33": "2CS8ficSRT2KMsoU4VCBkims7HVMP7NcQUEfvesDKcAbXRBojyLwYGNB4GVob3jj2BjwQbBG4mH7JoPdQi9i4LCc",
  "key34": "4FFUQujDPNmLZnwxcq4YM3iT284dDZP3fUiugdMnrZXjAMGtMkZ91m5uuXUZbdpZjuuZ6Q2BNf8q7gKPBvWrzStt",
  "key35": "KXcbTGNSDDWHRJD5w63GtcK4vdm8AxtSy9g2gsvRF44hZjdQTjReRkpQcW6NiCBhVkgeihH1oRnqVTuNBTLTG8C",
  "key36": "1XcEXB1LevnH9GCF8doi4FTxvunD7WhHb49jHQEYyoLvqXiEhQHf1AiX2Jdihtsbg8btDmE5aTQhcwzocwZmGRB",
  "key37": "4E4Km7TYXzH5vjFWLocXPsx2VgeesKKa7gmTaiBjb4DNhFGDLPcbyFzkHmDgFvv9EKw9CFXkHBQdknq1DZ9J6JSQ",
  "key38": "3k5SMRTcwt3AYKD6jnDSDBy7c7KA1ahVpBh7vuiy5MBEXrmE17wBPcfZ69ttdNQF1NesCtKuHMedV5kSNaBqRt1b",
  "key39": "5d1cuTYhAb33wwPswxvPLmtkUJfFV58ACbrSKEWTSytNYTRzmadVnUkmzeSBNJJ9RChot16rm4oLp2cAziiM3Yjb",
  "key40": "4sYTFsJXAhjhzyb6W43S1SK5ZVwVhaEaV1b2LFwz65jgHGm4HwyqAtqWuJXvMMxvx2BN9MXXEbGdEwNfcEXffU6u",
  "key41": "c4jHCFjXpqBsg3skejbESPoikGtMfuytLZvK821YyKXNrYDLjUkNQGgK16fcU44VCYsbx3esAD4isMVaHEyEyU4",
  "key42": "3h7vbf26X3bwnnDRvePgHFBJt5E5kqoRsxfsJ5XsmUFJUqV71SauzPKXfL58DEDGVzz4EVKtE7hYzW4XkXAHbnMW",
  "key43": "2McjsbaGo8GaZTvPviVbBt69RfrH2LtcGaYxnXXbC3dHcWRaVaxEjH5hqBnqsZZkYQTSQpnyW9reQqW4jajB8dEZ",
  "key44": "23A39aLHw91iiMHbPDZsHzSPNSdwACGM3P4NbyjifcnUnseY5Yr5YSPSpgSz6a8djgm9KJWzXQvCgbCsjLBjyP8j"
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
