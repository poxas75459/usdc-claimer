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
    "2B6BGZ8Xx57NGdwUFdEh232r8F13EAxchhv9JrQCS2oz3uiH8RhkmPGZQRvi8MfEm5frj4kSFTTt7Se7EC32oTBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xHPWgxV8pSXeBWYUVhosLNXJHpWiaqpN2KwkRHcjGXu4ywWzXFvb5wxmJsMcP9YERiXiQNmCWdDc8fPDeBQq1tG",
  "key1": "dh3ikPep5SMozKwi91KRxELGHCzmj5dAzaBGhqL8MNPAH5GL8G5RC3d1UwYJUxNrB7Hwf5isDmTnkohDoQSQz4K",
  "key2": "53v7TtgAaCiyZEX5SgWYxLpH3miafHfdc2PaynBw9aXA4KBxnRhzRgnCdVbkvyjDb12J4cRuFDPuZKSZg3sxSn3d",
  "key3": "2NVCZaXE4biGzDaatWUtRhxRL3u7Qqeg2hondf93ZstefDZwUVRjRSzSRhVHVgRW6sq3Dz4aGttrSMk5HEm84xTJ",
  "key4": "3Ndrdt2B4wvQTsixk19Yri9Zxb3ae1Qf83F69JbTUyXjfXtmNvn1tNq4Lrk8bSiX15HmqrmdHbUx6LiCCodTFQoV",
  "key5": "5b18m2sZxP9GkEhcrhaE6dNhj8TTbfDeKRoee75GZQWjjVXfaGKb77LsDSajR5bthbicx1TzMQHKaN1DgLiyXhM1",
  "key6": "2kF3NBrUqKz6Q7D5teVqS9vmpSzqqFaJ17LGQ8tP4fJz75cxZAnPByTYDuH61tnWxRSeFtN9pnqiETZHVZkng3ZJ",
  "key7": "2eyrKSEK9xqiuhZF5td4FJ5TmK3evNfRysWgvPbDZbyPtFKTinUdQJYtmcMY9ySoh8EoQYK8PPy3cKjtqbusUnzN",
  "key8": "mMccRt34zLwDjGnARTAPoaCKAeBTZsL4jhKmtoFM2oprRU5ogYbiBp7a5RAdqY7NDLKMsTfhr7SY5MQpRh5KxNQ",
  "key9": "2WsbaGNaVCDreFqkGfbg7e9Qz1NkNK6GLqVdmqRYDXywpetqtDfPmVWq4M6bD75KQMAWfsGADHDPRBjgz7iaKPCz",
  "key10": "kXDw6816SBwXApTSAQqm6oL84Zjeng6FM8ywP9zw5VdZSWtqYrdFZpWJp7vMjQJrWBv7Rg7r8ozACBHe2F1FXMM",
  "key11": "4MY2yeeARKPx5SMXdsChiZzbm8rKR3wGjrH9zauAMBGXVzF7hG2Q9B5hcWtPvHSWvGpctsUojCQvkvo2MPMkZ6uZ",
  "key12": "4X4XZm5hf4conLJQTZrdvzNnJpyGVMyiTJwjQstohr4jiKLXm33UrKyCK9QcF9kbW2hRBni4EotQCiW88cS3FWQ",
  "key13": "2JzM7TgN9r9SXr4AL79399UMNdLiUhLRtrKhkBXidD3RPsBszoo3VjAkHpHZNwdw3jFJqb62LrR9acMNbi6QTX4r",
  "key14": "pok1x2eomaPnfzXY5AzjZwMT83LW7vhHDA2R9psu1tNgkWzGHrcdp8MKWJsaaL2eGN29CEvDQB8XwuYdfxJQYJN",
  "key15": "2dwxyauRrgACyzFZDf27wD7LGzshc9EUqhwgaLceMFVfRHv6dBE7ia3jT3yhxhBq8TejYH2hCZqr5HowroH2e2Fs",
  "key16": "5gojPQXjuZJeBj3ibXMPyCD7mj6gQEovoezcefcyeRhCHjnpVeMWrJhUj8JmVW3aR2jzEg1NYCmgG21sgD9PjnXc",
  "key17": "2usgjLA2E2EydkoNb6PyPSYS5i8HW2i93Zhy5mygjq5aQAkyfaRcuynEGrwKZcxx9KjKFjduxwXcgViWNQHzczoC",
  "key18": "2haN3tbTRNL4vX8VdTZ1JwxThaDbT8BPEaYYvumDzV696WsFUsjYVr8Wb9bUeC6YXv23nmwutV9KTCL1XxGQfKyG",
  "key19": "2FDydtxDoHqjp48hEkdRs4ZTDzYWvm81E9QHJK1L2X4eQLGRoVFpyWxiXgjTjHc4DDqaFjr6Nm8gjSSXs6ghDzRg",
  "key20": "62pLhZwvwnUrE3X5FuhyqXY7xQ95MWvRkqPZAs3msQgVrZVdAyX5Wkm9h4ETELYLp3Hntiyb75Exf6VMCWTDDnLe",
  "key21": "2MrTTwWmCfBdYstRDHyGX5z7LfG6iL25MLtBBtpa7dLhJ9GvkgYub8EnA6a7PqFjt95DFbrL5QT811CTSu66PHLv",
  "key22": "4HCsMdZK5Wof6D6o7mpKiMNwhqjcwGcf5dz3DcaqNFaxpZDXLDqzZztmW1Jjdj9fw63LLJ9x2bZyh4oafbisuy2",
  "key23": "Zw2UQ1xZAPgMsHjASqPZ3A9GWzB1zyfmXnJK4vL4h1HCcCmsnP5rVsErW6KbGmtD3bmcvtiFURBiBoQ8E9LBynA",
  "key24": "Tgr6DyjBQ9gc8gqbDMuR2BsGyK6pPqj1PdWrTfrUnvg5hg4my3ajVkLZAfwwuNCNM1GVRACzcwwLxyeQBczGWJS",
  "key25": "4jydZ7eXmpWAt5DMk2cPW8QVsfT7P9Kvx9DJAzsHpYP52mZ9Qh6Mvx1igu7vPgXEdDXmujfXqse72LhEczjBE1FT",
  "key26": "4w8Y8apVjd2iytWjFZQpg66gR3YWBF3AHRhh2sYpnENWPmv4hwi7PP3hHWFW3uvYaSD3FQB1vVmSNYimuv1zgxUg",
  "key27": "4AWrfb49wkTdVPX1cVaQBEDDmfUrjSR4nf44x8ZeFn8CRdsqsCkSwzoXsZBxskW9grocs9fgvPgfiPnzuDcL7t8o",
  "key28": "2XT3PJCdGVJqDqZ2oyEyTp8bbErMEUhj94bEBt1ZoXTwrWcds2HjapZ5WDGSmKrKF6QpARCdCa6oP7HQxFjQ7kyU",
  "key29": "2uu8NyHs7i5wyWBPMDLHfrHkpnZ7wy6hNRHv1mP6Jo5YyNH577eQvgnDkc91FWprMynsdt9KPUpLjUxW2egkTLQS",
  "key30": "31kLbh2peszUqxcZZkZenqidF31rjcdMPJFj12MBTZwqt7firevcKAr2SZzEMkcfu8d13fHfmjyNhavw1Rif28Le",
  "key31": "5dGKUZfcPPAUiS4NzM6TF1T8QveM43bknpCQd1bsdztXc5Ma25mo37XPRfRJnMtBhNPMxGgBhweuw9P7M7Rd7DNw",
  "key32": "2muTwW534gGmzKdNxnKwBMxpKJnTseXB842zqme5cyqptFMbsbiBuPMjDLLDgyiqWHeFRViYxFwhrVLLQjwFhACD",
  "key33": "4k7eFhPb7eVBUauY3etyJgfhKheMaYpWAr92mvip2oCUBEZN1nyRLFDpbSyDy8ykY8VYe4Lvxr1rrQ72E76LFfKX",
  "key34": "YbteihFG8P4bSjKNvzXhV6pt12TmTWiVPyCBY3sHYEJpfJnHS21VevoRwb4VX4trTDsFNJfEYdpBoCyfBmwuMkj",
  "key35": "5a7wRsPzBeoH3TdXktXzkPZxhMPvsW1LBzrSsTHZMpS8RfoXJsEMfZXCKaQAgJ9ofVP4jaHPRLsGX8miBp7FYYnn",
  "key36": "EhjGLhAkmCPbhiAgoa2R5Eze52DF2ttD9jpUXNwfEbTpqa7GEuom6QDNaQjXysy2isiCfoKn6PAWrB9QtUiwgWb",
  "key37": "UfeN9w9GG3M8acspAk6SGrNUBttHdYsmC5h57aBfqzAbu7AEf7kfHzYVALy9thSseKF5TCABLBesWREsie2JcJC",
  "key38": "4dhtgCqKBgxb8qqYLdRC4TjFxuXJH2WYdrbYWLqP2byBVBVh1TymCZZU8YBj7pirSjVxfB1SzquzzLdBEF1zpksY",
  "key39": "2uqmxLHAK2KcSZMwfwi9fMARAbY9o72NCYfhanmK8Q8fetKcjdL79YFSY3QXZbM6vdjySet3eAMNHhN1TamedoAY",
  "key40": "K8qkubSWpS3qU6NXNcFXCS5CeGhN8XkDocrERfeFeCnUL1GNrxV9NSKakvVZaVPRvkExZWjLqQQVfAD8QMpUrVJ",
  "key41": "2Ukx4etfHoyx9DDyZxFDKS7KHYBDGZPhAfHPUZ69mAPoq6uVZLqPsiwRGf7K8KRpBtndd5t3EivP2iNveup3f72C",
  "key42": "2pG6kCkNaaRtpxUDGkRdYmRXTFiy1iXuhzMAefgKHBgaSEyGfYL3zMkP8LoZNVK92KyAi2B9fNgMwVDKvP1SxxYx",
  "key43": "4Z8r1AUEzQxFvUFjraACyT9j2AbGcrtaHRsTrJT2RvBUkzHDm8a8JXQ58cKkLYvY2g1ZrgWKq5ndqCgPaDRVvZ3s"
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
