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
    "2QQr5jAHTUGS29SNPcM9DuMGpRnbYVKtrPUBgW3j2e3pSoJU4k73nRskp2eDd8fyFskJK6ZVCmEUz3YMFDdtvNxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dLrsmYeRYbxR89zgB7jHLwJRKUEcw4QJ3HAHW7z6Kue5P6tXQ4SkDQeZeJ8ReT11tWDaA9FFyVTTowoCv433cSn",
  "key1": "3ELFV5DMCTFUYxfmUk2i5mw6S2h6hZtb45LrXtagX9WRJZdnEJm3V4JzXhnSmDKXzB6sR4NQymupmVgC2jC1xggZ",
  "key2": "4VzBRonGUHt8DwjSudE7kfKkdxPf26u3MovdLXtrjw6vhffBVAA1HmoM9XETRtNfmzmRSuLtvtUwyxNsEQGwyALr",
  "key3": "w2JjQfRpU3pkLFqjVpECcDLjMZKn45gvfM2uXT3nP89ijuJ95mY2knLpnLNShTvdqGsHTJkSQvZuYnFi7fm4Eqi",
  "key4": "2U5wyBVg6T2mMtg4x4jpQUYAZTd1XyAAm4zHTRJ8kfKbhwMS7xvLAJTqPfMwLLN1EzjgB6eRunU132mz46fxiFSt",
  "key5": "4yYTu727VRWFGKhztjpvn1rnkcA3Js64Ky6Wpe91NZ1QN1A47a3tCerb79ndDU9RNymXMNVQfjccj1Wq44D4qn1w",
  "key6": "3Cn8gwLKuwFk7JnWKhMJa1SzyfCQwPe9Y1nXW3BB1a2Dob8kWDNKmx5kKHzPaXCwv7h9N8UQB3HvKCsPahsBUmhT",
  "key7": "2sw7xPF4AYAwjnyywAqjqvQXE3amM7f5gjY6HKm5zy6JGLkWSwHxJfTt8zRHsycqzKwZAN7uSNhDpaycqyYTmrtF",
  "key8": "2iDeouMW9XaUioRzK6do3HYPXfscZd4X5uqQL4PFXavVoDg7VS6PkiHofqSd9gWjAuPXxrVz9sBEjws4a3iD9tiZ",
  "key9": "2b45Mzp3LHNx2YgY73fj1ZJrW7mviFNURi5ipR4aNC8nDLj2DDi1ncVMgotAp5iCYq1BmYNZS8amrsoXPfXdVsu2",
  "key10": "5p2AHeMPzX6XagxhazsXmEukqx7HR5N9nGg5UKcepbBM124iqUgFUMMpxqbGNvbfEDSNpmPapF5rhSu8U9S3aqcc",
  "key11": "2hoRHZRTdK63u2vEo9EuWkfzvVExsnUYQM1zuPTw8eeopTtiESVufrvgjCbUL4XBxobwrFb8zLsaMCZf43hV5sWt",
  "key12": "2DGPN5u7g2JYw5e4FAabgYKhP1bewoFTdmzsThFkqCqBGTgJcs24MNCa9vMjQEwzq36Xy2pFvG9Ganhv4ccN485c",
  "key13": "2TxeEhvzFjet6LfTjo2cAG1iUMNTSVhzTTEZhRreLWqtGCEJcftCZF7Zn7kDL1wXi59bC6hzgJjouPrZhMJJdVJs",
  "key14": "4L9Vy8pMrriY5fjs7qx69dMzPSkbxcVwt8tcq6z3Xs6G9HL9YJPcDSL1jJ5K4TGgmSzDaJzueSuzLXqGDfF49FuB",
  "key15": "3F4DSDpEwdWpqsouvzipZGPLg8rYJrFTPTQVaayZnopquPuV2Se3N7tLPG7tZPR5DzxXW7MumMguhKwcoVBjfx2G",
  "key16": "NfqDB5tPHZYXpwQ5b5cu9iwcW4oiGz2jmrhNhxBBLwfvCgXKTh1XZvMgtrXGu69oWQ4XDG5Y375G98b5eV7F5o8",
  "key17": "2vB7X29EhNer8R7sMV8Z6pVbgr8MTgJcJmVtYYUsZczFf3AeDUy7WYjEeqMQeLmqFx6bZ2GYnHMVa8LqFd6Z3rL5",
  "key18": "3vtVubF1XXFkLCcSthJL46aXg5VzHZhFNYH53ZpqRQtM3hJ3yJsN4USCxbPGpvxAxgQjFE9DLXCTkiECSovNbWSz",
  "key19": "5Z4KwsAYvomz1KHhxEPN4SLVmKnW4xeZAg84XqHRMdgyE5zMnWx1MkW3umJTTp5NNkWJybqXhak7Ds6HAadfb6xc",
  "key20": "5EyHoYjVjmTZeBsvEaQDjmNr5vrbyAGtTRv7UYmH4RXJqW3rW2cp8HivEFWzxDfufatkszeKyDCv8VLA4kgi9Tyr",
  "key21": "SvAojXaT9AcXrQGbJ21uLVRFD89i6ksrx6Hm2APC5BzFixtFuxMWxZ4Av2kTVJmSr2i5uMM15iUHTKp9VSEJB3V",
  "key22": "aiCBe3nj6tjpE5rZX5Ry8H7xvjR2zyBL5PiR8U1h3hMnt2k5Js8jTni73EsKkKRsqvi9SygAcZuAH5TaW2mis6k",
  "key23": "5P6YXnGEPMhQGM59d1Qy6M6hsa1ABi3a1KgXpkn2k5BEGayaDoLW9Ls1rtbFETaLPvYPXewwNhBGy7SXkddfbNta",
  "key24": "2pyx9m5x4UzbTmkWDJ9PmsGXVV3iR73JQFk1Y3PHLHnrFKiTbPcNKgFjjxPSu23QSNDE5djQS3SWar1ryFvR5FYf",
  "key25": "x2NxzF27sWTHE1ZzmXeABwbUGpanzaRyKSfPUeyW3SSxoXmd1hf6qmteGNpMi3B4L2h6YgAAmK4pDqnkGypRCmg",
  "key26": "4eRPzWBVtBNyutV8mveuEfwiDd3yjJfQdF6KR2BDpU4uTLR29obCi1jiLL3nF3bX2AYQ2k92XE7Jq6BbXZvVuG3P",
  "key27": "uMqLT964PUsSB7LUpFqbxQSzvaAMAzcvakmS6srFz198oxUSkqLH28X5KNwfUkhFZPhCuJawRMhPcr5dufYUozn",
  "key28": "64fdF2nM8zSPwe5M7PADPdeCd6ECbMmDXRSzU91Mrm51qHE4T61vvzQ3ATha7q8CRbvjTwRR1SKFYT8JW4iNuzzv",
  "key29": "5ZZDav6bjWowx9tgqN7iNnFMchkXVc9N73RgcMZZ3n7TnoifGtTxr81AqDXYDbhETnaZLwYnpJyiZqckvUeq2n57",
  "key30": "3E3oLds4VxdxXc3bJxphYC2SysY6P2jTFS7Qt1bSTGm2MHxP7VoqZQaCX9qAXycfJsiRxL3mB1NUJFu62pBwNRbP",
  "key31": "3U4o7vLoPtYePN76b5UUi6GzjkjjvwZCRfocaDKBdb9QnHcen7VdVdtUNP9WGWATsMVUMcVXMfiVnrX43poWn2im",
  "key32": "35wLQFw5GwmRv5kqV12eX5xc6DoeYBr9ageYgFLQGoE8Wefjh2YtMGAXUmvRYFGf6bEKpuCe9hC7kvJU87metsrq",
  "key33": "3hn3Bw2Pm7UYtPySmKzjCfpBPWz1NthrmFmmUMkqh5wUe2yzHxwY2fujZu42e1x46M1P6FsKtrcKudWBuwMtmRSF",
  "key34": "4qPYNUU6tKJeZ1QiijhrrxCwN4uTYhxY2MYFVWkwFc7PpzGaWpeYs4CUfgoW7fkGLe1QqMxBXYEXWJ8Di9dEPPCk",
  "key35": "5iqn5xKLNL5N3CtuiudJ63vzwUu59ENUua4E94yKaWERRYW2MCGkaPmQ8YHqmFSXQTnzq9AiCJkzhJeiwrB4MG6h",
  "key36": "4dRHCDUG99UZP8jc5GohtZajvooL2yJWgmoo5GTc2zYez3F5mEea7JiRKLRSb2hcreMsvAfzMZoeiKdAAgEbqabd",
  "key37": "feTarFSFc6i45ZzotmKqGk6Gmb6r37uDn5mYjKaMxdyR8hRpJZEDZqehWquqGQLDrSi5vouDX6exrgXRqCKeDAL",
  "key38": "58Pm2qcgjSYiK8CEvH63vqJAySjomSgyRgu6GuZ4ifBAZyyfzNoqmc9oC4MvitJNaQFZZQZvLWkTzLhs8KJ3eYDK"
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
