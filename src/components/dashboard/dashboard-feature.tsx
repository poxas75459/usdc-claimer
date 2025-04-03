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
    "2itjJ2KVnjpmWm8q4PcVW8nkGZ1uad3niRp3MmYfARS5aEzjrMqpHQsX5Nwv8vBmfJ9ygpDLjHSAJC37dtQtDiNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jSwzcBPiHCSoKusFCRUhqZQ2aLmUZvVrtdtpjDQHKhnLToE3FqPUNZxTEtyUDkEpr9xUXaB6u5L3B7GkGmd5c6q",
  "key1": "57cr19XrQsesFwUgTr66u75oxtGCNRo1jv7khJCHdAnP11jDdkf4XgTNoSqC2sZXcPNXQbL1LL3Uoyty7sqz8Z5m",
  "key2": "KjLxvFbX3LKJ4tAWLeNpk74J8V4QVvh4LZJoBUbQ13LBt73yRHAkxHbbJT9UEHqvfWdDyzcYKiutnAzRJexF9ZT",
  "key3": "iPzqpfiSMwt6dqgeyWZMtgj1bQqaVKrSPqiMiV389Rns9DuSc7eSs2qcxNDvhqpS7RBwQCHw6DzzzFQHmWvbHAL",
  "key4": "4ArEYJv8JfdKgBogwNmax6ymadrKLhDKryfbLDLskzD7Dy6kekqpTkTpE64A41UM3KEDHMGzgKQ2tvmXKxPLH1uz",
  "key5": "5VHm6APWFadrdASgT93BFe6BHERERFYbYQkdbeuhJpcT3nRCKMax4nDzyF785a47KyswZthEzTmiw1Vz4ZJxiTe2",
  "key6": "5Vad1sUs4gAkUdBPCmSZD9v2d1SziX7R1kCx3exiYdTapDj4WbSx47tV17rwf1bv4Do8tsZi98RG5XVm2gY96aY7",
  "key7": "LHaotCR5PfrjDqn63T5Rt4eWC3zNqi1mj4ekyFzLSZSgzxHat2GkndvRCthpiRAKkpAzov9nnEJsHBH3AcFS5bY",
  "key8": "GeePDYAyUsJxBc1kfgTFQPjoL4b72ud93JWPBnZR9qysjehtNgKEt9Km429dhC7iWxPJifehf6pFtvYfoALgENm",
  "key9": "6Uzn5qwAUNdhmw2UQfZaWUYxTKg9nPbWd71aV5bt7nxuv2vrjKsZgakzBGcWLoMJgYFQh53SikEp44mbRRmDL2A",
  "key10": "3YxeKyeqfdEeZ8yMP76TKUaPW7tq5nLhvTo5L4y6GKLALuq2RMrbzjtH1GJBeqqNwigRnzoa2MYM133szrQiZzc",
  "key11": "32SQdYeYFfiC3A23rjDVMtCHFGcFr7dbbpt1r8uWDvsksJQvz5rxnFNcYZvC6V3Sq8j37RrPw9S1JNLvpQ6nj1Bg",
  "key12": "3j3arkz8wmto17aiGqZDTBZuoGXiietN8LJZCt1rrTZv8uvi6rAJ2AsY51cUoYGbUVzNbUcfPLCXT55ApAaSAPnE",
  "key13": "45yoAQehc3mGdcU3fmBP5k2rGdYx2ZPoAc3hpJTntHR8Yj7xGLgAGcKaL2dRmvwvAhwBRGPnpUjD95S7mPp5u2uJ",
  "key14": "4czHEqfmLP9tL3BTq5oDfE3mUr4ptRo1ZVtZz5mwzxdmuqrSHLfu7YsqY7mbi7ew6UnYCFXbq6Xk1x75VwJcSJzu",
  "key15": "2DD5Gv58F2AjF696g7Zeycr5qAnqacneGFW1zhUmHLJhwzULKZYfT38ZkKjRi9FVa77yvPgAup3r2B5kJfwwgfWm",
  "key16": "444izVMTwpiSQsy7ySu3BYFy8u2SSSx1x8XRpWZAfYjLY2QW7MYD8kvHi1RUa4k4uwQGT6DXSHp3t7Nx39M4ubT",
  "key17": "2gij77oVKEXEvv8GmqUvuieE5NSKZAWaPuVYn5AA36ym5zNDzuZnxpArfVQrr32ozGhN8NQDoZHg3LTe1qyS2XXz",
  "key18": "2KauQNj8217WShJTW1moNYLttnJG52Tu9KnnXqSEfGYUZBss4qRfNdPgsFvNBShPqbpaLXMPVcB4sjxuxj8tiCyS",
  "key19": "tsL3pwicEtr23u78h6La7D4wCdiMHhCiZNf3ze3QYkrAkhPZj5ai18XRwBvjAeqNegegPSnJtaKJtcVNeN4bqYG",
  "key20": "3z7kgL9UvzUkJGoAq4YhW2U1QNc6BmoemdTXymN96T7Vj6ojLArccnTEuhU3Z26vVvH3amhjbAvnUAo6pY5adJFH",
  "key21": "2H2P7dfe8Whh6vKZyRmCEerA8u5KWJqRHWgLRB4QFig3DwTfZ126AbeY7Gp3BGYiDCEiLjRrKFjcRuWtTYUP7HwG",
  "key22": "27eLxwgHoqnoUJhAhifvqYogRK5HR6P2gvU1J6vTiguFtVfCYKeVX1daCR1EgB1sr49SbqhvRThQ9xpud2Rs21HV",
  "key23": "3g9sV7PNp54n5tprGnGaSaPiDSG1hSrvm34UzvawRViX5rkESuwgYwmz8ZTCcyktmhYBJMk4npd29RC5RLNwr5hD",
  "key24": "4qRaNKVpvekbXsKnvpLVpNbL1AAgnmvtR4upWpyaSUgAYuCTd8Q3KJCpuCbuqKRnJqBd5UmMc8Mppu2j36W5e5Jn",
  "key25": "4geRpw19K7H5r6A5wjLZJEq3Rhpc95DJ93bvQzab58krJrc4J9bd3RWWB177SXGoyMSQbd5S1YRfdZKFZmR13i4G",
  "key26": "aTnCpdCAKvqd7rZnNkuxCmJeEQqQmPU2wVzePTpJ8HX2twcsMN8i84fpMhai5p1MeYXrRAyzbW6Phqm4smG7crP",
  "key27": "3TpgvdgWtHdrsXjtNnS5nfdCtWDwTk8sKpDQrtU5z4Aatm6sjrVFK4PQH4RCBr54aZxBwq9wQ4pAwbmLUPAG5XMk",
  "key28": "2kETVuWwEn4NUgGcjihmnkU9X7SX181rK6ExiAWjd1arsWbicFA8VJTL5Bg1pparx3CdxbKSe5NDVdxzckY1RLkR",
  "key29": "645wn1J4rwMMVLD9jaVYbVu4tVHNADeWoNyrBJ8ZA7jUKp62GY5JSPDZhceSZnjPauvquzFdNvm8FrbbStVVmNGd",
  "key30": "3N9VRg8Ywh3izoSyj5v3sdiS6yNiDD9YzZJ7kjGrmULVZcdxjWYYr6unuPrQzh66x2vE6o3f7Dvph3mwiiridPaj",
  "key31": "5AiKygoKJyXUX4B9HDZ6tz88qV7ETvGYWYR8EBxttGuZ9VWNk9irXiDYmgkLSUyhfjtTk4knaLNWGb7QV7VdE2q9",
  "key32": "3NNrbW6g5mmpWLvE7obU5SxhSZAHEEdByTj9ubbcNvQ5i1NbNjmRdHiQqVzH3j9dLSjQyPyYJUty45AA86SnetcU",
  "key33": "2QtqGXpJcBHZ7NKVfdVaHRwn2ZHhb5jSgjgbK1g47cPJgggVP4GagDeW6CEDjRcRog6dEcSr69xd2UvYjqjCkLm5",
  "key34": "3zn15LvaCo6818G72761ZEsaTBJR7FnptckKvRRvzkh2dKCwBKEtWLJHra5ZpmKCXBfPk3dRZNtLjuDsHieFr4By",
  "key35": "4ai2KMo6oMAaLfZJx76qvjS11bGXXbvpqq8cDUf7nURsai2y38U46otcxVt2vToWqmT9SMQrvky7DCkKc1DXrCNY",
  "key36": "5rQAGSo7NedvzUnmisqZrBcyP2v5MfnTPQpaqzX6g6Asa393RpPSt92w9fd8pcE28T9ZibdCzJc1TbNb3cNRiGCV",
  "key37": "35QQTac4VbRugRCEdb9g6Vdeb6aa7zXYUFThUZtnyPz9EguE3Xy7VZY1upEunFR27W4k2Rf8tX7Px9F1fc8kQLqu"
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
