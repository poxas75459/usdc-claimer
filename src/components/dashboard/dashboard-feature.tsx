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
    "2m9vEgenQag1SdnMpLaHbWndftvfGwWyPFauS234WVisq6kqQ6Ngvg6JebMKdxRZra69W6Rv5JubLEoDV6427V3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RusSmgoqhUacANigB8fuggGfBxSGN8YWKv3YBfiJJ75sHazit28vvBzZGXEYEMhrx3ZZiZTJzPefV8nfiXHWPuA",
  "key1": "P1evur4ZggVuB138tY1y6xfwHSn8JrmK7k6AdCG5NsSedB8XNE6p1WowVr36SXaV4MFzMyJpLYX7gJ5gPn3ia1J",
  "key2": "F2ZxdMSSC3v94kYMfyP29aKn37CAvAk1Lo37yi7hnGLrrNn1zjc4aCLFncqWhRGJ5tkN7576EsbUCD9imQ9yYtK",
  "key3": "517oanHjqN8vYQwm8Yh8NfFmBpkHi9mZ9nWfNJfPMr8wRaRyr7nVAudeFJtWJVHaVPMJcwYqyCHnPjq1Kbho5L7",
  "key4": "2aKBtVXXXAByKKxaaVdmSSZAEkjjbQVpTXimaxabQBoPRfUxMVT9in7NCobd5fpsiQKvCj3Fj84UU4bUjJ2SyZ59",
  "key5": "36oSpuNe8T9nrsEtMu6xznvF9X6vxxL1saeKxsSpAnHGnYqfpWyL3ZWjVyoFhah8xtAJBnPT37A9Lrynn767uaHZ",
  "key6": "nJu9P8kww7daWkNZBit5JzVMv61Jk7z251kJ96D5phBYQUTs4epM4QHL4qFckmk1jNoCmzFCPe2fQTnztK3qHPC",
  "key7": "2YnfXder26V5mPbdqPRTzHfXesKxvT2WTZ262qP4CmXwfF1t1LbWMs1NRDqo9WJ5GoW6zuzgPn17BZbzLwqVnUca",
  "key8": "4SE96Vr3yLttUn4pGDPsRpo3vYYSrzGeo9rvgv9oMbhCyhpVLMpWCfYFRWKYSLqjrmbR1fwGPSQehmLnQ6oDADii",
  "key9": "5osv9o81e7jaTuw3SdYQ2afNvzBGccLt32ouoF3b1WEE4tCcXkZbHRw7sWaG6QMpZ8WRKKngDeSyMe1EYh6cmHep",
  "key10": "2fs3BzuP4Aiv3HVjyXTEExCsxz53anPGP21T5wUyCvZCnduV3cuW7TrVqG6FeDLpWynST8J8ThvYJSABMfYwoARz",
  "key11": "eGqS1bCXpNSBPSC21vL8ux8mu8EwAQSGfXWHZT19s8MqM6LTzXkogX2xSDMFMJUnT3LNC6unW7CzFgrJXVQNEfT",
  "key12": "5oVJp4Tjk8wVUM9oQ1gsrvSYjDzafqAyqMc78sq8HEDmonoAkbHDcfkK6fwKJYER5Fpx3rKv8VsXVKYjruqCVDry",
  "key13": "2Fhd3qXBecrNaETinpZ645DVenaWQNH751jtQwKmEYo3nTNcjxHfMoRSgHEnf5B95BUrtRwxduviWoaNhwHxmqkv",
  "key14": "TUv1g1zMaKw2Jnnf1Sf1CYj3HV55eyiq9A4G4BL9ahanzzcZNKL7mMynp6x6uqmYUY7MwuLhFhhXUHfNbnSHvXG",
  "key15": "4ZGDRdDeyXyVQpfbdQjR52K3S2a2SVbdgH9n2YkYXJvMT9LMEYuLei4yCje2nzJGKwmCZH5xEv9gXh6qVgsZqhfy",
  "key16": "5AFUtLK2x6eM3ay7k6mczfJqkDng6qF3keDZss8VSEVWnufFiNGqiKbLEkwrBJKVeaFvtLbXzw1vWKhyVGJtYguv",
  "key17": "iBDQyzbQHeAyJzDFxbs8m7vqnqcaEcHEiHHcg9GW7kVUsvf4bqiHk75CYA8bvMi7KeoycgkYLyEFizSEhJSw5m7",
  "key18": "2CeDLqAGGMvkgSfeHCqcyYWvG1U2jXzaYUaibQY7YjncN5GStCj9guWeXR7XQhFPNx3EsymQ2AsQKE5jaJgwMJeg",
  "key19": "ecvhpwyVspVfmbDUaZcbTMPyGGf3PvRX7HHkUrLVRoJxynkhvQz7arhRHZj7cvWHEczAARHxt2dwYBxosDREQeB",
  "key20": "LFCsytq8VPhzFV2mDKibvF2QYaYNsxarrStwjoGE4LJDUqtmu8UNiCPMjur4nUqNJG5H7epsFn5AerttvbWLk2j",
  "key21": "2Trdc1KaRnmdihWzUS1EkbV9gdTdYHNip4ASK1JscLRR8U7zj4RSqZh7aWk3sts11Cg1L2aaDZez1ePXjraLoJFt",
  "key22": "26o6yE4sYY6nNFRJYnNz52DWaZnFxg3pRGPHgKh2svzi3yhHTTgjSjGS2ovRw8xW2dKn2wtFWXPn29Xs66Hic6Su",
  "key23": "2wwPovbLxEcDVkJHuDHshrs9o4wmkTtbu6zWb85VtZL2odcmRJdm49Mxc34148k9Hz9rhUD5Tx96bfDghQtdCr2a",
  "key24": "2oxmDacZdqsSe67wsFmo7U3e164jgtJs4v9QQZAT6uVgaKy8sHbtccA4eWkFqw2SDEfmwfZ855SAXW3awdvk8GUg",
  "key25": "3Nne35FKrP4X8HXgsXqoXp4SxWHJyACyuSubxjevy8rpAz4wnFdiZzRQ2JgdP5QXDNcRaaigHi4HsEgstan18FVQ",
  "key26": "2YnJJZBxDGcxCetuAu274VXmZm17AQG9ByRxF83Pgh6DSu5ggZkpyduW6Up545HTizyNe6wyoMnF1LfmooNNLLWg",
  "key27": "2h6tvVZcz7CnteEEGECeQjRJaHdcp6QKTDe12mTcf5fpwdGgKneh9wkySAzzuw8WQ2nvGGx2P56gf38g5UbVjAz1",
  "key28": "5pjTkQa9zokoKWtC7pf4Nm7uTtZjWTBeMBbfgzEyWUJFKDM4HgiLVnLAdLtn6sfPygHmoNaPNVrWxsnro82CFn46",
  "key29": "3iW8DnDgaG8rpSKSQP1GZnZtPCncoU3RT2ngA1QLiSXsaP8NkRag3qafMsY1r2jALuWdwjLt2Ywo6w7t8EEJBXfN",
  "key30": "5oan2gRvRRg51HuNzDWEKi7g2uWzEjg1DcBva6iTEzzFp2erwBD1UkuX3rKAWyvcFpZ1JZZXq2sPdXXRPHQorLmY",
  "key31": "nNZ2SQ8w4h7LeAcQM1AsUj9yjyZxAcrfBxPv6w51VcqePGDYge1F6okRgrUpbcVp1PQ5Y1kMo35CeATJENuKvRd",
  "key32": "4Zd1oagaBcKMyUg6dGeMes9VnvZyNXQsv2EZDGUk2xuCnNedKLZkva9cQVPRp6fcYLHjjuQpYqggBnwMjR7JLWPG",
  "key33": "2Kr7p3cPyEcBVrhzTr8ZmMjUyzWDNmRxEgqKw7ZQ34hFRnKL1Cm8JrW2j8YkZwJohvD7UfyRUYsLXq3rysCtQX5Y",
  "key34": "3SuadUUXPrgE2DhCxV15oZmgDfKzzzYMckvb12KgGB7Q7szg4L2S1nB19JRDZpm5WwTLJRBP7jchgeSgncbkJCrq",
  "key35": "KL6cSXEQCwd3m3SXfNJuPuNPong3xgr9ekSDdzw9EtDpPmkjYPg8jHtNBVkvrDCGGX5ru7VjefWGe7diQSCdiEw",
  "key36": "2WGBmPDV57u7YHXJiuDxPgQZPKpBk88Rk2wCfM9NhMhmhGTQ1f9eGvFs3N8SEBwBbcyxQBEmLjTjaWDabPPqXL6z",
  "key37": "4SgVQDyroTFs6waxQKRrKwWB6vAmsR62rFGXEZTp6TkFaCFiUu3RHK52LnUWDpMHzPKmJqoqfED21Q7gTLySsrsB",
  "key38": "2hkxLXqqN4KdWAc56tALLZfvkpLv36CAFb19PMFceFAuwb3ej7BUgFpJHT5D5TM8M7yfBaeLcfL9At9z7ydru4QL",
  "key39": "EAA2XyDf6vgUEZ2Y38b4cuqVURNqoM5gmiYprH2iQhm8oaK3F81SZ7u5eTbdZBV8BBHThHE4GKZGjfodE4AnMhx",
  "key40": "2sV2f176YsSavh6gsXg6Ak5iFAYcitypzX5aCq7RooDubpFZ8LWhRKvDkRbgf5YH5fHDPYjg9cZ5JmiqDb7tvMvP",
  "key41": "vedmFGEwZSnUo2RWWYBZM5fd6faGXak7sgBEzUoUsrmuZgySn5XGU4s7HAkAppGDWjTrFk67Qdho3ZzChyZjGL8"
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
