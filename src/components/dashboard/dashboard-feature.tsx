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
    "4UezNwAnabXdHDUtF3eEh3vJGKvbuJGpVnCb7Q5N2uRYXPMcLKwULhpXiwHgs1rrJTALGk4xdwQGJurxvzABfvWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rsrgqFY7C6xwqA7kaB8icp1U5cmsUMsF9z4FwvvKVxfvw5kgRd4WbEkoJ85tTVMRKnk88tbxmvMQya2yDqGTPJg",
  "key1": "3Jk3TTaEa93FmDuFBB72dbGSyFQGs3a4pFZytduBwhM6j9MoVrwQSfZb6dn6zbqNiEna1MFXoMWy6eVV3LWqFK4v",
  "key2": "5atYRB1fMwq5JYfUVPsbxeD8m3uBQunsD9U4wRtULhX8LXNQeZpL4CzQQeyA2YbD4vDYyieBuvNtWsSV8jHuRYGC",
  "key3": "5AyCRhTLRfzp6UnVg6R8FqhVw21BemWUK2X1YYcuPVMn4BTA52mtUpiiKMsE7h6puputbqQyMNUcfowDxcAHpt2c",
  "key4": "sL8SVDHxdfomSKmyrYErRbKdvDYZrYXtsZ9bMz1gDd5W8ZutRNjATYVcbutDKvCTEPW9FJEVYQjuL5c2qVDtVS3",
  "key5": "4xx5XXKMDawdjtGNZLH3jgvcqctyCFndrzw75buscnQgMTBA1cz2CczX3ZmELQfdfAJV3U6WxqvdR71XoRBEjLFk",
  "key6": "57arzwKp8SoEwE5fa6egez1awbDU1KEdxMRMwe9DZAVJG4dUbPrtuksDW6cwp5dcXDdE5t5AwSxcVvabioAUHwT9",
  "key7": "3KMZff97MAmtXbKWfzzqV2tYTh79UnuWYADgQWgpdhiY6EoP3MvBwns4FVobAEJq2hSFDmMvGaSvTgDhN6sT853t",
  "key8": "ymzyVyH8mcmVxkkgpYbD9Lnt7LSm2NBnyEEwQgvGzWRGpDkDh8axjkfwtzKhZkyMmMRFDtKmqzu5CQBMVB7VzKr",
  "key9": "4PWtJEWLBtEQWoVEtekiG1nCve2XFq5984ZebL4qTBr1juZ4chT7i4fi1zTY3n3AUyhcCR5PYKzL5oFgRaTZMhWh",
  "key10": "3ytzsqkhxcGLFAjHHDZW39P64ykDSkMkyMzYaU56h8bcNmFcidDsWxLbAAbwiBGvkon6LUSjk6FNRUnwyqutYvzy",
  "key11": "29ThXja78Pzu5LkZXuEhAm8t6ormFbKetbrwLAPT1Msp6xkQzrCH1AoaECQCqqQ2dHH6Lno2kT8tMfixQCkoXbnJ",
  "key12": "4F8rXEPcbJaPE4b8tMFsbX5dnm78RBzAivHGKWX1Nh1sTUXYvnUSP6AUwJJgLSFjTcphmbBMKd8wLKvZsSLAhRPt",
  "key13": "5T6zJA3r42CUj43w1UEQz9T9nsG1xc4y9uC2qcjQfGozJoMKD2bwN9F9DopSKh4Nd7sEAKmEruquJS7BvyZVZRDj",
  "key14": "4k4ysezwTYtSjUNyKFrSgUMsT1MppKaptEoqPYxtgCnaH2p4yrbSCsespZoK7dDy8iUYnccXwm2JsdKB6eT5CfPf",
  "key15": "33nGMvFHbtKFL35i2L37VK29dUSMK612wenhWvikL9bhvnvULHYzd9TnRvriUqtsa1oiBkqDio8GRXfLkPVyXb5x",
  "key16": "5RCpaJRiGP8jN6GgTLtC9ixLjfFrueVe9ZXWjW861xfhHeJCW7A1bRpobP7evmW6qj9uq7aA5tc9M4pfJ3VB346f",
  "key17": "2EsWvEFUY2yFz3rzUUHHhVWzds5cM5DobtjMBPUsKR5NdhDMQtKJC4CtPK6TqbpQy1a6dLAEPYYLGtAVAjqtM2A2",
  "key18": "32eHNbSn9GdsbNW3b3aQ6UDdh2DNMXSQyV5oPMwiTn6UbmX9Serse4N17nmVrD6dvaBLkdbyUFRYUPk2S9FNc2Zy",
  "key19": "4L6J1tKbp4iDDzfHMAg7p2onddX6c1uoQjbuXjqJB4diyEzmubfNLKroCVFjg3EiEAZSD9YrhrvaeFMNN7CFMF8M",
  "key20": "4cyWDcE2RYcihM6PGMejUrGprmwQyvpb6jJiugTvVjh9MMy6yGi412wLFBH83kFLchBCaWHYkBo1cRpuMaUb6shz",
  "key21": "5w6VAdSnVk4W9aVuhLws53oNLopxNy9wGATcDrdaWoVVoNTx6jCi57CD4MAU9cJ9Dt9LeTova8EmK28aWMm1marv",
  "key22": "3ipiUMJnxzCV5hUE5VSfMo2Y7m9gMU2WrJ85wN2qkkW69uAXt5vD8ektWLdMiHmZ616K2rbkLNWs8Ysm9kjULtBX",
  "key23": "2z7oAFPWX4KsNw4L5MBdRqZJgYQKGFAciaj14xBWoVZkusn83yJjDMPkTFVLrXXZWRaAdaSCVDm59ewhEqmZheJb",
  "key24": "T5fPqVg9zADqjXLnk4RMcKLMfnES3TRUq61ZqstcFEDa15EhPAnn1TKVnT1hntxEfta5VcjmXZLVKLNTC2SNGgP",
  "key25": "etcMXrUHzFmaMpC6ZC4DxWXK165JqoPLZMYN3sCkHuHVbA11bSE8pr7UDReT79Ysznm9bDiJ1dcUkKQ5WxEH1pX",
  "key26": "3kPyZpBYk1DGVUF28oHxFUYN2xwXyXNFscx7dWsCybwDqzo5n6BkohYYoQgm1NHGJ1cmc64Jp4THjr6UJf5mGxat",
  "key27": "3xruhMBUboDRXRCbDeHKaehk2SHaENWCG3vcz4N9tkW54qnufwiChux8RYjC2EvZTqkYk4kvgQTeNvNhJ4DcXBSs",
  "key28": "3GVhryd1zyZStcxGw4aoRq2nUjC3uCcpKF5NSLdWRScNGFsDcfNhQDdWbvLV8PgGb2nrpVZx9A92GWndEnA11z3u",
  "key29": "4XDcGc1iPS3ZFm96pvfxgAHY3qDU2aJtyXSB1cGPoRxqQgSzRV9EhvC9V1ozHNN43sutZg5PfzFKcoUJqkqCr63U",
  "key30": "4TXBUY9Cf6LPxxNfR7u1ALS9YB4d2QLS9cpAbJuRad3auEVXgLCk2LECTz5cDuKQF5apPyanFLVoUm9WRKK44c1y",
  "key31": "2WvcYyXbnoq5kNxvG3cD3Kp8KkBWoWMj8ac6V616z2vbQiwHPcu1UkqMZmgjpqLgeJTkt8gV7RjGqaE2tFa3gbAv",
  "key32": "2iC3AeVuPK86yZGFrj5cjWCqFVGNaXJ5JBHSvR92MxZ1nSeqHc2PnT2swk2Fa1yp9YExcfL1rR6EwBUY99Le8kbe",
  "key33": "2B7jKeJLu43rrc8ySeP1XsQxnhamNqauRtC5cFQgibm1ktKSdF5VMaCYmeGjTDkziFE9A3xH9KyMQ9fJ9wUnuDcv",
  "key34": "5nHQtg7dYp7oANGNTsw8vfraFYC1SRo1YFR77XLfWFS7Bx87sark8EFRh9Lgmz9HBUcmBUjof1zae7JG7nhnHJzE",
  "key35": "3SrBQt8uaeaF1HUhZTxGr53t9ZnGAJRZmTxQknPGpJRzRdZxHybDtNLoMWoRQFDKr5Xwerb1L8kdQaoc8c3TAzwR",
  "key36": "4oKzpMBQMvktWfk3BETdA7zbWFSkUN4rRzqz86MqpNCsWsfr7t4jToSvJ9w9GB58WkEPu3pAsGTin63N3ACNCeZr",
  "key37": "2GhnTK3x3d5aDFyTQuvCZebdiwuCYuA9CtpMAgZ1BuutxmPAVLKKbTE7qgxAv3nuv29FoAXACTmuw9vzH9tZCyJo",
  "key38": "5pA8djNwrUdRYkTLnKKEPDfkxUYi5Amfmb3xhw1DRQzD56hfUSra8SCDudmNWAhw2k5FDse6pQoYqyPjVzqbemmT",
  "key39": "4qWGEWADeb5z7SyJL7PXDqJEBFYzYxRaZEaEHa2XnKaP9MxztDM4HkEg9xmkCcEEA8RmYKyqS6YbALkNs1QnMVqu",
  "key40": "4DCmVqdgdGz5zxUVY5XT7s5GgYbZubkpC1LeiuQEm5h9cwYErkg8enZ5gwWfjw5mNdqr3mfxAfAmJRCD7f9ukKnA",
  "key41": "xMHgkLLgSgjnLgJ4fqF8MT8etxno6S4rdQLxDngZJopqqogXvDnYofF5JKp5QitGRGzEVUbrq2cUscvFopQTKte",
  "key42": "2jkFhdBB6Q9fxFh11355LuAWTwWo7XcDUfCuv57FJwKA4DBZ6nN4AMkj9HkNENhnWJ931QJgpyjA2J98Fhh9c6gz",
  "key43": "4TMDAXVEsZjaTeRjhWdGMCn7c4cKEs4TUKdEPbVG29Y6cyw1mozwWjQBAJRCKhvLhC8D9BUqXanDP6Xq3hS938nt",
  "key44": "sNQFn9hGEg8KjKrFCPHc9DkcS7Y4kFvRhZ5N36Bk6YWbcGxv53MiXYVbNuXCT5H25ShUTuZyt4c9e7DRmAMBdQn"
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
