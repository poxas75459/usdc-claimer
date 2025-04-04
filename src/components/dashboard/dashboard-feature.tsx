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
    "koS5JDXtF5FJraRHESKoBfQwcQRCiCDNBUs1vxQH2KAt1JFpirRDEzyWbsFtXYcDLF2EM61csfKgUcckNDtpAHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTaBcXwaFo2Vr9aHGSmgKCzS44nwUPSfvGKbC3qtEGF3HkUvRz5rJJt1zNzzH9oC65S2S616G5t9WxmSzw3M6Yz",
  "key1": "2NirzxQHKwoqTUZZQ5vpyzMqTNs4tWgg2QWAA82MTwyjK8CXSdJ6zVALyFNCC9XtK7BCoF3Qshx4rYyx6DQHc6Gk",
  "key2": "3qNFSsJ8PvbGT9hK7pPA9VmJuaP1ESN2WFvLvQiePDxVxA8C48T6MXTY1sFtSeV2wF8yKDPNAxgtG17nUXovosKS",
  "key3": "4XbvMLVneqDGtzuQR72gZoHjEpaeFqYkFAQsm2J4CJ4b1VWbEiSi1u37yth65YDkSYwCD2BG8wWaP9FzHBcCRVhh",
  "key4": "4vPSPDusRP7Q85y6vW7DsKabpGjvPr8A1uurTgmYWeqMHC5Xc86XfeT8NzW4LJaEvXPb3vzixUrguWrQMRGGJwhu",
  "key5": "2CJ2dGvoCAf37sdQAN811DSnY2yYr8c2HrNFeNuCFyfA11ZeR8HkX2uQQLqvjo5WPNqbcGJzcXU3Axqgc7AytQ5r",
  "key6": "YBesrVeHiPHLPp1xNAyoKW9U71TD9mS71UspVeQaxgG5dWZqwt5p4cBRXhAiPJvfYFtxi7j58TjkfLXB34AAeCW",
  "key7": "5BCxnKAHenL8Cuske1gd6JT2DmRn8cAe5Y97JzGo9ZwDJFeHZHaxhbTx4PciBaWmKtBu2kvrRfAUC1Vdn1Feqqfj",
  "key8": "5t5imFC4yNaCJ61EkhHjEwnTt3h4Kn9dyrGm1npBtpwLmjaYHpM6oS3MiD3r1aHcpLbBqeGyqt2hDk8SW4eMAeeu",
  "key9": "2rcyYgCbnYRj4sobczFkzep1DEzjHDGb2Dde3vHkRXaRLo1KMWmTjTeBDpaXJELuGcgkEXGRBBc3M54HmFKtpZRU",
  "key10": "2d7hN2c9A2pKMW7ABgb4kt5dypDQ3ABo2MsB8ms9MfeaTNvR7BP5MjX2CPexxJCtv985dL5oqLV1FYY8Y7KRhvAy",
  "key11": "5fUtYESAeZrWs5g3N7DrPqJRhEpNvRkuezEXxdZNTAHu3ikmJTBrwdC1p3gJMhLkyVQADbMrbGe2BNznzL1fMdS7",
  "key12": "4xxy2GbMULLtyT1o6jKEz1qoYg9mccCZBnDC1J21q12nicuvjby1KiYo2YR5ob9QFt24zsfLTtnXGRcyujsLbR6a",
  "key13": "mcyzoTCoRJNkKpy66ZhaNpZn3YJqByJRVsthuCeo93mATUpVrKFnmadKQEgrGJPxDw5UtVrrAw1jYxaC9i2yTWc",
  "key14": "45PZi8g1JpBv72FRfWmc2KAxsccn8ekjEetR6u77LrdWH3dXfGFrAarDHUjNvrjXSyZKYUzAaFxtDDEwKoBvJJBD",
  "key15": "53gEcehQeHfGVKBS2R34EFyZa2a5PX2MZY3HoMYREzyzKWe1YpWKPFSLVGojkKP6G13fqEdNKjT2QbF2bvsAxMXJ",
  "key16": "5GMNQ3MCGU2rDkjfC7ZWzWVK7j5kYdwwdhf6dM1H3iXaL8RwnYDNsNgspPaSHQNGqw734LXLdcYpAsGqyPbvy8VN",
  "key17": "5qevMuoK8qP1bTVUxjWFaLWyjEyMz4agG4jCi7exEFecBGnhf3u5jNVxqUJcJVYsRGFrnf7v1cpf9DHJdzeNfHv9",
  "key18": "4bJo3LhXga4tKQkCAgSMBkZ7DVNGPkmLYgtF5awVkp9SerXxjWN5eL9fSgqx42i1kW6QTXCS2CcqkKaXmwg1cbCs",
  "key19": "2QVphUpwzQernGnmfJgZ3PEBsqXCJXpyHWQTKAimc3RhaHey5yKz6aRDLLH9tAx5PmJ9Nd4W8NnFhxnQXbj19LUG",
  "key20": "q6TP4YAehefkL3Ahrp5rGc9Cx6AbWfUF2BNuVd7jHLhiccHA4mzX17Ner712TFLYTyybCjNNqPoDwAcmtAigqZ7",
  "key21": "5YRjoML6sgQZ6oHBWehKwFoJdtTm3iJhZyMhKBgkLF87D6N8tjpWiGwaQgZwT2uqnARrKaDwmBuVXczaA2xoHzYr",
  "key22": "528fz1TSn2PCC5oQgEeqS6GsMLdjeSySwpDZAoCsLKienLxbrJhEyF26b3T8DtpMCV1fzrnDuVyNbQ1NbUUwMFvP",
  "key23": "C8JShSBn7wEAMdhkqEUFtLQDGLKo7R3gG13qtaQZ4bXuM1R3ioTkXmeLvHZN33YW82MZtM3CdcrzfBfZ1Cft3rT",
  "key24": "3WFLVmf6wfPmgGFAi7AWundxuUN2DY44bNgjEXSxHzjzbLv2pB9Lx3ZwuVfrGgfGrZy9FTEwH1ymiNXtXC3QjpUx",
  "key25": "5Ej14zdvpd4RBYneV1Ptxx4ior22P15MNbYfXsu7DC69sY1YHKwBFA4bKMzPWk4wktavSNLRMRkcxFEw2g8conoa",
  "key26": "4Qs3dujfrZrrg944ZtX2FzdiiRd6yC33x6WU3mtSDBsGr2rDpJZbccYjEk7FhXy6Sybd3qRe1WXGuh6MwAgtNTwC",
  "key27": "2eExNFWwQvTiMvqGSNNm19G2aRMsaeXs2qRTqpfdYUbP8x3NstD8AFp17n4ewHyM1zqt1Rp3wePp62Shh7roPN1M"
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
