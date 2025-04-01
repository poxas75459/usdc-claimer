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
    "4Eneh1phyZJfDtj2VpaaDxPZF6fMq4uLwJi71KMqwiV1m3E88eeLQzCwhkDbViMcq12anQCESQmabrSaq82tH1KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b38SLm3Q2iZ1vQr3j2fyokdGDb6T7ZsPsADwmxnB5mbWv5JukUJYH56QBpGcUQs7uXJmDr5wvnpZWQzuXKZdR7L",
  "key1": "2hbkz36MJh7PGb2ZonriLPK2ymAxz9zn37i5QCUSAHvYo7joZ79pM4dqFqwMLh7cCbEcgociZGx65wk3zCo8zGA",
  "key2": "4pb41PAjMQEXRcCramhhybb9rZESmMxycxXzQtXRCRQs7zSUChCyhvP6cEpka64apeQppmkuraHwjEGVmHHtgDQ4",
  "key3": "kANyjMaYTjb1gUVBjyrmirEzGqtFpdF2p7Vt17nb8ZnLGsDCd7uXeY1ivaUngQ4MxToZ19ATx37K6UMh8SnZ2kK",
  "key4": "2nnuAou2Mdq3JW96kxAzE7QN3w5rXxoYpDF1YKkbuxryG68yHYGFzgDxxuxTnb4xXfLXENhHdZnScKLVAHi4C2aa",
  "key5": "3kay5kKLE4vgtexqbfHbXJPx4T73CGdoec4aqKo5UFWsGmYGgbruJvjVSeCopX5N67Zktw6mxGG4NJJUs6i4u1ry",
  "key6": "5KRNRjFxrgkxbuaTTc7boa2BWsYJvQ3o7BsbxtWDkJzHf8BGcMZpDTxKUCL2ezu5CnWMxkbrnoftS8KkETbfocKX",
  "key7": "2wKiUsERo9X2j1uyowVxjHcoPmAdnYiCGL4Jzs9oGjrrn4ETjJH4YXf1oTiYmyk1uLX2TdLgXqVp4ibuty4t82Ra",
  "key8": "5geJ2eYBdk3zfun2m5K8KJaARHUa5i7HBWAQN3UCtmrzkms6a6TnjRbQ7Z1nAbnE4njK2x7h8sVkPYsybEAchpjW",
  "key9": "3KTyee59ghBp96H7SoQJMsXnYXJdq8iShTFYoYddUvfrC2TW2zRUBDB8WWqUNPmyjwZXw1dHJgGAXA9fGWeEdK5w",
  "key10": "4hygNoVS3HaCqbCu2bKfhV1pGV7m2fkjvxKMKavUAwmDjjSr9GPkofQdrAbciq8FdA1ifue2SsWfRfoJVPuoFtkZ",
  "key11": "4PDkU8zUb2VX16xRM8CpcKmb2HrYwraMc79QYWSNK5XsxSQj5A26zUUwhf8izMW3KhFVDz9BbtDE7q1SyB1EKWe2",
  "key12": "3NWSrnqWLnREYjUVnkfw3cj1L1Fzbr3Yho3pqtoN2QK2fHXAmpVSwvU7JzJjdjwC8NdC2PJBmNtJA2xUFnNnRaCt",
  "key13": "2BLSyHfvhfDfVD14i7mzpuMmR3Wd4hJR4AXeKnAKJTQnVmbwaL7teBW5YbSGu5f3k29qrjxw1FnnCahKirUFf7EM",
  "key14": "543ntVUJZmoQWYYEC79UViqoZpK52p1b6aXvqrFEWYQcw6SSkxk3jcNzR4ee1BD1G2USqzh27x7pg4qwH52HNGFM",
  "key15": "QGawKkBmhKdpAAJJqnwedMcnsrTm8myqEoVUcStBLzT2qfFJfgKBQSZnbT6pKTqq1LarVJQ17LS4GwtpRUzzfSG",
  "key16": "2f4HP6g8vAXDjzmVHJNGhiUv3EopiZz4TzJX9SJNx7RScaeRyk5xxjHNG4UW3ibmsMbdPAicyQJityKeyrhSiQk2",
  "key17": "593eVBca4jBiFpNoa6jMxZDgiVQSBprbqFG7fGHndf814ejSX5qoNVPiVj8MR3tdeW2NdQMMumiCv85iBZX9DbGH",
  "key18": "4cdBME14eHAiCV9t5dCB7Jp8seJFrA25wyJEj8J5Jb9Hbs2jbbAbtCPxCHKV4H12yc2UQkM1ffGZwqJC6HfaYxCb",
  "key19": "72jPkZtmA1MMJsoNsMXCssjN1gj1n3bUeeQYujwuBw7ReTtT18Efn1Sk9cYpcFLknb1P1v8hZM5iGmFRo3x8i47",
  "key20": "59dqvuSbVtMoAmrRzfsrvjkpk1HVuBGvatsYDuSH7PNbWpqzYZMHkdp1PkbgehpKuYmRjnfjxiAvUtvJCgu4adkr",
  "key21": "4EHhxNTzrNQxGz9hJ6Cp79TNZcRdPSkRkYuhg8ufPjbdDZVU5x87dZTEQtW3fPXHFq9i185PLcDEYamdD4VWTKAM",
  "key22": "5A9VxZAnP139yagT8Wd3Xw8nrrC668DveAst7kLL4KXThCpqWQHdYZNGvL2GeDL8Vhse1oQydPiWDtpJVZhZuKx7",
  "key23": "5EV23RpmRKaNadCeerAR7dEA1esUE7LFDXVCNzyq2cA1etFoQiS5hp12oJK7jLsRsNyNYXpk7eQ2PgqUP85BWt4s",
  "key24": "5nizAf8a2D2spZjiBc2hE6vpWskt4qJcQWxZuVqGtEt411QMHJAsyszMZChA4NKTJkZThoMbr81kWKtEh3pBRDv4",
  "key25": "4J1d1aJy9YaAbckL8JtNZRvagDtUnWHTuFFxLxKhNbkTzMgL63VgDEjAXmKrZwjsC21Hg9rzZdcpARYPk93undzs",
  "key26": "4dkyLrSE5vs8DNjqFRgzf33MCH3yCwG1jGirpnJeQvC53or3ZuEnc93ZxYkCpe4rqPZjvyUzb3ZGHxTFj2S2zZ5z",
  "key27": "5aMo9dyB56NBwJx1qgdHvAXW9TbYehy5NQLdrpW14Q2HC57288d5PRaaHY1LgcFyQG4wxvDZRDfHK7enWrqTsMFG",
  "key28": "3fAmY29crpimGDmxzoSdBvoqtdfrHo6xsRJ3eibobA5iBBy2D5nWC9rv9WuYteBxSjKsy1HMCsmftKim1iboNzyR",
  "key29": "4zbB5TbN7LH1RjzwYCUQ3JjxLdhqtjmGfNqojsgkuvLWcQTr8sy3tE1Kc1kdRiPVHUjGTX2f1oXpbVUeoR39yjwp",
  "key30": "K4N1LcRW1QfhRqiiCQWKASsEuxP3gDBMF6kBM78NNKwsXjU7jTJfpsNiMtaDbsk8gsXSUbPnxwFNR5MWZAzXLi2",
  "key31": "62u2vjrq9tx7nBUS6R8aqgak131nM4EFvfE6UemUnts6f77doPCm53n2VvXEAekYKJuBVQcLsJcauQqfdWTG6vPR",
  "key32": "3YSY95PX499ASZAydMiLFgoTGwoxhknqfPB7YwV796yH8J2mgJNevmE7iZBq41Ccggj3GToPenKH12pqK6SZLmTN",
  "key33": "2iRfrVAGDNV3Q5RzR1ih531oEDbjcQ57bwaPDtwu3MGY54TcHe7iX3eeStvrGckoNyqxwZfi5QiyfKd2V4txeNxg",
  "key34": "2Xtm3321WXQiB3K4wdaQccZpzGNzKX49nadpsMKfsqkcGNYc44V1Mpmsiw27DUxNUBib2zpGh6CiX3Ht8T2ofX8k",
  "key35": "2vuwKUkGTALLN2Ra5EFhvTkDgx5iDDE4EFnLMKUAXMNY357CkewVhpq4VtvbZ8hfXBQa9BMwWq7S9bgYwrpxKVv7"
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
