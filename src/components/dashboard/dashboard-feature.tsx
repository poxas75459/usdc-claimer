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
    "29Y3Qsyhg3BfBvqS3ZDRjXszBadQVptBe4uwLi7rhRXf4S55BDss4j5RN83CCfeuin655MLWVwic4AjBrmwcFW4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WACnZEGGKHXEtBJ3vDvPL45Vtp4CTbjms2S6Ji1YLF4j36pSm6A8FTXmF1F4cevvqyoXBa3xvUAdYdF4SvJMRFE",
  "key1": "3EyR4JrEgvbLAdju5UFCdn7NZFKYgBkZn9ZyevxNng7WmWMmU42fjNJBimGLMp9jCsEuZjPCA7y7JjiLuS7A6eDB",
  "key2": "YH2TMFhf74hAt4yHd935ZbVEeygdVRgfhyTw1tVeKQJJvjrsRcc4ycbq7LX6qhpct5BDTePybMrd3z1UXfhhHiB",
  "key3": "7z1zCTytFMg8zKEF7Gnr6SMuQW2DBGTSX9GjdFh7ceepDjc16s5vxjMJx72fxM3bwwrN8kp3tkiZKNYLVYkAc3Q",
  "key4": "5HKcL4uyDqV6PfGKvE9ahr6Ktw6h35d6h63ATboT2rJah8ysHQm8AXhtQgf167vvUEQ9HebEcYq9HNQrnEz5ibEY",
  "key5": "4KHwsHTBgXLUYKD11uQQpmtLpcfg7Yz2wbj62r2i5qCnL8Xo1DPiUA36ts1hGjqrwUnanbDPBePXp8ds8bGsZN4K",
  "key6": "48H3ainPWtDrNVjZtXvpLHUi73utvazhtUwHb63nxihborqDyZuScUA5MHdAhdzJoBzm8tdGpGs2nepXqXME13Hv",
  "key7": "7dbwot1tr51orcxAcL8v8rMfHEBtr4BunuewcdUdz54Z2S5iHmjjfAnCWSxrEGYvi4niauZbnwd2VmK9jm6H1wP",
  "key8": "3XUR1jG4QGqiuC1AdemcBs5mqjzZToo5cCudqxvxgKxxVjxtXHvhCNcPPJYKYr8VyxckRDMXGbkq9WEZgmq2mNup",
  "key9": "3byTvXJtNHpj8Z1bNW2HwYv9AJyb8AxiwqnZFdH2EmS5GF9oyrCYA7eok8c8r4o8X6wWk5JreNNDzS1anCUZwwXZ",
  "key10": "2c5t28CXF7FzkwZi3LmTFvxdRD17hvXvnCYRHZzMavyHLhSWGWiYy6QR5tY7QeM7d991kSnuSkDJjSUarNhWx3vm",
  "key11": "3dooLoMV9tdGP1BTe65MGU9H86uFR6aLxYfUY8C43hmavbAqD8myyD6fJr3M6YjyUCX3PHFg96MhuWiZutLpNWUJ",
  "key12": "5pfEscgcTZgZZztAxFNQCU7vmYmGryhgWccdMhBKeg3AD288DHwdVg4C3krwDADMzCYBHQtgVam4Qz4jryjWncLT",
  "key13": "555pLw5rw85Ln6TUYQrkkWhBCAzFaKkALR9j44avWkPmHhPCzxkZzSrJsp9sJfceXD2aAii2Ae7xHRW98vqUEpo",
  "key14": "gEZ6ApiUSL4Con7VQVeCCBJsrXtVNZUdaybepfN3dW2B1dxTNzjknX4ZXVfCLdAjs6w5KEF4A6vp5fdP9gpnTJ4",
  "key15": "3ipNsYSgkW4taZagTzpLPBBzHtXpiMQreX3s6GMCFhZ8aA2d9567BageAJDqCNPpU95anHPMLANd1EisTcAtaHGD",
  "key16": "kGxuwgATiQtGZrPjbE4vKf1GNDEDJDHA7QUXd6YAXVzbrjPsjfGJbEvtrcdF6HmYjr3YNCZTyxgkzowodCEARhn",
  "key17": "5og9nYASP5ho2sQJCqmt2fC8WJyucqNktwoCZHiQ82rmvr3HtUxz7fcQdH9CWEcLWyR398rmpsGnwiwbbuyHxfcN",
  "key18": "65N6yqa6LHMN5yoV8eHgcdEV4DZLNa6fdR2U4shEyUSn1E4PRKcFTzUfXpeP1CLX4wWibJ53WzpkG7FngnWD2caX",
  "key19": "2Jc6jMDtaDkGxTyx3KFDmVrx9DuZZUAfjGKeKrpK1g1TEbojwqJkwkjsid4pBb6xXLoAzCmaZtagkPwHuygwWScH",
  "key20": "3FZDTiH1g6hFS3p3rPKDW7VB1kdTaXyxYnG6WZ1khtKUQ1YcjNVuxkhJWsQEYe2xufcZHKSiKKfvmGABrnDZeShh",
  "key21": "5hyrwCUVaDuy2DEyPgcLRZAYq4e8zWmipd7TPKZMpnLVQFT9TRbhyJ78VAjqDjYsEWXJ68KKAHm2mneBZLYH7zfK",
  "key22": "mf5LHFu22cGWjEZKxFi2KMt94dcD4zy6CKjnyzukjfeKFcndcwHT1nvB1MRNDmyXneQYoc4pvUoxy2mhkZxgk3z",
  "key23": "4aj3zFhSugQxoU47h6NEZvNwETafJMsY89iMjoEJjcDzAFyGZyk5wXYaxTvvXoQP9L1Lj6zwjVEMv6PNmMpFjTgB",
  "key24": "35MPH4wnTo6dTXrpqbmFaPC5RNPCN4fp7WVHvZtVt812JM6HXGyt4CC6cAe4N29nvBDSgUEhcMnp57219x5kRkjx",
  "key25": "4se55BZTcreJou1GFA3a1AenufRYVza43ujGGdGUH2LiRipoewXh2Vqzwtvy9yTdBEHQUW22x4d6VSxrjhp1DRx",
  "key26": "Z6znw5rCXXfufr5jAjSxUNU2uvmaDD1YuT7TDwtS8joWFwP953rs4sVMuvdKF3jNp4Wk1YSYt9LdMqsmDYV1kZm"
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
