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
    "vNdPb41oKkovGwdeDvWMWwVCxwQypD3UApempm5P9pkq8XTXadFriEUtg54Yq4NPxP2JeWFEbjwts8jMnefVRHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jy6TM6RHo5AnqBctHwqSxzBPvGciWKg23WRa1D3pDvTK1cDDUsQnNQoE3rFVKnT8reXY76GWKNJAGdHTD9kHHFw",
  "key1": "Jva7S9wiVEKkV4ajnzUr1aTkQUYTX2DkWD3YH6RfF5cjT8u6Efryz2dA2No1uoXAXmZpdhFAmeD2VVV3pD7ienv",
  "key2": "9skoF2NZhF9yw3us74uhDzwRujM5eD142cesxdwpP2hLext4nShMpdfNfsHrBFdXAressJXyYQHqYCNoJDPM9Fv",
  "key3": "5qC1JWr4PS7gRj3pTXfAD2erKv535gqL2ZAJ4BgN2rRU9uyaPp4Kt8FeAcKg3YjWavLJJWFc7u7M1wPy3XDqhyZe",
  "key4": "4xbhYpwa4NstT5k6mk2E6x61GE15UHjUDpMAs12Q3iNCuUJK42mGM1LkxHHnuveL11AxpFaBS3GacTCCVPQVpdzd",
  "key5": "NbxvagGENPeNfHWu1oTZ9DATgfrDBXhmuWT8dgS2yHNRvgekLTd5fM5dqMBMC9VTa3pDXHEXUNutLN8nYSY52ge",
  "key6": "2KY4SLiw3WSi5G3WYvmkDAxfVf9NWKnawDweqnxFWWbNoAG6zmeAKdPkcXgMNNh1vY3SXw29sFbsFuw32cVjDNCD",
  "key7": "wJhqdoYUxHbYPxME4u4rKD2UQHzwEWfHaoTWZ9GPkXKBEr4s48hknvnQjYXosmwR4Yr9FywQSjAAC9YmMnxDCh4",
  "key8": "xmCP3bgfeV5VF8gxcgnRs6z7qHvNkTb4y8gjB3zLtkjNacziTZaKFyhJGuQ7tjJj5N7FJhwz7ZY23TU9ByV1CyC",
  "key9": "5YYAtMf6Z1dTyLjPu4EG5r4VoD46WqRakDh82sJneMPN72huCMrC885cmFWBd4GKqqPFbfsnLjtkqcXe1WcGNfm6",
  "key10": "5Q3Z6mGGNZWbc2FfNFCDMHZyvhaK4BXmjPXmpUpcf8cf3C2cPgTkBa5TYv9XUwZowsiw4qkEttWTWKpt3k2bVcV1",
  "key11": "5T98nFs9SK6dFJCzgVLxWtm8DCUmEiS7crnBrNyd24TfsYHzHnoPDX4QeVhxm67gMzT59VEdDQ5SQLxBxLbDd52m",
  "key12": "3AvQvg6RZkEG8YMTM67oEacS8ofWXWPpE5XE5iH3AuMdTqCeSc5xTyNyV5WJHWm9DkxeeqA3ieiLLphMhbZKU3pN",
  "key13": "2NbycLhTyQvLvSs6CN4VJzvGoTeeVfG3bfea6H83nnJ5VkwpqWvSGpEFLv4ZbtABMmfyiRy6GuSegxY78ywvPNW",
  "key14": "5ELEkjW9hv6kLePUzbzD7vj7oGSHLZYJyACR7TDvQxZqrE8rBRHYpFo1BVHvLJRtUCHHquFj8fwkd8niCBTUiW99",
  "key15": "64oU9LKuwJVL9yaydVtUEMywHZqJrmXkM5QnvhEQofoQUqhAvWaiAEvXgxXyjPa9f9t5nPC1PkvpjYMvc4wFDgVJ",
  "key16": "2FGn1rueZ6QH4zN96pMgRt1Zj944mQFzngLEiGFqrbmjn41g5xWSfxP43Z65iiXC9XQ3fJgDFLaZdeRDJkpUqEgA",
  "key17": "4dVkC1xUzAEtmVDEhPQ1QCmUqnmkqvfGHRxv2xZWkzWL57WG5s1eRY8AYRFufRnfjRrCNJP2FeEDG9gnAE8gx1P4",
  "key18": "42rHA3U41U2tViHS9zp3meZfxgixtJQoXCCtXKPua9pxDcuAiH8Hr4tz6xh7AZ4g5dyHSSoWA5uaghRxkyH6DGcP",
  "key19": "pnVUQ4VqBuiFjLfTWrRXRGmyQxGcGVmNMPc4eVfTrsx771M6hhYnveu1C4WbasWAipPGYBRGiZ3vCQurPiq87Gm",
  "key20": "2CR5n37VyPw1faHHyxP49WAhM3CDVexjZHignV26xADtBhe6h9Mmu226cFgWQBQY1sXYicTaQa2QGGaP8FHn2Pmo",
  "key21": "3HGLoQMqvFFzzmM52FGX3sKAgNMZSBPjCq6HyHAZzk7vi98vCUh1HWFPe8CfmA8qedqwfqYqtE9oq9s4zrU7k4wD",
  "key22": "2VBKxtZYCMpdu4B3yTyduJpa1kUHtYgAyRAydfuZj2suzDD6tiPHnn65NkB6ZS4siFVQ7LXi8Y1yVTsYbXam6EXj",
  "key23": "5XFQXrEp2C7UhpVUsKadyNcNjwo9AHyJin9WE3azSCKKgTr2zR5YnSWHovAxPkfmQZbBnVnqPpLX9nHCzszMgeNm",
  "key24": "eyNKLfvKix1pV3xmATKAXWF9FDQZPSpx5evkF7uPaB5m71VQbWapyeahPDzvGwJzUwHtpVSHcHaXCVGHgN7DLnU",
  "key25": "3siKomCgvMahtTJ3166eeVg36aih2XqnvMCab8JKkm97NXtiJCVtqkuw6pknZFN8dHUyFRYPF2tQx3YCAg3d3bKB",
  "key26": "2LiqmW962QjbNuHCadzc41XtJFagEPMkVhcZiyfZzdSVdyd4Q9MM1WMSEeiC4Y9U7JuJzZVVzbqcif4HnufXtGH",
  "key27": "4i8Me4fTgWrSWKn5BRha3fzqeo7jZY4hvAE3UL8U6Yr75QkZxQk6FmqjyszVQsCUAJso3jtUu4f6PTE25vZegsVb",
  "key28": "2qNdSw2f3cS7J2tR5tvjmnc5wdhdB97c1spJqZ1rwC4kfX98ApHnB8KkoDEN8LVdqGNDvRD7s76U1xJLAWvzJ6Kr",
  "key29": "337HavVyPL9svGkUErmR91NjGWwFXVri6cBBdq2vw151qJRHS5L6mpzTHxRPwR7dVYJGGK4fJTG5YVxrgTPBnvxf",
  "key30": "2UZrdgDMextoVyxvScWmXozYPvdfKFW8TNH4Pfgo3Dc8gKRUh3tZWWTiMkuvBEurhgX8uhSoEGnXDTMEe6fZXQzL",
  "key31": "ZHX5wDanYtajHnofVXxvpbdhm87QxhBJTunC2rmbWYhD3cBS42KXx7WcB3S1vhVVprijDDaYCyUPUDbXFkkgSLA",
  "key32": "2xZBTMmx4o9oEnF2cmLDiT9r4Exh8vVbFNV2HTAtpcb74rkLg9oLBcpQZbrir7wx4A2tUgGHZqmRZArWZZEEoxg7",
  "key33": "2aEMwuKU9mL6NefN7zWYcu2vM27tJWPgpKiv6cdeHAETxvTEVGHk8ugPuhKZhvzEVaBq37Baiwc3Nb4LQKhUq73h",
  "key34": "32Mq4sd5uQSKYMDm1hEtj3iXx8GWf3y5j2VV65jDJ3Z7wLmEEzrE9UA5i3HMHfsyqotDxR49hpiUEpVTG97fayvJ",
  "key35": "5t4xaRRbeUBKxd66XYd7guw2rTsv95e3MzgEZDpE71GjCcJhUrEQvVD2rqBUZvBDLBShdfSwFYvHu5gVfBzeLncw",
  "key36": "4ornXyHj9Ui3YHTfv7m3wCUuBkoLrZV3wB3PxyC4XNLTg92r6qLiNieAN3Qd1K9aXeuRZJCQK5gQinGNB3Lspa2L"
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
