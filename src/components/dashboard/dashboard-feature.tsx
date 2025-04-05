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
    "94XstN8TWsdPJEgPhzvv7mdH7bCxTNgKSxPpmnSouUZHNzzJqWqE3SaQ17So9U1c6xxdU6r3mWzXtrQQaxQsW5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Ffbngv8GgGxnf7tvFT4BrBBFc3caNpmtFUKE1kVSGm7X7V1NBzxuVKEi6neLq4DYkMVRLT8xxcPkRmcDQSREsv",
  "key1": "3kAJE17U92SsBgWuaiood31RU8EaQbi9vuh8yCSput9heuJ2Bj4TUB5xkyVj1R94b7dypZcn2jnG6xFVgCWJx7LZ",
  "key2": "5DYMHH5sFZZVQUXtYhxxSFepm79Mcs24vQ1F3aEi3o6ZP3mGe4g74fzvR5KzRvwLKsjHV2XGukYhJbVT2ftSCHSJ",
  "key3": "27G6nKn8bnQuWSkNK8LJfmzcxRQ27J6UrnYitFkeG23FCnk4K3uNyptYgwKbExxswgVoUg2KhfqyTc8mbX7NLnJM",
  "key4": "5bTtnXNE6ALLe11e58hrUft5wegbmbokkTJoQnFzKntLwD6ioWYPYjDwXw3WyRrV2L74CmN2k8TaKDi8RZcT74YN",
  "key5": "3AMP3KBmoGt4z1VpUVtAVfF5npmCzu9sbUepbVgzvDgMbnuNfNkkuVmaB1B17Hkx2x9WnVy9cZnB1zvUJQUbBehF",
  "key6": "53gGZtfDmktyZphkuJeomtdXEd4HZqVxjE6La4e9WrSRL66jwx4jenJUZ39pKU1zyW3sLY15Gp9n54NSqK4yymja",
  "key7": "4SpYPw4ygBMdWYeGoZdeetXXRv1eCgdLJrgGsEn256jcQRn845M8zo231THCxy3Ssx4xZu8EF8RWA7DMvKSDPVKF",
  "key8": "3NNBX1WXKj2CEvT97b3qbqXCH88oK2WPrWYJKJWza763GvA5bP9kZEASAgxSWTTf9XrAYqNVG6T8NoRsLvkZi1tJ",
  "key9": "5A3twHKXybooh7N3gc7DrWdfxT6kwjx6EXQMaCqrodmrbeHdeHBEmewegDmMzpwgQCJrm9n7UmRbQs7zD86ZG1Ru",
  "key10": "3o8F5UjjrB2ykC5y6a4oCUMrgT6Rq6LLvoBrwJJyQAn9d7zBWtcRsjdnojYGuabNfWWMcwmChyRa7r6aWEZeP4q3",
  "key11": "4Jc3sDNVfLcyeyFkshqqqKRR1FYCz1Zov8NVR6HfMgnfrifPx5itFy4EJUfpjLirZXnspE4QUyGSoNm6cYrqDfST",
  "key12": "NzSbaAAmzcCuzGT1Dyr1c8wpVGaSPeGnLNVi3pf55XBzemHDw6LSjwnNCwmmztf3rKNPCRHvdP2gSA7CJCFCtAu",
  "key13": "YXWG1ysahSZiqVMn29BLuX7fhRB2nDhJ1syGe2S3pmjaveNoMrpyJ27ZxbQm28sq9Be2vrckSnrAtRYEB4HBLn5",
  "key14": "ttq8MumsspBV3VEnSLX89h5HcRHHGhKad6VApMpkMxDm1HQKzWCJy53LAWYKmzAUGxqWC3QuNQSNi72j5U3mGrd",
  "key15": "2kudxSrBVZ75wxBCGZpVf6BS7nBbWFwFvHipWVU3eoa5iRFHKHLBhnknwvmrn6p6UfG2N8ppRTAiBbaY5QnYhrD8",
  "key16": "wbhpWxWJVHwUEx1gn9PQL6mf9B4M55pj5JyPPhSHiuKJVYCbN3e5qCpYhsU7FkyuqVKL1AXgnaXqSoNWUgyAMat",
  "key17": "4V7detCwBryXnWkXM2KgjmkCRjmgLjh6f2DgmSbDvKTdJfukeewTYBxNSQaX8Ly17SvD9r28TuhzJWf42Zwrm7h8",
  "key18": "ytzABDdqPqEsXafMvnk488ZTNSDwnWtecCSZjTQGwPAe3mLTcJoWR1Cw5b4JhsBiJFe4ofAHXvmZatTYEK3QP6s",
  "key19": "2JvuL684tCN2pd4gY6NK51ofJm2QUhyHNgcCnajC5zTVcyY2indf8iNaiqvHAQHyjxRXYqTQ7mRRPkeihq323HwW",
  "key20": "2CqLKn3Bdd3ef383BdtroJHMDgN4D8Gk8S2kCdEJ4CbRQmpYtC7TyhdPkaZxo9WZu8H82z812wU28uYpKPmkBugt",
  "key21": "4oGogsdguPCp9vK14QxoeTpiwSYKPN7tttMMCGSzKk2LK3ZY9TD5j5ttQSBjdMZwGXycDJ4kA15PT4WMcuundvCb",
  "key22": "4xzvwiw7LbPD52CUjEVntgjt9F7APMJeFVutnWrgJHf4drwPmHUw1vctja6hsTdpxsiQoRCvHqMjuh8PiSu9rrkZ",
  "key23": "2PnCc2vpTcJB8afBGC8QJWoee3u4F55qyDfyyvnAAfRoge1uyxbysUAKqUUghMt8EjXKMQKgCVXbtDrv19wfKfz9",
  "key24": "62aeoEpQAvKkCmptCDNWrJgckyUh3YwtRmzorJ6eDMUcByZvuqpKf3J5C5SDo8aCUevwQXSSXbHVEhcU1ocF8rjv",
  "key25": "cjTxxihoURmkscPwcJpnw8pfuHfHKpAHaQt48ZBYm9GsF8xcsFXNNsAiUgbu45cV67TK123EPjFTq3ZxiMVGtgm",
  "key26": "kfjk4h33R5ePsJPWQjW2dGHgAAE4H9yaPju7FgRQgDGF7K3Gsrg2J6LcQSNaqekPDWPYuEYaTCCsBzL11mRx4LQ",
  "key27": "4AXRnMNYuQKyCxgB6J4r13YeJDXobCvfGxp45fo4kkwFrJkzTSBTrYedyzUxr4vwyGcFTBWCmYc8y6a2t1Kg4zQY",
  "key28": "4bUaUQWbuD4yS88SaVt9QgsBSk53d4gcv4ywPk9EMzrJJCSu77M3roMi4sfaAzniDJNSWwDr9mQ4M28QxAzc5jds",
  "key29": "2gac4G44g9aLgR13Uwi7HgoiewAV5eERRg2CdhNQcA6CNA2whV6XsNnSm8V5YmLwBqAsff8xpgsd4ZTUnDdeUrZA",
  "key30": "2YWNrYgdjo3nk42ZRKBKrTG4LQp8Yh6ykg1FU7V9jy1dkjWFeSCMt5Tz7nkZfRR6HfzBPc2RbKF4n6mE3gBjuDsS",
  "key31": "5BYQ6A2gFYLeosfM2PDXPZ21kcm1vPm4ALtycuk1t4nN6ZKA6uq5kuWbFDXijTA2J7nXNKz1Hg2uhXSvYoU4wdiq",
  "key32": "4b5YcrjFBhp2a8nfXC9jAdsfToYRjPiL82eDQATNdvwjST2nzjK9V26hom1Kj8EFCynSdWcJytafukdE57kxqg7D",
  "key33": "4DavwzcDg1vdCx1zXhES9ABsL21kQuQZEDauheMXsQGRV2DVb79nGGK1emo1N8pP4iQkssS3oeppnFHvMn3mX1y5",
  "key34": "2Y8aJVxcqEchZU8Uomz74Czdh6LB7n68JCfdt1TM5GvfDQ4noCHk1HxQszr5xZzRg3L1ogrivjn7ZrHR1oWjLnv7",
  "key35": "2Guxq9PRmGUpPdMQyuS4zW9gGFWTovAWLmawtFWZa5ef3oaWWHkVYRvBcNiU7vg5THq7m8Cw2d3CABvTScwoqkbo",
  "key36": "gWJGwpLNL2AKYJbCKL91T4DUgfi94QukqkMbcwXAshPK3w4bNTgDnQ6eFBtvnn7tNAy2uRgHL9gBcWbBXDC5KL1",
  "key37": "2XhdgDajzJVxYjq15Exi4oZbFD9UAySSxEHRQ5b5FndKE9ehY5Pk7JybpRmZKpT1ytspSoR266Ejx5MWbD1xrKpJ",
  "key38": "nsYcBKbkBuvM8FzWg4UQ12AweaiDge8rfvyNiuUqEtyR4mwtFVPSwf22rLF6x7DCcpTPiDPsasvZH1Gin5nbx6U"
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
