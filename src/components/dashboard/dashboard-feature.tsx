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
    "gQJWa4LkrYSK3afaniZxmf85WZZd5BrwWMQjFdTzMa1usjrJQ3ZbgqfB9QYaz4YXdYzB243fpcMqqa22gip5z7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vYqQtVWpxYMFpuBrvgJezsqViJ8wi2MD5grew4gd3RFVrrAxt6fqrXhZLo8QTL8UHwciDCda6BoRSEV5Fw8mxKo",
  "key1": "4xZRHRAkr86CLDWPeFCUUipwrTuq3jJ26hDqxkT1WLjFbmc1GeScgQxepUMgC3FZXVbZmJEE8CKW1mhmDfZb68Sx",
  "key2": "4ddZdat4PW5x8kV5cKEjigZteYFUcjvdYF6RzxQLuAvyqEaM27Ao7pfFkvdZ4b63uuUgB5f2sxdkHWi1uUUwVmJj",
  "key3": "5o9zhfEXuZ9pLZsYuuRSKrB21zMnApiH2MnAZGECSzp4k7DUMR1vTWvNtQHr6jvuqKgEpKrRfn94ANBWfy3BTmTV",
  "key4": "s7NTuGuvpmErhLDJb6MvFVGFdRxkRJB71t6N3yVd78AYtYSPBJCC6NBPYhkTbYkK8YdhCux3ZcL77Ek93A8ZGRP",
  "key5": "2T8xkcpBFDCBs72SK6MmMHphgeSXrK9RJYEwavWUr7TsRvgKiscEe5nwTtBaMLnYm9ybgPDsXHTcoPqs7DKgj6mm",
  "key6": "3XLus8BvGrZ16PY7zD7ToABm4Cd4ZDXsNLw3mfiZTsJ3dtyyCKHRV64YhL6YjPGFzUsP9k7MhGfjDKpoQfhZne3d",
  "key7": "2LS89EyFRyCQZ73e1jpNndhH6q8o4hMeSx9R3LnHYvBgF1sMQb6QCgoZsM8vzbC4NzME15Nzk1Yp6V2C1F4ZXaez",
  "key8": "49fSoYmC6XcHeDi2pX3W6UBm421T2kGpiNJ7xceC5FQ8Fci9EbHWzepmhZZmYn3xQo9aTo7WYWzND14rEn1WwudP",
  "key9": "3Qo83RLaMBTVdm6BH8WdBveAhWzMFSwW9WyJZfuvV6acp21AAswvJgbZe9AjMP5iANLt7r8Kyakgn7EZQ5WjMFxM",
  "key10": "25ZZRbrxAFxCK9HneUCoqyc4qpJLvgrJjSCDjmBNcUeqQbQzcRzxJRSbpMiaZvx8L3WfZ8DkRhhxkAdMEHGUsGAa",
  "key11": "32dZSbLDmVAXbUvw7Mw6AcAdj9KVY82WpP3K5aT6CUmusbaSWujB4xb6AgEZ1ZxYBkhpFwFmw38WcnFrN2BWfVJh",
  "key12": "3W6ipb1rtSSBqqYTrgBHZhmtZZVzFF25EBsVtGmEkYgAnY9JUVFxwKWsqpQ9ButbyWPNFmHCwBNBqRLD1w5tmamt",
  "key13": "3UEQVNpZ7CxEZR6ypUWtckBG1p2JCBoNft2x8KjnoRRJSBnTeR2vXjexNC3jJepKsqPGePVYn25pHF6aMo1UHnoA",
  "key14": "5iakprWmgQdM8wKsXf3gixgWyYh17QwZdbPSUijmkXkcT3ZTouRpFte5DLXF6JP2qSdpWmh3vcsBfQCs4Bfq36t6",
  "key15": "5Doyx3drD5Mo99WJx5xeGyB86pqjWsx9FuB9SfTc8KFkKWw2hWnuZxowPRw6CujQf6Pxd9rNv6nVtRjFkuDXP9zw",
  "key16": "eytQV6S2TK37Vq81osgXVE5KC3fpcutacKvsZAEwAoYkjgyF2gA2Zvmtfoz973KQqCeoUR7Pa5TAdXWpUmHjaBX",
  "key17": "DnQsoaVX7UDfTzf8egB51hJRTqhrShyZLdKLZRmm3icZwJK7622MneRoc24h5eNd5GJVVqnxNNJf7DyWqJ1hqfB",
  "key18": "28QCvLj6osffRzF5B15JgDkd2V9Ht1FebUZTwsNiB8xNonjU6vU2GJ8VCB93zQMj8CVnXYCc7LR9r8YyCHpz9hgi",
  "key19": "2WpnRkyJVxzE7fMktbYgbpXLZEwUUeZjtWnJgKXpcPcEufKpSHaLZdkCfcbux4Q5b9pwCPs7D1SeY6qBmfbS1hWi",
  "key20": "2kZ6TvUrAb5hoDABdK2QN2excxLLWhMhNVVyGWMjRywRPaN8cp6eaptN7BtC82EnSb2HtbEJ1rg7v9aAi7PS4cBy",
  "key21": "58pGowBJMUqtihbuYFXxUoTxhTZvsDdJ7jWhb2TsEkQdQofhLpnfDGEqcfdSiFxLJjqqQ2RBHLgWRazRBMNA2Bq9",
  "key22": "6J4BvRdxh6qWuXhjJMG18pj74dr81APvB6JoERLbsMWb9G1Kqrw44Uz3Vk7gYR2awXSvQ7uuV6jaBWaNYqaxxmo",
  "key23": "4c9e4wHoRbi9YvW2wok14nbdBEBXq1ouCVkgeg49qXS9fLuM18iqX6WfMQdASevP9VBeVquQv9FcDdRXFA347mpY",
  "key24": "3g6sCTFh2qBQXSo3LD5MetNSqy89bSwtfHiqL9jUJnYnBaBMzfXT1DW9StVDvxVhjhC6M5ARFbJ5YJoriZMFJELM",
  "key25": "2Ab32CVapSgU6ogu6ZDBmf1UnZqBM4DabSPVGVYxtdySZ1irAEYN2pBt8yrgMVobF6WaupSA2qU5RWN9RnQxFDJ9",
  "key26": "5XZEp2W36mF4zaWr7DfGf9BjSmT5xTQoC21SuToBs6W4sydcH1UhMg9STWdvnKgHqATveXpnQTNM59nyBiYMh9ST",
  "key27": "2ggrJzUeyFvggxU8z6TdBDRq9HwYovy2dFsi4ywXYrX6cSA8heEYPe16SrcbpMGB9ubHzm8XxR5t91RkifFkpDxL",
  "key28": "2qgPkZm46P2ZgaUjRKnckTp2gzKANZ5rJCnzq1i4dKXjSd1ykfdFUZTuobDURwRr5DcaKenDSt6xtBcyfbp4jB23",
  "key29": "3x6h3qQ3dqK36MDA7XSENFGhCmWQGNuWq6oKy2rT3cBUKPqQWpU3ZaWFQX3G6KkMAW49ir2Ttqoi3VE6sXH4pT4g",
  "key30": "62Ds5nYEUSGga6iixsZLaeMSgQYVX3vxqsNCAgUUaojTVjkYpardm2FpWGuqL8iDVMSnXat7Vyk97SSf5y6yw52s",
  "key31": "3caiSQEiZ1GiAz9BothqPaHMWAM9N4PGTdJMNVD22dtx4vc8TsPU4sGEZGnfTMFajnnFLSrawd4McyjyjFxyD5yV",
  "key32": "5pAfoX3xJcwaW6XJg5LwpTtBF76NNPgcvp83NdTTiPMdgyhS1PjZ5xWMvX1WUGG5CTjJMmWPk3WcsSPDNaFvFnxN",
  "key33": "tKL7fcDVpS7UidhuqyypoXYtnPLBrrsXAigwU7T8qZfeVJGRuSKqMBHZ9iiqMi5NExQEPiuG6u4eagaV9xBGEWn",
  "key34": "2U5ibNTg3bMuQBsbzb3ELQJEjrbXmreRFEmjwxbeK5Qddhwt499mS8a6UuhH37NehM1Z6XcEjWdBja1kFQ3yCtoG",
  "key35": "Pzh4e1Sw7XNv3QhpFgyDHX4G6KD88fKL8YSMXJUBc4oR2WSkEEn2GqXNE5GETDuaPWfST643G7JavX2eCkuuKgo",
  "key36": "5PKUoSEHog2VZzgU98CsMVdCvVTydHfexQeCLbR7ivfdbVu5s2TKKEeY5o3QJkq4MBWHwC9kvA56FfHeKW9TgutJ",
  "key37": "bKmaf1SPidCziFUXUWHKKUV4kryLJuaJxTFshYbK8AYve9r5RE7hwN7L7NUbUZoYgsiRLXEZR33gHef5SDrUvqy",
  "key38": "2gqWxZAjcs8dbDk1uNMcKV1MqqeybvkJGAaWQvq6nzAyCpB1wVB2VntuirkNJmSFfqDRd7pTiXtdYfQkktbR2aAd",
  "key39": "2ELeGCMki99v4PF9A2bAoguXoFMfJrgNNFELPC3khrhLFBsmJnrGAudRnEmbHt7UfujGLiYkNrpAHzE8AjbpA43H",
  "key40": "5TU1qcFyvENAbbuurtxKDc2BwmaBHf1NgPuxKB6cZVX8RMNABBgo5pBRHJ9iuJVEcEqxHgFjspEoX8TY8nVz7ieQ",
  "key41": "t63bckWkSSUAJq3UMfFQ8BNp9PxA53Gp7QKGw6uCKQEN6kqwtDoj2j5E3R542nziAcfhG7o8vmEyutjhy7y9W2Y",
  "key42": "4aZyTpbbMBCoS8PkZpm7xy5E29cs3ggkzRKZrDaX8ZyaGHWubCL8w4ggyeeexgiYJ5GG3nwnn8kmPErFT6NcPPnv",
  "key43": "4C4GniMrAtk1TGKCcAVYT7nftDnVF6BX9jPA3rRi9Wpkxm9KPoTNG37W7EYybMLcaSrLBFiTW9DZ3DhDzH14gjm2",
  "key44": "2hRGTEQh8aMNv2EDzBUxnzTZHx6bkMKPDebdfib73iMitc9gTeafT8evHWGuVi43z8Q47XyDBcmbFsT23eG3VVwY",
  "key45": "2Uf2kfeWoTmJ7UDMJUGc2uDM94fuur7j4t8Xc53fxx9W6N5K4i3HcCv2rvRUN7xW7EjvGbMnJowTVTg9Up7ZBcwG",
  "key46": "Y1cpoUArQiFEfEcjSwEV8f2tremZRSQDGfuZqyt78CrpgJGvLuFMuX1P6MebHHhcsXwpMFaWrrCPny2kJuxQvbt",
  "key47": "456ogdbFNwX8AozYQTjdirAnh7mrku8D7yKVQvEKuNS9E7cEoECQdKwKK7jc9KTpDCtLnQZn9bxcM4avKSeqc9c8",
  "key48": "5ieUkFxTmjvTsz9Jx6t77iZa1vohRPBsQxsz9UNw1eJnQpSLg7GZGfXLQooohgjaJ8arD64ZbSihzMJAn82pyAJe",
  "key49": "2JyvyXz33Pr5SjVFRNrGs2FKeroZWZfgwf3DQkgUnqo8spxUsL6uX7wqmNkQgeNSs4a7BVHFwCZEBNAKMqeCTEwz"
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
