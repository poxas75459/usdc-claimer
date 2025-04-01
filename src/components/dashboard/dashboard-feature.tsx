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
    "58YRts1BiFSVkVgu1FrgTi4Jw29o3oJBFXsWZu9rZie8m7U2M8Mh6fB4PcNv9KJyMtzg8RGA3infcqxacDd9YyX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vSnQ4YdzLWkwYabHsqetqKTYb9jsG5i48DVrzKDpgtLH6F5Mn7smKgkZtFNBvCbY3H4Kgt5TQNXcgx3gQqSjUAA",
  "key1": "k6dESpLDkVk1cQjv5GRqXTjrsj1yN45ZTWLadcFo6dRcsSDeR3SCkxJYF8Lq8fWSpjkQrvvUX7ikYZuZggQqUzC",
  "key2": "3Xqv6UF2hDVDC23HCAeV1j1h9Xo3JP2eYGtLvDPd7SE4KPkLEz7NvDSwZo4y3nbQ2Ja2Xjcufet6inyEfm9e75sL",
  "key3": "5Q6PhSXCJKQk6TtAFXBpYegizJVpMhrx1gvNjJAMoRwCEv7LM4Fs3ey4kmqzWxC5u6vjoR9mXHx1YPcPfB2hP2eS",
  "key4": "4tRgSG8gM343QCCigyMBZGJUZhqC3uyjDnKq41vjz5EsrnAHpd9HnoytLgYXCFS2L4RtviQwhsov5f3Z5UNqBdie",
  "key5": "Xbhn5TTpLpVKtS8zKHh1gKuSrvNbBxrsiwbWTai7KJbWQYaVdpYLHffCWTMuT15GALbvFVAKBQJBKHSfoE1bkLk",
  "key6": "26L4YDPAKyyTVN4tVES9pRsLkgRmxzBTzQ15kLszi4x2cS4EPviaf3ZsBL9boRJQrt6R2fA2i7fhBt1KVaHUZB8q",
  "key7": "fwVk5JLXzT6PrRmCNPWr6qsfofFED3jVxRTVPwzafhXpdqfZzJnZomHkCRPYvyKZY5NyVKPJsiKYzZpCXSszWDA",
  "key8": "WhqBM6FUMyCPEc9MEdZCCvaBsM33f7VYgQdpdLdHazrZyCd7eX8ZKqxZdd4hVCEPi26sBtCdGDAX9NZJoGD4gzj",
  "key9": "2hYe1pGsgg9r2xkZPsqgqwWos1ojUbfsnLbECEvR5iGS5VPSAQx2Bk1rRBMZjbgRHmuazJXkuG7TvE3K6MsaDmf2",
  "key10": "57ykByg1rNsbDYKY5dvunTzAcnXd3DkniLmWayddH8Ey2APFhV3sWRsgMAePmq6FA1w16hQDJVup393u5Ty8yuqE",
  "key11": "5XKw6WQnbHpB1tuhCawsCRX4LH8TM9rm8SUdkB4MbwPb8ZGFpfF5dAjXeXdD9Cxmnt8kg37Ya5T8uFPNrjsbnNJU",
  "key12": "3sxWsa4ZdoWuAuwyw5LyG6MX3e3isFFtUKhLCxD5taatg9DGFoM7TYF62jKhc5kRZGqk6ACbkX2utTEtsqLbrXHD",
  "key13": "3vPZp8rt4u7Rg4g5Zrk4EyR2JQ8zu5E7HETU8nWfEV41837823uYC2hZoXCsBdfHXJxxocURj4bmEDGAUgz2ZuxE",
  "key14": "44ecXycwp5pmgFMRPkKZKgikLtRQpWPUwrrVwqLwdJ7b3TJCTFuomnGW4ugVFzz8oepJ2gXEygsEKj2kXJR2PTzz",
  "key15": "57VxUwNhVZzrAqdRNEMBnz1AbEmpWVZzLr6eaTuWRaV5GVa5uQPAGVHnxeDbHgwmufNCrNqWP8cR4KqQEzSA48ih",
  "key16": "438oWE4GRhscRNXKRKfajeiq39scGoSbJ29ANx5RCQfNM63U8hVASYyEo2k3tfP8ywQpqm4FfgZk2FCn9Naxxe9n",
  "key17": "25QARyiagjPEimiuP32DkauJGABuU2e8GUsgJigq5zXm6UgSdhcHdbb8t4nCVC9BhUYRt5jCHqc5fL1DKuREFrFa",
  "key18": "3ZUbbTWYuR4V6QdVuyxh2uxUoFfJRxpkTYsXYV9KMUwkNJrWzDbo61vZ8HGjVLwjNevAFL8EsxBMv74k1q6hrUcx",
  "key19": "bRGEcYSAW3kCTpdV5sqTmxy1qNgGMsHqRxNVs3Z14G5mgVpfdsUH28SvBV9agdCv8fzxw5ce23mzBzhx9vtmtDb",
  "key20": "3J4eAQdKJQSN3WBo9kHxjRs2ugreaxEchHeQspExPVtM8PKuiCdHrNtQXB6t9JC7GdMxcEbNEdjPzijsvqTqQGUT",
  "key21": "3X5c3W3vmVTcaRsckcpRTtRg4WJwhw9F2n71qj6JeQFeH2DdF4orbdhCLXkMXfKcdSikSijSNPN6pseXcs6Ld7i6",
  "key22": "59FtRDx7RoHwtZpzdRaBUVxibuzcgofJ2DbC7a6memUAwxweZktCc5iCqUa2augoUPvDebrfCjXjVNuymCSR8hrd",
  "key23": "23RhuEma6Ay7cHuY5obinqLnUSyV2Qu4U9JoTQty3Yqjx99i9dqPja5oQ1tCB1q5N5hCEKZG9fSyKtxLVzvQCU8D",
  "key24": "3Rv8LL2ThsmfrZA7MgTgwdgu6ont11SLQA7zgE8eFPnGnhGEek1mkEBEVzhE3vTsKeVnMuxXDSQbbNyyNzWE9bDg",
  "key25": "PCkJMtbRX7NxZVtyrqsTCAxevaYD5HHfHziX12acNDA6qyn8oSsFCD722TGGV2DNJQHvtNZ6bAaUvszf6ur8Av9",
  "key26": "oWzcSozPEfpyYcBWVRoqa2XpCyyfqGjuSHm7z59awfeDpapLPLCN1G4Vor5ofPHcey1XCgyeekAoZGLR8g4NTKX",
  "key27": "26cnUDYBT3c175zfdnffcEMS3yQfaeDoHsBRprZXv9Ztj8eE8rA3xTgdaUEfcFLA5DsMWiSqFNUZ3wnY3avj9xAY",
  "key28": "3BeZsp69pQochYNpJjuhyrNd3j65RpvE23c1v94sFwBbeGzKg9StkR7MBXPd4oAGGGm8LKWiDv9PeKuWJNmA9Ast",
  "key29": "227SPbbJXbGesg5P4FA9ECv5oQStXjSfpPxeuFUBcBVN7hj9irxSTw6h5HiUikAWnZk1BokXq5JNAgUzs8udi4n6",
  "key30": "2mKnSfUc9j47SsHMsLD1cwgbUqHNBw7RfywzM7eGSTwBmMEgBBronp8StxsrRqoUJDEiQUBSn15JRecsjQPu5u3r",
  "key31": "cmCNaTt91VTiTvLAorg6QZwDz2wHhosGFjzUHU4mTg9UVv3k4RdgciR4bpUeG9Fingu6B35WmLeCwxVXS38swgd",
  "key32": "GG9oESgmEph7ZycPBj8NroFn9rW5dHt47ymvhyzbbuGpgEMWg51jBuH9fFp6yjmXrE28pfuRdHAPdbP2FAyky4v",
  "key33": "E9cQSfkSpyzp5PN3powSdvQVoQnWndLBE9SdyKg1fGHdCwD6Li2EHKWJbuymRuy6K38F41UBW96nxNVzr5uMFU5",
  "key34": "26Mox94aLciBWbXtkR7wYongDBx4KQWzuhHGP3fC5swyyXMne6YouKbp8uxojcWFuBk37VnHaR4viNc5Ck91jW2B",
  "key35": "3kQrscQpkqEXaeUKydfZQU6S75duWzR6c4P8N5RRALPVkcdZ4KPs5mX92obKxc5FmKLJBwZiekrhvXDbhy4J2jUG",
  "key36": "3CjVEmzVkT7hRDcvtFT6Tq7iUpHjfv35wWiYYu3vS9TQrasDfMHgkAaESYTapnYjav6K4Aa4FYUhSyHReuqc2bYA",
  "key37": "4oJhi6cjjF7mhkYc75QHQnJiZPV7PHg83M3N5n1z3zqzfXRtpGBVVFkvrMTsZedeudjWAQEioqHuWTMjbiKcDGch",
  "key38": "4qMxJ4WwWyhkEUDKTcna1VBZbdxdGeeb7T3Hxucb2efdrFcZBmUcazYzERts2sRnybs6eseZYxCFCrL5UY1LDHKh",
  "key39": "4tpbpEajy8FqCWTKYf3kkFzsnxcuKpJv6Ev8dKb9T4gkC4y5RTeERe4FBdzvp5SpJqKcVhB2dnZ3YzfExXdf8Y5j"
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
