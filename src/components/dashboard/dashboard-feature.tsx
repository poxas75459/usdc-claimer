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
    "3MJFBkNTdyiNpkUd3sAzFdAZUnVGuToJ2JBJCmyjjMz3sNVGfB7zpR2Tmsph6Fr6cweWAbHz96MZPViMiiiJbU4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VUfxk8mq11BoDKXBoDAQ1hXTHkeKJ7VEUhXD8fsMsfYrf5tUAqZjLsiUJPivvUw7u6Gk6ukPaKsnyrtpxCJ4eJ1",
  "key1": "gpP8Z4zSVvArAh1qL7utzyQtzMmkLvV1X26zS5XQdZybHFLonq3uRuKQzvBwg5oCNBJfBgVe7cRLcoyNAn2EK38",
  "key2": "5byGBdQ3JkzkNoiY9fc3M5sQSArjamTeFe5su4uDLJKsMo1Cht9VzEHjs3hovFY7oNvCzaL4STfKUHsN2F5dxWuK",
  "key3": "3eVFbRHyQVZM6svyqd6cgJ7ErXQ2gqwFrdn22NtpQguTYbwWsRJe2b5J2LQrXENNxZjFgnt7gj7cFm9CVgYpfHoa",
  "key4": "3EczyhhiUirXqAmkMfGbTh9yskmRsov8BiKdQphfthrjZ8VdbodWY5Y5aSAPLYeMh2ZZvoqXiYfb4evbPWQaWQdV",
  "key5": "5L4815U8r8Th1mxygLiqNo31r9W6uU1PDW29MVigac5r5A2p37RtCJBf5YwLwEoGwbK9mnhNXNMh14rd9SBmtrST",
  "key6": "3hG9ZDAYS33yZpvkcTmzf3tMWHh6r787gvaRneVpa4pMWDiBAgiWrKwKbCDxZYea5nJ9z8AGhNV8sSV1zDDnrCM9",
  "key7": "4eHXGCJtkBghaBADjj8mRwzKH5z6g2hNKDSVax6hMd4uijJsUQoyPbKGKBHdiU5DmZwiN53abGHvJy2Mq6MwNuQC",
  "key8": "5og51iEY9ebmCmdBVSs4TDcvHiYytpgWSyaeqXBUdFUvpaGYUKH7uvgKPM3FHpiGyLnFN1GYPGypG2Q96r5VFeet",
  "key9": "RdK8fAFbWoYHf4xjU7ovyWvyF5kDsBbyQXPaFsFJtDnJAssNA71NWBvHMeFK4Chq1y1C265ZWZkgz2e4NXv764w",
  "key10": "647FDh86bEu9jjQ6DVE9ZaFe1LksNFq4H8uhukJSmdgdSyr2mJzA6cvrdk4BV51jqbo7pPA7AfsQ8Nv6GMvhSnBK",
  "key11": "4mSViJwjLkKvSp3f27UwoK5qY1t6Fwyw1tAaD5SjvuaNNMsnbsvhSDt5vdqLBcYmYdwK7aypJr8ZE7mwFToLCY8X",
  "key12": "4aHJMVaf4Xczy65KRndbiCQ4C42be9P2HrXhg83wyX4ncbAwt2oRRoskKNqp6KjtMwLvFbWJX8yTdAq1UUo3Jzb9",
  "key13": "fzbCPeidAnpRT7UHP4CDTEgDCfqbphCoHcycgjEhwg9Wfv9oB9BJ91cpVaNiUZLzejk6Rw4gFt9w7S8yKUeYX7H",
  "key14": "2Eowycry18xaFwY4Q9snQiEhBii1tqN72Eimpb1c3N2X9bqKWwFwWr4pDnQNQgXZZHM9ZpCQSekthZK2UpuCqrD",
  "key15": "4J94acs7dvksQo8xVYL7XyWYqLhmMqoH9RwFPehLEPHHYnCUNMTk1XBhFmt9FwH5gC9CR2wZPKBmbwZVb3AA9YJ9",
  "key16": "4AQL9NidWZvAME1oy7nwLQWP3KhCEgJxYdQDYtwtLuWyFwFtvkD4DfUDacCccAknRK9gZ41j6bmr4cF4cJ5ms9hv",
  "key17": "3tcyvFfnF49rk76N3bNirs4d56apq5qLg9tin3BczZTxmZbh1hzRnbn1233ud4YeTmFqzRVxfx8Nzwmn9b6EtNeb",
  "key18": "66RY2pZN134sicHhTFUqqGYpoUoGJrmm6NM1AxAZvLz4vBUSMSb2bht5qeYwxqwvbYpMnioRdvTggynNVniHYWKB",
  "key19": "36oYqmnoEptsZBLaAbsWTSEPeZyx9fnupnz9ambeq6xC4rrjSUFa7MWG7SsZgpSkNYqJKdqeGsU68MJJfVa9FM3s",
  "key20": "4YmXVvGEpx8gcD7z5XjV5Mq3cLey7Y6fVDvxoNHsLUkMm9fLuNFJeem8yQF48UoWczgKUPNzYbWnhS7QepdH4kko",
  "key21": "2PKZxifCDFdESgFusMeCWP2h8eCPLd62EyatMZvDgg1bRGYSWzhQroiwsXbM9mXKEnxsSKrCUkU5sprHq5jb4uY1",
  "key22": "fR75Gyxme9Eg1Bdmftp7CnSyhLbLd2NkD85Ac26Rnk4aZdZXVhurQQhuck4k2WV4zEMLx8U1iSsPcJy8xk4XpPk",
  "key23": "3JXYZUFsKt7zUA3q8khk3wYeQF9FmUffwr6U7iQfk8MzUsWobMieTi1KCLwijyfBWQHYz2Ye4vX1dqN2SxXymouk",
  "key24": "2Ne1N6nATGvWuMdYbQu5unQW9CQFXCC2xmysdFCPxxkTt4uzTV2Q6gBwCqeL1cJxCg1aGZYN63f6SnE4PwCuM5us"
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
