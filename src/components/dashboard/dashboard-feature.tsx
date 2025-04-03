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
    "Z7AndXvjdNFLc6gf8s7PZKThHoDY3XBQnh91QNr35ab1gPcGjDgkqtZeEjHr75vmvC2RVhhwuMaoXeN5PqTEXBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJTvHVJSwBFULajQhcDeC5BB5ky9RTZTcR7kTg3zTULLcZUcFLH1JxEWnDpnMtKByCWMpbAJ4knw69QuJcS5HNM",
  "key1": "42nQqdCmvBnbnifQnuLVoH3diNgMN9XoPZowZGeNXhS17QUgbXVTLjY1T4EHVmmXA66DDCN5tAU8FUiriTB62y4R",
  "key2": "3oxJfqmsRW4kqYegyNCnx5DxtVRBdsGqTVFw1bar9NCKspmeADZrnf8TKPZ3nD1GbQeEDhgmafGto6yZhW1aw4c1",
  "key3": "65K9c5FvB1JjcgYwExZ1j3Nfgk5RCV5zXkH4GMEAFtNBoq8qx3iC7RdsE4hGvLcB5jzodzRpy4cEKRUsno3CSCqe",
  "key4": "4RqrzyZ7X4MRhL6BoieDDo9fgTYFQLFWjyo8kFmUNv4BHLiftgTUndayVcCdAmzsAU1hjAoCRBTDU7mrek6GGUuD",
  "key5": "41zprBHYCzdP5grbnXkaAhgJa5KvruQaWAyfKjcdyARXzDG134Upachgudk2dpPA6PgcpuYG1etDhEd3XdbneK1G",
  "key6": "HnRo3F7wRvrRb2tSigXQdUzBUCHDYSbGdqtbjS2xCWFr1QUqVWy1UqcLzT8FqGqHn6gSiZrZbA8qXuBgRaFG5Bg",
  "key7": "4qqyrcDCU6qbpZjw754K75HSAWi4BJ8YqghLztYiVGDaQiNU3ieE6h2dz987LASiPYUyo5Et8TfVFKbGKLDh5iXc",
  "key8": "5phvcep1TDC3e9D9UCAN7CK3zaQ87r17gZvgwCk2wu7fRvYJGyyDGp3muojGVpkgFsPuxsoy5nHHUFg9Goxidzn",
  "key9": "HFS6aJZ7AsWEQEEBACSp7VGNWUxKtWXTPDA81syRNFLwKFR1zrxAMCEFUDAnQSaMjFTXKvsnbL4Re9VeLtsAEjp",
  "key10": "gtyetFoFzQ6j4rsFvgN1eFzTaBpdi2tWxptAUon9UKvB5rtjDmVkD5Xt3muPgZpjeAsJ8PPmvPsjhZPKgXfyAC2",
  "key11": "5XTL2ntqeDNgRx762uTWBKGXfVzZiQEmyyPemEUktWHS1XV5EtiTfo4d8QoX6uw84v89cYtpqEUBR4zdmeAQB8gq",
  "key12": "2rJTsEpf4dwmtwNaa9KwCNfribwJzCwzCsKeJP4KGrYM7MzDAkCqReGq1hYrJzPjVvM4U25cDNBFtQ4JXLrx9iqq",
  "key13": "Mum5CeMHCXY6jjDcnbFqD7fE8pbbnyqhBzzQo8ffsTL3LJ5JunURBq83DTteKhMoUeGsu76WTuNik2oCTcqVoP7",
  "key14": "64ibR5SV4cQvXDdY9szVPowcTwDKLXDmYfAtCyMMbvY4h8FJoLHZ5hdkgyqs8YzHJuY7Wp6cPR8GvU3pPKpcwFaK",
  "key15": "5dyCCtZ4A5LWmm7mRM7ctMbUchurY1PpD9kRi51hydd8MiSSGGgYtgzgJbVvXCHmXrHHtD5AuTDujvbYD2Jgn7wh",
  "key16": "7wxzzJuVEp3hQtNNLwwacod3oiLbdvTFV2zjcgMUmbzMyzDoQKzgEU1J73iJMz157UWycVqDc7SwvAYixZzr4je",
  "key17": "5eCw6h7KEfrqZXk1j1BzrNQi2gvEZvGKCewHrDx2zsq6Bd7dhTL8ubKKoiSrL1dtq9PgC9NPiwf2ZKcBMQVzrzYv",
  "key18": "4upcv1Gdih5cbChXS38AbBBHY3fviJvALHzCYimZ2C4Kp6ahDcg6R2w6iXahFAUet4RRZnPje4xv1YTndMKNEHnf",
  "key19": "2gEDuHrhT7XUAn1jJcSKuXJTL9U9oicamG4VN1jJ2drCTEArSjAK2cUyQ9ULD8SQ3ANE5RavtFaNbDDyGVHmvPFa",
  "key20": "2aQj3oUQLsM3x6F24bjgosx6A9dJQXXRHsBD1ejYFULAnBcVXEKwPBhZNRZXQ2zixGNAXgYq4FviwkWrXrBK6eFi",
  "key21": "27wAdErn2VRhDoZjCNuqZqSAFN1zei545PiQJ2HddLgtvR9CK2hLUt326MeQeSudF9gm5tBhCoa7vdC28XoukmxF",
  "key22": "4pt8LZK4k27JTj4Zc89iR2PFbpYparQUBqBP5eNDpeYE638gEehiPxkFqWNwJqPVPpwDscy3FpLxzxxm2DVfuLxn",
  "key23": "5Er9KHXUw7TvYRrKM71FHqCefPfpHit8WqmACi25N1nskTE6FmNjAkGmeL6bBnSFmt6CVQw6E97ndpk8omNU5Q8j",
  "key24": "4Udg71xYyC4wdb64qFMwbSpUMTFF3tVMGbVZrvaKyn5mx6DdTUNu74KdZWChFvaoFGBHyEmCpGM6J2amQ3Kav1Y3",
  "key25": "34ZdFhAgWhRP5EGY3o23P13cc1ojfdWWSWFvDCxh24F6h8pEAcZFmWb19VLGDCQXcYtmXr1FiQZvK9zY7owgUCtY",
  "key26": "3V2P6mFNorkSbuYYkcEZmG5r8xM5YJ91j1aZmyi4QPrTgzJUqaDQTafooahfaeHgUm7rSX5Sf2c1NFgtEcWofgwu",
  "key27": "3h5412r2ZGakLwEkmcFYJcoX7MgzLJC5va8GqwcVoDuHbDYAREKbZ7dq4j5G55GEQrBiAJAqeN32GnKyNcqV7v4y",
  "key28": "3FfpxEWkz1RdQggKPracxyaciWWSZ41jteiBV6YNr6TdfsTERRPsAHZMBks7NFcVANyj638HX2anKpdvAUAJxuN8",
  "key29": "5s8feVc2dDb31QuBCochNAkSkFkkzzsvx83a54UNYWcxyjiFMtnqnLP9rZv3NukmNCSv5tX3H725DJURLoo2vuDr",
  "key30": "2ye9NAodFUjE4Cu2FnJZCWhkCD7yZkwVBLMUEsSQuUrF4Yo6S3Ge1ybdNRHiWCdNX4Wf9ocz6ZxbUzQ9wMxKnm4b",
  "key31": "2QD73PbXWUBt2mDc68jQZjomiNzK75NemfVWcppRfieuVinsZPm9b8odpPhKqEHo1MiUAisDSsgr8NoZN154HnT6",
  "key32": "4gdKesnXrvjpmKCTjTx7GkHEeXh6EG7AdqsqifTToK5NNQLHp7N2BYnmEAJeiW2AkiMhg4QyRH2pDQ1pVwLEMdJm",
  "key33": "34X3hxsMtbgc5CXmsmvd6bamVrfsSwqPxsggwEwiUMGc6ffRACiPbBTuWYnxfMthksA13UpKLXSSxmW18YdvfKCk",
  "key34": "237BGF7hdwiU9gD1mJDrUzciriiLsC2zYenJeowsScjrNmAV1LKY8EWAGCarY8Yi8yttKY5eGabcMFAdkiX5Gw3V",
  "key35": "45AQpZUJbV5gW5UiHJxmTuWujmka66U5fE1YfJMfrtpEbf7v4hci52141xERSHAE8Jo2nENC8Z7yxBcZrYZrMTQh",
  "key36": "4ZviCnERWnoj46QQiNubS2tUw64xKbSydfEitBciMMTXgPF2jp6FhYKCmFY6Dcn2Linn7c7gkuc4xJz9rKMr5bBm",
  "key37": "4i1UMHVNbb4dv6BCEnvBJKeiKskLe8FEs3J3RK6uFSFATVAkDm4fj7QeQ5Z4CGg2pdJHFUkrERbLygxnQLc7opj4"
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
