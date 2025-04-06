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
    "41ECJQSn7dYqe1sKFqps7WhL2TxxA4v74CWDMYxL4uPwJiBCaUmp2GrdZjvsg7RkNEarS2Phzp6awwUHzBc1iTE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5HxAi1c7pRorVGff3d1o8sT2KNok7CbC5giB2QFeCiwJFhkLYsF7NARZLdqdj1GdFqNBakaxZSWPULk2tRRqie",
  "key1": "4s1EU6ayNM1j4yqAufVBjuLKA4v56RKiNxFM8WdZ1siUTxFo35xQwLDZiDN6Tv5RdNjcrMsUrRgmQ6qh9uJ7NM4",
  "key2": "3Kfsojd6kYq6r7eSgVt6To85XBy7kxhX8LgqqHF16sqTvrvCdZeagYdheXGT6xYiCHfqVuDvZ5RTf1YQsjGefQov",
  "key3": "2N8Faz1EpWh2r2oPFEno134mFKjntHXujCwwFk23JLLkEQMZVvDoomLrZSd6pBBjQY6ao9aaQKKnXKvr1bpaYa5j",
  "key4": "5Sy1LT6hjc1SxfjXHPD5uXXddgy9rGTmkar91aKsk69xUDa3PRSVM6JWoeBTjazHLyWGMMem6FtLhNwBPkyYfYMd",
  "key5": "2ta1rtC6ctFgttsG2XCeEHjHXT1iLy3fYzJz7kRFs6MkAXfJMrJ2t287x8CQFgjQnctjJZuKdYp9SypcmnScePUD",
  "key6": "3gdrnvRQYR2vQ2hKteVHeu2VkRGFRwXCsduXaRbCNVCZRzoDwUZWpZAXbsmmwWjXqWwVmH9nzKjwhMryKyUZHbyq",
  "key7": "3JDmUM6tKRDX8tVthFDjrExBfc6wicQvc4pJf5MEYgtzPxfNcHnw7UJcLPnqux6oJ5QpMJTBYmUdHLjcAhUuwzCo",
  "key8": "3u75LcV5XJpMDAvgGGKgFt6jfho9yYwpHfH43DdDtWrd9ZcQRSCdvNff6F1TmxrF6p46NFDM6fX6HcnGHCiQoF7S",
  "key9": "2gGihKu6kvSVi5uf9rYQEZskvHqRoyhv5A9sGXmZPy75zNWjZUYcdk3WpogXZL6o3qKmLATEsN1bsChHHYQVGFav",
  "key10": "65pbrRbBbPn6uG9hKQVd48ngJ4VNXccFfJsjkGA1ND6VV9prbaNqQaU5kznzBXWYZXskT2e82Wrz18LqPnbW71XN",
  "key11": "5ZVsGRnC3tNrv2Kx4sRBfuW6hiBjtVibhjonEeQKmQmuHJRdVPT58tRcmM4MAHngGdWGfSgcADWesRMg5hZA1QUU",
  "key12": "2bD5vCSKSKRJ4hsYniuwt7zNUPDbCsqW3Nq2F78AADyb4iokVRm8Chh7TFVf67ZXf4Kt3bKake4r6fq3bKYZnw4u",
  "key13": "2QFELkKgjzcJTG3GKvRrbXTCgs66PmccsFCtQpZadRYmHcs3B3aF7t4EkSQe4znHEPwYVGGGYX6sVLQbFRd7rbm7",
  "key14": "4wg5E3zYyApWQLSay3pfaD7Avou7w21osjvyzHJKBZRYmgN5T9Lkang9rDGe9E9bobtpiMoAGbvSVM4wQxQNa4ue",
  "key15": "3sFbEuPmdHaHP4s1xXke68DVxq95khUpefQh9E7B76u4sLQCcfSnAqLFGuvQtrQnaRRdCKHjiUQD4V7XeZgpS9xK",
  "key16": "32dx9B34b8jX7B26L3CXEcPXkdwzWHvNE7CQF2c2fxbU1iQDPGemCyZqmdZrjzs5kvn4FzVHvX4vxhv3oWDyUq9t",
  "key17": "5XfUEA969RKH3kU28kFj2CzMaCHZoeiqkC4xmjX1qw3swj4q3nhTBKJUnJhLnU3fW4DYAp71WG9tHo9WhNZXv7xx",
  "key18": "4Zs3d6tpArqYukfJvcRv24cvyYb4Tx5EEc9atgKn6ndk9BfDnB2Jehr5LdZLJE1fH2Wfncr3ercVrb9ymbrHGyC",
  "key19": "2C2M53Ze4m91ZTvjUsQtBj2iVswwkAFngNVrHEXBVJsdRQqqxt9Uj9z3J2kVC9U3EmYsmY8H1Nd3MFG2ac6zrGFR",
  "key20": "pFidaLF8qT3YBRz21knn8paG9ZZwi1kcrde1nSmEe4axjWF3YVEykpsBYCtaUCztutPS8YYjoyKorK8FEFyH2rR",
  "key21": "4v5JWdfAPEsMWGmq65si54vnqnL1LF4LY1e5n2kMSDWoTXz2GgdWyQ1NUgQDUTQiKM8Ngu8Gs7Junk5FNd6fh54g",
  "key22": "3nru8hnUsmwECn85f7xoMdmSv9MSDNfqUxtjjG7Ji3zeTUroA5AY6fZKtWp7kzqy7bUDocG2G84HPxhN7ULdkfew",
  "key23": "54JgiGHM9iEhBDWnmoQuLNyQtJGCSSzDu8ex6ejZEWDoVpoctyuYKd99caRHYAUaSGBuYCnDFdePsx9VgE4xfbfP",
  "key24": "2EecmNRjUr2vaAPLpeRnNt3YjbvGpoapkxG1ANziCQhgMKFzzx3cLdVKKERfQvrmBtCXwH2fV2k2mijzH1YJNXiD",
  "key25": "JBKvHfHcTkpjV8Kf14KK5JbUm59mkkioATX1UzFdseD7YNTviA9Bv5oFRgNAjyaJ9bVeN3W8UaYLVYnCqLmUQtR",
  "key26": "5zhQZHGy92VcD55Zhd4iCMHMVkyt6pLERDkoSmNhtm4A9iG5AcWZQPW5Y6emFxsjgNiiPE6csWhHmsStBiDk8Qff",
  "key27": "5un7zteb9JdFxm3w57i9cujAXDeYLbE8YgBEewJf5M32RMHFggiVfddxy9f6HH8WwReskxuXQowZCHR5xF4P7FkL",
  "key28": "58farHfmZMWdEHhFm2kDhBzGzvMqBrLzA8V8YwhtgPENgnfPyy8nb3y5oEGZYEStDMTxZPLgwZLADCKdEayorRNQ",
  "key29": "4JWZFxoJixApxWpeqXjw2EiSXdCKHHPssqcRW4t44hs9ddxLEVUuaaHBM652ssDxQwkwYN7YVNNZA6crkkRMU42N",
  "key30": "5VP9DJFPY3Vvpv35MHqyvEeDKd8ebAUhmESyMAj9xtoYXWxiJUvNyVqKdCLEF9q6RCziutyTapvy9J1ucgAVf3Wd",
  "key31": "47xQgGujh9KcdU18GWpj2FuZCLPGvbhTd329T4xz6Ja2g97KZuFeotBssAuDUW4hTeeEjTLEMNAd9vMbN2bzjVXM",
  "key32": "4Ptxp7BuAmRiJ3YF2c21V5Rukq5HzWdSnwmYHFXz3cj9C47ezrVS68XKZUe4HooRxmjPgkUJqGZcdjvD1XFPzRuH",
  "key33": "5ZZgBjPKNnkLvojfkCJJX62hVyUBwwb8XwTmXDpLCNkD6eT3UXjV2JbfbUfpjL3YFq38C2uaSihkLqXpypz9V5k2",
  "key34": "5wK4BkWYfCvAWFizMa6RtE5BuRnhZNiGJKkNUeXTn9tRLYUMs7HVN5se8oZGvAY6bQwSiDqdZ8NoKxbUtvinHJuP",
  "key35": "4vkrMcehMVqHi67KqwJ76Ekkf6HnVg1H4GmeVvc1r7j4UgJFqJvJKk5CgrVMUXe54561biVUvhkoypCe39PXXTei",
  "key36": "ad14AXCJCaQc4VqqSA5db4uvx4qgXFE63jvNJEaEbgK5FWycBcrSXSMbLoKX5yDC5cgEATB8spBQSUteUoS1b4M",
  "key37": "3u8knQJkc2zhMfcMmAoHJ8rKJwH8CrJEH5BPMBwgz9sE4EgePpQzD2XHCf9pyg9Ha5fVCKyJHNGFMjaSKRqkV3Rh"
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
