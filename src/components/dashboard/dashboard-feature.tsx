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
    "3wYV47DpfRH4qfCsvzB7Z551S4GHRKCFncbmXvUVrQtX4oicuSQZQzy8WhW3Bn662JeT1ZPoGpiqsqK39spWmGN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d7aRLVYnxdqiLXgrkP6JyNsHriKLWXfqhMHcHteMTMB9u3RT4Af9A4bywUJUyCdkegUEHwFW8vqddCKSVJK34UD",
  "key1": "u8RkMhQkj1dta4evHt5Ti5HiARTdsRZ9MmWADqQ8D8SgNKFDJfNxbeWKoxYF7LD7CJcMJMWVHX17RqF9Fj1GGj4",
  "key2": "3QT9rY69mvTaChGzYV2yNBUUhUxT1hHnb7Yoryb9idjo4Fp8hBQf9Yiuy9oqV89dPcY83WpncprSUBSEnjPnbsb7",
  "key3": "2mV81UzBs66wSKsxERTuhspSxrLsu1jPkb6LU4rKC6HMu7w8u3QcyoAQTN8Btx3QEo16aJW9tESKViiVJt6BTPLh",
  "key4": "5tz3aAXqR4Vksb5BdYGNQeDf4uJuQyvLQMs4GXEyYsvZ66NAMSCyrtB2WrQFNSk3D2jEU4i1bbWbspme6VJjHXG1",
  "key5": "2fYRKzeJNu87RY3dgcGk1C3kceoUZw54HLRzSyiVrLdPtYuG5AtSQXnDWCXhMyknYt9Ja9U7pD8tw9xUWBwDDYba",
  "key6": "2p1fhTZFDYnCFvna4xjr1FLKDG8aX4gReiRKTVTFj5ny7JQho5knq6UvCTaSUwnmi59DXAndPaJQxjSjB41chAyR",
  "key7": "4QnefJoYm2AigmjZYNxeyz4Di72qAr4cdM7CToxRCQbaHm1tS4N1hH9BFzozxHLFkcEGTZE1DQnLykovzUpbQMtS",
  "key8": "2iYhBRZ7yf2XTRPCSHKV8uZAAD1Rgb8iTe4bCPXxvJ5v3F6WHWbr95ad6LivxB1TWUDE17EFJwvjBtQtEukyZw7N",
  "key9": "3VrRSCsVrB9PFAJnu7awumkJkzwAHUSyvF6GXXRhZUeHQb8Y7j7CexWM7F5iNTroxrwSvoCgXwU8CkRvcBe4qxTJ",
  "key10": "qcZMuKV86GjHEFXyeBCHdhxUwuadBmq2ULf16CtvvRSxNzT5zbfDpYBTKcqyNr34j4aLRNmG3X97zCNdZZMMa3K",
  "key11": "3A15wQkFai4fxDtuHwVCrmsKHUsFyQKt4z3G3zqPiRyBxZrdve47SbwDUVQjXy3jNE5nSiF5V8gHDmzwQapqB4pV",
  "key12": "4xRevj8dUi1gs8wi1efdVK85UXrqdy472MFmQmV5j8tVWnhnui698ENLAJB1zpB8941fPwWjcTsZZMthgfsv8uYy",
  "key13": "49ZmC8bYYacvpHw2L4zkvG9Wa8ZjhtYSK9bKvDA7J6Y8RFMRb3isZM1FRxUkPBzRj6i315MFpfvceg1idBpwTm8p",
  "key14": "2pnsN9tN59WsMpHiBe7tkTWpaJu46SCqdjkUqBZzHTWbg8mqQ1Ys1AtKCVswpeEova6VWsWgaHysuRxFey3dP5ca",
  "key15": "2TMQYqgDf9i57Mi5STqZt4gureQegFTEfReHdqd8rQ4r4Ym3LD9bMKhCFtpwZCYg1KdMo6z2X6bYbGZHHNDXhgFc",
  "key16": "65HotzWTVjvscsiQ76iDkRSmKHFzkwTZCNFHap1HsWJvpANZL8wa8zqx4iRJoT6GX47SpWEgK3NEqCwiQsk3aFnj",
  "key17": "2EMwKHR3TfUbjepvcTRXxT2VoiMNS2mpwHRGfYpQttc9djCgaGi6YNrtzUyezdiFyBimnaiab8fNqZ9rR5fQUCR5",
  "key18": "3x8tCkp9MWHMsL93AwCwm9GTNnHL5f143DCc7agyvPc1UDUsNcdi9MR2gySWXsPNAvoQxyLPW1oRp6NX64AC7NUf",
  "key19": "2xmHQw8d46R4ce6zq46jvsGQkKRQJXagu4BzMDS8bbfrWvxNBPZ26KHEGwmgjZfyNFkqW6soiq1W8vRSSzMDpKxU",
  "key20": "3dvZsRXFxNqHiFHLyNB3bFKqRLSdfPoeqpFSPGLj1QJHGNuroJUxrwRtMRZ1XXapUyW4n4CnzRZCYqEdVVmjCNcC",
  "key21": "5yWgzYUpPuWarGxCt1K3kPBBPAKXpbdzZPsrZH4t3xe43uuC2WtsRH1sdEXoJUe2wJyHjLBNPyd7AYrd6cvfikAM",
  "key22": "3qPVz93DxN2p59SqM6b7eKyynZPGiyG8e17cifksAYzLsLhPfZVzdMgiSt25dLTDgmvvzLnd9wG9mwgF8QFCZvUy",
  "key23": "qfuv4wvJ1YdHo7aNcmkweN5YK5aWHuLBYVes4R7WSL1nFxeVreePBks38uKmy5V5MYQawHXcjSeguTvLagv4vqe",
  "key24": "2v9sSi5RG9EcMjoAkPSri4TrA2f3JfuZ1HBPfDKujJZA32yyrcnw2iWHY61kztq2QTL5EavYDBZCiZkM53G8wHFz",
  "key25": "25Wnay8w4mfNsp1T1LxHTkaf1Kjvkv7kXGvmLf5gFSk5V3p6rH37yvUGd9Zqt4EZ2V7N84ouJcvoXPFohPgLEDor",
  "key26": "2eYpsaDPn3Ps9Ub3Zd2nBaCuoYzcx9VhY6hTSCkrUNfMTxjnW66H6cgVvfA2wvsaWhaPa8pJjY7znpxYFamEdh1v",
  "key27": "5CEH6hxcGUpmXfdxeBr4kLz5xavzfL5cN1EF9fZSvWE5MzvAZpM63JVBTRgzecvzT7PCk1ZZAX954WruVXA3PECL",
  "key28": "27yPwXx6dipaBsTZdzfE16GZkkhdZZnNRkub2rVxuR1m29zL5VT7nRUFXFrxekPrRXztnbzKkcnyawX3twKSnNh2",
  "key29": "4E4bx5z7fnPcB3oH32m9rHZQzHojQNrcM31MEd6Ri9AA9MQEy4KHr7ikKNjwGfxiC67GjoZ1f6514E4mqRAkqV4Q",
  "key30": "34h8DmjtfhfE9BP6ErRkaW1mrPrw5atfihD5AoKcvAvHQLdjNmj11WQpnt66uS4bcFEpf9JytSuan4bFwvepaPrJ",
  "key31": "3C197fjxwNkVQmKN7dTHpMxbpWpR3pFBnx14KLX3AdPHGDkPUfaNVA2SqrxMeMoMeeDL287PZpRy7Jq4UuQL83RG",
  "key32": "4tBs8UifNQK8y6mQqa6bZdaR9hNGEK3cRBxDvbBX4eXmosL2ajtQdUexvv8yC724M65QRsTUKTjXe5P1cVU1gYg7",
  "key33": "2BVtZZd1ztZzAx5Tb9VDqTpvxhqwXWr5KXyqkVpLtBzxxL1sDrRushVSV7WA9Emwz3WYtRXXajN75uWPv9qGdxJe",
  "key34": "3g2LuM7g4hGz8HiWaMbADNZhuhZyXvHfeQXnjwLz4Q9VakGyPLruN75xkx3w2kB2jE95gcoaktsAtnjtSj9b8hmR",
  "key35": "2gmi2tBVfrit7zdgUyd54qKCDfo7m9qVbsoFZUvfTDPdxXCVNsLssuTcD4TcC98N1p7SL3asbwDJG4aMjMwEp3Fi",
  "key36": "5KzPvB8Z6dsdpoYpJWwXgsGJTF4AT2qNUfe396ESC2cAsohUECmtCYMGhnG6tevecamFxa7Dvpuv5bPpNnsaJyrP",
  "key37": "4db7xgpgGJTu8pM4FH49nnuJpujHt17tLX2SiMXLF2S3S2LWdhkWiPdu5YjTPWYYJh8rEbwevZmju97GxsQPeQUe",
  "key38": "27hcxToXfSxoB3q3YVzYVmghKcqfojWgCXQssRCyziL5QA1XfH96VxV5aey9uzyy44BQr4WcBx5BeE892EXCutdy",
  "key39": "3QsWPv8Fut2KzaPbHLsLSiW8dDwtXjbMzuqZPLLQpWfaNZpRtMEQJQLptVrzGiam5DML4LGAzrb77S6cQAyhYuYb",
  "key40": "2efcfAzHUtT9Srmjp1gqipQuJYPX15DwwoxW1vCnjuHfUJsfujJjuWeUsxYGHKAfmzX9LnrVH4ZGzRZAkM4T2gdf",
  "key41": "3zH1va3PNw46dPV9e6KNCK273jiDVzzLCRBNdBs5aVAVVEy9V1dncYdgVJae97ibhQT3DJwnPyugpU3ebyFhJeLK",
  "key42": "4eKx7KN7X9PwYi4jiF2hmnhvDVcTCxBu1CSCMuF2YhVdsH8sTpHcA7ySLNfPs7bTs1adDbrgtkhXF4VGBCEah94T"
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
