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
    "39LGihvNFcEWcjDQRtJ4PYjEqpBxBk7hJ1SHoMHtHQx6xKmtxNMMsMRKwe7QcBD9R6CpoB5DvxrX45ugxBNby2bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hXfTJXxhiNnk8CJynuDQs4CfsKb1dhKyE73TKMVuoz1rK14Hx5xab3x9qNbC8b8FrfWg2CE8vSq7DXJTifGuZtm",
  "key1": "NmasBmpZE2GcUykaRv3Zq3y9oNsuiTmFBSPGzkfn9GmhMpMkZeXQab3ccvnBptK26oLkpNyVcjKxg1cewjJiSTw",
  "key2": "54zZahULardqQb78n95UuaDqcw9dvBt4wQqGVv2LPuzCnp7SWdgf4ZMrJ7FFqt5bYdc9Uq6JsYHStSCs2EX3t32",
  "key3": "36roVqGjKhqt5SkUaBpDzhxTKzmSFcXD69wbBTXcX6ZwNMHjyAiDBQc3pkmuVDKgKkmrTVAMFnQ9SKVyh1tJng7M",
  "key4": "4bkrBMhgLDMWyA8TByXLg1xcFrkgzqHGzHjHmxi53gyuWPn3Gw8vswTCCYgoBXmaaGCc5p7XfoMvSAgDGqUL6s5E",
  "key5": "3DWRMBFWNHQ5vJbt1Urf8izsz4MvxVpHL6wPhqgHWxDKXNfx9ZhDjykm5x46DUoExykHP32soufLZN2B7DBgM7nL",
  "key6": "5xSw2mWHD4qzZtYtih5fuyLPETYwsznwFuQ76CECFzUDd5H65AhMf8gpZHo9mGt213NGkSsdNTdnYGSoauUQoDZt",
  "key7": "5fH3vxYTBbu1VXAmAxpLVmaU1zGiFeaHeGgqkLbbzcRuSHfd4gN6FBe6o9XaAKXaTkHRDVabbtSsoKpAZCZv84S2",
  "key8": "5G1eMhryDuQjaQz5yrgbVbjGhpaUkaAiFnyjsWeZRugf1LtDRoWe6VaAMj29uvAfnV8Y5Cat413z3UAEb7dShBmH",
  "key9": "2R212SWasTNWTNQzGhjqKtLPwAMSFBxn7U48J47Sr4BJM3ZeLGGqX6AidNpgCdyzvZEDGbZhWByjpgEa6ATA9Zi6",
  "key10": "3jppJmcQRVmvfa7DF7ZuKfmQifXEKvpmRFT7dvGpXVZERJrqbF4HZm4MbCFRjzaJy38me6z8AXSPUsRVBH6wuYnE",
  "key11": "3UF21QvfMrY9rqbqhsSfbaBajKyaou8LyWM689QFW4W2N8Qq9xTZGytuu79t5YG3JfZsJbgv5NT8Vjd1YUgqGmvA",
  "key12": "2f4nveYcjAN4okETSmrU9fmL9zbp2dwaaW5nmdvz5vzgCzYrubw5zoBTsHuXADmUNfD26XJ6ejn8uT4CD1pvEA86",
  "key13": "4FvUvSVLZjqGsnuSUKwxhM6EzLBDVUVcLLbrBUcEBDwmP4hZcsPGXsq4oQZyoCr88XJrPF4jnwtci7Gt5Eh1AEFy",
  "key14": "5nMYvuC26sF3oG6g4izSQW4EdqehUwsQXoGm4c4Ck1RWEYoFDkX6pQ8zS2uSNqu6NPD3G3WsJECtwT3MrYVXGTH4",
  "key15": "4WEZxiwbQrdRqMbBSrxvT6X2GpW3g7RNee2WuuiHU13tf8aQevadGyyTox7YYNjMqfcivGsv5xzpTWqESomXhzYz",
  "key16": "Qq6WH5nzr4Kq29rn2ftmJcMoZvksB9uCueCV1VAgTVvhUTbcczuZY6rKScbg45nKU8wjdiZdD1JvQY9tH5XKr1p",
  "key17": "4EBn9FwGCNNZE8Xm29gkPBxfrwQScskG7T1qQHHx9ZSNpLWaFfoMMmiH8DZJZ5fYum4aAuLGyH1ghxSQ6ozrqNK5",
  "key18": "xGUttApsPjWKbgMbhLEcLwoW9R7YNdscpXzUWahk1hbFR4wooPBYmC5kr7vZpSax7t4HyHSTMPQ4R17BuHyAuRB",
  "key19": "4X6GWkMGVzADJ24pmPqNt6xhZrB8ooyNvg1oytXWZYHthyQjKcFmqpwE85GLBc51xH5kPSPWb4JuHfGMatCGGMN6",
  "key20": "5WoTTE2BVjmhtZ2UD1j2t915t1HApdjeqMXjcN5vjat71Jbrznzvk2ngwuo23oyfNts8FfVhCDQn6wQrdkD4m6dw",
  "key21": "2DxkBrFgpbuuAcHFKNVV6CZofwgPHs2G4ydWfPAkgC7g6ofNfLrEXBGREYCMg3bR5Wrz1eLoJeoo55BxqbaQiGbc",
  "key22": "5LxiJ7yTsfyCQCmSHVm9KkpHbgLHCrQ7yMwHuZB8hzPdA55aW52JGheGVDfVUahCxXfdgGi5gg9ubJSLWuJbH7bw",
  "key23": "553Hue7ZAzDnf1mfJve6yNJ4ArMsNngGBudbqF15iY1KFWnuHCqr2mMgbZjQnMDeMhWapdZuQqqV6qk662LAo8Sb",
  "key24": "4rXWbUHzZk8okNeoJCkKGhiYjR2LUZnVNocDZBqvrmVtfVkyWVGcY7CdEsTU4RG2vxN436QjmVrm4zePUyG8Sgmi",
  "key25": "wi9MMMVJ7DxgJNEJABryd52mQWRp4PCTrGFAfDFaypojHKpesvKgy5yMaqMZyrvxaPfFH22M1cmrhFxc5wmLhoF",
  "key26": "5z6BibjT8orhmwHaWPXRKyJrBZf1MQnz235PuGUapPpK1xbsDLEM7dkcjRc5kAzbCGuB7wA3HfQMvmooDniK6L5u",
  "key27": "7qBNxNWZ7qBbx2fwDj9dy9UbLqLfCgMPS72VwdXagyYbmtZpmjkQ6b6RUDgnN7o1baU126r3iqWKsxY5JVw1nho",
  "key28": "5UgAFT3BD3ZUp7jgWbCp2JHspfh3tsgiAEdwS13VnULwf4gZPbSJVvbuzy1naQVTHRjL2Fz9rLYkxPJ5PTtRakFy",
  "key29": "4A2K3LQJc51smUxnYKE4y9jRmV2UQR3wtYXYZLvLbTp6QCw9o68jtHkBzXJ3peErUkNeds8gTtsLiZbqmocBHhEV",
  "key30": "2kwvmGakLkDbiEJiSowkd6eUMdvUd2kHXC8v2Nrh4yDHYxaRHNYVEJ51F6AW7on5zuCTSSgtn8GwjNveapWX1PPf",
  "key31": "41JkSe5puVEQoRXzg1DUmZr3NoMyunGuRqW42wV9qE67ru6q47KMtiVYsugHVgThFL9LRLFed5WJQRBthQzoLVKp",
  "key32": "2Q2qsUzaVjfe6J6uLRgndV62hzyGFiwktK4boBE9MPXwr5HQN6m3dx97dEzNg36fAnDWbmugib9XxD5DpcJRFDZw",
  "key33": "4NYXwf9PAo8YY8hJowqSXR8tTbKJXtSVkhowGpnQP5Ukk5pRFMPYL1GCWC35hiiZ6Vop6davgtFk9mJZfLuzVF3N",
  "key34": "3oN3yXHLZA1Mfg7VoLDe1BQVRQzCMJ4pc6T28CYpgyr3vwM8QAjypNt5H4jXeXKuPTkN1FH9c7RQFPj8nHuxGPmJ",
  "key35": "4FgHQrwYbBDPjHQt4FHejZUBtqtDDMfbvE2ZWPcjXzh4fZstBNc3PX9GRMKujyGpEJxfCQiK9DxBMaAyVSGnwSK7",
  "key36": "2hX7mTJcKXbnXQbdKJbAwmANAgjN9JPaLmBDr5dLTkPwKK6G6L64QEbhGs7oxgm1hfcSXha6TyktYUP5ZNvKi71G",
  "key37": "4C27VZ2mbL1e3q9ASQd2oL5xmdaWb8Q63F94S8NbEDV7eLcwkCepjsJEFQbnjtv4iQwS8Z1FUHiPJC89vtPKVBJL",
  "key38": "66XFpf14KotwSZzSA514RZJJHCyXmvoWMsEde6vxKDXycpmAVCx4XvQk48ydWWMoJn2FAdLDFYaWHsG8LVC87LPF",
  "key39": "4z2bBH4Z9NJjN35BvPLQ357t2pRMsNnAoC4K9qGueEkWPHR9KomieFZYvxtHCesBjp7XUk9sC3o9GG98XcfMbyNF",
  "key40": "5kH9bZbYEC5fHccbVEY3L64jGXmnhsoetpQJBQEfJjLDA8GgHVXkPYgvQqgiX3yB49w95sN3JETnj3ew9RqkbJPc",
  "key41": "3m93CMJcu79SMVAFuNNo6rdhi9ZuuANquW3BJgK7JihrHXf5iPocWzKeFBejXrPbPe2pmgiwtUMg5n6cgEasxRth",
  "key42": "2f7FTUUjE7Ea1pLgytQk1j2BDqnyqKaypQ1rCP7rBK2N7SnkwigvCFxuvXA1xox6aB5196eeWTfxCeJW2DVVJXLA",
  "key43": "5RhcrDZYjSiJrmNkdZybXerAcdCH6dW3ZxPBqhhVBbMRJQtxok3PKzu1JMXXbx4T4bDq72h6dFzbENip52q68rJR",
  "key44": "4B71KBiKKLfy5xQVfAg1SJxSiT4daPdEefudgKydwxHPrjCgGqob9eGpzUc4ufEpD7uqJnxU2Ami5QZY5Dn5HkiQ",
  "key45": "2J2f8sXMPVNGQYYmi8mjPPMG2UbEWFPzcL4GM86pQtFTXZVr5scF6zC8cD14qTPMMbzLv4YLYcfBJPbPW1Dh91Mb",
  "key46": "45SSnGA3ACrVRhRy178oBTVFKaTYR49d5TTDqJsMGo59hVdLviEXeDKhARxVhnNTTNrpZDCV3Ny3L7XN3fqoYoRR"
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
