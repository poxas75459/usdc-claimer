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
    "5jMRLT1MJJG32ugbYWpZHNZHwVbKsk6TC3gRXmm6BnJ1ZsCcGw3xqBYdzvgTJmXHaSPDRSwPRhfDuABHRmyqDefR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1BPC3T3w9DVxRJyaDTRBCK9EpSop3DEaaf2QZxYVcUHVuEqfbjJPLjU9iXRGuAKURjtS9czupJP4k53NL2Dz52",
  "key1": "52TYHK8W1ouGa9VuqfUxfxLGkhRwffQbGvHhnRQVUaUnno4Dd4fhdAoCUWFBt7HM51VnTy7aZj6eWmT1nVEhWqw",
  "key2": "TzonL9fXK68LdD5uyGvdhqUC9TcM7QvmHY16TmF5y2a8wE6JMvc5SrF7oJ4KCE76PU3GoJsWoShBkBox6cZbSj3",
  "key3": "2cgAiPGRuzXJYqijxpMkPSZrf496N1CVUrDSaCk1v5TZjPq6S9NmsakopGusUysavcwcfLKx1pB23GmzecHoSg4e",
  "key4": "5HpJKtWr6YdFoG5M5fUASFX3pFoSJTifa5svNai8GHzJWRAK4zzLp8JaSnShF776Vstj13mTLNhaVJdpE6LpNmbS",
  "key5": "2djADjdHCF1gsv74KNA1Rirvv57ofNbz25QbqtA1JAG49jpHrCskyn9jwQK6irmgwuE7EkURyH3z3WjPpqTCbrYA",
  "key6": "5JYBmEnMo6S1g2coTrCjc8nh1JyBM3ipezboX2UmDtqp9Wj3L8LGq6NmxPoZHKvW5VQC9firKi4k2j3fh5w9wDxs",
  "key7": "EEhkscsDn97gafDX8sRQPDJZo781Hs6c7h5qkMFUB21UPSZwh5iR9s1V9nRK7KX6ABwjWPoNLLisie2MJ5sjtJC",
  "key8": "XE4gXuPGg4F7mDkJRWVMtVnxJrHeR5S66kMBgcuXZrx7iZZG9GWhNRypns829ddvk9bbM3R544UR5sr3uQrfBQT",
  "key9": "4zTqc2Hs8x3HyM5SxfRGZCNahTGU3219TGMVA2Est2VYxHecWTfhwuRWoyBhjAB2bgxKkZ38LzsAn3HBukveCLGZ",
  "key10": "3uBVFNG3RiKsgGq1V4GqenUVPTaXFBhNY1Zd8WYcL91HWnZrNEbHHQTSnc2uYGQ8v1yrXNmfcaNEWijoYiwapEhP",
  "key11": "4m2x7hBT7Uor1ZC4bbB1Ezdi5fFMZAm3YFnvTnb4AUM7SGv9xJG3kfkNYqFqwM67wJVyrdQEybiScXP3fJJjCaRd",
  "key12": "4dXLboQHzUcFC5ktH3TCqEvLsUFrpHBoXaHV3kBzM8rVWys5hUtSW8pMoUB4cSexdZ7SDg6PUmr6NhvicsN3hwU4",
  "key13": "2FFmwRXCyg8hcy8mGEFc692uPhozd9aZTCHEbUUpBa9au7Pp54PmDUHJaghYoxV4x3BDuFhEQoA8k6HnCZUAw1ai",
  "key14": "3xaM8F4oAzaRpzzN3eoyJzMFzLgty1siSwPuvwPh9eoFaZiJZ7ZfU71pP9m9FEWTT8axxaA12TcsW3feK65dzzU6",
  "key15": "55sKouekGNKWzJ4DDw4jmP6C5LFznU65oADh5dPLAM3vTeZVsfokwPao9DZdVwUYiKD3GnfkNE7yDG8D7M1NM5Sd",
  "key16": "ucNdTbvFat9MUSy8Rn1xHXcmJgiiRa5hWYXfNgi2pqkZz4PpogTW9Q9bqV8XAfuSqq7up4vg5Swjnqy2aCR1Ewd",
  "key17": "57roKG7RvpoBR9JvJw7afQeyTjiRXdpGrTZK6bgPVNwfgbHF5Uy998NE3wWk7pMNQbUuZi1jwdoF9ywaXiSdGJdC",
  "key18": "2VLbZNEZRtu2AWEKwyrTWhU4ansVGP4xJECA6syBgGhLcAgqXrGcjSzFUQiVv5FSaXetpH7nYgwo8QBddXJATKr2",
  "key19": "fkwuq82biXDm2pUGx3yRghbJLZWXnxqtwpn8WY5n9j3x7NEjjtpZuEoCd4Q7DVdrs8QJL9TmHuq5hLtoumk5qG7",
  "key20": "4dFAKERSi9pyxmrCpKrUr6NqXpNw4boxNcxovhvwvrKoTKL5hruNEjCaDuHBNdeh7MrtB8iiiZ4Z1AmeShUZuZ7q",
  "key21": "45aeR3U6PyEAy3zNkyGMXVPvJ3fWtaEUB75ZxyLmiyzHq2fi3AxnAJ5BmQBpu1d2Hmm2dHtMzUNvY9e4M8sBScs8",
  "key22": "5xmkUJNT5YL6iv6sUSt9tgxohc2bsbqMxqV3eoNDWpsg8iL5b3it3Tbd8ZLnrGiJ4zCdivGEXsge6yMikhwG12VL",
  "key23": "3RffprEYND52zDAhPUwnpz3BV6hKYugpAFMh6ZDL81T58LiziMKvvrrGfeegWwvEb1hYQk4b6i1ZQaPJh3Vbrvrv",
  "key24": "2ynZPqdrKUV6zLmp8KqpwNYxFyYmxwowuJZNqnpJbgXQx6d9CXnuUhQR7dUFUvzqZobFcLhRwV7pBmbgCwY1AXEm",
  "key25": "319EKzXBKrdSdEkgqupBNXFEPMUjNjSYR7MEEwZbdWogt8q6vG2NkDf9u2EMmGr32Vdgz5hqqzdT83vw2RG4S16q",
  "key26": "4G7h6TA73rLG4pWeC6DUcmfMr3DJ38QVY3szE5iyAftMpxYAMwCEFNYdPms8Jw2f1GC5yYpWhE6s6NLfbQTBuCai",
  "key27": "DywCR2hK79fkrutWub41Sj5Aj8VaBWHfu9EaUwu1MEkNarGK9Yy3pTzJVGLKqu8wWuQrXLGu6wZg2dVv16HPiiS",
  "key28": "4yqxFqSkAxGE7n69JGNG8CLwaergynqJsxKrzE4WEQw5VvfkfAgAPH8s5V7trcK83m8JATYroBLJGsC4jZyvJS8V",
  "key29": "nmtNo7Sg6v4V3itmFRMxWCexhMcN7z895KLbjNZzdq7gPyuqoB33po68rKrmdcs1CbjSYHnVPz54vaXNuy3wB2W",
  "key30": "6dYRdNSh7vhLCm6VmQDbPNDkKZ5kPszPYVg2QiGDfNeicz9GstuixZXhyh3y8Uyh6NF9vcNscNC7iugeV2RNSin",
  "key31": "4qmaENghkZP18TxUcagapsoxTKtyNzJBku96UviM49ERtzGoH5dfVnLUcE4CoZffaB6jb5UCSNYg77G7gLmo3C4b"
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
