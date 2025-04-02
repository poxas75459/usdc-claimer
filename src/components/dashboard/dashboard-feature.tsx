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
    "62Lsis9aKQ4wpMws5MPqY4NeVnFL8VkdnXZk19dNRp7xuR4vsuJsmuMnZNK6xJq17N5h7XEnZN2ypiTK86yNRfpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2waoqxutqnZaVtrJGek8GSJrYcsPd6mrJLxheLnMxybSrzTG1Jj6USqCFn8E9Jtr54o7x6JxZoW7dtmGydb3VqJo",
  "key1": "4fuqiL9bZVqVfDVt1ATEnThZ6TSx91MctsMjS2oWZu12y7XUBgoaxU6ytbrmvgvzm9h5hj16qfT9FiEjuZKFkUmT",
  "key2": "4KiX71kc9pXqmGeiWFS3dF5kgoZPjvGifrKXeHp1z4nubsx53eiw7nK5MnbGbK7qDdDFqU8rJwCPNb4F8dwLFhcx",
  "key3": "4pTMQKLnhFXMqrr5XiPF6Nd3gTZmUnSdQ2kxdTS1ofPhEfez8Z9DFY17S8y1zKaNhAzTgG6yr7kT3DaqU48Jj33E",
  "key4": "3son7JG2H1XyVdeiJ8oEV16RZ92PuRr72DtHH2WMuGrEAxwFRE8Ay7NtuEEBLHpEaPpCFvGQ9gQd5t2DWUXiuL5z",
  "key5": "57xsQQzKREANofQJd6R5Fjkzw1pVmMwa9KHfbLNpDWVrZUF41JQFWVXcHQvnyz3pypiuABPbyRBuSFMrP6AJ5kac",
  "key6": "2N2oDfNjKv1BFvqcY9sP26N5c73htPKhjTAHWxhuoU6SNQ99CdwvYnTcvWLNeordSkDHwQCvfCCpRmML7BdLYNBv",
  "key7": "3ftj2CaDZtsJWW3pzDPHNGk8BnT7bmCKq3881r1XgyaJNhgkNhj1ty6u3KTyR32UF1MofoFrGGxhe7L7SpWFHhVz",
  "key8": "4atWcVuNRyFow5XvcjQ2uYnL5q2tAEiznKHR8NDTBAZ1jtmvr372b6XNNxGV5hsgyyxChnkhX2mmH5TzrRrk7w7r",
  "key9": "67RS8xidPUrTkmHZ9pL1LEFxt9XY9S2zDDK3Y2cLgFgHtFkryVZpneDTUhPtzdMMvfj1YS23NXxYNKYXpqPDnTBf",
  "key10": "5ooqhCFDHiLqE7cUhoUrdUNYj1gsd8cDAqJAMR13jsbcvypidAhLKKFeg2biGLxFu3eaUAhVBwGjnY55kWSCaMbS",
  "key11": "duQ67oseM9mPzUGLeSfcR1qZ1cww7gMEtEvi3kNAmzcaCbndhHAaEfySvUNaR57sdZaZdwzxYHanjgaMpAMCjU4",
  "key12": "4oyQP3A1a8VT2apeUiFxwaXohC5hJPLhdW6kivVCib87BU22mXLZBLvefLhGtWAMeGwfEhRKg1RWUhqczTRu7YnT",
  "key13": "585E5pBX2x6RUtkhv6pEvVnw1MV6cELSM76c7wMLEk3k9DRVgxMNeQcQxqAeRjHgJqbv5dk5ebAzcqNwzWkfV6hk",
  "key14": "3Cjtx25LuD2VATkCdCgqUjGgakDiM2PiAR3GoE9qyYadZARZZVttmsf771WxQ6HXvm52qg9GRCVd9yVBCQJtx2JQ",
  "key15": "2me43e5NqHxF3aUJkfp2AaVrBabgLhBgHke83rhEYD4L4EAoDaQ9XGYeJTWLe8xvqxcWzU2TjqqqSBADLsNs2o9z",
  "key16": "3NUfuGfqvkZcdbTK7KaRvgv7EtJ9CLHty1ag2xRNHbGhdt8p1xe2tbBDjAHqMnMNUrTZM3S4qZ21WBLZLHe9k1Fr",
  "key17": "5sy8shw4eMv5vVJjRuBBgk5WMb3WRjMFQLvRYdKA3e4PHySSBFF2fjQc8asrrae7qYcvfh75XMpmfSugeG2Lx5zX",
  "key18": "2BMth4AJAey4KVJa5dBAErksmLPuAiKKuHchaZUFJ5V3HB1wKuasdk1ngKndxJWxQ8er3PWKcDEo4gTd31rpj4cL",
  "key19": "AtdNCF3Js9ryCghe4BZVwLdkn4Auo9pSAQn1jqEpUxBb7hBUACrTkDmLt8UgphVq2K451c8MrMAYzmcUVp3tVsJ",
  "key20": "r39mCCrJg4ERE3DYPdCSk8wgfJVH4eCrjhp7X4n2m1GDWPooZG4ytveDetzEbNnjs5bauRouoeo2zwYBSwRzTWV",
  "key21": "UQDHJjnxSE6B2i1EPv5Euq1kfDXFFwdQWKTaFiJ2hTKPAmwCxZPTv5WQQyKTSbYBGgYMDpmT13w1PJC1gQfZ5ZJ",
  "key22": "w1KDaWftqtMBbxqqHoV98FsZqdpeMxroAfB9t3aFjGCBr2mqYpWva3MDWB4PNzC5Rc3sRobchk5PZTxB4jwodzb",
  "key23": "3HS6wduNGwkZbZRMUhL5h2SAvbpkos9Y2gBxEhWUdi57tjrLmGdCgHyhHuFnSrs18QSfZyZNX2tAwUPNjAJ5o6LJ",
  "key24": "5pSwHBDUVh9pNTQojrsjRRBe1nmAANM3bJRoN4hg8ZVMgWn7a9LKqikP29qgzZsJwXssqdQx3dc77y1MEMohRin1",
  "key25": "2RtFagrd7qHiojQ9AaEqhpXkSMvov5AB5YoWnxgBLHCTWVKVEQMmwwi1rLEfdutgNK7Kto6Hace7FwxsB4FkXZbm",
  "key26": "rYBxfuro1wMAcTrqcqMQw3PYQBezr2LXstA4dLyLcxXYCG1ziXFzob4paEKWaLBGsVmBxb8bcaqDvGcK7yw9RCN",
  "key27": "QUhYwNuzARRayWAKM32WGLcQNj9WFDb5WPJnxXzZJT9JaDm6G36m7jVRA6ECvwXj8Etbgn6QZDo5ZrpCDZWBxL4",
  "key28": "5S8fN7PR3egU6zms3q38FfBKPBS62aUGvJBrGY7Ere3Ktt1jB7oxwJkYe9e7WAzZyKM1vELaW6rMUrxoyyy5refc",
  "key29": "QTaTconQbwV8FTM2DRfAu5JjGTn1uS19KomibGRsPm8nUAxYs4h72LwkT8S59LL6iwk6WDopq2NqBoVgmaEnogW",
  "key30": "5AcX8v7YdJkVLjSJBFwjhbeY9zX2kzigcjm6C7MT79qRqeNMu5vaHaCqTVYLWUvmsZm5qtB26CEgHRwTCHGk3UV7",
  "key31": "5BrSwUxYDaqE8UH8qcwQvdsN4Pnum4LvmaKon6oTQNakpHh8zLMDEYZJYEaXaNy5zFxRQCqbGRu2v2rNkYMTtGFE",
  "key32": "4cSiX1NyUij1XV4qB3AzQqe4hh6QkZX4V6joqHmp6GbPsTybX1JtmVzz29GBcKJrhJ1mLoNXzCbTxvaURyPMqk6o",
  "key33": "3DuDqH3SWu9m1DAFQvH9xzdqo6Ptj2mseM5brt1ASMNPGCMRdG8h69R2qfWTwHAfvuAXWDX5VdoN2TUNTvhQknoL",
  "key34": "5a9QMzGVkAKFT1iE5zioAkaGgxT6WYbGGi6KDLXv8q6svthGTQZ8wcUQYWdbUzCEAQw9hVjbgGW5Mc6cgJoEdYto",
  "key35": "65wLYNEFGvSzn9qnUEF4D9C47xhSb1ZNFtWadwqifNVMZfeo7y3XCUgNcNgDvdXdg9mKYJAAQMjdCyMwwYVdauMN"
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
