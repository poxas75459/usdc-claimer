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
    "3T5HdAnzVzfQZzbLTWBtQuuCbW3GTJrG3juDsVPvxT3phgVhnbezmkwW7X7AmV99jyqDBTFGi5HuaMWo4RQky1v9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y18wo9tcT8VZ2DFKsxBFnWaEcBxn77UXNK2HDeNm4a7brNxQvswsYc5FzhyiNB1eT4Cv3GpUHVL7SKJhqyE8k9s",
  "key1": "4jQUEGVKM2e3HgFWLP629kmvRFk4Tee8z8LyD8Djv8dqqRh7WYMwCwQjjbAk42ETg5s7NxRLXbin94HhMBiJFQSe",
  "key2": "4tmeJTig7UNPiheXwAxsfR68Y2cqUnvJqQKkgDz1VKL212MAgu8jPnW8jfi2RbBj3t1kifpPMCv1bVZuLpxtd94x",
  "key3": "5PUvjQcvz5eAbhY8oeitAhgwg7Gsviy4NqkRQiA6Gmqdv9Ki5HGDhRk4QKkkoY3ztooGJW2pDuWpQzt5ff4yX8zQ",
  "key4": "2yzFfUR6xX6dZ1wCn3ByNaXvn2L7L9jxGsjbUWQcFkNLVGNg4wxeERyBW1Nw4x7ehkn2g5PyhGQUeakYofGFsEGN",
  "key5": "4dTTgMJKMK7DokniTYDRsgZmFFG1yLCsQzj9Uphyr6qVvDWWc875GTzeprEukTuLyYfTza1ndmE7PchVRjGwC82U",
  "key6": "3SKZhU6KgrY6X3FbjkVuiAi4nHPEbMwiTTJikPgcxq2THW5a55oSxiA1M8Ptw1mUTUHTwhkfnCJ1ZMYo9fNxJWmN",
  "key7": "NAkxUXA45GLBSUuiHHoc2EiuP6Jm6tiyuyieDBesDdyjU5SDKLDS4PpusJRCjiZ947w9uL7BkVo3aV5b4F4pijb",
  "key8": "5menoyonNMSwBBt4zu8dA9TTmqugpJQHDsyKwngkzkN1MPm7i3hznscCNhy83t4riuQo7tTzv7jVgnb33ZrjmZjf",
  "key9": "5sy89aS68LP2oyJsin1hNbAs4VwcNgiosTr4i2KPXfYzRWq6L8NDNNr661qAePFQVwWPo5UuxwMRmG8y1zTpwqqm",
  "key10": "4msVf7J5gJ6AncEwKraw1RU3GMZA95aqZWZLcvxd63vTWhpscUydcZ2j5vo8MXjeCrGbehQNWp7THU4oZxg9hWE1",
  "key11": "4CT8TpoWkYEYzBvwF4nCLcD3tiK62E1VfDXM1nzRzzx6iWTAHhjFT3HveTBaJ2ynPhaXqgXZ7pdX3XxvDMYmnMEJ",
  "key12": "2jCCJ5YPrZWzgSNUWWx1u8CgcnCfyJm5Zv6FJu1zXGFedv8kupSRY7aEc3WefG3qo2pfzPutkXPSTLnjc8LCxMa7",
  "key13": "2Lvvt4xQXUhkeSBM3TrE5qnJ2HQ6BmxZxZnwpoJgQfWAdkwduniAYoeSpFKrJzCbGMGo12i1wGV2SGpLiJxGp3Kb",
  "key14": "2BhGMoWPu8HBgy8b37SQ6Asnzg5CmYPhmmnqEEP7d2UWApgHF7ZyoxzddzDzHHaiHnHUmfqRccZuL7ov1NjC2Hkq",
  "key15": "3EQqYUktvRjsc8LwwuFv6tbPW2kxFnx4HEpMZX4MnwyH6WEF1o3ihCQ7aW1zUbngh5zTfyBJUqJxTvfnjVvEBXCQ",
  "key16": "3pTULeBbEqxGZ2Efr7AySm6dsPQemewJZGZkDCSi6f5JYh37aDm9dY5bpzYHCYiX6PjQbpWfiWb7wsAvwLEoHbZq",
  "key17": "2r821ftZJWvJt3T3etjekgNyaw35FVFaQ8FyLK3ARnBqGgzKkvUAdVCuNRBCvu6EcHRcFHU61n1TTPCXttvvkuNY",
  "key18": "jEZBXKe8YdnktdD7N2AssFv3pbrugasuQeQ1UVGScxHw8ayk6ZGrZ4NsZF4BXKn7xgu4LNnahrPzhtr3m4Lw1gF",
  "key19": "5WtYTGZyyXR3q9nRkr877MkSEMJqUPTjiRwm9VNcPTAAwt9o3cLpq6dcXdWxYsWqRTnUkNA6uFPXYQQYEjHLwyYU",
  "key20": "4AU6CNaZhQXcaAZZQbP3YfCCu6kvSwvxayvzMSEmL5EGYwY87pPJRHnz1rVTstSj79sKSSfMKVtVc1rV8rdZqJUm",
  "key21": "4keGnqaaRNFkxuiqJTZDEEJD9EbqnLV8Z3pxy3T4cjZoGEMdi7qHSTNMJvHHFuV3TuxGQbB2Gi3BTbF1z1wbqh3f",
  "key22": "44PvihvssQuZBuqwG6mQqMnZdtpLs3ax5qAU6WbYTYVnWexDjcMcThKPqwoY6EabJFbxZwWdthFLRoAh2MHq3pEe",
  "key23": "5cdwfosLyJ3YnJJUQfh7Tb6oWs4GaXiahFFXijRJsVQrxpnZUEt8wYFoGva9KsygoskZhuto8wkbTgRES7dnMbGy",
  "key24": "5UcwPBHq5tVdtrM2anK5VvHbstuBid1s6RFYRmdaMEZLXuWZSv7fehzn3X3LTE6aQbmmfgQMNwBiAfVguwGUK1Te",
  "key25": "3uUYqBbKQprUkgBhKvmuRjuy6QJKwGpxxee9o41YuPeZmEnRGdDzFDpT4n3UihcLucBi6VRETzrSGoj2BsWmSJGy",
  "key26": "2uW9rbX5MQQWaGUByQcBx6GmWMBLPeZHJoKRGkQ9gKdmTepnnGkrZ1H9ee8cJiTeHzZXVmucmuixybW2jEtWcx8v",
  "key27": "3hsGRyv4S1kSsop9pwcKWVmrS3LqKr37UD4LuZG28rW7AiTrE3CFraPFHFJR9bgkzeEShwbr2whLKL2m8nvsd6Fu",
  "key28": "5hWrJGrMzC3zUwCJAA5qszsaQWkGhncr5A4uW8yoo9taMVMPWVUdb22297VbzEnwU1s3b3yT5A5bdvsrZewkfUnT",
  "key29": "3iV4nHGLZNd3gCHnBjHUexdGF6jDLBGmnNhoJAVN4xzvP4jNk43gtfxKf96UY9yqPMdptimERmixAwCbExAdBcyR",
  "key30": "2kLSjdMfrqLakGE6AaLVwhJ7AZxYfw9qHkj1McTM5TFX3AbeK23BkCZRZufUyAfPV2MaPFgkoCPFimrpGuvQT5fB",
  "key31": "4JJQHV3MaXQnsra46NL4MRkaaCtmwuyuNNLNHubUzReziPJdC91vKf3F844uxDFNq2zFJXJG4GebWimXoURrzCse",
  "key32": "53wQzSwVT7pZsEHDyv5MiYjFHdGmpzHzvJfvVvw8yp4dBRraf38M3ejG78c5MLUmJ6mu4dzL8zzzHUZPxT1dcwtN",
  "key33": "2zCxrtvt6g1oKxDYxJXAmP8VkqrTC6APMjTv878DmMvp2Y3oMdzCA1p7BE4PkNPDcba4oFTNHRN1w4uBQ8XFCYCm",
  "key34": "2gwKcfLJzCwF7veTkVPVKbdg6XgnLQQZJ6BuCdhCifMwk6hWFKMzmLYEUZyL1rmExeYmApaMrY3qwyRAZzpb32D1",
  "key35": "fuUyJ85YNuKjpuN5DNgBScPokuu4gbdJkP4U9nkKqkXZxEhvrNnq7YmgC9V9xJoNHzfxJj2dPKS8qw7tDtY5JQ3"
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
