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
    "5kY97uZPQDXGGDJwRkTZksniUbVvzRWiXjNdFYKZ2rbrYctL8C9Q9KUTSx4GrXLwouqv6gJvF92jTVwR7CFtijuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f34LPhADJ3aXna5hUBKxN4k92y6LJZ1DygDqnFetGXo1YYZVZ1U4bCVmBzzDRARpqFnQ4wFctJYBbEW5VfWANbR",
  "key1": "3YZaJTdMPwxQ2HN2rvDVEMxeMXQdhkgQP6GMzCPHpgoHYKKZEvrV55DCBWF5qvDJqwA3V7ay3HBAi3E72AZCjrL4",
  "key2": "53QKAxZ1w3owYdWoTuU9jG2wJyJA6n5QaqeuDhTN1R3ZeQ29TL1CC1BEiyoFjLkuqG8hKWMTaiQyAAhAWddPu4A",
  "key3": "2swA13nmqYnMcJBz1NFm8VUeZqTJ7e7oKxGfc85HtGiVmU3GAkpP5Uo371NuB5mKLjhUKGVSadBcBetp5kMoN7Qd",
  "key4": "ivAq9YybmoQwK3BsxjtjkqcSaVgBPXUigWxCQeTYz2pRoBJDDQNPdvoP15xuMtVqAfquofog4LYybAmnftwVF6v",
  "key5": "3WkWF3V6XNXpMA5jaJ7bydPdmwp8R3FUAZsnLXGJmqocPvQeBH64reCxVRiF5y5xsHt9PignfQsrnEiQJrtDM6G3",
  "key6": "4HUeASBUERBprZNE3gd443mUk56TfPYy5FYJcvb5o8ATx8FguqTTxTwfEco3a65Exnkj8TjDWXhRhxYu1utGYvzA",
  "key7": "5esRh7u6hHHHfyjiYTc4jpxkn9xqUmjefGYuqMbnH8bPDwFDbPN1Aem3mnvp3n4hVFAb5xh3UA727TSRVseumw1Q",
  "key8": "5wfwBdW46kNTpAPaJS6yfTjVwfSxQAcacFqgk5ySchsQkGnLDLsRFrc5K1JeNTDLmBBG3pEECWoJ9Uh8dJcfSzzU",
  "key9": "66B1qpnejnzuEfAjpeqZRU5H9eQ3GntS1wh4yiqUuFQ2h1ovsXDenb19oynE1ewY1r8cgPV2XTUmKUrxNCYb1FG",
  "key10": "3NCT3x2JKAd3qmDiqScU16VN2eNQPknSrTkf3n7Yh8rWcUgrJ9wWFXgw4rxjUbpZJLqk83esBKqDTxAjmjvuqXRk",
  "key11": "2WdCE6LS9J9uyMeAwyGu74h4As35dhvLDoqPNwReoU8QyQZgKEsQhuN4vUN6KXo2AqjAxFfNAfaaNoxjWFPYAMu3",
  "key12": "2T1Bwd2DQb1y3fmBwHDam6Vph6tjpZLJun9YxhGiiG2FSiwz5ZE8XcXjVV1KTnHDCVN8fLehQA5VTXRbDn9yPpDS",
  "key13": "4qwNqYvBLUZeGG4RfoFdeK7eexKK42kFLL5zHg5hgjfN3kq6HZzMXTvVNvBDRD4hkPw3zTwWPduMBCBWbps3HMtt",
  "key14": "3uj2ykRF8pb2CT2sxb6QfhRxVw2Hn9qS2JRnUtLWYsZrfxXwaS8eCu1Sgs3h7wu8McPAz85wnE2FgRJA6EPwafAc",
  "key15": "wSb1i1QpCCpC6nLS23KnCbWByeCsjbcxismDKpqkt4LPtiSFdBLJAywFdtPi5g9DAQSAEwz6aeeBXdWu2UdKMtG",
  "key16": "4TGzzWGbeNdYyMhEya5tK5fSAmhpcVDaKz51QFkCaE5dFLGrLpVDYunuvhEQ6B167ZyFFofL3SHYtozKzrEe2iq2",
  "key17": "JKr9FaWQu4KrLhzuoMqJKdDjAgfGwipDFeujvrbaL5KyBajoLjAdQzShrwy9AnD8ibK7oafq3UZ5iEdJSiTgb6k",
  "key18": "537xC7FtVfiWG4Xvbuor5EuwgKo2HgKy9TD6EqvFGSzPFsoen6NxKigDriVwqTq2yYGsittrab6GzxcK7NWbCEbe",
  "key19": "3nrwAQsQgF34KaLcrb9PTKdxvA1NtSntnFxJ6iPBFRgSysFCmNLb1iPNUpkHD5b6Wp6TjzTxM3Yakm8Q4xKC5Jhv",
  "key20": "5PAnda79fxELTwaqwYKuiK3gjv2dHmXWapHQHqFQYKNWpgpoXPcKWw9FnXG8GfNbmBpXFLfnMxY17z4MWt7P5N8e",
  "key21": "8N467uiZQDnE5SaHg8cXf29s1z892Rx2LggQGtrkvi2NkFBUpH5TL6LznrvcCqpssuGJDdjqt7eFHP3Cgj6nYPj",
  "key22": "5KWTPixGcddrskEBuYFhZmBCBdurPYRniFB9jPh9M9nJFJXbnhd6s4FoTsVY8iciLkTV7US8WJb6wZXt2BgUzbbR",
  "key23": "3iUwoeqpdo8RgNUnHfKfqebQusn5dRyqQ9YkFM5CKNjeag7Nrxr6Z5hNV26cgPewfrH44azSHvq39MRS7nefuALv",
  "key24": "2Vk6Xx1xDxPRppicr2fWA3ubTUsDZszJoG5dCrkEAgQ6ZHrPicW55piewCbE1T8VnUcdYvDDXQ3DnB6GPhVQEaxL",
  "key25": "2nCAmg3iaSHjuRcUqiM4Qk5KhcEFMwFNq1UYkzNxvCS3bJwv4kZ9bBUaWFoS38KESW6vbtsNw5hautcA4R3To7mh",
  "key26": "ppPgvQRSAx25iSp5m37oMu1dVCtBKEa9BNpxYASReiGHbVWgTQcCRACMMXR3VNsBNtVsZPJ79gvrFSFA2ByD2kD",
  "key27": "4kD9H1Rfcq6zrRQohBd4JtBnHttmPgpeC24phJ1RwCqVH2Cx13z8YCfdYeTcm8vnAmhZG57MhyFwJpRpnsxiXnYN",
  "key28": "4j9KVBTsri4j7fJwDsPzP8wTVX3o9RuV2yP76Qdt9PdW6zAwBeJg52q5YqbPAznAeLaSstBjBY6dpP69Bzo5p5HF",
  "key29": "4kRAftmF6rW3MrQkUCpapFqiZKS5LVk5hdL4rBPuzmwRerWMpLDpzNLY1nRDjoSBc26Mp1kzbMXBb7Mr1FBhrowX",
  "key30": "z3BVuu2sBX7NE63md41EVYgQj7hKG22LtKYNnMgyziTT7HDacq4LZxAzU5eRH22em1weGg1DCqHjthmo8swvZYc"
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
