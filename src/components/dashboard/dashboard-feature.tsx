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
    "EyXspeTRTyCsMPdnaqoxR5W9UCGoSJVH5ybBZPAbDV2wdJ1CfPFcgQ6uBataMxia6RMbEHhX7chFxfoSj4EbE7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aQrZM1xNs1oLuLx2JcSyfDMTpNTa2GnPrqRkRhrP6VqEaP52MgTqWmRqTEAbtPReYCUNA3p8c9o6zTHjttF2GuV",
  "key1": "2onz8wdBzBuXng8hE5cfMonDH51WkeuVpEUb5fRTBjjLq29Qxmr7Tbj8UERjNkFpf6NMCtmHZLn5s9SQTMRCRFA8",
  "key2": "5beu9kTRTcSEWs91eT42LauypDKZtJkN1wGtqwynB5yVN5zjGrJP6ddZJfLzv2zdnhFA1xvEeP7RqNusw63Kzazg",
  "key3": "3NbCnRbDCViqF2YJ9zhuJDdsNvWxUdfRt3jgAbV5W1HRuMCfHbhqnWJdomJpDp4nrhKt14S2KmPwrhiYzhHGrdQ8",
  "key4": "2jB7t4r4RRXgCSpMfjjF4dDwdmkrdUVtFP8AP9ggaZorKhYMqiwLN27dtBxS5rrai9cD1BGcfprAU7RGVnPWyJ1c",
  "key5": "2ysPJkBHQe61vsyStg4dyNP2C479nHvgHdRaMCqn2dxrRddnQjj8jnGhEVdgmzKf4WFnSSQpCiHxg1SnPUHrFdzK",
  "key6": "5aRXZSmaazSsP1qSBowPvmM1rCqnCu8ExkHKgn4dQ1AG3QGNN8d2h6xsHtjcqnKseBEeWGH1kNWqAawJGpfqSFbV",
  "key7": "djVQjneqmzXphgBSMejeoxcVSCR1UKgZuhbB9SSFANGWoQ87MtovhJwxXaB6HWfoTt777yuYeXb2Mx66TVtLR2o",
  "key8": "5mFVT38rxRjdCzM5h6zBKFe1eUnEEfoVNdBdnJWYxRvGtvyfVKP2V2uxhypc1K1RPJZwgTa1c7Rhavrtav5FV9n1",
  "key9": "5GN4JHSSMJDc282Zubv1Y5uTSsc9HA4u8rCVBQyyPd55Njmjg39G7XsZhJQ7TYQbqUiAUJXKYzebbCG7HNoVZuwW",
  "key10": "5tXPjMhTZRNKD1y1q5FTcvmVNDB4TVJcaMaQP4AR6kfNBLxqYA4m2B5Hjbpx6yrH5dh3KBGXZh4eY6n8ZHPFQqVq",
  "key11": "48tMxoZTTYWc5ridYBEcMoPwxnoLWJ14GAQP1WkwXrS2zRE6SiRzwMMyYwkx6W5HQbM2B2YzK1V6kpUAxexzqdur",
  "key12": "3p5N7vHGeRoA9DjGSsptzKBb1Mo9jjRqhsyXUcsMED9cFLNfMw1x34Xz9Je5aqS4UpuJst7WGy2AKN28vtNxjBXb",
  "key13": "419ZmB2YePY71kSbHQEYToeT15QNeZ8ZkEA9eQXA6aGJ7wFdPSaTmmyrE8UB5qqSyATQe6LKXKwXrvgeEPRYPa2",
  "key14": "xsp4FSxFxyizecTEyRzn3WuhHERwggczRf7CZBqt8D2DEbZdQr6cLJkXW4NCjJzt1TZjZYa38QhiyV1vvUNooq4",
  "key15": "4H5KuqeWxD71QVbM7fvkzxxrjAKTK5MwxVEZJ54bbU5X8aaDVuigjByKfFfRQSsV5RuavQNnNAWFN4SFZzTBm5eb",
  "key16": "5frCjb3EE5fg8nyjqh9qB6wf2rBaC6ktXjrVHy92SG2eCqEEXzYBtEEw8YXTrWb69HsDpijLqVWP7Wt7aSzmYRPV",
  "key17": "4iAb7upd3d32iCk43wBQ7KdBjxd8N5VSC97F53maCZJBDDmtygLyq3JEHeyXYaxxxr7SEs1XVHnPyzwYkrWtii6x",
  "key18": "32m8xyRahY33cGgm1gNDEdm9WwdYHsi1cBC66pUKhnHEGBK1cLBPTnFsQyEnm5NAw9GkfUs2gzGz7QX68CvwiP28",
  "key19": "52CxCCvVvacUvwKXJWuTC4ZGCvcKNusFqqbYNVjXftrmj5AQB3Xv6WVKkGR5euc2zX2mnXQtPwUikLwyvA6d84Hq",
  "key20": "7WZMxYBu9uf7bkzPwpZJQpQKD8hdETfHpoqPUnfG7D6LGYp67YuSbftBa1s5BcENLd4RRVSbqb9bdo8LCxU4Uui",
  "key21": "4S3PsFXrte6xy7jaUh7RhTWXukGkBwHPKGwzC53KeG1Phc1Vxmf18eSGnn1JRWa65PYKk7FoaNvMcuuGTSDs6J6U",
  "key22": "2mXf6yVnNfQCcsRwneTBx8FgknFXVrhv7b2Ccx3KggCrNgNJJ3uYp2ER97AkKyLkZV9JDtXBNL8kYij1hoPwBTAg",
  "key23": "4c7VH1xskHEoEhrKYpnr9R5CEgCba4YwRU77y63PN7Bdj8ie679Ui4DWLZg866EDtXLZzRk1hLBXJtADhn2jfV6m",
  "key24": "26ToQrCEB8sbbAaWRpMqAShwzduCGrkPEP442HuKx5Y7L9TyivAaUyWrShs7wyDQpR6fqFxEkvg6f95T5hmV9fF7",
  "key25": "2RZdamqx8A7rSwYq6GPJ6Yd4EatxCvSHvLKHKjs4BNbU2sky8n9YEdezsTQuZTUQVP3q137xjVYNKCCRTt613LA",
  "key26": "46Lnkr2UxpoUY2VJ1yM2FxktJNqrRKGHTNbLrwHc695x4eyAiqPtUDSZXRWm2cAPapkxYAduV9ZjXK21FikZLRFV",
  "key27": "3vAGM4ja7Bt84i971JjcckzPLAKwFbpw6fT9pQvCQ41owU2LZzN9tzfGLz9pVoD7tZ2ha9j6HmxDf5s4uGcTjWHF",
  "key28": "2B2FZwzXKtsAbVNg2iUgx9dYGhjDjCuGt1NEH1E5Rz9hgRdZ85zXxjqfev7nbtA5ngbBbiiKhjt9ZL5N5NdGDyet",
  "key29": "2mwGz6dEhqoJuFBjd7DnfJnUAGtDjQtfyA8qm6SXybZ7PfV2gFeBcqdUDXP7sKEBV4sEjQtixoXybZy2SS8hC4kE",
  "key30": "2w8hkJurKCzNWepr3Bx6tc8kZLDKP3jFnDxhFKffoLm4FbuPrErco4UdMi4dj3Z7UvURGxNACB36QD7YA2cPGqFz",
  "key31": "iiCotMHjMfRgExoCarPGpiHorDkyqAR65w1pfN1GohqhBjDrAC2Tb89JgLdWYqBLLB3PbMojLkJF1cjEn9Rye1N",
  "key32": "3TLD63qNiRdrBwUHMuGu71Xg6s2nyQzda2wE3xi3Nu1pzqGZrkoqncuU9i1ePp9hLYwv5sxR3PZnxz1H5b3bCy9k",
  "key33": "2gjzV1HRLhGWq7YWcGtHCkY9DDbwzoyzWQdoAZxsm3d5DeXr9Y9aEDyyeLPvzxy27kxNNSHnjRzXCHrXkmiu8JJr",
  "key34": "3CZxnDvwiY7s9sz6TwAQtL81AVUwEa4LnjFpBmoiFcyMcnEJZm4Bd3C73fCk72ZaxnfQcNywpPwLb6N9ReJPm4KW",
  "key35": "4HS5skYZnv4uxxqdGs77yAtdUAFmDwXCuUt5eqbnabSXhWtwG6ung13dnkQX9RatZpx8YUEBtGrHTUP8HVMibdPV",
  "key36": "64gVBF3ZgYGxZPAtW35dXKXmo6ArFzsAqQgWR1BMUydyxUJAYPmwt8623G5XTcRTTsqhuY3niyiwJyDxC5fMFSuC",
  "key37": "XKG3dXBSXUNMBf8gR7LBbaxWxMcPfC1FsaAtLPoG6yySrK4KsJBdJN5XstEk7wMW9rbF3emCYPix98sH6ej6qAv",
  "key38": "64FbtZT79xNNAFBuawhFpPURc9jtagCSQw5VYMRGRQenzYjeMgFaLUFLgXgynkkyKiTrbkGCDyJRN2CMF6NF7MHt",
  "key39": "2HGvQ2aCvPtvhDjrksUhqtqMa1mcDSDFTpTerLjeuQwn5HsTJ3fwGq5zWLbDsmhfLzsV8bJEf5VP5uUrgE4m3Frm",
  "key40": "3AkNibBpLUbCmzM4Lnp9u9DYfz2v2uwWeURMdd7BJVrCMwzYF8qH3KAToudfh75NkkG2jEH79aWBVfr5WGNw1mki",
  "key41": "5mR7edvh6RMnU8i8uz8stAiTXHt8z6WeLLC7SJ85jniAJFBrhavhN4D6pLobMWh6WaU9yK61D4qpu72Vs4BuejUr",
  "key42": "4Z2aCkVreitNDk5smmBRkabYDNagMXo4fhneYfgHsVmdbAYhyDB8LnDPabtcwR1YKbT9VrmkcQeKbkVpU1ykC6ux"
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
