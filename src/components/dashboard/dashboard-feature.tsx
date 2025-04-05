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
    "3e7LPWVebDfGsETJhhp7B4td87tf1oC4PXuarwJ94RAxrwSDm817TkC1GRWy71PJFV4PHJvLj59kaTvSxcqFyVL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36mf2KzCS8GVtVxqR7ZC75uRCWCLrUmaz9o8Lj1QNxsiYLxikxuzqhqyvPuEgYce74tdeAea1syS8CvqPRKuodqs",
  "key1": "3FPXp2Bs9mTH1mLbdHJvYUZqU4GQS9S1Ln5486xJtbHa5djNswriZ7kNby9hoZzzu5tnL9KeY3Pa3WZAkitukYi6",
  "key2": "2qgEZd95t1Y5VPRiDbUn5M4wge9vTWMoQdDfy3RhNmG8bgBiJzJmo6UTaBWWrVZphEgjbz9RZwBRfxkXejhvhszd",
  "key3": "3Mz13KG5yvsyok3BUTRNKScYKMMWPjpgntBDAzCjNCXpnh6wmc3uJJN4RG7UDEz7Gg1JB4tC8udMuqmj342FYvS5",
  "key4": "2U7TxThEYaXSKSSVqcinvFKVp6TxF3Fpt92iPZDFsqdek5sKiKxGe7g2Pmdcg8FgiCYLPPBoc2KZ3Jk9ZC2psoL8",
  "key5": "3v7UMSKhNfHcVGS2RfqTa2vh6mCnScUhRAJtiQAryjUVwvH6wLNssLTW7uAtHgxtMhkxddNARvL2UrR7zmQcTnCN",
  "key6": "5wqFftZzVHKFsn6Ua6Z3nuXCQKDv1kxTiHkhbzq9ayoSXABWNmq6tBnpuzMaRrph4BfoUxUytydGxXVAo3hhSrE6",
  "key7": "443w4vwb6myrUikJZ4tByxsRp6kh6bm11C8gDKUN9yF6CQ2khHBFbSSr6QKnSf7cVrPQYCCzBYkALaMG3xonwXDm",
  "key8": "5KKxHFk5HyX63TgKYcpncsdXcZm4L79EeFRtojqjqyBPwxVRUMJJpqDyYKW1yL26TZm6PzXdKFejMSEWCFyZCPD",
  "key9": "esWxLQnXM12y6L3iti2fKYBeQ1Y1PBPpLAwja85Yy5REG9ATphXUiDkDtxKPxD8JJN1fb8W9EBw16S8J2wiC1d6",
  "key10": "RuSXi1GS43XEVPJ6pCo93ke4yDJ55LE6NDYRniJieP1trVcBNycmzx9mftBoCFv1wa5QdjA393FYT5PNJJfhaRh",
  "key11": "4wqw7LFRkcGYw3J1jJpYNtivCPZaueiFuVzUW58nuj3b86K22VhQ9X7enBDuMJQi5j5xAYU27cr89sHdJQs5ZsZh",
  "key12": "5txL2yXMsd5UadtVVPFfjB8wV922Rc2hdLLeH63G2zc5qjiLYhEDC8ifaLzUtHz8ydPJiLgkB8DxAXx9A585AwWq",
  "key13": "65PicDuZMPVBPSX4nZhW6SeCPRM8xaxTXGfrh9orr2h75kTB1mEbNaJkEESwmqx7iFfpsKqFYK5bMBbGMXsAgNyV",
  "key14": "4FEpPEH7ksRnNNBW1aLaDujdESXRGmJufCKymptJHDTqsMVNz9vyqudihMyqMY2MRCP2z7kz14XU9uBNe2aMMxcc",
  "key15": "vokWccm7Y6mc1G1YDQ9yb8kbY9ivgRjz1TSmeJmsApPPJcVJPSA5fSQ5Gb9T7AUunXHf5xxG9M4LweqvFwErPtH",
  "key16": "4W8cChqmEjZz2MiLUz3g3Gkcijf3D1VLALmw1iF1VtuUBzbii1NjZ3eWmhSMid3rQauPNJHaAhqnAhoossBfoSnb",
  "key17": "5PnZrbRYZk3RrqpzmoJ3FxdqQXurTqzmxwAF12nPMaP9GDmVFcq7REKb4zuwihYxrQvUREbF3kYu6cVByaLzF9xZ",
  "key18": "52VQKFWXRQc3DkHShf8i6jqvmKYJ7KL69tuq7FwaYdeygHfxVhxpu8pg1oQ7tZ2aHv14sg9nMCmo3NHXu5kkAj2v",
  "key19": "2SUee8hhkpsZrxHdjWtLU8hZF5VsZXTdLt47ZPE4bLxVHGcVri7AJCYtaENHPBiBTGDdbtLvF2YU7oHGXpbHYduz",
  "key20": "4xoKHtbkmgQ6wFfMsab839uhv55XudYpa66azqP3J4jYH4zECzyFcNMBhAqAeffcgEBxN9i74y9e7a7yevXZe6Ee",
  "key21": "5UAtFgvB43pxd2atP7uffZ2dzpCDBMVy3SuFyxYHhAXsDr2spydHwRYFaf5Zv6RGNmd1HQjqcoVgSpg5fZUo3KL9",
  "key22": "4nW6x8ch5YQHvFbJZQtunUKL62vHyT4c52qYSsbrvjpZY2RwyYupqwJQci7Cgr6LbwfjMyDW4PMLRjbtGYfnz9ng",
  "key23": "rpNqznHR72hmj5Y3JwizH6Cmwq249KdB9ksj3Q5Xn9RDvbbMinJbN18R3n36gAqZRbEWhMyAfjc8jc2zVemAZao",
  "key24": "3e14ZoeZCBbm6FrR8WwV4Df6zzhSa3EpftZox5WWyfFyxMSL8CNVj7SHoEfCw9SW4QvpDqsLacAMBRVizV4BRLuB",
  "key25": "5rPq3tVTn6LJmfrN9LMA4fyZYs38i21ihf1KLVZDMP5UUFivueUeYj2tpTtT9zYmDMnQttkGqvYUDeb4zWGbx36i",
  "key26": "2jgGPVhfkG3wPcm6WwCkjD7R7hvM4PkiXoBDK7VGT6APdekg6PBtoX7rLJSpjcq4uk3m84DvtgxHt7ND1L9xieFd",
  "key27": "2jkKrdZTqsAHrfthnNybuueS1H7dvRdbs73sf8HiDNqLR4c3m6QtGP2V9YEciwkM67iJYFZrELhYgmtYxtH8uVuu",
  "key28": "5daovByXGKYCGK5CuYDVBDBjjb7j3zLwi1SHLqw3TLeUSBFu1aSL83jvnYRNaJ9CF3C29E3redYd6TqdB33CFSKW",
  "key29": "4gV1dY6yQ4fmKB4oZvmJLcFio65HioEy67vwX1BGmv67iGWKz4LYJ3fUENY2rc6NTGZRW7hYt4quf8mioiLMvWUg",
  "key30": "Z1ynnVynCAriAqWUFF4PaiKsjpTMHSkKoumdCXi43amjnLdBsxguVZBCiSAtNc3yahcSGzKvu8DuJtUw1y3sSAN",
  "key31": "sgeu1PzeAFUQ5bukc6QHHgX4MqUdignFVEStaVgC3psayMCSjJkAUUhhM6mjgLf6WPwsVkU9DskJgYtKCRpLL94",
  "key32": "43oYfaVwM6Q7fVQRvHy1QXfMuDZRuP1yU3QSkHNaNvfEwJG8c8R4xU82tAxMjx4efxs7gUA7gMtSz6m2ynrUThrr",
  "key33": "2GvT61BUspW9bPfhdjvJDV6wcjosv2TmvHZATCdtGFsXrE8Nj6wckMhyEuEbguH7wK11vxLZpzRVkxYqvcqzVEMi",
  "key34": "29YSRXeiD5RqHJbyfTDJ37nzCTAYnWTL63qQzfhansZ2nyeXgXnnFMGNxiZfJedqwh94PN2tjqBLd8ta4poUYNWD",
  "key35": "4AkuFTNu8z4zrYrpyrYTtXTooYWPv4HhYfNUvBp8eJnvm8BWa2rR1orWHn1FSNzZeRmnesAMYZGQVntBiU7G7aED",
  "key36": "23X9Qcso98FERqeikiXkaEzbCDqyG5fxw9aTppkYEuBSvJj4wUhnDYF3Yw77gEQZbYKqfyuFZbn3BjTRtAcFV7Tp",
  "key37": "4LfrPbVggw6orQmkcp3tB3UT1dY7fXDgJYSxYANGCEAsdG3v3AAJpKdmzaueodHBTVvqYsX2CmyFF7DoeQ3tTzg2"
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
