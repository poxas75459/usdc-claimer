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
    "2ao8ueT9n6w7MsNGSUW9uzuSoMTdd9oZ8G4wkZwsehfTWpd3wv7etMr6VEdBtotYyVaaRRLKi9SqyYeULAQVjuo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qkxuvNDTK6goXDihwzvnJP7siqT8nfRTdmhcBrmDQHSoD67Qd7XAZkQeMRBa8JWxy7kwx2AMR8Hiqc9Y3QWRc5T",
  "key1": "3NhaJRKkriUFi8jNNi9V9fm47P5z6LaN4ekETbkeoQkvdrP7Pz29oJeNBwoEk6AiWV5EBKYPZkbAMzRbqrJ8iZr",
  "key2": "3UW918CxtKeS4XRYVLHye9CyWccBzBidvrUSzKvinoBqbN3HQNaJ99piFtjnVVTwmr3zoZE8BeQQNZZjg5VKBwt4",
  "key3": "zB2LyYPGgPouWwmuRvUYxeCmC2UE4F3HvZd5cd4MkYXvYMy4qzUpBkqVCJemZF4TTPRAyoH4pFs9KYrqPhoSirS",
  "key4": "3sMKZK9WbdQMDA8Gco36hBRKJLvN2zZ67XAfNn7EQtbU71EwjffuGEs88LGXkDFQi8up55riwxkA1y8wSqvAPdTH",
  "key5": "3cUMK5Hre4rSjsv8WXs9iqpRgfHAWkg5szqawBeaChPJAFzyKTSnPKLNi4ciPQWMgvvo6eniqLZPzkpjnAN7FnJa",
  "key6": "4yGEzJdmM1sWXy1cezTdCkJeCyDdvcUTJdnQNoJfYYxkgS2BepMuUfosnvhBuZfzqMnGkMxinWhbZKMd6XXV3yhM",
  "key7": "5YyGzZmQwNjAUaCQqwqFvskd3NKkkD4WgukxRmjJ4LCDf4DQavFM63SuTsRUm7WcChuFGKYudC8xWJZxBnXCstCa",
  "key8": "33cBizWDpv9geL2cXhjqo7eaD48oaTgoS2TTYuThC9Vd19hdA3UmbkWpCpNFVXmsRPZY4Pw9hyaPAHxHxHGayBhR",
  "key9": "AFAHUMZfnEjFxXpJQVLbPvFHZt3zZKAGoaNpVP36hrVK165jt1zTqKQEGSZA7w6fpN2ZrYeQknxtwjNfBUxug6g",
  "key10": "4ZRzsSCRVVhQqDWxvdZ7ft33aXMWxL47dW7ethLN4h2zsfmbhd3awnKZfng5Y1aN8cvLHQ3hG2VnT4MpbDUYAh36",
  "key11": "42yt5XH4CsQ7JDkS7GomzCY2JpJQYBBEzREKGAhnnzg4Rbf2GrMXoigeZif63pdJ5uLoG3NwCpSTdJHZBekbotY",
  "key12": "3TjegDmdtJi6iEzhiBYg3eCTqSxVhyy5biLeizbj6r49Q1W4iskwzyb1tUgUXK11RpbBnNz5tKeEjsfUKp5hfpuL",
  "key13": "4hSX8gEcwS75iD5cNgw7rRnBuCqPgAnGP2eHdJfnXmVwcoBNCKPdXhfgegEzhEZDeWPWXHC86pvvcUkexhgfhWEx",
  "key14": "47C8ueWqBFPkxBrwnpeZrTzJJvQwYyid1x7LwrNq3WXPeACmScfBzfSUNhTPkciEAf9GwKwdPjqVwbLViwRwqHRL",
  "key15": "2878BNidpmnrL9XhiVwF6wVES7oNmiiK4aHMNT43xYKwi29SEpgAbUv3Ge6S4RNxNKtzPDeax5oYFcPUvUqd5NnB",
  "key16": "vekXuBKbukGomJvYtzGbJLij7fLoA8HB7D4wn69ZLheL892LpbSVU4g6zw7UG36md5vuSR5E8xRByj4WSKv3nou",
  "key17": "2YqH9dGMTdRYCcdAyNs3UCnECF5HjyJDNSQFXnqoVmhf4mc6y9mi1hX52YPmRGEocg1wMQjbcbbgXVdWHT8mtvi",
  "key18": "4hREUAgHWLbCFytsrUY9Uko74JiVLfWqENZgVdUj8YLFkLmqPEDf9AuSfKv5DP6S1AV9RPFKPWvvA53JBtcv7Vbz",
  "key19": "3JUZRcz3XLNP6QZo5zKzjkAJwQvF8b9eCsKYxKfC3echFbs2G35yiTXd2metxmqvXCyrSutRhhSVs2yDgXjJH5a2",
  "key20": "2bzNn2uX4ioHVRgNbXxS88cotMW1LtTLn1CoHEXz3jqnxvdBTxsMWWu9VWRTGG23FAqksaeXeNURE4Tf8qZ4BsuT",
  "key21": "2eKdf55bLpt5edAu8xcJZpyWdPn679xfEBtJYRiY9Bia79FBEgJUQmVHWLpKsPDhA37a6Vi6xCANiGpFMnH95mJF",
  "key22": "5nrXnmC1s5hf63JzvpBDYV5GgcNHP2QKLD1VgipN2f37g1XpsoiWMRxEcPicMiD8k377A7vrUumxF93pdyxmn94J",
  "key23": "3MtvQjT9J6vpB9t4vr3YapUQehvjRovGkCb4FJyfN4nvjnMaqXX574CU7aWggJGDg8mkvqZbUuuegEt8umGDNhzf",
  "key24": "3CJjLnsFsyoBF43qLq9wfoiNhevpjLp6kgW7MHD3ZH4PH9MdiAswbAM4JTpUgWwfmyRojCJfqbWkPjQzH2kqn3n8",
  "key25": "jgad62hxe2Ap94M2Pi1qsXzwAVGzBf1bcVt4GSZgKdDfwszW1TM7yRREMPdXmkSTgCCnSnBANz9PvLysgXBMqET",
  "key26": "M4kwWrw9eUb7M3rvXy5EMw7A9dBVfrQfZGju4V1dPBeB2yN94xThywk3b4bgoMidd7SPaqcLfaNd4NMPNi1thTf",
  "key27": "5e5PDkwTZUrSzoukVLCPC2vphsHMG5uMzQk8t5LsQXGKmxjVTJBgLNZeAQzeksFAwGRn8zjyYbtH2RgQgWpj1KJu",
  "key28": "FXVoxnwyuTdGH6G1m1siMQhh7kkQnFC5gtBqdd7E5pSiGd3gRLXGaRuemLaLQU5BfQo9aYWwtgonkeLthwG7mjL",
  "key29": "37QtmwTFj6G3vQFeh9rCGp2VcaabfUXirNSQ4xWH33gtLKHNUwYMGgeAVQAShzwUFdgdvf3833f1XnrcknjHVDSv",
  "key30": "C3AJqrvG1thrNANvmcUaGkgDCJZJKiYNwR62SswD6ZM51H2Fo64Wdr6PcMtrsiue4D71C4DWktUSDFmB7HiynFG",
  "key31": "3R868NygPqHuJRvuzFwPE3dRzcny6cFJ3MQ4NNAkLfuVV39torPu747tAECcWfR58K7x6qCGdtKEZ16wwYAKaWTj",
  "key32": "2VGLhtAQXr66RK6LcwptZDRT1of8D4kpvXrK6AtQUPnGCmVamqBaoWdDH1a777frb8fWCHzT3RVwe5yFCB1uaBGr",
  "key33": "Jzikmeg4NvyNoJQKpQ19ffPNB3jxCNaNbrWMGPcNhzfY7wP4uUBLkX1U2Z5pMBTDkammYenYbwLvcazywa8iMbd"
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
