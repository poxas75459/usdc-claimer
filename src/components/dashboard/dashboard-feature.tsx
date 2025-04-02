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
    "BbyWwyDodukiBVhATeWkPbRHc1jvYwjnD4XJDEPBg2VhV1hRsb7pHHf4A5Hv5xxfKABFEEqe9Jv3WThG4nuGpZ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i2hTSpKhrGz2n3bhZ9RadhAzp7hEYFCbeq15HyYxzEckdTQLLedv1VGQwzZ2VJVgVecPnjT4theU3X4iCmGDfHe",
  "key1": "3VTBnmYXaTykRUMWYKwDdvAsEny4wvdBw2zzq67hggHGfMriN6HhcfHe497BSQHe1cnrqfTFgDYMifrF6dd7GhCR",
  "key2": "nt1Mp9yp3xYNK22W11odNSWGttE1nK9zJn6FUKLHX8dVFYfbGWwToZ27CWPVWgmBX3x5fULPpQN7xWznc6iBNhe",
  "key3": "3jbrfT1khuCwzhWRfrXFh1QQXyK1utqAwGpSpJZgWJBN7iTbb2DuFDr2gwk6VfGubHCg4NzDGRrCBVrbzo3n1zWc",
  "key4": "2MZUTT6fzqfvrrXLKWQe18G2GB1pbZHevrut6N2DsnmM9u9dWxy1bf4rpskDbisp5b69BAz4CiUPcd6oMbYLcvu3",
  "key5": "3AKgVFc2bmzfFrzUBfu8QM97XMCwCK9GAMoL3A6fWueXXeN35NyuEn9CjwnWAgN92dMD4mreCZ8yP8VPBcHbxzHz",
  "key6": "64dbcgqZ7f6Xwx7LmMTzUpAjkjd7AnDrYKXQZvhhHHC7c2EPK5VYzWWqwT4e1UD1xMNZyfR8pMpXtCaRPNEpu21G",
  "key7": "642YLUBr3pRM8szPnX2e1CynhcKkerDsgqeMeRf7KNQnAk7BvAhy99B4WMdW5kuSwzd2x7w4djsDgZLjLCtKRBmZ",
  "key8": "4v6JvFFwxoXvr2pF3DgTvByfhRQfTPuh2vMXmSSog3Yy4Qcm9ctvAbGtpVLdhJKWXLkpD7dgQyiMU4BssxtNCqQ1",
  "key9": "3oBdtKvXZ66C26tXg5vXV1ShbrvNwc9e3sFEVvQDRVBMw33kARjjpwfxdwRTDtsSkXWrty1YgSU3pSBiFJjLL1jA",
  "key10": "4TkAfSbQrPsqpedWnvukHjgWTYA5eY5zjDQBhHDQ4sQECC2xDG8UV3oPeadrHBP4NRa3wvsYRdhQiS7aHKZQveFp",
  "key11": "5A9Vs1CkzyW7G6wNwpuKi53uzB4VRRV9X1RCRzQcfZoaupVaXGFkThYRjKvSjv9jP2gToxodM7919Q5bSrGhHX6E",
  "key12": "jC68vnPbuYPSxReDrqzWSLsEA91BCk9ufzzh7rVvadczmW67M1QXr398r7vWaeP2C8CMSJtHu8gTDHe7LC6o7gJ",
  "key13": "3NADxtvck6i1QB5GocQ12bpyUi2VrpcnJQbgDwDKZXrCVhvufeABfysn2TrBY9f5LrTaCJ52hzQKD6js9cw2nnQN",
  "key14": "2rvvBDuqtjXjpANWK9AYzRfq7wzVG19khL9fTVEoUJTBAgPhY8UXH73S8ujMusu5WKsH32EnC9qyNQKXMCajMbVG",
  "key15": "4MGygAbjJExfbWQCumorB4LhCbVRazgHJRd7Lizyx8BF2QNPvDWVyfJCRFYpzVJuXYcZfRe8bLsZtTbkqyXSnsFU",
  "key16": "4jFokiz3zwenCk6KDffEmVTtJfL5jJv6cWwS8txPDfFcCukTsRUStbGMEudXiVM7aotETQsW5wCeMm7xKAFpj7Uc",
  "key17": "2WtWpiKi9MkcmT2AZYaxpw9msPMjYjJCyCVmPMkfMMAawp9i41n9NuHgFsibbXxLYLRy68B1w9HQ2fW77P76WtyW",
  "key18": "4CYj7TnxDKFTV6u69zpyDRHn1pPXchkJLf8oqCXtCgbq7vQDqb5niyNxaXoZ1ubXFsqL8zdqJuEv6nPUcwcMHqVp",
  "key19": "2FVynN1gwTaL8r8YTy9vCvFDa6h24RhbndbwzGGz8jqdtzNmWj62JwUhUZ1RuMg1xpUZHqHo7vVcNFtogYEmZhfy",
  "key20": "8SpSN9RsToXsUa7DJgajdXEQZnY2U1kCzyFbgGwnjRdUEmccggJHcceExLWk6KVtkCaiEmoJ8VaWvg7JjTvkSnh",
  "key21": "5dNPpbgcuLAEdEnjRzseBwN3CDnQQ6KwpoiCiKJ7fCkrouLy4kL8kVMdHZBpnvE78zH3EgnmYWbh62MmV6ffrFu",
  "key22": "5ARPG7NFyVV33rC5V4Fivbvz5Xe7oH4SycFJwVpNp2z3CK4TErLa66MNP5HdDn2S7UtMq2giySBWNpa7yCC41Msr",
  "key23": "5AuXQoQxD2EdxWGGAUECMcBjBrR6r7KiWLb7vgJTcz3ghFRRBKPEgetXAuThiZD8RNFzEBXczumJH7PXty3fDPFw",
  "key24": "2VPi3fo1JfwDSnbN5jUZhH9XXwDH4rZTap1VnwJRTWGdakdJyiFiV4crceHaH8XSxtH3f8TXVLbMx4xJ6HR8mWCg",
  "key25": "5GU2oAHWgpMnHA32uKSKUsMioBTr3iwrPtQRpw9NRZNdxmpsYhdAUJsNRkEEm46PipgT2oxRMdggB348tkwWcicy",
  "key26": "5EmyCLyUbNmcfUpfwJQDpUhoCv6fgtwXpm945SjPXEDMKadvN2sc25vH6vZaUr91nTd5UyKP5Dmd9eQu2sRTuWvA",
  "key27": "5mhUG3Mrd4chQyWnFzBxbTHyUybMZzZzAQYpsx4r3zxt6ehVGHxkZ6xnt46PdpKHMpDqWDV5oNkYn4nLfKiGcXSe",
  "key28": "HnV2c4CZkvgUkToyj6abJUB46MsF9izeR3MKsf366yCmuby8XQHoCFZbFo2Yr1SxBYcAhvBgbcTAtAyNsBhbLsk",
  "key29": "5noZKC81kN3LKUc23pyGuFZTQVhJVzH6AEnqUQTnZTs1yD6ZufHkkqmkWue7bcYPV9FKcL1isuizxRQugHj7VuHo",
  "key30": "pRVwbPK87gHmKfEsRVW7zUoNSWz6Maqv8uytCtVWJcpu9hQE6kmhRFRNwWUFKxDfZraazTLQMMC4gxx9pcahuxm",
  "key31": "3WzAKfhEACwQa1a1vRmeU925YNNezmv1CFUVwNghCPkProwiH9aoU7DFKTCMvGmQUcJ8F2pwegaWtH4onDMp4mnE",
  "key32": "F4KDDVo5qnc9zbfMmeX6ProsH9sn6SeiiL8zmnfQm8GKJLWvxYN9D4z5rrMdq8LSAoqdDSVhuVheUmkNzDNGbV2",
  "key33": "3Getbqqtm9UoDDSf12CbND4oatfDXE2sQr1tvAbmKmsLAUpV3dm52HfW3eDp7k4Q57yKLSfoiqvDHhYToLFrPRUK",
  "key34": "fi1dgVaP3VpTVBJKw1g2g7ADFATWDjSFUVvhampY8CxBUDak1WY1KE5n1BZEGHSCeU5ue2udwtfr3eA2GA7NPmw",
  "key35": "2gLFzoUG6hPSRFYk8eexYrRF3wsXmP8w1KR1xnbJrA5m1s9wUrNw3aDHFRXAjLyqVghomNhDZYEfTo3ABznSKjVq",
  "key36": "5reCWmU1jsStAx7416W8ATqoNZETKdai7NSudp61kq5zMJn8LeZbRgofww36pwh4VPZbb2tNj4wxnRryafPp6ZCp",
  "key37": "64Ahv4crVJ3VfAohw5fcrwcWG6LXQbb35vfE3n5bhSo2azELpH6b9bRhcFaDC65vPLy8LpLUksjoHuBc2PfTLSkq",
  "key38": "fsYH2dX6yN9CyTuZsaova87vMCU21LiQLkjqYKEK28wCG2mHpbREjqegTux1zoVk5QqrjeYHBznBGqdDGUtFNsY",
  "key39": "4n9QMcN1p2waJ5rhEErov1HCvEDR7AKbiF3Lb1L6YjrFaCcQ8U3PjMEK4KqWZuBuXDiYYNotPi5SUnvjkhokB8bN",
  "key40": "5R2zeJ7vwa8Vn3q7FoQYXEKFe6s4gHYW7DGsHFqSej7WBxDaHHBcL7icRfZHaAevWPCgpbVPfWYCwNkCc1Ljs7W2",
  "key41": "3EAudDUbJxRtZF9gRjqH5bqGxCG9kHPfbc4D2Q2U2FKypzEWdhdZfEMejYzn1H68tcw5e46V1b1UqzEYC3G8s5fi",
  "key42": "5UF9dkNXStobPtLAiTfUWtyk9nJo7oauzHmbrKiCMSC3kPCsRaESd4GL4LJmEC993KDw4h7bNdKyGFmkKuDRNgKn"
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
