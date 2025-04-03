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
    "4T77GY64zZhPQQZEtFPSocvafTs4K7UmSMFJfPg9bdn6US4GPgHvnTE6hnsHV8fwH181AZeT8DFKPHzbLnbqcAkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qLUqN2PgnUgTR8pMgxLL2Qh4gezke1QDrWDu8cVhiuLZSd2dgSpVqB58qNZTifmxiZhTMWFKirBoEf384HteNgd",
  "key1": "39T7iPmyjegB9icbwcN8SJp4SiJUPgEVttfvcQJjw7N5133PNnAzgQYvwb8RAeosZ5Hsw5ELuzZ89jCsd3KRtmD2",
  "key2": "5qkTzSGZBxCnT8nD4zvfmawYUkDGLdx38Kz6u7HVBepMzpnpFFDooN7PrN66PrD8AMyzqiU6euj72YtdFCt1nkdi",
  "key3": "48tYHNvHK6ec9kV5nHyUMk1ZuxKrMyBmvJPXvhrAZcPcQJ3GVTEtjmLQdXSYvoRXLMhQEgC2NZzCfCMwWVvjZe8n",
  "key4": "Uv4T3mMXh3TLkmTiWFYifkL6vq6zjczbsjxzwoRAw913kbeeHBLCXunVQp9RXN22rJVtvnLaDKG8prSER7MZ7dt",
  "key5": "4ZrhV6JV7bcGeciQbH4zZpX6uFgJXXZZvTmpGeVpQD6jccg3q27Kx9d3BTbRZKJrqz3DKoZ59c9jEu9BeXiRny3k",
  "key6": "5pGuuuTFFzgEy4reyD6rUkVwjiqpSsMPZws9FgTDs5uNf3RcQUXrHNMccqMscd51hC5WsDUCD8ZYygzdSPoboVeA",
  "key7": "4tPg1yAC6PuBzuRfppEuwfvF6t37vfuuZ8pwXSXvH4CLQYRBtKSwgj8aqndj3iX4uGheLjVToqKJs8LewqfQLxUM",
  "key8": "zAsCn3YcvZ8TGw1o514vp2uMpViaAiGWuMD6NEt67y8Jru8zugS6WmBwJ37M4GC3fwPJcPX6cUB9TEhFCAM7shQ",
  "key9": "3HYz9U41BYrBBfu4xd4Z8DfvzgDvL97pbx2wjf4misKjTGNFeK8qLyFUGmF5vt7smLWRYrFAAi6t1c7RM2gsi8Yi",
  "key10": "5XgVJsqMoaSK8WfgwZ8P6Fx3RoBw43KNffpq6EtFQ12eFFJvk7cArbRPChY4fdU7vsMEpvSDcM185K6g41GZNPgG",
  "key11": "3vZKsbHiknS1tvgUWGrs474p9eYgKRmsGUZrTRKJpDHKyGqjhYYRjzjdfhzz9DZxkwAWrthY1HmFtazVN7Q7hhd7",
  "key12": "57VR8WJ6pcgCxHJXAHrHTxMmiHPnY6MUJ4Bvy6C7sB91cWrUtjeg3MDz5xMJCJEyWRV1MAeYkdxrT5V8CJ3V6xAJ",
  "key13": "2e7TapR3fW82mZGe5wvX9MugXxJRJzxLgLyv89cKZLzkxTx3dXdXY2d9oCPAx574awUc3irgQDprJ2k4HCLec1su",
  "key14": "3EighbGK6iSWW4PY5Ji9zevvkCgF4JCLeDzKn3CAnMhe4VTMyg6UKsDZCbQMfjzpSsURC8X7nqYsSNVdBB4CsH5t",
  "key15": "2Jw2AF3oTEJ2jqtb9dDFK1JaDfjDnqbiUweXMDWKcFxmA7rH45n6PrN89oXaquAk6ruyZCqm3FHMUPiRD5eipPuk",
  "key16": "3xSxj2r9diw6ScHKtZrXuYi4qK9TGfEv1T69uKPga2MpkzxJdUkfDgY1VMUJatwySLMbc6dpQ84dP7as4BWuP6qb",
  "key17": "51YaAK35qk9hVDxfzAWnNPAK6gjTnMk33GC9JwULdBptqErwR2C27QU1YSFK7iv9qMYYNV9FUq2SMHZNrbf6BVBc",
  "key18": "3LVgo2j811iua1376YXJs7aPasrz7q8z1s85ZFcFiqc3LfcFwJqxA83QmUygtE3YEVDTuPrkyRkZnCcXmhyH2QUs",
  "key19": "67YYGifAxaeUDtnfPuDMVjZRnGbET3vtup23LGYoMrFJaUcaQHWiXTEWi1hRuAq4n9ueoJrbFyFDd2qQWAoZeGDq",
  "key20": "3NWx21pQFUjJHF5RBkRudTGronpNKL86M2j9uUJiTWHtoPRpVtFWW1TmaibakN4WB8an2F2VsneFEm8HAezNF5uN",
  "key21": "z2vzF7zkmPErY1m9yr3GfnznvjoMDQiuLfUEUdiL9UZSmz9zxEdNAeHTiFvjWPFHyT8GAQ6Q9dou9G4SASJL9jQ",
  "key22": "2CebPouCNEtttQ5x7Vtu7ERLNdxxqMWeVANEbjcKTBc1aMhGVVFwU9PRkQ3qkwrJibgiox1MEkQBfDTaPiPHPr5u",
  "key23": "sDS4jb55fStJzY6TbVNjYRJ3KGcDN3KzZz6ZuWYYMwpLpep9MxYJ7uuxhrnb5CwnxcWTLYMkKb56Mhu2zY35pQx",
  "key24": "5Un8Z8QRKhBEcLZniwb2a9h242K6ZYCt1EqrcVz2zDkfKQTnhhK86Rh5QEjQsHuosRpnGhAdhvrCGGo2KwPspWGz",
  "key25": "3tBpCFcwXjstZcAdKNUunYGK6dt89AUELmDq7iqvEtMsiXm61vaL9GNV7amadGZTb1X4WnLn37rsSz4tRD7yVJnw",
  "key26": "3hGcHNGnuYbjbS54L1KK3FuaQ8V6jdCUzJQtzN1b8iRHYD4LkApUWZfw2M93unPi7oZJEm2dWYVijK3PXw4guHHJ",
  "key27": "2VrE3Q6SzrPvcZT6eCMP3mxmCM8daqmqaog3D1fYdDe3fEwTnbMqpmmetUKEqw8wxjRgtjjqNqL7zyzfJoTEYK7w",
  "key28": "2NdmuKnSeCyfYiuGHKSG4VZWPCZHa2FLuv9nHshXc7j1igKxrKXHZvs6GYjmGbpekDD1Qrq93xSPWgxeeCdQjsfg",
  "key29": "5GtHtoAS8nnTMAZtz35itvTNSWpvGjkghEKo6H8wZamW9TmkeDMbQyNa6yGUTYdJQfdC5bsGHKq8MXQC4aziZv9R",
  "key30": "67nr7Nm1mPaudpPz8aoKaGdyHwu21NwML5Q6dGsLtocF4i1sbtjyLqdS7NxhuyBG5WPJVo1c42YgxrEBuruxg1v8",
  "key31": "4r7fZAYSKVbpkkEuioF3UZgVdAtoS1RCLktU3YK4F5GjszLxhHCJxvPhkQ42pqgEY8unWWKcAiNqcCabCYdcdUPp",
  "key32": "32pZKXb1vV3FNVoZAS8fF3ErDaixGCV6FZAzL5Vr6XoqgMhyJ4FcZCeWDyXjXMes7D8PUw7Mn7KbvmFgZtntKyLE",
  "key33": "uwN2VFT5Ex8CsEmZDeWurWKTqn9NdfsDwvGznapq7mCPgwaY1ge2ttHVXSKLKNtSsmqihLiTN3VSPVAPRVq2TTa",
  "key34": "5FZ5MdH5mQ8i6hdynJnbHmrCkrpzNWbVka9W1XJZN8H2qxymD1MvYmbT3L46BW45mdRfyen7LxDcpr5wmxHdKikj",
  "key35": "5eTCP79gXge71vsiWvzMw8MH55QTu5iECKD3dvEYU7vGYMTy2WkmYqtZXMS3tdq1aNCULNBRuvJw1kjAmeW2iPhr",
  "key36": "5PGpVSBtKCDAoToAMZubiqfbLCkHBVTmSzjZaY5Z4aJ6h3ed3eTYsG7TCdSQ566giFBCLNxKAkwseGpzNo7rCEuM",
  "key37": "UhwtZ3HfSH418RdcLHzCXPGCuX8rb46Q2AhEbgbt4ZzYzi2womGZyySn99haqzxhou6ihTZAZFazRW8cPpx16pL",
  "key38": "4nDSBnWeRKns4NswgWSAKAfDaehuctk8MyMjTeyd8xnkJ6Pyfkgw4g8NgnmomSskKVzG1aowfjw6C2gmm12LxfBb"
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
