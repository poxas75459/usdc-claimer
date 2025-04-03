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
    "5dJ11BPzpCEJZFg1VfidwFFUzWwVz2Qr29CAU2QcvGKd6UsVRi1A6GoVP5WHLATXG5iUYQZdHbUsfPAUN4wWHWNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HYPCncEPhhDQz7UrYCLd51aijNZhLV7vQuXZktEjGrwbF5iuDqAExYLSonM1cvzmxF7HVZsnMYnc9aTtCBLGDUW",
  "key1": "3Ck1YgHnhTNoCdFq73veFwoWBkvkmJuDUCzdXCDVLRuKhX6bARXKeSKmPHFwewPtUfh5WHitFKDJ8PAxcS7iWFMA",
  "key2": "5Nv4VMMzmj3dLqT2XJJfpS3QY9gitJ5fYAobGx4bBVNQewKnZNYUgfy889yRDEQAioh8op5TxhSiLqgNH6yd2u23",
  "key3": "24FX6wHoUENxDiajZSERGpntPkUsgxJB9FaTnQQykwLqFz4ojU68wkoMfAZ9fc5RFxAA7EujqFGTskFymcoYVdQT",
  "key4": "2ai899heHeNMgaP9wkrT82Uj7kuAE9XqN7jPdmXG2KWrWMu8DbdAzS4V35Z5JZXxyvkZxxLqnzkxRjV5nAz8iGkG",
  "key5": "KqipeXQvXwAWd3FT9ddpNa5PfMXP9JfQW1187ptLYdr776yjFiyEbRZJjCS2mjupVTF1u72ivPys2iZJWsyz2Uf",
  "key6": "3XbY5DBe8LXyu3Vn6StFhkw3GuVQXfuWQicMYTfdMEdszy5nb4dpszeodDYG6PPCXsMj5Pqz4hKGLnS2PGTuuNLq",
  "key7": "51Bjn2QFwebwR2NLFpFzVn8kMDvXhfLWjypRGFtX3TmPXspmHQY3eDMYUqTVgoTHvDEVzamjKPnoqmWMjq1Zc9v9",
  "key8": "ENax21VDEcX96uaV9VTZiWnWXW6grauLYTY4vZVp41brkHwDD7zZQodNwdWrFyho6pCwoQqsLk7Mo8C7C5CiK8C",
  "key9": "35wPg4soRR9dG3gJqFtf2XJAU6EmzmwKcdZS9K7gCNFmjLi3N1UQE3tggnHGrjuWT8ysgMDeCJRVMGgWi35R4RWC",
  "key10": "5MZsoeXLP9S1ie32k6qMronV65Y3sZXv2ny2TvQqUKtgGMzbKpW7fYX2SbDxfDTvPrHB7fAzNZY13cQrk1TQz9Bj",
  "key11": "dBgSXYg2AzaLrUcZv57irHYC2F4VZ3n8qQVYHggRpZZPi7A71Hr8WnKeUeaDJ4J67zyBf6Trgg1HdhABuSAiqgh",
  "key12": "2uwRF3rfP3fUHtCvmZmijJiNgerqfyHi4vSDWQfNGFoHPZpim49FCSoG9tLQsefd7ci2mxY1HYv7NPyoxnDs9whY",
  "key13": "4iujFPAqp76jEMMZwbNLn28QafQ7DJecJLGD3CF28LPLC5V2WmmjLA5A1coQ4ovjDDM4ooSeh75bZ8t5kxPXmfk3",
  "key14": "4tmmm5V3DEfKxo3TXd3T8cVfZXht5JKAGPjEPE2nA16ibMEtAvSoTwYQMChaxpwnwUSbuTfLJMnDpHprYvnkNdgu",
  "key15": "5CwSnZGwCgu4XuBbwQSuJsXwsw6nBEAAKRiJiVsxRaXYvwnNjLaARkPWUvoXRM4pN23SjCioTPzg2HvQ2aqzqCPF",
  "key16": "47oHtq9DSBaSL4XEgrXG9EjFfRoDkK9CSkveSvh3uJJHmyKaiXbxPPq1SGQbEJRYqrpN6ghoTiKCda8aFkLgsqY9",
  "key17": "561i9776VfFEA5ffWH2oGNQVmLCJFhEP4DKyrsZTWMLHsmLPKjtiLnwvHBsCsENn7LHqdrscMW9QmkbzNpRo2nxe",
  "key18": "yt4rhszH1WzsyBH2zB1C1hmuSzS8EASq7UC1wwhV6QtisiDF4uxFy92pS9Ti4ruqTkimgQGAscDVNK4E9vWCrB6",
  "key19": "54ComfRduEB2otMcuygLiy9yjGW7YhX75Mqjes13MFXVUBvHpbukNFYaEozzfqpnFot9u62w7YYmRUDWMnt5NCBh",
  "key20": "2VQMRQKzJW2U6QjWr8F1EV8YuXQPw7Xoy9hQ4V33JsAAoXur3omN2bYa2zrtL6XKHLzWuTjVp7oXqDcq41GNuZ3b",
  "key21": "51W6cf9C68buR99HxTTkTDhYKke5jBvHLbht1xCvDKhX3vPjm3tL6FwccY7th96RN4nZkaJTiEqSX25Ct1k5neyz",
  "key22": "4h6CuGcAf2HuNwHw9imthJ4qAp5uqxHbpMVsMJLLkaU3y7vHEGeDVuuh9h56efA2g3hcHDpsfDcSj5gPKYyevfa3",
  "key23": "4QoX2WmLUUXSU6tZHCHJauYoYove1ARTtUa7HYSXs5RRXKTdckgmT333MQahZXijZeUzpsoYoLwx1vmmvdV4qAHS",
  "key24": "3kUPypqTyBTSopJZzt3NgWrtT52ifosbR3dqPqSEYtBgijnXwBUAsW6biqFBUCKLRF8P9QPsNAEbuRiCbtTtCqSx",
  "key25": "MGVgKLq8CJ3N1Pa8pgPHNDA6ao3vRK55AcdszFLbAJgJfcb8vvJ9MJMKDEvvafUQqky39Sk7wGjj1DsH1aevKg8",
  "key26": "3i7L2iCVcfQJox5GWae5anHhHmeP6s9WaYw72SGxStui3v7gqB99jxvZgwe1AEjmWCnRCrHTQAJpo4NJYSw43YQq",
  "key27": "5VWjCt9QDsAWEDZKjuWB6qLxCNWPWtD8hGXgw1wpUe38YLdXCmoC71EePnjceZgZEUgq4SNLSebDYkzT9ipcHWU2",
  "key28": "3TnpjfHCkSwGbo681RjdH8Y6Ga8carFi9eNRhTD9ySUXN98EELuEECAWGauDe2q6J1uDdR4utYrY378u8Jd3ou5U",
  "key29": "3gvAz4NySMPJhyr6dcV7KnLUSSrCUjgbRGe33suBMuAJMLKJ65tAWTu8t3JLdoqVGAvXXaNPTg8jzePUjoHXcUHz",
  "key30": "oHNr3ZXRzmcdh7fDkWDKSMc8wqAc8H4DrxRCf5cxfmDoKwEdeia9BaNAYDi8AeinMDHeK8ToEqy5DjLVmv1LRDV",
  "key31": "2wYJCssjENtVdBaAihXBsnFrNfhcaLQuxcWqyL87e8P2Uw8WDNjwEPzR8NzUt9wsbJxcR9VsESqpv8oafmd5i6Ww",
  "key32": "4LWiyZBg1UGvWPvd1sWQj8GWfV4ArPTpVBedXF5J7AWxMLnwym1Ch9YCsMESbP13rf9Xj5Dh7pfqCq8qKcpfHRd7",
  "key33": "4SKwvbubPT739Nx4kLPUwHEtYKv1XBdrpP1xAeHDszQun1WMHZc9ncJ7G4faYpt7mJFETp3mtpcaooGAThf1Eg54",
  "key34": "3YxxdfN3YjXPbzsH38C72GRB96RVNvAdUU8RU2rWszyNpnCMniK7nABMH6CuY3aSC3XfHTmzYcADbncWMztgWrf1",
  "key35": "22rcw2y4ocsH9TeWXbYwXyBkySkuhW5YywmCMFg6Psw6JHW6UvX95bWuLxZeWn7UrxWAEC11cLN3mMoWUBXsXoLy",
  "key36": "3tAVj1ZjRBZJXCkgVLBpEnzHbawENmqadXCWv77xCbxbRNS8inxABFLWx5JVwcfevwAdqnhHifNVFkDayuNUa5ym"
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
