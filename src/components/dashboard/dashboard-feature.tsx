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
    "sSoZGdZ69KkEx2e2NKViqiRLndjCvwvZ4pha7cMDPctiELnya3Sk1guFvqEMFg8RTFS3ifunafqfjAc3ZjDQbJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZKJqyPnty2uWT9MDx6W1PnbrUnUhWrNKQmKsWoJthpQeq8tnrj6ec1NfGRJooruZJ25WDs8Gz56wxxjV6t3zem",
  "key1": "3zX1UaWRqzJjxVSj2EW2oeV6gmZcfNx6A96soSQdApcVoUUD87DWV5ZPfJFLN699C4xMyFFtK5JFGvWoKUpCNQuw",
  "key2": "fcAorpt3kiDea2vex29kDEbBm3452QQuLwH3vcuAF1GuP6R4Cf8DJboVut1FfEtTzo55RLxKnW2nb9TntmC9CYM",
  "key3": "4CPr771U4WsTTsdQ72j2ezm8CokvZGESZLdgQiXxkywQHEVo2hgAXUuWq78BJnEnDQn5Uf976hyMr8PeMtLDgkeg",
  "key4": "24HLqKEEBRMbpqes5pwBvpZZtYqPcyie8g9JDxc83948ZvboDyLXmcLcjh3xBYMvLzZBNXse5Be5diTgUfQZoRwm",
  "key5": "4Aq3oo8VdB3M6vuR9Se7H5suRfTAByYFRSePqSpTf1YQX9Cxma6rFNEBEcAQFLC4DWJvo8xBLxPC4MsdLgfiVHVJ",
  "key6": "RCf84uJoBeerhCG49jTH3tuz5s8n2QqJsekdD2sFAdz79GXmvKMMF5AMQckCM4qcNzJjTC875HvfVZFHgFJxLpL",
  "key7": "4qERb9RoamBkxR9EdYyKgR8fYZgXt6bnsBh7vuoBt4ifuUPWE78mKw8CvsW5jFKzbnHio3VoWNq8u6HmASnw5jro",
  "key8": "ELxCrt2W4e1eHAJDLgAuN6GjHrWH2hWDECuJ2pFQkVwHrf6Yt236Dqcvq9BH8HTVUEoM8UpjR7MpmvhvfqqQdzv",
  "key9": "4qi554uWk9jFzeSrxk8KfT6FXtEwAkTHvTKSvZrXrQWAjsUYpMdWYDhmFtEXmfpKznWRcZAaXVBMHxAXKdRE6x5d",
  "key10": "pYzymdZznkF6VC9FKmcgGALEPH1Mwu5Mu6WfypiyuS1src9Y5B48oyhHtNKAKABRtqAMPGVxaFQBcYk2Bv6v3eF",
  "key11": "5wXyxtv8oboiQGgpWmD6YHqezNTmBqtzW7Z2Pt5knEioMNQux5HdS2Atp2RhLQQCVTXzLVBEpizev7BedtYiKWCS",
  "key12": "kfRYKrLyhGnHaXtdNUYUMxMNhMBBX6FZshY2EePf6qdSgxEAQmVWeiEqvkbuVHY6ycCYp4X6KgUEvnmPcQHyYzo",
  "key13": "65heeWMBt4wn59Df5wVrbU2JyHP4SYtnVcCvA6j22nC8S4n3h3tVv1EiTFyVdZyMsr3TShK2fGGdZyVLcz2ZFiAL",
  "key14": "2RTcyKrj8ZoXfuLAL5mF4dzQvaCAqCMT5f5RbceuzUgK113ZJZi3BGFyyJPH1b5edW6VJQohZi8jtQKjcA3VrTNL",
  "key15": "G6nvDeLBdixygnrPHusYvW8NGU3sk1PWxntYN8dmrHd4oRkPAi6qHLXoHLzL1vodjzpH1sSjuVbh87NoXGMfw24",
  "key16": "4KmGyhJHtMQxLup8KE44k7hdKzijdr6XgUgJkDgV6ftcXi8pwJCeB8uiu6Qu8JMA43xJszcXkh8sxDdpGuwBh16E",
  "key17": "5ZK3SW2tQQVmq54AeCwNeVtNDskWi2dzZQYL88bjJgH3xsM13QysAgVhViVFjGyaxtHPGtFvdfM6Rt6oUcghRppB",
  "key18": "2pVdFJLy41Qq3QvsNPaaXPVYFcpA9N6sjVTdUHKLJs1v4UHCXaQAhHHQcwvxMtihd3B9B3pHWKWNcYqZFB7GsMu2",
  "key19": "3NFrJzPcPW344HuZNtG7KGzA9VGnfjMbZRWHKLbJ4tgtTrkmNEU4rmMhHmPtV8HKkgmaCAo1fqg6RLPabBGVxgAj",
  "key20": "4eicNrycoA1P9ZuLgiN18TvYfnBwHD5EAAtTqkipxPNzgd8XG7MU4KxGh1YHdDb3VtYni8tfW9g57jWp8hMtGjqq",
  "key21": "5ocNhBdR3FPWkZpqLqpVxX3kgsN8cziGLY72R2S7JYesMWiXj6y6KPsT3vp8mR7AmgGtRHr8u81qaMgsGiEjL5RP",
  "key22": "2fCKmZwUufBd3E9wnkZhtz6679NibjmoiinWhukVVYidD6ZxaQFHs3nykoe6ygvAUThBvDcgUnL2yvZRTX6wx7ZG",
  "key23": "3bRJeFfriZrkYz7tDrtwgup28BzArHmeMFA8X6RVUJXrPr9qQRRLFdsVPGeUUSQ6SiEsiG2m25UaZ3gBwppDfkWd",
  "key24": "49Puf6VhheW8dpLZiYvs5K3XbBNQ8TzhGZDPjKJJntHUyC3cDecmSWQ11w3TmAuJgd2uQmcmNwPKkSa3j6NuCR6a",
  "key25": "2dJsm6gg57Yi29nKSQMEAXUCyvcgVNEKjRVWMmFXmjjwXpTibpdGSJteKxEDAZZKxT4Bi38HQd4pAKzTYvPwrttd",
  "key26": "41zPS1NGWNGfAKkjAzzKad66ckXVa1PNoDkckxdTrsYnUnShenkuNnzbPZxbzMFbSVzQeUox5R3whimKrbo1CP78",
  "key27": "3vcFUqyKxQRwzw1oQLbbUKEDV3i6zobQdHcCyLqDpnoDDCVgJUpeim6EwNpN9Dj6ubLGkFcqwzz2dw5HMw3JHeqr",
  "key28": "2W7aDbsgwBCv2DR2xJk7P17sb7s9VT1xMLQyUJSRzxEFX7SvjwxQ5nNNieF5C6SzVb7akcoDGWZ5B86uX5jYdwQh",
  "key29": "3LZoFNxwpvopp2QE3zcgbAahxYWTH6ezYQB2U29vYeTmBAyUXQWRqLE7RLhVFCjjm7rjXngv8H7jAeRQWbqXbtjA",
  "key30": "2MN8JVZiw7wLBKdgUKBGiHd8A3t9422KSrHQeQvnPaCzxyq4KT5dkVGHnyqKRPserFYinZWibzVsxWa4u5AuiJCj"
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
