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
    "2Gp1nX15VkFqfttpa4nJ4X87FBGymwNHfqzvaQ5zMS5ZSd6YFBGEKwnsnv6jNLAUNyJEMcb5vgHNrYhg8FrcHcWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KPFMm2pEBYJnpymqur3EsSgmpN1XE1NeijH6vjuuTmBXx8MRAJTCJ1ANCEyWb1PKVvFb3b1y255CAvWfMPve1K",
  "key1": "5YRTugHEKdscAFDkCCj5QtLFq1EKo5bwowtGRfkyLNPxUw5eP8B2xBZ1azDqpoyQc2J7o3jRztRwKSSsST2XYYG9",
  "key2": "TyLU6bUNoMoV4pkqKDmiyfN1Wb3832P7penaDAk71oPdJPXcHKgZdwoC2VxrEa213uR7Vg1ba9ALrxnnSSjd1gX",
  "key3": "3THN9F2tSdVvUCj5uohbQ7synZ7UBUoaLYWvz5Knn7gxbB3Xc8czJfHjbgUhk76yvp7aqCU5xpUw24bCY9efiNu9",
  "key4": "QnuH921U4wJ1hd6omFsEVeW7mrFtedXsa5wo4XVC8jqUcoZiEXN8EMVLQLysbRescaVxqCLU4Xwey4Vg75BSa7e",
  "key5": "3NFjfSZRZNzEboCLohz7eNM5gaeRw6SJkBAqhf2YRKLQpEG5UPqtkcEpTHo16QYCGUSek52MwfQGXSbNYpXVG4ak",
  "key6": "4p6bJMw9czUvGS7RpoBhENfDT7j6ZSvGZVsuFK3cWdpdHeCm5g2aVSSJKSSGeH5Zy6FW4H2Bp8CWHDXmAq4zxT8d",
  "key7": "2GDwcuBgt1PEMjyyExTwkpmd7NWu4Zj4H5DRygbmugc1LLure64D3Q3WQE4feHJPYhUhLP4DAVPckvJVgwZM12ac",
  "key8": "53WxtBhDtH4AuRrPhAQyETcuG4CJ7hsfS3wcCUhrums5ZwFHf7TsPkxfXpVLWq3xQQUCQDfMEFxgFhjfdWrGgsa4",
  "key9": "38jPHE1VZqHBWZWs8NSjcoU65RCSTXLHsQ19y4f2H6PY9JkZqMSt9xaTqnRnq9d347nEMmBEpGg17g8HYePj6Y3V",
  "key10": "4v72a3wCaocQY2FjBLYAcWQF9XiMDSLCPbTBBU4yYBp67Gt958CpHAzyUqjkXcU77EBcJxN54dUQj8JiXPDJTcVc",
  "key11": "3AnW4KV4b4dfvV3Uq2a1wKotn8vip9F9FuMC9wzeFzgGPRaRetNN2D1DduEddCVc5PFCd51Mhao8XiRRKCErGURm",
  "key12": "5QRUBmGhBEJpP6nbCm9UTAJLrtYqApbTTKkR3udShRC6sWNWNndKxmf54ZLs5zJ1bYcSqAvDx73VoENV8EHs8cik",
  "key13": "L6GTh1VXzohpQLgjK3pwzLHqVt2KbCgzq1cZsEytEVwUhhQApMApciyfw4Hr4MAS1gEY2cvoxzaeiwBVBjwCiwd",
  "key14": "5op1Cj4D2Jfcewt7ShcKkwd4CgmuUPuGoVtcxX8Z4giDgnpLvLZ4u4NFNpwbwccmvUB6kNmWHM43svjjnuoTuDpN",
  "key15": "2op2NnzVnPwnnE6Er3JXhTNyBW294FEar2YffB6X77MZTETznh8DYZ2XUfHrC4fJnaZAsYLpKCTSp3Na64tZnrPo",
  "key16": "5xRhLebzHWFVoNf2EZ81tA5JzdWDFSyuXcQzQNtTpYGK42rd3Zwjs88URny3jExAramYvftvkRcuZkZDHzi7HmiS",
  "key17": "2jFoSgzPLnQ9LR8u6sP27EGiDcKu4Xxyc8QiTVoxXV2dDNx2qMkpywuFX3xY84c26t9AeBwvgg42bEEpsesr1mFR",
  "key18": "ga7KSo2syeQ7Xn6z2BVa3sEsYBSqAqnBkbVWvi5fKYNnW8J8HFpKxXqE35Yb7smDYMNtc8uiyFUsMWhY2mQEPaT",
  "key19": "4VsUNkjM8YXVZeKzgPLrQ2mScVBYJwuZESGLWBRc6UstFsqrRCUcQkPhTqxnQZj6X3wGYdsm45oQkvzhumwwuVk6",
  "key20": "58X922sdfriWt1YbK8F9LRSB5NLViGrtbcpc9hgbpcAF6hiPaHxEgMw8BciNYM67uCjKf75ktddRPMWCiKpoNG1Q",
  "key21": "3n6zXCamEb9xY9sokESRknChHjtcNyC48una4js3V6DmKZM7deLCE4Y6ZnvvSGSAjDJfPRZ5B6SefbRggZy2a7oZ",
  "key22": "3po6bbxUm1dEM9zrRS1aFw8ZmrNwaVeQaKEvMnMKcaL8ntmPBP6XEU9gLL8pchWUbNi5xJTrM4KrREXmMub9Y8Li",
  "key23": "gN3QGcADJX8YhoxAvNgQjdJWPUhr5amQEnfCT9vb23B6gfyVCoqXBDzaZdVyqE7CFUMEDgX2Hkk1SA7SX8wJ1FY",
  "key24": "54VfxNYSpdYxcYcVgfF3Y8d3WGhRLEnxhTXkg91TNQyxf4ZZdwPZZ5La8zgyZJXDRWCK4mgkaoSQ1JfPYHMN1UXE",
  "key25": "1pJjRpvCeAErv6BhiaSYeVwXKx2uVNNFG5PBJXLvP13XVvaUTE4VyPcrgRDARDftFqbBWaDJUW6nDWkisc85o4h",
  "key26": "coYKoB5ot83rpBw3Dtw8TxE7xynDvSNhk2Jq6TFmCsPVNE4btGTHTuvJ8nYtaYDJ8YKUR4XGojwG8Y7bqaqWzs9",
  "key27": "14E7ak77EQJDrsWrRUupXZN5P3a2cN1bkytMUwQQY76hbM2Mn7br3k9gPkEkvNEphcyWdfUbrENDWLCrVNVh47h",
  "key28": "5ntRFtmEngFgi4y2dzsHqSMWQ7Cz5uwsr8EBQhQxGRjq44CRQ7AkhNQ3fBjuKYFdk4d7e4DCVMYTsotDtmP5y3Fr",
  "key29": "3eTi6XDbeJDYu1AKx96bmFkzuUoX4kgP8GTL9e881Eg5UAcprKyH9QQAU5XocUkkPTQWtmxhdTWTtTCnMpTRcxZ5",
  "key30": "dZ1xmgDmQkbpdgJ8ZGHCHkXC6hge4G1xsEMXB1fQZN7XUBoig3Fzn6447ZV8S9XWmt4WAWobTdPxzwWSSFFwMWs",
  "key31": "5pXLwKB29fYYvU5cWiKCJ2ZAYgH2Gmfk5vBVj2bLyAbfMPbB4rwMKLcfBqJ91GiQcnE4q3VP8LZ99Jvyp4Z2QQxk",
  "key32": "4wpTKbbVMj6kPJydrnnZKKju8udt7QCyE9Sc558vmUPMuVwWAV4UfXCSXrWdLxRBxPjxqHDEvacko4g2NCqp9WSf",
  "key33": "4MpHSuAHhHbAdNMkY4yNKMP7U8ySPu67P1GNtJUmTHE56fKq9nQufDrwo6x6xuBNAVsQRY4j82jz1sj6FZp9LEEh",
  "key34": "62PkWzD7jt7gDNswyhHjDQnxacXpW92W9tteUxHVgDawp4yPqGKZuGe4PG5NsPwtFUpxksLK8mqs9dPN3cqjBFPK",
  "key35": "5t8Y8mjW7wfi2stCeoacneYdV21ALunaBKHBFrgJUnUfeo8tkXu8Artup4S78ahd9LH5ZjiTrnzsXJhuCqQjw97J",
  "key36": "2ifM5sHZ99JZ5jyAG2RTAqdGp3kRydvoFPRS2XUPc3Qjef5WYrVJVnDohE2sV4xiiVXfrBvzLCtv1oHua8gKtVvV",
  "key37": "56kmNRHthMrzCD4eLPAgMxDSyYL8itkCWP8N1T5jtg5RCG2beuVJAqVFT3Y2Q9ZpBkFYUjm5e2jhNK5GzCWM2H21",
  "key38": "5fGtbSs3iLxxcqgKxfghiT8Yx1Csyipevmu3LAxM7awreV5ocJuZ5pgnqVwaNbaWzmsTKWj6Xn5JMWN8zsdg1hpX",
  "key39": "5nStrWzEGdZ4tAX4GJzexKRfn5HvaVNbpe2ugX2aL8y47dsEwQ88EckvRWapJJMqKoiZ7byENk1g9FRG19yFb8LN",
  "key40": "38uLdY9FysKQMbao9kHx11XbBUZHgcymgc3bqnbxcTt2CzyDCQGj7jQ32DmXTdish8fgMZs8GsvK76oyQvSpy29Z",
  "key41": "3CVpyv1LhN2p9Zkw9QeQuBbpXGgH5cmM6xB19Na1RqKD4FNMz5cc5iJKiSrp2LGrFT4YzAuTgkggfcLUspvNH5vQ"
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
