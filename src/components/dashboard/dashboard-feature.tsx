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
    "4nkuuZzgTEtwMrzNPAcQxpoH7RuoHEAP4Z5tkE67fPWn8s72YDmsaqQe2PisXYLuvro9WTNoVyYPaMCg718aGycA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pAb8UNPdNNWRevVh3RNof8NJwv1u7rZJ2QxdAeuXyoyGburJE2ewihkNwrH1QHEy9MifPDfwk1geWytEYbH2CsD",
  "key1": "4G5EkGz5K8eQ814CfUzQNn6VnyYcea2WV2qRNjaVoRsUmxL774vEM3FJ3VKLqffW8pBU7HsZtAk1unsA6TdC7cMH",
  "key2": "5c7ZXUAearS7M5mRjZnSNvJbqpcv2jcMv22xcUmxn4Jxmq7nM5MJtbxBhi6WpgYg2fp316ETJFfzn1deGUdnSvHr",
  "key3": "MC42HdinqDXe2RjoccWTouyBfwU4ebd3cCJHH6HDgRbUWpCZAdeXP29pxxboYRWMpnnooB57y1JQqPVxSMmzt7A",
  "key4": "3w6eC7NCdmeeUcuJVPRrHudw8AH4917fe4xEE784HfWJWpvvUhdw4itiUYXoasbrWPhr6bxd1ApRCKs8QNVmW9Vb",
  "key5": "2AJuddcyDZNHTXE9PpBP1DW1ApsR69wDPUDhcq9yZKiiui2NVQZ71V2sE1oXfP8EbWQafLv1WgpDp7LcQ6xWCJMc",
  "key6": "5grS15n3EYA3ohUG4aXbpbUze4rQmeQDMH2ifkiwX3WqLnx587saRRPY1nMCpNQxEH9DSVf1gTFZfnbmrjCf4eiB",
  "key7": "288rxCvkq6negi44A1EnRFJfqhMnBcDV155X4SEqumNjfcYGCU34r7rejdyxangWYTDJKs2B1i7RB7xTj9sRGPXU",
  "key8": "5KQCF7TvuWqETLPAzZbSNAo8GyFxBAaLaojRwwmKQcyCHmCUk6XxVK3cCLNnD1EYjjh4bh4UTTP8baatsensv8id",
  "key9": "5Pmp5JNktMLi2P4Zi72EqutmfwVdgty9qHmENHdKprn4rnXNhb33fAbiC4NYSwj3xc8MWpTATFfryesPAhfdq4cy",
  "key10": "3fbnPnxSnJLAaEknrNLMYFtgGZ49XQM9j7FgjeipKoV2jL98zuiYm7SeBEYAiefxM3kfHdLZwjMNaWuko36A24d",
  "key11": "2bsxukqsWNp5NAeixDnkJJogTrtCkwjurFKTWA1AQrACN6wUAjMXbnj5egz8GrsaWyUhaRAwwR1vkDAex4EMBRJn",
  "key12": "2hHyDjudPFidLgJwiqpTpbEx5B1PEdxLH29FXqjWxddCmaT1R38S2bczUWT7qHHrxvgYbR7rGKmFZ5k7FEXWbSoL",
  "key13": "28WmXUuisBD1pN2HCjWiB6E4NiCDJCeXdakE9G45r6pCrrHDK18bDevnp11XKpF6PGkCfVezFyMMcPLeidNEkF6T",
  "key14": "4udSci6bmv4g5Q1PNUpSj6jTmVAUDB4aBiCRRFsoeVWzgUzAcY7FCFMimbGMVCUxUQcDmA4CZhT3aFftBvqhrGtw",
  "key15": "4N1SPAkBRvsytRUHEtCksDPjXeYsmCppudApbEwZmy1566dLqo3e7NugJB2LdZBBVUSYxnbnTUi32Qd87z5MrZgA",
  "key16": "4TZLUXCwvZhZ6hts6Cb3BnawuvjmqU3Ty6CfmruaoLmvHnHZwxMAeaoewRCuDT8PN2AZh3xZ9tMeCNFZShFU9FTh",
  "key17": "5kvrPvoaYmrmz5veQ1kBRyXGXa6CQdqtaT96PtEyfP9AqjKy4K3UR7HNX3g7YAnt56wmUNuav4upYL5G38tJ9yCC",
  "key18": "QMUJ52XvG2PPJTbhSsGcQeLhxipRaTtqmKFAgWaBdWSLgo1aFYiwF1p72KXYkfeWJMxY1S6Gwi5KuEsjMLJ69Sj",
  "key19": "2BNbiXzw9dvHLLZZueHrAjCEsHACB1VKRJ7R9RLRnCNKxxnpHD2foxxo9aDAfdw5Qf4aTjbkfWnQva9Nx2nj9Cmf",
  "key20": "2815WipjVpcphjDh5tgDLewKPghUCwqnHYstbzPpRhWgyUFS3FmcWkuEdZJJV3JusckA5nb7pgUmbskuMUe5jJod",
  "key21": "58eVs4WPBmQeP2Cc5yQYU4fN3DxmJfypRVSf4NqFPrVUVsTWsveNUarq4S3iQr2WruzpFbMYNfcyjrLEGoapf5wu",
  "key22": "qLBYkfwHz3qiVXrtt3PhAMrbut6wvRZZeMPuutZ8qVWD1V25rPmR2RPjLFHaKA4Nidj8CL1omYyvjBc8A543HWC",
  "key23": "3Rbe6VDfcxMLQfkLbw8tTzjrAKe9P7BnpJ8xYyzJoHYgz3tmBu73LPTHQk1qkumkzQLyu5v6GRtq3JAfeaMvyuPu",
  "key24": "5jF8K1nJNSS8Y5QJbaMMh6X61YieioJJj6yjTcrwEANqyxXbUdStUJU88QCVY8PRaawafDGsDEUX2iN8J52P495p",
  "key25": "53334CNKKkTrDZh9Q8YBmAcbBaLtHFjUu1arfiJyh5Gdgx17ad2VuFuq67UkirTXrYSmd2tAAAdvGoLa3v6D7dqp",
  "key26": "3mdTD6kZtowkPnesKwktwpymG7QjREQGqWJqWSWdSMYed3vDLidG3CwJLvLrEEC6pmKMgkCuAwD6i4zp5mZYMbEz",
  "key27": "26rUpecKa1mgnD4Vv3oXXYjWb3KBPEkkq9TDUtFXnW3HRQdcs56Z62desUxKNXi8onTDD8RSxJduAcdMCn2yz42M",
  "key28": "4xSTsiYCG9DpGtvJX7j5FL5ooqGR1KVkWVVQDvvtGH7efBc1zcBMTbFNVJs99jfXGkFDMZxSEWgfpuJGbKsGkEzz",
  "key29": "2CNzKyv5Y4A23eFh7LGEYKLiVW3nVVJLHYLZAc93ze9JV5FH8aw8Eu6bHA8HPCGq1mau4oXR4YDooPn7Hr6cU1Lg",
  "key30": "4JBe6JVSoickuH2XpqzEUaZpDwv7xhTwXnMi9JPdmnppJDj7b8TVJLZuUjsLKn2DenyiR8nK7eYuzQV6Z8zCdnae",
  "key31": "3FfEKoX4PLg6ogDfnfWNh5jjyf7hk3QM6MzLSL6ix3NWyxTrPyxha2sM8LrHCu5XVsngsb7PMjV3QbGqVNCVWQS5",
  "key32": "2uVgV3BniTG5QcnKf45uSsrxZV7SjpsETiHmnDFVqevPqzs3b9Cd2tvqSDuVYjCtJT4gEudcpGZwMsd7n6fdAiPQ",
  "key33": "67YpoS1wHzdoq8HxCDr4wtMvBbEvgqiAPgoiBVuDht3HuUd64yH3KM13YCbJUYUVX9SKnjoBfiqiuxpZ42YqP9Zp",
  "key34": "4UnmwxPkyY8fv3QkMUGjfnSRdvjMnez9Zf5P7akGeZb2sGgQFjbJspwAapd2F5mHEeqpxBVF8vEtaey4ioRwiTYn",
  "key35": "tLaFHH1LkUDR826n8V3Sj6B4SpvwUSF5x5v6CKh2DrmgZPkuEpnN36WtMqoL3Cqxipds51dLhxRNzbfepsw5wmW",
  "key36": "4EvyFkYNt6YJ5GJnGcsf2FmxnmyguzVwp9RL1rCaEiRvSjZPvhba2X6Gy8t5DAdGHDnsKb3uQJT5NscWJhuvDXJ1",
  "key37": "4yq1MxyCcuwL2qoMNrTkgR44defsbwpKRTDEKdJ5oDLUjZ9zgGcYsdyfJpBZfp4AKzmqLx7TNH4KfkacEKMrjFxe",
  "key38": "2pDPV8a3Ta6m3q2iHkFVmTFCZMNxVQNUpFP5xB6wcR341D6dCt4KkLNhSk4GE7oVDxansextBAuvXfP268tsqvvV",
  "key39": "3SpK3LXYUCBrHxTAD8jBmdWe33Bq15BneSQSUgK7fRQJaMBUumV7A3UCyQJC6GFS8MekJKdecQng8TAtPVpJiP3j",
  "key40": "KitHVnYaCnn8PyD2qFXsmqeC8ik514ja9bBVmwgosaWZgR7uuQrxc1uEzszvAVkoQZgWzKngh8mmWxLNsJeTBGt",
  "key41": "3bohAaMCKt9gXF88aS3kCsrhheaym8iu9TGVfL3qsH7HhgE8fH7YQ4mQx9iSy4jv6T8ZPiNi9QFZR7Tgz2kNhqBF"
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
