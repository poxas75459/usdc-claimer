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
    "4FzsrRaXZpZ5Rx1shdhHPEuRdAqqu9UpvRaPjJzUsq7Hn2U5hJKWhDUSVDWfq5jrStxzR6eGiAg2BCnuWydH8iXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRtaKbu7vSU2Ksa9YkJQb9oYiD2deaADRMvnJW24JFpaAjg38LATRkPf2SAWz4NPEBGkq57v7kYXi9yeTuv5Dam",
  "key1": "52JWcjTXnQMHbJyNHYNBDnKSbao4gjHD2wnKKMxmZUY7n9f6Ja4crZMStqPoZ1yBd816H5qhcXq73VCkK4XEFnXA",
  "key2": "5zsLAjBq9MzaxumP2fuFrsSWj8aJ7GJcbv37ZktueDsZF152amGmJWaDh9tzSeXXmsW6ZQD7wGiLJsQQQcz27D8n",
  "key3": "3HT5fN1gcmWh3ZaWwKv1vG1PTnc36LNVGGhqrLpxmmnkoK6QEGnWTMunov88S5f7VEGBY42W6hBu3qPGY2bnW2d8",
  "key4": "5Re2g7mdRRK3NLSsamwhxoK987oH24aX5zVuiWm7v1HQf5jHsq1JtgM5SrhJ1fq4wG6Ev7SPgTmjw8pMycokiCse",
  "key5": "59yfMX46SKMMg2538bAN77b89pMLSrthsV5cERb4vgFkC2D6Swe4CSdL6iRs2Uk7gom2mA1oGynzdTYXeUWqjrux",
  "key6": "W9oJh7CbDw2ozrVTxfbBkxSQL93AoSgqBPTe17q4HRF8NL1HMa92uEe4Y6w418bLLScBJ3C4z579fmPhrLrJJkV",
  "key7": "3mPPd7vDjnWqnYReedjXYv6VALXrhZFVr4qXaCVqaUhuUMz4sXFbBfVAoGwRdq3jLC6nPA39aGJu7yC2imkVwvxN",
  "key8": "5WTHCKC7ys7X63DePuagngnFwGgCewReya8rwyr9a1HSSucC224JAiqvKj92uh4uPQyqhJTS664euGEfYHT7VDJ7",
  "key9": "5iZcN33WzAwoRPpHtCWxRPS8afMgw7YAqinkU6tBTnC46k3PGuDe2o3oDTrUL9uJvD8hia7GjkNJXuQASgU9vjTX",
  "key10": "ny3M6nWW4UgHC1LsXfnW4WFERkk5CNsHTwjtuyXEyKyecz7sNAZKzowVxrr3dRn8xegsyHW4z6yCNbbcWMzUh8d",
  "key11": "jdGoJ5DyUmkYHxsWNQQvTX4eV7hqqAQK1cgBasYMVFP4Ue2qZM3me8tvAZE1hrzN94XjsWAVc2GKXo2qGGawc7c",
  "key12": "24Tr91C6xJrqFtSvHQrzLD5PWQgCQprgm3uWpmuRj1JRyAMTPnck9JwgertzkbAuALgQQKH9ApqtbSMtEwur72Zy",
  "key13": "3rj9dV9f82m9gB6CugX96E3HfSzTRXtiUyD35RGBeiEu2v4HM7fzD7bk9przAfCiwNVr4pi6RdMddmMKNKUS8Cah",
  "key14": "5yKXgrKtXyTN7BjRVQBCHW4K96jzKMY7xXMKnJXCzZcGiuqP5PAMVfepEF8at5Tc3dZUFE3LybssmFn4rgPyVuW7",
  "key15": "4GhawojLBE88sQsqjJLdSMmXuVPPYDYEt1xzPEmLDytujCecQJursdXPNaP5pqWWmjBTJmataaXNkt5WSvf4iLhs",
  "key16": "7UmVtrvoNXGyDjPqZNgmSjkYGFtRCuXLU84DdKmzVjn1mZBvNCHNmYbAj2Sd9utZ7UHCt4MqNieU6z3E5YPkS7e",
  "key17": "3gpVWBWjJeZQebFd3fssmPdrCQUFz6KCc31Bk7BLk9U8H2B4BJMuuexi7necZfznu9kqWQ1Wfs2iFAbpUb6hSgEy",
  "key18": "4gdQrTXr2hEfggfnUm4qULtB1FpbukhjU73P8p8UEFJGdc5vxEodaJAQ9NL1MTVfDwm1NfPLFDhHLGJhcifFiejX",
  "key19": "58WotoDz9CZpPfZ5RsVzdx22fJuJsr9kvDPGacfk9KVB5X7YxKTLfhbV5HMi9MwjRN7FQ9Cxtn51tJuwxttEhKyB",
  "key20": "5sAcYknwMi3y9qUoYrP93pSrYhTjvUJW7vLLnMyCiUXWKb2pjvyp36kF5jASojo4M5gULnjtt1kDf9hCP5iHwRu8",
  "key21": "TCYTKytKxnGGezwqWghmNJBVUAtk5fvuxKkXX632uEhNdxw52bQvCzGDU6XxnpkyrxgKfcJaLdYsK7mg6YeWhFQ",
  "key22": "2MdLSou8pERweRhognoN2azCbahGtWTeBZb4Gd7C2567SZzZmxgHxAWo2RLnAWT319dfwjpEZ9eup14XNABd8xv",
  "key23": "EYE5qayLpHKLTDAvs88o4PFxyZyVPrrhc1KRS693DdXeoiusKWnJwK8WyakrkSLsDgbLYTFsTmPxGn9tjXBUuha",
  "key24": "3d24zC1uB6ZidzrzgSvmdpTnNsXRTzAo6rt6qtzJd5c9wBKUV7QeoBpLzq443doWWr1o2i2ZynWsDZAZBXs5XCp4",
  "key25": "52gwEA7cbfWPuijyVL18NaSQXj85D7MqEzfioEAHYZcuqmLQGqevWG4M2PuxoikAa4WnnjRu6jXPsFocZXBSVUsj",
  "key26": "5hVCS31JyoFfT31T53uteBhJNcgs3GZYrbcsvyRVEzKnbQ1MdFZeFhy4qfpB92exZVejnvL4u2kmZ1Srh16zQeDQ",
  "key27": "rmDtHLcL8kg1AjoLdWcNWFCJDvozG4B2vbeoH6MpNoA8BJZG3UxNsWPr1vkgxs1uGxv5NPULWSCuyXQGehHbXVF"
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
