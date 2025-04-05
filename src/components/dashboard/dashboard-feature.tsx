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
    "5ELYeniAWvvaooV1AM4hqW5u9UeQj3ZUHJZnaguMAWZrXCYaMGQeS4cAndzqKC7CoWaaB9NepTRB1uq6MDbMaGEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UFagxtwH3VpHdRKXFAGoz2NzyrfqWWiTCiJpkxuDurfFsnwJaQL7omPFpidkjegY5zAPKs85EwvWJeZzQJXXdrk",
  "key1": "2joQXB87Fc8Ksb6KQcapA1tq3exneie2XnoyFYUG88DXCuyxVa8cNYWXF2vFyzeCU8ezbUnuKefrTLRCKYGVab8z",
  "key2": "Spq3fJTK7gMkP3DkG3FvnKMvtVErhaXT6DcnsLK3DTUQoE1ehkb38rGFZwwtCBNsKBrWKEBk6eNRMJwhgma8tWg",
  "key3": "EPBtdd8EymtRYXUqowabrogp24BQ1uWgEWjkzfXeBK1yBMp6oSEBhqRfCYvpZkeox6ktJNvbQUtJnZVK3S5Ey6P",
  "key4": "4bv5pKA8tFzYfJjGpeeZtxCTjXjUXJdKNsCapbnDRLnF8NXSvwCKa6suC9dixoi2Jfm8q9Qi1FNQE7hC3sErEGHe",
  "key5": "5yVU9kuXqQw3XtEkixY55cUS3jzRiUxjnSa7pYbvnU7NC6pdnVxZjwxF5jGpgZn1LuJeFULGxAFmKsesSh7rLcvz",
  "key6": "23WrA8oDDVSYvg8NAbDJ9axBfTkgXVh9hv1fSTeFZWQUVoUJibkVP7nwr3ePr2dNBh7wcz3j8sLPLozzGnZHtd8q",
  "key7": "2hM44yzv5SG2jgFSLXkR4EDTGjvbigTveAjvwF3FrrfL4SUT6p5FtjZkPSqQpSoy7Xgb8RBayb4hnfyhtgYaNqim",
  "key8": "RXvgWCzEknrptbH3d5GmP3niqTu4eVvT9h51BCq3S9p8U9MXsiaCAxEZAktr7edCqaHj4vRhc4D8K5MkMuP8CQr",
  "key9": "2Q1fjpZfvYXcXESKYTtGSuxDqTUofFFSDSrC8RhgRc19YuBYxEe3iSgEnmG6KrG8DjDjLqoJyn8gFFTGU2QKuix5",
  "key10": "2wQigyZes6wy64JL8F26JrbKpQbwbodVuF1h6WfDhobyvK4waDkDEw9VwQuEuhAwUgLoWTLEdWX9pkhF4vW3UnS6",
  "key11": "42EtQS4T24iLeC5jAh7k1tH8JYh2z1ZDZmaYTBjYTbyV1XFbtF88dazL7A5qdm7rgih2FTHzJfHdaiAgEXrPwSGN",
  "key12": "39yUdcdTeeuNNXHXLedinLTj83HPDXxf6q8KWd2FNHHARwoxLCrdjyf7rgD6SreEmevfiXuRYsSNwthEnt3ADtXa",
  "key13": "XyhS5PeCf97jwLiSMDv2XFJmLP8BN4WwpbtuJcVuLUvqk2WtUdHthZQLSmeHzkvyh8188fXZNjsNDvMCcPaE9Cq",
  "key14": "63LTqURhGz1y64ja4eg9dXNxXin7GqE3YKEXobqQx4Bo9kLH4FXZfjc6g1hRnjMFuAs8grkZgvgobrD56PFowJRK",
  "key15": "4AXSUCssj65kNXLWQBcp61rp171TmjiYG2ymm6c2xcW2DJQm87Ck4kPMqpHx21CkafpD68uC93jjDkDaym6FszeW",
  "key16": "4EMbzRV7utVgL4ixxSDBWF4BKEKgCvWyP5sx1zuBps82XdtqLVqdem7Jo1aNEssyNR4WddLgxkBDBGFbjYZNNy3v",
  "key17": "2qBsDPGczPnuSVtqpbFT65iFyXDCwCpXqRro1p9LGmKrk2bh7PykGqcYtuujsihT7YjNUrBEJWsWTRv88wnhUhC1",
  "key18": "2wHYqMVx2q4PVy8BZ6ifwG1gowxaUJR96HbbrdHM94YEmRjKc1kPEUqeXdxhC9AkbGH4C3X2VdoLRdYAPDUxdxRh",
  "key19": "2CkDS3HyhHPYbUJd7fT8yPTaqxYAun5JnvtobyZy5VxEF1E9oGJyLFufjHrf73Wj7bpCELA4so3yqGLCRzbTJPN6",
  "key20": "2K46fNGQBvYXEzEnqzWsBDtj7d11FjveUtx4Nc3bTme6mJcpZdmCth953xmZw295avaUxhHhSPKz1d5AmjkXshsr",
  "key21": "4BEuRGaCcjja8UjJRfcDZnoimmjMMEJknEiMxLTd9a5ETnssszNsKuwsWxoASr8MTcKcfkEj6dGdMmFsnTnAxsb7",
  "key22": "DjsMNTh5Nf5vkcMy8SSNdAXrzTK2LMkr422ErrTDanPcUKzMkjVXSg967cX1pa5BeBacBsCXv3Vsujh7hJhDFFx",
  "key23": "3P9wyvA3xPozWXmCkMfdpvmaZpNo9Sb6a5gLdpQLgLofY8vGzxxyzTBPAKgy5eLyrMTjyCjiye7STrAkb5X7qs2g",
  "key24": "56CoKUkdHXzcjQFUYtNiW1VN2eTa1YBAXSEszGjJgviA3ukpGZaXbPCoo92fhunBsDvxuEALnivxaDZhdskfmeY6",
  "key25": "2h9kjnFPgg2DRPexFTxQy9aPvN5EDfd7qyXaFQvFvkhtthrvdDEiZH5rX6h4znKUNDqJTUQ6cGXxUXW23otFar8V",
  "key26": "21ygUyxkLNVQGy5Gvq2aQu8f3KqQm4vL77Mf7byvrJfxV9Xj53DySYswvE6hUsr6qp6pJixZomHPpBaLNbgntLuW",
  "key27": "43yp4A2bxvndFQhtwPWgDnghTm6eNsDf4Vr7FdJmcoYjHk4xxzKHg6PHianKWxTMXxUTeDTxFBMf2jxEWtXYg8m6",
  "key28": "5MFCb8gEYtYDT4X7uKSjLMLQUeiE9A7eGxJRZnZsz9icyqAhe8QSUCiuTEvhPiSTFVXUjhEkauX2DQfSHv7buwCu",
  "key29": "2r29yFcFDVTV6NoSW9ejeSXSjume1QWyFSAZ1HnjCKw6MuxSZLmVHYYQHFGpnRdLgLK3BEkthJD9EAMghMRpHntN",
  "key30": "3tKMW1Si6L4StR44pZtCua1hu7JhUfNmY5XgurKQRHAbubWRGUtobo6DDdg7tcxu2hBReMKHQQdZbkGxWDvFAGLV",
  "key31": "3oXL9YUDBg5SJGxHEU8Z12eaDme3jJSoRWo12EzthrWZAAYHVHdiR4rpRWa1VJHj1YydWkp8mWAiCgBmkgiFEmVr",
  "key32": "4ZFiE8u7DCrGD9Fbic6PnjBuKaVrFqnJMuhX1b6HTDsqPYkmrWTCiBj6oy6CuxqVaYxCKzph9ERcLS1pK6vSHaNR",
  "key33": "xKaycTEtxzqaYCt4Eyygf8DwmX9LzyPVXcZwtUvuGaq6KAC8HECpDcyUvN4Y8rk1786JiZvrbCHhAht31L9GF64",
  "key34": "2XKe9LYpkxuApEbSqjo8pEQ2ETjhpxVM9MbF6UXbDb4JwbvveLFKg8BpurMXGtYNHBPkkweC24LwzKBQNR9QGUNF",
  "key35": "4k7onefLR3DXYgRmuLYrzroTcAroM8ARLUoz8ce3AWSzMmiJnqQfWHpPSgRWRpgQy5sUSfBDqQgK6DAE2p1eWGCm",
  "key36": "4HXQ5zpjDDYRqNnEhCDhxH7XhDNLLRJKER6Bg4Xt6nDB1nbKrgtBYqiCRQjysEc3w5RDmp2YYCiyZwHHyPkf3SAq",
  "key37": "5v8udpDNqRmgnf7HTHNvK7ya7AXrGX2CYZhLB8eLUTxyjqU2QoDDGkdKB4jiyHAJNzqFkHLDs5iGAjBCy9kUYUsE",
  "key38": "44m5UFjhi6Nch11XevtBc4UtAn4dsBfYYM8VG8vDhjpzETDzsJHZX9RxiMjhshUNvzWJXaNs5DKZLVFd941BipoK",
  "key39": "4HwRdWhEMq1GyoWXXqu6d3CwgbvugRTTwXqDRdS8i84BFSoFSYwoKCqJt9SF5916XcWQDKafLZMpcyfFLNuqWgkR",
  "key40": "3hDaBi21Jbdk6haqxN7oFbht6vRzR579vQnX2Xa71wYgc2YGinC1AQDMAMcnkCcL2b3SRXXfTSfNPkHCAjducMfs"
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
