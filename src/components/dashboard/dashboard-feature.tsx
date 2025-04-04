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
    "62VmLLEKiVWR6bBh9mVviWm2rtHbXxDW8eVB8Sz6yovEVZo3RBt9rt7vDdVb6gkC8AMcnQLw2iK1jkhQYYVatkJP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bptKxYVXtqgUAJt4vCdoRaBgVodKRjWppPempFzNB4qNfTeuHYTZg1t15Lza4rjEfaDqqeWNg5TWuzJxHNrnTTy",
  "key1": "451MoWUvp88Co5MMqaf3RAkHNHj6V1B9HFzMbz9JCoDdfzwTBXt7onHEn6UnfibiTaQtE5LaCDPLLj3QPT22FGhy",
  "key2": "rgY5HBuRzaxhYAYsGDmApdDmEnfQLDNUnx2dfkwgyALF9stf57q9iyq2mvVKUTSkfrgzbP2ZW14iJAFGZL7Qr8E",
  "key3": "39XEZCr75Te5xbFB7ewJb1cYCWxW67vD2pQRNMWhXasyXQZTL3n5F2TVwdnbJZQHpgu52HSzT2JZzJunuej6pRUy",
  "key4": "3RzDa3bSPamQu5umrDp2uE2AC2rBe14kDktzJ7EBuEmcp7HYnfUREsMcSRS8F7FpTKtjfQ3h1vJDAhtgoYSs7gpS",
  "key5": "52jtoBj5iYucsCtwWztMmZmcaSaDiYqSLvZ31h9Wx1NiBqTodCBUqPxShBJ9VhE853J4XxZrjkgqkU3jDYRu2UDw",
  "key6": "38yiiSN8Cum4hrP4tGati3DTRUUduMdFPE1QJ9fdWFNfckBHYQLki2P65Ff1vZicPUXRZc16b2Wxv91RKQrgvNoj",
  "key7": "2oVtHYfvp4kg3kHmtaeFb1jAtjR4pyGWcKUEU43WsV3AuW7orxFJiTitifEHz2sNFEFY3uu3y4Xp6F4RSBATeRCw",
  "key8": "5FPzsCXdcNHsn1H7wMLhoA1SVbwDHgttLbicKDszyY7pzTNJBzfAQfVviyV3GKJsAxqwQmRTSvdhXRT7dgHnJ1pg",
  "key9": "36AHB8mViSKysEsZZ1ozBXrnV2DHRqzu35gfLNFKqng8CGQcoMz6zcU7tppX7PwLWKLxB6e8cSrygjkKZZKnEyZG",
  "key10": "66MWHfSts3jXAPdTR2cdXgurMx5NFWhZYBC5pS9krDgnAFYM3NpcmibDrTbYm1vNBRihMGPNYSmcz7vnUn7cpPQu",
  "key11": "5jkQYzqHCFMXUXKRnVhbUddAjcT39setFnr8p2Mzmz5nKGuvQBENtu6TgAg9arc6dBR5moHLQN7H83usf23d1nPM",
  "key12": "3E1avjzhNYpDonmY5ARooNhvjcb9m5Vv9kLW8YiS9cUeUWtw1grX9D5MrtuNqRX2Ba39rPz5QM1KbTe7qXYLCQwn",
  "key13": "9ebcXmDLWU4L7LSAijV1tmQPY5Wdv8p3EqKjgUZE2uvMt1PU95cb16KydZQ9vkzwNmxjJn4cMZjfnWK9eZnmR2j",
  "key14": "2jX4JLPDneQoutTqKypL6KkxDhqtiMMuoe4De3xqaKWryCH2H7uXNTRMLt12oDKwf9s97gfknWEgfRYR4YnAWhoD",
  "key15": "45xnZ4L7hYxJwXvKvBLmEZp2it4WFEKURnBvVE4QYpj33bKxRwyziRHBY2DnyQnw5MJMEne4AnfHnwNtqw5n5iCT",
  "key16": "5drTp1V522YijSiVfbRNQrDb5zUUMja2BcqXxrRyvnAihzzip9JpiFDfMHurF3DFNmQXc5hq3UHhk9vMQXdyMSvi",
  "key17": "3hmK4RuHa8gveP2XUTDZ7N1Neop9WVMqwPvHJYQ9MDDrY9J86PeKrfysaor82T1vP9Mi4uW4LEMurovwkvHUbzci",
  "key18": "3K3wofw4S3cE3gLHR6igs3Yc2X7FPzxvfNbeidLLt14rLmdPmUxMmZSYqixzkswMFeR1yWcdEvT8WAf9ChmvE31g",
  "key19": "2ngijAjtdwodG2av8fnFLM8mkkodQNV45PUhY9CDNGPfdkzL9pKtb37obCQcvaCown6otJHRuEurLRXTosagt64Q",
  "key20": "4rbkkJB1doYxQKUgRY9c4fZKxcy6ExtkoQdowWiGdYiF6bhpgKh5MLMHxGExgro6HyM4wdokyyppbbjeRGc6giTe",
  "key21": "5EP8Joxc29krY1ATk7QWud1dALgtkAw1rKuoPA6Ys32R5tGbz5n6wsCrpXuQrFxyXRAfpnZsNjHGSfBR5UhSgZkh",
  "key22": "127rSymikNmoYwY36kXG8jGVHQSi2fTToi7xXJ9HdWTRabwD9ENKx93RHfeCZKsrqbMZ92argzK5LwoVYwAMTTTm",
  "key23": "3M5TwhzJAEAdMvyk9iaUgdemG3Ane9j9MSdP5amwhmNsXe6ZepnDBKJmNqkr8VgnTJgH8d3TjJfQpAiL5DdbYJN7",
  "key24": "3NSGs9i1irfF7p1Y2423XzGjm1Svis5gjMqCcHoevPAUNsS8N4gE3kGUwXfLdAAqrKPbhqGmyY1RigWAbCpTQcVV",
  "key25": "3EwJwARmw34wAFaamfPxpaB4TkBp1Z7NyWDbMnf3zAWW4oLi8TdFLTkxPsYp89bB8Gyp89mTvRFiDLarT48muKpD",
  "key26": "3Aga9ATDhdRBwjZqRRiMDR82ShwUAKtQMi4Ghxq6AB8887WYqwago1mJkreuGCi9yeEHBGUXbRAhzQpNYT5mptGa",
  "key27": "ZeGgsDUUGq9NA78jfWYGwNhZCbLbfmvceM9z7P5K574ohJQJXYTAY79LWQK5aqvwhn441HerVNBNfEKwy8ZCWs5",
  "key28": "39td22swLNxygZqnrQ6auirYCywWZFosJa1V9WPoosoq5iAziu9e64opxsm7SE7m1vXhjVxoiCbJMHKkchMJB3th",
  "key29": "5NneCKVB12cFzEgACKeVDqC1cM4sHrERCKeUobrCJq2hJ8ruX9ZdvKqM4YcXSmNpJyuTpz6YBAwtbcvMFVWSLFKp",
  "key30": "2E1M6smZmu9srsuN5L9Y1Tk5mo6kpemNMyiD6Sjb5mzckFDCJsQitS2JhJ1rqG8rQXbTcpS4Sxho9tJzPqwY4Tsa",
  "key31": "5wUpuD7UVzvsPva1bH7tfKZu2DJP6SK5uYDNu3Yvdwzx14kVziyEhHGwrHE1xpwjsmSfGxEtdKtqSw3osUiezW33",
  "key32": "29mSA7cjnviTJZ9D6AriMULbRE6u125vx23yG1Q1BXEpUjNWjUeaFGpNf6ob4GzBrmCGoab9ZUpkp7s16QLy3ub5",
  "key33": "BDfFz6mJ69jmXPnNWCMYyJcAijjY6vzpHdRwKoCoV4SfSEy1QSKPhYdULxeDeJKemyvJn9fMk21amsMNn2Jfyyw",
  "key34": "5xcXp6y1s85rDkW6EqfML2wcQCcGaZ2hfs4UsurSQ6mdFs3uWXsodURf4uFnE2N1xT3Hnf5FaRoCAW3dDJgkCzMo",
  "key35": "56mV5iBeSaCmg3dDb28rwEfY1WCC2gdaJ2WZrBncsUefd9bJGa8K3SMZn8JmAax9psb8BKFd2hXyyqXGWidUBEin",
  "key36": "4hpmrbbyRRKMF1uvvyxMhwtvn9H3YPc5CXh4YwnA4JD13pCq6kvrtzKydj9a7d6rzPYHe13CDyxrCj236RzV7VTV",
  "key37": "4uRLEbJnZH2bMrwk5bvMp4yMDvkYjziDBpiFx9jHzzDTZPhdyPdT1Ve6hEbogSHiABNB8T4VrohgyJtHC9wS5Yww",
  "key38": "GyNajbEJA1BCiA6ip6TLSVNLgVRRufQpaHcjWJV51Dm3jUAZ3BDSkVY83g7eRT9hLAznpr88WmFbkCea5CYyG4w",
  "key39": "4Qqgs2CF2rMBFKmHsNWTJuc3u3wCq37zRz51bDf1FhXFDaUipxE4o1EJ5qEuCWwUP1CwqoMJBM7PrQb4bro1wsco",
  "key40": "5kjGLQMBx4vP9g3XZi3ZF6eKxgohhzziyZS1BmYUPJtLxVdCo1eTkx7Wdx3CXCea1ZBDWScuF6SN5NgpGQvk25Ty",
  "key41": "A7awkMNUfS11r5Bw6CeYuzDyKYKC7KvyjLoqJh68wTU2PM9cUTFBYS5zbk8SKNC4TqGDnFSfjUNftg1y3iStbLi",
  "key42": "25DHF6S5YZDqaVgJJEfT9J84L9ABUjBFbKtorPiGEYAtr6D87hyUxrtg7Qgn1k6xHsWntntgtf9i4CtiHUGfQML9",
  "key43": "3e4Eb4As1PGnuGnui2jtUmL8sJ8gpgvy3YG4ha7KvFcDQQUquNB7sD4hBVDwqS7RzbCvQDRQotHGoetBqvzz69DN"
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
