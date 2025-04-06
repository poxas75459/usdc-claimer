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
    "xreNN5dnKFw2vG4dSpES8uZQnog9vq4TLPkrKpgTjUATpYLPN3PxVFtvnmejfYk4dT1K16TxWE9W6xSJwcZsuX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MzQrCUxPuuUgEwEbrWBeSgaaed6CS7uiyRVeP3pJboKZo1d6ZyyHvoc4NykNobLQvwnACTcnSrjT49F5d3iXPtb",
  "key1": "2F7eJo2aEtTHyqEf5T8r2AwXmEutzYGQPK3XX7przKgndbBeAES9gGoik4P1wCRh8dTqMaam1srVgaTmfd8CrZP4",
  "key2": "aEZi1yFVGxjPUicjUhVvDPPTpPyvzBMFmCutg3L9HXeYzfQ2Uc4qhk7CMRg6PMQCHMgwpCy5T5wVZWNmP1AbSkn",
  "key3": "5JE9doiXoCmaBw5ytRB2kWDq7nCa2d7QJDH1oKX6ih7UjSa8q4Dd9tXBmo6RqUubL227AhhyFLdqpDXfizqdovwv",
  "key4": "HBDqYzuJrBzL1Rkg2oXJwfzhufBxPf22VwVLgLVSsbFbZRPL8pLSzbbRTeCBgCZ73zZhTRTW1NTnnyZdTVVoEYv",
  "key5": "3Mn98PLrJ8qPPV6skYbx87gaVBui1ykaLjk19cJroV6YbWjPcwBhnshPC5rZjnQJjt6FccDArtDxwBRKS7QDSaag",
  "key6": "2nbtWkBA7xvqidz59QrrrwmMFtm92wDzkjfWCdxbu69tGphLfGVD4S4E9gj16xkcrWWHHpoEDsGqMLVG5AszTLyR",
  "key7": "fmCvfRSfZWANmfc8AoNr3uVQ3We2eDckZyaUWcfhdHpP9SSAEm4rXvCegzvLGv9XCMmVGRQwDRuYfLmXpijMpjX",
  "key8": "4EkWepNEcbQSiTUwkPU33JVqNSqRsZCZH78psZQMnD7C1nreLdukzu1zGAcCruQ5FStWXYZfRzTb9bEyhYp4Nmtc",
  "key9": "3jcXqg8UXipeajvBhsWURPtLtfEf7qb5HhJC8jebkF3PL3haUTo4J7LyKmxdvvQvfFmbnQ55dm6QEcGJmJKoYTeB",
  "key10": "EydUKfFRnDVq8qGYQrGqFNb1Gb8N2WvDYjS9u4ikQzmwgGqSebY7VEgaUWiYFyaYUfCKqBf76WBjzvuGCwYBqen",
  "key11": "4LCbg8qWckrVKcmMKQ3VaUjMYPyTWcEFuAynGw26Gic7XJDDHs6gPTpAYU1ng4KPqSEttM7cbRtvRzX56Th8KdQz",
  "key12": "23VF9D4KcwP3ZiDTuhWk6w3uwunqiMoFUSUv4QcWXNL8RAnS27sf5cs9XgxzhcorLgmGqhD3KABSuvTS3BgJv2y8",
  "key13": "2iMUFdLY37GzgZGYvmSnJQRqAGhjSCiAS96FDfS1e9m7zGR5xrUtB8JErWzK7Rgta4hndiLfRcsfTzL2XTdmkHLp",
  "key14": "5W5Q9DzpQwvtZ6sMuzzBP3XAnbX4bDK8wKHVVHdsKbVU3ezhE4YUKkV6gdULPDhenj6WVkBya8shJjKv7cdeAw6Z",
  "key15": "3nDqELD3UZ9Mt1wxQL9ha5zk1CKZ2KGWS1NKWqiEPXDjWF5kra2wZg3DXhmVa7d6ZQmEjGiZXsZQppKDbU8v7rDJ",
  "key16": "5ZJYM9dKdTKoSbUHBsWRJVdtrDyNjP1xM77YPaNGNtcoUoNGZA6DCgLjXAEKdG5qNAmyhm91Z9FfSLzs8TwqvUmR",
  "key17": "4hpuwKcsE9zmVjCRMqkN5XFbyyKosE9BvfHbbstAvq3iqbWByi4jxvFhWKwrhWvQnYiSvtyDYJ4HpTM5ijMR2Pzp",
  "key18": "2izoGNAGwNC4ggTub1QFPqjx624H4ZB1unorwajGsXhF5veNDyQ9hYJGZzW9Mz9a91gspTkxDrEdeYiPotZif4CC",
  "key19": "2NeYWcSmNN4LFdCP1ezhMN2rQvuhTLNiUpL1YAM4p5rZCfv1YCpbaS9eD4J991RuJBJtsAYXkJMqffsw2xgDk86f",
  "key20": "4NzbfGVLhh2ydhPZFRduc3tkG51gQnuySmnQ2oQj5iegiF6VyqfSiB8o8BVuLRsw7xGdF47xAFJ1e5v42c55195b",
  "key21": "jQhBHp3rL2tjSo98h8PJV9FK22jM3soy8oviQ3v7U1WBZK5ZwamhwHxsbUwmpeo9gKP2ZUfufERuxwBQpueDFJF",
  "key22": "JMG9RuBqBGyJX8DjeKG7efFPAPsj1mJSoHQ97NXUCtPT6nQEjFv3pwdSenzjZzEBa9WePU6UtmvXabSB7GnzeUJ",
  "key23": "2speXnjE5nDsMtNEFBnkf3WYk2qavCGFGZKQurTZTQH1B19wvn8ChFAm2eerv185u21iVuRT5b6fxSEjpXfsTe2s",
  "key24": "22iu7351hnoTX7KRS1LvMZ9RkgbEqZB1vy8t9nverKEb5vtHuYS3aryk8tsiwmAD2CyQRU63FitME7h3gpeda4TS",
  "key25": "3dXD5bPUVBVE3KKacVkBjpzTQaBeuT5E9rovrgZjwJm1s7Lgco3S9a1X3cYCtJ7ByHReMLPgYbNUzkzn5ZQyvFPR",
  "key26": "4PxDLbSckJYG18AJprTqwVeKnNwXY7biL1P1FRxonCSQnDLZwK6KSCLTdgrZipcvdMy29rxycfCyRwf7L4xSPxfr",
  "key27": "2ejm1URUiLcyvR6pSc3soVnsCGEWQsqCKfuzPnM2tca25xsSt4fCTavUYCc1qt9iVSNns2Db2omnVjBiTb8WWxwe",
  "key28": "2PiiHN4ngS4usB6UnFpjwYrh1C4dd5YxhYW9SdDvzwuCKRkJHcKr2vMNPdjxbgSDVDFeVjhHLcRYRwWbWq4g7w42",
  "key29": "YmXyD2Y6zaKotMbghzhmQU34KC5EYiBmPHtUTY2t85XE15DMWRHBMiTJNnfsCyabyW8L4XpyRZ23pH6bQ8e5TZz",
  "key30": "3yJ9uv31muhb47QYyxXzYqr1bnngmQPQfW3PVp7EpjUTb3m6mQj4jjavQ4ST7rPZt5mgxVyRxZ7CYz5PPP1b675d",
  "key31": "3tvEVJnTvKGs65voJAwzwSvJk6EL1g2iX8c5urktVVkPZGq8c2rJy1bEnjWXA8E1CiQ9wpMEAvDFkgPfP5SpNLUc",
  "key32": "37mqgd9RojmpgA4tAkfsRe9o1dvuQbDzurn7hMn8MTLsTwBMbbFA9HsMbFEqFXrJ3MitQaMrZiMC1n8VExiAdhbC",
  "key33": "PjCJFuCEr1FpVPAn2xtYv45oRtGyi6WgzwpvB6ujVqCZUqHUj4ckdnBGv4jFXmp5KNpfqPg8ZEnSNfNNqFPBcMu",
  "key34": "iui5fBqxUJ7Rt9gtURUoSF35wZbMyse8vNFoWF7a3CZbjZE3p2SiThbZZkGhxRFfTnQ1oyZmqK8tcgUGbza3Yjj",
  "key35": "5aS2XMZ3FAYTjQjDEoBSNn9W6T3h7A4BsC6sgFTXH6P39Lc75p6pnERNy2NDGWeqFY7iZpcMB2SPmqyNqYMhbaGc",
  "key36": "5vwMqWxsEWoiHGyNfQfGBoJMfBN1utahvAuYDnS4AYYAGwMV6ddAruSmyXLYKrsqVNdMeCkR4A3eHMEqGBX9LWot",
  "key37": "4DNxFSCPVV5NLWUX7VQUL5xNbHLRcbjfEuCYAskD53jjd1LEWr87VY7ud7qanHEudiB8GMQGCbUvgjJGDJY7q4n8",
  "key38": "5uvXMBj6ADHc6m8N2NUhhUKxbLTCELHUbZxkA2XfRtgHQJDe2ZQpDpb4F8G1i6pSf2eaZkah72ahn6wTNjffW7Pg",
  "key39": "4VcKNEieN2ruzJMNjgV9HJfjaTiw65tX2Jpjybo5p413drwjvuyA7n7Qz1tZGmMvSwSohmEjB26GhKvSrTxRo2t9",
  "key40": "5a19h675oh92ifoFbgLK5wa83tbUGGzyRDZAc9Cs1W2G1nqPaq6gpe9cS9us1gkNC6tmVxXHuUfynjiiQn6GurH2",
  "key41": "UpcCxMsYDqRGJ8ifiezFaWn4SqTf91wmvucoVGzFfZ2SxFfBR8rWFeLz7ZS9TEAAusKdtaunYwrox744cny4kpf",
  "key42": "5L14ZTs4y5ccZ3XwgPdd4DzeVMa7AahDrWNtY7EEiKYa5bg3pXLohpuERnRvKPD1ZYUstKybJJzH3UGuMNcVRPpe",
  "key43": "3EkEdYvSRb2sEB8zEqD1VqAcEMXvyV52exbTwanftUHS6ArBrva3ho32McwsWf98qNm88pFnXWkbYmnRjnyRShvR",
  "key44": "2SjKa7QiGS8SJywCmPpCa5gJfuTUZV7j3icCdchKm4hNYuWeyqWLDskMwC9eGLN8334VSn2ffzDUs4fUbWsH2rVo",
  "key45": "3HqfWF7sSyvtYqZ9Gbbf6rwATvkswzgTsvDmzoSpxqfaiVku3MoKjEs2i13c896hvESqyCDh7pKmYXhn7MhJpc6q",
  "key46": "rajiiJHUHZ6bPA88K4XZbvdkndxkXToLjPcaiVjQogGPxLnTZ7o2EEcn4T7av7oW5qXwseJcg7yx3TqZLxLhEdo",
  "key47": "3aZeanVhVQ3PLuHkusvDtCiZ2E6gFwrSzDwP8vGbhjQTopoLUkDagCeu35ssEGMouMf4hwvvAv9XsvJoSB4YJCBf"
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
