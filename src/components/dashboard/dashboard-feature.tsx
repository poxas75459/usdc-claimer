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
    "3oeeLEyHobj9voQWaAT4BCeeQ1reWEEUFV8QVdrKwqvrf1mk5iBR7pEMsDisABLTEEZ5acCuakJmsxBy3vGjCcyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Qn7F8UBFCkMZzCeCuDwfSx4UkWjcHS5zDMe9x5Sg9nyWTni4vbZHYhos18LCamQnoG8MBk86LorLLtTeHYJ1Lo",
  "key1": "5WdjuxzJQ2WTzeuuM4WWNbpGpNPBj7KKqJJt4pPuMkwLodnbT5Zf4HHGLnNm9iHgv4LbcgqfEqdmnTCK6XpShtd1",
  "key2": "L47uTdN9CrJRtgQuXhS3WUHXsiCuk6gfX8LKEJBaNyTaxSNJfLeJZsX5rd8DbWTUYVQk3UNEyf1tMuyPB2Hx2Qg",
  "key3": "2RhDJTXaHPW9ABc6k1uBUcBi3WAQf4J3R5UB1zqMRbet923SJny8WKKGB6JLVnKu6d6DPx9Z1XsRAxW2swEcRUpj",
  "key4": "MQV7CKdZktCJf6duzZf2xXHMd4nsaThi4PAcyftBisuvSFQdqzNHNffoxdigvEqma7AifbXgPSZmD4JFrKEJyWW",
  "key5": "2vpd5wqCfaWHcp5WC5otjCyD9eY2uaf4Lbrf1AHnpiBLGzeni6aXTzSvKydUywrxptR33FR8CJv5d8qUtHaWdzrd",
  "key6": "5TWKJTdaQ9zSBkbVr6UFCvddByWRzMSnRipS1P2A2F7W1sVwwTHFdx9KGbh7pwRwxjdb24rtHn9QzUYXgEUfht6U",
  "key7": "5g2Ue4Ei7q1tokz8gjnTP63YTTEqC29VM8L5E4SvCisMfyKoXF8JZNJCUXVvpVJ64sZmau21ano3HsqEKc5tpgsT",
  "key8": "jeLfUYYSRi9t3JzmbJvJbq3YEYRuJx2DshAGNv6ZURe3XXPJs1ZxabjqcRUEVRM39BUCgpcLCknukMiz2j22d6m",
  "key9": "25An6SW7pMExw5pVG66fp8vgv8DEWWNWp3vt61kfKHbnEcqNqTEkEZo7hzRDnTPZ8eqpSFXmSRiV12CDJQVrmdgs",
  "key10": "2xH6rDP6pwTiiAhgaxp6YJJnRu8KDURyLaxzNdkU64qXkpHQkiimYMMXxUqsaKvyyGK7tFRwn6mq4pFFmYxsmwqh",
  "key11": "3e64e3kpG1wd4Sp8QXdfevVvoAzSvvzgi4MhJhfB1f3sc9jihf47W8u9y45eQs5WA7EL4Wn7wo8Xak8cpFMMLHKn",
  "key12": "3G6DmWgkP8zTEGJnps8XRxLRv2gdE4KNdA3awLdcohPVoPd8jPHrFuZXiC1DngeFHLVGFtYaydwhh6GfwpBFaQ1T",
  "key13": "5ByefZc97SAyTf47duhTwsaf9KRSGhKKEVKb2AviJhueiv1e1iwXTCL4ByW9qmFebe4JEjkEkAD1AR4mrMvG1aPK",
  "key14": "5mAXLpY88xFJn6T2xtEcCDe7aVEcCHtMWxPDfv63J8mz648dqZbhktYmXWAyTJPeZtyUqXLci1cpo66ZpT1qphFY",
  "key15": "535qLjdJu2nGSF9wwYSZrMFjsTJRoWTH6954B8Qne6D4wG17MZLTeJAxa1P6LdjcJZz1SoMen9dGSAbkLKJ7MV3J",
  "key16": "5rZhgMBNSRd2QTaSaDe5TLQuWkGVZ9ERkYQsw25SzHNK6TxyyyUkLUUBBdTyr2v7xLUpMsQC6torNF2tgwUZiRb1",
  "key17": "3qx8PiVwSVDuymvsJGR61PorgW5M7e7QNv9iXoYk8hTUAB3zW9nWNJJtSNX6X4ZpMLiyLxTsK7v6vMk95KZ1Sr8c",
  "key18": "5J2adNuUMj5kkN9BBtdzQ22PZLHEAw4NU3jiL25c7L5eYEiD79hBYxVSUQG2V5V1JEJjE8wtcBCqG1szuz7mhC2F",
  "key19": "4uovzmFvzBqLL6mHbURLMG7ZPee8uB2J9kDUnn8LH4ouE52rpReSDTYQcEpMJxaYCZsc855DrsDsLyyx3WEgn65U",
  "key20": "4JMe6TPUhRAzRbgbWwy2WBkaMbGhdJXcrtocx4amb5PSLrcFAxQh3USSsYLiSt3ayhCeMjZPEnh4txDHTUMvycbK",
  "key21": "3ky6w1cvQz1wGUpmuEQ7iRTk1PBKJLp7VmnPnAKDDHRZVpkVWT5QYcJkCHcoy7tTeebxsyKqoaGNhrsYKM7omij3",
  "key22": "4fLzPavHkHSPk4VCfZbeMs7eXXSFUNR9bJJssEXf1CT4cyNfCuqTQZRNn8bfjx2PgezQAxveaE4NzQQkTSatHS3o",
  "key23": "3KizKKw4qC1y46m1vbpi2sUsDAbKPHpttP4j8J4yahMQYE5SQFpKQceRFJWavkGyr69xqfaEm1WH12JZdfm3mypB",
  "key24": "XYXN8GNS1r5YACD2aJE5r1jtJH8MurYVvE7onpQY3F6QAkHvF7gdR37UT4JkCYJrQJuNhKDJY9sXahyh7PJwson",
  "key25": "5TY994VB2D9W16ZbqSNxw9yTAX7ETAo9be2gvrcSMh9CcnWUjAodBT7s18auAVqqL2KZ4z7fLTURKEGFja9zHmtw",
  "key26": "4FLSHD6jKXHcaMA9pbiXGFoVFAHtqT8nRtwt1pPK5P6zRi79DzLH27pwaW8NAoBCTzr9ecmN65kwLUAFHMUcQzDk",
  "key27": "wjkEN513mAet7BUvy5oPty9hiPG9bHbbLka7wTHckZhAMvfankc3sTWuGUn2GAAbdiEwbTcAB7rvgKkEUSaxLNF",
  "key28": "J9mpXjpJRjGLFWZDbC8iz3y2LtwfQpsK7cC6K19K9Pv4Anfx5WK8pYaaSJbx9o8shCZZfAhLf4ceWeb467ewQPR",
  "key29": "36PHtoojJc1oJmJp5RSWpo67LVzMbc8coXivD3AgXEKXaEfCuBW4eZ7GaVwKa76wPunW1JuDvGvfFNfmB5UAhbxq",
  "key30": "5wfjZAHDiXWyCSzrYQsAzqpcz21bVdriaeE5vPLQSiVRpjDdjQmXdo7LR1j68w7632vFJPXRUeTHFLeDxriNtCwB",
  "key31": "53CoM15pNMGWihNpxJRpSi1QtdCSk2gUbYuZhjRDd1mysn2z2TZUL1qn8URjTQoS5wpngCSJSGnVy71bgiqud4jL",
  "key32": "39rxYkhH1ZQAkagnVQYZLdKH5C3XKkAsQD2aKMn85N7Tt5khrZGzJaJymh1DSNTopRzVyzfe74w7SBxh73EtcshL",
  "key33": "2f1xj5gYTWzZ1WPKD2Bc3gccikCazH1bqLqZt7QDQKMGdvK3H5yRteC85QA1Z1doq8E8uHcRuTaZSKFggPf1N4DU",
  "key34": "4YkQn5VqpDdCkkAFGNiH1J25GQWkhfVdUngof2dS9qaZ7zHk5aTgSMzHGBdng6NJ72sxHda6hnTa5auZ2PecAP2k",
  "key35": "42DdiJw52cmszzEzWbZCocfttntpzPvgTTBSf59Wgfoe6i34yEcPYuqKTKJqnpEaSeGBzobCg5cvfLC3nS1c1Lzd",
  "key36": "5YoXM6qdCewMpygC7xuRPmr7Lb3BxzWaggqW5ppfiknPjCW57VmZBRmkFGzR7eKvK6H5aegZwGqGmdozaa6GbQo5",
  "key37": "3yLuYxLLWV9eHHJmvwxnw27zFxzzaJUUb96DCJ813ry65HpgVLJJuwY3rGq8wsdQKma9GzMuWaEqK7Ez4xyCv2oA",
  "key38": "8y7Gsk2Rmo4uft71GvcLSpdWKorVxjGCjvoG3R4N6FVQqBye8NNyoC1H4cnDjsodS5A7sJUSZaZyKebsDiktiLs",
  "key39": "Pxw9Sio2BjCyXXqrJwMyVz1FSu6nXP9K1TfnCqUyQNRQetcwFjoUmhzgFDCZMF4bV5sHuqLdi31TYY3URyfYUz2",
  "key40": "5HnMQE9FWgqJnkuqxyB4C2Sz9zBX8ZZgFaA18gYZUqkpkZ1Q1RwYuc4UXiLhosqtChttTmMZak4eZfuiHYuoB8YH",
  "key41": "5vb1kapL3EX6ujzuuFZsuPhhHYUebCuz715yWtdXu5ieqJPRt2JQNPNb4Bmnsfcq2wADWpmjK1cqzQ43qGPuFGP2",
  "key42": "21zKuhw3oZkomLSktYNP22KGfwYkJSmsQj2XPrUfUEwQiXh1bYft5nkRHTNXaEcsNYbFCHQkz2zapjXA7QK6BwEf",
  "key43": "5K3UtixmwbhQ8sk7di2DYKHvWRPMpYVjRxtkXmEbX4ZjhMiZ1qBeRBjruQmHLFREoMqXKDYr8HyoZce2agADdYtK",
  "key44": "38cjhjpBwMmcZhRbJJcWaecdyrkSLmPETSTcRRzU5kh4JKe6utbg5cfPEbg5Cahd4tN6sz5nnwhNxGgGfr5dqobQ",
  "key45": "566CgvHyhjuCW7NGZFPGqHtLihcu3UwURNFP7ioqd4wtacQEN2SirX4fJsjd6TkHRumYfYUoDWRLD9VM7yY7APyM",
  "key46": "5jPEcwdKx8SL5T6AZKx5pp3WxR7RidiGNLv1PWJy8NK4pM3aqhjEUxbuksEenpy2zwFpNUX57XQij4mbqRc73uDW"
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
