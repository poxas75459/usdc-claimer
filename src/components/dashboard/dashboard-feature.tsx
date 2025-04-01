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
    "54zvwfSUoWPkQA4J2VkJ8M9LFmG1YoSDvoc6MdmKW7DCDcKaBSWYvxdtMnePHsSu8guthzJrouoWrv8fCgbMLBnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tSJpd588d1YebVv5VR1kU6b3zCpY2STmjXykEPEBz1oUVwSeDML3v5CZfcLoajcvcQJVBkGES5wc4Lw5c3EQprN",
  "key1": "4gnhbv5WTtgDKJGu6kcrP4Vr2dhMfem6R9KgGyZd4Edn1bBJCjShNT114hwMGR5tei26UTdizhqtJTxjWHNJjETg",
  "key2": "3K8prYAivhRxMuqvYjjvsz56vEvD4deV4yu8wvPi1KT8ujKMZpm1DcYJ2SocuS7w26AA5zvHh7YiVWkJ9peetgNb",
  "key3": "2ep3hN5crRptuTUueVB3dh6776bJES4ZqUSLNBqDW7C5jS5wtJw2FbJCDNJiiAW19u6LXuLiLUDkXsVFwgRn49cS",
  "key4": "6UJ3vCCTb2GGhPtRwQaTRNh2kvRBs2PCSzyzQbMmvHyBHtTwXcH5F1xboRYoU8e5PQCUimAz478eWYD2JTv62rY",
  "key5": "5TAZhvaXzXuTfjU6B9SVERJaYUdtZcEDhsRcVGwtPVkxFA8R8zNeTp8jFZQzXg4AK7LnbKELRXoCdmyAVrTpsVBZ",
  "key6": "Db35QgpGmocZgXPC2iQopkAR1FjQyGafcRnpce8wwQ6yqj1yTvXbnBrC8eXA1tkPzp3oW2EHamU8FUifmVWoJfT",
  "key7": "J1PkS39GtaMbhnm6mLvdzideXRHTP1Gqk1cdc3dTi5wAKaPgPtxcq6BsWgeKjka4aWZMv4RVUJjXnpmnx57Rbq7",
  "key8": "4yDodELUFagZYaSUvdTfuzj3K9ryuBq4SsQKYAeKpcNPCKiPogjReoF3y3BZMRjB6BmnaqSwqYNKYedAfc8xY4Dn",
  "key9": "3BWepcMnEwzSBFAtJbsSi7L83E6gXB4P7v9Nkouh52RVA4dJsQo8LXCbEUHQxAApy7aN6mGGnXk5vgYhPXdd3K3Z",
  "key10": "3sAGDwBtvNfdQ8rFi7z7DMeBgqHYXtLG21vPztVtT2rcV2cqh1pEjNFAeTmbcSofM1ptzaWarymo252Mtjuevreh",
  "key11": "1u2oKFr1P2BfagKV1bfN73iKYihLG7PMqYVAHPtsshvbN7mPVbq4qWS6Uf5o6sqEE5uKtuP7XWo3hTnzcPFmfmA",
  "key12": "413U7NdNcTCoiv11XM35HEwoCEQSxW7miqrjXe5ygfHS6WeH8GxnrJuBgCcwxsZbVsqRk7Zdt7Qb1fTJ8QyVR9SY",
  "key13": "4cZGNdmY3AZAPecViMuxacEuqrwBsFDt1WTHFSbtyEUm8x7eaCuNE4TBzXi1wVT2wXNB1zv6Z7sQJ49NgxihAePm",
  "key14": "2w2EVxuj7dweENyrrvawjQy1NRX7diDDSHqzyfWYCw2wRTs7ukCNGtCSuPPCDmrfBufaZ7u2Qp63voejVSjurjoa",
  "key15": "4vDpuKVeocQXPZbnZ161H7wPpif862pD3z4CSGNjbFn3MjUeZZaZENPUNSqvdAEzCGHJi8Us2HzniGG4pPjZJjmq",
  "key16": "tQsKsgKyU1vWabh4KdQheWW7LENU7gqT61B36EG8J9TdiTnoLmBCug2SWUdY9TGSPLkK4na5kqbxuAdA87KBXFe",
  "key17": "8jVh5mTPBZWXCSReDtSMWKCekqogk62Ncq9tAC2mUDnUMBtsqED7vxi5iBgeKX8VsW5t7C8HWX3HJc6vCqUjBuV",
  "key18": "2eCK9fP9r9wUtuNDLxGRH3ZMb16o2UgXLyKKVd22n6bWzb3fitLi5UJn6Q9EqM4cXv2mKq3w9vqJPSiXwqekrdmH",
  "key19": "4aFozdjtrB37utxKfLpRuQUH38LfycktTpgEX3uALotfJ2WsZSQtKoViuR3DLmej1YKZmANvH6YoWyL6BmSFBLXp",
  "key20": "2Rws14NbcCgrMFRshf9LZdfiubpBSW2x9wPyqSKgcwDENuu61Wo5jZQedpFdUJCxQZ7cVs3KZMTvDjihjtK2LjFo",
  "key21": "5wtaSr78i4Mtp4JeHGFhXwLsPFoHxbPW5PLzLZA2XhAt9uT8yFcvXRDEjwLyxKCLtuG2aNEtTpuN8W4PvZpxSSD",
  "key22": "5ASE63Dsx6DXDiTNGFBn7ztHMgEL58wp451ds3GFMRtA9hxGy99TSLPuFumHa5uQB2aRYeaJvMJC1pteW63jmjnk",
  "key23": "3ZJzkhfRF2toWikDSsdrSXoj3qWitoUPidBWZYeAaAJcCnNgUnW6Jro3q5KGbVnYJ6Foht9a28RPoCV3gGd7EPFH",
  "key24": "66tEj7aUzgWQwPMqeStmqCjPZxZBgofFJ8dtbG9RdiDCGbogQVtuWjPMt9eoPNu7eyBoYLU1aDQKin3Lw4yR2qCo",
  "key25": "y1kYU1RWUdC9Hi6Lwdchct8nW7WZhgPNTRhqrTkRRCefnrL3KSe7q2hKw2j99LpiRXx8jwpejEVYN7Vd1CmYoh4",
  "key26": "3EzCv7yZVQDTGWYzqoXPFmJnwzzyCYrwXv4qdmVk1Aji3aotz3mgRcMdue5xHDMUiPA1Mh1CkNQNhAR6RPpBfSVa",
  "key27": "5cegygHvuHPS5PnrjXoUsKbsT11Jhs4n55jVkQrM4wBfbq3wW9dnHQuvgcbkC82UR7vs8hHKyeXjMfQ89qo7Eo7q",
  "key28": "3c2bZYvCMd1xaP7B4QU2dDBbTJojKBX8Vcp9CKFsxp3pWnFfe2us9iwUDrdJfdHCwGANu3qL2UKjB9cvCtN7kZVB",
  "key29": "Gx6oJossydAphxYE9xNRLzVkCMKt2thGpPH1e9SpkzwxeQsRUmcn4gn6wjRtfa4QFvAw9Y81XT24pmtC72XeZ7t",
  "key30": "2UyRfU4zKesbUifq5soBhG9uZNeYsMzRVZdWQn6PrNqsQk43PmFcjfgiQkiHVAqKgDqUB26dNamVJLXgGPVMmDEi",
  "key31": "2xK29qTDGKEmuVvzHyvCq7U4jm64xy7Ugosiq8UFujngohFKAYZSvDpGeS6wWP9j5kBrGi2PtBbxLkwD65ik1PYQ",
  "key32": "3wob2xEx8kxLvoF9pQW5UMK6xsSHB4db7LrRAv9DY3PfwckDFAHrQypkJ7qr6RVNuEtXkT5aFX7yKprbvG2aL1Pe",
  "key33": "5ZKcN54i4xnHWUWsUB4JPYX2rdNANLAE2cdkPcuwB9spKT5qciwbGqsq6ujiLRoBiaesgk3Ut8PewzEAx3qGyph9",
  "key34": "4aAsbdiRSQ1aBxMtpM8FiJX58BXGuaT5D5acALHu2p85s8vnDwDAbn21fE6Dd495mYDf97sJiGSNwf5SEq4o55Hi",
  "key35": "4SFroHvhRjVtgMSKiXyuGb4UpChn2FgHXKLFK6u8J3zgQwDZzckfxg81WjaPVqDJFaXhM42PbTT2LEmvr9UHbjDn",
  "key36": "2SwUdko5WEYEgBrHT5QUjdQk3MihQSMBnVc4ABQvpGRB3qyphbExT4iZq7DtMjgpY19PgvxMoNRiaGJ8DpbtRGBH"
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
