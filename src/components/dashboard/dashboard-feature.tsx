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
    "5CHvQKiHahqDCXDVxSwu7tZeAJUg5ZkcPpBSCp1zmfhpJCDZqSQNAa1TqZteMoLijkQevpbLMTu69kv8ck7nogM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vENsGzKV4om4WtLk4pg6ZjQx4CY1juqdBj8vw6w4oU4CBjwDuyyGHz8nn1ZHzCG5vDpESAUCcJmjbWMMGNZWk3r",
  "key1": "4Hnb3Nq8pyrzAbABYTQfennENZZ3WioTTJdvPFDbeBDjHbXiwPtqJbyGjpE6edUxT8ZV4zqtvFy12RB5UkhKJvWB",
  "key2": "4hBWFt4R1F2w3K3iubUDgCe52HDAHUaFZXc1RY7X9KkASbJSxxw9RLKRXbdHEEvuf4gKGMEvERpMeWb4ywK2Xurt",
  "key3": "5GGXERQ8b7H4oenZ9sqetve4hHv4GMufFSegqKF9vJpPzyJoXYu16kry7SRo9kr3VTeZYwxVTaoWqiGPHiUwdfEA",
  "key4": "36ig2gQKgZuYYUPBz84JToyCN3sSv3mvEaqAUs8g4LGnbkBaY16b1coYccGELQ728PzHyznUgayJ6CnZXJ3m1Nqh",
  "key5": "5yf7uvL4ERV3JhDiraXzRV22TixGgEddDEJcoTzgNBxkacxPPJfPaxEJEn6wRhZH7HFDyqVCQDX11Xh7EAZHAYGF",
  "key6": "26kZy3TAWKEnJnsBn8dtpLMBnCkC7RpojuhWCeff5kJPFjzNTik1Lo4HeAnGMq6HNpkc73Qgth43v1orQiGrAT6y",
  "key7": "Y9sVWgMnFLq9mE4iGJhmps1KbNgy7j2k4JWQjMRcaQ7vdjfHAcSru3guSHqWPpdH3hRRMj4nYbWxNKwneVQfKFM",
  "key8": "2q5hy1WJ2bv9GuYz6GN5umoW3pavN52tdPUBnpGa4bEVSeDtZGuohMp1jFCHSktCKCLQU1BxBTEMG3DwAfbL5AZZ",
  "key9": "3mZsYjtb1XHLb4B93rBut5YQHDPDqrzj27fDajwFbEc4yaB5ZhMTHC3zwAbZW26SHTBJSkH2gcVZmBwUN3wrB9sn",
  "key10": "4cp1tLZCCVegvyvE9zVFGXLt8xoQzzXkeiYSHRZdPegDJKEtc9c7SSaCKxUesKdggwgJ6DniB4Q994egUJ4nWscR",
  "key11": "xv2BrNGvUZgxzJnBgwiTjzHHEjB2EyyTdaZRS6pqevUMHkhRoruZwjxtRSwV2TLXt3xr3XTbdmJwKjeWyKrSKgx",
  "key12": "26TVB5FykfJZB1xmcBz7NFBc8CXbcdnfqbY7yVPqM3Zn6BERBEw8CkkQrTmuYSm7G4j5kfoJ7RFK2UKmrK1CYu1n",
  "key13": "ziewyDb8kwzvBs6BJvxe2hbxESYUzkBVXCVJTRHPyEikEwCx74KL331tfgVbC2NJMNaD3scHnJ13dAjqk8Yq2Rv",
  "key14": "5Dd9ezu5FRtQh12k4t7dJBSAGDHfsdqUkpypmAYzuCibUg3DX5FXhGiw1YtNfaPcYffeZ1sTmjDeK6aarpJfCDcX",
  "key15": "3q83wEtj8xaqScME7tkbn5YhnaGnxr5Pgjbh65Ci9Prr7ha3pmnaFtMLMEoLmtzbCktVCzM88sTDqfWNnj97envb",
  "key16": "25HFwUEw34gc8GkoiueYXGLyBxNgnEHrTCngMsscUCygYP76hLtY86DxrZt5KZs7A6HMNtTX8N8nrZC9tNkmiTNj",
  "key17": "3fJdL38583sLsnXDsx2bYHtmJcPjZ45wVqNuaaVfRhwg9LQJmvxoBD3ojZB6bay9KdtPXW8BMVMb4weQcivw44Ac",
  "key18": "2L2gezLXRhiP3H1H2tJAYsJG2pasYDxhD425Z7EGsmMmJr1GpSBzb98mh26f3znLUNS7jXbG7EpNHFafk9qir1aU",
  "key19": "3reeGVc48rd29JmH3CTiDCbSb5F1ZqdaDpTLgnEdVvT7TPR6BNxTUJAApvjxC7xNPEst8BQyCEDPpMzwqRMxLfy6",
  "key20": "3AJ8aieCCr149iNRZZRgGt15iqAeonJhuh1DWAVKpqd2ZAcBPzVh5E26ofvDPTsGiqg1dbwqvwXU9fYTuNuBd9zb",
  "key21": "3ALKjVrhXP78y5z4fHzz6JGGESTDx39mD1WAADRkKc7PCysuisKt1C75vnZCBw5tT4xcEUGnFG69iNrjPGc1eK6r",
  "key22": "3vuMB5RSJ5R39GLCbV1u9rswQLemRPJbuvFAhn5ptDzFea5nvmKJGKhtAs6pTGsxE5FRZx8ekyE54JhAME43W2xX",
  "key23": "4j5MxLuuas9c63b9Nor5o15PVKYj4kvopdUvf7qZJHwuj6atPq2qHv8oXNgBbiLfby4EWfxBuQRz3R6egrmBwkQv",
  "key24": "58cieNoRCENaZp2Cm1iCqPRdu1JDTWDB9gaJSAn1djFNdem57NcvFpDQGpgt3NMXFu52eVmSurZ7YYthBXhX6BR4",
  "key25": "5gxmmD6fXzofRKTFuviXPaKYgftZyUJZRS5AbdKiC6HmkpsAcmK51Dd3VmL9X5s9FjL8j5niHWCNBaq12kxJymQ9",
  "key26": "4ZvYyGH9xp5w4eLAMbQGMuuDnn5DESVtVYc6PDCdUPUSUSq8PPBaBHiMqoCE2SdjPdJPPpoNAZGzUex1ajmuQKNK",
  "key27": "3iFeV3X7UB7PZ49bEqz3py3G8NSsE1kRX9qk4zvyJfThNzArJNHQRnFmbgaDc386GusMMfyRaGntyHeCoCW8cEQJ",
  "key28": "2B32UcDxpmEpgXCKUkmJ6v9M3hdfJwErfgJafMsmMnZQVjNMmq5r1MPKh4CfCDVyL19C9NDyfCXQdqnW4hXbnZD1",
  "key29": "25UVPg2TusqtAAtRETKiaX6yTyh3s3phPzb24ekgsso6XaQwba8HhusfFhyCNDH5MDaDkXeiq83aCso4QVQJzaTH",
  "key30": "4FkjnUenQTzvYhuuoT8arpKjztiBAWGPGJ9R3i6esNjFQjUeBb2bWz9476LAipExXtCTHiRVty8z1oTychabpjnL",
  "key31": "2y3EFCB3jVFqHZoUFrovBpN3qp1AsmGFvpj1r9bG9FrQeKTLMsLKKfLCUzzKqX5fATeEDKT5v4o2yE2vins5ELjk",
  "key32": "45mNSR1zzvfeveoBN6tQCWNwtUNtbENyxuHka7WLb1h9yg3Vtyd4DVXUcsHjFBtk2BnS1cCLMe2VXMzwNK4HbPio",
  "key33": "3EA3o47XZWWUGFQD2KRspGAiUvTRRimWTXhsMvGRPzDq45nP8GZJWNrJ1MsR2zwYAaqUZaLQW1QAPfZyfcDbvmRd",
  "key34": "4CBJJGenjNXjN8vE7qq72Qd7Z8w5pbVud3NuSVLissLstobxHJnqSPzt9Y7p88PhTbA5JGA68CR1d8ZFHuRfULVA",
  "key35": "2Njmrvq5e17YpcnokeLQZXbczz3RAeHYyTogAxa2eWpxNw4MTBzSnwYRPWNATZFLKr5dBwZ7LmetuYnYXp4gqYgr",
  "key36": "tgcymkirgiG6Uhm9u8Za35BT4DyZeVLmBcn9z9aUdfE2YhsiaQpXBwcS3tbTN5fVTHhZKAn3zVz8wuj1EFmFVFK"
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
