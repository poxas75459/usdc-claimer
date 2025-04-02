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
    "2UK43JVfQMiTMG1oF7dijfxDgdEMs5Zi3rTjCVyRBz1B3qbCyeNM8WmxYW95AAapxyobGDvgmqGdJHCvESTA4692"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29AiiYbXsFckPDWbjoszyRSEL7JkUdYivy8VQG78Jg3gqwMeL8JqCwqre3xnYqEKP9EYyWoKLptDegiSMaH3DK2m",
  "key1": "4d9YJhNAv92LoAHbYdbajQ9BGAK7yhbCLe1W4Db3DEVJY7Ugf527ju2havHAXYJLmhnAKT5GqsDeHuK9p82jTqKq",
  "key2": "2JPsTYV1KPxiW2uBgt1q4AD22qgsf1QgFrriuFJkX2cpbkMiA5tgKyjgxqRkSX1R5gjUng1SXtRfaYGkKjwDXXby",
  "key3": "4oJXHWJn2vYNhEJNx8ZTYhtMvptGKKKDCCqMVUbJHsBvnvkzmyNM8hPJ9SvfgRhBWPESNWnucLosuFKR9Gxcc4jF",
  "key4": "5j9TcFxyhjZ9sPqFfEikzkiuA9X9f64tn1kek2KRL9WpC5WwUvkKkpQ8oEiYb6imjXBaHkidzmMXDTHPr6qFit3r",
  "key5": "4KgpoLexbzuJbcHhUsDxLrygmrr5zc3FRRsxHa5AiXYCTh3oJR1UenerxNgzeoxEmy2khhcmJuxYbmxkicWQSiuJ",
  "key6": "2Wv8e9WMnSajrHQAZb8Nq74YKyW5wRh7S7AYHnWFfTm2wsCFcfYJJqjTjPG1G6ajVY6Jwx1PZwoGN6EyJwEwHrpc",
  "key7": "wfnDVoWAczjEurDGp6EEEGQRAgf59nyLPEfPWrdhgCk2STFncuNRXW8wzbiRMMN5hX9xk7taDoxuErACiHJHdMC",
  "key8": "3KRW4U5MtkyZRxiW7ft2AwYULSbMa93chAa5t7rDbjVeLQyUNkfsaGJcmbzRW3iNbuQSFzBSAeieqM7omnegVnWu",
  "key9": "5EKSzB5UC7NunVcEBvXUMnJLZeahLP3EGwAZMG1GLrRrzXXwhSKHyA2ra97b1TP8R412B5h1uMxhxo5H74vdWNkv",
  "key10": "6FHGeAajdUptzXZAPK5GDhEzuKwqHc264VWxNLiycbu2AsE12TDfpyVbigUxN4XNrcV9uScXVt2N5HpDVJ9dmM1",
  "key11": "5txQrpacQtzTCwbf8wHRZPgWDHJABe2M9fa65HvGgYbERMkAud6dsJuF5Xbi7qaLJonbQpkhiyZE16RHn2bkafX3",
  "key12": "28kQvPrdkySQcpqKVdJzaoa1VRvcbQw2YH7PKcUMoszZ5mdCN2vGRtrYCZ7JKcMZBspBoLEkzPyNyYsLMBzW2a6G",
  "key13": "KMGswG75MyeTCnRavcdu322N19DUPo9dAdJ9xZ8HdwNDq7AjTQJ7FkJVfW2thktvd4s9wnkPe6oK77S3ijya2rD",
  "key14": "4RGXxsVNEL4WHFs7uKc5z46HKqobx2HwPttz2acNQXMiahcqohJDVKmexHhjoAVu1vJEJ3yTYbKgLgsWyayQvSqv",
  "key15": "2VsS7E63dLmEXf6pjKANWJGyLkBTHzkwJn4jK861W9XK1GioWEsxNySZDs8wDKY1Sg5jWtWCs28Tg72ZaTVn4GmT",
  "key16": "2i3Dburm7Lgfqu37MsUYBJMAZHaUSYAtMM2zUtYtTUeinsbuNHcNqnHrQtUd3nGTFf2pHi2Beoy6BjbQqFGWow3t",
  "key17": "4Hgid5zACm4HpWTNcEMMFi8yMCQrd8vVpH4d1P4ZVNo8TKmHFetVg7NzG4LaVuL5ZUTSg1ukc3pA6wNFvPobk2gM",
  "key18": "2u8Do51pbBB1pwNWueeThc2ZLxhjwtfLEYuGFEaaARnqFoQWM6dKZp7qSAfujNd29Us3NfVM6EyQkyQJ9QoTpmn9",
  "key19": "3BgYAmXVpVaEdbNFVEVizUamCCeW8yymeDxo38fG9BURfmqhg6DqcygSoCqDTVKqG34i4DpQh5ipfahGuyPaTmw9",
  "key20": "wCiWiYcivTMmCzMxueDTVvHrihVBYhiH36bKhsMhd3jPq7ZePnpa2UQouscEB4hQU7iZyKdVeeGbQD9RG6eg1am",
  "key21": "5jsX2XST4ZW9fHeKoS2VVwxtqfGf29JjjBKGsjtyux2myrBZF2Uq88op4wL7A67WvLZLwxmcSGN4XSinrV3tQrDa",
  "key22": "q42szvAfvVPR9KuGopFxeqdKYBkXzYzvReQtc5GraC2R5cWQ45beyTYiR1KwFXsQXvdJGDbUgvBYarBbp2tbMnF",
  "key23": "2VepM3tzoCjBPsDu4BWPie6KocGk1zmBvfPaT5ADcnF2FuGEfaarTnb4nsUDVJmWfjfN5EakWXSZpo8zrBTR8KJ",
  "key24": "3vNwLgg4gPzhDMkYwNuu7yz436bRJyfLcafQFQ5nnr6MoQFhmkPX6o2Zvp6mHJaco8i9TGQ2uYJdXJRLogj9LmU8",
  "key25": "2KpuSRCtY7hLpu5xU67vNoa5r4bXpJeVQPXbyZu3qwSz1Hk2U2jEYydAuf167i3JjLWpgi9k3BCxMP8sbiZ3TM8R",
  "key26": "3fHx48gQCgNw1D5R28Nw6vqnao5Wec4PMAfyUDbVYwmreHbpEb6J4SRTHwWvj9nEpKwa7c4NynG6hFqLtqF9bQSA",
  "key27": "2sx2HrPfFRMFPc5aeo1UmTXaskRFPRyqxyYhFL6U6qFg7BYbfgk5bKC5VYRVfmvVhdeHgfm1J6fZhjP84HoBqBbw",
  "key28": "5xmtZFDtVZW6kdEhoUVYpSJDTcqmnm8FKCNUhe1ayZfJ1Mw7mf4GaXS9d3iiqcMDX1a66bnmdzHdKfvfqR75W8jt",
  "key29": "2xyi2Q1333seJ6ESf1WRbEiTCwwir5Srn8BAdRutnoKeAh9t82KJGNbJqQC1ig1sRySDGuVC8fsFM6vrYx3N135G"
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
