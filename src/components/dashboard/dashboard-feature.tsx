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
    "5TyyYUXE2ZUosJSPLRb9eqtsxC57Y5zPxgYMcmmSt7fAzANk9xexyNN2eTJgtyxXQ7t5Ec1KVNdrFt3e8qdnt9k5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VgLXoGkg4tJdKjRm3w2zJvar971rJinHZ16EmX8hcFz1AFELLV4yu6aJYpNTPFzW7PoZaoNfYj6dTodooc5q3Zw",
  "key1": "4zbSuqFKzARXLnaeZQxakczZeQbG5tU5MHsSS3YxuMH7fhWYLF2FWpyiuykwcpbXwRKKDDZBT9wN4ZfxfMxPPGbt",
  "key2": "4MBmaPnNjM8xSoVUNcmVYBgAtAhyfV2R3dW7HVY3Hkzwfon1uk9TQCzUKz1faDDmr4NsM16LHgETYbRfaCrBrdHP",
  "key3": "S5dZjcYYJbzKehek5ZXG72HSeLPdR8gqubesdEHw55Ge358RBQn4egEeZdTjFhy31RPpWkXvjXa1APzqpjS9vE8",
  "key4": "41ePveqcgf6oT8CgkvbVD6wajNKCavtBkrC3QgwXpgZqQrQsFoV9umUf3B4JQLXxL57dgtEPV4F1xjR3nqTg1aCC",
  "key5": "28WYGQPmiQ9xWvL1vbCw7kFnzuYAYxofHDS5gEEFG1z3DUJPdvFQ6wyDbruoJ6nTBNkzh1x9oHiNvcDXL7RBPpMr",
  "key6": "2vBa4Bo6Fnep7R94LYCVBLd5fJ6Z8dJei1q6nyWNS3zcU3rbzDUb3N4bwUyZG7j2dT9nsi1zAL6wY9rz7cJLkkCg",
  "key7": "2wLxnTnx6PYkV1aGeBautkxeHPE2DyvWPvSVoxDHbH24SkCdMEb7SqSMumHWEvcdgD7Si1EHa2b1qDwRXeK969PW",
  "key8": "gWPibyuNv81EMxkRa9GrADVgNtcpJYQbLT14r7XKDgseDWSbupz7K8Z7GH7PaDJmwEgu3WjXTuDP8X6J6AYsT3e",
  "key9": "4QARhdSYa9eWKNMaoTVVcovUh6Zrmq21XnPzWXsmqn25zsUYLzzvktbWBhFgxbQd1ExeQctKcYgQ7Z8d15BGssZV",
  "key10": "uG3aNiaQtnzoqg4oSWQgxwCnQSLVkfQ9u8MxawoUBhfGgUiQWdweaEBWH28TKHrvcsakTQ2FemyzctDaQLpQFnB",
  "key11": "2zvNirjzCjkcE8idE5oop69AkcQmCSoiyCpQkp8EB1ZMVXCUwuDESxTZi897dMvKZMaBFUsfhbtmxMQFJJ771F3c",
  "key12": "66UvksoUUMz3BCjnMFjApNrjQB3qMZh8m33io5tfBH3chmFFiB6XxQr51WqRzcdqMuHJEJTHTQSjEFMSJLvLRYrj",
  "key13": "5oz6RuNEepf2a6Wsn74PqzGNBGKzkN5U35iTPpGvm5kLRqrKvzEbG8ryme7yaGsccUdbWkeDAnZFhBkyfqBu6s18",
  "key14": "3BrfrHKSrWVUCWA5ke9XaBgbbQQG2SZkZ3gBe1zvwntYNG2WQMYbx8mRSDWyswUbBP1SX5HpeJHVtKLCByvrydjm",
  "key15": "Ln2PuCjCAaQJb4C9sQnBjEwN4hN2AiYz2EmJHbeAUcFgwKhgXp9GZcLXt2Cr4cnrYCaeMAyx2bJ81Y1GjsD175a",
  "key16": "45zfnNra3cwZ5K6j99ktFQQtqGvBZCjz2SgNnxs9FzK1n611iTNLFv1fAR3iiZk6hmTjC21q1S24XBRTEyGnBb6p",
  "key17": "cCnhZ1B5UkmNCxzgTaHjTjtEiqRBJwqamVpVhBAxQwvHBuVJ4W8NLmyGjb6nEHq1NT1pCASQEiR1ezC9fpPw3Ya",
  "key18": "2GK2pri2aH8nqbJGqbjJWnUJXkDa9fmUtw5ZkfMPYqMCsfbL9qtFyVm2SEipjXehVXqxcFeW3496mzVMjfe9wyFk",
  "key19": "3rBKxoW7tLsMz5DyFCUFes3gicHNkJ35KJuxGyWePpAC1q9SWsst9MDPJRvsqcE838fZBnCcYRaY1D77cFPGhjgv",
  "key20": "5TpoAetGD3ay9W47BQM6iX8U2ELdChPBxtAnGr94NWYbMWGw25zMxgjnUUcFXZEKMbwid6afsRTjFT3vuyngCPaf",
  "key21": "5xpqmbKULmUTq4nKYahia4SB2R63i7oj8BpCCgSmTLQzQuGHhbtMCKLZMJh4zqSuW6qP8qTfw8GFiV6ekrWCPbub",
  "key22": "4sTVfwMn6koeE6qNJ5ShSvtHLhjopSjxFrAh4iQupZJVdXoyDxK1awXupHoVJZp4Q8bFDTntSbP38erbtA4TuECT",
  "key23": "4bJDi76aM3Kje1rhb6BEgFstoBTANA6BbJh78GmGeC6e43ojEEcrvXpDekKbeQEj9tnVjMo3goY8s8G9JsD77j3P",
  "key24": "dSv9A7nNonoDBPLYugSh9tgS1xkGD9qsWy9F2TiWRuGq3aN7dYYjCyruVK4TGwC4XdxatjKxX5RntVoYszmaNXa",
  "key25": "5cA3XZsd13KgZG4wMfMyNkuJpG1Mxww19JoxAQARyNbGc62DbmiQ3B8ESjYkAAYCmw1LJZygD3e5YfAfHhBAfZgN",
  "key26": "59RhX2fLhiQxyk2kdgXhqmoS3a14pTrLvFo4LmMnU7cAsNfohegADK5uvucP16c7vSmX8t6NJ5DHRzkDrzhtcDq5"
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
