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
    "TvNDkadAocxd96gfP3EzzXvRuPyWeJdfge3RqRKVzZ4pdMcw1egY7RPPNLbKQQFzf5xRfEp7uwfC5J48gp16cJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QWfkF4uYwKqmWMpHgV6rzjeofy9uRVR8fakFkFum2GdYNpwuPHjBcjEfaWPVQYu7SVrQNhsnHmh1TJZWKT6xtA4",
  "key1": "3xM4qU1tZU8sY9T7oR5JjdzeMCvHuERGPMH6Z2q1zXGdCoba1zBqDnPFzDngK5AmRkeyvAFBPykUFXY2YfA6HyL8",
  "key2": "2xKja457wB6yWWH7h1yz9wv7B9rzaTx5chnwkHMQrQxr3KJBuNt12pJ2XoyNbexfR2JL4pmErUR9mbNGauXMwXbB",
  "key3": "3F5ygC3qKdFVsPv92BADdnoUgZysNRRLwV7ULMJ4voyogCPq5fmGHtN75FHeeEMcejPv3ithjca79d4wy4muffjM",
  "key4": "5r4NvD1V4AuJLVMjYAqoFweJeDbSkjdLBpReWbvRMyByNEmg7FUt7bFSbJHsQpafqpAjfePeC2Db92HGXcrb6s4g",
  "key5": "2Tgo4dtmP6EHVGPWsFHaHBetyzF5cRpxtYHA5aoqqxsh8osBWvyK8Zw9JBuht4aBVh5ekZqENqemssXG9YpoJ7Hc",
  "key6": "5o1cV1fEKbnQ2eGCn5njMxMnbWDZmjBT7pAUewV9TPmypFhbouGs267hbFXhc6SK3E9uzBjToNqDo4xkiZ4QuxoP",
  "key7": "2a9ipc5dcwsakPaxDXVrx59YJAWiFrV9KPTFcgyDSNXfZ333HS3H2GZDgTe6yUJLy2q6o1ThpshejAL9adv6pXkZ",
  "key8": "3a9Znb1d8hiGgYgpzie68rwamRFYxnTHFvzrchTfDt2tY8ww5sE35LAfSacnGyu1QkWaZ48T6Q8eWnNGmuSSwDs1",
  "key9": "3hn4ij66iWofzZwY7GiL7vnFEKuu6v46LWxvEQ3SdywPT64nAMd61caQdgX8z531A7dZEUYzT4ktSY4XpPoDtfM8",
  "key10": "4mvqmYyinu9SBsp8DRbn477VHmtjtqJgTRZHsy7z86PNM1rxc2QF9jfM6zqW8Jw56xXFHLmBozr8v2zh3xjEj1e",
  "key11": "2Wf9hhu2WiWH6SCgomxTM27Zyfugv6NXnLjKn4CsfARQKfnykbzsJp5sCMY1MZQygxemnvebEvkCYX9FLCJbBDqW",
  "key12": "5b9vARyUrFedg5UpcyKrACVNWBbbUtM3fiRo4h1RiUkme4QL1ETpQN6pkTd1JZ5xa9DCf4dHGqEoXSABghW9Ls7y",
  "key13": "5zhRmXk86joHMSF9ZJgaK4G7CMK1E71jZhSmPApXpzrgV2A5UKsvjgsBR67fmYAzaNiNWHx87V2beNuzit6hxVNf",
  "key14": "2BvEMECgJ8TDNcbJ9HwcmYZbzVyxc6jccMN2KaMgMWXeEBYtKEFZSBgwEk5pmqc1HeShMqkjFUQLqVzp72eq2wCe",
  "key15": "X1rxqoZTc8sc1U69PX4mnt9cfoh8BkPQ6LXmDeWQX3EjZhLUDhG7fyuA2V1rH7ZGHyfedv7rg3fSquZhCHR7Pc3",
  "key16": "25XYGL5NbZNAVvWJ83tGAwT9oQimt9FS8KpbdPSScfUTiguXAVKJBkPYQZNQjifVfB66eJCvPGaKy5zadxHTZ3aZ",
  "key17": "3hmcg8CdWTjoBKHihPBMu1jNjkEJHHTPVkivCnAhdMCCWmsHyGXmcSMLndMcPHWkurj2viyY9mgMYGy3JfBZt9ER",
  "key18": "5tEk1AfUQDVFJ8CNL9j8izfuYg7BFsazfEdrMApUWzD5y6bnUuCVzAYVTg213dJL6SgQG9cnaDB7VGaxhZiXexUW",
  "key19": "3a8gdenDpVcZ4gTV8xjYKA4NXzmZytDD2ArMTuYP7UmzRuoFoyM5mdvWszCcZR2tJEgmoTx6vMreCVzKttTZFcjj",
  "key20": "kWrBx4yJMBPgvaTD9e8v7DVtfVWdpFyDVusV2Vyc9FQzJXfnxtNWyr9ZFE3sgrU1vUJWs8qujQF4T9R49DKKQAK",
  "key21": "3uuAxd5d4BNVhpsdRGievV7M3b8h29n37dcNYq6DAiSz6RhAduv8USH6tGP2G15dkuPkamQgh6f3Gv2p9wqKA2p5",
  "key22": "3osEGXn5RCUDepBnpb2gQnVRJFkK461Jm3uAG6Aw6BkNaMkWf9N2ZjeQCoqeP6vnaB8vB6hz2sCcNCnHBK86DEzm",
  "key23": "2uQkxqnFj2obcTFpyTNqVAhM5SLcNmFdPpgyh8RWwNbTvKg2de8vgXY2geDxtMLuB2xMzFB584GBZiBti8butZSi",
  "key24": "3E5NDBf9QN4BosajPvHRwEeGjfggMHpiifY6WwuRrd7AyhRpdBknnANBFuYoTD7owMJjwLZwU4xk5EXzGFXwE9UB",
  "key25": "52SNwxekiaKRmkS3JcHDWYm7TPTCkH61Jcr2UGP9tY58odMVNf1zBZXWZvZJaWAGEJhyST3iPKkTGwWGbg1gK6Co",
  "key26": "5SduxmP7EQXuWgMiLTVMDhFb7PLhfhtAZnzWaAicU1AV7wyLB8Yy5UA4wHRgaaB19uEBx4jDyJGrziNnAyKySNVa",
  "key27": "3KBaC3udXWPxFGy9qUpE12XTL1Rk1Q1KP698PSAPpg9hcmMVk6AryCiRtS9TiZrXE281SDoUzu9hoF33EApbvSyH"
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
