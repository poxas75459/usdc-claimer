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
    "3HRF7H4nLWHhzZhNcNfm2tcEwpjBatBMbV5JkHRp1L87XqPGLAGjfVLoB4k4WQevydx74y92GNjCCEBKArovaBxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szkbJNuMT2PMzP92icT9RpsrkbgLD3rNJsdR2iM3tX8Yz7sRXXf2Ce9egPkLW3RJEe5eXSFZG3fvsZrGZYZXihN",
  "key1": "47aHMU7J3vKirGZUtqeXXGxJnqxFtS57RHmSQ5f9ZWNHyZxRqA5j8dF1qw77nnhfqZZv8MVfSG7hRWuzPjtPLGK3",
  "key2": "3WbUwUjS9tJEWoCcfrFfFLNG4vmkv8c4tAGzg8qX3VKXCjP8iBvpuaS8pcMHCopxP4j8B1jpjvr5aJFqMJxRkK62",
  "key3": "2yWktjis9ZktQ58StMDAuikZ3rtx2zLBWaNGt3qAiWmyvZVd8cpred8v7iE1SfvL6b8EX1BSgjscn1CKUnS3dGr7",
  "key4": "2vAyqM5zX6CfF7fkUrhro6KH6WPuBE7N5CsWpmGjx1THa8nXYEhzGo16Jhj6q3xmW7AF4tqR2nkNFQuM9CwxZ5Ph",
  "key5": "296F8Phy8QBibprAHZ3XsYbHiTEzsyxVCBGWQwriDp3sB5G6SSCAx4xdmDRmBkC7foMTWPKEbkfZ3VwWZM3WQSCn",
  "key6": "62ZMWbCQxMnDiECBbhNkZ2SpQZ83fjTXeYFsVvbg3vVdWiSVja5bKLEL2QTpY3w2f65bWvYA8TBw81A9svLLsq7i",
  "key7": "8YRZPFKECcVoGy1DxZSdrEEWT9SDKa6RFzjA75hgJ97wDWXhq77R5MTCVB4cK5gdG12AS6pHTZE5YG3VxtoDWs8",
  "key8": "4wNpLkaUqbK47aGjDBZW9KqH3L3BnGx5EUM4M4y88qXZCJEsSadkamX4UE7CWQHU3pi5sBsaDit1QaTfU9GWHdCr",
  "key9": "5qB6Sqb8xHNYvsL2VLXWgxrjFWWFeGYXXqfFqEcBsUdt999TM3TbDkV9coP1mWs5fcu3gLRDtPUmQZamUxtDvvho",
  "key10": "3VdPsYAN1vy6VPsizXRsEQfyC8vkFhC1xysGHXc7sRbwCKtPX1yEsABSPpT1tFz86ep4AirZE1V1Pg5wuaHBzu95",
  "key11": "GAScp5aAhaXEsYhyA5eb3nccLELzj8ANDWEs8ytnmHj4KcKnyMAjzLkYRfBGSko4bJ4FqQtMSyxjK9EfmjPpCQM",
  "key12": "2pJ8q8bWXWMCmJ6BiForLt5Bz3QTcYnWtYXtQSaaJFRrgw9bg91MotLN4Dm6iML74RWGFG1zdeDg5hzWMbDCR9XN",
  "key13": "24LYbVZnief4CNuVgFW5vqdGkx27y34siC2HNtTfvKFWqESRCbvFn3xdKiYStASqGDbYbQoBrBKtPYFujavfYXfH",
  "key14": "3bgjaoSNqS1QakUjU2WFWcZGUYghjqFbuwM3AhKuK1zfUukmn2wYaUy1wof2hAvbwWmabUY8T7BVGYMBJpR3R96w",
  "key15": "y46GHGhqb4J7uXFx8htVPz99d7555VgZdQbQEHdsHodZEE9NB4ekUWMX2fjkNNntckwKL9bo1wugHhknNqxLrqW",
  "key16": "5eaoVQQKBEszEX7Z9YekJ74R3xdesH7fVkvpCSNezDT8cCv27JnremZmz7GcrLUSL5hNEmyu1S8wmw5xMsBCevEG",
  "key17": "5qfvazmJ5VZYLrFJEKQwEiXP3gXEGmoYKB4k8NGnhqBJQSkcLQAYcfuBk8h21ZAxULjJiqvkTjBFxWeJnEZr9o7s",
  "key18": "3t2PT7NGUrDTpHi9tFv7oWvynsCTGRJF7JAhzeMnjvM4nyg3uF6CHgesU1TnjpGUEt4SEERm4oyeJH7NycSeKNok",
  "key19": "4oKh2v69FmXRakNHwtsWU3LCVpUbmJGbmWw2pEJcGvbUm43LCUfmhNqxpp6AS1Lx9uqonza3N1qPao8jQrp5W2hc",
  "key20": "2mMSmE7vXC1ikmPcrbveGjTTnKUUSazBr1Yu6Tf2gzEC1xnqwM72Gyd1pEj5MFadfzxcFSEtXSB95RY7aJ5WWz1P",
  "key21": "3nXXaMExutzHJrw1L2vksfULnme5QcLWsq6uccCCGGho5sNWkn2SpjdBELdRjgwhoiFaP8Hxqsa2EXjCHjMZRfun",
  "key22": "dcgcjSEDXPebWu9tZtJHZ1VqsTUGRHknt8MyKByC4enkMHGftxRpptXGbfALPpwJzug8uvVRKkzL17JiDJqXLLV",
  "key23": "2uKSBz5gTWqaNByDPqo2z871WJeJ5XaeaYvdezqYQxPvbAdGnYRzH8o4pnEdT1jxPcRP9q6hPCCKNu12WkmDWzz",
  "key24": "4sFd4DJ8QawhN5dhaWPrtKj1KtfeWbLbb3am8snhxbYoXM44WN4t8igFXBnBg962PheyeF1SrHNmeEYaA5Y7MKU1",
  "key25": "5qQczzU83CCgMZ2SUcrFSP7bU1Szr7TP68bst1ZoVZKncF7qSSe95hdbUekatUphhUW4JWzeUWjMmBdyToSQ7dLK",
  "key26": "483pFa14QM3F6FMvX8vLHHiELyQtLNWNEUTEsPFWrmv3kEvMEARxthPNGzmsjabKdzsYydbmX4mrYgSwG3K8Xt1K",
  "key27": "28nGoXyHvSczGsCVoywS4vejpCz4LSx3pad46kMVWdvgjaMyuxKJYah4uksU3vnGKPdauszVSKpXYJHckddEjsCy",
  "key28": "3tAsxtqsgSmFebU1bQ6LpPhsvWKyCuPPXULJEbkCGq7EDYd6xz6EzwLZ4RmYKqoSLYxLpq382Da5Hbt29ejMqgbx",
  "key29": "GGFE2S3QpvC5r7QqeeY1XBg37qWBsmMfyeZEu9cjjXmLjkduLWrE52u2fQCR35zp2uBauvVc5TBR3aWsPBZ67Nt",
  "key30": "2C1krfNEkoC4F8zNwxYj7xQGxXncnqvoHRUjMHApZaA43J9eoHGB5XBfMCgcXAXatsaw6wS64BfejdUe9xyd3fgj",
  "key31": "2FzMBuxw1LjCCsf5oZbhCQAgSM4ZVmNhjZhupjkoyF6W69xv8A6Q4asKihhXPnWfpBm8iU7tkrbqMb3hsK3PPxkj",
  "key32": "274WWMXfXdbmxSUW83ntxjpRFudp13CaeGdtnNgMhVm9RAaC5VRSLdGuMArLXNHtKDJE2BuWh7LKTgXFnzULRVLQ",
  "key33": "4MxP8SRc1AaP8PqQ2vNXVmKw25gDta8etaWRtEskLFSZ5UdV9K1yXW91JkWMmvwdomV13ksNwuJ1WdMRhWSp3uw3",
  "key34": "2QjP2k1UCAatXGifxFAYYdDH11pmipLHyPPUyWYw9KP2Ukf9uCntnS54uk4jhndF12KithCNNCDvKG1FhGs1JTUx",
  "key35": "5ZC4UowJ7SC8USvUsQmUP8wvqZe4Y7kFSvZDfzvtF9CVK7PepkKvXGgx52CbY5MdLdPqxUJNuYtArk8Kaq12GWZP",
  "key36": "i3dn6DvzBXCQLaMAiWKUSNWV482CtFh8HpHACz93JDCX5AQnFDz6A2AdvMbFiBuS3Zpwq9zk5z58nGwTG9ts3MH",
  "key37": "5uZ4ohn3DJfvSH1dmgQcRMHgX3N6sRqRX9iBUVkRAs7LXnr4ue84sECUA7YsdgpYk5Tw3m1xTfzmbDXc4kfUS6XY",
  "key38": "5K13Wefopdxi5CmLcLpshEZaKdBMjn2gxJBA6obbi6TWLdbBk1QKnLcDdzvxuV9ipfxQdsRY9AQHn5gHygxNM1an",
  "key39": "2efxVvfkuhmqSq8QzVkNKVhW3HcBSEWSxUy69sgYJ3BGeJTHEfzJCuURxywvr265xYkxJqsEi8iyQXM1oHCc7Ruc",
  "key40": "474qJaB6XHY8wP1AQ6wACHXyYeMQizqcZGoMp6Zj6WQ1taAbS44BKWTU2DyTNkWAP1cp1cgkJLCar7Ua7WFqnD91",
  "key41": "2zpWj3pewwpnqVg5y48ageG6nHqq2gpLbHBBw4TcZWN79weH5vzUqRn3mgFcFWZcwzemmZxd1NcXtd8NxjPunEgS",
  "key42": "64v8j4u5qxRxn4aojeZkHdHWaqi7nBLrxBJcRXxRnaNjRBueFV69YKHA1zwwMFd3U75iSt47DTMwdjfFi5BcccPw"
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
