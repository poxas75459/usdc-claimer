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
    "3Y8P2Zcyu1DE3rDXej3C8HxYftmvdCy8tXWwWJsn9iJ32VSXTkFHoodp9g9ZdRPyrk8GayMMcYXELEu9UyDrdLBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MemgX4Ls1Q8AjZqWeDe1sjFsN4p6SPLdTiqcocyimDU94EcFtxfqfR6f3iH6tVitt7qPCQjH6FHoAT7QvS71Lhu",
  "key1": "3yXufEs7NQFFfGsqM3ifytT6vHXvSLDEV4hy3MCFPACRvvcEfZtmjdruWRRj1o8Hhv7mYXEhB8XyLqgGuNs4BV2n",
  "key2": "5g7LUnCVm3ydvVWxUfrUT4kACC1ekY81Su8wHievQgfxtC2XV7CANswpRoAj8wHCGxEZn4v9J6kwpZhb6PWhft5j",
  "key3": "NJgbyKjerPhSYnqj2CYarqxPeaqEddjA9xi3rgi1ebbGu1yeK3RSyaEebeGUvrZJzHhFeGAVQugd8jsAnUB9dv7",
  "key4": "5bHLYvNhWjPuHA1uEC3JQxkyd3FP5kypLPUPNkHwA3LSB2zW174ESAjV3uf9JpuwSnGmTuX9YXyfiXS1KrMrXtM5",
  "key5": "2AB4T78HH9K9d5ZtLZfk1kgYqQC8FVXNoXGdEJaW6v1Z8tXgs2X9hrwcdarYem1Jn7q2wrqaUUqLDTP3FFopTtLi",
  "key6": "UwXQVvcajVfgZp4tLiijJAiCwjwAQN1rjzZ7rxKVyeAt19beXsed5YcRXUov1haDpi4b6k63ogUsRr2Rbob2wM5",
  "key7": "5ityN1drmKp4813h359MBVwEDGNBrsYiexYdJwUjz6WLza1cpXqqxHVJBRiGdvtPk1m1hAwF4xTkeTq2KkmydtCF",
  "key8": "2dFQugFB78hVZDRRiuWV4Sa4TrGPT1fyWzVksuZnhpmoZTjRxULbySnVs1MfGuJAyeZayMLfygbNgfGvB4zyHyF9",
  "key9": "5NNfcNfb4dCZwUEDzjPZnXXBikt6eU3N1g19D79CumhzHKj6J5WidZJTHMHx3erwUg36mGJNTWHEp9wXnpRdmfLT",
  "key10": "5wyYZJXgwVuGH1o8LJT73n9uC9LnD5gSyXeN4UiMjXDz7Qa5PFz3y7CcTf8Xu8PXfEwewXtXH8sg8WXYCjNc8ksi",
  "key11": "27M7G4r8EvAtDQM1pPQAb3k8386DWhMNu6165LxiTbFRveu1Yx6LYGgbJri1UXMn86RUFZucjKeCJCKVkd1ttqS3",
  "key12": "3Sn9TdETHqXF6nndarQK8eHSjpwCeiTizTp4QQzmvpk8FaZphbcvVMyiis2hKa5ALumCcrGZkAE3BiGDVwzAE9kB",
  "key13": "65zvZaKQ7bTPazDn47mBKkcEXFJep8odPKcHAS7q9StmQ5HPx815mS4xnGWQ9YmtogYGXbBqCmkHMPcB5KaEgw1p",
  "key14": "3pqHvotvCTZ3a665fTMqtDmhbGyaSQ2hmMDuiyPs3ZCHkDJ7bVT3kuryNMMF2DmBRSjub7kDHH2h1znRJgbbyRM6",
  "key15": "4jqqjLKBmoXccqrh1RfwYr2GGcQ24bKkb1KnQZRiy9kCaKHiz9mh9f9gsS8nBDuxbmzQ1Dq4sqewTj43M3pEogv1",
  "key16": "2uCqH5zbSHW6R65pdLAjr5JCoLwnbr8iUJ9Ys14vNGuUEUE4g4ooevg8qTfNoh597Dj4Gz2FfP4QXhHetPs5xhL5",
  "key17": "sEvN4cPmGVFAP5ZMjkSd7u5pB6aNEoZZSyk6RixybJZnCAMma4KFKPoeifAG147paWv6KhpX3EAsu2czFUVpka3",
  "key18": "3YuLK7oKzsVHVQTcbZQU9c25F1y7CJqhzFhYS5im6WiDqomyXd1U6xrHDjY5fXZpnhTb5eh9221hF3socL4ydvyE",
  "key19": "4Ka6XpAf83gzNWTt35rA2moZ5Bn62c217uAPe7NYJ6ncnEg1BWLw9whwXNTBkwn95KNihKyF4m1uCN9km2m194w2",
  "key20": "zRv3rTCpJWWkoiJNdd7MD22g4Rn6QL9LEncJZDnkhTmEYA13FkitQuGUCanSGh8gMfuFR7TYV39NJKNgMVUu2PZ",
  "key21": "4KT5L4jqBYEJUZS2MPkcyA5q7RpNgzDVKsr6DgW5keEtnMovMtAQrezJU2aXnmUbSj1b7SSLub9TSDpyUEikg9Zx",
  "key22": "5g6MuC4uaM52Z3CnjDZS1CS9xhK9TvhLVhBKG56HhbgEqRthbBMvfHcncR6Qti16HGHmf76CUtXYYnzbXZGx8Xo7",
  "key23": "5VMaHZh1jfwzZ5AccABihDW19ikPSSGojCa5P1Gqs1T9J1gafGmpaZiPRLkeW97uxTnYpZExJq5yYPuaT9AgEZEF",
  "key24": "41PjfKu8WsvC4JU8sDq5FKYphxdCf2hFtbshj4Xf6vSitsvekd1Fi6haVnjwLauTG4wJvdQks6YLnj2SPW4hW4iK",
  "key25": "21iXzMS1hfGiXKsbogLwibXQuqY5KWuJZ45BTThFwR9vGKUqdagzwETZDJLCLbtGdb8FKRZhco7PNdFdKumF4viY",
  "key26": "2tFcQfNYWc3nHn5BYDjU34qoimysUyYhwRkDkoi9gnyZF8Erbt5MSaKGuz4YMHRvoNAX6bN1fP6RabFLReeNMLFn",
  "key27": "2NP3ETNZzRf62G5V1dk6feckdYMicG2pAw6eLSrL6WPGNeTLebVNbp991sDNoSz2YpsWdfD7N3MxrhYgvwNNEhF",
  "key28": "4KwiRcEkgCzuqsrvTGovC517DLHqioAk712WYa8b58yZjmpVxRzwoprkqn1MqgT2yp1PUaKA3Tck5KU85iwK6DXa",
  "key29": "3BbZbgrqk4iytndortBQnPHR4e2MgLxrHQNEnbZjLdeUbsd7q19VFNYRTuDBGFiVd9tEV9BDpj58CnRr8NL8rGH2",
  "key30": "5XewnUrzYqScY6mfcgSAf3jDiWt5s3vyvjMbEwoknpnDT5XM1NMfhJLsTtzMnyVS688wFa8X1pNGXsQEWm2KChkB",
  "key31": "3pnASAEFjunkeibi5iYyhHMhrXzM9smkZv4T7ywjumtwiuyc1GX4Hcmoq4GAcpN4cAgr4BGfcuz5wMQRQD4mNqeM",
  "key32": "5eqhqmZodxtWoirGfjoi31xh4cPEJzkHAQzBT59mGYkq9LL7jJDcvJ2jU2bUqMSacbCMmw1UWoWp4WKM1nu5UTRM"
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
