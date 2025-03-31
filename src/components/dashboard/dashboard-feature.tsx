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
    "34RTjXPpDJJQUffqR4w7SJK7jjNVewYUtzesrAfbfx6B2QLyvvooSTVu6CEENqCZiFW5tP4m3cn3gTJuH5haQjAX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adD2XKxNaWUT58gSgPYxWJAfyWbfX9z8G6TrC9R2qjKBAq6R86nV3oTXd9oUk9u82w6fJTcghPn3cunRsTPFi1M",
  "key1": "3yxsUPXtka9JscHxgjfLN8W9y5pHTseTpuUoVeeWQd8QTKtCGQSwEVpnGiyBXD7SHs4n3xgBmBkaFHTwyGBGwhCo",
  "key2": "2kUayTR1p6jwHWxDWexffj57BDzTA3hAP8pAidjqxMog2T476N8uC9xjVWoxjz525BGiPpktMq8jSBtRDBoXKLot",
  "key3": "4qhezxJnWWs8RMfRZrZtjxPD9vJecqnpx3yZ6EvaLndkgwxzp3eMNT8LnwRrur9YJ2GG5zqRMSUrbJVuvWETcLwK",
  "key4": "41tgrk9yteVymEVzGDYsUfVq4AsTsEhX6YdgHrua7k9uEBmLAiqCjZ7HAbskBsdEnCrCLVuEPVh8VL5c5qUnfA5g",
  "key5": "2x77oT4u8coyAuJJGSnLARa3GD3njMTvm2Uh2n2MpwLmz6urXgWPymxinRdNDkGzypSMUr9JRJoM1ow2VNQZSN3r",
  "key6": "59opJLf1UikafkwGXd4W6woPgwMRhpjcn1Wt4LVmKmNWYJ9FW9JtFQrhhr4GGYLNTPHf97Tw6BiCdeudPCmPMPfG",
  "key7": "3nvq6VRVQbHsYHeGJ6HLcwRZZvu1AAEupHSkKbN1ugQ9eTdPdubcwKUg1Ense5Avc9uP3eo7Y1bH5kFL4WJdUeLb",
  "key8": "3TprVcdc4BgzUPyDPmHitdzhUXQtNhdjzcoZbrHrmJEWW9XvbB2R3oZ1ZVjCPm6WjLxWwERPvmA392ciutdLo9yT",
  "key9": "29gsRouJrVABZX1LTgAFsQZoTvF3oXnUBSWZz2jZ8SQfuLwmzW2iWbPHdn1qKey3JS7ckZ3Kd4BjLFGKL9UaiWmX",
  "key10": "d4fRReX61zsYyYTQtSdPNh1P3dYF2YacdA75QXqbAvX61Zq1LLdmccMZ1VKVpXs2xGDM74irnmfqsyRnc3TMZxf",
  "key11": "5TEZUHoB3A9JdAHTXXAtcPoFxG8FnEJvjGyoBUSzzfbfiKGMyVt9RzP8u8aKwp9L1AYMCQsrcyPG9RH336gzQRjo",
  "key12": "5hQp5mRr39NNpTan5U9eemJ5pibdoR57RpxveBe7oxFf3PtStchWDHaxZHoLrE9CdwXTkrdiVCcLEk8C7XP593Mh",
  "key13": "3YsZhS2KdGWqPgd9YwtWyM86hAdkp7G4mCL3nnTLPkKV5AAML3JCstjzUuhgVYWvms8FyRXh2L1HCFCPc6mCc7qj",
  "key14": "4UeeZrF1AHgeXqaPD7Mje4XyZQtJ6UV7oALo9e4wjWmX4Dc8FYqyURREcLqPrmhCLB3Y97u6AaopANcbzb4BqGqC",
  "key15": "67YTWJzSzcsT7jkkJmsMhGHXKkPWKmMGEXVN7B9nD8RKXEDm5FoJiSDYP4ZkZZjRauyxFYoftMfJaz2E9d7ebMBd",
  "key16": "5JqaF4FfcGmb4EmyDMb29wxhGTxfwAvQQdYuYXwwzBxBRrPRFJjTjn4apX6vyta7K5H6xcxuFejnFSyyiEY67Mbq",
  "key17": "3HXXobAZmfgk1sW2LHu8xn7WfUssoJ3baSqNTXpXFUdMfJ2rv65boB2TSigUzdKi4Zqi15hN9EBdoyLcXyQKQnkT",
  "key18": "5158sgTmL8LXVy1PYdpdBHpSYdMFCFmcMWHUcqzBpQ5UJy9TrUuwu6sS7DhwN6BbmJyHVf9vEvMjrHjM137WpWQH",
  "key19": "4YfuCC1zoz5W1ZWMZGTeNdDmAsRrMowchz5V4VkEGePb5dU1bieLytwocRN2pMxkxtQtW13dKbob5rrujVhGG1mb",
  "key20": "2sexaJ9qfjTMBNZ7dTEXwJBosTNRr5jVSxCGhasy9dog7wTAuWZ57RBNbE9mPvupthCgYkZcyyAVbX2QZt99S15Q",
  "key21": "2UDuHDuzJNbfZb3AyoufD2HLf7P2BDr4VKFpfJpEB8JeadK9zSu86LvF3WPgZFDvVXsQZezAsbJxrfg6jUaLypVS",
  "key22": "2DnDrKpRUHoHgxx53SS8gQxb3tppz3rxfZbLdJtpmzAs9bABT36t4H5feVYG4rVp7BStvxRQ45gEUCJuTUDfDHYD",
  "key23": "5LjhYyTw2nMLypNqU8vUfuC5LQtVyCC4xWMqjsGXLRgmitnSCrmhzd9nBnXHZ4LGoX7yFj93HcxHYJoh3nTnrWLv",
  "key24": "3qwFyMxW5hfdkQ6i3gELLRQMWEqUjrQCGqybk5TCGynUom5eKqHAiYAbrM2JcQZ4zJSAgeZ7WwdMPkSV93f1ASAG",
  "key25": "4JL6qeGUbh9NuMf5QvzAm7gsFy4TiAxkm4WxNhj5CEmV3Jwnkubrpjj5C21fX4bv4jVCPC7noWn1nXVofjt6VuBQ",
  "key26": "4eHSfrKwtLNuLSDxTCwe1sJGjmUej4uhYZzACAr6v6xsso3rCmCi2cVT5X9KWAv7RHAdHdTCCX2UNBW2ryJ9vbKN",
  "key27": "GTDojkntJrLfmLHxTA3wAcmUBDpET2kyuKzUHmLAPDqzFT4a1mxgopSjw5JZ97t2rDF75VZiWHPZ9DvZi5dc1hb",
  "key28": "31pw5VzP6hxNPeuqqNiTXyc4fPhPxfb9a1or7Yo6M36BWdZ1PdCr9c2QvKkJh9Po6jJveyEm9ytFxU14Yg6L5WVr",
  "key29": "3xsDr1dqx2owoPghSNkGNRh3tEyNmMt5ewGPMFYQSHUZFMAmAUtVuMgnA4KtnMyMH48gf7r4YtL8HPomQHoCWvrZ"
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
