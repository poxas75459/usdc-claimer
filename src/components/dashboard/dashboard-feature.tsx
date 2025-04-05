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
    "336zt8ehJUp94kFsPpBLGewtqLbQPYxNJwn2YGcFvYgfsjcd9yvytHdkj4f1JZpTUTx2sKwyAWRm3EQNCAnBPU5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZMT3FW8XiV7Me4a8ezSnthN5WHSQ5GK52CZQkjiSqridSsW7khomHzRdC8dNLYqWAFXBHuBEWvFvr8XN4jcorhV",
  "key1": "21DVz9VBczMUQgH87GM1b1khtZvNAM6t43yMVYVKLwRcBKfmLwgm6xY2rQqZJu92qCKeXBPaDTAaGAj7rWQAuczf",
  "key2": "4Ucp37Waxx5PkDgnCNhevYWtU1yGVnQfBtUum29TKkmt3SeB8BTrNvCWKdefxkDhAcfZS9NqdwNsnUpX1HqwLZT7",
  "key3": "2SUUN2P6mQr5w3u1umwiz4rtnzNV7bbF1V1DMN2SPrRE72DJ9N25j5gqrwy8SS3RAM7Msa7tWawKqG8wkWUjXomm",
  "key4": "4bgAkjqhT2B5grCufQuySTPHd2yjfF9gXwz7qHpbFpszt5jgJxWV9NacLHhNTSFY8Y7eSCmLA8SX4kr8jRpecJ4P",
  "key5": "3AUcRKPVBnNQ1i9njsR8KK9iuqK57jwnVvwbhgFkiAp9WD2oi5RooYqohKLD2ELeswr7NxeRuUxrBHx1s6jZgh1q",
  "key6": "sAuCqYPcGi5VjHmSxpUfKxrhhDHnSz7dareMzorj23SbvN43zVDRpPnm7oQTsggRSVHuxFiEDf1viwzWTtFgqfW",
  "key7": "2QrDay1GSsRPaURftF52gCB3A7yiqBvChFq2iUyUBCrd4NvfT7Psn4UTxd5yUoZbH7qiG6wxn6hXJdigCaoCyytC",
  "key8": "5HACeEJXovpB1Wmw5u9WuYMQxXyLyb48LwLnAJBEhkzSaembPzq4uuBCEwCzjpwcHo7rrQh5hmjbP6gc8h5c8AMt",
  "key9": "2r8aTNWhXKW52m1zsuEeBVpkUDJqXoVDPH7aeL89DUAjXShUkFfPk2FTF4FrkBRsjSn9wVxfRPidLEtu16iYqAuz",
  "key10": "51DPkZLPrq8MmjssLHtbXyWe24Ro4cGgecc8KmRoX8b7BEj7DUJp6GMqpgqqB6QUiiFcRghT8gLaBF1GjuZEBKv2",
  "key11": "5MBGaigTPee1QP9qDMNxq5HM3PATeb1FrHiLhAL3HSmxiSsqckUHmv4FvTHgLyS9yMSqqKAprM17MtYkRaYbUg59",
  "key12": "48ABWs6WfhP5A4pz23fMorEsjbyho9y9BZhkjGErCnoXY3sP8MSbzTxtxCJGb9mT187puqWXTEK2kxuVmLVY8Zti",
  "key13": "4fNj1B4asjFSRXAYqx64Essg414Z5z8Jg3GmbFrsZavjdyJLL8sQihGdoKMP2imSDchFGxuPRhZEncu2oSGr8ZzN",
  "key14": "3NQwYEMA3fFQ9vAG1FSH8GFfyi9gEs7RyrReoCqsdFhi29TSRXQw9f1jTSfsNLk5H947naMmruXkpkhfpLQxfYei",
  "key15": "5Jv3aYWMruBYVT6VsdNFhfyMpcUKBLu7sWnsbsPMtbPqLG7vTvtQ9zbpPh9oPeLsG7CrQpQQQ2jgJhTAbSPiRLQe",
  "key16": "5pAsNM2PJ5GE1S11NUU25WuVKUzc7gJBxdjnbxfpE7MFmr6bnwbXQAmdbq5d9CFNonDxCZXs9E4GDYmLpNbJFkYU",
  "key17": "5ig9TNheMvroRvTT218BwRKFa5LfXYH3nEi6zULi2wxJ4aFiYKrEhuMZhP8bVENAYmwrdT8iYKTuWyZ9DpKtF6kg",
  "key18": "3Rptsrzp18wT5hiM93G7obyyffUyZj669u1QUNjtLr1Si3XntsqzXdjp9F96AxQpAxpJGEJUumv8Z312sREdRmdm",
  "key19": "5Mma1in6dphLRJ2mmPsaNawykQa1huhTzSGsetks5aedpuKRBQXp3o77SRHtKo5EgjQZHiHh32XMK1VQv9TP6ZWQ",
  "key20": "2vbkWRnVECXmobBsAP2gC46vBcMjoCgXrXUyrDPgTjd5NZhDGdQ2Juihn49ewU2LauTLYia7QFGBwBLc5sBdYkXq",
  "key21": "2C4oF1E9acYehyBGvx8FLEgK9CfPej52U2EyYVv4bpHhLuZVArgBe25wZswPs3M37v7jo1H4uS2JZ3quj8fsKZjS",
  "key22": "233cr6XokrQMYHXnqWsXFE1nvmefrLZfLefJHHJHg8ahxxuF6oGg23qscybczbU6RGpf3JWYWV5jQYEdFUBwJkqH",
  "key23": "4f8uusPwfMswhr863imqqFMrdiAojZRzYkxw2fSLx8i93XWrSFCuUDQDm97R4QHukLeASEVk46Tp1dRwJGPMrP5d",
  "key24": "5SQh248ypsjju1gVsXDMRySPYkbDwgbm597QG6QurPNb8yNArjMt1qeuj2tx71LygDmE5jKfsMX3Z5ckwAy7q7XT",
  "key25": "2MYjaEsz7aH6HjK5MraQwWfWpU9sjsdgSivv2KUX5T6kjBQQGjbbfNfTh85H8Aqaa9jHRRfKJunuNoFwwdnUimLd"
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
