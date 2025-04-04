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
    "5QhdRWzbTauebVCanN76qfqBJ8xm9BytrofzVKDaytoCuU1Aa4E89G5tVxGPaJ7X46VXqUkMLvTmrxxqTo7enHU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pmeW8PEjBTsJTMzxbmncoA1UAZ7iapH11YhDeRuicpM4vRAv9bnzLtJfiWM29uF9ApujFKceWNHvko7pugprRv",
  "key1": "s5fY1YNapWsXMYsJpQrHgmzvwcpVzepoxESiyhWps9yHFb5a2XQRoQKo1XsT7qsutTcDSBqjqNxcxMm6RXwZAYS",
  "key2": "2nZySvxoviTT36caq7rQoB8eshv4wtzysUWw3wvJU9z2BFoZCSaoi3UffK5e9kixPQRKGDYkCXXxV5VFGi3Bm5Su",
  "key3": "5FtRcDuBiZEKHFhq8kbCbHDp2eEzJrKGKwfXiwUpt1bM1DN24iQuzzXbJiVcad48jT3brgCPEEi3xyaMojzZ7Qf5",
  "key4": "4cRnnXgpA86PDBzXWXDVKkzJSXaB7HhfDbnkKZRVB1v2AX91EwFdX2Hi65PteWmHysJ17nCXTAZFYpyGi7jGn377",
  "key5": "28JSfkKDpUyB4DFG7o2n9Em3LTwRebbPNeWG8kgDbTKoYprhmYMC7yJPZz8YpZFqKUpFkh5rmoHfWQcAxvA5vzYH",
  "key6": "4G4LKc5hnjdm9TLvfn9BXyqcDGfBFVuFs8GfKrvGxt9HTdKsdjqLniuseQXrLdVk8fEWeXXHWYFzGn4HoH4UMzZS",
  "key7": "2JLXXQ3HE6TepEjnC6p1Xkv6xwjaQc8FZmnyyRrWYZBqfVshy5Y21qWVd6dHwCCR3MdSDjYpnQpAectT5NjN36V1",
  "key8": "2j766tWBTKu8UnCSmaVDXoQT3EVwLyZXw3vSwg2y6dzYp2yd3AocZUqWyaxu3sa2EeCF2PRkBb83a7iJVLrpFcPT",
  "key9": "255AFrkSEygmLrQHB3XgmcE8W2xrhv42H8QTBFqZUc2daDSsVN3j4Jbv3TdupV8pD65Xfup4giybeJv38dEVuGiD",
  "key10": "5BjM51go9HoSVqsE7LLQjArHEx6uu9uWjiPibkeKd2wrosjcj7nanRv1bgEtbJDF75J3SFY84xXyCYBwQ5GGWCff",
  "key11": "Hc5dGC7Ha22RCGuCB38oMvDzeTjQ6UkcXi5MtELA7cEXFCNax74s31uqRVCset63QnHqLGRr2q4s474ytFHWTNf",
  "key12": "owsbfaf9DAG2jGToG87H1JqmXXJpdRhjCxtq8zFqmtf6A1tshbr4cv1bnwsfoWc7MpNuGLhqLYZSWA8eEUbntY5",
  "key13": "3X5iWkLsEDiYQyvw65QbhkRNCaNjWceNx4iG9rRabtmYWCYkQJFL8w16S2YpJskgdo2Ni3P1HvzSasXAZwFZCi2T",
  "key14": "4Q8VRcAW4GmSj9kN4ooAzueRrzJXdRzyCvcNV1SFfEed7yaETAEHh1AxnwLJcvDkuKfQjnryD2YdZ8cWSWVT7Xct",
  "key15": "41eKHkW1qF7y8doj8hrFRuJ4eshoTfZq6eJ7uY1SnGZicKKGBwxswxC3WRgLjBhHzAU3GVwsW5Qf2S84Zac5qYnV",
  "key16": "2idR4GUGCumGX4xyA9UGjnyWqn3EbAbbTfCLcXhoTQP8YugsNgyGsKhHvuwc1yM5pXEnGtxXGxWYRk4NarW8SsJC",
  "key17": "3Jod56pu6s1K3ecAywvaJDjSDhYxwzv6Sn6DFhKwyqPgvxkJjnre9bfK3aTe5f9JT1Cfymskmr8vgjiGBYgg5t3P",
  "key18": "vMsFyffiqUF5Uhq3ErYTwzNbDcQmtzxTxpYdfTctDYUgtAEas4FZrAHff7kUw8uR4P8vjE9mms6EVTNnn1q8ZEd",
  "key19": "3eZwKgGYcRmKYS6ie1CiyriP5WkLoQeGthv2Bm6ud1x4ryBkrH3iMEjQe1A8fbx823cDMu7kNLhbgJQgfEc4ziqr",
  "key20": "kebv98AoyoVrKfwD1kFnAUUXqRaPzxwss1r9Gk3PDfNx6po1iLYjVad18iVnSe6hwJPiKnVNqHERGiGyttusakV",
  "key21": "4xuYgsYw7U9pSipcWxZa3ptNVewUN3TPVBRL7AmWWzoUTy4ngKDsjnizLhWWBZMjmrrGbnsWYQ11ZJUD8wR1pStA",
  "key22": "4nqgWAyrdxtbE4fc4WXaVRgMnHt8rZXCy6jrvnG1QKE66rxCJnpJmwNY9tzCwuweXdYTQ1w7DPRCYqiE4GsHUsY1",
  "key23": "39Eedn18wutDnzREViDxFBEj6SsQ3WNcdrLizgPcsrq9SqDhbMtSj991K95vwqQYd1YTnbey5ifToihHJprxXK9t",
  "key24": "qhzoU8ydJ9N56XieBdbzu2bDHxFVANE9oqUQPYCWg5P276w4wUa8gxUNeRjmcmBoaTiG7raj6nCKC23WC1CM5FA",
  "key25": "23pbw9BkBnRj4rTmBKMniK6CaWK6zjsEQD4Y91z2NxiGfXXJRXXZ6ZL8mPQ5GCjP1bxTEVhdfQ85RUm7VWmY28Wd",
  "key26": "4H35jqdEF7nPb9dLnmXiCztoG8JHMHZsqJYtz3Q2xJRQ8Ndy61cXe17fHa28SEVqwRsQFpfZvHp5EeiqR46gJbyj",
  "key27": "2bZYms5eQG6i7HN1eUcnDovgYvzY7rFy2b8WgdKfy6DS7Wdu71xQtZFz8KxYFFeQ68wmZD1fBpopZCoukLceR6kw",
  "key28": "2LvkSABaeDKjCKdLExzGyEK6U7D7bVrDNZqGYGyECB7c69NJQ3erp9nUfAVv3V7mY3up2B8t8ruxYmRpZWuaSpqC",
  "key29": "CyEgq847VCj2SKfvSiaknHrCyW3vtiD9mRVfQUVwXqgYMxj8n4g6eLdPnLZXFifckeeYxo5LjdsZ1hE51WfcGKd",
  "key30": "33bdeJYhYCpEYWbstJmXfVX2coxa3cMDxFtC2VEeS2bu2Zm3kHiBmfP3FnZpxV8XzMgfVX8xvKCjjuQeY9cAmebs",
  "key31": "oiXqSJdnJcq8nBgFMUuGvLFNETvECqn7sKbNG1kbPCisMnm1BLiSFBcVFjCbt2cHwxjQS1VN9b1fKVNbMPucoGz",
  "key32": "2Ep6TVh68VvEumuH3Biz7mq28DBWJMosc6AFR2TCuFRUPMpkiUGUZZLvcsC3rBSzV4D4ZVsagQHrDwFmoVTPWftS",
  "key33": "5SYqNtQS2hVAQZqLbbmVwtgbrVeuDXLsiXz8VsrWx1JTqJMo1h7rVwCGkPy3uPJYrcAyoCbiEoxZ3EbzBKev65Vc",
  "key34": "2mBQJ6coMmM8uLM8MnvAgniZM1UBChK5KK6rcWSwjYHDxhsUV5Cu8KLs37wuAyHSk1i5sxiJYFPLVFdxp2rf6dfr",
  "key35": "38fG2eJkzE8EpsuoRBcDqnT1x8Pkdivt8dgXRdt5aSWANyAKkJ5VpNdC1Wq2AykrNsZwupvVJRg995vwrNUB6g8R",
  "key36": "5kej9j7jGk9vzvx6YAfUjNdNmJzKhM7i6TUZPqyexaJAiMpKKVMad8xwfCvKiQ3ZoTsPEBKYh7dKMvkPgpixnkPa",
  "key37": "3WhqbfoV2TbAWXRyoPHp4dooHPXKbBCTjQUTNamezCqPiEekQJZLG2PqUkbEc9BuJmfvjK2WzHD2NXT6dHVxe69H",
  "key38": "2NPD3yqXcqWdsUU2e7iGuqEMQRuLw7LFY7t4kvzFzeaoij1HCMEqCghvKisD226pFcJ8v9Ydp1yXYfJtEPWMVZJg",
  "key39": "3nodccza1Bm2rpsFLzdUy4FVvd6Le7LrHzZdNCkcYRtTPfm8XVRyG7iEnozQU7YBrefu6fdEiG8KTwUYqexeLDbu"
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
