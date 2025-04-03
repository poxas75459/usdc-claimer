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
    "2sQjZPN7RncfKC9SnTy6y6v4Q7uDrJD8KvKk3F6HwSacmeDxvYR3gRxvgKvqUankNSprtvkyV8qCTbLKCn4NhQDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mBwyjuBWP1DcQPKcsKXwN8DHnhwmPLXMLB4G87Mmk1GBkyMYfx2TTfSttCLWMVCgD3WuFenSwmjVkATr1w2Y8wo",
  "key1": "4RVLZiJNsxcNLw57EXdfUJZAhT4Ya1BcDDJexMhcHPGmpUnPqv422dzsDRksRq1v9d2RYjxC3n6GcsLL1EYXeYwF",
  "key2": "4iLTkv84NY29oVx944CNf8hkn4mDphpy317eUuKXdqM8QPnPKhno1evYobJQsJUgmqGhQdpNax88QwS1N7GoE4fU",
  "key3": "3Pj72jcQH9CPMznc4hPW4JRjnpW9d7H13tZoekouqCgn77MnMFDbHgFf1TojG8w6EXAPKUsFrHGSZFFPrUQoH96T",
  "key4": "r7hd4NWcFR63aPreruwEXD6uthaW8iYBGXF79xcVtxY5k76qJvXENQ5MLao2vALjcAvb1DjdYAXj57BphFMujwS",
  "key5": "5tXMfgeuGR7LW3b337Pma2NGHTHTE4imbAAFs8Mu23X1Y1K5Kh4HoAqgREyHrC3PAjGLzxHPBk72o91ePmWZuoxn",
  "key6": "2XjRwDDzhPgzoaikiiJQZnD16mk4L91bYJ3hT1S6iA2EaNxGV9R6ueQfkDX3hS4Z2sSkddKV4qqyJ71mfs5TNpYG",
  "key7": "5e9PbxuxaiUzfFmhbnnFqm9gb9dtRLgx4zqYrtPmy818qSpjm4YVEufj1GihprW1R3QA2iW4tM2F3eLmTKbQTikJ",
  "key8": "26Rk3mMVNHY9KjT8b77CCACi4QN2hxce3JGvJWCa3kqyFjTGGUmnVFcAd4e7znu6SCQmVJujz4E2qVbU3inbNjT4",
  "key9": "5EWs9XMyrWt28gtn9HsF9N2rdXaG73cKYrnpDkBLcEH1WNJdny8FwiT7fVVVyRCz1scjULKy5ywJAeQLycHRg3qF",
  "key10": "2gbcWn62ws4317mMtYtvSEweV6XUYFZt7YE7TBvjoJ5B8CnmBzYVWUjpVE3Zf1MGtCGxic7R6qUukLpgDLmWLkKF",
  "key11": "5NN1Kn4TCR576AgNUMf1u3rLSFCE25JY1ZnT6XVa5dE4B5xaHhS2MJGYUY1dXnvrNs74Lzqwcd2WdA9ELLPYRNZN",
  "key12": "P7MxBu9gmfcNrmzRUbJn5vF5DUyX2ZjCwjMqfzc6Jaj5TGXbnJdkTBjxLv8qJpdUoDA3jkUEsDurouHi4Zb58xU",
  "key13": "5oUsnxWR4prGd794YyjioKCtrbXSwLBr1ntJ5zpKWiufVpwaVmvx2SH7osYQ2TSEkCxLW3jb1EU3kgyri1mjDJkP",
  "key14": "4m4C75YVjUx3KGXpi62Tsq52B8Mxh8yJbx5hpcfo8fnND6ukHUxb16Kb27Ph4dHv3Sjfhxd1hW8hNmiwJ92hUtVP",
  "key15": "58jGrY1xxeP4Gyn71rRjjWoYA9jfmRVNmo64GM3r9CmEhDGQkTgq4EUBqpfSjfshgzSgVJMwq7LEDH8mnM8Rd4Nb",
  "key16": "48Byn3a3j2Qsrt4jgWXkWbcS8AicQucbLPeVB1AH96B44VdbpJbtzxP4SgZTd3MhjzmMBGHLqsAs6TiYed8XCj2u",
  "key17": "3t8jFH2RU4vvFZ2C2RH3NTT7KF1UXqi6vmMt7Bcx2zaWEDsMXmkrVvsD2feLyUq7yL8KTRnroMH56Cuxdgjn5W3Z",
  "key18": "sKYBRu8qX1LPjVU4SzscRRD5dH47VczZa9nNVtKRd8ZZMVWzJwp3hDQjbpWpARiqE2wANxrA7nitNEXKkjpUaCv",
  "key19": "2hUg2D6M7gJ1VeEDx5Sqy7EaMuA9gzpXfETCmsVgS62ryTjdYzZKSqQ9GtaXrj4E7Pt1B4S44mERKXsTdL2AJmbC",
  "key20": "eaWyVjn1XCrwWGSrK2XH7TKwShHzNNdX6hEjcjE48QzHnSq4GgMrmATFtHdbZwqWxuYW78qPqGMgpcGr8sEQLFZ",
  "key21": "2yYfDMHobHvinu5KhuUKMxB6GDwuM1iym7iKd1eodmEhMe5AoFwCCtXzgi335fwGvUw8UGoSzA6VvVSye2DnLWsx",
  "key22": "4hrFA8q5EfYWgH4Ar87ygoHsrjy3vV1JhsB8xpdpUGud5Pd4ZPaXY9PLSgJpnF8LABbtJcDr5XZw8gzE86WjFcbW",
  "key23": "bX2yJNESQcMY3PPCqWER4wbsMjzV7jg22vxRCr19KsCMkR7vPJP7HSTeFDGHa1J9516n5Nu4s8vm66BD9Bdk4i7",
  "key24": "2yxpfZxr6a4vLpK9UzaNrCwT5fCSRBUvT6a1d2PB3J4aaAE6GDkz3YTKNEbaxHYxknRsuQfwHF8ppiHjVkJv7fKm",
  "key25": "27gsKTdWVrKikquJibxnWRqxyqTCHeJJJx676xnaG2o3MYJggtLFAXqVPT5E5PhLwsDpiaqTLZYxNeiBG2XzTKAs",
  "key26": "5eRMK9aG76xkm41xQW1t2MVeXBc9bzuAqHnajzmip3toqQHG4WXEJfuSFb8HGr9rEfRTt47Ny94cfY1bUTGyxuwA",
  "key27": "2WJ3GiA2KoMHwYT3HXPua7WFUw4nCFYyrceJGb9TDS79ArgVRDQDvsrQERoV6yXhpfMSPEGFuuT8D87eRAz7QbcE",
  "key28": "4nyUuPTNBDPTdWBL2wAh5mE1v7cpnJbaoPUxgLs3QwtLDb1qQZ7i2rbvu7PrNtRga7h6DNmx7mfG7Ef423d5UtxC",
  "key29": "4JpaXbLKt7JzjCX6Bzc5XcJwdhsBWzpGwxLQxThasvkQzXyPaSjEnDfnraPeXmppLJHRHXwBiBKSCjPfwSpEfqHJ",
  "key30": "2mj5jBZcpnux4tYfLTrFVDpcaspahNWPkEPEyRxbdGZxTpzPrPZFSswyarfYxyfJLqkYFP5ZB2EsBETFcNUf35bm",
  "key31": "2tqrPLCVDEQ5CYKQHavaCGtSX3vgsfZ8qwMitXHLCtDqajCt4eJkK2VaSJUqFKGMWnzGksNCWFLn8tNoMLDFQZff",
  "key32": "3QFZCvALBvM79LYtfrN4AyYnbd9ESAg6CasmSHjD55K3VCFuDc9U1tqtYcHKqTxyAnBqKza7JDwH2NTCkNtq9b34",
  "key33": "pMYeBJQ5MAE51RMfnfGEXtSWnZK5CJyTRjV6M9onJcDyDtHBJXFrJnNfx39K6sYaZx41A9XxcYkbEAdHq5jdjBL",
  "key34": "4hPTQwBFpzCvpfJiG6sHhbn9JpUCNehu3Qsjvvsmc9sba3eKtLej3vnwNrTG759dQshjABuKRmMda2C9N2MrbHBJ",
  "key35": "5CtnLTQVysASu6bkw1acPkR7fZ6PUdr1pjdLjuJ254TjuTUAAp8gmfreJGcgkDcvwqGCnajJxiv2REFdyuEejkBD",
  "key36": "5ZLKrd9NKfDtFS6PNxr991WJwrrt5RS8DkN8v8droPKUBoiHQGoJeAnNmAA9Y4xCfP446UG6tzmTGJehbZR62Y79",
  "key37": "3ghQmcUokdWRdTBBXoULks9y7LAWqrdVPa1B2JNnRF4oRHpLvGzE7MFxg71UVh4W48j8AYCxGwZ3T81jEm3d3Ue7",
  "key38": "37ztZnFjMzJjkAXjFpqTB3ojySvWNXnsTYZMpGvHE1yuVccQukankben2Jx8zMFqrx55VzrBnP36KLzhkM7AUU2T",
  "key39": "4tHUJJRSA5pGEf3yVLQRW1WLt1HuK9yiFLMsXeAwWxU1G6fswsxQ9fowFdVPo3BGHrY5Ro7AiNUVHZoLMq26JBvV",
  "key40": "61AyXxcjhxcXnAxkCfPsAiUC8o7wnohyEvwAcjZjQZQrpRGkzwhutfYykMAftQNCojirG17xCXB6WXpfUVzD8pzd",
  "key41": "4w8wjenJNWXnwLMVCaY1NwfHZFQiiQjgR6M4eA5ebEi8ZF7JtxnEdksh9MZ2uRvr8Yn4a87VjTjB2ZvnMjNJuuPm"
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
