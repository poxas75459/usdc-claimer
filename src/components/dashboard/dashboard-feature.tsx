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
    "EuCsYW577CMkS1xgVBaMKYmni9acLMLDDT7VoGzey5D88R1VfdJHZDaERT2gkKMf2FgBxN8oCgWmPa8cepPxk7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YCr1k6TtAmjh43inY3jQHr9bLmQvzg8ZxvCVZG23Bocxb7qC81YbnPCP3Qnoec6wmziWBnpr6jYbPnxmvKKBrrm",
  "key1": "4R7B3gqDXLF23oCDWJ1ovEvdpbKiuFA8XaFMBKF2ZHyVcJSN8A841eDjJjhHGgDUsQ8rD8zMdpeRU5spvbL3EKr2",
  "key2": "2Mvcy8fML4nnKNMGEs4n7RpBjMMTuQnghZLdVQWA8sJ3fkMnJdoogUHicbeRCETATxTWtSVvtdF8AAHk4sc7D22j",
  "key3": "64tYQFz2xN562LEvdAJwXAYDjSZtQM1uPioUjM5DAWoq786kKefFW842ob8XLH9DqAwAapBfDV15oLBKGum6ysRN",
  "key4": "FHR6HgwTcChHxorEqfkHitoReLAuzSWKkesSRdfwbvB8199FhrFbYfMqZuWcpHLMjVqUvM9dGvtp9zYPM94JmL8",
  "key5": "4jTdphjXMWtR8ocXJ62563A5HQXjUgU3o6gtfGFKpeyaqYQrPAaCzJxirmcavqqmFGgNK9u1eaRoLwkP7rCmRVFb",
  "key6": "31b3ESNhR2xsv4QotHpe4J9T9XE8epU3BC4yoVYUZ9GKdGvUQ85Wv5Cqf7jEkCByRRjJDe9Uf6hTXzrD2Xf7iQ5N",
  "key7": "3EAzZwuQmBXc7Ciag33K3NkZev4yXzskBfhpFpwfKABjyazmNqMvtg57KYa5JRkMF4imHUwdpWkUPGwWW7VQLaZY",
  "key8": "4czheGYbGER39Uh8KJ7fFPPsHa6ENs6iyr6AKk2o7kNHHbW6PJj3TNMhmy19j1xxw8fh2eL76G5c72GvkEKaw6fV",
  "key9": "K3AawSkj4oYEJHgxVyNaHY2VFxnRfvPfRr2k9we29NT1ZhF4RKjGWpYARTj5vUTmjTEehT5NWQ4Go7fL6a91PVb",
  "key10": "4ZHYWxNZHukcVFTkoMbZF2rWxkzAfR84Jj27nRiWuaLUe26cfwLNevmMtdYSCcjH3zwBmjfWjk4byRKK1cpD8J28",
  "key11": "3ev17VansAz5YPRKYzimbzurPmx8R89QkSaRnnM9YqXhfBGUbD1RpXKKgZ3TUYtMBGMcQATcoa7Y378K6aP7DQsz",
  "key12": "ugkPguvFDy4H42nkLLEjpjZRFhnMc2NGiBW7XPXyRaBX1p7wzchFsnVYCXjee3kSH8JqDhyAv7jgnZ62ppnUKvK",
  "key13": "2TbaUR5opuGQHBQJi35ScgAekh6GTfAh28K2JSbqPA644Xf3aisCtDCKsu5FXkHpBPTH1ikG6L2ER85eMAKxKXsT",
  "key14": "2VRHLWPPBuV8wx8pSnx3eH45EBM27Pq8GDqjoZ8B835tWyaLmcr3EKL8v6BWaTpeyovjZAMukoGePDRs2KfFqsn4",
  "key15": "2hryyx1jZUbfbxpWC96WctXbtomXq5wVC1NEvycK61PpkC4qYZDfffnHoUZ94Lig5apfhrDuAa7gfkFVHjmDG3JH",
  "key16": "2wDmg5aie6t5rDvUe84i6TJLHe5D4ab9BYfBM8c1ByWoQs9jb61z1ygUMrGaQAL6pU6P4r6J3j3sktDKM9CVfgfK",
  "key17": "25YR7QMwxq7p3nDKbsKEthgzn7dN7Lwcg3aQBNL9A8UCtpT8JuvtLepbb2iXqCT8C2ecPXgYGLF787N21bGgznXb",
  "key18": "3Dg4Csz7i1Lz2cd2EpuEhgcbm2wHGvs7SxqA53Ddk1QDhgWQqFynHRsVegDQcjn7SWaXv9HgvVDKc484cooqV1KR",
  "key19": "31hzduCcjrKvJzktLQiJSBgExaeGrDnnUbs6NBaCBgMoX1yzFV6EbZmLftVnV1UM8RE6ZVJwGUxsssVCYMBofCdU",
  "key20": "4i1FEGqrvcBDxPLohxjEwP3aNzBgfNq4JdGVDNKsj6NnYANjwwsAGuK53vBfNNGHxfAnFC2fvKSNvYcuq4v8C2kf",
  "key21": "3w7w1XryyXsCYP5cGqGTyMa3gkqShHKg2bZLBrZhvmwzHZjb1tMgHuYMri5JhvmuCYNuyRQ3vCGf6JVSFzcUr5yn",
  "key22": "3BLj9puoFd2FfMqxPFxp33e4eXNJWwMhDQ2LJSw5GwEhsBfy32vo4AiR4K8mKVqfLxzhdfoaVCYaJX6SSbWUzTaa",
  "key23": "KReNk4JqHWCk6vccpXicgjhBAD25bDD3XeU8eCbFE9UQ3k6cbSJdAneaUrRJPSUiytS4u4LNMfUpawv1UyzF5Y1",
  "key24": "r1gVK6arAGaR1QQJKipYrEbm591eVc4UrmLwkqmm2rp9pGGAyPGw1Udn9NqEJjJeEG2ytsy9jZgPwKGYm2qT6L8",
  "key25": "fT9nz7WK15fRZ3vgVeFCfSfvNv3PZmTjy83J9UCeAvXP1TQWioW1oepAxgF8vWoJxdNm4CKT6WpGJErE4X2oRvK",
  "key26": "5iG8ybtk2yutXk13qYJnjDbE7LByY8YSmRyAvB7wzYK1AdbRMZ599b1QKYwCZJwbktkKuTFcDjYB4Gzz2u5ZqVdF",
  "key27": "5dUi134tn8Hd3WGM3oXFBEeSYtowCePBU4LqRhFtezEG6R1A1NHq3d259QB9oFrm3JmPUJFYkdg98rZW7NcGrvp4"
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
