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
    "648zh7vZzeEYheYXHRzbuNPCuUwSCuyTTq27JjHRxUffdvGr9k8YjqZw1smqtSECSwytiiXxxQYj6YQeJVmiGg6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LReS1V38k9HM5rSFM4AXrw1bZeG5GRHxaNuTKTAcWZiJHFLCCc57dDXvJbCyHRQRUz5XSeU16tiggjpeTciYFTA",
  "key1": "4iFbKidUGZWCYh3jd1ngGdJPwUaZnuetXDdDqov48L6QSZF7AaYiiMkwMZdiR7EMzeL4fdvxySyiDdQSDbXEMb8o",
  "key2": "3Mvumo2PbS75LVLA9nyeVXudZNAvcrWfcL41KV37xt7TcqrFZGkpJVu5EQh8jaoj8Yvb7VKmc8ThMUb7TY9dRkvQ",
  "key3": "3rFoUBKQLYwdWGJ8maEBUReLVGpEJmKhgHh5EkFx3Au4xSjeD26Loyvpjt43CK73qrb1eidVs3SQytH6VvjbtX7f",
  "key4": "59UgftkfJPWCarcHpqtk4aMVB43e4T5TqZDM1KUiji7rieQuGCjq9w6MRLZdi7Lkqzk2WpKrnY4NmkaGEKpiGtTS",
  "key5": "5gcAqRYU4NQ1VZoT2QNT3Be3PogkzocRnnbsMpnqxQyTURBLep9PgTjTkAzN8QMZ8W94tB3Jm6aRV5YpeW6oDMJL",
  "key6": "4nawGGBz4M6k1nfUuf7fr4goB25Ldb5zPDjuCzvuGMZgRJT1i5bVYi3CiiR7Ft1VfaT2hwb5ZqFGct4LP4LysyDW",
  "key7": "4ZYdrtqtkEZQUyYe1pJJk8gJMewDVTm615S1zGPL5sGXpJxa73UcSuodJrU19MA7p6GQewxkoZ95YbkpNCW4fS2Y",
  "key8": "5rhqAzizLiLL4AVh3VHnCFAug5bsojATqpWj2UREckyQ7q1AZR1wcq4zGb9sGvFwxbL8MuxtSEKv1PPC1eSKCn4Z",
  "key9": "4Dssxkc6UqHJ93MAwj6HML44AzVsBmcN56JKBibCpyN8b3PALiReEtNYtWoLdFnW8Bn5Bub4fcWjeSTeoKQRCb6k",
  "key10": "49sjJe4hKVPmnWBZzmKC8q1Z7WTACCARhMoY3iSyVqCpyhqp9Wrrm61sHheHddYGMwbLYvEzzRtUH8sQGBP7G1WV",
  "key11": "54DBtoyG3F57m5FvzuwGeUaRSyo9XxN7wayzqJM9e9f81R2eCMCTnev5qXTCyTs9ZmLXkN3csed3oypqpiApnKY4",
  "key12": "379tJAqbcbKaXX27XJTHP27LqURZZJx1RtidbrDnpuRaiy53cHszn5JF79BKs4uLwi2DcdpKeJ2zebzv4gfT7koz",
  "key13": "3rGJzPEPVpxw4KX9TKvgoQgtjuLdfnsyr6nYmgxpWZ1HV1m3nQiP4i7BVa9oMtk63S2kaBU5gZZuMc9npAVU4BSU",
  "key14": "2CKXGj86MdYHnQuuv2GyHfBD4aMLMBEnQENZwPsJuMU1oTuBhep7Sbsi3CPuwofNMzUpa5NbjkT5iefKEaukasJe",
  "key15": "21kavLny6GRGVsmvM7NcVFzj765vwgXfeBSSxCkmkrVwJuk5TQkEDDDvQXhGraRKeRkDEuBnFcqYgGyjn7XMD1pF",
  "key16": "1QKijBELtR4itpuwmy5yB8NMKpewBheuMdPiZM8sXYMSYGvJpw2YomFi6X1oqwPr6Mb4fKKGaCK78wydfFyFfz7",
  "key17": "5inzg3oPSCB2pKtjhsdG5t7Zj57LHhwLkaxfDrtJMAva1jpbSuGMNyp6ho1ry4iBjNeTqqri2Jr3sFtaEgkGtSSw",
  "key18": "5qyVzXqzgSWZDo6VYABG8MeDoTcfa5DPkrname2MMhvZMziqjrUpAup8CX6xC64YcuwadvEbjuqAdSZabYw4mV8n",
  "key19": "6554rUm7ex2u4Z6AbJfrkCZsRppPDNgXvqD1R2UC3TMdmnFf7b4tSEYojtUJMCte6VYhAhDbf7EN5Y5LF2RE8BBh",
  "key20": "NBLiQRUJPLUjL1N5CFrmisU2gvWFNr6AULRtiDg1CMv8ggj3Pp8cPVWumdSXGEMN1g7mzpSgwUvWdScT4CEE3Mn",
  "key21": "42GGsCcadAMfpByoKpcLaP8uoyzSmCkZPY77dcPs7giWaTJhpr1waLTC8HFzutoW4Tx5okQ82wj6Ji9UzFEX4vtF",
  "key22": "pRyxfKm9jjAp4PeuUNCwVKR76z24bvtMvEMz8949Nry23sMk8FKJupVgwLSmT8wM445HRpA5gD2PQfcbptaix7d",
  "key23": "4KcAm4VBF3QxrQgFcHXih8TNm1boXaj88XYpXjsYmefonbxaxBLojcn4Xrxr2dv3oKAApStS4vjoudXyj274iufn",
  "key24": "5vDKbtFSV6ts4k3zeqJnJcUS25pybTkp9Y73cCPdHekQfZv6tK6K8hsuJU9rY4MnH1zM62F9zLZvy19Y7GcdLEhT",
  "key25": "5NV7jk1u2CxoNL2qQRTWinyZCwtCscZr7T8uyNUkrwwQP5QDajZXQQjeWiFYrHVvbjNtab9avuo2RxCFGWSfjPZ8",
  "key26": "4rog1N9TtgDKHx9u11aS7dnB9ZpkSKDu65bJck3stKXWZZEjJtjyMwmBWe1ZCHss35527HwSdb9vdTTSt5ma1c2R",
  "key27": "4RcFAQjGPYKPVWNxdm79cm6moejYGFHs62D9BNmMsDmD7cVYdsKbh3fgaSXDEu46uiG4nTaJKRAANzeKhgAMZwVo",
  "key28": "2C5sdo3UWh1wzztt3QG1F4u4qPZSPCNzaxPrm2hsfEyBbyao67nQ9MyvNvR18dhJMWLivn6oDGo9qyYHnvTqT9bd",
  "key29": "488yf66sUBaZnxqh1MJwMsMxBMU6E1TUYj4u1Dr27EZH2Wv7d4QezSt6bhdNGHC4hKkHbTXJPfoq5aSML2GcUSMV",
  "key30": "4d1k6Lbe3cwmtp4ooXfJ4uqD4Etes7phjXW6n8RVhS5S9BiM8BFhPK8TE6CDPE7RPEVmS6aGzssSHnJXuU5Ur7Nw",
  "key31": "tnGj6TaSwMhZVWhGrk7MuDdKM6cFw6PL8tUVrS9cr1iwLoFE96wu7fXhLt7s28URyRjw2Nt27BoNPXtMSpivcdc",
  "key32": "51567CA9GKTRmcK9dTRuWXuhMR1sM9XubH2FNTe6qxBVoL5u2JQuoXGbyn92CTnf3umy5vuJygfMDmxAQzVroUkc",
  "key33": "HGkfsRaeGLLrTg7FJq58iuZVcRJXS2gB5VSYpcdUvTJpygUJFLpFtv3f94Wop6fVqGYVpXsvBuUP9u6bMrRXEgL"
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
