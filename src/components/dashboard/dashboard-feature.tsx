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
    "5PMFu1Ffrk9bLjXE2UKjwgdAMDyg5zSVhz8ms2eHCdUWQYiGJzC3RubNTtpQCKS5mkHVszM4UCcHPGDMY8Gs6RbE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hwkf4tTbcWYTemuyA5CrkKZR42jVKJjnPvcwSNDS2PA2pawN8wsbuoj3u4qYWnq1EwPaD44GyEkbgBWrLrdozry",
  "key1": "5BP64WYYYmTtCDnuFeZgNhafU8e4pcrrB46GN8v5bWNcVYoQCoVgN2FsSTUPfPPTmb4fk5TQx4KAc1GizXZcNCKa",
  "key2": "37XQrCC23T5mnRHGYBrNPM3maE6eg8Cq2C6bGBEgyhd7RU8oTxm4dQY12L8qcEar3M78jCWLWrsFMotJhgVrbEUT",
  "key3": "4Lojxh2pmxrpwBS9jzysvnDf3UNWaosThFSum1GKWkGT6N12utE6BuzGAiaKAZTAtbiES2DnRsWH2kCtUTezA9LE",
  "key4": "2E8piDssXi1rtxWPVHFF1z9ND1huukCdcRJFvVSU4dseXcYFi6H52XFjmHyVgDvAGmR1J5UvudCXbYqptYc6Nntt",
  "key5": "3LtCehj3uzQqH65R9kKEB6WJrrWW5v6cJ9roCb8WnWuPvnnXSxWcmxY4ThZNhx3fe4US65xPaLxoyXB8JYu4DJpo",
  "key6": "QnvhURtLVhpVjnakqBRxxKM2X5RdzJqCCtrNvPeN85WcU9NhC24nZrWuc8muQBxXpraGyZ6usKgwgM9mLonU7oc",
  "key7": "29v23h3c9zuLSqYjFreND1hhxmTeuzrkFF9wt8YUumSA565AGmgvkxN5PFtZTANkk4F4ZcRPGg9uYqdkkkJ1NoNk",
  "key8": "3TmemDzMxwMFcC8oS8SUBaPMkaGHV2u5Ahnp7N2Xkjgh6U5fsWKpfjEYHs54yRBCw1wSY3qJfPrrokWdUo5mpBpf",
  "key9": "5btcH8BcvFQASBARTLG1SjHc34oNMDyv5ihjPLv7pCUtxFg6NuPjJ1R5BfrfMKTH6HHv8S2NLcpwUESsWC3JN7hN",
  "key10": "gQDg6rnAhwUsEDqc1jv2VacDvJV4qYxmC9DWvyGfAPZWztJGPJwjvSA5PZgxbxj9Tjtc7qdccqcmXQj2f3KYuKL",
  "key11": "CXZL2oVFNzLfR1qCDNCih9KfcuUgqA25hXG61446dKogB31N9CAT48BvP2YLFMBXHGjxbgacwf3H89WreWY1KuC",
  "key12": "54rb3YfnRWhK7TNaucneqNvcrNKBcCTEXPd1uspSMZU5AWUjV6kKF3sTkxt4Ri6bxpmSU7QTsXYHHVYYVzjjKncH",
  "key13": "5KXZ7sZrx7MhbyQeyT6qGks6H5nTWW5vQUwADSmhrqFeQ4JxzyaqngGjiuiJn6RqsDu6eva9xVw9hVLHm6Xc9mDB",
  "key14": "N656NnUgBTL7wU1ZQw5tFYG1md1cbkB46rW1VfXXrxMsuZGjSAvRezkcZdnZmcfncVte41H2gx2LbLtDHX6FQGo",
  "key15": "2qaYCnJtseVnqH8NKRNEMzYLNsMJcfDCXj5pbgnXUq9LT7J9D9L5Uykyi2gWwYFtwVjjFDMU6JEWYq3DdeGbByKY",
  "key16": "2z3KaefQmRjniE8GiPRrZfbZZJXqKyr4A5UmSJ58ptPmRygaRqPpyenVivagcLcU5fB85DYTykxqGpmPTcke8C5k",
  "key17": "2u5dYvCsdA4XevFMB7or8c1vZYmzg2PZR1pB7oNNtEDG1LxvRgPaXn4463srqYkCydh3671rwUS4fUvPFugc9cV8",
  "key18": "4evEu9TUvfZBm6PjofPoyZveKxupjYyPfVMJkQ8PAqJ2V7nG3hz4YgciSc94MqxkMV1vp7wcsvwzi3NA2W2RYNAe",
  "key19": "5poJm2J5PtTP5muKg43r8dui4g1Bidvdo8gXFqoNrPkUJ7JnbA6qwoFmmXWL1Uzz9eCmKiE7miDPuHerNaoBzbtd",
  "key20": "3ni4hjjDfsky6wSPf4JD2cESmafB7f9wtEz6WsdjJVXHXjp4eYioyBcn4C7oqTcrWHxhrEiLkLcV5oVt9p2WL4fb",
  "key21": "PgKkGXp2pQpehHUSbDngVX43LZff68U7HVA6Htkontps9vgrsEnDBy993VjmXC7oeXtWF7s7Kdh3A6pCNwoGQnG",
  "key22": "54zFjzosFxsdtsXv7u5Bdr2xahNhzRe5HiffkZoSos4aS4MGBtEQvyQBjVcqZ3gE3d9M9mRQ79tYkyuorLjZCprC",
  "key23": "3sQcT2Zx9MC74N2B4yL48gJc6ZrCucf1Gp38uJUsa9Q9cVfGPYUjRkJnmntqHzEiwQNRxrWdLmG5nM2SwjpaCkw7",
  "key24": "4KH1GrbJjf7zGZpB7wji8u8y2veZb3PbkSxViai8FGA4we5Dopc3mw4HXuc2oR8Bo9UfAMRpScW7mhsYvpaLsziu",
  "key25": "5WkS8eUv5aBxrdxRmKHP84Gs24g17jEGBhSKwrVGV3BQgbm6StDt9GQRSEuuDktm7WqFHT1Bo1dXKM5Smtg6LTUW",
  "key26": "5KtnRiGSxVbew4HkmNg7KofVeZb6xMpopyNYuDFbGBhcEM9bBpQuQSSSeNGNDPFRCqcDbdbAMUEePx8D79kg9ZRP",
  "key27": "5WD1UfE8C5csNhnSuvrGvQppCgSCDBfCQdakav3rScXvVKiKP13fL5Bwpxw8W9kodUQEdLwFX7Ce8acgXsjjimRi",
  "key28": "4ai94WedksTYqQhz3WV83GsMh5UM92ha5v1vZhDC8N6qxJnx5rFa3UCz6g1rGrerKHM9wwNc8ccx5juLwyRFYRAn",
  "key29": "3Fq7wTK31EiBombcCnvbikr3sR9xEnUvQVuTwFUmZTZW1sKzg6oCN2q4nE8WqKN8oQGueSZwxZ3VNkhyZQTcie7u",
  "key30": "2kf93dW9p1qyDxHmKXBRHYudaac6gbi436yvsv53KQvUyQLrtuivC94T5gRZ19aKvruWz4rEKJT1sR9ZNJvi8DTo",
  "key31": "7kAecB4kFK37Kd3jjctYL51tiRSUTPoXpsBe2qZU3Vt8DzpJEFU7HxQ5958oAVwC3CgArbubKo4aEssrP5iNBty",
  "key32": "3p5bHutaUDrXZzrFk9FYbJR9JwgQYmVchzQu471rr5FyXRLoqkhkkPTY3yTQ46U8DaPrj4fp3UVXrQN64hfNtktE",
  "key33": "4o5nDmTYGkKZK1RSKABXNEvZxNhtBwzNcX3e7rKjLHwaH9QRXKqEcPCkfKhAj5CwYXw4WVZSgjevxqohQWSxPSEp",
  "key34": "3C3ALwQ7AL1KHrsEUdY14JjVYYZyMRiYaxwAXKtC7xbjzkLWvE1mWfNR3PRuNmuA5Yi5ZCcAL5XRR2LAehPf61yw",
  "key35": "5H5WBpCSn5dVmmtu4G6BRM9qDnGj5iaqPzdu63xgvpzS3UacK9NKC3aKK3PPKgQ71ggdnvSnnbtkCD2k2BD655ZZ",
  "key36": "2vrpDvUnVwLwmsS2hRURtTTnVvZWSscfUdxdbqxAtqtrmyEPEF1XEdED6Vj7d53tnDR7tQNmkCnqKEAa44CBiYAq",
  "key37": "5rzm8qzNmuBgKWJVsaD62qEi3diaxM1iwjPUWqu47oFd9x65stFKG844BVpQTDmUMt6EAAQr9dWA81MwfcAx8Fh2",
  "key38": "5Y2B1irpNrUtDe9NNr7xobgTaahhcGXxoTGeeupR9ntXxz5UXwqeb1nci4LVksDF9YLxS3qSZwFoE5pqW6Z5gcXo",
  "key39": "27Z8A44hyXHcCtmAsRURH56CgAf3efYF4gimHGmKFijrvvjXwSqEmB6u8NZxvBmwvWPG2euYzseAeFT9rBAfmCwH",
  "key40": "5wAP1RVHTkVZ1N6yFnj1A8oC1dNUQXp9P2uSe6i8pVuwMcLMHqsWooMMhviNAjFknFaf4KYLBBvMC7MACSunXUKu",
  "key41": "5LvTL9wMWtffsGcZdMz6xsmdy4aJtsLs4iAR2SKH1r8wtDLEgNTG5Sb4jz2QqnmC8jmxyXSxFkdccQBAQYUMhYGW",
  "key42": "3YgL9smvEeuXiQUybBo9ba63jb5Q8kEfDMWEGnZFCtDPNEwrX2KNwGMgyFNV38azQ6GPhQ8VNHLF2mr1avE7KZMb",
  "key43": "3HSZFxKoJ2znWMtKShuLrTo29DC2APPcVkerjvW3TvBhHydeMUm1JJGyCe1DPefGYdgKXp92PPZsnnW4ETvYiqKD",
  "key44": "5sJQVYJg1JF9NM87WRUJdSFjkAnSgkGw1vRhH4uDqtDUAmzU56NSWWSLExnAtBEcRHeVqNnGXc1oMpyN6aZDZ9La",
  "key45": "5TbhjnrfL1DdH5RXcr16QUMsAE7R7kPbiaUfYvDyia3bW1wYE45mKDBUCUxZna55kxRv1sNEy5bWJoshzMMyg8qs",
  "key46": "3UAakxZhPjJHoMCNkNKhMicgcS5BdRHZiYQGE5EjB53NhKZqUeJtQi4PoTM8VhMUy9YJSQymnBfod72XKH5mtYLR",
  "key47": "ByDwdzMy82utA3kpheGV5Q1PmP89rMxdHtodaNpwkQC5YyN3uKyfFAUSWT5VSx8DzCCbPcRWCpfqCqsdFcr75C6"
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
