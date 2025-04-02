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
    "DzAamKVkc2efkd5YqfTe1VVabTJunf8XuP7GLLW3bs8HFFiTZtyTYmDR5ps2HifhZX3SAoVGr9XQQaJiSzaKMjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p6FWWkEPKb81QL66hTLqb5EAtamdXfXQYP5c8LefHvbmChFTCwgcR13An2kRsztuAksCLj3HZWNSEybZ3fDA3ZF",
  "key1": "4nj5ujfkVGSfbAibF8CgEbd6ndJJ9yd8qarFzAu8Bd5mQWZQUqBhQgPKYx18ZVDYBaudJeXeP42RrmyTb4Gq7aY6",
  "key2": "3ekyZiYbb8GZ6XfeY9jCVaRUac9ivmh5XJXyo5sS4BXZMfUi7Yvnv14TJpX1RPDmZZiiRqqcdG9iU9EyiyEQEPdU",
  "key3": "5dRBo55wdPDm4gQybxh2zEa7LybxMYiSbkkMgqdGhXZftTZzFJWpYoXNcAgWhHcTCXjJ52W637WzaSogVzxwYfa8",
  "key4": "2A3ZZPHWyVH4B5RvPQZoXZZvhWFhSdifXViNrwWABQnaZNr4dMA98enPYiEpJuk9ZH9EetLZhfgYwvFbc5zCQBrH",
  "key5": "UDHvxNFFSwWftRiJwYC5J6Xq8KNBZRVTsPChxnVvoP4q8ZhWZ7RaVu8E1yzXiUDgB4vPSWn3tuHAWjUxf3iJotw",
  "key6": "61nrz8j13o6ctFeXYnLCoJhAcumPMtwgUtdXrdGnnhEvQbvsYWVw2sN6SEdY7UP67acVkirkBRPiALkk9Ad26iga",
  "key7": "66EDygnZjsLcdeGjwEZSniiXnouzjhpbx7DFqq53H85FcPXtCBYTsjExUTSo1chNuTZ9FW3Y3CBmiJpnnqhAJ2kr",
  "key8": "5QkahrCPXaRqMV6pUp6bTPcx1F9PEubnmX275USjYpLFtcRtATpiVHL7dbWYduEQaixA23tDbWvsDQuNLX8MxmVf",
  "key9": "4Xofqsgcnd3u2VkL6n38FSxTsVMYvdNof7HX4X86DcH5SJfEiU6iRTyVg6gtxTzDCCfmeCfgRwwP3XvomSCwgz2r",
  "key10": "4zYWQMevCwzLAvEusVZ9dcmdXDsHCtcHxRMgd2Et7ErAMy1JQM6arhYCkqJkCcTF5opAR9ZZCeUdo5suqdq3bdcG",
  "key11": "CvQrknCX9L6ykHY6CPjEp1ZrEzCN18qXT75v2nx39dDvYimvgKSadnpe1Upuq8xSSsWcL6P5611Ufx8TmxoyqX3",
  "key12": "3PuBGgyT932LrTAt1eBvmhgrFMADX1pyziiUMasSkKFLSdjCZ9YbjNk3R1K67dyj653pEaMbDkbv9HWFo7ttnzaT",
  "key13": "3dN66P8p2HmMjBMYkBprFQLshR6PSC3bhmdXbD9ytnQyCzftVex3VBcEcGiC5MM4PSSHhTNokyosSpT3cuq7ezzL",
  "key14": "4DqW45rqRkAThUUoZ4vaYDqqEVXZNgMiAZS8GZhPcH3y3MT8YtMQ2spNE7peUKxw2DMH5vwKjZdyxFsukxckXw4j",
  "key15": "2eXDfdRoysrwQ6EzxRoBJzqEeBnkJFUQMM1mNLbuGyaBemwYu11JDRKVAkfM5NHW9tgPMW17A2ejVuu2av9XyfVR",
  "key16": "5GH8V3vaxLWtLtzCiViNphSVCPbFe2vp6MMrBmc6tK8vbB5Lp1bME8yHKFgwtrHeaayMzXoT4ZFwTUSXVxRpEGy8",
  "key17": "sZaECg23y33RDyg11xUjmURjCekAjMhdQAgzQ444nB8ctxjSMZcnrMZXP4PE9CtB43bWfzSLEcgsyXQFr9nbdoY",
  "key18": "3pT1qszpLAk78Fs24VDxhxcorH3KPK2HBKBtDMUvdxfz7MPyurJiQvNLwnZQaNQbggudbrjJ5kpfKF2iGruvrrWb",
  "key19": "gRsJ8KbrXd32TC41jHFgFf5SzNxNLCkMe69sX8oLEDWffiTpmer3ZoZM7T269Rn22jqsH7cG2x8mPAnNTx3t8Re",
  "key20": "4tT7Y1vYjVwN9URgfwS1ZD2ogVqdusiHvd56eNvVpXswhmZEWCcvXSgFKYU5eiLax7D4XViE5Ld6inmPdELv2km4",
  "key21": "ZM9VM6yC2b2wqSyQkvcm5CMNs7AXcmqtnMPAcwxnFtFZVtsxqx2XdqyJAimMAjVN2pmtzcypEWL5WVRNMQqCb8Y",
  "key22": "Bqj2yCbbygPJh8ayjvA7gB4pcKx6b1tkxQirGDZKh3GgHE2RHB6gperB15tjt5qpzQgRbHJGHqNwmZJWkjKdrhj",
  "key23": "5AWvrnVUPCitfh8nVEGV1yDAFHcbNLh8T5nWqhHmHN1dRGh6jxQNufMB3hnixauW241g4rCGxYDoWPbH2UYxMLW4",
  "key24": "XbNrJbiYSZifd7wgiZ7NvAEtoqTbFHN4iSuK4cbPGSTJkaHcfcoXbjXxgNKRfAvLUWwhwHKJd6ahfZdKYfPJgpd",
  "key25": "ha6ksizrwn1haZysijchhaau7YAtDg1zozt1emCeAs5kn47zjti4xaj2zEBvhCt5RUVTebhSD1vhiSyVeu3daSH",
  "key26": "vK4W8Poc4P5aT31SMhvtnztGToAmeNxJAXfvyDMqRPnd54obKR4xEeiKt1aeov7GQFUWHuPpm6LtS5wn2uB9wvJ",
  "key27": "2pHEaAk9EVxxMshP39eVG55jdbUjXaRvpbVsve1ZJrWjJMTyquiD7YhyMo6uvsHerB8mF3XArijZLhFDhUTwggUD",
  "key28": "2uLYo6FTF7zaYq48tRgSm8DULcFbaeXGiQi5XLtTacsvH9GikoiyJsv16mrNs1ponE7TGLP2ReZGcHVugL2PJ2qG",
  "key29": "39giQGJazpPLVhh3wLw53pdzHYXHZdNSoAEi27uuafzyDnxiwyUXuoxtsJKb4h94jTdJBmjWJdkcQm5EqjeF5Rhn",
  "key30": "3Q2Pd8asheKKYtGxJ2HxxNPY6ufdyp7WHB2kZJgbr275R9iGJpeCDFMAqApkBHQdm6M6D6isFgofu99Rzzy34z9G",
  "key31": "3u6uFLqcTsPvQccPQecyVvxUU8295EUYd2d6s9Pcm1kTwEThWaZFnLQsDjpVNbLdcRwyUsSgpiCREFtMjQkELVqx",
  "key32": "uwyGm2wYaCtEMAmpnQgK3v5Jzmt4H1GSFdG8vx8KoKXhQ7vzk24kEQCFGuFZ4PN3NpdJB7tDstKKqRm2rS84QBp",
  "key33": "43tvYR8A8pw7KGsw5i2Rw4xxKVnKoGfQGmsJkzEyvDna1Yqf1Z9rjvVAMCb5hHT1xJQtyJRRyEAYLk15J9WfvqFX",
  "key34": "5GQggkDuuMLpUN3HSwgQr59JydZb8zSqFXdfecjKEPfYrYz4tNSeugQFQqn7ug5z3kuBzAujxkiQcm5g12Bu86pW",
  "key35": "3PDmkKCPZBUqDskEoLwnKVA5eX5i55N8ffY7YKWqnsn4mEMTmuZeiSmph34TDQ9kEyHrb7Tx2Ek7ovgCspCzaWxC",
  "key36": "nZ1WCtTMn7a3JXa9D3QmQKmE2mBhHEL6xJ7h6V9Jbb8iZZwM3aPYk8Fnqi54xEiRm8WGiJNikewEwecqZMEpmRV",
  "key37": "4khm7GscGkdhf5cF7nare5JXgqjNZq5ypr8MoeMedgZnywuksCnQ1QPjGdstMrQ6MoA1Ao8TFr4BDGGtBEeCY6Rq"
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
