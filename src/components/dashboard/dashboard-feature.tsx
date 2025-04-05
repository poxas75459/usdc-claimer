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
    "2RmggqpVg4jVnAjDWDR6WETNob4e7KzydJEawWtjfnpspVfgaLftbpzSq1P4Kk2Papz23SP52mZAgtFRBKa6QcGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NuQKrsNnJ2nAksniZtRxyhvP8SyKoK4RnZ9nz1CCRY4TN1Qbnc7mhMenZGVtCTN5DVTXLUMTUnWjWYxiFScdGdF",
  "key1": "3MbDC2U9L41rjHCNBtcofBXGSqwcshs2zFFHZgGtuKRdbheQBXLJJU8PMjbPiqvuASMqexLS34ELC5hE3EJUFzxT",
  "key2": "2KqN1Yci8EziLGqQziQrbow3kLuq91kMMKo9jbtbahUwdodmupxQNGQPizozDSSp9GZ9kvNuVtob3GYeEiPpxnHB",
  "key3": "4ijrzWzEfg8NQkv3AMY5tB5mSmqDWaRji13sTTqYj5ASGqyJgNDGM1U5c7KKMkdyowUGtfhhGpxTnNMbUrmtY6M",
  "key4": "2FahQypeAWAvqe1hswTr3LRhbVCQpP7oHWEEf58t19VJajyqsfvMkBQf1Y92iUhN7NhAFir6mhXCGxrtY3wr7nW",
  "key5": "3EKdwgpJaMinNUnCUfALQWQU2iNqZTFFySZJxMqWE2aZ5HyegpvXjjTgQbYdXqAwSTXWzFjM6qgy1N7kzFq6zgFv",
  "key6": "4RPao3Ycqj8WjUgastzUtEbnYgx7tQHSqWemn4toAC3bDfwHNnkX8ZvYcDXT3XmZ2QYBwUwt72J19jbmDvxkkM7Y",
  "key7": "yZKuiMHmaApxoBSCmYRTPLYna8scAEuKYLWwVPuEUfvNnKYt7ipX1hM9MNPBsfxrehq5sYCt4Ytz7SHFEi4nsrL",
  "key8": "2FiJwj2XCt9avmv4aYG3hSnWRfkHVpQP18rtCRXq2AeSjTzFNsjg3xWbPQEmRHt8XR1dz9BZSDpcUizy2qUjqJ29",
  "key9": "4uQD9yPbtziavAYqxwjRs3mJocbSBpeCiX9DxirRCkN5RiDorSUeQq3JkatY6JrZz241unn5SVoXomZQwdjEPYpb",
  "key10": "4pfE1oDqPdC4q8iTvSS4ogLDRvahFPCxejcdT1CLcPrqy28wmaaN7R4Gnv5VcaG2CEy8c1v3hP2EvytPfYKqag4p",
  "key11": "5B1QrncRhDfxrfshb1aa6F3r8GQtL8yfNNR8H4WerrGGdr4Z7jNvXamED8jrkWCWzmrSNYXtTgzuoUYENKvB1149",
  "key12": "3a88AAGSbhhzcNVan5MxsNDqEhKVDmRokNZCcTY6FngmYNX9LvEPJX2CzPmn3UXDpFYgF682YZq95YLeaTsP9XCK",
  "key13": "2E88cMTyvdWftAQnjob8rHoL1QRTQaAqYTgovzqP4zfmGmDga6nPzA5iUsXXi2ZTTkXRuGGhiwqurpyG8MQtd26H",
  "key14": "2P9UBCwUjg34RSwDkyG9MYmmxebEude6tYNNEDErySdXiMcWeWa5KgCPS4XWTqeAtaaxUobwf4F7XAaUunWVtPkQ",
  "key15": "4LQzccTSEEoFvyi5dAm8siGFSWFF73ULbpySUAPfsf2NrxFQB9UF5nCVgAuBg19DEkXMeZV9jXp3kAbNwJDdtJ5s",
  "key16": "4uqadYq19cXVxaFgg9oEaXg9nkKSX138wUAsRufTqEZd5P8Jpootqwx7SeVtnb27fEMp4sWTcLbB3VbmGk8nTNXR",
  "key17": "4kHCEdg4L3jeyuU3RdqMfbe8zpid5KNUq64RBJ9Rak9AzoSCaJd5ti1B58NYE4stiDTs2X3SSbS4FobapTSa3hjg",
  "key18": "rxWbjubGDyqXgeWyo7jajgKka8vByskjy8H3hdVECj7Pker71RgRt1iS18qzY9kjXPwSVQdMHYobrzbVpRhyzTn",
  "key19": "3zCFQxPrnav5opLiwyP212PMhcTFVQUcr5UZD8FzNtD2sZs4rY4CQER9TBMtT3CnJCf6ZBFS7nfN2fNSaaSWBPoL",
  "key20": "5TaULUb2ta9jg2DVVzEx7pEUhhBVrQg9bm5goVppd9piAkQsgqzton4Hpff986XzCGEJP6zjzViNARKzZ1FfCRfS",
  "key21": "Faj2nP3zoeA8gt6WLpnMqnXCzg7XQTmUs2xVah9mDntNR9ucWXzaBdvyVqMXpNJ6JQSMqYGXrsp4KcrYruGAMNS",
  "key22": "2apky2XJgf5ZvjHxkVeKb4rf1h8fBshLtfXqs6uHkArKcWvNGRA2xFvnaHUseciLWPyKoW7JaEFgKHhjUP1YzMPt",
  "key23": "2vuDNE7xpqZqTr8XfXBQqFnYfmJDC8ihpJ8Rbhw1HjUjE5PuAZH4gRogaHMNqg5E9ss5jFAHQwu7LSqh3JsJdkkH",
  "key24": "4FkLuY2276NRgLoaGvgctKDhkdJWGoopuALKQsxosGi8bUChWj8Q4yfdWpmTs4R7yp4UmQa4hNNVNKznjqm1AkQD",
  "key25": "a5FED41C3BxyoMn2LWuRvTTHiG1Ku7v1X52Y2Dhym3aEew65kwJku2NCdqAvWbgXE8f3yTX13Yk8J53wzLzEP5B",
  "key26": "2MNuhjZzQsBiTRs7eMNRfT93x9f8Km7ZT4ku6Y74CBTn2hK8ZfJeMH6G588PpwVg3tcyJFXKqLTu8sDsrky1AYFR",
  "key27": "GMJFk8QfR83C2J43yuS9eJVeVLeKiU9ziFyQVYHuhNcxN1YWMUr4X69nS5tif8Jh4F9ZBjxrPVJ9iG7y4HpCEWx",
  "key28": "56mDhBWhQAK2BEmf6uTkQs4veQYQu2xUkbFkKBeo7227o3ymCYPtATRVE3dJ6Pqz6CN9LVi5M5fUbY2p4xohGPsS",
  "key29": "3REqEnChk1uruRijAmXtHs7GbPD7bvT5pDbAToe8ZPMPZjkH6hegFgfNMgyXexZSMbeR8A32hQVVwEMnQLNT7Ls3"
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
