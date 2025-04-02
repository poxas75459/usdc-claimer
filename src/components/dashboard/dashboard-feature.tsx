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
    "ghnHJRDTJtFzGaUA3aMRfQyUg6ZbaR4RCG8qSMpFKfVWZiZBGT7B1GwJSM1u6XE7GSqG3fQ9qQTfifyRcEjy3R3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJZ51G3HcCZiy1ymkRABsFwKxpvJ2FCaEDszsEL6NE3HPDEossRWhJXCrD6Du1ULKWw1qoQnntgUKmyBWaa6x9v",
  "key1": "5Wi4kV2Ssz6U1c9bpKMsihQhSfVzei85vKHtzwiCJcYFve2fTceb5Z6PPfngsMKJUK1EhYRiiTpjNNCvVgUqGpiF",
  "key2": "ynMi6g8UdX293MWJkYHoR5rFF1HoPzABpUxSTQLPsp1o9GuhGan5NL8BSTcJ4YowbMaBH5bRfrjnY6H1NUkBbaA",
  "key3": "3yD2oJQ6onfXXcj4NbqjQHS6vmRuotVAKuNAPgV2xM12HdRi62iV7TSvQCGEVx4UB66cJTnrJrvvmLnwaMHpmRaM",
  "key4": "3SACmceH7DZ9kUm7VAj6mHYaNWXtrNHwG9BW4FNkYKMEAABn9w8LkXzNQ6UzshQwaeuqYUwvRs2W6YraVwzLyvGy",
  "key5": "3c4GnLbDAdctdt8zSv3FjQ71TPNM4wuPMZz8s1z62g4ywPhva4GE7EkUJybPFaYCFmnyxAsRvAyrgg8EcJYU1nhH",
  "key6": "3E3qV5S2Kt475J68wM2JxNNmbfGzeKeXh2Lv9acY1Qbhbv2GX8Fu2TbFKFdLhjesRfMTf18QVPd3NGZQAk2tz4zK",
  "key7": "2Cfiv6ubvp3UW4BABdjDxnLD1iHQncLoPBY78FD8aLHRMqQ593d9puFvqTF578cxFSBTcwpJpXTpqGeNCNzb1ypW",
  "key8": "4bEbPkLT7JGWKb8EDpe1gHdqcwQYVunJ5h5YedvJSoFgEobEGKBE9CwKYSHHAYLvEir2jBWmf6mMc8NhFE4uvHXn",
  "key9": "3bdqLF95tFKsT7DX9t9G2sD1Z4WrLbPpEdZb2L69cGFpPujVeSHHb4aF5TPAjVsPWBDz9TtfoWkXyme5vnsLF7hd",
  "key10": "5xcXrgsq4LmB9F3tXCRPNh2pTwPEe6kEK2EEecSFgTeZe3M9QnAVseJK3BZJB6g8LFk1gBPxE2rFFWieAVYU2dtw",
  "key11": "4LTm5PRnLFujfsK4rdrphe6NhTCGcSgbbqSYPEURt6FfXB8s7uUwrJkbM41WYZaUXhTbFg4P6Th5nArFXFFUadLW",
  "key12": "3knKQ9dv6aCjyPANnC5bAYqdsQxUyB3sicvHfnUFvuoVxQr38Ycb1eM7DJmpN2bphTeHJbjydmrPsERT7smvBXDX",
  "key13": "4LsK4VNy22oWqqRFcG7Q5NnFu1uMgLbZjofNCSsW3Ay1eAo56AcpgCkLBroUZ3CkngWwP7KqJrZHkemThhLaHYD2",
  "key14": "N3tc7WXxD7fVEYNeASzG2bQdciCumB11DDvxUVB2ws7TjjVQLhpV86VBm11txgXbdLRUCJaFnB66mNSQZJQGQMU",
  "key15": "4ZdTZdrcAKoPLUd7XGSBe1Edf2fVX33oKCSwXAETijwRwD3Ub8rU5B7LGJZG1B7gr6TrRBfoT1TaqnQjVryc2guw",
  "key16": "62oW2u9tSxaUpDfbz5ThzWzgY67dFhXT9UbPaBr7VWm4mXeDzHRVhmg1SZSVbAHAvDmfUS2GvodNU42D2mamsA1b",
  "key17": "4cYPQHC85Nyz1TKQLEPEwidgAhbchU72mLbrEiHP7u16LbMfYMFDgDUabvoyUdbht9xVSrcseqAgh5zTSZZJqvxt",
  "key18": "MSTotWdb4UqVGn3LMw2yYF6r7VuAwxwf16g2q6h6GahyiydJQ1m6LRwALR7bCUj7TLov8vv6v4okf7nVJBzotjX",
  "key19": "5QSrzNp39cfvBgNLuNd4u8TwEzzzLd48kP7wPsMvTuh4ijzQKSrLb4QUFfdK39in7EqfrNEdJvq2j7CasDSaiPTA",
  "key20": "2yDPw6WmyDXFJswv56CSHLpMFgeccvUTKtHA9jijkZP2Q3MSqdjauRpeVNRAPc7LUnyB57BYbKpyQoS3n7eJ3Shj",
  "key21": "3tBKSLVQ8Td1E24eRtGc3Ksjj7zmF3ZQufpFg2ipA4e2J6kKT2Q5uUvJmZwDEAhwEa1q5ktj3QUE8y6qY5Edhi62",
  "key22": "3qHqSY4CCk1W6CqL1fvVEv4QGaB96Qrp9XCFAmge71nBUvsSj7JfB1jTpu4aKVtPTbDuUDJE38x3Gip2ejDuWit5",
  "key23": "5j7n5skC784mfvQEdqNBKbJChBjQyg7RHhWLEKdseS5aePa9pfmDVUSyKrMWSJGC4FPx5RAUZpLNYd3UBvVTSHpw",
  "key24": "zzSZmaQDz67tx5qkdQm2e5ouJE93NL3YrCufc6gvkdWKZAF9znaVGKn8WvBPVeapZ9fgo6d94a99HVfaMGeTvF7",
  "key25": "4uXgjntmpD996rBPodtbXstXG3M41JrP8h2YVJsgZ4RJJqcewQp4P1WtGCDh7CXdr9A4MUtpZo62Ah95C5mbqKwV",
  "key26": "5Re8kC3i5mXfDUTnkcuw5f7DAY8ZRuKgud4BnFd69SAohEruWF3SsxKMYtyogqkADn7yU3Ma4FE5uLhc18BkPRq",
  "key27": "5BtRfiHAfpupmr1Tpgr4HNsjV5BsQ6xcg8jEWFEeYaK4nwaJnTdUya9rqJ2z8kvNwQCirPLWQWW7LejiYMMqayKm",
  "key28": "23DEr7TvSW8gET5wAdEP5WFqSeQNoHGL1u3syo1oRXUWK4oRt3rJvmDm7cFfPymJwHCjvVc9XUbmwA4WA1sTNNXF",
  "key29": "3i6XbWSeujKUtJYezPUZUQkSkvy1hGJhrXFygtwKQr8QqtEXmxpeogUtbL6m6t9Hr1P2a4LqgUZ3YZVs3CJA1yxL",
  "key30": "4fLojLRXe9jVbu7JjdZZMVXbMwLQ34QQmvehF5GHXxDWX8mvwNgqbxYk1bzj2aLwoFGbCDwV4n2DsVpS1Vqsyh1n",
  "key31": "5BiT1pRfqXqY8RP3yg4N9LKuWnQVUadVZhqDb6TpVU1xfGcQ46JdeeaEjdYhCHgvFHkiY41FBpe3UCXVEB1um9yA",
  "key32": "547toMZCjxvMSrqphDZvWtzqhqZ4KRnWSg56YJM776Xk8ZRH1tNB3U55NWvGjoR5cCKn8LACWixaLMNVmow2qUGD",
  "key33": "44wd9rdKCMDqt68cV1NVg2GP7Sn2STdRd2Qxm818bAaFYyCHMagfU4SC26819qrB5N8qBcBJkrsNTWx46da9kUyJ",
  "key34": "5o8feKmmd9EEbrwdk9r4xXfBHeuSUsdayRvwDjk4BYriefnGS8D5kwj34NXQ6pVdZQ1HLmEuYp9osfpgwuXKaPzp",
  "key35": "5gvMqcauLnk1SwnsqQAoa7DkTKU8HhggzXEwt1KgACVAQHAwLHaHbkiaCbyaKZQJ5cqjme8uCUEU1SkjhybntuKc",
  "key36": "4BB6TtR2wsXUe1NcuMNCVBW6sxggC3CckjKiJFaCiqHNLvdzim8sVJrSDfbcAnMXTVSwFbcebWoA43JMvQNmkRKS",
  "key37": "5cPq42iAFo7mT7e4tiPiJDgbc7UdoBY57zF5ZzakhyHDmKoEQFGa5Qh3z8JE8fKhg8eZiMAGJUnum9sxhbkJheme",
  "key38": "27fvmjKaWGV3n55oxWekxLb6yP2GPzDjJvNCXDw5ao5s9zR7jZy5S5sG9AYg7NbQDt1mJaePxLbYqKU1xs7G6VtE",
  "key39": "3ejv3tkTrDwxsb3CXdEUhwtnFqzC2HYfET3whUnHpszs3VDVL5ZgNk6SaYThb5DjQ6iqwxtLbVQDZkCwkTZQ4ZjL",
  "key40": "a4R8p9AFWfPL41gJERipNqcnYFuZYT2q2nTdHXvXehwzg6G8BXUzj8qHRZKdjiAimGmJfF3akBigadZB4YYnt5n",
  "key41": "5pBJjZeu9GjkmD5oCe3o5o9zojXp5Jrx7d9UjscSjyiBERpu6vH93Amty3evsEPvDZksrNV9Xx9tj4rBpo2cQUnQ",
  "key42": "2LaEPSAWzZQJFYcn7PzJBsGJKmKa1NivWHaNaowYta8rAzf9EswJ1jV8vnevwvkN1dvN7r49PdZM6WQvS3mDy9Ux",
  "key43": "3yrczJ1ydzFkmzHwJyKLLmJVdtJExBXzGtUdqbLvKxr4aXoRt3Du4cqBAUxSJNwh1Uufb62Pxt1phsVSisSdBjJ3",
  "key44": "5R9QUQa8veUiSwJGzg3WM9GSieJ939U9ADmkyMaPL1oi1PWKzqtHz2YGgw7GhLYMeNYm7222YbSMRTaoZG4Y5iDz",
  "key45": "5PcStWnNgxed3P6q1QZac2An4hdDkUjCs5WtPNQDVMMueVQyCk1ao564JgW5ZDXR3ZrMvLB8TuQSQV2ZqaEXeJJh",
  "key46": "3J51aYHKF2c8fBw1eEfupAHoHR8pWdWFKHBqo8KMHajt2YmvPL7PwdJHhKvHzsvzAUydMLp43z7GNqPRYfH2VqZp"
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
