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
    "5n1fwTihyqjbq23D4mntCt6568ss7w1oSWUEPzW9xaCP4e1hdNE58rQbwE5we36trBNmPy24SR1iT8pyTHt5reU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i5wXxbnDkHC3JjAzhV85qLWWTGusKGxpJ9M25MvvsNX34CEGvLPbmLcYs8Y38R6KbMmo1vqpdGn4Uiz7GabJoQ3",
  "key1": "2MREWGRiEbXxRwXwsvA1et7MBYajgNjBzbBhfiWr78aMA7Gd5T2BSxoPMqk3KySFFZ2wo9f5obiL2mne1wFLn9cQ",
  "key2": "3ddH5mDzrNLprVFJQGKqujnGMBE14VNn6wGFh46fxZNXxbYb4Z1k4iVmqTnmhdyHvYtzHG8i5CQ43H6c1mKgG1fC",
  "key3": "5GJdeCQB8Gr4dSPTRSPHLVQ5QFWw23ovAAAx5TktkYfuLyZPu2cpf3RuKaSwxufmwhe6jPwsQMaFiEMXJsKnMA3a",
  "key4": "4d37sLeGV9fzpKanxqtVcAdG5pHC5KtnhV4ueWM9szCfaX65cophPTwrSxkoGvxVVeTtsYVAFyqRTSTWy1no5cYj",
  "key5": "fEB4TXHTYfvPnYyUmYyXXaUVy994kn9maTwaCd5Rn5nt5GCWzMrM1KBc4eXBEuTMU6635pAgMPMtE9MJA4a4qBE",
  "key6": "4M98pNAKM3bmfQQcb1nCLpJHrMXV5wYeJeHj943oQFbg2Ux6piaWw9ttkSuamFVwJnWXcgfxpcW5jc1wHNL8BUtH",
  "key7": "5fgPk9z6v54mrd16iPSsBSdxLq2soR3CpFyax2wWTA1LEXFbD5rFxPuahqNnRAChfmwnsoCztTWncE2mMwgHhHBp",
  "key8": "48PQqzoSEx8LoNeMB6WAvN9eDtaTFvJdB7V445sC1gqxhoYyfzqvmdwyFNqz7R5F5mogwhUkN9eBRGBAPwfLRbMA",
  "key9": "shs6HLUEMJ6Zyc59UJdUPF7EyagFSW2H5AXhdCctcykyfM5yDPDwu4bcVXb24gXffit5TwiQSatVyXe1y2vfAz1",
  "key10": "3RiF2zxUCj74wYDPGBVBEouKg98qNRhRvdiyKF8Mpj7wFms71ncgccGKHtvZTvr7LPXNvT4qjXQJguS3LMuVQABW",
  "key11": "5pKxnEtmh5T2QUpAyyNEcugoo79rdghC1NtJg5n8Cdv4vxETxiwLjNbodt6JkYpA3WMwdbVF7ZMh5vpCPTdEivV8",
  "key12": "2iuCVJxYiMuPaWaeGWrVM6bzpbFMf34ya1LBYNmXEkZ3fWj7MoXKwFjFUXotdZjVw4LubbEZYBDhcATU1QUhS59N",
  "key13": "ueK2EneNVahvSde8DwX2z8tuxRfQfi32QNecyAccqPh2WXfFS5g7wg9aet3YTXdwGdUTGSqvhaUD28176Gqvifu",
  "key14": "3opz1XkeaYn4YXBPCrFvHXkhp7oMNqyPtUAhHpUx3Z2WYmKiJtrmxEs1UdC4xSNppnPQW3QcwnjiSYjZqxvTZXKU",
  "key15": "4y15f4b1Y4eGvN7x2R8MmoDsTxcFg7YYXd8oZw9RwypBX7ZJDVzakBnjmV3Yw7qSfZBRNziHE7hNpmAcyGP2uRif",
  "key16": "3r4R47E4rzvpqm4TaedNgxhvN97XwDd8qQcegSuRSMkqM7JRg1tNLGeSjBEcz9wekLdZS5TYJFYBgmJcUPKbTvR7",
  "key17": "DR3JHRpN1VG2zDG4ifh5Ska1jDB2PNtFUBAAme5vHtQaBVGPXB2TiCwMB4K8jXz2hfHt9C78BgJ6ktSxPdaksBY",
  "key18": "5zteziLPst1L5jKBqijx22YarUiKD5qK3NrPD7Td79ePRwht5vgx1fn8FJdRupeQc56EPYUCVM46Lkoyv5vW2p7",
  "key19": "3QVF29fZqdn4SNqcwLM5Ppx2LjAiBwvEY6vSKcypJPzDFuLYitq22SHGShatdrzMyTmF45TjuD1UMqk7PAdiDPh2",
  "key20": "54t85FmXeqXqz1bGiYH22ZLALggwb4SCG4P2t8tZmL1u8XbvwhkfbUguCLJn56E3i1JtKpBZZpKGs68aJwBjhGEK",
  "key21": "3tfrK4Mk3BTYqJx5s7zYxkQ9dELm3zFoiKJBkN9yn15nR6RHcjdURHm52dBDq7YZXPyv6nYq4xH11eKrrNyfWT7d",
  "key22": "xtQNhYKjdWGPMFPNXbDQuKLDX7BwdGfYK4v35XoijvgA5wNj9mNGgNnfqTVURNXbMKNeksfexx6qn3rZegpXUDV",
  "key23": "2ioBg7ujnWSM8iXPExxqdoGWVKDUqVQQxgAyaRaobthHZ2L2qyDAtitbtaZvGQuNUg6r2bbaibxnX4Y2a1qSiq6S",
  "key24": "5vQVJLJSQAA7XGFmskxqV9XcNjpjuNcxdYQjEQGzZjKSQRmJZquK9X6cq39gfQtLK3ZeN7E22BQokprQnhKQDHpF",
  "key25": "4m4ehoznvv8XEdrrn5wTwTYUHTzgZpgi3eFWgU6hMGuLyCT9WFP54JXyx7rqe1BjyDC4XKrFMhh3kgDiXVqFq3A1",
  "key26": "9o79PXnSjp926URUtMkZML885fGk3nCCKe5YXezUmeAzA3X5PYdAXqWMaon6K22J5wCqNATk6atdxjZaf5YCRP4",
  "key27": "5GXS5XqJVa2bSiHMsCkZMATFv7AsJQnsJYZdiYjrD81Ac2Bytz4mkt3WytSk5s7ACLAxhKiwHHd1EK8UDcymSWJH",
  "key28": "5Hh7TGyLgcEVJ13wmxjHZM8KBHSamyn5H9VprFNnTkxBBxoncS4QwwCTwCEAXGAJ9Hy9dW8YfGks22tjikx65zDw",
  "key29": "2AryKdE9ySKfzNgBZ8fVCsGwBMbn5NNArY8HPbckhnRLnM139B3f9mRt6J17HXQ1yMBiziMwgPLPdXpa5gNRA3LU",
  "key30": "3eyim76XAbQryZwjkEAPU7vNJDgx2q7Sj9Z5yYpYppFTqPuxHkd5pArUmzhDwXkZFPYnco2giLhE3HCebdnnrZTD"
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
