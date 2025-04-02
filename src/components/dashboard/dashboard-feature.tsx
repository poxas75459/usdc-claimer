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
    "3YxYmGxgr5vTqKgPFQr11eurEpg6rmJXYgxrwnH35k2DgNKrtmcU236j7XCrv5dAPTJHmH2N34PN1gGva3g8oCj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KNaLZFqSU13qvXpBpAXohq8nJcE5c748uRjcLCvWQnyA1rDQkH4Ae7yhj6iSEttCX31NtJccR13WTqeAhT656HT",
  "key1": "47XQEQy36KJi3hhorCzhe1MHinRbPKBUhG4VS8S1G5vQHfNK4p8JwkqjYNYrycTktPFGZmYasmh3y47YFN3xkssF",
  "key2": "4rMzP1FS1VShV2qQXXSiKywHLhGd2SSQdLBHRVRTQaXdnSQfHARQDr1ctwDfitbjTUd4RGYtUkFfNPnFzaQ9w95Q",
  "key3": "5dPAj8j7SCoTE6tFNJQYShkcRhAqaXej5ps4ANTmhUuhspuqLd7vJEpayAog3m2GJ9qVHiTaEfNKRyAhkXjCyruu",
  "key4": "hDtRmJnGf4TYmjtTT1JAw7LmcR9h2QV7hxvHQobjWELGYohmBoveyp3zUdBgqL35Jwk7xaZxdFV5kNd3ca1BsQa",
  "key5": "3EaxAi9F5WaPoZKVW6Wt361j1fkgdLA1csYKRKrirwsSNaXiv1HgBWKEt23PFJsi1TA1AmPLDzqEXsw5rHKcm285",
  "key6": "41Lb3bk22HFA8iqsGMdGSFidzet7RhBASf9bdRtNW24cyAasi4bFieVc83jVcmjzosLHJtYUNuLyy9dfH914mujF",
  "key7": "232NCNxbQYP5YgkhMdJpQiLgP7LoZs4hPY7NkqtWSN1NS8pd1qyVighzMFfF8Rc5kGAijWTTpqDifWZKU4HcmU5k",
  "key8": "21veV6GnHfDUwRDJDCe7g3XaKLQhH3dSorNZsz2i4jVmgAuLhJwHA9H5r42o2yi5yaw77WJKRpguDYLHcGyHiyhm",
  "key9": "2wfVZKXtyQy7YSYeo9oN3cecEjT4CA1sautv6DAo2ipqmuMVBZwysbktqzjXEJwRMZkzWENY1cWpQDJ2sfyufQEb",
  "key10": "3Qb3wXouE3kTzFPnMYciWQq3EPS2dCbLqGdq2AZHnrWoeLsbgsFVVjgnpcavfWpck5EmdNVPE9Ui8j5eub8eHMgp",
  "key11": "4k8bmknkykCPB8MgkJtrxzALH2f3DfY1ynuTDHjNxqg33qQHUHsCaT3YcWhSQknBz394DksMApHit2mWRADHfMk4",
  "key12": "3iRa3LxdACdioq7f48fmjdXudmUxuAdvscCxuGaXzhzatjFWtH9ydmZCm5MZkDG4dFLLcETVwhjtv4ke1eJydxHE",
  "key13": "5um883ojucazGpTBNuJMHDYTFV6vxJPfRUWRnqHHAPw2auQEpRqmbZnYh72C9jNF1TV4dny3sgq7R4ngnRBZy3RU",
  "key14": "29Uhg7strPLsDdtrX2D1fSHRUwqRqsVU6a4dC6JBonAE8BoTuFw1D5UWFZ59CfhhwSaNUiS3g99wzPSQnNvndTGx",
  "key15": "3Nh5WqQJ2FTQLt33YvYyaXu7MEWqgVzqhjuhRRDNQQFMecRnbdzsEKyoyeJh2yRQcoxM9msMkQM17UQ3m4Mm3ACg",
  "key16": "3DveAAA6d55Kky4npYtkX2WmfUKWkzLqJqRpPnZT7TCvpXqBsLFJKSCQh41ACgyiznnT9TYwJxWK4vbKtfyLTwHi",
  "key17": "44y9ZteTzdH167iTiraPBBMHfFgsXUeSRr7vSABvHEojxB3JGdkhJPW8gUtktzYhYUzTgQ5crznjbAbF2DHQVPti",
  "key18": "5fVwqFjwXqRxA2HKGkdzPaWNR7ZfpqFipnucD3sCqUrhnDKaQZXmHHAjz7scKZxMpGjhR748bjju75EYMmYn1iGD",
  "key19": "4qpK2jGniLseFgqt5Divc7K28mvSZWQ1jtW2dwERHkW8YJJ47m84gLagiqLH9HxKq4wGhmfd3ypAYDdWtHvYKQwn",
  "key20": "QEW21sbA1okQyrATCX7p3fDrSUrKzk3RZR9KLiG7S7ia7C7vDBJzpCVPiQVGtYEZhi4X8TgH97N9cQETy7GRCMq",
  "key21": "3PRAXvtAfJAbzZJ1ZQ5ccMS9VQSAWBkyw8CGEpX5b2LHsNV4G2YpzVwneXJZVGdGeyyAsfv5aC9cUqGUnybcVSMv",
  "key22": "2Hk7jAFpXfqprgQxUTCjWeXHsAcAuz11ptTGEYWabV4Dp4iceC1gT911TSZRe42TeXCmHW321kEaEpWaVYrL6YrP",
  "key23": "JyyNLuh5dgGktzSNND2QDdNhgAicd3i6AUdMq2atnRd7jbBbVzUZ3hTk8Vo5oaHjJQVDKhwgfPZkTP3Z42gmsr8",
  "key24": "54rawPLU3Ui9NrsRxaJMhGgDFhQwHLsb9KsAbewGRbArEY1cmoEEBR1jz6a4E3KVPFdv7RaKAWPECbsGupBJx6PX",
  "key25": "28ELUC6MALPXir9TyZGfSAerkFhEWjrmeL4FR8Q1QiABvUSbyNWUiWeq8peV7xuezJLDTJ1GThd8rA2GBEE3xQGJ",
  "key26": "5TpE94LfRDnzKgwNE3ANRhRfrMQQ4t2PXweVzrCvjCZUq1exBu5pzkackpPQ4UZnKhzaYx35TJ79XvozA7Fq3Xnq",
  "key27": "2wUrvZMCairVqUz5stohGLi4k9PFBKbri8mv2F3J45xJNpRQ59xWTdCLpmMHc34XJY6DsFgRAc3FLHTvAw4TsCh5",
  "key28": "4tMMytToLAG9tnMW9d6tDmPuwxfjfZehvuKSnwkD2BhFLv1fwFKgef57JwpYR2EGKyC7kQjx8yqxrLhtN7cQmcjY",
  "key29": "42isa5d7XCcvcJpcD7LyTPLDoXYKocTLNZbX7obN5C5VwzZ2ybFVXZSEde9h1D3kuNoRwgsJrweYBygeniNo2bhY",
  "key30": "nxkgN5XjxGb5c3TSzdAyCEcX2zdiXL1Ebsw6GMxQ9napsX1CCBMr5ppTEXYaF9pZeeXkAs92rYNn68Xcyp41Ln1",
  "key31": "5BrwpJqaAFDi4k1yQRmpVrbjNJbJsRBewvmBHB7Vh1xf2k7gvxoZF1YcKfdhgVYhqNh6zhSQDZRdgWXtPiRBeKXD",
  "key32": "kQFh3aumGtT3f6e9yRUf9ZW4Yo3pnhsvbaM4rR5CRr9AvMZGX2juCguN6cZCHcB8cm3hwm1z1hMsiV87moDrQ9w",
  "key33": "4xTCFLyjP9pQjvAszSMbxCq76VaEemvYog3tyh6x1rzJGEa6Y4u3d1zapEKNWqzzzAk8KAJpJ4j5tFRR5PZDBxuS"
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
