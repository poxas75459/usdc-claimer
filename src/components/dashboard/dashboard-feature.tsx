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
    "Na46zBGYZaYgBCqwyrMRXvS1VXhSeffoorwfhygYvL6W3UCXnYeiuFdEfSjs5fPkBCFySW97FNZG15LVVtRYP8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pHEQgAnBcYMoeEphupDkjXwp2Qpb54Tc2rBWW22D24rpRzpvFZU2YfTx92WpCN2sjFdPGKqCr1Y5n8WYwhSJeeX",
  "key1": "4gHMbDoec3ENg1SNVAdYNLo4N4KpYuz7rzpeXCQQRPg1JP9L4k5E6ZNoV99sTTRvUxbXh9G9SGU5xYgJYXdJRNLJ",
  "key2": "5w47YHsQ4Ni69UgorMDgGSjZuGnjDRBJq7f3AnfcBEWTkVumqs52dmksn2bjoVjtRtiNAjNkFfbuTEEQdSeakFRQ",
  "key3": "252nTNaTK7DK7WGGhVAQSUas1FByKZx1xdRDZN3f8thvy5QMytuMHcbpEfRMEvjPCjgXkH4nB2VppbdaVTF4fFMQ",
  "key4": "2Vr1qKr8UTR5vcgMpWAnRrALfXApD3dKr3nKiovkPBKyt3d8VAiYRqsvyDetuqqtmdnK61yyRe4VH7Rx5iEjDHHN",
  "key5": "47yihCY3KgK7EZ2VTFDSmqwwCUkYjVpxVe9nw1U76uxvNSvWMvuCALxuBVhozkxWjv9VHXPxivZvZStbugXDGwDQ",
  "key6": "3yEXwd7JrYa5qNS4RTey19nVhLkv8WQCDbr6UU5EMsqogxpnKyTBwWEbMmkPeKHPt7UwFaq5nKiavGn35V4dbKY2",
  "key7": "2pz4AkaBbYa41i9RkBZxsQiE1Xt9qNec4TPGT9cdqnqyDJc21sKyqXdABRYPH8bQF58SwGYLthuJoBFY6YzWMyou",
  "key8": "3ZnvNvWSbcMvyXsGpH9NnHRDMSP3AHC9oQtKDY5gWwm2rh7xVEtxrPR62hjsMeBmSb2tYd2HTsfpukWmp6dqg2U5",
  "key9": "5BfdNi8c4sLz7KR65kw5Su8bXj2AT7zsDnNKV3NzewSvpw53iNsojMNFV4HsAQRQawG6NvqgcxwUgYdueSuZ3HSX",
  "key10": "5fKBhgVSNhWvgYYyhtPpF4G5znwbjApy6MSTvuahZasfcqjEpp7m94onRSaL3yunkHaJn4std4KwRQF8NpJimiTc",
  "key11": "5uahq2fXFYMBgyegfKRAyZzMQ6xta4XBXNKrzBNdERiK19WJeDYNhE4NkHTTZ7zCEaoHFQVW3qg6n8YkBTRg2mju",
  "key12": "iBTftQ61Cqr3eze2ejWYbU6Y1hQK4JEhW3EuaAzdYBKQNAmNqzbHxeQMoXVhSsk5kEDsJTR7KcjpXV6hq6PY2Hk",
  "key13": "5S45w2jFTtxcmrS35jggGniwFWBpBLHRFZ7BT37Ci27bHFJwCvoVdMs7o6vuoa6mq14ekPgW4L1zcdXBUebax82C",
  "key14": "2oaKLuMd8JoiLgGeoSyV4GDKMi7j68WFezptACvJKBrZnwbsfULqvxDaPaSXs8jQ3qqKjiBhSDNG74R4XTgxBFkx",
  "key15": "3b1FEpoaJdoaqZzSzoJ6dqYrQcr6pRVQpvmL1GMFc3zvAVxWHAnanrM6RE734p4diwsH5nwWJkJucnDs9PPjwkr4",
  "key16": "4RwnjKrduGiDfkxMHSdyiTwNhh2zadRQmqASiUvcx4J7bMA2w2rennTN5cUK9m4v8BkK88mFpfWWqzrFCDybExx6",
  "key17": "53kSNoRHuTTyoCrFmUE56PnKoeZu6WdsTd9i39Q2gUXv9duYZjFrPmN7WUR9uqwV8LApvU9wTsUQxohzDPskrcyw",
  "key18": "edzXTL4it89Y1jo3aMdPkFdtGy8mTZ7xQDnVrRzY3fCFxRGrfg6CiFCnaazQtirTg6nUPGdUSkiwJ383TJdrUwU",
  "key19": "hJm9DfqpbcGQBRLnPqVW3MJxoiMfYqskoX9Q912JZa1MzSMsZiV9g6wmqNBjyAgTJuPeMdgXNs5GfTt3Esf9FHM",
  "key20": "4fj9oMxyZWDnt37emBJceAv7vJYanqN6gDYRKFSyJz1GRNeCLqjAS9e8KUf5nE1vv9Hz5m7KJMY2bkrAeyjQYq3Q",
  "key21": "2acbEjbppr8F5tx9s5AKUM5Zd3SMHMAiXcmkvscVrxns7JoZ2XxwmJRb5y9xEgmpjbETGYumSiEGiRXZJoEr2PCj",
  "key22": "3zw3JXmSKMg16A6h3JofABEXQaQF67ih319k8DdLmHPSxnnhTsKGdc9DsShLGUkqccmaJhEJULSboHJm5a9GmZAw",
  "key23": "4YNHo37EBYs1V9T9EQ2Vam2c1rudxSRdZmpNCJgGJXC7mc5tbPfUk6LaGteZ6oBe6JQNChvmmuN1Hv4x2N47i1gv",
  "key24": "5GPkDNmZNFZ6EBvz5xSjvBP8RmM64PruixWVW5a8qMjWqDAkRnqhLxHEWmoku6QdNVVfsUUar95RB7VRxTyREPb7",
  "key25": "5Gs6KAc67RLyz4SEUTU3fjx9VpyZVG8sbxTVc1Eqtee254nVt9TKTUC89EwGRiSmK8K4GSBU2EXWuwpSD7eK2RAW",
  "key26": "2yYGjBVFBaz2Ys2Y6xRsxvHtKvzGe9VuEKQVd6PxgH3vzhaY7HTxBXzWTGwJkwfDtxArGyaReWyE4NwbQCTKT6Fs"
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
