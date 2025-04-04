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
    "5Ujsq1fUvaELFfQAvnZ7vLJS5ZWF5whxy1bXc9DarWtKU7WZYYYMJ7SFSQnoUm19NBJWd2D8jmiUwKiwmxwdGXiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czijTSVH1mDV9YAzvmpo6GQfBMXw3x3mV8XwU3Q9soRXVgUxsHAs7y7eq8Uahyira6FrQhyiqoheWiwYefGydjt",
  "key1": "3dA5uU3mBgRQYw5e9UVaCSSFdhYWPZvaw3BQMM3nk8JUA8mPLhnZWGKBWwkSN2yES24ohxe5rqipeDRzyaCW6Npc",
  "key2": "5LxZRQGTQbbTGUsxAUFDq4yTKkYdWmxmruwULD9ANzQbRD27zwkSkEgMf3WtJ9Lk9HMyj5SEkGcAeffNtGmYDDLi",
  "key3": "2KsJcvGWPY8naNBNmbcTFUYzsDAgetnWgbvB4VJkGPuP3fkL9ZfcTEPU7aHLUa5CaSedTKZVwFGUbPPrkWYcs873",
  "key4": "3vWW8SDsFBLFNP4bNs63PDxcvzAUXpLugd8eLsHrADdmCESwEW54qULDYg2MzJndFMEr6MqWEwXQFpJz3NRyMvww",
  "key5": "5yfoSM26hHdEBG89wMsGiELbwfoXW5ak4nTLiSoPr8xecs8UwN9SiqnGYWg2GFRP3dHzV4anVT3LqQYBKPvgU1e8",
  "key6": "q62JTUQSuMLeby4r7F5LXRFt4gvaDFZWuq8ofK2AYcXtQDxaqUYY3Ygkfj7wotqNyr5YG28siPtvw2yrB654ChM",
  "key7": "3kKCcgpcdPGcejUgFMSSbR63HDsQqHu24MtnitYxugTvdouBx9gbQ9SM1iH9ryXvi4Mbtzv85AfuZEY42Y34qbo6",
  "key8": "HZYncDrqFCmXM8nGoqd9sqaBzR9dHLMf9bbmuNuenRr26F8SYesceoH4uAt5oHZskbrZ6irW3QX1hUHQPGFGZKc",
  "key9": "4unhu1z9a8nZsa7Ki4A24JTrg8qG3hUyVeJgS3ssMdHrhEKeutHKnCXd5doEw4ZpchLoBmvFixDSQ789h7xpUuYT",
  "key10": "2bkyjLQbneg14FzECvR6vds5JDSrtiuLRJ3viSps3eKreeACByo5sewq9kpDGBRnKvPTMyDy8aGxryRpVV7tC9FZ",
  "key11": "2v4EbPgzhKz4H823a5CEFuQEhXUY2HsSetw3jeS6Wutx2ZfomuftrntRseHkyGU9Ma1Z7W4TWAJFWEAWfji9Y4fd",
  "key12": "37h4y21FxH4dcDHiPSFroEGuj5ekVehHEf5R2RABiEpMbBHt7dViAbsqNwesPs3Pic4X6xkZrPa3aCp6vnLnWPqB",
  "key13": "3uJQqj7Si9qq3nALoWPLoy4KvARNQC3iYJomnEyyLZhj3cjhAQvkRKZYd4N1QDgpci5Rs5iFMmmLhGCnnMdqZpSG",
  "key14": "sG27znrC8Wg8uufom3hxSyffSdLcdXaE9rujsNo3k4RsmdE7zd1shUC41Ghcre5jNGUQpURT5YDR6zf3fvcak6V",
  "key15": "4a2MpKePd73CYYdzTujUG3fzaEMqc9FDs4B6vUoUXQUi2WSBwJyCDS3uBzDHshCeGo3zGBEHnsxpsTRtNrfDoCYE",
  "key16": "58bNH3u16KXHyYzHKiKv4q9uygsc3fytTMcYM1LajRb76LtNEHMpNhR87RtMEHvgsyh74JuxP7ADRhwEtRrdjEwE",
  "key17": "2aZ3ebR6u7VZaSx2AK4t7pvzoQUEMQCNuCdDXnCd79EiHTbLyk2KDgXjrjgQej3878X221Yxed7gi1mmxEGKcnnL",
  "key18": "PMHWvQc9fghDj9y66LXoSCMjq5YG2ptUxtW3uJWcuDwdXXSYGKeBkeiMiZCWPbKVbjyDLzz9b23U28t61B1g7Sy",
  "key19": "5EDaUkBEoMqEv9mDCBh8Si7Y3MvBkwqmneKM5oiaU4TPf5TUBJCkvQcbWMANjRWuhnLey4HwTimgUAbDXoLGtz1W",
  "key20": "oijhmHv9GbAt1o2wGLXG77AFN5R35QaLXzAViuSGKinTxvACJnqeWMx9NYyYULRbfNZjVGcUV6UKo4cTRbifstt",
  "key21": "3K2FbqDQt2V1qBPXmnu9DYYCpMmEGfkCmb6ta2qxayJvM96ajCD3dN6fySHv2xGeaFMCFohBprS69hEuyHJ9h4mA",
  "key22": "51Tz9DWZHbJp1XVsuRnp4Z3dAP5BWaCg1SubAbEXXcq9vxFhNRhVucPitoaZTDyxBcQ5haMdZeJzCiLryjmUXQjL",
  "key23": "36XZa6LYUMfSkqCgeiSPQt3DWSgC2k8odn7joJATodEzkPRx2pnTZqVYc7unmHQUVbCca2KzZM3W5rr4DEowgjq4",
  "key24": "MDAxkLyUFHNFfWGBzawjsRSKvhqKUXFCjR5JpwbGwcXUjyytn6HWP6JhgJfhTq2vZEQs2EZDCKmqDYut26SgnUx",
  "key25": "5svHizAjBQwS9WpAYgvsb183LUwQqgXM14qgmPsPgRvSYKSeC5RhbEoyCnHH8rPPuYdqKeRCYPWr6shMiVLC5or7",
  "key26": "2xHuG1d1XMdMREHRoPVibErVVtwuW3M8qGXJnhPWLCVT9ufjGc6ZufpV6AVEqc2zWhUawRcdHAaq2nBkYwAzC6Ss",
  "key27": "e8dg3FAUjE1vK7GBAfW2caZ763kK5ub6Jr5VaiLtfBkh1YPY1vLdxTUQ4fgJ7bn7xrGqH7kPhVBEhJPyvL4aWE2",
  "key28": "5dg3gudC61qamRzQDLPFx25uE1zena9RQWJXbLCC2V3gzPiPQNrmDaSLFBaCtQbcBHWGL7NxuN9ZxYTQHy32kN1c",
  "key29": "3Crn7U4mKg1ddkewcGZR29hoNp9RaeR8fDGC5A8pC5qebkeG1qcfkBwRUwMfqh1QSurbA769jUJ2VgxkQNasmkcA",
  "key30": "2DnRpQkeS5ULKGWzdvRquoiCwYLxazHPtw6ioaqbNGUShmiaBM4Xt99VhW9y3REocu7RCPguGbMDMMnDp6MP7r6F"
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
