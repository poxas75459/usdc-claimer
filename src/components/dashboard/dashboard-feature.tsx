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
    "3vF58V1rwRP6n7mVmy4sC3uF2fWEGZPCMxxJgUYQ3GwJ5P4uZ5gAtrEtVAGzPJWNJKqzb6mgJPDVnPbXGFmXg4sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AJZCjdtr3fdMPGhAxL23erLyT9f3KSYgynXLpVGWrV83LTHGoeG1aUjeomacpUVgsfE1aSBQYTXgnyZTQKLHoMv",
  "key1": "64msy52MMQsgHvEzxFhH8oaQ6UNun2h94TnnEPHZTDvJ57N3e7BNo32pS2CFeN3dkerFFUGF1iZtZnHGZMqb691G",
  "key2": "4C3wtEzubSxq1oDeZWPxqHAaXna64YYWrnrCbz9A72GxDHcsJY6UwZbGzzmXD3fT3SoMe4Ex4WRR9YAxCPhCnpFr",
  "key3": "2ehPmfgVXh8h8JdgNbmx99TxRRnAZrYBmP3yjkPiyTVufmUuEFcvX56tdAjHnva516pBiTRb5CG5FLfT3BvhPyDT",
  "key4": "YXtxPbieHpVde15AR7sR1FRuvcqemiMdgun3GrMV6hxCMv7ZaotrkYe49kkVGa9mT2N2afqZnxzaPrsADKWmidg",
  "key5": "2aL9WRrSg7SfRyV5BqdtGLSo8nKRGMvcxn1hCN2ze3nL531eGZgNesBiVz3tHG3u9qUxW9Fs86YduRrkAy1rhXqC",
  "key6": "3NvKa8WkPxAj2F76yZNytJT1A6386esDwasGoPETCQjYfuiQJFRCDqjim5nmA3EjZm9bboh9UmLrk4CSacULoHUF",
  "key7": "38FxL7EUiRyQMyWKpXqEfx97DELMvqm8Dx9qHPnPEBRVmYUiVJrtx8ixDd4rDfLborGxoFgEMTk3dSxhrJQwjxGz",
  "key8": "2cRowj6mjPhu19E1q1zjRrTjja5Zuo46R37K9RrtHu6Dx3B7ynvLz273VhS68yFiCvKs2YvhC14RcqT3ZyYN8YHc",
  "key9": "5utTZmp9Pi3kKVWGowqLydW1sRegh4pz7LYnhTAZ7gYRAP3TK8SingW7wAUaHWRMuPkEk9gwkGMMJFKym3WigX3J",
  "key10": "4FaApb2BoqF5CZ1g4TDwZ1DNwv8oet3h6djvdBPybaDD3uW5mmVHiNPVdFcUKqgqW4XfBoehT48AdcDcEtHqkBMP",
  "key11": "2x17dPdAC36c8MQpxYjU4W2mCV9FxoSGECLtZe74iNATbMHLWoGMK4MUo6X1A7QQAwsKqBFoBVbk7eXqKxeoyiGW",
  "key12": "T89NjdeBxDTvBPZjfcpds1Nn6ndJVwrHELev7NSHyavoaWBnVxcxjGj9B434Ht3oxwfM5NQSzYchaPY5cUu2UtW",
  "key13": "fKCyPH47TU2LyVfuvY46yELD3nPAZ6SMmwzHtNdrSCmRnHT3UYUe3gGssaANgJ1vRGiunFguub5qGGPoVWjQG5N",
  "key14": "2tfmPK3tJryEQGa37pt23UeCW9d3LFaJVo5VoBcXo1L3oEiifdp3zJimv4cimtt7URVgqMWE3WxTHG1XfdjLFmVp",
  "key15": "64NTPxoXdu3DswZG5ZwiAMvx5qshH3bcPLuatc9cP78BwQ7PZL12EkwEtQZ3pjimW9YnN5LurVKidysrsUgaE3xc",
  "key16": "2YJcSEg4aT9YTCzVcPPpBkkAwC82ppzRySe4xgUouNwm8FSFhKuErM8kHVD3FPm9kVgcj3E3joAfc3GshaRaw2ds",
  "key17": "2hEqYzSDU7tamaTi4jLSFSjUesA4j1Go5A63DdmeFgu87drUjHNaJNnkiwWCsbemNgLqmBPKni9wFdJCkWiZFbEb",
  "key18": "3bmE88rsXnFvThUcZ76gSSMquiYTk8XFVcNnwZ9S6dzMH7RhPAyRvEvYn1iad9BEWUR2i3phhAd94kykdyq6iQKa",
  "key19": "5jXpjHWbqVi8BF76cVWZLTJ3dxm9sBWJqc32QqfcK1MqjTmR4vbrcv96UpZBWTg51MZk7bwSgbJFnzcWs8JpMYwx",
  "key20": "3s6vWHYw7VMNzDo8e5po96sPQTvDwyZvFsftpPKt9iTYaTPf1US9ht28j1BHi1bx3x8XydK2bHNgU4AdjmUWXK9G",
  "key21": "5VZDecg9CpEGsUJuJwigLj85DZcTWxhoX8ayyAFash6swJ7V3SjDoUhK9wvQwuYJjCZd4XE8ShGsRMFuK25oP6Vw",
  "key22": "f2cfahuKSKrDqebiFo5ruwquyc6ey8RQvBpM3attwMB62D2NBqU5mMtHnkfW3qwEqwJgV22GXyQzCXjfaxn8VPA",
  "key23": "3rkkCYJjEeV1vrRHxyuaGYdaSdsKy2EDwJ4vytR6GQAJoAio9W4dgo77czZhiCkMPusp1rHDPG7mAStghwbXmcwj",
  "key24": "5Kfy63DNVnbxKfxPmAvRmgDUsTXXTLrMeZDQPYKCmgHLULMsuHENnW151rYJSReXdqS4rkWtfSW6eYWRpbfqdTgP",
  "key25": "24E9v9UsCtu6qokpPGCKvZ7sPCFR84krtYuKHDBwc3p1VGdTm4cZMKknHjLHsRPMSATGsMNBWyLddmAfcUdH4wVt",
  "key26": "2tFegwXf5Sv9i5hogq4LG8YaC6EMdHuJebQr6NDY7AP6ptUJpacHwxj9n9vo75sEibHhVuvT6WfnCFAdsgvb2FWn",
  "key27": "4w11UocHnwt8TbPvezQjah83KCjraNtFfA76nLkfHicLawDnUgfKpsq37m5396rZrm1Kqf91wW6ra883RNNfSgn8",
  "key28": "5SsYHZ2fRqmPJfeWYCUT6GGPDmvmLC3da78LQdgbgLkZmXoPrf3nJ3WqxLAaGk5fvcByUYp2Rrx1mDFaoSzYotGF",
  "key29": "HMoZ77wUSxGEwQwpKYnGuvB8cY4q1Dv72mf2Zc7ASqyF4dmLZEymSAkXuwMaFEYYqpRhqKJUsRipkTNfUpZfEew",
  "key30": "3N4EmESz4sKT87C63MaW845Q1muwB5TFDAQGvNKUM6DeCbbEAWWXX5Dz23pH5m6gKKTvB3MvcG9HM7zcsaFZjm4k",
  "key31": "468e3UCFbvvrwU8WDAGW21aRw6Ew9eeGqtnNetugzEeWNNstTBkYtciV2Sf3QHVkgmwDCPo1BpowhmzY5u7qR6XZ",
  "key32": "2SUHc6765V5ohznyJrfkdDqiCgXk2BAUbfEh4UnMV1gWL7WVbV2dXcSamZFN5rv9QRPa6XqEq1KYMrzNW6H922C7",
  "key33": "5WkmDFeAz23fPc4XMH8iZmfQUbzuHd5tzGPgWtX2EtuQVxCivFW8VTi7zqhnmbXuaMxxXcZbuDS4AZGNvfYHZQe5",
  "key34": "2cAdWqgXweBxXUNXJSD6Jedmk88figfPcdgLj35vsNKpdbLJdHb8oXGzTHrSk1Eo4Kjj38cCggVd6seFPvLeV7bF",
  "key35": "2wW8hdgQycXZtoGxbWKCS2oZ4jkfzkvoSqSQwneGKNi9rWtrxgPLjJDux5VzoU5b7W98wuJu9YoCVL1qDkMHLDG2",
  "key36": "5rDWa9z25hC1VCheiyJctD5YihRPTXmUUiVp2sAiXPaaJEVzzPUtTCguErxt5kYRLR67UvieRNizh9E89FDHHqJf"
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
