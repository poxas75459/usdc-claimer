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
    "3ecc9uCGCeXxF4Sg3F8hFVEnuvfUL2hNfAJ3464LPaT27vWbwRRNpPkMMVt2oqzxes93hmKomJWbjFppWWwYCPBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKPfqi6LhXM7CidbmA9uf11QKzqQ3mTxxqLTaSn7Hkt9otqAq8aMutrEtS9ngDz5wdh6xHs8NgEhQ5W1iET99HE",
  "key1": "3Ai8ius7J8DJdKFD1YPtdfUCSN7o9c7KW7DmRoT9wV3eS2jrMx7ATUoNHr588GKov84Tw4zhEHnLdLyyrd3PysHc",
  "key2": "1ewNP5bD9GnHTsdXPXaZiBXFMZ9TQqHsodGEjr8qp5dLAHxgAkH8Ax7tJdLKg4WJQMQz1HbVCVRcvaK1BD7UWrA",
  "key3": "8NSnakQ8G3fuuf4t9k6oaN8W6FtYhk5awEKipPLwGsfzsmW4SgGmA5j3SamaoNvFrQ8GNGUpVif5B9dsU1MyTg5",
  "key4": "2zkHjs9m8HJTXy1jH3FWPuM8J6MLeHvqz99A9s4hBZU6GQYvpGCgcSYydxwfCj8y19zq4VGJMxmPvxAoWGvrhyx2",
  "key5": "4oJ1HPcRc9KkDeJQLSLgtEu73T5QmxDcLw769BuxhSc5Prwz9CK954EjPMU3XEnLnGiHar8Ajxa4i4GCZUPzsdsC",
  "key6": "5r6Y1xaDznseryzDyMmukVuUNogiQHn5WpaNviUhNVFPuiYsYqUu3v1m9DVCgbd5KV4GkbNKGyEHdPcScHWPkTDX",
  "key7": "3wf6knBiBTGUxxM2C1W66j1JHrsv6ti1eVQy2HwaeX7HhgNurZPPBQcjMimLzzKdokVk2GTz7YH3WTRcRiyiqAxT",
  "key8": "5Cv5wRkRe4oHPFhdBRNGNcyCjRFhfWu9fpGgzDGbvPxoWZ7nFMdEx6HGfFGTYsfQ6KFkTyt2uMmANuEa5kAqqNPn",
  "key9": "33rmwV2Snd8n4uyrp4L8s866gvVShPVbS2GuWjLfomhpFjSCy6Q67BrVtd5TULTShYSUAP1XfgRvG9h8rzw2pMdp",
  "key10": "3qiga2y2V5gBeP7oLXd1nAMZjrtAekSU9Ejz11StTXpewqKWaWXeWivWho4rnSoNWQE8zvcbnKXWewhiuxG37xZ6",
  "key11": "pa28VCUuHfrRND7otiEX8dxv7erZBv1XLLy665vNmRfbWsuzQB6zBuFYzRPnDgrrncw2L8SpzFZJDGN1ScUFBaS",
  "key12": "3LQS1R6nEndgVdteDhcQa9Q91i9eWwcsPL4aKf8Gx9RqvpoAsrqYRZ3GzgxJ7QjVuJAG3X5RBFBgsk85n2dicjXT",
  "key13": "2Bwscfd23cvmGtxFWwPAZzbLac8aNFpYNpQKZ9VF5zGHyue6ErSe1guXYhGYkvanQQkFA3HChJ6HZX13aje5QrW6",
  "key14": "59gdD2XfBkEj8pSQmc48LhV7CXA9qMEwhT2QzcbQxdh7CW5VyQcb63jpwHmEA1KBCpow4obWKVL5H6vLSZ2243nf",
  "key15": "kj5s1S5uNuRPQMoaA8xmjRwxjnvFMnKjR9MUsmFpyjnAWMvMUhLszabcsTAU72crzmoTmzWsGqs2znCaidEGYAs",
  "key16": "3EcLhHpwigTHxv1TqPBizp2VV6cgcVQAHjseF2Q8FPeVMxHWwFmNyTmAk3sJdA6ETDt2JPDQtN9TtC3qZ325XkbE",
  "key17": "ChGXwvtjcMLS2PvoP2uFoS2ZMXUqzrJ8FP766YbLe7Gt4JvQVmtCqH8tYsBYaFdP3P6YrP8ErMBpWxxUkuPMgPL",
  "key18": "ZuaokBnjemPLNhVQpoUZqXK4yZ6SijKQw9jGTEF21nYnY9P8Gb8PgvjAzkSb424Y7wa8GaAZFiRjK8cpojicgQc",
  "key19": "4xm3bSBb57VJw3z5HkafTeg7ifxXStDjkHveowRudLNgMQDqGcPMoc1TDRemsJm8CN8sSTXqbSh9t5zuA9kTH5Vr",
  "key20": "5qUyeVbbgjUNZgkTauxAvwNiR3gvfnpZNQD1WPzh6f8vnHQKN8TjKtzb4Rjuz2gPtqcajMMLTHci4DBKS8VmD1ps",
  "key21": "51y3VXHzJPdopRsdcSgLyUNj1inrmQTakF1ffLdUtRPzbjeNBcWsUc4UcsgeMfp97RqtFzKeX6JsNSUAxqV7ooaX",
  "key22": "5imuaKnjNd93Qh4tfjBqUDz9Sz6xCcaE6Rb1Qgm6hBypSPucc5uUDMTeRowYG2aRy8RVPMPHMCr3KJ73QQc5aeoH",
  "key23": "DmwtER9Ch3PEDU6UyJcAogdKRB8UvoiCviBgziefruhSj6ptaTbGBGhAipBnxgU8YHFgDPyGacLJLp1UV8Zue5Q",
  "key24": "3wPhn7sUsy2RRfjRGyCyjNR4ybub1HUHuWPh5kqQMQUWcZKGGz142fm5xp1qZhYXMcSh5sUxjWAYPeLbSkPMGz6w",
  "key25": "5Gx8DeamTuqD9mbp8x94Atoz4pBuJNTyntxVHC6aVSg1FyikvCzoXsDSA6GdNc6TT3spq9jg1L9NtotgETa4dSuz",
  "key26": "5cMMrVPZqdFbV9xRk5qjg5cCGB87KeHfjwE3kob6YLEZs62ebMnpf8k7a27TPjspHCsbyYBbX3nqgk4eugLmkjbk",
  "key27": "2BYFRhidHvSGnMtziKvLkw8MHhx6nXLvjrWKeQ8sArYiuSJDq8KUBThDXW3uUMoXFej2MY7A4MthCioznMvYA37k",
  "key28": "2HqwuHTZcqLVLY8Emg3o3osBei4AMBtVn9muxyWFD21ikgGVZtbEAXfjMBTdqsxtEeGE1bB7YxXgFfp8rFaK7bPj",
  "key29": "2KMYK3XXSVegVQ8UqCELZ7Q71L6q1h3CCU4t3tF5ZQzhVw4Lqxo8ePvo3foEykVTCjVsXMyDvnbwFBciZvyQdgSA",
  "key30": "4ADthi2HQgwDpsUEu9fgwcoZKsxegEr8FZZy1es5G8PCrAVDBH35My9ETnXzmMCZxMqSmsaww1f8uV3VwQw4Qnno",
  "key31": "3CPAG121HSw9TDGa7W6Fvx9QJfRpyfZSreNfpcqKMzBQW8R4ozx5KezpVjhki6z2pd1TCHna5TAZHMvrh9MhdRhX",
  "key32": "5SewCAhmqa7mttTGyAeZJsCbspBeQTEsU8qMkyQozxRMVRdZjJT8r9d8U1Ty3qXD2KhZ2fT8CUg7jXBAmqULezfq",
  "key33": "3VUh58z3PLUudV7dREWCeme5yBQQya9A6NNMB4M6DfbAkNWUM7HdKN6FwMqwXXTnJmdthRJjjimUj2XNBdZatCXb",
  "key34": "nU2FJH66nPevRgbrcHk9SDe2Wds6tmdsAGaG9pgkR4eQnAGHrNqspFkBnpXB8B1PfPJc5d3xBfWQVctCYxKZcdm",
  "key35": "66rzhfcaWM8ScPNuFNk2tcnGRZJBrxATPFdE72AxDTL4csYj2vXKaaJj8BBXvQ6pAX1q9f6Qj2oWGxtbAx25owjd",
  "key36": "5knQ7WtvaWyNvAnYn4zFUraePSeDr9DaLp3NoMAPW265xJtzYm7RL29GTSnQ315Yf5Qi2Sv1u6ho6DbGoxeYNNWs",
  "key37": "2cU4nuno2EsWms8QX1bzjUwNvPZnSrFS1izMm9JNDrX8vvuZ5MEv8TXFSe9fJYfDuRaZwsTJrvafuoGf9QZcr4xZ",
  "key38": "3HDnrii5hkuY7WjKweTijUSH5dDrNepMdGuRBxGPksrfRa4PuZmFKLN9tZviaV2DqkPBviY7SYyQSHE7zcpbSar5",
  "key39": "wPG1BwyaVt7KhRZYRhvw5UVZqBEzuV7RD8rsTzhR5TcijWqHFwuE8K9dakWWhwaRfNhetUFxyHGgmTQ8sbpG3ZP",
  "key40": "fatjKtxbN2Nu1iZ8CwUT517sjWK9gtnDcDrNbo7QqAMZrDbCG2protxBVxK2SLLGCVBtJpGu95HBWucbfXN81tA",
  "key41": "2xEsULeCqUjgiGyYYKL9dEknkcWorGUTLpTVjeAmCWiSnCxZNUbYyBAA6kHWNdcJtBYPhDWsnyADjVnVyMCtzjmk",
  "key42": "55jV8YhZVUhvxy4XJT8JJqPThDvhe5vDrEUFRMpc1qdNFjqe4vr9KrPgbruKN1CfKky8qBWD56PG4gy7XrYGg3ci",
  "key43": "5ySz1vKyhRcMUgTFUVv6srGiLpvM8K9DRfXaKPjMtnACjRiAgno5My4SySbsVQPo47uhUsCmQaCjCFBGcPLmVGsX",
  "key44": "f7aEgWBxPwYjGorBbPCmfkhhh49H8zawo5ZGS9VGe5ob7Upd7uD8JbCaCeVSWZfzGsSGMowegXG3LGmGFHa5n2R"
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
