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
    "5YMePZTxZPp9oXApepbjzzsSuUK1LzdphiwvSiYSY8z2puj41YQXVeQTbiidE6tpjAw9fKrf3o1vrRh9EV5VjGJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33H4ojmg7179AS84ykzdbNfTasfmZj8oZTzZrm3JAsP4mwzfNRvkwAFb2V7P5B5kve88uh3oi46Lg1y297GKBWFm",
  "key1": "4JssAs2zpKrdFB4mzjPoytTwh1GbWNfH7tn2CohKef5P3rALmmVjkikiihAVeYjFg85qktfM2s4QoswpAYapNZci",
  "key2": "5uMAqkZWYphE9tQucYBfsxNuYRf9CrSZKUs8f19pqG5YTCN3Fu1kPdpjxtFu31AqfrNmkoFutLe8wGZC5zht57o3",
  "key3": "3VwDADxq1D5ztwtswDseUCaGZjY9XKedffUTAnhYkgFnfp6epqYofgKr8qowFv7u9xK78XZzSc8KGS542Z1avEgW",
  "key4": "333EMopHW2h9QKpfyzpNEWmHDCWCfVRjQNwiwbzq5UHnsLf14H57rPCn2NjGG1qyW4ug54SWqA8doL6x7dwSuArb",
  "key5": "2YjFqX1HuS7ozkyFtLDjwRDjJ29LQiBrm2ihm57spiFwZQhBWMjVt2HB2oruGbHwngYC3S3UYGnrG9ZHbjaQor41",
  "key6": "5cWhvYbkU3o4NSm24qfE7FWMUjcXkyFoGaHjsDQSAttvMyhETpVirTyfZQuNQgfXpNi2SJ1gCacTYE35n65Q6Ahc",
  "key7": "5VoNcvJZCK2LKCbxeUdXpNdiZmRaYhXkAVpn9wwqceMZkz8fz1tqVcnpdUZv3MsJpw4ZYqBWz88fs5LCDJz6Nqcr",
  "key8": "3GtBXoqMSv4w79nxAtqVjnwXUEH4L1nTxN7n1ntxMB3AF3XuRJvm7KkjfTbe1PZQp1PQTknKM4ngTs8H9uKW2v4j",
  "key9": "3ssWsWmApKmGgjeGpvF7VPkWQtwAnJ5PFHMmWm3nfUAzyJjwYdXoxasRuJKcwANqrrk6Ga8KNjXqrZyna3QsDwP9",
  "key10": "3puHy2WYNyYVfgQ9reLW7yzQLAiDq5nLLYe2bKzPnP2e8H1X7CH4vwvg1spmpRhuUC4yd1bJTQCEwiZzFY5YNLor",
  "key11": "5J8Kmg9rh7ubThgSib1PUUwDJ7azdX8xVwMAPeBARCgBwMSg76pZdBfNmVKxggwqWcn1XGixCfH2784K2Qtzb13u",
  "key12": "2DjETxeJx5KmuqpoG4rUgobdHB5EBbTmGc1JytYdSw61EvQEpv6dEA2zRaWEmM6f7iBdGwFHexWixeqNCjwwhbXB",
  "key13": "56dLQwehtCMuAyUKTR9fQc3iBH9ttRWKXMPTpjsZsn95oqHyt6kEGEFzcacQNcDJ5mEzZs2nNXFeN3VuPLb58fC2",
  "key14": "5cUABGJfSQJ6KCbuEAtQFrHZkRZbVdx9jUKn4jDbzfRNkktuT7XTTYSbhpSJG15rVauJkt8eashiCd4V1hXUe9np",
  "key15": "22aJbesxUsMMNUXaQHUahrihsADp3ZPuHeBqDUB3ZzD81EE6rzSq3mb638gSgftQgW2BoNYtMfqFDwh6vFJckwS4",
  "key16": "5n9GmZ3zQ6KthqCr13qcY67ReB8wvxAYyLbGD4Re2PrbQQQqWMFrSJ7eS2GCAHLxLTthgnENAxt5VvziVUEcoG8n",
  "key17": "5vyz5rEkLaRx1xGtwCARWxhHYQci37whHbF4ZViZxpz5cx1VVip1C1jT1tvo8gqpfn67dqHRAaacioDoRxGwqtko",
  "key18": "5TfMn4PbzPx1KYKb4b8pVojfVHL3PpYSAGXiNxu3qbcLUv2B3snYVqcCkvsF8YZVu9Q7A4P5B3jmGkZKyDs1B2CB",
  "key19": "4cLi7gQzNShxNABWAEC6pRFFcsQoKzg7MuhJnm6TzhiTECCUd1s29eT8FtjMn8TqEjbVvX53c3jRBTQi84Zh9q6t",
  "key20": "4EgTdNGr7iYbZX3VwTEmduhE2GerKsVgDDUWUM9SR4fJQdrYf3jbzEUfxmtPrPCVj5mNXbhaDiSJncbUTfYvpbsG",
  "key21": "PKvZy5mJ39cPsDNAtP4cbdRrCWDa1ti2v2cBfysP7ENAGrAZ36LVdtRovzk77vxNytFdiy9j6ZPSia1z5aMZP6N",
  "key22": "2q2ytpHwqfFVDc5rV1Z11TYxYF5F26JeXm5iMzc38cTV5EvQSutxpRHVDZdRV9dYRsGGexdVrGxFHpvu5hHgX5H7",
  "key23": "5To7K5PDEBbZDUqydWVaMcSYyyAUHFbaRhDvHpQKwfGdFNMSBxN5rx5Bc95Lzbm5JxuDV9T162kqwhDjKHHDjAqf",
  "key24": "3YGotyjEp5GW8Ne7GrNKmYXZuoxMsmoZBrwTN5UsrVVyWSzHf3vfaudcsFroGcGtBDK3Rv8tp38nC2cjjtQbVW98",
  "key25": "4oj76fefKRB4NCmJypzQgrs9YBAyz7jZ5txByi84xHLu7jPdXQJGWQXY65frbLzacZYarwpsK4Hgen1Yf86WDTgd",
  "key26": "4o6j9LyucgisF7XnCcJgta8dXBXHd7vNFUKgryuErVUUToj1mSHFxamvgAVWsYXjVeh6KeRqz4fDm3hvJhQqnRGe",
  "key27": "2Vk3wCYNsbn5dnLQybBGfr2zUbWf2npG9HC6MeCFt8PvKhEMSpGAdfk6xJXQxaQqUdGafjx1kCpfZvVMPgzuEQwM"
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
