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
    "3z1n1Wm2U4oknVL6HDmvvjwfLZDrQsq2VygdG63LAqDFBxidD9tTRPAc6ukzfbzV6DEKd9vrpAhLSbK8QGLrXMM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hcnGYeQDxcuWrjVfFMs4FGqfVsnYDW998GHmoyv92BodAC5ks6D32YF1vALBzjrnR9mo9CLjtwBgYNSoKABJNxN",
  "key1": "4Ut1jpN1ySPU41xiyxcqoN4WMdAeZVbXH7VNc5CDE3dzothE1ynWDGzte6qSKVtJRALaD8aueNSZBPsnCmz1fpdF",
  "key2": "42NAzPwMk5BJCbGn3GnU1eNtSMgmwnnYFt41ZnS6HwET9atPfT6PbjLTJFjWx2BAaXqKokpmVvjaJbXpe8Z6evZx",
  "key3": "2xxQZj9sQDCzqYt1RFmQL5JmJk6obXBkcWTM3sKQ3cLK9T1tVF29CEG4x5qLNqfKvf1JuzmXKxXZsZA8D62rYgLh",
  "key4": "4DmwH2gKpQebeRuqkFGeJNJEpFvGwnRqaKL7vB3X9HuEa6Dx2R44pisYhS3pgxr38ueMwH5DsdKfNKWWm72sXAmX",
  "key5": "3wfDfcayTowAAkDmFfzNL5374E154SMkA6q8x65n1kFSyWzx59WA7Fn7b6mEMXvTKu2SY3cxmAmHLmMiRWJTDqAi",
  "key6": "4aRQaA9PaHgmX3UhoxhaZrbYdwLZg8W6W75i6Um3nauS3URv4cvLEmvAEqeAam9wUBvgU2qMSofCG3uuJx6TATXF",
  "key7": "23Jze2DPUGHp4nGPXF7KqqNWGq39e7uZ9fCwoADqN8XsW6TCkhsfWJCbGM6tW1ZL9jYSZzMzVPYTyfBC2wdjym19",
  "key8": "48sUkhMnyMo9ywgqBxUKWLG1UQdXC6Hv6G6EzMY93T9YGnkpfST2R54gJSME6PHJ5kagktZvVv1YWYGVNyym9AcV",
  "key9": "3NTSf6bsy3tPDJDahrUwUyDiQrrnPQizarsX87WRjncGTtpgZ4Zw3cdtzgznuJTrvqu4dYbrTnvKKnXz1QjKgmof",
  "key10": "3Q6J4SnGcUbBvscVHV13UGovELnVbt6W1X1j444MCNtTFUiRpZbMdTqm97jLvqhwGihuTgrGsFQpeFMKB3zAieVi",
  "key11": "4Dnw3KaC5B3XJ5z9Q75osCBPEiMXfWXTrP522dyzwC6BvcpnnnqN1XjYkUWSBs7gTdF7L8wnovmic1TLhm6sWPv1",
  "key12": "a14hs7atjKz1fdoiXkKrjm7tqMoNXn3s88fh9yHSyrYGHoNvgGKJ62NAVXYA9ikjcsSer9RDpixqZAPe6cc3DDi",
  "key13": "3oiSpLB6hBb9iM3XLYHsoxFhh7Re9dHjyNXTGZ3YaPfhcNnqz9hue6tQgKvPRzyzS6MTW5VcQSjq7r7WFyFmyT4A",
  "key14": "5LnuLQ7Y7pzfhBoeqD91MXqbUHQfuttKyCfRTGXnoai23RyYdL3bmPw53yuxub3K93avt7iqAkpdSg3jmWVYCtnh",
  "key15": "4c1JB5LNNuE28aYufUKtYdx7XSU49j9daRaRx2YMNhenc3t7oxj8gAHa4pKW6YVvHnYdML2UZT4qMkXQ1wsDrNs4",
  "key16": "2svHQNnGTQwT6PDW8Gb9gu3zd4JtdFz6oQVyAzvuaTf4ekM7UdFE6zAT3HMkGcAcQ3W7vKVMqNgg2M684xntJBdu",
  "key17": "5zywkpk7AobMJPubgSxKq82LhGxdEpMXaY9iVWFwb9sr2QFjX3c9dFvmkJjbE1cPjRXxmQQysBrQkghEtU6wyeF9",
  "key18": "4fsp76iDJy7FayBbcZzjPPzKktbB86APDBwpoy9rqB1NMGAP2eCPj8u74EDMf9fYkodgHBFDNADMTStqPJRVfMDz",
  "key19": "5cC4MNtZ22Qg4GvBkTqoGQ46c5x9oqJHhx7zALdTkUEsKxgQCucbG8AcnDNCt5SNRVYsHdyzXBKfUUJWiDSjsPRP",
  "key20": "3ZnJYoCPYGTAP2Xc9MdqCG1ZHyRrG8EwrckoeQTcus53ExJQcMQJrmf1MjA9YYGmADGwK75ETqtmkf7vkmtq472F",
  "key21": "3ds4D6uE3Rd3ak6dB1yMrpkJBGqtyfyxhY8P1jvdNyiL9nphp9REQH6zWbYsod5xd5Y3QjLdnXniDN3wpsvs9JsS",
  "key22": "4QA1ZWhohq873Pyx3xb6dbke7A5DseCxdRtBXWdNs88Chj6o2u7CuzMYbypuvFQHySNkXnyhWKpH16o1TG82Dv3D",
  "key23": "J5AQUZKCE2HBU7R6oqwS76UnySahKJou7Pezx9nVJ4afsLcMMti6KLohyeo9KsPxctGRaT67noZXCEB17GThK7w",
  "key24": "G5Aq5Kpo8xmQL1FEx9bxsXSaHqKcgNezFMUi1WmDCcT4wFFB1DRHuPDcrRkz73gGigRhGHmj7C2Es8PJQhX72vz",
  "key25": "3tJwtLB3z57UumhCKJvSosXueNtMZaSntegEkhUmBGxGPgnvwnuEZrnK9SBqxedQdFv6JUnMmDnZngHkxdXoAuGy",
  "key26": "3x5bijFVpCggKLNCoXEUk33AeycDtuEZC8WVr6XNKhAmF5667eomKCSewAVfdbWBL59kSbqALHXoKTEkMmitpcLW",
  "key27": "5vNSkzg36nReeuoF2c3LMzBphpMVsPrAnsL4yYNNC8TTZbcQkJvjtspx7tVcw1sUmcukGDe4FqTGa92oj5JQuNGa",
  "key28": "2skUFmsySGAA6r1tuPDWfWjwaBYF7337aesQMuVSA7zXsPueeERjfXycagiScKa7HZ1mFGgXx5Qtus8dV8fHMq6b",
  "key29": "4ptb2XvZgPKT1ccoPpnhnWvYFsgRrzX1sS75t8sXEDaGtwCqYzfVJgt5dC9SC1u2dFB5NYNtcnnkuieUgVaTFS7v",
  "key30": "4UNCGvoXkMQS9NnHQ4THEQESgfXyPqMi6RFGR4bvDLtyDSouZBfn5uaHJ9cG61w8QeGrjEQpWRNi2iWkAHFsp4Kq",
  "key31": "eng6C2htqmPeSqFpaa8fMZqZo8UcjvvXwgz7vaRYry1ug9Y5Rbqk6hCPwdzEvetgf63z1DdPCAnEyvsmY2Scu79",
  "key32": "4R1J1Hkub2aGohZBAEWeFQaSpTU2WcUkocZK6F1jkV2igZyjhHhLCmGbpARnG3y71E8my9imGEzQGpDrQBN5uoXG",
  "key33": "3Tk9g1zTSgsEoPMCiMpJaU2uRa3rdQ1smodmrWhJciLqdeq9bCUfFDYJiCQ7GJwmJS3mzADJLRmPi8er9fE2gWfZ",
  "key34": "ud9FC1615pDK5RAhexQLattxB3UxbXLrqw23mC5h8bMYAL11B62eaxZVKmS4A6fdb9UDsmzkTAcgt8iK3MZergn",
  "key35": "2KevY96cq1zk7gLiMSvSdQHQFKJWseRmeXbwrSdMkg9ZCoMtaQYde16VNtm2pKNYtU7rSnsTiw4YrFmMhjycQJM6",
  "key36": "mB9oYktBiwWuN9bDNC2MTp7YrhSYW57S4THWHjLfihXg43RBMAXonm3Y5yTeoGH7cH7qUUFcKL3eBm56poRFsTx"
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
