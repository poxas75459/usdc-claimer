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
    "4ppU1YPHPz4SgoHRd3fSrk6qU762Bs3L9xxbmrzQ2EBj9hMEGeUBaPQUkDd5g1zApcTp9CoF5uYQriR6pXnyjg5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nb7hqaAfZzuzbrNZL3WskHX7NMmPa3XyvnLM8J9ZNHh38rxG9azrxpxFLZiKUC7hvfarMHKTiVeBmi6BAt1AXo5",
  "key1": "4BhSThb9r3s1mFkgN3U3KKZM2z8Qrhk855QHma5cDnP26BNb7bDMnAUkrBgCx66zgfoZo5iX8tfksPMmzZ17ZpcQ",
  "key2": "4v1pw7cmAwpk9e3WqbXUDcazoDzngm39B8VKyhamFGUrn6w8SwGMsWTW63CEMnfzW2wUbL1CBCc7oFVoFDR1YwwA",
  "key3": "wf378Mjw5Tai8qCNgXyn7cJTvGdbNeEbrSmsCMphiVNhBozXY7ASzsAGP5Nngj9r1geEbZgviURzDDcUitT5yWJ",
  "key4": "48KNTm1wwdjTymBmoLFL9iEmmYX1FNn8uofz3WXjU9UkqzNHJhwLxMxyr5HEbpuSWQbsKNJryR5mQwqfFciEWdAv",
  "key5": "5zBVvvenGjH4yqEwK8MGWTrHChr1JaVKpCuVUNMYw3mqPfDuDvZAoHfvwuZtdGWMpkt2M9JoCxydQfAdKjR5R4ws",
  "key6": "4PPzecq9TBrmGAQKx8nnZcJie2iZpBP1Uk81NsSWgBs7CfuLBBnhm7EZW5HQhbp7t7SitnhYDbubDsS36oYRpPr9",
  "key7": "g7WSSgH5VZtJC3eAMLec1TFjcTSqsgdhty7v4suCpER48eYxXE3S7YPDx2bjF6bFHTZ2gH7vpE7pXzKaB5CjEFz",
  "key8": "4RAzJtLq56t22Rq9TUwQQx5cwHXHDckYHJFTV5yKnbBMLjHjUKqxewKntYcdxFm7QTk87kesRb9RXx2wYVGbZ3Rj",
  "key9": "VJkDnE6Tk2ndcrScQ8pm3mcqAKxkAPRmC4S3JjfcLZfRSHR5Vju58iSz2UBYRQYYGYoangeMhx5YaZvzQzW3utk",
  "key10": "iuJtNpVVQnxgwuWJSdGqSrs93WRw7wcKdWQHYakESJHeaW4nCPSoNiFAsQerdvWEi5dZFmnkAcpwXKyG1WCQi6B",
  "key11": "3vtXioEBfsQEkqeCK561MAoxBV2QQr9V7ow6knhf7JiWgUwbbQFG6dUu6SWhWSafKiPgtAaEy8M82whd7X2peWhX",
  "key12": "6m1aica1yKDK8Na54kFyDxm39kTGqS3TeWDWXb5rEdzzR5N2HbnZYYmd1sSBoLiZ9y4zk16LcSbjZ2KtWy1nwuC",
  "key13": "2RFJKsgGF6SvsBVRnf5DWSBTKjhBWUdqgxKnjxSvtxkNhmRB3mNHm8xTqEJJVtefC3iPuuu1QGZodr6fJLKr1Gof",
  "key14": "47o9ENbdTQzZoB5RhtCvXFQcfW7Py8brRRUgn2Rga56NXmA1Wx7iczVZ5GJyruCzcK8mfeAhePJXmy961dqMUSsB",
  "key15": "2r9nriq49KwZQfEstt7ugXrTuxmrfhMowDK8Y7Sb2gkYp7dhSjdqbLWAwnhorGgqx8YPG3xEuTUfF2AYPkJL7XJw",
  "key16": "2XhE3TgidicCQ58YiBFbCsnSKf77boKAPHqhAsURgNQQu5jHkRzeo9CAue4BoucQNXrBsb7VVz21ZF4uDNhm3ZCy",
  "key17": "3ERYMPCfec4FDqotUjtrdbVvMYDPAKgs7L4gq6q3WH2uthokMysSVkvo1jq7cYHi4kwCY4b2oJe49yJjoRgHpxFs",
  "key18": "48QmymVpWgz2qhv5HhMvYPRHQH8MS1i17H3bCBu1tUZqrc1R5UpLoBZEjDEPZYqEquV7b6HVV8FV1Znv2apneDJV",
  "key19": "4C177HwSpmEKLsVjusxhXUKSmfRho34AYRcmG1uH5hNYbschdxgsvTTYpxN1hbuYWHZjrNsM73zK3VRRWVfG1KQH",
  "key20": "5sjvKknZDncYaW9gtZDhkdYSDfB57aEK6uxkL43MSAkKZxvu37nSFGRAVET36tcBnCPLi1gY5LwpzfKKntwPsb7o",
  "key21": "5b1ap3bYaau6umbvVKK64GR4FE4ZH65Ge85rfGzzMosbVs4PEnTL9t55A3JprupndHYMi39FKTTBk5Tqm99nw4Gu",
  "key22": "jVLX5PSiqdMxeNqhvvwGwVNgR6Rgc59nGj7CzBJz4ku1AGkbUcYtu2xccVN4NrBXfXB5TpGMX2G5GgzJxaT7vsK",
  "key23": "4ACQWb8DE6gtzQfdKh6nn1Dugso5bcjvGwZMNBEjXNUn729s3iuuCvBg3xWUKVUpC3UnZbXk3R6rv75CgCSV8U5J",
  "key24": "29jzW7RVirQ1FZGJCUuv6haotnSmCWA2ghVBPVLhApjGyADUkgQbMYu4adByxLsHVZfYZcn8zDep8CsvEgdFTj8F",
  "key25": "5tiSGRbcfqekPbCpc8wWgjyW7E4MWnwui1daWtsAxctkEPRwG5T7vfFE7oQkabg5Ludo4zc5DTxRY9VdV13bwxss",
  "key26": "p9u7ecgm2XDG9pDM3XXTVjLuzjEynrg9yWvvBojd2BRyHVoLTvrQMWrsG6xd1ejZSajdUAXjzpiyBbRfCs4mR9r",
  "key27": "5M5imWt6pNKZk6zEpqPoLvzrDUsaYs9HZKDK42xNEKShdgWPHm9t823gCKFZsaRTs9RyLvYexCQJPEL1weZL5WFR",
  "key28": "4XNA6ZbcggzLpLXBRqbun2Nr15wZWVDD6ZkCrAgLJhmTqoPbW6LgRxKQ8JfMFjbdBey7vwLmkhkQg2uEuC7mt5s5",
  "key29": "4NfxmtcZzmw86Q74LUeDfGPNM5m36SfcxTRCjNYeTeff9TV5eZ2GQvNYWUgfdZ7hubjYfKiFVkbHyFNkcCTP4yXv",
  "key30": "4QWt41E3cg5tTQsFv7P485QYt81zFKVCUW87cUChkMh8Z2VZzFD1vBswfALoKhzC398pWpWijnih37AWVqSuECBN",
  "key31": "2ZHkKihMunWP79aXViN1DZ2UkynreczZzeHMRsyvjspgd7mjZEoSCKCWodYRJjqrsNnxVo9Wz9ypreCkGHxsKFkr"
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
