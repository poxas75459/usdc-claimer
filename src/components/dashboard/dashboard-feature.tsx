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
    "4yNBJMFKMm4Qfk9aP7MJZSwMaAA5WnHUdyF2HreS92oE1uYhyf2pjSoShJuTaVxZFucBxpYMmV56i33LZxVuQoCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LE1Lok67tExFkjPNZ5QeKyHktTw1h18d86bGkT6fqkWF2gQHsP78g4qvLEfr5R3AKFXZvs4JN8KCvuHd8cqx6wb",
  "key1": "33BxrXu6nnVmEteKHjG7L9GDZ6U632vpMdnXqLSwCx1Sics1Avwr36n3EDFgowmaKDMmQFkvsMZJNspbpjLyEFcq",
  "key2": "4KDQA2rrtk81FrtNqgH2CpPXotfPxZUaMQDvhardt2ARz3XpaiRRJKw4KF6KU8Bax2auBTQjcnkFRxTyXSpvQzFE",
  "key3": "553D96TP29nApFgfnyKATZ3UeWv84DAuCtj1FKYU6yr2qEPFcsL65s3q4svXqfysdrysaVvtJoGKMj7cKfbQU5Hu",
  "key4": "2CocyUB6FnJw8tRrMqdFLJAfPKbTzijAjvdv9SiVo3phAekkWG7TLUpmi7NNTF84S23g5n8VPVUHVrS6tPGtbvno",
  "key5": "4BjPzdAVs72cZmZr68BSLWPtdRW7fLfub7A6T9uVskDNWGN3Rzu2UeuJufDPHD8p9mJbfAXXKndnsvenUe1hZUx6",
  "key6": "3hsLQP29f4aP2y8pynsQic4ToAdXbGox6m8qUjcFDD24QPPkAgDsA73qnFCJfxLQqYWn44r63CtjgoKVmA4Z33Td",
  "key7": "2p26TFv5s5JFrgG2nEPZG4zSrZoRYfmNaMfLnPNGopFhhGyaDCUw9mcS81iJBetPSY1gbWijMfguepPEgk53oLKj",
  "key8": "2k8B1qXoJYNbMpK3EehKSjyWo2rQEnmCdF2w7fHWZLHSGztyTNGcPFMo9BMZZDjqwwcKSoty4EETSzcJuj7NJche",
  "key9": "2uSfH3cERssUmfFtEqk9coGk3o6i8rMQomVSBBC2sD5d47YryBonsMXoPPLYZwwK38ZbSAPevCZke9NsXHNdxkrz",
  "key10": "4YGPXge8WFqFKcTN4tzvzVitvpCpshr8Fxuo5WLwWoB6G4SsBjqqBU9UhBTLF1UQbHYqq1JyMsR3xU4Y8SuMGLwT",
  "key11": "3MJSF1nzkg2Ca2NSB2jbHLTyDXFEANw8fwpJtwmuUKnWPpDrj4izeHrTzC514JHMZQJdPXZt6eCdddbtcobWYMEv",
  "key12": "3rWmxhCzYHQ5bEjsKSX83ixwT3Mh3gKsgxRZXMFNo5EyyVXq16DritPJ8ggvQC1kpSmtKxjeNxQnGvaLKXbTpxfW",
  "key13": "21rxth3NnHLnk5iHutWCSj8wY2DEVxjbihpgyxg9AJwgQfnYBLMBstBYZpyF4ijoTXXp1o1BfZrxeceHBUgKDB7U",
  "key14": "4p3yyaDjyYVgY3TKisoEhVahsYDR8r49HE9Wa2vWFG2nZWjoKgQ8CJnr7MuZy9MmGAPVdVuuscWeCDAmZzFt8Qtt",
  "key15": "3CCWAtSGF9KHAetV42LXBs6D94KnVgnG649yxongyi9MgMD6uck9fbwTaLXZzyCBaxSbc4fA4bGFcbVgHyZX94ER",
  "key16": "3GbjPLsbVgkVDNfbrfKLMqzpvYeG9x6BkvoyyemwmHgoVoFHne4UeGEuZd7jcqgdFoNhNBn8389SXQxgEp4bti4h",
  "key17": "5swjXkAxZ9yQFouDG3wVkvb7g72Y9zVDkStg8y34ovk2XGTZzGeokcmyTzJqaqRnQUQt5DSjSotCGx7KXxhhVW32",
  "key18": "4a1ABt43TkhSesHyyMZ9oLjFPCZqnZefGZhbbLrQvhuLryRQt5BX33PTMh6DSrcg62DTD9tpiR8v2EFiuBcKTsS7",
  "key19": "YB9FbvYGT22XSQWQfcb1aBiycegE4LZbDcJh24eTw24hSdoEGVL7dM6oXszthDdjFvSoDwm5RQTuatnByjEXfaU",
  "key20": "2uEBRxANdJbmgPUrZHVZKyP5Xupyq1gpkYsj862Bvk4DpvLaBUv3QGTFc5rCv1cKVdfCxUZCiCT3jAZ4TFtrDGHm",
  "key21": "2jCjtQHfBmKW6hWYCC7vJj3pPrXCx3cdCYoS9kZEJwL9hngp2Yox8KhDtsaYw2VVNDDJSwKpcDMnxxhyExasZp6w",
  "key22": "26UGGyKCEwhoNqn2rgScXkxfLzBPNcpK7dWG8WNqibxztwTNhZ7gCPEBvESrgfK1ps17vFdxYrP9HMHHuzTYpKBb",
  "key23": "SG2u9PUkULeBgf116gQrrZgtQQH4ke8hG6mpEF6nrdX4rMLUqPVqNUJP8DZu6JLmxiWM63L6K6ni93iNUwpXmDv",
  "key24": "3rn1nthNNwqDffFshW4J1MM5HDmR2pxbr3qQooZFQCgwTfqb9LN86XdeLeaN29q9HYtQUpmTjEwKXUuta5BNssPs",
  "key25": "62YjxEKqmssuQM4KfmucFLtTgFVNTR6njz9tT3G7e88mvySRXvNauNU9wwP2ehhmGqFXhVC7dyPCAgM97P4ztTFc",
  "key26": "5wwxxRtDHnrP5jqocVVAmjGmXG8hCQ9a8MCWQ4Go1ZqA6LpHMvJmju2QcC5146iB98m4rD2wJhVcwTGa9TV9eVhT",
  "key27": "38jjFGeA48hMVPC7w3rorpznd87T5Zefx3BdkzffKDp68UugBVAYotDGbfB1VnP5Chz8m5j82N4qAeZ4fzdCCnYR"
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
