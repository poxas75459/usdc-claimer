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
    "4Y7BD1knF6i79moRJiJYHVskfiTqfzkWgRAbcHZsfP9j4deVm3bunRSEyAgRF84gqcVQQc9MF4KerPSNVHQHXnhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jtf9QTxLLuBvD5eonHhQDwM1m96kDbkqkxCHdNXYB11ispCpCWCXLwq9QjqUwHFPydLkE54JNzu5fFHXfCfQ9d3",
  "key1": "52jyG7TQ6nVaMmVgbxuJTv6J1Jz9gsaQMNuR5JrEuJfm7yLX7gYFkEEnEMXQ6UmvoYPjVoJQFUxA2bLppQSd8SFK",
  "key2": "58egEAZBfxfETkaxZaoqSK9g2DYTYsNhkVuKpUG27LWxE85iPgpvfyGjZtgJn81vJ6VbQSaciokTbp15eik3MPis",
  "key3": "37r6UKVJeriVkd2ddfxN3XmFXTVHAoxVahMwLDuEUZqTWSg3NooeG8HmTqvb3pECxjHciuw5EMKdgGz4SSWGexHf",
  "key4": "3FnzCQTxtPkfYY976ge2XhtT2K91iEDZkuj2ZQJ5TNzktBD79teXoqmForyC3A28V96dcPdJzWJabHYcNdAzHGq6",
  "key5": "2Z8bwuw9UHA4h1pViNYMm4fabN9tAjvBvdf4TwDBJAkkjhfzbfs3MGczau3YVVS4oUobeyAx1uBBH81PVDd3V2Tp",
  "key6": "5CBmDSnh39BbTa5zBwMot7D7qKGk6UBxuymPhHsXcuesSqC46e6BJEmtToSyqr7FP6hv672esTAayzsom6NGAogq",
  "key7": "2KMp1VMqzdy72oYHi8L2T8EAz7VFkBYvWWuJ25EeuYWY3mDmfagxwmRUSTRSybe2n5S7vrzgXkDiwWw6AzLwouTd",
  "key8": "2SjR4MjRjEtWd6KPGfvGhsePDdECLks9Gif7SvXm47FhZ7PWo71BAN5tz99ugus7h3cR1Xxuinqu6LHRbjVou7Vd",
  "key9": "4XcT8QXaXRGvpKZKVPZ8DjLueL8j1ZGZpsixpo3rGC9zMkvai9WejXbCtkggTXY9Ewwv5dmXdFZUWTncxLD3gpa5",
  "key10": "3JD44sCm55etAKdDrXiQEYjNf7axDN1FFLBBYA7a8nxwVUMgE8V7ibdD7p9dE4TVdC2CGWSmtS41Ztnb27qNsMwV",
  "key11": "54ZSvyBhDWmtF1H76kZnzNQrBfx32pgps5zERTqzUS8CyxhFZJzztsYMQs1RTveVqui6pFrCoPju68eQJhSJVtTF",
  "key12": "2J3VXWoSYvaN9N2UPAxaS893PkHJ5BJWVovQ1KP6GFZV3QdengMrMHKGhg2AHnqrVkKCtZSyenbS4xGimmeBF1yp",
  "key13": "47EA34s7h3uw9GxuHDkeQ65LeN2Q8dB4V2yARNeYdzvWMTwD7yFEuLMYgASxbCfGXdEX38izYTJLRvxbnMb6uAX4",
  "key14": "4PcMAz6xhmotCVb2gZxofj5wBtLpKrTVh2bRR2Sf4h5qk4VcjWmzji2QdbGh7kgBW1pR4FZmozZ1QJProVJqfBns",
  "key15": "2gYvDZTFQ98FccPGAxUKcrZXkekeNqQAPURFN7MRGf3udy9zNiCMTmTmXcKkrpYbXptSCuAjMde7LFBKBRSJGgNc",
  "key16": "5ZvvRNBKse5f24Z5zxNewytph2k8tg8RQLvbgHjU3zYD2rdLQ3AbxLpLBoLkcpYLLhQX6JC6hLghcPQkZurTXhZZ",
  "key17": "5JTP4pXPPUGt8wXUMEY2BUwDs9iYyMZqux57beXnwa5Y1k73gvGNtAMLs7d8NgPX4eZPyD8v8cHpEYRb6RjqCX86",
  "key18": "42Up8Bn8dq1Ze8f3ijjZUUG7po58gABJ7Jt1m8ZDjFtjdKmt9JV4zPjegf78yiGmD2uqDYbRtPouXdLN89pwXFJ",
  "key19": "4x3EEq9BeRoPpfywmf6P1nufdP1ghZqyBiX95G7muzutbcxnxxJQh4iK4pDy5fGVVRCRMj59BfW3cVA2fuqhY9BS",
  "key20": "3UP3ztGh5evjPH6gFiqbLYhkoERKrVwaM2XLR3o7eq176HWFqYrKm9H6aCt4W4WJiD51PJCUhEJxWBCp8UcQYVve",
  "key21": "4pRAWRoZgN6GtiK3ax8iacNovr8SQwLCNuJ2qoxY8hEZ3ag4QwUbEsCjPA6SykZcwX3E1LnMyrdmKzqrAfxJBLzh",
  "key22": "67AdWC7e9co5E814xZLQeeAoDcY9D9QwqiirXu6LDaDbM4thwJu3cN8mg16hWpr55UgqhFidojQMjjm8Ysj9GV85",
  "key23": "4dZFbYodReBySKc85RKsfzxiGJ9SQUSumAK56ETANDeYqpijoUynigSER95qDqtF4DHa8f2V1VYFiN3ZGSCFw32h",
  "key24": "57thqgFpe1tiFAF1StYBqvoJevSkvW1BhxfusCzxAhEp1tH7zSRwXX9SssdGYHYQ7tJXWoCaWX8TfK8uJAzH7xNZ",
  "key25": "5791MPmj5QkA4pzRXzJp7fGZPZrRcv7apom8bYvoL1EqpxBHhzNdDonz9hBcGTghyo7g3AJWAx2CJcpBUUBRF65g",
  "key26": "2y84ZPsABg7L33KTdWatRMvAMVmzvwAPuHW2UJLLD664UXSwJtrqH3wFPBr2BR2gQ2CEQD8wBgRf6Ftpj2bY9BRx",
  "key27": "5NsFVmfqk1ATgGYC46Wes9hDZYZhqUcuxRfmK8ez2WpzKVkB2owHdr3y9emjUzEBtqSy6CXDiWx1JiN7xikycy4D",
  "key28": "4XPX9g1KppovMpFuazvbqxU2xTeAaFgQD1YdFG4zwTdZunrnGoU2X5YbRryckXetxciNWPcYUjLN6dKLJeymWsjL",
  "key29": "2bZ1MTmTqX4GgzBv77YsVL1tFeVVXBCubpeKqmQAL8MT7kdyn83LFZJuG2YWw2MKQNWBNk5g9bdcNoHTm5vYZynM",
  "key30": "2v8DcbZ7c8hNC4AfEdV4oD6RmLYcVSMQP5gJrxzNPXDmB6J1px7qB2mSk18bQGERF6DVCaKN3muA6QxU2NpvewGk",
  "key31": "38VY41uMzqwVTPhoAbWsw8TGCFxfRJVnNpqEAMkt5pdJZFv7VX6vbdvbN9cKLpMMTUujoxfQTEv251iAnDeBtSmB",
  "key32": "67oVn34BVGvp3WnuhzGFSuKK5hsTme6EYfdYF9mgo3neRGP8k3XnVdaue9HqawDM1fcVMHgJZhyt4sUA37dKPzVr",
  "key33": "fAG6nu7Zy9hjNAHo8ySA7jAgqwmhBD4836NRyF26GURJZ92EJ5tPDtHzLAnBt8JerhP5GuRELMGPoqDCTLgMqHZ",
  "key34": "dE6UVrEgzZoD57UTCirTwpZAmcHDMvNcPMkoRBKtC3EXcBvdYGGuDXTfhy3J5hzgKogKBiWtUDvXqatfTj82Srs",
  "key35": "dNgvu8AXvW1jCUf9nUg8cPjfDZuDmeZzU3k8h4EgGvpsKtkywjwYXkK6izSgMyviiwsCjJjZ5VfA51QuhiFDzSD",
  "key36": "2GTTbpoiPBmHvFmTaVPsSMZaeikgSPmYxXGvjkNfNCaUCkiEbkEnvHXXrYuZeSMqNVa6PWHr99da5jA5uzptuT9z",
  "key37": "36kBo1su4rVYh1k1ibk8SWuMu9i7mhYWAHEodkUhhRYpTHNjbuAfWD9GQoo22mJcLZbN9jnQUxKZ3tCD2VPBodFW"
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
