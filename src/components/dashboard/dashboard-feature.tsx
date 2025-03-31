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
    "4EYPYHSwGpiTTNNczeZno6qR1EMX3VYjkLfvHgh9RGH5RxAQa67tVWrnXXRmTotM4EEBi9wuL4UYA2xkNupLU8ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QpCCnQ86sLz53MCKueg1Be2TNVBryj6dAuTzFwLjfWrYk7FK9U723bYChJvHEn1zLQ5ieWN36NRYctaNj26KUmt",
  "key1": "5YHjzpcTjteXNbeG7vVLsggfgmNmpKn8e7UsPXhbaPrQz9UpUYjwvdaVQwHELx1hPUZENoLPvMXhYxwQJLsGagpz",
  "key2": "6njmWQ7hg6PmEpcKvVtG3jJnUSTYNn1vPpdQp8T5SmgByxgR4Sb8eMzRFCpek8CveyiWWJscMeyEVWfa7cW1RDx",
  "key3": "3a5xhkyXpFFKsACYvNZdfH2NBKrwufPCRP6eXxWK4SXWcu5RLX42PH5eJfb4gFjPKyPDj1ThQCMzYLcm5kbrKo1z",
  "key4": "3hH7pb7VUZurRWZLomJ9v7idCJvfjTjbNwGtF4KB9bEMUnZCWS4vvRn8wgBphTncZZxpJGmGgcgk46sXa2V9Vdpg",
  "key5": "4gDbUkK6XPyu3qJcnyEZr4m18dcuTNAvfVnK6nNgQQpHVGr3ciKk5aCATRWgbq8suajLszoeeFPUdaUrBFCcb4LQ",
  "key6": "26YDoj43ikJk58TQ6xDnAKvtrbCDgdvw5G8uHtpiK2m7FAjFJJnPMouwEdhqhUV1iAv8Rkwop9ucwJzqDPu1hKvs",
  "key7": "7ruBQE3TH3F5Xrjf9NXWnAj7eKDLAG2tBhy8UEyJBPEY8FZoAh5qJuZTMCb88xuYb1R5gqsymbWtKjwHVD2C2LH",
  "key8": "5KMz26g1nX3Zi86yTYSHk5bd9Hi86jZ3RcXjM6iDhCdAQbmYs5LVqfwVncoS5tzhjGCRVLmVuCU6zzSTMjmkbgB6",
  "key9": "44rvgRYpSepcShkLSRy8LonD1AH6c4wQ5gWHRc8qnrEMQMJEict3ULGBvvcgwD4VjNfLAME5MrYmGtyNDpbcFABt",
  "key10": "5ZYs4G8VsA7wnkxYM9QWQd9RtsrAMEEpEEHm86dUqQWtwZ96E4F5RVvsec19R2uxh66TNgsFsSbNHEi7Pz5Jfduq",
  "key11": "4J5AkbvECs4FspdJBdsmC3zRrrTnhBABvw71YDfkrnWmy2yNFUuEyUjt4gD57ewDsMvMJkQJDCMM7uZ5J152YHaz",
  "key12": "AKFXMzPJTFczy7aUS7YS36acMpMQgrQSrLtCeLBqz3g98G8WG39yhiUcsGKP8C65BNenKeTyRzUgteudXao2bpt",
  "key13": "5xMts8vFGqRXxYxcS7pbHh2KXbd99EWxttvaT2A6s5FQqF9NjFK9zrCxyCixBHMpppDPso6x1mN9p1YWaLUaVYqR",
  "key14": "ARADRuA9bLTnnp2WZQouaQw8AWeZ3E8SxNubTxtZfuJZqDhe5rRxSeXoEEHrQVkv8FdoDvReUEsJjKmVjBELznw",
  "key15": "3MHnat89pKomnSV8WZndBEfRtoAFnFNU8gu8CasdcHNh6FKRAJkWbYaRbbm3MsBUH5zjd3ekFB4G1hqFqSm6aCS7",
  "key16": "3qQSqourgyiMxHWQyPhxy2wDQK3NDBbkx8vVHXqaGLuGE6VhjgjdA5rhF2T7rKTHBUh98r6B8iHRwuJmjvBr5kiX",
  "key17": "3TyPqhLXm9yFgw6FHdcKy9Y6QLxTKR9gV1jwkDdJdmLBuqS3YYV7QocWx96GxHmv7yKa6aUP8qhHvqz5dUkuhKpC",
  "key18": "F8zPLBiw2Aw54JMwDRZ7FKbTZHMEnZcZiTpKWBeG9Pi2gozuGrnLJscMHZBTtbydWAYe5ndBe6or1bURQvYMSz5",
  "key19": "7gBdvVozzRWiXBJSqSXPPHcgYCWLV1uWhDgefNfZpTf7L43G3AXkEPDsPUrGzqRf9wqCrDeWtqYtt2Dcudi2mx7",
  "key20": "2jsdi8qEueWVvQgGyRHFSUCnCARFWstp6zrrwW2PEGiwfbYdwXdmx2tJ4C8cZxhzpChqgLwAJjuKJWzA9Cm1JXB4",
  "key21": "5pDFtcrPtbnvfYU7PZMGYaPXp1UqNAy34C8VZcLHpY9rjH3bSHUqubF8VQwxrTqUt9aKYLo6VAyneezpJCDRPSVT",
  "key22": "2Y1aw2XzEsksm7uNmpogTJXihLfH27b5ESGuE2E49ZZHQRqfxv6ZPGSYoTJc464QpuKBHTyNqiKeqtc9UqBPY8Uo",
  "key23": "26d3tW4jd72X7gd7F9erpTKuQgMgrvNKVnHYBTRuTt3KvQyG5y3c3mRCP44u1hQZt2RKoagCvtxdRQz5j7iAKrPw",
  "key24": "3m7GReX46WsbQvPqU5YmevBv2yEuFC8EfgThpzhNWwiP1bKE8vgwvrsqkSSSwDyz8HDHnrgrdaiPd7kcbWgRgFJH",
  "key25": "4Y1kGMTGXy4zPtW1x9LvtaPbb2gUh3vJ15TF3L6G73aqD2Rc4cFUERBBbHfEJfBXCygAidyHmVdCaAesEuvWVetq",
  "key26": "5ayzy9jozCcfWPYN4d6ZbdNzEjrQbPwpFWVoh45d9CQkZVhkKQSfuz986oXihS9RLG78aBHFG9d6xGc2fmWqfAq1",
  "key27": "2upa8eDQGyJ8EENtbMDwpnCrLfU12zQU6zZhy2x7JLdmvdexqP7u184vzssSs6Xs8msNYio2DUhik5iH554cbpDw",
  "key28": "5XS7JZghpy1ZU89UX1ZqKJEWDhSy6PSLXv34cpxNUD7GqjButkNJPuoLz1ThvXCBaW9tTSG2vYe58x7TvjYqHtGD",
  "key29": "65ypdfduJPqMcDqN48zhjNvLNFXZTEkgYd6qLpSwHdejz99PovNC7ubHG7pmD7CwjLKGsL2DqzXnwinFDnPSUDFt",
  "key30": "g8kvfRcDZygTYnByfZWoKsoBbiD2uJ4ADpMv7up4vjpReun83Dkb98yJ2U6cq47tGvbMTFv3KkZpYoQvv1PL7ho",
  "key31": "4a7NsBi3JBH73t72ZeQJ9moPGSW96AywBnygtqESypE5DFcJ1LMmwLd1DEbRML2Lf31SuRxRbJTY7dJKgfXDVyqu",
  "key32": "4MKQfuWJUJ85PjuYyCsMgSMzqaSNrY36koufo1ULAk9WP295vGzVPYCFq1Wya8mmUvzquduUWaBPE2rXJDeiVaXd",
  "key33": "vw5LJCKeLWWHJSFb5E5BZXREcKu98gvnELeNH4TFCMcCKdYNYA4XSitwBxEGfTvU8wTBWnQ7h7qjeTTpjnvB5zD",
  "key34": "Logbp4gUZ25PbqBaKEKWfjfGoyfoJQbYSZfS5VRx7yA6yF5fccXx1Yfm7B71BtfwpJEXM9P8LvsiUeM3FUVjqK4",
  "key35": "5zSSskDGmV4v24wyqCojDp3Q1rfFWXvBZFHAtcw26PaFtMDAuB4CfGkHpD4Nu2PBK43iXmtjdKD8f86WY97Qmxab",
  "key36": "3mm2peVauCR1uUsuoKKtqcynYVg5e6oK38JneY7WMVdDbKPQduk7y6SyXG4MQmNfw2mrxZECZhdUzKTEmc2RSDvV",
  "key37": "5rshahLsmZ9Y7SgCiaV6HFUwBmT5QPMd1w6bDkSoVwVsDSC58ygt8bEQrdVAYoHgdCznqasX3xbaahuCosr6iu8H",
  "key38": "2yGopRhtV7dk9CGff9uLJ78HZNybK5nH3q6zSF8uPbjQKUCA6FdVAooxXbVUKHr7Gzy2kwh3xJ7V1RdQLhWzBw5s",
  "key39": "gwuehqwyfGsR3c1fZVVfkCWHUcT5ms8efSUa7GwaRRJs6bZFBQPiN6AAtJnN2qNzKmXWt4Lh6E8NpvrzvzMXdRL",
  "key40": "4iTi9ytSL7M22YrQWxVUxdW5BvtziyBBFNS1p2q56mPSe1MnvU3bAQiM8jmQ71gsbYebwLRERp63o58ihEzgbEMY"
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
