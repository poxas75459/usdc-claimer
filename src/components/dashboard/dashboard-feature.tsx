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
    "3fzkgjoGr2tqYEnA6AdyaCAQpdX3TkRXa4owbVYGwqRt8mjdvfsweHv8uhdbuCiKZxxen9Cds5SmFoe2HXnpRha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wEeFApM7XM7ecHK9pjRbiAzteR9EZmwm2K6nLK5cNVzNFuMkLyB5yotzoVxd6egkcyEUC6vsyS1g64QRLJga6wN",
  "key1": "5NKHKfVrD8AC5DiMkp6NiknvzJctVoA7i9U87SR3TpfycVU5wHSXWPcjbj2BrZ736ZftYHiuSSomaSsqnbsrABD5",
  "key2": "2LwU2u3hF9BvHfaSX59ymS6mSCJbBGzDSjgBjdVQAs6qv5Cvg6tRkVwbq5MrgktKZ3d1Tf2BJN4cnpfT3ZHRftCM",
  "key3": "4kBh3ENVHjGx5n66nu2MeR9XAM5XeUTkEHHyaezW86usZsKadm7cwasKrBC8riNSnvpXEDRzXuoRwKJSVWZqDmAV",
  "key4": "3hCXq2qUhQ8yxUxnGQHfxpuB2TwWT6XeuVDW9z45dntkshUzMJH3sTXKDDwzz3QPQtN87tYviGz3eyG71eAGCmUS",
  "key5": "2EZbz7wTjbqy1x3vSzAfZvYucuBxUP7YhEQestnfbYXjkwBKztJXMMqeoyk6wZt9NUrs8qXrYfVwDvu924FzdMed",
  "key6": "3ZU24nMyj2EDP8PBDLd8EQaTMz2YVKBbAnSVvaWenmu39VBqeLM4BB9mwNNqUR57C7UtVQTnhGpccN5scbzvh4G4",
  "key7": "4z7uBy73FdzMkwRxeqWEG6R51AmJgZ15nkYksNQkwz21aNXA1nwJ8LX8YYERHw3WdaAJhgkCeReShP7BN7Hu51VU",
  "key8": "3qubtLtcUxxUrJ9LWVVDQyMocubLBzbJ7esCDncFNcQbZaFSjd6Fr2YWcgFWewdRGJTqwaZo65oQkXseGgxvVA1E",
  "key9": "rSTr95M2EwzyZ1pQDLE2ppTt43FFiBR65LgzLWTLi9xEQr3VkrV534aTw9YA78qFosaW4EH2Zx3hFPPPWKdo8F6",
  "key10": "5hVM35T4r8NQC1jYiUWjuHHJWPzaHjEAYVQtCPMbPDY3QzhutRagf5CwtjazyrwCkiRiqrNuAo1q6Vt5LPbyqMoi",
  "key11": "21V3oPhy85tEBzkVUdrsGwUMPyGMuW5KTfz5R8BWEbcc8GnfVw5XASdbN6fWV36SfbEjpu1PbMHyHQe4Xje9vDWZ",
  "key12": "5pFqbnbEabRbaGsRVZdVn9FCPwZksWgtGzjZKv7Gv6UCMrGwpVpr4UXdnKpHS2u1PMtdiVpABywJkG4SadWnJHCk",
  "key13": "64B5SdLxqnmExDY9Q4eAwSUJNhxKiMcXHUsDCGUyiuMTkyraSmwUvC9h4QTyxWhKA6ysMWouCBSmUY4Y5cSDXM2L",
  "key14": "5gUh8gXaXgwa2MtoQ6CdfwMDcetAaWSzpUgjb75e1Pjed4f1uJqdF4zxKCSjMVghovY3zcn3u5vLTwqMFSYxQ1Sn",
  "key15": "35ynqqAjirSkH6vMbsgvR9xgGZFki7MsPKUtSGx7rkt5JMpYe7Yj23WQQjCXrtztn2h3ydZBtnw4N1KB6hwJfuiW",
  "key16": "7X59dfXnZNJvaNPE73ReH5q8P8ML4YS68JZwD9AzZaGyATAisVQNUfaKJmmyhK55Rshscht56GuP5ijKseJhRBC",
  "key17": "h43cEAW9N8KVQntgPPMiwDMU6riGQaQ3PtY68f8P9QCWWJPD82gSpXTv8yxC8woiorv6pH9imvHTLiw2xEU6WkM",
  "key18": "4611WJD3qq8shcKgkEissbLi1QKap4W8M9qCcPaBkWdeDAhR6xrFBp7zLZ6JwpDA9aaWqWnKtzy745orVQyRQJGr",
  "key19": "dS9eBJQfmAT3YcVQo5yvADqRPy4TtSaTJfjKZXuBqxcbJ8xTonWTuXeFe8qdikZGsPZU29s8AAsf8kWH5GhxDX9",
  "key20": "3mHNs6KfgkUGJMbcQopnWQE8UNcGhT2HzpoowAiePLH3pT4MwbQURuxYy7dzQsrjXefiz1GWBECh5AT5JLEXCD1w",
  "key21": "3ik8NtqHoJ6FQZhy7xd8QdE3KPTZ322keZNsQXvWrk8bhGoZ4vC2t4UYC3LgUWQXTVAbP8ZRmXq8c8USBSVfNexH",
  "key22": "XT5hC7ktnobX19h1SZqp4c8qJtZswx8yC9mdESjmLsB5vYKWPHEmm5DUoU2F1w1XHV1hFC9mnbqER6uLYWzy43B",
  "key23": "5dL537EpkiGvLWWwhtqkknZMWa3RfR5DYkbX5hUnkFFZrij1RaMi2WjgeGBgsrYJoDRmy8uV3a25RGGEsbgfpcnJ",
  "key24": "2itCEwDGP1s7JVA6jPdYjpeDs5BH1G6kRUZXehbzKT1xfXaqjWCJWxJihRPWmk3fjPW8mZSEMxeDNCe7gsr1dK1H",
  "key25": "3kWEv8USjhZpy6UHGdB5Kac7A9YiCGCXZBoYQuFYtHbQzLAn9pWdLEdSHwWoRyfgEw8fj3pDGDfzYYg8pSJaD292",
  "key26": "t1nVoc3eT9h8uurbQ6bdreEkqDPrfbNPL854sf6Ei1yp8JwuwZiiiYqM6bMQo4DXkZ8Y1kawjLY3qNztpiktM3v",
  "key27": "4DWwTr9DMuvBufk4FbRgBbAvvg2zpXczbPBSdXt6uBNRedNjRZPdFGAU7mDiMs5vgDwg9uMEsc2sFQpb8CCmnFTn",
  "key28": "5Sg7YTsRCo8DLTnGp1CjcFHwbLNuJ4TXuZeawBgiRQohxFz2BasCM7YkAzoq8B1JRLYEw1CXLeP4geuUQh23VN6H",
  "key29": "54vNNQNaGUtqNGn7Bpkv89LB2T4ShaPXQo8j4HiN7xx7iwT3CSkR9MGpb7NmGpH7xmXGFry1BJpnfzvEN9azMCxR",
  "key30": "5DvQUBPMz5oZkPxS6Jr89HRMWALo7r4poVik2dq1QQBGYX5KwpWBVUBiKifkLSRqqwUJRf5A23RV5DKkGegWt93Z",
  "key31": "5qbJRi4FH9NhrGk7aXQnhtkvk5rodE7AyCLhvx7fRoT4YJrfef2cQdj8EUwDLpXbx5KNjYHMiy2yUsm4UPvXRR88",
  "key32": "4s1seBdApgCEPqVR7KrNoaGqCqZYdvWSrr4tWRLkZ5EqYS8Gt8dc3pNFSWQHTnegw9PSmqKuwQBxKuiZLiz2t3vw",
  "key33": "3CCbyuMfctd4ZeeYn4Gxa9NjT4dzAAPSw51J6KADb5qJ7ZsepT3saDRkx35mhVwShosWnPaBdMQ61gWqnQzDHz2j",
  "key34": "2r7pRRNs3jR6kL35HVpjcAWMmqAdZa9G4tZd6feqNumxh7gncvJkBBo7KAjpo1HthZdwjxhNdKv9mmyvFV3ipA5d",
  "key35": "4vUG1Nncw17tSgLJFM3eZmQGaXSiUiEFFRe1PcmQ7KVnBLyyHrUVFDhn3Xmwi9zBVYPYEBSZGnh8dRhGtmV6Ui6m",
  "key36": "71iUNBNh6CHX84Q9oaPd9Aqurwy8iueB83Jm9aXZQvLiEVE6WBJTe2oRQfs9iS26gnjFFbBoAgQg9aGh5Qt5CqG",
  "key37": "66kiDDNW2THgcXiBW2pSMNUdWJCwZdzHwQJuH8jEuPv36KKYnXwod9V1Z7ocEZ1PUzYhfJUHZrqgxKjRzn2RfnPA",
  "key38": "4dvxoTcNR6y52D2RYaRSPJSWSB1ocSH5oEvRovjUPAMXUdgh6THrPjkUUuuMRbPzD3PGxTtnnHcRfq33rhDHUSgb",
  "key39": "3d8D8PAxxjP3wpJmSouozWTFU3uVbAXCoFZk8QCwMSv163S8WQQfCUZDZF7tu4NqL6ajS448umZjGAcHyFAJ9RxJ",
  "key40": "4zMuB8FebXFQi2FxK5ezS89aPmvEYKGZfepX38oiaUgAXfDaH4usRsoeJe7Z27xv4yDzvqU5C8zdZmEYSLcMqP3v",
  "key41": "taH5qEURt6v6awsXt7ECGetw9mQaw2K1AJzr8HkPTc71Bqf1oPrqcYVpX3NEK5J23o3gLTBbc2bAnVWU1Tg2rYh",
  "key42": "3Knjsy6X3F4GbjTx3e3GSPjXZDyyk8VMmjTPyEzm9UtFvs3pwVjXAu7kqLvRsUa2cXfzKzPy3woPpdJ31fZSNuZy",
  "key43": "61wWfaDLuuNX4CUFquDZsYRLREsURzRp5ndYeD3kcTr4a2Kyz4pAuD77FjtbkuccaAmMF2NaRdLRtgLPchkRuNFj",
  "key44": "2kcYbs2HG8q4YCpmfzuvM4CXhxaSLBut96fF3cSXZoEehpdSe76fcyfSczSGau9oF89YB7aJf5ZwLYfjdK8GX3sL",
  "key45": "67oFqGXeVuZfX26BFpXF9b1uhBptVePChmRcdrYatYGhMYGHccsRVy1ji3yD9WEwsRNnbKUG37Gu2J4UMHbsWWwN",
  "key46": "GRjW79p4BFdWCmCpygWvTPTm6ExsWgKfr7TvdUQfTzLQBNR41p6J4gV4ZrDnmatgZDTmWMygzHrrrqEhyifYmSC",
  "key47": "65rMqeMKFKvSD54Lov3ELjx7h9xJmuVBPR4cBzLtpmFfwa1cB9CSshGfu1GEHbYXCieiia3M11esRGjTCnwR7oWk",
  "key48": "EAVjqR58m33DbWz7kS8qcpfr7BX2EkBCk9dCXBp7FWb95HoZGUTayJ886Xu3JCnVFgNPGVZoXwGNp9gBxaQa9Vi",
  "key49": "25BvPGxs7kcizAhkvWPLYNikWzQBtbf2SHBgFuEDknzMWRyxmfKnvHBQQzS33wic6odNj4eyrG3ZcL53DpMrQ6gF"
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
