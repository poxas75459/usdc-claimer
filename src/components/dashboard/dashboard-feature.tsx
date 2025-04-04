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
    "2E9MT89PRbEy1RQPUygE3cpeobUsezSnbQMGfB7FHHWYhz5f55BVmBNJcFKLNyD4NKTAWNMPTuVuuoANFxQxArfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hrVXnVSS1N7Ax8jErDMPjard3tpjYNZumb12E3jdJzxDoSAVi6xHf8TXP8najCrDQBQrosVhCARkytZYUUpHmet",
  "key1": "C5eQ2CCCd2v3vioZ7VZoPEUHgQA3vt9DsFtLGLKPu9KRhcfgfgTMnQxwg2HPb93Buy5yQLNLK44aedfGTbhujK4",
  "key2": "3oA1ponsihYmxqE73o7xXAh8M9AeKzMKUxe3MA4BBvgQZjgmmpWHUJcCpetXojJKFmbzdKxS8zWTCvc4vvkGjFBH",
  "key3": "2NhmfvUZE7xBhc9iMgLNf4ud3yNY6YFS5PQs63yRkZXG5V1VU9CAkbXfyd9ePBiJJc9AABYzz2ZXZtzdNdc4MHxU",
  "key4": "MhFC3Wd53Z1M8LxvQ6wbbkiAcJdXV81CN8MkFhPy4hjLY4VuQVbdeEbFsCK8BaatGiPXU7Cag99uE7UfRFpypEP",
  "key5": "3cb7yANMyjW2Z4mTrtTk29p3zVCi6BFa5qZ8MrxPEXyK8X2tVBfo91QPtecaFuLkincVtNM9sBiVnwP16S81miBD",
  "key6": "CkcciSKGYxYpPudrnztuCK8oPmEKWkR7xAi9oTMXQ9hE7dutN8gP5ruDqSRD7QJn4g273gVu3VwxJVpGSc2i7RE",
  "key7": "fffS6117gogN4ci4SoyBU7VL6g8YNZ1FkunXgLXY4DXkB3pxN5WqA48Ca46Tnshe73C7bueeK1SzeKJgSQn9J6Q",
  "key8": "4f2Y8k8DkftXV5xwA8dJfB5UsmmLt2dy9W6SKpMK5eAeQYZBiM7o9nXDtLJB7crp4acbiJ99J8HfkfrCAkARJ52X",
  "key9": "y8VG6udxNx5GY4bcRReZX1ArxWrWAPT9CeBVBYvbCCPeSH148PRBDwtzvoKJZx9FcgrYqwH6gtJ8hQWuNoYVvcY",
  "key10": "4wx5sT9dvbmDi9V57oQrppdaAKV7ng6Q4zkY7eUvsAxajkJ8BZEp7q9P7cpYwf2xGwBV4D49PihyuCjNuPwXqgNB",
  "key11": "3bTLNC3nKuRzFqC8127AydK8P42EVpeeTWcD1Ed1F8CathXCR26ouontikWWFVuUWpGmwviD7JHtTTyrsCKEysrg",
  "key12": "3RsRJG8JWtcqgHwZJPujdPMk3ufeSSsZBUwm2a8eiEY9YFZ3a8z74eQ3Y3p3C4FUvL35nHtQFBnxCkiJNCmtECbR",
  "key13": "4bivKD6fX4keHwuWDA1zaTLXbgZHQbkD4kQwyWcf3Fj5JCq4VEK7SmrVfRFdKz612T3fwU67xerbP7fnxiZP6FWk",
  "key14": "3LDyhzB3wAT4Vtat2oaCYddPzz2QYN4hYZbhfx4EfVVr5Yj3Cv234hrPYXT2xgCzsRtUJKU6HFPiEm8BjKcC72Ej",
  "key15": "5WHAVbbmJnEFznnnzDNRt57fEwrWafWLxx54S8CZz6sFJ2PrhoVFJtgo94hPZFbJSawZwwHn8pKFvvRffzKwVpLQ",
  "key16": "28RJXizpv1vV2kzGRVwG6HXPtX19Spkvhj3XkHDRsP5zw4CfM8W8bjPBA3j2v1YTs2X8v2hoPU9qWrC8rJBdd4K9",
  "key17": "xpRe6se5GCzGqSifCCoWSS8nkCWED1Eqpd5Qwut2GxLtLkne23NcQYihggBz6ifz2HZ859YzpDCUDjdMmh8PFdK",
  "key18": "32nHqhzKRg7gyvTn16CvznYhjQi1xU8ZKfzpbTWKv7JqhCCDgzdcLoKTGv1t2xaTCKsHtadXssN85zB51ivMmiX5",
  "key19": "ofYYc3EQaSvkE3tKQR9j4wdZbyVqDmqFhM9uBEXk9ULmmnikMxPTtgghwdSkjXbA2zkY5ehqMAC4ZFcZ7gfYmWT",
  "key20": "5zVy4yb7mZ6RhtnJJUfLvZkcyErV6pwN9HSkmabboomr1Ai7QUkxCB8xPHwdxC7h7Cd968kwR6QMxqrFrqfrnwhG",
  "key21": "5p6EbLZ3MUYC6rWuDGMGikSEKaU2CtScAbYmSgEzPCc25RQsNxbV5YQJX4L1x6pLVcTEnZmex4DD3k8bqQbrnPeV",
  "key22": "7poht4eN1ETcjGZcRu4j2o4MihwhmnvVUGJS6DWMuFwcjscW7u3Ye1LVUJSJNMZnSniHytc7BLWBCKzbwXFsU2N",
  "key23": "49qrkHiVPGf8eR3MinAidd2yccokojaQGqW9P5RZQwHeX4sZzZ9NzJAE79A8Uh4b8tRN2s9Xu5BnRj2sk3iiHq41",
  "key24": "52DhPBrRywtXRqosNzg7WVL3hRTzu7p2kDGWUMTUnLup1PeX9yPVVQBFfQzdbws1yA89o9ECEeYgR4WCwqfteUdW",
  "key25": "VRJVpNAyqSFTVs9Tg7bE1r1bgYgPwCeUPq1EDdqueVy9G3BwmJnJxmy6ATZwHiHEfivpVMoSkFH2w14hEsQLMSr",
  "key26": "28zgQP8GtvfqESWjxc21wvtdo9pezx3RcVznhdYs2Q1EvDWzgvbFSNGr8iZXmwLipNMLVFMSHgjnA8vF8Lu4gMht",
  "key27": "7Jgu51DSSsa1r9ZTtc4eNYUmpV7pRk6wimjkiCCBXhmoW1MZ5Ds39uiSQLGCPJzLRTC8jFJgM9teGKg23fkLmT3",
  "key28": "2FRrGFAihU14FkzA6tce5oY7LygBYpvUpu6DfTyxzEbm1Dm5tGREVjnMCutYm4ztMykAkFCzg1Fo11sCzd45znpe",
  "key29": "5RTEUZJDuPYkWVbUpyqkcRcFCCttj7s6xDHh7CmBeJmajZNHufGTE2P2oPSznXF4RTD81vDs7GrxTHuXooZ49Kd1",
  "key30": "4K2bEhVAodZe7SE3DEvCuvw7nNuFC5PV2UK5W9MNkY47iE2yNfJdjtqST8vsjxJgDHrpo6aa1mWy6yTWHf5pXpUg",
  "key31": "4dgBA66HfVGg4FFpSt6Mcew8eaBsKnfAQUjNKSW9HwiQke8Q7vXLXqcVcbqVw6VkzPsN6tmzpCL9JSVY6AzkfYEu",
  "key32": "43NSHRfSW4LqiEU4BQmLwChkoA58gfXu8o3vhfs7W1TimSnRWuQgXbpj39K3B74qFEEKUN1AsqR1V4JbSEo3Gprk",
  "key33": "4p24MZhxK9ELsSRX7xdTAsmn2QZsisDabpcCpomXHTMAWH28RyrhT1Whr5wHtWe1vvgDZMpyMVY2P9iRvtWKT7Wo",
  "key34": "2PYKSMCLqf3wNmQziQeNw7WzGkArfTsn6DHh9BUqGV7rF6ib5Sxz1uByGMMgK8vyh68d2qJmCEBb7SgwjfCxxp8r",
  "key35": "uRNPeQARgvprU6xztU9RGgq5uMh1F6rBrFuUQvSaAZjgzcxatrF5ZoHAyyHtRHyPjyqkA3NuXi2cCNVbnap59KY",
  "key36": "2JXZQZj4oMUgU3kZY8aXzHtAsHURfpCofywh1ivF8Ppjy1mtzJEmFFL8P74wKXdmBBUoy7u9z5saPVB9hDsHuLxE",
  "key37": "TUaXCmp4AR4fz88Pv2FDZy89bo3r3nTY4CfWGoYxbBsqn5qY2DE9qPcCTcnjtDTRrm3kSjQGXnAt1q81uvmHNdC"
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
