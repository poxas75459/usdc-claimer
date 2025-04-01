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
    "2s8VscP4btmR2EGb4MvzCaoYjACzMRDTXsXwhYkkq28KcKqFNDMJnRNfxunsTVysArcPs8CKnp9T9oGXyks7NRoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b5YU7Lpnm9icYr22P9M4hT6iCz1sQo14Te7tdBFzy4iEoxcZWyAK4NquaMzW9aqPpfH8abLx3jhEkGE24tQ2QeM",
  "key1": "3cCCvesXbf8ifkKpdrYuDH2SUrqiRhLqt6dU1MgSY1G8bdXik4J7ycPTH1XrHqothBd3PeRkhJHbKj8EgFWRzg61",
  "key2": "22uK559tdq5uLHmwukTq7c4mprd6iYSHYACRj5ovh8kviWEmNk3D3JfTxZD6wJgtoZ2QQkaL444mQcXrbcnJRjVS",
  "key3": "2m8xCQ6mc1i4cyw3QGSDvmquebyHFS14fJCYbGgkPkDB6DsQrPheAqdyRtZiiUCYofMzHBHcfr5kodzWyTUT8kC3",
  "key4": "2zfcDLtezaGq3kZhxLwmbcsBx7NsaFM1tsKMo7Cb7VpzbVwVaxrqWZmQ7HtRRCKBzG1WaAjHSfukZdTgipqT2qi9",
  "key5": "53Ky8w9evvDK1dqdDvnD3pHB1M3DQ6dMP8AmR6MMz12m9NYgcEstyPVhDTXjRV6vV5dYGUcuTvAAiLYuijVQeF7f",
  "key6": "4bVFCtSb2PGyc6VT1JH9T2LNchwZDg6Cfqjf9woBfxdX97aqa4h9nZ6dZr5TRtEfGebPqS63VbuVTPNPLyfa5qTY",
  "key7": "4ES74zgDUzduv7v6cFPaypABJr7yuooYFbZjEGaD8VUT2yZf24TEenM1Az4KqKQ7JSBWkcoZEBd4A5uLsyRNnGi4",
  "key8": "Gtep1BGi66UY462Bh9AVaqa6tVzSz1AwD2Ce9GRQmHe553V9qbfrnfoRuoDdQKfMG3VRY8gwxxBc7NYochuiovP",
  "key9": "3E5jWsTVTSpuHuPSAc59p1EfNX2qpuR5WLN8z374RkktQuiCkgRhLRR3ELwvwjYvWe5xMmYZffTf6B7aghsnVKfA",
  "key10": "4yKPihMpUT4Tv7mT5izMbhVvs3saa7hsZ3FH86wztzGrHFAqBFED5WpmmAhkCDjHZHjWhaJGKyDVXRWV8ZUAcDrs",
  "key11": "2m3CWN4uLjkLCjXGaiX1yCDoLMyAG6QK95yuqBmZC2bfQvGBooQdcoQj9uWLz6ubvjLxbTJj8rrQMnG9FvyMQMrP",
  "key12": "fzj3LQi6gS7EZToTj9xUpUccRXEhUJpynSMMAfyLcMYxiBuYKnhH6GvACj3AxEPizw5L61Vr3nvErLRviHg7Gc5",
  "key13": "23XzCqeNV7bL4njNRHkCk2Rt5ftm42WdUegStdj2Jg9R9SmDA3K6kL83Bn2ERy7b4ouXd6Ew62hLmPPU94bd48GA",
  "key14": "AE7gbDJk6YSkK2agNiCCpZvZ3PpPsPS8WbVeNkxBrniQjaKFw1QHJPbr5iTk5w4cLTH5ei5RUoh1fWYoS6EgBo1",
  "key15": "3Rp1kXsVUCSsetCPvPDhaRh3tdZ1q87Uh33k9VDYxL6W1igWhSJLLPBPYzYnD7pSMY7TMNfJ1HRaujr3BzK4rksE",
  "key16": "4QQUsdLG7SFEnk96WpEJLuQnYhsRRzKuxqV4tLR5uzs4vNYqY8qAncSxacLMZ1SnwLwQ2jR3hzRGFwai2uJ6ktaA",
  "key17": "2T42ZEnqUSvLAqxnQsnXwNhvDCjGnbWKyn9MNRtfgWWsv9FUp1X4QerJff2Vektf775k2jF3B3CmUCUZBepqRC6K",
  "key18": "4cPv2RBJK2yKty1PwJf3NWc3dV5KRxAXsp1Fuz4BUAChDCmdmZVpPvyYbwhNp1k9Gbb7qxo8YZ2XFNJywLmp6K9B",
  "key19": "38ha9UDTQks42aaRqYeQdaKH5wDmHg6RsBgYDA6k6gdWXn8eyxKeraz6FVhAo1DUwPgcPLabgbodvrw3AEjhJs55",
  "key20": "gP4qmTZj9jo6HaTo4M8ZZdPG6fe4SUZpHeu3Yqo38zAy5Yb4idz2Nu5m8wgD5NGRSncLwX8EgKHTG5DTLjzwbuA",
  "key21": "2tzFFoT8xNqvmsAnTtd7VixiQzZsmvJM2AthnuJNYDwe2VhecTurxpqFH2bLjJb9hiGjeK55KNXihd2bxv7f8SvK",
  "key22": "4nW6tFhxdwzn9CgMYgz3sX9HNUw4dyiaEb6GdVX86aUobVV7Mv443aUfJk6jmbd64HeASuQdRi4yPX1DKFNmnFZN",
  "key23": "X3UfXWi6XwLY1Mhh8oX1hofUgPL6DijMsKBUDnzjNuGXNy7EonmwDSbU64S7KDVbBByYqePpeGWLHz6pHUD86DT",
  "key24": "2Jq6an7qyuJ91n5vupAqGjm9cRKqGAgV7jZCaQrKTLemYXxRLWQv37Cwmcwz3CASSqRGa5QLSQh7yiKYkUKLRmqg",
  "key25": "4VvdTXZtXHpsReFnqJ6QTUv3mdE91jdeK7T8V6wSiRySeXPVrseX7giHtoPA6EcvEVcxPS5tC8ujN9EnsJHudSz6",
  "key26": "3ugffptPdvNCGRkfCGf72UyHUtYKAdBd3qZS1dm51ahgfcAhtR5BJE3AAByi9A3pyLaRUfqaSAX3JK8uDxhpv1kx",
  "key27": "5r7zH3427JYZGvWPf2S6m2n6Adm14Qazkpy1xskFkef3xh1LrmBWDBwR5pbFou4saqNmmfTX7JeiCqKQTyrk81PM",
  "key28": "359bDYtXXdpFyCJMZ4q537ohpuwK8WQkx6N62KjaabGFNvqN84934YxNXxhpkxxzG8t7v5igDTW7HvB7tLxGyshr",
  "key29": "2R5EEXUoqJME65jBBCYrWJq8Hm1tvgxA1XqokSHr5yZu5u85VqQ9A8k3veTevjRKtUS9f966WgnWSzRePEbup2a7",
  "key30": "3acPdHuVAsT4QwwSvTCChNzFjoyW2FFXbHYWHU9vNSfeVVgbrPjpCjY3JffzLZTzvwYXSvFZkytsQQrqKQ3B9xmx",
  "key31": "4TgnVDwxhGQaiVHNW7eAFDbLWoV4Wffyd69DSi9PkwJMYeWGVAWRAcg1nwxr1YvBmWzsZYEP3KKMo62PQ2DTRFEL",
  "key32": "2AZUKoxM8v5EBXXUzkR7L7K7pb3p36qJVqNkW8nWKsdKQMksUfoT6ZuisBpSD36qVdU9umWWwm1JeeQZeaYGhkZC",
  "key33": "2GMCbEHYTM9RG5wG264Ey3oXV63a36UzmVy4TWVqQ7Pz82ZCAZxSbg2PwKRwvWWXs3oq7b7YyEjjPdx9ebWSCA5Q",
  "key34": "43VgeZ1YBCtKZ9sgLrLHBHZS8ZSmanAdkVvkN9EXY8nzB2qEZk7oiiRXyhgBaA9tWao9gfuXyCRbyjWAvn7SGx5D",
  "key35": "3Y1VutPvU5Qda4E1smCzau9EhNBaZwSh1mRnSGyGnjovoV3ZKWA3LpTt1XDXHdFN5yfaUDuod1eJTSMT9Km57Y7T"
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
