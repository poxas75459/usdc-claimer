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
    "3HfESyeWTsHUaDh6n5rnnDw9xwz6Rh1uJZf118pawRvBDJgnSxoHAMyFykwG9b8HHmEGS8ESobPnXpqWTFP2cW2v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWcj63zdgGEbGeXuAAfSSZGjgYnfScYieCEYDSXvu6sS8BQ7kPUA44zifU9sNdnj9CS981W5vN2mdjJ9eR3ZJHB",
  "key1": "2SDnPsVKWqYvWSTp8aEbLu5VduahuGCEJcbEhA3isJxLNyLv5RUGuc1PvXzhYemG6nYX8ugUjvxkZ75opkFE8ndj",
  "key2": "r2eUs5AmaZyZLNxQNybeA37kMeRzkL6xTaLboiWDsghirbvSA3cxt92mF4igv5ZVupDFMZn6b9potiJns28wnas",
  "key3": "5VPFJKDQ57bRUexpyMVKn6UVqRnQVd8xmB3HJYSzRmUNh3M1bsLD955zCYhocCVRwCNCkVAtv6smxhu4YhuMnfQd",
  "key4": "342WZrC95482isQkvvQ6FdVkn6c4aKbmH7zcjuqNsNCu1W7ut57wp58u935vC8HAKeUN1U7LstxpxAi8BjNqgUHV",
  "key5": "7w6R4nECYg8qgFxR1BWRFZtpfjZFUa23yXDanM3CbMFydpnrLhaQiyXxhP2JiHPQkkmscqYyUZnS97gRMSc3Utx",
  "key6": "6pZHRqWCYUvLGzmnFA2coVivCTyP42mtoXTrvYs45RPheLHzvzFZxGjEfTaEj9dwwRrbeVuUK1GaVbEKe8J7CkM",
  "key7": "2ATsZUGj4g7NGoysfjWmdoyhZZJF8vQG9aWfA9xSfh1wyTVoxCiGVzCCy3T6UcQ6GSXGGMSDjJe9FL94akfVXbZW",
  "key8": "21Z6QXPc4bEVG1MkNUHVPbY4QCcyAXgjjVJQaHg8KMd3kyTyxHsovyQkTRfhb8jbc1SEfCHpZRvkoXHYkW4RfBGp",
  "key9": "3bW9ktyT6GwUrym3uNBpJD2cqdCimD62dYWbrpgU4RL6SWuip7PWbc9pJrhCw2jSNawN9xt6zGd83H5eLtdR4p6k",
  "key10": "bSEPrueh8QGpK41ezukPpaww3g2UeaPBkkXyM85T4GBbRGfRaqgzGGuvEfBxLt13LtsSCJuc9Quh3PMPWmHsB8q",
  "key11": "3rhRLoehMztfMDVXrrQL3yYutM6ffnXN3WfXHivzJUVKjymSo81JfJgTsNtRFvFZKb6B9H855M7wWgg4VoPh1K7N",
  "key12": "uWJBaEZg497pTDJ4NmLcE2S1NQ1EJWWxaR3xTYqnAoZ1rYX937RXF3uYqGyNmeohgSeXP23pqPTYyD8h1watjSY",
  "key13": "4RvAz9YHSMei8ybHdobTsTxWMwW1d3e5K6YWMV3dSu1KXBzkCD1RpzAxS5YN2AVxz5zekGdjLZUNZmke9XRbKUnY",
  "key14": "21LyXTSugN6ZLLqsdka4Pi6Mjb5DdEE289PMNY1hUB5NtbdzPcuu511B3U1SUxk5ciq3tFVXBCTKEuvLFbQ6bhLe",
  "key15": "2y2UBzS4o4Jy4noUMA11NRWGrmssgr9KWwhGhkF42HZSRu17PbjjpMrUL5KAU68MFdr8BScxoQQGBHABns28L6no",
  "key16": "5zSTVbnxJpzJYb9GKJfGW11wWmaTNBs3KHLnxzrddhK47VJu2YkFUcCTvC9Pc4bKBUcva7PM54HMk5C8LmV5s9e2",
  "key17": "37NNr9hJruruxNNKSBRUx33kzxPv7X5MpeRFp4hcT4AwThTYRPeUeCZ1N3Lm81EqjmhUXYz66CCF2Yzj6AWGBfbA",
  "key18": "3VDrgzoFVu2HohEZhCKbar9LU7DfnDYXjhujGDdpaksvMacUmbecwvB9yBsbixzeVwwZcAxE7BECDmvgRKN3WZ79",
  "key19": "4m8kA5j7na9BQTfWQ9pJT1LkxfuWERXBNqZrxk8zjxg36AsTb8V8njNYGnc3k18y3vXdumSyNcszdAnEE1tthfwd",
  "key20": "512bpifUGA7DsY5crZ1sMG3WXEawygbrTBYdnxbw8ecNeVQSMZFSKgKLCaLA7wJ1U5mV6eN7FbCsoKU5fuZDXxiB",
  "key21": "3faPXXAhWiCubBpbQd7r2UGWbfBwoMnwpnnu6gZpULztuVSwJoALptLEcoT164reMgTbUSMU8f9pzxefBRKDoLmv",
  "key22": "42yB1bcseUhbUv16d8yKLEg6ftn2d4niHuxwBDCweJpuQBAoPzei4vCq7GdZd8WLqPyAaJR6Ufqq6bjTMhMRLMeS",
  "key23": "1qyc6hLD5pjiB1UeMBJLpcHfRfHHoNbem6bg1UXrrPyptm81SJ1aqw8kyRT4zVVU1ZAZiygkWPPgmFxwMRUoGwT",
  "key24": "ogvKH7j3yri5mv3mhWHyimTKwqZ6QnFeLEXpZ2bDQv6dCypfbtR4c8g13dYP4nLs5FRhgR3S2ncYJhxYRvsrcDs",
  "key25": "3wri3XD9gvyinBXxhxWbB86FdJypEC3dTK1LUWnR5SmdVTXHeMnogzKJcNNnj9Qoigq8dXCZ3YB2tWrnwGDUospm",
  "key26": "3JhmHH3Lfmhc6T7cCUju2VKacza4UvK5bRsWEBBF12VDoJR69gQzmmN1mouJNb8StkNNswWzHDEzSbHUhkSJtcrW"
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
