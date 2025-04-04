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
    "4Z7gGEzi1XJ8GGVHowkbY4V2MZMEuoJxtYchKntQExhK5Ekfntck1EhSkyn1W4smjdiXuyktWHoG6DkQV76ZDzyD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SHFpcG5cuejLwPJikR92ZB3NtbuU6G8KtdGdawnkU6PsSmxPMQxBNnVnLFrVrnY4XmXCwqvyJLWqrSa5zbDmK53",
  "key1": "53Fvg6A41t3NL6mjZQJBUP39kz3WY4ekDYDmfADbWbsQhJwdEbci18K7Z2zgukBVQdLGYVaanbuAk6Ua7hgwR3g4",
  "key2": "xKoiN3oU299CTZQcuTr6xz41utMGuV5rQJ6eoZ8QGm8UwyLkkaJqLNLc5JTCwPwByzGFYTqQJLWr6Fqt4Li8UVa",
  "key3": "4E952bch1WgPBid2VTu6Yn9Y5N6oYXuCxF5Z2GJaLjbmrbcu9Uqa55Q5NJP3uMg9SLrBz5UVTBKQtNuwPjUh1Ejd",
  "key4": "2m49PfGcNKi5mqHjg4jhymqCRNWZXHAARgE98cNNQob2tqAaezQVvQSKxgS2T67Fg1rApZEEhxRJ6ZBP7959wKhW",
  "key5": "3FVYqswxbkakxB1JQvG9uLwHJuGRxpBkr6HfizjXztg3mYVi5r4xxgm9AvSNvQf6xj3j3C9YPDzG8ErPDnAPETaS",
  "key6": "2DdfbjZy25z2xJS8269diBX5AVNi3vSK2uqzw8wWRjUterWggzJEqGx2BUdgsekMyZzur44oLvbKkfkpJkSJTRFK",
  "key7": "34GtQjBWGU7eQ3XmWarEQzse3iM2DRvLfjdwGyJPUjbcGgCfFbDPwNqsAsdc7emmKCYfoq49xuGVozTWh23TkAuY",
  "key8": "3zrWEkq2ByoaN3HhA7fq5wc2woYZMTWKpLTGbhyeuGLcJ5DEAWJcGLP37L4UvhWo7wQ1G96AsRqCrgLPmcEKBiuy",
  "key9": "2nRiVjVq9kjmBh31Kr8BCAcoyQKbMhzCHakMjVdAYzrgxYdDgi3mqp2CPEva1KiQnbvCwAPrPNnWN6tLPGyzZiuL",
  "key10": "39ZCreR7VfX4Eo4QwCQrc6VXjMevkB1LCYba9fHGFosr9MrBfNyZfvaErzwerXukAbpsrhYHzyeUXDeYBaxPwzeK",
  "key11": "5413LDZuempcdnhhtnNh1mPDYBmWjdDVwzmjUwfzdC8xQuAKerK67PKzPxpSifGCUbSKzmQ3j1fYM7xkritrBoDQ",
  "key12": "5sm2BDRqrZkRVUjS8uxgSiutVYZQ4VKKaufxbkD7rH4t6iCTf5BVNWypYpbm5sUitqhXVX4CvWAwYTihTHnbkdMB",
  "key13": "2SWwELKGH6rGjyQPPPYqh2NAf7S1zvqZwYNzcbAZc5UqR6Q3UaHB8vkLry8L4DyFRxyVMEQQhcLjhgWdh1isxGJK",
  "key14": "kov6qLyRs4GtExXDNmh8cBMGx4pszvQ6GW65aW2zrpmnu3UDLthBYH8xvvwoCSPSrPAnmnhM8xuXP5rnkN1noYJ",
  "key15": "rfK8iaQfnbwndg8eD3QfSV64YuRZdAxXYknZzkToseD97MZn52Y1eQUgD6cHR2UNpb9p2Nn9KJZhTyEAdoJR5HY",
  "key16": "5BunfWkbBLytt6sq8RKTnrpMpLXWtb5JGyrZsidmYZEDuKBCPEZ34teG9ttFWpBHUAvTsVwEA67qq3AYUUiShxmS",
  "key17": "5hvferAx5HVzeUzuiQ7sepn9gR94RbcvgQspLPGLAFyWZFWWFneE2Y7HC9k6dyu8AvBmPSaH3L94BvrSAD7vA52X",
  "key18": "4QA7LLupG1HoBTPKT3gH6AdVfnzt7r7aUY3REsVXVvWEB85bbDe1sUdJmyt6ajoNJxTpfw6DyoEJNYfr5qHJHCmW",
  "key19": "5ow6giMwaFEgtdouaQo8wXmPfpZ7FJs3ZcwuhubiqPbgyEBkdqHuEBkqyxCSAnkayFhw2zihVBhExKhEeicX9ygk",
  "key20": "2BXKwRCA1KtaDcnuNxNtWLGCAqddGUnqSvSotk1BJTMPcPn1TVWg5ukAZf2hyvDqGhxTxSs4D57tTEtc5vHDSztC",
  "key21": "3PmA4a8UyK1ntjMky9qFjk2TukN9fCJqMCMup48q4pZh3VeEdNTZYyYKeE4CvByak76ui5qyuDvogukmMYpjPnTK",
  "key22": "2QVNdRa6sds5zZ2CTdFx5rgi7DwiNbuhoghJLmwB5w37oZGg7pAvQqf9ozWrJjuhZPAFuri3eLagBCRUGjx45VU1",
  "key23": "3F7cytaooN9pf975qNoypB6TmpxjKCRpTAgRcq1nvZJ6KAWdekPH6QXmvqe8T3rqXUUVEn5CtuPKXzkhtETYFN3L",
  "key24": "WMAQzyCrMtGivrP8uTBBEakT3ziusU6sMyeSkoLiRLTjJfACzjbCgN1RftA4BLGh9ajQ83k89Nrsng6ts7fdgLD",
  "key25": "krxrZzPTLMDGxT4AYrWC6acEApF8YyK2C8F7iRNSS9QuxPmYEv6DHM7QTo35hwW7VtQjuFC5nxwngYFAXK7i1EZ",
  "key26": "46zgvGrRv3rP3SqpLNb4GMU2bMuEaTnP4QjhUg7TLQGaBY6v7fxm95WGdPJoYsbkapLHMDKWT3fkDkd3ZKbHApzP",
  "key27": "2aFgSX7aAt6xSeDVZCppTaTZ8CS84xJZYyNkcxT8ALRi9EcWKdaq2tBRahU3dCqTVigDCocjxzkrr7g6Lmv4mgCq",
  "key28": "3RCqQ31DBhn1kHFqEeioC4CCMKcRGo9f1MYVs2jiwR769HUAdGXEoS3HKCQiAXvQZUkvaEptTRkJuozWkjWX1hFm",
  "key29": "5KmE3WHyhMgqU4TfVa3jS5yDovpQc1bNM4RoVQYSsv6T2x2Mx3SoSRShcyrqkcrcBk56X9UhdvXK6sURwLfQFFyW",
  "key30": "5AvQoKTvSYyeQkqavSZwFL3s5kKtgmambDB13mkz7MY9J4ZkRdZRnw98wwqx7ge84pFm8dtYTqt7xU4VoWsa6JnN",
  "key31": "93bzPnCnaTvLUtbDDo5wmcb5419mEdTkfnNb5teks9XnxJiB5PaQHgm8W4r7fERZFTWuDhgjfBMY4K3Sz6B1QeP",
  "key32": "AhMFGJa1svBzFRLkEMGnsxWh1yjEzfzB7NQWFUo6eyzzbBxyWUSSofsi6oM2EXFNUgXqgeGDx6Vo12vfa9AuJYa",
  "key33": "4qQeVp9ddySzq9ZesyKq7dJMjTayzsbE2XnuvwMS7srbmA9EQfavbHv7V2ADHHo8w3PdavCwwnCCGYMLqm4z3XWN",
  "key34": "5Bd1H7wp5uV4zfJV1TckW1dCz9kNSYXMbniaQ43xDds84A4XWTm9LaewBkRDS8KroxBcXaaG7auVAiqhuXdfsUFD",
  "key35": "4jHT88aL6xMiXN4Q5MjRacPbYNf1drPJNRDbztPUgxgN8w7fwfftfx2B1Cm1sXVW7aBNy1VoRu8RLoUfvRcz3mNR",
  "key36": "362pqZ14YHyPQbzzHMB7aDuANsDReQ66b9Qhvc397UMQJwJWWxeJZRMukjXJFwihUKDG2Q9P3oq32TqFPzLviQGj",
  "key37": "5dZZFRe7LQ8uXVYf8G1WKcuSKbuMY9AHkk36fDKuh1J9JgeNLbzurqLY9yWC7coVvNAGXGNnRwMUeFBTA59sQc92",
  "key38": "3urLb16NgNfMTgN8qFhuvrTFriZirkx5ZKwT81Hy8vroYNg4hiEbGyGnELvq4WKotHmDD9DiZ3VEPCJK5MhfAXK7",
  "key39": "4vLQqPTPmbpNDhzrn2ZGqQLinwDsgCfgzxvd64vf47fGqg6CCbKGv7sXMiGyi18F271fpDRFX2L8TBBG5Pz27HSg",
  "key40": "3nogbe4GiNJ8VeLBMcs6UpgYZ24BfpE9toytTCxAjoLYKaQqLJ5UpRaGq8uwgQE68Tr2UzKyZtUo4w193E6iLJ2J",
  "key41": "5cmFRVg86nKQ1o3nvDF9PmUMWETbagGhkCyARySbTM8t9Q8Q5Nftz5Ug1jyipS6xBR8YdLeGo8XRgZbfUsTTHMHV",
  "key42": "5AvoJ9CSgLdZZ2Bn6MDd7DgwtDA753jSKvDXT9A1wAG7VcNwKJw2UCVq5zxvFuaZTQEMU6V2vKRJGDDNjFZZgiUG",
  "key43": "4awbZJhiCYnAgCiSZX4RWrkaAD2Xtoio8bmozTS7sUe8Kh2w7EWQ6DyFXKcCjbmwHiJQSEPUjMaFhWKYySjHbkKs",
  "key44": "CX788DA6je6c6iFCzrPV3thZMd4iFsXFbmQwS8QTej6vf5BbFDYCioJxAV8NLVHi45bHq7GmmocaHsR9WhuBwTh",
  "key45": "2ppnXHMFAxvGNSV9p2MBNtKnZDyZ3SB1pnenFnxfX1nsG3GZTfMyatXc2CthYr5qc8XfJkUqpPyjqqn4eNP1xYpY",
  "key46": "K5c5wei8UWugVciEwjvfXxRCode3ZKRdn97Z2XNZnnn7hZdF6BXEyE7Udo9JwfYZoXu5sJuQAGTtx6eGDgmypg2",
  "key47": "rKqTb71nosYkj6EwyTGSuL4qeEetLRCtZmHUjjYBRePmP9r8CjvZY9sGJRHVyxg7qc4vYFEv1iNXEDjxFb6MriT",
  "key48": "2PmeAgLj994b8jzxSMp7LBndATfrVnT7akEHNRxc7LT1ANWH2WyzosZ7LsHoW6Z6br1NsFwRwDbTDqGFUPJhhn6J"
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
