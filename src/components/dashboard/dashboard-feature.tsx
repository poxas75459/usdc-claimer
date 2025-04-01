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
    "5yKD4TPzD8YGNEK7kcru5JCuBNdRCxjvUTRq2e74v7r9Wrec3b7SaM4xw1KppG4uiLWeMbuUWLxsL5jwvMiCcx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JMit7FXEE9qpQdhqA2HMvHjSJmdph2b7nUusPt4nUWpsnEY8RKUCFM1xhfW65FQUuz4CnHM917wJpeJwuxPnsCA",
  "key1": "2NKXUwZ2h65AdjqguFgSYwJanzQq31syWFRAvwkdaZ8NZnMg5MG2UNySUdiHBGn32AH2dP9R5XfjDkQTR5Wi2GBP",
  "key2": "7cE3b29ggjvQdBreGqBJfxkwAapi1fEbTLq2UubqEhfNCVm7oExgQK6rhEKJS1cFUfoDEz6F5xMvtpEWHnKqgpN",
  "key3": "3Rdp2tt9QhmfV6zakfg8GvhZihFgguL775nn34HyQj6H6Af1GU9Fy8UdzBXraTNazrJG9bELBVbhQnymtdifS4aw",
  "key4": "znW6hF78EcStbDtfvmyQB8mMCJ7UYt6ugEUZoPY8f8WVMiHHST4GGxYrQmUXrzXeDYbW8NeFYCzi7KVwoDg68Kt",
  "key5": "isknHWyVNAwBCrG6yG77dzhHWzKvcjRxAu69Lnuh8GptfMyHsVURMrK8SFuBURGThG2vWqnAQpZPh1EEtSKacwG",
  "key6": "52nmVJnRcHLQjZnuvACtKm8Vhe4pkgSeTQT7SXJiq9dMJ23EvnEpy3yA81d8NT77CTBK8uzmqmYWpooixS7d5yfF",
  "key7": "5gGALoB9yEhQXtUVMcpw94g1Vowkt4NXJQ3v6FDUtdCTn79EL2LNbgQ9bJLRz9i5PKB3WbwajLn11WsGs8cGLFhM",
  "key8": "56itqVbWa4GqHui8r58sHxquiRKQTTQWRzibvG1udawGqoS6doyxv8mn5CyW8ietVaYDgxmhMMciXAbzUyFtFZsd",
  "key9": "2WcqxXG6qVk2gcUpLWzk6enp81ZfW1ovSyp1xQKyfYifS6xNJRYXkvaBeGgpcPhwW5CYJvWXtWptgBKJ8Px4SKTx",
  "key10": "2SXQLpp8VmxgekzLHk7JTu8dnC5vVN6jx7CU9v6oSew7GxxeANyak6icQzqrAkU1ruGgvNqnYH3RpZS4fSXUMqqz",
  "key11": "4nYwSCnCVXzVAB84ALVnagzrjKJX5Q5p22Y6zzkGF9YJkx1A79UW1cagLb2UnNZx3aHP7GMeDe6xD4oqxRS9LYsk",
  "key12": "4MGwQ6gGtvikPPdY9wNnh1LMVJ3Vo9qcAMN6mGvMgrJpcvDw3fqFvnKpu7GmN9mbxCqNSidsgbaGAyTyRTcJTehi",
  "key13": "3EwRh1GVRynbtd7wsQ53qxu9qp31UFB8VZ47ghA6GHydm5QgL75M8yzwrUNDWLKXL8rHDQ44mntEeXSe9pR7s7J5",
  "key14": "2rAFk3YFbBBvKTeQHxdPTauQFB1hviHGP7fVGgYk5kx7oCmgpSYt4vsm3LgZH5bt3cbpGBXTXXYvmSFty9mk9vdJ",
  "key15": "4TNGv7FqN1Que8m8YsJc8zPHW7NPDzx614YDXm7zvgjf8W24B9oGHoWz7rciLrp7dSJcBfPE7yUYsWDjxN9DMMkY",
  "key16": "49Q3qqimurxsvWUsBKgp2RamC2kK8b9QvxqH5wQnc5eKqWyyaz1WkCyYfToj9YNaDQuk1UomFkjjFjYhbuu8c8n4",
  "key17": "4taK6XCJL2FiUycQjpj469A3r6fG3ZVpuD8K7Fprsh3TdMiKbb62y1TSCkNUT26iUx6Geg4JAWyTwGosEjFXgiW9",
  "key18": "14bdteZVU1mCh2UJnfX9284SSrtacaDU2ZAXgijrw83DnAXKAKcvGHuRkMV1amN4pcC3xV4oHMCovzPoZCPrG78",
  "key19": "5paQjoZnt466pwb1KMhe7fkpunDyZb6HgGYXWiodN9NNAGpohWyMWpT87Bh3v24DzoZzL6nX1kco9du5f76bX79i",
  "key20": "3Re8jXHG1KjAUFVKcUYGwRwXDzLmisjhQ5usisLZdCYfNsH5f6rcTvaoKL5zXxjRdQKxJNU5qPo2XNqSdtHrsmdj",
  "key21": "5npkUE3j141jWedF2o9gcgYXEiA6CDK5ghnXNPRH5Y9pb6nofM5udQ5BVJeSA2rXbX3WMWxXiqba2Bk7v8fH7yXX",
  "key22": "hW58yQbKfWs1bLkby7BxTRHMasc4dTmAZeLdmT7S2kZjDEYEzfFHzQYLhf1cycpyEdbao91ypH2AUkUS5TVmfRu",
  "key23": "JZbX7vYj69CXJBGyNhEHBXaZXPKfBqv7DbAujWEHkUZqsmGV9CgqSWarjN1ahec6CC6uVesDvP6LY32ALkyCriK",
  "key24": "9RQ4jEvwocHDkqayUamCa1dHKyGYeVq2jATnbvPe4jCGbMTvA4UCgJb5zW8fgWcTCpQrcJsGYytxxhsQ8HDfGss",
  "key25": "3GNDwtiUye3nq4skVddTuYL6fpLFUKVY6X15s8oEPj4Tdu4a6MJ1xEZBTFJx6GRCVjriEAF89hbBizhRmCMeu1TS",
  "key26": "5wH86FFZaU3Cni4uSWsyW1QN1xqUXZ3AKZ3nP8vpXBgk9g998T2iRxe36Wxu9T3HKuZ16Gx7LYSsBC5NZvVqC92j",
  "key27": "3mEHPJpojiFq5qeXqE6ERQGLtKrGngrTWLnGXKdczE3XmKu1o3vSCufJbaAEqQZPQaR2njUw5V6XGhxV5eW9rjmL",
  "key28": "66SqZpDwZbY3uMh6WACqgCbX9hoiUb2NmkjZaxyqmphHhzjkYxnuQVoUU3JCJfir46GDLAHgm4UGcA21FQM2jPYM",
  "key29": "REY6L8RHS9pY3XyUF3zdkVEHzf1bHQVK45RBWZqQVKZ5p7arV8Te5LaFNxnHgumNLVeg8n2jxc8JqZ3XcYcyzLG",
  "key30": "39BWkqfmRfYbfrdo7zcuDpM3vB46JX7KFzmmBjQAMFw16ZBRxeVW6DTVp6j9iHvKLYjusXUkCvpSU5mVT52qGgyi",
  "key31": "3TBNL7LbFSVAkbTnL1K2CuhExGucUGAruoRehpdxxWszKy2jCB5tDAsSzYY4HW7yS2qxo1iDU88kSgrZXjor8qim",
  "key32": "4HRNBpJMjzYgdfwKL8TriSyMhSU6pykTEupevq8DBgY73TPqxoaRtiHjQcucJycy95WHSS4ET9Fp9TeFTZs4Euhc",
  "key33": "5pTSZARwZ9T4FMKEsQtbs6fY5LczSXVGaBnF4vHr6yEtNQ8TFCB2r6TR3bUGFXXkZz1Gy3nVdS957SPauXWswZD9",
  "key34": "2CEW1iSSiDU8e78nn7oGeoAw45CqydERvVbuefcVB583bnJQ2Y8u7feHb4roHMneYVNhXBKXUvFUs4eHTGyiUBAi",
  "key35": "vRePstyAaxRudE8v9YBY4NdGVryX5mbwpqYN1PfpCenLpZEpcP47v7FfMhpY55goK5ott8Zvt4BU4fo8YdC3ZHo",
  "key36": "5GWqDzrfQP2WmZw6edX4yfgA5mWtQKcyscLMWKc6fnvTjLno77jKhAeAT5eD1nqzkMzbHxvJGvqJhnrBC1AtfvZY",
  "key37": "2Skh4HVtNMiNUcEqNUf1SdXWs9zqcDcoJzgamAgbMRx55UkmjpFmkWAWHbnZ8Egvu9qqbaPX7JdURLDjqSErak7i",
  "key38": "5JEDpr9A35xuTCP2a2uMWfjbfkXgzSFYYZnrwCKfxuUBVUzzXQd3vVgXWDGtzFHKNVXCgUGR857k7MrVyLD1R8px",
  "key39": "5UAdtta4LH7DibVpVXHmdjwy7M6nv65d7iQ6mytkZEcyu3e25j9dEtjxNv9SdhSXKJbUC4MK8RHfBrkzsmtoFMAr",
  "key40": "4Un2sRm7Qs9989UheiWQ6UgQqiAzJEWdWzHURgcGRzubB1pAmfyu9wsxoVEe7bMsyDnFZun1yoeLjvbcADyjWm1s",
  "key41": "5chTQ1RkmXeteMYnRcNdwdT1fvQETe1WqJgYxatmWto1tqXbtRNdPWCpS6LjzTo4de487Z2s1AK8Zc437LJW1GBf",
  "key42": "5qvoZGwNiwkDKKyrd8BgHP6bA2hrreTXdctkZUgKceoFvC7wJqdTTFKTRRrrvEB4LJ9hrYw1g58zWtPHzpuSxDiQ",
  "key43": "guLMphFNXkNZGkLw9L1f9Yvqai7Pfnc3qQLGVVH6TMdE5Dhr2Wnp5V1XCT2BpnrJ5qD5kDzdzry8GeRSeWtxSyJ",
  "key44": "5jrTdt2RpJHujAopP6SWHew5kK2mJq4DcRSowjdQmNumFJrVQmGmJD8QNZLhei8j6mbF3HVu4PK3UX3SsDFF57b",
  "key45": "2w4jXfDHn3DjmJrWthESVniDXk61fAG5Ew9xPUX6T3r6G4bxjGLPqx8ZG32mx3A3ket84FhhvpEAP4RoLE97z4SP",
  "key46": "5rsmTRH3mcdb1xstM8NYVdrCNLwtGKtHFPbySL2uVGnuvzhWFzGZ7dKVu9f3pcJYV4hLBQBQ6YnS9bAkpyc8nLwY",
  "key47": "eUT9UntTu3F5roNZswx5wRDgxBW1taE7hdz6mgmeSUt7vrVKrz7QJvqi5gHAHTmfDQ735GRgPW7WKtpHzcRErbq",
  "key48": "5HxX36yi1krfuPvN1n58cdZyoqYoPuffJWTUnraumeoCZkhUvdy7xj8EXRPzprdvLh2YmsdbTVmT6jno6hB7RPNy",
  "key49": "mq9ZK3kifZgBfLUhbxAmBnPXbSDyvPSPzPxuWW5EiUHv9X2pfqBhMUeCWR8zRGpkJ8gsvKVfmECRZHDczenTCqd"
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
