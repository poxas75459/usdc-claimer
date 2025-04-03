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
    "5rh77fvWmfy5rZ7YwRfZnp9tDfJDjBB7rh5PZqCTgEbXegRYKkNifJ8cN4SGK2QaKdDCnTeo5cbBmE6kBZqvxGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YL9UgEimG4fDnaVeiRYUr9UvAnJLQeDULTXJedmeEXL4zxzhNx6sk7rZNsSq2JEVDwdTzD7zgE17jGC6HFUnyQX",
  "key1": "4x5ebaScuH6q3Wz6rw3Ngg4DfHPDJpuht9msmptq6zKhtwQvNVdE7WKEARjPVjEz9xNt2JG1EcjKg6ub3UuJzqNp",
  "key2": "5RVGVnEQV4t9egpVHMqigmmHJ5t9Vu3SzBk6i6K18RxeCUxhxbvxjwSktWyPRPALvqwD9NcpTjm3mWJs1fdBVFtD",
  "key3": "5vRwarkBgR6GGHitbLECVCnSR7xck2YqnidxsR8J8RNVJfjiQ7rzLmxniu8kuKDmC69rrariYuSaA9bT8U9muPW7",
  "key4": "5zQ8rAn71uG33gcx8QyjNj1gAZVWNEuDVKFXrExGCzC47sikqyv5xGbT8fE95oy2As6SZyc3HvuiTnbipcUGSQWo",
  "key5": "KcuKAXULyjpofmZ6Vt1PNEUJug2immgR1LaGd3zK8FBwLyrQ1VeQLJ1vVyi2h7wfU9Kt2KtHzYiLxSsChjxLfMA",
  "key6": "1nzM4KbSGCpFe6Ut3gDbSy7TqmergsQmgeRFTUpxUjXT4jPNbcbQQ3A2edy4jimbWXe9N6JkQ2QkXiJemcg5Qgo",
  "key7": "5TMpQb2iNmxUQukTLGfGE74CvrYMUeuZEKyntNwS4ws6WPz3qCT7rWPeJHZpa3cSgEZncvX8bFVFTWVbjJA4wCja",
  "key8": "BvhTAwE4BBFcjmtYb2FAZKerMM2vi1TcKk4YDMGXAjAw1NJMwUth3qRBiyXuyx2u7PD2K6NZApYYmziD9ymgP6e",
  "key9": "DhXbGQXsFLcs89EjJbmd7AKphhwpuPc37nK3QwJSozXNFS4ZE6rnZnvoCw3Qp2uHE7vWJF7kbd5SunHMaFVrYuR",
  "key10": "aBV6VPTHadGjmrFGb1QkpwRQy33PmyiHAJVeGDaE439Sg2NwXjb9CkYJVunPtuP7QiMmnnx6qYS689HedTcfi3P",
  "key11": "4RxZfQPmrbuV2adEK6FEB8PEAaGSeqZAhdrAccqYTdPc48x6FYtTRGjmXvH78Tki2Abmye8z8AmV2ibc9z4Cg65u",
  "key12": "54gd5eXYyzBSpWBBbKs7Ya3mumvoFYLyzEtpZaeY3PpXv3kJoDyKgNMG9CAWdv31LvexMH9hbAe5JCbL4KZ1yDb6",
  "key13": "3TgWHyg8pBuj5hymRfBgH8qCGYVvABJfC9ZBBjKzEUXVM5nJbe9BtaGbLUHZyrtcyXQh2i3PPEygkLQR3XR8Pt5P",
  "key14": "2eA6fB4NmQWMJiLaf7TFQh7poHmNiMWU9tBThUpqru3ZxPtNbasg2bb9vRQ7LaU657SrC4VUbkx8tpgPeD5PZFsz",
  "key15": "2Gi9uYqQy348sDpj1Ug9ACJxRW2kWn3TH6LT2T7R9gtqSCkQgXD35q9SVFwTwdkFbM4D2MGBsUoYuKSTxp1NopL9",
  "key16": "XayDaHeoGViLgRYU5KBWG6jNb6HoavrvNQ1g29AtKcqx6P3JBvFmp7VuhWeZrQwNex4fwABiEydavsBBnsiu1yS",
  "key17": "3dizbgNbENhekSpmvVNwWnv6ARNAfoD79nsXi3JLuz7eNKKmevjp3RrAHkS1WUcZbcMUBokUTf4ym86RxCG1Ndja",
  "key18": "Dn8ANPxTGmndYhABgjDsJM2yM1wbXeYBYevm9mx3RUiYtyQpBsqooRaiJok61qp2RQQKdz4CYgm7QdoPQt9kc65",
  "key19": "4kyUjtQsE1GteVH26apgQWEVnFfSecv7bhb4g6PaCPWTMJptHCXTs2UWQ1SbizJRH6jE35n7HdkszJZf7x8DEqF8",
  "key20": "4vwQX4v9tkgkCB4Sv4P3bwUtv2KTHbAfQH9YLYYzdPe9AaqyohRk2iHNQ42rjNELVsMYe98m7jtym1KWpYRfuvUx",
  "key21": "3p55YqGxvcRnKroGvnUXzkw1TsECHYhkkgEsvBQWEfiJV4VJY9PLk16zMyS8aCz2rsMAd6GycmiD8NX5j5T1T5H8",
  "key22": "5nw9q9uJqLxGyv8vsfHT6zcFKac7T2svg2VBiT5oqSw4mcao73RpaATCX4MhHYG13NyRvRhv5G8UTrcHrQLCcmUW",
  "key23": "2xk4rrVwULaX2uhq96jCJV3JU9ikpfJPGetUtUrVQz5qYpH8Au62fNoh53TtVDX8mVkBPdEoG28fNPxx3fzDSMbd",
  "key24": "J7gVBYasUQ4btDQMzyjymowvyBjAdp5CLrmYvtoEwr7hktzfzKEG5SqumYTmdnp7JBBgLWpMkaCxVqEpTUF49UZ",
  "key25": "vDBzd5EhZTjkdpiLytT5bGMW3qize35CSCdJEJsuem9BvAxyL7PVHAZfNPhf1SrtfWihkdGRFzKKjLhVrN99M8H",
  "key26": "4rmW5ktTPYdVBa4pSWpGvf3KYxaRjXAb8fvz1TUc3KgRVqx7LEuia4D8Cf5Zxj9sjFSqFrFpWiiQMbpamUEXfane",
  "key27": "4rJ5vsCKs2gbQtaK3TSxdD8oYsL9F1NxGkVGvDmtDcEwFHpjx7CYR4jBmn5ryrGGU4pJR9vY8zdjLTpmfBjB867r",
  "key28": "4iWTmArkoGnPks8NZB8REwxnnMwpRRTUVzdzChDEdBez5AhFLujRF47Sy83G1EBBYPV9D58DnKtyjGnrkkRgsW1a",
  "key29": "3CHi1dwLY88SWHM71g7yEL8LwDN8GMCW8K5QyLNYxe6cmJnGoQGgYM6TMKjBHMRENCoAB24N5JcPzREqJAgF33UG",
  "key30": "FbVrGmJk85Tep1zGyVRvSdfLxW1THhuzRpFb9nj2iFiN8b2RqE8xqZ4CVth4pndVwBAjGSrqAfrYzoLtucXh324"
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
