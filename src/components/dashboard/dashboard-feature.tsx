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
    "KGtgroNGuXKn8XjDYm41LGFWbhgQ8rgRTyCQAQxmPAK1HWHUGK39nWRw1UAcJXRdmLaDQc7nkgfanPdbAqDTyBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QWyJFnHHcFYtkKUZzbXUDtEMehcDKDXAymstsXj9o81v25V6669dirXTw9aM95e2eaHBbcsJeaJ5j16AqWcyezt",
  "key1": "5pbZuns4dj6XSGFZ71KvUmyMqSkbsCGjvdrtrCRgDPxjyV2J8VSBUsdVBxXs7GKG3pmECfhStT3wGCQvkHEJ9kqq",
  "key2": "33i3j1J78WVWvggeN7uFRuRXigQepQk2aJEdhamU3jkC9TbZbVrqToRQd4GAmCMsiq2fXxpYLVSjSuNEoRDyNXF7",
  "key3": "4McJMi3D65BrbKPUJEp7D5tkavgumat8iN1F98Boq4JJkBgpe5Bu3jj18zVRnaY6JPs7jciCwcLezL4YXNsU1nG6",
  "key4": "DxK3kbT1ZDNAKAzpWAf7ttSrwymuRumHURzvTQT8HD4DpdcLbwcQojepC5DzUWbmeNk2mk6Q96QBaoLik8vZELs",
  "key5": "tYSGR3AQdjeubA6UfdS4Tuu5QqTNV98wbboXhcQFr4JK38kQi8Z3fL7LdNbhPmWtmXwfETdyF7LoVB9Ry31LEmF",
  "key6": "FFZyUKCCkeBQGVbCBavptQ3ApLQa2u9HHgoD5HFdXomgyW9s8m9N2rQ1TpuvXbXKr78UiAWB2gfd2FmkitECque",
  "key7": "4TXsmigFKm6v7PKqSeGAmurGvpgPrpQzyxaNN4NMu5q9m4XJi4dAcamfRotVZL6odvYwzaNUeqgThAVnEUQR1rju",
  "key8": "bWStEKDenug32bn2DdS6AJAjEaA5BVSge82uwPMBeutJY1Y7y69aBWParsad1PNkf5xbWwkB3Lo9d9ERQdvCX1W",
  "key9": "2YWYikrEPjwHnhwjyhxCAtoD6cPykGfBBahffq9r8Qk4sMGSL56FhH5HzoJEEQGzVZgBcgbxDC2ukVMAcPKmhZ8x",
  "key10": "GKvEtGeHq2kP6oPxrKUTAR3WKBBN3yz1YeeJ3c7sgkBWWkS1QXkxKZ81dzcVEiZoQp8vSvfPnfd9W39EEjAhmBY",
  "key11": "2THnv1tJoEEfu25pnRZy7mf3nwQUVQjtWBGM323Mgsv6oSKXnCPFZLMGAg5GJ3ZSnqhpcT7cnsmUMTiRzVAcZJLf",
  "key12": "3S15ZBvWfcHWXvx918u3YNRToZwamYLMnbC2BYMWY4ecU7QWmvE2gHufp18mGapGfsveSowgVNDHEXM8A6KNafZf",
  "key13": "2CzuzptTqdoPNAeVM9MoWF35fM2nQ4Wsdixucvo6x9WVoBjeZuLAikRdvwFku6hjdZQRZ92qjCoQdiiryQyJMKqb",
  "key14": "5pC4koYJqFK5uRr3h8SRXrwdpzvvmoKWiha5bfcxHPEJHqRY9NGkQHcp7oBC27MFfEmTeSvGodtwzWQwXr4t5nci",
  "key15": "3zzG2PDG1hJfp5CLrX12CrQwxzvDeN9Sk4bcV3t9tzRt1aMUQWEZz5a66uJ2qGXY3UpHtaXCArAxw7Sck1uVYCZW",
  "key16": "z5xu9LD5QryxpkAEqVE3TQQkmXVMR2PhoiPVeHyakTbdeBA9Y15LTnKywja3oPUL14fXTUn6v6vPWkPeXU2jwvf",
  "key17": "3Au3zaxqACeHvQqmRXLrAoAvEkvX9yULxYt1YLJPZu4G5cwXt3X76YC3CLrbqt5aqGMkBWTuWv2uiXDnjNzGNgKv",
  "key18": "2od3ovohBtKbq2kD4bQoYdVeXYrEBjXcxoM4NerjeLBmavGuHwqfWmeP8WyPbbhtCgLLTwprE9LDvo1pqGPZ5DY5",
  "key19": "67LVJwXzEgP4csjtxtuBExFTtg9GNtJYTo6C4r2u4ZeaQH4uS6TWbbFtrU241ewvEuv1oK4t1ESjb3sG8unoao9R",
  "key20": "3EF3hkdJVBtig1TCbaWqHaXGekGqGwUyyegiC1dBeviUAodtujegZ3ih2mKwjWEdUgeGPbUAZjYDy2mgdtiAvbpG",
  "key21": "4nqWrdF5S3MTu9BYC65RkqqQ86XbGSpHK7rrQe9KUhY8Lv5owyVYpHRR1STxTUvVLRNPfHM27MtVSdFkgJJ9BwUo",
  "key22": "3drJcZVYCCnqmtxicy5r6Znbm9v2zFyjfn3EFmH9zZd3EzMqVkHmVYEgjhrwKyLRJ62x1MUq7oKLuzyiBRMf4VyL",
  "key23": "3HaPGr9S2LmhnBQ8QCSPvuDqExCZDZ9ECu5jpAUmFBm2GxXWqMbkemEe2iTt2w2v14aAt4VHzXWydiQK6B6fnZXD",
  "key24": "5FqZ2ennAbNCcre6TAWzZ56Lrh7Mv3PLPzUhh2ZEcA9pP44BaEaetyz3wt4aagQWgfF291ypwnigQ2WhM7jBkp5q",
  "key25": "3JRQ1GsQPHPYRJSBYT7QEYWbkd14PaqdXou6mrL8TFYsR9FekdwNfdAYmpXwUwe6PgoRH8RgdQPcbVbZn51478KX",
  "key26": "4gyaCLVgi3hjtorDfcLVTi3AeBRDfyJ6ZB9BJU4PZtAuvERkwhAJFpXY376qph1KBs2ikKRvA4mbLcuWiCVq9ZWF",
  "key27": "pkFWWDeNHQJJZAmh3RQme6JtqUM3JJpiXNZEck9roeiNkDwQYFfJxE363L1wXcJkTxr3M9mo1CpPk942BGHGU7p",
  "key28": "4fofJ8x74PqfSaE5ZdMvhMChNk8MerxNErL2g1iZVQhFRiuunACLhvaKeAniCU7UvGHutdRBQpRBDUtSaY1rcyT5",
  "key29": "iCaLVu4ka2CAFf2RxmXRYbDnnH358YAuLPk612wskheGdQWweijTXR8M7zpmd6xp4b6diNs67JsLy6C2583TJkT",
  "key30": "5ro4JDH6SZdkzDNvMCRXtrrzwqXuiMXzf1YQJGMS9Dv72pb2xQEgtU4WAYtxCnF9V6ZSNiatw9U1TWtxgV5GmuDg",
  "key31": "V1njjkTf1B7UBmHNAtymayLMrmpduDVgCV2x3L2Kfnta4ZXqMPnETmNDbgS2fpEmgiJAeynsbsyqZdHSwW1mBev",
  "key32": "2gu2ozHxMpMGxwSuUdbmgQ851bj34DS4KVjFnhQ6o8NhbaKvLFMvHwTQQHzWsLh3D9ftPrrUv61LMkB21KmEkng7",
  "key33": "4kcePS2uZ9epcpTAPR3djuhD3tPgy3391JGwGWibbUmmgFWXhbv1EoWYYNShD1mkmwNt7RLpT13pGfBUeGuFgCpt",
  "key34": "2mgGfJEnM636YLq4dLxqGB7o3pCFco7i8KASwMBTokZGvxsaM9tvepPDUPaKGh4g59wgcFWsweXeN3tPwvefafJD",
  "key35": "5nujSdksTi46W1sJxacEL8YKMRRmYCJwHWWx6cW4EtsbPu9DwVVwnHCLPyjtVQteBz6RuC7Hdh3RHTG8sdVHH8qQ",
  "key36": "3LZTqRaQSEy8Wc41uxzVtEVFSCcQiVGz8P7HqiBaSiR9W4u9NmLmBrnwEkLe8S6v6uF3yU6eV28U1wnC4Kq467FS",
  "key37": "5SSeMTrBNHmGkmDHLz8hwsvACEB56Bfk41uURYV7owA7FQ5PiS4v5yuCAMLHVQg58Pmpcza9xiaAx9M5YsnTvDyE",
  "key38": "44DhDaBtbpxjwiQScwU5RQWgSCe7SBojqvsfP5FfHm3Ez8P9PGGGDfrGXyY6FJmvA4iW28HksaX9ZqCe6pYbSuAA",
  "key39": "514ED1rotc2zqzQQkhc7pTVC1p7UmVF8WHDpC7WxzAgHFkgAgRVapnvyvL2F9vjGU5ES3F1bTHZB43tqEbXz3xMS",
  "key40": "Tjm25XpuL7nT4hW651fLWvCocidDUz2nLkUva93A6VjGYSo32xwgWZipjZpfLMzQBPvj7gsyV4v2FejuiV4PvLz",
  "key41": "TRBZFF1bo61BvJRYcq2usjzzbU1mqE3JTJmmsDejqZiR4ycCjdnbwh35Dbt3hqroJajazDmNsjbkDFeVZpVhfb2",
  "key42": "5srt4kSk5AtQMt3wqpuudTZP2UptJWuuzHqsvbDp36W6Q7HbzJTxMmo5jVgeGM8w9dnEXiCMcYoVLSFfL3XbWr22",
  "key43": "2k8mh1omZmFniBzJ6a1ttNXp4UGvm5VpDZKN2BjSeEKUQ3k7LzsRTea9veHXQAmRiYgbnWAdy9nLG2dUTp3A9GDa",
  "key44": "5v1uRTx1ZZbGWA1bTyUgERvhDZ4CwEMksqiZyZCCGetXvzFEdDEZ3HRb3KwSbw8P6gz98EFgTe7E28NFL1j7gLyf"
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
