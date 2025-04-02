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
    "3LNqUvmgvMgiA9L5Dxv4bc2NdmpWmHbW88h41S63zdZPQ4LkCSM7bET1BJgKmQ5bJ4n14L1zna9ukRQV8Nod3sAu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xfFZW3KT4T6fS6GkvQdh7NjoAWuaoyrfCpR1AgrVXRgjZTJFiMMeuMPU7JDnLtToX3trjVyNDJxPgZPMWiaoT7",
  "key1": "2RXndASo87YDD9sF7qqaywZbbL1RUyyAQVhamLPjCY2DCJcEPsa3dtFogUCDwhBnHKssL8dHXZ4w9NFkm3P9pMTu",
  "key2": "3TUfz4P2g5BCxXeBbz2xkbuRfgEkvQbxuzUTeaBnqcCLpwZf5jkMSdgbhVSmrtft7ZMCzkA7Ch1jATjFHgyuf9Vx",
  "key3": "4q9uaLP5axWS3W9mk6ESr2mVq9SwiDgPfh4QbXYWNGEyaGRSmmd7mLiBj8XQsuH5qdbj1fxxqam24za9jWLZqmJQ",
  "key4": "3MKyUXZeuPbkSjg3ePfiBqcd525BpX7PPgNhzsmWeXRbk7VXVA7NPgnk25vzgVLHpFRi9SEgG4zMi9ZAP9JJ6NeN",
  "key5": "2f69uTWACZG2xs2Vni7jTVWn2m2N8iUdDAL4Rwss1ND3BXdmyVm9ZMQFAFinQLReo7gafbJwx345a6JCNo3EWuuV",
  "key6": "qxp4KVsodJWAVceY4WVmEediHqySSgCWWnqMsRWc2k14sRChLZAoWdMxg7ejdTdbBjymP2qhbfjEWwUY6tF1qXC",
  "key7": "3m3zEEedB2vsr1cz9ih4dxK4vG4sThusKnPNFQuZ8QF2drvwgLAMikSd2x72JxNXgEig72e15XJFwkbn3WsX4Nbv",
  "key8": "58zp2Jwocd1pdjwhrNwwTHnZ8eCpbMh3qiEbmyBfw3XopjLkrr34zoBLYqJPuebVksGnUqmnT86WxD5RR626qLKQ",
  "key9": "EFPMTZAcCck2TzRRCJZoLX2A6U8PadW5xiKyQ1nfP8BSdpVC9atHBTve7S4dgyuVkWRnzgQu8WbP5z9n9uP8J8V",
  "key10": "zmjzsMd1mctVRiDt3aznt3gUCiBD9Zdcf8iC46c8kLFfK5FywtJQq6FfMqCR8pdBQrsHon12bQXemJwwwMgPJec",
  "key11": "4A84a1YRC3vDA4LCidCmZ9bibm1rypmKFBuDMuHc3EHx6LNBxjsCsj9pcobod4pke7tDuy5fekR5epbZXTccsUMF",
  "key12": "3ueEZGoFfFiCGTW15a2WPqvEmVHMJmMUcJQfqFRUcEEP9WbJuCpbr2cZw6FTQBbT1n3PPdV7pS94xhu9BcLSTzTC",
  "key13": "JKV5qhkN7VtkgRvPZydmw9tspn1KqU2AQTXU6829DxVireqUZMZdk8hi49QhUcd996xTVSxasaiHf6eiFxW6Jjw",
  "key14": "5djawncQRRK47VUQHa1bP2iA32oMtn9Y9MRJNRqkCpENPmGSnmNEjjpdY2XYboDL47zVaiXyMbkuBZFfoRfEk3a4",
  "key15": "4wfTNdzeLt1x7dnothfJ6qQZt5yj9soQgeS2ywsqussbbTBavUm517AhTHjjSnUd8LFvzfQR6oPojwxKnssnG8JG",
  "key16": "3Ek8r4K6fdN3ZpLJsmMX6NJXkeqJgbCrPU3yxUgBSxhsp9EH18GdhtkNYgpiNtRDjFX3W4t5yyrnLo41ybqgCiyu",
  "key17": "3CoWPx2pQYYLNMeWoWmNHs6dLur6pQ3uUkWNRCmqrHCAyxQ4YQ2iWwbYjWsrgcrcyWWbuzrZXKjjqKdVZ6oHbbL1",
  "key18": "xfQmX9PHSgFExcL9TUddrF5dtkE3xAuFiDiMJFc9Yj83imnHXgYin4geCptuSB4m9Tt3QnBKrZykgqGWtWLoM8J",
  "key19": "3HurQ7PApLcNHQwKpJ1xT13StkLtrcyYmSAbuQxqLLqoPVZaTucLZWcUGbnp5r165u5aokUcz9ySDty2uYqYS6QT",
  "key20": "2dg89uWNsnkv1QjQXcyjHYYsXiM6MMRCRsxpP63ssDK4FkKckcM4NahBCUJZtbKzeZErzTq4TYFvX4DRYoofhhqz",
  "key21": "mPHNGj1DUGPA8s5MbWBYKbmm5P3aJWmUNYCAHs1s8MSm8F4oVibrzeSMMXauqXhnC1FpwKLHbPN5o5GxwRyadsF",
  "key22": "4t5p1fXhx8Ja8obYAqptXRtwHpNVYMzU74Qt9B3jUU1p7Ld5TFZiY91XwwHAarvHdLshHVzy9Ewv14nXUj7YbuRH",
  "key23": "5KZffxTjZqWM2sZ1esrrPYUymDToJrN8GmUcVuBeKk5BTywcHkp11BrKxTCSYw1sSyGrFRLYEDLjVrEM2GErkcNb",
  "key24": "y6mFHQV46o5YvrLG5k8db12RXsapNKS8E4uGVvkm8HKBXvDphhnmwa5GKsgw5oENNW2d3ZyAjmt3Wv3Dhdnehgv",
  "key25": "NzpyTMwgXwaE1EVQBuahWPHrx7PdjBDsHsKibSqRTWtg2zWay1Qvq8ERM6rY4zFjXeXrKJjc7CTV9WD3bmVerFu",
  "key26": "3sgUxS74JnHKWEpAv9fBQsRhMUbwrK7saabTxio7WUmDRcT8aoxQspQDobTZvQmubfTV7CyyCfeKv7tLfcWLN4kM",
  "key27": "3M6oU3tSGZKpgSDtfQwnGzXZRKiqVrh8RnnE8B8B7pL12RXTsYUjG3W9Zs66NedAigoCqmXaigaExu95Uo3jLEz9",
  "key28": "4UzKXCdxnDtE1ycmAh172KJQgLioHnG2ujnwgNTDrGK6hKJWcwhzeQxjc37o6akcs1oxWNCMiAPrLwmzoskeRx4h",
  "key29": "3X3VAUoKeT1L6MMQDgEENwmUSmitLEkXDpExgdyHG5JTBb5QL8rCdjb23wrruoeyTcWVQYZEtYDdrfGWu1t4SNCB",
  "key30": "5HcDpPb4Ah4avRzKYUKrGUzxFShYCFnRSD6k3e2E3wb1kaCZWs5obcfbE63JTde2k6vTXKi179oDSCweJLg7G8Ut",
  "key31": "4drQe4tu3autA4cgbAS3XqZi4KtJWXLkZh2GtzmwdhcbpoogxNbxz6nWsTgTUYiuHSoVFLgRvAC7rro4e2PJCqBe",
  "key32": "2RM5czvRR8tv9hveDwSyo1d2S8onaRBTrLsoFRysg8nYmDT3A5MUyrEsk3q7MYHYmrq9DXoEpPCcsxzzw4RadMMz",
  "key33": "4fVeVeV4JKsiG4rNavsUEHhmzvQ7R9p57RsitJutYmw7zscnf9SUbGxfNde55yCN69JEqtwyvvAaJi4p7YfWdM2d",
  "key34": "31NN9cYkQgEbu1Z58kWMNF7DB9KBXHBcuZ3MiE58cb8bDPEFP59uuXucprbT2Ja15jvbtN6yKULA9vEBiZ7UDYeL",
  "key35": "2k9QNzsdpM1idj9ATgbenf6hoCFZK5noLWkjrEYM79jx1QZ7gN9j2sviH6vqCt5koRXMKeE5c4hMqTpovhUdWXXY",
  "key36": "4GmErj9RrpLEGsNGM36CWXQHgLJSesh6nHo5LreQV2RYKNiCzVtBc5zJ8duPGBWgtszVd8f3G1MX59DA71wvR5FT",
  "key37": "4LUtmUE8qDTEqDfCTx2M9n9qVGJjhofuY5HppX7F9QgNfuMcoQ88capNKzcCLafrbz4L2D1dfMQ4Nu2eHHZqCEGM",
  "key38": "ny6m2F7nHsY8Ef9vqhE3ChZYRMMDuhhv6324XKvC83iKXTLscnju6W3Fh2Fd3RnsBverg9dBxBobD2Eb7ZArDYe",
  "key39": "5d2yoLN5gMUqw5QYF9Nt3Cw5HJAMtCSbrdQEQVvg1qKC3YAHi9YGDvmqSQfE52m6Z13dGfeUR7rnjhiiU2VWHnPf",
  "key40": "448XcTf7VukXQnaEsZvPURhXSyTbUYVyMVNNUCMiDCyLgxAZEDrby2rHTjFKcVSPY6WVd9re8J4rtWP2x6asHzLE",
  "key41": "5xDNAeyCWhaR9cBVNVwSmzQwqT6S57c7vLaPCXmcToYrJU4wygADihwCA4DwdMWCN4VaeLWnDx3jsGkTW3GvuDM4",
  "key42": "432M31kbGCgDY8X2xPEEaq1QgCz2EUAbykN8iQbk2P5fWjQiHiDQXRA4cYAvFR5uBUfwiKtmQ2tbj48ADZ9TryDd",
  "key43": "4rDfoNwXEMNK3MerJXXTrsaXbJGAPVX51PsX1KPJUDBZ4r8kcrdgJ5sY7AXa8h7VQkx1brVr7VhcK8mk5MWH81bo",
  "key44": "47GdCeYSXRJcUwceHQipoKEJH5pAP4p6TnjbgzjkGpqjRZ5wy831DtZbPgdAgBvAYHeLU1bnKVE4RBUR99L8xNe8",
  "key45": "2SzuoDRJjjkTTYRVyGHkLdBYSKpMgokDiqRHJtcF711HQXxGH8TbJUgKEKgSNUs38HuN5s9kWJ8XqrEoqMz1Qwg1",
  "key46": "26UwWCaWmW1iFQrbGiTfEKJhcanxCUerZxLdmx4RZZrd6KJgrTNTKt7Y8cWECottqhW17X6SngnovLL5hkeuPvLY",
  "key47": "vMVYzhmYersyFygUDCcCpPP1drZhaZYM3APJyjJPYEe3NgY5HqaZ1syefA4XPGT1fLFCVq3zDSmBeTH3bit5hpP"
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
