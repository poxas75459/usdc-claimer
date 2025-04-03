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
    "3D6UjdESBV8w9zLmxufQ7xFQKxAmaLZKBE2TTgGJuFVHeFudsM5cNPdtKRWz51zYqDgMwLid14Ln56BEPcQiWfr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66hze7hMjbNP761uYH5TdmB8rTioE6FR1bx1VLCT5rWMk87uvqF4FMcK4UQ7BBmFq33eWMnjE2ko9zW5XRRGiFNc",
  "key1": "5hegupTupYu7cJtd2PecwZM1d8i7N4awStsZG68TTo93vq3g84EynNotV2j9e4feCZUe9D1bmwMFuYAd1Hh9DNhf",
  "key2": "3jgqDeJ1VahQCPYCcDJDnrvz4r8R2kDot5zeexpG77CNGGL2nepoWBzA84Lis3QpyTpVkrEpS7kQCzupBzq3WzQ7",
  "key3": "4F5hNQpouZaMdbezQMwxPkcfMxWQSU1294p8JQP4NEzsyzPfB94R9BpFFTp1zMC8HF4p6528DhccRxrcq3JtcwwV",
  "key4": "3mM9Rzug6VS9YgvYGV7X7D71NmbdHjnDfnMs8LinKq7sScJAscyP3TkhA2FvKoxSy9FgY1fiyreNbGXTgzGgzHyZ",
  "key5": "2PtgH7eLz3Udoh9cN6dcbpJ6kxJDDH8PV7U9DZvCRCVhYD5cGrjB5JaxxavV78EfiJppykvtSCAEJuMqgEDpdSxY",
  "key6": "FGQ4K1hnxf3n1Acc4rcsiKDpeHKH4SDcVfGP9BxbmeSJEGRNJhrzx36KVf5va6WRCVa2VDZh7tDBYiQHBW1YuKC",
  "key7": "2htjoiyZRNtdUX5fW7eZyAaPJLYxhGF3iqgmQajL9a5WcZVdftf7Xc5tv1VRABUjt4RZNahTNfCE94Y8dJqpJh2",
  "key8": "64paUqURuP2kTdGX5dauTBJPLbD2zhB1zxmmKFFZ39R12AzNfCCEwGAyyztAUGKXaCgDX3CAZjrJW1TVaS76Dbqx",
  "key9": "2whoedRKgADayXHNAJpJF7yGWhnku9giSQUeJtVchcutSJzYrekThjMWfZKn3aCkzypWWi4bYJHyxYLo3XCpvCuu",
  "key10": "4aSv2YPoWCmfB4H6x4rvzyALJomAXnMNfEq17dvVMbcbDPrc1Nv9En9AEMDV8BwYVm4uaK1AyLb4q2hXxyVELCNp",
  "key11": "XauTKTEvs1U2US3RaynRrYe3p52HHZ1cHgnjfoJZ8kUYb6eW6rErKmhE5DjHoDEmPbip3LtehdGCmJfxpSrE8Su",
  "key12": "2sHDSqE1huUMf5mcbqUyMjJA1C8hdKzGDTxzb9R1kwNVZP4EQu2ARnQ6UpohET1ZKKvQ5aqQmwLfY12nCzqDKPeZ",
  "key13": "2hSGcf4onKiDiTxSXqZuBFkqtZfh9JZNbLy5GJxbbTRyjeVobWYzLkghBrf6EpDs2WCmHj5oxx9b692Tf2MszB6J",
  "key14": "2K7QiUAckvdKh2QwYsgtLSjpDv69NhTcyc9AEgjbAEacUatDcRtERoJyoWQfuVVYJQ5YZNhPSStjehsAoLahVaP1",
  "key15": "5ymQuidipdp7TEPCUdjgTvWhAV86qUioABdXHAgaDZdJiHWDH43sTuV8rhSBHaurqb8PnJLowsTe81yrVkitd4KH",
  "key16": "4q21WW3pMW95bBLrsHwMApCrKxDAytasJoQvdCHGN3VjCQULERBGAuFhfhiYxiPbmXxd92V7JN9j7cjrSSXMHXc7",
  "key17": "4B4zv7dDh4oqPSPwWv2xsPWYbbTV6rvPnEwjcBpwxeRzKrrS3hu8wXiqmpTs3zQC9MfdU4UoCQ3eRtGf63kQVV17",
  "key18": "3ouLTpttbApD267kgLhUSLxQPNuMfiC9zR8pySY8Nc7q8bXCcuKYNaz4N7KX4YdcbhbZ62TeVvubjbWiH4TsvZKq",
  "key19": "3CDn2kPv12jY9J2pNFD2VER9GBgASsRYnGwQ145BF5QtgMEJKSfewJaGqSuJYBNzcQqK4zxjm14ZUCMT1gkGyyKk",
  "key20": "4pEGgLTvn89w7FPdM12adP7zEB7sBEcQPv9E24cDg6qxgk6rRb8MxC9MB9B2rqwB3gx9665qVP7B5UMRRYi4zRTQ",
  "key21": "5Yptm7mbxs4ujai1GBJ8xMHk3t9W8TEduUkyMWYDV3HwYtpVbXp8VZspq725oV3H6SrTMKMxPrK9BkGvd4446PnD",
  "key22": "376ySwsaeSVb4bB35rmkA39GuJqBb5JcxXBDaNJaqowWY3Cw8cEkLi155aV8aZkfdetiA9MgDrpJtAbY2EJ9moKM",
  "key23": "42v2219oE3yyzcGUy75edcwdBd8e56Ef98G9S5okXemPzVcB59oWRWKDv2MUmdiqsAyYmXTGX85k4FhBQjtUiPvh",
  "key24": "jUSaTJNdozDhpWbyppBxBPMgRLWJn6XSFudiLqFzVcFRvc6oXnCuihfk2dy4N4dAAoeFrqRrtP5qtmw6bHDgChz",
  "key25": "41QJ67F752YdkzBDEg6bCiVLHLedo5UjD7Y4NRE7puRkywUs9XrvvFcQGFTouGxaqxd9qpyTz9fX173uo5JQAAWV",
  "key26": "2pVP6PNuD2cW2eQZeShqopbBBcxf9EQAiG5kaZwGURPQbDV6EAMQ4eJzBd5RFfWnKd4pgQhkqXBHChyWPmkhFRUj",
  "key27": "4Sb7EL86mqgxiUnEaeYZYxJPf2Yswpzcc31YuiH1ma5J63wiGjXhYhRnaWv3HZGH4gHjq5BrgVy3tDAkxcfXUy5z",
  "key28": "23JRWJnkPnr2oUQkrc6okmvjxsNR7QTy4BsU8XK7zUZwrjqHRQtnqRcc8iLr6JoC2N2diDCWh9MjzuBv5TLYuupv",
  "key29": "KhnZeKX3XEap5YrFyhN8APTCVkykAd2QzA1T4nxMymiSv1SH8Wsjm214tCCm3nvPcN6KcbGd8ADPbSdWurC2TNv",
  "key30": "5wVmR4CwrToc8r5CmxPeLLaUoVW38Dht4baQUHdB3Pnn9cdKJM4HFsjUZpsmSFkUbKmECBnwd4DGDyrcfVFAkmDL",
  "key31": "5rrXYGBtzSyb8141TfVFzgbryWgvf6FWt7WM9Pe5x8J5P1w8JritbC5eyCBCTNQoLzuoQa46VvKN9nLxkgGqee6p",
  "key32": "vESBSry1B1KhPvom168XFByh2gvnwF8hv6eP9pQtsjWLMKuPL52cyGGLzL3nHNsa1oHCAsWuob4biHMdkffWVTB",
  "key33": "3JFScAVXgizYrxqNgcK7qk8Q5KvVQSpkTG7cqiAVAyaJZzVfsDHRM2p71UmYrp5RLTU2fS36QnA1DAqCuoNW6KJb",
  "key34": "3S2vcmoW6bwbBy317KdcHpJKJguNVBjHZAwVZRXSzgXX8daC9kFgYVfY5TNLr8cYoofnJT1tjGrGXSK2GcBbkMUZ",
  "key35": "5JaahiBcMmexPR2xhGoKBQyiYPp2WoTKD3tzEYNFDrbGe14zycykLbskyr6KdHeGjcYQx4TbsEyRwquQLkz74Mdu",
  "key36": "8mgiRUHN79MWrrjq43XMfGn2hkDJRdohWJeCktLWB4DXDB2izchJSA2au8nDqScKanJXZGr8pxtWM63dN8Rja27",
  "key37": "5BW74ACkMYQKpJ8yj1XQGcph35Xxh61kxKk71fRkdLWKRod8cYgNKsg2J1FkMjB7K4EqbyA44XY6r6XbDrg21Jra",
  "key38": "HEAyqWrHdSUyGvwJYGStgkwjc79BC4UGTVRwL4wB1uomnUbXmtjbzjjGpEozwSDfiWQ25iCne58jguWJEvUWevT",
  "key39": "3fhAC3yVd3fiDsftYhoFxH3MwQV6JMQT4r5HxvAfcEqfPCYfVW3n1SP2adEwbMHT5FHoxX7L36xwyJzCZ9aoadRN",
  "key40": "21Toe6jpXJJvBwAzsbT6PGh9qsyiiiKd57VExytWqmC4BXqy1cEaoVpuEBf5yMbB3FCnXv9UH6rPZLphyvtiaw4B"
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
