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
    "3qsL6ENxsj8yMaMECwZUQPZpCrcnnp7fa872xKtYiuyV5177xpDsnG5eRYZYKUFcNDpbz3RfDQhXj24qoL1Y79G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vs15FcvXJRfdqiYBx8yoHj2YzZxx7XVk9EGrZwc49bWvG5Yt2qBameshe5AzdukXeYr2UMFfkwHsPzPzNifUEii",
  "key1": "2ELKCYEHPGxDQf1RRzbvEr8UwytnMKbDm2L7VR8aXXLNRC9CybGVq7PZb5GqJDi3u6MPSzhDJekMmCKoYzWZha4F",
  "key2": "4Y9rnkLHN3vZCTPgWCCyVBZxisJvbXSNgRfdKdWM3PbkkjRSERENhsB2eDEoJGaGyHkANCYdqVuNARCS4JoRy5va",
  "key3": "tDPgCzaNxDWho4UhyCQ19X3wC4ZbTPahdBGGH26zXMZv2bm7qQwKj8MdTnt59cLcmt5E9qU7LnbFeLpyvY9ZYTF",
  "key4": "5AGiWTiajPrMbpk9oDjJEkxXFN1CVkoyhq7wZAWieGAKYAFrpy4cp9yjjPozoX6SSbTGFS9w17QrQvcRxJ2DUv3a",
  "key5": "4SFD6HTG8HpecrieYwE6822GnnELcRh4dXvM3rnhs3cDHtgYAfbZEFA3Y8SfbGdhetBRkt2AtxCJM5xc4dPkYWB2",
  "key6": "LeYj4xmRp4g9x8xcFFnc4X8Wv9hGDrSEpJTubkRTWYJDnyqqS6Qy5Ug6uSJn9hxwgGUitSj7aWYMHCcKytwt2NW",
  "key7": "2xuPg8QTbYnB97p4iEuEp4cqSZUUuKE7eWjctFZpcai9fHc5Lk5dh35fxNEYnrJ96nVdwA422aguurvZ67jSiBAb",
  "key8": "4RFRNBi2VVumQ1etzPHeNc4DUKppEG4asZWNLXW5GH8NTkpK5QzVXHG9kpVUoESqVQ6xvbCLVF7KToNgN2vr4rsc",
  "key9": "2eBmw85G4jH71skF39MhDwPJHNhqkNVVoFHB6vTeTJKGgcV3kTs7NfmMqPbZHHhz198K2Fy8UoxmCSRbpTs5u1PG",
  "key10": "3BUGhAzxvTrkAZMtzP1cQt5FgtxeYdE1sY5mtAVVSbrEacFKmsXh2WF3gHSdvXWGXJWfmZZqM5XTRKXMhHwYiR59",
  "key11": "4mGoFSu1sqdAYe1Cxn3kS46g43xpvpFA6421ckpGvkdnbjQK2t19qaeYWdcRLLL6CEB8G9JiAbMhdbvSp7FMJwn",
  "key12": "67QDMxGzMCmWW7BMyrx3CL3hqtrYJ7sHqfTTMDZnCrr6GfcHXi3CoZuFPmNNAkHMkwPyVEsGjBzjVgDfYGX87iQu",
  "key13": "2ycm98LPnFUMxjzpifXRfUbWdCFCwsL5drwhsnGaiSNZWdBbyVBd338H1tCXLrV8dyWGPTRQwU97fi4xHGRVDvsr",
  "key14": "5Z6VLvnLu3fkXzB8ipdzv2poVVwDuwcPMKCxKk2FdXY5SKuJFsdJbStPDeU2N8NL2LW67pYf42sH9uEY9xcqWPas",
  "key15": "4TBYfy4qJ7cwdzkc5orMfrc8XFznqmfHKuA5LiCnKDeVqz23DJ6bmuNFCkdjMAuVBHUMKkErkXExiXTFDsQgDErU",
  "key16": "2p9qagotD2J5BFrUhHP3HrCtjko6etbArtSjc7ZghGuFmWFD5qdZdGwBMhSUYspCq6mYRAdRqz8D5uWKC8JEaqyQ",
  "key17": "4r4yupMEXsScPZAtbBRAQGc5XFmkT98rA316PG1n8gC7BpLJPqeFzAUzNUZMUcjotZApwpEGK5jpa9yk3XpbSb6Z",
  "key18": "3mHmeMCxYKqxMmXuJrvsrTVJezBejZRTUz1cD8CuLSdcVRzW9ztxm1w3peng8SJ8uAtdFgXFkBgXqv7JtAt9hn9",
  "key19": "5puoJP4oM9TjpzpmC6WMeFMVwj6b27bAjGoMkVnWMAsN2CrKFPLmoCN5N6AwEGEkUeyj5xBFhApYvKU3LiYNyn1z",
  "key20": "2vQGhrvyEkA4cgqPiTg2PwmUP8GaFHQXxFU2f2oUfR7bcU4vXiR7t9ZwxUqw4cHQgK82eWq5BLfLp8812mUeXMKk",
  "key21": "2G5QWabGsvXwGz2i862rgEL3hxGJQYsAcpudwgjrWqpeAeR1P7LzKsVH8twDesmTdZmvo2NcMfdGWb2SK5pvLqSN",
  "key22": "2QFkx7Vk3qYbLUtEKQQDAzwuiBDHXu6tEMH61WqmBQYLAAPv1kedEeBoRiC4yHSLxdSHp1iT36PxUrSHa9h1AhcU",
  "key23": "4Yu7qow3vNSpLbDLZagd3pxcyvWx7WQZj3iVejuf5PbS9g4fCqyY3hstGE3C9ZbhP4VPNxY3zB5FbgqzkdR2ZSfQ",
  "key24": "2j3msdubusMUA4bHJVWCJQYCHG7h79Uok6QrZKjE7uhwXxkL6mXJQS5szBs9HS4p8t9mX39PS6RU7EDDrbtLxXPR",
  "key25": "3JF5Gk7qxJ8uQmCg3smLhHrKrTdsRprEJ4SbFsY6AgVFtVAPmQCASKTF7QxZERdZtSgadKEPXyDp8Yh768qV4WoV",
  "key26": "27NesXnuDnNypAgwVn9gGy9Qmw29CWVtSxgT72C1S47ycNFSJVsFEDeXcSJv4D9djfpaZ9XCjDzRu1R86gzWMpBK",
  "key27": "49F9KW4CoYW9V7KrpRTShF3REva8sm4euV1XWKxp8WVFiZE1wzGEx9MmyMb8Mn1KJ3N2FCZRtMq9S3TRRoVJFvfW",
  "key28": "41g2ysL3ALiEDgWCWZnExmxfgHJoKDhcqqrta6AdYKXXgazYojdvo61wrPTJxLfjK1xkEQnF7EFv2eCVgGEhsttQ",
  "key29": "35mvFyQzfRmpeEpVSMyKxj5rsWvduMVhbGAhkoXRxXMyhmSkuRF7HVMeE9QB55CTohQgNibQAXRv5n54pZVxpP2F",
  "key30": "3YWC4ntQDMeAkax93F5ubRDoGaQYsv4GYUGf4rK8ca46SWFdT7eRQfCf9FEywUFqogH7D5zjebMv1aJAowBHNgCs",
  "key31": "4z8wnbKvaJYu3dKecwodAYCxegi9UKFDXDbnkJnztRegHcxG5sJMPvw7fuHccig2kDfYtnzTH259uQZqkvBpiPdc",
  "key32": "3mMBhdagu4k3rmSg5ZBJLeRdf9QGFjfbLzEqYW7mYzj7vfbGXKMBXHa7a5rNJKDHCFuJDFUVxamymJ5baa2Gg9sT",
  "key33": "4T7SAm85YwwYXSRvkapnreQaqsVU3VXDi2JEffM916BEJyDv8yKahpmxvtx6hGZ8CqcRB1AjZBFsJkQfiJzzcXeB",
  "key34": "5uXn1Z1SK9jT5hwBf4ENzvDkjPBV7ymaEiDWR93vihRmMbLoj7CpNGiLT9G9EPbKeefs39LiCpAU3rxsPUyhF3gK",
  "key35": "3jvkV3c8TbEogVmuhoQfFECXGBn5BDnBG6VxBLkZBtmHxeUGkafnnvP2aUZwuDhunJDs9gRLgQMq39eSNt4veBxB",
  "key36": "3FwrVeErU47XKqHTpdtmF1Tz9H26MgAr2DCTd8coQoyKAHeZW3KMivH4MmURuMyHkpMghoM5QsdsXPw7xUXoV8zc",
  "key37": "3YjU3FsdAz91CPerUm6mqh2prtPHyyfZzTDCtVHjRzUQqytSrJWeeupiN3WqLikagAp7bx27kr5dZcMwNJNw9BwZ",
  "key38": "3YmtEqyMa3cYVGWQqSQDAZjNkjr6d37oxqh5iycTvJdPbaMVZjPt9GLh8VXqdqBcQhUyj3eaia48NJ153cMuK1fr",
  "key39": "5h5661SfmAYg6JjYbcE4cj8u33nyBpoQw5VqUGXwhS9j5Erjaj2G7tGW8XuyK8EWzQRi9JN18Ls5WtaDCyqc5dwK",
  "key40": "53PAi4e2XJnCX531j9bPMVNxkz1cra5yTK1yp97pnmWCkuSrYf9auy89L9eToBEYLK1miQDpPw4gNWVd2AreScp6",
  "key41": "45mn3x7K9gRHtYiEzb8f4cWySiHHG3RwbojS8w6xuY9sZg17BYFeXwTfMdpZ6GXz1XvWuasvPP4TgPiQ3asU3DLo",
  "key42": "3QdSzRcAVZY3ftZ8kAY9RiRF3Em6ZJdKvy2Z6GREcx6UdiA413v7deob3tzaYTtJFziJ2bxVaT7usZkApYATK7RN",
  "key43": "3aeGu9652JX4gNoZ9yY5wW4yTBMdAzzh3h3y6cD3G6W3frbzxMMMtuvrukjWWq5CbWjAmZrRCTH57L8wH1gqfa19",
  "key44": "iqLBzCksamAtGTdPb7WKRnSL36FjmCz5dQTZTmDsa9SUtCA7HonPh1h2eyuH88rnpnvzXNSumqHsRvdw16khyou",
  "key45": "4fEtFTJuWQw8R4mqi9FgbXB6XfRF63nsoLnrjqpKHHxwyX4fjuquzxfbZNZgDkX1iHnKomnVcvS37YiM9ERMdCro",
  "key46": "JgmpF4zJ1CoT3GvMdmcrj6YCPF2pxmjxYzMADTaAxm7reC2wYnHqU6MrTBCwwEHTUtnLcH6jQ5RDfMjSTXD2Xsg",
  "key47": "61Zb2TX17AKkhvAo9hkQLfTErU9ZnQBoKkHW1srdRuTXmWwxxmDZL2cCFh7D9qhQBLVVSExQypefPDHvgvTqo4qy",
  "key48": "G4eczBU77fvrv5P77GXniQKR2moWkDhXHJwEmb4bJ9pNtR9rBQh4rMwM4xeAYmwqKRhvBWBrYF9jkqrfSvSxD5j",
  "key49": "4wNL6322BWbUvrw3AdFmruWGdueqKdws9FPhiWbJjy12hHgdqAjHj5XsWhW9q4sj76ia4fLKMb9twvwkofPY38w2"
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
