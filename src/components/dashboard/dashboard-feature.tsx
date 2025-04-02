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
    "5fyh74UU8Qb1AgxdEbhySWtqQLDBhBhUApU9FuMkskWNDMqsPmmx9pfRhBwJ75eDez8qvEFysftfnpCiwwcZgnUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MJcHuEGaXZ4M3YDK3Prwk384GRsFQpXgFFwjASk5PN2en9t6ejRDCyJKZaxfQJxdSJZZn7vC5AMGebdnM5adEWR",
  "key1": "4RHYkD2w9boLcLjxHXAHCDz7nSkxy4LBJXhkYshgsgKnTZE15aPgZgBL7L3KGhUZNR8AScCu92fYYQRSdRybR47k",
  "key2": "52zY1a8mSACyCCVZNzfeM6cHr5RfAuUa59NK2uqrUSE5Zn4r7mg6WruFyP5acjNuBCimCPgcA5dxeTEE2fXdxHcf",
  "key3": "ujRJTxhEESEkJyZ1jtDNfH1Q7PdTNVzdL127aDk4VwkCsjmdjT48t3SFwBmD98ARRbZ83zU9sVKLF3UQLtmYaeJ",
  "key4": "2jxdUub1Yix7ai3GZ7tqKJ1cXVMvfkTP19LExQFeroxEtvWe2Pxg1ZpMUb3i2yWpu9zS4kpxAAZAWvNSMz9mnuM4",
  "key5": "2QtUVHTPFLMSkNt1LFzTPHrKBSUVKZBRtEnyvD5zzAiSJ7q8MSQmrZYqKv3NbZEeBpLBwPKS9JqEarPMHHEkouE4",
  "key6": "3gKiU1zeAyC6NDkaWcz2bX6p9ers7xDodScDpy7yLbGrmJcJyy4NBBcvJkrgTE9ECrgMsqAokyVprDAH2dt1vjRE",
  "key7": "5QJYUXhZCHCL4Dpb4mLaHV6JNEg8NNKDHG4PKpirmoyZ69ZrBAAYKU36RFGgpS9DT9G2P6r49FvhdRNSNMNoezHr",
  "key8": "5yKCwGr1mj85B6jdQQG8qcoeufEK2Gvke8WoCWR8UyyB38eyHVjPe84iTEyHZ9XKyXP9D8iHbB1qCG66Nqmp8Coj",
  "key9": "48LHgbXbi7EpjatyMpmdLbs2w48jnzkkqU35TZqLRb5N83HTHbqUjaXwo5jLaYhSo3mzW1aph3hDWm1vw4quzX3t",
  "key10": "2p7p7aLppZUB65YUUdHaXQf3bhx8Dvzpu2RRDaJmRYDDojuMc5vUscXrxrqZefDcVU18noFMAawhhG98AJ5r52Q6",
  "key11": "3GgBVafQjRpijQskHk4kWwQoCBgFLPmdrGYqb5nDLaYswEwjBN6y2LaJ7sBfPCeyKqxYtYH97E1mTjy2fGjoMxAk",
  "key12": "DDYShPfNRqBy5DFoBTuSLEA5jU4yqv3EJY8jriULVUugGMTha2w1inHTtJavufmjQncWNegy9PzvZVphh7fhBDq",
  "key13": "3iTbSxPjYPbG43efiNDXHekxyWodBXtvEfn6CkkmpBPDcZKp2AiTiJVGVEf7uYgGrUqGp7vF9E7tTLrbyHQdwh3Z",
  "key14": "297LNLw4DDR4AodPHnGhYabWVyd3av25oJa3RNDAycggQVyzyFk8Vsb1jbvCQgQeZjQYqfjURMhqoqBUNknmyPVM",
  "key15": "4WHiZA91puAjjRxAFrZDgAMHXSmwP2bEJLn86U6s6t6deiqsSozb9TwYdw86FRrmvXuAkpNSXP8R2iYW4Daw7bEk",
  "key16": "2Y7GnpZ6oS5oRpaPzEB8DhMhirSRRLq2y1S5K57HWfCyGxQEJ2s9xhjYyw2maroMUM6mC5uDCU44kcNnvFYipXye",
  "key17": "4WJdUkNJXLVZ3wNM6Ut1rWx1t8UKhmZ5JG91AwLjM5ezobpCx4zNX6mnPuokFJrQiNZyka9saxbhwhTy8sML2mEV",
  "key18": "hRP3MQFKkS4rBVshfSTwiXCgbDY4UWFRSVkqwYS6VMZM3Txm64BrWk1d5cNBkcKRbwFm9tSAdEQZyij9j82LARA",
  "key19": "2CyTJ2bxyi1L4MCXjUETRLvTn6kjypFtASzo9EWkmvN7sXGEZ2oVGya1hVz9pn1XRgFmWZX844Q3T5r9TwSnUGoR",
  "key20": "23nMnTkGFKQ8T8tN4rztns8gijiNMbxFpemTQCUE6dVT4sJQWPWuwKUBccKo9WjkyqKtKyBdwv8MSveaw8fGMCEY",
  "key21": "XpmMqN6C7QTWfs1Y4BAUghUhpqeXMxRJxxQFvmi2Byu5xDN1hA6cEgPbTQDb6SFaQEnMsmNefLGQkBEoEFtrLLH",
  "key22": "37G1KBZUKoALtEckTXMsS8LvZGFGykZuUUm9zk6dpFrot9LzoUk63iGtMyKijJ1VxWLdDqnq67yDEvRGnqfCPzbb",
  "key23": "2hD9k1KH1YcdJt7ufHGresehsqRoaY7CC84QpmixQecmaPG2KbmUDefEgb6NBSmvrBaVQBvVyebMCAHoXTkTRbE9",
  "key24": "5ZH5pwsoTCW9xErBJgAXVEWA5RwfiGvZDciavMEjoVd4XD4AkNL3RpzcKc3XpzQSM82weGqLqtV4xFZuZ5ECyHtp",
  "key25": "2sfiLxquuNTE6snjqY3JS3T5PftMNuskPpSRGNFFPPFR7nJSakt3TfsRNRdJr2Q1VBKtJ274Zy2HScQekgrjcgJc",
  "key26": "2L4qUGGQf6jNzPKuCNsni7pT5veRo7Sg5pEozr2fa14f6pQWxnYhfwG5N5KpTSPFRvNFE889Huh1EPFGQELhLTCK",
  "key27": "66whtyBqeqogxjVVf7VYDtCkkq1ekoCCGTzfzjBbRuy1ngWiXP9oLxnKTUSeBUrdEN1gSojEDv1Je6L9LUkhrSMV",
  "key28": "67eY381pZW9gZ4RZQosyL4tr5NdLBAVsxNKVzB9WCQgws2d62bJEwPGkhJ2UCakYghdfaPbdvrMe419GA4aF8Xju",
  "key29": "Pyq1RWRbpedLoJGuADDAaLRT54XX7y1QX9sxzfCA55QhkX5djv5Aej7Xyd49JZNC6Cp3wUuATp3owYdpCTvbrQP",
  "key30": "5ppFBnB5GEk6cGrqueuumm2pkfRNSJScb3YgjC8tp27JBU8BacfUKYv8F37DG27kqh1s4LZtEaQsJcDpqqN1xycz",
  "key31": "3kVKsAB5ydmHSgnmBScssecUU2cKGoEGZBfaqzuHXV1n6khqM1uwsEbYn86ykPraMkaFS5ncAnoDNyQcmVDZSmWz",
  "key32": "7Un7hB6SzkcNCZUgP7UJj6LPuBk5eRGxuzSdF5jji9ZvVpQKeuCn4BgJAf3oc52DQW9RsAWrvwh88aZE6F3xnwv",
  "key33": "2v2Nv4Ay9U7g7TeByutNmSvSLRNLpLN6BVX4dtfeQncsnFCv9gkqRLSwyRSs4bG5wDoEdZ5TvpD2wyiXedPgMYmx",
  "key34": "QSzjtg8vpPvq7ddbMT2DrH62ahJZWTLVQbNUHCdD6LFvqvSGiWrHWGYK9ZGg9pc5zWYFBQsMtVLB1V61UpFuDtH",
  "key35": "5Z877EnpKLtaQCfKardz9xEWjh9JxY1E9wBFowsNBaULN1u5wWEZhnugQRQiHsKNrNQTATSxd5TjKVYqUSTTBJaP",
  "key36": "4KS5bEmPum6Jm9PKj78gT3d2xg8LSkYkVzKBXfLiyWyoFvtEp9eLiffHJAaADRbVLEDeDkkqjXZuFB6RfuxXoNEV",
  "key37": "5XuY1PzSwcurGHcYPhRbExCNReNXNZcbbednSoZDGSCR8Qy6xxZEPWN3veBSfj5iVJt9tUQ79tjqtBG1Ex1nyJXq",
  "key38": "h4k4QrxMNwC7BrbPQnjyzcFCXMDVz9MyVUh6Gw58RmgZQST9zR7wRpT7xAJrDMcfydEECv4tF1xCQu9Me84kuTf",
  "key39": "4c2zkbibL7gKx4LaCuH2rtNv4CWEw7JtZ4FSCj2eiHY7k1wQvJ1JPixXidkWnVjw8DWz3zaNUX6XsnRpHoQmvstC",
  "key40": "3EWPt7savvaWRJ1eCYUkypRbC9M1Hi4SotogHPxGG5zCkygTL9Hv8upzv1wYdnuSsYcAswfTq8C4xZRrr4vzpsjM",
  "key41": "2ye9seDA5gm4dWbUsA32gbok8BCPWJHh5XS6uugKiNqY26b1ToXeS6V2GXBMSKEcsLYpi7qRb2i5gSfqvPcYzgL5",
  "key42": "5nX5UX8SeSyGC6kEBQjwb1NJAY19vn9mz22QouFtpdXPsspEuv3XoVjdGYKnZqQeUGLUjpRdBLbuFBZGvUooU8SC",
  "key43": "5eJHd9iuMZfYVj1UdPE9WmT1H8c4184cPo5aKt5vLXUjSVBF6DP6qHHHvKt9pxekRkj4Ju4rwT1vJjSmurHb5zK9"
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
