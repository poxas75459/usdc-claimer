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
    "5n5L54gaC651wNgqiJkjx4URe6zhjhuV1iU5HekScL1VjiWUtEpdayBuK8PmzSET6GuEbteQ3kEMKiHF4jfnGAjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DXjNwwoT8wgx5oPLHoFqCEqpCzuzHB9isi9yYHRRp91TwV1tCFn7xnoE8MVpvaXh4ZRuV6CpsAkafGxYwX2UYYS",
  "key1": "3TTC4sPWFAXkPyECEimKAZEayxt4WqTcZo2GKniwbBYeCkq8nwKRYiUKw4UHjRTu55TE2Ei3m7ynd73dsLkhZ9z1",
  "key2": "2A9oB3B9TNhG2kxcMriFc5C4tZ3mfzKawPjV5LstykV763YygHhN3JK9ZoNjq1MDxGQbH2yJDy7CFvMtCkXh1CB7",
  "key3": "rg51UvMgatTxA4evU3s2H4KGz1CHmAs7kAQeDK1J1FHouQmnxG2A7YHiBimK86EvYiN6a3K4JVXozFQVba7yYTs",
  "key4": "Rn9fDqdaC9wF356Cz2vEDaaLXgovEadZaBmpnbvD4T4Gp5QWCBzDDKwRKmoyZ4jNrq4RjRdjdSjVnKacRvwQeWN",
  "key5": "3xHJdpzwSiV6AU8ZehGhki82bUDRd32JXgV7pTYQD6rhQhSsThDp7jPjTGpgDfEDXgBdLi534aSCMd2xiAkfkB9t",
  "key6": "54r3nuupvBGkvLZ9RGpL75xEkwWFST8BBGAtT1k8tefKb9qCtWkGxNU7gLR7Znkvaqr6P9bCNUyPEL4CaofFNkMT",
  "key7": "28fRkm21ueSJeyG6EGq6dskAchY8zPHvdLQmVARbviQ6PDBLCXLukkL9RCy2TnApUZXaSc7Mia2u1u8nZNTRWAii",
  "key8": "2L7iLuooKfqnFHwVjrfabS8SfdUKMSvBVgtXXgJVnysnZNArpcoBnGrsyjBVDr7wt54HKr9mduA53z9r3zBdx5Zv",
  "key9": "Khq6e2vpdKQgLnojZtQAMSzciqxxruG398yKzB8dAGSxbAkwdvzVbnRXaboUNm6NoEY4ZBGMx5hF7R71zs4TsK2",
  "key10": "5C5iJs9hkHXUGb5hTKghpg9X7ZyWpJMuqQ626bgeDntKLjy7NR8SMSUpdw6bpf4Kk3Mbd6vJ9vejBoGN4Tv8s86C",
  "key11": "3HWbzzgPTL1UDDLUWx7s6FhJjdsgDnMA3hfHMepXd8AEUwvYXnEpBsomRG55NaRxRYHDUmWW5zCbCoW7eekKYtbp",
  "key12": "4M8sWrquwGuSj4LKvhBnYkAw1G1Xk1WJCaUenXTGkoiQ3zsHMKV1r5m8G1ud4s2Vhn13Y4j9cNvmGztRNYWtkMhF",
  "key13": "3MNWbFcMfzQSsMKVDTGixYVQpeL9qPXPY8kCbaqFMUBaM2BSa23y3ecjFVcTAvti6KSeL7WGUHRtCc1hG1GP2zfJ",
  "key14": "2Pvrk5R1YAhbdaD7eDbYLuG9opfgvBJY5BsEt47Dye7phoVRgoipCTWMwxq18Kfjc3ZD7PSDQzxS3JuhszeNVFhk",
  "key15": "2qz6MokzLJzeFbh7JsigbwJb8X35BFZoKG4obpwpetuk8bp7NSjLiaj63ZyDkV2BoZaxJeTU2CRoV2d2YQz1Ay5h",
  "key16": "2BAYEchQ9V8i3du6HqSwg7kbW8T59VUTAvUYCxD2ztmN8fKtJskK39xwnhzVNHXtXHBp7WkpiAdHUmRLHMef1Q8b",
  "key17": "5dSgoksfk3qyPYWdFaUyt3ihjyzc7Tjgh2McY4PW1dJzdGQxi2mB3Vez9JPXDP34JgDj2jCZGifu8MzunTfDdRmm",
  "key18": "4CL7K6MgYZSRkk93xk39RVBrQGycVLdzSeXTKWcgXNFxCdhDQF4i9tNjvHDQYPjGRrZT8Hm6uB3gu16njrfSkqi3",
  "key19": "46Nm4gitcKZbQNa1bpuGc1W8L7aVzCjPGtQ5x5rkNcnZ6J7AruFD7HUrbY1XshKJfk3Pau9iLwuD3qcZFVYCZ364",
  "key20": "4UGMfbEJPQp23ZektuSfPmrE1nj2mDpWxAqdfhKrvvaooJmgtfPQZF78WhCrmuzZQwaBvZyJqkdGh91WeFewqqYk",
  "key21": "5nRPShFcxiV6ghksBJpF7v9eHaMdoWWV3dyDDc4dWPccu64nTbsCSkgNJqDNH5yDMjRVGmsUvvjqGPe4rmqLHEQq",
  "key22": "3Evvmze7UU5tSZuBtX42mYLndRzSvoVRijr4K4va4L5kzpbVRap7qkWerqdEV2QSAwfzdtDSR9Ehbc5Bvsz8rnha",
  "key23": "cPnpHPKm3aoTxUYxiHbmaJUKaAkhX6UXBwrEPfCWrKVAtkWsbujbqu7krBEbp2XCrVvwkmk1ko6kcKsksqJ8mA3",
  "key24": "d4yGMrAfaQtrXTvzxGGjVJ91sVJEtCUkKRwWjXhgUimTCq1uZr5Lkb3LQmzDitbywYfubCr1dzxXFuPQ9mJxCLF",
  "key25": "3Lz9bRGW67HiRaJ9BshqWnZsVAQpJiAiEKzsMCwxEawZXZ6xXFgQSYbcPQigvDdjCL4XwJLUCRZwCEPuzoQXjYZS",
  "key26": "2TuYH5Q6sxGYZ41nxT85H2en5DtjrGm1FoP14i7xaEFjzGGHsHoUqv5gUNToBK3mZzaR1vgs7MpkJLeWHBZmw3Jt",
  "key27": "5wcxfMVvRQzh1GWGfHsXLEx2bYRR6f3h6u7NXFXojcYujFMLdLGLFG5ofdYjh2Gf9YutzmuEC9EruuHRAtNJmMD6",
  "key28": "52VH7zYLxWE8Jp5NNLBtUZp4ruFBDNGwbECBytnH3bXqsgcsfAif2DCZRSJLhC5xCE8mZSemZWRnVHacGGSnVFiT",
  "key29": "7jWkn5E5fEbHz6S71imyCR5m713NwfiPV2A5tnTUDcDpaVCTq2UCs2BkhrrHQdhET87xDFFYLTAsb26srBmpxg9",
  "key30": "3DmDz8VGeJQV5D37h23TosBTDjafTgZvaDPQSCe7a4bDiu9PR2zRjuKBEewrTqAacaR4KnuJHzvitXKfD7CdWgTS",
  "key31": "4LWqfoe6WYU21eSmYpekp9GZypBtruJyVza5oxqy8nnnF3LB3Tt8fapJz1ERSyauXeJJF5f4tMdmPTLwxKdS99sM"
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
