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
    "hfpTZhYXhWEBv78HHHwRqkpBLMhXrvxhdB1fHL2osqF8ym9WC83aifhm6CUvhYcm1XJGJEfK3B6us8pPABV4A5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GC66CgWYmkBgFhNHeAdLVkx6dMoyVvxXBiivjiP7TVB77dBDu4NPyPWW37mzQ9CGAJxqBZdUHhAb9WdijLSjhfV",
  "key1": "5KyLvznKKJDkdXP34JurQnG9Nr8tXrkdaABiUVfimbX8XS28ZcdgoowFDADdZeNhRAoSQnp1qrYLRNQAVKTzenrn",
  "key2": "GUPEDTcEuKBmtRh4Dz6woZeYvcs6bXK7gqpqin1c2RGagLNTLNEDafcxJFE7MN32RSG8kvKREWRz6qAha9mW6jy",
  "key3": "28DucuKNvyKpBhJB1LiC9RiwHQwSom7S6ABnwmZ3hRVWL2ZcbtmuJA9DUFG7H6j1fHKxivMy8iTBjaKydL4EYJMz",
  "key4": "4HzsVvdP7YpZRSgNp5EFB7AvT5Z25BRdVJPYqLj1cNjC82jPHNQkVG8NSHWhHYSBzHZR7PaTrimFnijDM8VczYMM",
  "key5": "3uPtqXkrdeGwJFToXbkvsMGX7kK1BiGo9QenX1iCVEebyjwrBuadU2Jgnydy5CGzQ2b8vqA7mg8s1nr2ULuEiFvX",
  "key6": "5jZ1Psd3McHG9U53soy98Tbd57BhXmgesJf2WLCSiinbPudn517Xhr2PgwL8uPtjSeDr7Ub42VJiq3ZX6mDV9oMj",
  "key7": "3cTecScbo5mLctseByJCLJJDDXRVrk4uCc2N8nMEC18mn9Vg2AxzJantTed199aRujVecAbBXSYQ2Q4gPRsa2nPG",
  "key8": "3QSrHFzdAQDnEp3hrEUfC7Xki97rCZLDGgjmbKj12abHL3BUvbiYbo3mFJeYtdvhYzQfZMNJhksXzdUiN3zp3URW",
  "key9": "4G1r5NM75AVyEDN5FtCxGpfJpS8i8r3NaENFdJfTijxeb91oJjncPpcoT5vWmoWKVXbvQAhz9qxXUpP3erZa2iKg",
  "key10": "4KjukXrwnanvaQMxyVVNs94rBnLGqi3NPY8KZUskWUBRmA4w4A6F7w7gbdYrsjMhhc3833LoevVqMqfaqGKkE1Jg",
  "key11": "2VUNLr9RDoVUwEgdFN1fhdY51xrUjb34vxLCbzCdYoECAtXQSmhgjtNPdeit12sGp72vz6fVFryzdmtsGMVFpU6c",
  "key12": "3a43hfmhSPtuaYJvre6aBfrcYDSXgioFnDavVTFpk42sFRWyr81ACtuY4f2y3KKsNNkXaCHTBqfpLGcgVEGxx6UB",
  "key13": "41uJTfRnE6x7YFuj7N9cSZHvQzTwjMBfPRrz8FC5Ly5s1agwrrW7U2DTVCjzQa1tpi4ffnq6NyxkrjcsLYuJkH31",
  "key14": "apHc31g3b6y6TqUZKTTxQe878Psi4681aC2vEADJQufQB6UbFQQd6ADgNvRr1Yy8ie8jkCQ4cAk4Jz7RiQkUeuv",
  "key15": "4vn1Ewtx6FWbi3cfh5oQ755x7C92rNkrQq8o7aWHDhrM3d5YtXwv621d5MDJJxeJM6aRztpveazzBBv8RaL9jU3f",
  "key16": "2i3fvuzceHU2YcFoSymQXV6abxR9YFxvUP542qnaUotjtMr3U8JDMegmHQHa4ocrGfP8R2qD5ttPJnghoC7DL4Um",
  "key17": "5A1SPp14t8T9sRivQEdooUjYmu4jEcjdQbhJRFLYn14VPmZuWCFcSx8piKsfmzSGnSn196ksM8EuXgHbDBcKgm3r",
  "key18": "2NSTEvgSoyanWfsyakGS2bfbQqqVLCCNgZKQaX2MeJDdp2e7iWSwRDErqS9p96kD2vJNskeeFFF8oR28yyG699qn",
  "key19": "zjG5qx7hGt36TwXRyKj4KBsKLfYgEUkP7mybm9ks6dyeMM3hrZAZwGz3apseisgxyFe4oahghvu4S3nwUmQTvs1",
  "key20": "5EmiRyjqooz7vvbgoWqq1Lz7DVKjwmH6FGugYZiwjwEVew8RexpjK9BBjSHXti5wmuDnfo8uPRoQsrAu6A9YbdAa",
  "key21": "3JzN5FQZJRGRcGzuy9SrAkKFPAykjH3JHDCiMAtz7GBb15pphxQyq5CZQQ1vAYhrC9Ur9im7iQCmh2L6tjB47MFL",
  "key22": "33cedTE2iLZhQutxkRMr5Khi8wdwbg5AESwkspkT9VMw1mxz8jevCpdQe4JbyuRCufUDaBpAMA4mwEYmY4YBjSL2",
  "key23": "NCqeddKeRABTNsZuxQ9HUsbNgevHM2RAgwEQ6dqg5aqyKQQTUGV34cgjUb9tzqA89cUA2dSVYjttcgzYScKvq5f",
  "key24": "2spTRDCUwQ4VfAos9v3w96PCZDHWpTiq2DiHwC2GvTdCuw2A3bUJvhVQL6kezrMZgXUYkQ56CmHG9yJygvR8VV2P",
  "key25": "2x3LoPnbmVmxqPJpa1DdU9mYDbxjBHHCJf8HGNZtimcC3fXtiyAAXC1TzUyXD3TyueJoagYgsdZmhocKzRxdmw8b",
  "key26": "1r4s9inrpU26hRgB2BiJMRne4nfCzJBKFfgw3zX1GRUdz28xoRJDsEen7u74UQAcaMqT8QWpnrxMA6LnmHJgqyE",
  "key27": "2WxtpEXL8ckXg3J3vqoU4qUZe6BcVdiv272jmWaFLeGEHF8qFzCGj1hY3vDFySwCqoAxXAeuxBcruJGsm3LvckPu",
  "key28": "5vC4gby9BGdYyz13bgVvmKukXJC1bx2ivP4zbgkk6VHKuNB5Cq5XDbhgbpMip2EQf7bn9G3RFgaQvbJ66iHG2C9V",
  "key29": "4iXiBhwF74W5N4VGXdzDdGJZLkS6TxpJWPJmZYohfnJ7XCY7QrkzEPNoCnwydBkovWtZoYDj4PWZYeLWtyezhMRP",
  "key30": "285ZqVjdW6cESPRrGXjNVrtMKKA72j1B7mhZxRjeFHmvm9do6MweWzs3q3RmwBUKdMttob6qKGozVwTSKLHNkKhg",
  "key31": "3ADcFQi2caj3A7rVcAAstcJCci9YwmDw469FDn7mkYXUVEhLB1koumemeMLxeBpTXuHuguf44X488Dusr4NdyiGq",
  "key32": "51KR2PtbMrs36z5ZoU8TxpiN5iHSnmsMYGxiJsZYFmBwB1UWr588tZZuQRKMpbAmpXsMfc4zFNrYVGTeUsSzcyWD",
  "key33": "4BDdj5KF9mdv4tJpJAXdxwAQwe3SgpDSAdCBvdbFLUuxhKt15hoNztG8uApMQbbpg547cisdET8PVYfEVuhBHddV",
  "key34": "SeQssduCLR5D4Em9TaQRuZ3zzaJcGmsRnxNrKL1MRPtP5QPjWujfs83g3H7a8yzADced1Pq6ebm99XcBHaZt8UL",
  "key35": "3T15WsB2f81hQFfs6vgjHzrX24fbPrkZeoHHKbGoDPx36PLRNa37tAfo5EALiG94tf86WH1DVKAzb9pXtHiQXzWm",
  "key36": "GY7B3JucJsTzbXv44rjb5dpmZ9WnP9abm453Z5pwKEoWirEy9bPrH81JhgUK1zLzgA9ubCjNwHojcC8m6HekcoF",
  "key37": "5252KscvokNRU5SEuASqTB4CL4cQLcxxQdyr5JDpJpomtqYuykRBDDckeUCGaKcHkANrji1XrAUGN7PUiyMMT1zx",
  "key38": "6VMFQWgEfFoCj9VwCayVmpfxRNLCoErhX8kuh85po9pBb3fLLREhMuSHjspxy7p3YtxYhiV4wCgssH9i5kCKtgh",
  "key39": "3ihoNFbq6efrTpBJTujLKNY4pCuecchfw2eUUd5i2GjEe12EYZ7ahVFnre1T6ToJPwxGfGuqaGyY2MWBw3ZQAVH6",
  "key40": "28kYwuyVZUrhm1N3S3GoEiEXid1X8B9TbwDMxGW7hiraeRCHUkh5uL6PVSvrTAEjiTRM8ChWhy3dCGqoDnAQjKB8",
  "key41": "5AXpxDMv8bPKj7khpc1My4pWPEPvhBpFx5eb72qQ7msa3CqaDt7LftZDeknmT4QRgPbZML1XnWKATRDv9dQ9eNq",
  "key42": "4SKTQb9dfK75pcR2G8sKkLCrNE27ZAZv6KemuZT66DaDcXfAnfovEDAWGWzjZW2P8kd71pWS8NvUjCjZkR1w1YQd",
  "key43": "SEzevec7W1cCQvedSmwyBM8eRY5DRNB9o2nedau1zYHvrb2aJQf1zUPLx28DgkvkNCMDShEnPkc3586H3nztANL",
  "key44": "ALeBU7D2iSoe6a1oSxo3y7hZ6Kq2QVAFBQDovYiTrzQuF2gjM411BwRVYuMwzm4KEdkL4ZQCCAzGfTRQwpTd4Nt",
  "key45": "45w64BfKXA1LVBNozZStPzopxrSByyYcC3cEqRvXPYQTp18nnpmEjonCtSs88iw4GADM9HPfYsckskPvdq3zZwiD",
  "key46": "45A8wf4LPf4UMq9wAKRjZVfGeGoJARGANPrg1xMkHePrSCs7VPVoujDYnDPDDxfwqdgF3adUWMpQNgHyKW2mp2EM",
  "key47": "YKaoPT8TkUseZT7kbBtAogVM4UcGazz5Vm7R8ey5HVj6HZvqy4fUpqKSRZMiN8fdgP94cAyCqgXH5XsY2EsmJMx",
  "key48": "379jXfM3RCR9Xp55DLJvHetXjhjFjRRJSL7anFhJ5irHLL6w1kAT3QW1Z7akfmXsv2gcjDsxpstDZXpF7sdSVWQP",
  "key49": "42My1YnAECafWC61fJpfrgmZGWiPhu7sAxEesMcZ5seu3zjeoP9zCTJbZWBN2wJ9GJmgaidmRBEonrbwU7tExRR6"
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
