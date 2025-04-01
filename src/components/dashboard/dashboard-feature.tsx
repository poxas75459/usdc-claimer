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
    "5x2gMN99aPuW2oJ7uuBEvYLb23cwRu9MA3EeA25z24K51zyLWWA3LwkusEFkdz7jRjgsCiNq7tTDzEMo5D4kvEA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tVS61mjCTPRrPnjxTxyDBFYjRGk2DZkPX9tJ5Ag5usc6EAvnU6Pn9XZc5ofaaePe51HBmo1hbB3X5z9sfLqnvQC",
  "key1": "5Fj7LphJ1z9jfDarTgrnsGxS1dbcgiq3rnfJTi7CC66YE7vMCvYXu1XCQC3MdQhHMGKvsauDaJXrnb23BAfEDXc1",
  "key2": "3qNXebFu2uZ5U1gvkB6rRJVkmCwgfeqCa9vfGPZkd3wh7uTLXZzv21F6PA6F5pVm35Qc1PD3osj4dxHviZ4SmAfq",
  "key3": "3UNU4UBJHD3BNqcSncMTwfSEk2czjBHPxg7RjxjGktFWBPJThA5GdkuutaCzUkD8gVi9Ez4NkMpyJD6nKAFSKFrk",
  "key4": "4VzwupT1kf2LzCHvpAtQBsJ35BK1cPYnpmpkTurTT636YL8rMDzjqEb5J7f1GrM3XkkznZsJ4fz3Vuzpk5dC1e2f",
  "key5": "VcXoLFi6kNtb3x1NMjH3abFgikQpovp11yRjdHuEnNDZyrwWB3bM2zptSaqB2nyc9gNc8qSqV6baof3LQvrua4T",
  "key6": "2yLB7KQUUQF37ooVYm57Bb3jBS6NTiQTvWTH9ubrY24E69H45et1AmS1LDonXVgvtazx9QfJ5otmRBp4Vq6TFPWV",
  "key7": "5PDa5QGzxExFoJK8gitDzetkWMujZdAK9GHsEje4peQyP3deCJFEBKjZVEKwATAKimLfN3qKXdj8jEdbad1nvw2H",
  "key8": "1bCaDtFYxMnShghXBNZVVnx1X9gcQn7sMtiPwG17Hxv8CUXiFmbZnb8FqujLmnM54Ve7so5XnTT9EHF2yahLyaC",
  "key9": "4293WvUeFNbJJycQ9DkjNMf1DTKAFmpFffP2PMJ8vkSx6kfHQ6bmuNgFi1sL3VyreakRkrEywBgpUjD3trph9amh",
  "key10": "5HPZFCrEERas2dQ8GhcPWQAM9keVSupzTjh7qgDEbHXVX3Pprw4ybExNHugBFwSuZsWtKht3w68WQh45Cudq9Aq6",
  "key11": "5i9czqgZ1o4kLAAJa4j5eoPeZsDnZSV1b6ETt78Y7Bo4yx1aw1KgiYAtHAKRVAb7kSc3XChTt2cQQKkkqEaBnhEb",
  "key12": "4a6n7LBmrDmZbgvohkx3ezuPMhPDgX9cXaDam8U91WALiFjTwntGTTXwNMXRaY5Wr3fdJofnPNQWHC7uroes2FMz",
  "key13": "NesRHqnAqwmgTMYuedmP4oVVAPE7kJQwQu5MJcB2mFTMayMCRGGiNwZoTwLNreboYuymm3qfFstSZ3zZXM6SaeP",
  "key14": "2neA4hLXrEustQH7BVmtzmt9JVqQMWMbALUQsF1zRdbLnY95A7K3XcPmKB6U4z9t3cMshUBSpCMJtreHM8WddLHQ",
  "key15": "2rTjo3osQgRyu2jitGqpuGxidA3FHMmkvM2iNU53DW7qrE4HDmsgUEPhWQJbQ8px11jy7HnjfjqUQJNb2dxcGUeq",
  "key16": "3JN4mk6QWBE2AJZP3NeFM1hdFZSUwttg2LwrtSYoLUYBUj91zuToMu63h5UB3smkiTcJTqxCAbnLzk4ZC4LXroeF",
  "key17": "4oEZFaJ5J6pt94US18EFfcdx6RLdUyHc5RH9R4WQcYGkRZLhAwQST6cJ28UPSALWTfPJVv4tKtXGgKM5P2huFETu",
  "key18": "65RCDsTG9Y2erHnnQVqQMLauRKJS4HHrA4cDVJjgJwpeD7GngWJu7kNmVKELja31zLqb2L8rpPW1sSpgt3TuTubJ",
  "key19": "4nWsLVDFmfJ51PXHkyS9j6ZFFLoqc2cXoyS2W9KTDG7PzpLdB5uNU3ofvmfQwAsGuTHo7e7E8mf8pfUm1xcqZpQ6",
  "key20": "G3cwJkxL3ocW7vDhm6ctrBjC5ru1zF7cBGucgXsoDpCA7ETupU8LKp8fuBPpKsKjr3LptpBiJETtUCxbmMus6a3",
  "key21": "RnZJ6eL5TFvwsYDk4UhQibMrC8RcyWGscgCHBxanbeageXNpDsj4Q3FZmiMBa5qevUGABLeX2cpcvb9NdvvCtHU",
  "key22": "22ncyf1jC6Mz2XcmwwePx81Pcd8TkzccTDBz5vnxKErbVwAa6UEeVAFFjp2QYJHXjKT7wQ2kc4e1nbiNe89M2bX8",
  "key23": "5g4XHjirM9C35F6M7ganMCv9Vc3Y6vVgqjoP1xFZ62bYpFFHv39oGktmS1FVzqXdiMocKRoXXnJ4ASmU2FEp3wrq",
  "key24": "5ncr1KoFyKHxbADJr8Hib6hkNUxiDVpmCw53zCYcGMu7ab2qYaXPbfTK3AjjRLXCjjWGU1DxHNujK1ntFy9ELTGM",
  "key25": "61pS6BTT3Uxiwf85YytLuXC2VCzSfUXYvTofW6NWDMwiHYjzYhbMpWfDjZxJtd2DmDGSkCKmJzFwcy59v13iUf9i",
  "key26": "fvYVQoXpfqe4Wmt4KTmQQutAQKEmnZoaZik7tZRKigUVKTEffmBS2tqXZfSLxJVenwSsEK3ZVry3LfYBjf7GX37",
  "key27": "5e2s5vhVXWqvdkaTYMuCTTuLquvhG2Z6brJacQXBFcYWHhPDcZptvqm4a8dAx8G2WPPW9Hpac6dVA4MH3hJxJCJA",
  "key28": "2xFj6XWTa1Y6ksJM5dUFRHbYqPjLqmnHgt4KPpi4kPtq9T9XwLdMqeV5EtE9F234RSCMrKFAvZJzjqVQLosw7yku",
  "key29": "5jtaeKNiyjNzWRtU4CyGN62YhqTnbsMvoTkBAav5bsK6tcxEA2rv3KayGWbCSs9dhChyzDqgTMMyzVG3A5pmPpn7",
  "key30": "AXQCgPxvmywTaPD6KJThpVDtKqykLrLQFKY7hjuPoHsUpk2P7yt3jwLGetTLB2rMGYvzHrpq9GM7Z33jMDyR4zh",
  "key31": "424yegZpYhqdCqHCfXMerecuNR2gsEhSXds9LgSsJwvtAtTc61ccf42RmsrmLtXf7iW2KjsWzeqCLR6igFLZCTQT",
  "key32": "oMGEc7DaeiPuc5tFhaVCkK4JTgUdpPNx7Gc3zEsnMQovYsbz56piFMp9E1KcC2zXQHSRjrdz43nEiiAEG1PSYWJ",
  "key33": "3QkqKonLYCaseUrsC76fMAgEBeWvLv3hJAzRQ1uww7FCJCwNqDnPFSkfnisqpdCejX8LcecdfCcHPAcp3THPQ3qP",
  "key34": "25As5aEY5dudpvCW9XW9CWB8j85sDnUnB769SSwhPLiD2hgnQ1HhHXLGBgnAdHxbN33qbNaEb2J8eXFmRRv53M77",
  "key35": "3cg8k4zSs9zX9LNFw4appFWN1QLANGRQSxez2WSaBTjRg4sKSk91sEULQ85A7EaASVeiMsycy1TmKfjhX91pyphH",
  "key36": "4GCGXEogSe92EFwqFKo3UgQPAEQkxsfzpUqb7xPyayHra6RPNw4evYUhZ6uai9ukEVsAqJnTUmBbNUboxQqSVRWR",
  "key37": "62dkXoRpryZAXx1cVWXjuLNHxYNmF41RDbC2yt3a7EVb9wjFHGpVo757XqwLroJTkLMaDdXchnqcXF6Wc7LMJF8q",
  "key38": "2cR4uifCAGUnejaUvMsr1sGxJuFdWuH5ixReLVM3PRUWxaQNoqaNRqhCEMDXGZN7bM3GphAMutf8m6chu5PbJctW",
  "key39": "xHHsq8BTriF8kefGGq14eQoYbT68LxND1cMXgJPaxwgULWA7ML2uAxD923h3xPhCqhn8PzZp83i9ExaVZkPHEzQ",
  "key40": "5NZLVoyCKveF1HVvEJFjEMtWrDKxR2Tzxut2spd2eMgchowH3xUPRmQBMZgsxoWtty4XYSTrwyq2WSfqj99oU2rA",
  "key41": "33DJicJrTQBA8LMhZmypdo5xXUTHM9bAFmeNqDC5tBisp9GaURoLEhdLrhTKiLWppJgtsW6rYVkC1Znc2SMvze8R",
  "key42": "56S8xu2UButywn8qijQAkevGPTsubQDLHCgSLGKfLDBKfi3P4vGRYTMvedtVMBCcRn1ScYsWV4ErNSdwL8igH1QE",
  "key43": "3svvjQSUFkLf67bmBGjNC8Mg4Pqa9sxVEQudbxmURg63rXr4hj5a3mFuXnnQuaWAbGCBEqWKKYVJnRYc8nG383M1",
  "key44": "2P4oxHuYsYWRybsD5xLcQMZCTYkpP4VtkckXBkCoy4fqQDfzaZg8LAooryJvyuMX5nJDs6WTwbYGBRLaKA1oGLZP",
  "key45": "398diYv3XosYVCMTGYho9Sa6oapkzYrLGsA3opcke2DJHyFy32W16TVVmQL9d9dpjE27msvfDeNKAFCgpqNKedeN",
  "key46": "maL49ieRx2wDcpyaNowJZty5RBWE8NG3gpHEPUUPTvQrJ2qHvRnUEAWtTTG7KQSnUgTDD5re31qCrpaJoEd9wg2",
  "key47": "391b85owcXkqiQZdPn1qe6LSbhNZE5kQcaCxr5H4obEHokS6VnnLXmU4T5Gjs9vE9H4BXCRKpJcotE5sEJbXRbw3"
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
