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
    "2nf7MA2xCDLTSRqUSF72j8oKBKZH7XquGpXCWtjHyCEaAv5CaHX92rRoKA6x4mF9L5JxwGsynzuoXHvpUUNExET3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCBTuhwDUfeNzd1JeXCCpTRJz4mb51Refn1Pqa4KaNvcaZbrh16DtHPJkHYqhdx1drNva1y5jU4muCR8TKDWLQa",
  "key1": "4gM8Z2VFHVkbdYLA7a789iuWA4ARpi7sTSPv1mR6ZPz3ZQ42PChGHUf1AthSPhFMiXMMq3t9qq528SRvGAsptAiv",
  "key2": "ut4qjZjBsTdt6AeFthFgYFiwzs7MzehwbQjoEGRRmnL24oNEdTCLEEVNTxSxMJCXVba3Zukdij8yF4ZwDv5U6ws",
  "key3": "jMW2qZkGkFK9moN8KtXdFpNXDSgGzqTvxyuYdvETBcGHXzkv69wppiS9mh6uo4zxRtkUhNqpb3fLmC1NeXJrKrb",
  "key4": "22VgZMg3w3np9GVPWd9vxhpeLosv6A1oo6A1vacruT77aLmFtiAhnRYtRewuMxf9hcjqzw4sVzDzjDrY89mPftyv",
  "key5": "2cDdYzbdnkf2XarKMA45DscrbsL7VpsDL8j4FfajndLQXbf6udS1G6GbEdigfUt2tx2rFYWs5uxXDSnCeqV2sHxc",
  "key6": "5PzxCpLET3Qd5HDpiwgcyecbBgWLwsj81LyZrJP96xFsSCT6NZPR4ko8De4iNdx66y7AaTBMCXT9xqZvNm6Q8wcr",
  "key7": "M3eFJ8DcbTwdXBAoBE6XQvRo93qzxWzfuyLHezZo4hTUqQiDGxA6fgYTuRCn28WfpcqxEEqbFTPU2BpqyvRL45K",
  "key8": "4ZHJeDaXiZsxfQkS4oyxpxV2iFkLsNZ6kDcP4SBVrLYfreXRajHe1d7Q3eDX993iLgf32oLietB94dKGaCFdc7cP",
  "key9": "29bgLJNxGUqK4Q51EFE1H9bANJUwX9s1D4JCxBpPdhzMu9YazsvDhEByt3pMGfhrNeTLyyZdetM3yTkdtp5zHEVm",
  "key10": "3NBkSfWPK4KFughiiCBh8EcHrVP2FjbZMUyLT6xb2X6UEcjNziqxmxbhAEwNfNU9pop7pGyQ2rUvtMocwfth5v22",
  "key11": "21hwk15UxerdeNfe2PeXtxm1Jg9WT3NC2pQKqF5jVYncRUy2QCofb3238RaDQ2qrt3G5xCg8h3a9zj2FqhN5JmJ4",
  "key12": "4BNjUota51oPzoWogpP5wUJY6EPPkr7tTxkXCaWxuJEUUqWBAjAKzqPjPFd48Qv4TvEHwae5RtZFhoq4BttABvKV",
  "key13": "JNCLA1oV76XvzmdLTFqAiJd6EuXmcS9XdqzYMaT1KbC13k7NTYJMb1j2uEUswKevhWphSWabFLu2CWKXUR3gXLM",
  "key14": "5M6x7skAG2Da7gGqBxsvBfqX2sV169Kf88ywfEaVw1M4Nm8DNJz2xeicgyqg8PKGgD8bYByUFsVdJkzAUCe9xkRz",
  "key15": "5DSANxG7butgnu4cLSUMCueomg9R3MZuPzFCAJbX1empvmFedbAxUNWy86U6K7RhStCBb76mMcJwJdL9EKPACHBk",
  "key16": "2hKBBPMhMGBRcTwgq8ERxyPjhkzubFjtUXWGvGuqFYeQUdbRnEn7Qk7Zuv6gpN1mDyEFH67t5zJVod8dpJ9N5wfu",
  "key17": "3xGngLuia1T1rSuSKpmzw9PMdRE4AK5kAwpmVsaLhbNyQqpQxocLjPppTQNtgRZq1WMBVpmusHzc5E6pEgCeZovh",
  "key18": "3LWo7kYFwhgC7c1REB7n3JQ3K3GNJAhT8FzCTobVXukLSmeQm3GbGAZ5HaDa3eEuFaEwHGvLpPNKUmAfAN6Wp9om",
  "key19": "22AiZ3eSfr7Kz5meEzpzru3H7J954B2vHyTsux8SPmgqJXANjSS9nN1ShmUkn6qesZSK9GLuqGZb1MoTDf7kLBFN",
  "key20": "4k4jcXDixFs63ieNtV38xnn7UQn464MoVKXrGyTRmgRnrcT4LCSco9CPLoLtyr3muy4UQodqtnRJXVqwiktJf9JP",
  "key21": "2B3mUF5RaD7gNDNChxvkGkDn9HLAoWfRv7P2zVhBoFixET4PgQ9FYgMChMEDLQ9dZk7cU2AY2UVQy6MAfneZHXqA",
  "key22": "VdP5fNUDSBTja4wenkyJuiQfzTYU24LmgYm17DGsskfbKRARyLjB4iV15zgfoAxnjbNw6Lz88dU4UkF1tGL1Pm5",
  "key23": "SPs7kJXa7ojt3gWRPDxQb3eT9miB8HzvdhbKEwTuqNWRm9W9cmf9aLnB3G9jZz8kW9X2saBbM99ngPFmfcxC2Si",
  "key24": "4FireYUHzUD2KVc8hSLtCVNumVxd1ewmYythEfu4ydLQX2oyBrECbAoRFnEnLezvEvEYjaN77uNk5ExvTLRty9tP",
  "key25": "5824rYPv7Kc1MjSX7oX1bMan8HVmrYhqcvatcE3T1htV9KQCC4nxBN2YyDpErXVp2GpnNZwS1u9PG2Sfdaaucwgr",
  "key26": "5hC8tvYhFY1pYVRtPZuP3uBTsLABKRGABcQY2oBbTXQkTKFLMnbTEB6npYPQMpAxdA25fBe6rAhiFDuA1vNXbpVh",
  "key27": "4pNono3nytHuBcavXbumrxqUbRATCuTzR7uUhA2gFoVXEMBzzXKoFna8wykrBFq2VKkAAJ2SqEfyuYrCQc4182Se",
  "key28": "5WQYTeR8Y778sXTVM9jPXAPEGx8L9QUPAXrQNzfNEvJn7DfD43qJj9LxEA1DUMqhZPtp4XUqew5hdq1h6V2Qpstw",
  "key29": "44wKyXt5C7vrjmVvaVVraiLcLgcX11zam2geSiPy1GiARuFYzEfuKPnXpUEZAaA6LaerQSgu83D5y5JMo9WQp2RA",
  "key30": "4CfcnKzvAf6SGC3Pzyk1K1hmvkWBp2EXj35NKd4k2BYCwYWcocC2PiKgAMK9cxkY1qDpbse8YuUkQ4DKkJ9NFRrP",
  "key31": "3c8eTofP1mHAPkTWrXxgHGZ78EY62W8Vk47cn5cQN7wcHLb2MkwXS759ewfTkJMaQWkCETzCAjfsqX1ezgyxcaxN",
  "key32": "639ep5XjEcHvu4pDZLYyeNe8p1TXQnHzy3BtoUHjwUQUUPuHtegtQUUnDyrknufRDCE3idMd98Sm8sScYy3FAriM",
  "key33": "2thnhmJjUWTPQAkPjKLP9wKhEc8dANsiMoK1P69ddT3XNyTJ8yptvqUvfubyAv7cVdvwBowgUSRmTvJRXY61N18y",
  "key34": "3rxpjSLn3SwuXFBt2geimYpNs6MU7D6USQaFXK7JPWkwjnyUsYBJUYEBikQg2BT5Zj66WMwazQ7FrqDdVJEFxq99",
  "key35": "3dYAZiBUTygHEGrHaS6oqYt4kQwbTYJnUjrnYQubRGNJ6tvdfwZNvYMQ9VTrVAYE1BsMUdAY6271nGyJeDqrVmuS",
  "key36": "4qv6ySphVm1r7XWHnKjphpSnehLYg5rKJdrwgv9TU8MSgfQTLruFHzfssFN2zW6Kku3dQTYL2mpAuKxW7bBiPMt9",
  "key37": "25grzXBMxV8gMyx4CaKBYcnVgeDkV4NsiVrEfwp8R8pk37XibsrTK5jt9bNipX6M3Veg4pdNQdj2nzcyuSHcvs4S",
  "key38": "5FTJWbkaR8Uh5rhtg5Cx8vYLxXxRga6AKqs2cuMaa89sgrFFJNqJ8ennVvtzS9kvBzwYFPTnHpdjp8ugcLHgF9DP",
  "key39": "3nK9qdoPGH6ZujQd7ASUL4wU9GjWeHH8Znu6uJ2fD9mVfDy7cFKtyxegW9LUiputT2TUVs72KHaCSFFBmNcCpBEd",
  "key40": "Q3H9FsYmryfve5S2nrHD4WvVMbCJ7wRckUEHwDi1cJWSawnwJhq5oFyVC2aL5qTFLuJuFFY6wNH4ckbD3w8P6bU",
  "key41": "4xSLWLKoz3Ad6iA94iuMDe3pFGu3fMW4Va9yS3ZmjEGbb78FMEbQTDVC5NzNTAwq9wArHpb3kyUpszb5BhxaRmgi",
  "key42": "2CyBEGB26iiv6MsjMec2NNcwZvr59NBEYwJuUPk87qydED5f1pub3EhanJyo3xfPyCb8o5N3gq2tHXqejvTpmHkP",
  "key43": "58eZibmNCoKYTVtzsGY5dD5cacU9wrUTPw3PoQ4mfB4wHR4KUDfgYZ9neUZgESJgDT4uoqvFAycjCyfr3Zphznhh",
  "key44": "3KKGKtZyLNYhq1L2noLrJPakho6VBNiEj2txkhVCH31nHUpKxbnTFJwn9pbRRbNjPnQgibU6zDLwLNdSqPGFH6g1"
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
