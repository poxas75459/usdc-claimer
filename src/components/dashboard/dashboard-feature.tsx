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
    "5iFVvFbBwAXwnmUgJ16d1fnLZJRcCTJmunGN3H2XNkZRccqirAwWvfqoGLKfEa8dXK75gT4kynET4khVtDjminRM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKHHeTjf8JJBiNiQVoLwb3DWRHHoGMWm6S1HpdXPVAMjoREoUtc8U2VNFnLK2JxVRaXRDEKqCwoxcqoaczrb5cs",
  "key1": "3k5DfGaWJmir2N7jGoPTTcerH3FgeFvxCzJTNqvRx9dMeZBfoYCiKdHXtZ5yAN3Xm34uVqx7khSu5tW62rfssZ3a",
  "key2": "2KLahZTWt6Ju5LC7d6xBPZRrKAzqo8xUPQBGEe8kqij5K1E5G2Vj9sBjSwRGGWTpqBesQNQUkVZ8wLJaQsUqRXTd",
  "key3": "28r8ijj4pH1hMFGmw72cdK9nnFrjmHNZkGJHTPsXdGRmXpp6nvgAnUFCQsGU6Y1zF8Gk3qPdb2HohQFvC6R9hQZU",
  "key4": "63oiURBHCer9MyUKAR6CHePSJ4c7haFAY4yXzeCnEiidJ6CdASJWSYwxVBxN6ZWtPzS1HyugypCjNu7PxGi6QymM",
  "key5": "22VnfvT53gnAwXrVAWVFLmDzmDkZhN4fKZGPhamfULL7zMwkN4zyts2hyxxbJmZjnquVdFcDKaWRr5t8F1Xy7S2W",
  "key6": "3PjHiFRMk3SGSXPDJ9X3QRXSG7SQvaNXDfcMFvYMxJLBQkRCqGc4tZEkiyGJqPLgf5hSQXfcG8XHBYRCLwVQoWcg",
  "key7": "3TFfBJ2T6d4Hyd4E3WNLqJ533GJDLohsvHveUZCmFDhXYymLqLBzz2saj9U5ZA4cHrcoTEUYkEebnjo7MAvJ3Gyp",
  "key8": "2gAN1iWYfRADq9z8wUcXLk1Hfnf2W2Qd454KVyAeuv5CJ9uV7Hf1iZJj4hJ1yexyee9TFHdrH1Qy85dU4mfkdnaE",
  "key9": "3j1Pm4mYQaiFUCWJ4m8rtqqNQbggctowd1jEDQSe3ZDZpBK3R29BLv3oszgiGQii8eTwL4d95w4dpTY3BNDZovx8",
  "key10": "3stRnAwtxupkayUFq3BvrLHY5BXyqV2W3Hb7YkDQKAngY6pLCEwuTJvMBZg2Ru9hX7aST44wXZytodDxwEy4TxQD",
  "key11": "k1VMy9JCDMbhzXkx342N3JE7oNXhay9uisMAaQRtb5ktc8d9HfygWidY2owiG1iLBMxJrtv47X1mWHVqjn9HjuW",
  "key12": "5s81zsH2ufvK1xfVEUnCgS97TAmPDbWxNk91tzHLGgmwywFPjV1EdaCDpW4vKUJsLxu877nffSeYZECMGvDkZTTW",
  "key13": "NvM2qK4btEkQ54iAeoDKdpPDCxyAXu6a3WKK6BFbYDqXAxqwxvRJABH1HHLHY5Sr14it1ACDPh9QH3ic4x9mwZM",
  "key14": "4aTEAhw7gKWmcAcxBFmawv69avScDXdrdV3QW35EyinMJuvkQNiCcXQXudEFMTarLcTfT5UcyFHY6gMUSKkSVWKg",
  "key15": "2coYvmUjWA5k1Ap7wh7JPht6rq2dYFbX6MmzEJv4WCGoTQzqtjvewEZy86HR79oe1ZcaG3X7e9dgTNtfr7MBwXkC",
  "key16": "1iQyTENHWhxerjwpTsB45WLrbmgRGosQm57q82FNF22Po8Tc2pFJow39KiqA2xXd8BamQVaSgD2RjauteZAUnxu",
  "key17": "2cQ4fhS9LbyVGUm6NA9cJwWbbm4L817hErxYhUWb2rdkVvXTq5D3dbyVhs1hRux4cqEiMX9Se8YEp8HLET1T4fhP",
  "key18": "3i9LDqzD86gQV3Lpz6PuYYgKjwCQMk3TcziaWgZWgsRirh1QkJtz67sbXx2JshxWn56XBc8yjekt1ZuJYTUXC5zU",
  "key19": "wNXmvbwW7hK4fQwsE8qqTBeqwrjF6YbgsX5soFGsvqbuEFyV6RDbGvNu5qVffVqVHCQUxCT82Q88d9pf4iNKPZo",
  "key20": "3wMHCpQtvm3mGRH1T9YNantRN4RY7zyRFwqsGD4hombAUVV6B9mwPBiTgJBihVegtEVbgEA6ZBXoJkkqKVFTBK4w",
  "key21": "5hVQccQ7GShFXUxg5iXsdqvBJaepeQsVZdSBFAdicRxWfNav57dNUoNpgLsbpV2RRXhAsk64c9MBQW57nWyCmeFw",
  "key22": "3zHphDXdqBVhwLVruuy5iq3nZUsiiWNVCt3pxT7nKmB9EDt7LX3d1CF1bmsUuwhwAvQq77NaFTWGMGhwVi3stjFr",
  "key23": "2uYNkZFXKqJQXhgPmZZj3sznJHPTd5WDAKPT74zQCFAfGqJm9m2e4PAPppCJFmkCUNmQjr4vwMnFSavYA3ykHJnh",
  "key24": "2mNHBWGStHgnVEVyqb5qT417L1MaUSaFQYXMJfVoPsK8rircKw15pSf7yjkDsfuMhThfQAt4jHKPZhHMGFwkRsGx",
  "key25": "3KtTzhvHULsUjVUvU261JCtBs7qEmWKT9rM8LRWa4EBJqCkZixHEfp4iE6DBwhfaQHt5VcjJz5AgXDWE7rqVCZ3z",
  "key26": "2KXMvh9UZiwbRLUY313Exmddy2wZ72jH3F5tYRv4j7y1e9ZSDMCmHV1AYF1MD6RCjBht2eiaE36MRmH1eWYmPdR4",
  "key27": "3z9QR6sfHJBvyeLR6ngMLPksxxRtBePyp3Db1trU7bGq9X18C3YBPXFsht31atshSrU7Uhiq7tPgMqqBNvc2yu1x",
  "key28": "5vNqB5TMYN5We8j5QBkmopuYznC3gXuJEpQCByrJWERtkj9mMScxbZZNoJ3oebEBkHo6oAHBqPMGuS8T9iqGSuwE",
  "key29": "4EMCRAXkuCWEGULRZArXL168TMRR2TdjnkTdSQeJeEoJyctMKC4w7k5rEE2L7oWkcEaPT6H4TYjsMuQU5gzNvjw",
  "key30": "5u321cBF7Wd5AMB9rjoBhVahKVHL5xXBr7Kfei51vHkPNj46TnntPEjv7ogzuXqhXVd5bKVARYHuL89EdMgF8RL4",
  "key31": "PvuJaZRs9NZBGdKX56PMB3bMnixyvPV7Mbqk37iLJ7kgYVbidS2oYuum3LBWHf5FixVkB911LpKp3xPNXnR6TD1",
  "key32": "eQv5VUPGCTkEk2a9R1hVGhh3SdUPnogGLFmRXVZv17TL84mZXfEoXXcMSomKXvS7AvrXJ5BUSh6zHnftQfHwyzT",
  "key33": "3utXTC1fbkMQAysWRUGQ4kPefkPEwjNR91cGn37gTLvyVuSg1vKxZ5vpjeCVDFocWW8auA2i2viZLJN87tmmSasU",
  "key34": "3kBKj4btiQHWQ1EAZx8oGTCeQ314DxPxe2j7P62Qjx1XyuAok3TQdNgD7GGwTye2wMG9zp8o6RhFoudgs9VHPvmW",
  "key35": "5mWvYKbrLJW1YpZNf3ify9WS1oHhkBTErwYBPxfozagUern3QMEU69UQGEe5TVoakxKeChHNRbKvepz8Rto4xX8K",
  "key36": "2kLsAFQoVTgkd8hycwxWNHX8jR7diGcH8Q7ttD2S2nwHEdfgMx9rfPvwWrg1NFAomy2EzrN7w5E3u3uhC8rp1oiH",
  "key37": "vDnBaewPfwSBkMB1cUA8jsuWUwjykg2Bs5BK3XosQ8ymCchPXRNzjPHot9NRZ6yGhKtLHzMn3G2Esq3jAgsajQt",
  "key38": "4xv1nm46NAexSMsSTaV3c3T6neJB4EvN2fDvzgF97VB4MRgvdxJJxt8TcKRuzYHX9mfYmCcS6YxSoJshWdjJ5rGi",
  "key39": "2zQyB4D6JtJJDRURdzHR4jm19DPEg2gX3mYAXGtFEg9GajCip3SCBGTrL835xQ5mgXETir5uJjqCmCYRpsvLc9JC",
  "key40": "3xCjABrxq5NN9Dq1BxzD3bDVpvEaJCyFe6mWaxRG5Y6X1RUTA6iYrDPxHRnyxtC5XdwohJSZpfDHGsPY7sDDqJV9",
  "key41": "5utCSfrB5GZTfwCAHm7sBfwiQ4BAMfrcbqsayj8MGuCnWGFTRt1KDvLBQp6mZTZ9LgkLwd2XiEY4HR9XkmsqPeRu",
  "key42": "5Tq2QRR2EXVrgTHqFmeiWUosd6nKaXA6utGp4HEPdugNqpvjw37MDQBNDz4yiBczoJefAn1y8h2mpjkk7tfkpAr2",
  "key43": "52GGTHqkBoQWT5gdQP9LPT6ix4Hp5SVU52rJ1iGFkdYuFtQmYaUVyyNv1dpNx7RJr4R2FSd6oCCWJHG9KoGtXdrq",
  "key44": "5xF2w9AptfQeQ9Rj7LysxHD8A7LSw6JsLfpR8athViiw8DhmAQhkNto6KePvfcfg42gTj1QE5JTyhTGyATUnfgeM",
  "key45": "2f8teJa3DHzstT5XEvgpyKEoZgth5zDMePd3GZqnbsyXjBVKw2BSd4GfZtvNLM3dYxEPvV4dkJbrqrAWzV3AkeVQ",
  "key46": "3pjzgH2xVq26nKotLRZTRmHmTv58az1pGGriJ23q2zoRChmrBEksnfEjriQUoeQQx9sn348MenqqDD1NYHHxoyd8",
  "key47": "KqWfMArNgeYz88wJvxjof2YPxyy7xbREHzdUjMWsXKyQaqyvzCQ9xNyNVUndYFANUTqjLsbi4na5KChNxsqC4wx",
  "key48": "3cVkFCFs49kbW1CWTfdaWkekfQKCW1VGdwqhGbDP62w67CBG6NMXYbAarFCJem43ptiRXecgMgCzupsZoPk7jrn7",
  "key49": "2smTSwnzhc32f5Bnvm4LGLqQvPHJkdkzrKDb8McSZBmq3KcdUHRinaVXUmZEMXBcoYm23ZMXTegUe7T9rwVr217J"
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
