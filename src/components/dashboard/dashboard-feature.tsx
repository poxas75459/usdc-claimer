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
    "BXx8BNxXHh7oFhsNKL57TmsCk5TYzqYiLKE5nkCZu7tNNY8myVBm1DVXda8KE2A5b5gjHieYKax8ffJtrPEaiUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62TSYA2cH7FFrTXiKF9YuvnonHE1fQ3aRPseqVkCud4uVLGG4SfQKNZgqMFDai8W1WmSXYpyoYZBoevU6c38w6Du",
  "key1": "5yV6Qjd3vEBG3CnRD4MhfsdSDPUEaioVMoLvir5hTCpuAysXS6nEEJE6Q1ZE4MdBHEKsWZ5kEBzn5u3qQ5kFSsRf",
  "key2": "3wUbhP7e1cUpLPPTQgQpReGMwrtgRMrCTdWwUrmZibKRtHcdd7grybeDSytAgERgfoNoj14jZx6d3Z3X2QH1cufB",
  "key3": "5zq47iAbRWmDCuBveUP1aZhrBtuXDCm9WAzsZDSfc5ozJidmxafyt2bfnQRCnw4ptgtbGDeSAma4oxhzDryeB2du",
  "key4": "2enN9G5zJMLhtELp8yEHeTZyoVnVwhh2USmY4E5dArf6dSirNvhEK3UpNHC48iXSqQqKxsTRfob9475zuFwUbHDK",
  "key5": "63AsFvL1j6Nh6kVynSCrxLEgeozPiVWPpiFRnXHjsrPPcyWP4fPiRqo8rY31PTXmoxkwHBznKE6eToakbVVrxGp3",
  "key6": "5a617PjEpo4kKKM6c6pA9fCUxZKnckcDQRmiXbumPB3XrT5WzAskdq9hH6ResTpYJFJv329i37RtmfbCkeHfbSSc",
  "key7": "4vdHwMhqfWS9YN9Le93MzqAATVYeb3HnfvYgfK8Gzbyu5bYWsyVpyFhe48g1PqGNgDveVPnef2nduiKCMi51dYhp",
  "key8": "3uRSkhBZo66WPPLupGWQFyXBmM9h8TThUPQDEjugSkA15g3pugdMBCGrop9A8HbXheuc6yK6axFCyjfPq5hdvpUH",
  "key9": "2wkLyWYdQ1zQADqLapUUEzgVAt5WgQDCgcKWzPBtjQpGoDspczHpxMhMSGu36H8d7DAm3VrrUwc5BkfP2dCVPsnZ",
  "key10": "pxXKgv5dhE6ZBtrE1dnPmdv7eQ9AbRT2hL1u9VpgmRxQ1zTo5zaGyvYFZPNLRsj3rTPiQusPMn4EFCLtMbkiG17",
  "key11": "5VFwZHbm8NJzf3mLXboAXfUZgHTM35gwFXn25EFE5ZyuhpP1LX2rYw9Dh8Wok4WKg89t99dTcjVkXgNi3uJmFgWo",
  "key12": "5WyNVSCjwbkJ8H3xYPHw3azf89MfGmkMjkhcw6y1EWDA9oM5PvyZAhTdjHihtJZD5gj7LduYPrVdND5GZmcVxKZ6",
  "key13": "4vqkkkJMfvZ1rgh3VcFxq6zJffmLxEeDBH6HTmWAgA4Bgu85Edi4cwPdeUDtcNdVtQvULCqC8ckrVR6gcxcBw6yA",
  "key14": "5pAkBgGkUfbPDwMrAWvUXUf1e3pDDKfp8FJVhvGo4WfWLpFihNd2rDFfVVkPjRhjxPnWugDH2X9f9oFGRMNm6QhR",
  "key15": "JSkL9BHRHHTJDRv3GUT9d6zox5FexXKWhYXfd2vHYqQej78fSPEEtgEFxvjTiPPnwdXr3EqwC3viqqn7BKb6isf",
  "key16": "GMWQrfg2pazD6ApxEmgjGqthJvQkMuLSeQMZB4eyoyuF3EWTkptNJFcaqiKSptSXd8nJ4Yx9KKmC5Brc7QBuvHD",
  "key17": "4ZSRQeyeErdMMVWjg9pxrn2sFTWutfucR1FLdHDKR4jWiNWt2pf6UzUQi96KBp8L4qRiFgNtQPtmR2m9PigRKj3",
  "key18": "126YSSUkkkGhdX3uxa6KzmQG7D6uGqpUU5x4fv8yDv4rAPfLesc71h7uckA9LaHVHLouYtKEq6zF8vFdEPFKu6uC",
  "key19": "41Ekr36cvLgMTQAcNh19yoZVyMyiFLLWs4tskYHca6RxfUEF5LYqZTX6ARwXW3q1PcMCCyM3txaGaqm9DLQbDo8J",
  "key20": "2LdpifPGp4pJcrrK8vHh79LFzCEsT5YHimeSmsa4GxwHkNtWZmkFNzMhR1DzYjkKcHwi8PdM6RMdhFUTeYdBr5tA",
  "key21": "2VLMjRbKjEMtpLvyeUezu5iknFrBJsUs4kmHZ5RYPKsURCjm3YjRiJc62CmGxzQ9qacCFkPk1feAdokSfDe4jshs",
  "key22": "XuC7ayXeyVhYYEtrQCWbsYHs2qqDnvT82tHgpz1gNsJ9J8KkaLMYJdUxFCMSBTia1rxR2DXoJkTEgEVQd1MD5kv",
  "key23": "4cEyoRsjD4mQo7R1xr146xxHyxu3j4KUgJdkCBRcrBeXzBKX8fBSNuR23yWDH9BvLpvSpbxHMgMJ4EL5QfXouJV6",
  "key24": "2Rq51jRn5tgCjGqD2CfoXYvXdpgjWoohjdsJZBzRjC1qr3BCcMtiXkUpN5Bs6DUE7S5fbsXqvdyi1qEir4z4w2To",
  "key25": "4Yc5Hvzai48GFdCjy4kYaBLAJH3Sw6Lt99xga729aCdp52apPeGYCRcZgsn8idLMU3My6EpwThxF2SVQdiqMyuZE",
  "key26": "2BSfzY8U7pyENvdUphyVSVCXmK5smWEUg21dxq5xdH3bvX1BAC142wZkZ3jfEWyRXhrqLe2UkYc1kH1RTCCPYaSx",
  "key27": "5qfUB6g5XPnGdpJrBpefuoksJTa39btetFNfLDD97aZ7cuobfZnCKbbXeLxobZJCfLF1dKTJ1YrhSKUhkvb9A2cp",
  "key28": "xkG1HPWXqxjrvrxE7jT9xt5a8RNDmmU6WZkPMJYHHi6oQtaAvFzghzYWTzaA5ZcfUeJ9PpCfiz5w9dbpikE2DML",
  "key29": "4MFADqVDjhT3s9AFTejDYdABnjvS86pyhv9Tp5C38q7AjnMcSq85XQBDnkjvgRmSybxnvTJCpoNBbT2e2DksE6Ab",
  "key30": "dbVSU4HUDt7TCPLth3UUJmjjbMECDLH3KC2Wooxz2EVtHvgdcb3MNnQxygdYGJN9Wg9jjM9E4arVvfN3yTwg9J1",
  "key31": "3gV2dHbfR7CUvZq9uEm7ahBoqdbhCJmsGzny6ta6yKnWUdusTzNWsQtPchXC21Dsj2RSuEZjjXNadQUgcSALBPD3",
  "key32": "4XfYTSW5PpNjA4aZivhUHoroDvbmTHGmPoEhcjexc73M56MwnoMjxmqETjo2pFBVLZ9ZKsAhgY7StW5MPE9VECn1",
  "key33": "KnG37KJHNVZ4jG8hCMCmuxkMwP6cqzJ6kZdbUZtucoQXc15oGGcxYwbyRpx948qyapqtR7afUKEdEBhmKc5rK9W",
  "key34": "ghCmHYFdmt1Wrfhzo67uYGsGbUcJnbc1DeVy2qHw2gU9nx2K7bec5HS1Cdq8R8M6jNcRFizSrGQfudnJGiTX42x",
  "key35": "3ymMG9FsL24uVS3b69dCfQvJTHrrbFHJ14sbpkhMhTt6kcqcegJJ3Dt9MkuZL3ganM9PdxTMhEPkbxNxrUE5C8F8",
  "key36": "4i73dTDb1CN4TkZk75sM7XuQTWQSGD2asn1ogwqMnzRUmobp7BB1ncorpXr98tHiQesjurpDkonfLBrLFXLYG8k2",
  "key37": "5fjtCWZKyQDxe8thraJce3zPTZBLofes8aQd8jvpAXoqY3en96EJkbFnxwCvoyCrTjhwuXHSKG7bXEyiJYFnnX9e",
  "key38": "3nSHpQyFAzWuqDVZgyNF7MmoiVJ6qtHhTsMC6wJEb4vPiBoKyjqEcRdfja4amTZ6JMyqUaoccgtJzoFrogzrkCaJ",
  "key39": "2Wmm2thX769kfa4d2Fo7Wk6TKP6YcZRqePUfykhUgqYPtJuLzJa5ZLg789RG5wt1augH8zQoorYFjAF41qD1BNSp",
  "key40": "2NoEgXt8EY2KivG9KYQ7JSGVZCiYTXFEZNbXFJwMpRGeQ1CPJ4EKScWQFwHRVfW7JZCZWjczhywgAgh2UpYdHSPf",
  "key41": "2K7WA3RmcRGZAYU7WVVNJ4WWRY8utDLu9Wy5KrdLwVqY36S1RTP6qmknfbWZ7TdtzZ7ct8eodPx7MDXKcRb9qsa2",
  "key42": "5Q5bN81CrpeGzWrXGccLHyirpF3HBhCyiHvBiHwaYKjM7CNxykLoPqXFCAppR7GF5MmEasaJkghn8tZDqp6GpDCi",
  "key43": "5QUkoKZF1UpyxLstUJRdjGc1Dq7pHNh8gc9vdSiCFXjwjzCNTMDLHpHnfLJoheYyzmv3vWmxD9kkjQMoRec1RYXs",
  "key44": "4N6aTrvpQZaHDguZXSypfaWMzrk7U9kNvtLoRzgA22xJd4W3Y6QXzsfBPyjBVKaYbnZxm6rK8sf8r7Noq7NJTxUM",
  "key45": "vph6f7uVWR7QFtXUqEGYDdfhVFJCdnSDht4ojYpkf5gULfgUkDLUh7avyg8UwPgxXFYpAzxmopYxKQL6kumCH5c",
  "key46": "5TgMNrpsy5SvtSGSgJp8nSd5uSrssNcACzmrswmYF63MxJJRQpoALEqyw3q9LvTKhLfANZFCMj17vREGKqig7veL",
  "key47": "3KEQJLD1eoxymzQNdhUXe4qFqi7nzDi9GJnD9Fdk4nBsYK7U4e5FTgCfkfB2YEgi2sjsKJFAF31i2xExqAmejcVW",
  "key48": "49ozFP4gzfYZKNRu3UgnzJLFSS5jfZzfu8eJ3XwvCz1uwYi65nppwtksvGtApbQxsxH7AupdLkrqX8oFAsziU7HP"
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
