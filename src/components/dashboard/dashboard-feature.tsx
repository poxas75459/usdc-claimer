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
    "2uqqaDkC11RjVD9Add2d9DA8NowNjj6VT7voTqPkX31JCBhBM3MKgsRrPbYdx6LhtzDKVnuKGbCRWGSTfVdFN6Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymoTR2qi6tzoremZihAgyu18gpw77Q7YcHFFFKBRsJWmGuuc2U2osR3tcYHQ6V6dRLtiAqzPtLTW9WvP4ct3jZH",
  "key1": "5gWmpZdczxBEf12ax5rWMeZRcVSb21Kj4mHUY8X35b1nfYfPUfz4f5wEnfVJErtChw7DborrqAjf1L2HRHx8Ht5j",
  "key2": "4SFFvqpMQNTsdAHqny83UFGu3PE7dB811zKiP9WvxFtPg83Pj2grzEQKhoR7JhBthmU85KbqCDyMpbTuuR7Q18yp",
  "key3": "64iK97o1GakveyFasy8LVmc6WSF7rE3e64uv7tgx12MMv42uShLznFP5S7TA1tYkhRsz9z2DeQLgY8bDZumK3GdN",
  "key4": "5dfcLzwXJVFwSaSj7NeRvYgfSZXcySJ8LGd6zTPPUrp4dgq6VQpGsnNDp3W4HfGheVYvwLPPmdPQQRQWdc8MDFA2",
  "key5": "4L2RnhxB5mSQDq7cfMqH3dA1aFna8fx8zBqDNd78oGcBHy4pHeVfPKavkQn4vMGnWN9DDiQuFmcWdcy37B9yrfjY",
  "key6": "3MHkJRFVp9i7Nm9hmCxyzBk5PSzsQv59qdu9LHtakGu9DDrBmBFxncQfd6Tiq1beDbB71ZUazBvTJJr2b8XFFibt",
  "key7": "VrabaBRcCwzcLbuWYMdfnoEsbfnyJpsgtsZjSgJKDtZhjxrRZ53HaCXPQJdaPQDo7F3tUfxfTfvfXRv7WYbyJny",
  "key8": "2vAiWou7b6QowDpHYbDpiZvQj2avuSypgBbjYjepibjhdxBFKL53KAcP5ZANSuR4WuzwfAgGbR2FMLb7c6Rosecf",
  "key9": "46PFBLfRcQA8sRco3gr1qVnrP5LFFJbEeznvJbg9eT13adTpEZUzVgMZuq8v6h5iYcfEpTej3k4BmPxoEyLfpFgr",
  "key10": "4ZPnaU4kL4GwBCd1DbHw6mU8EPZXdyj7tiprNWG9SnjkNvVRuBfeu3ES1Hd1dD2Fpng7DXPMdbHgF9iLPg7YTLo2",
  "key11": "5YLsHQbyco2QDSDsFmvMae6hLWv2geuiDf88QQWrEMuL9YhaBhhQNzvNKj9W8NZ6prG3VfeS9U2seF63A275mMzW",
  "key12": "2qAb936x6XTU3B8kpz1GNwRLv8Jm98S7KoVQPqzvcL6qCTMe7JhB8bVhc6QetcxtFXsAGw1HGJtEUWdkdnUnAAs6",
  "key13": "3hfAi2SQo84SVe5eMGkN2KdZ5SRSotHiUrv8zy9Mb9CJ6xdZ6K3JzsSnV5GcLbP2og5jbzwGbKVAu7p6HTdxpX2P",
  "key14": "3zt8tg1i9tDGiUCw4xFwGGvVKsUBSEx6Xdnb6z8SSPBiR56653DzWDtC2w2ZDqmtxFMoXorKgwE4UYRrp69ni3Ld",
  "key15": "we3Lhpv2uBbsnFyJ8TxnHgHZ24pk6acQAgzEqMjCp14tQEyQqWgrrd7zgJgqd6UweeKzT4cSJECjw8m7dsb7hdX",
  "key16": "37B7tKsDW3R7yLnYGyin4bWFor3eMGVdThHFxqwUVUJwE8ueGJk3rDLddPzeBFvjXGaMCB9G8Ru9PRveBAhE54zu",
  "key17": "674twZC1LEda6DXqMb9Fvh2yUj7UnyCreMko9TzsqSw6MhFoEEW5LMapggFCTWKPYULjFe3SiGRQJJnCg6UmTgqi",
  "key18": "44un9ZbENsRmbp1dvWSn8NbF61rdqq4UDvF1wpc8wFAqxNuM7C6M5qPhUE42PUK3GWoceRqCrCgumZ1ykWHjcnww",
  "key19": "51hVYtKBXuuNsiCdrbDbZTk3EdqFcPWwVDxavKnVKpb4VDgSS6SG6TjjpWyaPM3JJwjZTwsESMpwt4o6f6NMbnoQ",
  "key20": "5HpNT27HxEtEQgCe1JPap8rcQbpGoq22S59bTzfABjDNZrq9Jr7diMBj11JkQVK3NdvWjUzrKaVAckyP2CLcwED8",
  "key21": "hnUacmfVYw8WWyzTQUiqoVvGkwFwVpRtwZASUN6zxPa5DNrmdoc8G7b78Dag7XvJW784qSyr9riAd3fEJHCYfJo",
  "key22": "UuusdySCycWtjSDuUY8oCGxuQEhnoNLmzWdBMPNntxnxAwBmANcGUzbmev9H9Dzu7p4n1LLmNzg4TgbAhsHwsp7",
  "key23": "4wQRmB3tXvhZEkyMUFv3BwZEJuo13SCquKKejDbcFYgzDXtVw7DjseaP8v1PSUn2uEyZoMzVszFAJwJNz5pew4Qw",
  "key24": "58o8J26MNP31C52EJNTmP5KCD2SiqSd97HBPAx6TvqQmsze71X5adQWXU8rc93HE4oq1jRRTSbWMHCXqtQYfcxfZ",
  "key25": "5h8E9exa3CNsQD1bjGJ2AZDNMbcFsdYBkcrX81NYpnM2DDHMZ9YmNyS2ASPjMj8B5kBcddVhih633jpDWsg2rqTQ",
  "key26": "5uTt7B1URP4V9pFucHmLHWawnB2329X8PBp9KmfVrZaHDe6ZA1fYZ45KEZfwgvuf8dSyWCzTF9fiAuqDbNNtMgrx",
  "key27": "2DkK7peUGQQZUNkPSEsGvbrWBxLRrT46THgkv5UQjnpFM9v8VADCMqG37kuh77Xb6JbaMneYHqEcSdWu9fiaRFkq"
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
