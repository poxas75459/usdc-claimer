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
    "4xLAizePd1RxS9sv7Dx2ddF8j1YL7C9cDAFAKdvWVLm8pScPzDMSYPQNCAXtFTgQV7dpeXnKEEZ2uEZ7nFTiJEX5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZhzhqJFvvFHAGEmduaiTxRd62vojdyGo8UQqzcmDv4s9PWDpTGCSmtmoqFhZxZAZTMwm77BRcLgdosFUCSNXy1",
  "key1": "4TcuYGaciU5BvNGcas9PFiJDbWCSTSMhV9aHNtmV1kFhqKKZHq3jp9xSP2vnZZExWiXqxdvCeLkAhh5XFM2JztbX",
  "key2": "5GBzuwgsjzyBgjSHEYiSAtPBrymfn2G3M3CBpcW1yYpxd5s7FqiReTY9dbMZFi1XqWwNhNbeMCMLENrf2y9PQEYV",
  "key3": "5VP8kR9qcK8oTC2jyDG1pBPM51mgsyc7YPGkKXc679Ls2j7xLVFZG1gJVQUtPi1gNsmSwzHD3zbvJVkio7XCFGXn",
  "key4": "3F87LeByuw48QfN7zUWbXBKhBfFSMRptsrjTJCTiiudFg4fn8hqPMV9rThcF1pUnu5tUT8d4Ecxs1P2A4pVfaQyD",
  "key5": "CfWYdb7qwM93R9hmiWj73PcbpM4fppe85QK7GYifpm73ihkzUb1ghEe2Qjtjji7pVWDFuAN5HxarXtxCX1Pz5Ta",
  "key6": "MT6J6ycA3HaMBsPMRCteWTu58U3W24GRrBYpf5KVYoCKkzJbEzmgnHxP2KHhnXXA56cafPDQQQ4aPNVuFaopPtB",
  "key7": "dnvwfuzn616kZtcfYdFFb18J87SwjWvrXqUzZLo6wwzJ7HY93UT5EWZ7ccirj1nDSJ4Fqp7ABqXBWFSKhqfHDtA",
  "key8": "5cGWh86t2iXCj67dLTFDYKsian2JmV2DUDhtKN5AkFfCDYaJKqk7pVvPaY4Cixs3BPZnWc9bmoFnvpBkJ58RdURa",
  "key9": "3qEsZfyxrdYPf8QxBsp5n4NdMhsFUJCMMWuszCv1G92cuPjzi153NfLT35jF2BWtuT1pHAi4C71dkUm4Hir7SvRo",
  "key10": "21LFYpUhzW1U3kfHpfT4FhMYbXtMUrbszFx4JYj33dvex3hrmYrddFPQ34ULZgx9uuXWmKaJ4Qv5ZVPN9gWxbmH3",
  "key11": "3f8gx8VQChpJCvU5YP5Y3DDJhix45DAMQZw1sQJzSBdB1HcPwdJAaum4SezTz9iD6tHT2sFR6qPCh6sW8BE5Vx9M",
  "key12": "5BPDrESS6hKRmeWMGHNAJTYVcHSBULC4XxE1KmgCoMY8FyrC9xdRx245fHwDXMt1o6WDG2ZAmhymPppc9R1zpsA2",
  "key13": "4dUGottU5KFViEYHagiwYAF5XAAUt6hUNsihsfRn2E4q8SyFcqnusnU925S1NQAc7pirtvNKKvSma6ioaE5Nrqhv",
  "key14": "39r8uqTzAK4hcHZchrG1KvPnjn2CDN6KwJG4djFFiTkPRuqQdAN8B4UKZGRiWJBoaF1JPauCP9BQz3NxjpM4rcHF",
  "key15": "okSthxvkawVdgrksekVtjMwECT1TDCV7AMXKhANxe9YuanFn7H6BpdgF1RdCSPmqPdkAeuEA9E9n64495ocdstg",
  "key16": "3Pm7TPacqxZo7XZAgCnNBTGq2QUNVPZP1P9Ey8LeHk9JfXFpmWnZp7pbruhNKd7AqtubTz9aZw9yixMLdVESEvr5",
  "key17": "5WbN51LSYknUzNSp8popmqcPLbUsZgMgwx92poMqGcuURo5tYJEg1qNX7QrV7soLrG8osDVxaeetUy6ZmXZ9jBnL",
  "key18": "Rb9s8yx6umvrSmMFWSQp61j9cgHNUtz7Zs6kohXFXo6zb5GtCHAye41e9kUtCTx4tyTqUhHmwv3H56BnHaTGwHp",
  "key19": "5WLhbFCbRkfHMeudV5ypCnsqz6bL7U1cBARn5wygn8PhqTLzpiYhGz6ZFhREH8s6q22KGvtJt2hcHjtM8kuPH5HR",
  "key20": "3FGx9fkBqufF4obp9yTsHdvi5yb6fBkvvZP6BLuKyppaSGoNEu6SGZBrH7Wk9mQb8ED8NnKAjNUBFckd5mZx8Byu",
  "key21": "3gsM21oJrdCDonyq4fpN5Af4XMVqW5qNupaEi8ooEy6apCRAANGkj5jTamhm236Pfv7hd7yYMt16C82EKBGDNbaq",
  "key22": "2hFBYCzkFdnKgTiHBRy8LV4JaWhffZHfCFVQvNAcvmZAZBCth5V7fzDYEGQDoYndE78TVnqpZ9u1d8cnZiNJWVAk",
  "key23": "632BfNQuq82dd1S7iihNwL7XjG6MNQd5hs5bDB3aRVVqBcuJWvpNJC3qVH6ZE9asDBxt1ryKUuR3zPLrq4yiKgWx",
  "key24": "2Hdd3DT1yuBn7XD1TekCFyupNeAmGB9XKtbP64qTvjUZQscBTRc5PhkeYDD7mdErQPGMVsCFJxmde8bpamV8zuwc",
  "key25": "i6Wx4HCuzHvdeJ3vUgD5vvMNfRQMuXEeq7VdRaMn9n8ewhF3MKikEEXdcaKmfv6Nb7RrN4kUPNYw1i8p2JqoPFq",
  "key26": "gJcyKfdMvHae8oBfBW15ZAvGLzPG7d5j7sUrKW7EU1noaQtUPiGW2bGbudboC9s2nFghLTW7e8Km85MPj8R39uB",
  "key27": "37u7GSQrTkLSPaY9itdWVYgZseo5NU2DzERkUKirMGRzYNyC6qnQC4PSMDLaQDy22jpiuqACukLamSfoq8T31e5A",
  "key28": "3w2k9zXj2PjF3xi8sWQZf7RzPbroGv7pi2ywCYXvR77a8gAjzAoyTiZh7Qrf8cLkxVY7y3RN72zAc9aQX7sVaoaM",
  "key29": "5iixtEyuFqviF8rSiajbsFRSGnTNBXGzz8SkUiHDU3L86BxQN4SdRGka3pQAAaFHwyGpwxYje8K6KWedi7F3NWJH",
  "key30": "3jmfWAK76xiKzx3B1zuUmL4R71QjJQyoaUtcoTqcHeeJ4i1hz8UgHLvMTZTm9f8u4mmzT6mvdgvzV8yLJkjWB38J",
  "key31": "5FwwxRmAcBXZd2FCwQudp5rRMzigeVXhCYsD2goREuVkYeq5gFxFbNiihXt8BnBvh1y1kUY8VxxwFPvaXZ4As96X",
  "key32": "LmQZF5a6zqvRKYzxyD73V92rfS1Mmu77fGoWnXT8QyMcKMz76mewag7suZHydXVLsUd2UaAD17cPSqBHUuuwLkD",
  "key33": "3DQAhfivy9ysJuPJsy6xAJjSRsSJHGddQkHuPJx5m9Dq5GJtZPT5HpYdbidpaEDH8HWrinmYQtqrTQUPsD23c1Yi",
  "key34": "ptHv59RBf31dy1nienTLqGL52Z9KkiX4jcjkgvV1myc8C7EV1kMzWY5vGozQy6MJAkrCDnY8mMokjxWjTtDAXNQ",
  "key35": "2vtg1QVVd4KiDwWZiAkit8yXJLxPHhErYExQkkkXBzcQLtM86oohYKN2jFCTJ9HYhBgMXSeFFpFVmNSjMpmXSAFH"
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
