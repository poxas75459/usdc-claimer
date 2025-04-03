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
    "5ysZFyKUTPW239coAN86PmQFqFPrBoCN4FsmVwDFVjBZdQegt3Xa1d3dQ2Py1MHjwsPGjc9v95HzY43FG4JDCZW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSCk5vQwp8nkU6Zn243bN8Z1iuvnfnWTP2gBhmvEMzZXuW7qaxmTvD7rmts56EMm537cmSHFkcqA78MzDXCPXxu",
  "key1": "4qVvKyUf6vutsN3btfJ12eU3ebPBEt4yqxe3WXbbTpu635J1UGh3yGndjVjM1GVS1xZp1kPgDD5DHUATUYKZ3qkk",
  "key2": "4wsTy4qgWQiSU8K1nHdrbNWdpVMayRsfwYEemMdNqRNBrQDYbCa8WARJHf15N3HxqURnvAjULZ2fDzYN6PSzLjYo",
  "key3": "268p3hzW7MRbNx45UUmqHMsn91tuUmELhxXeZAb7tiT5eGU2HQr5Lnek3DPLrP6HHCFkYWfvQQhKoTPAPEomzjZx",
  "key4": "4uzmbicaatGLZWd1114gyggxTiUZWi8LzA5pm9kpQQLBFV8jUVdihsBLeHGjMAFNM7icnKMXvqcEcf2NJmmce7FJ",
  "key5": "3SzEVR9UFw2QUMqwA7RwouqFubG4W7Me9Ww2WQxi1vrjg9fEaHEfAYkmt3HuZEkNnTqZ2boKrarpBBDH5mKEGs3k",
  "key6": "3w8zprtw8NjcuEE3vuoJQzAZ9g3aU6gtNaskNgCnjngbkTFJvYj23SKHw3fs31Jcj3FfXhVohdUpFWjKNsX6ArAi",
  "key7": "3RCkKr6F38bn2pWszoeaJkms1pG6D6zdRnZQhPXS2sLxsCaMSFKjH9RTwJTo5NqDfxTmMvX1XVaqjVpkeyM4fUa",
  "key8": "2o5sDbCVMPoJHVvzTtd3PW11t9XALh4DBkRSibkfCrzhqTepqzBi4PAjhhUqnmZg2hPD1mzpJxWEsYpAhT9h5Bu1",
  "key9": "5asfBFQJcw7ripm9RKyQTtRu69JhDKVKZFCkMwawPMPnro2VsQPovjY3HQQCZ7G8QJYt6g3hYeDmst1R1AgEdkcm",
  "key10": "4KV23LknSEosnRpPM7astM1S5xN3GB6BQ4T9S1LQnidzC6B2Jt3o6kvg2V9Yc2vNu6QFssUTYLx2PMtnUhWH1RZq",
  "key11": "5wNc75LLHAxvFe3pGRn4CANdFVzW5RFAi8uCG6fxaoH27mMcUBvs4zeCQdpPhcTo7uguidBBn5kwGJzcK3TgcjSD",
  "key12": "5xM4dRrPf6suWo9a4KpJVDuBHTJnWNK9Q5GjYyg5YcHmSVJRF28Q8D1sMzuYPVRJomiY9BHMyvpXUhZAg7Yt75Dh",
  "key13": "57vTcexPspgwaBcwhKxMfAG7ARfNWTAG7L6dffMtvQmQSE45xMRfNZPmyZAwjMiregGe3JiNDuy28266neeT21vA",
  "key14": "YgmoFzkZZfxFN9mKLzgo3VTec2CkDDk1qXRk6eDa6rBVT8cBFJ2RwJS1i9vVKes937uEsqLARNqQ9WUbqDCEjoo",
  "key15": "5r1UBkus11EqChhm1Rb1eLmbNyGTwanGy5PW1Xbn2yBv5NMyCmRA96gfDfjwBoywwBcw6rbaZ4MjcT1jB15KHY6x",
  "key16": "GVRL8XrGiS65kZ58SPHB2VWhMnMcFAfWXzKUrAqPTjijVUrBz8LwierPHaNpckN6ZEZN6GWhJzHhMimhYghhEL7",
  "key17": "4H1Qv5fvpFNVmSzSFrQYbVTRGiGpj9YP1SFN2MXUy7otHtEmR9NPuTdpVp62CdHuwMs4UJNNct3wPLawSkKmaD1S",
  "key18": "5CNqHnXUTj1LBnpDXB9s4CGTWKvMods1PfHEVfQSQwvW36oYTTrdw1wLwppp5WystZaRvwkENNTRTXG4Py8dArTv",
  "key19": "42smBUV58JFfTiuJ9dE1ZTjfUzsz8AhxEEVsaayoEWQs1i5CTkf6wPeZxrjNyWs15E1WCT3tfjzekfFzr3rKTf9d",
  "key20": "3JYhNrSJtM4jSMygc2UcieqeSDuZW84dsc27bxK9bCGMfi8skaCJ2WHxYtRGFWcSGpyDHAoiji9KQmguzD5fJFVU",
  "key21": "3Sdh78a6b5M8hHQNTFdAzcchZiWQSFTAUyqTs5QGaKUhtb9cthLxoUZJWS3Jq4ri7H8RSbgb6aVYYZVEHrMne3a7",
  "key22": "4dW45YedgoMNHBTxN9tBTgzMYB6uRgUTCugq4WQm4fyxt4CxHw9HQUcSFcWcoXaZiexHoU6PEFvcSY6ZiQV6BVA6",
  "key23": "3n7krZGwD5oL39xr1iNi5KRHjxw9xDKCQro5zdLbmDS7U5kdgvADhZxCFZgzzGqrmMMgPH6ZkkkWnrv37HLzAwUA",
  "key24": "4fm5zxQdEGkXatNBbVE27kka4b53WjBXwn3XUGuKs3N3jukViV7bPa2p7E73MZYLbgUJgSH3KKPZu2pneqzAXaxx",
  "key25": "46mBNaMLFtPxZgtDpPKQ9DUHjsYt6XjsWxwVWbCKRyxc3UEJGKEmRsZgo6aocdF2SwtaSGXrnXofCZXempjLqmhr",
  "key26": "3kynMk5Yqsh2EkXo2H29j28vyo5oK6LBiXx54BLPop4jFNmV4oVvWraZ6HiBwUYePhrB431FVHc6reBiEF2BDr9U",
  "key27": "4v2oUosxhQXwVVdeayFGz1Y7AjJJTmd4sTCYdYWYRtQMHuYj1eyafCpE8PAqmQqZ7Nr8p4ivkYSDdjk6jPGwW8Xu",
  "key28": "2r6bxTNDSmShtheRPeNPG5HQgnngboG8ywKQRvTuNNY6BAX44rFZnFcZQKopVujKQddSMaVj5g7LmSPTjQSKM4gW",
  "key29": "31Xsa2CwTDvec7nwfM54auAjt1Z2BcTrDaMSdaRjGuTsgK5crUsEy25vxGuRLFycmmV7jUpgxExv3qzRqyprPrSV",
  "key30": "5miZBQyyY4UBp2HTnUhMrNA9KTmbse8EvFBGDRcaVPXgarFdnXutmtA2Uj2eGcrVU6RhHqAyFpAc4L2nvKWS4RBR",
  "key31": "2ZAG4m37J3KjFXQpdkAJCwsYuJNTKUq56iuJTmg7S6Q1HKjPecrry44zbRrYBPq7Qs83so2hJmcz4EkZxSCeApwr",
  "key32": "Ki26daxpfwfK5xXLSK18HnTw4pejuV3qucQthMVz8dCdSm3HSw2u9KNfSGCr912WxFcJLTPzgDJm4c7cztTpDRN",
  "key33": "3j4tSn5EnYmzUgM8LcJXiqP1QEzAa2ooX56x1NmdHErneRqdKBSvKLBdTW7dfEE6bW5FQX2tSR3ZEg9Z7oLzJDUg",
  "key34": "4cPjs9dez9fXG7Sf6PXEyK8b9X4YXhYfcYb9UtnkWtY1C2wFESPeeMofHjmFPewFEt4mRTehEYQTjzNkpVf5gyTR",
  "key35": "xN99owJm1aqJaczKtNQyh7JjazTvxssuowDxMMj49QiSrhBcBQFLbXLwD8NkCFtBuMrjnb7YWLf97tgv2xuvbGA",
  "key36": "664d3ZvYGqhsBX57inXat2FLbdCMTycTgm5zRvh2SHPhrWocGtsNayAeBBAYs9BSP7Eqyyq5RsP3cke3vJecQ95Q",
  "key37": "4eMrvqpnHkpDgahNFZV9o7YAsnjxWMGWwUzv8jCHRtBGR7wzeLVdN54NbxMzuYGdWztUw6hNrMxYSvQRTBcMvsqK",
  "key38": "3pyh1XVaEfq2GkwLVhjXSueDHCuSSNYyuKfN6r6EcuSqcGYbGzyVK9So1Vt1fEsFhdqFSfR2M46xoAjt49g32AzU",
  "key39": "48dehDVEgYCHpHmuBaDBT97mBKjXa7uWsPCoJgfpCNTQB7n5m7WAdX9tC4eoiCrHHLhjo5uarFCQmRx4k8oxNH4Q",
  "key40": "2qjJ8AuXch1WQp2dEMaR9GDRjoC1kTjyonXFBDw4GkC4wH1yjAUZr6tTQ8WLecU5KfGGxiQuVpCisUdx7XbeZ3BL",
  "key41": "rd45WnArJeYG5BtU6xLanhmWq1ZGuNbjaSLhNnWcMgDDkAYMZb4URxEDP4aTeTC5bJe4GNULVn72cHgwGS79np1",
  "key42": "4x7UKiD7rfRqiEYadsRVA9NLskTdJ2bVo9eiMxGg26j1Py7UFpGDceucsR6UCDSW8ybfNNUsbTbBH9peo6jZVDJ2"
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
