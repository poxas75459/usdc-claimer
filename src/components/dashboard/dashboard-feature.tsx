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
    "3Tsh36Z12GgEnVto2RirZkLuzJrh1SvKF9HQbghfVbNWvJobntYtVgc144bXYzKA1fmrvm8TgUG7BZUD15PSZtVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHBoeuD4UpdRmyhPsAQUDAUkBQN18vgU6CUUMtva8GvJgDb69Y4z6TnfQPQqomyTDCCHzanhqAG6WGURiPfDD2n",
  "key1": "5YGuDpGS7ScS43uXqxSS5Fgnh2fkKkJ5XcGHq3ZCBAuNW6uuVMv1j7qkGCFKYfGHtwTQU6SJWYPyxENp1mcuzn6w",
  "key2": "62b2WWx2y3XTNdEcAPyP7cUMdAJMn44qwEC8zPG2YbRui1ze2BBnLYfZq7HshSiZBckRFgFHjuyCzn74sdeZ5jUg",
  "key3": "2j8K33AEtxk6MestSEyFUkGvAEPLgFWwLrp2MfkBcUeybrU1pd4NGVfBtZ41kJvg6jVSDXqBjjdfKEsK4X5ywYRp",
  "key4": "3yiU7g87ys31sgCWczmUsnVvMh3UTmJ5gVzsmtjyXFpGQiLEexbmPd7XtLgwVfAFHhSSxxy8aK5Xyow816qM6yqo",
  "key5": "9y8y4rP8rGvqaU3iaYHnksLDQajWecBfv1QFLJoPrhgmJY9R7WZ6SWjghg56LX1QJ5LjKBGFpr8XiU6by3LuDEL",
  "key6": "5auc7jtGdbLxrs32Nz8UiH134nFMi5bMsGKuwRyyzM4RhDP1LnRpuSd3QsgQDfUHAapRrzraRecrW2qqYAvZktR4",
  "key7": "cXazGjFhvGiNaP2ygrXEd2GM5uB9QF5i4Jae583VyjwwxRE1W4tv8V77uFgNB2C7Xirrsvrvzhax92pL6BcPoGe",
  "key8": "2hBdbUEitzS2gjriYzfeovkCFYbeSHHus8r9tfUTHeXznEHM6EDtoh5GPYN4eb7RaENBHuEKPzxzuPLGvDt6Q6s2",
  "key9": "2RRYUJmwWi3cn32voucmS948AGBw44LguVQDsUXB9NEEZY62zbWMaAEJQyHDHA5k3efjhGsLVrYoRwhoNt6ZTUVC",
  "key10": "57NUusP14Tzy4vUB1TtmSR5kJfQzyPgGgJSaB28drXkwnCpqGhmSrmD9eWSKDyVagHjGjzZdULdmzafiqJWcnqqd",
  "key11": "5ZPZnvGfuxj8TGqTM43ctutdnkt38eZYAzymYPTrPimExxJirtVPrzqokZ8nBvwKzvdJ1YwxFrzrgTCKswRQACgP",
  "key12": "4oaHjTTyJKfuzvnSZgYHHBTRGpNgqcU6wV6fzEutcMmm34kBRTCmcZwjfjh9K5bvoVtq29dzkrWhihg4T9ZmR5JB",
  "key13": "62W9Je9zK2kTDNE21atjwBC5YxcmaFurE5iUViXLXd8MEWVCEkHPeFEwm79qsAyCcxbYyUAybK5ispCfR3XC7PwA",
  "key14": "3dY9fKPVyS89LwZYzdEtwUTBRhAG5G5eNRdgmCT5HWFaaSGyAugrSLQn7C4zcXrm8ropC2TYo7zGUpBKfC8FayLL",
  "key15": "5NTsFLL5crBb2Kjmgp2tf7hxQ77qtKFEvNwV6ELpaMCTpvqSTk2CJYwnffiEfgj435GQFxegoSbbpD5gKrWcmJW6",
  "key16": "3n5m8X7hWsApkyvUCDDMQDYVKYRydEs2pxfb8DK2hrwA7QgKMvn5Hq5FpGZVo29MTeEvo4urh2CqfRCBsbhLehvb",
  "key17": "8VuSuC73yaCV7KH29ukzBpptwgtBT1JZpbzK3yBFXbYv5JB4Nfd9osNtb59HfjszQYsQGd7XaCxhwJJDm7DuqQC",
  "key18": "WBVmW4nE8mZ2JvYL85VwFFve2wHujwRehMi3XZHxbMaZXjxffwYhEfANk9VAXdUs2hWaW3r2vEwzPQsD5gBn2nn",
  "key19": "3Wuw4AKpm1L8HqS7k7wxutXcnqUBuL7q4GHTG8637X9oBsr7zuTzADEYXAPCTA2hR1XhBJ9PD29qjufCsubeMa6P",
  "key20": "QJiNt5U8EVpSEAKRa6gq9y3MtfxNyevFWGsoRea7JyRWDJPWffaNJNbH8EaPmnM9bAFPiDiXg66vesiryW7njMN",
  "key21": "3nfuAMBn9SatHo7BokMLKmJbEaA6QuWe4TqXWTgMVJRxTZDaCqDPe3DLAruRt4SXUvMXdsvWcZYyD2WkVhtv2ajD",
  "key22": "5MAH5qKfqZjkWo8Vnr1NHcJipwrqVPH1Y6U4sfamXoDMyTSu2oeeDHPrZXK4Me4i9mwHN8d2Me8e7uXhKt4u2uHK",
  "key23": "KkrShUTpgcBHRj4G1FUFDn6oEs3p2jZGA5qt7LRV43ec3MGzih1RpUx67rKpP4uwtEPDDbF1XKhSv9YV4tmYyrh",
  "key24": "CwsRfR7YzgPmJDSgJuPe5Dijz2JWEHchUV2rPHgYYy8UssQMakyUgHzuDpExizpYJtuMKkszQFo1o9KnTiBnPj7",
  "key25": "UmmYeBgyxWkhpFErJV4nn8GwaqAK7m4nBmq4hRB1DMbiUVzpcahN6ykQjrzBFkAVxT9yan8ZB4tfCpgerK2RdsZ",
  "key26": "5oK3MGRwiUB2DCRZZKgEfkkjeY54618CPAyZzjycPyvhZUKvoF724bg2zpC2FwsumdKj3VcmVUf34EcFRiWZZA38",
  "key27": "3znY5rXpfbEruD7R6DuFFd79NuYgK1imUYCZTEC6x1yiYXTh2yJtsvrCCbi14ymRVJopRkSvubpkFTxY4m1RGb7D",
  "key28": "4e386bxxziT9S11UPa7ihQKaAWD9myKcBLmNrXNU4Ju3ZVGNX7BnVeNTwhBEnDq2x8NFvyH6ZUU1bTctC4pyJVEn",
  "key29": "t5s7WgBrJVX1qRVzKggNmKtzuj1k88bpb8LuNVW85XQVAfn6TDJzKVhXkuVDLSjRFX6cnRM4MvJRmZAjjenn1Yu",
  "key30": "36SUomw8Gff8DjiY9ggAN9earyBpg9f5DgqbpfxLjRe56vsBy2frRbZtdNZe9iQPuaoJp5oSpCnBXLMxsxNuUpEK",
  "key31": "uUwdL4KFPt77yyYPG3fM8eWbRcTqZT1vBYJB94AGLZRk7kqyoTUsezmsFyUdnjJ4GWpbYH9VzETUbbjaCxVBTqG",
  "key32": "3UqnyV6KXBk4H8uTRzwQhiF1DVrmteBgdLbpD7BHAuwGUivS3Cpti5MNPuMLADgQMeAgmRK3GXfz9M7SKdDYdDBc",
  "key33": "5pa66BpGr129ywuhVTH9gUr3FUaKnttP4DBjg3x9hiYwgCitwnXgo9wfoD35pR7Z8YxpBy5NDaf7Mw3b2CUGZNZa",
  "key34": "Ht2ojiuR8k9AJX7Ruv8ZrxVu4j3Y4ypR5bShNYD4whDcX4VVgkRkmSoWijabpJcqwqigZK5RLRgkCy8ANUfBHkW",
  "key35": "kyfbE2S2rAHSGkZg8bUsCPXqaJ8NWh3W4xg1oJxKeJyaPRp4U78dMqgYcAyMdgbWxbcoj82bKKMCT2g3rsDp6oR",
  "key36": "2f6PCzpTgDDJnu25hBGmg3AsFWYBJ7s2e7H8tj5dGs9BmKD1131FrSoWyrpPewqGpPhNBAo4i2aN2xRD7AYcAPzm",
  "key37": "39rpLWpyRrqWGVh75z1tbByMBpJY2EUXWraUvirjMSVECYFMJkBQ89F3y4E6MH8ZcZcdrBoeGqbvftLdGznhio6o",
  "key38": "4cqcHBx8v2VS7DqXLefKwLYokcS9V7eonhab3PfHu8zJS3i2yJ8zsGKNDZjBZAG9dV7A6g4xBkY9TWZgkj5ZCk4h",
  "key39": "65Hojmz48Gkn2AkjkP8QPaatrkPrapCfrVgtErLifsheoLEqYfZk8BjzzPvfCxzVyGiVMTaHt2ciqEX5MmTDcyGG",
  "key40": "gQCkBUjCATHwoZ9KqafuJXhR3zBhk5xLkHWMMNVcmG4dqoEm2rkCgocXaC8zThtFSHpag6FRUumzYWbsivU3iGh",
  "key41": "rasttfTQ28FZsCAtQ6fB6xW8WXDiLneewjNFPpxYVAnHa6cPdALj3xy33ct1f2Xv5giFRfnwhgeKFUySqNvfyyX",
  "key42": "66WywbEhKd1NSP3S2JNjg63DtDAPMZBWB3qpwCpQVS2Ri1AGjGPAoX42ANesCG4xGKgkoYyQZuPNdtv2WuNd64Eq",
  "key43": "MyLuXranth5thXusUsLhfWCktZQ1QFxtRLkHRkHgqXU1PNd9VTfV9QcVrVqHJYfvTWJq3BqzihmEfCkQfpiDtYb",
  "key44": "2mneVjz73pZNAvvPG6qAXyFYuULKCPLmwfkoS4AmFtWjgRRtTx4T5DciEgUQnBFHXf7g3keYDvuC2GBCRrpBNLL4",
  "key45": "3AFu6SBxV8Lq4fdgEj68gisQEHoaN4giHXhM7Bjh9RqtT3MMCCFj7sWhoJkhivMCF54J2au3CiYMBVvGx5LQwap2",
  "key46": "2ePbg7reuxQskeaw8NRNzFX8UnbXvTRNeNESzEWKvzxdcoFoV7LjHmtA7qdszYUwhNNHcLZpjTTpVXdYwQJgsurD",
  "key47": "2KJxQswszWETHA7y4guHjXQ9Mwr2YtSi5ydp64W5hLzCzcUWxyLxT5L9qMncBJiYD4CwCrwMuJNNcww7L8o7Ynfs"
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
