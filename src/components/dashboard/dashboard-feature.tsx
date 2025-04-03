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
    "5VntD6cs7muMoRSsWqHhkvNijykSfpPZpHp4rTH8YSoVf5yhrnhdmi1DMQWmP1EgbiipuUNErGiVkbtMhpZrbdJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeG6kfEvWQyKu4zFeM2p6F8GEyTNgENTccuDZy5UBkjeXqMEcENRtJsKfrSmkwW13RwkZEMw4vJKwGjcuXmtYk7",
  "key1": "54vHr8bMMtGuVCbxNiBV6NiDXg7jjDAPc9qQLPMNAbYbpXBUh3hMPeBEzRRKeMUhdejgxm6hfD6aPMxrSXNRwucG",
  "key2": "vFdX4q9nXbTKpcwaAHJah8FbAEpcuX9xgQ7JZQhHqDmietepsmxdC6goTVPxkdQZEB1RNeM7ZUfrPXfiRkTYXUx",
  "key3": "5yduYdcBoZGvzEhWQt2go1tbseTTE4uzm4v9CPMx278TdJ97k7RR8QcmGx4bPQeew8fY4B9iNkPNHyrHUBHz6Vy6",
  "key4": "4fDRVKDVB1P4BHLVo9kNVMEn3tYVY97vazB39nqcLuvd6NYoX6H5dVhaGnBK5mqJRni5Mq8wFh4TGUS5XgTQPirx",
  "key5": "2LHN9fgefLx872cVMFX4pQS5wLAxbTQLD4cY5XLYngTuAaZKFBFDL8LTNTF4R2u6SUXG3GkuEwEERwSuvcsrUz4Z",
  "key6": "4NhAAZmK5p9NeTQbP49pD7WBSkBqFvvYUNokw7fqVQgbhE7TAHt3qk4rTqU2bijwPEAPtmtofMm2vSQmEc72XwQg",
  "key7": "61DHmtQ3H69S75tfjnRNWivHmeXLRgPAn3voKz76HGdeRBjRaYup8n3TGK6DCiTGqvQv1iQZDYHumgEyF818BWL6",
  "key8": "43FW8DzvdRzm5cfbo5B7L3R5rU92smR7tcBhqYjxRFKHwdEdTqutT1tZXnin3vqdfiK1T3c1ZxLRQeCmEdr5AqLM",
  "key9": "4u4fSL4u7utKJeE9rSQzVPp7SDR6FVYZw717GksamZ3Nd3s2DyEULJ5MadSoXjEuTgxPLQTEv9Lmn4CFR1T5ZqHQ",
  "key10": "3vbtnUJ8zbHsndr6DNbV5bHiUA65W4M9U3JdpnMiTtZa52jAynT7RaMcFCRieJAwrXiZs2UmMHQxA5v8AEjaKwnT",
  "key11": "3np4T7Zb5LQsgMC8gaD8PQZ6kSdHWhrPJYsEmhSVVn1pHjASK94e3A9cGjpcg42FsxWVLeTJd44pjsLiSJTZWn7E",
  "key12": "32CeJ7yJC5EqVzEFgtSvQNuM2rYggLqMn6jQbwueUPxq8K2HuKqdvyPgd3257aoXuZe7C1sojCRoAKcmEHpfUWjH",
  "key13": "2GUV2SExqxbcbMmYzwWjMyPYn3RBKFX4r8Rp57QSqZ54NbCwKHM8bZvqtyPXB7UdLEM4dhp8DcygXCP1eqKp5Znv",
  "key14": "3AUqseEPjjSqCBz1SJU4MD3ZXWvvSwxAnoFiy73YnorhdjKNbZNJUSfFWLeQi3QFCQNNLccBZhxB3ekHLuoxby4e",
  "key15": "8CiRbCndeVaAni4pNckyNhrfxofyRBwbK4NDzyLan4vSjgqJvsqFaueh2EMY43B6BUTYj5zFdgfCPJ57nvet2ke",
  "key16": "2XMbuphnyqzJw4ZwPaCd2psd1ukgXxfCZS69vr5YciW6zXinuhUE8bHnM6VJQWyfU92diJsRfSnNrS74BKcq5aCr",
  "key17": "thHkKKQaN8nZMAQkZS5QfSVScZyT85oFaEkbmmuGByiFkgz9TuwuMkxpRneG7PErkAVtBd3yq2W6YdMEVv1KBv2",
  "key18": "24rZZ4A4fQwX2CrufB193mVhxs4ygRtYC2TKr7Y9AQ7DqH35QBohdb1K9z45WMU3CwGXhAyudQN8mcQs8yG9VEey",
  "key19": "5ujyrhoR3s5jb17txfTLjUcfRMMeSENb2ZSJFrfc3kKitrAr6ErsUzWzUKYRPxdZb4Cx7TntodwcbqjNVp5EuLWF",
  "key20": "3f5vSNTksu6Sg2q4RpKPGpSPyyTjRrHK3b3bPqnTowJH7gZCcDwnxZz6ojneiNwGPd6Xpc3H58H1wp8MEeqyxjug",
  "key21": "5zrZhuGvW6CQWsVqNQe183PJvUZMPaPQXqctiEjJBvCHxKFeoF2RNHgoeAWMBxkY6kBT61YZgRHiquFpoeFEb3RH",
  "key22": "3nfVFTw2SEVJj8VK7WrZhQycKMVgoxzE6ArDtR6hZEtXsuY5vZQ2drnNZmnSoxyZyARdQMaVqNuTY1wpicoT45wK",
  "key23": "5xXJpyn3Jy1dMvzd4Ane3YMLyyYKQrnGXcv8yEk5k7AKQm6coH9jEi6i5gm36LGhEG11jNWWPzz4wiZ9apzv4odo",
  "key24": "2BwuVN5Ehe9tG94Dxq8b41oxjb5yAfFDGHLa1BbdyCyZsXhGdRknPFQ7R2F1B5XYSETo5XdmKXWdw9TWxLHwk8Ye",
  "key25": "25DGBb8sW2umvzGkvFAmnFd8bXrt6PX2YkMvf1q2fTTdkk5hR147zifBebVYxjEppHS8GLVSsUwrXNuYRyJa8pCb",
  "key26": "3jgv4AjRuzFe4k4QkdbMpTLqhZthhBq16JN5Wj9cxARAZLcWsX6zz84mi8B2T4SgRjs81zTovta8pJoQZT1NGigW",
  "key27": "39Mzo65ThFvsyfSurcjiZfj1ega3Mke8MujJTVdNem7KG3nhpJbGVgcsxYenrHCS241eAMyPzv2xQPmdXr49aiqi",
  "key28": "4N5Vmi1d4AxDGFdRRinnytseyD23PPRg9g9bNNZ44iKY1zvqiXhJiovNnYeGtEemHbyuEyPAfLGYgzwAQnJiCRYr",
  "key29": "4FQjQpwdVxeJQzivLHncxrpUjuaqWwJ73PDnyp3tUgFayt9NaqVr2K2XjkkFWxiUDr33DVnmjVzsuuiTa9f1etRq",
  "key30": "3PkkbR6FWXNqb1waQa1L6R9YdqwJULk1a8A6VZ6nu2YSXyxLUSLQbMCDEBspzf6m3Mm7oWXxZmhDJXRe4KXxiVe",
  "key31": "5Lb9isS1paM4ZAZh17Ekz6eX1vwUkJiwfHWnWo4Z3xfoop3FmtMktLnYoN5VbaqYgW9gkSLmZtXSHi94kTpWdPRG",
  "key32": "5b6iwje7BHxkCi6UsURHCPYPid51EGN6nevFEYqTJACKqpYAcZxz3KtFqacd96ugcucJ6LsSBYZ83Fht24YgzvF1",
  "key33": "4WshdC9nwZyQ8nuvGPzH6Hi1qWtTacT2gNEjdvMKmNKBH57uQj1XotvDnxabQxaKHqdmQgwsnwBUmrn7Z4R2Y7mn",
  "key34": "4jc9E4a5ucB2JaPqEVyPq4TAo7uaMvKDogAZ4Du7m7MTFz9dr8JHptB4zApKrKMyww8oKbJzNHWyiFW3EoRgoNjW",
  "key35": "287r8qcr3J8zgFkGvaoCsqbyrGBD8SPnHgp8vu8yye5vLLsDbkAttUwR9BuWbAvWdTYS89LKg1LFL6jf71zgRRPd",
  "key36": "zjuxTVAv8AZVkWn2v6nBRk91rx8bYhXTWB3Q2ZNvK45oBzC5aMABNNw9J6mcbGfmcSG7RDnxiUAZ78i24rKTonx",
  "key37": "2sZ9qeA5jkK2nu4n2qiYUcg6s99G1Xzj58kdRP1STLCX2GV3r5knz5W4dswyCPBMJtGNHg2L9sVPFpaMTse6NVxc",
  "key38": "2FMeeFd3kHwqgd8zAPiznUxNHj7zNvEbtCPi4UWvi9QkPEJwrG9eSiuX2TMX5YCbJGxvFAP4Y5dviDdpF4c1d4cm",
  "key39": "4oMFhmLK3gXrdRKrTC3Q8ww9hkJQntJGDXVyyyfEJgFKsc4cQuJds2QP6ZMxK8koJAsNcBS3CpQSfd8LZMqXZBDE",
  "key40": "2MuXZe4L2ZHyCRoBwHC8kYMDVbFptV9XHKM8qN478QTqhD2b7YgQw7ix5zd8x2bJhBDQFKgK9cruZu766tysmZg4",
  "key41": "4uZinQtE81uxviaBZBXKTYEAUkaSZgbrpqEytqRz7ddJqgYHKL8eD62NWdXchphBeFPUM7URzj4o3SzvxD73VUV8",
  "key42": "2qRH3cy9vyqsLopMUxtYAiBtXY93Bp4U9kmRiAePRDgyXY3Q65Re8bY7KjmjppXNCW3nvhdrcw2XRirD9GcR8QEY",
  "key43": "5ETJavUEfbZ1q4z9sBMARGnLm9AEVrv5NbDZH7taDBXZHrKG3MJCTo8KRjAcDDJTcniS1rQhp2FTYDkzs4NsP64n",
  "key44": "3RHBMe4oL5ECQShqdDzQabfJn9iwikeMPKHDDNjPP44d1zsv6XbJy8uXzb5fHBczkt8Qi5s4qhomPuhvf9rgnk8L",
  "key45": "3QhwqeSKSNdv9hRoGLtwjKzTffddsZqtQKp14v1P7ar6gujN3F9vv83fwBDYEuuShc7Xh3vqpJHKbiSnVjkJfANz",
  "key46": "3we6vmGXKFfHYcRynSvLfGj6yjx8Q8hSKCXw3su9ADffqcRRcG8vcypaUE4sPkHRQ1J12p8S6yo1VPp9gJGygxJo",
  "key47": "3nWiX5gXrTR1Ghc7qS9b56Taw2xxXkVRVFoFyubcuhJSYaUMsa3vd24GCeoyMJSU7zXeDD1gT2HDK2ZJpadm1j8j"
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
