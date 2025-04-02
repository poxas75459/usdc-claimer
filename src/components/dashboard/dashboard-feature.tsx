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
    "mGgwULBCNG4feCbRxZ8HrH4uabykRVTAxW8mVKsfMahCGqtBX7UjM3sPMZbNe31b9tWTqzSfCoao7tcG7J3z4EY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VN8UaMp8ggym6ywqWaMAeA5BeTiUJvXkGJHiexkDE5KyvfuNXSLPcaJJxGg63kFsKtjK5iyNJvBf2mjf7u34t3U",
  "key1": "2SZ5auA6d21XbXFQZKjcWuGx9Gnib4aLTWwuz2TC2CnfYKWnwehL2sdCz73vgYpZ97F3tmB4fcHpyxujZGVUXSMA",
  "key2": "4fwjyPUbAuAZC2r5ZJpTc6hmAZ698xsBTZdy5ABunfbHWUjwZ25VEfZuZ1n84yEQxRYPQcLcYXJbuQ3X6Hjt12i",
  "key3": "67Xhutc8r7cV8Bhj97ksTQtBrrD3RpcM6nnVhABPsHCdJdQKoQxpUt4pN9dF47ReMAmLEhohcCtawsN7fETVywYQ",
  "key4": "VZXi7SGnvanv66A88zGRAFG32kZ3GJ6wTSEEbex49g7WZVeG9Et9nSeda3WAjJBZVjBevvz9AYDQezmGB5AgECF",
  "key5": "3tDzhxwZejk1nYy8yKZhHiN1hssSrKQBMQeWCfW64X55eRpydWzvxJwNkBPtEb9Tgg2jMBwDCg4rH8Fuj8vJ1bC9",
  "key6": "4SMfo3zc7ks7BoJCC9P8GVFckSzLWAuZ7pRxQ39gwW7urEwygLXLPwKxTLFeMhS4HMjFJSdQjDNBUPAA7x8PaueJ",
  "key7": "dw1ZLcowkRfXU3S731RtjzJQwy343Dpysy3JsFhPXgYSvDNVsmUkBMch7rrtvjY9EkVKE7oWuBiDDoNMqUQjmkX",
  "key8": "25j8xLtR1d813jhTAafi8gsaN5mvvnLfuEhBkyVSAb11yCLuHbsz23Wrb7nhwpaa3y5WkoJ8i68bV8Hts3YZpcY4",
  "key9": "4BL5ErB4TSKfmcktjjpjrTkJHhvzDnRtfyPNUz3BwqgBVpZmFy81eiuH9XU35Yhbz7nJ3BcSBYvaer5ioV3vgWPR",
  "key10": "2SAb61gkQGrVqRjkkxD2pkBAXgbyBktmqV2UcMUjHcaXLB1NEcTbDf5Zu6ru4WPVTbCF4fvKZVFyifcL4i7cwquW",
  "key11": "2YJyA9HryTq8eDTaBq1a7m5dmZgGC7RctaWEa7zBjn6M5WVRgtRGwkF8RvowyQ9GEVVcdtN2z8Qpjf2t3TWeXuft",
  "key12": "2MYAW3vm7iDQP3xhK6sDN6z6Vq2GG7ZbytuxWTjsjKPsh6bP6JtVT2umDQhEVQn3mjgwJjnBmTmuX9bWaqppMPtL",
  "key13": "3aV5W4nxqH9aXhmnQs3QPCGtUMZULunn2abMf9kXBJNJ5WAZWcy356aKomEnG7achCKbBu9ZoDWZx4nPoEa8QaG9",
  "key14": "3gW7dG2YuK1Kzw5xH4KE5tyJyzNvBKZWEDVeH4pukUKM98EHG9kYoN9Eq2C4DHneN3Uer3NrpyTVhfgS5ay28xHb",
  "key15": "5k2WmrCfhCDBJnvgMy8mSPB4ZVsKN5ggoVkkUSp5JZgMb5DbApmmxAJHb5Uo7s7Qnr3oHwtNN4hK9e6v9MEkaG5H",
  "key16": "4zX4S7vCfQFohhqYQRR5rvdyBAHMnAqqwbq3NS1MekcUiYYPC8pBQLFv9iEi9dFRknRiy1WujRpYNkuKLMykaWim",
  "key17": "4bCRANzgKDuEoFmRXyXLvBHdfAzK7gdVKMjMm2bfx3DjU5ypFcRRCR6TcBLAhTWakdRiZRcMV1SLoMUfUgqVdETe",
  "key18": "4xxD5G1WmvErfRyc6wTSsSU3J7e1hKJSSn54PGqQGdfDnyxPPUeiPeGm3sHHUezUuMvSKs1S9dWmJqFStaP297V1",
  "key19": "1Nzysjmd5aU1LBmF216W97zaG2TAVVAZpUpVnA94gZyTdJgXy4F7q66m9HPKZwFe6XrafKT5pEBza95sFJzyzqs",
  "key20": "3vaCcG5muQeHQK5NHxRAH5pUSDH8EWxjyYvt7JVRPufEFdgSDALTXWpVhaKXf7w8BcFZrbNDMv7KHLFzPpJAWY7G",
  "key21": "4HAC9ERuZFCgBNtX9dkttgN9xKYJQrAik15P5YjBgfSthNtjy7f8tw3mxynuM8nHXyJn23V2iP6yj8GUfjPf8oXZ",
  "key22": "pcBpDku1p7b7pBSmDrGmQXg5WWR1MWGmYSp5nVps8ocTx9u4uXNxRj3buLVKtGias6Ejuk6WbeyFsdMFuSSo5JS",
  "key23": "3z4fN1JJ8am5Hj2Q2n7QNnCiNjzpvfqpSdUaCZznpQjnB7UfPLaiqz65fVzqoJHyBGswx119jPcqa7aNKmZvnQL7",
  "key24": "2eUKzxVctzaZJh3wxvUwTeeHERsy8S6xBxQeFCgGga4f8C6gDvxfWR2rMYAXKevA2xytpzA997j2iiWzRAFiM5Y7",
  "key25": "5w29QcoSjJruWsmPWGhirQPoUh6eXRU1ZXe85mknHBsJDgXcho3c5ob6BSQ8kLKX2G94e3JSFwGY2HCczQzgvJcR",
  "key26": "4J9NDjxMysgPwYeck3eW7ZEkHWQyGExNKZKmWyxoQ13pwdUhNEo73KGXyyu2kQvrLCokv3qek8s819oKCrYya9R8",
  "key27": "2osTZPeQvhfEJtuqPTnkor4t9QWWXKSYuQMt777wBegCjmDPEQ3eq99rFBgjWaGMeyZCiFEicMkKkFk41FarN7bp",
  "key28": "4a1kAmP1DfGULWEjck34VvhMatzj4fkEoL5XAKuEZZsmx1ieWBv95FyRfXZ7HBLe47q4296egpAREYdSXt2YfJpu",
  "key29": "2V9AR3QPDzcR1eTjpfXG2GxBxwc4xroMnCMTZTFKQkKF9tECv5H4WLCjatYYTAZbSuQHtax2Wch5XGNNUKpfTCpC",
  "key30": "5tVTTGrLXpWNDSw5mZdgr8TjM7dFx9pbzAsM8yvU5AUj1gZpgkFhsYSDaukCtdyg7YhVjpJ3Ked3cbNKpEN3F6m2",
  "key31": "21ewTh7RTPCoyFPeCQrT4smd5ZifQNrXLD5D3xk35XeHgyVRJxxubL3zDqHNjebCHspndZMpCDACh3L3y8RX3fsB",
  "key32": "4eZNF2LiyEu5QuqavbLxUvaJPG2zWJ44b96JZx3ZGqjz6PXTRCSMpkxCdEgUGHr2PrpN3pGHxFqd5oxFtDu5qgoS",
  "key33": "5rvSCQ9UxaiyLAxh5o99rDodZbAUyAc5EYrrQPu7Y6rZ8KjErDdV9gPWUgWqg2TA93Sgo2K6ieEVtDmJgY2sUsqz",
  "key34": "2mwKP1k9PeY6BZcnncdsixapzk8Pvpm1BBfTQeByqbeqXtR9S8chXQLsPeTwtUx2AF2ZeATmKDj5zHMceKJDjmgu",
  "key35": "HEAtWFUL9k8sF8pYDLzPF53uWdbWPbAQDosc7zMNGMPxUTt1vF2mEUMtuVabEDp5HdJBQsEKJuXLrr1NE6Km7VW",
  "key36": "58BFqQrcz7TgohaHjzTW6ceisK6u4yGJvJ8Cqan7JNWNJw4de8uiofanTMDzxUqkW5oxzRko9eU753gBz6hvYTQc",
  "key37": "Y4amqYQ27ftKwXWqiB2YEMq3x4yc86wfxABYVq3mcgMVLfRrkt4kidHrucgbCMb1ZRwvdCNrQ87Ah6DUddomdT4"
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
