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
    "nhYr8Jusg7aajptyF8AX9VLnqcpYZo82bvq6Q83gRC7WufLdin1BPFAogrfAshPM8WQ6T1Tig7NvfMVeMRpbH9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24QdKxsXeRjvUqC18sFueVJLsnpwSkCpB7oP1TiyU6ahnzGGN7QdEpZAs99M6H5cU5bU3ZKXyD695pitmPB38cQx",
  "key1": "eubN6ZcaFhPfBCTDAsmU4E9jMPwMczZQ9kfhr3hAJRvbuogXWYhEADCXPSLQnKgTXtzBMcukXmUtTvbqE5Zcej6",
  "key2": "33yJcwqigVFNkHuaeWnt82LMaaUrFPubkpcs7yew5kR1n8hNj2pT4rkvH2YXXrK9MxS3HRGmKswVshE76ahc2q6b",
  "key3": "3ekmw2DevWhHe67czLEjSBRunxzVUSQcxx3HLogDgrrmmbRUApUvom4uHXko65Rd8fxcKeQbowQdEFexooZVG2Pj",
  "key4": "4Qq6D5NkRFDykfQnpcfL4SxovWhQXqxHn8cJvx8d4APBeytGeTv25chRzUzCFJ6eQ6Jq4Mm83QMBrgyYAVwfKBgH",
  "key5": "4T9SQnASCR7MBETosogxJNX13spmhZfnjJUghcBXbfDvXa9mf44EsfQ24VCKYZzaNx16ZjpMTtZ6iEkEknyQapkW",
  "key6": "4BGPpHYpUMywWBCTKDBNJGK7dL9ZYgnUiajuao7u6oksUMghgAennQw9KEAY38z29mBHQEufcqZNGyBbKm4bByKB",
  "key7": "2AVqiKZSsD5VaXAkKpVwnCPKeBbRTTrqy5fHBrbMQD13VrQJSe67zNSjbBhRnPD6GHpgbMph3EkEzDUafkCKxpXJ",
  "key8": "3s4d3NZVsAtq5oC6j5av5y83q6YXpoo1p7w7AC1HfAeiUrtXW65LA8tksBP4ASxNghowkNDnxhXSWcNg3YbA29r",
  "key9": "Ksy2wtpuuWHWiLqqPiGXjYwYkrPhNa7Z6mPy7WXU2pX7vhchMhinhJPrPusCUh7Ng5sYEYhWHe7Sz6Nyva75n74",
  "key10": "311n3Q9t61BZgvZcNhGUbbS3kH1PbKmFPcYqH1Fi8Vh91Wo4iMq8SzEghdnUX7nKbirdXTpTCMa12vGbfa1TMPPv",
  "key11": "2VGpuLJAYUVVVNC1Nwn84cYCHWEFxG1KeKKbYNryb4wVJxmrtBZzMsVeSARDFwn82jyPqNMVnp3NMxqmzUe3vXPr",
  "key12": "4MBU8duTyz9YNAKAUgeCTSBr9X81xJmpMgqEkTWQjd8T3NMvSQ57Zue7ijovAzE9AYFL9fzX63bJ9HMueo2rwsyy",
  "key13": "5rfQxPRsnqi8FutBhKVcbEG93neVpQ6XxgTCGv8yjxb3CqCk8U7dkcUhEookPPnLVRdaFSmwvtaLJJ8gAsMnMVJi",
  "key14": "5J52tankLqMRpNqwpj4WoqXL4dUxUC9tqW4ery22UAL4puH6shD1scaQ9QQQo1StQMZZUkD4TVMruKUxBjU52cGN",
  "key15": "z3QWqafbpmorVJwnLqmtQUaqRCafCLB32Kykfm1TpAFzfEikmp3NuSWegD8Pz1ZknJjgATeNjzEiVmz8EREVs5N",
  "key16": "4x5RLSYR2GqkfHUD5S8TccBumDj7uT3S5qj25UvnwVmNULCVXVmwLfRttR2S7zWRSZamatRU9aCNMnndkk6yyC2Y",
  "key17": "3emBhjzeuUVRcsRXPYjKYKM3amvSWcCkrr8HqZZADzYTZ5ozmb7bgxgjbVtJJLLVJA3SUyBSxNmxgg1bRFtfQX29",
  "key18": "2wVRtVec5YGNu3zw1925Ctd8r6KphWQp8UDod11d1JjWijiXRjmYsaNC677PxXhSDj6oGL5mPX6drYejXSRjpfpk",
  "key19": "2ksH6hHLYDBW8X5qKiNtqVih4BwZfvKrwS1wfnivsxgYykeCezh5e83Xp4FyWQ9cYPMxb6JtXXdUYZuNqPUEi8P1",
  "key20": "5mvDriGKtXXHEQgbwe1bB3S3ECMuz7XE1U4GLULTt3rWKpL6auxjbrY9b3AB4snpP3EaJxmAqnR7zRK6sxJyDpgK",
  "key21": "3Kadj7G5mzP4GazWCMzBXHvya8VS7iF4gRPa59aV32EFuwvb4sBsmFYgkQo4Tj9FfCmQoLMkJ2V3Qbueu4pBXgVp",
  "key22": "5WxygL8QCPGpQ4xgCooHqKxW1g7huVj6Ak94ZhJH5zw6CPZTSyy1iumJHhtq1vvAjM62gRQ6wXZDFYZURGbHSkMf",
  "key23": "5BB1gnjG8ioQbg1Cyd8NgHcnEfNdj1ZsrjLqUk4umFz1ZFeXf74Qj2uS49Qa6cZAZc65U2tPhNKHYqAhczdQckrR",
  "key24": "2ngQM74YMH1z2NQEo8sR82BTGwCbYoYvaX6YSbPbNcvR3tRQyfE8b2X2FCzpxVXT3YbgJKEhu41VSTSBLiBrBAF8",
  "key25": "gQT43H1kgdabSFeW1BRzaLCxck9UMTBNYEBZ8k1DhvNUvnBNnCsnnQgrVWg2LFMPq2ANQHZvBpJpU6sxYuxcquw",
  "key26": "4CphVgNiiyyezhhVpY3RToSC49YB7jwkcQwXhBUJCnaWmc2KiyFdRpkMs3WQTLUtHCSZD2H7shEsHXhSN2FxeH2T",
  "key27": "22fbKC2QvurtaZJrGHrcTDE42BABr3BRFE5JPXg2AVpYsTXwjXay4eCtHFRckDf4MgjLLZHG61BaK8PmHNfu4X5j",
  "key28": "2boXTHk3p7hsaGpJ8GRZrBhicpLVtifgsAcFk48aXLhx4TYRvwcEAPqAmcuHEijoxpQNTQiVdypoKoycuyCRert3",
  "key29": "4mu9JoMoVeosoUWpezBMmsmS1jv4iA9pU7JX9TTELqLtndacc69g5MGHAy5A9AL1TbRvG6agTPZb3diiMRgNk4sq",
  "key30": "8BRHWGSK5W4zPMfo7Ww4S6WsZwnqgrLTmmKw9AmA57FziXRM4XAV6ZGj7QXbmc9Hv8WfM1QcgbBrUew3B1qqp3J",
  "key31": "48jwtGG8CBx1uVRDvANKRcC5cy2XkXCoN4h9B99q5QcJUdEfYoPpPF7nEHHgWTuah73sJz5nkVLHNF6fXSEdQEpb",
  "key32": "2MGBoSa52k5GRDTWvwTbfECEE14AzkQB5MKzwNnp8VSq7PU62Zm3FaU7ScEUu2sNit6SiP2oMRTCv2oYn7mdyWd3",
  "key33": "5qLLv4m1y4CTLN9hzcwpUtavoXNumc5MLHjL8HQo6DfvpniPxXzpHF9vNJ1dycNBrbaNLey33p9xWiSvX5wB1Mkj",
  "key34": "5d8yNgYuc32RXiLcUs2zxUzPo6buutYh7xqAX5SwjsT2yXARcLqacumnC4Es4CiMugCr8JVgT82jxnGc7Zh4bCvE",
  "key35": "5XdhqoRyuFxawgzmrqzBQwY6MxMcusnL54XaQn7c8v5sGBRTfnT2MCiLnuBkmfvYVAXfwEndDaDduLSdpBBHMbNi",
  "key36": "2sBYagBNUjJy4sNnYRpAPbUm9T9z3U2P2esPws4Dp9Jau9mMyAY5iGEV6Nqf9Ndh4hE6BkW1Uj8bYEjbiEHr8r7n",
  "key37": "xpy5FwgaD1Fgj4xFk1HQuAiXKfmJPZtmF8rUBubQMw6nkcLauKYr4dAjQVykgzyHVhG3giKeCWYUmnQ46cogAmu",
  "key38": "dtvTvXRWs5etkKwd8hZUZPLswY8Y7X9tqpbzKsSNeDhdBiwEcNzd8vkLWt3Bgi9P9xAxCqYgatTPBfNysB1exqu",
  "key39": "4heSpwZZ4JKDwy6NC6eUG4zoDyaYvcXcZszQuGx4SGi6VNAjXZADs4qeSiXLVhkzpzzxtyKeWZySmLJLsoCsMSkG",
  "key40": "3gzg3cbR65QY7askkMRUxCg5jYpL4B4uFUay4UiXBFsNbpjDMYUnXUGM1wed3vzdzMQzn5vbWamgr9jGE1E3kom1",
  "key41": "5rBVoqJhiZNadtFVZumdTH2qYo2Kd2r1Va3wuCrCAeiUxc8SN6WSD7FMycz8HRkVALBVW1aVLYZJoqwTsAXzwD8A",
  "key42": "59Ua52coKcMFoBivobDhbUj9res2fPjPcGyRdL72vDZrr4JcNLX7z2oCpUKw1J328R19aoC1UxTo3Vut9ZG88X4c",
  "key43": "4vMbdoLpGxZQgxGPv9JjbXyBhiZTaHVPLyBJPmoNmrAwJburoxdUrXQ4KeEzfafTQ1TnrxdM8qaP5bFrDCkpn7AM",
  "key44": "4KYixRE4EFYzaCfUR5XrHfvHLCPCRWFhmqkYUvYR4J6PXw198528X8Mj5L4hxQVBpR8NUjq3dQvhvL6nUVAxHr5x",
  "key45": "564izaZZD8e5CkPxNxaqdXoB91GJPFqzM5ReCvxqGFDZBG6C3Gt77TNegWtf5zFP6ZqZuPet5Asbs3cEFXVTgnnK"
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
