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
    "2A8izTkoSpWWgm6PWQMyDvxCKQS1NCqVGcfMzmQPvgh9HmmHEJaEHP9JXBUbTH4YTeacshCQ2jgVh2mjKmRwrRwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ac45rSyDDP13pkv59zvfh55vSbQqVgLfjibbhzeXHeLgS7BCWMPYC3qy5hmMcL5VUxAGi2o6ARFZvy3MMsT2TnQ",
  "key1": "2FEakJoz8rRrWGFvZYe89rYjXY1xtojy8UmGQXvhtXkQugLzBuBey6fy1YSEA1VC4VgN8CzUjGg2GN1bfSULQuQV",
  "key2": "xR8DuYcDBLmisZn5NdhqmhASC2sgaHXAX58mMYtPw2XzqkByPCSD64RB1vuQ65MVJj4Qm1WrMWVX9sMZsSYFMJm",
  "key3": "4dFXtzgN1cDW6RTVgTehGPAqtTpVYvZCsAab9at6h4Mafia2Edm11cf1DMxH6KPk1Vt818F1UQucTwEkkfrU13Nr",
  "key4": "2N5HVDZeypbxUXh8LPfjivuZ5yPj2fB8ssrXU6MbyzLcMTLLFJ6YV5hhqnmbmNnUw4vTMLadwiWgk9cUjyeMxyUU",
  "key5": "46Uf1GYJQEHbBWyL5oqG3nP8ST3FAkee3QLgJuoD14YNCPyKC631ZKCazJChQqLemybAYJ8NhoepoYHahcBJHQfF",
  "key6": "3TB4y6Hk7LTvWLc43JDTCkkS3H1WL1gFddNB7Lwoz6FzAdoF5XJrP8gRscbwcnVuR27rGG1xzA5khjg2oMgvSDuh",
  "key7": "4RG2roKECrL5X2qFtd2ydA6VBGoMcYxCWMXRhiFB5mLvgcWLFZ63ty5HmQTadWrZymwRYWfoPFbNAxQ4M1xHamnE",
  "key8": "XeVnH9ufmv15jMsM9Mww8X8aq2bYgwYkgiLPs9pnztZWKqTRf2mBkJ5UNFsqV7ov3zgZRfo9NmkfZCARoqdfqRz",
  "key9": "4eESGSNRPFuXhCQ48aFvrCyXtq7ZxDzHHhZwTsYMisKhxooDTSgprX5fg5YAQnPyfB82T9AY7GZk7SCYQPgj4KEn",
  "key10": "2vv1ekdViY2yv77JmDDyCstEBi2QxhogFsMjhDfEHKpZ1GMFZgQGJMYkJWq9TMXAiEaUndMu5HP9Hr1u9RTm4iPT",
  "key11": "R39y1pv4X5sGQrM1m6Vxy1Pbeqjg8Wx7AXAa1ioU7st5V7HjmrERxWm7JPhtjy9eShVy86ePSCAvgTTKDifZmSb",
  "key12": "3EGU9iKZfror9vrMK4F3QRKETSpHrjJLjXxfs928HwWdB4fHyRHzmffAXsoizC731WjpJp3ZNi8FVub7GTiE3wY4",
  "key13": "m93E9TvDcEn6BSf4YWwapybS1VKXk2dRddW9xesYJy5dkbExaCCuYQiJ55eNUfwiQXHJoWmxGUjYqDrnMAMVY5V",
  "key14": "35jNN9kSVDhr2u19YVBh2fDj7vJXZY4cVLAhhKkw2kRYnyiBhFHTuUMhCfsr7rK13oFJrqbYFvDAz7fZ1oQu2QEV",
  "key15": "5piej92R432iutDP3xH8KGv58sUT7neKrbyUkqJZsmEATHLvNuVqkBLhVHzUheWNMVghEk1t29xg2LGeZ8CaWrWi",
  "key16": "4jMJbwohFewMDW3YfyBDaTrRFMx7MXKeBuRXFB79hPSCN87XwCh6XydG2aYM7epiZQMmSzKwaUS5w3ZKy7J8upjb",
  "key17": "3QF9UqyrHUnxmygdJ1uRveeAUY5rpzBMhgJtzmLYzmWTTcAX74iHQEYQxqCqrpwosdeCkW5i74MuFz9yXGEu6aoL",
  "key18": "62fTUBBmtaTRqJtQjLki9cC6zD1fFE4psh54wtqvpWBCUrYawE9S7CmgA2edNjeqS9g5YKKYeQAUzGtixyYYJxBs",
  "key19": "5ytJfBuFhHM1MAWxNWKqvJsrVnnv9uMTxgB8iVPRJV3ggF2WjHZANPtjyeznm3U88NGTJxs9sqCCXSVab3ADrHKE",
  "key20": "4SQzjfVhMffm9aqWFcKgKWCpbAbLzHdUzFyiHyLmfo3TXGUhEfQWDnWXWJ3iECkiTfVPcMdF7oB8pkmyVt2vMwse",
  "key21": "3ruu7RrWQUSTjr6Vs8fEJcVbdPdPQQQRLNNixFmgDpBg778ZjPvKTHkKMmPpnBUYVMXbfbitRn7jijmmWn5bdHRU",
  "key22": "ZZ8GRk2pKAMExYCBD7omtKb1iHhyTF5tgi9VCNkA6FHCV5PytZ1ivvhMgjDWAgyY65mJkmHPHKtWZVQNVyoQT1d",
  "key23": "3JQsBaSC7eooZUkZqdDiNgT8KMBgJu1pNyb3CrsKxajABhe7ouUgczUG8dLTeGnH3XP4u5GYmPQvNu8eZNhyS3rD",
  "key24": "2NW27rgSbLDagdm5LJijdUr1H7PmDaLvoXqzS35j7LqhkiroDW8vzR3Vcn7oa2nP8ykqcCV7hLVZdGfLixjEWGyo",
  "key25": "muGwEeQgF3aRH9T6wo9X3N7aY6wfdz42bRhNtAJJp4tFsnT3nkL1ijaKqP81jUY3Cf7tLEhQnNpcbRwL586TN58",
  "key26": "4LA5qUi44UcKdaW4AdYQFEebFMGHgnnC5d4C1KrsCsT1nLC1aT9xk1pWEXx5vrts7ybvA1L754nsqfWL5pY3mVJu",
  "key27": "5oAVqVTCd3qCzx4f31jYC7LwNvGqJZacDBRBURTaHcN1kiwJ98u73Xz8L9HcF69V39jcRpEUzoyBcCqiHNNLKG6P",
  "key28": "3vNjc8pohgVe4dfZyHiGBY4QU216LT5QavGmjZfXCuWPsi3UcijvrfDBtKcaFzAMDmP1Y4q9dpnZWLTdyGEJBRVL",
  "key29": "4bHiGPVG1PU1CnuosRHx5XkZHC46E79c3umkgg89ci17EiKGC9UMZxoTevG6p4KWXTNrFbWvpvcxsSdopNKFBBga",
  "key30": "4MZTN5ukh9Anrj5AKiz44P29UhfqAad56qhNj6PJZ1VQsvraGG67zZHVvnrEFKjRqmzXHXk1Fz7mkYU42zPpafaP",
  "key31": "DB3rG8ru4FbeMhfjkCWaum7tpFJvp45hKs2ip8oqScNQPvrX481KoopfUwuwWcuUtqWYbsZwMULLnkTMvuwnAfK",
  "key32": "4n7de2cA1vYVjzs6DfgGW3rjUwi3ZaNy67TCNKCNa1ur5M2s5ndHjh8ffEiRzLBonMtDrSdPTihKTukbcK2tGZVk",
  "key33": "2anA3HWxpLvhrEGNwyo5ajy9XazqouBnovFXb4ZqGcVKvvtDUtsRNpXZfWGKSXz5we4yPd9m5edM5rx18CWC26Vn",
  "key34": "5AHP59QKW61ysmo3EXKXv75Pq6B7brbTxwDnccUWqLT1n2FVanEcpTtLLhgbxB78jLKFPQXkiJNTiHcLqLLtTX4e",
  "key35": "seHy3PZkETLp3tBRdbPqwd6uLgsdSiHSNBKjNEKPoMYFfkQCQ7SLSERESCgDEnHFjfPbdkVspkqAeGygfyfvncc",
  "key36": "4d3GdNjZZJubtqgggRXTCWdCQgbUPKjfXGTcf7jKqoSboLA4x3yo8qhe8CxM6SCM2oPZsFyRe9jgLW3RGd6yNofe",
  "key37": "4v7dN6Sbr928fe36abF2PdxNDHybvH4o6NCR4RWhhBFdXwrf5rgFEGv4mzodzbgTDtiPnvbq5AZ1UNqLam4gCghL",
  "key38": "WefuBoxWbrsoTJQ9EG9tj7rCjfASkRKEcr7UK5FQJcPQVtYzNSceRQWQwGhU76dihoW532g98MFsF72TQk92g1W",
  "key39": "5Dif6cS9AwsZJ3BFakeJgL6KkCUvZjqxNUbKvfbdKdBoUYudGowuMDUBxEwDw1umxiuo9amoGwbvtC2AHG2grood",
  "key40": "26jG6kFZLYg12jKYbCkEeRQ3V3f9L42asEzKcWCjBCWVzv3z4JvpE9r4abiuk9zeajHKHecErkpMMsiKVyrPZuZi",
  "key41": "2jobpsKd7f7AohSKFXDt5sjxWbnzr6E6YhxhV124mKgVP2voavKo21gZfZtwoT6BvNUyZQFVps2QUpS1VDrrLoxP"
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
