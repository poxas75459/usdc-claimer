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
    "iYrA5GRdf4AdvD12v2MBwZjVn59n6yf7Jah1dyq9bWZdp4YwSUChNStS9ER8QMEcwVj7nsJVCs2ugBySEvZE9N7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mAa9KwhcvejP3MKRSDCxEkJHAU4fPmnDbNsRMvnAt3a84wkZqabHPrF7MbuhQPWqqpHBqcMCN7DYcGiMDjZMLci",
  "key1": "5WGduD1QjajyegqUJGXuA3KuWFJsp9J1nuiE38rEY9QhihtbkGHQQPr3fdPHbzUv2KYyTSuAjddy4vsVyw64sbe8",
  "key2": "3TEcTJHuVavHrSWdAvJKaoCnbfhXPHJdPP8NSAvfkyvXFktRGd9v4kRFEHwdzoAtnHN5LhV5brzHxNSuxGfFMAEc",
  "key3": "MTyQC7KAiqfrmLGwPdGuovZvT6qc4if2ZcgzinR21Er2GJZynGaghYM8VrUx34B7dn9rz4A1MELx5rPAsSNxcMf",
  "key4": "3pv2WP5tomHnjABceVeQQ7JBae8ehWAYaReuSYy1XUnEt61DmCPCM7uGz3uSbYwqEVdHeCjM6CDSE1KdsbpNtmHw",
  "key5": "5ekTTDcpY2NHB5vM8twMJjzKnumQHAbdXEs2Rik9BQWtY5BbZxrweJ47WZq8Vr1SkL1F6SyAyj5ocohBV77bWouk",
  "key6": "QFexVyVw8sXpjTS662USmv8DCGaxhZp5NRuCxN75uyknNjvrVth3YVaxQgyYFnugybH9hpAKnEq2hAr9H6UNNh3",
  "key7": "53Ns6cj7zPm91i7ji3BGwRCAzYfCrtDqgjiZBsW63kxp15HgVihWqu6cnUh9NyAxsfo9L7DsvtdbsaqQ3TgA9hwX",
  "key8": "Pwiku2vQhEJsB5ifz26badto87fXo4vc1fC2QZ9UP584CX298Q1LU8Bss596DHcxgKXPf1gDmnHYEpZd2GAXt6d",
  "key9": "4B9kWnx4YxDaGtKNSUGaKx4o2tFoyyGDZTnvboGmrrw4gwBzfvdzGAjruRPQgAyTkPyAp4huXUkHCsaXUvsCVJxB",
  "key10": "5uA6T82ZoUnS1NabsmPWrgtejzHVpuHFZhZNTR957WN1evxuYDQWNHxCZpQxyGvhpDcfePbvijvoBYnjRDWWKzpo",
  "key11": "4h1ToERVt885icWkDGhi2RZMDpqPyvXE8gGGL2VximpE4gSBMz9EBLv4pwf2XnY8SxmnxWbvfW5AgXYrgw8Q38Vo",
  "key12": "4tkCXMhowYw9SDiY3UfEAVymiAXU7hQu13WMTG6ZbM5oBEVLpfCTEExK6NZpcKHAN7n1srJ9cgnEhCJDt6hTiJg8",
  "key13": "4BsWAq38zxP6hubeWp6fAk9GfLy4o6W21VE3NY6ymDwjDcmAAchFGCdX2sNfcbnRsTUwCs5xXpeyUtnkCZqPBYUs",
  "key14": "4JRbrN8rN68mRYR3QvAdStup8CYJCNN5A3rc3aBR1d1PSiKA7a5XxEwbUb8A1gGEfnDFYUXxm6RwgwgRS4sqsL9V",
  "key15": "3bMnVzuoVbxexTCa3gEpnCZex3rMsCPwvQPJenbEWNDSkyGjXPjLCtp2qNkLMoxT6X6DFydGXeBgLkn1iKz2C5K7",
  "key16": "4QfJadhV7LJhPBT6F9n2rxvcR1n6CRPBKtB9Ub6f6g3Qvmduk6f47GJek5xjPr5ohgCd1Sfiub2TNZivPJaHZubm",
  "key17": "2Uc6FuxnQ9R5qoRCswdbeAv9W952vCh7BXSuvRCQNoqFL7uD4utWi7Zz7HQncsGMe222a5SpatTga4XAFxj8cY3E",
  "key18": "3aQhaG2YHbrDtfRJniaHW6uHqVMG58f5DSrKTqGx2J2qNWAVdwYaAin76YGwaFsZdZcLrn2QBfUYzbyfzaqUq39A",
  "key19": "2DVL7RQ9QiAfaUdiQqLu1mjjHBBBMYgEQU2jgJZUaZNC85fZRTvXA21hKzbufUGnp76WEpWQqVBziF8tFKwdfhZo",
  "key20": "5dTQQnqDqN3nh7amn4tEHfPi2gv3JRbTUegHr2u5Cb7dXyXzMC3nbEFNxSxUDVizq6wMynoTU8jZD1XZ5se76KZM",
  "key21": "4avtzgiGY5KuaZCaWprKBaWg45HsRP9mXhk27td9FJJs8fjfsB8VjPFFeKE1vnieSCJCQ1Ut1zKUEco2AsFLyFJT",
  "key22": "3NQ7KJao66bRPe2LLYvXbAGzNeUxTHHnQRfW6sH9VEwWZnkxRzmf3TB77CWZBhAf8C6MxtZHcpxxzW6fTSaLuF75",
  "key23": "2UYiRduD8btefd215daJHbZqhRSTU4YxjbyAqL2y65NnJnma9VxUfQA7iSf73nYB48nKdsMNURS4FRqZpzR5WaGP",
  "key24": "2NTH4ARYoSwaARQ6pRst5F4yJrHpVLC1VLxPhwLuWD4H5UWDJJhaEVGM3GQPBo4dNvZdE6pFhqw73W1qZe9ynK1b",
  "key25": "2zP8Gy5nNMQVCnPyaijknGhjYtMNX9fZGK75bjedfMSE2JTQN9mVYdothY2tnBPRfDsYX6NFBCUwb8Zg6GCFZdym",
  "key26": "62g8mp3eNu5xJ47vQQMxkc9byke1KTUKnthx8DLQXXJa5gvxBd4C2J1vv3UhjnRC9iiihSn9qCfiZsWX93n6kmPH",
  "key27": "611QEp2TU9c3S167TMLFG5rimAJqFcRU6G95B4tzRC2yWoadkbtr9FmnPYQZSXjoa6FCEvakS7jXsYN7o5m5Ktrf",
  "key28": "2DryA5sTKyHwAympYv7RAcGyVMLYjaxiU69xoqU1FhBvRTTNzjGEXYQ6GJw7CSGujDWwW2EhwAsKJMN67VdzABcz",
  "key29": "5kzioigtmtLHF6qG6bV29n6zC1FnoPDxcG11RmrkF7brjnHAozmykT4fCxJobsBt6MyB1sfYFzf7j2QdgFbuEKbP",
  "key30": "3xwT45VyM3FutMKQTz3rX17HbNtZSMnYwViKUUbyMttNefA1sMiJNgqSWWPCW5soY3b326nJjKGaz831iHp1khqb",
  "key31": "3pNgMzjRkrj2wYCE93gmXvtFTNuqFRJwQB6J9Dg2zbee1WbhaN8J6S34XZkPDeAPhcUyPWfXw3hLL4aogS2iCEF4"
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
