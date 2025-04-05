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
    "sSanA9aEiXyS9vPBPqV6fg3XSKQ3RzA8MN1mKWt2Zjxp6Z5JeYhuBNauiruYkvEHG1YpDN4aMhDHkhZqrwyNVTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTFQuvVkq4JujMf45G6Mc4qSmmRYxkQwdGPkibar46YJxJzAaC5ixuvzai641UmQZbLXtgy2NnakrkrnJT49PJg",
  "key1": "2MoeGDpes9uzKTtsr8bVUHWh1TjiR5d79oJP7VbXe6iq1bbu7YWvAuNiaHSbupjKk9juWRJ26TPZ7n8cBY4r5dFp",
  "key2": "mpv2wU7i6XQQBwoHDCRi9rs6qgZzQDkpLcyA4nQKDAp2U9fPKjbv3fHdbZHBCTnsbGvZEchnkqiu2bDjVmGSW8d",
  "key3": "DSENaasrp9SeJCdtrjo4gWiiLL4vAgLkZKBkVvDY6KDGBq7Wo1fFoNJxHDBxFcaXiFuapP1xUU9FhyxWufLk8kL",
  "key4": "35ADRRtuNntUd81wabLSudnebvYTZywo2CDGkDfibRGHwSdpZgsTfU6V676YxV7P3fXD6zircLdjENqFEguFspP2",
  "key5": "3GsjxQLYuaFU2x6BC36Fy1KpdzoCHm558MZDJnszwDEybB5iHoGKZzKn7KYU1c4SndbBKh88eeqtEQdrmkcBXyXQ",
  "key6": "M1UPnYVPXYEmhiuWPhTqt4dHineHNA6kXxqYcuS4EuQnD8wqgWqCGNLsXqxxmKnoLwxCYKbbUJB1bGyXC7KD8vq",
  "key7": "3wvVeLdd3pvJG9YSyJiC9jmQaAskquUb4dQMbSB1Tff4v8H9aqUDJzyDKMs5h9Y29qe2CY5CzizXVqHvnWXoFXfC",
  "key8": "5qPwe4E4aYGooh4McEY7vptJCGU68Z3EwyVyFRdBfJ2y5989ddwYFxzifDtRA4Zi6RSj7anVpBNJuSQ3S8SpBbxf",
  "key9": "5PjAi5BzeavmbZJQhc6F9DwYLSpjtt8PCSha9eQtF9Qu87bu5awjuQbQ32jT8FjA9ZaacwTGvW2D7td1TgKRa1Rs",
  "key10": "Cfccjm9odBvzc5jduFSNGQTE6n5h5fQ4mXCPcAQ6bCgfPsg8nq146Yv1eq4V9k8J3ktA5A5oFVizGLfwqgoGSGL",
  "key11": "3nF7PxQ7o2Fv3gGDe648wcf7ue4K3j3kjGFSpkZhtM6nVdBnKvDebf1mXUiWb6RpULZwrU1QVqchupX7pRidTbbk",
  "key12": "67XUAFK8u1ubyBymYCNXTjLwCsAzqycTF4pPgvpguhMH8QsYL8sRkPqGw6BkBNJrgSWrkQUuK5uyiXgMEgrQrtJP",
  "key13": "65QFzVC95burumnXRiEdYuZou5vsoTUk2t7NVhetYz3YZkeLroTyLEGCdobA4rdKb5Fmx1CwdrxE24DYg9q37aCS",
  "key14": "3rZKE67s8JDhd5sd4sKSdKCpTToFgvyCZJNbE3a4mymomupjbQ1R3oSfBwwHAZ6LwCFKCiWSW1gQbJYiZjnszGyL",
  "key15": "YZZAkUpzhDzwygeWicf8MH9xpqKhdKmbfFysLtgazFBMwNLVSbafM7M4CMKCBQnPaowWdVTnpZBmtWfJ6MHfwrX",
  "key16": "3guErQc5vc3g6bXQW1PUmkDa3RGNxvhpusrimSrZuMc6qpJTi3Bpw36S6aLdg85wsQoegHKxtPn7vuYpr7qSaiGX",
  "key17": "4iq21UvgerZNtqWzGvUu143614bq6sJxZDvmqYHsV4acdqp7hPkeHjyQifx9Su5vr5yg3t5QAFkFNgBtT9Z9raXR",
  "key18": "5aysjhLUkVCLfWnj2SjtbwcRUya2fRKNgShDTiPzBmSNV1Q7iv7BzNUbEUKEn3UJ5uYRSCYEx7uVYYSCS9fGHTXK",
  "key19": "2bk3W6FK5Bick3YuEVMsZ7AQUrHDJJiERd8iwZPdj8gnQ4k4DK9SRsd3hZWKuzBzUavo9Xf9UghvpfNhaAZLhToA",
  "key20": "LCsbhkRsJAQXB3def2GqViucHfr393WspNVUXfkho36CqHz5wUCiAUjJzXpbaUYJYUcweJbjboRtVynTQP1FXtM",
  "key21": "3xfLPJhYcfTjm7XQYCXeG29thKYVxLaMjefKT96TkymQmqRwEoxvBwCDq97Ls1J1SzbvGhsSSyUhGQMn4HmM3RLK",
  "key22": "4pGCyGkyvJTFxsmbTXh19Y1tRpGQVeRDPHhkSEMRBYdRLkdhuvL4YRfUFQ95KYzQj5rT67FR8bronb1LYDfCp5Bn",
  "key23": "3z4W1afSUdHz4RmXAuDkR4jvnMN9CUtjKEiNkT8M4XzvZLArDQxNwzPkQS2f5vGuVmHpnPWSRVKhQK3uaZLEbvuQ",
  "key24": "4AMuse2kR3F6vg7EgqdzvrBwkByjyxd2G5WgDjsLoWNWZ6ZakZuX2Rus2sJYBoKM3ASQj5Gkd7PvoiiUAN1aQccQ",
  "key25": "4Ks7sPPDQBh17YngtymwEnSkAfs4msww3uT21PDBapMJzd8X6oJUC4q1erRoJih4mB32xGFQeZ1tZteJd9ZvRVMG",
  "key26": "CFpcoo8Ks9doSkhdD1qqpxFSE3h4qKh2HGzQLf91LLmMrsptQ74fGcTNcer34YsNnfK7y2gYDATy5W2cSFJmtdM",
  "key27": "5K4AN2dogqEKUwS7rJ83bPxPQZJv6CrdP4nW3E6m2ewXkmXtjnibjoqFV2Qvkpop87Jwr71aDnmxbZqHrctmTKoX",
  "key28": "2X3doDLHfb2b1EZbYX7x3qLqBdAGqpVtuE5Ej394d7a6ruSBjfd3sVpW6kBqCuiujGLz3EFkJ91WVbDYiq4xdaVv",
  "key29": "4CM6fw9NNNQ2uuGNtJLCcBGyX7SSdY9inBHpKSHgqLQHzeZZWyUBQgV4uKUaTJyq6HAgfNLxGotsbeMjiRhiVKhk",
  "key30": "VuuGQvcbAfA8vaXjG3ameXwUUoCnykHqg3eZjp1EqUJaPmZwNQuMaDXSWvfT2dbUgkkMfEzKzF5mDhak2NLRiP2",
  "key31": "JTcF4za63uB3tDLcyw9FPvWdFaz1UNR5VKPSz3Zptizzqsh7BJyPSqFqYbDyA6N9yQWHbEWw6TvGrAUo9zj6gkB",
  "key32": "2RBbaKVQZfmSsayAZx5xFJutDokhVjdy3cp2uD87CmyAQJytdkE2yo32vqiFCDs7Qx3KiyUqT3VanjHa9EixA9mz",
  "key33": "2SB24NNoCuRS7NNddVGQfyaMf81iVwixsm8zZTLxf8tHtPaZXxrNBqv9QpSa9ja7mssjqjGHnX3S4xouCU5A4wnC",
  "key34": "5bZietTZGs5PnvCYHaXh5rQ8RnariZ5QtGBFxMDPkm4PCgRwNodXMeUmP5CiTMDebeT8mvawhVxLA9dNdkobybXv",
  "key35": "3WmWnqMqoR249VcGDf8Eq3XpUnzoKx5Dc4YC8NTBEtJNBrsMTNPXr7JZcypYgAxw5t9ysrmiGQiB2mUxpEw8g5qD",
  "key36": "2Yss3Bs7pyuXkPmxUYw3U2xooTpsuNDSwDKXNmT2rtKUpGycNEs5FnRb6VqDgfTQS7JdTo6ZELcCSWcKf9QhntyU",
  "key37": "2RaL7k1QFRCu6KVsbgdy7kgLG8Zp9f7TE1aP9aLPbio3N7dzP8HjcuzoqV5VGyoYy4eB4jHnrPxhPtVNbAbujk5n"
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
