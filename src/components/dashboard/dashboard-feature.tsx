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
    "61v5SVQUfsDE17e5RRY2yB1G1dvaJt7wQS7BcKGm75RavXuVeos29JKUZM95XQGA6Gzcx2UQCPTRToEuQKNCt4AS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ka8RYjhpXQJv3svWeADTxJS5o5YGzNxzCW9BugFYZYYL4QzxkP4iVwrbL6kWAqFVWZwPCeyeiNFsW74WzwzcM5r",
  "key1": "5QJooUj9A1rPD6ENRWwhyvyGHUwAA1M3EowfBepcxftgZZ9bH3N9SyF8y7udRN8SXQQgigN9VCx9nnqNUcjDNGM",
  "key2": "aLM9JpnTNQoGEfwzuJR3jj3Ro8jUJYCc32zChrH9DRq7B6RqkzyWSvH2mEEJxzJKvLKfbuTEHVo5tMsJhhAWYVE",
  "key3": "hp3a55vNFvsUhe4D99NoHMDjuZ4AL3boXGY5GzB633qbiiiia4aPAxevdLqWGnQ11Cdhryxi2qDU7NtRwFp9rE9",
  "key4": "3Jrbd9M5yzqhvLUgnvGiK9Muf6ohHs9ReA3KJJqwF88YvdBhzEFtLCzPvwVmaQCQS8aLjJGzJpTMdsj8Nsi2K2C3",
  "key5": "2o9gW2ypfmWjurFSnZARDnRufHMdCrjFaV7VnxEnY6f3VdQvPep2md3wWwSfzmcrd7Q69mtbtWtEQosiZxQ52wDq",
  "key6": "2czdz8ZYyquwN6ggvuL3q2pAyXzKQUKrSejR826PiktaZP82mryoxGsRL2ckfQgxK66sFhSYM8MHCktnqL6WonJ5",
  "key7": "pv3pqcyyvxzcJ1PQZgYCCNzZBt8vBFJ3PJwhDP7X5CgaUnJCG6iaUdsAs53STDiKhJjWSnDVo2tFUXLd5jrFnpL",
  "key8": "5XAbEE4VcFZCX1oimYAb1kcdjhCJhx6uAjnD3fUz3Pydz8smBK3LiTRJbaWF3aEp8357skWoYiCNi1jcp3NmUSw3",
  "key9": "5f2mVebuSN1dTJTHCqBiVHhF66fFRXJd53iz5HuZmtsGAAFHpmbxm58yzFexhHHSiMuqcqjST7L46ie7bKCxpDrL",
  "key10": "2DHyfyiJrn1fh5yyuiakKDLoFPpi67tHUc2BSMtiicjJHmcpbUBvQXy3ubQSoJDi59nB61bBu2SiTHX6Yyvpyhou",
  "key11": "51usJwxbtxoxu3xuJAnKgmfCHQ5M4SyS2eiNefAP2jgMw98reunVnMf3TbM4bUP4REB9fHGE1KmE8p3UhKLkTyFU",
  "key12": "6sPezYQa5jk6jTuME6XCx8jsbQmmk94Z4v9MNLkjYuSjASYHG44eRJEmekdQgLnfrwmasTidPmKGfKXd82EV6FC",
  "key13": "2CKS89DskwFPBSrpJuh9VUosQi2pXtZzgmNUW6hr7hw6vYGFXDZH1ef4XNNGCdqF8YzQ194aJcQxnbRVnjanACS1",
  "key14": "9GhraWVh3N72FhC14tBaVBb6G2rKh4qmRYiPGcwo5JR7jSxYB1Fz75xfkRNQN1AQJeW6AGafks5zX7pQiqXhvsJ",
  "key15": "5kwYk9jnSbNR6nBo7TYHYQAqGktd3KfqppRGvPnUyWWXyXP7ras862Xt2XMEx12DWqiZKTJSaVQM929LQXUxLiu8",
  "key16": "5JgZ3yNWx1VARy9FLtYfJ1FqQiWohM7GUP5vJxg8MKS3RYJcdccmK48ErgVexXH3GbifZR3RbaRH7BmvHuP1KVos",
  "key17": "Z3V6zKmikeL6abK3htpqEgAUscd868Bv2UjS8VqD21QN6buemQFUKVQ9MfdjY4tLdisRx9Dfu4BuGyWSZSmU6Zo",
  "key18": "5s8SG5pzTPCxezbVkqMW2LEvFtYmeuvkUu4zygrjdULUVaZPHpXj3dPrUw1GBcL6TJonMM344NjLMSX1bQZLEefs",
  "key19": "5Kv9mFUcPuTNUrmNXkxbnYCLciq9NnyJp4FVacyJUocYgqxDEWwwTigNmWVUpMSVuBGxzydcCQgcK8sixm6w9xhY",
  "key20": "5FqYtETnzqrcGQhnwrgJ4aTHzVgCq5QgPypPDfHwUCYryx3hJQ7WzuDKPQd1zUE6rQ4cR7pnseE72LFs3qWNeKGA",
  "key21": "3AQhrnYRRkSbJ4xewY2JocZxrx18aqieWTw48ntwxiH9BA2wLuFMaXeSHW8byhFq4aHYyJxycYY6u6Q1kCBfN6WR",
  "key22": "DXd6W4tZGjSEDFrgoqKhCn692kguVaRWQkr7NokTjFkJeYkRGaE8wyqx5QFQz69qv2Gpqq3G9iABnp14wQrn5Nu",
  "key23": "5DrGj719UV7dtcEmyE5brVmRvEDtps4pQhcmapvnq8izVkuiGpVehkSaEZPNsqsmG7fW3dbY5sfttsz9mazaa99A",
  "key24": "3WvVXKTm5VAvVScHqAdQVQVe2x9kHayVHPwa4iX1dgFemx5KCtJnDwPu65LJXKe8kcATkFGxgRxYm29rPbmP6WNk",
  "key25": "2Xy5rjfhYxtxtMnPmioWA5zzm5DiLGvHCkuxhdDVooU8EK4Tpe5tPPJBFEzjFn9NYfqgtgiY2sgr2WcbSJ9oU8yG",
  "key26": "j8VKzXhLZaKNQcZEoq1Vg17sDFW4vtw5JdMtW34jJbktX8y5f7bLzk1BVWnPtf5eGZGegww6sn9CmBV3Zbbck5J",
  "key27": "57AJo7AXrGvAXgqWxDjkWHNKyVi8gHyznAJPsVDsgqRKusWG4ULuUWc4KKPKgbYKrTs12QJSPzGCXCQgMp6r8iTQ",
  "key28": "4DAyDW3a14scyW5THNWJQpdv243wBYVgYagvgSTG9FKauAz8mJy4JuoLTqjRNJzo6nvLx2taHvW6cXcn8ivmKN5C",
  "key29": "5Sf9ox3xZPJTLyTWT4KKgDRUYXZxvc5o3hPxYeT4yfDEmh1tS77ePfp7ijq7YyXDEJm5GstgH9pv3aGH9QPsjDBv",
  "key30": "3n5rHtxLc6HLcPhc77pBxWDGqr8dzQEz4P7J6mU344if4t99zbXo4ezAgBNJeHAMaCepJjV2jH2FftVLhBb2Qd7n",
  "key31": "4ZLsNgpVaxiucn47nneDhBt1uchWwmWz5SfBLhFca1yLxZx3ZEHUtQmYbBGg8mSmxKXiUCqkQvnmofB6Coai2FjZ",
  "key32": "3VSz1fQbb6dXzxJAAM6qXgyRtLRgncA5FjDx5yxJBd6JmxFPZq5Y7d8dp1wcjTktd4USaPLtX3cph5TBTefYPj9i",
  "key33": "5TQw6viprmeELQPYfGbzaWmDFNxGK4Ty6n3N5KFdX4Utiuzb4GsE2kYUd5MYGXpqZbaDbEK4RfqK9k7K7RN7n9jC",
  "key34": "5JPLVsjjAu4yMgvetyRfmmxvgcunXCRiCTCmvnJ2GoAG7GzTVyRq1QNUv46fxgASNQA6kPf7mrBjkHrArhxfRYhq"
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
