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
    "AtESGyyxh78e1U9kVwsbVmcPhsWhmfVaqWLRpbDiPuL6gzLutiNsKSRiNKt6ZPMKSa75pogbb73iydujZURi8CN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4893Rr8t7Wfn3RM5HaKXXw644wmPzjvNyJaG3XVdTyt7zP863i2FhGvumLDqYgBAfz4nKC592b1EtYWKtTrjnvb",
  "key1": "5MM3ZG5cLj8CDhueNCzGg8WzmzRHRKdUWC8VvoveUD9nMXgqn3ZhKzWQrBhUwS32kAutPcJdhebnUk8Lrb2G3bof",
  "key2": "5S7JspxTgkMAGyBMoLnowiwxXjMdqQEorETcHmCtGjkau6UjLr4H6kxtf6AZxfiSmsg3ukrecp4AcnsUXWcFGToV",
  "key3": "kdnQWUn2Ari6RyNEMgN4HvVhZSSFzf6GNF9KkkFkk9DPttxirnKi5aX8HLM9jGWHad2rmLwfzfuPssjvg96rSxq",
  "key4": "krsWRwHe5ucA25d2paKApKVR8aSfdUwmF3954QGoARWz2ZSfUB9EmV1GAZgZF2oPTi5AYMtv8yoUDS6KuFT2hDW",
  "key5": "3cqTxYPHvuVwRuvoKdvFVEuWs7vS4KJYvBHKeBCpKBseR5omEshA16gVi2rx6zP8FJWg418okBbdL7f5WzHwZU67",
  "key6": "2P7rbgfcJRiiys6qsnjUYH3514aEAEfSB8bDiRtZURhHYPnJhZ3uix5bXzyWJZnwGYQxaZeCqeaXkjLWqTiNJXqD",
  "key7": "5AiiRVDESUmtcdsXnEAbwkbsDThQER4Hg1NMQ6p9ShGyA4soU2DQc4rSSJwNWvmkt1mU7eFnWv5fSGgs9vwCfgkz",
  "key8": "53QKzLZMarXfABftQdY5HLHiCENr4G4cDCG4Hg2poNjb7rp2KCDbDY5vC4uE5AwTa9RnCekpbS9Hpt6jziizv5dz",
  "key9": "5yr2zASseDBn3cW6aT3SCdHT44YvhjgQhHAHSW7R3QjJYw81STb2HsesCb5SzVaRDe746oPNZXPSLRNX7iuiopDT",
  "key10": "2e8F6GNXM7iTXTfh7m1bz5zW4e2dGgPaSnEqzwVg9iihC4ShXWf8SJPiVdLJGWapAnv1JwdzukAe7pT3SYgHVQ59",
  "key11": "4bsWkb2yqSPFTY8PW2U3PFKgi977bfAheCrkduy6q9bMZzGe37ZvF56Hu4SUsvZ9yYkCTDz9TA9TYFw6yrhHhnKE",
  "key12": "3tm5Ei4msFiJvvrAojWiJa1S8ySFw8qiQXGu59d7fS7hJkrwE8xfY3bWrJ3j411jgmAbeznxk2nsfUvjZj5D7Kn1",
  "key13": "25uoq2FpWbfpZ9YTUfYa6M4HhkUJm6HSywB6bdgRC8hf9w8ve9hGdC4PGwPsRQ8nF7eGjKKNYVnbRUnk6YmY47kp",
  "key14": "7fTrVojjfb6T9rUhXp7utctfqkwLXA6DPzS17QjHbtgKZzx6iNZs4JbeiF84ib4RELa1UELJRXNpJXtDWSmoHVu",
  "key15": "3PwgGJDghRVbDsDmGxx8N1ZQToL9E37wcTgCPHMwZB8kgZisevQXwzXp43DhrytYHLs4f87JBXShTdokTDPjj1hj",
  "key16": "37hpXsSWmftxS9C2mHMR5hkWrGjP7ACGDifJuaf9WA45pr6LmfBjvLqvrZ81MiWdbFDBDUTMYt63ceQPBepjVNaf",
  "key17": "51V4kX7p6pZHwk5oSYcgF5h7GyawFUkwPuSku6BkB4ugCUh7G2nuLewh7sHfWp5jGJHu2qKTWuXe4J2Rv32mCdYV",
  "key18": "4VSk2nrbmXaKpY1NuFeZkzJeTb4M9wLG5sjw94mMBnQMyMc3MMLTHLvwASFjgMVQTtka7nPXqTXEUDG2hQdvKDdr",
  "key19": "JzC8hQcTq2q9HVR4Vw5xt1aN1UwbTMqkch16GSD9xgrdYwr1FdufKej4cuL9LBqVQ8DHrAsKZbXXRxJZesXi2Qd",
  "key20": "2ZHLTAtjuwSpRG1VDqh9e4UuJDFCnXbK7u6FEiBHCTP5LoCyUV62iKsErXiLtfNChwdbJvCVMEXnVs23Qz4vrJMe",
  "key21": "5QdyQdwAKNf3DDwUJveRJuWRPfmFbTUwc5aiaYHK8N2q2K1VUDxFWTmeBjfYe3kyrmrda9uwk4Bkj7pgXWKo67g6",
  "key22": "3GjPaG2Vac7cTyvTSVhjJsTJw7ch536uFR1bMZChYyKXuMGKrQQZA9RL9LnLc4mK6WAVaCdSFaUJ8XSVRvY4XQX3",
  "key23": "QohECQ8RMkRic82sxCttvzLq9UPjTFNq5ZtXXR9whRWT3qo5qywp1GwAdcCTPF4kEwec3k2euNw8m73kGcAC51k",
  "key24": "5TF4QxZDEPS3E8NzntadrzARw1eJqkVXVMt8kFGjxVrQM7nDvRyC42FqPUuRMfKagyRwX3zPBP6SeC3YrjtXsnob"
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
