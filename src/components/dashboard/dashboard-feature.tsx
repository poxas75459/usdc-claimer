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
    "4mNPVkrqCUECRd6DS5PdLPxqtt78MeeAqAmiomYRXXWRMrwdQjuF9rtDsawDBzc8cbTPP3bhUNScQAjT21xUhraH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28cTtUu2SduerWmBjaNSxhsaz9X6yibanNPNksbba7ub9n8H3x1Hasd2tCmsmXAzxK6Xmw5J4MCpmWK3VgqbhAuS",
  "key1": "3uoeBx5FtWUZpdXGBDDHNsREgGVDNP7Ht1yAe3YfYJXKHs2qrBsQ8kY7NiepZ3qpUNu3fdwo5MyH4pVprV4TmHKR",
  "key2": "3CspbzSAkzzN9HEf87cqJZtDJQ73ZxRZPfJfwKBTNN5MM882aEYex268bY7BYve7ChcyMDmW2HuJbb7fJMoNj5mA",
  "key3": "bhckz3Z2NBwuYbmbcnmQGFxooDmeEBTD8nTbbTqmXsacQp2xDNUoLjfAEAHQuqHesNH8goTBPzr76t15AVvLgEo",
  "key4": "371jFvEi3XJXgsm3VPjZaqLomv891BYNTVFxags72jfAgqmbSbhfuCEVvwvCqjtDAZVRXZL3wSU4DJ69evLVFQfE",
  "key5": "4JA9UxLgNqHjMi3FLkQwhtg7qURyxeraUNDHBZvDvCpD5Am8Nq28xRC35no9UuZ7UsomySHyh8msoatFw56Vv5uy",
  "key6": "26kAg6vWuWoWHAyoKf4e1Tpgex9Hs57tnLBVpbL7dzhhLnp5VZmMPg8dnupdrKqSUGbxh8Qfoocfp681WtTob8jH",
  "key7": "71TREBptzsWx4DjQ6p5zRi54syasAQo1qMwsv8ivoMyw18Fr3XKHcS4jae63esrayHdm9TGpALkzSg2bmn2f7Cm",
  "key8": "5LHGTfNPS3kJxyUDy5XYU9Qzc1zwZvhJr2sMy2BBt1RFyPazR4XjbV158FBPuMApJPSQQXfzE2FsZAY67xG5wQJm",
  "key9": "62TLpyJcS3V9QaMouqozEeua74mhLGubjGjHTuWHgyzQq5qjU431gxGcpMuwfYQAFNyhzYU9yotvAvm37nDdMUpG",
  "key10": "aDdU63t56dDsXRSCCzCuJ8kXJA6hM5ZLqM1eLVHjANZeUhNAJPQTrUnT1Xz4TxDEFxhVvrUADMkznhDhbE9ArSF",
  "key11": "3iPrc8MJRFpYvBCttEx6236bT7SiCtnDzHJx3BY7ouZM8QYRQVcJvf6X73P4gxbBstJmxMvRRiJFVNqivpxBAjqA",
  "key12": "63tLXLfG8dmQdD4QjdXYKekyrWK8LrMDXGZj82bkhHp2KTfpAwLzdEd2FuMrjXC7d8ti4rUeE3JBLHtr6k1pNiDv",
  "key13": "2ngDHbrxMw24M21VSpAegFizR5gZBrWq86gHnrEm44qPqLyL9dmw3dAdNGsk7NMtq5dmHzvxGPD7d8T21xhCgtMG",
  "key14": "2GxJBjKsDgczxvRNuoAzWWPNAYbjMv9etiu77ByRyatiJf2GqNaTSKye292b9uzip3FcXcPhjNe5QwifApMrjumL",
  "key15": "4iPMzYXjFeW67ZR7KHqqbk8kpMhhq22vBds6mPU7Degm9MctNF6uJafANHnMDGjiyvDHRtdf8xF18NA1TiZwaLir",
  "key16": "5X2zW3GEv2bQo6RzSfBEmv9t6wMYCtCQVXWpzsPjzqYWExYNNbdtno7qYKwANh7jq9sGrqjQXbV3uV4TdK4XCUai",
  "key17": "4TDKNnRnhjDuw9xwM7fyzCRH7YmShfeJsm5CVTjadMR2iykYviKfgSPie3o2fk6ogyRUeBFS44qzS8HYvcttDU3D",
  "key18": "5JQ111cgosvMNzjgBkhcZF33w9uiQYi34WykZT9RmUaAkL5RJ6HV89TuPLibPAui9qk9Z8LA83X91KuaXdtGmwmJ",
  "key19": "BXNx1dHutyYJeemtdK1FgPcmJYUJcHiZi1bPmKePoURYuNS4FR8yvzWVhSs9G8SKHXXL4uQvZkEgB42zewXn744",
  "key20": "GkpsdRHrUtHLiRTbXDc1CAUz4hVd5CkXtPNDuQVE4VkdFhKPPU1PQ82JcJTLwWs6qFZy8CPwECMsip4tfEzcZCu",
  "key21": "2HVDbcw8HBqD2x2LZ95VG3j19748skKMmbp7gFcSgFNCiD56FvV8eFuCRGJzmzC19oRrQ2nSU5xKiMWjxqfpCTVH",
  "key22": "5mmgpzJDEi6hCF5RPrabAQvENk3n5AbJ8p5An3BSFXkjPouSgrWBvo9abtcLQXVCjiB7hitAN758qkAJcPNYQYfB",
  "key23": "9zX2Es6phFd9DVTeg5dTBxZ6hi7dVvzQDWoY3wVqzpNC58cbKSqqvnDuRPRYxRrEwPz5wGNWLQAmzU5vN23ZxDn",
  "key24": "3fb624AyXjfKNjaaHeoLkheDxYzvTLUxph6SSudo68YQHAvGwAZtiEpGHvnDQVUxthVDMr9Bz88Vrj7kRwUDt3VB",
  "key25": "3buXw7sa2o3oNhUphUPQ8PheQSG5gJznKXvCHCjKpPeFn2vqkQwS6eZrK8hfmycCXN6V5JBteUUfLfhGbTLvFWHm",
  "key26": "3RbbEQoAajM9A63HsqpUpY9w58K2nWB9ycraUYWxb5M3ecAMugjoLZcQPNLid2rK2YQNPom6CvpbZ2bpfw6hbAUA",
  "key27": "g4CcMz4JpqcimUnUPn92Wq1zu1gfmpApSj4emiEDQ5GAp3KBMt86g4Mfm33fAQzVV3dcDCuYkueGE8KauHXKhNS",
  "key28": "2TrK8tWXi5tQ9ExmkmP4TAc5UjumL1W7duuZWq4CqN1nzXwCFNhPrExnUNoXd8GxNBq3UZzA5ee1VgAqcMF7aoTB",
  "key29": "5f7boCG8aJ2k8cbP93cpJKfPn1F2cJA13aSkY6dxz66esRNcntf8L9Q9ip6yitSAVapzQJdaQLvLYjttwpQdmnLG"
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
