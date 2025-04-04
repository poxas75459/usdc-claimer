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
    "3X1vpmpA3qTe9BMr2ivgCZnuJg2fbFDqqwAooqjXM51pKod3aLsGvtH9joDSp4e2SoacYXLp7NuVaL8m494m5CMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kmEmw5p6zce3ZW5xU4tNrfAKhdKRarnEtbDadniwJYDkLZvNuSw8QLXeU41c8UYTqbhs49RiS8WNRgBFmcTP1Ub",
  "key1": "22i8pMtgTo4i6RNAJXBVmHmUMjwCnpEqL9iAZKdxRvkC3ujcqX6UffwQc4jt4xEG7c4BL1t4yStkKeT32QU1hnfa",
  "key2": "5HDAWmGoked1M2AM4dutmM4qH3V3SjhEnyZEfHPAhyuy2YCzd8rgXGG3sokatpiviX9KiYh3CEMYZqjaRENhDboS",
  "key3": "U396TsCP8D3rveJHLPLiiKPwffYQnyS15SkrtpExZTV5ip3gmhGTRZotjeoLecDDwAMGDLtG6KkZ8hHmAx6Fd54",
  "key4": "ShdA3Ca1RKTpUbHZvWyAqG3rHixo5dUYJM4XcPfJbc4kdAWxgVX6fPuqCMj1m9Bk3Gb1KVp35ii7bEE2mdHxt26",
  "key5": "3qdjdVVDFAD4p4BVJm4e7RpkaR3xH9SzL9pkik3uVJsWLfcXgmJpArM3RLwxE47UYpCqEbhWkozCwF9bVJ6PNoGD",
  "key6": "2egPE1zg49V6HD6Kuu8kP5kwLi9CKTyw8C1UizKnsrw84bqVjZLNJEJVDKMT6Q3T9zsFBE6sTuAC1nMhVcUqpEYF",
  "key7": "3fgVE3oE9RUV98SsAPFJxpkGBDzPRuTDP3oyag7vbv2V4CFR4JNhn5DVank4MCe48MwXNnuu1Wi3nczHcdB83o68",
  "key8": "4V6vyETud3TL3spAw6pzmwtjrgbMzremjcx1y4tZrKh6A5rXHdWZ9z722jGE36A23aLgMPdxhDaj1Ta3hLNMDEas",
  "key9": "3xjiC7eVhdAVhsHcW3XzpSSjewkMcd3XASLYsREX5CTPRcMhjiZn66igYSpv7QBPN66KckKGU2ZYnvHvz6NY2hrL",
  "key10": "ssQ19ZERFD67Xqcch7Qh1BpCnDgmXKVPA1CR3cvByS5WiB2TpNjyg1nbgjH25qV7Who3gmPihRHCw7sVSMQFTPy",
  "key11": "3KFJHJHZbWexSWSssyYCCYP84qnRMec7FCkQqTXS5q77dkLhcNbvGgDott7UyxerXTv7dGSdRAdEHq8q2mnFbge",
  "key12": "2gCXFVUcJUXrBsyrg6Q2pZpZt9DY5AGLVaVcnkX4wmmPCyqfTo2kK6ghGMZHXUtyUq1JheNFSxH75c2fRFCE5Mg9",
  "key13": "2DPsJzgDMynfa73QDabjzngd8WbSzia57PN8S5Em377zY7dm7uDKzpyzt3R5yYtkx2tUXyLSncBKyMWFuRgLWggf",
  "key14": "3aWcH3VYgvWkY15V4AJq1d1XFJWTLqJzys6ZqDNvyJT5Uf4ZudfPpou85E6743rKrcsyat4QWhZeTAUiEUjeYcv",
  "key15": "2KTQRorJvE4NKZRBM7mcjvjhoUCsQpan3sVWX4fMkqpiSYtrKD7gTkzUTMLXLp58bwT7UFBVYthV5hXnbSfjFQri",
  "key16": "3EY28QKoo6S3fnXXBshoXrEKSzvHnmdFqouWa8CN3rrY1EpPCEwrkYft6u4Yavde9cs6Fm1qC5bRGPfBFsm34i1L",
  "key17": "3QpmbXtk4RDXZmqaFwyCzZpt4NadLnajBp74EHUFXdJ2YuDg5ptu7jCRHNGRai24t7AFgYrqCJvwyt8h8iEGyBb3",
  "key18": "KEmoPsaYEZ5c9UDwRzPRhsfzRonwCMU9Y18dYJ2yzRGocqD76jwezTT7hDe6XqjKmZQzjUzai5nsajP2qmVitwu",
  "key19": "4kXNqXPzwZb37NgdUd5crX1RA68uvDKuTScpT2goCaSt1eySEiUunDFo3YHHmkHYVoAm8K3PRR1x8idr8zaQMbnZ",
  "key20": "Sw1Vf7qYu3J7qXKwDbd6fwjUjxURMPjtufMryaaGuGqPJrinjqW1od4Sobc7w8QhPi2dPrtHFy2eLnFDynGRPMy",
  "key21": "4DqMwN2k9eBskKLMjiiyaq7GhyCjPDhXwiXshLPLipmT2ErVqF1LFeaFbLYdr4PrBac16SAkofZDpbMVBkw2E2Ja",
  "key22": "2ouhVSUHXuknGCghEkoDx91ZE4MpP6YSL7zvE6zFozLkGLxwbXRbXbVrRub6S7zNrbTmq1nPxgnvGK2DBp1fVVxk",
  "key23": "qyDPgVjfFZjeZAkyppwV4ZxAqi1cHdfAQffcsJzyNPoPxnSjAm84iCf4mzr2CxCwo9nny44ZEpM9roWfxE1GPxg",
  "key24": "4hBoKiXYzssJBhbdhr9MYP7qk6px25M3fvh1cKJq5X2gVjDkjXQrtLc6XRxHuYJwnc8y3UbGbCzkMdJsh8e6ChgU",
  "key25": "41n8icmDNBCBbMi57CkM6NuCfgMyqGUP1TPZjqyc5qkY6q11PsVKyttztprf5gRSw1vPoj24u95Dmdg2soqRSvLz",
  "key26": "3crTJRBgRJPWFgLTSZaTCWU7txwLHZRUdVo7A4p5ncXRLm5W6ShFbGHL8XDro5G7aYuHksv6o2d4oAQXtjzA83ze",
  "key27": "5fnDF2jPMsZjnN6Kz7onDCNXyQ9NHkax795FBZjVxRiKu6LkvniPuQ5aAmR9exm8wX2RfK7Zmauv32wSnzqMmwsN",
  "key28": "3YhqQYjc2ByV8dizonh45inKRhKt8GPRwbxWhx79zCnMqNeZiA1BmQATJBT1mTUuiSUeRy7DugrdnA6K8F2XKmUs",
  "key29": "63YSqzYPWoPdMsxcbBRkihhhTRvFerKAiBoF5hjf7nzyYCfykQ4N115HeNK5KGr3g4gEvhS7Tm4JBBJ9fetKnQDD",
  "key30": "a9EbYJSPBFCD44B8MifV5VJSh2JGw16Kk5nVjHGEK7ZcrWPQmWVtd3CiPUp4qHpcsujkCa1fkVydVXqoqwHu1Hz",
  "key31": "4HdtdgWqum67j9UrV1EB1jWUrddEoBF6qvbaQtqqrTB7E3VYo3UCURy9HuvyRExwJFYyu1ktAPjhUGUZxAK6MCWY",
  "key32": "28RqLJYysjX9yVNskHwmnqXG199PmwUfBrR5WMkYe2RpBbmDsFfFm6ptDzhpYweL4Qyh8VDQbCYdodMKnPcWwUv9",
  "key33": "66LkNYoFPYHmTdYLaGHhAom98k8fqNhT8cKV8bvZoBjomjxzdMuV3wj2qoqQprGczYFfSHUwnZyBF9cJbQX8qdzQ",
  "key34": "2uuXfneuRBZ3anX5Hv9XHqDqe6iVhu1H1dMnUHPKAcTe2sXT511vvCkGH2tTxfprDAYzZWcHps28NMqicEezP5SY",
  "key35": "WhFdXqGrtfqgXLbZfXoFsi4f4GcUDVVQ9SJQfFTnM3gcgdHNn1LoSx4hZr37j4E1etLnVAyiWN9LvQP6JrbGuBM",
  "key36": "m9egexyqFhLzn5yHDbcTvpn1nM8XhLZZPPin6nVs9dK8D9SE8t5yU2tPSS8E43gyteGmSuKabesugm2x7hfhKHq",
  "key37": "3T49eW571UaND8tcLYCMphdbDvjv2gtrQBtBzz7MpoU3rP44x7doVZB4QZYxJw8vBYvThoLVYgyH1eHwwRfjUEvN",
  "key38": "4CyyRRkYsqiRqVNB72LJi55UKRZvHriY5yCKnNWQ6AUAkLnjHjAJ8jXPkst4aURLh9Y6KAHMhL8t5p2NQ9TVa1QQ",
  "key39": "59GgvN2t6NvEvsTcCoDhWevbZp19gpHTPZsfAhvSxaRmp5EcPBVkNZoVYVpJwzR3ZtzQeNMDVYfFBF2YWvXn826B",
  "key40": "255K3dGfobUV1q7U8NTsKXJuTQ4ozJaVvbityob4BUAUjdXkUdshd2ixJCyDpG7BVHLh4JaHDzvhDtBGUBS1Ti81",
  "key41": "LkVmqRN1EHho5o4VuXyCTEXJniWnrquN3hAtZd5grUaVSqW9RsT3QZ4PYJYWgZu3hwMSvfvn6o39wXHNTcZCv6E",
  "key42": "Y4q3wbm7o22fj5hTKJLBuGbvCPVBpxFCogNHxEP2kJoTMgmkzKjRt1gTXBVT4gmRSVBim4AQWCAFbfwSgdugTqf",
  "key43": "4oBhMDTJaqT5dEWpJnDMSCRjkgGxpWXRh4fMMXhCfU81VWz7RLx2wTCo9AJwuAS6LX1571pECKSaJySsJGzwoh9g"
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
