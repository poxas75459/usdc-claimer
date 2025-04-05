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
    "5gFCsGcKjzL9jhbj2KU8JR7K59s3tQSEb84qnYRK5wYyw8esh4vp3p9ZHNUJGsAVVo43nG6cpanKFYYd8dCJXywY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsGii8GR3TYzQ82PdNr3fbXUFdhtAWgs6MUNhKopgq7Y1u4gmpFMMhRNHWdy7J3bQB66cx8oLjvA9dBcUkgDGC3",
  "key1": "5LMcVJ2BJhzK6Zj7BUaqD1aVctGbA2uRVxA3ghw7tR7vAeAQjHda9cDMGQVvoWucP447dnxYFSAUpwmbsJT9vRWC",
  "key2": "49FohixgFXe2tBLn7boamzR3uGjcx6WJHAdke9924S6iEXndBq37mZ6A4GH7UK61RMeBQXqZtZ1AAnnNhDMqg1Cf",
  "key3": "5hFtFKSPg4mcvh1tNhXjFwqWeo7zxdV6268mH1DuN1E6b4Wkyf7VHqRjkbTQAZfAkBjvbmb1F3GogF3vQuWpoJTs",
  "key4": "3MdoKiHa4dmkL6R31JhPaVUjTMAwexmC1yTfqDWVbg26GegmFF5ozKDyWeazoWhxhfg2tTcYeUDnfFFurBChny7P",
  "key5": "3Mi7xsXxckEi7aduRfCNW1jLcrW28m1sax8Np93Kggo6w7kkTH1xRxxYp8QZWqBTPzPqjUpTr4kxxzbKwBoN4kXe",
  "key6": "CKkQPCjRc9Fr3fS6fiV26HNxe9LXN5YagD1j5we6mwCPTF1aGweL887CVYm5GhLWZXkrjB9uMbNMsR3v1m1kEHR",
  "key7": "2hFcuz3NDp5JaNLWTpoDEiUzo7aefYEa6wsQg5UDt2pBWq9q6vw3cDgJbPLzhQ5LMaUDbaZWAce1eVVuHb1jHtkJ",
  "key8": "eE9vZe1oo3rqmKudbe1AKNU4t2Xd68XztEq2BS7sFkXUUMnntBuyUFUbJbzPicd4q4jZAsspizcHUvYWtqngV6Y",
  "key9": "4hkkCmLp9TC4CkRD6KNB9AFbioqRcx9scrgMkSxyPyeScFPkqCiM9gWv3s7SMYYuvF6nrkofQKPUgGQ1DURD6SjE",
  "key10": "4fX9vgg5rJ7xKFtczUt3VNBtwdc9iYHifb7BbXkfXfcF9fPuVnSuvHhzmYZCsZseiJNs3QdcCpwxZ7Z4zSiphAap",
  "key11": "gao2FuAvw9TJsBpEmD2VCH34ETHjrXQAXVvs4rR9FWvQbvJ8wb3LJq3P14uZMjS6Mq9qaLkzJP1ZM37aNh3Pyic",
  "key12": "kgBnnLNvYqsL9jzkdZ22vgjSYuLQTK12MgEMkeFSSU1osj9vhmTNHMapZ1WxybEHwQANE4jw8eEGMWcz8idR7hh",
  "key13": "5XCdHUW76sQ6qpctXrW1ZU6YxjhTvFzChtwPm5n51zWEK8SisswtPuquAzXqZxqD2DAZGrP6EjWpETMNbAPWkRGm",
  "key14": "4mYndG6BazpjzSaW5wnDjPLHMqsaa8KuWncGHQLDN8TSzZT5HegKsPPCWdD8TzaKmzg1iewDz8Ghzp4s4Zy69zJx",
  "key15": "5QjV234KrYz42ERvMNwhEESJCprjbaTTL9xHiLd4PNm2QDYwcoS8wB8JMFwYjCdivyw64KYNahZMfqe38gk6Kt8W",
  "key16": "51xf12DeNHQsU9fXRJJw5h7BmP8tLRpAq7CnqaU5gpgDm3qv6szJFuQFTFBG9UTbWaneLK7ojzYaKYiv5K7rsdg8",
  "key17": "3yCktAEJKEkKXaUZRwK28Fqd1fA7H3e33HHcKpsEe8ZjrErxniuYrxAc8S6eHvC8PsQoYgGYVrvnVsvhQHBn3PcK",
  "key18": "5oNoghJ8Mw3WWKgQ8VoXu7XPUV7hSdzrBqiPceKpCeMEAYxDrFCbdTA5t4Cf2Mzovyqwat9zsd7qa78scCjJr2ca",
  "key19": "2ADkzveXC7bd2poVo7DpxqfyPFSBN34K8nVaGj8osy9Tmsc16Q6M54wiQV9esty3tYekUQo1dxcSi6pVkUttGS86",
  "key20": "5PcYv66eneyK2hY5aruAVUmDa1g1EN1UPUceyG4M1uS8UGLGgnMYqPDBrp94yxzkpBimrnYEY2cCPkLPUNkXHdb3",
  "key21": "3wUeL5rahyfnYNJ2syxemsL2dhzUrdzdh2ubKBeWNVrA9NRG7DhF6EaQf1kDpDuRvXuqz7JnVM39eDSQVuyt8XM",
  "key22": "4dDkGthszNDPSQEmioL3NDfmYTt1Ki9rGHi9C117sQFmvZRWXrdTWjGVuarp1mopdGQCY8GeGhDkzYAMa67ejvPU",
  "key23": "5M4yVi6kTi5LJEfJ915ASagdb8D5SCJFZacmKLDEA1cpgsXCVCipvmiBPB6yJ4d4xFUaevMDgcVMMrvBvrgu7aZ",
  "key24": "xEgL6q5qpr8rJyBMYikwoYGnXnizHLodkLc88HpJzGz9xRgWp824fix7mcd76V8CJNnBMD3LkSSBqQXckntpQJA",
  "key25": "3yZ1wqd4sYPCoAze1B9RB56VtRm4a64AJjnuGD2cmKPe3LtKdZF8UrHkypgZ2yMSYBy35QoSfDhCuxa5dkoWqD7N",
  "key26": "34sEUMA3aMMr4tEfERXvWqvtuGmUF5844WHuShiT1V6HJnkHkimRQe6yJXMppjcJRjSyp7J4FXfsZsJd77FaM4vv",
  "key27": "3HKeRR8GRHyCGPkCpmKbs5wyetGbxZX7bovacNoY3HkpLspmd3zmS4KpAJEnFT6zo4BNXYqRFcB2MN3bvXLKacHQ",
  "key28": "2stWK74qXGqnTcHrvASc2NVy7i454woFTWfMiiQN8oWV4En1mn15kYAir8CwzXMJ7FqM2xuWCQ4YmGrHefsCmuA8",
  "key29": "5KGs5RT669yYw29vQ9TY21cWFxwoZfEYZuM5KQpSfw1voJ9i8pTanfQbqaQR7ivPc8MUeE729omocUDmVhB7fFdy",
  "key30": "2FyWs9btgtvM9q7GJzqKaZywhtCPXAc1gmCTdejVAL3K21omn2pub4V1sSJ84WfQNaMWngJHtc8AisUYjUaxiS7y",
  "key31": "hYKJi8AKzczpyCz3EExSWYFzGA9euxJ6t3vvqRbXFR92V8nn7FU8n8MjBNy3MvuA7UmEWYRsuEKCizaVUQdMTep",
  "key32": "5Eu5VqfvfiqkpU26XYEDmTvTaFf3Agw8reWXtcLssjE5tfMHi4dG3vD92W1fTT75vkrT1brbEv57BtoNW6SNFniL",
  "key33": "KYYPcNsG68aNiq81AYeAFRcKLp7PNgEssXv4qsFEAAubcP9PwyddWnmu7PzE1VsaxSybHkYbJ5BJpg977UufbmG"
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
