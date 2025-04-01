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
    "3eFeLcyEqNK37pfptNscRqJEkJ4HsUHtaHXGEQqS4mx8yP6SDMDETS7y8aBrBjikDGMz6Nghm9fFrzsYGu6pB5As"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pMkD396meSorH1VxZVFWjSroQT52oDUyAazbsyCGat9vaaJY3v2sjKRdPUVEXyGGQMCWnUgaxzEHg6n1StQ6PZc",
  "key1": "3crXYcTNuVGY26rfTxdHep9iT6vhRaGs4Z7PToxeoib7N9gogs4SrprtHXvyTj8c6iC2MTXVSPTWN6Z7LLMCbyLQ",
  "key2": "2RaQSz9dddMgQNPuc3joTHHXj3iL6EfLXeQ1bjwnhmTn1ii3u5SAEU7K7vTje1AnjZd5FCQTGhDGgjwcQsurWu5A",
  "key3": "5zkBw2wJH9z6f3YfsXMY5DAX8oWeEbK99s13A8XN3pGZBqQDvRCCCtPrMY5uvEuYhgPCSyKG3GJZbXrmD9JmwHJN",
  "key4": "5s3QcpfT94cDfwJw26bCh3FEbhRigpnZ33o1F96pnDDACYqD9XVX45KcFDxFpz4gdv5Db33jsBmAuV37xWTRYjku",
  "key5": "kKUdXgLnW42qayCo2nNGWU7Rk56rz7d2A3UPhE6Zjgot1cmJ7ppHMLuAeZWP8FNyx9JaF7x3Lta8f4fwAEzdSYR",
  "key6": "4KHPpfryN2jxwTbn4QB5d2VWtVM55JBUq9x9UCE66bN5avqewc3ZBNVBbA839ARbF1d7QWBB9WERECL3u4WXLXJq",
  "key7": "2GfnVby5ZtPMAt2PzeVGCNS2LDt5XWp45AKxi13aA1psU7sMEwiGa1PJXtgJTvr4gsrt2VbDbLnzLc297g3qLfHJ",
  "key8": "62rwHzJSEfEBuYghcJqJdxN2W247BF7C1pVMpaZ8bAy8bkPugCoiAqdAtNW6hUimojnFtWZhRue5o5M9Ctz35SAC",
  "key9": "4fyHd9H7B8yFHaY1CZ1NmEvDg6aMQYxxamkwMbhiHGBYKnRJPW3FivfUF1QqPA1wrMZEQJ1mb9D26ufquf3sC74m",
  "key10": "66inAZY4NyH6atXB97UFTLb77kuqncBBCp7WPBKMrLcdhFsPkdprWngS3UG5BURofEtejNcRkZvy2qhWKSCcQTQH",
  "key11": "4yWtUnpFyqXcbKYPxLwkXWQ2mKWbXQK3zk23FZNbPqbg3Ldu9wfNAjy4gyKr9gYW7TcvMsDf4JjQTNTiHWA2vBte",
  "key12": "651ujdUexAdRS57pqoGZcWGWoncqBQuR9YPzSHXRhuXUJWU16DFMwmjxhpg33XwCJPMzLVzkZoxxc1bbtmM8f6y1",
  "key13": "2dbYtarveU76ts8F8yFJrttPCwxZU81Ud9pY64SDPDa4xobsqEBrydR1sz8DqBoDTfvzhvNCbpbJ21bLjnGjarCG",
  "key14": "5ECQ3qMVX1jcbcr3xNyVwdGkSjJZ4Wnaqtw29t5VoEpQM8q4aHd8RHeD9cDL7j8FXJLXHfPj5GJrDsjvJU4t2rjy",
  "key15": "3KVRZwMor1GABAtwkz2Lz28JyrQk91riXoBcK868PtMTqESqYa2r5C3fHXhrtcZPbqyXuBMNrRfETMCtJA4DrCxz",
  "key16": "4YDG9H1PtKMhSTPFziaNdH41vSsWGH3JjT6B2c3s72fRJas66qCFbNStE3pQsbUv7ANbvHsXcZXtFLqv6sqTzr7u",
  "key17": "5kVzN1iBxPVzBUoG34xtgUuQtBT2NgbCvUo3D4KcAfxkrTB3GpUu1dZ5Dgw7UViyjLyaCLHeYL3QmaQmAy2em3cW",
  "key18": "4PYtjuVLfeaPVSZmCieRQWAK7kub8FiGEwPYsTAjru9h2NLk29D4D9UdD5LW5PTQ5T8e97jvWfkSHbbYKFJz1XTd",
  "key19": "5qLJTfKyyRjmgau4EScJL6zAqkBjTbKhYxx3RxzvgJEb7qa995HprGzDocLvXxDPcjDJGgqc8nsVuYwXWvNLKaf6",
  "key20": "5gw8rop2pY6mx1nKXQHwKVJQZGhWKMppYFo1irMAZDro96uR2ygMZXvF5aSLnZQtFQrZ11Q5V8tmj68ZRHNmMyab",
  "key21": "62sk9a6Pfp9WvVCindEWopJtEwPbPysVdRZzxbMoysRkTNLtjuFckA36h7qUovpGbvKB3YxxhvGBx3PTT8SMPpVY",
  "key22": "5crGt2RNq64xbt5vLXWKhhYQGnqtHkMB5YrckFY9tqGxDNgZyFJ1RiG11t2NcLz3EjWFL5m1TUv719Ya4hNTQDcU",
  "key23": "39SFAUHDfVw2h1pwYEmemH1uFYiHkznvxqmrMEQ5Qnwik24fYsKFFAgZAxvK2SBR7utyxg8SXUEtDBg3AYNnHJP6",
  "key24": "63Xm4dL9Le8PccD6t2BcZwN7fx1FhXUz9PYgMw6FNYEXXfoMcy9WqWQ8aDsfKtcjGVW846tgtnpUvbfjTSBWNUgx",
  "key25": "BngyKc3uWmVU4uKUtv7Kvy8U9wF3eg7Z9Anj3RkvxcX5EkaUDRxmGhhjfcAxJEhyBRbsbh5MSkyMScd8SXp9ACy",
  "key26": "2FdxsWXssKyjJPFHLkpazQuCBDxuGgK9psA5yyYcqXi6gcMKGZDsud5dZkHg3tVsLyfA59cWqeYjhaJhK8ZWbrH1",
  "key27": "2yGyvMfGWk1n8gi9qfTab7ngcauXZjsCGg3hBKocLa89RtSFNM5x2TQ79kj9oYE8N3KFfhBb3vt2RVvktgUhH4oB",
  "key28": "DPkRPmUdUXcBECkhFjPxEQMDX8FpGjR2FsCx7dYVdZzKbba1Jqdw1vB7fG29rXjJV8jefVQimpRswELzVLKCxGH"
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
