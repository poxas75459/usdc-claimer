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
    "5eGL6kJJiv2ePkbSR3jau87B8Wtq99mpWbZJu4GMf6XqSM966rrabjXWnKenWxG63q3vxzyX8hQrmDfnwJrZFiXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z4TdiZiK7JzRu9FobFtTwPfRFWBMNpGewYXmFGHqLyTGrkyDF7WG1wdnomWEBXR8QHthHcZ1i3WnSE1LYLAoFQz",
  "key1": "3YBft3CGwsxY2ewCkDEpCRC73NVyMhCe5LMvav5GWXGkp5jSbfB7aF4ig5uJBZ5MxVPJWg22bXm8JtPwWJYi7R3v",
  "key2": "zhpHVZkG2SpA4PGtY47iz6x9qdNs5HwK7VXLevMVoZrYcX6i8hb5Bpbk8t7wQ8tLMmtwpmR9bcBuKZK6sg1dWEA",
  "key3": "4dbhUYuoYyjASwSjP58TSy1nwmE56dXDsjjVmhHa3tXwpbJj7wtRbnJV2mQbMeWRBs4y1bjv1GZcnBrp2bYiQ6of",
  "key4": "4gPr7sETMhbGvYJ5pYVNV7trFtbA1grzENuRGuMMKNg79v98dWdGJBRhZMqxufun4hujevjDpDU9S6NvGVMGyLew",
  "key5": "4MuzsyhBJDQBJMNyo7CFs2khnkkMcZNGXGXgRfySgk5X3zhsa7N1DubwmPSyUE4iCZ2a28eU9dxqdWFYK68v4at",
  "key6": "vZCmQxieruPrvcfDqDDd4Yzikg2LvqoQxe8s8sikM56Q3PzEm8U7LT5VMXUFgpYFUEfH8NEykNwLbiPyfPCJcBH",
  "key7": "4v1HigXg8hQkDM5ogWVJWexDR8rwZa1FZqxHSaFHUFAigjhjSg4MoQKT1AW4PpkKBAKePufvjEX19PZM4M4xMgif",
  "key8": "3xwbYqzGQwhhVejK3HewrShTX9xTQ4Z9KrNHrhvxXzJcsmuQbNsAcmU5cjXRdqw6mVU7ZAhTvWvCxwYWqfvyuRHL",
  "key9": "4PVjebnT83dWwzmJicUTTwxXAWQ4njY7WLu7VnJCDkverMtXt4Nx5qDjFcdsiSWbPNXGKo5weqFg6dsUmLVeHhb3",
  "key10": "3CSsLQ2ZLXrqHJtKcFFkwXHvFXQeCiK15bGvFPHQ6p8rBnqVDeaNzv1G4TQuhowchXyudPUzvdjCfzXTngBiNsYd",
  "key11": "hicB6AnBCT9tmhZaPipkcjF9NtxdYhC95FHtRvujJbgbhHapw6yJXgNEjizoR1dQ8Q9D6puQyxRzNx9gTBGTz4E",
  "key12": "3Njncky2xbgz5QiXLoQuL2jkdujkMSVDtKUNeUhByWnVDyrETHmfQMcxyL2PuLquvmKzyAeiC8dm5fJcACezPS93",
  "key13": "122ZwmE9Art25kNrFXuyLHg4kScoTguTJsPT4apHMrtttd9Y2GMyoZapF3fEbgi5XJAgkDUsgRE6WMSPHhokXAmD",
  "key14": "3rPdEGGWwHoVsJoaSeEMeMMapmye1vtsVPiQR5Ymj66u9FMhE9knq8Jerpz352kgFoZnXmuUxA6B71p4tt6xTVc4",
  "key15": "tmWxAob4ApEwybNcNiFnkJBFFjRr4vFJSnEpXPGbMQ8qzsmNvRs9RNLi1UtXUKjz5jQb8XZoPuikYbXnzGbJbpY",
  "key16": "2sPPNpFzReA5kQRwswKEtfXJ6HqPvsZEvWzsE36ohnAPi4JZKAQq1QPDfRaqHgA5BAHmpF9VQkdXb9HhFnqaWewX",
  "key17": "3iRNWWswokBshR6KB2LiuShbQYwwPFRZHB3onGTmGA95Qpgv4U55k9Ysg13J1D8EXnbQchDoBAWsst93Lkiep7UM",
  "key18": "5RsyTTffKH7zUDpSrTwtVryj1PvVRWrEzB2xfHYUJD6XZZhZ2kvRyxArCmNHyZD7DuB6dgQkADFMmLH8eq2aPYdo",
  "key19": "5rzCXYcKwDpzKuqEgSd3KpTe6c5PbF4L2aJKmpnDVGvz38nfsMhynhxTzStTBmKgpXYDvEsukaxnu7PStgAGvsu4",
  "key20": "sAaaPcvhTPnvjtm6YkKPdhB7dRRYrSXjnZ4GCSgQEJctnu9rcHDDgSrq3jTs7nd8bvSk2v7EAhj7ghLDtrD8tMf",
  "key21": "RPsGB7owYiJryg1mjdRdYE9YyFyjztdY2Uz5UWMTkaH9irVaMWTw2G3BwRR1nCJdVfq2LsbD2Bt38g22Wo2RCdw",
  "key22": "4GvT9vk5jLGftD3HfotoWQfUZi95PAi6iJAfGxsPNcCDxViWeFmqA7gEzbJggGjaqNjdNWAWEUfKjqRtr3WTzUMX",
  "key23": "5mdAMNGkze91Zis6nxAjs5HUYguhi2KJYCRzfRLZQbL1wgJzjYEVNb5xg8sFGXkLGnYqizKssNqQQHxPsTntJYHy",
  "key24": "5t2YEiS7vaZx12d7DEEyFtBvSeFJZ82hEDQ88aPVNh9ZHQmscmxTG8tcWuJJuDfJuESmnduJi1sjuDSAkfyegnuf",
  "key25": "gYA1uiDGvbYBAykQv8mpfPgYmu34hAMooVqT38fDg9dfS7iZU1kVysH3p1pNRWqDqYW1u9p3whDhSnuSEMkzF5Z",
  "key26": "3thFvdR6GR63fhAEDM9EEasxQPZDswU8RGGzTfXBBiuVUZLz1GEpdihugQks2zrNGWAUaVDmPJWV5NdYKQPYxupJ",
  "key27": "aaoBiurr2vezfse87Ck43HQwW6Hk1iYHPgPK1Kb2HdUfZe4EUSKUGAQzy5peapg7xeByfNwC63TcBvH6n1KezJc"
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
