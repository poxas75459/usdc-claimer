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
    "5bMMTDYCJXcfDLFvwRoHGzHmQTwK6MzsoBjrbdWRyvWSSen8NVYq8dM4UCJLMTxXFvUqz3A31Y64dwJ9RDcvyqrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RRixc5webVPoqFLmMWKnaCZFPzgCAY417Kxx3J68Pdk9Cut8wMfL42jZ3SkkBNe1ZQvrTRaDpHaegLR9TEoNFXA",
  "key1": "3RKb9kzZsdH4rUVkPhCmxprD1Jn9owJ9Z3n38YtVXPatnLM7jdhmXXg3mt4hpfS29PgZfMQW3YGYbd6Uw8AbTwcs",
  "key2": "cFDMAGrWGktLDRat8C83Y59SMKQkDLGubdKnqbqCoR1SPSYxXPqWfiL6S41Fa5ugi5iXojQTjPxbwpwkWhGs4fU",
  "key3": "3oM2yNtwy5chZzhnqN31sSPD4zS9uWn3VedA6XPXYuGxur6YkwpmViYjYVfQjgvLULcA2qrLqSms4mWUcxaDuyTU",
  "key4": "5VUKnxDVnJNhfWQBzB78NX65LoVDuZrxJ85kS96Ho4bnLL9fYi9mjF5h6FhS9T7qKA3JzBXa4na6rhGhGiphUgrG",
  "key5": "5v3XW5VxHk1bZWEg5C5QxFnk73EN73bcZnpnVrRPBgAmqRpz3P4D6jYQcYzDewCFAHGb8Mqybym4aYytey7bm7E8",
  "key6": "2PvnivwNzFgtaSpWd3D91b2wUzHEwBTcPXEF9VicYMNuS1gkqN6XbGcUHkU8sMVqQeHMxLi8rtLyJpqgHsBXCsoi",
  "key7": "5hoq2LzvvzwAPTZWuNmbzUggyPxGKm2NSZJXsPTNuWnbK4Q6BUu35Pm8kVmNY69Q91h63FVsvPntPi5X8PEh9Nkw",
  "key8": "5RsXMud385DvoSLVD4QJf5BJVUAmEgDidPjy7ZLzM8kuwNMd7bKoFjd7dzwT6tsbKHLFs3gbCkoZUepQZTNrSz7P",
  "key9": "4FSuYPu8y43vjhevTBzmvwdTbgph5GDhN34j4nJ9Gwr94RcYeeGBBTqLCbGkdHaCw3E8b6r7PQ1b5DCfxktoxPfY",
  "key10": "4FENcEJezcqh2aFBJwYzLjQ8vGsg6zZqR5o9VZm9p1H8CnzaAAfs44wS5PNcPUvBgkmqbnKaiz4uKRQBNmfNu65S",
  "key11": "QexUfmrxr2j3PtYkXmUHaCz6Cc4ftAf9ePppu1fpkDtzwVmv4eprujE5XGfkRE2Vc6hvJcQfzeycgsQgvFFZHxj",
  "key12": "3Zc9iGdm2Db7Ef8QMGvwf97dCPtyXpBTsaVQDKMQuqEGsS5SN1RuUiMZc9pBaA1GAJr8JtviVJQeqoNQnqs8KSdV",
  "key13": "2AS9YqaLerqEEsERy7nB1tNkF6aiBvJN3U575LkLeWVPR7DajFkoJkWESqTedMfi2SgUZBp5fpa8r86aSLQfUtXX",
  "key14": "YEYW25w9WBfVE1r5yvP3X3eJxkWG6CP2YuMokpu3ofbeV1n9BK3KN8WpznmDdNrTN2mkF3VcyCNGkoyHpj3agJi",
  "key15": "5Y7YeSkuq1V9ZBNkKsB5eM3TS1XsH6t4kCoPDE9t54Y2ik6jjJEC1AdTutKBQUigUqEE9FGbDbjs5hpbtNDva9cN",
  "key16": "5gFYVkpFVaVKrQQbHTvr129uqxsoeebCubDB5m8ZpUN6Ptn1WAWS6C6MFHUXNVY7morskf7MDwCBVEtAw33gfY6x",
  "key17": "SAEfbRGGLW9FmsPn33jcfWWkFLXe29E4MWujUaoBN9HoHMHgnHWjwiVjhXPXrJT5qNUneEwrYReA3yccj3Qkktc",
  "key18": "2nuoPCPZXiEtC1zJF1Vw8m3ESc74QnKcAatEcdm2vBThMvu65ddrYC2P4E6uit3xhJXbhKvAE9eSmpAVNHHn9xbC",
  "key19": "3GRJ28uzigpwECMHriGn1BmrS6jW8T1yjsKvaBQwGixajkGnYBKHTjDoBLpGpB3DyPc9UtYSjiXuzVSJ4ec9Gzpr",
  "key20": "5CG8QFMCTT1ApFhhNGWuAVcFAZKfEFLJijfedUxASYhoLWFVya5SH3EfBqMZ2pNfqugyjxdw1hYM84PHueCEgAs4",
  "key21": "2ec7BLbaBsYJPa1fFPkEN5FuaQePVUpnPjhiHxS21HmdXU2MWsjXPuSDK4fqLenHwoUvsXw1EenmyqzZ5GfTMadW",
  "key22": "27EvwwdmF5wsrqTjtxhtfieFUGWuKRGMm5eypdfYYVdR3zT4woVWMZGmNiFrxvBsEuqebNxvAzsvrm6haC7YiZMs",
  "key23": "2gsLNAcxZ85S4sAiZFu4w2sBw8WADX23PPd7BVJZrhixRsNpGZbnnrivabb4XUbReHSJsxpbmV4N35Jjnr5nUBUc",
  "key24": "3PMTUodZwgrjBciDKX98aVMvC98VWNTQHdcr5YnPaMsHiSHUwqMfVKSDzGaieVtrQtKnCRudUgeVH9vVHfon1Hev",
  "key25": "5wZz4Z3dzn5wgJfp42ocYTR1Y1tBwjWttkWHYyfhznPKzugn9yoLcsniWKmXyeHpu5uPGCNbKGYoa7YDPE9YzMY2",
  "key26": "61bRpCrDorkKNrNRYJ8gfkykJoeT3thCjJeYzwCFwSCuQhdePK1YBnTbHRmPkpfcQwFBbvofjTbK5diFeW5Roinb",
  "key27": "r9ozEcQVVJkY7iiPLkm5VZw5aLwwCGBq6eW3TLGCwVjk1aQLbu6vuVuoz879MmvFN5Fc9SSACnBDzYww6s8YCGY",
  "key28": "3EAMRqSzvDRRUeQL7vnN1inHan3YnQKrmNgBobLDQwYfWMqbyGnxhGcciV2ti5SSpALVfN3ejjJoRy9eMMPWvn4S",
  "key29": "5Sse8E6z2DdDBJDAhdzsfnMjWvDh6S4u6zpxnZnHWjmJ3ca2iFPUNbapa6VWXQxkmMLDfCEZR3aPK4YC9PPpCUBH",
  "key30": "2KZ1sr9irGRYKDouLzgzCEnB7tdDdiFYkQ1p5WFuDT6Lya1bv2ts5yyr612oyDVuSWfvbqiXduc9JQjWq9ZL1qqS",
  "key31": "5dyXp4CpwVGCfm3VpNXD7tahwban6jzH98k3towJ36JzV2vXCs3Fw6sibXCuhcb96LBdYxDfojtiBKCeQUkEnpV1",
  "key32": "2T8R8qLuFbjr6P3rephn4KBm6EUEBp1F5sJckftBHGb4SabNaAzxhK7cF4CoZHpDqFUyBGcKhANq2msME5SLBKfC",
  "key33": "wWbZ65sJZdHahyzKCnivd6Kb965ULMcSJsBvQQtCQfWCR5eCmrzsrUfUDvfEoa76hc8E9hmK2sReCdZ5NmX45Y4",
  "key34": "53DVhQ4XZESW3HYzZSj3kj9gszsKzu3BA65C7KfKHjvH67hAmxin6Qhi8t3d4Yn8ojT5uJ7e5aHJChC26Pf2TW63"
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
