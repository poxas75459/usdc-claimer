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
    "tXTD3EojxwaFUqFx7S7EX5n5e5tN66h8nRspYs5DffdP3NZxWXpPa4FZmX1nJxN1sgbMJQVt6CCm9tCj3GAmWXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvYA6in49q4hDKhoXu6CmFDqpuX6JbEPqTHZEFY59u35wYkZ183j9EZT2H7ZM3fuSFm1sL8qgCyt9oZyE7p3gsr",
  "key1": "3AtJnrw8ZG35yydDUBvx76KkDjCrH9ofSw8ubcEH6N9K5fDZY1RM8xT3ipxwQGJyheTW1kcGnEPSrNy9pT6DvEdR",
  "key2": "2XgfvqMcZ7b5TMkpmkeXzMkfGXFBjtvN1N4ddTKFyqBmfdYYvTR9JHcSxxxFg1ByBisz2jeE2rxqLfA9srCpLNi2",
  "key3": "VDHod4g8n59XGZjXY5pTaBkWzGeuofT6PtGANT39hAdxM7kfe4xY3BCAQM7FdpCYUDD9GuhJoDKdh82hFq65qr4",
  "key4": "2p6eHUmFd8x6T2PCqSybiFfu6W16FzGuwk8JfsxABPN8mMV7nMTXm7aX38HASnWByDSgixYvQjYfFD7JHPGPmXaF",
  "key5": "5Xe3Rspb45Bf3R4iZKohHjH2cHfXyB9BZ1yYamFBiAyFH5gNEJ9VmPyQXKESFTXNuZ5wyB817SqaFVM9nfjZJe7h",
  "key6": "3zsuucGGmPUtuc3Y2djn4ryKYuJnKuuPa5waPrwtFkAxhD6dA7Db4GDJx6FTuYf31SNSaMzfBBsDx2QUrT6rMLRQ",
  "key7": "2krocqwqGnFiHDpk3JUPkFg2ck8nMDi4HRX5D9u3YJ32UVHtYut8v3jcgfPKThRfdzxxu5ez3B68EWVbZAH1NsnV",
  "key8": "5QTbGntRQMbs6nr5wecZNkV8aMwTkuRrC5ujvM35AJL4qHHvjrZwqkboLHhNrvzbdzdMCCBVCuXQn7EBN5Qypbxm",
  "key9": "4GkrDAcGWNGXCbpGVSKtNcLny7hGsKegvqbBYmb6agxg3xoozZDCfUFScz5wgaM2AQtigXdNuJme8kBisqvcXGYN",
  "key10": "4ACo2Px2fj2pbiekqHBRHyiHaWQovg1W1zMWSNXamjdMmN82g9ja2qh457SedyA1z2C9fSZoSJq6CrHv6kPC5uxD",
  "key11": "4XLk1rzCYxgsFNK3eSW7nTDD3wk2WzwwptfpxZwmCdtamZYQyPxARrRs7VGAuzc2K9YhzcXugHjtiNZBqHFfAadX",
  "key12": "5A2VwZhw1PptqYerW2qPjykm7YeTQPY3RNRDsYEkx8t512rp9HKiT6DAdmSHPEwHe9CoPrZkP3aoq8qVtg9vyDJ5",
  "key13": "5dsBNKgqgkzh2gqaEJDmFAiVsY8XWjPKXyK5v4AW2UjvUnxfmVfoD6LYGGMmht3HMPMZ5fKJmvpCKGpSvjbjJZEJ",
  "key14": "3d5aihNiz8FxScKc5zGfNxexDis5ddeErmcrazi5JGoFryEUFoD8poQxsw8t1gQeL7YKzsHZXazzJ5Ck2GxpENA2",
  "key15": "26neyNiRrDmb9m2KuDwXd48dGuECd7pgGmRCJTRgZRgm9ua1WXmL2sTh59XtVmmrSbHNjpdHhKiWT3yXhiig62yi",
  "key16": "5SdHLaekEGE5177MYSGFdp9XwynhpAxueTmVHRmukjKvyhCFR8BuX8NRztAeRJJjMbPz3H2UZgC1hFsQN292tqxa",
  "key17": "2tZLxuWgwAqpSGCAtUjsTn9aqVUGgNTKTFw6jpB2gM5nLDwyaq4vxySFWcrx3Arog1eZ2dLcmcswF5xkHm7Ebyed",
  "key18": "GhKgv7BKsdLG3Si6u7pTVznCvBJGV7BHT7ApAskfT6u9mHvMX1JYnsY9q4zgJDUxV6Pkj7nMWbS62z3HxBuw93Q",
  "key19": "rMj8qvJZ5J8haqZp6RwiHCSTBb186FX8L7pq2KjrQciWkceKGaRhhhFJDHow1Vk6UHJ8SPG1dwFCPYUTGWTextb",
  "key20": "4LknLAAx8V6AZj2PvydMiu7jJEvLrCPRbnQgaetiLgy4FHm1Hdy2jbFmyWZQ4agdBMM4WiVnZbHANT8MjkPZgKLL",
  "key21": "5oVzoDmrhtZ2xc5VnnGNNUC2D3NMHykfyp7s6ADPBHeoNQLn6mZqxRu2btkZy2ZRDZMT9BvftFP83dQKfJjUbNjD",
  "key22": "5XqBoKeHqED6DEuowHLxvoc2izC57gjfx8W89P3SjtBDiB7RFUnpUt1CJjqhYdzUiSgBPKRExx6dnT6Acd9ceJE1",
  "key23": "3yrYVFRnEQ1J7dfVAYAyQGTRQBqSuCbcQijvk5itExBXyKtCBJhUvM3BFJtc2MVVrmYHXM1Y2ra1ZTMxEn28sgCr",
  "key24": "5rHt5CP77hmPZvB6eREWcjkXtyxZYDV9BZt5nk5YbbWh6LvkQHHofvDUxmW1WqMHKUkWDQ5sAUrrjk1cq5QPuSJq",
  "key25": "5oMFuSF7NQCmjsf8ek3KqbA7dewq6rc3WfKRsq33naFVXGBziDJ9mqnTfBgvJyAtqeef9tZeHq15USgHi4Srtf3c",
  "key26": "5tM6steSBQzuEw8DsTeiwSqkojkxTrwYYGjnESdHaw5qohW7X3WSKuETnH7JyYYTp8MYH7oPXVzn7rkzZvGo1kas",
  "key27": "2VF3XBzUSAGzX2XmGG7kXgJ9hFZDZyVbF6EgmF2cTQAy1Y2p5NLUFiKkNtKj5joNxbRL3HpSMwuXkjm5rUaBYayY",
  "key28": "4ehKpjKxbgvPwwAPnSQ24SWpsTWt7GahfhAk1EDErqMs4Mif5evbsfzytPMTDk4SF4nV89DFjJLZZ5hdfSzEEsJt",
  "key29": "Q7W2gwX1YQ43P9scyYEk2tZwE9RHhAZkrmr2hkGb57kR9e5q4NXqYYMZCxMdc8Cbya9XsxmMRvWVneVC3fwiBN5",
  "key30": "4gW5pimdFqNYjXLZbPiJ1yfKV9Wftyr2SjefEWNbUZZRhYJGBvMMjGoZsVkZcwe7nzHvAV2atk537xQg6yA4ru1A",
  "key31": "3kTCNTqFNYPNmsyvFKJyqnAAc46s58xCvSWj3a6eY7FEkarreEBntvH5KmXr5hTZLh1PXzKfFC8ijifuBnYCzgR4",
  "key32": "E6MQpWPDUprCTLephHsCZcUUke1Vqiv4yveHjmAZ4CDeJ8a28NBaMciVswX5QZ8PychK4T6rmLcr9nswC9LpUR7"
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
