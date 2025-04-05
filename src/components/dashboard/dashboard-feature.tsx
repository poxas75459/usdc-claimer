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
    "eWEDcwMtKfa6PqnbCyHAGzbXgsdJoxLuckNkoJUPDBfWHKX9wnYe52xjnLHC2UqBZjG8TMvVLw4gznnzCKutkqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8vjYiDTHNEQSiV2PN86g4RUiWnHarr18j4g2PXgLPQ6vwEx263z739Ua28nowtbwMcsYR1TB1dXq1zv5AfwTJBH",
  "key1": "5jGuMEx6oAvYUpjo1DKFCqajCXND5tAcMdTe8AiGm3EEwQoDCVdm54CKW2AtKEYBmvGv3Lv5P66tNL7wiezq9mKL",
  "key2": "5Xco8qqopyg9Up3JmaRXYWsuo1ywKNJcF8urJsNKRokMFqPSpJQWReU1jQcP4zdn34fRCWPaKgYVK7JZhQuJEvFd",
  "key3": "4yXC4LqAxgFuJJ7V3RDasnxkoQtVjGgizrUPkFr1xqh2Y7g4wu9jVWgYxkL1yHmDMNPnNEgVHsj1U7AbD7q46RDo",
  "key4": "5MazFtV5KshDEBZwQMyegyGCBmCvG6UWCwjnShDB8rRwxcHbiTjeRdG552gPmF8PJCNixX1562sssbkWuis2GzAd",
  "key5": "2WRJzjQHuDmkfYvJy7f9NGTLxzuGqa5tZ6otBF4fiE3m7uNJ3RnsUtNBTVsndquYWHSdjMUgD4UzxHoTiZpeVPDK",
  "key6": "5Tvuwd96tWhqcmdWYAhPaaS46DtDa5Q1SLcjSowqhk3iX6Ys5viJWNrbpATPqaLTrLWXrtUkfwY61YMMYZ2Rx7r3",
  "key7": "4FssvtszB12xUAUPDpJzB1CckLg6hm9SdrqpgF9Nr9QmauWJhXrRVAnH5du5yzyuwQ7Cjht6dubmeMw2ihBeo9PB",
  "key8": "mmfmjrDd6inm4MKxjxQwg1muuFCsfGhMxkk3CnGzi2Au6FGorPgP6KbsGvtmqSXJVotzBuBCDxeorganTNLVkRp",
  "key9": "eiK5L8JCfn682atnP4FticmK7jaMWgNNXoECqNVb2Y2tYKT5ebWhnBjpc4HzjkqEHvQndBdfDT9ihztdWrQiNqc",
  "key10": "2Khr24qAnaiBugS6c4bADpJfiSneuENziSGWSxE8WUPgTXGZZbpDdbXizoc2jHscnNfmLRmkejAtmY2RPMrt9vYE",
  "key11": "2ZoEdqZHrkpXhWJdGhKDricfcqqL3Ev1DgXJ99SudySYRvJeVDUVGkyiJJQbNdDpwL7jcXE2sMVbJz3Saix3TPFo",
  "key12": "4ufjbTBWkXemmSBwcw7Qwx7UtjEgchuEXfKvsf3ea8BR6FPxeD7c1DT8TdZt65fCooLmyDGZYf4afMxrNDJeYjQq",
  "key13": "4ba1jWFTBxukae4p34Cfte9nyu8Yoxk9Jd1VHcXcfCnnj9cJnZg3bZ6nTYFxScLQqHwuKgphyM3qk9yN3CxGZd2T",
  "key14": "36PYWR3NkaAocyiCwwDRwKL5CjaZNxMoW6jaRcWeNTC1386QK661qZSjTztkyZHixAWAyTCpYA5GvpxuoZBf1UEj",
  "key15": "a8bRMbpDgw5613rDB1EqQq9MzUJGgxtDUHVGAvXvkzvwSjohH3MtFnGQGp4HB4GmdAnaP42GZLYJRhg8cBMmPhn",
  "key16": "4prQUX9AgGQGWwP6MkJ3VVVW9oqaRzwYzjqmG5MN3yUjSj9nUBgPxfbGCv5uyKe2Hm21ie46VR3mFrv3hgbQMjJH",
  "key17": "WYk18TLx5H27quPZDz34VBbsT4WS8JQ4wtSb3MuuqBQde27kePJKZVjfrryrFhPtV2QbiLgfwFScwnoHyALK948",
  "key18": "4fLJNTkae7cbRhtDEmMPeMFvXZgbHS3CQCkvFovnWuyEDB458FZMEopEFLwNSwBpgbf8gxasj35zGLjAD9ZnmqvJ",
  "key19": "631R5TWDM6XeTT3ArJkBbgA6BbSMHJrrHcmzj5nBAaTtcaGeeaa3opXbFUSVx8BsgCsXYQzDWiaqJQT4EzDLLz3B",
  "key20": "2j11BZ8eXDASTRepqhepaBmrxKYz4U8Cvwr6fQJcXfaxm8CiWTQ6UkiDUNWFKda4tqSBtgx4se6vrhusoKCi2xeZ",
  "key21": "5Tk4hWW41B1NGr8a15c9DwhJ4fuLN5m24iqauRDUWuHAAEQZHhex4iypykdcKGou2jhvQMgP9XV67kgLYUPdneou",
  "key22": "2pR6YsooqWZDZ2aJPV5hcRmXbeAQKNzip9xofm7V42hDXGBiSFykXSfyhcVA6LV96ss4kJadEQExhkLxddte3zRv",
  "key23": "4bX7AEejjkb9WsKwgedif4RfYKDnMHWwwCf9EU5zUr6xtcwg4cvx5PRWfFh9uWkcjB9xt5899P39dnBd5RGzDUyp",
  "key24": "2YG3t8vYkZ4Ui2azQyNbLcQ4Qweyg7dqgyGoHkuzaXjP3PA6NsDnS8bfBwqXWjWsr58WHwQMkKYFCL3BJ7BKYXRp",
  "key25": "9y7dpLNFYoYDBj27KRJvYNMWYjy6Fk517mCJeSrrsRkR8AJNud4fkxtpWcnnqaTAhTr3y7ctt9oQVJZX8ZJ2G4N",
  "key26": "5oUBc3v5ytpuQDxnyNAZUEkhr1RPBS91a3niNf4MRjhw1kJW7VA2tmpC5iZHHjWrCWkRhFTucsENA7Sux81zad7X",
  "key27": "5L8t1uV1zwVZ3CyaMcTsTZHWs2YTqeEqMKEVhe59vFPJaF5uyJZ1Rws7XJeZ351WZHKHcQm9GbKoFmiT1mkU3RgY",
  "key28": "45b2vbsXMqrAfJ21rpmHe2xpeSnv8VChp2886Yge4kKB2mDwTya3WmnMv2Deu8iQ4ZPZfiymHsQaME6Bh45pg6eK",
  "key29": "43viHET2pbF8cj6wZtdS5Q7WVQqKyPQgBCkQcxUrNvmZNgorjHbBHfXwt7N3BAV1NTiXjd2x98jFA1sUu1bYsXFt",
  "key30": "3ctaqqMFYQtLmoPw5BbPk2ErgiYDzLrwbNE7WBicuGemqMKhgnXUJWpiieBVSY4gKU64r3qAwQUAVEG5myG7d9xj"
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
