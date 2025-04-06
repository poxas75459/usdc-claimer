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
    "4QfS8aZP2QhPyR5hAMFvRfqr62FD1GtGAhBZMCocZMg1CU7LqzdCYLnc28FPu2wUEkDfEtmx7og2WozmoLng9UBg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4unk77sEdHp7LfNVzu4gUsmNWmAcAbYEvgfjaCHsKaVVQQjKmv42gnK1ZsGfHHoeTsmppEiZzcwVq69eNfw7ukFS",
  "key1": "3h56iL3aFVQP77erQUAdMATvrV1V8RMnWXDkLnDWWrWD8edCBeE9LgviCVP3aEwkdHstnug3MnVTy7LaNuHrqrjR",
  "key2": "128oy1E8PLnvBVQ4XW3po43cAq57QCWtnE4rvnvBPgyJU8gfejXkwmQGdyrCppbo4t5EmMHJHZ9rMtYF8VEpyS1V",
  "key3": "3nnugWz8h7SaRau5NUb5bBbwmc9TQXJ5qSg1iAzX8CCeuwHFQhtMyeAgAWTvPZbsgKcFZmATaX5FK848AH1nKety",
  "key4": "2pmriwdmgWVkbiXLESjgnUeg4fnLs84hCzdy7fFrfCrTym3xB9cosBEFBqD2Y9nWyYbEEhqz2wNutvFXB3vgP6ha",
  "key5": "37M4dA8xdrosb3yJxBBYRjT2ryc1PUyDD2QJqXJnb8pkpfgH2gbu42rorcAeLge2V25suH8t8w2uG51UnQYXJCDC",
  "key6": "2zNdTpD4VsFeBT51H8yngB8xQUvRg7B9qcmtz2Pu6NLHyBRsaokdahS1LcGGaUYVPLU4ox6ee7PtQaynbrWVq77i",
  "key7": "5XXipjYCKkpJo7xozbYfGyG5141uz8VvkK3k5ZnwPFcjuRqjHqdcNp57PTVSBEShNfyXW6ziBr4An7GPN2pgwGPv",
  "key8": "2xQspiNYiquX2BqER6c5zqu7tzvCvkEsAqD5MbLjT9EVdQM2oWVkNGu67zbekTiGYwsGcYgkBXuwaQVg6yvxZCiZ",
  "key9": "32Y69wnGdH2uYnSeHM1VAmzFzrQ8tffLEM8jeUMQiG7M4NDLWtVEEHX59ZGdgALJ5dXvoF32xtWucevWWhxV9ryr",
  "key10": "3gT8JBx68Ms5E4EVmEuuoBqZAGTrE4Jgy2eJoMzGJCuAXWvVoeWaPwNuH135nVyJ2cGFk8REkaPLbdTpG3y3Ykof",
  "key11": "UBLDBd8suJKtRmzcF3Jk5VGMTucQR9pcc8eQ7rpSVRjKYc8594CodU3mrP5rHtcivRpFUaGPCVKWBLeCgjE1ChU",
  "key12": "5n7H2pYSq3ZSPPLKbjwscWT1MS5ZZw2WpREhgc49yGdHqAvovRRcw3YmoJ3ZHbkyLwvX9dgPTkyZYEpeUFnARY85",
  "key13": "2Q3t7VbWNP2JB4RtHs5pyRCwuvbrb8eHF7vUTrNCh75NufRKM4E1USH9ZTLyQdKsbkZAPAtS7MRSsoUumFfX7nif",
  "key14": "3ZaZX36XMcBCHejPT9VZgqj7XrqP1dpwiHNqxuA8QCJpNa8GkrPSqLaCh8LYmUp72jGvQLSRinAumXUwAopvHtaS",
  "key15": "3XUqaU7KVr327b3sUgsmQYMatB6sFwSvkRtaWUhcxFaCfpph4PrANSKDUH3RgXWcbutWa8HWroQscEYPgBaeSrSo",
  "key16": "DMXpnfn5kmEavXxPhAvSqTke9D5tXnamBwNRP3uqPcCfFN6UMUrfh9AcV4aR65d4Bj5eMUM552yCqPEKaY2xDnr",
  "key17": "3DXF3dLHKPnK57sKSxJ9tfbDfdM4D9SRyAsxoXhr8ALpLFsiN99oVkNi32C5bPmMNs3N5na5ypGqyGGsBmFCMpMA",
  "key18": "3moExgJx4W6PLhLGKyfTPRJ9cuZSu4QCc9U2dKarXnV5S4NWjHMVoG4T2Eff5kmZn99HFo5Frh8shFDFQ8PrRr7",
  "key19": "64D8WdNApJftLSW6gTwhQFWR5HCGUM7BBHB62hXqGVZvD82rYpmeaMX7stkRDic595bgYFfcCAqX4fQxF7wD8rpQ",
  "key20": "ug4UnSUbxkmWVsB31xjuyuvbDExirmighyMADNxdsDzFbpTXyeM6VYEYNV4gVTWJxRF6v6qx7dTMjEJsmCLiLK1",
  "key21": "5aTPykR8tK8zqmLTqekCaPYd2MWEumXdSwKiTb7EfxHUF25wBTrug3eS4P2142FB7P7UCZg2gZxcL1GVnfUCwQj2",
  "key22": "GvRiaS5oktVZ3LSfPXF73wyNvrjRJMEfnbwdH73QsobFqqcLoY6EoqNFffNiCjnLhoG9stHTbhPFXtrpAoARYjy",
  "key23": "5GdRinaAD9yw8FEGAwk18wxLedeNDc8RkHENbT9gCF8Gc2yiasViuq9xo2an2oPyyUCPaKoNBDGV22QznGArmSvH",
  "key24": "3AS1zo9heNDnZL2yJYeQ4RcMBXqkZEQXwrvybpPwvfwKrYxdgTs6R5b2YtSqJ5LHfjH2tVe5boCHsr184ncuGvYT",
  "key25": "31tU5cCqzgkHoi4LtRsbkeZnBBB9Z2DQPcTc833ZbW58qZ9mgZRt8szJBtL7KvURX9KChkr7MbtXwPrNVz258A8c",
  "key26": "3uPbppQX6fghG3wgyi5QRRtHPQw4Z898URUxznFS8n72mj7ZHhPXWaWr323TyHJw9KF7fmG5YVYzZhiudHcLMXpv",
  "key27": "61UX9RBHMwksQmahsuJDoemVMBJ3oEmioYckAByV7GPsTuS5KM7seqroUT6CheHi2ke5gqAZvA2uX2WUHKHdcrfV",
  "key28": "5nGRPYYYF5xFGrYRVPKfzFue1ByL5Pd1ZhLJd2B5D1YYwYLJesLgP3v55PBzeMAHrfCWCuCXM2CRpeo7AU3AQeSP",
  "key29": "p3QLHykR5jSSj3VwLzxrDmEic82bC16Hs5MyCup4MAvcHynFPDgLfbCNLrRknf16hjkKx5B2yv5d7WgggQiTJ2K",
  "key30": "4BHbfpXjDVk673jiVyrGgEAUM8SyqW32id1mxuFG2vHv3hdznchSGYcSbXB74frmXHHJVkqXMcHxQd3MiqmLq9hb",
  "key31": "2iR3g9QM1esCNHwxEdpFUBT4w2KFQZNmi9nB6VNJQLvFe4VsSgBbfjaNERnw31iewfEVLX86hqfAREXJjKp7Qciw",
  "key32": "3sBNSW36qoFYuKqwaPJdqezig7xRgRAf7NLQZJnhAaCxz3hatdJhpwnSkZpVQz8wmXw85UBCGd36iagaNa3zo4e7",
  "key33": "4tTBDQuvGyrT48rEf4GJnFUrcFMwDs8486mbv44WUPhc9pZLLFnnSiyPadwahuGR7J2xGaGPpWUjCThJD5YRfbCQ",
  "key34": "637E7cjAnrKUWYNzrG6DGRP3xENWmE9JX48NZAKCq6BQUCrYK9xN39PthnkWc2tVL1c95b8KqeGqsuLo3sfJ5Pd6",
  "key35": "5iD8XDDcCQcKQtZiQnCUWuX6uoirzk8UN45WsRGAZG6SnXxrZrnZfyDe9PVdamymcWuDbb3N7p3jzFPS8w7SKdDx",
  "key36": "4exCuX1rkUJWmMjtDNvDM8vR5rwQTrZwB3Qiz5CkyKs1ZDXu4W8tGWpbpukKd8bkz4qNhpdwMR5d5QTianKWdw4p",
  "key37": "czZvTtPUdBFqrZZ5mVdKLip5SaieoSSmTfWbX9ZapecBhpjsvgXkAeP4G1E9KLrkpduaPTTfexauN5bTSpSrzsi",
  "key38": "2RanXdEYEkMkjehN2GuvpmQsRm2Wq1oPPLcWjWopLkQq5v4ffxdrzVLnHDNzX2BkedRyAfHiU38nBb7fnjgbud4W",
  "key39": "3U8nS4xUyhcGW65ep9bz4yLWKyVL8boRg66zQUuvtUz7N5nN725VV6nrvSenEbVJ5TMgqyK2s6TN6dgmGtm198Bz",
  "key40": "294Qan39hN9WLTSuG8LP1NbEAKp6E3MerFhsP87rVio8Lwf8nv5Qf2soSnW5wDXXgm5BtGEBw5We9LDFgJbxHf1T",
  "key41": "5Yv7WR6dEeD6upNnq4ubsxgt2YDWEL1cqrfR7biAYZoKAT69mgHYR57kUyetAmMgXS2hJKbevMLENaQJEseJTqwZ"
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
