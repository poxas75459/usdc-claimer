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
    "2dsM5F1V2m5G9VuXLMweKfsEJn1JGNPZGv1WVGXeLPaunvVQ45oPsZByMCaAY825pBuBbWLt9d9q2J8gg7oiRB7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KhAFUTamscmiPZktjFz2EzMB44C5Yz6KbgU35BHZ6Ss9cET7XzhitJAYSBPmSx1ebT3ZL24LXTTQ5p9tnEhJkkA",
  "key1": "7e6wvTcDM7S4kwv7AK5Kq4ehvUpCSrprrVpT9fXUsiwptouNMhFjYEgVmHaTZa35K54kqn1gmuubzJ9RM1njbwP",
  "key2": "AD1h2dATdyUeWQSJQXaZcz6WczdowBnYmY41NWTmwP7FLsSVckQXPkdedsbtXEiGYD6np8uZwbixusGu3vUHpe4",
  "key3": "2zJqAWaTBjjfpcdFQYfBSnXFWiPRYcZjdCLaFmUJ78ogxgswHaMbZBCy3vvZcCJeinHqveiKe6h1ukQbqCMHuHgJ",
  "key4": "qKHuoyqEfkXkrfmvtviMfVWBnYjHAY6eXSPkwE9UYVKsDAMn4Z4FqUnnJEkMqusL9THopQzid4ye6PtfZZyBYBK",
  "key5": "3biPoXoAcaikNQzDVcxBLM6tDJyedDeKbupXrriPhaowG4q1ctvzzpMkAasK2DDEQfojwf4FwcYCiE6mJV8Duij4",
  "key6": "4UZyHXSY8mx5zDepfthn8LAdYWHzFo3MZ5uZkUj9Ry1jcZjMVF1vEv3u9gnkWaQptodTQRuk4McSjcz8BYr9KEex",
  "key7": "4EoM3Ud3QanDDU5mrKf4NBHwmnoC6MDjTjHgmd4wsQ8qXrqojC1yNCs4bYMmKDLwBqgS8mQg4zCiwpmTfvydXA1U",
  "key8": "3Z75V8C67heqmnsQovokVBikufFagSjuQnRUPEbQFxwrK2RJv3r337NXFzk4Jc2wtmX3Vm7GB9gaimk2FZ9tY9Tc",
  "key9": "9Vj7dFKAMASRVH27k3xstxMWk2kJrKFE3vDinPJcEGEUm7SRSsWQx4kgrjXR7irmkeWmMTQefoELnnbd4f2bJ7h",
  "key10": "45nkyeNXzNxSksqcQrJrgDBExPmufgjxzffxxv1EtaK26NKBHyMZm8GLYQCen1J9h5pVmDewXEBMDQuC42cwy2rF",
  "key11": "3kDntB5ajtMTi2JasbkvAXkchijDVX8bKmVnwuzrc6dxTu2ULKGMosV9Acpy1mkgHtbwqwAFc6WPpWE1CjNMTiXr",
  "key12": "3pQivy8yKybKoMka14PRaedu1UYdVKnyNdXKafxRDSRcAmHLowpx1sDGypUFwgqd4ZNnQotb78hXDmKrNrksE8TC",
  "key13": "2H77M3LUaCps3PsWiTLBHwwx23WEZSGxNTDiuJxVFMVuots2bm1TFPoUVwxZQKnCP5w9gKGt9Kb57jxc2ZLtPhsK",
  "key14": "4e8iAJ58DRBm8hiKY1Nx5YFoFin6XmvKQ4PsUfDDXtwE2eJDsmnFY552LMzcydR9VGvLTVupVBsFqTgXvz5yX4PQ",
  "key15": "2DXvrAURSnft2iTZctHb6f3F4qDX75heoYVAFffSHuC3RaEvNpZ1VipfREeDYDQdCDFzy2a7QnnLG7BoyYJ6zPxd",
  "key16": "3i4p7Egs5cF1vhKCurxJwhoyMhagETW4LgzusMZMv53zhXdw3vwMvUKeG2xPLdtkNsUs2DLjFAZao325rDxSvULE",
  "key17": "3ZBbBfYTg8AYurrV35EJiCcXWPaN5BQ2nGRZHCXyY37hF6uTQBCX37DLYo28X5LXh62VW4v5Xe6UPaWhDqmgWHxu",
  "key18": "5YNjaDfuwKCt6vFWTaWzVM7zxYbesEnoBUizUbdPWvud8SFm16C6a7UAtg2oFys7aGQfqak7NmdyXLt4dbUc67Rj",
  "key19": "4Wf1uqzksXh5bPRVQLZTZ24uSWdwArenq3crrX4ePRmxoyU8S8SyTtqQnzsPymPveLTB6QSMUCksUYxFBUijngvH",
  "key20": "4oau7hks5do9A2iSGH7q5HUwNvsCUSJRaWdeG4rcsP3SkogMoE3bxvhzkEbn72dKwXns81HkUSKERoB9Pdsob5vj",
  "key21": "4cP4UoQS81UkoYfCY2bgqa1PV4t9U9dzR3YgxrLC7e7tcnsCYqFbvrfW7iF12JuSknVjJsEwq6oayZZSGVt6NKQu",
  "key22": "2fiC6TgYGmy3FW32G47spFy3j5vxACjCs48QzHDaw782Xeo4apUiNu9g1uo2dAeW3kuTYAjTRyBSFqHRCxMyRYgc",
  "key23": "4c54ocr7j4c8f51wRpkasi4Krd1s89C4yeQPvj1ymEshDnCEqsrjHWLMYrc38o8PvsJPCrX1LbJCpUmuKFMkLqNt",
  "key24": "5a76sDi2Q1dGMAs1zUAHekgN3zNCH3Rmq9xpx49sZiUuQh9QDG4GyBnYUfxrvjJJ9gxsV9b6BtFbgKNJBbAmb6Ej",
  "key25": "4kT5daFwHQGMqXYPP886QdNDhUPgnLd46WH5bEpkZTTsj45WtCqgtuQ8QodxsTejP7ZUk3yKP25uTqZQi89d7BMi",
  "key26": "3njK2JhbHFLtqHwgSh6v1QJwcGZsGYXVDEv7B7nk81C7zGJtySYDR1L7VFLCjiQC96KVJpGpATxDRdw4LwpqLTZr",
  "key27": "5ZdWxCPnSUuYomJdkbiw4D5PbDsHTPvdoEESS29hwqu1t7mQh3MTJ1KRmjcYht5QVFH7hcwUXPZXPiefg9spYfrW",
  "key28": "YRvWfxyranukMN9SVMAwLGKr9TwwLuGabRFhY2n42TLvRTbziKPWHkYPudHBmNdw1fnGoERV1sXvsxEkkB5GVuM",
  "key29": "hXLumkdXy5dDAeRTeweUDQq7BMNzoNJYBEvVBkZQgx8jyoasdafbEEx4hoc3TCY67TcQYouCwqNcW8NxApDhwmE",
  "key30": "BQQSwQc2FhRygvmeMD9MEHze4hXkKKywd72yNs3aQNk5rhHhDC2CPPZ5yzuDV76gvqL29bwAvDFLDNYtMM3jdWZ",
  "key31": "2BRiScfiwS6b46KokkWFJgo5xjdkLXxEQ6zcWNihnE6Z5PiApA9H999azgVJdbiAAuMxvuiDhSb9CRukfpS7EAJ9",
  "key32": "4GKLKrVi3srfL52m5aJj2Wm5dTtT2VHpFYq42TrAKVwNwmY76ywyEWcJpbXWJRxX4YcD5jkAfY7fAciMPuWZeQGA",
  "key33": "q56N6ox1sapvLVnXBE8aVKpuAPvGDrC3h3qqTBcRJXLxiiejuAedPqeqCH3kzaG4YAGwKVDKy3UEFq58fshtjix",
  "key34": "5y4rhkAzREMJoSTZKLhswdvu1ScPcmY81MdfV9m1FM2cP5YdPwx35XbTZCQ4Yh2PqrvBh117YZ664TtPfrPZTNyh",
  "key35": "3bJ9bR5v4RZ3hXaGfFTttT6nMDgVthiXf2bVAPB6DiPr34dpFfea4X16qZL2na4td9d7ydF4P1wMs7nYHneXa1Da",
  "key36": "33Q3sYGmRaAC5tUojHpf6RP26sovbPtMvAUTZ6wzjeyWmEeNw99fjGYyqdF6idE6hxHRttFdH62kEMfceD15LxfH",
  "key37": "43SnpgSiMZsMvq2Y7B3J5FrHMzTGdAEkufsNEf92bAyUv5XRDmpRHdPGCBBHmKjp8GEcVxdbEKDbb5m6pVQRimsJ",
  "key38": "2vv12yaCLZsSuGNZAx9MNJA8GiV193Es2ieAD5WsYuyT1EqQxLyUeuphSGD2UY1rEFUYjr8XfH11q7e31FhfhZ1C",
  "key39": "26g9rRCQ5ue16USS61u1nCPoT5wJqToVDsfRbRtERA1cjvVkYaE56iYNPGgwVZpKgsKbH2H4btAtXJKe1AdUfShH",
  "key40": "3HeJ5CDSmDfN7WKXE6beBx3kgY17Yc3VM1QrAzvk5scYJPChVTGRsBLzRDwW5T6eQ6k9WYUeoPQBtkPQpHQrsvTS",
  "key41": "5XDAe8ozeKs79ceChMiLqvhuhRk1mZ6LSyHR4AMqe9TmRcxnqtckQhXsx5G4McJZpB2gzr5ieAWPMVmB5DXrQ4fd",
  "key42": "2SLQ4VrAMF7k1r1hnzCVFF8Ti8uXG6SYsuYnqSYr79k5fsya9G8i7gRFBgr4XAHDorAAn1SJM3PvSG3EaN5fQbzt",
  "key43": "48U3uWC9Z8TfZavfsVLaRUDLrguG79teNnBHFGYpyN7eVoLjVmtoETCec5CpDeXR5VJoKtkeKpnn2cHGMbULcoju"
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
