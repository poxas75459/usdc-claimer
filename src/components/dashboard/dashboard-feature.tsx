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
    "vdbxGExwCXJvbLZRc5bfsxWczfYTqrPRdPCfdh3TsCDC3zwzjmC4E3KtbirbqvTWUbsNApyuVUxoQap7qcuv7GE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58C1MPB6uTCnnSTbrDikQq8uQZTUHvPwzaSJqMqAus6Dbbs8ScbzuSPDVqk7h5AVWUQAH3Xy73U2qdaodGyQAM9p",
  "key1": "28WtJSyxZRbJ1HPN4Wk2dh4Qq97WQtN2HkQMjWoop9gjmCSkpwQjxZCH1Lkhkf4vdNBbgcBZzVBvBeJeMZQ1FR3g",
  "key2": "29FVdxbNdNPYQCc5uXMKyCiDZX81LaMcuR39LRWTXnMgrnvHSjsHd53EgDSQHhEVcdfdq6akwASZHGhLM8XzfjWw",
  "key3": "T4aMj6AYAsyZBbWNFdKeWLm29dN16uN656CEcSJuqZfnZEkB1aKAYfbjcum9HNQswyC36dk3HiDn7BN8rQujvJK",
  "key4": "3nJWTjxnJi7NnRTrmoPD5hZTKCEEYYrdWCK8Yxj2c8M11p41mgR7gRtnSzhGjRdsiTwcEgAjvTqGZmKdkTkTD45b",
  "key5": "3sef5QQXHUcP6eYdoQcVaF3CzWZAWhp413i3iRNVsPvEd7e2WqLSVuoHH4gebWTgfA5AQSAZBUFy5u7vCoj79ZUC",
  "key6": "5FZkJV4Sr79QzMk6AqAGh2CqjQeWRadp8fqGb8cuZ6W47feJwoiERdgqLQbbkQNHq62M738DfVwvAo7huebSiqk9",
  "key7": "2rogrD3EC9KLVi451Uh6uL3QXAZVAV4b85HftkGu5zKpMYQqjBXBrfVVk4WG4M9GndPqdaqGF2yh9hsRabsvJLPD",
  "key8": "5YypKqzn1KrAgBDkrHR3wzJRn2qxNobC2i2mEVx1RVehxmRVE47rHhYWGxxnPvt3sYkchTtdoRcPpeXFACLvuhQt",
  "key9": "3Ba6N8DrsCbwF1ZuXUEEjES4PaUh81psUeQChhBDquGDvsQPNmp7WWxtq4ZoAfurW1JnKdHmVvtiEj3Dbt6ehTJU",
  "key10": "2jWm7ngGFJ3jkKaoBVZ4zshTQQCxD22DS6DaxqQeRrRyAaXxpsPfoaq7SKLmqRBsVk9EdCnV5KJwJWfYTVUomEqj",
  "key11": "5bKjRvpUGDK5xdxQWbP6VDkvi1wf1hhm2mGGNcFs191LeRgZmZF3irEbewLzvsSMu9eEKzSRnRwuf1Muq1yQHgwo",
  "key12": "2wM82R6XT8eZD9ucZh6avcK8MUCqCkhNbMpxQUNxBBc6FZuJCsW53192GV2L6vcVnEcacrXfdDHHFuqePd5ySGQi",
  "key13": "2aty3dUYBF148AodCGCMp1gq2XMiX9qgZ2WHkb66zRAq2o7ku3enutPKvyDTsSxnWM132BoRH7m7sW8ZY6Keoucg",
  "key14": "cB7oHpUKTZpH7DTYucJh2ca3NPAWLt3LqcHyJbChWqYXfm1xngocrPXwjB5bYqYUgHCuBRtXkRkD6QWgGYNm4Uf",
  "key15": "5YMt9jipJWg7CSXXNz3sYoQG5CT6P9hYhHzmPZQTpExScpmq9fP6q2cjTjVih35ifBBHUduLh7xBjqCiFSW76sfq",
  "key16": "2cweyTxEHrHzkNkd1cnHuShH1JQMkgCSLp2mLuHJpL1uURSTtL4AMeog62EFod9q6Xtro8RMN71FDeEVjSYYupy2",
  "key17": "2KWSwTaMmXgziFKTsTRGkVjSaQVKmXguH3UbAgtg8q941XQ2mgekmZ7yPZdjDvXXDps57c73ztmSYcyfKNmcknfG",
  "key18": "3GH8JJS1CMHt7kcPhUGr8EvSP5j74ufxA8UzsGrCRYeXJXmzq3NSUvP6Sf6mYkarGimrJiT6KYoLhbtGp8enQcQc",
  "key19": "5cDwsZqXrgxAAewr8xF87FSuwWCd3LBEWcmnSCn8MKJGQm9f3CeEhErRpMskuvQ17yoA4j7LaXCEKY3mAT3yGjPD",
  "key20": "3YweqGxg2gUveif18SuN1dCEQHVg3P8TJVMUkdfgAYCzmt3meVYYkVBM36rS5dsRnGS6KLUHN7nVqv18Uawjp5Eo",
  "key21": "4BgSLrTKcxbvMUegnMzb7n2qZZnutGQeHiGLtxS7Ho36nB3WUsgUAMtJeaGmSzxcJT6Nuy2iVKELUnnyreCYmQcr",
  "key22": "5FmVZTyns1bzhHz3pRuL3Wsun7QoAVSWKGuajA8TyKxEEUxJDyophJRUs3nuKuYWnpvAoGCzYn3cCHHhEJ8uPVX9",
  "key23": "2eogHyksmNT68ZAcNFYC58b5Zgztujc24BKMVynCf5oEYXvM97DjiWFz1EhdPdusk7DsKbTpGyZ9RNwksPe8v8T4",
  "key24": "3LHgUypLLYEDxbPNLLcPHrE4jMte2ioA8ipkaMDzjkEVPopaJRTmKjHPLGeESD7qQSeKMyFGkf7NzVgL7eA9x96q",
  "key25": "2yDPT2oobUqTaWHXSqvhjziVqNqFgFaUiRii5tUBc4S3xwRQrf2qYMRccGyPdAotZTP9mUPrKVSzVMJCwY4JKuv2",
  "key26": "5Pk3j7GQKxkhQfxRc8y6WogxPFDZPg3ABJsCnarkd3h7FU2kfRYT9S2KhUnEvb9zU4vkPevHdive6DU87fRGpnx8",
  "key27": "5f7wSNYq8LQa9ViktzFKSWnT7Z6wzTShymJGh6Pxwy2T714w4GnpaCdax5eiarsDuYFig3zEVp1eiEfToSNL7WPs",
  "key28": "4vqTTXPpCqyUKC6BVb92a1MQvkii9sZgahEFPK3dbzzByKgtFFXWcrWCHZKSeBZJ84sSVa7Ay49GKMRo3WZNvGD7",
  "key29": "4KtMt4PWn5WQd43dS3v96JQCbk1DVyDMXicnp5nP3rdduagrY3ABqHBfZUJHKqJ2Gd26hxcN1A5nJTARJYTVmZyo",
  "key30": "5AxbphAf5hCAY1rtv8BdMnpvoV2KY852DjY6pp4TaxFN1Bis2D4qGgTxGr8KkXEzRftEPzGATZp8KcFQ2v2DhxMp",
  "key31": "5rDg9KwnbrK1Vo9Zagf9FZSGd6djfbWitDmapewJmibe8STrs5KVUxCQqY4dLTimDaQpyoWF2JR8fBcBcxKp6qmN",
  "key32": "5Fe1kfbvy5xb4Kn9N3i8aU9GcSkEAKM5a84hKZhsx7M35GpnTQ3PpZT3FngHZP1DftqTyPdyCcSiR3SWqVihJCbm",
  "key33": "6psU4vjas2HYtGYHMqEsfppWhkYwP5cqjwKrgbV3ciqBpzs2oniyee61euJNf9jHKTkh2wpEiaFa2cwPsTzsqMZ",
  "key34": "4T7PYsR6ts27JqCWaTtLfkfWAYeue7v9F2n3X3wk2bTwkdQMZvY3VcdRN9CUFYrPJQ1nd1kcHdtxhX47KEzscnuz",
  "key35": "VESmGq4HZjBa7dzW7hg4CGcuzpMvyX2xHFkAiqvGtD6kPYpgf46D6yTUTD1knjUnh3w5NX1ZHyJFM9AjZYSK7fx",
  "key36": "5tfp68fv7qTg26FgtkfzuaBvwJABhUg341nGXar7adRJxYnGngbRER7RoYv4NztGRU2MtACLSQW4BFxazDhyvU9E"
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
