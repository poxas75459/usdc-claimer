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
    "39fqTHGxnX7FuUaXUu1y5a36qH1Md7B1XMMNxtvdKv7QrhMd3fFjXJgdhBEVcmkqAB3jopuR9iSPEtxoCwjCpkcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yy83eSfJtsUedorty6U1Df5Adm8Ee6A7bBeafkHiUhJNwL5JUJZhHj8EFeZGCyZKz9Jt192XdKCUeDcD9Cm6ZaJ",
  "key1": "2XPLKAM15ESZHGhCdMP8nt3VoLhDDumwb97XpGzzcnaD4Ji7uB3NNQHm3KXi1tpgsckGBNFwM8ZeqoYf9GMAfR4j",
  "key2": "66aMSvrYXf4SMH2t3FnB6YMrQvz3e4qayvZghJPQbhR7jJWHPLaUVSVVcWZ8NN394F9gGwtA35oCZoiA6zyRtDFk",
  "key3": "5HMTNQvVpvSAHbWYqgEaNSSCW5yR1RB7Mmtwz2BXNJ6mABkxqt5GSaRrxoPCneypyVsJo3yKYXsGbaayhzpUgGwN",
  "key4": "5wghz52WhXAgWZkYs9XZjf3BZCJTSxg5qKKMjp1VrdWFYcHHoC2Jxwuu6mUmgQHSx4XDzrX49d8mRYLjKWteApDJ",
  "key5": "2SbGRBaJ58nsws2eBNCzFTnasc9Rzp4zARVPE4mhykYN49f3aw78hAiov9roCZ2KJGzvZM32gdLnjGiyMsEXgzHu",
  "key6": "2qKvY26KHCybH9HiqZj5uk2po3DerAJ5KYmWhnSHvZa4FofWxkQjSYeaKhMYykgDTa6Uwz1eDWd7ZrwxYVZTqyvs",
  "key7": "4LdDn9EdN5fBWT6SQhNBpbzH347RKkfks46cUQVkeLqVbYWyjL2sXBeaexeZM3K1Snm2sHmpor2nxgWq5ftZWcVm",
  "key8": "aPGWTaEKZkdFhYrUQCDiaXr43a8kWYRUt8kzwxzaovCE61CtAkWhDGGNm2d1fkCeesMRjiamZkYLVwbU3Rnod7s",
  "key9": "2xgqvzokpWQWHjhZTyH1JfGzfH9LuGSGYApUX451ZkoY8Rr7tPDGu4NyKABCnUjBfLow4A1V8cuL9QwhN8iAwuD6",
  "key10": "3wsVcsQymasF1nu9ZS4n5iRZvPMvZWRL4bpgo9pViepxdLyWtzAkA5AzV5Xup4pgj3Gk2jWicoxZnXWjyMHEiLpq",
  "key11": "CA9oFgySVkqkMm8F2SpTgKZTtaL8LbAqns1PSxRghxhfqw3LMCRFiFw2svs93bRg8qdn7jG9rpC43SLVfxwbbss",
  "key12": "3TnX76vMg7LRTqJoHdgU2TkdmPjBPB6JCG7rHv7DawAMEQKC2c3ihLi6ohzPknTg8CQNq1hp2KWCvwEZSwSJLvoa",
  "key13": "2pqaAScWWsCGvpmdA5wMMgbtPW7awS42gvGJYH2GxdNgAJc9hjqabof3hNcoEg2Z3Cw8YsmkVMUhe9MSKnhZeBfF",
  "key14": "3XKiHL77D3Da7wJn7PyeGDZcJKGo7HgjEZn53xjciZFDmxd8e4fxYcaUQ4QMK8PfeGfQ2ZWNyV2BhiEJcCFpC7n",
  "key15": "NRfuw8hfxXer5wWGNmLLnu4WoRER7KMu1T3vD6CPtCW2cuX3iZhDuJ62Uht4fi2awutXH69BKkZSEb9Mjfs2QSN",
  "key16": "5RnhA7CtJUhWvBYkbsDzqPNE3PfydkCQRXFZdi5g7GKd8BjzvtCQUYJrxA2GYEcZUbDdUpLGk1AD1oCfwWxBkgwG",
  "key17": "2eDtTvAnXh6UtCG9hXAP99Pts2uorKaHn1u1Ef9C6MXus334Syx1tHJy49jUURdkhXS4j47EwHcjA4CALhinDnXj",
  "key18": "4CZsyFCocaJSGcTywFEzQRbcdjrPiTrE57yvbWoxwppYT5bo3k3xhU9eyHQWShV13TZQH5wh65EVUq5rFAzU48iA",
  "key19": "4xs2TVXUQ42swXr3ash1Z7ejvvXDFAyW7PMac33NjciAstY1SjcsnCSnad4efafgaGKdnByEdep2o4V9hXKWSEAf",
  "key20": "5cCtDMun9oHFiuSD6gHSPcXWDRyZiVPVEE96hXEa5rPnacAwBxZV6awFYgrXohsU1y5fZ8NWiLRZET16aHATC3KB",
  "key21": "2fPQTsebkhs452TVYjYWks4upZs997RueNzsJhS25b54Tz7G7BJk5VWB6jj5mMr59n4ad3jGtz6hScycejF9sdbk",
  "key22": "4kQBBa4ipZYNyv1mfT3cghngsUZGkQCGuvmUqAfEBzy7ZLd77wU8fCCYvhcN6tLLB8WX7pGSL2UnHwddAYZCTKHh",
  "key23": "5F4QvNoi4SBqu2q3sY5ckbbJJbRrgQxyLgmKceHMCBquU5JKzadPscfPGUR9LYDzp2uG71QJ67Ci6cLr7QkWSU4y",
  "key24": "55C1zvZKVaebHxkZbsHMdZEjC5cPwxqC9egywTGqx7rvDaXDahcFfED6an9ozM8pHkUf1qYdzfFFX2TmYjizBrWV",
  "key25": "38Vrqre3nmXZxDzoydhQr4uF9xtsXtbnnDdEmZuL1dg6ua41JCSjBFq1KnwyiX3BdQ8mQQ6ZiL8v45WuqQzUofYz",
  "key26": "DvsykciEXsFHymazS42KMDcaxQ3twMXtsWwcbks4V92yrZnXtvUCj4z2HkWdWmcBVB65WnnsyHdzGZszu6HkC2j",
  "key27": "5Kzrj6abbQajw7gsPf5na4fgm7GdvT3MxnyUQZfCcZgDqpusrfB7WjxZRhVqwTbvPnrj1NT8kdpZT1TwqrqXQsW2",
  "key28": "5BFiVTcMkshW8RdRdVVnFWQxsn54YAorzgMK9nbYFRHEgxGTrafyofoZoF4BEtrdY3kvrQzTuuPyJzRA2WwSZnMZ",
  "key29": "qiHJZjtZ8hzbt7hoYkU3dQMj61yAwkzxZ6hGu3gqgq8mxqUeTitYZs3iH95cw9GjmnEY1Dtr2yaVPmkbJCzn3wh",
  "key30": "3mcdet9wF1FkixqLXYpuuMvhMyXxJ8FfTrstymujAeF5UHR2fyMrRc6qbC8abqD8NetJrKQuzPJpxmv9CyjjVwbu",
  "key31": "25Crsh3w9McQxJ9MVijm6FnmQg3uAKigRqKZ49of5JqHH4A86mqfv2BWeMVoqM8GUtAxwrG5hwrSdM8fawKpBVhS",
  "key32": "4UmDhek1SHcop77VL3RCjrRXUZLUDSb3wnPsyi5yRLom15NtFVv6cQZewG4DcNG8BnnmC9cnEQMUJA7KggfhSFbT",
  "key33": "UkT3ESBfXw77GrcSipsxYDe8yAvayFwZ6kwCFFRx5T3UmFRaf2cw4FLQHqpBEFsqcSgJacAR1NLW2kAvvsCP5br",
  "key34": "45YGCUtDLjVXn8o69BLbS4mnHMrMv7PiWNcuwkbAtzLv2zThQndKUYx8ygEwem4RtaJAw3xFiZBYerHiryuGVFXo",
  "key35": "5BFq6n5s3yxjMNFUY4L2xpP7CCmdnf5kGj4tGKLZL2ik39WPUdJ3FspBJDEByqwpWWUd5zdsVJ8GbKwhaSG9VoBH",
  "key36": "53zmiUmV3E5rQXkQu3KG9tRVcgeLjo8UgGaY397U6v8N296nBKUFuqJZsjnMj9vEtDRBnUVj6Lv6AXQ8F3TThNZ9",
  "key37": "3aACgxvpczoCgqHFKjj57Bh2YZ99rxS3eMWhZsUn5UE9YzJweGauC11e4XXwfZrQUrJyq1Rb1LteeDqNj7Moqy8",
  "key38": "4KGq2EShGCxs1BzwB3Mq9tCJbiv2cgXnqfygQfNz3ntFt7rjGaa8J1ZvTcBZ9FVvvZcyf9G2BLijdJtRWSEdCioJ",
  "key39": "2PSp3Bx8t3G2rSGfKBRfKPtSMknCQwgqyHaU51zDeqUZukmRGzhJTSjT7HYnwsGsDBdorMdApUtLG12TNsFqiSfR"
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
