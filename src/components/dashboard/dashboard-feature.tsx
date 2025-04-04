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
    "JweeBFGaZLLrbtjipGsKct81KCbBUQ6YwDmAVqY9mMWvSWfYHMXg2j4UcdGuiQQ5ryviqZ7YrjYYhFysMbDpiTQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pJzW1FFER26Q7ueqwt8cPiUNyFBT7LmJYX6j2kzUF4yuk8H4x5XaWU5dVxu1PWjV53Q5b5CDTBY1C1jp8tUspzq",
  "key1": "4H5m1JJnHRGUbvBshEsbxfteDKPx3uNnACXchgC5gfVmc6o7uMjcaw61Kgwo5XNXQTFdDaiLbSu2bQHNjEV8dYg",
  "key2": "cn933zBP8tUe9ECBtU7j6VVRQbinDkkQnPYeRXh27FeXkrnJ4sxmF3YVhLcJ1KaTBf5CfGVBumikUBni4TQmBvA",
  "key3": "3VP2J3TS72E1BVJkeRrWnnhYQ16GZZ2TmLTswNSS9oDxzcpWu176wsNWymVeRgLJmDnoY5jn2ESUM3zP3asTKR99",
  "key4": "4rZx9zwFPMwwFxRj7csUuoDwmLz5jydBtYHR899rrQtFT1E8WYQoay592u5BSNrL9redo59tKLMjAXE6ARjQj7kA",
  "key5": "2qxGms2t2oXdAbFSHBEv5JvfWKhQsVXEjusn7Ws5Cvot6mFW62NeboiSSHJWD9HxnVCvXLaHGZ9JZuuPCpeK2r6",
  "key6": "4ds3Q7SfZPtgh9BHZzUuradEcLQ6QXyCT5VzuCXZKrdAMmiHTZKcNF65FbaXtbUYZjr4DgCVkAQZiwTTWEqFJAas",
  "key7": "2wV1RjZnRSkhyjVcT33NgvSqU5JLUWCYBknEJHGBCoLCDqJivbt5tgdVo5euXon9bj9ro28Bzs8JoNeyfeDKGiT5",
  "key8": "5xitQakh6QygTckArgHAGCkYjM4BYMp1DjRDsVfLy4BcFHZdynUkNLTazePjtzJRnJ4Bcf22JkgwkrWw5tRxVLLv",
  "key9": "XtkmNsKMhRuGDgUH3hARn6wGJwh3LJqb25YTtPPtUpaizoinvq7Hfyc5wQXxghTPD7bJEyWLC4BWBX5mdV7H4Rn",
  "key10": "tXNwVgrDy7EA8DjTCofh39Vgd5aApCQigYuXi7bPJHBv8jgR4TgWx4bTgG4qB1j1L5DVYFNGuxEGwdpUSQhXEg3",
  "key11": "5uoVXTh1MYmxbKq5vZQcPMVtarU6m3zxyd8c9JpCNTjKrzV32xM2bpiNnHkzKiEFrnaeieazVREs96pBSGpVuQom",
  "key12": "679AkS5ss7T9fT6ETF8azC2jhd5gAVqHxGmYWbBjRi8EwHsrpDu9nptvsnX6bcWKDH4mVDbK1zqfb6ntxnLN2WEK",
  "key13": "2CSU5ktUXU8gJPJ4nouxhRS3RttjV9HfygFZBmjmh5QEydroKarCYR1HfpJcSaPSdVn92iq5xFCHvsYdYjQZjNmM",
  "key14": "561kMUqYwMbe2AfYCW2dDrzxoawxoTnAsCnq4yMhqdvd7gmW5b1jFosHsaAsbiGsB5VYNLvsnUFNS4BZ8pgeVbcF",
  "key15": "5yDEEeudNADi93vqY92Af7PnGPgjSmDpHk3BrnPG8fXXUgbTKEDzxpC4kFvksxvjSyV3J3xxgkCRbeTYzb4jAqXc",
  "key16": "45fceyxiQjJyMMV2C38ahGXZjWTFLdDVSTx3zvtnWXKQn3tf5FhNtUei2TH3MHuL79QLwYwgbGbiqGTwrD56WcoD",
  "key17": "4WutLL6bFiofAy5xJBHdUG4CZ9koJBZfCMszCrQBPtZXBvbDkAAR2zuGrK4JaoLU96X7DFvtUQ8Z7zm7EjYaf91g",
  "key18": "15brVTPn7Z7DA58ZJ2Ux2Xzvt2dqtvQsJzA8ohL25EASohu8DxDq7WxsxVuvqQxeg4fZ1VST65jJTeNw2ELVzSQ",
  "key19": "B3n4E8NozbYu2a7tHgSsZaNqUZwvbsTN3zsndFXVQQgBqeoEuRiCmH8PFskYw4LcfGmTcbDsEVaBYFbyBRxU8QJ",
  "key20": "e97etdF6bpTvYMG3XB2eQ1NEvVRXri7rFQz9iJrSkrXsHxdAdbC1d4fk3sMkBzN5c6NfzzovkHFAob3vS6WxX5c",
  "key21": "XmCoSyZMa9bdBxTFkxq3Q1VRHWkYiwqUQwxHz7xLRXBzFbfwYjx9j4RgGVg9Ej2GExL5wkdVPyu9jV5iFfAnxvi",
  "key22": "4cARPMrX8a2Yc6fQYcPpaB8BfntRihMfgQwYVcKtskTf5j7uCTF3Umnn1z9qeK4YA2kSW2h7ZjKiF7EdDPAGGtiN",
  "key23": "8rAWaWS9rHTkC8eYeYfxh5QWTz8vZyPMQLdc8GDp5gpBdWEgyqTfDXKaCEkVXYoLXks35GGa5pcZBiBaRUe6qSX",
  "key24": "5s5rEpUTNKWwCSUaGe96Fz9EHuoAD51Beq1yjFfyjJxFCbEofZn6YcCdn3Uwor5fKiCTVn6jtuRFJFLxkt2aYXwi",
  "key25": "5bbR9M7gaTm8YHfYAyNe7EVWxnwcYVZXWCcTH9KdYmmXX7u24DfKJMx97PDakZ473jiGgViiuUkwHuE8G5u2Vh6o",
  "key26": "2pywGUtjAfxzX8mjpmUMk8WmNGCYyu1p7e9DjtX4aa2shEYBDZyPeJeGxFRqjvayzdZPLJVLbDt73PZQfhmVK25p",
  "key27": "4b8DpnPv92ncmvJHMFB1QXaTdauMpe3MFVN1viFe6Uknx2RnmUFBWnGfc8pMbGAH6VJrLxPzn8EQNvFUJcf4D94n",
  "key28": "2bCSiMi1RoRohicJbyLVJyqGDbLgBzN5d5uFuCQBQRaefZkxShc75tZDD2rvEKk2hywwxNq1cHH7odszfrwGHhGv",
  "key29": "4EApxTen4X62TWdwfnNgSd6awsGRMyeoj5VmmvzqSTyrxdxJpSFYz2VkciGeDvsrdc5CKkohnFamr9yg22mips5n",
  "key30": "3GPdS7yfqKQvWCoAuaLqQJyZ3HhFwasprnRCdDcAbPE4a3tiUMSYL6Eg4rQxKtdJGRBybkyrf19XLYFVbFtLXsJs",
  "key31": "GiE6AMXdeenr6CTkVBpvNEbpqnDi5orGAFZZu6XqYCaNeaHJpLB32ggVkRhcyWcmrJQ2o6LAUvarP7YcuLLQ3CD",
  "key32": "UwVtrRnVZSspaovCiReT5fysaocCZeEjvTTjAcNi6oApMUSwq5kM5Tr3UXpibV1USkS81WxAcj4dCsPDvnm1xjU",
  "key33": "5YwasCo1Rv9UWN522nuxozefJrVqoBJQx9CjbuT2CrkteWoCmV6r1sc1khPj6CKyEi4Wugf2nWFG1AopDpNZpzXC",
  "key34": "3KwpD2ttYQzLChV8wi13Q2xEwU1KasDERSLxbNCshe11Vojg8vKd9mtz9KGRzHiJWBiVqdX4QX3mKwx1SVWDHSLX",
  "key35": "5iM8kqUM8ZwmvPghm87bpt3HtykVybmdAZBrhqM6hMy1acWjztuCrVduGUAiMtdi54NcfAutdyeDvv7sG6KZd8JT",
  "key36": "2uTAb48wrpHGi96sAaWhteYWKugNuD4AYgp72AYBnudc86wBtfk9fbFp9fuy4EVpmUVFLNTWUyRQGmi3TvRLsdD9",
  "key37": "27B4WEw68CzYUynhKXXAdUXYNfAqpEz8fzyQuxze4TgFsbdeH6Vk87R5e7JJDRkMLpfpqG3fydMbfBZfcR5ensm4",
  "key38": "LSr8HDN5wZruwvMzGHRdyLtUhs1RnY15ZRqnSCFPsZV4KYNWtnVcpqLAuABn2QNhcJMfG8nU3c4fGvaQva1caC3",
  "key39": "4zoefYrqHiQGZnzPWLyWrKtVDcq5rLv2YbjsVc51NvbB8x72q3zhvPWQ37HpsGR49CJLtkUp6PYHwXjKQsjmDAX9",
  "key40": "4vjU9R7794FYc7cJQYkw4qc6eUyE3eh8VEL9b1SVLB5ZXuKVBEpuLNUR3HHgqgycgt5xrtWsD4bSytQBkmkLwc3W",
  "key41": "48U5LuZzGebEiy8wozEVXGWbvZFLi9PKHPkLRNPLpwr6BTsxdTBYpeUWfzr8GbJxA6gnxdqu6Eu5jtN9Q1BXXxZk",
  "key42": "2o6zLQV9thVDJeyuX5CGTxUWimzyvsXAKm3T8MA47tjP9jq118wUUpEdrxaLP2Yi99gU2USUCFpnyqxGqZspbSPb",
  "key43": "5dbabEjZEN11a7KrAWaWdKQqtk7NvCDxtZZHwLKF9wx8NukVBQ713UfcxeWNrdxpL2DmdDbxBg82dxpESadEGBzn",
  "key44": "37x5dt7SyNGfrR6PSo1DUz8avbi1YGrYDvFvV2rTyMVPP1V8yrQ32advJk6KK7fDQNzDWboZYmyHTbiG9AZ36LYy"
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
