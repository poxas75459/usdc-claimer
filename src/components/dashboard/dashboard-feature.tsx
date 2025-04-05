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
    "4URfJriLav5v5tfZ8kfaNvSu9dtCe4uodLpYAZCMnQhdJppVcGBhn2Uf2vjE6Mb9JENSMXC43NvAnFgZoutUPAr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TxhNQX25uS6Wn32DmCkdzBnKZMCjC5rF7FB5SJ22K1PGLnZVnqgoQi5cWjYCuiBhzweHgoZTR5gYwBCATssvaC1",
  "key1": "JpqNQ7fdMetN9WswcJVkd7136VRxZuXHvio5DeVbw8zcfvgzj1He2RchZSdzg1kfvK2yXp7jYT4SQ2uSKGDJVLo",
  "key2": "3XRMKQLW1Mq3dh7ywmhpyp8LUj5HDSJpeSECBR6h6Q63pU8xcXvxz29noUbdTnFms6iFwBJtBHxBu29WrqyaYkqC",
  "key3": "Ec3qkRNFayB1aeUDghbYL1kCp9tASpfVQJgzwgyfxKo1DpjtJ8QsgfP6tviq6W1A5RumqJmuQF43vRw4RAF5WCn",
  "key4": "5dMKL473odjNk8ynMQbtfcNAGYhMpA6NbUYZffcrdLx2dToH183LTreA3gRg4uG5JS7GpfqxGt4sNsvzLmJRG7YQ",
  "key5": "2EBhmHaKAxnHrBjZ2Lzw6aCfPv4wAQcj3HKPnok7wZPDpUZQSjMNGK9zuNZQdFtdUcN5BE2icr4prhL6pMU2nzVu",
  "key6": "5DSjuj3HYKX79kpbYtj7DfxqXYUJnDYaVQMyJx81nCFTEPiRQKe1bsa6mntsaRC4xrhRbZUC6fA9V6sSS745YKqz",
  "key7": "2wtqTzrjeviGpSEd3aRTgyBJr1hgNaTxTQcayHFcV9XsvrNyu7XfaCgv1qBcCDQYvWtewavXeYDXPGL3o5fQsynv",
  "key8": "t123hevu5ni3VywMkmH9ALk84Q6sRPzfctxgRbCs45bBBPYUuPtqVXJXCyjz8fJayL9wFgGKw2PnneynGdjC2Yj",
  "key9": "44TowJn9cSFCg3o66c9Fqv8pj6n9t1XdnUHRbNpBwBsPLhhgYMNff3Um93BTPxZRcb1YGqs6WBhVXdjYCUwPwkQB",
  "key10": "2vC2jGazXNVgkMjniboFRCYpnjsh4igFijQfEF2hBbnPHHS7wHS8j22P56Bz3Kko3CqHXSLEKAyVYLWq3E6U3L3U",
  "key11": "DWzA4GngfJiX1LM36j9trdUPqH8mTG9t2MC9dVQHzUoo5K1u44wJYctwPL73cyBMAULLVETAjC3LLq69Jvxwaos",
  "key12": "5YCH1ZwFdNNBCp58FbpxeHqEMtJvUWhzgc9fR2quEA7LBKWxoj8M6KM9f53uRY2swiK3Yo9pez9acGmPVAJ2Pdaw",
  "key13": "T2AGE9WsFT2JekHE3tBrqAaPeBtQkDc3DFYrp1dPYpNmgE5tRKm7PkkXB8277PgbzXaregJS3FLwHTk7akVaZNh",
  "key14": "2YHigvaQbUuC5TRScwky1bg7UmS2KYrcSbJztUY4zDyCN2e5dQ7T849iFuFH28ydss8HW2ZbWuBKKXjtD64Eukku",
  "key15": "5JfJB8FzgBgvwhEfUK8rwxHXf6xQ8cT2HjGts8tFn2d4mJqHbCSrZjvvBwg3HLmsaVsp1zCmb4pcLvKFnDV4oaVN",
  "key16": "2DKkHRC5hWWqh5F1x7uPSe4bFrRgDZ7PQjefjy7jYPao2x69WfG4REGtgyV6UP7xcGHMRH1CsC5EScDc2M6ddLRN",
  "key17": "5E2btWAf74T91mKgqzmr6UniasTpG6Zj3dynRZ4J57DwaPVtzefoc6eKiwMgoEK9pJGzuduRc27gu1osB8P3B6hg",
  "key18": "3tM74Vm3b4GW67A3ZZwuM5JsCSs1ogPuu6GBchgN7PeExo1Cp6uTtRjH3whXUAtry2HoffzXymCg3TTfxQnaAu7x",
  "key19": "5Vb3AXAQDXz5iqvqtUMAh1KUTym6mdFcA4ckBp6myswzdfH1hjmXxnW4DpNJFjESeu8owKvTSRUKtF4DnY7JZ9c7",
  "key20": "2UMpV42srSyhhactxywN7A2vSMyZagCEbywSGQPGhc2gPDFWqx6EWVX4fwzpb3jXx1ecDMbjWQWYRRjEZJUuHG9o",
  "key21": "5VdsNC7WXAJmJeYpMK6N7jqq78xMaALar8muzEq8xsycLqNDRaSTuF9rj8mvVytw9yPA7rpMfGP7E7CUWtWkpvT5",
  "key22": "66KBA9VShhzsT4mLM5XTWLp5paX338TCuoidqhWwyrRN3AxxrmfuFfeApLXXet5Kns9wsYBEJMT7NSTfrQnvr89f",
  "key23": "AEgdbirtdBuAGaLSPCVp3N2rbw8oHrqdxeYMi2rQCAMKDrWjQhg9ub798Mdz9xLYsyT2k8jVRXrbFHYYHzVSfTt",
  "key24": "4vD5o1vmbkXVsrjFPVmLheWArkGdor9XSVzfsyUm1WvCUbYPZxzWyjU5iLkNk7M27RrFCt3eExBSjX23LqZb9hpt",
  "key25": "5q86GxNxQnsuYqSaNLHxJpipNB95gYYDhbeSkudGUYc5AsTWuoXRxEXG4KtD2gxCYSsGCxYaZUqi68oxiy26FuBd",
  "key26": "24Kiq1U1UpWTcvfdm1wufkZEdjNmTss9fdnp5pymWXPMrfNHXgKRaV7ScQNNeo9GuQ6z8oNVT9MxMtK9DjwEicSr",
  "key27": "5gdov7kAUDRm9zN77YU5YEQnXtsDiXYRSmNJDx3g6k47pPyXveHGZy8iDVBvPbxsRopW9ZaynwMBCKJPd727Qhnx",
  "key28": "3PYFPom3A5KUZwg7uF9E8NWJiiAVvThUpgrr1L2wsKALKFP4Gebz4MURK23xTmMjH2Gb1EBmuXtKfNazNKPLo2QP",
  "key29": "24vSh49ceJH2KU96VVj9kTuazLh9LjGWCVSZqvWd4ybUfeZ17e2Gy9C6n3HPM23cYci36qWn8XVhejV96ohMdqWx",
  "key30": "3CxLSBtRh28uh6MGf3vGCukDaNrFd29X3anui2D64km6c7cVC2WeThYY19YrVJRmXGKAzUcXTQiTwFS5AUL2KUB6",
  "key31": "3xtjMQhK2oHuRnNUo5vf1y4Fduk8Zk2nJNkm12PDifK2dKfj9tCHxdoatCgDTeuyvDheYrD6BwnrxPBq87r4iNQz",
  "key32": "4VdaVgUhSHJPMZp6dR2BdCdNuurUvW35WiW538F2L9jMTcGfor3XRFWYSYPgN7pUvGroiGVvJrhSSqc9xY2jMbcg",
  "key33": "3sZRGirWgu1RLRJ2Kc6dRLhzKMnqpGstDsYWcmKqQYeHw9uWmPWv97o7VscPiK3s744wHUwTLEmgQQSZRDV9vbTh",
  "key34": "3x92CZvUu7GfbNxBCBynxWDZ8nHgcp7ds33tMQqUcKUDL4rmYj4tUWmQg2LyfvzFYyXDQDvkhxcFrQAwEWepM34N"
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
