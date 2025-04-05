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
    "WnaY84MgwoR8tTDKVJz41vu6zJkN133u15BE9azYM8PxETjAeM3f7zHFWAcYfXMwhVu12aeVQ9VPAE3m957RZWj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eZP9YbpYgqbxHoQYbHHwyMX4K59t3VCJGXUwFZsS2LWcoaCB5uGLLjQWmG1W9jcSTeqpAmnqnFhurCzfou8ERTV",
  "key1": "pMAi6WXUFtGMWbtnx4KAoUUNHQbCDUcsLxeAe77JxU4qoduJLYZUBZLPhZHoLkacCLYQQZ1BfdjiVJArVrwSa83",
  "key2": "YKzoQpFJzZ3CiwSXJ1FdjQjyUEtzp9FdvTqzhhwXawKF9hTTFTaTbGAsvaqVmMVQjXKUkceAtNMsxqKKHEdJxxt",
  "key3": "67CZ4En9L8xEny6QTCDvue5W6V3jhnUzLZ3XuJKkP9p93mDAYAnvvmyC8YUdiZSaFRgDZP6NB2DVRP8w5RHACRvT",
  "key4": "ED5zFzwhWAUFhPcC9sAWxEf4KGfkhqynzafeUEUN216zDX62VC9yvr3wG2wZzAK6Utaenm9Z3MtDkZBbV55RbCJ",
  "key5": "4BHrP9KNZkP6KCKVPsjRUCBe5CP83NmwiRvQipjLDP686pYhq8SzqBLpS8Z8UfxKd5dKoqBmuo8t6NF8DziqcfAu",
  "key6": "5HNy8w34s3iwL7nneDUJ1EU3hAaVgKfB648nYtspMZv8mAa7Z6YLs7jkyfYZQvFZfcgQd5C4FiESCz2UBuBdkpWp",
  "key7": "5ohdpanKGxbeXqfZ3a4mFiKGiPSLs3UGmP4oPqLP7Vc55F6BigN7Rvx1ZwsTJpNfHdowAznLFfwoFTf3RaVtQn8S",
  "key8": "3PcoFyL8EkAfgPxtB5aKhenA2RWjgsD2K3ggjZP3g2X1zXuLNTnQYTVx5vFLpQVsQFTA37dNMuQvic1VmiM9jzGQ",
  "key9": "5Wp6Q2fummhoyGQD62YDYAhY2A3EDXAmg9qornGyAU5vtLJVk9nwaWxALj6U9AwffZkmHEWqxLkVynyYVEoopFRV",
  "key10": "3Hr1qoRwQgZdma4ZbTn6BRFmxdxY2NVoLiUguGwY45ZbWinZN5HDcAgRtQrdzKWTYsmCigCe7eUHyq8vaW6Snciy",
  "key11": "Z5fK9ZhhYBeeUugwsW3R4y66QUvKmksKgRTVKJrKGk7KcGbg2SEyeZ4a7agPat2GT8UtGfFyoA17PWTw7Awi58t",
  "key12": "5TbzLepSDarXYfZkq1dLwR5YofMqBa3xoYSFqMxsW98vgykxFyXrfr4kjg49ULXsUJ8NS7GK1FYnfvC7umfBmumr",
  "key13": "5qRJBxc1qSq38rLEuWWMN7HkrWpKgpDWFEZANBcRmu5QWcM3TM6EBZkqmmikHgFzTnzwPzotnp4q6LFfysxhPQ4c",
  "key14": "pEKMG4uYshKPx2s622Xjb6qA7MPF5NvTVenw7bPRgxxqsvxFTP4W21tzcwMqKDbFxD9qnK3MtL5Aj4XnBR6s2ZM",
  "key15": "4xwWmCTzctCim1X8Dnf8MvaUj1zpCSAJf2vtANusU9gee77bF7G7BWMA1D1bUEiBx1GXeddDVpxAKRas61FZXrRt",
  "key16": "59A44KfBApBPuNxE4kToTrT5KujZooZi8njpRRDCRf5HbDK4J2JUbfzsZTpZNikFvDCAfWcVWdYohWDt9LS8BEjH",
  "key17": "2EHa6r9xBhTtiQVykqPZ9cgxLHBZPjnUFogeZmvGeZduWcURBznjM1SpFuYA8r665kX8tqC25ebeMMMa2smSLzFK",
  "key18": "3hGEMVwoe53qX68jjA1XUSKC1U3Z7js2RYe5Z8128D75SVKLakuetS57YJgWNspTQcRdECpyBoms6PxZJNmS4a5K",
  "key19": "4hVR6tfPvhdxFQZumFPbjPcyW58d1KzZPPHexbDitga7ccUwDwLrSEpU3cjJemT4ygN64Dyv2s9Q5pXXhxdrrnxm",
  "key20": "5fVv5nhqTLcNhfqJ9GNNtEdfXjjeW7CQFftBzHLnJ7DrT5HyCs8ppK4yrzjtbHMCxWqhgNJw8pcXH3zAX4VehRy2",
  "key21": "21ZwipRgYFZi1ww2JDtp6KJA7aLnnZJkoNy9ttn794W35aRcX4cspmZjXNWkHFvv2EdoHR1KSoYR2qKhifxgQ3Lc",
  "key22": "52qn8Rec9bg2vE3HD6gLCYJ4t3WH61MHSX2ogTkoNYdbBkU8PCyBKCrmcZLXNxF86zVmCvv7AdsJUFeKPuiqCwvn",
  "key23": "3XetH1E2PkXSLd28zXFxu9SNqbZWmFDEJvhZbqYVjVPUcv3qCG4fk8snQ4dGkMUSqqe1u6QWuJo7f5AVQ5wyqcdi",
  "key24": "2rLB7ZzV7yAP67FvE73iFnV1KnVeJbDiXxKusytoNg2579kraskGVCKgceekCDS4Xd8LduVG9JMKv9taRdwQ6Rq8",
  "key25": "3yyxoCEDNNYg4QFtGGsJUUhX1k6w6MbPkRGyVfhi4p2YbjNgrDLE9j2NkFa9WbwBab5NnhTEDGjBbeDzRiEuqN6",
  "key26": "ytgbasQ5VgWfzRCXpAfbMU2E1fgra2QgKpW7TedMkBUX76xEG8YMU3phQRzL51tW5fG6P9aV6Z3Pq9mG5Yxu15y",
  "key27": "3UKnQLVqEsA17mZXsQF1smV6VVdBkrzWpGEAaQ14ynobcXcRDJXQBGekiGHztzvkY81omSya5bFT9HyDx9soXDhA",
  "key28": "2FdwinUHxsogEnr1r3CeCqEYZ8k3et13R3GmEQ7qt2WU3Hrbi5QjbhhPbFLq3SRSRM3dt4sB5ia2sJibv6c3aCp",
  "key29": "5QtKvEequrv2yQSiWZ5LQNFxfrBogq3KsEF7A1aVVSENSJh5tiL8ixKH8nJ8chk2mpFnNSM6WK9etvN5ifghJpJ9",
  "key30": "4AWZgyKxZsw8iTa5RZV6HQ7Ttu5ScwiKcuMvNPRRFowNYj5ebHKGK3pGLyGpbAgNrLFZgro2xFKiMjyCRWW8jtsY",
  "key31": "5pwRfnA4DGGZjFXX2ztzTVRtG1fKNXWwJoKGx894f3dQ29rPKSogzydhH9uqv8KN3ifxSsv8iX4cz5tegUcFBJpu",
  "key32": "zm47NECTb7m5xBhs5rUHr8QNXBPLiVCRfgBq78vDdfymNZskA2DDdB1TXkSYtFzi7EQ76nUDivWi9BNtKrtEBFw",
  "key33": "4ca3TfrP2gGVDvYdLXCCRcFLs9brrQyA839HJqqGTytWkJnL3qbcwXVr39hvynTRJAAVcFGwJve2r47ZiYizTf1R",
  "key34": "3j8Gn1FzAXg1VBmkXqanUE9KwWQKQ2MYktMqnmRWGCpQY918RZiy34pt3b3snmsEL3dyLh3ZAgEoNQq6tDRwUQAC",
  "key35": "BAEJewivNDhmeZHXq4JXoZmZvX6JpQ6wnCUwSRdXdp4n6E3rPK3Hq44sorRRrD7LQkBk1s5rswx1h8MCcQCC1L6",
  "key36": "4NrVJD826fyNcYjbt4ebLWn5Fbn6ikBeftPXRWjfU939uM8apjigVxtPMobwE5GiWZHvoU8Ruiq8uUQyMd6GG5dJ",
  "key37": "Nvd1QJM27yy9EPg3qU1GZWoBjwBV3j1u26YH8W7V6yHFm1KJfCkKLyM4tzJRgbE4qjpFtyJNUQxopeQfwkkYmcU",
  "key38": "5jZgnvhDPYzzrrYmSeWNEa9SmaiDoaV3MVPA8BwQ5e2NLJSn2UFh374F2PWBJcQS63n6VwaQ23xLtXiZKzLyiwAH",
  "key39": "26V4gzmoDFa4BG276pXxQFVcTLdULRKqLphsdyVfUAnPGqDgHHpDmcZdPUV4TnMD7nBvYj9VMjDrJ3tKZVQAhXjH",
  "key40": "4aWjo3wV8dqccPhkAKAAAEKvQfZpmv8fpCDoyDSBvq6Jp1HGZCXYZxtP63SBYSBo8QcJQartbRtmAdwHZSngUhzf",
  "key41": "2Bk1uxZEFupveqzshZZ2VHN1aAEpug6StG5TUBRkgQuDVBo4DKkU1g5Aqr3UMa9xtJ5S8qXWWrKGxmdKcR6EmTXm",
  "key42": "3QCRBUEpw2UUqoh9uSA7397B1xQt7wErVpXfJTTdH3osu9uebXZnFW2z296x8MD3iPNs9avK8qMe9wR2CFyXvcXV",
  "key43": "4ctXTuJNiPA1sMzgsgwPA4taX6iWkavxMThCBBqRsawbNJiepe9t3Q9M4edjqHwjXszYXJUaFBKRs5rWhoYjuLJ2",
  "key44": "4oZwuDh9dF7G16FXUeuVadjrwy34rPiNK1FLwnuH3WAQV57yYgS78qVooySCVLTWHfFqdB2iuuNudH5bjRhTnta4"
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
