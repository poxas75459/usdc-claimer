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
    "44sqwWu7E8aPANhcJMSiZ5onzzF6eV8V2vcWM7umJXaAhJWvPqYxK4KMR648ALADYjuuRGbroXGfFyzdLD9zdod3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PNcmu8CXYJxjXfRVy4npNXaDuJxffNyfBiESpecyzcxkSt2N1hfMBrYQ8Rx3ysUCi9GC9VwgrfNwb38DiuMPTKC",
  "key1": "46hTq6JBZiBmfgwzwvv5TpCQ3Wu8NN24Df17nLtgXocHvWsxhhuXonJQtPmx1DiDLT3tCJsf1hJHfwAuhSP9jPEH",
  "key2": "42V3K8PkyN9gHNx2He5cKUZdoYwZNM72hTJu4xw5qzMfxGy6vb7Q33VFcz2a7eSGN3B6WGfMGUhCcD7tmsKPQNeZ",
  "key3": "2eoMPH7bs7fusJDVAXABj41J7sScFFDuRToCmNHyDpdYoFXSGLCBfZQJj7zS92ttJuGfgAXBBWm9QPZMUbTppH3E",
  "key4": "3rrTmdcZgJmHvfVHn1pvv1UzNip4CpZdtKn1PVYLDgVQGCK1YGzcDeyrTVBThbfPzSPjnDT99gs3H2zRWH3sfy6P",
  "key5": "fbog9spVeH6gYPFyV4KoSosRDqrGr6E8AZ8XGF9ANZLw4uqisp3eqEgajZPd92xgUA6fKnjSig4TMj6ptDMknHG",
  "key6": "2eGtSEqqFcBm6UktrULYgwvxUd6QRXPn1RtNuPtNmFYGbopvwkAuokgc96ocUqpLJ5EmX2wxDdAYiiSLMEMpkGj3",
  "key7": "43QJtEZ5d3L8SqYrkyiGwn4qGTA6VEHZBbYqr8yd9mfW9SmB1CVfgLz714RkaGieQp2Br7Kt33XQ3JzchdMGVDc6",
  "key8": "2sfobmeWdKeuW7ChCp1gRDD3tQmLbvE4wP6TmuC1ZPD2p8LxPTaQ8NoAjW9aqQbyVgDsqDXretLvMo4gg4j81U3S",
  "key9": "kBFu8E8CA9M2CFQKqhQbnBy4xVRtbpigVJbuph2M812ib75phyjQJBkGFuJUrumekmNK3nvPPkncYzMe8miQr17",
  "key10": "ErnYituzqF86iX46LnTeMJ9cypGZ9gsUWF1yYVKakQLwhFzQ4TzLgPMcthH7wc3Z6iBw676fDdhpnaFdbiUgT32",
  "key11": "cbhaLt7YoiYzHmNXtVYrgD6K2rqAFZ92NhzexCNzbg8sRZZuVEy9BgNLXNnqAct961rHcLGxAgEP2aiWTf2MxUg",
  "key12": "2G2oefynmiWDEaRn8GNWKEgyHZvxACX5E6YRUZZ3ZWT2JgUf247BbZiujqiv5GcK36CJwFuXgobvM2sucu3LxjMi",
  "key13": "65cfpziKsW4vjL5Rc4nS4QfRm3KS6wNsfgc8nTyJboKqAWA9Hcb6QBoZbRLLzssHtBf2q874G6aKGj2UNUsyFEHK",
  "key14": "3NjP1R363mFLuvFQus1PrTbt3ApTLLtK83qBjjc28aBnm2BMoqKyXSSvsdxnes2SGGyiweBjLugYJMxsziZ8rAvQ",
  "key15": "4zEbDtdnULP6UMpQtZEh4M6U8gxtQJo38YGWXEnRk6YFkKvdioWyy9Ft6g22pyYvnx8ZrP6rr4RuiLfRdhp2faNz",
  "key16": "Mp8HaJKvfaLQiKdpQqujmPd4ki8QWLhbLdz8JMwRikr6z9XQgAZqBSz3LaF8dkDTzVCgfCbyPfpGEun6vFPf5VN",
  "key17": "4qncmzysDwCFPdRGSeVBwcNpCgNT7xJrBXAHQ5hdhzLRxiDEucpBZhAfuJxs4QsYxoed6huQVDrmgiBQdmrJzgvw",
  "key18": "3vZTj5w3sGhKsM4XbzJLnVD2R6HcD5ffpxQdQ4LW7YYh1zpakshPHpCMn1HsWmzCErcV9xCby75w3THGS2NJ7Y7q",
  "key19": "5YP2wuhu3N1RPTBFtLHTWsTQYGrQLGXo3MRz3Jy4sdZX3kGHARSRWcm1VnmvPffPjqFcqzvr7upm7rmouNL9HGPm",
  "key20": "4cWrRABGHAdZtBm4WYK7tPTvMZ7KjnZ4XuCMPz7xYSy7T6Ewe438B4Wc4w1eukJF9M83hC9to643y5MkahATHLx8",
  "key21": "3mhUCAh2gCLGXyDrXiETg6qL7PmorCSphfyz21Qb6iRCKExiKPYuyurdCAMWyqybbS7wXxUgkcfk11pWQCZxGxAB",
  "key22": "2AGrMX3aB8xs8adb5djJJFL6RAy9uvKtw9r1tqehmAoRVZ49fXoCZwJyFgWNWpf4qcRKmd2G6zCiR68kA2FfuULE",
  "key23": "F3VVV1Da3mcbM1cguVzScPFzpx4qkfZxmGpxawXBo8esabga8bN6pE2y9gZDmhkXzv4VGZgok6g1AubG8uEksfR",
  "key24": "4fMkvdXPY8iZbcvUS7L33XLvpRGHQv9R37mMXmuqdKTs25zMhfoQR17TPR6gtqGsMi1SZHJg3qAC3t6Hx5ivMAj8",
  "key25": "3b6CSWSqB3h29ouoPrMZAM2r76nU5HGo3MJTDuULXUmmwZ1VuPMqFPLpEMNMBHmg1RaiweadhQNySpwU2PpWPPtH",
  "key26": "5DqAnPrKZAz7DwRbCBEkEicZr9j9BhcSdv4YSngB8Z8Z8XxaSSQMFjWYhLLdCt8Ybczrkwq1csNDPzeeHRpmGYS2",
  "key27": "5XkotQ64T8PzcgWv6HCVwuySwMRBPe2i2zTSTekqE9eYUktU8g2JhbfYmvMYZ3hmZm91RhAG8kE9dqxhZRLrgpi6",
  "key28": "SJmsHGLQw3N7c1dtvPEr5t2ZndRUTtGeNZwqW4W3F9WzsE4u7enChwX6PKX1he4i8LXYkRF9j3LWYoQkxvq86uV"
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
