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
    "5m55JXRK9mxJETNVsVDZ3PHNhVCNHBCa2FpDZKzr9uo6pQHmU4ETSaZSZLEyFF1UYLTCJgPdd1n5rk3PWbaSjpDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wvf7qDCN5BucdtxiCFN9cogR72AdPqnCr2KdnvjKXTdrNq9A43srFf9eZBpsbgwGdHvUjvv8ivuCivAR3z4QEMJ",
  "key1": "5rCnFv9So5hHg3fqFbq6NfiqgfoRVwxMzFVdafzwSz7wdhVzz2ViZoZkXPQ8RbFFEVy1kpM2BHXowA2EYx1JyKz6",
  "key2": "241XpvY4usHcK1RoAt5uBoxtJ8i8rh9CUVC5YGhEWWV1XYVSuJxqHJrAPjJttiRJ9RVcsa94692t98vJ4U14A4LY",
  "key3": "3UE4qXAvJ3hBwtgUs2D1jLedDv9oDcT7SZJcfRXMBS7Ai8qDTRSg9PD6qwzejV64posJYQk4NkVW9SbTsZXSuAEA",
  "key4": "54fSZ7eXYHb13pAjpZzfvsFmVh4B4DKeKFwCpDJf2WMhUTQbKqnAKxtfY3dC5mbW2ukwogBvvp8zKtjR2c8wKWKi",
  "key5": "3BUnDcYGnsnGXGFKxQKfUREcudg2NG3x5q1xPA3HtQ5NmuFTK6h95V2dpeun8gfgZLrTjmzNQGCHZZEDf2ZFHBh3",
  "key6": "GF35CKJ2mi3t7S3vFZ87CZC9KDBr6gv1sZdV4AV4bpTwwgQ3taC6t9pdejeJwbCobxkymFh6Yr7LfJKWHeQh8rT",
  "key7": "3RR1dkRbvshTf6nB77fQRo2oSsV8uLbbscBsCzZ4FUbhkci1atZH7wg8rkzk3upJQjLHXeTBuCrWAcv86FSah7qD",
  "key8": "3xG6aY3Zf3rcbzi6a7xAQMjV5KwytwWZLeTug19JhtmyinEzPyfc1vhqo8tmW8XDuJs6drexLGym3z1ZsdEYeyKZ",
  "key9": "3gR3RncmWHRbkwN5Xaj6ePNXMX6nMRzzCDCnGwQqKqtTMfGNMaVeYYNhoVNrKMbdUBEsBf24ZCny8kQGKSiHBij6",
  "key10": "3xCd2UJqtEx1gpUQFBqoQQd4FJPeSdx8pUy55TmRkj5BtzXGVq38Yd6CiXYF7ShChdGVMQqX1Wra3eSwWhohL7Yu",
  "key11": "5R3oxaoe2upBK5tzRB4xZohJN9uvid6CMwNFL9MkPDCe58vHPn5EnKWjrnprdXgxkzZ9zE54x5cYppjbThYmHQqg",
  "key12": "4gT7JJFHokyXG9KAGZba6Pzy3MBt6vHk3vz2YAvDYLBasmRSQPYziuzzXBTz7VBv9wpRRAxQVjReodobWSMQEE7p",
  "key13": "qX3heiRUCrmansncWYd52WCNJMDmY5k4pJQoPt5zQpVJwATGTsLPXA6hpPnkQX839qJdARimsM89L9oPEYAQ8T7",
  "key14": "5QQiNd5ccHBiurGPwr34UzmgPnDtC2Emn1MJSqVpihRD6j15gQm4rcbJJ2Ji6tWHgzLqti9PKRpXMee9JoqBHaB8",
  "key15": "6JJy9MG22MF7sw3LBisBZSdLc8b2kgja85toLV5gHvVJNdWrywrUF5zwHAPZxcX8KJNz5vPC6Pq7RjWMi3ErSpT",
  "key16": "4uVNwb5dA2SQRyb5TwRdDbqeMSqv95bu5dMZeFH5oNWUUexEjPc6H2GTwMwEony41PMuXfdnCSegvgjGyULvmccT",
  "key17": "5wgAj1HQa8MwfReTKGko6et3Fvv8DQeLJpG5TgJ4vVs4VEGbjHE1qvp9CREiPa3331k6B3QzbSTPU23tqdVCP8vG",
  "key18": "23xmfJ1Bx5YfdPgP6y5VpbFVz7GGVdnd2YJMLEFDP3MERtSaV8NJ6Mn9rYUcTvp2m3MRHo36JPLxPtHzFzD552fT",
  "key19": "Yeeau1qtqiXYcASZokHfPbMn5qqw4U1jCfiyYYgfE5WqfpnvbL524xXMccHvTtKPNwNjMvu8wD857GnQQeveNgF",
  "key20": "UthHgmHuffiopNhdC7Fa3FaLrvA3VUHxQvrt5Pu1NL4RmWbrpZmqiyMryziq3j3aDbYLcUX3Fqn7xc1g76BnZCn",
  "key21": "tv4TrcwfuNiYuUxzi3KV4BXYFLHEiyACKvUh4Wj6ouaMoSzSJXBCY8pbZcr6SaNN3abSi7vmtDb5heKMWZWeiKz",
  "key22": "5tDLeot2g87n823nC3hkU5EJzDJcmZLgn7J6rDeb5m7ztxgcV5NhGzn29eJawUnvzC8oQmz2kCAB9HiC9EJxSwYj",
  "key23": "23B2SVA6K1qzfUpPDczzBVbPCHbWHWoupfDJWPxakw1g2kLB15KnYneUDpEJ9RnXbwjDRyPZuSyWWqziCzQigEp4",
  "key24": "5hiEaRp1DgNY5v4YUGsXUMsMav5MG7RMppqMYQHtKJSmxgfWPVuZK9ZVGMnpCgFmjZtP1c1Avkq3q3rLGvpns3hs",
  "key25": "2R4K3KY6AxkjYUrt3M6GCR6a3WpSd7Z6RbHmzMw4S86FwNeJXtVX1oTYmqZhGjNmFCaamy6CC1KKw5u3uosVXBwF",
  "key26": "57JaQt3kg1HLnaG7wZqhLykui9i9sceXmmfV1JJzfN3Xm7KvP4wQP8WXR9TEKBjrgd5Ymd252iymjmu8u58ZwaSb",
  "key27": "5hYky63SAc1f4jbmMMrSbEsEcxPFbmE6Q3rNPp1rS8zSrpCdZMjMA128ipaaXFd7eXvDVXvk8B9q3QEpb9NCkWd7",
  "key28": "22o7vLkZ8NWRYDxx8ZAMLsd743xwqUZ5esXYPG36MmM2XmPJTqQfuxfGjYvqzoFTQGhByRvw2v4pkVMR1gJRcYzx",
  "key29": "4kVhqp6XEH3AvB62x3yfqauyshfDZHndwAJrJYaW6Q4KCfzXcrmSABqVtLtkDHFJiWgFjvzpmrv6WsZnrAvzHSdW",
  "key30": "5VkXEecGxB8pQ6oHD9FSJxEtF8M4aTF39ivayBD6xbd4yEe4ikVe3C13HLe54VE3jSdNgDNuwaWCETSsU7jtAhaX",
  "key31": "2Sq4tWHzvLS7ePnGeukWHD8rbgEanCgMZyhUeStSMcnRB1a5xrFfFaKSvY2CRHcDn6xrD2tKPAhTNX5ZjNtaAZK5",
  "key32": "3huj1kD1dp3zdK47dYoZ1UaX2WXTMzup5zDA6EpPe2nHX8NiLF9N4HKox2rfD635iEkNQ2hRxY7EmihKLjHDatQV",
  "key33": "3W1ePfa1DD6JYauCK6GLgq5F1EBDx4WPrZ9jAdPz1SvDYXZkkDDU5DaEbbWa2sA4AG9hHWR6CrvBhp8D9Etfo4Ro",
  "key34": "2nHep12szh6UEFqAVRhKdtdxjVkraHWYyCbUwebGWArUVJkBLdVmJTvEWdb6GgLmH1vBx85FNQacTXHZApYMQ5LU",
  "key35": "2KVf5VmgLY48aznhYLFMkcjtdgBYX9UHDcsnPVymbu5k7xeXMX1hxgqPb38634XFnuN9HahVejWiXA5VGwxS8gt5",
  "key36": "zP3sYd3JZhMddHgttYzb9AyLqcy3wq4aTJg9rtq1YnnLBgdYE9jFKVFtWbZwHChHzkqpf3DZw6Atzrnx6fiHVG3",
  "key37": "5cvvKboJjaNUygGioFtLdj8arzx4TwGcJMnBdF8fyrnvnF8mFTXxhTqtxPHi1gDwDhnBonJt1TbpF87sbtpGinig",
  "key38": "5UgVDSMXkneAZTfDD1VFr1TUARDneiufdxdjTQQyT2LdjFzD5msnSTx96K7Ri67v4zKd63ZHRmTsqJggwaYcfCcX",
  "key39": "43wuuGE5FAxDjjPAeg5SmKkGcoC1XCAbmWko8AJWx1BF48fKevG5LeknSmdxd1DoZKnAzarP5RU3eX37dzyhdUQC",
  "key40": "5WKQQJiCP9iTcGg71BmUywSGVmBK5hfCNtWLWou5taXzHU9rAzZqV4tid6zuAGtjNhamzbbUQacDxh41d6KNZ6Zp",
  "key41": "AL3o6RJoDkzZYi75im7srxHhBhpQd8ujcDvUxGLT2YXyQwVQNu4TzzjZcTp7cxgiak3vm3sgfGMc3PhWqQgkEKA"
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
