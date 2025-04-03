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
    "4AhsGAwbEoh5mwYgZLC9EH7acSwqMVtYKSQuuEfEPxknVvxwoRU9VRyn8iuuGungFYTCyXs3kZAJG5bgC3io22ir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WhYLR7JiYwLiT8D5mGZs51tZY14wVmjzGezuFcg4kp13gKjdHWTxZ1ZDzrYDXJgJzd6tbBuVMyS9sU6Hy3XcbXg",
  "key1": "2tpg7nLGmFaWdXrmk35PL1zFxrh13HASPmHXSgMcajKNVDrtjyazirG2BGdTqJejEjjLmVNZUvLYPX8sVhsJioUw",
  "key2": "51UPsHG8nrZvhYfVuHcBBKxooRwRa32GDawC7rk7DXq1TUyRdYoEzq1sEhfP7jmJm8gfTCKPGn2LeBXPB5o33Rkk",
  "key3": "4rW1JfCDVBFMebs4sPKZ813SHY9ABKRbb6f9opiLbbKfY7dWD5kES3UyUzBmQuee15LmrAvzqJrkSRRHs9dujrnq",
  "key4": "2A1hFDWQLCbgEXu8a54iKr3ACfEzmrqJnAq72ynZTAWoCA6Tfo9GZC9gAF7S6nsZxYRBJP2i2BLuSu5ki1dB46sz",
  "key5": "244LZRAXD3LcyjtRWqe4Q6PLkpy3XT4mmGLvrPUQsgQU9uYXSUaSC8MVY7EktvVGd8WXu4qaKdefECERTUpjx1nS",
  "key6": "5tdLdq559tQf62ddenHPfqxdTES8s7dxxWzM4EWWgQffD9inCkWVRsHWpMRhMhG6bUFBvYKYXQtvt1aBFQVHFJJz",
  "key7": "3vZTtYVrfrBYWcZinhfoUt2hncZtvXBy2pJf4YRxvhMTiKt714DDg8WqNN3gwVjewsnMoXEcb22Sk3UmWMZfYbqn",
  "key8": "56muK8NqZDqrfy6w9GpRavBacajoKaYwmgTyyEZZPfV7BwZhQ4TGeT4A3jGGS2iSc35WP8YB5vxZwdVuda3UP7tw",
  "key9": "KuNhP5QMrPF9NcXhqtkyyZjsiXHhb95maStp6zvatPE23vcTi38ZTohwE9uTZAjxfGhHryUvHZ5pReir5QrxQCA",
  "key10": "mP78vqijE7miyRv1eWeCiYkf7fFSWGK2hoGWEJ9W51g6fd1P1Mg8NaeT9dRss9ttfbrN7kgi8i5tKuYweeGexkQ",
  "key11": "3rF1fZkevUX8XpM8UMrYaJYJGnEumdddp43CYnMxPYnBrg6ked41BV3RWXEG3CkgiXPGzqog4fKAHQPSs8RWMh43",
  "key12": "Mox6xGt6LNeXdx84RGS8AfoyhxcsyBR7x5KmG6xcdPif4nRrWSTgrjygj3hysdrFzPFbDyRx7qm1M5tTSntAFgk",
  "key13": "5cptjqZNgtD6TVeWTLUwrxj35n9n2MC5irj2A1xQjahKFPnA4p9ETombMa45bXSFTjXLbMWNHgFSRmQVxuyp8AKm",
  "key14": "zBTjrSGnKhXM62nGudQnXdE7j4FZpqwGJRivzxYc84PQG9r3uewzMgU7TxK3vzYaDv82ieKEGzKK9heQGFr1FhL",
  "key15": "2wbEZGZsTPtsh2bXc2c3TuPfgNSvuXyx9q1pAT49ZnJvwCdzmWQpEwjyjJtqJ4VTEUpZL8wCu9Z8LJrdYUiKqcGc",
  "key16": "2UDqCsxMo6Y3qWC7ZGQi2MCi1cd6NRvAXRC22KHzGmeKY5rhzLaRVUe7MZfw2vRDJaCCvCRCd4oRe1tVHjSg8due",
  "key17": "6L2cXAjdc5NsAQPTZCnrHpCd7pXxyQ9qC83S9ZTLbiK5HMfb3g3ZeDeY7eMiXjPiRfzheFEPgtxJx5Q9za7knBo",
  "key18": "ahcXLMDPG3E2LciJZFr2SAxYEyuq5dXrSEv2JNVb3X1BUh4JoDbqnHKtfMHaUwSxkBzy95e6YkYwBd1rrrqqB6z",
  "key19": "5ZbXLDgrsyztLqA3otE2nBDUDFjQCHHZcv1GMVxFUwnb1t2H4f7Kqgkx9RJ7RNoKSahaxDKPirHjsvoTJCLnFdbU",
  "key20": "2MsJrrefkWvaqmEvNRcQCX1123YmsHScsauARLkf98r5pqD2VsTaP3faX7ahGJBosfseQ5uARckFMrXwYE6d3rTM",
  "key21": "G3g3JpiaPAwoiZmEiVP81yqwKdjdi8hBopuDKXYtBofgWmCJUf2LHp2WsQzrzmQ68zPfCGpjyngaMqTh9LFZmvv",
  "key22": "kssQsYYM1PYgVzPvUUoBLj7hVMkHpdKnW74koBYmfSsqYhZG1HtMRMWkiUiLAqtPJ9ZrM99SmAq3ea1eNjhjCXQ",
  "key23": "4uwc1R2dEfpuP7xPvcZRWgcbhHTynL9HS1x7zgvXGfGeRDuXTHfDG4vXXL4q7mQF54MoLVrALUMnSiyiPT6LPytf",
  "key24": "4VpRCpPK3nGFASJtHYaVN8iBXcci3fZts1UsNPhtVF3gF1JDwkj1f4EN7sbvkvRAoBznFW9kyY8FVxo7qDqgxSAx",
  "key25": "25kX99znpEHq6SvYSB5PG4YCpx7GV4tMZ8Err32CcHXpdSdPPqpWTxuYtnrhjSrttauFffqefMGRfUVnmveG2pt3",
  "key26": "UFavvsQs8WGmqrUqenv5WfiCgCyYfBRiTFfUtddANosWeYFEdyBK4PBS5okNjzKFj1SJeuXTessgopjmkuUwEYW",
  "key27": "2cvwuTKaFuYeikSKz87yaLkLN7W2oN7pyVc8Euip98NUMkzXkD3srvZ6LsfEjX5DueSE1d9Fra3GxX77NCYfVpS8",
  "key28": "3QWk9TXc95a6CzLKiLQhgjdX3c5KxRRZVvco6cr877oH2QXwPscHgmi8kPPCbF71g9kYfRrcoC6rkHvBDEqAisN6",
  "key29": "5fAq3RWPtRL9DwGM49B682q84DTKrFoYbG4PZJbyyde7vxd1gTPaMHpgbX6rJNS5X5xUhu9YqCDiTHsJ4Ru8Nne9",
  "key30": "wMa6163dmsf38AaFXGvCcTsPYDZSfj9L6iqmyBCyCTfMELU9oFu64nwqq4X6HkCM528g3GmZ4dgkk6r1XpEnjhT",
  "key31": "4FbnG7R7kLs2HYmD7VKVWt1LCANUETeN8CEXouwGR1eYvE99UdGmAvPhJQthNv9uPtdgUADHQYg9qjz4Q9VSpnku",
  "key32": "4Ln54UiSUk9BUBCFdU6g3GVJrUZa7JqBihvmARd4wKgQscUuitnLbFYkEdHpq8bUJWPQcqoZETrDZUTTtMNMAJn9",
  "key33": "4TnGNoyPiQxAKJEeDU9ZSbFViPK9rHFfGCRDEzuKZmrbPRYZwezZoFsQNGJGtvzN8iccbnvBB9gWrJxH9dS5YHp",
  "key34": "5S3GwZC3smdVjuuxjjv424c2FBrVg5dSZXcm3JcVJnT9otMAcKSujxd8Awg8F6hM1EtsbPrQyAjGvMyQ7HWBtYuj"
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
