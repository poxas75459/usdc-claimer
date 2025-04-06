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
    "6DdXeudEfPGepZbw64Uqmyn7dRbpJXAmq3GMs6MJjs7HrKWEGh8gmUkEivtaixUQf79oTF7yYNEudsaXcQFvS4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byWibenia3d13E3t1px5z9r9vCFSrcwAgo4JsnUfnoki8uKdNXf8TZEJQ3jrfMeThrBzwwKPX8cDhAgYohGdUzQ",
  "key1": "3VWE9BnSTPgjsoVoLHBRZ9HbCZaWUPnnAuN1kykD71BnN8EY9ak1ctE1BjuZ51qGefjJ5Q25eywef1GDK5eLLXFR",
  "key2": "2mZvh74ja5NSvVeY6hyFoLYU1heggZ5oQ7bnGtrVfxpamw5LLxDSK42iQLiaZaiWPYfKiqSBuc65NuHnAdzFsc3f",
  "key3": "632VVj5sVGFTEk74cnWJZSv8YnktyE7E1Ni5tHJKuRYFqnBSm2EBZpT6axz6ndpEzyGuyQcv5zzk2y13qCLUGXq5",
  "key4": "3d5BHSATKGUBpaWs83TewmeNUTZ4qq3N7Pr7wZzXMPeE9z6vuiFVujDStvMArN527AQLAW4uhj3seAbHduJboNjY",
  "key5": "eQbgLx4eBwgiQs27CcLM7MbRx2P2qdXXpFVb4CfzWYbfBWQYfHX8KoXggERSHpW6mi9MKuvN3MMHFsmfizWyRNT",
  "key6": "3m4TGmdCb9EY4uHQPvHHc3m7mpotCdXccPXSSkq7ydszrQz6a4QnFk2G7c5NxSKKx3nY8QJHvrxE5SSXqdVgrJv5",
  "key7": "2NWnd8JN5H16SqHruHEpMA8BvGPJm7i78Z7hbZ76zF64Ad8RtE3qgq1Xohg5iZJsvZ8RJvF53cupnZ5PqxNCK7jj",
  "key8": "jdmiNcKMg7K9qYEeJbcTr68xp2Ct4NzNFEB35BCUrCvVS9ZeNVk88DqTMQ9cEcbgptqaRNFSQDvsgAbB4Qipsen",
  "key9": "2xmWVDvpvtTP7Xi2goTDaKYdHFciXQoHahgFgPU2fdcXvkyGutK4LKDH9wA5JHhxCVVQ442U33SvxTEQTo8PetSP",
  "key10": "4oi72VfAUumHSdzfvD1PZrKvLf7zbNYtfAnL1TZTtua6EDigZQV2uRRQMgBrBmYXnLt4bmBFWMFj7ccgwgA8QT35",
  "key11": "2zmSTEXAkUPgPEfLvrV39E9W3YvC81iiG7dbfYyGWYisMz54BQ7aAirz8KNKPDD1uRtZozKwU9CAkXyPimEDcDA2",
  "key12": "TgVtoGgMwXSMgbVrexykUD85cTv3zFXn33nLFvpWC2m22tvZqvKeDqkRvkdyACyL2nbrJV1j6beDmpGoXHs5xMp",
  "key13": "3MJzt9NQn1HU2GUkYcmGcnHVFdDQsPG4R8HSyJ6ZTKxQkY8yaGGWDHxgQnuqrhGPDRF2RHN9n9qYVZU1SX8AYBqd",
  "key14": "fqhdi3Dqu8MFDMVX17edjpJP7BKnpXWeu9prEaKCWMm9SzirJjYkEkMqq1yRDQ3PaNdrrp74BwZmKPczQUhfD7u",
  "key15": "5Bs9L4imiLKQCnGYcNJBxqg2Z2Gf2JXyE7F5SVMkXZzbzezJMetsFCAzdsFer5Ufivh3nV3hJ3KcqFRTWHrsCT9s",
  "key16": "4FMcXaiy6fQYWwnxfXMrahuBJJFknxQUc4FKaRL2DmUD4X5Trbppgk3fWDjTokfbYGCd3ddab5Vcoi3bU2aurtEu",
  "key17": "4yipX68aqZQLpNK5jkRz4DhBN7SudmDUE6u8aybgwvYJfzimJMc74EEFcuxY9jD9NxFfKw8y9g18DMTxjwyLwT79",
  "key18": "4T46rNkTZM7aNp4J5ivFjo6dgGwhtdgEnhsgxAyRysYYKhWe2ubpVRnPL2Vd9m4kB3mmUWy2V1kkLbBSwjbPbj7D",
  "key19": "5xRoSj243NvFcUrxExNZ8T2YMQd4yCCuvh7Bo8WRFCTPG91LwY6RFKX1XU7rAnPXhTfPx3GMXseCVfcbjWShURK5",
  "key20": "36rcKsgLVRFRB9D2rkkRe1xpqfrh1X9kNtiKmqjGh3AgnPHPhtxHDoSM7BDN21VGFSHh17VxyWeT2turGGbF5cR7",
  "key21": "WnXQKRG9T8P9icCEaZhwMrJQrbTC8UfrFsHe3vNQBRuDvz1pFv9yyxRuTEWdsDtT2BuL4nfmDL7o7zYERD57ApJ",
  "key22": "21kesUAfmy4ZyeG8KpmKm668Zfr1vvyHQDDTodA9nLsuRvTGzaDFuRBVFf9bMenpcHHW2WVBQPyJveruwQAyBjM8",
  "key23": "52VYFjFJ5vnhHgbSNavHzfdjbrYJGmV9Zid5hePKxrJWQMMi8XJvidE3NyKruNHZVyz1kCuYv5BgZTXDDqeVPpbJ",
  "key24": "8iwU6L8DLjRnoc44ShdPVJPhwAYzMSNcAT3yKNSpQXLhmwAntonaNp6sbMhX5t3kxSJa6XXBfpau65zkhzNPnSi",
  "key25": "5jmc81iZRs1Q5bYJpQjVpFoT9c5KdchWDQbMDLD9Gm6bHdY1WX8C3aCuZmDvZz7f8QGigAwLewoKEm5nzGCt9E3s",
  "key26": "2DZxsoEHmkGr7upAa21j5LLbKPfP7Lsdi5M81cBGcGv33KD5hdeEiAruaCFQiPj35rmcSFortphHCTa5ewen52Qq",
  "key27": "3AUHrBftnqKRUejBdDokGixHZHF9BHexg4stKWKrZcxWGLwvPHSs22rK2zSpXomkV7458A6iJW4YW58M1QKhB6pX",
  "key28": "NTFcghDge9hQtt37eXBBmDPxWjKbghAzFkQhJHeAxELHXbEukhuP9gC3Me2oFQ94Qk23ZgwSsc72SYKn4ivJbxb",
  "key29": "4qAxESe7vs5EzZpyMTP1iuWfA9F6Ps6nVSnehDwK738zFee53tPpQaAgBSdg2aaN1fQQYefTf62RTW6ZcXVpYB1A",
  "key30": "3Moq8QSnnirSQGM5ZBVNd7U6hSeJBYNGhRoyRqaDYNNiEDSVfqVvbXfLbCekXUWxLbCMWdo2GiLXufHJi8QfZsEQ",
  "key31": "4S3kqahfaQtYgCZN8rsPsdgxEzZaVwopKuY7o9pF8tgc9Y9xkK7Yr5XHuw2XCnrG5nzk1eCZ2oEmdyMJnPgeTvfq",
  "key32": "37zs4P8j6Q6he8FvyK4oYfcy21pjheeBnrpyFh8mYvZPettqL6711tndUjJQM5JfrXm9iJG7J2JoLZ62MDjCAK9q",
  "key33": "48Trmy9XnvuDGAjAYBQdEbNuY7ErbXQrHxhYeXwpwZyZjVPbwm76o7XMVLQxyTELCRKtbfcpGG8guDMHgov32EBZ",
  "key34": "2jC6X1pSAZehx8Nrf6BTtVnESsRaPGtaGBY3KTx4qdh9m2GtwdpgeqpejH8VuGjNepvzJiJqtnk8rYaZTUzTVkPG",
  "key35": "55uYPpnXX95p9F2oqrM1qY2nU9c8h9QATdwwi7oJSL1qpQnQrj7zNsVjaMxoh5s5KFPtHoVe4yQX7fgmjWubDNEf",
  "key36": "fs9fshw8nGb39f1wQ2t3Jy4ji7SZ7pb7HphhruxKoUmoVbvLyU9JLRgAhSmwdqpVmJBhECawA3LigdE3s2uGf47",
  "key37": "b2yCzerd9h24DQM5yG3wbL8tTHyX8eKR2WsWJXWH2EuCqf6fzUZdwGvmYZzztvUosHnxEavTTRaUJQkm9YomRJ5",
  "key38": "Q1aZHEKWkAz69sQaPQhtes1rvS6PhhvwESe56RWmwGUjjrUL6BLxFSsg1nJ8CPKiRQvTqUNdUHRpMo3gskCRsGX",
  "key39": "59a7XwK6MB34UmQEpiswUU2b8zhuHE4qos1xWvq3io8Y9vfkgK9zzL8NdW4egSPFVRGcjN8rLKFie55YP7PNTofn",
  "key40": "4ef7SfTD6NRRtrUj4RtvaCnKBZquZkF5mGkYWRpi2WLEbiAzbNkPdcgN1NuuQd1m8oCW2DiggBKpNc2nj3KnZXMt",
  "key41": "2fxfauKh1Cq7KgqRmbymu8ox5GY72SuyQNb89RbkBzM52z5fqNo1APVjcd9sXqQZqzEXmKVdkJ5zJMYDqAJhB87w"
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
