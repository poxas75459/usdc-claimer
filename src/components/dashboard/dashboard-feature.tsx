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
    "jDaUdTTKmBcC85k6fR74Pa3AEGDGvtJUz2EmioZsvyUuuQT7H3mZKHwnUfH61PtUrVkzu7M3GqWGbF83Rv6Nan7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pb1wqhZZrC6FFjVx7qLBw9wkCSoBSBRQ7sLWzaZe4iMAHfUsjAGwNCHicREXNmxzKBjUPmEkC6M1mmezAiYxwP",
  "key1": "2k18XfYZ2iPQCExoxr3A2nWKBSRvaJnXfwe4ayfSZrEcEu3oMBSp1AKLTuZWQnwZtyWtm62oo6dbN7jdCSg71dYp",
  "key2": "4PaW4f8c8RrTS6HFGjFQcfdL35Ctf24uHqMnDVNkCfYPfgJb65mKp2FZeb2eUd3zrCbEGdMUBTkrees5DgwJ9NXL",
  "key3": "2mW4cZxLB7BS3d9ZgBboDb3pfbnK8QPQJNm5F6FjAH6BJHEjwQU8CbzSZQvxhVccBRVQaZfJUgGNEUd7kSzLVTJZ",
  "key4": "2huhzi79Do5fmHUhodWezj4pmV1VCmJ16mYaPEgaAfnQ7oWcnEDxHcHxRi7hPiCpCBKpGN6o7mmXebtJNf6YjyC8",
  "key5": "3yFMjN3SFQJWTXwUf4ueRbJz5aFMPa3Z4ZSaXrtJ4UP4Spv9saMjNEUacKKozLynDc1gZEzkX3NBdXfrmfb2vPjg",
  "key6": "oyT5AjVX12EqEiCpKD86XvhQFT3tYAmGWF7x2EHpHMzyZf5Nw9RvwVMnn4ucAQJktskJEdNc3nCugY8cbL8T25m",
  "key7": "2TFoX1oWBVMP4osTFPnq62hRtfmUeTaAa6Vq31Qn5CbDuGYcZgb6cxjPGMb6hpXfkS7qEHTnyad7K91DN9icoCtj",
  "key8": "39wLFDB265AuS3dqEf4eDzJmMdiCmQifmPYQd6jQ3yz9LFGYd3uBJY6F6KHWAAt16AyHvH8dsrrTCEsJsxDmXudG",
  "key9": "YCxipLyuzhyLYhMNT4uWDko9Rmc4gDEYum71Ryomb64ixfx3AnSsNY42QF4utbwqQe7mB3CZ3zcs8k9qdSwFDGY",
  "key10": "UsFjT9fsqU9S57cC4ePLfRnLBh2Zf7Jtvbjjy5wM7yf8ZBkL9NV1sg5pzZ3VZe8r3aeY1iTts1nvLLpE56rJdqS",
  "key11": "34nedmyKhYiTqQ7jX1BpCXrJvNcL7wS8bUTeeoUJVhdsGV8vHyj99mKwnTDSP5VS2S7goHUFneCjYt6iuf3VFgR2",
  "key12": "4FCKwYPnFK6Zty2fV7t6jSHoydoVhXRSss9YsT7Rn6kYxVX7gZPYgvUQA6bm7rrkNX9jSq1VmSi2S6V9zQcKg6gr",
  "key13": "2uRzzfR8JJDFCJ1PhaSQSPaPeTsY9EUG9SBF5owbwg7QR9AVkH7z5WG4SmhGgh71bN1cHhqFFhcv2163Fb9KEMUs",
  "key14": "5KLC6Wg5QXm6EbVNiimjaSnZNa8kF7GpDRGyWx97c89MEYMTASvnK6uQsyzgrnH89EzUpZwMYeSHD8X4bGTj4bLD",
  "key15": "ijTanW1LoNoNh2FpDWfZ4PReMVprpHdGhE9b4ahdGptjWBmg5eQvfKXRhUMu13re46ZHVrGaL7cA3Tq1EiVzqG9",
  "key16": "4oS6q37wfghXkqpZHUWZL1QEm2ZbEe6sgJS8Yti8ftUazi4gqWExGdWMahkL5Ba2cJXhKcsRSPrbMqGgrubfaDR6",
  "key17": "2hUahbkiPRFjuY7YaXYUKsTeRJ3w2svFq2kuHxF4WuvzeL2ybmkx4mqrGKkzsSRSuoUQ6XdvxLkYyhX2yX8MA99J",
  "key18": "2xX7mcEsKjUJxMM4sU898WGEA9F976KkkDZyAzmxCpekhoqzY9ZczxmiZYgieymNWQpLVPNw45WjLc7DQXauQhBb",
  "key19": "4c4Gmb57wDx9JzUQT1CouGrdQHkT6z8VWx3rxQwb9F7YbWZQNsAbzR1efraA9JMr9MV4YFcyZmNoRP9Pkv9pxkt2",
  "key20": "4FTXHEo9o4rnboUYV6yfZoU535cGomQN8WiQfgVvbY49AnPae9pVpRzh6wa4tNidDv1jnZjaUNTz8WBr4X5eLGRt",
  "key21": "3Zgn1ThuSTAayrgjamsypG7NnraDTbopT6pmeEE6pdbrDkwXCxvYZejRQJBLzVvz4R75SnZ87wzuJtFyRkBDuX5s",
  "key22": "3dQAyghFdr7wgfmBmbPH7n3Jfb6ki2Jd6W1epuCfCgQCyVxbVnpAe2AWNZ6unu3nK11uEiVY76U9NJ3QniQbumdH",
  "key23": "3npQt9P7YXUgu5FjYrDtLuTJc86Am9oJPnbKsm3F4y9QVTJmdNU8k8XdQwJPBE3K1VTTwRfNaQ36nZe3xJ1W4Tjc",
  "key24": "3DT9KWZHHpoh7JhyaCR2ymdpaEcqJuDr4pgXt1Mosb3Qcq4LqnsHW3dewDNRYJztw7E7pF6aAfuM1jzGKLjashRq",
  "key25": "9zDho6okXBwqPpgubsqicZRKA5F2mrp6MbgRybRFYxeS6gWVpSjUCwZa2KcQriEZVhPTZhPA7NMbuwtJyNhKQY3",
  "key26": "55v6iU9haQCMhuqtw2qyfHQweXgU32ibDtFaiYs4WCz4PDJMXgJ33SgiMxdJ49oKDnPvyMgk8p2tqg6HaFJRP8T9",
  "key27": "EgRszMPW7PLiSy9VW2EZk4ggw4zPV71aUvD4QngNd8BkFPdmwE1ibhtGAq3XgKJjEiuNfXnhHZK1mTtvXWdLEqu",
  "key28": "MmbzuLdbzssoUcLSyqYX2nn88hRNtPL3iixQdtjjtw7KmFG12UgYD6mfST1czxvhQEGjdduJYNGCejkqMB4u9BD",
  "key29": "x8CuvkZZk5bN7R4exwP3bSBz2ZMu315yznSaUeAg14nrihrJzVqtEUAHwc2YVm1PFwB6raqgiGoqoLp8mEyf1QZ",
  "key30": "4RqAQtoz4W3eaRUWzmA4dPUv8Sdjqvi21qkKHgTYCHh553SyYHWUNcGNgaMzmsUxqNonNwiSKtyBkznStiPaVhvr",
  "key31": "54mMxdQL8LJ1gYjBGJPz6ndbu38tiTqq4XstDyCRCJUK1TqweZCaBjqnSBMKoqDZk33PU1QKFDdSJfyJ4v7mWJiA",
  "key32": "5dGoKRoaHNRj7J2GK3j31rTZnhgaDmh9WZghgfs5tp3ovjBqXFegeoFAQWQZ9wrAJ78pvh8wws6oRMGj28ZDpEtq",
  "key33": "5fU3NJFjocPLfJfMcwg9yTfoXNyFkhAsHNJq9318XoNhpqZnisDaGAHp972mNLBS9K8WLiNxjcMH8opuWgxw7P3V"
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
