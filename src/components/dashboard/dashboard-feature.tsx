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
    "2FcMhx8pWGNPKnkGqmk596pzRipTjxM9s6GDxPwndE3Q49ro4ZJgaNrcuXjhbona8Fen3H9sT21P75YuwqTKMB8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qm825pi7Sx5GenVhhBssF98ANEL752jbzwGJ5owvNeGxVMmBJe6mP8EAFLhNMKgL4rEkmfcbZUdGzpYsLDdFXrr",
  "key1": "5M3SEJdUucGHRod7Wa4EpMEPdr6bh43eBLsZYYUsfsp5zUKwAqU6xu25Lx6sZ3ix8dyUwLZ46qSJJ4DtuWxYjJaY",
  "key2": "2G98pvbbZ7eFnhaNazAzkB5RmAMcE3NzNk1LjjieMpuaZeMqdLWCmj2TbXd5QG4iggSCMQE5ragARGYmjWZVobYd",
  "key3": "tuFAV9dAG3UzcM91pVpkkR78eXikhC4jQJ8uayU24AHimXuTHpK1LUGdDr4UeHz6LdnNfji7YTs7DgospB2QZZ5",
  "key4": "AeSffpq1fa5scnyXmBVZBcPXhRE6TbLPRMYDXNfWCccsTbFizLvSpWmMN88UPt5H8kkuwipSneRjeiR1NEVZKGB",
  "key5": "5eBU7qefRVn8XxyQgX7i94Hr9eywog9eigcW7ysSCnbWU6riJ2nUWALhwxHPmtnFsBbGYD7TBKYiT4oadW9YUmE9",
  "key6": "33sXT78co4fJSvMYF6raxhTFGW7KPYCjUmvrT33gGeRpKBwiqhY5ici9mjRdNhamw8dA5h4UzUR5zZnDWpWjgV8Y",
  "key7": "u8CeghqNQP1uV4U9Qtdjmrc9enhaEY3jKZ7pykGhfKUVUpYRybZmNsYE34kHFvJnS7c6CVAX2pQkn71c4WD5bMZ",
  "key8": "2G6XVHWLprS4qngEDQvbKT9X4mRM86q5zqGueTnXjjkVnKeQcNSwPzyeiwGwUk7rUtzU1YkTRNjTqP7zK1voPSam",
  "key9": "3JM5vTXx2ZTEyL3HRTg6B1SX9gfimtotjjivndR3zTv1fqPpe355YGJhpT28EV9ckGT94TbrwEYJmRwroNHUYurp",
  "key10": "3eYfsQoHYwJWDZsQkcZqXkmZM94Q3Vonr3HJ6NnnVMCp1g9VNxvQXSh4njTMtdPi2xrvJVxxSiveySidx3QTb9Z9",
  "key11": "5mgsPP3TEDHzdeY6aQQhFvGfcLyefySXSHLcsDGLaKuKAUPm58buGF4Qes96TvAyjXePySXLsaotqnDjBAYbmhW6",
  "key12": "3oPsYJjZJnBja7cksE152uweCXyyBUsswJGKo9F2u9rapBKUhvQdBFcHAnuAk3j6VADeHh8erMZe2qKShY45h8rM",
  "key13": "2cqHbUvjTtEwHapWtUYhJLzaGFzM2uduxPb6rPY6rSrK3E1FamnL9iqRV8QaLNL8ZyhjucpeebH7cCHP8327cXq3",
  "key14": "2FVL7SunmCqNuzWFoPmVh4AKZNBH1zz3jxKJh7r7ABKUrUU2YD767T4ErfjW2R1PQnUnhSM5UqWS4nGbTPN38sXL",
  "key15": "4rJsRVXm2Pomn4AwcedUFbuLR4cL3nH4cusc1smBWFcDR2cRUw5VKNkMx5VG174pJRuzDSX5heiK6pmpcDBZqPCn",
  "key16": "CMuGHvvop5HU5EWnZuXMppedu9R1e7f87b6NFPqNrfxVYPrw39THZA1gi92EDXR3Po3qGhi5sYj7HELXrUNAu9B",
  "key17": "4VbUKqCUwc17VW2WrepFVv1v48gyEgJzyUmYkFvUon7D8ypKi57JN8ZP5jsktvUBYsetVFY8uTzFEP3tw4eAUgVD",
  "key18": "2NY5ZjhWbdn6mcJcyR4sUYsTTyCjFVZkh6mZnHzJYRmRMvKZj6zExq1sV6uzagZJR7XToR1vyokUAGicwvGMEHeS",
  "key19": "2ryHj4WSduKDKNztGS7sZ8mDjs6dQh1Mu7M6JNuPLFTfJNG7awSAm8Dyd3iwrs8qejtZe9zHP3g8tcVmHRGCL3V9",
  "key20": "3poWwLFmBqFDLZsf15F9uUm7HeKTSgR9qeteQiWDefE9QuS75kSH41PrpV2awt5J9ahH5PGwJnyAGdu6qaeTsTvg",
  "key21": "2nmEYFv9FVCAZunEciJ2WnSbMGgiCerAXidajqrDtBzACQMMeMweaGXVkwgw4v3AxwLEJ86EHbf5JRRyS9VsHzrB",
  "key22": "28BeH9PSQ5tuXXSN9GV4Jjkf22zr24rTZFhaArzPRWcWqskJX9mJuBrZMHW8445LXbWLprXEBhPzqkW4Can3s2kp",
  "key23": "63z2pSWLycWnyTDSxQVkENsKWMYMPRfU1t4UHPufjrkdkCB3aHdPSw5vBtksEPcjhekqassqBtFtYeSrhnG1wby1",
  "key24": "5t3bra9F6yXbi3Lc5xNf6GycVQmDUdU7Xt6RCMprC2g4htopozxH4JbiiLQMXAMZV89cCGkA4wUTtmWhYkoQfjoZ",
  "key25": "3iPPo9eWfc1hPYAmHRW7rYM7kKdZkXQ57ik89fmKCe3SoYTxMqoSYT4b8nbcWVzcid3nUA23vJP3j4W3XTZXBnTs",
  "key26": "Twf85ECLzxJrR9kKuCVzcV6Gtv1Q6892EmskSojRraztVwRpas5qjnFX9uLcb7HoqCKZhA3n2qav7jZ5JUEu4zg",
  "key27": "3KpzeHjdJ9b4VhX3iXe4Zf4phnL2hevkRizhAZYDMF1c8DF6ieWvE6r7bmvenJpbZYoE8F5Pn4yWy8h6fetuYTDv",
  "key28": "5upDwMCrey4nnJ6Dnb4ZZtRfLvSfcgSEETs4pmuP9WkQseyi4wc9sHGbWsiPTZaEEDMGsuiDqrAgtMXKUY3sPQaJ",
  "key29": "kySevpM6REX3CQSV1puNdUaWrLDYEiXYLwdJ8JRPQDiTJmJ93eunYXmRUPnUMw1qJG1ugGSVtKeHFm2LiouZX1U",
  "key30": "2RU2gjJXwubGg67XEfbKrW1R4yDTiRiJAvZWQpFMwDkyij5Gpk35rjYFCFns3pZWDb3XA4XHvNz1L7Ky1LcYhGvH",
  "key31": "43TmBzijTiNTvtWQJy3HmTG5FVjSDezsJQDvbvBmvaPowYw1568B9RSPQC18jqDAFsb4Kk9RLb1vpLeAfvN6P4Ba",
  "key32": "5NhuxLAAM79ere3Et9kFGHdATMLzBpeLXBwaU4cyspwyKRb4D2SbmB3cdGhsNBRegTt5QDjajHifSmDHjWeCBWwU",
  "key33": "3gFfns3iruBpoEnN2wA92BeJmEb3KSNd7kEqXbBSUhNovVT6TzY8HrAcNoxKjmpKeUAuvQngCQyvmQVXfYX9Q6qh"
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
