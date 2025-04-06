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
    "44xmDLQ6wF7JJJjGPoxcHjriZKhVCbMfgEShr82xZ4shCuqJcns1E3N1TYJpewmMbMhwpKx5iGYuSbJiNHdhnNJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NvwVocBDz196tycCvNF3CQQitTCKChKCfpkeD7GnTfKvK8qXods8SncCP4u5GCuMS9cWjp9iCPmGXKq4hsgVggG",
  "key1": "2kYjdW6QthfYzNp9qgMsBjTadQLTco5TRnVTnat9FHGqeUgyxoi9EnDE39S5e6q53ybjKRJ3j9BRmwNwbBYvgKtk",
  "key2": "x9K5dTs4qae996iE5mBqMGMp5xJ7cEhxUJbVsFC8Sw61REyawyCAsnYNHkgaxxmg6mJAQzHSL5izC4kgAXBRwjk",
  "key3": "2zWnMTP8HbP4hgY7u1nLWPuseGPWRcEiWBeera1ZppdW3tN2g7Jt7oG1YQ41JUn6qvmwEFwrg3YFJ3tTXPSaRUdC",
  "key4": "2q9VqgqQiTUSWXtoPTvqLv8k2prCkfFCSN7rQ5EUvPPxv8yRNtX5gYgy4ChZpLuwDJzLHxzubt65kpZVUyzzCjRH",
  "key5": "a5KiSSxPkqKfyzp9saHMKXiJZmLTLpY1taJvB7M195sAjo2wR2UWh1Gd6FPgE2rLTDGH8sPxWw95ufNGpxcnPNX",
  "key6": "497fyRfg8jsxHSYHgKZdnjsb8NTaVxnGCWGUiEmLLwyEDv29HSBQHgvUUUisQtMk3eN8FsLZQbLejksQfZsmB7Zk",
  "key7": "3gWoiEnEaMCoNhgnvtJt2rc1RibHh65ZvVtn5MawroykRJtcCe79o6zqXT5cE8vZF7VCPy4K7gvkFxP6AFUkJ4mq",
  "key8": "4AFpQ837wGSuSUBhyMxTtDZUUwgkhZKbvM8VviP4sKbyk1A1b9LHiuzDCMW2YxRhdaFJFRHtYFiBqsKCFdRCk5iL",
  "key9": "4Etw8WPoWvFirQomqw3joSxNqTW4on4MznA1PdorRPEgSexKxVFntU3N1AbSou9kJNYpg6FPipTPhDSsBxh6exzA",
  "key10": "43HaoTvwJw4AwchQNxaa3kFdp34M3BB99o6UdC4GB3bSQuF3CMBe4QfLyYCsVPCoPtDHMHxU6SRiUZrgQd176Xf9",
  "key11": "v24UQrreLq63NTzm9e2T77HBgKNb5fcgQZmMVwrtFBvw2Axf3EVv6yRpdek1oieFFvyrvGNJuHG1yNvmPJu1rRF",
  "key12": "2NKBT2uqHLG4UwoMARewJc5hzfuwF2Mn1FKaFNE5mLUD7w5baZGS3Zq5rNmLgVQpxJEJuVMJhkTLA4s6qN3D3dCa",
  "key13": "91b3fAYqEedCohso9yESXpbJkYH7WRpF4Mppn5y8f9iFp66BnqC9ER3aMQJgTMVanBVSun4QNd5HNEsEJcUG4uf",
  "key14": "57cseHjnG9RwkgMVEGWRdGYHyMNMP38KsKKunqFSCg4jdViAYtgDrVr1ydYSLMVFVpcvDqULQLxBqPGBW5NzJtCo",
  "key15": "2yDNnpm5MEGVUAYZHxf6mEujTTi4q8aqLc9bVbqjMKtY51waHo4CrS6RhEdNRRuHzRGwwCn93BfC3bJYYfh55mKB",
  "key16": "3HWXZF2HNKNwSDnA5nQtAvis52xjbCBM4397CvfN1LBtKXwzJgx6anY39yGgjn2nxMdgVMZzLLmE9tZESvGHrjb2",
  "key17": "38PdbynAyAthYd7X3gFe73CCMbseKF4NGp733So2Foy7S8trnAi8HtCgQEgz4dNcToPge52rguSJsCwBMhENwbPh",
  "key18": "5NgnAVNdA9HagnCcwb9PEKMafKXDBjDRaFZGHJ8keYbqz4DNhUKaLtWSVcnvcNU8GXxGWRrmMe3s6HiWNTDaqhKK",
  "key19": "2jzYHnjFgj2G1qfSiYHCXZguVReXbDPEZAChcS5b2e3aDRF6fWYCcFMRHZr2PSz3HxmjjVrd7cH6CeHauuAXJphU",
  "key20": "nStFQWbJUbiAvrDuw26XvL4ZzxCPZViEXqAuzvQHkLUpBuS6ESRwwJvRtv6B18FL3vj8oXyfQk7AfJsLVHg1BTW",
  "key21": "4zSHGgjWNNue9EqGqdt3oMsSwdG2V1htBWY8fC1MrVSpkoPqVcZViegFURZkbUt3RoZ1EfLj8bdSMY83q8KT2Gvn",
  "key22": "3SuUHcM4cjB12fMKCH5cB3ZurbqGGZQuWfgszhA5HEzm14XbCeHqihdt9zK8G6YQJVPb2tPGA1AT9eNgF4FEgyBc",
  "key23": "3A5Q6L3kv7yR5MTxi6jU8Nd7hHgHqirodpX8UmTkPuKnzymdJXQ9Ws5hUVrn9vR2oBLJhhpaEZMZADNSS2jrQEVC",
  "key24": "3xXUuXepaAqiRshZ8yQWW4HAWeb3P6tZoe5mRhLRZHbPsu5BD7HDexkumot9Yjtu289KcbnBV6ydTtPZcfKLVLA",
  "key25": "2P6D3vRk2f4rdunRrvQfQF1rHyhs555wMtgrUvVZgiQ8867bEqjggZKTwWG4n9dCMXCPKFbPNoCseCk8ETZNLeXo",
  "key26": "cCzRYFu3FySJs9nGA4HunXqeU8YVSTa2w1xyeZtzYb6SpuDLgyf4oyD4d4sU4M9nw5aHctSZJRyxnXbdcWuo544"
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
