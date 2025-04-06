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
    "kepq5wHKacZy3VT6EwYkikx9FczBwhATm6rPd9JbqD84aJpaMcvq4kfcpq7pQrVw446Y7iVB5T5zsmq56TbbbtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3je7wzZMuJGPwdmfa7dmexKn9bGS2fJc95y98GbSc4D1ivaX6oHRvjLN4G5GYrkHW3w3ixWUfCM2nA1T853rcohE",
  "key1": "49i45tx6M6NyN5Zo95SDP9mZDJ8Ucbc7tYjq2L873is2zvAyzivYmU4BrjYSGjoGwmNU64vna1C6sGCGmXvPVqW3",
  "key2": "5gk8FBXiHUcwNASQhQ5TPWkfaE9eE6x1dBL2z9kSfjfiEwbNjhXLNhioJ5oUdgQwuFqbAvUBwHzdGZW1bJPBx8Z8",
  "key3": "wKUnZdMmnDvNWJcPqg5oc2NiXiGgFeJ912JcPpKJjmsfRjSEi14ebpgYxH9vMHdjqDkVhTUGNGfZxrm9o7zrwCE",
  "key4": "qLU8DdRUcWzQiTSKY5hY8Z6w2cRpdED4FQXs5horNMd7fxvm3Ai4tinfD14ZNkGHCs5ANdphscjPb7BqGK6jGXJ",
  "key5": "2grKPZQy2Paub8bDUB8scfgPXxmEzUvGzedcHJ8dAcGbydDSnU5Xn6Kd99w9LBDdEQo6JgmXEpNYbpGEEmvn12jE",
  "key6": "4YKNCeKW7DhQ5JihRrLgHXacaanE2Regm16TNgfQLEyhVsAuUSjaHjrGYwQBNPMe7Gnfn7jmEWqunz4tg18sQjnD",
  "key7": "wp4MYSz9C2gGt1CLnX3fN2LXErMnr3qxAM9cMz699eXQbtfUcrY3ngMYqDbsZ42o87ktvA54xsu12k8Mb4e7xcC",
  "key8": "4JDE8vH6P7C4n2UCSJ18cb5amWe1QLYkHb5bD77HjrhBzSYbr3vybQtzkDbEJoq2EcPypgPiuK1tdY1sHe19pEwX",
  "key9": "wV1TnDuYsA6gS8Y8iJrD5shuQ592RajxV46BTpohssMxNLB7DLFk9XFpoqa6wFirhWaNevg85cqTPvN3QbNBqHY",
  "key10": "5kgEzb7e7WGHBP1kZ24euRtqWJHcAn4da583FUcB69G46mf3rCSGsDdW21ctS4Tj5CtDroKFPxTaTs4GMvKNtoA7",
  "key11": "2BWEmjVoo7ibDNJDTEUxyqMgSfadrFsEHAyi5ok9myCau2qDiyVkU54ngiqjjzEjnLw6gT3ZXTnTVcFySrUTCrVT",
  "key12": "5KVzCHnVAQmQQtziH1TyxYLvJnNN5WhtUW7F8zngJvr3PcKRCSEjVd8nc4nW842tgq3c8y9B1qV7iibZdnjer3AJ",
  "key13": "fpy5Wkm9ZFutZeD6mEpEHAAsxgzcT23cLwmQZQik2eKEBYDwLmHXfThcopTBJ166JNRbjUsJAxMQwDbvBWCS5Dt",
  "key14": "5khE57DHmgAKFi1oMti38CuG3RRt8GFq6sFAvtAYKUm5uYMgNyecHbiougk3urN8ir5qxJuj9xJJ3kLFApJ4JiXg",
  "key15": "5SQqb9ZLpJFmveEixFWgPCusGTexRtv9eUVNEASjSB4YCm4Fa4qahtJnzLpcwCxhzVWY6Dckp6JntThsaZdfTT6X",
  "key16": "5QRo2ks4abcynr8hCkLEhnoh599kb4adHxyuGYzLDNE3HxJHLh31t4eSLKJ6TCggzs16ofC3vSYANcExij4m6q5q",
  "key17": "2yrKLLpKetXo1JQCPyiCQ5qMbu1QFDFXaJckBXsJbE4gutZbGfd8SraRMvDrVXZziuE6znYLtCANwy4Z3YTBrnHR",
  "key18": "2wVpNV3ZkFufT4nPr6QyTvEFsfDUASzpoe6idy1GPyfpbD5bo5h8sTUTDavtxCiG1kuSnW3wr5NVKsHmz38zLiko",
  "key19": "64TFiPYzSRHTvKKqkRC8awLDpNrWzAxbXW6G1KybCfMv1UWv8EXsuQ7DXi9UvdKtH4BztRiBbrbkaqMoaYBjMDHp",
  "key20": "3wUVK4VL9vHQVeaZSBBvk8U5Z6kaFkDKnBok3XfVnVCCrrg5MgsRVuSzctZaTSFdn8H7qbmiTcN3xNS74fD1Zj4a",
  "key21": "5nFktKriqr8Ke6PwExvNYMFU1cnkXWZmgUG2oS5c8Z5WECTdii3jpJyhNXq7pCpoShLB948CzQFJEjQDbs9JgX9c",
  "key22": "2AsRqGUMdDKa783raW9zDrZApBxnAAZjpY1WUshx3GcJdRzkYPW9at65sT9524svYVTitkXQRhrcrtXf1Hk8DMvb",
  "key23": "2XvDebNxL8LRuJLnmLxjHqBCmUpFS2LLaMv6TqA73ZFQG99atMN3SHtUj4nkQVjyV7AkN7uqsJdk5fv1gi2X4mQ9",
  "key24": "GBkAkgivzn6xPLPEb1AV1NU49CCpNS5DQxN5PjCEGN3T3nTucRVsRmV5cfq2oEKMNkx5QcsMrxcNAsJNHbQMHyR",
  "key25": "3tTeVhgbDZxDziTCsaTUR1f3mynu9naKyCJEr3KjyZWffnLywWZA1YZ4kKQQxMyTFzkcbS7kXwNNEZvp2haZCPHQ",
  "key26": "4HXifzwR29Fe1WftaGs8xdWmQDGwNsv8UCfCbnP8C1CkM37RAJy8BJmtnig4EC7qEbsWK8FugwdkHcs7wj1WSsGr",
  "key27": "g1frM7b2SLDceKHRcoMPBGMJboks5XTPRXcuD8s7in3z4mn9Q4WaFYrx7xGiJpZm2Ub337pbDWYRLeDtMUaNweM",
  "key28": "3SgJddrrYoVQmtKuAx5wdPJgDZncseUTQR14y1G8JSDCDG2WPjXjf6gSPz4rMcLAkSMrpAA3ieBifv4mqjtzFWrD",
  "key29": "5jBKqJzQTHjyWQTiYKwaTDfpgsX2W89aHCUWw1jrspNuHyGfaKcUsRxgFPDPdNgJ3Xzqx9tS3LQt4jtYYsTSSqoK",
  "key30": "5mi65SMJR9zwGKktM5qwwteE8BXzsvF4teWAUGWGXnZQxrq2ETDwHCME5BipaU7dyNCyywTUBzwZTnCFFNJweZxY",
  "key31": "3EvQ364bXb4za8CyBz884e77ffSJ1AYKSPbUgW9V9VU29ss6oeDh9DYRwNWLxdUd2KygBHVWtvjR4mEuV7Xbah4S",
  "key32": "3ufSudyZnV2rDhzoWt7GH8YruZy1UYdLW3g36AF4NH2hiftMY2d4QLJtnSbYw8zUJMYDq7vUkBunHiGpQDTCX8Sg",
  "key33": "5fDuNVZ9Ec27NFJqK8MqR6Eb4swibt75ALvQbia7uzu3qiU37J7kJKS6Yw1DZAxiwgdsKiRoPaRmeCkUsPvDEjEL"
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
