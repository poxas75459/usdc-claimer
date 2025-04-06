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
    "3N2kBih7UvXAFvdFmaaEypXvBLNUJZvPsfwGNhZ3yEykVybZNPW2izVztRxnr125XKtdJvWrJsynh4UBNC2USZ6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sYwJpoKSk8G4XLaX73GyyPtJqvRpamxvjdbD7941dD1WYcij4aKNkNcUn4fdujWf7J8BYBK7mVjBtXZ13z7B5Wz",
  "key1": "4SfyZDgBu25i2R3tZeHYBxS5KBSFfco8KDwzhLCBRCwpXLiu2EF5LS7tfkUj4cGjgfXQAVWyXpTyqD1beQJsZBt4",
  "key2": "2zmddNZ2nNHLrZwzr2zDtmRjo9uS9KDNWFvFAdKph2gWJGrdUjiJoFsHm6MywL3VCarUcT9rR7tC768XDmXDgKnH",
  "key3": "4Tq4yZM87xqVtoEvU7SCJB4SpQGP1UozereFGazWtbYDq5vU4JE8qbHFuKz1fCFuV4ucK2XeeD54NRCKuxFBdm2M",
  "key4": "37yw3YUvzdonqP65thNh2upGsRA9n5ZpQhJepALDS5XpLMPV1QQQks3VTUvBXrSVqhFjgR6Ay3SH7PWmzyPZurBF",
  "key5": "37rzUUGbBw4bsSYU7neJb1eERT6XpQvLQMC8yY847cx7DJGMiFVKERQK55veXmutPf4zEJhzjGSVck4zHP53VqBo",
  "key6": "2k7qLFWXMWCG6mfqPTDzzHAEQfjgtYtgmdK73eBHJrNx2jUwHyGtstdZ4bSxoTapNne7ftYrzMiBT9pYmytQYDtx",
  "key7": "5Q1QiGpRKhas7dL7on7CpMjwvBL9BEN4fyi4wxjeMv8WoXdbuvs3wnF684j2iaMKrtEkXpwJqSJCBcXaXHLrXUG9",
  "key8": "57VH9w9RuUWrEABvgRC8rAxvDbGspjD2fLaggHnF1TVPnbeTBujpxpytpymW2UqAibwU9MjxAm5CaU1qmC7y2YBF",
  "key9": "64A7589oStvriQHmgS2pkHeDwY3iqLjkMBTfcG51pun1qxwH7fjUWvJLMFnzWSAAyKC2M8H1U2u8G2cSRKZWEFnQ",
  "key10": "4JtxizXE7gwgrS5derKdTvhkPWRhE4FwqDNe7SRPR7N15UmchZ3S8XnW8ektDowyinrK7WScGwx9j76br8Zwe7St",
  "key11": "5v4192gDs1QJztGMLT7E2k9oggXD6iU1Ky2AwUyTCUvffXbE7SAQj4QP4TdvL4NBsMXT7L1CdFFcda3RrBXCukQb",
  "key12": "2phALnt5eQiBDxiUSN1pEDD7wuA6qKUEKdm8fxTQLSAVctFZVycEpV3kaCiJyrfLxxnqwHwuqYzay3aXS4sneXLW",
  "key13": "2r94EK3CCi72UT6QyUYm5PmDwa4m8XQ2tU1rPSpCpqyza9GkJJ6k1BhAQqzwzdLf5mB9z2mhpiWuUi682XCJ4HMm",
  "key14": "3qidpza4Hxax5cZVJHSCXX1niAfJSjKpkqmGQY4MP9qzQC1cj55JMTTJupx5DNEBM682uy9pooUwy5r9aF8nTHBg",
  "key15": "5XoRDMVvCFwUboZ3rxJopwSZhaBJbTcHwmCd2a1ySZP5xT37mYvpMg1FcegnPKkBGtMYadfzMQLG6qMXWvrawj7J",
  "key16": "4ZZeKyHP6SzuVdk61okCBFTEbyZheVDA7EXZZSRkNMTFVViHYYD8iMAqBhcqEPAeCTy5cmiFexPAUxESvDf6ZtLD",
  "key17": "4CmTCNc84J9qaQFfBewTqmfafp1k3snWYMG5RH5jgrBoJCmzHtuf51Wj4jF9JJDHiQZtvH9amq9Zgkske3WGupYP",
  "key18": "5yBS9JmkP85L2oQKdzYRb6UK3mdY2DcUJYCXr8AvjLMtikke6GeeKz2x9DX744Yy3bg7XwopbSXE5ReXqjaBuehE",
  "key19": "5njrburEoHFRqc2LG8v1TcyjWLHGTUMEYCVuXLTwxV4qDcisB9vErymFM3H648Ri28qz6vNz33XeQEpNX4UDntnQ",
  "key20": "SA56dAJVabquGi9Y3Amh1hN592iD6FKUqQXUZSUxXjNwZXhXDkGszpANjefHXNnmbtsAgMGauE6csyjEWeGACNP",
  "key21": "2CEUbFwvqySFrHrewSQ3FZrBFW7T6EcwanrdYBaCEZ3Q7M87zYuXCFssjHWsuxLqWcaDEVCW2fcxMKPMzTH6VxBk",
  "key22": "25KeQt5stqZekNoKpxoudz41QexzLqaCy4o6YL9Ju9nyeccMzLsYeBFtfnLJnk2kPwLjJgz9vFHcAHBG7H5hazZL",
  "key23": "3YhaA3ZvmTnG3WG7r6nTcsjBMnTPEnMogYcnAVuVBuD9Lhbz1tvVpAoqqKUiLvb3BhRK2r385XAXURTrPbGNMGfx",
  "key24": "4bH5q5UGFcbRAw6XbyYHECDAPzz4SnU3MyBZVD8x4DxRhgWFHKiQDwwToeLnau8JggLCvx7Px1Qx41s67PiS2vr4",
  "key25": "42UFLTVGLhdRfn68fzvi7yJsPVr6XbkYvAdRuRets4FeSBdPt6DhKSUVB8nN8YTVBjXhqeTrRHdTENq1FB1bF4k6",
  "key26": "2BJ9mHZZx4uodHemyARVZZ46zUpM7deGMgfCdLsojpvdKuSmrQWtEDmKVGDHsNKQ1Pn3cXaKWfAv9iJs7pQkKygU",
  "key27": "599aRroT46D77WZwE2GtizHx3qn9Wvqqi9NS7cMKwnk7iVjit2bHhfoe9ZMrw7gRbYr2NTkPEZTqpAWFLngSjpjG",
  "key28": "3M4uCBmkBAovTtDVAhbuxXedMmE2kCgymzSc9Tk59y3HkgEsgwBBqs5ffEVnTE2fdNx9oQEpgyAy55AoJRmrgYt6",
  "key29": "4eg7hzt8vZWsDNvQRVT583zHuEHFaYC7Wji1T5mYxiXsyjQRZ4TzEkusJwDxkQLhFHbzeDCu16E1KZFJZ6opZ6vq",
  "key30": "3Luypph86fukUHbpQ7hf9s2NGVsqXStwR2VmfoNVsfRBsjV3iQL9jS2YCNWPDEmLzPpu3Vbzj9A2XsfeBn8MYi3r",
  "key31": "3MEVwjxQGYhMjzRNiCkUVu4x6P54qzTSwyFHB55Z31JYzDbmvNescQYtJMAsFE5ZeeKzzQX1Vf4ybupAkGy83d1A",
  "key32": "4nQV3ENxLUmvcYVtwY5J2q4ZcJ8ffkg4F1aWXw52oNgyon2wTMvMMyphvydMsWMPutRRJ8KzHE7JiCqEfGmBCwVB",
  "key33": "3CbjqsZZADmWwV5GpsqfzX76BF2mJsrYVyrKrWrCk6LeYgesuEWctFxty2hWhv2UyGuNom723wMK1cKU9Vh1oPUn",
  "key34": "4AXt67njzcrky2dZpA1aVNpqRmz971KDTSZAZxQXYc1urxJzeaXb71Vg8WnSyGGF88cq8qCXS1uyPZ3bEBgEb2fj",
  "key35": "4Cw9UDrASjLrtWjD2gKzTUAPayA9q94rwkcu8n1hLwWUXPQUK7sdGzDXCErqYsZ54DgEBEXEq1hkDtoh6v5roUxj",
  "key36": "4urjFBRKV9zXiV2BAMhvyNZtKdBDqqrXysUMErzN29SQgETsCXwPjAN5GqtsegMj2QStC78GtRFdq6Mu4vNQKi4T",
  "key37": "39zDQaGRRQw8hziLFXkijyopNqtLtTUpxR8TQUVfTKHeAPi36322bik38gbuBivVG6qbqHuWqkbBfUC5R4zzcAVg",
  "key38": "SBBVZMBWiXG435gKRHma8eFEXa18NTcbf1QF4A9tEZeGWj9qGKyEDeKsnPApxJgzeDTfbHDaEjAfxVcjcbtD4vV",
  "key39": "2mxE7EXzP63mXBYrzLLU3gUyzSSpMksJDjV4Rr8VK7dk9Sx8x4t4tuGZujwx7vYXDnsDgFuacqECvDhRcJtUYrcr",
  "key40": "43vyFqmsaFo3LFCvLXe4uYZqfQwFjJjYxqEvweGCzZ9LFxm2kxxxMV41PUnJgzybww6GvfG2qKsFtARHhcYtdBGU",
  "key41": "5S8hGLSigcvtJg8cdzn3GfC6Zvvh48yWRTFg7Hah15uwLSzKzoxdfiJrx4KP8VhseoQkWwoPMcsnsLNm4geoTjTp",
  "key42": "4fGZnusMmf4yUyqQjbTyQV1AXvugebXU1Xs8thWHnuMetCTNxkb8FcbsHiYALU88nUZgWjbWjkNDmsnkiEGbRz8z",
  "key43": "2x8GiRVGVobJtpKRnvXCEunmdXXiLyHX8uQ7HYvpe4b7E92uDPTBGuVFMif4vYBKjTz6TR72izLvdrrpfmVs7ks",
  "key44": "2jWdTQb3hrhHgnmJ9NkNoXKrjNc2EhpH9bU6PGWasPQG25Xc6SstfJmqo3BHrjM9shhW6NFmTpg2kGD1CpmFzQnA",
  "key45": "4cZpFeq3ynx8Lw6rbUCH1FeQwAe2PN3cSyrYVA8V7TqeuubKGrXuFM7kZZTxrfi9E4xZyW5NTN65u9tge5wD3NH2"
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
