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
    "5F7DPQreyCXrBWMtDXvUEceiKtcxL5DhryebrHXXswP1y55HouNiqpnDdtCd3SvGpqHVVqZAZ7SkCk1LkaYmrsWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38WCb78KwvBzU3WHYUM4AwFnpZbNRpZkDy5ykRbgRRSmAfkkaSQcxQQyHFj1tdmSaXnc7kUSnP47auPUSoCeGouV",
  "key1": "h2ZxKimLJhRJxUFsgLwSUSxQbKUmhazVHvfzF1AnDRs86ooYmzHgQS5kxK2cytXcPspodLXjb2iCZF9dn45MZ72",
  "key2": "2ugbPNh4vLamBTktHfHsYfan4EwTrdy7kj9dZ3vPD5BanPAqPMGgBwx4k8XkuSKcz2eYj6dGGP1VJdNULdnn1Yrn",
  "key3": "4JM9wYdbDZc3ANvCSAVEvuFaQ4ZZvCRzgycXeP4b1oq2RaNmbtskTt1YCWZsJ3LijgkByb1hEupwkoo5LsTJJmze",
  "key4": "4W1bgCVgwk3fNhYMXZZkY2ABcdvkUowpk8jrxUBtjfck1MnrLVZGRZ1LJ1NDsTS6VWBaNK8GcC95E9gZkkcTYBMi",
  "key5": "4yVFQWAtFo8Ff5KemUY2N1gW9LPDAWmtPbqesUCqyqX4g7sYsuNghSJYvH7pP7pWowVTRSPWYtrym7DajbpZkKTP",
  "key6": "58p3tTUnnEFKJBtSXoUEAZyQvyXwV8du9Ly5M6Eb1VDRraD5QETYDd8r7Bx3wGk3psm5U6BdBJJzdnsJLLcwJVYZ",
  "key7": "MGHHhVw2ZZ95LteSsH7Q7GBUeLejsX3hiTofBejkExDnDSrNssgF3W1NrTKmGVps9EURtJTJFrfU5CtNFxCYkZE",
  "key8": "3chLzDQZ1wm4X84rH6C9jfZq6JeBTXP54ZZH73phmSeFo3ivZ1Doq5XV69CCpYYoUkDePS7a9wfqj6NBonauVuJS",
  "key9": "4zsJH8Ge7q3H12yw3MFoGD1FHczwUQTucTwfbpkZcYEB3Ci4eJkxi9jurfWiYkGxseCAUVr1qaC2sopBkdwrpeF3",
  "key10": "4pJksgwKGa3yXs8BDheuTvZ3nAZ3FRwuPKrN8LJu1Xue2xfZBzTZ4giM6jYfVwtPLx61AEdkSmUpA6MXrPFyDFVV",
  "key11": "4sPCU4BqECtoBuzvfnHrJBf4ASa429XofvpNpu31t8SaqbAadM1pHxAcBWv1ZP4L3pAVMEGNZryf5aC1shc72nrw",
  "key12": "5s8ZGNR1bJWLijsdzC3r7ae95CV2fAmLE1jNKJc6nNLr98dmabzhEHkKmVJPTLyEhqxHVtRFg4UA94LA4haWGTLW",
  "key13": "3chwwz72seCnUBtWvrBWDCQdGgygRxnbbxhcWNPDeu3fXaBejDekCjMfcZAbyZeWhHs36A9tnJnryqfn9epV1XuZ",
  "key14": "4WsBcnG9FCrxteoghHPeLpes2PhYYmJRXHcJyFiTrpNfeBtzXBdqsR87pv27qquj8yZwX2FKqQFD9E1wbjghVTYD",
  "key15": "5eWmpoAG9XN2qDrGkqsfspxCWAyVR9kh6RkzPLojhqzpVMqBjY9BhMbp2jYH6RzSYKF8GfWPXFumJ4sxU4rVbbeW",
  "key16": "4k8dCqa2vCu1JizkbBq9KTwSmL8qaJk8xFwJu7GQAzc1e565QJriLyEgK7xPKpe3SRn1yqcWKRjuDmLQ3F8Xtjo7",
  "key17": "2byoBP81PC2JBZsuQJ6SFqxT1iQunuuMNyELiiQkoEZUmE2eeETMyMKDXjHQweDnaHy76hoUAKj3tkPMXh9BDyDn",
  "key18": "2Cy53pN3SFpEuLULt3ugDvtKEn96E7zLYgXvRoYqG9dEM3ix7dmqPv2oSHAf5KuuGeFp3dGUSDKVwWMwkEjrVf3k",
  "key19": "565e3RtCqUoar8YZDGAKszrqizJ1gMwxade4uZkcwperFwmtCgANW3deM3AvGCJKByAQgYPNT3tai8ug6QEv14fF",
  "key20": "QyQWwxEu9btMXKGrH9Y4kxu4ycEK3KfyuG3Ytk6iWbbykHpG13FReLVUesmwtT2UmvxwqbGL1e1kKVnPBGNxdoe",
  "key21": "HdR2jFzp5YoV3oAoG7Y2xW2Yp2dCWpCesdRQQZwSGDyHmkZGX9do79eE1RrcFnQPhaN8MrWWfU7UwsEHPSbof7B",
  "key22": "w8L6RorSrkKq2XWqvpziAUdC81YhxS4WWdcUn6X9RUXZA52wVh3DVYDyS3XEJ96SPnMpb5ffv7aW7xuboeFxFuj",
  "key23": "3mxh9JNbkGrS3WKxNh8toa1PCiMhadFif2RHh2YLFSNiTCxHNKBRaMs4gXaqF8z7tQL1wVCCo8Fa1SSUoVpvaDjx",
  "key24": "qFSwhwSXBBPUagBWME1mYAvZmbR1arGSVYL1PTakTypyZFGDPhPdSYtqZmVknmJ6CJij4icaFBG3vaNJ78jWiXT",
  "key25": "FjACdHfH83noq4T3PiGnLQS9rzmN91emnQUPXpBnqUhuKwxVEr6qn3FFEtDx3ovqhHHL7tBgiDYfcGxWvb4rjLZ",
  "key26": "4vwWFdB2P4Z3YHwEfWHw9ShB9V5hVzpAvRFVaVwceyTUjAxCLUjee28qUgyiAvbnEydfag2DWvMjxzFGs94VSfhD",
  "key27": "M9LokAvu62q6LDQCpkz2aDC8kLQjevwXJvFK8KyYs66eD2x48rpjvC1iSjZXVGm8ya37z8aYXYaPtj2HHhXWLDj",
  "key28": "5pLbxuZcvNhDG4BqFL566fkVdcsqab1MGF568ERrtgedRGeXVStgZ6LgJAQwhC98Rh6ELSP6nGViVv5uWn8QkFDG",
  "key29": "3bs5fraoLY8cWyezWzVDWVJfbeKsEcdjggj2bUW815TP9LNoe6WUsjjHhq7SqgHEebqsnjx5qvyMx6fdhFr5UEQS",
  "key30": "2fVoM53vF7ik5TT1eV7vqKUvRZf5Sp2qD1mpWGd8FSCkGFJYavz6yEGZb19wBQbFcHF9mYQwjX1qq4sTUVxV8M1f",
  "key31": "3auzgdMP8LzGcf9upRpFDgZCrXAKCLmbLGKRe2m56UZpDt3V73WSAXvbnDXv9i6EwVfoxBZHNEPn3Ai2tHyrqdGJ",
  "key32": "47bLRVkYWTbRbs11RLrCnCbjGQmqbmexeoVMxkv7zKUTX5MaxMjq8bk2nyZpJpm9ExaaRycpg8SJCGgTGCHuNtdX",
  "key33": "4e5g9rnjrJozj3HGrnKd1Fy9wiGj1SfFS9AN1kfkWfDxpoTrMA2MnwSQg2zEoZdTjxSQh5ai92cxgCJijpCZ1Q4j",
  "key34": "4E7t69pZenvXFGbPnU6xpis9Ckc3kVo3PCab9L1vtQJSmSADZv4oRAGFRydoYqNpzS1FZPWLYha9AZW3Munscufo",
  "key35": "VQHGJx7zsMtjzng5gYa4pYHx8fG1Byi4sfYEGBvDYWbK8Vxv3veky1ExDVbVdu9MbCPMhe35jf5HBcmhbVJHvwE",
  "key36": "49EMs4ru8GqqK1x5Jzk93iA6AvzrwH2ahFGon41vb1R6ac588XPbWFU1suTYxGVZaxACat4e9NDjJY5XN1HcLWL7",
  "key37": "3BotVvdPFcWX1vZfNksdfwCpGy2cp1md5oTGtixT8ozwL3fQRrGVGs6drjML1uBvZXTdKcq1bm1Y1qhTnsEPyzob",
  "key38": "UQS9wZiC3NKSpE5okgUBwPHDt64xx8VW9r8vbxh4tcoSq3YX24Khjwg8xdTdnqMQ6ET5EdknptWHB5Y9uYk8VAD",
  "key39": "2GScAfYTb9Qn2KbmXaUH5aCGfckQL1CEegfMFh5owjF1DNd39RzXaH9qZZunvzA1xdjNxCy2YBYJKoAWQpskDyym"
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
