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
    "3z6Tg1Ate3ziyfAS4kLkG2gxMHGBRvQYeU3qH4r3wcWUwsnE2v63f8bGBNcFUD91zazAjR1YKLhL7Fa4263V1cyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HwtcTRfPUwDYoyJpK8ERNtozmW2ga46Jv2j6J3PwdfPyahQeUWGRHPB7GmR48LwzL1euQd8xfg2Ww5bc2gp4k8z",
  "key1": "5BCseJxnXLf48VYsP6zebteypybLAu6JDgthkhXC2sSSgVxaYe6uXmecsmxkKpt1MVKD6FTyQitsq6E9ffeWgqDK",
  "key2": "2Nryj5ZctShPL8bj4QaqP2RBaQMKqKxwjRTv2RaTLTNyitbrGusVNAu1VWpLb2q8c9zKBHCEsMHvApLZBaWio3Kz",
  "key3": "ctrhFqkb1jEbmSupE8J4Jy8PkEaXSkq9uShW9MJhknhrPpzmEBzwWbo1BMnB365V2Wf4FecPgdJBUam9nGoindZ",
  "key4": "5moAPENKrcGZRQjQXBbpgmVngWYiwQjWGKbkEknzfjTpbu87awbz1z387C4sEGRESDDNi1BwGpWKDXwTbNSKCpcT",
  "key5": "JnNkNrbXZ1wzjV3DukQFSshU2j9BNWREUokaLPh9XSoocB3Ec7jrhqkoVUEcx9tsq3zi84E1xdTxFdHvreDTwyM",
  "key6": "5D5MQPAUJ1yc7KdAxnJwqyuZ4rwCb2RciWVF76pVGUqoy9hgQLpyDHaLMzngoJK5GeXN3rqZr1HboEAfi7pUwgfx",
  "key7": "3C1yTRxmm4ZVYEpuXNdpmS4DcVijHD7Dw7o8gSnURe2sCHZxy1ZKbi9TFiCiQu9owgwy6DspbHkqn3sWqAKfdi7p",
  "key8": "4zgZqjWwzAZx7pGvbC7iD5hFPArum8beZWYM58K78bjhhghiFMJ4VnGHxU2p7rXEAMeMB2xte13iQfEjqwDdgodH",
  "key9": "4rbimmZNAmoyvEe2imSYfhWbtsC5CHCVXywynhgB4gy6sktbPFjDmSMqnHwWAYLWixduhDowxrvxvfsbNFvSXMAa",
  "key10": "2DKhVRyZeosZVJJThCYa68WqoJryxbAyGd2pXw2dbdjC3yBtxnnFuKNHuSTYrxptv8EbgpfS92uruhJLv7jdDjdW",
  "key11": "2wJZu8MbMvDE3EXGKE1Ed74QgR9K5EZtUTiBvFv8CpJrRhKekEMpmXhcc1o538hw69bXzx5eGpNfiTpig6jvkLUR",
  "key12": "BPRoFbDE23qfBmRYdVzegA93hGkdSzfBgJ38prF9wbLHxFZ26FsCQZz5MzMExssMg511tJFWG7uNJ5eBfoviofp",
  "key13": "2evLqfaRqFUNBbAzg9acWnUDVD2XTAGcu9VhYZDpRvTubMZS7WuwC1nDxB7HFcjKNx44ba8bbMBhJ1YWNajjXFDF",
  "key14": "2cKp3JPgNAwvit1LbAcskSjqK2tqDk8kxNxTxeudNmDFk25GcCxHXhWpbYHykZUBp2WXD35P1dA8JGFdm73GroMn",
  "key15": "4sTLqfr57HTdsfskQxE7tVmV3Vio9P4NiZ9TEkZTh28iFYZR6fnhtUQx1nnuXUWHj8owKfpAUDLFJYSBC4BNbiix",
  "key16": "2qTsGyryG1GHThBwapmnKCQhRpCXRijuqn8BaFApgBUkfYTjka9vY8R7YM2ho3qwaYZUZns5onnj9aHY4MTzTn7R",
  "key17": "42nMWMnPkgB5CHMEcZuueqPe7gJGvAdXZZAsyPn92w269sUNzeArYR98dM3sa4YytiwAuzktoJeTNQB9SE6SCL2p",
  "key18": "5iXoR83ZDLVid2ZnpWUqyxZ1BcVnpgMAYXobwtjLLc9sjk2zKJH1jBBR6Fz2uMsWRCLRcG4gsQEiR8bqHHZwJvg8",
  "key19": "5t9k6Mf3GAZjs7E94A4y5eRqBtUhpXA3a23qENUX7YLT7niqkRcgewPnCNF6zuLnqEDks3hjNCkZLtqp4dAf51Sd",
  "key20": "67QepZpAWJK4asWpGQb7yhvVWmY46R9URdh5YUMMpCe5Vjdo8WbBbz7xAGYMZpfWHTktUCNqgdVBsSsWfmhjCY1P",
  "key21": "5BB5M7HSKHVqnESMV4CdehcPB5fVeFPCG8kjVZSXobkHLwpt3ufTJKniXpPqzbNEwXcsGpmYcBb21qiyiPgSooP9",
  "key22": "3UjEHe7ZtoX5tNtwgr4MAxemRSstGmZdLEjeesW1gz4nMxUZLYn7po6Qi21LwpxvqjgpYF9CySXLWTPFTwcxSxcB",
  "key23": "54aJvsMMBkzMfFUfAUxRUE7gZgsEXoGkJhZnrkVYNo6DTyr4xmUjeHn4kZqYJHYob5A9URD8f6zfHWBNhSXXRkCX",
  "key24": "2NYBjGJNoQWtfrydz8nEkQxi8PWUfKTLLhncHQGMUorMAcenCUPaGAzMn2cFrd6GjATLVqYsYqShcT1GtraTiHEG",
  "key25": "31PVrp4uMmYcLCapnUvaeCkuRjSXvam4HSuQfvMLxXrYN2vGYn2kUzvNKiozJbkgwDwxB4Tk612fm1c9FcsGNtpa",
  "key26": "WGqPKiFqaffZtDAyhwu5mdDh3eNJe8NLWfnxuj73RdWXc9gEJ9KutZA5awV2yiKgfuMyZVQ2tqNXhJMRFkmYmPy",
  "key27": "4qS5vXnoeNXhURnXQ34WKagWGXTeNoA5eHa39WU3VLbqM5RqiouQnXyiAZzLGLrMWn9MyB9T5wuy4PHQPcD8NtEx",
  "key28": "5Vor8UAMx13i4A4KRxoP8sofBvWGKdUUtkorJEnqJoA3oP7xLBQ3JM88KkRdp5hY3UxHGUdz5PQYhA1bKj1STNBb"
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
