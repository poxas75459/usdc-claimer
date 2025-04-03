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
    "22qimjmBdHEMrCWiJzyuGS4YhfmcYUvCHf9WBxxdzC5VNrfbpPBRsV32Mc9eMEkYXmN7bm1SfroCSjTeTspaUFKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AoNxLX5yHnS6badm4zTX8xGVCdzknXAsYiwgBTp39U861EG9pYo768xbiGMDqcQx88vcLpuQX1fQbRqrWkG3coj",
  "key1": "2bd3ywTyHDjJ1Fp6ZSFr2e3pCJMa6Jscd59upowCD6BS23RCR9fZyTVChpa5pBTaQTUvi8exyaz4VYmQ8rAKbH13",
  "key2": "PdrpSzr9mvttWt7QwiKMmYjdmKRzS4ZL1Pk4PA46BiRVqCsgYHQz8Y1WnyqxBNhTJSmEXCSMqCNTAXxmgo1u67V",
  "key3": "5ni9x61jQ54Z7vBn3ak8B2JJ9F96gPBvjdUkf7zY5pawV7mL6gKPsaRe7JJfCkcGEPdLYYFUeUYLi6avTGRuiQ9N",
  "key4": "4YxCQkYDqc4sT9MWxT7JWw4VYUU3FbB6xz2Rhd47cVrdNgmkiNwY9J99ttPudcBAaK1fLhYevFYf5d1F3gawaYbc",
  "key5": "9tW4xoQJKDBkhRKJk74ummnL7oMzVCFbocVapKRipASWeWEm4PDCYg7LgCz87CkBGApUcSMrTtXuwkNffdG9U4P",
  "key6": "4DEdMSRD5NiTzzn2QZq7VAaHxbFwm62njjk3GT7GGrcPr9dt21bnuD1veRoFm2GBjcXpgqjGYGnyCQHa99ai73kT",
  "key7": "3UV27Dai55rnwoaxBtePXbQaH92mU7DtF6F21nGNMK9BRTCddSRJA2cLbmNajXoMtvQA8rMa1fjXssKEeU3t6mY",
  "key8": "3c77rZPLxnSxuWCsc2P8CejMbyZzDWa51o2nJFtPqcb81SNm1g3FHYnRzeuWmPxnYK5vsSKMnncJVLk71sTqHGN1",
  "key9": "QZMmT4hUBMGEQ1GbqNUXTmCcHTe9iVmWL6k6WdHkxUK4Z4ntVxLcneKkjJKvP1PpV9aZDGyh6QWPaiaF3hbEdLY",
  "key10": "2Ghg1DstVkiu3xTNnxS62CS6Nw4REbtH6joqFM72mHDK5v1PsmJfxRP4kgHeUMHDwo9K7LvFQPzmrNqJ5Wv5b4fQ",
  "key11": "Asn7dNpn4PYGhPg8uy5AGmF8jCVS8dR7tevoFmMcoY2ceVxRa1LWZViTRVaWNNkST3uxVokX27fzDVKgwg7RTiz",
  "key12": "5mb9fKijzseSx2oieVsfqD2CwQVc3LyVHMD1JGJXb9MhjPHgRezJx7n5u1ey6tPKpWcX4omn2W6yinPnEhQK9m4b",
  "key13": "c95YKT166ktS6wk7PBecLR8bcE4QNNNNbD1w4ENQoBo1wSdJEWPgybvUUi64iYtspHctYAHyhX9K7BWfpVK5kPB",
  "key14": "4MzvsW2zw7rHSq5MEMunwtCYzNPvxZERxPZ1thUhHD8XtdnrFx4hmRrVnNYZzYC2Xrbsc1dwZbcJCGRBPg9spAvy",
  "key15": "r9HqPtk95XkBvnmB1XDf7NnXBPZpHuzGvTafwUamkD4RGGCBnqCKH7mpMB3jZRrXEBNkbeH5vXzFde9cmq1gamg",
  "key16": "3gVMm1dFZiNffru9regoJ7mFC2fQCpVwA9LsL7xP8Kz8oSuvBD631PzinSgYpwdSKiWWCXfgMSNEDw7w4FLFmvM",
  "key17": "1rrqSVfHmUvVqdCQ96EiuYsXzi2erKX78jS53xvSNb8NjK73rMNv6kMREwR1UDAqEbCCV658d5JtkECDj6MgxbH",
  "key18": "66EyjbiyGQUhbXHGuhjzzngow6hSyZiQ6gVUoKqfgKGxDFYyEznLUSmJA5BjZP2KJM3YdwbZVmLxSNjuRwXkjkWR",
  "key19": "fSe9a89ECPVaRMY5eu6GL325jEE9fZhGQoHFe3ji5p3HUUddvd7yfMpALAT4RXgXG15pwBeSSH3yguB8x41XFBo",
  "key20": "389t96uPK6oRXzABJw3gR8uNNqsjQcyeX1aEwvxEzHxNMDAMjFKeyjSt8G8uTYh6VJN8ksfpiDW3LR6Kpe1bhwE4",
  "key21": "5b1XazJZoS7a2Dms6pXcSeCzA3L84kNVeM9W3PixFtXwuEfTV2ZmeRMnkehEGwsbLHWviSxYLGXC8uSWyu9qA1H6",
  "key22": "3gt5ZkbFkrpeh9ErWJtevNEkaieg4AbfYBRRfBdCfsX3kLnx2x4b9ZkUokoxwcvvHwTN9Gwbe14xu9icd5YiMW4x",
  "key23": "4xYHayx6g4zEUy1AN6uzCPfko5WaW7JKgm4WPWTU6Nd8Cpf8Po2ksVTwmdy77KF8Psyh1B9D4es52uKxSXoNJRZd",
  "key24": "nj29GveVmERJF2GP28AuX5pDfopyL2j92PbCCetnUrCXaKFm2iZiEc2bUrjydqX8S4PTDuittH9GMExwNzrqYKh",
  "key25": "2i8peHTx2c5onTXkJJ4GdpBzKDRdLGKcc297axH9BbAkSYTnioVajcce8P3rTE8xx2C3tKJeMeCQgXSwiHMkmysn",
  "key26": "37WkZuB773HZtRYZMFvb4Mg7iozSWQbYNMvoj8D8XQHk272ZgXJ8U8HJbrk9y2bbYXvqiJdoyydDzK9Z3SDoJ8Gy",
  "key27": "2KaKHFES6dPR8wKbcD6uqy6aoTtH4Ni2A5WgjSiWPjdHN15DwZjkHzR8RUJYRA4f1EKXwhoGg6dVWbpVip2H2FPm",
  "key28": "5EcPtDUCLTEjZ73SUBihZi3u4XThfM9oLhrXuxUS2wTfAfDUMWN1tUJ4QWX4ngx1btFPNL4m9pcQFEpVBKrumw3B",
  "key29": "3o5Rue27VSPQgLh9Wafjt5Un2pUHBdoRnZiWaKj5evGtEjHwYXbawYbbLX5JXKT9TnsywegUgwPkYhTwCWkayYWQ",
  "key30": "5SVpXguSD6Q5Adzet8UiFTo5wjvixVeCL2cuyya9KGdduHdhhzKANMqUJZe6B735nwPcsmmeJUEHMEfxKuxJcDJi",
  "key31": "57YfaG6ivaaZ3Mmr7hkmDNHsrAswVRmhSTGMorAHmav9sMbYZEZmmgcvLFsGv9VL2UuEwKkp611sMjvfsShTv7ns",
  "key32": "KemtSYqSMBuyypF8uko43xccS2HWL9qhu8c2U7o3hLVMAmxa39AYpQUdYcHEfkeJYcnZbgx9DU4e56xnYycQtCU",
  "key33": "5xBnsJSctbDKV99Etw8DoWGjGGA1m3JBpXYFRGP7CUd9NR9vyvMqPQE115zf8zRD1S6EAtj84MdxUAqnEkj5AWaq",
  "key34": "yoYp9pRsAZ7FmZpfTRgNUZnrKC2fKrPdws3MeX8Z9mYeNMqVXmmrWiAL6T5do4goXQisdz7aJMkkf3bR2Pt1KxD",
  "key35": "53EgZTJtr5E5eqGP6SvskPKF7uhPznPc8hy7gcy7AqXNQwffZPfATwZvKXYW9NCXeDoc9xJWrGMPNVzh7JqUcEJN",
  "key36": "5ap52UBznyoN5JiUqTaMKeR1q9uibTcUGREy5pBeB9wekiAiBjFqpaPoqGpH1iNh9xMzRDWP7upZ9q3TVW7Ehv6C",
  "key37": "66SPB96dRMVGBGFSBY7nUXBMsQCiZ6gFj99s1wdY1H1mUseQx4Qynu1RHWWw7ZLyM28Lb1fGsziK34BAoi3vmmY",
  "key38": "4pTsWduhBo2di7RmULnVerToVVfTUxstBwQvXXQexAfz3SFVQgZCoZDcAPAaXYf253uzfDHjha8gjdZtUhFBD8oA",
  "key39": "7Nsp7KEdDNE3F61d26sFArUw96DzkFyX7WiUxp9FuJQMmVqB3oygPqRiW723AvcAZkfPu8CQ9ZTYpgVSBa5UZG4",
  "key40": "4jwngHgnQWEoHf1amieyZ9GcoLSXFqkdzYYaD9VZHSCHzaYm8X9b82VJMmvYnY2oszvHh1rQXKQpvuW8fJ5pjdWj",
  "key41": "2jQ61Q4nprRR6SCraEne4mRmLFn42hf35AtvqYnxSEQZjJdtVg2Wf2VAPCwnX8nbw6Lw99hn3PzFUuz82LX4p2gC",
  "key42": "5CGokhuc21ZZMmMMtQQG2rkxjeRJy2KQLLJCHoKcxFzPvYhnUiDPPiKE7WEkSqFruogWDee1oR3fHz7PU9nrQMyS",
  "key43": "2sjjCQUFA4pkoVB7tVP2gd82dJhARZ3Ejgkw3NvXHqsxF4ywEiJiLxqNfcnwW3J1ZqSadmeqU5WBixJeKx1Z5Shi",
  "key44": "4vqr5KPHYnzjXQkMaUUhRpGXpsSfkhoupJ4VkW4m4JqDJzawZJSqg9fn5bimHQyU5qDU6CzzpzHq5VVBEDDM9ymA",
  "key45": "2u4UGnf6VSkeG4PUoBPESp96geXWN22S8we8kE2Ft2Lj8gC6Zq1RJYMUcfJR5dEnWpWpjZP7EWat1h1EsW2eifgY"
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
