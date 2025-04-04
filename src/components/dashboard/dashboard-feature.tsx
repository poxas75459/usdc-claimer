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
    "4n1mEAbBLUtcSTTLZqA5zKr5bFhmG8VCXa4ACoZPjjLCyZv5oZfYFg2GS5ZoA6XtptQ1gqHu57wBmKFKxVcG4Tfq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QSsYwo9XsTH1Vz4ArnhKvSdwp8k94RoLJ4pDzNBTxAc1v2L5L1yQkAn5rQ1CGuLrumWLv46jU3bPZApCjJmNDjg",
  "key1": "3sZkdbvczqqG9qCPMTM6HuZHBro3Lg51kxmyPRSiEe4QemU1J3rAUzqNu1uRyYpUFiN51aKNe85LefvWnUx14vRf",
  "key2": "2jsuemVtccsMp92xPWJepg9BL41eUZEi6wRbT18cW4prqenJDopgzC5iVuv5ucdTWSXLdip5maBj3etsyFCBtFxs",
  "key3": "4gw7HCQL7f2zRpihXrKMK87GqnStw4eA6yFeMfRzVmanc8jUKTJuq4pEyrNq7sEoJTe9zw12kE3T61bUrioAHsGD",
  "key4": "4FMVWPaja9owC2R9fWbDXgn2JJ9vRDVuZHD2jMVc9hXEbS8UPYBjfE7YnWAFHNNwxdc8oBEdw61crMkKSDNeLpoa",
  "key5": "sUaYHfaUgJHhQYSmRwDcBwHePMrpU81EsssEgWc7C28A8DBNbRB51MNQkDymyyFYsGb12WerZCkx5bh92iVPA8m",
  "key6": "4yFmWp5CdjS8Eec1aSBLzN3xR9ZAQoxKnukYiTMeR2qCwFnNCxaYvtk3a76hYyBmFD855U2sTsTqfthgsRCXW4pA",
  "key7": "5tv3NQFQa1XkEzmGQ1Awqo3ic3Pp7twmUcDgD1gh8ugxe1VT6oyqEPVHtvubwM7aGt7dPf6f6GPgeztL4RWEYD4n",
  "key8": "3XBYJHna57bwbZ5p6xFxEvWFRGBQFiH5SMXvdBxVAYzgioKa1LkToUJNsRAdFqh4pc9ULBGi45BRVE2DLM7YPQCP",
  "key9": "2JAKC85Fz3ydf21qrY5TRukkVovKXsGEww5koQ2o4fM9979Pv9W5bdo9pa73xNV81zFWMZfbYgRzdVWBz3mtz1TF",
  "key10": "5A63pv1nnNevcmPG7H1JqaPdvNGye9zK32fSxiwJRUp25maEjUbxJtgozbJm9Ak3DGsDMmQX3gyNUCXwBZ9Qsicd",
  "key11": "Pbd2dHV3R45eyAAPxUix1aqdYGHGenoeE63HNGA813LVAzHMxJXCU6Z5M5qiATY1JLWWXvv2irXW7ySTMQ3Rk4P",
  "key12": "KiqSve51uDtmGQz41ZS3CpaXxjYupJjyS5cuLvPexkZPSirDv8LMJveN9ngvrK1Q3PagWwXUFczVCUoENPnjUVz",
  "key13": "Ts13MBY5dQcjzn4VyrBybZJbBXceSiYz1TaMzLNphUTmFFo3UU2B3GfzeKj3U8Zhp8tuYAwQdmKPjTn9p52yLjj",
  "key14": "45Z1AgX65orQAxLe7pn9gQHx3Ezi8HjF6tJhK1c1gjYxRdNrJHHSM9REryAtfZ7zivn24hw92N3oZLdQiuKbpaJL",
  "key15": "657Co7pV69MBccApVendUn7ujzA56NcwXvHh7LkCFXD3ypYPUmZWosZd71fzTTAmbE6dNQSd5VbdPuQSGf7jDHPT",
  "key16": "4EtxhbVf7tQLdSWJrBBjE1ik927rf46xuZMyhhckzr1Ch8edRjHrcwkQX3sR3NmpLg51DBU3QztEbn93PaqXYDFZ",
  "key17": "c8Yy6xvs2FSkMcn7UHwaD2ngSfK8P2psPDv7BwtcHTRh72syN4hJsPZKUWRwZeJDJDguHk7VWAWksGCWVC1LsJn",
  "key18": "3GyMjbX9w6Q3YXhBxbf14pAdzjcAe5ncCB9mxGphkB6CrsXZ3ByoxBvQ8QjKbCiUDzRzaB1NHXqgrBK2KaSM7ju",
  "key19": "4o5DfAUSA6DT7fCE3DaiDomEbrG9L6R1AiXoSw42BVNgmLyuVPNnR2i5z7vTz3HHdHWxQ6wwf1PFEaHU2BqWJDP4",
  "key20": "eZePENSm13ysMgKyhXHoDKVD4KBK719RjziHTj5iDyAjZA5NQfopwu7vi3MhLpBU6T9x7pg1a1CyWngBi2B8XoQ",
  "key21": "4Bes8ssu37evdG64jZti5AuGYaqgWQkbCYCz69uDrEvh2ChCz12hFMqBbCfdprg1FAieZro5RA7xLb6wRWnyTs4N",
  "key22": "2tZa8YUGPgk7GR3j794NTcsnR1fDkJmwX7tAF8CA8zfyzgdkyj5kuZ88A1QwuEcF6KJRDXL2F9e2HUuw69hyViX9",
  "key23": "3VXfmwNBvExhjHDUS3uztmW3cXjjdTKBb2KfsQPjjFgHiXd9jabZNHJWhWGxiNH9zsbu93NfVTLdEHW51f67Vymr",
  "key24": "38wnKaoHGncTxhqSSWuVmj1ip3UZAqq3ChSMNAKqQLKj56cpmS7b3foWYuSZd7aYqmShMZD3uJ9jdxg4rw97dWPW",
  "key25": "3kv6vxKssBY6u36GpwW7qYH9CB5d59fLkhdyyX8txWWkXqjXjUaWYJipL1zEM6itGTw8bd4hd5hCBUjkn2vVcKJJ",
  "key26": "3GSL9XqYjhX9kpDri8cpUPcTDwVK2CE4xw26guaFqwN6hfmYK8ERQ7eLtCXmkan86KhaTei9QVS93QWoifzJZWbb",
  "key27": "4K3W6AchWsK5P8EASzF2mpc4xzjN9Ewf5funmxVPigMCCFV725zMuZGnjvtgszyQyz4bmNBikqbjjCpgokdMJVsV",
  "key28": "3GSMUQ49pvk5kY9bfvTPL2oWsAzRz2UvMoaHpfsnn8UBFaRzz9SCiBEq8GPq3G9Vm9RC3RSnntUQHajpHqoEUav8",
  "key29": "5aE9kXE35KaoLa8uAu4KV2jxvcYFgTfY9V5VnBJTD8UZFEf5Nvsu2J15YMXDRKb4uVwhvJQEhcwSXizeMKAh94JB",
  "key30": "4TbyPYBGaAiyChq4LAmkq83dNPTEVMu43HgKZjS5rqgEgKzXE3oDmd8usweQdop6j6RBrJcCzKmnCrXXWnxxnUoz",
  "key31": "27cFuRgUbcFPLsxbUL32dMtSvRpf8MUDdb5bfv8Zkd1CmRNZgbwai2YduXZ2DfdH41JUNVwi4GB9DiFv3w3DGVxT"
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
