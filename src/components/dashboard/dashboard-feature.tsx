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
    "5UCN48UzMbhYSiTcX9kcmZQCsk4QPca3mBH9HDZDvpfvp4WwR2HMapjhAk5Mj8zkwrjyWi6kUzZNNkJLSgDAaEZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aSvzUSuuLryFrjndv6ZgY4xymHShqoWDk4r96Ec7Fry4Bmo3CD48GcWfVR796pK3iXbM1m3ZCCE6yuYZkEJJZJb",
  "key1": "3dgZ7yuB5B8CChrJMvjAsix3oEgK68TNbM3s8r9roRWXULevJeE8XjVaMEb5SfVnNYBE9gMNFDtXAoYrAFGGsPCg",
  "key2": "5cgMq97KXg5iXu7qsusUKeBJsBHW9JhzbMMMtXnzw5K4dLJFE6TknSehbJCRPdZNcLgmeUwFbWBTaygpHC2b82q9",
  "key3": "5cyzvPVXDP3SBF2AESXEopMeCjrUhe6H7aCYE59YkBGLCfJmWpvj3Q3a6aUBYGsyvNAuPm2n4s147foiD8U79jT4",
  "key4": "5zKq16s754VY6CVYPFzRGWeNP3MDSqhhWqBdTm3S1doqPHb4rryQjYiggxUnEErmKFT1gSFDWwA3CnHuE7mpxW9e",
  "key5": "2YZ8SF4nHpeE4LdYYhcRqYpZhaJ8NupTm1VJn4CGEdCTKvVA8QoUSMa8NFPAHEXTXKuGjwdxzKGpSaBxcsPsGmS9",
  "key6": "5HnaBUxoqtdL8vKQs5intDLoWNRTXiKKBFbL6oRS2gbi6cB8rAbx6NzVB9RQ2AbTHaEWqxX1HU3omuRWHYjskSyb",
  "key7": "2PZY2XsB1EEpBXPacNWcstyJ7NwNf2RfUJACnaxTauwV83VPTjQ9bnAQWwQsreh7pF7mzVHMHkdvZsFN3eipUFyR",
  "key8": "3d5a9Vws9XgQXHZ45KUm2YoYFn2qRt8iEbELx4XKGwgcgHPisBcqhfL5WcEiceLsCVTUv1rTtdsZ6AmhCpLiBUEx",
  "key9": "5Zi6HUT6AWQTChh4i9wHAs25fmUJySPQK8t8QDKVRQ9hmACeDccvdY3R1VgQ9CHjWZqTRaBSsWqSBBr1eyeTfAUu",
  "key10": "59MULpMGGcmZ7dHNZPPru6EomEmSR1AeQk8JQ2MSSjWTmkaCu2WYAYvWYj8u1DcF7s8VrwMKWwntopg7PJ8JDTnG",
  "key11": "84CJ6JeQDe3PLaLjCbRQ7V7RH59Z13EhCaKgQVAHoZApnrf1c5bG3bgBX3gHVfqbVFsF2v95ySoDN89dGz3hPRG",
  "key12": "3gDRpcnK19bVyP5hToXarU81ZAVp3iQJ87u9smN9degLnASLpmZQfq5NnKxNB7o5uWevazr9kREC9zMAfge9E7cv",
  "key13": "63zQipvj6mkCg3PXNPRsE2smQtSBZkYsCuVV371TKWU5GSv5e7maeumx5HFAxru4cWyTDUfDArUhBadjZpbxtytU",
  "key14": "2Dcazt1MSsKGE3wmbDFz9w3DNNxYacaCjdDEE3xGFLo5YET3qKi9KwxtWcFwKgTB9D9gJpD9RPnfc1aDuvE8d6uZ",
  "key15": "BSYobumvn5HAKj8oAShTFyStL7mfvznNJcWxouKWR42CLK8hRJM1TWG1AE7eXNeqF5JLfviimYH9nA1ztSFcMWw",
  "key16": "4rk5yJr6pFvQeNDvvGB3UpNJzqpZrmZ2yN2PF4BGAz3LLQTAe23VHhcj1bUz3PxLCLzCkUSc24BZ91eKtrMqGsmv",
  "key17": "2gDS4Rv8fiJpDKRQ5fTHKhAKcb66HMAUw6AUxngZVVsRMP8VGkLwS1SpLU2FKASUGtAYmWWiwiMJnjUcKU7VTrsa",
  "key18": "3EEYVcakon8FmnEfMpURMzcggmM2E284DuQLw2ceLCurL4UThDB64JPNoCskVmdGng49pnizR5xfFRhhpzVzk3wL",
  "key19": "3goi7DCC46jG2dduiTM6VkooSkFB1JeLtjZ1EQ83ibPZUKRHAL5ZWmXTZkeMbmduhVRKojfGZFseqexPhiB3avVP",
  "key20": "26oR1jeP2yRXRXpxa8MKfMVN7TpjFgXy36EUg5xR3PeL9i9SneyjQjdkmLnn2vSgC3EUkrHd8tEbb4yKDzmb6etK",
  "key21": "4cUSutHYBEWaJJXwsd1q1MkdDHY9KxQm2TJZA9KQXmKyCzBJT7aBsUTrsY4ySeo3apDnVen68EDnm7jdCadLPcZm",
  "key22": "3fYiKfpLpMjAxdnYXV1oV9Td727hBtVYFUJJJdxKjSuRfT72LMtxmHLQh3Qu8kzdLmmdDXHCL9SRm5fLL6JZXDGc",
  "key23": "28FpuXG3KH7sMcTXn7wowu4xEbDq6xUBte4jh1D7CpiCGPw7dKA7j2hDhq8rhckpbmKuCXBDrpN1MMe1vbSKAoie",
  "key24": "aPrX1v53x6454bifjBGgq8nb4hGSuMGHHeG38WjsjzEW83z7aD54ai99sH9mNn57b2qVi7vMwAQH9CaVZAjvtR7",
  "key25": "46YXAnp8834qsk9LQsPUEavSuuT4aMGAqw3B5afTFkYUC2xCxeABbeB9h7FMxqiU6y4M3jBc8tMWf1cTNgbTQYUn",
  "key26": "T9chfpJqaufPtZnJpVSyRwXMaDhGhpFRvSok4tGU5qe9G3CoRiN8bh2EePj1VMTHNSCSyqmXNYmWeGwrUyFFF48",
  "key27": "2YNZ4odz7yQVuMrLN3tHUvNgik8PBcdt1jatr5zfLBmTJhGAXEXshUVxLj7PayaiuZHfNgDuXn5RSE3LSCf1W7sj",
  "key28": "9S9i8FQNoUfHZDH7V8mbw6qFYaEnndeg744rnWxqsjtjpjkuaNfy8xhjioSWjsbiN5q47bpKfA6k4pavDZmEME8",
  "key29": "32R8yjkZ28GHtWjf6CB5x9hxkkSFxQTVqy51gW2yVy6n5DXQD56aW8ZfNXVfHdsw8SRwNQC1KdiaG6tfNqAunTeY",
  "key30": "2MPvyjyuYbaJ23gP4FFz5ByGuEcDF6a796sTtwkJzoL21fVZ616zN7UakscGgE3vobLDJ3N5dgm5sZkKHmWcvWW6",
  "key31": "4rDwHLo59bsEny6eHeea8pL7qrmWL87M2jupU2uF8frx1sW2X6K4z65KUyoRuqnNmunZGsAMSTaKSUJ6bkJVqibn",
  "key32": "2e52iTAGYjExCQzFFwN9iskCQAbJMZYXQsKGQjmPxrjSy1YLe7WLZBGMiQDDabYqNLmFBKuMLLvRzqELWep8ZWzr",
  "key33": "5Zg4yft9YBvHYoayZHHAYrj6wzZiYxmHm2LubbcJ3eDf5MC3sy78TBSNP9XBdcfWq9Uxh1GJ2zDAK9aqpec4hqzM",
  "key34": "2YRfBViHqSQi5M8TVQcm3NKmN2iuSb1ymPtE3EqGxW5igPGEaNHnmP46tfjNRmXEBRTVRyhu7o23bPaqw1CMZ43R",
  "key35": "5EGeXYcdqxNZAZLBATGfZ49MY7LZYmZdnc16Yes8NMuwhbhKVuhXGaje6oBLTMDJXGnRZNocfFEXBC8tJMCkFobR",
  "key36": "5fpPL71dB8p1y3BXRSk4QhbEXcKpJFyURdu9nGncNYappCXXh7xHMVTFJPBdeZ72ySXPe6CoqQqdWhXt1kvxjEKz",
  "key37": "ae8yTkuipGEbWrjnAKJ47eFxm39MaHwYRZSfxqRwQMR3jqVQbeSRZ6GQg1Tde7y3MjQ2n8KhkgMz3KjRoaQrJvc",
  "key38": "3DGWghzrLmoevNQWzGFJCChTFLCMotpZufT3mdeaLx6FDyBiq6xaa1gQmtLzERyi43RWy8s6oDDZNvZg2r3NCMbB",
  "key39": "4dnnfJwMstVf3f3ZuzBnyxEU7RpquoywqSraWM7vV2YGBr9QPaQZq44qZN3wj91uW7uEYYsWuCn2fy86h2XwsShr"
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
