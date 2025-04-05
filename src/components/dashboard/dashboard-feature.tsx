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
    "4Yo4P6NMNWqeCLb5yHathz17x5zXp5RjXCuWr5idF5HxbEYVx96ZvnQNeneRefRX3qUQjAggBPMTEqS248nhtpcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FtSXfDHmE4nY7cTR4Aa6Xuz5xkKa2qDhQ4RXFYraEfyjWvte7UHPHezNBW2pxMCKy8f12TWgBCqAZsqjLcYGNrw",
  "key1": "cJq46Ki6GESKWW8Qs2GpUPehD5hNmUSUaeUw3a1enfLkuVgLGP9aQiZyzaXg5xoSWejaHUg4JC7KTGhd5FWJyUg",
  "key2": "27Y2ZKHxWykixjwv1WgU35Zj5DSS1ffzjabCMj1ypr6yVMRhVge3LacjizZN55CJPmSd1Tw2i5DWd26GLvmAH17x",
  "key3": "dopHbLtMBkmvnzWbS8ECcpbKQ8ymA5VtxAJaop8WcCQ33RFD9Y69ZQsS7fkj1i4EnBQnhfskqxD8mRSjSo48ETY",
  "key4": "2jcPJowsYqU7aSRUL97aaiZdZyNZo5eYwDBvx7Rv7cMEJjoumBLrVQXJfV3zoGx6MXK44hCfGP244472oQbnXDPo",
  "key5": "2iDhfjDeZnR1Zfd26WK8BjELCHUDx8xteBWmXD5aHGygGcxSppVZc3MoCUVhhiDEWEwCLaVny9BTf8A2csW6fFw3",
  "key6": "2KKvghTEKmt1AhJucfg6Y5xftmvshDUpRdENwrE6PNuF8XsW5j2MfPprnXkAauKT5XE3sNeRgNHvQfVMMFd3rmKz",
  "key7": "2hCoBUA3XwonV8XbY926G9iQrBMmyCpY2Jp7KCFQJaR3MAkUj3PqsHCcf7yiWCGXa4dMHZvutTCyyDFKRghfqAk9",
  "key8": "4moeS4yxeFYuRtmMmTdD3jtnTKceGAiyy2em7ttzPjrn5YmTeshp8ZDrXheuvAViap6jyMv9VZDPrbyZazQwy1PP",
  "key9": "t5rN5FF3dj1A9LWmzJmjQh3RDk7NM4QVLosMp7axumrXV3aAgukjx9F9TuM3pTFDXvx6G6MfbsmNFdHciz3BzoZ",
  "key10": "cGEWKNhtPyMSfAH4nyvAdfgsbkA1J4stcJyCnkarixkTymG51KXEbCkzedBgA7PHeuSgZFVpA48XH59AxVQ5hXn",
  "key11": "4FfTYtwaHxdpiid8FecY2PpXvj5gJUEPou6cfCbawqhAS4gfnKMwrU5BDbTqU6ymdnSmMQCnzkaigTnZUNvNG4hF",
  "key12": "2iRQLqCxjFu5xXR9GEmbUfKvvgcBZTd6E64Hnra1owvUx7febnnx92NNd1U68a5TVFUy7DVFqN4oHWrx2NEdiJsZ",
  "key13": "34BcwsE7MgjZxyKwCA9274E627SjM27oEqqohXJgUcdsqjGAs4tNsbpB1V48ZMfQU6EAZmDX1LNtzajF1e17BpQA",
  "key14": "3uQtXEKstY9UJwU8ZVbdp5ds7D9JeKQUmN2UzJod1vJU166Jve2JfQZuVC2UKbyA6f8kXMM6ZFbEfjLWdvzGwtyd",
  "key15": "25BJh5bmHfi4sgP6MMbNhhJWqfC7fRxZmB9uHhLRxV9k8gmL1w2GStSvBZbtmUsetdF21UrDqx6VL9XsLScRBXVv",
  "key16": "2cSvQjgBqDvpEwun8j12ahB8Uzk5uS2KbuknHmjshugTjvTDvbJMW6vGdPxj9n9SH1jApG5ZuYJHLpNCSbEfmYAG",
  "key17": "4MppkZehmKVjdqA5Q4axWq5b4GJ1Q9j3RbTB4HEv3i3Ws895Dirs3q7sfUBoX46ruLFYaAYXZAJNx7KeXG5ZW6Ui",
  "key18": "2nRCipiyy8fDzpFo8TpmxDegDyZnuvaSm71DDqQvAiP6Kum7RUQy8Liv1MiPGm9YqB6ZtwpyE9GcX8zzm1YwK4aR",
  "key19": "3sZKmxiAZ24BhPvqmJ5RY9YuFcFZaMPog1hmnqEYo8CTZPxuLtRGkYW6mEghpq4M1bPbMNu2E2zhqMX32kEQTxYU",
  "key20": "3aDeZbcGDYbPAbY29dWfDLxqG9xr29L1QwiEqgLC62x2qQxyJwbrM43wm9A9QMKgwMpA9wZLeWUGnybT2zkgdcLn",
  "key21": "3PT7y3oHXS9axDbt7Qt78gFfvMSGNQ7RkSu81BgvLKoEs3mSQyGnuJNP5x4ZcSmSmA2gjENaxL9Fv7fMXpGgLb5Y",
  "key22": "5JNZaR8aCMXZSZor7LXUfvUHMSMVKqP3kWC9LKRMM9ayCxbaPQrf9KuVNra5BgiF8hoTapTMemAtneqg4xV7S15a",
  "key23": "2sNyfruCCZ6WHwXkpfSj1srA2Ug5YBECZVQCMDJDE4tSnZCuqKyfyZJDnyeR7uzenKMZiZwwBV5kevrAmH6EyWtM",
  "key24": "4yj1kicDLknyyo2udqcF388sndb881BmXdzWNjxNGntTD5vErAWLXN4HzAu8KcU5XYuKpG2GoBR6uXNDGRUB2esH",
  "key25": "4fCCej1nNCxZzeVsqbXjkRKH5fEdiBwq4C1vWRDfBDiqPhvJgi1YubXh9axqGmYCSuo6sz6faWx8ZZdcRkMiF34f",
  "key26": "4K28wSa16NGP9DabBsx4YDFmuxSr2njHFrFAojRtZJ8SjBg9P1KCUfdLiNBKRe7zcHJZinB4cwWrG2H4qcQ68bom",
  "key27": "5x8ZdHnD3JjsS4UpYS5DhFhtVxTFBptmQAUnHUqVfQpyJ2JuxrgUzJj6KjQ6aLuvNazFqtqvnmvkTfC3PM9Qs73k",
  "key28": "dC4n9mUxEYrWVyph1tTKLeMta3QWGk8fwgvyMQdLqL8zNFifxa63Le2Bg6DE29u2yFdL29nZbBGNf7ZrSu8DJFq",
  "key29": "2NW1XCRyX1EWaSs9wTFJpgGpMjenLmo1Rgr8JG12NbKrygoo3Wtyugwjn5itccX9AAov4Dhp4ms7Cb5LhiWekzrK",
  "key30": "3m9L9vDNNjebHaST9L41aZY2fzBw89uxqHMaWYdFreLY9AcbwcEJFgnNYWXRp2dsXyxNXnCMnM3xo9SDwMRzgQrk",
  "key31": "2S3hX68YHhi8UxJXueS7xz1Ftrb4ba15cUcFZvQAg39NcehC5sHRnJdoci6pUdiBFb1QX5CLzgZF13BT24fHG3Vz",
  "key32": "2qtzCn8VXDK6hVa1fPnZjwrybuPph8ehWT71SaTKamXLZ57A9LA91NnVa7m4TKjkd4wTU9o5qpujDFWmsMRiUBMr",
  "key33": "4g8WxGXe7FTnuXmWhfUBpz7msyQzpNE9uBsWs4fX5wexmGzRU77tHeoPNMJkGg8kTtEmGacBfBP6vmd55LkPoJEb",
  "key34": "2KcGCXqk5yVYS3bXzHD6cTDJEg2SaxrFFfB5Ajqw8G1V2scXAdiYp6LcFe9FZHJZqivukDpbMxa7eBUZHdjr7pYD",
  "key35": "5eHBsyD5HjtKNR2eAVhZK8Fu4GfwJRKPE9vgydZiW2TUPf3442CVTXoP8XERJJRd2v8becWCcQNVTgpwdqD4UE5e",
  "key36": "5TUMHyffrXRdae8Rh4H5G2iCaRTfAgCDa8b9XWVgYj54zoXqiBqSomGUF4JxbvhhreeQn3ctEbeEdY3zDhfPASod",
  "key37": "54PJx6Gp6abv64HvoKeHwW6rX3ibqwJUhGhfyQyJ89xP1AdrQAX6Tetdrwe4QejsYCsD3p2sWB7dsbcwSEQfnk7B",
  "key38": "5LoT9vrZXJfHf4GqjwyM8ybk81i7zAW33BPHRtFDeV7d8g3Rjq42gxyW2zm6ZAqgZJ7oHQ5FxM8fKL1D3sbZmJGq",
  "key39": "51hFfb9LjvKPuvzzh1AqmuLryT755HBds2ydXh66JRUwhq8czs1NPc4rA3xvkSGrDboVQafx5HRLpfygAsEFhBCw",
  "key40": "3HMG9jFqWxfcdjRuGJKkrNyDqLqhz2eWWuJQYvC86re23sZPouEkwTnMFo3RPxaLMDAd9mdnoYqwG5qejXx37LvJ",
  "key41": "2mt7aN5JSh2izajfvGMaT6FF65YRtV8tXthfYL7bB17UTonytboV17jHEavtmEURXbm1Pg4VzbkYsi5vh4e5exMH",
  "key42": "5ztHhXzCLwk2sKRxLYw6D88YgkFun3aBqu8CsJMC5QskLMoiCjFmq7cZqnrRwKkmLywZ5cyMojAqpx7nrAwzdAQE",
  "key43": "tojHssY8abAgwpppmkj9uSRHpwEMm9WHM3awvKJ1KDuY8Jb3LkmefH4rpt4xk43fbo5BhrTx7kZ24gHd88QN5Km",
  "key44": "r7PWpvyB8WpH8EN1Noy5rWoizFWUPqn5ZjUfTq8ivSuL8tQNoCHsGshUreP3i6u8VmyNy1eto42Aaeu4Judz9EW",
  "key45": "4XPAKLLVrs1Rd55HzB9NmVCnaxCCR9CTSWGys5byxhRkK1wQbkEKVT3Ak7JmhngFNAZsEgN494yecfbEyMdcEBPX",
  "key46": "41UPYqypvFuWfe8nVTzVk4nzZm8NEZTzdTwUZ1iBNWz3sqyqrxdoJKUBwPVsy5ddUEGF8FzL33B7puAwEa3meaGq",
  "key47": "57P3HsMvpCQkHDZw5ThMHSFPxYY7WHdsnYGsxueBiQtG8DGE5B2HfyaejUy1WYUcjq12nUppxQ8zq1iQodLNEPe7"
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
