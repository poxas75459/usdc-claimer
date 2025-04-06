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
    "66cejEjJBXQ36hhgdcPckFq9cW4QtADSme4CL7Jz9DiJbs9713FvKrVkR7HZ5PNWYeQw5ZpV1FBq6Rvuwz6SfPFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59NkgGx7nJZJPre4Z99QKpXfuadb55C5mshgsKGtXxKsVVU76naMG9vBsAGnRqcpQF21ZnhWQRteAQAPxvWE6n1V",
  "key1": "8k6vCCwArLHzwcZ7kPC6NmJVhvTnSLtYWcnT9fCCqiXaQQxUQRpDG61quSUwoKzXdrCnBgVqfvo438atr4c27dm",
  "key2": "qtTU7Sba35iPfWxw1XCF9U5eykX2o31zYXSPJ1c5SHEHWs5r9zDS8v3DdRfZ2saEk5FtT391eykxeu5ARZFEvc7",
  "key3": "2m5jbAFW2crWojDRJHxpYxyQnCP3B3qnvfixL6QQVaqwzGbP7XKu1b86oVSRRRJf6bXpG6bv3u5NDcT7BguEyaUp",
  "key4": "5wHScCApU8BgSWgde8UFjGWQPLtj78j78g63c2cAyibNmy9tRJBz9T9WRWMTDLATpfzqbrx54EJqEQut7eUYxfaJ",
  "key5": "3GgXNagtcepY3UbbY8aEzmKi1zQJf4qqyK8nHCvTimANi8ZXMbPL57n9XD6hqMaXWJNiv6vxx7VwJVxSiR4djAig",
  "key6": "eQbwpD1HbP9484oTtRVP7wnhg3rsLKRNrBDHhCGRcuLyY83hzt9Eztr976JtQeY9884oZJ7KbVEgjHVCjRTX4v5",
  "key7": "38Xsq3hVoEBv74JnuygKhqdu9Rbw7N9t3qQjZ616VFDaQSV7XH2n7yw6JzwBr84zJ18ndykEVFVtP4vXcbubW7yM",
  "key8": "pzwPY3RtjRbzD444Pgz7KVR9iymkqVKHVftJWcBFq2i8H3xGHsTnS8YzHR8bNtRzWwQWUm65rAnhGtyiwEBedam",
  "key9": "eVqNFJivo1CHo1AFHK6JHy4uWrPiZZzQZgKYBse7CEs76JqXzJMcQQCsp4PnroxWKpnNXY5rnZbVXC9isQxXoKr",
  "key10": "22hHyA7vHR9ChAMcYqP1D2iL89qRuPcttyPhGqEnqvBqm7prLLvB59Egwud9EkxyGMuf656j5wLuS8khq19sdbJs",
  "key11": "3PsnMSrALRoSDJC21VwxUu6p4G9c13KFf3yDy2mqxVri7T6uCPWqrBsjZn7drDWbMy9EFvs8GQfEBBfCJzw9VAj4",
  "key12": "5Dk3HQdNoAYDU7VLbZ7A8kwj24JMo8XQRt4fz88aukZsYkhyXjC5JP5p3rbFKT9RtZp27r8zcvmV37WSA9SXEZL7",
  "key13": "2EgoQnB5XGrMHmZBVhFCRAnf9okiXSqHYD19mvSt7bN2RrsEdyNefk299sJDqKtc83v4X6sJq53cpk5aJzHhDycf",
  "key14": "2W7SBicnHcjGaikVJ8P4fzwX44gTA4ScWwFd4C9zZbhMUsdeBdgjXRubEoSBBKZSzWDDnKZADnKvKkRXjx3EByso",
  "key15": "57xCmSwg9Vxre5RZMssu5YSpzRpfoFeoVaqE95DBM9ukd6LKqd6bK9yHmhNKzCvD2cpJmA8hs6WLtFpxCEwyNN5G",
  "key16": "3e9dPQce9parBTXy5ifFDP4oNN3sdWkWpmgMbsnAvKM6jrdBBBw9e7iXfT6D5V4b8N6mMQi1paS5VQexCBwNY1vF",
  "key17": "3KHAq1djnpKFBEReT4nbN8NXGuec4DNcnAogWFGaT87k2wCDihAYWkWJCUunYN4HGvZnrUgrDmXjJ6nXCHeG3tyT",
  "key18": "4Fghmh1Cg1EkEP3XKL5tXyfK85vZ8qDFzcEBa6Ka7AtCXUxJKsJtE5psMvLVgQ59RxsJ7GxFeogi3ZH1hnwz6vbo",
  "key19": "4UjGwfJp7dAs5exGAii5YgnzT4K3gc3ceBvveRQZSqDraAnNSujD6HiTWAUkZq9JxZJv5SMYTF4o4rMVuTjKHePx",
  "key20": "4AE2PETvAahD43i5UNDu5LYXGdof2e1GQW6cmExoMaTvoQdCtq7MAFNdQHQxoM6PjbwLWtaVP47AW7qtA2EPpdbz",
  "key21": "3SviqoJ29G7EydpYiYGoYKEyarzeZfgvYY9d29QTrfKQi8ksBwVBv1DvzYBEhV88DzkQgT28EFnpqpT2roRdHzq2",
  "key22": "3GJyHSjFeziSGETvtvmLT1rSVvYRVv3tftcQ7NwVSFWVMTiqaNjHQifoztywnGBi2jezDD4hH7KRWfWmXyFA9Jwt",
  "key23": "5hesUxeYgTdUkqwJXDyAYgGdEq39FBdzxHRA54vEJkfAs4HMW21QCDtksoxDpqfZL2eAVZjkmSpCfKpsLhsztRdA",
  "key24": "5fC5etEhmKZoByZHaspQuRZhaxH91G6TTZbsNC2mg2Z4cXvDmcxFKYzKUv6FC17n9k4LcjVhwB2NCUxw8LjFvcQz"
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
