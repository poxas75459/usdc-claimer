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
    "3tvV6uDbNw2k3S9Y7aVz536XF3CbP2JPbT6VN2WZ18PqYa7VuKQRBFnfhYVNb7sFiafQx9FPBDvLyGmTdh7s8zMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KCCqpvgZ9dWQpMZt9Bsb7WmZaT1geMitmeUUM8WzRNVQV4LBZrVLJjiu7WsKJymgBbMJqRrJYZ1YodseqqAi4K",
  "key1": "BRzutYHtZdCRSitfC2yZPrsUHoSmks1iTdrRqodhWEAWDHWdTX2JboRV9Tt5ioVmR6cwBAqFx9q6XZXeRXbJL7h",
  "key2": "25CwMEExxqWydYWGGgyg7urqh6X185YJoUkqxbxRYQELmFTyzJbbBcDwumKDVdqGpj5MtvtDn9U6KjkUuTCGXd8q",
  "key3": "5bGk3HCV3htT8qSYEWv1Bwr3fYjLFSpnQg9VniN8NeQotQoXXydDa3D1kVFgjd44qQwEKxhDuD5ZntThHXeUZNBX",
  "key4": "387tEcq6YjEL7LAevyJdsePR1y5n5v6ExJegrgQNt5csei1oearAG9n6SrmQbuc4Pbt6a43W3uuszPBUHWfYFmTx",
  "key5": "nuXPp3ARMc5339mZXZbBVbY3uDqJmEKpMj1uPPxXSN41uJiX4cL3V58GqAAX1fSswk7aMGezqpe5jwdLXp588EZ",
  "key6": "3B2FUnQicCVJXNWKh8HRZSCimtX8xjJJe7rmSFv5NoLH8KdgLjFbu14mCeAniP5gzE78BU2MngfMJygVHx4ewTY8",
  "key7": "57hLXehUvh7qCYmp5C4AWSuJxia6QvWosgusaFGP1RMu2nx7YjEou4NaBTU9JhEc6h4fSGxEtKt56WCrmqYiatgX",
  "key8": "28Taasb6Tz3ov1QXjkEZUddwAttUPLSALrddQZcHfdXtUgaqvY1dNRbirhp9nSVvk1SE8mtqz8uW5YgPqb57HJGG",
  "key9": "5h2rSXqsTGazaPhs5QzzhyrV7rCMtDVe7HpEYe2kjTnVUjEByubnfrp8So4WvQkvx5gUEyxtgdKu4KWVUbjphuwo",
  "key10": "2pMQPp7mZpDqS1UkrvbcTCQkZxkNNs9duZ4MUR1QhLT3ecV8otSDsiHyoRj4vxUEvx47SsJVjDzrSskmukDTwVSG",
  "key11": "3qDBstoqEui87fStPWHDYWw5YEfiyFpQ8Hs84rkLAKqpvreE76UNVpYx8dhKhwUsQH3ZBr46Q2DXpTNc21DmQbRw",
  "key12": "5CeGM2YGDARs3oK71ckSCCfZrza9SD3TGopYZoWupSPaNvmE5nFjdhUoVK3iwE4YjhZKgMbM6AL9HKszGKCfw5Hz",
  "key13": "4E8Loes3a8LtHQPqLSUWFeAZZR4QEtyFaQM5SL4taXVQGM47uHMej5eutZrBXzaTQSGbYitwYp2Xzisx89gs34wk",
  "key14": "31FG2MzNqoUAi396KqBckA11YuthbtKmKyHNLv8svkmNVNR6FbPRr5MbjjmXLmwfU95zcgN4bW8VKUZUe2N3VPJV",
  "key15": "5RVf8qq6NRVWHyAeQ4asTMuE94wMpUXy5PEuSvfae84bpqMWboYxvrERPp9kcMVfmipzF1HgCRMUXDDwt219zZDh",
  "key16": "2KsL8X9Ysqq439pVwHmDWdWqYPsTzEMoYpi2DRjCuXKTLqjFykB8pgji9AWrrZT4jFHKc2okT5fwrXXXwsEpAzfy",
  "key17": "2RTPSK5XXVVxL86G3BKT6kekLpeXbiPJcar7ayDxPuzt9q7ibfM2yqZ3kCxr6NXn7KNEpfZA8U2QtXHV9nqHgkod",
  "key18": "4VNYcFPi9sgkQxq9wPG8cVRij75NZoqgDh7KTKV4h3z8jz6C8oX4LhD7NsDvvLrJUoarCa6NpN3s35Sj99FCixU1",
  "key19": "4ke7thC3fNGz7kKPS3SYNvKMv6kc5FcKWHUbXBKnnAgfQnfn9JdVkHpMmZLjszjr5g8h1cPibYSbtmj8DGRVxyKr",
  "key20": "3NN8V5sr54kQF3xjN6ML4Jq5MB8ve41Cm6UESMqdYGahEw7AsHRZbzBXUouTPFBv4MFVABQgxPRgHuNFYS4B5mz7",
  "key21": "3LP1baUrAdNx2wdT39zGTDfcHdjNTYSMuFP8gK3186DqYqiABbBUtFers77oAon7CTQfgkJVnwQih2MwWaLpkLSB",
  "key22": "58WsHawBbabdnRH6e5mnk6JaepTEoJcd71CHJdurp6PJQxc7XeLdGrqg55jApfkw4DqcwwbQTDcF2j3xrxQtCqry",
  "key23": "TkaaVMmtF2y9bCUxcYnVD3Thdh3JUpEMy6ZUna5vnnjDSbbXTVbCaU5k3JDUKxS17YTHSmC9HFpVK4yUMuPGDgT",
  "key24": "66M6R1WHdb84TRwnsSka1wNwWgBCVvtY78rPtDJgLkYHj27vhGVWWtfE4c8yH7NsRkwwwHTsN2dUphgUJPAMRZR3",
  "key25": "43MqumrxArULe51V7gmteEGVTpzK36WNKQ79oXMcfGC387uv18crtzLie1AfT7ArP97aeWjQUp3kNLSide74FPgr",
  "key26": "2ZmFipEFCWugwe6pzvHV3S5KMfg7SmuxXDwR4YBSHskEWrWckSQYmStrbnuhR7GK2fb9hxtyJi8W27Rc9sGdm41G",
  "key27": "5buqoMAjVBS7FQHsqpsb9QbardazHJ49WGitexKq6tRSQUjzH6m2oGfjSsyMLDMjqmFEj4bo64fK3X1NjgDGXbxx",
  "key28": "493Mdknuvs8JTdv2Wez6PDefmHPjFpxzstKHsKJ4BDzK3Q82mMZM2xBi63uLbCaepujPc735MoYkoYj2FxQEmgq3",
  "key29": "61TBYCcNB4EsGbGEPbSkn5LKcHgTAADqpsZmDhLjN5SBbXpmRbfHj2FHLUK8zPURvGnQDxHEuB5o4wVmLJLqJPtZ",
  "key30": "5jV8TG9EvRCX2NCjDwrcZxmhf7uVqDMg9UBBqXrDB5mA7Bowkf5popdiVUxpr3nuWJPcnkDrgfYx2ZQto5jLs4eu",
  "key31": "4yrDwjQeuMxqJWiCGoWahdrj1eejw7qJwjKSZaSjYZ5o7gX9wu8yySPBEQqxbW53NGGQyd4p5CCJixGg3RM9qVN6",
  "key32": "4dquzfTvTYb2nfKaBY3bZd6LwicnqhUCGeApcMQbjhutUkkpJ8QnaEAiRU93FcMMfUTJ5zGPw87KX95ogBidGGuH",
  "key33": "5eVcco6EjiQrx3jrbktPftDA3iYV96xHcMwC6zCFfhUXiYAr6eXEzqFXmHF9GbgwKLEp3acD2g85FZim49QLSgqc",
  "key34": "4pt3U5hU5y4CcKkH2FzZ74JSR8yrBQvytmaHmz1CP2f8n2PMFs5FbzWgfcdLTpSBet7o7ZX21bLkB9hpu29vVLYJ",
  "key35": "4n1GrQtB9XwsUPorbNbNLNDRFdfQPFYb76P4kGxs8bSAR2yzq2Mz2P7vaPW9Adpo3MsBX2dWXHRAakx4PSxtRKj6",
  "key36": "2WKdGoQT25LJzMU7apFEZuAYp28qP5rMSj3uaXmrJxbkbNbgno9vjLTjCUhFxvkyWLAGcabSaH9SLstxa5p9DFhn",
  "key37": "3oC5T74wKLScRytQBLyDudNVyoRUDiriapzPAWVpXdA1oSpeyRFR7RhXF1btBRkYJ5e7v1UXxaGoVmGZqzr3ckbN",
  "key38": "AeDd6RG8VSi1YZtMgVh5zVFFsgeDJLv4k7fX5FG3AyRxdy4BftfQahsTV1RbewNVefK4NCqUWs8ZYB79rmJGGUt",
  "key39": "32Xo2R95WHN3HzpBkzQRvexqR5XhyDRqA4g25nBu3zZqDRXCWCgv7sJKk6rjVH9MHYTj8eanV1rXcbo9MB1hVr4F",
  "key40": "4QqB2eTE47aMPHYoo2t1HpHdoHy4pHprEi4fQP7g6ds7mb8WkRg41MuJX91nxwg63fhWJ9fDLQ3W6wFid7vfYHkp",
  "key41": "pHhYDaQoshXo24wQj2Dtjzirdu7EY6g9h1UY6ukCUDz1Fm9ydmo8zU1jpDKMa2zVNLK52P71MNNf33NSJRgMgfJ",
  "key42": "KDaJVyF2nR5BHZJQGe2Ytr6RBFQP8if1hy3fCTtSwsM4q25tJHaphSeY2wB2oomwqwKQBthZa7BZNqjLsL3NwEP",
  "key43": "2t9MUkM1eincN5LbLCdZhhyoghnsjHexi3uTbcqzBWZLpa2ftyb9qDedatQ55nM6bCdt9ELWHmZUrqkBrHFGotY9",
  "key44": "5aXpKKgxy4f4AEhmpEcjxaXTSatWxJUkWMDN5JuaJ8VNy2YkoitPrcEp5eVu52B6PRyasfnitsRMuKvF2p1tLTay",
  "key45": "5xgR7WwwJAtBBg6A3ALyAtsgqbaymUQaLpHzGJrj9Z8jXRV3xLMkibd1LbJdPYhkxU2mBprHUW36prxrjEV6GCS7"
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
