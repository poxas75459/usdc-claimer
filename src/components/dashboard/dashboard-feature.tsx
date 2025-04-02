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
    "ssnruRKQ2Xq9c5w1AsTndaLbVNn4icr3Uko4cZmr1RLakXgJujVQt48J4ZYkMEfaE6GtufAkKhMLBoGQGXxNnfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ait8RMCtiTuoXkEm1yf7szH39ZcuErbr1abACwsCukSHvJeDUZN4BBHPviK7EFqYvKLZa9HAyHGXHmLr9Ldo84T",
  "key1": "2KzUn5UA9nWFv4qWBoSQU4N3JMbibV45nH3purwQNK7utrLVcLyeofXcG48V1f3Xtv3z7pw6pQXNaDvyJgoupE8x",
  "key2": "2TD1mFmXemfCKxYXkxJqBLN7waxDBexvMyk6PCrwSG7vS1esfpwTTzEHrVpRoK1y4jjjWbHp724TUCf1xtmFyyNK",
  "key3": "4nPsKzQea2Qw28iQCCXHLmNpGD5aH1ZnfFake62maYWejcw3sTQvyqeCYggQh4ZjkWa5GhAizkvCqvqmk9hZAmY7",
  "key4": "4s3us9GqAW78b7vycUVWvpgX7Hynym7tZkBfZkhuKqGC9dcij8ArjxmVmZAXSYzAxGVpytBEqBJMWPjsTQDHwZ8Q",
  "key5": "5JX37Pguu3Wdx2EVz9efDm8x2BN8tgyrU944JXSHtGWyUxGVhLaHtDMsHFGGaVtosA49YhjF1KWKktYdSN2SyKJn",
  "key6": "5jTaipnck14FMk7kAVK33A6cgwJaEZjyPRgYJenu5NH9T1wREWcpqDcuWztLFmWRrSmuTtXddnK7GBsryPePCTBX",
  "key7": "5v1fVtLxEajY1XkCMikyst8BJtU1HYgxNUdrsxF4NJ62rvA7a66ghPYQMFJhu8oec4U9XjBoJXe3bWXQZ29rSYuE",
  "key8": "2H8sGWXYSUkyZ3owVo1cbYJVf1X1mqEyWymaG5at3B6cV3zzntJqN2mE5NrtumRSPXvRR3sNdh4sp9zezeHJzQ5A",
  "key9": "2fzjnMRR7uVP1CkjYrQbcpPVhakyV4mQyUXT1T9SMYXAb4CackWWMGxLGrosZBqg6evMTBaALaagjfYyVtJ2z2cJ",
  "key10": "4c1dMPSu4akXEhcmtRPExp55pf9QWbeb2ZRd4ypCFgdT5TdPnSoLQixd4E7oozD6TyYjwvSyvbjXRS8qRzcKC6zZ",
  "key11": "2XPoLRGA5tjp2fhE9eVA4YoJB1crnx5UX46xJJtm29Bkyu2p4dBNWxuL9AEzPDYXazV2NWjSuyXRNK8VPPpA74ke",
  "key12": "Beut8ZJMPbNv8ZL3f3UifqCS3UuJxZ5UKh1j4tvKWGZNGHadUydZPoftyuwn6nTmVs1EtgHes7tPnTuSS3MLvqS",
  "key13": "3TewqhNBwiXG7f3EX9RnAG5H77fCUUaJfmxJsXxk6LFTfE2ZsPXXQ6A77bNKoJWGbojF4gyhUetu6K7jFaTEDmb7",
  "key14": "3sFt45Z1U6c21N9t7c8AAMifMU3B8wGfC5zmCtEuQj5u2cbWcm3wBeaTj96e9WN6UJLSYT4CU2ZgPR2akKfa9PzV",
  "key15": "2dz6xQDGXbu5b3Z8At3PjW7zK9PPDBsgZuwcoUtKbMHL5u7Gb9vAqiXnejodb8nTj8oGKJ26xMc7XQD3dCVD6B55",
  "key16": "3YFqgPdemXiHyg5YFTNdt5CKGqhmtJJBQ5mbuAPbM3q5odBJW1ebEEot2tVpbyq8jLdb736x5VrrrTFtMB6JFGM9",
  "key17": "rxbpbCdkvnDiApNZ3oNCfrWFXLKda4Ecyx5y5GgyQzNPeZ7MpZV2RnzL33RQBXeuc3zCc9zE2BpLtLNiuEzVeUV",
  "key18": "aJGixCj15D2VqrhsYsEZGA7Gz2ZxDZuKxGYRaLRXXhpvtpkUyNiV9GEKYN2RAsVGCLJaor7CWMa7JTBFKz2LjZS",
  "key19": "5iA6ukAKWpjXbKkuZh26YWkVhJoU9VnoarnmjTU3zCMs6e9NMqCDCkNLuUXVm4LwMUpJCQD7BfpC4x8YQV3umdbv",
  "key20": "LyMjhacrCoFAwc7xp9DTfXrKPyJpMvLHJNN9fPRSah345AkUaUTKQdS774ntckffSKJ42B5GuSFyNVTb6mPUkvQ",
  "key21": "4LsH8wSptTTAd48geBf7yoAd1wqggBt55mciPW3NzYz7J3Dy5tiqQ7mwnocNr29s4mgMwXacGNYdXBXfEFtaPwqN",
  "key22": "64P1JwRZ1e7SJAi1Nx5Va4naACToLkTK35UJpFZWycfNPguqqWzewAJmZfRsrecqZ2F8ewC9crs7TZ7rpVCBBEmF",
  "key23": "5P4LAvjCknya7id4Ly93jP8PXajZJzgyybiBAJA1eGkxZ39VX1UQZNMjLdsHm1LNsFScbmDfvxNbEHmrzZPSssX8",
  "key24": "3KYWvYCw5wUVoAvVf4Ue8oJ6fbj24M3CgAWbhcbPrRMyeKftvVa2rbrKabPNZdaiNdpsHQoYTZg6LSitEbnEcgD5",
  "key25": "2N76HBmK5tkaYq477E4Wqv8NGp2jhKYmvsp2s7ez3iPthsTzRJDkTvW9MYGot3h8ibe4BVAzmX6AjFry8ZpFU2hP",
  "key26": "5dfx4BdaWka6eVDXGKehSvynNNdcwmVDNYXNh3fCFLvpf15gLL8bTA5GoKkJsVoDKEzT8q6FQgmLX5nT3KjBd3V5",
  "key27": "4JsJwuG9LAKUu3AohdhXuxrJkQL89AfoAKGo1CdA1C8i5sJPJyaEsTZk2ZsF6q8RvgDJAfMeLKY5UjDpBqQpHZAH",
  "key28": "3KQSxkDVVW9xjDBJZePND8fTXa47dKxTBzybBKDDNRYQMKua2vUzWyoHzdydzjtKCaumqgAATXRudWvZU57rVX39",
  "key29": "2G9rGAs1kD9e84txzVQus1dZWbUR5ixgtC668mvA7YeLzaEF4EAdWobzfBB2ZfUsrvWydDM8ZMtkghrqkry6krDG",
  "key30": "ZZfdAaaKMWYWouN977u872uGWPZ9LMWqDBDTkSoNqWkmYwF1AfutjdxPSbdSMQbr1G8WrfkgnHcfuA39E3rwQ7m",
  "key31": "5kr39ejdyUCYyrBfGwnn1t7aar91HSU61m6Lgz8R1k14h3hCa9nkD4YjJxc9L5N3ZUbsvjtL15MUWhLX8KWerNKt",
  "key32": "3hQ7zYebst77q6uauNkCbkFKcowqUAa1WaRt7PKD4KHECvQTxhkoWshyW7AiTU7x8VZjjn5oSnXgGu7adtoFAgDB",
  "key33": "3HNQWTLeG9jwrwVrD9mKzd6poC8WXUszWSepZjPDNpPWn9hfCcq2MAL7LnPzuZkMw7DAty6f1N8yfqCc2DPDaa69",
  "key34": "5NEFeGiyxrQjZJYRFFRWSWhoFg38SxkYDaKjJNcH6Sr9uqJ2Ma1SAGNpi8fGTV8VqTBKBJGNJKCB2rCtXLDwkJUs",
  "key35": "4p8Hq5Q5eryQJKjZBcXQU8JuB6Jp2JadT4K4m6UodJycpTa687msYaiaxam3e4YTecvsRT386JXLiozNwYMfTncw",
  "key36": "2Cx8Ui9GPxsjwDwAWkrg3QguaUFSi6hUxAXPYmmk9LKBxSpyCWVpHg5cNtTkRR6aioNvgczne8YoCZ2RtUMY937b",
  "key37": "4dPin59ggZiN5EoqLBg3DhogLps3K52mksNc1vCEYxdvncjxWw323cdm1y7TEUjDwq68WUQd8E6LJYm6L6REbfow",
  "key38": "3zMTRPFvpYYctLRK1Bi2nV6UyyNwkPgdyk7Ym5saymfoGRtLBoxvguznJSZ9HEcFm8HQWUgMXa4TJJBLK58k4756",
  "key39": "5BQ7gASowY77pcpNrmuNoXqYC1dceQaH37KPDFv9NhptdAbAyrTt4JKMipWJTaXn8gziQ9PFa38QdZQJVhqEcnQK",
  "key40": "5hxsyWsoQRPhydYzsmYQiqYoSkbYh9ymTAvgin5FzqLXoPyDYFTZSMbK43pFYJ1T6WaidbdEjtYfpy4DQmethzFm",
  "key41": "4CvRJvD5zEiDiqcToAXVEP1seMJHkBsuVe3doDmT3q7FiQDpRBR7v34AtFxdxhNCRaSJoi4t8MoZ7FP1sk6UqLeK",
  "key42": "65cZCccnwBZHLHzX6YDBhmrhqzXgXdMg9Pc3189TJx3Uc9mptawKxnEFdPES3EYe7BM1qK8c2w65qdGH5MYQhR9H",
  "key43": "2GV5hc84266shykCfaWLnZFwqdmKdPMuqqQ4MVWZeXBnCTDSJKHT9wPjdWzhLBnsJm3mrPjS2kGRKLEnCZpqkAQ1",
  "key44": "4hYLLN8dESJTiThdr3i6H3xdDAfyU7zHNkos9rxkcSqn4fPhi9dYKKCTQjowHqyU4TS82bEmsejce5rHTRtzN79o",
  "key45": "to4S4XQWq4p34jrj4PxCaZU4urw2NLyuJxGuxr3oPhA9jScR81QxorUxCreRg59Xq52gUNojGaHTmwynb3bjvFF",
  "key46": "3Mry28NF6Yq3NsprHKXikqjeWGXtjBh9kR5L4pWwvXsgbQuY9D4ZqLnrh6dypo7LH9582mzAySXqE8jPXaqXZ2Sb"
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
