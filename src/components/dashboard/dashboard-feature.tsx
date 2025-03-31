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
    "2BTahvZfeCiBBLf3wFQ811PkgAwL29h8pnyHBdPw7eQCXgyXSYVGUVoY7tx3cUAUdGpKNg3G2HhYRsdey3kr9CXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38rPnMbm4YnvWmKGnHYTVuzrjSjTAnLRDwsJToY8qFJHwRUy1R8hurE3iQsWrCwKJn3Yb2Rs2J8CNcJTtswaRERb",
  "key1": "2gbSJFdZNbYZvCCxWh3F47Y2pEWArc8aN2wmGgewZaSorZq4cW7n3yih7oq4wTtQUkJDe5QmoMfk4TLLFq1dWHQi",
  "key2": "5pRiuVkFyMARrTaTSCQ6cpo1LHQ4A32dWy4v9acLygh1b2cbvYaLvE2cwmUU7wzFyvvAcDV2hjr8wu8PuoPrc9jN",
  "key3": "6tqamW7FVgqRkBA51dgKwDwz6V1WmxTgQdnzkJBxGN4q1FYu83ZMdEVdiZtDMrbwqTCQY1TTpxxdsioCs9mYpWj",
  "key4": "3q2EPhtRXXWAV9gssBTq3U7qAjtEARNez7hcKedrhdoQX5t4arSRgK6xZTLf8yb6kGeiUXcQNnavgp2XMRjo9onr",
  "key5": "3ZEhhLYWy3nDZAqR4r6AAWxuuzWsG6FXC3UohmWm1jH6c4Xd5MWxSDM2kxkW7poABPki75AbLYae57vLCcHGRRbY",
  "key6": "5KySiSa2nN23hY4QZ5n4cE7nszhFeVRfiMvaeuETZi44wSxkNRudjUL5CULZsx9bFrNJMqeTEgAt9uLtqKKLdRLj",
  "key7": "4fo3S9L7NVFHfD5keuXZgiRo1NBxTepUZCQU2K1Z2doq6hnkZXNpDHnzCPA6SmLFXF2jE3JZmNYVrhXCryrKATZB",
  "key8": "4z8v3HXpbNt7Ltx1V7dVFMuP26BoexoaN2Jc8FdZBECpdVNQ4jxgqgLYoD4XzPzEges5vR4JTovmwcdfuxBKUuSD",
  "key9": "5339hKqfEUWUiwxFzE8VjKs6xUrS18tYfW9UBUBqiA4Fh1PXaX4pasGPZ8d3m9P8xancAfAx2R4Q2iY2AAQ5a3ik",
  "key10": "48mcUKf9xAnWucxexcMkm8FFnF5yyAgLxeZqzFk5vxhvpLhoPBvHaEbtUght4NzuAcxfbxVxpQRQLY2H9KYxQB9a",
  "key11": "56X15ydmSzYTnM1e3ra4oZ8bwAgE7agjAhCnGeiHNhgLSedcAsukXsNkEqEypnZptR5BQ2bV9cRr1dmxXAtXFcU2",
  "key12": "5SKULku4Nww1MLZu5LFWsUz71jBgwU1kFLfWpScTAWE6E53VMeMYjePYoepDMJdyHxLKPzeskZ9Cyx1QsJ9rLgPb",
  "key13": "5QgULGCgWcQYipYnNiuVExTfs8Roz5py9k3S44oNbJWTehWw6fojmuHkdRU9Uv9t4zhqckDWQhBaj8wVdmt6UV5C",
  "key14": "234eQH5GSE2osknwwXJeo82qtgC1dDdDxrTGkR2xohFJL8EMJoQDbM9ZKA9oxpLJoahfLG6xpEbZVBPaR9q7nM1e",
  "key15": "5bGs76X8i9rrfTUDd4TogK4UKVUzq1soBFeM2iHX8xgb1X1TVNYw75ReFvb2dDv1X6cNydeGeVGdgJsiDfHJTAjL",
  "key16": "eSsFE2svhv1araSLkrgFVmHGuuTxju8ZckrYUqqjfbG4i5n6kLa3vSQtdXNC8zCWXAQvo5ic9WPPVhV5odhiSAW",
  "key17": "2XTv2gFhP6iZ9FyYuk4QBeQ91fQaGrpwLLMyEhrrbVjENZfkYdaywPwGpTYZTQcy6Cf5N9Hqj14GivLiyGuyvkKV",
  "key18": "3p9Kvxc6CnAUhJzcYGevZNvSZzipTTNXbE3aRJBd7prSF52j8Lq5Ae5uJfo89ev6bw6jTWqsZWmTxffQQ8JZwj5X",
  "key19": "4n8KFBzK1SwhumfhsH3b4UNDMP7t3or7MDgJx99g3Ca6jWQTPV5ZwJ6H6XXqSwTMzTuHEGtrGskqAKRCrmYynfA2",
  "key20": "3HLtSTi7XC9AjFqJPMJVzj3pe4VEW1WVaYdoScqmmkXtqb7KS7rMwzjfzcn3W7cU9JN1pQigHuP1hVeWvQ6LEMB2",
  "key21": "3RqhrXRQcNEs7j4EuPgnL3Rp71acxcPFMrnPVfp3iv7Bv6AbeMU4uL7VGHxim3wFsiK19NrjnEhAV7dGeJV3Hb4S",
  "key22": "5M4sStvG3V1wzJhRX17UyCuCeCtfq2nt5UxGPJXwH9gqi6E46iXSsMSaGNRU6kqs6XrJAN72RXPobExN2dJwUKU9",
  "key23": "27ZaU95Vq5TSHJ1wXyF7f2jfwuV8QsVkt4igifVmrqjcPzMfJmMp6PE4sEHNAWW6fH2JbyLAeYbgxsAiWCkYiaQb",
  "key24": "Y31WGhgMoTNGfrLjExQoz8oPUPN95pMfkVg2nyGXivcxtu1ST87E7cyQQE4gcBdUq2ykrMjsg3USsLnqHgGR4Dp",
  "key25": "SrEBsePMgQgoUkLGErP5wsgEeaWPPcepnJSg9B9eDSadZB4rnxp58wavWWbhnSLaaSbikVcWxLaqBGKQwW99NEx",
  "key26": "UCUbWC5NxNTZKxVib5UZr1zf2a7kgJcVvvwC4VnSWnQWL5eYtcHvsPBfDhdodjVWg9RJE1p6s2Yw5RxqAiGmFH5",
  "key27": "4EKEwTTiVmG8g8FboZE9VUdpaFrYh5n51DXRSPGYg8PScoNpWJSimS2b8jauKfXZHgMu4PuPy5kwEDagi7YVM75v",
  "key28": "2w6vyFwWvMjRxmAj1yKLKE4G7QUvbq2fhxtKzpMumLmQEiB3iUR64LhkkScj8N4QRUoTBpGPisYuJ7XkyuC9f9oA",
  "key29": "5hq7FxS4x3BRKksFLPrFqhzV6MTUMfpcWn2N7Cqs8svBrfmntjsEJMHuUGiPSL1cyYMzWMvF2d9hVvp7RKko65m3",
  "key30": "pTDe5c3TWB2tL1HM2N4TktqpcsxvahWR3LXUz85fRSRwmZJnb1iJZnFenHzMzfzKP5wMvjSEfnSqZxgyBYahPuo",
  "key31": "aA8pc1xFohtuWd65p3odKEgb16mGgV9ZWbrfeQXuQdgNDKATCD7cemRW3fPzo7nNA1xFyXMsJzdWKHBicySd4Jo",
  "key32": "5dPhcTk8b89WeSAQR2DyG77eihVvuuZXQf7BcYKht4e2PRtjK51M5SyFVRoyGGjYtV8JgeZ6P2WSaFVUNPfhzjeb"
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
