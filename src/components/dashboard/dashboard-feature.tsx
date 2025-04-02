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
    "3YhoTFWkByeULUmHvYYFCXjsS847eUjDs9p8oYVERSVYSxidaKcwpw6Xm635GgcujYEP7chfijpwY5LvFdtzrYWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8V7mv86qosj4snvRC9CJwaLMx8YeP5ricw62WV1aXewpmVTQtauj1g8Ua2nrZbsneLir5WKNGWWe8BuG3uyesAa",
  "key1": "4As7Q1TyjgUpxmgJSoddTqWhpwKxKdVMAuNgqXpTUoLAXgmjzqo7wtE5ZRRwsssXJa5Q8BCfUnEyjgkhwTBaxcEX",
  "key2": "53xWvzLux4n9GMJJa3HpgSxJPDWJZwxHoNxvC7xEMfr4DZSkhK4kG3qxycrW4GgX3v3CypdDSDYBGuc5ndifJW9c",
  "key3": "3jmTYtwWTDLT9GAhH9EpfUbHaiQDLsSM9nJRXrc6zocFf91ARWSkuqH2UiryASAyxtZBgpSvYBWCcWrgi8YfPc9i",
  "key4": "3Kg6SY3EcmhQFbdiJGNr6pseo7aTTvfTe8J7JBa2z1g4o4nCJAowB5GdHo8kJHM1AgLoiDdMuvUT55BYccESQiAC",
  "key5": "Q3AbxXV4u4YkELqXQsgHLBgrXsqLbnGodPeZbQi5gdYvqYwhjsfSCEc5Hmr4zETqMVKJLtmHd2NiShMDPnvtXXr",
  "key6": "cQJ6eYTMoy6SowHCBo6M7Gb92gYTG5o8qP4NieL2pVeNaAWsgQZUvN6t3SERs6DJi1LvpSaGCP8DgSZTV67STQ2",
  "key7": "4UPTqQ3sqj9v1U2599uz2TzaS65Nh27EeFiET5K3KBNSjMcQgzWQxSKUjFWEGJpzDbJqqmnYYWTc6xS1cG4852ry",
  "key8": "5N2Z99TUpJPi4qkcSiXfume4fFDSKccJpbGj2eR7W1evy1Tdh7Vk6hRFEoXkmqDc6zArDAo7Zg6jcT1urM9iMVoo",
  "key9": "3FvLqBJ57gaPSNWzUZXVakpNbHnaFWmzhf4pwiZMtV2JKmC3SGMZohBqCMCeNBdaznSu8Hp6CvaUmn4LkfQLuUTh",
  "key10": "2yxAagU4aRthQNYCAZhJKi8ArJJKefxeTKN4aUhC4DnSkGsQKVPG4NH56hznEbf1E5F69mySiVcfAeguFouidceq",
  "key11": "5FCJG826RuN2Y9sVF3K3Esi8oedVH8yuYBAcDEMramjSTkq57Y76KTXHghv4aS9MeRq5tAKHJvcw7UjCZjNYAGKU",
  "key12": "64jSdPQmUkFqZnwhcgr7EeCw1NkAYs3zrU77sJw12SE7nVPQS85NGUK51ECp2iVmzqZSTRsgCJeRnBn68fzUNCtA",
  "key13": "5AmsR5BoW7pSkcXAZ6xB2cvnNF9mMYXwiQkwkX8VMNZeCfv5P4fDp877vvSgbrctYpRQkHABFfbTKzD22hxgzcYQ",
  "key14": "3e6Js8HYfGCnFuhsfrLbNAfnSCXqoZZeZsh4X9gcP2bXCED5DUVvN3ZkhzELXeAeNP5w8qxUCvhKTLDtcvpTjjfy",
  "key15": "5V56xYq9CKcGRVDXZcYwUnurtTZ7kvMyX5reCUFqHJBHACDYdaQaDsdUiALCeQxcqYTa72hdNDiRz1Ea9Jj5qgEc",
  "key16": "432oQABG1D7wNNycQiBQerwiSNYWAe9UJ3zFYzpDpXZXme7VVwsq9vLUnnwDvfpp8XzJhEobWgNPAhwSyqh23Bx",
  "key17": "597W93CZFpbh3HWixacnowTvEBXQKV4JRNefFTqk8TV361WgVzwXCWLb3UjFXLSAmRvvx3gVTqLWU5Z8rgC8ArRb",
  "key18": "2yoCKPxkaQVFAwMiS5kn48xcKMXpoWim1jTCjxwDF6ffZwF1ymeFtKpVsmxyZzWfDFG6cZy1vJkAsaKHZj24asXQ",
  "key19": "3G62ZwgeCARvrEprqzCms9zWxNnyqzYzoqZWwR3YjKdg9rYbAhL2BMm9GfxZJ5DosmqZUZHSN28MB2V9kL7edPsk",
  "key20": "4MQiyPeb5n2VXbTqFHUnrbfqWEaEnCj66sByupKax55BTdKYF7wfq23qdFbDpj4jEZ6ChiZJ35rLNTEenoKqn5Zc",
  "key21": "21nTG6wixWkLZ1dVSdiS8zQNAYspgikoBFWyvVe3pyBPQqAzRduBYoQA4YVHbyHF62QHeRKVVixpskAByj2Ad848",
  "key22": "23UGov2zBSoiqGNnzr4ofwCDP5SokyLYyJJHXJzxJGyzzZSTExujbgkm6dckzLx1KY1WA11BAsScLWs1t2W1cPJt",
  "key23": "3Qhii4ZBvujYZTQ2XawvHffVyU6CYzhAPCpWSnKb4EB4XgX6cvKMMXpRm8jmbG9HKxpcQBf5gkNVJxmrvPfGE8zP",
  "key24": "38znu79JDx8o8gcKpoi6jPf3ncXxYsvbz7BdaBb8vhkjLqXRwF3Nzk74XYw1pfJqTw6SECP8rCkVc81PFvix77jJ",
  "key25": "4D3HHMXAoBNyoSUswQ2DoLqxzsKrbc8PYPefLYwM626A4kKiFyTjma18p9euiJufLRTGcrhnKdXktzRqJa3b1E6D",
  "key26": "66oefbYAYFmPPiqZq42vnNnJmVfBct9gny1XFpXCGZcbi1Lti66khe7Fp4HQxUhcSA7oiyw6rNjiNLKRgvZyWKDT",
  "key27": "5L2vAksTrRo7w5qdFwLfrd2Vv5fWgq9UGB7FRLBEoSoqoMV4qdJdQVJY8pHpQjWWYbcx9babWfRB48NNuPE8Wu1D",
  "key28": "uxPMWudze3ZUv1PTp4VeFmLu6TzmuPKmVaKtkgMrnZ8APCyPPt3AGMyE4BeJBxKqBN6zXRF6E1Ri1EkFrxpdoQV",
  "key29": "2eWq22NuHnwFFJZbhs7jEU7UTzQrAsHdXdtoRjxpNxsZCUGT29pbhKL6rczJQn7yBqYTCUAYaAQ36ubwtcQq66Mn",
  "key30": "3F4GsFTzF8zWQx8dfy4q47uezU4iMoKmi76h6o61bhWSDjZD8NoKyNwXRoc6EVv8y3SZF4i3VfqBrACyHNW3kcEj",
  "key31": "Cfxx35FSU7AHU4UJWbEdqnt5CCdb5PZxzPvuFTsf7aD3UfVkRmN5HdCjfkXst8Ki9ibiEWcCX4YammrLEBCHWqn",
  "key32": "31PXYkFbqP5HUwy1vayj2LVWSxkL4VdTRZ7yjKUgLXS5imvarrkncsBL2JpZLanSv6vgGSqQRK7g1sfboucsdijS",
  "key33": "i1i4QqAAoicknm1z2BLsFtDYcTWScutRHw9QrwLWmyg9G4vBn5fk76aNkXdgbNF2hKEkpJFtWPkjn5G7ZKNggpK",
  "key34": "4Umxg7AQwB5u9qVY4zeHjSYmHWQBvNQ7HBH433MiQUbSoCB716hhDbsxJcmTZtjdNzCoKPxE8UT48c7AKShgTaoH",
  "key35": "59j5CMhRG3GfgCBCtbvsJKpF4Dq2X66Rc9d2ZHW7LJzK5WMZdE2gahDvaUYpoVP1tsmjHEJVh5Jfd6Tk6hqweZKG",
  "key36": "2kTd2gSDz1TAUDimKU8FLrCQXkrYDAPTNU2qX3PbetuBs3QeVqpNy4ZzS2L33T17cBrhWoRPXBWgExmiVuB3grSX",
  "key37": "5LPqfEcredY9VAvZbNFJhQ5A2SMr2Rzd7JBjtmwwbtF8c7htqTcMYTz6powpC8JBGnMLCFiXTH8zWnHcaxb84RhR",
  "key38": "5Pe9H2jrF4yFkghMXk9RmYTLmNShQW7m6BmFPYANZwhcbKB6MVXZ1FRTxuRBzc5ssyvyjzVoRkv93VHUgg7GFWw2",
  "key39": "5dwYeWtB7xtpfVNojzCcVktzWJdSRPZ5zFyDLeyWvDtGqFeBfqYajMirb1ehS9rCcxTu1CRgSTUc9UK9Ap2qMHHh",
  "key40": "4uf42hfRyZP61TaB3pibCX4evHjVQCFnb11JYahxga4e85RYerFUMgsKZJr791spdncLVt2nYyJQru9W5StddzXq",
  "key41": "5PZseQpmXb4i5FCXxsoSGB6DyKgg1kyqy7EUpBJJRvYotr9u7SRJyWZLfHeSNewNWvbZKrxvsEDUy2bMBncd8Ws5",
  "key42": "3cCv9gGEACyYZSKGvosr4fXiZTLxhk9LiD7RDheSDHrLbBrvUM7ZQ4Yf1sj2YyteoDBK8iLgSy5GWi3E4bRxQixF",
  "key43": "sh28KB7RHLAkZRUjJpkcRWgdZjzWiotq55SDUog8QKurcso5xpPePwQzRH6wt6wqmvh5CHPpi9bFWvFZAc1YJk3",
  "key44": "4mdvKDwazUAdcXXndLnRemZ4t8mLR9BqxdGp6NfYA7qZpCnVJpfRc91YLnXxgRN5o952r9PZfYMkwFrvLHMn2iL7"
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
