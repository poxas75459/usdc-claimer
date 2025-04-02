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
    "2bamtQKoSKok4SAfexyjbgemNPtmEqDNo6t9i6KSAS6eWJRja7XwdhjCetBrqDNUmwzSGcQaooRo6RFgfBRPZwJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbUbgvn4TaJp7zfuBZwbpgwFc1FuU74yL5W56wpvZVic8C1r8Y4zkpHYUGNmzJ9Tu7YUCvFcNi9cwFAiykuwXLB",
  "key1": "2ua68G7c81SPeankjazrRQnPb8hx8y9Qvyd3aBpt4y8StNcizDW21CoAtp38KcytCBC5UDvyZuY5fC98K9u4pmhL",
  "key2": "5tvrSHVN4Ci9rv3rbxQt6HaTiUTaoUUV6EffzX311psgWdpMqFyNK6WwjCKzAvHoaH1hK2pgFjj9sV56nAaGe9n1",
  "key3": "26YDHWcSoYoFLP1yCkjBVMM7vdY4foX2Qc4ArftcYC2CpZsqTzDNeRZRfmjN7RhnKy4xDbmZf4hLjPCcYKNgqqtN",
  "key4": "4tWtfrzX8SayYYHdEEgkmsy94SpL2KNZAy81Eyz4cV3QtX2iEzGJ58TuoHeWARXydz7ti2ngBL6bvtkitEuLzw7V",
  "key5": "4M9rkY6K3k1tBJr4bQraQXYGJESgQx3AKNUG9xtn4dkUmz4t71e5i6NR2vtkUKpKyzdKkrULSC4XVtrDyhQizzur",
  "key6": "MZ4jShy57EnBRg17ZxdSZiXyFVuuQ8GiWCh8Nj3hhCCviChvWmvTD1ofMH2QjCdPQWFwy76bDXZxHBayL2q6w4q",
  "key7": "54LikDwjSNKQGKuRRkPVGFRJqBweXCnTduaa1nratm9RGtxnN87HXVvGJDqqbuk1MNqVygk6ikLdT4FPjpTZAjgE",
  "key8": "3NNFB2VWWfAtemT3Hv5ZAx6EbtYAVgaDWXmkTjicBZGssGtTXFUQokzwVXKKGvckihZJtRXPqdAefMpq5eEFzRKT",
  "key9": "pFfd6Z4Jhj2PT92vnHADGr5ZP5UbgE47C49Z3faUWUC9U9VF4gCTXZzATabREDDUZ3XgyzJHmdT4vVV1pGqYJgo",
  "key10": "56e8qZJbTCqsz2uLJDY8F8aE4peVinEoTWU93LXx8cCACgiZWNyq6ZrAN2VyWeEYT7vyYXgibkUZSAfbJNPG5f2g",
  "key11": "53V6eiqAXuy2MmihmVKVsWJMpvS81evKPs8c3VmgjYxS3wLYXcorbo6DEuj92j1aMfDQ4gZTxsTgsEuq2iFdvpVg",
  "key12": "3iCFCaBvodUEzWe5Je1Mb8mBJHQYVqE43QoRMYMXxHppe3yNyGZ4B8ihojNmrQULjsjakbeXRMLgy7WD6aowFNJM",
  "key13": "2hSdSzmUAP5V6Ukef1ounBPJHX51FZhregwNDVc95UpdKcav6M476FQcrRezjZrpH792U8SG3tu7qLnHTjjt1g8Z",
  "key14": "5RfNf1hf3aDB9ZPLHJj7u9UC9YRmr4NPy3qGHPKw4vsudwmqdF63hz7gV8m3UCx1CcEQhUUnNALKFvmzHbnH8oaX",
  "key15": "eJMci978kxdTxsvrVQbFwRZTxDQLUoV6qaQqH3S2PKvWAfRaQejZx1UHafUKguxwZ5HtHNMFQregcVmTP4m3pqd",
  "key16": "2ZGrKyMqCTaQ4T7qiPBxXHhepY3nJYRi5uCRG9ASvp5esuhevJ22wduk24BoCE7UvmQz6baWnsPzWRTnvzhAXyj9",
  "key17": "4hxqVaAqYGgq2PXyttZ6f7pFuqNKgw9jqtikSeeEn1jTciLRyzxznpb16zxmpBUQkDrfHbCkHPrmGMeeyyuWRWuk",
  "key18": "4T7ZeRvr98xEpTh11TAMGJEGW3TLxAdX26XxXUH9tYZHueJfnXchSxiKTEvvhLsvH6dvX1MVkznQtTyCp8HF6y5d",
  "key19": "4dyHcsdKty3ukZ97YpTVHk8x2GZzGEF6vNzYC24Vx47RTeuUNeAGEKvHXRRbiEDnGfr7PJRAopHvsuNvaYWiprTW",
  "key20": "5qSkv4kY2gZLTBGk7kFJXVTHnzw4w6WrWwgGu2byDUKBvUrxJGt4ro2mthkedYbLSJPmvgLUpSdK43fEvzEhBbZn",
  "key21": "iCa8e1orjKr38j59wopkHsLD9c4WApfETExCnqzuGY7BzxudaZyVD549JC2w3C6HA8YavVAiXuGHmyYdBNAGvM2",
  "key22": "5pRuL29u2PAvBhGuPQAdDJumFbCryoMbcKC9xLR65Di5aZMCjVFso9zyL2cUMYYUCK6VM6MC4nNBJ7cszfRifFQB",
  "key23": "GN4H1FT52kfdv1qTosJK4aNbLFoq1ECFZsCnTsr8qiJse26tgmQss4NZz7p4A9xcfPsrCDmXfqe735dgsFRbiik",
  "key24": "3wJKs6KWM2Zvno39bp1EgZuUZ6r434dr19zgVZkyCNC861zHogX61FxGWvqAJDWN5DFUy68M2gfByeXSk4LJ94HK",
  "key25": "CzZbdLwBNca4FVGbLzGC6pwdUTmRXjrCJ3Rvv1dxh7PE8d6esPkV2D8W9edq5URGyTBwR3zyo3KnTkYTsT9knaA",
  "key26": "3TxNVxUyCJgfu8JbEaLzvUfkLSvcYyvHJuZ1242ZG2P6i39og5ApXL2mvyxQuvsoYq3LGqGc6ck6UjHqdCxe9xuF",
  "key27": "3LCgUeeMLC2rzLNG3kiRiRaeBCb22io9z2b2rWf6jhsCBDWaoeBbeprtVdNEUFnNpmz9jhdnJn27S1KWZwuRRpdy",
  "key28": "4D65GwXCfGEdFmqJj9FtkFTyd2dfWHDmHyFDCViGAFS8XndsFnMyVnRWXp4qAVvhkt4fhNaEndsrTeUqNZn7pr7s",
  "key29": "3CuFWWwuPgLdszgQ4sLaKdXYcEyRMssbgoRAGYfrAh23pYyWNaVYPf3E1sw5wvncM7udjprZKY1tfAqFzaH1m83D",
  "key30": "2SUHvaB9ygyuY5VocWfxYoxoYXU1qCxZVTY7ZzP9VJna5HJ68scxKGmmYvu7NfiEnopTbqtfN38Hiu4BoV5m3Gfs",
  "key31": "2drCTKu2sUdaJSYEz6MbAyG2h7zx5Gkf5HB6Zf6cmRJoTW3ykvTXx7aGKZTftDiZjd3Zr9beopLpdcsspaHPhHgW",
  "key32": "iayeG2PknBmBjkMvXjwM64J9m7uvwnamd5gY1hNLeY8wzjjUpFSwXVjHAuN9hYUkdngg2S6h6oVVGt9tiRyfxFK",
  "key33": "2Q1NmBR6LoZ8EK99dVuULeAEF4TcgTbNrsi4LhVb3BtmSSwu5Xg42BUreysp6rbMqBynaEs1sViK76fArGtcntke",
  "key34": "4zKMPfNENPh7aWCcD3ZnHjbcWHRsHpcTCPUg6xPK7byMVtmn8fPFEYGoouXpLbHWNxaL3AsBLD6LafnDd8azFboQ",
  "key35": "imYdXcD3qYTsgRKsTRAkK6BtGE2dAojVpHdWfsQjRYCp7PGPixf7w4bPW3zqiG12KLHD8vJUL631UFda8X7JDXQ",
  "key36": "2UJqiXCtYL17dvgyTZjAwVofeedRehrUaKDkDQxFEqzzB8p9zpptpsVSJkv9Q67ztvQjmWFwvEhH3979TjJjvHQY",
  "key37": "rpkgp2AcmjU8ZFXeoVza94foYt8RmUom7qPtjzagumZDcoLQT2Kk4wwdGUf2d89ahmq8q2rWz9BvWnU2BVmGgtU",
  "key38": "32JRxMznxVqEZeB5AabTWFruQBgJokvNfxmoD1NrXC1jg9up83VSEYdLurRF9YUZ5ATy8We92Aaqsa5DJhgZDV3H",
  "key39": "65WzWLbB6JdjFXipribh6nWrGyqtBvPBJRPDfSeHrm4Vxhra9yf6mYdxvzLeYkRupUmjUdTxtZwT3HhiRZjbziXR",
  "key40": "2rybxJwaPf82UEZ3Xojn2h5QeusPPMT1nHk6L5WszF9nwFuqqzMP38tDEhfsK938CENKiGn5kvFCP7d3CqWfBRpE",
  "key41": "4pUtxjkEu4mUFckRzjdDoTwTpRaVobMAkQqV2SLFvsKXp1VaRLiqY8er6oprEpYFzZBPDHjVr34rCJyXPQHbgYSP"
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
