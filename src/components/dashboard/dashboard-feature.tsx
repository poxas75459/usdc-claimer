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
    "5a4ih88VAhcWt2XknugryjfeZeKdWakGUd5QzkHTWtk3t91Dh8aNkmtQwNZEL1b2ZNDe9FpbcLPDcGjWUgdM1Sty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVpduBXu3puE4sFQwhJcrteds6FtAqYVLZiBfYp9wfrXobjbvYNfiDziwJ6EeTj6TLd89ZDtnHYGajxhqoBtYFq",
  "key1": "2hwLjfodtPNzjFKwCyE9HmMRuEwVmXBYbxxnAYh13f9qSCje49QZD6PR2rQFhYSuFnMJDgWmddEfePoqNKPLSF7k",
  "key2": "67jGnVQqWe1gLMzupCf5mQwkZAC4bJB8EmnviiNPXRiDvr9dbexFFNEqYdKHnuCMPEHgKGNNE3SQ794GnQ9EVZfN",
  "key3": "2inJJ6r35K2DrqL7h9HF2ysCg4uofiNdaePHkC3ygF5145e3v6dPThTSTSoQhyiazC5kuMucHcj4bJuaAjnXLC6k",
  "key4": "5oWMAhaFd6B3v1Mo9a9PGdv7hkWCjMwvtbRXgQAmAkpJ7eXLHKkStvbJ6pcY4r1o3s1zx5da1pTCS5dNQLwBNmqZ",
  "key5": "59sRiswNiUmjMX4Cib8gVU5Q7oYtkuyBnNNu66HAxzgRHKXCWsmj3o8sHxmkL8vyC4yWCgmHTwVvkAKFbVjmiyz6",
  "key6": "3RWskYuPsBGCL5w6ceBGhr3QZ41CF4jUKydCBwFwjxsV31sXM5mcvCvTdtp5BKLsxWuChgaRe5jQggrYgETtDJCt",
  "key7": "5MYngmKSRxnsJqApegxNNKsSzp6B629KDxtmbduxjZGVDc8tFWjvviW591WzsP1NoUDhmVK1ntd3nUJ3BYH1YByD",
  "key8": "3eYKtDHACSS9EseWsnEtybT5LK9J3SD2ywJhDNkVsQ6q9gnzanqBhytNaBB7941obG5sFiRWG5FUcsez7XoTeBK5",
  "key9": "61AfbGdAui7fxL3J5Hh8YCzyisLBcUn2ryhngBUFasmMEHUsSYyNgGhdMAqQdb5v3smNsMymq8p9PxdiajePZvRq",
  "key10": "3jSyMR5YakWySpDdSwAwXU1xMDgsPuQFzEA29kbVmawS3e1DowrNqAHpre8y585vZAE1bVwqCxrkmjvRbidabRyn",
  "key11": "2mttoZjwyhUacSnDh5e7uXQrh4QsPNdwDT9DeqkMgqhH5axTDs1FswELZKuD2emo9k3tBYP37GeapFbDXNFAga5T",
  "key12": "2S27nfd6S3n7SS1FP4sfDGEdLRWDL6gXGeFagRo6tTM9kdszACzAJzahiPnNXWz6cHp71qHPex6j4vtPqAoEHuce",
  "key13": "42UPU3C29fv5nVbR3sdvrvYohJP1LG5zTnMSYUeNtvgw1JKM2uCAdk1NNyArs6cGxGQD5ccqKEup9yQbGACQ2eAt",
  "key14": "3BpSEdmzcv6FGj3duRrfAL8KCg3vuUVmqQQYUx4fmUkzzKkDFVgb2bLZzmfmVCnNP6Rrt8VbVrkpeBpxNPLG3Gjm",
  "key15": "4yuTjRQBSkB5pCeKMW4qcFFZRQdRdqHS63Q7dTzSaRw5VPYCEYKap6KRdjYn2Eye9Q1gvjhcadTT5M2pYy7Nimxg",
  "key16": "3ZAippVy5WEjBvBpKAZ3PWqtRDr45k8ALgBrFNhVp8HTdeD48X4v4VLRGG7vjogxxaSEfSJxhwEwRUHB2dsLruAf",
  "key17": "3HvVc1oavReCmJY2VYJQgUJ1HWWjkRgZE7EvnVpAFvVAQRS9UBF4LoGEU7s2U4zNBQ4wJizNmL8NzMxaoEaXZJYX",
  "key18": "Mku3XYVZE5zHPhjEJo5vnTEWJ6B98H2vZiSGN7hKyjUreEbqjxTq7enb794EfAAFgV6XbeXzc1HVGELPhmGpAJn",
  "key19": "2kbf7SYsdfNbGVtDBGULLXT4bXRyLUrwtZwyaN8K58XAKcDmqbXpQ7rXW3sw4Gm4KUEs6niQDeAoCXTU5BLF1nas",
  "key20": "2yqTy5Mht3fvRv1nCtPtVsKN3tUSKGEQheeELBqnH4VzbCEiytJZPRd8asPvEgXD2HMmbfZYNch87erKMeD54Ys3",
  "key21": "2pVvBNUQ4FBRnwXQHxejHyMzxsQ5Mt4SyKjsK59rMX29mHHM5V4uXkLAxrscaM52WBQaX7kHLFpyJtuN5TnxQ5aD",
  "key22": "28ZQ7gAwf6vY76htJugnkpKunWiWWry41La43p9KqAwjyDUiqC6x94BE1MNEzyH4j3PNhiDB4kBh1NwsN6xazZfJ",
  "key23": "3sEZZ3zZ94kpkdq4BoJrW1hUhcLQEYKEXhpnY3U3ghesBnxxMck2LnSzwo8T9rhceehzXHaU6xzp2ZzRTfEw6Lo",
  "key24": "3XQh6fVLtd1WBYB34tDoLMRoScuFY9ZgLPUTQ4tLFKUVXx1G8QqaS4K8DQgnLZPHrLGLTo9m1qnJ6bYVNpLgN6xd",
  "key25": "5YRYmv8qmh1a1Jut2UnHGQJmqnErrGP3SNDYJLW3uSUmZn9jcPjhRkCpCCVCtJ25wWbZL5gQZDsfVT2W3Bbw9Ljz",
  "key26": "4aVGQCVsp23Hzea365nPSuPi1AFCCQYLM8LzfPcF8WL6v8woNiC4EXpwo62oUuBSC5xUn9zhQsbqfNLZ1Tua486V",
  "key27": "5ngUgPSnDaPkk86onKKuLMQP9SCVryioMTCEXPLMUUwsV6twmuJpGMTXjFr1NnbdfqBxoFYcAnJzJbxuu9x3taDC",
  "key28": "4o6kMmcdYj5xjeihTnjxDeCQwfZYN2bmUhF9nCeSNCftPPN97o85XNdcC3mC5iqEc3FhEGikrMjogJVKoYxoBEZ3",
  "key29": "67FfR3i2ALTrCdoW6PFDYa6QGy1ZtAWiJSe9QrjxgFrZFznZqBeKCBkjjNcKdeCAo8txHusUmjosSNgEdQG2Duzq",
  "key30": "2nuKeoVMmEYhZa3ahhvj3N76eec7iAufS5bgnQeK9FsXxyB7eqyyCsYj6v5PLya4gQBfEH6yyG1wReoAZ8D1BJpg",
  "key31": "yhfQoU39WDPdV5JTdDQFs45Qwh9zVQU5H7Yoyn2uQs41vFrXjhHut5EtzL5qdCpCZDXzNEYNmDrfmBSkDtBiy5Q",
  "key32": "SajZWejvJB3JwU6NhG2hsTSPeFCAMLe7kKso8DYzHkckBWce952U9PKjDB1Kep9WvNjDfnxG2iFiukhUvRV1pru",
  "key33": "TUWGFDEXvxppAxVKsHxH9KCLF1r4UZrpkbrGKVARz6G6kknDRsVEQhKk8S8xK5CoK57G6yLefcMtvYZPE3jFmRx",
  "key34": "YRCDnNTcEyHWSB9Ghqs1cnRwA1nqEB5TsxozTJNnCboLxFEhuHuxaUAZRk1vir8TpHvXHXAeqWSLXHqNDYPR8WS",
  "key35": "2Lz3V3NPmwHJ9x3yQ6uThCnAMgf9PEgExDmeUJU4394XTxFSPDJS3kuM7Ggns1GyjepoCiuRTYtF6Dbhs84SRUxu",
  "key36": "51krwtQdq88tTdTmLZJa8RG9RdwqeekKSNRuvmhtgRjeZsddPQF2agXiTfmNBEai9C8dSyfr9TXgBnUmUYPzUigZ"
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
