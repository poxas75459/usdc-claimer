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
    "56dyPYGA2TYWzxRvopjxAzYj5QBAz5yfmuqsdBTF7rtGYHKue6LcCMYqANsQngCaqy3mw3ETP4DAoF3gL5wBDw6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZorB79Y3tZcRtfNoAPAbY71j6JexXQwrFxq36fYAQ2M33KmbASrDDrSubfoH2VeWgqN3Pex6nnNEt2yrvxxk3y",
  "key1": "2p3VyRNPyafFeLJdiGDZxSjMKixXeYQM2V89NhghqthCCfBjP4u9ZCwbZG3sf1zSGnR5UGSVA5A5kQF7cKgTVGUd",
  "key2": "5GZYgApMSYKsMH6fmGRtTskZHssx7QtU4QWp8PQmWnBJSyaGs4bPTn51Bx8omz1Fp7vvzdMSib38XdDnYTxRS3tw",
  "key3": "51DHjHF4Mc1TwTaJBW19oprsoprhue6JFhWfbgSad5zqjqqWWDGdVzsDF7iZFs42QVZqyRPoBR6UVv7FoydaSYy5",
  "key4": "Km71NMWgikgxApiyQqvmHyLHHLjWpXr9yKQsMfy3iAC1BLY1hGVoF9FCcEcniSpvwSx7UAjrSeaKKYZGZ2GenyM",
  "key5": "4Vc9D4uPzG7CUJ53r9pno7i3v6kazbfJ7QGdQzuWvoM6yJQBbu74b6RZyDJfFzTSXC8vXTQ4rCWnntWHbcRhc1Qc",
  "key6": "3tw5x3KcP2R5SWTXE7BWeTH7cRnru25G4zFMsyYgGQ8QABcT2qbkQSvNqpYGeNjuaNVaq5j7CG26CkE4s5ruhQXX",
  "key7": "3scg4xoP5uVVehs7gauYTLpgzVSjTrZg8Le2hkzsJJFVT2fP2TkeWjNskJPGLpjY21CEEY6gMzwnKVUv4e7fLFPn",
  "key8": "h2cT1xNU6EBBEEAeumuMimu6awsAqyBqkQttc2bE7mC68G8vV1wnmLdec9AfJvXsybJLZZrkkD65W1jjpy6bjzq",
  "key9": "2gND7onHxRBGHjuXm1hDv4ThgHt8FFMJFrSiuFgD1xKwjua1moM1ZeWsZJ5Fo6SZ9EZaJm9zTEzKUfcsmHoMEKAM",
  "key10": "2GkKru9LvK3JBAUmYPp6EoRNRW9WHZGuKAgUEbSe1uVVtZDmyM8ua9P7nzaXMygy2zqEsjX2xWMib1K95uFo7PHL",
  "key11": "3Hwc8RZYrdNpZ5HhKnS5JCRFPWyu8z7dk6riQB224YbP58SWEC1KLiWABcc6SMVJjyB6aYZ7jUCT6P4e5GbD2dzk",
  "key12": "5SxTGYdwbDCStxt35KJc5iqBcJwAWHzJ7mrs2rVeWnPF8MkD3mNh79GxFUHSuhHgkrg9z3JN3H1f17Wt6sCwV8Vy",
  "key13": "3XT7cSDd28uV4r8qSduTT4uS1SFZU38KwpFs6xoPxvkNuSh1YHfe7Mn6Vy6FAwKQbC85LMjMT83kSvvwj1Xp1L8g",
  "key14": "efQpZsSV4DAAb2mcLbbHZTATMxPuHkoH9LyQ9R9JPnGVeoUbnZxxg8YKx9jDLz7vJ5vreHtctxKMYG1e3MFQCuM",
  "key15": "5bwBK6RM2jAVL1VB8qooYcuYBf6SjjDudmsqCAYLW71u7jKV9qBP4SiCX3BaQ7TtopLXTUB51xMPNnwLcBGWxxL4",
  "key16": "2iLboG2dpnDQzA6kNrmiysgXF1fhiyNcxBr6EQ3qGamXehgD2UMxaiAd5uAWcRZpXfSdALNfMdRfQ3Ha7pNxKQrM",
  "key17": "5MMneNJYDjtzpfGa8mkr968WrsWVFizMqZmGWATSZjgxeCX7XEYXdL5aRDLv1ys9wCXRKTz4JmMqLwMwWiXKrtUa",
  "key18": "CRHpHZVTB1LFu44pgdZni2FWwwJDMmspJT6tgejBYRKeRCxPrh3c61eQDn4r64L1izCsHBvBikGnQesNCj4j1vH",
  "key19": "4omGaGdUmeGSuWT6x6JAqXitw2iy3ZLoZJRpuR4oacH41C6NQBm3Y8Brp41d6cek4t3kN9jcthoQ86zPJ1g6KSCB",
  "key20": "ouzx1tu5HyBSFPrtkt9NzJ7XzZxgXykQLdMG92gQcj38wfCFJJKJuRyBtDqQvBhSE4icoH3TNTzQQSbwEuPosdZ",
  "key21": "46fSJY66TJzjNVij3F4uJQpA2Df9GpB7b4L6cRZ54nBZeXSDD78XVfbiLhMzTQpd8WmNbbuaX3iDyQx6quDNEBJY",
  "key22": "2am2VHbVJPU4kSFCTTD2Zocn9j3sDoWYSSo7qEc7SoE58nqx7a5xPheHj2DTFZSvAWeC2x1QjhJDBtzGHjRs5KQ9",
  "key23": "CaAaZxD6hjQYYPqGhv9JHhcne6iu2gNYRm4vapcqa1WL48KuUpAFKCWa93kQ1dqV16kYxDeP1ZeaVnWkysu29nX",
  "key24": "5unkPEfKkNt91hrnyytWZMBbfuefYgNKLUabTNkEfDDTWEJh1pMyKFdHK7eSYgUcDu7tU2Vdbj3vNEcuBxaJPN7K",
  "key25": "2qFo3NZiofjiAvxL93DcAv13vz8yaFbUYR4JWnAErWQXGQqN4aUyPNDhuJj67gVuqKYJauEjirpqBzK8rr3zu41i",
  "key26": "W7aUnDmhNFGLvmdErFypHqMDpU4pGtKgQ7rJQWdoyKr6ZJi1anYXYjoLqYiS38pdb5eZL2ykzK6Kuy6KrWTMshq",
  "key27": "3HJb3A28A91rGdFciSWVroU62EA7b2CEsUTPxgMW1R3zCpAMoJtmymtXEeojW55EJp4dJm47r2KKgHc7P66V1mK",
  "key28": "1rLmvMxBTEjjhGXAbtTnTLew8YPmu4akGvAT46Ffobvafvor2rrBYiQshuDghLXyHpD5Xjq52Vk1DZxrsxHqBuL",
  "key29": "xqqzDz14gz146KNZeAKiL7jdNrk8Lx2mgturnPUDNxdU92SWw8Yu6L7uoYA81Jegi2Sr4QkUgNgPQeVeF6gYUUk",
  "key30": "4bhmismH7hyppdy92Pu6diXHwhm79BqVh4sAqira2UkFq6hGHY7A4B9LGcSN7p6aGPYHFkeNhHoUDoQVX5ZiUcBA",
  "key31": "4pS6iZM7ZJhPhq3fsQcfDP3w9VWcjYomRMwDwNii3FLMLGzypz6xaXF13yj9DTgcGThPK13qdbMcuBpDjoPTpMgU",
  "key32": "3DBbkyiqPaKyeqkMVLcSMavB7yt49tEdZCJyaBVLmfKsz2pxCZYgujVwFRX9uzmxmRQnntLNgQgrD9Q2dFopFxqm",
  "key33": "24pVFK4NMPBCQM1ypkBpGVUeRBH67MikRkhVk5C22weK1AdwSQ6fSrJ1cFtp6Yraisep2xM1r9TVzof2cYJ4UDtQ",
  "key34": "krtKm6ZX5qXGeiGjfE2s3qfS1DDDNEbdfd1FYYae9r6NKYDA15ZWBZjdfefW2cW22GKW1KijpWbrjT2CPHZ5mrt",
  "key35": "4KfPtRg2LJQ9QZmQsLzYB4oqvzD3vQfha7qWa1vjrYL7gMJi4DJVsPDzQZpLF6oSZxN29fbSmqvdBZN3DEUb3YG",
  "key36": "3SppqMsEgcx8dadBRjGZfmk6sZ72tXwy9ocQ6S2MxbaxfoNA8T4C3WJZik3TDYxxWYTvVzBoBje6rggkcNsGkQ8h",
  "key37": "3xBAMWpoaxfsP7LCkwYeFdQYi7HtmmRoCuCrBEMMqD5PYkNVaKuQz8gZFCnPf96f3JCpCJWFymzsZobHBthjTEXk",
  "key38": "462ssqycXiLKWgDGNGig4LJG5bDAQkxCvXH86DrdQcdiHT22zF2BEzQh4neUctgVuPMm1Kr3WACyM9F7hDTR4PvS",
  "key39": "4UUcTxT3MavHHCHbjcPUMkZJrVSvkx1NjVHkRWnrfgrn1vTRc9xin54QneYYUDyc7xjApKhD78fkNBctqpdqHDsv",
  "key40": "zMSzheT6Z7CCrc64rkyUC7khkm5FxeM3v8gAZNLCm7YwLqwWxmLESfkzgf2Zjr6Y8smce5yy14bgvpPRbGjEsYi",
  "key41": "cmeddjEuCEGe5hEPm61byrSdK8jPrzamJdSkttmWqMjvgDCTuWn4QwH2PPBTuWGjKuJVgRrvtFUv71wfwqjouTJ",
  "key42": "3mzm8Cc8jtHUbPkZ9PiX9JQCeMJT1jepWD57zEdPTMzPqQkccefpWzQb8YrLyL8ezKYa6PWkvM76yH88zgr4L8TA"
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
