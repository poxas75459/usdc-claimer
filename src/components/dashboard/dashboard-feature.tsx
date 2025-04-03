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
    "65P6N2VK8hkncik3Ce77SVUXxsyT5zDWn9WS18jYzc1psvM7hZHKgvrzs1vymuUpx5a6KByte28UGYLZPCdnHF4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YahGDbm4imJLdpfVXqMBWanDXWoxnxX9Y5g53gkysG3HLocAPLBobxHr5VHZzMckmZZSGcr7nKMqYZLXSqquGKj",
  "key1": "5xnnqgZvt1yJ81BNNou4RrobwwQYozmfPLgXdqEhXPrZUD4mrY3figQC7Rp3gkdkXew6PS4887myJnUAAqNX8o5x",
  "key2": "2uvBfjq85RxZGYMYqPtMn2j5Z24cCAjLC4a5DEP42Smb64BHPJB4ch5nEH5PoFsadjNriXCK9xz5EXeG8HyXSryb",
  "key3": "pzaBwpwMbmGHxZ5dQKdz4FvPS7hBt5it4kkyh7BfQXg4EWpQLg6SA2D9wzK1n5nz9883N1hUecERn1qnHH6Hgaa",
  "key4": "24zQZG6Gt11yQ8PL4jjubuy8hJ3VaWviDseeuq7eZWYFVicRkAaRDUJ5r3yzghcUbqsfRsZMGtQ1bLFBZNyMvzzH",
  "key5": "5oNrpfFzfmT9xuZZmPbRsUe3zaVrictq2Nk1gHxrYYhKsHimJEntycPMPiwPky4GZXjauBZThGpC8fnGEwvpUc2r",
  "key6": "2npTJHr6e2ivmtYzQeKx3tbDwgZfpags38N2GFFW7BrtgTrQTFc5DJ6T5JKnrNyKFUrZSQAN6pQtKQvnQgBmpa2n",
  "key7": "2fVEw188ox5hu8urTJy9APMWac1pwXDNgi1U7o5xHMDZoYJeusfCPqNJToRMpwQaajXQCBF7uyB8h7LaYYdmy4hn",
  "key8": "438AGyFodEfjdTESCEkKz7FYqEJSD2etvWY25f79oqarExNCqXz7jfXwEFen43Hp5MHxvNSjznchRv7gobto1jfA",
  "key9": "3a5XbwdspJGNnkTbQBvxzsUDWDuBUdZnQyPKwFLVyc4ZUiGQWGV9DFtifvLJAncweUfHyBQgmMh6mboJToEemR6s",
  "key10": "2aoDseFsbrSWvTdsd4P8juYijENftW896rKgD2kfyZwg6n1e2Ry7ycLrEcmdyRR7xtKm9gWvTCnYPepF5Qt9XmDc",
  "key11": "5N9eAsWvWQiktKMkrXJYsWUfSUh2qXpQHyodmktWCAUbaSTiCH4NvsRBZPCVzuBcCcAsvbJF7n7Hbz1yRKmjVC82",
  "key12": "655r6G2zXhjS9KqQ9kaHPdRN4Ps6zwipxbidXgbbnmXkPqHqvot9Ezpvj1eERP4HXsy2ZyecbPFahj32gdodBHMb",
  "key13": "4VXjt3rnkVkvNRUY8Laj9prQKenrUEGqnfDJxsdYskDt8K3RXKRSQtCEvVZYXz1pFVUXwthhyiqD5bTuxEwN1mPA",
  "key14": "4LQZqff5cXvSG3G9K5hcq4FsN7DLhkoNnMN9SJqYMM6picQvN16SHTvHrLdgWtp2Jtte8gMiCuFmok7jYGeKmmWK",
  "key15": "2dECwMA2oUqTA5G56Ldce23qQe4ryqRJs2nNDSPsRJ9d89LCcJsVS3G7X1SdDTMYJpt87NVyQRBQGqkrztWhkfuD",
  "key16": "5snTM3Vyhi3SSbTLM6yuiVgVopBkQVbQwrGHGKSfq1iEbv3c17WZZ24uxc7bJfDxohjh8a9n6VdUia3NgdvafzjN",
  "key17": "5ur5JqSecWEPKEpdZ1z84VWsjtLwUKE5UvaSVoQ8HCgNsuoCK3G7w4po1XoF2Xpu9rhUCPDVpAYTqasjg39HFBbk",
  "key18": "4xWmJa2ooi6aVMW9anWKepFcsByVc4Mk7VPi26WYffGoJCuFJqKe2Fr27yoBM91XwrakEw3HcM28X7eaXSpiczjE",
  "key19": "3FubdyKRuqwCGxCjajom6sCpxQGSL2tFQbarfTVCqdWWp2ZtDJ4V3z6VW2PbtW2CD1MucUJXL8z3hwvNUu9dkeZT",
  "key20": "3eSnSGdwppUVzkgcQBu4fAXLKZe5NwB4PrEq32XQe54LidEDmhirB66s4xSogjMc9uqLWg5SvPfT9cXEFLnms2VG",
  "key21": "2n5qvYroGzyqaTVSaN8woYCJ6h26ebTUDQuLvE5zNh9XE9YTQLLSufQNZfhqCqZL9Wv8HDNxvKpBkMuKGQEi35Fm",
  "key22": "wNYGmuFZtuWGTQSnk69mCzXiVm6PKFiixMt1Uj6WaEstHB2huivqtYQ4ut642BwqtVoVScKhQvdvXv3hef3zRgR",
  "key23": "28tUbt8KB4u2yvz6sbeQUB4Z5gaQPxrUT9uvpC4BBXDnVWU7sTp3LsfVMH2jHSCPppgBhtfN3ubmeyip8cD2n6MG",
  "key24": "smynNMPnQpz3EeUFLV7mL5riUdqGyDuq28kq8kpT9QTpHKuriXKK2iyhCT8AcsdYLvTMMwMfmavapqrjvghTLvz",
  "key25": "2MchS8kKeqGbsf2MySJGdcwjZEpTCWeUSMBSGmmAukA96EM7fNPK7tW8T61CEt3s7pHnoRasHnmGweTQMBRAcj4i",
  "key26": "3RJgcxLoRdtR88UhrJc2JQ2DGMBqHZZMTUoXniRTRJPRFXh2Mv2tfpRzrcVXV2E9gap6NUKyiaA9tvN28yQ59xH3",
  "key27": "5ksw8GpJsQVJEz3qF1aue29yrHDKHeFkt7BeMDhhig66G6FyZKkows23LWsh2u1JBu3KC4jsruPbnqiQJYKBcnt7",
  "key28": "4dBHR34Dm91N74fFBJQuynbpiA3xPqKdZt8aaqXumQzSA3FVNiTY8D9VRfvwbRuhbc6uMUaK7nj4oFuFi6Dk2jJF",
  "key29": "255DXdwFFdqLXHrQ2sKnyspjWmeFeLMd2W8Ft5yRDvJEegvsnaL1VQp5v2A2QCeqcGZcktpStqnAawgcFcBNDJeX"
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
