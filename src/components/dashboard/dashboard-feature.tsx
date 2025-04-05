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
    "55WHHDeX1ubz3F4JW5UQqa8CB6TWTZN84YrGG5azCehfGFePS5RgywnkFN5en7gMcvgTvX2ZkpKggYp9F4kMQkbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QJEdCFVLUQC6s2ydHV4TKmcbVwAhYXzDN2GGrkCAGR9dUSJP49DUL6VQY86NqmtKJWr6V6iDkYwGBbppER2smM7",
  "key1": "4dMJ9rwrrRTg8Q6YtHdBLFiXu2e7XsM5z6G64V9PCUfSkFes2JoLxSGYNw4QV4jaqsUvi8JnRAutjajBwKokW54W",
  "key2": "63eLUa49yYnZpHs1rjmCKoDyMe5Xha6C7nYv9MQbFqk8hJouPzDZaMcQug35YUyNSyHGbkiHfk11LAbseJ4MZe4S",
  "key3": "ZiRMbw86mrLF64EhSnjDRuWJHSM3xoDP4GPC6u3dzkhbd1jjazJtiFAWEenRcFH54eDqkLHePnAcgEcBnxvBkC2",
  "key4": "4Wbv9Jc7BSWrHbHUXjeMAPL64n2ZeuhSSxrhaxhgpb5fuaLaKe9HNhfH4EthQSWsySFbTZiq2LiZfjWH4BM75gh6",
  "key5": "3tboAH7oDZSxwyWNNDZZeJsPhGnTYC6GrZTjzd9zeEXHnoa6kUmJCCpMuez2GLE3UPgLnS43Db4oMnxYiMnuqw5m",
  "key6": "5mRWTESVXxDn9oJeqcFPECFuJd8mYVost2JccdEprok4gQpNk45Cg3oFi9GfgPJZ7nwL3B6utZBTy4XpRfchaLRX",
  "key7": "ZMdjWiMwnHC8X3wt2QK1PmEDka6KXDv5jX19dr2TXL3WaYsyrGotLjqQpFzSrYNDo1Yrk8v2hB2VBmEaAvPcNJ9",
  "key8": "5VU2MgGcox1JdiwBgeDXMMZoMktvJPU7j2851d2orH7BNLyfpn4Wpq878biwhaSTwCRjGmjVnCAEHCJaKciLhSwL",
  "key9": "HBXTeQh4rhNhT5fjFcUVP7Vr3vGtVHr7DSvzojfYsFHnKF7abY7cVxrGyHyv3bhYKKs32sumBEDdSxgwmeVoydF",
  "key10": "4hAC79e8xBeb9qyVo54D96k6exTdic4tnNzeF38ADV73S4xhozvN4EHK5ErdDWcP9e6Fg3XPEt8gVgjmhYBu2B9w",
  "key11": "5YuKrS947dtqhePGPAjXtR5WLaNseucvSf6SLHF8NECB8NN2D6gc2ynszsayUcBss7NFDSCEdsm5xj1zPnAFQxQ8",
  "key12": "2LFvFA5WvsB8muz2XpaqL6H5K3eYBRxginRL8XmSzLzNSivYVmHuBzAbs34EkZyVQvQnaHUzWP2gVcu2K8rZVkg6",
  "key13": "Nkcdnd9CqLpVKsgtcVJQeiWLnKZMZ81y9tiapCpm1shiGHirZGPeD9WBaDakkdfv69G7yW8vkyDfBWZiwqDUkWU",
  "key14": "6gTqQxQc62JksAuTGoDzaGcwqV5nGsUhLCPnsxXqvV7gPRSm6xRT6NSDyq4tn1Z1dpY2LbV8a1X8Ey8JfFLQ9u9",
  "key15": "PVQ6mY6MMTaT5Ppj4qJgN3kved8ywdMg5dSczPtum9FfJS7KpuCbrD6TmQZSMW6RDRWnaHDFhFTmcm2QEG9pym3",
  "key16": "26WZrM36mWLQqJb1qVxbaLNE3CFg6EazdidTfpUmLgAw4gmakUFryb1KLECoiDpkGNtB5tyGVUtWHzZxXKuFF13j",
  "key17": "jPnHQut3BpXUPmLWWtMbDr8bqmhXXYUSfppEBfwxHz8RzS61NeioMxNWJqbstqtTQ1bX4FxbHWnJqx6VUK1DLYL",
  "key18": "3yYeC7yrbZvg5NBDTaXFMzA41RATRE8JABXCduuPcGizB66huUfvGFmcJZhdk8CjFgedVJe4kCkWk51JFrTQz5Nj",
  "key19": "38hA1WuLyX8hCx6JgLya8a6zXhJCwixinbQwBEekrredZM3t83tJRnTeu7wevoTd8hpomYcbdUdBwutgbEudYR3z",
  "key20": "43ehJQhVofTMQCwDymNKgmtmTVGSGCTm95yCEx4Y7NL9HHDQW4TRoQnNLg1zeFyyzDCW95ekxbLiCK5vBcZZTzUi",
  "key21": "5psYDyWDfS34fz3jxtUpUKozhpuNgPfwCxW2rjyS877NAYtvSaTYwGVN8cpxkMULRhyD2YaropymbnkytoAFjMKX",
  "key22": "RSQJC7Soo2LAyW69oXnQLAx83mVNvXYEKWNd9Cr5VyGjW1mfPeCML3DiY51t8Mzbm9rMPRM8G1ckkMQKrzcK4zK",
  "key23": "5cCWgN1dKY4LiLonZKmqWQg1ckTPMNnsf93Uam3yEKAAURp1ucWHecxpzbU8ZSwYetbBRAy5RWpBM1xQN62k5Ky1",
  "key24": "258fa6nAmcCLcajdrE9HTAvN4WiWY8hsSKqgh5pP934EW52K3v7dT888rgbq84HgaK9X8DTvSJtfmvcfUZh6kviE",
  "key25": "4PxPMds5hd7Do3XNviaiz2nEfhsDR6XYoQRjVo9KFxWSx28VcWTDbaCPp6hq4FJeA1diKWowrQXmjcsYsSzoXxyg",
  "key26": "2GHzTbG8mwNt3yQpr4xP7i4vFaDFm1y62DZju6NovU7jVTQyyXSGrP16Cfw9va4Rk4ao9CMnxHJHfmLky4BjdYnN"
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
