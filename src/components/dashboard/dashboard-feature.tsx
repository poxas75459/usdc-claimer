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
    "3aCuT8SFKT3uV7ciDDDTKFUkFfpq4ycr1qSiG8xxRLwSYdEJBBAM8LC9kNFBHCzK5NKkZMr5B1TMnbRED9mb4rDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63v4ahFU3ffHVPsvbQfuhRA2NTWWShaEAkJSXovoSYcvPXX8c7tf3qfTtfZQskxPmH5LVgNjgCowXZPzEhqMTvDE",
  "key1": "2Cb6dbSNiobYGg3t2HYzEoY3fM3NoVKUVQeTKceh3d5Du99p4KKz2yfpgcQAPJpqX9JMUteLxSvabvme5Sq2d9Aa",
  "key2": "4wsPC1PLo1GCRMGozL9sTqJv2xCz7ArQZ8b4LuW2KHaBhpywEXbZwdV1TqFJbkuRq9WtTk4XSNFaMFgAyyAPtRDF",
  "key3": "24BEn89zCfcfLxaAG2K7zqQxueP5cxWJuMzHYcsUberJYmi7XuLRfF44KdrXF7UmknW6FBh9hnmvrUwE4Fj6M2jS",
  "key4": "3eeUdpzwj2pRqd8qdusw3Kq3nKdXLtHqzrMXqDqTLFYn9d6q5ux2ct8wpnT3qhSXSPDzWWBVPhVC5uVaX9A6okqm",
  "key5": "3gkMscLZnfQYDgaKsCB6m6SDeCq8hBV4XrNz8PdjEWs9mW7K6CHA81PX6KxpkDwN1MkNBpaNLmyufhp8gu3Wtaco",
  "key6": "2fLaAKmeYbiyoqMkn9b6UMRPaL7iWNeH1VqyS7kb2deH8wNLuEoAsBZGkAryo1fmtons7EYJgYF3BEBVsSWoDYDi",
  "key7": "5oaeUBFGxhapzAjfNQWc3C1Do7nDjBW7jDxLAE3RBCCHA2QJNsaVc2BdpaohTY8GwkUPwVV8YodJWRAfhsa8cV4D",
  "key8": "5fCx5i2dpBGJeEfSqVHMmZHJqu5HqDdoXuEEp9zcfMh5dCRoVVHZUiCFAQE6m467gwMq1sJh6182AekmcpYNFyW7",
  "key9": "GzVGy9PomYsqMS9PrUaJxP5nP2x8ydCn7Ktjuadooisi6uUV9Pd7xrJB59cDBn7mYHBPLQLLpM1ycyM8228FoC8",
  "key10": "28NsHwQNcpyBTQTPMhMiCi5HqifzPu5QbSkHwAjP7bi1p5hf5ZAprEbeCk7Wg5SDPQFsF4638nrTg9BaEtDcB6if",
  "key11": "2bNagnsojmvi3jEKjBjwnz7Z7At2drcYAQr1BEVTMpxYpVt8de6nZwTLuzxKM3jEr3H2pYNFEoUJPPoJn1t8TNES",
  "key12": "4idyrFVSP4y8XC7i9zCpaM9TzgKPTkPNsdGzQ7TJEsHzDMsnFh56f93XMh1dwZEAvg3EcpCWHSMNAXAic8k4HtQZ",
  "key13": "4n7tiuNSZMcS9sSVVoiZFTMoGeZBFKHS6Lcg6LrfXaHXMbMKaveWMvNx7zD6c8uqDdjSFrbTjX3okD5mDHc9TGAL",
  "key14": "5aRV12NkuctACyw9WwwHcw1TbvJg3H3yjgynvYxQqGPhXu4izYtTN13N2E3nuQriZrQcBcGEpDjBiWLRRheYkH1t",
  "key15": "37qA23W8sa48WKpkS7iivs1W9Rv5eA1XL8LUopxhGEsCG34e4XyDYbA7joxg6kNyDHHrFurbHDiWvSbpTi5A2fWM",
  "key16": "3fS7EMuwqQo45Xsmvw4d241tnSYkMrHr7mB4n3QTCFB1n9i2ksKjTz3cev6mizoeUrJ53ejbTg4ijPKL6cgYf5G1",
  "key17": "5NNAU2CY8wSyw6zKGHeFQdmNVZ12yWDWJCuvTDf4LbWMEZSwW4unMPN5Q4Bwidp5MBkJ3LM8CoeiTv94DuhEhCcL",
  "key18": "44owEn1ZUoW3LwVTSZybCx4hmAR8Gzp5imfKqprd8rCi4zGyZ8jXd3bZrz7sfTT5mBbVvrQ5WQTts6GPQjU7tWnM",
  "key19": "2xLbnBn4LnoGLMv4Uz2rvpD78qGSHx9UsHv2oxTGst3NDRfR8grvJHDw9h49WfosxyetMHD7KZRr2XUviipENPH1",
  "key20": "2QUaPF8BgUtr7VVgxHGX2S5iAzgKbfnGvZNZmMSvYXeZ1DYoTdoNCZnMuMc8B8oXKsRKLRUkpiGXDsjMixgSuA7Z",
  "key21": "aKk1DYH5q4HSjsM83p8b7FMMJUWNYd7c5XVnW4EioeGjuSg4vXzN5dvFCW6VGQaaBgbgbGRvxutYZFuupAP7Mxa",
  "key22": "3meUPGCm3scCfiGcDgV8qH8CR3bLqdDGhsYoAbXxCrwLEecnct2XmXMYtJdxhKyU9epMWQAcQBZuvc8rDPqSFuU9",
  "key23": "oiDSzSUd1eYAfjpkRn3ekWraiEacFveAeYogUTfRWprLe7hXijm5GPUzk4Y6dNceCuem6zTn6hjAauDrKkPj5bv",
  "key24": "2yTAeUo2RKMYKRBf9QPseMxEtJGT8vxRyo7y599V9VtBPyVDGx25jUEn6CovSKceJ3wDcv5VFRWDNPTsUSNGY6u5",
  "key25": "5eJxjrq5VuxkqHY9NLT4yq15aBjHYySjNJKZnKHC6rHwT1DYPLPJwZZs8YGG3NhPoCYTF7zgfsGotdG9LPLGyuuG",
  "key26": "3cE27uM9KJtS6iMntoKVHNggRAz3qdCTnVFREEhrXhih1KBAMn5Lv7jHTmCVAiZJzHSzWp3G9P8iXm7k3kr9MdMT",
  "key27": "5gyGnu3P6cVzN4khdg7hUmFWtJVQkfdK655HpvW7QT4rPL9smZRPy7CKkaw3DhiJw8ou7EcA4ZKcLgDCcuGXhDJu",
  "key28": "2qj7Vo1gxwQNNHD6LA9eFGYNtF2GZyii3iJc8pRTFkJvMpkRDRct18S7Dy7cWFTL73dj7YQyMi5BhvQHFC1dPnFy",
  "key29": "2kogsfxuD9mfzPpHPQWKbuFiBzs3exaMC56haViXvxntxpnvVzWj93YPoAvSck3mZxVyvwy2eDqPFjrHrvCPYpTf",
  "key30": "53NUKt6CMxGYeiTWcVrY7yvJgnoz4HS8GQUPCo6zBX9ZfT5u8Q1QnE97J1h66y2FZ9yTuQfAFnhKcYUZ9WnZsD7",
  "key31": "9wLPRfGwoJtbtvbQ1T88rq2TKdNUL4WX9FG5rUw2553xYkZGJBaQ5xEKyFxu3s6Yu92WjQd8Zxpk1wEZZUKeaRW",
  "key32": "2TdKkNWFT3kCxtdSb86nD6bdMmaxjmKsog5aNVHwh1P27sYJC8nQGpWZxw2bYVJpwfds2Hsihqz54jT5H2M84vGj",
  "key33": "uQZsN6HPFeaApNz1vceqFbfiJ387ey1LZ1uKbAxdCnqrUzvVk5FvzPtxPQ79CGYJKgsGHt1LkYzinRtZQjmuntB",
  "key34": "3Cdh8x7hWFrwfhVt7TGQouhXNkL6ewQjFfQqCTv7vLEvc8ZbAfQygaf7DcFutrcKyjYV685QcrAT5RNBGXMVmWwi",
  "key35": "Cjdrez8fGBLVyduXPTeKqSby6g6T2E6KXFsnY5b5QWxsdpeaPEXshW9b4beQopSLHrDg8v21bhgY9VzedGjX5su",
  "key36": "39a1ecnGvgeD3G3wExSq18dFe5pL545nnEg6USB1qMByLPqtjKF2BcjAW1kV5NuKSmrSXScpEo2PoxHNAckTf3aJ",
  "key37": "2inACsgZve3nmFVY3jX3H82QYWHPNScQ12G14TmQ3DQAs48QBXJJSyeuK6oi5wn9nYD631w7kttqm7BNMCuQJf9c",
  "key38": "26HfBgQFmULQEkfppLEWguvnzzsvANXYANMGvVK37xZJS8C3785nBbifPVSHN9E1nejTX1kYeu1J8iBnVs4HmAFx",
  "key39": "2upkL3JKorD4LDdKHZxjSiERmY8f7S9hg3G6LS5ZvMHx2ung9deF3pWTVzuJnEUiMuQLtGMyLijsq5ZHiWB789JX",
  "key40": "3dB2eFf3PFYcNWKzDTrBfRNNA3SER19LcMNh2yw8MuPtnxtfUd7uK8vDTtsiG56A34qUp9w7EwxegZQueXRUAqy9",
  "key41": "KxuN6X2NApV6jXvCqMnNUr5aJ6Rzo243vF7QHbpxdwwGhHxCe9s9URoFkTyXzXSDCyyo65Pbm62B7NycvnfkAEq",
  "key42": "3eLLwCxYzdx98dspt5MxdgvhSE56Kiir194g2H3y64b6HVBWJPumVF4c73EY4yp6J7cYZ6eQnGJdVaxfuYRtknRg",
  "key43": "5j2b8v6VEnXm652Vfh4MQMYpvSkz9wnUKfVRPvn35DsiNcBaRnfbyfM5DrRH3fGpZnJ6kpPcCmsDpJRsm8n2TVep",
  "key44": "2CAYjczrCUVCYjqYzdeKkTkq8iMybCu6Dtykx3eirgHMRCSm6ok61GTYtX8ggVbhVsZd3ySZbmaC49PpNdmi9Y6d",
  "key45": "TR5MvKwHQdmQJq2ZjnnZLHPWBMepUcYFduoXY2inMGfJF2JS2tZD4Y6HUWPLx4fLgVskc66pYvDuawqRTvy9JN4",
  "key46": "yqTbaw34uFsSWYNRNinFuL6ZAUvHgb27RHB66iHuLaCR6JL2mWm2XS3uhUmF7gmmMMzZDpTWu9XqGqAbN8NiNyQ",
  "key47": "4b5btnB5ELRzeh4TqeSvW3eBavUFvpDS7hjsCG4foEAHgbRnLLktntmbaNL6XRjncbM73bvByQ8DLXkb1fds8k74",
  "key48": "rXTSJ9ikeDzpXwogwbH6oXE1aZ3x2oqpsN3G64YxSNQsxi92wfEb6xMHX5B4szk4sbCWBgMdhmcEdpnDVf9Q1jh"
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
