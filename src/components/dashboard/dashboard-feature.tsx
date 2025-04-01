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
    "2Ny6tWLZuN8PGp9GBkEbRXfA6CwXzTcHW5tAybWeypd8xsXqPkALjbbEAGDkJKzoUp9BaiKNFyeyFk4msAUx3CuR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CCseKo3dtXxEXzvknugs7ANhh6mUBR6yiitjWsCbAt1ZnRrpwae4j95Gs53RiJPdE9ZicMndYdHgGBJvYgPmssh",
  "key1": "3oJcxn3zLZsnBTMHWxmp4mEzUvjyUxJAvLoBCBK1wRdYj4i6y1sXWFVxjBiPUnzoRJxBKt3wHJFiwJ4Qfi9kTLQP",
  "key2": "2Qj2qWXAz2Wdf5HUmLn4QJXX46nD6JZ1fVFnBdcrwJm768k281TEFv9QvXPUqqbzXfQXcj444nnaUoVt1Kywafmc",
  "key3": "5jdQDA5vAxL6V78NeqFtWWzv8AMCsDZCxcDEbL1prrBwkP9kNYus8xf2bxfcnNnxVeYUMsURKWtJSfHGnXdvQUrs",
  "key4": "4BEktcJRuMbKGDVbMyzKa5wrgrHPfwicmwc8MeqPWezXPvkJzWZddtf5aNBybb8XPsByWe7TrS65DgCzdkkEtGzg",
  "key5": "5pf4vcFhZBg8N8qka9xmDa7Ef4BhmXoUBXivB3BopGJS53PqgKNB37gjCFSh9fyfjJSCiF3i6cJ4HdjKxXJmvseZ",
  "key6": "5G1YGP5VvZ3ycyzfsRAgErMcYMkrGyi7jsqaCpfvz3fUJLGzmwdJhUgcxruBmFy9PVf8YSLxUvDm3e5HaYDzzVKa",
  "key7": "4aaDbJYpBcoYtghR6gahNJUbGcByoFSNph7k3MmLwfK8pBtZPrEpWPuvoohP8JH1QirC6N1dXBwMGy8vY5CeQdTx",
  "key8": "3LCyhsfLrTzvVP44d1oENBbYAHqRX369RNtn61jdRySe2uMe1h9GjFmTWNwsHRqigpGgTSuw9svNLKJUWKwPUpVD",
  "key9": "2HBExNzYhk9mTYkYyEFnwpqU5n5hVXyDQ5FZXhkbu2GYXC2VvQUpM7LJryFJBicNE4ZmtXhX3Lo9GEyLuSVnhCaG",
  "key10": "631CsK3sHzueY8ayuUNV5RhMrS5W1UVcdcAjyCrnBkb822WvB8t4Ux2SMWfkdbDY1PPBDf3NQoDZnGFP7Hgurcge",
  "key11": "3aWk8aJo5TWor6Jb6fLRgKWj4SUaAzTwTSxyqS9S7zetmG4L1FUKH4SAPNJtDDkBatuLuSQs4oYnhGUW9y7HfxaB",
  "key12": "4TaviyHZaJvJYrxAcf7RbDgppYHn2R1xqfFwoGL9Lu2hBDz9czqjgTdBe8mPBjfw6tyMYsKYxgQfnFM5H8PUxaLG",
  "key13": "5ChXaK1d4UMrF7GcS5wuQo2xBrM4Qe6g6ELQZ9v1LiDL3sSR99ZqmPuPQxXxmQMsCaembqLWj7oUAvkAJgKUYHKU",
  "key14": "2XDmaqAg1a9ddDsL385NkbLNBv1vdP5NqiaAei4x6u6HnwtPSVNTNVrmNvCj1JbmVFTXoaC7y756E5gTVyBA3HH3",
  "key15": "wGTo2HfU2PU8cEyAGfGeVgipX8XTaCwSMvuLy4ETP9qYTMa1fsKaAAhHB3tQfn5J5MX8obNp4XEVcyt16zMzuuq",
  "key16": "tcRSB35XnukuY21wQJ55HDdyh26A9UrSk6qa2pQzx7Ncufdqau2P5mVqCrQJCr2WmBCviSKNPJxvx5BQf8eSxQU",
  "key17": "Wg2Th2yyff5kkYFWE4oes2x1dvZkfrLmwkDbQGfVnRKD1Spz3gDxY8xDFSPpoHfjvo49pMwJM1J76mUQXqadkY6",
  "key18": "2pbfmsGuMAyyqj65WjibSK6pJx6yHnQMQtHgi5mZe73s356YSRYctzySyyeQLae3GoAvrT7xbfBmkXHysSrDdEJW",
  "key19": "jjvucLcY5KKzpjAsXLFKG5YGocsbgdoy6PHjTJTVX8jBTeJTQNw2pTcZHuUQThq5qmQe3AhNNfWTctCEJ23CuWT",
  "key20": "jxybhjYBzcEb4jScE3tTtCqnpfKNoWq7nGV2tygtGqdzzSPuFcSrYk6dZzfmMHqSj4jz6poRMJTtCfGr1ya7FGM",
  "key21": "5xx8ktEjrdpxTeQ3FnEzzJNyonest6R6riw6tjJMpBZgNYDQ7HS2oxateVEHgVyYtin8xBCUrGxN9ch3aFhRj89w",
  "key22": "66hVhXE7Fh5AsHeMd7qWEeFNquPTA6pL3tuaqnVUFBhp4uUp5jAtNCodvupSMjg9J6XdBytkj422mbaJexCKYjtQ",
  "key23": "3anAWyiC4CpKuufPJ2hanNZJnmAs6gKAZ9wqknJxYVg5aSDQZhb5MhFRQ2dyUgfPKkAYbSEtjp8tVJi2WuRsNVob",
  "key24": "Y2Jsvb6xk5PzJKxHx3pm6E5RBWVyYJnQsNvRQ7DmpWVjQtYhKVXNLfPmKFnD8WBWhcSZXQ8f4FrqrtvBmrcvewC",
  "key25": "n9WH9qVwK3qjpcH6f6yzqf237b9FuJso4saTobojjStX8vwdfNDZ9oN3Q8oeHbEXxxej66fZCn8mgMNYEo3zmPt",
  "key26": "4Ftpc1JibwoPr94gQVP6c3pZRyYjM8ZfLX1SjUda244A919ki76zfkXpof4oNaBkoqHTmAWkYACJNWSZ2RZXbfS",
  "key27": "5wuSfkobkkxkxQr47CoiHQgndimbM8E2p2S6GmBCv3CPLFAB7UP5WBwEkwyx1RDa2MhTYn4myWHMzVyxwuxwiM8e",
  "key28": "2PW3CTcwkk18LAtj3Xx3onkEsrgUZHrUhzWHgKMgKa3NDh6PNYizqakNjktcsBsjG6W3eugQV6Tzfojdp231MA42",
  "key29": "48Uvg8WoY55CynfgGwsEPxvscRJ4suutXFhrnQRVkh9fYy8RABNxB5KN55GFbH6PrqNhqUL74fAbr4kdkAarThdk",
  "key30": "bUbmHpee3QWhiH1UHnjq8TQcDENzN5dSuP6XQBiqqzfMKKGBRCWH5pmKXF8be9Udt7kBRty1npRxVhVp55hYKwh",
  "key31": "5pcjiXL6zXnPUyUU68DpfXCPrm6ksKZs1H4o2z2uDdNZE67fxjDpQfrcL5k39biEc2xtDcLEEMzqkgekx61DgNmL",
  "key32": "5Qut9EvXznjMvudjnxznGaTMRMCN3ykmuGz58Bne3iZ2vMHEBuMXhFPMa1qMEe6M2AmewtRZdWq8kndyWyacWKoZ",
  "key33": "58HkaRCn9Ng6PS1sFKy7GRknC5y7QtrLRSFTHKGK654jnLfPP45WwWtVWDKEJMEa2AiUerYXnAm3JNYRiTTpRogz",
  "key34": "2c3EZSPgphDugK9ES1Q4CNpumwgBo422QCDtWyp6CPwURRrhKxi9ab3NKok6fjiQukW3TyrdinD1VbvK7qVHiAFd",
  "key35": "4dcJfzxfbob6namhgJS5czQKcUW6UYkNJCCKqbCMbcwg6ke6bqDcrk9ZfeSYS9keLegK2774iXZrJdS5szzTCVKz",
  "key36": "2DiSHdpS5o8dnaNoKDqLBRCtjQzLGWDRQGGFQbxDnsgjaAyXCkneaZDgNwvHdNibLxBdsBkN2SYg9Key9fMvTk7m",
  "key37": "3uZxXV9vVW47mUQdSBZ2n42N9zP2DraGU9v4jWpr6tqes5X1frswpzFLtpkyKaHueLGMjyMAnZbST8o1BgQJQSq6",
  "key38": "4iaTxuenimpXmqRCaQebaKqGcoVsR3exzcMEa9AK1pnduLE8v7hqjyz8BR6LLbeytNfFpc9msihpAyJVn2GwZUjD",
  "key39": "3hwEmjdQtgqpCD7Z2mTYNsDYfxeiGeLWq2KQREra5EfBAEbfGjrs5jvV25iy4zygn4g8i8P3gDsr1wNXU3fWfgmb",
  "key40": "ohjvgmcUfucQ6HDQ47vPwuivnAp5JSKoqsxdGXjcRhGhnqUGYDimq2RyFwRRXK7Wu36yGCauVGSnTcQqb5KyGnt",
  "key41": "392f2ruRQNRfMwcayDujDqy6NMA5NpciMPju6MFHt8Af84FkGszbUWA4WsmFy9Udk2sP9Kr1gSAgN553sXNjeGJn",
  "key42": "rNsGA1RrwudhZwBUzEBdcSzkArydmq6W191TM7vUynVbPPCTgxkZuyzLhtP7cjfF4nJ5VtrgNvjSFLtst8L3piS",
  "key43": "3YtQ4G9MLdNX8HUGfKUwM8DSyjs2pcUroPSMXrp5tWShynSiwtpBXSnjAJFxvZXCdH5B7qkMZ2fkGRo6C8u9McmF",
  "key44": "2DvdAPTAE58EPJaaLZXPCpgkUFMJGrKUVXSEJjDcFknJUcESUepLxAiozsukusZKyFCe687QRcfvNvEfDroqrVxS"
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
