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
    "3Td6WR6vk2ivWytAiQKqrSBuHwAdjPvkBmDdzjGR4uzK2xjZeiGGk3Asu8Ejr9bqSEzAkeVkLxfJ9PX7z9GkfXMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pTg1fcxMApt4RpD4X8Wt8CrSL86DU93aaH25Njcsqh67KtDDTCcj9kyqEPA47psqT4WgzdqjrjE1ywXxSCo2u9b",
  "key1": "4TCKGdKc2JwXmFQuWCuyrb29vxNQmj5ptJLgfBfZxY89Qsh8j8eypNbZJA4xX82XDsosaViyZ3ZZRczX8CmFdWy9",
  "key2": "ugs28gCiAHjyNMZQaoZSX2DX9nebGuxfEPJjuMBTjT7mpK5roFCK8LHRX6JXVcBV78GMcM8trbi7FAvbuXjJo9V",
  "key3": "3nPnDMRnxyTCPFpfRHFBh5Htj3SHWhq2AydWHcXdzoztxe3rKmc1i8QeoXSwxsHiVTreCKsdSZrf8gpvmwWjwwp2",
  "key4": "2yRW1GH42nXasFJysVncNoBS5rCVa4HpHXtV15GcpyXEPcmruNqYdrc6eNbjX5KKRBYxpqJgSUQXEfsQbwLda4PU",
  "key5": "4ejvjU5kcLa96HBJhtW3z69tGdNsyrJsJSXuybvfnxxKPrJNcPjRtyFTKnMwsJiCQpx9fiAKA8CqKjbWmuEAQyeq",
  "key6": "5cu9wyho9RcyBtXqr5bW9TrmKyeaTLr9gR4VXEQeD4YhrRaCzrpiAKFhqVaq2SCzALLdKymimf5iDLMGgLLmtwZU",
  "key7": "2DnwPffjYF75Yu3SQ9HVnmmNgtNfVfFTQxiPXbZ3AWfvHa6tPkLwfpgCftHjzpVT2vMUqQVCqcj7Xt49udq2o5ox",
  "key8": "imcY3xxzzF6XNFEC71Y6pzmhNMV84s58ZvZ8x7DP67mNC1LDANMCB4HqSoccjmDUCn84iEsMDMepUmfJ6xfCEPC",
  "key9": "27kTA9viuwWfc7GfXGBA9hE6E5RB4HX1EfC1HippyuiXk5EYzf9W1j6B7Eo8YtVD9bKzqy6TwxgkpZfJNaMgb31m",
  "key10": "368PDC5EuiAFAaPPM7ERZhM5MhUKCcVr5afSBucWKM7meCJkrjffJMz1DHKQ1n3RJrcbUEt9BjrbdiPaJ9iXakLf",
  "key11": "iLJ1FUkcjj2cuEQAEvxenXddfXMSfrfWbB2XwRtfUDAfEMBvL9UWwczvP8mkV9kmsJXDLy6qZqfQgvYAwDd8cov",
  "key12": "4ycPuVzcMwgpepAj5swLqQvaaadGe7tF7rWZL4PM4oiToTxxKDNBFWbftKACGG9mNq3hXYyApfSZCL51cbGhbTa7",
  "key13": "ncn7duorDZkcifpEV2Gu5ZnBpUkepK1bMsQ2k1m4rVTS2h9ur8WN4cUWQjWtQczGCA9EZij6KnoLapQrPx7oXTX",
  "key14": "39z6ETUdoxzaTj1rREoZHDF9jKDuUaEE8KD7naCwsn3eGSenBJA1M73VicvyiA3gL3tYXCadC9YCGqFjDpEsn3eK",
  "key15": "3CgpniTUTLxa1xpDfLdShbTyLqeRQY5TZx2veKJuDw44pgisoQy67GNNk5x6zSGhJfN8W37fupyUDXc3ojZRHgKy",
  "key16": "2YWqeHEzWufV2PWJux1avW8jwGutZRqNUgBvhtH8EmYP7xGnTVXSuZmupeEDjp3UcgV6jVjb1eBxd6te4iMXPyHj",
  "key17": "BaSG1UMnReSjK4HFcVpywQJqAiYjx88ZPaJ5Rj91KzpoB3XgKmNWgYCprE2J86hhopGgS31wXGgbn2QpcEZpRQX",
  "key18": "5xLKshwR1dgw44pa4bEJonvws3ECVi7kxz5TdMTDkyQNQWp6mF4TYXmfJJ9naSKNySFxRykgZjtKXeBc6aaiY1Gt",
  "key19": "64LGsAUjaD1G3wXtVsJBmg3Tb5JLuodpAxUx7WcygrSJyoU5bGnAKrAfoGnNK679nUbXki7C6R1vmzxV22noKhno",
  "key20": "4Xk7XqcnjTGYZdNHhwmHhjHq5Zs8ckUUtvqfvCjomZPYi4fhuDTxkyKJ73Ko3zuvtiYAVtTXEqPZJ4FfmrftCFwW",
  "key21": "5izouec1Mb64X2Vw28Lz9m9gKW81kuFtspavTz9UhrDTdJ9MTpTsj3iJ9gepQUMp4pWWbRPQ6uD3FiNMPQYgyU3k",
  "key22": "vkkUxwnTxjpLzKpHKHjQZpcoBNJvf1J9Ee6G74SZxYT679SnigC2xqdsrpLhc2tiSUnRupsZbNWkxXNR3HgK5iS",
  "key23": "317JabDSqQFGJnqNFfg22EDk3bboDUggEwsV3uUQFFRRKEaVonammX1wZ5usddPqbqtn94wpEtgfBN6Pfdr48RpL",
  "key24": "4suBATvSkTqowqKSrcBC9YEETQPnFKu6LiLHL9T7WJeqcB4EQEFLfpc9u9sMZNemjeJh1NVhh2N5uwY9aQyLZHff",
  "key25": "2UJSu9cLKVkLS8PprYzwWWrpEW4iCtxHx6rsdj4Vw9SZy8r4nDViQzEKqeSEHbe6YXmzXAm718wvRX6JdAKkyu3r",
  "key26": "3r9iqf4G8WaD4j1f35j3y3m7qWmcymZX2m6jaBRjUayj781q736rWSp3ZeyW7i37mYDuCzKLeGU1BvEv6cufk2NW"
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
