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
    "4ErernLvduWrYMoCZz1Hk87BatL1UvmRhev6ZyGyRrzepuFWQKUqSyNDGfvkNqsGsGF2yddjjdYdfhY7viGQS7gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hzfw4LFi1TFfrDobXyMcJ8gqongcmiKWoajfKgNciEozd87spZo4wPCBHWGVS6nc2Ec1kNqk8HEHkwYU4LyFfHH",
  "key1": "2LzFP5WHmZwRUwQHndKfBizi86VWs1wiqYLWpcnZDto5KS7pLC4KNuHKyXAzBg1jktmN7vusoHiwCG1nynDQb4Yc",
  "key2": "NKsUECVwaxe6qeuj8wA5YR4KKEqhm4DGux2kxVpJ9YAHtU5DtjeYtxprkbCo2xW92YqoE8LEYB5uopCtZ18o438",
  "key3": "3GG8Vhb4VXzjHtHuX3E1EsiMNrDtFSXdo1pfYRwofPcysthAbmydTFPNkHdMZDTkcGe5fnXggH5Ewx8BqC1X35bz",
  "key4": "2szYQqDTVx9z8UZ6jh4kYk8WE9nkqnWg2Ae9htecyWL35BBRw1uAtvakMW2hVsDaQrf4LENgQDnyZ88e3b1r9Xww",
  "key5": "3B2ZJiXpkD3YevWDtPUhCHn8qXbCR2qUHctVpGau1EJ6xKE3cy1fdR4chrEi9mcxCZLD5Rj1yWRjfPzp6jzskPH2",
  "key6": "4sZ8nA2DArNYyJa2af9S5Wmjv42ZZsM8VHxCYL7WffrgRV3NVQrh5rPukzUP3Ldd37vft4A919v1fzoxqXd8cBE2",
  "key7": "2tL2zkxC62LANB1pAxWSRKpqt3mCtH13UZpfaJkLJfvs5nq6YNEgrJ7i4debyUyxmxPWNZH8YN1EtEkkdcvDHLfX",
  "key8": "4Bu4evF8Mzr99jnfjMoJHwwMgqZsJUr7tQQ9eV5GmNqLgg7RXXAip5jBEiJgKhyabT5SZxm9YJVWyKHbMagf3iFg",
  "key9": "47r5wu9YjiSxq9NPqG6yr5AnpqCg7eDCWA9SLxmfnHnNsDSqYArGiczqn1jgdRM7dDdNqwd3LxVuNcWrpWNYw8Sp",
  "key10": "3bFLfQTQQcLWRodg33ox4HVkEYj9tj9NjWoPD1HNRfJHUVFkMTRZnrAqe5Qq3RXJ4owKn6HKVWuA24G6vY1TTcwh",
  "key11": "w7sNyzqY51gvePBPraqNRhPQv4Qneu9erHn6LAMAuiZoxmTAxyzvhdBjfRS9fyfCqQKuKph69gt7KKUevb3iTaa",
  "key12": "4Q27KpqoDajCJFXibvT8kqRcXuEWouwV2XnDyHFhYe74Xtx24FMJGHYatebekZ6sRm415LEv3mUt6NMuZvqQXSQw",
  "key13": "62HUrSFykNL6YgsuSpxqZB9FmvBTr17goGC9fMJV4Fvw1vShPChQeuQrq5L1BWpFPvHjJTn2TPbbJg96mPYEPNVW",
  "key14": "3x3JyexndnbCF2Z8phwdGFrGZqLvJSu86HzDJssne4HqAeQ1m615Xqob9eE1AraRqiHxERD1PNxjH9vaa4PkWMFG",
  "key15": "4zQCREa4MGsSdwCN5AmhMVC7YytHLTkL2v6qXy2HgZdu6qQHBxk2Ebda5xfG6PvZw9i8BfgkFHhwSbcrroSRMBu4",
  "key16": "3W6mcDhgMCYjhJKS597bfE5WgvQnwc3fUP449s7ikfjhw5R26zYNZYYZeq5W1DbRq3wZVJ2KG77qA9jbFttkTk1k",
  "key17": "PiJDFZieJRvzq6Y6Uo4s1whfgA41snHdf5SoDkjhkFjVnuJxJrpGPuXhKAH7LZxhGC3FbT1PuS4t9dLQzvYAnCv",
  "key18": "46tNK4wdAC7qe3Z9vVa3E3cWmFVexVT77gtjXwZabrAhUctUiREQfiB5GMuHYTnLNoXRZNHwtquJnspmVin69c8v",
  "key19": "ET27YXCgKBayvoZQ75aCeizkCfQVdNjZLCfxSdGg8YVWYDXq3Rp9EsYbmdP8rJrSYFVn3SZUDRQSe6AJjCqeqrZ",
  "key20": "2XFBtL72mg152wmsJjEyrtaUT16qv3kqUWbRLnRaZXUXrZ1v6k7DPoZTjGah2NeJ9yRnNG4HcJQ7qA8PjiMt4nqe",
  "key21": "4nHkFKmWB1LFfDeFvaH4938oikAq2yFHJP3ibVugc6inhPBZqy4d5RM1nFzajz9FttpMSvYeUrWaRcjt8Hv23cdo",
  "key22": "5fJsNqemB87vzfk9Ct2Wy3D45hSZmqcjECwtqr9S8LS823fduYDwMHwQAXw2kRkwUCBsevYrQ5g1jbX8bgUzL5pE",
  "key23": "5y9ysKtsuEGqvDuWtixX9KZVDAdFM5RBG4DNz6y9nXbTYMKz3o5Cj7ecxN6zBwNSh2SxxTsvy3FguR2zTPFrmpUA",
  "key24": "33LFXHaq7R4VH7qAoXpezm5Uv7rJ7ZGsy3kNgypygdkpC4PE9CwnbBK1kbWyJtH47unfoE5dEnr254xAcHz65QJq",
  "key25": "Y1sAiB4ML2yHAvRKP191dLRx2a7qm6uk15HaANRApceYRVtFrZvZWZt8D3uDuhCxJt8yk3TrRrFnf1PTYTdT4NN",
  "key26": "4uutMSxwVYgmHFtJMjfe812C5srUP9qQ3ZVrWyommG3pYMkfEnc1rfZuiNdQ5FuogioqMD9UQvUvBE6KjzMmq9fi",
  "key27": "5bDo5yPLEzAfbk4GRm1gimMDjY3yAwRCegpk3oM2Gqvv5VT3mHDk7ta3LPYU33MaFHENzNkenrE148UkYcA4LgV6",
  "key28": "2HAnyxtSZvC88TtdTwgWy2inUc5TMQBieKR8gdJNMgn9PZaGGk2YiDkuFYvtPH2uYV4i9G8ovzSt1XQLsLvFsFfF",
  "key29": "4jNnBxucBdoSBq4uTzudYaniToQUHrMJXeMj7irEAVWpKmqvprXjbnjTat9TYdRWknFeFCyt9R7yZH2pCDfXv729",
  "key30": "41YmNyZs8tot9QWVndnDGjaJiBbFQxqqNigZabmsm6zjDUEQMW4RXmcAQTbv5YmgFBVYPyabH3Q3yFYBKjtBpKJc",
  "key31": "2nSWBUSpdcQx81FzYvsw1iHgag8JBHnT9RF7yPLfg8djSe5EcBiELYWfkbMpZhvkr5c4EhC2B5nbSqqZRXPJrrSW"
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
