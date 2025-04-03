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
    "Rz5GTBoUJK94Zg4Cv3Z4fe9apXriJQkHzKifJz73XzTB5fbxjMM9pSwmyBFjhYHYf792qCsAbmRHM4VLKxSaAX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pYvqDnD79PoMGNNcLBtQLKhcbF8sX2JZU59DZjcXNzvx3EiDxrmVJQ9bXRqXRj8XGfKJnEsKZmWgzVPqyRyv3bs",
  "key1": "5qmwvT1Xi6Xj1SToPdLrGQd3eUThTbQ2bu2kDHuZD5mSghe1ARNAfYsMQnP9w9bXGr7jH62m9scLy6xLPktmqCUY",
  "key2": "3TekS2nqWRfnJtDhjvaVDWqZBLXJn9YDpKsYNeKSprN8TyJhjB1yRATSFRxCbH1GroJwizY8bn62KAoaWc5kuYzF",
  "key3": "4rKWtiXp8QkkWqQT3CaU4oMih45oo1ENqHp2DvEuRi4EfRVGFW81hJU3GAwib6Xb8vHerbx2tLm9erL3NZE2Yqcb",
  "key4": "iK1bh1SxqVx6jGD4oyNAC57aChwnmCumNcLWg28tSbjQvaTuesaEq3z9qCj6aPQiXkiPPMgTwEe2U3S71itKdXp",
  "key5": "626AeP5gMpVx8EmqAdDNjJHgE9ooTMDxmE1R2hbSb8kuPXrUs55Xvf3WnQUAvjbQoF9sQ4NuFwTHBPgmEN9sge6P",
  "key6": "3jUxqZaMb6aN7dxS8qR32bjsrWJAXHVPqsdCkmon8TxWmcHunYq5HjCTsxwKE5DGSbQC3NEdDGoCo67BF3qam6JH",
  "key7": "5W6Qk9BXaK22G6eUyyvoiWHnqszC1oRJzvD5Z1pTcvmP1eg3LBZssfKXvDrWTtJ3JtggoyDVD2bC3aNRTKCd2CZZ",
  "key8": "5MdbuWsByK2dZwP1WLhxK2xpfrTMHQAppycKcAhqTBbxtFCTmjZBPN5fMdjEP7Fdpe6jrhKrkwC8BEqyhjNyD1E",
  "key9": "5ufBYiFMC4NTje4mTMDsZgpcnKeXMEG5eZiniRB3MriM4eYA9yVfKGyiLCnnpabtrWiPJ8638SmUdchfjcZhfcDP",
  "key10": "pR5r5bD8CTsrvx4nZxyAuWUq2LmMAmt561LrvxyLeNXwXesuURLaPf6tyhfMee58jyJHkJF7p7Mv2iqWT1Ff3Wz",
  "key11": "YE27JC1Drn2rjP7QTtQrCYZXV6FndeDFqKX82LZfh5T6uPcyAgYPTQUKyWqGKarpoAiZ5todCExw5JScMFcNW8x",
  "key12": "5Q1ieMpcrqVHkKHkJHczE6VKrHA3zt2NHP7s6U5K126wm4GoRsBgn6iP8WZL9fr4serk6ecG37eN7bwoofkti5Ub",
  "key13": "4fovA3duiv6R6vevVvRdSTcyUTyJ7PcDcDxp9QbuTqqBL6LsropZB1GYCsPC3GbL6SQHzRMNwmGnT5UDieeqw2k4",
  "key14": "QUK2ZDnooYj53PDrfKVbNe6LuEwdj6gyVFLy516tHxqF7PepcNuuPQFg5P8QquvqrKovWPp49TAdo7tvycfXHLV",
  "key15": "3x9SJtaF5Tst8eWK9mgkCM7aHzy3oz8Gxb9M2NDvyb4xPGEcffXEZFQGd7KupnU7h8kLT1baCfCXcnmYLRkawagL",
  "key16": "ZNnnKfpGP2KxecfaUQ4DqivsovCjf8aaR4AF5yK4sp43RM7G2Tyb9DpyQShkUbaTFiSMje3tSKhVuJYmksXS41X",
  "key17": "2jmQiThM6ELJzDB6heq1RUUtTsXRwwKstENNSAwqQJ2TFTgcGZ2NKytvpvdbXjwsboCofFktSNLzEysfoXf7UJVh",
  "key18": "45M6xXjnxw7qVQUAHGd5RAZ5YCsNPery9vMzQvuVo38mPBfF3b2tjH6P8hbaESkiCevgVn9JJH2oyaoNBHYDaufW",
  "key19": "67PCekusncctD9zTBCSNrCNWuTfyAhM1C92qgcidqVu9youQFtWJ73ToJSP9cqLrP1We9yYgtHFPSoiM7L4DfT8y",
  "key20": "4iR1D1hAUW4YEoCKXM9wP6GUwJ5HNwbcGvWuuwACyrDTcjmncbyAjKgz6QzKffpMDiZMABK2mDjMEZJyeWeSozC7",
  "key21": "2EnaVDgieJ7xvsUJnMKhywmmPyPvqUAZUHQW6VwJH6kF8Cqry3JofbT4WyE55HB96yttLfLXwUjSm3o7FJEPQQq9",
  "key22": "5k55ZBAT5Jhe8yt5jbX5PygVCkdJeoiaxAPubakFvfQqGmbVPhMRPX52LqxrrjCDi5KT6eTpGhzKHqNJCUinfWMU",
  "key23": "4Cu3qMxp7s3pFq45guJwXVFUWx2q4R9BSW3EdSUoGro4ERvYzNmxBNSrFcpYcggbrjovtj6N27c3Eykkvthvdb1R",
  "key24": "4bjc44xmYHwnYYHYwP34tuSX2DwCJYg5sej5ChAMXnNeTDa4GdXKdhdPbJsyAdk7VjraUrd9JXdszRsFLst4WWvY",
  "key25": "5eUo8vFtV6XGXC3dUMbda86hpwwaFey5DgBSUPbCHUzbLShPZV8aF82LCEiTYrRBEAUeBdJ5oWRVzacWypTLaMtg",
  "key26": "3v2tq9DaDcaYk3HjyzQhvjYUeN4FcpGAbcMhheH9tje1AXAgfJgXrdq6uN59sNQWeTeSS3KStGjQwCg1swGDEcyJ",
  "key27": "5uogKbxiB3UecvH9HXn1ZynEB65xpQzxDEPLU2qnQHMEfhNnstsHiNqdie46KmSscUDBJY2RPVFK3me9DBJuKsJT",
  "key28": "5rJJZaqpqhQcL4avic8vcgQ4gnXgUPsPvSMJq6uHPoTTSGWMAq5c7Qf4f2p2PXix2sf6uUz2bo6s9ehWPmB2ymD3",
  "key29": "3pWoF5JXneuBHkDNU3tm91o5hrHVp3FC6fqh3zY6X9h9rbUC9VMWCRL3uJFkjgyYGt2nZyu1QBFWBEHdMXZQ7CWs"
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
