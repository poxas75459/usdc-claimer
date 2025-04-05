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
    "4kjs6CDhv7DhPsGxdbbrYJHJLN6FU7fM5gTs7m8447PdVF47tT6fkLEjVhP3sVBcF48oyhzQyURT4Y7dZftPGAUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CnKeZdKADZd7MamcSFL2QsaLJrNjc2hWr2mLLgQof1ytZ7gKN5qqkqfwjmME1ngLChx7B9KaNNLFVmo4hwMmgWP",
  "key1": "2hQ73nCWqNS4iKrYC9HdCb6sJs9fG2Hx68xjD1zpSH2Rgra8imEpEAKWibrg9xtVoXanKzgpntr9vCkenDZAHnRX",
  "key2": "3GP5KYAzSHsEqvUBKkxzJsrLPfv5EzpNW3T4PL9FnhGxHafEJPZ4KPEqPN2wpBzbAeL2fGgPrQ6Aw2SyaoeuFZAs",
  "key3": "645WSnTh9X2K3Ud77jN7goyvu5Q7343TycJCCxj4KxAfkSo3JKo8U8gV1uV9UhAdJ3GwGDA6Aq53fjDqxUVi3KJx",
  "key4": "G812cM7K59uvdXz8weefw8iKq8aHc4bptzL9dTsk2RWBK592bk78kRLvHfLgWQrDuNeTDCUtQDVvjTYHSKTqgqH",
  "key5": "vFhaskSD8u2pA4Zp64Un37jVVa1ja2Xeeg8GYAttgEhNoJmpcJ9koWsYj2Y9hVUVWwu5t9LFCzD1qayCZjT5DWE",
  "key6": "3NgNdburyiWsDhbFW3VQaBzhLTxQa9zQFDgeCHCexFDZw2nPwsMtysbt1JVejpUG2iXCAwQVdARCpJ3Kv27MH1QE",
  "key7": "4Meco1TxwVMutHeUYzJ36VNpvyw8iJHaimWenUwL4ciLEs116wACdH6ZRFpfnaR8Ff2TeSxb98radtE9WgpNZrFs",
  "key8": "3mmsmdokfBZLnrNHhfnk4JPKyfNvnShwfmnY1AE215HMq5Wi4ijaPWk2494BCjiCBDsohAdkSBbWf7ARi3zaVzDZ",
  "key9": "66t4KBSfBErPuApiYXdSbgXTqUxcbwteKRQRDRv6LKsaMQaTNCqwxewsp4qZJ2QMMVSBJgsMnrciuAoxPs62vLhZ",
  "key10": "254ExxcVqMYLrE2BhQ2jSK4jTcrqbNqQ9ZKmMFs4TSRwhBpjrdU8amYv96q5EPq5qVRsMk7chZCFMppp74YVVAsz",
  "key11": "5EmMjpWbryuULoByFSJF8LXpSNShjXTsuik72H4Ngs5eGGxvNLMqz5uZRdAitHn3gis9Z6hbAZc9GPhpSAu6US1d",
  "key12": "2tasZLr5gE3CFekpcy43iM6YiYUosnLK9UYmyRvpb79NHq1m7vrQGc4ebGkYY2rDxjqrvJQXaRZ8wtHAj51KyGb4",
  "key13": "4Wcwtupg6KEECWafBHobiwrdTPPBgeE8r9YehgEcPfGgzLBkdY2rMqZnC55gCW26ek1XedupxLvSmnvvUGJNsT9B",
  "key14": "HvZvpr1rsS3jq7vXYQwkbvTC8mXY9FQxj9at1jhfeGLbjSpoYfAE66Q5oTXHHcXnRiN8njrvZYmVaR2JmxWgCUU",
  "key15": "2YEbT9kfjxNoShmrg379ahHdeVNvYNkBKSf3yaKGbBh2iQ86S98zASQFKGcNZq4yyGT7s7Crq7rM4LF14YVdCaSg",
  "key16": "2BMsDsHB91RsYyryv8H5c2UL5mAgKRfVAesRFaRgLqejabrcV6vLF89jPgYgCkP4rVNjSnZLGo22uybu8F7kEHEa",
  "key17": "3Jg5zyHWmLYGxXzpQsptMukQzHTJz3jJqhR8uCnE8ftsfaL91ABrqKs8JxpmHW719BEWjkH5WxYsugs8tVMGjQ9a",
  "key18": "39RAaE6LHojpcg3fig64Cm4JppkyKzhUZMnjWuvrGyZRjEceVJw9CAHh9c68542YfCNhr5DHnG4EbBHyUZuPhWCr",
  "key19": "38nVuTtjd4rrwK1oTri6vt59KFc2TFQG46uGqeWmc9tjG9Vt1fdJ4qQnDVjcFTm5KFjBHHmMW3KiCPabXvFupnqh",
  "key20": "5dJizwrMP2H9GRjUMsoVxouXdKfMh7eArvJmkC9vnaSiiaSM9FNKy2p9Tx5GHuc97DnTPJCNJckyjfhuGYX5mkdV",
  "key21": "2VCkeCyHvbbaxFSDk96uv5biv1pbm3Pxkz2necXZCCjLYLWAAjd4cjPEavdzh2ncxXy4L9uqLFWzAhBug6BcVaHF",
  "key22": "5KYx6e1rsMkeaJPepfNU2odpeN6ZEtg8zMdCNs1x8HXdSzHxkGcgJjFuigGUah7KVXZs5ek17wxDinFo8FhKWKpt",
  "key23": "tkHe6zcbkXNiWgzR3ADSPvGQdprAEVW5VcDvqHad2odas6AuKRcS9ASnCxYhxN7uqBdFA9bAbK9f6dHB5kM5tDF",
  "key24": "29jtDmY6a6bTY6nbNDU7qMtR3HDqWEutvBwvtki5uPgs9GMHo2WDmVuym5tfnxEgNQ21qEBzgP6sH817NjrNbrAg",
  "key25": "cyF3ipLjRhjrigQtiptiuvADU4KqSKjUUVrUv7cKX4x1AVW12TYpdew1oyfbEoTdNguzkhoVKBHphfKJ1JtEBk2",
  "key26": "34gq8nSWvKd47kYbTJpnHLELg2ABj2YvmFduwSbzLxHLYuTDJYk7DMZ1k33QGtWqmXW7J7V4dJs9Ws9oRpk92b1k",
  "key27": "322bY6bPzo4DUE37oBCaD1awGd3L1zoTv88KTPfUvRuayUnB3YwAHVwTL36c5xrvaSE1TYrzJqfizvojWWMbNtfh",
  "key28": "2mmHYDvU1Gp9S1er2wwmBJT3JynStcJtsQAmud1oQk1zNZKdXbb1YSDx1suGxcXiG9Ee2r6UjVRY4FTs32knD8H8",
  "key29": "2sJgLg9jDifqvPJv9NxeUr4UBBb4V73gTCPiCJgApnwj6M5RjV5rVwzXfoB4JBi3eDzy9umVp37wUJiZrqkVniPu",
  "key30": "5tpBQgcrkabJr9SFH8arih67eJPYfJyStFmQCCjtqkyShj1LFJHFB7LdYoM1AxspJdY2AMDKfYckhJ7CoTh2oAmp"
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
