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
    "grW9CaiDeBhkvWf3JgZn1MAFPsHEe43GBaJPQeg1rWH8skiNiZSwyshUirJTaDQCG9Zg51RBwcMjrVz8ZHx9Gdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48xpiMpstcbkKrTejTQVMzy2GCXdnAKW1QoMz7mWNnTi3YgnUjE8gRx8hcs9MsrRk1hUC2fo3WdGxvEvuHnK9m96",
  "key1": "4kPqqBZbJJfVWXoYmw5VXSEN3oY4n73H5oh74pXf83Js33U8RGQhydysNfNjKj8BQx8DVTtE4FqPqByvrX6yHryK",
  "key2": "4a4udf2JfoWwDCj2Gm44qgvxPfWEf7FSD5b1X2Y9DQAMoA4xNwBLXDvhDegWZGsTgFKc9vS2wwLfmAB6THeBbJ9Z",
  "key3": "gkKKj6dRGP1GmyuLGLvpBrfj2PBtJUgiGXAVTKcNQrVJAqngMjAkjhkqqqNLJkWD3AFDhnxBunNXSZtTeNJc8BL",
  "key4": "2CUph2fgaxmDUGTcYSgXg571i5Q4D9WweP9bTnx3cTheZQWMBVRvsPadJmvvT425DS4uaN2p6Q2PBXs96dZuaJeC",
  "key5": "5ifCNNgNn4tSAYq1DMXUeucSeM2NyHGhFTAnvKZEKJQ31Gb7Bwwu8tKzHndLC5s4oEDZnsQNF5zdz1RnkgNz2RBs",
  "key6": "46vmeWWcsYRB3gsAFax4JVVvCbqsSbzeRC3HHAUxybJD3YkejYbEejR5nTwn48sZq2bv75tJCfSJzGXbAsvw7ukE",
  "key7": "5QJ6kErEKAnq4Bhmo5YBfSwXK14nQi1QMsdfgm8CfwGrvMxcGky5mNTnkLjuKfMobKX21db32952GZEB7uVRam13",
  "key8": "2gTXsCmesrrYBMvCoJjWbKuSH679jzFovwXgjexAXoukjwoHbuDqV9ckGeWPtHHNaWPTmSaL9Eb7kYDVmieHN5gL",
  "key9": "4eCx44E4ZNRXCu4bmfUBhqJEp549WSD55HpRvoFsicf5yKWgTwXwVcwczVowYmiFiQ1GTBGKi3NAKsQpTR4p5U5B",
  "key10": "5p2vRJf5d3cekd575AtAK9XWjgsJanqMHF7J8NuqdmpjQtygskMQtnKxJjPxLfRYM1nAz938HjNVEbez3K5HigR5",
  "key11": "5YfRXqp2FoxtheqyAtBdUgSuyX9CBxc3GJ3QMaMCzhTqGsTvzR6xJnAm3G3yjgEz7uxUoNe3Yco1DVSaMz5tHsWN",
  "key12": "5BUJnra5TE1AywQFwa54EKqYxbYG3XWWc88fYqeZz4rff47u3ZTZn6HPmvZ4j6GJRiM4wwqZcjmeVKP96wJ3mdLr",
  "key13": "3ZLkxCufojpz9E3fXubD687R2wsH882vAQADXD9tEEZmBrjPCMoJ3woyNZ6iMQdHTVWuQxx7TQiLbXW89Mwbe3jt",
  "key14": "42qBmreoVCRiB6Z2XpT5hCDZPifnANjQQnZt8v3LGFhJH6E3RMfAenqFzbT9vNQCM6Rva1qJ7PE1r2JjCMVx4qsM",
  "key15": "47fGBRDgc1n5KMF7Skv3Yu6hzQZo5xYQtG6fsnAGfPVVS8w5pJpb1AD4fg414kUErbXwJKwn6PVqnvDMBEeVADi9",
  "key16": "4Jx5xCEfbyw66FkSkERRSbrEBbfu6upWxN4cVxRw3m9w3Tg3qUf6n2hvqLAkWu8UeH7wJU8B6J2h5cp9bg6m6C6w",
  "key17": "HANRc32jpoFGjP4scyZFxiGk9znpuP46VJFV26kTwy5nZhMwzZ5rXJUKCb6BRYwnYVFwNbJn9JUh4RPrCkKrdGZ",
  "key18": "5R1QWFGJgBh52z13bw1vbWGA7oVBRL8VTmVnzkdAcmq8dePWUBQ4mu24gc1uPXzNitEbNwvxUKoHkg2rMBZYB1uN",
  "key19": "3tUr46QCYMNV2EheDLAZFrFbFdL3kkKXidvqiy6NFezSpafxFTLFJTJwJyQba6zYUoCcMuLPzxGDRwPedUKZQgP",
  "key20": "3U75sJcYYJ4ERTJvNe8uY728R1xpfwXEKtfQoZAUGNDVyHRi2A9PmgpSroHE9egjyBsc1xAw1ySmUx3iVdpxEDtv",
  "key21": "4gXbUkPxdZFsEz7Tr8LYFUDfmhD1kyJ8m8ohV4N6SSMUudxnXuvUEqTJCYLv7avVErkxmZ4bJnu8MjxU55bMGX3W",
  "key22": "48d44orQjLubHEMSfNdDvDu6pFWnu2nSQ2cKshpVqLqP4kD3XnbVvBBfLWWtu91h8pDHGM7PpETBpWbbtpn5KhpS",
  "key23": "5yKS9QVC7vKkA2HcWkvuwpBWvd6jzKJfZQMzgcx9Fp3beTzBg7eZMXvhL57Q2iMxVymriyfBpeAiARMTrgt9Ly68",
  "key24": "3wavs6Pa8idZF2kvqAV2ZhdYuN7NN6vvhHeffV4e2vph6CqikuwcsLZ8mJea4W9cFTL6hEXQ7ZpYPEZnwceokyrw",
  "key25": "3Vk9YBBVmXpe38eEiTnGT5i3j8jzWsuDipHqxEb2U5AVJ9wpMeb6Q6r9EhCWVQHNZQS5CFwVt75MjenzzducetUJ",
  "key26": "3rjt59u4JMEbTPf9Hcp8UoyaHMeDmin267kDdBfBJMfh6j7y7V2cqZsx9wrL4PvoDwGQ3mVYuY3Z3ek5TYtwJub9",
  "key27": "4uTAUKBrtCMK2jyyreBDuFGrfvG3qKyiP4GirJVjfEvgYUd6yG5Q1LiUwGSSZywJq6Sz6uxfWQiu8jnrKQKuyUTH"
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
