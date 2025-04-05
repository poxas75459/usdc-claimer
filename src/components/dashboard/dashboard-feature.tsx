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
    "3X2FSFzPFg1kwb1ByCWp98iSa784CrmPjmYQqhRB4W7vMdfbFQ2RVZ2DHMM4TGQP5PFP8fMqKEAS7SDruXAQX9MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62croNmnudR3Y2Mp4m99NfZNJcg4NH168UTpKGyajsMX6Fp9YMuhzg75TDVS2Jr9p8xJxUPyxkAzxNce8sFPYwza",
  "key1": "29fTd5RkEVDT3bLXSyu3Sjb6zgH9Arp3QigTWBPvtgEgmXeYwBi3X6sowv3tVj1qtzQqQ4JJyDu4Ze7DKhmz4nGB",
  "key2": "xwpZMf8HhpbH9t1Gw1fayLaKLXk9wjGJ3TV2fogygChWDfSCG5GJeCpUGBmD9eE7YPyfkpKUj84RXG7W7RPR5QX",
  "key3": "2RJtCUAo9BmdFjzZduVhhUnU34NoFLA2iuPfKTc4fmyLMzHnMWmWMqmpZdtQEckx5th6yvCrm2xxhudZ6q6xfomK",
  "key4": "4fhuZFWc1uYDkFjVhARVZHMfb4mod6DBcxb5CtZbTyAaW29LTCDPyYRxrnx7J99Fzq5KhGcpDUKYCPJWzdhnAEVm",
  "key5": "3tJnNfqLty6zrp6zPCTSARsocvEcmfSYviCXUnVbeiUnRbdBLvPmnfKZxKYYenULKW1FuPRPj22ZpRJbARbNrxM6",
  "key6": "2ZVKUh472cZkJhbZShYQ3vPjtxM4HQxh6DjPwTTUnXjSkAgYkvsqcFb6MXS7Cr4RAZqa7CCQW65A83SzTQDjHpoj",
  "key7": "39rgArWgqKRqv8rehangefwuhmG3XbdmbojsxfcjHoktezhkcsN2jz4LRWKUCuF9fdufrjbhQB8geQqu46e2GYJh",
  "key8": "4bKYufkeDay1i2mARSrQaTFNJaMs6Jxh8iY5sJ7rqJtquNPxRW43S9U9DAvab182fYXHsQr5ZKEdCZUdjQwXkgRf",
  "key9": "5ZSL9mZPWL1KMbKpJgK4Ua3bJy9WS4iMn4EW1sxuZhtHneDbxyKEZVk1RCLLTk3C9Cu6QK79whvZr64CzMFxc6vC",
  "key10": "2h2jDarnwjNwKVYbHvHFFvVqY28ndptrGdy1YHLKd3tE1PNamBGTQyk8DVbxCYnzPVMtMN3h4fVSjVv477DvxFe3",
  "key11": "3yci9bNPDvcAdwE4rs3ap9YC3RDKXdvboMPKPqQPsGV3gsqNZS4Kxk67H54iX59fLFbWyG7WMgiaYvWD9267eMdd",
  "key12": "7tHeG2Po9kwL2oUjM8cU7haZHWWAZfPbJsSmuGwnwQrrxKZgPGxP66CYTBiSZXRd7s8NorJ8aFhDgiBZSSWAKTc",
  "key13": "37uRiKWRgYGdCar7m6feJw8bSK5MdzKB8mGQaxLr9k9NNkP3UxEjvBaMVQu3fw5dhLickANJ84XxDAdA4oTS93EQ",
  "key14": "5CyzN86gWJSZVYvGwqNoM7FkjErdGZbZUQa5HTDxuPK7tU81PDiwiuoSK3JnqHsDmsGUQzhPPnTA1MK4TjLpieDf",
  "key15": "4ZpqWT25z3pH7Wpw3J9P5axxjxQ7fsYguRcmxPddTXTX6yGF4mg29tcp1HkMVawD1ZLBghXpvn84M73mhD9hKSXf",
  "key16": "VRpaSa3EBov9CnXXTcpV5MSakhrUD4McxZTDYeqbSfm4HjyfJAiSbFqKCYBoLtRe28ezj3WczuKWitKddnVFXcv",
  "key17": "3VFnCUByf1vaXcwseXXBSFe7wuyLns1Hq5Pn3CxkECoHxhfUuphkj1ZR4QDwoH4hX9z7hB5dWnSaAnsmkh6aMFKy",
  "key18": "4uSsSqoxyWV3jnCVYaLhK7AhC6AThRQ7Ba7cKJbu72QthniPFTjVLhH8WdjyuA16rQNx8AXWLEmPfozTukr9zJrf",
  "key19": "2sVMJ2nK3JwM5qbyT6M8DsxAU2TbXnNJp1C4Y32SzoHJieKxDEgs4Zzdh5xB5PLWZk413NpixqsD3n5ooQCe8dTX",
  "key20": "bGMz7Jtvm59hbEVjMsuYhJw1nN8VDoAg3Zci4bziskDXeXT5Vd3wQXE86Gnq8az1tSZrWybLhqpi4mqzZYGZ43U",
  "key21": "UdeecW35uCVY1pPihDcpEuZsgx7NmJbvCgyagatQ2YNvbvoyJi5tmGLeZ7YqjoAs5MzALrd5jsiBWuBUHn33932",
  "key22": "4itLRMrTtZLUsagteNxLcQEnHBeke5ms5EQ3R4RS1pTkzNB5aaa91DnrfsWD7SPeqtnCQDvqDMHiKF7XExx4VFLM",
  "key23": "2to1Q3z5eSKRtNC9xey8wJZ2UKFvVjtG31yeErkxqy3U7RpMHnajivdg7p1pRveetf2JP3bdRp4MkTvkyWD7GNVB",
  "key24": "55nXZKmtrty9zBnYuRR9UopJmmWxRx3Ln7dzuugvQN3RS6DZxp83qSEE8woGrtmpEojD3t7fYZE7ZFr5d5bqspSC",
  "key25": "2yWcQ13Sz8WC6Bbtqayk8iuCgbmgrNjwzkdUWT9stvhKhgf3ZqWSfxjeG7tF8ZYJdkBU5p46i2Q1bYDYK8B9xq4V"
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
