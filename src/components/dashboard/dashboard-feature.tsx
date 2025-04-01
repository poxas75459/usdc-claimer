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
    "KMa9jCmNcEcuzBDev9KHy538HmxiEocR3p9X1BkDTQjC9pbbTWtwcpk2LFj1gG4KCw4ho8RVpoVxDvuxfwo4i52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ebiLJg4NvZz8PXyhCDugGjcFkq4sQgQRGjNgLf6Lfk2m8zwsjYpxcDCYNBsFNnUQa4TTWgwqc8TuX42ioiUZYt",
  "key1": "122mSm2r17Edhuoq36Hj5ibzVjAFPXTmGB4bosrnJBu25eTgtgHKfwb7wcyQPdhwBH5wLa2qh2bHTULWqikGq3mF",
  "key2": "2V5dqMHcdHpyJK8Xm27sDgqHGuLsJEnS5Uti3LUfzgQXCkmSFNzAgQWnNS6Chopb5QodNf4Qxapta1FdtFygDQuS",
  "key3": "432gNewm4b4ZZXQMpM8BEojgFgEVD4xgrFqP4XXNT96pRiUJQPCBzAaunpCA8BfL5bPGyM8YFZM7p9WdbLegp3gD",
  "key4": "2mBa5o8maV9TqjpJyf4TnSkKwr4XC3YPVgAezefBhR6tkvuwwtSWpkF3s4imSRg6JgoUBs4dnje7LrnNENrjterP",
  "key5": "5QjqJFMcENubyhCk57fjhu4dj6wWqYy32HF5S8WPYn13ZMrszCB6j5gc3Tao9WwAmrVGKyRmAmtwUgYywyUENnzc",
  "key6": "sDCUSzAcKvWMbsD76h6TfYZiSKznuvKBxCwKSGtAwby4JkXUFs1a1KBGb25EUPwa4UQXcnYKDAW2vnfby91UpFF",
  "key7": "23GRtTvmTVrEdhKjzShyryiYLDvJwysAoTpiVVW5g2ep2QyCjMAsVMUy8aJ5da3SxCEhGyyEZoekX4hwi5JDzVVz",
  "key8": "qPT6bUygRJCzhXNAneH6P3zH4eRF2XjEMdMM6G2khwDu7asUKiuttTYfSfKDfjnqudSVCTFmSDuezwGrHaxR1X9",
  "key9": "55nUtXvBPoad4QpdEhJA21y6LSzjLH9Sr28NEpYiuZXVVuDCyRkMdv53NozyqEDcnjvxJq6Jv2e8Ti2iDwuPKPGg",
  "key10": "tq3822TNm2mPhmDgcHA8tZjAoAzSN9BwhjMeruxX3bQj2opkUhG1SBmUKJQBp7tCpeXhxu8jNUHZUhRJo69Gzi2",
  "key11": "2GoR3cpkxviPBTRLasseXcgk4DqBQwvKqcMxVBbk1v8EQugTS2GK4zq9Mv4mVNbxoyud41Xw1g8Bmh3QN2tuDUMy",
  "key12": "CJWYeYkdUQewuj8cwirhWkU7Q5ZoS4sieLQmTNf6HDcte5S4JoRdRkwG3Dt5D7mRNBN6GiQpFbgF2EUprZmKrsr",
  "key13": "5mockxYcdd7ZGswNvMDJfCzHzgFwEM2ZPaMTLryZrM6E3Uj6Q8GqdLtHXYWDK2o6swB4aEmi5PLEWtnBK8VTRb4J",
  "key14": "3yvfUKRbnNWCzed6K2PynP6o6kjg6w8m3njnRWj91cDLjGqxvyh1yBJ5AuLsZxL2dKWFxkPupZTsRJpt1RdpZE4S",
  "key15": "3S62W9jqdrTfjDvDm4PeZ9BKUGf7LSuBCo1HRbvdurj7GErV9NKKrec63sGpfedqqLxo1JhF8Vn32L5krZuPxh59",
  "key16": "53YbX9VaHZrey6Yosd6zE8b7Nw3HRfSQSNd4YtYpFau5oUpWrBF262qgsTFfVv4prKxJm3gLjMEEZGECvbp9Li9m",
  "key17": "2hsMwgq2DVrzUPkgQabdEjaMBFbG5oDbgYdzgQcTTH2TCwVPtgYaAT9iG8Ma7Je759Zjam5cpKT7zBiAoyJsNPAr",
  "key18": "27wEdrjninN64ydvQSkWDCTf24WdLLYxRWMAvJyZZsDYQzpBGboeLTPpNoJovbYLDrKWNhQEkwhXK3Bj1eoz6zNu",
  "key19": "61cQukwnaWm9E7tdCzxqsE5VjHUo5yEuDmkFbBZbsaJBWxPGJr1BrX946iicQr2QMtiLusLEMi4rnkQEiK2hUckg",
  "key20": "moBTBLKGwezrG44V1McvtcWMbdvcKvvLDboG3zhZjHqx4fsfshDjHYXi6W375poRfBWGYqxsm9Wxc6HjG8dULJv",
  "key21": "3ske4PvuprDDFRXAPPK9BXeseGdoXFwVp8f2JNJXGzJHpHWDsbxqhZA9ZK3uyfHkoo5NUELvCQUvHFbaN53Eztm9",
  "key22": "qvKM5VWYrKbxS4Aq3nsN6tD8XyiMMEkYQmN72JGHA3sehXMdVcNrWAtiyokpomm15BHYQ8STDnDLFKuaLpKdGWX",
  "key23": "2wJeSMFeHM8ToGNqPn1Zgi1uWduYk26aJUwgc6oHHdjfffwF95j2qvP542tb6NLH79LZFDTcuzRy5RRNrjnBSMA1",
  "key24": "51WphRWp81rvTv1LZjTpsPsHfH1TGCvHmdmJxkec3oWWjUgA189tLf8mo1MNogzNu3jmngXFLEuKS6pnLdiJRt7N",
  "key25": "yS4aDZyhqub1DBUtFMoZm775yk6gLaC6SpkG4VQt6TuA1bffSxpAkGSxVyHe2tiSTvkZkd7nrsXULLttaGa8cwX",
  "key26": "2r3YdHy6etdeB12wiXLwquFrdowMyPYVDq5bWgWMh5Beiqv6WBC1uqcB5sijGmDsr2c9QAgbeUfTCdnLpkYj8tKn",
  "key27": "2waFMWK9BR8dDTMzMmzuuM7e4ZMzCVcLztgPRyKpHBMN78f13fmHbMgtNARDom8pF4eMVSBSwSxEtp1caNtFkJgC",
  "key28": "2Mj1nWfhHnMUmTW4ZVacbRgbkvK8Mz9ehtNorVNxdw21ARhgoHbDZ4EvcZonqQRQAGMSFpb7iGKNN5Rr2uRdb4xL",
  "key29": "5KCNWpb2hQsYfbNKLKiHkvApqi59wJZmtcRhuS8UDQfqpbbUhqF5bqj7XC5yXReBtGfi7h5w32br6zFZuVMvjKkT",
  "key30": "5jXaZQ9iBYF8FD4v94WBjAUMrkf2ThLjUuh2SZQpM1FUi8UPDMpjdp4GcjQmKvzw6w98cYkXbbmZJqqjmtN2wQZ1",
  "key31": "2bnUwnVsBnRmvFpb4t59GnszSbtgXwhFDkTdRTXPkFB829RHcL1Z3XkMazgogKvGiJKAq7jzMJaDz2m2oYrkm1mT"
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
