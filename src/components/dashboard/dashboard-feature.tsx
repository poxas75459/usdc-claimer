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
    "5qHEGCf2tKzjCMfVbWTTMmZQAB86yG1atCkoxP9QyAsQg2oMk8cCnVitToPypRYe37i81R2eaGP34qwmjoLX27Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KwGcyPW6c5pGSEU5vJUB7SLPC21mFgBbs22zdEQQCHAUoRYekMMiRneA7gXvUGPP1ZstiUUkF3NFawPanxEhVn5",
  "key1": "UnhqbXSL1YgMLKjia4fc6QqYCvBoLHJ3R4GbGxDK7ubLMVi9SCxmeXeT91ej6bpKjF2wRx7CLoCzd5a8FzxWja2",
  "key2": "2h1pmqJrrV5weeyTNQEaaN76p8QibsD1dewqgZ1qCPEKr8bRooWLgFgqBnVQi5UqZMG9Y9dVc3C57xDk3iD1MNzJ",
  "key3": "3uvEmdG3XJz7FwEJhp2nh3eTjABV1vURCo9P18X6AXdbECg5VuaDyLHtAssMNLKuUpGfh2seUWxDHa3YLosvGzzh",
  "key4": "33XqM57pCC28iWfsYem3msqNJCdGTiYag5wJyW6rjRgHy66dCbJChzPX9kggQbhofKZrnt2bcUPP8izjS35ywciY",
  "key5": "Vu6DJ7aDUMvSz2UNEGBEQfrMXEUg4izNLydPbrVU8knntThBuqPKhgVd9QBUftd4GQCZW1BUFp1DH6v5V7oBZ3d",
  "key6": "48rjYwGwiMnekJoTVVuBrZMSzAyqqBxJEt1nRLYJKnLVxhsLHhncTm3ZKeiT6jXBc2vUQ2rRgwekACujW1c6jug7",
  "key7": "9KqyVKuJhZkXYbp15ijVTBxovQvUXQ2Ctr688LQxYQvRehgQd98yPPED4E3W7GsXnwqs5FojrVhVbj9JsiNDcuf",
  "key8": "3Pq32HWFQPWzDKshkqg6Fck4RjfQU28WE56Cru1ehZmPQAzThPEAR9ZJKEjyxRpvmKC2G9jsc88kAePk8fVdXQVJ",
  "key9": "A4Yasx5kbdfaBujuAt6866arro94oM7utNs8AzQR8e5KfPxJskp7VsptXzaE4K9gsjFdNKi2BPkbCoge39GWSFo",
  "key10": "4ysccxLzs9y7gvpzNBGMiD36DahjwCqbHM4UMkM8r3cmd3uxM3vGX3uhrT1f1TgFpwTWDYNzmR2z3RX5X1JXnmsE",
  "key11": "LXdybzkL9QWpHFZv2QFt1bvVNsyqN8ycXA4RDaCGXKMvU8FqBWsgF5noXa2YdTZXuVnxZkyvgp4K7URwj7SRHFk",
  "key12": "4JR3hnytTkYju7SsHXBmGey1p39Fj76fTgfoaodJKWkMBSriprY8N5qKdLfxQSNhDT7r8SKMPF5jbXGLfagqz4qK",
  "key13": "49zTDn8TVA9rRJGs7BXVsmuGMV9mtWtgoedyLvdGmBuz5BVmDWLPv1qh1TTL1M55UYGmxH3T6yEKf97vmY81ATAk",
  "key14": "2YehuEdiqYyXw6wJXiBvDdJ5dqxhrt3PAj7KfU4juSFYmDwTkDQKBYKzYQ5w1mUjHKnaWaN6n2Vojn6AAAMG1udC",
  "key15": "34EnXuaXjvLrWfUMpFpP6EdVmcEHHSjFdEEwNkkKWEE1zb7eqVyUVduXJkcVfxAgqrRBkTLRNRcf1Z56dsRPZNdG",
  "key16": "5djWgm7msHE26NFrBMgu1X2Cd3LrQBtFsVwNf8dXdapaBvRpbeRTcufAWFxKuzeDLvGStXDDVcj3KQednnLjcZEQ",
  "key17": "7CxJVDoVbigcdWszXrrNF73wDByKk4tF9EDJqkzwX1yDTvGNDZJdT39jNPivfo8AsEWCLqGH8Ya5DPLFSAnWvKe",
  "key18": "2a2rLKUmSzYfbStJ5XA9uNhXvNrk1NN99qrv4GBgG668nkwb8TWbCoSxwmc8SsKFFGYDrcTiipoLjMYtyW7CMk3L",
  "key19": "2gVeeXTvvYFThbCaihWCftDQUBWKEJAJ5YF88btxmdnWsai3vNtMvHjhY7Wbw4iMTu49jgVRdNwM3eyxC4p6M2HE",
  "key20": "bPAwSwYmmETasVZH9QJ9LgM3rLQaMgPvKKPQfeZvasGpGCWmKrCYAmnAaXgju5JxqGtqrvGwGF22AZzu3xhS31B",
  "key21": "5Bq8VjXntAaksW8aBHVikiQzz6c77H5HP8pUVTbcoJA69qVpFiFEXt7FAo1vdRS23AekoBSamiGWdr49va1o8cSk",
  "key22": "5gDtdEa8kyymG8u6zmS5VUtYkTFgGBdK9UzXd35zGYg1qqtdSWMqGoSd4HTrz31fw7mgK7g1koWviqB78o4CSSSc",
  "key23": "3c9Rfh2urrQe3TvaX7rt3FUK4uKjNHUwrzozhJEJaLR2tBHiNSCDYCHwD5uemM4vs1thV5cYiZTLNqUYosfCuNnH",
  "key24": "7Ahonm9pmaJAUPiyKzx4raN2REgsDJUUGqbFUVNUcEWdPhZUjGDLKbirtVcTxfs4rGTbrm3vF55xRJv5Vh4hDRR",
  "key25": "2W91nz9YeT8RdLfvyCzQu2pNeZr4Knfvd1Zh7daVLugScy45RLdY8HgMmzyys4Khe1uV1fP3MaXDfvQCUtuQa9Ng",
  "key26": "M2atYvEfzAqxwENv6wjnAMnAviA2HCHGaCjsxpY42q45SwVhEhngwcaZBAA8TNSAygM8CMKzrQdo5xDctgz4i6q",
  "key27": "5xNTjHYFapgrCd52NJWfKQnKchQgmtYsK3T4E2WZTWUDbK6QXUPorJzRwd4PNwZX9e1VNZK3Tj9qSsqh2qDZYL73",
  "key28": "3HC4h9DEkyj8cwj5VEZw47sZ6Agje3KtQv1BjZbrNLwQAxczSWELBoisLJP2ehkJb3i4sJpzLbVMrKE7UtAKk9gs",
  "key29": "5nNHth8dMCz3rRiuafEQNd9Qayh1SXYecaqpH73d5begNUwDZ6K6ntvAFdXrFp9gJrSH4dZXy1J6zyyeoLPvJMhw",
  "key30": "4T1rrBjRRjxP8QzgjWUYfAuccuEs2skfS2QSd1VacQub9ekXp4yN7o2iDNJZAPqhF2mwdrtAyuyZjNJTLAz8Tyio",
  "key31": "21zxtgQ3Ez31XXgAmMLFCqXRAGM8irobjshXJQH84faq3wLB9g1ZJZw7Dhu3RmeCmomTnn3pWKx2MZRi7iZHDxXQ",
  "key32": "2h5xzwJMqMVWaN4YMq9thf7vWB7qb5H9sUfYveQ2M3hDqoGMjgdaTQ1jGtb3MDsQ1mQwgFkYA8fXW8EEbeon1vmZ",
  "key33": "4GczxwrWDw1NNAFBuYXVV4UxFpLTtFjgcWh252Wkbzuva28MdquMrsQfZvM2zqh3y56jrGoJ3vXEB1Tj42tdDYLY",
  "key34": "28fTFRvdQ97d89g8zCJJBP2KBuHVcFJeAZqmjrYZsxVBboTirep73vdeYGWRrzQVLbr2vCJGDYP86rVoMULiKKjv",
  "key35": "ECy4GMU28DFQsFik2FXmkW38TUWDK45d1g5H2vfHnb35qsb4t9oqACsx24LLhKQq8HFRZmva8b1bX3vc9EJQ3WJ",
  "key36": "5soFfF1iaQK45AX8PvKeWzbXDsA7XnwTTTDbWVN1MnwxLwVYcXZj2YJtcof2BCzQvusNA7DEB2Jj9wuW4tqaqsHu"
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
