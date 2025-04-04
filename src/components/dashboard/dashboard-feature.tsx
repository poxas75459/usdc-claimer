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
    "5Ab4kxqLGxsMWZNeJnus3VyVfk58dHiYHQfS6gLAZ7ArJqDULYjAm7htKku2zSLboAVAnx4J3taQhNraJ9r7VKBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXcfEUaYvg6nrXtnhnFtU5ofLvXL6SF7W88xV63CBKJMF43sNZW34sqjo3ZSWEUsWsXHbhPtJ6JFcLVvLg1dWZK",
  "key1": "3QF5v4MyKZ8kjJpJBnVu1tSS8Xb1knDetGUJhGXmU1Ry9WgjEcB5Ph16xHELTHG4rG8fMaT4FLifgnJnkzCUWchJ",
  "key2": "3noAX7HQfMZmpcpvmZuHvvCtKPcQyThMKPu74u3pZP246bk7ULEfWhCCcHdGV8xHBGouiUGjn5yK2xBoS5ZN8Siy",
  "key3": "5TnUBMcUkfxD7Qt8g5L5iK68iL3S467WNsASZREztvKUWv1nKQpsauoBRX87VzYhmbG1AXwTdxqbnwtsULq8appQ",
  "key4": "2mPXgrARP6W7XkkuBHU6fUQpKhsNiBoeRwiYjuSvVaqH3AjVBWXUre8irbNrTZVBABy2ApreBfTmenuCyU2MC7mk",
  "key5": "2RXFygoawE3VWWvjcwjvhUXtRs3QnnquwjaY6DhpwaAnzzCMvMXLZfdqnAbN4gTDGsF4FPeteMjr5TeKTKeKQkz",
  "key6": "3ZXanE2kF6rCkVZWVcPbXd3sEU9SrEwfabSC5EX4CvB9rM5hEbBQ3t1fq6u9YLGw6AmRjD7vMMYWJvw44opoDuA4",
  "key7": "4j5wE9BVaTLdemCdz77f8gTUTPMApX7iAapJTiZL2VnAWLQUxMtWHENL2fxGrC4FMuP2RmcDpmJwHX5x9of7eH2P",
  "key8": "5bHshysz6PbAhi725yXUuYUmJGRSzmcnKpV62rmhD5R2RqjX5jgR6gTfvjrPbXJzXSX1herkmrfq6dWTDtcrsEjK",
  "key9": "62u3PfY1v74hP8QHPXQjGtcFKxDm3sgbvsjG67WPDTgZFawZr7W7GQJykxEY3GHJEzGyXBY2Ht3gt7nF65gy93Xj",
  "key10": "Y4g3zoQRLFZ6M5ir3FxMCiG6zHrS2WUoMVkx1jTezH6UhgNXeAWw5g2E24JwQezzCX44Uuh5ZpE1C3FBHsrk9dw",
  "key11": "2xunhPjaES6MdEC4SbtzSL8pzk2Wm7vtufKAZGmhUP9B9xZEHcVE6mDqVKM1JsgTNgqCT7orPm22Wx3XTqyFzGLG",
  "key12": "JyCXar2eYX4D6bffsk1VAVJ7BsTPQccguLov6to6sAN1NxGN5Kbizya665x6xigvzEjrp3xRM9y6J3qQm4xmDsi",
  "key13": "5D97WGCBKjoGG95oGtugFrQgcQQWu2U6KipzYvjqYck1Dq1ztoGVA2MwF9QipU4DNDzVDwmFj6ErAYYKtdEhHsgb",
  "key14": "59KoFMpn2HZLbWzmZB5ju14da3d3BoW2oyFs1UvT4WL9GYtu9dqpKv2xqGJ1EKdvCY81ogudeRr6Hrz2khuMiTf1",
  "key15": "3vNYhcExk3kKEsdK69LZSgvQFTkZvCJWJnR8YXSkTmGF6dkR7uLkBXjgWG158BRbaXm7GYZU3QvQGjrHAmMGoGYs",
  "key16": "Mx6gL8WCisTKsWWMyR2ZbTipVfEDJS1meW94ERCU84j5p3KgyLQuhjpoejUmK4fgsDCqtzH57wARmW2gruoKxq4",
  "key17": "2EySPRzJgeiFXyooL8JSXR4yEo5MKGc9bTXdrxejRW9WAYDBYw1yBV9WY2R9QjePGuXzweaiNE7xagCAjXUvzf1R",
  "key18": "2Cr8b1gVTE3YJMhsmVRAEQweMPgW3j9rkeUDkexiMXcHNCLteDCqTziWWd6ZiN6cvEGsPhThxpMHegiJNVGHVaTC",
  "key19": "3RMQQVtGjGHfaaALtVu4FCNNthw7CJ6fpiPRGyQNNSiPDLXnB1jSFyguJ5k9abAZ9Nyv4p6b8gSbnopCc9idoUmK",
  "key20": "sYAMjAYFuazqBraDm8Yts33Dfq5C2uoHqJw5y987BBtnEaaACxBCvmQdip9DnbSvnGntD34gVBLKttX6rgnVZo4",
  "key21": "AmZ3aJxwUFNXgGHAdmVaTfMaj6p9x3psJDZSAgWdWkqrpT47854TtjzJqjt6aSF5cZjfaBpQsdgPZ4n81CQyggK",
  "key22": "9rXmeC3xaMK4Gv8HdH8t8tiZqixkNRuuHdqebf5a76FtjCzMH3WCcPNdMkXaua2fmto63RXJff6MF5kvoYR3JNb",
  "key23": "2rXDhFyu2Um8W5bQFtG2T7D4185N7QZd6RVCf3gC4bWZ8UA1Q1WZc86yP7ba1u8zW7bKWwf5up2kQpY39fRPVH49",
  "key24": "3X8bW8Ta7uSuHfjsjH5hqm181BmpgjT7WjPHaD93A1xP1naywCszpCAwAk7DaV66hsGjBgvyVETagpfapKRhRB71",
  "key25": "FBKBf7uqSgBY8K47URHjYk3QkQE6qaC5uJzAZz4fj579q4NgLoWnzF6c8P29paWARXAtvbWax3MZzfZbJfGZAQ2",
  "key26": "5B5ijMgLJrS294DDRoFPy28T2rb24nfVksmu7NgGt7wdcNugxsrkbStJz3E8jXrpHhgTDRzRB3rfHrKDCKyz7V1U",
  "key27": "3uX4WS7WnPMBhvEPKpyuQzAe7iAWiwfvq7QWPUBWqbBthV4jzs7TPaQSQDxxYSByupawSuAJp4mtkCMUi14Y9tTY"
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
