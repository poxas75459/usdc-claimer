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
    "4fqK446SxvLxYSMDLbDadeFpk4Ec5B86EaExs6x8NfAf92TQqgaUGL1TRNTWqwnMQBMByRsnBhc5Yjaw2eYPjRz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LZgSAt2FdJtjGaUByfTLtbQ524rET9oUdRoeMHHtiMse5Sken8m58ftSZTUXzXhRioi4DvVeNLJe4Um3NchXQJ",
  "key1": "5RTTNHRM1DVR99sP53BbArJXa93veHZHzzhGjARVnhLbCxsLn3rF4MMjKhbzNLmiUufC9skukmsvXfC9LB7r2FKv",
  "key2": "KEosdEDyaarQHEUxhjWSC2dnDid6yUVxZDEpWeuPi9JUeKPJy5GfghjSdPNGjNk5vFbygStSamZoAPKig9pGJKf",
  "key3": "3th3j9LjfA5WucjMvoMLnNnMimzejHpMjh9cP3bmeRBYj3PhBFBCbHNoDvA4b3v4ngExC4g1DE7hawqB9S6tPJqo",
  "key4": "32L7A1YELchW7zmArksjCkgZ7auTP8f9MJCxvyGD9r5m2GuA3EtdApuk842Zku1vGTuyhjjBBTnRT48vdhwFnMMW",
  "key5": "3Sy4xeeZdQfeV8ACCUosHd2SPibRyqgtSDLziHgxVwLZUfyN8HtLRLHK2XYrhRPTGaQewTQmGBjyNvZZpK7658fF",
  "key6": "2NJGC9dGuXHkHdfjf7QhDgavgEZGYxj3hY3PLa7v1RXR5SWNLCCzLN578CWGQPqqYDXvV9rWZWENzPvpMMFZ8BKz",
  "key7": "47Nyt4nFiTrw3ec2QXvcmo5is6hikTUB266CUCkyQChoZPKvtamVq6ZNLHsQd8io2VTBDTnGgSscXBKhVbCuNWZn",
  "key8": "8EumcKiMbjRTDZbSWtdQkBpdw4xSTFfHEhJNgzgzRC4BVxeDndyXMygsa9aSWw8ug3RAjzbTQy3rwE5h9p3ikPW",
  "key9": "5wDA9qcC3MBszF99tGWJKtACNZVbmwCMNfGhY7TnHWkpB7MtueSQLWZg6NiW7JQGwxT2vqg79AE9DhHsbjs8U5ig",
  "key10": "2FLixU3pxBg1orEFWB2JYYZCDNLHPGLiZciUJXYZKVQ5LVJc5ecqUGuAGc2G27mGVSTzP3uHQ861odSXzSSNBRh9",
  "key11": "58kAeocQwW5KWaaRX34xW2hgtVpVD8vNerZqYeBBZ7CfxWbxQK6MN15pUdxbAtU8oTEPKnPZF6daM2jWh5M1dogS",
  "key12": "W2rCA46ZzYcWXUNk6tZ2RL5RctMPDtLHFGn6TQRgmbYG54TUXzGAJz2ckaDKNKGfps8f1LAguDH9CL2Htb5Kz5r",
  "key13": "52dwDa7sWGZzbTMPUPRsQjVpnwKPAJWXmEea3bbEJ87YaPKYPthZEVKH419vY9F3G1nn8bjjF29NSNG7gF74TsM5",
  "key14": "3ZKga6eNBAaiRrc1SN3shJUsqhugiTexLc3ko4ZmEjGqLqQJ616sg7PxB6fxgughPs6TXvHYzMo5dS5yeDPWXhYp",
  "key15": "56RzPd8cHDTiZLwNpzFfbrs8kLnuEdcem2hYUQJdWJXmcLDEUe2zHu7FurZqJLvfXze9hHiHCS77BXJ8z11iLPkk",
  "key16": "3QKbdotw4fziNJdyj1qzWbXRRJ81ibSWvDiz2tWqFZLghG5fmRaNyMQkBNoEZArh9YLrecqy5BPrvX2RAQW9aoSQ",
  "key17": "pnGTJ6qTBC8TL1TbmHMhyQedBDgKFaJr4whEH3grDEnzjQdP1gFUH6ugmGjxmDGv97Q4xBnEkW7SFPUZT4Xj1DR",
  "key18": "5W5kwuCkQP6HHn6c9e7bYYFX2u4NzU65UsWtQqoBaWeMchb1DE69syLLoGGVDg6yvjeKCZRkGNK4491MdJs7Qack",
  "key19": "42Lx1oekcVxEK2pU4cm1YLGCG8JfVzAqm3yUBhZydHnwUPM8CRMkrRE5fjkbz8GwXDmWZb6iJ96Ape9wusekgh3S",
  "key20": "PidT64JxQ5EJ6mvbBywcF7Tr6QgG2gJtLUZThYsY1MiYXQ1TR6C5QCywhvcTPg72aZzKgVG7BNmXPm9QrGoDaB6",
  "key21": "4QHb7VRF2QNiuVLXsDe1ssBpR2DgG5mEe4mRftT29RwZEB69M5vMa3t5k1iv8kTZiuHdcEQyAitm7B8oHsJ7Z4Pp",
  "key22": "3Xnk328L9vMSmt4mTVhPvg9EoRrCf6iTLcPYKRzSLoBc6zuXxJrrjiGBstS4YY9avrU7ozY51tSwvpxGj2KQCSE5",
  "key23": "3weBe8VSxtNyuKY1CVKBzoG6Y7xBwCRd33XQNHLUjkrhTe4QJNCB9U4xLRmQ6dhChU4Lrs2e1NMCje7bPyBcgoSn",
  "key24": "3T24nzaRrrKyaSQXntFy2pgCofNwpmUtmheiSiE3YkehN57pFDyNbRJibi42wiMTmFcpHyGVEwrkTS6oenAQvm4W",
  "key25": "4nRybF5HJEoeTKywbonUyR1thdMsHWS5f2218sqWs2noJ12VtBaND6S6ChTdxeKKk3XWCZ49QibRosJQHzTCnS66",
  "key26": "5WkNNtptYyTCe6s5Z6632ZV56Dzoug3RgyLcakqG8WgZy51qLxnSCzxkiE2Hy5wRZc4oxKZcUg7fc3S8cLdefExL",
  "key27": "32PjJoVuTgZsFbaHbdPLEmddvfqBsvKDEEYYmi36fmpGWdYmGDHfAimBYNYo3qrv8FnWbhHTDfYhtrf732ak2Chs",
  "key28": "5FLSEqAsKkZ6ffu2HwhDChbW9PP2msjQw9P14X5yohxC5VVWsx18T8RvieSz9zEtzT424Pe2J7NWoemp39mKABvQ",
  "key29": "4Nv1LbmnGTmQi5u5vDaVo52kgjbfJJvxJgi3TrPK3uTyxV7esccASUQB1xuedz698YK21FcLVgCuwmxvarrZWXoS",
  "key30": "3KA6tztRSeBRefCkGUWwUSJromiro2C2AiVZFG5MqPtw8BWE3KFwXSGMrC7nt8TLnnJixnvd5r52n4iUqsbytc5z",
  "key31": "2CrnjL2gLcN8woayqSk25Y9jqTXDe6jstMViphUNDJRny7CxjPeh2XAiT6iLDawU3Ln4pyo68CHfcFmnGA6KjEYy",
  "key32": "3X9YYdiZ8BuqnBmErPdU7e82LVW1vqev9JEobLYNqVfUXsXJYk4xWyB7zGqJDnGPSiBr1RuV9JkBsoaocXKu1zcB",
  "key33": "T9uUovmynz7aakkUgiZLZSzQpkVYRfGYpTXskQaWuwqcm23BRcx4hYpTUjyAcq95M8di3N8FsodtXtPETPVbuFQ",
  "key34": "2LRtA9vZ8ANLyaS2tWtgbkbGDDwxBmiUD2iqHG3SkKs72bGFJBU8opiGHh88Vsh2RXesJYYrXfCDo58teyRuwft5",
  "key35": "4u2TtB3pvJnHXV2cgxiyHWzZnU2JWyV77bSe7x5ar2jUTQi8smhFUvgYWrMFkv3nmexUasrEF35hoX6FcnC4cKn9"
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
