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
    "63svNoaabUqMaTKeL6Hy6uKTxtLRMeyjn1LwrFpxEKQqGta7btDZbbSp4CpZPHgZCpgoAngQ9dxSs3ZaDNrukw7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66sqWXiZXLNPuSkh9xyHF1K3V5bN38hujeEwToT7hStp9oagBJukX9ccRyYfVysS7gyWgfLKDwNXmhFcoT5SRhqd",
  "key1": "2q9z7XT2p5WjAvP9XTgrGnyUwTronabkgnRs3Y6Af2Rmqv6nKLkTiYEB4aPCvBu8sfddJQoVUAaqCRSfkFWwZPSz",
  "key2": "57XfmD5BSLjt3rYpyfTuAHC3wD8EYabhTJYosWQpQRuK2hrz1ft9aCzRwo9k1V9ucWLAws5KEE7At1s5ZyCPC9EY",
  "key3": "4XGHyb7acxQLvCr34BNtSTnqM1WbfvfTgDLjes8pGmtcCf7MSpq3sC2PZNnNtdTfxkZo6ipd9ugitwpVj4QFp7qz",
  "key4": "2AGY6VviyYBnqdhjTE9NauJS96GdHjaYZvbsjHTVb4EZxqPjeQ17FuRaHH7kp8AhMhxYHVDvCE1SvTGN2JeFTEvX",
  "key5": "3ikD9dQJtpfgc1UaanrjSK47AccarQBTGMHdPRwBMiDLb7C3TnR28oH5DMVQPC1z8rvSboupUHoBAY62EnvMpqRC",
  "key6": "5FK5496Ysk8MRrKfTis9YRAmsCfechShjWbEju4gkYPN9GV2Ew5tsNDyMdG4p5VjXrqNuvXD4ZiX9ciGYShEVjd4",
  "key7": "5ZhcwwHXUR7HZg2SV3ScWHi8s7p74uuq2oScupLj28J8b2tjR5LjmmTeMcnx4Zfz1uf1QfS9JV72CWRvc8S5FR1w",
  "key8": "2P5GH2ybzVzWx5BD7CQ45LMaioM6J1QkxochHJ1UASE3Kc2xgW6riDAxtLWBxh72q5j4mv9X5cJR94P2Fdef1j5x",
  "key9": "2DBgJcYCps3KcZgR69fF5nEC7GrxH2t9Dw1cP4p2mBdij3Q88rkbim9QbvkJE1qc1qcgVHvytDpMozPVTj7hAaFS",
  "key10": "cUAqHMoDhuoXeTQCxSSaFWg6XQbapag9EsJFARYvu31gNasgiuTAE23wi44qRzw9vKjxWbQYGGr6GzfG442VVpY",
  "key11": "5A6spmNjgmo2XN72B4sohYZG6WYLvhYmB9LLM2x8Aavk5dqSCpt5GWAL7DEK33KitgGAz7JcGeFBwsqny39M2s3i",
  "key12": "3gweHcEtQXPD3ATgkAmD3MVYajfen6Xa4F14m2HJZjX5XM5DiGCDQ7EddHdwD9LyvnEysWPyHbPodhyRHEgdb4Ux",
  "key13": "63QTpMBne6bPW9Zzhk5EU55fj9Y8zCzXFNvFSeqKzK939khAW3sPKwno4DUbRhiytvsuorg2Zet43FQLtm1YXqmq",
  "key14": "4sWXTbPqLbP7XZg6D95mLebikBGf7WX1Jx83ffVBxxDCCcBkmBkL8te3cNbuWn8UuVqT9JosLVewewT1Z1C9MdgH",
  "key15": "4RnCdWUF36SveGzrqyb9JZFJBc4rQdqCFqqMHqRifmvXCD18BB3vkQx6BreExsuyhet2RgCQr8MLAFy8eY96reki",
  "key16": "4tne8BDxc733YPeNPNgQCmtRr1VsAdQpEG3JRgdnCw1HPJ3uoEJQxAnbp8muJgrwzVZFpySezWtdSm8RiWsMa8Mw",
  "key17": "Wgaa3Jsk7mid5y8CUTe5RuzZ2Ug6TBDMUodFXH2hKJt2seAZvzXWJNSxdQLQicCZq9Pc8ziJa5HTiW4Kj8n6Ua3",
  "key18": "3fnbKxn1jHCyDsB7CA5o6nDdLoFxC2kimvsw5MDtyhZ1iD5ygB1sEvT7QWCPoso5D1EmA1uD7LW5QQjESrAsbJ73",
  "key19": "44SJRBZtyFNVZkEt5kK2ybPMBLYwDDD5mS6bCaFwYSC88SHgszd5CrEV97MTfaAkC8LiKR6rYRfU2fuDMc28JdK6",
  "key20": "2oibqNnR7BoGoJcXoeLY3UQCn8xqyC9KnwDdD4bNnWHZkV1HSTMPySLykwD5Rd4y4LQ1Sz54qJ7K6ZSZMqrTehY7",
  "key21": "3SP9dXAnC4kcV8f1gxpywPUD1kwRE6a4wT7aq6NN9qD5mrEHT7rjz59JCnMrazggSSu9Fp1mXptVpUCzgCFxA3w9",
  "key22": "brdscLYe1sPCibzBZ4QJiXDjBNy4SXmrmzEFZJTZ9VBsbXa1jE97BP2umPy7cuDoo3fEua8ZsbpPBfWX9q1owqJ",
  "key23": "5cxTp8c2RAhV2Q5rqhiJT5Wy1mH6WtgcdCETAsubFNy8JzVJLayXqpoVzpswLt6xfDsoJ7iG2DBJbxPoaq34S8Zp",
  "key24": "nXDBFeUfKmeqYRXsY7HDMYrASijuaAQy8SgqaNLtEk21Gpqh7UTaYhRdCe2GYFvvXj8FdiFgbxyNW9ex2uvUKke",
  "key25": "44ec1kfnjQDGXosmQ7xZoixE4EWqKDf9ZFnoYUiekF62RYg7ug9RhaZJdZAfNdWEs7JXviWmk7gm7XFLgM9rdZGr",
  "key26": "SQtaPngsvuQSFrLSZM4gr1cuS1ea8ahnyv57cAu12D7jdpxcGjRWBEJg7nhjwggiCF3cC5uKMuFRShxP49SrKCN",
  "key27": "2nqRyrEjgDfmDbEroFjQnJomfh4fVmRPMwqUW6sncJRLAKGSXHLtaSY41oKkkZN7SCSngbE7bbMbiHMxGJDTfTBd",
  "key28": "4hBRbxPuBLkGoBMUpj5t4ftuQd3KpsopqMvEcmc9CC54EQmJMtJmoqyAGYWdi8uQuf5XTcHC4XsqAfM143oTJk1K",
  "key29": "2VQvLqT2RmLnwR8MmqivrrS2Wdfun9QRatcKNTgk5XxzSXdJgiA3Yw1kZy3iqUpc8yfwybbRG1Yvi2zu4WnKzzkT",
  "key30": "3cq3yXgTc5LQkEZ5Fq5xEF6KGwLiFqwMXhvMCY3SUjVnWpDtCWZjUk46onPchGqd39Q5FrwdfBAt6byp178wvpwn",
  "key31": "bZoTSoVJSpVyqPQX69pzpMUMSvy7rAXvjXEjww97sGLYY4Tt6hps21se92vFK7kdqALNUPPAvNCT2TTyFtg4RCX",
  "key32": "SvdaGHwPqfrps1sdXfZcYJvm31xWw4TGib2wpHSF5i7H1BmJ4JnWhEuzUp5nHycaURaJdBvkrEs5RV2D4Ko2G9M",
  "key33": "Ha6VrgCxBT9eZ29XsTXhVVxp3uFifsW5dZePN9fB5SUvCEN5GxZTKHTAAkh9MWG6XZjdPR7o7pUKGZim7MwSZQP",
  "key34": "3EVTBpfRL2HZ8GrP1WzDhX8VBLeM7gRUwKvuUKTNaRR1N3Ue8MZ1nWU14xueVtgpSNcHgGuDwKLLWrHXX1fXZz9m",
  "key35": "3jzZ4SXPoEW9G6UaVbo8WdsNkZiPiVz29DLwaiE1d8PXp1QDT6eVns2okTRdC1mtpUt1cjsUxq7xXCK1n4TBkBXG",
  "key36": "jxUbrNWyrN8pxYyeeipYyhfGxxf4D2fcH9o9tx9kMz6r6HoX3LwhcnXFWCP7z88YUeHJPmxbdPdf8VvMcpp1FjT"
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
