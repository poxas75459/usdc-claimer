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
    "3tWFWjD9gyYobRWhVjx9VYomCPTh8BrGGi2cYY8ZqPPJTUPvC2ok5y8gKD8JUZkgAgA8orv7Q2dnVZST3ME5W4id"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywbkwWg7oaHygCgzo5b93PsmxwRcJrZEH3ySD8H9YpGmMVR8GmxNtqiU2XLSBwNZgGEzDZHsKrydfW6EfAXgpRd",
  "key1": "4LEUWdC37vMjPwZ6qb9PyapCUpL4ddZA8wtkCZWKssqFCE7DkLLehdymisz6uHtC3em6PYcX19kKjgskppWXCVt",
  "key2": "5C7W3ucFSM3kn6nNCxfNCwehzs1i9q2wnsAfFWKUradazz5HNnmN2gyaTsANpTtJaEQtyDsKHVfiYizXxGoGWcJX",
  "key3": "4u1MtpnjEWFSQs6GBDztCfT9GEL16ZRrXPzG6rRJaTKuq3ed6Hn7HHjxyWu2sVyXDSB2BTj8xgv7HaSu6CTsnss8",
  "key4": "3PFV45oETCt4A25ruE4JuEM5Aepq5RZ2j9xoRGq3p4h1EaDMQ7UdscZDZ6zqX7NYz6r1ZDo7n9DKxrR1SYWzc61R",
  "key5": "4EKRq5NNMunN5NW465JPpSeJxDWBpgQDCRAG9EasGA14cq2VQVeG63rfVLJqc3QUA2UApHCDuAxoNgywFkqvLkkz",
  "key6": "5X7msWKymS5CWQWppmC9Qr4VFSNkrLkmrdU5EcHSa424sPu3Vwwq23Nj5jee3pGHXSWxh6PzFJs6suX1pwfTYJiA",
  "key7": "3jiqk5eqHDEFQ6n7h21PSgaV5mAi7VN2RdYqmFCBrpvSAuVjAtmemQjHmdQzo6StDexrdv39qgibJyAMscSBpsLX",
  "key8": "4rQT13fws5uQSHtKfssGitTqmQNFHLQCayeqnVZPk5Y2wzsHDqDKwJKX9K7cjXEGyC4CqQVnACgiLXTAqaU4yo9t",
  "key9": "5k6MwqKwjXkJUwYkp1yPd5Cf1uB6zPZrpj1WxehrXrQJedrcx425nDU7JaC4XUnbLCEmXHzgiRFm3rBZXABkXDQp",
  "key10": "aMT8VCXfmwdgxWfcjtMSZfNNxXd4DdJjTi3nzPfnb9jiT3HRWmse8DQhHGWXu71UW7zTTeUSoQH6gJSVQcKFiKW",
  "key11": "2vgcKkNMJiQFJFVjNemxNXK68QxtR5XCwXL3RTrnW1GcEFaBS7p5iBhZETrTvVmgPkRBPEgcYizx6gsQ24VD1MR8",
  "key12": "NUbBHovjP3gfaiC7k6P2s9BYk8ruHoiUyZ2Rc2gWKsFv7KtHYYU9fEDofvpNNtM7cwSn6vmLMkNHms8QjQU13Hy",
  "key13": "3cm3HurcMjSCF4FBSHuEqMBUhB8XigaHTFYbWokA2cLNb8gjKRUuqYHNBgvJht3xKaoFJ4oCP9EYrA5XGygZscNk",
  "key14": "3ZkxV5U6twTceHr4SGvcx7N4kt6gEgwF8ZeYKmZeU86ygzBjaQZofskGx6ny2iwarQbodwLTwaEHqJaGyLkHhfji",
  "key15": "3quUKawDd4n8YD77bUrK46dNtGABzaZCy6ixVSRfoUQFfZZYCNhoMtzBGmeqgB2nB7QNEQqA1TFxeNST4QhkH4Q",
  "key16": "2nLtFh94cJVxRMVyAfGQK4waa71YGu9RLQ9rCjLqZa9qkiE7gFoU63Ki7hGTcJw347KceAVpMorMGZJZotLaDYyY",
  "key17": "3UgTQ59dyKNcgpfiLg2CSpsDgWCKVqXHz3wp5E1hgYpquxBDePp7dy8JaE2S1AZpz6HosiC1m5ue77Na8LjxGzaR",
  "key18": "4vQ5ytK52961MwS38b9LHH2ieG6ZDWV7MwC5W9FkWCn4BnjBWiqXPXumVNfZKoLGHkPfopj2diFt5SgWaYLbvUky",
  "key19": "F3UgRNn21q6gpGEoSjbkooQmS3GT1yT3g1oBwJGwz61CStuQ3Am7RbxG5k2zy7LhLEVa9cyKmTgWxYpkQrgZHF1",
  "key20": "2NyBvqottGCcjLc8FJQvozrtnEKV9eKEg73w924cCL6zmAobnXGin1xPNxKUZSLLREHVRuvQ3reabgvkDTMr3KQx",
  "key21": "5tUQK1BHQGXGHZTr3VH4yzXvuWGa7nwy6ymxnk8Yo9oAmpbuNrsJgNE5d1YwsLPRm9X6hvXyvQkDbGY6NtuSxU2o",
  "key22": "2j1vj7qdMaFSZvgAT4WZHjbjPDFTssMvNHCtsmrKJiyEstNti1wEaZhTQJw8veurEoKaz6FZMawnz5mjATosGKJ6",
  "key23": "3RYxTcpA8hzesS9GSJkqn4TatjGfGbW1zv5usBwejNGTVk5qSGphRPq56x4CJgtjXJhUQsqqHk9U5qJrGm2yDcdc",
  "key24": "2SNdG8UhGtEDKw6aU5aMgV6HDgvZdDcY93keeoeNSCfN2EHvBBqMeFKjrv2b56SPkYt6u89cTmgc75FUJjDb2RmF",
  "key25": "25zmNWc8C8ji6K9xk4aVBF3BU9m4HDPJNX6b34e3v9yUFBeJD4bXS7XPF7S9GWkrqwgPp4b6igvr9nPMPHjaqqfD"
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
