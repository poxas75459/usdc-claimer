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
    "3HL5NAvzSgG2XRUqQx5oaiHZSueGKDMnAVvFFewoEEXfpDzU8LWscBmhBbdR5zBKxqKbfF1VzkGvaPnXVtwmXiVq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4jh5jgFJqU6HWS7e8y9X8JvZ8fVUw3TZAu19nZfty2oGP3UzgGicxZaAW43rkgswudHQPu4VULHfTYTYQywTRf",
  "key1": "3V6tDfz8SJaTadamQnsoVyzPG7XpkwhF3yKJEYxmBMRmRWxRTJ6L8BAUafz7u6k2P1VebDTgarZtA5WNtkn7CuGG",
  "key2": "3aajNDbeem4F5jKiCgTmhXCf4o2tMvdHcNGYChDF1QqZtvEWPbzSZ4eX37t7JRaSc6cPQ7BPkupT5wRVjrfWW5Z1",
  "key3": "5d4b9ELfm9p3NvC6gSTTuzmjREm6texapNpM2KnuWQKAVG7U7dLhMVmGzVJPR8JTwWaspjChUNTDMosJGqebgh4s",
  "key4": "5QvMuLgiqWNbT9LeCQ3yZkXFruLim399Sgp2VoCEkskxJDnRDT3LuqemGgnSpaft39hoSmVyyP8hBDHvpFT3d4g3",
  "key5": "2cqJoui9byv2DtDmBGvcTBvnrNUQ333zzFbHjX9RoZ2PB19XsuZBCUa3S5SmK317rgnGD4rWVzTDqzDriDwZkKpn",
  "key6": "2UxGRA4ygVwYhaPUA5PgbtSRfxxhQBy1QugCF91nDYBQqEr9P3fpMJ8YD2LUsHEkUhLT62JhzFZjSw8ANWNHwCKE",
  "key7": "2mTZfYBdXVct2am2Y8NnscL57Wwq8HZhSuDWUr2BEgn6wAqT7oktEq7pZDAnyAGYfnFsGmhMSEtnyJbohcwi1ezT",
  "key8": "3ci61mcBWBjEtsEFvYY7DQE2e2j1SqGV3kQ44FFTbWfzoBA6xSbXBYaB6LQDgVCHwD4fGywJDBzm8z7kxrDC9Csv",
  "key9": "5HJ81puNDaa7GJjgxEqUKjEP7CQaqsYesxjLvcXC6RaKbr6Rv6ZgWLiPwC7MgLoJKu1gjop8xNgDXznaRXG35s1K",
  "key10": "4BKqp8nAXaDuNeMRzqosSpi1D35vmMB5YK7fDThxe2r6G2E8kkJep1T6Xvk56ojoE9RGTWXeUHtFBJ4NzY3wH4pB",
  "key11": "4CkyaGKg5EiKzgVF6N1RPuX9BzmvBKsdGsxHSFqdwYtG7pKriYeadMGB8dpkibr4rq54ydapRLe7ykQPSHVyHeZE",
  "key12": "5ncAifYRHyb76mfC7nLbGBbXr9MUbPZm3hVpKVrrUvMgBJg9LPqJEFQD1cbpwuCauhHVLezAEWTWasqNaahkWkRF",
  "key13": "3U5BG1X3oB3WA575pKyPm7sWwkbJoErxrBGRfB9go1mx5d8gkqPG9W9toQw9h36DnFqTQx6xjY9r8XsJwHEF85rn",
  "key14": "5sWpcy4SLh77yxTP8vwkrLfKJbTTfePWbeFZrdn1rMdYhTnuzQupFWqCrMjXnPifgsuf1r7rD2iS2P5NipVpgRXT",
  "key15": "5utEYJMHY5krcAeqv1MyYxy1RcJcZcQ6T5AxGHCXA6tqmJsQEx8CcvgctPrwYN24JBMtFH97kMJ7rWNULMwx7JGA",
  "key16": "2wkTNZmH1KziisT544cad5PzfAEZRzbHfjESuaTUBN8dL3y3NobdR6SfMpCwhaaZo9jQfbKV8mEAEWutRYyZtKEW",
  "key17": "LsUrrbLK3johGvqPzKELiMGtfkRSRgfxT2e4Uq8kYHbJtvFS8sL6iTvWqanjdecefpCe9erX4ui4Au7T9w1LLJz",
  "key18": "5qgJ1vvJPCjx4ViGMxZVU1DXRs11sZ24qywVcJKvNZnNSZFBBk4MjGpjwyv55WzRDyHyizH1AuH21vGcNhXDec1n",
  "key19": "NuTA5kBMjwNUg6EPDge87ME4UTxiJqcudsRqEnV38yU9iXCd712XQcbr34Nopr9rAayY8VSYHP2Kcu7vjGwS3Ev",
  "key20": "2UxjiGYwPZdmATMoEMF8xoLkbgje8utHohbtj2xDUdokuwdzSgcE2iU9rqNLkvWKBqFWT7RXRFYZgRLWrmvUGwWA",
  "key21": "3HfVQfPAzt2xuUjUde3Vwjr1VrjR9C74yYEzTUDEMrzrx3X5fvHtrNUTamfy2Y9RY8XkNXhuKRNq7QDJ2yAETpL5",
  "key22": "4hnza7EMVD4cCY3BR3qhhTFFQVqWap86uyhTo3N9tmcEfAMLR2jgmEmBFVDBLQefByfzNJBhTP9Y6TEfWXHg6nDi",
  "key23": "3WA1GQ21bZMpNVt8H9bi5CLem1szJHN18Cph43Sjj9NYq9NMQN2DkDw62iqByX7c2kA5LXSGtbCMTx6TpDgjhc8s",
  "key24": "vaBRfQUy1Q4yfmuYfrRFwF3w741rv99r2P58ofKsRzPwMkvdiwizwXZNKCdQuiq8vm8wXQmcPN4jBBb4rBVX7VN",
  "key25": "4C3gmMudwYwfMsbmudJAZky5ypRhCtrw17KFiJfscA1ntNp6HjxPuaHqFbxhAwZh3g1gR9xyKJAawhsN6DxukXEL",
  "key26": "3MkkrXKa2GTvt2Mz95pwikdurDvCniRgBdDreCyctvnpPSQPvj4GuFBPAwhace3iD2pgXmgrLK3776gHDNA2m6CG",
  "key27": "2q8Ax2Zw15XkkyUsV5n2ugLRB2nxQB2iAbRCGxr7PzdrZz8q5namxLNboFKpxTpyAA9VRugAa3hUDre7dpFXeSE5",
  "key28": "LkyhaSbP78buxfaCEmnuAaoeztoZGTi4N2LormntkMJgJsrZDgebzDtTJjuHuwPTYfSATPioH2ix5Prb3Lbrp2m",
  "key29": "318EZnnr7uAVxCP97hQojX4QFrUB3bakEpf64TA8pHVKMEJocmnKzB24mmKTABRxtvGuUxeLJ5gfY2Goe9JdLwr2",
  "key30": "4wy6HAtjySRdTPLxT4VCSddQQSzUHsh1io19qjx9SfYtcdCxj3aJViRyVPRRsfBZRjRYrSWqJ6PEPR3Ez4VXCj54",
  "key31": "26vQy5dtP4GHhpjRkBdzRAKj1uwAPimNp9u6sPxDymnWaKhhMtZjmF6HDgAWJrePcxBWkF2ULqhMUV6VR54yTm1n",
  "key32": "43u9ChkZNcB9Nytprcva6C8cuCRLCrLTQCEmRbet18isZMWV4y2WEPwMuMC2PBCC6S3WTJXcaFqcLSh3Jg2qd4ya",
  "key33": "2xLfawL6vvDCabzTGwdoW9CGkUtQANdfMDUSBVfGaFEwhwFkSK1v4DJjKELwbpXkqREEK74ZLYGBZPJ8fXnBDcsc",
  "key34": "bFLVmiRCCmciaCiNTqTeYdTnhGoSxY9YTq3BvHNJyGePLZrjh7DNL2uytyqsMNdS8fh5DEd3cg2URc6F2SxzQJD",
  "key35": "H1AVzNap1rHKpbxmHDV9gpEhejgHuPmDiFnCMa7qBk44zLxQ9b56sLxhCo8m6Wm4ugGFGeCvGGurY6949rZYHqZ"
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
