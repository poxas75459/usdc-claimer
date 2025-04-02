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
    "5yYijX3DYM4rofqHHvz8a8dKXvYYpuqjR3G2D8Cy7dtAghUGaL2ovuhXgLyP2dbQY6U2PswujEfx5NxRMkBUTp9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJqMe4ajZDFF7RhmPBa4sKEpWpfWdmNjCrEdGRftaU73XYBCaKLepDh1jeF5vMjiwivxEd6SWJdgdGr59JgmP9S",
  "key1": "2o4ijzMvxV6Y2Vk7VKSRQrrZv8DkZ3E6En8LCrPVTkC8h3CsU8Q4ZoT3QQ662Gdn1JVnZKfzwnyJcS41pCK6pahU",
  "key2": "3bMCFJJZrCBsp9kw5Kmb9wu2xEgKeRETKYM9okEgNgy2nrDGMjUFu5CwqRsf9dERsQGoEpEx6d2h9Hg3Ekmh3kx1",
  "key3": "4pHGUskLKKLiz7qkB69AmRFcFzYFRCBkqRF6m13E4XgziPDnTsfzegKfwPZzKJWdZKQfQUFBiof2W6LJy987WpPp",
  "key4": "5JPJp8w9dgFdG4j3srt8fkox83vJwtyYxV3inqNXZso9xzJ7dDThxYwzJupvWwBQKpVKuxR5RG8BwV5DEydhpqZE",
  "key5": "uqL4uJfHVAVxRvdW75G1yKdzH3vxK7ZQ65Dv2UEBMiiTy5JqUZDvcQP31rLuMbRkQgYsDtNtya5vMLq1Et52Eb7",
  "key6": "5iWKj6q1qzwoHzc4FcLdrXiJkuAjzWzEtrjTV8oMErA4sE215PtLb2zT4Ha8enJkHmavxeKnNh2qQNpdQS11fkzT",
  "key7": "5uRuJ2oHVJRzKWergfxd85twLitRXf7VsdS5bqb3g1AmyFw77MyjKwXLmNnhP7UX6G6WZZPtNhC4ZxRyfSJ19FTM",
  "key8": "3S7tGNYYQXiusW39HYp5VsxYDSAK4LVDrsXpGzM6TMt8LNGzFPPeLgsCarbUVNss4rbok7AP6PgdiU4era1CRxvQ",
  "key9": "5n2BVVY383143fZB2nYsQfrKc4mTDjnj3KYn6AGYQNSuMSjMeun2FH3rbKigaZRdUKTj2mzG876e3gYsnwR9zGpt",
  "key10": "C4L3HBm9BSDfuRHLdFHNnU4rtkHhkeS19Czdrpe87f74yy49uyned7STBJX3zmWzqC2GqRCpKXCTjFJNf5e5eh4",
  "key11": "kZmwb19ciKeMQgx1pU172dtRsYG1hT6PWudmVm96w98DyNoW1y9F7LSEJTTsXssAUUnZRzBiYGmzWPLsuRJFsyM",
  "key12": "oHAV418uU2uCADvFmNxLJSQw2sx8bZsYxFuSBt6Fn3LUj8nTqwjuYCfrrthbUdghabddMuxcQbLQhUDtYi39PjH",
  "key13": "vvgccJwC2GMYyhqLecA1YoMBnreq8BDfFB5ttbMTM7V7TooQPLqfjVbXRk4otsMd22cGM1EvNtjE2i46Nnc45yV",
  "key14": "YPgGwkBw5UWWsNaexjd9eVHY2VU2pnkaGgLxfN1pLrfbsiyhEFxEJ58oqfNei6oEXvNnfD29fJZb45vWg52iw1P",
  "key15": "2EdymsxqXHU2pZR6Uwr7hcLsFbkPbhkuj5c8DhGbFogpM3urpGzUNR4QgFeHH1jz9CQXtRXYsgm1eNaEu6AEgteo",
  "key16": "5twJT7iq1zPJHjodDtRn1Jtz4CyRDoGC15JgCW6DdDfdoiLhBzoSeCzUQtETszhzivPDGVsWRvqKF5CBW2bfnVvT",
  "key17": "ZoZMbbJ518gtoNQfBACZDcSDQXzMGGJoWF2d4CJXLyxbhK9tactE8aCxCw3ccx7j6VawS5m4yGgmY56k1rhvJB2",
  "key18": "4PJDhdN9wA5KUuDYW8Lmmm5GVUhYnokPEHKc3Ab4chinjuuQBhjtcoJ8YxGF9HuzhMdeHkB2zsk7ZPgdGKqDzt5n",
  "key19": "HNP7qkufYjUANmbWP7dmAhijcKtSqwGQ9SYC8KMAp8Ka57we7eyNEV9hmrjzfmYKJyMpZAitugSyg6itR1w6sux",
  "key20": "4pxC5ZQJsiBSjvzA2po2Fyc7dxVscsi6RNG8ce7qvaTfsA5Ktm7hiJjK5aYvAJxUuARRfd4YRQ8eSUQSKmXRC3J9",
  "key21": "hn4kfStA4QZDb6s8o764mNftxv5r8aQqRqxGbzBfozHygVXj4dYqyoGXXZG3qpPjp27yDt5PGNRmr5ZuQtn4PVT",
  "key22": "2k6YWMCSJBbQsLxKvoQD4YjY9kBen7R7YpemqZ36QdBr8w6rtDNPRhE1mhWQqP7bbejrUdw7evucUvZ8St14Wdbo",
  "key23": "5ujRBvrgohKXojb4TkYYjN4EinS2Uwq2cUZKE75DRnV3j7DKDwDmFbQgLmy9bdizFVDhynvqJpFyyJWH5GmwtsZz",
  "key24": "4NVRYupw8BDaxXEaY9arDKw8C7AKRXg3WcXJNXEyXWRnNzug3kQ6tpYgTy8tqQmwtUeMWiyQtBsvWqDFEzHSv6UR",
  "key25": "AG1UFArimJwHuYabzcComXc4RVFskMRtX9uNuF9EmTkdcttA2hycDXMY4EAGsEqRDLDZ4S5Doyr7fbNGsaDPsJR",
  "key26": "5xjt5gA4jpzxnkFevmVWYVk8Ufi1j7zQQU7HDwDrcbyQMZFe4WbwDvJuiQPCg7YvtPqPYvZa9Dbkkexx1HVxEEy",
  "key27": "7uyMCzQ41MNmNqFekbjLp2rcff3FwSx4eXCsro5TsSFKZ1JuVRoZb6FditkRjX2G1tvkq6WV61pzbLcgnWurvMy",
  "key28": "4xMKRWNB5HvWLfauUJUJBzG1XmGF1zGREYVDn3ACY7Kme41yULPMf5nQiV4vG8vkzwRhszZNQpM9gVLD2XYgoEGP",
  "key29": "4FNt7oRF1oVaD93RQWyHRyXy6HV3AxNne2rrvDeoDo81Fm3eCfWJ6VhGSrZLo5bcXfZKAEvEH9QA526ZXpvT3BQ5",
  "key30": "64nXsPiyAYGSQpkN2WAmKaxvbvgukeP434X41EMLzEmU2fJGyH7hj1WCcKPQNpoQfzbqfRUuLFqoCGWKLusrTTET",
  "key31": "4aJQr1FDWPqYaPkhcekA9vWrKq9Dz75nZ8SggSNLGTxZzsAd5earnXgz3KNSVezeLBjxk1Azw3dZ4tN9boZe5rWN",
  "key32": "5jphiXEiANYvL1Wz6k4WX7t22E64FJYWREhRutvBJmF3RAKqHywtLT1YyG4njiQYrb991s1BgyYpsEtHpXa4dD6t",
  "key33": "4oTvDXdVTYNsKDtcnUMp47DMdBaUTErEPPi8q29XN5mpUYJaChzDHiUncGGZx6SYBMaEKgUqtCP9nZSsx1PPJZ6s",
  "key34": "35ptUNreMiajX4quhFCx6rq63xLfgqvYSDKsbVZfU1tP8Sq1E2UKSgWbKfdh4jk8PbbRhC5vwp3WBLjzWGGaQ2mY",
  "key35": "4kcVewA2FPGRMZskkZLS4h82af9mKNngLrfFVZNFmP1WWiuABSeT2Cy8pYaRPPhe3a3263MGtbzPRQna9p3SJUfh",
  "key36": "2jF8EDRWPnoykGnNZHWnmkmHCEqhSwntTPa8BeR9u4VR1YZPN4rhMQyNWYRTTNHSBXdEsq3BqsnpWyM7CDd3dp7T",
  "key37": "ZRXqdz8w6Gd128rUHzUFZYuzxrzMyc5eB34ehw3gXERKSMf15n9HRpkY7vBAC6qWpQkqC7cUXxKz4PbeUsZc7jF"
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
