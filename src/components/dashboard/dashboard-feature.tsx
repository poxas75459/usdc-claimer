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
    "2BuvvCQVVGGg6uD5GtaxjQQqmQjTiemAPhyKrQG7hA5sdVNzpHRf8kUpunFCpQiSXvc3i1JonBRXNos9g8AeyBsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sFjzqyaewshu5VV3huM8Ur5K6gbWPcgWvusS67ZFhpn6NgcnkKZvAfCjp3JUdPmuza2m7aYx7okXgWFoCKHWkg2",
  "key1": "5PTrue7QEZKjiReHGPFwuikLfpmZ2AQLZTUkd45Z5EiycS4E5paFXathaj1EQ4pSGEtW5u3VKuq3fqF8k1zW4s1M",
  "key2": "44oGLftwxqnJ6tsAB85Khw1nnja2Eeu3CETCnxBZ5SAit5UpiiExEqcvBHvnHvDeZuw2Ewnq1xKqLp5NwzzwxWv",
  "key3": "6Gb76eXf75XpNzZp2GQd2Z1oMb4QckjeHcbtZCCZi98Daz8LyKmv8aDTikSd1HBBGVjQ6WZf4AN2Lj4kRp6JKL6",
  "key4": "5kaL9LVc9mVSBU9LsmkA7RApw914RbQGi1LmvXZaa4Z7KhxuheUfCW9s6jKnaWgc1ru2rXCJKJC6VdQPL8j55Zm7",
  "key5": "4Hns3sptMgCDtn92qpZ8uk4tXcQ9pGo3yBjqBnSJtzN6FMpJNHcL7pcpfamJpcVr2SvRnDGRgy8hLyVfAY71CMJu",
  "key6": "35uwL59KYZiRP9xNXKusnR41mGmtT9trPJ5Pr2ZAZAWoaASF6vvpfdxovYot4Tkma8ukDot2qFcokXhh4NA3qMMb",
  "key7": "2VSqfozVFxD5ySkuYaQPi17qrPQfRscRAGboJVYXpmSNEjkzEEpxkk9G5J6QF47WwF1YEVFNe9P6juGMWAKpZ19V",
  "key8": "4ryBJ5pw5HzGAJ1XLuqtdiqQYyvumFS519mCSNfFPmXmCymbq6jsVCSn9GeZYz88oQiizyY27JQGAs1iVdCD1YN6",
  "key9": "2AQx63u9cWwQDiw8WmGaYKUjjmcbF3ihFRvMFdC83zjFod4HY6hAHFgp2ckLKmgUY2VfbBmntEwjt2i1UEQ9eUwo",
  "key10": "4uJesosjbfUiwTwdHv8zpqGMbFp9GRTPfxydL9Ng9Afp7PxW2EGmy9SeMMWGffDMvdGbgQp1ZVKHpbectG9kb4vT",
  "key11": "futVBsW25XGez28KuQE6AZd5eGaoG79FFUecSKhTo8BXTbQUpK1MiUaZwuCFmRzBekuQNS5AhDSBmtwVQkgC3vA",
  "key12": "fMsh5Swfmw5JMNprFyYNHMF7epqyh4vkLsBKTQYCmHAepykxz1MTnLSQ2qnVwyJUrR8WTZqjvJ1m26KP97uHynj",
  "key13": "2aeDhEgc1Mn5wCt3ngGXSfmpBH45Xsnxyjc4tqHo9Dcy1XPXLYXzWoqdKbdyyGL66irUHFS5iuAY4wc29JykJWM8",
  "key14": "4fvWofoXx4QLJ6iGLpKnXQkYP1e5rgCy9tdKyEApRQT1yAMkdPjenQM36JHKEtCyk7g1fvUxfk3RYCNhqxLTQSkE",
  "key15": "3GEAyVWAS1Xh1FmbgkRtwnkFpBhgYdMRFngUd7tG188L4PokYHBH3GTKuusrAfiC7aFMkERGKyhCwwLP29Zxu7TB",
  "key16": "rqCu35a9ZZkoZbbYn86T7uCLEC6L413ayxpZV4F7oMkL3LX1ePHxtkT4X9AGj7AkXfFeUZdYN9X3pRHzFuFNjoW",
  "key17": "4GUeBJYzD7cBTannCRUSV8MyuUtpaQprUJRcLKMygbrM7iQdCmbPNLR1TBeDrNYRNgzEQGBA4kxzbb95h2zPE13r",
  "key18": "2Lmc41r8Qub91WoF83vDPpF7vqSStrY8vby3b3MwNPA8ZY3fZ8PiMA3egbrN7AsdJZRSswwwsevpR62d43EgpRQz",
  "key19": "46z6ov1WXNLG2BveEx1f68G6zqha8d36vK79K2LsPPEEC2rtJmNxERbjkjHrhSGcxe227iLmkoj4BMkg3pxRiNc7",
  "key20": "SySq8srTTTWV1gZVhkHqT4vZJxEqVHmnoL1baxfPcsPMLL5HNwt5kFTjxes15iZzFoMCs8B1kh5NX144Jxz9gTv",
  "key21": "3eCUkx46XYw5Q9UWUEuNvNW1AfmHNeuLMhFkrXehTt7d3Ff4ErfUMtC4MwzjCezSvKPaGWWGsBCWnskhVAZpDMYm",
  "key22": "5zg9EckUh8DixDvsvumfPuqRJASv4vYHtoKqxrKv5H3FoPKnArRxtsANPMx3TkhYvS7Uo19VeGRDvSYtcpa5YUjX",
  "key23": "23NgVBre1UgrJ9pPPXTFVg9NwZd7KqMPnKMHVYkvVNjaQsmES19cc7mANw8xeLpSow6eSzqkMArj79ML6nj8axVU",
  "key24": "46LcqWwYbVS82CxMQi6i2yZSYEg2FdSmgEynZEHUyadGnL97Lc3GjPxznT9Fqk7dJpmYUsS6rAbpAkroWj7xdwd3",
  "key25": "4Pb2wuqV5P56zAgnn1SVW4jscLNtvjvVY35BfPHcW9HxTtF5EPhEnnKxrgU6j8d8NxhHqoM4ybBVTs7GztFgLXuU",
  "key26": "hX5JEtgcJxRKCVsnvvKguZTESbLRJ4aJCKEmyvWFLyVTinjF3pLDuWZJqLZX2mRj7itmV5Aw4FTtr5jcw9eMVMm",
  "key27": "64AitX7jWqYv4pn8cxjJesYSBjKD2oc27BGtm9Ks9CbWQKABvrSHfCDHmq1LvgMkDXgnRbZCHMHi5V4oyni6earu",
  "key28": "5vYBZh42RshT3JruRMvkXoS9XFqokS9ovUqMUcEiX6o7cTXgwNMhXKDaqiMDVcLxeCBVbJBAjhobCVywJYmSJkdj"
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
