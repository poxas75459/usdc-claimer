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
    "64d7oT1M5im3nUb4WfWYFEvuLg5JAWdcmThYpDnigF3U4YG4DMqxGg6HTngmw6vYAcQSNL26pZGeiAp98CnHBrB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGbCdEgaKTFvb6sD3bpMtDoNsxxfj7b1khT8UJjneE3GzfzDdZTcLRZzysiAmR521AKpz1XuVEAVfccaqc6jJJy",
  "key1": "5D9bhzXu5CwrFJcFcJJg8akqBx6E8ZxRjmWUwpxx6AZbJd5tCkvctq6SoPTimaXdwKkMxEM2W3T9Rd58oZgFCk8u",
  "key2": "boJ4chLdojqJctQM4yppT52DJ8x2r7vohrZ7i7e1VGfHusYjAmKRweietW217wPDA4e9rVWRUmJaLFzWhRTgFGk",
  "key3": "4x2VRgu7FugryjExaR24Rxj8yPXkUp2k2u7LgzsoaDwvYrfzuUayRiB2rSYBRpCkdGxZnSbhbTwCFr473phg6imZ",
  "key4": "5BrPCGtoH4bcL6YwSLPWkpdn7UNBNt2H8YLzF9XYTdMWKXNrqPMAuD2zU2i8ovEwX1ouvM4QR2KUrfh1UzrHCaHV",
  "key5": "zRyYtdg8mo4fKfdNTja514gXfsdk7uJBh7EaPVYAM1rXP4BvWupXScRubqoC2sF4waWbfDjRJ7BKHsSmn7zN8zV",
  "key6": "g8FUXMTtwW1ngyfeMoQekVdpcAvapGjJA2gcidik6HTj6myJRDQSA6AZcABY6hsRBJCnEWQN3SJaqBbNn3iFGyg",
  "key7": "3SAKEakJFj6KcaxzJFin2HHzW1Ewr7hXVNoRWzvgzXAGr8knArFR5sGCysiWYX4QfsAVQ4zK4c4McRV9DhhLerWE",
  "key8": "2VKaaEuai8esa98fXRycwpYEd5EKXf5oxhjNQtbwQvgGGHb73WjkPDy2rAae7cb5nmLg5vo6nw8K9RYeLoexCyvs",
  "key9": "4JDxfF8apEpfST4drosNvW4cTFVqnFzgydTNh8ZXb1MQaBTsQRT4ECBy2pG2VuvZ4aEnPudCbuZcNbHSWD47WFa7",
  "key10": "4YytVYTgGDM5BaUQhXWpbHYuhzernmwTVLXKQpfcWCYfJYF8i2Y28wEp52fkGNgNhgXb6dhgNHeVzH6C6KJdc45S",
  "key11": "2JBpUMLsfGKNwrK9pPp9uWHMyWQrzH9cghsJnGBpwkEvqHDswyWP5SBP2n2MA2YF6pCSGbJmEXPNnntSgQTTBLwB",
  "key12": "5Kketx83bfpnQ8Vfs238e2MhErrQtLZxsHLPKZJK2wBdeQwagg4JFXhyw2nc61NDDNrgwfp2ZQUi6N8it8nPTyPi",
  "key13": "2CTry8Fcdz8RawiQeheJzurnFiVcXxaTYkrjLPaH3bjrePC6jWZcYRpSJ3LA5NQyMXzLy38AqqPPChFFGV7Dajj7",
  "key14": "4txiqhtFcbxSM3shkmaSsgssioyp67x65KLLRbrrxiztXbn4SowbUNvvsW7F61mFzbLf8JLV5XPwF7dZttZoMBw3",
  "key15": "4cARWdE8Hfmd1Z3umefuKCr9ae5qu4mWm9XrMcMy3vuBuQ3vhU83R9nJiBmnKELbmSoG2YN2FNTt3X4BT4Vy72t3",
  "key16": "2MArxr2nn2aDL9EZxqnZA1WzuDdG6qPK7noyeoE1rLGtNKgvn8MESFjXU8EJJUSVaHg3FXmuRLqpvQkmL9J8zAho",
  "key17": "8UUb6FHAHJGGrDaSTZCBSMqRvwMwJQVzEszrsPixsRd4ThqijSGLwQJjSqptH9AvWK63E3ey7mKVvNmjEBywKet",
  "key18": "dPATCMTRMCgYrWMoDj2bxP3vxbnpvr6HT6xwNzjrkwCyXQTY9H3MoFJ5a6Jhf6PzupG8YGohUjVkD4FxLnMT5JF",
  "key19": "4XDtUiRBmjujyJ9963bNeSTFfe46ARHBV4UDRKfsDuiRd2PLNzqQhCZcH1QG1GHepEoPQucZDEGdfxzcXzSF3BYk",
  "key20": "5BPLvHcjVTAwqBPQ7w1F7m1i1Wt2fFRVTu1tWpQWDyePi5EmKeJtwDk1d9TtzgPJu1oNL92EgHmyry3qTScYHMT5",
  "key21": "2AkFJYC9hMhJHBRDFGgEtT4VAJGC66ETCXUGEfcd8Em3ZRD6wnwbG3T1bthrSPxRydsa3pHAsCs4H6c4KPgGHapJ",
  "key22": "ixpRryjc2LZdNJo42xBLBMharzweUDB5ueKs75iZuseFnvWh7oJoQj9d8Da696Hz4iNURAEZoqXRsRBgTPmK3av",
  "key23": "RGubZmmMXaiw4SvbUHuVbtLK9vd7aQb794x1bkDu5QCPejALGowAyQPGU8Ega52pmZEw8od8wFYA3DURZqs8X2p",
  "key24": "29RvFM9PgMaFuDDLLrNwsZXV2Zjb6Aseno1iU3gL3Jhe4r9BqkL8F3LxsZZAviGBTMxfK5vUDNTvsHDEq7W3KnMm",
  "key25": "XtAR3NxmxFNJjP7CZBr87pg82AunB2iYEHXe6KVWLpcQMyNxPvq8XgZNakd4CKiVUuyiptHtBYH8WbGd3VKRmen",
  "key26": "24vE5Du6cYgPP2PKB17gBqb9RSVh17gVtzzsKYKwh3EHf7Pn7Q2JLeW5GACrDA8iSjR5hAsJGJe9P7961DacXWbc",
  "key27": "55gJZztueapzmseVbA9eNhS5Xo96Q9u6qLHmVjwZmMgU4wxM6vT3yqJdLvLNQdDzEQf1hT7CjkfaPien6QUHUoPx",
  "key28": "3usGPku3JYCcui8UNwED5zpXJg7ri7b1EmmT1ZQAcMaohZfSVjPYmhwHpT6gNFoPndJdxj159r3CpA2f1RTWi3K6",
  "key29": "5A6TVjoweDWHCSnt1xgafsuBD4GF9iqfjdNoKxJXcunUg2XxGgLMAHS6bRtaawKMAfi4tpw4CyszgfFbTzi5tjAe",
  "key30": "2aEbkMTh7Wk9qGTy363S7LV5g46i94W9UQmMAWoGtQzET5nU3iQkmtB2VhyJiiKRejbFjR9EkgHYYPZSPDfMdCw6",
  "key31": "32hmKbpT6u45A41mzv1rYUtx6qRKoyL5Lx4w8yWo9kcB8JzaXQqfM3DmbHYH7PENpir6RaM9rUsjBmVEjdB47x8X",
  "key32": "3JT1kS37aPrax9XrAveqW1Z8ktAB5z6rBT4k8SLnB9UgYsKN7BSYZFtm6iZaYyR4eyi2w85BKGDsp922JRxm2z4R",
  "key33": "23YhV2QAfLzerbkQU835Jh9C5En6ksMniix8A8yRTAf2hPA55aRT4DW6pickXNT5hx8GEvw27wqArJPDYKD4dK71",
  "key34": "2XrGW954vbzk2y9bEbFXU2ZsFd5cVMHyru7GLGs5934CMunnSSY58YbhrvPt24i66wwNUYvJCQQFEzCWnbpB86RH",
  "key35": "cuUs3vAuSGrokE35XLdFgh1NmEVwzRqmUwZkzNV83SWMJzqYea6Pc5GKuXu9DXSXVu29i3Ec9YFkVUQh37NA3U4",
  "key36": "3eSYeRRbgr98gyX2hYoCrdfYFjUwmmZMaan1GkpJkGL1ZsqPsTrGSAWMDSosUBFReo5iN2SWsaGKY9Hb27HQrFLs",
  "key37": "brmnMG1zgdK8uKzoQJQZArevCuYk86r1TzavDmCb7Yy9PSgXqnh8oa2V4HxWsfCm7K6xB5a6ajoVhvmexxzsS2W",
  "key38": "2TfPMB6CCpmmSb2zePti35EjCuLF5Pt3jXy8yRJxmzQpAyLFYXwAp1vhXeeeVnqNvK5VoKoCUCPaCmtXb6tJeqp9",
  "key39": "4hSzr2AHYbaMLcr4xbcAn8REvcaAeYHiHwbyCABawMxAd7thoaeiDVusx6Xq45cBq4CtK4eXorM8PbEk6t5EYNZw",
  "key40": "RwsC3acCm9R9VaM5GfUsM7FmwDHu2S5cHxxbucdmxMvyrPTiTk9QQotqiMeoz31XZhFrAhAnuy9rxPDdb82BpiJ",
  "key41": "inbs2qNT8CdWHQHwtYHfw8bG4RncA9XeNgGKHNYz38TXkr2wHprUG4MWPbBTiSD9Hff3dnaAsNqgd2GAfwZ5RQy"
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
