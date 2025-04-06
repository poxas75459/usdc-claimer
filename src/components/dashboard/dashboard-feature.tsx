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
    "2RCi9fRWi8UpbgRdB5gAdv6StGRVCjPQ1KHzNWMrGoDob2CmnS39y2cjegU7TeZchgkJFDgBpuxBWZYaik4AM8Eq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QqedLNssURPHkB9Aw6xbQN92SFb75EqSVa4WPwuEEFEPjWKgjNSHJL8u6YrXb8wNB2zCPbS6rZqraxUAiGG2mep",
  "key1": "4kjgMbUe6hzsy5yEfaqnptJuWLWoRpRhhjZ5BWN6ki6X3uGMhNWHoPj5pFt82u9itZ7N3PJ6Noce3xJNvH1Ttse3",
  "key2": "6v8bGHjkjrn4t4oepwwZksEuidk1qCd4eZa7ndP6SxxamLv7sBSuoK1fpSXCmeEZCun27apfMWh51DKZjkthNXT",
  "key3": "53DaerqbiejTT9Xch9guY68oBGrAfA35Lvpcr1aFRDsWZpvpPmC8eypRGyTTSLixaK4YxX1tHAPVXXfYLWrdzjs3",
  "key4": "5hwSLfUq2y2nDo6RjCfHXbFyRKK5aXhvGxAFhDJYjQi9KMouJP89iXHPsmatMaxKaM3a3Y5BdgzUv1vQ8ir9FK9K",
  "key5": "5iP6YcXmZP54HWh5gzkGKi2udvsxLMgE2AyBrF5qsdBPqumZvPfAcvKDa9ijYuZ4StsXTByJ14ShKaaMZ1Kju1Xb",
  "key6": "4PChRbFv9MPyEpnVGJef3Apuk2jc2RJNzzEyjwLU3knioa5uy3kKsb8cumiXJargbbPYzTHGt9nP6Drnuwsf3p9N",
  "key7": "5G94LeLwKL1Snbq2bfbRZ2sxsvucrLf6EKYXs1k5j1FkdbFwxztLgixrywvkRQqf4PEKvxbmzH3PNyzHqSmtqgZ4",
  "key8": "3RYoY72B7u5Umm6nkzFoYG6C6sqR8AZKCNJ6NttZLpDhxhSV77Uz6hGyzugHzjcGRtGWKDAcF9Jko7TDEZ79BYt9",
  "key9": "5mjvSKy978YGXZMGcg6qbCugq1V5Y17eM1HABvxcUTEw4GGgaa2YdxeFc4Wzk6R4RT7zFjNfNCEiyYNoRkcf8iVW",
  "key10": "29nTCpMJAFtv28WKUTXuKB8buLcaRe5DvkpZxrXJyiQPEygGrtLbwAmao7nukbFJdnk32e5MfcJ3ghKC7URbnVx2",
  "key11": "X35PiV8LnUdVb4ZbPwe1iu4PSYvF5mvWxTtwWZVcPVPWFwpNYk77dY5KtfL8Y962vhxgteHDcbA23qCNj7ZkdQn",
  "key12": "4ZZTTCyPxCNjSpgpTUvG1gn7LvWkWsaS61nNQmqg1ogZvcLrbcGYxgiLjyiY6kPnWBMTdbbjB2N3CN4zCL3SbYLP",
  "key13": "5BnBSCFzTZSNCfvLoiqHsWUup4s1oihqxVwL7M7WnHEyR6L4qLbaPFjuNhAz3UPbAGShUZv4fULyyPD1Rin9tG36",
  "key14": "j7eCF86WuLCs84Y3JUJTjoDGMVSjE92ma1tqSPz3A9FygFet8oLrRKvYo3W5kRnXTkaXLW9iPvsmbe1MiwJKr6G",
  "key15": "2fqSacVMFqEDEjC2Unhi5UAr9Z4YAN33wMHwztkChPVPiWktiXYgAi51RtbU52JEDQe3yC418UwAXvA3Enoeewxc",
  "key16": "2LgTk43n8BAHX4bB6wMadA7aic1fc9i9kRdKFoqnkGQrxUzSGwyiVc5scWymhP2EshZXwrPpVzBDz7T8zWSDbty7",
  "key17": "4sf9bYMykebcRJ9VVnf5bXjvi545pXz655bY2VkQgbibJQ4uee6dg3HfbLvim1YVC5Bsac63SpBdyziHBSAZmXdp",
  "key18": "St2BpmpcLcLhEo4ozNby9FkA4WsJk6hs9KAfBtAhE1HJQ8YvhfSs4mQYek2YSnY1Nza1r1jG6R7KD9ACtRD7k4u",
  "key19": "2k9vqjrbWH3SMdtCT4X8n9W8CGqZpRqSCshakvHV4KrnLZ8Z6s7Y2pEQm3n5rAPvSQLVgVbJuhnWMg8LHixHrG6Q",
  "key20": "36aYCfgX5nSho8np1rRAhoHfvcNBU9uJRcFxC8gRqBmubi81NLQLAH8kW5d1yRqbN2XwwAUqTcpcmAN97WXuPZEb",
  "key21": "xtDvxs3q1yDUktmg8d85t96cSqW4pjQS1UHYAcK8Yj5nr2x8VsZAAzBJaDJkVRG5tuxvyEJPFgpoYFaZevt9fno",
  "key22": "2pTAK5MNH8kTD7FWvFN5gC25VbNSH4ZrBduoiYrhGUw9p2NGqrrwjXiwSdSvrLurYkEVjsAa8j4gmqvk6QPxYK3d",
  "key23": "53VGDWmtVNyp9LsvVPi8rKtwEhHQzYR5VVwWPLg41GXEvhyQw931M6u6Eyk6svJ16jjj9UwLtQmoQr2Pfr6mte7v",
  "key24": "5xxarnSNm9vDRWhP6JVar2C1XWiuE8gStrryEWm9h6NxiFuEzqqiRMPBQgoWHmDN84Sgmh1dzSDveDMAiQkJDkWp",
  "key25": "5ERnAwMv9nvfeFGBvG96mKJs7svYHo21cnBD3QvP6PGuivqjqyfFcXtsG6DmSGQYtYUQK2d2ykSrMcXhswgX3kGX",
  "key26": "2GusdbXhACUbv6B14vtACUxhwobPU98tp4LF4T67J7xNZX9JkhsV7eYhujMgG3YCkCbQ5ExhfoqBMomeEfNEr5Mi",
  "key27": "3XpDUJDejGF4tDncYhsywiJwUydLMC3Gwk6ysC5NVDbKaABew7WRDr4bykeSwkzqWtzXw5gzzMD9JMvKYvqzXVPK"
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
