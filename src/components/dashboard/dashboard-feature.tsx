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
    "59yKCB1tJj4yzmvV5GGp9vkJZNzNa3dgUEE9cm8sbnZNrgsxzmmSjzM46NYrXCJPSUXs9QMLaNzMydqbAQefCLq6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZxsADoMbY14FKRKQBsTyxec3gBtM7MP1JhvRweRgzABrhyUwgYoBq86CEjUvAw7DckHEYYJ3muBvT21ycJqzHkq",
  "key1": "4ep5dXR1C6K5ju1KR9HvBHm1hcDds8jiw2MDdhuxjBRaeUck4dgHfW3XAv6df8xMc2HzcRTgEZAKAEdkGJ5Jfd1Z",
  "key2": "67UV4X6gq8xs15oV4rAh6UFQ7BdfJsZWQisNvbqq4Aq7uvT6NZEqZGmpyB1LXz2qoY75nF7BvFjwtDQXEhFSUpct",
  "key3": "3PNs1k8FTP3vSxAhe2gC1zBzs7FJaNj96HTFDNDAs1tyRLyn3gzi4YqE6xBo2d2Fq2ANZdgSBVwN3GQyhLLvUjWS",
  "key4": "5LSHBoB7RaYRTHFJ4bx7Z3JfwpDCB5ZfW9sGy3WSbChSwmj4sBPQYVu1BZjeTaka7HGfHiMhgnhbGLt79dYPfpv5",
  "key5": "4VQHcQ6k4Bn5N8j38Yk8bDEF13SXk4eeyuV53b3brGE6yag1DwTpubgm9Bekge3kSekYwem28iDcJ1cJUSMtxZ6N",
  "key6": "3q3iGu13keDEbuQQHrt4PLyiccEcJtCBemo71Gvrzzkn25YdfX1X6JjGNfmnKE9KyHenWoupWXCrchU2SP7mrQPK",
  "key7": "4icDdVGYs1pWg1NMoKY3RBdqV35DzZbi8vpWrdA4iuPd4kJs7t7ed3QL8sVwysLcwJHMfkBCMP1mwSGPtTY21S7m",
  "key8": "3oNdAC8EKBa1bxq9HsNSg8xTr4M4rq7WNLoKgX1ipoQoXWTBk6SPrE4H2UZa98JZZU7pozEC2Ekcc8JvaSXNPyjL",
  "key9": "5hEerqGf4QZihNf11jMsdzPtvLDmsWTZ2DNFpi9V4FsDcQx8kwBAoqzijym4wZuJWw82cGiStpdpSTuqbjrvstVm",
  "key10": "5EFhRwJMvstaUcYKwhCYxAvbYMS94Ab911Pt5CY9uKme1QJQ8j9F7LtdwmFEyfVnZKK4PbKg6ypRe25rq9x5Lktj",
  "key11": "4Hpa5oZB77kSaNjTK9WTbyQ7JXpY46Zc71wb1sghx6z8KTQga4vRXr6qx9Wo4roF2u8s5j8EELuAto8zmuJehke",
  "key12": "2SX4JogAyNcQ9XCcDwgPYYc9ophXHpPGqD2Q6EFKTYcspZ35c2uhZA93LzXj9iEBBMejx1NyxyWePGyF685icafK",
  "key13": "3LDE2MmbwhXnSk6wcZHEykH3scaNAhg1CquTnYt6uqrVh3XK4drJGhQJ44XL6YJxSjVqYj639q1eYZ3kZ5LRc3BS",
  "key14": "tmFWhvhYChrRv4GU95x2s9ERRPwWomBBH5jokEJ1gvgF6NGisFL3N1J9V1c1k3DSLDDp4Wt1rw2vbwCMqVoe4Zz",
  "key15": "32sCqBfZ9PNdbHzL3vfVRULPeTfNjzsDxXQRtwAr3R7UWxkGtApq4SRL2qnNjq2gdHSqt7ricrQqEc63kMHSTea1",
  "key16": "35hJEbDCoCKUkRm6J1SYzSshmxeVe7NxtpjErosiW4GWTAUPGf2AvtWHeRm6cqWgtndyCFMCpiH2rF9aVGcKdsJw",
  "key17": "2jDAHQXEH6rnUaJ7irPRXsE4ygaQFAJoxxyQGaUVRR1uKqPvaYbacnoXDsHyGQYgtbB6eUzbCjf1ABknkfznBZ1Q",
  "key18": "5udqisM9vsr1xi8KK8MnuC8vtoviCFTGPB4wxAr17KrA1QeZb2Sjyk7pteummR37W6w8gzdevmRzqQXy5QFn9vDC",
  "key19": "55yNuGKYCH91pBQoBQ7p5xE2DwSswR5iRpa5yNL8Vv4hsy6m6fGUxrCuRsHNAmHmsCpcgY7AocCqvWgjTLoNg9wD",
  "key20": "4VrwT2f32TrgyQwMibRkFBdBcJqAjrMsYsRrvTAahmhuSUP4QvWy6bxbDPby3am2Y7X35udXbKycMveuP8HuEGow",
  "key21": "4wAYrVRwpPA5CGwckwUbx8pT9hCWsrFTV9xioGaGBop4KuwU7uS7RR8khXQVo9oUZPBLKe9Sjd6F8rDCfL8caw9E",
  "key22": "4q4Z7Urw3cPMVbqL4udkngXyaT39musdUgQPGrjxGNhr1zrK92Djuywsq8DBa98bHym4bQk1MmqT52SvhJfGQ7Ba",
  "key23": "4DEP2ejbjtPBYndq583LZTH3g7bbkrj8A1YnP3iWYF67kJi5dd6Ey4vTZub4t6ptbr1GsGVEkKkGLHt8VkZL9199",
  "key24": "5be24ZhKa2Vgj3XjprGhyd5gB5jdLPcNtSEqgpMXxhXE68kk8fr4qq6cuawjGo8aegbLSwBrCLVxwxtegBq8wHUe",
  "key25": "3HnxnswnwFCKNuPZ3mZDupK4XdshtPnKhfHduu1afan66STtd79C5FumT6mTqvuZCQ6dnATpmdqrfzfKRmztmptM",
  "key26": "2YrqnAEvtEvRy6aTdp3zRrRZPxCCYCmqCBqMApsuDy199yQa3Jveak15Myk7z8oANbpJ9UvEFcTjN8vTJ7fY3zng",
  "key27": "39BiiRmKq36FxRgtfCDYJ8kfhAPHtqzTspcfkV6Y7jDY6uFQtHPaFBvckMLfor7CWt2Z141hcMyKRrbKck1gSMwr",
  "key28": "4PAZf5WG1YpiNVJBBCbzeWcob7Wk5YnbyESXr8HfvPmngAPSsvLeGrus8jPgwgdhpuga3981Qkyj3deRPn6Ad6hm",
  "key29": "5yYkAp6KBwLA73Z8UnozFr2yBEZTS4yAqeeeN4gWsefxk4rEGQD265nZ1dorc3RtbuyChGkHJ4SwRrELVWY6bate",
  "key30": "byLQwQivGo1jaiYESGtVb1sdQCLDRTQ4TUx7gBS9DRE9tKE6S1NpwAv5Wg1Rvnhm1kzRJGqsHYWH24JV9LBRADZ",
  "key31": "3ZspEJAGxrxqJrDcb5mD2pHKUouw3ocs8YeH56pa9uZgkRH49LZt5Cw6m7MJ8BS6RzAX7bbcEojG83TMY2UTjknz"
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
