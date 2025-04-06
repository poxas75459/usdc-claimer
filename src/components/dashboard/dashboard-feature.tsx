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
    "5Rk7SJjwSns5oC3SHWTH43tdx97NqgnhYyPKPbmx2vfivwaKcjeTtCSWSG6TcWw3itYkBPDHTGWYLkKdweLkrRbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNr5z7GKk6FCMgatLrxTG3MGZYpHQ1tf8Xv5sU8Ugg26L2utXAVfS8EYyGPqAEhBYrwrYPngmpPVSKDCDMAdFEp",
  "key1": "2EEYQpf2aBhyrAS5rzDyE8GMHfgkty7Y3dgaRTycphPyGwcDCw3aibHiKUcFaZg9mKnacspGGh2VCYsdoZfQqV4h",
  "key2": "4vAS2YLKEBwazoiMJ7aVUs5xBL71QEzsdX8md9XaMPNYrpX7ddiGviDcbB2G3BcXAFyXT53TsNpRtb7SJztGcHxM",
  "key3": "2Vi4JhpApVsGu8VQdvWo9Nnyvx6pr7cWpEiBDAX8C4R7t1T2cQ9PtU7oAK66wr2gavcNNq2notHukJbBVm2TSXui",
  "key4": "44AffRbzQty1zsvZEHnqYo2J4UMiLsf1AtyW7Gxa9fdJusFbUTymUkuftV6xXAMKLgTYacjdcYH4eGzvkyRSscXP",
  "key5": "2Aiy7oXMx8DBn4A3AKsFzeqzTvDPTzRNe1w4cjTiEk13hXkDRysENz4ndbB7mu6vejpbncASKjAckzTup27ou6fS",
  "key6": "64rgkdqyWRs9Xs7CqSx6B9BokNwyJR4dWahfFbPcNaBrr1YjqvVhY36Yqqi8GV1zbKnjqkRVxY9nD6dbP4gHaZVU",
  "key7": "5Ur2L7Pgx7vcpaJ97UiNqpxGmfFVb4gTbFfkqp9A178F1qBLdcKkxN8QqMMigkHhAbPxdSYHcoJ2J3gve3J3Mx5g",
  "key8": "36hCzGEwiykQt1REmgVbZmaewtTsoESiHdqAteVBmPGJK6skaKrWSko2kQPeNF5qokhip2A2QyCdowLp4sspthiq",
  "key9": "2SpGX2688R44DEQ5aSCvPeYUrWfJEJSQripk6M1f4fFhyUECLSKiANnJW7rX5uCqmPMwPRCUpxGRYeUrSNLGYJuL",
  "key10": "WpeuqkYPgQsMd1ZbJVWSj1cvinjJn765uLVckhnPaAfQBJcriUVxzJbYW5D3AvC6o7uVQghnpKHqhzDDvS4Bd4Z",
  "key11": "2NEbzM6XWLQ3HHeqFG6wR8trTtTUoz6u2FMh6x1sn2nouRqULstrXifd4WcLgATGTMD73shjVbKXBF9M2HCbJ6zg",
  "key12": "4pMAGswqtKWsQHNZLL7tzYnKDCKF9hHQFWneomx7yKDhAL2eDh6DVaU1cx2YMUmMUtxLrZJUeEWmT1LaH41HNv3D",
  "key13": "189dBbztq5CMpcgvmtNj9DfTLrt1YSM9PKFv2fb1Nfrd9hqGTqzVUGxv3fBTdTmwK3eVPgguicY5yNarvF9Tm3f",
  "key14": "2RZ5Mui2y9TAZACY5jxoWFWvnPyksf6P56h8U897vPG6ynE372yhAJbqqEHoCAuL7yKFNdzTRSepT5rBzTKtmG9U",
  "key15": "idz2GMEsrMuX57Zv5fmk74oUkZwHpFTUm3nq6Uf3zZihzghoa8nVBACddKkbA8mA4cW134NLQTxcRdzzQH6oNjn",
  "key16": "2v2cpWyHzwqvMRkKdpjxGp6YJSkbnHYDBwYKLQTYaWS8xYzZUku7A5qcMNfhYPePCJ5JyXDCpYGw3SCgjaTNrxL3",
  "key17": "5HndKr8Np2GydWTZ7jMT1dqoAzNu6sf8MgsLrR7djAbEtZEJtTreEKKQWFX2iDXLUottSH5twPr4LYs7tqXXMPCd",
  "key18": "5ijv5Wk5Mje2hj3uVJdSBXPhMnQkhHtYeuYYmzQJGkXQwnxDuLAXC1i7zEiTvEjqS8djjJoF9BYVpzr7nsvciZ9S",
  "key19": "5W33Mn9FfVUbR5xWgAsh4amFVoAbyxPxyjR4r7n4BKvHSF5takXkqeZ8ymPvFzkHv8KsBLW6qymA7r82j6xgTvDi",
  "key20": "25kG39tNxAELJGfBjkfCuhLHNyr6ixdkz9ZdriV8kNVwn6QdcZCgT4vEW1vbXQ8pSpjuHhFuCfgtQu8oMZcSonZj",
  "key21": "5xoEFZjrZU9h5fbbASzSuYtmW7eDBiAeR2dQN6XwZ3YquTmd57ccyA61hP5uXci7sefk8o71w9RcKvnZQAoAzuFQ",
  "key22": "2NuRR1VNwnMAryU7CHnnRSJ3inVq2GN4ExWxHzKYTdTqmyTo3soBUavUbRMLQPUsM8h9GBwkzot3SvtejD4zgjzW",
  "key23": "5yGV6XR51AoLp9TyMF6ZG6W2taFmM3fSnQDhJ2injpToTkySDnoSKPVb7SCFUy9nFEANzRkz4gbWmF6sPDeuheUo",
  "key24": "q2663mC4A6qZdQkNWHGqeXoUG9btH3Ufsj3FitTnDGzCqQEdQypZcSdYQMgxeqXcNbRgq2z5HAFjAhoVnKGVS6c",
  "key25": "4kW5iEuPYpgaKhLNbT1iuGkiTQ1FGZSLMR35iv5E2rpec6wXXBRB5pCYWaD21662DR2Fos5RjZsfQLUjzcoTxdUJ",
  "key26": "TNHYPt8xVP24Qbpy1bMfwctPH1DthRJLK84ESDrQ3nQN68zgYyWNgqKYS3uXTxK2UdQxfVDPuVjwBfd85E6Q7pX",
  "key27": "3odkiSh1YrCWyYpHsFtjbv9rFHtxcu1GmBpEXptVxRwPCBErcZtwtJ8ff9u7XFEXHwxuJfVDdWbjuRAeAxbGUhER",
  "key28": "34kF9Qf3S73VPFjMGw2rN1hPGiGatptTECtc42GRf5BFJZqv9LmUeauH7yUuaD1sqLHHkY4oV5ckGttGpv5Ypg1J",
  "key29": "2RkgNauZMi4ga6F5bSU2zZ6KcfGcjrG3DnecBWgn6k87KqJyN2DdqfDxVvSEf6rpoDF7Jugt97dAaeHqEhJZwkSc",
  "key30": "2mecnxpKPaeXzXH4WfDh8934uTdu5F48BdEDW4aWkKJY9hPf8JVB11f1w5rkToLheisCFjh9UCFTE1rk2pfzzRWK",
  "key31": "2HwDNSRpXibSDwGFbRgyCkCtyh2JKkjFtBtMaXrpJehmpj1oN4Vo1ReXMJqWBnmFPaQTkjyCSgMRS1NrQ84uXnme",
  "key32": "2PsT3mVeYWXyRJp7nLZ2Yj3ZwLW6b1PoFmaKMgN5B1Ljr8Es6Zu4tSgXBHto22fpmR4jb6NNTRi14wsbaubyJCaV",
  "key33": "64ysDpqevKsAgRCT9127F4LwM8TdQCjcUaBwXK9hoeyGYVC59SYP6cggc1LBvf6yWXR5pT4fP2m57k1KdZBQtraR",
  "key34": "QbHgBqekCfEXrgefrfisYc7yvk6K9AcoewUECzt8XnMTyabrPTFEopLxK4SQRJAGT2FveUYELopxxNzDFgzhUpS",
  "key35": "2hefwwu6YLByJ6p1zRN6YhvaHfBJeMCnxunkW7zms2nAmc5PaNvFneMgGegPyyrEBWC5sH1WezrW4pxRHK2gHibd",
  "key36": "2kSWZENzfuxbuuUDDZ1DZ2BK4f85tXKdsewfXBYZ6kiPPHabxd8P25fst7M56C9aRik7XKyVNtJ58nHjiTEhb5bL",
  "key37": "5e6cUf6fnoQDSyZhgftEJSz5XQfAYNG3Cio1FwR4UjLcVMunzjWoAEwrZCwgYuMpvok19X5tFK2cD8AUEN1nJZM5",
  "key38": "4WuQPdyDtceH6fceTohAkUZCj3iJo1WMdBDjEoJhhdxrjg6f8CShhecji5218zfWXHHBKUL1L8ZjDum9YPWVVckR",
  "key39": "E6UXannanTPkSHFhkT9tFofDkiEyG3LNPESDtZNSRFf9BNkd1xQDYNEUMet2eYbyiVjyN1TQP5U86Foirh4yU4a",
  "key40": "4UuxwcjSAEuywKkeZZ4kNG1sQS9k2NyGL81AP4qyAxmD6akjJFYWnvqcqfWNn2Y7iiUHFTbHpc5yZaQeHyQ2yBNR",
  "key41": "639WV66qVUzAZockeZDsxU3Q1amDfTf4yRQN8kmv3dqk6NFypAVXLkc5c9qTu5JRDeEBB3VdSRF7pFtrrDQATwD7",
  "key42": "4nEY1FnK6QWt4bhEwpR1qwecG9nc3dbpcZo15UnoL1CAX8VJaMKDuFqe3SSXd9qyYzSAzNfanUf6pRb6utEeva6x",
  "key43": "53DYnhkyu8HyNDyeZut533anuHNhsYpUzA8tjrJuzyHWJYiYjsnPYdUwvGUnvQP8vd1MMxUA6qQj3HRxMt6oy2ov",
  "key44": "RMMUezH7Tfo9ZNKPh8D8AH4p6BbGawkjHPANYFnbtqLiWDn9234b3sEWrsE1XfHezXa95AqZRFmgd63kNM51God",
  "key45": "65vmu6zqkHHRJUPBSrwZDqeCBHVay5FFSMG5q1SZTJZaLJ2CAY2xV36eeJ6r5qgC2iM1sMqKzmLBWxcBg96or8Hv",
  "key46": "5LjcuoEb9qu6ASHNtUqp2As2VGtZ43drTuRNYvCUxvCCTLH2Rhn6fVmH186gGq4pmRTt9hp6yCLyT4FA8d6xXsRK",
  "key47": "3kZnnasjMJvwqhDHstY98pTF9nK2jUjev87vp9yJrvuX4vsgkJkeA4U9d1nZRtqNhkJp5MgPfU2Ktsuc2cuDjYrD",
  "key48": "5EKSpDA5ajjhhH1qURZLnJ2xYQQ754szK3BLG7Sj8mWapj88nLBJH23g229TBpVu7um1GPDTN3zwSvxyQNMdGvCw"
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
