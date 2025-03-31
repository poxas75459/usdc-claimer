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
    "5FW1Z4WpkE7Fx6RvkMG6FxkwqyHixcy8o3atwA6nnbQDegBw3a2QoH6KxLu6HUKdd6ApCjvRZBbq7CLxAW7WpC8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dCMMvc9GthS3iTT7bSmp88JZ79UWBdLbvVQT8otLzW9gZfYjDaqkqgjH9xNm8QyHzkkUnzHwBdpDcp9n3Na7vZx",
  "key1": "4imHeaAUZYYJQ7YcGwZbitYWhJHfkHyfBw2bb2oiCCKLyJoo7rfropBPZzbyd4gkQnakw64yWMBBKytnBL4hwH1W",
  "key2": "2fuZMcwQoApV7XvuieYZYaECgsFZy5nquVKzvo3cTYABLG8YU8xJqKQDjJFwW4PWTJrS2vY6sgQWEMRNKfT9cQAB",
  "key3": "pnxwLx9o9BEEwePMrp2KxjHihP6zhmSTP7DZXhbecNDbhvDaLGLM8SdupJUy2bx744ihgqvLaC28peAiELQ99KQ",
  "key4": "YQg2ZyjoKvweP55iGncTbA4VMptGu6mmzGNGe4Qx5ZeyDS8q1WEPTFEDC7UDDctZTTQTeBjqERP6ZZZfDgh39UR",
  "key5": "5s2PvzCC3eHVULWAPL1Hwpq54JzoaKvbUgi8nM9HLqQ7FBaRp7KmpsgaD4bHRiwXqLoPaFG3wUou4E4z3Eqyv9V5",
  "key6": "4Mywjw6HizSEnB2XRFZQzmfZf33GMHH9NEfo5HeNLb8WCw3a8ZJzGJArdve7ievUT86BoFswLeC6Kgjnnry3V6iL",
  "key7": "DoeV8VByjQQvzvJVLKqFgM1ZU1ssXHsUASmzXm9z1Hv6usQFUoXy9wkGgnzCr3oJJy7UzhasT4t9bEXZ3Yp4fyq",
  "key8": "4xYeTraJEefg1EUFyaciRTXmCiKywSYx3fj9cRh3c6gRs4ZBWzj6QWqL5tBjmzRr7r5Aiberv1hGdV14Na9KUTxU",
  "key9": "2fiyiyqi8depZX9ewdk5fKuuRdbqxNR1MmGqgn7KPvHVmoAyYCZQPyMPQcwd7RQwzmAiTad5BbALKNxEC7WJs19L",
  "key10": "5yhU24QLemst7Vm8YP58KtWbwpQnpfxQjbcPxShwZGDheWjS39sdSC9KVnxoaDqih9joyGwCBtZbaz1bmqX5evKe",
  "key11": "5W31h67gZLBC8Mm4weuSPsfdyhcX4TVK3FqveAgVwVY3dnA4iS4Y9KfNQ1Ugy4pz7qmJMHSgfiyTp16ESqugvXyM",
  "key12": "4rDru7UgVz1ZFkhzu3PsgZfVPZhTMEGMu7CPARQwNYCzdRvCpSZAgUqKVL1uLjf9jMoDboBfcAf2CWHuEgWWoCjp",
  "key13": "3nYjFy7MJC4hzwfMWZkXFweLNeFdyYnrx2epEep7oe2oYP7pyk6Q5CQkHqRj2q7sQSKDZvVif8T6NyhUBL1zeS3q",
  "key14": "s6KbZGmpMNFxf9RtG1TRCZLTtncBFtsC3mQdySEEUvi3M88VU34VNFBWZr4qGhWDnGUYVf7DXiDcu11TiUfgzQZ",
  "key15": "38RyBt4o4Sq3kmfEVqEazc1j4PtxZPA8zr1nv52c3pmXMYcWycVFzPEo4KssaKwP98R3Z4ckkfY9XQ2K3UYtLEzn",
  "key16": "51CEURjCMLJL6fr1sqZf9EjwAbgLYtKtdkDZe1W8FFk9P8ZscTKu4AEkMHXajvVrYN7ru9zjzXMAsE2TJoLT6MzW",
  "key17": "4WXPqnt7XsMVUDVeeqzS51FnEe6SxibSPHBQN1tChdWpA29Jgv7X3WRfcivrg8pG2Xs8LdyKconQ2sZnYpPVxux5",
  "key18": "3ZU7E1AZpDCAEthsrFxqrra9xrbTNRCwwdeLopnNRbfiSwLDz2mLT72bM4Y6y6XsDXJnVmSypKUemFKYbauwxnHh",
  "key19": "4Rofkrng8nD5gc9DLA8fhmsoJRQXpqQy6e6XpBT3cP2rbvDzsChre2d8f7wuykzrcftRzsNNUDit1ribKNeCt5Wu",
  "key20": "sd86JFZTVuy5zhBNnfJm1o8FK2Md8xKaSpvzoSVNAdkEzbYeLhzCP3mXxts2ubHy4f4eqRuZsAHi6VXGQp6gNFE",
  "key21": "3zdetmKeeYusMLyVeHFwYn2Mn7x3aj1ggpib559iv3fhewPLzYeBBmb4rVvEL7SC45EfcKbrs8L1eXR55isTzxUP",
  "key22": "43Xvhd7qRTbuKMVrVqPSTN4pocxbEpL4RXteBmip7Jnbk58vGXqdkxa1Ye3pLAkTDXXWPC9CPAi72ic3kB5xtJDe",
  "key23": "3H6gAwBbi6GzJ1aUwG1kwu27EwJSZ7MoXVH6ZfDhcyv5yjTvYWYKcrQfqm2rybfic2YWDEHtZSaA4UXtH7zJnG3G",
  "key24": "HAoD9humoBpdy58P629NbPzP63XTMG9KfKXFezAvyA1hGB9uUaJ9bcWXHaqhDWrFYpcbjqkLzytnZ4jgwVVu7fA",
  "key25": "2Y5D7eYDRTjsx7TmZ779XcTSUUTTuuV1EpW8teB9CTXhUhNQJTPfGFRqS1AZNSA8ZaDhL7YpMNCXjWVJHkZZMacK",
  "key26": "2re8BbnQ26WRuVVmEAx1hhZLhisj4wYMsSmmCeHjWDpF9NNhNhow4ZKxUy8g7TdUARJofmSSSDYeqqhAX4LnTJkX",
  "key27": "39P3BGzBhjQ7ZyYbTv8eUqa3fwgGeGCBfoEp4qWCwC49WskrQMhSRy8ZCHDXzAe5t65mmGnD1o7H1pX6f8yVPEbj",
  "key28": "AabCcJfR2uHT3XFEYDSdzLjzAH2X8jyxkKiKpxDGtQCD66QmUJyLa4CdfZw5ZnTjuhfLKyA8yfaZTCttqyw2ToV",
  "key29": "4N7WBJHuAG9rTizYbJibstzaPD22A8dAXebUNRJYaeDKcX5g22W3kJa2b9KBZwBoBPh2tCSr8YhNeLPizuiHbFKq",
  "key30": "5XH3htApDy8CQgyK6paDUUub6L3qoVXawmzVdAJX6ruKchuKFYiy8HNtLCryDEvFYoNJnFsZhocsfTTCW6PSC9oi",
  "key31": "2kj8a39ALtUW4SnpJF475C9mEg8cEmzPDgasAwuwZGfd3K1GCb9d64J6QLAbGpSxhFJr9xD6GqbwzY5Zj5ZFrTFC",
  "key32": "4hMyce6xkdn5wkHdoBbAqxuHP6HQySPLMjrPG6Fa4d7mQjfM4JhJW3GSfg63HVPpL9evEz5QycdfggNeXJqK2KND",
  "key33": "Tedf7Uf4ZMmKXS7SmLruTU3845K96BGGCztWmukS7KNPhU6D3u1u4sPwAXtvGJYZjq5dygNZPAUFbU3H8eZWiAR"
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
