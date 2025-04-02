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
    "5H72U7Vyz7MHLQcM9cfHtYK28QdHj6X6oW1pux6GSfrnUuEtBht7qYTL1KZ6oGoh1aB2M9bgNccQjBx1bCJk9XLJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F8orqup5a5cjph9tC3HNCh9zUt3rUwbXvHK5Jt48RBMYXggLAvPgXvpUkSHoUoy1iKrHzLrRYReRypwEWS9FWFT",
  "key1": "33zWSyDDpXXLbbhRPvRoRVK1NHVB1LW9pnEDbkHMmbyNCWng3ynvCTtAjFWEGZZBLNP25v323cWadfaxZkzTuDu6",
  "key2": "2zrNQE6vgPL7y4sxFqXMkEZG6c7Nzu6MuGxiHq3X8uMZdKZpJtw7Gbqzi5fPzSbjJcKMbwCo4HATE7MJ1Sgw4tJJ",
  "key3": "bM14yRUZ6iKDR9CfvhcaYDjmPaghnbefZtxR9UGCCpR5V9dDjXaU4TjvsMwzu94H93ApHAKJf7wD5Ewj5PFd59P",
  "key4": "5q6Q3h2SuFaNsRjjY8W4UeyjyFvti9XqX8NqbXD8cxoXRrTpQfEfZ31zmHwyRFfF6bUx6JRKiLDybFRXi4yzEDF4",
  "key5": "4LuBWos6rXG9iEJ92pGJHMCLc4Rs1d48uXwqBU9T4AxJub1pnJVR7R4PWmiYGkqqxMKeEzNJLLfip1vTgEN6cX7q",
  "key6": "35zJqSZCRUGTJjcoqkHMQzJUtQJvUkVicvAjEPrG9BFH7cUcnk2XAhi7GmLRHxmzZV7kHMeAjmvBsuvqAb31oM6g",
  "key7": "5WVDa2Jnk9FZNtg4JnDgt9d7FizmosYExzQSp76chvaZwgUmvsVAnSTtrtPkLHSjzNYJCbqMkBjCum3C8bnt2ExT",
  "key8": "4SgmCrGTBmThhqaF2rh2LPyoibg8LBiLKyzA2sHYtBxUVHEnZsJVuyxiLYEhYbTBxwRUQDMMcAJCVRpfgeUn37cU",
  "key9": "1fHrViF2ohmjrXimNofy1KpECynpWCaarprh9xsV5KwHutd94F2r4W4SMM7pwVgVWTDWTTNDNzLFHtjpAGQTqow",
  "key10": "3Hy7JiQmiw8f3anLUUYCqBwDF7yNTnta5MFmiHuy87h7iUj4hcTrgrgmUmY9RnbaCiZLVsork3RMqRxiLVSkEdkh",
  "key11": "5k3hrnLeLz8rZKjFmp5fkzJasfPrwi7mXLA9U3YbtBNPkqU51r8ZpE98cANd5e7eus9UMmGT1gVNRrXdqPhNn9pT",
  "key12": "62QxDHAkSUuGdVsdPsq6SBgCfo3Bo7LzGk5y4oQYwcHT2MF1CpkYreLbZVyF2ERGtFjibiHKv94pey33ULm7Lohw",
  "key13": "MNQaRC7QkAK2nBay3cxYNRwD9KLuWdnuiT7gvCjcvUBcnZP6aLcBdYH5dVpnorJMQgk6MCGg9WAMb2HzkAPZjr9",
  "key14": "8F5FQdMh4Vark1afk6ECtfM2RuHMCK1cTBb7nTB2S4W14k4kQBEQcdT5WCU9Psz1UwnnQNYRf18doTjYssDi4iN",
  "key15": "56kGmaQ8e1URWB83BxRhDAhRqbJRDfxsVXSBrYEsJQeXX2qxFgPKxXYq4uaCT7Y32fUNUEpfVmKuw2Px8NFWXoT4",
  "key16": "2mYmYDaq1EBRswpj2bqJrRGdHYSR3RpvV8vpDJYdw6kdgGMvDhetYz9QCRqMddeDxAWRR5FZJH6vJ4KvSxEs7CCE",
  "key17": "2oAW64YKyXVvP2hF83cDpADNyk4HQ38tiA9Tg9mqFmp9UEsgNrPyhRu8z2Tr7VpDCpSdkz3yqzC1d95W2i5iH1nL",
  "key18": "3eTQPDUqyzmHpQWZpey27WDPiKVMWteFfcKhTeh2AYekhWtTBQFhotoFuerAPTK5khgVLJ3ta6vkLNtw9opeiBNz",
  "key19": "2yrWJYB3Vv4RoCwYcVXZZLnfVARprqjz3GmbWkqbfWMi6nNovr8mpnuwGtBFrBft7FSp1vfiPd1G1AJWkJYoMaLy",
  "key20": "2yTWDZLa4d6oZgbAcDrQSvENCjr6zLx2evAh8vHut439VgfidJA9YsqjbaRP1TYQ6apyqrqpLKMFbuiMYJ8kfTv3",
  "key21": "15vR2eysGvZwnMzjsYxryG6EzshFKBusfLRKnAocjVsELmMSmh41m4tDjBdeJjAuJWgqZdNJGBgWh9nQ5hxBdCQ",
  "key22": "5Y2YQibutwfoVHnGcQxS9cQh8wTN5FhBS1XWSrV4bUiNMF2hcke4EktPsZZioAoL7D7cxKvhmBGGRsueEjoKcsXV",
  "key23": "5y7Xit19VfZUrHnMdTC5pyfby3kqHfGzRz3yDCBMUsyxGyYcABhohPnFf5iZviga2pitgDfBy62XcoTQUivfP3Md",
  "key24": "5P81PTgTi1jL8PXrANYkwQdiptkUKhxUQR1MrvjVS7DYvEWSjug7E5X2tzfQEWYqAjiKtjTGXM7R7bT6A1uSKgnb",
  "key25": "2Dwzev44tM8EqCCjKvX9gGR7bRv7yBK2r3pP84RZQRNt5NYrRkuyM4eqEhC3gsCHEu5yrd6VWqqXx1Ur9mUNKTNQ",
  "key26": "55BZiJxD2ZdQNCwArNhs56XZxGFwZCLFY3e7WsoTrqHNQcLzLwmAXxstwX5VrTLj2YgmYSzVnbzDPQAVpjQdp6fa",
  "key27": "3HCUj5gvGywaXLiQhrZ9MX1dUjLK3rQDuTfwLUbfmfMFFEfCVacMJXzyyVRUuzi5pFch4YbKmRVpvKyvNe97Gknx",
  "key28": "54Y3Xp9hh2um4qJcxwFzYcgcyPfhXwz5AZWchrxypZpMpc7LMpXBEk1ZxtPuxYh7ozHVLoy387KPNRUJ5fLBK1RY",
  "key29": "5rGqbLCz9BVEsvLaMxxx8KBX6n6BuxdvspmfL2gVhQicvBSMH9uwhDThqbmT3dJGS9uwSSvVzfUBuXAbPNXLgw8A",
  "key30": "28yX4uvVNrs6i4uBjKWbh7UzJkV94qZK5S4QzB5dDo12T9ishkCnfAsvHJDDk663iYKp4bs3eFfxJF8p5tKKKiNo",
  "key31": "4ncnjQo2EsdYqVa9EGYvP8zbQvrH2e6XHdp5Uxa6Prhmiu8A6cGoQheiG3ctVV7jY74AEr7QgCNzHi6zqdJ9mXQn",
  "key32": "3i6HGg1kwAV6Xy94rzyVqTFux67c4W35JknpetuLpaZmJoXkoMcTozkNvjMRLwtpoJgf5fSqEVD24kzYGti4qzA9",
  "key33": "2JKLGAJxF2MGZHi9Pqyvfqs74Yh8Fw2LLY35yD2BWEVkKzQzQKd4tf37e6P5Y7AcvsPokygT3eNzNmnMjQk59zMg",
  "key34": "BzSVSxH99mqFC4nVry8jnAifsxQU8kh1suC2vBFDWBvQGexr4j7tbyY2kpqkv8nhvoE53NRZChPA2oWGTFNXep6",
  "key35": "VRVvXKm3xiwA9iLz2Wjt6QthMea1UMKGAPovtqLnpG5Pefy75FedWeyJCpAJtWrWuMhgkkBqxisy9kTr4EdjXBG",
  "key36": "5HropPhU9PuF5Pb6iJ3QMv8TDQSjrf4wfuWr6h9MMTCQ3HY14Swt8dzEjkgcX8wnNZyC12ce8wiPz3DzLfeEa9oC",
  "key37": "4hqyrjNb45WdB64d2DHDpEpYxBdobgJ5G1hrfWmEHV4PAu9XKhFx55ebfbnkwVgWftJC7dtLMvf3TSCRLXV8FCHG",
  "key38": "32Atr5znihF1FQ1tZpEqdiYFXZ3mCVgV5TYw5q4oBo8rfHj1Z4G24jtzJxUq9TZMd6j2WhmznDTVtxvcKnuTkfaV",
  "key39": "3VTrt9Tjc1VcCv27EKx6nvGq23nZFyRzcbyS8WFAzho6T91Rni4rArHA2hW4j7pYxQcPUJSJfM9c7tk91KfSt1M5",
  "key40": "4cJg8UKzxnfnx6ZkgTQoC4HoNGEC8TvpaRsyXLFsWjzpyQJCKpZjeiK6KvDf7DsNj7cYvAgJpFBW7R3QAMndgCos",
  "key41": "2qDxobBqh8ij1qTKLXfP2ky15qG4CqCk2seDgtXqkPoSzJaz5hhmz8bMtYnmA5HufPiVsFnqsqPnCzemnjriSB7d",
  "key42": "URKdpL4gCBxiwDzbkQQZMpZdUGaCAyaquM6uV6wr6mtJHJ1nK3aDtigt6HowSbUmvjdsh7RAYBbXYQMkCTVsk1r",
  "key43": "4SMKyFN6KB2nzNLakGJ4fdzqeSaRsWPwsVSNPzPu1j5WTLJBVMxpMDkbM6tGqFNMdh9uw9378A81yaarj4rUgBJ1",
  "key44": "dBEePuonsN1VeYJiNqifL2U6GVPhKhPpivgKya3uFCRodRiAweFf53jTNcw24WSD2BoeK1QrntL5ki4ewCvTjLv",
  "key45": "677bWvXhbdSnhYMY2vz7pe5tM3QX7E9QSknZ7Z2jE3X1kVZ4onPh1nHoaeNvgwdQe6zgZKi1YbF8UxeXPn87VoQ6",
  "key46": "2tBVKMTsFMzyfif4zf2w6b9jhSoADuG7ma3Q6ii2cqCwpatqCmdvWjBJhzHf5iDCFPhjQnKzX2Zuu6ud3NmDf1cq",
  "key47": "2v6ygKfKzPSDhbfRfMZmEEAQGaGv7mBTEKrLgvGL6ACDjoW68LMjLCzxPj14Fj8zHaZoatie1U2bvZ37JXHeWGWN",
  "key48": "2tNvXjqdNrmqKg2LcHjLfPAmjdEN7vP9keUZPX6RxYhWQfGQ5viq6CrRBSBL7WEJaRZ5z7MWYyXucyemXWPCa26j"
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
