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
    "2mqjdUnDdn4qEyt79eaisGvRZemjPp3v9CjzFdFtoK9cSGEDMQDY1yDioQAdpJTHLPzaqXbMfeg1hLWfoEPhEGb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fw6rRKDBqWJCWBNzduYG9E4EbhHghTiwnQM438nwMoRbM2at3wbDyMHQxuTvsxUt7xWuGeMfHN2a6F9dLSykNhH",
  "key1": "3gH4hPX3f6LYhUVVrf111Q8g3R2bYeyeneJBSVGxDKGkZLvVymVN55Hy3frR3Gt8jmCHtnS6w3WRFCSR9iU63w5c",
  "key2": "2iGFC6uEXaBFxyXX2AoZ36VJjhCxhFxrhPGabgtcxp1QmwevCnLdRkv1b668xPvf1XNiC7FaTaqPaGWhaoRQkUxr",
  "key3": "5fPLW5Y9APvs48kQoewhdrVmp9ZdehmNgjqY8ZrPCxX3HAKJm5t6ATxQMnWrFc6563SyhPigG1RiVEenAtM8FWrx",
  "key4": "2o63tnLtsxhxsH15jdQhrhT4L2LN1qniZwdhvESvMDKoDrRfwBg937ueEpqJLVYmChEuhXhGoBWXVrGQopcgJQFM",
  "key5": "av2GMyqS9bTyYfm9fBWiP44BfBvGWL9bEMM4SGJeeWxoDARbbjLzGD8NWH4ujHej98kdgmK8V5ATqrMuJhRTzQ9",
  "key6": "2YSTXGF1ZZbgdWUA4PFARiyU9Rw7gtnantqNyP8etX8BQSzD6qNVseJ8JP91Z8ggfPb8Di2Sh5C8p6y7e2uS9pVe",
  "key7": "WDEGSRroUAwE8yWntfYa3D6b9fRqcSsbEtxn6GzjU9vwqMcqECjhk9X425FT9e2od6Jd46tfUG8qXGeT7x9VCH2",
  "key8": "38iyDsKFUH7XB1eFrgENuNp6KJeBdHnQRhh9Q6rPMuqG6kihm1mnJZ55KY5zbR7nsZuCq1EbyDooHf5NE41KrHi1",
  "key9": "Yri6LW1EYnpQW1uHNSpxkqnR1ckf4h2CBMvn78bpzbFsYobbsaNkf9dDxVzPPaNYc3awe7Vq9mwCpy6agRYFnKy",
  "key10": "4nbMATmQ2J284ufWgyhn8Bq8TDqo3ZBECWQyG5xCZEmPHQbXDgAgxiCLinSKvey3kpScxLdycqurMewbpaJiB8GA",
  "key11": "2HRZCzYeygob3V64mM2ZhqdovHkR66WMiosZWqvyeS5yLRvpRz6zz8Y9jjXom4BZAvj9SxB4wfvfc895qens9tLG",
  "key12": "4a1ykCs2tQmRyvgSG7mcjry8DiDSa3rPXp2g5FrNXkdcDzz4jshgji1wS8a6zfd3ECzrc7Q2VmJpVKciFMoW8CEP",
  "key13": "25mhaYz33rX4YPZv2C5WaME4nX23SX2kP8xvxgvkxdWxkC7ERJ3TVQUrw27QQ3SmtpkTKGq6LB9XtEEkDQVdXg8p",
  "key14": "58CEUdvD1MhSBHN1kmEGC9Mso7catVm1f8CwDoK6njFz2CS1KYcR9Fj6kVKFW5NvSrxYx1nxrW6k4BboJDHmKGQ5",
  "key15": "2D4Cj2cSBk61dLsUEBmKM3RT7QzerPUPkciUH9FWGAfDjwSuqRQJDKdsyLBEnYF2G4mMKforgw4UNL7Ygnk1KKpL",
  "key16": "5yNVePwBGccPAugR3zDnnqrddVFRp4gEK3HC3dW1qneXjJkubMrMyuQDnY2s1MgiMs8uefmPRgdX9mVRqTDezm72",
  "key17": "3h7HhaSnqc4ATnnpcAn6x8AgSohKoWNZ18umsahqxzczDD1FoJ1PyEKkJGxNZxGhqq3Z4GD22DKwMVCYKkQMxxWh",
  "key18": "jj1bCmo63vYBTgJN1HWhfUdGXHgSmx77C1fLNvPFBQKTtXkEZhdpi5onyaeVQi6eMzGt47rtf6s1CnrL6FJKBAL",
  "key19": "4s42tk6AfRf9833wAfyefVnizHh5NhwhfKhFqWdojDzdaDe6trca749y4mCumDeXvVyQFiqCUMS5t4kZ5nz4A4rz",
  "key20": "PhxJCsjKJPNxEEnjAZj9qp62Mqx2vtnScu2jrzKJ5wBreZz4b2jZE735AyR1bwFWBeY5oJ45kDWHTLW1GMf11ZL",
  "key21": "jbbE1dgk6Rq92EdoMxvj8btNrUPzSb4wn4Jtn7idG7y9oWdrbL7EMzFBkmtBkNqGUu8ar5SVUzdCBG2gp7BYSYj",
  "key22": "34r1W5xijWyk2wHhLKZSL7trrSn8FNoBcSXocnci8qxShyRJftTgd9YVsNd4cAQxNW3crQeaBa7ZeiJhYEHFtgwV",
  "key23": "4yBxUMQquRJ1cuSC3Jo9PP1qyu2Ea98hGhsUgnpKx377c4xP9rzrwqGiUbVpq3f7LjA2bLDFfiTfM1wRfdiQ4frf",
  "key24": "2rjgqTAQfErZ1He6iTKhKENfbsp3nNTF67tXtyBtkvuTjUmZGrBMu3bJrTKRR1R14npZYZWPbvPF4zz7sc6xcfgj",
  "key25": "2iaCnFtcip7pGP4i1yQiCN1VpEep355mmexfPob3McxHdM3x1gN1Xo1ijJkDFb28U2LSvcERTHpStgUkD5wNYkf8",
  "key26": "3pw5i12r7q6NunSNuAgybnGQ3QuEipoJxoL7yRXt81bdkfEYbm81pStKAeLm5PviBe7HyeDuKQ3Qa3cPZW1BK6Lc",
  "key27": "5hVo8ejir94vD6fs2M3aJfieK1BdYHwXkZ6zUJoPXi98aExi47baFn4KmGyTR9R7pix3oNoS6dsFkvnu1BtPGDUh",
  "key28": "vnYR5jA8NarroH1LVap4tqKRt7RzmHdEsD23FgoJVnpFvAgcukrAWnsmDr9iWbWCYFR5dmeJBqfb53Prkuqbag8",
  "key29": "KnZfMqvjj5xakEroGLXoxd4e5uYzFypXsRPfpQaEytikCtHB5GmyPfqrk9emUZsUUwNfYMsY6zeky6DBiW8QTaB",
  "key30": "2CZjppGDg7sTg9o6GowBXTrkJd7kUqhnuiDqr3DWPzGHDRxKkrSwAoZrRXTrgSQnU1zTqV5rENxTLP9MhHZUUxxD",
  "key31": "3vAXxSSuu7E1oxWWJkkQag6RYXVaamag4w8TqksfXxH1nA9VD3EbuQKcMhSZJrUNqrM8HXfUPPYRNQDn7SVyN7QS",
  "key32": "3WWpW4vLN8xRwVbta6aQ29kGLBQWyPEepSowy6xDhU9D6nZfCvH7nRihHiqeUgkceU7aZxvx5VkwRo453fwHbPaq",
  "key33": "4MXM6fNSBu83aQRQX3YbuQMjwvgoGzBZYdZWMRPxiyaLjWtKmQaeBBNQrj1wN7V5DD3BDafE4LkfKG6wCKyJQ3nS",
  "key34": "5BVBwyEgotfBFQUQzueyMQpQ3cQvXhQVFJ1PGCvLhsLZs4LSScG9PpL7zXNb8YX2ALDL3JzHzuzkKgDaxFFjz62C",
  "key35": "3ndRvoFsL9LpYHm79FvFtPyxcQaSqUceDQmsvaUJ7rik3Ecnv4RoPTE8SFXV6sESv1iwk7WoLyrpRiR9GZ4Ct9UP",
  "key36": "3gxNXbJyuq1kMyfq6E7q2vxvHVrmfnvA4ivDrYDtSJQYbodCX4AzQNUSbz1vARZ9rxK1wiMMkv4q4MqTCjrjem99",
  "key37": "2jU3Yj673RqCugz7ZBCqNsGSvvuAwbyiJ9d39nbQQHGXF9V38MBK1PT3P4abVuNgtYcLnxpbFXHGjc3QF1uLCsAR"
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
