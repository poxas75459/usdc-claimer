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
    "3R5jJ2ZeX9zJPJHH32U3j9apRKiNnJv1PG53uGADzj36NW5qG2MuBMkoqH9chyYNqHZsyaNo6ZeyxY6PvScv3UXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rg6jLrWDpFPWY3nWNAZJTjjyWL7Y4nFNqrwAUUicR4f4LBgD9JK97BfT7qW3qcHthBvVAPvdBoN6tymxWxcLhB4",
  "key1": "rjzqCPmBRNquZjMZ3WkYDgjypfUXRMnazA4ijvsLfXryonqtmT6b6JQcAMRU36PRbCyQhZvAdoYccKeWF2gVg2N",
  "key2": "2ExJfTPqD8Dks35qCc1mpZeXhte4bKA23xzCbtVicTLqdV7u94aKoTSB2PWcEVLo3wqbvNArEyVAqfJ6qZHYq8Vp",
  "key3": "3rTeos5fn7dV7SZsrBMARpjnfnDRn1suSGFvYdGUdsKHKsy7MQrc37K9d8HUzZu5us5nmqueVkZQYA2QLj7RGWab",
  "key4": "2gR2UAtDn4cFyAUAVgqWuKqyhpmDaz1Dcpmeo8dfW6yCKN8vBHRBgLcHPkg1zujp1XhvJv1F6t85qe8ySeiQbYob",
  "key5": "618u6kdvKSJTDc1smnehjMpq9B9eiPWFWSzyCrraD5DCbBQM9MqJ8UKXDFCpAvrTasmsLNqWFSqoAffZHQh8EmWS",
  "key6": "5LdzHT47Cp3eH52BREGDZkUEb3nMvF8UkkrfXZELFsmR5zixmfNHx2rLeFMkuM3xc3dsdE2oE1vjvvZZKrjoPjvr",
  "key7": "5DbonHrueQCewkEushthRTN14VQfQU3hZ2VUqEFP5n2xeAouZWpGt7ksWudnRmUiEWpnApR8qsdwW5n7v9qaQbH4",
  "key8": "mMqbHHYYuhms7wxLKZvCesSkfmUWx6KEyqRWRCcba5Wz63kn93S5q1HUXEKc22Kptu224XEvDCW8eH1w91wCYFW",
  "key9": "ncNKu5gTWQQ1LX5VRPdE5SZXiGqVfsXLQASwejX1xwqSZpVg1sUz6N2MU2soLm1dj2tB35bghbBJyYP56Vbua7o",
  "key10": "5kTnePJ9E8S7v2cqtFhJcxRRbNfk1UE9HppYqV4s5JF8jCmZe4DisAxyp1zP96bzanYKHuRi98jvVBiAFrjFoQm5",
  "key11": "2LH3SaSqxhVxQd1dMZcwDeDiJMRBgySTQ7j4mdqsPfs1EGqyqxjLzAQKAFWGqihPyRS2hxsYdyNEKFfdTrFzz7nf",
  "key12": "6Tmon4digJY88bvvFJ83v7ZCDoGftSJJXkyaPBmMxq3zr6iVhjRbfdq75P8jEnyRskoikFd3e574iZ8j3rNtLYT",
  "key13": "2WfzYXxtzXVot7nW7NgVTG5ucfodwcZ3XerNEBw6Ypp3VUes3xnF7nnWY87oTjcJWiZRJkCrerhPA7i5urer9sgp",
  "key14": "WXz3ZUQCHg3kBiK3N192wTHPAa6VFSt1T4iqSC1bce7SbongvSAupEQsgwTxK8RfQQzSfQVSq1KjWfZ9ziTLH1t",
  "key15": "7kZFJdBRAt4idZnA6UJEGvAa8czzF9ijUc7G6YSqyuuj8PveTXb5MdSoezzteJMxKteTaSVU8CbW2vQAuvw3sb8",
  "key16": "5Wm3yiacC4vJJK4Zx5zBgbiw9n88v6wLzJFkT32Sf64WT2EyipxpzAo2ZSie991jyUfkJ3bSaLTx65ovKwXcnxSt",
  "key17": "4H3zvQyvUMpUwGXJ4BwfBjn6Fgb7UnT5LpeThEFJwsjW1GXwbeXB7RQVSfkuL6cmLK7P7iZQizRYKRvbu5XVezDv",
  "key18": "PZRsCD5EZqXh6zhDqE7SSgSb2HjD8Y9omh7ppGn4ibZR6wwX8YiWvxzKdoM5ipgJercoGm4bYUBLzYB5yS9ZLj2",
  "key19": "JAPte6VJWrnQ9inr2YazhLsLNgBT6QwF2PuvWrBhhZfUGvw9FbWUcRDxa7tEpuzd8Cvv9WJpM4vMqfCDpyjJ4sy",
  "key20": "5dUgYPtx5LZo6rrnP8KzBe5QrEfRj7MigF1GPpeMZq1UprVnzzpBKkz4BzRPqWUnctWWayPMaZWNYmez2DiyCUA8",
  "key21": "eiP5Q9CCfZcw7rLdbgQuCYXdVfsUwxZARGgmN5t6hUN7y2iPXkvWfJDV2xeXS2utA2KsUahDGFYkMm3pYcgQsaa",
  "key22": "4eE1G5XmkpZpdWxUkc9jrkek2v5mhtRmDM4BRx5ZeKPCN7VXbZFmEnLo7PCENNXA3Hvbfq9hZk3XnHmEfdZXwLsT",
  "key23": "48AChuLFvwoCgRH5PnZkSqgXHm4KPTrR4BdCg1NEwpzAvrkcHvUWtZw96ZmmdPp4srW9yC6i8Ddi8xTbTkDXHXzJ",
  "key24": "sziy8p2Lj1mHc2GHR5MP5rr127j8vJUu2N529Hbd1EcJ2yGJ9DonNY1Lv2i61oG3UE2HwSZtbvb1o8qVwwMrsNC",
  "key25": "ciGFcVrxPocughFajLme5Py7ZULTaTnaEwPmCYhQQ7rtRnhzXoAKaz89iX9n3oYL71CwGmzUeDfSYoDnuTQuBqX",
  "key26": "2ubNwokTmnuPrRY7Duwk8P3C7pGpUn3xF7v9BXuDJQFtaMUJDNsJGKjd6kpw24vmTmLQZm4Wr7mHCgUyiG5Pwfbc",
  "key27": "3m2LJX4LKXkFuAF2qmadM2oh8FwwetzX4goASA1T2Lgs9wKPc4srWAY4JfQSSFg5HHAeDNSGCm4PhAPL4MScTKpA",
  "key28": "4iibsdRUbrUe4tF9sgCgb5XPV9VnJuZHmJpf5zWwbwkSAEqTZgbvxQ8VgPT1CWk7j367mCqtUG6WrpeauCF3rGsF",
  "key29": "57Hm6QR5gZCVmuPv62hmsGj1g1C7dDvai1KESDQW4EiNCYhd1oTqrZToMr4Zj4kppXfYacYa2VfiamUr6Brw4e7d",
  "key30": "LpLFwW3LpUy9mYPmyt6nzfLyBqqEdRu7XPHLTyKKmDzpX6PM9uRiPVPPMtBceMBEu1yzTJmtVfXaj9mYo2wPe6i",
  "key31": "67CjdziKEe4Y6sKoQqfogrybqMMF9B7eorcWJpNQ5S3m8eFUQWicsgwpSBU5YD452x2uf2UU9E1quExbaGYsv7Vd",
  "key32": "54e9429XNi71qcYp3unCFLMGuHL4Tc5jghjxPusWMiGECPsuTJQWskz7boag9JPtxX1nqNzVdNbJptX2WHUVBSqR",
  "key33": "3cCUMknLnF4bnsffet6XopbDM8he6xJcrUuMP7o4s2RpuQC8HYk312zEADbzk5bL7865jcLPZq5kEmb5rX8LV8LN",
  "key34": "4P8ErBtEL3cBTedAb3ffx1xvaf6gtFQfgwd5UBp2UW5XREoDWAvboWpDsjDxpxvfF3sDVBHYErGoByhhyjWybfbi",
  "key35": "4PYqyRMqnUNzytVs7f9pgnHCAHnJr3RmByxqyJu8pBomqUSVm3iRhGbvVrWVRrLQsbYVNfQvKzzBDzTPzZEJjnDn",
  "key36": "hnPPMj4RpiMYB4CFLaLuejy5fy6kuvokHkXUXhioviWPfqmcyaJw5zQesuDaJ5wKrCBswFhPjXGvocTcWGz7GSY",
  "key37": "2JJRzT9BAeuPbk98vnXCsF7VxKxHE6kuqyfLavbAMM6Tm29ZkLWgTwgF7mEqEVLNwcJCfLV4J4cVA33LA7tQ6tHc",
  "key38": "4RmtFqRhgr2PmMV7Cw2AYaSFbUG8EdbsjvTycvyxcoLqzAzZjFaCCbKG67Lasmfj9m4dF4YTSnDN12k1gRzsyqxA",
  "key39": "8SLyyyzhwJ1FnBcL6HtqkCU3SH2G4g64JmAa5JHWRqLB2Zg6CywuuxfZynXFgAJXPLogTSv3RqXZyUtbovz1K6B",
  "key40": "5cCNcdCFWsSwNhGyNe67xEVuVeDvf1Kx8Qd3uWkEnZDr3nxhk3u6cYecFRck43ogw9tsBT5bJnXoe6h4Cmeojkdt",
  "key41": "3kWgFR1zUez9vurDX2oNoGZNRVhyzfSF2iG6xtK9tDdDzZZcxjoboq3BPkuLCvLxHR96QDBdvZpzZSSrJtkQkCRb",
  "key42": "4JdMn54DLN8xYQS632c97uqj4SNSvTaPwJGWDp4mJHRNeKK748oTxyxofigxeMVEMyeodgQbiDRZF8B2DhBBdsB4",
  "key43": "24r1VHu9uaVCE5e8XPG3kWPCwWarG9TCvvKtc8CTsQcnPEYEJ9HFdqCNhaq94yTfdTU6FXb8JRX5Ensuhiqfnm4m",
  "key44": "5qhXThwPELumF6btrUcrrdKXNp1ifr3r3J4ZbMeervyyvdvw3Wgx5SffKDd13ssfqeL9uNbeQsaaLA4K8G4GmsmZ",
  "key45": "2i5tJMAoYaMmibzTG14W64SFq9maPwpdcrwpVKpfoSk47ioMhRyU3EFFeVVghXbSpk8Zfe6e3T5t9XB2ZeM1XxX6",
  "key46": "vZwSBWmyq3ubSAvT9i2jR5wWEF5oBuxDNL5K3ScbrpSUvB2WhW2AtWKRUjKyMBNQymGdBjAVL5fxiggWAx9QghY",
  "key47": "fgLpC91EtVnxznZm6iL8oTKpUENayq5pQVnWXWRUUyw5NuXWa5kinWifJf5nfxm4Fm3EnKYbYyqFqb11m9zvWvc",
  "key48": "4XPX2e25ueGoLytqKruimuGfdnyGTpYGrpxNcmzcS5De7eLNAFWtadoEQMp9numWnspL5Lno171hNci2Z8K8bc4a"
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
