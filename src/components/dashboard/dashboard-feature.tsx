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
    "2cMbXTUfCyoTeKV3YjUq2532zP4utdAFAHfj77pH5h5kYDrjTNKr56xGLQzsEm4H9nDymPjfNwoFRAunC1UFTFjH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gbFeavQczQQcUKPfttQhWzMdz29jLrH49kngcQTvWpVvStGradJ9QDacNEcCPnRezq9XvLf9rkRSJUs3GRjppXr",
  "key1": "LpLvFwZmDANyLbqmXCMT95hWddTXHzvBDULmWoXAag54Yj7T84G8nsizLGdzYiD2E6LH6MLhMMmxr7STC7X6v5T",
  "key2": "3A84YyzQegvjryBQiwTBZL49PP1a1fvyr2PxrJni3khobMrEWNeXAP8PQUCTZwrveGfjnDpbwJfgmMvpmdh7scgv",
  "key3": "3w2FrhG4omY5qADZvH9UkfEFnhuu97aYBfwP7Vz5X4kSjxhncbZuj7iyAyXWfrLxdghLFdCJnS6XKdHUody2nwid",
  "key4": "JV2SLKNoz9u2KEPNeNLAkyZ1FydPFtmtrXtpLnvs2WEBeNbUomAZgKBYMriGZ6zC5sgAbyU6NJNnSzyUjsxhDzA",
  "key5": "wWnnWJmGFkt85fDcSRXdCtrWVYJ6JAUXt9nQjqG1sjrCvF68M7xtiVPHeB7jx6johuBadeKBMUKYSVkttUKH3Ti",
  "key6": "4GERCagUbLo3Bwn1rRc7XHv5ypRE2r92La3EwWhKxEUwEAWnmcxp9f2NscdcdEdjqXn8X8H568McLENqk32WsHWW",
  "key7": "2iY1k9Y2PD7v4NNbtyGC2SRm93n8vkaEZnegeGYHUge3R7R3Rerc5QNFQVSr2QrZqpqmLiXTCPPjTXv1dYQwqXzw",
  "key8": "4UCzPd3QJywJSgeGQ1VSiEq8j3JTtT8Mf1FCmvp7bxp6N5L7LteLtwgLbabnzpKg5FVs5Yf973kbZTy8PDtw8FGi",
  "key9": "xVH2PD9GYsY97PdF8zrPodaQZMbdB5YeSuxt3Paq9NQ3eKkixJCEqoH5SH36hmqga7auiv9aKrMRTBxCFKmTtmd",
  "key10": "pX6HfqkFHwuSAQDhH7ZZr2buozkfYNLh1qMV8yHMaR2JqbXDoJsQ4C6CmqSNGn89WVscMpfcB9ZDmCEH7AumhWs",
  "key11": "3kxSCcxCXLQVCQEJCABEG8xTHrUpGmGmgYXjzGhBEZMNFU9LzKnKEgV2RRftCYrTLN6Cw9sVsyekQzCmPgHBKUTe",
  "key12": "58UzyUni8wtbYLY9opZXt2b3eZXQgoxp82NL54fXkcJ7H8Gi8ZeJH7Z2PEzy2KT6ozMUyfUCVJ3bTt6YDK8PT19P",
  "key13": "9rCJ5conpHCxiu4xmkYgmXp5E2u8uJ4pgJMAvUeCeSEG4UBC91ydqs7gfjC9a3ZSJfyKYS1a2EX4nDWFYgDtSx9",
  "key14": "48xqw4VGJFTeu9R4yAN712MnoLq5Bp6vqCiu4khVp3tXsjxKBYnZe3tvdS7k9VcDDfcjg4AzcCdqRM7e8jct4BfK",
  "key15": "34V1gFkMbF3cmKLnyEEQLxTyiETE4UewF41CbL9VUm5owBambzXYM4hstdRfq9si8caSQj3tc8SS8Xnq5YAZyKNA",
  "key16": "2jQoug57G3iYD3rCXAQ1ndnTsAEk7g1w2C5ZqH3AYGXpUapF3RpZY9JWZUWvntQWheZs1v6H6u9BmJd6GMbsgPvK",
  "key17": "3rFm6jsvRLrEBKq7iCwBvqMSKzHcWzgXutJEc5NDDotBUMCqTR6KCB37BJ9RGjraK4dRNrk7UJCYyMH4Pu1jiBzD",
  "key18": "3DDAf3ArY8sPt8CtndLctuQhJhw4AwnR2xopxs9mD3RT2RxeTvaB8oLF59vUgoCjUktRaSpq1EqVsEJCCnWsuLbt",
  "key19": "4AikD3Y16vUNaPia1fdhXgLLjKZSn4jgzfgUiTRf6Cmu9fAjfnsZVKa9eeSR3gx5S5phRNCmQCsFGg8AZ1YG5oLV",
  "key20": "ytuZh8uRgeNKER8Zv8QwfM3txiM18tATfnvtDDSMD7Mz3mXb3seNc2KrNJC3SfvFnBtvhkfk3VnrSn96j5rukAc",
  "key21": "61eYdFQgMhaZFQjiNdcbJfL5toU5kGUJygprDp6sFz83aCZ5H9m3KUhTDq2QY39pt3uaq1oi4cofAueLEDAUzCah",
  "key22": "2VpANK8htySaoAUB49AEc9YvyadQoc496ucKFxaeRLqexv39NkRDc95pHM4KGof3pnfW25LQUH7hG3fbT6tN5mvd",
  "key23": "4jTHTnTXk5DCAwo644aZh5NruiHdWMhpoiPCKV9pM57y3ai5v4vwQKCw3yPwGyqC7SmGr6zg9iqrDwxHUXpAQy4Y",
  "key24": "2vpmYKKRUuxYgbqJxEQJheSmnXSy5VFYRUPbkZ3Ev4Qm9jni7MNgwBYLvQJCQXNBgmApV5NBSE1mU9osbVKTpo59",
  "key25": "3GUrdMoV8JudobvkhqWGBRX3w5iNsu73qrCYkPV7oKAer8ptwC5yUQYrEXwfdaxJDbbCAP29PAiK8R97HswB6xQc",
  "key26": "2uviU9fGR5KXRzcPnp8b7gnXfos2NRnYD3Nxjw1uWAMZih4H5AtcTTwvwKDyZTPQkzxuiJK5s4SBSFXLioE6wYr1",
  "key27": "3EfqGQE8Sya5b8tEdM9rUt1pfyFWScWDvoaDaRrpx1qEw88zprVc6q5rRKH6XY59bjjfM67B8u16L51iQq3XfMDp",
  "key28": "2yoy9baN8u3vWVahdBBVVPfTg8GrT7HRPx7teh3FXeCPJyifX5k9syAjhFgi7PJQU43ayeGFHcCk7WLpG256qXZR",
  "key29": "t5YEEb1qtCdwUWnSRuYxmWFceCkxEtMbTbMgGzqoXYk13zPYXhbDyFUk9L4oJnmP3CETiizutp1SRMfiAk1kKjN",
  "key30": "3LLzsAC7Zb4D6Z7yRVyEWYNCLRZ8q3kmtNhjrvyGo9dNcGEWQyqDknhceErV9PS6mZ7yBkYEy4o2JsnrndoQaUCm",
  "key31": "Av15FuFp7BaWg1YdRTLqUMvM7GstC5V3NMevZ4K8hmq6yXndk3XZTZPXUQsK9QHN1eTgmMcvFXzKditPqwg5ysE",
  "key32": "3kK9bdJCTBbZv2EAdavMmfjJkdEKKoxickNK4L72DjBcuhqzWgRvFNSbhU1KZoK9N7TBjzMPv7qmaQkxZKEzYUEH",
  "key33": "2SNyCZ1Qi6tYeCx1ZcHF2XLMSU3Hn6f7mVbeiPhod4HBbzcLGQ9egMooQ3zK3pVDZwuNJVkJCTusB3eQxUtaaYD",
  "key34": "HfG4nebuxHYKaUxGd6Hv9jkDvM59hdShhdHMt8KU2JbWXkaX2DfgddAfrZXP1tqv9HmiX1eJPfSFVgtS7dXw5Km"
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
