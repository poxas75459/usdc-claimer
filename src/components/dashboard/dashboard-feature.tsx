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
    "88eaXp3NwsQu2PuwQxcM7pzEwQyPoYknZFvncEcDywcaZzGw8e1Mm4i3GKMJAyxroGQX8eGSMSn5wsxVsfWgeJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHULyGK9kGcBJjwDEcktozNdwZLuE6HHKBLxhfvPvXEDgY22MZQpFhxuYNk25xVD1YTmFfhR3z8wBRC353v4ENj",
  "key1": "PnkhKgcK1Ga92ZLRkQST3GMDgicWtop7TwCU6yKLkcTSuw7pq1tGFsXgx4DumVwDwYoUoicsqE1it88ZKZKSbak",
  "key2": "3nUy2fTpCyJoimmo9mGQAnGwA7DigRKcFsBu47efg5sQm8FhC24Y6QQwkPnjWwdm1b81HzmXC4YLfh6W1iVwbjr7",
  "key3": "3mmLDwCMb4egKR6t8rQ8CHA4vxtS2smQB5xARUbxkUn4VHaQ4jWKv2MCsv5eN8MZkiZEzaJV7F3uHP5nn4vqZkKE",
  "key4": "3f2dRPcunKF22dVQeTRSrv9nAcgrX7vkMHHrzDXSSvgtsLUqYuqm8kQmihRoPuZaHuGqsD1RWS4FBjVXJK8bNcKD",
  "key5": "3whCdYWrDUrazHxgd6b3FN8FoA2PimZos1RWqqMH6F22Whg1zJNhjyHCYpBqTudK2RdbBujRWoXZo3QYcDvRZ3wH",
  "key6": "3AVmUJUqSnS9V1pnpAbyN4rTvyTSGTxnAyHEWe8AVB4HSoX3h3vej4f6ys5pKFPbiEwtPL5AzYb3e8MDFs5oAwHo",
  "key7": "5wXh1WDaJzSMm5GoHqpEVqK41x8gQeWdM3NswEX9T7Ko374rnPqVtbF1uTPizSm39kp8hdC6PSRYfLrxe8ndU1dE",
  "key8": "6LPWYiMHpeA63LYr585UsvPxzvXZynFm2HyGTgeCCqW4afZKmM4Wu2JC92Djuhibzrcy1m96gmVY9ZeLmpuZHzN",
  "key9": "QHvpkCswWJZ5Xt1neVGRUjH2kme1Fsw5MSZG1aVdsg1vht49Fjryr5Cdd2EVYj99GfRdqXvwsyQSuqEGKMsxC8s",
  "key10": "2a7vp4UFWJF9baFVtfJu8nvVWQraVjojorh5A3GK1qdL9zYT4SmTcWoi8oWk8xkwVAGRMq3uAzekZraVM2DJHxb",
  "key11": "21GaCuXS3utaZZkg7WromMcF5aBtUYbhPcdYWSeAxXNtCrttY9N2wjR7eaRSxfDenf1Ghj4dg7yYrhpVGU4ePJ8s",
  "key12": "3j2LJP2LMdZx7YH32mR6HncQRuCGBTGqZtUgVRu7kq5k2d65hW34bVCe1omtHLRBApM2KJKB6g29rVLWfT475TT6",
  "key13": "3XsUPZjxgjurCNyrf9iVJHizdLKyhzWsP4qKFo1HzUs9iu8m2wmSUnrGLbrDTj5HD5DJfeeK87U4EYZgzrzYFoHz",
  "key14": "3ZUsRbjktfk8ZQ59Dra1tqTNMAy5TenzYKcHKEw1q1Kg3p3p8ze7qzH9QckScVG1bs4tJmyyRicDMUXmjH9DFMha",
  "key15": "5pkSQuW7mCp9PUHunQbJ5jZ8setoxSBimQuVhG4hRDM1hxzrqxvsfbJxWrQuP7ncyPTd9uYgEhcmkT6jVVRP4foo",
  "key16": "3GFmbtkRf5EJ5Sh9t8TM4xLkBmUapKxx4DMRp41mF9p1ueGbKoWu9swM9Y9qcJdGdaccfxpVjWQXxaguceAFQLkp",
  "key17": "2PCpyRDjcakxZqLFNrm4yCrzeu52jUP8VXUSv6tt3C3S1Yh9xNeHRGneuGMThiey9DWBiVRnqYcKpSYd57mLzFtM",
  "key18": "67m748oQh3PyDc7yL7cxEdXieRfP6RMm8Q9saydpvnwS6yfGCN2GBvtRNQN11ZM7kEZcwo5DjSZusbjmzuR4uZhz",
  "key19": "5mD9J16MZjDxYtowSfe55UcmQxXb7pDtTfkV1p1Hdv8GVtnAoc8JAbFk2P8WiQGQZQbwykasM1sW9dCopmyHDUfU",
  "key20": "sr8dmaWva4yZN857Mkd9pu1XjADvLAoPnp4rJQBGUMiokPc3Z4nyADXwfiez8VDMk2SZ7F9wokgYmFWh6o2yhGn",
  "key21": "SsmChvB377LUa9Nkn45nEg1wcxuqKJJ6ipyqsAVToE512er8mATZ1czV1mXrAD4ZGQWvhb3WJP1khKYZcXyiABe",
  "key22": "2H5oyT63dktp3UvDs499YEdmH7GGxsAzau1xz3cfur8b9aQVx378XPF5tnnrt2CXPHnmG6RkjLmdMPm2GXMDyrJD",
  "key23": "5E2ySFcsYFzQF6J72temJuhG3cQzAznT7cYZWyv69xXysXMKWkqS73qtp7Ni12ertUngZH8yPWaL8qb8f8Hoy4GE",
  "key24": "3NSzMQ4zGxrJxfJWBPN3LSfMqtLrvtu9rXZLg78PRmroFznN6TBxgcrSXv1SNN9YeUWE9oNcDadiyYSj3CWNU7SP",
  "key25": "5qaf9DCdVHGXPn8EN3Z7HaoxWMC1tNHGBKmbt3fUJo2qzaJd5sRZTN5A1cYbPUk8wCLqyXof1dk2CX8GwUdXsQ7P",
  "key26": "ERf5GgFXUYER9PoCpVSfaozngkwy53MC5LsaE6srRZ4QT7MGNMghipGiZANPPU2mXB6LXi3ffkazmEDfNusUqpv",
  "key27": "7LisPh52ePJw9FsspCK3ZY5UScPGHnYsusRy8JM3dtfmHjseEcc2mLpNvPDXhWnA1Db9ZdisQXXGLwc73fBqnJG",
  "key28": "2w8ExtcidxhgQqGkqM463x1mrpuqyPtyk6KfJt7zAeD3Q2JrUJy8wvucrPAmHmb7Nsn2JPnJY1Twi9JXbr6emYhy",
  "key29": "5LUTa7cAT9Tmx1TjE5uBQN6WnWqscKEBo8NpXfDnoGXSLnpAsNXFAfvCZpXKhLJjJ68WQiYmvLFm3tw6TGspDrLC",
  "key30": "321Hrg1FTEMSGURXSyadocNBPWNYiBRBMUwy5FS9pu8aqi9xFXJ61WS6xUhFNvxvBFqaAFcY1soeCo35WExTcvqZ",
  "key31": "5Xews1KaQVS3pj64XGXhtWPbPdUve1UNUyBAeGPrGWnGAa7yDxGEZi4oELsQqUSHkoAEPQLtNpjfQXDjU5W8iUWt",
  "key32": "5p2fSkoZEeVM9Eu5rAxjTzjyT9RAMyHTZ9SJ8ESgxAqCG3hmXzDyTGZv6ZzqCtiTjmtJad45DVwqHUjuAeuNFe6X",
  "key33": "GnqcobXB8wtaMkCumd9yUckaj1nJ1QiewtL8bK4k3H8wMNZqR2DiyvULhgCiXp4Vun4jfam2dMMA3nT5mEFCTBt",
  "key34": "3SZ2nhJfZPHvHTEwRZaxDNYeckeb93H7As5DMbj7GYLbTFBg34V39si2cUeJhVh8ngAHDZwBko41s3JBn2Jmqdg9",
  "key35": "56kW1aqvkhLbk1sKUygJwjqgk9QdmF2WccFKu5uRcouExLe89hGZUvKGgENp59id7g1vcNDuN7fb2RiZD7CZtgAd",
  "key36": "128qmcfKskZWWNTKxkhurqreLMsZwKj864awbrgm2gGqXMwoPs7ZTtL3bTToi2nc5KccRpUJDDGG36eAE6jN6WkL"
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
