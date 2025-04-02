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
    "5AyF4SdbPQcVWFWK1vbvtZamYeFgRLchvThyXp5e76bTgFjyUzeAbT1v71fqNRx1s8aK8J7DHPRxvTRXWLgckqHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwB5pg16cLBkriHszzmYBcn8vynY3Dtevdr5UUeyHfeJUPQuQCe9QNyH1CJqiwr72ZhiD3uRL7BMMxGdcCHJmcz",
  "key1": "3SXKSbXztHXs8wfnGpDGiPNptKD3JqENcnkZU4Yt5uPhQQ4cKNwsQyKgJujDzbnqmQwSBQUwNiq1b6P5YZApfiwd",
  "key2": "2ieHpWG5HGhCahTtaPKNvK8Hb4zDjRX6hfrTPde9dPxXjgzp8yThqKPCrhAxgovuvm3FP7ptnJc7Un3WbpB6D8pm",
  "key3": "2UAYkV4W8b9hfQEKQTuZyBiZbSpXR2eFDojQp2vjJege9RGA8yKyDMvh4kh3rkzrj1k5tWuE38V6WqXXKKXURQDh",
  "key4": "4N3zSiTBXMG3VSrv5AWAEfsVJdRj1KmosZC3gGdFM2uHyRQ8DNzb9GwtJQiDgWMsXo3h1SCYBVTNmoXgde5WCB3T",
  "key5": "HPs6UnXp4wkJ8zZGmEWGxowLMwC1pJbFo5ktJ4jKhwv3CGq2PLFy7xBmCy4TqHG3xNoqXPMyXJWLNgbqBqqM1wJ",
  "key6": "2bVaNg6gbSSkbwxCJ2yoUT64Kcot7w1RRHLd79Uy2NUxRJNzzQAkVxTQxV6prLGF4Ab91UUdDYWy4P6Dx5JFUK7B",
  "key7": "NsHpjXuTHd9tq2XTMVTCTrQacGdnCacMLAASARHSqMvmnRwNi1ZZ8SpiDmLpZx5GdkQPDEQ1SrXyA35taaaamFo",
  "key8": "4cFGhp1PtmJaRnqAapP4mpjdFMvZDGqHsKcked5MCQ4i5yhGErUecoamQn4MsppdDkrwQFqQzhPg1MTCb7RWpn2q",
  "key9": "5PAxu5GiUgm5HorWztGQLSUpGQXQNVb9TDXeUUHNowh8ma624mvuNeVkxjTVdKgDpFBzhLcDkSk9srA6zJMpAa2H",
  "key10": "5DmJKFegNnh7pmt92ZuC5QjukWzXPzKzyzCKScuEMtZ5nQUiFjaMayw3jvyBDCmMXjLnKvPK5hzaU7jSTxWs3BzL",
  "key11": "5ZJfj98CMJKVrq1GR4cAjE5Q3ZXUtroNXDu7KXsvbuTh5PoD5tyL1kemZypz9yiK8Bomqhun5H3tCFfFGXUYCXS1",
  "key12": "4Yc9TLWFC2V1FYMt8V3GJusKnhAUzvEtbv2Ah5zDUtEPtFr4AuW2sCN4CDXhLrpPsJvhuVribh6DzGsTD9HkjydT",
  "key13": "64dNfNsBzWW81LMUte7kGg7YN6tNoK6rCcmpcJz9RXkDpBDRrY28URtppgPHZHzNR7fVFokyigCouLDe9YpXu3ZY",
  "key14": "5gi3dasK7afsB7bAJJWHF62Wk9YJ99SfE2GhNJtC55Gq3qnVcxJzLpj5nsFKwqF5GS52nacFEtUwC5J6XQewNZcE",
  "key15": "5v2CZRSocrekzT9f35mp9WdFqTgrvS3Gtp6pAnCeeNMX6hZ4aaa35UZSUaggibBHaXnxXMyUvTDQGdQGxFTBx62D",
  "key16": "281UZobKc94G5P6wfw8MVirzfCDLMK6QtLEJxoBciW5QDa2gGrCjev69pWLXY9zrD66gJb4QteQGE72ByP7cHWbv",
  "key17": "2j2XcSQ5gfeNJuw1K3V1a6btYu2QoMMK3j6gJoW4wnpKjNKWRHyXmiKGCmpFZkn5JHJetTQr7p5Qo825ZC5eozSy",
  "key18": "3osB8Mo4mMCyeCF4FfqiUUVQ2DrNUv2jUpeD5xu3tqLYLeH3j4o4NgjMAJVUj4pNiJSrqH5ybnQVHoin9JKdyoPj",
  "key19": "3oTsXpVd9dQUH2Z3WizVU9snqcfQve61Li73xkdYyiVwXr3zVYHkmuQtem2L7iK52m7EfJq3z7dhWDSb58JmbVB8",
  "key20": "GUGGuTtnpfqeC56QswLDvMff3LoZT7mLcVWBLBZhHiK6SaP73JrcxKHvfw1hK5XBPgRcrjhCEWquoKfoj8MGktg",
  "key21": "2c7MBAvHYoBEkXPS2ZVZWfUQLJMry4FLLLyRdqmYMxzxboMJ6opYMo7KvmLGVr9Fuq73SjxPgfKM3tEVdokMi38T",
  "key22": "42pSGCbPYaZAoCuTein92m5oiFooQ3iEJh5FqG5aVx3F6LpAwHRuBoDTyeHPHiETtdnBL5Am38gJ44G2y5D2QMmL",
  "key23": "DPJ25QneQtWEcpQv5rEANKEduKJtN47tHLbwHQkPNue4XbgTWhULEieTVLYABmY3nBYgxxhmXdrVjs33mR4cM4f",
  "key24": "VbTFWsdqEgQtYtCbLYYbNVwE2YRZBvx4w8563dBxtn4x6phpnSTzaj1qZhuXtc3aD2q3ZnsWLTFUiE5PFkZi4Vq",
  "key25": "5ZuvMEzK1RSFADAP9xCaN8hm9g1w4rS6y1xGujFCTLu5sZb8DsS7PhM9Bba3qjjrWNemjXgrCan6x98CGbzMoF7m",
  "key26": "2MhAtstcj7c4zrzuAXDJgBh9aHkxRaFH63DS3bXVVk44YGdFKvn5MA4HSV9gWocuuRaf5PEFDfW9qAEpgbzYjH52",
  "key27": "CcZ5pPR3SLw347nd9Ww2SiwqtagYiVvLTjLiGCcepdtZnDJYWKx1LJsPHm1sJdRtVyavDFgMJEa2cfXjgnxwkPZ",
  "key28": "5zybijUM6mHW9u2eKUS5x5jwYksyh9kncZcBesRTkiCWXm45d7wisshRmXZR7yPUBn2crYv7qatYBtrLViMkG5tL",
  "key29": "3XeDPvZNztw78ydQj8J2PEuxNtHLSybtX3K3QpaMhjAnf3fXMXbooVjcQeNdREdjZVuuuc39fYZUpTp6UzSAh3vh",
  "key30": "4r1S9TfgcYM8zZsggdgLavz3EQtxRZJ12EY6otDBhAprC25aT5yvQZgpNeLCgipBLxp5xqubN1u5voPNPCuUyCeS",
  "key31": "HCdKkJDZfArYq1coswqHMcohMX7V2VwWyC8uHVjYMkP8XCCa9Hwx5kmvBmp38Yhw3G8dmHSLJrKoGZTNjkFziQT",
  "key32": "4znqL5oBAKraR6ed3uksYKtAhxxbrQVyFPTHSm7aXJcaXAynLeZwhxwTq8ZxdxfBJcq3tJRPMATbuqjDuUbJHS5k",
  "key33": "2PJbERMhcDMNWT9izhEiYKGhBm83W3XZBCPrGGSnAGkjvL33r8gfrbWBt9tMnCQyzdxCLXE5Ln5MYK4bBVJyKKqe",
  "key34": "5MX5HgXJ22mEuK7hZQDdXQmAm2xE6fDfSYWjHBoDJNZ2wS9BoCeYqP6b91MLEF2SLRAJafVuvA2xMGWPjHDv5qKd",
  "key35": "3TyY9S5jEmh1y5Kn3CfRKTbDJFMqrxSGswHQQXBo14Vo4N1fgFniTJxV4L7LufQqES1kaoGCHm7QvrVSFXamgmKa",
  "key36": "4NekGoi6BxVDmU4kU1mAUyGCGCUeso4fGBMjaDductWr7qA5P1syB19hiB6FN2KT2twhfKT8fSoN3S57TwAzgxsn",
  "key37": "3howatUMsBFwYv4WU81GaR3FKXL5M6nAn5oQ4CpBhZsPbNFKJHnSPZsbtBtnZsR4m359CQvABD6GZgiLKScP2pWf",
  "key38": "4DXYu9JXC8EWyBc1Jum73QM4AApkkE5piQPkMyjh2FxhMueyMyo8wSGaBD52Q5xo4GGFxQScNgDXSU4giTzgFrLJ",
  "key39": "5CvaS9p7Vv3Cu4pKEJLyfqvVdrX196QKF9FYp3uad7mCBisLaZZe5X954J1ToRGgmZMogmW2F3jFCQ3vjmEmgNT",
  "key40": "54JpC3PpT1aAMpEQjSK1nzaGpkAcUWeUCGAKevmHitdygd19Ufkd8P4yewGMPJxv4STWrojcoCKfgGBnjh9PjX4b",
  "key41": "3ekgqYC7SbCyPyMNNVrxpAVEcX9cytDnQsFbjbGSGFdSvurjK8QgbPR8k5mmpsQ6xZmx6EJY8d4ck67rbye55iWu",
  "key42": "2rKGxwh21wyV8YvVEZVZVRtGzjFm7FxRtU1Ddsawyt8qP2yrXoVMP5GHZJCRMATvDTw33NQXhB418CZFAgebmQGa",
  "key43": "2DZe7A28Jc9QW7RrjwAk7jj9wEf7fedyQ1My36DFzRHGdMwMD3m79vFUWBVLXn8NKqnp2aaJuqDf9xzrwWPAjErD",
  "key44": "2p4aovVEnBRcS6vDEEZPBQ7dXBndSA42odNjYAEUQAwLBAZ2mEGrbozaPjjhhh4SSQNs38BUKNSiq5CW48zA7Qfs",
  "key45": "gXcJ2qvdSGeNWL96fwUUWG3srXdY8w9RqCWAsmYZsuVhCyNrLoR6K2q733SS4yPdV9SDiTb89h8PqC3LoR31gCq"
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
