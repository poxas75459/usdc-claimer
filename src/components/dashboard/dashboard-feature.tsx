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
    "2Y2gpPgesYpqLaTWsekTR8i6Q3RBoNGRhgbVyZAxCE6vNGi7q8qpr2QvKqaT2ZrVr3ffqPfLN32WV4QCkxdRGJPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fnjv3q2EbB1tqUACKRu5JcKLkrhr7czpQJ7AnsW2TZF7iS8zk1sXkKsanhgLb82sdui8WrzCezCkNKaARFtsVse",
  "key1": "4dXFf2h7rpNhcsktUXsoTHSPzySoJouveRDFj6tsLMVvsS4NZf7bihZXCvMZik7kyUmra88HHvj4gKPL4K1DNPA7",
  "key2": "aaUppHaGcVE3Q3AFixx5W3yx8HQSYLL96MutqfFLNGWbeP9Qq4yYTQtJS6tXrJykTZZV9aaDCCigUYUqfmu8U2W",
  "key3": "4qs26PXbRGnEdaQgGz9vqDvE3FSSA2ejapoZLEye4mDSVaLiEN5Mj52pYRMLqZufAtD1fsQLbbLHdoREgpmUnnYd",
  "key4": "c6791xz36uQr8K12ofYcu3anx22np5mzZzBE3tZeRa73c1ENb7Srovcxb3gz6EGYFoqxKab2gMRiXcPHnbTABaR",
  "key5": "2tN6GeezpDzpc4BU48P4sNt6Lmp3cYDUhoSNDPxdgijJiF4sNTbK6R2dtahqfVdfU6AMHQwaKrz38dLVAqr9uPAT",
  "key6": "5mEKcc6MbTTkWXKvU2PVUyy1zD3E1UBEGKfL7iAdH4ruxfySSsLqhNFNyfA1NFVem4Wib3hGstseR8EZpWjiiRsu",
  "key7": "2wKes8TjcQqNaEwHCsQchBrdwewXrMCnqdEfh5yGupKMNQMC7LUzHe3qdJTB8bjHTtPth3raydD9xud1wkXhTrs6",
  "key8": "2wpV8sZhCNuGfnDWtcBh7gnZBbeW2qgpUbxdCWBi1VxhVACS8jZEuPY4ZcfC2ENPCHGhL7FfVfuHDyYak4ynNmAK",
  "key9": "42S65m4LWpipNkg1w1okfzjHj3rm5TAuRYuRuLaaCgaZu72VxPuCuRoLM1tnfHQUuTmHajdt3oYkDTWQjDM87BtX",
  "key10": "5PakVkbezdSQQN73ASQpZ1SB6epWp4ssS5EcQpPFHZNEqPwR3J5Mf3KJYFYofp9RGSFyNDqkagfmU9E7DTMvz5yY",
  "key11": "2kZHmVpFMNv4hoJqU62scjtmprfPFYkkpPzHGL9vhxQd7iAfijY1D7BcUpPLB7Bhk8ra3uApoMetPqcXNb7rQKL2",
  "key12": "4PCF9iGUjrGrUqa1qMb8pzrQ4yysGtmkJvAuzyXZ319c3ZBacV9u5ZuN1AnYimyeH9YFW3XAud8DE98px5JKxbC1",
  "key13": "3JVCctj2BWU5X2B6qmSGVkLP6diF3RJzqsrSZKdAiaDp8Uip2w31wbacmt6ggHqCH59yaQDvrEaW4hGpsGtmYrEz",
  "key14": "3QU1ZiCAhFzYnSk99zip6jZU9CFwpVGRGtNsP8J45FPdVeZuHcgL8TpzYDVM3W7Y9BG95phVScELA6MegXadVuai",
  "key15": "e3q7wYPt7WmTkaPCAhsJRd6iGHoQQhfKRXDUsmbjMedg4jZubP8H5xwYsdM7e3b8Wi7vv4iRpWJnzLqq5mFmota",
  "key16": "n7Gq7oMrMrKc2Kt4VnFNrjMzLTZLgcNxZikETMJRUayfoHp11CiZ3EFTJu85gmvrkvUHtFeC1CnAXoDfbd2PRfD",
  "key17": "3A3R4HNTmh9jdJAL8hgqoqQK61tTvkEHUcWqJqXr9uiYoi6w2FX7NovYx3VF2ezKuQqpXp1qpcaFxbFReTLjZy5d",
  "key18": "57rjyzvk89TiPPfoAAg1JNc9JoE2DdFZVB2rzBWcLkqZWEoPipgq1jHJN4rrKvPASd5JZffRtHfMut76VEeKok9R",
  "key19": "2i4cYqvDkHwBawsPPbLsXvQW8BKDs4vaefMtoF1SPxDNB6GJBmFyyD86Q3setjfM1yGbqUJkhuS5FDotp9TzCxwD",
  "key20": "UyEXTaD9A4GzbRzzDGjFGXQywPcStohaLPeUJaquXwe9CsHVUyZ2hJBKeeFSDJ4RWmoihTNY4hSQo1nYMKHGYHM",
  "key21": "3wXh7ZXocMiqwcWFhRf26739Wefv4mNVJzB4UvYEj9N5b6KN5aP8VcV4wo8X1su6Ct1do97wHwfYyYD3h4BExeyV",
  "key22": "3XsfGWma4isRMVhBFzkUzuqp1PjBJUz6GJmDxfwXfstmn7rdhxfBp1y6MuexPX8vrVr1SLgTjcWVU8shFvBtSHmG",
  "key23": "5hYFrkgZUyPrkdfHUivXbGmBUd1SWchBvfcGwK4rCXSTMnLmKRSUqHwUsfDPNbFhvV4JnvaP4TWiq4hd8A7Sq4C7",
  "key24": "3fgK5Y8GrcXYPuQqGQnhLd3jXfJjdcSJKDtjWF4pxTWiWWbAxZrgose29gZtmKSFv2qR5WQegs8e9rPXvq7L55wU",
  "key25": "D8brXcFjGywwyrtzcdtyXeHn5bhZi8dUewZe624xp7HW3ja79JMgRaZzH4sauCwwDFS1XHQHy8X9qadyvs8LC3Y",
  "key26": "2H6QJdaNTWfMv1RapWwhcZyxjgP94QoGiwmnZdp79Mndx7pTqTMLfuHAXvweLu6dZ6xRy3JzunPKyw1Bt9e7A6tt",
  "key27": "t8CvYUynNdzfhAsoDfWJqt3SmmpKVrmA6uPjXSquw9B6MydCGeQoJWry4SMoBTg1NtWDbLQSYuLWuLxYALRW346",
  "key28": "3qbALZydXZPJChRwPADBbC69p6AxWeUjneaATUbir9V1WeyV7sqexTVZsgsi7HY2sHg4TJpSZjmLHmmgNjcprUQo",
  "key29": "3gdTRTT897NGqbeC1BxjhMkeNbM8MYhxEbWR2Yk73mXoQx813SnEpnAYiUoQwbcGTCDAqJupKMy78xbXcmFfC2SH",
  "key30": "2pEaos5hnmKeGtYyyujtzBykAbdfisg5uR6UZA4TPL4jJBm8jVjwhNKn3ys6fknjpUSropFWULRgMCMYdgcv1h3L",
  "key31": "3Xy724MbZHYUp4kM6yfsacoJxkQxUTgLpSyRC1Afq6Hkv4RJmsSESvsF9DwuX98SZJPPkHmcgP8fXnXKMT2xAa1J",
  "key32": "2GodoE18v4yZQtGFqoTApaZjhF3nr5PRrBd1CMzWs4TpHdxZ1RPxRcHndHFNud955KoM9twyU7i17RfJjP3PMYtf",
  "key33": "3S2AP6zpfxVnnfwBVJzwTMYXBguqKn91otUL14HmSNSt672X3WbhEBhzaqPTtgS93bUP76xriTAXDE11CqeZQ2dd",
  "key34": "5prkmiGXQ7KMhWXxTU8R4ryTt78k8MUni8dGwPBVXtaXhZekGWhiUutQ1RxNAzVroihFePe5J21N87BvsZ8NpSj9",
  "key35": "3z8zUdo4HEb9aHLEDnJ95fJXghbF1C8AVig9sLVaR44iSW8yUULHJFoaYwhpqYBkFb3RSK5RcA5f1aKs2otTLrQj",
  "key36": "21kncStViP8zbBiTzYmB3nb37ptFR9YARj9ZnNRy75pcoa8faMNLLEHLe2eEtP9rzwQMnsLAxhUg56fqJVN3AgDh",
  "key37": "5stkR9M5282TPm7chGPhPBnK3SdhGJ3McFwsoc7C7Rz2mYSUUzXGtcP1tk88cStSJZPvBNURfZmdFU3wDSD5KLj3",
  "key38": "548md6w3PGWdphefSz5sW9c8HjdYD5QZ2qtpacVYhnFJf3YAC9Znq456RW58t2Z9vj1xqYJ1X3XnRFi5Q22vVdU5",
  "key39": "5jco7bxDHpkF7udp2tkxcsrApKy5wQFqMQouqzJnr4JQb8Km35ZSntV1KbQpHTdgdVP7XMLNanV3cAdjwtVYdie3"
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
