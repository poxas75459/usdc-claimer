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
    "2idYKBCDZosiAFp5iNroXqm7LJXq5mcR3fXXFLX1w3VvKnG26tPvgy3u534NuuEQ7N9cvLhdAvkssqTLuscCSpZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Msk4CwtVU5gsZrEoXBTsQaFfRALJ5NX9wjPJ2tuTSe8kvCM85NFQ7Y4V6Ypd69ubx84VsXuDDtXdoP7hu66ce4",
  "key1": "5AN8dhc7Gd8Hu9F8cB6S7eT4f2m2d5644ABrTgN3v52zjrsXS3Lr92pt2wZe4VWbzwnFbkzTAsnkKi88EPHmUX6g",
  "key2": "zTKC2PjZuF7zmaC8osW3o26NECUpu3fEfTmVncZGS9tCCFujHVz1zutwdusGuv5heYwmeNUdq9d38EZBptb3Seg",
  "key3": "4rRNRKRNYbQAUTyRwdJmYBQyRH5x6zwZXdttQz9M1qtgZnYzmzLygdjhjAPxdKP9KMTB5pndugAbSE2KNxqMNs4Z",
  "key4": "3PwDYNoPN4UUgm3LNzF1AFQReqHHvoAfnrYAibn3UqLnBPKYq7kejm7WQJR5FPR21EXbB4W8Evra8P2Ms7FJEA5s",
  "key5": "3xDgj7WdjqBfzvxqLFA5R7xpHd6E3pTHWRSX1M8EqWiyjiVbZR1aL9mxRvxwa6LzMS6DjXJ9DioLtRLtpihdmauw",
  "key6": "DWZJ1XZLNK2F3DZCDX16aXDVwf7Jed8zKuiyDUugY9Q36tTeaB5kJsBwaDvMzRcRTHdwu1WcLB4rJaoD9e1HLjU",
  "key7": "2dptuLoigv587uAFG9wrrwNTqbAoGWniH9qFAhJW3K8NujsEzjQKiGaMwkCYPunPd7rJs9Yfz67R7fvfkMDHYWKU",
  "key8": "5Ep8MhqxQpXPCE7AcJjviyjamMc9R27KoAVtvKoUL5XQeSmjwx7xH8DeaDmwkFpMrDDv3niCg4oLGEtZrVTUWuCw",
  "key9": "YuKWFFVMe9NvFuuZ1uZsEWs9nHc9krXxhDZcjRqiEySpGN5gXqgzSS4maqzEdMHQcH4HGeU8fXzg8td4yQ38d7t",
  "key10": "42TXTp7S7ia3KdLXxzyaoncCKvi2isgYvewtciZUjL2zYQ1WYn8cjw63fciMUig8ZL4w8Hf6XuvQbh3QfRsdqfpu",
  "key11": "fHhUADqHE5ZQ6MwwvnZ2xf9trthMZLfbT3QQRXaRacVJbD9Xar9ye3yEt2yRfSAnh6x5g3urqB1QNzvutLCJJSK",
  "key12": "5XfCMB5Mp2ZJQYQ1M7ZzQ6VZF7qhaHUwRX2x5JnnJxAz9mKyVxDZ5qk1CL89mX1rznu8Hm7FLctdw4jryFWeHVsi",
  "key13": "4qp1p7LJADipoZUfG7eYoLuJ3W7h3WrL9rW4sKQPbxfX59kEvCyWwvCdZLYGZD4ANtQ11HmHjohnw4XUoDhysHHw",
  "key14": "7Jx7FBSwwtJD8VX7Rpp4cXFJHUKrie3cK4n8fT1djcSe5QVMPj6PWsfNnhfkb9g59rKuYqsKntDpYpdjFqzawDs",
  "key15": "2y1q27VFtoYJZoNhf6hi5u4PZhJM6NRLRu2fB6vjUAvBXt1u4CzGJMUsBwGhsm1Ynywe3EK6d1VDY5bsmpFmPGmc",
  "key16": "4zKh7Ep2JtkiNtP56884oiCkjw5ZPyPT645BsYZuSAncBQV9DneuNwV7fzLwCPRdkjhgBgfH2bD9CzYF9wWex2eJ",
  "key17": "5nkjXizPpeU6Lwgibw8dt2QxPLkZqRj5MXaGxLAnMMJ1ni55anXSWC5oHxUjjsrdkWz1KhdPWE64rnG5pkpJyr7t",
  "key18": "679YUvAybjMEnYepA8iRL4KNUrYPEekixwzcqcNSHZ42sfSTVruVf5BLsnMcxjAmkpyvbQ9L5w5JGsWzBEbtW4fp",
  "key19": "257MJDPcX38xJ2HPDYoAUCrnBXcHBkiWuhcYB8jv8cUAxJFSPuUdZhgHz43yjVohSFKuq7F2qb7vCAxKXLsjRkde",
  "key20": "5YX4c6auLeFm1n8o4iErL16KUKELS6UM4fGTuKq9NksJKXAqVjDvsHAYC15s71Gbfs411L6hc2oc65ADnr99dDmb",
  "key21": "2y7AsJzQzzp4g8ggmmPfqnY8aswAZ28RnKLTwysRMTpBsnBSunuDn94fgSv38nz5RJd1NFaRmMrsHr3s4FDsFcEq",
  "key22": "4wWioKkjyfaF72Eyqxbzwetz2xcvXvkoHLuRuwnCZuuKn2XifVdWt3CmHKa9dqSzekVbkvZogoXzpP4bLMTa6MWi",
  "key23": "3z5VFmkhZnzEAtQc4XZY49VUHJYa3SQPTZtrDGcW7xcj8nL9Li1RZrZ3QrKAeQ5KsejvytpbW645hgK8W9LsEf4c",
  "key24": "2wsWX56nvbe1NjYSx1ceYP9nPXn96ryP1h56VWSL8HZkYLtTHmusrbKhMCkLYfJ7TkpBdJ4RBm3DBarVwEaYiYhZ",
  "key25": "24GK2biYPeBRfmVeZ9ctGkvpzvuixqNF3QFxJCGWdxauDW7LNa7iJUYfE4FyzMEJfpYhZU4XpaHqmAgVoBke7VcC"
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
