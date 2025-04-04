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
    "4g8rNWNKgz48Whtz425AJGsq95nyFoF6Q3MKzkUCUq1KWVvF2GNe1KyCRMum4giuAD7KS6G6B6TDnrGrNk1tHkjR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KumZ9ekiy9SEKV3E8SUxXHEf18XqRCCEqDtMcwJkHEYerXNkEcamyARDcaS9qHNGdwC1pCCwBZSnF9DocsS9pX4",
  "key1": "4stne5DfpqvfMYvTKUt29ZqP2h9L1yNsjHTovPRR9Ejh95wDRUepAgXDMJaCbDqbeFFJjFyyixzWGQ7ibnNzffYj",
  "key2": "62kcAMP1C4rsKpRTPT2uYwhQzVXAkFf8ULYDzcMfyfWZqv6s3qemVqBZs24p9rW67PnNHZbWnTFd1qbDKmB9CHDt",
  "key3": "2SGbBTZ1kVpsAuXLwt2D6Dqs837qVGwpjhpPjLo2rTA2wt4P3mNmQkgqLzNTm5MiaCgYxs3mYKyv1waqthzgeqwz",
  "key4": "5MWpp5hHMtDMzHDbXPXHmKqeiFjKnHVopJEqgrbUq2WSj7PYEPtgoHDg49uynh84MysvNJDhRF9qHjQ4nPFLguzQ",
  "key5": "44z7RZ96SFesqaNfPugFfDT7Kw5UAPU9acazPx8iGYHvo4YU7VDJmg56Y8rLQerXdxVUdZkYbsUW25mfPqP87hG4",
  "key6": "5zdRB1eiQheLBFJHxhPdZVY7w7Z3j1uLyFLjJrscmnnx4mjyc643v1k9RfaA8KA9M1b1QG11c2gvQE7x3Mv2gDAd",
  "key7": "9VHe9EkWpFucRuBXDsdhuhmzqa7enopHgaCeL8mRwz7GEZvTDB1YNJBKa8Jp39VrNwwwnRWxARo7LT1HZ9n6oQt",
  "key8": "XKh9w21B9P3UxXVqbhhWGUsWwURwRS992pdAEUb8kXmg7zkn57YTwHshevfUhBRYUxMVvLVBYGTZNGsMK9hEZ2a",
  "key9": "3VHdbWuDqYhrViXcdLCobYB9sLJifjgpQmxp5MSzSVhhodxmyxw2aJmzTMe2XbjQymnr2AmpyFe1PbPY3ZZGM61u",
  "key10": "2WLTnAcUCXpHXJB48P8vx8gyEUb3xPcLUQrUQHb2K8hVr2tuycPxcy5bTUhL398uLg8wUsWocmUui9tvULyDMBeS",
  "key11": "3ZDWU6w2WCvGTY8WpZqHZg2vEvhywoUe6gKFTvZuKiAz8RhS9VUNMjpsiLgjvvDSZVzY37S2uKeDNNx1mspT3UQe",
  "key12": "3EweZ44agiU8BFWiK4tJa9t1PsLS9WM65zrH32z9BT2a8DFBZzz8CSxf2F2FGvt9auzfz6ihRZ7k7pwoPLXFYU5Y",
  "key13": "58e4KL9x9GtiTk2YANcf8Rvo49PyBiNtpr2gg9efyta2KLVDCuTFFzq2aiSPSyPtyr1NnNFwNAstYf6fJVpLEuw5",
  "key14": "2yPazLiCjRT4vMZTGU2jKMdV4AqToueuQutwnU3n9rsaq7NUfCQdapVVbA1N4irincrDZAmyxVyC45SRLwXEaa7D",
  "key15": "6mwqT2UuQ79fn3bgdsMW29brDtHh3Li1gAwN65UwNxMpv2Zr55sbTeSW6Y1SxuCARu77LWdcmfhkB9VVpyWBueC",
  "key16": "57T9Tv17BWY8sSsRVgWtKPq3QayDdqa4GgBPefM6rm7ohZgnWXoFTaq2HTxLfLDHzkFYJsPbeHM47mqgSFkwSStY",
  "key17": "4fwA8TEdyhMhtmdBTVajT3SjygGtdx8hyU4hz9CBDVwFc57vkEMZHBZFsBs2QjTngz1hjkC6u4dNgfpJS4dRNDsi",
  "key18": "3AZaGmwwJXbf4XmjYG3D67oQEZVHM6qveUxD5G838Tv2M18c7grcf8QRzxPR6s8RRvYtJ8fZkwrPedd9KvCJv9NP",
  "key19": "3jm1CXSHcjEZXoh75hndXYSp3cr5XFjLZFptTtegnLZGrT11jGWrC5ChPm5HPK96C15GMsh1vRirVhvUcVhhx9wp",
  "key20": "21krUrxM94D398F89roSuMRGraZAKfc6gbP9RWTcQb5kYhHtCy1SAe7bdn8shdxX5fwko3zQ4ouV9AMqX5uo69i9",
  "key21": "3aRz3T5UNTbKXvCokEviDZh34sXVGREHpDhtQCGwb16hu6mVtji64bfuwJrvnQQczdiQXyKAPrRmSs8NVzxoAoq2",
  "key22": "3434FGHQJeUuPT1LYg3gqsRYnbQWp7xesxPWJhoCqAuoodiaHGVtA2K1nBHXArE2k5BSZewqc5fNwhiAox4v5aEn",
  "key23": "SQ5QQHQv33cDUcZ7LcqCydJiRDmYSf9roybcCCQDpEXZPeXzMFgZZGj4XamQKV1fAwW2BsDvAA1cs4wfDGT19hh",
  "key24": "2CCecZ8GuW824Tn4jjUicnAFEzH18NJ3cUvhkF217FR3o9Y7b5w72S2aRh8roQC7J95KwTSnc65WrAWo2MUAfFJr",
  "key25": "GFXbcVhyc2hSV6Cdrpz7C1joFNPGCyYDPG5n9ocCAuwzNdGaybcHoYCvN6shySjQbdNKGjhPyUAtJ3RK2zpkdcN",
  "key26": "5mZqqytrLQqtQxbbNbDbPsj1cerq2z4Ga8rqXYrDviH3x4PEayPAHSPoFBtWAXmRN9ttbwf5p1ewNhFK7CY8asB9",
  "key27": "2uVKBNxYbBrhgPnZQotv5B5emWyfkyXR8DPL1ZZ19fY4JYjTV9HheSNEYRGbqLm9MbjEwdvRzkofpt48VLtuBGPK",
  "key28": "2wBT4BR11JaxMHt3H8m3o3G2cFqCxudZQkeiS6JxZuRMHjUafZ6VNHG121NhZ5AwXgpr9Y6AoAmFzN3HnYhpSPC7",
  "key29": "5zzkfgELLJeEFWWkBXnpTxBCDvC7fHLjTL4Q2uhU7MgoiAKcwdpz7681FyvzCcHgUvEZdAxVPSrmWCMzW4a1cZPf",
  "key30": "5NehVQcsRdsmpZyXPFPuZ7TPGvmdeuuVnqonPzG5tRNFqioy1anEGDGXWrghpoiXeuB1re8Co9HvFE59teCY1rTZ",
  "key31": "3b5oLZqosRdMHnDnYuHE3MyBLpPr2Qos5gtZbUNF9jMhKZyTVXzPGCQSDzqzsXPFYGFGW5KUduYfM1YBNsdfvDiP",
  "key32": "2vgD6P5P5BF5yiYtKkpVd5htX7F66JgXUqL5ELV7pfoJBx8scfdQf2ekUXNmFNPhteT1dvni6pmQbzb5HXooE1EK",
  "key33": "imqQqWAarS6K8WWFy69QeVm1bfJgSQKRsHb4WX71uQWFxrU9z1TknVvbxS2nT9EYsJEn3TDUwrn2uT9Vq3Fca41",
  "key34": "3FtLLmPYRd1K3kNtC5uj93KFM7vkX8M7GcKPo8s5HzWUT4yNzyJZf1Eogt2UQAEfa4MMJic8R4N17mcRBZKDEfNS",
  "key35": "2mtoniyDjSMrqEs5KTmC4un2C3z6FRiFemSqm8jJzWWnPmiCcBijUKubJcMUDxWTZ6ReqGA1GSHqw5E5AESX6NNe",
  "key36": "3W2qETG3VPEHmFUfJrbeHYH3froG82H6VL1QNPgsDgeUHLbvuSz5B6ZYhURChziX9cjN7vDuHhYjhJB6w3cyQiy1",
  "key37": "5aGpoLRR26ziscg5JMiiCnHgGAQ7ktXx4Gc79cvYPhBvcp6TocfXdZ1UiTBshEbquLXvfvkaNqPLiYLbsonqRkhZ",
  "key38": "3CSXnxS5u1oQ3KAwLVCBsP8ywh2n2iqN9Qqh4TeaCRT3GzpbBH9HrfF1bADmZ83j8ehwAEuxpD4UePTpxQHiMvrG",
  "key39": "56ntJXePGd9Re3Abt35dcy8KJHk23oH3h2KYd4ydyEgwWUAPG6qDz4Y3d9X7DSN5pnXUcz9kGQCnaWxbzJhdbVh5",
  "key40": "21HEZ5EfHkHFFRdWXgwmLXbJQPZu1aV2ArD2nzfCqhpzShCmxgnpyLxCGLvcYAHyyG6BETUCjHhNr7ycSxDyRrVF",
  "key41": "2EQ7PoCELWKkNbNb4o2se2Pg3cQ7Zj7cX9wtpHQYLWrBUNZuTciZbYkHLorWspU8FfjwBaCdMsh9XHBEaLtxajSR",
  "key42": "iXuCF3NtzaYNEF4hKZay4jRcNdeKTHoRbfPQyegQX77n5FK7kP1CB9Y3ponASkJERaU7xDxogZ21At6bDDF3JsC",
  "key43": "5eXHfkcEw5QSA6yRShsD6yfxXGJrqxRLpMr9nyTR71oEKJcJgtALDuvcx1YEUNCCXE9s5aYavdhzEebquhYWTEQB",
  "key44": "4oCoZ2q9ssK2b52jsER3U8zGLUwNpuucduriJzS9GrwtDpoCh6emzYexPX5AMAFYozxkzHCioC35ioSmFop2Xdk7",
  "key45": "dDAWeyuXMkTtRcsUaBG7Fy4Pr54Mi6RiKZTRS3YAygehcUK18n193PpGAQGdTjW7hpotBkm21qho9Q8G8sNX66v",
  "key46": "2n4BBiGdUbK5Dv6gyeSnxZZFRAKagWgGRvPP5GrH3bDVsqzfPJD5tUPYXDMCJidcbmSXVpbojXUxPXQEc8okd9Ab",
  "key47": "dWXy8KYVEmsjxaxSJfeYyZdhscsBv6oP14kbJvaW82JhD52rVj4fXyaonKCSeHHrztxchAYE1YA2m2zdjUmie17"
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
