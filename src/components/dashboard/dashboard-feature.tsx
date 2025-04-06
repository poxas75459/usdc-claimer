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
    "3j6LG8HZ8f1dX8URdYNNauJ1bJT2mjE2cYuany8mbjVtQRXHPFs9MJv3kr8W2WkhCuZXVrm5gknpA9ECc3EVwnGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fgqSHnUjXyXE5HSUwfyYF7XcM2soVyTFFVkhUrTkyR7ynMk5hzycJ39T9va6z6dZqXjSVJjjjyKQ5f94kt7JMnf",
  "key1": "3gP2Ev7YewXYzsTsWhX4f8YcXZ4PYTDJwSBgaupcCodgNfRZp8ddeZwwCcxmU2LMJnwChr9uCE5fz5QPzPNDWnfG",
  "key2": "2auF57Lnsja5BG3epSSqTc7bxPXG5ajLu7p92NbyVSqzWD3hAEGoRDG8uxsK3KpGG7uGCSpMmrGJWpfThyW9U16d",
  "key3": "2C7CQLfEgxiVhei9qcTUuNKNPKGC9CrzNbM38kMNY7twqyc5UdLi82eBbRn3h6KUetJeaKBfYDUSzS8ZK3hKCZfP",
  "key4": "3BXETkymZkcfdDVwQEJFsaQq2yMRsvkiBij9MxKYiNw7aoXk7XVcpBA7RjYnUwbYLjZGnWKsDixZBQyYPc8YnBdE",
  "key5": "zuCp8CZfpMuGTrL2pjjSkGLoy5AGLxTyVCJdXgGfFB2147Kj2WxBGhsZvyifd5LYdGquRGsx7eDX6fQm8LKfuok",
  "key6": "4f7dS2PipTMPFwbsqdCiHBcHpbG59gae422USUHuySuHHdrwy61GhDqvhYAxwv56KrNHfGH6u3ke3RqzPJMie8Tw",
  "key7": "3nS61TxxZ2XzV71cuk51TgdynNGYhFYayJTMkDhR7CGoBTyAUjqKRLUAxo67V8PjQps8S7qK1Kc8KXSemcisCywf",
  "key8": "2EnnLoacUe29vWcCezYvqVcTjEg15WjKkqVYZUa4FgN5utpyq881MPXoPxcjtaz1DcVPcWgL9mXajc5Tz3xP8Zbe",
  "key9": "2fSEo3sY6SWS4Uzhd7LHexarXTWnTdSPfuLLFJ9ThJBtsGEGuUocNXehhTfaa5GBKkEGo9aXK5smcSPRY4o4QVmv",
  "key10": "MgcoyEp3FQK5Xw5NcJbRuEJjrJN286tFVcfw4CrtbZr3PSnJ4SSX1E1XWTHPwihDtxe4BuACJqWFraouwSdtwDo",
  "key11": "2E5rFgNRB8Rk5gg8PWL3tibV5XW5MQz43XHPaiWJz1HwwMGjTR1zBwy1oadE3azRUnCEYA1V8FZxBee8mpjN3iQn",
  "key12": "3gj7RPrPiFLyho7E3cUqAVZr2yQLuHzqVutwLW2E6TPNnNuJbNLCc8ziK9JUYq1MkJEEp6gquMptwGaEU6YzZNbD",
  "key13": "s1N9QsqwsFfMJLqVvsBXFeM4jHtRaEpCTeGu5vmZgq8JhLADWbDUc8aTkKPDLtst4bwiubgvaE44WGKMrgQkbFN",
  "key14": "p5mQfjEBDChUJvXJEbUA3NQx9HffpdEPoCdoRX9i87r7qZDkxBQZpQBihH8vuDd5TPtwGDX3P8ZNy5qh5EQsnqx",
  "key15": "cXPY2P8txLju4mi5BUWUWeYvuuSXWUrTXrQ9ymLpuBoy591y9NyqS2D5Ftq3rWXhDaAPGwZYejv8rdH14CmiE2T",
  "key16": "3mZ5SDc2oeHoHT2Rbos38b3tf7RAk72LnAaHecWqECYCiMEsF3XBKYh4hKAgxoizN7WZcAMpinY3RKqLVuWCZjco",
  "key17": "2CJfMXmtd8odPmixLRtadDvb8Hc2rNYC2cA8EyB17z15YiJUSWcwAuSS4CK8gH8cSC7MSbV6aJh5hfsm5j8DDmQh",
  "key18": "31ALQKoa1aB6hdYvbaWhg3jxAgHNEzYXXtue1nXcPtLUXwmqUaRAW1BEhEB1rsDx1dy2j5DhCppgrbjE8csaJdBF",
  "key19": "uGspXzhL1vVXqzjJS8ccPq2UCrRJ5EoNFhXreQpgtKpXcrFp3aohAUxcLn7Jfo6y5ZscH6YQQcJvRrkmc691hVt",
  "key20": "3Veea81RVGvERHSN9AweK6U4zB9cLBXHRMZr67uKPAWbGKJjdsxJxAJHEz9w2q2pDcvUYu1QasNMx72Ge51dUuDk",
  "key21": "73EQwK3azTXyGF6CKboXaNVW4gpGnFi1q7igCW1RJkxm77xbLqkaYq6Q5PcPq4yyVLRRedEHmbT3ej54f11LyDS",
  "key22": "2XQC3iCi8Qffv8ppY1SWFYzcufuoUGkgVZDzxyo4zKEwuAxsfCCZUpjFG1VZ3n21G8MmF994gZ3qJSAi3z6SqhvD",
  "key23": "24TLqLzfF8KGYXMJmVW52q3F6ViNNpqERWLywoXwJ8a5wrfwZC8wNnz3VHPkY7VEEXoxaPa9R8aEqvC1nqcLZXgq",
  "key24": "2hp8gjhxZdEVK4oofGw7oCP7XSqwJ9cdTjCEsuH4SPuvXu4ufwpoGnpqeSaspYNhNTQo6npbqiBNHpTuaX3ZF96h",
  "key25": "8hNDsRzQVVF5bzgBGKEd1RJyTZLTZmU3UNLWPpZkjbXmazrhJVXfaqHp6zF2wewQsZ9pAyMrVoCpAfMTivak4D5",
  "key26": "JCnJ76En1S3AQpXFvxQF4wBvy3SAVpj8DHhzYgWXqvZXvawUgcnhhCM5SN7LHKfNjRah3FLUk1MaJjdF9FP7jwg",
  "key27": "5wBebnRd2Lv6aoQ57HztFAmhAFuYR1Y9kzZau79YnQi2iQPSskStjU28rpvq16n63Rr2jsTyFGXyLBS8bCtfGjZY"
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
