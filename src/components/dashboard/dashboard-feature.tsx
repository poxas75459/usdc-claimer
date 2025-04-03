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
    "4W8zwVHRzwCNZGZ8PAHawyEriKtfqzqp1Fpk6PuuzgKy9GRM1oNUCs436e7PegLGQL2zH1yAitCzhSNw7YW6JNd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1riqYY8Vg6LQ5wuvZDQWLxpp6CaQX9kqzjwrHfmDeoNHW85fKPRLvNb4y2qkeD6AVNJW2WGhNAmoy8Jj6zCwMy",
  "key1": "31rfFwgnkoRsX9cZNeBjhRkgABNiWE5BAbzRBFDeatF77S9YJW6URviMhHRv3gXGdrN63pPJgZCuzqtseBmYsBz6",
  "key2": "3qWsVAanoek3Ax9npRT8AX62YLyFfv4MRBQk89Zk58oAB2au9P1caQ6nNSgs8HYnBD3FsTzEzuuusjBZwkVK7SY2",
  "key3": "5eNQVPwPP9NtnLc5jsmwhQEgwbKcFw3ReSC8bCVTDRYG7Pz1oVx3eD3xJELSJKaLPaqs7bFU6LBPoYGm8nT2axV8",
  "key4": "54toPoGJSWqNs9GXp82Up2szWqtQ2KXjzQowMrbJHZfTe9FW74uDg3P6ouNGg655tVaLCuSG5okB2JGx1FNVZQiM",
  "key5": "2sLeqYYrdqr9TdqqphHfJE5XNu61by2PpqJEudbSRRoxinWyaP1dgNFVbvpV8K8qm9MPxzd4eGqH6odJGTZCLPkY",
  "key6": "4tr3LNNATf3i36qwyygzyMeRoLHa26JbsXWwauvvY5pN4zeKYzYyX6wiF3dTPDTJTh71Rp8qZqtTu8tLaAST7u6K",
  "key7": "2H9EhdQ4DAup6h1KiF6RdiGiaRJFDa7awHRQhcc9sh5TZYnYzjMCtqr6yBwzrjRdsbNGBtcWxHuhybqgVN3MeNUT",
  "key8": "2Yd8fJCRRUD95UXUpAJRVFVj8X5S13koXHmW8A88G8bSwUt4mD6coDfH9wtzMTcFL6oSKEas77RYijS3hMtquyfr",
  "key9": "5DSiSFkFtLNcJ48yhHi9Uk9A8SGx3y8iJGdyXVpLgxqbLY13wh5drR4jtG142ng2Yx4KsP5aNZnJztShwH8ZetDJ",
  "key10": "2FdJ7DSMi1xmHY1RKCevDQA6NJuZiAHmemwSkRttEZhkXgQYXrU15g3fqupvCryhDeKM5uMEaa8ZUgQS3w2GKPUm",
  "key11": "7WG1KsKYAZtWwZiaccTSETGUeNjpiUX4ZHvRQPzpK3oPHW7DYJr8rH5AUucqSYuMFNhvL9crFSpfDr34wciFooV",
  "key12": "4xjb4YwfnbVPPngngHN13bbVZ9cjXoRZ2zWXZ7yZA3gtf25a5U2dxt4du45uRTedavS2fTLDHVLecr8e98twRdkK",
  "key13": "2kuzfyd4mNr1SgX42X28CAZeqKxumiZzA8to6Eoidtnso5DdQf8vBMgd6r69sQF9mFQnwsFRvYAv9ydJtrTTG6Dh",
  "key14": "5b3JAMiGk5PiKWZXstq9j56V87yEJDfknoRVGK6muqaGAaifiLbi2TuXMjTA4X6QKZBPknuR7p1eG9c3GALRqNxM",
  "key15": "2vM7ut8VuDg4DgrCpKXam1NP7m5WTsNQ3UFdF4h1edQ4a7k7vXWRu1dv3pb413evEsZngLPKAPZNtmjVicY38FLL",
  "key16": "5Dtf3ijkCw2Jmkj8fSsWVPT2tuFDfkjjD7PUorkW8ge3Lfjn2p9Pw3VkQUZWMxsrFX5etHR3cPmRxG7CiaskNNU9",
  "key17": "ssmxeod495iBMMR2GrYrPbH1PziUUhG533xcteY3zPXnK94xLD9Rcmw9jjH16oLR3t7zko87AVpuojZYFdTX5TA",
  "key18": "31yTU3YTYjtVzFTyi5GqzvLvXksiHtboFC9fP8TVQWzaoQEnNQK4pPgUa86hnKxwuAafpcD9FhUe6M76FNq9UGd4",
  "key19": "2DxxwYvnAg5J1ywjtaUpRxJKGzGb1NXRXaPEpJJRtvgcom2T9cKatTJtMZfWuHGLnMaFxgTqh4j24QuuyPB8Ueii",
  "key20": "5hQnzBgKTxVthpqdjrxWxpUYBN3juwFjpGGB1VDBKqhKf4yiY6h9euuWWmn1eVdpSuyv52HZvCmAtmtQmKqBC7sc",
  "key21": "45yqmksXUV8u6ZGTZV29G4Ufj2nyEC9VpDa1EhrQEC8VuUYgUH6yKACyyubyjiqEkXt8uZy7fKvTadushXudx3X",
  "key22": "23fg3tKHBFL1JFyeKj92YndZpzqyseFoXMkB6UM3WGNi7JWgDQ7TPyCbfPa8DsAS6UgmgRdE76wrtmJiyMAGDqmi",
  "key23": "2yz1kDXNDteC2wvA7Nv2Su4rQeSmNdpwfMr7CCxuM3o9VXVDMthghxkHYLHJsr4rksMeq9TRFtR7Ysf62zKH9RcV",
  "key24": "3wcSqWciSGeJFsrwLjChvyvURPFwxST9o3kvdbeQh7YAREAAQmc2aePABjRcEoQj5AqhMjrL1MsfUxypSgnTgwPh",
  "key25": "2xcXuqqRtjTyyKYVk8m4bZANZYUQSSFyTfo2edPzgbvJw4L9y57WCJddCbpKwrHBZZhFeE4Q62a949cSD6GSyhDV",
  "key26": "3SsVPYP5opCFaSPCxMZEyneGGKo9typCauW8RX699eYJGd2E4WcCdxFXTvFjhWW2Ee2v2znq3cat6mUDnihz18i3",
  "key27": "55bEFY4oeA8aUvfSUBdu14fRUdtJ3fpJ1qTvkcfo7qhV2dr12MqL83Sr6SXHN34d8Wcv1Lffr1H7q8nzMMq4Cdqh",
  "key28": "3uyV7SJH54aXQeovV1LSVbRQZXzKjoKRBktYNE1LJ6F9VmPcVrsoVtdDwSyURr9WT2xZ9C4aoBbdKpPjgqVZJDkL",
  "key29": "vJXesLYi5xQP7M3nsXRL5TD3XfRWhRrqrmAGLhi859SkBFU9yheVXwmVtkBAuiEraNie2f5ptnY79y6zMS6stvu"
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
