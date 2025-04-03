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
    "42Q67YDQEm8DNxXWZ5gvqBjnRs5X9ibWZpfseXiPP4jXXg8VpiANSEuS5gGBJmNhnFz69Rz8RUMjTwfFwwe71qBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWJHKjuvNxBYhuXRPQHs27NxWFoshseNYa2JNmQ2PdYx6QbMYP8VhWyRgmdNG3qreGeeBxHz9dFeEwJNTAeE3N1",
  "key1": "4KkYQvJs4m2JwrX5dg8YXC8fpkecSRnCMGRZ6SpUqPBA2TvL3Dg6R7CKsfaAWCm9Gpr6Gz9NPkxNSW8xZZC26xLp",
  "key2": "2jFUEvoZebVoQDSgBq1rFaQrXEr9RWMnijJJVVihZkCrKbNo57cJcCxWbvMgY3y8m8g334dpNaGyWwzc4tV9G36m",
  "key3": "4vdh6pLPyep6A5AeLW5DXwKgZtEVuig9fUPmMnfK1XzkTq1AG8fc6cbn7Bd9FvtYZ81iL469rskRtW5THceE1bLR",
  "key4": "61efA9ViMF9tG31dzEfT4Dcy1SBeY5itVCogeCtpbskdCqfF4u6XVocvEznw1EmEEQ5ZzEvtXbFtWVsqPMPQv6JS",
  "key5": "3AH1Ss6y6CQFrZEEGBJdswRaZdHzhNrQmGppJhVRGinZgPBPF3wp4KdXgy1d3s4sLTA71ELMhLYpXmJBpVwiry8m",
  "key6": "5SVKmhLxzvW6St2BAvmTYTR2HH48PeBZyDL2t1svA5hA8c5sU16tGc7n1MNGvkhcrSgr81iwqoFFsXHGDm6U2RbC",
  "key7": "3ZJbCQ1bLGjEAPggUUMeDF88WPSpcFiTcYbVQspfCd3cyVyCqLGgJMvbjxZoB2gRhZtJDFLea8ZDzMPgPC16iZa5",
  "key8": "3xanvMaELJnHDWvxhkmpp4k2qPZWKLZtb4MzTKFaCs5rxpFNUgD4AKrWreH7Jt6JBASr8b2tC7pySRpCnVWWcQPa",
  "key9": "5P7AtY8AJyxyDvFxj5oRJLyrZ98XZjHMTRZDBTJxaVVdEpwex88sYoQo6W7vBw7TBHSVNNSmxH6QNugnU35Pr1L5",
  "key10": "24BvvbHjLFT3C8Mgnms4p75HkJvznWfsA2agfuhMANtgKnQLZgyTrSY1sPECQTqj4YPmmoRf7DKMZzwi4cDfuyeQ",
  "key11": "5Ygq6Qkz4cFG4C7oSfsUSiwjwF4uodePTnjWB7YHGehrpxXUYsyY1XU4c68NHk5B5EQtDtAtkv29wAKbzPRg9o1S",
  "key12": "ccDJWC67GVFWfo9dssYRnMY1t6fNvy3zt5XEqUVmVwv48H8RwHXLTmhw1jfEMtV3d2hmFQ8CD6vxuC3MoRcBP3i",
  "key13": "5oLQaKm1iLWM8xTSRCUgDMV1PJABaSsuLuyJiiwDUGnm5TKxY1RpB2NihnosbBT5Fj6rAbGfMc47T9NVFGRvg4mB",
  "key14": "24MDJbz9VQjbw8og9wstU4D3pDEXCeD9CysK1g94zn4VUFc9fPW5SAZjw8sC5PLden5RB9HLqdqDwKoajWGQK6pM",
  "key15": "2tzDn9wmDsCa5dHj7rRLWWkHfjo37L5V34QgSypox2hzz8KLw4Pm3c9WmRgek9MPUfvpfTrChqx4oCHHdGEndxGz",
  "key16": "22Uw1DeLwuSRCtSzbTXRLHcSvyKkgGyebkZtPSxdg1uSu56stPXwFemAJSEzyXdXkU28WdBFrUpPppfYzGPmFXxd",
  "key17": "ZvpKhbP3PK3hUXmH692dkRn32C5R4nFXjCuQLABLRaf4bKDpgoY5LkKdLCqLmRzVghgeXR8jJpuDjg1C3XtnTVZ",
  "key18": "FacUFbHiCasr594BZbyenqtXtBPpBYxaPdo97e523hVs5pgkfqbkzcNrzzzXPmKrSh6HaUpVFXAU5iZ1dZEsoe5",
  "key19": "4fDcTSykHuRvbfBQfXX2jTSa1sRCmPEesSxjHPdUxXttiA3fTMbXZBfuvzgQDvTt3oRQqC1Hx62XBLUimqCfYKy1",
  "key20": "3b4wHquMBNUtHrbgNRfdcPmH12ywcdyWVqiZHwCp1SS5Mi2AesuyzJNHuGu9QAcbRDWBfUndPNd94hnSyrvZ9nkW",
  "key21": "4VuH3Jsjazk4MvQqFByhrvKXQYpSfJhG1nsPJQCdZ5VMkHjxYNeSgUUfP9LHdWws14FcTEwTxszTfADsdJV3iHM4",
  "key22": "qE5uLVY5t3EfMZqQ4oFEYvKnXwWrFHjhxfah25imoUezZDVM7gZo9gcX6g7DKpn1y3dQWrDuPDB53aidhqyw2BV",
  "key23": "38F35LE8dqpjRuTSCURje821h8DxwVj18qwpGvpQnruQoC8BHwY4pxekUvos4R1SwWNdHGiqQKNt1gdArG6mkTtU",
  "key24": "2y2qFzofnZaYH8a5bRD2c3cmQYTrY1Uhm94HZXzv44pYDyAenqBkjBfUCRZgVuFKDaFoRfsH1oWG327qMcJEkqfH",
  "key25": "4F9sxsnS1eDEYFsvoM979UbMqU3kezGbT5zPhmx3xXugRUjw1buhjAACMAGv4KYWyTZL2SbbJPjV4qyvyWB5xYpg",
  "key26": "2hhV9MUH5Fhe8BZX5dyhwVawydawj8oPFcqfrRTmvhWDzhcoDaaFUNBLY2Z76LmCF2ZnDnuTkgboabpsFMSgxe6",
  "key27": "5d2yA1WihavCrvQetBPzdcsG1xfFNYPVW4X7RFEenzmsQSA4AtTEkzWfQxsk3bPyhsLVp58AVsZi4SkABbQHg9tX",
  "key28": "y76nK9FZr3C3AFp4JnoeVA3oq3rS4NGRuYxeYRkJFX8ztXeqhL9MDSBuvS4xTNnpYVgoMNmQhNhchaYZbyvmF2s",
  "key29": "5vrDqefRnotrhUhWLZqGjiQZiycMUWJbqz4JTsqntR2X8T3hPSmUWdb4w9CFrUT7NtPR8GDC7HJj5qRneTqEvVid",
  "key30": "bTLjWmbjCTJreoTrUPUWJXPQkiVx9q4EAUoTVzrKu1nwBs7A99oMqZxdcacMbtVN7M91LTGs1J3hXWFoT6f3DJ7",
  "key31": "3kU4JmdbnEpjDzmigDHjLPopUTXLHjXwuajsqCje7UZa3DsBpHgboeGrTS2DMUAc81Rnq9s6ZWWCwQP344WAFV1J",
  "key32": "DSpxTbzaUCK2e5haoraiSRR8UgcMKMcHqsDAgVcGNH3qeys8bPu6dqneXbXwxZm1aV7HS9DAW3ovqr81ZJ214x1",
  "key33": "3weBzFJsJrndKhFNJNJWF4yx1sNfq9r6Gyb5SbYEj1cxAKQxYaQaHkc9nqoDvLdYiQdGuuUrQvr8ELujXzkq6Sq",
  "key34": "krFZFGgXm588jfTKrgCB94STXUnvUCJmHUXhbi8MvXA8zmwghaggNfYEd9gYBnazjVDUqjr6zFdoQTFXuAahNPv"
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
