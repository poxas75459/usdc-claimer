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
    "4HSwDmPjanNKW4Wgajx5sKqxWYjDuhbU6jgdxsrp6YRrwotYGTd2C1qwUQ8LdA2C7PbFJdQ9ihahwhe26VmEbHcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cCTd1XeMfovYCWHoSgv8P41mrdKFWxhR3wWpKWNUvhDe3JuScqFGrWPyRXbUxK8XHn294gbaCxvaUAVosUMh4Wv",
  "key1": "5jkGd5AQQbVjpcydJsm9aqVsYnwseQCMQsdmFNiq6mDChm6XUxReiX22BGdz2iwxyy13rfmy2EdjGaCUbiqToUkb",
  "key2": "5jqxbFRGbB418jAZwHCiMVJeVcqqdUbTH2sdMQNZPgd6Ffr7a5G2MxAwjnW7Yo8GK8P9s7uTX9QChRYeku9V2wBz",
  "key3": "3eso2K6bWG9V2SAMMXf5Z59sPGd1mowTjve2jTY3u2BkeT5UZJ61rrdt4DtvDGcY3GVwVcf2Tvd4VFbfRk8RZZy",
  "key4": "5hEEujkhzGvR2s2GGcEXAUjN3DsgxYggpEsyCzTyT2BH8SY3xxumKJSjxn8FmCwxjySv4RkzqpFrqqm4dZcuWybo",
  "key5": "4DTbTmshGdkuGXK9uPjvSQKs4WnHg5kk9fs2TrWVQNM64Kn42kjGnVHzXZz1YGEEg9mqNYs4TJmxKMnygjrZ2LMR",
  "key6": "3zWksYsbanAbawS3rjThBsgF5G72Aihydsjp6Si4xUtzko39yp7ZzkE6qwuxcyXDoMawZDxi7qzoFM5498bs2tUQ",
  "key7": "qoHcAZYrdUEUFBx1MuvitSwU7hNwsLJ6VY3zJ8p2ofutWxidHy15J6XyYP1WutdTsY1KhDXm8ycdH5L9X8Ge47N",
  "key8": "2tGwSFbxBZFcN6mLkzRKsoFUXbo9bmjp7c6jhWAa525kndYMesdUL2sRCrpriFzPiMqp1Ph1z7rbML5RNtPQw31j",
  "key9": "5qkkFyf5mm1MDKSR1jb48SembRRpKBboPhMh6i8Ho78MeMWfLKnuooUkszuFyscGYX5UtY8DtoESjiDVUELhDv4S",
  "key10": "3Ssr1Xmf2JJZknzDb1A1XVpG1fU5vQu8rrZxmgzQvRt13v98Puh4zS4cTVLifxi5YPHwM8cwr2GgdbThYZKkWY7j",
  "key11": "uTgREZin2CuiEjE94BEjdnYvXCui2hkzLWNxUpMXWNB8Koc4m7wgd6awks9WAwmZ5jZzcGWTdEBPfLiYyqL42Eg",
  "key12": "4B6fXriN6q3YvUjDV3FxNdqUz29MovrHsD3YrQPZNRACz1o6o7LTvmjuggvjGB1DbZgd6XRMbNQahNRMXHCztybi",
  "key13": "4syPUuNAsh656DgLjmhMmcqj4R9mCvhhVfsf6hjkJdymJTnfwTgg5VxkLmWL8mK1QkEomsqMB6egxTeENTyAjsdQ",
  "key14": "iRqfDfnZp4h9gf99LWNEL4AREgaNkfCZKeG8ESnQNooPZ79K5utxqd2hjMf1KtcRPj529nVPKrLnSo9kV78KpWD",
  "key15": "2GggPW1HCVD2vdsiYy8GqxDg7or9qcpEWguapnBFj9FAVWyyfhRtaF2Skp82MV272cVWgvJBp4tWbNZYD29rB6Jm",
  "key16": "25j5zwC4CA2DqABT8RAF67bMrjV5fiYUpjZiKu8cwRQsjpmFqf4exw9p5NDXpqpgAKNDwzMEaij6LUrB2nNvAcvJ",
  "key17": "4Yx3SByVe3NfeDH6rNn7n4PoBLghkCKhsFonEspRXjZrZsV77x8q4JbrPNdgj4NxhnkcMxvqU1nYe43XvK6S33VW",
  "key18": "4YKMdwobAefftye3ySyQ38qZ2FYZh5qqU7Qyom6X45nWZKNv5dok357VPdjVsaA5EHZy7GJhuRwAaYgCNeWm8ABn",
  "key19": "3SX3KG3d4rtfkyLJBtgoQrhcQYufHgtMMdX2pYr4LgPBZRUHhgY6myPao87SH61pSaQWbPXVGoFiD3J4LvWqySQb",
  "key20": "EYBVZLBzBDj9xG8UvwWasrHZuMqXhB9eeXYEd2Zu3LJovVyG91bLzjh1UTR1ktG2uWmPFe3y19vguyWGcGmuf2U",
  "key21": "2QTXC5cTT82vvq6pZsufRxWT29YBocdrjFeAvuLUhBUGz1DVDDp5fFYK68LTq1ZYfeaFT9xmJZF9imckD1yJ5vye",
  "key22": "23qhMFjgVcSvrxAxR9M1XHCMUuRvkMckfYW3QWfgVqZKiMuDuYU6fYRgb3mDLoh4QA4nM3LSY9KqdaNV5UQctBSt",
  "key23": "3BjBFKDgdUpgMym4PBTjM5EY4EvA6xd8hp1F8KofmjgU7W3Nk33ybxKQmDxU177UApdesdHZHLiiSNtEXDWNN1iB",
  "key24": "CL6Kw547p86HMqtUXvFAnivpQJeY8joJpjAzR8kB4FFHAeCUYKrvPFELi44QoHJ13fdL787H1NCUtAH6ZF2aMNe",
  "key25": "4caE2K3i6EinJYF26mieZBhpHzG39PTAmNRgCSd88akwfC8ofMAGetfarrp24NFczdv2JbuKF7xj7MTKGdr1KAH1",
  "key26": "35npH7gVYtgaEQXzVa83GTqvcXmhMVWH2GEHDBLXboEabEPJwC1Rafc4yZnFtTzBQ6NzC3bzRRtoNsaEhS6VY6VK",
  "key27": "AVGjXpoRUhB9UwcKgesBLX3xrJXdPapRKbsJRkfdFmPfG63UnQrd9ucQunkrZNnRrWh3MSvaqqZcDutYsbV7Jty",
  "key28": "56pZmawHq6bswkQwNdZ5c41ZvbKSofsEYABPnhugt3sjnLZ8ZSjBU9W4tKxhsxG5skWkaxBoLCHrZ5VjC3h4TiYs",
  "key29": "4U8vPhM4sbMbgkNkq83vkqDTakoNnyGqpKWZW2cA1EaSZiFZThK8rGMSsPyTaqHRrYMLjjrF85eLZkzaNaeBtRE",
  "key30": "5Z6RKkkt1frVxqokaLbcUSiDVC6Z2me5HTLHa9tF5UkvZNNRTbXYpjYomJ1ixDECkEvo1zD9VqEcc8xHc8yqLRgt",
  "key31": "66noMp5UAuCrA8C1YWtdEUJw3QhqCWSr2cR3xTp9LiWfJRrZF2RbaVZc3Cm1XAuw5WXL5ps81R4tTZikWYS1EKH8"
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
