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
    "66Md6RHMWUXwESEgPfZa2NHNrhNCLbQvgtCQz2oaFDbH6bEWXogtZriEu8fm6jJGWoxiPt4gGio8jM5fDtbMEH2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xHF9HdqNibeWRs3BxyxLqgn7AaeMVys4AqvECjRKfvYzpKpnDGt149w8GtZQtv6L9nXVxKwKhuRsQpfF3sSnaL9",
  "key1": "4sQyCbavdutUmMb4VUvuSRYmFrDpy3UhJWpbX7CS8rmCJmhJgbcfsGrQsq8YXdywEcSkEZxeuqUmExTwbM7xtASf",
  "key2": "h2kHvhWLTU4f18VAx9526MQNdoMGUJJ7PjMoq2VMRbda4URqQQovDXEt2sSrtsb84YSfq22kYNauj5xwAbbRLpz",
  "key3": "4HQUy3c36mj2G6nxogJMgozbX1B9jbCxLpfWuyjNrfHbwK5zCGDDvrQJTY7eiRNGQdApg3E2Ye5ZuPgmxmGnUEKb",
  "key4": "2TP8yRQuPPWJyk2EjNB8KkPvJdE5aBLfLyDsupsdLcLUt2GDzNAFy4JJQM4bjvzpH4EcCZnzB1bxjaMqFSKx7dAy",
  "key5": "52img28fewNumxbvyBMrQMGCdtzyuGGZNPAMvoUdvULxoNk5hs4kNR16tDVZiKkprf5brPbTZn975oJRXB8TGQVp",
  "key6": "4oEx4tjqAYczcdT8WjiHRENVouWENSrA7TSyfJMpkhunMX7CByYjtCNa144yC1MvsfD1FgZ4Vss9wcDfMSehoEjJ",
  "key7": "3sS12ZxuVdUZae7rQ2GbsgLWFRhGErP8rQmYEarAqATBPyCTzxE6JD966tPeBh8ZWhTADhLvaoM6qWY7hsm87GNf",
  "key8": "dmbsK1GmVEdJ55MqTSf8JdAZbPYpbFdJSSns2rbmM92PMDKGGKsUskx3iQrjJvy6z5puxADSUsPxBeouCiVoMn9",
  "key9": "45GyQJWUjK95PuScq2LhgwkjALrzHDSL3wiPLvi99AEzUWtFD2h6VVTtL9drKR4FXcxXJWQBQ54YywKaDgrP2iPg",
  "key10": "56axG9G5dapAVCjbKVpTE7uLB5aGVw5caEwE3dUbd5zvhM6cSB65UUxLhyD5p2iS4bQspCFvRg2NSjEi7TkWbz5C",
  "key11": "ZdL5dsZf5KsX4b7mGHsm2egpjvicy4krbufrg5d1TnSQkvNEMnDZdHa5RwgzerAcjr5TbMAGN5m8WQW2tix5vhS",
  "key12": "489zpfyhcESbH4eXehtoJ1UaKagTP5rtR1k9y1PLE2YV2g2Qe47ioLLVsDbESn4vZTpgjG9vhCQigQ3tPX3eSygg",
  "key13": "5QhE4TsjinEg5NQL3SSQbgvP81ev8yTfnzjBwTrGWA8ds92G1aUGD1HA6ZBU4NAvQn8RutucQeRaRYKhWT8VE7XA",
  "key14": "4xwUHTJNbr3qfTSrxvEtJxAD9puKDRv6kqfdojGFEvntNg8ceydB97VYX6BM7nuzgrmVj4HKxa6uxGXJi3hTGfDC",
  "key15": "2VQhhU5GcZguHDdvcZznc54tCy5wXpejsK4iTEae3hLQyNXr68BWwM1fmExD4nxW5vm44MsRbvRtsaWzGwJh48rH",
  "key16": "QrdCmkMJJbfJmnQQtb9h1cD6hhGdqF9wWVexQrFqotSjPtDbGGSewY6H58aGpPAnw6F9Tjfaws1iq27nhZZxpdH",
  "key17": "5aHTGWpNcDt6QA1ErWLfKLraaJphaQqu9cnkbfsqAudtnMVyJVHXmnEzQMbSFg9djvG8C7KmDMzTnsf5XnsCRS8f",
  "key18": "4ScCFpQoAivJKbfY3tsCWdtDanBPLwCH6L4Gsb7uZzRcwNff3RgLoQUkYdJsBWyViz2spMfYHiTM6VgERjyr8Zdz",
  "key19": "4ARhSikg7eATwQdJ2n5WeKU82sJucx6XYfD5m9q4HjKPRTrzFozkeNnhKZJk9vm3rXHdE1GHxGZdUQFSvBWHRPP",
  "key20": "uqEMrG1PUe5NhJG4fdtQgdojGFCnDJtgAziYWo2mxA51Xx4AZjaSHJjCxiPgJQeBtRcoetNcXqJxT6CLpQ36NgB",
  "key21": "2dikyvwJMgLwuWss7Ba7oa1Paq4o1nVVfSD8xp4i9f3xbtbTdcAAdEkoT1zNtVcg5EeDZ85yZ4aVwXvbEj86Cm1y",
  "key22": "3L6XSdcE4dB7XrP5UzNs5mZvF1r7dyGPv9y82YHv3jGKAQPxrE32RgMqwu9LoJqkQNGX14rhHKnqPxqHNbar22uS",
  "key23": "3Qk8VJLcSJMdwEquAahwXwxGEqYFJx6g8LyFimTUovpB5vTGvaDavqKeeB11wu2RraJneTiyiorrUEugtuMob8qz",
  "key24": "Z9ukqAz8QA6AyFZAuAmckWioVwG51FHXWEJ4DGirqTwJH6ZA6A1gkUqoEL5i8YqwYNH7MYESEcVm1LxiVkPPfD4",
  "key25": "4b4cBddhb1GWmkjksycGp1T8xHctAnr3JgrcfGYMip8dz8KPMNEfyRWQcg8Nsi8qy9eYssWxNZiipsvxXeRpbXwt",
  "key26": "2j9usezisfT7GXmek9toFBJwtrpeBKditW6VUDe5DR2hsg8UEEEmg9FBP7zAoqHzaAL3QzhzmevjQwox4r1BJrBt",
  "key27": "3gEEbXb17Gx1q4crJQZ3ouAweKZGneqVfxVXt8dwSDR1R8yU9DdfPYDkDk3KfswS1cgxF1xwoMFGpi2BH6gBcTN4",
  "key28": "64owmVUwo5yptqi6FQuj8f2bqJpPgRjw1KyCqqm27ZLqFmTHaDNCjhiDq5fiajnMZTNwrKDwH4HjyTFo63CsyGC6",
  "key29": "55zw3Vgxrmn7TZGkHPABXB6yD3ZDvvev8RBLJJbVdcuUePCaa2AWJPxdjKqAfSJNxjCMhh3YMvxsgRryP1vXq44y",
  "key30": "5B6mg8sk6VGn9tGvbeLtvyZfg3fF6KcfCMbRMouVveqgmLNAV2T6ZsrjhJhvFZY5buVBPAVpzrQatZpJCfL4mYq7",
  "key31": "3epoQsf5DK8SVK3yPHL1X4nTtn9yzkCt2ub2UUYoWfpqH5ZWB4F9ZbCq1N52t78n8v2CvWZBWeuYaGVV1v4yCT1k",
  "key32": "5R9XGcQA8rdF3jNXSxBViwVg5MSRsmJkfqReApoYLU93769xfbGyAx62DoKB3DnHqesJjFWvLiUL9R8zCUNsQ9w2",
  "key33": "4Pj7TwxBLD4VbfwaiTrXUmRRQHsDX43nJ6Q6bNdZ3vzzkwk4gM1f9aBh3RtR1UEVXzz5jEY8wQTY6JD8vYm9dJVF",
  "key34": "2DrrDF1FqUYrQjoqZFAwGNuZArxxPEJhsEHXb9hxLy6aZ68qMNhRLAAWVAbYUUmQ6ad7skiprZnNmZqAffSSVKqd",
  "key35": "3V9TknYCUpM7uaghfbJf7vM9CnL4r1f7rp1fcWAuFKNk6UBZ44eDAN3rpfAVrjeTidWZ5qztjH8tC41ZNGvRgLCd",
  "key36": "35y48STeUHD3iaVF9Ka7tWasCe9ud8u1TY9Eu6poDRmRF6tNo1A2qdqFZj94zwMxb4iD7hNXjPkmrF7aPERBoiLf",
  "key37": "3YoN22Ycu6pyzseopWwRxZF1KvXqdCnRDAFMbpyLZovgcPm5THuV1fm8itrcVB6ceExivziRUUJ1168gnfDjWHig",
  "key38": "23hVwrCpBLaPo9KFFEqusaWWMy6asHEVAzoCFFzbXJbAh8cgocHGeVCcmAiGYqrGJkgC9WRRzWBxuZSBTSnNyor2",
  "key39": "5Tg66gDWA2Rpx5wDCEtohbuKAFC6mVeLZPyL6uRvr5GrdSJTS5s5v4FjBamcAgHwCZj7jADo77tF8HhxPo2CYAQp",
  "key40": "4kLvF61h1etsYAHTZxNBZQQcNxVeGoA6g54JZ13YDAsEmx7WEjUqKwLm7ppowfcnacwASTR4MCqVQ8Wq1BQscmPS"
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
