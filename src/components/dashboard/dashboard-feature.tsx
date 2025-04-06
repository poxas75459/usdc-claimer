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
    "5XmGAfLJtnzqj78KAUpWC7cYc2NYZ5ETfYEybCoPTc345UUw31UhMQ3N5cQ16CQ4voNN8pyXZDXMshvJYS4FJg6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hEperECbCcAxtQKSq2Tspec7Q6UktVaaAPxjsLtAMtPo1u6YzrXLYEEaZhKzLJtdLbXugHhfETDMRdpeodnyEqw",
  "key1": "KZ4uhqU1RskHrq1QBFrV1KFC5dunRHzA6bJWGPxwHJc4tmdTcRkWZL4A6FcvKUdvSxjjpdwd6TCrcYPrR5iRnYK",
  "key2": "2MVN5oVx3BxVfXL2sjCKJSC3rH49FweuMdmXVcZvNcthmqkDYrqk64vq1mrzLrKVvenmXheBMY3QTYkpjnTwmKJS",
  "key3": "33qdo9NoEdekZbcQPo6cz6Yj38XHKtttWVN5t8e8tcTXNk3WfNvoksWdSAq9GG7WZWdXX5DUaPdC1KBnsvLXofTj",
  "key4": "ZQekZRGTwoH6ZcejfT72ho8aAU4VMeKHC5VzGjuDGXj87JF6mioDf2kZvwUn2HmWV44LEFk9vR7aNyw2ib6wBDS",
  "key5": "4Fvjx2awJxZux3jPhcDin4w4ERtVJG84MJmM2EFdu87s4ZKjNsGpRanRo982X4ZsRyHjRGusGFTnpuqL76fVRkY7",
  "key6": "3mkvqHrb9ReA4TsCnqX4RcjW36NyrLhAd7E8W2CCP6SrNyY2yHz73ShDTC8YNicxoXzuRBnXoc7TBWezfQPqztw6",
  "key7": "2PiPQrYm7g9ChRHYeVrX27BYDF9pysB6VjjaggTmJqs4wi3TTs5Zx7vuE56vexpuMe4f94GMbTfdzLW9hEC5JVjh",
  "key8": "616HhFz7ejpbCoHpBVZ52NeTAwFaDkk5w5aZ72kk7x76wC5euwXgifzdGFUgM4AqTRK7kC4QhEfRSpuuz4tWb4Yq",
  "key9": "wMs13qGHFh4Z6R7AUu72asoLUBz6TfcECuG5Mv8UH5NRbWTw9ZYzygaBfH6tpv53ZUHn5RTC59BYjjhjFLaviGK",
  "key10": "5izXYhgqS6pV4YqJz1HdP9v7SxUssEdEWxLBoXahnPgKTx7m2ZUgxz1a3rKdexQu38SNbG6DnBzKVCfnyJkNdZtQ",
  "key11": "3goFwekf5ExrSDnDtzMwJPJtZqkYa7ithgYgZE4kvaeuAyGpt2bg1N66ccozivTTvjdBjWQBLRoar7t4SQxvLwEN",
  "key12": "2y8QFcL8vnSbF8yRe3LjJDb8CU4fjZYSAAd3TEi2SDJqdhGwi6LrAxbaZR2qbiXGvGKXMKJn6SyoDoGiSrKUbcLG",
  "key13": "4cyVSjN57rTr1EwwzP11M6jmcDHsC5x3NT4dm4zHZN1tD2kejyQFyLKZjrChgYJ2g4V55t6g31GXNnLysEcFTY89",
  "key14": "yp4wts5ZNadFxxD7BPLPALsR7aSRqafdnqytLhE9wFvEFDSqcq43KSfgLWeSW2xAYJZR1Kvnx3qSYSQ6YVzye9F",
  "key15": "4SBuRAgch495bQQY3XjuQPg9CFKJwt4Dv6SMB85ZEdscn7xtvQohR9tM8P15pZehGpdRRPicwWtoVjPQkAhvUFPd",
  "key16": "5Y5kmz5FGt5n3dMa1SYkzVe1WJFdzv14HL9sXRK5uHwY7W1BE4LMu7wTaW1DQ8RgDNUEcw3mAkUN9CbWYRHGMpVh",
  "key17": "3WpNCzvaMJGLepEMcRvZdTWoCRrqvKLqMfA3C6xC6iGdk4mmWMP13xdUGDLsnKeX7hGuPRkcfy3SDdj7HE45Nf53",
  "key18": "5aryFJ65PCktpv8YogFfM5Sc2cRypwUUxfi4FhgPwRYDHdp9VKnvP1HzqgwxvHKNXrBRo6LF99BgeAXti4FSuQt7",
  "key19": "2xZ5enTqBKQxPhv3pR4Yh7AosAcSw4FMW11KKQvxyNmCuLJ4zYbqbowEPpULyKFpNit8ExYMByfA3wGVyh6YkrVg",
  "key20": "4pMai6nPqFBw7dwgD9udFpmDgB8Vxxwtkwz68V3VfxqXeG8fyBsqoEm9JpF55duErT2voP6q2onxanpTtH2PskVJ",
  "key21": "5MBWFXptrhg7h413HFE7bD2Dfnkqx4mtABTJLTrVQDThMiAiHPqEwqLFPgQm4oNwwqbvSAw2SPTYxj2UfzjTV5sg",
  "key22": "52wBS12RwU8RGfsD5hXBUmuGkgw49SUeFNbFqwtWK4xPXYjywXKhQB5jzRfwf3DjUbxsiKQLZFLyhve97o5H4kVB",
  "key23": "5SeyHX9oFLXcRePjWscVTPvT2wqfGXFCHTEGrmv3RewcEx2Qjz8LeSt3CSDBVbXkZtaFLUri51YzPHYTp1RHBbUA",
  "key24": "67MQ4htsrvg3VTnLPzrG5b8cNgQKKkqr9ixfEdB7oXhDdnDmjqfW7JHwvz63NReQNphEcdLFi5b4VDRG4sCAV5vs",
  "key25": "3K5ZduDE6ePd1qQSpx76RvxBK4WLXfXNcfUywHTPqkrRUWde6TkXQ1bvzmNmAQi87AEuEoKymX7yxUWFnjjnL6oD",
  "key26": "2Z5fyPVVLnVjKDvX6vMo1FCLbwDuw3wYJQ72iS542pNSnYCuA1SvHU1v1G2seEnGG93XXK92qypwkh8zMVqUv7Rv",
  "key27": "51ztb62gCwBmJQ7mXhWaZCMiiEecYqWDB6ppfFPmgg3R9is6wDpDLGA8usqdpQiWTqBHwNRDPUuMKyBXJLVAspaY",
  "key28": "sZdaNQPzCkYxnhBNMSGYQihsczhXburSPtKpYsVz8XejNJP6KTF93QPr1UpyfaYtJtrmxNTsVYMcP6fx3ocBhCH",
  "key29": "3MQQVbSr4M8YHsRhQHWgP6ncckGWYQASt64qwym1HcPfoahNYKHHu5WUMYa1yQpuhDg6Uf3SDCL2hSjSvw6RTG3K",
  "key30": "4KnyNwrn7UmteWgLQyCivxCHTsNzoM4Yuq6rBRy1Tq96uYLEFNwRY4ou2xP52ncGpNFtBpJLP5FrMZFJ5jNd1wZ6",
  "key31": "8GRm4uq56mGTbq9fJJpqLdh6CydKXQmiBBYv9PHRKzAhPZxCdP5QPdXyHEAaBjGRoTVJ7Y33CVGixYKGcmXd1zz",
  "key32": "3w5tPJmS1kVa2cG3qwxKaTZ8hxg16kTUaeabQkcB9PNHnSRtY4MpxpswJqcCytNmHgu4yP3SpkTYQVcuLUNXKaCt",
  "key33": "3FqwAc2M6Jpw7g9EeHr2YGjEKSehDVbXmzECNZKesmbNyy94eAQrcBtepZoGNtrL2WRjeR2LiLo3VFo7Ty3kM3xD",
  "key34": "3BpCTSdZizZffBdBsu2AzsvFs7Q66ceDHx61TBPa3gJevSrPdMjjTuZY9z2NkAmKMmN5VGQidfdutGRZk7SNA119",
  "key35": "5MSGqk1YyjT94Qt6k4UQxjLJbEmrfi1RZdPzZ7eG4mTyTXxxXfm2R9LhMUA4w58nVMpZQJAJSPodBVobG8UDDLt1",
  "key36": "5tTwxRDUDK1eMuzeJby1ER2ysBU3z9vR8wh9h6Ai7wtVKQcqud15xEcKwRViKcL3G9AdMNrcVuPJZpgJjqJSZ1Qx",
  "key37": "5n5kZxQA9rYDo6gWy6q8T9AMutL5kDcjbLEMjxdqa933P4EzVCRv72gQJQUPpPGkQoCFneMbKMaz9igtMvgS3KCk",
  "key38": "4zYoiYoRvbD6KFV8p22mS4pPCB15v1HHtHXQa1JSk2sdT1fyDPd8kpYh3XLrUzddXbzwcxBpDNhMtQk21euxkWyK",
  "key39": "46GCY8YYmuSxb94SjiedVZsQpKFMPiDjeVWzYnebxzCNkyj5Yy5hjvRCiX4UbeaTsYZKWiYsKv4xv9CfMWin65QE",
  "key40": "4qkPa62d6WcD5C3n7vWmuhcXeNpTjiyywdpzoiVodJWBsEhQAWEVnArgG2BbtRaYVADLFcB5nYyiMd9zkghYsPXQ",
  "key41": "2u5zRUE1iia4vigr4gn44Ftx2N64ZxPwGns3crabV5XzUXibawpkTnH6CAHv4A9YpJ2nUoh1oMMfaNMRSFWiDip5",
  "key42": "5Yax6CykgibSFyvM8LHFAyuj4F2N6AwG4BDRd5EiKLSctLqFNsBD2P7HZ7j2uWrMCS3Gneoav1TPJW2L2qnMHk2X"
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
