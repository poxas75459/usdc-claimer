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
    "GkKuHf6fkYv63q3DZjebhu1UvFkqW5NUZqMEdWnvogw2qMWy5QqqbbHDDqDZZC1gCbLAcMkFp6mo7Sxcc7E5zkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mBeHKQUBiSHfegQ9n7DdkyseDF6kpadCPHFZM9ekph1qsEE3V5sGQKzMrNFAwRn6TVgvzbJbAsNp5HfN6LLuBMe",
  "key1": "3PqqCnyNZYBgseAoA4XLnqdbjPYoi9VvJGbj2rSNq4cTfQyxtxc8fkmKqh8GM8QbVGb9sJCUDTz9heDHF78PMpHH",
  "key2": "63dkAFtRTfb9kiBkAhEk1hndehAVyKbzGd5KrypdSB4uXs63rgY9Mb6QZ38T7PZzVbRu8NLxXZuQ1bbfWZkMKTKJ",
  "key3": "y6PQo5kdEAAia5pvfvrikCxzjhFfVTzaEZyvEw5S3RZF6jwwYffaefzDGkD8d818cN2d1PxDQUXknrGZRzv4R45",
  "key4": "2JymCUVv5A28ZtpEKWaZdGuHqjcGSuxyTa13XEBv19jWckR2YjHViQKb1NDBfXbW4bQnMT4k3Vvd2zTy4NovquNv",
  "key5": "4VdsMa1NvcF8XddopccEaaBVNT1D8H2QRMmd1ez9fVkMP8R7ATNUdxcaoRVfQKyhsMsbUFed63nKnLzA6UwUE4Rk",
  "key6": "2rMtK4UGP3fpE7psnrzXm2TzP6Xo1cxdKySTdfojFyNb6749HYX2DiohKaWzsyDH1zQyTJ1k9wvoE6R6nY9uYoc2",
  "key7": "2hEojrtvs1SnU1it3Cve3oXzHxwrphcGgX98RPRkvXwSxW7sRKG3zpcZVtbcS2WiHsdJ8fswx7T6XfgFsK5df3xu",
  "key8": "JjuZrwFCX3frgHv9WAAjZ5voJfiUMZGQyKDkK1s4nhPV5SX738piMNoEMJj5UP4ZWnewM8XWvNXHfP6sHa1zhfc",
  "key9": "2oamR4xQJWiBYxQSunohnWCyP5jLHYhmswxMxaoeJ8pUYJePKk3UoSQZA8L7TsTGKFFbJ8GefBorJLfW64jJbTuV",
  "key10": "2xjuZW9Jpc7A1Tnahu9BAGuUHghTiBgdeVcD1x7sShwJvA9ptW156oX7N5156Y1HdztacYiDV2eTbdeDTtStoZYg",
  "key11": "5fu5p2zty7jvhnmuVXyr4WkoQKSaKCt52toGLh5JP3eFALWeRYwAtr9sNdx8SeF6j37QtycgPGz9cm45oZ5H2Np3",
  "key12": "5TzJ3n7Jub6enyqKM3HgxajkAkWHd4JXUqFXFqFtLtVQNStMEWfrzcgjoy1vxHZKpb7YZTAksFgBMA4Neft3qE4M",
  "key13": "2ofaaJsxKcqZQuFbFqLupzjYRYAa3A3qnaJtxtU76rGpbUfRGvMWUUggDc3PnDMaMZmdgQBo4nr96qFodb3T2C7t",
  "key14": "zy1MXeTjW41Zpe75XakHHjHuFakFTQ7jFwus9VjWr4664QMZknQ28RnXB4VX22eJP6mXhTCCAXN5Cx6JXqeiiNx",
  "key15": "V4994mwz133FfGUcoaceJH56k9wvrFdZuAGt7h8NNWgLVpcHcpktmYnYXnPcnG15Tm6nxyGAZQRFdBA7TGsGXaN",
  "key16": "5YUq8vPnre93rDGdLE4WXu8gy7iCpU6mR28gpC7yzYZjrSpFSSrzbGnXN1iBEnhEdkw5HLVpTJFHEUnygq8FizQB",
  "key17": "22D6HsLikX56i9nnjgVh4awkFNd22YTp49VPE1ujG8HobTbKnPDLaH2qPgbhj6c1mUXMeSKj45LpXaUq1CE2Kf1z",
  "key18": "51mPczxu1HyDNubEVYJYDS6r4bbSpW2GVqZj5fnHJQwzA5nEqw9Xm7weYxzxgFsqabytePBkNnhXvwhW8Cfs6Liw",
  "key19": "En5mwiQmfcyGxLg3xKPHNA2KCz7EtFRVjVuVhh3PbQtXcksQmgy6KEJHf8XmqvTSLqUg6u6nZg3p6Tb7h7bM5Nh",
  "key20": "2Z4cyrPh7ZvJUSgW2w93znzmP2g53zLudbGFdSR7pcNohA1NqiaEBGhZed2KXesnkTdUAdfada41juDDu1o45NbX",
  "key21": "28imFwBmPizGc1vRFKRar8KdnJucM2EhCLV4xWWdRvRu1SRcLYnd8qLTYmGszuqNm9DXpbLL12EmiGHJ2qAXCeR2",
  "key22": "5YcFi54s4a7Gbfp9pCyyXzHaV6JB9G8nygcQeog8YQhawz92QGhjLMcJQ8yWmJbx32YtigeWJGKXmFEJC1ie2FU2",
  "key23": "2bn3KEFR6CrGiBQCom6Kp6YzXPedD9GkpVBPueEJ3uVQutT2o6x5NoN9EDSTS7ND6hKGRVGKYXmgN2YTmh71Wh9e",
  "key24": "5GVj2qZvdndK2ecmDYkkKBeEoQXS4zTVR5hmw5tYd4sE2xtRBPCCQe6Jt9RE5sAvhDUNMrvX1LuubaZh9ECkHuU6",
  "key25": "2CzUzNghscECbsqEVXhVWu4yj2i5HZVhCKVswFaQfMSBYz1SMoZ7jcX942nwEqCfVgxqesGtLvEeLSArfkRqXK9h",
  "key26": "3oss6JZygjFTMw9vYxvBT5ae4w5qL3jfGoiLzJRwxqdmoZE7FoeJ2r4JUAoa2qHuKh1CUuaMMm5da9x1Sh36B8tP",
  "key27": "2B8QL6sz4c16jjxtjkBbCy8jNU1d4nTQ2D1dMqm2kYtKyWNvmMZsnBMDageEUza2AVKYhPpdWWUQFeotSrYeDTdf",
  "key28": "3fh4q3hH95ZYUpkFidCLu9dJkxGU9m4a3G1Du4TiV9Df9uhRbkU3JjMSGw3F4X68oFHyzhXGPYwLereqhfhCfxWm",
  "key29": "4mBFCs7nh5SrJEGJaUDNxJ6JfaPKXnztqhjMqJbPh8tjuvFSCd3mJzb6eBTWNEBfcZUGdZ9xDTpWtbP2KAXwRxX8",
  "key30": "4DB7nBxc9uPXEb4hCAvwhLQUTx2rsqTL3tyu8gjvoPgMjxKLdgVtNvkqq6v2FUXjGV9y5aMf2ZEF5vy9L3zBcBr6",
  "key31": "57n47F6BoMfFiCTcrdSLmFSr1EkpNkZBoFTxY2sJAQK3LZyB7JTp8gA4cNKvJGD3HcrwhYjSaL5AqmJ6iSaVsLZo",
  "key32": "4TDu7kknF1cD5ciymCYCRBWtcrhECXFy1kc2w4GEx8Rvf6YcjwG4J7DDFw7Symm1veqekM91p5fCcTACxRAPX1Dq",
  "key33": "3J9Vcaqh8X98EnFANtkaZuMchNYWPabEQvz1rk4jSg6zVvqqTEw71kX58fRYnCLcQVmWU3864ULhBsDdNMoGqM8C",
  "key34": "3XR3A5EGnZPaz5o1rgka3w2tda87tzQHy5YwYN2C8Veq1TyqYqVo9yhztL4LYhKcqaDRiXMxiXExmL7rxmMS9BLT",
  "key35": "5uuKLRGz2rjQn5zwmpPAEFGFwwtkgHbfZPfz4UBzcp7V2WZwi2KqgkPAJGjfTp7P32xECV4pp5K4LSZDPTALzWuc",
  "key36": "4czf9QN4UogYr7ka858YvT59bB22NyQDfVpdZ6XDjMj57WMiAUW1xXYrQ1no9naXAP3okRm6tXMyqG9GsdXY2uEz",
  "key37": "23pnAs39UemGGmrHAAZLWPJgQTLN23D6688AsZMKD7nDfFzUbQy2KekaPMBbaLDA2X8HBoHM1UFDohc3x9mYTsj7",
  "key38": "2o3SGNsWDFChGUdL8YPXcrVBaacyfE8hd94Rv9w6BfVk3em8PeKTWerMgAJs6wip6vpmoU3xzit1ny1bKeBFGmb6",
  "key39": "2N6DuB3yhetRRxu39Dp3GYpFnfyKudhZgCQX7sxBAPftEYCZuFZ2Ka8gcQtQNgfqrUqGn1XPtKNAcu5zR5JoddGq",
  "key40": "UZKZZJchHBkYvpUnqHBGsfD61XPQr46tM9XWaLrhdXiKB6pD5b8Wirwp5khwsnK89rhG8MQCyfm9P1bx5jAjtgc",
  "key41": "3y62JjuqXVLjg9PSPqidTC5nKypk9FRxdE8p1VWiQ4aSqjWwZDGnNr2jRCx39d4Zb7ZZY1KMJjqJuvWRYrW8LZwk"
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
