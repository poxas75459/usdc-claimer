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
    "yqFriF5SDFJsRinXi8rhTmu7QRtuDmraSFDBweMnziiC2gDPdkuoTY1Fjth81AE9CnQmR5aNwus5esqh7JcfC1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDje7ufVTHxeEpR3vg5nwgqXySfkConmCJ3mv2JfHR84AqThSb8HaoHMsr8M6pthA2J4vF1Z8hwdbCGTQAJe2mL",
  "key1": "3vReiymZJLfC4vPDwB8kzAhmMFHyGK2vEiKza1xVE9McnVcovQ4MjN7PbkMmnE7eNXa8qhWtfftu4ohTkGMgK4Zg",
  "key2": "4rawdTLcjNKXMMQRBQ3Lf92q4TRDurBHE6WpQUn3Q8teSsZbxMTvTe7QtqccMjcoK8NxXxQxfKwWsziaQ7PwkWVw",
  "key3": "4ayCQDw6uBeHCsJ5ZX77fWeaFz7h8adhBVQBQ2uBgJ2CBMfwTy5vVUPAxq34LEPhHpG5siv23fEUwVhxt6Gywmkp",
  "key4": "4TJzAJTWJ8Q3tpJR9iE61jf7o6pJEuSL2iBq8dnKsEBDQevweotXNNEbZZyEKX8RKQN2QpnELjgt1vG2JzmQ6ZGL",
  "key5": "2GgHjk9qeVdXWdwj5eyYvqxJGcVozCefD7PYDX4eDPLw54p4fVbjov1LacfQA12YP1jAJFcG4Cni4gZV2oKs9LPn",
  "key6": "33gSGfre6m6iebebzXiafo3rvqWDFg3TFA61j4J9Znzj8BvKUwhBPecKddTuyBDSxBGXRnP2NMmLWCqeALU9kzPR",
  "key7": "2mFPFz8r1cEmgymx3tfokcp9tLJkSfQcKJhhE7hGhaQgfzCDPUbDT9kGyJ5vK6TC4pwUgeqp1bmJqgiBo6jnBwxB",
  "key8": "4BVCusFqoKeAwaoFPBwjUNe1dUWsLfjmvu8w13EPx5caCBRy9GRPftjvkqJcYCmbxF9eyrh4cgsY8DV1zpgw3NRm",
  "key9": "4sboA2Y6JiQ3igJZPK9DsHvWctzqjVbH4iAuQopxirLDgfB24YZPb4vekqkpfVBXCRzKHV7DNKFnrvC9h4tLNWmu",
  "key10": "3VjsUEs7gkyoQoMdChRKHyJM9x4PTQEVPvkvqotnJaDtD7CCW5R4qzJi7mu4UaGnMcNkg8picXeGBcN3st3FXvrJ",
  "key11": "DgC6ZkaypxmqF94RtBuyMcjs6tMU6wdkNWdhVSYBArQqZbHdV3zkAYE5XEzwEKbTs6KNfNinMm6S7P2rgv6b5Xg",
  "key12": "3AXbw3GdqiVWPU1C8tA4mCa6sGyrAb63CKtzx7mvkHReBFuu1MniYWYdq6kohMigBryuonM4MGuHejLc3rxmosh",
  "key13": "2V8vGvgMKEiubaifrPYLFhjRf1e6QqXYhGhh4nFQyzr1FQQpsJxhdqgdqDHe9n5sFi98AYXs86LF2Z6MQbNAHYjU",
  "key14": "59J7vuqaoPSKZg2nQAL8GEzvhG2aYwpDt83UkRMfAxDhbGizcLKFRknzciG9p6b6YVNmh3KPQcEThe1ku2Lq2rXP",
  "key15": "56B3vdkqnEP6MHqd7uGExJ2afzKfJQ69nb3uxF5vQxka32L2B3EdujtTLkc4jC5tsn3TQiEFbqS3bsSZXNMvPEW1",
  "key16": "CXpcktaiTc2eZKy9vW8n3EKXLZ7sJgbj7reqxd2Lvae5ns2tuAeXeWyUSzxbNxexVG938spWLj3jRM99AHzXZcZ",
  "key17": "4fiUGteZah4W6WRMVQr364sQ9PJxNUMHxCoBx3HBAhJpgCrbu7s9xsjKhR3gs2L37ZimNS578HYsPwR7HeEu3MhU",
  "key18": "2PAaUjQsJPSYCV3RzzRGM418nYLxkVWdz7D6ixN8A1Ka3HC5kwULbDejQw3bLskpjFzk589K3zxEVFrNFQnD3h1J",
  "key19": "5CtCTgTzVTnDQhxB6hmAB954UDpZ5f8UjSqC37Erk2J3vNnRZuhMoy4rhjuwhF6pJAKihxFzpkLRXsBpEKYjAuFs",
  "key20": "4dHQsqaAycGxrYtjg2KuXGgNmSAeKNBemHG87gv2JU7s5kYQcJMC3bELn3Wo36ECSFaM7nnC3f8kxGtJoVFUjkxH",
  "key21": "3aqjDG3XMpD4jtB78zSHReABP6yPcRg9PbBk89ZBf9wBEEMHNUiTERS36Pba2wUJTXMYDWHCZLzMwHheecCaQYTX",
  "key22": "48DHHip2zyyvhidKCEM2aeSYSAhmqU2iHnP3ZCcDB7PdCcAGrYDzBfHM6Yyc1SSuENrtY5SUpN3D6BvRgSHWY39V",
  "key23": "aTAZ5koqV1juTytSpT6UMpRgfiytdHhjzco3z8WBPjqVk8r9VykcxeS7kMNsiRAmehQiX2gcSYhGiRCLgJfxTmJ",
  "key24": "5dE8LaikrGAR9r73rBYBpaz1iwtQg4KiXduyqsLswLD71ULWEDWBHnm9RwvsAPQsHykqVjPFv2o8aZpVLz1p2D4L",
  "key25": "3gTp9zWpmHXNYakXwsUwFGbP5QuVpFw772itxnmf8vEtfUwJ4geoHxsWpkZ2sVRDTRvR7mMnGNZr787eX4SojxUd",
  "key26": "2ZteWz5rKMBuPucjCkbSPyPq6PyJ4bHUsA9a3wenek4cAznQRNZhg4kuaaPW62JhzhYD8pFAeWF8jZB8ZWfvTrHt",
  "key27": "28hY8V8W4wXe4KYMiH2DjB85bav6ZCQqDRiFjJeFTLzMd7GgaDcAsHnjJLtMZRG5Rm8ZwoRs8n365CT38BNyHFVj",
  "key28": "4K9dMX1jHB6cZgfFSirxMfqQpgm2VgHATM4nnZUWUCzaWd2GTJdwLrRbtWWWP8UAkDmxi1QkETJ96qar98kwP3Rj",
  "key29": "3moxQbGcQ7hjw1GTccFe4FiExozMbmb5q42kS9wEk3Ciymat2zBXaVqWXjgPtrehmmwTfYxfhtuXebRDoRD5w4HH",
  "key30": "4DsSdfUppXr2wxh94hdKB1WY5oE4GcTb2EQTSDZ2fiqZh6uoLNMeiUDznCnrjyAc33d3hRkpkbF6ZzFdJrcNYy2M"
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
