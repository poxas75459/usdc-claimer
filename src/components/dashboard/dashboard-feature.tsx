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
    "6CiAimRkyMwC78g5qdUWcJk4JUhmk4zvQnaCGSviabBUQGyHtmtQL5YZKUKGXBFYECqr7K29SHh4CFDDcrEYoJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8gbUTttmhhU9y58B18EGFC15YTgGbPhuHz4LpbW9cAY79qhb4KmpHRXVkpVUqcsBHvf1nrNYcYzsJ1pzmPRvVUT",
  "key1": "A5ggMc2p63XD6zUVuofB6YVmBHicA3TnXqxD29tuz5Vet2yVrxQMDri41sxJxwX2KwTF8tZ4qJRcaPkqZ5VHpUV",
  "key2": "4hB7KfdbTmht6wRbNPRWuzDggtVpiTgUCmraQxcXxeGe5FwD3zspMVc3nRLT5iWReA921Jc84hbL7AaiNo5qZJ5Y",
  "key3": "bjSsjddFSDqbfgXHStgAka26Mk2E7aVwXC5bT5N2BTqfBFVyQrkCzM5C8RyRJa8mXpyrXXUH1JXBzLC8qZ8RDEJ",
  "key4": "3GS8DHvDkTTqiQ9Qco5PJc3xDEgdBRjDs1VRsRUqUUourPk36N7UsUc2CKJGxsj4TWd7jnLfGVChc6btftejopuG",
  "key5": "zAdS2kGXZESRGGfDK6PFSMNhaN92aw1tmJyqcg3yiCturQUjvPmhryyCsSYxznKAPXe2Qyp32zm5ZpHTzCs3RLM",
  "key6": "2xbQXECJfqw7CECpF4EU6dvetcK3LVtLFRHXubcSaUZEcZ7i218HbLWtbqhE8icif6zdN2Wmd6LJpF9u2ySXAE1M",
  "key7": "5SUSRTFYixgdy9efzxpMhJRfL1hiXn7sVfswwNd5UKm6oX5ihhjeNgBKAxykbGgLJ3gf4EwBGodLZAzWT6rz3VtF",
  "key8": "78KkBH9xxg8rf6pHNr89zZyNbEJYuocLDJtasYFyygTa9ChyL3C19EReqzm4tnvEAALCJ6zgJpi1PxMP71ManqS",
  "key9": "52WJLgr6aJvaLmHiFYBjuMKq5rKArhFujKrWV94WGJcxRq1YDvrSgyyf4wSo2Gab1FH4bLdGTgZVbSvmX59CLWNX",
  "key10": "4KQ4jEQ8s6v8skg5byQ9i2NahohrdEo9uvsF544YUcgMm3ji7C326dN1dsfGQimXW2x2wbucHNBiP7anE5pPJCrH",
  "key11": "3M1mnwrFSnFMUFB91ajbhNv6z6LGMEyt2hdH2Y9fBPSEn6uan13LZHnRwYLAKe3yY9jJu7y2k8wTyneZKfnn5UCJ",
  "key12": "3k2VjFPWrBxJp5DfWLaEeuVmq7mJGsKr6JgNPP1JhF4J29Gcn5YxoLUHRwSmyrKpWSQH54KwxgpgXsHfs37wpENs",
  "key13": "6T1dHUGm6v15RP51YKiTkTBpyZVmhtjHUR4a4aeAcgte1S1eb6eifJKBWGb77TmPyKdHnQnm9s71Q4hGCdvBW1G",
  "key14": "huQg882TaR6wmSKHFdy26q9Msx54pTBif8mT6C7yNNr3nEVZ6jjf1xA5poy4vkQ4PBVPHqn8x2RbTrh5oxgbUty",
  "key15": "4BfhTBLsjEc22DJpkNPE6WX9TxNqsRwVsEMSAuHg9jtsDW9bJGE1X29B5tQaeD8anHCK9rfgsjMXfRUvmRgQi6p5",
  "key16": "3kYQ7bzzYxwEwvEdbbYcGqcgpNVsqtA6UUCMkScDbAzHuAybvGtPYzgttLMy4n5rVENzd1NEUFU4n9W1VUjHA7cT",
  "key17": "MC6iFVujmjCokTHUwuuKZwQrW4AvKRv5fziA3KfQMo98YFQ9Gba1XdtFdbZGDjj8XZaXsQvsAC6reAAQud65qHa",
  "key18": "4Qx1TjvH7Apehvz5RaN9DNuv8QSgYLJ5EayznnRY4VJDD43yKMkKsSmtBY2wMxddbZm4GiPTG8fEYQtnqNASBJr2",
  "key19": "5xGDBeYz9XH9xxhXwVNLxWVxmkktwdcE83yZGGFxR8vuePK121q2wpnqN46yJaeFCXa6yuJEzNYCBRUYHHZZzAzx",
  "key20": "3jZxYw2pjpzATLmeKfRHxzhnpeJb7srVk2E38ecQkzeNDyg2PX3XRVx1TcxPGG8Rby2UaWLQcfswiZ2rmcM1cwbk",
  "key21": "4khu6SQEvk4Yjs6nPS14vuS5VouenmvG6GwSQE81xMCvobLMAQcJKh4s5twbb4F4Y4BK5m8roGLMWdCSWqCRBjyE",
  "key22": "3i4Re8UHRQ9j8QnXUCCs1bUMMQffzUNns774QFdqeGUejGRMMtSC7HD7rZCRBU79dyNjn8DL1WKkeqYCvxNQJoq9",
  "key23": "2exXMgGvCMB3Wh9rCVNBsCrr1CGcZBjMX8HbYdr6Ld6bYwKFTKHE6nQEH2j1WjZ9K69wKCuoKatyokp11t8N5kSq",
  "key24": "uTmvApqqSdPWxoKUp1LawAzDPvQUnzAKKKh5zVuDbGavZjJffZn6PXiJKLD9m2BDbsF3KdLW57VBDKAXhUgfBz2",
  "key25": "5ou11yCVxV6UrGTPrYdrbJ8geUWAJdUTPKg19tKwuAhXP3Bju5DV43cp49bzLsVKurbU4gEc5xUsDqpZtkGmawwE",
  "key26": "65SL5tfZqBsjL6xCFeeVcZsByS5rYNBae6zr3W6cEFGofAmbJ1inhwfzLeK39KTCouTfNCA3pN9evi8fPwX8Tyj6",
  "key27": "bqM68aD1ea88ksYSim5ARp2gnxJ76u1QeaVTxpiSYBBQA7iPpqPYBBkq3KvnpdUw8NDSC9rB2GfN4SU2Ztq2niT",
  "key28": "5yfKPdg8nxXgHqZtdVnRbuAssYf9nSQX1uubQ3HsVstkeQGoRNmbUizpsfQJA1vQ8VQSmXq98RFhRnPHHBTAW6Dh",
  "key29": "4zF2rSNxMq15UPJx4WTVc9MAwmZZDr4QVJPnCPXRvbtD8GkBHWYbRdXZtcPLjpycNabwdheCgVmDR1sp64oatsxz",
  "key30": "4VVA98obr9nDw4XqEpAizh7tyfNcEMYmNE7H7fqvt81AXfzZUwrbRDVuLjxpqXceotu1XMEYWY9NWuxu9ZeGBPtx",
  "key31": "dVaAegzJMX3C9Te3yczRxB2WGzwPV79HT5TgoxDty21JEXm6CpiPCXVyiERTsFSwTfb83uBjdKjnL2R8Mhf5ViX",
  "key32": "2yhNNbk2QsATb7tZjK5Hy8RRBNQuk7Q3jA8mMinG7K8W8eacALaCzhSGsJa5eNEdNb4HXxmrsSV2RaqTXBydc92k",
  "key33": "mHFs4drS9LS3PAindnxo5o2nsAgVJVzQBMSiS2vtWnqv2cbiKtmpYC1UqxwGcr2Yr7fUY5gWW9SEG2vnRoVpdrg",
  "key34": "rA261bxrA8VwGYX5rvgvhCyNJXjYEirNPMrrbNSyS3qSLtHkd9NHYKofK5VSNsLRoQpz4GZvZ4dwiinXfGP5tM1",
  "key35": "omUnXMy7uSgfJhiSiB5t61wVE8Sq7Q9phsWq8LLLzdGsTGqQwYp5pYLCy4bNFTHCL5V47yjNKyVDLpCCtASbbQa",
  "key36": "ShvjxhZrTZNEoM2By77LvJWQVaJD7ZW68uLskwtZJSxmJpCdPDuLLSwRmmXVtcDFn15eJzR51FYyComzD2ChLRK",
  "key37": "4gyUDXpudYfHqAzkPHM5TVDMBBKQieReK2MbkPvuSYbfy7c3SYZY3mbCrJiaGBzvzrR69MaYbM3dXZKh4kCdupxm",
  "key38": "5YCZPkNJdpP2NsCEWeCa61ebAodXbkR3h9oAkxPhJM8zA12x9LVKvR8LKtDhK8oKx5UcZFH9LZMEZrorHm23c1Bb",
  "key39": "61tM9U8tMNKC2zJjePX94NYHzLAeU7KinjpUqN5RgqWfrYj1FiyYEmBD98bWfELyXiF1uS2kSJFq95VAgahNW87B",
  "key40": "3dfZ1vTkqeZ7YVfpGeY9jz5URq5YxuoTsBJBXBQ1ZVms3aWoL5T5VoK458eMWhtTVP4LendY2Gp4XkPgctaxUAQj",
  "key41": "4wotFqVhZcqVQwbZU23nh7sTkted2PNDWkXBgwWxivS4tDsB2q4BC2oB9vSrzsiw4uww5tfuJZ2Eg58khecpfF5J",
  "key42": "2F8oteXzZzvVy4wnk9TDs6yts1EBRJnEQjpLCNLdJi47MEzFjfjMNqUYZkkFgMmoNrjcKD6ipqcqiXERgiwsxX2f",
  "key43": "59sJgzpQUxAyFD8u5X8NLYVArqQKfhf8jmxR396m94qFpefak9g3fkeRDYwXh2dYWedvdDF8DHmPxbZvSSSSMTcq",
  "key44": "4eruqidL7i9YAamMvpxng15p7ChswgXPMKkrmP6SPMYaQ5UnVzrhbfb2bPuWExBK1ybBJ1aFUZZhKMppSMuMLaGN",
  "key45": "64bcHFcKRitTgapuaydfvGHQQ6JBp4CTm7LzZFQggxsnPvF5sBUpaKdWTe2WHACxX3zanCMaddQSQGk2w5QghnDD",
  "key46": "irDd6Z577L1VfGCZZt6yHjjWpMjyqGQnSjcY71JSj34t5VQGNFjTP8twzATUH27pczSXK4sJiZRtMJQHD4BCieb"
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
